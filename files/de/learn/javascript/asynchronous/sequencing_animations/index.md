---
title: Sequencing animations
slug: Learn/JavaScript/Asynchronous/Sequencing_animations
l10n:
  sourceCommit: bc0d0d1ef796435e969f6d65c7e5d3c08f4023aa
---

{{LearnSidebar}}{{PreviousMenu("Learn/JavaScript/Asynchronous/Introducing_workers", "Learn/JavaScript/Asynchronous")}}

In dieser Bewertung werden Sie eine Seite aktualisieren, um eine Reihe von Animationen in einer Sequenz abzuspielen. Hierfür verwenden Sie einige der Techniken, die wir im Artikel [How to use Promises](/de/docs/Learn/JavaScript/Asynchronous/Promises) gelernt haben.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Ein angemessenes Verständnis der JavaScript-Grundlagen und der Nutzung von API-Aufrufen auf Promise-Basis.
      </td>
    </tr>
    <tr>
      <th scope="row">Zielsetzung:</th>
      <td>Das Verständnis darüber testen, wie man API-Aufrufe auf Promise-Basis verwendet.</td>
    </tr>
  </tbody>
</table>

## Ausgangspunkt

Erstellen Sie eine lokale Kopie der Dateien von <https://github.com/mdn/learning-area/tree/main/javascript/asynchronous/sequencing-animations/start>. Sie enthalten vier Dateien:

- alice.svg
- index.html
- main.js
- style.css

Die einzige Datei, die Sie bearbeiten müssen, ist "main.js".

Wenn Sie "index.html" in einem Browser öffnen, sehen Sie drei diagonal angeordnete Bilder:

![Screenshot der Sequencing-Animations-Bewertungsseite](./sequencing-animations.png)

Die Bilder stammen aus unserem Leitfaden zu [Using the Web Animations API](/de/docs/Web/API/Web_Animations_API/Using_the_Web_Animations_API).

> [!NOTE]
> Wenn Sie nicht weiterkommen, können Sie uns über einen unserer [Kommunikationskanäle](/de/docs/MDN/Community/Communication_channels) erreichen.

## Projektbeschreibung

Wir möchten diese Seite aktualisieren, sodass wir eine Animation auf alle drei Bilder anwenden, eines nach dem anderen. Wenn die erste Animation beendet ist, animieren wir das zweite und wenn das zweite beendet ist, animieren wir das dritte.

Die Animation ist bereits in "main.js" definiert: sie dreht das Bild und verkleinert es, bis es verschwindet.

Um Ihnen eine bessere Vorstellung davon zu geben, wie die Seite funktionieren soll, [sehen Sie sich das fertige Beispiel an](https://mdn.github.io/learning-area/javascript/asynchronous/sequencing-animations/finished/). Beachten Sie, dass die Animationen nur einmal ablaufen: Um sie erneut zu sehen, laden Sie die Seite neu.

## Schritte zur Fertigstellung

### Die erste Animation

Wir verwenden die [Web Animations API](/de/docs/Web/API/Web_Animations_API) um die Bilder zu animieren, insbesondere die Methode [`element.animate()`](/de/docs/Web/API/Element/animate).

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

Als nächstes möchten wir `alice2` animieren, wenn `alice1` fertig ist, und `alice3`, wenn `alice2` fertig ist.

Die Methode `animate()` gibt ein [`Animation`](/de/docs/Web/API/Animation)-Objekt zurück. Dieses Objekt hat eine `finished`-Eigenschaft, die ein `Promise` ist, das erfüllt wird, wenn die Animation fertig abgespielt wurde. Wir können dieses Promise verwenden, um zu wissen, wann wir die nächste Animation starten sollen.

Wir möchten, dass Sie einige verschiedene Methoden ausprobieren, um dies zu implementieren, um verschiedene Möglichkeiten der Verwendung von Promises zu verstärken.

1. Implementieren Sie zuerst etwas, das funktioniert, aber die Problemversion der "Callback-Hölle" enthält, die wir in unserer [Diskussion über die Verwendung von Callbacks](/de/docs/Learn/JavaScript/Asynchronous/Introducing#callbacks) gesehen haben.

2. Implementieren Sie es als [Promise-Kette](/de/docs/Learn/JavaScript/Asynchronous/Promises#chaining_promises). Beachten Sie, dass es einige verschiedene Arten gibt, wie Sie dies schreiben können, aufgrund der verschiedenen Formen, die Sie für eine [Pfeilfunktion](/de/docs/Learn/JavaScript/Building_blocks/Functions#arrow_functions) verwenden können. Versuchen Sie einige unterschiedliche Formen. Welche ist die kürzeste? Welche ist Ihrer Meinung nach am besten lesbar?

3. Implementieren Sie es schließlich unter Verwendung von [`async` und `await`](/de/docs/Learn/JavaScript/Asynchronous/Promises#async_and_await).

Denken Sie daran, dass `element.animate()` _kein_ `Promise` zurückgibt: es gibt ein `Animation`-Objekt mit einer `finished`-Eigenschaft zurück, die ein `Promise` ist.

{{PreviousMenu("Learn/JavaScript/Asynchronous/Introducing_workers", "Learn/JavaScript/Asynchronous")}}
