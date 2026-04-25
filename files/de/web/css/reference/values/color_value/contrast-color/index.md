---
title: "`contrast-color()` CSS-Funktion"
short-title: contrast-color()
slug: Web/CSS/Reference/Values/color_value/contrast-color
l10n:
  sourceCommit: a8b7faffbd3fdeae5c0be97793d963d8a31cd1cf
---

Die **`contrast-color()`** [CSS](/de/docs/Web/CSS) [Funktion](/de/docs/Web/CSS/Reference/Values/Functions) nimmt einen {{cssxref("color_value","color")}} Wert und gibt eine kontrastreiche Farbe zurück. Die Funktion stellt üblicherweise [den WCAG AA Mindestkontrast](https://w3c.github.io/wcag/guidelines/22/#contrast-minimum) sicher. Browser können unterschiedliche und bessere Algorithmen verwenden.

Die `contrast-color()` Funktion ermöglicht es, eine Textfarbe anzugeben und automatisch eine kontrastreiche Hintergrundfarbe zu generieren oder umgekehrt. Sie vermeidet die Notwendigkeit, Hintergrund-Text-Farbpaare beizubehalten.

## Syntax

```css
contrast-color(red)
contrast-color(var(--backgroundColor))
```

### Parameter

- `color`
  - : Jeder gültige {{cssxref("&lt;color&gt;")}} Wert.

### Rückgabewert

Eine {{cssxref("named-color")}} von entweder `white` oder `black`.

## Beschreibung

Die `contrast-color()` Funktion gibt einen Wert von `white` oder `black` zurück, abhängig davon, welcher Wert den größten Kontrast zur Eingabefarbe hat. Wenn sowohl `white` als auch `black` den gleichen Kontrast zur Eingabefarbe haben, wird `white` zurückgegeben.

> [!WARNING]
> WCAG AA (4.5:1) Kontrast ist nicht in der Lage, in allen Fällen klar lesbaren Text zu erzeugen. Mitteltönige Hintergrundfarben bieten generell nicht genug Kontrast zu entweder schwarzem oder weißem Vordergrund. Zum Beispiel erzeugt `contrast-color()` auf einem königsblauem (`#2277d3`) Hintergrund schwarzen Text, der für kleinen Text nicht lesbar ist. Daher wird empfohlen, mit der `contrast-color()` Funktion helle oder dunkle Farben zu verwenden.

## Beispiele

### Kontrastierender Text für einen Button

Im folgenden Beispiel wendet der Browser automatisch die ausgewählte Farbe auf den Hintergrund des "Button" {{htmlelement("button")}} an und die kontrastreiche Farbe (schwarz oder weiß) auf dessen Text.

```html hidden
<label>
  Select background color of the button:
  <input type="color" id="colorPicker" value="#660066" />
</label>
<br />
<button>Button</button>
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
    text-align: center;
    padding: 1rem 0;
  }
}
```

```js hidden
const colorPicker = document.getElementById("colorPicker");
const root = document.documentElement;

function updateColor(color) {
  root.style.setProperty("--button-color", colorPicker.value);
}

colorPicker.addEventListener("input", updateColor);
updateColor();
```

{{EmbedLiveSample("Kontrastierender Text für einen Button", "", 250)}}

### Verwendung in Light- und Dark-Mode

Im folgenden Beispiel wird die [`prefers-color-scheme`](/de/docs/Web/CSS/Reference/At-rules/@media/prefers-color-scheme) [Media Query](/de/docs/Web/CSS/Guides/Media_queries/Using) verwendet, um eine Hintergrundfarbe basierend auf den Farbeinstellung des Betriebssystems oder Browsers festzulegen. Die `contrast-color()` Funktion wird verwendet, um die Textfarbe automatisch festzulegen.

Versuchen Sie, die Dark-Mode-Einstellung des Browsers oder Betriebssystems zu ändern, um den Effekt zu sehen.

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
    text-align: center;
    padding: 1rem 0;
  }
}
```

{{EmbedLiveSample("Verwendung in Light- und Dark-Mode", "", 250)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`contrast()`](/de/docs/Web/CSS/Reference/Values/filter-function/contrast)
- [CSS-Farben](/de/docs/Web/CSS/Guides/Colors) Modul
- [CSS benutzerdefinierte Eigenschaften](/de/docs/Web/CSS/Reference/Properties/--*) und {{cssxref("var")}}
- [`prefers-contrast`](/de/docs/Web/CSS/Reference/At-rules/@media/prefers-contrast) und [`prefers-color-scheme`](/de/docs/Web/CSS/Reference/At-rules/@media/prefers-color-scheme) {{cssxref("@media")}} Features
- [WCAG: Farbkontrast](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable/Color_contrast)
- [Anleitung, wie der Browser eine kontrastreiche Farbe in CSS auswählt](https://webkit.org/blog/16929/contrast-color/) auf webkit.org (2025)
- [WebAIM Kontrast Checker](https://webaim.org/resources/contrastchecker/) auf webaim.org (2025)
