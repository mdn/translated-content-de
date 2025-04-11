---
title: color-scheme
slug: Web/CSS/color-scheme
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{CSSRef}}

Die **`color-scheme`** [CSS](/de/docs/Web/CSS) Eigenschaft ermöglicht es einem Element anzugeben, in welchen Farbpaletten es problemlos gerendert werden kann. Benutzeragenten ändern die folgenden Aspekte des UI-Chromes, um die verwendete Farbpalette widerzuspiegeln:

- Die Farbe der Oberfläche der Leinwand.
- Die Standardfarben von Scrollleisten und anderen Interaktions-UI.
- Die Standardfarben von Formsteuerungen.
- Die Standardfarben anderer vom Browser bereitgestellter Benutzeroberflächen, wie z.B. "Rechtschreibprüfung"-Unterstreichungen.

Komponentenautoren müssen das [`prefers-color-scheme`](/de/docs/Web/CSS/@media/prefers-color-scheme) Medienmerkmal verwenden, um die Farbpaletten auf den restlichen Elementen zu unterstützen.

Übliche Auswahlmöglichkeiten für Betriebssystem-Farbpaletten sind "light" und "dark" oder "day mode" und "night mode". Wenn ein Benutzer eine dieser Farbpaletten auswählt, nimmt das Betriebssystem Anpassungen an der Benutzeroberfläche vor. Dies betrifft [Formularsteuerelemente](/de/docs/Learn_web_development/Extensions/Forms), [Scrollleisten](/de/docs/Web/CSS/CSS_scrollbars_styling) und die verwendeten Werte der [CSS-Systemfarben](/de/docs/Web/CSS/system-color).

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
  - : Gibt an, dass das Element unter Verwendung der [Farbpaletten](/de/docs/Web/HTML/Reference/Elements/meta/name#color-scheme)-Einstellungen der Seite gerendert werden kann. Wenn die Seite keine Farbpalette eingestellt hat, wird das Element unter Verwendung der Standardfarbeinstellungen der Seite gerendert.
- `light`
  - : Gibt an, dass das Element unter Verwendung der _light_ Farbpalette des Betriebssystems gerendert werden kann.
- `dark`
  - : Gibt an, dass das Element unter Verwendung der _dark_ Farbpalette des Betriebssystems gerendert werden kann.
- `only`

  - : Verhindert, dass der Benutzeragent die Farbpalette des Elements überschreibt.

    Kann verwendet werden, um Farbüberschreibungen zu deaktivieren, die durch Chromes [Auto Dark Theme](https://developer.chrome.com/blog/auto-dark-theme/#per-element-opt-out) verursacht werden, indem `color-scheme: only light;` auf einem bestimmten Element oder `:root` angewendet wird.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Deklaration von Farbpaletten-Präferenzen

Um die gesamte Seite in die Farbpaletten-Präferenzen des Benutzers einzuschließen, deklarieren Sie `color-scheme` auf dem {{cssxref(":root")}}-Element.

```css
:root {
  color-scheme: light dark;
}
```

Um spezifische Elemente in die Farbpaletten-Präferenzen des Benutzers einzuschließen, deklarieren Sie `color-scheme` auf diesen Elementen.

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

Zusammen mit dem obigen CSS sollten Sie auch das [`<meta name="color-scheme">`](/de/docs/Web/HTML/Reference/Elements/meta/name#color-scheme) HTML {{HTMLElement("meta")}}-Tag im {{htmlelement("head")}} einfügen, vor jeglichen CSS-Stilinformationen, um Benutzeragenten über die bevorzugte Farbpalette zu informieren und unerwünschte Bildschirmblitze während des Seitenladens zu vermeiden.

### Styling basierend auf Farbpaletten

Um Elemente basierend auf Farbpaletten-Präferenzen zu stylen, verwenden Sie die [`prefers-color-scheme`](/de/docs/Web/CSS/@media/prefers-color-scheme) Medienabfrage. Das folgende Beispiel optiert die gesamte Seite in die Nutzung von sowohl light als auch dark Betriebssystem-Farbpaletten via der `color-scheme`-Eigenschaft und verwendet dann `prefers-color-scheme`, um die gewünschten Vorder- und Hintergrundfarben für individuelle Elemente in diesen Farbpaletten zu spezifizieren.

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

Alternativ verwenden Sie die [`light-dark()`](/de/docs/Web/CSS/color_value/light-dark) [`<color>` Funktion](/de/docs/Web/CSS/CSS_Values_and_Units/CSS_Value_Functions#color_functions), um die Vorder- und Hintergrundfarben für die verschiedenen Farbpaletten mit einer kompakteren Code-Struktur festzulegen:

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

- [`prefers-color-scheme`](/de/docs/Web/CSS/@media/prefers-color-scheme) Medienabfrage, um Benutzerpräferenzen für Farbpaletten zu erkennen.
- {{CSSXref("color_value/light-dark", "light-dark()")}} Farb-Funktion, um Farben für sowohl light als auch dark Farbpaletten festzulegen.
- Andere farbbezogene Eigenschaften: {{cssxref("color")}}, {{cssxref("accent-color")}}, {{cssxref("background-color")}}, {{cssxref("border-color")}}, {{cssxref("outline-color")}}, {{cssxref("text-decoration-color")}}, {{cssxref("text-emphasis-color")}}, {{cssxref("text-shadow")}}, {{cssxref("caret-color")}}, und {{cssxref("column-rule-color")}}
- {{cssxref("background-image")}}
- {{cssxref("print-color-adjust")}}
- [Verwendung relativer Farben](/de/docs/Web/CSS/CSS_colors/Relative_colors)
