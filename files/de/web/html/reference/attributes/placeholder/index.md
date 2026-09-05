---
title: "`placeholder` HTML-Attribut"
short-title: placeholder
slug: Web/HTML/Reference/Attributes/placeholder
l10n:
  sourceCommit: c9f3d85f24d7839c9fe36a68d8042d088d906147
---

Das **`placeholder`**-Attribut definiert den Text, der in einem Formularsteuerelement angezeigt wird, wenn das Steuerelement keinen Wert hat. Der Platzhaltertext sollte dem Benutzer einen kurzen Hinweis darauf geben, welcher Datentyp in das Steuerelement eingegeben werden sollte.

Effektiver Platzhaltertext beinhaltet ein Wort oder einen kurzen Satz, der auf den erwarteten Datentyp hinweist, nicht jedoch eine Erklärung oder Aufforderung. Der Platzhalter darf nicht anstelle eines {{HTMLElement("label")}} verwendet werden. Da der Platzhalter nicht sichtbar ist, wenn der Wert des Formularsteuerelements nicht null ist, beeinträchtigt die Verwendung von `placeholder` anstelle eines `<label>` die Benutzerfreundlichkeit und Zugänglichkeit.

Das `placeholder`-Attribut wird von den folgenden Eingabetypen unterstützt: `{{HTMLElement("input/text", "text")}}`, `{{HTMLElement("input/search", "search")}}`, `{{HTMLElement("input/url", "url")}}`, `{{HTMLElement("input/tel", "tel")}}`, `{{HTMLElement("input/email", "email")}}` und `{{HTMLElement("input/password", "password")}}`. Es wird auch vom `{{HTMLElement("textarea")}}`-Element unterstützt. Das [Beispiel](#beispiel) unten zeigt die Verwendung des `placeholder`-Attributs, um das erwartete Format eines Eingabefelds zu erklären.

> [!NOTE]
> Mit Ausnahme von `{{HTMLElement("textarea")}}`-Elementen kann das `placeholder`-Attribut keine Zeilenumbrüche (LF) oder Wagenrückläufe (CR) enthalten. Wenn einer von beiden im Wert enthalten ist, wird der Platzhaltertext abgeschnitten.

## Zugängigkeitsbedenken

Platzhalter sollten nur dazu verwendet werden, ein Beispiel für den Datentyp zu zeigen, der in ein Formular eingegeben werden sollte, niemals als Ersatz für ein `<label>`-Element; dies beeinträchtigt die Zugänglichkeit und Benutzererfahrung.

Der `<label>`-Text ist visuell und programmatisch mit seinem entsprechenden Formularsteuerelement verbunden. Screenreader kündigen Platzhalterinhalte standardmäßig nicht an, aber sie kündigen Label-Inhalte an; es ist das Label, das Benutzer von unterstützenden Technologien darüber informiert, welche Daten in das Steuerelement eingegeben werden sollten. Labels verbessern auch die Benutzererfahrung für Benutzer von Zeigegeräten: Wenn ein Benutzer auf ein `<label>` klickt, es berührt oder antippt, wird der Fokus auf das mit dem Label verbundene Formularsteuerelement verschoben.

Platzhalter können nicht als Ersatz für ein Label verwendet werden, selbst für diejenigen, die nicht auf unterstützende Technologien angewiesen sind. Platzhaltertext wird in einem niedrigeren Farbkontrast als der Standardtext des Formularsteuerelements angezeigt. Dies ist absichtlich so gestaltet, da Benutzer nicht verwirrt werden sollen, was Platzhaltertext und was ein ausgefülltes Formularfeld ist. Allerdings kann dieser mangelnde Kontrast Probleme für sehbehinderte Benutzer verursachen. Außerdem verschwindet der Platzhaltertext aus Formularfeldern, wenn Benutzer mit der Eingabe von Text beginnen. Wenn der Platzhaltertext Anweisungen oder Beispiele enthält, die verschwinden, kann dies für Benutzer mit kognitiven Problemen verwirrend sein und das Formular unzugänglich machen, wenn der Platzhalter das Label enthielt.

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
