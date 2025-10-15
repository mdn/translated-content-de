---
title: "<dashed-function>: CSS eigene Funktionen"
slug: Web/CSS/dashed-function
l10n:
  sourceCommit: 792888cd76b95a986a38d6a48bece464731dda51
---

Der **`<dashed-function>`** [CSS](/de/docs/Web/CSS) [Datentyp](/de/docs/Web/CSS/CSS_values_and_units/CSS_data_types) repräsentiert die Syntax, die verwendet wird, um [CSS eigene Funktionen](/de/docs/Web/CSS/CSS_custom_functions_and_mixins/Using_custom_functions) aufzurufen, welche mithilfe der {{cssxref("@function")}} At-Regel definiert werden.

## Syntax

Ein `<dashed-function>` Wert besteht aus dem [`--function-name`](/de/docs/Web/CSS/@function#--function-name), gefolgt von Klammern, die die Argumente der Funktion enthalten (zum Beispiel, `--my-function(30px, 3)`).

Sie können `<dashed-function>` Werte anstelle von normalen CSS-Property-Werten oder Komponenten von Property-Werten verwenden, in Fällen, in denen Sie die Werte basierend auf Funktionslogik dynamisch berechnen möchten, anstatt statische Werte bereitzustellen.

In Fällen, in denen Sie [Komma-enthaltende Werte als Argumente übergeben](/de/docs/Web/CSS/@function#passing_comma-containing_values_as_arguments) möchten, können Sie dies tun, indem Sie sie in geschweifte Klammern (`{ }`) einschließen.

## Beispiele

Für weitere Beispiele, siehe unseren [Verwendung von CSS-eigenen Funktionen](/de/docs/Web/CSS/CSS_custom_functions_and_mixins/Using_custom_functions) Leitfaden.

### Grundlegende Verwendung von `<dashed-function>`

Dieses Beispiel zeigt eine grundlegende Funktion, die eine halbtransparente Version der übergebenen Farbe zurückgibt.

#### HTML

Das Markup enthält ein {{htmlelement("p")}} mit etwas Textinhalt:

```html live-sample___basic-example
<p>Some content</p>
```

#### CSS

In unseren Stilen definieren wir zuerst die CSS-eigene Funktion. Die Funktion heißt `--transparent` und akzeptiert zwei Parameter: eine Farbe und einen numerischen Alphakanalwert. Im Funktionskörper verwenden wir die [relative Farbsyntax](/de/docs/Web/CSS/CSS_colors/Relative_colors), um die übergebene Farbe in eine [`oklch()`](/de/docs/Web/CSS/color_value/oklch) Farbe mit einem Alphakanal umzuwandeln, der dem übergebenen Alphawert entspricht; dies wird zum `result` der Funktion:

```css live-sample___basic-example
@function --transparent(--color <color>, --alpha <number>) {
  result: oklch(from var(--color) l c h / var(--alpha));
}
```

Als Nächstes definieren wir eine `--base-color` eigene Property mit einem Wert von `#faa6ff` auf dem `:root` Element. Wir weisen diese Property dem Wert der {{cssxref("border")}} Farbe des `<p>` Elements zu und setzen dann den Wert der {{cssxref("background-color")}}, um eine transparente Version derselben Farbe zu entsprechen. Dies wird erreicht, indem der Wert der `<dashed-function>` Syntax entspricht, die die `--transparent()` Funktion spezifiziert und Argumente von `var(--base-color)` und `0.8` übergibt.

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

- [CSS eigene Variablen](/de/docs/Web/CSS/--*)
- {{cssxref("@function")}} At-Regel
- [`type()`](/de/docs/Web/CSS/type) Funktion
- [Verwendung von CSS-eigenen Funktionen](/de/docs/Web/CSS/CSS_custom_functions_and_mixins/Using_custom_functions)
- [CSS eigene Funktionen und Mixins](/de/docs/Web/CSS/CSS_custom_functions_and_mixins) Modul
