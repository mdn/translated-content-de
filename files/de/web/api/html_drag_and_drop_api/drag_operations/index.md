---
title: Ziehvorgänge
slug: Web/API/HTML_Drag_and_Drop_API/Drag_operations
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{DefaultAPISidebar("HTML Drag and Drop API")}}

Im Folgenden werden die Schritte beschrieben, die während eines Drag-and-Drop-Vorgangs auftreten.

Die in diesem Dokument beschriebenen Ziehvorgänge verwenden die Schnittstelle [`DataTransfer`](/de/docs/Web/API/DataTransfer). Dieses Dokument verwendet _nicht_ die Schnittstelle [`DataTransferItem`](/de/docs/Web/API/DataTransferItem) noch die Schnittstelle [`DataTransferItemList`](/de/docs/Web/API/DataTransferItemList).

## Das draggable-Attribut

Auf einer Webseite gibt es bestimmte Fälle, in denen ein Standard-Ziehverhalten verwendet wird. Dazu gehören Textauswahlen, Bilder und Links. Wenn ein Bild oder Link gezogen wird, wird die URL des Bildes oder Links als Ziehdaten festgelegt, und ein Ziehen beginnt. Für andere Elemente müssen sie Teil einer Auswahl sein, damit ein Standard-Ziehen erfolgt. Um dies in Aktion zu sehen, wählen Sie einen Bereich einer Webseite aus und klicken und halten Sie dann die Maus gedrückt, während Sie die Auswahl ziehen. Eine betriebssystemspezifische Darstellung der Auswahl erscheint und folgt dem Mauszeiger, während das Ziehen erfolgt. Dieses Verhalten ist jedoch nur das Standard-Zieh-Verhalten, wenn keine Listener die zu ziehenden Daten anpassen.

In HTML sind abgesehen vom Standardverhalten für Bilder, Links und Auswahlen keine anderen Elemente standardmäßig ziehbar.

Um andere HTML-Elemente ziehbar zu machen, müssen drei Dinge getan werden:

1. Setzen Sie das [`draggable`](/de/docs/Web/HTML/Reference/Global_attributes/draggable)-Attribut auf `"true"` für das Element, das Sie ziehbar machen möchten.
2. Fügen Sie einen Listener für das [`dragstart`](/de/docs/Web/API/HTMLElement/dragstart_event)-Ereignis hinzu.
3. [Legen Sie die Ziehdaten fest](/de/docs/Web/API/DataTransfer/setData) in dem oben genannten Listener.

Hier ist ein Beispiel, das es erlaubt, einen Abschnitt von Inhalten zu ziehen.

```html
<p draggable="true">This text <strong>may</strong> be dragged.</p>
```

```js
const draggableElement = document.querySelector('p[draggable="true"]');

draggableElement.addEventListener("dragstart", (event) =>
  event.dataTransfer.setData("text/plain", "This text may be dragged"),
);
```

Das [`draggable`](/de/docs/Web/HTML/Reference/Global_attributes/draggable)-Attribut ist auf `"true"` gesetzt, sodass dieses Element ziehbar wird. Wenn dieses Attribut weggelassen oder auf `"false"` gesetzt würde, könnte das Element nicht gezogen werden, und stattdessen würde der Text ausgewählt werden.

Das [`draggable`](/de/docs/Web/HTML/Reference/Global_attributes/draggable)-Attribut kann auf jedes Element angewendet werden, einschließlich Bilder und Links. Für diese letzten beiden ist der Standardwert jedoch `true`, sodass Sie das [`draggable`](/de/docs/Web/HTML/Reference/Global_attributes/draggable)-Attribut nur mit einem Wert von `false` verwenden würden, um das Ziehen dieser Elemente zu deaktivieren.

> [!NOTE]
> Wenn ein Element ziehbar gemacht wird, können Text oder andere Elemente innerhalb des Elements nicht mehr auf die normale Weise durch Klicken und Ziehen mit der Maus ausgewählt werden. Stattdessen muss der Benutzer die <kbd>Alt</kbd>-Taste gedrückt halten, um Text mit der Maus auszuwählen, oder die Tastatur verwenden.

## Beginn eines Ziehvorgangs

