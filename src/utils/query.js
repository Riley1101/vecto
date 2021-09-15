import { gql } from '@apollo/client'

export const HOmeVector = gql
  `query GetVectors($limit:Int,$tag:[Int]){

    vectors(limit:$limit,where:{premium:false,tags:$tag}){
      name
      id
      image{
        url
      }
    }

    tags{
      id
      name
    }

    premiums{
      name
      id
      profile{
        url
      }
      assert
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

export const GetOnePre = gql
  `query GetOnePremium($id:ID!){
  premium(id:$id){
    name
    profile{
      url
    }
    description
    id
    
  }
  }`;