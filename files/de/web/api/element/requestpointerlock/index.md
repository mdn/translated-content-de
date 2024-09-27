---
title: "Element: requestPointerLock() Methode"
short-title: requestPointerLock()
slug: Web/API/Element/requestPointerLock
l10n:
  sourceCommit: d0b23f3f26637aa405ee9ee0a0892fc6e9b742ef
---

{{APIRef("Pointer Lock API")}}

Die **`requestPointerLock()`** Methode der [`Element`](/de/docs/Web/API/Element) Schnittstelle ermöglicht es Ihnen, asynchron zu beantragen, dass der Zeiger auf dem angegebenen Element gesperrt wird.

Um den Erfolg oder Misserfolg des Antrags zu verfolgen, ist es notwendig, die [`pointerlockchange`](/de/docs/Web/API/Document/pointerlockchange_event) und [`pointerlockerror`](/de/docs/Web/API/Document/pointerlockerror_event) Ereignisse auf der [`Document`](/de/docs/Web/API/Document) Ebene zu überwachen.

> [!NOTE]
> In der aktuellen Spezifikation kommuniziert `requestPointerLock()` den Erfolg oder Misserfolg des Antrags nur durch das Auslösen von [`pointerlockchange`](/de/docs/Web/API/Document/pointerlockchange_event) oder [`pointerlockerror`](/de/docs/Web/API/Document/pointerlockerror_event) Ereignissen. [Ein vorgeschlagenes Update der Spezifikation](https://github.com/w3c/pointerlock/pull/49) aktualisiert `requestPointerLock()`, um ein {{jsxref("Promise")}} zu zurückzugeben, das Erfolg oder Misserfolg kommuniziert. Diese Seite dokumentiert die Version, die ein {{jsxref("Promise")}} zurückgibt. Beachten Sie jedoch, dass diese Version noch kein Standard ist und nicht von allen Browsern implementiert wurde. Siehe [Browser-Kompatibilität](#browser-kompatibilität) für weitere Informationen.

## Syntax

```js-nolint
requestPointerLock()
requestPointerLock(options)
```

### Parameter

- `options` {{optional_inline}}
  - : Ein Optionsobjekt, das die folgenden Eigenschaften enthalten kann:
    - `unadjustedMovement` {{optional_inline}}
      - : Deaktiviert die Anpassung auf Betriebssystemebene für die Mausbeschleunigung und greift stattdessen auf rohe Mauseingaben zu. Der Standardwert ist `false`; wenn er auf `true` gesetzt wird, wird die Mausbeschleunigung deaktiviert.

### Rückgabewert

Ein {{jsxref("Promise")}}, das mit {{jsxref("undefined")}} aufgelöst wird.

## Sicherheit

[Vorübergehende Aktivierung](/de/docs/Glossary/Transient_activation) ist erforderlich, wenn `requestPointerLock()` aufgerufen wird. Der Benutzer muss mit der Seite oder einem UI-Element interagieren, damit diese Funktion funktioniert. Außerdem muss das zugehörige Dokument des Zielelements im aktiven Zustand sein.

Wenn `requestPointerLock()` unmittelbar nach dem Freigeben der Zeigersperre durch die Standardentsperrgeste (anstatt durch einen `exitPointerLock()` Aufruf) aufgerufen wird, schlägt der Aufruf fehl, selbst wenn eine [vorübergehende Aktivierung](/de/docs/Glossary/transient_activation) verfügbar ist.

Wenn `requestPointerLock()` zusammen mit [`requestFullscreen()`](/de/docs/Web/API/Element/requestFullscreen) aufgerufen wird, muss `requestPointerLock()` zuerst aufgerufen werden, da [`requestFullscreen()`](/de/docs/Web/API/Element/requestFullscreen) den Zustand der [vorübergehenden Aktivierung](/de/docs/Glossary/Transient_activation) verbrauchen wird.

Das `allow-pointer-lock` [Sandbox-Token](/de/docs/Web/HTML/Element/iframe#sandbox) muss hinzugefügt werden, wenn `requestPointerLock()` in einem {{htmlelement("iframe")}} Element aufgerufen wird. Außerdem dürfen keine anderen Elemente in anderen {{htmlelement("iframe")}} Elementen im Zeigersperrmodus sein.

## Beispiele

Zeigersperre wird oft in Online-Spielen verwendet, wenn Sie möchten, dass Ihre Mausbewegung auf die Steuerung des Spiels fokussiert ist, ohne dass der Mauszeiger herumwandert, außerhalb des Spielbereichs geht oder an den Fensterrand gelangt.

Um die Zeigersperre zu aktivieren, sollten Sie den Benutzer dazu bringen, auf irgendeine Weise mit der Benutzeroberfläche zu interagieren, vielleicht durch Drücken eines Buttons oder der Spieloberfläche selbst.

```js
canvas.addEventListener("click", async () => {
  await canvas.requestPointerLock();
});
```

Betriebssysteme aktivieren standardmäßig die Mausbeschleunigung, was nützlich ist, wenn Sie manchmal langsame, präzise Bewegungen wünschen (denken Sie daran, wie Sie ein Grafikprogramm verwenden könnten), aber auch größere Entfernungen mit schnelleren Mausbewegungen zurücklegen möchten (denken Sie an das Scrollen und Auswählen mehrerer Dateien). Bei einigen Ego-Perspektive-Spielen wird jedoch rohe Mauseingabedaten bevorzugt, um die Kamerarotation zu steuern – wobei die gleiche Bewegungsdistanz, ob schnell oder langsam, zur gleichen Rotation führt. Dies führt zu einem besseren Spielerlebnis und höherer Genauigkeit, so professionelle Spieler.

Um die Mausbeschleunigung auf Betriebssystemebene zu deaktivieren und auf rohe Mauseingaben zuzugreifen, können Sie `unadjustedMovement` auf `true` setzen:

```js
canvas.addEventListener("click", async () => {
  await canvas.requestPointerLock({
    unadjustedMovement: true,
  });
});
```

Weitere Beispielcodes finden Sie unter:

- [Zeigersperre Demo](https://mdn.github.io/dom-examples/pointer-lock/) ([Quellcode ansehen](https://github.com/mdn/dom-examples/tree/main/pointer-lock))
- [Pointer Lock API](/de/docs/Web/API/Pointer_Lock_API)
- [Mausbeschleunigung deaktivieren, um ein besseres Ego-Shooter-Spielerlebnis zu bieten](https://web.dev/articles/disable-mouse-acceleration)

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`Document.pointerLockElement`](/de/docs/Web/API/Document/pointerLockElement)
- [`Document.exitPointerLock()`](/de/docs/Web/API/Document/exitPointerLock)
- [Pointer Lock](/de/docs/Web/API/Pointer_Lock_API)
