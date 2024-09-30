---
title: "ViewTransition: ready-Eigenschaft"
short-title: ready
slug: Web/API/ViewTransition/ready
l10n:
  sourceCommit: 6deab4bdc0b2563d1e32047c4f5b25c3a8f02850
---

{{APIRef("View Transitions API")}}

Die **`ready`**-Eigenschaft, eine schreibgeschützte Eigenschaft des [`ViewTransition`](/de/docs/Web/API/ViewTransition)-Interfaces, ist ein {{jsxref("Promise")}}, das erfüllt wird, sobald der Pseudoelementbaum erstellt wurde und die Übergangsanimation kurz vor dem Start steht.

`ready` wird abgelehnt, wenn der Übergang nicht beginnen kann. Dies kann durch eine Fehlkonfiguration verursacht werden, zum Beispiel durch doppelte {{cssxref("view-transition-name")}}, oder wenn der an [`Document.startViewTransition()`](/de/docs/Web/API/Document/startViewTransition) übergebene Rückruf eine Ausnahme auslöst oder ein abgelehntes Promise zurückgibt.

## Wert

Ein Promise.

## Beispiele

Im folgenden Beispiel wird `ready` verwendet, um einen benutzerdefinierten, kreisförmigen Anzeigeübergang auszulösen, der von der Position des Cursors des Benutzers bei einem Klick ausgeht, mit einer Animation, die von der [Web Animations API](/de/docs/Web/API/Web_Animations_API) bereitgestellt wird.

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

Diese Animation erfordert auch das folgende CSS, um die Standard-CSS-Animation zu deaktivieren und zu verhindern, dass die alten und neuen Ansichtsstatus in irgendeiner Weise ineinander überblenden (der neue Status "wischt" über den alten Status hinweg, anstatt hineinzutransitionieren):

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

- [Glatte und einfache Übergänge mit der View Transitions API](https://developer.chrome.com/docs/web-platform/view-transitions/)
