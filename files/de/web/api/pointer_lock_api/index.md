---
title: Pointer Lock API
slug: Web/API/Pointer_Lock_API
l10n:
  sourceCommit: 5f2a755c4fa7d126f85b56fbca90b15c5f039eff
---

{{DefaultAPISidebar("Pointer Lock API")}}

Die **Pointer Lock API** (früher _Mouse Lock API_ genannt) bietet Eingabemethoden basierend auf der Bewegung der Maus über die Zeit (d.h. Deltas), nicht nur der absoluten Position des Mauszeigers im Ansichtsfenster. Sie ermöglicht den Zugriff auf rohe Mausbewegungen, sperrt das Ziel von Mausereignissen auf ein einzelnes Element, beseitigt Begrenzungen, wie weit die Mausbewegung in eine einzelne Richtung gehen kann, und entfernt den Cursor aus der Sicht. Sie ist ideal für Ego-3D-Spiele.

Darüber hinaus ist die API nützlich für Anwendungen, die umfangreiche Mauskontrollen für Bewegungen, Objektrotationen und Eingabeänderungen erfordern, z. B. indem Benutzer den Blickwinkel durch Bewegen der Maus ändern können, ohne eine Taste zu drücken. Die Buttons können dann für andere Aktionen genutzt werden. Andere Beispiele umfassen Apps zur Anzeige von Karten oder Satellitenbildern.

Durch die Zeigersperre können Mausereignisse auch dann erfasst werden, wenn der Cursor den Rand des Browsers oder Bildschirms überschreitet. Beispielsweise können Ihre Benutzer weiterhin ein 3D-Modell rotieren oder manipulieren, indem sie die Maus ohne Unterbrechung bewegen. Ohne Zeigersperre stoppt die Rotation oder Manipulation in dem Moment, in dem der Zeiger den Rand des Browsers oder Bildschirms erreicht. Spieler können jetzt Tasten klicken und den Mauszeiger hin- und herschieben, ohne sich Sorgen machen zu müssen, den Spielbereich zu verlassen und versehentlich eine andere Anwendung zu klicken, die den Mausfokus vom Spiel entfernt.

## Grundlegende Konzepte

