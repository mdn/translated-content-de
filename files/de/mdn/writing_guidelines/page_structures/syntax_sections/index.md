---
title: Syntax-Abschnitte
slug: MDN/Writing_guidelines/Page_structures/Syntax_sections
l10n:
  sourceCommit: c6e5080f41fc8ef79e487e01c6978069b7819423
---

Der Syntax-Abschnitt einer MDN-Referenzseite enthält ein Syntaxfeld, das die genaue Syntax eines Features definiert (z. B. welche Parameter es akzeptieren kann, welche optional sind). Dieser Artikel erklärt, wie man Syntaxfelder für Referenzartikel schreibt.

## API-Referenzsyntax

Syntax-Abschnitte für API-Referenzseiten werden manuell geschrieben und können je nach dem zu dokumentierenden Feature leicht variieren. Der Abschnitt beginnt mit einer Überschrift (typischerweise eine Überschrift der zweiten Ebene `##`) mit dem Namen "Syntax" und muss am Anfang der Referenzseite (direkt unter dem einleitenden Material) stehen. Unter der Überschrift befindet sich ein Codeblock, der die genaue Syntax des Features zeigt, umrahmt durch Code Fence ` ```[Markup-Sprache] ` Klasse.

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
> Für JavaScript-Syntaxabschnitte ist `-nolint` ebenfalls erforderlich, da der Syntaxabschnitt absichtlich nicht "ganz" JavaScript ist und wir nicht möchten, dass der Linter es "korrigiert" (Rückgabewerte und Semikolons am Zeilenende werden weggelassen).

### Allgemeine Stilregeln

Einige Regeln, die bezüglich der Markup innerhalb des Syntaxblocks zu beachten sind:

- Beenden Sie eine Zeile **nicht** mit einem Semikolon `;`. Syntaxabschnitte sollen keinen ausführbaren Code zeigen. Daher macht es keinen Sinn, Semikolons anzuzeigen.
- Verwenden Sie **nicht** \<code> innerhalb des Syntaxblocks (oder innerhalb eines Codebeispielblocks auf MDN). Es ist nicht nur im Allgemeinen nutzlos, sondern unser Markup möchte es nicht und wird nicht so gerendert, wie Sie es sich wünschen, wenn Sie es einschließen.
- Geben Sie nur die Funktion und Argumente an. Beispiel für "korrigierte" Beispiele unten

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

Wenn die Methode statisch ist, zum Beispiel [`URL.createObjectURL()`](/de/docs/Web/API/URL/createObjectURL_static), geben Sie auch ihr Interface an:

```js-nolint
URL.createObjectURL(object)
```

##### Mehrere Zeilen/Optionale Parameter

Methoden, die auf viele verschiedene Arten verwendet werden können, sollten in mehrere Zeilen aufgeteilt werden, um alle möglichen Variationen zu zeigen.

Jede Option sollte in einer eigenen Zeile stehen, wobei sowohl pro-Option-Kommentare als auch Zuweisungen weggelassen werden. Zum Beispiel hat {{jsxref("Array.prototype.slice()")}} zwei optionale Parameter und würde wie unten gezeigt dokumentiert werden:

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

Ähnlich für den {{jsxref("Date")}}-Konstruktor:

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

Formale Syntaxnotation (unter Verwendung von [BNF](https://en.wikipedia.org/wiki/Backus%E2%80%93Naur_form)) sollte nicht im Syntaxabschnitt verwendet werden — verwenden Sie stattdessen das erweiterte Mehrzeilenformat [oben beschrieben](#multiple_linesoptional_parameters).

Obwohl die formale Notation einen prägnanten Mechanismus zur Beschreibung komplexer Syntax bietet, ist sie vielen Entwicklern nicht bekannt und kann mit gültiger Syntax für bestimmte Programmiersprachen in Konflikt geraten. Zum Beispiel steht `[ ]` sowohl für einen "optional parameter" als auch für ein JavaScript {{jsxref("Array")}}. Sie können dies in der formalen Syntax für {{jsxref("Array.prototype.slice()")}} unten sehen:

```js-nolint
arr.slice([begin[, end]])
```

Für spezifische Fälle, in denen es als vorteilhaft angesehen wird, kann ein separater **Formal syntax** Abschnitt mit der formalen Benachrichtigung deklariert werden.

##### Prägnante Syntaxblöcke

Ziel ist es, den Syntaxblock so rein und unmissverständlich wie möglich zu gestalten - fügen Sie keine irrelevante Syntax ein. Zum Beispiel könnte man diese Syntaxform oft verwendet sehen, um Versprechen an vielen Stellen der Seite zu beschreiben:

```js-nolint
caches.match(request, options).then((response) => {
  // Do something with the response
})
```

Diese Version ist jedoch viel prägnanter und enthält nicht den überflüssigen Aufruf der Methode {{JSxRef("Promise.prototype.then()")}}:

```js-nolint
match(request, options)
```

##### Callback-Syntaxblöcke

Für Methoden, die eine Callback-Funktion akzeptieren, zeigen Sie den Callback als Parameter, nicht als Pfeilfunktion oder `function`-Ausdruck.

```js-nolint
filter(callbackFn)
filter(callbackFn, thisArg)
```

Dann listen Sie im Abschnitt "Parameters" die Parameter der Callback-Funktion auf und was sie zurückzugeben erwartet.

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

##### Syntax für beliebige Anzahl von Parametern

Für Methoden, die eine beliebige Anzahl von Parametern akzeptieren, wird der Syntaxblock so geschrieben:

```js-nolint
unshift()
unshift(element1)
unshift(element1, element2)
unshift(element1, element2, /* …, */ elementN)
```

Bevorzugen Sie die Nummerierung ab 1 zu beginnen, was es ermöglicht, Beschreibungen wie "`unshift` fügt N Elemente am Anfang des Arrays hinzu" sowie "das erste Element" (anstelle von "das nullte Element") zu schreiben.

Beachten Sie, dass der Fall der Übergabe von null Restparametern immer eingeschlossen ist, auch wenn es wenig Sinn macht. Schreiben Sie dann im Abschnitt "Parameters" Folgendes:

```md
- `element1`, …, `elementN`
  - : The elements to add to the front of the array.
