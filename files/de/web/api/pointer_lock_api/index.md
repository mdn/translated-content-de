---
title: Pointer Lock API
slug: Web/API/Pointer_Lock_API
l10n:
  sourceCommit: 2ccbd062264d0a2a34f185a3386cb272f42c50f5
---

{{DefaultAPISidebar("Pointer Lock API")}}

Die **Pointer Lock API** (früher _Mouse Lock API_ genannt) bietet Eingabemethoden basierend auf der Bewegung der Maus über die Zeit (d.h. Deltas), nicht nur basierend auf der absoluten Position des Mauszeigers im Anzeigebereich. Sie gewährt Zugriff auf die Rohbewegung der Maus, sperrt das Ziel von Mausereignissen auf ein einziges Element, beseitigt Begrenzungen für die Bewegungsweite der Maus in eine Richtung und entfernt den Cursor aus der Ansicht. Sie ist ideal für First-Person-3D-Spiele geeignet.

Darüber hinaus ist die API nützlich für jede Anwendung, die erhebliche Mausbewegungen zur Steuerung von Bewegungen, zum Drehen von Objekten und zum Ändern von Eingaben erfordert, beispielsweise indem Benutzer den Blickwinkel durch Mausbewegungen steuern können, ohne eine Taste zu klicken. Die Tasten können dann für andere Aktionen genutzt werden. Weitere Beispiele sind Apps zur Karten- oder Satellitenbildbetrachtung.

Mit der Pointer Lock API haben Sie Zugriff auf Mausereignisse, selbst wenn der Cursor über die Grenze des Browsers oder Bildschirms hinausgeht. Beispielsweise können Ihre Nutzer ein 3D-Modell durch Mausbewegung endlos weiterdrehen oder manipulieren. Ohne Pointer-Lock würde die Drehung oder Manipulation stoppen, sobald der Zeiger den Rand des Browsers oder Bildschirms erreicht. Spieler können nun Schaltflächen anklicken und den Mauszeiger hin und her schieben, ohne sich Sorgen machen zu müssen, den Spielbereich zu verlassen und versehentlich eine andere Anwendung anzuklicken, die den Mausfokus vom Spiel abziehen würde.

## Grundlegende Konzepte

