---
title: "Window: window Eigenschaft"
short-title: window
slug: Web/API/Window/window
l10n:
  sourceCommit: 364a4d02b10854ab7cef4ff4b0ec3616d4e1c8ab
---

{{APIRef}}

Die **`window`**-Eigenschaft eines [`Window`](/de/docs/Web/API/Window)-Objekts verweist auf das Window-Objekt selbst.

Daher geben die folgenden Ausdrücke alle dasselbe Window-Objekt zurück:

```js
window.window;
window.window.window;
window.window.window.window;
// …
```

In Webseiten ist das Window-Objekt auch ein _globales Objekt_. Das bedeutet:

1. Globale Variablen Ihres Skripts sind tatsächlich Eigenschaften von `window`:

   ```js
   var global = { data: 0 };
   alert(global === window.global); // displays "true"
   ```

2. Sie können auf die eingebauten Eigenschaften des Window-Objekts zugreifen, ohne sie mit `window.` voranzustellen:

   ```js
   setTimeout(() => alert("Hi!"), 50); // equivalent to using window.setTimeout() and window.alert().
   alert(window === window.window); // displays "true"
   ```

Der Zweck, dass die `window`-Eigenschaft auf das Objekt selbst verweist, war wahrscheinlich, die Referenz auf das globale Objekt zu erleichtern. Andernfalls müssten Sie am Anfang Ihres Skripts eine manuelle Zuweisung wie `let window = this;` vornehmen.

Ein weiterer Grund ist, dass Sie ohne diese Eigenschaft zum Beispiel nicht [`window.open('https://google.com/')`](/de/docs/Web/API/Window/open) schreiben könnten. Sie müssten stattdessen `open('https://google.com/')` verwenden.

Ein weiterer Grund für die Verwendung dieser Eigenschaft ist für Bibliotheken, die sowohl OOP-Versionen als auch Nicht-OOP-Versionen (insbesondere JavaScript-Module) anbieten möchten. Zum Beispiel könnte ein [JavaScript-Modul](/de/docs/Web/JavaScript/Guide/Modules) eine Eigenschaft namens "window" in einer Klasse definieren, die es erstellt hat (da für es standardmäßig keine globale "window"-Variable existiert), nachdem ein Window-Objekt an den Konstruktor der Modulklasse übergeben wurde. So würde "this.window" innerhalb seiner Funktionen auf dieses Window-Objekt verweisen. In der nicht-namespaceden Version würde "this.window" auf "window" zurückverweisen und auch problemlos auf den Dokumentort zugreifen können. Ein weiterer Vorteil ist, dass die Objekte einer solchen Klasse (selbst wenn die Klasse außerhalb eines Moduls definiert wurde) ihre Referenz auf das Window nach Belieben ändern können; sie könnten dies nicht tun, wenn sie eine fest codierte Referenz auf "window" hätten. Der Standard in der Klasse könnte immer noch als das aktuelle Window-Objekt festgelegt werden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
