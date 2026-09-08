---
title: Syntaxabschnitte
slug: MDN/Writing_guidelines/Page_structures/Syntax_sections
l10n:
  sourceCommit: de1ffe9d19ce381ed182255fcc8fe0517029cfa2
---

Der Syntaxabschnitt einer MDN-Referenzseite enthält eine Syntaxbox, die die genaue Syntax eines Features definiert (z. B. welche Parameter kann es akzeptieren, welche davon sind optional?). Dieser Artikel erklärt, wie Syntaxboxen für Referenzartikel geschrieben werden.

## API-Referenzsyntax

Syntaxabschnitte für API-Referenzseiten werden manuell geschrieben und können je nach dokumentiertem Feature leicht unterschiedlich sein.
Der Abschnitt beginnt mit einer Überschrift (typischerweise einer Überschrift der Ebene zwei, `##`) namens „Syntax“ und muss am Anfang der Referenzseite enthalten sein (direkt unter dem einleitenden Material).
Unter der Überschrift befindet sich ein Codeblock, der die genaue Syntax des Features zeigt und mit der Code-Fence-Klasse ` ```[markup-language] ` abgegrenzt wird.

Das folgende Beispiel zeigt den Markdown-Code für einen typischen Syntaxabschnitt (für eine JavaScript-Funktion):

````md
## Syntax

```js-nolint
slice()
slice(start)
slice(start, end)
```
````

> [!NOTE]
> Die in diesem Fall verwendete markup-language ist `js-nolint`, wobei `js` angibt, dass JavaScript-Syntaxhervorhebung verwendet werden soll.
> Für JavaScript-Syntaxabschnitte ist außerdem `-nolint` erforderlich, da der Syntaxabschnitt absichtlich nicht ganz JavaScript ist und der Linter ihn nicht „korrigieren“ soll (Rückgabewerte und Semikolons am Zeilenende werden weggelassen).

### Allgemeine Stilregeln

Einige Regeln für das Markup innerhalb des Syntaxblocks:

- Beenden Sie eine Zeile **nicht** mit einem Semikolon `;`. Syntaxabschnitte sollen keinen ausführbaren Code zeigen. Daher ergibt es keinen Sinn, Semikolons anzuzeigen.
- Verwenden Sie \<code> nicht innerhalb des Syntaxblocks (und auch nicht innerhalb anderer Codebeispielblöcke auf MDN). Dies ist nicht nur generell nutzlos, sondern unser Markup möchte es nicht und wird nicht wie gewünscht gerendert, wenn Sie es einschließen.
- Geben Sie nur die Funktion und Argumente an. Das folgende Beispiel zeigt „korrigierte“ Beispiele.

  ```js-nolint
  querySelector(selector)
  // responseStr = element.querySelector(selector)

  new IntersectionObserver(callback, options)
  // const observer = new IntersectionObserver(callback, options)
  ```

### Konstruktoren und Methoden

#### Syntaxblock

Beginnen Sie mit einem Syntaxblock wie diesem (von der Konstruktorsseite für [`IntersectionObserver()`](/de/docs/Web/API/IntersectionObserver/IntersectionObserver)):

```js-nolint
new IntersectionObserver(callback, options)
```

oder diesem (von [`Document.hasStorageAccess()`](/de/docs/Web/API/Document/hasStorageAccess)):

```js-nolint
hasStorageAccess()
```

Wenn die Methode statisch ist, beispielsweise [`URL.createObjectURL()`](/de/docs/Web/API/URL/createObjectURL_static), geben Sie auch ihre Schnittstelle an:

```js-nolint
URL.createObjectURL(object)
```

##### Mehrere Zeilen/Optionale Parameter

Methoden, die auf viele verschiedene Arten verwendet werden können, sollten auf mehrere Zeilen erweitert werden, wobei alle möglichen Varianten gezeigt werden.

Jede Option sollte in einer eigenen Zeile stehen; sowohl Kommentare pro Option als auch Zuweisungen werden weggelassen. Beispielsweise hat {{jsxref("Array.prototype.slice()")}} zwei optionale Parameter und würde wie unten gezeigt dokumentiert:

```js-nolint
slice()
slice(begin)
slice(begin, end)
```

Entsprechend für [`CanvasRenderingContext2D.drawImage`](/de/docs/Web/API/CanvasRenderingContext2D/drawImage):

```js-nolint
drawImage(image, dx, dy)
drawImage(image, dx, dy, dWidth, dHeight)
drawImage(image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight)
```

Entsprechend für den Konstruktor {{jsxref("Date")}}:

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

Formale Syntaxnotation (unter Verwendung von [BNF](https://en.wikipedia.org/wiki/Backus%E2%80%93Naur_form)) sollte nicht im Abschnitt „Syntax“ verwendet werden — verwenden Sie stattdessen das oben [beschriebene](#multiple_linesoptional_parameters) erweiterte Mehrzeilenformat.

Obwohl die formale Notation einen kompakten Mechanismus zur Beschreibung komplexer Syntax bereitstellt, ist sie vielen Entwicklern nicht vertraut und kann mit gültiger Syntax bestimmter Programmiersprachen _kollidieren_. Beispielsweise steht `[ ]` sowohl für einen „optionalen Parameter“ als auch für ein JavaScript-{{jsxref("Array")}}. Dies ist in der folgenden formalen Syntax für {{jsxref("Array.prototype.slice()")}} zu sehen:

```js-nolint
arr.slice([begin[, end]])
```

Für bestimmte Fälle, in denen dies als vorteilhaft angesehen wird, kann ein separater Abschnitt **Formale Syntax** unter Verwendung der formalen Notation deklariert werden.

##### Prägnante Syntaxblöcke

Ziel ist es, den Syntaxblock zu einer möglichst reinen und eindeutigen Definition der Syntax des Features zu machen — schließen Sie keine irrelevante Syntax ein. Beispielsweise finden Sie diese Syntaxform an vielen Stellen der Website zur Beschreibung von Promises:

```js-nolint
caches.match(request, options).then((response) => {
  // Do something with the response
})
```

Diese Version ist jedoch viel prägnanter und enthält nicht den überflüssigen Methodenaufruf {{JSxRef("Promise.prototype.then()")}}:

```js-nolint
match(request, options)
```

##### Syntaxblöcke für Callbacks

Bei Methoden, die eine Callback-Funktion akzeptieren, zeigen Sie den Callback als Parameter und nicht als Arrow Function oder `function`-Ausdruck.

```js-nolint
filter(callbackFn)
filter(callbackFn, thisArg)
```

Listen Sie anschließend im Abschnitt „Parameter“ die Parameter der Callback-Funktion sowie den erwarteten Rückgabewert auf.

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

Beginnen Sie die Nummerierung vorzugsweise bei 1. Dadurch können Sie Beschreibungen wie „`unshift` fügt N Elemente am Anfang des Arrays hinzu“ sowie „das erste Element“ anstelle von „das nullte Element“ schreiben.

Beachten Sie, dass der Fall der Übergabe von null Restparametern immer enthalten ist, auch wenn dies nicht besonders sinnvoll erscheint. Schreiben Sie anschließend im Abschnitt „Parameter“ Folgendes:

```md
- `element1`, …, `elementN`
  - : The elements to add to the front of the array.
