---
title: "HTML-Attribut: placeholder"
short-title: placeholder
slug: Web/HTML/Reference/Attributes/placeholder
l10n:
  sourceCommit: 0754cd805a8e010d2e3a2a065f634a3bcf358252
---

Das **`placeholder`**-Attribut definiert den angezeigten Text in einem Formularfeld, wenn das Feld keinen Wert hat. Der Placeholder-Text sollte dem Benutzer einen kurzen Hinweis auf die erwartete Art der Daten geben, die in das Feld eingegeben werden sollen.

Effektiver Placeholder-Text umfasst ein Wort oder einen kurzen Satz, der auf den erwarteten Datentyp hinweist, nicht jedoch eine Erklärung oder Aufforderung. Der Placeholder darf nicht anstelle eines {{HTMLElement("label")}} verwendet werden. Da der Placeholder nicht sichtbar ist, wenn der Wert des Formularfeldes nicht null ist, beeinträchtigt die Verwendung von `placeholder` anstelle eines `<label>` die Benutzerfreundlichkeit und Zugänglichkeit.

Das `placeholder`-Attribut wird von den folgenden Eingabetypen unterstützt: `{{HTMLElement("input/text", "text")}}`, `{{HTMLElement("input/search", "search")}}`, `{{HTMLElement("input/url", "url")}}`, `{{HTMLElement("input/tel", "tel")}}`, `{{HTMLElement("input/email", "email")}}` und `{{HTMLElement("input/password", "password")}}`. Es wird auch vom `{{HTMLElement("textarea")}}`-Element unterstützt. Das untenstehende [Beispiel](#beispiel) zeigt die Verwendung des `placeholder`-Attributs, um das erwartete Format eines Eingabefeldes zu erklären.

> [!NOTE]
> Mit Ausnahme von `{{HTMLElement("textarea")}}`-Elementen kann das `placeholder`-Attribut keine Zeilenumbrüche (LF) oder Wagenrückläufe (CR) enthalten. Wenn einer von beiden im Wert enthalten ist, wird der Placeholder-Text abgeschnitten.

## Zugänglichkeitsbedenken

Placeholder sollten nur verwendet werden, um ein Beispiel für die Art der Daten zu zeigen, die in ein Formular eingegeben werden sollen, niemals als Ersatz für ein `<label>`-Element; dies beeinträchtigt die Zugänglichkeit und Benutzererfahrung.

Der `<label>`-Text ist visuell und programmatisch mit dem entsprechenden Formularfeld verknüpft. Screenreader geben standardmäßig keinen Platzhalter-Inhalt aus, aber sie geben Label-Inhalte aus; es ist das Label, das Benutzern von unterstützender Technologie vermittelt, welche Daten in das Feld eingegeben werden sollen. Labels verbessern auch die Benutzererfahrung für Nutzer von Zeigegeräten: Wenn ein Benutzer auf ein `<label>` klickt, tippt oder drückt, wird der Fokus auf das zugehörige Formularfeld verschoben.

Placeholder können nicht als Ersatz für ein Label verwendet werden, selbst für diejenigen, die nicht auf unterstützende Technologien angewiesen sind. Placeholder-Text wird mit einem niedrigeren Farbkonstrast als der Standard-Text des Formularfeldes angezeigt. Dies ist beabsichtigt, da Benutzer nicht durch das, was Placeholder-Text vs. ausgefülltes Formularfeld ist, verwirrt werden sollen. Dieser Mangel an Kontrast kann jedoch Probleme für Nutzer mit Sehbehinderung verursachen. Außerdem verschwindet der Placeholder-Text aus Formularfeldern, wenn Benutzer mit der Texteingabe beginnen. Wenn der Placeholder-Text Anweisungen oder Beispiele enthält, die verschwinden, kann dies für Benutzer mit kognitiven Problemen verwirrend sein und das Formular unzugänglich machen, wenn der Placeholder das Label enthielt.

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
- CSS [`:placeholder-shown`](/de/docs/Web/CSS/:placeholder-shown) Pseudo-Klassen-Selektor
- CSS [`::placeholder`](/de/docs/Web/CSS/::placeholder) Pseudo-Element-Selektor
