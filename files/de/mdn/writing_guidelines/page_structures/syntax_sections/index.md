---
title: Syntaxabschnitte
slug: MDN/Writing_guidelines/Page_structures/Syntax_sections
l10n:
  sourceCommit: ce83b64f1132a29a19471e46bfffced755f775eb
---

{{MDNSidebar}}

Der Syntaxabschnitt einer MDN-Referenzseite enthält ein Syntaxfeld, das die genaue Syntax eines Features definiert (z.B. welche Parameter es akzeptieren kann, welche optional sind). Dieser Artikel erklärt, wie man Syntaxfelder für Referenzartikel schreibt.

## API-Referenzsyntax

Syntaxabschnitte für API-Referenzseiten werden manuell geschrieben und können je nach beschriebenem Feature leicht variieren. Der Abschnitt beginnt mit einer Überschrift (normalerweise eine Überschrift der Stufe zwei `##`) mit dem Namen "Syntax" und muss am oberen Rand der Referenzseite enthalten sein (unmittelbar unter dem einleitenden Material). Unter der Überschrift befindet sich ein Codeblock, der die genaue Syntax des Features anzeigt, eingeklammert mit dem Code-Zaun ` ```[markup-language] ` Klassen.

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
> Die Markup-Sprache, die in diesem Fall verwendet wird, ist `js-nolint`, wobei `js` anzeigt, dass JavaScript-Syntax-Hervorhebung verwendet werden soll.
> Für JavaScript-Syntaxabschnitte ist `-nolint` ebenfalls erforderlich, da der Syntaxabschnitt absichtlich nicht "ganz" JavaScript ist und wir nicht möchten, dass der Linter ihn "repariert" (Rückgabewerte und Semikolons am Ende der Zeilen werden weggelassen).

### Allgemeine Stilregeln

Einige Regeln, die in Bezug auf Markup innerhalb des Syntaxblocks zu befolgen sind:

- Beenden Sie **nicht** eine Zeile mit einem Semikolon `;`. Syntaxabschnitte sollen keinen ausführbaren Code zeigen. Daher ergibt es keinen Sinn, Semikolons zu zeigen.
- Verwenden Sie **nicht** \<code> innerhalb des Syntaxblocks (oder innerhalb eines beliebigen Codebeispielblocks auf MDN). Nicht nur ist es generell nutzlos, unser Markup will es nicht, und es wird nicht so gerendert, wie Sie es möchten, wenn Sie es einschließen.
- Geben Sie nur die Funktion und Argumente an. Beispiel mit "korrigierten" Beispielen unten

  ```js-nolint
  querySelector(selector)
  // responseStr = element.querySelector(selector)

  new IntersectionObserver(callback, options)
  // const observer = new IntersectionObserver(callback, options)
  ```

### Konstruktoren und Methoden

#### Syntaxblock

Beginnen Sie mit einem Syntaxblock, so wie dieser (von der Seite des {{DOMxRef("IntersectionObserver.IntersectionObserver", "IntersectionObserver()")}} Konstruktors):

```js-nolint
new IntersectionObserver(callback, options)
```

oder dieser (von {{DOMxRef("Document.hasStorageAccess()")}}):

```js-nolint
hasStorageAccess()
```

Wenn die Methode statisch ist, zum Beispiel {{DOMxRef("URL/createObjectURL_static", "URL.createObjectURL()")}}, dann geben Sie auch deren Schnittstelle an:

```js-nolint
URL.createObjectURL(object)
```

##### Mehrzeilige/Optionale Parameter

Methoden, die auf verschiedene Weise verwendet werden können, sollten in mehrere Zeilen aufgeteilt werden, um alle möglichen Varianten zu zeigen.

Jede Option sollte in einer eigenen Zeile stehen, wobei sowohl Kommentare zu den Optionen als auch Zuweisungen weggelassen werden. Zum Beispiel hat {{jsxref("Array.prototype.slice()")}} zwei optionale Parameter und würde wie unten gezeigt dokumentiert werden:

```js-nolint
slice()
slice(begin)
slice(begin, end)
```

Ähnlich für {{DOMxRef("CanvasRenderingContext2D.drawImage")}}:

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

Formale Syntaxnotation (unter Verwendung von [BNF](https://en.wikipedia.org/wiki/Backus%E2%80%93Naur_form)) sollte im Syntaxabschnitt nicht verwendet werden — verwenden Sie stattdessen das oben [beschriebene erweiterte mehrzeilige Format](#multiple_linesoptional_parameters).

Während die formale Notation einen präzisen Mechanismus zur Beschreibung komplexer Syntax bietet, ist sie vielen Entwicklern nicht vertraut und kann mit gültiger Syntax für bestimmte Programmiersprachen _in Konflikt_ geraten. Zum Beispiel bedeutet "`[ ]`" sowohl einen "optionalen Parameter" als auch ein JavaScript-{{jsxref("Array")}}. Sie können dies in der formalen Syntax für {{jsxref("Array.prototype.slice()")}} unten sehen:

```js-nolint
arr.slice([begin[, end]])
```

Für spezifische Fälle, in denen es als vorteilhaft angesehen wird, kann ein separater **Formale Syntax** Abschnitt mit der formalen Notifikation erklärt werden.

##### Kompakte Syntaxblöcke

Das Ziel ist es, den Syntaxblock so rein und eindeutig wie möglich als Definition der Syntax des Features zu machen — schließen Sie keine irrelevanten Syntaxelemente ein. Zum Beispiel sehen Sie möglicherweise diese Syntaxform an vielen Stellen auf der Seite, um Versprechen zu beschreiben:

```js-nolint
caches.match(request, options).then(function (response) {
  // Do something with the response
})
```

Aber diese Version ist viel kompakter und enthält nicht den überflüssigen {{JSxRef("Promise.prototype.then()")}} Methodenaufruf:

```js-nolint
match(request, options)
```

##### Callback-Syntaxblöcke

Für Methoden, die eine Callback-Funktion akzeptieren, zeigen Sie den Callback als Parameter, nicht als Pfeilfunktion oder `function` Ausdruck.

```js-nolint
filter(callbackFn)
filter(callbackFn, thisArg)
```

Dann, im "Parameter" Abschnitt, listen Sie die Parameter der Callback-Funktion und was sie zurückgeben soll.

```md
- `callbackFn`
  - : Eine Funktion, die für jedes Element im Array ausgeführt wird. Sie sollte einen [truthy](/de/docs/Glossary/Truthy) Wert zurückgeben, um das Element im resultierenden Array zu behalten, und einen [falsy](/de/docs/Glossary/Falsy) Wert ansonsten. Die Funktion wird mit den folgenden Argumenten aufgerufen:
    - `element`
      - : Das aktuell verarbeitete Element im Array.
    - `index`
      - : Der Index des aktuell verarbeiteten Elements im Array.
    - `array`
      - : Das Array, auf das `filter()` angewendet wurde.
