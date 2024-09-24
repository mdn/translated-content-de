---
title: "ViewTransition: updateCallbackDone-Eigenschaft"
short-title: updateCallbackDone
slug: Web/API/ViewTransition/updateCallbackDone
l10n:
  sourceCommit: 216794e76611c18e53222bb8efa570e898e990de
---

{{APIRef("View Transitions API")}}

Die schreibgeschützte Eigenschaft **`updateCallbackDone`** der {{domxref("ViewTransition")}}-Schnittstelle ist ein {{jsxref("Promise")}}, das erfüllt wird, wenn das Promise, das von der Callback-Funktion der Methode {{domxref("Document.startViewTransition()", "document.startViewTransition()")}} zurückgegeben wird, erfüllt wird, oder abgelehnt wird, wenn es abgelehnt wird.

`updateCallbackDone` ist nützlich, wenn Sie sich nicht um den Erfolg/Misserfolg einer View-Transition-Animation im selben Dokument (SPA) kümmern, sondern nur wissen möchten, ob und wann der DOM aktualisiert wird.

> [!NOTE]
> Im Fall einer View-Transition zwischen Dokumenten (MPA) wird das `updateCallbackDone`-Promise des zugehörigen `ViewTransition` automatisch erfüllt.

## Wert

Ein Promise.

## Beispiele

```js
// Neue SPA-View-Transition starten
const transition = document.startViewTransition(() => displayNewImage());

transition.updateCallbackDone.then(() => {
  // Reagieren, wenn der DOM erfolgreich aktualisiert wurde
});
```

Sehen Sie sich [Transitions als Verbesserung](https://developer.chrome.com/docs/web-platform/view-transitions/#transitions-as-an-enhancement) für ein nützliches Beispiel an.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Sanfte und einfache Übergänge mit der View Transitions API](https://developer.chrome.com/docs/web-platform/view-transitions/)
