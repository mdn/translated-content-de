---
title: Pointer Lock API
slug: Web/API/Pointer_Lock_API
l10n:
  sourceCommit: 58cc81b21f777d745877ec1430df8ba2852ff411
---

{{DefaultAPISidebar("Pointer Lock API")}}

Die **Pointer Lock API** (früher _Mouse Lock API_ genannt) bietet Eingabemethoden, die auf der Bewegung der Maus über die Zeit basieren (d.h. Deltas), nicht nur auf der absoluten Position des Mauszeigers im Viewport. Sie ermöglicht den Zugriff auf die rohe Mausbewegung, sperrt das Ziel von Mausereignissen auf ein einzelnes Element, beseitigt Grenzen, wie weit sich die Maus in eine Richtung bewegen kann, und entfernt den Zeiger aus der Ansicht. Sie ist ideal für Ego-3D-Spiele, zum Beispiel.

Darüber hinaus ist die API nützlich für Anwendungen, die signifikante Mauseingaben zur Steuerung von Bewegungen, zum Drehen von Objekten und zum Ändern von Einträgen erfordern, indem z. B. Benutzern ermöglicht wird, den Blickwinkel durch Bewegen der Maus ohne Mausklick zu steuern. Die Tasten werden dann für andere Aktionen freigegeben. Weitere Beispiele sind Apps zur Betrachtung von Karten oder Satellitenbildern.

Der Pointer Lock ermöglicht den Zugriff auf Mausereignisse, selbst wenn der Zeiger über den Rand des Browsers oder Bildschirms hinausgeht. Benutzer können zum Beispiel weiterhin ein 3D-Modell drehen oder manipulieren, indem sie die Maus unendlich bewegen. Ohne Pointer Lock stoppt die Drehung oder Manipulation in dem Moment, in dem der Zeiger den Rand des Browsers oder Bildschirms erreicht. Spieler können jetzt Tasten klicken und den Mauszeiger hin- und herbewegen, ohne befürchten zu müssen, den Spielbereich zu verlassen und versehentlich eine andere Anwendung zu klicken, die den Mausfokus vom Spiel ablenken würde.

## Grundlegende Konzepte

