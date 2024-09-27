---
title: "Window: window-Eigenschaft"
short-title: window
slug: Web/API/Window/window
l10n:
  sourceCommit: 5bd9fe2b25c6eee2a14d0406ce7116998fa48c13
---

{{APIRef}}

Die **`window`**-Eigenschaft eines [`Window`](/de/docs/Web/API/Window)-Objekts zeigt auf das Fensterobjekt selbst.

Dementsprechend liefern die folgenden Ausdrücke alle dasselbe Fensterobjekt zurück:

```js
window.window;
window.window.window;
window.window.window.window;
// …
```

In Webseiten ist das Fensterobjekt auch ein _globales Objekt_. Dies bedeutet:

1. Globale Variablen Ihres Skripts sind tatsächlich Eigenschaften von `window`:

   ```js
   var global = { data: 0 };
   alert(global === window.global); // displays "true"
   ```

2. Sie können auf die eingebauten Eigenschaften des Fensterobjekts zugreifen, ohne sie mit `window.` vorwegzunehmen:

   ```js
   setTimeout("alert('Hi!')", 50); // equivalent to using window.setTimeout().
   alert(window === window.window); // displays "true"
   ```

Der Zweck der `window`-Eigenschaft, die auf das Objekt selbst verweist, war wahrscheinlich, um es einfach zu machen, auf das globale Objekt zu verweisen. Andernfalls müssten Sie am Anfang Ihres Skripts manuell `let window = this;` zuweisen.

Ein weiterer Grund ist, dass Sie ohne diese Eigenschaft zum Beispiel nicht [`window.open('https://google.com/')`](/de/docs/Web/API/Window/open) schreiben könnten. Sie müssten stattdessen `open('https://google.com/')` verwenden.

Ein weiterer Grund, diese Eigenschaft zu nutzen, sind Bibliotheken, die OOP-Versionen und nicht-OOP-Versionen (insbesondere JavaScript-Module) anbieten möchten. Wenn wir zum Beispiel auf "this.window\.location.href" verweisen, könnte ein [JavaScript-Modul](/de/docs/Web/JavaScript/Guide/Modules) eine Eigenschaft namens "window" innerhalb einer Klasse definieren, die es definiert hat (da standardmäßig keine globale "window"-Variable existiert), die nach Übergeben eines Fensterobjekts an den Konstruktor der Modulklasse erstellt werden könnte. Somit würde "this.window" innerhalb seiner Funktionen auf dieses Fensterobjekt verweisen. In der nicht-namespaced Version würde "this.window" auf "window" zurückverweisen und auch in der Lage sein, den Dokumentstandort leicht zu erhalten. Ein weiterer Vorteil ist, dass die Objekte einer solchen Klasse (selbst wenn die Klasse außerhalb eines Moduls definiert wäre) ihren Verweis auf das Fenster nach Belieben ändern könnten. Sie wären dazu nicht in der Lage, wenn sie einen fest kodierten Verweis auf "window" hätten. Die Standardeinstellung in der Klasse könnte trotzdem als das aktuelle Fensterobjekt gesetzt werden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
