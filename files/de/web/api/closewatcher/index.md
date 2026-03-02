---
title: CloseWatcher
slug: Web/API/CloseWatcher
l10n:
  sourceCommit: de5b557883e8eff2514f0fe6eeb180db782575b1
---

{{APIRef("HTML DOM")}}

Das `CloseWatcher`-Interface ermöglicht es einer benutzerdefinierten Benutzeroberflächenkomponente mit Öffnungs- und Schließsemantik, auf gerätespezifische Schließaktionen auf die gleiche Weise zu reagieren wie eine integrierte Komponente.

{{InheritanceDiagram}}

Das `CloseWatcher`-Interface erbt von [`EventTarget`](/de/docs/Web/API/EventTarget).

## Konstruktor

- [`CloseWatcher()`](/de/docs/Web/API/CloseWatcher/CloseWatcher)
  - : Erstellt eine neue `CloseWatcher`-Instanz.

## Instanzmethoden

_Dieses Interface erbt auch Methoden von seinem übergeordneten Element, [`EventTarget`](/de/docs/Web/API/EventTarget)._

- [`CloseWatcher.requestClose()`](/de/docs/Web/API/CloseWatcher/requestClose)
  - : Löst ein `cancel`-Ereignis aus und, falls dieses Ereignis nicht mit [`Event.preventDefault()`](/de/docs/Web/API/Event/preventDefault) abgebrochen wird, ein `close`-Ereignis und deaktiviert dann schließlich den Close Watcher, als ob `destroy()` aufgerufen wurde.
- [`CloseWatcher.close()`](/de/docs/Web/API/CloseWatcher/close)
  - : Löst sofort das `close`-Ereignis aus, ohne vorher `cancel` auszulösen, und deaktiviert den Close Watcher, als ob `destroy()` aufgerufen wurde.
- [`CloseWatcher.destroy()`](/de/docs/Web/API/CloseWatcher/destroy)
  - : Deaktiviert den Close Watcher, sodass er keine `close`-Ereignisse mehr empfängt.

## Ereignisse

- [`cancel`](/de/docs/Web/API/CloseWatcher/cancel_event)
  - : Ein Ereignis, das vor dem `close`-Ereignis ausgelöst wird, sodass verhindert werden kann, dass `close` ausgelöst wird.
- [`close`](/de/docs/Web/API/CloseWatcher/close_event)
  - : Ein Ereignis, das ausgelöst wird, wenn eine Schließanforderung empfangen wurde.

## Beschreibung

Einige UI-Komponenten haben "Schließverhalten", was bedeutet, dass die Komponente erscheint und der Benutzer sie schließen kann, wenn er fertig ist. Beispiele hierfür sind: Sidebars, Popups, Dialoge oder Benachrichtigungen.

Benutzer erwarten im Allgemeinen, dass sie ein bestimmtes Mechanismus verwenden können, um diese Elemente zu schließen, wobei der Mechanismus tendenziell gerätespezifisch ist. Auf einem Gerät mit einer Tastatur könnte es z.B. die <kbd>Esc</kbd>-Taste sein, während Android möglicherweise die Zurück-Taste verwendet. Bei integrierten Komponenten, wie [popover](/de/docs/Web/API/Popover_API)- oder {{htmlelement("dialog")}}-Elementen, kümmert sich der Browser um diese Unterschiede und schließt das Element, wenn der Benutzer die für das Gerät geeignete Schließaktion ausführt. Wenn jedoch ein Webentwickler eine eigene schließbare Benutzeroberflächenkomponente implementiert (z. B. eine Sidebar), ist es schwierig, dieses gerätespezifische Schließverhalten zu implementieren.

Das `CloseWatcher`-Interface löst dieses Problem, indem es ein `cancel`-Ereignis, gefolgt von einem `close`-Ereignis liefert, wenn der Benutzer die gerätespezifische Schließaktion ausführt.
Webanwendungen können den `onclose`-Handler verwenden, um das UI-Element als Antwort auf das gerätespezifische Ereignis zu schließen.
Sie können auch dieselben Ereignisse als Antwort auf den normalen Schließmechanismus des UI-Elements auslösen und dann ein gemeinsames `close`-Ereignishandling sowohl für die anwendungs- als auch für die gerätespezifische Schließaktion implementieren.
Sobald der `onclose`-Ereignishandler abgeschlossen ist, wird der `CloseWatcher` zerstört und die Ereignisse werden nicht mehr ausgelöst.

In einigen Anwendungen darf das UI-Element möglicherweise nur unter bestimmten Bedingungen geschlossen werden, z.B. wenn einige erforderliche Informationen ausgefüllt sind.
Um diese Fälle abzudecken, können Anwendungen verhindern, dass das `close`-Ereignis ausgelöst wird, indem sie einen Handler für das `cancel`-Ereignis implementieren, der [`Event.preventDefault()`](/de/docs/Web/API/Event/preventDefault) aufruft, wenn das UI-Element nicht bereit ist, geschlossen zu werden.

