---
title: '`rel="modulepreload"` HTML-Attributwert'
short-title: modulepreload
slug: Web/HTML/Reference/Attributes/rel/modulepreload
l10n:
  sourceCommit: fc7c0c6df803d5ce26e7b2a72725a7d021ed0694
---

Das **`modulepreload`** Schlüsselwort für das [`rel`](/de/docs/Web/HTML/Reference/Attributes/rel)-Attribut des {{HTMLElement("link")}}-Elements bietet eine deklarative Möglichkeit, ein [Modulskript](/de/docs/Web/JavaScript/Guide/Modules) vorzeitig zu laden, zu parsen, zu kompilieren und im Modul-Map des Dokuments für die spätere Ausführung zu speichern.

Durch das Vorladen können Module und ihre Abhängigkeiten frühzeitig heruntergeladen werden, was die gesamte Download- und Verarbeitungszeit erheblich reduzieren kann.
Dies liegt daran, dass es Seiten ermöglicht, Module parallel zu laden, anstatt sie hintereinander zu verarbeiten, während ihre Abhängigkeiten entdeckt werden.
Beachten Sie jedoch, dass Sie nicht einfach alles vorladen können!
Was Sie zum Vorladen auswählen, muss gegen andere Operationen abgewogen werden, die möglicherweise vernachlässigt werden, was die Benutzererfahrung negativ beeinflussen könnte.

Links mit `rel="modulepreload"` sind ähnlich wie solche mit [`rel="preload"`](/de/docs/Web/HTML/Reference/Attributes/rel/preload).
Der Hauptunterschied besteht darin, dass `preload` nur die Datei herunterlädt und im Cache speichert, während `modulepreload` das Modul erhält, parst, kompiliert und das Ergebnis in die Modul-Map setzt, sodass es bereit ist zur Ausführung.

Beim Verwenden von `modulepreload` ist der Abrufmodus immer [`cors`](/de/docs/Web/API/Request/mode#cors), und die [`crossorigin`](/de/docs/Web/HTML/Reference/Attributes/crossorigin)-Eigenschaft wird verwendet, um den Anforderungs-[Credential-Modus](/de/docs/Web/API/Request/credentials) zu bestimmen.
Wenn `crossorigin` auf [`anonymous`](/de/docs/Web/HTML/Reference/Attributes/crossorigin#anonymous) oder [`""`](/de/docs/Web/HTML/Reference/Attributes/crossorigin#sect) (Standard) gesetzt ist, ist der Credentials-Modus [`same-origin`](/de/docs/Web/API/Request/credentials#same-origin), und Benutzeranmeldeinformationen wie Cookies und Authentifizierung werden nur für Anfragen mit demselben Ursprung gesendet.
Wenn `crossorigin` auf [`use-credentials`](/de/docs/Web/HTML/Reference/Attributes/crossorigin#use-credentials) gesetzt ist, dann ist der Credentials-Modus [`include`](/de/docs/Web/API/Request/credentials#include), und Benutzeranmeldeinformationen für sowohl Single- als auch Cross-Origin-Anfragen werden gesendet.

Das [`as`](/de/docs/Web/HTML/Reference/Elements/link#as)-Attribut ist optional für Links mit `rel="modulepreload"` und hat standardmäßig den Wert `"script"`.
Es kann auf `"script"`, `"style"`, `"json"`, `"text"` oder ein beliebiges skriptähnliches Ziel wie `"audioworklet"`, `"paintworklet"`, `"serviceworker"`, `"sharedworker"` oder `"worker"` gesetzt werden. Die vollständige Liste der zulässigen Werte ist in der HTML-Spezifikation unter [module preload destination](https://html.spec.whatwg.org/multipage/links.html#module-preload-destination) mapping definiert. Für die Liste der skriptähnlichen Ziele siehe den [Fetch-Spezifikation](https://fetch.spec.whatwg.org/#request-destination-script-like).
Ein [`Event`](/de/docs/Web/API/Event/Event) namens "error" wird auf dem Element ausgelöst, wenn ein anderes Ziel verwendet wird.

Ein Browser _kann_ zusätzlich auch entscheiden, automatisch alle Abhängigkeiten der Modulressource abzurufen.
Beachten Sie jedoch, dass dies eine browserspezifische Optimierung ist — die einzige Methode, um sicherzustellen, dass alle Browser versuchen, die Abhängigkeiten eines Moduls vorzuladen, besteht darin, sie einzeln anzugeben!
Darüber hinaus werden Ereignisse mit den Namen `load` oder `error` sofort nach Erfolg oder Scheitern des Ladens der _spezifizierten_ Ressourcen ausgelöst.
Wenn Abhängigkeiten automatisch abgerufen werden, werden keine zusätzlichen Ereignisse im Hauptthread ausgelöst (obwohl Sie möglicherweise zusätzliche Anfragen in einem Service Worker oder auf dem Server überwachen können).

## Beispiele

Betrachten Sie das [basic-modules](https://github.com/mdn/js-examples/tree/main/module-examples/basic-modules) Beispiel ([Live-Version](https://mdn.github.io/js-examples/module-examples/basic-modules/)), das im [JavaScript-Module](/de/docs/Web/JavaScript/Guide/Modules#basic_example_structure) Leitfaden vorgestellt wird.

Dieses Beispiel hat eine Dateistruktur wie unten gezeigt, die aus dem obersten Modul `main.js` besteht, das zwei Abhängigkeitsmodule `modules/canvas.js` und `modules/square.js` mithilfe der [`import`-Anweisung](/de/docs/Web/JavaScript/Reference/Statements/import) statisch importiert.

```plain
index.html
main.js
modules/
    canvas.js
    square.js
```

Das HTML des unten stehenden Beispiels zeigt, wie `main.js` in einem `<script>`-Element abgerufen wird.
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

Das HTML unten aktualisiert das Beispiel, um `<link>`-Elemente mit `rel="modulepreload"` für die Hauptdatei und jedes der Abhängigkeitsmodule zu verwenden.
Dies ist viel schneller, da die drei Module alle asynchron und parallel heruntergeladen werden, bevor sie benötigt werden.
Sobald `main.js` geparst und seine Abhängigkeiten bekannt sind, wurden sie bereits abgerufen und heruntergeladen.

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

- [Spekulatives Laden](/de/docs/Web/Performance/Guides/Speculative_loading) für einen Vergleich von `<link rel="modulepreload">` und anderen ähnlichen Leistungsverbesserungsmerkmalen.
- [Preloading modules](https://web.dev/articles/modulepreload) auf web.dev
