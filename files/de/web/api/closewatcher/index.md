---
title: CloseWatcher
slug: Web/API/CloseWatcher
l10n:
  sourceCommit: 77d90a23ee0a3b5486a7963f68ad4e56efb06a7b
---

{{APIRef("HTML DOM")}} {{SeeCompatTable}}

Das `CloseWatcher`-Interface ermöglicht es, einer benutzerdefinierten UI-Komponente mit Öffnungs- und Schließsemantik, auf gerätespezifische Schließaktionen auf die gleiche Weise wie eine integrierte Komponente zu reagieren.

{{InheritanceDiagram}}

Das `CloseWatcher`-Interface erbt von [`EventTarget`](/de/docs/Web/API/EventTarget).

## Konstruktor

- [`CloseWatcher()`](/de/docs/Web/API/CloseWatcher/CloseWatcher) {{Experimental_Inline}}
  - : Erstellt eine neue Instanz von `CloseWatcher`.

## Instanzmethoden

_Dieses Interface erbt auch Methoden von seinem Elternteil, [`EventTarget`](/de/docs/Web/API/EventTarget)._

- [`CloseWatcher.requestClose()`](/de/docs/Web/API/CloseWatcher/requestClose) {{Experimental_Inline}}
  - : Löst ein `cancel`-Ereignis aus und, wenn dieses Ereignis nicht mit [`Event.preventDefault()`](/de/docs/Web/API/Event/preventDefault) abgesagt wird, wird weiterhin ein `close`-Ereignis ausgelöst und schließlich der Close Watcher deaktiviert, als ob `destroy()` aufgerufen wurde.
- [`CloseWatcher.close()`](/de/docs/Web/API/CloseWatcher/close) {{Experimental_Inline}}
  - : Löst sofort das `close`-Ereignis aus, ohne zuvor `cancel` auszulösen, und deaktiviert den Close Watcher, als ob `destroy()` aufgerufen wurde.
- [`CloseWatcher.destroy()`](/de/docs/Web/API/CloseWatcher/destroy) {{Experimental_Inline}}
  - : Deaktiviert den Close Watcher, sodass er keine `close`-Ereignisse mehr empfängt.

## Ereignisse

- [`cancel`](/de/docs/Web/API/CloseWatcher/cancel_event) {{Experimental_Inline}}
  - : Ein Ereignis, das vor dem `close`-Ereignis ausgelöst wird, damit `close` verhindert werden kann.
- [`close`](/de/docs/Web/API/CloseWatcher/close_event) {{Experimental_Inline}}
  - : Ein Ereignis, das ausgelöst wird, wenn eine Schließanforderung empfangen wurde.

## Beschreibung

Einige UI-Komponenten haben ein "Schließverhalten", was bedeutet, dass die Komponente erscheint und der Benutzer sie schließen kann, wenn er mit ihr fertig ist. Beispiele hierfür sind: Seitenleisten, Pop-ups, Dialoge oder Benachrichtigungen.

Benutzer erwarten im Allgemeinen, dass sie ein bestimmtes Mechanismus verwenden können, um diese Elemente zu schließen, und der Mechanismus ist tendenziell gerätespezifisch. Beispielsweise könnte es auf einem Gerät mit Tastatur die <kbd>Esc</kbd>-Taste sein, aber Android könnte die Zurück-Taste verwenden. Für integrierte Komponenten, wie [popover](/de/docs/Web/API/Popover_API) oder {{htmlelement("dialog")}}-Elemente, kümmert sich der Browser um diese Unterschiede und schließt das Element, wenn der Benutzer die dem Gerät entsprechende Schließaktion ausführt. Wenn ein Webentwickler jedoch seine eigene schließbare UI-Komponente implementiert (zum Beispiel eine Seitenleiste), ist es schwierig, dieses gerätespezifische Schließverhalten zu implementieren.

