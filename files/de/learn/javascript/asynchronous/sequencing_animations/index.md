---
title: Animierungen sequenzieren
slug: Learn/JavaScript/Asynchronous/Sequencing_animations
l10n:
  sourceCommit: bc0d0d1ef796435e969f6d65c7e5d3c08f4023aa
---

{{LearnSidebar}}{{PreviousMenu("Learn/JavaScript/Asynchronous/Introducing_workers", "Learn/JavaScript/Asynchronous")}}

In dieser Bewertung werden Sie eine Seite aktualisieren, um eine Reihe von Animationen in einer Sequenz abzuspielen. Dazu verwenden Sie einige der Techniken, die wir im Artikel [Wie man Promises verwendet](/de/docs/Learn/JavaScript/Asynchronous/Promises) gelernt haben.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Ein gutes Verständnis der grundlegenden Konzepte von JavaScript und wie man API-basierte Versprechungen verwendet.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>Das Verständnis der Verwendung von promise-basierten APIs zu testen.</td>
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

Wenn Sie "index.html" in einem Browser öffnen, sehen Sie drei Bilder, die diagonal angeordnet sind:

![Bildschirmfoto der Sequenzierung-Animationen Bewertungseite](./sequencing-animations.png)

Die Bilder stammen aus unserem Leitfaden zur [Verwendung der Web Animations API](/de/docs/Web/API/Web_Animations_API/Using_the_Web_Animations_API).

> [!NOTE]
> Wenn Sie feststecken, können Sie uns über einen unserer [Kommunikationskanäle](/de/docs/MDN/Community/Communication_channels) erreichen.

## Projektbeschreibung

Wir möchten diese Seite aktualisieren, damit wir eine Animation auf alle drei Bilder anwenden, eins nach dem anderen. Wenn die erste fertig ist, animieren wir das zweite, und wenn das zweite fertig ist, animieren wir das dritte.

Die Animation ist bereits in "main.js" definiert: sie dreht das Bild und verkleinert es, bis es verschwindet.

Um Ihnen eine bessere Vorstellung davon zu geben, wie die Seite funktionieren soll, [schauen Sie sich das fertige Beispiel an](https://mdn.github.io/learning-area/javascript/asynchronous/sequencing-animations/finished/). Beachten Sie, dass die Animationen nur einmal laufen: Um sie erneut auszuführen, laden Sie die Seite neu.

## Schritte zur Fertigstellung

### Animation des ersten Bildes

Wir verwenden die [Web Animations API](/de/docs/Web/API/Web_Animations_API), um die Bilder zu animieren, insbesondere die Methode {{domxref("Element/animate", "element.animate()")}}.

Aktualisieren Sie "main.js", um einen Aufruf an `alice1.animate()` hinzuzufügen, wie folgt:

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

Laden Sie die Seite neu, und Sie sollten sehen, dass sich das erste Bild dreht und schrumpft.

### Animation aller Bilder

Als Nächstes möchten wir `alice2` animieren, wenn `alice1` fertig ist, und `alice3`, wenn `alice2` fertig ist.

Die Methode `animate()` gibt ein {{domxref("Animation")}}-Objekt zurück. Dieses Objekt hat eine `finished`-Eigenschaft, die ein `Promise` ist, das erfüllt wird, wenn die Animation zu Ende gespielt hat. So können wir dieses Promise nutzen, um zu wissen, wann die nächste Animation gestartet werden soll.

Wir möchten, dass Sie ein paar verschiedene Möglichkeiten ausprobieren, dies zu implementieren, um unterschiedliche Wege der Verwendung von Promises zu verstärken.

1. Implementieren Sie zuerst etwas, das funktioniert, aber das Problem der "Rückrufhölle" bei Promises hat, das wir in unserer [Diskussion über die Verwendung von Rückrufen](/de/docs/Learn/JavaScript/Asynchronous/Introducing#callbacks) gesehen haben.

2. Implementieren Sie es als [Promise-Kette](/de/docs/Learn/JavaScript/Asynchronous/Promises#chaining_promises). Beachten Sie, dass es einige verschiedene Möglichkeiten gibt, wie Sie dies schreiben können, aufgrund der unterschiedlichen Formen, die Sie für eine [Pfeilfunktion](/de/docs/Learn/JavaScript/Building_blocks/Functions#arrow_functions) verwenden können. Probieren Sie einige verschiedene Formen aus. Welche ist am knappsten? Welche finden Sie am lesbarsten?

3. Schließlich implementieren Sie es unter Verwendung von [`async` und `await`](/de/docs/Learn/JavaScript/Asynchronous/Promises#async_and_await).

Denken Sie daran, dass `element.animate()` _kein_ `Promise` zurückgibt: Es gibt ein `Animation`-Objekt mit einer `finished`-Eigenschaft zurück, die ein `Promise` ist.

{{PreviousMenu("Learn/JavaScript/Asynchronous/Introducing_workers", "Learn/JavaScript/Asynchronous")}}
