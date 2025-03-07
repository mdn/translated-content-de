---
title: :autofill
slug: Web/CSS/:autofill
l10n:
  sourceCommit: 33a12980eb49cc795a41f15ec7a0181270ad3048
---

{{CSSRef}}

Die **`:autofill`** CSS-[Pseudoklasse](/de/docs/Web/CSS/Pseudo-classes) wird verwendet, wenn ein {{HTMLElement("input")}}-Element vom Browser automatisch ausgefüllt wurde. Die Klasse wird nicht mehr angewendet, wenn der Benutzer das Feld bearbeitet.

{{InteractiveExample("CSS Demo: :autofill", "tabbed-shorter")}}

```css interactive-example
label {
  display: block;
  margin-top: 1em;
}

input:is(:-webkit-autofill, :autofill) {
  border: 3px solid darkorange;
}
```

```html interactive-example
<form>
  <p>Click on the text box and choose any option suggested by your browser.</p>

  <label for="name">Name</label>
  <input id="name" name="name" type="text" autocomplete="name" />

  <label for="email">Email Address</label>
  <input id="email" name="email" type="email" autocomplete="email" />

  <label for="country">Country</label>
  <input id="country" name="country" type="text" autocomplete="country-name" />
</form>
```

> [!NOTE]
> Die Benutzerschnittstellen-Stylesheets vieler Browser verwenden `!important` in ihren `:-webkit-autofill`-Stildeklarationen, wodurch diese nicht von Webseiten ohne JavaScript-Tricks überschrieben werden können. Zum Beispiel hat Chrome Folgendes in seinem internen Stylesheet:
>
> ```css
> background-color: rgb(232 240 254) !important;
> background-image: none !important;
> color: -internal-light-dark(black, white) !important;
> ```
>
> Das bedeutet, dass Sie {{cssxref('background-color')}}, {{cssxref('background-image')}} oder {{cssxref('color')}} in Ihren eigenen Regeln nicht festlegen können.

## Syntax

```css
:autofill {
  /* ... */
}
```

## Beispiele

Das folgende Beispiel zeigt die Verwendung der `:autofill`-Pseudoklasse, um den Rahmen eines Textfelds zu ändern, das vom Browser automatisch ausgefüllt wurde.
Um sicherzustellen, dass wir keine [ungültige Selektorliste](/de/docs/Web/CSS/Selector_list#invalid_selector_list) erstellen, werden sowohl `:-webkit-autofill` als auch `:autofill` unter Verwendung einer toleranten Selektorliste mit {{cssxref(":is()")}} zusammengeführt.

```css
input {
  border-radius: 3px;
}

input:is(:-webkit-autofill, :autofill) {
  border: 3px dotted orange;
}
```

```html
<form method="post" action="">
  <label for="email">Email</label>
  <input type="email" name="email" id="email" autocomplete="email" />
</form>
```

{{EmbedLiveSample('Examples')}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Chromium Issue 46543: Auto-filled input text box yellow background highlight cannot be turned off](https://crbug.com/46543)
- [WebKit-Bug 66032: Allow site authors to override autofilled fields' colors.](https://webkit.org/b/66032)
- [Mozilla-Bug 740979: implement `:-moz-autofill` pseudo-class on input elements with an autofilled value](https://bugzil.la/740979)
- [User Interface Module Level 4: more selectors](https://wiki.csswg.org/spec/css4-ui#more-selectors)
