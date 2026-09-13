---
title: Arbeiten mit dem Drag-Datenspeicher
slug: Web/API/HTML_Drag_and_Drop_API/Drag_data_store
l10n:
  sourceCommit: 2a4ce8db664c71d41fa179be43f3336ad384ab65
---

{{DefaultAPISidebar("HTML Drag and Drop API")}}

Die Schnittstelle [`DragEvent`](/de/docs/Web/API/DragEvent) verfügt über eine Eigenschaft [`dataTransfer`](/de/docs/Web/API/DragEvent/dataTransfer), die ein [`DataTransfer`](/de/docs/Web/API/DataTransfer)-Objekt ist. [`DataTransfer`](/de/docs/Web/API/DataTransfer)-Objekte stellen den Hauptkontext des Drag-Vorgangs dar und bleiben beim Auslösen verschiedener Ereignisse konsistent. Sie umfassen die [Drag-Daten](/de/docs/Web/API/HTML_Drag_and_Drop_API#drag_data_store), das [Drag-Bild](/de/docs/Web/API/HTML_Drag_and_Drop_API/Drag_operations#setting_the_drag_feedback_image), den [Drop-Effekt](/de/docs/Web/API/HTML_Drag_and_Drop_API/Drag_operations#drop_effects) usw. Dieser Artikel konzentriert sich auf den Teil des _Datenspeichers_ von `dataTransfer`.

## Struktur des Drag-Datenspeichers

Grundsätzlich ist der Drag-Datenspeicher eine Liste von Einträgen, dargestellt als [`DataTransferItemList`](/de/docs/Web/API/DataTransferItemList) aus [`DataTransferItem`](/de/docs/Web/API/DataTransferItem)-Objekten. Jeder Eintrag kann eine von zwei [Arten](/de/docs/Web/API/DataTransferItem/kind) sein:

- `string`: Seine Nutzlast ist ein String, abrufbar mit [`getAsString()`](/de/docs/Web/API/DataTransferItem/getAsString).
- `file`: Seine Nutzlast ist ein Dateiobjekt, abrufbar mit [`getAsFile()`](/de/docs/Web/API/DataTransferItem/getAsFile) (oder [`getAsFileSystemHandle()`](/de/docs/Web/API/DataTransferItem/getAsFileSystemHandle) bzw. [`webkitGetAsEntry()`](/de/docs/Web/API/DataTransferItem/webkitGetAsEntry), wenn komplexere Dateisystemoperationen erforderlich sind).

Darüber hinaus wird der Eintrag durch einen [Typ](/de/docs/Web/API/DataTransferItem/type) identifiziert, der konventionsgemäß die Form eines [MIME-Typs](/de/docs/Web/HTTP/Guides/MIME_types) hat. Dieser Typ kann dem Empfänger vorgeben, wie die Nutzlast geparst oder dekodiert werden soll. Für alle Texteinträge darf die Liste nur einen Eintrag jedes Typs enthalten. Die Liste enthält daher faktisch zwei getrennte Sammlungen: eine Liste von Dateien mit möglicherweise doppelten Typen und eine {{jsxref("Map")}} von Texteinträgen, die durch ihren Typ als Schlüssel bestimmt werden. Im Allgemeinen stellt die Dateiliste mehrere gezogene Dateien dar. Die Text-Map stellt _nicht_ mehrere übertragene Ressourcen dar, sondern dieselbe Ressource, die auf unterschiedliche Arten kodiert ist, sodass die empfangende Seite die am besten geeignete unterstützte Interpretation auswählen kann. Die Texteinträge sollen in absteigender Reihenfolge ihrer Präferenz sortiert sein.

Auf diese Liste kann über die Eigenschaft [`DataTransfer.items`](/de/docs/Web/API/DataTransfer/items) zugegriffen werden.

Die HTML Drag and Drop API durchlief mehrere Iterationen, wodurch zwei nebeneinander bestehende Möglichkeiten zur Verwaltung des Datenspeichers entstanden. Vor den Schnittstellen `DataTransferItemList` und `DataTransferItem` verwendete die „alte Methode“ die folgenden Eigenschaften von `DataTransfer`:

- [`types`](/de/docs/Web/API/DataTransfer/types): Enthält die `type`-Eigenschaften der _Texteinträge_ in der Liste sowie den Wert `"files"`, falls _Dateieinträge_ vorhanden sind.
- [`setData()`](/de/docs/Web/API/DataTransfer/setData), [`getData()`](/de/docs/Web/API/DataTransfer/getData), [`clearData()`](/de/docs/Web/API/DataTransfer/clearData): Ermöglichen über das Modell der „Typ-zu-Nutzlast-Zuordnung“ den Zugriff auf die _Texteinträge_ in der Liste.
- [`files`](/de/docs/Web/API/DataTransfer/files): Ermöglicht den Zugriff auf die _Dateieinträge_ in der Liste als [`FileList`](/de/docs/Web/API/FileList).

Sie werden möglicherweise feststellen, dass die Typen der _Dateieinträge_ nicht direkt verfügbar gemacht werden. Sie sind weiterhin zugänglich, jedoch nur über die Eigenschaft [`type`](/de/docs/Web/API/Blob/type) jedes [`File`](/de/docs/Web/API/File)-Objekts in der Liste `files`. Wenn Sie die Dateien nicht lesen können, können Sie daher auch ihre Typen nicht ermitteln (siehe [Lesen des Drag-Datenspeichers](#den_drag-datenspeicher_lesen), um zu erfahren, wann der Speicher lesbar ist).

Um die Dateien und ihre Typen abzurufen, empfehlen wir die Verwendung der Eigenschaft `items`, da sie eine flexiblere und konsistentere Schnittstelle bietet. Auch für Texteinträge sollten Sie aus Gründen der Konsistenz vorzugsweise die Eigenschaft `items` verwenden, obwohl die Methode `getData()` bequemer ist, um auf einen bestimmten Typ zuzugreifen oder ihn zu entfernen.

Ein weiterer wichtiger Unterschied zwischen den Schnittstellen [`DataTransfer`](/de/docs/Web/API/DataTransfer) und [`DataTransferItem`](/de/docs/Web/API/DataTransferItem) besteht darin, dass erstere die synchrone Methode [`getData()`](/de/docs/Web/API/DataTransfer/getData) verwendet, um auf die Textnutzlast zuzugreifen, während letztere stattdessen die asynchrone Methode [`getAsString()`](/de/docs/Web/API/DataTransferItem/getAsString) verwendet.

## Den Drag-Datenspeicher ändern

Für standardmäßig ziehbare Elemente wie Bilder, Links und Auswahlen sind die Drag-Daten bereits vom Browser definiert; für benutzerdefinierte ziehbare Elemente, die mit dem Attribut `draggable` definiert werden, müssen Sie die Drag-Daten selbst festlegen. Änderungen am Datenspeicher können nur innerhalb des Handlers für [`dragstart`](/de/docs/Web/API/HTMLElement/dragstart_event) vorgenommen werden – für das `dataTransfer` jedes anderen Drag-Ereignisses ist der Datenspeicher nicht veränderbar.

Um Textdaten zum Drag-Datenspeicher hinzuzufügen, verwendet die „neue Methode“ die Methode [`DataTransferItemList.add()`](/de/docs/Web/API/DataTransferItemList/add), während die „alte Methode“ die Methode [`DataTransfer.setData()`](/de/docs/Web/API/DataTransfer/setData) verwendet.

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

Bei beiden Methoden geschieht nichts, wenn sie aufgerufen werden, während der Datenspeicher nicht veränderbar ist. Wenn bereits ein Texteintrag desselben Typs vorhanden ist, löst `add()` einen Fehler aus, während `setData()` den vorhandenen Eintrag überschreibt.

Um Dateidaten zum Drag-Datenspeicher hinzuzufügen, verwendet die „neue Methode“ weiterhin die Methode [`DataTransferItemList.add()`](/de/docs/Web/API/DataTransferItemList/add). Da die „alte Methode“ Dateieinträge in der Eigenschaft [`DataTransfer.files`](/de/docs/Web/API/DataTransfer/files) speichert, die eine schreibgeschützte [`FileList`](/de/docs/Web/API/FileList) ist, gibt es kein direktes Äquivalent.

```js
function dragstartHandler(ev) {
  // New way: add(data)
  ev.dataTransfer.items.add(new File([blob], "image.png"));
}

const p1 = document.getElementById("p1");
p1.addEventListener("dragstart", dragstartHandler);
```

Beachten Sie, dass `add()` beim Hinzufügen von Dateidaten den Parameter `type` ignoriert und die Eigenschaft [`type`](/de/docs/Web/API/Blob/type) des `File`-Objekts verwendet.

> [!NOTE]
> Der Lese-/Schreibschutz erfolgt [pro Job](/de/docs/Web/JavaScript/Reference/Execution_model#job_queue_and_event_loop). Das bedeutet, dass nur der _synchrone Code_ innerhalb des `dragstart`-Handlers den Datenspeicher ändern kann. Wenn Sie nach einer asynchronen Operation versuchen, auf den Datenspeicher zuzugreifen, verfügen Sie nicht mehr über Schreibberechtigungen. Das Folgende funktioniert beispielsweise nicht:
>
> ```js example-bad
> function dragstartHandler(ev) {
>   canvas.toBlob((blob) => {
>     ev.dataTransfer.items.add(new File([blob], "image.png"));
>   });
> }
> ```

Das Entfernen von Daten ist ähnlich und erfolgt mit den Methoden [`DataTransferItemList.remove()`](/de/docs/Web/API/DataTransferItemList/remove), [`DataTransferItemList.clear()`](/de/docs/Web/API/DataTransferItemList/clear) oder [`DataTransfer.clearData()`](/de/docs/Web/API/DataTransfer/clearData).

## Den Drag-Datenspeicher lesen

Abgesehen vom Ereignis `dragstart`, bei dem Sie vollständigen Zugriff auf den Datenspeicher haben, können Sie den Datenspeicher nur während des Ereignisses [`drop`](/de/docs/Web/API/HTMLElement/drop_event) _lesen_. Dadurch kann das Drop-Ziel die Daten abrufen.

Um Textdaten aus dem Drag-Datenspeicher zu lesen, verwendet die „neue Methode“ das Objekt [`DataTransferItemList`](/de/docs/Web/API/DataTransferItemList), während die „alte Methode“ die Methode [`DataTransfer.getData()`](/de/docs/Web/API/DataTransfer/getData) verwendet. Die neue Methode ist bequemer, um alle Einträge zu durchlaufen, während die alte Methode bequemer ist, um auf einen bestimmten Typ zuzugreifen.

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

Um Dateidaten aus dem Drag-Datenspeicher zu lesen, verwendet die „neue Methode“ weiterhin das Objekt [`DataTransferItemList`](/de/docs/Web/API/DataTransferItemList), während die „alte Methode“ die Eigenschaft [`DataTransfer.files`](/de/docs/Web/API/DataTransfer/files) verwendet.

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

Außerhalb der Ereignisse `dragstart` und `drop` befindet sich der Datenspeicher im _geschützten Modus_, der verhindert, dass Code auf irgendeine Nutzlast zugreift. Im Einzelnen:

- Alle [Änderungsversuche](#den_drag-datenspeicher_ändern) führen stillschweigend zu keiner Aktion oder lösen eine `DOMException` aus (nur bei `items.remove()`).
- `DataTransfer.getData()` gibt immer den leeren String zurück.
- `DataTransfer.files` gibt immer eine leere Liste zurück.
- `DataTransferItem.getAsString()` wird beendet, ohne jemals den Callback aufzurufen.
- `DataTransferItem.getAsFile()` gibt immer `null` zurück.

Auch hier erfolgt der Lese-/Schreibschutz [pro Job](/de/docs/Web/JavaScript/Reference/Execution_model#job_queue_and_event_loop). Das bedeutet, dass nur der _synchrone Code_ innerhalb des `drop`-Handlers den Datenspeicher lesen kann. Wenn Sie nach einer asynchronen Operation versuchen, auf den Datenspeicher zuzugreifen, verfügen Sie nicht mehr über Schreibberechtigungen. Das Folgende funktioniert beispielsweise nicht:

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

Stattdessen müssen Sie alle Zugriffsmethoden zunächst synchron aufrufen und später auf ihre Ergebnisse warten:

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

## Häufige Drag-Datentypen

Die Spezifikation definiert das Verhalten nur für einige wenige Datentypen, aber Browser unterstützen manchmal weitere Typen nativ. Im Allgemeinen sind Typen als _Protokoll_ gedacht, genau wie MIME-Typen, und Sie können jeden Typ verwenden, solange die empfangende Seite (eine andere Webseite, ein anderer Teil derselben Webseite oder sogar ein Ort außerhalb des Browsers) ihn versteht. Dieser Abschnitt beschreibt einige gängige Konventionen und das Standardverhalten von Browsern.

Beachten Sie, dass sich die folgenden Szenarien auf die _Absicht_ und nicht auf das _Verhalten_ beziehen. Wenn wir beispielsweise „Ziehen eines Links“ sagen, zieht der Benutzer möglicherweise kein tatsächliches `<a>`-Element; er kann einen Container ziehen, der einen oder mehrere Links enthält. Die Absicht besteht jedoch darin, den oder die Links als Daten zu übertragen, sodass der von Ihnen vorbereitete Datenspeicher derselbe sein kann, als würde der Benutzer einen tatsächlichen Link ziehen.

### Text ziehen

Verwenden Sie zum Ziehen von Text den Typ `text/plain`, wobei der gezogene String der Wert ist. Zum Beispiel:

```js
event.dataTransfer.items.add("This is text to drag", "text/plain");
```

Sie sollten immer Daten des Typs `text/plain` als Fallback für Anwendungen oder Drop-Ziele hinzufügen, die keine anderen Typen unterstützen, es sei denn, es gibt keine sinnvolle Textalternative. Fügen Sie diesen Typ `text/plain` immer zuletzt hinzu, da er am wenigsten spezifisch ist und nicht bevorzugt werden sollte.

In `getData()`, `setData()` und `clearData()` wird der Typ `Text` (Groß-/Kleinschreibung wird nicht berücksichtigt) als `text/plain` behandelt.

Standardmäßig werden beim Ziehen einer Auswahl die folgenden Dateneinträge erstellt:

- `text/plain`: Enthält den ausgewählten Text. Firefox und Safari sortieren diesen Eintrag nach `text/html`, obwohl die Spezifikation verlangt, dass er an erster Stelle steht.
- `text/html`: Enthält den vollständigen HTML-Quelltext der ausgewählten Elemente (mit allen inline eingefügten Styles).

Die Spezifikation verlangt außerdem einen weiteren Eintrag des Typs `application/microdata+json`, der die aus dem bzw. den Elementen der gezogenen Auswahl extrahierten [Mikrodaten](/de/docs/Web/HTML/Guides/Microdata) enthält. Kein Browser implementiert diesen Eintrag.

Beim Ablegen in einem bearbeitbaren Textfeld wie einem {{HTMLElement("textarea")}} oder [`<input type="text">`](/de/docs/Web/HTML/Reference/Elements/input/text) wird der Eintrag `text/plain` standardmäßig in das Feld kopiert (ohne Ereignisbehandlung).

### Links ziehen

Gezogene Hyperlinks sollten Daten von zwei Typen enthalten: `text/uri-list` und `text/plain`. _Beide_ Typen sollten die URL des Links als Daten verwenden. Hinweis: Der URL-Typ lautet `uri-list` mit einem _I_, nicht mit einem _L_.

Legen Sie wie üblich den Typ `text/plain` zuletzt als Fallback für den Typ `text/uri-list` fest. Zum Beispiel:

```js
event.dataTransfer.items.add("https://www.mozilla.org", "text/uri-list");
event.dataTransfer.items.add("https://www.mozilla.org", "text/plain");
```

Um mehrere Links zu ziehen, trennen Sie jeden Link in den Daten `text/uri-list` mit einem CRLF-Zeilenumbruch. Zeilen, die mit einem Nummernzeichen (`#`) beginnen, sind Kommentare und sollten nicht als URLs betrachtet werden. Sie können Kommentare verwenden, um den Zweck einer URL, den mit einer URL verknüpften Titel oder andere Daten anzugeben.

> [!WARNING]
> Der Fallback `text/plain` für mehrere Links sollte alle URLs, aber keine Kommentare enthalten.

Die folgenden Beispieldaten `text/uri-list` enthalten zwei Links und einen Kommentar:

```plain
https://www.mozilla.org
#A second link
http://www.example.com
```

Stellen Sie beim Abrufen eines abgelegten Links sicher, dass Sie den Fall behandeln, dass mehrere Links gezogen werden, einschließlich etwaiger Kommentare.

In `getData()`, `setData()` und `clearData()` wird der Typ `URL` (Groß-/Kleinschreibung wird nicht berücksichtigt) als `text/uri-list` behandelt. Bei `getData()` enthält das Ergebnis nur die erste URL in der Liste.

Standardmäßig werden beim Ziehen eines {{HTMLElement("a")}}-Elements die folgenden Dateneinträge erstellt:

- `text/x-moz-url` (nur Firefox): Enthält sowohl das Attribut `href` als auch den Linktext, getrennt durch einen Zeilenumbruch.
- `text/x-moz-url-data` (nur Firefox): Enthält nur `href`.
- `text/x-moz-url-desc` (nur Firefox): Enthält nur den Linktext.
- `text/uri-list`: Enthält das Attribut `href`.
- `text/html` (nur Chrome und Firefox): Enthält den vollständigen HTML-Quelltext des `<a>`-Elements (mit allen inline eingefügten Styles).
- `text/plain`: Enthält ebenfalls das Attribut `href`. Chrome sortiert diesen Eintrag vor `text/uri-list`.

### Bilder ziehen

Das direkte Ziehen von Bildern (d.h. die Daten sind der Pixelinhalt) ist nicht üblich und wird möglicherweise auf bestimmten Plattformen nicht unterstützt. Stattdessen werden Bilder gewöhnlich nur anhand ihrer URLs gezogen. Verwenden Sie dazu, wie bei anderen URLs, den Typ `text/uri-list`. Die Daten sollten die URL des Bildes sein oder eine [`data:`-URL](/de/docs/Web/URI/Reference/Schemes/data), wenn das Bild nicht auf einer Website oder Festplatte gespeichert ist.

Wie bei Links sollten die Daten für den Typ `text/plain` ebenfalls die URL enthalten. Eine `data:`-URL ist in einem Textkontext jedoch normalerweise nicht nützlich, daher möchten Sie die Daten `text/plain` in dieser Situation möglicherweise weglassen.

```js
event.dataTransfer.items.add(imageURL, "text/uri-list");
event.dataTransfer.items.add(imageURL, "text/plain");
```

Standardmäßig werden beim Ziehen eines {{HTMLElement("img")}}-Elements die folgenden Dateneinträge erstellt:

- `text/x-moz-url` (nur Firefox): Enthält sowohl das Attribut `src` als auch den Alternativtext (oder erneut `src`, wenn der Alternativtext leer ist), getrennt durch einen Zeilenumbruch.
- `text/x-moz-url-data` (nur Firefox): Enthält nur `src`.
- `text/x-moz-url-desc` (nur Firefox): Enthält nur den Alternativtext (oder `src`, wenn der Alternativtext leer ist).
- `text/uri-list`: Enthält das Attribut `src`.
- `text/html`: Enthält den vollständigen HTML-Quelltext des `<img>`-Elements (mit allen inline eingefügten Styles).
- `text/plain` (nur Firefox): Enthält das Attribut `src`.

Safari erstellt außerdem einen Dateieintrag, der die Bilddaten mit dem passenden MIME-Typ wie `image/png` enthält.

### Elemente ziehen

Wenn das gezogene Element ein beliebiges Element mit `draggable="true"` ist, hängt die festzulegende Datenmenge davon ab, was Sie übertragen möchten.

Eine häufige Möglichkeit zur Übertragung des Elements ist die Verwendung des Typs `text/html`, der serialisierten HTML-Quellcode enthält, den die empfangende Seite anschließend parsen und einfügen kann. Beispielsweise wäre es geeignet, die Daten auf den Wert der Eigenschaft [`outerHTML`](/de/docs/Web/API/Element/outerHTML) eines Elements zu setzen. Auch `text/xml` kann verwendet werden, stellen Sie jedoch sicher, dass die Daten wohlgeformtes XML sind.

Sie können auch eine Klartextdarstellung der HTML- oder XML-Daten mit dem Typ `text/plain` einschließen. Die Daten sollten nur den Text ohne die Quell-Tags oder Attribute enthalten. Zum Beispiel:

```js
event.dataTransfer.items.add(element.outerHTML, "text/html");
event.dataTransfer.items.add(element.innerText, "text/plain");
```

Sie können auch andere Typen verwenden, die Sie für benutzerdefinierte Zwecke erfinden. Bemühen Sie sich, immer eine Alternative `text/plain` einzuschließen, es sei denn, das gezogene Objekt ist spezifisch für eine bestimmte Website oder Anwendung. In diesem Fall stellt der benutzerdefinierte Typ sicher, dass die Daten nicht an anderer Stelle abgelegt werden können.

### Dateien aus einem Dateiexplorer des Betriebssystems ziehen

Wenn das gezogene Element eine Datei ist, wird den Drag-Daten ein Eintrag der Art `file` hinzugefügt. Der MIME-Typ wird gewöhnlich anhand der Erweiterung bestimmt, ohne den Inhalt der Datei zu untersuchen. Alle Browser geben einen leeren String zurück, wenn der MIME-Typ nicht bestimmt werden kann, obwohl die Spezifikation `application/octet-stream` verlangt. Derzeit können gezogene Dateien nur außerhalb des Browsers stammen, beispielsweise aus einem Dateiexplorer.

Firefox fügt außerdem einen nicht standardmäßigen Texteintrag des Typs `application/x-moz-file` hinzu, der den vollständigen Pfad der Datei im Dateisystem des Benutzers enthält. Außerhalb privilegierten Codes (wie einer Erweiterung) ist sein Wert der leere String.

### Dateien in einen Dateiexplorer des Betriebssystems ziehen

Was aus dem Browser übertragen werden kann, hängt größtenteils vom Browser und vom Ziel ab, auf das es gezogen wird. Das [Ziehen von Bildern](#bilder_ziehen) in das lokale Dateisystem wird häufig unterstützt und führt dazu, dass das Bild heruntergeladen wird.

Chrome unterstützt den nicht standardmäßigen Typ `DownloadURL`. Die Nutzlast sollte Text in der Form `<MIME type>:<file name>:<file URL>` sein. Zum Beispiel:

```js
event.dataTransfer.items.add(
  "image/png:example.png:data:image/png;base64,iVBORw0K...",
  "DownloadURL",
);
```

Dadurch kann eine beliebige Datei heruntergeladen werden, wenn sie in den Dateiexplorer gezogen wird, oder beim Ablegen in ein anderes Browserfenster so behandelt werden, als ob [eine Datei abgelegt würde](#dateien_aus_einem_dateiexplorer_des_betriebssystems_ziehen) (obwohl CORS-Einschränkungen gelten können). Siehe [Dateien wie Gmail herausziehen](https://ryanseddon.com/html5/gmail-dragout/) für einen praktischen Anwendungsfall.

## Siehe auch

- [HTML Drag and Drop API (Übersicht)](/de/docs/Web/API/HTML_Drag_and_Drop_API)
- [Drag-Vorgänge](/de/docs/Web/API/HTML_Drag_and_Drop_API/Drag_operations)
