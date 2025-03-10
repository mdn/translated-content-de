---
title: color-scheme
slug: Web/CSS/color-scheme
l10n:
  sourceCommit: 429d45679a29f386af0ddfcf2a64498843c3e1e5
---

{{CSSRef}}

Die **`color-scheme`**-Eigenschaft von [CSS](/de/docs/Web/CSS) ermöglicht es einem Element, anzugeben, in welchen Farbschemata es komfortabel gerendert werden kann. Benutzeragenten ändern die folgenden Aspekte der UI-Chrome, um das verwendete Farbschema anzupassen:

- Die Farbe der Leinwand-Oberfläche.
- Die Standardfarben von Scrollleisten und anderen Interaktions-UIs.
- Die Standardfarben von Formularelementen.
- Die Standardfarben anderer vom Browser bereitgestellter UIs, wie z. B. "Rechtschreibprüfung"-Unterstreichungen.

Komponentenautoren müssen das [`prefers-color-scheme`](/de/docs/Web/CSS/@media/prefers-color-scheme)-Medienmerkmal verwenden, um die Farbschemata bei den restlichen Elementen zu unterstützen.

Übliche Wahlmöglichkeiten für Betriebssystem-Farbschemata sind "hell" und "dunkel" oder "Tagmodus" und "Nachtmodus". Wenn ein Benutzer eines dieser Farbschemata auswählt, nimmt das Betriebssystem Anpassungen an der Benutzeroberfläche vor. Dies schließt [Formularelemente](/de/docs/Learn_web_development/Extensions/Forms), [Scrollleisten](/de/docs/Web/CSS/CSS_scrollbars_styling) und die verwendeten Werte von [CSS-Systemfarben](/de/docs/Web/CSS/system-color) ein.

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
  - : Gibt an, dass das Element unter Verwendung der [Farbschema](/de/docs/Web/HTML/Element/meta/name#color-scheme)-Einstellungen der Seite gerendert werden kann. Wenn die Seite kein Farbschema festgelegt hat, wird das Element mit den Standardfarbeneinstellungen der Seite gerendert.
- `light`
  - : Gibt an, dass das Element unter Verwendung des _hellen_ Farbschemas des Betriebssystems gerendert werden kann.
- `dark`
  - : Gibt an, dass das Element unter Verwendung des _dunklen_ Farbschemas des Betriebssystems gerendert werden kann.
- `only`

  - : Untersagt dem Benutzeragenten, das Farbschema für das Element zu überschreiben.

    Kann verwendet werden, um Farbüberschreibungen durch Chromes [Auto Dark Theme](https://developer.chrome.com/blog/auto-dark-theme/#per-element-opt-out) zu deaktivieren, indem `color-scheme: only light;` auf ein bestimmtes Element oder `:root` angewendet wird.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Farbschema-Präferenzen deklarieren

Um die gesamte Seite in die Farbschema-Präferenzen des Benutzers einzubeziehen, deklarieren Sie `color-scheme` auf dem {{cssxref(":root")}}-Element.

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

Zusätzlich zu dem oben genannten CSS sollten Sie auch das [`<meta name="color-scheme">`](/de/docs/Web/HTML/Element/meta/name#color-scheme)-HTML-{{HTMLElement("meta")}}-Tag im {{htmlelement("head")}} vor jeglichen CSS-Stilinformationen einfügen, um Benutzeragenten über das bevorzugte Farbschema zu informieren und unerwünschte Bildschrimblitze während des Seitenaufbaus zu verhindern.

### Styling basierend auf Farbschemata

Um Elemente basierend auf Farbschema-Präferenzen zu stylen, verwenden Sie die [`prefers-color-scheme`](/de/docs/Web/CSS/@media/prefers-color-scheme)-Media-Query. Das folgende Beispiel entscheidet, dass die gesamte Seite sowohl das helle als auch das dunkle Farbschema des Betriebssystems verwendet, und verwendet dann `prefers-color-scheme`, um die gewünschte Vordergrund- und Hintergrundfarbe für einzelne Elemente in diesen Farbschemata festzulegen.

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

Alternativ können Sie die [`light-dark()`](/de/docs/Web/CSS/color_value/light-dark)-[`<color>`-Funktion](/de/docs/Web/CSS/CSS_Values_and_Units/CSS_Value_Functions#color_functions) verwenden, um die Vordergrund- und Hintergrundfarben für die verschiedenen Farbschemata mit einer kompakteren Code-Struktur festzulegen:

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

- [`prefers-color-scheme`](/de/docs/Web/CSS/@media/prefers-color-scheme)-Medienabfrage, um Benutzerpräferenzen für Farbschemata zu erkennen.
- {{CSSXref("color_value/light-dark", "light-dark()")}}-Farbfunktion, um Farben für sowohl helle als auch dunkle Farbschemata festzulegen.
- Andere farbbezogene Eigenschaften: {{cssxref("color")}}, {{cssxref("accent-color")}}, {{cssxref("background-color")}}, {{cssxref("border-color")}}, {{cssxref("outline-color")}}, {{cssxref("text-decoration-color")}}, {{cssxref("text-emphasis-color")}}, {{cssxref("text-shadow")}}, {{cssxref("caret-color")}}, und {{cssxref("column-rule-color")}}
- {{cssxref("background-image")}}
- {{cssxref("print-color-adjust")}}
- [Verwenden von relativen Farben](/de/docs/Web/CSS/CSS_colors/Relative_colors)
