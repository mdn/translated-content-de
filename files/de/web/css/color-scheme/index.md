---
title: color-scheme
slug: Web/CSS/color-scheme
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{CSSRef}}

Die **`color-scheme`** [CSS](/de/docs/Web/CSS) Eigenschaft erlaubt einem Element anzugeben, in welchen Farbschemata es problemlos gerendert werden kann. Benutzeragenten ändern die folgenden Aspekte des UI-Chromes, um das verwendete Farbschema anzupassen:

- Die Farbe der Leinwandoberfläche.
- Die Standardfarben von Scrollbalken und anderen interaktiven UI.
- Die Standardfarben von Formularelementen.
- Die Standardfarben anderer vom Browser bereitgestellter UI, wie zum Beispiel „Rechtschreibprüfung“-Unterstreichungen.

Komponentenautoren müssen die [`prefers-color-scheme`](/de/docs/Web/CSS/@media/prefers-color-scheme) Media-Feature verwenden, um die Farbschemata auf den restlichen Elementen zu unterstützen.

Übliche Auswahlmöglichkeiten für Betriebssystem-Farbschemata sind „hell“ und „dunkel“ oder „Tagesmodus“ und „Nachtmodus“. Wenn ein Benutzer eines dieser Farbschemata auswählt, nimmt das Betriebssystem Anpassungen an der Benutzeroberfläche vor. Dies umfasst [Formularelemente](/de/docs/Learn_web_development/Extensions/Forms), [Scrollbalken](/de/docs/Web/CSS/CSS_scrollbars_styling) und die verwendeten Werte der [CSS-Systemfarben](/de/docs/Web/CSS/system-color).

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
  - : Gibt an, dass das Element unter Verwendung der [Farbschema](/de/docs/Web/HTML/Reference/Elements/meta/name/color-scheme) Einstellungen der Seite gerendert werden kann. Wenn die Seite kein Farbschema eingestellt hat, wird das Element mit den Standardeinstellungen der Seite gerendert.
- `light`
  - : Gibt an, dass das Element unter Verwendung des _hellen_ Farbschemas des Betriebssystems gerendert werden kann.
- `dark`
  - : Gibt an, dass das Element unter Verwendung des _dunklen_ Farbschemas des Betriebssystems gerendert werden kann.
- `only`

  - : Verhindert, dass der Benutzeragent das Farbschema für das Element überschreibt.

    Kann verwendet werden, um Farbüberschreibungen verursacht durch Chromes [Auto Dark Theme](https://developer.chrome.com/blog/auto-dark-theme/#per-element-opt-out) zu deaktivieren, indem `color-scheme: only light;` auf ein spezifisches Element oder `:root` angewendet wird.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Deklaration von Farbschema-Präferenzen

Um die gesamte Seite in die Farbschema-Präferenzen des Benutzers einzubeziehen, erklären Sie `color-scheme` auf dem {{cssxref(":root")}} Element.

```css
:root {
  color-scheme: light dark;
}
```

Um bestimmte Elemente in die Farbschema-Präferenzen des Benutzers einzubeziehen, erklären Sie `color-scheme` auf diesen Elementen.

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

Zusammen mit dem obigen CSS sollten Sie auch das [`<meta name="color-scheme">`](/de/docs/Web/HTML/Reference/Elements/meta/name/color-scheme) HTML {{HTMLElement("meta")}} Tag im {{htmlelement("head")}}, vor jeder CSS-Stil-Information, einfügen, um Benutzeragenten über das bevorzugte Farbschema zu informieren und unerwünschte Bildschirmblitze während des Ladens der Seite zu verhindern.

### Styling basierend auf Farbschemata

Um Elemente basierend auf Farbschema-Präferenzen zu gestalten, verwenden Sie die [`prefers-color-scheme`](/de/docs/Web/CSS/@media/prefers-color-scheme) Media-Query. Im folgenden Beispiel wird die gesamte Seite in die Verwendung sowohl heller als auch dunkler Betriebssystem-Farbschemata über die `color-scheme` Eigenschaft einbezogen, und dann wird `prefers-color-scheme` verwendet, um die gewünschten Vorder- und Hintergrundfarben für individuelle Elemente in diesen Farbschemata zu spezifizieren.

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

Alternativ verwenden Sie die [`light-dark()`](/de/docs/Web/CSS/color_value/light-dark) [`<color>` Funktion](/de/docs/Web/CSS/CSS_Values_and_Units/CSS_Value_Functions#color_functions), um die Vorder- und Hintergrundfarben für die verschiedenen Farbschemata mit einer kompakteren Code-Struktur festzulegen:

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

- [`prefers-color-scheme`](/de/docs/Web/CSS/@media/prefers-color-scheme) Media-Query, um Benutzerpräferenzen für Farbschemata zu erkennen.
- {{CSSXref("color_value/light-dark", "light-dark()")}} Farb-Funktion, um Farben für sowohl helle als auch dunkle Farbschemata festzulegen.
- Andere farbbezogene Eigenschaften: {{cssxref("color")}}, {{cssxref("accent-color")}}, {{cssxref("background-color")}}, {{cssxref("border-color")}}, {{cssxref("outline-color")}}, {{cssxref("text-decoration-color")}}, {{cssxref("text-emphasis-color")}}, {{cssxref("text-shadow")}}, {{cssxref("caret-color")}}, und {{cssxref("column-rule-color")}}
- {{cssxref("background-image")}}
- {{cssxref("print-color-adjust")}}
- [Verwendung relativer Farben](/de/docs/Web/CSS/CSS_colors/Relative_colors)
