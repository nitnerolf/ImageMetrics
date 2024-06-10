var documenterSearchIndex = {"docs":
[{"location":"ic2024/#The-2024'-Interferometric-Imaging-Contest","page":"The 2024' Interferometric Imaging Contest","title":"The 2024' Interferometric Imaging Contest","text":"","category":"section"},{"location":"ic2024/","page":"The 2024' Interferometric Imaging Contest","title":"The 2024' Interferometric Imaging Contest","text":"For the 2024' Interferometric Imaging Contest held in Japan, the objective of the contest was to reconstruct multi-wavelength images. A metric was thus specifically designed to compare multi-channel images so as to be insensitive to irrelevant differences due to:","category":"page"},{"location":"ic2024/","page":"The 2024' Interferometric Imaging Contest","title":"The 2024' Interferometric Imaging Contest","text":"orientation: image axes may be inverted, notably the E-W axis;\ntranslation: there may be an arbitrary shift between images, the shift is the same in all spectral channels;\npixel size: the size of the pixels used for the restored image is arbitrary even though it should be sufficiently small to account for the highest measured frequencies;\nbrightness: not all entries are normalized according to the channel-wise flux given in OI_FLUX data-block;\nout-of-field values: after all geometric transformations, the fields of view of the reference and reconstructed images may be different, it is assumed that missing pixel values are equal to zero. The same rationale leads to impose that β = 0 in the general rules.","category":"page"},{"location":"ic2024/","page":"The 2024' Interferometric Imaging Contest","title":"The 2024' Interferometric Imaging Contest","text":"In addition, the comparison must take into account that the measurements have limited angular resolution. Thus the reference image Vy is the ground truth image Vz convolved with an effective Point Spread Function (PSF) whose Full Width at Half Maximum (FWHM) chosen to match the interferometric resolution. In the comparison, the restored images are also convolved with a PSF whose FWHM is tuned to best match the reference image Vy.","category":"page"},{"location":"ic2024/","page":"The 2024' Interferometric Imaging Contest","title":"The 2024' Interferometric Imaging Contest","text":"Let MR(rhoVtomega) be the linear operator used to resample an image with a given magnification rho, translation Vt, and blur parameter omega. The magnification rho is the ratio of the output image pixel size over the input image pixel size. The translation Vt may be specified for the input or output pixel grids (as is the most convenient). The blur parameter omega can be specified as the FWHM of the PSF introduced to control the effective resolution of the output image.","category":"page"},{"location":"ic2024/","page":"The 2024' Interferometric Imaging Contest","title":"The 2024' Interferometric Imaging Contest","text":"Using the resampling operator, the reference image is:","category":"page"},{"location":"ic2024/","page":"The 2024' Interferometric Imaging Contest","title":"The 2024' Interferometric Imaging Contest","text":"Vy = MR(rho_mathrmrefboldsymbol0omega_mathrmref) cdot Vz","category":"page"},{"location":"ic2024/","page":"The 2024' Interferometric Imaging Contest","title":"The 2024' Interferometric Imaging Contest","text":"where Vz is the ground truth image. Note that there is no translation between the ground truth image Vz and the reference image Vy.","category":"page"},{"location":"ic2024/","page":"The 2024' Interferometric Imaging Contest","title":"The 2024' Interferometric Imaging Contest","text":"delta_mathrmref = 3mathrmmasmathrmpixel is the pixel size of the image z and omega_mathrmref sim lambda_mathrmmin(2B_mathrmmax) is the FWHM of the objective resolution.","category":"page"},{"location":"ic2024/","page":"The 2024' Interferometric Imaging Contest","title":"The 2024' Interferometric Imaging Contest","text":"The score for a given image x is the sum of the squared differences between the Gamma-corrected images:","category":"page"},{"location":"ic2024/","page":"The 2024' Interferometric Imaging Contest","title":"The 2024' Interferometric Imaging Contest","text":"Score_Gammap(Vx) = frac\n  sumlimits_lambda minlimits_alpha_lambdaVt_lambdaomega_lambda\n  sumlimits_j left(\n      Gammabigl(\n        alpha_lambda\n        MR(rhoVt_lambdaomega_lambda)cdotVx_lambda_j\n      bigr)\n      - Gammabigl(Vy_lambda_jbigr)\n     right)^p\n  \n    sumlimits_lambdaj Gammabigl(Vy_lambda_jbigr)^p\n  ","category":"page"},{"location":"ic2024/","page":"The 2024' Interferometric Imaging Contest","title":"The 2024' Interferometric Imaging Contest","text":"where Vx_lambda is the restored image in the spectral channel indexed by lambda, j is the pixel index and Gamma RealstoReals is a brightness correction function to emphasizes the interesting parts of the images. We have chosen:","category":"page"},{"location":"ic2024/","page":"The 2024' Interferometric Imaging Contest","title":"The 2024' Interferometric Imaging Contest","text":"gdefSignmathrmsign  trick\nGamma(x) = Sign(x)x^gamma  ","category":"page"},{"location":"ic2024/","page":"The 2024' Interferometric Imaging Contest","title":"The 2024' Interferometric Imaging Contest","text":"where Sign(x) is the sign of x:","category":"page"},{"location":"ic2024/","page":"The 2024' Interferometric Imaging Contest","title":"The 2024' Interferometric Imaging Contest","text":"Sign(x) = begincases\n-1  textif x  0\n+1  textif x  0\nphantom+0  textif x = 0\nendcases","category":"page"},{"location":"ic2024/","page":"The 2024' Interferometric Imaging Contest","title":"The 2024' Interferometric Imaging Contest","text":"The sign function is introduced for generality even though restored images are usually nonnegative. The denominator is to normalize the score: 0 is the best possible value and 1 is the score for a black image. The lower the score the better.","category":"page"},{"location":"ic2024/","page":"The 2024' Interferometric Imaging Contest","title":"The 2024' Interferometric Imaging Contest","text":"Because Gamma(alphax) = Gamma(alpha)Gamma(x) (whatever x and alpha), minimizing with respect to alpha_lambda when p = 2 has a closed form solution and the score simplifies to:","category":"page"},{"location":"ic2024/","page":"The 2024' Interferometric Imaging Contest","title":"The 2024' Interferometric Imaging Contest","text":"Score_Gamma2(x) = 1 - frac\n    sumlimits_lambda maxlimits_Vt_lambdaomega_lambda\n    c_lambda(Vt_lambdaomega_lambda)\n  \n    sumlimits_lambdaj Gammabigl(Vy_lambda_jbigr)^2\n   ","category":"page"},{"location":"ic2024/","page":"The 2024' Interferometric Imaging Contest","title":"The 2024' Interferometric Imaging Contest","text":"with:","category":"page"},{"location":"ic2024/","page":"The 2024' Interferometric Imaging Contest","title":"The 2024' Interferometric Imaging Contest","text":"  c_lambda(Vtomega) = frac\n    Bigl\n      sum_j\n      Gammabigl(Vy_lambda_jbigr)\n      Gammabigl(MR(rhoVtomega)cdotVx_lambda_jbigr)\n    Bigr\n  \n    sum_j\n    Gammabigl(MR(rhotomega)cdotVx_lambda_jbigr)^2\n    ","category":"page"},{"location":"ic2024/","page":"The 2024' Interferometric Imaging Contest","title":"The 2024' Interferometric Imaging Contest","text":"which is a normalized correlation between the Gamma-corrected images.","category":"page"},{"location":"ic2024/","page":"The 2024' Interferometric Imaging Contest","title":"The 2024' Interferometric Imaging Contest","text":"To compensate for different pixel sizes, the image Vx or Vy which has the larger pixel size is interpolated so that both images have the same (smallest) pixel size.","category":"page"},{"location":"ic2024/","page":"The 2024' Interferometric Imaging Contest","title":"The 2024' Interferometric Imaging Contest","text":"Separable linear interpolation with a triangle kernel is applied for magnifying and fine shifting the images.","category":"page"},{"location":"ic2024/","page":"The 2024' Interferometric Imaging Contest","title":"The 2024' Interferometric Imaging Contest","text":"The criterion is minimized for a translation between each images (for each spectral channel).","category":"page"},{"location":"ic2024/","page":"The 2024' Interferometric Imaging Contest","title":"The 2024' Interferometric Imaging Contest","text":"In every spectral channel, the brightness of the restored images is scaled so that the total flux per channel is the same as in the reference image.","category":"page"},{"location":"ic2024/","page":"The 2024' Interferometric Imaging Contest","title":"The 2024' Interferometric Imaging Contest","text":"Because the resolution of the reference image may change (see above) the score is the ratio between the sum for all spectral channels of the scores between the restored images and the reference images divided by the sum for all spectral channels of the scores between a zero image and the reference images.","category":"page"},{"location":"general/#General-image-metrics","page":"General image metrics","title":"General image metrics","text":"","category":"section"},{"location":"general/","page":"General image metrics","title":"General image metrics","text":"A general discussion about measuring discrepancy between images with a specific focus on optical interferometry is developed in[Gomes2016]. A proper image metric shall provide a quantitative score suitable to order restored images. This score must reflect the perception by an expert of the fidelity of the images with a given ground truth or reference image. The score shall be insensitive to changes that may be considered as irrelevant for the considered context. For example, image quality indices widely used in the signal processing community are insensitive to an affine transform of the pixel values. For optical interferometry, the pixel size and the field of view of a restored image are, to some extend, free parameters and may thus be different from the pixel size of the ground truth image. Moreover, when only power spectrum and phase closure data (vis2data and t3phi in OI_VIS2 and OI_T3 data-blocks of OI-FITS files) are used to reconstruct an image, the position of the object in the field of view is not constrained by the data and the image metric should not depend on this position.","category":"page"},{"location":"general/","page":"General image metrics","title":"General image metrics","text":"Accounting for all these remarks, a possible definition of the distance between Vy, a reference image, and Vx, a reconstructed image, is given by:","category":"page"},{"location":"general/","page":"General image metrics","title":"General image metrics","text":"beginalign\nDist(VxVy) = min_αβboldsymbolθ Bigl\n  sum_i in MR_boldsymbolθcdotVx cap Vy\n  dleft(α(MR_boldsymbolθcdotVx)_i + β y_iright)\n  notag\n  + sum_i in MR_boldsymbolθcdotVx backslash\n  (MR_boldsymbolθcdotVx cap Vy)\n  dleft(α(MR_boldsymbolθcdotVx)_i + β v_mathrmoutright)\n  notag\n  + sum_i in Vy backslash\n  (MR_boldsymbolθcdotVx cap Vy)\n  dleft(v_mathrmouty_iright)\nBigr\nendalign","category":"page"},{"location":"general/","page":"General image metrics","title":"General image metrics","text":"where d(xy) is some pixel-wise distance, MR_boldsymbolθ is a linear operator which implements resampling with a given magnification, translation, and blurring, and v_mathrmout is the assumed out-of-field pixel value. Here alpha, beta, and boldsymbolθ are nuisance parameters to reduce the mismatch between the images.","category":"page"},{"location":"general/","page":"General image metrics","title":"General image metrics","text":"The score may be defined by normalizing the distance:","category":"page"},{"location":"general/","page":"General image metrics","title":"General image metrics","text":"Score(Vx)\n= fracDist(VxVy)Dist(v_mathrmoutOneVy)","category":"page"},{"location":"general/","page":"General image metrics","title":"General image metrics","text":"where One is an image of the same size as Vy but filled with ones, hencev_mathrmoutOne is an image of the same size as Vy but filled with v_mathrmout the assumed out-of-field pixel value.","category":"page"},{"location":"general/","page":"General image metrics","title":"General image metrics","text":"The following properties are assumed for the pixel-wise distance:","category":"page"},{"location":"general/","page":"General image metrics","title":"General image metrics","text":"d(xx) = 0 for any x in mathbbR;\nd(xy)  0 for any (xy) in mathbbR^2 such that x not= y;\nd(yx) = d(yx) for any (xy) in mathbbR^2.","category":"page"},{"location":"general/","page":"General image metrics","title":"General image metrics","text":"[Gomes2016]: N. Gomes, P. J. V. Garcia & É. Thiébaut, Assessing the quality of restored images in optical long-baseline interferometry in Monthly Notices of the Royal Astronomical Society, vol. 465, pp. 3823-3839 (2016).","category":"page"},{"location":"bc2016/#The-2016'-Interferometric-Beauty-Contest","page":"The 2016' Interferometric Beauty Contest","title":"The 2016' Interferometric Beauty Contest","text":"","category":"section"},{"location":"bc2016/","page":"The 2016' Interferometric Beauty Contest","title":"The 2016' Interferometric Beauty Contest","text":"For the 2016' Interferometric Imaging Beauty Contest[Sanchez2016] held in Edinburgh, the objective of the contest was to reconstruct multi-wavelength images. A metric was thus specifically designed to compare multi-channel images so as to be insensitive to irrelevant differences due to:","category":"page"},{"location":"bc2016/","page":"The 2016' Interferometric Beauty Contest","title":"The 2016' Interferometric Beauty Contest","text":"orientation: image axes may be inverted, notably the E-W axis;\ntranslation: there may be an arbitrary shift between images (possibly a different shift in every spectral channel);\npixel size: the size of the pixels used for the restored image is arbitrary even though it should be sufficiently small to account for the highest measured frequencies;\nbrightness: not all entries are normalized according to the channel-wise flux given in OI_FLUX data-block;\nout-of-field values: after all geometric transformations, the fields of view of the reference and reconstructed images may be different, it is assumed that missing pixel values are equal to zero. The same rationale leads to impose that β = 0 in the general rules.","category":"page"},{"location":"bc2016/","page":"The 2016' Interferometric Beauty Contest","title":"The 2016' Interferometric Beauty Contest","text":"In addition, the comparison must take into account that the measurements have limited angular resolution. Thus the reference image Vy is the ground truth image Vz convolved with an effective Point Spread Function (PSF) whose Full Width at Half Maximum (FWHM) chosen to match the interferometric resolution. In the comparison, the restored images are also convolved with a PSF whose FWHM is tuned to best match the reference image Vy.","category":"page"},{"location":"bc2016/","page":"The 2016' Interferometric Beauty Contest","title":"The 2016' Interferometric Beauty Contest","text":"Let MR(rhoVtomega) be the linear operator used to resample an image with a given magnification rho, translation Vt, and blur parameter omega. The magnification rho is the ratio of the output image pixel size over the input image pixel size. The translation Vt may be specified for the input or output pixel grids (as is the most convenient). The blur parameter omega can be specified as the FWHM of the PSF introduced to control the effective resolution of the output image.","category":"page"},{"location":"bc2016/","page":"The 2016' Interferometric Beauty Contest","title":"The 2016' Interferometric Beauty Contest","text":"Using the resampling operator, the reference image is:","category":"page"},{"location":"bc2016/","page":"The 2016' Interferometric Beauty Contest","title":"The 2016' Interferometric Beauty Contest","text":"Vy = MR(rho_mathrmrefboldsymbol0omega_mathrmref) cdot Vz","category":"page"},{"location":"bc2016/","page":"The 2016' Interferometric Beauty Contest","title":"The 2016' Interferometric Beauty Contest","text":"where Vz is the ground truth image. Note that there is no translation between the ground truth image Vz and the reference image Vy.","category":"page"},{"location":"bc2016/","page":"The 2016' Interferometric Beauty Contest","title":"The 2016' Interferometric Beauty Contest","text":"delta_mathrmref = 3mathrmmasmathrmpixel is the pixel size of the image z and omega_mathrmref sim lambda_mathrmmin(2B_mathrmmax) is the FWHM of the objective resolution.","category":"page"},{"location":"bc2016/","page":"The 2016' Interferometric Beauty Contest","title":"The 2016' Interferometric Beauty Contest","text":"The score for a given image x is the sum of the squared differences between the Gamma-corrected images:","category":"page"},{"location":"bc2016/","page":"The 2016' Interferometric Beauty Contest","title":"The 2016' Interferometric Beauty Contest","text":"Score_Gammap(Vx) = frac\n  sumlimits_lambda minlimits_alpha_lambdaVt_lambdaomega_lambda\n  sumlimits_j left(\n      Gammabigl(\n        alpha_lambda\n        MR(rhoVt_lambdaomega_lambda)cdotVx_lambda_j\n      bigr)\n      - Gammabigl(Vy_lambda_jbigr)\n     right)^p\n  \n    sumlimits_lambdaj Gammabigl(Vy_lambda_jbigr)^p\n  ","category":"page"},{"location":"bc2016/","page":"The 2016' Interferometric Beauty Contest","title":"The 2016' Interferometric Beauty Contest","text":"where Vx_lambda is the restored image in the spectral channel indexed by lambda, j is the pixel index and Gamma RealstoReals is a brightness correction function to emphasizes the interesting parts of the images. We have chosen:","category":"page"},{"location":"bc2016/","page":"The 2016' Interferometric Beauty Contest","title":"The 2016' Interferometric Beauty Contest","text":"gdefSignmathrmsign  trick\nGamma(x) = Sign(x)x^gamma  ","category":"page"},{"location":"bc2016/","page":"The 2016' Interferometric Beauty Contest","title":"The 2016' Interferometric Beauty Contest","text":"where Sign(x) is the sign of x:","category":"page"},{"location":"bc2016/","page":"The 2016' Interferometric Beauty Contest","title":"The 2016' Interferometric Beauty Contest","text":"Sign(x) = begincases\n-1  textif x  0\n+1  textif x  0\nphantom+0  textif x = 0\nendcases","category":"page"},{"location":"bc2016/","page":"The 2016' Interferometric Beauty Contest","title":"The 2016' Interferometric Beauty Contest","text":"The sign function is introduced for generality even though restored images are usually nonnegative. The denominator is to normalize the score: 0 is the best possible value and 1 is the score for a black image. The lower the score the better.","category":"page"},{"location":"bc2016/","page":"The 2016' Interferometric Beauty Contest","title":"The 2016' Interferometric Beauty Contest","text":"Because Gamma(alphax) = Gamma(alpha)Gamma(x) (whatever x and alpha), minimizing with respect to alpha_lambda when p = 2 has a closed form solution and the score simplifies to:","category":"page"},{"location":"bc2016/","page":"The 2016' Interferometric Beauty Contest","title":"The 2016' Interferometric Beauty Contest","text":"Score_Gamma2(x) = 1 - frac\n    sumlimits_lambda maxlimits_Vt_lambdaomega_lambda\n    c_lambda(Vt_lambdaomega_lambda)\n  \n    sumlimits_lambdaj Gammabigl(Vy_lambda_jbigr)^2\n   ","category":"page"},{"location":"bc2016/","page":"The 2016' Interferometric Beauty Contest","title":"The 2016' Interferometric Beauty Contest","text":"with:","category":"page"},{"location":"bc2016/","page":"The 2016' Interferometric Beauty Contest","title":"The 2016' Interferometric Beauty Contest","text":"  c_lambda(Vtomega) = frac\n    Bigl\n      sum_j\n      Gammabigl(Vy_lambda_jbigr)\n      Gammabigl(MR(rhoVtomega)cdotVx_lambda_jbigr)\n    Bigr\n  \n    sum_j\n    Gammabigl(MR(rhotomega)cdotVx_lambda_jbigr)^2\n    ","category":"page"},{"location":"bc2016/","page":"The 2016' Interferometric Beauty Contest","title":"The 2016' Interferometric Beauty Contest","text":"which is a normalized correlation between the Gamma-corrected images.","category":"page"},{"location":"bc2016/","page":"The 2016' Interferometric Beauty Contest","title":"The 2016' Interferometric Beauty Contest","text":"To compensate for different pixel sizes, the image Vx or Vy which has the larger pixel size is interpolated so that both images have the same (smallest) pixel size.","category":"page"},{"location":"bc2016/","page":"The 2016' Interferometric Beauty Contest","title":"The 2016' Interferometric Beauty Contest","text":"Separable linear interpolation with a triangle kernel is applied for magnifying and fine shifting the images.","category":"page"},{"location":"bc2016/","page":"The 2016' Interferometric Beauty Contest","title":"The 2016' Interferometric Beauty Contest","text":"The criterion is minimized for a translation between each images (for each spectral channel).","category":"page"},{"location":"bc2016/","page":"The 2016' Interferometric Beauty Contest","title":"The 2016' Interferometric Beauty Contest","text":"In every spectral channel, the brightness of the restored images is scaled so that the total flux per channel is the same as in the reference image.","category":"page"},{"location":"bc2016/","page":"The 2016' Interferometric Beauty Contest","title":"The 2016' Interferometric Beauty Contest","text":"Because the resolution of the reference image may change (see above) the score is the ratio between the sum for all spectral channels of the scores between the restored images and the reference images divided by the sum for all spectral channels of the scores between a zero image and the reference images.","category":"page"},{"location":"bc2016/","page":"The 2016' Interferometric Beauty Contest","title":"The 2016' Interferometric Beauty Contest","text":"[Sanchez2016]: J. Sanchez-Bermudez, É. Thiébaut, K.-H. Hofmann, M. Heininger, D. Schertl, G. Weigelt, F. Millour, A. Schutz, A. Ferrari, M. Vannier, D. Mary, J. Young & F. Malbet, F., The 2016 interferometric imaging beauty contest in Optical and Infrared Interferometry and Imaging V, SPIE International Conference, 9907, 99071D (2016) doi.","category":"page"},{"location":"#Image-metrics","page":"Image metrics","title":"Image metrics","text":"","category":"section"},{"location":"","page":"Image metrics","title":"Image metrics","text":"The ImageMetrics package provides methods to quantify discrepancy between images. These methods are focused at image reconstruction in optical interferometry.","category":"page"}]
}
