---
title: color-scheme
slug: Web/CSS/color-scheme
l10n:
  sourceCommit: 81c67156fef5fb82c439c8f0d8ce6d4dee86a3e3
---

{{CSSRef}}

Die **`color-scheme`** [CSS](/de/docs/Web/CSS) Eigenschaft ermöglicht es einem Element anzugeben, in welchen Farbschemata es komfortabel gerendert werden kann. Benutzeragenten ändern die folgenden Aspekte des UI-Chrome, um dem verwendeten Farbschema zu entsprechen:

- Die Farbe der Leinwandoberfläche.
- Die Standardfarben von Scrollbars und anderer Interaktions-UI.
- Die Standardfarben von Formularelementen.
- Die Standardfarben anderer vom Browser bereitgestellter UI, wie z.B. "Rechtschreibprüfung"-Unterstreichungen.

Komponentenautoren müssen das Medienfeature [`prefers-color-scheme`](/de/docs/Web/CSS/@media/prefers-color-scheme) verwenden, um die Farbschemata auf den restlichen Elementen zu unterstützen.

Übliche Optionen für Betriebssystem-Farbschemata sind "hell" und "dunkel", oder "Tagesmodus" und "Nachtmodus". Wenn ein Benutzer eines dieser Farbschemata auswählt, nimmt das Betriebssystem Anpassungen an der Benutzeroberfläche vor. Dies umfasst [Formularelemente](/de/docs/Learn/Forms), [Scrollbars](/de/docs/Web/CSS/CSS_scrollbars_styling) und die verwendeten Werte von [CSS-Systemfarben](/de/docs/Web/CSS/CSS_colors).

{{EmbedInteractiveExample("pages/css/color-scheme.html")}}

## Syntax

```css
color-scheme: normal;
color-scheme: light;
color-scheme: dark;
color-scheme: light dark;
color-scheme: only light;

/* Globale Werte */
color-scheme: inherit;
color-scheme: initial;
color-scheme: revert;
color-scheme: revert-layer;
color-scheme: unset;
```

Der Wert der `color-scheme`-Eigenschaft muss eines der folgenden Schlüsselwörter sein.

### Werte

- `normal`
  - : Gibt an, dass das Element unter Verwendung der [Farbverwaltung](/de/docs/Web/HTML/Element/meta/name#color-scheme) der Seite gerendert werden kann. Wenn die Seite kein Farbschema festgelegt hat, wird das Element mit den Standardfarbeneinstellungen der Seite gerendert.
- `light`
  - : Gibt an, dass das Element unter Verwendung des Betriebssystem-Farbschemas _hell_ gerendert werden kann.
- `dark`
  - : Gibt an, dass das Element unter Verwendung des Betriebssystem-Farbschemas _dunkel_ gerendert werden kann.
- `only`

  - : Verbietet dem Benutzeragenten, das Farbschema für das Element zu überschreiben.

    Kann verwendet werden, um Farbüberschreibungen zu deaktivieren, die durch Chromes [Auto Dark Theme](https://developer.chrome.com/blog/auto-dark-theme/#per-element-opt-out) verursacht werden, indem `color-scheme: only light;` auf ein bestimmtes Element oder `:root` angewendet wird.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Festlegen von Farbschema-Präferenzen

Um die gesamte Seite für die Farbschema-Präferenzen des Benutzers zu aktivieren, deklarieren Sie `color-scheme` auf dem {{cssxref(":root")}} Element.

```css
:root {
  color-scheme: light dark;
}
```

Um spezifische Elemente für die Farbschema-Präferenzen des Benutzers zu aktivieren, deklarieren Sie `color-scheme` auf diesen Elementen.

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

Um Elemente basierend auf Farbschema-Präferenzen zu stylen, verwenden Sie die [`prefers-color-scheme`](/de/docs/Web/CSS/@media/prefers-color-scheme) Media Query. Das folgende Beispiel aktiviert die gesamte Seite für die Verwendung von sowohl hellen als auch dunklen Betriebssystem-Farbschemata über die `color-scheme`-Eigenschaft und verwendet dann `prefers-color-scheme`, um die gewünschten Vorder- und Hintergrundfarben für einzelne Elemente in diesen Farbschemata festzulegen.

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

Alternativ verwenden Sie die experimentelle [`light-dark()`](/de/docs/Web/CSS/color_value/light-dark) [`<color>` Funktion](/de/docs/Web/CSS/CSS_Functions#color_functions), um die Vorder- und Hintergrundfarben für die verschiedenen Farbschemata mit einer kompakteren Code-Struktur festzulegen:

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

- [`prefers-color-scheme`](/de/docs/Web/CSS/@media/prefers-color-scheme) Media Query, um Benutzerpräferenzen für Farbschemata zu erkennen.
- {{CSSXref("color_value/light-dark", "light-dark()")}} Farb-Funktion, um Farben für sowohl helle als auch dunkle Farbschemata festzulegen.
- Andere farbbezogene Eigenschaften: {{cssxref("color")}}, {{cssxref("accent-color")}}, {{cssxref("background-color")}}, {{cssxref("border-color")}}, {{cssxref("outline-color")}}, {{cssxref("text-decoration-color")}}, {{cssxref("text-emphasis-color")}}, {{cssxref("text-shadow")}}, {{cssxref("caret-color")}}, und {{cssxref("column-rule-color")}}
- {{cssxref("background-image")}}
- {{cssxref("print-color-adjust")}}
- [Verwendung relativer Farben](/de/docs/Web/CSS/CSS_colors/Relative_colors)