```

Fügen Sie `\{{optional_inline}}` hier hinzu, wenn es Sinn macht, null Restparameter zu verwenden.

Ein weiteres Beispiel mit einigen Positionsparametern vor dem Restparameter:

```js-nolint
splice(start)
splice(start, deleteCount)
splice(start, deleteCount, item1)
splice(start, deleteCount, item1, item2)
splice(start, deleteCount, item1, item2, /* …, */ itemN)
```

#### Parameterabschnitt

Fügen Sie als nächstes einen "Parameters"-Unterabschnitt hinzu, der erklärt, was jeder Parameter sein sollte, in einer Beschreibungs-Liste. Parameter, die Objekte mit mehreren Mitgliedern sind, können eine verschachtelte Beschreibungs-Liste enthalten, die wiederum eine Erklärung dessen enthält, was jedes Mitglied sein sollte. Optionale Parameter sollten mit einem \\{{optional_inline}} Makroaufruf neben ihrem Namen im Beschreibungsterm markiert werden.

Der Name jedes Parameters in der Liste sollte in Markdown-Codeumrandungen `` ` ` `` enthalten sein.

> [!NOTE]
> Auch wenn das Feature keine Parameter benötigt, müssen Sie einen "Parameters"-Abschnitt einfügen, mit dem Inhalt "None".

#### Rückgabewert-Abschnitt

Fügen Sie als nächstes einen "Return value"-Unterabschnitt hinzu, der erklärt, was der Rückgabewert des Konstruktors oder der Methode ist. Siehe die obigen Links als Beispiele.

Wenn es keinen Rückgabewert gibt, verwenden Sie den folgenden Text:

None (\\{{jsxref("undefined")}}).

#### Ausnahme-Abschnitt

Fügen Sie schließlich einen "Exceptions"-Unterabschnitt hinzu, der erklärt, welche Ausnahmen ausgelöst werden können, wenn ein Problem beim Aufrufen des Konstruktors/der Methode auftritt. Dies könnte der Fall sein, weil ein Parametername falsch geschrieben wurde oder ihm ein falscher Datentyp-Wert gegeben wurde, weil es ein Problem mit der Umgebung gibt, in der es aufgerufen wird (z. B. der Versuch, ein nur in sicheren Kontexten verwendbares Feature in einem unsicheren Kontext auszuführen), oder aus einem anderen Grund.

Die Ermittlung, welche Ausnahmen von einer Methode ausgelöst werden, kann eine gründliche Durchsicht der Spezifikation erfordern. Ein Blick durch die Schritt-für-Schritt-Erklärung der Funktionsweise eines Features in der Spezifikation wird im Allgemeinen eine gute Liste der Ausnahmen und der Situationen, die zu ihrer Auslösung führen, bieten.

Die Namen und Erklärungen der Ausnahmen sollten in einer Beschreibungs-Liste enthalten sein.

> [!NOTE]
> Wenn auf dem Feature keine Ausnahmen ausgelöst werden können, müssen Sie keinen "Exceptions"-Abschnitt einfügen, aber Sie können ihn nach Wunsch mit dem Inhalt "None" einfügen.

### Eigenschaften

#### Wert-Abschnitt

Eigenschaften enthalten keinen Syntaxabschnitt. Stattdessen fügen Sie einen "Value"-Abschnitt hinzu, der eine Erklärung des Wertes der Eigenschaft enthält. Beschreiben Sie ihren Datentyp und ihren Zweck.

#### Ausnahme-Abschnitt

Wenn der Zugriff auf die Eigenschaft eine Ausnahme auslösen kann, fügen Sie einen "Exceptions"-Unterabschnitt hinzu, der jede Ausnahme erklärt; dieser sollte so eingerichtet werden, wie oben für Methoden und Konstruktoren beschrieben.

## JavaScript-Referenzsyntax

JavaScript-Referenzseiten für eingebaute Objekte folgen den gleichen grundlegenden Regeln wie API-Referenzseiten; z.B. für Methoden und Eigenschaften. Es gibt einige Unterschiede, die Sie möglicherweise beobachten:

- Für eingebaute Objekte mit einem einzigen Konstruktor ist die Konstruktorsyntax oft auf der Objekt-Landing-Page enthalten. Siehe {{JSxRef("Date")}} als Beispiel. Sie werden bemerken, dass statische Methoden (die auf dem `Date`-Objekt selbst existieren) unter "Methods" aufgelistet sind, während Instanzmethoden unter "Date.prototype methods" aufgelistet sind.
- Sie werden auch bemerken, dass Methoden, die keine Parameter/Ausnahmen haben, auf JavaScript-Referenzseiten diese Unterabschnitte oft gar nicht haben. Siehe {{JSxRef("Date.getDate()")}} und {{JSxRef("Date.now()")}} als Beispiele.

## CSS-Referenzsyntax

### Eigenschaften

CSS-Referenzseiten für Eigenschaften beinhalten einen "Syntax"-Abschnitt. Es folgt einem Live-Beispiel, das zeigt, was die Eigenschaft bewirkt. Bei Shorthand-Eigenschaften folgt es dem Abschnitt "Constituent properties".

Der "Syntax"-Abschnitt selbst beginnt mit einem Codeblock, der typische Deklarationen für die Eigenschaft veranschaulicht (siehe {{CSSxRef("animation")}} als Beispiel).

> [!NOTE]
> Wir tun dies, weil die formale Syntax von CSS komplex ist, nicht von vielen MDN-Lesern genutzt wird und für Anfänger abschreckend sein kann. Echte Syntax und Beispiele sind für den Großteil der Menschen nützlicher.

Innerhalb des "Syntax"-Abschnitts finden Sie die folgenden Unterabschnitte.

#### Werteabschnitt

Sie sollten einen "Values"-Abschnitt einschließen.

Dieser Abschnitt beginnt mit einem einleitenden Satz, der erklärt, wie der Wert der Eigenschaft konstruiert wird — ein einzelner Wert, ein oder zwei Werte, oder eine durch Leerzeichen oder Kommas getrennte Liste — zusammen mit jeglicher Einschränkung der Reihenfolge oder Kombination. Beginnen Sie diesen Satz mit "Diese Eigenschaft wird angegeben als" und enden Sie ihn mit einem Doppelpunkt, damit er in die Definition der CSS-Werttypen und Schlüsselwörter führt, die den Wert der Eigenschaft bilden. Zum Beispiel, der Bereich [Values](/de/docs/Web/CSS/Reference/Properties/font-style#values) der `font-style`-Eigenschaft führt seine Definitionsliste mit diesem Satz:

> Diese Eigenschaft wird als eines der folgenden Schlüsselwort-Werte angegeben. Das Schlüsselwort `oblique` kann optional von einem `<angle>` gefolgt werden:

In der Definitionsliste wird jeder Werttyp in spitze Klammern gesetzt und verlinkt auf die MDN-Referenzseite, die diesen Werttyp behandelt, wenn eine Seite dafür existiert. Ein Beispiel dazu finden Sie im "Values"-Abschnitt von {{CSSxRef("list-style-image")}}.

#### Formale Syntax

Der letzte Abschnitt, "Formal syntax", wird automatisch durch das Makro `\{{CSSSyntax}}` erzeugt. Dieses Makro ruft Daten aus den CSS-Spezifikationen mithilfe des [@webref/css npm package](https://www.npmjs.com/package/@webref/css) ab. Um die formale Syntax in Ihr Dokument aufzunehmen:

1. Fügen Sie eine Überschrift hinzu wie: `## Formal syntax`.
2. Platzieren Sie das Makro `\{{CSSSyntax}}` direkt unter dieser Überschrift.