Sie können `CloseWatcher`-Instanzen ohne [Benutzeraktivierung](/de/docs/Web/Security/Defenses/User_activation) erstellen, was nützlich sein kann, um Fälle wie Dialoge für Sitzungsinaktivität-Timeouts zu implementieren. Wenn Sie jedoch mehr als einen `CloseWatcher` ohne Benutzeraktivierung erstellen, werden die Watcher gruppiert, sodass eine einzelne Schließanforderung sie beide schließt.
Außerdem muss der erste Close Watcher nicht unbedingt ein `CloseWatcher`-Objekt sein: Es könnte ein modales Dialogelement oder ein Popover sein, das von einem Element mit dem Popover-Attribut generiert wurde.

## Beispiele

### Verarbeitung von Schließanforderungen

In diesem Beispiel haben Sie Ihre eigene UI-Komponente (ein Auswahlelement) und möchten sowohl die Standard-Schließmethode der Plattform (z.B. die <kbd>Esc</kbd>-Taste) als auch Ihre benutzerdefinierte Schließmethode (eine Schaltfläche zum Schließen) unterstützen.

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

### Schließen einer Sidebar durch eine Plattform-Schließanforderung

In diesem Beispiel haben wir eine Sidebar-Komponente, die angezeigt wird, wenn eine "Öffnen"-Schaltfläche ausgewählt wird, und mit entweder einer "Schließen"-Schaltfläche oder plattformnativen Mechanismen ausgeblendet wird.
Um es interessanter zu gestalten, ist dies ein Live-Beispiel!

Beachten Sie auch, dass das Beispiel etwas konstruiert ist, da wir normalerweise eine Umschaltfläche verwenden würden, um den Sidebar-Status zu ändern.
Wir könnten das sicherlich tun, aber die Verwendung von separaten "Öffnen"- und "Schließen"-Schaltflächen macht es einfacher, das Feature zu demonstrieren.

#### HTML

Das HTML definiert "Öffnen"- und "Schließen"-{{htmlelement("button")}}-Elemente zusammen mit {{htmlelement("div")}}-Elementen für den Hauptinhalt und die Sidebar.
CSS wird verwendet, um die Anzeige des Sidebar-Elements zu animieren, wenn die `open`-Klasse zu den Sidebar- und Inhaltselementen hinzugefügt oder daraus entfernt wird (dieses CSS ist versteckt, da es für das Beispiel nicht relevant ist).

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

Der Code beschafft zunächst Variablen für die in HTML definierten Schaltflächen und `<div>`-Elemente.
Es definiert auch eine Funktion `closeSidebar()`, die aufgerufen wird, wenn die Sidebar geschlossen wird, um die `open`-Klasse von den `<div>`-Elementen zu entfernen, und fügt einen `click`-Ereignislistener hinzu, der die Methode `openSidebar()` aufruft, wenn die "Öffnen"-Schaltfläche geklickt wird.

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
Die Methode prüft zuerst, ob die Sidebar bereits geöffnet ist, und falls nicht, fügt sie die `open`-Klasse zu den Elementen hinzu, sodass die Sidebar angezeigt wird.

Wir erstellen dann einen neuen `CloseWatcher` und fügen einen Listener hinzu, der [`close()`](/de/docs/Web/API/CloseWatcher/close) aufruft, wenn die "Schließen"-Schaltfläche geklickt wird.
Dies stellt sicher, dass das `close`-Ereignis aufgerufen wird, wenn entweder plattformnative Schließmethoden oder die "Schließen"-Schaltfläche verwendet werden.
Die Implementierung des `onclose()`-Ereignishandlers schließt einfach die Sidebar, und der `CloseWatcher` wird dann automatisch zerstört.

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

Beachten Sie, dass wir uns entschieden haben, `close()` auf dem Watcher aufzurufen, anstatt [`CloseWatcher.requestClose()`](/de/docs/Web/API/CloseWatcher/requestClose), da wir nicht möchten, dass das `cancel`-Ereignis ausgelöst wird (wir würden `requestClose()` und den `cancel`-Ereignishandler verwenden, wenn es einen Grund gäbe, das vorzeitige Schließen der Sidebar jemals zu verhindern).

#### Ergebnis

Wählen Sie die "Öffnen"-Schaltfläche, um die Sidebar zu öffnen. Sie sollten in der Lage sein, die Sidebar mit der "Schließen"-Schaltfläche oder der üblichen Plattformmethode, wie der <kbd>Esc</kbd>-Taste unter Windows, zu schließen.

{{ EmbedLiveSample("Closing a sidebar using a platform close request", "100%", "200") }}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`close`](/de/docs/Web/API/HTMLDialogElement/close_event)-Ereignis auf [`HTMLDialogElement`](/de/docs/Web/API/HTMLDialogElement)