```

##### Syntax für eine beliebige Anzahl von Parametern

Für Methoden, die eine beliebige Anzahl von Parametern akzeptieren, wird der Syntaxblock wie folgt geschrieben:

```js-nolint
unshift()
unshift(element1)
unshift(element1, element2)
unshift(element1, element2, /* …, */ elementN)
```

Bevorzugen Sie es, die Nummerierung bei 1 zu beginnen, was es ermöglicht, Beschreibungen wie "`unshift` fügt dem Anfang des Arrays N Elemente hinzu" sowie "das erste Element" (anstatt "das nullte Element") zu schreiben.

Beachten Sie, dass der Fall des Passierens von null Restparameter immer enthalten ist, selbst wenn er wenig Sinn macht. Dann schreiben Sie im "Parameter" Abschnitt folgendes:

```md
- `element1`, …, `elementN`
  - : Die Elemente, die der Vorderseite des Arrays hinzugefügt werden.
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

#### Parameter Abschnitt

Als nächstes fügen Sie einen "Parameter" Unterabschnitt hinzu, der erklärt, was jeder Parameter sein sollte, in einer Beschreibungsliste. Parameter, die Objekte mit mehreren Mitgliedern sind, können eine verschachtelte Beschreibungslisten enthalten, die selbst enthält eine Erklärung dazu, was jedes Mitglied sein sollte. Optionale Parameter sollten mit einem \\{{optional_inline}} Makro-Aufruf neben ihrem Namen im Beschreibungsterm markiert werden.

