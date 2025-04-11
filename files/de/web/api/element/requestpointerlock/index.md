---
title: "Element: requestPointerLock()-Methode"
short-title: requestPointerLock()
slug: Web/API/Element/requestPointerLock
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{APIRef("Pointer Lock API")}}

Die **`requestPointerLock()`**-Methode des [`Element`](/de/docs/Web/API/Element)-Interfaces ermöglicht es Ihnen, asynchron anzufragen, dass der Zeiger auf das gegebene Element gesperrt wird.

Um den Erfolg oder Misserfolg der Anfrage zu verfolgen, ist es notwendig, die [`pointerlockchange`](/de/docs/Web/API/Document/pointerlockchange_event)- und [`pointerlockerror`](/de/docs/Web/API/Document/pointerlockerror_event)-Events auf der Ebene des [`Document`](/de/docs/Web/API/Document) zu überwachen.

> [!NOTE]
> In der aktuellen Spezifikation kommuniziert `requestPointerLock()` den Erfolg oder Misserfolg der Anfrage nur durch das Auslösen von [`pointerlockchange`](/de/docs/Web/API/Document/pointerlockchange_event)- oder [`pointerlockerror`](/de/docs/Web/API/Document/pointerlockerror_event)-Events. [Ein vorgeschlagenes Update für die Spezifikation](https://github.com/w3c/pointerlock/pull/49) aktualisiert `requestPointerLock()` so, dass es ein {{jsxref("Promise")}} zurückgibt, welches Erfolg oder Misserfolg kommuniziert. Diese Seite dokumentiert die Version, die ein {{jsxref("Promise")}} zurückgibt. Beachten Sie jedoch, dass diese Version noch kein Standard ist und nicht von allen Browsern implementiert wird. Siehe [Browser-Kompatibilität](#browser-kompatibilität) für weitere Informationen.

## Syntax

```js-nolint
requestPointerLock()
requestPointerLock(options)
```

### Parameter

- `options` {{optional_inline}}
  - : Ein Optionsobjekt, das die folgenden Eigenschaften enthalten kann:
    - `unadjustedMovement` {{optional_inline}}
      - : Deaktiviert die Betriebssystem-basierte Anpassung für Mausbeschleunigung und greift stattdessen auf rohe Mauseingaben zu. Der Standardwert ist `false`; das Setzen auf `true` deaktiviert die Mausbeschleunigung.

### Rückgabewert

Ein {{jsxref("Promise")}}, das mit {{jsxref("undefined")}} aufgelöst wird.

## Sicherheit

{{Glossary("Transient_activation", "Eine transiente Aktivierung")}} ist erforderlich, wenn `requestPointerLock()` aufgerufen wird. Der Benutzer muss mit der Seite oder einem UI-Element interagieren, damit diese Funktion funktioniert. Auch muss das zugehörige Dokument des Zielobjekts im aktiven Zustand sein.

Wenn `requestPointerLock()` unmittelbar nach dem Freigeben der Zeiger-Sperre durch die Standard-Entsperr-Geste (anstatt durch einen `exitPointerLock()`-Aufruf) aufgerufen wird, wird der Aufruf fehlschlagen, auch wenn eine {{Glossary("transient_activation", "transiente Aktivierung")}} verfügbar ist.

Wenn `requestPointerLock()` zusammen mit [`requestFullscreen()`](/de/docs/Web/API/Element/requestFullscreen) aufgerufen wird, muss `requestPointerLock()` zuerst aufgerufen werden, da die [`requestFullscreen()`](/de/docs/Web/API/Element/requestFullscreen) den Zustand der {{Glossary("Transient_activation", "transienten Aktivierung")}} verbrauchen wird.

Das `allow-pointer-lock` [Sandbox-Token](/de/docs/Web/HTML/Reference/Elements/iframe#sandbox) muss hinzugefügt werden, wenn `requestPointerLock()` in einem {{htmlelement("iframe")}}-Element aufgerufen wird. Auch dürfen keine anderen Elemente in anderen {{htmlelement("iframe")}}-Elementen im Zeiger-Sperrzustand sein.

## Beispiele

Die Zeiger-Sperre wird häufig in Online-Spielen verwendet, wenn Sie möchten, dass Ihre Mausbewegungen sich auf die Steuerung des Spiels konzentrieren, ohne dass der Mauszeiger sich bewegt, aus dem Spielbereich herausgeht oder den Rand des Fensters erreicht.

Um die Zeiger-Sperre zu aktivieren, würden Sie den Benutzer dazu bringen, mit der Benutzeroberfläche auf irgendeine Weise zu interagieren, vielleicht durch Drücken eines Buttons oder auf die Spielfläche selbst zu klicken.

```js
canvas.addEventListener("click", async () => {
  await canvas.requestPointerLock();
});
```

Betriebssysteme aktivieren standardmäßig Mausbeschleunigung, was nützlich ist, wenn Sie manchmal langsame präzise Bewegungen wünschen (denken Sie daran, wie Sie vielleicht ein Grafikprogramm verwenden), aber auch große Distanzen mit einer schnelleren Mausbewegung zurücklegen wollen (denken Sie an das Scrollen und Auswählen mehrerer Dateien). Für einige Spiele aus der Ich-Perspektive wird jedoch auf rohe Mauseingabedaten zur Steuerung der Kameradrehung zurückgegriffen — wo die gleiche Bewegung, ob schnell oder langsam, die gleiche Rotation ergibt. Dies führt laut professionellen Spielern zu einem besseren Spielerlebnis und einer höheren Genauigkeit.

Um die Betriebssystem-basierte Mausbeschleunigung zu deaktivieren und auf rohe Mauseingaben zuzugreifen, können Sie das `unadjustedMovement` auf `true` setzen:

```js
canvas.addEventListener("click", async () => {
  await canvas.requestPointerLock({
    unadjustedMovement: true,
  });
});
```

Für mehr Beispielcode siehe:

- [Zeiger-Sperr-Demo](https://mdn.github.io/dom-examples/pointer-lock/) ([siehe Quellcode](https://github.com/mdn/dom-examples/tree/main/pointer-lock))
- [Pointer Lock API](/de/docs/Web/API/Pointer_Lock_API)
- [Mausbeschleunigung deaktivieren, um ein besseres FPS-Spielerlebnis zu ermöglichen](https://web.dev/articles/disable-mouse-acceleration)

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`Document.pointerLockElement`](/de/docs/Web/API/Document/pointerLockElement)
- [`Document.exitPointerLock()`](/de/docs/Web/API/Document/exitPointerLock)
- [Pointer Lock](/de/docs/Web/API/Pointer_Lock_API)
