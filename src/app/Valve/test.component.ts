import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css'],
})
export class TestComponent {
  rotation: number = 0; // Current rotation angle in degrees
  velocity: number = 0; // Speed at which the rotation changes
  isDragging: boolean = false;
  startX: number = 0;
  startY: number = 0;
  lastRotation: number = 0; // Last rotation for calculating change in angle

  // Handles the mouse down event to start the drag
  onMouseDown(event: MouseEvent): void {
    this.isDragging = true;
    this.startX = event.clientX;
    this.startY = event.clientY;
    this.lastRotation = this.rotation; // Save the current rotation as the starting point
    event.preventDefault();
  }

  // Handles the mouse up event to stop the drag
  onMouseUp(event: MouseEvent): void {
    this.isDragging = false;
  }

  // Handles the mouse move event to rotate the valve image
  onMouseMove(event: MouseEvent): void {
    if (!this.isDragging) return;

    const deltaX = event.clientX - this.startX;
    const deltaY = event.clientY - this.startY;

    // Calculate the new rotation angle using atan2 (gives an angle in radians)
    const newRotation = Math.atan2(deltaY, deltaX) * (180 / Math.PI);

    // Calculate the change in angle from the last position
    const angleDelta = newRotation - this.lastRotation;

    // Adjust the velocity (how fast the rotation should smooth to the new position)
    this.velocity += angleDelta * 0.001; // Adjust this factor to control the speed of the rotation

    // Smooth the rotation based on the velocity, limiting to a reasonable threshold
    this.rotation += this.velocity;
    this.velocity *= 0.95; // Decay the velocity over time for smooth stopping effect

    // Update the starting mouse position for the next movement
    this.startX = event.clientX;
    this.startY = event.clientY;

    // Ensure the rotation stays within 0-360 degrees
    if (this.rotation >= 360) {
      this.rotation -= 360;
    } else if (this.rotation < 0) {
      this.rotation += 360;
    }

    event.preventDefault();
  }
}