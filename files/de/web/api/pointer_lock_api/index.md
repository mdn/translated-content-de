---
title: Pointer Lock API
slug: Web/API/Pointer_Lock_API
l10n:
  sourceCommit: f2dc3d5367203c860cf1a71ce0e972f018523849
---

{{DefaultAPISidebar("Pointer Lock API")}}

Die **Pointer Lock API** (früher Mouse Lock API genannt) bietet Eingabemethoden basierend auf der Bewegung der Maus über die Zeit (d.h. Deltas), nicht nur auf der absoluten Position des Mauszeigers im Ansichtsfenster. Sie gibt Ihnen Zugriff auf rohe Mausbewegungen, sperrt das Ziel von Mausereignissen auf ein einzelnes Element, beseitigt Begrenzungen dafür, wie weit eine Mausbewegung in eine Richtung gehen kann, und entfernt den Cursor aus der Ansicht. Sie ist ideal für Ego-3D-Spiele, zum Beispiel.

Darüber hinaus ist die API nützlich für Anwendungen, die eine umfangreiche Maussteuerung zur Bewegungskontrolle, zum Drehen von Objekten und zum Ändern von Einträgen erfordern, beispielsweise indem Benutzer den Blickwinkel durch Bewegen der Maus ohne Klicken von Tasten steuern können. Die Tasten sind dann für andere Aktionen frei. Weitere Beispiele umfassen Anwendungen zum Anzeigen von Karten oder Satellitenbildern.

Pointer Lock ermöglicht den Zugriff auf Mausereignisse, selbst wenn der Cursor über die Grenze des Browsers oder des Bildschirms hinausgeht. Beispielsweise können Ihre Benutzer weiterhin ein 3D-Modell durch Bewegen der Maus manipulieren oder drehen, ohne dass es endet. Ohne Pointer Lock würde die Drehung oder Manipulation enden, sobald der Zeiger den Rand des Browsers oder Bildschirms erreicht. Spieler können jetzt Tasten klicken und den Mauszeiger hin und her bewegen, ohne befürchten zu müssen, den Spielbereich zu verlassen und versehentlich eine andere Anwendung zu klicken, die den Mausfokus vom Spiel wegnimmt.

## Grundlegende Konzepte

