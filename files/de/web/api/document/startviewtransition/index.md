---
title: "Dokumentation: startViewTransition() Methode"
short-title: startViewTransition()
slug: Web/API/Document/startViewTransition
l10n:
  sourceCommit: 3a95c239db50c88fdde48daacb6c279006a422b9
---

{{APIRef("View Transition API")}}

Die **`startViewTransition()`**-Methode der [`Document`](/de/docs/Web/API/Document)-Schnittstelle startet eine neue Ansichtstransition im gleichen Dokument (SPA) und gibt ein [`ViewTransition`](/de/docs/Web/API/ViewTransition)-Objekt zurück, das diese repräsentiert.

Wenn `startViewTransition()` aufgerufen wird, wird eine Abfolge von Schritten durchgeführt, wie in [Der Prozess der Ansichtstransition](/de/docs/Web/API/View_Transition_API/Using#the_view_transition_process) erklärt.

## Syntax

```js-nolint
startViewTransition()
startViewTransition(updateCallback)
```

### Parameter

- `updateCallback` {{optional_inline}}
  - : Eine optionale Callback-Funktion, die typischerweise dazu aufgerufen wird, das DOM während des SPA-Übergangsprozesses zu aktualisieren und die ein {{jsxref("Promise")}} zurückgibt. Der Callback wird aufgerufen, nachdem die API eine Momentaufnahme der aktuellen Seite gemacht hat. Wenn das von dem Callback zurückgegebene Versprechen erfüllt wird, beginnt der Übergang im nächsten Frame. Wenn das Versprechen zurückgewiesen wird, wird der Übergang abgebrochen.

### Rückgabewert

Eine Instanz eines [`ViewTransition`](/de/docs/Web/API/ViewTransition)-Objekts.

## Beispiele

### Grundlegende Verwendung

In unserem [Grundlegenden SPA View Transitions Demo](https://mdn.github.io/dom-examples/view-transitions/spa/) verwaltet die `updateView()`-Funktion sowohl Browser, die die View Transition API unterstützen, als auch solche, die es nicht tun. In unterstützenden Browsern rufen wir `startViewTransition()` auf, um den Übergangsprozess auszulösen, ohne uns um den Rückgabewert zu kümmern.

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

- [Fließende Übergänge mit der View Transition API](https://developer.chrome.com/docs/web-platform/view-transitions/)
