---
title: "Herausforderung: Sequenzierung von Animationen"
short-title: "Herausforderung: Animationssequenz"
slug: Learn_web_development/Extensions/Async_JS/Sequencing_animations
l10n:
  sourceCommit: 6c58c5d4227a031105740b0e85acbc6178223d0a
---

{{LearnSidebar}}

{{PreviousMenu("Learn_web_development/Extensions/Async_JS/Introducing_workers", "Learn_web_development/Extensions/Async_JS")}}

In dieser Herausforderung werden Sie eine Seite aktualisieren, um eine Reihe von Animationen nacheinander abzuspielen. Dazu verwenden Sie einige der Techniken, die wir im Artikel [Anleitung zur Verwendung von Promises](/de/docs/Learn_web_development/Extensions/Async_JS/Promises) gelernt haben.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Ein vernünftiges Verständnis der JavaScript-Grundlagen und der Verwendung von Promise-basierten APIs.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>Das Verständnis der Verwendung von Promise-basierten APIs zu testen.</td>
    </tr>
  </tbody>
</table>

## Ausgangspunkt

Machen Sie eine lokale Kopie der Dateien unter <https://github.com/mdn/learning-area/tree/main/javascript/asynchronous/sequencing-animations/start>. Es enthält vier Dateien:

- alice.svg
- index.html
- main.js
- style.css

Die einzige Datei, die Sie bearbeiten müssen, ist "main.js".

Wenn Sie "index.html" in einem Browser öffnen, sehen Sie drei Bilder, die diagonal angeordnet sind:

![Screenshot der Herausforderung-Animationssequenz-Seite](./sequencing-animations.png)

Die Bilder stammen aus unserem Leitfaden zur [Verwendung der Web Animations API](/de/docs/Web/API/Web_Animations_API/Using_the_Web_Animations_API).

> [!NOTE]
> Wenn Sie nicht weiterkommen, können Sie uns über einen unserer [Kommunikationskanäle](/de/docs/MDN/Community/Communication_channels) erreichen.

## Projektbeschreibung

Wir möchten diese Seite so aktualisieren, dass allen drei Bildern nacheinander eine Animation zugewiesen wird. Wenn die erste beendet ist, wird das zweite animiert, und wenn das zweite beendet ist, wird das dritte animiert.

Die Animation ist bereits in "main.js" definiert: Sie dreht das Bild und verkleinert es, bis es verschwindet.

Um Ihnen eine bessere Vorstellung davon zu geben, wie die Seite funktionieren soll, [sehen Sie sich das fertige Beispiel an](https://mdn.github.io/learning-area/javascript/asynchronous/sequencing-animations/finished/). Beachten Sie, dass die Animationen nur einmal ablaufen: Um sie erneut zu sehen, laden Sie die Seite neu.

## Schritte zur Fertigstellung

### Das erste Bild animieren

Wir verwenden die [Web Animations API](/de/docs/Web/API/Web_Animations_API), um die Bilder zu animieren, insbesondere die Methode [`element.animate()`](/de/docs/Web/API/Element/animate).

Aktualisieren Sie "main.js", um einen Aufruf zu `alice1.animate()` hinzuzufügen, so:

```js
const aliceTumbling = [
  { transform: "rotate(0) scale(1)" },
  { transform: "rotate(360deg) scale(0)" },
];

const aliceTiming = {
  duration: 2000,
  iterations: 1,
  fill: "forwards",
};

const alice1 = document.querySelector("#alice1");
const alice2 = document.querySelector("#alice2");
const alice3 = document.querySelector("#alice3");

alice1.animate(aliceTumbling, aliceTiming);
```

Laden Sie die Seite neu, und Sie sollten sehen, dass sich das erste Bild dreht und verkleinert.

### Alle Bilder animieren

Wir möchten als nächstes `alice2` animieren, wenn `alice1` fertig ist, und `alice3`, wenn `alice2` fertig ist.

Die Methode `animate()` gibt ein [`Animation`](/de/docs/Web/API/Animation)-Objekt zurück. Dieses Objekt hat eine `finished`-Eigenschaft, die ein `Promise` ist, das erfüllt wird, wenn die Animation beendet ist. Wir können dieses Promise verwenden, um zu wissen, wann die nächste Animation gestartet werden soll.

Wir möchten, dass Sie einige verschiedene Möglichkeiten ausprobieren, um dies zu implementieren, um verschiedene Methoden der Verwendung von Promises zu veranschaulichen.

1. Implementieren Sie zuerst etwas, das funktioniert, aber die Promise-Version des "Callback-Hell"-Problems hat, das wir in unserer [Diskussion über die Verwendung von Callbacks](/de/docs/Learn_web_development/Extensions/Async_JS/Introducing#callbacks) gesehen haben.

2. Implementieren Sie es als [Promise-Kette](/de/docs/Learn_web_development/Extensions/Async_JS/Promises#chaining_promises). Beachten Sie, dass es verschiedene Möglichkeiten gibt, dies zu schreiben, da Sie verschiedene Formen einer [Pfeilfunktion](/de/docs/Learn_web_development/Core/Scripting/Functions#arrow_functions) verwenden können. Probieren Sie einige verschiedene Formen aus. Welches ist am prägnantesten? Welches finden Sie am lesbarsten?

3. Schließlich implementieren Sie es unter Verwendung von [`async` und `await`](/de/docs/Learn_web_development/Extensions/Async_JS/Promises#async_and_await).

Denken Sie daran, dass `element.animate()` _kein_ `Promise` zurückgibt: Es gibt ein `Animation`-Objekt mit einer `finished`-Eigenschaft zurück, die ein `Promise` ist.

{{PreviousMenu("Learn_web_development/Extensions/Async_JS/Introducing_workers", "Learn_web_development/Extensions/Async_JS")}}
