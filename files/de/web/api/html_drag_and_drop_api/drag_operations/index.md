---
title: Drag-Operationen
slug: Web/API/HTML_Drag_and_Drop_API/Drag_operations
l10n:
  sourceCommit: 3385bda58637833eedc9b8dc41a2804e653208a7
---

{{DefaultAPISidebar("HTML Drag and Drop API")}}

Im Zentrum der Drag and Drop API stehen die verschiedenen [Drag-Ereignisse](/de/docs/Web/API/HTML_Drag_and_Drop_API#drag_events), die in einer bestimmten Reihenfolge ausgelöst werden und auf eine bestimmte Weise behandelt werden sollen. Dieses Dokument beschreibt die Schritte, die bei einem Drag-and-Drop-Vorgang auftreten, und was die Anwendung in jedem Ereignis-Handler tun soll.

Auf hoher Ebene sind hier die möglichen Schritte bei einem Drag-and-Drop-Vorgang:

- Der Benutzer [startet das Ziehen](#starten_eines_drags) an einem Quellknoten; das [`dragstart`](/de/docs/Web/API/HTMLElement/dragstart_event)-Ereignis wird auf dem Quellknoten ausgelöst. Innerhalb dieses Ereignisses bereitet der Quellknoten den Kontext für die Drag-Operation vor, einschließlich der Drag-Daten, Feedback-Bild und erlaubten Drop-Effekte.
- Der Benutzer [zieht das Element herum](#über_elemente_ziehen_und_ziele_festlegen): Jedes Mal, wenn ein neues Element betreten wird, wird das [`dragenter`](/de/docs/Web/API/HTMLElement/dragenter_event)-Ereignis auf diesem Element ausgelöst und das [`dragleave`](/de/docs/Web/API/HTMLElement/dragleave_event)-Ereignis auf dem vorherigen Element. Das [`dragover`](/de/docs/Web/API/HTMLElement/dragover_event)-Ereignis wird wiederholt auf dem Element ausgelöst, in dem sich der Drag derzeit befindet, und das [`drag`](/de/docs/Web/API/HTMLElement/drag_event)-Ereignis wird wiederholt auf dem Quellknoten ausgelöst.
- Der Drag gelangt in ein gültiges Ziel: Das Ziel storniert sein `dragover`-Ereignis, um anzuzeigen, dass es ein gültiges Ziel ist. Eine Form von [Drop-Feedback](#drop-feedback) zeigt dem Benutzer den erwarteten Drop-Effekt.
- Der Benutzer [führt den Drop aus](#ausführen_eines_drops): Das [`drop`](/de/docs/Web/API/HTMLElement/drop_event)-Ereignis wird auf dem Ziel ausgelöst. Innerhalb dieses Ereignisses liest der Zielknoten die Drag-Daten.
- Die [Drag-Operation endet](#beenden_des_drags): Das [`dragend`](/de/docs/Web/API/HTMLElement/dragend_event)-Ereignis wird auf dem Quellknoten ausgelöst. Dieses Ereignis wird ausgelöst, unabhängig davon, ob der Drop erfolgreich war oder nicht.

## Starten eines Drags

Der Drag beginnt an einem [ziehbaren Element](/de/docs/Web/API/HTML_Drag_and_Drop_API#draggable_items), das eine Auswahl, ein ziehbares Element (einschließlich Links, Bilder und jedes Element mit `draggable="true"`), eine Datei aus dem Datei-Explorer des Betriebssystems usw. sein kann. Zuerst wird das [`dragstart`](/de/docs/Web/API/HTMLElement/dragstart_event)-Ereignis auf dem _Quellknoten_ ausgelöst, bei dem es sich um das ziehbare Element oder, bei Auswahlen, um den Textknoten handelt, bei dem das Ziehen begann. Wenn dieses Ereignis abgebrochen wird, wird die Drag-Operation abgebrochen. Andernfalls wird das [`pointercancel`](/de/docs/Web/API/Element/pointercancel_event)-Ereignis ebenfalls auf dem Quellknoten ausgelöst.

Das `dragstart`-Ereignis ist die einzige Zeit, in der Sie den [`dataTransfer`](/de/docs/Web/API/DragEvent/dataTransfer) ändern können. Für ein benutzerdefiniertes ziehbares Element möchten Sie fast immer die Drag-Daten ändern, was im Detail unter [Ändern des Drag-Daten-Stores](/de/docs/Web/API/HTML_Drag_and_Drop_API/Drag_data_store#modifying_the_drag_data_store) behandelt wird. Es gibt zwei weitere Dinge, die Sie ändern können: das [Feedback-Bild](#festlegen_des_drag-feedback-bildes) und die [erlaubten Drop-Effekte](#drop-effekte).

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

Sie könnten auch auf einen höheren Vorfahren hören, da Drag-Ereignisse wie die meisten anderen Ereignisse nach oben blubbern. Aus diesem Grund ist es üblich, auch das Ziel des Ereignisses zu überprüfen, damit das Ziehen einer Auswahl, die innerhalb dieses Elements enthalten ist, nicht das `setData` auslöst (obwohl das Auswählen von Text innerhalb des Elements schwierig ist, ist es nicht unmöglich):

```js
draggableElement.addEventListener("dragstart", (event) => {
  if (event.target === draggableElement) {
    event.dataTransfer.setData("text/plain", "This text may be dragged");
  }
});
```

### Festlegen des Drag-Feedback-Bildes

Wenn ein Drag auftritt, wird ein durchsichtiges Bild aus dem Quellknoten generiert und folgt dem Zeiger des Benutzers während des Drags. Dieses Bild wird automatisch erstellt, sodass Sie es nicht selbst erstellen müssen. Sie können jedoch [`setDragImage()`](/de/docs/Web/API/DataTransfer/setDragImage) verwenden, um ein benutzerdefiniertes Drag-Feedback-Bild anzugeben.

```js
draggableElement.addEventListener("dragstart", (event) => {
  event.dataTransfer.setDragImage(image, xOffset, yOffset);
});
```

Drei Argumente sind erforderlich. Das erste ist ein Verweis auf ein Bild. Dieser Verweis bezieht sich typischerweise auf ein `<img>`-Element, kann aber auch auf ein `<canvas>` oder ein anderes Element verweisen. Das Feedback-Bild wird aus dem, wie das Bild auf dem Bildschirm aussieht, generiert, obwohl Bilder in ihrer Originalgröße gezeichnet werden. Die zweiten und dritten Argumente der [`setDragImage()`](/de/docs/Web/API/DataTransfer/setDragImage)-Methode sind Offsets, wo das Bild relativ zum Mauszeiger erscheinen soll.

Sie können auch Bilder und Leinwände verwenden, die sich nicht in einem Dokument befinden. Diese Technik ist nützlich, wenn benutzerdefinierte Drag-Bilder mit dem Canvas-Element gezeichnet werden, wie im folgenden Beispiel:

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

In diesem Beispiel machen wir ein Canvas zum Drag-Bild. Da das Canvas 50×50 Pixel groß ist, verwenden wir Offsets von der Hälfte davon (`25`), sodass das Bild zentriert auf dem Mauszeiger erscheint.

## Über Elemente ziehen und Ziele festlegen

Während der gesamten Drag-Operation werden alle Geräteeingabeereignisse (wie Maus oder Tastatur) unterdrückt. Die gezogenen Daten können über verschiedene Elemente im Dokument oder sogar Elemente in anderen Dokumenten bewegt werden. Jedes Mal, wenn ein neues Element betreten wird, wird ein [`dragenter`](/de/docs/Web/API/HTMLElement/dragenter_event)-Ereignis auf diesem Element ausgelöst und ein [`dragleave`](/de/docs/Web/API/HTMLElement/dragleave_event)-Ereignis auf dem vorherigen Element.

> [!NOTE]
> `dragleave` wird immer _nach_ `dragenter` ausgelöst, sodass konzeptionell zwischen diesen beiden Ereignissen das Ziel ein neues Element betreten hat, aber das vorherige noch nicht verlassen hat.

Während des Drags wird das [`drag`](/de/docs/Web/API/HTMLElement/drag_event)-Ereignis wiederholt auf dem Quellknoten ausgelöst, und das [`dragover`](/de/docs/Web/API/HTMLElement/dragover_event)-Ereignis wird wiederholt auf dem Element ausgelöst, in dem sich der Drag derzeit befindet. Die meisten Bereiche einer Webseite oder Anwendung sind keine gültigen Orte zum Ablegen von Daten, daher ignorieren Elemente standardmäßig jeden Drop, der auf sie erfolgt. Das Element kann sich als gültiges Ziel deklarieren, indem es das `dragover`-Ereignis abbricht. Wenn das Element ein bearbeitbares Textfeld ist, wie z.B. ein {{HTMLElement("textarea")}} oder [`<input type="text">`](/de/docs/Web/HTML/Reference/Elements/input/text), und der Datenstore ein `text/plain`-Element enthält, ist das Element standardmäßig ohne Abbrechen von `dragover` ein gültiges Ziel.

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
> Die Spezifikation erfordert, dass das `dragenter`-Ereignis für ein Ziel ebenfalls abgebrochen wird, andernfalls werden die `dragover`- oder `dragleave`-Ereignisse auf diesem Element gar nicht erst ausgelöst; in der Praxis implementiert kein Browser dies, und das "aktuelle Element" ändert sich jedes Mal, wenn ein neues Element betreten wird.

> [!NOTE]
> Die Spezifikation erfordert, dass das Abbrechen des `drag`-Ereignisses das Ziehen [abbricht](#ein_fehlgeschlagener_drop); in der Praxis implementiert kein Browser dies. Siehe das Beispiel unten:
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
      "Drag operation canceled; if you are still dragging the node, then your browser does not support canceling the drag programmatically.";
    time = null;
  }
});
```

### Bedingte Ziele

Sie möchten in der Regel nur, dass das Ziel Drops in bestimmten Situationen akzeptiert (z.B. nur, wenn ein Link gezogen wird). Um dies zu tun, überprüfen Sie eine Bedingung und brechen das Ereignis nur ab, wenn die Bedingung erfüllt ist. Zum Beispiel können Sie überprüfen, ob die gezogenen Daten Links enthalten:

```js
dropElement.addEventListener("dragover", (event) => {
  const isLink = event.dataTransfer.types.includes("text/uri-list");
  if (isLink) {
    event.preventDefault();
  }
});
```

In diesem Beispiel verwenden wir die `includes`-Methode, um zu überprüfen, ob der Typ [`text/uri-list`](/de/docs/Web/API/HTML_Drag_and_Drop_API/Drag_data_store#dragging_links) in der Liste der Typen vorhanden ist. Wenn er vorhanden ist, brechen wir das Ereignis ab, damit ein Drop erlaubt ist. Wenn die Drag-Daten keinen Link enthalten, wird das Ereignis nicht abgebrochen, und ein Drop kann an dieser Stelle nicht erfolgen.

## Drop-Feedback

Jetzt zieht der Benutzer in ein gültiges Ziel. Es gibt mehrere Möglichkeiten, dem Benutzer anzuzeigen, dass ein Drop an dieser Stelle erlaubt ist und was passieren könnte, wenn der Drop durchgeführt wird. Normalerweise wird der Mauszeiger je nach Wert der [`dropEffect`](/de/docs/Web/API/DataTransfer/dropEffect)-Eigenschaft wie notwendig aktualisiert. Obwohl das genaue Aussehen von der Plattform des Benutzers abhängt, wird typischerweise ein Pluszeichen-Symbol für ein `copy` angezeigt und ein "Kann hier nicht abgelegt werden"-Symbol, wenn ein Drop nicht erlaubt ist. Dieses Mauszeiger-Feedback ist in vielen Fällen ausreichend.

### Drop-Effekte

Beim Ablegen gibt es mehrere Operationen, die durchgeführt werden können:

- `copy`
  - : Die Daten sind nach dem Ablegen gleichzeitig am Quell- und Zielort vorhanden.
- `move`
  - : Die Daten sind nur noch am Zielort vorhanden und werden vom Quellort entfernt.
- `link`
  - : Eine Form von Verlinkung wird zwischen dem Quell- und Zielort erstellt; es gibt nur eine Instanz der Daten am Quellort.
- `none`
  - : Nichts passiert; der Drop ist fehlgeschlagen.

Mit den [`dragenter`](/de/docs/Web/API/HTMLElement/dragenter_event)- und [`dragover`](/de/docs/Web/API/HTMLElement/dragover_event)-Ereignissen wird die [`dropEffect`](/de/docs/Web/API/DataTransfer/dropEffect)-Eigenschaft auf den vom Benutzer gewünschten Effekt initialisiert. Der Benutzer kann den gewünschten Effekt durch Drücken von Modifikator-Tasten ändern. Obwohl sich die genauen Tasten je nach Plattform ändern, würden typischerweise die Tasten <kbd>Shift</kbd> und <kbd>Control</kbd> verwendet, um zwischen Kopieren, Verschieben und Verlinken zu wechseln. Der Mauszeiger ändert sich, um anzuzeigen, welche Operation gewünscht ist. Zum Beispiel könnte für ein `copy` der Cursor mit einem Pluszeichen daneben erscheinen.

Sie können die [`dropEffect`](/de/docs/Web/API/DataTransfer/dropEffect)-Eigenschaft während der [`dragenter`](/de/docs/Web/API/HTMLElement/dragenter_event)- oder [`dragover`](/de/docs/Web/API/HTMLElement/dragover_event)-Ereignisse ändern, wenn ein bestimmtes Ziel beispielsweise nur bestimmte Operationen unterstützt. Sie können die [`dropEffect`](/de/docs/Web/API/DataTransfer/dropEffect)-Eigenschaft ändern, um den Benutzereffekt zu überschreiben und eine spezifische Drop-Operation zu erzwingen.

```js
target.addEventListener("dragover", (event) => {
  event.dataTransfer.dropEffect = "move";
});
```

In diesem Beispiel wird die Operation `move` durchgeführt.

Sie können den Wert `none` verwenden, um anzuzeigen, dass an dieser Stelle kein Drop erlaubt ist. Diese Option sollten Sie normalerweise verwenden, wenn das Element nur vorübergehend keine Drops akzeptiert; wenn es nicht als Drop-Ziel gedacht ist, sollten Sie das Ereignis einfach nicht abbrechen.

Beachten Sie, dass das Setzen von `dropEffect` nur den gewünschten Effekt _in diesem speziellen Augenblick_ anzeigt; eine spätere `dragover`-Dispatch kann dies ändern. Um die Auswahl beizubehalten, müssen Sie es in jedem `dragover`-Ereignis festlegen. Außerdem ist dieser Effekt nur _informativ_, und welche Effekte letztendlich umgesetzt werden, hängt sowohl von den Quell- als auch den Zielknoten ab (z.B. wenn der Quellknoten nicht geändert werden kann, dann kann selbst bei einer angeforderten "move"-Operation dies nicht möglich sein).

Sowohl bei Benutzeraktionen als auch beim programmgesteuerten Setzen von `dropEffect` sind standardmäßig alle drei Drop-Effekte verfügbar. Das ziehbare Element kann sich darauf beschränken, nur bestimmte Effekte zuzulassen, indem es die [`effectAllowed`](/de/docs/Web/API/DataTransfer/effectAllowed)-Eigenschaft innerhalb eines [`dragstart`](/de/docs/Web/API/HTMLElement/dragstart_event)-Ereignis-Listeners festlegt.

```js
draggableElement.addEventListener("dragstart", (event) => {
  event.dataTransfer.effectAllowed = "copyLink";
});
```

In diesem Beispiel ist nur eine Kopier- oder Verlinkungsoperation erlaubt, aber eine Verschiebungsoperation kann weder über ein Skript noch über Benutzeraktionen ausgewählt werden.

Die Werte von `effectAllowed` sind Kombinationen von `dropEffect`:

| Wert            | Beschreibung                                                                                                                                                       |
| --------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `none`          | Keine Operation ist erlaubt                                                                                                                                        |
| `copy`          | Nur `copy`                                                                                                                                                         |
| `move`          | Nur `move`                                                                                                                                                         |
| `link`          | Nur `link`                                                                                                                                                         |
| `copyMove`      | Nur `copy` oder `move`                                                                                                                                             |
| `copyLink`      | Nur `copy` oder `link`                                                                                                                                             |
| `linkMove`      | Nur `link` oder `move`                                                                                                                                             |
| `all`           | `copy`, `move` oder `link`                                                                                                                                         |
| `uninitialized` | Der Standardwert, wenn der Effekt nicht festgelegt wurde; im Allgemeinen gleichwertig zu `all`, außer dass der Standard-`dropEffect` nicht immer `copy` sein muss. |

Standardmäßig wird der `dropEffect` basierend auf `effectAllowed` initialisiert, in der Reihenfolge von `copy`, `link`, `move`, wobei der erste erlaubte Effekt ausgewählt wird. Die nicht ausgewählten, aber erlaubten Effekte können ebenfalls als Standard ausgewählt werden, wenn es angemessen ist; zum Beispiel auf Windows wird, wenn die <kbd>Alt</kbd>-Taste gedrückt wird, `link` als Priorität verwendet. Wenn `effectAllowed` `uninitialized` ist und das gezogene Element ein `<a>`-Link ist, ist der Standard-`dropEffect` `link`; wenn `effectAllowed` `uninitialized` ist und das gezogene Element eine Auswahl aus einem bearbeitbaren Textfeld ist, ist der Standard-`dropEffect` `move`.

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

Für komplexere visuelle Effekte können Sie während des [`dragenter`](/de/docs/Web/API/HTMLElement/dragenter_event)-Ereignisses andere Operationen ausführen, zum Beispiel indem Sie ein Element an der Stelle einfügen, an der der Drop erfolgen wird. Dies könnte ein Einfügemarker oder ein Element sein, das das gezogene Element an seinem neuen Ort repräsentiert. Dazu könnten Sie ein [`<img>`](/de/docs/Web/HTML/Reference/Elements/img)-Element erstellen und es während des [`dragenter`](/de/docs/Web/API/HTMLElement/dragenter_event)-Ereignisses in das Dokument einfügen.

Das [`dragover`](/de/docs/Web/API/HTMLElement/dragover_event)-Ereignis wird am Element ausgelöst, auf das die Maus zeigt. Natürlich müssen Sie den Einfügemarker möglicherweise auch im `dragover`-Ereignis-Handler bewegen. Sie können die [`clientX`](/de/docs/Web/API/MouseEvent/clientX) und [`clientY`](/de/docs/Web/API/MouseEvent/clientY)-Eigenschaften des Ereignisses wie bei anderen Mausereignissen verwenden, um die Position des Mauszeigers zu bestimmen.

Abschließend wird das [`dragleave`](/de/docs/Web/API/HTMLElement/dragleave_event)-Ereignis bei einem Element ausgelöst, wenn der Drag das Element verlässt. Dies ist der Zeitpunkt, an dem Sie alle Einfügemarkierungen oder Hervorhebungen entfernen sollten. Sie müssen dieses Ereignis nicht stornieren. Das [`dragleave`](/de/docs/Web/API/HTMLElement/dragleave_event)-Ereignis wird immer ausgelöst, selbst wenn der Drag abgebrochen wird, sodass Sie immer sicherstellen können, dass die Reinigung des Einfügepunkts während dieses Ereignisses durchgeführt werden kann.

Für ein praktisches Beispiel zur Verwendung dieser Ereignisse, siehe unser [Kanban-Board-Beispiel](/de/docs/Web/API/HTML_Drag_and_Drop_API/Kanban_board#inserting_at_a_particular_location).

## Ausführen eines Drops

Wenn der Benutzer die Maus loslässt, endet die Drag-and-Drop-Operation.

Damit der Drop _möglicherweise erfolgreich_ ist, muss der Drop über einem gültigen [Ziel](#über_elemente_ziehen_und_ziele_festlegen) erfolgen, und der `dropEffect` darf zum Zeitpunkt des Loslassens der Maus nicht `none` sein. Andernfalls wird die Drop-Operation als [fehlgeschlagen](#ein_fehlgeschlagener_drop) betrachtet.

Wenn der Drop möglicherweise erfolgreich ist, wird ein [`drop`](/de/docs/Web/API/HTMLElement/drop_event)-Ereignis auf dem Zielknoten ausgelöst. Sie müssen dieses Ereignis mit `preventDefault()` abbrechen, damit der Drop als tatsächlich erfolgreich gilt. Andernfalls wird der Drop auch dann als erfolgreich betrachtet, wenn der Drop das Ablegen von Text (die Daten enthalten ein `text/plain`-Element) in ein bearbeitbares Textfeld war. In diesem Fall wird der Text in das Feld eingefügt (entweder an der Cursorposition oder am Ende, je nach Plattformkonventionen) und, wenn der `dropEffect` `move` ist, während die Quelle eine Auswahl innerhalb eines bearbeitbaren Bereichs war, wird die Quelle entfernt. Andernfalls wird für alle anderen Drag-Daten und Ziele der Drop als fehlgeschlagen betrachtet.

Während des [`drop`](/de/docs/Web/API/HTMLElement/drop_event)-Ereignisses sollten Sie die gewünschten Daten aus dem Drag-Daten-Store mit [`DataTransfer.getData()`](/de/docs/Web/API/DataTransfer/getData) abrufen und an der Drop-Position einfügen. Sie können die [`dropEffect`](/de/docs/Web/API/DataTransfer/dropEffect)-Eigenschaft verwenden, um festzustellen, welche Drag-Operation gewünscht war. Das `drop`-Ereignis ist die einzige Zeit, in der Sie den Drag-Daten-Store lesen können, abgesehen von `dragstart`.

```js
target.addEventListener("drop", (event) => {
  event.preventDefault();
  const data = event.dataTransfer.getData("text/plain");
  target.textContent = data;
});
```

In diesem Beispiel fügen wir, sobald die Daten abgerufen wurden, die Zeichenkette als Textinhalt des Ziels ein. Dies hat den Effekt, dass der gezogene Text dort eingefügt wird, wo er abgelegt wurde, vorausgesetzt, dass das Ziel ein Textbereich wie ein `p`- oder `div`-Element ist.

Die `getData()`-Methode gibt eine leere Zeichenkette zurück, wenn der Daten-Store keine Daten des angegebenen Typs enthält. Wenn Sie [bedingte Ziele](#bedingte_ziele) implementiert haben, sollte diese Situation nicht auftreten, da das Ziel nur Drops akzeptieren sollte, wenn die gewünschten Daten vorhanden sind.

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

Weitere Informationen zum Lesen von Drag-Daten finden Sie unter [Arbeiten mit dem Drag-Daten-Store](/de/docs/Web/API/HTML_Drag_and_Drop_API/Drag_data_store#reading_the_drag_data_store).

Es liegt auch in der Verantwortung der Quell- und Zielelemente, zusammenzuarbeiten, um den `dropEffect` zu implementieren — die Quelle hört auf das `dragend`-Ereignis und das Ziel hört auf das `drop`-Ereignis. Wenn der `dropEffect` zum Beispiel `move` ist, muss eines dieser Elemente das gezogene Element aus seiner alten Position entfernen (normalerweise das Quell-Element selbst, da das Ziel-Element nicht unbedingt Kontrolle über die Quelle hat).

<!-- TODO: Standardaktion von Dateiauswahllinks in Browsern -->

## Ein fehlgeschlagener Drop

Der Drag-and-Drop-Vorgang wird als fehlgeschlagen betrachtet, wenn eine der folgenden Bedingungen erfüllt ist:

1. Der Benutzer drückt die <kbd>Escape</kbd>-Taste
2. Der Drop erfolgt außerhalb eines gültigen [Ziels](#über_elemente_ziehen_und_ziele_festlegen)
3. Der Drop-Effekt war `none` zum Zeitpunkt des Loslassens der Maus
4. Das `drop`-Ereignis wurde nicht abgebrochen und der Drop war nicht das Ablegen von Text (mit `text/plain`-Daten) in ein bearbeitbares Textfeld (siehe [Ausführen eines Drops](#ausführen_eines_drops))

In den Fällen 1 und 3, wenn das Abbrechen über einem gültigen Ziel erfolgt, empfängt das Ziel ein [`dragleave`](/de/docs/Web/API/HTMLElement/dragleave_event)-Ereignis, als ob der Drop keine Auswirkungen mehr auf es hätte, damit es jegliches [Drop-Feedback](#benutzerdefiniertes_drop-feedback) bereinigen kann. In allen Fällen wird der `dropEffect` für nachfolgende Ereignisse auf `none` gesetzt.

Anschließend wird ein [`dragend`](/de/docs/Web/API/HTMLElement/dragend_event)-Ereignis an der Quelle ausgelöst. Der Browser kann eine Animation der gezogenen Auswahl anzeigen, die zur Quelle der Drag-and-Drop-Operation zurückkehrt.

## Beenden des Drags

Sobald der Drag abgeschlossen ist, wird ein [`dragend`](/de/docs/Web/API/HTMLElement/dragend_event)-Ereignis an der Quelle des Drags (dem gleichen Element, das das [`dragstart`](/de/docs/Web/API/HTMLElement/dragstart_event)-Ereignis erhielt) ausgelöst. Dieses Ereignis wird unabhängig davon ausgelöst, ob der Drag erfolgreich ist.

Wenn die [`dropEffect`](/de/docs/Web/API/DataTransfer/dropEffect)-Eigenschaft während eines [`dragend`](/de/docs/Web/API/HTMLElement/dragend_event) den Wert `none` hat, wurde der Drag abgebrochen. Andernfalls gibt der Effekt an, welche Operation durchgeführt wurde. Die Quelle kann diese Information nach einer `move`-Operation verwenden, um das gezogene Element von der alten Position zu entfernen.

Ein Drop kann innerhalb desselben Fensters oder über einer anderen Anwendung erfolgen. Das [`dragend`](/de/docs/Web/API/HTMLElement/dragend_event)-Ereignis wird jedoch immer ausgelöst. Die [`screenX`](/de/docs/Web/API/MouseEvent/screenX)- und [`screenY`](/de/docs/Web/API/MouseEvent/screenY)-Eigenschaften des Ereignisses werden auf die Bildschirmkoordinaten gesetzt, an denen der Drop erfolgte.

Nachdem das [`dragend`](/de/docs/Web/API/HTMLElement/dragend_event)-Ereignis die Verbreitung abgeschlossen hat, ist die Drag-and-Drop-Operation abgeschlossen.

## Siehe auch

- [HTML Drag and Drop API (Übersicht)](/de/docs/Web/API/HTML_Drag_and_Drop_API)
- [Arbeiten mit dem Drag-Daten-Store](/de/docs/Web/API/HTML_Drag_and_Drop_API/Drag_data_store)
