import React, {useState,useEffect} from 'react'
import Paragraph from '../components/Paragraph'
import Background from '../components/Background'
import BackButton from '../components/BackButton'
import Data from '../values.json'


export default function JumpWidthValueScreen({ navigation }){


    return (
        <Background>
            <BackButton goBack={navigation.goBack} />
                <Paragraph>
                    <Paragraph>
                        {Data.map(post => {
                            return(
                                <Paragraph>
                                    <Paragraph>{post.distance_maximale}</Paragraph>
                                    <Paragraph>{post.valeur_du_saut}</Paragraph>
                                </Paragraph>
                            )
                        })}
                    </Paragraph>
                </Paragraph>
        </Background>
    )
}