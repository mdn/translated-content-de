---
title: "Window: window-Eigenschaft"
short-title: window
slug: Web/API/Window/window
l10n:
  sourceCommit: ae380dd2b211ab497e064d4074ff81e71cb91a00
---

{{APIRef("HTML DOM")}}

Die schreibgeschützte Eigenschaft **`window`** der Schnittstelle [`Window`](/de/docs/Web/API/Window) verweist auf das Window-Objekt selbst.

Daher geben die folgenden Ausdrücke alle dasselbe Window-Objekt zurück:

```js
window.window;
window.window.window;
window.window.window.window;
// …
```

Auf Webseiten ist das Window-Objekt außerdem ein _globales Objekt_. Das bedeutet:

1. Globale Variablen Ihres Skripts sind tatsächlich Eigenschaften von `window`:

   ```js
   var global = { data: 0 };
   alert(global === window.global); // displays "true"
   ```

2. Sie können auf die integrierten Eigenschaften des Window-Objekts zugreifen, ohne ihnen `window.` voranzustellen:

   ```js
   setTimeout(() => alert("Hi!"), 50); // equivalent to using window.setTimeout() and window.alert().
   alert(window === window.window); // displays "true"
   ```

Dass die Eigenschaft `window` auf das Objekt selbst verweist, sollte vermutlich den Zugriff auf das globale Objekt erleichtern. Andernfalls müssten Sie am Anfang Ihres Skripts manuell `let window = this;` zuweisen.

Ein weiterer Grund ist, dass Sie ohne diese Eigenschaft beispielsweise [`window.open('https://google.com/')`](/de/docs/Web/API/Window/open) nicht schreiben könnten. Stattdessen müssten Sie `open('https://google.com/')` verwenden.

Die Eigenschaft ist auch für Bibliotheken nützlich, die sowohl objektorientierte als auch nicht objektorientierte Varianten anbieten möchten, insbesondere als JavaScript-Module. Wenn beispielsweise auf „this.window\.location.href“ verwiesen wird, könnte ein [JavaScript-Modul](/de/docs/Web/JavaScript/Guide/Modules) innerhalb einer von ihm definierten Klasse eine Eigenschaft namens „window“ anlegen. Denn standardmäßig steht ihm keine globale Variable „window“ zur Verfügung. Der Eigenschaft könnte ein Window-Objekt zugewiesen werden, das dem Konstruktor der Modulklasse übergeben wurde. „this.window“ würde dann innerhalb ihrer Funktionen auf dieses Window-Objekt verweisen. In der Variante ohne Namensraum würde „this.window“ dagegen auf „window“ verweisen und ebenfalls einen einfachen Zugriff auf die Dokumentadresse ermöglichen. Ein weiterer Vorteil ist, dass Objekte einer solchen Klasse ihren Verweis auf das Window-Objekt jederzeit ändern könnten – selbst wenn die Klasse außerhalb eines Moduls definiert wäre. Mit einem fest codierten Verweis auf „window“ wäre das nicht möglich. Als Standardwert in der Klasse könnte weiterhin das aktuelle Window-Objekt festgelegt werden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
