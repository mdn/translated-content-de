---
title: "<dashed-function>: CSS benutzerdefinierte Funktionen"
slug: Web/CSS/dashed-function
l10n:
  sourceCommit: bb55d1b729e6d8fd2eea3f1f9b402f6788a6d1d9
---

{{SeeCompatTable}}

Der **`<dashed-function>`** [CSS](/de/docs/Web/CSS) [Datentyp](/de/docs/Web/CSS/CSS_values_and_units/CSS_data_types) stellt die Syntax dar, die verwendet wird, um [CSS benutzerdefinierte Funktionen](/de/docs/Web/CSS/CSS_custom_functions_and_mixins/Using_custom_functions) aufzurufen, die mit der {{cssxref("@function")}} at-Regel definiert werden.

## Syntax

Ein `<dashed-function>` Wert besteht aus dem [`--function-name`](/de/docs/Web/CSS/@function#--function-name), gefolgt von Klammern, die die Argumente der Funktion enthalten (zum Beispiel `--my-function(30px, 3)`).

Sie können `<dashed-function>` Werte anstelle von regulären CSS-Property-Werten oder Komponenten von Property-Werten einfügen, in Fällen, in denen Sie die Werte dynamisch basierend auf Logik der Funktion berechnen möchten, anstatt statische Werte anzugeben.

In Fällen, in denen Sie [Komma-enthaltende Werte als Argumente übergeben](/de/docs/Web/CSS/@function#passing_comma-containing_values_as_arguments) möchten, können Sie dies tun, indem Sie sie in geschweifte Klammern (`{ }`) einschließen.

## Beispiele

Für weitere Beispiele siehe unseren [Leitfaden zur Verwendung von CSS benutzerdefinierten Funktionen](/de/docs/Web/CSS/CSS_custom_functions_and_mixins/Using_custom_functions).

### Grundlegende Verwendung von `<dashed-function>`

Dieses Beispiel zeigt eine grundlegende Funktion, die eine halbtransparente Version der übergebenen Farbe zurückgibt.

#### HTML

Das Markup enthält ein {{htmlelement("p")}} mit etwas Textinhalt:

```html live-sample___basic-example
<p>Some content</p>
```

#### CSS

In unseren Stilen definieren wir zuerst die CSS benutzerdefinierte Funktion. Die Funktion heißt `--transparent` und akzeptiert zwei Parameter: eine Farbe und einen numerischen Alpha-Kanalwert. Innerhalb des Funktionskörpers verwenden wir [relative Farbsyntax](/de/docs/Web/CSS/CSS_colors/Relative_colors), um die übergebene Farbe in eine [`oklch()`](/de/docs/Web/CSS/color_value/oklch) Farbe mit einem Alpha-Kanal gleich dem übergebenen Alpha-Wert zu transformieren; dies wird das `result` der Funktion:

```css live-sample___basic-example
@function --transparent(--color <color>, --alpha <number>) {
  result: oklch(from var(--color) l c h / var(--alpha));
}
```

Als nächstes definieren wir mit einer benutzerdefinierten Eigenschaft `--base-color` den Wert `#faa6ff` auf dem `:root` Element. Wir weisen diese Eigenschaft dem Wert der {{cssxref("border")}} Farbe des `<p>` Elements zu und setzen dann den Wert des {{cssxref("background-color")}}, damit er einer transparenten Version derselben Farbe entspricht. Dies wird durchgeführt, indem der Wert auf die `<dashed-function>`-Syntax festgelegt wird, die die `--transparent()` Funktion angibt und die Argumente `var(--base-color)` und `0.8` übergibt.

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

- [CSS benutzerdefinierte Eigenschaften](/de/docs/Web/CSS/--*)
- {{cssxref("@function")}} at-Regel
- [`type()`](/de/docs/Web/CSS/type) Funktion
- [Verwendung von CSS benutzerdefinierten Funktionen](/de/docs/Web/CSS/CSS_custom_functions_and_mixins/Using_custom_functions)
- [CSS benutzerdefinierte Funktionen und Mixins](/de/docs/Web/CSS/CSS_custom_functions_and_mixins) Modul
