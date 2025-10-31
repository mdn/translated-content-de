---
title: contrast-color()
slug: Web/CSS/color_value/contrast-color
l10n:
  sourceCommit: 55326f330a6ae829494c7606b1bd47b2c0f9d888
---

{{SeeCompatTable}}

Die **`contrast-color()`** [CSS](/de/docs/Web/CSS) [Funktion](/de/docs/Web/CSS/CSS_values_and_units/CSS_value_functions) nimmt einen {{cssxref("color_value","Farbwert")}} und gibt eine kontrastreiche Farbe zurück. Die Funktion stellt in der Regel den [WCAG AA Mindestkontrast](https://w3c.github.io/wcag/guidelines/22/#contrast-minimum) sicher. Die Browser können unterschiedliche und bessere Algorithmen verwenden.

`contrast-color()` erleichtert es, beispielsweise eine Textfarbe anzugeben und automatisch eine kontrastreiche Hintergrundfarbe zu generieren oder umgekehrt. Es vermeidet die Notwendigkeit, Hintergrund-Text-Farbpaare zu pflegen.

## Syntax

```css
contrast-color(red)
contrast-color(var(--backgroundColor))
```

### Parameter

- `color`
  - : Jeder gültige {{cssxref("&lt;color&gt;")}} Wert.

### Rückgabewert

Ein {{cssxref("named-color")}} von entweder `white` oder `black`.

## Beschreibung

Die Funktion `contrast-color()` gibt einen Wert von `white` oder `black` zurück, je nachdem, welcher Wert den größten Kontrast zur Eingabefarbe hat. Wenn sowohl `white` als auch `black` den gleichen Kontrast zur Eingabefarbe haben, wird `white` zurückgegeben.

> [!WARNING]
> Der WCAG AA (4.5:1) Kontrast ist nicht in der Lage, in allen Fällen klar lesbaren Text zu erzeugen. Mitteltönige Hintergrundfarben bieten im Allgemeinen nicht genug Kontrast zu entweder schwarzem oder weißem Vordergrund. Beispielsweise erzeugt `contrast-color()` auf einem königsblauen (`#2277d3`) Hintergrund schwarzen Text, der für kleinen Text nicht lesbar ist. Es wird daher empfohlen, helle oder dunkle Farben mit der `contrast-color()` Funktion zu verwenden.

## Beispiele

### Kontrastreicher Text für einen Button

Im folgenden Beispiel wendet der Browser automatisch eine kontrastreiche Farbe auf den Text des Absenden-{{htmlelement("button")}} an, wenn Sie dessen Hintergrundfarbe ändern.

```html hidden
<label>
  Select background color of the button:
  <input type="color" id="colorPicker" value="#660066" />
</label>
<br />
<button>Submit</button>
```

```css
:root {
  --button-color: lightblue;
}

button {
  background-color: var(--button-color);

  /* Set contrasting text color automatically */
  color: contrast-color(var(--button-color));
}
```

```css hidden
body {
  padding: 1rem;
}

button {
  margin: 3rem;
  padding: 1rem;
  width: 150px;
  font-size: 2rem;
  border-radius: 1rem;
}

@supports not (color: contrast-color(red)) {
  body::before {
    content: "Your browser doesn't support the contrast-color() function.";
    background-color: wheat;
    display: block;
    width: 100%;
    text-align: center;
  }

  body > * {
    display: none;
  }
}
```

```js hidden
const colorPicker = document.getElementById("colorPicker");
const root = document.documentElement;

function updateColor(color) {
  root.style.setProperty("--button-color", colorPicker.value);
}

colorPicker.addEventListener("change", updateColor);
updateColor();
```

{{EmbedLiveSample("Contrasting text for a button", "", 250)}}

### Verwendung in Licht- und Dunkelmodus

Im folgenden Beispiel wird die [`prefers-color-scheme`](/de/docs/Web/CSS/@media/prefers-color-scheme) [Media-Query](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries) verwendet, um eine Hintergrundfarbe basierend auf den Farbeinstellung des Betriebssystems oder Browsers festzulegen. Die `contrast-color()` Funktion wird benutzt, um die Textfarbe automatisch festzulegen.

Versuchen Sie, die Dunkelmodus-Einstellung des Browsers oder Betriebssystems zu ändern, um den Effekt zu sehen.

```html hidden
<pre>
    Q: How does CSS transform light into energy?
  Ans: Using <a href="/en-US/docs/Web/CSS/Reference/Properties/font-synthesis">font-synthesis</a>.
</pre>
```

```css
:root {
  --background-color: navy;
}

@media (prefers-color-scheme: light) {
  :root {
    --background-color: wheat;
  }
}

body,
a {
  background-color: var(--background-color);
  color: contrast-color(var(--background-color));
}
```

```css hidden
body {
  padding: 2rem;
  font-size: 1.2rem;
}

pre {
  margin-top: 3rem;
}

@supports not (color: contrast-color(red)) {
  body::before {
    content: "Your browser doesn't support the contrast-color() function.";
    background-color: wheat;
    display: block;
    width: 100%;
    text-align: center;
  }

  body {
    background-color: white;
  }

  body > * {
    display: none;
  }
}
```

{{EmbedLiveSample("Light and dark mode usage", "", 250)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`contrast()`](/de/docs/Web/CSS/filter-function/contrast)
- [CSS-Farbmodul](/de/docs/Web/CSS/CSS_colors)
- [CSS-Custom-Properties](/de/docs/Web/CSS/Reference/Properties/--*) und {{cssxref("var")}}
- [`prefers-contrast`](/de/docs/Web/CSS/@media/prefers-contrast) und [`prefers-color-scheme`](/de/docs/Web/CSS/@media/prefers-color-scheme) {{cssxref("@media")}} Funktionen
- [WCAG: Farbkontrast](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable/Color_contrast)
- [Anleitung, wie der Browser eine kontrastreiche Farbe in CSS auswählt](https://webkit.org/blog/16929/contrast-color/) auf webkit.org (2025)
- [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/) auf webaim.org (2025)
