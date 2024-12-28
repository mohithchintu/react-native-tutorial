import { ScrollView, Image, View, Text, TouchableOpacity, Alert } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import images from '@/constants/images'
import icons from '@/constants/icons'
import { login } from '@/lib/appwrite'
import { useGlobalContext } from '@/lib/global-provider'
import { Redirect } from 'expo-router'

const SignIn = () => {
    const { refetch, loading, isLoggedIn } = useGlobalContext();
    if (!loading && isLoggedIn) return <Redirect href='/' />
    const handlelogin = async () => {
        const result = await login();
        if (result) {
            refetch();
        } else {
            Alert.alert('Error', "Falied to login")
        }
    }
    return (
        <SafeAreaView className='bg-white h-screen'>
            <ScrollView contentContainerClassName='h-full'>
                <Image source={images.onboarding} className='w-full h-4/6' resizeMode='contain' />
                <View className='px-10'>
                    <Text className="text-base text-center uppercase font-rubik text-black-200">Welcome to Chintu App</Text>
                    <Text className="text-3xl text-center font-rubik-bold text-black-300 mt-2">Let's Play!!! This is {'\n'}
                        <Text className='text-primary-300'>My ERA</Text>
                    </Text>
                    <Text className='text-lg font-rubik text-black-200 text-center mt-12'>Login to Chintu with GOOGLE</Text>
                    <TouchableOpacity onPress={handlelogin} className='bg-white border border-zinc-100  shadow-md shadow-zinc-300 rounded-full w-full py-4 mt-5'>
                        <View className='flex flex-row items-center justify-center'>
                            <Image source={icons.google} className='w-5 h-5' resizeMode='contain' />
                            <Text className='text-lg font-rubik-medium text-black-300 ml-2'>Continue with GOOGLE</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default SignIn