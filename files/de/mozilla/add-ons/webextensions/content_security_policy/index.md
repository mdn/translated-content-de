---
title: Content Security Policy
slug: Mozilla/Add-ons/WebExtensions/Content_Security_Policy
l10n:
  sourceCommit: 64969748897516212b7585b8dbc8f9f1a9bbb242
---

Erweiterungen, die mit den WebExtension-APIs entwickelt wurden, haben standardmäßig eine Content Security Policy (CSP) zugewiesen. Dies beschränkt die Quellen, aus denen sie Code wie [`<script>`](/de/docs/Web/HTML/Reference/Elements/script) laden können, und verbietet potenziell unsichere Praktiken wie die Verwendung von [`eval()`](/de/docs/Web/JavaScript/Reference/Global_Objects/eval). Dieser Artikel erklärt kurz, was eine CSP ist, was die Standardrichtlinie ist und was sie für eine Erweiterung bedeutet, sowie wie eine Erweiterung die Standard-CSP ändern kann.

Eine [Content Security Policy](/de/docs/Web/HTTP/Guides/CSP) (CSP) ist ein Mechanismus, der hilft, zu verhindern, dass Websites versehentlich bösartige Inhalte ausführen. Eine Website gibt eine CSP über einen HTTP-Header an, der vom Server gesendet wird. Die CSP ist hauptsächlich damit beschäftigt, legitime Quellen für verschiedene Arten von Inhalten festzulegen, wie Skripte oder eingebettete Plugins. Beispielsweise kann eine Website sie verwenden, um anzugeben, dass der Browser nur JavaScript ausführen soll, das von der Website selbst bereitgestellt wird, und nicht von anderen Quellen. Eine CSP kann den Browser auch anweisen, potenziell unsichere Praktiken wie die Verwendung von [`eval()`](/de/docs/Web/JavaScript/Reference/Global_Objects/eval) zu verbieten.

Ähnlich wie Websites können Erweiterungen Inhalte aus verschiedenen Quellen laden. Zum Beispiel wird das Popup einer Browser-Aktion als HTML-Dokument angegeben, und es kann JavaScript und CSS aus verschiedenen Quellen enthalten, genau wie eine normale Webseite:

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

Im Vergleich zu einer Website haben Erweiterungen Zugriff auf zusätzliche privilegierte APIs. Wenn sie von bösartigem Code kompromittiert werden, sind die Risiken größer. Aus diesem Grund:

