---
title: Hintergrund
slug: Web/CSS/background
l10n:
  sourceCommit: 3928d2b1004e2435e063ef4b037e06e1906d62f3
---

{{CSSRef}}

Die CSS-Eigenschaft **`background`** [shorthand](/de/docs/Web/CSS/Shorthand_properties) setzt alle Hintergrund-Stileigenschaften auf einmal, wie z.B. Farbe, Bild, Ursprung und Größe oder Wiederholungsmethode. Komponenten-Eigenschaften, die nicht in der `background` Kurzschreibweise-Deklaration gesetzt sind, werden auf ihre Standardwerte gesetzt.

{{EmbedInteractiveExample("pages/css/background.html")}}

## Zusammengesetzte Eigenschaften

Diese Eigenschaft ist eine Kurzschreibweise für die folgenden CSS-Eigenschaften:

- {{cssxref("background-attachment")}}
- {{cssxref("background-clip")}}
- {{cssxref("background-color")}}
- {{cssxref("background-image")}}
- {{cssxref("background-origin")}}
- {{cssxref("background-position")}}
- {{cssxref("background-repeat")}}
- {{cssxref("background-size")}}

## Syntax

```css
/* Verwendung einer <background-color> */
background: green;

/* Verwendung eines <bg-image> und <repeat-style> */
background: url("test.jpg") repeat-y;

/* Verwendung eines <box> und <background-color> */
background: border-box red;

/* Ein einzelnes Bild, zentriert und skaliert */
background: no-repeat center/80% url("../img/image.png");

/* Globale Werte */
background: inherit;
background: initial;
background: revert;
background: revert-layer;
background: unset;
```

Die `background` Eigenschaft wird als eine oder mehrere Hintergrundebenen angegeben, die durch Kommata getrennt sind.

Die Syntax jeder Ebene ist wie folgt:

- Jede Ebene kann null oder einmalige Vorkommen der folgenden Werte enthalten:

  - `<attachment>`
  - `<bg-image>`
  - `<position>`
  - `<bg-size>`
  - `<repeat-style>`

- Der `<bg-size>` Wert darf nur direkt nach `<position>` enthalten sein, getrennt mit dem '/' Zeichen, so: "`center/80%`".
- Der `<box>` Wert kann null, einmal oder zweimal enthalten sein. Wenn einmal enthalten, setzt er sowohl {{cssxref("background-origin")}} als auch {{cssxref("background-clip")}}. Wenn zweimal enthalten, setzt das erste Vorkommen {{cssxref("background-origin")}}, und das zweite setzt {{cssxref("background-clip")}}.
- Der `<background-color>` Wert darf nur in der letzten angegebenen Ebene enthalten sein.

### Werte

- `<attachment>`
  - : Siehe {{cssxref("background-attachment")}}. Standard: `scroll`.
- `<box>`
  - : Siehe {{cssxref("background-clip")}} und {{cssxref("background-origin")}}. Standard: `border-box` und `padding-box` entsprechend.
- `<background-color>`
  - : Siehe {{cssxref("background-color")}}. Standard: `transparent`.
- `<bg-image>`
  - : Siehe {{Cssxref("background-image")}}. Standard: `none`.
- `<position>`
  - : Siehe {{cssxref("background-position")}}. Standard: 0% 0%.
- `<repeat-style>`
  - : Siehe {{cssxref("background-repeat")}}. Standard: `repeat`.
- `<bg-size>`
  - : Siehe {{cssxref("background-size")}}. Standard: `auto`.

Die folgenden drei CSS-Zeilen sind gleichwertig:

```css
background: none;
background: transparent;
background: repeat scroll 0% 0% / auto padding-box border-box none transparent;
```

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Barrierefreiheit

Browser bieten keine speziellen Informationen über Hintergrundbilder für unterstützende Technologien. Dies ist insbesondere für Screenreader wichtig, da ein Screenreader das Vorhandensein nicht ankündigt und somit seinen Nutzern nichts vermittelt. Wenn das Bild Informationen enthält, die für das Verständnis des Gesamtzwecks der Seite entscheidend sind, ist es besser, diese semantisch im Dokument zu beschreiben.

- [MDN Verständnis WCAG, Richtlinie 1.1 Erklärungen](/de/docs/Web/Accessibility/Understanding_WCAG/Perceivable#guideline_1.1_—_providing_text_alternatives_for_non-text_content)
- [Verständnis des Erfolgskriteriums 1.1.1 | W3C Verständnis WCAG 2.0](https://www.w3.org/TR/2016/NOTE-UNDERSTANDING-WCAG20-20161007/text-equiv-all.html)

## Beispiele

### Hintergründe mit Farbworten und Bildern einstellen

#### HTML

```html
<p class="topbanner">
  Sternenhimmel<br />
  Funkel, funkel<br />
  Sternenhimmel
</p>
<p class="warning">Hier ist ein Absatz</p>
<p></p>
```

#### CSS

```css
.warning {
  background: pink;
}

.topbanner {
  background: url("starsolid.gif") #99f repeat-y fixed;
}
```

#### Ergebnis

{{EmbedLiveSample("Setting_backgrounds_with_color_keywords_and_images")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("box-decoration-break")}}
- [Verwenden von Verläufen](/de/docs/Web/CSS/CSS_images/Using_CSS_gradients)
- [Verwendung mehrerer Hintergründe](/de/docs/Web/CSS/CSS_backgrounds_and_borders/Using_multiple_backgrounds)
