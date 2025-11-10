---
title: rel="modulepreload"
slug: Web/HTML/Reference/Attributes/rel/modulepreload
l10n:
  sourceCommit: 0754cd805a8e010d2e3a2a065f634a3bcf358252
---

Das Schlüsselwort **`modulepreload`** für das [`rel`](/de/docs/Web/HTML/Reference/Attributes/rel)-Attribut des {{HTMLElement("link")}}-Elements bietet eine deklarative Möglichkeit, ein [Modulskript](/de/docs/Web/JavaScript/Guide/Modules) vorab abzurufen, zu parsen und zu kompilieren und es in der Modulkarte des Dokuments für eine spätere Ausführung zu speichern.

Das Vorabladen ermöglicht es, Module und ihre Abhängigkeiten frühzeitig herunterzuladen und kann die gesamte Download- und Verarbeitungszeit erheblich verkürzen.
Dies geschieht, indem Seiten Module parallel abrufen können, anstatt sie nacheinander zu verarbeiten, während deren Abhängigkeiten entdeckt werden.
Beachten Sie jedoch, dass Sie nicht alles vorab laden können!
Was Sie vorab laden, muss gegen andere Operationen abgewogen werden, die dann möglicherweise beeinträchtigt werden, was die Benutzererfahrung negativ beeinflussen könnte.

Links mit `rel="modulepreload"` ähneln denen mit [`rel="preload"`](/de/docs/Web/HTML/Reference/Attributes/rel/preload).
Der Hauptunterschied besteht darin, dass `preload` nur die Datei herunterlädt und im Cache speichert, während `modulepreload` das Modul erfasst, es parst und kompiliert und die Ergebnisse in die Modulkarte einfügt, damit es bereit zur Ausführung ist.

Beim Verwenden von `modulepreload` ist der Abrufanforderungsmodus immer [`cors`](/de/docs/Web/API/Request/mode#cors), und die [`crossorigin`](/de/docs/Web/HTML/Reference/Attributes/crossorigin)-Eigenschaft wird verwendet, um den Anforderungs-[Zugangsmodus](/de/docs/Web/API/Request/credentials) zu bestimmen.
Wenn `crossorigin` auf [`anonymous`](/de/docs/Web/HTML/Reference/Attributes/crossorigin#anonymous) oder [`""`](/de/docs/Web/HTML/Reference/Attributes/crossorigin#sect) (Standard) gesetzt ist, dann ist der Zugangsmodus [`same-origin`](/de/docs/Web/API/Request/credentials#same-origin), und Benutzerdaten wie Cookies und Authentifizierung werden nur für Anfragen mit derselben Herkunft gesendet.
Wenn `crossorigin` auf [`use-credentials`](/de/docs/Web/HTML/Reference/Attributes/crossorigin#use-credentials) gesetzt ist, dann ist der Zugangsmodus [`include`](/de/docs/Web/API/Request/credentials#include), und Benutzerdaten werden für sowohl gleiche als auch unterschiedliche Herkunftsanfragen gesendet.

Das [`as`](/de/docs/Web/HTML/Reference/Elements/link#as)-Attribut ist optional für Links mit `rel="modulepreload"` und standardmäßig auf `"script"` gesetzt.
Es kann auf `"script"` oder ein scriptähnliches Ziel gesetzt werden, wie zum Beispiel `"audioworklet"`, `"paintworklet"`, `"serviceworker"`, `"sharedworker"` oder `"worker"`.
Ein [`Event`](/de/docs/Web/API/Event/Event) mit dem Namen "error" wird auf dem Element ausgelöst, wenn ein anderes Ziel verwendet wird.

Ein Browser _kann_ zusätzlich auch wählen, automatisch alle Abhängigkeiten der Modulressource abzurufen.
Beachten Sie jedoch, dass dies eine browser-spezifische Optimierung ist — der einzige Ansatz, um sicherzustellen, dass alle Browser versuchen, die Abhängigkeiten eines Moduls vorab zu laden, ist, diese einzeln anzugeben!
Weiterhin werden die Ereignisse `load` oder `error` unmittelbar nach dem Erfolg oder Misserfolg des Ladens der _spezifizierten_ Ressourcen ausgelöst.
Wenn Abhängigkeiten automatisch abgerufen werden, werden keine zusätzlichen Ereignisse im Haupt-Thread ausgelöst (obwohl Sie zusätzliche Anfragen in einem Service Worker oder auf dem Server überwachen könnten).

## Beispiele

Betrachten Sie das [basic-modules](https://github.com/mdn/js-examples/tree/main/module-examples/basic-modules)-Beispiel ([Live-Version](https://mdn.github.io/js-examples/module-examples/basic-modules/)), das im [JavaScript-Module](/de/docs/Web/JavaScript/Guide/Modules#basic_example_structure)-Leitfaden eingeführt wird.

Dies hat eine Dateistruktur, wie unten gezeigt, bestehend aus dem obersten Modul `main.js`, das mit der [`import`-Anweisung](/de/docs/Web/JavaScript/Reference/Statements/import) zwei Abhängigkeitsmodule `modules/canvas.js` und `modules/square.js` statisch importiert.

```plain
index.html
main.js
modules/
    canvas.js
    square.js
```

Das HTML für das Beispiel unten zeigt, wie `main.js` in einem `<script>`-Element abgerufen wird.
Erst nachdem `main.js` geladen wurde, entdeckt und ruft der Browser die beiden Abhängigkeitsmodule ab.

```html
<!doctype html>
<html lang="en-US">
  <head>
    <meta charset="utf-8" />
    <title>Basic JavaScript module example</title>
    <script type="module" src="main.js"></script>
  </head>
  <body></body>
</html>
```

Das HTML unten aktualisiert das Beispiel, um `<link>`-Elemente mit `rel="modulepreload"` für die Hauptdatei und jedes der Abhängigkeitsmodule zu verwenden.
Dies ist viel schneller, weil die drei Module alle asynchron und parallel heruntergeladen werden, bevor sie benötigt werden.
Zu dem Zeitpunkt, an dem `main.js` geparst wurde und seine Abhängigkeiten bekannt sind, wurden sie bereits abgerufen und heruntergeladen.

```html
<!doctype html>
<html lang="en-US">
  <head>
    <meta charset="utf-8" />
    <title>Basic JavaScript module example</title>
    <link rel="modulepreload" href="main.js" />
    <link rel="modulepreload" href="modules/canvas.js" />
    <link rel="modulepreload" href="modules/square.js" />
    <script type="module" src="main.js"></script>
  </head>
  <body></body>
</html>
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Spekulatives Laden](/de/docs/Web/Performance/Guides/Speculative_loading) für einen Vergleich von `<link rel="modulepreload">` und anderen ähnlichen Leistungsverbesserungsfunktionen.
- [Preloading modules](https://web.dev/articles/modulepreload) auf web.dev
