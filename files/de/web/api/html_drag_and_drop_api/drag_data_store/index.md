---
title: Arbeiten mit dem Drag-Daten-Store
slug: Web/API/HTML_Drag_and_Drop_API/Drag_data_store
l10n:
  sourceCommit: d2bc0bbc02baaa56541a13dffe1d049f73a661fb
---

{{DefaultAPISidebar("HTML Drag and Drop API")}}

Das [`DragEvent`](/de/docs/Web/API/DragEvent)-Interface verfügt über eine [`dataTransfer`](/de/docs/Web/API/DragEvent/dataTransfer)-Eigenschaft, die ein [`DataTransfer`](/de/docs/Web/API/DataTransfer)-Objekt ist. [`DataTransfer`](/de/docs/Web/API/DataTransfer)-Objekte repräsentieren den Hauptkontext der Drag-Operation und bleiben über die verschiedenen Event-Aufrufe hinweg konsistent. Es beinhaltet die [Drag-Daten](/de/docs/Web/API/HTML_Drag_and_Drop_API#drag_data_store), das [Drag-Bild](/de/docs/Web/API/HTML_Drag_and_Drop_API/Drag_operations#setting_the_drag_feedback_image), [Drop-Effekt](/de/docs/Web/API/HTML_Drag_and_Drop_API/Drag_operations#drop_effects) usw. Dieser Artikel konzentriert sich auf den _Daten-Store_-Teil der `dataTransfer`.

## Struktur des Drag-Daten-Stores

Grundsätzlich ist der Drag-Daten-Store eine Liste von Elementen, die als [`DataTransferItemList`](/de/docs/Web/API/DataTransferItemList) von [`DataTransferItem`](/de/docs/Web/API/DataTransferItem)-Objekten dargestellt wird. Jedes Element kann eine von zwei [Arten](/de/docs/Web/API/DataTransferItem/kind) sein:

- `string`: Dessen Nutzlast ist ein String, abrufbar mit [`getAsString()`](/de/docs/Web/API/DataTransferItem/getAsString).
- `file`: Dessen Nutzlast ist ein File-Objekt, abrufbar mit [`getAsFile()`](/de/docs/Web/API/DataTransferItem/getAsFile) (oder [`getAsFileSystemHandle()`](/de/docs/Web/API/DataTransferItem/getAsFileSystemHandle) oder [`webkitGetAsEntry()`](/de/docs/Web/API/DataTransferItem/webkitGetAsEntry), wenn komplexere Dateisystemoperationen erforderlich sind).

Darüber hinaus wird das Element auch durch einen [Typ](/de/docs/Web/API/DataTransferItem/type) identifiziert, der konventionell in Form eines [MIME-Typs](/de/docs/Web/HTTP/Guides/MIME_types) vorliegt. Dieser Typ kann den Verbraucher darüber informieren, wie die Nutzlast geparst oder dekodiert werden sollte. Für alle Text-Elemente kann die Liste nur ein Element jedes Typs haben, sodass die Liste effektiv zwei disjunkte Sammlungen enthält: eine Liste von Dateien mit potenziell doppelten Typen und eine {{jsxref("Map")}} von Text-Elementen, die nach ihrem Typ organisiert sind. Generell stellt die Dateiliste mehrere Dateien dar, die gezogen werden. Die Textkarte repräsentiert _nicht_ mehrere Ressourcen, die übertragen werden, sondern dieselbe Ressource, die auf unterschiedliche Weise codiert wird, sodass der empfangende Teil die am besten unterstützte Interpretation wählen kann. Die Text-Elemente sollen in absteigender Präferenzordnung sortiert sein.

Diese Liste ist über die [`DataTransfer.items`](/de/docs/Web/API/DataTransfer/items)-Eigenschaft zugänglich.

Die HTML Drag and Drop API hat mehrere Iterationen durchlaufen, was zu zwei nebeneinander existierenden Wegen zur Verwaltung des Daten-Stores führte. Vor den `DataTransferItemList`- und `DataTransferItem`-Schnittstellen verwendete die "alte Methode" die folgenden Eigenschaften auf `DataTransfer`:

- [`types`](/de/docs/Web/API/DataTransfer/types): Enthält die `type`-Eigenschaften der _Text-Elemente_ in der Liste sowie den Wert `"files"`, wenn _Dateielemente_ vorhanden sind.
- [`setData()`](/de/docs/Web/API/DataTransfer/setData), [`getData()`](/de/docs/Web/API/DataTransfer/getData), [`clearData()`](/de/docs/Web/API/DataTransfer/clearData): Bieten Zugriff auf die _Text-Elemente_ in der Liste mittels des "Typ-zu-Nutzlast-Zuordnung"-Modells.
- [`files`](/de/docs/Web/API/DataTransfer/files): Bietet Zugriff auf die _Dateielemente_ in der Liste als [`FileList`](/de/docs/Web/API/FileList).

Sie werden feststellen, dass die Typen der _Dateielemente_ nicht direkt zugänglich sind. Sie sind dennoch zugänglich, jedoch nur über die [`type`](/de/docs/Web/API/Blob/type)-Eigenschaft jedes [`File`](/de/docs/Web/API/File)-Objekts in der `files`-Liste. Wenn Sie die Dateien nicht lesen können, können Sie auch ihre Typen nicht kennen (siehe [Lesen des Drag-Daten-Stores](#lesen_des_drag-daten-stores), wann der Store lesbar ist).

Um die Dateien und ihre Typen zu erhalten, empfehlen wir, die `items`-Eigenschaft zu verwenden, da sie eine flexiblere und konsistentere Schnittstelle bietet. Für Textelemente sollten Sie ebenfalls die `items`-Eigenschaft bevorzugen, obwohl die `getData()`-Methode praktischer zum Zugriff oder Entfernen eines bestimmten Typs ist.

Ein weiterer wichtiger Unterschied zwischen den Schnittstellen [`DataTransfer`](/de/docs/Web/API/DataTransfer) und [`DataTransferItem`](/de/docs/Web/API/DataTransferItem) besteht darin, dass die erstere die synchrone [`getData()`](/de/docs/Web/API/DataTransfer/getData)-Methode zum Zugriff auf die Textnutzlast verwendet, während die letztere stattdessen die asynchrone [`getAsString()`](/de/docs/Web/API/DataTransferItem/getAsString)-Methode verwendet.

## Modifizieren des Drag-Daten-Stores

Für die standardmäßig ziehbaren Elemente wie Bilder, Links und Auswahlen sind die Drag-Daten bereits durch den Browser definiert; für benutzerdefinierte ziehbare Elemente, die über das `draggable`-Attribut definiert sind, müssen Sie die Drag-Daten selbst definieren. Die einzige Zeit, um Änderungen am Daten-Store vorzunehmen, ist innerhalb des [`dragstart`](/de/docs/Web/API/HTMLElement/dragstart_event)-Handlers — für das `dataTransfer` jedes anderen Drag-Events ist der Daten-Store nicht modifizierbar.

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

Für beide Methoden gilt, wenn sie aufgerufen werden, während der Daten-Store nicht modifizierbar ist, passiert nichts. Wenn ein Textelement mit demselben Typ bereits existiert, wirft `add()` einen Fehler, während `setData()` das vorhandene Element überschreibt.

Um Dateidaten dem Drag-Daten-Store hinzuzufügen, verwendet die "neue Methode" weiterhin die [`DataTransferItemList.add()`](/de/docs/Web/API/DataTransferItemList/add)-Methode. Da die "alte Methode" Dateielemente in der [`DataTransfer.files`](/de/docs/Web/API/DataTransfer/files)-Eigenschaft speichert, die eine schreibgeschützte [`FileList`](/de/docs/Web/API/FileList) ist, gibt es kein direktes Äquivalent.

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
> Der Lese-/Schreibschutz erfolgt auf einer [pro-Job](/de/docs/Web/JavaScript/Reference/Execution_model#job_queue_and_event_loop)-Basis, was bedeutet, dass nur der _synchrone Code_ innerhalb des `dragstart`-Handlers den Daten-Store modifizieren kann. Wenn Sie versuchen, nach einer asynchronen Operation auf den Daten-Store zuzugreifen, haben Sie keine Schreibberechtigung mehr. Beispielsweise funktioniert dies nicht:
>
> ```js example-bad
> function dragstartHandler(ev) {
>   canvas.toBlob((blob) => {
>     ev.dataTransfer.items.add(new File([blob], "image.png"));
>   });
> }
> ```

Das Entfernen von Daten ist ähnlich, wobei die Methoden [`DataTransferItemList.remove()`](/de/docs/Web/API/DataTransferItemList/remove), [`DataTransferItemList.clear()`](/de/docs/Web/API/DataTransferItemList/clear) oder [`DataTransfer.clearData()`](/de/docs/Web/API/DataTransfer/clearData) verwendet werden.

## Lesen des Drag-Daten-Stores

Der einzige Zeitpunkt, zu dem Sie aus dem Daten-Store _lesen_ können, abgesehen von dem `dragstart`-Event, bei dem Sie vollen Zugriff auf den Daten-Store haben, ist während des [`drop`](/de/docs/Web/API/HTMLElement/drop_event)-Events, das es dem Drop-Ziel ermöglicht, die Daten abzurufen.

Um Textdaten aus dem Drag-Daten-Store zu lesen, verwendet die "neue Methode" das [`DataTransferItemList`](/de/docs/Web/API/DataTransferItemList)-Objekt, während die "alte Methode" die [`DataTransfer.getData()`](/de/docs/Web/API/DataTransfer/getData)-Methode verwendet. Die neue Methode ist praktischer zum Durchlaufen aller Elemente, während die alte Methode praktischer ist, um auf einen bestimmten Typ zuzugreifen.

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

Außerhalb von `dragstart`- und `drop`-Events befindet sich der Daten-Store im _geschützten Modus_, der es dem Code verbietet, auf jegliche Nutzlast zuzugreifen. Nämlich:

- Alle [Änderungsversuche](#modifizieren_des_drag-daten-stores) führen stillschweigend zu nichts oder werfen einen `DOMException` (nur bei `items.add()` und `items.remove()`).
- `DataTransfer.getData()` gibt immer den leeren String zurück.
- `DataTransfer.files` gibt immer eine leere Liste zurück.
- `DataTransferItem.getAsString()` kehrt zurück, ohne jemals den Callback aufzurufen.
- `DataTransferItem.getAsFile()` gibt immer `null` zurück.

Erneut erfolgt der Lese-/Schreibschutz auf einer [pro-Job](/de/docs/Web/JavaScript/Reference/Execution_model#job_queue_and_event_loop)-Basis, was bedeutet, dass nur der _synchrone Code_ innerhalb des `drop`-Handlers den Daten-Store lesen kann. Wenn Sie versuchen, nach einer asynchronen Operation auf den Daten-Store zuzugreifen, haben Sie keine Schreibberechtigung mehr. Beispielsweise funktioniert dies nicht:

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

Stattdessen müssen Sie alle Zugriffsmethoden synchron aufrufen und auf ihre Ergebnisse später warten:

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

Die Spezifikation definiert nur das Verhalten für einige wenige Datentypen, jedoch haben Browser manchmal native Unterstützung für weitere Typen. Im Allgemeinen sind Typen als ein _Protokoll_ gedacht, ähnlich wie MIME-Typen, und Sie können jeden Typ verwenden, solange das empfangende Ende (eine andere Webseite, ein anderer Teil derselben Webseite oder sogar irgendwo außerhalb des Browsers) ihn versteht. Dieser Abschnitt beschreibt einige gängige Konventionen und das Standardverhalten der Browser.

Beachten Sie, dass sich die folgenden Szenarien auf die _Absicht_ und nicht auf das _Verhalten_ beziehen. Wenn wir beispielsweise sagen "einen Link ziehen", könnte der Benutzer möglicherweise kein tatsächliches `<a>`-Element ziehen; er könnte einen Container ziehen, der ein oder mehrere Links enthält, aber die Absicht ist es, den/die Link(s) als Daten zu übertragen, sodass der vorbereitete Daten-Store derselbe sein kann, als würde der Benutzer einen tatsächlichen Link ziehen.

### Text ziehen

Zum Ziehen von Text verwenden Sie den Typ `text/plain`, wobei der gezogene String der Wert ist. Zum Beispiel:

```js
event.dataTransfer.items.add("This is text to drag", "text/plain");
```

Sie sollten immer Daten des Typs `text/plain` als Rückfallmöglichkeit für Anwendungen oder Drop-Ziele hinzufügen, die andere Typen nicht unterstützen, es sei denn, es gibt keine logische Textalternative. Fügen Sie immer diesen `text/plain`-Typ als Letztes hinzu, da er der am wenigsten spezifische ist und nicht bevorzugt werden sollte.

In `getData()`, `setData()` und `clearData()` wird der `Text`-Typ (nicht case-sensitiv) als `text/plain` behandelt.

Standardmäßig werden beim Ziehen einer Auswahl die folgenden Datenelemente erstellt:

- `text/plain`: Enthält den ausgewählten Text. Firefox und Safari sortieren dieses Element nach `text/html`, obwohl die Spezifikation es erfordert, dass es zuerst steht.
- `text/html`: Enthält die vollständige HTML-Quelle der ausgewählten Elemente (mit allen Styles inline).

Die Spezifikation erfordert auch ein weiteres Element des Typs `application/microdata+json`, das die [Microdata](/de/docs/Web/HTML/Guides/Microdata) extrahiert aus den Elementen in der gezogenen Auswahl enthält. Kein Browser implementiert dieses Element.

Beim Ablegen in ein bearbeitbares Textfeld, wie ein {{HTMLElement("textarea")}} oder [`<input type="text">`](/de/docs/Web/HTML/Reference/Elements/input/text), wird das `text/plain`-Element standardmäßig in das Feld kopiert (ohne Event-Handling).

### Links ziehen

Gezogene Hyperlinks sollten Daten von zwei Typen enthalten: `text/uri-list` und `text/plain`. _Beide_ Typen sollten die URL des Links für ihre Daten verwenden. Hinweis: Der URL-Typ ist `uri-list` mit einem _I_, nicht einem _L_.

Wie üblich, setzen Sie den `text/plain`-Typ zuletzt als Rückfall für den `text/uri-list`-Typ. Zum Beispiel:

```js
event.dataTransfer.items.add("https://www.mozilla.org", "text/uri-list");
event.dataTransfer.items.add("https://www.mozilla.org", "text/plain");
```

Um mehrere Links zu ziehen, trennen Sie jeden Link in den `text/uri-list`-Daten mit einem CRLF-Zeilenumbruch. Zeilen, die mit einem Nummernzeichen (`#`) beginnen, sind Kommentare und sollten nicht als URLs betrachtet werden. Sie können Kommentare verwenden, um den Zweck einer URL, den mit einer URL verbundenen Titel oder andere Daten anzugeben.

> [!WARNING]
> Der `text/plain`-Rückfall für mehrere Links sollte alle URLs, jedoch keine Kommentare enthalten.

Zum Beispiel enthalten diese `text/uri-list`-Daten zwei Links und einen Kommentar:

```plain
https://www.mozilla.org
#A second link
http://www.example.com
```

Wenn Sie einen abgelegten Link abrufen, stellen Sie sicher, dass Sie den Fall berücksichtigen, wenn mehrere Links gezogen werden, einschließlich aller Kommentare.

In `getData()`, `setData()` und `clearData()` wird der `URL`-Typ (nicht case-sensitiv) als `text/uri-list` behandelt. Für `getData()` enthält das Ergebnis nur die erste URL in der Liste.

Standardmäßig werden beim Ziehen eines {{HTMLElement("a")}}-Elements die folgenden Datenelemente erstellt:

- `text/x-moz-url` (nur Firefox): Enthält sowohl das `href`-Attribut als auch den Linktext, getrennt durch einen Zeilenumbruch.
- `text/x-moz-url-data` (nur Firefox): Enthält nur das `href`.
- `text/x-moz-url-desc` (nur Firefox): Enthält nur den Linktext.
- `text/uri-list`: Enthält das `href`-Attribut.
- `text/html` (nur Chrome und Firefox): Enthält die vollständige HTML-Quelle des `<a>`-Elements (mit allen Styles inline).
- `text/plain`: Enthält ebenfalls das `href`-Attribut. Chrome sortiert dieses Element vor `text/uri-list`.

### Bilder ziehen

Direktes Bildziehen (das heißt, die Daten sind der Pixelinhalt) ist nicht üblich und möglicherweise auf bestimmten Plattformen nicht unterstützt. Stattdessen werden Bilder normalerweise nur per URL gezogen. Verwenden Sie dazu den Typ `text/uri-list` wie bei anderen URLs. Die Daten sollten die URL des Bildes sein oder eine [`data:` URL](/de/docs/Web/URI/Reference/Schemes/data), wenn das Bild nicht auf einer Webseite oder einem Laufwerk gespeichert ist.

Wie bei Links sollten die Daten für den Typ `text/plain` ebenfalls die URL enthalten. Jedoch ist eine `data:` URL in einem Textkontext normalerweise nicht nützlich, daher möchten Sie die `text/plain`-Daten in dieser Situation möglicherweise ausschließen.

```js
event.dataTransfer.items.add(imageURL, "text/uri-list");
event.dataTransfer.items.add(imageURL, "text/plain");
```

Standardmäßig werden beim Ziehen eines {{HTMLElement("img")}}-Elements die folgenden Datenelemente erstellt:

- `text/x-moz-url` (nur Firefox): Enthält sowohl das `src`-Attribut als auch den Alt-Text (oder erneut das `src`, wenn das Alt leer ist), getrennt durch einen Zeilenumbruch.
- `text/x-moz-url-data` (nur Firefox): Enthält nur das `src`-Attribut.
- `text/x-moz-url-desc` (nur Firefox): Enthält nur den Alt-Text (oder das `src`, wenn das Alt leer ist).
- `text/uri-list`: Enthält das `src`-Attribut.
- `text/html`: Enthält die vollständige HTML-Quelle des `<img>`-Elements (mit allen Styles inline).
- `text/plain` (nur Firefox): Enthält das `src`-Attribut.

Safari erstellt außerdem ein Dateielement, das die Bilddaten mit dem entsprechenden MIME-Typ wie `image/png` enthält.

### Elemente ziehen

Wenn das gezogene Element ein beliebiges Element mit `draggable="true"` ist, hängt das, was gesetzt werden soll, davon ab, was Sie übertragen möchten.

Ein üblicher Weg, das Element zu übertragen, ist, den Typ `text/html` zu verwenden, der den serialisierten HTML-Quellcode enthält, den das empfangende Ende dann analysieren und einfügen kann. Zum Beispiel wäre es sinnvoll, seine Daten auf den Wert der [`outerHTML`](/de/docs/Web/API/Element/outerHTML)-Eigenschaft eines Elements zu setzen. `text/xml` kann ebenfalls verwendet werden, aber stellen Sie sicher, dass die Daten wohlgeformtes XML sind.

Sie können auch eine einfache Textrepräsentation der HTML- oder XML-Daten mit dem Typ `text/plain` hinzufügen. Die Daten sollten nur der Text ohne jegliche Quell-Tags oder -Attribute sein. Zum Beispiel:

```js
event.dataTransfer.items.add(element.outerHTML, "text/html");
event.dataTransfer.items.add(element.innerText, "text/plain");
```

Sie können auch andere Typen verwenden, die Sie sich für benutzerdefinierte Zwecke ausgedacht haben. Streben Sie immer an, eine `text/plain`-Alternative einzuschließen, es sei denn, das gezogene Objekt ist spezifisch für eine bestimmte Site oder Anwendung. In diesem Fall stellt der benutzerdefinierte Typ sicher, dass die Daten anderweitig nicht abgelegt werden können.

### Dateien ziehen aus einem Betriebssystem-Datei-Explorer

Wenn das gezogene Element eine Datei ist, wird dem Drag-Daten-Store ein Element vom Typ `file` hinzugefügt. Der `type` ist auf den MIME-Typ der Datei gesetzt (wie vom Betriebssystem bereitgestellt) oder `application/octet-stream`, wenn der Typ unbekannt ist. Derzeit können gezogene Dateien nur außerhalb des Browsers stammen, z. B. aus einem Datei-Explorer.

Firefox fügt außerdem ein nicht standardmäßiges Textelement vom Typ `application/x-moz-file` hinzu, das den vollständigen Pfad der Datei im Dateisystem des Benutzers enthält. Es sei denn, innerhalb von privilegiertem Code (wie einer Erweiterung) ist dessen Wert der leere String.

### Dateien ziehen zu einem Betriebssystem-Datei-Explorer

Was aus dem Browser heraus übertragen werden kann, hängt größtenteils vom Browser ab und wohin es gezogen wird. [Bilder ziehen](#bilder_ziehen) zum lokalen Dateisystem wird häufig unterstützt und führt dazu, dass das Bild heruntergeladen wird.

Chrome unterstützt den nicht standardmäßigen Typ `DownloadURL`. Die Nutzlast sollte Text in der Form `<MIME-Typ>:<Dateiname>:<Datei-URL>` sein. Zum Beispiel:

```js
event.dataTransfer.items.add(
  "image/png:example.png:data:image/png;base64,iVBORw0K...",
  "DownloadURL",
);
```

Dies ermöglicht es, bei einem Drag in den Datei-Explorer eine beliebige Datei herunterzuladen oder beim Ablegen in ein anderes Browser-Fenster so, als ob eine [Datei abgelegt wird](#dateien_ziehen_aus_einem_betriebssystem-datei-explorer) (obwohl CORS-Einschränkungen gelten können). Siehe [Drag out files like Gmail](https://ryanseddon.com/html5/gmail-dragout/) für einen praktischen Anwendungsfall.

## Siehe auch

- [HTML Drag and Drop API (Überblick)](/de/docs/Web/API/HTML_Drag_and_Drop_API)
- [Drag-Operationen](/de/docs/Web/API/HTML_Drag_and_Drop_API/Drag_operations)
