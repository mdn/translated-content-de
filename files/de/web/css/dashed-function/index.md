---
title: "<dashed-function>: CSS benutzerdefinierte Funktionen"
slug: Web/CSS/dashed-function
l10n:
  sourceCommit: b5a6d8bc5fd751032f70b88e7ec1ec61339937de
---

Der **`<dashed-function>`** [CSS](/de/docs/Web/CSS) [Datentyp](/de/docs/Web/CSS/CSS_values_and_units/CSS_data_types) repräsentiert die Syntax, die verwendet wird, um [CSS benutzerdefinierte Funktionen](/de/docs/Web/CSS/CSS_custom_functions_and_mixins/Using_custom_functions) aufzurufen, welche mit der {{cssxref("@function")}} At-Regel definiert werden.

## Syntax

Ein `<dashed-function>` Wert besteht aus dem [`--function-name`](/de/docs/Web/CSS/@function#--function-name), gefolgt von runden Klammern, die die Argumente der Funktion enthalten (zum Beispiel, `--my-function(30px, 3)`).

Sie können `<dashed-function>` Werte anstelle von regulären CSS-Eigenschaftswerten oder Komponenten von Eigenschaftswerten einfügen, in Fällen, in denen Sie die Werte dynamisch basierend auf der Funktionslogik berechnen möchten, anstatt statische Werte bereitzustellen.

In Fällen, in denen Sie [Komma-enthaltende Werte als Argumente übergeben](/de/docs/Web/CSS/@function#passing_comma-containing_values_as_arguments) möchten, können Sie dies tun, indem Sie sie in geschweiften Klammern (`{ }`) einschließen.

## Beispiele

Für mehr Beispiele, siehe unseren [Leitfaden zur Verwendung von CSS benutzerdefinierten Funktionen](/de/docs/Web/CSS/CSS_custom_functions_and_mixins/Using_custom_functions).

### Grundlegende `<dashed-function>` Nutzung

Dieses Beispiel zeigt eine grundlegende Funktion, die eine halbtransparente Version der übergebenen Farbe zurückgibt.

#### HTML

Das Markup enthält ein {{htmlelement("p")}} mit etwas Textinhalt:

```html live-sample___basic-example
<p>Some content</p>
```

#### CSS

In unseren Stilen definieren wir zuerst die CSS benutzerdefinierte Funktion. Die Funktion heißt `--transparent` und akzeptiert zwei Parameter: eine Farbe und einen numerischen Alpha-Kanal-Wert. Innerhalb des Funktionskörpers verwenden wir die [relative color syntax](/de/docs/Web/CSS/CSS_colors/Relative_colors), um die übergebene Farbe in eine [`oklch()`](/de/docs/Web/CSS/color_value/oklch) Farbe mit einem Alpha-Kanal gleich dem übergebenen Alpha-Wert zu transformieren; dies wird das `result` der Funktion:

```css live-sample___basic-example
@function --transparent(--color <color>, --alpha <number>) {
  result: oklch(from var(--color) l c h / var(--alpha));
}
```

Als nächstes definieren wir eine `--base-color` benutzerdefinierte Eigenschaft mit einem Wert von `#faa6ff` auf dem `:root` Element. Wir weisen dieser Eigenschaft den Wert der {{cssxref("border")}} Farbe des `<p>` Elements zu und setzen dann seinen {{cssxref("background-color")}} Wert gleich einer transparenten Version derselben Farbe. Dies geschieht, indem der Wert gleich der `<dashed-function>` Syntax gesetzt wird, wobei die `--transparent()` Funktion spezifiziert und die Argumente `var(--base-color)` und `0.8` übergeben werden.

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
- {{cssxref("@function")}} At-Regel
- [`type()`](/de/docs/Web/CSS/type) Funktion
- [Verwendung von CSS benutzerdefinierten Funktionen](/de/docs/Web/CSS/CSS_custom_functions_and_mixins/Using_custom_functions)
- [CSS benutzerdefinierte Funktionen und Mixins](/de/docs/Web/CSS/CSS_custom_functions_and_mixins) Modul
