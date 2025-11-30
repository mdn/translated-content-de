---
title: CloseWatcher
slug: Web/API/CloseWatcher
l10n:
  sourceCommit: ca26363fcc6fc861103d40ac0205e5c5b79eb2fa
---

{{APIRef("HTML DOM")}} {{SeeCompatTable}}

Das `CloseWatcher`-Interface ermöglicht es einem benutzerdefinierten UI-Komponenten mit Öffnen- und Schließen-Semantik, auf gerätespezifische Schließaktionen in gleicher Weise zu reagieren wie eine eingebaute Komponente.

{{InheritanceDiagram}}

Das `CloseWatcher`-Interface erbt von [`EventTarget`](/de/docs/Web/API/EventTarget).

## Konstruktor

- [`CloseWatcher()`](/de/docs/Web/API/CloseWatcher/CloseWatcher) {{Experimental_Inline}}
  - : Erstellt eine neue Instanz von `CloseWatcher`.

## Instanzmethoden

_Dieses Interface erbt auch Methoden von seinem übergeordneten Interface [`EventTarget`](/de/docs/Web/API/EventTarget)._

- [`CloseWatcher.requestClose()`](/de/docs/Web/API/CloseWatcher/requestClose) {{Experimental_Inline}}
  - : Löst ein `cancel`-Ereignis aus und, wenn dieses Ereignis nicht mit [`Event.preventDefault()`](/de/docs/Web/API/Event/preventDefault) abgebrochen wird, fährt mit dem Auslösen eines `close`-Ereignisses fort und deaktiviert schließlich den Close-Watcher, als ob `destroy()` aufgerufen worden wäre.
- [`CloseWatcher.close()`](/de/docs/Web/API/CloseWatcher/close) {{Experimental_Inline}}
  - : Löst sofort das `close`-Ereignis aus, ohne zuerst `cancel` auszulösen, und deaktiviert den Close-Watcher, als ob `destroy()` aufgerufen worden wäre.
- [`CloseWatcher.destroy()`](/de/docs/Web/API/CloseWatcher/destroy) {{Experimental_Inline}}
  - : Deaktiviert den Close-Watcher, sodass er keine `close`-Ereignisse mehr empfängt.

## Ereignisse

- [`cancel`](/de/docs/Web/API/CloseWatcher/cancel_event) {{Experimental_Inline}}
  - : Ein Ereignis, das vor dem `close`-Ereignis ausgelöst wird, sodass das `close`-Ereignis verhindert werden kann.
- [`close`](/de/docs/Web/API/CloseWatcher/close_event) {{Experimental_Inline}}
  - : Ein Ereignis, das ausgelöst wird, wenn eine Schließanforderung empfangen wurde.

## Beschreibung

Einige UI-Komponenten haben ein "Schließverhalten", das bedeutet, dass die Komponente erscheint, und der Benutzer sie schließen kann, wenn er damit fertig ist, z. B. Seitenleisten, Popups, Dialoge oder Benachrichtigungen.

Benutzer erwarten in der Regel, dass sie einen bestimmten Mechanismus verwenden können, um diese Elemente zu schließen, und dieser Mechanismus ist oft gerätespezifisch. Beispielsweise könnte es auf einem Gerät mit Tastatur die <kbd>Esc</kbd>-Taste sein, während Android die Zurück-Taste verwenden könnte. Bei eingebauten Komponenten, wie [Popover](/de/docs/Web/API/Popover_API) oder {{htmlelement("dialog")}}-Elementen, kümmert sich der Browser um diese Unterschiede und schließt das Element, wenn der Benutzer die dem Gerät entsprechende Schließaktion ausführt. Bei einer von einem Webentwickler implementierten schließbaren UI-Komponente (zum Beispiel einer Seitenleiste) ist es jedoch schwierig, dieses gerätespezifische Schließverhalten zu implementieren.

Das `CloseWatcher`-Interface löst dieses Problem, indem es ein `cancel`-Ereignis, gefolgt von einem `close`-Ereignis bereitstellt, wenn der Benutzer die gerätespezifische Schließaktion ausführt.
Webanwendungen können den `onclose`-Handler verwenden, um das UI-Element als Reaktion auf das gerätespezifische Ereignis zu schließen.
Sie können auch dieselben Ereignisse als Reaktion auf den normalen Schließmechanismus des UI-Elements auslösen und dann eine gemeinsame `close`-Ereignisbehandlung für sowohl die anwendungs- als auch die gerätespezifische Schließaktion implementieren.
Sobald der `onclose`-Ereignishandler abgeschlossen ist, wird der `CloseWatcher` zerstört und die Ereignisse werden nicht mehr ausgelöst.

In manchen Anwendungen darf das UI-Element möglicherweise nur geschlossen werden, wenn es sich in einem bestimmten Zustand befindet, zum Beispiel, wenn einige notwendige Informationen ausgefüllt sind.
Um diese Fälle zu berücksichtigen, können Anwendungen das `close`-Ereignis daran hindern, ausgelöst zu werden, indem sie einen Handler für das `cancel`-Ereignis implementieren, der [`Event.preventDefault()`](/de/docs/Web/API/Event/preventDefault) aufruft, wenn das UI-Element nicht bereit ist, geschlossen zu werden.

