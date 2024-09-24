---
title: "Element: requestPointerLock()-Methode"
short-title: requestPointerLock()
slug: Web/API/Element/requestPointerLock
l10n:
  sourceCommit: d0b23f3f26637aa405ee9ee0a0892fc6e9b742ef
---

{{APIRef("Pointer Lock API")}}

Die **`requestPointerLock()`**-Methode der {{domxref("Element")}}-Schnittstelle ermöglicht es Ihnen, asynchron anzufordern, dass der Zeiger auf das angegebene Element gesperrt wird.

Um den Erfolg oder Misserfolg der Anfrage zu verfolgen, muss auf die {{domxref("Document/pointerlockchange_event", "pointerlockchange")}}- und {{domxref("Document/pointerlockerror_event", "pointerlockerror")}}-Ereignisse auf der Dokumentebene gehört werden.

> [!NOTE]
> In der aktuellen Spezifikation kommuniziert `requestPointerLock()` den Erfolg oder Misserfolg der Anfrage nur durch das Auslösen der {{domxref("Document/pointerlockchange_event", "pointerlockchange")}} oder {{domxref("Document/pointerlockerror_event", "pointerlockerror")}} Ereignisse. [Ein vorgeschlagenes Update der Spezifikation](https://github.com/w3c/pointerlock/pull/49) aktualisiert `requestPointerLock()`, um ein {{jsxref("Promise")}} zurückzugeben, das Erfolg oder Misserfolg kommuniziert. Diese Seite dokumentiert die Version, die ein {{jsxref("Promise")}} zurückgibt. Beachten Sie jedoch, dass diese Version noch kein Standard ist und nicht von allen Browsern implementiert wird. Weitere Informationen finden Sie unter [Browser-Kompatibilität](#browser-kompatibilität).

## Syntax

```js-nolint
requestPointerLock()
requestPointerLock(options)
```

### Parameter

- `options` {{optional_inline}}
  - : Ein Optionsobjekt, das die folgenden Eigenschaften enthalten kann:
    - `unadjustedMovement` {{optional_inline}}
      - : Deaktiviert die Betriebssystemanpassung für die Mausbeschleunigung und greift stattdessen auf rohe Mausdaten zu. Der Standardwert ist `false`; durch Setzen auf `true` wird die Mausbeschleunigung deaktiviert.

### Rückgabewert

Ein {{jsxref("Promise")}}, das mit {{jsxref("undefined")}} aufgelöst wird.

## Sicherheit

Eine {{Glossary("Transient activation")}} ist erforderlich, wenn `requestPointerLock()` aufgerufen wird. Der Benutzer muss mit der Seite oder einem UI-Element interagieren, damit diese Funktion funktioniert. Außerdem muss das zugehörige Dokument des Zielelements im aktiven Zustand sein.

Wenn `requestPointerLock()` unmittelbar nach dem Freigeben des Zeigersperre über die Standard-Geste zum Entsperren (anstatt über einen `exitPointerLock()`-Aufruf) aufgerufen wird, wird der Aufruf fehlschlagen, selbst wenn eine {{Glossary("transient activation")}} verfügbar ist.

Falls `requestPointerLock()` zusammen mit {{domxref("Element.requestFullscreen()", "requestFullscreen()")}} aufgerufen wird, muss `requestPointerLock()` zuerst aufgerufen werden, da {{domxref("Element.requestFullscreen()", "requestFullscreen()")}} den Zustand der {{Glossary("Transient activation", "transient activation")}} verbrauchen wird.

Das `allow-pointer-lock` [Sandbox-Token](/de/docs/Web/HTML/Element/iframe#sandbox) muss hinzugefügt werden, wenn `requestPointerLock()` in einem {{htmlelement("iframe")}}-Element aufgerufen wird. Außerdem dürfen keine anderen Elemente in anderen {{htmlelement("iframe")}}-Elementen im Zeigersperrmodus sein.

## Beispiele

Die Zeigersperre wird häufig in Online-Spielen verwendet, wenn Sie die Mausbewegung auf die Steuerung des Spiels konzentrieren möchten, ohne dass der Mauszeiger abgelenkt wird, indem er sich außerhalb des Spielbereichs oder an den Rand des Fensters bewegt.

Um die Zeigersperre zu aktivieren, sollten Sie den Benutzer dazu bringen, in irgendeiner Weise mit der Benutzeroberfläche zu interagieren, vielleicht indem er einen Knopf drückt oder die Spielfläche selbst anklickt.

```js
canvas.addEventListener("click", async () => {
  await canvas.requestPointerLock();
});
```

Betriebssysteme aktivieren standardmäßig die Mausbeschleunigung, was nützlich ist, wenn Sie manchmal langsame, präzise Bewegungen wünschen (denken Sie daran, wie Sie möglicherweise ein Grafikpaket verwenden), aber auch große Entfernungen mit einer schnelleren Mausbewegung zurücklegen möchten (denken Sie an das Scrollen und Auswählen mehrerer Dateien). In einigen Spielen mit First-Person-Perspektive werden jedoch rohe Mausdaten für die Steuerung der Kamerabewegung bevorzugt - bei denen dieselbe Bewegungsentfernung, schnell oder langsam, zu derselben Rotation führt. Dies führt laut professionellen Spielern zu einem besseren Spielerlebnis und höherer Genauigkeit.

Um die OS-Ebene der Mausbeschleunigung zu deaktivieren und auf rohe Mausdaten zuzugreifen, können Sie `unadjustedMovement` auf `true` setzen:

```js
canvas.addEventListener("click", async () => {
  await canvas.requestPointerLock({
    unadjustedMovement: true,
  });
});
```

Für mehr Beispielcode siehe:

- [pointer lock demo](https://mdn.github.io/dom-examples/pointer-lock/) ([siehe Quellcode](https://github.com/mdn/dom-examples/tree/main/pointer-lock))
- {{domxref("Pointer Lock API", "Pointer Lock API", "", "nocode")}}
- [Deaktivieren der Mausbeschleunigung für ein besseres FPS-Spielerlebnis](https://web.dev/articles/disable-mouse-acceleration)

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{ domxref("Document.pointerLockElement") }}
- {{ domxref("Document.exitPointerLock()") }}
- [Pointer Lock](/de/docs/Web/API/Pointer_Lock_API)
