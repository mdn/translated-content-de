---
title: Drag-Vorgänge
slug: Web/API/HTML_Drag_and_Drop_API/Drag_operations
l10n:
  sourceCommit: dcbb1d99185118360cc84b3a0e935e77fe0a03e3
---

{{DefaultAPISidebar("HTML Drag and Drop API")}}

Im Folgenden werden die Schritte beschrieben, die während eines Drag-and-Drop-Vorgangs ablaufen.

Die in diesem Dokument beschriebenen Drag-Vorgänge verwenden die [`DataTransfer`](/de/docs/Web/API/DataTransfer)-Schnittstelle. Dieses Dokument verwendet _nicht_ die [`DataTransferItem`](/de/docs/Web/API/DataTransferItem)-Schnittstelle noch die [`DataTransferItemList`](/de/docs/Web/API/DataTransferItemList)-Schnittstelle.

## Das draggable-Attribut

In einer Webseite gibt es bestimmte Fälle, in denen ein standardmäßiges Drag-Verhalten verwendet wird. Dazu gehören Textauswahlen, Bilder und Links. Wenn ein Bild oder Link gezogen wird, wird die URL des Bildes oder Links als Drag-Daten festgelegt, und ein Drag beginnt. Für andere Elemente müssen sie Teil einer Auswahl sein, damit ein standardmäßiges Drag-Verhalten auftritt. Um dies zu sehen, wählen Sie einen Bereich einer Webseite aus und klicken und halten Sie dann die Maus, um die Auswahl zu ziehen. Eine betriebssystemspezifische Darstellung der Auswahl erscheint und folgt dem Mauszeiger während des Drags. Dieses Verhalten ist jedoch nur das standardmäßige Drag-Verhalten, wenn keine Listener die zu ziehenden Daten anpassen.

In HTML sind außer dem Standardverhalten für Bilder, Links und Auswahlen keine anderen Elemente standardmäßig draggable.

Um andere HTML-Elemente draggable zu machen, müssen drei Dinge getan werden:

1. Setzen Sie das [`draggable`](/de/docs/Web/HTML/Global_attributes#draggable)-Attribut auf `"true"` für das Element, das Sie draggable machen möchten.
2. Fügen Sie einen Listener für das [`dragstart`](/de/docs/Web/API/HTMLElement/dragstart_event)-Ereignis hinzu.
3. [Setzen Sie die Drag-Daten](/de/docs/Web/API/DataTransfer/setData) im obigen Listener.

Hier ist ein Beispiel, das ein Ziehen eines Inhaltsbereichs ermöglicht.

```html
<p draggable="true">This text <strong>may</strong> be dragged.</p>
```

```js
const draggableElement = document.querySelector('p[draggable="true"]');

draggableElement.addEventListener("dragstart", (event) =>
  event.dataTransfer.setData("text/plain", "This text may be dragged"),
);
```

Das [`draggable`](/de/docs/Web/HTML/Global_attributes#draggable)-Attribut ist auf `"true"` gesetzt, sodass dieses Element draggable wird. Wenn dieses Attribut weggelassen oder auf `"false"` gesetzt wird, würde das Element nicht gezogen werden, und stattdessen würde der Text ausgewählt.

Das [`draggable`](/de/docs/Web/HTML/Global_attributes#draggable)-Attribut kann auf jedes Element angewendet werden, einschließlich Bilder und Links. Für diese beiden ist der Standardwert jedoch `true`, sodass Sie das [`draggable`](/de/docs/Web/HTML/Global_attributes#draggable)-Attribut mit einem Wert von `false` verwenden würden, um das Ziehen dieser Elemente zu deaktivieren.

> [!NOTE]
> Wenn ein Element draggable gemacht wird, können Text oder andere Elemente darin nicht mehr auf normale Weise ausgewählt werden, indem mit der Maus geklickt und gezogen wird. Stattdessen muss der Benutzer die <kbd>Alt</kbd>-Taste gedrückt halten, um Text mit der Maus auszuwählen, oder die Tastatur verwenden.

## Ein Drag-Vorgang starten

In diesem Beispiel fügen wir einen Listener für das [`dragstart`](/de/docs/Web/API/HTMLElement/dragstart_event)-Ereignis mit der `addEventListener()`-Methode hinzu.

```html
<p draggable="true">This text <strong>may</strong> be dragged.</p>
```

```js
const draggableElement = document.querySelector('p[draggable="true"]');
draggableElement.addEventListener("dragstart", (event) =>
  event.dataTransfer.setData("text/plain", "This text may be dragged"),
);
```

Wenn ein Benutzer beginnt zu ziehen, wird das [`dragstart`](/de/docs/Web/API/HTMLElement/dragstart_event)-Ereignis ausgelöst.

In diesem Beispiel wird der [`dragstart`](/de/docs/Web/API/HTMLElement/dragstart_event)-Listener dem draggable Element selbst hinzugefügt. Sie können jedoch auch einem höheren Vorfahren lauschen, da Drag-Ereignisse wie die meisten anderen Ereignisse nach oben blubbern.

Innerhalb des [`dragstart`](/de/docs/Web/API/HTMLElement/dragstart_event)-Ereignisses können Sie die **Drag-Daten**, das **Feedback-Bild** und die **Drag-Effekte** angeben, die alle unten beschrieben werden. Allerdings sind nur die **Drag-Daten** erforderlich. (Das Standard-Bild und die Drag-Effekte sind in den meisten Situationen geeignet.)

## Drag-Daten

Alle [`DragEvent`](/de/docs/Web/API/DragEvent)-Objekte haben eine Eigenschaft namens [`dataTransfer`](/de/docs/Web/API/DragEvent/dataTransfer), die die Drag-Daten enthält (`dataTransfer` ist ein [`DataTransfer`](/de/docs/Web/API/DataTransfer)-Objekt).

Wenn ein Drag auftritt, müssen Daten mit dem Drag verknüpft werden, die identifizieren, _was_ gezogen wird. Zum Beispiel, wenn der ausgewählte Text in einem Textfeld gezogen wird, sind die mit dem _Drag-Daten-Item_ verknüpften Daten der Text selbst. Ähnlich, wenn ein Link auf einer Webseite gezogen wird, ist das Drag-Daten-Item die URL des Links.

Das [`DataTransfer`](/de/docs/Web/API/DataTransfer)-Objekt enthält zwei Informationen, den **Typ** (oder das Format) der Daten und den **Wert** der Daten. Das Format ist ein Typ-String (wie [`text/plain`](/de/docs/Web/API/HTML_Drag_and_Drop_API/Recommended_drag_types#dragging_text) für Textdaten), und der Wert ist ein String von Text. Wenn das Drag beginnt, fügen Sie Daten hinzu, indem Sie einen Typ und die Daten bereitstellen. Während des Drags, in einem Ereignis-Listener für die [`dragenter`](/de/docs/Web/API/HTMLElement/dragenter_event)- und [`dragover`](/de/docs/Web/API/HTMLElement/dragover_event)-Ereignisse, verwenden Sie die Datentypen der gezogenen Daten, um zu überprüfen, ob ein Drop erlaubt ist. Zum Beispiel, ein Drop-Ziel, das Links akzeptiert, würde auf den Typ [`text/uri-list`](/de/docs/Web/API/HTML_Drag_and_Drop_API/Recommended_drag_types#dragging_links) prüfen. Während eines Drop-Ereignisses würde ein Listener die gezogenen Daten abrufen und sie an der Drop-Position einfügen.

Die [`types`](/de/docs/Web/API/DataTransfer/types)-Eigenschaft des [`DataTransfer`](/de/docs/Web/API/DataTransfer)-Objekts gibt eine Liste von MIME-Typ-ähnlichen Strings zurück, wie [`text/plain`](/de/docs/Web/API/HTML_Drag_and_Drop_API/Recommended_drag_types#dragging_text) oder [`image/jpeg`](/de/docs/Web/API/HTML_Drag_and_Drop_API/Recommended_drag_types#dragging_images). Sie können auch eigene Typen erstellen. Die am häufigsten verwendeten Typen sind im Artikel [Empfohlene Drag-Typen](/de/docs/Web/API/HTML_Drag_and_Drop_API/Recommended_drag_types) aufgeführt.

Ein Drag kann Daten-Items verschiedener Typen enthalten. Dies ermöglicht es, Daten in spezifischeren Typen bereitzustellen, oft benutzerdefinierte Typen, und dennoch Fallback-Daten für Drop-Ziele bereitzustellen, die spezifischere Typen nicht unterstützen. In der Regel wird der unspezifischste Typ normale Textdaten mit dem Typ [`text/plain`](/de/docs/Web/API/HTML_Drag_and_Drop_API/Recommended_drag_types#dragging_text) sein. Diese Daten werden eine einfache textuelle Darstellung sein.

Um ein Drag-Daten-Item innerhalb des [`dataTransfer`](/de/docs/Web/API/DragEvent/dataTransfer)-Objekts festzulegen, verwenden Sie die [`setData()`](/de/docs/Web/API/DataTransfer/setData)-Methode. Sie nimmt zwei Argumente entgegen: den Datentyp und den Datenwert. Zum Beispiel:

```js
event.dataTransfer.setData("text/plain", "Text to drag");
```

In diesem Fall ist der Datenwert "Text to drag" und hat das Format [`text/plain`](/de/docs/Web/API/HTML_Drag_and_Drop_API/Recommended_drag_types#dragging_text).

Sie können Daten in mehreren Formaten bereitstellen. Um dies zu tun, rufen Sie die [`setData()`](/de/docs/Web/API/DataTransfer/setData)-Methode mehrmals mit verschiedenen Formaten auf. Sie sollten sie mit Formaten in der Reihenfolge vom spezifischsten zum unspezifischsten aufrufen.

```js
const dt = event.dataTransfer;
dt.setData("application/x.bookmark", bookmarkString);
dt.setData("text/uri-list", "https://www.mozilla.org");
dt.setData("text/plain", "https://www.mozilla.org");
```

Hier werden Daten in drei verschiedenen Typen hinzugefügt. Der erste Typ, `application/x.bookmark`, ist ein benutzerdefinierter Typ. Andere Anwendungen werden diesen Typ nicht unterstützen, aber Sie können einen benutzerdefinierten Typ für Drags zwischen Bereichen derselben Seite oder Anwendung verwenden.

Indem Sie Daten in anderen Typen bereitstellen, können Sie auch Drags zu anderen Anwendungen in weniger spezifischen Formen unterstützen. Der Typ `application/x.bookmark` kann Daten mit mehr Details zur Verwendung innerhalb der Anwendung bereitstellen, während die anderen Typen nur eine einzige URL oder Textversion enthalten können.

Beachten Sie, dass sowohl [`text/uri-list`](/de/docs/Web/API/HTML_Drag_and_Drop_API/Recommended_drag_types#dragging_links) als auch [`text/plain`](/de/docs/Web/API/HTML_Drag_and_Drop_API/Recommended_drag_types#dragging_text) in diesem Beispiel dieselben Daten enthalten. Dies wird oft der Fall sein, muss aber nicht so sein.

Wenn Sie versuchen, Daten zweimal mit demselben Format hinzuzufügen, ersetzen die neuen Daten die alten, aber an derselben Position innerhalb der Liste der Typen wie die alten Daten.

Sie können die Daten mit der [`clearData()`](/de/docs/Web/API/DataTransfer/clearData)-Methode löschen, die ein Argument erfordert: den Typ der zu entfernenden Daten.

```js
event.dataTransfer.clearData("text/uri-list");
```

Das `type`-Argument der [`clearData()`](/de/docs/Web/API/DataTransfer/clearData)-Methode ist optional. Wenn der `type` nicht angegeben ist, werden die Daten aller Typen entfernt. Wenn der Drag keine Drag-Daten-Items enthält oder alle Items anschließend gelöscht wurden, wird kein Drag stattfinden.

## Das Drag-Feedback-Bild festlegen

Wenn ein Drag auftritt, wird ein transparentes Bild aus dem Drag-Ziel (dem Element, bei dem das [`dragstart`](/de/docs/Web/API/HTMLElement/dragstart_event)-Ereignis ausgelöst wird) erstellt und folgt dem Zeiger des Benutzers während des Drags. Dieses Bild wird automatisch erstellt, sodass Sie es nicht selbst erstellen müssen. Sie können jedoch [`setDragImage()`](/de/docs/Web/API/DataTransfer/setDragImage) verwenden, um ein benutzerdefiniertes Drag-Feedback-Bild anzugeben.

```js
event.dataTransfer.setDragImage(image, xOffset, yOffset);
```

Drei Argumente sind notwendig. Das erste ist ein Verweis auf ein Bild. Dieser Verweis wird in der Regel auf ein `<img>`-Element zeigen, kann aber auch auf ein `<canvas>` oder ein anderes Element verweisen. Das Feedback-Bild wird aus dem auf dem Bildschirm angezeigten Bild generiert, obwohl bei Bildern in ihrer Originalgröße gezeichnet wird. Die zweiten und dritten Argumente der [`setDragImage()`](/de/docs/Web/API/DataTransfer/setDragImage)-Methode sind Offsets, wo das Bild relativ zum Mauszeiger erscheinen soll.

Es ist auch möglich, Bilder und Canvas-Elemente zu verwenden, die nicht in einem Dokument sind. Diese Technik ist nützlich, wenn benutzerdefinierte Drag-Bilder mit dem Canvas-Element gezeichnet werden, wie im folgenden Beispiel:

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

In diesem Beispiel machen wir ein Canvas zu einem Drag-Bild. Da das Canvas 50×50 Pixel groß ist, verwenden wir Versätze von der Hälfte (`25`), sodass das Bild in der Mitte des Mauszeigers erscheint.

## Drag-Effekte

Beim Ziehen gibt es verschiedene Operationen, die ausgeführt werden können. Die `copy`-Operation wird verwendet, um anzuzeigen, dass die gezogenen Daten von ihrem aktuellen Standort zur Drop-Position kopiert werden. Die `move`-Operation wird verwendet, um anzuzeigen, dass die gezogenen Daten verschoben werden, und die `link`-Operation zeigt an, dass eine Art von Beziehung oder Verbindung zwischen der Quelle und der Drop-Position hergestellt wird.

Sie können angeben, welche der drei Operationen für eine Drag-Quelle erlaubt sind, indem Sie die [`effectAllowed`](/de/docs/Web/API/DataTransfer/effectAllowed)-Eigenschaft innerhalb eines [`dragstart`](/de/docs/Web/API/HTMLElement/dragstart_event)-Ereignis-Listeners festlegen.

```js
event.dataTransfer.effectAllowed = "copy";
```

In diesem Beispiel ist nur ein **Kopieren** erlaubt.

Sie können die Werte auf verschiedene Weise kombinieren:

- `none`
  - : Keine Operation ist erlaubt
- `copy`
  - : Nur `copy`
- `move`
  - : Nur `move`
- `link`
  - : Nur `link`
- `copyMove`
  - : Nur `copy` oder `move`
- `copyLink`
  - : Nur `copy` oder `link`
- `linkMove`
  - : Nur `link` oder `move`
- `all`
  - : `copy`, `move` oder `link`
- `uninitialized`
  - : Der Standardwert, wenn der Effekt nicht gesetzt wurde, gleichbedeutend mit `all`

Beachten Sie, dass diese Werte genau so wie oben aufgeführt verwendet werden müssen. Zum Beispiel erlaubt das Setzen der [`effectAllowed`](/de/docs/Web/API/DataTransfer/effectAllowed)-Eigenschaft auf `copyMove` eine Kopie- oder Verschieben-Operation, verhindert jedoch, dass der Benutzer eine Link-Operation ausführt. Wenn Sie die [`effectAllowed`](/de/docs/Web/API/DataTransfer/effectAllowed)-Eigenschaft nicht ändern, ist jede Operation erlaubt, genau wie mit dem `all`-Wert. Sie müssen diese Eigenschaft also nicht anpassen, es sei denn, Sie möchten bestimmte Typen ausschließen.

Während eines Drag-Vorgangs kann ein Listener für die [`dragenter`](/de/docs/Web/API/HTMLElement/dragenter_event)- oder [`dragover`](/de/docs/Web/API/HTMLElement/dragover_event)-Ereignisse die [`effectAllowed`](/de/docs/Web/API/DataTransfer/effectAllowed)-Eigenschaft überprüfen, um zu sehen, welche Operationen erlaubt sind. Eine verwandte Eigenschaft, [`dropEffect`](/de/docs/Web/API/DataTransfer/dropEffect), sollte innerhalb einer dieser Ereignisse festgelegt werden, um anzugeben, welche einzelne Operation ausgeführt werden soll. Gültige Werte für [`dropEffect`](/de/docs/Web/API/DataTransfer/dropEffect) sind `none`, `copy`, `move` oder `link`. Die Kombinationswerte werden für diese Eigenschaft nicht verwendet.

Mit dem [`dragenter`](/de/docs/Web/API/HTMLElement/dragenter_event)- und [`dragover`](/de/docs/Web/API/HTMLElement/dragover_event)-Ereignis wird die [`dropEffect`](/de/docs/Web/API/DataTransfer/dropEffect)-Eigenschaft auf den Effekt initialisiert, den der Benutzer anfordert. Der Benutzer kann den gewünschten Effekt durch Drücken von Modifikatortasten ändern. Obwohl die genauen Tasten je nach Plattform variieren, würden normalerweise die Tasten <kbd>Shift</kbd> und <kbd>Control</kbd> verwendet, um zwischen Kopieren, Verschieben und Verlinken zu wechseln. Der Mauszeiger ändert sich, um anzuzeigen, welcher Vorgang gewünscht ist. Beispielsweise könnte für eine `copy` der Cursor mit einem Pluszeichen erscheinen.

Sie können die [`dropEffect`](/de/docs/Web/API/DataTransfer/dropEffect)-Eigenschaft während der [`dragenter`](/de/docs/Web/API/HTMLElement/dragenter_event)- oder [`dragover`](/de/docs/Web/API/HTMLElement/dragover_event)-Ereignisse ändern, wenn beispielsweise ein bestimmtes Drop-Ziel nur bestimmte Operationen unterstützt. Sie können die [`dropEffect`](/de/docs/Web/API/DataTransfer/dropEffect)-Eigenschaft ändern, um den Benutzer-Effekt zu überschreiben und eine spezifische Drop-Operation zu erzwingen. Beachten Sie, dass dieser Effekt innerhalb der [`effectAllowed`](/de/docs/Web/API/DataTransfer/effectAllowed)-Eigenschaft aufgeführt sein muss. Andernfalls wird er auf einen alternativen Wert gesetzt, der erlaubt ist.

```js
event.dataTransfer.dropEffect = "copy";
```

In diesem Beispiel ist Kopieren der durchgeführte Effekt.

Sie können den Wert `none` verwenden, um anzugeben, dass an dieser Stelle kein Drop erlaubt ist, obwohl es bevorzugt wird, das Ereignis in diesem Fall nicht abzubrechen.

Innerhalb der [`drop`](/de/docs/Web/API/HTMLElement/drop_event)- und [`dragend`](/de/docs/Web/API/HTMLElement/dragend_event)-Ereignisse können Sie die [`dropEffect`](/de/docs/Web/API/DataTransfer/dropEffect)-Eigenschaft überprüfen, um festzustellen, welcher Effekt letztendlich gewählt wurde. Wenn der gewählte Effekt `move` war, sollten die ursprünglichen Daten an der Quelle des Drag-Vorgangs im [`dragend`](/de/docs/Web/API/HTMLElement/dragend_event)-Ereignis entfernt werden.

## Drop-Ziele spezifizieren

Ein Listener für die [`dragenter`](/de/docs/Web/API/HTMLElement/dragenter_event)- und [`dragover`](/de/docs/Web/API/HTMLElement/dragover_event)-Ereignisse wird verwendet, um gültige Drop-Ziele anzuzeigen, also Orte, an denen gezogene Objekte fallen gelassen werden können. Die meisten Bereiche einer Webseite oder Anwendung sind keine gültigen Orte, um Daten fallen zu lassen. Daher ist das Standardverhalten dieser Ereignisse, keinen Drop zuzulassen.

Wenn Sie einen Drop erlauben möchten, müssen Sie das Standardverhalten verhindern, indem Sie sowohl das `dragenter`- als auch das `dragover`-Ereignis abbrechen. Sie können dies tun, indem Sie ihre [`preventDefault()`](/de/docs/Web/API/Event/preventDefault)-Methoden aufrufen:

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

Das Aufrufen der [`preventDefault()`](/de/docs/Web/API/Event/preventDefault)-Methode während sowohl des [`dragenter`](/de/docs/Web/API/HTMLElement/dragenter_event)- als auch des [`dragover`](/de/docs/Web/API/HTMLElement/dragover_event)-Ereignisses zeigt an, dass an dieser Stelle ein Drop erlaubt ist. Allerdings werden Sie in der Regel die [`preventDefault()`](/de/docs/Web/API/Event/preventDefault)-Methode nur unter bestimmten Bedingungen aufrufen wollen (zum Beispiel, nur wenn ein Link gezogen wird).

Um dies zu tun, rufen Sie eine Funktion auf, die eine Bedingung überprüft und das Ereignis nur dann abbricht, wenn die Bedingung erfüllt ist. Wenn die Bedingung nicht erfüllt ist, brechen Sie das Ereignis nicht ab, und ein Drop kann dort nicht stattfinden, wenn der Benutzer die Maustaste loslässt.

Es ist am häufigsten, einen Drop basierend auf dem Typ der Drag-Daten im Data-Transfer zu akzeptieren oder abzulehnen — zum Beispiel, indem man Bilder, Links oder beides erlaubt. Zu diesem Zweck können Sie die [`types`](/de/docs/Web/API/DataTransfer/types)-Eigenschaft des Ereignisses überprüfen.

```js
function doDragOver(event) {
  const isLink = event.dataTransfer.types.includes("text/uri-list");
  if (isLink) {
    event.preventDefault();
  }
}
```

In diesem Beispiel verwenden wir die `includes`-Methode, um zu überprüfen, ob der Typ [`text/uri-list`](/de/docs/Web/API/HTML_Drag_and_Drop_API/Recommended_drag_types#dragging_links) in der Liste der Typen vorhanden ist. Wenn dies der Fall ist, brechen wir das Ereignis ab, damit ein Drop erlaubt werden kann. Wenn die Drag-Daten keinen Link enthalten, wird das Ereignis nicht abgebrochen, und ein Drop kann an dieser Stelle nicht erfolgen.

Sie können auch entweder die [`effectAllowed`](/de/docs/Web/API/DataTransfer/effectAllowed)-, die [`dropEffect`](/de/docs/Web/API/DataTransfer/dropEffect)-Eigenschaft oder beide gleichzeitig setzen, wenn Sie spezifischer über die Art der auszuführenden Operation sein möchten. Selbstverständlich hat das Ändern einer der beiden Eigenschaften keinen Effekt, wenn Sie das Ereignis nicht ebenfalls abbrechen.

## Drop-Feedback

Es gibt verschiedene Möglichkeiten, dem Benutzer mitzuteilen, dass ein Drop an einer bestimmten Stelle erlaubt ist. Der Mauszeiger wird je nach Wert der [`dropEffect`](/de/docs/Web/API/DataTransfer/dropEffect)-Eigenschaft entsprechend aktualisiert.

Obwohl das genaue Aussehen von der Plattform des Benutzers abhängt, erscheint in der Regel ein Pluszeichen-Icon für ein `copy` zum Beispiel, und ein "hier nicht ablegen"-Icon, wenn ein Drop nicht erlaubt ist. Dieses Mauszeiger-Feedback ist in vielen Fällen ausreichend.

Für komplexere visuelle Effekte können Sie andere Operationen während des [`dragenter`](/de/docs/Web/API/HTMLElement/dragenter_event)-Ereignisses ausführen. Beispielsweise durch Einfügen eines Elements an der Stelle, an der der Drop erfolgen wird. Dies könnte ein Einfügemarker oder ein Element sein, das das gezogene Element an seinem neuen Ort darstellt. Dazu könnten Sie ein [`<img>`](/de/docs/Web/HTML/Element/img)-Element erstellen und es während des [`dragenter`](/de/docs/Web/API/HTMLElement/dragenter_event)-Ereignisses in das Dokument einfügen.

Das [`dragover`](/de/docs/Web/API/HTMLElement/dragover_event)-Ereignis wird bei dem Element ausgelöst, auf das der Mauszeiger zeigt. Natürlich müssen Sie den Einfügemarker möglicherweise auch um ein [`dragover`](/de/docs/Web/API/HTMLElement/dragover_event)-Ereignis bewegen. Sie können die [`clientX`](/de/docs/Web/API/MouseEvent/clientX)- und [`clientY`](/de/docs/Web/API/MouseEvent/clientY)-Eigenschaften des Ereignisses wie bei anderen Mausereignissen verwenden, um den Standort des Mauszeigers zu bestimmen.

Schließlich wird das [`dragleave`](/de/docs/Web/API/HTMLElement/dragleave_event)-Ereignis ausgelöst, wenn das Drag das Element verlässt. Dies ist die Zeit, um alle Einfügemarker oder Hervorhebungen zu entfernen. Sie müssen dieses Ereignis nicht abbrechen. Das [`dragleave`](/de/docs/Web/API/HTMLElement/dragleave_event)-Ereignis wird immer ausgelöst, auch wenn das Drag abgebrochen wird, sodass Sie immer sicherstellen können, dass eine Bereinigungsaktion des Einfügepunkts während dieses Ereignisses durchgeführt werden kann.

## Einen Drop durchführen

Wenn der Benutzer die Maus loslässt, endet der Drag-and-Drop-Vorgang.

Wenn die Maus über einem Element losgelassen wird, das ein gültiges Drop-Ziel ist, also eines, das das letzte [`dragenter`](/de/docs/Web/API/HTMLElement/dragenter_event)- oder [`dragover`](/de/docs/Web/API/HTMLElement/dragover_event)-Ereignis abgebrochen hat, wird der Drop erfolgreich sein, und ein [`drop`](/de/docs/Web/API/HTMLElement/drop_event)-Ereignis wird am Ziel ausgelöst. Andernfalls wird der Drag-Vorgang abgebrochen, und kein [`drop`](/de/docs/Web/API/HTMLElement/drop_event)-Ereignis wird ausgelöst.

Während des [`drop`](/de/docs/Web/API/HTMLElement/drop_event)-Ereignisses sollten Sie die fallengelassenen Daten aus dem Ereignis abrufen und sie an der Drop-Position einfügen. Sie können die [`dropEffect`](/de/docs/Web/API/DataTransfer/dropEffect)-Eigenschaft verwenden, um festzustellen, welche Drag-Operation gewünscht war.

Wie bei allen Drag-bezogenen Ereignissen wird die [`dataTransfer`](/de/docs/Web/API/DataTransfer)-Eigenschaft des Ereignisses die gezogenen Daten enthalten. Die [`getData()`](/de/docs/Web/API/DataTransfer/getData)-Methode kann verwendet werden, um die Daten erneut abzurufen.

```js
function onDrop(event) {
  const data = event.dataTransfer.getData("text/plain");
  event.target.textContent = data;
  event.preventDefault();
}
```

Die [`getData()`](/de/docs/Web/API/DataTransfer/getData)-Methode benötigt ein Argument, den Typ der abzurufenden Daten. Sie gibt den String-Wert zurück, der zu Beginn des Drag-Vorgangs festgelegt wurde, als [`setData()`](/de/docs/Web/API/DataTransfer/setData) aufgerufen wurde. Ein leerer String wird zurückgegeben, wenn Daten dieses Typs nicht existieren. (Natürlich wissen Sie in der Regel, dass der richtige Datentyp verfügbar war, da er zuvor während eines [`dragover`](/de/docs/Web/API/HTMLElement/dragover_event)-Ereignisses überprüft wurde.)

In dem hier gezeigten Beispiel, sobald die Daten abgerufen wurden, setzen wir den String als Textinhalt des Ziels ein. Dies hat den Effekt, dass der gezogene Text dort eingefügt wird, wo er fällt, vorausgesetzt, dass das Drop-Ziel ein Textbereich wie ein `p`- oder `div`-Element ist.

In einer Webseite sollten Sie die [`preventDefault()`](/de/docs/Web/API/Event/preventDefault)-Methode des Ereignisses aufrufen, wenn Sie den Drop akzeptiert haben, damit das Standardverhalten des Browsers für die abgeworfenen Daten nicht ebenfalls ausgelöst wird. Zum Beispiel, wenn ein Link zu einer Webseite gezogen wird, wird Firefox den Link öffnen. Durch das Abbrechen des Ereignisses wird dieses Verhalten verhindert.

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

Dieses Beispiel fügt einen Link aus den gezogenen Daten ein. Wie der Name schon sagt, kann der Typ [`text/uri-list`](/de/docs/Web/API/HTML_Drag_and_Drop_API/Recommended_drag_types#dragging_links) tatsächlich eine Liste von URLs enthalten, jede in einer eigenen Zeile. Der obige Code verwendet [`split`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/split), um den String in Zeilen aufzuteilen, iteriert dann über die Liste der Zeilen und fügt jede als Link in das Dokument ein. (Beachten Sie auch, dass Links, die mit einem Nummernzeichen (`#`) beginnen, übersprungen werden, da diese Kommentare sind.)

Für einfache Fälle können Sie den speziellen Typ `URL` verwenden, um nur die erste gültige URL in der Liste abzurufen. Zum Beispiel:

```js
const link = event.dataTransfer.getData("URL");
```

Dies eliminiert die Notwendigkeit, selbst nach Kommentaren zu suchen oder Zeilen zu durchlaufen. Es ist jedoch auf die erste URL in der Liste beschränkt.

Der `URL`-Typ ist ein spezieller Typ. Er wird nur als Abkürzung verwendet, und er erscheint nicht innerhalb der Liste der in der [`types`](/de/docs/Web/API/DataTransfer/types)-Eigenschaft festgelegten Typen.

Manchmal unterstützen Sie eventuell einige unterschiedliche Formate und möchten die spezifischsten unterstützen, die verfügbar sind. Im folgenden Beispiel werden drei Formate von einem Drop-Ziel unterstützt.

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

## Einen Drag beenden

Sobald der Drag abgeschlossen ist, wird ein [`dragend`](/de/docs/Web/API/HTMLElement/dragend_event)-Ereignis an der Quelle des Drags ausgelöst (dem selben Element, das das [`dragstart`](/de/docs/Web/API/HTMLElement/dragstart_event)-Ereignis erhalten hat). Dieses Ereignis wird ausgelöst, unabhängig davon, ob der Drag erfolgreich war oder abgebrochen wurde. Sie können jedoch die [`dropEffect`](/de/docs/Web/API/DataTransfer/dropEffect)-Eigenschaft verwenden, um festzustellen, welche Drop-Operation stattgefunden hat.

Wenn die [`dropEffect`](/de/docs/Web/API/DataTransfer/dropEffect)-Eigenschaft den Wert `none` während eines [`dragend`](/de/docs/Web/API/HTMLElement/dragend_event) hat, wurde der Drag abgebrochen. Andernfalls gibt der Effekt an, welche Operation durchgeführt wurde. Die Quelle kann diese Informationen nach einer `move`-Operation verwenden, um das gezogene Element vom alten Ort zu entfernen.

Ein Drop kann innerhalb desselben Fensters oder über einer anderen Anwendung erfolgen. Das [`dragend`](/de/docs/Web/API/HTMLElement/dragend_event)-Ereignis wird trotzdem immer ausgelöst. Die [`screenX`](/de/docs/Web/API/MouseEvent/screenX)- und [`screenY`](/de/docs/Web/API/MouseEvent/screenY)-Eigenschaften des Ereignisses werden auf die Bildschirmkoordinaten gesetzt, an denen der Drop erfolgt ist.

Nachdem das [`dragend`](/de/docs/Web/API/HTMLElement/dragend_event)-Ereignis das Propagieren beendet hat, ist der Drag-and-Drop-Vorgang abgeschlossen.

## Siehe auch

- [HTML Drag and Drop API (Übersicht)](/de/docs/Web/API/HTML_Drag_and_Drop_API)
- [Empfohlene Drag-Typen](/de/docs/Web/API/HTML_Drag_and_Drop_API/Recommended_drag_types)
- [HTML Living Standard: Drag and Drop](https://html.spec.whatwg.org/multipage/interaction.html#dnd)
