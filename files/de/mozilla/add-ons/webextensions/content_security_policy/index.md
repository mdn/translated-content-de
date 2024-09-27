---
title: Content Security Policy
slug: Mozilla/Add-ons/WebExtensions/Content_Security_Policy
l10n:
  sourceCommit: 668b38a4f6cd96609b9a969fe4653b46aec4e712
---

{{AddonSidebar}}

Erweiterungen, die mit WebExtension-APIs entwickelt wurden, haben standardmäßig eine Content Security Policy (CSP) angewendet. Dies beschränkt die Quellen, aus denen sie Code laden können, wie [\<script>](/de/docs/Web/HTML/Element/script), und verbietet potenziell unsichere Praktiken wie die Verwendung von [`eval()`](/de/docs/Web/JavaScript/Reference/Global_Objects/eval). Dieser Artikel erklärt kurz, was eine CSP ist, was die Standardrichtlinie ist und was sie für eine Erweiterung bedeutet, und wie eine Erweiterung die Standard-CSP ändern kann.

[Content Security Policy](/de/docs/Web/HTTP/CSP) (CSP) ist ein Mechanismus, der hilft, zu verhindern, dass Websites versehentlich bösartigen Inhalt ausführen. Eine Website spezifiziert eine CSP mittels eines HTTP-Headers, der vom Server gesendet wird. Die CSP ist hauptsächlich darauf bedacht, legitime Quellen für verschiedene Arten von Inhalten wie Skripte oder eingebettete Plugins zu spezifizieren. Zum Beispiel kann eine Website angeben, dass der Browser nur JavaScript ausführen soll, das von der Website selbst bereitgestellt wird, und nicht von anderen Quellen. Eine CSP kann den Browser auch anweisen, potenziell unsichere Praktiken, wie die Verwendung von [`eval()`](/de/docs/Web/JavaScript/Reference/Global_Objects/eval), zu verbieten.

Wie Websites können Erweiterungen Inhalte aus verschiedenen Quellen laden. Zum Beispiel wird das Popup einer Browseraktion als HTML-Dokument spezifiziert und kann JavaScript und CSS aus verschiedenen Quellen einbeziehen, genau wie eine normale Webseite:

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

Im Vergleich zu einer Website haben Erweiterungen Zugriff auf zusätzliche privilegierte APIs, sodass, wenn sie von bösartigem Code kompromittiert werden, die Risiken größer sind. Aus diesem Grund:

