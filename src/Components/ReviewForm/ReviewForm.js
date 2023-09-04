import './ReviewForm.css'
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";

export default function ReviewForm() {
  return (
    <table class="table table-borderless custom-table">
      <thead>
        <tr>
          <th scope="col" style={{padding: "10px"}}>Serial Number</th>
          <th scope="col">Doctor Name</th>
          <th scope="col">Doctor Speciality</th>
          <th scope="col">Provide Feedback</th>
          <th scope="col">Review Given</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td style={{padding: "20px 0"}}>1</td>
          <td>Dr. john Doe</td>
          <td>Cardiology</td>
          <td><button type="button" class="btn btn-primary">Click Here</button></td>
          <td></td>
        </tr>
        <tr class="table-light">
          <td>2</td>
          <td>Dr. Jane Smith</td>
          <td>Dermatology</td>
          <td><button type="button" class="btn btn-primary">Click Here</button></td>
          <td>1</td>
        </tr>
      </tbody>
    </table>
  )
}