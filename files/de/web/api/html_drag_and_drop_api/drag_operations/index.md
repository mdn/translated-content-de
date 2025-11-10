---
title: Ziehoperationen
slug: Web/API/HTML_Drag_and_Drop_API/Drag_operations
l10n:
  sourceCommit: 8285d415db211ae9efe04752d9dab1b574450ee8
---

{{DefaultAPISidebar("HTML Drag and Drop API")}}

Zentral für die Drag-and-Drop-API sind die verschiedenen [Ziehen-Ereignisse](/de/docs/Web/API/HTML_Drag_and_Drop_API#drag_events), die in einer bestimmten Reihenfolge ausgelöst werden und in einer bestimmten Weise behandelt werden sollen. Dieses Dokument beschreibt die Schritte, die während einer Drag-and-Drop-Operation auftreten, und was die Anwendung innerhalb jedes Handlers tun soll.

Auf hoher Ebene sind hier die möglichen Schritte in einer Drag-and-Drop-Operation:

- Der Benutzer [startet das Ziehen](#starten_eines_zugs) an einem Quellknoten; das [`dragstart`](/de/docs/Web/API/HTMLElement/dragstart_event)-Ereignis wird am Quellknoten ausgelöst. Innerhalb dieses Ereignisses bereitet der Quellknoten den Kontext für die Ziehoperation vor, einschließlich der Ziehdaten, Feedbackbild und erlaubten Ablageeffekten.
- Der Benutzer [zieht das Element herum](#über_elemente_ziehen_und_ablageziele_angeben): Jedes Mal, wenn ein neues Element betreten wird, wird das [`dragenter`](/de/docs/Web/API/HTMLElement/dragenter_event)-Ereignis für dieses Element ausgelöst, und das [`dragleave`](/de/docs/Web/API/HTMLElement/dragleave_event)-Ereignis wird für das vorherige Element ausgelöst. Alle paar hundert Millisekunden wird ein [`dragover`](/de/docs/Web/API/HTMLElement/dragover_event)-Ereignis für das Element ausgelöst, in dem sich das Ziehen gerade befindet, und das [`drag`](/de/docs/Web/API/HTMLElement/drag_event)-Ereignis wird am Quellknoten ausgelöst.
- Das Ziehen erfolgt in ein gültiges Ziel: Das Ziel storniert sein `dragover`-Ereignis, um anzuzeigen, dass es ein gültiges Ablageziel ist. Eine Form von [Ablage-Feedback](#ablage-feedback) zeigt dem Benutzer den erwarteten Ablageeffekt an.
- Der Benutzer [führt das Ablegen durch](#ein_ablegen_durchführen): Das [`drop`](/de/docs/Web/API/HTMLElement/drop_event)-Ereignis wird für das Ablageziel ausgelöst. Innerhalb dieses Ereignisses liest der Zielknoten die Ziehdaten.
- Die [Ziehoperation endet](#beenden_des_zugs): Das [`dragend`](/de/docs/Web/API/HTMLElement/dragend_event)-Ereignis wird am Quellknoten ausgelöst. Dieses Ereignis wird unabhängig davon ausgelöst, ob das Ablegen erfolgreich war oder nicht.

## Starten eines Zugs

Das Ziehen beginnt an einem [ziehbaren Element](/de/docs/Web/API/HTML_Drag_and_Drop_API#draggable_items), das eine Auswahl, ein ziehbares Element (einschließlich Links, Bilder und jedes Element mit `draggable="true"`), eine Datei aus dem Dateiexplorer des Betriebssystems usw. sein kann. Zuerst wird das [`dragstart`](/de/docs/Web/API/HTMLElement/dragstart_event)-Ereignis am _Quellknoten_ ausgelöst, bei dem es sich um das ziehbare Element handelt oder, bei Auswahlen, um den Textknoten, auf dem das Ziehen begann. Wenn dieses Ereignis abgesagt wird, wird die Ziehoperation abgebrochen. Andernfalls wird auch das [`pointercancel`](/de/docs/Web/API/Element/pointercancel_event)-Ereignis am Quellknoten ausgelöst.

Das `dragstart`-Ereignis ist die einzige Zeit, in der Sie das [`dataTransfer`](/de/docs/Web/API/DragEvent/dataTransfer) ändern können. Für ein benutzerdefiniertes ziehbares Element möchten Sie fast immer die Ziehdaten ändern, was im Detail in [Ändern des Ziehdatenspeichers](/de/docs/Web/API/HTML_Drag_and_Drop_API/Drag_data_store#modifying_the_drag_data_store) behandelt wird. Es gibt zwei weitere Dinge, die Sie ändern können: das [Feedbackbild](#festlegen_des_drag-feedbackbildes) und die [erlaubten Ablageeffekte](#ablageeffekte).

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

Sie könnten auch einem höheren Vorfahren lauschen, da Drag-Ereignisse wie die meisten anderen Ereignisse nach oben blubbern. Aus diesem Grund ist es üblich, auch das Ziel des Ereignisses zu überprüfen, damit das Ziehen einer Auswahl, die innerhalb dieses Elements enthalten ist, nicht das `setData` auslöst (obwohl das Auswählen von Text innerhalb des Elements schwierig ist, ist es nicht unmöglich):

```js
draggableElement.addEventListener("dragstart", (event) => {
  if (event.target === draggableElement) {
    event.dataTransfer.setData("text/plain", "This text may be dragged");
  }
});
```

### Festlegen des Drag-Feedbackbildes

Wenn ein Ziehen auftritt, wird ein durchscheinendes Bild aus dem Quellknoten erzeugt, das dem Zeiger des Benutzers während des Ziehens folgt. Dieses Bild wird automatisch erstellt, sodass Sie es nicht selbst erstellen müssen. Sie können jedoch [`setDragImage()`](/de/docs/Web/API/DataTransfer/setDragImage) verwenden, um ein benutzerdefiniertes Drag-Feedbackbild anzugeben.

```js
draggableElement.addEventListener("dragstart", (event) => {
  event.dataTransfer.setDragImage(image, xOffset, yOffset);
});
```

Drei Argumente sind notwendig. Das erste ist ein Verweis auf ein Bild. Dieser Verweis wird in der Regel auf ein `<img>`-Element verweisen, kann aber auch auf `<canvas>` oder jedes andere Element verweisen. Das Feedbackbild wird aus dem generiert, wie das Bild auf dem Bildschirm aussieht, obwohl Bilder in ihrer Originalgröße gezeichnet werden. Die zweite und dritte Argumente der [`setDragImage()`](/de/docs/Web/API/DataTransfer/setDragImage)-Methode sind Offset-Werte, wo das Bild relativ zum Mauszeiger erscheinen soll.

Sie können auch Bilder und Canvases verwenden, die sich nicht in einem Dokument befinden. Diese Technik ist nützlich, wenn benutzerdefinierte Drag-Bilder mit dem Canvas-Element gezeichnet werden, wie im folgenden Beispiel:

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

In diesem Beispiel machen wir ein Canvas zum Drag-Bild. Da das Canvas 50×50 Pixel groß ist, verwenden wir Offsets von der Hälfte davon (`25`), damit das Bild zentriert auf dem Mauszeiger erscheint.

## Über Elemente ziehen und Ablageziele angeben

Während des gesamten Verlaufs der Ziehoperation werden alle Eingabegeräteereignisse (wie Maus oder Tastatur) unterdrückt. Die gezogenen Daten können über verschiedene Elemente im Dokument oder sogar über Elemente in anderen Dokumenten bewegt werden. Jedes Mal, wenn ein neues Element betreten wird, wird ein [`dragenter`](/de/docs/Web/API/HTMLElement/dragenter_event)-Ereignis für dieses Element ausgelöst, und ein [`dragleave`](/de/docs/Web/API/HTMLElement/dragleave_event)-Ereignis wird für das vorherige Element ausgelöst.

> [!NOTE]
> `dragleave` wird immer _nach_ `dragenter` ausgelöst, sodass das Ziel konzeptionell zwischen diesen beiden Ereignissen in ein neues Element eingetreten ist, aber das vorherige noch nicht verlassen hat.

Alle paar hundert Millisekunden werden zwei Ereignisse ausgelöst: ein [`drag`](/de/docs/Web/API/HTMLElement/drag_event)-Ereignis am Quellknoten und ein [`dragover`](/de/docs/Web/API/HTMLElement/dragover_event)-Ereignis am Element, in dem sich das Ziehen gerade befindet. Die meisten Bereiche einer Webseite oder Anwendung sind keine gültigen Orte zum Ablegen von Daten, sodass Elemente standardmäßig jedes Ablegen ignorieren, das darauf passiert. Das Element kann sich selbst als gültiges Ablageziel wählen, indem es das `dragover`-Ereignis absagt. Wenn das Element ein bearbeitbares Textfeld ist, wie ein {{HTMLElement("textarea")}} oder [`<input type="text">`](/de/docs/Web/HTML/Reference/Elements/input/text), und der Datenspeicher ein `text/plain`-Element enthält, dann ist das Element standardmäßig ein gültiges Ablageziel, ohne `dragover` abzusagen.

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
> Die Spezifikation erfordert, dass auch das `dragenter`-Ereignis für ein Ablageziel abgesagt wird, andernfalls würden die `dragover`- oder `dragleave`-Ereignisse nicht einmal für dieses Element ausgelöst; in der Praxis wird dies von keinem Browser implementiert, und das "aktuelle Element" ändert sich jedes Mal, wenn ein neues Element betreten wird.

> [!NOTE]
> Die Spezifikation erfordert, dass das Abbrechen des `drag`-Ereignisses das Ziehen [abbricht](#ein_fehlgeschlagenes_ablegen); in der Praxis wird dies von keinem Browser implementiert. Siehe folgendes Beispiel:
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

### Bedingte Ablageziele

In der Regel möchten Sie, dass das Ablageziel nur in bestimmten Situationen Ablegen akzeptiert (zum Beispiel nur, wenn ein Link gezogen wird). Um dies zu tun, prüfen Sie eine Bedingung und brechen Sie das Ereignis nur dann ab, wenn die Bedingung erfüllt ist. Zum Beispiel können Sie überprüfen, ob die gezogenen Daten Links enthalten:

```js
dropElement.addEventListener("dragover", (event) => {
  const isLink = event.dataTransfer.types.includes("text/uri-list");
  if (isLink) {
    event.preventDefault();
  }
});
```

In diesem Beispiel verwenden wir die `includes`-Methode, um zu prüfen, ob der Typ [`text/uri-list`](/de/docs/Web/API/HTML_Drag_and_Drop_API/Drag_data_store#dragging_links) in der Liste der Typen vorhanden ist. Wenn ja, werden wir das Ereignis abbrechen, damit ein Ablegen erlaubt wird. Wenn die Ziehdaten keinen Link enthalten, wird das Ereignis nicht abgebrochen, und ein Ablegen kann an dieser Position nicht stattfinden.

## Ablage-Feedback

Jetzt zieht der Benutzer in ein gültiges Ablageziel. Es gibt mehrere Möglichkeiten, den Benutzer darauf hinzuweisen, dass an dieser Position ein Ablegen erlaubt ist und was möglicherweise passiert, wenn das Ablegen stattfindet. Normalerweise wird der Mauszeiger je nach Wert der [`dropEffect`](/de/docs/Web/API/DataTransfer/dropEffect)-Eigenschaft entsprechend aktualisiert. Obwohl das genaue Erscheinungsbild von der Plattform des Benutzers abhängt, wird typischerweise ein Pluszeichen-Symbol für ein `copy` angezeigt, zum Beispiel, und ein "Hier kann nicht abgelegt werden"-Symbol erscheint, wenn ein Ablegen nicht erlaubt ist. Dieses Mauszeiger-Feedback ist in vielen Fällen ausreichend.

### Ablageeffekte

Beim Ablegen können mehrere Operationen durchgeführt werden:

- `copy`
  - : Die Daten sind nach dem Ablegen gleichzeitig an Quell- und Ziellocations vorhanden.
- `move`
  - : Die Daten sind nur an der Ziellocation vorhanden und werden von der Quelllocation entfernt.
- `link`
  - : Eine Form der Verknüpfung wird zwischen Quell- und Abgabelocations erstellt; es gibt nur eine Instanz der Daten an der Quelllocation.
- `none`
  - : Nichts passiert; das Ablegen ist fehlgeschlagen.

Mit den [`dragenter`](/de/docs/Web/API/HTMLElement/dragenter_event) und [`dragover`](/de/docs/Web/API/HTMLElement/dragover_event)-Ereignissen wird die [`dropEffect`](/de/docs/Web/API/DataTransfer/dropEffect)-Eigenschaft auf den Effekt initialisiert, den der Benutzer anfordert. Der Benutzer kann den gewünschten Effekt durch Drücken von Modifikatortasten ändern. Obwohl die genauen verwendeten Tasten je nach Plattform variieren, würden normalerweise die Tasten <kbd>Shift</kbd> und <kbd>Control</kbd> verwendet, um zwischen Kopieren, Verschieben und Verknüpfen zu wechseln. Der Mauszeiger wird sich ändern, um anzugeben, welche Operation gewünscht wird. Bei einem `copy` könnte der Cursor beispielsweise mit einem Pluszeichen daneben erscheinen.

Sie können die [`dropEffect`](/de/docs/Web/API/DataTransfer/dropEffect)-Eigenschaft während der [`dragenter`](/de/docs/Web/API/HTMLElement/dragenter_event)- oder [`dragover`](/de/docs/Web/API/HTMLElement/dragover_event)-Ereignisse ändern, wenn beispielsweise ein bestimmtes Ablageziel nur bestimmte Operationen unterstützt. Sie können die [`dropEffect`](/de/docs/Web/API/DataTransfer/dropEffect)-Eigenschaft ändern, um den Benutzereffekt zu überschreiben und eine bestimmte Ablageoperation durchzusetzen.

```js
target.addEventListener("dragover", (event) => {
  event.dataTransfer.dropEffect = "move";
});
```

In diesem Beispiel ist Verschieben der Effekt, der durchgeführt wird.

Sie können den Wert `none` verwenden, um anzugeben, dass an dieser Position kein Ablegen erlaubt ist. Sie sollten dies in der Regel tun, wenn das Element vorübergehend keine Ablagen akzeptiert; wenn es nicht als Ablageziel vorgesehen ist, sollten Sie einfach das Ereignis nicht absagen.

Beachten Sie, dass das Festlegen von `dropEffect` nur den gewünschten Effekt _zu diesem bestimmten Zeitpunkt_ anzeigt; ein späteres `dragover`-Dispatcher kann es ändern. Um die Wahl beizubehalten, müssen Sie sie bei jedem `dragover`-Ereignis festlegen. Außerdem ist dieser Effekt nur _informativ_, und welche Effekte letztendlich implementiert werden, hängt sowohl von den Quell- als auch den Zielknoten ab (zum Beispiel, wenn derQuellknoten nicht modifiziert werden kann, dann kann es selbst bei einer "move"-Operation nicht möglich sein, dies durchzuführen).

Für sowohl Benutzerinteraktionen als auch programmatisches Festlegen von `dropEffect` sind standardmäßig alle drei Ablageeffekte verfügbar. Das ziehbare Element kann sich darauf beschränken, nur bestimmte Effekte zuzulassen, indem es die [`effectAllowed`](/de/docs/Web/API/DataTransfer/effectAllowed)-Eigenschaft innerhalb eines [`dragstart`](/de/docs/Web/API/HTMLElement/dragstart_event)-Ereignis-Listeners festlegt.

```js
draggableElement.addEventListener("dragstart", (event) => {
  event.dataTransfer.effectAllowed = "copyLink";
});
```

In diesem Beispiel ist nur eine Kopier- oder Verknüpfungsoperation erlaubt, aber eine Verschiebeoperation kann weder über Skript noch über Benutzerinteraktionen ausgewählt werden.

Die Werte von `effectAllowed` sind Kombinationen von `dropEffect`:

| Wert            | Beschreibung                                                                                                                                                           |
| --------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `none`          | Keine Operation ist erlaubt                                                                                                                                            |
| `copy`          | Nur `copy`                                                                                                                                                             |
| `move`          | Nur `move`                                                                                                                                                             |
| `link`          | Nur `link`                                                                                                                                                             |
| `copyMove`      | Nur `copy` oder `move`                                                                                                                                                 |
| `copyLink`      | Nur `copy` oder `link`                                                                                                                                                 |
| `linkMove`      | Nur `link` oder `move`                                                                                                                                                 |
| `all`           | `copy`, `move` oder `link`                                                                                                                                             |
| `uninitialized` | Der Standardwert, wenn der Effekt nicht festgelegt wurde; generell äquivalent zu `all`, außer der Standardwert für `dropEffect` ist möglicherweise nicht immer `copy`. |

Standardmäßig wird `dropEffect` basierend auf `effectAllowed` in der Reihenfolge von `copy`, `link`, `move` initialisiert und wählt den ersten aus, der erlaubt ist. Die nicht ausgewählten, aber erlaubten Effekte können ebenfalls als Standard ausgewählt werden, wenn dies zutrifft; zum Beispiel führt das Drücken der <kbd>Alt</kbd>-Taste unter Windows dazu, dass `link` vorrangig verwendet wird. Wenn `effectAllowed` `uninitialized` ist und das gezogene Element ein `<a>`-Link ist, ist der Standardwert für `dropEffect` `link`; wenn `effectAllowed` `uninitialized` ist und das gezogene Element eine Auswahl aus einem editierbaren Textfeld ist, ist der Standardwert für `dropEffect` `move`.

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

### Benutzerdefiniertes Ablagefeedback

Für komplexere visuelle Effekte können Sie während des [`dragenter`](/de/docs/Web/API/HTMLElement/dragenter_event)-Ereignisses andere Operationen ausführen, indem Sie zum Beispiel ein Element an der Position einfügen, an der das Ablegen stattfinden wird. Dies könnte ein Einfügemarker oder ein Element sein, das das gezogene Element an seinem neuen Standort darstellt. Dazu könnten Sie ein [`<img>`](/de/docs/Web/HTML/Reference/Elements/img)-Element erstellen und es während des [`dragenter`](/de/docs/Web/API/HTMLElement/dragenter_event)-Ereignisses in das Dokument einfügen.

Das [`dragover`](/de/docs/Web/API/HTMLElement/dragover_event)-Ereignis wird für das Element ausgelöst, auf das der Mauszeiger zeigt. Natürlich müssen Sie den Einfügemarker innerhalb des [`dragover`](/de/docs/Web/API/HTMLElement/dragover_event)-Ereignis-Handlers möglicherweise umherbewegen. Sie können die [`clientX`](/de/docs/Web/API/MouseEvent/clientX)- und [`clientY`](/de/docs/Web/API/MouseEvent/clientY)-Eigenschaften des Ereignisses wie bei anderen Mausereignissen verwenden, um den Standort des Mauszeigers zu bestimmen.

Schließlich wird das [`dragleave`](/de/docs/Web/API/HTMLElement/dragleave_event)-Ereignis ausgelöst, wenn das Ziehen das Element verlässt. Dies ist der Zeitpunkt, zu dem Sie Einfügemarker oder Hervorhebungen entfernen sollten. Sie müssen dieses Ereignis nicht abbrechen. Das [`dragleave`](/de/docs/Web/API/HTMLElement/dragleave_event)-Ereignis wird immer ausgelöst, selbst wenn das Ziehen abgebrochen wird, sodass Sie immer sicherstellen können, dass eine Bereinigung des Einfügepunkts während dieses Ereignisses durchgeführt werden kann.

Für ein praktisches Beispiel zur Verwendung dieser Ereignisse, siehe unser [Kanban-Board-Beispiel](/de/docs/Web/API/HTML_Drag_and_Drop_API/Kanban_board#inserting_at_a_particular_location).

## Ein Ablegen durchführen

Wenn der Benutzer die Maus loslässt, endet die Drag-and-Drop-Operation.

Damit das Ablegen _potenziell erfolgreich_ ist, muss das Ablegen über einem gültigen [Ablageziel](#über_elemente_ziehen_und_ablageziele_angeben) stattfinden und die `dropEffect` darf zur Zeit der Mausfreigabe nicht `none` sein. Andernfalls wird die Ablegeoperation als [fehlgeschlagen](#ein_fehlgeschlagenes_ablegen) betrachtet.

Wenn das Ablegen potenziell erfolgreich ist, wird ein [`drop`](/de/docs/Web/API/HTMLElement/drop_event)-Ereignis für das Ablageziel ausgelöst. Sie müssen dieses Ereignis mit `preventDefault()` abbrechen, damit das Ablegen tatsächlich als erfolgreich betrachtet wird. Andernfalls wird das Ablegen auch dann als erfolgreich angesehen, wenn das Ablegen darin besteht, Text (die Daten enthalten ein `text/plain`-Element) in ein bearbeitbares Textfeld einzufügen. In diesem Fall wird der Text in das Feld eingefügt (entweder an der Cursorposition oder am Ende, abhängig von den Plattformkonventionen) und, falls die `dropEffect` `move` ist, während die Quelle eine Auswahl in einem editierbaren Bereich ist, wird die Quelle entfernt. Andernfalls wird bei allen anderen Drag-Daten und Ablagezielen das Ablegen als fehlgeschlagen betrachtet.

Während des [`drop`](/de/docs/Web/API/HTMLElement/drop_event)-Ereignisses sollten Sie die gewünschten Daten aus dem Ziehdatenspeicher mit [`DataTransfer.getData()`](/de/docs/Web/API/DataTransfer/getData) abrufen und an der Ablageposition einfügen. Sie können die [`dropEffect`](/de/docs/Web/API/DataTransfer/dropEffect)-Eigenschaft verwenden, um zu bestimmen, welche Ziehoperation gewünscht wurde. Das `drop`-Ereignis ist die einzige Zeit, in der Sie den Ziehdatenspeicher lesen können, abgesehen von `dragstart`.

```js
target.addEventListener("drop", (event) => {
  event.preventDefault();
  const data = event.dataTransfer.getData("text/plain");
  target.textContent = data;
});
```

In diesem Beispiel wird, sobald die Daten abgerufen wurden, die Zeichenkette als Textinhalt des Ziels eingefügt. Dies hat den Effekt, den gezogenen Text dort einzufügen, wo er abgelegt wurde, vorausgesetzt, dass das Ablageziel ein Textbereich wie ein `p`- oder `div`-Element ist.

Die `getData()`-Methode gibt eine leere Zeichenkette zurück, wenn der Datenspeicher keine Daten des angegebenen Typs enthält. Wenn Sie [bedingte Ablageziele](#bedingte_ablageziele) implementiert haben, sollte diese Situation nicht auftreten, da das Ablageziel nur Ablagen akzeptieren sollte, wenn die gewünschten Daten vorhanden sind.

Sie können auch andere Datentypen abrufen. Wenn die Daten ein Link sind, sollten sie den Typ [`text/uri-list`](/de/docs/Web/API/HTML_Drag_and_Drop_API/Drag_data_store#dragging_links) haben. Sie könnten dann einen Link in den Inhalt einfügen.

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

Weitere Informationen zum Lesen von Ziehdaten finden Sie unter [Arbeiten mit dem Ziehdatenspeicher](/de/docs/Web/API/HTML_Drag_and_Drop_API/Drag_data_store#reading_the_drag_data_store).

Es ist außerdem die Verantwortung der Quelle und der Ziel-Elemente, zusammenzuarbeiten, um die `dropEffect` zu implementieren – die Quelle hört auf das `dragend`-Ereignis und das Ziel hört auf das `drop`-Ereignis. Zum Beispiel, wenn die `dropEffect` `move` ist, dann muss eines dieser Elemente das gezogene Element von seinem alten Standort entfernen (normalerweise das Quell-Element selbst, da das Ziel-Element nicht unbedingt die Kontrolle über die Quelle hat).

<!-- TODO: Standardaktion von Datei-Links in Browsern ablegen -->

## Ein fehlgeschlagenes Ablegen

Die Drag-and-Drop-Operation wird als fehlgeschlagen betrachtet, wenn eine der folgenden Bedingungen zutrifft:

1. Der Benutzer hat die <kbd>Escape</kbd>-Taste gedrückt
2. Das Ablegen erfolgte außerhalb eines gültigen [Ablageziels](#über_elemente_ziehen_und_ablageziele_angeben)
3. Der Ablegeeffekt war zum Zeitpunkt der Mausfreigabe `none`
4. Das `drop`-Ereignis wurde nicht abgebrochen und das Ablegen bestand nicht darin, Text (der `text/plain`-Daten enthält) in ein bearbeitbares Textfeld einzufügen (siehe [ein Ablegen durchführen](#ein_ablegen_durchführen))

Für die Fälle 1 und 3, wenn der Abbruch während des Schwebens über einem gültigen Ablageziel erfolgt, erhält das Ablageziel ein [`dragleave`](/de/docs/Web/API/HTMLElement/dragleave_event)-Ereignis, als würde das Ablegen es nicht mehr stattfinden, damit es jedes [Ablage-Feedback](#benutzerdefiniertes_ablagefeedback) bereinigen kann. In allen Fällen wird `dropEffect` für nachfolgende Ereignisse auf `none` gesetzt.

Anschließend wird ein [`dragend`](/de/docs/Web/API/HTMLElement/dragend_event)-Ereignis am Quellknoten ausgelöst. Der Browser kann eine Animation der gezogenen Auswahl anzeigen, die zurück zur Quelle der Drag-and-Drop-Operation geht.

## Beenden des Zugs

Sobald das Ziehen abgeschlossen ist, wird ein [`dragend`](/de/docs/Web/API/HTMLElement/dragend_event)-Ereignis an der Quelle des Ziehens ausgelöst (dasselbe Element, das das [`dragstart`](/de/docs/Web/API/HTMLElement/dragstart_event)-Ereignis empfangen hat). Dieses Ereignis wird unabhängig davon ausgelöst, ob das Ziehen erfolgreich war oder nicht.

Hat die [`dropEffect`](/de/docs/Web/API/DataTransfer/dropEffect)-Eigenschaft den Wert `none` während eines [`dragend`](/de/docs/Web/API/HTMLElement/dragend_event), wurde das Ziehen abgebrochen. Andernfalls gibt der Effekt an, welche Operation durchgeführt wurde. Die Quelle kann diese Informationen nach einer `move`-Operation verwenden, um das gezogene Element von der alten Position zu entfernen.

Ein Ablegen kann im selben Fenster oder über eine andere Anwendung erfolgen. Das [`dragend`](/de/docs/Web/API/HTMLElement/dragend_event)-Ereignis wird immer ausgelöst, unabhängig davon, wo es stattfindet. Die [`screenX`](/de/docs/Web/API/MouseEvent/screenX)- und [`screenY`](/de/docs/Web/API/MouseEvent/screenY)-Eigenschaften des Ereignisses werden auf die Bildschirmkoordinaten gesetzt, an denen das Ablegen stattgefunden hat.

Nachdem das [`dragend`](/de/docs/Web/API/HTMLElement/dragend_event)-Ereignis die Propagation beendet hat, ist die Drag-and-Drop-Operation abgeschlossen.

## Siehe auch

- [HTML Drag and Drop API (Übersicht)](/de/docs/Web/API/HTML_Drag_and_Drop_API)
- [Arbeiten mit dem Ziehdatenspeicher](/de/docs/Web/API/HTML_Drag_and_Drop_API/Drag_data_store)
