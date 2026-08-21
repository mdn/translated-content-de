---
title: "Window: window property"
short-title: window
slug: Web/API/Window/window
l10n:
  sourceCommit: 285941521a9a7c2c1b3c443d5f785e5f663a8fc9
---

{{APIRef("HTML DOM")}}

Die **`window`**-Eigenschaft eines [`Window`](/de/docs/Web/API/Window)-Objekts verweist auf das Fensterobjekt selbst.

Daher geben die folgenden Ausdrücke alle dasselbe Fensterobjekt zurück:

```js
window.window;
window.window.window;
window.window.window.window;
// …
```

In Webseiten ist das Fensterobjekt auch ein _globales Objekt_. Das bedeutet:

1. Globale Variablen Ihres Skripts sind tatsächlich Eigenschaften von `window`:

   ```js
   var global = { data: 0 };
   alert(global === window.global); // displays "true"
   ```

2. Sie können auf die eingebauten Eigenschaften des Fensterobjekts zugreifen, ohne sie mit `window.` voranstellen zu müssen:

   ```js
   setTimeout(() => alert("Hi!"), 50); // equivalent to using window.setTimeout() and window.alert().
   alert(window === window.window); // displays "true"
   ```

Der Zweck der `window`-Eigenschaft, auf das Objekt selbst zu verweisen, bestand wahrscheinlich darin, es einfach zu machen, auf das globale Objekt zu verweisen. Andernfalls müssten Sie am Anfang Ihres Skripts eine manuelle Zuweisung `let window = this;` durchführen.

Ein weiterer Grund ist, dass Sie ohne diese Eigenschaft beispielsweise [`window.open('https://google.com/')`](/de/docs/Web/API/Window/open) nicht schreiben könnten. Sie müssten stattdessen `open('https://google.com/')` verwenden.

Ein weiterer Grund für die Nutzung dieser Eigenschaft ist für Bibliotheken, die OOP- und nicht-OOP-Versionen anbieten möchten (insbesondere JavaScript-Module). Zum Beispiel, wenn wir auf "this.window\.location.href" verweisen, könnte ein [JavaScript-Modul](/de/docs/Web/JavaScript/Guide/Modules) eine Eigenschaft namens "window" innerhalb einer Klasse definieren, die es definiert hat (da standardmäßig keine globale "window"-Variable für es existiert), welche nach dem Übergeben eines Fensterobjekts an den Konstruktor der Modulkategorie erstellt werden könnte. Somit würde "this.window" innerhalb seiner Funktionen auf dieses Fensterobjekt verweisen. In der nicht-namespaced Version würde "this.window" auf "window" zurückverweisen und könnte auch leicht den Dokumentstandort abrufen. Ein weiterer Vorteil ist, dass die Objekte einer solchen Klasse (selbst wenn die Klasse außerhalb eines Moduls definiert wurde) ihre Referenz auf das Fenster nach Belieben ändern könnten, was sie nicht könnten, wenn sie eine harte Referenz auf "window" kodiert hätten. Der Standard in der Klasse könnte dennoch als das aktuelle Fensterobjekt gesetzt werden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
