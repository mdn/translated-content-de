---
title: "ViewTransition: ready-Eigenschaft"
short-title: ready
slug: Web/API/ViewTransition/ready
l10n:
  sourceCommit: 6deab4bdc0b2563d1e32047c4f5b25c3a8f02850
---

{{APIRef("View Transitions API")}}

Die schreibgeschützte Eigenschaft **`ready`** des {{domxref("ViewTransition")}}-Interfaces ist ein {{jsxref("Promise")}}, das erfüllt wird, sobald der Pseudoelement-Baum erstellt ist und die Übergangsanimation unmittelbar bevorsteht.

`ready` wird abgelehnt, wenn der Übergang nicht beginnen kann. Dies kann durch eine Fehlkonfiguration verursacht werden, zum Beispiel durch doppelte {{cssxref("view-transition-name")}}s, oder wenn der Callback, der an {{domxref("Document.startViewTransition()")}} übergeben wird, eine Ausnahme wirft oder ein Promise zurückgibt, das abgelehnt wird.

## Wert

Ein Promise.

## Beispiele

Im folgenden Beispiel wird `ready` verwendet, um einen benutzerdefinierten, kreisförmigen Enthüllungsübergang aus der Position des Benutzer-Cursors bei einem Klick auszulösen, wobei die Animation durch die {{domxref("Web Animations API", "Web Animations API", "", "nocode")}} bereitgestellt wird.

```js
// Letztes Klickevent speichern
let lastClick;
addEventListener("click", (event) => (lastClick = event));

function spaNavigate(data) {
  // Fallback für Browser, die diese API nicht unterstützen:
  if (!document.startViewTransition) {
    updateTheDOMSomehow(data);
    return;
  }

  // Klickposition erhalten oder auf Bildschirmmitte zurückfallen
  const x = lastClick?.clientX ?? innerWidth / 2;
  const y = lastClick?.clientY ?? innerHeight / 2;
  // Entfernung zur entferntesten Ecke ermitteln
  const endRadius = Math.hypot(
    Math.max(x, innerWidth - x),
    Math.max(y, innerHeight - y),
  );

  // Einen Übergang erstellen:
  const transition = document.startViewTransition(() => {
    updateTheDOMSomehow(data);
  });

  // Auf die Erstellung der Pseudoelemente warten:
  transition.ready.then(() => {
    // Das neue Ansicht des Wurzelelements animieren
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
        // Angeben, welches Pseudoelement animiert werden soll
        pseudoElement: "::view-transition-new(root)",
      },
    );
  });
}
```

Diese Animation erfordert auch das folgende CSS, um die standardmäßige CSS-Animation auszuschalten und zu verhindern, dass der alte und der neue Ansichtsstatus irgendwie vermischt werden (der neue Status "überlagert" den alten Status direkt, anstatt ihn zu überblenden):

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
