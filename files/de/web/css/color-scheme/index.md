---
title: color-scheme
slug: Web/CSS/color-scheme
l10n:
  sourceCommit: 70285e396b5c97675e90b85d573be42078e0168e
---

Die **`color-scheme`** [CSS](/de/docs/Web/CSS) Eigenschaft erlaubt es einem Element, anzugeben, in welchen Farbschemata es bequem gerendert werden kann. Benutzeragenten ändern die folgenden Aspekte der Benutzeroberfläche, um das verwendete Farbschema anzupassen:

- Die Farbe der Leinwandoberfläche.
- Die Standardfarben von Scrollleisten und anderen Interaktions-Bedienelementen.
- Die Standardfarben von Formularsteuerelementen.
- Die Standardfarben anderer vom Browser bereitgestellter Benutzeroberflächen, wie z.B. "Rechtschreibprüfung"-Unterstreichungen.

Komponentenautoren müssen das [`prefers-color-scheme`](/de/docs/Web/CSS/@media/prefers-color-scheme) Medienfeature verwenden, um die Farbschemata auf den restlichen Elementen zu unterstützen.

Gängige Optionen für Farbschemata des Betriebssystems sind "light" und "dark", oder "Tagesmodus" und "Nachtmodus". Wenn ein Benutzer eines dieser Farbschemata auswählt, nimmt das Betriebssystem Anpassungen an der Benutzeroberfläche vor. Dies umfasst [Formularsteuerelemente](/de/docs/Learn_web_development/Extensions/Forms), [Scrollleisten](/de/docs/Web/CSS/CSS_scrollbars_styling) und die verwendeten Werte der [CSS-Systemfarben](/de/docs/Web/CSS/system-color).

{{InteractiveExample("CSS Demo: color-scheme")}}

```css interactive-example-choice
color-scheme: normal;
```

```css interactive-example-choice
color-scheme: dark;
```

```css interactive-example-choice
color-scheme: light;
```

```html interactive-example
<section class="default-example container" id="default-example">
  <textarea id="example-element">Text Area</textarea>
</section>
```

```css interactive-example
#example-element {
  width: 80%;
  height: 50%;
}
```

## Syntax

```css
color-scheme: normal;
color-scheme: light;
color-scheme: dark;
color-scheme: light dark;
color-scheme: only light;

/* Global values */
color-scheme: inherit;
color-scheme: initial;
color-scheme: revert;
color-scheme: revert-layer;
color-scheme: unset;
```

Der Wert der `color-scheme` Eigenschaft muss eines der folgenden Schlüsselwörter sein.

### Werte

- `normal`
  - : Bedeutet, dass das Element mit den [Farbschema](/de/docs/Web/HTML/Reference/Elements/meta/name/color-scheme) Einstellungen der Seite gerendert werden kann. Wenn die Seite kein Farbschema festgelegt hat, wird das Element mit den Standardeinstellungen der Seite gerendert.
- `light`
  - : Bedeutet, dass das Element unter Verwendung des _light_ Farbschemas des Betriebssystems gerendert werden kann.
- `dark`
  - : Bedeutet, dass das Element unter Verwendung des _dark_ Farbschemas des Betriebssystems gerendert werden kann.
- `only`
  - : Verhindert, dass der Benutzeragent das Farbschema für das Element überschreibt.

    Kann verwendet werden, um Farbüberschreibungen zu deaktivieren, die durch Chromes [Auto Dark Theme](https://developer.chrome.com/blog/auto-dark-theme/#per-element-opt-out) verursacht werden, indem `color-scheme: only light;` auf ein bestimmtes Element oder `:root` angewendet wird.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Deklarieren von Farbschemavorlieben

Um die gesamte Seite in die Farbschemavorlieben des Benutzers einzubinden, deklarieren Sie `color-scheme` im {{cssxref(":root")}} Element.

```css
:root {
  color-scheme: light dark;
}
```

Um bestimmte Elemente in die Farbschemavorlieben des Benutzers einzubinden, deklarieren Sie `color-scheme` auf diesen Elementen.

```css
header {
  color-scheme: only light;
}
main {
  color-scheme: light dark;
}
footer {
  color-scheme: only dark;
}
```

Zusammen mit dem obigen CSS sollten Sie auch das [`<meta name="color-scheme">`](/de/docs/Web/HTML/Reference/Elements/meta/name/color-scheme) HTML {{HTMLElement("meta")}} Tag im {{htmlelement("head")}} vor jede CSS-Style-Information einfügen, um Benutzeragenten über das bevorzugte Farbschema zu informieren und unerwünschtes Bildschirmflackern während des Seitenaufbaus zu vermeiden.

### Styling basierend auf Farbschemavorlieben

Um Elemente basierend auf Farbschemavorlieben zu stylen, verwenden Sie die [`prefers-color-scheme`](/de/docs/Web/CSS/@media/prefers-color-scheme) Medienabfrage. Das folgende Beispiel bindet die gesamte Seite in die Nutzung von sowohl light als auch dark Farbschemata des Betriebssystems ein über die `color-scheme` Eigenschaft und verwendet dann `prefers-color-scheme`, um die gewünschten Vorder- und Hintergrundfarben für individuelle Elemente in diesen Farbschemata festzulegen.

```css
:root {
  color-scheme: light dark;
}

@media (prefers-color-scheme: light) {
  .element {
    color: black;
    background-color: white;
  }
}

@media (prefers-color-scheme: dark) {
  .element {
    color: white;
    background-color: black;
  }
}
```

Alternativ können Sie die [`light-dark()`](/de/docs/Web/CSS/color_value/light-dark) [`<color>` Funktion](/de/docs/Web/CSS/CSS_values_and_units/CSS_value_functions#color_functions) verwenden, um die Vorder- und Hintergrundfarben für die verschiedenen Farbschemata mit einer kompakteren Code-Struktur festzulegen:

```css
:root {
  color-scheme: light dark;
}

.element {
  color: light-dark(black, white);
  background-color: light-dark(white, black);
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`prefers-color-scheme`](/de/docs/Web/CSS/@media/prefers-color-scheme) Medienabfrage, um Benutzerpräferenzen für Farbschemata zu erkennen.
- {{CSSXref("color_value/light-dark", "light-dark()")}} Farbfunktion, um Farben sowohl für light als auch für dark Farbschemata festzulegen.
- Andere farbbezogene Eigenschaften: {{cssxref("color")}}, {{cssxref("accent-color")}}, {{cssxref("background-color")}}, {{cssxref("border-color")}}, {{cssxref("outline-color")}}, {{cssxref("text-decoration-color")}}, {{cssxref("text-emphasis-color")}}, {{cssxref("text-shadow")}}, {{cssxref("caret-color")}}, und {{cssxref("column-rule-color")}}
- {{cssxref("background-image")}}
- {{cssxref("print-color-adjust")}}
- [Using relative colors](/de/docs/Web/CSS/CSS_colors/Relative_colors)
