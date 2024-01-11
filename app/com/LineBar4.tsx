import Link from "next/link"

export default function LineBar3() {
    return (

        <>
            <div className="flex w-2/3 items-center  mx-auto  my-6  ">
                <div className=" flex my-auto items-center">

                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
                        <path d="M19.375 9.375C19.375 11.7912 17.4162 13.75 15 13.75C12.5838 13.75 10.625 11.7912 10.625 9.375C10.625 6.95875 12.5838 5 15 5C17.4162 5 19.375 6.95875 19.375 9.375Z" fill="#00A693" />
                        <path opacity="0.4" d="M24.375 9.375C24.375 11.1009 22.9759 12.5 21.25 12.5C19.5241 12.5 18.125 11.1009 18.125 9.375C18.125 7.64911 19.5241 6.25 21.25 6.25C22.9759 6.25 24.375 7.64911 24.375 9.375Z" fill="#00A693" />
                        <path opacity="0.4" d="M5.625 9.375C5.625 11.1009 7.02411 12.5 8.75 12.5C10.4759 12.5 11.875 11.1009 11.875 9.375C11.875 7.64911 10.4759 6.25 8.75 6.25C7.02411 6.25 5.625 7.64911 5.625 9.375Z" fill="#00A693" />
                        <path d="M22.5 20.625C22.5 23.0412 19.1421 25 15 25C10.8579 25 7.5 23.0412 7.5 20.625C7.5 18.2088 10.8579 16.25 15 16.25C19.1421 16.25 22.5 18.2088 22.5 20.625Z" fill="#00A693" />
                        <path opacity="0.4" d="M27.5 20.625C27.5 22.3509 25.2614 23.75 22.5 23.75C19.7386 23.75 17.5 22.3509 17.5 20.625C17.5 18.8991 19.7386 17.5 22.5 17.5C25.2614 17.5 27.5 18.8991 27.5 20.625Z" fill="#00A693" />
                        <path opacity="0.4" d="M2.5 20.625C2.5 22.3509 4.73858 23.75 7.5 23.75C10.2614 23.75 12.5 22.3509 12.5 20.625C12.5 18.8991 10.2614 17.5 7.5 17.5C4.73858 17.5 2.5 18.8991 2.5 20.625Z" fill="#00A693" />
                    </svg>

                    <p className="  my-auto items-center mb-1 mr-1 ml-3 text-nowrap" >نقد ها  </p>
                </div>
                <div className=" w-full bg-[#EEE] h-0.5 my-auto items-center rounded-3xl"></div>
                <Link href='#' className=" no-underline">
                    <div className=" -ml-3 my-auto "><svg width="145" height="30" viewBox="0 0 145 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M22.4999 22.225C22.3416 22.225 22.1832 22.1667 22.0582 22.0417L16.6249 16.6084C15.7416 15.725 15.7416 14.275 16.6249 13.3917L22.0582 7.95835C22.2999 7.71668 22.6999 7.71668 22.9416 7.95835C23.1832 8.20002 23.1832 8.60002 22.9416 8.84168L17.5082 14.275C17.1082 14.675 17.1082 15.325 17.5082 15.725L22.9416 21.1583C23.1832 21.4 23.1832 21.8 22.9416 22.0417C22.8166 22.1584 22.6582 22.225 22.4999 22.225Z" fill="#333333" />
                        <path d="M45.0156 14.0156C44.9948 14.026 44.8984 14.0677 44.7266 14.1406C44.5599 14.2135 44.4557 14.2604 44.4141 14.2812C44.3724 14.2969 44.276 14.3411 44.125 14.4141C43.974 14.4818 43.8698 14.5339 43.8125 14.5703C43.7604 14.6068 43.6719 14.6615 43.5469 14.7344C43.4219 14.8021 43.3281 14.8646 43.2656 14.9219C43.2031 14.974 43.1276 15.0391 43.0391 15.1172C42.9505 15.1901 42.875 15.2656 42.8125 15.3438C42.7552 15.4219 42.7031 15.5052 42.6562 15.5938C42.5677 15.7552 42.5234 15.9141 42.5234 16.0703C42.5234 16.2474 42.5781 16.3958 42.6875 16.5156C42.7969 16.6302 42.9479 16.7135 43.1406 16.7656C43.3385 16.8177 43.526 16.8516 43.7031 16.8672C43.8802 16.8828 44.0833 16.8906 44.3125 16.8906C44.651 16.8906 45.0234 16.8542 45.4297 16.7812C45.3255 16.276 45.1875 15.3542 45.0156 14.0156ZM45.9609 18.2578C45.3568 18.3568 44.7865 18.4062 44.25 18.4062C42.9062 18.4062 41.9714 18.0807 41.4453 17.4297C41.1693 17.0964 41.0312 16.6615 41.0312 16.125C41.0312 15.8281 41.0833 15.5599 41.1875 15.3203C41.8021 14.0599 43.0182 13.0964 44.8359 12.4297C44.8255 12.3255 44.8125 12.2109 44.7969 12.0859C44.7865 11.9557 44.776 11.8516 44.7656 11.7734C44.7604 11.6901 44.7552 11.6198 44.75 11.5625C44.7448 11.5052 44.7396 11.4531 44.7344 11.4062C44.7292 11.3594 44.724 11.3255 44.7188 11.3047V11.2734L46.25 10.9531C46.2865 11.1927 46.3203 11.4609 46.3516 11.7578C46.3828 12.0495 46.4141 12.3776 46.4453 12.7422C46.4766 13.1016 46.5026 13.3698 46.5234 13.5469C46.6901 15.151 46.875 16.3125 47.0781 17.0312C47.1719 17.3646 47.3281 17.6042 47.5469 17.75C47.7708 17.8958 48.0938 17.9688 48.5156 17.9688C48.7292 17.9688 48.9115 18.0443 49.0625 18.1953C49.2135 18.3411 49.2891 18.5208 49.2891 18.7344C49.2891 18.9531 49.2135 19.1354 49.0625 19.2812C48.9167 19.4271 48.7344 19.5 48.5156 19.5C47.8958 19.5 47.3802 19.3984 46.9688 19.1953C46.5573 18.9922 46.2214 18.6797 45.9609 18.2578ZM54.0703 17.9062C54.4089 17.9062 54.6719 17.7578 54.8594 17.4609C55.0521 17.1641 55.1484 16.8229 55.1484 16.4375C55.1484 16.0573 55.0599 15.7135 54.8828 15.4062C54.7109 15.0938 54.4844 14.8672 54.2031 14.7266C54.0781 14.6641 53.9375 14.6328 53.7812 14.6328C53.6615 14.6328 53.5469 14.6771 53.4375 14.7656C53.3281 14.849 53.2474 14.9297 53.1953 15.0078C53.1484 15.0807 53.0833 15.1875 53 15.3281C52.9167 15.474 52.7786 15.7448 52.5859 16.1406C52.3984 16.5365 52.2578 16.8151 52.1641 16.9766C52.6224 17.3151 53.0156 17.5625 53.3438 17.7188C53.6094 17.8438 53.8516 17.9062 54.0703 17.9062ZM48.4922 19.5C48.2839 19.5 48.1042 19.4271 47.9531 19.2812C47.8021 19.1354 47.7266 18.9583 47.7266 18.75C47.7266 18.526 47.7995 18.3411 47.9453 18.1953C48.0911 18.0443 48.2734 17.9688 48.4922 17.9688H48.5078C49.1224 17.9688 49.6667 17.7135 50.1406 17.2031C50.4583 16.8594 50.8047 16.3099 51.1797 15.5547C51.2109 15.4922 51.263 15.3854 51.3359 15.2344C51.4141 15.0781 51.474 14.9583 51.5156 14.875C51.5625 14.7865 51.6172 14.6797 51.6797 14.5547C51.7474 14.4297 51.8125 14.3177 51.875 14.2188C51.9427 14.1198 52.0104 14.0286 52.0781 13.9453C52.5573 13.3672 53.1302 13.0781 53.7969 13.0781C54.2292 13.0781 54.5938 13.1615 54.8906 13.3281C55.1927 13.4896 55.4792 13.724 55.75 14.0312C55.8229 14.1198 55.8932 14.2109 55.9609 14.3047C56.0286 14.3984 56.0964 14.5078 56.1641 14.6328C56.2318 14.7526 56.2865 14.8542 56.3281 14.9375C56.3698 15.0156 56.4245 15.1328 56.4922 15.2891C56.5599 15.4453 56.6068 15.5547 56.6328 15.6172C56.6589 15.6797 56.7083 15.8047 56.7812 15.9922C56.8542 16.1797 56.8984 16.2943 56.9141 16.3359C56.9922 16.5339 57.0625 16.7005 57.125 16.8359C57.1875 16.9661 57.2708 17.1094 57.375 17.2656C57.4844 17.4219 57.599 17.5469 57.7188 17.6406C57.8385 17.7344 57.987 17.8125 58.1641 17.875C58.3464 17.9375 58.5469 17.9688 58.7656 17.9688C58.9844 17.9688 59.1693 18.0443 59.3203 18.1953C59.4714 18.3464 59.5469 18.5312 59.5469 18.75C59.5469 18.9583 59.4688 19.1354 59.3125 19.2812C59.1615 19.4271 58.9792 19.5 58.7656 19.5C57.7292 19.5 56.8594 19.0312 56.1562 18.0938C55.75 19 55.1198 19.4531 54.2656 19.4531C54.2031 19.4531 54.1042 19.4479 53.9688 19.4375C53.1146 19.3438 52.2135 18.9453 51.2656 18.2422L51.2344 18.2734L51.2031 18.3203C50.8177 18.7057 50.4349 18.9948 50.0547 19.1875C49.6745 19.3802 49.1875 19.4844 48.5938 19.5H48.4922ZM58.75 19.5C58.5208 19.5 58.3307 19.4271 58.1797 19.2812C58.0286 19.1354 57.9531 18.9505 57.9531 18.7266C57.9531 18.5078 58.0312 18.3281 58.1875 18.1875C58.3385 18.0417 58.526 17.9688 58.75 17.9688H58.8203C59.9453 17.9688 60.7656 17.9271 61.2812 17.8438C60.901 17.4323 60.6094 17.0156 60.4062 16.5938C60.2083 16.1823 60.1094 15.7891 60.1094 15.4141C60.1094 14.4974 60.4401 13.6927 61.1016 13C61.3255 12.7656 61.5938 12.5755 61.9062 12.4297L61.2891 12.1875L62.0312 10.7812L64.75 11.8984C65.3281 12.1484 65.7734 12.3464 66.0859 12.4922C66.4036 12.638 66.7917 12.8359 67.25 13.0859C67.7083 13.3359 68.0964 13.5833 68.4141 13.8281C68.7005 14.0469 68.9271 14.2656 69.0938 14.4844C69.5729 15.151 69.8125 15.8281 69.8125 16.5156C69.8125 17.099 69.6615 17.6042 69.3594 18.0312C69.0625 18.4531 68.6693 18.7943 68.1797 19.0547L68.1875 19.0469C67.6354 19.3646 66.8385 19.5234 65.7969 19.5234C64.8021 19.5234 63.9219 19.3672 63.1562 19.0547C62.2188 19.3516 60.7734 19.5 58.8203 19.5H58.75ZM66.1328 13.9766C66.2005 14.2214 66.2344 14.5755 66.2344 15.0391C66.2344 15.4609 66.1146 15.9531 65.875 16.5156C65.6562 17.0417 65.3411 17.526 64.9297 17.9688C65.1849 18.0052 65.4245 18.0234 65.6484 18.0234H66.0234C66.5599 18.0234 67.0182 17.9401 67.3984 17.7734C67.7786 17.6068 68.0495 17.3594 68.2109 17.0312C68.3047 16.8333 68.3516 16.6302 68.3516 16.4219C68.3516 16.0312 68.1667 15.6198 67.7969 15.1875C67.3854 14.7083 66.8307 14.3047 66.1328 13.9766ZM64.6328 14.9766C64.6328 14.4661 64.5234 14.0547 64.3047 13.7422C64.0911 13.4297 63.7552 13.2734 63.2969 13.2734C62.9323 13.2734 62.6198 13.3984 62.3594 13.6484C62.099 13.8932 61.901 14.1927 61.7656 14.5469C61.6667 14.7969 61.6172 15.0417 61.6172 15.2812C61.6172 15.6354 61.6979 15.9427 61.8594 16.2031C62.026 16.4635 62.2448 16.7135 62.5156 16.9531C62.6823 17.099 62.8698 17.2422 63.0781 17.3828C63.5312 17.1849 63.9036 16.8776 64.1953 16.4609C64.487 16.0391 64.6328 15.5443 64.6328 14.9766ZM80.4766 19.5C79.8672 19.5 79.3125 19.3802 78.8125 19.1406C78.3177 18.8958 77.9427 18.5781 77.6875 18.1875C77.4323 17.7917 77.3047 17.3255 77.3047 16.7891C77.3047 15.8464 77.7292 14.8646 78.5781 13.8438C78.8542 13.5156 79.1589 13.1979 79.4922 12.8906C79.3359 12.75 79.2109 12.6406 79.1172 12.5625C79.0234 12.4844 78.9766 12.4427 78.9766 12.4375L79.9609 11.2422C80.013 11.2943 80.1042 11.3776 80.2344 11.4922C80.3698 11.6068 80.4714 11.6953 80.5391 11.7578C81.0859 12.2839 81.4948 12.6979 81.7656 13C82.4115 13.7396 82.8854 14.4167 83.1875 15.0312C83.5052 15.6771 83.6641 16.263 83.6641 16.7891C83.6641 18.237 82.8646 19.1198 81.2656 19.4375C81.0521 19.4792 80.7891 19.5 80.4766 19.5ZM80.6719 17.9375C81.1146 17.9375 81.4661 17.8438 81.7266 17.6562C81.9922 17.4688 82.125 17.1797 82.125 16.7891C82.125 16.4557 81.9948 16.0495 81.7344 15.5703C81.4896 15.1224 81.112 14.6094 80.6016 14.0312C80.5964 14.026 80.5938 14.0208 80.5938 14.0156L80.5859 14.0078L80.5703 14C79.8464 14.651 79.3333 15.3125 79.0312 15.9844C78.9062 16.2604 78.8438 16.5286 78.8438 16.7891C78.8438 17.1641 78.9766 17.4375 79.2422 17.6094C79.5078 17.776 79.8646 17.8854 80.3125 17.9375C80.3594 17.9427 80.4141 17.9453 80.4766 17.9453C80.487 17.9453 80.513 17.9453 80.5547 17.9453C80.6016 17.9401 80.6406 17.9375 80.6719 17.9375ZM91.7656 18.4609C91.3177 18.7943 90.8411 19.0521 90.3359 19.2344C89.8307 19.4115 89.2422 19.5 88.5703 19.5C87.3984 19.5 86.3464 19.0182 85.4141 18.0547L86.2969 16.8125C86.8958 17.3646 87.526 17.7161 88.1875 17.8672C88.4062 17.9141 88.6224 17.9375 88.8359 17.9375C89.263 17.9375 89.6667 17.8568 90.0469 17.6953C90.4323 17.5286 90.7526 17.3177 91.0078 17.0625L88.5391 11.125L89.9609 10.5312C90.3724 11.5469 91.1693 13.4714 92.3516 16.3047C92.3776 16.3672 92.4193 16.474 92.4766 16.625C92.5339 16.776 92.5755 16.8854 92.6016 16.9531C92.6328 17.0208 92.6771 17.112 92.7344 17.2266C92.7969 17.3411 92.8568 17.4297 92.9141 17.4922C92.9714 17.5495 93.0443 17.612 93.1328 17.6797C93.2266 17.7474 93.3281 17.8021 93.4375 17.8438C93.6615 17.9271 93.9427 17.9688 94.2812 17.9688C94.4948 17.9688 94.6771 18.0443 94.8281 18.1953C94.9792 18.3411 95.0547 18.5208 95.0547 18.7344C95.0547 18.9479 94.9792 19.1302 94.8281 19.2812C94.6771 19.4271 94.4948 19.5 94.2812 19.5C93.1406 19.5 92.3021 19.1536 91.7656 18.4609ZM94.2656 19.5C94.0365 19.5 93.8464 19.4271 93.6953 19.2812C93.5443 19.1354 93.4688 18.9505 93.4688 18.7266C93.4688 18.5078 93.5469 18.3281 93.7031 18.1875C93.8542 18.0417 94.0417 17.9688 94.2656 17.9688H94.3359C95.4609 17.9688 96.2812 17.9271 96.7969 17.8438C96.4167 17.4323 96.125 17.0156 95.9219 16.5938C95.724 16.1823 95.625 15.7891 95.625 15.4141C95.625 14.4974 95.9557 13.6927 96.6172 13C96.8411 12.7656 97.1094 12.5755 97.4219 12.4297L96.8047 12.1875L97.5469 10.7812L100.266 11.8984C100.844 12.1484 101.289 12.3464 101.602 12.4922C101.919 12.638 102.307 12.8359 102.766 13.0859C103.224 13.3359 103.612 13.5833 103.93 13.8281C104.216 14.0469 104.443 14.2656 104.609 14.4844C105.089 15.151 105.328 15.8281 105.328 16.5156C105.328 17.099 105.177 17.6042 104.875 18.0312C104.578 18.4531 104.185 18.7943 103.695 19.0547L103.703 19.0469C103.151 19.3646 102.354 19.5234 101.312 19.5234C100.318 19.5234 99.4375 19.3672 98.6719 19.0547C97.7344 19.3516 96.2891 19.5 94.3359 19.5H94.2656ZM101.648 13.9766C101.716 14.2214 101.75 14.5755 101.75 15.0391C101.75 15.4609 101.63 15.9531 101.391 16.5156C101.172 17.0417 100.857 17.526 100.445 17.9688C100.701 18.0052 100.94 18.0234 101.164 18.0234H101.539C102.076 18.0234 102.534 17.9401 102.914 17.7734C103.294 17.6068 103.565 17.3594 103.727 17.0312C103.82 16.8333 103.867 16.6302 103.867 16.4219C103.867 16.0312 103.682 15.6198 103.312 15.1875C102.901 14.7083 102.346 14.3047 101.648 13.9766ZM100.148 14.9766C100.148 14.4661 100.039 14.0547 99.8203 13.7422C99.6068 13.4297 99.2708 13.2734 98.8125 13.2734C98.4479 13.2734 98.1354 13.3984 97.875 13.6484C97.6146 13.8932 97.4167 14.1927 97.2812 14.5469C97.1823 14.7969 97.1328 15.0417 97.1328 15.2812C97.1328 15.6354 97.2135 15.9427 97.375 16.2031C97.5417 16.4635 97.7604 16.7135 98.0312 16.9531C98.1979 17.099 98.3854 17.2422 98.5938 17.3828C99.0469 17.1849 99.4193 16.8776 99.7109 16.4609C100.003 16.0391 100.148 15.5443 100.148 14.9766ZM109.422 16.7734C109.422 17.2266 109.544 17.5365 109.789 17.7031C110.039 17.8646 110.44 17.9505 110.992 17.9609H111.062C111.281 17.9609 111.464 18.0365 111.609 18.1875C111.76 18.3333 111.836 18.5156 111.836 18.7344C111.836 18.9479 111.76 19.1302 111.609 19.2812C111.458 19.4271 111.276 19.5 111.062 19.5C110.094 19.5 109.331 19.2969 108.773 18.8906C108.216 18.4792 107.919 17.8438 107.883 16.9844C107.878 16.8698 107.875 16.7188 107.875 16.5312V16.3828C107.875 16.3047 107.878 16.1484 107.883 15.9141C107.888 15.6797 107.891 15.4896 107.891 15.3438C107.891 15.25 107.891 15.0833 107.891 14.8438C107.896 14.599 107.898 14.4036 107.898 14.2578C107.898 13.6953 107.896 13.2604 107.891 12.9531V12.8203C107.891 12.0703 107.888 11.487 107.883 11.0703C107.878 10.6536 107.852 10.138 107.805 9.52344C107.763 8.90885 107.701 8.38542 107.617 7.95312L109.148 7.67188C109.336 8.75 109.43 10.4479 109.43 12.7656C109.435 13.0729 109.438 13.513 109.438 14.0859V16.0234C109.438 16.0859 109.438 16.1458 109.438 16.2031C109.438 16.2604 109.435 16.3073 109.43 16.3438C109.43 16.3802 109.43 16.401 109.43 16.4062V16.5469C109.43 16.5729 109.427 16.612 109.422 16.6641C109.422 16.7161 109.422 16.7526 109.422 16.7734ZM119.477 15.9375C119.477 16.2188 119.49 16.4661 119.516 16.6797C119.542 16.8932 119.589 17.1042 119.656 17.3125C119.729 17.5156 119.839 17.6719 119.984 17.7812C120.135 17.8906 120.32 17.9453 120.539 17.9453C120.841 17.9453 121.07 17.8464 121.227 17.6484C121.383 17.4453 121.513 17.1667 121.617 16.8125C121.768 16.2812 121.844 15.6198 121.844 14.8281C121.844 14.7188 121.836 14.5729 121.82 14.3906C121.81 14.2083 121.805 14.0781 121.805 14C121.805 13.9792 121.802 13.9583 121.797 13.9375C121.797 13.9167 121.797 13.901 121.797 13.8906V13.8672L123.328 13.7422C123.344 13.7839 123.354 13.9297 123.359 14.1797C123.474 14.9661 123.602 15.5938 123.742 16.0625C124.154 17.3333 124.729 17.9688 125.469 17.9688H125.625C125.844 17.9688 126.026 18.0417 126.172 18.1875C126.318 18.3333 126.391 18.5156 126.391 18.7344C126.391 18.9479 126.318 19.1302 126.172 19.2812C126.026 19.4271 125.844 19.5 125.625 19.5H125.469C124.401 19.5 123.534 18.9609 122.867 17.8828C122.372 18.9609 121.596 19.5 120.539 19.5C119.508 19.5 118.76 19 118.297 18C117.609 19.0156 116.799 19.5234 115.867 19.5234C115.393 19.5234 114.984 19.4115 114.641 19.1875C114.302 18.9583 114.052 18.651 113.891 18.2656C113.885 18.2552 113.867 18.2135 113.836 18.1406C113.805 18.0677 113.781 18.0104 113.766 17.9688C113.589 18.2031 113.414 18.3984 113.242 18.5547C112.596 19.1849 111.885 19.5 111.109 19.5H111.031C110.812 19.5 110.63 19.4271 110.484 19.2812C110.333 19.1354 110.258 18.9531 110.258 18.7344C110.258 18.5208 110.333 18.3438 110.484 18.2031C110.635 18.0625 110.818 17.9844 111.031 17.9688H111.109C111.5 17.9688 111.893 17.7604 112.289 17.3438C112.867 16.7344 113.383 15.75 113.836 14.3906C113.935 14.0781 113.984 13.9036 113.984 13.8672L115.484 14.2812C115.474 14.2917 115.466 14.3073 115.461 14.3281C115.456 14.3438 115.451 14.3672 115.445 14.3984C115.44 14.4297 115.435 14.4531 115.43 14.4688C115.221 15.276 115.117 15.9792 115.117 16.5781C115.117 16.7708 115.125 16.9401 115.141 17.0859C115.161 17.2266 115.195 17.3698 115.242 17.5156C115.289 17.6615 115.365 17.776 115.469 17.8594C115.578 17.9375 115.711 17.9766 115.867 17.9766C116.07 17.9766 116.26 17.9115 116.438 17.7812C117.172 17.224 117.74 15.9375 118.141 13.9219C118.156 13.8438 118.164 13.8021 118.164 13.7969L119.688 14.0859C119.672 14.1016 119.659 14.1328 119.648 14.1797C119.638 14.2266 119.628 14.2891 119.617 14.3672C119.612 14.4453 119.607 14.4974 119.602 14.5234C119.518 15.013 119.477 15.4844 119.477 15.9375ZM119.367 10.4609L120.633 9.19531L121.914 10.4766L120.648 11.7422L119.367 10.4609ZM115.938 10.4531L117.203 9.17969L118.484 10.4609L117.219 11.7344L115.938 10.4531ZM117.82 8.10156L118.977 6.94531L120.141 8.10938L118.984 9.26562L117.82 8.10156ZM134.023 16.5391C134.023 17.0755 133.935 17.5599 133.758 17.9922C133.586 18.4193 133.318 18.7656 132.953 19.0312C132.594 19.2917 132.167 19.4219 131.672 19.4219C131.245 19.4219 130.797 19.3255 130.328 19.1328C129.839 18.9453 129.31 18.6432 128.742 18.2266C127.893 19.0755 126.883 19.5 125.711 19.5H125.703C125.49 19.5 125.31 19.4271 125.164 19.2812C125.018 19.1302 124.945 18.9479 124.945 18.7344C124.945 18.526 125.021 18.349 125.172 18.2031C125.318 18.0573 125.495 17.9792 125.703 17.9688H125.711C126.117 17.9688 126.482 17.901 126.805 17.7656C127.128 17.625 127.388 17.4479 127.586 17.2344C127.784 17.0208 127.974 16.7656 128.156 16.4688C128.339 16.1667 128.49 15.875 128.609 15.5938C128.729 15.3125 128.875 15.0156 129.047 14.7031C129.219 14.3854 129.391 14.125 129.562 13.9219C130.031 13.349 130.599 13.0625 131.266 13.0625C131.828 13.0625 132.32 13.224 132.742 13.5469C133.169 13.8698 133.49 14.2917 133.703 14.8125C133.917 15.3333 134.023 15.9089 134.023 16.5391ZM131.648 17.8828C131.956 17.8828 132.177 17.7474 132.312 17.4766C132.448 17.2005 132.516 16.8672 132.516 16.4766C132.516 16.1589 132.469 15.8672 132.375 15.6016C132.146 14.9401 131.776 14.6094 131.266 14.6094C131.073 14.6094 130.885 14.7318 130.703 14.9766C130.573 15.1432 130.359 15.5208 130.062 16.1094L129.641 16.9609C130.115 17.3099 130.547 17.5625 130.938 17.7188C131.214 17.8281 131.451 17.8828 131.648 17.8828Z" fill="#333333" />
                    </svg>
                    </div>
                </Link>


            </div>


        </>
    )
}