```

Fügen Sie hier `\{{optional_inline}}` hinzu, wenn die Übergabe von null Restparametern sinnvoll ist.

Ein weiteres Beispiel mit einigen Positionsparametern vor dem Restparameter:

```js-nolint
splice(start)
splice(start, deleteCount)
splice(start, deleteCount, item1)
splice(start, deleteCount, item1, item2)
splice(start, deleteCount, item1, item2, /* …, */ itemN)
```

#### Parameterabschnitt

Fügen Sie als Nächstes einen Unterabschnitt „Parameter“ ein, der in einer Beschreibungsliste erläutert, was jeder Parameter sein soll. Parameter, die Objekte mit mehreren Mitgliedern sind, können eine verschachtelte Beschreibungsliste enthalten, die wiederum erläutert, was jedes Mitglied sein soll. Optionale Parameter sollten im Beschreibungsbegriff neben ihrem Namen mit einem \\{{optional_inline}}-Makroaufruf gekennzeichnet werden.

Der Name jedes Parameters in der Liste sollte in Markdown-Code-Fence-Notation `` ` ` `` enthalten sein.

> [!NOTE]
> Selbst wenn das Feature keine Parameter akzeptiert, müssen Sie einen Abschnitt „Parameter“ mit dem Inhalt „Keine“ einfügen.

#### Abschnitt „Rückgabewert“

Fügen Sie als Nächstes einen Unterabschnitt „Rückgabewert“ ein, der erläutert, was der Rückgabewert des Konstruktors oder der Methode ist. Siehe die obigen Links als Beispiele.

Falls es keinen Rückgabewert gibt, verwenden Sie den folgenden Text:

Keine (\\{{jsxref("undefined")}}).

#### Abschnitt „Ausnahmen“

Fügen Sie schließlich einen Unterabschnitt „Ausnahmen“ ein, der erläutert, welche Ausnahmen ausgelöst werden können, wenn beim Aufrufen des Konstruktors bzw. der Methode ein Problem auftritt. Dies kann geschehen, weil ein Parametername falsch geschrieben wurde oder ihm ein Wert mit dem falschen Datentyp übergeben wurde, weil ein Problem mit der Umgebung besteht, in der er aufgerufen wird (z. B. beim Versuch, ein Feature, das nur in einem sicheren Kontext verfügbar ist, in einem unsicheren Kontext auszuführen), oder aus einem anderen Grund.

Um festzustellen, welche Ausnahmen von einer Methode ausgelöst werden, kann eine gründliche Prüfung der Spezifikation erforderlich sein. Die schrittweise Erklärung in der Spezifikation, wie ein Feature funktioniert, liefert im Allgemeinen eine solide Liste der Ausnahmen und der Situationen, die zu ihrem Auslösen führen.

Die Namen und Erklärungen der Ausnahmen sollten in einer Beschreibungsliste enthalten sein.

> [!NOTE]
> Wenn das Feature keine Ausnahmen auslösen kann, müssen Sie keinen Abschnitt „Ausnahmen“ einschließen. Falls Sie möchten, können Sie ihn jedoch mit dem Inhalt „Keine“ einfügen.

### Eigenschaften

#### Wertabschnitt

Eigenschaften enthalten keinen Syntaxabschnitt. Fügen Sie stattdessen einen Abschnitt „Wert“ hinzu, der den Wert der Eigenschaft erläutert. Beschreiben Sie ihren Datentyp und ihren Zweck.

#### Abschnitt „Ausnahmen“

Wenn der Zugriff auf die Eigenschaft eine Ausnahme auslösen kann, fügen Sie einen Unterabschnitt „Ausnahmen“ ein, der jede Ausnahme erläutert. Dieser sollte genauso aufgebaut sein wie der oben für Methoden und Konstruktoren beschriebene Abschnitt.

## JavaScript-Referenzsyntax

Referenzseiten für integrierte JavaScript-Objekte folgen denselben Grundregeln wie API-Referenzseiten, z. B. für Methoden und Eigenschaften. Es gibt einige Unterschiede, die Sie möglicherweise feststellen:

- Bei integrierten Objekten mit einem einzelnen Konstruktor wird die Konstruktorsyntax häufig auf der Landingpage des Objekts eingefügt. Siehe beispielsweise {{JSxRef("Date")}}. Sie werden feststellen, dass statische Methoden (die auf dem `Date`-Objekt selbst vorhanden sind) unter „Methoden“ aufgeführt werden, während Instanzmethoden unter „Date.prototype-Methoden“ aufgeführt werden.
- Sie werden außerdem feststellen, dass Methoden ohne Parameter bzw. Ausnahmen auf JavaScript-Referenzseiten diese Unterabschnitte mit höherer Wahrscheinlichkeit überhaupt nicht enthalten. Siehe {{JSxRef("Date.getDate()")}} und {{JSxRef("Date.now()")}} als Beispiele.

## CSS-Referenzsyntax

### Eigenschaften

CSS-Eigenschaftsreferenzseiten enthalten einen Abschnitt „Syntax“. Er folgt auf ein Live-Beispiel, das veranschaulicht, was die Eigenschaft bewirkt. Bei Kurzformeigenschaften folgt er auf den Abschnitt „Bestandteileigenschaften“.

Der Abschnitt „Syntax“ selbst beginnt mit einem Codeblock, der typische Deklarationen für die Eigenschaft veranschaulicht (siehe beispielsweise {{CSSxRef("animation")}}).

> [!NOTE]
> Wir tun dies, weil die formale CSS-Syntax komplex ist, von vielen MDN-Lesern nicht verwendet wird und auf Anfänger abschreckend wirkt. Echte Syntax und Beispiele sind für die Mehrheit der Menschen hilfreicher.

Im Abschnitt „Syntax“ finden Sie die folgenden Unterabschnitte.

#### Werteabschnitt

Sie sollten einen Abschnitt „Werte“ einschließen.

Dieser Abschnitt beginnt mit einem einleitenden Satz, der erklärt, wie der Wert der Eigenschaft aufgebaut ist — ein einzelner Wert, ein oder zwei Werte oder eine durch Leerzeichen oder Kommas getrennte Liste — sowie mögliche Einschränkungen hinsichtlich Reihenfolge oder Kombination. Beginnen Sie diesen Satz mit „Diese Eigenschaft wird angegeben als“ und beenden Sie ihn mit einem Doppelpunkt, sodass er zur Definitionsliste der CSS-Werttypen und Schlüsselwörter führt, aus denen sich der Wert der Eigenschaft zusammensetzt. Beispielsweise leitet der Abschnitt [Werte](/de/docs/Web/CSS/Reference/Properties/font-style#values) der Eigenschaft `font-style` seine Definitionsliste mit diesem Satz ein:

> Diese Eigenschaft wird als einer der folgenden Schlüsselwortwerte angegeben. Auf das Schlüsselwort `oblique` kann optional ein `<angle>` folgen:

Umschließen Sie in der Definitionsliste jeden Werttyp mit spitzen Klammern und verlinken Sie ihn auf die MDN-Referenzseite, die diesen Werttyp behandelt, sofern eine solche Seite vorhanden ist. Ein Beispiel finden Sie im Abschnitt „Werte“ von {{CSSxRef("list-style-image")}}.

#### Formale Syntax

Der letzte Abschnitt „Formale Syntax“ wird automatisch mithilfe des Makros `\{{CSSSyntax}}` generiert. Dieses Makro ruft Daten aus den CSS-Spezifikationen über das [@webref/css-npm-Paket](https://www.npmjs.com/package/@webref/css) ab. So schließen Sie die formale Syntax in Ihr Dokument ein:

1. Fügen Sie eine Überschrift wie diese hinzu: `## Formale Syntax`.
2. Platzieren Sie das Makro `\{{CSSSyntax}}` direkt unter dieser Überschrift.

