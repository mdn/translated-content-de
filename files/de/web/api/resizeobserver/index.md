---
title: ResizeObserver
slug: Web/API/ResizeObserver
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

{{APIRef("Resize Observer API")}}

Das **`ResizeObserver`**-Interface meldet Änderungen an den Dimensionen des Inhalts- oder Rahmenbereichs eines [`Element`](/de/docs/Web/API/Element) oder des Umrandungsrechtecks eines [`SVGElement`](/de/docs/Web/API/SVGElement).

> [!NOTE]
> Der Inhaltsbereich ist der Bereich, in dem Inhalt platziert werden kann, das bedeutet der Rahmenbereich abzüglich der Polsterung und Rahmenbreite. Der Rahmenbereich umfasst den Inhalt, die Polsterung und den Rahmen. Siehe [Das Box-Modell](/de/docs/Learn_web_development/Core/Styling_basics/Box_model) für weitere Erläuterungen.

## Konstruktor

- [`ResizeObserver()`](/de/docs/Web/API/ResizeObserver/ResizeObserver)
  - : Erstellt und gibt ein neues `ResizeObserver`-Objekt zurück.

## Instanzeigenschaften

Keine.

## Instanzmethoden

- [`ResizeObserver.disconnect()`](/de/docs/Web/API/ResizeObserver/disconnect)
  - : Beendet die Beobachtung aller beobachteten [`Element`](/de/docs/Web/API/Element)-Ziele eines bestimmten Observers.
- [`ResizeObserver.observe()`](/de/docs/Web/API/ResizeObserver/observe)
  - : Initiiert die Beobachtung eines bestimmten [`Element`](/de/docs/Web/API/Element).
- [`ResizeObserver.unobserve()`](/de/docs/Web/API/ResizeObserver/unobserve)
  - : Beendet die Beobachtung eines bestimmten [`Element`](/de/docs/Web/API/Element).

## Beispiele

