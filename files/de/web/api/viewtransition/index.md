---
title: ViewTransition
slug: Web/API/ViewTransition
l10n:
  sourceCommit: b884c869c8bdc8f6bd0ea8290934757d27d6845c
---

{{APIRef("View Transition API")}}

Das **`ViewTransition`**-Interface der [View Transition API](/de/docs/Web/API/View_Transition_API) repräsentiert eine aktive Ansichtstransition und bietet Funktionen, um auf verschiedene Zustände der Transition zu reagieren (z. B. bereit sein, die Animation auszuführen, oder Animation abgeschlossen) oder die Transition ganz zu überspringen.

Dieser Objekttyp ist auf folgende Weise verfügbar:

- Über die [`Document.activeViewTransition`](/de/docs/Web/API/Document/activeViewTransition)-Eigenschaft. Diese bietet eine konsistente Möglichkeit, die aktive Ansichtstransition in jedem Kontext zuzugreifen, ohne sie für einen späteren einfachen Zugriff speichern zu müssen.
- Im Falle von Single-Page-Anwendungen (SPA) wird sie auch von der [`document.startViewTransition()`](/de/docs/Web/API/Document/startViewTransition)-Methode zurückgegeben.
- Im Fall von Multi-Page-Anwendungen (MPA) wird sie auch verfügbar gemacht:
  - Auf der ausgehenden Seite über die [`pageswap`](/de/docs/Web/API/Window/pageswap_event)-Ereignisobjekteigenschaft [`PageSwapEvent.viewTransition`](/de/docs/Web/API/PageSwapEvent/viewTransition).
  - Auf der eingehenden Seite über die [`pagereveal`](/de/docs/Web/API/Window/pagereveal_event)-Ereignisobjekteigenschaft [`PageRevealEvent.viewTransition`](/de/docs/Web/API/PageRevealEvent/viewTransition).

Wenn eine Ansichtstransition durch einen `startViewTransition()`-Aufruf ausgelöst wird (oder eine Seitennavigation im Falle von MPA-Übergängen), wird eine Abfolge von Schritten befolgt, wie im [Ansichtstransitionsprozess](/de/docs/Web/API/View_Transition_API/Using#the_view_transition_process) erklärt. Dies erklärt auch, wann die verschiedenen Versprechen erfüllt werden.

## Instanzeigenschaften

- [`ViewTransition.finished`](/de/docs/Web/API/ViewTransition/finished) {{ReadOnlyInline}}
  - : Ein {{jsxref("Promise")}}, das erfüllt wird, sobald die Übergangsanimation abgeschlossen ist und die neue Seitenansicht für den Benutzer sichtbar und interaktiv ist.
- [`ViewTransition.ready`](/de/docs/Web/API/ViewTransition/ready) {{ReadOnlyInline}}
  - : Ein {{jsxref("Promise")}}, das erfüllt wird, sobald der Pseudo-Element-Baum erstellt ist und die Übergangsanimation zu starten beginnt.
- [`ViewTransition.types`](/de/docs/Web/API/ViewTransition/types) {{ReadOnlyInline}}
  - : Ein [`ViewTransitionTypeSet`](/de/docs/Web/API/ViewTransitionTypeSet), das den Zugriff auf die auf die Ansichtstransition gesetzten Typen ermöglicht und deren Änderung erlaubt.
- [`ViewTransition.updateCallbackDone`](/de/docs/Web/API/ViewTransition/updateCallbackDone) {{ReadOnlyInline}}
  - : Ein {{jsxref("Promise")}}, das erfüllt wird, wenn das Versprechen, das durch den Rückruf der [`document.startViewTransition()`](/de/docs/Web/API/Document/startViewTransition)-Methode zurückgegeben wird, erfüllt ist.

## Instanzmethoden

- [`skipTransition()`](/de/docs/Web/API/ViewTransition/skipTransition)
  - : Überspringt den Animationsanteil der Ansichtstransition, überspringt jedoch nicht die Ausführung des [`document.startViewTransition()`](/de/docs/Web/API/Document/startViewTransition)-Rückrufs, der das DOM aktualisiert.
- [`waitUntil()`](/de/docs/Web/API/ViewTransition/waitUntil) {{experimental_inline}}
  - : Verzögert den Abschluss der Ansichtstransition und die Zerstörung des zugehörigen Pseudo-Element-Baums, bis ein in die Methode übergebenes {{jsxref("Promise")}} aufgelöst wurde.

## Beispiele

Im folgenden SPA-Beispiel wird das [`ViewTransition.ready`](/de/docs/Web/API/ViewTransition/ready)-Versprechen verwendet, um eine benutzerdefinierte zirkulare Offenlegungstransition zu starten, die von der Position des Cursors des Benutzers beim Klicken ausgeht, wobei die Animation von der [Web Animations API](/de/docs/Web/API/Web_Animations_API) bereitgestellt wird.

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

Diese Animation erfordert außerdem das folgende CSS, um die standardmäßige CSS-Animation auszuschalten und zu verhindern, dass die alten und neuen Ansichtsstatus in jeglicher Weise überblenden (der neue Status "wischt" direkt über den alten Status, anstatt zu überblenden):

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
- [Verwendung der View Transition API](/de/docs/Web/API/View_Transition_API/Using)
- [Verwendung von Ansichtstransitionstypen](/de/docs/Web/API/View_Transition_API/Using_types)
- [Glatte Übergänge mit der View Transition API](https://developer.chrome.com/docs/web-platform/view-transitions/)
