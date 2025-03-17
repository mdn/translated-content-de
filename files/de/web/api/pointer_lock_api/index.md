---
title: Pointer Lock API
slug: Web/API/Pointer_Lock_API
l10n:
  sourceCommit: 802b6063046dffb7634d2138aadcd92cb22ed40c
---

{{DefaultAPISidebar("Pointer Lock API")}}

Die **Pointer Lock API** (früher _Mouse Lock API_ genannt) bietet Eingabemethoden basierend auf der Bewegung der Maus über die Zeit (d.h. Deltas), nicht nur der absoluten Position des Mauscursors im Ansichtsfenster. Sie bietet Zugriff auf rohe Mausbewegungen, sperrt das Ziel von Mausereignissen auf ein einzelnes Element, beseitigt Begrenzungen, wie weit Mausbewegungen in eine Richtung gehen können, und entfernt den Cursor aus dem Sichtfeld. Sie ist ideal für Ego-3D-Spiele, zum Beispiel.

Darüber hinaus ist die API nützlich für Anwendungen, die erhebliche Mauskontrollen benötigen, um Bewegungen zu steuern, Objekte zu drehen und Eingaben zu ändern, z. B. um Benutzern zu ermöglichen, den Blickwinkel zu steuern, indem sie die Maus bewegen, ohne dabei irgendwelche Tasten zu klicken. Die Tasten sind dann für andere Aktionen frei. Weitere Beispiele sind Apps zur Betrachtung von Karten oder Satellitenbildern.

Mit der Pointer Lock können Sie auf Mausereignisse zugreifen, selbst wenn der Cursor die Grenze des Browsers oder Bildschirms überschreitet. Zum Beispiel können Ihre Benutzer weiterhin ein 3D-Modell drehen oder manipulieren, indem sie die Maus unendlich bewegen. Ohne Pointer Lock stoppt die Drehung oder Manipulation, sobald der Zeiger den Rand des Browsers oder Bildschirms erreicht. Spieler können jetzt Tasten klicken und den Mauscursor hin und her bewegen, ohne befürchten zu müssen, den Spielbereich zu verlassen und versehentlich eine andere Anwendung zu klicken, die den Mausfokus vom Spiel wegnehmen würde.

## Grundlegende Konzepte

