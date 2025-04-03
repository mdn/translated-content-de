---
title: ViewTransition
slug: Web/API/ViewTransition
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

{{APIRef("View Transition API")}}

Das **`ViewTransition`**-Interface der [View Transition API](/de/docs/Web/API/View_Transition_API) repräsentiert eine aktive Ansichtstransition und bietet Funktionen, um auf das Erreichen verschiedener Zustände der Transition zu reagieren (z. B. bereit, die Animation auszuführen, oder die Animation ist beendet) oder die Transition ganz zu überspringen.

Dieser Objekttyp wird auf folgende Weise zur Verfügung gestellt:

- Im Fall von Übergängen im selben Dokument (SPA) wird es von der Methode [`document.startViewTransition()`](/de/docs/Web/API/Document/startViewTransition) zurückgegeben.
- Im Fall von Dokumentenübergreifenden Übergängen (MPA) wird es verfügbar gemacht:
  - Auf der ausgehenden Seite über die [`pageswap`](/de/docs/Web/API/Window/pageswap_event) Ereignisobjekt-Eigenschaft [`PageSwapEvent.viewTransition`](/de/docs/Web/API/PageSwapEvent/viewTransition).
  - Auf der eingehenden Seite über die [`pagereveal`](/de/docs/Web/API/Window/pagereveal_event) Ereignisobjekt-Eigenschaft [`PageRevealEvent.viewTransition`](/de/docs/Web/API/PageRevealEvent/viewTransition).

Wenn eine Ansichtstransition durch einen `startViewTransition()`-Aufruf (oder eine Seitennavigation im Fall von MPA-Übergängen) ausgelöst wird, wird eine Abfolge von Schritten befolgt, wie im [Ansichtstransitionsprozess](/de/docs/Web/API/View_Transition_API/Using#the_view_transition_process) erklärt wird. Dies erklärt auch, wann die verschiedenen Versprechen erfüllt werden.

## Instanzeigenschaften

- [`ViewTransition.finished`](/de/docs/Web/API/ViewTransition/finished) {{ReadOnlyInline}}
  - : Ein {{jsxref("Promise")}}, das erfüllt wird, sobald die Übergangsanimation beendet ist und die neue Seitenansicht für den Benutzer sichtbar und interaktiv ist.
- [`ViewTransition.ready`](/de/docs/Web/API/ViewTransition/ready) {{ReadOnlyInline}}
  - : Ein {{jsxref("Promise")}}, das erfüllt wird, sobald der Pseudoelementbaum erstellt ist und die Übergangsanimation kurz davor steht, zu starten.
- [`ViewTransition.updateCallbackDone`](/de/docs/Web/API/ViewTransition/updateCallbackDone) {{ReadOnlyInline}}
  - : Ein {{jsxref("Promise")}}, das erfüllt wird, wenn das Versprechen, das durch den Rückruf der Methode [`document.startViewTransition()`](/de/docs/Web/API/Document/startViewTransition) zurückgegeben wird, erfüllt ist.

## Instanzmethoden

- [`skipTransition()`](/de/docs/Web/API/ViewTransition/skipTransition)
  - : Überspringt den Animationsabschnitt der Ansichtstransition, jedoch nicht den Rückruf `document.startViewTransition()`, der das DOM aktualisiert.

## Beispiele

Im folgenden SPA-Beispiel wird das Promise [`ViewTransition.ready`](/de/docs/Web/API/ViewTransition/ready) verwendet, um eine benutzerdefinierte, kreisförmige Enthüllungstransition auszulösen, die von der Position des Benutzercursors bei einem Klick ausgeht, wobei die Animation durch die [Web Animations API](/de/docs/Web/API/Web_Animations_API) bereitgestellt wird.

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

Diese Animation erfordert auch das folgende CSS, um die standardmäßige CSS-Animation abzuschalten und zu verhindern, dass die alten und neuen Ansichtsstatus in irgendeiner Weise überblendet werden (der neue Zustand "wischt" direkt über den alten Zustand, anstatt zu überblenden):

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

- [Sanfte Übergänge mit der View Transition API](https://developer.chrome.com/docs/web-platform/view-transitions/)
