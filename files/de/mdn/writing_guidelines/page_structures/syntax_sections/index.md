---
title: Syntax-Abschnitte
slug: MDN/Writing_guidelines/Page_structures/Syntax_sections
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

Der Syntax-Abschnitt einer MDN-Referenzseite enthält ein Syntaxfeld, das die genaue Syntax eines Features definiert (z. B. welche Parameter es akzeptieren kann, welche optional sind). Dieser Artikel erklärt, wie Syntaxfelder für Referenzartikel geschrieben werden.

## API-Referenz-Syntax

Syntax-Abschnitte für API-Referenzseiten werden manuell geschrieben und können je nach dokumentiertem Feature leicht variieren. Der Abschnitt beginnt mit einer Überschrift (typischerweise einer Überschrift der Ebene zwei `##`) mit dem Namen "Syntax" und muss oben auf der Referenzseite enthalten sein (direkt unter dem einleitenden Material). Unter der Überschrift befindet sich ein Codeblock, der die genaue Syntax des Features zeigt, begrenzt durch Codezäune ` ```[Markup-Sprache]`.

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
> Die in diesem Fall verwendete Markup-Sprache ist `js-nolint`, wobei `js` angibt, dass die JavaScript-Syntax-Hervorhebung verwendet werden soll.
> Für JavaScript-Syntaxabschnitte ist auch `-nolint` erforderlich, da der Syntaxabschnitt absichtlich nicht ganz JavaScript ist und wir nicht möchten, dass der Linter es "korrigiert" (Rückgabewerte und Semikolons am Ende der Zeile werden weggelassen).

### Allgemeine Stilregeln

Einige Regeln, die in Bezug auf Markup innerhalb des Syntaxblocks befolgt werden sollten:

- Beenden Sie **nicht** eine Zeile mit Semikolon `;`. Syntaxabschnitte sollen keinen ausführbaren Code anzeigen. Es macht also keinen Sinn, Semikolons zu zeigen.
- Verwenden Sie **nicht** \<code> innerhalb des Syntaxblocks (oder innerhalb eines Codebeispielsblocks auf MDN). Nicht nur ist es im Allgemeinen nutzlos, unser Markup will es nicht und es wird nicht so gerendert, wie Sie es sehen möchten, wenn Sie es einschließen.
- Spezifizieren Sie nur die Funktion und die Argumente. Beispiel mit "korrigierten" Beispielen unten gezeigt.

  ```js-nolint
  querySelector(selector)
  // responseStr = element.querySelector(selector)

  new IntersectionObserver(callback, options)
  // const observer = new IntersectionObserver(callback, options)
  ```

### Konstruktoren und Methoden

#### Syntaxblock

Beginnen Sie mit einem Syntaxblock, wie diesem (von der [`IntersectionObserver()`](/de/docs/Web/API/IntersectionObserver/IntersectionObserver)-Konstruktorseite):

```js-nolint
new IntersectionObserver(callback, options)
```

oder diesem (von [`Document.hasStorageAccess()`](/de/docs/Web/API/Document/hasStorageAccess)):

```js-nolint
hasStorageAccess()
```

Wenn die Methode statisch ist, zum Beispiel [`URL.createObjectURL()`](/de/docs/Web/API/URL/createObjectURL_static), geben Sie auch ihre Schnittstelle an:

```js-nolint
URL.createObjectURL(object)
```

##### Mehrere Zeilen/Optionale Parameter

Methoden, die auf viele verschiedene Arten verwendet werden können, sollten in mehrere Zeilen erweitert werden, die alle möglichen Variationen zeigen.

Jede Option sollte in einer eigenen Zeile stehen, wobei sowohl verglichenen Kommentare als auch Zuweisungen weggelassen werden. Zum Beispiel hat {{jsxref("Array.prototype.slice()")}} zwei optionale Parameter und würde dokumentiert werden wie unten gezeigt:

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

Formale Syntaxnotation (unter Verwendung von [BNF](https://en.wikipedia.org/wiki/Backus%E2%80%93Naur_form)) sollte nicht im Syntaxabschnitt verwendet werden — stattdessen verwenden Sie das beschriebene erweiterte Mehrzeilenformat [oben beschrieben](#multiple_linesoptional_parameters).

Während die formale Notation einen prägnanten Mechanismus zur Beschreibung komplexer Syntax bietet, ist sie vielen Entwicklern nicht vertraut und kann mit gültiger Syntax für bestimmte Programmiersprachen in Konflikt stehen. Zum Beispiel zeigt `[ ]` sowohl einen "optional parameter" als auch ein JavaScript {{jsxref("Array")}}. Sie können dies in der formalen Syntax für {{jsxref("Array.prototype.slice()")}} unten sehen:

```js-nolint
arr.slice([begin[, end]])
```

Für bestimmte Fälle, in denen der Nutzen gesehen wird, kann ein separater **Formaler Syntax**-Abschnitt mit der formalen Mitteilung erklärt werden.

##### Prägnante Syntaxblöcke

Das Ziel ist es, den Syntaxblock so rein und unmissverständlich wie möglich als Definition der Syntax des Features zu gestalten — schließen Sie keine irrelevante Syntax ein. Zum Beispiel sehen Sie möglicherweise diese Syntaxform, die an vielen Stellen auf der Site verwendet wird, um Versprechen zu beschreiben:

```js-nolint
caches.match(request, options).then(function (response) {
  // Do something with the response
})
```

Aber diese Version ist viel prägnanter und enthält nicht den überflüssigen {{JSxRef("Promise.prototype.then()")}}-Methodenaufruf:

```js-nolint
match(request, options)
```

##### Rückruf-Syntaxblöcke

Für Methoden, die eine Rückruffunktion akzeptieren, zeigen Sie den Rückruf als Parameter, nicht als Pfeilfunktion oder `function`-Ausdruck.

```js-nolint
filter(callbackFn)
filter(callbackFn, thisArg)
```

Dann listen Sie im Abschnitt "Parameter" die Parameter der Rückruffunktion und was sie als Rückgabe erwartet wird.

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

Bevorzugen Sie, die Nummerierung mit 1 zu beginnen, was das Schreiben von Beschreibungen wie "`unshift` fügt N Elemente am Anfang des Arrays hinzu" sowie "das erste Element" (anstatt "das nullte Element") ermöglicht.

Beachten Sie, dass der Fall des Übergebens von null Rest-Parametern immer enthalten ist, selbst wenn es nicht viel Sinn ergibt. Dann schreiben Sie im Abschnitt "Parameter" dies:

```md
- `element1`, …, `elementN`
  - : The elements to add to the front of the array.
