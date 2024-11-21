---
title: Drag-Operationen
slug: Web/API/HTML_Drag_and_Drop_API/Drag_operations
l10n:
  sourceCommit: 93b34fcdb9cf91ff44f5dfe7f4dcd13e961962da
---

{{DefaultAPISidebar("HTML Drag and Drop API")}}

Im Folgenden werden die Schritte beschrieben, die während einer Drag-and-Drop-Operation auftreten.

Die in diesem Dokument beschriebenen Drag-Operationen verwenden das [`DataTransfer`](/de/docs/Web/API/DataTransfer)-Interface. Dieses Dokument verwendet _nicht_ das [`DataTransferItem`](/de/docs/Web/API/DataTransferItem)-Interface oder das [`DataTransferItemList`](/de/docs/Web/API/DataTransferItemList)-Interface.

## Das `draggable` Attribut

Es gibt bestimmte Fälle, in denen ein Standard-Drag-Verhalten auf einer Webseite angewendet wird. Dazu gehören Textmarkierungen, Bilder und Links. Wenn ein Bild oder Link gezogen wird, wird die URL des Bildes oder Links als Drag-Daten festgelegt, und ein Drag beginnt. Bei anderen Elementen müssen sie Teil einer Auswahl sein, damit ein standardmäßiges Drag ausgeführt werden kann. Um dies in Aktion zu sehen, wählen Sie einen Bereich einer Webseite aus und klicken Sie dann mit der Maus darauf, halten Sie sie gedrückt und ziehen Sie die Auswahl. Eine betriebssystemspezifische Darstellung der Auswahl wird angezeigt und dem Mauszeiger folgen, wenn das Ziehen erfolgt. Dieses Verhalten tritt jedoch nur beim Standard-Drag auf, wenn keine Listener die zu ziehenden Daten anpassen.

In HTML sind abgesehen vom Standardverhalten für Bilder, Links und Auswahlen keine anderen Elemente standardmäßig draggable.

Um andere HTML-Elemente draggable zu machen, müssen drei Dinge getan werden:

1. Setzen Sie das Attribut [`draggable`](/de/docs/Web/HTML/Global_attributes/draggable) auf `"true"` für das Element, das Sie draggable machen möchten.
2. Fügen Sie einen Listener für das [`dragstart`](/de/docs/Web/API/HTMLElement/dragstart_event) Ereignis hinzu.
3. [Setzen Sie die Drag-Daten](/de/docs/Web/API/DataTransfer/setData) im obigen Listener.

Hier ist ein Beispiel, das es ermöglicht, einen Abschnitt des Inhalts zu ziehen.

```html
<p draggable="true">This text <strong>may</strong> be dragged.</p>
```

```js
const draggableElement = document.querySelector('p[draggable="true"]');

draggableElement.addEventListener("dragstart", (event) =>
  event.dataTransfer.setData("text/plain", "This text may be dragged"),
);
```

Das Attribut [`draggable`](/de/docs/Web/HTML/Global_attributes/draggable) ist auf `"true"` gesetzt, sodass dieses Element draggable wird. Wäre dieses Attribut weggelassen oder auf `"false"` gesetzt worden, würde das Element nicht gezogen werden, und stattdessen würde der Text ausgewählt.

Das [`draggable`](/de/docs/Web/HTML/Global_attributes/draggable) Attribut kann auf jedem Element verwendet werden, einschließlich Bilder und Links. Bei diesen beiden ist der Standardwert jedoch `true`, sodass Sie das Attribut [`draggable`](/de/docs/Web/HTML/Global_attributes/draggable) nur mit einem Wert `false` verwenden würden, um das Ziehen dieser Elemente zu deaktivieren.

> [!NOTE]
> Wenn ein Element draggable gemacht wird, können Text oder andere darin enthaltene Elemente nicht mehr auf die übliche Weise ausgewählt werden, indem mit der Maus geklickt und gezogen wird. Stattdessen muss der Benutzer die <kbd>Alt</kbd>-Taste gedrückt halten, um Text mit der Maus auszuwählen, oder die Tastatur verwenden.

## Eine Drag-Operation starten

In diesem Beispiel fügen wir einen Listener für das [`dragstart`](/de/docs/Web/API/HTMLElement/dragstart_event) Ereignis mithilfe der Methode `addEventListener()` hinzu.

```html
<p draggable="true">This text <strong>may</strong> be dragged.</p>
```

