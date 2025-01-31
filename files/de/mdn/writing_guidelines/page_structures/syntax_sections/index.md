---
title: Syntaxabschnitte
slug: MDN/Writing_guidelines/Page_structures/Syntax_sections
l10n:
  sourceCommit: 719645a32546d9e514ac530a5eb66aa4c26d4f51
---

Der Syntaxabschnitt einer MDN-Referenzseite enthält eine Syntaxbox, die die genaue Syntax definiert, die ein Feature hat (z. B. welche Parameter es akzeptieren kann, welche optional sind?). Dieser Artikel erklärt, wie man Syntaxboxen für Referenzartikel schreibt.

## API-Referenzsyntax

Syntaxabschnitte für API-Referenzseiten werden manuell geschrieben und können je nach dokumentierter Funktion möglicherweise leicht variieren.
Der Abschnitt beginnt mit einer Überschrift (typischerweise eine Überschrift der Stufe zwei `##`) namens "Syntax" und muss oben auf der Referenzseite eingefügt werden (direkt unter dem Einleitungsmaterial).
Unter der Überschrift befindet sich ein Codeblock, der die genaue Syntax des Features zeigt, gekennzeichnet durch die Codeumrandung ` ```[markup-language] ` Klasse.

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
> Die in diesem Fall verwendete Auszeichnungssprache ist `js-nolint`, wobei `js` anzeigt, dass JavaScript-Syntaxhervorhebung verwendet werden soll.
> Für JavaScript-Syntaxabschnitte ist `-nolint` ebenfalls erforderlich, da der Syntaxabschnitt absichtlich nicht ganz "JavaScript" ist und wir nicht möchten, dass der Linter ihn "korrigiert" (Rückgabewerte und Semikolons am Ende der Zeile weggelassen).

### Allgemeine Stilregeln

Einige Regeln, die in Bezug auf die Auszeichnung im Syntaxblock zu befolgen sind:

- Beenden Sie **nicht** eine Zeile mit Semikolon `;`. Syntaxabschnitte sollen keinen ausführbaren Code zeigen. Es macht also keinen Sinn, Semikolons anzuzeigen.
- Verwenden Sie **nicht** \<code> innerhalb des Syntaxblocks (oder innerhalb eines beliebigen Codebeispielblocks auf MDN). Es ist nicht nur grundsätzlich nutzlos, sondern unser Markup möchte es nicht und wird nicht so gerendert, wie Sie es möchten, wenn Sie es einbeziehen.
- Geben Sie nur die Funktion und die Argumente an. Beispiel, das "korrigierte" Beispiele zeigt unten

  ```js-nolint
  querySelector(selector)
  // responseStr = element.querySelector(selector)

  new IntersectionObserver(callback, options)
  // const observer = new IntersectionObserver(callback, options)
  ```

### Konstruktoren und Methoden

#### Syntaxblock

Beginnen Sie mit einem Syntaxblock wie diesem (von der Seite des [`IntersectionObserver()`](/de/docs/Web/API/IntersectionObserver/IntersectionObserver)-Konstruktors):

```js-nolint
new IntersectionObserver(callback, options)
```

oder diesem (von [`Document.hasStorageAccess()`](/de/docs/Web/API/Document/hasStorageAccess)):

```js-nolint
hasStorageAccess()
```

Wenn die Methode statisch ist, zum Beispiel [`URL.createObjectURL()`](/de/docs/Web/API/URL/createObjectURL_static), dann geben Sie auch ihre Schnittstelle an:

```js-nolint
URL.createObjectURL(object)
```

##### Mehrere Zeilen/Optionale Parameter

Methoden, die auf viele verschiedene Arten verwendet werden können, sollten in mehrere Zeilen erweitert werden, die alle möglichen Variationen zeigen.

Jede Option sollte in einer eigenen Zeile stehen, wobei sowohl Kommentare zu den Optionen als auch die Zuweisung weggelassen werden. Zum Beispiel hat {{jsxref("Array.prototype.slice()")}} zwei optionale Parameter und würde wie unten gezeigt dokumentiert werden:

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

Formale Syntaxnotation (unter Verwendung von [BNF](https://de.wikipedia.org/wiki/Backus-Naur-Form)) sollte im Syntaxabschnitt nicht verwendet werden — stattdessen das oben beschriebene erweiterte mehrzeilige Format verwenden.

Während die formale Notation einen prägnanten Mechanismus zum Beschreiben komplexer Syntax bietet, ist sie vielen Entwicklern nicht vertraut und könnte mit gültiger Syntax für bestimmte Programmiersprachen _in Konflikt_ geraten. Zum Beispiel gibt `[ ]` sowohl einen "optionalen Parameter" als auch ein JavaScript {{jsxref("Array")}} an. Sie können dies in der formalen Syntax für {{jsxref("Array.prototype.slice()")}} unten sehen:

```js-nolint
arr.slice([begin[, end]])
```

Für spezifische Fälle, in denen es als vorteilhaft angesehen wird, kann ein separater **Formal Syntax**-Abschnitt mit der formalen Benachrichtigung deklariert werden.

##### Prägnante Syntaxblöcke

Das Ziel ist es, den Syntaxblock so rein und unmissverständlich wie möglich als Definition der Syntax des Features zu machen — keine irrelevante Syntax einschließen. Zum Beispiel sehen Sie möglicherweise diese Syntaxform, die an vielen Stellen der Website verwendet wird, um Promises zu beschreiben:

```js-nolint
caches.match(request, options).then(function (response) {
  // Do something with the response
})
```

Aber diese Version ist viel prägnanter und enthält nicht den überflüssigen {{JSxRef("Promise.prototype.then()")}}-Methodenaufruf:

```js-nolint
match(request, options)
```

##### Rückrufsyntaxblöcke

Für Methoden, die eine Rückruffunktion akzeptieren, zeigen Sie den Rückruf als Parameter und nicht als Pfeilfunktion oder `function`-Ausdruck.

```js-nolint
filter(callbackFn)
filter(callbackFn, thisArg)
```

Dann listen Sie im Abschnitt "Parameter" die Parameter der Rückruffunktion auf und was erwartet wird, dass sie zurückgibt.

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

Bevorzugen Sie die Nummernbeginn ab 1, was es ermöglicht, Beschreibungen wie "`unshift` fügt N Elemente am Anfang des Arrays hinzu" sowie "das erste Element" (statt "das nullte Element") zu schreiben.

Beachten Sie, dass immer der Fall einbezogen wird, ohne Restparameter zu übergeben, selbst wenn es wenig Sinn ergibt. Schreiben Sie dann im Abschnitt "Parameter" dies:

```md
- `element1`, …, `elementN`
  - : The elements to add to the front of the array.
