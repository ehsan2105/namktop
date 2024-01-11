import Link from "next/link";
import enamd from '@/public/enamad.png'
import sorosh from '@/public/sorosh.png'
import bale from '@/public/discord.png'
import Image from "next/image";
import aparat from '@/public/aparat.png'
import ita from '@/public/ita.png'
export default function Footer() {
    return (
        <><hr  className=""/>
            <div className=" w-2/3 mx-auto  h-[13.7rem]">
                <div className=" flex  mt-6  pt-6 justify-between ">
                    < div className=" flex ">
                        <svg xmlns="http://www.w3.org/2000/svg" width="166" height="88" viewBox="0 0 166 88" fill="none">
                            <g clip-path="url(#clip0_6980_15714)">
                                <path d="M163.12 3.74536C163.253 3.85588 163.257 4.00416 163.28 4.13116C163.46 5.06065 163.58 6.00079 163.639 6.94572C163.687 7.74013 163.688 8.53665 163.643 9.33123C163.561 10.6101 163.345 11.8616 162.888 13.0643C162.408 14.3164 161.703 15.4127 160.654 16.266C160.376 16.489 160.085 16.6954 159.782 16.8839C156.787 18.7712 153.789 20.6551 150.789 22.5356C147.076 24.8545 143.399 27.2277 139.717 29.594C134.823 32.7385 129.924 35.8743 125.018 39.0015C124.907 39.0701 124.807 39.182 124.656 39.1573C124.543 39.0811 124.557 38.9644 124.547 38.858C124.441 37.7104 124.418 36.5566 124.478 35.4057C124.559 33.6209 124.813 31.858 125.364 30.1493C125.75 28.9535 126.274 27.8263 127.022 26.8103C127.331 26.3909 127.678 26.0003 128.058 25.6433C128.349 25.3722 128.668 25.1318 129.008 24.9259C131.163 23.61 133.258 22.2006 135.393 20.8524C139.163 18.4726 142.942 16.1068 146.732 13.7549C152.041 10.4731 157.36 7.20658 162.691 3.95542C162.829 3.86961 162.957 3.76252 163.12 3.74536Z" fill="#00A693" />
                                <path d="M74.4025 70.2068C74.5398 70.2604 74.6579 70.3002 74.7698 70.3476C75.542 70.675 76.3541 70.7897 77.1841 70.7677C78.4884 70.7334 79.7385 70.4451 80.9487 69.9714C81.1521 69.8887 81.3496 69.7921 81.5398 69.6824C86.1621 67.0966 90.7844 64.5109 95.4066 61.9252C97.0487 61.0115 98.7141 60.1403 100.373 59.2562C105.448 56.556 110.524 53.8579 115.601 51.1619C116.197 50.8447 116.81 50.5825 117.479 50.4514C118.359 50.2793 119.269 50.3505 120.112 50.6573C120.667 50.8581 121.196 51.1264 121.686 51.4564C121.995 51.6623 122.297 51.8758 122.606 52.0797C122.766 52.1854 122.932 52.2857 123.101 52.3728C123.31 52.4804 123.542 52.5335 123.776 52.5273C124.095 52.5265 124.403 52.405 124.636 52.187C124.87 51.969 125.012 51.6707 125.035 51.3521C125.055 51.0926 125.04 50.831 125.044 50.5702C125.049 49.815 125.159 49.0643 125.369 48.3391C125.519 47.8243 125.748 47.3362 126.049 46.8927C126.274 46.5636 126.566 46.2857 126.906 46.0772C131.678 43.1253 136.449 40.1712 141.219 37.2147C141.498 37.0424 141.798 36.9024 142.091 36.7527C142.162 36.7229 142.235 36.6999 142.31 36.6841C142.443 36.7527 142.447 36.866 142.467 36.9724C142.734 38.2689 143.338 39.4723 144.217 40.4615C145.097 41.4507 146.222 42.1909 147.478 42.6077C147.582 42.6427 147.684 42.6798 147.786 42.721C147.808 42.7299 147.822 42.7601 147.858 42.8013C147.798 42.8684 147.731 42.93 147.66 42.9853C147.327 43.2029 146.99 43.415 146.653 43.6264C141.703 46.7348 136.753 49.8432 131.803 52.9515C130.384 53.8412 128.966 54.7286 127.547 55.6137C127.478 55.657 127.41 55.7009 127.341 55.7455C126.935 56.0098 126.756 56.3826 126.792 56.8645C126.802 57.0327 126.849 57.1966 126.93 57.3445C127.011 57.4923 127.124 57.6206 127.26 57.72C127.396 57.8194 127.552 57.8876 127.717 57.9198C127.883 57.9519 128.053 57.9471 128.217 57.9059C128.401 57.8508 128.577 57.775 128.744 57.68C129.546 57.2571 130.392 56.9261 131.268 56.6935C132.186 56.4518 133.135 56.3516 134.083 56.3963C134.577 56.4133 135.067 56.49 135.543 56.6249C135.74 56.6839 135.938 56.7423 136.137 56.7903C137.395 57.0951 138.322 57.8393 138.988 58.9294C139.468 59.7223 139.776 60.5865 139.984 61.4865C140.252 62.6219 140.395 63.7828 140.413 64.9491C140.425 65.9637 140.435 66.9811 140.378 67.9936C140.313 69.1421 140.225 70.2947 140.053 71.4308C139.689 73.8335 138.651 75.9177 136.925 77.6428C136.25 78.3308 135.442 78.8741 134.55 79.2395C133.228 79.7715 131.903 79.7695 130.573 79.2793C129.866 79.0124 129.2 78.6455 128.597 78.1899C128.173 77.8755 127.838 77.478 127.533 77.0517C127.053 76.3783 126.683 75.6444 126.355 74.8879C125.877 73.7641 125.468 72.6126 125.128 71.4398C124.707 70.0208 124.3 68.5977 123.88 67.1781C123.585 66.1499 123.233 65.1387 122.826 64.1494C122.473 63.3125 122.066 62.5059 121.482 61.8002C121.174 61.413 120.8 61.0824 120.378 60.8234C119.906 60.5382 119.37 60.3769 118.82 60.3545C117.78 60.3113 116.766 60.463 115.769 60.7355C114.92 60.9624 114.091 61.2541 113.287 61.608C113.036 61.7177 112.792 61.8443 112.558 61.987C107.47 65.1585 102.349 68.2767 97.1949 71.3416C93.7625 73.3763 90.3075 75.3815 86.7982 77.2872C85.0738 78.2235 83.3397 79.1407 81.5522 79.9521C80.6494 80.364 79.7172 80.6894 78.7342 80.8356C78.0106 80.9434 77.2857 80.955 76.5759 80.7148C75.9416 80.51 75.4084 80.0727 75.0835 79.4908C74.7595 78.9237 74.5748 78.3087 74.4656 77.6702C74.2666 76.517 74.2357 75.3527 74.2549 74.1857C74.2734 73.0331 74.2885 71.8812 74.3084 70.7293C74.3112 70.57 74.2782 70.4018 74.4025 70.2068ZM127.149 68.4158C127.213 68.5072 127.282 68.5947 127.355 68.6781C127.721 69.0481 128.082 69.4243 128.464 69.7764C128.966 70.2441 129.521 70.6523 130.117 70.9929C130.698 71.3328 131.332 71.5732 131.992 71.7041C133.002 71.8956 133.988 71.7796 134.944 71.4398C135.307 71.3166 135.658 71.1587 135.991 70.9682C136.777 70.5027 137.204 69.8011 137.256 68.8819C137.325 67.6593 136.895 66.6269 136.053 65.7564C135.389 65.0699 134.58 64.851 133.65 65.0329C132.992 65.1704 132.352 65.3851 131.745 65.6727C130.179 66.3845 128.724 67.2893 127.317 68.2689C127.258 68.3145 127.202 68.3636 127.149 68.4158Z" fill="#00A693" />
                                <path d="M83.5321 21.5052C83.5973 21.6631 83.5733 21.8155 83.574 21.9638C83.574 22.8692 83.574 23.7747 83.574 24.6801V49.3329C83.574 49.7029 83.5658 50.0736 83.574 50.4437C83.5778 50.9253 83.6759 51.4016 83.863 51.8454C84.117 52.4392 84.5206 52.8958 85.1481 53.0983C85.8298 53.3179 86.5032 53.287 87.1272 52.8985C88.8393 51.8317 90.5417 50.7498 92.2593 49.6926C94.257 48.4625 96.2725 47.2611 98.3408 46.1511C99.1392 45.7227 99.9431 45.3074 100.794 44.991C101.475 44.7326 102.185 44.561 102.909 44.4802C103.457 44.4214 104.012 44.4838 104.534 44.6628C105.059 44.8376 105.514 45.1779 105.83 45.6328C106.167 46.1134 106.379 46.6447 106.529 47.2028C106.729 47.959 106.849 48.7342 106.886 49.5155C106.899 49.775 106.929 50.0345 106.945 50.2947C106.986 50.9125 106.876 51.5255 106.853 52.1413C106.843 52.374 106.8 52.6054 106.793 52.8381C106.787 53.0708 106.678 53.2108 106.474 53.3186C105.9 53.6124 105.333 53.922 104.765 54.2261C101.461 55.9911 98.1424 57.7272 94.8583 59.5292C91.7547 61.231 88.6409 62.9156 85.5819 64.6977C84.1712 65.5215 82.7406 66.3082 81.31 67.0949C80.2679 67.6681 79.1469 68.0319 77.9813 68.255C77.5072 68.3405 77.0228 68.3521 76.5452 68.2893C76.2558 68.2617 75.9769 68.1669 75.7308 68.0123C75.4846 67.8577 75.2781 67.6476 75.1276 67.399C74.8736 66.9981 74.7328 66.5567 74.634 66.0981C74.4603 65.2894 74.4226 64.4677 74.4219 63.6439C74.4219 60.5841 74.4219 57.5247 74.4219 54.4657C74.4324 48.4023 74.445 42.3384 74.4596 36.2741C74.4633 34.7377 74.4667 33.2014 74.4699 31.6651C74.4699 30.8083 74.6244 29.9736 74.829 29.1477C74.8869 28.9361 74.9658 28.7307 75.0644 28.5347C75.5642 27.4872 76.2507 26.5659 77.0531 25.7298C78.0004 24.7538 79.0618 23.8954 80.2144 23.1733C81.1403 22.583 82.1073 22.0597 83.1079 21.6075C83.2082 21.5641 83.3106 21.5258 83.4147 21.4928C83.4374 21.4818 83.4669 21.4956 83.5321 21.5052Z" fill="#00A693" />
                                <path d="M40.4029 68.0656C40.3569 67.9283 40.2306 67.9002 40.1132 67.8658C39.4954 67.6867 38.8776 67.4951 38.2549 67.3338C36.8449 66.9693 35.4088 66.7421 33.9631 66.5787C33.3912 66.5148 32.8132 66.5059 32.2393 66.4537C31.2391 66.3638 30.2369 66.3782 29.236 66.3981C28.4685 66.4139 27.7024 66.4771 26.9349 66.5176C25.9889 66.5677 25.0498 66.6858 24.1128 66.8176C23.2581 66.9384 22.4062 67.0832 21.5577 67.2439C19.9121 67.5492 18.2875 67.958 16.6934 68.4679C16.4841 68.5356 16.2605 68.5458 16.046 68.4974C14.9724 68.275 13.8966 68.058 12.8196 67.8391C12.4701 67.7704 12.12 67.7018 11.772 67.6235C11.6677 67.6009 11.5661 67.5604 11.4535 67.524C11.4288 67.2089 11.5345 66.9405 11.6594 66.6858C11.6972 66.6075 11.8352 66.5629 11.934 66.5313C12.4049 66.3858 12.8781 66.2457 13.3536 66.1112C15.0156 65.6403 16.694 65.2311 18.391 64.9064C19.764 64.6442 21.1431 64.4094 22.538 64.2852C23.2348 64.2227 23.9302 64.1534 24.627 64.0936C24.9139 64.0696 25.2022 64.0552 25.4899 64.047C26.6287 64.014 27.7676 64.0106 28.9058 64.047C29.7694 64.0765 30.6289 64.1609 31.4869 64.2687C32.2359 64.3627 32.9814 64.4746 33.7201 64.6236C36.2655 65.1343 38.697 65.9581 40.9459 67.2755C41.7089 67.7145 42.4279 68.2258 43.0932 68.8022C43.1413 68.8447 43.1969 68.8798 43.2806 68.9395C43.2998 68.8805 43.3132 68.8198 43.3204 68.7583C43.3012 67.3167 43.5683 65.9217 43.9499 64.544C44.6934 61.8605 45.9359 59.4119 47.4833 57.1094C48.9935 54.8564 50.7783 52.8279 52.7375 50.9565C55.248 48.5628 57.9925 46.4683 60.8991 44.5812C61.3364 44.2977 61.7826 44.0272 62.2171 43.7403C62.386 43.6291 62.5377 43.6146 62.7141 43.7142C62.8906 43.8137 63.0766 43.8995 63.2413 43.9819C63.2901 44.1686 63.1857 44.2743 63.1205 44.389C62.6748 45.1757 62.2251 45.9615 61.7716 46.7463C61.5052 47.2104 61.2355 47.6724 60.976 48.1399C60.8623 48.343 60.6964 48.512 60.4954 48.6294C57.0151 50.7587 53.8326 53.3401 51.031 56.3062C49.1953 58.2462 47.5684 60.3455 46.2112 62.6493C45.6121 63.6654 45.0763 64.7174 44.6069 65.7995C44.563 65.8998 44.528 66.0055 44.4888 66.1071C44.4511 66.1496 44.4126 66.1908 44.3749 66.2327L44.3872 66.2952C44.3872 66.2732 44.3817 66.2519 44.3797 66.23C44.4346 66.2004 44.4964 66.1757 44.4799 66.0927C44.6172 66.0295 44.6557 65.8867 44.7154 65.7686C45.4635 64.3017 46.3181 62.8915 47.2725 61.5496C48.8612 59.3089 50.6567 57.2222 52.6353 55.317C55.5027 52.5347 58.666 50.1327 62.0531 48.0191C64.3375 46.5995 66.7023 45.3134 69.1354 44.1673C69.1608 44.1569 69.1853 44.1448 69.2089 44.1309C69.4375 43.9798 69.6407 44.0114 69.8391 44.1995C69.9963 44.3457 70.1974 44.4446 70.3258 44.5984C70.2928 44.7837 70.1693 44.8606 70.0752 44.9546C69.4167 45.6155 68.7565 46.275 68.0947 46.9331C67.3458 47.6779 66.5934 48.42 65.8479 49.1682C65.6828 49.3326 65.4928 49.47 65.285 49.5753C61.6274 51.4718 58.1694 53.7306 54.9631 56.3179C53.1293 57.7841 51.4193 59.3987 49.8502 61.1452C49.1161 61.961 48.4286 62.8175 47.7908 63.7106C47.5892 63.9878 47.353 64.2381 47.0878 64.4554C46.376 65.0588 45.6764 65.676 44.968 66.2828C44.7373 66.4785 44.5524 66.7224 44.4264 66.9974C44.2527 67.3702 44.066 67.7368 43.8868 68.1068C43.8419 68.1796 43.8249 68.2661 43.8387 68.3505C43.9939 68.3162 44.0447 68.194 44.1209 68.1054C45.2302 66.7949 46.4041 65.5449 47.6219 64.3394C52.4829 59.5341 57.8889 55.4619 63.8832 52.1723C66.3495 50.8199 68.9002 49.6275 71.5196 48.6026C71.6342 48.5573 71.7516 48.5181 71.8697 48.4825C71.9093 48.4769 71.9495 48.4769 71.9891 48.4825C72.0921 48.5854 72.0715 48.7138 72.0701 48.8332C72.0653 49.2451 72.0461 49.657 72.0489 50.0689C72.0489 50.2694 71.9871 50.4121 71.8058 50.5028C71.7221 50.5453 71.6473 50.6057 71.4942 50.7087L72.0029 50.6613C72.0225 50.7453 72.0372 50.8303 72.0468 50.916C72.0907 51.9052 72.0543 54.2729 71.9891 54.6305C71.8161 54.7548 71.5951 54.7864 71.3878 54.8468C70.5571 55.0877 69.7238 55.3156 68.8945 55.5607C66.7746 56.1868 64.6834 56.8961 62.6208 57.6888C59.257 58.9808 56.0381 60.5761 52.9236 62.3829C50.9983 63.4959 49.1335 64.7104 47.337 66.0213C46.1851 66.8636 45.0682 67.7519 43.9733 68.6683C43.8573 68.7651 43.7413 68.8619 43.6239 68.956C43.4769 69.0817 43.2976 69.1636 43.1063 69.1921C42.8523 69.2251 42.6058 69.2923 42.3511 69.3246C41.767 69.3981 41.1883 69.5161 40.6089 69.6232C37.5346 70.1998 34.5073 71.0029 31.5515 72.0259C27.7221 73.341 24.0098 74.9753 20.4539 76.9115C17.0573 78.7416 13.8154 80.845 10.7601 83.2011C10.1423 83.6816 9.54712 84.1875 8.94096 84.6825L8.61763 84.9461C8.2943 84.8424 8.0252 84.6488 7.73482 84.5006C7.43003 84.3447 7.1369 84.1656 6.83897 83.9953C6.55339 83.8319 6.26828 83.6674 5.98362 83.5017C5.70216 83.3363 5.39805 83.2059 5.15229 82.9965C5.15229 82.8159 5.28959 82.7446 5.38501 82.6581C6.13258 81.9915 6.87398 81.3174 7.63872 80.6714C8.60322 79.8565 9.62401 79.1124 10.6633 78.3943C10.7711 78.3202 10.9201 78.279 10.9379 78.1156C10.9633 78.1156 10.9874 78.1088 11.0121 78.1046L10.9434 78.1225C10.029 78.371 9.13798 78.6909 8.25311 79.028C7.12523 79.457 6.0049 79.9067 4.88113 80.3474L4.35461 80.5533C4.14425 80.4535 3.95999 80.3062 3.81641 80.1229C3.90908 79.9451 4.05668 79.8888 4.18024 79.8078C6.16644 78.5077 8.22711 77.3252 10.3517 76.2663C14.1736 74.366 18.1683 72.8351 22.2813 71.6943C24.3036 71.13 26.3432 70.6447 28.4074 70.2651C29.5126 70.0591 30.6254 69.9006 31.7348 69.7159C33.035 69.5038 34.3434 69.3816 35.6559 69.2518C36.1468 69.2031 36.641 69.1832 37.1332 69.1461C37.3635 69.1287 37.5926 69.0992 37.8197 69.0576C36.8066 68.893 35.7843 68.7913 34.7587 68.7528C33.4819 68.7054 32.2057 68.7329 30.9316 68.7967C30.3138 68.8269 29.7007 68.8949 29.0877 68.9608C27.6962 69.1111 26.3143 69.3273 24.94 69.593C23.1611 69.9363 21.4017 70.3594 19.6617 70.8623C18.0265 71.3319 16.4092 71.8577 14.8193 72.4659C14.7541 72.4871 14.6902 72.5118 14.6277 72.5401C14.1129 72.805 13.5534 72.8455 12.9912 72.8833C12.1969 72.9334 11.4027 72.9876 10.6091 73.0398C9.65719 73.1039 8.7007 73.1661 7.73963 73.2265C7.59204 73.2355 7.44376 73.2265 7.28106 73.2265C7.18564 72.8895 7.23919 72.5806 7.29479 72.2751C7.3044 72.2208 7.37648 72.1687 7.43209 72.133C7.50389 72.0929 7.57871 72.0585 7.65588 72.03C11.1372 70.5018 14.7429 69.2745 18.4336 68.3615C19.8587 68.0127 21.296 67.7212 22.7453 67.4869C23.911 67.2988 25.0801 67.1459 26.2526 67.0283C28.3024 66.8338 30.3631 66.7774 32.4206 66.8595C33.8051 66.9118 35.1856 67.0406 36.5559 67.2453C37.709 67.414 38.8528 67.6413 39.9828 67.9262C40.1276 67.9626 40.2663 68.021 40.4098 68.069C40.4496 68.069 40.488 68.069 40.5258 68.069H40.5642C40.5485 68.058 40.5313 68.0368 40.5169 68.0388C40.4782 68.0446 40.4401 68.0536 40.4029 68.0656ZM51.6817 61.0395C51.69 61.0436 51.7017 61.0525 51.7058 61.0505C51.7155 61.0441 51.723 61.0347 51.7271 61.0237C51.7288 61.0133 51.7288 61.0026 51.7271 60.9921L51.6817 61.0395Z" fill="#00A693" />
                                <path d="M85.9847 39.1582C85.9161 35.8912 88.662 33.0053 92.1184 32.9922C95.2433 32.9812 98.2775 35.469 98.285 39.1369C98.2926 42.6812 95.4265 45.3021 92.1397 45.3015C88.5034 45.3001 85.9161 42.2741 85.9847 39.1582Z" fill="#00A693" />
                                <path d="M85.986 23.9449C85.9112 20.8914 88.4278 17.803 92.1348 17.7982C92.9444 17.7939 93.7469 17.9503 94.4956 18.2584C95.2444 18.5664 95.9246 19.02 96.4968 19.5928C97.069 20.1656 97.5219 20.8462 97.8292 21.5953C98.1365 22.3443 98.2921 23.1469 98.287 23.9566C98.2822 27.6141 95.2617 30.1129 92.1259 30.1054C88.6639 30.0971 85.9125 27.2016 85.986 23.9449Z" fill="#00A693" />
                                <path d="M149.811 40.6188C147.134 40.6071 144.687 38.5024 144.685 35.4743C144.685 32.6199 146.933 30.3394 149.819 30.3408C152.904 30.3408 154.987 32.8554 154.967 35.5018C154.957 36.8625 154.409 38.1641 153.444 39.1226C152.478 40.0812 151.172 40.619 149.811 40.6188Z" fill="#00A693" />
                                <path d="M46.442 82.1356C43.9707 82.2234 41.314 80.1757 41.2989 77.0254C41.2955 76.3475 41.4267 75.6756 41.6849 75.0488C41.9431 74.4219 42.3231 73.8525 42.803 73.3736C43.2829 72.8947 43.853 72.5158 44.4804 72.2589C45.1077 72.002 45.7798 71.8721 46.4578 71.8768C49.2105 71.8851 51.5906 74.0674 51.5782 77.0213C51.5652 80.2896 48.811 82.2269 46.442 82.1356Z" fill="#00A693" />
                            </g>
                            <defs>
                                <clipPath id="clip0_6980_15714">
                                    <rect width="165.979" height="87.2527" fill="white" transform="translate(0.0214844)" />
                                </clipPath>
                            </defs>
                        </svg>
                        
                                               
                    </div>
                    <div className=" mx-auto my-auto h-[3.75rem]  bg-stone-50 w-0.5"></div>
                    <div className="  flex mx-auto">
                        <div>
                            <div className=" flex justify-center my-auto">
                                <svg className=" my-auto" width="33" height="33" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M23.2777 30.9599C21.7711 30.9599 20.1844 30.5999 18.5444 29.9065C16.9444 29.2265 15.3311 28.2932 13.7577 27.1599C12.1977 26.0132 10.6911 24.7332 9.2644 23.3332C7.85107 21.9065 6.57107 20.3999 5.43773 18.8532C4.29107 17.2532 3.37107 15.6532 2.71773 14.1065C2.0244 12.4532 1.67773 10.8532 1.67773 9.34655C1.67773 8.30655 1.8644 7.31988 2.2244 6.39988C2.59773 5.45321 3.19773 4.57321 4.01107 3.81321C5.03773 2.79988 6.21107 2.29321 7.4644 2.29321C7.9844 2.29321 8.51773 2.41321 8.97107 2.62655C9.49107 2.86655 9.93107 3.22655 10.2511 3.70655L13.3444 8.06655C13.6244 8.45321 13.8377 8.82655 13.9844 9.19988C14.1577 9.59988 14.2511 9.99988 14.2511 10.3865C14.2511 10.8932 14.1044 11.3865 13.8244 11.8532C13.6244 12.2132 13.3177 12.5999 12.9311 12.9865L12.0244 13.9332C12.0377 13.9732 12.0511 13.9999 12.0644 14.0265C12.2244 14.3065 12.5444 14.7865 13.1577 15.5065C13.8111 16.2532 14.4244 16.9332 15.0377 17.5599C15.8244 18.3332 16.4777 18.9465 17.0911 19.4532C17.8511 20.0932 18.3444 20.4132 18.6377 20.5599L18.6111 20.6265L19.5844 19.6665C19.9977 19.2532 20.3977 18.9465 20.7844 18.7465C21.5177 18.2932 22.4511 18.2132 23.3844 18.5999C23.7311 18.7465 24.1044 18.9465 24.5044 19.2265L28.9311 22.3732C29.4244 22.7065 29.7844 23.1332 29.9977 23.6399C30.1977 24.1465 30.2911 24.6132 30.2911 25.0799C30.2911 25.7199 30.1444 26.3599 29.8644 26.9599C29.5844 27.5599 29.2377 28.0799 28.7977 28.5599C28.0377 29.3999 27.2111 29.9999 26.2511 30.3865C25.3311 30.7599 24.3311 30.9599 23.2777 30.9599ZM7.4644 4.29321C6.73107 4.29321 6.05107 4.61321 5.39773 5.25321C4.7844 5.82655 4.35773 6.45321 4.09107 7.13321C3.81107 7.82655 3.67773 8.55988 3.67773 9.34655C3.67773 10.5865 3.97107 11.9332 4.55773 13.3199C5.15773 14.7332 5.99773 16.1999 7.0644 17.6665C8.13107 19.1332 9.3444 20.5599 10.6777 21.9065C12.0111 23.2265 13.4511 24.4532 14.9311 25.5332C16.3711 26.5865 17.8511 27.4399 19.3177 28.0532C21.5977 29.0265 23.7311 29.2532 25.4911 28.5199C26.1711 28.2399 26.7711 27.8132 27.3177 27.1999C27.6244 26.8665 27.8644 26.5065 28.0644 26.0799C28.2244 25.7465 28.3044 25.3999 28.3044 25.0532C28.3044 24.8399 28.2644 24.6265 28.1577 24.3865C28.1177 24.3065 28.0377 24.1599 27.7844 23.9865L23.3577 20.8399C23.0911 20.6532 22.8511 20.5199 22.6244 20.4265C22.3311 20.3065 22.2111 20.1865 21.7577 20.4665C21.4911 20.5999 21.2511 20.7999 20.9844 21.0665L19.9711 22.0665C19.4511 22.5732 18.6511 22.6932 18.0377 22.4665L17.6777 22.3065C17.1311 22.0132 16.4911 21.5599 15.7844 20.9599C15.1444 20.4132 14.4511 19.7732 13.6111 18.9465C12.9577 18.2799 12.3044 17.5732 11.6244 16.7865C10.9977 16.0532 10.5444 15.4265 10.2644 14.9065L10.1044 14.5065C10.0244 14.1999 9.99773 14.0265 9.99773 13.8399C9.99773 13.3599 10.1711 12.9332 10.5044 12.5999L11.5044 11.5599C11.7711 11.2932 11.9711 11.0399 12.1044 10.8132C12.2111 10.6399 12.2511 10.4932 12.2511 10.3599C12.2511 10.2532 12.2111 10.0932 12.1444 9.93321C12.0511 9.71988 11.9044 9.47988 11.7177 9.22655L8.6244 4.85321C8.49107 4.66655 8.33107 4.53321 8.13107 4.43988C7.91773 4.34655 7.69107 4.29321 7.4644 4.29321ZM18.6111 20.6399L18.3977 21.5465L18.7577 20.6132C18.6911 20.5999 18.6377 20.6132 18.6111 20.6399Z" fill="#CCCCCC" />
                                </svg>
                                <h1 className=" font-normal text-sm text-[#555] my-auto">09129528645</h1>
                            </div>
                            <div className=" flex"><svg className=" my-auto" width="33" height="33" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M2.67773 16.6264C2.67773 11.5981 2.67773 9.08391 4.23983 7.52181C5.80193 5.95972 8.31609 5.95972 13.3444 5.95972H18.6777C23.706 5.95972 26.2202 5.95972 27.7823 7.52181C29.3444 9.08391 29.3444 11.5981 29.3444 16.6264C29.3444 21.6547 29.3444 24.1689 27.7823 25.731C26.2202 27.293 23.706 27.293 18.6777 27.293H13.3444C8.31609 27.293 5.80193 27.293 4.23983 25.731C2.67773 24.1689 2.67773 21.6547 2.67773 16.6264Z" stroke="#CCCCCC" stroke-width="2" />
                                <path d="M8.01074 11.2932L10.8893 13.692C13.3381 15.7327 14.5625 16.753 16.0107 16.753C17.4589 16.753 18.6834 15.7327 21.1322 13.692L24.0107 11.2932" stroke="#CCCCCC" stroke-width="2" stroke-linecap="round" />
                            </svg>
                                <h1 className=" font-normal text-sm text-[#555] my-auto">tmnt20032105@yahoo.com</h1>
                            </div>
                        </div>
                        

                    </div>
                    <div className=" mx-auto my-auto h-[3.75rem] bg-stone-50 w-0.5"></div>
                    <div>
                        <div className=" flex  mx-2  my-auto justify-center items-center   ">
                            <Link href={'#'} className="">
                                <svg className=" mt-6 w-8 h-8 ml-4  " width="32" height="33" viewBox="0 0 32 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect x="2" y="2.62646" width="28" height="28" rx="6" fill="url(#paint0_radial_6980_15694)" />
                                    <rect x="2" y="2.62646" width="28" height="28" rx="6" fill="url(#paint1_radial_6980_15694)" />
                                    <rect x="2" y="2.62646" width="28" height="28" rx="6" fill="#4FB5A4" />
                                    <path d="M23 11.1265C23 11.9549 22.3284 12.6265 21.5 12.6265C20.6716 12.6265 20 11.9549 20 11.1265C20 10.298 20.6716 9.62646 21.5 9.62646C22.3284 9.62646 23 10.298 23 11.1265Z" fill="white" />
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M16 21.6265C18.7614 21.6265 21 19.3879 21 16.6265C21 13.865 18.7614 11.6265 16 11.6265C13.2386 11.6265 11 13.865 11 16.6265C11 19.3879 13.2386 21.6265 16 21.6265ZM16 19.6265C17.6569 19.6265 19 18.2833 19 16.6265C19 14.9696 17.6569 13.6265 16 13.6265C14.3431 13.6265 13 14.9696 13 16.6265C13 18.2833 14.3431 19.6265 16 19.6265Z" fill="white" />
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M6 16.2265C6 12.8661 6 11.186 6.65396 9.90252C7.2292 8.77355 8.14708 7.85567 9.27606 7.28043C10.5595 6.62646 12.2397 6.62646 15.6 6.62646H16.4C19.7603 6.62646 21.4405 6.62646 22.7239 7.28043C23.8529 7.85567 24.7708 8.77355 25.346 9.90252C26 11.186 26 12.8661 26 16.2265V17.0265C26 20.3868 26 22.0669 25.346 23.3504C24.7708 24.4794 23.8529 25.3973 22.7239 25.9725C21.4405 26.6265 19.7603 26.6265 16.4 26.6265H15.6C12.2397 26.6265 10.5595 26.6265 9.27606 25.9725C8.14708 25.3973 7.2292 24.4794 6.65396 23.3504C6 22.0669 6 20.3868 6 17.0265V16.2265ZM15.6 8.62646H16.4C18.1132 8.62646 19.2777 8.62802 20.1779 8.70157C21.0548 8.77321 21.5032 8.90306 21.816 9.06244C22.5686 9.44593 23.1805 10.0579 23.564 10.8105C23.7234 11.1233 23.8533 11.5717 23.9249 12.4485C23.9984 13.3487 24 14.5133 24 16.2265V17.0265C24 18.7396 23.9984 19.9042 23.9249 20.8044C23.8533 21.6812 23.7234 22.1296 23.564 22.4424C23.1805 23.1951 22.5686 23.807 21.816 24.1905C21.5032 24.3499 21.0548 24.4797 20.1779 24.5514C19.2777 24.6249 18.1132 24.6265 16.4 24.6265H15.6C13.8868 24.6265 12.7223 24.6249 11.8221 24.5514C10.9452 24.4797 10.4968 24.3499 10.184 24.1905C9.43139 23.807 8.81947 23.1951 8.43597 22.4424C8.27659 22.1296 8.14674 21.6812 8.0751 20.8044C8.00156 19.9042 8 18.7396 8 17.0265V16.2265C8 14.5133 8.00156 13.3487 8.0751 12.4485C8.14674 11.5717 8.27659 11.1233 8.43597 10.8105C8.81947 10.0579 9.43139 9.44593 10.184 9.06244C10.4968 8.90306 10.9452 8.77321 11.8221 8.70157C12.7223 8.62802 13.8868 8.62646 15.6 8.62646Z" fill="white" />
                                    <defs>
                                        <radialGradient id="paint0_radial_6980_15694" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(12 23.6265) rotate(-55.3758) scale(25.5196)">
                                            <stop stop-color="#B13589" />
                                            <stop offset="0.79309" stop-color="#C62F94" />
                                            <stop offset="1" stop-color="#8A3AC8" />
                                        </radialGradient>
                                        <radialGradient id="paint1_radial_6980_15694" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(11 31.6265) rotate(-65.1363) scale(22.5942)">
                                            <stop stop-color="#E0E8B7" />
                                            <stop offset="0.444662" stop-color="#FB8A2E" />
                                            <stop offset="0.71474" stop-color="#E2425C" />
                                            <stop offset="1" stop-color="#E2425C" stop-opacity="0" />
                                        </radialGradient>
                                    </defs>
                                </svg>
                            </Link>
                            <Link href={'#'}>
                            <Image src={sorosh} alt="sorosh " className=" w-8 ml-4 mt-6 h-8"/>

                            </Link>
                            <Link href={'#'}>
                            <Image src={bale}  alt="sorosh " className=" w-8 ml-4 mt-6 h-8"/>
                            </Link>
                            <Link href={'#'}>
                            <Image src={ita}  alt="sorosh " className=" w-8 ml-4 mt-6 h-8"/>
                            </Link>
                            <Link href={'#'}>
                            <Image src={aparat} alt="sorosh " className=" w-8 ml-4 mt-6 h-8"/>
                            </Link>
                        </div>
                    </div>

                </div>
                <div className=" px-4 rounded-2xl  border flex justify-between h-[4.1rem]   my-2">
                    
                    <h1 className=" font-normal text-sm text-[#111E1C] my-auto"> © کلیه حقوق این سایت محفوظ و متعلق به فروشگاه اینترنتی کتاب نمکتاب است.</h1>
                    <div><Image src={enamd} alt=" some " className="  my-auto mt-1" /> </div>
                </div>

            </div> 
        </>
    )
}