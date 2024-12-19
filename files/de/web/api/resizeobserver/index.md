---
title: ResizeObserver
slug: Web/API/ResizeObserver
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{APIRef("Resize Observer API")}}

Das **`ResizeObserver`** Interface meldet Änderungen an den Abmessungen des Inhalts oder des Randrahmenkastens eines [`Element`](/de/docs/Web/API/Element) oder des Begrenzungsrahmens eines [`SVGElement`](/de/docs/Web/API/SVGElement).

> [!NOTE]
> Der Inhaltsrahmen ist der Kasten, in dem Inhalt platziert werden kann, das heißt, der Randrahmen minus der Polsterung und Randbreite. Der Randrahmen umfasst den Inhalt, die Polsterung und den Rand. Weitere Erklärungen finden Sie im [Box-Modell](/de/docs/Learn_web_development/Core/Styling_basics/Box_model).

## Konstruktor

- [`ResizeObserver()`](/de/docs/Web/API/ResizeObserver/ResizeObserver)
  - : Erstellt und gibt ein neues `ResizeObserver`-Objekt zurück.

## Instanz-Eigenschaften

Keine.

## Instanz-Methoden

- [`ResizeObserver.disconnect()`](/de/docs/Web/API/ResizeObserver/disconnect)
  - : Beobachtet alle beobachteten [`Element`](/de/docs/Web/API/Element)-Ziele eines bestimmten Beobachters nicht mehr.
- [`ResizeObserver.observe()`](/de/docs/Web/API/ResizeObserver/observe)
  - : Beginnt das Beobachten eines bestimmten [`Element`](/de/docs/Web/API/Element).
- [`ResizeObserver.unobserve()`](/de/docs/Web/API/ResizeObserver/unobserve)
  - : Beendet das Beobachten eines bestimmten [`Element`](/de/docs/Web/API/Element).

## Beispiele

Im Beispiel [resize-observer-text.html](https://mdn.github.io/dom-examples/resize-observer/resize-observer-text.html) ([siehe Quellcode](https://github.com/mdn/dom-examples/blob/main/resize-observer/resize-observer-text.html)) verwenden wir den Resize-Observer, um die {{cssxref("font-size")}} einer Überschrift und eines Absatzes zu ändern, wenn sich der Wert eines Schiebereglers ändert und dadurch die Breite des umschließenden `<div>`-Elements verändert wird. Dies zeigt, dass Sie auf Änderungen der Größe eines Elements reagieren können, selbst wenn sie nichts mit dem Ansichtsfenster zu tun haben.

Wir bieten auch ein Kontrollkästchen an, um den Beobachter ein- und auszuschalten. Wenn es ausgeschaltet ist, wird der Text nicht als Reaktion auf die Breitenänderung des `<div>`-Elements geändert.

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

Implementierungen, die der Spezifikation folgen, rufen Resize-Ereignisse vor dem Rendern auf (das heißt, bevor der Frame dem Benutzer präsentiert wird). Wenn es ein Resize-Ereignis gab, werden Stil und Layout neu bewertet – was wiederum weitere Resize-Ereignisse auslösen kann. Unendliche Schleifen durch zyklische Abhängigkeiten werden dadurch behoben, dass bei jeder Iteration nur Elemente weiter unten im DOM verarbeitet werden. Resize-Ereignisse, die diese Bedingung nicht erfüllen, werden auf das nächste Rendern verschoben, und ein Fehlerereignis wird auf dem [`Window`](/de/docs/Web/API/Window)-Objekt ausgelöst mit der gut definierten Nachrichtenzeichenfolge:

**ResizeObserver-Schleife wurde mit unzugestellten Benachrichtigungen abgeschlossen.**

Beachten Sie, dass dies nur die Blockierung des Benutzer-Agents verhindert, nicht die eigentliche Endlosschleife. Zum Beispiel wird der folgende Code dazu führen, dass die Breite von `divElem` unendlich wächst, wobei die obige Fehlermeldung in der Konsole bei jedem Frame wiederholt wird:

```js
const divElem = document.querySelector("body > div");

const resizeObserver = new ResizeObserver((entries) => {
  for (const entry of entries) {
    entry.target.style.width = entry.contentBoxSize[0].inlineSize + 10 + "px";
  }
});

resizeObserver.observe(divElem);

window.addEventListener("error", (e) => {
  console.error(e.message);
});
```

Solange das Fehlerereignis nicht unendlich oft ausgelöst wird, wird der Resize-Observer sich einpendeln und ein stabiles, wahrscheinlich korrektes Layout erzeugen. Besucher könnten jedoch einen kurzen Moment eines fehlerhaften Layouts sehen, da eine Folge von Änderungen, die in einem einzigen Frame erwartet werden, stattdessen über mehrere Frames hinweg passiert.

Wenn Sie diese Fehler vermeiden möchten, hängt die Lösung davon ab, was Ihr beabsichtigter Effekt ist. Wenn Sie tatsächlich eine Endlosschleife beabsichtigen, müssen Sie lediglich den Resize-Code in Ihrem `ResizeObserver`-Callback aufschieben, bis der Browser neu gezeichnet hat. Sie können ihn in einen [`requestAnimationFrame`](/de/docs/Web/API/Window/requestAnimationFrame)-Callback einfügen.

```js
const divElem = document.querySelector("body > div");

const resizeObserver = new ResizeObserver((entries) => {
  requestAnimationFrame(() => {
    for (const entry of entries) {
      entry.target.style.width = entry.contentBoxSize[0].inlineSize + 10 + "px";
    }
  });
});

resizeObserver.observe(divElem);

window.addEventListener("error", (e) => {
  console.error(e.message);
});
```

Wenn Sie keine Endlosschleife beabsichtigen, sollten Sie sicherstellen, dass Ihr Resize-Code das Resize-Observer-Callback nicht auslöst. Es gibt viele Möglichkeiten, dies zu tun, wie z.B. durch Festlegen einer "erwarteten Größe" und kein Resize vorzunehmen, wenn die Größe bereits diesen Wert hat.

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
- Zukünftige [Container-Abfragen](/de/docs/Web/CSS/CSS_containment/Container_queries) könnten eine passende Alternative für die Umsetzung von responsive Design sein.
