---
title: rel=modulepreload
slug: Web/HTML/Attributes/rel/modulepreload
l10n:
  sourceCommit: cb132bc83b660e51be8959de5336c00b08030104
---

{{HTMLSidebar}}

Das **`modulepreload`**-Schlüsselwort für das [`rel`](/de/docs/Web/HTML/Attributes/rel)-Attribut des {{HTMLElement("link")}} Elements bietet eine deklarative Möglichkeit, ein [Modul-Skript](/de/docs/Web/JavaScript/Guide/Modules) vorab zu holen, zu parsen und zu kompilieren und es in der Modulkarte des Dokuments für eine spätere Ausführung zu speichern.

Das Vorladen ermöglicht es, Module und deren Abhängigkeiten frühzeitig herunterzuladen und kann die gesamte Download- und Verarbeitungszeit deutlich reduzieren.
Dies liegt daran, dass es Seiten ermöglicht, Module parallel statt sequentiell zu holen, wenn jedes Modul verarbeitet und seine Abhängigkeiten entdeckt werden.
Beachten Sie jedoch, dass Sie nicht einfach alles vorladen können!
Was Sie wählen vorzulegen, muss im Verhältnis zu anderen Operationen stehen, die dann möglicherweise benachteiligt werden, was sich negativ auf die Benutzererfahrung auswirken kann.

Links mit `rel="modulepreload"` sind ähnlich wie jene mit [`rel="preload"`](/de/docs/Web/HTML/Attributes/rel/preload).
Der Hauptunterschied ist, dass `preload` nur die Datei herunterlädt und im Cache speichert, während `modulepreload` das Modul erhält, es parst und kompiliert und die Ergebnisse in die Modulkarte einträgt, sodass es bereit zur Ausführung ist.

Beim Verwenden von `modulepreload` ist der Abrufmodus der Anfrage immer [`cors`](/de/docs/Web/API/Request/mode#cors), und das [`crossorigin`](/de/docs/Web/HTML/Attributes/crossorigin)-Attribut wird verwendet, um den [Credential-Modus](/de/docs/Web/API/Request/credentials) der Anfrage zu bestimmen.
Wenn `crossorigin` auf [`anonymous`](/de/docs/Web/HTML/Attributes/crossorigin#anonymous) oder [`""`](/de/docs/Web/HTML/Attributes/crossorigin#sect1) (Standardwert) gesetzt ist, dann ist der Credential-Modus [`same-origin`](/de/docs/Web/API/Request/credentials#same-origin), und Benutzer-Zugangsdaten wie Cookies und Authentifizierung werden nur für Anfragen mit demselben Ursprung gesendet.
Wenn `crossorigin` auf [`use-credentials`](/de/docs/Web/HTML/Attributes/crossorigin#use-credentials) gesetzt ist, dann ist der Credential-Modus [`include`](/de/docs/Web/API/Request/credentials#include), und Benutzer-Zugangsdaten sowohl für Anfragen mit demselben Ursprung als auch für Cross-Origin-Anfragen.

Das [`as`](/de/docs/Web/HTML/Element/link#as)-Attribut ist optional für Links mit `rel="modulepreload"` und hat standardmäßig den Wert `"script"`.
Es kann auf `"script"` oder jedes script-ähnliche Ziel gesetzt werden, wie `"audioworklet"`, `"paintworklet"`, `"serviceworker"`, `"sharedworker"`, oder `"worker"`.
Ein [`Event`](/de/docs/Web/API/Event/Event) namens "error" wird auf dem Element ausgelöst, wenn ein anderes Ziel verwendet wird.

Ein Browser _kann_ zusätzlich auch wählen, automatisch Abhängigkeiten der Modul-Ressource zu holen.
Beachten Sie jedoch, dass dies eine browserspezifische Optimierung ist — die einzige Vorgehensweise, um sicherzustellen, dass alle Browser versuchen, die Abhängigkeiten eines Moduls zu Preload zu holen, besteht darin, sie einzeln anzugeben!
Des Weiteren werden die Ereignisse `load` oder `error` unmittelbar nach dem Erfolg oder dem Fehlschlag des Ladens der _spezifizierten_ Ressourcen ausgelöst.
Wenn Abhängigkeiten automatisch geholt werden, werden im Hauptthread keine zusätzlichen Ereignisse ausgelöst (obwohl Sie möglicherweise zusätzliche Anfragen in einem Service-Worker oder auf dem Server überwachen können).

## Beispiele

Betrachten Sie das Beispiel [basic-modules](https://github.com/mdn/js-examples/tree/main/module-examples/basic-modules) ([Live-Version](https://mdn.github.io/js-examples/module-examples/basic-modules/)), das im [JavaScript-Module](/de/docs/Web/JavaScript/Guide/Modules#basic_example_structure)-Leitfaden vorgestellt wird.

Dies hat eine Dateistruktur wie unten gezeigt, bestehend aus dem obersten Modul `main.js`, das zwei Abhängigkeitsmodule `modules/canvas.js` und `modules/square.js` mit der [`import` Anweisung](/de/docs/Web/JavaScript/Reference/Statements/import) statisch importiert.

```plain
index.html
main.js
modules/
    canvas.js
    square.js
```

Das folgende HTML für das Beispiel zeigt, wie `main.js` in einem `<script>`-Element geholt wird.
Erst nachdem `main.js` geladen wurde, entdeckt und lädt der Browser die beiden Abhängigkeitsmodule.

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

Das folgende HTML aktualisiert das Beispiel, um `<link>`-Elemente mit `rel="modulepreload"` für die Hauptdatei und jedes der Abhängigkeitsmodule zu verwenden.
Dies ist deutlich schneller, weil die drei Module alle asynchron und parallel herunterzuladen beginnen, bevor sie benötigt werden.
Zu dem Zeitpunkt, an dem `main.js` analysiert wurde und seine Abhängigkeiten bekannt sind, wurden sie bereits geholt und heruntergeladen.

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

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Spekulatives Laden](/de/docs/Web/Performance/Speculative_loading) für einen Vergleich von `<link rel="modulepreload">` und anderen ähnlichen Leistungsverbesserungsmerkmalen.
- [Preloading modules](https://web.dev/articles/modulepreload) auf web.dev
