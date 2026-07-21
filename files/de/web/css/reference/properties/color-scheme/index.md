---
title: "`color-scheme` CSS property"
short-title: color-scheme
slug: Web/CSS/Reference/Properties/color-scheme
l10n:
  sourceCommit: c0c85c3dc0d6ff4247c85b0144149e584d74b625
---

Die **`color-scheme`** [CSS](/de/docs/Web/CSS)-Eigenschaft erlaubt einem Element anzugeben, in welchen Farbschemata es problemlos gerendert werden kann. Benutzeragenten ändern die folgenden Aspekte des UI-Chromes, um das verwendete Farbschema anzupassen:

- Die Farbe der Leinwandoberfläche.
- Die Standardfarben von Scrollleisten und anderen Interaktions-UI.
- Die Standardfarben von Formularelementen.
- Die Standardfarben anderer vom Browser bereitgestellter UI, wie zum Beispiel "Rechtschreibprüfung" Unterstreichungen.

Komponentenautoren müssen das Medienmerkmal [`prefers-color-scheme`](/de/docs/Web/CSS/Reference/At-rules/@media/prefers-color-scheme) verwenden, um die Farbschemata für die restlichen Elemente zu unterstützen.

Übliche Auswahlmöglichkeiten für Betriebssystem-Farbschemata sind "light" und "dark", oder "Tagesmodus" und "Nachtmodus". Wenn ein Benutzer eines dieser Farbschemata auswählt, nimmt das Betriebssystem Anpassungen an der Benutzeroberfläche vor. Dies umfasst [Formularelemente](/de/docs/Learn_web_development/Extensions/Forms), [Scrollleisten](/de/docs/Web/CSS/Guides/Scrollbars_styling) und die verwendeten Werte von [CSS-Systemfarben](/de/docs/Web/CSS/Reference/Values/system-color).

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

### Werte

Diese Eigenschaft wird als eines der folgenden Schlüsselwort-Werte angegeben:

- `normal`
  - : Zeigt an, dass das Element mit den [Farbschema](/de/docs/Web/HTML/Reference/Elements/meta/name/color-scheme)-Einstellungen der Seite gerendert werden kann. Wenn die Seite kein Farbschema hat, wird das Element mit den Standardeinstellungen der Seite gerendert.
- `light`
  - : Zeigt an, dass das Element mit dem _light_-Farbschema des Betriebssystems gerendert werden kann.
- `dark`
  - : Zeigt an, dass das Element mit dem _dark_-Farbschema des Betriebssystems gerendert werden kann.
- `only`
  - : Verbietet dem Benutzeragenten, das Farbschema für das Element zu überschreiben.

    Kann verwendet werden, um Farbüberschreibungen, die durch Chromes [Auto Dark Theme](https://developer.chrome.com/blog/auto-dark-theme/#per-element-opt-out) verursacht werden, zu deaktivieren, indem `color-scheme: only light;` auf ein bestimmtes Element oder `:root` angewendet wird.

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

Zusätzlich zu dem oben genannten CSS sollten Sie auch das [`<meta name="color-scheme">`](/de/docs/Web/HTML/Reference/Elements/meta/name/color-scheme) HTML {{HTMLElement("meta")}} Tag im {{htmlelement("head")}} vor jeglichen CSS-Style-Informationen einfügen, um Benutzeragenten über das bevorzugte Farbschema zu informieren, und um unerwünschte Bildschirmblitze während des Seitenladevorgangs zu verhindern.

### Styling basierend auf Farbschemata

Um Elemente basierend auf Farbschema-Präferenzen zu stylen, verwenden Sie die [`prefers-color-scheme`](/de/docs/Web/CSS/Reference/At-rules/@media/prefers-color-scheme) Medienabfrage. Das folgende Beispiel optiert die gesamte Seite in die Verwendung von sowohl hellen als auch dunklen Betriebssystem-Farbschemata mit der `color-scheme`-Eigenschaft ein und verwendet dann `prefers-color-scheme`, um die gewünschten Vordergrund- und Hintergrundfarben für einzelne Elemente in diesen Farbschemata festzulegen.

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

Alternativ können Sie die [`light-dark()`](/de/docs/Web/CSS/Reference/Values/color_value/light-dark) [`<color>` Funktion](/de/docs/Web/CSS/Reference/Values/Functions#color_functions) verwenden, um die Vorder- und Hintergrundfarben für die verschiedenen Farbschemata mit einer kompakteren Code-Struktur festzulegen:

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

- [`prefers-color-scheme`](/de/docs/Web/CSS/Reference/At-rules/@media/prefers-color-scheme) Medienabfrage, um Benutzerpräferenzen für Farbschemata zu erkennen.
- {{CSSXref("color_value/light-dark", "light-dark()")}} Farb-Funktion, um Farben für sowohl helle als auch dunkle Farbschemata festzulegen.
- Andere farbbezogene Eigenschaften: {{cssxref("color")}}, {{cssxref("accent-color")}}, {{cssxref("background-color")}}, {{cssxref("border-color")}}, {{cssxref("outline-color")}}, {{cssxref("text-decoration-color")}}, {{cssxref("text-emphasis-color")}}, {{cssxref("text-shadow")}}, {{cssxref("caret-color")}}, und {{cssxref("column-rule-color")}}
- {{cssxref("background-image")}}
- {{cssxref("print-color-adjust")}}
- [Verwenden relativer Farben](/de/docs/Web/CSS/Guides/Colors/Using_relative_colors)