### Selektoren

Der "Syntax"-Abschnitt von Selektor-Referenzseiten ist viel einfacher als der von Eigenschaft-Seiten. Er enthält einen Block, der mit dem "Syntax Box"-Stil gestaltet ist und die grundlegende Syntax des Selektors zeigt, sei es nur ein einfaches Schlüsselwort (z.B. {{CSSxRef(":hover")}}) oder ein komplexerer Funktionswert, der einen Parameter annimmt (z.B. {{CSSxRef(":not", ":not()")}}). Manchmal wird der Parameter in einem weiteren Eintrag innerhalb des Syntaxblocks erklärt (siehe {{CSSxRef(":nth-last-of-type", ":nth-last-of-type()")}} als Beispiel).

Dieser Block wird automatisch aus den in der [MDN data repo](https://github.com/mdn/data) enthaltenen Daten über das CSS-Verzeichnis generiert. Sie müssen nur einen `CSSSyntax` Makroaufruf unter dem Titel einfügen, und er kümmert sich um den Rest.

Die einzige Komplikation ergibt sich aus der Sicherstellung, dass die benötigten Daten vorhanden sind. Die Datei [selectors.json](https://github.com/mdn/data/blob/main/css/selectors.json) muss einen Eintrag für den dokumentierten Selektor enthalten.

Sie müssen dies tun, indem Sie das [MDN data repo](https://github.com/mdn/data) forken, Ihren Fork lokal klonen, die Änderungen in einem neuen Branch vornehmen und dann einen Pull Request gegen das Upstream-Repo einreichen. Sie können [hier mehr Details zur Verwendung von Git finden](/de/docs/MDN/Writing_guidelines/Page_structures/Compatibility_tables).

## HTML-Referenzsyntax

HTML-Referenzseiten haben keine "Syntax"-Abschnitte — die Syntax ist immer nur der Elementname, umgeben von spitzen Klammern, daher ist sie nicht nötig. Das Wichtigste, was Sie über HTML-Elemente wissen müssen, ist, welche Attribute sie annehmen und welche Werte sie annehmen können, und dies wird in einem separaten "Attributes"-Abschnitt behandelt. Siehe {{htmlelement("ol")}} und {{htmlelement("video")}} als Beispiele.

## HTTP-Referenzsyntax

HTTP-Referenzsyntax ist vollständig manuell erstellt und variiert je nach dem HTTP-Feature, das dokumentiert wird.

### HTTP-Header/Content-Security-Policy

HTTP-Header-Syntax (und Content-Security-Policy) wird in zwei separaten Abschnitten auf der Seite dokumentiert — "Syntax" und "Directives".

#### Syntax-Abschnitt

Der "Syntax"-Abschnitt zeigt, wie die Syntax eines Headers aussieht, mithilfe eines Syntaxblocks mit dem "Syntax Box"-Stil, inklusive formaler Syntax, um genau zu zeigen, welche Direktiven im Wert enthalten sein können, in welcher Reihenfolge, usw. Zum Beispiel sieht der Syntaxblock des {{HTTPHeader("If-None-Match")}} Headers so aus:

```http
If-None-Match: <etag_value>
If-None-Match: <etag_value>, <etag_value>, …
If-None-Match: *
```

Einige Header haben separate Anforderungsdirektiven, Antwortdirektiven und Erweiterungssyntax. Wenn verfügbar, müssen sie in separaten Syntaxblöcken enthalten sein, jeweils unter ihrem eigenen Unterabschnitt. Siehe {{HTTPHeader("Cache-Control")}} für ein Beispiel.

#### Direktiven-Abschnitt

Der "Directive"-Abschnitt enthält eine Beschreibungs-Liste, die die Namen und Beschreibungen aller Direktiven enthält, die in der Syntax erscheinen können.

### HTTP-Anforderungsmethoden

Die Syntax von Anforderungsmethoden ist wirklich einfach und enthält nur einen Syntaxblock mit dem "Syntax Box"-Stil, der zeigt, wie die Methodensyntax strukturiert ist. Die Syntax für die [GET-Methode](/de/docs/Web/HTTP/Reference/Methods/GET) sieht so aus:

```http
GET /index.html
```

### HTTP-Statuscodes

Auch hier ist die Syntax für HTTP-Statuscodes sehr einfach — ein Syntaxblock mit dem Code und Namen. Zum Beispiel:

```http
404 Not Found
```

## SVG-Referenzsyntax

### SVG-Elemente

Syntaxabschnitte für SVG-Elemente existieren nicht — genau wie Syntaxabschnitte für HTML-Elemente. Jede SVG-Elementreferenzseite enthält nur eine Liste der Attribute, die auf dieses Element angewendet werden können. Siehe {{SVGElement("feTile")}} für ein Beispiel.

### SVG-Attribute

Referenzseiten für SVG-Attribute enthalten ebenfalls keine Syntaxabschnitte.

## Siehe auch

- [Markdown in MDN](/de/docs/MDN/Writing_guidelines/Howto/Markdown_in_MDN#example_code_blocks)
