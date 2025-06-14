---
title: color-scheme
slug: Web/CSS/color-scheme
l10n:
  sourceCommit: 0b8f00bb9ece33c6964eea886b2f7db8711d7b62
---

{{CSSRef}}

Die **`color-scheme`** [CSS](/de/docs/Web/CSS) Eigenschaft ermöglicht es einem Element anzugeben, in welchen Farbprofilen es komfortabel dargestellt werden kann. Benutzeragenten ändern die folgenden Aspekte der UI-Oberfläche, um dem verwendeten Farbschema zu entsprechen:

- Die Farbe der Canvas-Oberfläche.
- Die Standardfarben von Scrollleisten und anderen Interaktionselementen der UI.
- Die Standardfarben von Formularelementen.
- Die Standardfarben anderer vom Browser bereitgestellter UI, wie z.B. "Rechtschreibprüfung" Unterstreichungen.

Komponentenautoren müssen das [`prefers-color-scheme`](/de/docs/Web/CSS/@media/prefers-color-scheme) Medienmerkmal verwenden, um die Farbschemata für die restlichen Elemente zu unterstützen.

Gängige Auswahlmöglichkeiten für Betriebssystem-Farbschemata sind "hell" und "dunkel" oder "Tagmodus" und "Nachtmodus". Wenn ein Benutzer eines dieser Farbschemata auswählt, nimmt das Betriebssystem Anpassungen an der Benutzeroberfläche vor. Dies umfasst [Formularelemente](/de/docs/Learn_web_development/Extensions/Forms), [Scrollleisten](/de/docs/Web/CSS/CSS_scrollbars_styling) und die verwendeten Werte von [CSS-Systemfarben](/de/docs/Web/CSS/system-color).

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
  - : Gibt an, dass das Element mit den [Farbschema](/de/docs/Web/HTML/Reference/Elements/meta/name/color-scheme) Einstellungen der Seite gerendert werden kann. Wenn die Seite kein Farbschema gesetzt hat, wird das Element mit den Standardfarbeinstellungen der Seite gerendert.
- `light`
  - : Gibt an, dass das Element mit dem Betriebssystem _hellen_ Farbschema gerendert werden kann.
- `dark`
  - : Gibt an, dass das Element mit dem Betriebssystem _dunklen_ Farbschema gerendert werden kann.
- `only`

  - : Verbietet dem Benutzeragenten, das Farbschema für das Element zu überschreiben.

    Kann verwendet werden, um das Überschreiben von Farben durch das automatische Dunkelthema von Chrome zu deaktivieren, indem `color-scheme: only light;` auf ein spezifisches Element oder `:root` angewendet wird.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Deklaration von Farbschema-Präferenzen

Um die gesamte Seite in die Farbschema-Präferenzen des Benutzers aufzunehmen, deklarieren Sie `color-scheme` auf dem {{cssxref(":root")}} Element.

```css
:root {
  color-scheme: light dark;
}
```

Um spezifische Elemente in die Farbschema-Präferenzen des Benutzers aufzunehmen, deklarieren Sie `color-scheme` auf diesen Elementen.

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

Zusätzlich zu dem oben genannten CSS sollte auch das [`<meta name="color-scheme">`](/de/docs/Web/HTML/Reference/Elements/meta/name/color-scheme) HTML {{HTMLElement("meta")}} Tag im {{htmlelement("head")}} vor jeglichen CSS-Stilinformationen eingefügt werden, um Benutzeragenten über das bevorzugte Farbschema zu informieren und ungewollte Bildschirmblitze während des Seitenladens zu vermeiden.

### Styling basierend auf Farbschemata

Um Elemente basierend auf Farbschema-Präferenzen zu stylen, verwenden Sie die [`prefers-color-scheme`](/de/docs/Web/CSS/@media/prefers-color-scheme) Medienabfrage. Das folgende Beispiel wählt die gesamte Seite in die Verwendung sowohl hellerer als auch dunklerer Betriebssystem-Farbschemata mittels der `color-scheme` Eigenschaft aus und verwendet dann `prefers-color-scheme`, um die gewünschten Vorder- und Hintergrundfarben für individuelle Elemente in diesen Farbschemata zu spezifizieren.

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

Alternativ verwenden Sie die [`light-dark()`](/de/docs/Web/CSS/color_value/light-dark) [`<color>` Funktion](/de/docs/Web/CSS/CSS_Values_and_Units/CSS_Value_Functions#color_functions), um die Vorder- und Hintergrundfarben für die verschiedenen Farbschemata in einer kompakteren Code-Struktur festzulegen:

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
- Andere farbbezogene Eigenschaften: {{cssxref("color")}}, {{cssxref("accent-color")}}, {{cssxref("background-color")}}, {{cssxref("border-color")}}, {{cssxref("outline-color")}}, {{cssxref("text-decoration-color")}}, {{cssxref("text-emphasis-color")}}, {{cssxref("text-shadow")}}, {{cssxref("caret-color")}}, und {{cssxref("column-rule-color")}}
- {{cssxref("background-image")}}
- {{cssxref("print-color-adjust")}}
- [Verwendung relativer Farben](/de/docs/Web/CSS/CSS_colors/Relative_colors)
