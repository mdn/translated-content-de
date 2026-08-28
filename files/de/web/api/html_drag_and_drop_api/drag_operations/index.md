---
title: Ziehvorgänge
slug: Web/API/HTML_Drag_and_Drop_API/Drag_operations
l10n:
  sourceCommit: 65692fd4d256d5647749b7c7005dcf53d425a533
---

{{DefaultAPISidebar("HTML Drag and Drop API")}}

Zentral für die Drag-and-Drop-API sind die verschiedenen [Ziehereignisse](/de/docs/Web/API/HTML_Drag_and_Drop_API#drag_events), die in einer bestimmten Reihenfolge ausgelöst werden und auf eine bestimmte Weise behandelt werden sollen. Dieses Dokument beschreibt die Schritte, die während eines Drag-and-Drop-Vorgangs stattfinden, und was die Anwendung in jedem Handler unternehmen soll.

Auf einer höheren Ebene sind hier die möglichen Schritte in einem Drag-and-Drop-Vorgang:

- Der Benutzer [beginnt das Ziehen](#anfang_eines_ziehvorgangs) auf einem Quellknoten; das [`dragstart`](/de/docs/Web/API/HTMLElement/dragstart_event)-Ereignis wird auf dem Quellknoten ausgelöst. Innerhalb dieses Ereignisses bereitet der Quellknoten den Kontext für den Ziehvorgang vor, einschließlich der Ziehdaten, dem Feedback-Bild und den erlaubten Abwurfeffekten.
- Der Benutzer [zieht das Element herum](#über_elemente_ziehen_und_ziele_festlegen): Jedes Mal, wenn ein neues Element betreten wird, wird das [`dragenter`](/de/docs/Web/API/HTMLElement/dragenter_event)-Ereignis auf diesem Element ausgelöst, und das [`dragleave`](/de/docs/Web/API/HTMLElement/dragleave_event)-Ereignis wird auf dem vorherigen Element ausgelöst. Alle paar hundert Millisekunden wird ein [`dragover`](/de/docs/Web/API/HTMLElement/dragover_event)-Ereignis auf dem Element ausgelöst, in dem sich das Ziehen derzeit befindet, und das [`drag`](/de/docs/Web/API/HTMLElement/drag_event)-Ereignis auf dem Quellknoten.
- Das Ziehen gelangt in ein gültiges Ziel: Das Ziel annulliert sein `dragover`-Ereignis, um anzuzeigen, dass es sich um ein gültiges Ziel handelt. Eine Form von [Abwurffeedback](#abwurffeedback) weist den Benutzer auf den erwarteten Abwurfeffekt hin.
- Der Benutzer [führt das Abwerfen durch](#einen_abwurf_ausführen): Das [`drop`](/de/docs/Web/API/HTMLElement/drop_event)-Ereignis wird auf dem Ziel ausgelöst. Innerhalb dieses Ereignisses liest der Zielknoten die Ziehdaten.
- Der [Ziehvorgang endet](#abschluss_des_ziehvorgangs): Das [`dragend`](/de/docs/Web/API/HTMLElement/dragend_event)-Ereignis wird auf dem Quellknoten ausgelöst. Dieses Ereignis wird unabhängig davon ausgelöst, ob der Abwurf erfolgreich war oder nicht.

## Anfang eines Ziehvorgangs

Das Ziehen beginnt auf einem [ziehbaren Element](/de/docs/Web/API/HTML_Drag_and_Drop_API#draggable_items), das eine Auswahl, ein ziehbares Element (einschließlich Links, Bilder und jedes Element mit `draggable="true"`), eine Datei aus dem Datei-Explorer des Betriebssystems usw. sein kann. Zuerst wird das [`dragstart`](/de/docs/Web/API/HTMLElement/dragstart_event)-Ereignis auf dem _Quellknoten_ ausgelöst, der das ziehbare Element oder bei Auswahlen der Textknoten ist, auf dem das Ziehen begonnen hat. Wenn dieses Ereignis abgebrochen wird, wird der Ziehvorgang abgebrochen. Ansonsten wird das [`pointercancel`](/de/docs/Web/API/Element/pointercancel_event)-Ereignis auch auf dem Quellknoten ausgelöst.

Das `dragstart`-Ereignis ist der einzige Zeitpunkt, an dem Sie das [`dataTransfer`](/de/docs/Web/API/DragEvent/dataTransfer) ändern können. Für ein benutzerdefiniertes ziehbares Element möchten Sie fast immer die Ziehdaten ändern, was im [Ändern des Ziehdaten-Speichers](/de/docs/Web/API/HTML_Drag_and_Drop_API/Drag_data_store#modifying_the_drag_data_store) im Detail behandelt wird. Es gibt zwei weitere Dinge, die Sie ändern können: das [Feedback-Bild](#das_feedback-bild_des_ziehvorgangs_einstellen) und die [erlaubten Abwurfeffekte](#abwurfeffekte).

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

Sie könnten auch einem höheren Vorfahren zuhören, da Ziehereignisse wie die meisten anderen Ereignisse aufsteigen. Aus diesem Grund ist es üblich, auch das Ziel des Ereignisses zu überprüfen, damit das Ziehen einer Auswahl innerhalb dieses Elements nicht `setData` auslöst (obwohl das Auswählen von Text innerhalb des Elements schwer ist, ist es nicht unmöglich):

```js
draggableElement.addEventListener("dragstart", (event) => {
  if (event.target === draggableElement) {
    event.dataTransfer.setData("text/plain", "This text may be dragged");
  }
});
```

### Das Feedback-Bild des Ziehvorgangs einstellen

Wenn ein Ziehvorgang stattfindet, wird ein durchscheinendes Bild aus dem Quellknoten erstellt und folgt dem Zeiger des Benutzers während des Ziehvorgangs. Dieses Bild wird automatisch erstellt, sodass Sie es nicht selbst erstellen müssen. Sie können jedoch [`setDragImage()`](/de/docs/Web/API/DataTransfer/setDragImage) verwenden, um ein benutzerdefiniertes Feedback-Bild zu spezifizieren.

```js
draggableElement.addEventListener("dragstart", (event) => {
  event.dataTransfer.setDragImage(image, xOffset, yOffset);
});
```

Drei Argumente sind notwendig. Das erste ist ein Verweis auf ein Bild. Dieser Verweis wird typischerweise auf ein `<img>`-Element verweisen, er kann aber auch auf ein `<canvas>` oder ein anderes Element verweisen. Das Feedback-Bild wird aus dem erstellt, was das Bild auf dem Bildschirm zeigt, obwohl für Bilder, diese in ihrer Originalgröße gezeichnet werden. Die zweiten und dritten Argumente der [`setDragImage()`](/de/docs/Web/API/DataTransfer/setDragImage)-Methode sind die Versätze, wo das Bild relativ zum Mauszeiger angezeigt werden soll.

Sie können auch Bilder und Canvases verwenden, die sich nicht in einem Dokument befinden. Diese Technik ist nützlich, wenn Sie benutzerdefinierte Ziehbilder mit dem Canvas-Element zeichnen, wie im folgenden Beispiel:

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

In diesem Beispiel machen wir ein Canvas zu dem Ziehbild. Da das Canvas 50×50 Pixel groß ist, verwenden wir Versätze von der Hälfte davon (`25`), damit das Bild zentriert auf dem Mauszeiger erscheint.

## Über Elemente ziehen und Ziele festlegen

Während des gesamten Ziehvorgangs werden alle Geräteeingabeereignisse (wie Maus oder Tastatur) unterdrückt. Die gezogenen Daten können über verschiedene Elemente im Dokument oder sogar über Elemente in anderen Dokumenten bewegt werden. Jedes Mal, wenn ein neues Element betreten wird, wird ein [`dragenter`](/de/docs/Web/API/HTMLElement/dragenter_event)-Ereignis auf diesem Element ausgelöst und ein [`dragleave`](/de/docs/Web/API/HTMLElement/dragleave_event)-Ereignis auf dem vorherigen Element.

> [!NOTE]
> `dragleave` wird immer _nach_ `dragenter` ausgelöst, sodass konzeptionell, zwischen diesen beiden Ereignissen das Ziel ein neues Element betreten hat, aber das vorherige noch nicht verlassen hat.

Alle paar hundert Millisekunden werden zwei Ereignisse ausgelöst: Ein [`drag`](/de/docs/Web/API/HTMLElement/drag_event)-Ereignis auf dem Quellknoten und ein [`dragover`](/de/docs/Web/API/HTMLElement/dragover_event)-Ereignis auf dem Element, in das das Ziehen derzeit hineinreicht. Die meisten Bereiche einer Webseite oder Anwendung sind standardmäßig keine gültigen Stellen, um Daten abzulegen, sodass Elemente standardmäßig jedes Ablegen ignorieren, das darauf stattgefunden hat. Das Element kann sich selbst als gültigen Zielort wählen, indem es das `dragover`-Ereignis annuliert. Wenn das Element ein bearbeitbares Textfeld ist, wie ein {{HTMLElement("textarea")}} oder ein [`<input type="text">`](/de/docs/Web/HTML/Reference/Elements/input/text), und der Datenspeicher einen `text/plain`-Eintrag enthält, dann ist das Element standardmäßig ohne Annullierung von `dragover` ein gültiges Ziel.

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
> Die Spezifikation verlangt, dass auch das `dragenter`-Ereignis für ein Ziel annulliert wird, andernfalls werden die `dragover`- oder `dragleave`-Ereignisse nicht auf diesem Element ausgelöst; in der Praxis setzt kein Browser dies um, und das "aktuelle Element" ändert sich jedes Mal, wenn ein neues Element betreten wird.

> [!NOTE]
> Die Spezifikation verlangt, dass das Annullieren des `drag`-Ereignisses das Ziehen [abbricht](#ein_fehlgeschlagener_abwurf); in der Praxis setzt kein Browser dies um. Siehe das folgende Beispiel:
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

Normalerweise möchten Sie nur, dass das Ziel Abwürfe in bestimmten Situationen akzeptiert (zum Beispiel nur, wenn ein Link gezogen wird). Um dies zu tun, überprüfen Sie eine Bedingung und annullieren das Ereignis nur, wenn die Bedingung erfüllt ist. Zum Beispiel können Sie überprüfen, ob die gezogenen Daten Links enthalten:

```js
dropElement.addEventListener("dragover", (event) => {
  const isLink = event.dataTransfer.types.includes("text/uri-list");
  if (isLink) {
    event.preventDefault();
  }
});
```

In diesem Beispiel verwenden wir die `includes`-Methode, um zu überprüfen, ob der Typ [`text/uri-list`](/de/docs/Web/API/HTML_Drag_and_Drop_API/Drag_data_store#dragging_links) in der Liste der Typen vorhanden ist. Sollte dies der Fall sein, annullieren wir das Ereignis, damit ein Fall erlaubt wird. Enthalten die Ziehdaten keinen Link, wird das Ereignis nicht annulliert und ein Abwurf kann an dieser Stelle nicht erfolgen.

## Abwurffeedback

Jetzt zieht der Benutzer ein gültiges Ziel an. Es gibt verschiedene Möglichkeiten, dem Benutzer anzuzeigen, dass ein Abwurf an dieser Stelle erlaubt ist und was passieren könnte, wenn der Abwurf passiert. Normalerweise wird der Mauszeiger je nach Wert der [`dropEffect`](/de/docs/Web/API/DataTransfer/dropEffect)-Eigenschaft aktualisiert. Obwohl das genaue Erscheinungsbild von der Plattform des Benutzers abhängt, wird normalerweise ein Pluszeichen-Symbol für eine `copy` angezeigt, und ein "hier nicht abwerfen"-Symbol wird angezeigt, wenn ein Abwurf nicht erlaubt ist. Dieses Feedback des Mauszeigers ist in vielen Fällen ausreichend.

### Abwurfeffekte

Beim Abwurf können mehrere Operationen durchgeführt werden:

- `copy`
  - : Die Daten werden nach dem Abwurf gleichzeitig an der Quell- und Zielstelle vorhanden sein.
- `move`
  - : Die Daten werden nur noch an der Zielstelle vorhanden sein und von der Quellstelle entfernt.
- `link`
  - : Eine Form der Verknüpfung wird zwischen der Quell- und der Zielstelle erstellt; es gibt nur eine Instanz der Daten an der Quellstelle.
- `none`
  - : Nichts passiert; der Abwurf ist fehlgeschlagen.

Mit den [`dragenter`](/de/docs/Web/API/HTMLElement/dragenter_event)- und [`dragover`](/de/docs/Web/API/HTMLElement/dragover_event)-Ereignissen wird die [`dropEffect`](/de/docs/Web/API/DataTransfer/dropEffect)-Eigenschaft auf den Effekt initialisiert, den der Benutzer anfordert. Der Benutzer kann den gewünschten Effekt durch Drücken von Modifier-Tasten ändern. Obwohl die genaue Belegung je nach Plattform variiert, würden typischerweise die <kbd>Shift</kbd> und <kbd>Control</kbd>-Tasten verwendet, um zwischen Kopieren, Verschieben und Verknüpfen zu wechseln. Der Mauszeiger wird sich ändern, um anzuzeigen, welche Operation gewünscht ist. Beispielsweise könnte für eine `copy` der Cursor mit einem Pluszeichen angezeigt werden.

Sie können die [`dropEffect`](/de/docs/Web/API/DataTransfer/dropEffect)-Eigenschaft während der [`dragenter`](/de/docs/Web/API/HTMLElement/dragenter_event)- oder [`dragover`](/de/docs/Web/API/HTMLElement/dragover_event)-Ereignisse ändern, wenn ein bestimmtes Ziel nur bestimmte Operationen unterstützt. Sie können die [`dropEffect`](/de/docs/Web/API/DataTransfer/dropEffect)-Eigenschaft ändern, um den Benutzereffekt zu überschreiben und eine bestimmte Abwurfsoperation durchzusetzen.

```js
target.addEventListener("dragover", (event) => {
  event.dataTransfer.dropEffect = "move";
});
```

In diesem Beispiel wird der Move-Effekt ausgeführt.

Sie können den Wert `none` verwenden, um anzuzeigen, dass an dieser Stelle kein Abwurf möglich ist. Normalerweise sollten Sie dies tun, wenn das Element nur vorübergehend keine Abwürfe akzeptiert; wenn es nicht als Ziel vorgesehen ist, sollten Sie das Ereignis einfach nicht annullieren.

Beachten Sie, dass das Setzen von `dropEffect` nur den gewünschten Effekt _zu diesem speziellen Zeitpunkt_ angibt; ein späterer `dragover`-Durchlauf kann es ändern. Um die Wahl beizubehalten, müssen Sie sie in jedem `dragover`-Ereignis setzen. Dieser Effekt ist auch nur _informativer_ und welche Auswirkungen letztendlich umgesetzt werden, hängt sowohl von den Quell- als auch den Zielknoten ab (zum Beispiel, wenn der Quellknoten nicht geändert werden kann, dann auch wenn ein "move"-Effekt angefordert wurde, ist es möglicherweise nicht möglich).

Sowohl für Benutzeraktionen als auch für das programmgesteuerte Setzen von `dropEffect` stehen standardmäßig alle drei Abwurfeffekte zur Verfügung. Das ziehbare Element kann sich so einschränken, dass es nur bestimmte Effekte erlaubt, indem es die [`effectAllowed`](/de/docs/Web/API/DataTransfer/effectAllowed)-Eigenschaft innerhalb eines [`dragstart`](/de/docs/Web/API/HTMLElement/dragstart_event)-Ereignis-Listeners setzt.

```js
draggableElement.addEventListener("dragstart", (event) => {
  event.dataTransfer.effectAllowed = "copyLink";
});
```

In diesem Beispiel ist nur eine Kopier- oder Verknüpfungsoperation erlaubt, aber eine Verschiebeoperation kann weder über ein Skript noch über Benutzeraktionen ausgewählt werden.

Die Werte von `effectAllowed` sind Kombinationen von `dropEffect`:

| Wert            | Beschreibung                                                                                                                                                  |
| --------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `none`          | Keine Operation ist erlaubt                                                                                                                                   |
| `copy`          | Nur `copy`                                                                                                                                                    |
| `move`          | Nur `move`                                                                                                                                                    |
| `link`          | Nur `link`                                                                                                                                                    |
| `copyMove`      | Nur `copy` oder `move`                                                                                                                                        |
| `copyLink`      | Nur `copy` oder `link`                                                                                                                                        |
| `linkMove`      | Nur `link` oder `move`                                                                                                                                        |
| `all`           | `copy`, `move` oder `link`                                                                                                                                    |
| `uninitialized` | Der Standardwert, wenn der Effekt nicht gesetzt wurde; im Allgemeinen gleichbedeutend mit `all`, außer dass der Standard-`dropEffect` nicht immer `copy` ist. |

Standardmäßig wird `dropEffect` basierend auf `effectAllowed` initialisiert, in der Reihenfolge von `copy`, `link`, `move`, wobei der erste erlaubte Effekt ausgewählt wird. Die nicht ausgewählten, aber erlaubten Effekte können ebenfalls standardmäßig ausgewählt werden, wenn es angebracht ist; zum Beispiel bewirkt das Halten der <kbd>Alt</kbd>-Taste unter Windows, dass `link` mit Priorität verwendet wird. Wenn `effectAllowed` `uninitialized` ist und das gezogene Element ein `<a>`-Link ist, ist der Standard-`dropEffect` `link`; wenn `effectAllowed` `uninitialized` ist und das gezogene Element eine Auswahl aus einem bearbeitbaren Textfeld ist, ist der Standard-`dropEffect` `move`.

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

### Benutzerdefiniertes Abwurffeedback

Für komplexere visuelle Effekte können Sie während des [`dragenter`](/de/docs/Web/API/HTMLElement/dragenter_event)-Ereignisses andere Operationen durchführen, indem Sie beispielsweise ein Element an der Stelle einfügen, an der der Abwurf stattfinden wird. Dies könnte ein Einfügemarker oder ein Element sein, das das gezogene Element in seiner neuen Position darstellt. Dazu könnten Sie ein [`<img>`](/de/docs/Web/HTML/Reference/Elements/img)-Element erstellen und es während des [`dragenter`](/de/docs/Web/API/HTMLElement/dragenter_event)-Ereignisses in das Dokument einfügen.

Das [`dragover`](/de/docs/Web/API/HTMLElement/dragover_event)-Ereignis wird auf dem Element ausgelöst, auf das der Mauszeiger zeigt. Natürlich müssen Sie möglicherweise den Einfügemarker auch innerhalb des [`dragover`](/de/docs/Web/API/HTMLElement/dragover_event)-Ereignis-Handlers bewegen. Sie können die [`clientX`](/de/docs/Web/API/MouseEvent/clientX)- und [`clientY`](/de/docs/Web/API/MouseEvent/clientY)-Eigenschaften des Ereignisses wie bei anderen Mausereignissen verwenden, um den Standort des Mauszeigers zu bestimmen.

Schließlich wird das [`dragleave`](/de/docs/Web/API/HTMLElement/dragleave_event)-Ereignis auf einem Element ausgelöst, wenn der Ziehvorgang das Element verlässt. Dies ist der Zeitpunkt, an dem Sie eventuell eingefügte Marker oder Hervorhebungen entfernen sollten. Sie müssen dieses Ereignis nicht annullieren. Das [`dragleave`](/de/docs/Web/API/HTMLElement/dragleave_event)-Ereignis wird immer ausgelöst, selbst wenn der Ziehvorgang abgebrochen wird, sodass Sie sicherstellen können, dass jede Einfügemarkerbereinigung während dieses Ereignisses durchgeführt werden kann.

Für ein praktisches Beispiel zur Verwendung dieser Ereignisse siehe unser [Kanban-Board-Beispiel](/de/docs/Web/API/HTML_Drag_and_Drop_API/Kanban_board#inserting_at_a_particular_location).

## Einen Abwurf ausführen

Wenn der Benutzer die Maus loslässt, endet der Drag-and-Drop-Vorgang.

Damit der Abwurf _potenziell erfolgreich_ ist, muss der Abwurf über einem gültigen [Abwurfziel](#über_elemente_ziehen_und_ziele_festlegen) stattfinden, und die `dropEffect` darf zum Zeitpunkt des Mausloslassens nicht `none` sein. Andernfalls wird der Abwurfvorgang als [fehlgeschlagen](#ein_fehlgeschlagener_abwurf) angesehen.

Wenn der Abwurf potenziell erfolgreich ist, wird ein [`drop`](/de/docs/Web/API/HTMLElement/drop_event)-Ereignis auf dem Ziel ausgelöst. Sie müssen dieses Ereignis mit `preventDefault()` annulieren, damit der Abwurf tatsächlich als erfolgreich angesehen wird. Andernfalls wird der Abwurf auch als erfolgreich angesehen, wenn der Abwurf Text (die Daten enthalten einen `text/plain`-Eintrag) in ein bearbeitbares Textfeld einfällt. In diesem Fall wird der Text ins Feld eingefügt (entweder an der Cursorposition oder am Ende, je nach Plattformkonventionen) und, falls die `dropEffect` `move` ist und die Quelle eine Auswahl innerhalb eines bearbeitbaren Bereichs ist, wird die Quelle entfernt. Andernfalls werden bei allen anderen Ziehdaten und Abwurfzielen der Abwurf als fehlgeschlagen angesehen.

Während des [`drop`](/de/docs/Web/API/HTMLElement/drop_event)-Ereignisses sollten Sie die gewünschten Daten aus dem Ziehdaten-Speicher mit [`DataTransfer.getData()`](/de/docs/Web/API/DataTransfer/getData) abrufen und an der Abwurfstelle einfügen. Sie können die [`dropEffect`](/de/docs/Web/API/DataTransfer/dropEffect)-Eigenschaft verwenden, um zu bestimmen, welche Ziehoperation gewünscht war. Das `drop`-Ereignis ist die einzige Zeit, in der Sie den Ziehdaten-Speicher lesen können, abgesehen von `dragstart`.

```js
target.addEventListener("drop", (event) => {
  event.preventDefault();
  const data = event.dataTransfer.getData("text/plain");
  target.textContent = data;
});
```

Im hier gezeigten Beispiel, nachdem die Daten abgerufen wurden, fügen wir die Zeichenkette als Textinhalt des Ziels ein. Dies hat den Effekt, dass der gezogene Text dort eingefügt wird, wo er abgeworfen wurde, vorausgesetzt, das Abwurfziel ist ein Textbereichs wie ein `p` oder `div`-Element.

Die Methode `getData()` gibt einen leeren String zurück, wenn der Datenspeicher keine Daten des angegebenen Typs enthält. Wenn Sie [bedingte Abwurfziele](#bedingte_ziele) implementiert haben, sollte diese Situation nicht auftreten, da das Abwurfziel Abwürfe nur akzeptieren sollte, wenn die gewünschten Daten vorhanden sind.

Sie können auch andere Datentypen abrufen. Wenn die Daten ein Link sind, sollten sie den Typ [`text/uri-list`](/de/docs/Web/API/HTML_Drag_and_Drop_API/Drag_data_store#dragging_links) aufweisen. Sie könnten dann einen Link in den Inhalt einfügen.

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

Weitere Informationen darüber, wie man Ziehdaten liest, finden Sie unter [Arbeiten mit dem Ziehdaten-Speicher](/de/docs/Web/API/HTML_Drag_and_Drop_API/Drag_data_store#reading_the_drag_data_store).

Es liegt auch in der Verantwortung der Quell- und Zielelemente, zusammenzuarbeiten, um die `dropEffect` zu implementieren — die Quelle hört auf das `dragend`-Ereignis und das Ziel hört auf das `drop`-Ereignis. Zum Beispiel, wenn die `dropEffect` `move` ist, dann müssen eines dieser Elemente das gezogene Element von seinem alten Ort entfernen (normalerweise das Quell-Element selbst, weil das Ziel-Element nicht unbedingt weiß oder Kontrolle über die Quelle hat).

<!-- TODO: Standardaktion beim Ablegen von Dateien/Links in Browser -->

## Ein fehlgeschlagener Abwurf

Der Drag-and-Drop-Vorgang wird als fehlgeschlagen angesehen, wenn eine der folgenden Bedingungen zutrifft:

1. Der Benutzer hat die <kbd>Escape</kbd>-Taste gedrückt.
2. Der Abwurf fand außerhalb eines gültigen [Abwurfziels](#über_elemente_ziehen_und_ziele_festlegen) statt.
3. Der Abwurfeffekt war `none` zum Zeitpunkt des Mausloslassens.
4. Das `drop`-Ereignis wurde nicht annulliert und der Abwurf war nicht das Ablegen von Text (der `text/plain`-Daten enthält) in ein bearbeitbares Textfeld (siehe [einen Abwurf ausführen](#einen_abwurf_ausführen)).

Für die Fälle 1 und 3, wenn die Unterbrechung passiert, während über einem gültigen Abwurfziel geschwebt wird, erhält das Abwurfziel ein [`dragleave`](/de/docs/Web/API/HTMLElement/dragleave_event)-Ereignis, als ob der Abwurf nicht mehr darüber passiert, sodass es etwaiges [Abwurffeedback](#benutzerdefiniertes_abwurffeedback) bereinigen kann. In allen Fällen wird das `dropEffect` für nachfolgende Ereignisse auf `none` gesetzt.

Anschließend wird ein [`dragend`](/de/docs/Web/API/HTMLElement/dragend_event)-Ereignis auf dem Quellknoten ausgelöst. Der Browser kann eine Animation des gezogenen Auswahlbereichs anzeigen, der zur Quelle des Drag-and-Drop-Vorgangs zurückkehrt.

## Abschluss des Ziehvorgangs

Wenn das Ziehen abgeschlossen ist, wird ein [`dragend`](/de/docs/Web/API/HTMLElement/dragend_event)-Ereignis auf der Quelle des Ziehvorgangs ausgelöst (das gleiche Element, das das [`dragstart`](/de/docs/Web/API/HTMLElement/dragstart_event)-Ereignis erhielt). Dieses Ereignis wird unabhängig davon ausgelöst, ob das Ziehen erfolgreich war.

Wenn die [`dropEffect`](/de/docs/Web/API/DataTransfer/dropEffect)-Eigenschaft den Wert `none` während eines [`dragend`](/de/docs/Web/API/HTMLElement/dragend_event) hat, dann wurde der Ziehvorgang abgebrochen. Andernfalls gibt der Effekt an, welche Operation durchgeführt wurde. Die Quelle kann diese Information nach einem `move`-Vorgang verwenden, um das gezogene Element vom alten Ort zu entfernen.

Ein Abwurf kann im selben Fenster oder über einer anderen Anwendung erfolgen. Das [`dragend`](/de/docs/Web/API/HTMLElement/dragend_event)-Ereignis wird in jedem Fall ausgelöst. Die [`screenX`](/de/docs/Web/API/MouseEvent/screenX)- und [`screenY`](/de/docs/Web/API/MouseEvent/screenY)-Eigenschaften des Ereignisses werden auf die Bildschirmkoordinaten gesetzt, an denen der Abwurf stattfand.

Nachdem das [`dragend`](/de/docs/Web/API/HTMLElement/dragend_event)-Ereignis seine Ausbreitung beendet hat, ist der Drag-and-Drop-Vorgang abgeschlossen.

## Siehe auch

- [HTML Drag and Drop API (Übersicht)](/de/docs/Web/API/HTML_Drag_and_Drop_API)
- [Arbeiten mit dem Ziehdaten-Speicher](/de/docs/Web/API/HTML_Drag_and_Drop_API/Drag_data_store)
