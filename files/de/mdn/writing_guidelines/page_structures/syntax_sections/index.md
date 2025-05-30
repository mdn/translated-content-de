---
title: Syntax-Abschnitte
slug: MDN/Writing_guidelines/Page_structures/Syntax_sections
l10n:
  sourceCommit: 14acf1aa7885157debdf1b6111f4bd10c064ec60
---

Der Syntax-Abschnitt einer MDN-Referenzseite enthält ein Syntaxfeld, das die genaue Syntax eines Features definiert (z. B. welche Parameter akzeptiert werden können, welche optional sind?). Dieser Artikel erklärt, wie Syntaxfelder für Referenzartikel geschrieben werden.

## API-Referenz-Syntax

Syntax-Abschnitte für API-Referenzseiten werden manuell geschrieben und können je nach dokumentiertem Feature leicht variieren. Der Abschnitt beginnt mit einer Überschrift (typischerweise der zweiten Ebene `##`) namens "Syntax" und muss oben auf der Referenzseite enthalten sein (direkt unter dem einleitenden Material). Unter der Überschrift befindet sich ein Codeblock, der die genaue Syntax des Features zeigt, abgegrenzt durch ` ```[markup-language] ` Klasse.

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
> In diesem Fall wird die Markup-Sprache `js-nolint` verwendet, wobei `js` anzeigt, dass JavaScript-Syntaxhervorhebung verwendet werden soll.
> Für JavaScript-Syntaxabschnitte ist `-nolint` ebenfalls erforderlich, da der Syntaxabschnitt absichtlich nicht "ganz" JavaScript ist und wir nicht möchten, dass der Linter ihn "korrigiert" (Rückgabewerte und Semikolons am Zeilenende werden weggelassen).

### Allgemeine Stilregeln

Einige Regeln, die in Bezug auf Markup innerhalb des Syntaxblocks zu beachten sind:

- Verwenden Sie **kein** Semikolon `;`, um eine Zeile abzuschließen. Syntaxabschnitte sollen keinen ausführbaren Code zeigen. Es macht also keinen Sinn, Semikolons anzuzeigen.
- Verwenden Sie **kein** \<code> innerhalb des Syntaxblocks (oder in irgendeinem Codebeispielblock auf MDN). Es ist nicht nur im Allgemeinen nutzlos, sondern unser Markup möchte es nicht und wird nicht wie gewünscht gerendert, wenn Sie es einfügen.
- Geben Sie nur die Funktion und die Argumente an. Beispielsweise werden unten "korrigierte" Beispiele gezeigt

  ```js-nolint
  querySelector(selector)
  // responseStr = element.querySelector(selector)

  new IntersectionObserver(callback, options)
  // const observer = new IntersectionObserver(callback, options)
  ```

### Konstruktoren und Methoden

#### Syntaxblock

Beginnen Sie mit einem Syntaxblock, wie hier (von der [`IntersectionObserver()`](/de/docs/Web/API/IntersectionObserver/IntersectionObserver)-Konstruktorseite):

```js-nolint
new IntersectionObserver(callback, options)
```

oder hier (von [`Document.hasStorageAccess()`](/de/docs/Web/API/Document/hasStorageAccess)):

```js-nolint
hasStorageAccess()
```

Wenn die Methode statisch ist, beispielsweise [`URL.createObjectURL()`](/de/docs/Web/API/URL/createObjectURL_static), geben Sie auch ihre Schnittstelle an:

```js-nolint
URL.createObjectURL(object)
```

##### Mehrere Zeilen/Optionale Parameter

Methoden, die auf viele verschiedene Arten verwendet werden können, sollten in mehrere Zeilen aufgeschlüsselt werden, die alle möglichen Variationen anzeigen.

Jede Option sollte in einer eigenen Zeile stehen, wobei sowohl Kommentare als auch Zuordnungen pro Option weggelassen werden. Zum Beispiel hat {{jsxref("Array.prototype.slice()")}} zwei optionale Parameter und würde wie unten gezeigt dokumentiert:

```js-nolint
slice()
slice(begin)
slice(begin, end)
```

Ähnlich für [`CanvasRenderingContext2D.drawImage`](/de/docs/Web/API/CanvasRenderingContext2D/drawImage):

```js-nolint
drawImage(image, dx, dy)
drawImage(image, dx, dy, dWidth, dHeight)
drawImage(image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight)
```

Ebenso für den {{jsxref("Date")}}-Konstruktor:

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

Die formale Syntaxnotation (unter Verwendung von [BNF](https://en.wikipedia.org/wiki/Backus%E2%80%93Naur_form)) sollte nicht im Syntaxabschnitt verwendet werden — stattdessen verwenden Sie das beschriebene erweiterte Mehrzeilenformat [oben](#multiple_linesoptional_parameters).

Obwohl die formale Notation einen prägnanten Mechanismus zur Beschreibung komplexer Syntax bietet, ist sie vielen Entwicklern nicht vertraut und kann mit gültiger Syntax für bestimmte Programmiersprachen _konfliktieren_. Beispielsweise gibt `[ ]` sowohl einen "optionalen Parameter" als auch ein JavaScript-{{jsxref("Array")}} an. Sie können dies in der formalen Syntax für {{jsxref("Array.prototype.slice()")}} unten sehen:

```js-nolint
arr.slice([begin[, end]])
```

In speziellen Fällen, in denen dies als vorteilhaft angesehen wird, kann ein separater **Formale Syntax**-Abschnitt mittels der formalen Benachrichtigung deklariert werden.

##### Prägnante Syntaxblöcke

Das Ziel ist es, den Syntaxblock so klar und eindeutig wie möglich zu gestalten — fügen Sie keine irrelevante Syntax hinzu. Beispielsweise sehen Sie diese Syntaxform möglicherweise häufig zur Beschreibung von Versprechen auf der Website:

```js-nolint
caches.match(request, options).then((response) => {
  // Do something with the response
})
```

Aber diese Version ist viel prägnanter und enthält nicht den überflüssigen {{JSxRef("Promise.prototype.then()")}}-Methodenaufruf:

```js-nolint
match(request, options)
```

##### Callback-Syntaxblöcke

Für Methoden, die eine Callback-Funktion akzeptieren, zeigen Sie den Callback als Parameter, nicht als Pfeilfunktion oder `function`-Ausdruck.

```js-nolint
filter(callbackFn)
filter(callbackFn, thisArg)
```

Anschließend listen Sie im Abschnitt "Parameter" die Parameter der Callback-Funktion und das, was sie zurückgeben soll.

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

##### Syntax für eine beliebige Anzahl von Parametern

Für Methoden, die eine beliebige Anzahl von Parametern akzeptieren, wird der Syntaxblock wie folgt geschrieben:

```js-nolint
unshift()
unshift(element1)
unshift(element1, element2)
unshift(element1, element2, /* …, */ elementN)
```

Es ist vorzuziehen, mit der Nummerierung bei 1 zu beginnen, was es ermöglicht, Beschreibungen wie "`unshift` fügt N Elemente am Anfang des Arrays hinzu", sowie "das erste Element" (anstatt "das nullte Element") zu schreiben.

Beachten Sie, dass der Fall des Passierens von null Restparametern immer enthalten ist, auch wenn es wenig Sinn macht. Schreiben Sie dies dann im Abschnitt "Parameter":

```md
- `element1`, …, `elementN`
  - : The elements to add to the front of the array.
