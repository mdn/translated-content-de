---
title: color-scheme
slug: Web/CSS/Reference/Properties/color-scheme
l10n:
  sourceCommit: 2d78abb3e793352e24e976ce0e68c08d817bd7f3
---

Die **`color-scheme`** [CSS](/de/docs/Web/CSS)-Eigenschaft ermöglicht es einem Element anzugeben, in welchen Farbschemata es komfortabel gerendert werden kann. Benutzeragenten ändern die folgenden Aspekte des UI-Chroms, um dem verwendeten Farbschema zu entsprechen:

- Die Farbe der Canvas-Oberfläche.
- Die Standardfarben von Scrollleisten und anderen UI-Interaktionselementen.
- Die Standardfarben von Formularelementen.
- Die Standardfarben anderer vom Browser bereitgestellter UI, wie z.B. "Rechtschreibprüfung"-Unterstreichungen.

Komponentenautoren müssen das [`prefers-color-scheme`](/de/docs/Web/CSS/@media/prefers-color-scheme)-Medienmerkmal verwenden, um die Farbschemata auf den restlichen Elementen zu unterstützen.

Übliche Optionen für Betriebssystem-Farbschemata sind "light" und "dark" oder "Tagmodus" und "Nachtmodus". Wenn ein Benutzer eines dieser Farbschemata auswählt, nimmt das Betriebssystem Anpassungen an der Benutzeroberfläche vor. Dies umfasst [Formularelemente](/de/docs/Learn_web_development/Extensions/Forms), [Scrollleisten](/de/docs/Web/CSS/CSS_scrollbars_styling) und die verwendeten Werte der [CSS-Systemfarben](/de/docs/Web/CSS/system-color).

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

Der Wert der `color-scheme`-Eigenschaft muss eines der folgenden Schlüsselwörter sein.

### Werte

- `normal`
  - : Gibt an, dass das Element mit den [Farb Schema](/de/docs/Web/HTML/Reference/Elements/meta/name/color-scheme)-Einstellungen der Seite gerendert werden kann. Wenn die Seite kein Farbschema festgelegt hat, wird das Element mit den Standardfarbeneinstellungen der Seite gerendert.
- `light`
  - : Gibt an, dass das Element mit dem _light_ Farbschema des Betriebssystems gerendert werden kann.
- `dark`
  - : Gibt an, dass das Element mit dem _dark_ Farbschema des Betriebssystems gerendert werden kann.
- `only`
  - : Verhindert, dass der Benutzeragent das Farbschema des Elements überschreibt.

    Kann verwendet werden, um Farbüberschreibungen, die durch Chromes [Auto Dark Theme](https://developer.chrome.com/blog/auto-dark-theme/#per-element-opt-out) verursacht werden, zu deaktivieren, indem `color-scheme: only light;` auf ein bestimmtes Element oder `:root` angewendet wird.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Farbschema-Präferenzen deklarieren

Um die gesamte Seite in die Farb Schema-Präferenzen des Benutzers einzubinden, deklarieren Sie `color-scheme` auf dem {{cssxref(":root")}}-Element.

```css
:root {
  color-scheme: light dark;
}
```

Um spezifische Elemente in die Farb Schema-Präferenzen des Benutzers einzubeziehen, deklarieren Sie `color-scheme` auf diesen Elementen.

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

Zusammen mit dem obigen CSS sollten Sie auch das [`<meta name="color-scheme">`](/de/docs/Web/HTML/Reference/Elements/meta/name/color-scheme) HTML {{HTMLElement("meta")}}-Tag im {{htmlelement("head")}} vor allen CSS-Stilinformationen einfügen, um Benutzeragenten über das bevorzugte Farbschema zu informieren und unerwünschte Bildschirmeffekte beim Laden der Seite zu vermeiden.

### Styling basierend auf Farbschemata

Um Elemente basierend auf Farbschema-Präferenzen zu stylen, verwenden Sie die [`prefers-color-scheme`](/de/docs/Web/CSS/@media/prefers-color-scheme)-Medienabfrage. Das folgende Beispiel schließt die gesamte Seite in die Verwendung sowohl von light- als auch von dark-Betriebssystemfarbschemata über die `color-scheme`-Eigenschaft ein und verwendet dann `prefers-color-scheme`, um die gewünschten Vorder- und Hintergrundfarben für einzelne Elemente in diesen Farbschemata festzulegen.

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

Alternativ verwenden Sie die [`light-dark()`](/de/docs/Web/CSS/color_value/light-dark) [`<color>`-Funktion](/de/docs/Web/CSS/CSS_values_and_units/CSS_value_functions#color_functions), um die Vorder- und Hintergrundfarben für die verschiedenen Farbschemata mit einer kompakteren Code-Struktur festzulegen:

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

- Medienabfrage [`prefers-color-scheme`](/de/docs/Web/CSS/@media/prefers-color-scheme), um Benutzerpräferenzen für Farbschemata zu erkennen.
- {{CSSXref("color_value/light-dark", "light-dark()")}} Farbfunktions, um Farben sowohl für light- als auch für dark-Farbschemata festzulegen.
- Andere farbbezogene Eigenschaften: {{cssxref("color")}}, {{cssxref("accent-color")}}, {{cssxref("background-color")}}, {{cssxref("border-color")}}, {{cssxref("outline-color")}}, {{cssxref("text-decoration-color")}}, {{cssxref("text-emphasis-color")}}, {{cssxref("text-shadow")}}, {{cssxref("caret-color")}}, und {{cssxref("column-rule-color")}}
- {{cssxref("background-image")}}
- {{cssxref("print-color-adjust")}}
- [Verwendung relativer Farben](/de/docs/Web/CSS/CSS_colors/Relative_colors)
