---
title: "Herausforderung: Animationen sequenzieren"
slug: Learn_web_development/Extensions/Async_JS/Sequencing_animations
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{LearnSidebar}}

{{PreviousMenu("Learn_web_development/Extensions/Async_JS/Introducing_workers", "Learn_web_development/Extensions/Async_JS")}}

In dieser Herausforderung werden Sie eine Seite aktualisieren, um eine Reihe von Animationen in einer Sequenz abzuspielen. Dazu verwenden Sie einige der Techniken, die wir im Artikel [Anleitung zur Verwendung von Promises](/de/docs/Learn_web_development/Extensions/Async_JS/Promises) gelernt haben.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Ein gutes Verständnis der JavaScript-Grundlagen und wie man promise-basierte APIs verwendet.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>Das Verständnis für die Verwendung von promise-basierten APIs testen.</td>
    </tr>
  </tbody>
</table>

## Ausgangspunkt

Erstellen Sie eine lokale Kopie der Dateien unter <https://github.com/mdn/learning-area/tree/main/javascript/asynchronous/sequencing-animations/start>. Es enthält vier Dateien:

- alice.svg
- index.html
- main.js
- style.css

Die einzige Datei, die Sie bearbeiten müssen, ist "main.js".

Wenn Sie "index.html" in einem Browser öffnen, sehen Sie drei diagonal angeordnete Bilder:

![Screenshot der Seite für die Herausforderung zur Sequenzierung von Animationen](./sequencing-animations.png)

Die Bilder stammen aus unserem Leitfaden zur [Verwendung der Web Animations API](/de/docs/Web/API/Web_Animations_API/Using_the_Web_Animations_API).

> [!NOTE]
> Wenn Sie nicht weiterkommen, können Sie sich in einem unserer [Kommunikationskanäle](/de/docs/MDN/Community/Communication_channels) an uns wenden.

## Projektbeschreibung

Wir möchten diese Seite aktualisieren, damit wir eine Animation auf alle drei Bilder anwenden, eines nach dem anderen. Wenn die erste Animation beendet ist, animieren wir das zweite Bild, und wenn das zweite fertig ist, animieren wir das dritte.

Die Animation ist bereits in "main.js" definiert: Sie dreht das Bild und verkleinert es, bis es verschwindet.

Um Ihnen eine bessere Vorstellung davon zu geben, wie die Seite funktionieren soll, [sehen Sie sich das fertige Beispiel an](https://mdn.github.io/learning-area/javascript/asynchronous/sequencing-animations/finished/). Beachten Sie, dass die Animationen nur einmal ablaufen: Um sie erneut abzuspielen, laden Sie die Seite neu.

## Schritte zur Fertigstellung

### Das erste Bild animieren

Wir verwenden die [Web Animations API](/de/docs/Web/API/Web_Animations_API), um die Bilder zu animieren, insbesondere die Methode [`element.animate()`](/de/docs/Web/API/Element/animate).

Aktualisieren Sie "main.js", um einen Aufruf von `alice1.animate()` hinzuzufügen, wie folgt:

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

Laden Sie die Seite neu und Sie sollten sehen, wie sich das erste Bild dreht und verkleinert.

### Alle Bilder animieren

Als Nächstes möchten wir `alice2` animieren, wenn `alice1` fertig ist, und `alice3`, wenn `alice2` fertig ist.

Die Methode `animate()` gibt ein [`Animation`](/de/docs/Web/API/Animation)-Objekt zurück. Dieses Objekt hat eine `finished`-Eigenschaft, die ein `Promise` ist, das erfüllt wird, wenn die Animation fertig abgespielt ist. Wir können dieses Promise verwenden, um zu wissen, wann wir die nächste Animation starten sollen.

Wir möchten, dass Sie einige verschiedene Möglichkeiten ausprobieren, um dies zu implementieren, um verschiedene Möglichkeiten der Verwendung von Promises zu festigen.

1. Implementieren Sie zuerst etwas, das funktioniert, bei dem jedoch das Promise-Pendant zum "Callback-Hell"-Problem auftritt, das wir in unserer [Diskussion zur Verwendung von Callbacks](/de/docs/Learn_web_development/Extensions/Async_JS/Introducing#callbacks) gesehen haben.

2. Implementieren Sie es dann als [Promise-Kette](/de/docs/Learn_web_development/Extensions/Async_JS/Promises#chaining_promises). Beachten Sie, dass es hier verschiedene Möglichkeiten gibt, dies zu schreiben, aufgrund der unterschiedlichen Formen, die Sie für eine [Pfeilfunktion](/de/docs/Learn_web_development/Core/Scripting/Functions#arrow_functions) verwenden können. Probieren Sie einige verschiedene Formen aus. Welche ist die kürzeste? Welche finden Sie am lesbarsten?

3. Schließlich implementieren Sie es mit [`async` und `await`](/de/docs/Learn_web_development/Extensions/Async_JS/Promises#async_and_await).

Denken Sie daran, dass `element.animate()` _kein_ `Promise` zurückgibt: Es gibt ein `Animation`-Objekt mit einer `finished`-Eigenschaft zurück, das ein `Promise` ist.

{{PreviousMenu("Learn_web_development/Extensions/Async_JS/Introducing_workers", "Learn_web_development/Extensions/Async_JS")}}
