---
title: "Document: startViewTransition()-Methode"
short-title: startViewTransition()
slug: Web/API/Document/startViewTransition
l10n:
  sourceCommit: 722311032dbf520bf6aeba3d1f432aca38779ffd
---

{{APIRef("View Transitions API")}}

Die **`startViewTransition()`**-Methode des [`Document`](/de/docs/Web/API/Document)-Interfaces startet eine neue View-Übergang (SPA) im selben Dokument und gibt ein [`ViewTransition`](/de/docs/Web/API/ViewTransition)-Objekt zurück, um diesen zu repräsentieren.

Wenn `startViewTransition()` aufgerufen wird, wird eine Abfolge von Schritten durchgeführt, wie im Abschnitt [Der View-Übergangsprozess](/de/docs/Web/API/View_Transitions_API/Using#the_view_transition_process) erläutert.

## Syntax

```js-nolint
startViewTransition()
startViewTransition(updateCallback)
```

### Parameter

- `updateCallback` {{optional_inline}}
  - : Eine optionale Callback-Funktion, die typischerweise verwendet wird, um das DOM während des SPA-View-Übergangsprozesses zu aktualisieren, und die ein {{jsxref("Promise")}} zurückgibt. Der Callback wird aufgerufen, sobald die API einen Schnappschuss der aktuellen Seite erstellt hat. Wenn das von dem Callback zurückgegebene Promise erfüllt wird, beginnt der View-Übergang im nächsten Frame. Wenn das von dem Callback zurückgegebene Promise abgelehnt wird, wird der Übergang abgebrochen.

### Rückgabewert

Eine [`ViewTransition`](/de/docs/Web/API/ViewTransition)-Objektinstanz.

## Beispiele

### Grundlegende Verwendung

In unserem [Grundlegenden SPA-View-Übergangs-Demo](https://mdn.github.io/dom-examples/view-transitions/spa/) behandelt die Funktion `updateView()` sowohl Browser, die die View Transitions API unterstützen, als auch solche, die dies nicht tun. In unterstützenden Browsern rufen wir `startViewTransition()` auf, um den View-Übergangsprozess auszulösen, ohne uns um den Rückgabewert zu kümmern.

```js
function updateView(event) {
  // Handle the difference in whether the event is fired on the <a> or the <img>
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

  // Fallback for browsers that don't support View Transitions:
  if (!document.startViewTransition) {
    displayNewImage();
    return;
  }

  // With View Transitions:
  const transition = document.startViewTransition(() => displayNewImage());
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Smooth and simple transitions with the View Transitions API](https://developer.chrome.com/docs/web-platform/view-transitions/)