Sie können `CloseWatcher`-Instanzen ohne [Benutzeraktivierung](/de/docs/Web/Security/Defenses/User_activation) erstellen, was nützlich sein kann, um Fälle wie Dialoge zum Ablauf der Sitzungsinaktivität zu implementieren. Wenn Sie jedoch mehr als einen `CloseWatcher` ohne Benutzeraktivierung erstellen, werden die Beobachter gruppiert, sodass eine einzige Schließanforderung sie beide schließen wird.
Darüber hinaus muss der erste Close-Watcher nicht unbedingt ein `CloseWatcher`-Objekt sein: Es könnte ein modales Dialogelement oder ein Popover sein, das von einem Element mit dem Popover-Attribut erzeugt wird.

## Beispiele

### Verarbeiten von Schließanforderungen

In diesem Beispiel haben Sie eine eigene UI-Komponente (einen Picker) und möchten sowohl die Standard-Schließmethode der Plattform (z. B. die <kbd>Esc</kbd>-Taste) als auch Ihre benutzerdefinierte Schließmethode (eine Schaltfläche zum Schließen) unterstützen.

Sie erstellen einen `CloseWatcher`, um alle `close`-Ereignisse zu behandeln.

Der `onclick`-Handler Ihrer UI-Komponente kann `requestClose` aufrufen, um ein Schließen zu beantragen und Ihre Schließanforderung durch denselben `onclose`-Handler zu leiten, den die Plattform-Schließmethode verwendet.

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

### Schließen einer Seitenleiste durch eine Plattform-Schließanforderung

In diesem Beispiel haben wir eine Seitenleistenkomponente, die angezeigt wird, wenn eine "Öffnen"-Schaltfläche ausgewählt wird, und durch entweder eine "Schließen"-Schaltfläche oder plattformspezifische Mechanismen ausgeblendet wird.
Um es interessanter zu machen, ist dies ein Live-Beispiel!

Beachten Sie auch, dass das Beispiel etwas konstruiert ist, da wir normalerweise eine Umschalttaste verwenden würden, um den Zustand einer Seitenleiste zu ändern.
Das könnten wir sicherlich tun, aber die Verwendung separater "Öffnen"- und "Schließen"-Schaltflächen macht es einfacher, die Funktion zu demonstrieren.

#### HTML

Das HTML definiert "Öffnen" und "Schließen" {{htmlelement("button")}}-Elemente sowie {{htmlelement("div")}}-Elemente für den Hauptinhalt und die Seitenleiste.
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

Der Code erhält zunächst Variablen für die Buttons und `<div>`-Elemente, die im HTML definiert sind.
Es definiert auch eine Funktion `closeSidebar()`, die aufgerufen wird, wenn die Seitenleiste geschlossen wird, um die `open`-Klasse von den `<div>`-Elementen zu entfernen, und fügt einen `click`-Ereignislistener hinzu, der die Methode `openSidebar()` aufruft, wenn die "Öffnen"-Schaltfläche angeklickt wird.

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

Die Umsetzung von `openSidebar()` ist unten angegeben.
Die Methode überprüft zunächst, ob die Seitenleiste bereits geöffnet ist, und wenn nicht, fügt sie den Elementen die `open`-Klasse hinzu, sodass die Seitenleiste angezeigt wird.

Wir erstellen dann einen neuen `CloseWatcher` und fügen einen Listener hinzu, der [`close()`](/de/docs/Web/API/CloseWatcher/close) aufruft, wenn auf die "Schließen"-Schaltfläche geklickt wird.
Dies stellt sicher, dass das `close`-Ereignis aufgerufen wird, wenn entweder plattformspezifische Schließmethoden oder die "Schließen"-Schaltfläche verwendet werden.
Die Umsetzung des `onclose()`-Ereignishandlers schließt einfach die Seitenleiste, und der `CloseWatcher` wird dann automatisch zerstört.

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

Beachten Sie, dass wir uns entschieden haben, `close()` auf dem Beobachter aufzurufen anstatt [`CloseWatcher.requestClose()`](/de/docs/Web/API/CloseWatcher/requestClose), da wir nicht möchten, dass das `cancel`-Ereignis ausgelöst wird (wir würden `requestClose()` und den `cancel`-Ereignishandler verwenden, wenn es einen Grund gäbe, zu verhindern, dass die Seitenleiste vorzeitig geschlossen wird).

#### Ergebnis

Wählen Sie die "Öffnen"-Taste, um die Seitenleiste zu öffnen. Sie sollten in der Lage sein, die Seitenleiste mit der "Schließen"-Taste oder der üblichen Plattformmethode, wie der <kbd>Esc</kbd>-Taste unter Windows, zu schließen.

{{ EmbedLiveSample("Closing a sidebar using a platform close request", "100%", "200") }}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`close`](/de/docs/Web/API/HTMLDialogElement/close_event) Ereignis auf [`HTMLDialogElement`](/de/docs/Web/API/HTMLDialogElement)
