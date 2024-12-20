---
title: "ViewTransition: ready-Eigenschaft"
short-title: ready
slug: Web/API/ViewTransition/ready
l10n:
  sourceCommit: 3a95c239db50c88fdde48daacb6c279006a422b9
---

{{APIRef("View Transition API")}}

Die schreibgeschützte Eigenschaft **`ready`** des [`ViewTransition`](/de/docs/Web/API/ViewTransition)-Interfaces ist ein {{jsxref("Promise")}}, das erfüllt wird, sobald der Pseudo-Element-Baum erstellt ist und die Übergangsanimation kurz vor dem Start steht.

`ready` wird abgelehnt, wenn der Übergang nicht beginnen kann. Dies kann aufgrund einer Fehlkonfiguration der Fall sein, beispielsweise bei doppelten {{cssxref("view-transition-name")}}s, oder wenn der an [`Document.startViewTransition()`](/de/docs/Web/API/Document/startViewTransition) übergebene Callback eine Ausnahme auslöst oder ein Promise zurückgibt, das abgelehnt wird.

## Wert

Ein Promise.

## Beispiele

Im folgenden Beispiel wird `ready` verwendet, um einen benutzerdefinierten kreisförmigen Enthüllungsübergang zu starten, der von der Position des Cursors des Benutzers beim Klicken ausgeht. Die Animation wird von der [Web Animations API](/de/docs/Web/API/Web_Animations_API) bereitgestellt.

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

Diese Animation erfordert auch das folgende CSS, um die standardmäßige CSS-Animation auszuschalten und zu verhindern, dass sich die alten und neuen Ansichtsstatus in irgendeiner Weise vermischen (der neue Status "wischt" direkt über den alten Zustand, anstatt hineinzutransitionieren):

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

- [Glatte Übergänge mit der View Transition API](https://developer.chrome.com/docs/web-platform/view-transitions/)
