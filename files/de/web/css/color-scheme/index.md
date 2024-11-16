---
title: color-scheme
slug: Web/CSS/color-scheme
l10n:
  sourceCommit: 977d26d6dbaab0290c88a98f677822611eee40af
---

{{CSSRef}}

Die **`color-scheme`** [CSS](/de/docs/Web/CSS) Eigenschaft ermöglicht es einem Element anzugeben, in welchen Farbschemata es bequem gerendert werden kann. Benutzeragenten ändern die folgenden Aspekte der UI-Chrome, um das verwendete Farbschema anzupassen:

- Die Farbe der Canvas-Fläche.
- Die Standardfarben von Scrollleisten und anderen Interaktions-UI.
- Die Standardfarben von Formularelementen.
- Die Standardfarben anderer browsergestützter UI, wie "Rechtschreibprüfung"-Unterstriche.

Komponentenautoren müssen die [`prefers-color-scheme`](/de/docs/Web/CSS/@media/prefers-color-scheme) Medienfunktion verwenden, um die Farbschemata für die restlichen Elemente zu unterstützen.

Gängige Optionen für Betriebssystem-Farbschemata sind "hell" und "dunkel" oder "Tagmodus" und "Nachtmodus". Wenn ein Benutzer eines dieser Farbschemata auswählt, nimmt das Betriebssystem Anpassungen an der Benutzeroberfläche vor. Dies umfasst [Formularelemente](/de/docs/Learn/Forms), [Scrollleisten](/de/docs/Web/CSS/CSS_scrollbars_styling) und die verwendeten Werte von [CSS-Systemfarben](/de/docs/Web/CSS/system-color).

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
  - : Zeigt an, dass das Element mit den Farbschemaeinstellungen der Seite gerendert werden kann. Wenn die Seite kein Farbschema festgelegt hat, wird das Element mit den Standardeinstellungen der Seite gerendert.
- `light`
  - : Zeigt an, dass das Element mit dem _hellen_ Farbschema des Betriebssystems gerendert werden kann.
- `dark`
  - : Zeigt an, dass das Element mit dem _dunklen_ Farbschema des Betriebssystems gerendert werden kann.
- `only`

  - : Verhindert, dass der Benutzeragent das Farbschema für das Element überschreibt.

    Kann verwendet werden, um Farbüberschreibungen zu deaktivieren, die durch Chromes [Auto Dark Theme](https://developer.chrome.com/blog/auto-dark-theme/#per-element-opt-out) verursacht werden, indem `color-scheme: only light;` auf ein spezifisches Element oder `:root` angewendet wird.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Festlegen von Farbschema-Vorlieben

Um die gesamte Seite in die Farbschema-Präferenzen des Benutzers einzubeziehen, deklarieren Sie `color-scheme` auf dem {{cssxref(":root")}} Element.

```css
:root {
  color-scheme: light dark;
}
```

Um spezifische Elemente in die Farbschema-Präferenzen des Benutzers einzubeziehen, deklarieren Sie `color-scheme` auf diesen Elementen.

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

Um Elemente basierend auf Farbschema-Präferenzen zu stylen, verwenden Sie die [`prefers-color-scheme`](/de/docs/Web/CSS/@media/prefers-color-scheme) Medienabfrage. Das folgende Beispiel stellt die gesamte Seite auf die Verwendung sowohl heller als auch dunkler Betriebssystem-Farbschemata über die `color-scheme` Eigenschaft ein und verwendet dann `prefers-color-scheme`, um die gewünschten Vorder- und Hintergrundfarben für einzelne Elemente in diesen Farbschemata festzulegen.

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

Alternativ verwenden Sie die [`light-dark()`](/de/docs/Web/CSS/color_value/light-dark) [`<color>` Funktion](/de/docs/Web/CSS/CSS_Functions#color_functions), um die Vorder- und Hintergrundfarben für die verschiedenen Farbschemata mit einer kompakteren Code-Struktur festzulegen:

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

- [`prefers-color-scheme`](/de/docs/Web/CSS/@media/prefers-color-scheme) Medienabfrage zur Erkennung von Benutzerpräferenzen für Farbschemata.
- {{CSSXref("color_value/light-dark", "light-dark()")}} Farb-Funktion zur Festlegung der Farben für sowohl helle als auch dunkle Farbschemata.
- Andere farbbezogene Eigenschaften: {{cssxref("color")}}, {{cssxref("accent-color")}}, {{cssxref("background-color")}}, {{cssxref("border-color")}}, {{cssxref("outline-color")}}, {{cssxref("text-decoration-color")}}, {{cssxref("text-emphasis-color")}}, {{cssxref("text-shadow")}}, {{cssxref("caret-color")}}, und {{cssxref("column-rule-color")}}
- {{cssxref("background-image")}}
- {{cssxref("print-color-adjust")}}
- [Verwenden von relativen Farben](/de/docs/Web/CSS/CSS_colors/Relative_colors)
