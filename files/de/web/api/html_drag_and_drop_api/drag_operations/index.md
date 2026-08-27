---
title: Zieh-Operationen
slug: Web/API/HTML_Drag_and_Drop_API/Drag_operations
l10n:
  sourceCommit: 77ea71add6054857698eb7ac1bfec8c7afe9ad4f
---

{{DefaultAPISidebar("HTML Drag and Drop API")}}

Zentral für die Drag and Drop API sind die verschiedenen [Drag-Ereignisse](/de/docs/Web/API/HTML_Drag_and_Drop_API#drag_events), die in einer bestimmten Reihenfolge ausgelöst werden und auf eine bestimmte Weise behandelt werden müssen. Dieses Dokument beschreibt die Schritte, die während einer Drag-and-Drop-Operation ablaufen, und was die Anwendung innerhalb jedes Ereignishandlers tun soll.

Auf hoher Ebene sind hier die möglichen Schritte in einer Drag-and-Drop-Operation:

- Der Benutzer [startet den Drag](#beginn_eines_drags) auf einem Quellknoten; das [`dragstart`](/de/docs/Web/API/HTMLElement/dragstart_event)-Ereignis wird auf dem Quellknoten ausgelöst. Innerhalb dieses Ereignisses bereitet der Quellknoten den Kontext für die Drag-Operation vor, einschließlich der Drag-Daten, des Feedback-Bildes und der erlaubten Drop-Effekte.
- Der Benutzer [zieht das Element umher](#ziehen_über_elemente_und_drop-ziele_festlegen): Jedes Mal, wenn ein neues Element betreten wird, wird das [`dragenter`](/de/docs/Web/API/HTMLElement/dragenter_event)-Ereignis auf diesem Element ausgelöst, und das [`dragleave`](/de/docs/Web/API/HTMLElement/dragleave_event)-Ereignis wird auf dem vorherigen Element ausgelöst. Alle paar hundert Millisekunden wird ein [`dragover`](/de/docs/Web/API/HTMLElement/dragover_event)-Ereignis auf dem Element ausgelöst, in dem sich der Drag gerade befindet, und das [`drag`](/de/docs/Web/API/HTMLElement/drag_event)-Ereignis wird auf dem Quellknoten ausgelöst.
- Der Drag betritt ein gültiges Drop-Ziel: Das Drop-Ziel bricht sein `dragover`-Ereignis ab, um anzuzeigen, dass es ein gültiges Drop-Ziel ist. Eine Form von [Drop-Feedback](#drop-feedback) gibt dem Benutzer den erwarteten Drop-Effekt an.
- Der Benutzer [führt das Drop aus](#ein_drop_ausführen): Das [`drop`](/de/docs/Web/API/HTMLElement/drop_event)-Ereignis wird auf dem Drop-Ziel ausgelöst. Innerhalb dieses Ereignisses liest der Zielknoten die Drag-Daten.
- Die [Drag-Operation endet](#beenden_des_drags): Das [`dragend`](/de/docs/Web/API/HTMLElement/dragend_event)-Ereignis wird auf dem Quellknoten ausgelöst. Dieses Ereignis wird unabhängig davon ausgelöst, ob das Drop erfolgreich war oder nicht.

## Beginn eines Drags

Der Drag startet auf einem [draggable Item](/de/docs/Web/API/HTML_Drag_and_Drop_API#draggable_items), das eine Auswahl, ein draggable Element (einschließlich Links, Bilder und jedes Element mit `draggable="true"`) oder eine Datei aus dem Datei-Explorer des Betriebssystems sein kann. Zuerst wird das [`dragstart`](/de/docs/Web/API/HTMLElement/dragstart_event)-Ereignis auf dem _Quellknoten_ ausgelöst, das das draggable Element oder bei Auswahl der Textknoten, auf dem der Drag gestartet wurde, ist. Wenn dieses Ereignis abgebrochen wird, wird die Drag-Operation abgebrochen. Andernfalls wird auch das [`pointercancel`](/de/docs/Web/API/Element/pointercancel_event)-Ereignis auf dem Quellknoten ausgelöst.

Das `dragstart`-Ereignis ist die einzige Gelegenheit, bei der Sie das [`dataTransfer`](/de/docs/Web/API/DragEvent/dataTransfer) verändern können. Bei einem benutzerdefinierten draggable Element ist es fast immer notwendig, die Drag-Daten zu ändern, was im Detail in [Ändern des Drag-Datenspeichers](/de/docs/Web/API/HTML_Drag_and_Drop_API/Drag_data_store#modifying_the_drag_data_store) behandelt wird. Es gibt zwei weitere Dinge, die Sie ändern können: das [Feedback-Bild setzen](#das_drag-feedback-bild_setzen) und die [erlaubten Drop-Effekte](#drop-effekte).

In diesem Beispiel fügen wir einen Listener für das [`dragstart`](/de/docs/Web/API/HTMLElement/dragstart_event)-Ereignis hinzu, indem wir die `addEventListener()`-Methode verwenden.

```html
<p draggable="true">This text <strong>may</strong> be dragged.</p>
```

```js
const draggableElement = document.querySelector('p[draggable="true"]');
draggableElement.addEventListener("dragstart", (event) => {
  event.dataTransfer.setData("text/plain", "This text may be dragged");
});
```

Sie können auch an einen höheren Vorfahren lauschen, da Drag-Ereignisse wie die meisten anderen Ereignisse nach oben blubbern. Aus diesem Grund ist es üblich, auch das Ziel des Ereignisses zu überprüfen, sodass das Ziehen einer Auswahl innerhalb dieses Elements nicht das `setData` auslöst (obwohl es schwierig ist, Text innerhalb des Elements auszuwählen, ist dies nicht unmöglich):

```js
draggableElement.addEventListener("dragstart", (event) => {
  if (event.target === draggableElement) {
    event.dataTransfer.setData("text/plain", "This text may be dragged");
  }
});
```

### Das Drag-Feedback-Bild setzen

Wenn ein Drag erfolgt, wird ein transparentes Bild vom Quellknoten erzeugt, das während des Drags dem Benutzerzeiger folgt. Dieses Bild wird automatisch erstellt, sodass Sie es nicht selbst erstellen müssen. Sie können jedoch [`setDragImage()`](/de/docs/Web/API/DataTransfer/setDragImage) verwenden, um ein benutzerdefiniertes Drag-Feedback-Bild anzugeben.

```js
draggableElement.addEventListener("dragstart", (event) => {
  event.dataTransfer.setDragImage(image, xOffset, yOffset);
});
```

Es sind drei Argumente erforderlich. Das erste ist ein Verweis auf ein Bild. Dieser Verweis ist typischerweise ein `<img>`-Element, kann aber auch ein `<canvas>` oder ein anderes Element sein. Das Feedback-Bild wird aus dem erzeugt, wie das Bild auf dem Bildschirm aussieht, obwohl Bilder in ihrer Originalgröße gezeichnet werden. Das zweite und dritte Argument der Methode [`setDragImage()`](/de/docs/Web/API/DataTransfer/setDragImage) sind Offsets, wo das Bild relativ zum Mauszeiger erscheinen soll.

Sie können auch Bilder und Canvas verwenden, die sich nicht in einem Dokument befinden. Diese Technik ist nützlich, wenn individuelle Drag-Bilder mit dem Canvas-Element gezeichnet werden, wie im folgenden Beispiel:

```js
draggableElement.addEventListener("dragstart", (event) => {
  const canvas = document.createElement("canvas");
  canvas.width = canvas.height = 50;

  const ctx = canvas.getContext("2d");
  ctx.lineWidth = 4;
  ctx.moveTo(0, 0);
  ctx.lineTo(50, 50);
  ctx.moveTo(0, 50);
  ctx.lineTo(50, 0);
  ctx.stroke();

  event.dataTransfer.setDragImage(canvas, 25, 25);
});
```

In diesem Beispiel machen wir einen Canvas zum Drag-Bild. Da der Canvas 50×50 Pixel groß ist, verwenden wir Offsets der Hälfte davon (`25`), damit das Bild zentriert auf dem Mauszeiger erscheint.

## Ziehen über Elemente und Drop-Ziele festlegen

Während der gesamten Drag-Operation werden alle Eingabegeräte-Ereignisse (wie Maus oder Tastatur) unterdrückt. Die gezogenen Daten können über verschiedene Elemente im Dokument oder sogar über Elemente in anderen Dokumenten bewegt werden. Jedes Mal, wenn ein neues Element betreten wird, wird ein [`dragenter`](/de/docs/Web/API/HTMLElement/dragenter_event)-Ereignis auf diesem Element ausgelöst, und ein [`dragleave`](/de/docs/Web/API/HTMLElement/dragleave_event)-Ereignis wird auf dem vorherigen Element ausgelöst.

> [!NOTE]
> `dragleave` wird immer _nach_ `dragenter` ausgelöst, daher hat das Ziel konzeptionell zwischen diesen beiden Ereignissen ein neues Element betreten, aber das vorherige noch nicht verlassen.

Alle paar hundert Millisekunden werden zwei Ereignisse ausgelöst: ein [`drag`](/de/docs/Web/API/HTMLElement/drag_event)-Ereignis am Quellknoten und ein [`dragover`](/de/docs/Web/API/HTMLElement/dragover_event)-Ereignis am Element, in dem sich der Drag derzeit befindet. Die meisten Bereiche einer Webseite oder Anwendung sind keine gültigen Orte zum Ablegen von Daten, sodass Elemente standardmäßig jedes Drop ignorieren, das darauf stattfindet. Das Element kann sich selbst zu einem gültigen Drop-Ziel erklären, indem es das `dragover`-Ereignis abbricht. Wenn das Element ein bearbeitbares Textfeld ist, wie ein {{HTMLElement("textarea")}} oder [`<input type="text">`](/de/docs/Web/HTML/Reference/Elements/input/text), und der Datenspeicher ein `text/plain`-Element enthält, dann ist das Element standardmäßig ein gültiges Drop-Ziel, ohne dass `dragover` abgebrochen werden muss.

```html
<div id="drop-target">You can drag and then drop a draggable item here</div>
```

```js
const dropElement = document.getElementById("drop-target");

dropElement.addEventListener("dragover", (event) => {
  event.preventDefault();
});
```

> [!NOTE]
> Die Spezifikation erfordert, dass das `dragenter`-Ereignis auch für ein Drop-Ziel abgebrochen wird, andernfalls wird auf diesem Element nicht einmal damit begonnen, `dragover`- oder `dragleave`-Ereignisse auszulösen; in der Praxis implementiert dies kein Browser, und das "aktuelle Element" ändert sich jedes Mal, wenn ein neues Element betreten wird.

> [!NOTE]
> Die Spezifikation erfordert, dass das Abbrechen des `drag`-Ereignisses den Drag [abbricht](#ein_fehlgeschlagener_drop); in der Praxis implementiert dies kein Browser. Siehe Beispiel unten:
>
> {{EmbedLiveSample("cancel_drag", "", 100)}}

```html hidden live-sample___cancel_drag
<p draggable="true" id="draggable">Drag me for 1 second!</p>
<p id="output"></p>
```

```js hidden live-sample___cancel_drag
const draggableElement = document.getElementById("draggable");
const output = document.getElementById("output");
let time = null;
draggableElement.addEventListener("dragstart", (event) => {
  time = Date.now();
  output.textContent = "";
});
draggableElement.addEventListener("drag", (event) => {
  if (time !== null && Date.now() - time > 1000) {
    event.preventDefault();
    output.textContent =
      "Drag operation cancelled; if you are still dragging the node, then your browser does not support cancelling the drag programmatically.";
    time = null;
  }
});
```

### Bedingte Drop-Ziele

In der Regel möchten Sie, dass das Drop-Ziel nur in bestimmten Situationen Drops akzeptiert (zum Beispiel nur, wenn ein Link gezogen wird). Um dies zu erreichen, überprüfen Sie eine Bedingung und brechen nur das Ereignis ab, wenn die Bedingung erfüllt ist. Beispielsweise können Sie überprüfen, ob die gezogenen Daten Links enthalten:

```js
dropElement.addEventListener("dragover", (event) => {
  const isLink = event.dataTransfer.types.includes("text/uri-list");
  if (isLink) {
    event.preventDefault();
  }
});
```

In diesem Beispiel verwenden wir die `includes`-Methode, um zu überprüfen, ob der Typ [`text/uri-list`](/de/docs/Web/API/HTML_Drag_and_Drop_API/Drag_data_store#dragging_links) in der Liste der Typen vorhanden ist. Wenn dies der Fall ist, brechen wir das Ereignis ab, damit ein Drop erlaubt werden kann. Wenn die Drag-Daten keinen Link enthalten, wird das Ereignis nicht abgebrochen, und ein Drop kann an diesem Ort nicht erfolgen.

## Drop-Feedback

Jetzt zieht der Benutzer in ein gültiges Drop-Ziel hinein. Es gibt mehrere Möglichkeiten, dem Benutzer anzuzeigen, dass ein Drop an dieser Stelle erlaubt ist und was passieren könnte, wenn der Drop erfolgt. Normalerweise wird der Mauszeiger je nach dem Wert der [`dropEffect`](/de/docs/Web/API/DataTransfer/dropEffect)-Eigenschaft entsprechend aktualisiert. Obwohl das genaue Aussehen von der Plattform des Benutzers abhängt, erscheint typischerweise ein Pluszeichen-Icon für eine `copy`-Beispiel und ein "Hier kann nicht abgelegt werden"-Icon, wenn ein Drop nicht erlaubt ist. Dieses Mauszeiger-Feedback ist in vielen Fällen ausreichend.

### Drop-Effekte

Beim Ablegen können mehrere Operationen ausgeführt werden:

- `copy`
  - : Die Daten sind nach dem Ablegen gleichzeitig an den Quell- und Zielorten vorhanden.
- `move`
  - : Die Daten sind nur am Zielort vorhanden und werden vom Quellort entfernt.
- `link`
  - : Es wird eine Form von Verknüpfung zwischen dem Quell- und dem Zielort erstellt; es gibt nur eine Instanz der Daten am Quellort.
- `none`
  - : Nichts passiert; der Drop ist fehlgeschlagen.

Mit den [`dragenter`](/de/docs/Web/API/HTMLElement/dragenter_event)- und [`dragover`](/de/docs/Web/API/HTMLElement/dragover_event)-Ereignissen wird die [`dropEffect`](/de/docs/Web/API/DataTransfer/dropEffect)-Eigenschaft auf den Effekt initialisiert, den der Benutzer anfordert. Der Benutzer kann den gewünschten Effekt durch Drücken von Modifikatortasten ändern. Obwohl die genauen Tasten je nach Plattform variieren, würden typischerweise die <kbd>Shift</kbd>- und <kbd>Control</kbd>-Tasten verwendet werden, um zwischen Kopieren, Bewegen und Verknüpfen zu wechseln. Der Mauszeiger ändert sich, um anzuzeigen, welche Operation gewünscht wird. Beispielsweise wird bei einer `copy` der Cursor möglicherweise mit einem Pluszeichen daneben angezeigt.

Sie können die [`dropEffect`](/de/docs/Web/API/DataTransfer/dropEffect)-Eigenschaft während der [`dragenter`](/de/docs/Web/API/HTMLElement/dragenter_event)- oder [`dragover`](/de/docs/Web/API/HTMLElement/dragover_event)-Ereignisse ändern, wenn beispielsweise ein bestimmtes Drop-Ziel nur bestimmte Operationen unterstützt. Sie können die [`dropEffect`](/de/docs/Web/API/DataTransfer/dropEffect)-Eigenschaft ändern, um den Benutzereffekt zu überschreiben und eine spezifische Drop-Operation zu erzwingen.

```js
target.addEventListener("dragover", (event) => {
  event.dataTransfer.dropEffect = "move";
});
```

In diesem Beispiel ist `move` der Effekt, der ausgeführt wird.

Sie können den Wert `none` verwenden, um anzuzeigen, dass an diesem Ort kein Drop erlaubt ist. Sie sollten dies normalerweise tun, wenn das Element vorübergehend keine Drops akzeptiert; wenn es nicht als Drop-Ziel gedacht ist, sollten Sie einfach nicht das Ereignis abbrechen.

Beachten Sie, dass die Einstellung von `dropEffect` nur den gewünschten Effekt _zu diesem bestimmten Zeitpunkt_ anzeigt; ein späteres `dragover` Dispatch kann es ändern. Um die Wahl zu persistieren, müssen Sie es in jedem `dragover`-Ereignis einstellen. Dieser Effekt ist auch nur _informativ_ und welche Effekte letztendlich implementiert werden, hängt sowohl von den Quell- als auch den Zielknoten ab (zum Beispiel, wenn der Quellknoten nicht modifiziert werden kann, dann kann es selbst bei einer angeforderten "move"-Operation möglicherweise nicht möglich sein, sie durchzuführen).

Für sowohl Benutzeraktionen als auch programmatische Einstellungen von `dropEffect` sind standardmäßig alle drei Drop-Effekte verfügbar. Das draggable Element kann sich selbst einschränken, nur bestimmte Effekte zuzulassen, indem die [`effectAllowed`](/de/docs/Web/API/DataTransfer/effectAllowed)-Eigenschaft innerhalb eines [`dragstart`](/de/docs/Web/API/HTMLElement/dragstart_event)-Ereignishandlers eingestellt wird.

```js
draggableElement.addEventListener("dragstart", (event) => {
  event.dataTransfer.effectAllowed = "copyLink";
});
```

In diesem Beispiel sind nur eine Kopier- oder Verknüpfungsoperation erlauben, aber eine Verschiebeoperation kann weder über Skript noch über Benutzeraktionen ausgewählt werden.

Die Werte von `effectAllowed` sind Kombinationen von `dropEffect`:

| Wert            | Beschreibung                                                                                                                                                        |
| --------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `none`          | Keine Operation ist erlaubt                                                                                                                                         |
| `copy`          | `copy` nur                                                                                                                                                          |
| `move`          | `move` nur                                                                                                                                                          |
| `link`          | `link` nur                                                                                                                                                          |
| `copyMove`      | `copy` oder `move` nur                                                                                                                                              |
| `copyLink`      | `copy` oder `link` nur                                                                                                                                              |
| `linkMove`      | `link` oder `move` nur                                                                                                                                              |
| `all`           | `copy`, `move` oder `link`                                                                                                                                          |
| `uninitialized` | Der Standardwert, wenn der Effekt nicht gesetzt wurde; im Allgemeinen gleichbedeutend mit `all`, außer dass der Standard-`dropEffect` nicht immer `copy` sein muss. |

Standardmäßig wird das `dropEffect` basierend auf `effectAllowed` initialisiert, in der Reihenfolge von `copy`, `link`, `move`, wobei das erste ausgewählt wird, das erlaubt ist. Die nicht ausgewählten, aber erlaubten Effekte können ebenfalls als Standard ausgewählt werden, wenn dies angebracht ist; zum Beispiel wird unter Windows durch Drücken der <kbd>Alt</kbd>-Taste `link` in den Vordergrund gerückt. Wenn `effectAllowed` `uninitialized` ist und das gezogene Element ein `<a>`-Link ist, ist das Standard-`dropEffect` `link`; wenn `effectAllowed` `uninitialized` ist und das gezogene Element eine Auswahl aus einem bearbeitbaren Textfeld ist, ist das Standard-`dropEffect` `move`.

```html hidden live-sample___drop_effects
<div class="sources-container">
  These are the sources with different <code>allowedEffect</code>
  <div id="sources"></div>
</div>
<div class="targets-container">
  These are the targets with different <code>dropEffect</code>
  <div id="targets"></div>
</div>
```

```css hidden live-sample___drop_effects
.sources-container,
.targets-container {
  width: calc(100% - 2rem);
  border: 2px dashed gray;
  padding: 0.5rem;
  margin: 1rem 0;
}

#sources,
#targets {
  display: grid;
  gap: 0.5rem;
  width: 100%;
}

#sources {
  grid-template-columns: 1fr 1fr 1fr;
}

#targets {
  grid-template-columns: 1fr 1fr;
}

#sources div,
#targets div {
  border: 2px solid black;
  flex: 1 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
}

#sources div {
  height: 50px;
}

#targets div {
  height: 75px;
}
```

```js hidden live-sample___drop_effects
for (const allowedEffect of [
  "none",
  "copy",
  "move",
  "link",
  "copyMove",
  "copyLink",
  "linkMove",
  "all",
  "uninitialized",
]) {
  const div = document.createElement("div");
  div.textContent = allowedEffect;
  div.draggable = true;
  div.addEventListener("dragstart", (event) => {
    event.dataTransfer.effectAllowed = allowedEffect;
  });
  document.getElementById("sources").appendChild(div);
}

for (const dropEffect of ["none", "copy", "move", "link"]) {
  const div = document.createElement("div");
  div.textContent = dropEffect;
  div.addEventListener("dragover", (event) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = dropEffect;
  });
  document.getElementById("targets").appendChild(div);
}
```

{{EmbedLiveSample("drop_effects", "", 500)}}

### Benutzerdefiniertes Drop-Feedback

Für komplexere visuelle Effekte können Sie während des [`dragenter`](/de/docs/Web/API/HTMLElement/dragenter_event)-Ereignisses andere Operationen durchführen, indem Sie beispielsweise ein Element an der Stelle einfügen, an der der Drop erfolgen wird. Dies könnte ein Einfügemarker oder ein Element sein, das das gezogene Element an seinem neuen Ort darstellt. Um dies zu tun, könnten Sie ein [`<img>`](/de/docs/Web/HTML/Reference/Elements/img)-Element erstellen und es während des [`dragenter`](/de/docs/Web/API/HTMLElement/dragenter_event)-Ereignisses in das Dokument einfügen.

Das [`dragover`](/de/docs/Web/API/HTMLElement/dragover_event)-Ereignis wird am Element ausgelöst, auf das die Maus zeigt. Natürlich müssen Sie den Einfügemarker möglicherweise auch innerhalb des [`dragover`](/de/docs/Web/API/HTMLElement/dragover_event)-Ereignishandlers bewegen. Sie können die [`clientX`](/de/docs/Web/API/MouseEvent/clientX)- und [`clientY`](/de/docs/Web/API/MouseEvent/clientY)-Eigenschaften des Ereignisses wie bei anderen Mausereignissen verwenden, um die Position des Mauszeigers zu bestimmen.

Schließlich wird das [`dragleave`](/de/docs/Web/API/HTMLElement/dragleave_event)-Ereignis an einem Element ausgelöst, wenn der Drag das Element verlässt. Dies ist der Zeitpunkt, an dem Sie alle Einfügemarker oder Hervorhebungen entfernen sollten. Sie müssen dieses Ereignis nicht abbrechen. Das [`dragleave`](/de/docs/Web/API/HTMLElement/dragleave_event)-Ereignis wird immer ausgelöst, selbst wenn der Drag abgebrochen wird, sodass Sie immer sicherstellen können, dass alle Einfügemarkierungs Bereinigungen während dieses Ereignisses durchgeführt werden können.

Für ein praktisches Beispiel zur Verwendung dieser Ereignisse siehe unser [Kanban-Board-Beispiel](/de/docs/Web/API/HTML_Drag_and_Drop_API/Kanban_board#inserting_at_a_particular_location).

## Ein Drop ausführen

Wenn der Benutzer die Maus loslässt, endet die Drag-and-Drop-Operation.

Damit der Drop _erfolgreich sein kann_, muss der Drop über einem gültigen [Drop-Ziel](#ziehen_über_elemente_und_drop-ziele_festlegen) erfolgen, und `dropEffect` darf beim Loslassen der Maus nicht `none` sein. Andernfalls gilt die Drop-Operation als [fehlgeschlagen](#ein_fehlgeschlagener_drop).

Wenn der Drop potenziell erfolgreich ist, wird ein [`drop`](/de/docs/Web/API/HTMLElement/drop_event)-Ereignis am Drop-Ziel ausgelöst. Sie müssen dieses Ereignis mit `preventDefault()` abbrechen, damit der Drop als tatsächlich erfolgreich gilt. Andernfalls wird der Drop auch dann als erfolgreich angesehen, wenn der Drop das Einfügen von Text (die Daten enthalten ein `text/plain`-Element) in ein bearbeitbares Textfeld war. In diesem Fall wird der Text in das Feld eingefügt (je nach Plattformkonventionen entweder an der Cursorposition oder am Ende), und wenn `dropEffect` `move` ist, während die Quelle eine Auswahl innerhalb eines bearbeitbaren Bereichs ist, wird die Quelle entfernt. Für alle anderen Drag-Daten und Drop-Ziele wird der Drop jedoch als fehlgeschlagen angesehen.

Während des [`drop`](/de/docs/Web/API/HTMLElement/drop_event)-Ereignisses sollten Sie die gewünschten Daten aus dem Drag-Datenspeicher mit [`DataTransfer.getData()`](/de/docs/Web/API/DataTransfer/getData) abrufen und sie an der Drop-Position einfügen. Sie können die [`dropEffect`](/de/docs/Web/API/DataTransfer/dropEffect)-Eigenschaft verwenden, um zu bestimmen, welche Drag-Operation gewünscht war. Das `drop`-Ereignis ist der einzige Zeitpunkt, an dem Sie den Drag-Datenspeicher lesen können, abgesehen von `dragstart`.

```js
target.addEventListener("drop", (event) => {
  event.preventDefault();
  const data = event.dataTransfer.getData("text/plain");
  target.textContent = data;
});
```

In dem hier gezeigten Beispiel, sobald die Daten abgerufen wurden, fügen wir die Zeichenkette als Textinhalt des Ziels ein. Dies hat den Effekt, dass der gezogene Text dort eingefügt wird, wo er abgelegt wurde, vorausgesetzt, dass das Drop-Ziel ein Textbereich wie ein `p` oder `div`-Element ist.

Die Methode `getData()` gibt eine leere Zeichenfolge zurück, wenn der Datenspeicher keine Daten des angegebenen Typs enthält. Wenn Sie [bedingte Drop-Ziele](#bedingte_drop-ziele) implementiert haben, sollte diese Situation nicht auftreten, weil das Drop-Ziel nur Drops akzeptieren sollte, wenn die gewünschten Daten vorhanden sind.

Sie können auch andere Datentypen abrufen. Wenn die Daten ein Link sind, sollten sie den Typ [`text/uri-list`](/de/docs/Web/API/HTML_Drag_and_Drop_API/Drag_data_store#dragging_links) haben. Dann könnten Sie einen Link in den Inhalt einfügen.

```js
target.addEventListener("drop", (event) => {
  event.preventDefault();
  const lines = event.dataTransfer.getData("text/uri-list").split("\r\n");
  lines
    .filter((line) => !line.startsWith("#"))
    .forEach((line) => {
      const link = document.createElement("a");
      link.href = line;
      link.textContent = line;
      target.appendChild(link);
    });
});
```

Für weitere Informationen darüber, wie man Drag-Daten liest, siehe [Arbeiten mit dem Drag-Datenspeicher](/de/docs/Web/API/HTML_Drag_and_Drop_API/Drag_data_store#reading_the_drag_data_store).

Es liegt auch in der Verantwortung der Quell- und Zielelemente, zusammenzuarbeiten, um die `dropEffect` zu implementieren—die Quelle hört auf das `dragend` Ereignis und das Ziel hört auf das `drop` Ereignis. Zum Beispiel, wenn die `dropEffect` `move` ist, dann muss eines dieser Elemente das gezogene Objekt von seinem alten Ort entfernen (normalerweise das Quell-Element selbst, da das Ziel-Element nicht notwendigerweise über die Quelle Bescheid weiß oder Kontrolle über sie hat).

<!-- TODO: Standardaktion des Ablegens von Dateien/Links in Browsern -->

## Ein fehlgeschlagener Drop

Die Drag-and-Drop-Operation gilt als fehlgeschlagen, wenn eines der folgenden zutrifft:

1. Der Benutzer drückte die <kbd>Escape</kbd>-Taste
2. Der Drop passierte außerhalb eines gültigen [Drop-Ziels](#ziehen_über_elemente_und_drop-ziele_festlegen)
3. Der Drop-Effekt war `none` zum Zeitpunkt des Loslassens der Maus
4. Das `drop`-Ereignis wurde nicht abgebrochen und der Drop hat keinen Text (enthält ein `text/plain`-Daten) in ein bearbeitbares Textfeld fallen lassen (siehe [Drop ausführen](#ein_drop_ausführen))

Bei den Fällen 1 und 3, wenn der Abbruch erfolgt, während der Mauscursor über einem gültigen Drop-Ziel schwebt, erhält das Drop-Ziel ein [`dragleave`](/de/docs/Web/API/HTMLElement/dragleave_event)-Ereignis, als ob der Drop nicht mehr darüber erfolgt, damit es jegliches [Drop-Feedback](#benutzerdefiniertes_drop-feedback) bereinigen kann. In allen Fällen wird `dropEffect` für nachfolgende Ereignisse auf `none` gesetzt.

Danach wird ein [`dragend`](/de/docs/Web/API/HTMLElement/dragend_event)-Ereignis am Quellknoten ausgelöst. Der Browser kann eine Animation anzeigen, bei der die gezogene Auswahl zurück zur Quelle der Drag-and-Drop-Operation geht.

## Beenden des Drags

Sobald der Drag abgeschlossen ist, wird ein [`dragend`](/de/docs/Web/API/HTMLElement/dragend_event)-Ereignis an der Quelle des Drags ausgelöst (das gleiche Element, das das [`dragstart`](/de/docs/Web/API/HTMLElement/dragstart_event)-Ereignis erhielt). Dieses Ereignis wird unabhängig davon ausgelöst, ob der Drag erfolgreich war oder nicht.

Wenn die [`dropEffect`](/de/docs/Web/API/DataTransfer/dropEffect)-Eigenschaft den Wert `none` während eines [`dragend`](/de/docs/Web/API/HTMLElement/dragend_event) hat, dann wurde der Drag abgebrochen. Andernfalls gibt der Effekt an, welche Operation ausgeführt wurde. Die Quelle kann diese Information nach einer `move`-Operation verwenden, um das gezogene Element vom alten Ort zu entfernen.

Ein Drop kann innerhalb des gleichen Fensters oder über eine andere Anwendung erfolgen. Das [`dragend`](/de/docs/Web/API/HTMLElement/dragend_event)-Ereignis wird immer ausgelöst, unabhängig davon. Die Eigenschaften [`screenX`](/de/docs/Web/API/MouseEvent/screenX) und [`screenY`](/de/docs/Web/API/MouseEvent/screenY) des Ereignisses werden auf die Bildschirmkoordinaten gesetzt, wo der Drop erfolgte.

Nachdem das [`dragend`](/de/docs/Web/API/HTMLElement/dragend_event)-Ereignis die Ausbreitung abgeschlossen hat, ist die Drag-and-Drop-Operation abgeschlossen.

## Siehe auch

- [HTML Drag and Drop API (Übersicht)](/de/docs/Web/API/HTML_Drag_and_Drop_API)
- [Arbeiten mit dem Drag-Datenspeicher](/de/docs/Web/API/HTML_Drag_and_Drop_API/Drag_data_store)
