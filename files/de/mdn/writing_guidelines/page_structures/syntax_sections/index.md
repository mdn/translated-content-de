---
title: Syntax-Abschnitte
slug: MDN/Writing_guidelines/Page_structures/Syntax_sections
l10n:
  sourceCommit: 593fbf22e45cc0bf399aae1cf921af86885dd364
---

Der Syntax-Abschnitt einer MDN-Referenzseite enthält eine Syntaxbox, die die genaue Syntax eines Features definiert (z. B. welche Parameter akzeptiert werden können, welche optional sind). Dieser Artikel erklärt, wie Syntaxboxen für Referenzartikel erstellt werden.

## API-Referenzsyntax

Syntax-Abschnitte für API-Referenzseiten werden manuell erstellt und können je nach dokumentiertem Feature leicht variieren. Der Abschnitt beginnt mit einer Überschrift (typischerweise eine zweite Ebene `##`) mit dem Titel "Syntax" und muss oben auf der Referenzseite enthalten sein (direkt unter dem Einführungsmaterial). Unter der Überschrift befindet sich ein Codeblock, der die exakte Syntax des Features zeigt, gekennzeichnet durch Codebegrenzungen ` ```[markup-language] `.

Das folgende Beispiel zeigt den Markdown-Code für einen typischen Syntax-Abschnitt (für eine JavaScript-Funktion):

````md
## Syntax

```js-nolint
slice()
slice(start)
slice(start, end)
```
````

> [!NOTE]
> Die verwendete Markup-Sprache in diesem Fall ist `js-nolint`, wobei `js` anzeigt, dass JavaScript-Syntaxhervorhebung verwendet werden soll. 
> Für JavaScript-Syntaxabschnitte ist `-nolint` ebenfalls erforderlich, da der Syntaxabschnitt absichtlich nicht "ganz" JavaScript ist und der Linter dies nicht "korrigieren" soll (Rückgabewerte und Semikolons am Zeilenende werden weggelassen).

### Allgemeine Stilregeln

Einige Regeln, die im Hinblick auf die Auszeichnung innerhalb des Syntaxblocks zu beachten sind:

- Beenden Sie eine Zeile **nicht** mit einem Semikolon `;`. Syntaxabschnitte dienen nicht der Darstellung ausführbaren Codes. Daher ist es nicht sinnvoll, Semikolons anzuzeigen.
- Verwenden Sie **nicht** `<code>` innerhalb des Syntaxblocks (oder eines beliebigen Codebeispielblocks auf MDN). Nicht nur ist es generell nutzlos, unsere Markup-Engine will es nicht und es wird nicht wie gewünscht gerendert, wenn es enthalten ist.
- Geben Sie nur die Funktion und Argumente an. Das Beispiel zeigt "korrigierte" Versionen unten:

  ```js-nolint
  querySelector(selector)
  // responseStr = element.querySelector(selector)

  new IntersectionObserver(callback, options)
  // const observer = new IntersectionObserver(callback, options)
  ```

### Konstruktoren und Methoden

#### Syntaxblock

Beginnen Sie mit einem Syntaxblock, wie diesem (vom [`IntersectionObserver()`](/de/docs/Web/API/IntersectionObserver/IntersectionObserver)-Konstruktorsetite):

```js-nolint
new IntersectionObserver(callback, options)
```

oder diesem (von [`Document.hasStorageAccess()`](/de/docs/Web/API/Document/hasStorageAccess)):

```js-nolint
hasStorageAccess()
```

Wenn die Methode statisch ist, wie z. B. [`URL.createObjectURL()`](/de/docs/Web/API/URL/createObjectURL_static), fügen Sie auch die zugehörige Schnittstelle hinzu:

```js-nolint
URL.createObjectURL(object)
```

##### Mehrere Zeilen / Optionale Parameter

Methoden, die auf verschiedene Arten verwendet werden können, sollten auf mehrere Zeilen erweitert werden, um alle möglichen Variationen zu zeigen.

Jede Option sollte in einer eigenen Zeile beschrieben werden, ohne Kommentare oder Zuweisungen. Zum Beispiel hat {{jsxref("Array.prototype.slice()")}} zwei optionale Parameter. Dies würde wie folgt dokumentiert werden:

```js-nolint
slice()
slice(begin)
slice(begin, end)
```

Ebenso bei [`CanvasRenderingContext2D.drawImage`](/de/docs/Web/API/CanvasRenderingContext2D/drawImage):

```js-nolint
drawImage(image, dx, dy)
drawImage(image, dx, dy, dWidth, dHeight)
drawImage(image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight)
```

Ebenso für den Konstruktor {{jsxref("Date")}}:

```js-nolint
new Date()
new Date(value)
new Date(dateString)
new Date(year, monthIndex)
new Date(year, monthIndex, day)
new Date(year, monthIndex, day, hours)
new Date(year, monthIndex, day, hours, minutes)
new Date(year, monthIndex, day, hours, minutes, seconds, milliseconds)
```

##### Formale Syntax

Formale Syntaxnotation (unter Verwendung von [BNF](https://de.wikipedia.org/wiki/Backus-Naur-Form)) sollte im Syntaxabschnitt nicht verwendet werden — stattdessen verwenden Sie das erweiterte mehrzeilige Format [oben beschrieben](#multiple_linesoptional_parameters).

Während die formale Notation eine prägnante Methode bietet, um komplexe Syntax zu beschreiben, ist sie vielen Entwicklern nicht vertraut und kann mit gültiger Syntax bestimmter Programmiersprachen in Konflikt stehen. Zum Beispiel bedeutet `[ ]` sowohl "optional Parameter" als auch ein JavaScript {{jsxref("Array")}}. Sie können dies in der formalen Syntax für {{jsxref("Array.prototype.slice()")}} unten sehen:

```js-nolint
arr.slice([begin[, end]])
```

In spezifischen Fällen, in denen es als vorteilhaft angesehen wird, kann eine separate **Formale Syntax**-Sektion mit der formalen Beschreibung erstellt werden.

##### Konzentrierte Syntaxblöcke

Das Ziel ist, den Syntaxblock so klar und eindeutig wie möglich zu gestalten — keine irrelevante Syntax einschließen. Zum Beispiel finden Sie möglicherweise diese Syntaxform, um Promises auf vielen Seiten der Website zu beschreiben:

```js-nolint
caches.match(request, options).then(function (response) {
  // Do something with the response
})
```

Aber diese Version ist viel prägnanter und enthält nicht die überflüssige {{JSxRef("Promise.prototype.then()")}}-Methodenaufrufe:

```js-nolint
match(request, options)
```

##### Callback-Syntaxblöcke

Für Methoden, die eine Callback-Funktion akzeptieren, wird der Callback als Parameter gezeigt, nicht als Pfeilfunktion oder `function`-Ausdruck.

```js-nolint
filter(callbackFn)
filter(callbackFn, thisArg)
```

Anschließend führen Sie in der "Parameter"-Sektion die Parameter der Callback-Funktion auf und schreiben, was zurückgegeben werden sollte.

```md
- `callbackFn`
  - : A function to execute for each element in the array. It should return a [truthy](/en-US/docs/Glossary/Truthy) value to keep the element in the resulting array, and a [falsy](/en-US/docs/Glossary/Falsy) value otherwise. The function is called with the following arguments:
    - `element`
      - : The current element being processed in the array.
    - `index`
      - : The index of the current element being processed in the array.
    - `array`
      - : The array `filter()` was called upon.
