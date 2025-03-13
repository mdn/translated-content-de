---
title: Syntaxabschnitte
slug: MDN/Writing_guidelines/Page_structures/Syntax_sections
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

Der Syntaxabschnitt einer MDN-Referenzseite enthält ein Syntaxfeld, das die genaue Syntax eines Features definiert (z. B. welche Parameter kann es akzeptieren, welche sind optional?). Dieser Artikel erklärt, wie Syntaxfelder für Referenzartikel geschrieben werden.

## API-Referenzsyntax

Syntaxabschnitte für API-Referenzseiten werden manuell erstellt und können je nach dokumentiertem Feature leicht variieren. Der Abschnitt beginnt mit einer Überschrift (typischerweise eine Überschrift der Stufe zwei `##`) mit dem Namen "Syntax" und muss oben auf der Referenzseite (direkt unter dem einführenden Material) enthalten sein. Unter der Überschrift befindet sich ein Codeblock, der die genaue Syntax des Features zeigt, abgegrenzt durch den Codezaun ` ```[Markup-Sprache] ` Klasse.

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
> Die in diesem Fall verwendete Markup-Sprache ist `js-nolint`, wobei `js` angibt, dass JavaScript-Syntax-Hervorhebung verwendet werden soll. Für JavaScript-Syntaxabschnitte ist `-nolint` ebenfalls erforderlich, da der Syntaxabschnitt absichtlich nicht ganz JavaScript ist und wir nicht möchten, dass der Linter es "korrigiert" (Rückgabewerte und Semikolons am Ende der Zeilen werden weggelassen).

### Allgemeine Stilregeln

Einige Regeln, die im Hinblick auf die Markup innerhalb des Syntaxblocks befolgt werden sollten:

- Beenden Sie eine Zeile **nicht** mit einem Semikolon `;`. Syntaxabschnitte sollen keinen ausführbaren Code zeigen. Es macht also keinen Sinn, Semikolons zu zeigen.
- Verwenden Sie **nicht** \<code> innerhalb des Syntaxblocks (oder in einem beliebigen Codebeispiel-Block auf MDN). Es ist nicht nur im Allgemeinen nutzlos, sondern unser Markup möchte es nicht, und es wird nicht so gerendert, wie Sie möchten, wenn Sie es einfügen.
- Geben Sie nur die Funktion und die Argumente an. Beispiel, das unten "korrigierte" Beispiele zeigt:

  ```js-nolint
  querySelector(selector)
  // responseStr = element.querySelector(selector)

  new IntersectionObserver(callback, options)
  // const observer = new IntersectionObserver(callback, options)
  ```

### Konstruktoren und Methoden

#### Syntaxblock

Beginnen Sie mit einem Syntaxblock, wie diesem (von der [`IntersectionObserver()`](/de/docs/Web/API/IntersectionObserver/IntersectionObserver) Konstruktorseite):

```js-nolint
new IntersectionObserver(callback, options)
```

oder diesem (von [`Document.hasStorageAccess()`](/de/docs/Web/API/Document/hasStorageAccess)):

```js-nolint
hasStorageAccess()
```

Wenn die Methode statisch ist, z. B. [`URL.createObjectURL()`](/de/docs/Web/API/URL/createObjectURL_static), geben Sie auch ihre Schnittstelle an:

```js-nolint
URL.createObjectURL(object)
```

##### Mehrere Zeilen/Optionale Parameter

Methoden, die auf viele verschiedene Arten verwendet werden können, sollten auf mehrere Zeilen aufgeteilt werden, um alle möglichen Variationen zu zeigen.

Jede Option sollte in einer eigenen Zeile stehen, wobei sowohl pro Option Kommentare als auch Zuweisungen weggelassen werden. Zum Beispiel hat {{jsxref("Array.prototype.slice()")}} zwei optionale Parameter und würde wie unten gezeigt dokumentiert werden:

```js-nolint
slice()
slice(begin)
slice(begin, end)
```

Ähnlich ist es für [`CanvasRenderingContext2D.drawImage`](/de/docs/Web/API/CanvasRenderingContext2D/drawImage):

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

Formale Syntaxnotation (unter Verwendung von [BNF](https://en.wikipedia.org/wiki/Backus%E2%80%93Naur_form)) sollte im Syntaxabschnitt nicht verwendet werden — stattdessen verwenden Sie das erweiterte Mehrzeilenformat [oben beschrieben](#multiple_linesoptional_parameters).

Obwohl die formelle Notation einen prägnanten Mechanismus zur Beschreibung komplexer Syntax bietet, ist sie vielen Entwicklern nicht vertraut und kann mit der gültigen Syntax für bestimmte Programmiersprachen in Konflikt geraten. Zum Beispiel zeigt `[ ]` sowohl einen "optionalen Parameter" als auch eine JavaScript {{jsxref("Array")}} an. Sie können dies in der formalen Syntax für {{jsxref("Array.prototype.slice()")}} unten sehen:

```js-nolint
arr.slice([begin[, end]])
```

Für spezifische Fälle, in denen es als vorteilhaft angesehen wird, kann ein separater **Formale Syntax**-Abschnitt mit der formellen Benachrichtigung deklariert werden.

##### Prägnante Syntaxblöcke

Das Ziel ist es, den Syntaxblock so rein und eindeutig wie möglich als Definition der Syntax des Features zu machen — fügen Sie keine irrelevante Syntax hinzu. Zum Beispiel könnte diese Syntaxform verwendet werden, um Versprechungen an vielen Stellen auf der Website zu beschreiben:

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

Für Methoden, die eine Rückruffunktion akzeptieren, zeigen Sie den Rückruf als Parameter und nicht als Pfeilfunktion oder `function`-Ausdruck.

```js-nolint
filter(callbackFn)
filter(callbackFn, thisArg)
```

Dann listen Sie im Abschnitt "Parameter" die Parameter der Rückruffunktion auf und was sie zurückgeben soll.

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

Für Methoden, die eine beliebige Anzahl von Parametern akzeptieren, wird der Syntaxblock so geschrieben:

```js-nolint
unshift()
unshift(element1)
unshift(element1, element2)
unshift(element1, element2, /* …, */ elementN)
```

Beginnen Sie vorzugsweise mit der Zählung ab 1, was es ermöglicht, Beschreibungen wie "`unshift` fügt N-Elemente am Anfang des Arrays hinzu" sowie "das erste Element" (anstatt "das nullte Element") zu schreiben.

Beachten Sie, dass der Fall, keine Restparameter zu übergeben, immer enthalten ist, auch wenn er wenig Sinn ergibt. Schreiben Sie dann im Abschnitt "Parameter" dies:

```md
- `element1`, …, `elementN`
  - : The elements to add to the front of the array.
