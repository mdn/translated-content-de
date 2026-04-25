---
title: "`color-scheme` CSS property"
short-title: color-scheme
slug: Web/CSS/Reference/Properties/color-scheme
l10n:
  sourceCommit: bcbb4bd6a80292c0663b723d5466759cfaaa8315
---

Die **`color-scheme`** [CSS](/de/docs/Web/CSS) Eigenschaft ermöglicht es einem Element anzugeben, in welchen Farbschemata es komfortabel gerendert werden kann. Benutzeragenten ändern die folgenden Aspekte der UI-Chrome, um das verwendete Farbschema anzupassen:

- Die Farbe der Leinwandoberfläche.
- Die Standardfarben der Scrollbalken und anderer Interaktions-UI.
- Die Standardfarben der Formularelemente.
- Die Standardfarben anderer vom Browser bereitgestellter UI, wie beispielsweise die Unterstreichungen der "Rechtschreibprüfung".

Komponentenautoren müssen das Media-Feature [`prefers-color-scheme`](/de/docs/Web/CSS/Reference/At-rules/@media/prefers-color-scheme) verwenden, um die Farbschemata für die restlichen Elemente zu unterstützen.

Übliche Auswahlmöglichkeiten für Betriebssystem-Farbschemata sind "light" und "dark" oder "Tagmodus" und "Nachtmodus". Wenn ein Benutzer eines dieser Farbschemata auswählt, nimmt das Betriebssystem Anpassungen an der Benutzeroberfläche vor. Dies schließt [Formularelemente](/de/docs/Learn_web_development/Extensions/Forms), [Scrollbalken](/de/docs/Web/CSS/Guides/Scrollbars_styling) und die verwendeten Werte von [CSS Systemfarben](/de/docs/Web/CSS/Reference/Values/system-color) mit ein.

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
  - : Gibt an, dass das Element mit den [Farbschema-](/de/docs/Web/HTML/Reference/Elements/meta/name/color-scheme) Einstellungen der Seite gerendert werden kann. Wenn die Seite kein Farbschema setzt, wird das Element mit den Standardfarbeneinstellungen der Seite gerendert.
- `light`
  - : Gibt an, dass das Element mit dem _light_ Farbschema des Betriebssystems gerendert werden kann.
- `dark`
  - : Gibt an, dass das Element mit dem _dark_ Farbschema des Betriebssystems gerendert werden kann.
- `only`
  - : Untersagt dem Benutzeragenten, das Farbschema für das Element zu überschreiben.

    Kann verwendet werden, um Farbüberschreibungen, die durch das [Auto Dark Theme von Chrome](https://developer.chrome.com/blog/auto-dark-theme/#per-element-opt-out) verursacht werden, auszuschalten, indem `color-scheme: only light;` auf ein bestimmtes Element oder `:root` angewendet wird.

## Formale Definition

{{cssinfo}}

## Formaler Syntax

{{csssyntax}}

## Beispiele

### Farbpräferenzen deklarieren

Um die gesamte Seite in die Farbpräferenzen des Benutzers einzubinden, deklarieren Sie `color-scheme` auf dem {{cssxref(":root")}} Element.

```css
:root {
  color-scheme: light dark;
}
```

Um bestimmte Elemente in die Farbpräferenzen des Benutzers einzubinden, deklarieren Sie `color-scheme` auf diesen Elementen.

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

Zusammen mit dem obigen CSS sollten Sie auch das [`<meta name="color-scheme">`](/de/docs/Web/HTML/Reference/Elements/meta/name/color-scheme) HTML {{HTMLElement("meta")}} Tag im {{htmlelement("head")}}, vor jeglichen CSS-Stilinformationen, einfügen, um Benutzeragenten über das bevorzugte Farbschema zu informieren und unerwünschte Bildschirmblitze während des Seitenladevorgangs zu vermeiden.

### Styling basierend auf Farbschemata

Um Elemente basierend auf Farbschema-Präferenzen zu stylen, verwenden Sie die [`prefers-color-scheme`](/de/docs/Web/CSS/Reference/At-rules/@media/prefers-color-scheme) Media-Query. Das folgende Beispiel bindet die gesamte Seite für beide, helle und dunkle Betriebssystem-Farbschemata über die `color-scheme` Eigenschaft ein und verwendet dann `prefers-color-scheme`, um die gewünschten Vorder- und Hintergrundfarben für individuelle Elemente in diesen Farbschemata anzugeben.

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

- Media-Query [`prefers-color-scheme`](/de/docs/Web/CSS/Reference/At-rules/@media/prefers-color-scheme) um Benutzerpräferenzen für Farbschemata zu erkennen.
- {{CSSXref("color_value/light-dark", "light-dark()")}} Farb-Funktion, um Farben für sowohl dunkle als auch helle Farbschemata festzulegen.
- Andere farbbezogene Eigenschaften: {{cssxref("color")}}, {{cssxref("accent-color")}}, {{cssxref("background-color")}}, {{cssxref("border-color")}}, {{cssxref("outline-color")}}, {{cssxref("text-decoration-color")}}, {{cssxref("text-emphasis-color")}}, {{cssxref("text-shadow")}}, {{cssxref("caret-color")}}, und {{cssxref("column-rule-color")}}
- {{cssxref("background-image")}}
- {{cssxref("print-color-adjust")}}
- [Verwendung relativer Farben](/de/docs/Web/CSS/Guides/Colors/Using_relative_colors)
