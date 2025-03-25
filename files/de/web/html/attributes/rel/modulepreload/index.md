---
title: rel=modulepreload
slug: Web/HTML/Attributes/rel/modulepreload
l10n:
  sourceCommit: 515d03ad8572b96e88916888156444626dcba193
---

{{HTMLSidebar}}

Das **`modulepreload`** Schlüsselwort für das [`rel`](/de/docs/Web/HTML/Attributes/rel) Attribut des {{HTMLElement("link")}} Elements bietet eine deklarative Möglichkeit, ein [Moduls-Skript](/de/docs/Web/JavaScript/Guide/Modules) vorab abzurufen, zu parsen und zu kompilieren und es in der Modulkarte des Dokuments für eine spätere Ausführung zu speichern.

Das Vorladen ermöglicht es, Module und deren Abhängigkeiten frühzeitig herunterzuladen und kann die gesamte Download- und Verarbeitungszeit erheblich reduzieren. Dies liegt daran, dass es Seiten ermöglicht, Module parallel abzurufen, anstatt sie nacheinander zu verarbeiten und die Abhängigkeiten dabei zu entdecken. Beachten Sie jedoch, dass Sie nicht einfach alles vorladen können! Was Sie vorladen, muss im Verhältnis zu anderen Vorgängen stehen, die möglicherweise dann ausgehungert werden, was die Benutzererfahrung negativ beeinflussen könnte.

Links mit `rel="modulepreload"` sind ähnlich wie solche mit [`rel="preload"`](/de/docs/Web/HTML/Attributes/rel/preload). Der Hauptunterschied besteht darin, dass `preload` die Datei nur herunterlädt und im Cache speichert, während `modulepreload` das Modul erhält, es parst und kompiliert und die Ergebnisse in die Modulkarte lädt, sodass es bereit zur Ausführung ist.

Beim Einsatz von `modulepreload` ist der Abrufanforderungsmodus immer [`cors`](/de/docs/Web/API/Request/mode#cors), und die [`crossorigin`](/de/docs/Web/HTML/Attributes/crossorigin) Eigenschaft wird verwendet, um den Anforderungs-[Zugangsmodus](/de/docs/Web/API/Request/credentials) zu bestimmen. Wenn `crossorigin` auf [`anonymous`](/de/docs/Web/HTML/Attributes/crossorigin#anonymous) oder [`""`](/de/docs/Web/HTML/Attributes/crossorigin#sect) (Standard) gesetzt ist, dann ist der Zugangsmodus [`same-origin`](/de/docs/Web/API/Request/credentials#same-origin), und Benutzeranmeldeinformationen wie Cookies und Authentifizierung werden nur für Anforderungen mit `same-origin` gesendet. Wenn `crossorigin` auf [`use-credentials`](/de/docs/Web/HTML/Attributes/crossorigin#use-credentials) gesetzt ist, dann ist der Zugangmodus [`include`](/de/docs/Web/API/Request/credentials#include), und Benutzeranmeldeinformationen werden sowohl für einzelne als auch für übergreifende Ursprungs-Anforderungen gesendet.

Das [`as`](/de/docs/Web/HTML/Element/link#as) Attribut ist optional für Links mit `rel="modulepreload"` und standardmäßig auf `"script"` gesetzt. Es kann auf `"script"` oder ein beliebiges skriptähnliches Ziel gesetzt werden, wie `"audioworklet"`, `"paintworklet"`, `"serviceworker"`, `"sharedworker"`, oder `"worker"`. Ein [`Event`](/de/docs/Web/API/Event/Event) namens "error" wird auf dem Element ausgelöst, wenn ein anderes Ziel verwendet wird.

Ein Browser _kann_ zusätzlich auch beschließen, alle Abhängigkeiten der Modulressource automatisch abzurufen. Beachten Sie jedoch, dass dies eine browserspezifische Optimierung ist — der einzige Ansatz, um sicherzustellen, dass alle Browser versuchen, die Abhängigkeiten eines Moduls vorzuladen, besteht darin, sie einzeln anzugeben! Darüber hinaus werden die Ereignisse `load` oder `error` unmittelbar nach dem Erfolg oder Misserfolg des Ladens der _angegebenen_ Ressourcen ausgelöst. Wenn Abhängigkeiten automatisch abgerufen werden, werden keine zusätzlichen Ereignisse im Haupt-Thread ausgelöst (obwohl Sie möglicherweise zusätzliche Anfragen in einem Service Worker oder auf dem Server überwachen können).

## Beispiele

Betrachten Sie das [basic-modules](https://github.com/mdn/js-examples/tree/main/module-examples/basic-modules) Beispiel ([Live-Demo](https://mdn.github.io/js-examples/module-examples/basic-modules/)), das im [JavaScript-Module](/de/docs/Web/JavaScript/Guide/Modules#basic_example_structure) Leitfaden eingeführt wurde.

Es hat eine Dateistruktur, wie im Folgenden gezeigt, bestehend aus dem obersten Modul `main.js`, das statisch zwei abhängige Module `modules/canvas.js` und `modules/square.js` mit der [`import` Anweisung](/de/docs/Web/JavaScript/Reference/Statements/import) importiert.

```plain
index.html
main.js
modules/
    canvas.js
    square.js
```

Das HTML des unten stehenden Beispiels zeigt, wie `main.js` in einem `<script>`-Element abgerufen wird. Erst nachdem `main.js` geladen wurde, entdeckt der Browser die beiden Abhängigkeitsmodule und ruft sie ab.

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

Das untenstehende HTML aktualisiert das Beispiel, um `<link>`-Elemente mit `rel="modulepreload"` für die Hauptdatei und jedes der Abhängigkeitsmodule zu verwenden. Dies ist viel schneller, da die drei Module alle asynchron und parallel herunterzuladen beginnen, bevor sie benötigt werden. Zu dem Zeitpunkt, zu dem `main.js` analysiert wurde und seine Abhängigkeiten bekannt sind, wurden diese bereits abgerufen und heruntergeladen.

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
- [Module vorladen](https://web.dev/articles/modulepreload) auf web.dev