Der Name jedes Parameters in der Liste sollte in der Markdown-Code-Zaun-Notation `` ` ` `` enthalten sein.

> [!NOTE]
> Auch wenn das Feature keine Parameter akzeptiert, sollten Sie einen "Parameter" Abschnitt einschließen, mit dem Inhalt "Keine".

#### Rückgabewert Abschnitt

Als nächstes fügen Sie einen "Rückgabewert" Unterabschnitt hinzu, der erklärt, was der Rückgabewert des Konstruktors oder der Methode ist. Siehe die oben verlinkten Beispiele.

Wenn es keinen Rückgabewert gibt, verwenden Sie den folgenden Text:

None (\\{{jsxref("undefined")}}).

#### Ausnahmen Abschnitt

Schließlich fügen Sie einen "Ausnahmen" Unterabschnitt hinzu, der erklärt, welche Ausnahmen ausgelöst werden können, wenn ein Problem beim Aufrufen des Konstruktors/der Methode auftritt. Dies könnte darauf zurückzuführen sein, dass ein Parametername falsch geschrieben wurde oder ihm ein Wert vom falschen Datentyp zugewiesen wurde, dass es ein Problem mit der Umgebung gibt, in der er aufgerufen wird (z. B. der Versuch, ein nur für sichere Kontexte verfügbares Feature in einem nicht sicheren Kontext auszuführen), oder aus einem anderen Grund.

Die Bestimmung, welche Ausnahmen durch eine Methode ausgelöst werden, erfordert möglicherweise eine gründliche Durchsicht der Spezifikation. Ein Überblick über die schrittweise Erklärung der Arbeitsweise eines Features in der Spezifikation liefert in der Regel eine solide Liste der Ausnahmen und der Situationen, die dazu führen, dass sie ausgelöst werden.

Die Namen und Erklärungen der Ausnahmen sollten in einer Beschreibungslisten enthalten sein.

> [!NOTE]
> Wenn keine Ausnahmen bei dem Feature ausgelöst werden können, müssen Sie keinen Abschnitt "Ausnahmen" einfügen, aber Sie können ihn mit dem Inhalt "Keine" einfügen, wenn Sie möchten.

### Eigenschaften

#### Wert Abschnitt

Eigenschaften enthalten keinen Syntaxabschnitt. Stattdessen fügen Sie einen "Wert" Abschnitt hinzu, der eine Erklärung des Werts der Eigenschaft enthält. Beschreiben Sie den Datentyp und wozu er dient.

#### Ausnahmen Abschnitt

Wenn der Zugriff auf die Eigenschaft eine Ausnahme auslösen kann, fügen Sie einen "Ausnahmen" Unterabschnitt hinzu, der jede Ausnahme erklärt; dies sollte genauso wie der oben für Methoden und Konstruktoren beschriebene eingerichtet werden.

## JavaScript-Referenzsyntax

JavaScript-Eingebaute Objekt-Referenzseiten folgen den gleichen Grundregeln wie API-Referenzseiten; z.B. für Methoden und Eigenschaften. Es gibt einige Unterschiede, die Sie beobachten könnten:

- Für eingebaute Objekte mit einem einzigen Konstruktor wird die Konstruktorsyntax häufig auf der Objekteröffnungsseite enthalten. Siehe {{JSxRef("Date")}} zum Beispiel. Sie werden bemerken, dass statische Methoden (diejenigen, die auf dem `Date` Objekt selbst existieren) unter "Methoden" aufgeführt sind, während Instanzmethoden unter "Date.prototype Methoden" aufgelistet sind.
- Sie werden auch bemerken, dass Methoden, die keine Parameter/Ausnahmen haben, eher diese Unterabschnitte überhaupt nicht auf JavaScript-Referenzseiten enthalten. Siehe {{JSxRef("Date.getDate()")}} und {{JSxRef("Date.now()")}} für Beispiele.

## CSS-Referenzsyntax

### Eigenschaften

