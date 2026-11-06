---
title: HTML-Attributwert `rel="modulepreload"`
short-title: modulepreload
slug: Web/HTML/Reference/Attributes/rel/modulepreload
l10n:
  sourceCommit: 696a0436bb4dd20eb4d30ac3f1d4fc5140d1eee9
---

Das Schlüsselwort **`modulepreload`** für das Attribut [`rel`](/de/docs/Web/HTML/Reference/Attributes/rel) des Elements {{HTMLElement("link")}} bietet eine deklarative Möglichkeit, ein [Modulskript](/de/docs/Web/JavaScript/Guide/Modules) vorab abzurufen, zu parsen und zu komilieren und es für die spätere Ausführung in der Modulzuordnung des Dokuments zu speichern.

Durch das Vorabladen können Module und ihre Abhängigkeiten frühzeitig heruntergeladen werden. Das kann auch die gesamte Download- und Verarbeitungszeit erheblich verkürzen.
Denn so können Seiten Module parallel abrufen, statt sie nacheinander abzurufen, während jedes Modul verarbeitet und seine Abhängigkeiten ermittelt werden.
Beachten Sie jedoch, dass Sie nicht einfach alles vorabladen können!
Welche Ressourcen Sie vorabladen, müssen Sie gegen andere Vorgänge abwägen, denen dadurch möglicherweise Ressourcen fehlen, was die Benutzererfahrung beeinträchtigen kann.

Links mit `rel="modulepreload"` ähneln Links mit [`rel="preload"`](/de/docs/Web/HTML/Reference/Attributes/rel/preload).
Der Hauptunterschied besteht darin, dass `preload` die Datei lediglich herunterlädt und im Cache speichert. `modulepreload` dagegen ruft das Modul ab, parst und kompiliert es und legt die Ergebnisse in der Modulzuordnung ab, sodass es zur Ausführung bereit ist.

Bei Verwendung von `modulepreload` ist der Modus der Abrufanfrage immer [`cors`](/de/docs/Web/API/Request/mode#cors). Die Eigenschaft [`crossorigin`](/de/docs/Web/HTML/Reference/Attributes/crossorigin) bestimmt den [Anmeldedatenmodus](/de/docs/Web/API/Request/credentials) der Anfrage.
Wenn `crossorigin` auf [`anonymous`](/de/docs/Web/HTML/Reference/Attributes/crossorigin#anonymous) oder [`""`](/de/docs/Web/HTML/Reference/Attributes/crossorigin#sect) (Standardwert) gesetzt ist, lautet der Anmeldedatenmodus [`same-origin`](/de/docs/Web/API/Request/credentials#same-origin). Anmeldedaten wie Cookies und Authentifizierungsinformationen werden dann nur bei Anfragen mit `same-origin` gesendet.
Wenn `crossorigin` auf [`use-credentials`](/de/docs/Web/HTML/Reference/Attributes/crossorigin#use-credentials) gesetzt ist, lautet der Anmeldedatenmodus [`include`](/de/docs/Web/API/Request/credentials#include). Anmeldedaten werden dann sowohl bei Anfragen an denselben Ursprung als auch bei ursprungsübergreifenden Anfragen gesendet.

Das Attribut [`as`](/de/docs/Web/HTML/Reference/Elements/link#as) ist für Links mit `rel="modulepreload"` optional und hat standardmäßig den Wert `"script"`.
Es kann auf `"script"`, `"style"`, `"json"`, `"text"` oder ein beliebiges skriptähnliches Ziel wie `"audioworklet"`, `"paintworklet"`, `"serviceworker"`, `"sharedworker"` oder `"worker"` gesetzt werden. Die vollständige Liste der zulässigen Werte ist in der Zuordnung für [module preload destination](https://html.spec.whatwg.org/multipage/links.html#module-preload-destination) der HTML-Spezifikation definiert. Die Liste der skriptähnlichen Ziele finden Sie in der [Fetch-Spezifikation](https://fetch.spec.whatwg.org/#request-destination-script-like).
Wird ein anderes Ziel verwendet, wird auf dem Element ein [`Event`](/de/docs/Web/API/Event/Event) namens „error“ ausgelöst.

Ein Browser _kann_ zusätzlich entscheiden, Abhängigkeiten der Modulressource automatisch abzurufen.
Beachten Sie jedoch, dass dies eine browserspezifische Optimierung ist – nur wenn Sie jede Abhängigkeit einzeln angeben, stellen Sie sicher, dass alle Browser versuchen, die Abhängigkeiten eines Moduls vorab zu laden!
Außerdem werden die Events `load` oder `error` unmittelbar nach dem erfolgreichen beziehungsweise fehlgeschlagenen Laden der _angegebenen_ Ressourcen ausgelöst.
Werden Abhängigkeiten automatisch abgerufen, werden im Hauptthread keine weiteren Events ausgelöst. Zusätzliche Anfragen können Sie allerdings gegebenenfalls in einem Service Worker oder auf dem Server überwachen.

## Beispiele

Betrachten Sie das Beispiel [basic-modules](https://github.com/mdn/js-examples/tree/main/module-examples/basic-modules) ([Live-Version](https://mdn.github.io/js-examples/module-examples/basic-modules/)), das im Leitfaden zu [JavaScript-Modulen](/de/docs/Web/JavaScript/Guide/Modules#working_with_examples) vorgestellt wird.

Es hat die unten gezeigte Dateistruktur. Das Modul `main.js` auf oberster Ebene importiert mithilfe der [`import`-Anweisung](/de/docs/Web/JavaScript/Reference/Statements/import) statisch die beiden abhängigen Module `modules/canvas.js` und `modules/square.js`.

```plain
index.html
main.js
modules/
    canvas.js
    square.js
```

Der HTML-Code des folgenden Beispiels zeigt, wie `main.js` über ein `<script>`-Element abgerufen wird.
Erst nachdem `main.js` geladen wurde, erkennt der Browser die beiden abhängigen Module und ruft sie ab.

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

Der folgende HTML-Code erweitert das Beispiel um `<link>`-Elemente mit `rel="modulepreload"` für die Hauptdatei und jedes der abhängigen Module.
Das ist deutlich schneller, weil das Herunterladen aller drei Module asynchron und parallel beginnt, bevor sie benötigt werden.
Wenn `main.js` geparst wurde und seine Abhängigkeiten bekannt sind, wurden diese bereits abgerufen und heruntergeladen.

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

- [Spekulatives Laden](/de/docs/Web/Performance/Guides/Speculative_loading) für einen Vergleich von `<link rel="modulepreload">` mit anderen ähnlichen Funktionen zur Leistungsverbesserung.
- [Module vorab laden](https://web.dev/articles/modulepreload) auf web.dev
