---
title: "<dashed-function>: CSS benutzerdefinierte Funktionen"
slug: Web/CSS/Reference/Values/dashed-function
l10n:
  sourceCommit: 8fd626a7b7f1fcb19193325bbac5b87e719f83ea
---

{{SeeCompatTable}}

Der **`<dashed-function>`** [CSS](/de/docs/Web/CSS) [Datentyp](/de/docs/Web/CSS/Reference/Values/Data_types) repräsentiert die Syntax, die verwendet wird, um [benutzerdefinierte CSS-Funktionen](/de/docs/Web/CSS/Guides/Custom_functions_and_mixins/Using_custom_functions) aufzurufen, welche mit dem {{cssxref("@function")}} At-Regel definiert werden.

## Syntax

Ein `<dashed-function>`-Wert besteht aus dem [`--function-name`](/de/docs/Web/CSS/Reference/At-rules/@function#--function-name), gefolgt von Klammern, die die Argumente der Funktion enthalten (zum Beispiel: `--my-function(30px, 3)`).

Sie können `<dashed-function>`-Werte anstelle regulärer CSS-Eigenschaftswerte oder Eigenschaftswert-Komponenten verwenden, wenn Sie die Werte dynamisch basierend auf der Logik der Funktion berechnen möchten, anstatt statische Werte anzugeben.

In Fällen, in denen Sie [Komma-enthaltende Werte als Argumente übergeben](/de/docs/Web/CSS/Reference/At-rules/@function#passing_comma-containing_values_as_arguments) möchten, können Sie dies tun, indem Sie sie in geschweifte Klammern (`{ }`) einschließen.

## Beispiele

Für weitere Beispiele, sehen Sie sich unseren [Leitfaden zur Verwendung von benutzerdefinierten CSS-Funktionen](/de/docs/Web/CSS/Guides/Custom_functions_and_mixins/Using_custom_functions) an.

### Grundlegende Verwendung von `<dashed-function>`

Dieses Beispiel zeigt eine grundlegende Funktion, die eine halbtransparente Version der übergebenen Farbe zurückgibt.

#### HTML

Das Markup enthält ein {{htmlelement("p")}}, das einige Textinhalte enthält:

```html live-sample___basic-example
<p>Some content</p>
```

#### CSS

In unseren Styles definieren wir zuerst die benutzerdefinierte CSS-Funktion. Die Funktion heißt `--transparent` und nimmt zwei Parameter an: eine Farbe und einen numerischen Alpha-Kanalwert. Im Körper der Funktion verwenden wir die [relative Farbsyntax](/de/docs/Web/CSS/Guides/Colors/Using_relative_colors), um die übergebene Farbe in eine [`oklch()`](/de/docs/Web/CSS/Reference/Values/color_value/oklch)-Farbe mit einem Alpha-Kanal gleich dem übergebenen Alpha-Wert zu transformieren; dies wird das `Ergebnis` der Funktion:

```css live-sample___basic-example
@function --transparent(--color <color>, --alpha <number>) {
  result: oklch(from var(--color) l c h / var(--alpha));
}
```

Als nächstes definieren wir eine `--base-color`-benutzerdefinierte Eigenschaft mit einem Wert von `#faa6ff` auf dem `:root`-Element. Wir weisen diese Eigenschaft dem Wert der {{cssxref("border")}}-Farbe des `<p>`-Elements zu und setzen dann dessen {{cssxref("background-color")}}-Wert auf eine transparente Version derselben Farbe. Dies geschieht, indem wir den Wert auf die `<dashed-function>`-Syntax setzen, die die `--transparent()`-Funktion spezifiziert und sie mit den Argumenten `var(--base-color)` und `0.8` aufruft.

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

- [CSS benutzerdefinierte Eigenschaften](/de/docs/Web/CSS/Reference/Properties/--*)
- {{cssxref("@function")}} At-Regel
- [`type()`](/de/docs/Web/CSS/Reference/Values/type)-Funktion
- [Verwendung von benutzerdefinierten CSS-Funktionen](/de/docs/Web/CSS/Guides/Custom_functions_and_mixins/Using_custom_functions)
- [CSS benutzerdefinierte Funktionen und Mixins](/de/docs/Web/CSS/Guides/Custom_functions_and_mixins) Modul
