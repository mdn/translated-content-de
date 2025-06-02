---
title: rel="modulepreload"
slug: Web/HTML/Reference/Attributes/rel/modulepreload
l10n:
  sourceCommit: fc52eb81b630ca02c16addc346924295bdb5aaa8
---

{{HTMLSidebar}}

Das **`modulepreload`** Schlüsselwort für das [`rel`](/de/docs/Web/HTML/Reference/Attributes/rel) Attribut des {{HTMLElement("link")}} Elements bietet eine deklarative Möglichkeit, ein [Modulskript](/de/docs/Web/JavaScript/Guide/Modules) vorausgreifend abzurufen, zu parsen und zu kompilieren und es in der Modulkarte des Dokuments zur späteren Ausführung zu speichern.

Durch Preloading können Module und deren Abhängigkeiten frühzeitig heruntergeladen werden, was die gesamte Download- und Verarbeitungszeit erheblich reduzieren kann.
Dies liegt daran, dass Seiten Module parallel abrufen können, anstatt sie nacheinander zu verarbeiten, während jede Modul- und Abhängigkeitsentdeckung erfolgt.
Beachten Sie jedoch, dass nicht alles einfach vorab geladen werden kann!
Was Sie vorab laden, muss gegen andere Vorgänge abgewogen werden, die möglicherweise beeinträchtigt werden und die Nutzererfahrung negativ beeinflussen könnten.

Links mit `rel="modulepreload"` ähneln denen mit [`rel="preload"`](/de/docs/Web/HTML/Reference/Attributes/rel/preload).
Der Hauptunterschied ist, dass `preload` nur die Datei herunterlädt und im Cache speichert, während `modulepreload` das Modul abruft, parst und kompiliert und die Ergebnisse in die Modulkarte einfügt, sodass es bereit zur Ausführung ist.

Bei der Verwendung von `modulepreload` ist der Abrufmodus der Anfrage immer [`cors`](/de/docs/Web/API/Request/mode#cors), und die [`crossorigin`](/de/docs/Web/HTML/Reference/Attributes/crossorigin) Eigenschaft wird verwendet, um den [Anmeldemodus](/de/docs/Web/API/Request/credentials) der Anfrage zu bestimmen.
Wenn `crossorigin` auf [`anonymous`](/de/docs/Web/HTML/Reference/Attributes/crossorigin#anonymous) oder [`""`](/de/docs/Web/HTML/Reference/Attributes/crossorigin#sect) (Standard) gesetzt ist, dann ist der Anmeldemodus [`same-origin`](/de/docs/Web/API/Request/credentials#same-origin) und Benutzeranmeldeinformationen wie Cookies und Authentifizierung werden nur für Anfragen mit `same-origin` gesendet.
Wenn `crossorigin` auf [`use-credentials`](/de/docs/Web/HTML/Reference/Attributes/crossorigin#use-credentials) gesetzt ist, ist der Anmeldemodus [`include`](/de/docs/Web/API/Request/credentials#include), und Benutzeranmeldeinformationen werden sowohl für Single- als auch für Cross-Origin-Anfragen gesendet.

Das [`as`](/de/docs/Web/HTML/Reference/Elements/link#as) Attribut ist optional für Links mit `rel="modulepreload"` und standardmäßig auf `"script"` gesetzt.
Es kann auf `"script"` oder ein beliebiges skriptähnliches Ziel gesetzt werden, wie z.B. `"audioworklet"`, `"paintworklet"`, `"serviceworker"`, `"sharedworker"` oder `"worker"`.
Ein [`Event`](/de/docs/Web/API/Event/Event) namens "error" wird auf dem Element ausgelöst, wenn ein anderes Ziel verwendet wird.

Ein Browser _kann_ zusätzlich auch wählen, um automatisch Abhängigkeiten der Modulressource abzurufen.
Beachten Sie jedoch, dass dies eine browserspezifische Optimierung ist — der einzige Ansatz, um sicherzustellen, dass alle Browser versuchen, die Abhängigkeiten eines Moduls vorab zu laden, besteht darin, diese einzeln anzugeben!
Des Weiteren werden die Ereignisse namens `load` oder `error` sofort nach dem Erfolg oder Fehlschlagen des Ladens der _angegebenen_ Ressourcen ausgelöst.
Wenn Abhängigkeiten automatisch abgerufen werden, werden im Haupt-Thread keine zusätzlichen Ereignisse ausgelöst (obwohl Sie möglicherweise zusätzliche Anfragen in einem Service Worker oder auf dem Server überwachen können).

## Beispiele

Betrachten Sie das [basic-modules](https://github.com/mdn/js-examples/tree/main/module-examples/basic-modules) Beispiel ([Live-Version](https://mdn.github.io/js-examples/module-examples/basic-modules/)), das im [JavaScript Module](/de/docs/Web/JavaScript/Guide/Modules#basic_example_structure) Leitfaden eingeführt wird.

Es hat eine Dateistruktur wie unten gezeigt, bestehend aus dem Hauptmodul `main.js`, das zwei Abhängigkeitsmodule `modules/canvas.js` und `modules/square.js` statisch mit der [`import` Anweisung](/de/docs/Web/JavaScript/Reference/Statements/import) importiert.

```plain
index.html
main.js
modules/
    canvas.js
    square.js
```

Das HTML für das folgende Beispiel zeigt, wie `main.js` in einem `<script>` Element abgerufen wird.
Erst nachdem `main.js` geladen wurde, entdeckt und lädt der Browser die beiden Abhängigkeitsmodule.

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

Das folgende HTML aktualisiert das Beispiel, um `<link>` Elemente mit `rel="modulepreload"` für die Hauptdatei und jedes der Abhängigkeitsmodule zu verwenden.
Dies ist viel schneller, da die drei Module alle asynchron und parallel heruntergeladen werden, bevor sie benötigt werden.
Bis `main.js` geparst und seine Abhängigkeiten bekannt sind, sind diese bereits abgerufen und heruntergeladen.

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