- wird Erweiterungen standardmäßig eine recht strenge Content Security Policy zugewiesen. Siehe [Standard-Content-Security-Policy](#standard-content-security-policy).
- der Autor der Erweiterung kann die Standardrichtlinie mithilfe des Schlüssels `content_security_policy` in der manifest.json verändern, aber es gibt Einschränkungen bezüglich der zulässigen Richtlinien. Siehe [`content_security_policy`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/content_security_policy).

## Standard-Content-Security-Policy

Die Standard-Content-Security-Policy für Erweiterungen, die Manifest V2 verwenden, ist:

```plain
"script-src 'self'; object-src 'self';"
```

Während für Erweiterungen, die Manifest V3 verwenden, die Standard-Content-Security-Policy folgendermaßen aussieht:

```plain
"script-src 'self'; upgrade-insecure-requests;"
```

Diese Richtlinien gelten für jede Erweiterung, die nicht ausdrücklich eine eigene Content Security Policy mittels des Schlüssels [`content_security_policy`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/content_security_policy) in der manifest.json festgelegt hat. Dies hat folgende Konsequenzen:

- [Sie dürfen nur `<script>` und `<object>` Ressourcen laden, die lokal in der Erweiterung vorhanden sind.](#ort_der_skript-_und_objektressourcen)
- [Die Erweiterung darf keine Zeichenfolgen als JavaScript evaluieren.](#eval_and_friends)
- [Inline-JavaScript wird nicht ausgeführt.](#inline-javascript)
- [WebAssembly kann standardmäßig nicht verwendet werden.](#webassembly)
- [Unsichere Netzwerk-Anfragen werden in Manifest V3 hochgestuft.](#hochstufen_unsicherer_netzwerk-anfragen_in_manifest_v3)

### Ort der Skript- und Objektressourcen

Unter der Standard-CSP können Sie nur Code laden, der lokal in der Erweiterung vorhanden ist. Die CSP beschränkt {{CSP("script-src")}} auf sichere Quellen, die [`<script>`](/de/docs/Web/HTML/Reference/Elements/script) Ressourcen, [ES6-Module](/de/docs/Web/JavaScript/Guide/Modules) und [Web-Arbeiter](/de/docs/Web/API/Web_Workers_API/Using_web_workers) umfasst. In Browsern, die veraltete {{Glossary("Plugin", "Plugins")}} unterstützen, ist auch die Richtlinie {{CSP("object-src")}} eingeschränkt. Weitere Informationen zu object-src in Erweiterungen finden Sie im WECG-Problem [Remove object-src from the CSP (at least in MV3)](https://github.com/w3c/webextensions/issues/204).

Betrachten Sie beispielsweise eine Zeile wie diese in einem Dokument der Erweiterung:

```html
<script src="https://code.jquery.com/jquery-2.2.4.js"></script>
```

Dies lädt die angeforderte Ressource nicht: Es schlägt stillschweigend fehl, und jedes Objekt, das Sie von der Ressource erwarten, wird nicht gefunden. Es gibt zwei Hauptlösungen für dieses Problem:

- Laden Sie die Ressource herunter, packen Sie sie in Ihre Erweiterung und verweisen Sie auf diese Version der Ressource.
- Erlauben Sie den erforderlichen Remote-Ursprung mit dem Schlüssel [`content_security_policy`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/content_security_policy).

> [!NOTE]
> Wenn Ihre modifizierte CSP Remote-Skript-Injektion erlaubt, wird Ihre Erweiterung bei addons.mozilla.org (AMO) während der Überprüfung abgelehnt. Weitere Informationen finden Sie in den Details zu [bewährten Sicherheitspraktiken](https://extensionworkshop.com/documentation/develop/build-a-secure-extension/).

#### Skripte von localhost

Die Standard-CSP blockiert alle Remote-Skripte, einschließlich Skripte von localhost. Um jedoch die lokale Erweiterungsentwicklung zu unterstützen, akzeptiert die CSP localhost-Quellen als Ausnahme. Sie können diese Funktion für entpackte Manifest V3-Erweiterungen ab Chrome 110 und vorübergehend geladene Erweiterungen ab Firefox 147 nutzen, indem Sie CSP-Quellen basierend auf `http://localhost` oder `http://127.0.0.1` im Schlüssel [`content_security_policy`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/content_security_policy) angeben. Zum Beispiel:

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

### eval() und Freunde

Unter der Standard-CSP können Erweiterungen keine Zeichenfolgen als JavaScript evaluieren. Dies bedeutet, dass die folgenden nicht erlaubt sind:

```js
eval("console.log('some output');");
```

```js
setTimeout("alert('Hello World!');", 500);
```

```js
const f = new Function("console.log('foo');");
```

### Inline-JavaScript

Unter der Standard-CSP wird Inline-JavaScript nicht ausgeführt. Dies verbietet sowohl JavaScript, das direkt in `<script>`-Tags platziert ist, als auch Inline-Event-Handler. Dies bedeutet, dass die folgenden nicht erlaubt sind:

```html
<script>
  console.log("foo");
</script>
```

```html
<div onclick="console.log('click')">Click me!</div>
```

Wenn Sie derzeit Code wie `<body onload="main()">` verwenden, um Ihr Skript auszuführen, wenn die Seite geladen wurde, hören Sie stattdessen auf [DOMContentLoaded](/de/docs/Web/API/Document/DOMContentLoaded_event) oder [load](/de/docs/Web/API/Window/load_event).

### WebAssembly

Erweiterungen, die [WebAssembly](/de/docs/WebAssembly) verwenden möchten, benötigen `'wasm-unsafe-eval'`, um in der `script-src`-Richtlinie angegeben zu werden.

Ab Firefox 102 und Chrome 103 kann `'wasm-unsafe-eval'` im Schlüssel [`content_security_policy`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/content_security_policy) in der manifest.json enthalten sein, um die Verwendung von WebAssembly in Erweiterungen zu ermöglichen.

Manifest V2-Erweiterungen in Firefox können WebAssembly ohne `'wasm-unsafe-eval'` in ihrer CSP aus Gründen der Abwärtskompatibilität verwenden. Dieses Verhalten ist jedoch nicht garantiert, siehe [Firefox Bug 1770909](https://bugzil.la/1770909). Erweiterungen, die WebAssembly verwenden, wird daher empfohlen, `'wasm-unsafe-eval'` in ihrer CSP anzugeben.

Für Chrome können Erweiterungen in Version 101 oder früheren Versionen WebAssembly nicht verwenden. In Version 102 können Erweiterungen WebAssembly verwenden (das gleiche Verhalten wie Firefox 101 und frühere Versionen). Ab Version 103 können Erweiterungen WebAssembly verwenden, wenn sie `'wasm-unsafe-eval'` im `content_security_policy` im Manifest-Schlüssel einschließen.

### Hochstufen unsicherer Netzwerk-Anfragen in Manifest V3

Erweiterungen sollten `https:` und `wss:` verwenden, wenn sie mit externen Servern kommunizieren. Um dies als Standardverhalten zu fördern, enthält die Standard-CSP von Manifest V3 die Direktive {{CSP("upgrade-insecure-requests")}}. Diese Direktive stuft Netzwerk-Anfragen an `http:` automatisch auf die Verwendung von `https:` hoch.

Obwohl Anfragen automatisch hochgestuft werden, wird trotzdem empfohlen, wenn möglich `https:`-URLs im Quellcode der Erweiterung zu verwenden. Insbesondere Einträge im [`host_permissions` Abschnitt der manifest.json](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/host_permissions) sollten mit `https://` oder `*://` statt nur mit `http://` beginnen.

Manifest V3-Erweiterungen, die `http:`- oder `ws:`-Anfragen stellen müssen, können sich von diesem Verhalten abmelden, indem sie die Standard-CSP überschreiben und den [`content_security_policy`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/content_security_policy) manifest.json Schlüssel mit einer Richtlinie verwenden, die die Direktive `upgrade-insecure-requests` ausschließt. Um jedoch den [Sicherheitsanforderungen](https://extensionworkshop.com/documentation/publish/add-on-policies/#security-compliance-and-blocking) der Add-on Policies zu entsprechen, müssen alle Benutzerdaten sicher übertragen werden.

## CSP für Inhalts-Skripte

In Manifest V2 haben Inhalts-Skripte keine CSP.
Mit Manifest V3 teilen Inhalts-Skripte die Standard-CSP mit Erweiterungen. Es ist derzeit nicht möglich, eine separate CSP für Inhalts-Skripte festzulegen ([source](https://bugzil.la/1581611#c10)).

Das Ausmaß, in dem die CSP das Laden von Inhalts-Skripten steuert, variiert je nach Browser.
In Firefox sind JavaScript-Funktionen wie eval durch die Erweiterungs-CSP eingeschränkt. Im Allgemeinen unterliegen die meisten DOM-basierten APIs der CSP der Webseite.
In Chrome werden viele DOM-APIs durch die Erweiterungs-CSP abgedeckt statt durch die CSP der Webseite ([crbug 896041](https://crbug.com/896041)).
