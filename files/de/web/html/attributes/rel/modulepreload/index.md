---
title: rel=modulepreload
slug: Web/HTML/Attributes/rel/modulepreload
l10n:
  sourceCommit: cb132bc83b660e51be8959de5336c00b08030104
---

{{HTMLSidebar}}

Das **`modulepreload`** Schlüsselwort für das [`rel`](/de/docs/Web/HTML/Attributes/rel)-Attribut des {{HTMLElement("link")}}-Elements bietet eine deklarative Möglichkeit, ein [Modulskript](/de/docs/Web/JavaScript/Guide/Modules) im Voraus abzurufen, es zu parsen und zu kompilieren und es in der Modulkarte des Dokuments für eine spätere Ausführung zu speichern.

Das Vorladen ermöglicht es, Module und deren Abhängigkeiten frühzeitig herunterzuladen und kann außerdem die Gesamt-Download- und Verarbeitungszeit erheblich reduzieren. Dies liegt daran, dass es Seiten ermöglicht, Module parallel abzurufen, anstatt sie nacheinander zu verarbeiten, wie es der Fall ist, wenn jedes Modul verarbeitet und seine Abhängigkeiten entdeckt werden. Beachten Sie jedoch, dass Sie nicht einfach alles vorladen können! Was Sie vorladen, muss in Einklang mit anderen Operationen gebracht werden, die andernfalls möglicherweise vernachlässigt werden und sich nachteilig auf die Benutzererfahrung auswirken könnten.

Links mit `rel="modulepreload"` sind ähnlich wie solche mit [`rel="preload"`](/de/docs/Web/HTML/Attributes/rel/preload).
Der Hauptunterschied besteht darin, dass `preload` nur die Datei herunterlädt und im Cache speichert, während `modulepreload` das Modul erhält, es parst und kompiliert und die Ergebnisse in die Modulkarte einfügt, sodass es bereit zur Ausführung ist.

Bei der Verwendung von `modulepreload` ist der Modus der Fetch-Anfrage immer [`cors`](/de/docs/Web/API/Request/mode#cors), und die [`crossorigin`](/de/docs/Web/HTML/Attributes/crossorigin)-Eigenschaft wird verwendet, um den Anfragemodus für [Anmeldeinformationen](/de/docs/Web/API/Request/credentials) zu bestimmen.
Wenn `crossorigin` auf [`anonymous`](/de/docs/Web/HTML/Attributes/crossorigin#anonymous) oder [`""`](/de/docs/Web/HTML/Attributes/crossorigin#sect1) (Standard) gesetzt ist, dann ist der Modus für Anmeldeinformationen [`same-origin`](/de/docs/Web/API/Request/credentials#same-origin), und Benutzerdaten wie Cookies und Authentifizierung werden nur bei Anfragen mit `same-origin` gesendet.
Wenn `crossorigin` auf [`use-credentials`](/de/docs/Web/HTML/Attributes/crossorigin#use-credentials) gesetzt ist, dann ist der Modus für Anmeldeinformationen [`include`](/de/docs/Web/API/Request/credentials#include), und Benutzerdaten werden sowohl für Single- als auch für Cross-Origin-Anfragen gesendet.

Das [`as`](/de/docs/Web/HTML/Element/link#as)-Attribut ist optional für Links mit `rel="modulepreload"` und hat standardmäßig den Wert `"script"`.
Es kann auf `"script"` oder ein beliebiges skriptähnliches Ziel gesetzt werden, wie `"audioworklet"`, `"paintworklet"`, `"serviceworker"`, `"sharedworker"` oder `"worker"`.
Ein [`Event`](/de/docs/Web/API/Event/Event), das "error" genannt wird, wird auf dem Element ausgelöst, wenn ein anderes Ziel verwendet wird.

Ein Browser _kann_ zusätzlich auch wählen, automatisch sämtliche Abhängigkeiten der Modulressource abzurufen.
Beachten Sie jedoch, dass dies eine browserspezifische Optimierung ist — der einzige Ansatz, um sicherzustellen, dass alle Browser versuchen, die Abhängigkeiten eines Moduls vorzuladen, besteht darin, sie einzeln anzugeben!
Weiterhin werden die Ereignisse `load` oder `error` sofort nach dem Erfolg oder Misserfolg des Ladens der _spezifizierten_ Ressourcen ausgelöst.
Wenn Abhängigkeiten automatisch abgerufen werden, werden im Hauptthread keine zusätzlichen Ereignisse ausgelöst (obwohl Sie zusätzliche Anfragen in einem Service-Worker oder auf dem Server überwachen könnten).

## Beispiele

Betrachten Sie das [basic-modules](https://github.com/mdn/js-examples/tree/main/module-examples/basic-modules) Beispiel ([Live-Version](https://mdn.github.io/js-examples/module-examples/basic-modules/)), eingeführt im Leitfaden zu [JavaScript-Modulen](/de/docs/Web/JavaScript/Guide/Modules#basic_example_structure).

Dieses hat eine Dateistruktur, wie unten gezeigt, die aus dem obersten Modul `main.js` besteht, das zwei Abhängigkeitsmodule `modules/canvas.js` und `modules/square.js` mit der [`import` Anweisung](/de/docs/Web/JavaScript/Reference/Statements/import) statisch importiert.

```plain
index.html
main.js
modules/
    canvas.js
    square.js
```

Das HTML für das Beispiel unten zeigt, wie `main.js` in einem `<script>`-Element abgerufen wird.
Erst nachdem `main.js` geladen wurde, entdeckt der Browser die beiden Abhängigkeitsmodule und ruft sie ab.

```html
<!doctype html>
<html lang="en-US">
  <head>
    <meta charset="utf-8" />
    <title>Basic JavaScript module example</title>
    <style>
      canvas {
        border: 1px solid black;
      }
    </style>
    <script type="module" src="main.js"></script>
  </head>
  <body></body>
</html>
```

Das HTML unten aktualisiert das Beispiel, um `<link>`-Elemente mit `rel="modulepreload"` für die Hauptdatei und jedes der Abhängigkeitsmodule zu verwenden.
Dies ist viel schneller, da die drei Module alle asynchron und parallel herunterladen, bevor sie benötigt werden.
Bis `main.js` geparst und seine Abhängigkeiten bekannt sind, wurden sie bereits abgerufen und heruntergeladen.

```html
<!doctype html>
<html lang="en-US">
  <head>
    <meta charset="utf-8" />
    <title>Basic JavaScript module example</title>
    <link rel="modulepreload" href="main.js" />
    <link rel="modulepreload" href="modules/canvas.js" />
    <link rel="modulepreload" href="modules/square.js" />
    <style>
      canvas {
        border: 1px solid black;
      }
    </style>

    <script type="module" src="main.js"></script>
  </head>
  <body></body>
</html>
```

## Spezifikationen

{{Specifications}}

## Browserkompatibilität

{{Compat}}

## Siehe auch

- [Spekulatives Laden](/de/docs/Web/Performance/Speculative_loading) für einen Vergleich von `<link rel="modulepreload">` und anderen ähnlichen Leistungsverbesserungsmerkmalen.
- [Preloading modules](https://web.dev/articles/modulepreload) auf web.dev
