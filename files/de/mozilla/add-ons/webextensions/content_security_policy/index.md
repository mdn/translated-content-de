---
title: Content Security Policy
slug: Mozilla/Add-ons/WebExtensions/Content_Security_Policy
l10n:
  sourceCommit: f99d00a1c3697e26a679925954e26564e7e79b98
---

Erweiterungen, die mit WebExtension-APIs entwickelt wurden, haben standardmäßig eine Content Security Policy (CSP) angewendet. Diese beschränkt die Quellen, von denen sie Code laden können, wie z.B. [\<script>](/de/docs/Web/HTML/Reference/Elements/script), und verbietet potenziell unsichere Praktiken wie die Verwendung von [`eval()`](/de/docs/Web/JavaScript/Reference/Global_Objects/eval). Dieser Artikel erklärt kurz, was eine CSP ist, was die Standardrichtlinie ist und was sie für eine Erweiterung bedeutet, sowie wie eine Erweiterung die Standard-CSP ändern kann.

Die [Content Security Policy](/de/docs/Web/HTTP/Guides/CSP) (CSP) ist ein Mechanismus, um zu verhindern, dass Websites versehentlich bösartigen Code ausführen. Eine Website gibt eine CSP über einen HTTP-Header an, der vom Server gesendet wird. Die CSP kümmert sich hauptsächlich darum, legitime Quellen für verschiedene Arten von Inhalten wie Skripte oder eingebettete Plugins anzugeben. Beispielsweise kann eine Website angeben, dass der Browser nur JavaScript ausführen soll, das von der Website selbst bereitgestellt wird, und nicht von anderen Quellen. Eine CSP kann den Browser auch anweisen, potenziell unsichere Praktiken zu verbieten, wie die Verwendung von [`eval()`](/de/docs/Web/JavaScript/Reference/Global_Objects/eval).

Ähnlich wie Websites können Erweiterungen Inhalte aus verschiedenen Quellen laden. Zum Beispiel wird das Popup einer Browseraktion als HTML-Dokument angegeben und kann JavaScript und CSS aus verschiedenen Quellen enthalten, genau wie eine normale Webseite:

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
  </head>
  <body>
    <!--Some HTML content here-->
    <!--
      Include a third-party script.
      See also https://developer.mozilla.org/en-US/docs/Web/Security/Subresource_Integrity.
    -->
    <script
      src="https://code.jquery.com/jquery-2.2.4.js"
      integrity="sha256-iT6Q9iMJYuQiMWNd9lDyBUStIq/8PuOW33aOqmvFpqI="
      crossorigin="anonymous"></script>

    <!-- Include my popup's own script-->
    <script src="popup.js"></script>
  </body>
