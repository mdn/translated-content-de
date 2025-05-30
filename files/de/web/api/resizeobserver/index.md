---
title: ResizeObserver
slug: Web/API/ResizeObserver
l10n:
  sourceCommit: 6d2000984203c51f1aad49107ebcebe14d3c1238
---

{{APIRef("Resize Observer API")}}

Das **`ResizeObserver`** Interface meldet Änderungen an den Abmessungen des Inhalts- oder Rahmenkastens eines [`Elements`](/de/docs/Web/API/Element) oder des Begrenzungsrahmens eines [`SVGElement`](/de/docs/Web/API/SVGElement).

> [!NOTE]
> Der Inhaltskasten ist der Bereich, in dem Inhalt platziert werden kann, also der Rahmenkasten minus Polsterung und Rahmenbreite. Der Rahmenkasten umfasst den Inhalt, die Polsterung und den Rahmen. Weitere Erklärungen finden Sie im [Boxmodell](/de/docs/Learn_web_development/Core/Styling_basics/Box_model).

## Konstruktor

- [`ResizeObserver()`](/de/docs/Web/API/ResizeObserver/ResizeObserver)
  - : Erstellt und gibt ein neues `ResizeObserver`-Objekt zurück.

## Instanz-Eigenschaften

Keine.

## Instanz-Methoden

- [`ResizeObserver.disconnect()`](/de/docs/Web/API/ResizeObserver/disconnect)
  - : Beendet die Beobachtung aller beobachteten [`Element`](/de/docs/Web/API/Element)-Ziele eines bestimmten Beobachters.
- [`ResizeObserver.observe()`](/de/docs/Web/API/ResizeObserver/observe)
  - : Startet die Beobachtung eines angegebenen [`Elements`](/de/docs/Web/API/Element).
- [`ResizeObserver.unobserve()`](/de/docs/Web/API/ResizeObserver/unobserve)
  - : Beendet die Beobachtung eines angegebenen [`Elements`](/de/docs/Web/API/Element).

## Beispiele

Im [resize-observer-text.html](https://mdn.github.io/dom-examples/resize-observer/resize-observer-text.html) ([Quellcode ansehen](https://github.com/mdn/dom-examples/blob/main/resize-observer/resize-observer-text.html)) Beispiel verwenden wir den Resize Observer, um die {{cssxref("font-size")}} einer Überschrift und eines Absatzes zu ändern, während sich der Wert eines Sliders ändert, was dazu führt, dass sich die Breite des beinhaltenden `<div>` ändert. Dies zeigt, dass Sie auf Größenänderungen eines Elements reagieren können, selbst wenn diese nichts mit der Ansicht zu tun haben.

Wir bieten auch ein Kontrollkästchen, um den Beobachter ein- und auszuschalten. Wenn es ausgeschaltet ist, ändert sich der Text nicht als Reaktion auf die sich ändernde Breite des `<div>`.

Das JavaScript sieht folgendermaßen aus:

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

Implementierungen, die der Spezifikation folgen, lösen Resize-Events vor dem Rendern aus (das heißt, bevor der Frame dem Benutzer präsentiert wird). Wenn ein Resize-Event aufgetreten ist, werden Stil und Layout neu ausgewertet, was wiederum weitere Resize-Events auslösen kann. Unendliche Schleifen aus zyklischen Abhängigkeiten werden dadurch angesprochen, dass bei jeder Iteration nur Elemente tiefer im DOM verarbeitet werden. Resize-Events, die diese Bedingung nicht erfüllen, werden auf das nächste Rendern verschoben und ein Fehlerereignis wird auf dem [`Window`](/de/docs/Web/API/Window)-Objekt ausgelöst, mit der wohl definierten Nachrichtenzeichenkette:

**ResizeObserver loop completed with undelivered notifications.**

Beachten Sie, dass dies nur den Benutzer-Agent-Ausfall verhindert, nicht die Endlosschleife selbst. Zum Beispiel führt der folgende Code dazu, dass die Breite von `divElem` unendlich wächst, wobei die obige Fehlermeldung in der Konsole jede Frame-Wiederholung zeigt:

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

Solange das Fehlerereignis nicht unendlich oft ausgelöst wird, wird sich der Resize Observer stabilisieren und ein stabiles, wahrscheinlich korrektes Layout erzeugen. Besucher könnten jedoch einen flüchtigen fehlerhaften Layout sehen, da eine Sequenz erwarteter Änderungen, die in einem einzigen Frame passieren soll, stattdessen über mehrere Frames passiert.

Wenn Sie diese Fehler vermeiden wollen, hängt die Lösung davon ab, was Ihr beabsichtigter Effekt ist. Wenn Sie tatsächlich eine Endlosschleife wünschen, müssen Sie einfach den Verkleinerungs-Code in Ihrer `ResizeObserver`-Rückruffunktion aufschieben, bis nachdem der Browser neu rendert. Sie können ihn in einen [`requestAnimationFrame`](/de/docs/Web/API/Window/requestAnimationFrame) Rückruf einfügen.

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

Wenn Sie keine Endlosschleife beabsichtigen, sollten Sie sicherstellen, dass Ihr Größeänderungscode nicht die Resize Observer-Rückruffunktion auslöst. Es gibt viele Möglichkeiten, dies zu tun, zum Beispiel durch das Setzen einer "erwarteten Größe" und die Vermeidung der Größenänderung, wenn die Größe bereits diesen Wert hat.

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

- [Lernen: Das Boxmodell](/de/docs/Learn_web_development/Core/Styling_basics/Box_model)
- [`PerformanceObserver`](/de/docs/Web/API/PerformanceObserver)
- [`IntersectionObserver`](/de/docs/Web/API/IntersectionObserver) (Teil der [Intersection Observer API](/de/docs/Web/API/Intersection_Observer_API))
- Zukünftige [Container-Abfragen](/de/docs/Web/CSS/CSS_containment/Container_queries) könnten eine praktikable Alternative zur Implementierung eines responsiven Designs sein.