Pointer Lock ist mit [Pointer Capture](/de/docs/Web/API/Pointer_events#pointer_capture) verwandt. Pointer Capture bietet die kontinuierliche Übertragung von Ereignissen an ein Zielelement, während eine Maus gezogen wird, aber es stoppt, wenn die Maustaste losgelassen wird. Pointer Lock unterscheidet sich von Pointer Capture in folgenden Punkten:

- Es ist persistent: Pointer Lock gibt die Maus nicht frei, bis ein expliziter API-Aufruf erfolgt oder der Benutzer eine bestimmte Entlassungsgeste verwendet.
- Es ist nicht durch Browser- oder Bildschirmgrenzen beschränkt.
- Es sendet weiterhin Ereignisse unabhängig vom Zustand der Maustaste.
- Es versteckt den Cursor.

## Übersicht über Methoden/Eigenschaften

Dieser Abschnitt bietet eine kurze Beschreibung jeder Eigenschaft und Methode, die sich auf die Pointer Lock Spezifikation bezieht.

### requestPointerLock()

Die Pointer Lock API, ähnlich der [Fullscreen API](/de/docs/Web/API/Fullscreen_API), erweitert DOM-Elemente um eine neue Methode, [`requestPointerLock()`](/de/docs/Web/API/Element/requestPointerLock). Das folgende Beispiel fordert Pointer Lock für ein {{htmlelement("canvas")}}-Element an:

```js
canvas.addEventListener("click", async () => {
  await canvas.requestPointerLock();
});
```

> [!NOTE]
> Wenn ein Benutzer den Pointer Lock über die [Standard-Entsperrgeste](https://w3c.github.io/pointerlock/#dfn-default-unlock-gesture) verlassen hat oder der Pointer Lock zuvor nicht für dieses Dokument aktiviert wurde, muss ein Ereignis, das als Ergebnis einer [Eingriffsgeste](https://w3c.github.io/pointerlock/#dfn-engagement-gesture) erzeugt wurde, vom Dokument empfangen werden, bevor [`requestPointerLock`](https://w3c.github.io/pointerlock/#dom-element-requestpointerlock) erfolgreich sein wird. (aus <https://w3c.github.io/pointerlock/#extensions-to-the-element-interface>)

Betriebssysteme aktivieren standardmäßig die Mausbeschleunigung, was nützlich ist, wenn Sie manchmal langsame präzise Bewegungen wünschen (denken Sie daran, wie Sie ein Grafikprogramm verwenden könnten), aber auch große Entfernungen mit schneller Maussbewegung zurücklegen möchten (denken Sie an Scrollen und das Auswählen mehrerer Dateien). Für einige Ego-Perspektiven-Spiele wird jedoch bevorzugt, rohe Mausdaten für die Steuerung der Kamera-Rotation zu verwenden – wobei die gleiche Bewegungsdistanz, ob schnell oder langsam, zu derselben Rotation führt. Laut professionellen Spielern führt dies zu einem besseren Spielerlebnis und höherer Genauigkeit.

Um die OS-Ebene der Mausbeschleunigung zu deaktivieren und Zugriff auf rohe Mausdaten zu erhalten, können Sie `unadjustedMovement` auf `true` setzen:

```js
canvas.addEventListener("click", async () => {
  await canvas.requestPointerLock({
    unadjustedMovement: true,
  });
});
```

## Umgang mit Promise- und Nicht-Promise-Versionen von requestPointerLock()

Der obige Codeausschnitt funktioniert weiterhin in Browsern, die die auf Promise basierende Version von `requestPointerLock()` oder die `unadjustedMovement`-Option nicht unterstützen — der [`await`](/de/docs/Web/JavaScript/Reference/Operators/await)-Operator ist vor einer Funktion zulässig, die kein Promise zurückgibt, und das Optionsobjekt wird in nicht unterstützenden Browsern einfach ignoriert.

Dies könnte jedoch verwirrend sein und andere potenzielle Nebeneffekte haben (zum Beispiel würde der Versuch, `requestPointerLock().then()` in nicht unterstützenden Browsern zu verwenden, einen Fehler auslösen), daher sollten Sie dies möglicherweise explizit mit einem Code wie dem folgenden handhaben:

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
- [`exitPointerLock()`](/de/docs/Web/API/Document/exitPointerLock) wird verwendet, um den Pointer Lock zu beenden.

Die [`pointerLockElement`](/de/docs/Web/API/Document/pointerLockElement)-Eigenschaft ist nützlich, um festzustellen, ob ein Element derzeit pointergelockt ist (z. B. für eine boolesche Prüfung) und um eine Referenz auf das gesperrte Element zu erhalten, falls vorhanden.

Hier ist ein Beispiel für die Verwendung von `pointerLockElement`:

```js
if (document.pointerLockElement === canvas) {
  console.log("The pointer lock status is now locked");
} else {
  console.log("The pointer lock status is now unlocked");
}
```

Die [`Document.exitPointerLock()`](/de/docs/Web/API/Document/exitPointerLock)-Methode wird verwendet, um den Pointer Lock zu beenden und funktioniert, wie [`requestPointerLock`](/de/docs/Web/API/Element/requestPointerLock), asynchron mithilfe der [`pointerlockchange`](/de/docs/Web/API/Document/pointerlockchange_event) und [`pointerlockerror`](/de/docs/Web/API/Document/pointerlockerror_event) Ereignisse, die Sie weiter unten sehen werden.

```js
document.exitPointerLock();
```

## pointerlockchange-Ereignis

Wenn sich der Pointer Lock-Zustand ändert — zum Beispiel beim Aufrufen von [`requestPointerLock()`](/de/docs/Web/API/Element/requestPointerLock) oder [`exitPointerLock()`](/de/docs/Web/API/Document/exitPointerLock), beim Benutzer der ESC-Taste usw. — wird das [`pointerlockchange`](/de/docs/Web/API/Document/pointerlockchange_event)-Ereignis an das `document` gesendet. Dies ist ein einfaches Ereignis ohne zusätzliche Daten.

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

## pointerlockerror-Ereignis

Wenn ein Fehler auftritt, der durch das Aufrufen von [`requestPointerLock()`](/de/docs/Web/API/Element/requestPointerLock) oder [`exitPointerLock()`](/de/docs/Web/API/Document/exitPointerLock) verursacht wird, wird das [`pointerlockerror`](/de/docs/Web/API/Document/pointerlockerror_event)-Ereignis an das `document` gesendet. Dies ist ein einfaches Ereignis ohne zusätzliche Daten.

```js
document.addEventListener("pointerlockerror", lockError, false);

function lockError(e) {
  alert("Pointer lock failed");
}
```

## Erweiterungen zu Mausereignissen

Die Pointer Lock API erweitert die normale [`MouseEvent`](/de/docs/Web/API/MouseEvent)-Schnittstelle mit Bewegungsattributen. Zwei neue Attribute für Mausereignisse — [`movementX`](/de/docs/Web/API/MouseEvent/movementX) und [`movementY`](/de/docs/Web/API/MouseEvent/movementY) — bieten die Änderung der Mauspositionen. Die Werte der Parameter sind die gleichen wie der Unterschied zwischen den Werten der [`MouseEvent`](/de/docs/Web/API/MouseEvent)-Eigenschaften, [`screenX`](/de/docs/Web/API/MouseEvent/screenX) und [`screenY`](/de/docs/Web/API/MouseEvent/screenY), die in zwei aufeinander folgenden [`mousemove`](/de/docs/Web/API/Element/mousemove_event)-Ereignissen, `eNow` und `ePrevious`, gespeichert sind. Mit anderen Worten, der Pointer Lock-Parameter `movementX = eNow.screenX - ePrevious.screenX`.

### Gesperrter Zustand

Wenn Pointer Lock aktiviert ist, bleiben die standardmäßigen [`MouseEvent`](/de/docs/Web/API/MouseEvent)-Eigenschaften [`clientX`](/de/docs/Web/API/MouseEvent/clientX), [`clientY`](/de/docs/Web/API/MouseEvent/clientY), [`screenX`](/de/docs/Web/API/MouseEvent/screenX) und [`screenY`](/de/docs/Web/API/MouseEvent/screenY) konstant, als ob die Maus nicht bewegt wird. Die [`movementX`](/de/docs/Web/API/MouseEvent/movementX) und [`movementY`](/de/docs/Web/API/MouseEvent/movementY) Eigenschaften liefern weiterhin die Veränderung der Mausposition. Es gibt keine Begrenzung für die Werte von [`movementX`](/de/docs/Web/API/MouseEvent/movementX) und [`movementY`](/de/docs/Web/API/MouseEvent/movementY), wenn sich die Maus kontinuierlich in einer Richtung bewegt. Das Konzept des Mauszeigers existiert nicht und der Zeiger kann nicht aus dem Fenster herausgehen oder durch eine Bildschirmkante begrenzt werden.

### Entsperrter Zustand

Die Parameter [`movementX`](/de/docs/Web/API/MouseEvent/movementX) und [`movementY`](/de/docs/Web/API/MouseEvent/movementY) sind unabhängig vom Mausverriegelungszustand gültig und stehen auch im entsperrten Zustand zur Verfügung.

Wenn die Maus entsperrt ist, kann der Systemzeiger das Browserfenster verlassen und wieder betreten. Wenn das passiert, könnten [`movementX`](/de/docs/Web/API/MouseEvent/movementX) und [`movementY`](/de/docs/Web/API/MouseEvent/movementY) auf Null gesetzt werden.

## Einfaches Beispieldurchgang

Wir haben einen [Pointer Lock-Demo](https://mdn.github.io/dom-examples/pointer-lock/) ([Quellcode anzeigen](https://github.com/mdn/dom-examples/tree/main/pointer-lock)) geschrieben, um zu zeigen, wie Sie ihn verwenden, um ein einfaches Steuerungssystem einzurichten. Dieses Demo verwendet JavaScript, um einen Ball auf einem {{htmlelement("canvas")}}-Element zu zeichnen. Wenn Sie auf das Canvas klicken, wird Pointer Lock verwendet, um den Mauszeiger zu entfernen und es Ihnen zu ermöglichen, den Ball direkt mit der Maus zu bewegen. Lassen Sie uns sehen, wie das funktioniert.

Wir setzen anfängliche x- und y-Positionen auf dem Canvas:

```js
let x = 50;
let y = 50;
```

Als nächstes richten wir einen Ereignislistener ein, um die `requestPointerLock()`-Methode auf dem Canvas bei einem Klick darauf auszuführen, was den Pointer Lock initiiert. Die `document.pointerLockElement`-Prüfung dient dazu, zu sehen, ob bereits ein aktiver Pointer Lock vorhanden ist — wir wollen `requestPointerLock()` nicht erneut auf dem Canvas aufrufen, wenn wir bereits einen Pointer Lock haben.

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

Jetzt zum dedizierten Pointer Lock-Ereignislistener: `pointerlockchange`. Wenn dies geschieht, rufen wir eine Funktion namens `lockChangeAlert()` auf, um die Änderung zu handhaben.

```js
document.addEventListener("pointerlockchange", lockChangeAlert, false);
```

Diese Funktion überprüft die `pointerLockElement`-Eigenschaft, um zu sehen, ob es sich um unser Canvas handelt. Falls ja, wird ein Ereignis-Listener angehängt, um die Mausbewegungen mit der `updatePosition()`-Funktion zu handhaben. Andernfalls wird der Ereignis-Listener wieder entfernt.

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

Die `updatePosition()`-Funktion aktualisiert die Position des Balls auf dem Canvas (`x` und `y`) und enthält auch `if ()`-Anweisungen, um zu überprüfen, ob der Ball über die Ränder des Canvas hinausgegangen ist. Wenn ja, bringt es den Ball zur gegenüberliegenden Kante zurück. Es enthält auch eine Überprüfung, ob ein [`requestAnimationFrame()`](/de/docs/Web/API/Window/requestAnimationFrame)-Aufruf zuvor gemacht wurde und, falls ja, ruft es ihn bei Bedarf erneut auf und ruft die `canvasDraw()`-Funktion auf, die die Canvas-Szene aktualisiert. Ein Tracker wird ebenfalls eingerichtet, um die X- und Y-Werte zur Referenz auf dem Bildschirm auszugeben.

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

## IFrame-Einschränkungen

Pointer Lock kann nur ein {{htmlelement("iframe")}} gleichzeitig sperren. Wenn Sie ein `<iframe>` sperren, können Sie kein anderes sperren und das Ziel auf dieses übertragen; Pointer Lock wird fehlerhaft. Um diese Einschränkung zu vermeiden, entsperren Sie zuerst das gesperrte `<iframe>` und sperren Sie dann das andere.

Während `<iframe>` standardmäßig funktionieren, blockieren "sandboxed" `<iframe>`s den Pointer Lock. Um diese Einschränkung zu vermeiden, verwenden Sie `<iframe sandbox="allow-pointer-lock">`.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`MouseEvent`](/de/docs/Web/API/MouseEvent)
- [`Element.requestPointerLock()`](/de/docs/Web/API/Element/requestPointerLock)