```

Fügen Sie `\{{optional_inline}}` hier hinzu, wenn es sinnvoll ist, keinen Restparameter zu übergeben.

Ein weiteres Beispiel mit einigen Positionsparametern vor dem Restparameter:

```js-nolint
splice(start)
splice(start, deleteCount)
splice(start, deleteCount, item1)
splice(start, deleteCount, item1, item2)
splice(start, deleteCount, item1, item2, /* …, */ itemN)
```

#### Parameters Abschnitt

Fügen Sie anschließend einen "Parameters"-Unterabschnitt hinzu, in dem erläutert wird, was jeder Parameter sein sollte, in einer Beschreiungs- liste. Parameter, die Objekte mit mehreren Mitgliedern sind, können eine verschachtelte Beschreibungs- liste enthalten, die wiederum eine Erklärung enthält, was jedes Mitglied sein sollte. Optionale Parameter sollten mit einem \\{{optional_inline}} Makroaufruf neben ihrem Namen im Beschreibungsterm gekennzeichnet werden.

Der Name jedes Parameters in der Liste sollte in Markdown-Code-Zaunnotation `` ` ` `` eingeschlossen sein.

> [!NOTE]
> Selbst wenn das Feature keine Parameter akzeptiert, müssen Sie einen "Parameters"-Abschnitt einfügen, mit einem Inhalt von "None".

#### Rückgabewerte Abschnitt

Fügen Sie anschließend einen "Return value"-Unterabschnitt hinzu, der erklärt, was der Rückgabewert des Konstruktors oder der Methode ist. Siehe die obigen Links als Beispiele.

Wenn es keinen Rückgabewert gibt, verwenden Sie folgenden Text:

None (\\{{jsxref("undefined")}}).

#### Ausnahmen Abschnitt

Schließlich fügen Sie einen "Exceptions"-Unterabschnitt hinzu, der erklärt, welche Ausnahmen ausgelöst werden können, wenn ein Problem beim Aufrufen des Konstruktors/der Methode auftritt. Dies könnte sein, weil ein Parametername falsch geschrieben wurde oder ihm ein Wert des falschen Datentyps gegeben wurde, weil es ein Problem mit der Umgebung gibt, in der er aufgerufen wird (z. B. Versuch, ein nur für sicheren Kontext verfügbares Feature in einem unsicheren Kontext auszuführen), oder aus einem anderen Grund.

Festzustellen, welche Ausnahmen von einer Methode ausgelöst werden können, erfordert möglicherweise eine gründliche Durchsicht der Spezifikation. Das Durchsehen der schrittweisen Erklärung der Funktionsweise eines Features in der Spezifikation liefert in der Regel eine solide Liste der Ausnahmen und der Situationen, die zu ihrem Auslösen führen.

Die Ausnahmenamen und Erklärungen sollten in einer Beschreibungs- liste enthalten sein.

> [!NOTE]
> Wenn keine Ausnahmen für das Feature ausgelöst werden können, müssen Sie keinen "Exceptions"-Abschnitt einfügen, aber Sie können ihn mit einem Inhalt von "None" einschließen, wenn Sie möchten.

### Eigenschaften

#### Wert Abschnitt

Eigenschaften enthalten keinen Syntaxabschnitt. Stattdessen fügen Sie einen "Value" Abschnitt hinzu, der eine Erklärung des Eigenschaftswerts enthält. Beschreiben Sie den Datentyp und den Zweck.

#### Ausnahmen Abschnitt

Wenn der Zugriff auf die Eigenschaft eine Ausnahme auslösen kann, fügen Sie einen "Exceptions"-Unterabschnitt hinzu, der jede Ausnahme erklärt; dieser sollte genau wie der oben für Methoden und Konstruktoren beschriebene eingerichtet werden.

## JavaScript-Referenzsyntax

JavaScript eingebaute Objekt-Referenzseiten befolgen die gleichen grundlegenden Regeln wie API-Referenzseiten; z. B. für Methoden und Eigenschaften. Es gibt ein paar Unterschiede, die Sie beobachten könnten:

- Für eingebettete Objekte mit einem einzigen Konstruktor wird die Konstruktorsyntax oft auf der Objekt-Landingpage aufgenommen. Siehe {{JSxRef("Date")}} als Beispiel. Sie werden feststellen, dass statische Methoden (diejenigen, die auf dem `Date`-Objekt selbst existieren) unter "Methods" aufgelistet sind, während Instanzmethoden unter "Date.prototype methods" aufgeführt sind.
- Ihnen wird auch auffallen, dass Methoden, die keine Parameter/Ausnahmen haben, diese Unterabschnitte auf JavaScript-Referenzseiten eher gar nicht enthalten haben. Siehe {{JSxRef("Date.getDate()")}} und {{JSxRef("Date.now()")}} als Beispiele.

## CSS-Referenzsyntax

### Eigenschaften

CSS Eigenschaftsreferenzseiten enthalten einen "Syntax" Abschnitt, der früher am oberen Ende der Seite zu finden war, zunehmend jedoch unter einem Abschnitt mit einem Codeblock, der die typische Verwendung des Features zeigt, sowie einem Live-Beispiel, das das Feature illustriert, gefunden wird (siehe {{CSSxRef("animation")}} als Beispiel).

> [!NOTE]
> Wir tun dies, weil die formale CSS-Syntax komplex ist, nicht von vielen der MDN-Leser genutzt wird und für Anfänger abschreckend sein kann. Reale Syntax und Beispiele sind für die Mehrheit der Menschen nützlicher.

Im Inneren des Syntaxabschnitts finden Sie die folgenden Inhalte.

#### Optionale Erklärungstexte

Einige CSS-Eigenschaften sind selbsterklärend und benötigen keine zusätzliche Erklärung (zum Beispiel {{CSSxRef("color")}}). Einige hingegen sind komplexer und benötigen Erklärungen zur Syntaxreihenfolge, einschließlich mehrerer Werte usw. (siehe {{CSSxRef("animation")}}). In solchen Fällen können Sie vor den Unterabschnitten zusätzliche Erklärungen hinzufügen.

#### Werte Abschnitt

Als Nächstes sollten Sie einen "Values" Abschnitt einschließen — dieser enthält eine Beschreibungs- liste, in der die CSS-Wertetypen erläutert werden, die den Wert der Eigenschaft ausmachen. Jeder Wertetyp sollte in spitze Klammern eingeschlossen und mit der MDN-Referenzseite verlinkt werden, die diesen Wertetyp behandelt, falls eine Seite dafür existiert. Zum Beispiel, siehe die {{CSSxRef("border")}} Eigenschaftsreferenz — diese referenziert drei Wertetypen, von denen nur einer verlinkt ist ({{CSSxRef("&lt;color&gt;")}}).

#### Formale Syntax

Der letzte Abschnitt, "Formal syntax", wird automatisch mit dem Makro `\{{CSSSyntax}}` generiert. Dieses Makro ruft Daten aus den CSS-Spezifikationen unter Verwendung des [@webref/css npm package](https://www.npmjs.com/package/@webref/css) ab. Um die formale Syntax in Ihrem Dokument einzufügen:

1. Fügen Sie eine Überschrift wie folgt hinzu: `## Formal syntax`.
2. Platzieren Sie das Makro `\{{CSSSyntax}}` direkt unterhalb dieser Überschrift.

