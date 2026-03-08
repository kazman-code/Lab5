import { Component, signal } from '@angular/core';//imports component and signal
import { RouterOutlet } from '@angular/router';//imports router outlet

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],//allows routing to work in this component
  templateUrl: './app.html',//html file
  styleUrl: './app.css'//css file
})
export class App {
  protected readonly title = signal('data-app');//reactive variable that stores app title using signal()
}
