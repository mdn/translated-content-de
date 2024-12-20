---
title: ViewTransition
slug: Web/API/ViewTransition
l10n:
  sourceCommit: 3a95c239db50c88fdde48daacb6c279006a422b9
---

{{APIRef("View Transition API")}}

Die **`ViewTransition`**-Schnittstelle der [View Transition API](/de/docs/Web/API/View_Transition_API) repräsentiert eine aktive Ansichtstransition und bietet Funktionen, um auf verschiedene Zustände der Transition zu reagieren (z.B. bereit zur Ausführung der Animation oder Animation abgeschlossen) oder die Transition vollständig zu überspringen.

Dieser Objekttyp wird auf folgende Weise verfügbar gemacht:

- Bei Transitionen im gleichen Dokument (SPA) wird er von der Methode [`document.startViewTransition()`](/de/docs/Web/API/Document/startViewTransition) zurückgegeben.
- Bei dokumentübergreifenden Transitionen (MPA) wird er verfügbar gemacht:
  - Auf der ausgehenden Seite über die [`pageswap`](/de/docs/Web/API/Window/pageswap_event)-Eigenschaft des Objekts [`PageSwapEvent.viewTransition`](/de/docs/Web/API/PageSwapEvent/viewTransition).
  - Auf der eingehenden Seite über die [`pagereveal`](/de/docs/Web/API/Window/pagereveal_event)-Eigenschaft des Objekts [`PageRevealEvent.viewTransition`](/de/docs/Web/API/PageRevealEvent/viewTransition).

Wenn eine Ansichtstransition durch einen `startViewTransition()`-Aufruf initiiert wird (oder eine Seitennavigation im Fall von MPA-Transitionen), wird eine Abfolge von Schritten ausgeführt, wie im [Ansichtstransitionsprozess](/de/docs/Web/API/View_Transition_API/Using#the_view_transition_process) erklärt. Dies erklärt auch, wann die verschiedenen Versprechen erfüllt werden.

## Instanz-Eigenschaften

- [`ViewTransition.finished`](/de/docs/Web/API/ViewTransition/finished) {{ReadOnlyInline}}
  - : Ein {{jsxref("Promise")}}, das erfüllt wird, sobald die Transitionsanimation abgeschlossen ist und die neue Seitenansicht für den Benutzer sichtbar und interaktiv ist.
- [`ViewTransition.ready`](/de/docs/Web/API/ViewTransition/ready) {{ReadOnlyInline}}
  - : Ein {{jsxref("Promise")}}, das erfüllt wird, sobald der Pseudo-Element-Baum erstellt ist und die Transitionsanimation kurz vor dem Start steht.
- [`ViewTransition.updateCallbackDone`](/de/docs/Web/API/ViewTransition/updateCallbackDone) {{ReadOnlyInline}}
  - : Ein {{jsxref("Promise")}}, das erfüllt wird, wenn das Versprechen erfüllt wird, das von dem Callback der Methode [`document.startViewTransition()`](/de/docs/Web/API/Document/startViewTransition) zurückgegeben wird.

## Instanz-Methoden

- [`skipTransition()`](/de/docs/Web/API/ViewTransition/skipTransition)
  - : Überspringt den Animationsanteil der Ansichtstransition, überspringt jedoch nicht das Ausführen des Callbacks von [`document.startViewTransition()`](/de/docs/Web/API/Document/startViewTransition), das das DOM aktualisiert.

## Beispiele

Im folgenden SPA-Beispiel wird das Versprechen [`ViewTransition.ready`](/de/docs/Web/API/ViewTransition/ready) verwendet, um eine benutzerdefinierte, zirkulare Ansichtstransition auszulösen, die vom Standort des Mauszeigers des Benutzers bei Klick ausgeht, wobei die Animation von der [Web Animations API](/de/docs/Web/API/Web_Animations_API) bereitgestellt wird.

```js
// Store the last click event
let lastClick;
addEventListener("click", (event) => (lastClick = event));

function spaNavigate(data) {
  // Fallback for browsers that don't support this API:
  if (!document.startViewTransition) {
    updateTheDOMSomehow(data);
    return;
  }

  // Get the click position, or fallback to the middle of the screen
  const x = lastClick?.clientX ?? innerWidth / 2;
  const y = lastClick?.clientY ?? innerHeight / 2;
  // Get the distance to the furthest corner
  const endRadius = Math.hypot(
    Math.max(x, innerWidth - x),
    Math.max(y, innerHeight - y),
  );

  // Create a transition:
  const transition = document.startViewTransition(() => {
    updateTheDOMSomehow(data);
  });

  // Wait for the pseudo-elements to be created:
  transition.ready.then(() => {
    // Animate the root's new view
    document.documentElement.animate(
      {
        clipPath: [
          `circle(0 at ${x}px ${y}px)`,
          `circle(${endRadius}px at ${x}px ${y}px)`,
        ],
      },
      {
        duration: 500,
        easing: "ease-in",
        // Specify which pseudo-element to animate
        pseudoElement: "::view-transition-new(root)",
      },
    );
  });
}
```

Diese Animation erfordert auch das folgende CSS, um die standardmäßige CSS-Animation auszuschalten und zu verhindern, dass die alten und neuen Ansichtsstatus in irgendeiner Weise ineinander übergehen (der neue Status "wischt" direkt über den alten Status, anstatt zu überblenden):

```css
::view-transition-image-pair(root) {
  isolation: auto;
}

::view-transition-old(root),
::view-transition-new(root) {
  animation: none;
  mix-blend-mode: normal;
  display: block;
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Reibungslose Übergänge mit der View Transition API](https://developer.chrome.com/docs/web-platform/view-transitions/)