Pointer-Lock ist verwandt mit [Pointer-Kapture](/de/docs/Web/API/Pointer_events#pointer_capture). Pointer-Kapture sorgt für eine fortlaufende Übertragung von Ereignissen an ein Ziel-Element, während die Maus gezogen wird, jedoch endet es, wenn die Maustaste losgelassen wird. Pointer-Lock unterscheidet sich von Pointer-Kapture in folgenden Punkten:

- Es ist persistent: Pointer-Lock gibt die Maus nicht frei, bis ein expliziter API-Aufruf erfolgt oder der Benutzer eine spezifische Freigabegeste verwendet.
- Es ist nicht durch Browser- oder Bildschirmgrenzen begrenzt.
- Es sendet weiterhin Ereignisse, unabhängig vom Status der Maustaste.
- Es verbirgt den Cursor.

## Übersicht über Methoden/Eigenschaften

Dieser Abschnitt bietet eine kurze Beschreibung jeder Eigenschaft und Methode, die mit der Pointer-Lock-Spezifikation zusammenhängt.

### requestPointerLock()

Die Pointer-Lock-API, ähnlich der [Fullscreen-API](/de/docs/Web/API/Fullscreen_API), erweitert DOM-Elemente durch Hinzufügen einer neuen Methode [`requestPointerLock()`](/de/docs/Web/API/Element/requestPointerLock). Das folgende Beispiel fordert den Pointer-Lock auf einem {{htmlelement("canvas")}}-Element an:

```js
canvas.addEventListener("click", async () => {
  await canvas.requestPointerLock();
});
```

> [!NOTE]
> Wenn ein Benutzer den Pointer-Lock durch die [Standardfreigabegeste](https://w3c.github.io/pointerlock/#dfn-default-unlock-gesture) verlassen hat oder der Pointer-Lock nicht zuvor für dieses Dokument aktiviert wurde, muss ein Ereignis, das durch eine [Engagement-Geste](https://w3c.github.io/pointerlock/#dfn-engagement-gesture) erzeugt wird, vom Dokument empfangen werden, bevor [`requestPointerLock`](https://w3c.github.io/pointerlock/#dom-element-requestpointerlock) erfolgreich sein kann. (aus <https://w3c.github.io/pointerlock/#extensions-to-the-element-interface>)

Betriebssysteme aktivieren standardmäßig die Mausbeschleunigung, was nützlich ist, wenn Sie manchmal langsame, präzise Bewegungen möchten (denken Sie daran, wie Sie möglicherweise ein Grafikprogramm verwenden), aber auch große Entfernungen mit schneller Mausbewegung zurücklegen möchten (denken Sie an das Scrollen und Auswählen mehrerer Dateien). Für einige Ego-Perspektive-Spiele hingegen sind rohe Mausbewegungsdaten für die Steuerung der Kameradrehung bevorzugt — bei denen die gleiche Bewegungsdistanz, ob schnell oder langsam, zur gleichen Drehung führt. Dies führt zu einem besseren Spielerlebnis und höherer Genauigkeit laut professioneller Spieler.

Um die mausbeschleunigende Ebene des Betriebssystems zu deaktivieren und auf rohe Mausdaten zuzugreifen, können Sie `unadjustedMovement` auf `true` setzen:

```js
canvas.addEventListener("click", async () => {
  await canvas.requestPointerLock({
    unadjustedMovement: true,
  });
});
```

## Umgang mit Promise- und Nicht-Promise-Versionen von requestPointerLock()

Der obige Code-Schnipsel funktioniert weiterhin in Browsern, die die auf Promises basierende Version von `requestPointerLock()` oder die Option `unadjustedMovement` nicht unterstützen — der [`await`](/de/docs/Web/JavaScript/Reference/Operators/await)-Operator ist vor einer Funktion erlaubt, die kein Promise zurückgibt, und das Optionsobjekt wird in nicht unterstützenden Browsern einfach ignoriert.

Dies könnte jedoch verwirrend sein und andere potenzielle Seiteneffekte haben (zum Beispiel würde das Verwenden von `requestPointerLock().then()` in nicht unterstützenden Browsern einen Fehler verursachen), daher ist es möglicherweise sinnvoll, dies explizit mit Code wie dem folgenden zu behandeln:

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

Die Pointer-Lock-API erweitert auch das [`Document`](/de/docs/Web/API/Document)-Interface und fügt eine neue Eigenschaft und eine neue Methode hinzu:

- [`pointerLockElement`](/de/docs/Web/API/Document/pointerLockElement) wird verwendet, um auf das aktuell gesperrte Element (falls vorhanden) zuzugreifen.
- [`exitPointerLock()`](/de/docs/Web/API/Document/exitPointerLock) wird verwendet, um den Pointer-Lock zu beenden.

Die [`pointerLockElement`](/de/docs/Web/API/Document/pointerLockElement)-Eigenschaft ist nützlich, um festzustellen, ob ein Element derzeit gesperrt ist (zum Beispiel für eine boolesche Prüfung) und um eine Referenz auf das gesperrte Element zu erhalten, falls vorhanden.

Hier ein Beispiel zur Verwendung von `pointerLockElement`:

```js
if (document.pointerLockElement === canvas) {
  console.log("The pointer lock status is now locked");
} else {
  console.log("The pointer lock status is now unlocked");
}
```

Die Methode [`Document.exitPointerLock()`](/de/docs/Web/API/Document/exitPointerLock) wird verwendet, um den Pointer-Lock zu beenden, und funktioniert ähnlich wie [`requestPointerLock`](/de/docs/Web/API/Element/requestPointerLock) asynchron unter Verwendung der Ereignisse [`pointerlockchange`](/de/docs/Web/API/Document/pointerlockchange_event) und [`pointerlockerror`](/de/docs/Web/API/Document/pointerlockerror_event), über die Sie weiter unten mehr erfahren werden.

```js
document.exitPointerLock();
```

## pointerlockchange-Ereignis

Wenn sich der Zustand des Pointer-Locks ändert — zum Beispiel beim Aufruf von [`requestPointerLock()`](/de/docs/Web/API/Element/requestPointerLock) oder [`exitPointerLock()`](/de/docs/Web/API/Document/exitPointerLock), beim Drücken der ESC-Taste durch den Benutzer usw. — wird das [`pointerlockchange`](/de/docs/Web/API/Document/pointerlockchange_event)-Ereignis an das `document` gesendet. Dies ist ein einfaches Ereignis, das keine zusätzlichen Daten enthält.

```js
document.addEventListener("pointerlockchange", lockChangeAlert);

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

## pointerlockerror-Ereignis

Wenn ein Fehler verursacht wird, indem [`requestPointerLock()`](/de/docs/Web/API/Element/requestPointerLock) oder [`exitPointerLock()`](/de/docs/Web/API/Document/exitPointerLock) aufgerufen wird, wird das [`pointerlockerror`](/de/docs/Web/API/Document/pointerlockerror_event)-Ereignis an das `document` gesendet. Dies ist ein einfaches Ereignis, das keine zusätzlichen Daten enthält.

```js
document.addEventListener("pointerlockerror", lockError);

function lockError(e) {
  alert("Pointer lock failed");
}
```

## Erweiterungen von Mausereignissen

Die Pointer-Lock-API erweitert das normale [`MouseEvent`](/de/docs/Web/API/MouseEvent)-Interface mit Bewegungsattributen. Zwei neue Attribute für Mausereignisse — [`movementX`](/de/docs/Web/API/MouseEvent/movementX) und [`movementY`](/de/docs/Web/API/MouseEvent/movementY) — geben die Änderung der Mauspositionen an. Die Werte der Parameter entsprechen dem Unterschied zwischen den Werten der [`MouseEvent`](/de/docs/Web/API/MouseEvent)-Eigenschaften, [`screenX`](/de/docs/Web/API/MouseEvent/screenX) und [`screenY`](/de/docs/Web/API/MouseEvent/screenY), die in zwei aufeinanderfolgenden [`mousemove`](/de/docs/Web/API/Element/mousemove_event)-Ereignissen, `eNow` und `ePrevious`, gespeichert werden. Anders ausgedrückt, der Pointer-Lock-Parameter `movementX = eNow.screenX - ePrevious.screenX`.

### Gesperrter Zustand

Wenn der Pointer-Lock aktiviert ist, bleiben die standardmäßigen [`MouseEvent`](/de/docs/Web/API/MouseEvent)-Eigenschaften [`clientX`](/de/docs/Web/API/MouseEvent/clientX), [`clientY`](/de/docs/Web/API/MouseEvent/clientY), [`screenX`](/de/docs/Web/API/MouseEvent/screenX) und [`screenY`](/de/docs/Web/API/MouseEvent/screenY) konstant, als ob die Maus nicht bewegt wird. Die [`movementX`](/de/docs/Web/API/MouseEvent/movementX)- und [`movementY`](/de/docs/Web/API/MouseEvent/movementY)-Eigenschaften geben weiterhin die Positionsänderung der Maus an. Es gibt keine Begrenzung für die Werte von [`movementX`](/de/docs/Web/API/MouseEvent/movementX) und [`movementY`](/de/docs/Web/API/MouseEvent/movementY), wenn die Maus kontinuierlich in eine Richtung bewegt wird. Es gibt kein Konzept des Mauszeigers und der Cursor kann nicht vom Fenster weg- oder durch einen Bildschirmrand blockiert werden.

### Nicht gesperrter Zustand

Die Parameter [`movementX`](/de/docs/Web/API/MouseEvent/movementX) und [`movementY`](/de/docs/Web/API/MouseEvent/movementY) sind unabhängig vom Maus-Lock-Zustand gültig und stehen aus Bequemlichkeit auch im entsperrten Zustand zur Verfügung.

Wenn die Maus entsperrt ist, kann der Systemcursor das Browserfenster verlassen und wieder betreten. Falls dies geschieht, könnten [`movementX`](/de/docs/Web/API/MouseEvent/movementX) und [`movementY`](/de/docs/Web/API/MouseEvent/movementY) auf null gesetzt werden.

## Einfaches Beispiel-Durchgang

Wir haben ein [Pointer-Lock-Demo](https://mdn.github.io/dom-examples/pointer-lock/) ([Quellcode ansehen](https://github.com/mdn/dom-examples/tree/main/pointer-lock)) geschrieben, um Ihnen zu zeigen, wie man es verwendet, um ein einfaches Steuersystem einzurichten. Diese Demo verwendet JavaScript, um einen Ball auf einem {{ htmlelement("canvas") }}-Element zu zeichnen. Wenn Sie auf das Canvas klicken, wird Pointer-Lock verwendet, um den Mauszeiger zu entfernen und den Ball direkt mit der Maus zu bewegen. Schauen wir uns an, wie das funktioniert.

Wir setzen anfängliche x- und y-Positionen auf dem Canvas:

```js
let x = 50;
let y = 50;
```

Als Nächstes richten wir einen Ereignislistener ein, um die `requestPointerLock()`-Methode auf dem Canvas auszuführen, wenn es angeklickt wird, was den Pointer-Lock initiiert. Die `document.pointerLockElement`-Überprüfung dient dazu, zu sehen, ob bereits ein aktiver Pointer-Lock vorhanden ist — wir möchten `requestPointerLock()` nicht bei jedem Klick innerhalb des Canvas aufrufen, wenn wir bereits einen Pointer-Lock haben.

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
> Der obige Ausschnitt funktioniert in Browsern, die die Promise-Version von `requestPointerLock()` nicht unterstützen. Siehe [Umgang mit Promise- und Nicht-Promise-Versionen von requestPointerLock()](#handling_promise_and_non-promise_versions_of_requestpointerlock) für eine Erklärung.

Nun zum dedizierten Pointer-Lock-Ereignislistener: `pointerlockchange`. Wenn dies geschieht, führen wir eine Funktion namens `lockChangeAlert()` aus, um die Änderung zu handhaben.

```js
document.addEventListener("pointerlockchange", lockChangeAlert);
```

Diese Funktion überprüft die `pointerLockElement`-Eigenschaft, um zu sehen, ob es unser Canvas ist. Falls ja, wird ein Ereignislistener hinzugefügt, um die Mausbewegungen mit der Funktion `updatePosition()` zu bearbeiten. Andernfalls wird der Ereignislistener wieder entfernt.

```js
function lockChangeAlert() {
  if (document.pointerLockElement === canvas) {
    console.log("The pointer lock status is now locked");
    document.addEventListener("mousemove", updatePosition);
  } else {
    console.log("The pointer lock status is now unlocked");
    document.removeEventListener("mousemove", updatePosition);
  }
}
```

Die Funktion `updatePosition()` aktualisiert die Position des Balls auf dem Canvas (`x` und `y`) und enthält auch `if ()`-Anweisungen, um zu überprüfen, ob der Ball über die Ränder des Canvas hinausgegangen ist. Falls ja, wird der Ball dazu gebracht, zum gegenüberliegenden Rand zu springen. Sie enthält auch eine Prüfung, ob ein vorheriger Aufruf von [`requestAnimationFrame()`](/de/docs/Web/API/Window/requestAnimationFrame) erfolgt ist, und wenn ja, wird dieser bei Bedarf erneut aufgerufen und die Funktion `canvasDraw()`, die die Canvas-Szene aktualisiert, wird aufgerufen. Ein Tracker wird ebenfalls eingerichtet, um die X- und Y-Werte zur Referenz auf dem Bildschirm auszugeben.

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

  animation ??= requestAnimationFrame(() => {
    animation = null;
    canvasDraw();
  });
}
```

Die Funktion `canvasDraw()` zeichnet den Ball in den aktuellen `x`- und `y`-Positionen:

```js
function canvasDraw() {
  ctx.fillStyle = "black";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "red";
  ctx.beginPath();
  ctx.arc(x, y, RADIUS, 0, degToRad(360), true);
  ctx.fill();
}
```

## Einschränkungen von IFrame

Pointer-Lock kann nur ein {{htmlelement("iframe")}} gleichzeitig sperren. Wenn Sie ein `<iframe>` sperren, können Sie kein weiteres sperren und das Ziel darauf übertragen; Pointer-Lock wird mit einem Fehler abgebrochen. Um diese Einschränkung zu vermeiden, müssen Sie das gesperrte `<iframe>` zuerst entsperren und dann das andere sperren.

Während `<iframe>` standardmäßig funktioniert, blockieren "sandboxed" `<iframe>`s Pointer-Lock. Um diese Einschränkung zu vermeiden, verwenden Sie `<iframe sandbox="allow-pointer-lock">`.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`MouseEvent`](/de/docs/Web/API/MouseEvent)
- [`Element.requestPointerLock()`](/de/docs/Web/API/Element/requestPointerLock)