```

Fügen Sie hier `\{{optional_inline}}` hinzu, wenn es sinnvoll ist, ohne Restparameter zu übergeben.

Ein weiteres Beispiel mit einigen Positionsparametern vor dem Restparameter:

```js-nolint
splice(start)
splice(start, deleteCount)
splice(start, deleteCount, item1)
splice(start, deleteCount, item1, item2)
splice(start, deleteCount, item1, item2, /* …, */ itemN)
```

#### Parameterabschnitt

Als Nächstes schließen Sie einen "Parameter"-Unterabschnitt ein, der erklärt, was jeder Parameter sein sollte, in einer Beschreibungsauflistung. Parameter, die Objekte mit mehreren Mitgliedern sind, können eine verschachtelte Beschreibungsauflistung enthalten, die wiederum eine Erklärung enthält, was jedes Mitglied sein sollte. Optionale Parameter sollten mit einem \\{{optional_inline}}-Makroaufruf neben ihrem Namen im Beschreibungsterm markiert werden.

> [!NOTE]
> Selbst wenn das Feature keine Parameter akzeptiert, müssen Sie einen "Parameter"-Abschnitt einfügen, mit dem Inhalt "Keine".

#### Rückgabewertabschnitt

Als Nächstes fügen Sie einen "Rückgabewert"-Unterabschnitt ein, der erklärt, was der Rückgabewert des Konstruktors oder der Methode ist. Siehe die obigen Links als Beispiele.

Wenn es keinen Rückgabewert gibt, verwenden Sie den folgenden Text:

Keine (\\{{jsxref("undefined")}}).

#### Ausnahmeabschnitt

Abschließend fügen Sie einen "Ausnahmen"-Unterabschnitt ein, der erklärt, welche Ausnahmen geworfen werden können, wenn beim Aufrufen des Konstruktors/der Methode ein Problem auftritt. Dies könnte sein, weil ein Parametername falsch geschrieben wurde oder er einen Wert des falschen Datentyps erhalten hat, weil es ein Problem mit der Umgebung gibt, in der er aufgerufen wird (z. B. der Versuch, ein nur in sicheren Kontexten verfügbares Feature in einem nicht sicheren Kontext auszuführen), oder aus einem anderen Grund.

Es kann erforderlich sein, sich die Spezifikation genau anzusehen, um festzustellen, welche Ausnahmen von einer Methode geworfen werden. Das Durchlesen der Schritt-für-Schritt-Erklärung der Spezifikation, wie ein Feature funktioniert, bietet in der Regel eine solide Liste von Ausnahmen und die Situationen, die sie verursachen, in denen sie geworfen werden.

Die Namen und Erklärungen der Ausnahmen sollten in einer Beschreibungsauflistung enthalten sein.

> [!NOTE]
> Wenn keine Ausnahmen bei dem Feature auftreten können, müssen Sie keinen Abschnitt "Ausnahmen" einfügen, aber Sie können, falls gewünscht, ihn mit dem Inhalt "Keine" hinzufügen.

### Eigenschaften

#### Wertabschnitt

Eigenschaften enthalten keinen Syntaxabschnitt. Stattdessen fügen Sie einen "Wert"-Abschnitt ein, der eine Erklärung des Werts der Eigenschaft enthält. Beschreiben Sie ihren Datentyp und ihren Zweck.

#### Ausnahmeabschnitt

Wenn der Zugriff auf die Eigenschaft eine Ausnahme auslösen kann, fügen Sie einen "Ausnahmen"-Unterabschnitt hinzu, der jede Ausnahme erklärt; dieser sollte genau so eingerichtet werden wie oben für Methoden und Konstruktoren beschrieben.

## JavaScript-Referenzsyntax

JavaScript-Referenzseiten für eingebaute Objekte folgen denselben grundlegenden Regeln wie API-Referenzseiten; zum Beispiel für Methoden und Eigenschaften. Es gibt einige Unterschiede, die Sie möglicherweise beachten:

- Für eingebaute Objekte mit einem einzigen Konstruktor wird der Konstruktorsyntax häufig auf der Objektstartseite eingefügt. Siehe {{JSxRef("Date")}} zum Beispiel. Sie werden feststellen, dass statische Methoden (die auf dem `Date`-Objekt selbst existieren) unter "Methods" aufgeführt sind, während Instanzmethoden unter "Date.prototype methods" aufgeführt sind.
- Sie werden auch feststellen, dass Methoden, die keine Parameter/Ausnahmen haben, auf JavaScript-Referenzseiten häufiger keine Abschnitte enthalten. Siehe {{JSxRef("Date.getDate()")}} und {{JSxRef("Date.now()")}} als Beispiele.

## CSS-Referenzsyntax

### Eigenschaften

CSS-Eigenschaftsreferenzseiten enthalten einen "Syntax"-Abschnitt, der früher oben auf der Seite zu finden war, aber zunehmend häufiger unter einem Abschnitt zu finden ist, der einen Codeblock zeigt, der typische Nutzung des Features zeigt, plus ein Live-Beispiel, um zu veranschaulichen, was das Feature tut (siehe {{CSSxRef("animation")}} zum Beispiel).

> [!NOTE]
> Wir machen das, weil die formale CSS-Syntax komplex ist, von vielen der MDN-Leserschaft nicht verwendet wird und für Anfänger abschreckend ist. Echte Syntax und Beispiele sind für die Mehrheit der Menschen nützlicher.

Im Syntaxabschnitt finden Sie folgenden Inhalt.

#### Optionaler Erklärungstext

Einige CSS-Eigenschaften sind selbsterklärend und benötigen keine zusätzliche Erklärung (zum Beispiel {{CSSxRef("color")}}). Einige hingegen sind komplexer und benötigen eine Erklärung zur Syntaxreihenfolge, einschließlich mehrerer Werte usw. (siehe {{CSSxRef("animation")}}). In solchen Fällen können Sie vor den Unterabschnitten zusätzliche Erklärungen einfügen.

#### Werteabschnitt

Anschließend sollten Sie einen "Werte"-Abschnitt einfügen — dieser enthält eine Beschreibungsauflistung, die die CSS-Wertetypen erklärt, die den Wert der Eigenschaft bilden. Jeder Werttyp sollte in Winkelklammern eingeschlossen und auf die MDN-Referenzseite verlinkt werden, die diesen Werttyp behandelt, wenn eine Seite dafür existiert. Siehe zum Beispiel die {{CSSxRef("border")}}-Eigenschaftsreferenz — diese referenziert drei Werttypen, von denen nur einer verlinkt ist ({{CSSxRef("&lt;color&gt;")}}).

#### Formale Syntax

Der letzte Abschnitt, "Formale Syntax", wird automatisch aus den Daten im [MDN data repo](https://github.com/mdn/data)'s CSS-Verzeichnis generiert. Sie müssen lediglich einen `CSSSyntax`-Makroaufruf unter dem Titel einfügen, und es wird automatisch erledigt.

Die einzige Komplikation ergibt sich daraus, sicherzustellen, dass die benötigten Daten vorhanden sind. Die [properties.json](https://github.com/mdn/data/blob/main/css/properties.json)-Datei muss einen Eintrag für die dokumentierte Eigenschaft enthalten, und die [types.json](https://github.com/mdn/data/blob/main/css/types.json)-Datei muss einen Eintrag für alle Werttypen enthalten, die im Wert der Eigenschaft verwendet werden.

Sie müssen dies tun, indem Sie das [MDN data repo](https://github.com/mdn/data) forken, Ihren Fork lokal klonen, die Änderungen in einem neuen Branch vornehmen und dann einen Pull-Request gegen das Upstream-Repo einreichen. Sie können [hier weitere Details zur Verwendung von Git finden](/de/docs/MDN/Writing_guidelines/Page_structures/Compatibility_tables).

### Selektoren

Der "Syntax"-Abschnitt der Selektorreferenzseiten ist viel einfacher als der der Eigenschaftsseiten. Er enthält einen Block, der mit dem "Syntax Box"-Stil gestaltet ist und die Grundsyntax des Selektors zeigt, sei es nur ein einfaches Schlüsselwort (z. B. {{CSSxRef(":hover")}}) oder ein komplexerer Funktionswert, der einen Parameter benötigt (z. B. {{CSSxRef(":not", ":not()")}}). Gelegentlich wird der Parameter in einem weiteren Eintrag innerhalb des Syntaxblocks erklärt (siehe {{CSSxRef(":nth-last-of-type", ":nth-last-of-type()")}} als Beispiel).

Dieser Block wird automatisch aus den Daten im [MDN data repo](https://github.com/mdn/data)'s CSS-Verzeichnis generiert. Sie müssen lediglich einen `CSSSyntax`-Makroaufruf unter dem Titel einfügen, und es wird automatisch erledigt.

Die einzige Komplikation ergibt sich daraus, sicherzustellen, dass die benötigten Daten vorhanden sind. Die [selectors.json](https://github.com/mdn/data/blob/main/css/selectors.json)-Datei muss einen Eintrag für den dokumentierten Selektor enthalten.

Sie müssen dies tun, indem Sie das [MDN data repo](https://github.com/mdn/data) forken, Ihren Fork lokal klonen, die Änderungen in einem neuen Branch vornehmen und dann einen Pull-Request gegen das Upstream-Repo einreichen. Sie können [hier weitere Details zur Verwendung von Git finden](/de/docs/MDN/Writing_guidelines/Page_structures/Compatibility_tables).

## HTML-Referenzsyntax

HTML-Referenzseiten haben keine "Syntax"-Abschnitte — die Syntax ist immer nur der Elementname, der von spitzen Klammern umgeben ist, daher ist sie nicht notwendig. Das Wichtigste, was Sie über HTML-Elemente wissen müssen, sind die Attribute, die sie annehmen können, und welche Werte sie haben können, und dies wird in einem separaten "Attribute"-Abschnitt behandelt. Siehe {{htmlelement("ol")}} und {{htmlelement("video")}} für Beispiele.

## HTTP-Referenzsyntax

Die HTTP-Referenzsyntax wird vollständig manuell erstellt und variiert je nach dokumentiertem HTTP-Feature.

### HTTP-Header/Inhalts-Sicherheitsrichtlinie

Die Syntax der HTTP-Header (und der Inhalts-Sicherheitsrichtlinie) wird in zwei separaten Abschnitten auf der Seite dokumentiert — "Syntax" und "Direktiven".

#### Syntaxabschnitt

Der "Syntax"-Abschnitt zeigt, wie die Syntax eines Headers aussehen wird, unter Verwendung eines Syntaxblocks, der mit dem "Syntax Box"-Stil gestaltet ist und eine formale Syntax enthält, um genau zu zeigen, welche Direktiven in den Wert eingeschlossen werden können, in welcher Reihenfolge usw. Zum Beispiel sieht der Syntaxblock des {{HTTPHeader("If-None-Match")}}-Headers so aus:

```http
If-None-Match: <etag_value>
If-None-Match: <etag_value>, <etag_value>, …
If-None-Match: *
```

Einige Header haben separate Anforderungsdirektiven-, Antwortdirektiven- und Erweiterungssyntax. Wenn verfügbar, müssen diese in separaten Syntaxblöcken enthalten sein, jeder unter seinem eigenen Unterabschnitt. Siehe {{HTTPHeader("Cache-Control")}} als Beispiel.

#### Direktivenabschnitt

Der "Direktive"-Abschnitt enthält eine Beschreibungsauflistung, die die Namen und Beschreibungen aller Direktiven enthält, die in der Syntax erscheinen können.

### HTTP-Anforderungsmethoden

Die Syntax der Anforderungsmethoden ist wirklich einfach und enthält nur einen Syntaxblock, der mit dem "Syntax Box"-Stil gestaltet ist und zeigt, wie die Methodensyntax aufgebaut ist. Die Syntax für die [GET-Methode](/de/docs/Web/HTTP/Methods/GET) sieht so aus:

```http
GET /index.html
```

### HTTP-Antwortstatuscodes

Auch die Syntax für HTTP-Antwortstatuscodes ist wirklich einfach — ein Syntaxblock, der den Code und den Namen einschließt. Zum Beispiel:

```http
404 Not Found
```

## SVG-Referenzsyntax

### SVG-Elemente

SVG-Elementsyntaxabschnitte sind nicht vorhanden — genauso wie HTML-Elementsyntaxabschnitte. Jede SVG-Elementreferenzseite enthält nur eine Liste der Attribute, die für dieses Element gelten können. Siehe {{SVGElement("feTile")}} als Beispiel.

### SVG-Attribute

SVG-Attributreferenzseiten enthalten ebenfalls keine Syntaxabschnitte.

## Siehe auch

- [Markdown auf MDN](/de/docs/MDN/Writing_guidelines/Howto/Markdown_in_MDN#example_code_blocks)