```

Fügen Sie `\{{optional_inline}}` hier hinzu, wenn das Übergeben von null Rest-Parametern sinnvoll ist.

Ein weiteres Beispiel mit einigen Positionsparametern vor dem Rest-Parameter:

```js-nolint
splice(start)
splice(start, deleteCount)
splice(start, deleteCount, item1)
splice(start, deleteCount, item1, item2)
splice(start, deleteCount, item1, item2, /* …, */ itemN)
```

#### Parameterabschnitt

Schließen Sie als nächstes einen Unterabschnitt "Parameter" ein, der erklärt, was jeder Parameter sein sollte, in einer Beschreibungs-Liste. Parameter, die Objekte mit mehreren Mitgliedern sind, können eine verschachtelte Beschreibungs-Liste enthalten, die ebenfalls eine Erklärung enthält, was jedes Mitglied sein sollte. Optionale Parameter sollten mit einem \\{{optional_inline}}-Makroaufruf neben ihrem Namen im Beschreibungsterm markiert werden.

Der Name jedes Parameters in der Liste sollte in Markdown-Codezaun-Notation `` ` ` `` enthalten sein.

> [!NOTE]
> Auch wenn das Feature keine Parameter annimmt, müssen Sie einen "Parameter"-Abschnitt einschließen, mit dem Inhalt "None".

#### Rückgabewert-Abschnitt

Fügen Sie als nächstes einen Unterabschnitt "Rückgabewert" hinzu, der erklärt, was der Rückgabewert des Konstruktors oder der Methode ist. Siehe die obigen Links als Beispiele.

Wenn es keinen Rückgabewert gibt, verwenden Sie den folgenden Text:

Keine (\\{{jsxref("undefined")}}).

#### Ausnahmen-Abschnitt

Schließlich fügen Sie einen Unterabschnitt "Ausnahmen" hinzu, der erläutert, welche Ausnahmen bei einem Problem beim Aufrufen des Konstruktors/der Methode ausgelöst werden können. Dies könnte daran liegen, dass ein Parametername falsch geschrieben wurde oder ihm ein Wert des falschen Datentyps gegeben wurde, weil es ein Problem mit der Umgebung gibt, in der es aufgerufen wird (z. B. der Versuch, ein nur im sicheren Kontext verfügbares Feature in einem nicht sicheren Kontext auszuführen) oder aus einem anderen Grund.

Das Bestimmen, welche Ausnahmen von einer Methode ausgelöst werden, kann eine gründliche Durchsicht der Spezifikation erfordern. Das Durchsehen der schrittweisen Erklärung der Funktionsweise eines Features in der Spezifikation liefert im Allgemeinen eine solide Liste der Ausnahmen und der Situationen, die sie verursachen.

Die Ausnahme-Namen und Erklärungen sollten in einer Beschreibungs-Liste enthalten sein.

> [!NOTE]
> Wenn durch das Feature keine Ausnahmen ausgelöst werden können, müssen Sie keinen "Ausnahmen"-Abschnitt hinzufügen, aber Sie können ihn, wenn Sie möchten, mit dem Inhalt "None" einfügen.

### Eigenschaften

#### Wert-Abschnitt

Eigenschaften enthalten keinen Syntax-Abschnitt. Stattdessen fügen Sie einen "Wert"-Abschnitt hinzu, der eine Erklärung des Werts der Eigenschaft enthält. Beschreiben Sie seinen Datentyp und seinen Zweck.

#### Ausnahmen-Abschnitt

Wenn auf die Eigenschaft zugegriffen werden kann, das eine Ausnahme auslöst, fügen Sie einen Unterabschnitt "Ausnahmen" hinzu, der jede Ausnahme erläutert; dies sollte genauso eingerichtet werden wie der oben beschriebene für Methoden und Konstruktoren.

## JavaScript-Referenz-Syntax

JavaScript-Built-in-Objekt-Referenzseiten folgen den gleichen Grundregeln wie API-Referenzseiten, z. B. für Methoden und Eigenschaften. Es gibt einige Unterschiede, die Sie möglicherweise beobachten:

- Für Built-in-Objekte mit einem einzigen Konstruktor ist die Konstruktorsyntax häufig auf der Objekt-Startseite enthalten. Siehe {{JSxRef("Date")}} zum Beispiel. Sie werden feststellen, dass statische Methoden (diejenigen, die auf dem `Date`-Objekt selbst existieren) unter "Methoden" gelistet sind, während Instanzmethoden unter "Date.prototype-Methoden" aufgelistet sind.
- Ihnen wird auch auffallen, dass Methoden, die keine Parameter/Ausnahmen haben, diese Unterabschnitte in JavaScript-Referenzseiten eher ganz weglassen. Siehe {{JSxRef("Date.getDate()")}} und {{JSxRef("Date.now()")}} für Beispiele.

## CSS-Referenz-Syntax

### Eigenschaften

CSS-Eigenschaftsreferenzseiten enthalten einen "Syntax"-Abschnitt, der früher am Anfang der Seite zu finden war, aber zunehmend unter einem Abschnitt gefunden wird, der einen Block von Code zeigt, der die typische Verwendung des Features zeigt, plus ein Live-Beispiel um zu veranschaulichen, was das Feature tut (siehe {{CSSxRef("animation")}} zum Beispiel).

> [!NOTE]
> Wir tun dies, weil die formale CSS-Syntax komplex ist, von vielen Lesern der MDN nicht verwendet wird, und für Anfänger abschreckend ist. Reale Syntax und Beispiele sind für die Mehrheit der Menschen nützlicher.

Im Syntax-Abschnitt finden Sie die folgenden Inhalte.

#### Optionaler Erklärungstext

Einige CSS-Eigenschaften erklären sich von selbst und brauchen eigentlich keine zusätzliche Erklärung (zum Beispiel {{CSSxRef("color")}}). Andere hingegen sind komplexer und benötigen eine Erklärung zur Syntaxreihenfolge, einschließlich mehrerer Werte usw. (siehe {{CSSxRef("animation")}}). In solchen Fällen können Sie zusätzliche Erklärungen vor etwaigen Unterabschnitten einfügen.

#### Werte-Abschnitt

Als nächstes sollten Sie einen "Werte"-Abschnitt einfügen — dieser enthält eine Beschreibungs-Liste, die die CSS-Wertetypen erklärt, aus denen der Wert der Eigenschaft besteht. Jeder Wertetyp sollte in spitze Klammern gesetzt und mit der MDN-Referenzseite, die diesen Wertetyp behandelt, verlinkt werden, wenn eine Seite dafür existiert. Zum Beispiel siehe die {{CSSxRef("border")}}-Eigenschaftsreferenz — diese referenziert drei Wertetypen, von denen nur einer verlinkt ist ({{CSSxRef("&lt;color&gt;")}}).

#### Formale Syntax

Der letzte Abschnitt, "Formale Syntax", wird automatisch durch das `\{{CSSSyntax}}`-Makro generiert. Dieses Makro holt Daten aus den CSS-Spezifikationen unter Verwendung des [@webref/css npm-Pakets](https://www.npmjs.com/package/@webref/css). Um die formale Syntax in Ihr Dokument einzufügen:

1. Fügen Sie eine Überschrift hinzu, wie: `## Formale Syntax`.
2. Platzieren Sie das `\{{CSSSyntax}}`-Makro direkt unter dieser Überschrift.

