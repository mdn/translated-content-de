---
title: Pointer Lock API
slug: Web/API/Pointer_Lock_API
l10n:
  sourceCommit: 802b6063046dffb7634d2138aadcd92cb22ed40c
---

{{DefaultAPISidebar("Pointer Lock API")}}

Die **Pointer Lock API** (früher _Mouse Lock API_ genannt) bietet Eingabemethoden basierend auf der Bewegung der Maus über die Zeit (d. h. Deltas), nicht nur die absolute Position des Mauszeigers im Viewport. Sie gibt Ihnen Zugang zu rohen Mausbewegungen, fixiert das Ziel von Mausereignissen auf ein einziges Element, beseitigt Limitierungen, wie weit die Mausbewegung in eine Richtung gehen kann, und entfernt den Cursor aus der Ansicht. Sie ist ideal für Ego-Perspektive-3D-Spiele, zum Beispiel.

Darüber hinaus ist die API nützlich für Anwendungen, die erhebliche Mausbewegungen erfordern, um Bewegungen zu steuern, Objekte zu drehen und Eingaben zu ändern, zum Beispiel um es Nutzern zu ermöglichen, den Blickwinkel durch Mausbewegungen zu steuern, ohne eine Taste zu drücken. Die Tasten sind dann für andere Aktionen frei. Weitere Beispiele sind Apps zum Betrachten von Karten oder Satellitenbildern.

Pointer Lock ermöglicht den Zugriff auf Mausereignisse, selbst wenn der Cursor die Grenze des Browsers oder Bildschirms überschreitet. Ihre Nutzer können beispielsweise ein 3D-Modell weiter drehen oder manipulieren, indem sie die Maus ununterbrochen bewegen. Ohne Pointer Lock stoppt die Rotation oder Manipulation in dem Moment, in dem der Zeiger den Rand des Browsers oder Bildschirms erreicht. Spieler können nun Schaltflächen anklicken und den Mauszeiger hin und her bewegen, ohne sich Sorgen machen zu müssen, den Spielbereich zu verlassen und versehentlich eine andere Anwendung anzuklicken, die den Mausschwerpunkt vom Spiel wegnehmen würde.

## Grundkonzepte

