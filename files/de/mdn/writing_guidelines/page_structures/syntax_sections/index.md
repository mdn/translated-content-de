---
title: Syntaxabschnitte
slug: MDN/Writing_guidelines/Page_structures/Syntax_sections
l10n:
  sourceCommit: 9df96dcad40bf97f66b317ef6b6bbe64444569eb
---

{{MDNSidebar}}

Der Syntaxabschnitt einer MDN-Referenzseite enthält ein Syntaxfeld, das die genaue Syntax eines Features definiert (z. B. welche Parameter es akzeptieren kann, welche optional sind). Dieser Artikel erklärt, wie man Syntaxfelder für Referenzartikel schreibt.

## API-Referenzsyntax

Syntaxabschnitte für API-Referenzseiten werden manuell erstellt und können je nach dokumentiertem Feature leicht variieren. Der Abschnitt beginnt mit einer Überschrift (typischerweise Überschrift der Ebene zwei `##`) mit dem Namen "Syntax" und muss am Anfang der Referenzseite (direkt unter dem einführenden Material) enthalten sein. Unter der Überschrift befindet sich ein Codeblock, der die genaue Syntax des Features zeigt, eingerahmt durch Code-Begrenzung mit ` ```[markup-language] ` Klasse.

Das untenstehende Beispiel zeigt den Markdown-Code für einen typischen Syntaxabschnitt (für eine JavaScript-Funktion):

````md
## Syntax

```js-nolint
slice()
slice(start)
slice(start, end)
```
````

> [!NOTE]
> Die in diesem Fall verwendete Markup-Sprache ist `js-nolint`, wobei `js` anzeigt, dass JavaScript-Syntaxhervorhebung verwendet werden sollte. Für JavaScript-Syntaxabschnitte ist `-nolint` ebenfalls erforderlich, da der Syntaxabschnitt absichtlich nicht "ganz" JavaScript ist und wir nicht möchten, dass der Linter es "korrigiert" (Rückgabewerte und Semikolons am Ende der Zeilen werden ausgelassen).

### Allgemeine Stilregeln

Einige Regeln, die innerhalb des Syntaxblocks in Bezug auf Markup zu befolgen sind:

- Beenden Sie eine Zeile **nicht** mit einem Semikolon `;`. Syntaxabschnitte sollen keinen ausführbaren Code zeigen. Daher macht es keinen Sinn, Semikolons zu zeigen.
- Verwenden Sie **nicht** `<code>` innerhalb des Syntaxblocks (oder innerhalb eines beliebigen Codebeispielblocks auf MDN). Es ist nicht nur generell nutzlos, sondern unser Markup benötigt es nicht und wird nicht so gerendert, wie Sie es möchten, wenn Sie es einfügen.
- Geben Sie nur die Funktion und Argumente an. Unten finden Sie ein Beispiel für "korrigierte" Beispiele

  ```js-nolint
  querySelector(selector)
  // responseStr = element.querySelector(selector)

  new IntersectionObserver(callback, options)
  // const observer = new IntersectionObserver(callback, options)
  ```

### Konstruktoren und Methoden

#### Syntaxblock

Beginnen Sie mit einem Syntaxblock, wie diesem (von der Seite des [`IntersectionObserver()`](/de/docs/Web/API/IntersectionObserver/IntersectionObserver) Konstruktors):

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

Methoden, die auf viele verschiedene Arten verwendet werden können, sollten in mehrere Zeilen erweitert werden, die alle möglichen Variationen zeigen.

Jede Option sollte auf einer eigenen Zeile stehen, wobei sowohl pro Option Kommentare als auch Zuweisungen weggelassen werden. Zum Beispiel hat {{jsxref("Array.prototype.slice()")}} zwei optionale Parameter und würde wie unten gezeigt dokumentiert werden:

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

Ähnlich für den {{jsxref("Date")}} Konstruktor:

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

Formale Syntaxnotation (unter Verwendung von [BNF](https://en.wikipedia.org/wiki/Backus%E2%80%93Naur_form)) sollte nicht im Syntaxabschnitt verwendet werden — stattdessen verwenden Sie das erweiterte Mehrzeilenformat [oben beschrieben](#multiple_linesoptional_parameters).

Obwohl die formale Notation einen prägnanten Mechanismus zur Beschreibung komplexer Syntax bietet, ist sie vielen Entwicklern nicht vertraut und kann mit gültiger Syntax für bestimmte Programmiersprachen _kollidieren_. Zum Beispiel zeigt `[ ]` sowohl einen "optional parameter" als auch ein JavaScript {{jsxref("Array")}}. Dies ist in der formalen Syntax für {{jsxref("Array.prototype.slice()")}} unten zu sehen:

```js-nolint
arr.slice([begin[, end]])
```

In spezifischen Fällen, in denen es als vorteilhaft angesehen wird, kann ein separater **Formaler Syntax** Abschnitt mit der formalen Benachrichtigung deklariert werden.

##### Prägnante Syntaxblöcke

Das Ziel ist es, den Syntaxblock so rein und unmissverständlich wie möglich als Definition der Feature-Syntax zu machen — fügen Sie keine irrelevante Syntax ein. Zum Beispiel könnte diese Syntaxform an vielen Stellen auf der Website verwendet werden, um Promises zu beschreiben:

```js-nolint
caches.match(request, options).then(function (response) {
  // Do something with the response
})
```

Aber diese Version ist viel prägnanter und enthält nicht den überflüssigen {{JSxRef("Promise.prototype.then()")}} Methodenaufruf:

```js-nolint
match(request, options)
```

##### Callback-Syntaxblöcke

Für Methoden, die eine Callback-Funktion akzeptieren, zeigen Sie den Callback als Parameter, nicht als Pfeilfunktion oder `function` Ausdruck.

```js-nolint
filter(callbackFn)
filter(callbackFn, thisArg)
```

Dann listen Sie im "Parameter"-Abschnitt die Parameter der Callback-Funktion und was sie zurückgeben sollte.

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

Für Methoden, die eine beliebige Anzahl von Parametern akzeptieren, wird der Syntaxblock folgendermaßen geschrieben:

```js-nolint
unshift()
unshift(element1)
unshift(element1, element2)
unshift(element1, element2, /* …, */ elementN)
```

Bevorzugen Sie den Beginn der Nummerierung bei 1, was das Schreiben einer Beschreibung wie "`unshift` fügt N Elemente am Anfang des Arrays hinzu", sowie "das erste Element" (statt "das nullte Element") ermöglicht.

Beachten Sie, dass der Fall des Übergebens von null Restparametern immer enthalten ist, auch wenn er wenig Sinn ergibt. Schreiben Sie dann im "Parameter"-Abschnitt Folgendes:

```md
- `element1`, …, `elementN`
  - : The elements to add to the front of the array.