```

##### Syntax für eine willkürliche Anzahl an Parametern

Für Methoden, die eine beliebige Anzahl von Parametern akzeptieren, wird der Syntaxblock wie folgt geschrieben:

```js-nolint
unshift()
unshift(element1)
unshift(element1, element2)
unshift(element1, element2, /* …, */ elementN)
```

Bevorzugen Sie die Nummerierung ab 1, damit Beschreibungen verfasst werden können, wie "`unshift` fügt N Elemente an den Anfang des Arrays hinzu", sowie "das erste Element" (anstatt "das nullte Element").

Beachten Sie, dass der Fall des Übergebens von null Restparametern immer enthalten ist, auch wenn er wenig sinnvoll erscheint. Schreiben Sie dann in den "Parameter"-Abschnitt Folgendes:

```md
- `element1`, …, `elementN`
  - : The elements to add to the front of the array.
```

Fügen Sie `\{{optional_inline}}` hinzu, wenn das Übergeben von null Restparametern sinnvoll ist.

Ein weiteres Beispiel mit einigen festen Positionierungsparametern vor dem Restparameter:

```js-nolint
splice(start)
splice(start, deleteCount)
splice(start, deleteCount, item1)
splice(start, deleteCount, item1, item2)
splice(start, deleteCount, item1, item2, /* …, */ itemN)
```

#### Parameter-Sektion

Fügen Sie anschließend eine Sektion "Parameter" hinzu, die erklärt, was jeder Parameter sein sollte, in einer Definitionsliste. Parameter, die Objekte mit mehreren Mitgliedern sind, können eine verschachtelte Definitionsliste enthalten, die wiederum erklärt, was jedes Mitglied sein muss. Optionale Parameter sollten mit einem `\{{optional_inline}}`-Makroaufruf neben ihrem Namen im Definitionsterm gekennzeichnet werden.

Der Name jedes Parameters in der Liste sollte in Markdown-Codebegrenzung `` ` ` `` eingeschlossen werden.

> [!NOTE]
> Auch wenn das Feature keine Parameter akzeptiert, muss eine Sektion "Parameter" enthalten sein, mit dem Inhalt "Keine."

#### Rückgabewert-Sektion

Fügen Sie als Nächstes eine "Rückgabewert"-Sektion hinzu, die erklärt, was der Rückgabewert des Konstruktors oder der Methode ist. Siehe dazu die oben verlinkten Beispiele.

Wenn kein Rückgabewert vorhanden ist, verwenden Sie den folgenden Text:

Keine (\{{jsxref("undefined")}}).

#### Ausnahme-Sektion

Schließlich fügen Sie eine "Ausnahmen"-Sektion hinzu, die erklärt, welche Ausnahmen ausgelöst werden können, wenn ein Problem beim Aufruf des Konstruktors / der Methode auftritt. Dies könnte daran liegen, dass ein Parametername falsch geschrieben wurde oder ein Parameter den falschen Datentyp hat, weil es ein Problem mit der Umgebung gibt (z. B. ein Feature, das nur in einem sicheren Kontext funktioniert, in einem unsicheren Kontext), oder aus einem anderen Grund.

Um herauszufinden, welche Ausnahmen eine Methode auslöst, ist ein gründliches Studium der Spezifikation erforderlich. Das Durchgehen der schrittweisen Erklärung in der Spezifikation, wie ein Feature funktioniert, bietet in der Regel eine solide Liste der Ausnahmen und der Situationen, die sie auslösen.

Die Namen und Erklärungen der Ausnahmen sollten in einer Definitionsliste enthalten sein.

> [!NOTE]
> Wenn auf dem Feature keine Ausnahmen ausgelöst werden können, müssen Sie keine "Ausnahmen"-Sektion einfügen, können dies aber optional tun mit dem Inhalt "Keine".

### Eigenschaften

#### Wert-Sektion

Eigenschaften enthalten keinen Syntax-Abschnitt. Stattdessen fügen Sie eine "Wert"-Sektion hinzu, die eine Erklärung des Wertes der Eigenschaft enthält. Beschreiben Sie den Datentyp und den Zweck der Eigenschaft.

#### Ausnahmen-Sektion

Wenn der Zugriff auf die Eigenschaft Ausnahmen auslösen kann, fügen Sie eine Sektion "Ausnahmen" hinzu, die jede Ausnahme erklärt. Diese sollte genauso wie oben für Methoden und Konstruktoren beschrieben eingerichtet sein.

## JavaScript-Referenzsyntax

JavaScript-Referenzseiten für eingebaute Objekte folgen denselben grundlegenden Regeln wie API-Referenzseiten, z. B. für Methoden und Eigenschaften. Es gibt einige Unterschiede:

- Für eingebaute Objekte mit einem einzelnen Konstruktor wird die Konstruktorsyntax oft direkt auf der Objekt-Startseite beschrieben. Siehe {{JSxRef("Date")}} als Beispiel. Sie werden bemerken, dass statische Methoden (d. h. solche, die auf dem `Date`-Objekt selbst existieren) unter "Methoden" aufgelistet sind, während Instanzmethoden unter "Date.prototype-Methoden" aufgelistet sind.
- Sie werden auch feststellen, dass Methoden ohne Parameter/Exceptions auf JavaScript-Referenzseiten eher keine entsprechenden Unterabschnitte enthalten. Siehe {{JSxRef("Date.getDate()")}} und {{JSxRef("Date.now()")}} als Beispiele.

## CSS-Referenzsyntax

### Eigenschaften

CSS-Eigenschaftsreferenzseiten enthalten einen "Syntax"-Abschnitt, der früher oben auf der Seite zu finden war, zunehmend jedoch unter einem Abschnitt platziert wird, der einen Codeblock zeigt, der die typische Verwendung des Features veranschaulicht, sowie ein Live-Beispiel, um zu zeigen, was das Feature bewirkt (siehe {{CSSxRef("animation")}} als Beispiel).

> [!NOTE]
> Wir tun dies, weil CSS-Formalsyntax komplex, von vielen MDN-Lesern nicht genutzt und für Anfänger abschreckend ist. Reale Syntax und Beispiele sind für die meisten Menschen nützlicher.

Im Syntax-Abschnitt finden Sie die folgenden Inhalte.

#### Optionale Erklärung

Einige CSS-Eigenschaften erklären sich von selbst und benötigen keine zusätzliche Erklärung (z. B. {{CSSxRef("color")}}). Andere hingegen sind komplexer und benötigen eine Erklärung der Syntaxreihenfolge, einschließlich Mehrfachwerte usw. (siehe {{CSSxRef("animation")}}). In solchen Fällen können Sie vor den übrigen Unterabschnitten eine zusätzliche Erklärung einfügen.

#### Werte-Sektion

Als Nächstes sollten Sie eine "Werte"-Sektion einfügen — diese enthält eine Definitionsliste, die die CSS-Wertetypen beschreibt, die den Wert der Eigenschaft bilden. Jeder Wertetyp sollte in spitzen Klammern eingeschlossen sein und mit der MDN-Referenzseite verlinkt werden, die diesen Wertetyp behandelt, falls eine Seite existiert. Zum Beispiel siehe {{CSSxRef("border")}} — diese referenziert drei Wertetypen, von denen nur einer verlinkt ist ({{CSSxRef("&lt;color&gt;")}}).

#### Formale Syntax

Der letzte Abschnitt, "Formale Syntax", wird automatisch mit dem `\{{CSSSyntax}}`-Makro erstellt. Dieses Makro ruft Daten aus den CSS-Spezifikationen mithilfe des [@webref/css npm-Pakets](https://www.npmjs.com/package/@webref/css) ab. Um die formale Syntax in Ihr Dokument aufzunehmen:

1. Fügen Sie eine Überschrift wie: `## Formale Syntax` hinzu.
2. Platzieren Sie das `\{{CSSSyntax}}`-Makro direkt unter dieser Überschrift.

