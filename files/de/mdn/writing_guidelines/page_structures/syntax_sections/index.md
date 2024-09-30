---
title: Syntax-Abschnitte
slug: MDN/Writing_guidelines/Page_structures/Syntax_sections
l10n:
  sourceCommit: 9df96dcad40bf97f66b317ef6b6bbe64444569eb
---

{{MDNSidebar}}

Der Syntaxabschnitt einer MDN-Referenzseite enthält ein Syntaxfeld, das die genaue Syntax definiert, die ein Feature hat (z.B. welche Parameter es akzeptieren kann, welche optional sind). Dieser Artikel erklärt, wie Syntaxfelder für Referenzartikel geschrieben werden.

## API-Referenzsyntax

Syntaxabschnitte für API-Referenzseiten werden manuell geschrieben und können je nach dokumentiertem Feature leicht variieren. Der Abschnitt beginnt mit einer Überschrift (typischerweise eine Überschrift der Ebene zwei `##`) mit dem Namen "Syntax" und muss am Anfang der Referenzseite enthalten sein (direkt unter dem einleitenden Material). Unter der Überschrift befindet sich ein Codeblock, der die genaue Syntax des Features zeigt, abgetrennt durch einen Codezaun ` ```[Markup-Sprache] ` Klasse.

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
> Die Markup-Sprache in diesem Fall ist `js-nolint`, wobei `js` anzeigt, dass JavaScript-Syntaxhervorhebung verwendet werden sollte.
> Für JavaScript-Syntaxabschnitte ist `-nolint` ebenfalls erforderlich, weil der Syntaxabschnitt absichtlich nicht "ganz" JavaScript ist und wir nicht wollen, dass ihn der Linter "korrigiert" (Rückgabewerte und Semikolons am Ende der Zeilen werden weggelassen).

### Allgemeine Stilregeln

Einige Regeln, die bezüglich der Auszeichnung innerhalb des Syntaxblocks zu beachten sind:

- Beenden Sie eine Zeile **nicht** mit einem Semikolon `;`. Syntaxabschnitte sind nicht dazu gedacht, ausführbaren Code zu zeigen. Daher macht es keinen Sinn, Semikolons zu zeigen.
- Verwenden Sie kein `<code>` innerhalb des Syntaxblocks (oder in einem beliebigen Codebeispielblock auf MDN). Nicht nur ist es im Allgemeinen nutzlos, auch unsere Auszeichnung möchte es nicht, und es wird nicht so gerendert, wie Sie es sich wünschen, wenn Sie es einfügen.
- Geben Sie nur die Funktion und Argumente an. Beispiel einer "korrigierten" Beispiele unten

  ```js-nolint
  querySelector(selector)
  // responseStr = element.querySelector(selector)

  new IntersectionObserver(callback, options)
  // const observer = new IntersectionObserver(callback, options)
  ```

### Konstruktoren und Methoden

#### Syntaxblock

Beginnen Sie mit einem Syntaxblock wie diesem (von der [`IntersectionObserver()`](/de/docs/Web/API/IntersectionObserver/IntersectionObserver) Konstruktorseite):

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

Methoden, die auf viele verschiedene Arten verwendet werden können, sollten in mehrere Zeilen aufgeschlüsselt werden, die alle möglichen Variationen zeigen.

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

Ebenso beim {{jsxref("Date")}} Konstruktor:

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

Formale Syntaxnotation (unter Verwendung von [BNF](https://de.wikipedia.org/wiki/Backus-Naur-Form)) sollte nicht im Syntaxabschnitt verwendet werden – stattdessen verwenden Sie das erweiterte mehrzeilige Format [oben beschrieben](#multiple_linesoptional_parameters).

Während die formale Notation einen prägnanten Mechanismus zur Beschreibung komplexer Syntax bietet, ist sie vielen Entwicklern nicht vertraut und kann mit der gültigen Syntax bestimmter Programmiersprachen _kollidieren_. Beispielsweise bedeutet `[ ]` sowohl einen "optional Parameter" als auch ein JavaScript {{jsxref("Array")}}. Sie können dies in der formalen Syntax für {{jsxref("Array.prototype.slice()")}} unten sehen:

```js-nolint
arr.slice([begin[, end]])
```

Für spezifische Fälle, in denen es als vorteilhaft angesehen wird, kann ein separater **Formale Syntax** Abschnitt unter Verwendung der formalen Benachrichtigung deklariert werden.

##### Knapp gehaltene Syntaxblöcke

Ziel ist es, den Syntaxblock so rein und eindeutig wie möglich als Definition der Syntax des Features zu machen – schließen Sie keine irrelevante Syntax ein. Beispielsweise können Sie diese Syntaxform, die an vielen Stellen auf der Seite verwendet wird, sehen, um Versprechen zu beschreiben:

```js-nolint
caches.match(request, options).then(function (response) {
  // Do something with the response
})
```

Aber diese Version ist viel prägnanter und enthält nicht den überflüssigen {{JSxRef("Promise.prototype.then()")}} Methodenaufruf:

```js-nolint
match(request, options)
```

##### Rückruf-Syntaxblöcke

Für Methoden, die eine Rückruffunktion akzeptieren, zeigen Sie den Rückruf als Parameter und nicht als Pfeilfunktion oder `function` Ausdruck an.

```js-nolint
filter(callbackFn)
filter(callbackFn, thisArg)
```

Dann, im Abschnitt "Parameter", listen Sie die Parameter der Rückruffunktion auf und was sie zurückgeben soll.

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

Bevorzugen Sie, die Nummerierung bei 1 beginnen zu lassen, was es ermöglicht, die Beschreibung wie "`unshift` fügt N Elemente an den Anfang des Arrays hinzu" sowie "das erste Element" (statt "das nullte Element") zu schreiben.

Beachten Sie, dass der Fall, keine Restparameter zu übergeben, immer enthalten ist, auch wenn es nicht viel Sinn macht. Dann schreiben Sie im Abschnitt "Parameter" Folgendes:

```md
- `element1`, …, `elementN`
  - : The elements to add to the front of the array.