### Selektoren

Der Abschnitt „Syntax“ von Selektor-Referenzseiten ist wesentlich einfacher als der von Eigenschaftsseiten. Er enthält einen mit dem Stil „Syntax Box“ formatierten Block, der die grundlegende Syntax des Selektors zeigt, unabhängig davon, ob es sich nur um ein einfaches Schlüsselwort handelt (z. B. {{CSSxRef(":hover")}}) oder um einen komplexeren Funktionswert, der einen Parameter akzeptiert (z. B. {{CSSxRef(":not", ":not()")}}). Manchmal wird der Parameter in einem weiteren Eintrag innerhalb des Syntaxblocks erläutert (siehe {{CSSxRef(":nth-last-of-type", ":nth-last-of-type()")}} als Beispiel).

Dieser Block wird automatisch aus den Daten generiert, die im CSS-Verzeichnis des [MDN-Daten-Repositorys](https://github.com/mdn/data) enthalten sind. Sie müssen lediglich einen `CSSSyntax`-Makroaufruf unter dem Titel einfügen; dieser kümmert sich um den Rest.

Die einzige Komplikation besteht darin, sicherzustellen, dass die benötigten Daten vorhanden sind. Die Datei [selectors.json](https://github.com/mdn/data/blob/main/css/selectors.json) muss einen Eintrag für den Selektor enthalten, den Sie dokumentieren.

Dazu müssen Sie das [MDN-Daten-Repository](https://github.com/mdn/data) forken, Ihren Fork lokal klonen, die Änderungen in einem neuen Branch vornehmen und anschließend einen Pull Request gegen das Upstream-Repository einreichen. Weitere Informationen zur Verwendung von Git finden Sie [hier](/de/docs/MDN/Writing_guidelines/Page_structures/Compatibility_tables).

## HTML-Referenzsyntax

HTML-Referenzseiten haben keine Abschnitte „Syntax“ — die Syntax besteht immer nur aus dem von spitzen Klammern umgebenen Elementnamen, daher wird sie nicht benötigt. Das Wichtigste, was Sie über HTML-Elemente wissen müssen, ist, welche Attribute sie akzeptieren und welche Werte diese haben können. Dies wird in einem separaten Abschnitt „Attribute“ behandelt. Siehe {{htmlelement("ol")}} und {{htmlelement("video")}} als Beispiele.

## HTTP-Referenzsyntax

HTTP-Referenzsyntax wird vollständig manuell erstellt und unterscheidet sich je nach Typ des HTTP-Features, das Sie dokumentieren.

### HTTP-Header/Content-Security-Policy

HTTP-Header-Syntax (und Content-Security-Policy) wird auf der Seite in zwei separaten Abschnitten dokumentiert — „Syntax“ und „Direktiven“.

#### Syntaxabschnitt

Der Abschnitt „Syntax“ zeigt, wie die Syntax eines Headers aussieht, und verwendet einen mit dem Stil „Syntax Box“ formatierten Syntaxblock. Dieser enthält formale Syntax, um genau zu zeigen, welche Direktiven in welcher Reihenfolge usw. im Wert enthalten sein können. Der Syntaxblock für den Header {{HTTPHeader("If-None-Match")}} sieht beispielsweise so aus:

```http
If-None-Match: <etag_value>
If-None-Match: <etag_value>, <etag_value>, …
If-None-Match: *
```

Einige Header haben getrennte Syntax für Request-Direktiven, Response-Direktiven und Erweiterungen. Falls verfügbar, müssen diese in getrennten Syntaxblöcken enthalten sein, jeweils in einem eigenen Unterabschnitt. Siehe {{HTTPHeader("Cache-Control")}} als Beispiel.

#### Direktivenabschnitt

Der Abschnitt „Direktiven“ enthält eine Beschreibungsliste mit den Namen und Beschreibungen aller Direktiven, die innerhalb der Syntax erscheinen können.

### HTTP-Request-Methoden

Die Syntax von Request-Methoden ist sehr einfach und enthält lediglich einen mit dem Stil „Syntax Box“ formatierten Syntaxblock, der zeigt, wie die Methodensyntax aufgebaut ist. Die Syntax für die [GET-Methode](/de/docs/Web/HTTP/Reference/Methods/GET) sieht so aus:

```http
GET /index.html
```

### HTTP-Response-Statuscodes

Auch die Syntax für HTTP-Response-Statuscodes ist sehr einfach — ein Syntaxblock mit Code und Name. Zum Beispiel:

```http
404 Not Found
```

## SVG-Referenzsyntax

### SVG-Elemente

Syntaxabschnitte für SVG-Elemente existieren nicht — genau wie Syntaxabschnitte für HTML-Elemente. Jede SVG-Elementreferenzseite enthält lediglich eine Liste der Attribute, die auf dieses Element angewendet werden können. Siehe beispielsweise {{SVGElement("feTile")}}.

### SVG-Attribute

Referenzseiten für SVG-Attribute enthalten ebenfalls keine Syntaxabschnitte.

## Siehe auch

- [Markdown in MDN](/de/docs/MDN/Writing_guidelines/Howto/Markdown_in_MDN#example_code_blocks)
