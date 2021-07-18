import { h, Component, Prop } from '@stencil/core';

@Component({
  tag:'omg-toggle-button',
  styleUrl: './toggle-button.scss',
  shadow: true
})
export class toggleButton{
  @Prop() buttonText: string;
  render(){
    return(
      <button type='submit'>{this.buttonText}</button>
    );
  }
}
