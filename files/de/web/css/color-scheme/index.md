---
title: color-scheme
slug: Web/CSS/color-scheme
l10n:
  sourceCommit: d37a7b2767b083a7067d2068827ac8bc527f25f1
---

{{CSSRef}}

Die **`color-scheme`** [CSS](/de/docs/Web/CSS) Eigenschaft ermöglicht es einem Element anzugeben, in welchen Farbschemata es problemlos dargestellt werden kann. Benutzeragenten ändern die folgenden Aspekte des UI-Chromes, um das verwendete Farbschema anzupassen:

- Die Farbe der Leinwandoberfläche.
- Die Standardfarben der Bildlaufleisten und anderer Interaktions-UI.
- Die Standardfarben von Formularelementen.
- Die Standardfarben anderer browserbereitgestellter UI, wie beispielsweise Unterstreichungen bei der „Rechtschreibprüfung“.

Komponentenautoren müssen das [`prefers-color-scheme`](/de/docs/Web/CSS/@media/prefers-color-scheme) Medien-Feature verwenden, um die Farbschemata bei den restlichen Elementen zu unterstützen.

Häufige Optionen für Betriebssystem-Farbschemata sind "light" und "dark" oder "Tagmodus" und "Nachtmodus". Wenn ein Benutzer eines dieser Farbschemata auswählt, nimmt das Betriebssystem Anpassungen an der Benutzeroberfläche vor. Dies schließt [Formularelemente](/de/docs/Learn/Forms), [Bildlaufleisten](/de/docs/Web/CSS/CSS_scrollbars_styling) und die verwendeten Werte der [CSS-Systemfarben](/de/docs/Web/CSS/system-color) mit ein.

{{EmbedInteractiveExample("pages/css/color-scheme.html")}}

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
  - : Gibt an, dass das Element unter Verwendung der [Farbschema](/de/docs/Web/HTML/Element/meta/name#color-scheme) Einstellungen der Seite dargestellt werden kann. Wenn die Seite kein Farbschema festgelegt hat, wird das Element mit den Standardfarbeneinstellungen der Seite dargestellt.
- `light`
  - : Gibt an, dass das Element unter Verwendung des _light_ Farbschemas des Betriebssystems dargestellt werden kann.
- `dark`
  - : Gibt an, dass das Element unter Verwendung des _dark_ Farbschemas des Betriebssystems dargestellt werden kann.
- `only`

  - : Verhindert, dass der Benutzeragent das Farbschema für das Element überschreibt.

    Kann verwendet werden, um Farbüberlagerungen, die durch Chromes [Auto Dark Theme](https://developer.chrome.com/blog/auto-dark-theme/#per-element-opt-out) verursacht werden, zu deaktivieren, indem `color-scheme: only light;` auf ein spezifisches Element oder `:root` angewendet wird.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Deklaration von Farbschema-Präferenzen

Um die gesamte Seite auf die Farbschema-Präferenzen des Benutzers einzustellen, deklarieren Sie `color-scheme` auf dem {{cssxref(":root")}} Element.

```css
:root {
  color-scheme: light dark;
}
```

Um spezifische Elemente auf die Farbschema-Präferenzen des Benutzers einzustellen, deklarieren Sie `color-scheme` auf diesen Elementen.

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

### Styling basierend auf Farbschemata

Um Elemente basierend auf Farbschema-Präferenzen zu stylen, verwenden Sie die [`prefers-color-scheme`](/de/docs/Web/CSS/@media/prefers-color-scheme) Medienabfrage. Das untenstehende Beispiel richtet die gesamte Seite darauf aus, sowohl helle als auch dunkle Betriebssystem-Farbschemata über die `color-scheme` Eigenschaft zu verwenden, und verwendet dann `prefers-color-scheme`, um die gewünschten Vorder- und Hintergrundfarben für individuelle Elemente in diesen Farbschemata zu spezifizieren.

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

Alternativ kann die experimentelle [`light-dark()`](/de/docs/Web/CSS/color_value/light-dark) [`<color>` Funktion](/de/docs/Web/CSS/CSS_Functions#color_functions) verwendet werden, um die Vorder- und Hintergrundfarben für die unterschiedlichen Farbschemata mit einer kompakteren Code-Struktur festzulegen:

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

- [`prefers-color-scheme`](/de/docs/Web/CSS/@media/prefers-color-scheme) Medienabfrage zur Erkennung der Farbschema-Präferenzen der Benutzer.
- {{CSSXref("color_value/light-dark", "light-dark()")}} Farb-Funktion, um Farben für sowohl helle als auch dunkle Farbschemata festzulegen.
- Andere farbbezogene Eigenschaften: {{cssxref("color")}}, {{cssxref("accent-color")}}, {{cssxref("background-color")}}, {{cssxref("border-color")}}, {{cssxref("outline-color")}}, {{cssxref("text-decoration-color")}}, {{cssxref("text-emphasis-color")}}, {{cssxref("text-shadow")}}, {{cssxref("caret-color")}}, und {{cssxref("column-rule-color")}}
- {{cssxref("background-image")}}
- {{cssxref("print-color-adjust")}}
- [Verwendung relativer Farben](/de/docs/Web/CSS/CSS_colors/Relative_colors)