### Selektoren

Der Syntax-Abschnitt von Selektor-Referenzseiten ist viel einfacher als der von Eigenschaftsseiten. Er enthält einen Block, der mit dem "Syntax Box"-Stil formatiert ist und die grundlegende Syntax des Selektors zeigt, sei es ein einfaches Schlüsselwort (z. B. {{CSSxRef(":hover")}}) oder ein komplexerer Funktionswert mit einem Parameter (z. B. {{CSSxRef(":not", ":not()")}}). Manchmal wird der Parameter in einem weiteren Eintrag innerhalb des Syntaxblocks erklärt (siehe {{CSSxRef(":nth-last-of-type", ":nth-last-of-type()")}} als Beispiel).

Dieser Block wird automatisch aus den Daten generiert, die im [MDN-Daten-Repo](https://github.com/mdn/data) im CSS-Verzeichnis enthalten sind. Sie müssen lediglich den `CSSSyntax`-Makroaufruf unter dem Titel einfügen, der Rest wird automatisch erledigt.

Die einzige Schwierigkeit besteht darin, sicherzustellen, dass die benötigten Daten vorhanden sind. Die Datei [selectors.json](https://github.com/mdn/data/blob/main/css/selectors.json) muss einen Eintrag für den zu dokumentierenden Selektor enthalten.

Dazu müssen Sie das [MDN-Daten-Repo](https://github.com/mdn/data) forken, Ihren Fork lokal klonen, die Änderungen in einem neuen Branch vornehmen und dann einen Pull-Request gegen das Upstream-Repo einreichen. Sie können [weitere Details zur Verwendung von Git hier finden](/de/docs/MDN/Writing_guidelines/Page_structures/Compatibility_tables).

## HTML-Referenzsyntax

HTML-Referenzseiten enthalten keine "Syntax"-Abschnitte — die Syntax besteht immer nur aus dem Elementnamen in spitzen Klammern, sodass ein eigener Abschnitt nicht erforderlich ist. Das Wichtigste, was Sie über HTML-Elemente wissen müssen, ist, welche Attribute sie besitzen und welche Werte diese Attribute haben können, und dies wird in einem separaten Abschnitt "Attribute" behandelt. Siehe {{htmlelement("ol")}} und {{htmlelement("video")}} als Beispiele.

## HTTP-Referenzsyntax

Die Syntax im HTTP-Bereich wird vollständig manuell erstellt und unterscheidet sich je nach dokumentiertem HTTP-Feature.

### HTTP-Header / Content-Security-Policy

Die Syntax von HTTP-Headern (und Content-Security-Policy) wird in zwei separaten Abschnitten beschrieben — "Syntax" und "Direktiven".

#### Syntax-Sektion

Der Abschnitt "Syntax" zeigt, wie die Syntax eines Headers aussieht, indem ein Syntaxblock mit dem "Syntax Box"-Stil verwendet wird, der formale Syntax einschließt, um zu zeigen, welche Direktiven im Wert enthalten sein können, in welcher Reihenfolge usw. Zum Beispiel sieht der Syntaxblock des {{HTTPHeader("If-None-Match")}} Headers wie folgt aus:

```http
If-None-Match: <etag_value>
If-None-Match: <etag_value>, <etag_value>, …
If-None-Match: *
```

Einige Header haben separate Syntax für Anforderungsdirektiven, Antwortdirektiven und Erweiterungen. Falls verfügbar, müssen diese in separaten Syntaxblöcken enthalten sein, die jeweils unter einer eigenen Unterüberschrift stehen. Siehe {{HTTPHeader("Cache-Control")}} als Beispiel.

#### Direktiven-Sektion

Der Abschnitt "Direktiven" enthält eine Definitionsliste mit den Namen und Beschreibungen aller Direktiven, die in der Syntax auftauchen können.

### HTTP-Anfragemethoden

Die Syntax von HTTP-Anfragemethoden ist wirklich einfach und enthält nur einen Syntaxblock im "Syntax Box"-Stil, der zeigt, wie die Methodensyntax aufgebaut ist. Die Syntax für die [GET-Methode](/de/docs/Web/HTTP/Methods/GET) sieht so aus:

```http
GET /index.html
```

### HTTP-Antwortstatuscodes

Auch die Syntax von HTTP-Antwortstatuscodes ist sehr einfach — ein Syntaxblock, der den Code und Namen enthält. Zum Beispiel:

```http
404 Not Found
```

## SVG-Referenzsyntax

### SVG-Elemente

Syntax-Abschnitte für SVG-Elemente existieren nicht — ebenso wie bei HTML-Elementen. Jede SVG-Element-Referenzseite listet lediglich die Attribute auf, die auf das Element angewendet werden können. Siehe {{SVGElement("feTile")}} als Beispiel.

### SVG-Attribute

Auch SVG-Attribut-Referenzseiten enthalten keine Syntaxabschnitte.

## Siehe auch

- [Markdown auf MDN](/de/docs/MDN/Writing_guidelines/Howto/Markdown_in_MDN#example_code_blocks)
