---
title: "ViewTransition: updateCallbackDone-Eigenschaft"
short-title: updateCallbackDone
slug: Web/API/ViewTransition/updateCallbackDone
l10n:
  sourceCommit: 216794e76611c18e53222bb8efa570e898e990de
---

{{APIRef("View Transitions API")}}

Die schreibgeschützte Eigenschaft **`updateCallbackDone`** der [`ViewTransition`](/de/docs/Web/API/ViewTransition)-Schnittstelle ist ein {{jsxref("Promise")}}, das erfüllt wird, wenn das von der Callback-Funktion der Methode [`document.startViewTransition()`](/de/docs/Web/API/Document/startViewTransition) zurückgegebene Versprechen erfüllt wird, oder abgelehnt wird, wenn es abgelehnt wird.

`updateCallbackDone` ist nützlich, wenn es Ihnen egal ist, ob eine gleiche Dokumenten (SPA) View Transition Animation erfolgreich ist oder nicht, und Sie nur wissen möchten, ob und wann das DOM aktualisiert wird.

> [!NOTE]
> Im Fall eines über Dokumente hinweg (MPA) View Transitions wird das `updateCallbackDone`-Promise der zugehörigen `ViewTransition` automatisch erfüllt.

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

Siehe [Transitions als Verbesserung](https://developer.chrome.com/docs/web-platform/view-transitions/#transitions-as-an-enhancement) für ein nützliches Beispiel.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Nahtlose und einfache Übergänge mit der View Transitions API](https://developer.chrome.com/docs/web-platform/view-transitions/)
