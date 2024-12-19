---
title: "::placeholder"
slug: Web/CSS/::placeholder
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{CSSRef}}

Das **`::placeholder`** [CSS](/de/docs/Web/CSS) [pseudo-element](/de/docs/Web/CSS/Pseudo-elements) repräsentiert den [Platzhaltertext](/de/docs/Web/HTML/Element/input#placeholder) in einem {{HTMLElement("input")}} oder {{HTMLElement("textarea")}} Element.

{{EmbedInteractiveExample("pages/tabbed/pseudo-element-placeholder.html", "tabbed-shorter")}}

Nur die Teilmenge von CSS-Eigenschaften, die auf das {{cssxref("::first-line")}} Pseudo-Element anwendbar sind, können in einer Regel mit `::placeholder` im Selektor verwendet werden.

> [!NOTE]
> In den meisten Browsern erscheint der Platzhaltertext standardmäßig in einer durchscheinenden oder hellgrauen Farbe.

## Syntax

```css
::placeholder {
  /* ... */
}
```

## Barrierefreiheit

### Farbkontrast

#### Kontrastverhältnis

Platzhaltertext hat typischerweise eine hellere Farbgebung, um anzuzeigen, dass er ein Vorschlag für geeignete Eingaben ist und keine tatsächlichen Daten darstellt.

Es ist wichtig sicherzustellen, dass das Kontrastverhältnis zwischen der Farbe des Platzhaltertextes und dem Hintergrund des Eingabefeldes hoch genug ist, dass Menschen mit Sehbehinderungen es lesen können, während auch genügend Unterschied zwischen der Farbe des Platzhaltertextes und der eingegebenen Daten besteht, damit Nutzer den Platzhalter nicht mit eingegebenen Daten verwechseln.

Das Kontrastverhältnis wird bestimmt, indem die Leuchtkraft der Farben von Platzhaltertext und Hintergrund des Eingabefeldes verglichen wird. Um den aktuellen [Web Content Accessibility Guidelines (WCAG)](https://www.w3.org/WAI/standards-guidelines/wcag/) zu entsprechen, ist ein Verhältnis von 4,5:1 für Textinhalt und 3:1 für größeren Text wie Überschriften erforderlich. Großer Text wird als 18,66px und fett oder größer, oder 24px oder größer definiert.

- [WebAIM: Color Contrast Checker](https://webaim.org/resources/contrastchecker/)
- [MDN Verständnis von WCAG, Leitfaden 1.4 Erklärungen](/de/docs/Web/Accessibility/Understanding_WCAG/Perceivable#guideline_1.4_make_it_easier_for_users_to_see_and_hear_content_including_separating_foreground_from_background)
- [Verstehen des Erfolgskriteriums 1.4.3 | W3C Verständnis WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-contrast.html)

#### Benutzerfreundlichkeit

Platzhaltertext mit ausreichendem Farbkontrast kann als eingegebene Daten interpretiert werden. Platzhaltertext verschwindet auch, wenn eine Person Inhalte in ein {{htmlelement("input")}} Element eingibt. Beide Umstände können den erfolgreichen Abschluss eines Formulars stören, insbesondere für Menschen mit kognitiven Herausforderungen.

Ein alternativer Ansatz zur Bereitstellung von Platzhalterinformationen ist es, diese außerhalb des Eingabefeldes in unmittelbarer visueller Nähe einzuschließen und dann [`aria-describedby`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-describedby) zu verwenden, um das {{HTMLElement("input")}} programmatisch mit seinem Hinweis zu verknüpfen.

Mit dieser Implementierung ist der Hinweisinhalt auch dann verfügbar, wenn Informationen in das Eingabefeld eingegeben wurden, und das Eingabefeld erscheint frei von vorhandener Eingabe, wenn die Seite geladen wird. Die meisten Bildschirmlese-Technologien verwenden `aria-describedby`, um den Hinweis nach dem Ankündigen des Beschriftungstextes des Eingabefeldes vorzulesen, und die Person, die den Bildschirmleser verwendet, kann ihn stummschalten, wenn sie die zusätzliche Information als unnötig erachtet.

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

### Windows Hochkontrastmodus

Platzhaltertext wird mit derselben Formatierung wie vom Benutzer eingegebene Textinhalte dargestellt, wenn er im [Windows Hochkontrastmodus](https://www.smashingmagazine.com/2022/06/guide-windows-high-contrast-mode/) wiedergegeben wird. Dies wird es für einige Personen schwierig machen zu bestimmen, welche Inhalte eingegeben wurden und welche Inhalte Platzhaltertext sind.

### Beschriftungen

Platzhalter sind kein Ersatz für das {{htmlelement("label")}} Element. Ohne eine Beschriftung, die programmatisch mit einem Eingabefeld unter Verwendung einer Kombination der [`for`](/de/docs/Web/HTML/Element/label#for) und [`id`](/de/docs/Web/HTML/Global_attributes/id) Attribute verbunden ist, kann Assistenztechnologie wie Bildschirmleser {{htmlelement("input")}} Elemente nicht interpretieren.

- [Platzhalter in Formularfeldern sind schädlich — Nielsen Norman Group](https://www.nngroup.com/articles/form-design-placeholders/)

## Beispiele

### Erscheinungsbild des Platzhalters ändern

Dieses Beispiel zeigt einige Anpassungen, die Sie an den Stilen von Platzhaltertext vornehmen können.

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

### Opaker Text

Einige Browser (wie Firefox) setzen den Standard-{{cssxref("opacity")}}-Wert von Platzhaltern auf weniger als 100%. Wenn Sie vollständig opaken Platzhaltertext wünschen, setzen Sie `opacity` auf `1`.

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
- [HTML-Formulare](/de/docs/Learn_web_development/Extensions/Forms)
