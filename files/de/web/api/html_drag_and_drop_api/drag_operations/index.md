---
title: Drag-Operationen
slug: Web/API/HTML_Drag_and_Drop_API/Drag_operations
l10n:
  sourceCommit: 816cc4d4a5a318a23222946b6981bb92b499aebb
---

{{DefaultAPISidebar("HTML Drag and Drop API")}}

Im Folgenden werden die Schritte beschrieben, die während einer Drag-and-Drop-Operation ablaufen.

Die in diesem Dokument beschriebenen Drag-Operationen verwenden die [`DataTransfer`](/de/docs/Web/API/DataTransfer)-Schnittstelle. Dieses Dokument verwendet _nicht_ die [`DataTransferItem`](/de/docs/Web/API/DataTransferItem)-Schnittstelle noch die [`DataTransferItemList`](/de/docs/Web/API/DataTransferItemList)-Schnittstelle.

## Das draggable-Attribut

Auf einer Webseite gibt es bestimmte Fälle, in denen ein Standard-Drag-Verhalten verwendet wird. Dazu gehören Textauswahlen, Bilder und Links. Wenn ein Bild oder ein Link gezogen wird, wird die URL des Bildes oder Links als zu ziehende Daten festgelegt, und ein Drag beginnt. Bei anderen Elementen müssen sie Teil einer Auswahl sein, damit ein Standard-Drag stattfindet. Um dies in Aktion zu sehen, wählen Sie einen Bereich einer Webseite aus und klicken und halten Sie dann die Maus, während Sie die Auswahl ziehen. Eine betriebssystemspezifische Darstellung der Auswahl wird erscheinen und dem Mauszeiger folgen, während der Drag stattfindet. Dieses Verhalten ist jedoch nur das Standard-Drag-Verhalten, wenn keine Listener die zu ziehenden Daten anpassen.

In HTML sind abgesehen vom Standardverhalten für Bilder, Links und Auswahlen keine anderen Elemente standardmäßig ziehbar.

Um andere HTML-Elemente ziehbar zu machen, müssen drei Dinge getan werden:

1. Setzen Sie das [`draggable`](/de/docs/Web/HTML/Global_attributes/draggable)-Attribut auf `"true"` für das Element, das Sie ziehbar machen möchten.
2. Fügen Sie einen Listener für das [`dragstart`](/de/docs/Web/API/HTMLElement/dragstart_event)-Ereignis hinzu.
3. [Setzen Sie die Drag-Daten](/de/docs/Web/API/DataTransfer/setData) im oben genannten Listener.

Hier ist ein Beispiel, das es ermöglicht, einen Abschnitt von Inhalten zu ziehen.

```html
<p draggable="true">This text <strong>may</strong> be dragged.</p>
```

```js
const draggableElement = document.querySelector('p[draggable="true"]');

draggableElement.addEventListener("dragstart", (event) =>
  event.dataTransfer.setData("text/plain", "This text may be dragged"),
);
```

Das [`draggable`](/de/docs/Web/HTML/Global_attributes/draggable)-Attribut ist auf `"true"` gesetzt, so dass dieses Element ziehbar wird. Wenn dieses Attribut weggelassen oder auf `"false"` gesetzt würde, wäre das Element nicht ziehbar und stattdessen würde der Text ausgewählt werden.

Das [`draggable`](/de/docs/Web/HTML/Global_attributes/draggable)-Attribut kann auf jedes Element angewendet werden, einschließlich Bilder und Links. Allerdings ist bei diesen beiden der Standardwert `true`, sodass Sie das [`draggable`](/de/docs/Web/HTML/Global_attributes/draggable)-Attribut mit dem Wert `false` nur verwenden würden, um das Ziehen dieser Elemente zu deaktivieren.

> [!NOTE]
> Wenn ein Element ziehbar gemacht wird, können Text oder andere Elemente darin auf normale Weise nicht mehr durch Klicken und Ziehen mit der Maus ausgewählt werden. Stattdessen muss der Benutzer die <kbd>Alt</kbd>-Taste gedrückt halten, um Text mit der Maus auszuwählen, oder die Tastatur verwenden.

## Starten einer Drag-Operation

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