Pointer Lock ist mit [Pointer Capture](/de/docs/Web/API/Pointer_events#pointer_capture) verwandt. Pointer Capture ermöglicht die kontinuierliche Übertragung von Ereignissen an ein Zielelement, während eine Maus gezogen wird, endet jedoch, wenn die Maustaste losgelassen wird. Pointer Lock unterscheidet sich von Pointer Capture in den folgenden Aspekten:

- Sie ist persistent: Pointer Lock gibt die Maus nicht frei, bis ein expliziter API-Aufruf erfolgt oder der Benutzer eine spezielle Freigabegeste verwendet.
- Sie ist nicht durch Browser- oder Bildschirmgrenzen begrenzt.
- Sie sendet weiterhin Ereignisse, unabhängig vom Zustand der Maustaste.
- Sie verbirgt den Cursor.

## Übersicht über Methoden/Properties

Dieser Abschnitt bietet eine kurze Beschreibung jeder Eigenschaft und Methode, die mit der Pointer Lock-Spezifikation in Verbindung steht.

### requestPointerLock()

Die Pointer Lock API erweitert DOM-Elemente, ähnlich der [Fullscreen API](/de/docs/Web/API/Fullscreen_API), indem eine neue Methode, [`requestPointerLock()`](/de/docs/Web/API/Element/requestPointerLock), hinzugefügt wird. Das folgende Beispiel fordert die Pointer Lock auf einem {{htmlelement("canvas")}}-Element an:

```js
canvas.addEventListener("click", async () => {
  await canvas.requestPointerLock();
});
```

> [!NOTE]
> Wenn ein Benutzer die Pointer Lock über die [Standard-Freigabegeste](https://w3c.github.io/pointerlock/#dfn-default-unlock-gesture) verlassen hat oder die Pointer Lock für dieses Dokument nicht zuvor eingetreten ist, muss ein Ereignis, das als ein [Engagement-Geste](https://w3c.github.io/pointerlock/#dfn-engagement-gesture) erzeugt wird, vom Dokument empfangen werden, bevor [`requestPointerLock`](https://w3c.github.io/pointerlock/#dom-element-requestpointerlock) erfolgreich ist. (aus <https://w3c.github.io/pointerlock/#extensions-to-the-element-interface>)

Betriebssysteme aktivieren standardmäßig die Mausbeschleunigung, was nützlich ist, wenn Sie manchmal langsame, präzise Bewegungen wünschen (denken Sie daran, wie Sie ein Grafikpaket verwenden könnten), aber Sie möchten auch große Entfernungen mit einer schnelleren Mausbewegung zurücklegen (denken Sie an Scrollen und die Auswahl mehrerer Dateien). Für einige Spiele aus der Ich-Perspektive jedoch werden rohe Mausedaten bevorzugt zur Steuerung der Kameradrehung — wo dieselbe Bewegungsstrecke, schnell oder langsam, zu derselben Drehung führt. Dies führt zu einem besseren Spielerlebnis und höherer Genauigkeit, laut professionellen Spielern.

Um die Mausbeschleunigung auf Betriebssystemebene zu deaktivieren und auf rohe Mausdaten zuzugreifen, können Sie `unadjustedMovement` auf `true` setzen:

```js
canvas.addEventListener("click", async () => {
  await canvas.requestPointerLock({
    unadjustedMovement: true,
  });
});
```

## Umgang mit der Promise- und Nicht-Promise-Version von requestPointerLock()

Der obige Codeausschnitt funktioniert weiterhin in Browsern, die die auf Promise basierende Version von `requestPointerLock()` oder die Option `unadjustedMovement` nicht unterstützen — der [`await`](/de/docs/Web/JavaScript/Reference/Operators/await)-Operator wird auch vor einer Funktion erlaubt, die kein Versprechen zurückgibt, und das Optionsobjekt wird in nicht unterstützenden Browsern einfach ignoriert.

Das könnte jedoch verwirrend sein und andere potenzielle Nebenwirkungen haben (zum Beispiel würde der Versuch, `requestPointerLock().then()` in nicht unterstützenden Browsern zu verwenden, einen Fehler werfen), sodass Sie diesen Fall explizit mit einem Code nach folgendem Muster behandeln möchten:

```js
function requestPointerLockWithUnadjustedMovement() {
  const promise = myTargetElement.requestPointerLock({
    unadjustedMovement: true,
  });

  if (!promise) {
    console.log("disabling mouse acceleration is not supported");
    return;
  }

  return promise
    .then(() => console.log("pointer is locked"))
    .catch((error) => {
      if (error.name === "NotSupportedError") {
        // Some platforms may not support unadjusted movement.
        // You can request again a regular pointer lock.
        return myTargetElement.requestPointerLock();
      }
    });
}
```

### pointerLockElement und exitPointerLock()

Die Pointer Lock API erweitert auch die [`Document`](/de/docs/Web/API/Document)-Schnittstelle, indem eine neue Eigenschaft und eine neue Methode hinzugefügt werden:

- [`pointerLockElement`](/de/docs/Web/API/Document/pointerLockElement) wird verwendet, um auf das derzeit gesperrte Element zuzugreifen (falls vorhanden).
- [`exitPointerLock()`](/de/docs/Web/API/Document/exitPointerLock) wird verwendet, um die Pointer Lock zu beenden.

Die [`pointerLockElement`](/de/docs/Web/API/Document/pointerLockElement)-Eigenschaft ist nützlich, um festzustellen, ob ein Element derzeit gesperrt ist (z. B. für eine boolesche Überprüfung) und um eine Referenz auf das gesperrte Element zu erhalten, falls vorhanden.

Hier ist ein Beispiel für die Verwendung von `pointerLockElement`:

```js
if (document.pointerLockElement === canvas) {
  console.log("The pointer lock status is now locked");
} else {
  console.log("The pointer lock status is now unlocked");
}
```

Die [`Document.exitPointerLock()`](/de/docs/Web/API/Document/exitPointerLock)-Methode wird verwendet, um die Pointer Lock zu beenden, und funktioniert wie [`requestPointerLock`](/de/docs/Web/API/Element/requestPointerLock) asynchron mit den Ereignissen [`pointerlockchange`](/de/docs/Web/API/Document/pointerlockchange_event) und [`pointerlockerror`](/de/docs/Web/API/Document/pointerlockerror_event), über die Sie unten mehr erfahren werden.

```js
document.exitPointerLock();
```

## pointerlockchange Ereignis

Wenn sich der Status der Pointer Lock ändert — zum Beispiel beim Aufrufen von [`requestPointerLock()`](/de/docs/Web/API/Element/requestPointerLock) oder [`exitPointerLock()`](/de/docs/Web/API/Document/exitPointerLock), beim Drücken der ESC-Taste durch den Benutzer, usw. — wird das [`pointerlockchange`](/de/docs/Web/API/Document/pointerlockchange_event)-Ereignis an das `document` gesendet. Dies ist ein einfaches Ereignis ohne zusätzliche Daten.

```js
document.addEventListener("pointerlockchange", lockChangeAlert, false);

function lockChangeAlert() {
  if (document.pointerLockElement === canvas) {
    console.log("The pointer lock status is now locked");
    // Do something useful in response
  } else {
    console.log("The pointer lock status is now unlocked");
    // Do something useful in response
  }
}
```

## pointerlockerror Ereignis

Wenn beim Aufrufen von [`requestPointerLock()`](/de/docs/Web/API/Element/requestPointerLock) oder [`exitPointerLock()`](/de/docs/Web/API/Document/exitPointerLock) ein Fehler auftritt, wird das [`pointerlockerror`](/de/docs/Web/API/Document/pointerlockerror_event)-Ereignis an das `document` gesendet. Dies ist ein einfaches Ereignis ohne zusätzliche Daten.

```js
document.addEventListener("pointerlockerror", lockError, false);

function lockError(e) {
  alert("Pointer lock failed");
}
```

## Erweiterungen für Mausereignisse

Die Pointer Lock API erweitert die normale [`MouseEvent`](/de/docs/Web/API/MouseEvent)-Schnittstelle mit Bewegungsattributen. Zwei neue Attribute für Mausereignisse — [`movementX`](/de/docs/Web/API/MouseEvent/movementX) und [`movementY`](/de/docs/Web/API/MouseEvent/movementY) — geben die Änderung der Mausposition an. Die Werte der Parameter entsprechen der Differenz zwischen den Werten der [`MouseEvent`](/de/docs/Web/API/MouseEvent)-Eigenschaften, [`screenX`](/de/docs/Web/API/MouseEvent/screenX) und [`screenY`](/de/docs/Web/API/MouseEvent/screenY), welche in zwei aufeinanderfolgenden [`mousemove`](/de/docs/Web/API/Element/mousemove_event)-Ereignissen, `eNow` und `ePrevious`, gespeichert sind. Anders ausgedrückt ist der Pointer Lock Parameter `movementX = eNow.screenX - ePrevious.screenX`.

### Gesperrter Zustand

Wenn die Pointer Lock aktiviert ist, bleiben die standardmäßigen [`MouseEvent`](/de/docs/Web/API/MouseEvent)-Eigenschaften [`clientX`](/de/docs/Web/API/MouseEvent/clientX), [`clientY`](/de/docs/Web/API/MouseEvent/clientY), [`screenX`](/de/docs/Web/API/MouseEvent/screenX) sowie [`screenY`](/de/docs/Web/API/MouseEvent/screenY) konstant, als ob sich die Maus nicht bewegt. Die Eigenschaften [`movementX`](/de/docs/Web/API/MouseEvent/movementX) und [`movementY`](/de/docs/Web/API/MouseEvent/movementY) geben weiterhin die Änderung der Mausposition an. Es gibt kein Limit für die Werte von [`movementX`](/de/docs/Web/API/MouseEvent/movementX) und [`movementY`](/de/docs/Web/API/MouseEvent/movementY), wenn die Maus kontinuierlich in eine Richtung bewegt wird. Das Konzept des Mauscursors existiert nicht und der Cursor kann nicht das Fenster verlassen oder durch einen Bildschirmrand begrenzt werden.

### Ungesperrter Zustand

Die Parameter [`movementX`](/de/docs/Web/API/MouseEvent/movementX) und [`movementY`](/de/docs/Web/API/MouseEvent/movementY) sind unabhängig vom Status der Mausverriegelung gültig und stehen auch im freigeschalteten Zustand zur Verfügung.

Wenn die Maus nicht gesperrt ist, kann der Systemcursor das Browserfenster verlassen und wieder betreten. In diesem Fall könnten [`movementX`](/de/docs/Web/API/MouseEvent/movementX) und [`movementY`](/de/docs/Web/API/MouseEvent/movementY) auf Null gesetzt werden.

## Einfaches Beispiel

Wir haben eine [Pointer Lock-Demo](https://mdn.github.io/dom-examples/pointer-lock/) ([Quellcode ansehen](https://github.com/mdn/dom-examples/tree/main/pointer-lock)) erstellt, um Ihnen zu zeigen, wie Sie ein einfaches Steuerungssystem einrichten. Diese Demo verwendet JavaScript, um einen Ball auf einem {{ htmlelement("canvas") }}-Element zu zeichnen. Wenn Sie auf das Canvas klicken, wird die Pointer Lock verwendet, um den Mauspointer zu entfernen und Ihnen zu ermöglichen, den Ball direkt mit der Maus zu bewegen. Schauen wir uns an, wie das funktioniert.

Wir setzen anfängliche x- und y-Positionen auf dem Canvas:

```js
let x = 50;
let y = 50;
```

Anschließend richten wir einen Ereignis-Listener ein, der die `requestPointerLock()`-Methode auf dem Canvas ausführt, wenn es angeklickt wird, was die Pointer Lock initiiert. Die `document.pointerLockElement`-Überprüfung dient dazu, zu überprüfen, ob bereits eine aktive Pointer Lock besteht — wir möchten nicht `requestPointerLock()` auf dem Canvas immer dann aufrufen, wenn wir innerhalb des Canvas klicken, wenn wir bereits eine Pointer Lock haben.

```js
canvas.addEventListener("click", async () => {
  if (!document.pointerLockElement) {
    await canvas.requestPointerLock({
      unadjustedMovement: true,
    });
  }
});
```

> [!NOTE]
> Der obige Code funktioniert in Browsern, die die Promise-Version von `requestPointerLock()` nicht unterstützen. Siehe [Umgang mit der Promise- und Nicht-Promise-Version von requestPointerLock()](#handling_promise_and_non-promise_versions_of_requestpointerlock) für eine Erklärung.

Nun zum dedizierten Pointer Lock-Ereignis-Listener: `pointerlockchange`. Wenn dies auftritt, führen wir eine Funktion namens `lockChangeAlert()` aus, um die Änderung zu verarbeiten.

```js
document.addEventListener("pointerlockchange", lockChangeAlert, false);
```

Diese Funktion überprüft die `pointerLockElement`-Eigenschaft, um zu sehen, ob es sich um unser Canvas handelt. Wenn ja, wird ein Ereignis-Listener hinzugefügt, um die Mausbewegungen mit der Funktion `updatePosition()` zu verarbeiten. Andernfalls wird der Ereignis-Listener wieder entfernt.

```js
function lockChangeAlert() {
  if (document.pointerLockElement === canvas) {
    console.log("The pointer lock status is now locked");
    document.addEventListener("mousemove", updatePosition, false);
  } else {
    console.log("The pointer lock status is now unlocked");
    document.removeEventListener("mousemove", updatePosition, false);
  }
}
```

Die `updatePosition()`-Funktion aktualisiert die Position des Balls auf dem Canvas (`x` und `y`) und enthält auch `if ()`-Anweisungen, um zu überprüfen, ob der Ball die Ränder des Canvas verlassen hat. Wenn ja, wird der Ball an den gegenüberliegenden Rand gebracht. Sie enthält auch eine Überprüfung, ob ein [`requestAnimationFrame()`](/de/docs/Web/API/Window/requestAnimationFrame)-Aufruf zuvor gemacht wurde, und wenn ja, wird es bei Bedarf erneut aufgerufen und die Funktion `canvasDraw()` wird aufgerufen, die die Canvas-Szene aktualisiert. Ein Tracker wird auch eingerichtet, um die X- und Y-Werte als Referenz auf dem Bildschirm auszugeben.

```js
const tracker = document.getElementById("tracker");

let animation;
function updatePosition(e) {
  x += e.movementX;
  y += e.movementY;
  if (x > canvas.width + RADIUS) {
    x = -RADIUS;
  }
  if (y > canvas.height + RADIUS) {
    y = -RADIUS;
  }
  if (x < -RADIUS) {
    x = canvas.width + RADIUS;
  }
  if (y < -RADIUS) {
    y = canvas.height + RADIUS;
  }
  tracker.textContent = `X position: ${x}, Y position: ${y}`;

  if (!animation) {
    animation = requestAnimationFrame(() => {
      animation = null;
      canvasDraw();
    });
  }
}
```

Die `canvasDraw()`-Funktion zeichnet den Ball in den aktuellen `x`- und `y`-Positionen:

```js
function canvasDraw() {
  ctx.fillStyle = "black";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "#f00";
  ctx.beginPath();
  ctx.arc(x, y, RADIUS, 0, degToRad(360), true);
  ctx.fill();
}
```

## Einschränkungen bei IFrames

Pointer Lock kann nur ein {{htmlelement("iframe")}} auf einmal sperren. Wenn Sie ein `<iframe>` sperren, können Sie ein anderes nicht sperren und das Ziel darauf übertragen; Pointer Lock verursacht einen Fehler. Um diese Einschränkung zu vermeiden, entsperren Sie zunächst das gesperrte `<iframe>` und sperren Sie dann das andere.

Obwohl `<iframe>` standardmäßig funktioniert, blockieren "sandboxed" `<iframe>`s die Pointer Lock. Um diese Einschränkung zu vermeiden, verwenden Sie `<iframe sandbox="allow-pointer-lock">`.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`MouseEvent`](/de/docs/Web/API/MouseEvent)
- [`Element.requestPointerLock()`](/de/docs/Web/API/Element/requestPointerLock)
