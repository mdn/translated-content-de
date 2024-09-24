---
title: Pointer-Lock-API
slug: Web/API/Pointer_Lock_API
l10n:
  sourceCommit: 802b6063046dffb7634d2138aadcd92cb22ed40c
---

{{DefaultAPISidebar("Pointer Lock API")}}

Die **Pointer-Lock-API** (früher _Mouse Lock API_ genannt) bietet Eingabemethoden basierend auf der Bewegung der Maus über die Zeit (d. h. Deltas), nicht nur die absolute Position des Mauszeigers im Anzeigebereich. Sie gibt Ihnen Zugriff auf rohe Mausbewegungen, sperrt das Ziel von Mausereignissen auf ein einzelnes Element, beseitigt Begrenzungen dafür, wie weit sich die Maus in eine Richtung bewegen kann, und entfernt den Mauszeiger aus der Sicht. Dies ist ideal für 3D-Spiele aus der Ich-Perspektive, zum Beispiel.

Darüber hinaus ist die API nützlich für alle Anwendungen, die umfangreiche Maussteuerung erfordern, um Bewegungen zu steuern, Objekte zu drehen und Eingaben zu ändern, zum Beispiel, um es Benutzern zu ermöglichen, den Blickwinkel zu steuern, indem sie die Maus bewegen, ohne Tasten zu klicken. Die Tasten können dann für andere Aktionen frei verwendet werden. Weitere Beispiele umfassen Apps zur Ansicht von Karten oder Satellitenbildern.

Mit Pointer lock können Sie auf Mausereignisse zugreifen, selbst wenn der Mauszeiger die Grenze des Browsers oder Bildschirms überschreitet. Beispielsweise können Ihre Nutzer ein 3D-Modell weiterhin drehen oder manipulieren, indem sie die Maus ohne Unterbrechung bewegen. Ohne Pointer lock stoppt die Drehung oder Manipulation in dem Moment, in dem der Zeiger den Rand des Browsers oder Bildschirms erreicht. Spieler können jetzt Schaltflächen klicken und den Mauszeiger hin und her bewegen, ohne sich Sorgen machen zu müssen, den Spielbereich zu verlassen und versehentlich eine andere Anwendung zu klicken, die den Mausfokus vom Spiel wegnehmen würde.

## Grundkonzepte