Das `CloseWatcher`-Interface löst dieses Problem, indem es ein `cancel`-Ereignis, gefolgt von einem `close`-Ereignis, bereitstellt, wenn der Benutzer die gerätespezifische Schließaktion ausführt.
Webanwendungen können den `onclose`-Handler verwenden, um das UI-Element als Reaktion auf das gerätespezifische Ereignis zu schließen.
Sie können dieselben Ereignisse auch als Reaktion auf den normalen Schließmechanismus des UI-Elements auslösen und dann das gemeinsame `close`-Ereignis sowohl für die anwendungs- als auch für die gerätespezifische Schließaktion implementieren.
Sobald der `onclose`-Ereignishandler abgeschlossen ist, wird der `CloseWatcher` zerstört und die Ereignisse werden nicht mehr ausgelöst.

In einigen Anwendungen darf das UI-Element nur geschlossen werden, wenn es sich in einem bestimmten Zustand befindet; beispielsweise, wenn einige benötigte Informationen ausgefüllt sind.
Um diese Fälle zu adressieren, können Anwendungen verhindern, dass das `close`-Ereignis ausgegeben wird, indem sie einen Handler für das `cancel`-Ereignis implementieren, der [`Event.preventDefault()`](/de/docs/Web/API/Event/preventDefault) aufruft, wenn das UI-Element nicht bereit ist, geschlossen zu werden.

Sie können `CloseWatcher`-Instanzen ohne [Benutzeraktivierung](/de/docs/Web/Security/User_activation) erstellen, was nützlich ist, um Fälle wie Inaktivitätszeitüberschreitung-Dialoge zu implementieren. Wenn Sie jedoch mehr als einen `CloseWatcher` ohne Benutzeraktivierung erstellen, werden die Watcher gruppiert, sodass eine einzelne Schließanforderung beide schließt.
Darüber hinaus muss der erste Close Watcher nicht unbedingt ein `CloseWatcher`-Objekt sein: Es könnte ein modales Dialogelement oder ein durch ein Element mit dem Popover-Attribut generiertes Popover sein.

## Beispiele

### Verarbeitung von Schließanforderungen

In diesem Beispiel haben Sie Ihre eigene UI-Komponente (einen Picker) und möchten sowohl die Standard-Schließmethode der Plattform (z.B. die <kbd>Esc</kbd>-Taste) als auch Ihre benutzerdefinierte Schließmethode (eine Schaltfläche zum Schließen) unterstützen.

Sie erstellen einen `CloseWatcher`, um alle `close`-Ereignisse zu verarbeiten.

Der `onclick`-Handler Ihrer UI-Komponente kann `requestClose` aufrufen, um ein Schließen anzufordern und Ihre Schließanforderung über denselben `onclose`-Handler zu leiten, den die Plattform-Schließmethode verwendet.

```js
const watcher = new CloseWatcher();
const picker = setUpAndShowPickerDOMElement();
let chosenValue = null;

watcher.onclose = () => {
  chosenValue = picker.querySelector("input").value;
  picker.remove();
};

picker.querySelector(".close-button").onclick = () => watcher.requestClose();
```

### Schließen einer Seitenleiste mit einer Plattform-Schließanforderung

In diesem Beispiel haben wir eine Seitenleistenkomponente, die angezeigt wird, wenn eine "Öffnen"-Schaltfläche ausgewählt ist und entweder über eine "Schließen"-Schaltfläche oder plattformnative Mechanismen ausgeblendet wird.
Um es interessanter zu machen, ist dies ein Live-Beispiel!

Beachten Sie auch, dass das Beispiel etwas konstruiert ist, da wir normalerweise eine Umschaltschaltfläche verwenden würden, um den Zustand einer Seitenleiste zu ändern.
Wir könnten dies sicherlich tun, aber die Verwendung separater "Öffnen"- und "Schließen"-Schaltflächen erleichtert es, die Funktion zu demonstrieren.

#### HTML

Das HTML definiert "Öffnen"- und "Schließen"-{{htmlelement("button")}}-Elemente sowie {{htmlelement("div")}}-Elemente für den Hauptinhalt und die Seitenleiste.
CSS wird verwendet, um die Anzeige des Seitenleistenelements zu animieren, wenn die `open`-Klasse zu den Seitenleisten- und Inhaltselementen hinzugefügt oder von ihnen entfernt wird (dieses CSS ist ausgeblendet, da es für das Beispiel nicht relevant ist).

```html
<button id="sidebar-open" type="button">Open</button>
<button id="sidebar-close" type="button">Close</button>
<div class="sidebar">Sidebar</div>
<div class="main-content">Main content</div>
```

