---
title: "Herausforderung: Sequenzierung von Animationen"
short-title: "Herausforderung: Animationssequenz"
slug: Learn_web_development/Extensions/Async_JS/Sequencing_animations
l10n:
  sourceCommit: 48d220a8cffdfd5f088f8ca89724a9a92e34d8c0
---

{{PreviousMenu("Learn_web_development/Extensions/Async_JS/Introducing_workers", "Learn_web_development/Extensions/Async_JS")}}

In dieser Herausforderung werden Sie eine Seite aktualisieren, um eine Reihe von Animationen in einer Sequenz abzuspielen. Dazu verwenden Sie einige der Techniken, die wir im Artikel [Anleitung zur Verwendung von Promises](/de/docs/Learn_web_development/Extensions/Async_JS/Promises) gelernt haben.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Ein vernünftiges Verständnis der JavaScript-Grundlagen, wie man API-basierte Promises verwendet.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>Das Verständnis für die Verwendung von API-basierten Promises testen.</td>
    </tr>
  </tbody>
</table>

## Ausgangspunkt

Machen Sie eine lokale Kopie der Dateien unter <https://github.com/mdn/learning-area/tree/main/javascript/asynchronous/sequencing-animations/start>. Sie enthalten vier Dateien:

- alice.svg
- index.html
- main.js
- style.css

Die einzige Datei, die Sie bearbeiten müssen, ist "main.js".

Wenn Sie "index.html" in einem Browser öffnen, sehen Sie drei Bilder, die diagonal angeordnet sind:

![Screenshot der Sequencing-Animations Herausforderung Seite](./sequencing-animations.png)

Die Bilder stammen aus unserem Leitfaden zur [Verwendung der Web Animations API](/de/docs/Web/API/Web_Animations_API/Using_the_Web_Animations_API).

> [!NOTE]
> Wenn Sie festsitzen, können Sie uns in einem unserer [Kommunikationskanäle](/de/docs/MDN/Community/Communication_channels) erreichen.

## Projektbrief

Wir möchten diese Seite aktualisieren, sodass wir eine Animation auf alle drei Bilder nacheinander anwenden. Wenn die erste Animation beendet ist, soll die zweite gestartet werden und nach ihrer Beendigung die dritte.

Die Animation ist bereits in "main.js" definiert: sie dreht das Bild und verkleinert es, bis es verschwindet.

Um Ihnen eine bessere Vorstellung davon zu geben, wie die Seite funktionieren soll, [sehen Sie sich das fertige Beispiel an](https://mdn.github.io/learning-area/javascript/asynchronous/sequencing-animations/finished/). Beachten Sie, dass die Animationen nur einmal ablaufen: Um sie erneut abzuspielen, laden Sie die Seite neu.

## Schritte zur Fertigstellung

### Die erste Animation

Wir verwenden die [Web Animations API](/de/docs/Web/API/Web_Animations_API), um die Bilder zu animieren, speziell die Methode [`element.animate()`](/de/docs/Web/API/Element/animate).

Aktualisieren Sie "main.js", um einen Aufruf zu `alice1.animate()` hinzuzufügen, wie folgt:

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

Laden Sie die Seite neu, und Sie sollten sehen, wie sich das erste Bild dreht und verkleinert.

### Alle Bilder animieren

Als nächstes möchten wir `alice2` animieren, wenn `alice1` fertig ist, und `alice3`, wenn `alice2` fertig ist.

Die Methode `animate()` gibt ein [`Animation`](/de/docs/Web/API/Animation)-Objekt zurück. Dieses Objekt hat eine Eigenschaft `finished`, die ein `Promise` ist, das erfüllt wird, wenn die Animation fertig abgespielt wurde. So können wir dieses Promise verwenden, um zu wissen, wann die nächste Animation gestartet werden kann.

Wir möchten, dass Sie ein paar verschiedene Wege ausprobieren, um dies zu implementieren, um verschiedene Möglichkeiten der Verwendung von Promises zu verstärken.

1. Implementieren Sie zuerst etwas, das funktioniert, aber das Problem der "Callback-Hölle" in der Promise-Version hat, das wir in unserer [Diskussion über die Verwendung von Callbacks](/de/docs/Learn_web_development/Extensions/Async_JS/Introducing#callbacks) gesehen haben.

2. Implementieren Sie es als [Promise-Kette](/de/docs/Learn_web_development/Extensions/Async_JS/Promises#chaining_promises). Beachten Sie, dass es einige verschiedene Möglichkeiten gibt, dies zu schreiben, wegen der unterschiedlichen Formen, die Sie für eine [Pfeilfunktion](/de/docs/Learn_web_development/Core/Scripting/Functions#arrow_functions) verwenden können. Versuchen Sie verschiedene Formen. Welche ist die knappste? Welche finden Sie am lesbarsten?

3. Schließlich implementieren Sie es mit [`async` und `await`](/de/docs/Learn_web_development/Extensions/Async_JS/Promises#async_and_await).

Denken Sie daran, dass `element.animate()` _kein_ `Promise` zurückgibt: Es gibt ein `Animation`-Objekt zurück, dessen Eigenschaft `finished` ein `Promise` ist.

{{PreviousMenu("Learn_web_development/Extensions/Async_JS/Introducing_workers", "Learn_web_development/Extensions/Async_JS")}}
