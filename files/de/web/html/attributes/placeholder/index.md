---
title: "HTML-Attribut: placeholder"
short-title: placeholder
slug: Web/HTML/Attributes/placeholder
l10n:
  sourceCommit: 067a40e4ed27ea6e1f3b8bbfec15cd9dc3078f4c
---

{{HTMLSidebar}}

Das **`placeholder`**-Attribut definiert den Text, der in einem Formularelement angezeigt wird, wenn das Element keinen Wert hat. Der Platzhaltertext sollte dem Benutzer einen kurzen Hinweis auf die erwartete Art der einzugebenden Daten geben.

Ein effektiver Platzhaltertext besteht aus einem Wort oder einem kurzen Satz, der auf den erwarteten Datentyp hinweist, nicht aus einer Erklärung oder einer Aufforderung. Der Platzhalter darf nicht anstelle eines {{HTMLElement("label")}} verwendet werden. Da der Platzhalter nicht sichtbar ist, wenn das Formularelement einen Wert ungleich null hat, beeinträchtigt die Verwendung von `placeholder` anstelle eines `<label>` für eine Eingabeaufforderung die Benutzerfreundlichkeit und Barrierefreiheit.

Das `placeholder`-Attribut wird von folgenden Eingabetypen unterstützt: `{{HTMLElement("input/text", "text")}}`, `{{HTMLElement("input/search", "search")}}`, `{{HTMLElement("input/url", "url")}}`, `{{HTMLElement("input/tel", "tel")}}`, `{{HTMLElement("input/email", "email")}}` und `{{HTMLElement("input/password", "password")}}`. Es wird außerdem vom `{{HTMLElement("textarea")}}`-Element unterstützt. Das [Beispiel](#beispiel) unten zeigt das `placeholder`-Attribut im Einsatz, um das erwartete Format eines Eingabefeldes zu erklären.

> [!NOTE]
> Das `placeholder`-Attribut kann keine Zeilenumbrüche (LF) oder Wagenrückläufe (CR) enthalten. Wenn einer dieser Werte im `placeholder` enthalten ist, wird der Platzhaltertext abgeschnitten.

## Barrierefreiheit

Platzhalter sollten nur verwendet werden, um ein Beispiel für die Art der Daten zu zeigen, die in ein Formular eingegeben werden sollen; niemals als Ersatz für ein `<label>`-Element; dies beeinträchtigt die Barrierefreiheit und Benutzererfahrung.

Der `<label>`-Text ist sowohl visuell als auch programmatisch mit dem entsprechenden Formularelement verknüpft. Bildschirmleser geben standardmäßig keinen Platzhalterinhalt aus, aber sie geben den Label-Inhalt aus; es ist das Label, das Benutzer von unterstützenden Technologien darüber informiert, welche Daten in das Element eingegeben werden sollen. Labels verbessern auch die Benutzererfahrung für Benutzer von Zeigegeräten: Wenn ein Benutzer auf ein `<label>` klickt, es berührt oder antippt, wird der Fokus auf das zugehörige Formularelement verschoben.

Platzhalter können nicht als Ersatz für ein Label angesehen werden, selbst für diejenigen, die nicht auf unterstützende Technologien angewiesen sind. Platzhaltertext wird mit geringerem Farbkontrast als der Standardtext des Formularelements angezeigt. Dies ist absichtlich so, da Benutzer nicht durch den Unterschied zwischen Platzhaltertext und ausgefüllten Formularfeldern verwirrt werden sollen. Allerdings kann dieser Mangel an Kontrast Probleme für sehbehinderte Benutzer verursachen. Zusätzlich verschwindet der Platzhaltertext aus Formularelementen, wenn Benutzer Text eingeben. Wenn der Platzhaltertext Anweisungen oder Beispiele enthielt, die verschwinden, kann dies für Benutzer mit kognitiven Problemen verwirrend sein und das Formular unzugänglich machen, wenn der Platzhalter das Label enthielt.

## Beispiel

### HTML

```html
<form action="/en-US/docs/Web/HTML/Attributes/placeholder">
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

- HTML [`title`](/de/docs/Web/HTML/Global_attributes/title)
- CSS [`:placeholder-shown`](/de/docs/Web/CSS/:placeholder-shown) Pseudo-Klassen-Selektor
- CSS [`::placeholder`](/de/docs/Web/CSS/::placeholder) Pseudo-Element-Selektor