Pointer Lock steht im Zusammenhang mit [Pointer Capture](/de/docs/Web/API/Pointer_events#pointer_capture). Pointer Capture bietet eine fortlaufende Übertragung von Ereignissen an ein Zielelement, während eine Maus gezogen wird, aber es endet, wenn die Maustaste losgelassen wird. Pointer Lock unterscheidet sich in folgenden Punkten von Pointer Capture:

- Es ist persistent: Pointer Lock gibt die Maus nicht frei, bis ein expliziter API-Aufruf vorgenommen wird oder der Benutzer eine spezifische Gestenfreigabe verwendet.
- Es ist nicht durch Browser- oder Bildschirmgrenzen begrenzt.
- Es sendet weiterhin Ereignisse unabhängig vom Zustand der Maustaste.
- Es versteckt den Cursor.

## Übersicht über Methoden/Eigenschaften

Dieser Abschnitt bietet eine kurze Beschreibung jeder Eigenschaft und Methode, die mit der Pointer Lock-Spezifikation in Zusammenhang steht.

### requestPointerLock()

Die Pointer Lock API, ähnlich der [Fullscreen API](/de/docs/Web/API/Fullscreen_API), erweitert DOM-Elemente durch das Hinzufügen einer neuen Methode, [`requestPointerLock()`](/de/docs/Web/API/Element/requestPointerLock). Das folgende Beispiel fordert Pointer Lock für ein {{htmlelement("canvas")}}-Element an:

```js
canvas.addEventListener("click", async () => {
  await canvas.requestPointerLock();
});
```

> [!NOTE]
> Wenn ein Benutzer Pointer Lock über die [standardmäßige Entsperrungsgeste](https://w3c.github.io/pointerlock/#dfn-default-unlock-gesture) verlassen hat oder Pointer Lock zuvor für dieses Dokument nicht aktiviert wurde, muss ein Ereignis als Ergebnis einer [Engagement-Geste](https://w3c.github.io/pointerlock/#dfn-engagement-gesture) vom Dokument empfangen werden, bevor [`requestPointerLock`](https://w3c.github.io/pointerlock/#dom-element-requestpointerlock) erfolgreich sein wird. (aus <https://w3c.github.io/pointerlock/#extensions-to-the-element-interface>)

Betriebssysteme aktivieren standardmäßig die Mausbeschleunigung, was nützlich ist, wenn Sie manchmal langsame präzise Bewegungen wollen (denken Sie daran, wie Sie ein Grafikpaket verwenden könnten), aber auch große Distanzen mit schnellerer Mausbewegung zurücklegen möchten (denken Sie an Scrollen und das Auswählen mehrerer Dateien). Für einige Spiele aus der Ego-Perspektive wird jedoch roher Maus-Input bevorzugt, um die Kamerarotation zu steuern – wobei dieselbe Distanzbewegung, ob schnell oder langsam, zu derselben Rotation führt. Dies führt laut professionellen Spielern zu einem besseren Spielerlebnis und höherer Genauigkeit.

Um die Mausbeschleunigung auf Betriebssystemebene zu deaktivieren und rohen Maus-Input zu erhalten, können Sie `unadjustedMovement` auf `true` setzen:

```js
canvas.addEventListener("click", async () => {
  await canvas.requestPointerLock({
    unadjustedMovement: true,
  });
});
```

## Umgang mit Promise- und Nicht-Promise-Versionen von requestPointerLock()

Der obige Codeausschnitt funktioniert auch in Browsern, die die auf Promise basierende Version von `requestPointerLock()` oder die `unadjustedMovement`-Option nicht unterstützen — der [`await`](/de/docs/Web/JavaScript/Reference/Operators/await)-Operator ist vor einer Funktion erlaubt, die kein Promise zurückgibt, und das Optionsobjekt wird in nicht-unterstützenden Browsern einfach ignoriert.

Dies könnte jedoch verwirrend sein und andere potenzielle Nebeneffekte haben (zum Beispiel würde der Versuch, `requestPointerLock().then()` zu verwenden, in nicht-unterstützenden Browsern einen Fehler auslösen), sodass Sie dies explizit mit einem Code wie dem folgenden behandeln möchten:

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

Die Pointer Lock API erweitert ebenfalls das [`Document`](/de/docs/Web/API/Document)-Interface und fügt eine neue Eigenschaft und eine neue Methode hinzu:

- [`pointerLockElement`](/de/docs/Web/API/Document/pointerLockElement) wird zum Zugriff auf das derzeit gesperrte Element (falls vorhanden) verwendet.
- [`exitPointerLock()`](/de/docs/Web/API/Document/exitPointerLock) wird verwendet, um den Pointer Lock zu beenden.

Die [`pointerLockElement`](/de/docs/Web/API/Document/pointerLockElement)-Eigenschaft ist nützlich, um zu bestimmen, ob ein Element derzeit pointergesperrt ist (z.B. um eine boolesche Überprüfung durchzuführen) und um eine Referenz auf das gesperrte Element zu erhalten, falls vorhanden.

Hier ist ein Beispiel für die Verwendung von `pointerLockElement`:

```js
if (document.pointerLockElement === canvas) {
  console.log("The pointer lock status is now locked");
} else {
  console.log("The pointer lock status is now unlocked");
}
```

Die [`Document.exitPointerLock()`](/de/docs/Web/API/Document/exitPointerLock)-Methode wird verwendet, um den Pointer Lock zu beenden, und funktioniert asynchron ähnlich wie [`requestPointerLock`](/de/docs/Web/API/Element/requestPointerLock), indem die Ereignisse [`pointerlockchange`](/de/docs/Web/API/Document/pointerlockchange_event) und [`pointerlockerror`](/de/docs/Web/API/Document/pointerlockerror_event) verwendet werden, auf die Sie weiter unten mehr sehen werden.

```js
document.exitPointerLock();
```

## Pointerlockchange-Ereignis

Wenn sich der Pointer Lock-Zustand ändert — zum Beispiel beim Aufrufen von [`requestPointerLock()`](/de/docs/Web/API/Element/requestPointerLock) oder [`exitPointerLock()`](/de/docs/Web/API/Document/exitPointerLock), beim Drücken der ESC-Taste durch den Benutzer usw. — wird das [`pointerlockchange`](/de/docs/Web/API/Document/pointerlockchange_event)-Ereignis an das `document` gesendet. Dies ist ein einfaches Ereignis ohne zusätzliche Daten.

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

## Pointerlockerror-Ereignis

Wenn ein Fehler durch das Aufrufen von [`requestPointerLock()`](/de/docs/Web/API/Element/requestPointerLock) oder [`exitPointerLock()`](/de/docs/Web/API/Document/exitPointerLock) verursacht wird, wird das [`pointerlockerror`](/de/docs/Web/API/Document/pointerlockerror_event)-Ereignis an das `document` gesendet. Dies ist ein einfaches Ereignis ohne zusätzliche Daten.

```js
document.addEventListener("pointerlockerror", lockError, false);

function lockError(e) {
  alert("Pointer lock failed");
}
```

## Erweiterungen für Mausereignisse

Die Pointer Lock API erweitert die normale [`MouseEvent`](/de/docs/Web/API/MouseEvent)-Schnittstelle mit Bewegungsattributen. Zwei neue Attribute für Mausereignisse—[`movementX`](/de/docs/Web/API/MouseEvent/movementX) und [`movementY`](/de/docs/Web/API/MouseEvent/movementY)—ergeben die Änderung der Mauspositionen. Die Werte der Parameter entsprechen der Differenz zwischen den Werten der [`MouseEvent`](/de/docs/Web/API/MouseEvent)-Eigenschaften, [`screenX`](/de/docs/Web/API/MouseEvent/screenX) und [`screenY`](/de/docs/Web/API/MouseEvent/screenY), die in zwei aufeinanderfolgenden [`mousemove`](/de/docs/Web/API/Element/mousemove_event)-Ereignissen, `eNow` und `ePrevious`, gespeichert sind. Mit anderen Worten, der Pointer Lock-Parameter `movementX = eNow.screenX - ePrevious.screenX`.

### Gesperrter Zustand

Wenn Pointer Lock aktiviert ist, bleiben die Standard-[`MouseEvent`](/de/docs/Web/API/MouseEvent)-Eigenschaften [`clientX`](/de/docs/Web/API/MouseEvent/clientX), [`clientY`](/de/docs/Web/API/MouseEvent/clientY), [`screenX`](/de/docs/Web/API/MouseEvent/screenX) und [`screenY`](/de/docs/Web/API/MouseEvent/screenY) konstant, als ob die Maus nicht bewegt wird. Die [`movementX`](/de/docs/Web/API/MouseEvent/movementX) und [`movementY`](/de/docs/Web/API/MouseEvent/movementY) Eigenschaften geben weiterhin die Änderung der Mausposition an. Es gibt keine Begrenzung für die Werte von [`movementX`](/de/docs/Web/API/MouseEvent/movementX) und [`movementY`](/de/docs/Web/API/MouseEvent/movementY), wenn die Maus kontinuierlich in eine einzige Richtung bewegt wird. Das Konzept des Mauszeigers existiert nicht und der Cursor kann nicht das Fenster verlassen oder von einer Bildschirmkante begrenzt werden.

### Ungesperrter Zustand

Die Parameter [`movementX`](/de/docs/Web/API/MouseEvent/movementX) und [`movementY`](/de/docs/Web/API/MouseEvent/movementY) sind unabhängig vom Mausverriegelungszustand gültig und sind sogar verfügbar, wenn die Maus nicht gesperrt ist, zur Bequemlichkeit.

Wenn die Maus nicht gesperrt ist, kann der System-Cursor das Browserfenster verlassen und wieder betreten. Wenn dies passiert, könnten [`movementX`](/de/docs/Web/API/MouseEvent/movementX) und [`movementY`](/de/docs/Web/API/MouseEvent/movementY) auf Null gesetzt werden.

## Einfaches Beispiel durchlaufen

Wir haben ein [Pointer Lock Demo](https://mdn.github.io/dom-examples/pointer-lock/) ([siehe Quellcode](https://github.com/mdn/dom-examples/tree/main/pointer-lock)) erstellt, um Ihnen zu zeigen, wie es verwendet wird, um ein einfaches Steuerungssystem einzurichten. Diese Demo verwendet JavaScript, um einen Ball auf einem {{ htmlelement("canvas") }}-Element zu zeichnen. Wenn Sie auf die Leinwand klicken, wird Pointer Lock verwendet, um den Mauszeiger zu entfernen und Ihnen zu ermöglichen, den Ball direkt mit der Maus zu bewegen. Lassen Sie uns sehen, wie das funktioniert.

Wir setzen anfängliche x- und y-Positionen auf der Leinwand:

```js
let x = 50;
let y = 50;
```

Als nächstes richten wir einen Ereignis-Listener ein, um die `requestPointerLock()`-Methode auf der Leinwand auszuführen, wenn darauf geklickt wird, wodurch der Zeigersperre initiiert wird. Die `document.pointerLockElement`-Überprüfung dient dazu, zu sehen, ob bereits ein aktiver Pointer Lock vorliegt – wir möchten nicht `requestPointerLock()` auf der Leinwand aufrufen, jedes Mal wenn wir drinnen klicken, wenn wir bereits einen Pointer Lock haben.

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
> Der obige Code funktioniert auch in Browsern, die die Promise-Version von `requestPointerLock()` nicht unterstützen. Siehe [Umgang mit Promise- und Nicht-Promise-Versionen von requestPointerLock()](#handling_promise_and_non-promise_versions_of_requestpointerlock) für eine Erklärung.

Jetzt kommt der dedizierte Pointer Lock Ereignis-Listener: `pointerlockchange`. Wenn dies geschieht, führen wir eine Funktion namens `lockChangeAlert()` aus, um die Änderung zu handhaben.

```js
document.addEventListener("pointerlockchange", lockChangeAlert, false);
```

Diese Funktion überprüft die `pointerLockElement`-Eigenschaft, um zu sehen, ob es unsere Leinwand ist. Wenn ja, hängt sie einen Ereignis-Listener an, um die Mausbewegungen mit der `updatePosition()` Funktion zu handhaben. Wenn nicht, entfernt sie den Ereignis-Listener wieder.

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

Die `updatePosition()`-Funktion aktualisiert die Position des Balls auf der Leinwand (`x` und `y`) und beinhaltet auch `if ()`-Anweisungen, um zu überprüfen, ob der Ball über den Rand der Leinwand hinausgegangen ist. Wenn ja, lässt sie den Ball zum gegenüberliegenden Rand zurückkehren. Sie enthält auch eine Überprüfung, ob ein vorheriger [`requestAnimationFrame()`](/de/docs/Web/API/Window/requestAnimationFrame)-Aufruf getätigt wurde und, wenn ja, ruft sie ihn bei Bedarf erneut auf und ruft die `canvasDraw()`-Funktion auf, die die Leinwand-Szene aktualisiert. Ein Tracker ist auch eingerichtet, um die X- und Y-Werte zur Referenz auf dem Bildschirm auszugeben.

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

## Einschränkungen von IFrames

Pointer Lock kann nur einen {{htmlelement("iframe")}} gleichzeitig sperren. Wenn Sie ein `<iframe>` sperren, können Sie kein weiteres sperren und das Ziel darauf übertragen; Pointer Lock wird fehlschlagen. Um diese Einschränkung zu vermeiden, entsperren Sie zunächst das gesperrte `<iframe>`, und sperren Sie dann das andere.

Während `<iframe>` standardmäßig funktionieren, blockieren "sandboxed" `<iframe>` Pointer Lock. Um diese Einschränkung zu vermeiden, verwenden Sie `<iframe sandbox="allow-pointer-lock">`.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`MouseEvent`](/de/docs/Web/API/MouseEvent)
- [`Element.requestPointerLock()`](/de/docs/Web/API/Element/requestPointerLock)