</html>
```

Im Vergleich zu einer Website haben Erweiterungen Zugriff auf zusätzliche privilegierte APIs, sodass die Risiken größer sind, wenn sie durch bösartigen Code kompromittiert werden. Aus diesem Grund:

- wird standardmäßig eine ziemlich strenge Content Security Policy auf Erweiterungen angewendet. Siehe [Standard-Content-Security-Policy](#standard-content-security-policy).
- der Autor der Erweiterung kann die Standardrichtlinie mit dem Schlüssel `content_security_policy` in der manifest.json ändern, aber es gibt Einschränkungen bezüglich der erlaubten Richtlinien. Siehe [`content_security_policy`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/content_security_policy).

## Standard-Content-Security-Policy

Die Standard-Content-Security-Policy für Erweiterungen, die Manifest V2 verwenden, lautet:

```plain
"script-src 'self'; object-src 'self';"
```

Während für Erweiterungen, die Manifest V3 verwenden, die Standard-Content-Security-Policy so lautet:

```plain
"script-src 'self'; upgrade-insecure-requests;"
```

Diese Richtlinien gelten für jede Erweiterung, die nicht ausdrücklich ihre eigene Content-Security-Policy mit dem Schlüssel [`content_security_policy`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/content_security_policy) in der manifest.json festgelegt hat. Sie hat folgende Konsequenzen:

- [Sie können nur \<script>- und \<object>-Ressourcen laden, die lokal in der Erweiterung sind.](#standort_von_skript-_und_objektressourcen)
- [Die Erweiterung darf keine Zeichenfolgen als JavaScript auswerten.](#eval_and_friends)
- [Inline-JavaScript wird nicht ausgeführt.](#inline-javascript)
- [WebAssembly kann standardmäßig nicht verwendet werden.](#webassembly)
- [Unsichere Netzwerkanfragen werden in Manifest V3 aufgewertet.](#aufwertung_unsicherer_netzwerkanfragen_in_manifest_v3)

### Standort von Skript- und Objektressourcen

Unter der Standard-CSP können Sie nur Code laden, der lokal auf die Erweiterung bezogen ist. Die CSP beschränkt {{CSP("script-src")}} auf sichere Quellen, was [\<script>]-Ressourcen, [ES6-Module](/de/docs/Web/JavaScript/Guide/Modules) und [Web-Arbeiter](/de/docs/Web/API/Web_Workers_API/Using_web_workers) umfasst. In Browsern, die veraltete {{Glossary("Plugin", "Plugins")}} unterstützen, ist auch die Direktive {{CSP("object-src")}} eingeschränkt. Weitere Informationen zu object-src in Erweiterungen finden Sie im WECG-Issue [Remove object-src from the CSP (at least in MV3)](https://github.com/w3c/webextensions/issues/204).

Betrachten Sie zum Beispiel eine Zeile wie diese in einem Dokument der Erweiterung:

```html
<script src="https://code.jquery.com/jquery-2.2.4.js"></script>
```

Dies lädt die angeforderte Ressource nicht: Es schlägt leise fehl, und jedes Objekt, das Sie erwarten, von der Ressource vorhanden zu sein, wird nicht gefunden. Es gibt zwei Hauptlösungen für dieses Problem:

- laden Sie die Ressource herunter, packen Sie sie in Ihre Erweiterung ein und beziehen Sie sich auf diese Version der Ressource.
- erlauben Sie den benötigten entfernten Ursprung mithilfe des Schlüssels [`content_security_policy`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/content_security_policy).

> [!NOTE]
> Wenn Ihre geänderte CSP entfernte Skriptinjektions erlaubt, wird Ihre Erweiterung während der Überprüfung von addons.mozilla.org (AMO) abgelehnt. Weitere Informationen finden Sie in den Einzelheiten zu [besten Sicherheitspraktiken](https://extensionworkshop.com/documentation/develop/build-a-secure-extension/).

#### Skripte von `localhost`

Die Standard-CSP blockiert alle entfernten Skripte, einschließlich Skripten von `localhost`. Um jedoch die lokale Erweiterungsentwicklung zu unterstützen, akzeptiert die CSP `localhost`-Quellen als Ausnahme. Sie können diese Funktion für nicht gepackte Manifest V3-Erweiterungen ab Chrome 110 und temporär geladene Erweiterungen ab Firefox 147 nutzen, indem Sie in Ihrem [`content_security_policy`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/content_security_policy)-Schlüssel CSP-Quellen angeben, die auf `http://localhost` oder `http://127.0.0.1` basieren. Zum Beispiel:

```json
{
  "manifest_version": 3,
  "name": "example",
  "version": "1.0.0",
  "content_security_policy": {
    "extension_pages": "script-src 'self' http://localhost:3000"
  }
}
```

### eval() und ähnliche Funktionen

Unter der Standard-CSP können Erweiterungen keine Zeichenfolgen als JavaScript auswerten. Das bedeutet, dass Folgendes nicht erlaubt ist:

```js
eval("console.log('some output');");
```

```js
setTimeout("alert('Hello World!');", 500);
```

```js
const f = new Function("console.log('foo');");
```

Wenn eine Erweiterung Code ausführen muss, der auf `eval()`-ähnliche Konstrukte angewiesen ist, wie z. B. einige Template-Bibliotheken, kann sie diesen Code auf einer [sandboxed page](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/sandbox) isolieren, anstatt die CSP der Erweiterung zu lockern.

### Inline-JavaScript

Unter der Standard-CSP wird Inline-JavaScript nicht ausgeführt. Dies verbietet sowohl direkt in `<script>`-Tags platzierte JavaScripts als auch Inline-Event-Handler, was bedeutet, dass Folgendes nicht erlaubt ist:

```html
<script>
  console.log("foo");
</script>
```

```html
<div onclick="console.log('click')">Click me!</div>
```

Wenn Sie derzeit Code wie `<body onload="main()">` verwenden, um Ihr Skript auszuführen, wenn die Seite geladen ist, hören Sie stattdessen auf [DOMContentLoaded](/de/docs/Web/API/Document/DOMContentLoaded_event) oder [load](/de/docs/Web/API/Window/load_event).

### WebAssembly

Erweiterungen, die [WebAssembly](/de/docs/WebAssembly) verwenden möchten, müssen `'wasm-unsafe-eval'` in der `script-src` Direktive angeben.

Ab Firefox 102 und Chrome 103 kann `'wasm-unsafe-eval'` im [content_security_policy](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/content_security_policy) manifest.json-Schlüssel aufgenommen werden, um die Verwendung von WebAssembly in Erweiterungen zu ermöglichen.

Manifest V2-Erweiterungen in Firefox können WebAssembly ohne `'wasm-unsafe-eval'` in ihrer CSP verwenden, um rückwärtskompatibel zu sein. Dieses Verhalten ist jedoch nicht garantiert, siehe [Firefox-Bug 1770909](https://bugzil.la/1770909). Erweiterungen, die WebAssembly verwenden, wird daher empfohlen, `'wasm-unsafe-eval'` in ihrer CSP anzugeben.

In Chrome können Erweiterungen in Version 101 oder früher kein WebAssembly verwenden. In 102 können Erweiterungen WebAssembly verwenden (dasselbe Verhalten wie Firefox 101 und früher). Ab Version 103 können Erweiterungen WebAssembly verwenden, wenn sie `'wasm-unsafe-eval'` in der `content_security_policy` im manifest.json-Schlüssel einschließen.

### Aufwertung unsicherer Netzwerkanfragen in Manifest V3

Erweiterungen sollten `https:` und `wss:` verwenden, wenn sie mit externen Servern kommunizieren. Um dies als Standardverhalten zu fördern, enthält die Standard-Manifest V3-CSP die Direktive {{CSP("upgrade-insecure-requests")}}. Diese Direktive rüstet automatisch Netzwerkanfragen auf `http:` auf `https:` um.

Obwohl Anfragen automatisch aufgewertet werden, wird weiterhin empfohlen, `https:`-URLs im Quellcode der Erweiterung zu verwenden, wo möglich. Insbesondere sollten Einträge im [host_permissions Abschnitt von manifest.json](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/host_permissions) mit `https://` oder `*://` anstatt nur `http://` beginnen.

Manifest V3-Erweiterungen, die `http:` oder `ws:`-Anfragen benötigen, können dieses Verhalten umgehen, indem sie die Standard-CSP durch eine, die die Direktive `upgrade-insecure-requests` ausschließt, mit dem [`content_security_policy`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/content_security_policy) manifest.json-Schlüssel überschreiben. Um jedoch den [Sicherheitsanforderungen](https://extensionworkshop.com/documentation/publish/add-on-policies/#security-compliance-and-blocking) der Add-on-Richtlinien zu entsprechen, müssen alle Benutzerdaten sicher übertragen werden.

## CSP für Inhalts-Skripte

In Manifest V2 haben Inhalts-Skripte keine CSP.
Ab Manifest V3 teilen Inhalts-Skripte die Standard-CSP mit Erweiterungen. Es ist derzeit nicht möglich, eine separate CSP für Inhalts-Skripte anzugeben ([Quelle](https://bugzil.la/1581611#c10)).

Das Ausmaß, in dem die CSP Laden von Inhalts-Skripten kontrolliert, variiert je nach Browser.
In Firefox sind JavaScript-Funktionen wie eval durch die CSP der Erweiterung eingeschränkt. Im Allgemeinen unterliegen die meisten DOM-basierten APIs der CSP der Webseite.
In Chrome werden viele DOM-APIs durch die CSP der Erweiterung anstelle der CSP der Webseite abgedeckt ([crbug 896041](https://crbug.com/896041)).