CSS-Eigenschaftsreferenzseiten enthalten einen "Syntax" Abschnitt, der früher oben auf der Seite gefunden wurde, aber zunehmend häufiger unterhalb eines Abschnitts gefunden wird, der einen Codeblock zeigt, der die typische Nutzung des Features zeigt, sowie ein Live-Beispiel, das illustriert, was das Feature tut (siehe {{CSSxRef("animation")}} zum Beispiel).

> [!NOTE]
> Wir machen dies, weil die formale Syntax von CSS komplex ist, nicht von vielen der MDN-Leserschaft verwendet wird und für Anfänger abschreckend sein kann. Reale Syntax und Beispiele sind für die Mehrheit der Menschen nützlicher.

Im Syntaxabschnitt finden Sie die folgenden Inhalte.

#### Optionaler Erklärungstext

Einige CSS-Eigenschaften sind selbsterklärend und benötigen keine zusätzliche Erklärung (zum Beispiel {{CSSxRef("color")}}). Einige wiederum sind komplexer und benötigen eine Erklärung der Syntaxreihenfolge, einschließlich mehrerer Werte etc. (siehe {{CSSxRef("animation")}}). In solchen Fällen können Sie vor den Unterabschnitten zusätzliche Erklärungen hinzufügen.

#### Werte Abschnitt

Als nächstes sollten Sie einen "Werte" Abschnitt einschließen — dies enthält eine Beschreibungslisten, die die CSS-Wertetypen beschreibt, aus denen der Wert der Eigenschaft besteht. Jeder Wertetyp sollte in spitze Klammern gesetzt und auf die MDN-Referenzseite verlinkt werden, die diesen Wertetyp behandelt, sofern es eine Seite dafür gibt. Zum Beispiel siehe die {{CSSxRef("border")}} Eigenschaftsreferenz — diese verweist auf drei Wertetypen, von denen nur einer verlinkt ist ({{CSSxRef("&lt;color&gt;")}}).

#### Formale Syntax

