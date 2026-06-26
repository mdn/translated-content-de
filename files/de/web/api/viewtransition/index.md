---
title: ViewTransition
slug: Web/API/ViewTransition
l10n:
  sourceCommit: 361dd9caf4ac5db8a73cc33e4d8ee43fa2e35fcc
---

{{APIRef("View Transition API")}}

Das **`ViewTransition`**-Interface der [View Transition API](/de/docs/Web/API/View_Transition_API) repräsentiert eine aktive Ansichtstransition und bietet Funktionalitäten, um auf verschiedene Zustände der Transition zu reagieren (z. B. bereit für das Ausführen der Animation oder Animation abgeschlossen) oder die Transition vollständig zu überspringen.

Dieser Objekttyp ist auf folgende Weise verfügbar:

- Über die [`Document.activeViewTransition`](/de/docs/Web/API/Document/activeViewTransition)-Eigenschaft. Diese bietet eine konsistente Möglichkeit, in jedem Kontext auf die aktive Ansichtstransition zuzugreifen, ohne sich Gedanken darüber machen zu müssen, sie für einen späteren einfachen Zugriff zu speichern.
- Im Fall von Transitionen im selben Dokument (SPA) wird sie auch von der [`document.startViewTransition()`](/de/docs/Web/API/Document/startViewTransition)-Methode zurückgegeben.
- Im Fall von dokumentübergreifenden (MPA) Transitionen wird sie auch verfügbar gemacht:
  - Auf der ausgehenden Seite über die [`pageswap`](/de/docs/Web/API/Window/pageswap_event)-Ereignisobjekteigenschaft [`PageSwapEvent.viewTransition`](/de/docs/Web/API/PageSwapEvent/viewTransition).
  - Auf der eingehenden Seite über die [`pagereveal`](/de/docs/Web/API/Window/pagereveal_event)-Ereignisobjekteigenschaft [`PageRevealEvent.viewTransition`](/de/docs/Web/API/PageRevealEvent/viewTransition).

Wenn eine Ansichtstransition durch einen `startViewTransition()`-Aufruf ausgelöst wird (oder durch eine Seitennavigation im Falle von MPA-Transitionen), wird eine Abfolge von Schritten befolgt, wie in [Der Ansichtstransitionsprozess](/de/docs/Web/API/View_Transition_API/Using#the_view_transition_process) erklärt. Dies erklärt auch, wann die verschiedenen Versprechen erfüllt werden.

## Instanz-Eigenschaften

- [`ViewTransition.finished`](/de/docs/Web/API/ViewTransition/finished) {{ReadOnlyInline}}
  - : Ein {{jsxref("Promise")}}, das sich erfüllt, sobald die Transitionsanimation beendet ist und die neue Seitenansicht sichtbar und für den Benutzer interaktiv ist.
- [`ViewTransition.ready`](/de/docs/Web/API/ViewTransition/ready) {{ReadOnlyInline}}
  - : Ein {{jsxref("Promise")}}, das sich erfüllt, sobald der Pseudoelement-Baum erstellt ist und die Transitionsanimation starten soll.
- [`ViewTransition.transitionRoot`](/de/docs/Web/API/ViewTransition/transitionRoot) {{ReadOnlyInline}} {{experimental_inline}}
  - : Ein Verweis auf das Wurzel-[`Element`](/de/docs/Web/API/Element) des Ansichtstransitionsbereichs.
- [`ViewTransition.types`](/de/docs/Web/API/ViewTransition/types) {{ReadOnlyInline}}
  - : Ein [`ViewTransitionTypeSet`](/de/docs/Web/API/ViewTransitionTypeSet), das den Zugriff und die Modifikation der auf der Ansichtstransition gesetzten Typen ermöglicht.
- [`ViewTransition.updateCallbackDone`](/de/docs/Web/API/ViewTransition/updateCallbackDone) {{ReadOnlyInline}}
  - : Ein {{jsxref("Promise")}}, das sich erfüllt, wenn das Versprechen, das vom Callback der [`document.startViewTransition()`](/de/docs/Web/API/Document/startViewTransition)-Methode zurückgegeben wurde, erfüllt ist.

## Instanz-Methoden

- [`skipTransition()`](/de/docs/Web/API/ViewTransition/skipTransition)
  - : Überspringt den Animationsteil der Ansichtstransition, überspringt jedoch nicht die Ausführung des [`document.startViewTransition()`](/de/docs/Web/API/Document/startViewTransition)-Callbacks, das das DOM aktualisiert.
- [`waitUntil()`](/de/docs/Web/API/ViewTransition/waitUntil) {{experimental_inline}}
  - : Verzögert das Abschließen der Ansichtstransition und die Zerstörung des zugehörigen Pseudoelement-Baums, bis ein {{jsxref("Promise")}}, das in die Methode übergeben wurde, aufgelöst wurde.

## Beispiele

Im folgenden SPA-Beispiel wird das [`ViewTransition.ready`](/de/docs/Web/API/ViewTransition/ready)-Promise verwendet, um eine benutzerdefinierte kreisförmige Enthüllungsansichtstransition auszulösen, die vom Klick-Standort des Cursors des Benutzers ausgeht, mit einer Animation, die von der [Web Animations API](/de/docs/Web/API/Web_Animations_API) bereitgestellt wird.

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

Diese Animation erfordert auch das folgende CSS, um die standardmäßige CSS-Animation auszuschalten und zu verhindern, dass die alten und neuen Ansichtsstatus auf irgendeine Weise ineinander übergehen (der neue Zustand "wischt" direkt über den alten Zustand, anstatt überzugehen):

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
- [Sanfte Übergänge mit der View Transition API](https://developer.chrome.com/docs/web-platform/view-transitions/)
