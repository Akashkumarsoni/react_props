import { ClassMid } from "./App";

export class ClassLast extends ClassMid {
 
    render() {
      return (
        <div className="App">
          <h1>
            Last class {super.render()}
            {this.props.name3}
          </h1>
        </div>
      );
    }
  }