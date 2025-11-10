---
title: ViewTransition
slug: Web/API/ViewTransition
l10n:
  sourceCommit: 011212609ed5fa7cf7e7994fc974d1bbab90c68e
---

{{APIRef("View Transition API")}}

Das **`ViewTransition`**-Interface der [View Transition API](/de/docs/Web/API/View_Transition_API) repräsentiert eine aktive View-Transition und bietet Funktionalitäten, um auf verschiedene Zustände der Transition zu reagieren (z. B. bereit, die Animation auszuführen, oder Animation abgeschlossen) oder die Transition ganz zu überspringen.

Dieser Objekttyp wird auf folgende Weise bereitgestellt:

- Über die Eigenschaft [`Document.activeViewTransition`](/de/docs/Web/API/Document/activeViewTransition). Dies bietet eine konsistente Möglichkeit, auf die aktive View-Transition in jedem Kontext zuzugreifen, ohne dass es notwendig ist, sie für einen späteren einfachen Zugriff zu speichern.
- Im Fall von Transitionen im selben Dokument (SPA) wird sie auch von der Methode [`document.startViewTransition()`](/de/docs/Web/API/Document/startViewTransition) zurückgegeben.
- Im Fall von Transitionen zwischen Dokumenten (MPA) wird sie ebenfalls bereitgestellt:
  - Auf der ausgehenden Seite über die Eigenschaft [`PageSwapEvent.viewTransition`](/de/docs/Web/API/PageSwapEvent/viewTransition) des [`pageswap`](/de/docs/Web/API/Window/pageswap_event)-Ereignisobjekts.
  - Auf der eingehenden Seite über die Eigenschaft [`PageRevealEvent.viewTransition`](/de/docs/Web/API/PageRevealEvent/viewTransition) des [`pagereveal`](/de/docs/Web/API/Window/pagereveal_event)-Ereignisobjekts.

Wenn eine View-Transition durch einen `startViewTransition()`-Aufruf (oder eine Seitennavigation im Fall von MPA-Transitionen) ausgelöst wird, wird eine Abfolge von Schritten wie in [Der View-Transition-Prozess](/de/docs/Web/API/View_Transition_API/Using#the_view_transition_process) erklärt, gefolgt. Dies erklärt auch, wann die verschiedenen Promises erfüllt werden.

## Instanz-Eigenschaften

- [`ViewTransition.finished`](/de/docs/Web/API/ViewTransition/finished) {{ReadOnlyInline}}
  - : Ein {{jsxref("Promise")}}, das erfüllt wird, sobald die Transition-Animation beendet ist und die neue Seitenansicht für den Benutzer sichtbar und interaktiv ist.
- [`ViewTransition.ready`](/de/docs/Web/API/ViewTransition/ready) {{ReadOnlyInline}}
  - : Ein {{jsxref("Promise")}}, das erfüllt wird, sobald der Pseudo-Elementbaum erstellt ist und die Transition-Animation kurz davor steht, zu beginnen.
- [`ViewTransition.updateCallbackDone`](/de/docs/Web/API/ViewTransition/updateCallbackDone) {{ReadOnlyInline}}
  - : Ein {{jsxref("Promise")}}, das erfüllt wird, wenn das Promise erfüllt wird, das vom Callback der Methode [`document.startViewTransition()`](/de/docs/Web/API/Document/startViewTransition) zurückgegeben wird.

## Instanz-Methoden

- [`skipTransition()`](/de/docs/Web/API/ViewTransition/skipTransition)
  - : Überspringt den Animationsteil der View-Transition, lässt aber nicht den Callback von [`document.startViewTransition()`](/de/docs/Web/API/Document/startViewTransition) aus, der das DOM aktualisiert.

## Beispiele

Im folgenden SPA-Beispiel wird das [`ViewTransition.ready`](/de/docs/Web/API/ViewTransition/ready) Promise verwendet, um eine benutzerdefinierte kreisförmige Enthüllungsansichtstransition auszulösen, die von der Position des Cursors des Benutzers bei einem Klick ausgeht, mit einer Animation, die von der [Web Animations API](/de/docs/Web/API/Web_Animations_API) bereitgestellt wird.

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

Diese Animation erfordert auch das folgende CSS, um die Standard-CSS-Animation zu deaktivieren und zu verhindern, dass die alten und neuen Ansichtsstatus in irgendeiner Weise verschmelzen (der neue Status "wischt" direkt über den alten Zustand, anstatt in ihn zu übergehen):

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
