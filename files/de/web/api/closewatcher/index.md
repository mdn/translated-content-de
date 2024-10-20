---
title: CloseWatcher
slug: Web/API/CloseWatcher
l10n:
  sourceCommit: e626cc8448c4b31125e734553443a9b20dea2208
---

{{APIRef("HTML DOM")}} {{SeeCompatTable}}

Das `CloseWatcher`-Interface ermöglicht es einer benutzerdefinierten UI-Komponente mit Öffnen- und Schließen-Semantik, auf gerätespezifische Schließaktionen genauso zu reagieren wie eine integrierte Komponente.

{{InheritanceDiagram}}

Das `CloseWatcher`-Interface erbt von [`EventTarget`](/de/docs/Web/API/EventTarget).

## Konstruktor

- [`CloseWatcher()`](/de/docs/Web/API/CloseWatcher/CloseWatcher) {{Experimental_Inline}}
  - : Erstellt eine neue `CloseWatcher`-Instanz.

## Instanzmethoden

_Dieses Interface erbt auch Methoden von seinem Elternteil, [`EventTarget`](/de/docs/Web/API/EventTarget)._

- [`CloseWatcher.requestClose()`](/de/docs/Web/API/CloseWatcher/requestClose) {{Experimental_Inline}}
  - : Löst ein `cancel`-Ereignis aus und, wenn dieses nicht mit [`Event.preventDefault()`](/de/docs/Web/API/Event/preventDefault) abgebrochen wird, fährt fort, ein `close`-Ereignis auszulösen und deaktiviert schließlich den CloseWatcher, als ob `destroy()` aufgerufen wurde.
- [`CloseWatcher.close()`](/de/docs/Web/API/CloseWatcher/close) {{Experimental_Inline}}
  - : Löst sofort das `close`-Ereignis aus, ohne vorher `cancel` auszulösen, und deaktiviert den CloseWatcher, als ob `destroy()` aufgerufen wurde.
- [`CloseWatcher.destroy()`](/de/docs/Web/API/CloseWatcher/destroy) {{Experimental_Inline}}
  - : Deaktiviert den CloseWatcher, sodass er keine `close`-Ereignisse mehr empfängt.

## Ereignisse

- [`cancel`](/de/docs/Web/API/CloseWatcher/cancel_event) {{Experimental_Inline}}
  - : Ein Ereignis, das ausgelöst wird, bevor das `close`-Ereignis ausgelöst wird, damit `close` verhindert werden kann.
- [`close`](/de/docs/Web/API/CloseWatcher/close_event) {{Experimental_Inline}}
  - : Ein Ereignis, das ausgelöst wird, wenn eine Schließanforderung empfangen wurde.

## Beschreibung

Einige UI-Komponenten haben ein "Schließverhalten", was bedeutet, dass die Komponente erscheint und der Benutzer sie schließen kann, wenn er fertig ist. Zum Beispiel: Seitenleisten, Popups, Dialoge oder Benachrichtigungen.

Benutzer erwarten im Allgemeinen, dass sie einen bestimmten Mechanismus verwenden können, um diese Elemente zu schließen, und der Mechanismus tendiert dazu, gerätespezifisch zu sein. Zum Beispiel könnte es auf einem Gerät mit Tastatur die <kbd>Esc</kbd>-Taste sein, aber Android könnte die Zurück-Taste verwenden. Bei integrierten Komponenten, wie [popover](/de/docs/Web/API/Popover_API) oder {{htmlelement("dialog")}}-Elementen, kümmert sich der Browser um diese Unterschiede und schließt das Element, wenn der Benutzer die für das Gerät geeignete Schließaktion ausführt. Wenn ein Webentwickler jedoch seine eigene schließbare UI-Komponente (zum Beispiel eine Seitenleiste) implementiert, ist es schwierig, dieses gerätespezifische Schließverhalten zu implementieren.

Das `CloseWatcher`-Interface löst dieses Problem, indem es ein `cancel`-Ereignis, gefolgt von einem `close`-Ereignis, liefert, wenn der Benutzer die gerätespezifische Schließaktion ausführt. Webanwendungen können den `onclose`-Handler verwenden, um das UI-Element als Reaktion auf das gerätespezifische Ereignis zu schließen. Sie können auch dieselben Ereignisse als Reaktion auf den normalen Schließmechanismus des UI-Elements auslösen und dann eine gemeinsame `close`-Ereignisbehandlung sowohl für die anwendungs- als auch gerätespezifische Schließaktion implementieren. Sobald der `onclose`-Ereignishandler abgeschlossen ist, wird der `CloseWatcher` zerstört und die Ereignisse werden nicht mehr ausgelöst.

In einigen Anwendungen darf das UI-Element möglicherweise nur dann geschlossen werden, wenn es sich in einem bestimmten Zustand befindet; zum Beispiel, wenn einige benötigte Informationen eingetragen sind. Um diese Fälle zu adressieren, können Anwendungen verhindern, dass das `close`-Ereignis gesendet wird, indem sie einen Handler für das `cancel`-Ereignis implementieren, der [`Event.preventDefault()`](/de/docs/Web/API/Event/preventDefault) aufruft, wenn das UI-Element nicht bereit ist, geschlossen zu werden.