```css hidden
.sidebar {
  position: fixed;
  top: 20px;
  left: -300px;
  right: auto;
  bottom: 0;
  width: 300px; /* Adjust the width as needed */
  background-color: lightblue;
}

.main-content {
  position: fixed;
  top: 20px;
  left: 0;
  right: 0;
  bottom: 0;
  width: auto; /* Adjust the width as needed */
  background-color: green;
  margin-left: 0px; /* Adjust for the sidebar width */
}

.sidebar.open {
  left: 0; /* Slide the sidebar to the right when open */
  transition: left 0.3s ease-in-out; /* Add a smooth transition effect */
}

.main-content.open {
  margin-left: 300px; /* Adjust for the sidebar width */
  transition: margin-left 0.3s ease-in-out;
  background-color: green;
}
```

#### JavaScript

Der Code erhält zunächst Variablen für die in HTML definierten Schaltflächen und `<div>`-Elemente.
Es definiert auch eine Funktion `closeSidebar()`, die aufgerufen wird, wenn die Seitenleiste geschlossen wird, um die `open`-Klasse von den `<div>`-Elementen zu entfernen, und fügt einen `click`-Ereignislistener hinzu, der die `openSidebar()`-Methode aufruft, wenn die "Öffnen"-Schaltfläche geklickt wird.

```js
const sidebar = document.querySelector(".sidebar");
const mainContent = document.querySelector(".main-content");
const sidebarOpen = document.getElementById("sidebar-open");
const sidebarClose = document.getElementById("sidebar-close");

function closeSidebar() {
  sidebar.classList.remove("open");
  mainContent.classList.remove("open");
}

sidebarOpen.addEventListener("click", openSidebar);
```

Die Implementierung von `openSidebar()` wird unten angegeben.
Die Methode überprüft zunächst, ob die Seitenleiste bereits geöffnet ist und fügt, wenn nicht, die `open`-Klasse zu den Elementen hinzu, sodass die Seitenleiste angezeigt wird.

Wir erstellen dann einen neuen `CloseWatcher` und fügen einen Listener hinzu, der [`close()`](/de/docs/Web/API/CloseWatcher/close) darauf aufruft, wenn die "Schließen"-Schaltfläche geklickt wird.
Dies stellt sicher, dass das `close`-Ereignis aufgerufen wird, wenn entweder plattformnative Schließmethoden oder die "Schließen"-Schaltfläche verwendet werden.
Die Implementierung des `onclose()`-Ereignishandlers schließt einfach die Seitenleiste, und der `CloseWatcher` wird dann automatisch zerstört.

```js
function openSidebar() {
  if (!sidebar.classList.contains("open")) {
    sidebar.classList.add("open");
    mainContent.classList.add("open");

    // Add new CloseWatcher
    const watcher = new CloseWatcher();

    sidebarClose.addEventListener("click", () => watcher.close());

    // Handle close event, invoked by platform mechanisms or "Close" button
    watcher.onclose = () => {
      closeSidebar();
    };
  }
}
```

Beachten Sie, dass wir uns entschieden haben, `close()` auf dem Watcher aufzurufen, anstatt [`CloseWatcher.requestClose()`](/de/docs/Web/API/CloseWatcher/requestClose), da wir nicht benötigen, dass das `cancel`-Ereignis ausgegeben wird (wir würden `requestClose()` und den `cancel`-Ereignishandler verwenden, wenn es einen Grund gäbe, jemals zu verhindern, dass die Seitenleiste vorzeitig geschlossen wird).

#### Ergebnis

Wählen Sie die "Öffnen"-Schaltfläche, um die Seitenleiste zu öffnen. Sie sollten in der Lage sein, die Seitenleiste mit der "Schließen"-Schaltfläche oder der üblichen Plattformmethode zu schließen, wie z.B. der <kbd>Esc</kbd>-Taste unter Windows.

{{ EmbedLiveSample("Closing a sidebar using a platform close request", "100%", "200") }}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`close`](/de/docs/Web/API/HTMLDialogElement/close_event) Ereignis auf [`HTMLDialogElement`](/de/docs/Web/API/HTMLDialogElement)
