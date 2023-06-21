import axios from "axios";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { useQuery } from "react-query";



const API_ENDPOINT = 'https://jsonplaceholder.typicode.com/users';


const DataDisplay = () => {

    const { isLoading, isError, data, error } = useQuery('data', async () => {
        const res = await axios.get(API_ENDPOINT);
        return res;
    }
    );

    if (isLoading) {
        return <Text style={{ color: 'white' }}>Loading...</Text>
    }

    if (isError) {
        return <Text style={{ color: 'white' }}>Error: {error.message}</Text>;
    }

    return (
        <View style={{ marginBottom: 65 }}>
            <Text style={{ textAlign: 'center', fontSize: 24, color: 'red' }}>Data:</Text>
            <ScrollView>
                {
                    data?.data.map((item) => {
                        return <View key={item.id} style={{ borderBottomColor: "gray", borderBottomWidth: 1 }} >

                            <Text style={styles.TextMain}>

                                <Text style={{ color: 'aqua' }}>
                                    Id: </Text>  {item.id}
                            </Text>

                            <Text style={styles.TextMain}>

                                <Text style={{ color: '#9ACD32' }}>
                                    <View>This </View>
                                    Name: </Text>  {item.name}
                            </Text>


                            <Text style={styles.TextMain}>

                                <Text style={{ color: '#FFA07A' }}>
                                    User Name: </Text>  {item.username}
                            </Text>



                            <Text style={styles.TextMain}>

                                <Text style={{ color: 'green' }}>
                                    E-mail: </Text>  {item.email}
                            </Text>

                            <Text style={styles.TextMain}>

                                <Text style={{ color: 'tomato' }}>
                                    Website: </Text> {item.website}
                            </Text>

                            <Text style={{
                                color: 'skyblue',
                                marginBottom: 20
                            }}>
                                <Text style={{

                                    color: '#00FF7F'

                                }}>Phone:</Text> {item.phone}
                            </Text>


                        </View>


                    })
                }
            </ScrollView>

        </View>
    );
};

const styles = StyleSheet.create({
    TextMain: {
        color: 'skyblue',

    }
})

export default DataDisplay;