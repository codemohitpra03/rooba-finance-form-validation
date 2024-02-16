import React from 'react'
import user from "./assets/user.png"
import mail from "./assets/mail.png"
import age from "./assets/age.png"
import country from "./assets/country.png"
import password from "./assets/password.png"
import {useFormik} from "formik"
import * as Yup from "yup"

const App = () => {
	const formik = useFormik({
		initialValues: {
            firstname: "",
            lastname: "",
            email: "",
            age: "",
            country: "",
            password: "",
        },
		validationSchema: Yup.object({
			firstname: Yup.string()
                .min(2, "Too Short!")
                .max(15, "Too Long!")
                .required("First Name Required!"),
            lastname: Yup.string()
                .min(2, "Too Short!")
                .max(15, "Too Long!")
                .required("Last Name Required!"),
            email: Yup.string()
                .email("Invalid email!")
                .required("Email Required!"),
            age: Yup.number()
                .required("Age Required!"),
            country: Yup.string()
                .min(2, "Too Short!")
                .max(20, "Too Long!")
                .required("Country Required!"),
				password: Yup.string()
				.min(8,"Password Too short")
                .required("Password Required!"),
		}),
        onSubmit: (values) => {
			alert("Form submitted for user - " + values.firstname + " " + values.lastname)
            console.log(values)
        }
	})
	console.log(formik.touched);
	const isFormValid = formik.isValid && Object.keys(formik.touched).length > 0
	console.log(isFormValid);
  return (
    <div className="font-mono bg-[url('https://static.vecteezy.com/system/resources/previews/004/511/462/non_2x/mountain-peak-sundown-dark-sunset-at-mountain-vector.jpg')] bg-no-repeat bg-fixed  bg-cover min-h-screen flex items-center justify-center md:py-3">
		
		<div className="backdrop-blur-xl w-[300px] md:w-[500px] px-[2em] md:px-[2.5em] py-[2em] md:pt-[3em] space-y-3  md:pb-[3em] border-2 border-[#c6c3c3] rounded-[15px] z-10">
			<div className='flex justify-between'>
				<p className='text-gray-300 text-xl'>Welcome</p>
				<p className='text-gray-300 text-3xl font-extrabold'>Logo</p>
			</div>
			<p className='text-2xl md:text-4xl font-bold text-[#ff624a]'>Create A New Account</p>
			<p className='text-gray-200 font-thin text-sm'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem, assumenda.</p>

			<form className='space-y-3 md:space-y-2' onSubmit={formik.handleSubmit} autoComplete='off'>
				<div className='flex text-yellow-300 text-sm'>
					<p className='w-[50%]'>{formik.touched.firstname && formik.errors.firstname ? formik.errors.firstname:null}</p>
					<p className='hidden md:block w-[50%]'>{formik.touched.lastname && formik.errors.lastname ? formik.errors.lastname:null}</p>
					
					
				</div>

				<div className='flex flex-wrap flex-col md:flex-row relative space-y-2 md:space-x-3 md:space-y-0 w-full'>
					<div className='flex items-center bg-[rgb(52,25,25)] rounded-lg'>
						<img src={user} className='w-5 h-5 mx-2 my-1' alt="" />
						<input onBlur={formik.handleBlur} onChange={formik.handleChange} type="text" name='firstname' value={formik.values.firstname} className='bg-[rgb(52,25,25)] text-white md:w-40 outline-none rounded-r-lg p-2' placeholder='Your First Name'/>
					</div>
					
					<p className='text-yellow-300 text-sm md:hidden'>{formik.touched.lastname && formik.errors.lastname ? formik.errors.lastname:null}</p>
					<div className='flex items-center bg-[rgb(52,25,25)] rounded-lg'>
						<img src={user} className='w-5 h-5 mx-2 my-1' alt="" />
						<input onBlur={formik.handleBlur} onChange={formik.handleChange} type="text" name='lastname' value={formik.values.lastname} className='bg-[rgb(52,25,25)] text-white md:w-40 outline-none rounded-r-lg p-2' placeholder='Your Last Name'/>
					</div>
				</div>

				<p className='text-yellow-300 text-sm'>{formik.touched.email && formik.errors.email ? formik.errors.email:null}</p>
				<div className='relative w-full'>
					<div className='flex items-center bg-[rgb(52,25,25)] rounded-lg md:w-[405px]'>
						<img src={mail} className='w-7 h-7 mx-1 my-1' alt="" />
						<input onBlur={formik.handleBlur} onChange={formik.handleChange} type="email" name='email' value={formik.values.email} className='bg-[rgb(52,25,25)] text-white w-96 md:w-40 outline-none rounded-r-lg p-2' placeholder='Your email'/>
					</div>
				</div>

				<p className='text-yellow-300 text-sm'>{formik.touched.age && formik.errors.age ? formik.errors.age:null}</p>
				<div className='relative w-full'>
					<div className='flex items-center bg-[rgb(52,25,25)] rounded-lg md:w-[405px]'>
						<img src={age} className='w-5 h-5 mx-2 my-1' alt="" />
						<input onBlur={formik.handleBlur} onChange={formik.handleChange} type="number" name='age' value={formik.values.age} className='bg-[rgb(52,25,25)] text-white w-96 md:w-40 outline-none rounded-r-lg p-2' placeholder='Your age'/>
					</div>
				</div>

				<p className='text-yellow-300 text-sm'>{formik.touched.country && formik.errors.country ? formik.errors.country:null}</p>
				<div className='relative w-full'>
					<div className='flex items-center bg-[rgb(52,25,25)] rounded-lg md:w-[405px]'>
						<img src={country} className='w-5 h-5 mx-2 my-1' alt="" />
						<input onBlur={formik.handleBlur} onChange={formik.handleChange} type="text" name='country' value={formik.values.country} className='bg-[rgb(52,25,25)] text-white w-96 md:w-40	 outline-none rounded-r-lg p-2' placeholder='Your country'/>
					</div>
				</div>

				<p className='text-yellow-300 text-sm'>{formik.touched.password && formik.errors.password ? formik.errors.password:null}</p>
				<div className='relative w-full'>
					<div className='flex items-center bg-[rgb(52,25,25)] rounded-lg md:w-[405px]'>
						<img src={password} className='w-5 h-5 mx-2 my-1' alt="" />
						<input onBlur={formik.handleBlur} onChange={formik.handleChange} type="password" name='password' value={formik.values.password} className='bg-[rgb(52,25,25)] text-white w-96 md:w-40 outline-none rounded-r-lg p-2' placeholder='Password'/>
					</div>
				</div>
				<button type='submit' disabled={isFormValid === false} style={{background:`linear-gradient(90deg, rgba(207,5,5,${isFormValid ? "1" :"0.23"}) 0%, rgba(214,25,25,${isFormValid ? "1" :"0.23"}) 32%, rgba(219,169,0,${isFormValid ? "1" :"0.23"}) 100%)`}} className={`bg-[rgb(149,24,24,${isFormValid?"1":"0.23"})] md:w-[405px] rounded-lg p-3 text-${isFormValid?"white":"[#6e6e6e]"}`}>Create Account</button>
				{/* <button type='submit' style={{background:"linear-gradient(90deg, rgba(207,5,5,0.23) 0%, rgba(214,25,25,0.23) 32%, rgba(219,169,0,0.23) 100%)"}} className='bg-[rgba(149,24,24,0.23)] md:w-[405px] rounded-lg p-3 text-[#6e6e6e]'>Create Account</button> */}
			</form>
		</div>
		
    </div>
  )
}

export default App