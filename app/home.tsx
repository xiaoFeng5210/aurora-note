import { View, Text } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'
import { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
const test = () => {
  return (
    <SafeAreaView>
      <Text>Home</Text>
    </SafeAreaView>
  )
}
export default test
