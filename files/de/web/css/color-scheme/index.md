---
title: color-scheme
slug: Web/CSS/color-scheme
l10n:
  sourceCommit: 134f9a1ab341bf9ad30358e5f3a59bd9204078df
---

{{CSSRef}}

Die **`color-scheme`** [CSS](/de/docs/Web/CSS) Eigenschaft ermöglicht es einem Element anzugeben, in welchen Farbschemata es komfortabel gerendert werden kann. Benutzeragenten ändern die folgenden Aspekte des Benutzeroberflächen-Chromes, um dem verwendeten Farbschema zu entsprechen:

- Die Farbe der Leinwandoberfläche.
- Die Standardfarben von Scrollleisten und anderen Interaktions-UI-Elementen.
- Die Standardfarben von Formularsteuerungen.
- Die Standardfarben anderer browsergesteuerter UI, wie z.B. "Rechtschreibprüfung"-Unterstreichungen.

Komponentenautoren müssen das Medienfeature [`prefers-color-scheme`](/de/docs/Web/CSS/@media/prefers-color-scheme) verwenden, um die Farbschemata auf den anderen Elementen zu unterstützen.

Häufige Optionen für Betriebssystem-Farbschemata sind "hell" und "dunkel" oder "Tagmodus" und "Nachtmodus". Wenn ein Benutzer eines dieser Farbschemata auswählt, nimmt das Betriebssystem Anpassungen an der Benutzeroberfläche vor. Dies schließt [Formularsteuerungen](/de/docs/Learn_web_development/Extensions/Forms), [Scrollleisten](/de/docs/Web/CSS/CSS_scrollbars_styling) und die verwendeten Werte von [CSS-Systemfarben](/de/docs/Web/CSS/system-color) ein.

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
  - : Gibt an, dass das Element unter Verwendung der [Farbschema](/de/docs/Web/HTML/Element/meta/name#color-scheme)-Einstellungen der Seite gerendert werden kann. Wenn die Seite kein Farbschema festgelegt hat, wird das Element mit den Standardeinstellungen der Seite gerendert.
- `light`
  - : Gibt an, dass das Element unter Verwendung des _hellen_ Farbschemas des Betriebssystems gerendert werden kann.
- `dark`
  - : Gibt an, dass das Element unter Verwendung des _dunklen_ Farbschemas des Betriebssystems gerendert werden kann.
- `only`

  - : Verhindert, dass der Benutzeragent das Farbschema für das Element überschreibt.

    Kann verwendet werden, um Farbüberschreibungen zu deaktivieren, die durch Chromes [Auto Dark Theme](https://developer.chrome.com/blog/auto-dark-theme/#per-element-opt-out) verursacht werden, indem `color-scheme: only light;` auf ein spezifisches Element oder `:root` angewendet wird.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Farbschema-Präferenzen deklarieren

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

Zusammen mit dem obigen CSS sollte auch das [`<meta name="color-scheme">`](/de/docs/Web/HTML/Element/meta/name#color-scheme) HTML {{HTMLElement("meta")}} Tag im {{htmlelement("head")}}, vor jeglicher CSS-Stilinformation, eingefügt werden, um Benutzeragenten über das bevorzugte Farbschema zu informieren und unerwünschte Bildschirmblitze während des Seitenladens zu verhindern.

### Styling basierend auf Farbschemata

Um Elemente basierend auf Farbschema-Präferenzen zu stylen, verwenden Sie die [`prefers-color-scheme`](/de/docs/Web/CSS/@media/prefers-color-scheme) Medienabfrage. Das folgende Beispiel schließt die gesamte Seite in die Verwendung sowohl des hellen als auch des dunklen Farbschemas des Betriebssystems über die `color-scheme` Eigenschaft ein und verwendet dann `prefers-color-scheme`, um die gewünschten Vorder- und Hintergrundfarben für einzelne Elemente in diesen Farbschemata anzugeben.

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

Alternativ können Sie die [`light-dark()`](/de/docs/Web/CSS/color_value/light-dark) [`<color>` Funktion](/de/docs/Web/CSS/CSS_Values_and_Units/CSS_Value_Functions#color_functions) verwenden, um die Vorder- und Hintergrundfarben für die verschiedenen Farbschemata in einer kompakteren Code-Struktur festzulegen:

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
- {{CSSXref("color_value/light-dark", "light-dark()")}} Farb-Funktion, um Farben sowohl für helle als auch für dunkle Farbschemata festzulegen.
- Andere farbbezogene Eigenschaften: {{cssxref("color")}}, {{cssxref("accent-color")}}, {{cssxref("background-color")}}, {{cssxref("border-color")}}, {{cssxref("outline-color")}}, {{cssxref("text-decoration-color")}}, {{cssxref("text-emphasis-color")}}, {{cssxref("text-shadow")}}, {{cssxref("caret-color")}}, und {{cssxref("column-rule-color")}}
- {{cssxref("background-image")}}
- {{cssxref("print-color-adjust")}}
- [Verwendung relativer Farben](/de/docs/Web/CSS/CSS_colors/Relative_colors)