In diesem Beispiel fügen wir einen Listener für das [`dragstart`](/de/docs/Web/API/HTMLElement/dragstart_event)-Ereignis hinzu, indem wir die Methode `addEventListener()` verwenden.

```html
<p draggable="true">This text <strong>may</strong> be dragged.</p>
```

```js
const draggableElement = document.querySelector('p[draggable="true"]');
draggableElement.addEventListener("dragstart", (event) =>
  event.dataTransfer.setData("text/plain", "This text may be dragged"),
);
```

Wenn ein Benutzer zu ziehen beginnt, wird das [`dragstart`](/de/docs/Web/API/HTMLElement/dragstart_event)-Ereignis ausgelöst.

In diesem Beispiel wird der [`dragstart`](/de/docs/Web/API/HTMLElement/dragstart_event)-Listener dem ziehbaren Element selbst hinzugefügt. Sie könnten jedoch auch einem höheren Vorfahren lauschen, da Ziehereignisse wie die meisten anderen Ereignisse nach oben „blubbern“.

Innerhalb des [`dragstart`](/de/docs/Web/API/HTMLElement/dragstart_event)-Ereignisses können Sie die **Ziehdaten**, das **Feedbackbild** und die **Zieheffekte** angeben, die alle unten beschrieben sind. Allerdings sind nur die **Ziehdaten** erforderlich. (Das Standardbild und die Zieheffekte sind in den meisten Situationen geeignet.)

## Ziehdaten

Alle [`DragEvent`](/de/docs/Web/API/DragEvent)-Objekte haben eine Eigenschaft namens [`dataTransfer`](/de/docs/Web/API/DragEvent/dataTransfer), die die Ziehdaten enthält (`dataTransfer` ist ein [`DataTransfer`](/de/docs/Web/API/DataTransfer)-Objekt).

Wenn ein Ziehen erfolgt, müssen mit dem Ziehen Daten verknüpft sein, die identifizieren, _was_ gezogen wird. Wenn Sie beispielsweise den ausgewählten Text innerhalb eines Textfelds ziehen, sind die mit dem _Ziehdatenobjekt_ verknüpften Daten der Text selbst. Ebenso ist beim Ziehen eines Links auf einer Webseite das Ziehdatenobjekt die URL des Links.

