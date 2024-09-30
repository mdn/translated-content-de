---
title: "Window: window Eigenschaft"
short-title: window
slug: Web/API/Window/window
l10n:
  sourceCommit: 5bd9fe2b25c6eee2a14d0406ce7116998fa48c13
---

{{APIRef}}

Die **`window`**-Eigenschaft eines [`Window`](/de/docs/Web/API/Window)-Objekts verweist auf das Fensterobjekt selbst.

Daher geben die folgenden Ausdrücke alle dasselbe Fensterobjekt zurück:

```js
window.window;
window.window.window;
window.window.window.window;
// …
```

Auf Webseiten ist das Fensterobjekt auch ein _globales Objekt_. Das bedeutet:

1. Globale Variablen Ihres Skripts sind tatsächlich Eigenschaften von `window`:

   ```js
   var global = { data: 0 };
   alert(global === window.global); // displays "true"
   ```

2. Sie können auf die eingebauten Eigenschaften des Fensterobjekts zugreifen, ohne sie mit `window.` voranstellen zu müssen:

   ```js
   setTimeout("alert('Hi!')", 50); // equivalent to using window.setTimeout().
   alert(window === window.window); // displays "true"
   ```

Der Grund, warum die `window`-Eigenschaft auf das Objekt selbst verweist, war wahrscheinlich, es einfach zu machen, auf das globale Objekt zu verweisen. Andernfalls müssten Sie manuell eine Zuweisung `let window = this;` am Anfang Ihres Skripts vornehmen.

Ein weiterer Grund ist, dass Sie ohne diese Eigenschaft beispielsweise nicht [`window.open('https://google.com/')`](/de/docs/Web/API/Window/open) schreiben könnten. Sie müssten stattdessen `open('https://google.com/')` verwenden.

Ein weiterer Grund, diese Eigenschaft zu verwenden, ist für Bibliotheken, die OOP-Versionen und nicht-OOP-Versionen (insbesondere JavaScript-Module) anbieten möchten. Zum Beispiel könnte ein [JavaScript-Modul](/de/docs/Web/JavaScript/Guide/Modules) eine Eigenschaft namens "window" innerhalb einer Klasse definieren, die es definiert hat (da keine globale "window"-Variable standardmäßig für es existiert), die erstellt werden könnte, nachdem ein Fensterobjekt an den Konstruktor der Modulklasse übergeben wurde. Somit würde "this.window" innerhalb seiner Funktionen auf dieses Fensterobjekt verweisen. In der nicht-namensbasierten Version würde "this.window" auf "window" zurückverweisen und auch problemlos den Dokumentstandort ermitteln können. Ein weiterer Vorteil ist, dass die Objekte einer solchen Klasse (auch wenn die Klasse außerhalb eines Moduls definiert würde) ihren Verweis auf das Fenster nach Belieben ändern könnten, dies könnten sie nicht tun, wenn sie einen Verweis auf "window" hartkodiert hätten. Der Standard in der Klasse könnte weiterhin als das aktuelle Fensterobjekt festgelegt sein.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