### Selektoren

Der "Syntax" Abschnitt von Selektorreferenzseiten ist viel einfacher als der von Eigenschaftsseiten. Er enthält einen Block, der mit dem "Syntax Box"-Stil gestaltet ist und die grundlegende Syntax des Selektors zeigt, sei es nur ein einfaches Schlüsselwort (z. B. {{CSSxRef(":hover")}}) oder ein komplexerer Funktionswert, der einen Parameter annimmt (z. B. {{CSSxRef(":not", ":not()")}}). Manchmal wird der Parameter in einem weiteren Eintrag im Syntaxblock erläutert (siehe {{CSSxRef(":nth-last-of-type", ":nth-last-of-type()")}} als Beispiel).

Dieser Block wird automatisch aus den Daten generiert, die im CSS-Verzeichnis des [MDN-Daten-Repos](https://github.com/mdn/data) enthalten sind. Sie müssen lediglich einen `CSSSyntax` Makroaufruf unter dem Titel einfügen, und er kümmert sich um den Rest.

Die einzige Komplikation besteht darin, sicherzustellen, dass die benötigten Daten vorhanden sind. Die Datei [selectors.json](https://github.com/mdn/data/blob/main/css/selectors.json) muss einen Eintrag für den Selektor enthalten, den Sie dokumentieren.

Sie müssen dies tun, indem Sie das [MDN-Daten-Repo](https://github.com/mdn/data) erstellen, Ihren Fork lokal klonen, die Änderungen in einem neuen Branch vornehmen und dann einen Pull-Request gegen das Upstream-Repo einreichen. Sie können [weitere Details zur Verwendung von Git hier finden](/de/docs/MDN/Writing_guidelines/Page_structures/Compatibility_tables).

## HTML-Referenzsyntax

HTML-Referenzseiten haben keine "Syntax" Abschnitte — die Syntax besteht immer nur aus dem Elementnamen, eingeschlossen in spitze Klammern, also ist es nicht notwendig. Das Wichtigste, was Sie über HTML-Elemente wissen müssen, ist, welche Attribute sie annehmen können und welche Werte diese haben können, und dies ist in einem separaten "Attributes" Abschnitt behandelt. Siehe {{htmlelement("ol")}} und {{htmlelement("video")}} als Beispiele.

## HTTP-Referenzsyntax

Die HTTP-Referenzsyntax wird vollständig manuell erstellt und unterscheidet sich je nach der Art des HTTP-Features, das Sie dokumentieren.

### HTTP-Header/Inhalts-Sicherheitsrichtlinie

Die HTTP-Header-Syntax (und Inhalts-Sicherheitsrichtlinie) wird in zwei separaten Abschnitten auf der Seite dokumentiert — "Syntax" und "Directives".

#### Syntax Abschnitt

Der "Syntax" Abschnitt zeigt, wie die Syntax eines Headers aussieht, unter Verwendung eines Syntaxblocks, der mit dem "Syntax Box"-Stil gestaltet ist, inklusive formaler Syntax, die genau zeigt, welche Direktiven im Wert enthalten sein können, in welcher Reihenfolge usw. Zum Beispiel sieht der Syntaxblock des {{HTTPHeader("If-None-Match")}} Headers so aus:

```http
If-None-Match: <etag_value>
If-None-Match: <etag_value>, <etag_value>, …
If-None-Match: *
```

Einige Header haben unterschiedliche Anforderungsdirektiven, Antwortdirektiven und Erweiterungssyntax. Wenn verfügbar, müssen diese in separaten Syntaxblöcken enthalten sein, jeweils unter ihrem eigenen Unterabschnitt. Siehe {{HTTPHeader("Cache-Control")}} als Beispiel.

#### Richtlinien Abschnitt

Der "Directive" Abschnitt enthält eine Beschreibungs- liste mit den Namen und Beschreibungen aller Direktiven, die in der Syntax erscheinen können.

### HTTP-Anfragemethoden

Die Syntax für Anfragemethoden ist wirklich einfach und enthält lediglich einen Syntaxblock, der mit dem "Syntax Box"-Stil gestaltet ist und zeigt, wie die Methosyntax strukturiert ist. Die Syntax für die [GET-Methode](/de/docs/Web/HTTP/Reference/Methods/GET) sieht folgendermaßen aus:

```http
GET /index.html
```

### HTTP-Antwortstatuscodes

Auch die Syntax für HTTP Antwortstatuscodes ist wirklich einfach — ein Syntaxblock, der den Code und den Namen enthält. Zum Beispiel:

```http
404 Not Found
```

## SVG-Referenzsyntax

### SVG-Elemente

SVG-Element-Syntaxabschnitte existieren nicht — genau wie HTML-Element-Syntaxabschnitte. Jede SVG-Element-Referenzseite enthält lediglich eine Liste der Attribute, die auf dieses Element angewendet werden können. Siehe {{SVGElement("feTile")}} als Beispiel.

### SVG-Attribute

Auch SVG Attribut-Referenzseiten enthalten keine Syntaxabschnitte.

## Siehe auch

- [Markdown in MDN](/de/docs/MDN/Writing_guidelines/Howto/Markdown_in_MDN#example_code_blocks)
