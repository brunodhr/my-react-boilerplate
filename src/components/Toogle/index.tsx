import React from 'react'
import * as S from './styles'

const Toogle: React.FC = () => {
  // const isLight = theme === 'light'
  return (
    <>
      <S.ToggleContainer>
        <S.Icon viewBox='0 0 512 512'>
          <path
            style={{ fill: '#FFA600' }}
            d='M507.834,301.608l-54.769-48.312l52.832-50.399c1.941-1.852,2.74-4.591,2.099-7.189
	c-0.642-2.597-2.629-4.655-5.211-5.401l-70.316-20.292l25.988-68.056c0.955-2.5,0.495-5.316-1.204-7.389
	c-1.7-2.072-4.383-3.085-7.038-2.657l-72.274,11.652l-5.878-72.561c-0.216-2.666-1.846-5.015-4.275-6.161
	c-2.429-1.146-5.291-0.917-7.504,0.601l-60.266,41.342L263.409,3.742C262.064,1.426,259.579,0,256.889,0
	c-2.69,0-5.174,1.426-6.519,3.742L208.347,76.11l-72.69-41.953c-2.327-1.343-5.197-1.349-7.528-0.018
	c-2.333,1.331-3.773,3.799-3.78,6.473l-0.176,72.795l-72.965-6.014c-2.675-0.22-5.275,0.997-6.807,3.194
	c-1.533,2.197-1.771,5.041-0.622,7.459l31.242,65.835L6.508,209.562c-2.516,0.943-4.335,3.15-4.773,5.789
	c-0.438,2.638,0.575,5.308,2.656,7.003l56.619,46.152l-50.813,52.41c-1.866,1.925-2.559,4.694-1.816,7.264
	c0.744,2.57,2.81,4.55,5.419,5.194l71.055,17.551L61.56,419.936c-0.856,2.535-0.286,5.331,1.494,7.336
	c1.781,2.005,4.502,2.913,7.137,2.382l71.76-14.443l8.721,72.278c0.319,2.655,2.041,4.938,4.513,5.99
	c2.474,1.052,5.323,0.712,7.475-0.891l58.596-43.647l39.055,59.566c1.382,2.179,3.789,3.492,6.367,3.492
	c0.098,0,0.196-0.002,0.295-0.006c2.687-0.104,5.115-1.626,6.368-3.992l34.107-62.405l61.839,38.974
	c2.273,1.432,5.137,1.55,7.522,0.31c2.382-1.24,3.919-3.65,4.03-6.322l3.031-72.734l72.674,8.84c2.664,0.324,5.31-0.791,6.928-2.927
	c1.618-2.137,1.966-4.969,0.914-7.43l-28.636-66.997l69.465-23.003c2.552-0.845,4.456-2.979,4.997-5.599
	C510.752,306.09,509.845,303.383,507.834,301.608z'
          />
          <ellipse
            style={{ fill: '#FFDB2D' }}
            cx='254.35'
            cy='254.691'
            rx='155.069'
            ry='154.949'
          />
          <path
            style={{ fill: '#FFCA00' }}
            d='M254.354,99.743c-3.884,0-7.732,0.147-11.543,0.428c80.25,5.901,143.525,72.825,143.525,154.521
	c0,81.695-63.275,148.619-143.525,154.521c3.811,0.28,7.66,0.428,11.543,0.428c85.641,0,155.068-69.373,155.068-154.948
	C409.422,169.116,339.995,99.743,254.354,99.743z'
          />
        </S.Icon>
        <S.Icon viewBox='-12 0 448 448.04455'>
          <path d='m224.023438 448.03125c85.714843.902344 164.011718-48.488281 200.117187-126.230469-22.722656 9.914063-47.332031 14.769531-72.117187 14.230469-97.15625-.109375-175.890626-78.84375-176-176 .972656-65.71875 37.234374-125.832031 94.910156-157.351562-15.554688-1.980469-31.230469-2.867188-46.910156-2.648438-123.714844 0-224.0000005 100.289062-224.0000005 224 0 123.714844 100.2851565 224 224.0000005 224zm0 0' />
        </S.Icon>
      </S.ToggleContainer>
    </>
  )
}

export default Toogle