### Selektoren

Der "Syntax"-Abschnitt von Selektor-Referenzseiten ist viel einfacher als der von Eigenschaftsseiten. Er enthält einen Block, der mit dem "Syntax Box"-Stil formatiert ist, der die grundlegende Syntax des Selektors zeigt, unabhängig davon, ob es sich nur um ein einfaches Schlüsselwort (z. B. {{CSSxRef(":hover")}}) oder um einen komplexeren Funktionswert handelt, der einen Parameter benötigt (z. B. {{CSSxRef(":not", ":not()")}}). Manchmal wird der Parameter in einem weiteren Eintrag innerhalb des Syntaxblocks erklärt (siehe {{CSSxRef(":nth-last-of-type", ":nth-last-of-type()")}} für ein Beispiel).

Dieser Block wird automatisch aus den in der CSS-Direktorie des [MDN-Daten-Repo](https://github.com/mdn/data) enthaltenen Daten generiert. Sie müssen nur einen `CSSSyntax`-Makroaufruf unter dem Titel einfügen, und es wird sich um den Rest kümmern.

Die einzige Komplikation ergibt sich dabei, sicherzustellen, dass die benötigten Daten vorhanden sind. Die [selectors.json](https://github.com/mdn/data/blob/main/css/selectors.json)-Datei muss einen Eintrag für den Selektor enthalten, den Sie dokumentieren.

Sie müssen dies tun, indem Sie das [MDN-Daten-Repo](https://github.com/mdn/data) forken, Ihren Fork lokal klonen, die Änderungen in einem neuen Branch vornehmen und dann einen Pull-Request gegen das Upstream-Repo einreichen. Sie können [hier mehr Details über die Verwendung von Git finden](/de/docs/MDN/Writing_guidelines/Page_structures/Compatibility_tables).

## HTML-Referenz-Syntax

HTML-Referenzseiten haben keine "Syntax"-Abschnitte — die Syntax ist immer nur der Elementname, umgeben von spitzen Klammern, daher ist sie nicht notwendig. Das Hauptwas Sie über HTML-Elemente wissen müssen, sind die Attribute, die sie annehmen, und welche Werte sie haben können, und dies wird in einem separaten "Attribute"-Abschnitt behandelt. Siehe {{htmlelement("ol")}} und {{htmlelement("video")}} für Beispiele.

## HTTP-Referenz-Syntax

HTTP-Referenz-Syntax ist vollständig manuell erstellt und variiert je nach Art des HTTP-Features, das dokumentiert wird.

### HTTP-Header/Content-Security-Policy

HTTP-Header-Syntax (und Content-Security-Policy) wird in zwei separaten Abschnitten auf der Seite dokumentiert — "Syntax" und "Direktiven".

#### Syntax-Abschnitt

Der "Syntax"-Abschnitt zeigt, wie die Syntax eines Headers aussieht, unter Verwendung eines mit dem "Syntax Box"-Stil formatierten Syntaxblocks, einschließlich formaler Syntax, um genau zu zeigen, welche Direktiven im Wert enthalten sein können, in welcher Reihenfolge usw. Zum Beispiel sieht der Syntaxblock des {{HTTPHeader("If-None-Match")}}-Headers so aus:

```http
If-None-Match: <etag_value>
If-None-Match: <etag_value>, <etag_value>, …
If-None-Match: *
```

Einige Header haben separate Anforderungsdirektiven-, Antwortdirektiven- und Erweiterungssyntax. Wenn verfügbar, müssen diese in separaten Syntaxblöcken aufgenommen werden, jeder unter seinem eigenen Unterabschnitt. Siehe {{HTTPHeader("Cache-Control")}} für ein Beispiel.

#### Direktiven-Abschnitt

Der "Direktive"-Abschnitt enthält eine Beschreibungs-Liste, die die Namen und Beschreibungen aller Direktiven enthält, die innerhalb der Syntax erscheinen können.

### HTTP-Anforderungsmethoden

Die Syntax der Anforderungsmethode ist wirklich einfach, sie enthält einfach einen Syntaxblock, der mit dem "Syntax Box"-Stil formatiert ist und zeigt, wie die Methodensyntax strukturiert ist. Die Syntax für die [GET-Methode](/de/docs/Web/HTTP/Reference/Methods/GET) sieht so aus:

```http
GET /index.html
```

### HTTP-Antwortstatuscodes

Auch die Syntax für HTTP-Antwortstatuscodes ist wirklich einfach — ein Syntaxblock, der den Code und Namen enthält. Zum Beispiel:

```http
404 Not Found
```

## SVG-Referenz-Syntax

### SVG-Elemente

SVG-Element-Syntax-Abschnitte sind nicht vorhanden — genau wie HTML-Element-Syntax-Abschnitte. Jede SVG-Element-Referenzseite enthält einfach eine Liste der Attribute, die auf dieses Element angewendet werden können. Siehe {{SVGElement("feTile")}} für ein Beispiel.

### SVG-Attribute

SVG-Attribut-Referenzseiten enthalten ebenfalls keine Syntaxabschnitte.

## Siehe auch

- [Markdown in MDN](/de/docs/MDN/Writing_guidelines/Howto/Markdown_in_MDN#example_code_blocks)
