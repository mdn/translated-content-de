---
title: rel="modulepreload"
slug: Web/HTML/Reference/Attributes/rel/modulepreload
l10n:
  sourceCommit: f529eadda54e8a3ed37b7c9d2182be61ce666b6a
---

Das **`modulepreload`** Schlüsselwort für das [`rel`](/de/docs/Web/HTML/Reference/Attributes/rel) Attribut des {{HTMLElement("link")}} Elements bietet eine deklarative Möglichkeit, ein [Modulskript](/de/docs/Web/JavaScript/Guide/Modules) vorzeitig abzurufen, es zu parsen und zu kompilieren und es in der Modulkarte des Dokuments zur späteren Ausführung zu speichern.

Das Vorabladen ermöglicht es, Module und deren Abhängigkeiten frühzeitig herunterzuladen und kann auch die gesamte Download- und Verarbeitungszeit erheblich reduzieren. Dies liegt daran, dass es den Seiten ermöglicht, Module parallel abzurufen, anstatt sie nacheinander zu verarbeiten, wenn jede Modulabhängigkeit entdeckt wird. Beachten Sie jedoch, dass Sie nicht einfach alles vorab laden können! Was Sie vorab laden möchten, muss im Gleichgewicht mit anderen Vorgängen stehen, die möglicherweise beeinträchtigt werden und sich negativ auf die Benutzererfahrung auswirken können.

Links mit `rel="modulepreload"` sind denen mit [`rel="preload"`](/de/docs/Web/HTML/Reference/Attributes/rel/preload) ähnlich. Der Hauptunterschied besteht darin, dass `preload` nur die Datei herunterlädt und im Cache speichert, während `modulepreload` das Modul abruft, es parst und kompiliert und die Ergebnisse in die Modulkarte einfügt, sodass es bereit zur Ausführung ist.

Bei der Verwendung von `modulepreload` ist der Abrufmodus immer [`cors`](/de/docs/Web/API/Request/mode#cors), und die [`crossorigin`](/de/docs/Web/HTML/Reference/Attributes/crossorigin) Eigenschaft wird verwendet, um den [Credential-Modus](/de/docs/Web/API/Request/credentials) der Anfrage zu bestimmen. Wenn `crossorigin` auf [`anonymous`](/de/docs/Web/HTML/Reference/Attributes/crossorigin#anonymous) oder [`""`](/de/docs/Web/HTML/Reference/Attributes/crossorigin#sect) (Standard) gesetzt ist, ist der Credential-Modus [`same-origin`](/de/docs/Web/API/Request/credentials#same-origin), und Benutzerinformationen wie Cookies und Authentifizierung werden nur für Anfragen mit `same-origin` gesendet. Wenn `crossorigin` auf [`use-credentials`](/de/docs/Web/HTML/Reference/Attributes/crossorigin#use-credentials) gesetzt ist, ist der Credential-Modus [`include`](/de/docs/Web/API/Request/credentials#include), und Benutzeranmeldedaten werden sowohl für single- als auch für cross-origin Anfragen gesendet.

Das [`as`](/de/docs/Web/HTML/Reference/Elements/link#as) Attribut ist optional für Links mit `rel="modulepreload"` und hat standardmäßig den Wert `"script"`. Es kann auf `"script"`, `"style"`, `"json"` oder jedes skriptähnliche Ziel gesetzt werden, wie `"audioworklet"`, `"paintworklet"`, `"serviceworker"`, `"sharedworker"` oder `"worker"`. Ein [`Event`](/de/docs/Web/API/Event/Event) mit dem Namen "error" wird auf dem Element ausgelöst, wenn ein anderes Ziel verwendet wird.

Ein Browser _kann_ zusätzlich auch die Abhängigkeiten der Modulressource automatisch abrufen. Beachten Sie jedoch, dass dies eine browserspezifische Optimierung ist — die einzige Möglichkeit, sicherzustellen, dass alle Browser versuchen, die Abhängigkeiten eines Moduls vorab zu laden, besteht darin, sie einzeln anzugeben! Außerdem werden die Ereignisse `load` oder `error` unmittelbar nach dem Erfolg oder Misserfolg des Ladens der _spezifizierten_ Ressourcen ausgelöst. Wenn Abhängigkeiten automatisch abgerufen werden, werden im Hauptthread keine zusätzlichen Ereignisse ausgelöst (obwohl Sie zusätzliche Anfragen in einem Service Worker oder auf dem Server überwachen können).

## Beispiele

Betrachten Sie das [basic-modules](https://github.com/mdn/js-examples/tree/main/module-examples/basic-modules) Beispiel ([Live-Version](https://mdn.github.io/js-examples/module-examples/basic-modules/)), das im [JavaScript-Module](/de/docs/Web/JavaScript/Guide/Modules#basic_example_structure) Leitfaden eingeführt wird.

Es hat eine Dateistruktur, wie unten gezeigt, die aus dem obersten Modul `main.js` besteht, das zwei Abhängigkeitsmodule `modules/canvas.js` und `modules/square.js` statisch mit der [`import` Anweisung](/de/docs/Web/JavaScript/Reference/Statements/import) importiert.

```plain
index.html
main.js
modules/
    canvas.js
    square.js
```

Das HTML für das untenstehende Beispiel zeigt, wie `main.js` in einem `<script>` Element abgerufen wird. Erst nachdem `main.js` geladen wurde, erkennt und lädt der Browser die beiden Abhängigkeitsmodule.

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

Das untenstehende HTML aktualisiert das Beispiel, um `<link>` Elemente mit `rel="modulepreload"` für die Hauptdatei und jedes der Abhängigkeitsmodule zu verwenden. Dies ist viel schneller, weil alle drei Module asynchron und parallel geladen werden, bevor sie benötigt werden. Wenn `main.js` analysiert und seine Abhängigkeiten bekannt sind, wurden sie bereits abgerufen und heruntergeladen.

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