Der [`DataTransfer`](/de/docs/Web/API/DataTransfer) enthält zwei Informationen: den **Typ** (oder das Format) der Daten und den **Wert** der Daten. Das Format ist eine Typzeichenfolge (wie [`text/plain`](/de/docs/Web/API/HTML_Drag_and_Drop_API/Recommended_drag_types#dragging_text) für Textdaten) und der Wert ist eine Textzeichenfolge. Wenn das Ziehen beginnt, fügen Sie Daten hinzu, indem Sie einen Typ und die Daten angeben. Während des Ziehvorgangs können Sie in einem Ereignis-Listener für die Ereignisse [`dragenter`](/de/docs/Web/API/HTMLElement/dragenter_event) und [`dragover`](/de/docs/Web/API/HTMLElement/dragover_event) die Datentypen der gezogenen Daten verwenden, um zu überprüfen, ob ein Ablegen zulässig ist. Zum Beispiel würde ein Abgabeziel, das Links akzeptiert, nach dem Typ [`text/uri-list`](/de/docs/Web/API/HTML_Drag_and_Drop_API/Recommended_drag_types#dragging_links) suchen. Während eines Ablegevorgangs würde ein Listener die gezogenen Daten abrufen und an der Ablegeposition einfügen.

Die [`types`](/de/docs/Web/API/DataTransfer/types)-Eigenschaft des [`DataTransfer`](/de/docs/Web/API/DataTransfer) gibt eine Liste von MIME-ähnlichen Typzeichenfolgen zurück, wie [`text/plain`](/de/docs/Web/API/HTML_Drag_and_Drop_API/Recommended_drag_types#dragging_text) oder [`image/jpeg`](/de/docs/Web/API/HTML_Drag_and_Drop_API/Recommended_drag_types#dragging_images). Sie können auch Ihre eigenen Typen erstellen. Die am häufigsten verwendeten Typen sind im Artikel [Empfohlene Ziehtypen](/de/docs/Web/API/HTML_Drag_and_Drop_API/Recommended_drag_types) aufgeführt.

Ein Ziehen kann Datenobjekte verschiedener Typen enthalten. Dadurch können Daten in spezifischeren Typen bereitgestellt werden, häufig benutzerdefinierte Typen, aber auch Rückfalldaten für Abgabeziele, die spezifischere Typen nicht unterstützen. In der Regel wird der am wenigsten spezifische Typ normale Textdaten mit dem Typ [`text/plain`](/de/docs/Web/API/HTML_Drag_and_Drop_API/Recommended_drag_types#dragging_text) sein.

Um ein Ziehdatenobjekt innerhalb des [`dataTransfer`](/de/docs/Web/API/DragEvent/dataTransfer) festzulegen, verwenden Sie die Methode [`setData()`](/de/docs/Web/API/DataTransfer/setData). Sie nimmt zwei Argumente entgegen: den Typ der Daten und den Datenwert. Zum Beispiel:

```js
event.dataTransfer.setData("text/plain", "Text to drag");
```

In diesem Fall ist der Datenwert "Text to drag" und im Format [`text/plain`](/de/docs/Web/API/HTML_Drag_and_Drop_API/Recommended_drag_types#dragging_text).

Sie können Daten in mehreren Formaten bereitstellen. Dafür rufen Sie die Methode [`setData()`](/de/docs/Web/API/DataTransfer/setData) mehrmals mit unterschiedlichen Formaten auf. Sie sollten es mit Formaten in der Reihenfolge von am spezifischsten zu am wenigsten spezifisch aufrufen.

```js
const dt = event.dataTransfer;
dt.setData("application/x.bookmark", bookmarkString);
dt.setData("text/uri-list", "https://www.mozilla.org");
dt.setData("text/plain", "https://www.mozilla.org");
```

Hier werden Daten in drei verschiedenen Typen hinzugefügt. Der erste Typ, `application/x.bookmark`, ist ein benutzerdefinierter Typ. Andere Anwendungen unterstützen diesen Typ nicht, aber Sie können einen benutzerdefinierten Typ für Ziehen zwischen Bereichen derselben Seite oder Anwendung verwenden.

Indem Sie Daten auch in anderen Typen bereitstellen, können wir auch Ziehen zu anderen Anwendungen in weniger spezifischen Formen unterstützen. Der Typ `application/x.bookmark` kann Daten mit mehr Details zur Verwendung innerhalb der Anwendung bereitstellen, während die anderen Typen nur eine einzelne URL oder Textversion enthalten können.

Beachten Sie, dass sowohl [`text/uri-list`](/de/docs/Web/API/HTML_Drag_and_Drop_API/Recommended_drag_types#dragging_links) als auch [`text/plain`](/de/docs/Web/API/HTML_Drag_and_Drop_API/Recommended_drag_types#dragging_text) im selben Datenbeispiel enthalten sind. Dies ist oft der Fall, muss aber nicht so sein.

Wenn Sie versuchen, Daten zweimal mit demselben Format hinzuzufügen, werden die neuen Daten die alten Daten ersetzen, jedoch an derselben Position in der Typenliste wie die alten Daten.

Sie können die Daten mit der Methode [`clearData()`](/de/docs/Web/API/DataTransfer/clearData) löschen, die ein Argument erhält: den Typ der zu entfernenden Daten.

```js
event.dataTransfer.clearData("text/uri-list");
```

Das `type`-Argument für die Methode [`clearData()`](/de/docs/Web/API/DataTransfer/clearData) ist optional. Wenn kein `type` angegeben ist, werden die mit allen Typen verknüpften Daten entfernt. Wenn der Ziehvorgang keine Ziehdatenobjekte enthält oder alle Objekte anschließend gelöscht wurden, findet kein Ziehen statt.

## Festlegen des Ziehfeedbackbildes

Wenn ein Ziehen stattfindet, wird ein halbtransparentes Bild vom Ziehziel (dem Element, bei dem das [`dragstart`](/de/docs/Web/API/HTMLElement/dragstart_event)-Ereignis ausgelöst wird) erzeugt und folgt dem Zeiger des Benutzers während des Ziehens. Dieses Bild wird automatisch erzeugt, sodass Sie es nicht selbst erstellen müssen. Sie können jedoch [`setDragImage()`](/de/docs/Web/API/DataTransfer/setDragImage) verwenden, um ein benutzerdefiniertes Ziehfeedbackbild festzulegen.

```js
event.dataTransfer.setDragImage(image, xOffset, yOffset);
```

Drei Argumente sind erforderlich. Das erste ist eine Referenz zu einem Bild. Diese Referenz wird typischerweise zu einem `<img>`-Element sein, kann aber auch zu einem `<canvas>` oder einem anderen Element sein. Das Feedbackbild wird aus dem erzeugt, wie das Bild auf dem Bildschirm aussieht, obwohl Bilder in ihrer Originalgröße dargestellt werden. Das zweite und dritte Argument für die Methode [`setDragImage()`](/de/docs/Web/API/DataTransfer/setDragImage) sind Offsets, wo das Bild relativ zum Mauszeiger erscheinen soll.

Es ist auch möglich, Bilder und Leinwände zu verwenden, die sich nicht in einem Dokument befinden. Diese Technik ist nützlich beim Zeichnen von benutzerdefinierten Ziehbildern mit dem Leinwand-Element, wie im folgenden Beispiel:

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

In diesem Beispiel verwenden wir eine Leinwand als Ziehbild. Da die Leinwand 50×50 Pixel groß ist, verwenden wir Offsets von der Hälfte davon (`25`), damit das Bild zentriert auf dem Mauszeiger erscheint.

## Zieheffekte

Beim Ziehen können mehrere Vorgänge ausgeführt werden. Der `copy`-Vorgang wird verwendet, um anzuzeigen, dass die gezogenen Daten von ihrem aktuellen Standort an den Zielort kopiert werden. Der `move`-Vorgang wird verwendet, um anzuzeigen, dass die gezogenen Daten bewegt werden, und der `link`-Vorgang wird verwendet, um anzuzeigen, dass eine Art Beziehung oder Verbindung zwischen dem Quell- und Zielort hergestellt wird.

Sie können angeben, welche der drei Vorgänge für eine Ziehquelle zulässig sind, indem Sie die [`effectAllowed`](/de/docs/Web/API/DataTransfer/effectAllowed)-Eigenschaft innerhalb eines [`dragstart`](/de/docs/Web/API/HTMLElement/dragstart_event)-Ereignis-Listeners festlegen.

```js
event.dataTransfer.effectAllowed = "copy";
```

In diesem Beispiel ist nur ein **Kopieren** erlaubt.

Sie können die Werte auf verschiedene Weise kombinieren:

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
  - : `copy`, `move` oder `link`
- `uninitialized`
  - : der Standardwert, wenn der Effekt nicht festgelegt wurde, entspricht `all`

Beachten Sie, dass diese Werte genau wie oben aufgelistet verwendet werden müssen. Zum Beispiel verhindert das Festlegen der [`effectAllowed`](/de/docs/Web/API/DataTransfer/effectAllowed)-Eigenschaft auf `copyMove`, dass der Benutzer eine Verknüpfungsoperation ausführen kann. Wenn Sie die [`effectAllowed`](/de/docs/Web/API/DataTransfer/effectAllowed)-Eigenschaft nicht ändern, ist jede Operation erlaubt, genau wie mit dem `all`-Wert. Daher müssen Sie diese Eigenschaft nicht anpassen, es sei denn, Sie möchten bestimmte Typen ausschließen.

Während eines Ziehvorgangs kann ein Listener für die Ereignisse [`dragenter`](/de/docs/Web/API/HTMLElement/dragenter_event) oder [`dragover`](/de/docs/Web/API/HTMLElement/dragover_event) die [`effectAllowed`](/de/docs/Web/API/DataTransfer/effectAllowed)-Eigenschaft überprüfen, um festzustellen, welche Vorgänge erlaubt sind. Eine verwandte Eigenschaft, [`dropEffect`](/de/docs/Web/API/DataTransfer/dropEffect), sollte innerhalb eines dieser Ereignisse festgelegt werden, um anzugeben, welcher einzelne Vorgang ausgeführt werden soll. Gültige Werte für [`dropEffect`](/de/docs/Web/API/DataTransfer/dropEffect) sind `none`, `copy`, `move` oder `link`. Die Kombinationen sind für diese Eigenschaft nicht vorgesehen.

Bei den Ereignissen [`dragenter`](/de/docs/Web/API/HTMLElement/dragenter_event) und [`dragover`](/de/docs/Web/API/HTMLElement/dragover_event) ist die [`dropEffect`](/de/docs/Web/API/DataTransfer/dropEffect)-Eigenschaft auf den Effekt initialisiert, den der Benutzer anfordert. Der Benutzer kann den gewünschten Effekt durch Drücken von Modifikatortasten ändern. Obwohl sich die genaue Tastenbelegung je nach Plattform unterscheidet, werden typischerweise die <kbd>Shift</kbd> und <kbd>Control</kbd> Tasten verwendet, um zwischen Kopieren, Verschieben und Verknüpfen zu wechseln. Der Mauszeiger wird sich ändern, um anzuzeigen, welcher Vorgang gewünscht ist. Beispielsweise könnte der Cursor für ein `copy` mit einem Pluszeichen daneben erscheinen.

Sie können die [`dropEffect`](/de/docs/Web/API/DataTransfer/dropEffect)-Eigenschaft während der Ereignisse [`dragenter`](/de/docs/Web/API/HTMLElement/dragenter_event) oder [`dragover`](/de/docs/Web/API/HTMLElement/dragover_event) ändern, wenn beispielsweise ein bestimmtes Ziel nur bestimmte Vorgänge unterstützt. Sie können die [`dropEffect`](/de/docs/Web/API/DataTransfer/dropEffect)-Eigenschaft ändern, um den Benutzereffekt zu überschreiben und einen bestimmten Ziehvorgang zu erzwingen. Beachten Sie, dass dieser Effekt einer der innerhalb der [`effectAllowed`](/de/docs/Web/API/DataTransfer/effectAllowed) aufgeführten Werte sein muss. Andernfalls wird er auf einen alternativen erlaubten Wert gesetzt.

```js
event.dataTransfer.dropEffect = "copy";
```

In diesem Beispiel ist das Kopieren der auszuführende Effekt.

Sie können den Wert `none` verwenden, um anzuzeigen, dass an diesem Ort kein Ablegen erlaubt ist, obwohl es in diesem Fall bevorzugt wird, das Ereignis nicht abzubrechen.

Innerhalb der Ereignisse [`drop`](/de/docs/Web/API/HTMLElement/drop_event) und [`dragend`](/de/docs/Web/API/HTMLElement/dragend_event) können Sie die [`dropEffect`](/de/docs/Web/API/DataTransfer/dropEffect)-Eigenschaft überprüfen, um festzustellen, welcher Effekt letztlich gewählt wurde. Wenn der gewählte Effekt `move` war, sollten die Originaldaten innerhalb des [`dragend`](/de/docs/Web/API/HTMLElement/dragend_event)-Ereignisses von der Quelle des Ziehens entfernt werden.

## Bestimmen von Ziehzielen

Ein Listener für die Ereignisse [`dragenter`](/de/docs/Web/API/HTMLElement/dragenter_event) und [`dragover`](/de/docs/Web/API/HTMLElement/dragover_event) wird verwendet, um gültige Ziehziele anzugeben, das heißt, Orte, an denen gezogene Elemente abgelegt werden können. Die meisten Bereiche einer Webseite oder Anwendung sind keine gültigen Stellen, um Daten abzulegen. Daher ist die Standardverarbeitung dieser Ereignisse so eingestellt, dass kein Ablegen erlaubt ist.

Wenn Sie ein Ablegen erlauben möchten, müssen Sie das Standardverhalten verhindern, indem Sie sowohl die Ereignisse `dragenter` als auch `dragover` abbrechen. Sie können dies tun, indem Sie deren Methode [`preventDefault()`](/de/docs/Web/API/Event/preventDefault) aufrufen:

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

Der Aufruf der Methode [`preventDefault()`](/de/docs/Web/API/Event/preventDefault) während sowohl des Ereignisses [`dragenter`](/de/docs/Web/API/HTMLElement/dragenter_event) als auch des Ereignisses [`dragover`](/de/docs/Web/API/HTMLElement/dragover_event) wird anzeigen, dass an diesem Ort ein Ablegen erlaubt ist. Sie werden jedoch häufig die Methode [`preventDefault()`](/de/docs/Web/API/Event/preventDefault) nur unter bestimmten Bedingungen aufrufen wollen (zum Beispiel nur, wenn ein Link gezogen wird).

Dazu rufen Sie eine Funktion auf, die eine Bedingung prüft und das Ereignis nur dann abbricht, wenn die Bedingung erfüllt ist. Wenn die Bedingung nicht erfüllt ist, wird das Ereignis nicht abgebrochen, und ein Ablegen wird nicht stattfinden, wenn der Benutzer die Maustaste loslässt.

Am häufigsten wird ein Ablegen auf der Grundlage des Typs der Ziehdaten im Datentransfer akzeptiert oder abgelehnt — beispielsweise, wenn Bilder oder Links oder beides erlaubt sind. Hierzu können Sie die [`types`](/de/docs/Web/API/DataTransfer/types)-Eigenschaft des [`dataTransfer`](/de/docs/Web/API/DragEvent/dataTransfer) (der Eigenschaft) des Ereignisses überprüfen. Die [`types`](/de/docs/Web/API/DataTransfer/types)-Eigenschaft gibt ein Array der beim Beginn des Ziehens hinzugefügten Typzeichenfolgen in der Reihenfolge von am spezifischsten bis am wenigsten spezifisch zurück.

```js
function doDragOver(event) {
  const isLink = event.dataTransfer.types.includes("text/uri-list");
  if (isLink) {
    event.preventDefault();
  }
}
```

In diesem Beispiel verwenden wir die Methode `includes`, um zu überprüfen, ob der Typ [`text/uri-list`](/de/docs/Web/API/HTML_Drag_and_Drop_API/Recommended_drag_types#dragging_links) in der Typenliste vorhanden ist. Wenn dies der Fall ist, werden wir das Ereignis abbrechen, damit ein Ablegen erlaubt ist. Wenn die Ziehdaten keinen Link enthalten, wird das Ereignis nicht abgebrochen, und ein Ablegen kann an dieser Stelle nicht stattfinden.

Sie möchten möglicherweise auch entweder die [`effectAllowed`](/de/docs/Web/API/DataTransfer/effectAllowed), die [`dropEffect`](/de/docs/Web/API/DataTransfer/dropEffect)-Eigenschaft oder beide gleichzeitig setzen, wenn Sie spezifischer sein möchten, welchen Vorgang das Ziel durchführt. Natürlich hat das Ändern einer der beiden Eigenschaften keinen Effekt, wenn Sie das Ereignis nicht ebenfalls abbrechen.

## Rückmeldung beim Ablegen

Es gibt mehrere Möglichkeiten, dem Benutzer anzuzeigen, dass an einem bestimmten Ort ein Ablegen erlaubt ist. Der Mauszeiger wird je nach Wert der [`dropEffect`](/de/docs/Web/API/DataTransfer/dropEffect)-Eigenschaft entsprechend aktualisiert.

Obwohl das genaue Erscheinungsbild von der Plattform des Benutzers abhängt, erscheint typischerweise ein Pluszeichen für ein `copy` zum Beispiel, und ein 'hier nicht ablegen'-Symbol, wenn ein Ablegen nicht erlaubt ist. Dieses Mauszeiger-Feedback ist in vielen Fällen ausreichend.

Für komplexere visuelle Effekte können Sie andere Vorgänge während des Ereignisses [`dragenter`](/de/docs/Web/API/HTMLElement/dragenter_event) durchführen. Zum Beispiel durch Einfügen eines Elements an der Stelle, an der das Ablegen erfolgt. Dies könnte ein Einfügemarker oder ein Element sein, das das gezogene Element in seiner neuen Position darstellt. Um dies zu tun, könnten Sie ein [`<img>`](/de/docs/Web/HTML/Reference/Elements/img)-Element erstellen und es während des Ereignisses [`dragenter`](/de/docs/Web/API/HTMLElement/dragenter_event) in das Dokument einfügen.

Das Ereignis [`dragover`](/de/docs/Web/API/HTMLElement/dragover_event) wird auf dem Element ausgelöst, auf das der Mauszeiger zeigt. Natürlich müssen Sie in einem [`dragover`](/de/docs/Web/API/HTMLElement/dragover_event) Ereignis den Einfügemarker möglicherweise ebenfalls verschieben. Sie können die [`clientX`](/de/docs/Web/API/MouseEvent/clientX) und [`clientY`](/de/docs/Web/API/MouseEvent/clientY)-Eigenschaften des Ereignisses wie bei anderen Mausereignissen verwenden, um den Standort des Mauszeigers zu bestimmen.

Zuletzt wird das Ereignis [`dragleave`](/de/docs/Web/API/HTMLElement/dragleave_event) auf einem Element ausgelöst, wenn der Ziehvorgang das Element verlässt. Dies ist der Zeitpunkt, an dem Sie alle Einfügemarker oder Hervorhebungen entfernen sollten. Sie müssen dieses Ereignis nicht abbrechen. Das Ereignis [`dragleave`](/de/docs/Web/API/HTMLElement/dragleave_event) wird immer ausgelöst, selbst wenn das Ziehen abgebrochen wird, sodass Sie immer sicherstellen können, dass die Bereinigung von Einfügebereichen während dieses Ereignisses erfolgen kann.

## Durchführung eines Drops

Wenn der Benutzer die Maus loslässt, endet der Ziehvorgang.

Wenn die Maus über einem Element losgelassen wird, das ein gültiges Ziehziel ist, also ein Ziel, das das letzte Ereignis [`dragenter`](/de/docs/Web/API/HTMLElement/dragenter_event) oder [`dragover`](/de/docs/Web/API/HTMLElement/dragover_event) abgebrochen hat, wird das Ablegen erfolgreich sein, und ein [`drop`](/de/docs/Web/API/HTMLElement/drop_event)-Ereignis wird am Ziel ausgelöst. Andernfalls wird der Ziehvorgang abgebrochen, und kein [`drop`](/de/docs/Web/API/HTMLElement/drop_event)-Ereignis wird ausgelöst.

Während des [`drop`](/de/docs/Web/API/HTMLElement/drop_event)-Ereignisses sollten Sie die Daten, die abgelegt wurden, aus dem Ereignis abrufen und an der Ablegeposition einfügen. Sie können die [`dropEffect`](/de/docs/Web/API/DataTransfer/dropEffect)-Eigenschaft verwenden, um festzustellen, welcher Ziehvorgang gewünscht war.

Wie bei allen ziehbezogenen Ereignissen enthält die [`dataTransfer`](/de/docs/Web/API/DataTransfer)-Eigenschaft des Ereignisses die Daten, die gezogen werden. Die Methode [`getData()`](/de/docs/Web/API/DataTransfer/getData) kann verwendet werden, um die Daten erneut abzurufen.

```js
function onDrop(event) {
  const data = event.dataTransfer.getData("text/plain");
  event.target.textContent = data;
  event.preventDefault();
}
```

Die Methode [`getData()`](/de/docs/Web/API/DataTransfer/getData) benötigt ein Argument, den Typ der abzurufenden Daten. Sie gibt den Zeichenfolgenwert zurück, der gesetzt wurde, als [`setData()`](/de/docs/Web/API/DataTransfer/setData) zu Beginn des Ziehvorgangs aufgerufen wurde. Eine leere Zeichenfolge wird zurückgegeben, wenn keine Daten dieses Typs existieren. (Natürlich wüssten Sie vermutlich, dass die richtigen Daten verfügbar waren, da sie während eines [`dragover`](/de/docs/Web/API/HTMLElement/dragover_event)-Ereignisses bereits überprüft worden sind.)

Im hier dargestellten Beispiel wird, nachdem die Daten abgerufen wurden, die Zeichenfolge als Textinhalt des Ziels eingefügt. Dies hat den Effekt, den gezogenen Text dort einzufügen, wo er abgelegt wurde, vorausgesetzt, das Ziehziel ist ein Textbereich, wie ein `p`- oder `div`-Element.

Auf einer Webseite sollten Sie die Methode [`preventDefault()`](/de/docs/Web/API/Event/preventDefault) des Ereignisses aufrufen, wenn Sie das Ablegen akzeptiert haben, damit das Standardverhalten des Browsers nicht auch durch die abgelegten Daten ausgelöst wird. Beispielsweise würde Firefox beim Ziehen eines Links zu einer Webseite den Link öffnen. Durch Abbrechen des Ereignisses wird dieses Verhalten verhindert.

Sie können auch andere Datentypen abrufen. Wenn die Daten ein Link sind, sollten sie den Typ [`text/uri-list`](/de/docs/Web/API/HTML_Drag_and_Drop_API/Recommended_drag_types#dragging_links) haben. Sie könnten dann einen Link in den Inhalt einfügen.

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

Dieses Beispiel fügt einen Link aus den gezogenen Daten ein. Wie der Name schon impliziert, kann der Typ [`text/uri-list`](/de/docs/Web/API/HTML_Drag_and_Drop_API/Recommended_drag_types#dragging_links) tatsächlich eine Liste von URLs enthalten, jede in einer separaten Zeile. Der obige Code verwendet [`split`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/split), um die Zeichenfolge in Zeilen zu teilen, dann iteriert er über die Liste der Zeilen und fügt jede als Link in das Dokument ein. (Beachten Sie auch, dass Links, die mit einem Nummernzeichen (`#`) beginnen, übersprungen werden, da dies Kommentare sind.)

Für einfache Fälle können Sie den speziellen Typ `URL` verwenden, um nur die erste gültige URL in der Liste abzurufen. Zum Beispiel:

```js
const link = event.dataTransfer.getData("URL");
```

Dies erspart Ihnen die Überprüfung von Kommentaren oder das Iterieren durch Zeilen. Es ist jedoch auf die erste URL in der Liste beschränkt.

Der `URL`-Typ ist ein spezieller Typ. Er wird nur als Abkürzung verwendet und erscheint nicht innerhalb der in der [`types`](/de/docs/Web/API/DataTransfer/types)-Eigenschaft angegebenen Liste der Typen.

Manchmal unterstützen Sie einige unterschiedliche Formate, und Sie möchten die Daten abrufen, die am spezifischsten sind und unterstützt werden. Im folgenden Beispiel werden drei Formate von einem Ziehziel unterstützt.

Das folgende Beispiel gibt die Daten zurück, die mit dem am besten unterstützten Format verknüpft sind:

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

## Abschluss eines Ziehvorgangs

Sobald das Ziehen abgeschlossen ist, wird ein [`dragend`](/de/docs/Web/API/HTMLElement/dragend_event)-Ereignis an der Quelle des Ziehens ausgelöst (dasselbe Element, das das [`dragstart`](/de/docs/Web/API/HTMLElement/dragstart_event)-Ereignis empfangen hat). Dieses Ereignis wird ausgelöst, sowohl wenn das Ziehen erfolgreich war als auch wenn es abgebrochen wurde. Sie können jedoch die [`dropEffect`](/de/docs/Web/API/DataTransfer/dropEffect)-Eigenschaft verwenden, um festzustellen, welcher Ablegevorgang durchgeführt wurde.

Wenn die [`dropEffect`](/de/docs/Web/API/DataTransfer/dropEffect)-Eigenschaft während eines [`dragend`](/de/docs/Web/API/HTMLElement/dragend_event) den Wert `none` hat, wurde das Ziehen abgebrochen. Andernfalls gibt der Effekt an, welcher Vorgang durchgeführt wurde. Die Quelle kann diese Informationen nach einem `move`-Vorgang verwenden, um das gezogene Element von der alten Position zu entfernen.

Ein Ablegen kann innerhalb desselben Fensters oder über eine andere Anwendung erfolgen. Das [`dragend`](/de/docs/Web/API/HTMLElement/dragend_event)-Ereignis wird immer ausgelöst, unabhängig davon. Die [`screenX`](/de/docs/Web/API/MouseEvent/screenX) und [`screenY`](/de/docs/Web/API/MouseEvent/screenY)-Eigenschaften des Ereignisses werden auf die Bildschirmkoordinaten gesetzt, an denen das Ablegen erfolgte.

Nachdem das [`dragend`](/de/docs/Web/API/HTMLElement/dragend_event)-Ereignis die Propagierung abgeschlossen hat, ist der Drag-and-Drop-Vorgang abgeschlossen.

## Siehe auch

- [HTML Drag and Drop API (Übersicht)](/de/docs/Web/API/HTML_Drag_and_Drop_API)
- [Empfohlene Ziehtypen](/de/docs/Web/API/HTML_Drag_and_Drop_API/Recommended_drag_types)
- [HTML Living Standard: Drag and Drop](https://html.spec.whatwg.org/multipage/interaction.html#dnd)
