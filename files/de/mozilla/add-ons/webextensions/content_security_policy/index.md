---
title: Content Security Policy
slug: Mozilla/Add-ons/WebExtensions/Content_Security_Policy
l10n:
  sourceCommit: 09109b6f9444d22215ba330ec1e64e73980b2a6c
---

Erweiterungen, die mit WebExtension-APIs entwickelt wurden, haben standardmäßig eine Content Security Policy (CSP) angewendet. Diese beschränkt die Quellen, von denen sie Code laden können, wie zum Beispiel [`<script>`](/de/docs/Web/HTML/Reference/Elements/script) und verbietet potenziell unsichere Praktiken wie die Verwendung von [`eval()`](/de/docs/Web/JavaScript/Reference/Global_Objects/eval). Dieser Artikel erklärt kurz, was eine CSP ist, was die Standardrichtlinie ist und was sie für eine Erweiterung bedeutet und wie eine Erweiterung die Standard-CSP ändern kann.

[Content Security Policy](/de/docs/Web/HTTP/Guides/CSP) (CSP) ist ein Mechanismus, der hilft, zu verhindern, dass Websites versehentlich schädlichen Inhalt ausführen. Eine Website gibt eine CSP mittels eines HTTP-Headers an, der vom Server gesendet wird. Die CSP befasst sich hauptsächlich damit, legitime Quellen für verschiedene Arten von Inhalten anzugeben, wie Skripte oder eingebettete Plugins. Beispielsweise kann eine Website sie verwenden, um anzugeben, dass der Browser nur JavaScript ausführen soll, das von der Website selbst geliefert wird, und nicht aus anderen Quellen. Eine CSP kann den Browser auch anweisen, potenziell unsichere Praktiken wie die Verwendung von [`eval()`](/de/docs/Web/JavaScript/Reference/Global_Objects/eval) zu verbieten.

Wie Websites können Erweiterungen Inhalte aus verschiedenen Quellen laden. Beispielsweise wird das Popup einer Browseraktion als HTML-Dokument angegeben und kann JavaScript und CSS aus unterschiedlichen Quellen enthalten, genau wie eine normale Webseite:

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

Im Vergleich zu einer Website haben Erweiterungen Zugang zu zusätzlichen privilegierten APIs, sodass die Risiken größer sind, wenn sie durch schädlichen Code kompromittiert werden. Aus diesem Grund:

- wird standardmäßig eine ziemlich strikte Content Security Policy auf Erweiterungen angewendet. Siehe [standardmäßige Content Security Policy](#standardmäßige_content_security_policy).
- kann der Autor der Erweiterung die Standardrichtlinie mit dem `content_security_policy`-Schlüssel in der manifest.json ändern, aber es gibt Einschränkungen hinsichtlich der erlaubten Richtlinien. Siehe [`content_security_policy`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/content_security_policy).

## Standardmäßige Content Security Policy

Die Standard-Content-Security-Policy für Erweiterungen, die Manifest V2 verwenden, ist:

```plain
"script-src 'self'; object-src 'self';"
```

Für Erweiterungen, die Manifest V3 verwenden, ist die Standard-Content-Security-Policy:

```plain
"script-src 'self'; upgrade-insecure-requests;"
```

Diese Richtlinien werden auf jede Erweiterung angewendet, die nicht explizit ihre eigene Content Security Policy mit dem [`content_security_policy`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/content_security_policy)-Schlüssel in der manifest.json festgelegt hat. Dies hat folgende Konsequenzen:

- [Sie dürfen nur `<script>` und `<object>` Ressourcen laden, die lokal in der Erweiterung sind.](#standort_der_script-_und_objekt-ressourcen)
- [Die Erweiterung darf keine Strings als JavaScript auswerten.](#eval_and_friends)
- [Inline-JavaScript wird nicht ausgeführt.](#inline-javascript)
- [WebAssembly kann standardmäßig nicht verwendet werden.](#webassembly)
- [Unsichere Netzwerk-Anfragen werden in Manifest V3 aufgewertet.](#unsichere_netzwerk-anfragen_in_manifest_v3_aufwerten)

### Standort der Script- und Objekt-Ressourcen

Unter der Standard-CSP können Sie nur Code laden, der lokal in der Erweiterung ist. Die CSP beschränkt {{CSP("script-src")}} auf sichere Quellen, was [`<script>`](/de/docs/Web/HTML/Reference/Elements/script)-Ressourcen, [ES6-Module](/de/docs/Web/JavaScript/Guide/Modules) und [Web Worker](/de/docs/Web/API/Web_Workers_API/Using_web_workers) umfasst. In Browsern, die veraltete {{Glossary("Plugin", "Plugins")}} unterstützen, ist auch die {{CSP("object-src")}}-Richtlinie eingeschränkt. Für mehr Informationen über object-src in Erweiterungen siehe das WECG-Problem [Remove object-src from the CSP (at least in MV3)](https://github.com/w3c/webextensions/issues/204)).

Betrachten Sie zum Beispiel eine Zeile wie diese in einem Dokument einer Erweiterung:

```html
<script src="https://code.jquery.com/jquery-2.2.4.js"></script>
```

Dies lädt die angeforderte Ressource nicht: Es schlägt stillschweigend fehl und das Objekt, das Sie von der Ressource erwarten, wird nicht gefunden. Es gibt zwei Hauptlösungen dafür:

- Laden Sie die Ressource herunter, packen Sie sie in Ihre Erweiterung und beziehen Sie sich auf diese Version der Ressource.
- Erlauben Sie den benötigten entfernten Ursprung mit dem [`content_security_policy`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/content_security_policy)-Schlüssel oder in Manifest V3 mit der `content_scripts`-Eigenschaft.

> [!NOTE]
> Wenn Ihre angepasste CSP das Einspritzen von entfernten Skripten erlaubt, wird Ihre Erweiterung während der Überprüfung von addons.mozilla.org (AMO) abgelehnt. Weitere Informationen dazu finden Sie in den Details zu [Sicherheits-Best Practices](https://extensionworkshop.com/documentation/develop/build-a-secure-extension/).

### eval() und Vergleichbares

Unter der Standard-CSP können Erweiterungen keine Strings als JavaScript auswerten. Das bedeutet, dass Folgendes nicht erlaubt ist:

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

Wenn Sie momentan Code wie `<body onload="main()">` verwenden, um Ihr Skript auszuführen, sobald die Seite geladen ist, sollten Sie stattdessen auf [DOMContentLoaded](/de/docs/Web/API/Document/DOMContentLoaded_event) oder [load](/de/docs/Web/API/Window/load_event) hören.

### WebAssembly

Erweiterungen, die [WebAssembly](/de/docs/WebAssembly) verwenden möchten, müssen `'wasm-unsafe-eval'` in der `script-src`-Richtlinie angeben.

Ab Firefox 102 und Chrome 103 kann `'wasm-unsafe-eval'` im [`content_security_policy`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/content_security_policy)-Schlüssel in manifest.json enthalten sein, um die Verwendung von WebAssembly in Erweiterungen zu ermöglichen.

Manifest V2-Erweiterungen in Firefox können WebAssembly ohne `'wasm-unsafe-eval'` in ihrer CSP für die Rückwärtskompatibilität verwenden. Dieses Verhalten ist jedoch nicht garantiert, siehe [Firefox-Fehler 1770909](https://bugzil.la/1770909). Daher wird Erweiterungen, die WebAssembly verwenden, empfohlen, `'wasm-unsafe-eval'` in ihrer CSP zu deklarieren.

Für Chrome können Erweiterungen WebAssembly in Version 101 oder früher nicht verwenden. In 102 können Erweiterungen WebAssembly verwenden (das gleiche Verhalten wie Firefox 101 und früher). Ab Version 103 können Erweiterungen WebAssembly verwenden, wenn sie `'wasm-unsafe-eval'` in der `content_security_policy` im manifest-Schlüssel enthalten.

### Unsichere Netzwerk-Anfragen in Manifest V3 aufwerten

Erweiterungen sollten `https:` und `wss:` verwenden, wenn sie mit externen Servern kommunizieren. Um dies als Standardverhalten zu fördern, umfasst die Standard-CSP für Manifest V3 die {{CSP("upgrade-insecure-requests")}}-Richtlinie. Diese Richtlinie wertet automatisch Netzwerk-Anfragen zu `http:` auf `https:` auf.

Obwohl Anfragen automatisch aufgewertet werden, wird trotzdem empfohlen, soweit möglich `https:`-URLs im Quellcode der Erweiterung zu verwenden. Insbesondere sollten Einträge im [`host_permissions` Abschnitt von manifest.json](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/host_permissions) mit `https://` oder `*://` anstelle von nur `http://` beginnen.

Manifest V3-Erweiterungen, die `http:`- oder `ws:`-Anfragen stellen müssen, können dieses Verhalten ablehnen, indem sie die Standard-CSP überschreiben, indem sie den [`content_security_policy`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/content_security_policy)-Schlüssel in manifest.json mit einer Richtlinie verwenden, die die `upgrade-insecure-requests`-Richtlinie ausschließt. Allerdings müssen, um die [Sicherheitsanforderungen](https://extensionworkshop.com/documentation/publish/add-on-policies/#security-compliance-and-blocking) der Add-on-Policies zu erfüllen, alle Benutzerdaten sicher übertragen werden.

## CSP für Content Scripts

In Manifest V2 haben Content Scripts keine CSP.
Ab Manifest V3 teilen Content Scripts die Standard-CSP mit Erweiterungen. Es ist derzeit nicht möglich, eine separate CSP für Content Scripts anzugeben ([Quelle](https://bugzil.la/1581611#c10)).

Das Ausmaß, in dem die CSP Ladeoperationen von Content Scripts kontrolliert, variiert je nach Browser.
In Firefox sind JavaScript-Features wie eval durch die Erweiterungs-CSP eingeschränkt. Im Allgemeinen unterliegen die meisten DOM-basierten APIs der CSP der Webseite.
In Chrome werden viele DOM-APIs durch die Erweiterungs-CSP abgedeckt anstelle der CSP der Webseite ([crbug 896041](https://crbug.com/896041)).
