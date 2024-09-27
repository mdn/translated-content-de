---
title: "Document: startViewTransition() Methode"
short-title: startViewTransition()
slug: Web/API/Document/startViewTransition
l10n:
  sourceCommit: 722311032dbf520bf6aeba3d1f432aca38779ffd
---

{{APIRef("View Transitions API")}}

Die **`startViewTransition()`**-Methode der [`Document`](/de/docs/Web/API/Document) Schnittstelle startet eine neue, dokumentinterne (SPA) [View Transition](/de/docs/Web/API/View_Transitions_API) und gibt ein [`ViewTransition`](/de/docs/Web/API/ViewTransition) Objekt zurück, um sie darzustellen.

Wenn `startViewTransition()` aufgerufen wird, folgt eine Abfolge von Schritten, wie in [Der Prozess der View Transition](/de/docs/Web/API/View_Transitions_API/Using#the_view_transition_process) erklärt.

## Syntax

```js-nolint
startViewTransition()
startViewTransition(updateCallback)
```

### Parameter

- `updateCallback` {{optional_inline}}
  - : Eine optionale Callback-Funktion, die typischerweise verwendet wird, um das DOM während des SPA View Transition Prozesses zu aktualisieren und ein {{jsxref("Promise")}} zurückzugeben. Der Callback wird einmal aufgerufen, nachdem die API einen Snapshot der aktuellen Seite gemacht hat. Wenn das Promise vom Callback erfüllt wird, beginnt die View Transition im nächsten Frame. Wenn das Promise vom Callback abgelehnt wird, wird die Transition abgebrochen.

### Rückgabewert

Eine Instanz des [`ViewTransition`](/de/docs/Web/API/ViewTransition) Objekts.

## Beispiele

### Grundlegende Verwendung

In unserem [Basic SPA View Transitions Demo](https://mdn.github.io/dom-examples/view-transitions/spa/) übernimmt die Funktion `updateView()` sowohl für Browser, die die View Transitions API unterstützen, als auch für solche, die sie nicht unterstützen. In unterstützenden Browsern rufen wir `startViewTransition()` auf, um den View Transition Prozess zu starten, ohne uns um den Rückgabewert zu kümmern.

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

- [Sanfte und einfache Übergänge mit der View Transitions API](https://developer.chrome.com/docs/web-platform/view-transitions/)
