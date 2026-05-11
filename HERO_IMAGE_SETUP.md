# Hero Background Image Setup

## Instructions

The HeroSection is configured to use a background image located at `/images/hero-background.jpg`.

### To add the background image:

1. **Download the hero image** (children jumping on colorful tire stacks - red, blue, green stacks)

2. **Create the images folder** in the public directory:

   ```bash
   mkdir -p public/images
   ```

3. **Save the image** as `public/images/hero-background.jpg`

### Image Requirements:

- **Format**: JPG or PNG
- **Dimensions**: Recommended 1920x1080px or higher
- **Content**: Children/students jumping on colorful Banafit tire stacks (Plyo-Ban)
- **Optimization**: Compress for web (target <500KB)

### Current Setup:

- Image path: `/images/hero-background.jpg`
- Uses CSS `background-cover` and `background-center`
- Dark overlay (`bg-black/40`) for text readability
- Responsive across all screen sizes

### After adding the image:

The HeroSection will automatically display the background image with:

- Animated text overlay
- Dark overlay for contrast
- Text shadows for readability
- Scroll indicator animation
