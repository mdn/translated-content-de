---
title: ViewTransition
slug: Web/API/ViewTransition
l10n:
  sourceCommit: 6deab4bdc0b2563d1e32047c4f5b25c3a8f02850
---

{{APIRef("View Transitions API")}}

Das **`ViewTransition`**-Interface der [View Transitions API](/de/docs/Web/API/View_Transitions_API) repräsentiert eine aktive Ansichtsübergang und bietet Funktionalitäten, um auf verschiedene Zustände des Übergangs zu reagieren (z. B. wenn die Animation bereit ist oder die Animation abgeschlossen ist) oder um den Übergang vollständig zu überspringen.

Dieser Objekttyp ist auf folgende Weise verfügbar:

- Im Falle von Transitionen im gleichen Dokument (SPA) wird es durch die Methode [`document.startViewTransition()`](/de/docs/Web/API/Document/startViewTransition) zurückgegeben.
- Im Falle von Transitionen zwischen Dokumenten (MPA) wird es verfügbar gemacht:
  - Auf der ausgehenden Seite über das [`pageswap`](/de/docs/Web/API/Window/pageswap_event)-Ereignisobjekt durch die Eigenschaft [`PageSwapEvent.viewTransition`](/de/docs/Web/API/PageSwapEvent/viewTransition).
  - Auf der eingehenden Seite über das [`pagereveal`](/de/docs/Web/API/Window/pagereveal_event)-Ereignisobjekt durch die Eigenschaft [`PageRevealEvent.viewTransition`](/de/docs/Web/API/PageRevealEvent/viewTransition).

Wenn ein Ansichtsübergang durch einen Aufruf von `startViewTransition()` ausgelöst wird (oder eine Seitennavigation im Fall von MPA-Übergängen), wird eine Abfolge von Schritten befolgt, wie in [Der Prozess des Ansichtsübergangs](/de/docs/Web/API/View_Transitions_API/Using#the_view_transition_process) erklärt. Dies erklärt auch, wann die verschiedenen Versprechen erfüllt werden.

## Instanz-Eigenschaften

- [`ViewTransition.finished`](/de/docs/Web/API/ViewTransition/finished) {{ReadOnlyInline}}
  - : Ein {{jsxref("Promise")}}, das erfüllt wird, sobald die Übergangsanimation abgeschlossen ist und die neue Seitenansicht für den Benutzer sichtbar und interaktiv ist.
- [`ViewTransition.ready`](/de/docs/Web/API/ViewTransition/ready) {{ReadOnlyInline}}
  - : Ein {{jsxref("Promise")}}, das erfüllt wird, sobald der Pseudo-Element-Baum erstellt ist und die Übergangsanimation beginnen soll.
- [`ViewTransition.updateCallbackDone`](/de/docs/Web/API/ViewTransition/updateCallbackDone) {{ReadOnlyInline}}
  - : Ein {{jsxref("Promise")}}, das erfüllt wird, wenn das Versprechen, das von der Rückruffunktion der Methode [`document.startViewTransition()`](/de/docs/Web/API/Document/startViewTransition) zurückgegeben wird, erfüllt wird.

## Instanz-Methoden

- [`skipTransition()`](/de/docs/Web/API/ViewTransition/skipTransition)
  - : Überspringt den Animationsteil des Ansichtsübergangs, überspringt jedoch nicht die Ausführung der Rückruffunktion von [`document.startViewTransition()`](/de/docs/Web/API/Document/startViewTransition), die das DOM aktualisiert.

## Beispiele

Im folgenden SPA-Beispiel wird das Promise [`ViewTransition.ready`](/de/docs/Web/API/ViewTransition/ready) verwendet, um eine benutzerdefinierte, kreisförmige Offenlegungs-Ansichtsübergang aus der Position des Benutzer-Cursors bei einem Klick auszulösen, wobei die Animation von der [Web Animations API](/de/docs/Web/API/Web_Animations_API) bereitgestellt wird.

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

Diese Animation erfordert auch das folgende CSS, um die standardmäßige CSS-Animation auszuschalten und zu verhindern, dass sich die alten und neuen Ansichts-Zustände in irgendeiner Weise vermischen (der neue Zustand "wischt" direkt über den alten Zustand, anstatt hinüberzuwechseln):

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