Sie können `CloseWatcher`-Instanzen ohne [Benutzeraktivierung](/de/docs/Web/Security/User_activation) erstellen, was nützlich sein kann, um Fälle wie Dialoge bei Inaktivitäts-Timeouts der Sitzung zu implementieren. Wenn Sie jedoch mehr als einen `CloseWatcher` ohne Benutzeraktivierung erstellen, werden die Watcher gruppiert, sodass eine einzelne Schließanforderung beide schließt. Zudem muss der erste CloseWatcher nicht unbedingt ein `CloseWatcher`-Objekt sein: Er kann auch ein modales Dialogelement oder ein Popover sein, das von einem Element mit dem Popover-Attribut generiert wurde.

## Beispiele

### Verarbeitung von Schließanforderungen

In diesem Beispiel haben Sie Ihre eigene UI-Komponente (einen Picker) und Sie möchten sowohl die standardmäßige Schließmethode der Plattform (z.B. die <kbd>Esc</kbd>-Taste) als auch Ihre benutzerdefinierte Schließmethode (eine Schaltfläche zum Schließen) unterstützen.

Sie erstellen einen `CloseWatcher`, um alle `close`-Ereignisse zu bearbeiten.

Der `onclick`-Handler Ihrer UI-Komponente kann `requestClose` aufrufen, um ein Schließen anzufordern und Ihre Schließanforderung durch denselben `onclose`-Handler zu leiten, den die Plattform-Schließmethode verwendet.

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

### Schließen einer Seitenleiste mit einer Schließanforderung der Plattform

In diesem Beispiel haben wir eine Seitenleisten-Komponente, die angezeigt wird, wenn eine "Öffnen"-Schaltfläche ausgewählt wird, und die über eine "Schließen"-Schaltfläche oder plattformnative Mechanismen ausgeblendet wird. Um es interessanter zu machen, ist dies ein Live-Beispiel!

Beachten Sie auch, dass das Beispiel ein wenig konstruiert ist, da wir normalerweise eine Umschaltfläche verwenden würden, um einen Seitenleistenstatus zu ändern. Wir könnten das sicherlich tun, aber die Verwendung getrennter "Öffnen"- und "Schließen"-Schaltflächen erleichtert die Demonstration der Funktion.

#### HTML

Das HTML definiert "Öffnen"- und "Schließen"-{{htmlelement("button")}}-Elemente, zusammen mit {{htmlelement("div")}}-Elementen für den Hauptinhalt und die Seitenleiste. CSS wird verwendet, um die Anzeige des Sidebar-Elements zu animieren, wenn die `open`-Klasse den Sidebar- und Inhaltselementen hinzugefügt oder entfernt wird (dieses CSS wird ausgeblendet, da es für das Beispiel nicht relevant ist).

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

Der Code ermittelt zuerst die Variablen für die in HTML definierten Schaltflächen und `<div>`-Elemente. Er definiert auch eine Funktion `closeSidebar()`, die aufgerufen wird, wenn die Seitenleiste geschlossen wird, um die `open`-Klasse von den `<div>`-Elementen zu entfernen, und fügt einen `click`-Eventlistener hinzu, der die `openSidebar()`-Methode aufruft, wenn die "Öffnen"-Schaltfläche geklickt wird.

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

Die Implementierung von `openSidebar()` ist unten angegeben. Die Methode überprüft zuerst, ob die Seitenleiste bereits geöffnet ist, und wenn nicht, wird die `open`-Klasse den Elementen hinzugefügt, damit die Seitenleiste angezeigt wird.

Wir erstellen dann einen neuen `CloseWatcher` und fügen einen Listener hinzu, der [`close()`](/de/docs/Web/API/CloseWatcher/close) darauf aufruft, wenn die "Schließen"-Schaltfläche geklickt wird. Dies stellt sicher, dass das `close`-Ereignis aufgerufen wird, wenn entweder plattformnative Schließmethoden oder die "Schließen"-Schaltfläche verwendet werden. Die Implementierung des `onclose()`-Ereignishandlers schließt einfach die Seitenleiste, und der `CloseWatcher` wird dann automatisch zerstört.

```js
function openSidebar() {
  if (!sidebar.classList.contains("open")) {
    sidebar.classList.add("open");
    mainContent.classList.add("open");

    //Add new CloseWatcher
    const watcher = new CloseWatcher();

    sidebarClose.addEventListener("click", () => watcher.close());

    // Handle close event, invoked by platform mechanisms or "Close" button
    watcher.onclose = () => {
      closeSidebar();
    };
  }
}
```

Beachten Sie, dass wir uns entschieden haben, `close()` beim Watcher anstelle von [`CloseWatcher.requestClose()`](/de/docs/Web/API/CloseWatcher/requestClose) aufzurufen, weil wir nicht möchten, dass das `cancel`-Ereignis ausgelöst wird (wir würden `requestClose()` und den `cancel`-Ereignishandler verwenden, wenn es einen Grund gäbe, ein vorzeitiges Schließen der Seitenleiste je zu verhindern).

#### Ergebnis

Wählen Sie die "Öffnen"-Schaltfläche, um die Seitenleiste zu öffnen. Sie sollten die Seitenleiste mit der "Schließen"-Schaltfläche oder der üblichen Plattformmethode, wie etwa der <kbd>Esc</kbd>-Taste unter Windows, schließen können.

{{ EmbedLiveSample("Closing a sidebar using a platform close request", "100%", "200") }}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`close`](/de/docs/Web/API/HTMLDialogElement/close_event)-Ereignis auf [`HTMLDialogElement`](/de/docs/Web/API/HTMLDialogElement)
