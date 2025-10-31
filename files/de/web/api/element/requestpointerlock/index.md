---
title: "Element: requestPointerLock() Methode"
short-title: requestPointerLock()
slug: Web/API/Element/requestPointerLock
l10n:
  sourceCommit: a4fcf79b60471db6f148fa4ba36f2cdeafbbeb70
---

{{APIRef("Pointer Lock API")}}

Die **`requestPointerLock()`** Methode des [`Element`](/de/docs/Web/API/Element) Interfaces ermöglicht es Ihnen, asynchron zu beantragen, dass der Zeiger auf das angegebene Element gesperrt wird.

Um den Erfolg oder das Scheitern der Anfrage zu verfolgen, ist es notwendig, die [`pointerlockchange`](/de/docs/Web/API/Document/pointerlockchange_event) und [`pointerlockerror`](/de/docs/Web/API/Document/pointerlockerror_event) Ereignisse auf der Ebene des [`Document`](/de/docs/Web/API/Document) zu überwachen.

> [!NOTE]
> In der aktuellen Spezifikation teilt `requestPointerLock()` den Erfolg oder das Scheitern der Anfrage nur durch das Auslösen von [`pointerlockchange`](/de/docs/Web/API/Document/pointerlockchange_event) oder [`pointerlockerror`](/de/docs/Web/API/Document/pointerlockerror_event) Ereignissen mit. [Ein vorgeschlagenes Update der Spezifikation](https://github.com/w3c/pointerlock/pull/49) aktualisiert `requestPointerLock()`, um ein {{jsxref("Promise")}} zu verwenden, das Erfolg oder Misserfolg mitteilt. Diese Seite dokumentiert die Version, die ein {{jsxref("Promise")}} zurückgibt. Beachten Sie jedoch, dass diese Version noch kein Standard ist und nicht von allen Browsern implementiert wird. Siehe [Browser-Kompatibilität](#browser-kompatibilität) für weitere Informationen.

## Syntax

```js-nolint
requestPointerLock()
requestPointerLock(options)
```

### Parameter

- `options` {{optional_inline}}
  - : Ein Optionsobjekt, das die folgenden Eigenschaften enthalten kann:
    - `unadjustedMovement` {{optional_inline}}
      - : Deaktiviert die Betriebssystemebenen-Anpassung für Mausbeschleunigung und greift stattdessen auf rohe Mausdaten zu. Der Standardwert ist `false`; das Setzen auf `true` deaktiviert die Mausbeschleunigung.

### Rückgabewert

Ein {{jsxref("Promise")}}, das mit {{jsxref("undefined")}} aufgelöst wird.

## Sicherheit

{{Glossary("Transient_activation", "Transiente Aktivierung")}} ist erforderlich, wenn `requestPointerLock()` aufgerufen wird. Der Benutzer muss mit der Seite oder einem UI-Element interagieren, damit dieses Feature funktioniert. Außerdem muss das zugehörige Dokument des Zielelements im aktiven Zustand sein.

Wenn `requestPointerLock()` unmittelbar nach der Freigabe der Zeigersperre über die Standard-Entsperrgeste (anstatt durch einen `exitPointerLock()` Aufruf) aufgerufen wird, wird der Aufruf fehlschlagen, selbst wenn eine {{Glossary("transient_activation", "transiente Aktivierung")}} verfügbar ist.

Wenn `requestPointerLock()` zusammen mit [`requestFullscreen()`](/de/docs/Web/API/Element/requestFullscreen) aufgerufen wird, muss `requestPointerLock()` zuerst aufgerufen werden, da die [`requestFullscreen()`](/de/docs/Web/API/Element/requestFullscreen) den Status der {{Glossary("Transient_activation", "transienten Aktivierung")}} verbrauchen wird.

Das `allow-pointer-lock` [Sandbox-Token](/de/docs/Web/HTML/Reference/Elements/iframe#sandbox) muss hinzugefügt werden, wenn `requestPointerLock()` in einem {{htmlelement("iframe")}} Element aufgerufen wird. Außerdem dürfen keine anderen Elemente in anderen {{htmlelement("iframe")}} Elementen im Zeigersperrmodus sein.

## Beispiele

Die Zeigersperre wird oft in Online-Spielen verwendet, wenn Sie möchten, dass sich die Mausbewegungen auf die Steuerung des Spiels konzentrieren, ohne die Ablenkung durch den Mauszeiger, der sich bewegt, den Spielbereich verlässt oder den Fensterrand erreicht.

Um die Zeigersperre zu aktivieren, würden Sie den Benutzer dazu bringen, irgendwie mit der Benutzeroberfläche zu interagieren, vielleicht durch das Drücken eines Knopfes oder des Spiel-Canvas selbst.

```js
canvas.addEventListener("click", async () => {
  await canvas.requestPointerLock();
});
```

Betriebssysteme aktivieren die Mausbeschleunigung standardmäßig, was nützlich ist, wenn Sie manchmal langsame, präzise Bewegungen benötigen (denken Sie daran, wie Sie ein Grafikprogramm verwenden könnten), aber auch große Entfernungen mit einer schnelleren Mausbewegung zurücklegen wollen (denken Sie an Scrollen und das Auswählen mehrerer Dateien). Für einige Ego-Shooter-Spiele wird jedoch besser den rohen Mausedaten der Vorzug gegeben, um Kameradrehungen zu steuern — wo die gleiche Entfernungsbewegung, ob schnell oder langsam, zur gleichen Drehung führt. Dies führt laut professionellen Spielern zu einem besseren Spielerlebnis und höherer Genauigkeit.

Um die Betriebssystemebenen-Mausbeschleunigung zu deaktivieren und Zugriff auf rohe Mausdaten zu erhalten, können Sie `unadjustedMovement` auf `true` setzen:

```js
canvas.addEventListener("click", async () => {
  await canvas.requestPointerLock({
    unadjustedMovement: true,
  });
});
```

Für mehr Beispielcode, siehe:

- [Zeiger Sperre Demo](https://mdn.github.io/dom-examples/pointer-lock/) ([Quellcode ansehen](https://github.com/mdn/dom-examples/tree/main/pointer-lock))
- [Pointer Lock API](/de/docs/Web/API/Pointer_Lock_API)
- [Deaktivieren der Mausbeschleunigung, um ein besseres FPS-Spielerlebnis zu bieten](https://web.dev/articles/disable-mouse-acceleration)

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`Document.pointerLockElement`](/de/docs/Web/API/Document/pointerLockElement)
- [`Document.exitPointerLock()`](/de/docs/Web/API/Document/exitPointerLock)
- [Pointer Lock](/de/docs/Web/API/Pointer_Lock_API)
