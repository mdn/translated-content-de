---
title: "::placeholder"
slug: Web/CSS/::placeholder
l10n:
  sourceCommit: 92447fec056cc89b7f28445851bea0c981fcbc12
---

{{CSSRef}}

Das **`::placeholder`** [CSS](/de/docs/Web/CSS) [Pseudo-Element](/de/docs/Web/CSS/Pseudo-elements) repräsentiert den [Platzhaltertext](/de/docs/Web/HTML/Element/input#placeholder) in einem {{HTMLElement("input")}} oder {{HTMLElement("textarea")}} Element.

{{EmbedInteractiveExample("pages/tabbed/pseudo-element-placeholder.html", "tabbed-shorter")}}

Nur die Teilmenge der CSS-Eigenschaften, die auf das {{cssxref("::first-line")}} Pseudo-Element anwendbar sind, können in einer Regel mit `::placeholder` im Selektor verwendet werden.

> [!NOTE]
> In den meisten Browsern erscheint der Platzhaltertext standardmäßig als transparente oder hellgraue Farbe.

## Syntax

```css
::placeholder {
  /* ... */
}
```

## Barrierefreiheit

### Farbkontrast

#### Kontrastverhältnis

Platzhaltertext hat typischerweise eine hellere Farbgebung, um anzuzeigen, dass er einen Vorschlag für eine Art von gültiger Eingabe darstellt und keine tatsächliche Eingabe ist.

Es ist wichtig sicherzustellen, dass das Kontrastverhältnis zwischen der Farbe des Platzhaltertextes und dem Hintergrund der Eingabe hoch genug ist, damit Menschen mit eingeschränkter Sehkraft es lesen können, und gleichzeitig sicherzustellen, dass es einen ausreichenden Unterschied zwischen der Farbe des Platzhaltertextes und der Eingabetextfarbe gibt, damit Benutzer den Platzhalter nicht mit eingegebenen Daten verwechseln.

Das Farbkontrastverhältnis wird durch den Vergleich der Helligkeit der Platzhaltertext- und der Eingabehintergrundfarben bestimmt. Um die aktuellen [Web Content Accessibility Guidelines (WCAG)](https://www.w3.org/WAI/standards-guidelines/wcag/) zu erfüllen, ist ein Verhältnis von 4.5:1 für Textinhalte und 3:1 für größere Texte wie Überschriften erforderlich. Großer Text ist definiert als 18.66px und fett oder größer, oder 24px oder größer.

- [WebAIM: Color Contrast Checker](https://webaim.org/resources/contrastchecker/)
- [MDN Understanding WCAG, Leitfaden 1.4 Erklärungen](/de/docs/Web/Accessibility/Understanding_WCAG/Perceivable#guideline_1.4_make_it_easier_for_users_to_see_and_hear_content_including_separating_foreground_from_background)
- [Understanding Success Criterion 1.4.3 | W3C Understanding WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-contrast.html)

#### Benutzerfreundlichkeit

Platzhaltertext mit ausreichend Farbkontrast kann als eingegebene Eingabe interpretiert werden. Platzhaltertext verschwindet auch, wenn eine Person Inhalte in ein {{htmlelement("input")}} Element eingibt. Beide Umstände können den erfolgreichen Abschluss von Formularen stören, insbesondere für Menschen mit kognitiven Einschränkungen.

Ein alternativer Ansatz zur Bereitstellung von Platzhalterinformationen besteht darin, diese außerhalb des Eingabefeldes in enger visueller Nähe zu platzieren und dann [`aria-describedby`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-describedby) zu verwenden, um das {{HTMLElement("input")}} programmatisch mit seinem Hinweis zu verknüpfen.

Mit dieser Implementierung ist der Hinweisinhalt verfügbar, selbst wenn Informationen in das Eingabefeld eingegeben werden, und die Eingabe erscheint frei von vordefinierten Eingaben, wenn die Seite geladen wird. Die meisten Bildschirmlese-Technologien verwenden `aria-describedby`, um den Hinweis nach dem Ansagen des Etikettentextes der Eingabe vorzulesen, und die Person, die den Bildschirmleser verwendet, kann es stummschalten, wenn sie die zusätzliche Information als unnötig empfinden.

```html
<label for="user-email">Your email address</label>
<span id="user-email-hint" class="input-hint">Example: jane@sample.com</span>
<input
  id="user-email"
  aria-describedby="user-email-hint"
  name="email"
  type="email" />
```

- [Placeholders in Form Fields Are Harmful — Nielsen Norman Group](https://www.nngroup.com/articles/form-design-placeholders/)

### Windows High Contrast Mode

Platzhaltertext wird im [Windows High Contrast Mode](https://www.smashingmagazine.com/2022/06/guide-windows-high-contrast-mode/) mit dem gleichen Stil wie vom Benutzer eingegebene Textinhalte angezeigt. Dies kann es für manche Menschen schwierig machen, zu bestimmen, welche Inhalte eingegeben wurden und welche Platzhaltertext sind.

### Beschriftungen

Platzhalter sind kein Ersatz für das {{htmlelement("label")}} Element. Ohne ein Etikett, das mit einer Kombination der Attribute [`for`](/de/docs/Web/HTML/Element/label#for) und [`id`](/de/docs/Web/HTML/Global_attributes/id) programmiert mit einer Eingabe verbunden wurde, können unterstützende Technologien wie Bildschirmleser {{htmlelement("input")}} Elemente nicht interpretieren.

- [Placeholders in Form Fields Are Harmful — Nielsen Norman Group](https://www.nngroup.com/articles/form-design-placeholders/)

## Beispiele

### Aussehen von Platzhaltern ändern

Dieses Beispiel zeigt einige der Anpassungen, die Sie am Stil von Platzhaltertext vornehmen können.

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
}
```

#### Ergebnis

{{EmbedLiveSample("Change_placeholder_appearance", 200, 60)}}

### Opaquer Text

Einige Browser (wie Firefox) setzen die Standard-{{cssxref("opacity")}} von Platzhaltern auf weniger als 100%. Wenn Sie voll deckenden Platzhaltertext wünschen, setzen Sie `opacity` auf `1`.

#### HTML

```html
<input placeholder="Default opacity" />
<input placeholder="Full opacity" class="force-opaque" />
```

#### CSS

```css
::placeholder {
  color: green;
}

.force-opaque::placeholder {
  opacity: 1;
}
```

#### Ergebnis

{{EmbedLiveSample("Opaque_text", 200, 60)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die {{cssxref(":placeholder-shown")}} Pseudo-Klasse gestaltet ein Element, das einen aktiven Platzhalter hat.
- Verwandte HTML-Elemente: {{HTMLElement("input")}}, {{HTMLElement("textarea")}}
- [HTML-Formulare](/de/docs/Learn/Forms)
