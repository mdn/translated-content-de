---
title: "HTML-Attribut: placeholder"
short-title: placeholder
slug: Web/HTML/Reference/Attributes/placeholder
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{HTMLSidebar}}

Das **`placeholder`**-Attribut definiert den Text, der in einem Formular-Steuerelement angezeigt wird, wenn das Steuerelement keinen Wert hat. Der Placeholder-Text sollte einen kurzen Hinweis darauf geben, welche Art von Daten in das Steuerelement eingegeben werden soll.

Effektiver Placeholder-Text besteht aus einem Wort oder einer kurzen Phrase, die auf den erwarteten Datentyp hinweist, nicht aus einer Erklärung oder einem Prompt. Der Placeholder darf nicht anstelle eines {{HTMLElement("label")}} verwendet werden. Da der Placeholder nicht sichtbar ist, wenn der Wert des Formular-Steuerelements nicht null ist, beeinträchtigt die Verwendung von `placeholder` anstelle eines `<label>` die Benutzerfreundlichkeit und Zugänglichkeit.

Das `placeholder`-Attribut wird von den folgenden Eingabetypen unterstützt: `{{HTMLElement("input/text", "text")}}`, `{{HTMLElement("input/search", "search")}}`, `{{HTMLElement("input/url", "url")}}`, `{{HTMLElement("input/tel", "tel")}}`, `{{HTMLElement("input/email", "email")}}` und `{{HTMLElement("input/password", "password")}}`. Es wird auch vom `{{HTMLElement("textarea")}}`-Element unterstützt. Das [Beispiel](#beispiel) unten zeigt die Verwendung des `placeholder`-Attributs zur Erklärung des erwarteten Formats eines Eingabefeldes.

> [!NOTE]
> Mit Ausnahme von `{{HTMLElement("textarea")}}`-Elementen kann das `placeholder`-Attribut keine Zeilenumbrüche (LF) oder Wagenrückläufe (CR) enthalten. Wenn einer dieser Werte enthalten ist, wird der Placeholder-Text abgeschnitten.

## Zugänglichkeitsbedenken

Placeholders sollten nur verwendet werden, um ein Beispiel für die Art der Daten zu zeigen, die in ein Formular eingegeben werden sollen; niemals als Ersatz für ein `<label>`-Element; dies beeinträchtigt die Zugänglichkeit und Benutzererfahrung.

Der `<label>`-Text ist visuell und programmatisch mit dem entsprechenden Formular-Steuerelement verknüpft. Screenreader geben standardmäßig keinen Placeholder-Inhalt wieder, sondern den Label-Inhalt; es ist das Label, das Benutzern von assistiven Technologien mitteilt, welche Daten in das Steuerelement eingegeben werden sollen. Labels verbessern auch die Benutzererfahrung für Benutzer von Zeigegeräten: Wenn ein Benutzer auf ein `<label>` klickt, es berührt oder antippt, wird der Fokus auf das zugehörige Formular-Steuerelement verlagert.

Placeholders können nicht als Ersatz für ein Label genutzt werden, auch nicht für diejenigen, die nicht auf assistive Technologien angewiesen sind. Placeholder-Text wird mit einem niedrigeren Farbkontrast als der Standardtext des Formular-Steuerelements angezeigt. Dies ist beabsichtigt, da Nutzer nicht durch den Unterschied zwischen Placeholder-Text und ausgefülltem Formularfeldtext verwirrt werden sollen. Allerdings kann dieser Kontrastmangel Probleme für sehbehinderte Nutzer verursachen. Zusätzlich verschwindet der Placeholder-Text aus den Formularfeldern, wenn Nutzer beginnen, Text einzugeben. Wenn der Placeholder-Text Anweisungen oder Beispiele enthält, die verschwinden, kann dies verwirrend für Nutzer mit kognitiven Problemen sein und das Formular unzugänglich machen, wenn der Placeholder das Label enthielt.

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
- CSS [`:placeholder-shown`](/de/docs/Web/CSS/:placeholder-shown) Pseudoklassenselektor
- CSS [`::placeholder`](/de/docs/Web/CSS/::placeholder) Pseudoelement-Selektor
