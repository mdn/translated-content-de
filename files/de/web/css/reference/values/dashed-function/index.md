---
title: "<dashed-function>: CSS Custom-Funktionen"
slug: Web/CSS/Reference/Values/dashed-function
l10n:
  sourceCommit: f69b6693212029ce4b9fa0c753729044577af548
---

{{SeeCompatTable}}

Der **`<dashed-function>`** [CSS](/de/docs/Web/CSS) [Datentyp](/de/docs/Web/CSS/Reference/Values/Data_types) repräsentiert die Syntax zur Verwendung von [CSS Custom-Funktionen](/de/docs/Web/CSS/CSS_custom_functions_and_mixins/Using_custom_functions), die mit der {{cssxref("@function")}} At-Regel definiert werden.

## Syntax

Ein `<dashed-function>`-Wert besteht aus dem [`--function-name`](/de/docs/Web/CSS/Reference/At-rules/@function#--function-name), gefolgt von Klammern mit den Argumenten der Funktion (zum Beispiel `--my-function(30px, 3)`).

Sie können `<dashed-function>`-Werte anstelle von regulären CSS-Property-Werten oder Property-Wert-Komponenten verwenden, in Fällen, in denen Sie die Werte dynamisch basierend auf der Logik der Funktion berechnen möchten, anstatt statische Werte bereitzustellen.

In Fällen, in denen Sie [Komma-enthaltende Werte als Argumente übergeben](/de/docs/Web/CSS/Reference/At-rules/@function#passing_comma-containing_values_as_arguments) möchten, können Sie dies tun, indem Sie sie in geschweifte Klammern (`{ }`) setzen.

## Beispiele

Für weitere Beispiele, siehe unseren [Leitfaden zur Verwendung von CSS-Custom-Funktionen](/de/docs/Web/CSS/CSS_custom_functions_and_mixins/Using_custom_functions).

### Grundlegende `<dashed-function>`-Verwendung

Dieses Beispiel zeigt eine grundlegende Funktion, die eine halbtransparente Version der übergebenen Farbe zurückgibt.

#### HTML

Der Markup beinhaltet ein {{htmlelement("p")}}, das Textinhalt enthält:

```html live-sample___basic-example
<p>Some content</p>
```

#### CSS

In unseren Styles definieren wir zuerst die CSS-Custom-Funktion. Die Funktion heißt `--transparent` und nimmt zwei Parameter entgegen: eine Farbe und einen numerischen Alpha-Kanal-Wert. Innerhalb des Funktionskörpers verwenden wir die [relative Farbsyntax](/de/docs/Web/CSS/CSS_colors/Relative_colors), um die übergebene Farbe in eine [`oklch()`](/de/docs/Web/CSS/Reference/Values/color_value/oklch) Farbe mit einem Alpha-Kanal umzuwandeln, der dem übergebenen Alpha-Wert entspricht; dies wird zum `result` der Funktion:

```css live-sample___basic-example
@function --transparent(--color <color>, --alpha <number>) {
  result: oklch(from var(--color) l c h / var(--alpha));
}
```

Anschließend definieren wir eine `--base-color` Custom-Property mit dem Wert `#faa6ff` auf dem `:root` Element. Wir weisen dieser Property den Wert der {{cssxref("border")}}-Farbe des `<p>`-Elements zu und setzen dann ihren {{cssxref("background-color")}}-Wert auf eine transparente Version derselben Farbe. Dies geschieht, indem der Wert gleich der `<dashed-function>`-Syntax gesetzt wird, die die `--transparent()` Funktion spezifiziert und ihr die Argumente `var(--base-color)` und `0.8` übergibt.

```css hidden live-sample___basic-example
html,
body {
  height: 100%;
}

body {
  margin: 0;
  display: grid;
  place-items: center;
  font-family: system-ui;
  background-image: repeating-linear-gradient(
    -45deg,
    transparent 0 20px,
    lightgrey 20px 40px
  );
}
```

```css live-sample___basic-example
:root {
  --base-color: #faa6ff;
}

p {
  width: 50%;
  padding: 30px;
  border-radius: 20px;
  border: 3px solid var(--base-color);
  background-color: --transparent(var(--base-color), 0.8);
}
```

#### Ergebnis

{{ EmbedLiveSample('basic-example', '100%', '150px') }}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [CSS Custom Properties](/de/docs/Web/CSS/Reference/Properties/--*)
- {{cssxref("@function")}} At-Regel
- [`type()`](/de/docs/Web/CSS/Reference/Values/type) Funktion
- [Verwendung von CSS-Custom-Funktionen](/de/docs/Web/CSS/CSS_custom_functions_and_mixins/Using_custom_functions)
- [CSS-Custom-Funktionen und Mixins](/de/docs/Web/CSS/CSS_custom_functions_and_mixins) Modul