```

Fügen Sie `\{{optional_inline}}` hier hinzu, wenn es sinnvoll ist, null Restparameter zu übergeben.

Ein weiteres Beispiel mit einigen Positionsparametern vor dem Restparameter:

```js-nolint
splice(start)
splice(start, deleteCount)
splice(start, deleteCount, item1)
splice(start, deleteCount, item1, item2)
splice(start, deleteCount, item1, item2, /* …, */ itemN)
```

#### Parameterabschnitt

Als nächstes fügen Sie einen "Parameter"-Unterabschnitt ein, der erklärt, was jeder Parameter sein sollte, in einer Definitionsliste. Parameter, die Objekte mit mehreren Mitgliedern sind, können eine verschachtelte Definitionsliste enthalten, die wiederum eine Erklärung enthält, was jedes Mitglied sein sollte. Optionale Parameter sollten mit einem \\{{optional_inline}}-Makroaufruf neben ihrem Namen im Beschreibungsterm gekennzeichnet werden.

Der Name jedes Parameters in der Liste sollte in Markdown-Codezaunnotation enthalten sein `` ` ` ``.

> [!NOTE]
> Auch wenn das Feature keine Parameter annimmt, müssen Sie einen "Parameter"-Abschnitt einschließen, mit dem Inhalt "Keine".

#### Rückgabewertabschnitt

Als nächstes fügen Sie einen "Rückgabewert"-Unterabschnitt ein, der erklärt, was der Rückgabewert des Konstruktors oder der Methode ist. Siehe die obigen Links als Beispiele.

Wenn es keinen Rückgabewert gibt, verwenden Sie den folgenden Text:

Keiner (\\{{jsxref("undefined")}}).

#### Ausnahmenabschnitt

Zum Schluss fügen Sie einen "Ausnahmen"-Unterabschnitt ein, der erklärt, welche Ausnahmen auftreten können, wenn bei der Ausführung des Konstruktors/der Methode ein Problem auftritt. Dies könnte sein, weil ein Parametername falsch geschrieben wurde oder er einen Wert des falschen Datentyps erhalten hat, weil es ein Problem mit der Umgebung gibt, in der er aufgerufen wird (z. B. der Versuch, ein nur in einem sicheren Kontext verfügbares Feature in einem unsicheren Kontext auszuführen), oder aus einem anderen Grund.

Um festzustellen, welche Ausnahmen von einer Methode ausgelöst werden, ist oft eine gründliche Prüfung der Spezifikation erforderlich. Das Durchlesen der Spezifikation mit einer Schritt-für-Schritt-Erklärung, wie ein Feature funktioniert, liefert im Allgemeinen eine solide Liste der Ausnahmen und der Situationen, die sie hervorrufen.

Die Ausnahmebezeichnungen und Erklärungen sollten in einer Definitionsliste enthalten sein.

> [!NOTE]
> Wenn keine Ausnahmen für das Feature ausgelöst werden können, brauchen Sie keinen "Ausnahmen"-Abschnitt einzuschließen, aber Sie können ihn optional mit dem Inhalt "Keine" einfügen.

### Eigenschaften

#### Werteabschnitt

Eigenschaften enthalten keinen Syntaxabschnitt. Fügen Sie stattdessen einen "Wert"-Abschnitt hinzu, der eine Erklärung des Eigenschaftswerts enthält. Beschreiben Sie dessen Datentyp und welchen Zweck es erfüllt.

#### Ausnahmenabschnitt

Wenn der Zugriff auf die Eigenschaft eine Ausnahme auslösen kann, fügen Sie einen "Ausnahmen"-Unterabschnitt mit der Erklärung jeder Ausnahme hinzu; dies sollte wie oben für Methoden und Konstruktoren beschrieben eingerichtet werden.

## JavaScript-Referenz-Syntax

JavaScript-internen Objekt-Referenzseiten folgen den gleichen Grundregeln wie API-Referenzseiten; z. B. für Methoden und Eigenschaften. Es gibt einige Unterschiede, die Sie beobachten können:

- Für interne Objekte mit einem einzelnen Konstruktor wird die Syntax des Konstruktors häufig auf der Hauptseite des Objekts angezeigt. Siehe {{JSxRef("Date")}} als Beispiel. Sie werden bemerken, dass statische Methoden (die auf dem `Date`-Objekt selbst existieren) unter "Methoden" aufgelistet sind, während Instanzmethoden unter "Date.prototype-Methoden" aufgelistet sind.
- Außerdem werden Sie feststellen, dass Methoden, die keine Parameter/Ausnahmen haben, diese Unterabschnitte auf JavaScript-Referenzseiten häufiger überhaupt nicht enthalten. Siehe {{JSxRef("Date.getDate()")}} und {{JSxRef("Date.now()")}} als Beispiele.

## CSS-Referenz-Syntax

### Eigenschaften

CSS-Eigenschaftsreferenzseiten enthalten einen "Syntax"-Abschnitt, der früher oben auf der Seite zu finden war, aber zunehmend unter einem Abschnitt zu finden ist, der einen Codeblock mit typischer Verwendung des Features plus einem Live-Beispiel zur Veranschaulichung dessen, was das Feature tut, enthält (siehe {{CSSxRef("animation")}} als Beispiel).

> [!NOTE]
> Wir tun dies, weil die formale CSS-Syntax komplex ist, von vielen MDN-Lesern nicht verwendet wird und für Anfänger abschreckend sein kann. Echte Syntax und Beispiele sind für die Mehrheit der Menschen nützlicher.

Im Syntax-Abschnitt finden Sie folgenden Inhalt.

#### Optionaler Erklärungstext

Einige CSS-Eigenschaften sind selbsterklärend und benötigen nicht wirklich eine zusätzliche Erklärung (z. B. {{CSSxRef("color")}}). Einige sind andererseits komplexer und benötigen eine Erklärung zur Syntaxordnung, einschließlich mehrerer Werte usw. (siehe {{CSSxRef("animation")}}). In solchen Fällen können Sie eine zusätzliche Erklärung vor den Unterabschnitten einfügen.

#### Werteabschnitt

Als nächstes sollten Sie einen "Werte"-Abschnitt einschließen — dieser enthält eine Definitionsliste, die die CSS-Werttypen erklärt, aus denen sich der Wert der Eigenschaft zusammensetzt. Jeder Werttyp sollte in spitzen Klammern gesetzt und, falls eine Seite dafür existiert, mit der MDN-Referenzseite verlinkt werden. Als Beispiel siehe die {{CSSxRef("border")}}-Eigenschaftsreferenz — diese referenziert drei Werttypen, von denen nur einer verlinkt ist ({{CSSxRef("&lt;color&gt;")}}).

#### Formale Syntax

Der letzte Abschnitt, "Formale Syntax", wird automatisch mit dem `\{{CSSSyntax}}`-Makro generiert. Dieses Makro ruft Daten aus den CSS-Spezifikationen ab, indem es das [@webref/css npm package](https://www.npmjs.com/package/@webref/css) verwendet. Um die formale Syntax in Ihr Dokument einzufügen:

1. Fügen Sie eine Überschrift hinzu wie: `## Formale Syntax`.
2. Platzieren Sie das `\{{CSSSyntax}}`-Makro direkt unter dieser Überschrift.

