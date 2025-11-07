---
title: "<dashed-function>: CSS benutzerdefinierte Funktionen"
slug: Web/CSS/Reference/Values/dashed-function
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

{{SeeCompatTable}}

Der **`<dashed-function>`** [CSS](/de/docs/Web/CSS) [Datentyp](/de/docs/Web/CSS/Reference/Values/Data_types) repräsentiert die Syntax, die verwendet wird, um [CSS benutzerdefinierte Funktionen](/de/docs/Web/CSS/Guides/Custom_functions_and_mixins/Using_custom_functions) aufzurufen, die mit der {{cssxref("@function")}}-Atregel definiert werden.

## Syntax

Ein `<dashed-function>`-Wert besteht aus dem [`--function-name`](/de/docs/Web/CSS/Reference/At-rules/@function#--function-name), gefolgt von Klammern, die die Argumente der Funktion enthalten (zum Beispiel, `--my-function(30px, 3)`).

Sie können `<dashed-function>`-Werte anstelle von regulären CSS-Werteigenschaften oder Komponenten von Eigenschaftswerten verwenden, wenn Sie die Werte dynamisch basierend auf der Logik der Funktion berechnen möchten, anstatt statische Werte bereitzustellen.

In Fällen, in denen Sie [Komma enthaltende Werte als Argumente übergeben](/de/docs/Web/CSS/Reference/At-rules/@function#passing_comma-containing_values_as_arguments) möchten, können Sie diese durch geschweifte Klammern (`{ }`) einschließen.

## Beispiele

Für weitere Beispiele siehe unseren [Verwendung von CSS benutzerdefinierten Funktionen](/de/docs/Web/CSS/Guides/Custom_functions_and_mixins/Using_custom_functions) Leitfaden.

### Grundlegende `<dashed-function>`-Verwendung

Dieses Beispiel zeigt eine grundlegende Funktion, die eine halbtransparente Version der Farbe zurückgibt, die an sie übergeben wird.

#### HTML

Das Markup enthält ein {{htmlelement("p")}}, das etwas Textinhalt enthält:

```html live-sample___basic-example
<p>Some content</p>
```

#### CSS

In unseren Styles definieren wir zuerst die CSS benutzerdefinierte Funktion. Die Funktion heißt `--transparent` und akzeptiert zwei Parameter: eine Farbe und einen numerischen Alpha-Kanalwert. Im Funktionskörper verwenden wir die [relative Farbsyntax](/de/docs/Web/CSS/Guides/Colors/Using_relative_colors), um die übergebene Farbe in eine [`oklch()`](/de/docs/Web/CSS/Reference/Values/color_value/oklch)-Farbe mit einem Alpha-Kanal, der dem übergebenen Alpha-Wert entspricht, umzuwandeln; dies wird zum `result` der Funktion:

```css live-sample___basic-example
@function --transparent(--color <color>, --alpha <number>) {
  result: oklch(from var(--color) l c h / var(--alpha));
}
```

Als nächstes definieren wir eine benutzerdefinierte Eigenschaft `--base-color` mit einem Wert von `#faa6ff` auf dem `:root`-Element. Wir weisen diese Eigenschaft als Wert für die {{cssxref("border")}}-Farbe des `<p>`-Elements zu und setzen dann den Wert von {{cssxref("background-color")}}, um eine transparente Version derselben Farbe zu erhalten. Dies geschieht, indem der Wert auf die `<dashed-function>`-Syntax gesetzt wird, die die `--transparent()`-Funktion spezifiziert und ihr Argumente von `var(--base-color)` und `0.8` übergibt.

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
- {{cssxref("@function")}} Atregel
- Funktion [`type()`](/de/docs/Web/CSS/Reference/Values/type)
- [Verwendung von CSS benutzerdefinierten Funktionen](/de/docs/Web/CSS/Guides/Custom_functions_and_mixins/Using_custom_functions)
- [CSS benutzerdefinierte Funktionen und Mixins](/de/docs/Web/CSS/Guides/Custom_functions_and_mixins) Modul
