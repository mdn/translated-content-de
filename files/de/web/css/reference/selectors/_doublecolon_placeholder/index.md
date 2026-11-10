---
title: "`::placeholder` CSS pseudo-element"
short-title: ::placeholder
slug: Web/CSS/Reference/Selectors/::placeholder
l10n:
  sourceCommit: 7cabe7010a0ccfcf587ddac1571963eba102090d
---

Das **`::placeholder`**-[CSS](/de/docs/Web/CSS)-[Pseudoelement](/de/docs/Web/CSS/Reference/Selectors/Pseudo-elements) repräsentiert den [Platzhaltertext](/de/docs/Web/HTML/Reference/Elements/input#placeholder) in einem {{HTMLElement("input")}}- oder {{HTMLElement("textarea")}}-Element.

{{InteractiveExample("CSS Demo: ::placeholder", "tabbed-shorter")}}

```css interactive-example
input {
  margin-top: 0.5rem;
}

input::placeholder {
  font-weight: bold;
  opacity: 0.5;
  color: red;
}
```

```html interactive-example
<label for="first-name">Your phone number:</label><br />

<input
  id="first-name"
  type="tel"
  name="phone"
  minlength="9"
  maxlength="9"
  placeholder="It must be 9 digits" />
```

In einer Regel, deren Selektor `::placeholder` verwendet, können nur die CSS-Eigenschaften verwendet werden, die für das Pseudoelement {{cssxref("::first-line")}} gelten.

> [!NOTE]
> In den meisten Browsern ist Platzhaltertext standardmäßig durchscheinend oder hellgrau.

## Syntax

```css
::placeholder {
  /* ... */
}
```

## Barrierefreiheit

### Farbkontrast

#### Kontrastverhältnis

Platzhaltertext wird üblicherweise in einer helleren Farbe dargestellt, um zu verdeutlichen, dass er lediglich einen Hinweis auf eine gültige Eingabe gibt und selbst keine Eingabe ist.

Das Kontrastverhältnis zwischen dem Platzhaltertext und dem Hintergrund des Eingabefelds muss hoch genug sein, damit Menschen mit eingeschränktem Sehvermögen den Text lesen können. Gleichzeitig muss sich die Farbe des Platzhaltertexts ausreichend von der Farbe eingegebenen Texts unterscheiden, damit Nutzende den Platzhalter nicht mit eingegebenen Daten verwechseln.

Das Farbkontrastverhältnis wird durch einen Vergleich der Helligkeitswerte des Platzhaltertexts und des Eingabefeldhintergrunds bestimmt. Um die aktuellen [Richtlinien für barrierefreie Webinhalte (WCAG)](https://www.w3.org/WAI/standards-guidelines/wcag/) zu erfüllen, ist für Text ein Verhältnis von 4,5:1 und für größeren Text, beispielsweise Überschriften, ein Verhältnis von 3:1 erforderlich. Als größerer Text gilt Text ab 18,66 px in Fettschrift oder ab 24 px in normaler Schrift.

- [WebAIM: Farbkontrast-Prüftool](https://webaim.org/resources/contrastchecker/)
- [MDN: WCAG verstehen – Erläuterungen zu Richtlinie 1.4](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable#guideline_1.4_make_it_easier_for_users_to_see_and_hear_content_including_separating_foreground_from_background)
- [Erfolgskriterium 1.4.3 verstehen | W3C: WCAG 2.0 verstehen](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-contrast.html)

#### Benutzerfreundlichkeit

Platzhaltertext mit ausreichendem Farbkontrast kann mit einer bereits erfolgten Eingabe verwechselt werden. Außerdem verschwindet der Platzhaltertext, sobald jemand Inhalt in ein {{htmlelement("input")}}-Element eingibt. Beides kann das erfolgreiche Ausfüllen eines Formulars erschweren, insbesondere für Menschen mit kognitiven Einschränkungen.

Eine Alternative besteht darin, den Hinweis außerhalb des Eingabefelds in unmittelbarer visueller Nähe zu platzieren und das {{HTMLElement("input")}} mithilfe von [`aria-describedby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-describedby) programmatisch mit dem Hinweis zu verknüpfen.

Bei dieser Umsetzung bleibt der Hinweis auch dann verfügbar, wenn bereits etwas in das Eingabefeld eingegeben wurde. Zugleich wirkt das Eingabefeld beim Laden der Seite nicht so, als enthielte es bereits eine Eingabe. Die meisten Screenreader lesen mithilfe von `aria-describedby` den Hinweis vor, nachdem sie die Beschriftung des Eingabefelds angesagt haben. Nutzende des Screenreaders können den Hinweis stummschalten, wenn sie die zusätzliche Information nicht benötigen.

```html
<label for="user-email">Your email address</label>
<span id="user-email-hint" class="input-hint">Example: jane@sample.com</span>
<input
  id="user-email"
  aria-describedby="user-email-hint"
  name="email"
  type="email" />
```

- [Platzhalter in Formularfeldern sind schädlich — Nielsen Norman Group](https://www.nngroup.com/articles/form-design-placeholders/)

### Windows-Modus für hohen Kontrast

Im [Windows-Modus für hohen Kontrast](https://www.smashingmagazine.com/2022/06/guide-windows-high-contrast-mode/) wird Platzhaltertext genauso dargestellt wie von Nutzenden eingegebener Text. Dadurch kann es für manche Menschen schwierig sein, eingegebenen Text von Platzhaltertext zu unterscheiden.

### Beschriftungen

Platzhalter ersetzen kein {{htmlelement("label")}}-Element. Ohne eine Beschriftung, die über die Attribute [`for`](/de/docs/Web/HTML/Reference/Elements/label#for) und [`id`](/de/docs/Web/HTML/Reference/Global_attributes/id) programmatisch mit einem Eingabefeld verknüpft ist, können assistive Technologien wie Screenreader {{htmlelement("input")}}-Elemente nicht richtig erfassen.

- [Platzhalter in Formularfeldern sind schädlich — Nielsen Norman Group](https://www.nngroup.com/articles/form-design-placeholders/)

## Beispiele

### Darstellung des Platzhaltertexts ändern

Dieses Beispiel zeigt einige Anpassungen, die Sie am Stil des Platzhaltertexts vornehmen können.

#### HTML

```html
<input placeholder="Type here" />
```

#### CSS

```css
input::placeholder {
  color: red;
  font-size: 1.2em;
  font-style: italic;
  opacity: 0.5;
}
```

#### Ergebnis

{{EmbedLiveSample("Change_placeholder_appearance", 200, 60)}}

### Deckender Text

Einige Browser stellen Platzhaltertext mit verringerter Deckkraft dar. Wenn der Text vollständig deckend sein soll, legen Sie den Wert der Eigenschaft {{CSSXref("color")}} ausdrücklich fest. Mit dem Wert [`currentColor`](/de/docs/Web/CSS/Reference/Values/color_value#currentcolor_keyword) erhält der Platzhaltertext dieselbe Farbe wie das zugehörige Eingabeelement.

#### HTML

```html
<input placeholder="Color set by browser" />
<input placeholder="Same color as input" class="explicit-color" />
<input placeholder="Semi-opaque text color" class="opacity-change" />
```

#### CSS

```css
input {
  font-weight: bold;
  color: green;
}

.explicit-color::placeholder {
  /* use the same color as input element to avoid the browser set default color */
  color: currentColor;
}

.opacity-change::placeholder {
  /* less opaque text */
  color: color-mix(in srgb, currentColor 70%, transparent);
}
```

#### Ergebnis

{{EmbedLiveSample("opaque_text", 200, 60)}}

> [!NOTE]
> Browser verwenden unterschiedliche Standardfarben für Platzhaltertext. Firefox verwendet beispielsweise die Farbe des Eingabeelements mit 54 % Deckkraft, während Chrome die Farbe `darkgray` verwendet. Wenn Platzhaltertext in allen Browsern dieselbe Farbe haben soll, legen Sie `color` ausdrücklich fest.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die Pseudoklasse {{cssxref(":placeholder-shown")}} gestaltet ein Element, das einen aktiven Platzhalter _hat_.
- Verwandte HTML-Elemente: {{HTMLElement("input")}}, {{HTMLElement("textarea")}}
- [HTML-Formulare](/de/docs/Learn_web_development/Extensions/Forms)
