---
title: rel=modulepreload
slug: Web/HTML/Attributes/rel/modulepreload
l10n:
  sourceCommit: 31ff21cf5f083a3258fc04267d54b1fb72224ff6
---

{{HTMLSidebar}}

Das **`modulepreload`** Schlüsselwort für das [`rel`](/de/docs/Web/HTML/Attributes/rel)-Attribut des {{HTMLElement("link")}} Elements bietet eine deklarative Möglichkeit, ein [Modulskript](/de/docs/Web/JavaScript/Guide/Modules) vorab abzurufen, zu parsen und zu kompilieren, und im Modul-Map des Dokuments zu speichern, um es später auszuführen.

Preloading ermöglicht es, Module und deren Abhängigkeiten frühzeitig herunterzuladen und kann auch die gesamte Download- und Verarbeitungszeit erheblich reduzieren.
Dies liegt daran, dass es Seiten ermöglicht, Module parallel abzurufen, anstatt sie sequenziell zu verarbeiten, sobald jedes Modul verarbeitet und seine Abhängigkeiten entdeckt werden.
Beachten Sie jedoch, dass Sie nicht einfach alles vorab laden können!
Was Sie vorab laden, muss gegen andere Operationen abgewogen werden, die sonst möglicherweise Ressourcen knapp machen und die Benutzererfahrung negativ beeinflussen.

Links mit `rel="modulepreload"` sind denen mit [`rel="preload"`](/de/docs/Web/HTML/Attributes/rel/preload) ähnlich.
Der Hauptunterschied besteht darin, dass `preload` nur die Datei herunterlädt und im Cache speichert, während `modulepreload` das Modul abruft, parst und kompiliert, und die Ergebnisse in die Modul-Map einspeichert, sodass es bereit zur Ausführung ist.

Beim Verwenden von `modulepreload` ist der Abrufmodus der Anfrage immer [`cors`](/de/docs/Web/API/Request/mode#cors), und die [`crossorigin`](/de/docs/Web/HTML/Attributes/crossorigin)-Eigenschaft wird verwendet, um den Anfragemodus der [Anmeldeinformationen](/de/docs/Web/API/Request/credentials) zu bestimmen.
Wenn `crossorigin` auf [`anonymous`](/de/docs/Web/HTML/Attributes/crossorigin#anonymous) oder [`""`](/de/docs/Web/HTML/Attributes/crossorigin#sect1) (Standard) gesetzt ist, dann ist der Anmeldeinformationenmodus [`same-origin`](/de/docs/Web/API/Request/credentials#same-origin), und Benutzeranmeldeinformationen wie Cookies und Authentifizierung werden nur für Anfragen mit `same-origin` gesendet.
Wenn `crossorigin` auf [`use-credentials`](/de/docs/Web/HTML/Attributes/crossorigin#use-credentials) gesetzt ist, dann ist der Anmeldeinformationenmodus [`include`](/de/docs/Web/API/Request/credentials#include), und Benutzeranmeldeinformationen für sowohl Einzel- als auch Cross-Origin-Anfragen.

Das [`as`](/de/docs/Web/HTML/Element/link#as)-Attribut ist optional für Links mit `rel="modulepreload"` und hat standardmäßig den Wert `"script"`.
Es kann auf `"script"` oder ein skriptähnliches Ziel wie `"audioworklet"`, `"paintworklet"`, `"serviceworker"`, `"sharedworker"` oder `"worker"` gesetzt werden.
Ein [`Event`](/de/docs/Web/API/Event/Event) namens "error" wird auf dem Element ausgelöst, wenn ein anderes Ziel verwendet wird.

Ein Browser _kann_ zusätzlich auch wählen, automatisch Abhängigkeiten der Modulressource abzurufen.
Beachten Sie jedoch, dass dies eine browserspezifische Optimierung ist — der einzige Ansatz, um sicherzustellen, dass alle Browser versuchen, die Abhängigkeiten eines Moduls vorab zu laden, besteht darin, sie einzeln anzugeben!
Des Weiteren werden die Ereignisse `load` oder `error` unmittelbar nach Erfolg oder Misserfolg des Ladens der _angegebenen_ Ressourcen ausgelöst.
Wenn Abhängigkeiten automatisch abgerufen werden, werden im Hauptthread keine zusätzlichen Ereignisse ausgelöst (obwohl Sie möglicherweise zusätzliche Anfragen in einem Service Worker oder auf dem Server überwachen).

## Beispiele

Betrachten Sie das [basic-modules](https://github.com/mdn/js-examples/tree/main/module-examples/basic-modules) Beispiel ([Live-Version](https://mdn.github.io/js-examples/module-examples/basic-modules/)), eingeführt im [JavaScript-Module](/de/docs/Web/JavaScript/Guide/Modules#basic_example_structure) Leitfaden.

Dieses hat die unten gezeigte Dateistruktur, bestehend aus dem obersten Modul `main.js`, das mit der [`import` Anweisung](/de/docs/Web/JavaScript/Reference/Statements/import) zwei Abhängigkeitsmodule `modules/canvas.js` und `modules/square.js` statisch importiert.

```plain
index.html
main.js
modules/
    canvas.js
    square.js
```

Der HTML-Code für das folgende Beispiel zeigt, wie `main.js` in einem `<script>`-Element abgerufen wird.
Erst nachdem `main.js` geladen wurde, entdeckt der Browser die zwei Abhängigkeitsmodule und ruft sie ab.

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

Der HTML-Code unten aktualisiert das Beispiel, indem `<link>`-Elemente mit `rel="modulepreload"` für die Hauptdatei und jedes der Abhängigkeitsmodule verwendet werden.
Dies ist viel schneller, weil die drei Module alle asynchron und parallel herunterzuladen beginnen, bevor sie benötigt werden.
Bis `main.js` geparst ist und seine Abhängigkeiten bekannt sind, wurden sie bereits abgerufen und heruntergeladen.

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
- [Preloading modules](https://web.dev/articles/modulepreload) auf web.dev
