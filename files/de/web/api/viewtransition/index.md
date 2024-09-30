---
title: ViewTransition
slug: Web/API/ViewTransition
l10n:
  sourceCommit: 6deab4bdc0b2563d1e32047c4f5b25c3a8f02850
---

{{APIRef("View Transitions API")}}

Das **`ViewTransition`**-Interface der [View Transitions API](/de/docs/Web/API/View_Transitions_API) repräsentiert eine aktive Ansichtstransition und bietet Funktionalität, um auf das Erreichen verschiedener Zustände der Transition zu reagieren (z. B. bereit zur Ausführung der Animation oder Animation abgeschlossen) oder die Transition vollständig zu überspringen.

Dieser Objekttyp wird auf folgende Weise bereitgestellt:

- Im Falle von Same-Document-Übergängen (SPA) wird er von der Methode [`document.startViewTransition()`](/de/docs/Web/API/Document/startViewTransition) zurückgegeben.
- Im Falle von Cross-Document-Übergängen (MPA) wird er verfügbar gemacht:
  - Auf der ausgehenden Seite über die `pageswap` Ereignisobjekteigenschaft [`PageSwapEvent.viewTransition`](/de/docs/Web/API/PageSwapEvent/viewTransition).
  - Auf der eingehenden Seite über die `pagereveal` Ereignisobjekteigenschaft [`PageRevealEvent.viewTransition`](/de/docs/Web/API/PageRevealEvent/viewTransition).

Wenn eine Ansichtstransition durch einen Aufruf von `startViewTransition()` (oder eine Seitennavigation im Falle von MPA-Übergängen) ausgelöst wird, wird eine Abfolge von Schritten durchgeführt, wie unter [Der Prozess der Ansichtstransition](/de/docs/Web/API/View_Transitions_API/Using#the_view_transition_process) erklärt. Dies erklärt auch, wann die verschiedenen Versprechen erfüllt werden.

## Instanz-Eigenschaften

- [`ViewTransition.finished`](/de/docs/Web/API/ViewTransition/finished) {{ReadOnlyInline}}
  - : Ein {{jsxref("Promise")}}, das erfüllt wird, sobald die Übergangsanimation abgeschlossen ist und die neue Seitenansicht für den Benutzer sichtbar und interaktiv ist.
- [`ViewTransition.ready`](/de/docs/Web/API/ViewTransition/ready) {{ReadOnlyInline}}
  - : Ein {{jsxref("Promise")}}, das erfüllt wird, sobald der Pseudo-Element-Baum erstellt ist und die Übergangsanimation beginnen soll.
- [`ViewTransition.updateCallbackDone`](/de/docs/Web/API/ViewTransition/updateCallbackDone) {{ReadOnlyInline}}
  - : Ein {{jsxref("Promise")}}, das erfüllt wird, wenn das Versprechen erfüllt wird, das von dem Rückruf der Methode [`document.startViewTransition()`](/de/docs/Web/API/Document/startViewTransition) zurückgegeben wird.

## Instanz-Methoden

- [`skipTransition()`](/de/docs/Web/API/ViewTransition/skipTransition)
  - : Überspringt den Animationsteil der Ansichtstransition, überspringt aber nicht die Ausführung des Rückrufs von [`document.startViewTransition()`](/de/docs/Web/API/Document/startViewTransition), der das DOM aktualisiert.

## Beispiele

Im folgenden SPA-Beispiel wird das Versprechen [`ViewTransition.ready`](/de/docs/Web/API/ViewTransition/ready) verwendet, um eine benutzerdefinierte kreisförmige Offenlegung einer Ansichtstransition ausgehend von der Position des Benutzer-Cursors bei einem Klick auszulösen. Die Animation wird durch die [Web Animations API](/de/docs/Web/API/Web_Animations_API) bereitgestellt.

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

Diese Animation erfordert auch das folgende CSS, um die standardmäßige CSS-Animation zu deaktivieren und zu verhindern, dass die alten und neuen Ansichtszustände irgendwie ineinander überblenden (der neue Zustand "wischt" direkt über den alten Zustand, anstatt zu übergehen):

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

- [Sanfte und einfache Übergänge mit der View Transitions API](https://developer.chrome.com/docs/web-platform/view-transitions/)