### Selektoren

Der "Syntax"-Abschnitt von Selektor-Referenzseiten ist viel einfacher als der von Eigenschaftsseiten. Es enthält einen Block, der mit dem "Syntax Box"-Stil gestaltet ist und die grundlegende Syntax des Selektors zeigt, sei es nur ein einfaches Schlüsselwort (z. B. {{CSSxRef(":hover")}}) oder ein komplexerer Funktionswert, der einen Parameter übernimmt (z. B. {{CSSxRef(":not", ":not()")}}). Manchmal wird der Parameter in einem weiteren Eintrag innerhalb des Syntaxblocks erklärt (siehe {{CSSxRef(":nth-last-of-type", ":nth-last-of-type()")}} als Beispiel).

Dieser Block wird automatisch aus den im [MDN data repo](https://github.com/mdn/data) enthaltenen Daten im CSS-Verzeichnis generiert. Sie müssen nur einen `CSSSyntax`-Makroaufruf unter dem Titel einfügen, und es wird sich um den Rest kümmern.

Die einzige Komplikation besteht darin, sicherzustellen, dass die benötigten Daten vorhanden sind. Die Datei [selectors.json](https://github.com/mdn/data/blob/main/css/selectors.json) muss einen Eintrag für den dokumentierten Selektor enthalten.

Sie müssen dies tun, indem Sie das [MDN data repo](https://github.com/mdn/data) forken, Ihren Fork lokal klonen, die Änderungen in einem neuen Branch vornehmen und dann eine Pull-Anfrage gegen das Upstream-Repo einreichen. Weitere Details zur Verwendung von Git finden Sie [hier](/de/docs/MDN/Writing_guidelines/Page_structures/Compatibility_tables).

## HTML-Referenz-Syntax

HTML-Referenzseiten haben keine "Syntax"-Abschnitte — die Syntax ist immer nur der Elementname in spitzen Klammern, daher ist es nicht erforderlich. Das Wichtigste, was Sie über HTML-Elemente wissen müssen, ist, welche Attribute sie annehmen und welche Werte diese haben können, und dies wird in einem separaten "Attribute"-Abschnitt behandelt. Siehe {{htmlelement("ol")}} und {{htmlelement("video")}} als Beispiele.

## HTTP-Referenz-Syntax

HTTP-Referenz-Syntax wird vollständig manuell erstellt und unterscheidet sich je nachdem, welche Art von HTTP-Feature dokumentiert wird.

### HTTP Header/Content-Security-Policy

Die HTTP-Header-Syntax (und die Content-Security-Policy) wird auf der Seite in zwei separaten Abschnitten dokumentiert — "Syntax" und "Direktiven".

#### Syntaxabschnitt

Der "Syntax"-Abschnitt zeigt, wie die Syntax eines Headers aussieht, mittels eines Syntaxblocks, der mit dem "Syntax Box"-Stil gestaltet ist, einschließlich formaler Syntax, um genau zu zeigen, welche Direktiven im Wert enthalten sein können, in welcher Reihenfolge usw. Beispielsweise sieht der Syntaxblock des {{HTTPHeader("If-None-Match")}}-Headers so aus:

```http
If-None-Match: <etag_value>
If-None-Match: <etag_value>, <etag_value>, …
If-None-Match: *
```

Einige Header haben separate Syntax für Anforderungsrichtlinien, Antwortrichtlinien und Erweiterungen. Falls verfügbar, müssen diese in separaten Syntaxblöcken unter jeweils eigenen Unterabschnitten enthalten sein. Siehe {{HTTPHeader("Cache-Control")}} als Beispiel.

#### Direktivenabschnitt

Der "Direktiven"-Abschnitt enthält eine Definitionsliste mit den Namen und Beschreibungen aller Richtlinien, die innerhalb der Syntax erscheinen können.

### HTTP-Anforderungsmethoden

Die Syntax von Anforderungsmethoden ist sehr einfach und enthält nur einen Syntaxblock, der mit dem "Syntax Box"-Stil gestaltet ist und zeigt, wie die Methodensyntax strukturiert ist. Die Syntax für die [GET-Methode](/de/docs/Web/HTTP/Reference/Methods/GET) sieht so aus:

```http
GET /index.html
```

### HTTP-Antwortstatuscodes

Auch die Syntax für HTTP-Antwortstatuscodes ist sehr einfach — ein Syntaxblock, der den Code und den Namen enthält. Zum Beispiel:

```http
404 Not Found
```

## SVG-Referenz-Syntax

### SVG-Elemente

SVG-Elemente-Syntaxabschnitte existieren nicht — genau wie HTML-Elemente-Syntaxabschnitte. Jede SVG-Element-Referenzseite enthält einfach eine Liste der Attribute, die für dieses Element gelten können. Siehe {{SVGElement("feTile")}} als Beispiel.

### SVG-Attribute

SVG-Attribut-Referenzseiten enthalten ebenfalls keine Syntaxabschnitte.

## Siehe auch

- [Markdown auf MDN](/de/docs/MDN/Writing_guidelines/Howto/Markdown_in_MDN#example_code_blocks)
