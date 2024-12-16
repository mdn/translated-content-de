---
title: "HTML-Attribut: placeholder"
short-title: placeholder
slug: Web/HTML/Attributes/placeholder
l10n:
  sourceCommit: 095b93e0251ff72900d7c8cd93733ccbf227eee2
---

{{HTMLSidebar}}

Das **`placeholder`**-Attribut definiert den Text, der in einem Formularelement angezeigt wird, wenn das Steuerelement keinen Wert hat. Der Platzhaltertext sollte dem Benutzer einen kurzen Hinweis auf die erwartete Art der einzugebenden Daten geben.

Effektiver Platzhaltertext besteht aus einem Wort oder einem kurzen Satz, der auf die erwartete Datenart hindeutet, nicht aus einer Erklärung oder einem Hinweis. Der Platzhalter darf nicht anstelle eines {{HTMLElement("label")}} verwendet werden. Da der Platzhalter nicht sichtbar ist, wenn der Wert des Formularelements nicht null ist, beeinträchtigt die Verwendung von `placeholder` anstelle eines `<label>` die Benutzerfreundlichkeit und Zugänglichkeit.

Das `placeholder`-Attribut wird von den folgenden Eingabetypen unterstützt: `{{HTMLElement("input/text", "text")}}`, `{{HTMLElement("input/search", "search")}}`, `{{HTMLElement("input/url", "url")}}`, `{{HTMLElement("input/tel", "tel")}}`, `{{HTMLElement("input/email", "email")}}` und `{{HTMLElement("input/password", "password")}}`. Es wird auch vom `{{HTMLElement("textarea")}}`-Element unterstützt. Das [Beispiel](#beispiel) unten zeigt die Verwendung des `placeholder`-Attributs zur Erklärung des erwarteten Formats eines Eingabefeldes.

> [!NOTE]
> Mit Ausnahme von `{{HTMLElement("textarea")}}`-Elementen kann das `placeholder`-Attribut keine Zeilenumbrüche (LF) oder Wagenrückläufe (CR) enthalten. Wenn einer von beiden im Wert enthalten ist, wird der Platzhaltertext abgeschnitten.

## Barrierefreiheit

Platzhalter sollten nur verwendet werden, um ein Beispiel für die Art der Daten anzuzeigen, die in ein Formular eingegeben werden sollen; niemals als Ersatz für ein `<label>`-Element; dies würde die Barrierefreiheit und Benutzererfahrung beeinträchtigen.

Der `<label>`-Text ist visuell und programmatisch mit seinem entsprechenden Formularelement verbunden. Screenreader geben standardmäßig die Inhalte von Platzhaltern nicht wieder, aber sie kündigen die Inhalte von Labels an; das Label informiert Benutzer von unterstützenden Technologien darüber, welche Daten in das Steuerelement eingegeben werden sollten. Labels verbessern auch die Benutzererfahrung für Benutzer von Zeigegeräten: Wenn ein Benutzer auf ein `<label>` klickt, tippt oder es berührt, wird der Fokus auf das zugehörige Formularelement des Labels verschoben.

Platzhalter können nicht als Ersatz für ein Label verwendet werden, auch nicht für diejenigen, die nicht auf unterstützende Technologien angewiesen sind. Platzhaltertext wird mit einem niedrigeren Farbkontrast als Standard-Formulartext angezeigt. Dies ist so gestaltet, da Sie nicht möchten, dass Benutzer verwirrt sind, was Platzhaltertext und was ein ausgefülltes Formularfeld ist. Dieses Fehlen von Kontrast kann jedoch Probleme für sehbehinderte Benutzer verursachen. Außerdem verschwindet der Platzhaltertext aus den Formularfeldern, wenn Benutzer anfangen, Text einzugeben. Wenn der Platzhaltertext instruktive Informationen oder Beispiele enthält, die verschwinden, kann dies für Benutzer mit kognitiven Problemen verwirrend sein und das Formular unzugänglich machen, wenn der Platzhalter das Label enthalten hat.

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
