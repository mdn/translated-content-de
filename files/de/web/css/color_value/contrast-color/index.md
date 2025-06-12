---
title: contrast-color()
slug: Web/CSS/color_value/contrast-color
l10n:
  sourceCommit: 5e5712b233fa53bd34aca4bd9e3fcd12de859881
---

{{CSSRef}}{{SeeCompatTable}}

Die **`contrast-color()`** [CSS](/de/docs/Web/CSS) [Funktion](/de/docs/Web/CSS/CSS_Values_and_Units/CSS_Value_Functions) nimmt einen {{cssxref("color_value","color")}} Wert an und gibt eine [garantiert](https://www.w3.org/TR/WCAG21/#contrast-minimum) kontrastierende Farbe zurück.

`contrast-color()` macht es einfach, beispielsweise eine Textfarbe anzugeben und automatisch eine kontrastierende Hintergrundfarbe zu generieren, oder umgekehrt. Es ist nicht mehr erforderlich, Paare aus Hintergrund- und Textfarben zu pflegen.

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
> Es gibt keine Garantie, dass die mit der `contrast-color()` Funktion zurückgegebenen Werte ein barrierefreies Ergebnis liefern. Hintergrundfarben im mittleren Tonbereich bieten im Allgemeinen nicht genug Kontrast. Daher wird empfohlen, mit der `contrast-color()` Funktion helle oder dunkle Farben zu verwenden.

## Beispiele

### Kontrastierender Text für einen Button

Im folgenden Beispiel wendet der Browser automatisch eine kontrastierende Farbe auf den Text des Submit-{{htmlelement("button")}} an, wenn Sie dessen Hintergrundfarbe ändern.

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

### Verwendung im Hell- und Dunkelmodus

Im folgenden Beispiel wird die [`prefers-color-scheme`](/de/docs/Web/CSS/@media/prefers-color-scheme) [Media Query](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries) verwendet, um eine Hintergrundfarbe basierend auf den Farbeinstellungsreferenzen des Betriebssystems oder Browsers festzulegen. Die `contrast-color()` Funktion wird verwendet, um die Textfarbe automatisch festzulegen.

Versuchen Sie, die Einstellung für den Dunkelmodus im Browser oder Betriebssystem zu ändern, um den Effekt zu sehen.

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

{{EmbedLiveSample("Verwendung im Hell- und Dunkelmodus", "", 250)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`contrast()`](/de/docs/Web/CSS/filter-function/contrast)
- [CSS-Farben](/de/docs/Web/CSS/CSS_colors) Modul
- [CSS benutzerdefinierte Eigenschaften](/de/docs/Web/CSS/--*) und {{cssxref("var")}}
- [`prefers-contrast`](/de/docs/Web/CSS/@media/prefers-contrast) und [`prefers-color-scheme`](/de/docs/Web/CSS/@media/prefers-color-scheme) {{cssxref("@media")}} Funktionen
- [WCAG: Farbkontrast](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable/Color_contrast)
- [Anleitung zur automatischen Auswahl einer kontrastierenden Farbe im CSS durch den Browser](https://webkit.org/blog/16929/contrast-color/) auf webkit.org (2025)
- [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/) auf webaim.org (2025)