```js
const draggableElement = document.querySelector('p[draggable="true"]');
draggableElement.addEventListener("dragstart", (event) =>
  event.dataTransfer.setData("text/plain", "This text may be dragged"),
);
```

Wenn ein Benutzer beginnt zu ziehen, wird das [`dragstart`](/de/docs/Web/API/HTMLElement/dragstart_event) Ereignis ausgelöst.

In diesem Beispiel wird der [`dragstart`](/de/docs/Web/API/HTMLElement/dragstart_event) Listener dem draggable Element selbst hinzugefügt. Sie könnten jedoch auch einem übergeordneten Element lauschen, da Drag-Ereignisse wie die meisten anderen Ereignisse nach oben blubbern.

Innerhalb des [`dragstart`](/de/docs/Web/API/HTMLElement/dragstart_event) Ereignisses können Sie die **Drag-Daten**, das **Feedback-Bild** und die **Drag-Effekte** angeben, die alle unten beschrieben sind. Jedoch sind nur die **Drag-Daten** erforderlich. (Das Standardbild und die Drag-Effekte sind in den meisten Situationen ausreichend.)

## Drag-Daten

Alle [`DragEvent`](/de/docs/Web/API/DragEvent) Objekte haben eine Eigenschaft namens [`dataTransfer`](/de/docs/Web/API/DragEvent/dataTransfer), die die Drag-Daten enthält (`dataTransfer` ist ein [`DataTransfer`](/de/docs/Web/API/DataTransfer) Objekt).

Wenn ein Drag auftritt, müssen Daten mit dem Drag verknüpft werden, die identifizieren, _was_ gezogen wird. Zum Beispiel, wenn der ausgewählte Text innerhalb eines Textfeldes gezogen wird, sind die mit dem _Drag-Datenelement_ verknüpften Daten der Text selbst. Ähnlich, wenn ein Link auf einer Webseite gezogen wird, ist das Drag-Datenelement die URL des Links.

