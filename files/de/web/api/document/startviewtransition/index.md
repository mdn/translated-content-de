---
title: "Document: startViewTransition() Methode"
short-title: startViewTransition()
slug: Web/API/Document/startViewTransition
l10n:
  sourceCommit: 722311032dbf520bf6aeba3d1f432aca38779ffd
---

{{APIRef("View Transitions API")}}

Die **`startViewTransition()`** Methode der {{domxref("Document")}} Schnittstelle startet eine neue Same-Document (SPA) [View-Transition](/de/docs/Web/API/View_Transitions_API) und gibt ein {{domxref("ViewTransition")}} Objekt zurück, das sie repräsentiert.

Wenn `startViewTransition()` aufgerufen wird, wird eine Abfolge von Schritten wie im Abschnitt [Der View-Transition-Prozess](/de/docs/Web/API/View_Transitions_API/Using#the_view_transition_process) beschrieben, ausgeführt.

## Syntax

```js-nolint
startViewTransition()
startViewTransition(updateCallback)
```

### Parameter

- `updateCallback` {{optional_inline}}
  - : Eine optionale Callback-Funktion, die typischerweise verwendet wird, um das DOM während des SPA-View-Transition-Prozesses zu aktualisieren, und die ein {{jsxref("Promise")}} zurückgibt. Der Callback wird aufgerufen, sobald die API einen Schnappschuss der aktuellen Seite erstellt hat. Wenn das von dem Callback zurückgegebene Versprechen erfüllt wird, beginnt die View-Transition im nächsten Frame. Wenn das Versprechen abgelehnt wird, wird die Transition abgebrochen.

### Rückgabewert

Eine Instanz des {{domxref("ViewTransition")}} Objekts.

## Beispiele

### Grundlegende Verwendung

In unserem [Basic SPA View Transitions Demo](https://mdn.github.io/dom-examples/view-transitions/spa/) behandelt die `updateView()` Funktion sowohl Browser, die die View Transitions API unterstützen, als auch solche, die dies nicht tun. In unterstützenden Browsern rufen wir `startViewTransition()` auf, um den View-Transition-Prozess auszulösen, ohne uns um den Rückgabewert zu kümmern.

```js
function updateView(event) {
  // Behandeln Sie den Unterschied, ob das Ereignis auf dem <a> oder dem <img> ausgelöst wird
  let targetIdentifier;
  if (event.target.firstChild === null) {
    targetIdentifier = event.target;
  } else {
    targetIdentifier = event.target.firstChild;
  }

  const displayNewImage = () => {
    const mainSrc = `${targetIdentifier.src.split("_th.jpg")[0]}.jpg`;
    galleryImg.src = mainSrc;
    galleryCaption.textContent = targetIdentifier.alt;
  };

  // Fallback für Browser, die View Transitions nicht unterstützen:
  if (!document.startViewTransition) {
    displayNewImage();
    return;
  }

  // Mit View Transitions:
  const transition = document.startViewTransition(() => displayNewImage());
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Sanfte und einfache Übergänge mit der View Transitions API](https://developer.chrome.com/docs/web-platform/view-transitions/)
