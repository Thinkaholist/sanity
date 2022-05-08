import {ObjectSchemaType} from '@sanity/field/diff'

export interface LatLng {
  lat: number
  lng: number
}

export interface Geopoint {
  _type: 'geopoint'
  _key?: string
  lat: number
  lng: number
  alt?: number
  placeId?: string
}

export type GeopointSchemaType = ObjectSchemaType<Geopoint>
