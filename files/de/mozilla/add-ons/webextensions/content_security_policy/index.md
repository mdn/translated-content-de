---
title: Content Security Policy
slug: Mozilla/Add-ons/WebExtensions/Content_Security_Policy
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{AddonSidebar}}

Erweiterungen, die mit den WebExtension APIs entwickelt wurden, haben standardmäßig eine Content Security Policy (CSP). Diese beschränkt die Quellen, von denen Code wie [`<script>`](/de/docs/Web/HTML/Element/script) geladen werden kann, und verbietet potenziell unsichere Praktiken wie die Verwendung von [`eval()`](/de/docs/Web/JavaScript/Reference/Global_Objects/eval). Dieser Artikel erklärt kurz, was eine CSP ist, wie die Standardrichtlinie aussieht und was sie für eine Erweiterung bedeutet sowie wie eine Erweiterung die Standard-CSP ändern kann.

[Content Security Policy](/de/docs/Web/HTTP/Guides/CSP) (CSP) ist ein Mechanismus, um zu verhindern, dass Websites unbeabsichtigt bösartige Inhalte ausführen. Eine Website legt eine CSP mit einem vom Server gesendeten HTTP-Header fest. Die CSP befasst sich hauptsächlich damit, legitime Quellen für verschiedene Arten von Inhalten, wie Skripte oder eingebettete Plugins, anzugeben. Zum Beispiel kann eine Website festlegen, dass der Browser nur JavaScript ausführen soll, das von der Website selbst bereitgestellt wird, und nicht von anderen Quellen. Eine CSP kann den Browser auch anweisen, potenziell unsichere Praktiken, wie die Verwendung von [`eval()`](/de/docs/Web/JavaScript/Reference/Global_Objects/eval), zu verbieten.

Ähnlich wie Websites können Erweiterungen Inhalte aus unterschiedlichen Quellen laden. Beispielsweise wird das Popup einer Browseraktion als HTML-Dokument spezifiziert und kann JavaScript und CSS von verschiedenen Quellen einbinden, genau wie eine normale Webseite:

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

Im Vergleich zu einer Website haben Erweiterungen Zugang zu zusätzlichen privilegierten APIs. Wenn sie durch bösartigen Code kompromittiert werden, sind die Risiken daher größer. Aus diesem Grund:

- wird standardmäßig eine ziemlich strenge Content Security Policy auf Erweiterungen angewendet. Siehe [standardmäßige Content Security Policy](#standardmäßige_content_security_policy).
- der Autor der Erweiterung kann die Standardrichtlinie mithilfe des `content_security_policy`-Schlüssels in der manifest.json ändern, es gibt jedoch Beschränkungen für die erlaubten Richtlinien. Siehe [`content_security_policy`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/content_security_policy).

## Standardmäßige Content Security Policy

Die standardmäßige Content Security Policy für Erweiterungen, die Manifest V2 verwenden, ist:

```plain
"script-src 'self'; object-src 'self';"
```

Für Erweiterungen, die Manifest V3 verwenden, ist die standardmäßige Content Security Policy:

```plain
"script-src 'self'; upgrade-insecure-requests;"
```

Diese Richtlinien gelten für jede Erweiterung, die nicht explizit ihre eigene Content Security Policy über den [`content_security_policy`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/content_security_policy)-Schlüssel in der manifest.json festgelegt hat. Dies hat folgende Konsequenzen:

- [Sie dürfen nur `<script>` und `<object>`-Ressourcen laden, die lokal in der Erweiterung sind.](#standort_von_skript-_und_objektressourcen)
- [Die Erweiterung darf keine Zeichenfolgen als JavaScript auswerten.](#eval_and_friends)
- [Inline-JavaScript wird nicht ausgeführt.](#inline-javascript)
- [WebAssembly kann standardmäßig nicht verwendet werden.](#webassembly)
- [Unsichere Netzwerk-Anfragen werden in Manifest V3 aufgerüstet.](#aufrüsten_unsicherer_netzwerk-anfragen_in_manifest_v3)

### Standort von Skript- und Objektressourcen

Unter der Standard-CSP können Sie nur Code laden, der lokal in der Erweiterung ist. Die CSP beschränkt {{CSP("script-src")}} auf sichere Quellen, die [`<script>`](/de/docs/Web/HTML/Element/script)-Ressourcen, [ES6-Module](/de/docs/Web/JavaScript/Guide/Modules) und [Web Worker](/de/docs/Web/API/Web_Workers_API/Using_web_workers) abdecken. In Browsern, die veraltete {{Glossary("Plugin", "Plugins")}} unterstützen, ist auch die {{CSP("object-src")}}-Direktive eingeschränkt. Weitere Informationen zu object-src in Erweiterungen finden Sie im WECG-Problem [Remove object-src from the CSP (at least in MV3)](https://github.com/w3c/webextensions/issues/204)).

Betrachten Sie zum Beispiel eine Zeile wie diese in einem Dokument der Erweiterung:

```html
<script src="https://code.jquery.com/jquery-2.2.4.js"></script>
```

Dies lädt die angeforderte Ressource nicht: Es schlägt stillschweigend fehl, und jedes Objekt, das Sie von der Ressource erwarten, wird nicht gefunden. Es gibt zwei Hauptlösungen hierfür:

- Laden Sie die Ressource herunter, fügen Sie sie in Ihre Erweiterung ein und beziehen Sie sich auf diese Version der Ressource.
- Erlauben Sie den benötigten Remote-Ursprung über den [`content_security_policy`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/content_security_policy)-Schlüssel oder, in Manifest V3, über die `content_scripts`-Eigenschaft.

> [!NOTE]
> Wenn Ihre geänderte CSP die Injektion von Remote-Skripten zulässt, wird Ihre Erweiterung während der Prüfung von addons.mozilla.org (AMO) abgelehnt. Weitere Informationen finden Sie in den Details zu [Sicherheitsbest Practices](https://extensionworkshop.com/documentation/develop/build-a-secure-extension/).

### eval() und Freunde

Unter der standardmäßigen CSP können Erweiterungen keine Zeichenfolgen als JavaScript auswerten. Dies bedeutet, dass Folgendes nicht erlaubt ist:

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

Unter der standardmäßigen CSP wird Inline-JavaScript nicht ausgeführt. Dies verbietet sowohl JavaScript, das direkt in `<script>`-Tags platziert ist, als auch Inline-Event-Handler, was bedeutet, dass Folgendes nicht erlaubt ist:

```html
<script>
  console.log("foo");
</script>
```

```html
<div onclick="console.log('click')">Click me!</div>
```

Verwenden Sie anstelle von Code wie `<body onload="main()">` zum Ausführen Ihres Skripts beim Laden der Seite lieber Listener für [DOMContentLoaded](/de/docs/Web/API/Document/DOMContentLoaded_event) oder [load](/de/docs/Web/API/Window/load_event).

### WebAssembly

Erweiterungen, die [WebAssembly](/de/docs/WebAssembly) verwenden möchten, müssen `'wasm-unsafe-eval'` in der `script-src`-Direktive angeben.

Ab Firefox 102 und Chrome 103 kann `'wasm-unsafe-eval'` im [`content_security_policy`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/content_security_policy)-Schlüssel der manifest.json aufgenommen werden, um die Verwendung von WebAssembly in Erweiterungen zu ermöglichen.

Manifest V2-Erweiterungen in Firefox können WebAssembly ohne `'wasm-unsafe-eval'` in ihrer CSP aus Kompatibilitätsgründen verwenden. Dieses Verhalten ist jedoch nicht garantiert, siehe [Firefox-Bug 1770909](https://bugzil.la/1770909). Erweiterungen, die WebAssembly verwenden, werden daher ermutigt, `'wasm-unsafe-eval'` in ihrer CSP anzugeben.

Für Chrome können Erweiterungen WebAssembly in Version 101 oder früher nicht verwenden. In 102 können Erweiterungen WebAssembly verwenden (das gleiche Verhalten wie Firefox 101 und früher). Ab Version 103 können Erweiterungen WebAssembly verwenden, wenn sie `'wasm-unsafe-eval'` in die `content_security_policy` im manifest-Schlüssel aufnehmen.

### Aufrüsten unsicherer Netzwerk-Anfragen in Manifest V3

Erweiterungen sollten `https:` und `wss:` verwenden, wenn sie mit externen Servern kommunizieren. Um dies als Standardverhalten zu fördern, enthält die standardmäßige Manifest V3-CSP die Direktive {{CSP("upgrade-insecure-requests")}}. Diese Direktive rüstet Netzwerk-Anfragen, die `http:` verwenden, automatisch auf `https:` um.

Obwohl Anfragen automatisch aufgerüstet werden, wird dennoch empfohlen, `https:`-URLs im Quellcode der Erweiterung zu verwenden, wo dies möglich ist. Insbesondere Einträge im Abschnitt [`host_permissions`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/host_permissions) der manifest.json sollten mit `https://` oder `*://` anstelle von nur `http://` beginnen.

Manifest V3-Erweiterungen, die `http:`- oder `ws:`-Anfragen stellen müssen, können dieses Verhalten umgehen, indem sie die standardmäßige CSP mithilfe des [`content_security_policy`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/content_security_policy)-Schlüssels der manifest.json mit einer Richtlinie überschreiben, die die Direktive `upgrade-insecure-requests` ausschließt. Um jedoch die [Sicherheitsanforderungen](https://extensionworkshop.com/documentation/publish/add-on-policies/#security-compliance-and-blocking) der Add-on Policies einzuhalten, müssen alle Benutzerdaten sicher übermittelt werden.

## CSP für Inhalts-Skripte

In Manifest V2 haben Inhalts-Skripte keine CSP.
Seit Manifest V3 teilen Inhalts-Skripte die standardmäßige CSP mit Erweiterungen. Es ist derzeit nicht möglich, eine separate CSP für Inhalts-Skripte festzulegen ([Quelle](https://bugzil.la/1581611#c10)).

Das Ausmaß, in dem die CSP das Laden von Inhalts-Skripten steuert, variiert je nach Browser. In Firefox sind JavaScript-Funktionen wie eval durch die CSP der Erweiterung eingeschränkt. Allgemein unterliegen die meisten DOM-basierten APIs der CSP der Webseite. In Chrome werden viele DOM-APIs von der CSP der Erweiterung abgedeckt, anstelle der CSP der Webseite ([crbug 896041](https://crbug.com/896041)).
