---
title: rel=modulepreload
slug: Web/HTML/Reference/Attributes/rel/modulepreload
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{HTMLSidebar}}

Das **`modulepreload`**-Schlüsselwort für das [`rel`](/de/docs/Web/HTML/Reference/Attributes/rel)-Attribut des {{HTMLElement("link")}}-Elements bietet eine deklarative Möglichkeit, ein [Modul-Skript](/de/docs/Web/JavaScript/Guide/Modules) im Voraus abzurufen, zu parsen und zu kompilieren und es in der Modulkarte des Dokuments für die spätere Ausführung zu speichern.

Preloading ermöglicht es, Module und deren Abhängigkeiten frühzeitig herunterzuladen und kann auch die Gesamtzeit für den Download und die Verarbeitung erheblich reduzieren. Dies liegt daran, dass es Seiten erlaubt, Module parallel herunterzuladen, anstatt sie nacheinander zu verarbeiten, wenn jedes Modul bearbeitet wird und seine Abhängigkeiten entdeckt werden. Beachten Sie jedoch, dass Sie nicht einfach alles preloaden können! Was Sie preloaden, muss gegen andere Operationen abgewogen werden, die dadurch möglicherweise beeinträchtigt werden und die Benutzererfahrung negativ beeinflussen.

Links mit `rel="modulepreload"` sind ähnlich wie solche mit [`rel="preload"`](/de/docs/Web/HTML/Reference/Attributes/rel/preload). Der Hauptunterschied besteht darin, dass `preload` nur die Datei herunterlädt und im Cache speichert, während `modulepreload` das Modul erhält, es parst und kompiliert und die Ergebnisse in die Modulkarte einfügt, sodass es ausführungsbereit ist.

Beim Einsatz von `modulepreload` ist der Abrufmodus immer [`cors`](/de/docs/Web/API/Request/mode#cors), und die [`crossorigin`](/de/docs/Web/HTML/Reference/Attributes/crossorigin)-Eigenschaft wird verwendet, um den [Anmeldemodus](/de/docs/Web/API/Request/credentials) der Anfrage zu bestimmen. Wenn `crossorigin` auf [`anonymous`](/de/docs/Web/HTML/Reference/Attributes/crossorigin#anonymous) oder [`""`](/de/docs/Web/HTML/Reference/Attributes/crossorigin#sect) (Standard) gesetzt ist, dann ist der Anmeldemodus [`same-origin`](/de/docs/Web/API/Request/credentials#same-origin), und Benutzeranmeldedaten wie Cookies und Authentifizierung werden nur für Anfragen mit demselben Ursprung gesendet. Wenn `crossorigin` auf [`use-credentials`](/de/docs/Web/HTML/Reference/Attributes/crossorigin#use-credentials) gesetzt ist, dann ist der Anmeldemodus [`include`](/de/docs/Web/API/Request/credentials#include), und Benutzeranmeldedaten werden sowohl für Einzel- als auch für Cross-Origin-Anfragen gesendet.

Das [`as`](/de/docs/Web/HTML/Reference/Elements/link#as)-Attribut ist optional für Links mit `rel="modulepreload"` und standardmäßig auf `"script"` gesetzt. Es kann auf `"script"` oder jedes skriptähnliche Ziel gesetzt werden, wie `"audioworklet"`, `"paintworklet"`, `"serviceworker"`, `"sharedworker"` oder `"worker"`. Ein [`Event`](/de/docs/Web/API/Event/Event) mit dem Namen "error" wird auf dem Element ausgelöst, wenn ein anderes Ziel verwendet wird.

Ein Browser _kann_ zusätzlich auch automatisch alle Abhängigkeiten der Modulressource abrufen. Beachten Sie jedoch, dass dies eine browser-spezifische Optimierung ist — der einzige Ansatz, um sicherzustellen, dass alle Browser versuchen, die Abhängigkeiten eines Moduls vorzuladen, besteht darin, sie einzeln anzugeben! Darüber hinaus werden die Events namens `load` oder `error` unmittelbar nach Erfolg oder Misserfolg des Ladens der _spezifizierten_ Ressourcen ausgelöst. Wenn Abhängigkeiten automatisch abgerufen werden, werden im Hauptthread keine zusätzlichen Ereignisse ausgelöst (obwohl Sie möglicherweise zusätzliche Anfragen in einem Service Worker oder auf dem Server überwachen können).

## Beispiele

Betrachten Sie das [basic-modules](https://github.com/mdn/js-examples/tree/main/module-examples/basic-modules) Beispiel ([Live-Version](https://mdn.github.io/js-examples/module-examples/basic-modules/)), das im [JavaScript modules](/de/docs/Web/JavaScript/Guide/Modules#basic_example_structure) Leitfaden eingeführt wird.

Dies hat eine Dateistruktur, wie unten gezeigt, die aus dem obersten Modul `main.js` besteht, das statisch zwei Abhängigkeits-Module `modules/canvas.js` und `modules/square.js` mit der [`import` Anweisung](/de/docs/Web/JavaScript/Reference/Statements/import) importiert.

```plain
index.html
main.js
modules/
    canvas.js
    square.js
```

Das HTML für das Beispiel unten zeigt, wie `main.js` in einem `<script>`-Element abgerufen wird. Erst nachdem `main.js` geladen wurde, entdeckt der Browser die zwei Abhängigkeits-Module und lädt sie.

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

Das unten stehende HTML aktualisiert das Beispiel, indem `<link>`-Elemente mit `rel="modulepreload"` für die Hauptdatei und jede der Abhängigkeits-Module verwendet werden. Dies ist wesentlich schneller, da alle drei Module asynchron und parallel gestartet werden, bevor sie benötigt werden. Wenn `main.js` geparst ist und seine Abhängigkeiten bekannt sind, sind diese bereits abgerufen und heruntergeladen.

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

- [Speculative loading](/de/docs/Web/Performance/Guides/Speculative_loading) für einen Vergleich von `<link rel="modulepreload">` und anderen ähnlichen Leistungsverbesserungsmerkmalen.
- [Preloading modules](https://web.dev/articles/modulepreload) auf web.dev
