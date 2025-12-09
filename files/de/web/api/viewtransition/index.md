---
title: ViewTransition
slug: Web/API/ViewTransition
l10n:
  sourceCommit: baf0cb6bfe8bf2418122300d3f93e3aa94f72dca
---

{{APIRef("View Transition API")}}

Das **`ViewTransition`**-Interface der [View Transition API](/de/docs/Web/API/View_Transition_API) repräsentiert einen aktiven View-Übergang und bietet Funktionalitäten, um auf das Erreichen verschiedener Zustände des Übergangs zu reagieren (z. B. bereit für die Ausführung der Animation oder Animation abgeschlossen) oder den Übergang ganz zu überspringen.

Dieser Objekttyp ist auf folgende Weise verfügbar:

- Über die [`Document.activeViewTransition`](/de/docs/Web/API/Document/activeViewTransition)-Eigenschaft. Dies bietet eine konsistente Möglichkeit, in jedem Kontext auf den aktiven View-Übergang zuzugreifen, ohne sich später um das Speichern für einfachen Zugriff kümmern zu müssen.
- Im Falle von Übergängen im selben Dokument (SPA) wird er auch durch die Methode [`document.startViewTransition()`](/de/docs/Web/API/Document/startViewTransition) zurückgegeben.
- Im Falle von Dokumenten-übergreifenden Übergängen (MPA) ist er ebenfalls verfügbar:
  - Auf der ausgehenden Seite über die [`pageswap`](/de/docs/Web/API/Window/pageswap_event)-Ereignisobjekteigenschaft [`PageSwapEvent.viewTransition`](/de/docs/Web/API/PageSwapEvent/viewTransition).
  - Auf der eingehenden Seite über die [`pagereveal`](/de/docs/Web/API/Window/pagereveal_event)-Ereignisobjekteigenschaft [`PageRevealEvent.viewTransition`](/de/docs/Web/API/PageRevealEvent/viewTransition).

Wenn ein View-Übergang durch einen `startViewTransition()`-Aufruf ausgelöst wird (oder eine Seitennavigation im Falle von MPA-Übergängen), wird eine Abfolge von Schritten befolgt, wie in [Der View-Übergangsprozess](/de/docs/Web/API/View_Transition_API/Using#the_view_transition_process) erklärt wird. Dies erklärt auch, wann die verschiedenen Versprechungen erfüllt werden.

## Instanz-Eigenschaften

- [`ViewTransition.finished`](/de/docs/Web/API/ViewTransition/finished) {{ReadOnlyInline}}
  - : Ein {{jsxref("Promise")}}, das erfüllt wird, sobald die Übergangsanimation abgeschlossen ist und die neue Seitenansicht für den Benutzer sichtbar und interaktiv ist.
- [`ViewTransition.ready`](/de/docs/Web/API/ViewTransition/ready) {{ReadOnlyInline}}
  - : Ein {{jsxref("Promise")}}, das erfüllt wird, sobald der Pseudo-Element-Baum erstellt ist und die Übergangsanimation kurz vor dem Start steht.
- [`ViewTransition.types`](/de/docs/Web/API/ViewTransition/types) {{ReadOnlyInline}}
  - : Ein [`ViewTransitionTypeSet`](/de/docs/Web/API/ViewTransitionTypeSet), das Zugriff und Modifikation der auf den View-Übergang gesetzten Typen ermöglicht.
- [`ViewTransition.updateCallbackDone`](/de/docs/Web/API/ViewTransition/updateCallbackDone) {{ReadOnlyInline}}
  - : Ein {{jsxref("Promise")}}, das erfüllt wird, wenn das Promise, das von dem [`document.startViewTransition()`](/de/docs/Web/API/Document/startViewTransition)-Methoden-Callback zurückgegeben wird, erfüllt wird.

## Instanz-Methoden

- [`skipTransition()`](/de/docs/Web/API/ViewTransition/skipTransition)
  - : Überspringt den Animationsteil des View-Übergangs, ohne das Ausführen des [`document.startViewTransition()`](/de/docs/Web/API/Document/startViewTransition)-Callbacks zu überspringen, das das DOM aktualisiert.

## Beispiele

Im folgenden SPA-Beispiel wird das [`ViewTransition.ready`](/de/docs/Web/API/ViewTransition/ready)-Promise verwendet, um einen benutzerdefinierten kreisförmigen Offenbarungs-View-Übergang ausgehend von der Position des Benutzer-Cursors bei Klick auszulösen, mit Animation bereitgestellt durch die [Web Animations API](/de/docs/Web/API/Web_Animations_API).

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

Diese Animation erfordert auch das folgende CSS, um die standardmäßige CSS-Animation auszuschalten und zu verhindern, dass die alten und neuen Zustände der Ansicht auf irgendeine Weise vermischt werden (der neue Zustand "wischt" direkt über den alten Zustand, anstatt überzuleiten):

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
- [Verwendung von View-Übergangstypen](/de/docs/Web/API/View_Transition_API/Using_types)
- [Sanfte Übergänge mit der View Transition API](https://developer.chrome.com/docs/web-platform/view-transitions/)
