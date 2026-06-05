## Code Review Exercise

## Code Review Exercise

### Issue #1: Buttons are written as links

The "More Info" buttons and "Load New Cats Facts" button are written with `<a>` tags, but they do not go to another page. They trigger JavaScript actions instead which is an issue because links should be used for navigation, and buttons should be used for actions. This also makes the page better for keyboard users and screen readers.

Initial code:

```html
<a class="more-info-button">More Info</a>
<a class="reload-cat-facts">Load New Cats Facts</a>
```

Updated code:

```html
<button class="more-info-button" type="button">More Info</button>
<button class="reload-cat-facts" type="button">Load New Cat Facts</button>
```

### Issue #2: Form labels are not properly connected to inputs

The form uses span elements as visible labels for some inputs. This is an accessibility issue because screen readers may not correctly connect the text label with the input. A real label element should be used with a for attribute that matches the input id.

Initial code:

```html
<p class="label-input-group form-element-container">
  <span class="form-label">Name</span>
  <input
    aria-label="name"
    class="form-input-box"
    type="text"
    id="name"
    name="name"
  />
</p>
```

Updated code:

```html
<p class="label-input-group form-element-container">
  <label class="form-label" for="name">Name</label>
  <input class="form-input-box" type="text" id="name" name="name" />
</p>
```

### Issue #3: Submit and reset buttons are outside the form

The submit and reset buttons are placed outside the form element. This is an issue because form controls should belong to the form they control. Keeping the buttons inside the form makes the HTML structure clearer and helps the submit and reset actions work correctly.

Initial code:

```html
<form id="RequestInfo" class="content-container form">
  ...
</form>

<div class="form space-evenly-distributed-row-container form-buttons-container">
  <input class="form-button" type="submit" value="submit" />
  <input class="form-button" type="reset" value="reset" />
</div>
```

Updated code:

```html
<form id="RequestInfo" class="content-container form">
  ...

  <div class="space-evenly-distributed-row-container form-buttons-container">
    <input class="form-button" type="submit" value="submit" />
    <input class="form-button" type="reset" value="reset" />
  </div>
</form>
```

### Issue #4: Checkbox group should use fieldset and legend

The checkbox group is visually grouped, but it does not use a fieldset and legend. This is an accessibility issue because screen readers need to understand that the checkboxes belong to one question. A fieldset and legend make the group structure clearer.

Initial code:

```html
<div class="form-fieldset form-element-container">
  <p class="form-label">What breeds would you like to learn?</p>
  <div>
    <input type="checkbox" id="siamese" name="breed1" value="siamese" />
    <label for="siamese">Siamese Cat</label>
  </div>
</div>
```

Updated code:

```html
<fieldset class="form-fieldset form-element-container">
  <legend class="form-label">What breeds would you like to learn?</legend>
  <div>
    <input type="checkbox" id="siamese" name="breed1" value="siamese" />
    <label for="siamese">Siamese Cat</label>
  </div>
</fieldset>
```

### Issue #5: Some close buttons are missing accessible labels

Some popup close buttons only contain an icon and do not have text, an aria label, or a title. This is an accessibility issue because screen readers may not know what the button does. Adding an aria label gives the button a clear accessible name.

Initial code:

```html
<button class="close-popup-button">
  <i class="fa-solid fa-xmark"></i>
</button>
```

Updated code:

```html
<button
  class="close-popup-button"
  type="button"
  aria-label="close popup window"
  title="close popup window"
>
  <i class="fa-solid fa-xmark"></i>
</button>
```