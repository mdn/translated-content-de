---
title: ViewTransition
slug: Web/API/ViewTransition
l10n:
  sourceCommit: 7313aa9ef71bdfcd7ddb2fa4247b0600ce0e6542
---

{{APIRef("View Transition API")}}

Das **`ViewTransition`** Interface der [View Transition API](/de/docs/Web/API/View_Transition_API) repräsentiert eine aktive Ansichtstransition und bietet Funktionen, um auf das Erreichen verschiedener Zustände der Transition zu reagieren (z.B. bereit sein, um die Animation zu starten, oder Animation beendet) oder die Transition insgesamt zu überspringen.

Dieser Objekttyp ist auf folgende Weise verfügbar:

- Über die [`Document.activeViewTransition`](/de/docs/Web/API/Document/activeViewTransition) Eigenschaft. Diese bietet eine konsistente Methode, um auf die aktive Ansichtstransition in jedem Kontext zuzugreifen, ohne sich darum sorgen zu müssen, sie für einen späteren einfachen Zugriff zu speichern.
- Im Fall von Transitionen im selben Dokument (SPA) wird es auch durch die Methode [`document.startViewTransition()`](/de/docs/Web/API/Document/startViewTransition) zurückgegeben.
- Im Fall von Übergängen zwischen Dokumenten (MPA) wird es auch verfügbar gemacht:
  - Auf der ausgehenden Seite über die Eigenschaft [`PageSwapEvent.viewTransition`](/de/docs/Web/API/PageSwapEvent/viewTransition) des Ereignisobjekts [`pageswap`](/de/docs/Web/API/Window/pageswap_event).
  - Auf der eingehenden Seite über die Eigenschaft [`PageRevealEvent.viewTransition`](/de/docs/Web/API/PageRevealEvent/viewTransition) des Ereignisobjekts [`pagereveal`](/de/docs/Web/API/Window/pagereveal_event).

Wenn eine Ansichtstransition durch einen `startViewTransition()` Aufruf ausgelöst wird (oder eine Seitennavigation im Fall von MPA-Transitionen), folgt eine Abfolge von Schritten, wie in [Der Ansichtstransitionsprozess](/de/docs/Web/API/View_Transition_API/Using#the_view_transition_process) erklärt wird. Dies erklärt auch, wann die verschiedenen Versprechen erfüllt werden.

## Instanzeigenschaften

- [`ViewTransition.finished`](/de/docs/Web/API/ViewTransition/finished) {{ReadOnlyInline}}
  - : Ein {{jsxref("Promise")}}, das sich erfüllt, sobald die Transitionanimation beendet ist und die neue Seitenansicht für den Benutzer sichtbar und interaktiv ist.
- [`ViewTransition.ready`](/de/docs/Web/API/ViewTransition/ready) {{ReadOnlyInline}}
  - : Ein {{jsxref("Promise")}}, das sich erfüllt, sobald der Pseudoelementbaum erstellt ist und die Transitionanimation bald starten wird.
- [`ViewTransition.types`](/de/docs/Web/API/ViewTransition/types) {{ReadOnlyInline}}
  - : Ein [`ViewTransitionTypeSet`](/de/docs/Web/API/ViewTransitionTypeSet), das den Zugriff auf die auf der Ansichtstransition gesetzten Typen und deren Änderung ermöglicht.
- [`ViewTransition.updateCallbackDone`](/de/docs/Web/API/ViewTransition/updateCallbackDone) {{ReadOnlyInline}}
  - : Ein {{jsxref("Promise")}}, das sich erfüllt, wenn das Versprechen, das von dem Callback der Methode [`document.startViewTransition()`](/de/docs/Web/API/Document/startViewTransition) zurückgegeben wird, erfüllt ist.

## Instanzmethoden

- [`skipTransition()`](/de/docs/Web/API/ViewTransition/skipTransition)
  - : Überspringt den Animationsanteil der Ansichtstransition, überspringt jedoch nicht das Ausführen des Callbacks der [`document.startViewTransition()`](/de/docs/Web/API/Document/startViewTransition) Methode, das das DOM aktualisiert.
- [`waitUntil()`](/de/docs/Web/API/ViewTransition/waitUntil)
  - : Verzögert das Beenden der Ansichtstransition und die Zerstörung des zugehörigen Pseudoelementbaums, bis ein in die Methode übergebenes {{jsxref("Promise")}} aufgelöst ist.

## Beispiele

Im folgenden SPA-Beispiel wird das Versprechen [`ViewTransition.ready`](/de/docs/Web/API/ViewTransition/ready) verwendet, um eine benutzerdefinierte kreisförmige Aufdeckungsansichtstransition auszulösen, die von der Position des Benutzer-Cursors bei Klick ausgeht, wobei die Animation durch die [Web Animations API](/de/docs/Web/API/Web_Animations_API) bereitgestellt wird.

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

Diese Animation erfordert auch das folgende CSS, um die Standard-CSS-Animation auszuschalten und zu verhindern, dass der alte und der neue Ansichtsstatus in irgendeiner Weise ineinander übergehen (der neue Status "wischt" direkt über dem alten Status, anstatt zu transitionieren):

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

- [View Transition API](/de/docs/Web/API/View_Transition_API)
- [Verwenden der View Transition API](/de/docs/Web/API/View_Transition_API/Using)
- [Verwenden von Ansichtstransitionstypen](/de/docs/Web/API/View_Transition_API/Using_types)
- [Sanfte Übergänge mit der View Transition API](https://developer.chrome.com/docs/web-platform/view-transitions/)
