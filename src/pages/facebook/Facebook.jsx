import '../../_assets/index.css'
import { FaUserFriends } from "react-icons/fa";
import { RiMemoriesFill } from "react-icons/ri";
import { IoBookmarksSharp } from "react-icons/io5";
import { GoHomeFill } from "react-icons/go";
import { IoIosArrowDown } from "react-icons/io";


import { MdGroups, MdOutlineOndemandVideo  } from "react-icons/md";
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createNewFacebookData, deleteFacebookData, editFacebookData, getAllFacebookData } from '../../redux/facebook/action';
import { Button, Modal, ModalBody, ModalHeader } from 'react-bootstrap';
import { FaTimes } from "react-icons/fa";





const Facebook = () => {

    const dispatch = useDispatch()


 

    const {facebooks} = useSelector((state) => state.facebook)



    // input filds value manage for use state
    const [input, setInput] = useState({
        name : "",
        content : "",
        photo : ""
    })

    const [edit, setEdit] = useState(false)

    // input filds change handware
    const handleInputChange = (e) => {
        setInput((prevstate) => ({
            ...prevstate,
            [e.target.name] : e.target.value
        }))
    }

    // post modal state manage
    const [modal, setModal] = useState(false)

    // modal handware 
    const showModal = () => {
        setModal(true)
    }

    const hideModal = () => {
        setModal(false)
        setEdit(false)
        setInput({
            name : "",
            content : "",
             photo : ""
        })
    }


    // handleFacebookDataCreate
    const handleFacebookDataCreate = () => {

        dispatch(createNewFacebookData(input))

        setInput({
            name : "",
            content : "",
             photo : ""
        })
        
        hideModal()
    }


    const handleFbUserDelete = (id) => {
        console.log(id);
       dispatch(deleteFacebookData(id))
    }


   
    const handleEditFacebookUser = (item) => {
        showModal()
        setInput(item)
        setEdit(true)
    }

    const handleFacebookUpdate = () => {
        dispatch(editFacebookData(input))
        hideModal()
    }


    useEffect(() => {
        dispatch(getAllFacebookData())
    },[])


  return (

    <>
    
    <div className="main_div">
        
        <div className="fb_header shadow-sm">
            <div className="row">
                <div className="col-md-4 left">
                    <div className="logo">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/6/6c/Facebook_Logo_2023.png" alt=""/>
                        <input  placeholder="Search Facebook" type="text"/>
                        <i className="fa-solid fa-magnifying-glass Search"></i>
                    </div>
                    
                </div>
                <div className="col-md-4 center">
                    <div className="fb_header_menu">
                        <ul>
                            <li><a href=""><span><svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor" className="x19dipnz x1lliihq x1k90msu x2h7rmj x1qfuztq" style={{color : "#0866ff"}}><path d="M9.464 1.286C10.294.803 11.092.5 12 .5c.908 0 1.707.303 2.537.786.795.462 1.7 1.142 2.815 1.977l2.232 1.675c1.391 1.042 2.359 1.766 2.888 2.826.53 1.059.53 2.268.528 4.006v4.3c0 1.355 0 2.471-.119 3.355-.124.928-.396 1.747-1.052 2.403-.657.657-1.476.928-2.404 1.053-.884.119-2 .119-3.354.119H7.93c-1.354 0-2.471 0-3.355-.119-.928-.125-1.747-.396-2.403-1.053-.656-.656-.928-1.475-1.053-2.403C1 18.541 1 17.425 1 16.07v-4.3c0-1.738-.002-2.947.528-4.006.53-1.06 1.497-1.784 2.888-2.826L6.65 3.263c1.114-.835 2.02-1.515 2.815-1.977zM10.5 13A1.5 1.5 0 0 0 9 14.5V21h6v-6.5a1.5 1.5 0 0 0-1.5-1.5h-3z"></path></svg></span></a> <div className="fb_header_dibaider"></div></li>

                            <li><a href=""><span><svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor" className="x19dipnz x1lliihq x1k90msu x2h7rmj x1qfuztq" style={{color : "#65676b"}}><path d="M10.996 8.132A1 1 0 0 0 9.5 9v4a1 1 0 0 0 1.496.868l3.5-2a1 1 0 0 0 0-1.736l-3.5-2z"></path><path d="M14.573 2H9.427c-1.824 0-3.293 0-4.45.155-1.2.162-2.21.507-3.013 1.31C1.162 4.266.817 5.277.655 6.477.5 7.634.5 9.103.5 10.927v.146c0 1.824 0 3.293.155 4.45.162 1.2.507 2.21 1.31 3.012.802.803 1.813 1.148 3.013 1.31C6.134 20 7.603 20 9.427 20h5.146c1.824 0 3.293 0 4.45-.155 1.2-.162 2.21-.507 3.012-1.31.803-.802 1.148-1.813 1.31-3.013.155-1.156.155-2.625.155-4.449v-.146c0-1.824 0-3.293-.155-4.45-.162-1.2-.507-2.21-1.31-3.013-.802-.802-1.813-1.147-3.013-1.309C17.866 2 16.397 2 14.573 2zM3.38 4.879c.369-.37.887-.61 1.865-.741C6.251 4.002 7.586 4 9.5 4h5c1.914 0 3.249.002 4.256.138.978.131 1.496.372 1.865.74.37.37.61.888.742 1.866.135 1.007.137 2.342.137 4.256 0 1.914-.002 3.249-.137 4.256-.132.978-.373 1.496-.742 1.865-.369.37-.887.61-1.865.742-1.007.135-2.342.137-4.256.137h-5c-1.914 0-3.249-.002-4.256-.137-.978-.132-1.496-.373-1.865-.742-.37-.369-.61-.887-.741-1.865C2.502 14.249 2.5 12.914 2.5 11c0-1.914.002-3.249.138-4.256.131-.978.372-1.496.74-1.865zM8 21.5a1 1 0 1 0 0 2h8a1 1 0 1 0 0-2H8z"></path></svg></span></a></li>

                            <li><a href=""><span><svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor" className="x19dipnz x1lliihq x1k90msu x2h7rmj x1qfuztq"  style={{color : "#65676b"}}><path d="M1.588 3.227A3.125 3.125 0 0 1 4.58 1h14.84c1.38 0 2.597.905 2.993 2.227l.816 2.719a6.47 6.47 0 0 1 .272 1.854A5.183 5.183 0 0 1 22 11.455v4.615c0 1.355 0 2.471-.119 3.355-.125.928-.396 1.747-1.053 2.403-.656.657-1.475.928-2.403 1.053-.884.12-2 .119-3.354.119H8.929c-1.354 0-2.47 0-3.354-.119-.928-.125-1.747-.396-2.403-1.053-.657-.656-.929-1.475-1.053-2.403-.12-.884-.119-2-.119-3.354V11.5l.001-.045A5.184 5.184 0 0 1 .5 7.8c0-.628.092-1.252.272-1.854l.816-2.719zM10 21h4v-3.5a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5V21zm6-.002c.918-.005 1.608-.025 2.159-.099.706-.095 1.033-.262 1.255-.485.223-.222.39-.55.485-1.255.099-.735.101-1.716.101-3.159v-3.284a5.195 5.195 0 0 1-1.7.284 5.18 5.18 0 0 1-3.15-1.062A5.18 5.18 0 0 1 12 13a5.18 5.18 0 0 1-3.15-1.062A5.18 5.18 0 0 1 5.7 13a5.2 5.2 0 0 1-1.7-.284V16c0 1.442.002 2.424.1 3.159.096.706.263 1.033.486 1.255.222.223.55.39 1.255.485.551.074 1.24.094 2.159.1V17.5a2.5 2.5 0 0 1 2.5-2.5h3a2.5 2.5 0 0 1 2.5 2.5v3.498zM4.581 3c-.497 0-.935.326-1.078.802l-.815 2.72A4.45 4.45 0 0 0 2.5 7.8a3.2 3.2 0 0 0 5.6 2.117 1 1 0 0 1 1.5 0A3.19 3.19 0 0 0 12 11a3.19 3.19 0 0 0 2.4-1.083 1 1 0 0 1 1.5 0A3.2 3.2 0 0 0 21.5 7.8c0-.434-.063-.865-.188-1.28l-.816-2.72A1.125 1.125 0 0 0 19.42 3H4.58z"></path></svg></span></a></li>

                            <li><a href=""><span><svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor" className="x19dipnz x1lliihq x1k90msu x2h7rmj x1qfuztq"  style={{color : "#65676b"}}><path d="M12 6a4 4 0 1 0 0 8 4 4 0 0 0 0-8zm-2 4a2 2 0 1 1 4 0 2 2 0 0 1-4 0z"></path><path d="M.5 12C.5 5.649 5.649.5 12 .5S23.5 5.649 23.5 12 18.351 23.5 12 23.5.5 18.351.5 12zm2.21-2a9.537 9.537 0 0 0 0 3.993l.3.007A2 2 0 0 0 3 10h-.29zm.663-1.983a4 4 0 0 1 0 7.966 9.523 9.523 0 0 0 1.948 2.773A5.002 5.002 0 0 1 10 15.523h4a5.002 5.002 0 0 1 4.679 3.233 9.523 9.523 0 0 0 1.948-2.773 4 4 0 0 1 0-7.966A9.501 9.501 0 0 0 12 2.5a9.501 9.501 0 0 0-8.627 5.517zM21.5 12a9.55 9.55 0 0 0-.212-2.007l-.265.007H21a2 2 0 0 0-.01 4l.3-.007c.138-.643.21-1.31.21-1.993zM12 21.5a9.455 9.455 0 0 0 4.97-1.402A3 3 0 0 0 14 17.523h-4a3 3 0 0 0-2.97 2.575A9.456 9.456 0 0 0 12 21.5z"></path></svg></span></a></li>

                            <li><a href=""><span><svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor" className="x19dipnz x1lliihq x1k90msu x2h7rmj x1qfuztq"  style={{color : "#65676b"}}><path d="M8 8a1 1 0 0 1 1 1v2h2a1 1 0 1 1 0 2H9v2a1 1 0 1 1-2 0v-2H5a1 1 0 1 1 0-2h2V9a1 1 0 0 1 1-1zm8 2a1.5 1.5 0 1 0 3 0 1.5 1.5 0 0 0-3 0zm-2 4a1.5 1.5 0 1 0 3 0 1.5 1.5 0 0 0-3 0z"></path><path d="M.5 11a7 7 0 0 1 7-7h9a7 7 0 0 1 7 7v2a7 7 0 0 1-7 7h-9a7 7 0 0 1-7-7v-2zm7-5a5 5 0 0 0-5 5v2a5 5 0 0 0 5 5h9a5 5 0 0 0 5-5v-2a5 5 0 0 0-5-5h-9z"></path></svg></span></a></li>


                        </ul>
                    </div>
                </div>
                <div className="col-md-4 right">
                    <div className="fb_header_right_menu">
                        <ul>
                            <li><a href=""><span><svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" className="x19dipnz x1lliihq x1k90msu x2h7rmj x1qfuztq"  style={{color : "#65676b"}}><path d="M12 1a3 3 0 1 0 0 6 3 3 0 0 0 0-6zM4 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6zm8 0a3 3 0 1 0 0 6 3 3 0 0 0 0-6zm8 0a3 3 0 1 0 0 6 3 3 0 0 0 0-6zm0-8a3 3 0 1 0 0 6 3 3 0 0 0 0-6zM4 1a3 3 0 1 0 0 6 3 3 0 0 0 0-6zm8 16a3 3 0 1 0 0 6 3 3 0 0 0 0-6zm8 0a3 3 0 1 0 0 6 3 3 0 0 0 0-6zM4 17a3 3 0 1 0 0 6 3 3 0 0 0 0-6z"></path></svg></span></a></li>

                            <li><a href=""><span><svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" className="x19dipnz x1lliihq x1k90msu x2h7rmj x1qfuztq" style={{color : "#65676b"}}><path d="M.5 12C.5 5.649 5.649.5 12 .5S23.5 5.649 23.5 12 18.351 23.5 12 23.5c-1.922 0-3.736-.472-5.33-1.308a.63.63 0 0 0-.447-.069l-3.4.882a1.5 1.5 0 0 1-1.828-1.829l.882-3.4a.63.63 0 0 0-.07-.445A11.454 11.454 0 0 1 .5 12zm17.56-1.43a.819.819 0 0 0-1.125-1.167L14 11.499l-3.077-2.171a1.5 1.5 0 0 0-2.052.308l-2.93 3.793a.819.819 0 0 0 1.123 1.167L10 12.5l3.076 2.172a1.5 1.5 0 0 0 2.052-.308l2.931-3.793z"></path></svg></span></a></li>

                            <li><a href=""><span><svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" className="x19dipnz x1lliihq x1k90msu x2h7rmj x1qfuztq"  style={{color : "#65676b"}}><path d="M3 9.5a9 9 0 1 1 18 0v2.927c0 1.69.475 3.345 1.37 4.778a1.5 1.5 0 0 1-1.272 2.295h-4.625a4.5 4.5 0 0 1-8.946 0H2.902a1.5 1.5 0 0 1-1.272-2.295A9.01 9.01 0 0 0 3 12.43V9.5zm6.55 10a2.5 2.5 0 0 0 4.9 0h-4.9z"></path></svg></span></a></li>

                            <li><img src="https://scontent.fdac24-4.fna.fbcdn.net/v/t39.30808-6/369056401_821458899641538_2174608844576823947_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=efb6e6&_nc_eui2=AeHKwPX_CbvsHpyYXT9nXfQYC5D_3XRPrtMLkP_ddE-u01P6kjV9lSVBZABpsUg4l7BRQO9MGGVlGnoq3jb1bbXN&_nc_ohc=C32Co0_E9b0AX82uUz4&_nc_ht=scontent.fdac24-4.fna&oh=00_AfD9w7MdZWGv8eoILfJZrr-XW-JTW0TQknNTrFuWuwhuqg&oe=65C251FD" alt=""/></li>

                        </ul>
                    </div>
                </div>
            </div>
        </div>


            <div className="fb_body">
                <div className="row">
                    <div className="col-md-4 fb_body_left">
                        <div className="fb_left_menu">
                            <ul>
                               <li><a href="">
                                <div className="list_items">
                                    <div className="list_img">
                                        <img className="img_style" src="https://scontent.fdac24-4.fna.fbcdn.net/v/t39.30808-6/369056401_821458899641538_2174608844576823947_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=efb6e6&_nc_eui2=AeHKwPX_CbvsHpyYXT9nXfQYC5D_3XRPrtMLkP_ddE-u01P6kjV9lSVBZABpsUg4l7BRQO9MGGVlGnoq3jb1bbXN&_nc_ohc=C32Co0_E9b0AX82uUz4&_nc_ht=scontent.fdac24-4.fna&oh=00_AfD9w7MdZWGv8eoILfJZrr-XW-JTW0TQknNTrFuWuwhuqg&oe=65C251FD" alt=""/>
                                    </div>
                                    <div className="list_text">
                                        <p>Md Akash Shikder</p>
                                    </div>
                                </div>
                               </a></li>
                               <li><a href="">
                                <div className="list_items">
                                    <div className="list_img">
                                    <i><FaUserFriends style={{color : '#1e90f7'}} /></i>



                                    </div>
                                    <div className="list_text">
                                        <p>Friends</p>
                                    </div>
                                </div>
                               </a></li>
                               <li><a href="">
                                <div className="list_items">
                                    <div className="list_img">
                                        <RiMemoriesFill style={{color : '#1e90f7'}}/>
                                    </div>
                                    <div className="list_text">
                                        <p>Memories</p>
                                    </div>
                                </div>
                               </a></li>
                               <li><a href="">
                                <div className="list_items">
                                    <div className="list_img">
                                    <IoBookmarksSharp style={{color : '#cf37ae'}}/>
                                    </div>
                                    <div className="list_text">
                                        <p>Save</p>
                                    </div>
                                </div>
                               </a></li>
                               <li><a href="">
                                <div className="list_items">
                                    <div className="list_img">
                                        <MdGroups style={{color : '#1e90f7'}}/>
                                    </div>
                                    <div className="list_text">
                                        <p>Groups</p>
                                    </div>
                                </div>
                               </a></li>
                               <li><a href="">
                                <div className="list_items">
                                    <div className="list_img">
                                        <MdOutlineOndemandVideo style={{color : '#1e90f7'}}/>
                                    </div>
                                    <div className="list_text">
                                        <p>video</p>
                                    </div>
                                </div>
                               </a></li>
                               <li><a href="">
                                <div className="list_items">
                                    <div className="list_img">
                                    <i>
                                        <GoHomeFill style={{color : '#1e90f7'}}/>
                                    </i>
                                    </div>
                                    <div className="list_text">
                                        <p>Home</p>
                                        
                                    </div>
                                </div>
                               </a>
                               
                            </li>
                               <li><a href="">
                                <div className="list_items">
                                    <div className="list_img">
                                    <i>
                                        <IoIosArrowDown style={{color : ''}}/>
                                    </i>
                                    </div>
                                    <div className="list_text">
                                        <p>See more</p>
                                        
                                    </div>
                                </div>
                               </a>
                               <hr className="m-0"/>
                            </li>
                            <span>Yours Shortcuts</span>

                            <li className="my-2"><a href="">
                                <div className="list_items">
                                    <div className="list_img">
                                        <img className="group_img" src="https://scontent.fdac24-1.fna.fbcdn.net/v/t39.30808-6/421882848_10225680853907898_7146297852666098778_n.png?stp=c41.0.50.50a_cp0_dst-png_p50x50&_nc_cat=100&ccb=1-7&_nc_sid=f22548&_nc_eui2=AeE1kvmE0y-UFkGMfHu84LX9CG6-vM5UoLAIbr68zlSgsBp3y93wdJfzJSP1si2Xc71Y7LGDnFVvBqFBDeGAZUTF&_nc_ohc=KZd8OnnlFm8AX-P4LlT&_nc_ht=scontent.fdac24-1.fna&oh=00_AfBEmGTnymc4hbthsgz1RJ22EX6EfqPsxLH357_7l9FQ5Q&oe=65C11318" alt=""/>
                                    </div>
                                    <div className="list_text">
                                        <p>DevZone</p>
                                    </div>
                                </div>
                               </a></li>
                            <li><a href="">
                                <div className="list_items">
                                    <div className="list_img">
                                        <img className="group_img" src="https://scontent.fdac24-3.fna.fbcdn.net/v/t39.30808-1/339029534_910139950229663_54283195290244603_n.jpg?stp=cp0_dst-jpg_s40x40&_nc_cat=109&ccb=1-7&_nc_sid=4da83f&_nc_eui2=AeFQgkxlDseS5AXBmP585WhMUEFSZWS1kZ9QQVJlZLWRn1fFipLvLUWMlT6YJOEwK46foFSx42PMpOLRnt9_tjfe&_nc_ohc=VngL5_fBoiYAX-YpZ3R&_nc_ht=scontent.fdac24-3.fna&oh=00_AfCMg2bErRFlwYwVYs6XGGz8-BBFiECRMGhe0zTuz6IWKA&oe=65C0D5A2" alt=""/>
                                    </div>
                                    <div className="list_text">
                                        <p>Premium Collection Shop</p>
                                    </div>
                                </div>
                               </a></li>
                            <li><a href="">
                                <div className="list_items">
                                    <div className="list_img">
                                        <img className="group_img" src="https://scontent.fdac24-3.fna.fbcdn.net/v/t39.2081-6/75280236_727295991088696_757576370669748224_n.png?stp=c6.6.31.31a_dst-png_p36x36&_nc_cat=1&ccb=1-7&_nc_sid=ed3f67&_nc_eui2=AeFw1DvKEaA4sfdY50YxM8vo54hkV__MFUPniGRX_8wVQ3MSHIVoVDRLERJ5KQq2QTIkCPgcZ7xHOpOg9B2etr-q&_nc_ohc=NUaUEbvH5oYAX8kRcAs&_nc_ht=scontent.fdac24-3.fna&oh=00_AfDmDp6qEBhIbeMOoL17MwHtNlQ7dWszBRpnuMrPEAglzA&oe=65BF8D48" alt=""/>
                                    </div>
                                    <div className="list_text">
                                        <p>Ludo World</p>
                                    </div>
                                </div>
                               </a></li>
                            <li><a href="">
                                <div className="list_items">
                                    <div className="list_img">
                                        <img className="group_img" src="https://scontent.fdac24-1.fna.fbcdn.net/v/t39.30808-1/245110066_111045828018951_5650507588130159957_n.jpg?stp=c14.0.40.40a_cp0_dst-jpg_p40x40&_nc_cat=100&ccb=1-7&_nc_sid=4da83f&_nc_eui2=AeFpxH0yY9FOyc4MAbA7HH3vDIR7s6hUhPsMhHuzqFSE-8duY7B6NtvaJehqMI7yuKeudhriiZn6VXCknbTCWy4G&_nc_ohc=ysdwwFNUo4MAX8jbAuM&_nc_ht=scontent.fdac24-1.fna&oh=00_AfCqD_4EMDQFAqpIcprC4bcf8oSutAeCFcr10AtmZoF1yA&oe=65BF4A40" alt=""/>
                                    </div>
                                    <div className="list_text">
                                        <p>Coding Lover</p>
                                    </div>
                                </div>
                               </a></li>
                            <li><a href="">
                                <div className="list_items">
                                    <div className="list_img">
                                        <img className="group_img" src="https://scontent.fdac24-2.fna.fbcdn.net/v/t39.30808-1/273219749_105724255364186_4717124609675317127_n.jpg?stp=c4.0.40.40a_cp0_dst-jpg_p40x40&_nc_cat=105&ccb=1-7&_nc_sid=4da83f&_nc_eui2=AeHpiaAoCNMEamDkvD_y31YjcINLkdp_arNwg0uR2n9qs0dMPrgHLIM4SpKivutJvnEU7l1a2BZ9gx3LH1bScekx&_nc_ohc=L_zy6AGnowgAX8_pqAj&_nc_ht=scontent.fdac24-2.fna&oh=00_AfCbg-z8hBG4G0wF7nbJcyyRxswqas1z9fDhsC04jcMqNQ&oe=65C10D23" alt=""/>
                                    </div>
                                    <div className="list_text">
                                        <p>একটু হাসি ও কান্না</p>
                                    </div>
                                </div>
                               </a></li>
                            

                            </ul>
                        </div>
                    </div>
                    <div className="col-md-4 fb_body_center">

                       <div className="story_ariya">
                        <ul>
                           <li>
                            <a href="">
                                <div className="story_list shadow-sm">
                                    <div className="roteted_img ">
                                        <img className="" src="https://watermark.lovepik.com/photo/20211123/large/lovepik-a-business-man-sitting-on-a-desk-and-thinking-picture_500871376.jpg" alt=""/>
                                    </div>
                                    <div className="img">
                                        <img src="https://watermark.lovepik.com/photo/20211123/large/lovepik-a-business-man-sitting-on-a-desk-and-thinking-picture_500871376.jpg" alt=""/>
                                    </div>
                                    <div className="content">
                                        <p>Akash</p>
                                    </div>
                                </div>
                            </a>
                           </li>
                           <li>
                            <a href="">
                                <div className="story_list shadow-sm">
                                    <div className="roteted_img ">
                                        <img className="" src="https://i.pinimg.com/736x/6e/be/82/6ebe825ade5d3c803ccf0300ca7792ec.jpg" alt=""/>
                                    </div>
                                    <div className="img">
                                        <img src="https://i.pinimg.com/736x/6e/be/82/6ebe825ade5d3c803ccf0300ca7792ec.jpg" alt=""/>
                                    </div>
                                    <div className="content">
                                        <p>Fariya</p>
                                    </div>
                                </div>
                            </a>
                           </li>
                           <li>
                            <a href="">
                                <div className="story_list shadow-sm">
                                    <div className="roteted_img ">
                                        <img className="" src="https://pbs.twimg.com/media/D0yjwjGU0AE1yVr.jpg:large" alt=""/>
                                    </div>
                                    <div className="img">
                                        <img src="https://pbs.twimg.com/media/D0yjwjGU0AE1yVr.jpg:large" alt=""/>
                                    </div>
                                    <div className="content">
                                        <p>Kaya Payel</p>
                                    </div>
                                </div>
                            </a>
                           </li>
                           <li>
                            <a href="">
                                <div className="story_list shadow-sm">
                                    <div className="roteted_img ">
                                        <img className="" src="https://i.pinimg.com/736x/9f/c2/30/9fc2309f8915f771eb5515c315d5abb8.jpg" alt=""/>
                                    </div>
                                    <div className="img">
                                        <img src="https://i.pinimg.com/736x/9f/c2/30/9fc2309f8915f771eb5515c315d5abb8.jpg" alt=""/>
                                    </div>
                                    <div className="content">
                                        <p>Tasniya Farin</p>
                                    </div>
                                </div>
                            </a>
                           </li>
                           <li>
                            <a href="">
                                <div className="story_list">
                                    <div className="roteted_img ">
                                        <img className="" src="https://media.istockphoto.com/id/1413220379/photo/smiling-beautiful-woman-with-shopping-bags-and-coffee-taking-a-break.jpg?s=612x612&w=0&k=20&c=0HZsJctMJUD2yOB2qLe5Nw23_ieU5HUVVpja3aDaF5Q=" alt=""/>
                                    </div>
                                    <div className="img">
                                        <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dGVhbSUyMG1lbWJlcnxlbnwwfHwwfHx8MA%3D%3D" alt=""/>
                                    </div>
                                    <div className="content">
                                        <p>Md Akash</p>
                                    </div>
                                </div>
                            </a>
                           </li>
                        </ul>
                       </div>

                       <div className="user_post_ariya">
                        <div className="card shadow-sm">
                            <div className="card-body">
                                <div className="user_post_header">
                                    <img className="img_style" src="https://scontent.fdac24-4.fna.fbcdn.net/v/t39.30808-6/369056401_821458899641538_2174608844576823947_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=efb6e6&_nc_eui2=AeHKwPX_CbvsHpyYXT9nXfQYC5D_3XRPrtMLkP_ddE-u01P6kjV9lSVBZABpsUg4l7BRQO9MGGVlGnoq3jb1bbXN&_nc_ohc=C32Co0_E9b0AX82uUz4&_nc_ht=scontent.fdac24-4.fna&oh=00_AfD9w7MdZWGv8eoILfJZrr-XW-JTW0TQknNTrFuWuwhuqg&oe=65C251FD" alt=""/>
                                    <div onClick={showModal} className="post">
                                        <span>Whats on your mind, Md?</span>
                                    </div>
                                </div> <div className="user_post_divaider"></div>
                                <div className="user_post_body">
                                    <ul>
                                        <li>
                                            <a href="">
                                                <i className="fa-solid fa-video"></i>
                                                <span>Live Video</span>
                                            </a>
                                            </li>
                                        <li>
                                            <a href="">
                                                <i className="fa-regular fa-image"></i>
                                                <span>Photo/Video</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="">
                                                <i className="fa-regular fa-face-smile"></i>
                                                <span>Feeling/activity</span>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                       </div>

                       {facebooks?.length === 0 ? 'facebook Data not found' : facebooks?.map((item, index) => {
                        return  <div className="post_ariya" key={index}>
                        <div className="card">
                           <div className="post">
                            <div className="post_header">
                                <div className="post_header_left">
                                    <img className="img_style" src={item.photo} alt=""/>
                                   <div className="header_content">
                                    <span>{item.name}</span>
                                    <p>about 4 hour ago</p>
                                   </div>
                                </div>
                                <div className="post_header_right">
                                    <div className="icons">
                                        <i className="fa-solid fa-ellipsis"></i>
                                        <i onClick={() => handleEditFacebookUser(item)} className="fa-solid fa-pen-to-square"></i>
                                        <i onClick={() => handleFbUserDelete(item.id)} className="fa-solid fa-xmark"></i>
                                        
                                    </div>
                                </div>
                            </div>

                            <div className="post_body">

                                <div className="post_body_content">
                                    <p>{item.content}</p>
                                </div>

                                <div className="post_img">
                                    <img src={item.photo} alt=""/>
                                </div>
                                
                                <div className="post_divaider"></div>

                                <div className="react_ariya">
                                    <div className="react_left">
                                        <i className="fa-solid fa-heart"></i>
                              
                                        <i className="fa-solid fa-thumbs-up"></i>
                                        <span>Md Akash And 100K Others</span>
                                    </div>
                                    <div className="react_right">
                                       <p> 2K comments</p>
                                    </div>
                                </div> 

                                <div className="post_divaider"></div>

                                <div className="react_button">
                                    <div className="react_button_list">
                                        <i className="fa-regular fa-thumbs-up"></i>
                                        <span>Like</span>
                                    </div>
                                    <div className="react_button_list">
                                        <i className="fa-regular fa-comment"></i>
                                        <span>Comment</span>
                                    </div>
                                    <div className="react_button_list">
                                        <i className="fa-solid fa-share"></i>
                                        <span>Shere</span>
                                    </div>
                                </div> 
                                
                                <div className="post_divaider"></div> 

                                <div className="coment_view_ariya">
                                    <p>View more comments</p>
                                    <div className="user_comment">
                                        <img className="img_style" src={item.photo} alt=""/>
                                        <div className="user_content">
                                            <span>Md Akash</span>
                                            <p>Hey Hello😍</p>
                                        </div><br/>
                                        <div className="coment_time">
                                            <span>2h</span>
                                            <span>Like</span>
                                            <span>replay</span>
                                        </div>

                                       

                                    </div>

                                    <div className="my_comment my-4">
                                        <img className="img_style" src="https://scontent.fdac24-4.fna.fbcdn.net/v/t39.30808-6/369056401_821458899641538_2174608844576823947_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=efb6e6&_nc_eui2=AeHKwPX_CbvsHpyYXT9nXfQYC5D_3XRPrtMLkP_ddE-u01P6kjV9lSVBZABpsUg4l7BRQO9MGGVlGnoq3jb1bbXN&_nc_ohc=C32Co0_E9b0AX82uUz4&_nc_ht=scontent.fdac24-4.fna&oh=00_AfD9w7MdZWGv8eoILfJZrr-XW-JTW0TQknNTrFuWuwhuqg&oe=65C251FD" alt=""/>
                                        <input className="my_comment_input" type="text"/>
                                        <span>Write a public comment...</span>
                                    </div>
                                   
                                </div>
                            </div>
                           </div>
                        </div>
                       </div>
                       })}

                      

                    </div>
                    <div className="col-md-4 fb_body_right">
                        <div className="fb_body_right_ariya">
                            <div className="page_and_profile">
                                <div className="page_and_profile_header">
                                    <p>Yours Page and profile</p>
                                    <i className="fa-solid fa-ellipsis"></i>
                                </div>
                                <div className="page_and_profile_body">
                                    <ul>
                                        <li><a href="">
                                            <img className="img_style" src="https://scontent.fdac24-2.fna.fbcdn.net/v/t39.30808-1/273219749_105724255364186_4717124609675317127_n.jpg?stp=c4.0.40.40a_cp0_dst-jpg_p40x40&_nc_cat=105&ccb=1-7&_nc_sid=4da83f&_nc_eui2=AeHpiaAoCNMEamDkvD_y31YjcINLkdp_arNwg0uR2n9qs0dMPrgHLIM4SpKivutJvnEU7l1a2BZ9gx3LH1bScekx&_nc_ohc=L_zy6AGnowgAX8XOLho&_nc_ht=scontent.fdac24-2.fna&oh=00_AfD61N8xcNs14ZE3RjFpfbhZ4CbSZc-GQ95Z9YrJvGY56A&oe=65C30763" alt=""/>
                                            <span>একটু হাসি ও কান্না</span>
                                        </a></li>
                                        <li className="mleft"><a href="">
                                            <i className="fa-solid fa-repeat"></i>
                                            <span>switch into page</span>
                                        </a></li>
                                        <li className="mleft"><a href="">
                                            <i className="fa-solid fa-bullhorn"></i>
                                            <span>create promotion</span>
                                        </a></li>
                                        <div className="fb_body_right_ariya_divaider"></div>
                                    </ul>
                                </div>
                            </div>

                            <div className="fridend_requst_section">
                                <div className="fridend_requst_section_header">
                                    <p>Friend requests</p>
                                    <a href="">See All</a>
                                </div>
                                <div className="fridend_requst_section_body_main">
                                    <div className="fridend_requst_section_body">
                                        <div className="top">
                                            <div className="img_ariya">
                                                <img className="requst" src="https://scontent.fdac24-4.fna.fbcdn.net/v/t39.30808-6/369056401_821458899641538_2174608844576823947_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=efb6e6&_nc_eui2=AeHKwPX_CbvsHpyYXT9nXfQYC5D_3XRPrtMLkP_ddE-u01P6kjV9lSVBZABpsUg4l7BRQO9MGGVlGnoq3jb1bbXN&_nc_ohc=mgOvKZfBXBYAX_SSRro&_nc_ht=scontent.fdac24-4.fna&oh=00_AfBa6Rj4kF7OhNXEkki7FGcvU_s3lf41GyHWGp6I5ltx8A&oe=65C44C3D" alt=""/>
                                                <div className="content">
                                                    <span className="requst_name">Md akash</span>
                                                    <div className="small_img">
                                                        <img src="https://scontent.fdac24-4.fna.fbcdn.net/v/t39.30808-6/369056401_821458899641538_2174608844576823947_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=efb6e6&_nc_eui2=AeHKwPX_CbvsHpyYXT9nXfQYC5D_3XRPrtMLkP_ddE-u01P6kjV9lSVBZABpsUg4l7BRQO9MGGVlGnoq3jb1bbXN&_nc_ohc=mgOvKZfBXBYAX_SSRro&_nc_ht=scontent.fdac24-4.fna&oh=00_AfBa6Rj4kF7OhNXEkki7FGcvU_s3lf41GyHWGp6I5ltx8A&oe=65C44C3D" alt=""/> 
                                                        <span>1 metual friends</span>
                                                    </div>
                                                </div>
                                            </div>
                                            
                                        </div>
                                        <div className="bottom">
                                            <div className="requst_date_time">
                                                <span>5d</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="requst_parmition">
                                        <button className="confirm">Confirm</button>
                                        <button className="Delete">Delete</button>
                                    </div>
                                </div>
                                
                            </div>
                            <div className="fb_body_right_ariya_divaider"></div>

                            <div className="fb_body_right_brithday_section">
                                <div className="fb_body_right_brithday_section_header">
                                    <span>Brithdays</span>
                                </div>
                                <div className="fb_body_right_brithday_section_body">
                                   <img style={{height : '30px', width : '30px', borderRadius : '50%'}} src="https://scontent.fdac24-1.fna.fbcdn.net/v/t39.30808-6/422871451_247586351716185_628727967945560826_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=efb6e6&_nc_eui2=AeEhr0fIzbGQltlJC2BlSHyeA9y7Q2_UZQMD3LtDb9RlA8L3X5yiKoE6P2TCOcNZqtUwiTHkilTa_Goff2LB8x8M&_nc_ohc=7G2cv_IxgusAX9n5Mkv&_nc_ht=scontent.fdac24-1.fna&oh=00_AfD7y9cwMN-piFv6-rN09U5cMMU9cwW3zzMvHqZhe0SIfg&oe=65C3D10C" alt=""/>
                                    <p><a href="">Md Fahim</a> and <a href="">5 others</a> have their birthday today.</p>
                                </div>
                            </div>
                            <div className="fb_body_right_ariya_divaider"></div>

                            <div className="fb_body_right_contact_section">
                                <div className="fb_body_right_contact_header">
                                    <div className="left">
                                        <span>Contact</span>
                                    </div>
                                    <div className="right">
                                        <i className="fa-solid fa-magnifying-glass"></i>
                                        <i className="fa-solid fa-ellipsis"></i>
                                    </div>
                                </div>
                                <div className="fb_body_right_contact_body">
                                    <ul>
                                        <li><a href="">
                                            <img className="img_style" src="https://scontent.fdac24-3.fna.fbcdn.net/v/t39.30808-6/414943073_122118726632122369_7398529006501852720_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=efb6e6&_nc_eui2=AeGxCvsfmiVEOYgWeU45-Pox04MFaBh8W9jTgwVoGHxb2B1I8deaeicI90u27pADdp7ncgvBxeZTvI4fSxLBEfHh&_nc_ohc=9KEjwnUZh8AAX-yPxKn&_nc_ht=scontent.fdac24-3.fna&oh=00_AfBxeVPdFQq_oL0by4RcQt_mboeLH4L_BeD3w1gzbCDl-w&oe=65C3AE9E" alt=""/>
                                        </a> <span>Md Robiul</span></li>
                                        <li><a href="">
                                            <img className="img_style" src="https://scontent.fdac24-1.fna.fbcdn.net/v/t39.30808-6/422871451_247586351716185_628727967945560826_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=efb6e6&_nc_eui2=AeEhr0fIzbGQltlJC2BlSHyeA9y7Q2_UZQMD3LtDb9RlA8L3X5yiKoE6P2TCOcNZqtUwiTHkilTa_Goff2LB8x8M&_nc_ohc=MKOn_1V0ShQAX8w9gAD&_nc_ht=scontent.fdac24-1.fna&oh=00_AfD2cJUXb6hqJPzqq2wCuUCWPyK_8dFEdOAHO5v4flhrJg&oe=65C3D10C" alt=""/>
                                        </a> <span>Fahim Shikder</span></li>
                                        <li><a href="">
                                            <img className="img_style" src="https://scontent.fdac24-2.fna.fbcdn.net/v/t39.30808-6/421726394_758082702836195_2355226434091341037_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=efb6e6&_nc_eui2=AeHDScuorQmoIRvLPAF_-gago1THelvhBxqjVMd6W-EHGnjI31lK6i1M_4lsiSBgy4QlQrCboZZfRkID9IeDEigt&_nc_ohc=B321Q0zvf_MAX9jFK6T&_nc_ht=scontent.fdac24-2.fna&oh=00_AfBBUou3F2AKJ8eRWyzPjXuAi8Nwks3msVOJAhgJhpAXMw&oe=65C31745" alt=""/>
                                        </a> <span>Md Rifat</span></li>
                                        <li><a href="">
                                            <img className="img_style" src="https://scontent.fdac24-2.fna.fbcdn.net/v/t39.30808-6/415682956_1582231945648739_373676271628658799_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=efb6e6&_nc_eui2=AeEBIGDcE0P91BR63SlgCMcC80gMTHvcIRbzSAxMe9whFrcYQB1vbYn8izTMErTNcYTSw24jcZ4qghgAEHPogRjy&_nc_ohc=HcIlvtddN20AX_6GhJw&_nc_ht=scontent.fdac24-2.fna&oh=00_AfCcJwGp4rzoxJi2ETKrG0spzkrvNw33UYdBsvqjrZ6e2w&oe=65C30B22" alt=""/>
                                        </a> <span>Shahriar Hosen</span></li>
                                        <li><a href="">
                                            <img className="img_style" src="https://scontent.fdac24-3.fna.fbcdn.net/v/t39.30808-6/425495548_929636332070177_3937958935308130332_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=efb6e6&_nc_eui2=AeFxtnPSshKHnj3abcLw-3WHCvLciX617z0K8tyJfrXvPVmJWSvtpQwjaDB7X6dYScjCkMH10ktt5gdhilVYobW0&_nc_ohc=3BGOrWsk2k0AX8q8ir1&_nc_oc=AQlcvdGOHbM0vc1n38E5sUSp8bRKIdZDWljBd2cqrsUY_QprJRPvcqB90dtyNXj4FF4&_nc_ht=scontent.fdac24-3.fna&oh=00_AfCmQHvZCGZpeGSrZbrvKdAWhOjv1j815301VPSruC0PhQ&oe=65C2DD8B" alt=""/>
                                        </a> <span>Saimon Ahmed Topu</span></li>
                                        <li><a href="">
                                            <img className="img_style" src="https://scontent.fdac24-1.fna.fbcdn.net/v/t39.30808-6/328988087_924879425190914_6802909372933769345_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=efb6e6&_nc_eui2=AeHY5UHOIrZkOZOcoYLQQayTc2Ptoi-CgChzY-2iL4KAKDHo2JMRyZBv8eLXJdX-7Lqv8kSjQ82Uw66LiZFO0PG_&_nc_ohc=NwY612XrP8cAX-lNZsg&_nc_ht=scontent.fdac24-1.fna&oh=00_AfCBM3vMpOX3I7nWhrl3WbXCwh-yuWtwWGSgjpl883B2rg&oe=65C2CD58" alt=""/>
                                        </a> <span>MD Aminur Islam </span></li>
                                    </ul>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div> 

    </div>
    
   <Modal show={modal} centered onHide={hideModal}>
     <ModalHeader>
        <h4>Create New Post</h4>
        <i onClick={hideModal}>< FaTimes/></i>

     </ModalHeader>
     <ModalBody>
        <form action="">
            <div className="my-3">
                <label htmlFor="">Name</label>
                <input type="text" className='form-control' name='name' value={input.name} onChange={handleInputChange} />
            </div>
           
            <div className="my-3">
                <label htmlFor="">Content</label>
                <textarea type="text" className='form-control' name='content' value={input.content} onChange={handleInputChange} />
            </div>
            <div className="my-3">
                <label htmlFor="">Photo</label>
                <input type="text" className='form-control' name='photo' value={input.photo} onChange={handleInputChange} />
            </div>
            <div className="my-3">
                {edit ? <Button onClick={handleFacebookUpdate}  className='btn btn-primary'>Update</Button> :    <Button onClick={handleFacebookDataCreate} className='btn btn-primary'>Create now</Button> }
            
                
            </div>
        </form>
     </ModalBody>
   </Modal>
    
    </>
    
  )
}

export default Facebook