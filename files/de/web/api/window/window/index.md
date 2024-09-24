---
title: "Window: window-Eigenschaft"
short-title: window
slug: Web/API/Window/window
l10n:
  sourceCommit: 8d766d1d1c60a2d6d2c95bd2aa9d0b297d9c70ac
---

{{APIRef}}

Die **`window`**-Eigenschaft eines {{domxref("Window")}}-Objekts verweist auf das Fensterobjekt selbst.

Daher geben die folgenden Ausdrücke alle dasselbe Fensterobjekt zurück:

```js
window.window;
window.window.window;
window.window.window.window;
// …
```

Auf Webseiten ist das Fensterobjekt auch ein _globales Objekt_. Das bedeutet:

1. Globale Variablen Ihres Skripts sind in Wirklichkeit Eigenschaften von `window`:

   ```js
   var global = { data: 0 };
   alert(global === window.global); // zeigt "true" an
   ```

2. Sie können auf die eingebauten Eigenschaften des Fensterobjekts zugreifen, ohne sie mit `window.` zu präfixieren:

   ```js
   setTimeout("alert('Hi!')", 50); // entspricht der Verwendung von window.setTimeout().
   alert(window === window.window); // zeigt "true" an
   ```

Der Zweck, dass die `window`-Eigenschaft auf das Objekt selbst verweist, war wahrscheinlich, die Referenzierung des globalen Objekts zu erleichtern. Andernfalls müssten Sie am Anfang Ihres Skripts eine manuelle Zuweisung `let window = this;` vornehmen.

Ein weiterer Grund ist, dass Sie ohne diese Eigenschaft beispielsweise nicht "{{domxref("window.open","window.open('https://google.com/')")}}" schreiben könnten. Sie müssten stattdessen `open('https://google.com/')` verwenden.

Ein weiterer Grund, diese Eigenschaft zu nutzen, ist für Bibliotheken, die OOP-Versionen und nicht-OOP-Versionen (insbesondere JavaScript-Module) anbieten möchten. Wenn wir beispielsweise auf "this.window\.location.href" verweisen, könnte ein [JavaScript-Modul](/de/docs/Web/JavaScript/Guide/Modules) eine Eigenschaft namens "window" innerhalb einer definierten Klasse einführen (da von Haus aus keine globale "window"-Variable für sie existiert), die nach dem Übergeben eines Fensterobjekts an den Konstruktor der Modulklasse erstellt werden könnte. Somit würde "this.window" innerhalb seiner Funktionen auf dieses Fensterobjekt verweisen. In der nicht-namensbasierten Version würde "this.window" auf "window" zurückverweisen und leicht den Dokumentstandort erhalten können. Ein weiterer Vorteil besteht darin, dass die Objekte einer solchen Klasse (selbst wenn die Klasse außerhalb eines Moduls definiert wäre) ihre Referenz zum Fenster nach Belieben ändern können, was sie nicht könnten, wenn sie eine fest codierte Referenz zu "window" hätten. Der Standard in der Klasse könnte dennoch als das aktuelle Fensterobjekt festgelegt werden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
