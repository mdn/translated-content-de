---
title: Arbeiten mit dem Drag-Daten-Store
slug: Web/API/HTML_Drag_and_Drop_API/Drag_data_store
l10n:
  sourceCommit: 8285d415db211ae9efe04752d9dab1b574450ee8
---

{{DefaultAPISidebar("HTML Drag and Drop API")}}

Das [`DragEvent`](/de/docs/Web/API/DragEvent)-Interface verfügt über eine [`dataTransfer`](/de/docs/Web/API/DragEvent/dataTransfer)-Eigenschaft, die ein [`DataTransfer`](/de/docs/Web/API/DataTransfer)-Objekt ist. [`DataTransfer`](/de/docs/Web/API/DataTransfer)-Objekte repräsentieren den Hauptkontext der Drag-Operation und bleiben über verschiedene Eventauslösungen hinweg konsistent. Dazu gehören die [Drag-Daten](/de/docs/Web/API/HTML_Drag_and_Drop_API#drag_data_store), das [Drag-Bild](/de/docs/Web/API/HTML_Drag_and_Drop_API/Drag_operations#setting_the_drag_feedback_image), der [Drop-Effekt](/de/docs/Web/API/HTML_Drag_and_Drop_API/Drag_operations#drop_effects) usw. Dieser Artikel konzentriert sich auf den _Daten-Store_-Teil des `dataTransfer`.

## Struktur des Drag-Daten-Stores

Grundsätzlich ist der Drag-Daten-Store eine Liste von Elementen, dargestellt als [`DataTransferItemList`](/de/docs/Web/API/DataTransferItemList) aus [`DataTransferItem`](/de/docs/Web/API/DataTransferItem)-Objekten. Jedes Element kann eine von zwei [Arten](/de/docs/Web/API/DataTransferItem/kind) sein:

- `string`: sein Inhalt ist ein String, abrufbar mit [`getAsString()`](/de/docs/Web/API/DataTransferItem/getAsString).
- `file`: sein Inhalt ist ein Dateiobjekt, abrufbar mit [`getAsFile()`](/de/docs/Web/API/DataTransferItem/getAsFile) (oder [`getAsFileSystemHandle()`](/de/docs/Web/API/DataTransferItem/getAsFileSystemHandle) oder [`webkitGetAsEntry()`](/de/docs/Web/API/DataTransferItem/webkitGetAsEntry), falls komplexere Dateisystemoperationen erforderlich sind).

Weiterhin wird das Element auch durch einen [Typ](/de/docs/Web/API/DataTransferItem/type) identifiziert, der nach Konvention in Form eines [MIME-Typs](/de/docs/Web/HTTP/Guides/MIME_types) vorliegt. Dieser Typ kann den Verbraucher darüber informieren, wie der Inhalt geparst oder dekodiert werden sollte. Für alle Textelemente kann die Liste nur ein Element jedes Typs enthalten, sodass die Liste im Grunde zwei disjunkte Sammlungen enthält: eine Dateiliste mit potenziell doppelten Typen und eine {{jsxref("Map")}} von Textelementen, die nach ihrem Typ schlüsseln. Allgemein repräsentiert die Dateiliste mehrere Dateien, die gezogen werden. Die Textkarte repräsentiert _nicht_ mehrere Ressourcen, die übertragen werden, sondern dieselbe Ressource, die auf verschiedene Weise kodiert ist, sodass der empfangende Endpunkt die am besten unterstützte Interpretation auswählen kann. Die Textitems sollten in absteigender Reihenfolge der Präferenz sortiert sein.

Diese Liste ist über die [`DataTransfer.items`](/de/docs/Web/API/DataTransfer/items)-Eigenschaft zugänglich.

Die HTML Drag and Drop API hat mehrere Iterationen durchlaufen, was zu zwei koexistierenden Wegen zur Verwaltung des Daten-Stores führte. Vor den `DataTransferItemList`- und `DataTransferItem`-Interfaces verwendete die "alte Methode" die folgenden Eigenschaften auf `DataTransfer`:

- [`types`](/de/docs/Web/API/DataTransfer/types): enthält die `type`-Eigenschaften der _Textitems_ in der Liste sowie den Wert `"files"`, wenn es _Datei-Items_ gibt.
- [`setData()`](/de/docs/Web/API/DataTransfer/setData), [`getData()`](/de/docs/Web/API/DataTransfer/getData), [`clearData()`](/de/docs/Web/API/DataTransfer/clearData): bieten Zugriff auf die _Textitems_ in der Liste mithilfe des Modells "Typ-zu-Inhalt-Zuordnung".
- [`files`](/de/docs/Web/API/DataTransfer/files): bietet Zugriff auf die _Datei-Items_ in der Liste als [`FileList`](/de/docs/Web/API/FileList).

Sie können feststellen, dass die Typen der _Datei-Items_ nicht direkt zugänglich sind. Sie sind immer noch zugänglich, jedoch nur über die [`type`](/de/docs/Web/API/Blob/type)-Eigenschaft jedes [`File`](/de/docs/Web/API/File)-Objekts in der `files`-Liste, sodass wenn Sie die Dateien nicht lesen können, Sie auch deren Typen nicht wissen können (siehe [Lesen des Drag-Daten-Stores](#lesen_des_drag-daten-stores) dafür, wann der Store lesbar ist).

Um die Dateien und ihre Typen zu erhalten, empfehlen wir, die `items`-Eigenschaft zu verwenden, da sie eine flexiblere und konsistentere Schnittstelle bietet. Für Textitems sollten Sie ebenfalls die `items`-Eigenschaft zur Konsistenz bevorzugen, obwohl die `getData()`-Methode bequemer zum Zugriff oder Entfernen eines bestimmten Typs ist.

Ein weiterer wichtiger Unterschied zwischen den [`DataTransfer`](/de/docs/Web/API/DataTransfer)- und [`DataTransferItem`](/de/docs/Web/API/DataTransferItem)-Interfaces ist, dass ersteres die synchronische [`getData()`](/de/docs/Web/API/DataTransfer/getData)-Methode verwendet, um auf den Textinhalt zuzugreifen, während letzteres die asynchronische [`getAsString()`](/de/docs/Web/API/DataTransferItem/getAsString)-Methode verwendet.

## Modifizieren des Drag-Daten-Stores

Für die standardmäßig ziehbaren Elemente wie Bilder, Links und Auswahlbereiche sind die Drag-Daten bereits vom Browser definiert; für benutzerdefinierte ziehbare Elemente, die mit dem `draggable`-Attribut definiert sind, müssen Sie die Drag-Daten selbst definieren. Die einzige Zeit, um Änderungen am Daten-Store vorzunehmen, ist innerhalb des [`dragstart`](/de/docs/Web/API/HTMLElement/dragstart_event)-Handlers—bei dem `dataTransfer` eines anderen Drag-Events ist der Daten-Store nicht modifizierbar.

Um Textdaten dem Drag-Daten-Store hinzuzufügen, verwendet die "neue Methode" die [`DataTransferItemList.add()`](/de/docs/Web/API/DataTransferItemList/add)-Methode, während die "alte Methode" die [`DataTransfer.setData()`](/de/docs/Web/API/DataTransfer/setData)-Methode verwendet.

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

Bei beiden Methoden passiert nichts, wenn sie aufgerufen werden, wenn der Daten-Store nicht modifizierbar ist. Wenn bereits ein Textelement desselben Typs existiert, wirft `add()` einen Fehler, während `setData()` das bestehende Element überschreibt.

Um Dateidaten dem Drag-Daten-Store hinzuzufügen, verwendet die "neue Methode" weiterhin die [`DataTransferItemList.add()`](/de/docs/Web/API/DataTransferItemList/add)-Methode. Da die "alte Methode" die Datei-Items in der [`DataTransfer.files`](/de/docs/Web/API/DataTransfer/files)-Eigenschaft speichert, die eine schreibgeschützte [`FileList`](/de/docs/Web/API/FileList) ist, gibt es kein direktes Äquivalent.

```js
function dragstartHandler(ev) {
  // New way: add(data)
  ev.dataTransfer.items.add(new File([blob], "image.png"));
}

const p1 = document.getElementById("p1");
p1.addEventListener("dragstart", dragstartHandler);
```

Beachten Sie, dass beim Hinzufügen von Dateidaten `add()` den Parameter `type` ignoriert und die [`type`](/de/docs/Web/API/Blob/type)-Eigenschaft des `File`-Objekts verwendet.

> [!NOTE]
> Der Lese-/Schreibschutz wird auf Basis eines [pro-Job](/de/docs/Web/JavaScript/Reference/Execution_model#job_queue_and_event_loop) durchgeführt, was bedeutet, dass nur der _synchron_ Code innerhalb des `dragstart`-Handlers den Daten-Store ändern kann. Wenn Sie versuchen, auf den Daten-Store nach einem asynchronen Vorgang zuzugreifen, haben Sie keine Schreibberechtigungen mehr. Zum Beispiel funktioniert dies nicht:
>
> ```js example-bad
> function dragstartHandler(ev) {
>   canvas.toBlob((blob) => {
>     ev.dataTransfer.items.add(new File([blob], "image.png"));
>   });
> }
> ```

Das Entfernen von Daten ähnelt dem, indem die Methoden [`DataTransferItemList.remove()`](/de/docs/Web/API/DataTransferItemList/remove), [`DataTransferItemList.clear()`](/de/docs/Web/API/DataTransferItemList/clear) oder [`DataTransfer.clearData()`](/de/docs/Web/API/DataTransfer/clearData) verwendet werden.

## Lesen des Drag-Daten-Stores

Die einzige Zeit, in der Sie _lesen_ können, aus dem Daten-Store, abgesehen vom `dragstart`-Event, wenn Sie vollen Zugriff auf den Daten-Store haben, ist während des [`drop`](/de/docs/Web/API/HTMLElement/drop_event)-Events, wodurch das Drop-Ziel die Daten abrufen kann.

Um Textdaten aus dem Drag-Daten-Store zu lesen, verwendet die "neue Methode" das [`DataTransferItemList`](/de/docs/Web/API/DataTransferItemList)-Objekt, während die "alte Methode" die [`DataTransfer.getData()`](/de/docs/Web/API/DataTransfer/getData)-Methode verwendet. Die neue Methode ist bequemer zum Schleifen durch alle Elemente, während die alte Methode bequemer für den Zugriff auf einen bestimmten Typ ist.

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

Um Dateidaten aus dem Drag-Daten-Store zu lesen, verwendet die "neue Methode" weiterhin das [`DataTransferItemList`](/de/docs/Web/API/DataTransferItemList)-Objekt, während die "alte Methode" die [`DataTransfer.files`](/de/docs/Web/API/DataTransfer/files)-Eigenschaft verwendet.

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

Außerhalb von `dragstart`- und `drop`-Events befindet sich der Daten-Store im _geschützten Modus_, und der Zugriff auf jegliche Inhalte ist nicht zulässig. Das bedeutet:

- Alle [Änderungsversuche](#modifizieren_des_drag-daten-stores) bleiben ohne Wirkung oder werfen eine `DOMException` (nur für `items.add()` und `items.remove()`).
- `DataTransfer.getData()` gibt immer den leeren String zurück.
- `DataTransfer.files` gibt immer eine leere Liste zurück.
- `DataTransferItem.getAsString()` kehrt zurück, ohne den Rückruf jemals aufzurufen.
- `DataTransferItem.getAsFile()` gibt immer `null` zurück.

Wiederum wird der Lese-/Schreibschutz auf Basis eines [pro-Job](/de/docs/Web/JavaScript/Reference/Execution_model#job_queue_and_event_loop) durchgeführt, was bedeutet, dass nur der _synchron_ Code innerhalb des `drop`-Handlers den Daten-Store lesen kann. Wenn Sie versuchen, auf den Daten-Store nach einem asynchronen Vorgang zuzugreifen, haben Sie keine Schreibberechtigungen mehr. Zum Beispiel funktioniert dies nicht:

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

Stattdessen müssen Sie alle Zugriffsmethoden synchron aufrufen und später auf deren Ergebnisse warten:

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

Die Spezifikation definiert nur das Verhalten für einige wenige Datentypen, aber Browser bieten manchmal native Unterstützung für mehr Typen. Im Allgemeinen sind Typen als _Protokoll_ beabsichtigt, genau wie MIME-Typen, und Sie können jeden Typ verwenden, solange das empfangende Ende (eine andere Webseite, ein anderer Teil derselben Webseite oder sogar irgendwo außerhalb des Browsers) ihn versteht. Dieser Abschnitt beschreibt einige gängige Konventionen und die Standardverhalten von Browsern.

Beachten Sie, dass sich die unten beschriebenen Szenarien auf die _Absicht_ und nicht auf das _Verhalten_ beziehen. Wenn wir z. B. sagen "einen Link ziehen", bedeutet das nicht unbedingt, dass der Benutzer ein tatsächliches `<a>`-Element zieht; er könnte ein Container sein, der einen oder mehrere Links enthält, aber die Absicht ist es, den/die Link(s) als Daten zu übertragen, sodass der von Ihnen vorbereitete Daten-Store derselbe sein kann, als würde der Benutzer einen tatsächlichen Link ziehen.

### Text ziehen

Für das Ziehen von Text verwenden Sie den Typ `text/plain` mit dem gezogenen String als Wert. Zum Beispiel:

```js
event.dataTransfer.items.add("This is text to drag", "text/plain");
```

Sie sollten immer Daten des Typs `text/plain` als Fallback hinzufügen für Anwendungen oder Drop-Ziele, die andere Typen nicht unterstützen, es sei denn, es gibt keine logische Textalternative. Fügen Sie diesen `text/plain`-Typ immer als letztes hinzu, da er am wenigsten spezifisch ist und nicht bevorzugt werden sollte.

In `getData()`, `setData()`, und `clearData()` wird der Typ `Text` (groß-/kleinschreibungsempfindlich) als `text/plain` behandelt.

Standardmäßig werden beim Ziehen einer Auswahl die folgenden Datenitems erstellt:

- `text/plain`: enthält den ausgewählten Text. Firefox und Safari sortieren dieses Element nach `text/html`, obwohl die Spezifikation es erfordert, dass es zuerst kommt.
- `text/html`: enthält den vollständigen HTML-Quellcode der ausgewählten Elemente (mit allen eingebetteten Stilen).

Die Spezifikation erfordert auch ein weiteres Element des Typs `application/microdata+json`, das die [Mikrodaten](/de/docs/Web/HTML/Guides/Microdata) enthält, die aus dem/den Element(en) in der gezogenen Auswahl extrahiert wurden. Kein Browser implementiert dieses Element.

Beim Ablegen auf ein bearbeitbares Textfeld, wie ein {{HTMLElement("textarea")}} oder [`<input type="text">`](/de/docs/Web/HTML/Reference/Elements/input/text), wird das `text/plain`-Element standardmäßig in das Feld kopiert (ohne jegliche Ereignisbehandlung).

### Links ziehen

Gezogene Hyperlinks sollten Daten von zwei Typen enthalten: `text/uri-list` und `text/plain`. _Beide_ Typen sollten die URL des Links für ihre Daten verwenden. Hinweis: Der URL-Typ ist `uri-list` mit einem _I_, nicht einem _L_.

Wie üblich, setzen Sie den Typ `text/plain` zuletzt als Fallback für den Typ `text/uri-list`. Zum Beispiel:

```js
event.dataTransfer.items.add("https://www.mozilla.org", "text/uri-list");
event.dataTransfer.items.add("https://www.mozilla.org", "text/plain");
```

Um mehrere Links zu ziehen, trennen Sie jeden Link innerhalb der `text/uri-list`-Daten mit einem CRLF-Zeilenumbruch. Zeilen, die mit einem Rautezeichen (`#`) beginnen, sind Kommentare und sollten nicht als URLs betrachtet werden. Sie können Kommentare verwenden, um den Zweck einer URL, den Titel, der mit einer URL verbunden ist, oder andere Daten anzugeben.

> [!WARNING]
> Das `text/plain`-Fallback für mehrere Links sollte alle URLs enthalten, aber keine Kommentare.

Zum Beispiel enthalten diese `text/uri-list`-Daten zwei Links und einen Kommentar:

```plain
https://www.mozilla.org
#A second link
http://www.example.com
```

Beim Abrufen eines abgeworfenen Links, stellen Sie sicher, dass Sie den Umgang mit mehreren Links berücksichtigen, einschließlich aller Kommentare.

In `getData()`, `setData()`, und `clearData()` wird der Typ `URL` (groß-/kleinschreibungsempfindlich) als `text/uri-list` behandelt. Für `getData()` enthält das Ergebnis nur die erste URL in der Liste.

Standardmäßig werden beim Ziehen eines {{HTMLElement("a")}}-Elements die folgenden Datenitems erstellt:

- `text/x-moz-url` (nur in Firefox): enthält sowohl das `href`-Attribut als auch den Linktext, getrennt durch einen Zeilenumbruch.
- `text/x-moz-url-data` (nur in Firefox): enthält nur das `href`.
- `text/x-moz-url-desc` (nur in Firefox): enthält nur den Linktext.
- `text/uri-list`: enthält das `href`-Attribut.
- `text/html` (nur Chrome und Firefox): enthält den vollständigen HTML-Quellcode des `<a>`-Elements (mit allen eingebetteten Stilen).
- `text/plain`: enthält ebenfalls das `href`-Attribut. Chrome sortiert dieses Element vor `text/uri-list`.

### Bilder ziehen

Direktes Bildziehen (d.h. die Daten sind der Pixelinhalt) ist nicht üblich und kann auf bestimmten Plattformen nicht unterstützt werden. Stattdessen werden Bilder in der Regel nur über ihre URLs gezogen. Um dies zu tun, verwenden Sie den Typ `text/uri-list` wie bei anderen URLs. Die Daten sollten die URL des Bildes sein oder eine [`data:`-URL](/de/docs/Web/URI/Reference/Schemes/data), wenn das Bild nicht auf einer Website oder Festplatte gespeichert ist.

Wie bei Links sollten die Daten für den Typ `text/plain` ebenfalls die URL enthalten. Allerdings ist eine `data:`-URL normalerweise in einem Textkontext nicht nützlich, sodass Sie in diesem Fall eventuell die `text/plain`-Daten ausschließen möchten.

```js
event.dataTransfer.items.add(imageURL, "text/uri-list");
event.dataTransfer.items.add(imageURL, "text/plain");
```

Standardmäßig werden beim Ziehen eines {{HTMLElement("img")}}-Elements die folgenden Datenitems erstellt:

- `text/x-moz-url` (nur in Firefox): enthält sowohl das `src`-Attribut als auch den Alt-Text (oder das `src` erneut, wenn alt leer ist), getrennt durch einen Zeilenumbruch.
- `text/x-moz-url-data` (nur in Firefox): enthält nur das `src`-Attribut.
- `text/x-moz-url-desc` (nur in Firefox): enthält nur den Alt-Text (oder das `src`, wenn alt leer ist).
- `text/uri-list`: enthält das `src`-Attribut.
- `text/html`: enthält den vollständigen HTML-Quellcode des `<img>`-Elements (mit allen eingebetteten Stilen).
- `text/plain` (nur in Firefox): enthält das `src`-Attribut.

Safari erstellt auch ein Dateielement, das die Bilddaten enthält, mit dem entsprechenden MIME-Typ wie `image/png`.

### Elemente ziehen

Wenn das gezogene Element ein beliebiges Element mit `draggable="true"` ist, hängt es davon ab, welche Daten Sie setzen möchten, was Sie übertragen möchten.

Ein gebräuchlicher Weg, das Element zu übertragen, ist die Verwendung des Typs `text/html`, der den serialisierten HTML-Quellcode enthält, den das empfangende Ende dann parsen und einfügen kann. Zum Beispiel wäre es geeignet, seine Daten auf den Wert der [`outerHTML`](/de/docs/Web/API/Element/outerHTML)-Eigenschaft eines Elements zu setzen. `text/xml` kann ebenfalls verwendet werden, aber stellen Sie sicher, dass die Daten wohlgeformtes XML sind.

Sie können auch eine Darstellung des HTML- oder XML-Daten mit reinem Text mit dem Typ `text/plain` einfügen. Die Daten sollten nur der Text ohne jegliche Quell-Tags oder Attribute sein. Zum Beispiel:

```js
event.dataTransfer.items.add("text/html", element.outerHTML);
event.dataTransfer.items.add("text/plain", element.innerText);
```

Sie können auch andere Typen verwenden, die Sie für benutzerdefinierte Zwecke erfinden. Schulen Sie sich darauf, immer eine `text/plain`-Alternative einzuschließen, es sei denn, das gezogene Objekt ist spezifisch für eine bestimmte Website oder Anwendung. In diesem Fall stellt der benutzerdefinierte Typ sicher, dass die Daten nicht anderswo abgelassen werden können.

### Dateien aus einem Betriebssystem-Dateiexplorer ziehen

Wenn das gezogene Element eine Datei ist, wird dem Drag-Daten-Store ein Element vom Typ `file` hinzugefügt. Der `type` wird auf den MIME-Typ der Datei gesetzt (sofern vom Betriebssystem bereitgestellt) oder `application/octet-stream`, wenn der Typ unbekannt ist. Derzeit können gezogene Dateien nur außerhalb des Browsers stammen, wie aus einem Dateiexplorer.

Firefox fügt auch ein nicht standardmäßiges Textelement vom Typ `application/x-moz-file` hinzu, das den vollständigen Pfad der Datei im Dateisystem des Benutzers enthält. Es sei denn, der Wert ist im privilegierten Code (wie z.B. einer Erweiterung), sein Wert ist der leere String.

### Dateien in einen Betriebssystem-Dateiexplorer ziehen

Was aus dem Browser übertragen werden kann, hängt größtenteils vom Browser und davon ab, wohin es gezogen wird. [Bilder ziehen](#bilder_ziehen) in das lokale Dateisystem wird häufig unterstützt und führt dazu, dass das Bild heruntergeladen wird.

Chrome unterstützt den nicht standardmäßigen `DownloadURL`-Typ. Der Inhalt sollte als Text in der Form `<MIME-Typ>:<Dateiname>:<Datei-URL>` sein. Zum Beispiel:

```js
event.dataTransfer.items.add(
  "DownloadURL",
  "image/png:example.png:data:image/png;base64,iVBORw0K...",
);
```

Dies ermöglicht es, eine beliebige Datei herunterzuladen, wenn sie in den Dateiexplorer gezogen wird, oder, beim Abwurf in einem anderen Browserfenster, als ob eine [Datei abgeworfen wird](#dateien_aus_einem_betriebssystem-dateiexplorer_ziehen) (obwohl CORS-Beschränkungen gelten können). Siehe [Drag out files like Gmail](https://ryanseddon.com/html5/gmail-dragout/) für einen praktischen Anwendungsfall.

## Siehe auch

- [HTML Drag and Drop API (Übersicht)](/de/docs/Web/API/HTML_Drag_and_Drop_API)
- [Drag-Operationen](/de/docs/Web/API/HTML_Drag_and_Drop_API/Drag_operations)
