---
title: "Element: requestPointerLock() Methode"
short-title: requestPointerLock()
slug: Web/API/Element/requestPointerLock
l10n:
  sourceCommit: d0b23f3f26637aa405ee9ee0a0892fc6e9b742ef
---

{{APIRef("Pointer Lock API")}}

Die **`requestPointerLock()`**-Methode des [`Element`](/de/docs/Web/API/Element)-Interfaces ermöglicht es Ihnen, asynchron anzufordern, dass der Zeiger auf dem angegebenen Element gesperrt wird.

Um den Erfolg oder Misserfolg der Anfrage zu verfolgen, ist es notwendig, auf die Ereignisse [`pointerlockchange`](/de/docs/Web/API/Document/pointerlockchange_event) und [`pointerlockerror`](/de/docs/Web/API/Document/pointerlockerror_event) auf Dokumentebene zu hören.

> [!NOTE]
> In der aktuellen Spezifikation kommuniziert `requestPointerLock()` den Erfolg oder Misserfolg der Anfrage nur durch das Auslösen der Ereignisse [`pointerlockchange`](/de/docs/Web/API/Document/pointerlockchange_event) oder [`pointerlockerror`](/de/docs/Web/API/Document/pointerlockerror_event). [Ein vorgeschlagenes Update der Spezifikation](https://github.com/w3c/pointerlock/pull/49) aktualisiert `requestPointerLock()`, um ein {{jsxref("Promise")}} zurückzugeben, das Erfolg oder Misserfolg kommuniziert. Diese Seite dokumentiert die Version, die ein {{jsxref("Promise")}} zurückgibt. Beachten Sie jedoch, dass diese Version noch kein Standard ist und nicht von allen Browsern implementiert wird. Siehe [Browser-Kompatibilität](#browser-kompatibilität) für weitere Informationen.

## Syntax

```js-nolint
requestPointerLock()
requestPointerLock(options)
```

### Parameter

- `options` {{optional_inline}}
  - : Ein Optionsobjekt, das die folgenden Eigenschaften enthalten kann:
    - `unadjustedMovement` {{optional_inline}}
      - : Deaktiviert die Betriebssystem-Einstellung für Mausbeschleunigung und greift stattdessen auf die Rohdaten der Maus zu. Der Standardwert ist `false`; das Setzen auf `true` deaktiviert die Mausbeschleunigung.

### Rückgabewert

Ein {{jsxref("Promise")}}, das mit {{jsxref("undefined")}} aufgelöst wird.

## Sicherheit

{{Glossary("Transient_activation", "Transiente Aktivierung")}} ist erforderlich, wenn `requestPointerLock()` aufgerufen wird. Der Benutzer muss mit der Seite oder einem UI-Element interagieren, damit diese Funktion funktioniert. Außerdem muss das zugehörige Dokument des Ziel-Elements im aktiven Zustand sein.

Wenn `requestPointerLock()` direkt nach dem Freigeben der Zeigersperre über die Standard-Entsperr-Geste (anstatt durch einen `exitPointerLock()`-Aufruf) aufgerufen wird, schlägt der Aufruf fehl, selbst wenn eine {{Glossary("transient_activation", "transiente Aktivierung")}} verfügbar ist.

Wenn `requestPointerLock()` mit [`requestFullscreen()`](/de/docs/Web/API/Element/requestFullscreen) aufgerufen wird, muss zuerst `requestPointerLock()` aufgerufen werden, da [`requestFullscreen()`](/de/docs/Web/API/Element/requestFullscreen) den Zustand der {{Glossary("Transient_activation", "transienten Aktivierung")}} verbrauchen wird.

Das `allow-pointer-lock` [Sandbox-Token](/de/docs/Web/HTML/Element/iframe#sandbox) muss hinzugefügt werden, wenn `requestPointerLock()` in einem {{htmlelement("iframe")}}-Element aufgerufen wird. Außerdem dürfen keine anderen Elemente in anderen {{htmlelement("iframe")}}-Elementen im Zeigersperrmodus sein.

## Beispiele

Zeigersperre wird oft in Online-Spielen verwendet, wenn Sie möchten, dass Ihre Mausbewegungen sich auf die Steuerung des Spiels konzentrieren, ohne dass der Mauszeiger abgelenkt wird, indem er sich außerhalb des Spielbereichs oder an den Rand des Fensters bewegt.

Um die Zeigersperre zu aktivieren, würden Sie den Benutzer veranlassen, in irgendeiner Weise mit der Benutzeroberfläche zu interagieren, möglicherweise durch Drücken eines Knopfes oder der Spielfläche selbst.

```js
canvas.addEventListener("click", async () => {
  await canvas.requestPointerLock();
});
```

Betriebssysteme aktivieren standardmäßig die Mausbeschleunigung, was nützlich ist, wenn Sie manchmal langsame präzise Bewegungen wünschen (denken Sie daran, wie Sie ein Grafikprogramm verwenden könnten), aber auch große Entfernungen mit schnelleren Mausbewegungen zurücklegen möchten (denken Sie an Scrollen und das Auswählen mehrerer Dateien). Für einige Spiele aus der Ich-Perspektive wird jedoch bevorzugt, Rohdaten der Maussteuerung für die Drehung der Kamera zu verwenden – wobei dieselbe Entfernungsbewegung, schnell oder langsam, zu derselben Drehung führt. Dies führt laut professionellen Spielern zu einem besseren Spielerlebnis und höherer Genauigkeit.

Um die Mausbeschleunigung auf Betriebssystemebene zu deaktivieren und auf die Rohdaten der Maus zuzugreifen, können Sie das `unadjustedMovement` auf `true` setzen:

```js
canvas.addEventListener("click", async () => {
  await canvas.requestPointerLock({
    unadjustedMovement: true,
  });
});
```

Weitere Beispielcodes finden Sie unter:

- [pointer lock demo](https://mdn.github.io/dom-examples/pointer-lock/) ([Quellcode ansehen](https://github.com/mdn/dom-examples/tree/main/pointer-lock))
- [Pointer Lock API](/de/docs/Web/API/Pointer_Lock_API)
- [Deaktivieren Sie die Mausbeschleunigung für ein besseres FPS-Spielerlebnis](https://web.dev/articles/disable-mouse-acceleration)

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`Document.pointerLockElement`](/de/docs/Web/API/Document/pointerLockElement)
- [`Document.exitPointerLock()`](/de/docs/Web/API/Document/exitPointerLock)
- [Pointer Lock](/de/docs/Web/API/Pointer_Lock_API)
