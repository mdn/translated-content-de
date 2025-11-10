---
title: Arbeiten mit dem Drag-Daten-Store
slug: Web/API/HTML_Drag_and_Drop_API/Drag_data_store
l10n:
  sourceCommit: a4fcf79b60471db6f148fa4ba36f2cdeafbbeb70
---

{{DefaultAPISidebar("HTML Drag and Drop API")}}

Das [`DragEvent`](/de/docs/Web/API/DragEvent)-Interface hat eine [`dataTransfer`](/de/docs/Web/API/DragEvent/dataTransfer)-Eigenschaft, die ein [`DataTransfer`](/de/docs/Web/API/DataTransfer)-Objekt ist. [`DataTransfer`](/de/docs/Web/API/DataTransfer)-Objekte repräsentieren den Hauptkontext der Drag-Operation und bleiben über die Auslösung verschiedener Ereignisse hinweg konsistent. Es umfasst die [Drag-Daten](/de/docs/Web/API/HTML_Drag_and_Drop_API#drag_data_store), das [Drag-Bild](/de/docs/Web/API/HTML_Drag_and_Drop_API/Drag_operations#setting_the_drag_feedback_image), die [Drop-Effekt](/de/docs/Web/API/HTML_Drag_and_Drop_API/Drag_operations#drop_effects), usw. Dieser Artikel konzentriert sich auf den _Daten-Store_-Teil des `dataTransfer`.

## Struktur des Drag-Daten-Stores

Grundsätzlich ist der Drag-Daten-Store eine Liste von Elementen, dargestellt als eine [`DataTransferItemList`](/de/docs/Web/API/DataTransferItemList) von [`DataTransferItem`](/de/docs/Web/API/DataTransferItem)-Objekten. Jedes Element kann einer von zwei [Arten](/de/docs/Web/API/DataTransferItem/kind) sein:

- `string`: sein Nutzlast ist ein String und kann mit [`getAsString()`](/de/docs/Web/API/DataTransferItem/getAsString) abgerufen werden.
- `file`: sein Nutzlast ist ein Dateiobjekt, abrufbar mit [`getAsFile()`](/de/docs/Web/API/DataTransferItem/getAsFile) (oder [`getAsFileSystemHandle()`](/de/docs/Web/API/DataTransferItem/getAsFileSystemHandle) oder [`webkitGetAsEntry()`](/de/docs/Web/API/DataTransferItem/webkitGetAsEntry), wenn komplexere Dateisystemoperationen notwendig sind).

Weiterhin wird das Element auch durch einen [Typ](/de/docs/Web/API/DataTransferItem/type) identifiziert, der konventionell in der Form eines [MIME-Typs](/de/docs/Web/HTTP/Guides/MIME_types) ist. Dieser Typ kann den Verbraucher anweisen, wie die Nutzlast analysiert oder dekodiert werden soll. Für alle Textelemente kann die Liste nur ein Element jedes Typs haben, sodass die Liste effektiv zwei getrennte Sammlungen enthält: eine Liste von Dateien mit möglicherweise doppelten Typen und eine {{jsxref("Map")}} von Textelementen, die nach ihrem Typ schlüssig sind. Im Allgemeinen repräsentiert die Dateiliste mehrere Dateien, die gezogen werden. Die Textzuordnung repräsentiert _nicht_ mehrere Ressourcen, die übertragen werden, sondern dieselbe Ressource, die auf verschiedene Weise kodiert ist, sodass das empfangende Ende die geeignetste unterstützte Interpretation wählen kann. Die Textelemente sollen in absteigender Reihenfolge der Präferenz sortiert werden.

Diese Liste ist über die [`DataTransfer.items`](/de/docs/Web/API/DataTransfer/items)-Eigenschaft zugänglich.

Die HTML Drag and Drop API durchlief mehrere Iterationen, was zu zwei koexistierenden Wegen zur Verwaltung des Daten-Stores führte. Vor den `DataTransferItemList` und `DataTransferItem` Interfaces verwendete der "alte Weg" die folgenden Eigenschaften auf `DataTransfer`:

- [`types`](/de/docs/Web/API/DataTransfer/types): enthält die `type`-Eigenschaften der _Textelemente_ in der Liste, plus der Wert `"files"`, wenn es _Dateielemente_ gibt.
- [`setData()`](/de/docs/Web/API/DataTransfer/setData), [`getData()`](/de/docs/Web/API/DataTransfer/getData), [`clearData()`](/de/docs/Web/API/DataTransfer/clearData): bieten Zugriff auf die _Textelemente_ in der Liste unter Verwendung des "type-to-payload mapping" Modells.
- [`files`](/de/docs/Web/API/DataTransfer/files): bietet Zugriff auf die _Dateielemente_ in der Liste als [`FileList`](/de/docs/Web/API/FileList).

Sie werden feststellen, dass die Typen der _Dateielemente_ nicht direkt freigelegt werden. Sie sind immer noch zugänglich, jedoch nur über die [`type`](/de/docs/Web/API/Blob/type)-Eigenschaft jedes [`File`](/de/docs/Web/API/File)-Objekts in der `files`-Liste, sodass, wenn Sie die Dateien nicht lesen können, dann können Sie auch ihre Typen nicht erkennen (siehe [Lesen des Drag-Daten-Stores](#lesen_des_drag-daten-stores) wann der Store lesbar ist).

Um die Dateien und ihre Typen zu erhalten, empfehlen wir die Verwendung der `items`-Eigenschaft, da sie eine flexiblere und konsistentere Schnittstelle bietet. Für Textelemente sollten Sie auch die `items`-Eigenschaft der Konsistenz wegen bevorzugen, obwohl die `getData()` Methode bequemer für den Zugriff auf einen bestimmten Typ zu entfernen ist.

Ein weiterer wichtiger Unterschied zwischen den [`DataTransfer`](/de/docs/Web/API/DataTransfer) und [`DataTransferItem`](/de/docs/Web/API/DataTransferItem) Interfaces ist, dass das erstere die synchrone [`getData()`](/de/docs/Web/API/DataTransfer/getData) Methode benutzt, um auf die Textnutzlast zuzugreifen, während das letztere stattdessen die asynchrone [`getAsString()`](/de/docs/Web/API/DataTransferItem/getAsString) Methode verwendet.

## Ändern des Drag-Daten-Stores

Für die standardmäßig ziehbaren Elemente wie Bilder, Links und Auswahlen sind die Drag-Daten bereits durch den Browser definiert; für benutzerdefinierte ziehbare Elemente, die mit dem `draggable`-Attribut definiert sind, müssen Sie die Drag-Daten selbst definieren. Die einzige Zeit, um Änderungen am Daten-Store vorzunehmen, ist innerhalb des [`dragstart`](/de/docs/Web/API/HTMLElement/dragstart_event)-Handlers—für das `dataTransfer` jedes anderen Drag-Ereignisses ist der Daten-Store nicht änderbar.

Um Textdaten dem Drag-Daten-Store hinzuzufügen, verwendet der "neue Weg" die [`DataTransferItemList.add()`](/de/docs/Web/API/DataTransferItemList/add) Methode, während der "alte Weg" die [`DataTransfer.setData()`](/de/docs/Web/API/DataTransfer/setData) Methode verwendet.

```js
function dragstartHandler(ev) {
  // New way: add(data, type)
  ev.dataTransfer.items.add(ev.target.innerText, "text/plain");
  // Old way: setData(type, data)
  ev.dataTransfer.setData("text/html", ev.target.outerHTML);
}

const p1 = document.getElementById("p1");
p1.addEventListener("dragstart", dragstartHandler);
```

Für beide Methoden, wenn sie aufgerufen werden, wenn der Daten-Store nicht änderbar ist, passiert nichts. Wenn bereits ein Textelement mit demselben Typ existiert, wirft `add()` einen Fehler, während `setData()` das vorhandene Element überschreibt.

Um Dateidaten zum Drag-Daten-Store hinzuzufügen, verwendet der "neue Weg" immer noch die [`DataTransferItemList.add()`](/de/docs/Web/API/DataTransferItemList/add) Methode. Da der "alte Weg" Dateielemente in der [`DataTransfer.files`](/de/docs/Web/API/DataTransfer/files) Eigenschaft speichert, die eine schreibgeschützte [`FileList`](/de/docs/Web/API/FileList) ist, gibt es kein direktes Äquivalent.

```js
function dragstartHandler(ev) {
  // New way: add(data)
  ev.dataTransfer.items.add(new File([blob], "image.png"));
}

const p1 = document.getElementById("p1");
p1.addEventListener("dragstart", dragstartHandler);
```

Beachten Sie, dass beim Hinzufügen von Dateidaten `add()` den `type`-Parameter ignoriert und die [`type`](/de/docs/Web/API/Blob/type)-Eigenschaft des `File`-Objekts verwendet.

> [!NOTE]
> Der Lese-/Schreibschutz erfolgt auf einer [pro-Job-Basis](/de/docs/Web/JavaScript/Reference/Execution_model#job_queue_and_event_loop), was bedeutet, dass nur der _synchrone Code_ innerhalb des `dragstart`-Handlers den Daten-Store ändern kann. Wenn Sie versuchen, nach einer asynchronen Operation auf den Daten-Store zuzugreifen, haben Sie keine Schreibberechtigungen mehr. Zum Beispiel funktioniert das nicht:
>
> ```js example-bad
> function dragstartHandler(ev) {
>   canvas.toBlob((blob) => {
>     ev.dataTransfer.items.add(new File([blob], "image.png"));
>   });
> }
> ```

Das Entfernen von Daten ist ähnlich, unter Verwendung der Methoden [`DataTransferItemList.remove()`](/de/docs/Web/API/DataTransferItemList/remove), [`DataTransferItemList.clear()`](/de/docs/Web/API/DataTransferItemList/clear) oder [`DataTransfer.clearData()`](/de/docs/Web/API/DataTransfer/clearData).

## Lesen des Drag-Daten-Stores

Das einzige Mal, dass Sie aus dem Daten-Store _lesen_ können, abgesehen vom `dragstart`-Ereignis, wenn Sie vollen Zugriff auf den Daten-Store haben, ist während des [`drop`](/de/docs/Web/API/HTMLElement/drop_event)-Ereignisses, das es dem Drop-Ziel ermöglicht, die Daten abzurufen.

Um Textdaten aus dem Drag-Daten-Store zu lesen, verwendet der "neue Weg" das [`DataTransferItemList`](/de/docs/Web/API/DataTransferItemList)-Objekt, während der "alte Weg" die [`DataTransfer.getData()`](/de/docs/Web/API/DataTransfer/getData) Methode verwendet. Der neue Weg ist bequemer, um durch alle Elemente zu schleifen, während der alte Weg bequemer ist, um auf einen bestimmten Typ zuzugreifen.

```js
function dropHandler(ev) {
  // New way: loop through items
  for (const item of ev.dataTransfer.items) {
    if (item.kind === "string") {
      item.getAsString((data) => {
        // Do something with data
      });
    }
  }
  // Old way: getData(type)
  const data = ev.dataTransfer.getData("text/plain");
}

const p1 = document.getElementById("p1");
p1.addEventListener("drop", dropHandler);
```

Um Dateidaten aus dem Drag-Daten-Store zu lesen, verwendet der "neue Weg" immer noch das [`DataTransferItemList`](/de/docs/Web/API/DataTransferItemList)-Objekt, während der "alte Weg" die [`DataTransfer.files`](/de/docs/Web/API/DataTransfer/files)-Eigenschaft verwendet.

```js
function dropHandler(ev) {
  // New way: loop through items
  for (const item of ev.dataTransfer.items) {
    if (item.kind === "file") {
      const file = item.getAsFile(); // A File object
    }
  }
  // Old way: loop through files
  for (const file of ev.dataTransfer.files) {
    // Do something with file
  }
}

const p1 = document.getElementById("p1");
p1.addEventListener("drop", dropHandler);
```

### Geschützter Modus

Außerhalb der `dragstart`- und `drop`-Ereignisse befindet sich der Daten-Store im _geschützten Modus_, der Code daran hindert, auf irgendeine Nutzlast zuzugreifen. Das bedeutet konkret:

- Alle [Modifikationsversuche](#ändern_des_drag-daten-stores) tun stillschweigend nichts oder werfen einen `DOMException` (nur für `items.add()` und `items.remove()`).
- `DataTransfer.getData()` gibt immer den leeren String zurück.
- `DataTransfer.files` gibt immer eine leere Liste zurück.
- `DataTransferItem.getAsString()` kehrt zurück, ohne je den Callback aufzurufen.
- `DataTransferItem.getAsFile()` gibt immer `null` zurück.

Wieder erfolgt der Lese-/Schreibschutz auf einer [pro-Job-Basis](/de/docs/Web/JavaScript/Reference/Execution_model#job_queue_and_event_loop), was bedeutet, dass nur der _synchrone Code_ innerhalb des `drop`-Handlers den Daten-Store lesen kann. Wenn Sie versuchen, nach einer asynchronen Operation auf den Daten-Store zuzugreifen, werden Sie keine Schreibberechtigungen mehr haben. Zum Beispiel funktioniert das nicht:

```js example-bad
function getDataPromise(item) {
  return new Promise((resolve) => {
    item.getAsString((data) => {
      resolve(data);
    });
  });
}

async function dropHandler(ev) {
  for (const item of ev.dataTransfer.items) {
    if (item.kind === "string") {
      // Bad: by the second time this runs, we are no longer in the same job
      const data = await getDataPromise(item);
    }
  }
}

const p1 = document.getElementById("p1");
p1.addEventListener("drop", dropHandler);
```

Stattdessen müssen Sie alle Zugriffsmethoden synchron sofort aufrufen und später auf ihre Ergebnisse warten:

```js example-good
async function dropHandler(ev) {
  const promises = [];
  for (const item of ev.dataTransfer.items) {
    if (item.kind === "string") {
      // Bad: by the second time this runs, we are no longer in the same job
      promises.push(getDataPromise(item));
    }
  }
  const results = await Promise.all(promises);
}
```

## Häufige Drag-Daten-Typen

Die Spezifikation definiert nur das Verhalten für einige wenige Datentypen, aber Browser haben manchmal native Unterstützung für weitere Typen. Im Allgemeinen sind Typen als _Protokoll_ gedacht, genau wie MIME-Typen, und Sie können jeden Typ verwenden, solange das empfangende Ende (eine andere Webseite, ein anderer Teil derselben Webseite oder sogar außerhalb des Browsers) es versteht. Dieser Abschnitt beschreibt einige gängige Konventionen und das Standardverhalten der Browser.

Beachten Sie, dass die folgenden Szenarien sich auf die _Absicht_ und nicht das _Verhalten_ beziehen. Wenn wir zum Beispiel sagen "einen Link ziehen", kann der Benutzer möglicherweise kein tatsächliches `<a>` Element ziehen; er kann einen Container ziehen, der ein oder mehrere Links enthält, aber die Absicht ist, die Links als Daten zu übertragen, sodass der von Ihnen vorbereitete Daten-Store derselbe sein kann, wie wenn der Benutzer einen tatsächlichen Link zöge.

### Ziehen von Text

Für das Ziehen von Text verwenden Sie den Typ `text/plain` mit dem gezogenen String als Wert. Zum Beispiel:

```js
event.dataTransfer.items.add("This is text to drag", "text/plain");
```

Sie sollten immer Daten vom Typ `text/plain` als Fallback für Anwendungen oder Drop-Ziele, die keine anderen Typen unterstützen, hinzufügen, es sei denn, es gibt keine logische Textalternative. Fügen Sie diesen `text/plain`-Typ immer zuletzt hinzu, da er am wenigsten spezifisch ist und nicht bevorzugt werden sollte.

In `getData()`, `setData()` und `clearData()` wird der Typ `Text` (nicht empfindlich gegenüber Groß-/Kleinschreibung) als `text/plain` behandelt.

Standardmäßig wird beim Ziehen einer Auswahl die folgenden Daten-Items erstellt:

- `text/plain`: enthält den ausgewählten Text. Firefox und Safari sortieren dieses Element nach `text/html`, obwohl die Spezifikation es zuerst zu sein erfordert.
- `text/html`: enthält den vollständigen HTML-Quellcode der ausgewählten Elemente (mit allen in den Styles eingebundenen Stilen).

Die Spezifikation erfordert auch ein weiteres Element vom Typ `application/microdata+json`, das die [Microdata](/de/docs/Web/HTML/Guides/Microdata) enthält, die aus dem/den Element(en) in der gezogenen Auswahl extrahiert wurde(n). Kein Browser implementiert dieses Element.

Beim Drop auf ein bearbeitbares Textfeld, wie ein {{HTMLElement("textarea")}} oder [`<input type="text">`](/de/docs/Web/HTML/Reference/Elements/input/text), wird das `text/plain`-Item standardmäßig in das Feld kopiert (ohne Ereignisbehandlung).

### Ziehen von Links

Gezogene Hyperlinks sollten Daten von zwei Typen enthalten: `text/uri-list` und `text/plain`. _Beide_ Typen sollten dieselbe URL für ihre Daten verwenden. Hinweis: der URL-Typ lautet `uri-list` mit einem _I_, nicht einem _L_.

Wie üblich setzen Sie den Typ `text/plain` zuletzt als Fallback für den Typ `text/uri-list`. Zum Beispiel:

```js
event.dataTransfer.items.add("https://www.mozilla.org", "text/uri-list");
event.dataTransfer.items.add("https://www.mozilla.org", "text/plain");
```

Um mehrere Links zu ziehen, trennen Sie jeden Link in den `text/uri-list`-Daten mit einem CRLF-Zeilenumbruch. Zeilen, die mit einem Nummernzeichen (`#`) beginnen, sind Kommentare und sollten nicht als URLs betrachtet werden. Sie können Kommentare verwenden, um den Zweck einer URL anzugeben, den Titel, der mit einer URL verbunden ist, oder andere Daten.

> [!WARNING]
> Der `text/plain`-Fallback für mehrere Links sollte alle URLs, aber keine Kommentare enthalten.

Zum Beispiel enthalten diese Beispiel-`text/uri-list`-Daten zwei Links und einen Kommentar:

```plain
https://www.mozilla.org
#A second link
http://www.example.com
```

Beim Abrufen eines abgelegten Links stellen Sie sicher, dass Sie damit umgehen, wenn mehrere Links gezogen werden, einschließlich aller Kommentare.

In `getData()`, `setData()` und `clearData()` wird der `URL`-Typ (nicht empfindlich gegenüber Groß-/Kleinschreibung) als `text/uri-list` behandelt. Für `getData()` enthält das Ergebnis nur die erste URL in der Liste.

Standardmäßig wird beim Ziehen eines {{HTMLElement("a")}}-Elements die folgenden Daten-Items erstellt:

- `text/x-moz-url` (nur Firefox): enthält sowohl das `href`-Attribut als auch den Linktext, getrennt durch einen Zeilenumbruch.
- `text/x-moz-url-data` (nur Firefox): enthält nur das `href`.
- `text/x-moz-url-desc` (nur Firefox): enthält nur den Linktext.
- `text/uri-list`: enthält das `href`-Attribut.
- `text/html` (nur Chrome und Firefox): enthält die vollständige HTML-Quelle des `<a>`-Elements (mit allen in den Styles eingebundenen Stilen).
- `text/plain`: enthält ebenfalls das `href`-Attribut. Chrome sortiert dieses Element vor `text/uri-list`.

### Ziehen von Bildern

Direktes Ziehen von Bildern (d.h. die Daten sind die Pixelinhalte) ist nicht üblich und kann auf bestimmten Plattformen nicht unterstützt werden. Stattdessen werden Bilder normalerweise nur durch ihre URLs gezogen. Verwenden Sie dazu den `text/uri-list`-Typ wie bei anderen URLs. Die Daten sollten die URL des Bildes sein oder eine [`data:` URL](/de/docs/Web/URI/Reference/Schemes/data), wenn das Bild nicht auf einer Website gespeichert oder auf der Festplatte ist.

Wie bei Links sollten die Daten für den `text/plain`-Typ ebenfalls die URL enthalten. Eine `data:`-URL ist jedoch in einem Textkontext normalerweise nicht nützlich, sodass Sie in dieser Situation möglicherweise die `text/plain`-Daten ausschließen möchten.

```js
event.dataTransfer.items.add(imageURL, "text/uri-list");
event.dataTransfer.items.add(imageURL, "text/plain");
```

Standardmäßig wird beim Ziehen eines {{HTMLElement("img")}}-Elements die folgenden Daten-Items erstellt:

- `text/x-moz-url` (nur Firefox): enthält sowohl das `src`-Attribut als auch den Alternativtext (oder das `src` erneut, wenn das Alt leer ist), getrennt durch einen Zeilenumbruch.
- `text/x-moz-url-data` (nur Firefox): enthält nur das `src`-Attribut.
- `text/x-moz-url-desc` (nur Firefox): enthält nur den Alternativtext (oder das `src`, wenn das Alt leer ist).
- `text/uri-list`: enthält das `src`-Attribut.
- `text/html`: enthält die vollständige HTML-Quelle des `<img>`-Elements (mit allen in den Styles eingebundenen Stilen).
- `text/plain` (nur Firefox): enthält das `src`-Attribut.

Safari erstellt auch ein Dateielement mit den Bilddaten und dem entsprechenden MIME-Typ wie `image/png`.

### Ziehen von Elementen

Wenn das gezogene Element ein beliebiges Element mit `draggable="true"` ist, hängt das Festzulegen der Daten davon ab, was Sie zu übertragen beabsichtigen.

Ein üblicher Weg, das Element zu übertragen, ist die Verwendung des `text/html`-Typs, der den serialisierten HTML-Quellcode enthält, den das empfangende Ende dann analysieren und einfügen kann. Zum Beispiel wäre es sinnvoll, seine Daten auf den Wert der [`outerHTML`](/de/docs/Web/API/Element/outerHTML)-Eigenschaft eines Elements zu setzen. `text/xml` kann ebenfalls verwendet werden, aber stellen Sie sicher, dass die Daten gut geformtes XML sind.

Sie können auch eine einfache Textdarstellung der HTML- oder XML-Daten mit dem `text/plain`-Typ hinzufügen. Die Daten sollten nur der Text ohne jegliche Quell-Tags oder Attribute sein. Zum Beispiel:

```js
event.dataTransfer.items.add("text/html", element.outerHTML);
event.dataTransfer.items.add("text/plain", element.innerText);
```

Sie können auch andere Typen verwenden, die Sie für kundenspezifische Zwecke erfinden. Streben Sie danach, immer eine `text/plain`-Alternative einzuschließen, es sei denn, das gezogene Objekt ist spezifisch für eine bestimmte Site oder Anwendung. In diesem Fall stellt der benutzerdefinierte Typ sicher, dass die Daten woanders nicht abgelegt werden können.

### Ziehen von Dateien aus einem Dateibrowser des Betriebssystems

Wenn das gezogene Element eine Datei ist, wird dem Drag-Daten-Store ein Element der Art `file` hinzugefügt. Der `type` wird auf den MIME-Typ der Datei gesetzt (wie vom Betriebssystem bereitgestellt) oder `application/octet-stream`, wenn der Typ unbekannt ist. Derzeit können gezogene Dateien nur außerhalb des Browsers stammen, beispielsweise aus einem Dateibrowser.

Firefox fügt auch einen nicht-standardmäßigen Textgegenstand vom Typ `application/x-moz-file` hinzu, der den vollständigen Pfad der Datei auf dem Dateisystem des Benutzers enthält. Es sei denn, innerhalb privilegierten Codes (z. B. einer Erweiterung), ist sein Wert der leere String.

### Ziehen von Dateien zu einem Dateibrowser des Betriebssystems

Was aus dem Browser übertragen werden kann, hängt hauptsächlich vom Browser und davon ab, wohin es gezogen wird. [Das Ziehen von Bildern](#ziehen_von_bildern) auf die lokale Festplatte wird häufig unterstützt und führt dazu, dass das Bild heruntergeladen wird.

Chrome unterstützt den nicht standardmäßigen `DownloadURL`-Typ. Die Nutzlast sollte in der Form `<MIME-Typ>:<Dateiname>:<Datei-URL>` sein. Zum Beispiel:

```js
event.dataTransfer.items.add(
  "DownloadURL",
  "image/png:example.png:data:image/png;base64,iVBORw0K...",
);
```

Dies ermöglicht es, eine beliebige Datei herunterzuladen, wenn sie zum Dateibrowser gezogen wird, oder wenn sie in ein anderes Browserfenster abgelegt wird, als ob eine [Datei gezogen wird](#ziehen_von_dateien_aus_einem_dateibrowser_des_betriebssystems) (obwohl CORS-Einschränkungen gelten können). Siehe [Drag out files like Gmail](https://ryanseddon.com/html5/gmail-dragout/) für einen praktischen Anwendungsfall.

## Siehe auch

- [HTML Drag and Drop API (Übersicht)](/de/docs/Web/API/HTML_Drag_and_Drop_API)
- [Drag-Operationen](/de/docs/Web/API/HTML_Drag_and_Drop_API/Drag_operations)
