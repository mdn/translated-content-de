---
title: rel=modulepreload
slug: Web/HTML/Attributes/rel/modulepreload
l10n:
  sourceCommit: cb132bc83b660e51be8959de5336c00b08030104
---

{{HTMLSidebar}}

Das Schlüsselwort **`modulepreload`** für das [`rel`](/de/docs/Web/HTML/Attributes/rel)-Attribut des {{HTMLElement("link")}}-Elements bietet eine deklarative Möglichkeit, ein [Modulskript](/de/docs/Web/JavaScript/Guide/Modules) im Voraus abzurufen, zu parsen und zu kompilieren und es im Modulverzeichnis des Dokuments für eine spätere Ausführung zu speichern.

Preloading ermöglicht es, Module und deren Abhängigkeiten frühzeitig herunterzuladen, was die Gesamtzeit für den Download und die Verarbeitung erheblich reduzieren kann. Dies liegt daran, dass es Seiten erlaubt, Module parallel abzurufen, anstatt sie sequentiell zu verarbeiten, wenn jedes Modul und dessen Abhängigkeiten entdeckt werden. Beachten Sie jedoch, dass Sie nicht einfach alles vorladen können! Was Sie vorladen möchten, muss im Verhältnis zu anderen Vorgängen stehen, die dadurch möglicherweise behindert werden und die Benutzererfahrung beeinträchtigen.

Links mit `rel="modulepreload"` sind ähnlich wie solche mit [`rel="preload"`](/de/docs/Web/HTML/Attributes/rel/preload). Der Hauptunterschied besteht darin, dass `preload` nur die Datei herunterlädt und im Cache speichert, während `modulepreload` das Modul erhält, es parst und kompiliert und die Ergebnisse in die Modulkarte einfügt, sodass es bereit zur Ausführung ist.

Beim Verwenden von `modulepreload` ist der Abrufmodus immer [`cors`](/de/docs/Web/API/Request/mode#cors), und die [`crossorigin`](/de/docs/Web/HTML/Attributes/crossorigin)-Eigenschaft wird verwendet, um den [Anmeldemodus](/de/docs/Web/API/Request/credentials) der Anfrage zu bestimmen. Wenn `crossorigin` auf [`anonymous`](/de/docs/Web/HTML/Attributes/crossorigin#anonymous) oder [`""`](/de/docs/Web/HTML/Attributes/crossorigin#sect1) (Standard) gesetzt ist, ist der Anmeldemodus [`same-origin`](/de/docs/Web/API/Request/credentials#same-origin), und Benutzeranmeldedaten wie Cookies und Authentifizierung werden nur für Anfragen mit der gleichen Herkunft gesendet. Wenn `crossorigin` auf [`use-credentials`](/de/docs/Web/HTML/Attributes/crossorigin#use-credentials) gesetzt ist, ist der Anmeldemodus [`include`](/de/docs/Web/API/Request/credentials#include), und Benutzeranmeldedaten werden sowohl für Anfragen mit gleicher als auch unterschiedlicher Herkunft gesendet.

Das [`as`](/de/docs/Web/HTML/Element/link#as)-Attribut ist optional für Links mit `rel="modulepreload"` und hat standardmäßig den Wert `"script"`. Es kann auf `"script"` oder ein beliebiges scriptähnliches Ziel gesetzt werden, wie `"audioworklet"`, `"paintworklet"`, `"serviceworker"`, `"sharedworker"` oder `"worker"`. Ein [`Event`](/de/docs/Web/API/Event/Event) namens "error" wird auf dem Element ausgelöst, wenn ein anderes Ziel verwendet wird.

Ein Browser _kann_ sich zusätzlich dafür entscheiden, auch alle Abhängigkeiten der Modulressource automatisch abzurufen. Beachten Sie jedoch, dass dies eine browser-spezifische Optimierung ist – der einzige Ansatz, um sicherzustellen, dass alle Browser versuchen, die Abhängigkeiten eines Moduls vorzulanen, besteht darin, diese individuell anzugeben! Darüber hinaus werden die Ereignisse `load` oder `error` sofort nach Erfolg oder Fehlschlagen des Ladens der _spezifizierten_ Ressourcen ausgelöst. Wenn Abhängigkeiten automatisch abgerufen werden, werden im Hauptthread keine zusätzlichen Ereignisse ausgelöst (obwohl Sie möglicherweise zusätzliche Anfragen in einem Service Worker oder auf dem Server überwachen können).

## Beispiele

Betrachten Sie das [basic-modules](https://github.com/mdn/js-examples/tree/main/module-examples/basic-modules)-Beispiel ([Live-Version](https://mdn.github.io/js-examples/module-examples/basic-modules/)), das im [JavaScript-Module](/de/docs/Web/JavaScript/Guide/Modules#basic_example_structure) Leitfaden eingeführt wurde.

Dies hat eine Dateistruktur wie unten gezeigt, bestehend aus dem Top-Level-Modul `main.js`, das zwei Abhängigkeitsmodule `modules/canvas.js` und `modules/square.js` statisch mit der [`import`-Anweisung](/de/docs/Web/JavaScript/Reference/Statements/import) importiert.

```plain
index.html
main.js
modules/
    canvas.js
    square.js
```

Das HTML für das untenstehende Beispiel zeigt, wie `main.js` in einem `<script>`-Element abgerufen wird. Erst nachdem `main.js` geladen wurde, entdeckt der Browser die zwei Abhängigkeitsmodule und lädt sie ab.

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

Das untenstehende HTML aktualisiert das Beispiel zur Verwendung von `<link>`-Elementen mit `rel="modulepreload"` für die Hauptdatei und jedes der Abhängigkeitsmodule. Dies ist viel schneller, weil die drei Module alle asynchron und parallel starten, bevor sie benötigt werden. Wenn `main.js` geparst wurde und seine Abhängigkeiten bekannt sind, wurden sie bereits abgerufen und heruntergeladen.

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

- [Spekulatives Laden](/de/docs/Web/Performance/Speculative_loading) für einen Vergleich von `<link rel="modulepreload">` und anderen ähnlichen Leistungsverbesserungsfunktionen.
- [Module vorladen](https://web.dev/articles/modulepreload) auf web.dev