In diesem Beispiel wird der [`dragstart`](/de/docs/Web/API/HTMLElement/dragstart_event)-Listener dem ziehbaren Element selbst hinzugefügt. Sie könnten jedoch auch einem höheren Vorfahren lauschen, da Drag-Ereignisse wie die meisten anderen Ereignisse nach oben blubbern.

Innerhalb des [`dragstart`](/de/docs/Web/API/HTMLElement/dragstart_event)-Ereignisses können Sie die **Drag-Daten**, das **Feedback-Bild** und die **Drag-Effekte** spezifizieren, von denen alle unten beschrieben werden. Allerdings sind nur die **Drag-Daten** erforderlich. (Das Standardbild und die Drag-Effekte sind in den meisten Situationen geeignet.)

## Drag-Daten

Alle [`DragEvent`](/de/docs/Web/API/DragEvent)-Objekte haben eine Eigenschaft namens [`dataTransfer`](/de/docs/Web/API/DragEvent/dataTransfer), die die Drag-Daten enthält (`dataTransfer` ist ein [`DataTransfer`](/de/docs/Web/API/DataTransfer)-Objekt).

Bei einem Drag müssen Daten mit dem Drag verknüpft werden, die identifizieren, _was_ gezogen wird. Beispielsweise ist bei einem Ziehen des ausgewählten Textes innerhalb eines Textfeldes der mit dem _Drag-Daten-Element_ verknüpfte Datensatz der Text selbst. Ähnlich ist beim Ziehen eines Links auf einer Webseite das Drag-Daten-Element die URL des Links.