- wird standardmäßig eine recht strenge Content Security Policy auf Erweiterungen angewendet. Siehe [Standard-Content-Security-Policy](#standard-content-security-policy).
- kann der Autor der Erweiterung die Standardrichtlinie mithilfe des Schlüssels `content_security_policy` in der manifest.json ändern, aber es gibt Einschränkungen hinsichtlich der erlaubten Richtlinien. Siehe [`content_security_policy`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/content_security_policy).

## Standard-Content-Security-Policy

Die Standard-Content-Security-Policy für Erweiterungen, die Manifest V2 verwenden, lautet:

```plain
"script-src 'self'; object-src 'self';"
```

Während für Erweiterungen, die Manifest V3 verwenden, die Standard-Content-Security-Policy lautet:

```plain
"script-src 'self'; upgrade-insecure-requests;"
```

Diese Richtlinien gelten für jede Erweiterung, die nicht explizit ihre eigene Content Security Policy mithilfe des Schlüssels [`content_security_policy`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/content_security_policy) in der manifest.json festgelegt hat. Dies hat folgende Konsequenzen:

- [Sie dürfen nur \<script> und \<object> Ressourcen laden, die lokal in der Erweiterung vorhanden sind.](#standort_von_script-_und_objektressourcen)
- [Die Erweiterung darf keine Zeichenfolgen als JavaScript auswerten.](#eval_and_friends)
- [Inline JavaScript wird nicht ausgeführt.](#inline_javascript)
- [WebAssembly kann standardmäßig nicht verwendet werden.](#webassembly)
- [Unsichere Netzwerk-Anfragen werden in Manifest V3 aufgewertet.](#upgrade_unsicherer_netzwerk-anfragen_in_manifest_v3)

### Standort von Script- und Objektressourcen

Unter der Standard-CSP können Sie nur Code laden, der lokal in der Erweiterung vorhanden ist. Die CSP beschränkt {{CSP("script-src")}} auf sichere Quellen, was [\<script>](/de/docs/Web/HTML/Element/script)-Ressourcen, [ES6-Module](/de/docs/Web/JavaScript/Guide/Modules) und [Web-Arbeiter](/de/docs/Web/API/Web_Workers_API/Using_web_workers) umfasst. In Browsern, die veraltete [Plugins](/de/docs/Glossary/Plugin) unterstützen, ist auch die Direktive {{CSP("object-src")}} eingeschränkt. Weitere Informationen zu object-src in Erweiterungen finden Sie im WECG-Issue [Remove object-src from the CSP (at least in MV3)](https://github.com/w3c/webextensions/issues/204).

Zum Beispiel, betrachten Sie eine Zeile wie diese in einem Dokument der Erweiterung:

```html
<script src="https://code.jquery.com/jquery-2.2.4.js"></script>
```

Dies lädt die angeforderte Ressource nicht: es schlägt stillschweigend fehl, und jedes Objekt, das Sie von der Ressource erwarten, wird nicht gefunden. Es gibt zwei Hauptlösungen dafür:

- Laden Sie die Ressource herunter, packen Sie sie in Ihrer Erweiterung und verweisen Sie auf diese Version der Ressource.
- Erlauben Sie den benötigten externen Ursprung, indem Sie den Schlüssel [`content_security_policy`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/content_security_policy) oder, in Manifest V3, die Eigenschaft `content_scripts` verwenden.

> [!NOTE]
> Wenn Ihre modifizierte CSP das Remote-Skript-Injection erlaubt, wird Ihre Erweiterung während der Überprüfung von addons.mozilla.org (AMO) abgelehnt. Für weitere Informationen siehe Details zu den [Sicherheitsbest-Praktiken](https://extensionworkshop.com/documentation/develop/build-a-secure-extension/).

### eval() und verwandte Funktionen

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

### Inline JavaScript

Unter der Standard-CSP wird Inline-JavaScript nicht ausgeführt. Dies verbietet sowohl JavaScript, das direkt in `<script>`-Tags platziert ist, als auch Inline-Event-Handler, was bedeutet, dass Folgendes nicht erlaubt ist:

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

Erweiterungen, die [WebAssembly](/de/docs/WebAssembly) verwenden möchten, müssen `'wasm-unsafe-eval'` in der `script-src`-Direktive spezifizieren.

Ab Firefox 102 und Chrome 103 kann `'wasm-unsafe-eval'` im [`content_security_policy`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/content_security_policy)-Schlüssel in der manifest.json aufgenommen werden, um die Verwendung von WebAssembly in Erweiterungen zu ermöglichen.

Manifest V2-Erweiterungen in Firefox können WebAssembly ohne `'wasm-unsafe-eval'` in ihrer CSP zur Rückwärtskompatibilität nutzen. Dieses Verhalten ist jedoch nicht garantiert, siehe [Firefox-Fehler 1770909](https://bugzil.la/1770909). Erweiterungen, die WebAssembly verwenden, wird daher empfohlen, `'wasm-unsafe-eval'` in ihrer CSP zu deklarieren.

Für Chrome können Erweiterungen in Version 101 oder früher kein WebAssembly nutzen. Ab Version 102 können Erweiterungen WebAssembly verwenden (dasselbe Verhalten wie in Firefox 101 und früher). Ab Version 103 können Erweiterungen WebAssembly nutzen, wenn sie `'wasm-unsafe-eval'` in der `content_security_policy` im Manifest-Schlüssel einschließen.

### Upgrade unsicherer Netzwerk-Anfragen in Manifest V3

Erweiterungen sollten `https:` und `wss:` verwenden, wenn sie mit externen Servern kommunizieren. Um dies als Standardverhalten zu fördern, enthält die Standard-CSP von Manifest V3 die Direktive {{CSP("upgrade-insecure-requests")}}. Diese Direktive aktualisiert Netzwerk-Anfragen an `http:` automatisch auf `https:`.

Obwohl Anfragen automatisch aufgewertet werden, wird dennoch empfohlen, `https:`-URLs im Quellcode der Erweiterung zu verwenden, wo immer möglich. Insbesondere Einträge im [Abschnitt `host_permissions` der manifest.json](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/host_permissions) sollten mit `https://` oder `*://` anstelle von nur `http://` beginnen.

Manifest V3-Erweiterungen, die `http:` oder `ws:` Anfragen stellen müssen, können sich von diesem Verhalten abmelden, indem sie die Standard-CSP überschreiben und eine Richtlinie festlegen, die die `upgrade-insecure-requests`-Direktive ausschließt. Um jedoch den [Sicherheitsanforderungen](https://extensionworkshop.com/documentation/publish/add-on-policies/#security-compliance-and-blocking) der Add-on-Richtlinien zu entsprechen, müssen alle Benutzerdaten sicher übertragen werden.

## CSP für Inhalts-Skripte

In Manifest V2 haben Inhalts-Skripte keine CSP.
Ab Manifest V3 teilen Inhalts-Skripte die Standard-CSP der Erweiterungen. Derzeit ist es nicht möglich, eine separate CSP für Inhalts-Skripte festzulegen ([Quelle](https://bugzil.la/1581611#c10)).

Das Ausmaß, in dem die CSP das Laden von Inhalts-Skripten steuert, variiert je nach Browser.
In Firefox werden JavaScript-Funktionen wie eval durch die Erweiterung-CSP eingeschränkt. Allgemein unterliegen die meisten auf DOM basierenden APIs der CSP der Webseite.
In Chrome werden viele DOM-APIs von der Erweiterungs-CSP abgedeckt, anstatt von der CSP der Webseite ([crbug 896041](https://crbug.com/896041)).