Der letzte Abschnitt, "Formale Syntax", wird automatisch aus den Daten im [MDN-Daten-Repo](https://github.com/mdn/data)'s CSS-Verzeichnis generiert. Sie müssen nur einen `CSSSyntax` Makro-Aufruf unter dem Titel einfügen, und dieser erledigt den Rest.

Die einzige Komplikation ergibt sich daraus, sicherzustellen, dass die benötigten Daten vorhanden sind. Die Datei [properties.json](https://github.com/mdn/data/blob/main/css/properties.json) muss einen Eintrag für die Eigenschaft enthalten, die Sie dokumentieren, und die Datei [types.json](https://github.com/mdn/data/blob/main/css/types.json) muss einen Eintrag für alle Wertetypen enthalten, die im Wert der Eigenschaft verwendet werden.

Sie müssen dies tun, indem Sie das [MDN-Daten-Repo](https://github.com/mdn/data) forken, Ihren Fork lokal klonen, die Änderungen in einem neuen Branch vornehmen, dann einen Pull-Request gegen das Upstream-Repo einreichen. Sie können [weitere Details zur Verwendung von Git hier finden](/de/docs/MDN/Writing_guidelines/Page_structures/Compatibility_tables).

### Selektoren

Der "Syntax" Abschnitt der Selektorreferenzseiten ist viel einfacher als der der Eigenschaftsseiten. Er enthält einen Block, der mit dem Stil "Syntax Box" gestaltet ist und die grundlegende Syntax des Selektors zeigt, sei es nur ein einfaches Schlüsselwort (z.B. {{CSSxRef(":hover")}}) oder ein komplexerer Funktionswert, der einen Parameter übernimmt (z.B. {{CSSxRef(":not", ":not()")}}). Manchmal wird der Parameter in einem weiteren Eintrag innerhalb des Syntaxblocks erklärt (siehe {{CSSxRef(":nth-last-of-type", ":nth-last-of-type()")}} für ein Beispiel).

Dieser Block wird automatisch aus den Daten im [MDN-Daten-Repo](https://github.com/mdn/data)'s CSS-Verzeichnis generiert. Sie müssen nur einen `CSSSyntax` Makro-Aufruf unter dem Titel einfügen, und dieser erledigt den Rest.

Die einzige Komplikation ergibt sich daraus, sicherzustellen, dass die benötigten Daten vorhanden sind. Die Datei [selectors.json](https://github.com/mdn/data/blob/main/css/selectors.json) muss einen Eintrag für den Selektor enthalten, den Sie dokumentieren.

Sie müssen dies tun, indem Sie das [MDN-Daten-Repo](https://github.com/mdn/data) forken, Ihren Fork lokal klonen, die Änderungen in einem neuen Branch vornehmen, dann einen Pull-Request gegen das Upstream-Repo einreichen. Sie können [weitere Details zur Verwendung von Git hier finden](/de/docs/MDN/Writing_guidelines/Page_structures/Compatibility_tables).

## HTML-Referenzsyntax

HTML-Referenzseiten haben keine "Syntax" Abschnitte — die Syntax ist immer nur der Elementname, umgeben von spitzen Klammern, daher ist sie nicht notwendig. Das Hauptanliegen bei HTML-Elementen sind die Attribute, die sie annehmen, und welche Werte möglich sind, und dies wird in einem separaten "Attribute" Abschnitt behandelt. Siehe {{htmlelement("ol")}} und {{htmlelement("video")}} für Beispiele.

## HTTP-Referenzsyntax

Die Syntax der HTTP-Referenz ist vollständig manuell erstellt und unterscheidet sich je nach Art des HTTP-Features, das dokumentiert wird.

### HTTP-Header/Content-Security-Policy

Die Syntax der HTTP-Header (und Content-Security-Policy) wird in zwei separaten Abschnitten auf der Seite dokumentiert — "Syntax" und "Direktiven".

#### Syntax Abschnitt

Der "Syntax" Abschnitt zeigt, wie die Syntax eines Headers aussehen wird, unter Verwendung eines Syntaxblocks, der mit dem Stil "Syntax Box" gestaltet ist, einschließlich einer formalen Syntax, um genau zu zeigen, welche Direktiven im Wert enthalten sein können, in welcher Reihenfolge etc. Zum Beispiel sieht der Syntaxblock des {{HTTPHeader("If-None-Match")}} Headers so aus:

```http
If-None-Match: <etag_value>
If-None-Match: <etag_value>, <etag_value>, …
If-None-Match: *
```

Einige Header werden separate Anforderungsdirektiven-, Antwortdirektiven- und Erweiterungssyntaxen haben. Wenn verfügbar, müssen diese in separaten Syntaxblöcken enthalten sein, jeweils unter einem eigenen Unterabschnitt. Siehe {{HTTPHeader("Cache-Control")}} für ein Beispiel.

#### Direktiven Abschnitt

Der "Direktiven" Abschnitt enthält eine Beschreibungslisten, die die Namen und Beschreibungen aller Direktiven enthält, die innerhalb der Syntax erscheinen können.

### HTTP-Anfragemethoden

Die Syntax der Anfragemethoden ist wirklich einfach und enthält nur einen Syntaxblock, der mit dem Stil "Syntax Box" gestaltet ist und zeigt, wie die Methodensyntax strukturiert ist. Die Syntax für die [GET Methode](/de/docs/Web/HTTP/Methods/GET) sieht so aus:

```http
GET /index.html
```

### HTTP-Antwortstatuscodes

Auch die Syntax für HTTP-Antwortstatuscodes ist wirklich einfach — ein Syntaxblock, der den Code und Namen enthält. Zum Beispiel:

```http
404 Not Found
```

## SVG-Referenzsyntax

### SVG-Elemente

Die Syntaxabschnitte für SVG-Elemente sind nicht vorhanden — genau wie die Syntaxabschnitte für HTML-Elemente. Jede SVG-Elementreferenzseite enthält nur eine Liste der Attribute, die auf dieses Element angewendet werden können. Siehe {{SVGElement("feTile")}} für ein Beispiel.

### SVG-Attribute

Auch SVG-Attributreferenzseiten enthalten keine Syntaxabschnitte.

## Siehe auch

- [Markdown in MDN](/de/docs/MDN/Writing_guidelines/Howto/Markdown_in_MDN#example_code_blocks)
