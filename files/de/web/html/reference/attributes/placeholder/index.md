---
title: HTML-Attribut `placeholder`
short-title: placeholder
slug: Web/HTML/Reference/Attributes/placeholder
l10n:
  sourceCommit: 46afd57950146568819d0bf98175a2ffdbe079d7
---

Das Attribut **`placeholder`** definiert den Text, der in einem Formularfeld angezeigt wird, wenn das Feld keinen Wert hat. Der Platzhaltertext sollte einen kurzen Hinweis darauf geben, welche Art von Daten in das Feld eingegeben werden soll.

Ein geeigneter Platzhaltertext besteht aus einem Wort oder einer kurzen Formulierung, die auf den erwarteten Datentyp hinweist, nicht aus einer Erklärung oder Aufforderung. Der Platzhalter darf nicht anstelle eines {{HTMLElement("label")}} verwendet werden. Da der Platzhalter nicht sichtbar ist, sobald das Formularfeld einen Wert hat, beeinträchtigt die Verwendung von `placeholder` anstelle eines `<label>` für eine Eingabeaufforderung die Benutzerfreundlichkeit und Barrierefreiheit.

Das Attribut `placeholder` wird von den folgenden input-Typen unterstützt: `{{HTMLElement("input/text", "text")}}`, `{{HTMLElement("input/search", "search")}}`, `{{HTMLElement("input/url", "url")}}`, `{{HTMLElement("input/tel", "tel")}}`, `{{HTMLElement("input/email", "email")}}` und `{{HTMLElement("input/password", "password")}}`. Es wird auch vom Element `{{HTMLElement("textarea")}}` unterstützt. Das folgende [Beispiel](#beispiel) zeigt, wie das Attribut `placeholder` verwendet wird, um das erwartete Format eines Eingabefelds zu verdeutlichen.

> [!NOTE]
> Außer in `{{HTMLElement("textarea")}}`-Elementen darf das Attribut `placeholder` keine Zeilenvorschübe (LF) oder Wagenrückläufe (CR) enthalten. Wenn eines davon im Wert enthalten ist, wird der Platzhaltertext abgeschnitten.

## Hinweise zur Barrierefreiheit

Platzhalter sollten nur verwendet werden, um ein Beispiel für die Art von Daten zu zeigen, die in ein Formular eingegeben werden sollen – niemals als Ersatz für ein `<label>`-Element. Letzteres beeinträchtigt die Barrierefreiheit und die Benutzerfreundlichkeit.

Der Text eines `<label>` ist visuell und programmatisch mit dem zugehörigen Formularfeld verknüpft. Screenreader lesen Platzhaltertext standardmäßig nicht vor, den Text eines Labels dagegen schon. Das Label informiert Benutzerinnen und Benutzer assistiver Technologien darüber, welche Daten in das Feld eingegeben werden sollen. Labels verbessern auch die Benutzerfreundlichkeit für Personen, die Zeigegeräte verwenden: Wenn jemand auf ein `<label>` klickt oder tippt, wird der Fokus auf das zugehörige Formularfeld gesetzt.

Platzhalter können auch für Personen, die keine assistiven Technologien verwenden, ein Label nicht zuverlässig ersetzen. Platzhaltertext wird mit geringerem Farbkontrast dargestellt als der normale Text eines Formularfelds. Dies ist beabsichtigt, damit Platzhaltertext nicht mit einem bereits ausgefüllten Feld verwechselt wird. Der geringe Kontrast kann jedoch für Menschen mit eingeschränktem Sehvermögen problematisch sein. Außerdem verschwindet der Platzhaltertext, sobald jemand beginnt, Text in das Formularfeld einzugeben. Wenn dadurch Anweisungen oder Beispiele verschwinden, kann das für Menschen mit kognitiven Beeinträchtigungen verwirrend sein. Enthielt der Platzhalter die Feldbeschriftung, kann das Formular dadurch unzugänglich werden.

## Beispiel

### HTML

```html
<label for="name">Enter your name:</label>
<input type="text" id="name" name="name" placeholder="e.g. Mike Shinoda" />
```

### Ergebnis

{{EmbedLiveSample('Example', '150px', '150px')}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- HTML [`title`](/de/docs/Web/HTML/Reference/Global_attributes/title)
- CSS-Pseudoklassenselektor {{cssxref(":placeholder-shown")}}
- CSS-Pseudoelementselektor {{cssxref("::placeholder")}}
