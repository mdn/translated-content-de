---
title: ViewTransition
slug: Web/API/ViewTransition
l10n:
  sourceCommit: 6deab4bdc0b2563d1e32047c4f5b25c3a8f02850
---

{{APIRef("View Transitions API")}}

Das **`ViewTransition`**-Interface der {{domxref("View Transitions API", "View Transitions API", "", "nocode")}} repräsentiert eine aktive Ansichtstransition und bietet Funktionalität, um auf verschiedene Zustände der Transition zu reagieren (z.B. bereit zur Ausführung der Animation oder abgeschlossene Animation) oder die Transition vollständig zu überspringen.

Dieser Objekttyp ist auf folgende Weise verfügbar:

- Bei gleichbleibenden Dokumentübergängen (SPA-Übergänge) wird es von der Methode {{domxref("Document.startViewTransition()", "document.startViewTransition()")}} zurückgegeben.
- Bei dokumentübergreifenden Übergängen (MPA-Übergänge) ist es verfügbar:
  - Auf der ausgehenden Seite über die {{domxref("Window.pageswap_event", "pageswap")}}-Ereignisobjekteigenschaft {{domxref("PageSwapEvent.viewTransition")}}.
  - Auf der eingehenden Seite über die {{domxref("Window.pagereveal_event", "pagereveal")}}-Ereignisobjekteigenschaft {{domxref("PageRevealEvent.viewTransition")}}.

Wenn eine Ansichtstransition durch einen `startViewTransition()`-Aufruf ausgelöst wird (oder bei einer Seitennavigation im Fall von MPA-Übergängen), wird eine Abfolge von Schritten befolgt, wie im [Der Ansichtsübergangsprozess](/de/docs/Web/API/View_Transitions_API/Using#the_view_transition_process) erläutert. Dies erklärt auch, wann die verschiedenen Versprechen erfüllt werden.

## Instanz-Eigenschaften

- {{domxref("ViewTransition.finished")}} {{ReadOnlyInline}}
  - : Ein {{jsxref("Promise")}}, das erfüllt wird, sobald die Übergangsanimation abgeschlossen ist und die neue Seitenansicht für den Benutzer sichtbar und interaktiv ist.
- {{domxref("ViewTransition.ready")}} {{ReadOnlyInline}}
  - : Ein {{jsxref("Promise")}}, das erfüllt wird, sobald der Pseudoelementbaum erstellt wurde und die Übergangsanimation beginnen soll.
- {{domxref("ViewTransition.updateCallbackDone")}} {{ReadOnlyInline}}
  - : Ein {{jsxref("Promise")}}, das erfüllt wird, wenn das von der Rückruffunktion der Methode {{domxref("Document.startViewTransition()", "document.startViewTransition()")}} zurückgegebene Versprechen erfüllt wird.

## Instanz-Methoden

- {{domxref("ViewTransition.skipTransition", "skipTransition()")}}
  - : Überspringt den Animationsteil der Ansichtstransition, überspringt jedoch nicht das Ausführen des Rückrufs von {{domxref("Document.startViewTransition()", "document.startViewTransition()")}}, der das DOM aktualisiert.

## Beispiele

Im folgenden SPA-Beispiel wird das {{domxref("ViewTransition.ready")}}-Versprechen verwendet, um eine benutzerdefinierte kreisförmige Ansichtstransition auszulösen, die von der Position des Cursors des Benutzers beim Klicken ausgeht, wobei die Animation von der {{domxref("Web Animations API", "Web Animations API", "", "nocode")}} bereitgestellt wird.

```js
// Speichert das letzte Klickereignis
let lastClick;
addEventListener("click", (event) => (lastClick = event));

function spaNavigate(data) {
  // Fallback für Browser, die diese API nicht unterstützen:
  if (!document.startViewTransition) {
    updateTheDOMSomehow(data);
    return;
  }

  // Holen Sie sich die Klickposition oder greifen Sie auf die Mitte des Bildschirms zurück
  const x = lastClick?.clientX ?? innerWidth / 2;
  const y = lastClick?.clientY ?? innerHeight / 2;
  // Berechnen Sie die Entfernung zur entferntesten Ecke
  const endRadius = Math.hypot(
    Math.max(x, innerWidth - x),
    Math.max(y, innerHeight - y),
  );

  // Erstellen Sie eine Transition:
  const transition = document.startViewTransition(() => {
    updateTheDOMSomehow(data);
  });

  // Warten Sie darauf, dass die Pseudoelemente erstellt werden:
  transition.ready.then(() => {
    // Animieren Sie die neue Ansicht des Wurzels
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
        // Geben Sie an, welches Pseudoelement animiert werden soll
        pseudoElement: "::view-transition-new(root)",
      },
    );
  });
}
```

Diese Animation erfordert auch das folgende CSS, um die Standard-CSS-Animation auszuschalten und zu verhindern, dass die alten und neuen Ansichtsstände auf irgendeine Weise überblendet werden (der neue Zustand „wischt“ direkt über den alten Zustand, anstatt ihn zu überblenden):

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
