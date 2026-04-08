import { ImageResponse } from 'next/og'
 
// Route segment config
export const runtime = 'edge'
 
// Image metadata
export const size = {
  width: 32,
  height: 32,
}
export const contentType = 'image/png'
 
// Image generation
export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 22,
          background: '#0B0F19', // Midnight background
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#00F0FF', // Neon Cyan text
          fontWeight: 900,
          fontFamily: 'sans-serif',
          borderRadius: '6px', 
          border: '2px solid #B026FF', // Electric Purple border
        }}
      >
        &gt;_
      </div>
    ),
    { ...size }
  )
}