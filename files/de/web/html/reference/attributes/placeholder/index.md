---
title: "`placeholder` HTML-Attribut"
short-title: placeholder
slug: Web/HTML/Reference/Attributes/placeholder
l10n:
  sourceCommit: b50ed7ac1c2ca21b4b5cfb594474a17da3f2e6c2
---

Das **`placeholder`**-Attribut definiert den Text, der in einem Formularelement angezeigt wird, wenn das Element keinen Wert hat. Der Platzhaltertext sollte dem Benutzer einen kurzen Hinweis auf die Art der erwarteten Daten geben, die in das Steuerungselement eingegeben werden sollen.

Effektiver Platzhaltertext umfasst ein Wort oder eine kurze Phrase, die auf den erwarteten Datentyp hinweist, keine Erklärung oder Aufforderung. Der Platzhalter darf nicht anstelle eines {{HTMLElement("label")}} verwendet werden. Da der Platzhalter nicht sichtbar ist, wenn der Wert des Formularelements nicht null ist, beeinträchtigt die Verwendung von `placeholder` anstelle eines `<label>` die Benutzerfreundlichkeit und Zugänglichkeit.

Das `placeholder`-Attribut wird von den folgenden Eingabetypen unterstützt: `{{HTMLElement("input/text", "text")}}`, `{{HTMLElement("input/search", "search")}}`, `{{HTMLElement("input/url", "url")}}`, `{{HTMLElement("input/tel", "tel")}}`, `{{HTMLElement("input/email", "email")}}` und `{{HTMLElement("input/password", "password")}}`. Es wird auch vom `{{HTMLElement("textarea")}}`-Element unterstützt. Das [Beispiel](#beispiel) unten zeigt das `placeholder`-Attribut in der Verwendung, um das erwartete Format eines Eingabefelds zu erklären.

> [!NOTE]
> Mit Ausnahme von `{{HTMLElement("textarea")}}`-Elementen kann das `placeholder`-Attribut keine Zeilenumbrüche (LF) oder Wagenrückläufe (CR) enthalten. Wenn einer der beiden im Wert enthalten ist, wird der Platzhaltertext abgeschnitten.

## Zugänglichkeitsbedenken

Platzhalter sollten nur verwendet werden, um ein Beispiel für die Art der Daten anzuzeigen, die in ein Formular eingegeben werden sollen; niemals als Ersatz für ein `<label>`-Element; dies schadet der Zugänglichkeit und dem Benutzererlebnis.

Der `<label>`-Text ist visuell und programmatisch mit dem entsprechenden Formularelement verbunden. Screenreader kündigen standardmäßig keinen Platzhalterinhalt an, aber sie kündigen den Labelinhalt an; es ist das Label, das Benutzern von unterstützenden Technologien mitteilt, welche Daten in die Steuerung eingegeben werden sollen. Labels verbessern auch das Benutzererlebnis für Benutzer von Zeigegeräten: Wenn ein Benutzer auf ein `<label>` klickt, darauf tippt oder es berührt, wird der Fokus auf das mit dem Label verbundene Formularelement verschoben.

Platzhalter können nicht als Ersatz für ein Label angesehen werden, selbst für diejenigen, die nicht auf unterstützende Technologien angewiesen sind. Platzhaltertext wird mit geringerem Farbkontrast als der Standardtext des Formularelements angezeigt. Dies ist beabsichtigt, da Benutzer nicht durch den Unterschied zwischen Platzhaltertext und ausgefülltem Formularelement verwirrt werden sollen. Dieses Fehlen von Kontrast kann jedoch für sehbehinderte Benutzer problematisch sein. Zusätzlich verschwindet der Platzhaltertext aus den Formularelementen, wenn Benutzer beginnen, Text einzugeben. Wenn der Platzhaltertext Anweisungen oder Beispiele enthält, die verschwinden, kann dies für Benutzer mit kognitiven Problemen verwirrend sein und das Formular unzugänglich machen, wenn der Platzhalter das Label enthielt.

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
- CSS {{cssxref(":placeholder-shown")}} Pseudoklassen-Selektor
- CSS {{cssxref("::placeholder")}} Pseudoelement-Selektor
