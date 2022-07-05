import { ClassTop } from "./App";

export class ClassMid extends ClassTop {
  
    render() {
      return (
        <div className="App@@">
          <p>{super.username}</p>
          <h1>Mid class@@ {super.render()}</h1>
          <p>{this.props.name2}</p>
        </div>
      );
    }
  }