Das [`DataTransfer`](/de/docs/Web/API/DataTransfer)-Objekt enthält zwei Informationen: den **Typ** (oder das Format) der Daten und den **Wert** der Daten. Das Format ist ein Typ-String (wie [`text/plain`](/de/docs/Web/API/HTML_Drag_and_Drop_API/Recommended_drag_types#dragging_text) für Textdaten) und der Wert ist ein Text-String. Wenn das Ziehen beginnt, fügen Sie Daten hinzu, indem Sie einen Typ und die Daten übergeben. Während des Ziehens können Sie in einem Listener für die [`dragenter`](/de/docs/Web/API/HTMLElement/dragenter_event)- und [`dragover`](/de/docs/Web/API/HTMLElement/dragover_event)-Ereignisse die Datentypen der zu ziehenden Daten verwenden, um zu überprüfen, ob ein Ablegen erlaubt ist. Beispielsweise würde ein Abgabeziel, das Links akzeptiert, auf den Typ [`text/uri-list`](/de/docs/Web/API/HTML_Drag_and_Drop_API/Recommended_drag_types#dragging_links) prüfen. Während eines Drop-Ereignisses würde ein Listener die zu ziehenden Daten abrufen und an der Abgabeposition einfügen.

Die [`types`](/de/docs/Web/API/DataTransfer/types)-Eigenschaft von [`DataTransfer`](/de/docs/Web/API/DataTransfer) gibt eine Liste von MIME-ähnlichen Strings zurück, wie [`text/plain`](/de/docs/Web/API/HTML_Drag_and_Drop_API/Recommended_drag_types#dragging_text) oder [`image/jpeg`](/de/docs/Web/API/HTML_Drag_and_Drop_API/Recommended_drag_types#dragging_images). Sie können auch Ihre eigenen Typen erstellen. Die am häufigsten verwendeten Typen sind im Artikel [Recommended Drag Types](/de/docs/Web/API/HTML_Drag_and_Drop_API/Recommended_drag_types) aufgeführt.

Ein Drag kann Daten-Elemente mehrerer verschiedener Typen enthalten. Dies ermöglicht es, Daten in spezifischeren Typen, oft benutzerdefinierten Typen, bereitzustellen, und dennoch Fallback-Daten für Abgabeziele, die spezifischere Typen nicht unterstützen, bereitzustellen. Es ist normalerweise der Fall, dass der am wenigsten spezifische Typ normale Textdaten unter Verwendung des Typs [`text/plain`](/de/docs/Web/API/HTML_Drag_and_Drop_API/Recommended_drag_types#dragging_text) sein wird. Diese Daten sind eine einfache Textdarstellung.

Um eine Drag-Datenposition innerhalb von [`dataTransfer`](/de/docs/Web/API/DragEvent/dataTransfer) festzulegen, verwenden Sie die Methode [`setData()`](/de/docs/Web/API/DataTransfer/setData). Sie nimmt zwei Argumente an: den Datentyp und den Datenwert. Zum Beispiel:

```js
event.dataTransfer.setData("text/plain", "Text to drag");
```

In diesem Fall ist der Datenwert "Text to drag" und hat das Format [`text/plain`](/de/docs/Web/API/HTML_Drag_and_Drop_API/Recommended_drag_types#dragging_text).

Sie können Daten in mehreren Formaten bereitstellen. Um dies zu tun, rufen Sie die Methode [`setData()`](/de/docs/Web/API/DataTransfer/setData) mehrmals mit unterschiedlichen Formaten auf. Sie sollten es mit Formaten in der Reihenfolge von am spezifischsten zu am wenigsten spezifischen aufrufen.

```js
const dt = event.dataTransfer;
dt.setData("application/x.bookmark", bookmarkString);
dt.setData("text/uri-list", "https://www.mozilla.org");
dt.setData("text/plain", "https://www.mozilla.org");
```

Hier werden Daten in drei verschiedenen Typen hinzugefügt. Der erste Typ, `application/x.bookmark`, ist ein benutzerdefinierter Typ. Andere Anwendungen unterstützen diesen Typ nicht, aber Sie können einen benutzerdefinierten Typ für Ziehbewegungen zwischen Bereichen derselben Website oder Anwendung verwenden.

Durch die Bereitstellung von Daten in anderen Typen können wir auch Ziehbewegungen in weniger spezifischen Formen zu anderen Anwendungen unterstützen. Der Typ `application/x.bookmark` kann Daten mit mehr Details zur Verwendung innerhalb der Anwendung bereitstellen, während die anderen Typen lediglich eine einzelne URL oder Textversion enthalten können.

Beachten Sie, dass sowohl [`text/uri-list`](/de/docs/Web/API/HTML_Drag_and_Drop_API/Recommended_drag_types#dragging_links) als auch [`text/plain`](/de/docs/Web/API/HTML_Drag_and_Drop_API/Recommended_drag_types#dragging_text) in diesem Beispiel die gleichen Daten enthalten. Dies wird oft der Fall sein, muss aber nicht unbedingt der Fall sein.

Wenn Sie versuchen, Daten zweimal mit demselben Format hinzuzufügen, werden die neuen Daten die alten Daten ersetzen, jedoch an der gleichen Position innerhalb der Liste der Typen wie die alten Daten.

Sie können die Daten mit der Methode [`clearData()`](/de/docs/Web/API/DataTransfer/clearData) löschen, die ein Argument nimmt: den Typ der zu entfernenden Daten.

```js
event.dataTransfer.clearData("text/uri-list");
```

Das `type`-Argument der Methode [`clearData()`](/de/docs/Web/API/DataTransfer/clearData) ist optional. Wenn der `type` nicht angegeben ist, werden die mit allen Typen verbundenen Daten entfernt. Wenn das Ziehen keine Drag-Datenpositionen enthält oder alle Positionen nachträglich gelöscht wurden, wird kein Drag stattfinden.

## Einstellen des Drag-Feedback-Bildes

Wenn ein Drag erfolgt, wird ein transparentes Bild von dem Drag-Ziel (dem Element, bei dem das [`dragstart`](/de/docs/Web/API/HTMLElement/dragstart_event)-Ereignis ausgelöst wird) generiert und folgt während des Drags dem Zeiger des Benutzers. Dieses Bild wird automatisch erstellt, sodass Sie es nicht selbst erstellen müssen. Sie können jedoch [`setDragImage()`](/de/docs/Web/API/DataTransfer/setDragImage) verwenden, um ein benutzerdefiniertes Drag-Feedback-Bild anzugeben.

```js
event.dataTransfer.setDragImage(image, xOffset, yOffset);
```

Drei Argumente sind notwendig. Das erste ist ein Verweis auf ein Bild. Dieser Verweis wird typischerweise auf ein `<img>`-Element erfolgen, kann aber auch auf ein `<canvas>` oder ein anderes Element verweisen. Das Feedback-Bild wird aus dem erzeugt, wie das Bild auf dem Bildschirm aussieht, wobei Bilder in ihrer Originalgröße gezeichnet werden. Die zweiten und dritten Argumente der Methode [`setDragImage()`](/de/docs/Web/API/DataTransfer/setDragImage) sind die Offsets, bei denen das Bild relativ zum Mauszeiger angezeigt werden soll.

Es ist auch möglich, Bilder und Leinwände zu verwenden, die sich nicht in einem Dokument befinden. Diese Technik ist nützlich beim Zeichnen von benutzerdefinierten Drag-Bildern mit dem `<canvas>`-Element, wie im folgenden Beispiel:

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

In diesem Beispiel machen wir eine Leinwand zum Drag-Bild. Da die Leinwand 50×50 Pixel groß ist, verwenden wir Offsets von der Hälfte davon (`25`), sodass das Bild mittig auf dem Mauszeiger erscheint.

## Drag-Effekte

Beim Ziehen gibt es mehrere Operationen, die durchgeführt werden können. Die `copy`-Operation wird verwendet, um anzuzeigen, dass die zu ziehenden Daten von ihrem gegenwärtigen Standort an den Ablageort kopiert werden. Die `move`-Operation wird verwendet, um anzuzeigen, dass die zu ziehenden Daten verschoben werden, und die `link`-Operation wird verwendet, um anzuzeigen, dass eine Form der Beziehung oder Verbindung zwischen der Quelle und den Ablageorten hergestellt wird.

Sie können angeben, welche der drei Operationen für eine Ziehquelle zulässig sind, indem Sie die [`effectAllowed`](/de/docs/Web/API/DataTransfer/effectAllowed)-Eigenschaft innerhalb eines [`dragstart`](/de/docs/Web/API/HTMLElement/dragstart_event)-Event-Listeners festlegen.

```js
event.dataTransfer.effectAllowed = "copy";
```

In diesem Beispiel ist nur eine **Kopie** erlaubt.

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
  - : Der Standardwert, wenn der Effekt nicht festgelegt wurde, entspricht `all`

Beachten Sie, dass diese Werte genau so verwendet werden müssen, wie sie oben aufgeführt sind. Wenn die [`effectAllowed`](/de/docs/Web/API/DataTransfer/effectAllowed)-Eigenschaft auf `copyMove` gesetzt wird, ist eine Kopie oder Verschiebung zulässig, verhindert jedoch, dass der Benutzer eine Verknüpfungsoperation ausführt. Wenn Sie die [`effectAllowed`](/de/docs/Web/API/DataTransfer/effectAllowed)-Eigenschaft nicht ändern, ist jede Operation zulässig, genau wie beim `all`-Wert. Sie müssen diese Eigenschaft also nur anpassen, wenn Sie bestimmte Typen ausschließen möchten.

Während einer Drag-Operation kann ein Listener für die [`dragenter`](/de/docs/Web/API/HTMLElement/dragenter_event)- oder [`dragover`](/de/docs/Web/API/HTMLElement/dragover_event)-Ereignisse die [`effectAllowed`](/de/docs/Web/API/DataTransfer/effectAllowed)-Eigenschaft überprüfen, um zu sehen, welche Operationen erlaubt sind. Eine verwandte Eigenschaft, [`dropEffect`](/de/docs/Web/API/DataTransfer/dropEffect), sollte innerhalb eines dieser Ereignisse gesetzt werden, um zu spezifizieren, welche einzelne Operation durchgeführt werden soll. Gültige Werte für [`dropEffect`](/de/docs/Web/API/DataTransfer/dropEffect) sind `none`, `copy`, `move` oder `link`. Die Kombinationswerte werden für diese Eigenschaft nicht verwendet.

Beim [`dragenter`](/de/docs/Web/API/HTMLElement/dragenter_event)- und [`dragover`](/de/docs/Web/API/HTMLElement/dragover_event)-Ereignis wird die [`dropEffect`](/de/docs/Web/API/DataTransfer/dropEffect)-Eigenschaft auf den Effekt initialisiert, den der Benutzer anfordert. Der Benutzer kann den gewünschten Effekt durch Drücken von Modifikatortasten ändern. Obwohl die genauen Tasten je nach Plattform variieren, würden typischerweise die <kbd>Shift</kbd>- und <kbd>Control</kbd>-Tasten verwendet, um zwischen Kopieren, Bewegen und Verknüpfen zu wechseln. Der Mauszeiger wird sich ändern, um anzuzeigen, welche Operation gewünscht ist. Zum Beispiel könnte der Cursor für eine `copy` mit einem Pluszeichen daneben erscheinen.

Sie können die [`dropEffect`](/de/docs/Web/API/DataTransfer/dropEffect)-Eigenschaft während der [`dragenter`](/de/docs/Web/API/HTMLElement/dragenter_event)- oder [`dragover`](/de/docs/Web/API/HTMLElement/dragover_event)-Ereignisse ändern, wenn zum Beispiel ein bestimmtes Ablageziel nur bestimmte Operationen unterstützt. Sie können die [`dropEffect`](/de/docs/Web/API/DataTransfer/dropEffect)-Eigenschaft ändern, um den Benutzereffekt zu überschreiben und eine bestimmte Ablageoperation zu erzwingen. Beachten Sie, dass dieser Effekt einer der in der [`effectAllowed`](/de/docs/Web/API/DataTransfer/effectAllowed)-Eigenschaft aufgelisteten sein muss. Andernfalls wird er auf einen alternativen Wert gesetzt, der erlaubt ist.

```js
event.dataTransfer.dropEffect = "copy";
```

In diesem Beispiel ist `copy` der Effekt, der durchgeführt wird.

Sie können den Wert `none` verwenden, um anzuzeigen, dass an dieser Stelle kein Drop erlaubt ist, obwohl es bevorzugt wird, das Ereignis in diesem Fall nicht abzubrechen.

Innerhalb der [`drop`](/de/docs/Web/API/HTMLElement/drop_event)- und [`dragend`](/de/docs/Web/API/HTMLElement/dragend_event)-Ereignisse können Sie die [`dropEffect`](/de/docs/Web/API/DataTransfer/dropEffect)-Eigenschaft überprüfen, um festzustellen, welcher Effekt schließlich gewählt wurde. Wenn der gewählte Effekt `move` war, sollten die Originaldaten innerhalb des [`dragend`](/de/docs/Web/API/HTMLElement/dragend_event)-Ereignisses von der Quelle des Drags gelöscht werden.

## Festlegen von Drop-Zielen

Ein Listener für die [`dragenter`](/de/docs/Web/API/HTMLElement/dragenter_event)- und [`dragover`](/de/docs/Web/API/HTMLElement/dragover_event)-Ereignisse wird verwendet, um gültige Drop-Ziele anzuzeigen, das heißt, Orte, an denen gezogene Elemente fallen gelassen werden können. Die meisten Bereiche einer Webseite oder Anwendung sind keine gültigen Ablageziele. Daher ist die Standardverarbeitung dieser Ereignisse, keinen Drop zuzulassen.

Wenn Sie einen Drop zulassen möchten, müssen Sie das Standardverhalten durch Abbrechen sowohl der `dragenter`- als auch der `dragover`-Ereignisse verhindern. Sie können dies tun, indem Sie ihre [`preventDefault()`](/de/docs/Web/API/Event/preventDefault)-Methoden aufrufen:

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

Das Aufrufen der [`preventDefault()`](/de/docs/Web/API/Event/preventDefault)-Methode während sowohl des [`dragenter`](/de/docs/Web/API/HTMLElement/dragenter_event)- als auch des [`dragover`](/de/docs/Web/API/HTMLElement/dragover_event)-Ereignisses wird anzeigen, dass ein Drop an dieser Stelle erlaubt ist. In den meisten Fällen möchten Sie jedoch die [`preventDefault()`](/de/docs/Web/API/Event/preventDefault)-Methode nur unter bestimmten Bedingungen aufrufen (zum Beispiel, nur wenn ein Link gezogen wird).

Um dies zu tun, rufen Sie eine Funktion auf, die eine Bedingung überprüft und das Ereignis nur dann abbricht, wenn die Bedingung erfüllt ist. Wenn die Bedingung nicht erfüllt ist, brechen Sie das Ereignis nicht ab und ein Drop tritt an dieser Stelle nicht auf, wenn der Benutzer die Maustaste loslässt.

Am häufigsten wird ein Drop basierend auf dem Typ der Drag-Daten im `dataTransfer` akzeptiert oder abgelehnt — beispielsweise werden Bilder oder Links oder beides erlaubt. Um dies zu tun, können Sie die [`types`](/de/docs/Web/API/DataTransfer/types)-Eigenschaft des `dataTransfer`-Eigentums des Ereignisses (der [`dataTransfer`](/de/docs/Web/API/DragEvent/dataTransfer)) überprüfen. Die [`types`](/de/docs/Web/API/DataTransfer/types)-Eigenschaft gibt ein Array der String-Typen zurück, die hinzugefügt wurden, als der Drag begann, in der Reihenfolge vom bedeutendsten zum am wenigsten bedeutenden.

```js
function doDragOver(event) {
  const isLink = event.dataTransfer.types.includes("text/uri-list");
  if (isLink) {
    event.preventDefault();
  }
}
```

In diesem Beispiel verwenden wir die Methode `includes`, um zu überprüfen, ob der Typ [`text/uri-list`](/de/docs/Web/API/HTML_Drag_and_Drop_API/Recommended_drag_types#dragging_links) in der Liste der Typen vorhanden ist. Wenn dies der Fall ist, werden wir das Ereignis abbrechen, sodass ein Drop erlaubt sein kann. Wenn die Drag-Daten keinen Link enthalten, wird das Ereignis nicht abgebrochen, und ein Drop kann an diesem Ort nicht auftreten.

Sie möchten möglicherweise auch gleichzeitig die [`effectAllowed`](/de/docs/Web/API/DataTransfer/effectAllowed)-, [`dropEffect`](/de/docs/Web/API/DataTransfer/dropEffect)-Eigenschaft oder beide Eigenschaften festlegen, wenn Sie spezifischer sein möchten über die Art der durchzuführenden Operation. Natürlich hat das Ändern einer der beiden Eigenschaften keine Auswirkungen, wenn Sie das Ereignis nicht ebenfalls abbrechen.

## Drop-Feedback

Es gibt mehrere Möglichkeiten, wie Sie dem Benutzer anzeigen können, dass an einem bestimmten Ort ein Drop erlaubt ist. Der Mauszeiger wird je nach Wert der [`dropEffect`](/de/docs/Web/API/DataTransfer/dropEffect)-Eigenschaft entsprechend aktualisiert.

Obwohl das genaue Erscheinungsbild von der Plattform des Benutzers abhängt, wird in der Regel beispielsweise ein Pluszeichen-Symbol für eine `copy` angezeigt und ein "Hier kann nicht abgelegt werden"-Symbol angezeigt, wenn ein Drop nicht erlaubt ist. Dieses Mauszeiger-Feedback ist in vielen Fällen ausreichend.

Für komplexere visuelle Effekte können Sie während des [`dragenter`](/de/docs/Web/API/HTMLElement/dragenter_event)-Ereignisses andere Operationen durchführen. Zum Beispiel, indem Sie ein Element an der Stelle einfügen, an der das Drop stattfinden wird. Dies könnte ein Einfügepunkt oder ein Element sein, das das gezogene Element in seiner neuen Position darstellt. Um dies zu tun, könnten Sie ein [`<img>`](/de/docs/Web/HTML/Element/img)-Element erstellen und es während des [`dragenter`](/de/docs/Web/API/HTMLElement/dragenter_event)-Ereignisses in das Dokument einfügen.

Das [`dragover`](/de/docs/Web/API/HTMLElement/dragover_event)-Ereignis wird bei dem Element ausgelöst, auf das der Mauszeiger zeigt. Natürlich müssen Sie möglicherweise den Einfügepunkt während eines [`dragover`](/de/docs/Web/API/HTMLElement/dragover_event)-Ereignisses ebenfalls verschieben. Sie können die [`clientX`](/de/docs/Web/API/MouseEvent/clientX)- und [`clientY`](/de/docs/Web/API/MouseEvent/clientY)-Eigenschaften des Ereignisses wie bei anderen Mausereignissen verwenden, um die Position des Mauszeigers zu bestimmen.

Schließlich wird das [`dragleave`](/de/docs/Web/API/HTMLElement/dragleave_event)-Ereignis bei einem Element ausgelöst, wenn der Drag das Element verlässt. Dies ist der Zeitpunkt, an dem Sie alle Einfügemarker oder Hervorhebungen entfernen sollten. Sie müssen dieses Ereignis nicht abbrechen. Das [`dragleave`](/de/docs/Web/API/HTMLElement/dragleave_event)-Ereignis wird immer ausgelöst, auch wenn der Drag abgebrochen wird, sodass Sie immer sicherstellen können, dass die Bereinigung des Einfügepunktes während dieses Ereignisses erfolgen kann.

## Ein Drop ausführen

Wenn der Benutzer die Maus loslässt, endet die Drag-and-Drop-Operation.

Wenn die Maus über einem Element losgelassen wird, das ein gültiges Drop-Ziel ist, das heißt, eines, das das letzte [`dragenter`](/de/docs/Web/API/HTMLElement/dragenter_event)- oder [`dragover`](/de/docs/Web/API/HTMLElement/dragover_event)-Ereignis abgebrochen hat, wird der Drop erfolgreich sein, und ein [`drop`](/de/docs/Web/API/HTMLElement/drop_event)-Ereignis wird beim Ziel ausgelöst. Andernfalls wird die Drag-Operation abgebrochen, und es wird kein [`drop`](/de/docs/Web/API/HTMLElement/drop_event)-Ereignis ausgelöst.

Während des [`drop`](/de/docs/Web/API/HTMLElement/drop_event)-Ereignisses sollten Sie die Daten, die fallen gelassen wurden, aus dem Ereignis abrufen und an der Ablagestelle einfügen. Sie können die [`dropEffect`](/de/docs/Web/API/DataTransfer/dropEffect)-Eigenschaft verwenden, um zu bestimmen, welche Drag-Operation gewünscht war.

Wie bei allen Drag-bezogenen Ereignissen enthält die [`dataTransfer`](/de/docs/Web/API/DataTransfer)-Eigenschaft des Ereignisses die Daten, die gezogen werden. Die Methode [`getData()`](/de/docs/Web/API/DataTransfer/getData) kann verwendet werden, um die Daten erneut abzurufen.

```js
function onDrop(event) {
  const data = event.dataTransfer.getData("text/plain");
  event.target.textContent = data;
  event.preventDefault();
}
```

Die Methode [`getData()`](/de/docs/Web/API/DataTransfer/getData) benötigt ein Argument, den Typ der abzurufenden Daten. Sie gibt den String-Wert zurück, der festgelegt wurde, als [`setData()`](/de/docs/Web/API/DataTransfer/setData) zu Beginn der Drag-Operation aufgerufen wurde. Ein leerer String wird zurückgegeben, wenn Daten dieses Typs nicht existieren. (Natürlich würden Sie jedoch wahrscheinlich wissen, dass der richtige Datentyp verfügbar war, da er während eines [`dragover`](/de/docs/Web/API/HTMLElement/dragover_event)-Ereignisses zuvor überprüft wurde.)

Im hier gezeigten Beispiel, nachdem die Daten abgerufen wurden, fügen wir den String als Textinhalt des Ziels ein. Dies hat den Effekt, den gezogenen Text dort einzufügen, wo er fallengelassen wurde, vorausgesetzt, das Abgabeziel ist ein Textbereich wie ein `p`- oder `div`-Element.

Auf einer Webseite sollten Sie die [`preventDefault()`](/de/docs/Web/API/Event/preventDefault)-Methode des Ereignisses aufrufen, wenn Sie den Drop akzeptiert haben, damit das Standardverhalten des Browsers nicht auch durch die abgelegten Daten ausgelöst wird. Zum Beispiel wird in Firefox beim Ziehen eines Links zu einer Webseite der Link geöffnet. Durch Abbrechen des Ereignisses wird dieses Verhalten verhindert.

Sie können auch andere Datentypen abrufen. Wenn es sich bei den Daten um einen Link handelt, sollte er den Typ [`text/uri-list`](/de/docs/Web/API/HTML_Drag_and_Drop_API/Recommended_drag_types#dragging_links) haben. Sie könnten dann einen Link in den Inhalt einfügen.

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

Dieses Beispiel fügt einen Link aus den gezogenen Daten ein. Wie der Name schon sagt, kann der Typ [`text/uri-list`](/de/docs/Web/API/HTML_Drag_and_Drop_API/Recommended_drag_types#dragging_links) tatsächlich eine Liste von URLs enthalten, jede auf einer separaten Zeile. Der obige Code verwendet [`split`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/split), um den String in Zeilen aufzuteilen, durchläuft dann die Liste der Zeilen und fügt jeden als Link in das Dokument ein. (Beachten Sie auch, dass Links, die mit einem Nummernzeichen (`#`) beginnen, übersprungen werden, da diese Kommentare sind.)

Für einfache Fälle können Sie den speziellen Typ `URL` verwenden, um nur die erste gültige URL in der Liste abzurufen. Zum Beispiel:

```js
const link = event.dataTransfer.getData("URL");
```

Dies eliminiert die Notwendigkeit, selbst nach Kommentaren zu suchen oder durch Zeilen zu iterieren. Es ist jedoch auf nur die erste URL in der Liste beschränkt.

Der Typ `URL` ist ein spezieller Typ. Er wird nur als Abkürzung verwendet und erscheint nicht in der Liste der in der [`types`](/de/docs/Web/API/DataTransfer/types)-Eigenschaft angegebenen Typen.

Manchmal unterstützen Sie möglicherweise einige unterschiedliche Formate und möchten die Daten abrufen, die am spezifischsten sind, die unterstützt werden. Im folgenden Beispiel werden drei Formate von einem Drop-Ziel unterstützt.

Das folgende Beispiel gibt die mit dem am besten unterstützten Format verknüpften Daten zurück:

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

## Abschluss eines Drags

Sobald der Drag abgeschlossen ist, wird ein [`dragend`](/de/docs/Web/API/HTMLElement/dragend_event)-Ereignis an der Quelle des Drags ausgelöst (dasselbe Element, das das [`dragstart`](/de/docs/Web/API/HTMLElement/dragstart_event)-Ereignis erhalten hat). Dieses Ereignis wird ausgelöst, egal ob der Drag erfolgreich war oder abgebrochen wurde. Sie können jedoch die [`dropEffect`](/de/docs/Web/API/DataTransfer/dropEffect)-Eigenschaft verwenden, um festzustellen, welche Ablageoperation durchgeführt wurde.

Wenn die [`dropEffect`](/de/docs/Web/API/DataTransfer/dropEffect)-Eigenschaft während eines [`dragend`](/de/docs/Web/API/HTMLElement/dragend_event) den Wert `none` hat, wurde der Drag abgebrochen. Andernfalls gibt der Effekt an, welche Operation durchgeführt wurde. Die Quelle kann diese Informationen nach einer `move`-Operation verwenden, um das gezogene Element von der alten Position zu entfernen.

Ein Drop kann innerhalb desselben Fensters oder über eine andere Anwendung erfolgen. Das [`dragend`](/de/docs/Web/API/HTMLElement/dragend_event)-Ereignis wird in jedem Fall ausgelöst. Die [`screenX`](/de/docs/Web/API/MouseEvent/screenX)- und [`screenY`](/de/docs/Web/API/MouseEvent/screenY)-Eigenschaften des Ereignisses werden auf die Bildschirmkoordinaten gesetzt, an denen die Ablage erfolgt ist.

Nachdem das [`dragend`](/de/docs/Web/API/HTMLElement/dragend_event)-Ereignis die Propagierung abgeschlossen hat, ist die Drag-and-Drop-Operation abgeschlossen.

## Siehe auch

- [HTML Drag and Drop API (Überblick)](/de/docs/Web/API/HTML_Drag_and_Drop_API)
- [Empfohlene Drag-Typen](/de/docs/Web/API/HTML_Drag_and_Drop_API/Recommended_drag_types)
- [HTML Living Standard: Drag and Drop](https://html.spec.whatwg.org/multipage/interaction.html#dnd)
