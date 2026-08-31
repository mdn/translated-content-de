---
title: Arbeiten mit dem Drag-Datenspeicher
slug: Web/API/HTML_Drag_and_Drop_API/Drag_data_store
l10n:
  sourceCommit: 565501caace6d4fbcb9c9b3d8cbf7b03145abbf5
---

{{DefaultAPISidebar("HTML Drag and Drop API")}}

Das [`DragEvent`](/de/docs/Web/API/DragEvent)-Interface besitzt eine [`dataTransfer`](/de/docs/Web/API/DragEvent/dataTransfer)-Eigenschaft, die ein [`DataTransfer`](/de/docs/Web/API/DataTransfer)-Objekt ist. [`DataTransfer`](/de/docs/Web/API/DataTransfer)-Objekte repräsentieren den Hauptkontext der Drag-Operation und bleiben über das Auslösen verschiedener Ereignisse hinweg konsistent. Es umfasst die [Drag-Daten](/de/docs/Web/API/HTML_Drag_and_Drop_API#drag_data_store), das [Drag-Bild](/de/docs/Web/API/HTML_Drag_and_Drop_API/Drag_operations#setting_the_drag_feedback_image), den [Drop-Effekt](/de/docs/Web/API/HTML_Drag_and_Drop_API/Drag_operations#drop_effects) usw. Dieser Artikel konzentriert sich auf den Teil _data store_ des `dataTransfer`.

## Struktur des Drag-Datenspeichers

Grundsätzlich ist der Drag-Datenspeicher eine Liste von Elementen, dargestellt als [`DataTransferItemList`](/de/docs/Web/API/DataTransferItemList) von [`DataTransferItem`](/de/docs/Web/API/DataTransferItem)-Objekten. Jedes Element kann eine von zwei [Arten](/de/docs/Web/API/DataTransferItem/kind) sein:

- `string`: dessen Nutzlast ist ein String, abrufbar mit [`getAsString()`](/de/docs/Web/API/DataTransferItem/getAsString).
- `file`: dessen Nutzlast ist ein Dateiobjekt, abrufbar mit [`getAsFile()`](/de/docs/Web/API/DataTransferItem/getAsFile) (oder [`getAsFileSystemHandle()`](/de/docs/Web/API/DataTransferItem/getAsFileSystemHandle) oder [`webkitGetAsEntry()`](/de/docs/Web/API/DataTransferItem/webkitGetAsEntry), falls komplexere Dateisystemoperationen erforderlich sind).

Darüber hinaus wird das Element auch durch einen [Typ](/de/docs/Web/API/DataTransferItem/type) identifiziert, der konventionell in Form eines [MIME-Typs](/de/docs/Web/HTTP/Guides/MIME_types) vorliegt. Dieser Typ kann dem Verbraucher angeben, wie die Nutzlast analysiert oder decodiert werden soll. Für alle Text-Elemente kann die Liste nur ein Element jedes Typs haben, so dass die Liste effektiv zwei disjunkte Sammlungen enthält: Eine Liste von Dateien mit potenziell doppelten Typen und eine {{jsxref("Map")}} von Text-Elementen, die nach ihrem Typ geordnet sind. Generell repräsentiert die Dateiliste mehrere gezogene Dateien. Die Text-Map repräsentiert _nicht_ mehrere übertragene Ressourcen, sondern dieselbe Ressource, die auf unterschiedliche Weise kodiert ist, so dass das empfangende Ende die am besten unterstützte Interpretation auswählen kann. Die Text-Elemente sollen in absteigender Reihenfolge der Präferenz sortiert werden.

Diese Liste ist über die [`DataTransfer.items`](/de/docs/Web/API/DataTransfer/items)-Eigenschaft zugänglich.

Die HTML Drag and Drop API durchlief mehrere Iterationen, was zu zwei koexistierenden Wegen führte, den Datenspeicher zu verwalten. Vor den `DataTransferItemList`- und `DataTransferItem`-Interfaces verwendete der "alte Weg" die folgenden Eigenschaften auf `DataTransfer`:

- [`types`](/de/docs/Web/API/DataTransfer/types): enthält die `type`-Eigenschaften der _Text-Elemente_ in der Liste plus den Wert `"files"`, falls es _Datei-Elemente_ gibt.
- [`setData()`](/de/docs/Web/API/DataTransfer/setData), [`getData()`](/de/docs/Web/API/DataTransfer/getData), [`clearData()`](/de/docs/Web/API/DataTransfer/clearData): gewähren Zugriff auf die _Text-Elemente_ in der Liste im "Typ-zu-Nutzlast-Mapping"-Modell.
- [`files`](/de/docs/Web/API/DataTransfer/files): gewährt Zugriff auf die _Datei-Elemente_ in der Liste als eine [`FileList`](/de/docs/Web/API/FileList).

Sie werden feststellen, dass die Typen der _Datei-Elemente_ nicht direkt offengelegt werden. Sie sind immer noch zugänglich, aber nur über die [`type`](/de/docs/Web/API/Blob/type)-Eigenschaft jedes [`File`](/de/docs/Web/API/File)-Objekts in der `files`-Liste, so dass, wenn Sie die Dateien nicht lesen können, Sie auch ihre Typen nicht kennen (siehe [Lesen des Drag-Datenspeichers](#lesen_des_drag-datenspeichers), wann der Speicher lesbar ist).

Um die Dateien und ihre Typen zu erhalten, empfehlen wir die Verwendung der `items`-Eigenschaft, da sie eine flexiblere und konsistentere Schnittstelle bietet. Für Text-Elemente sollten Sie aus Konsistenzgründen auch die `items`-Eigenschaft verwenden, obwohl die `getData()`-Methode bequemer ist, um auf einen bestimmten Typ zuzugreifen oder ihn zu entfernen.

Ein weiterer wichtiger Unterschied zwischen den [`DataTransfer`](/de/docs/Web/API/DataTransfer)- und [`DataTransferItem`](/de/docs/Web/API/DataTransferItem)-Schnittstellen besteht darin, dass die erstere die synchrone [`getData()`](/de/docs/Web/API/DataTransfer/getData)-Methode verwendet, um auf die Text-Nutzlast zuzugreifen, während die letztere stattdessen die asynchrone [`getAsString()`](/de/docs/Web/API/DataTransferItem/getAsString)-Methode verwendet.

## Modifizieren des Drag-Datenspeichers

Für die standardmäßig ziehbaren Elemente wie Bilder, Links und Auswahlen sind die Drag-Daten bereits vom Browser definiert; für benutzerdefinierte ziehbare Elemente, die mit dem `draggable`-Attribut definiert sind, müssen Sie die Drag-Daten selbst definieren. Die einzige Zeit, um Änderungen am Datenspeicher vorzunehmen, ist innerhalb des [`dragstart`](/de/docs/Web/API/HTMLElement/dragstart_event)-Handlers - für das `dataTransfer` eines anderen Drag-Ereignisses ist der Datenspeicher nicht modifizierbar.

Um Textdaten zum Drag-Datenspeicher hinzuzufügen, verwendet der "neue Weg" die [`DataTransferItemList.add()`](/de/docs/Web/API/DataTransferItemList/add)-Methode, während der "alte Weg" die [`DataTransfer.setData()`](/de/docs/Web/API/DataTransfer/setData)-Methode verwendet.

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

Für beide Methoden gilt, wenn sie aufgerufen werden, wenn der Datenspeicher nicht modifizierbar ist, passiert nichts. Wenn bereits ein Text-Element mit demselben Typ existiert, wirft `add()` einen Fehler, während `setData()` das vorhandene Element überschreibt.

Um Dateidaten zum Drag-Datenspeicher hinzuzufügen, verwendet der "neue Weg" weiterhin die [`DataTransferItemList.add()`](/de/docs/Web/API/DataTransferItemList/add)-Methode. Da der "alte Weg" Datei-Elemente in der [`DataTransfer.files`](/de/docs/Web/API/DataTransfer/files)-Eigenschaft speichert, die eine schreibgeschützte [`FileList`](/de/docs/Web/API/FileList) ist, gibt es kein direktes Äquivalent.

```js
function dragstartHandler(ev) {
  // New way: add(data)
  ev.dataTransfer.items.add(new File([blob], "image.png"));
}

const p1 = document.getElementById("p1");
p1.addEventListener("dragstart", dragstartHandler);
```

Beachten Sie, dass `add()`, wenn Dateidaten hinzugefügt werden, den `type`-Parameter ignoriert und die [`type`](/de/docs/Web/API/Blob/type)-Eigenschaft des `File`-Objekts verwendet.

> [!NOTE]
> Lese-/Schreibschutz erfolgt auf einer [pro-Job](/de/docs/Web/JavaScript/Reference/Execution_model#job_queue_and_event_loop) Basis, was bedeutet, dass nur der _synchrone Code_ innerhalb des `dragstart`-Handlers den Datenspeicher modifizieren kann. Wenn Sie versuchen, nach einer asynchronen Operation auf den Datenspeicher zuzugreifen, haben Sie keine Schreibberechtigung mehr. Zum Beispiel funktioniert dies nicht:
>
> ```js example-bad
> function dragstartHandler(ev) {
>   canvas.toBlob((blob) => {
>     ev.dataTransfer.items.add(new File([blob], "image.png"));
>   });
> }
> ```

Das Entfernen von Daten ist ähnlich, indem die Methoden [`DataTransferItemList.remove()`](/de/docs/Web/API/DataTransferItemList/remove), [`DataTransferItemList.clear()`](/de/docs/Web/API/DataTransferItemList/clear) oder [`DataTransfer.clearData()`](/de/docs/Web/API/DataTransfer/clearData) verwendet werden.

## Lesen des Drag-Datenspeichers

Die einzige Zeit, zu der Sie _lesen_ können, ist während des [`drop`](/de/docs/Web/API/HTMLElement/drop_event)-Ereignisses, das dem Drop-Ziel erlaubt, die Daten abzurufen.

Um Textdaten aus dem Drag-Datenspeicher zu lesen, verwendet der "neue Weg" das [`DataTransferItemList`](/de/docs/Web/API/DataTransferItemList)-Objekt, während der "alte Weg" die [`DataTransfer.getData()`](/de/docs/Web/API/DataTransfer/getData)-Methode verwendet. Der neue Weg ist bequemer, um durch alle Elemente zu Schleifen, während der alte Weg bequemer ist, um auf einen bestimmten Typ zuzugreifen.

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

Um Dateidaten aus dem Drag-Datenspeicher zu lesen, verwendet der "neue Weg" weiterhin das [`DataTransferItemList`](/de/docs/Web/API/DataTransferItemList)-Objekt, während der "alte Weg" die [`DataTransfer.files`](/de/docs/Web/API/DataTransfer/files)-Eigenschaft verwendet.

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

Außerhalb der `dragstart`- und `drop`-Ereignisse befindet sich der Datenspeicher im _geschützten Modus_, der verhindert, dass Code auf irgendeine Nutzlast zugreift. Nämlich:

- Alle [Änderungsversuche](#modifizieren_des_drag-datenspeichers) werden stillschweigend ignoriert oder werfen eine `DOMException` (nur für `items.remove()`).
- `DataTransfer.getData()` liefert immer die leere Zeichenfolge zurück.
- `DataTransfer.files` liefert immer eine leere Liste zurück.
- `DataTransferItem.getAsString()` kehrt zurück, ohne jemals den Callback aufzurufen.
- `DataTransferItem.getAsFile()` liefert immer `null`.

Auch hier erfolgt der Lese-/Schreibschutz auf einer [pro-Job](/de/docs/Web/JavaScript/Reference/Execution_model#job_queue_and_event_loop) Basis, was bedeutet, dass nur der _synchrone Code_ innerhalb des `drop`-Handlers auf den Datenspeicher zugreifen kann. Wenn Sie versuchen, nach einer asynchronen Operation auf den Datenspeicher zuzugreifen, haben Sie keine Schreibberechtigung mehr. Zum Beispiel funktioniert dies nicht:

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

Stattdessen müssen Sie alle Zugriffsmethoden synchron und sofort aufrufen und auf die Ergebnisse später warten:

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

## Allgemeine Drag-Datentypen

Die Spezifikation definiert nur das Verhalten für einige Datentypen, aber Browser unterstützen manchmal nativ mehr Typen. Im Allgemeinen sind Typen als _Protokoll_ gedacht, genau wie MIME-Typen, und Sie können jeden Typ verwenden, solange das empfangende Ende (eine andere Webseite, ein anderer Teil derselben Webseite oder sogar irgendwo außerhalb des Browsers) ihn versteht. Dieser Abschnitt beschreibt einige gängige Konventionen und die Standardverhalten der Browser.

Beachten Sie, dass sich die folgenden Szenarien auf die _Absicht_ und nicht auf das _Verhalten_ beziehen. Wenn wir beispielsweise sagen "einen Link ziehen", zieht der Benutzer möglicherweise kein tatsächliches `<a>` Element; er könnte einen Container ziehen, der einen oder mehrere Links enthält, aber die Absicht ist, den Link oder die Links als Daten zu übertragen, sodass Sie den Datenspeicher, den Sie vorbereiten, so gestalten können, als ob der Benutzer einen tatsächlichen Link zieht.

### Text ziehen

Für das Ziehen von Text verwenden Sie den `text/plain`-Typ, mit der gezogenen Zeichenfolge als Wert. Zum Beispiel:

```js
event.dataTransfer.items.add("This is text to drag", "text/plain");
```

Sie sollten immer Daten des `text/plain`-Typs als Fallback für Anwendungen oder Drop-Ziele hinzufügen, die andere Typen nicht unterstützen, es sei denn, es gibt keine logische Textalternative. Fügen Sie diesen `text/plain`-Typ immer zuletzt hinzu, da er am wenigsten spezifisch ist und nicht bevorzugt werden sollte.

In `getData()`, `setData()`, und `clearData()` wird der `Text`-Typ (nicht groß-/kleinschreibungsempfindlich) als `text/plain` behandelt.

Standardmäßig, wenn eine Auswahl gezogen wird, werden die folgenden Datenobjekte erstellt:

- `text/plain`: enthält den ausgewählten Text. Firefox und Safari sortieren dieses Element nach `text/html`, obwohl die Spezifikation es erfordert, dass es zuerst ist.
- `text/html`: enthält den vollständigen HTML-Quellcode der ausgewählten Elemente (mit allen Stilen inline).

Die Spezifikation erfordert auch ein weiteres Element des Typs `application/microdata+json`, das die [Microdata](/de/docs/Web/HTML/Guides/Microdata) der im gezogenen Bereich enthaltenen Elemente enthält. Kein Browser implementiert dieses Element.

Beim Ablegen in ein editierbares Textfeld, wie z. B. ein {{HTMLElement("textarea")}} oder [`<input type="text">`](/de/docs/Web/HTML/Reference/Elements/input/text), wird das `text/plain`-Element standardmäßig in das Feld kopiert (ohne Event-Handling).

### Links ziehen

Gezogene Hyperlinks sollten Daten von zwei Typen umfassen: `text/uri-list` und `text/plain`. _Beide_ Typen sollten die URL des Links für ihre Daten verwenden. Hinweis: Der URL-Typ ist `uri-list` mit einem _I_, nicht einem _L_.

Wie üblich, setzen Sie den `text/plain`-Typ zuletzt, als Fallback für den `text/uri-list`-Typ. Zum Beispiel:

```js
event.dataTransfer.items.add("https://www.mozilla.org", "text/uri-list");
event.dataTransfer.items.add("https://www.mozilla.org", "text/plain");
```

Um mehrere Links zu ziehen, trennen Sie jeden Link innerhalb der `text/uri-list`-Daten mit einem CRLF-Zeilenumbruch. Zeilen, die mit einem Rautezeichen (`#`) beginnen, sind Kommentare und sollten nicht als URLs betrachtet werden. Sie können Kommentare verwenden, um den Zweck einer URL, den Titel, der mit einer URL verknüpft ist, oder andere Daten anzugeben.

> [!WARNING]
> Der `text/plain`-Fallback für mehrere Links sollte alle URLs, aber keine Kommentare enthalten.

Zum Beispiel enthalten diese `text/uri-list`-Daten zwei Links und einen Kommentar:

```plain
https://www.mozilla.org
#A second link
http://www.example.com
```

Stellen Sie beim Abrufen eines abgelegten Links sicher, dass Sie damit umgehen, wenn mehrere Links gezogen werden, einschließlich aller Kommentare.

In `getData()`, `setData()`, und `clearData()` wird der `URL`-Typ (nicht groß-/kleinschreibungsempfindlich) als `text/uri-list` behandelt. Für `getData()` enthält das Ergebnis nur die erste URL in der Liste.

Standardmäßig, wenn ein {{HTMLElement("a")}}-Element gezogen wird, werden die folgenden Datenobjekte erstellt:

- `text/x-moz-url` (nur Firefox): enthält sowohl das `href`-Attribut als auch den Linktext, getrennt durch einen Zeilenumbruch.
- `text/x-moz-url-data` (nur Firefox): enthält nur das `href`.
- `text/x-moz-url-desc` (nur Firefox): enthält nur den Linktext.
- `text/uri-list`: enthält das `href`-Attribut.
- `text/html` (nur Chrome und Firefox): enthält den vollständigen HTML-Quellcode des `<a>`-Elements (mit allen Stilen inline).
- `text/plain`: enthält auch das `href`-Attribut. Chrome sortiert dieses Element vor `text/uri-list`.

### Bilder ziehen

Direktes Ziehen von Bildern (d.h. die Daten sind der Pixelinhalt) ist nicht üblich und möglicherweise auf bestimmten Plattformen nicht unterstützt. Stattdessen werden Bilder normalerweise nur über ihre URLs gezogen. Verwenden Sie dazu den `text/uri-list`-Typ wie bei anderen URLs. Die Daten sollten die URL des Bildes oder eine [`data:`-URL](/de/docs/Web/URI/Reference/Schemes/data) sein, wenn das Bild nicht auf einer Website oder einem Datenträger gespeichert ist.

Wie bei Links sollten die Daten für den `text/plain`-Typ auch die URL enthalten. Eine `data:`-URL ist jedoch in einem Textkontext nicht normalerweise nützlich, daher möchten Sie möglicherweise die `text/plain`-Daten in dieser Situation ausschließen.

```js
event.dataTransfer.items.add(imageURL, "text/uri-list");
event.dataTransfer.items.add(imageURL, "text/plain");
```

Standardmäßig, wenn ein {{HTMLElement("img")}}-Element gezogen wird, werden die folgenden Datenobjekte erstellt:

- `text/x-moz-url` (nur Firefox): enthält sowohl das `src`-Attribut als auch den Alternativtext (oder den `src` erneut, wenn der Alternativtext leer ist), getrennt durch einen Zeilenumbruch.
- `text/x-moz-url-data` (nur Firefox): enthält nur das `src`-Attribut.
- `text/x-moz-url-desc` (nur Firefox): enthält nur den Alternativtext (oder den `src`, wenn der Alternativtext leer ist).
- `text/uri-list`: enthält das `src`-Attribut.
- `text/html`: enthält den vollständigen HTML-Quellcode des `<img>`-Elements (mit allen Stilen inline).
- `text/plain` (nur Firefox): enthält das `src`-Attribut.

Safari erstellt auch ein Dateiobjekt, das die Bilddaten mit dem entsprechenden MIME-Typ wie `image/png` enthält.

### Elemente ziehen

Wenn das gezogene Element ein beliebiges Element mit `draggable="true"` ist, hängt es davon ab, was Sie übertragen möchten, welche Daten gesetzt werden.

Ein häufiger Weg, das Element zu übertragen, besteht darin, den `text/html`-Typ mit seriell erstelltem HTML-Quellcode zu verwenden, den das empfangende Ende dann analysieren und einfügen kann. Zum Beispiel wäre es geeignet, die Daten auf den Wert der [`outerHTML`](/de/docs/Web/API/Element/outerHTML)-Eigenschaft eines Elements zu setzen. `text/xml` kann ebenfalls verwendet werden, aber stellen Sie sicher, dass die Daten wohlgeformtes XML sind.

Sie können außerdem eine nur aus Text bestehende Darstellung der HTML- oder XML-Daten mithilfe des `text/plain`-Typs enthalten. Die Daten sollten nur der Text ohne Quell-Tags oder Attribute sein. Beispielsweise:

```js
event.dataTransfer.items.add(element.outerHTML, "text/html");
event.dataTransfer.items.add(element.innerText, "text/plain");
```

Sie können auch andere Typen verwenden, die Sie für bestimmte Zwecke erfinden. Streben Sie immer danach, eine `text/plain`-Alternative einzuschließen, es sei denn, das gezogene Objekt ist spezifisch für eine bestimmte Webseite oder Anwendung. In diesem Fall stellt der benutzerdefinierte Typ sicher, dass die Daten nicht anderswo abgelegt werden können.

### Dateien aus einem Betriebssystem-Dateiexplorer ziehen

Wenn das gezogene Element eine Datei ist, wird ein Element der Art `file` zu den Drag-Daten hinzugefügt. Der `type` wird auf den MIME-Typ der Datei gesetzt (wie vom Betriebssystem bereitgestellt), oder auf `application/octet-stream`, wenn der Typ unbekannt ist. Derzeit können gezogene Dateien nur außerhalb des Browsers stammen, wie aus einem Dateiexplorer.

Firefox fügt auch ein nicht standardmäßiges Text-Element des Typs `application/x-moz-file` hinzu, das den vollständigen Pfad der Datei im Dateisystem des Benutzers enthält. Es sei denn, es befindet sich im privilegierten Code (wie bei einer Erweiterung), ist dessen Wert die leere Zeichenfolge.

### Dateien zu einem Betriebssystem-Dateiexplorer ziehen

Was aus dem Browser heraus übertragen werden kann, hängt hauptsächlich vom Browser und davon ab, wohin es gezogen wird. [Bilder zu ziehen](#bilder_ziehen) zum lokalen Dateisystem ist allgemein unterstützt und führt dazu, dass das Bild heruntergeladen wird.

Chrome unterstützt den nicht standardmäßigen `DownloadURL`-Typ. Die Nutzlast sollte text in der Form `<MIME type>:<file name>:<file URL>` sein. Zum Beispiel:

```js
event.dataTransfer.items.add(
  "image/png:example.png:data:image/png;base64,iVBORw0K...",
  "DownloadURL",
);
```

Dies ermöglicht das Herunterladen einer beliebigen Datei, wenn sie zum Dateiexplorer gezogen wird, oder, wenn sie in ein anderes Browserfenster abgelegt wird, als ob eine [Datei abgelegt wird](#dateien_aus_einem_betriebssystem-dateiexplorer_ziehen) (obwohl CORS-Beschränkungen gelten können). Siehe [Dateien wie bei Gmail herausziehen](https://ryanseddon.com/html5/gmail-dragout/) für einen praktischen Anwendungsfall.

## Siehe auch

- [HTML Drag and Drop API (Überblick)](/de/docs/Web/API/HTML_Drag_and_Drop_API)
- [Drag-Operationen](/de/docs/Web/API/HTML_Drag_and_Drop_API/Drag_operations)
