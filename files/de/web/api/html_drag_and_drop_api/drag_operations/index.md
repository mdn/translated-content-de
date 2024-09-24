---
title: Ziehoperationen
slug: Web/API/HTML_Drag_and_Drop_API/Drag_operations
l10n:
  sourceCommit: 7972ac25580ffbfb160e6d40013bbab3013d7cbe
---

{{DefaultAPISidebar("HTML Drag and Drop API")}}

Das Folgende beschreibt die Schritte, die während einer Drag-and-Drop-Operation auftreten.

Die in diesem Dokument beschriebenen Ziehoperationen verwenden das {{domxref("DataTransfer")}}-Interface. Dieses Dokument verwendet _nicht_ das {{domxref("DataTransferItem")}}-Interface noch das {{domxref("DataTransferItemList")}}-Interface.

## Das draggable-Attribut

Auf einer Webseite gibt es bestimmte Fälle, in denen ein Standard-Ziehverhalten verwendet wird. Dazu gehören Textauswahlen, Bilder und Links. Wenn ein Bild oder ein Link gezogen wird, wird die URL des Bildes oder Links als Ziehdaten gesetzt, und ein Ziehvorgang beginnt. Für andere Elemente müssen diese Teil einer Auswahl sein, damit ein Standard-Ziehverhalten auftritt. Um dies zu sehen, wählen Sie einen Bereich einer Webseite aus und klicken und halten Sie dann die Maustaste und ziehen Sie die Auswahl. Eine plattformspezifische Darstellung der Auswahl wird angezeigt und folgt dem Mauszeiger während des Ziehvorgangs. Dieses Verhalten ist jedoch nur das Standard-Ziehverhalten, wenn keine Listener die zu ziehenden Daten anpassen.

In HTML sind abgesehen vom Standardverhalten für Bilder, Links und Auswahlen keine anderen Elemente standardmäßig ziehbar.

Um andere HTML-Elemente ziehbar zu machen, müssen drei Dinge getan werden:

1. Setzen Sie das [`draggable`](/de/docs/Web/HTML/Global_attributes#draggable)-Attribut auf `"true"` für das Element, das ziehbar gemacht werden soll.
2. Fügen Sie einen Listener für das {{domxref("HTMLElement/dragstart_event", "dragstart")}}-Ereignis hinzu.
3. [Setzen Sie die Ziehdaten](/de/docs/Web/API/DataTransfer/setData) in dem obigen Listener.

Hier ist ein Beispiel, das es erlaubt, einen Abschnitt von Inhalten zu ziehen.

```html
<p draggable="true">Dieser Text <strong>kann</strong> gezogen werden.</p>
```

```js
const draggableElement = document.querySelector('p[draggable="true"]');

draggableElement.addEventListener("dragstart", (event) =>
  event.dataTransfer.setData("text/plain", "Dieser Text kann gezogen werden"),
);
```

Das [`draggable`](/de/docs/Web/HTML/Global_attributes#draggable)-Attribut ist auf `"true"` gesetzt, sodass dieses Element ziehbar wird. Wenn dieses Attribut weggelassen oder auf `"false"` gesetzt wird, würde das Element nicht gezogen werden, und stattdessen würde der Text ausgewählt.

Das [`draggable`](/de/docs/Web/HTML/Global_attributes#draggable)-Attribut kann auf jedes Element angewendet werden, einschließlich Bilder und Links. Für diese beiden ist der Standardwert jedoch `true`, sodass Sie das [`draggable`](/de/docs/Web/HTML/Global_attributes#draggable)-Attribut nur mit einem Wert von `false` verwenden würden, um das Ziehen dieser Elemente zu deaktivieren.

> [!NOTE]
> Wenn ein Element ziehbar gemacht wird, können Text oder andere Elemente innerhalb davon nicht mehr auf die normale Weise durch Klicken und Ziehen mit der Maus ausgewählt werden. Stattdessen muss der Benutzer die <kbd>Alt</kbd>-Taste gedrückt halten, um Text mit der Maus auszuwählen, oder die Tastatur verwenden.

## Beginn einer Ziehoperation

In diesem Beispiel fügen wir einen Listener für das {{domxref("HTMLElement/dragstart_event", "dragstart")}}-Ereignis hinzu, indem wir die `addEventListener()`-Methode verwenden.

```html
<p draggable="true">Dieser Text <strong>kann</strong> gezogen werden.</p>
```

```js
const draggableElement = document.querySelector('p[draggable="true"]');
draggableElement.addEventListener("dragstart", (event) =>
  event.dataTransfer.setData("text/plain", "Dieser Text kann gezogen werden"),
);
```

Wenn ein Benutzer beginnt zu ziehen, wird das {{domxref("HTMLElement/dragstart_event", "dragstart")}}-Ereignis ausgelöst.

In diesem Beispiel wird der {{domxref("HTMLElement/dragstart_event", "dragstart")}}-Listener dem ziehbaren Element selbst hinzugefügt. Sie könnten jedoch auch auf einen höheren Vorfahren hören, da Ziehereignisse wie die meisten anderen Ereignisse nach oben wandern.

Innerhalb des {{domxref("HTMLElement/dragstart_event", "dragstart")}}-Ereignisses können Sie die **Ziehdaten**, das **Feedback-Bild** und die **Zieheffekte** angeben, die alle unten beschrieben werden. Jedoch sind nur die **Ziehdaten** erforderlich. (Das Standardbild und die Zieheffekte sind in den meisten Situationen geeignet.)

## Ziehdaten

Alle {{domxref("DragEvent")}}-Objekte haben eine Eigenschaft namens {{domxref("DragEvent.dataTransfer","dataTransfer")}}, die die Ziehdaten enthält (`dataTransfer` ist ein {{domxref("DataTransfer")}}-Objekt).

Wenn ein Ziehvorgang auftritt, müssen Daten mit dem Ziehvorgang verbunden werden, die identifizieren, _was_ gezogen wird. Zum Beispiel, wenn der ausgewählte Text innerhalb eines Textfeldes gezogen wird, sind die mit dem _Ziehdaten-Item_ verbundenen Daten der Text selbst. Ähnlich verhält es sich, wenn ein Link auf einer Webseite gezogen wird, ist das Ziehdaten-Item die URL des Links.

Der {{domxref("DataTransfer")}} enthält zwei Informationen, den **Typ** (oder das Format) der Daten und den **Wert** der Daten. Das Format ist ein Typstring (wie [`text/plain`](/de/docs/Web/API/HTML_Drag_and_Drop_API/Recommended_drag_types#dragging_text) für Textdaten), und der Wert ist ein Textstring. Wenn das Ziehen beginnt, fügen Sie Daten hinzu, indem Sie einen Typ und die Daten bereitstellen. Während des Ziehens, in einem Event-Listener für die {{domxref("HTMLElement/dragenter_event", "dragenter")}} und {{domxref("HTMLElement/dragover_event", "dragover")}}-Ereignisse, verwenden Sie die Datentypen der gezogen werdenen Daten, um zu überprüfen, ob ein Ablegen erlaubt ist. Zum Beispiel würde ein Ablageziel, das Links akzeptiert, auf den Typ [`text/uri-list`](/de/docs/Web/API/HTML_Drag_and_Drop_API/Recommended_drag_types#dragging_links) prüfen. Während eines Ablegevorgangs würde ein Listener die gezogenen Daten abrufen und an der Ablagestelle einfügen.

Die {{domxref("DataTransfer")}}-Eigenschaft {{domxref("DataTransfer.types","types")}} gibt eine Liste von MIME-ähnlichen Typsträngen zurück, wie [`text/plain`](/de/docs/Web/API/HTML_Drag_and_Drop_API/Recommended_drag_types#dragging_text) oder [`image/jpeg`](/de/docs/Web/API/HTML_Drag_and_Drop_API/Recommended_drag_types#dragging_images). Sie können auch Ihre eigenen Typen erstellen. Die am häufigsten verwendeten Typen sind im Artikel [Empfohlene Zieh-Typen](/de/docs/Web/API/HTML_Drag_and_Drop_API/Recommended_drag_types) aufgeführt.

Ein Ziehvorgang kann Daten-Items aus verschiedenen Typen enthalten. Dies ermöglicht es, Daten in spezifischeren Typen bereitzustellen, oftmals benutzerdefinierte Typen, und dennoch Ersatzzdaten für Ablageziele bereitzustellen, die spezifischere Typen nicht unterstützen. In der Regel ist der am wenigsten spezifische Typ normaler Textdaten mit dem Typ [`text/plain`](/de/docs/Web/API/HTML_Drag_and_Drop_API/Recommended_drag_types#dragging_text). Diese Daten werden eine einfache Textdarstellung sein.

Um ein Ziehdaten-Item innerhalb des {{domxref("DragEvent.dataTransfer","dataTransfer")}} zu setzen, verwenden Sie die Methode {{domxref("DataTransfer.setData","setData()")}}. Sie nimmt zwei Argumente an: den Datentyp und den Datenwert. Zum Beispiel:

```js
event.dataTransfer.setData("text/plain", "Text to drag");
```

In diesem Fall ist der Datenwert "Text to drag" und hat das Format [`text/plain`](/de/docs/Web/API/HTML_Drag_and_Drop_API/Recommended_drag_types#dragging_text).

Sie können Daten in mehreren Formaten bereitstellen. Dafür rufen Sie die {{domxref("DataTransfer.setData","setData()")}}-Methode mehrmals mit unterschiedlichen Formaten auf. Sie sollten sie mit Formaten in der Reihenfolge vom spezifischsten zum unspezifischsten aufrufen.

```js
const dt = event.dataTransfer;
dt.setData("application/x.bookmark", bookmarkString);
dt.setData("text/uri-list", "https://www.mozilla.org");
dt.setData("text/plain", "https://www.mozilla.org");
```

Hier werden Daten in drei verschiedenen Typen hinzugefügt. Der erste Typ, `application/x.bookmark`, ist ein benutzerdefinierter Typ. Andere Anwendungen werden diesen Typ nicht unterstützen, aber Sie können einen benutzerdefinierten Typ für Ziehvorgänge zwischen Bereichen derselben Seite oder Anwendung verwenden.

Indem wir Daten auch in anderen Typen bereitstellen, können wir inoltreicher Unterstützung für Ziehvorgänge in anderen Anwendungen in weniger spezifischen Formen gewähren. Der `application/x.bookmark`-Typ kann Daten mit mehr Details für die Nutzung innerhalb der Anwendung bereitstellen, während die anderen Typen nur eine einzelne URL oder Textversion enthalten können.

Beachten Sie, dass in diesem Beispiel sowohl [`text/uri-list`](/de/docs/Web/API/HTML_Drag_and_Drop_API/Recommended_drag_types#dragging_links) als auch [`text/plain`](/de/docs/Web/API/HTML_Drag_and_Drop_API/Recommended_drag_types#dragging_text) dieselben Daten enthalten. Dies wird oft der Fall sein, muss aber nicht so sein.

Wenn Sie versuchen, dieselben Daten mit demselben Format zweimal hinzuzufügen, werden die neuen Daten die alten Daten ersetzen, jedoch an derselben Position innerhalb der Liste von Typen wie die alten Daten bleiben.

Sie können die Daten löschen, indem Sie die Methode {{domxref("DataTransfer.clearData","clearData()")}} verwenden, die ein Argument annimmt: den Typ der Daten, die entfernt werden sollen.

```js
event.dataTransfer.clearData("text/uri-list");
```

Das `type`-Argument der {{domxref("DataTransfer.clearData","clearData()")}}-Methode ist optional. Wenn der `type` nicht spezifiziert ist, werden die mit allen Typen verknüpften Daten entfernt. Wenn der Zug keine Ziehdaten-Items enthält oder alle Items anschließend gelöscht wurden, wird kein Zugvorgang stattfinden.

## Einstellen des Drag-Feedback-Bildes

Wenn ein Ziehvorgang auftritt, wird ein transparentes Bild aus dem Ziehelement (dem Element, bei dem das "{{domxref("HTMLElement/dragstart_event", "dragstart")}}"-Ereignis ausgelöst wird) generiert und folgt dem Benutzerzeiger während des Ziehens. Dieses Bild wird automatisch erstellt, sodass Sie es nicht selbst erstellen müssen. Sie können jedoch {{domxref("DataTransfer.setDragImage","setDragImage()")}} verwenden, um ein benutzerdefiniertes Drag-Feedback-Bild anzugeben.

```js
event.dataTransfer.setDragImage(image, xOffset, yOffset);
```

Drei Argumente sind erforderlich. Das erste ist eine Referenz auf ein Bild. Diese Referenz wird typischerweise ein `<img>`-Element sein, kann jedoch auch ein `<canvas>` oder ein anderes Element sein. Das Feedback-Bild wird von dem auf dem Bildschirm angezeigten Bild erzeugt, obwohl Bilder in ihrer Originalgröße gezeichnet werden. Die zweiten und dritten Argumente der {{domxref("DataTransfer.setDragImage","setDragImage()")}}-Methode sind Versatzwerte, wo das Bild relativ zum Mauszeiger erscheinen soll.

Es ist auch möglich, Bilder und Canvas zu verwenden, die sich nicht in einem Dokument befinden. Diese Technik ist nützlich, wenn Sie benutzerdefinierte Drag-Bilder mithilfe des Canvas-Elements zeichnen, wie im folgenden Beispiel:

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

In diesem Beispiel verwenden wir ein Canvas als Drag-Bild. Da das Canvas 50×50 Pixel groß ist, verwenden wir Versatzwerte von der Hälfte davon (`25`), sodass das Bild zentriert auf dem Mauszeiger erscheint.

## Zieheffekte

Beim Ziehen gibt es mehrere Operationen, die durchgeführt werden können. Die `copy`-Operation wird verwendet, um anzuzeigen, dass die gezogenen Daten von ihrem derzeitigen Standort zur Ablagestelle kopiert werden. Die `move`-Operation wird verwendet, um anzuzeigen, dass die gezogenen Daten verschoben werden, und die `link`-Operation wird verwendet, um anzuzeigen, dass eine Art von Beziehung oder Verbindung zwischen der Quelle und den Ablagestellen erstellt wird.

Sie können angeben, welche der drei Operationen für eine Ziehquelle erlaubt sind, indem Sie die {{domxref("DataTransfer.effectAllowed","effectAllowed")}}-Eigenschaft innerhalb eines {{domxref("HTMLElement/dragstart_event", "dragstart")}}-Ereignis-Listeners setzen.

```js
event.dataTransfer.effectAllowed = "copy";
```

In diesem Beispiel ist nur eine **Kopie** erlaubt.

Sie können die Werte auf verschiedene Weisen kombinieren:

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

Beachten Sie, dass diese Werte genau wie oben aufgeführt verwendet werden müssen. Wenn Sie beispielsweise die {{domxref("DataTransfer.effectAllowed","effectAllowed")}}-Eigenschaft auf `copyMove` setzen, wird nur eine Kopie oder ein Verschiebevorgang erlaubt, aber der Benutzer wird daran gehindert, eine Link-Operation durchzuführen. Wenn Sie die {{domxref("DataTransfer.effectAllowed","effectAllowed")}}-Eigenschaft nicht ändern, ist jede Operation erlaubt, genau wie beim '`all`'-Wert. Sie müssen diese Eigenschaft also nicht anpassen, es sei denn, Sie möchten bestimmte Typen ausschließen.

Während eines Ziehvorgangs kann ein Listener für die {{domxref("HTMLElement/dragenter_event", "dragenter")}}- oder {{domxref("HTMLElement/dragover_event", "dragover")}}-Ereignisse die {{domxref("DataTransfer.effectAllowed","effectAllowed")}}-Eigenschaft überprüfen, um zu sehen, welche Operationen erlaubt sind. Eine verwandte Eigenschaft, {{domxref("DataTransfer.dropEffect","dropEffect")}}, sollte innerhalb dieser Ereignisse gesetzt werden, um anzugeben, welche einzelne Operation durchgeführt werden soll. Gültige Werte für {{domxref("DataTransfer.dropEffect","dropEffect")}} sind `none`, `copy`, `move`, oder `link`. Die Kombinationswerte werden für diese Eigenschaft nicht verwendet.

Mit dem {{domxref("HTMLElement/dragenter_event", "dragenter")}} und {{domxref("HTMLElement/dragover_event", "dragover")}}-Ereignis ist die {{domxref("DataTransfer.dropEffect","dropEffect")}}-Eigenschaft auf den vom Benutzer angeforderten Effekt initialisiert. Der Benutzer kann den gewünschten Effekt durch Drücken von Modifikatortasten verändern. Auch wenn die genauen Tasten je nach Plattform variieren, werden typischerweise die <kbd>Shift</kbd>- und <kbd>Control</kbd>-Tasten verwendet, um zwischen Kopieren, Verschieben und Verlinken zu wechseln. Der Mauszeiger ändert sich, um den gewünschten Effekt anzuzeigen. Bei einer `copy` könnte beispielsweise ein Pluszeichen-Symbol neben dem Cursor erscheinen.

Sie können die {{domxref("DataTransfer.dropEffect","dropEffect")}}-Eigenschaft während des {{domxref("HTMLElement/dragenter_event", "dragenter")}} oder {{domxref("HTMLElement/dragover_event", "dragover")}}-Ereignisses ändern, wenn zum Beispiel ein bestimmtes Ablageziel nur bestimmte Operationen unterstützt. Sie können die {{domxref("DataTransfer.dropEffect","dropEffect")}}-Eigenschaft ändern, um den Benutzereffekt zu überschreiben und eine bestimmte Ablageoperation zu erzwingen. Beachten Sie, dass dieser Effekt einer der in der {{domxref("DataTransfer.effectAllowed","effectAllowed")}}-Eigenschaft aufgeführten sein muss. Andernfalls wird er auf einen alternativen, erlaubten Wert gesetzt.

```js
event.dataTransfer.dropEffect = "copy";
```

In diesem Beispiel wird eine Kopie als durchzuführender Effekt angegeben.

Sie können den Wert `none` verwenden, um anzuzeigen, dass kein Ablegen an diesem Ort erlaubt ist, obwohl es vorzuziehen ist, das Ereignis in diesem Fall nicht abzubrechen.

Innerhalb des {{domxref("HTMLElement/drop_event", "drop")}}- und {{domxref("HTMLElement/dragend_event", "dragend")}}-Ereignisses können Sie die {{domxref("DataTransfer.dropEffect","dropEffect")}}-Eigenschaft überprüfen, um festzustellen, welcher Effekt letztlich gewählt wurde. Wenn der gewählte Effekt "`move`" war, sollte die ursprüngliche Datenquelle im {{domxref("HTMLElement/dragend_event", "dragend")}}-Ereignis entfernt werden.

## Ablegeziele angeben

Ein Listener für die {{domxref("HTMLElement/dragenter_event", "dragenter")}}- und {{domxref("HTMLElement/dragover_event", "dragover")}}-Ereignisse wird verwendet, um gültige Ablegeziele anzuzeigen, d.h. Orte, an denen gezogene Elemente abgelegt werden können. Die meisten Bereiche einer Webseite oder Anwendung sind keine gültigen Ablageorte. Daher ist die standardmäßige Behandlung dieser Ereignisse, ein Ablegen nicht zuzulassen.

Wenn Sie ein Ablegen zulassen möchten, müssen Sie das Standardverhalten verhindern, indem Sie sowohl die `dragenter`- als auch die `dragover`-Ereignisse abbrechen. Sie können dies tun, indem Sie ihre {{domxref("Event.preventDefault","preventDefault()")}}-Methoden aufrufen:

```html
<div id="drop-target">Sie können ein ziehbares Element hierher ziehen und ablegen</div>
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

Durch den Aufruf der {{domxref("Event.preventDefault","preventDefault()")}}-Methode während des {{domxref("HTMLElement/dragenter_event", "dragenter")}}- und {{domxref("HTMLElement/dragover_event", "dragover")}}-Ereignisses wird angezeigt, dass ein Ablegen an diesem Ort erlaubt ist. Sie werden jedoch häufig die {{domxref("Event.preventDefault","preventDefault()")}}-Methode nur unter bestimmten Bedingungen aufrufen möchten (z. B. nur, wenn ein Link gezogen wird).

Um dies zu tun, rufen Sie eine Funktion auf, die eine Bedingung prüft, und brechen Sie das Ereignis nur ab, wenn die Bedingung erfüllt ist. Ist die Bedingung nicht erfüllt, brechen Sie das Ereignis nicht ab, und ein Ablegen wird nicht dort stattfinden, wenn der Benutzer die Maustaste loslässt.

Es ist am häufigsten, ein Ablegen basierend auf dem Typ der Ziehdaten im Datentransfer zu akzeptieren oder abzulehnen — beispielsweise das Zulassen von Bildern oder Links oder beidem. Um dies zu tun, können Sie die {{domxref("DataTransfer.types","types")}}-Eigenschaft des Ereignisses {{domxref("DragEvent.dataTransfer","dataTransfer")}} (Eigenschaft) überprüfen. Die {{domxref("DataTransfer.types","types")}}-Eigenschaft liefert ein Array der Typstrings, die hinzugefügt wurden, als das Ziehen begann, in der Reihenfolge vom signifikantesten zum weniger signifikanten.

```js
function doDragOver(event) {
  const isLink = event.dataTransfer.types.includes("text/uri-list");
  if (isLink) {
    event.preventDefault();
  }
}
```

In diesem Beispiel verwenden wir die Methode `includes`, um zu prüfen, ob der Typ [`text/uri-list`](/de/docs/Web/API/HTML_Drag_and_Drop_API/Recommended_drag_types#dragging_links) in der Liste der Typen vorhanden ist. Wenn dies der Fall ist, brechen wir das Ereignis ab, damit ein Ablegen erlaubt sein kann. Wenn die Ziehdaten keinen Link enthalten, wird das Ereignis nicht abgebrochen, und ein Ablegen kann an diesem Ort nicht stattfinden.

Sie möchten möglicherweise auch die {{domxref("DataTransfer.effectAllowed","effectAllowed")}} oder {{domxref("DataTransfer.dropEffect","dropEffect")}}-Eigenschaft oder beide gleichzeitig setzen, wenn Sie spezifischer über die Art der durchzuführenden Operation sein möchten. Natürlich hat eine Änderung einer der Eigenschaften keine Wirkung, wenn Sie das Ereignis ebenfalls nicht abbrechen.

## Drop-Feedback

Es gibt mehrere Möglichkeiten, wie Sie dem Benutzer anzeigen können, dass ein Ablegen an einem bestimmten Ort erlaubt ist. Der Mauszeiger wird je nach Wert der {{domxref("DataTransfer.dropEffect","dropEffect")}}-Eigenschaft entsprechend aktualisiert.

Auch wenn das genaue Erscheinungsbild von der Plattform des Benutzers abhängt, wird typischerweise beispielsweise ein Pluszeichen-Symbol für eine `copy` erscheinen, und ein "hier nicht ablegen"-Symbol wird erscheinen, wenn ein Ablegen nicht erlaubt ist. Dieses Mauszeiger-Feedback ist in vielen Fällen ausreichend.

Für komplexere visuelle Effekte können Sie während des {{domxref("HTMLElement/dragenter_event", "dragenter")}}-Ereignisses andere Operationen durchführen. Beispielsweise durch Einfügen eines Elements an der Stelle, an der das Ablegen erfolgen wird. Dies könnte ein Einfügemarker oder ein Element sein, das das gezogene Element in seiner neuen Position darstellt. Dazu könnten Sie ein [`<img>`](/de/docs/Web/HTML/Element/img)-Element erstellen und es während des {{domxref("HTMLElement/dragenter_event", "dragenter")}}-Ereignisses in das Dokument einfügen.

Das {{domxref("HTMLElement/dragover_event", "dragover")}}-Ereignis wird bei dem Element ausgelöst, auf das der Mauszeiger zeigt. Natürlich müssen Sie den Einfügemarker auch während eines {{domxref("HTMLElement/dragover_event", "dragover")}}-Ereignisses bewegen. Sie können die {{domxref("MouseEvent.clientX","clientX")}}- und {{domxref("MouseEvent.clientY","clientY")}}-Eigenschaften des Ereignisses wie bei anderen Mausereignissen verwenden, um die Position des Mauszeigers zu bestimmen.

Schließlich wird das {{domxref("HTMLElement/dragleave_event", "dragleave")}}-Ereignis bei einem Element ausgelöst, wenn das Ziehen das Element verlässt. Dies ist der Zeitpunkt, an dem Sie Einfügemarker oder Hervorhebungen entfernen sollten. Sie müssen dieses Ereignis nicht abbrechen. Das {{domxref("HTMLElement/dragleave_event", "dragleave")}}-Ereignis wird immer ausgelöst, auch wenn das Ziehen abgebrochen wird, sodass Sie sicherstellen können, dass eine Einfügemarker-Bereinigung während dieses Ereignisses erfolgen kann.

## Ein Ablegen durchführen

Wenn der Benutzer die Maus loslässt, endet die Drag-and-Drop-Operation.

Wenn die Maus über einem Element losgelassen wird, das ein gültiges Ablegeziel ist, d.h. eines, das das letzte {{domxref("HTMLElement/dragenter_event", "dragenter")}}- oder {{domxref("HTMLElement/dragover_event", "dragover")}}-Ereignis abgebrochen hat, dann wird das Ablegen erfolgreich sein, und ein {{domxref("HTMLElement/drop_event", "drop")}}-Ereignis wird am Ziel ausgelöst. Andernfalls wird die Ziehoperation abgebrochen, und kein {{domxref("HTMLElement/drop_event", "drop")}}-Ereignis wird ausgelöst.

Während des {{domxref("HTMLElement/drop_event", "drop")}}-Ereignisses sollten Sie die Daten abrufen, die abgelegt wurden, und sie an der Ablegestelle einfügen. Sie können die {{domxref("DataTransfer.dropEffect","dropEffect")}}-Eigenschaft verwenden, um festzustellen, welche Ziehoperation gewünscht war.

Wie bei allen ziehbezogenen Ereignissen wird die {{domxref("DataTransfer","dataTransfer")}}-Eigenschaft des Ereignisses die Daten enthalten, die gezogen werden. Die Methode {{domxref("DataTransfer.getData","getData()")}} kann verwendet werden, um die Daten erneut abzurufen.

```js
function onDrop(event) {
  const data = event.dataTransfer.getData("text/plain");
  event.target.textContent = data;
  event.preventDefault();
}
```

Die {{domxref("DataTransfer.getData","getData()")}}-Methode nimmt ein Argument an, den Typ der abzurufenden Daten. Sie gibt den Stringwert zurück, der zu Beginn der Ziehoperation bei Aufruf von {{domxref("DataTransfer.setData","setData()")}} festgelegt wurde. Ein leerer String wird zurückgegeben, wenn keine Daten dieses Typs existieren. (Natürlich wüssten Sie jedoch wahrscheinlich, dass der richtige Typ von Daten verfügbar war, da er während eines {{domxref("HTMLElement/dragover_event", "dragover")}}-Ereignisses zuvor überprüft wurde.)

Im hier gezeigten Beispiel fügen wir den abgerufenen String als Textinhalt des Ziels ein. Dies hat den Effekt, den gezogenen Text an der Stelle, an der er abgelegt wurde, einzufügen, vorausgesetzt, das Ablegeziel ist ein Textbereich wie ein `p` oder `div`-Element.

Auf einer Webseite sollten Sie die {{domxref("Event.preventDefault","preventDefault()")}}-Methode des Ereignisses aufrufen, wenn Sie das Ablegen akzeptiert haben, sodass das Standardverhalten des Browsers durch die abgelegten Daten nicht ebenfalls ausgelöst wird. Zum Beispiel wird Firefox beim Ziehen eines Links auf eine Webseite den Link öffnen. Durch Abbrechen des Ereignisses wird dieses Verhalten verhindert.

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

Dieses Beispiel fügt einen Link aus den gezogenen Daten ein. Wie der Name andeutet, kann der Typ [`text/uri-list`](/de/docs/Web/API/HTML_Drag_and_Drop_API/Recommended_drag_types#dragging_links) tatsächlich eine Liste von URLs enthalten, wobei jede URL auf einer separaten Zeile ist. Der obige Code verwendet [`split`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/split), um den String in Zeilen zu unterteilen, iteriert dann über die Liste der Zeilen und fügt jede als Link in das Dokument ein. (Beachten Sie auch, dass Links, die mit einem Nummernzeichen (`#`) beginnen, übersprungen werden, da dies Kommentare sind.)

Für einfache Fälle können Sie den speziellen Typ `URL` verwenden, um einfach die erste gültige URL in der Liste abzurufen. Zum Beispiel:

```js
const link = event.dataTransfer.getData("URL");
```

Dies eliminiert die Notwendigkeit, selbst auf Kommentare zu prüfen oder durch Zeilen zu iterieren. Allerdings ist es auf die erste URL in der Liste beschränkt.

Der `URL`-Typ ist ein spezieller Typ. Es wird nur als Abkürzung verwendet und erscheint nicht in der Liste der in der {{domxref("DataTransfer.types","types")}}-Eigenschaft spezifizierten Typen.

Manchmal möchten Sie einige unterschiedliche Formate unterstützen und die Daten abrufen, die am spezifischsten unterstützt werden. Im folgenden Beispiel werden drei Formate von einem Ablegeziel unterstützt.

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
    // Verwenden Sie diesen Datentyp…
  }
  event.preventDefault();
}
```

## Abschluss eines Ziehvorgangs

Sobald das Ziehen abgeschlossen ist, wird ein {{domxref("HTMLElement/dragend_event", "dragend")}}-Ereignis beim Ausgangspunkt des Ziehens ausgelöst (dem gleichen Element, das das {{domxref("HTMLElement/dragstart_event", "dragstart")}}-Ereignis empfangen hat). Dieses Ereignis wird ausgelöst, unabhängig davon, ob das Ziehen erfolgreich war oder abgebrochen wurde. Sie können jedoch die {{domxref("DataTransfer.dropEffect","dropEffect")}}-Eigenschaft verwenden, um festzustellen, welche Ablegeoperation stattgefunden hat.

Wenn die {{domxref("DataTransfer.dropEffect","dropEffect")}}-Eigenschaft während eines {{domxref("HTMLElement/dragend_event", "dragend")}} den Wert `none` hat, wurde das Ziehen abgebrochen. Andernfalls gibt der Effekt an, welche Operation durchgeführt wurde. Die Quelle kann diese Information nach einer `move`-Operation verwenden, um das gezogene Element vom alten Ort zu entfernen.

Ein Ablegen kann innerhalb desselben Fensters oder über eine andere Anwendung erfolgen. Das {{domxref("HTMLElement/dragend_event", "dragend")}}-Ereignis wird unabhängig davon immer ausgelöst. Die {{domxref("MouseEvent.screenX","screenX")}}- und {{domxref("MouseEvent.screenY","screenY")}}-Eigenschaften des Ereignisses werden auf die Bildschirmkoordinaten gesetzt, an denen das Ablegen stattgefunden hat.

Nachdem das {{domxref("HTMLElement/dragend_event", "dragend")}}-Ereignis die Verbreitung beendet hat, ist die Drag-and-Drop-Operation abgeschlossen.

## Siehe auch

- [HTML Drag and Drop API (Übersicht)](/de/docs/Web/API/HTML_Drag_and_Drop_API)
- [Empfohlene Zieh-Typen](/de/docs/Web/API/HTML_Drag_and_Drop_API/Recommended_drag_types)
- [HTML Living Standard: Drag and Drop](https://html.spec.whatwg.org/multipage/interaction.html#dnd)
