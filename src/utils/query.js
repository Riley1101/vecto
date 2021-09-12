import { gql } from '@apollo/client'

export const HOmeVector = gql
  `query GetVectors{
vectors(limit:8,where:{premium:false}){
  name
  id
  image{
    url
  }
}
}`;

export const IllData = gql
  `query GetVectors{
vectors(limit:20,where:{premium:false}){
  name
  id
  image{
    url
  }
}
}`;