Im Beispiel [resize-observer-text.html](https://mdn.github.io/dom-examples/resize-observer/resize-observer-text.html) ([siehe Quelle](https://github.com/mdn/dom-examples/blob/main/resize-observer/resize-observer-text.html)) verwenden wir den Resize-Observer, um die {{cssxref("font-size")}} einer Überschrift und eines Absatzes zu ändern, während sich der Wert eines Schiebereglers ändert, wodurch sich die Breite des enthaltenden `<div>` ändert. Dies zeigt, dass Sie auf Änderungen der Größe eines Elements reagieren können, selbst wenn sie nichts mit dem Ansichtsfenster zu tun haben.

Wir stellen auch ein Kontrollkästchen bereit, um den Observer ein- und auszuschalten. Wenn er ausgeschaltet ist, ändert sich der Text nicht, wenn sich die Breite des `<div>` ändert.

Der JavaScript-Code sieht folgendermaßen aus:

```js
const h1Elem = document.querySelector("h1");
const pElem = document.querySelector("p");
const divElem = document.querySelector("body > div");
const slider = document.querySelector('input[type="range"]');
const checkbox = document.querySelector('input[type="checkbox"]');

divElem.style.width = "600px";

slider.addEventListener("input", () => {
  divElem.style.width = `${slider.value}px`;
});

const resizeObserver = new ResizeObserver((entries) => {
  for (const entry of entries) {
    if (entry.contentBoxSize) {
      const contentBoxSize = entry.contentBoxSize[0];
      h1Elem.style.fontSize = `${Math.max(
        1.5,
        contentBoxSize.inlineSize / 200,
      )}rem`;
      pElem.style.fontSize = `${Math.max(
        1,
        contentBoxSize.inlineSize / 600,
      )}rem`;
    } else {
      h1Elem.style.fontSize = `${Math.max(
        1.5,
        entry.contentRect.width / 200,
      )}rem`;
      pElem.style.fontSize = `${Math.max(1, entry.contentRect.width / 600)}rem`;
    }
  }

  console.log("Size changed");
});

resizeObserver.observe(divElem);

checkbox.addEventListener("change", () => {
  if (checkbox.checked) {
    resizeObserver.observe(divElem);
  } else {
    resizeObserver.unobserve(divElem);
  }
});
```

## Beobachtungsfehler

Implementierungen, die der Spezifikation folgen, rufen Resize-Ereignisse vor dem Malen auf (d.h. bevor der Frame dem Benutzer präsentiert wird). Wenn ein Resize-Ereignis vorlag, werden Stil und Layout neu ausgewertet – was wiederum weitere Resize-Ereignisse auslösen kann. Unendliche Schleifen aufgrund zyklischer Abhängigkeiten werden dadurch adressiert, dass während jeder Iteration nur Elemente tiefer im DOM verarbeitet werden. Resize-Ereignisse, die diese Bedingung nicht erfüllen, werden auf das nächste Malen verschoben, und ein Fehlerereignis wird im [`Window`](/de/docs/Web/API/Window)-Objekt ausgelöst, mit der genau definierten Nachrichtenzeichenfolge:

**ResizeObserver-Schleife abgeschlossen mit nicht gelieferten Benachrichtigungen.**

Beachten Sie, dass dies nur das Einfrieren des Benutzeragenten verhindert, nicht aber die unendliche Schleife selbst. Zum Beispiel wird der folgende Code dazu führen, dass die Breite von `divElem` unendlich wächst, wobei die obige Fehlermeldung in der Konsole jedes Frame wiederholt wird:

```js
const divElem = document.querySelector("body > div");

const resizeObserver = new ResizeObserver((entries) => {
  for (const entry of entries) {
    entry.target.style.width = `${entry.contentBoxSize[0].inlineSize + 10}px`;
  }
});

resizeObserver.observe(divElem);

window.addEventListener("error", (e) => {
  console.error(e.message);
});
```

Solange das Fehlerereignis nicht unendlich oft auftritt, wird sich der Resize-Observer stabilisieren und ein stabiles, wahrscheinlich korrektes Layout erzeugen. Besucher könnten jedoch einen kurzen Moment ein fehlerhaftes Layout sehen, da eine Reihe von Änderungen, die innerhalb eines einzelnen Frames erwartet werden, stattdessen über mehrere Frames stattfinden.

Wenn Sie diese Fehler verhindern möchten, hängt die Lösung von Ihrem beabsichtigten Effekt ab. Wenn Sie tatsächlich eine unendliche Schleife beabsichtigen, müssen Sie den Resizing-Code in Ihrem `ResizeObserver`-Callback einfach aufschieben, bis nach dem Browser-Redraw. Sie können ihn in einen [`requestAnimationFrame`](/de/docs/Web/API/Window/requestAnimationFrame)-Callback einfügen.

```js
const divElem = document.querySelector("body > div");

const resizeObserver = new ResizeObserver((entries) => {
  requestAnimationFrame(() => {
    for (const entry of entries) {
      entry.target.style.width = `${entry.contentBoxSize[0].inlineSize + 10}px`;
    }
  });
});

resizeObserver.observe(divElem);

window.addEventListener("error", (e) => {
  console.error(e.message);
});
```

Wenn Sie nicht die Absicht haben, eine unendliche Schleife zu haben, sollten Sie sicherstellen, dass Ihr Resizing-Code den Resize-Observer-Callback nicht auslöst. Es gibt viele Möglichkeiten, dies zu tun, zum Beispiel indem Sie eine "erwartete Größe" festlegen und nicht neu dimensionieren, wenn die Größe bereits diesen Wert hat.

```js
const divElem = document.querySelector("body > div");
const expectedSizes = new WeakMap();

const resizeObserver = new ResizeObserver((entries) => {
  requestAnimationFrame(() => {
    for (const entry of entries) {
      const expectedSize = expectedSizes.get(entry.target);
      if (entry.contentBoxSize[0].inlineSize === expectedSize) {
        continue;
      }
      const newSize = entry.contentBoxSize[0].inlineSize + 10;
      entry.target.style.width = `${newSize}px`;
      expectedSizes.set(entry.target, newSize);
    }
  });
});

resizeObserver.observe(divElem);

window.addEventListener("error", (e) => {
  console.error(e.message);
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Lernen: Das Box-Modell](/de/docs/Learn_web_development/Core/Styling_basics/Box_model)
- [`PerformanceObserver`](/de/docs/Web/API/PerformanceObserver)
- [`IntersectionObserver`](/de/docs/Web/API/IntersectionObserver) (Teil der [Intersection Observer API](/de/docs/Web/API/Intersection_Observer_API))
- Bevorstehende [Containerabfragen](/de/docs/Web/CSS/Guides/Containment/Container_queries) könnten eine brauchbare Alternative zur Implementierung eines responsiven Designs sein.
