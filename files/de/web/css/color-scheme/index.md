---
title: color-scheme
slug: Web/CSS/color-scheme
l10n:
  sourceCommit: 81c67156fef5fb82c439c8f0d8ce6d4dee86a3e3
---

{{CSSRef}}

Die **`color-scheme`** [CSS](/de/docs/Web/CSS) Eigenschaft ermöglicht es einem Element anzugeben, in welchen Farbschemata es problemlos dargestellt werden kann. Nutzeragenten ändern die folgenden Aspekte der Benutzeroberflächen-Chrom, um das verwendete Farbschema anzupassen:

- Die Farbe der Leinwandoberfläche.
- Die Standardfarben von Bildlaufleisten und anderer Interaktions-UI.
- Die Standardfarben von Formularsteuerelementen.
- Die Standardfarben anderer vom Browser bereitgestellter UI, wie z.B. „Rechtschreibprüfung“-Unterstreichungen.

Komponentenautoren müssen die [`prefers-color-scheme`](/de/docs/Web/CSS/@media/prefers-color-scheme) Medienfunktion nutzen, um die Farbschemata auf den restlichen Elementen zu unterstützen.

Übliche Betriebssystem-Farbschemen sind „hell“ und „dunkel“ oder „Tagesmodus“ und „Nachtmodus“. Wenn ein Benutzer eines dieser Farbschemen auswählt, nimmt das Betriebssystem Anpassungen an der Benutzeroberfläche vor. Dies schließt [Formularsteuerelemente](/de/docs/Learn/Forms), [Bildlaufleisten](/de/docs/Web/CSS/CSS_scrollbars_styling) und die verwendeten Werte von [CSS-Systemfarben](/de/docs/Web/CSS/CSS_colors) ein.

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

Der Wert der `color-scheme`-Eigenschaft muss eines der folgenden Schlüsselwörter sein.

### Werte

- `normal`
  - : Gibt an, dass das Element unter Verwendung der [Farbschema](/de/docs/Web/HTML/Element/meta/name#color-scheme)-Einstellungen der Seite dargestellt werden kann. Wenn die Seite kein Farbschema festgelegt hat, wird das Element unter Verwendung der Standardfarbeneinstellungen der Seite dargestellt.
- `light`
  - : Gibt an, dass das Element unter Verwendung des _hellen_ Betriebssystem-Farbschemas dargestellt werden kann.
- `dark`
  - : Gibt an, dass das Element unter Verwendung des _dunklen_ Betriebssystem-Farbschemas dargestellt werden kann.
- `only`

  - : Verhindert, dass der Nutzeragent das Farbschema des Elements überschreibt.

    Kann verwendet werden, um Farbüberschreibungen zu deaktivieren, die durch Chromes [Auto Dark Theme](https://developer.chrome.com/blog/auto-dark-theme/#per-element-opt-out) verursacht werden, indem `color-scheme: only light;` auf ein spezifisches Element oder `:root` angewendet wird.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Erklärung der Farbschema-Präferenzen

Um die gesamte Seite in die Farbschema-Präferenzen des Benutzers zu integrieren, erklären Sie `color-scheme` auf dem {{cssxref(":root")}}-Element.

```css
:root {
  color-scheme: light dark;
}
```

Um spezifische Elemente in die Farbschema-Präferenzen des Benutzers zu integrieren, erklären Sie `color-scheme` auf diesen Elementen.

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

Um Elemente basierend auf Farbschema-Präferenzen zu stylen, verwenden Sie die [`prefers-color-scheme`](/de/docs/Web/CSS/@media/prefers-color-scheme) Medienabfrage. Das untenstehende Beispiel integriert die gesamte Seite sowohl in helle als auch in dunkle Betriebssystem-Farbschemata über die `color-scheme`-Eigenschaft und verwendet dann `prefers-color-scheme`, um die gewünschten Vorder- und Hintergrundfarben für einzelne Elemente in diesen Farbschemata festzulegen.

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

Alternativ können Sie die experimentelle [`light-dark()`](/de/docs/Web/CSS/color_value/light-dark) [`<color>` Funktion](/de/docs/Web/CSS/CSS_Functions#color_functions) verwenden, um die Vorder- und Hintergrundfarben für die unterschiedlichen Farbschemata mit einer kompakteren Code-Struktur festzulegen:

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
- {{CSSXref("color_value/light-dark", "light-dark()")}} Farb-Funktion, um Farben für sowohl helle als auch dunkle Farbschemata festzulegen.
- Andere farbbezogene Eigenschaften: {{cssxref("color")}}, {{cssxref("accent-color")}}, {{cssxref("background-color")}}, {{cssxref("border-color")}}, {{cssxref("outline-color")}}, {{cssxref("text-decoration-color")}}, {{cssxref("text-emphasis-color")}}, {{cssxref("text-shadow")}}, {{cssxref("caret-color")}} und {{cssxref("column-rule-color")}}
- {{cssxref("background-image")}}
- {{cssxref("print-color-adjust")}}
- [Verwendung relativer Farben](/de/docs/Web/CSS/CSS_colors/Relative_colors)
