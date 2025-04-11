---
title: Content Security Policy
slug: Mozilla/Add-ons/WebExtensions/Content_Security_Policy
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{AddonSidebar}}

Erweiterungen, die mit WebExtension-APIs entwickelt wurden, haben standardmäßig eine Content Security Policy (CSP), die auf sie angewendet wird. Diese beschränkt die Quellen, von denen sie Code wie [`<script>`](/de/docs/Web/HTML/Reference/Elements/script) laden können, und verbietet potenziell unsichere Praktiken wie die Verwendung von [`eval()`](/de/docs/Web/JavaScript/Reference/Global_Objects/eval). Dieser Artikel erklärt kurz, was eine CSP ist, was die Standardrichtlinie ist und was sie für eine Erweiterung bedeutet, sowie wie eine Erweiterung die Standard-CSP ändern kann.

Die [Content Security Policy](/de/docs/Web/HTTP/Guides/CSP) (CSP) ist ein Mechanismus, um zu verhindern, dass Webseiten versehentlich bösartigen Inhalt ausführen. Eine Webseite gibt eine CSP über einen HTTP-Header an, der vom Server gesendet wird. Die CSP beschäftigt sich hauptsächlich mit der Angabe legitimer Quellen verschiedener Arten von Inhalten, wie Skripten oder eingebetteten Plugins. Zum Beispiel kann eine Webseite damit angeben, dass der Browser nur JavaScript ausführen soll, das von der Webseite selbst bereitgestellt wird, und nicht aus anderen Quellen. Eine CSP kann den Browser auch anweisen, potenziell unsichere Praktiken, wie die Verwendung von [`eval()`](/de/docs/Web/JavaScript/Reference/Global_Objects/eval), zu verbieten.

Wie Webseiten können Erweiterungen Inhalte aus verschiedenen Quellen laden. Beispielsweise wird das Popup einer Browseraktion als HTML-Dokument angegeben, und es kann JavaScript und CSS aus verschiedenen Quellen enthalten, genau wie eine normale Webseite:

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

Im Vergleich zu einer Webseite haben Erweiterungen Zugriff auf zusätzliche privilegierte APIs, sodass die Risiken größer sind, wenn sie durch bösartigen Code kompromittiert werden. Aus diesem Grund:

- wird standardmäßig eine ziemlich strenge Content Security Policy auf Erweiterungen angewendet. Siehe [Standard-Content-Security-Policy](#standard-content-security-policy).
- der Autor der Erweiterung kann die Standardrichtlinie mit dem `content_security_policy`-Schlüssel in der manifest.json ändern, aber es gibt Einschränkungen für die erlaubten Richtlinien. Siehe [`content_security_policy`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/content_security_policy).

## Standard-Content-Security-Policy

Die Standard-Content-Security-Policy für Erweiterungen, die Manifest V2 verwenden, ist:

```plain
"script-src 'self'; object-src 'self';"
```

Für Erweiterungen, die Manifest V3 verwenden, lautet die Standard-Content-Security-Policy:

```plain
"script-src 'self'; upgrade-insecure-requests;"
```

Diese Richtlinien werden auf alle Erweiterungen angewendet, die keine eigene Content-Security-Policy explizit mit dem [`content_security_policy`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/content_security_policy) Schlüssel in manifest.json festgelegt haben. Es hat die folgenden Konsequenzen:

- [Sie dürfen nur `<script>` und `<object>` Ressourcen laden, die lokal zur Erweiterung sind.](#standort_von_skript-_und_objektressourcen)
- [Die Erweiterung darf keine Zeichenfolgen als JavaScript auswerten.](#eval_and_friends)
- [Inline-JavaScript wird nicht ausgeführt.](#inline-javascript)
- [WebAssembly kann standardmäßig nicht verwendet werden.](#webassembly)
- [Unsichere Netzwerkanfragen werden in Manifest V3 aufgewertet.](#unsichere_netzwerkanfragen_in_manifest_v3_aufwerten)

### Standort von Skript- und Objektressourcen

Unter der Standard-CSP können Sie nur Code laden, der lokal zur Erweiterung ist. Die CSP beschränkt {{CSP("script-src")}} auf sichere Quellen, die [`<script>`](/de/docs/Web/HTML/Reference/Elements/script) Ressourcen, [ES6-Module](/de/docs/Web/JavaScript/Guide/Modules) und [Web-Worker](/de/docs/Web/API/Web_Workers_API/Using_web_workers) umfassen. In Browsern, die veraltete {{Glossary("Plugin", "Plugins")}} unterstützen, ist auch die {{CSP("object-src")}} Direktive eingeschränkt. Weitere Informationen zu object-src in Erweiterungen finden Sie im WECG-Issue [Remove object-src from the CSP (at least in MV3)](https://github.com/w3c/webextensions/issues/204)).

Zum Beispiel, betrachten Sie eine Zeile wie diese in einem Dokument der Erweiterung:

```html
<script src="https://code.jquery.com/jquery-2.2.4.js"></script>
```

Dies lädt die angeforderte Ressource nicht: Es schlägt lautlos fehl und jedes Objekt, das Sie von der Ressource erwarten, wird nicht gefunden. Es gibt zwei Hauptlösungen dafür:

- Laden Sie die Ressource herunter, paketieren Sie sie in Ihrer Erweiterung und verweisen Sie auf diese Version der Ressource.
- Erlauben Sie den benötigten entfernten Ursprung unter Verwendung des [`content_security_policy`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/content_security_policy) Schlüssels oder, in Manifest V3, der `content_scripts` Eigenschaft.

> [!NOTE]
> Wenn Ihre modifizierte CSP Remote-Skript-Injektion erlaubt, wird Ihre Erweiterung während der Überprüfung bei addons.mozilla.org (AMO) abgelehnt. Weitere Informationen finden Sie in den Details zu [Sicherheitsbestpraktiken](https://extensionworkshop.com/documentation/develop/build-a-secure-extension/).

### eval() und ähnliche Funktionen

Unter der Standard-CSP können Erweiterungen keine Zeichenfolgen als JavaScript auswerten. Dies bedeutet, dass Folgendes nicht erlaubt ist:

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

Unter der Standard-CSP wird Inline-JavaScript nicht ausgeführt. Dies verbietet sowohl JavaScript, das direkt in `<script>`-Tags platziert wird, als auch Inline-Event-Handler, was bedeutet, dass Folgendes nicht erlaubt ist:

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

Erweiterungen, die [WebAssembly](/de/docs/WebAssembly) verwenden möchten, müssen `'wasm-unsafe-eval'` in der `script-src` Direktive angeben.

Ab Firefox 102 und Chrome 103 kann `'wasm-unsafe-eval'` im [`content_security_policy`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/content_security_policy) manifest.json Schlüssel enthalten sein, um die Verwendung von WebAssembly in Erweiterungen zu ermöglichen.

Manifest V2 Erweiterungen in Firefox können WebAssembly ohne `'wasm-unsafe-eval'` in ihrer CSP aufgrund von Rückwärtskompatibilität verwenden. Dieses Verhalten ist jedoch nicht garantiert, siehe [Firefox Bug 1770909](https://bugzil.la/1770909). Erweiterungen, die WebAssembly verwenden, werden daher ermutigt, `'wasm-unsafe-eval'` in ihrer CSP zu deklarieren.

Für Chrome können Erweiterungen in Version 101 oder früher WebAssembly nicht verwenden. In 102 können Erweiterungen WebAssembly verwenden (gleiches Verhalten wie Firefox 101 und früher). Ab Version 103 können Erweiterungen WebAssembly verwenden, wenn sie `'wasm-unsafe-eval'` in der `content_security_policy` im manifest-Schlüssel enthalten.

### Unsichere Netzwerkanfragen in Manifest V3 aufwerten

Erweiterungen sollten `https:` und `wss:` verwenden, wenn sie mit externen Servern kommunizieren. Um dies als Standardverhalten zu fördern, enthält die Standard-CSP von Manifest V3 die {{CSP("upgrade-insecure-requests")}} Direktive. Diese Direktive wertet Netzwerkanfragen an `http:` automatisch zu `https:` auf.

Obwohl Anfragen automatisch aufgewertet werden, wird dennoch empfohlen, in der Quelle der Erweiterung, wo möglich, `https:`-URLs zu verwenden. Insbesondere sollten Einträge im [`host_permissions` Abschnitt der manifest.json](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/host_permissions) mit `https://` oder `*://` anstelle von nur `http://` beginnen.

Manifest V3 Erweiterungen, die `http:` oder `ws:` Anfragen stellen müssen, können sich durch Überschreiben der Standard-CSP mit dem [`content_security_policy`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/content_security_policy) manifest.json Schlüssel mit einer Richtlinie, die die `upgrade-insecure-requests` Direktive ausschließt, von diesem Verhalten abmelden. Um jedoch den [Sicherheitsanforderungen](https://extensionworkshop.com/documentation/publish/add-on-policies/#security-compliance-and-blocking) der Add-on-Richtlinien zu entsprechen, müssen alle Benutzerdaten sicher übertragen werden.

## CSP für Inhalts-Skripte

In Manifest V2 haben Inhalts-Skripte keine CSP.
Ab Manifest V3 teilen Inhalts-Skripte die Standard-CSP wie Erweiterungen. Derzeit ist es nicht möglich, eine separate CSP für Inhalts-Skripte festzulegen ([Quelle](https://bugzil.la/1581611#c10)).

Das Ausmaß, in dem die CSP das Laden von Inhalts-Skripten steuert, variiert je nach Browser.
In Firefox sind JavaScript-Funktionen wie eval durch die Erweiterungs-CSP eingeschränkt. Im Allgemeinen unterliegen die meisten DOM-basierten APIs der CSP der Webseite.
In Chrome werden viele DOM-APIs von der Erweiterungs-CSP abgedeckt anstelle der CSP der Webseite ([crbug 896041](https://crbug.com/896041)).