Pointer Lock ist verwandt mit [Pointer Capture](/de/docs/Web/API/Pointer_events#pointer_capture). Pointer Capture bietet eine kontinuierliche Übermittlung von Ereignissen an ein Ziel-Element, während die Maus gezogen wird, stoppt jedoch, wenn die Maustaste losgelassen wird. Pointer Lock unterscheidet sich von Pointer Capture in folgenden Punkten:

- Es ist persistent: Pointer Lock gibt die Maus erst frei, wenn ein expliziter API-Aufruf gemacht wird oder der Benutzer eine spezifische Freigabegeste verwendet.
- Es ist nicht durch Browser- oder Bildschirmgrenzen begrenzt.
- Es sendet weiterhin Ereignisse unabhängig vom Status der Maustaste.
- Es versteckt den Cursor.

## Übersicht über Methoden/Properties

Dieser Abschnitt bietet eine kurze Beschreibung jeder Eigenschaft und Methode, die mit der Pointer Lock Spezifikation verbunden sind.

### requestPointerLock()

Die Pointer Lock API erweitert DOM-Elemente um eine neue Methode, [`requestPointerLock()`](/de/docs/Web/API/Element/requestPointerLock), ähnlich wie die [Fullscreen API](/de/docs/Web/API/Fullscreen_API). Das folgende Beispiel fordert Pointer Lock auf einem {{htmlelement("canvas")}} Element an:

```js
canvas.addEventListener("click", async () => {
  await canvas.requestPointerLock();
});
```

> [!NOTE]
> Wenn ein Benutzer über die [Standard-Freigabegeste](https://w3c.github.io/pointerlock/#dfn-default-unlock-gesture) den Pointer Lock verlassen hat oder Pointer Lock für dieses Dokument zuvor nicht aktiviert wurde, muss ein Ereignis, das als Ergebnis einer [Engagement-Geste](https://w3c.github.io/pointerlock/#dfn-engagement-gesture) generiert wurde, vom Dokument empfangen werden, bevor [`requestPointerLock`](https://w3c.github.io/pointerlock/#dom-element-requestpointerlock) erfolgreich ist. (aus <https://w3c.github.io/pointerlock/#extensions-to-the-element-interface>)

Betriebssysteme aktivieren standardmäßig eine Mausbeschleunigung, die nützlich ist, wenn Sie manchmal eine langsame präzise Bewegung wünschen (denken Sie an die Nutzung eines Grafikprogramms), aber auch große Distanzen mit einer schnelleren Mausbewegung zurücklegen wollen (denken Sie an das Scrollen oder das Auswählen mehrerer Dateien). Für einige Spiele aus der Ego-Perspektive wird jedoch bevorzugt auf rohe Mausdaten für die Steuerung der Kameradrehung zurückgegriffen — wobei dieselbe zurückgelegte Distanz, egal ob schnell oder langsam, zu derselben Drehung führt. Dies sorgt für ein besseres Spielerlebnis und höhere Genauigkeit, so professionelle Gamer.

Um die Betriebssystem-eigene Mausbeschleunigung zu deaktivieren und auf rohe Mausdaten zuzugreifen, können Sie `unadjustedMovement` auf `true` setzen:

```js
canvas.addEventListener("click", async () => {
  await canvas.requestPointerLock({
    unadjustedMovement: true,
  });
});
```

## Umgang mit Promise- und Non-Promise-Versionen von requestPointerLock()

Der obige Code-Schnipsel funktioniert weiterhin in Browsern, die die Promise-basierte Version von `requestPointerLock()` oder die Option `unadjustedMovement` nicht unterstützen — der [`await`](/de/docs/Web/JavaScript/Reference/Operators/await)-Operator ist vor einer Funktion, die kein Promise zurückgibt, erlaubt, und das Optionsobjekt wird einfach in nicht unterstützenden Browsern ignoriert.

Allerdings könnte dies verwirrend sein und andere potenzielle Nebeneffekte haben (zum Beispiel, dass die Verwendung von `requestPointerLock().then()` in nicht unterstützenden Browsern einen Fehler auslöst), daher möchten Sie dies vielleicht explizit mit Code wie dem folgenden behandeln:

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

Die Pointer Lock API erweitert auch die [`Document`](/de/docs/Web/API/Document)-Schnittstelle und fügt eine neue Eigenschaft und eine neue Methode hinzu:

- [`pointerLockElement`](/de/docs/Web/API/Document/pointerLockElement) wird verwendet, um auf das aktuell gesperrte Element zuzugreifen (falls vorhanden).
- [`exitPointerLock()`](/de/docs/Web/API/Document/exitPointerLock) wird verwendet, um den Pointer Lock zu verlassen.

Die [`pointerLockElement`](/de/docs/Web/API/Document/pointerLockElement)-Eigenschaft ist nützlich, um festzustellen, ob derzeit ein Element im Pointer Lock ist (z. B. für eine boolesche Überprüfung) und auch um eine Referenz auf das gesperrte Element zu erhalten, falls vorhanden.

Hier ist ein Beispiel für die Verwendung von `pointerLockElement`:

```js
if (document.pointerLockElement === canvas) {
  console.log("The pointer lock status is now locked");
} else {
  console.log("The pointer lock status is now unlocked");
}
```

Die Methode [`Document.exitPointerLock()`](/de/docs/Web/API/Document/exitPointerLock) wird verwendet, um den Pointer Lock zu verlassen, und funktioniert ähnlich wie [`requestPointerLock`](/de/docs/Web/API/Element/requestPointerLock) asynchron mit den Ereignissen [`pointerlockchange`](/de/docs/Web/API/Document/pointerlockchange_event) und [`pointerlockerror`](/de/docs/Web/API/Document/pointerlockerror_event), die Sie weiter unten sehen werden.

```js
document.exitPointerLock();
```

## pointerlockchange Event

Wenn sich der Zustand des Pointer Locks ändert — z. B. beim Aufrufen von [`requestPointerLock()`](/de/docs/Web/API/Element/requestPointerLock) oder [`exitPointerLock()`](/de/docs/Web/API/Document/exitPointerLock), beim Drücken der ESC-Taste durch den Nutzer usw. — wird das [`pointerlockchange`](/de/docs/Web/API/Document/pointerlockchange_event)-Ereignis an das `document` gesendet. Dies ist ein einfaches Ereignis ohne zusätzliche Daten.

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

## pointerlockerror Event

Wenn durch das Aufrufen von [`requestPointerLock()`](/de/docs/Web/API/Element/requestPointerLock) oder [`exitPointerLock()`](/de/docs/Web/API/Document/exitPointerLock) ein Fehler verursacht wird, wird das [`pointerlockerror`](/de/docs/Web/API/Document/pointerlockerror_event)-Ereignis an das `document` gesendet. Dies ist ein einfaches Ereignis ohne zusätzliche Daten.

```js
document.addEventListener("pointerlockerror", lockError, false);

function lockError(e) {
  alert("Pointer lock failed");
}
```

## Erweiterungen zu Mausereignissen

Die Pointer Lock API erweitert die normale [`MouseEvent`](/de/docs/Web/API/MouseEvent)-Schnittstelle mit Bewegungsattributen. Zwei neue Attribute zu Mausereignissen — [`movementX`](/de/docs/Web/API/MouseEvent/movementX) und [`movementY`](/de/docs/Web/API/MouseEvent/movementY) — liefern die Änderung der Mauspositionen. Die Werte der Parameter entsprechen der Differenz zwischen den Werten der [`MouseEvent`](/de/docs/Web/API/MouseEvent)-Eigenschaften, [`screenX`](/de/docs/Web/API/MouseEvent/screenX) und [`screenY`](/de/docs/Web/API/MouseEvent/screenY), die in zwei aufeinanderfolgenden [`mousemove`](/de/docs/Web/API/Element/mousemove_event)-Ereignissen, `eNow` und `ePrevious`, gespeichert sind. Mit anderen Worten: Der Pointer-Lock-Parameter `movementX = eNow.screenX - ePrevious.screenX`.

### Gesperrter Zustand

Wenn Pointer Lock aktiviert ist, bleiben die standardmäßigen [`MouseEvent`](/de/docs/Web/API/MouseEvent)-Eigenschaften [`clientX`](/de/docs/Web/API/MouseEvent/clientX), [`clientY`](/de/docs/Web/API/MouseEvent/clientY), [`screenX`](/de/docs/Web/API/MouseEvent/screenX) und [`screenY`](/de/docs/Web/API/MouseEvent/screenY) konstant, als ob sich die Maus nicht bewegt. Die Eigenschaften [`movementX`](/de/docs/Web/API/MouseEvent/movementX) und [`movementY`](/de/docs/Web/API/MouseEvent/movementY) liefern weiterhin die Änderung der Position der Maus. Es gibt kein Limit für die Werte von [`movementX`](/de/docs/Web/API/MouseEvent/movementX) und [`movementY`](/de/docs/Web/API/MouseEvent/movementY), wenn sich die Maus kontinuierlich in eine Richtung bewegt. Das Konzept des Mauszeigers existiert nicht und der Zeiger kann sich nicht außerhalb des Fensters bewegen oder durch einen Bildschirmrand begrenzt werden.

### Entsperrter Zustand

Die Parameter [`movementX`](/de/docs/Web/API/MouseEvent/movementX) und [`movementY`](/de/docs/Web/API/MouseEvent/movementY) sind unabhängig vom Zustand des Maus-Locks gültig und sind auch dann verfügbar, wenn entsperrt, zur Bequemlichkeit.

Wenn die Maus entsperrt ist, kann der System-Cursor das Browserfenster verlassen und wieder betreten. Wenn das passiert, könnten [`movementX`](/de/docs/Web/API/MouseEvent/movementX) und [`movementY`](/de/docs/Web/API/MouseEvent/movementY) auf Null gesetzt werden.

## Einfache Beispiel-Durchführung

Wir haben eine [Pointer-Lock-Demo](https://mdn.github.io/dom-examples/pointer-lock/) ([siehe Quellcode](https://github.com/mdn/dom-examples/tree/main/pointer-lock)) geschrieben, um Ihnen zu zeigen, wie Sie es einrichten können, um ein einfaches Steuerungssystem zu erstellen. Diese Demo verwendet JavaScript, um einen Ball auf einem {{ htmlelement("canvas") }}-Element zu zeichnen. Wenn Sie auf das Canvas klicken, wird Pointer Lock verwendet, um den Mauszeiger zu entfernen und es Ihnen zu ermöglichen, den Ball direkt mit der Maus zu bewegen. Sehen wir uns an, wie das funktioniert.

Wir setzen anfängliche X- und Y-Positionen auf der Leinwand:

```js
let x = 50;
let y = 50;
```

Als nächstes richten wir einen Ereignis-Listener ein, um die `requestPointerLock()`-Methode auf dem Canvas auszuführen, wenn darauf geklickt wird, was den Pointer Lock initiiert. Die Überprüfung `document.pointerLockElement` dient dazu, zu prüfen, ob bereits ein aktiver Pointer Lock vorhanden ist — wir möchten nicht jedes Mal `requestPointerLock()` auf dem Canvas aufrufen, wenn wir hinein klicken, wenn wir bereits Pointer Lock haben.

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
> Der obige Schnipsel funktioniert in Browsern, die die Promise-Version von `requestPointerLock()` nicht unterstützen. Siehe [Umgang mit Promise- und Non-Promise-Versionen von requestPointerLock()](#handling_promise_and_non-promise_versions_of_requestpointerlock) für eine Erklärung.

Jetzt für den dedizierten Pointer-Lock-Ereignis-Listener: `pointerlockchange`. Wenn dies passiert, rufen wir eine Funktion namens `lockChangeAlert()` auf, um die Änderung zu bearbeiten.

```js
document.addEventListener("pointerlockchange", lockChangeAlert, false);
```

Diese Funktion prüft die `pointerLockElement`-Eigenschaft, um zu sehen, ob es unser Canvas ist. Falls ja, wird ein Ereignis-Listener angehängt, um die Mausbewegungen mit der Funktion `updatePosition()` zu bearbeiten. Falls nicht, wird der Ereignis-Listener wieder entfernt.

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

Die Funktion `updatePosition()` aktualisiert die Position des Balls auf dem Canvas (`x` und `y`) und enthält auch `if ()`-Anweisungen, um zu prüfen, ob der Ball die Ränder des Canvas verlassen hat. Falls dies der Fall ist, wird der Ball zu der gegenüberliegenden Kante bewegt. Sie enthält auch eine Prüfung, ob ein [`requestAnimationFrame()`](/de/docs/Web/API/Window/requestAnimationFrame)-Aufruf zuvor gemacht wurde, und falls erforderlich, ruft diesen erneut auf und ruft die `canvasDraw()`-Funktion auf, die die Canvas-Szene aktualisiert. Ein Tracker wird ebenfalls eingerichtet, um die X- und Y-Werte auf den Bildschirm zu schreiben, als Referenz.

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

Die Funktion `canvasDraw()` zeichnet den Ball in den aktuellen `x`- und `y`-Positionen:

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

## IFrame-Einschränkungen

Pointer Lock kann nur ein {{htmlelement("iframe")}} zur selben Zeit sperren. Wenn Sie ein `<iframe>` sperren, können Sie kein weiteres sperren und das Ziel darauf übertragen; der Pointer Lock wird fehlschlagen. Um diese Einschränkung zu vermeiden, entsperren Sie zuerst das gesperrte `<iframe>`, und sperren Sie dann das andere.

Während `<iframe>` standardmäßig funktionieren, blockieren "sandboxed" `<iframe>`s den Pointer Lock. Um diese Einschränkung zu vermeiden, verwenden Sie `<iframe sandbox="allow-pointer-lock">`.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`MouseEvent`](/de/docs/Web/API/MouseEvent)
- [`Element.requestPointerLock()`](/de/docs/Web/API/Element/requestPointerLock)
