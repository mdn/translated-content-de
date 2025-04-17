---
title: rel="modulepreload"
slug: Web/HTML/Reference/Attributes/rel/modulepreload
l10n:
  sourceCommit: 0389dd29e0827791ad9d2f6b8cda217c121f9c19
---

{{HTMLSidebar}}

Das **`modulepreload`** Schlüsselwort für das [`rel`](/de/docs/Web/HTML/Reference/Attributes/rel) Attribut des {{HTMLElement("link")}} Elements bietet eine deklarative Methode, um ein [Modul-Skript](/de/docs/Web/JavaScript/Guide/Modules) vorab abzurufen, zu parsen, zu kompilieren und es in der Modulkarte des Dokuments zu speichern, damit es später ausgeführt werden kann.

Vorladen ermöglicht es Modulen und ihren Abhängigkeiten, frühzeitig heruntergeladen zu werden, und kann die gesamte Download- und Verarbeitungszeit erheblich verkürzen. Dies liegt daran, dass Seiten Module parallel laden können, anstatt sie sequentiell zu verarbeiten, wenn jedes Modul bearbeitet wird und seine Abhängigkeiten entdeckt werden. Beachten Sie jedoch, dass Sie nicht einfach alles vorladen können! Was Sie vorab laden möchten, muss gegen andere Vorgänge abgewogen werden, die dann möglicherweise behindert werden und die Benutzererfahrung negativ beeinflussen.

Links mit `rel="modulepreload"` sind ähnlich wie jene mit [`rel="preload"`](/de/docs/Web/HTML/Reference/Attributes/rel/preload). Der Hauptunterschied besteht darin, dass `preload` nur die Datei herunterlädt und im Cache speichert, während `modulepreload` das Modul erfasst, parst, kompiliert und die Ergebnisse in die Modulkarte einträgt, sodass es bereit ist zur Ausführung.

Beim Einsatz von `modulepreload` ist der Anfragemodus immer [`cors`](/de/docs/Web/API/Request/mode#cors), und die [`crossorigin`](/de/docs/Web/HTML/Reference/Attributes/crossorigin) Eigenschaft wird verwendet, um den Anfragemodus für [Credentials](/de/docs/Web/API/Request/credentials) zu bestimmen. Wenn `crossorigin` auf [`anonymous`](/de/docs/Web/HTML/Reference/Attributes/crossorigin#anonymous) oder [`""`](/de/docs/Web/HTML/Reference/Attributes/crossorigin#sect) (Standard) gesetzt ist, dann ist der Credenitals-Modus [`same-origin`](/de/docs/Web/API/Request/credentials#same-origin), und Benutzer-Credentials wie Cookies und Authentifizierung werden nur für Anfragen mit `same-origin` gesendet. Wenn `crossorigin` auf [`use-credentials`](/de/docs/Web/HTML/Reference/Attributes/crossorigin#use-credentials) gesetzt ist, dann ist der Credentials-Modus [`include`](/de/docs/Web/API/Request/credentials#include), und Benutzer-Credentials werden sowohl für Einzeleinheits- als auch für Cross-Origin-Anfragen gesendet.

Das [`as`](/de/docs/Web/HTML/Reference/Elements/link#as) Attribut ist für Links mit `rel="modulepreload"` optional und standardmäßig auf `"script"` gesetzt. Es kann auf `"script"` oder jedes skriptartige Ziel gesetzt werden, wie zum Beispiel `"audioworklet"`, `"paintworklet"`, `"serviceworker"`, `"sharedworker"` oder `"worker"`. Ein [`Event`](/de/docs/Web/API/Event/Event) namens "error" wird auf dem Element ausgelöst, wenn ein anderes Ziel verwendet wird.

Ein Browser _kann_ sich zusätzlich auch dafür entscheiden, automatisch alle Abhängigkeiten der Modulressource abzurufen. Beachten Sie jedoch, dass dies eine browserspezifische Optimierung ist — der einzige Ansatz, um sicherzustellen, dass alle Browser versuchen, die Abhängigkeiten eines Moduls vorzuladen, besteht darin, sie einzeln anzugeben! Weiterhin werden die Ereignisse `load` oder `error` sofort nach Erfolg oder Misserfolg des Ladens der _angegebenen_ Ressourcen ausgelöst. Wenn Abhängigkeiten automatisch abgerufen werden, werden keine zusätzlichen Ereignisse im Haupt-Thread ausgelöst (obwohl Sie möglicherweise zusätzliche Anfragen in einem Service Worker oder auf dem Server überwachen).

## Beispiele

Betrachten Sie das [basic-modules](https://github.com/mdn/js-examples/tree/main/module-examples/basic-modules) Beispiel ([Live-Version](https://mdn.github.io/js-examples/module-examples/basic-modules/)), eingeführt im [JavaScript-Module](/de/docs/Web/JavaScript/Guide/Modules#basic_example_structure) Leitfaden.

Dies hat eine Dateistruktur wie unten gezeigt, bestehend aus dem Top-Level-Modul `main.js`, das statisch zwei Abhängigkeitsmodule `modules/canvas.js` und `modules/square.js` mit der [`import` Anweisung](/de/docs/Web/JavaScript/Reference/Statements/import) importiert.

```plain
index.html
main.js
modules/
    canvas.js
    square.js
```

Das HTML für das untenstehende Beispiel zeigt, wie `main.js` in einem `<script>` Element abgerufen wird. Erst nachdem `main.js` geladen wurde, entdeckt der Browser die beiden Abhängigkeitsmodule und lädt sie.

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

Das untenstehende HTML aktualisiert das Beispiel zur Nutzung von `<link>` Elementen mit `rel="modulepreload"` für die Hauptdatei und jedes der Abhängigkeitsmodule. Dies ist wesentlich schneller, weil die drei Module alle asynchron und parallel heruntergeladen werden, bevor sie benötigt werden. Zu dem Zeitpunkt, an dem `main.js` geparst wurde und seine Abhängigkeiten bekannt sind, wurden sie bereits abgerufen und heruntergeladen.

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

- [Spekulatives Laden](/de/docs/Web/Performance/Guides/Speculative_loading) für einen Vergleich von `<link rel="modulepreload">` und anderen ähnlichen Leistungsverbesserungsfunktionen.
- [Vorladung von Modulen](https://web.dev/articles/modulepreload) auf web.dev
