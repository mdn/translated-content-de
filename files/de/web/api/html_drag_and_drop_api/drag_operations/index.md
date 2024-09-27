---
title: Drag-Operationen
slug: Web/API/HTML_Drag_and_Drop_API/Drag_operations
l10n:
  sourceCommit: dcbb1d99185118360cc84b3a0e935e77fe0a03e3
---

{{DefaultAPISidebar("HTML Drag and Drop API")}}

Im Folgenden werden die Schritte beschrieben, die während eines Drag-and-Drop-Vorgangs ablaufen.

Die in diesem Dokument beschriebenen Drag-Operationen verwenden das [`DataTransfer`](/de/docs/Web/API/DataTransfer)-Interface. Dieses Dokument verwendet _nicht_ das [`DataTransferItem`](/de/docs/Web/API/DataTransferItem)-Interface noch das [`DataTransferItemList`](/de/docs/Web/API/DataTransferItemList)-Interface.

## Das draggable-Attribut

Auf einer Webseite gibt es bestimmte Fälle, in denen ein standardmäßiges Drag-Verhalten verwendet wird. Dazu gehören Textauswahlen, Bilder und Links. Wenn ein Bild oder Link gezogen wird, wird die URL des Bildes oder Links als Drag-Daten festgelegt und ein Drag beginnt. Für andere Elemente müssen sie Teil einer Auswahl sein, damit ein standardmäßiges Drag stattfinden kann. Um dies in Aktion zu sehen, wählen Sie einen Bereich einer Webseite aus und klicken und halten Sie dann die Maus und ziehen Sie die Auswahl. Eine betriebssystemspezifische Darstellung der Auswahl erscheint und folgt dem Mauszeiger während des Drags. Dieses Verhalten ist jedoch nur das standardmäßige Drag-Verhalten, wenn keine Listener die zu ziehenden Daten anpassen.

Im HTML-Dokument können, abgesehen von dem Standardverhalten für Bilder, Links und Auswahlen, keine anderen Elemente standardmäßig gezogen werden.

Um andere HTML-Elemente draggable zu machen, müssen drei Dinge getan werden:

1. Setzen Sie das [`draggable`](/de/docs/Web/HTML/Global_attributes#draggable)-Attribut auf `"true"` für das Element, das Sie draggable machen möchten.
2. Fügen Sie einen Listener für das [`dragstart`](/de/docs/Web/API/HTMLElement/dragstart_event)-Ereignis hinzu.
3. [Setzen Sie die Drag-Daten](/de/docs/Web/API/DataTransfer/setData) im obigen Listener.

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

Das [`draggable`](/de/docs/Web/HTML/Global_attributes#draggable)-Attribut ist auf `"true"` gesetzt, sodass dieses Element draggable wird. Wenn dieses Attribut weggelassen oder auf `"false"` gesetzt würde, würde das Element nicht gezogen, sondern der Text ausgewählt.

Das [`draggable`](/de/docs/Web/HTML/Global_attributes#draggable)-Attribut kann für jedes Element verwendet werden, einschließlich Bilder und Links. Für diese letzten beiden ist der Standardwert jedoch `true`, sodass Sie das [`draggable`](/de/docs/Web/HTML/Global_attributes#draggable)-Attribut nur mit einem Wert von `false` verwenden würden, um das Ziehen dieser Elemente zu deaktivieren.

> [!NOTE]
> Wenn ein Element draggable gemacht wird, kann Text oder andere Elemente darin nicht mehr auf die übliche Weise durch Klicken und Ziehen mit der Maus ausgewählt werden. Stattdessen muss der Benutzer die <kbd>Alt</kbd>-Taste gedrückt halten, um Text mit der Maus auszuwählen, oder die Tastatur verwenden.

## Einen Drag-Vorgang starten

In diesem Beispiel fügen wir einen Listener für das [`dragstart`](/de/docs/Web/API/HTMLElement/dragstart_event)-Ereignis mithilfe der `addEventListener()`-Methode hinzu.

```html
<p draggable="true">This text <strong>may</strong> be dragged.</p>
```

```js
const draggableElement = document.querySelector('p[draggable="true"]');
draggableElement.addEventListener("dragstart", (event) =>
  event.dataTransfer.setData("text/plain", "This text may be dragged"),
);
```

Wenn ein Benutzer beginnt, zu ziehen, wird das [`dragstart`](/de/docs/Web/API/HTMLElement/dragstart_event)-Ereignis ausgelöst.

In diesem Beispiel wird der [`dragstart`](/de/docs/Web/API/HTMLElement/dragstart_event)-Listener zu dem draggable Element selbst hinzugefügt. Sie könnten jedoch auch einen höheren Vorfahren abhören, da Drag-Ereignisse wie die meisten anderen Ereignisse nach oben blubbern.

Innerhalb des [`dragstart`](/de/docs/Web/API/HTMLElement/dragstart_event)-Ereignisses können Sie die **Drag-Daten**, das **Feedback-Bild** und die **Drag-Effekte** angeben, von denen alle unten beschrieben sind. Allerdings sind nur die **Drag-Daten** erforderlich. (Das Standardbild und die Drag-Effekte sind in den meisten Situationen geeignet.)

## Drag-Daten

Alle [`DragEvent`](/de/docs/Web/API/DragEvent)-Objekte haben eine Eigenschaft namens [`dataTransfer`](/de/docs/Web/API/DragEvent/dataTransfer), die die Drag-Daten hält (`dataTransfer` ist ein [`DataTransfer`](/de/docs/Web/API/DataTransfer)-Objekt).

Wenn ein Drag erfolgt, müssen Daten mit dem Drag verknüpft werden, die identifizieren, _was_ gezogen wird. Zum Beispiel, wenn der ausgewählte Text innerhalb eines Textfelds gezogen wird, sind die Daten, die mit dem _Drag-Datenelement_ verknüpft sind, der Text selbst. Ebenso ist beim Ziehen eines Links auf einer Webseite das Drag-Datenelement die URL des Links.

Das [`DataTransfer`](/de/docs/Web/API/DataTransfer) enthält zwei Informationen, den **Typ** (oder Format) der Daten und den **Wert** der Daten. Das Format ist eine Typzeichenkette (wie [`text/plain`](/de/docs/Web/API/HTML_Drag_and_Drop_API/Recommended_drag_types#dragging_text) für Textdaten), und der Wert ist eine Textzeichenkette. Wenn das Ziehen beginnt, fügen Sie Daten hinzu, indem Sie einen Typ und die Daten bereitstellen. Während des Ziehens verwenden Sie in einem Event-Listener für die [`dragenter`](/de/docs/Web/API/HTMLElement/dragenter_event)- und [`dragover`](/de/docs/Web/API/HTMLElement/dragover_event)-Ereignisse die Datentypen der gezogenen Daten, um zu prüfen, ob ein Drop erlaubt ist. Beispielsweise würde ein Drop-Ziel, das Links akzeptiert, den Typ [`text/uri-list`](/de/docs/Web/API/HTML_Drag_and_Drop_API/Recommended_drag_types#dragging_links) überprüfen. Während eines Drop-Ereignisses würde ein Listener die gezogenen Daten abrufen und an der Drop-Position einfügen.

Die [`types`](/de/docs/Web/API/DataTransfer/types)-Eigenschaft des [`DataTransfer`](/de/docs/Web/API/DataTransfer) gibt eine Liste von MIME-ähnlichen Typzeichenfolgen zurück, wie [`text/plain`](/de/docs/Web/API/HTML_Drag_and_Drop_API/Recommended_drag_types#dragging_text) oder [`image/jpeg`](/de/docs/Web/API/HTML_Drag_and_Drop_API/Recommended_drag_types#dragging_images). Sie können auch Ihre eigenen Typen erstellen. Die am häufigsten verwendeten Typen sind im Artikel [Empfohlene Drag-Typen](/de/docs/Web/API/HTML_Drag_and_Drop_API/Recommended_drag_types) aufgeführt.

Ein Drag kann Datenobjekte von mehreren verschiedenen Typen enthalten. Dies ermöglicht es, Daten in spezifischeren Typen bereitzustellen, häufig benutzerdefinierte Typen, und dennoch Ersatzzulaten für Drop-Ziele bereitzustellen, die keine spezifischeren Typen unterstützen. In der Regel wird der am wenigsten spezifische Typ normale Textdaten sein, die den Typ [`text/plain`](/de/docs/Web/API/HTML_Drag_and_Drop_API/Recommended_drag_types#dragging_text) verwenden. Diese Daten werden eine einfache Textdarstellung sein.

Um ein Drag-Datenelement innerhalb des [`dataTransfer`](/de/docs/Web/API/DragEvent/dataTransfer) zu setzen, verwenden Sie die [`setData()`](/de/docs/Web/API/DataTransfer/setData)-Methode. Sie nimmt zwei Argumente an: den Datentyp und den Datenwert. Zum Beispiel:

```js
event.dataTransfer.setData("text/plain", "Text to drag");
```

In diesem Fall ist der Datenwert "Text to drag" und hat das Format [`text/plain`](/de/docs/Web/API/HTML_Drag_and_Drop_API/Recommended_drag_types#dragging_text).

Sie können Daten in mehreren Formaten bereitstellen. Dazu rufen Sie die [`setData()`](/de/docs/Web/API/DataTransfer/setData)-Methode mehrfach mit verschiedenen Formaten auf. Sie sollten es in Reihenfolge vom spezifischsten bis zum am wenigsten spezifischen Format aufrufen.

```js
const dt = event.dataTransfer;
dt.setData("application/x.bookmark", bookmarkString);
dt.setData("text/uri-list", "https://www.mozilla.org");
dt.setData("text/plain", "https://www.mozilla.org");
```

Hier werden Daten in drei verschiedenen Typen hinzugefügt. Der erste Typ, `application/x.bookmark`, ist ein benutzerdefinierter Typ. Andere Anwendungen unterstützen diesen Typ nicht, aber Sie können einen benutzerdefinierten Typ für Drags zwischen Bereichen derselben Seite oder Anwendung verwenden.

Durch die Bereitstellung von Daten in anderen Typen können wir auch Drags zu anderen Anwendungen in weniger spezifischen Formen unterstützen. Der `application/x.bookmark`-Typ kann Daten mit mehr Details für den Einsatz innerhalb der Anwendung bereitstellen, während die anderen Typen nur eine URL oder Textversion enthalten können.

Beachten Sie, dass sowohl der [`text/uri-list`](/de/docs/Web/API/HTML_Drag_and_Drop_API/Recommended_drag_types#dragging_links) als auch der [`text/plain`](/de/docs/Web/API/HTML_Drag_and_Drop_API/Recommended_drag_types#dragging_text) im selben Daten enthalten. Dies ist häufig der Fall, muss aber nicht so sein.

Wenn Sie versuchen, Daten zweimal mit demselben Format hinzuzufügen, ersetzen die neuen Daten die alten Daten, aber an derselben Position in der Typenliste wie die alten Daten.

Sie können die Daten mit der [`clearData()`](/de/docs/Web/API/DataTransfer/clearData)-Methode löschen, die ein Argument nimmt: den Typ der zu entfernenden Daten.

```js
event.dataTransfer.clearData("text/uri-list");
```

Das `type`-Argument der [`clearData()`](/de/docs/Web/API/DataTransfer/clearData)-Methode ist optional. Wenn der `type` nicht angegeben wird, werden die Daten, die mit allen Typen verknüpft sind, entfernt. Wenn das Drag keine Drag-Datenelemente enthält oder alle Elemente nachträglich gelöscht wurden, wird kein Drag stattfinden.

## Festlegen des Drag-Feedback-Bildes

Wenn ein Drag erfolgt, wird ein durchscheinendes Bild aus dem Drag-Ziel (dem Element, bei dem das [`dragstart`](/de/docs/Web/API/HTMLElement/dragstart_event)-Ereignis ausgelöst wird) erstellt und folgt dem Zeiger des Benutzers während des Drags. Dieses Bild wird automatisch erstellt, sodass Sie es nicht selbst erstellen müssen. Sie können jedoch [`setDragImage()`](/de/docs/Web/API/DataTransfer/setDragImage) verwenden, um ein benutzerdefiniertes Drag-Feedback-Bild anzugeben.

```js
event.dataTransfer.setDragImage(image, xOffset, yOffset);
```

Drei Argumente sind erforderlich. Das erste ist ein Verweis auf ein Bild. Dieser Verweis wird in der Regel auf ein `<img>`-Element verweisen, kann aber auch auf ein `<canvas>` oder ein anderes Element verweisen. Das Feedback-Bild wird aus dem generiert, was das Bild auf dem Bildschirm aussieht, obwohl Bilder in ihrer Originalgröße gezeichnet werden. Die zweiten und dritten Argumente der [`setDragImage()`](/de/docs/Web/API/DataTransfer/setDragImage)-Methode sind Offsets, wo das Bild relativ zum Mauszeiger angezeigt werden soll.

Es ist auch möglich, Bilder und Leinwände zu verwenden, die sich nicht in einem Dokument befinden. Diese Technik ist nützlich, wenn Sie benutzerdefinierte Drag-Bilder mit dem Canvas-Element zeichnen, wie im folgenden Beispiel:

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

In diesem Beispiel machen wir eine Leinwand zum Drag-Bild. Da das Canvas 50×50 Pixel groß ist, verwenden wir Offsets von der Hälfte dieser Größe (`25`), damit das Bild zentriert auf dem Mauszeiger angezeigt wird.

## Drag-Effekte

Beim Ziehen gibt es mehrere Operationen, die ausgeführt werden können. Die `copy`-Operation wird verwendet, um anzuzeigen, dass die gezogenen Daten von ihrer aktuellen Position zur Zielposition kopiert werden. Die `move`-Operation wird verwendet, um anzuzeigen, dass die gezogenen Daten verschoben werden, und die `link`-Operation zeigt an, dass eine Art Beziehung oder Verbindung zwischen der Quelle und den Zielpositionen erstellt wird.

Sie können angeben, welche der drei Operationen für eine Drag-Quelle zulässig sind, indem Sie die [`effectAllowed`](/de/docs/Web/API/DataTransfer/effectAllowed)-Eigenschaft innerhalb eines [`dragstart`](/de/docs/Web/API/HTMLElement/dragstart_event)-Event-Listeners einstellen.

```js
event.dataTransfer.effectAllowed = "copy";
```

In diesem Beispiel ist nur ein **Kopieren** erlaubt.

Sie können die Werte auf verschiedene Weise kombinieren:

- `none`
  - : Keine Operation ist erlaubt
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
  - : der Standardwert, wenn der Effekt nicht gesetzt wurde, entspricht `all`

Beachten Sie, dass diese Werte genau wie oben aufgeführt verwendet werden müssen. Zum Beispiel erlaubt das Festlegen der [`effectAllowed`](/de/docs/Web/API/DataTransfer/effectAllowed)-Eigenschaft auf `copyMove` eine Copy- oder Move-Operation, verhindert jedoch, dass der Benutzer eine Verknüpfungsoperation durchführt. Wenn Sie die [`effectAllowed`](/de/docs/Web/API/DataTransfer/effectAllowed)-Eigenschaft nicht ändern, ist jede Operation erlaubt, genau wie beim `all`-Wert. Sie müssen diese Eigenschaft also nicht anpassen, es sei denn, Sie möchten bestimmte Typen ausschließen.

Während eines Drag-Vorgangs kann ein Listener für die [`dragenter`](/de/docs/Web/API/HTMLElement/dragenter_event)- oder [`dragover`](/de/docs/Web/API/HTMLElement/dragover_event)-Ereignisse die [`effectAllowed`](/de/docs/Web/API/DataTransfer/effectAllowed)-Eigenschaft überprüfen, um zu sehen, welche Operationen zulässig sind. Eine verwandte Eigenschaft, [`dropEffect`](/de/docs/Web/API/DataTransfer/dropEffect), sollte innerhalb eines dieser Ereignisse gesetzt werden, um anzugeben, welche einzelne Operation ausgeführt werden soll. Gültige Werte für [`dropEffect`](/de/docs/Web/API/DataTransfer/dropEffect) sind `none`, `copy`, `move` oder `link`. Die Kombinationswerte werden für diese Eigenschaft nicht verwendet.

Beim [`dragenter`](/de/docs/Web/API/HTMLElement/dragenter_event)- und [`dragover`](/de/docs/Web/API/HTMLElement/dragover_event)-Ereignis wird die [`dropEffect`](/de/docs/Web/API/DataTransfer/dropEffect)-Eigenschaft auf den Effekt initialisiert, den der Benutzer anfordert. Der Benutzer kann den gewünschten Effekt ändern, indem er Modifikatortasten drückt. Obwohl die genauen Tasten je nach Plattform variieren, würden in der Regel die <kbd>Shift</kbd>- und <kbd>Control</kbd>-Tasten verwendet, um zwischen Kopieren, Bewegen und Verknüpfen zu wechseln. Der Mauszeiger wird sich ändern, um anzuzeigen, welche Operation erwünscht ist. Zum Beispiel könnte der Cursor für ein `copy` mit einem Pluszeichen daneben erscheinen.

Sie können die [`dropEffect`](/de/docs/Web/API/DataTransfer/dropEffect)-Eigenschaft während der [`dragenter`](/de/docs/Web/API/HTMLElement/dragenter_event)- oder [`dragover`](/de/docs/Web/API/HTMLElement/dragover_event)-Ereignisse ändern, wenn beispielsweise ein bestimmtes Drop-Ziel nur bestimmte Operationen unterstützt. Sie können die [`dropEffect`](/de/docs/Web/API/DataTransfer/dropEffect)-Eigenschaft ändern, um den Benutzereffekt zu überschreiben und eine bestimmte Drop-Operation zu erzwingen. Beachten Sie, dass dieser Effekt einer der im [`effectAllowed`](/de/docs/Web/API/DataTransfer/effectAllowed)-Eigenschaft aufgeführten sein muss. Andernfalls wird er auf einen alternativen Wert gesetzt, der erlaubt ist.

```js
event.dataTransfer.dropEffect = "copy";
```

In diesem Beispiel wird die Effekt-Kopierung durchgeführt.

Sie können den Wert `none` verwenden, um anzuzeigen, dass kein Drop an dieser Stelle erlaubt ist, obwohl es bevorzugt wird, das Ereignis in diesem Fall nicht abzubrechen.

Innerhalb der [`drop`](/de/docs/Web/API/HTMLElement/drop_event)- und [`dragend`](/de/docs/Web/API/HTMLElement/dragend_event)-Ereignisse können Sie die [`dropEffect`](/de/docs/Web/API/DataTransfer/dropEffect)-Eigenschaft überprüfen, um festzustellen, welcher Effekt letztendlich ausgewählt wurde. Wenn der ausgewählte Effekt `move` war, sollten die ursprünglichen Daten im [`dragend`](/de/docs/Web/API/HTMLElement/dragend_event)-Ereignis von der Quelle des Drags entfernt werden.

## Drop-Ziele angeben

Ein Listener für die [`dragenter`](/de/docs/Web/API/HTMLElement/dragenter_event)- und [`dragover`](/de/docs/Web/API/HTMLElement/dragover_event)-Ereignisse wird verwendet, um gültige Drop-Ziele anzuzeigen, das heißt, Orte, an denen gezogene Elemente abgelegt werden können. Die meisten Bereiche einer Webseite oder Anwendung sind keine gültigen Drop-Orte. Daher ist die Standardbehandlung dieser Ereignisse, einen Drop nicht zuzulassen.

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

Das Aufrufen der [`preventDefault()`](/de/docs/Web/API/Event/preventDefault)-Methode während sowohl des [`dragenter`](/de/docs/Web/API/HTMLElement/dragenter_event)- als auch des [`dragover`](/de/docs/Web/API/HTMLElement/dragover_event)-Ereignisses zeigt an, dass dort ein Drop erlaubt ist. Häufig möchten Sie die [`preventDefault()`](/de/docs/Web/API/Event/preventDefault)-Methode jedoch nur in bestimmten Situationen (zum Beispiel nur, wenn ein Link gezogen wird) aufrufen.

Dazu rufen Sie eine Funktion auf, die eine Bedingung überprüft und das Ereignis nur dann abbricht, wenn die Bedingung erfüllt ist. Wenn die Bedingung nicht erfüllt ist, brechen Sie das Ereignis nicht ab, und ein Drop wird dort nicht stattfinden, wenn der Benutzer die Maustaste loslässt.

Häufig akzeptiert oder lehnt man einen Drop basierend auf dem Typ der gezogenen Daten im Datentransfer ab – zum Beispiel das Zulassen von Bildern oder Links oder beides. Um dies zu tun, können Sie die [`types`](/de/docs/Web/API/DataTransfer/types)-Eigenschaft des [`dataTransfer`](/de/docs/Web/API/DragEvent/dataTransfer) des Events (Eigenschaft) überprüfen. Die [`types`](/de/docs/Web/API/DataTransfer/types)-Eigenschaft gibt ein Array der Zeichenfolgen-Typen zurück, die beim Beginnen des Drags hinzugefügt wurden, in der Reihenfolge von den am stärksten bis zu am wenigsten signifikant.

```js
function doDragOver(event) {
  const isLink = event.dataTransfer.types.includes("text/uri-list");
  if (isLink) {
    event.preventDefault();
  }
}
```

In diesem Beispiel verwenden wir die `includes`-Methode, um zu überprüfen, ob der Typ [`text/uri-list`](/de/docs/Web/API/HTML_Drag_and_Drop_API/Recommended_drag_types#dragging_links) in der Typenliste vorhanden ist. Wenn dies der Fall ist, brechen wir das Ereignis ab, damit ein Drop erlaubt werden kann. Wenn die Drag-Daten keinen Link enthalten, wird das Ereignis nicht abgebrochen und ein Drop kann nicht an dieser Stelle erfolgen.

Es kann auch ratsam sein, entweder die [`effectAllowed`](/de/docs/Web/API/DataTransfer/effectAllowed), [`dropEffect`](/de/docs/Web/API/DataTransfer/dropEffect)-Eigenschaft oder beide gleichzeitig zu setzen, wenn Sie spezifischer über die Art der auszuführenden Operation sein möchten. Natürlich hat das Ändern einer der beiden Eigenschaften keine Auswirkung, wenn Sie das Ereignis nicht ebenfalls abbrechen.

## Drop-Feedback

Es gibt mehrere Möglichkeiten, dem Benutzer anzuzeigen, dass ein Drop an einem bestimmten Ort erlaubt ist. Der Mauszeiger wird sich je nach Wert der [`dropEffect`](/de/docs/Web/API/DataTransfer/dropEffect)-Eigenschaft entsprechend ändern.

Obwohl das genaue Erscheinungsbild von der Plattform des Benutzers abhängt, wird normalerweise beispielsweise für eine `copy` ein Plus-Symbol angezeigt und für einen nicht erlaubten Drop ein 'cannot drop here'-Symbol erscheinen. Dieses Feedback des Mauszeigers ist in vielen Fällen ausreichend.

Für komplexere visuelle Effekte können Sie andere Operationen während des [`dragenter`](/de/docs/Web/API/HTMLElement/dragenter_event)-Ereignisses ausführen. Zum Beispiel durch Einsetzen eines Elements an der Stelle, an der der Drop erfolgen wird. Dies könnte ein Einfügemarker oder ein Element sein, das das gezogene Element an seinem neuen Standort darstellt. Dazu könnten Sie ein [`<img>`](/de/docs/Web/HTML/Element/img)-Element erstellen und es während des [`dragenter`](/de/docs/Web/API/HTMLElement/dragenter_event)-Ereignisses in das Dokument einfügen.

Das [`dragover`](/de/docs/Web/API/HTMLElement/dragover_event)-Ereignis wird bei dem Element ausgelöst, auf das der Mauszeiger zeigt. Natürlich müssen Sie möglicherweise den Einfügemarker auch während eines [`dragover`](/de/docs/Web/API/HTMLElement/dragover_event)-Ereignisses verschieben. Sie können die [`clientX`](/de/docs/Web/API/MouseEvent/clientX)- und [`clientY`](/de/docs/Web/API/MouseEvent/clientY)-Eigenschaften des Ereignisses wie bei anderen Mausereignissen verwenden, um die Position des Mauszeigers zu bestimmen.

Schließlich wird das [`dragleave`](/de/docs/Web/API/HTMLElement/dragleave_event)-Ereignis bei einem Element ausgelöst, wenn der Drag das Element verlässt. Dies ist der Zeitpunkt, an dem Sie alle Einfügemarker oder Hervorhebungen entfernen sollten. Sie müssen dieses Ereignis nicht abbrechen. Das [`dragleave`](/de/docs/Web/API/HTMLElement/dragleave_event)-Ereignis wird immer ausgelöst, auch wenn der Drag abgebrochen wird, sodass Sie immer sicherstellen können, dass jegliche Einfügepunktbereinigung während dieses Ereignisses erfolgen kann.

## Einen Drop durchführen

Wenn der Benutzer die Maus loslässt, endet der Drag-and-Drop-Vorgang.

Wenn die Maus über einem Element losgelassen wird, das ein gültiges Drop-Ziel ist, also eines, das das letzte [`dragenter`](/de/docs/Web/API/HTMLElement/dragenter_event)- oder [`dragover`](/de/docs/Web/API/HTMLElement/dragover_event)-Ereignis abgebrochen hat, wird der Drop erfolgreich sein, und ein [`drop`](/de/docs/Web/API/HTMLElement/drop_event)-Ereignis wird am Ziel ausgelöst. Andernfalls wird der Drag-Vorgang abgebrochen, und es wird kein [`drop`](/de/docs/Web/API/HTMLElement/drop_event)-Ereignis ausgelöst.

Während des [`drop`](/de/docs/Web/API/HTMLElement/drop_event)-Ereignisses sollten Sie die Daten abrufen, die von dem Ereignis fallen gelassen wurden, und diese an der Drop-Position einfügen. Sie können die [`dropEffect`](/de/docs/Web/API/DataTransfer/dropEffect)-Eigenschaft verwenden, um festzustellen, welche Drag-Operation gewünscht war.

Wie bei allen Drag-bezogenen Ereignissen enthält die [`dataTransfer`](/de/docs/Web/API/DataTransfer)-Eigenschaft des Ereignisses die Daten, die gezogen werden. Die [`getData()`](/de/docs/Web/API/DataTransfer/getData)-Methode kann erneut verwendet werden, um die Daten abzurufen.

```js
function onDrop(event) {
  const data = event.dataTransfer.getData("text/plain");
  event.target.textContent = data;
  event.preventDefault();
}
```

Die [`getData()`](/de/docs/Web/API/DataTransfer/getData)-Methode nimmt ein Argument an, den Typ der abzurufenden Daten. Sie wird den Zeichenkettenwert zurückgeben, der beim Aufruf von [`setData()`](/de/docs/Web/API/DataTransfer/setData) zu Beginn des Drag-Vorgangs festgelegt wurde. Eine leere Zeichenkette wird zurückgegeben, wenn keine Daten dieses Typs existieren. (Natürlich würden Sie in der Regel wissen, dass der richtige Datentyp verfügbar war, da er während eines [`dragover`](/de/docs/Web/API/HTMLElement/dragover_event)-Ereignisses zuvor überprüft wurde.)

Im hier gezeigten Beispiel, sobald die Daten abgerufen wurden, fügen wir die Zeichenkette als Textinhalt des Ziels ein. Dies hat den Effekt, den gezogenen Text an der Stelle einzufügen, an der er fallen gelassen wurde, sofern das Drop-Ziel ein Textbereich wie ein `p`- oder `div`-Element ist.

Auf einer Webseite sollten Sie die [`preventDefault()`](/de/docs/Web/API/Event/preventDefault)-Methode des Ereignisses aufrufen, wenn Sie den Drop akzeptiert haben, damit die Standardbehandlung des Browsers nicht auch durch die fallengelassenen Daten ausgelöst wird. Wenn beispielsweise ein Link zu einer Webseite gezogen wird, wird Firefox den Link öffnen. Durch das Abbrechen des Ereignisses wird dieses Verhalten verhindert.

Sie können auch andere Datentypen abrufen. Wenn die Daten ein Link sind, sollte er den Typ [`text/uri-list`](/de/docs/Web/API/HTML_Drag_and_Drop_API/Recommended_drag_types#dragging_links) haben. Sie könnten dann einen Link in die Inhalte einfügen.

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

Dieses Beispiel fügt einen Link aus den gezogenen Daten ein. Wie der Name schon sagt, kann der Typ [`text/uri-list`](/de/docs/Web/API/HTML_Drag_and_Drop_API/Recommended_drag_types#dragging_links) tatsächlich eine Liste von URLs enthalten, jede in einer separaten Zeile. Der obige Code verwendet [`split`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/split), um die Zeichenkette in Zeilen zu unterteilen, dann iteriert er über die Liste der Zeilen und fügt jede als Link in das Dokument ein. (Hinweis: Links, die mit einem Nummernzeichen (`#`) beginnen, werden übersprungen, da dies Kommentare sind.)

Für einfache Fälle können Sie den speziellen Typ `URL` verwenden, um nur die erste gültige URL in der Liste abzurufen. Zum Beispiel:

```js
const link = event.dataTransfer.getData("URL");
```

Dies eliminiert die Notwendigkeit, Kommentare zu überprüfen oder die Linien selbst zu durchlaufen. Es ist jedoch auf die erste URL in der Liste beschränkt.

Der URL-Typ ist ein spezieller Typ. Er wird nur als Abkürzung verwendet und erscheint nicht innerhalb der in der [`types`](/de/docs/Web/API/DataTransfer/types)-Eigenschaft angegebenen Typenliste.

Manchmal unterstützen Sie möglicherweise mehrere verschiedene Formate, und Sie möchten die Daten abrufen, die am spezifischsten und unterstützt sind. Im folgenden Beispiel werden drei Formate von einem Drop-Ziel unterstützt.

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

## Einen Drag abschließen

Nachdem der Drag abgeschlossen ist, wird ein [`dragend`](/de/docs/Web/API/HTMLElement/dragend_event)-Ereignis bei der Quelle des Drags ausgelöst (dasselbe Element, das das [`dragstart`](/de/docs/Web/API/HTMLElement/dragstart_event)-Ereignis erhalten hat). Dieses Ereignis wird ausgelöst, unabhängig davon, ob der Drag erfolgreich war oder abgebrochen wurde. Sie können jedoch die [`dropEffect`](/de/docs/Web/API/DataTransfer/dropEffect)-Eigenschaft verwenden, um festzustellen, welche Drop-Operation stattgefunden hat.

Wenn die [`dropEffect`](/de/docs/Web/API/DataTransfer/dropEffect)-Eigenschaft während eines [`dragend`](/de/docs/Web/API/HTMLElement/dragend_event) den Wert `none` hat, wurde der Drag abgebrochen. Andernfalls gibt der Effekt an, welche Operation ausgeführt wurde. Die Quelle kann diese Informationen nach einer `move`-Operation verwenden, um das gezogene Element aus dem alten Standort zu entfernen.

Ein Drop kann im selben Fenster oder über einer anderen Anwendung erfolgen. Das [`dragend`](/de/docs/Web/API/HTMLElement/dragend_event)-Ereignis wird in jedem Fall ausgelöst. Die [`screenX`](/de/docs/Web/API/MouseEvent/screenX)- und [`screenY`](/de/docs/Web/API/MouseEvent/screenY)-Eigenschaften des Ereignisses werden auf die Bildschirmkoordinaten gesetzt, an denen der Drop stattgefunden hat.

Nachdem das [`dragend`](/de/docs/Web/API/HTMLElement/dragend_event)-Ereignis beendet ist, ist der Drag-and-Drop-Vorgang abgeschlossen.

## Siehe auch

- [HTML Drag and Drop API (Übersicht)](/de/docs/Web/API/HTML_Drag_and_Drop_API)
- [Empfohlene Drag-Typen](/de/docs/Web/API/HTML_Drag_and_Drop_API/Recommended_drag_types)
- [HTML Living Standard: Drag and Drop](https://html.spec.whatwg.org/multipage/interaction.html#dnd)
