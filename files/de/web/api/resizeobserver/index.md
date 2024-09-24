---
title: ResizeObserver
slug: Web/API/ResizeObserver
l10n:
  sourceCommit: 802b6063046dffb7634d2138aadcd92cb22ed40c
---

{{APIRef("Resize Observer API")}}

Das **`ResizeObserver`**-Interface meldet Änderungen an den Abmessungen des Inhalts- oder Rahmenkastens eines {{domxref('Element')}}s oder des Begrenzungsrahmens eines {{domxref('SVGElement')}}s.

> [!NOTE]
> Der Inhaltskasten ist der Bereich, in dem Inhalte platziert werden können, also der Rahmenkasten abzüglich der Polsterung und der Rahmenbreite. Der Rahmenkasten umfasst den Inhalt, die Polsterung und den Rahmen. Weitere Erklärungen finden Sie im Artikel [Das Box-Modell](/de/docs/Learn/CSS/Building_blocks/The_box_model).

## Konstruktor

- {{domxref("ResizeObserver.ResizeObserver", "ResizeObserver()")}}
  - : Erstellt und gibt ein neues `ResizeObserver`-Objekt zurück.

## Instanz-Eigenschaften

Keine.

## Instanz-Methoden

- {{domxref('ResizeObserver.disconnect()')}}
  - : Beendet die Beobachtung aller beobachteten {{domxref('Element')}}-Ziele eines bestimmten Beobachters.
- {{domxref('ResizeObserver.observe()')}}
  - : Beginnt mit der Beobachtung eines angegebenen {{domxref('Element')}}s.
- {{domxref('ResizeObserver.unobserve()')}}
  - : Beendet die Beobachtung eines angegebenen {{domxref('Element')}}s.

## Beispiele

Im Beispiel [resize-observer-text.html](https://mdn.github.io/dom-examples/resize-observer/resize-observer-text.html) ([siehe Quelle](https://github.com/mdn/dom-examples/blob/main/resize-observer/resize-observer-text.html)) verwenden wir den Resize Observer, um die {{cssxref("font-size")}} eines Headers und eines Absatzes zu ändern, während sich der Wert eines Schiebereglers ändert und dadurch die Breite des umgebenden `<div>` verändert wird. Dies zeigt, dass Sie auf Änderungen der Größe eines Elements reagieren können, auch wenn diese nichts mit dem Ansichtsfenster zu tun haben.

Wir bieten auch ein Kontrollkästchen an, um den Beobachter ein- und auszuschalten. Wenn es ausgeschaltet ist, ändert sich der Text nicht, wenn sich die Breite des `<div>` ändert.

Der JavaScript-Code sieht wie folgt aus:

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

  console.log("Größe wurde geändert");
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

Implementierungen, die der Spezifikation folgen, lösen Resize-Ereignisse vor der Darstellung aus (das heißt, bevor der Frame dem Benutzer präsentiert wird). Wenn ein Resize-Ereignis auftritt, werden Stil und Layout neu bewertet — was wiederum weitere Resize-Ereignisse auslösen kann. Unendliche Schleifen aufgrund zyklischer Abhängigkeiten werden vermieden, indem bei jeder Iteration nur Elemente tiefer im DOM verarbeitet werden. Resize-Ereignisse, die diese Bedingung nicht erfüllen, werden auf die nächste Darstellung verschoben, und ein Fehlerereignis wird auf dem {{domxref('Window')}}-Objekt mit der genau definierten Meldungszeichenfolge ausgelöst:

**ResizeObserver-Schleife abgeschlossen mit nicht zugestellten Benachrichtigungen.**

Beachten Sie, dass dies nur das Einfrieren des User-Agent verhindert, nicht die Endlosschleife selbst. Beispielsweise führt der folgende Code dazu, dass die Breite von `divElem` unbegrenzt wächst, wobei die oben genannte Fehlermeldung bei jedem Frame in der Konsole wiederholt wird:

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

Solange das Fehlerereignis nicht unendlich oft ausgelöst wird, wird sich der Resize Observer einpendeln und ein stabiles, wahrscheinlich korrektes Layout produzieren. Besucher könnten jedoch ein kurzzeitig fehlerhaftes Layout sehen, da eine Folge von Änderungen, die in einem einzigen Frame erwartet wurde, stattdessen über mehrere Frames erfolgt.

Wenn Sie diese Fehler verhindern möchten, hängt die Lösung von Ihrem beabsichtigten Effekt ab. Wenn Sie tatsächlich eine Endlosschleife wünschen, müssen Sie den Code zur Größenänderung in Ihrem `ResizeObserver`-Callback nach dem Neuzeichnen des Browsers verschieben. Sie können es in einen [`requestAnimationFrame`](/de/docs/Web/API/Window/requestAnimationFrame)-Callback einfügen.

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

Wenn Sie keine Endlosschleife beabsichtigen, sollten Sie sicherstellen, dass Ihr Code zur Größenänderung den Resize Observer-Callback nicht auslöst. Es gibt viele Möglichkeiten, dies zu tun, zum Beispiel durch das Setzen einer "erwarteten Größe" und das Nichtanpassen, wenn die Größe bereits diesen Wert hat.

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
- {{domxref('PerformanceObserver')}}
- {{domxref('IntersectionObserver')}} (Teil der [Intersection Observer API](/de/docs/Web/API/Intersection_Observer_API))
- Kommende [Container-Abfragen](/de/docs/Web/CSS/CSS_containment/Container_queries) können eine praktikable Alternative zur Implementierung eines responsive Designs sein.