Das [`DataTransfer`](/de/docs/Web/API/DataTransfer) Objekt enthält zwei Informationen, den **Typ** (oder Format) der Daten und den **Wert** der Daten. Das Format ist ein Typ-String (wie [`text/plain`](/de/docs/Web/API/HTML_Drag_and_Drop_API/Recommended_drag_types#dragging_text) für Textdaten), und der Wert ist ein Text-String. Wenn das Ziehen beginnt, fügen Sie Daten hinzu, indem Sie einen Typ und die Daten bereitstellen. Während des Ziehens können Sie in einem Ereignis-Listener für die [`dragenter`](/de/docs/Web/API/HTMLElement/dragenter_event) und [`dragover`](/de/docs/Web/API/HTMLElement/dragover_event) Ereignisse die Datentypen der gezogenen Daten verwenden, um zu prüfen, ob ein Drop erlaubt ist. Beispielsweise würde ein Drop-Ziel, das Links akzeptiert, auf den Typ [`text/uri-list`](/de/docs/Web/API/HTML_Drag_and_Drop_API/Recommended_drag_types#dragging_links) prüfen. Während eines Drop-Ereignisses würde ein Listener die gezogenen Daten abrufen und an der Drop-Position einfügen.

Die [`types`](/de/docs/Web/API/DataTransfer/types) Eigenschaft von [`DataTransfer`](/de/docs/Web/API/DataTransfer) gibt eine Liste von MIME-ähnlichen Strings zurück, wie [`text/plain`](/de/docs/Web/API/HTML_Drag_and_Drop_API/Recommended_drag_types#dragging_text) oder [`image/jpeg`](/de/docs/Web/API/HTML_Drag_and_Drop_API/Recommended_drag_types#dragging_images). Sie können auch eigene Typen erstellen. Die am häufigsten verwendeten Typen sind im Artikel [Empfohlene Drag-Typen](/de/docs/Web/API/HTML_Drag_and_Drop_API/Recommended_drag_types) aufgeführt.

Ein Drag kann Datenobjekte von verschiedenen Typen enthalten. Dies ermöglicht es, Daten in spezifischeren, häufig benutzerdefinierten Typen bereitzustellen, und bietet dennoch Fallback-Daten für Drop-Ziele, die spezifischere Typen nicht unterstützen. Normalerweise ist der am wenigsten spezifische Typ normaler Text mit dem Typ [`text/plain`](/de/docs/Web/API/HTML_Drag_and_Drop_API/Recommended_drag_types#dragging_text).

Um ein Drag-Datenelement im [`dataTransfer`](/de/docs/Web/API/DragEvent/dataTransfer) zu setzen, verwenden Sie die Methode [`setData()`](/de/docs/Web/API/DataTransfer/setData). Sie nimmt zwei Argumente: den Typ der Daten und den Datenwert. Zum Beispiel:

```js
event.dataTransfer.setData("text/plain", "Text to drag");
```

In diesem Fall ist der Datenwert "Text to drag" und hat das Format [`text/plain`](/de/docs/Web/API/HTML_Drag_and_Drop_API/Recommended_drag_types#dragging_text).

Sie können Daten in mehreren Formaten bereitstellen. Um dies zu tun, rufen Sie die Methode [`setData()`](/de/docs/Web/API/DataTransfer/setData) mehrmals mit verschiedenen Formaten auf. Sie sollten sie mit Formaten von am spezifischsten zu am wenigsten spezifischen aufrufen.

```js
const dt = event.dataTransfer;
dt.setData("application/x.bookmark", bookmarkString);
dt.setData("text/uri-list", "https://www.mozilla.org");
dt.setData("text/plain", "https://www.mozilla.org");
```

Hier werden Daten in drei verschiedenen Typen hinzugefügt. Der erste Typ, `application/x.bookmark`, ist ein benutzerdefinierter Typ. Andere Anwendungen unterstützen diesen Typ nicht, aber Sie können einen benutzerdefinierten Typ für Drags zwischen Bereichen derselben Webseite oder Anwendung verwenden.

Indem Sie auch Daten in anderen Typen angeben, können wir Drags zu anderen Anwendungen in weniger spezifischen Formen unterstützen. Der Typ `application/x.bookmark` kann Daten mit mehr Details zur Verwendung innerhalb der Anwendung bereitstellen, während die anderen Typen nur eine einzelne URL oder Textversion enthalten können.

Beachten Sie, dass in diesem Beispiel sowohl `text/uri-list` als auch `text/plain` dieselben Daten enthalten. Dies ist häufig der Fall, muss aber nicht so sein.

Wenn Sie versuchen, Daten mit demselben Format zweimal hinzuzufügen, ersetzen die neuen Daten die alten Daten, aber in derselben Position innerhalb der Typenliste wie die alten Daten.

Mithilfe der Methode [`clearData()`](/de/docs/Web/API/DataTransfer/clearData) können Sie die Daten löschen, indem Sie einen Argumenttyp für die zu entfernenden Daten angeben.

```js
event.dataTransfer.clearData("text/uri-list");
```

Das `type` Argument für die Methode [`clearData()`](/de/docs/Web/API/DataTransfer/clearData) ist optional. Wenn der `type` nicht angegeben ist, werden die mit allen Typen verknüpften Daten entfernt. Wenn der Drag keine Drag-Datenobjekte enthält oder alle Objekte anschließend gelöscht wurden, wird kein Drag ausgeführt.

## Das Drag-Feedback-Bild einstellen

Wenn ein Drag stattfindet, wird automatisch ein durchscheinendes Bild vom Drag-Ziel (dem Element, bei dem das [`dragstart`](/de/docs/Web/API/HTMLElement/dragstart_event) Ereignis ausgelöst wird) erstellt und folgt dem Zeiger des Benutzers während des Drags. Dieses Bild wird automatisch erstellt, sodass Sie es nicht selbst erstellen müssen. Sie können jedoch [`setDragImage()`](/de/docs/Web/API/DataTransfer/setDragImage) verwenden, um ein benutzerdefiniertes Drag-Feedback-Bild anzugeben.

```js
event.dataTransfer.setDragImage(image, xOffset, yOffset);
```

Es sind drei Argumente erforderlich. Das erste ist eine Referenz zu einem Bild. Diese Referenz wird typischerweise zu einem `<img>` Element sein, kann aber auch zu einem `<canvas>` oder einem anderen Element sein. Das Feedback-Bild wird aus dem erstellt, wie das Bild auf dem Bildschirm aussieht, obwohl Bilder in ihrer ursprünglichen Größe gezeichnet werden. Das zweite und dritte Argument für die Methode [`setDragImage()`](/de/docs/Web/API/DataTransfer/setDragImage) sind Offsets, bei denen das Bild relativ zum Mauszeiger erscheinen soll.

Es ist auch möglich, Bilder und Canvas zu verwenden, die sich nicht in einem Dokument befinden. Diese Technik ist nützlich, wenn Sie benutzerdefinierte Drag-Bilder mit dem Canvas-Element zeichnen, wie im folgenden Beispiel:

```js
function dragWithCustomImage(event) {
  const canvas = document.createElement("canvas");
  canvas.width = canvas.height = 50;

  const ctx = canvas.getContext("2d");
  ctx.lineWidth = 4;
  ctx.moveTo(0, 0);
  ctx.lineTo(50, 50);
  ctx.moveTo(0, 50);
  ctx.lineTo(50, 0);
  ctx.stroke();

  const dt = event.dataTransfer;
  dt.setData("text/plain", "Data to Drag");
  dt.setDragImage(canvas, 25, 25);
}
```

In diesem Beispiel machen wir ein Canvas zum Drag-Bild. Da das Canvas 50×50 Pixel groß ist, verwenden wir Offsets von der Hälfte davon (`25`), damit das Bild zentriert auf dem Mauszeiger erscheint.

## Drag-Effekte

Beim Ziehen gibt es mehrere Operationen, die durchgeführt werden können. Die `copy` Operation wird verwendet, um anzuzeigen, dass die gezogenen Daten von ihrem aktuellen Standort an den Zielort kopiert werden. Die `move` Operation wird verwendet, um anzuzeigen, dass die gezogenen Daten verschoben werden, und die `link` Operation wird verwendet, um anzuzeigen, dass irgendeine Form von Beziehung oder Verbindung zwischen den Quell- und Zielorten hergestellt wird.

Sie können festlegen, welche der drei Operationen für eine Drag-Quelle zulässig sind, indem Sie die Eigenschaft [`effectAllowed`](/de/docs/Web/API/DataTransfer/effectAllowed) innerhalb eines [`dragstart`](/de/docs/Web/API/HTMLElement/dragstart_event) Ereignis-Listeners setzen.

```js
event.dataTransfer.effectAllowed = "copy";
```

In diesem Beispiel ist nur ein **copy** zugelassen.

Sie können die Werte auf verschiedene Arten kombinieren:

- `none`
  - : keine Operation ist erlaubt
- `copy`
  - : nur `copy`
- `move`
  - : nur `move`
- `link`
  - : nur `link`
- `copyMove`
  - : nur `copy` oder `move`
- `copyLink`
  - : nur `copy` oder `link`
- `linkMove`
  - : nur `link` oder `move`
- `all`
  - : `copy`, `move`, oder `link`
- `uninitialized`
  - : der Standardwert, wenn der Effekt nicht gesetzt wurde, entspricht `all`

Beachten Sie, dass diese Werte genau so verwendet werden müssen, wie sie oben aufgeführt sind. Wenn Sie die Eigenschaft [`effectAllowed`](/de/docs/Web/API/DataTransfer/effectAllowed) auf `copyMove` setzen, wird eine Kopier- oder Verschiebeoperation erlaubt, das Herstellen einer Verbindung jedoch verhindert. Wenn Sie die Eigenschaft [`effectAllowed`](/de/docs/Web/API/DataTransfer/effectAllowed) nicht ändern, ist jede Operation erlaubt, genau wie beim Wert `all`. Daher müssen Sie diese Eigenschaft nur dann anpassen, wenn Sie bestimmte Typen ausschließen möchten.

Während einer Drag-Operation kann ein Listener für das [`dragenter`](/de/docs/Web/API/HTMLElement/dragenter_event) oder [`dragover`](/de/docs/Web/API/HTMLElement/dragover_event) Ereignis die Eigenschaft [`effectAllowed`](/de/docs/Web/API/DataTransfer/effectAllowed) prüfen, um herauszufinden, welche Operationen erlaubt sind. Eine verwandte Eigenschaft, [`dropEffect`](/de/docs/Web/API/DataTransfer/dropEffect), sollte innerhalb eines dieser Ereignisse gesetzt werden, um anzugeben, welche einzelne Operation durchgeführt werden soll. Gültige Werte für [`dropEffect`](/de/docs/Web/API/DataTransfer/dropEffect) sind `none`, `copy`, `move`, oder `link`. Die Kombinationswerte werden für diese Eigenschaft nicht verwendet.

Beim [`dragenter`](/de/docs/Web/API/HTMLElement/dragenter_event) und [`dragover`](/de/docs/Web/API/HTMLElement/dragover_event) Ereignis wird die Eigenschaft [`dropEffect`](/de/docs/Web/API/DataTransfer/dropEffect) auf den Effekt initialisiert, den der Benutzer wünscht. Der Benutzer kann den gewünschten Effekt durch Drücken von Modifikator-Tasten verändern. Obwohl die genauen Tasten je nach Plattform variieren, werden typischerweise die Tasten <kbd>Umschalt</kbd> und <kbd>Strg</kbd> verwendet, um zwischen Kopieren, Verschieben und Verknüpfen zu wechseln. Der Mauszeiger ändert sich, um anzuzeigen, welcher Vorgang gewünscht wird. Zum Beispiel könnte für eine `copy` ein Pluszeichen neben dem Cursor erscheinen.

Sie können die Eigenschaft [`dropEffect`](/de/docs/Web/API/DataTransfer/dropEffect) während der [`dragenter`](/de/docs/Web/API/HTMLElement/dragenter_event) oder [`dragover`](/de/docs/Web/API/HTMLElement/dragover_event) Ereignisse ändern, wenn beispielsweise ein bestimmtes Drop-Ziel nur bestimmte Operationen unterstützt. Sie können die Eigenschaft [`dropEffect`](/de/docs/Web/API/DataTransfer/dropEffect) ändern, um den Benutzereffekt zu überschreiben und eine bestimmte Drop-Operation zu erzwingen. Beachten Sie, dass dieser Effekt einer derjenigen sein muss, die innerhalb der Eigenschaft [`effectAllowed`](/de/docs/Web/API/DataTransfer/effectAllowed) aufgelistet sind. Andernfalls wird er auf einen alternativen Wert gesetzt, der erlaubt ist.

```js
event.dataTransfer.dropEffect = "copy";
```

In diesem Beispiel ist Kopieren der Effekt, der ausgeführt wird.

Sie können den Wert `none` verwenden, um anzugeben, dass an diesem Ort kein Drop erlaubt ist, obwohl es in diesem Fall besser ist, das Ereignis nicht abzubrechen.

Innerhalb der [`drop`](/de/docs/Web/API/HTMLElement/drop_event) und [`dragend`](/de/docs/Web/API/HTMLElement/dragend_event) Ereignisse können Sie die Eigenschaft [`dropEffect`](/de/docs/Web/API/DataTransfer/dropEffect) prüfen, um festzustellen, welcher Effekt letztendlich gewählt wurde. Wenn der gewählte Effekt `move` war, sollten die ursprünglichen Daten aus der Quelle des Drags innerhalb des [`dragend`](/de/docs/Web/API/HTMLElement/dragend_event) Ereignisses entfernt werden.

## Festlegen von Drop-Zielen

Ein Listener für die [`dragenter`](/de/docs/Web/API/HTMLElement/dragenter_event) und [`dragover`](/de/docs/Web/API/HTMLElement/dragover_event) Ereignisse wird verwendet, um gültige Drop-Ziele anzuzeigen, das heißt, Orte, an denen gezogene Elemente abgelegt werden können. Die meisten Bereiche einer Webseite oder Anwendung sind keine gültigen Orte, um Daten abzulegen. Daher ist die Standardbearbeitung dieser Ereignisse, einen Drop nicht zuzulassen.

Wenn Sie einen Drop zulassen möchten, müssen Sie das Standardverhalten durch Abbrechen sowohl der `dragenter` als auch der `dragover` Ereignisse verhindern. Sie können dies tun, indem Sie ihre [`preventDefault()`](/de/docs/Web/API/Event/preventDefault) Methoden aufrufen:

```html
<div id="drop-target">You can drag and then drop a draggable item here</div>
```

```js
const dropElement = document.getElementById("drop-target");

dropElement.addEventListener("dragenter", (event) => {
  event.preventDefault();
});

dropElement.addEventListener("dragover", (event) => {
  event.preventDefault();
});
```

Das Aufrufen der [`preventDefault()`](/de/docs/Web/API/Event/preventDefault) Methode während sowohl der [`dragenter`](/de/docs/Web/API/HTMLElement/dragenter_event) als auch der [`dragover`](/de/docs/Web/API/HTMLElement/dragover_event) Ereignisse zeigt an, dass an dieser Stelle ein Drop erlaubt ist. Sie möchten jedoch normalerweise die [`preventDefault()`](/de/docs/Web/API/Event/preventDefault) Methode nur unter bestimmten Umständen aufrufen (zum Beispiel nur, wenn ein Link gezogen wird).

Um dies zu tun, rufen Sie eine Funktion auf, die eine Bedingung prüft und das Ereignis nur dann abbricht, wenn die Bedingung erfüllt ist. Wenn die Bedingung nicht erfüllt ist, brechen Sie das Ereignis nicht ab, und es fällt kein Drop an dieser Stelle, wenn der Benutzer die Maustaste loslässt.

Es ist am häufigsten, einen Drop basierend auf dem Typ der Drag-Daten im data transfer zu akzeptieren oder abzulehnen — beispielsweise Bilder oder Links oder beides zuzulassen. Um dies zu tun, können Sie die [`types`](/de/docs/Web/API/DataTransfer/types) Eigenschaft des [`dataTransfer`](/de/docs/Web/API/DragEvent/dataTransfer) (Eigenschaft) des Ereignisses prüfen. Die [`types`](/de/docs/Web/API/DataTransfer/types) Eigenschaft gibt ein Array der String-Typen zurück, die beim Beginn des Drags hinzugefügt wurden, in der Reihenfolge von am bedeutendsten zu am wenigsten bedeutend.

```js
function doDragOver(event) {
  const isLink = event.dataTransfer.types.includes("text/uri-list");
  if (isLink) {
    event.preventDefault();
  }
}
```

In diesem Beispiel verwenden wir die `includes` Methode, um zu überprüfen, ob der Typ [`text/uri-list`](/de/docs/Web/API/HTML_Drag_and_Drop_API/Recommended_drag_types#dragging_links) in der Liste der Typen vorhanden ist. Wenn ja, brechen wir das Ereignis ab, damit ein Drop erlaubt sein kann. Wenn die Drag-Daten keinen Link enthalten, wird das Ereignis nicht abgebrochen, und ein Drop kann an dieser Stelle nicht erfolgen.

Möglicherweise möchten Sie auch gleichzeitig die [`effectAllowed`](/de/docs/Web/API/DataTransfer/effectAllowed) oder [`dropEffect`](/de/docs/Web/API/DataTransfer/dropEffect) Eigenschaft festlegen, wenn Sie spezifischer sein möchten, welche Art von Vorgang durchgeführt wird. Natürlich hat das Ändern einer dieser Eigenschaften keine Wirkung, wenn Sie das Ereignis nicht ebenfalls abbrechen.

## Drop-Rückmeldung

Es gibt mehrere Möglichkeiten, dem Benutzer anzuzeigen, dass an einem bestimmten Ort ein Drop erlaubt ist. Der Mauszeiger wird je nach Wert der [`dropEffect`](/de/docs/Web/API/DataTransfer/dropEffect) Eigenschaft nach Bedarf aktualisiert.

Obwohl das genaue Erscheinungsbild von der Plattform des Benutzers abhängt, wird typischerweise ein Pluszeichen-Icon für eine `copy` angezeigt, und ein "hier kann nicht abgelegt werden" Icon, wenn ein Drop nicht erlaubt ist. Dieses Mauszeiger-Feedback ist in vielen Fällen ausreichend.

Für komplexere visuelle Effekte können Sie während des [`dragenter`](/de/docs/Web/API/HTMLElement/dragenter_event) Ereignisses andere Operationen durchführen. Zum Beispiel durch Einfügen eines Elements an der Stelle, an der der Drop erfolgt. Dies könnte ein Einfügeindikator oder ein Element sein, das das gezogene Element an seinem neuen Ort darstellt. Dazu könnten Sie ein [`<img>`](/de/docs/Web/HTML/Element/img) Element erstellen und es während des [`dragenter`](/de/docs/Web/API/HTMLElement/dragenter_event) Ereignisses in das Dokument einfügen.

Das [`dragover`](/de/docs/Web/API/HTMLElement/dragover_event) Ereignis wird bei dem Element ausgelöst, auf das der Mauszeiger zeigt. Natürlich müssen Sie den Einfügemarker möglicherweise auch während eines [`dragover`](/de/docs/Web/API/HTMLElement/dragover_event) Ereignisses verschieben. Sie können die [`clientX`](/de/docs/Web/API/MouseEvent/clientX) und [`clientY`](/de/docs/Web/API/MouseEvent/clientY) Eigenschaften des Ereignisses wie bei anderen Mausereignissen verwenden, um die Position des Mauszeigers zu bestimmen.

Schließlich wird das [`dragleave`](/de/docs/Web/API/HTMLElement/dragleave_event) Ereignis bei einem Element ausgelöst, wenn der Drag das Element verlässt. Dies ist der Zeitpunkt, an dem Sie alle Einfügemarker oder Hervorhebungen entfernen sollten. Sie müssen dieses Ereignis nicht abbrechen. Das [`dragleave`](/de/docs/Web/API/HTMLElement/dragleave_event) Ereignis wird immer ausgelöst, auch wenn der Drag abgebrochen wird, sodass Sie jederzeit sicherstellen können, dass jede Einfügepunktbereinigung während dieses Ereignisses durchgeführt werden kann.

## Einen Drop durchführen

Wenn der Benutzer die Maus loslässt, endet die Drag-and-Drop-Operation.

Wenn die Maus über einem Element losgelassen wird, das ein gültiges Drop-Ziel ist, das heißt, eines, das die letzten [`dragenter`](/de/docs/Web/API/HTMLElement/dragenter_event) oder [`dragover`](/de/docs/Web/API/HTMLElement/dragover_event) Ereignisse abgeschlossen hat, dann wird der Drop erfolgreich sein, und ein [`drop`](/de/docs/Web/API/HTMLElement/drop_event) Ereignis wird am Ziel ausgelöst. Andernfalls wird die Drag-Operation abgebrochen, und kein [`drop`](/de/docs/Web/API/HTMLElement/drop_event) Ereignis wird ausgelöst.

Während des [`drop`](/de/docs/Web/API/HTMLElement/drop_event) Ereignisses sollten Sie die Daten abrufen, die fallen gelassen wurden, und sie an der Drop-Position einfügen. Sie können die [`dropEffect`](/de/docs/Web/API/DataTransfer/dropEffect) Eigenschaft verwenden, um festzustellen, welcher Ziehvorgang gewünscht war.

Wie bei allen Drag-bezogenen Ereignissen hält die [`dataTransfer`](/de/docs/Web/API/DataTransfer) Eigenschaft des Ereignisses die Daten, die gezogen werden. Die Methode [`getData()`](/de/docs/Web/API/DataTransfer/getData) kann verwendet werden, um die Daten erneut abzurufen.

```js
function onDrop(event) {
  const data = event.dataTransfer.getData("text/plain");
  event.target.textContent = data;
  event.preventDefault();
}
```

Die Methode [`getData()`](/de/docs/Web/API/DataTransfer/getData) nimmt ein Argument, den Datentyp, der abgerufen werden soll. Sie gibt den String-Wert zurück, der beim Aufruf von [`setData()`](/de/docs/Web/API/DataTransfer/setData) zu Beginn der Drag-Operation gesetzt wurde. Ein leerer String wird zurückgegeben, wenn Daten dieses Typs nicht existieren. (Natürlich würden Sie wahrscheinlich wissen, dass die richtigen Datentypen verfügbar waren, da dies zuvor während eines [`dragover`](/de/docs/Web/API/HTMLElement/dragover_event) Ereignisses geprüft wurde.)

In dem hier gezeigten Beispiel, wenn die Daten abgerufen wurden, fügen wir den String als den Textinhalt des Ziels ein. Dies hat den Effekt, dass der gezogene Text dort eingefügt wird, wo er fallen gelassen wurde, sofern das Drop-Ziel ein Bereich von Text wie ein `p` oder `div` Element ist.

Auf einer Webseite sollten Sie die Methode [`preventDefault()`](/de/docs/Web/API/Event/preventDefault) des Ereignisses aufrufen, wenn Sie den Drop akzeptiert haben, damit das Standardverhalten des Browsers nicht durch die abgesetzten Daten ebenfalls ausgelöst wird. Beispielsweise wird, wenn ein Link auf eine Webseite gezogen wird, Firefox den Link öffnen. Durch das Abbrechen des Ereignisses wird dieses Verhalten verhindert.

Sie können auch andere Datentypen abrufen. Wenn die Daten ein Link sind, sollte er den Typ [`text/uri-list`](/de/docs/Web/API/HTML_Drag_and_Drop_API/Recommended_drag_types#dragging_links) haben. Sie könnten dann einen Link in den Inhalt einfügen.

```js
function doDrop(event) {
  const lines = event.dataTransfer.getData("text/uri-list").split("\n");
  lines
    .filter((line) => !line.startsWith("#"))
    .forEach((line) => {
      const link = document.createElement("a");
      link.href = line;
      link.textContent = line;
      event.target.appendChild(link);
    });
  event.preventDefault();
}
```

Dieses Beispiel fügt einen Link aus den gezogenen Daten ein. Wie der Name schon andeutet, kann der Typ [`text/uri-list`](/de/docs/Web/API/HTML_Drag_and_Drop_API/Recommended_drag_types#dragging_links) tatsächlich eine Liste von URLs enthalten, jeweils in einer separaten Zeile. Der obige Code verwendet [`split`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/split), um den String in Zeilen zu teilen, dann iteriert er über die Liste der Zeilen und fügt jede als Link in das Dokument ein. (Beachten Sie auch, dass Links, die mit einem Nummernzeichen (`#`) beginnen, übersprungen werden, da dies Kommentare sind.)

Für einfache Fälle können Sie den speziellen Typ `URL` nur verwenden, um die erste gültige URL in der Liste abzurufen. Zum Beispiel:

```js
const link = event.dataTransfer.getData("URL");
```

Dadurch entfällt die Notwendigkeit, Kommentare zu überprüfen oder die Zeilen selbst zu durchlaufen. Es ist jedoch auf die erste URL in der Liste beschränkt.

Der Typ `URL` ist ein spezieller Typ. Er wird nur als Abkürzung verwendet und erscheint nicht in der Liste der in der Eigenschaft [`types`](/de/docs/Web/API/DataTransfer/types) angegebenen Typen.

Manchmal unterstützen Sie möglicherweise verschiedene Formate, und Sie möchten die Daten abrufen, die am spezifischsten sind und unterstützt werden. Im folgenden Beispiel werden drei Formate von einem Drop-Ziel unterstützt.

Das folgende Beispiel gibt die Daten zurück, die mit dem am besten unterstützten Format verbunden sind:

```js
function doDrop(event) {
  const supportedTypes = [
    "application/x-moz-file",
    "text/uri-list",
    "text/plain",
  ];
  const types = event.dataTransfer.types.filter((type) =>
    supportedTypes.includes(type),
  );
  if (types.length) {
    const data = event.dataTransfer.getData(types[0]);
    // Use this type of data…
  }
  event.preventDefault();
}
```

## Einen Drag beenden

Sobald das Ziehen abgeschlossen ist, wird ein [`dragend`](/de/docs/Web/API/HTMLElement/dragend_event) Ereignis an der Quelle des Ziehens (dem gleichen Element, das das [`dragstart`](/de/docs/Web/API/HTMLElement/dragstart_event) Ereignis erhalten hat) ausgelöst. Dieses Ereignis wird ausgelöst, unabhängig davon, ob das Ziehen erfolgreich war oder abgebrochen wurde. Sie können jedoch die Eigenschaft [`dropEffect`](/de/docs/Web/API/DataTransfer/dropEffect) verwenden, um festzustellen, welche Drop-Operation durchgeführt wurde.

Wenn die Eigenschaft [`dropEffect`](/de/docs/Web/API/DataTransfer/dropEffect) während eines [`dragend`](/de/docs/Web/API/HTMLElement/dragend_event) den Wert `none` hat, wurde das Ziehen abgebrochen. Andernfalls gibt der Effekt an, welche Operation durchgeführt wurde. Die Quelle kann diese Information nach einer `move` Operation verwenden, um das gezogene Objekt von der alten Position zu entfernen.

Ein Drop kann innerhalb desselben Fensters oder über eine andere Anwendung hinweg erfolgen. Das [`dragend`](/de/docs/Web/API/HTMLElement/dragend_event) Ereignis wird in jedem Fall immer ausgelöst. Die Eigenschaften [`screenX`](/de/docs/Web/API/MouseEvent/screenX) und [`screenY`](/de/docs/Web/API/MouseEvent/screenY) des Ereignisses werden auf die Bildschirmkoordinaten gesetzt, an denen der Drop erfolgte.

Nachdem das [`dragend`](/de/docs/Web/API/HTMLElement/dragend_event) Ereignis beendet ist, ist die Drag-and-Drop-Operation abgeschlossen.

## Siehe auch

- [HTML Drag and Drop API (Übersicht)](/de/docs/Web/API/HTML_Drag_and_Drop_API)
- [Empfohlene Drag-Typen](/de/docs/Web/API/HTML_Drag_and_Drop_API/Recommended_drag_types)
- [HTML Living Standard: Drag and Drop](https://html.spec.whatwg.org/multipage/interaction.html#dnd)
