import { useDispatch, useSelector } from "react-redux";
import { takeGetProjectFetchAction } from "./redux/actionCreator";
import Modal from "./component/modal";
import InputField from "./component/InputField";
import Map from './component/Map';
import ProjectCard from "./component/ProjectCard";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { HiOutlineUpload } from "react-icons/hi";
function App() {
  const [photo, setPhotoUrl] = useState(null)
    const [open, setOpen] = useState(null);
  const [cv, setCv] = useState(null)
  const [user, SetUser] = useState({
    name: '',
    address: '',
    email: '',
  })
  const handleChange = (e) => {
    SetUser({ ...user, [e.target.name]: e.target.value });
  }
  const myDispatch = useDispatch();
  const retrivedData = useSelector((state) => {
    return state.payload;
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {

  };
  const handlePanImageChange = (event) => {
    const file = event.target.files[0];
    const imageURL = URL.createObjectURL(file);
    setPhotoUrl(imageURL);
    // const formData = new FormData();
    // formData.append("image", file);
    // setImage(formData);
  };
  const handleCV = (event) => {
    const file = event.target.files[0];
    const allowedTypes = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];

    if (file && allowedTypes.includes(file.type)) {
      const fileURL = URL.createObjectURL(file);
      setCv(fileURL);

    } else {
      alert("Please upload a valid CV file (PDF, DOC, or DOCX).");
    }
  };
  useEffect(() => {
    myDispatch(takeGetProjectFetchAction());
  },[])
  return (
    <>
      {/* popoup modal section */}
      <Modal isOpen={open} setClose={setOpen} title={"Contact Form"}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className=" flex flex-col gap-4">
            <div>
              <InputField
                label={"Name"}
                name={"name"}
                register={register}
                onChange={handleChange}
                rules={{
                  required: "Name is required",
                }}
                errors={errors}
              />
            </div>
            <div>
              <InputField
                label={"Address"}
                name={"address"}
                register={register}
                onChange={handleChange}
                rules={{
                  required: "Address is required",
                }}
                errors={errors}
              />
            </div>
            <div>
              <InputField
                label={"Email"}
                name={"email"}
                register={register}
                onChange={handleChange}
                rules={{
                  required: " Email is required",
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: "Please enter a valid email address",
                  },
                }}
                errors={errors}
              />
            </div>
            <div>
              <InputField
                label={"Contact"}
                name={"contact"}
                register={register}
                onChange={handleChange}
                rules={{
                  required: "Contact is required",
                }}
                errors={errors}
              />
            </div>
            <div>
              <label htmlFor="photo">
                <div className="  flex gap-4 cursor-pointer relative rounded-[0.5rem]  w-[200px]    px-4    py-4   bg-white ">
                  <div>
                    <span className="  text-blue-700 font-bold text-base ">
                      Upload Photo
                    </span>
                  </div>
                  <div className="">
                    <div>
                      <input
                        id="photo"
                        name="phtot"
                        type="file"
                        onChange={handlePanImageChange}
                        className="py-3  hidden  w-[300px]"
                      />
                    </div>
                    <div>
                      {" "}
                      <HiOutlineUpload className=" text-3xl text-blue-500" />
                    </div>
                  </div>
                </div>
              </label>
              {photo && (
                <div className=" mt-4 ">
                  <img src={photo} alt="Preview" width={300} height={400} />
                </div>
              )}
            </div>
            <div>
              <label htmlFor="cv">
                <div className="  flex gap-4 cursor-pointer relative rounded-[0.5rem] w-[180px]    px-4    py-4   bg-white ">
                  <div>
                    <span className="  text-blue-700 font-bold text-base">
                      Upload cv
                    </span>
                  </div>
                  <input
                    id="cv"
                    type="file"
                    accept=".pdf, .doc, .docx"
                    name="company_registration_image"
                    onChange={handleCV}
                    className="py-3  hidden  w-[300px]"
                  />
                  <div>
                    <HiOutlineUpload className=" text-3xl text-blue-500" />
                  </div>
                </div>
              </label>
              {cv && (
                <div className=" mt-4 ">
                  <iframe
                    src={cv}
                    style={{ width: "100%", height: "500px" }}
                  ></iframe>
                </div>
              )}
            </div>
            <div>
              <button
                type="submit"
                className="  bg-yellow-300 px-10 py-4 w-full  rounded-md"
              >
                Submit
              </button>
            </div>
          </div>
        </form>
      </Modal>
      {/* map section */}
      <div className=" ">
        <Map setOpen={setOpen} />
      </div>
      <div className=" px-5">
        {/* project listing section */}
        <div className=" mt-10 grid grid-cols-3 gap-10">
          {retrivedData &&
            retrivedData.map((data) => {
              //  console.log(data.title,'hello')
              return (
                <div>
                  <ProjectCard data={data} />
                </div>
              );
            })}
        </div>
        <ProjectCard />
      </div>{" "}
    </>
  );
}
export default App;