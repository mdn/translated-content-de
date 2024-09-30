---
title: "HTML-Attribut: placeholder"
short-title: placeholder
slug: Web/HTML/Attributes/placeholder
l10n:
  sourceCommit: 067a40e4ed27ea6e1f3b8bbfec15cd9dc3078f4c
---

{{HTMLSidebar}}

Das **`placeholder`**-Attribut definiert den Text, der in einem Formularsteuerelement angezeigt wird, wenn das Steuerelement keinen Wert hat. Der Platzhaltertext sollte dem Benutzer einen kurzen Hinweis auf den erwarteten Datentyp geben, der in das Steuerelement eingegeben werden sollte.

Ein wirkungsvoller Platzhaltertext enthält ein Wort oder eine kurze Phrase, die auf den erwarteten Datentyp hinweist, nicht eine Erklärung oder Eingabeaufforderung. Der Platzhalter darf nicht anstelle eines {{HTMLElement("label")}}-Elements verwendet werden. Da der Platzhalter nicht sichtbar ist, wenn der Wert des Formularsteuerelements nicht null ist, beeinträchtigt die Verwendung von `placeholder` anstelle eines `<label>`-Elements für eine Eingabeaufforderung die Bedienbarkeit und Zugänglichkeit.

Das `placeholder`-Attribut wird von den folgenden `input`-Typen unterstützt: `{{HTMLElement("input/text", "text")}}`, `{{HTMLElement("input/search", "search")}}`, `{{HTMLElement("input/url", "url")}}`, `{{HTMLElement("input/tel", "tel")}}`, `{{HTMLElement("input/email", "email")}}` und `{{HTMLElement("input/password", "password")}}`. Es wird auch vom `{{HTMLElement("textarea")}}`-Element unterstützt. Das [Beispiel](#beispiel) unten zeigt das `placeholder`-Attribut in der Anwendung, um das erwartete Format eines Eingabefelds zu erklären.

> [!NOTE]
> Das `placeholder`-Attribut darf keine Zeilenumbrüche (LF) oder Wagenrückläufe (CR) enthalten. Wenn eines davon im Wert enthalten ist, wird der Platzhaltertext abgeschnitten.

## Zugänglichkeitsbedenken

Platzhalter sollten nur verwendet werden, um ein Beispiel für die Art der Daten zu zeigen, die in ein Formular eingegeben werden sollen; niemals als Ersatz für ein `<label>`-Element; dies würde die Zugänglichkeit und Benutzererfahrung beeinträchtigen.

Der `<label>`-Text ist optisch und programmatisch mit seinem entsprechenden Formularsteuerelement verknüpft. Bildschirmleseprogramme kündigen standardmäßig keinen Platzhalterinhalt an, wohl aber den Label-Inhalt; das Label informiert Benutzer assistiver Technologien, welche Daten in das Steuerelement eingegeben werden sollen. Labels verbessern auch die Benutzererfahrung für Benutzer von Zeigegeräten: Wenn ein Benutzer auf ein `<label>` klickt, tippt oder es berührt, wird der Fokus auf das mit dem Label verknüpfte Formularsteuerelement verschoben.

Platzhalter können nicht als Ersatz für ein Label angesehen werden, selbst für diejenigen, die nicht auf assistive Technologien angewiesen sind. Platzhaltertext wird in niedrigerem Farbkontrast als der Standardtext des Formularsteuerelements angezeigt. Dies ist so gestaltet, weil Benutzer nicht verwirrt sein sollen, was Platzhaltertext ist und was ein ausgefülltes Formularfeld ist. Dieser mangelnde Kontrast kann jedoch für sehbehinderte Benutzer Probleme verursachen. Außerdem verschwindet der Platzhaltertext aus Formularfeldern, wenn Benutzer mit der Texteingabe beginnen. Wenn der Platzhaltertext Anweisungen oder Beispiele enthält, die verschwinden, kann dies für Benutzer mit kognitiven Problemen verwirrend sein und das Formular unzugänglich machen, wenn der Platzhalter das Label enthielt.

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
- CSS [`:placeholder-shown`](/de/docs/Web/CSS/:placeholder-shown) Pseudoklassen-Selektor
- CSS [`::placeholder`](/de/docs/Web/CSS/::placeholder) Pseudoelement-Selektor
