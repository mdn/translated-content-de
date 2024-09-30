---
title: ResizeObserver
slug: Web/API/ResizeObserver
l10n:
  sourceCommit: 802b6063046dffb7634d2138aadcd92cb22ed40c
---

{{APIRef("Resize Observer API")}}

Die **`ResizeObserver`**-Schnittstelle meldet Änderungen an den Abmessungen des Inhalts- oder Randrahmens eines [`Element`](/de/docs/Web/API/Element) oder des Begrenzungsrahmens eines [`SVGElement`](/de/docs/Web/API/SVGElement).

> [!NOTE]
> Der Inhaltsrahmen ist der Bereich, in dem Inhalte platziert werden können, was bedeutet, dass der Randrahmen minus der Polsterung und Randbreite. Der Randrahmen umfasst den Inhalt, die Polsterung und den Rand. Weitere Erklärungen finden Sie im [Box-Modell](/de/docs/Learn/CSS/Building_blocks/The_box_model).

## Konstruktor

- [`ResizeObserver()`](/de/docs/Web/API/ResizeObserver/ResizeObserver)
  - : Erstellt und gibt ein neues `ResizeObserver`-Objekt zurück.

## Instanz-Eigenschaften

Keine.

## Instanz-Methoden

- [`ResizeObserver.disconnect()`](/de/docs/Web/API/ResizeObserver/disconnect)
  - : Überwacht alle beobachteten [`Element`](/de/docs/Web/API/Element)-Ziele eines bestimmten Beobachters nicht mehr.
- [`ResizeObserver.observe()`](/de/docs/Web/API/ResizeObserver/observe)
  - : Startet die Beobachtung eines angegebenen [`Element`](/de/docs/Web/API/Element).
- [`ResizeObserver.unobserve()`](/de/docs/Web/API/ResizeObserver/unobserve)
  - : Beendet die Beobachtung eines angegebenen [`Element`](/de/docs/Web/API/Element).

## Beispiele

Im Beispiel [resize-observer-text.html](https://mdn.github.io/dom-examples/resize-observer/resize-observer-text.html) ([siehe Quelle](https://github.com/mdn/dom-examples/blob/main/resize-observer/resize-observer-text.html)) verwenden wir den Resize-Observer, um die {{cssxref("font-size")}} eines Headers und eines Absatzes zu ändern, wenn der Wert eines Schiebereglers geändert wird und dadurch die Breite des enthaltenen `<div>` geändert wird. Dies zeigt, dass Sie auf Änderungen in der Größe eines Elements reagieren können, selbst wenn sie nichts mit dem Ansichtsfenster zu tun haben.

Wir bieten auch ein Kontrollkästchen an, um den Beobachter ein- und auszuschalten. Wenn es ausgeschaltet ist, ändert sich der Text nicht als Reaktion auf die Änderung der Breite des `<div>`.

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

Implementierungen, die der Spezifikation folgen, rufen Resize-Ereignisse vor dem Rendern auf (d.h. bevor der Frame dem Benutzer angezeigt wird). Wenn es ein Resize-Ereignis gab, werden Stil und Layout neu bewertet — was wiederum mehr Resize-Ereignisse auslösen kann. Endlosschleifen aufgrund von zyklischen Abhängigkeiten werden adressiert, indem bei jeder Iteration nur Elemente tiefer im DOM verarbeitet werden. Resize-Ereignisse, die diese Bedingung nicht erfüllen, werden auf das nächste Rendern verschoben, und ein Fehlerereignis wird am [`Window`](/de/docs/Web/API/Window)-Objekt ausgelöst, mit dem klar definierten Nachrichtenstring:

**ResizeObserver loop completed with undelivered notifications.**

Beachten Sie, dass dies nur das Blockieren des Benutzeragenten verhindert, nicht die Endlosschleife selbst. Zum Beispiel wird der folgende Code dazu führen, dass die Breite von `divElem` unendlich wächst, mit der obigen Fehlermeldung, die im Konsolenfenster bei jedem Frame wiederholt wird:

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

Solange das Fehlerereignis nicht unendlich oft ausgelöst wird, wird der Resize-Observer sich beruhigen und ein stabiles, wahrscheinlich korrektes Layout erzeugen. Besucher könnten jedoch einen kurzen Moment eines fehlerhaften Layouts sehen, da eine Folge von Änderungen, die in einem einzigen Frame erwartet werden, stattdessen über mehrere Frames erfolgt.

Wenn Sie diese Fehler verhindern möchten, hängt die Lösung davon ab, was Ihr beabsichtigter Effekt ist. Wenn Sie tatsächlich eine Endlosschleife beabsichtigen, müssen Sie nur den Resize-Code in Ihrem `ResizeObserver`-Callback nach dem Neuzeichnen des Browsers aufschieben. Sie können es in einen [`requestAnimationFrame`](/de/docs/Web/API/Window/requestAnimationFrame)-Callback einfügen.

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

Wenn Sie keine Endlosschleife beabsichtigen, sollten Sie sicherstellen, dass Ihr Resize-Code das `ResizeObserver`-Callback nicht auslöst. Es gibt viele Möglichkeiten, dies zu tun, z. B. indem Sie eine "erwartete Größe" festlegen und nicht ändern, wenn die Größe bereits diesen Wert hat.

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

- [Das Box-Modell](/de/docs/Learn/CSS/Building_blocks/The_box_model)
- [`PerformanceObserver`](/de/docs/Web/API/PerformanceObserver)
- [`IntersectionObserver`](/de/docs/Web/API/IntersectionObserver) (Teil der [Intersection Observer API](/de/docs/Web/API/Intersection_Observer_API))
- Zukünftige [Container-Abfragen](/de/docs/Web/CSS/CSS_containment/Container_queries) könnten eine praktikable Alternative zur Implementierung von responsive Design sein.