```

Fügen Sie hier `\{{optional_inline}}` hinzu, wenn das Übergeben von null Restparameter Sinn hat.

Ein weiteres Beispiel mit einigen Positionsparametern vor dem Restparameter:

```js-nolint
splice(start)
splice(start, deleteCount)
splice(start, deleteCount, item1)
splice(start, deleteCount, item1, item2)
splice(start, deleteCount, item1, item2, /* …, */ itemN)
```

#### Parameterabschnitt

Fügen Sie als nächstes einen "Parameter"-Unterabschnitt hinzu, der erklärt, was jeder Parameter in einer Beschreibungsliste sein soll. Parameter, die Objekte mit mehreren Mitgliedern sind, können eine verschachtelte Beschreibungsliste enthalten, die ihrerseits eine Erklärung dazu enthält, was jedes Mitglied sein soll. Optionale Parameter sollten mit einem \\{{optional_inline}} Makroaufruf neben ihrem Namen im Beschreibungsterm markiert werden.

Der Name jedes Parameters in der Liste sollte in Markdown-Codezaunnotation `` ` ` `` enthalten sein.

> [!NOTE]
> Selbst wenn das Feature keine Parameter benötigt, müssen Sie einen "Parameter"-Abschnitt hinzufügen, mit dem Inhalt "None".

#### Rückgabewertabschnitt

Fügen Sie als nächstes einen "Rückgabewert"-Unterabschnitt hinzu, der erklärt, was der Rückgabewert des Konstruktors oder der Methode ist. Siehe die obigen Links als Beispiele.

Wenn es keinen Rückgabewert gibt, verwenden Sie den folgenden Text:

Keiner (\\{{jsxref("undefined")}}).

#### Ausnahmenabschnitt

Fügen Sie schließlich einen "Ausnahmen"-Unterabschnitt hinzu, der erklärt, welche Ausnahmen auftreten können, wenn ein Problem beim Aufrufen des Konstruktors/der Methode auftritt. Dies könnte daran liegen, dass ein Parametername falsch geschrieben wurde oder ihm ein falscher Datentyp-Wert gegeben wurde, weil es ein Problem mit der Umgebung gibt, in der es aufgerufen wird (z.B. wenn versucht wird, ein nur für sichere Kontexte geeignetes Feature in einem nicht sicheren Kontext auszuführen), oder aus einem anderen Grund.

Zu bestimmen, welche Ausnahmen von einer Methode ausgelöst werden, kann eine gründliche Untersuchung der Spezifikation erfordern. Das Durchsehen der schrittweisen Erklärung in der Spezifikation, wie ein Feature funktioniert, liefert normalerweise eine solide Liste von Ausnahmen und Situationen, die zu deren Auslösung führen.

Die Namen und Erklärungen der Ausnahmen sollten in einer Beschreibungsliste enthalten sein.

> [!NOTE]
> Wenn für das Feature keine Ausnahmen ausgelöst werden können, müssen Sie keinen "Ausnahmen"-Abschnitt einschließen, aber Sie können ihn mit dem Inhalt "None" einschließen, wenn Sie möchten.

### Eigenschaften

#### Wertabschnitt

Eigenschaften enthalten keinen Syntaxabschnitt. Stattdessen fügen Sie einen "Wert"-Abschnitt hinzu, der eine Erklärung des Wertebereichs der Eigenschaft enthält. Beschreiben Sie den Datentyp und den Zweck.

#### Ausnahmenabschnitt

Wenn beim Zugriff auf die Eigenschaft eine Ausnahme ausgelöst werden kann, fügen Sie einen "Ausnahmen"-Unterabschnitt hinzu, der jede Ausnahme erklärt; dieser sollte genauso eingerichtet sein wie der oben für Methoden und Konstruktoren beschriebene.

## JavaScript-Referenzsyntax

JavaScript-Referenzseiten für eingebaute Objekte folgen den gleichen grundlegenden Regeln wie API-Referenzseiten; z.B. für Methoden und Eigenschaften. Es gibt einige Unterschiede, die Sie möglicherweise beobachten:

- Für eingebaute Objekte mit einem einzelnen Konstruktor wird die Konstruktorsyntax häufig auf der Objekt-Landingpage eingeschlossen. Siehe {{JSxRef("Date")}} zum Beispiel. Sie werden feststellen, dass statische Methoden (die auf dem `Date`-Objekt selbst existieren) unter "Methoden" aufgeführt sind, während Instanzmethoden unter "Date.prototype Methoden" aufgelistet sind.
- Sie werden auch feststellen, dass bei Methoden, die keine Parameter/Ausnahmen haben, diese Unterabschnitte auf JavaScript-Referenzseiten eher überhaupt nicht enthalten sind. Siehe {{JSxRef("Date.getDate()")}} und {{JSxRef("Date.now()")}} für Beispiele.

## CSS-Referenzsyntax

### Eigenschaften

CSS-Referenzseiten für Eigenschaften enthalten einen "Syntax"-Abschnitt, der früher oben auf der Seite gefunden wurde, aber zunehmend häufig unter einem Abschnitt zu finden ist, der einen Codeblock zeigt, der die typische Verwendung des Features zeigt, plus ein Live-Beispiel, um zu veranschaulichen, was das Feature macht (siehe {{CSSxRef("animation")}} als Beispiel).

> [!NOTE]
> Wir tun dies, weil die formale CSS-Syntax komplex ist, von vielen Lesern der MDN nicht genutzt wird und für Anfänger abschreckend sein kann. Echte Syntax und Beispiele sind für die Mehrheit der Menschen nützlicher.

Im Syntaxabschnitt finden Sie folgende Inhalte.

#### Optionaler Erklärungstext

Einige CSS-Eigenschaften erklären sich von selbst und benötigen keine zusätzliche Erklärung (zum Beispiel {{CSSxRef("color")}}). Einige hingegen sind komplexer und brauchen Erklärungen zur Syntaxreihenfolge, einschließlich mehrerer Werte usw. (siehe {{CSSxRef("animation")}}). In solchen Fällen können Sie vor den Unterabschnitten zusätzliche Erklärungen einfügen.

#### Werteabschnitt

Als nächstes sollten Sie einen "Werte"-Abschnitt einfügen – dieser enthält eine Beschreibungsliste, die die CSS-Wertetypen erklärt, die den Wert der Eigenschaft bilden. Jeder Wertetyp sollte in spitzen Klammern eingefasst und auf die MDN-Referenzseite zu diesem Wertetyp verlinkt werden, wenn eine Seite dafür existiert. Beispielsweise siehe die {{CSSxRef("border")}}-Eigenschaftsreferenz – diese referenziert drei Wertetypen, von denen nur einer verlinkt ist ({{CSSxRef("&lt;color&gt;")}}).

#### Formale Syntax

Der letzte Abschnitt, "Formale Syntax", wird automatisch aus den im [MDN data repo](https://github.com/mdn/data) enthaltenen Daten im CSS-Verzeichnis generiert. Sie müssen nur einen `CSSSyntax`-Makroaufruf unter der Überschrift einfügen, und es wird den Rest erledigen.

Die einzige Komplikation ergibt sich daraus, sicherzustellen, dass die benötigten Daten vorhanden sind. Die [properties.json](https://github.com/mdn/data/blob/main/css/properties.json)-Datei muss einen Eintrag für die dokumentierte Eigenschaft enthalten, und die [types.json](https://github.com/mdn/data/blob/main/css/types.json)-Datei muss einen Eintrag für alle Wertetypen enthalten, die im Wert der Eigenschaft verwendet werden.

Sie müssen dies tun, indem Sie das [MDN data repo](https://github.com/mdn/data) forken, Ihren Fork lokal klonen, die Änderungen in einem neuen Branch vornehmen und dann einen Pull Request gegen das Upstream-Repo einreichen. Sie können [hier mehr Details zur Verwendung von Git finden](/de/docs/MDN/Writing_guidelines/Page_structures/Compatibility_tables).

### Selektoren

Der "Syntax"-Abschnitt von Selektor-Referenzseiten ist viel einfacher als der von Eigenschaftsseiten. Er enthält einen Block, der im "Syntax Box"-Stil gestaltet ist und die grundlegende Syntax des Selektors zeigt, sei es nur ein einfaches Schlüsselwort (z.B. {{CSSxRef(":hover")}}), oder ein komplexerer Funktionswert, der einen Parameter akzeptiert (z.B. {{CSSxRef(":not", ":not()")}}). Manchmal wird der Parameter in einem weiteren Eintrag innerhalb des Syntaxblocks erklärt (siehe {{CSSxRef(":nth-last-of-type", ":nth-last-of-type()")}} als Beispiel).

Dieser Block wird automatisch aus den Daten im [MDN data repo](https://github.com/mdn/data)'s CSS-Verzeichnis generiert. Sie müssen nur einen `CSSSyntax`-Makroaufruf unter der Überschrift einfügen, und es wird den Rest erledigen.

Die einzige Komplikation ergibt sich daraus, sicherzustellen, dass die benötigten Daten vorhanden sind. Die [selectors.json](https://github.com/mdn/data/blob/main/css/selectors.json)-Datei muss einen Eintrag für den dokumentierten Selektor enthalten.

Sie müssen dies tun, indem Sie das [MDN data repo](https://github.com/mdn/data) forken, Ihren Fork lokal klonen, die Änderungen in einem neuen Branch vornehmen und dann einen Pull Request gegen das Upstream-Repo einreichen. Sie können [hier mehr Details zur Verwendung von Git finden](/de/docs/MDN/Writing_guidelines/Page_structures/Compatibility_tables).

## HTML-Referenzsyntax

HTML-Referenzseiten haben keine "Syntax"-Abschnitte – die Syntax besteht immer nur aus dem Elementnamen, der in spitze Klammern eingeschlossen ist, daher ist es nicht nötig. Das Hauptsächliche, das man über HTML-Elemente wissen muss, ist, welche Attribute sie annehmen und welche Werte sie annehmen können, und dies wird in einem separaten "Attribute"-Abschnitt behandelt. Siehe {{htmlelement("ol")}} und {{htmlelement("video")}} als Beispiele.

## HTTP-Referenzsyntax

Die HTTP-Referenzsyntax wird vollständig manuell erstellt und variiert je nachdem, welcher HTTP-Featuretyp dokumentiert wird.

### HTTP-Headers/Content-Security-Policy

Die Syntax von HTTP-Headern (und Content-Security-Policy) wird in zwei separaten Abschnitten auf der Seite dokumentiert – "Syntax" und "Direktiven".

#### Syntaxabschnitt

Der "Syntax"-Abschnitt zeigt, wie die Syntax eines Headers aussieht, unter Verwendung eines Syntaxblocks, der im "Syntax Box"-Stil gestaltet ist, inklusive formaler Syntax, um genau zu zeigen, welche Direktiven im Wert enthalten sein können, in welcher Reihenfolge usw. Zum Beispiel sieht der Syntaxblock des {{HTTPHeader("If-None-Match")}} Headers so aus:

```http
If-None-Match: <etag_value>
If-None-Match: <etag_value>, <etag_value>, …
If-None-Match: *
```

Einige Header haben separate Anforderungsdirektiven-, Antwortdirektiven- und Erweiterungssyntax. Falls verfügbar, müssen diese in separaten Syntaxblöcken enthalten sein, jeweils unter ihrem eigenen Unterabschnitt. Siehe {{HTTPHeader("Cache-Control")}} als Beispiel.

#### Direktivenabschnitt

Der "Direktiven"-Abschnitt enthält eine Beschreibungsliste mit den Namen und Beschreibungen aller Direktiven, die innerhalb der Syntax erscheinen können.

### HTTP-Anfragemethoden

Die Syntax der Anfragemethode ist sehr einfach und enthält nur einen Syntaxblock, der im "Syntax Box"-Stil gestaltet ist und zeigt, wie die Syntax der Methode strukturiert ist. Die Syntax für die [GET-Methode](/de/docs/Web/HTTP/Methods/GET) sieht so aus:

```http
GET /index.html
```

### HTTP-Antwortstatuscodes

Ebenso ist die Syntax für HTTP-Antwortstatuscodes sehr einfach – ein Syntaxblock einschließlich des Codes und Namens. Zum Beispiel:

```http
404 Not Found
```

## SVG-Referenzsyntax

### SVG-Elemente

Syntaxabschnitte für SVG-Elemente existieren nicht – ebenso wie HTML-Element-Syntaxabschnitte. Jede SVG-Element-Referenzseite enthält nur eine Liste der Attribute, die auf das betreffende Element angewendet werden können. Siehe {{SVGElement("feTile")}} als Beispiel.

### SVG-Attribute

SVG-Attribut-Referenzseiten enthalten auch keine Syntaxabschnitte.

## Siehe auch

- [Markdown in MDN](/de/docs/MDN/Writing_guidelines/Howto/Markdown_in_MDN#example_code_blocks)
