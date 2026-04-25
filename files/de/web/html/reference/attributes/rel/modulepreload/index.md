---
title: '`rel="modulepreload"` HTML-Attributwert'
short-title: modulepreload
slug: Web/HTML/Reference/Attributes/rel/modulepreload
l10n:
  sourceCommit: bf5017c389132af39b50106cf1763fa7106e87b4
---

Das **`modulepreload`** Stichwort für das [`rel`](/de/docs/Web/HTML/Reference/Attributes/rel) Attribut des {{HTMLElement("link")}}-Elements bietet eine deklarative Möglichkeit, ein [Modulskript](/de/docs/Web/JavaScript/Guide/Modules) vorab abzurufen, zu parsen und zu kompilieren, und es in der Modul-Map des Dokuments für die spätere Ausführung zu speichern.

Preloading ermöglicht es, Module und deren Abhängigkeiten frühzeitig herunterzuladen, was die Gesamtzeit für den Download und die Verarbeitung erheblich reduzieren kann. Dies liegt daran, dass es Seiten erlaubt, Module parallel anstatt sequentiell zu laden, also nicht erst dann, wenn jedes Modul verarbeitet wurde und dessen Abhängigkeiten entdeckt worden sind. Beachten Sie jedoch, dass Sie nicht einfach alles preloaden können! Was Sie preloaden möchten, muss gegen andere Vorgänge abgewogen werden, die dann möglicherweise verhungern und die Benutzererfahrung negativ beeinflussen könnten.

Links mit `rel="modulepreload"` sind denjenigen mit [`rel="preload"`](/de/docs/Web/HTML/Reference/Attributes/rel/preload) ähnlich. Der Hauptunterschied besteht darin, dass `preload` nur die Datei herunterlädt und im Cache speichert, während `modulepreload` das Modul abruft, parst und kompiliert und die Ergebnisse in die Modul-Map einfügt, sodass es bereit zur Ausführung ist.

Beim Verwenden von `modulepreload` ist der Modus des Abrufauftrags immer [`cors`](/de/docs/Web/API/Request/mode#cors), und das [`crossorigin`](/de/docs/Web/HTML/Reference/Attributes/crossorigin) Attribut wird verwendet, um den Anmeldemodus der Anfrage zu bestimmen. Wenn `crossorigin` auf [`anonymous`](/de/docs/Web/HTML/Reference/Attributes/crossorigin#anonymous) oder [`""`](/de/docs/Web/HTML/Reference/Attributes/crossorigin#sect) (Standard) gesetzt ist, dann ist der Anmeldemodus [`same-origin`](/de/docs/Web/API/Request/credentials#same-origin), und Benutzeranmeldungen wie Cookies und Authentifizierung werden nur für Anfragen mit `same-origin` gesendet. Wenn `crossorigin` auf [`use-credentials`](/de/docs/Web/HTML/Reference/Attributes/crossorigin#use-credentials) gesetzt ist, dann ist der Anmeldemodus [`include`](/de/docs/Web/API/Request/credentials#include), und Benutzeranmeldungen werden für Anfragen sowohl gleicher als auch unterschiedlicher Herkunft gesendet.

Das [`as`](/de/docs/Web/HTML/Reference/Elements/link#as) Attribut ist optional für Links mit `rel="modulepreload"`, und standardmäßig auf `"script"` gesetzt. Es kann auf `"script"`, `"style"`, `"json"` oder jedes skriptähnliche Ziel, wie `"audioworklet"`, `"paintworklet"`, `"serviceworker"`, `"sharedworker"` oder `"worker"` gesetzt werden. Ein [`Event`](/de/docs/Web/API/Event/Event) mit dem Namen "error" wird auf dem Element ausgelöst, wenn ein anderes Ziel verwendet wird.

Ein Browser _kann_ darüber hinaus auch wählen, alle Abhängigkeiten der Modulressource automatisch abzurufen. Beachten Sie jedoch, dass dies eine browserspezifische Optimierung ist – der einzige Ansatz, um sicherzustellen, dass alle Browser versuchen, die Abhängigkeiten eines Moduls vorab zu laden, ist, sie individuell anzugeben! Weiterhin werden die Events `load` oder `error` sofort nach Erfolg oder Fehlschlag des Ladens der _spezifizierten_ Ressourcen ausgelöst. Wenn Abhängigkeiten automatisch abgerufen werden, werden keine zusätzlichen Events im Hauptthread ausgelöst (obwohl Sie zusätzliche Anfragen in einem Service Worker oder auf dem Server überwachen könnten).

## Beispiele

Betrachten Sie das [basic-modules](https://github.com/mdn/js-examples/tree/main/module-examples/basic-modules) Beispiel ([Live-Version](https://mdn.github.io/js-examples/module-examples/basic-modules/)), eingeführt im [JavaScript-Module](/de/docs/Web/JavaScript/Guide/Modules#basic_example_structure) Leitfaden.

Dieses hat eine Dateistruktur wie unten gezeigt, bestehend aus dem Modul der obersten Ebene `main.js`, welches zwei Abhängigkeitsmodule statisch importiert: `modules/canvas.js` und `modules/square.js` unter Verwendung des [`import` Befehls](/de/docs/Web/JavaScript/Reference/Statements/import).

```plain
index.html
main.js
modules/
    canvas.js
    square.js
```

Das HTML für das unten stehende Beispiel zeigt, wie `main.js` in einem `<script>` Element abgerufen wird. Erst nachdem `main.js` geladen wurde, entdeckt und holt der Browser die beiden Abhängigkeitsmodule.

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

Das unten stehende HTML aktualisiert das Beispiel, um `<link>` Elemente mit `rel="modulepreload"` für die Hauptdatei und jedes der Abhängigkeitsmodule zu verwenden. Dies ist viel schneller, da die drei Module alle asynchron und parallel zu laden beginnen, bevor sie benötigt werden. Wenn `main.js` geparst wurde und seine Abhängigkeiten bekannt sind, wurden sie bereits abgerufen und heruntergeladen.

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