```

Fügen Sie `\{{optional_inline}}` hier ein, wenn das Übergeben von null Restparametern sinnvoll ist.

Ein weiteres Beispiel mit einigen positionsabhängigen Parametern vor dem Restparameter:

```js-nolint
splice(start)
splice(start, deleteCount)
splice(start, deleteCount, item1)
splice(start, deleteCount, item1, item2)
splice(start, deleteCount, item1, item2, /* …, */ itemN)
```

#### Parameter Abschnitt

Fügen Sie anschließend einen "Parameter" Unterabschnitt hinzu, der erklärt, was jeder Parameter sein sollte, in einer Beschreibungslistenformat. Parameter, die Objekte sind, die mehrere Mitglieder enthalten, können eine verschachtelte Beschreibungslistenformat enthalten, die wiederum eine Erklärung dessen enthält, was jedes Mitglied sein sollte. Optionale Parameter sollten mit einem \\{{optional_inline}} Makro-Aufruf neben ihrem Namen im Beschreibungsausdruck gekennzeichnet sein.

Der Name jedes Parameters in der Liste sollte in Markdown-Code Begrenzungsnotation `` ` ` `` enthalten sein.

> [!NOTE]
> Selbst wenn das Feature keine Parameter akzeptiert, müssen Sie einen "Parameter"-Abschnitt aufnehmen, mit dem Inhalt "None".

#### Rückgabewert Abschnitt

Fügen Sie als Nächstes einen "Rückgabewert" Unterabschnitt hinzu, der erklärt, was der Rückgabewert des Konstruktors oder der Methode ist. Siehe die obigen Links als Beispiele.

Wenn es keinen Rückgabewert gibt, verwenden Sie folgenden Text:

None (\\{{jsxref("undefined")}}).

#### Ausnahmen Abschnitt

Schließlich fügen Sie einen "Ausnahmen" Unterabschnitt hinzu, der erklärt, welche Ausnahmen geworfen werden können, wenn ein Problem beim Aufruf des Konstruktors/der Methode auftritt. Dies könnte sein, weil ein Parametername falsch geschrieben wurde oder er mit einem falschen Datentypwert versehen wurde, weil es ein Problem mit der Umgebung gibt, in der es aufgerufen wird (zum Beispiel der Versuch, eine nur für sichere Kontexte vorgesehene Funktion in einem unsicheren Kontext auszuführen), oder aus einem anderen Grund.

Die Bestimmung, welche Ausnahmen von einer Methode geworfen werden, kann eine gründliche Durchsicht der Spezifikation erfordern. Das Durchlaufen der schrittweisen Erklärung der Funktionsweise eines Features in der Spezifikation wird im Allgemeinen eine solide Liste der Ausnahmen und der Situationen liefern, die sie auslösen.

Die Ausnahmenamen und Erklärungen sollten in einer Beschreibungslistenformat enthalten sein.

> [!NOTE]
> Wenn keine Ausnahmen bei dem Feature auftreten können, müssen Sie keinen "Ausnahmen" Abschnitt einfügen, können ihn aber mit dem Inhalt "None" einfügen, wenn Sie möchten.

### Eigenschaften

#### Wert Abschnitt

Eigenschaften enthalten keinen Syntaxabschnitt. Fügen Sie stattdessen einen "Wert" Abschnitt hinzu, der eine Erklärung des Werts der Eigenschaft enthält. Beschreiben Sie ihren Datentyp und ihren Zweck.

#### Ausnahmen Abschnitt

Wenn der Zugriff auf die Eigenschaft eine Ausnahme auslösen kann, fügen Sie einen "Ausnahmen" Unterabschnitt hinzu, der jede Ausnahme erklärt; dieser sollte genauso eingerichtet sein wie der, der oben für Methoden und Konstruktoren beschrieben wurde.

## JavaScript-Referenzsyntax

JavaScript-Eingebaute-Objekte-Referenzseiten folgen den gleichen grundlegenden Regeln wie API-Referenzseiten; z. B. für Methoden und Eigenschaften. Es gibt einige Unterschiede, die Sie möglicherweise beobachten:

- Für eingebaute Objekte mit einem einzelnen Konstruktor wird die Konstruktorsyntax oft auf der Objekt-Startseite enthalten. Siehe {{JSxRef("Date")}} als Beispiel. Sie werden feststellen, dass statische Methoden (die auf dem `Date` Objekt selbst existieren) unter "Methoden" aufgelistet sind, während Instanzmethoden unter "Date.prototype-Methoden" aufgelistet sind.
- Sie werden auch feststellen, dass Methoden, die keine Parameter/Ausnahmen besitzen, eher dazu neigen, dass diese Unterabschnitte überhaupt nicht auf JavaScript-Referenzseiten enthalten sind. Siehe {{JSxRef("Date.getDate()")}} und {{JSxRef("Date.now()")}} als Beispiele.

## CSS-Referenzsyntax

### Eigenschaften

CSS-Eigenschaften-Referenzseiten enthalten einen "Syntax"-Abschnitt, der früher oben auf der Seite zu finden war, aber zunehmend häufiger unter einem Abschnitt enthalten ist, der einen Codeblock zeigt, der die typische Verwendung des Features zeigt, plus ein Live-Beispiel zur Veranschaulichung dessen, was das Feature tut (siehe {{CSSxRef("animation")}} als Beispiel).

> [!NOTE]
> Wir machen dies, weil CSS formale Syntax komplex ist, nicht von vielen MDN-Lesern verwendet wird, und abschreckend für Anfänger ist. Echte Syntax und Beispiele sind für die Mehrheit der Leute nützlicher.

Im Syntaxabschnitt finden Sie die folgenden Inhalte.

#### Optionaler Erklärungstext

Einige CSS-Eigenschaften sind selbsterklärend und benötigen keine zusätzliche Erklärung (zum Beispiel {{CSSxRef("color")}}). Einige hingegen sind komplexer und benötigen Erklärungen zur Syntaxreihenfolge, einschließlich mehrerer Werte usw. (siehe {{CSSxRef("animation")}}). In solchen Fällen können Sie eine zusätzliche Erklärung vor den Unterabschnitten einfügen.

#### Wert Abschnitt

Als nächstes sollten Sie einen "Wert" Abschnitt hinzufügen — dies enthält eine Beschreibungslistenformat, die die CSS-Wertetypen erklärt, die den Wert der Eigenschaft ausmachen. Jeder Wertetyp sollte in spitze Klammern eingewickelt und mit der MDN-Referenzseite verlinkt sein, die diesen Wertetyp behandelt, wenn eine Seite dafür existiert. Siehe zum Beispiel die {{CSSxRef("border")}} Eigenschaftsreferenz — diese referenziert drei Wertetypen, von denen nur einer verlinkt ist ({{CSSxRef("&lt;color&gt;")}}).

#### Formale Syntax

Der letzte Abschnitt, "Formale Syntax", wird automatisch aus den im [MDN-Daten-Repository](https://github.com/mdn/data) enthaltenen Daten im CSS-Verzeichnis generiert. Sie müssen lediglich einen `CSSSyntax` Makro-Aufruf unter dem Titel einfügen, und dieser kümmert sich um den Rest.

Die einzige Komplikation ergibt sich daraus, sicherzustellen, dass die benötigten Daten vorhanden sind. Die [properties.json](https://github.com/mdn/data/blob/main/css/properties.json) Datei muss einen Eintrag für die Eigenschaft enthalten, die Sie dokumentieren, und die [types.json](https://github.com/mdn/data/blob/main/css/types.json) Datei muss einen Eintrag für alle der Wertetypen enthalten, die im Wert der Eigenschaft verwendet werden.

Sie müssen dies tun, indem Sie das [MDN-Daten-Repository](https://github.com/mdn/data) forken, Ihren Fork lokal klonen, die Änderungen in einem neuen Zweig vornehmen und dann eine Pull-Anfrage gegen das Upstream-Repo einreichen. Sie können [hier mehr Details über die Verwendung von Git finden](/de/docs/MDN/Writing_guidelines/Page_structures/Compatibility_tables).

### Selektoren

Der "Syntax" Abschnitt der Selektor-Referenzseiten ist viel einfacher als der von Eigenschaften-Seiten. Er enthält einen Block, der mit dem "Syntax Box"-Stil gestaltet ist, der die grundlegende Syntax des Selektors zeigt, sei es nur ein einfaches Schlüsselwort (z. B. {{CSSxRef(":hover")}}), oder ein komplexerer Funktionswert, der einen Parameter übernimmt (z. B. {{CSSxRef(":not", ":not()")}}). Manchmal wird der Parameter in einem weiteren Eintrag innerhalb des Syntaxblocks erklärt (siehe {{CSSxRef(":nth-last-of-type", ":nth-last-of-type()")}} für ein Beispiel).

Dieser Block wird automatisch aus den im [MDN-Daten-Repository](https://github.com/mdn/data) enthaltenen Daten im CSS-Verzeichnis generiert. Sie müssen lediglich einen `CSSSyntax` Makro-Aufruf unter dem Titel einfügen, und dieser kümmert sich um den Rest.

Die einzige Komplikation ergibt sich daraus, sicherzustellen, dass die benötigten Daten vorhanden sind. Die [selectors.json](https://github.com/mdn/data/blob/main/css/selectors.json) Datei muss einen Eintrag für den Selektor enthalten, den Sie dokumentieren.

Sie müssen dies tun, indem Sie das [MDN-Daten-Repository](https://github.com/mdn/data) forken, Ihren Fork lokal klonen, die Änderungen in einem neuen Zweig vornehmen und dann eine Pull-Anfrage gegen das Upstream-Repo einreichen. Sie können [hier mehr Details über die Verwendung von Git finden](/de/docs/MDN/Writing_guidelines/Page_structures/Compatibility_tables).

## HTML-Referenzsyntax

HTML-Referenzseiten haben keine "Syntax"-Abschnitte — die Syntax ist immer nur der Elementname, der in spitze Klammern eingeschlossen ist, daher ist sie nicht erforderlich. Das Hauptsächliche, das Sie über HTML-Elemente wissen müssen, ist, welche Attribute sie akzeptieren und welche Werte diese haben können, und dies ist in einem separaten "Attribute"-Abschnitt behandelt. Siehe {{htmlelement("ol")}} und {{htmlelement("video")}} für Beispiele.

## HTTP-Referenzsyntax

HTTP-Referenzsyntax wird vollständig manuell erstellt und unterscheidet sich je nachdem, welchen Typ von HTTP-Feature Sie dokumentieren.

### HTTP-Header/Content-Security-Policy

HTTP-Header-Syntax (und Content-Security-Policy) wird in zwei separaten Abschnitten auf der Seite dokumentiert — "Syntax" und "Direktiven".

#### Syntax Abschnitt

Der "Syntax" Abschnitt zeigt, wie die Syntax eines Headers aussehen wird, indem ein Syntaxblock verwendet wird, der mit dem "Syntax Box"-Stil gestaltet ist, einschließlich formaler Syntax, um genau zu zeigen, welche Direktiven im Wert enthalten sein können, in welcher Reihenfolge usw. Zum Beispiel sieht der Syntaxblock des {{HTTPHeader("If-None-Match")}} Headers so aus:

```http
If-None-Match: <etag_value>
If-None-Match: <etag_value>, <etag_value>, …
If-None-Match: *
```

Einige Header werden separate Anforderungsdirektiv-, Antwortdirektiv- und Erweiterungssyntaxen haben. Wenn verfügbar, müssen diese in separaten Syntaxblöcken enthalten sein, jeweils unter ihrem eigenen Unterabschnitt. Siehe {{HTTPHeader("Cache-Control")}} für ein Beispiel.

#### Direktiven Abschnitt

Der "Direktiven" Abschnitt enthält eine Beschreibungslistenformat, das die Namen und Beschreibungen aller Direktiven enthält, die innerhalb der Syntax erscheinen können.

### HTTP-Anfragemethoden

Die Syntax der Anfragemethode ist wirklich einfach, sie enthält nur einen Syntaxblock, der mit dem "Syntax Box"-Stil gestaltet ist und zeigt, wie die Methodensyntax strukturiert ist. Die Syntax für die [GET-Methode](/de/docs/Web/HTTP/Methods/GET) sieht so aus:

```http
GET /index.html
```

### HTTP-Antwortstatuscodes

Wiederum ist die Syntax für HTTP-Antwortstatuscodes sehr einfach — ein Syntaxblock, der den Code und Namen enthält. Zum Beispiel:

```http
404 Not Found
```

## SVG-Referenzsyntax

### SVG-Elemente

SVG-Elementsyntaxabschnitte sind nicht existent — genau wie HTML-Elementsyntaxabschnitte. Jede SVG-Elementreferenzseite enthält einfach eine Liste der Attribute, die auf dieses Element angewendet werden können. Siehe {{SVGElement("feTile")}} für ein Beispiel.

### SVG-Attribute

SVG-Attributreferenzseiten enthalten ebenfalls keine Syntaxabschnitte.

## Siehe auch

- [Markdown auf MDN](/de/docs/MDN/Writing_guidelines/Howto/Markdown_in_MDN#example_code_blocks)