Pointer lock steht in Beziehung zu [pointer capture](/de/docs/Web/API/Pointer_events#pointer_capture). Pointer capture sorgt für kontinuierliche Lieferung von Ereignissen an ein Ziel-Element, während eine Maus gezogen wird, aber es stoppt, wenn die Maustaste losgelassen wird. Pointer lock unterscheidet sich von pointer capture in folgenden Punkten:

- Es ist persistent: Pointer lock gibt die Maus nicht frei, bis ein expliziter API-Aufruf erfolgt oder der Nutzer eine spezifische Loslassgeste verwendet.
- Es ist nicht durch Browser- oder Bildschirmgrenzen eingeschränkt.
- Es sendet weiterhin Ereignisse unabhängig vom Zustand der Maustaste.
- Es versteckt den Zeiger.

## Überblick über Methoden/Eigenschaften

Dieser Abschnitt bietet eine kurze Beschreibung jeder Eigenschaft und Methode, die mit der Pointer-Lock-Spezifikation zusammenhängt.

### requestPointerLock()

Die Pointer-Lock-API, ähnlich wie die [Fullscreen-API](/de/docs/Web/API/Fullscreen_API), erweitert DOM-Elemente durch das Hinzufügen einer neuen Methode, {{domxref("Element.requestPointerLock","requestPointerLock()")}}. Im folgenden Beispiel wird ein Pointer lock für ein {{htmlelement("canvas")}}-Element angefordert:

```js
canvas.addEventListener("click", async () => {
  await canvas.requestPointerLock();
});
```

> [!NOTE]
> Wenn ein Nutzer den Pointer lock durch die [Standard-Entsperrgeste](https://w3c.github.io/pointerlock/#dfn-default-unlock-gesture) verlassen hat oder der Pointer lock für dieses Dokument zuvor nicht betreten wurde, muss ein Ereignis, das durch eine [Engagement-Geste](https://w3c.github.io/pointerlock/#dfn-engagement-gesture) erzeugt wurde, vom Dokument empfangen werden, bevor [`requestPointerLock`](https://w3c.github.io/pointerlock/#dom-element-requestpointerlock) erfolgreich sein wird. (aus <https://w3c.github.io/pointerlock/#extensions-to-the-element-interface>)

Betriebssysteme aktivieren standardmäßig die Mausbeschleunigung, was nützlich ist, wenn Sie manchmal eine langsame präzise Bewegung wünschen (denken Sie daran, wie Sie ein Grafikprogramm verwenden könnten), aber auch große Distanzen mit einer schnellen Mausbewegung zurücklegen möchten (denken Sie an Scrollen und Auswahl mehrerer Dateien). Für einige Spiele aus der Ich-Perspektive hingegen werden rohe Mausbewegungsdaten bevorzugt, um die Kameradrehung zu steuern — wobei dieselbe Bewegungsdistanz, egal ob schnell oder langsam, zur selben Drehung führt. Dies führt zu einem besseren Spielerlebnis und höherer Genauigkeit, laut professionellen Spielern.

Um die Betriebssystem-ebene Mausbeschleunigung zu deaktivieren und rohe Mausbewegungen zu erhalten, können Sie `unadjustedMovement` auf `true` setzen:

```js
canvas.addEventListener("click", async () => {
  await canvas.requestPointerLock({
    unadjustedMovement: true,
  });
});
```

## Umgang mit promise- und nicht-promise-Versionen von requestPointerLock()

Das obige Code-Snippet funktioniert weiterhin in Browsern, die die promise-basierte Version von `requestPointerLock()` oder die `unadjustedMovement`-Option nicht unterstützen. Der [`await`](/de/docs/Web/JavaScript/Reference/Operators/await)-Operator ist vor einer Funktion erlaubt, die kein Promise zurückgibt, und das Optionsobjekt wird in nicht unterstützenden Browsern einfach ignoriert.

Dies könnte jedoch verwirrend sein und andere potenzielle Nebeneffekte haben (beispielsweise würde das Verwenden von `requestPointerLock().then()` in nicht unterstützenden Browsern einen Fehler auslösen), daher möchten Sie dies möglicherweise explizit mit einem Code wie dem folgenden handhaben:

```js
function requestPointerLockWithUnadjustedMovement() {
  const promise = myTargetElement.requestPointerLock({
    unadjustedMovement: true,
  });

  if (!promise) {
    console.log("Das Deaktivieren der Mausbeschleunigung wird nicht unterstützt");
    return;
  }

  return promise
    .then(() => console.log("Der Zeiger ist gesperrt"))
    .catch((error) => {
      if (error.name === "NotSupportedError") {
        // Einige Plattformen unterstützen möglicherweise keine unajustierte Bewegung.
        // Sie können erneut eine reguläre Pointer-Lock anfordern.
        return myTargetElement.requestPointerLock();
      }
    });
}
```

### pointerLockElement und exitPointerLock()

Die Pointer-Lock-API erweitert auch die {{domxref("Document")}}-Schnittstelle und fügt eine neue Eigenschaft und eine neue Methode hinzu:

- {{domxref("Document.pointerLockElement","pointerLockElement")}} wird verwendet, um auf das aktuell gesperrte Element zuzugreifen (falls vorhanden).
- {{domxref("Document.exitPointerLock","exitPointerLock()")}} wird verwendet, um den Pointer lock zu verlassen.

Die {{domxref("Document.pointerLockElement","pointerLockElement")}}-Eigenschaft ist nützlich, um festzustellen, ob irgendein Element aktuell pointer-gesperrt ist (z. B. für eine boolesche Überprüfung) und um eine Referenz auf das gesperrte Element zu erhalten, falls vorhanden.

Hier ist ein Beispiel zur Verwendung von `pointerLockElement`:

```js
if (document.pointerLockElement === canvas) {
  console.log("Der Status der Zeigersperre ist jetzt gesperrt");
} else {
  console.log("Der Status der Zeigersperre ist jetzt entsperrt");
}
```

Die {{domxref("Document.exitPointerLock()")}}-Methode wird verwendet, um die Zeigersperre zu verlassen, und funktioniert wie {{domxref("Element.requestPointerLock","requestPointerLock")}} asynchron unter Verwendung der {{domxref("Document/pointerlockchange_event", "pointerlockchange")}}- und {{domxref("Document/pointerlockerror_event", "pointerlockerror")}}-Ereignisse, die Sie weiter unten sehen werden.

```js
document.exitPointerLock();
```

## pointerlockchange-Ereignis

Wenn sich der Zustand der Zeigersperre ändert — zum Beispiel beim Aufruf von {{domxref("Element.requestPointerLock","requestPointerLock()")}} oder {{domxref("Document.exitPointerLock","exitPointerLock()")}}, beim Drücken der ESC-Taste durch den Benutzer etc. — wird das {{domxref("Document/pointerlockchange_event", "pointerlockchange")}}-Ereignis an das `document` gesendet. Dies ist ein einfaches Ereignis, das keine zusätzlichen Daten enthält.

```js
document.addEventListener("pointerlockchange", lockChangeAlert, false);

function lockChangeAlert() {
  if (document.pointerLockElement === canvas) {
    console.log("Der Status der Zeigersperre ist jetzt gesperrt");
    // Antworten Sie mit einer nützlichen Aktion
  } else {
    console.log("Der Status der Zeigersperre ist jetzt entsperrt");
    // Antworten Sie mit einer nützlichen Aktion
  }
}
```

## pointerlockerror-Ereignis

Wenn ein Fehler durch Aufruf von {{domxref("Element.requestPointerLock","requestPointerLock()")}} oder {{domxref("Document.exitPointerLock","exitPointerLock()")}} verursacht wird, wird das {{domxref("Document/pointerlockerror_event", "pointerlockerror")}}-Ereignis an das `document` gesendet. Dies ist ein einfaches Ereignis, das keine zusätzlichen Daten enthält.

```js
document.addEventListener("pointerlockerror", lockError, false);

function lockError(e) {
  alert("Die Zeigersperre ist fehlgeschlagen");
}
```

## Erweiterungen für Mausereignisse

Die Pointer-Lock-API erweitert die normale {{domxref("MouseEvent")}}-Schnittstelle um Bewegungsattribute. Zwei neue Attribute für Mausereignisse — {{domxref("MouseEvent.movementX","movementX")}} und {{domxref("MouseEvent.movementY","movementY")}} — geben die Veränderung der Mauspositionen an. Die Werte der Parameter sind identisch mit der Differenz zwischen den Werten der {{domxref("MouseEvent")}}-Eigenschaften, {{domxref("MouseEvent.screenX","screenX")}} und {{domxref("MouseEvent.screenY","screenY")}}, die in zwei aufeinanderfolgenden {{domxref("Element/mousemove_event", "mousemove")}}-Ereignissen, `eNow` und `ePrevious`, gespeichert sind. Mit anderen Worten, der Pointer-Lock-Parameter `movementX = eNow.screenX - ePrevious.screenX`.

### Gesperrter Zustand

Wenn Pointer Lock aktiviert ist, bleiben die Standard-{{domxref("MouseEvent")}}-Eigenschaften {{domxref("MouseEvent.clientX","clientX")}}, {{domxref("MouseEvent.clientY","clientY")}}, {{domxref("MouseEvent.screenX","screenX")}} und {{domxref("MouseEvent.screenY","screenY")}} konstant, als ob sich die Maus nicht bewegt. Die {{domxref("MouseEvent.movementX","movementX")}}- und {{domxref("MouseEvent.movementY","movementY")}}-Eigenschaften geben weiterhin die Veränderung der Mausposition an. Es gibt keine Begrenzung für die {{domxref("MouseEvent.movementX","movementX")}}- und {{domxref("MouseEvent.movementY","movementY")}}-Werte, wenn die Maus kontinuierlich in eine Richtung bewegt wird. Das Konzept des Mauszeigers existiert nicht und der Zeiger kann nicht vom Fenster weg oder durch eine Bildschirmkante begrenzt werden.

### Entsperrter Zustand

Die Parameter {{domxref("MouseEvent.movementX","movementX")}} und {{domxref("MouseEvent.movementY","movementY")}} sind unabhängig vom Zustand der Zeigersperre gültig und auch verfügbar, wenn entsperrt, aus Gründen der Bequemlichkeit.

Wenn die Maus entsperrt ist, kann der Systemzeiger das Browserfenster verlassen und wieder betreten. Sollte dies geschehen, könnten {{domxref("MouseEvent.movementX","movementX")}} und {{domxref("MouseEvent.movementY","movementY")}} auf null gesetzt werden.

## Einfache Beispielanleitung

Wir haben ein [pointer lock demo](https://mdn.github.io/dom-examples/pointer-lock/) ([Quellcode ansehen](https://github.com/mdn/dom-examples/tree/main/pointer-lock)) geschrieben, um Ihnen zu zeigen, wie Sie damit ein einfaches Steuerungssystem einrichten können. Dieses Demo verwendet JavaScript, um einen Ball auf einem {{ htmlelement("canvas") }}-Element zu zeichnen. Wenn Sie auf das Canvas klicken, wird Pointer Lock verwendet, um den Mauszeiger zu entfernen und es Ihnen zu ermöglichen, den Ball direkt mit der Maus zu bewegen. Sehen wir uns an, wie dies funktioniert.

Wir setzen anfängliche x- und y-Positionen auf dem Canvas:

```js
let x = 50;
let y = 50;
```

Als nächstes richten wir einen Event-Listener ein, um die Methode `requestPointerLock()` auf dem Canvas auszuführen, wenn es angeklickt wird, was Pointer Lock initiiert. Die Überprüfung `document.pointerLockElement` dient dazu, zu sehen, ob bereits ein aktiver Pointer Lock besteht — wir möchten nicht weiterhin `requestPointerLock()` auf dem Canvas aufrufen, jedes Mal wenn wir darin klicken, wenn wir bereits einen Pointer Lock haben.

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
> Das obige Snippet funktioniert in Browsern, die die Promise-Version von `requestPointerLock()` nicht unterstützen. Siehe [Umgang mit promise- und nicht-promise-Versionen von requestPointerLock()](#handling_promise_and_non-promise_versions_of_requestpointerlock) für eine Erklärung.

Nun für den dedizierten Event-Listener für die Zeigersperre: `pointerlockchange`. Wenn dies eintritt, führen wir eine Funktion namens `lockChangeAlert()` aus, um die Änderung zu handhaben.

```js
document.addEventListener("pointerlockchange", lockChangeAlert, false);
```

Diese Funktion überprüft die `pointerLockElement`-Eigenschaft, um zu sehen, ob es unser Canvas ist. Falls ja, wird ein Event-Listener hinzugefügt, um die Mausbewegungen mit der `updatePosition()`-Funktion zu behandeln. Andernfalls wird der Event-Listener wieder entfernt.

```js
function lockChangeAlert() {
  if (document.pointerLockElement === canvas) {
    console.log("Der Status der Zeigersperre ist jetzt gesperrt");
    document.addEventListener("mousemove", updatePosition, false);
  } else {
    console.log("Der Status der Zeigersperre ist jetzt entsperrt");
    document.removeEventListener("mousemove", updatePosition, false);
  }
}
```

Die `updatePosition()`-Funktion aktualisiert die Position des Balls auf dem Canvas (`x` und `y`) und enthält außerdem `if ()`-Anweisungen, um zu überprüfen, ob der Ball über die Ränder des Canvas hinausgegangen ist. Falls ja, lässt sie den Ball auf der gegenüberliegenden Seite erscheinen. Sie enthält auch eine Überprüfung, ob ein Aufruf von [`requestAnimationFrame()`](/de/docs/Web/API/Window/requestAnimationFrame) zuvor gemacht wurde, und falls ja, ruft sie ihn bei Bedarf erneut auf und ruft die `canvasDraw()`-Funktion auf, die die Canvas-Szene aktualisiert. Ein Tracker wird auch eingerichtet, um die X- und Y-Werte zur Referenz auf dem Bildschirm auszugeben.

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

Die `canvasDraw()`-Funktion zeichnet den Ball an den aktuellen `x`- und `y`-Positionen:

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

Pointer lock kann gleichzeitig nur ein {{htmlelement("iframe")}} sperren. Wenn Sie ein `<iframe>` sperren, können Sie kein anderes sperren und das Ziel darauf übertragen; Pointer lock wird fehlschlagen. Um diese Einschränkung zu vermeiden, entsperren Sie zuerst das gesperrte `<iframe>` und sperren Sie dann das andere.

Während `<iframe>` standardmäßig funktionieren, blockieren "sandboxed" `<iframe>`s Pointer lock. Um diese Einschränkung zu vermeiden, verwenden Sie `<iframe sandbox="allow-pointer-lock">`.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("MouseEvent")}}
- {{domxref("Element.requestPointerLock()")}}
