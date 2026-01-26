---
title: "HTML-Attribut: placeholder"
short-title: placeholder
slug: Web/HTML/Reference/Attributes/placeholder
l10n:
  sourceCommit: 7c28cd21b705e7b7664d53b4d7822469ea8e6e15
---

Das **`placeholder`**-Attribut definiert den Text, der in einem Formularsteuerungselement angezeigt wird, wenn das Steuerelement keinen Wert hat. Der Platzhaltertext sollte dem Benutzer einen kurzen Hinweis auf den erwarteten Datentyp geben, der in das Steuerelement eingegeben werden soll.

Effektiver Platzhaltertext besteht aus einem Wort oder einer kurzen Phrase, die auf den erwarteten Datentyp hinweist. Er darf keine Erklärung oder Aufforderung sein. Der Platzhalter darf nicht anstelle eines {{HTMLElement("label")}} verwendet werden. Da der Platzhalter nicht sichtbar ist, wenn der Wert des Formularsteuerelements nicht null ist, schadet die Verwendung von `placeholder` anstelle eines `<label>`-Elements der Usability und der Barrierefreiheit.

Das `placeholder`-Attribut wird von den folgenden Eingabetypen unterstützt: `{{HTMLElement("input/text", "text")}}`, `{{HTMLElement("input/search", "search")}}`, `{{HTMLElement("input/url", "url")}}`, `{{HTMLElement("input/tel", "tel")}}`, `{{HTMLElement("input/email", "email")}}` und `{{HTMLElement("input/password", "password")}}`. Es wird auch vom `{{HTMLElement("textarea")}}`-Element unterstützt. Das [Beispiel](#beispiel) unten zeigt das `placeholder`-Attribut in der Anwendung, um das erwartete Format eines Eingabefeldes zu erklären.

> [!NOTE]
> Außer bei `{{HTMLElement("textarea")}}`-Elementen kann das `placeholder`-Attribut keine Zeilenumbrüche (LF) oder Wagenrückläufe (CR) enthalten. Wenn einer von beiden im Wert enthalten ist, wird der Platzhaltertext abgeschnitten.

## Barrierefreiheitsbedenken

Platzhalter sollten nur verwendet werden, um ein Beispiel für den Datentyp zu zeigen, der in einem Formular eingegeben werden soll, und niemals als Ersatz für ein `<label>`-Element; dies schadet der Barrierefreiheit und der Benutzererfahrung.

Der `<label>`-Text ist visuell und programmatisch mit seinem entsprechenden Formularsteuerungselement verknüpft. Screenreader geben standardmäßig keinen Platzhalterinhalt bekannt, aber sie geben den Inhalt des Labels bekannt; das Label informiert Benutzer von unterstützenden Technologien, welche Daten in das Steuerelement eingegeben werden sollen. Labels verbessern auch die Benutzererfahrung für Benutzer von Zeigegeräten: Wenn ein Benutzer auf ein `<label>` klickt, dieses berührt oder antippt, wird der Fokus auf das zugehörige Formularsteuerelement des Labels verschoben.

Platzhalter können nicht als Ersatz für ein Label selbst für diejenigen angesehen werden, die nicht auf unterstützende Technologien angewiesen sind. Platzhaltertext wird in geringerem Farbkontrast als der Standardtext des Formularsteuerelements angezeigt. Dies ist beabsichtigt, da Benutzer nicht verwirrt werden sollen, was Platzhaltertext ist und was ein ausgefülltes Formularfeld ist. Dieser mangelnde Kontrast kann jedoch Probleme für sehbehinderte Benutzer verursachen. Außerdem verschwindet der Platzhaltertext aus Formularfeldern, wenn Benutzer beginnen, Text einzugeben. Wenn der Platzhaltertext Anweisungen oder Beispiele enthält, die verschwinden, kann dies für Benutzer mit kognitiven Problemen verwirrend sein und das Formular unzugänglich machen, wenn der Platzhalter das Label enthielt.

## Beispiel

### HTML

```html
<form action="/en-US/docs/Web/HTML/Reference/Attributes/placeholder">
  <label for="name">Enter your name:</label>
  <input type="text" id="name" name="name" placeholder="e.g. Mike Shinoda" />
  <button type="submit">Submit</button>
</form>
```

### Ergebnis

{{EmbedLiveSample('Example', '150px', '150px')}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- HTML [`title`](/de/docs/Web/HTML/Reference/Global_attributes/title)
- CSS {{cssxref(":placeholder-shown")}} Pseudo-Klassen-Selektor
- CSS {{cssxref("::placeholder")}} Pseudo-Element-Selektor
