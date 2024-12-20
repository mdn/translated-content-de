---
title: "ViewTransition: updateCallbackDone-Eigenschaft"
short-title: updateCallbackDone
slug: Web/API/ViewTransition/updateCallbackDone
l10n:
  sourceCommit: 3a95c239db50c88fdde48daacb6c279006a422b9
---

{{APIRef("View Transition API")}}

Die schreibgeschützte Eigenschaft **`updateCallbackDone`** der [`ViewTransition`](/de/docs/Web/API/ViewTransition)-Schnittstelle ist ein {{jsxref("Promise")}}, das erfüllt wird, wenn das Promise, das von der Callback-Funktion der Methode [`document.startViewTransition()`](/de/docs/Web/API/Document/startViewTransition) zurückgegeben wird, erfüllt ist, oder abgelehnt wird, wenn es abgelehnt wird.

`updateCallbackDone` ist nützlich, wenn Sie sich nicht um den Erfolg oder Misserfolg einer Animation beim Übergang innerhalb desselben Dokuments (SPA) kümmern, sondern einfach nur wissen möchten, ob und wann das DOM aktualisiert wird.

> [!NOTE]
> Im Falle eines Übergangs über Dokumente hinweg (MPA) wird das `updateCallbackDone`-Promise des zugehörigen `ViewTransition` automatisch erfüllt.

## Wert

Ein Promise.

## Beispiele

```js
// start new SPA view transition
const transition = document.startViewTransition(() => displayNewImage());

transition.updateCallbackDone.then(() => {
  // Respond to the DOM being updated successfully
});
```

Bitte lesen Sie [Transitions as an enhancement](https://developer.chrome.com/docs/web-platform/view-transitions/#transitions-as-an-enhancement), um ein nützliches Beispiel zu sehen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Glatte Übergänge mit der View Transition API](https://developer.chrome.com/docs/web-platform/view-transitions/)