Die Zeigersperre ist mit dem [Pointer Capture](/de/docs/Web/API/Pointer_events#pointer_capture) verwandt. Pointer Capture sorgt dafür, dass weiterhin Ereignisse an ein Ziel-Element gesendet werden, während eine Maus gezogen wird, aber es stoppt, wenn die Maustaste losgelassen wird. Die Zeigersperre unterscheidet sich in folgenden Punkten von Pointer Capture:

- Sie ist persistent: Die Zeigersperre gibt die Maus erst frei, wenn ein expliziter API-Aufruf erfolgt oder der Benutzer eine spezifische Freigabegeste verwendet.
- Sie ist nicht durch Browser- oder Bildschirmgrenzen eingeschränkt.
- Sie sendet weiterhin Ereignisse unabhängig vom Zustand der Maustaste.
- Sie verbirgt den Cursor.

## Methoden/Property-Übersicht

Dieser Abschnitt bietet eine kurze Beschreibung jeder Property und Methode in Bezug auf die Zeigersperrspezifikation.

### requestPointerLock()

Die Zeigersperr-API, ähnlich der [Fullscreen API](/de/docs/Web/API/Fullscreen_API), erweitert DOM-Elemente, indem sie eine neue Methode, [`requestPointerLock()`](/de/docs/Web/API/Element/requestPointerLock), hinzufügt. Das folgende Beispiel fordert die Zeigersperre auf einem {{htmlelement("canvas")}}-Element:

```js
canvas.addEventListener("click", async () => {
  await canvas.requestPointerLock();
});
```

> [!NOTE]
> Wenn ein Benutzer die Zeigersperre über die [Standard-Freigabegeste](https://w3c.github.io/pointerlock/#dfn-default-unlock-gesture) verlassen hat oder die Zeigersperre für dieses Dokument zuvor nicht aktiviert wurde, muss das Dokument ein Ereignis empfangen, das als Ergebnis einer [Engagement-Geste](https://w3c.github.io/pointerlock/#dfn-engagement-gesture) generiert wurde, bevor [`requestPointerLock`](https://w3c.github.io/pointerlock/#dom-element-requestpointerlock) erfolgreich sein wird. (aus <https://w3c.github.io/pointerlock/#extensions-to-the-element-interface>)

Betriebssysteme aktivieren standardmäßig die Mausbeschleunigung, was nützlich ist, wenn Sie manchmal eine langsame präzise Bewegung wünschen (denken Sie an eine Anwendung für Grafikdesign), aber auch große Entfernungen mit einer schnelleren Mausbewegung zurücklegen wollen (denken Sie an Scrollen und das Auswählen mehrerer Dateien). Für einige Spiele mit Egoperspektive ist jedoch rohe Maus-Eingabedaten bevorzugt für die Kamerasteuerung—wo dieselbe Entfernungsbewegung, schnell oder langsam, zur gleichen Rotation führt. Dies führt zu einem besseren Spielerlebnis und höherer Genauigkeit laut professionellen Spielern.

Um die Betriebssystem-Ebene der Mausbeschleunigung zu deaktivieren und auf rohe Maus-Eingabe zuzugreifen, können Sie `unadjustedMovement` auf `true` setzen:

```js
canvas.addEventListener("click", async () => {
  await canvas.requestPointerLock({
    unadjustedMovement: true,
  });
});
```

## Umgang mit Promise- und Nicht-Promise-Versionen von requestPointerLock()

Der oben stehende Code-Schnipsel funktioniert weiterhin in Browsern, die die Promise-basierte Version von `requestPointerLock()` oder die Option `unadjustedMovement` nicht unterstützen—der [`await`](/de/docs/Web/JavaScript/Reference/Operators/await) Operator ist vor einer Funktion erlaubt, die kein Promise zurückgibt, und das Optionsobjekt wird einfach ignoriert in nicht-unterstützenden Browsern.

Dies könnte jedoch verwirrend sein und hat andere potenzielle Nebeneffekte (zum Beispiel würde ein Versuch, `requestPointerLock().then()` zu verwenden, in nicht-unterstützenden Browsern zu einem Fehler führen), daher möchten Sie dies möglicherweise explizit mit einem Code wie dem folgenden behandeln:

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

Die Zeigersperr-API erweitert auch das [`Document`](/de/docs/Web/API/Document) Interface und fügt eine neue Property und eine neue Methode hinzu:

- [`pointerLockElement`](/de/docs/Web/API/Document/pointerLockElement) wird verwendet, um auf das aktuell gesperrte Element (falls vorhanden) zuzugreifen.
- [`exitPointerLock()`](/de/docs/Web/API/Document/exitPointerLock) wird verwendet, um die Zeigersperre zu beenden.

Die [`pointerLockElement`](/de/docs/Web/API/Document/pointerLockElement) Property ist nützlich, um zu bestimmen, ob derzeit ein Element zeigergesperrt ist (z. B. für eine boolesche Überprüfung) und auch, um eine Referenz auf das gesperrte Element zu erhalten, falls vorhanden.

Hier ist ein Beispiel zur Verwendung von `pointerLockElement`:

```js
if (document.pointerLockElement === canvas) {
  console.log("The pointer lock status is now locked");
} else {
  console.log("The pointer lock status is now unlocked");
}
```

Die Methode [`Document.exitPointerLock()`](/de/docs/Web/API/Document/exitPointerLock) wird verwendet, um die Zeigersperre zu beenden, und funktioniert wie [`requestPointerLock`](/de/docs/Web/API/Element/requestPointerLock) asynchron unter Verwendung der Ereignisse [`pointerlockchange`](/de/docs/Web/API/Document/pointerlockchange_event) und [`pointerlockerror`](/de/docs/Web/API/Document/pointerlockerror_event), über die weiter unten mehr zu erfahren ist.

```js
document.exitPointerLock();
```

## pointerlockchange-Ereignis

Wenn sich der Zeigersperrstatus ändert—zum Beispiel bei einem Aufruf von [`requestPointerLock()`](/de/docs/Web/API/Element/requestPointerLock) oder [`exitPointerLock()`](/de/docs/Web/API/Document/exitPointerLock), das Drücken der ESC-Taste durch den Benutzer, usw.—wird das [`pointerlockchange`](/de/docs/Web/API/Document/pointerlockchange_event) Ereignis an das `document` gesendet. Dies ist ein einfaches Ereignis ohne zusätzliche Daten.

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

Wenn es zu einem Fehler kommt, der durch den Aufruf von [`requestPointerLock()`](/de/docs/Web/API/Element/requestPointerLock) oder [`exitPointerLock()`](/de/docs/Web/API/Document/exitPointerLock) verursacht wird, wird das [`pointerlockerror`](/de/docs/Web/API/Document/pointerlockerror_event) Ereignis an das `document` gesendet. Dies ist ein einfaches Ereignis ohne zusätzliche Daten.

```js
document.addEventListener("pointerlockerror", lockError, false);

function lockError(e) {
  alert("Pointer lock failed");
}
```

## Erweiterungen von Mausereignissen

Die Zeigersperr-API erweitert das normale [`MouseEvent`](/de/docs/Web/API/MouseEvent) Interface mit Bewegungsattributen. Zwei neue Attribute für Mausereignisse—[`movementX`](/de/docs/Web/API/MouseEvent/movementX) und [`movementY`](/de/docs/Web/API/MouseEvent/movementY)—ermöglichen es, die Änderung der Mausposition zu ermitteln. Die Werte der Parameter entsprechen der Differenz zwischen den Werten von [`MouseEvent`](/de/docs/Web/API/MouseEvent) Properties, [`screenX`](/de/docs/Web/API/MouseEvent/screenX) und [`screenY`](/de/docs/Web/API/MouseEvent/screenY), die in zwei aufeinanderfolgenden [`mousemove`](/de/docs/Web/API/Element/mousemove_event) Ereignissen, `eNow` und `ePrevious`, gespeichert werden. Mit anderen Worten, der Parameter der Zeigersperre `movementX = eNow.screenX - ePrevious.screenX`.

### Gesperrter Zustand

Wenn die Zeigersperre aktiviert ist, werden die Standardwerte der [`MouseEvent`](/de/docs/Web/API/MouseEvent) Properties [`clientX`](/de/docs/Web/API/MouseEvent/clientX), [`clientY`](/de/docs/Web/API/MouseEvent/clientY), [`screenX`](/de/docs/Web/API/MouseEvent/screenX) und [`screenY`](/de/docs/Web/API/MouseEvent/screenY) konstant gehalten, als ob sich die Maus nicht bewegt. Die [`movementX`](/de/docs/Web/API/MouseEvent/movementX) und [`movementY`](/de/docs/Web/API/MouseEvent/movementY) Properties liefern weiterhin die Änderung der Mausposition. Es gibt keine Begrenzung der Werte von [`movementX`](/de/docs/Web/API/MouseEvent/movementX) und [`movementY`](/de/docs/Web/API/MouseEvent/movementY), wenn die Maus kontinuierlich in eine Richtung bewegt wird. Das Konzept des Mauszeigers existiert nicht und der Cursor kann nicht aus dem Fenster bewegt oder durch eine Bildschirmkante eingeschränkt werden.

### Ungesperrter Zustand

Die Parameter [`movementX`](/de/docs/Web/API/MouseEvent/movementX) und [`movementY`](/de/docs/Web/API/MouseEvent/movementY) sind unabhängig vom Zeigersperrzustand gültig und stehen aus Bequemlichkeitsgründen auch im entsperrten Zustand zur Verfügung.

Wenn die Maus entsperrt ist, kann der Systemcursor das Browserfenster verlassen und wieder betreten. Geschieht dies, könnten [`movementX`](/de/docs/Web/API/MouseEvent/movementX) und [`movementY`](/de/docs/Web/API/MouseEvent/movementY) auf Null gesetzt werden.

## Einfaches Beispiel Schritt-für-Schritt

Wir haben eine [Pointer Lock Demo](https://mdn.github.io/dom-examples/pointer-lock/) ([siehe Quellcode](https://github.com/mdn/dom-examples/tree/main/pointer-lock)) geschrieben, um Ihnen zu zeigen, wie Sie damit ein einfaches Steuerungssystem einrichten können. Diese Demo verwendet JavaScript, um einen Ball über ein {{ htmlelement("canvas") }}-Element zu zeichnen. Wenn Sie auf das Canvas klicken, wird die Zeigersperre verwendet, um den Mauszeiger zu entfernen und Sie den Ball direkt mit der Maus bewegen zu lassen. Sehen wir uns an, wie das funktioniert.

Wir setzen anfängliche x- und y-Positionen auf dem Canvas:

```js
let x = 50;
let y = 50;
```

Als Nächstes richten wir einen Ereignis-Listener ein, um die Methode `requestPointerLock()` auf dem Canvas auszuführen, wenn darauf geklickt wird, was die Zeigersperre initiiert. Der Check `document.pointerLockElement` dient dazu, zu sehen, ob bereits eine aktive Zeigersperre besteht—wir möchten nicht bei jedem Klick auf das Canvas `requestPointerLock()` aufrufen, wenn wir die Zeigersperre bereits haben.

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
> Der obige Code-Schnipsel funktioniert auch in Browsern, die die Promise-Version von `requestPointerLock()` nicht unterstützen. Siehe [Umgang mit Promise- und Nicht-Promise-Versionen von requestPointerLock()](#handling_promise_and_non-promise_versions_of_requestpointerlock) für eine Erklärung.

Nun zum dedizierten Zeigersperr-Ereignislistener: `pointerlockchange`. Wenn dies auftritt, führen wir eine Funktion namens `lockChangeAlert()` aus, um die Änderung zu handhaben.

```js
document.addEventListener("pointerlockchange", lockChangeAlert, false);
```

Diese Funktion überprüft die `pointerLockElement` Property, um zu sehen, ob es unser Canvas ist. Wenn ja, wird ein Event Listener verbunden, um die Mausbewegungen mit der Funktion `updatePosition()` zu handhaben. Wenn nicht, wird der Listener wieder entfernt.

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

Die Funktion `updatePosition()` aktualisiert die Position des Balls auf dem Canvas (`x` und `y`) und enthält auch `if ()`-Anweisungen, um zu überprüfen, ob der Ball die Ränder des Canvas überschritten hat. Falls ja, wird der Ball auf den gegenüberliegenden Rand zurückgesetzt. Außerdem enthält sie eine Prüfung, ob ein [`requestAnimationFrame()`](/de/docs/Web/API/Window/requestAnimationFrame) Aufruf bereits gemacht wurde und, falls ja, ruft sie ihn wieder auf und ruft die Funktion `canvasDraw()` auf, die die Canvas-Szene aktualisiert. Ein Tracker wird ebenfalls eingerichtet, um die X- und Y-Werte zur Referenz auf dem Bildschirm anzuzeigen.

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

## Einschränkungen bei IFrames

Die Zeigersperre kann nur ein {{htmlelement("iframe")}} gleichzeitig sperren. Wenn Sie ein `<iframe>` sperren, können Sie kein anderes sperren und das Ziel darauf übertragen; die Zeigersperre wird einen Fehler auslösen. Um diese Einschränkung zu vermeiden, entsperren Sie zuerst das gesperrte `<iframe>` und sperren dann das andere.

Während `<iframe>` standardmäßig funktionieren, blockieren "sandboxed" `<iframe>` die Zeigersperre. Um diese Einschränkung zu umgehen, verwenden Sie `<iframe sandbox="allow-pointer-lock">`.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`MouseEvent`](/de/docs/Web/API/MouseEvent)
- [`Element.requestPointerLock()`](/de/docs/Web/API/Element/requestPointerLock)
