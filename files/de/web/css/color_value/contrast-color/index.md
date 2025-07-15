---
title: contrast-color()
slug: Web/CSS/color_value/contrast-color
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

{{SeeCompatTable}}

Die **`contrast-color()`** [CSS](/de/docs/Web/CSS) [Funktion](/de/docs/Web/CSS/CSS_Values_and_Units/CSS_Value_Functions) nimmt einen {{cssxref("color_value","Farbwert")}} und gibt eine [garantiert](https://w3c.github.io/wcag/guidelines/22/#contrast-minimum) kontrastierende Farbe zurück.

`contrast-color()` macht es einfach, zum Beispiel eine Textfarbe anzugeben und automatisch eine kontrastierende Hintergrundfarbe zu erzeugen oder umgekehrt. Es vermeidet die Notwendigkeit, Paare von Hintergrund- und Textfarben zu pflegen.

## Syntax

```css
contrast-color(red)
contrast-color(var(--backgroundColor))
```

### Parameter

- `color`
  - : Jeder gültige {{cssxref("&lt;color&gt;")}} Wert.

### Rückgabewert

Ein {{cssxref("named-color")}} entweder `white` oder `black`.

## Beschreibung

Die `contrast-color()` Funktion gibt je nach größtem Kontrast zum Eingabefarbwert entweder den Wert `white` oder `black` zurück. Haben sowohl `white` als auch `black` den gleichen Kontrast zum Eingabewert, wird `white` zurückgegeben.

> [!WARNING]
> Es gibt keine Garantie, dass die mit der Funktion `contrast-color()` zurückgegebenen Werte ein barrierefreies Ergebnis liefern. Mitteltönige Hintergrundfarben bieten in der Regel nicht genug Kontrast. Es wird daher empfohlen, helle oder dunkle Farben mit der Funktion `contrast-color()` zu verwenden.

## Beispiele

### Kontrastierender Text für einen Button

Im folgenden Beispiel wendet der Browser automatisch eine kontrastierende Farbe auf den Text des Absenden-{{htmlelement("button")}} an, wenn Sie dessen Hintergrundfarbe ändern.

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

{{EmbedLiveSample("Kontrastierender Text für einen Button", "", 250)}}

### Verwendung von Licht- und Dunkelmodus

Im folgenden Beispiel wird die [`prefers-color-scheme`](/de/docs/Web/CSS/@media/prefers-color-scheme) [Media Query](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries) verwendet, um eine Hintergrundfarbe basierend auf Betriebssystem- oder Browser-Farbschemaeinstellungen zu setzen. Die `contrast-color()` Funktion wird verwendet, um die Textfarbe automatisch zu setzen.

Versuchen Sie, die Dunkelmodus-Einstellung des Browsers oder Betriebssystems zu ändern, um den Effekt zu sehen.

```html hidden
<pre>
    Q: How does CSS transform light into energy?
  Ans: Using <a href="/en-US/docs/Web/CSS/font-synthesis">font-synthesis</a>.
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

{{EmbedLiveSample("Verwendung von Licht- und Dunkelmodus", "", 250)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`contrast()`](/de/docs/Web/CSS/filter-function/contrast)
- [CSS-Farben](/de/docs/Web/CSS/CSS_colors) Modul
- [CSS Custom Properties](/de/docs/Web/CSS/--*) und {{cssxref("var")}}
- [`prefers-contrast`](/de/docs/Web/CSS/@media/prefers-contrast) und [`prefers-color-scheme`](/de/docs/Web/CSS/@media/prefers-color-scheme) {{cssxref("@media")}} Features
- [WCAG: Farbkontrast](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable/Color_contrast)
- [Wie der Browser eine kontrastierende Farbe in CSS auswählt](https://webkit.org/blog/16929/contrast-color/) auf webkit.org (2025)
- [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/) auf webaim.org (2025)
