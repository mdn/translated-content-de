---
title: "HTML-Attribut: placeholder"
short-title: placeholder
slug: Web/HTML/Reference/Attributes/placeholder
l10n:
  sourceCommit: 4cb9d89a204a9532370693b982e8a3b274a874b1
---

Das **`placeholder`**-Attribut definiert den Text, der in einem Formularfeld angezeigt wird, wenn das Feld keinen Wert hat. Der Platzhaltertext sollte dem Benutzer einen kurzen Hinweis auf den erwarteten Datentyp geben, der in das Formularfeld eingegeben werden soll.

Ein effektiver Platzhaltertext enthält ein Wort oder eine kurze Phrase, die auf den erwarteten Datentyp hinweist, nicht jedoch eine Erklärung oder Aufforderung. Der Platzhalter darf nicht anstelle eines {{HTMLElement("label")}} verwendet werden. Da der Platzhalter nicht sichtbar ist, wenn der Wert des Formularfeldes nicht null ist, beeinträchtigt die Verwendung von `placeholder` anstelle eines `<label>` die Benutzerfreundlichkeit und Zugänglichkeit.

Das `placeholder`-Attribut wird von den folgenden Eingabetypen unterstützt: `{{HTMLElement("input/text", "text")}}`, `{{HTMLElement("input/search", "search")}}`, `{{HTMLElement("input/url", "url")}}`, `{{HTMLElement("input/tel", "tel")}}`, `{{HTMLElement("input/email", "email")}}` und `{{HTMLElement("input/password", "password")}}`. Es wird auch vom `{{HTMLElement("textarea")}}`-Element unterstützt. Das [Beispiel](#beispiel) unten zeigt das `placeholder`-Attribut in der Anwendung, um das erwartete Format eines Eingabefelds zu erläutern.

> [!NOTE]
> Mit Ausnahme von `{{HTMLElement("textarea")}}`-Elementen kann das `placeholder`-Attribut keine Umbrüche (LF) oder Wagenrückläufe (CR) enthalten. Wenn eines davon im Wert enthalten ist, wird der Platzhaltertext abgeschnitten.

## Zugänglichkeitsbedenken

Platzhalter sollten nur verwendet werden, um ein Beispiel für den Datentyp zu zeigen, der in ein Formular eingegeben werden soll; niemals als Ersatz für ein `<label>`-Element, da dies die Zugänglichkeit und Benutzererfahrung beeinträchtigt.

Der `<label>`-Text ist visuell und programmatisch mit dem entsprechenden Formularfeld verbunden. Bildschirmlesegeräte geben standardmäßig keinen Platzhalterinhalt wieder, aber sie geben den Label-Inhalt wieder; es ist das Label, das Benutzer von unterstützender Technologie darüber informiert, welche Daten in das Feld eingegeben werden sollen. Labels verbessern auch die Benutzererfahrung für Benutzer von Zeigegeräten: Wenn ein Benutzer auf ein `<label>` klickt, tippt oder es berührt, wird der Fokus auf das zugehörige Formularfeld des Labels verschoben.

Platzhalter können nicht als Ersatz für ein Label verwendet werden, auch nicht für diejenigen, die nicht auf unterstützende Technologie angewiesen sind. Platzhaltertext wird mit geringerem Farbkontrast als der Standardtext des Formularfeldes angezeigt. Dies ist so konzipiert, da Sie nicht möchten, dass Benutzer verwirrt werden, was Platzhaltertext ist und was ein ausgefülltes Formularfeld ist. Allerdings kann dieser Mangel an Kontrast Probleme für sehbehinderte Benutzer verursachen. Außerdem verschwindet der Platzhaltertext aus Formularfeldern, wenn Benutzer mit der Eingabe beginnen. Wenn der Platzhaltertext Anleitungen oder Beispiele enthält, die verschwinden, kann dies für Benutzer mit kognitiven Beeinträchtigungen verwirrend sein und das Formular unzugänglich machen, wenn der Platzhalter das Label enthielt.

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
- CSS [`:placeholder-shown`](/de/docs/Web/CSS/Reference/Selectors/:placeholder-shown) Pseudoklassen-Selektor
- CSS [`::placeholder`](/de/docs/Web/CSS/Reference/Selectors/::placeholder) Pseudoelement-Selektor
