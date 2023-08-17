import { Alert } from "react-native-web";
import { API_URL } from "./Config";

export async function fetchPublishableKey () {
    try {
        const response = await fetch(`${API_URL}/config`)
        const publishableKey = await response.json()
        return publishableKey
    } catch (error) {
        console.log(error)
        console.warn('Unable to fetch publishableKey. Is server running?')
        Alert.alert('Error', 'Unable to fetch publishableKey. Is server running?')
    }
}