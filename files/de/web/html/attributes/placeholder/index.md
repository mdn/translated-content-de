---
title: "HTML-Attribut: placeholder"
short-title: placeholder
slug: Web/HTML/Attributes/placeholder
l10n:
  sourceCommit: 067a40e4ed27ea6e1f3b8bbfec15cd9dc3078f4c
---

{{HTMLSidebar}}

Das **`placeholder`**-Attribut definiert den im Formular-Steuerelement angezeigten Text, wenn das Steuerelement keinen Wert hat. Der Platzhaltertext sollte dem Benutzer einen kurzen Hinweis auf den erwarteten Datentyp geben, der in das Steuerelement eingegeben werden soll.

Ein effektiver Platzhaltertext umfasst ein Wort oder einen kurzen Ausdruck, der auf den erwarteten Datentyp hinweist, jedoch keine Erklärung oder Eingabeaufforderung. Der Platzhalter darf nicht anstelle eines {{HTMLElement("label")}}-Elements verwendet werden. Da der Platzhalter nicht sichtbar ist, wenn der Wert des Formular-Steuerelements nicht null ist, beeinträchtigt die Verwendung von `placeholder` anstelle eines `<label>` die Benutzerfreundlichkeit und Zugänglichkeit.

Das `placeholder`-Attribut wird von den folgenden Eingabetypen unterstützt: `{{HTMLElement("input/text", "text")}}`, `{{HTMLElement("input/search", "search")}}`, `{{HTMLElement("input/url", "url")}}`, `{{HTMLElement("input/tel", "tel")}}`, `{{HTMLElement("input/email", "email")}}` und `{{HTMLElement("input/password", "password")}}`. Es wird auch vom `{{HTMLElement("textarea")}}`-Element unterstützt. Das [Beispiel](#beispiel) unten zeigt die Verwendung des `placeholder`-Attributs, um das erwartete Format eines Eingabefeldes zu erläutern.

> [!NOTE]
> Das `placeholder`-Attribut kann weder Zeilenumbrüche (LF) noch Wagenrückläufe (CR) enthalten. Wenn einer davon im Wert enthalten ist, wird der Platzhaltertext abgeschnitten.

## Barrierefreiheitsaspekte

Platzhalter sollten nur verwendet werden, um ein Beispiel für die Art von Daten zu zeigen, die in ein Formular eingegeben werden sollen, niemals als Ersatz für ein `<label>`-Element; dies beeinträchtigt die Barrierefreiheit und Benutzererfahrung.

Der `<label>`-Text ist optisch und programmatisch mit seinem entsprechenden Formular-Steuerelement verbunden. Screenreader geben den Inhalt von Platzhaltern standardmäßig nicht wieder, sie geben jedoch den Inhalt von Labels wieder; es ist das Label, das Benutzern von unterstützenden Technologien mitteilt, welche Daten in das Steuerelement eingegeben werden sollen. Labels verbessern auch die Benutzererfahrung für Benutzer von Zeigegeräten: Wenn ein Benutzer auf ein `<label>` klickt, es berührt oder tippt, wird der Fokus auf das dazugehörige Formular-Steuerelement verschoben.

Auf Platzhalter kann nicht als Ersatz für ein Label vertraut werden, selbst für diejenigen, die nicht auf unterstützende Technologie angewiesen sind. Der Platzhaltertext wird mit geringerem Farbkontrast als der Standardformulartext angezeigt. Dies ist beabsichtigt, da Sie nicht möchten, dass Benutzer verwirrt darüber sind, was Platzhaltertext ist und was ein ausgefülltes Formularfeld ist. Dieser Mangel an Kontrast kann jedoch Probleme für sehbehinderte Benutzer verursachen. Zusätzlich verschwindet der Platzhaltertext aus den Formularfeldern, wenn Benutzer Text eingeben. Wenn der Platzhaltertext Anweisungen oder Beispiele enthielt, die verschwinden, kann dies Benutzer mit kognitiven Problemen verwirren und das Formular unzugänglich machen, wenn der Platzhalter das Label enthielt.

## Beispiel

### HTML

```html
<form action="/de/docs/Web/HTML/Attributes/placeholder">
  <label for="name">Enter your name:</label>
  <input type="text" id="name" name="name" placeholder="e.g. Mike Shinoda" />
  <button type="submit">Submit</button>
</form>
```

### Ergebnis

{{EmbedLiveSample('Example', '150px', '150px')}}

## Spezifikationen

{{Specifications}}

## Browserkompatibilität

{{Compat}}

## Siehe auch

- HTML [`title`](/de/docs/Web/HTML/Global_attributes/title)
- CSS [`:placeholder-shown`](/de/docs/Web/CSS/:placeholder-shown) Pseudoklassen-Selektor
- CSS [`::placeholder`](/de/docs/Web/CSS/::placeholder) Pseudoelement-Selektor
