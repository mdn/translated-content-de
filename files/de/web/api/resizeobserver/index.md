---
title: ResizeObserver
slug: Web/API/ResizeObserver
l10n:
  sourceCommit: 802b6063046dffb7634d2138aadcd92cb22ed40c
---

{{APIRef("Resize Observer API")}}

Die **`ResizeObserver`** Schnittstelle meldet Änderungen an den Abmessungen eines [`Element`](/de/docs/Web/API/Element)'s Inhalts- oder Rahmenbox oder des Begrenzungsrahmens eines [`SVGElement`](/de/docs/Web/API/SVGElement).

> [!NOTE]
> Die Inhaltsbox ist der Bereich, in dem Inhalte platziert werden können, das heißt, die Rahmenbox abzüglich der Innenabstand- und Rahmenbreite. Die Rahmenbox umfasst den Inhalt, den Innenabstand und den Rahmen. Weitere Erklärungen finden Sie im [Boxmodell](/de/docs/Learn/CSS/Building_blocks/The_box_model).

## Konstruktor

- [`ResizeObserver()`](/de/docs/Web/API/ResizeObserver/ResizeObserver)
  - : Erstellt und gibt ein neues `ResizeObserver`-Objekt zurück.

## Instanz-Eigenschaften

Keine.

## Instanz-Methoden

- [`ResizeObserver.disconnect()`](/de/docs/Web/API/ResizeObserver/disconnect)
  - : Beendet die Beobachtung aller beobachteten [`Element`](/de/docs/Web/API/Element) Ziele eines bestimmten Beobachters.
- [`ResizeObserver.observe()`](/de/docs/Web/API/ResizeObserver/observe)
  - : Initiiert die Beobachtung eines angegebenen [`Element`](/de/docs/Web/API/Element).
- [`ResizeObserver.unobserve()`](/de/docs/Web/API/ResizeObserver/unobserve)
  - : Beendet die Beobachtung eines angegebenen [`Element`](/de/docs/Web/API/Element).

## Beispiele

Im Beispiel [resize-observer-text.html](https://mdn.github.io/dom-examples/resize-observer/resize-observer-text.html) ([Quelltext ansehen](https://github.com/mdn/dom-examples/blob/main/resize-observer/resize-observer-text.html)) verwenden wir den Resize Observer, um die {{cssxref("font-size")}} einer Überschrift und eines Absatzes zu ändern, wenn der Wert eines Sliders geändert wird und dadurch das enthaltende `<div>` seine Breite ändert. Dies zeigt, dass Sie auf Änderungen der Größe eines Elements reagieren können, selbst wenn diese nichts mit dem Ansichtsfenster zu tun haben.

Wir bieten auch ein Kontrollkästchen an, um den Beobachter ein- und auszuschalten. Wenn er ausgeschaltet ist, ändert sich der Text nicht, wenn sich die Breite des `<div>` ändert.

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

Implementierungen, die der Spezifikation folgen, rufen Resize-Ereignisse vor dem Rendern auf (das heißt, bevor der Frame dem Benutzer präsentiert wird). Wenn ein Resize-Ereignis auftrat, werden Stil und Layout neu bewertet, was wiederum weitere Resize-Ereignisse auslösen kann. Unendliche Schleifen durch zyklische Abhängigkeiten werden dadurch gelöst, dass bei jeder Iteration nur Elemente tiefer im DOM verarbeitet werden. Resize-Ereignisse, die diese Bedingung nicht erfüllen, werden auf den nächsten Render-Vorgang verschoben, und ein Fehlerereignis wird beim [`Window`](/de/docs/Web/API/Window) Objekt mit der festgelegten Nachrichtenzeichenfolge ausgelöst:

**ResizeObserver loop completed with undelivered notifications.**

Beachten Sie, dass dies nur ein Einfrieren des Benutzer-Agents verhindert, nicht die unendliche Schleife selbst. Zum Beispiel wird der folgende Code dazu führen, dass die Breite von `divElem` unbegrenzt wächst, wobei die obige Fehlermeldung in der Konsole jede Frame wiederholt wird:

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

Solange das Fehlerereignis nicht unendlich oft ausgelöst wird, wird sich der Resize Observer beruhigen und ein stabiles, wahrscheinlich korrektes Layout liefern. Besucher könnten jedoch ein kurzes Aufblitzen eines fehlerhaften Layouts sehen, da eine Reihe von Änderungen, die in einem einzigen Frame auftreten sollten, stattdessen über mehrere Frames verteilt werden.

Wenn Sie diese Fehler vermeiden möchten, hängt die Lösung davon ab, welchen Effekt Sie beabsichtigen. Wenn Sie tatsächlich eine unendliche Schleife beabsichtigen, müssen Sie nur den Resizing-Code in Ihrem `ResizeObserver`-Callback auf danach verschieben, wenn der Browser neu gezeichnet hat. Sie können ihn in einen [`requestAnimationFrame`](/de/docs/Web/API/Window/requestAnimationFrame) Callback einfügen.

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

Wenn Sie nicht beabsichtigen, eine unendliche Schleife zu haben, sollten Sie sicherstellen, dass Ihr Resize-Code nicht den Resize Observer Callback auslöst. Es gibt viele Möglichkeiten, dies zu tun, zum Beispiel, indem Sie eine "erwartete Größe" festlegen und keine Größenänderung durchführen, wenn die Größe bereits diesen Wert hat.

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

- [Das Boxmodel](/de/docs/Learn/CSS/Building_blocks/The_box_model)
- [`PerformanceObserver`](/de/docs/Web/API/PerformanceObserver)
- [`IntersectionObserver`](/de/docs/Web/API/IntersectionObserver) (Teil der [Intersection Observer API](/de/docs/Web/API/Intersection_Observer_API))
- Zukünftige [Container-Abfragen](/de/docs/Web/CSS/CSS_containment/Container_queries) könnten eine praktikable Alternative zur Umsetzung von Responsive Design sein.
