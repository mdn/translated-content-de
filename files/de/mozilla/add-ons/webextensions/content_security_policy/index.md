---
title: Content Security Policy
slug: Mozilla/Add-ons/WebExtensions/Content_Security_Policy
l10n:
  sourceCommit: 668b38a4f6cd96609b9a969fe4653b46aec4e712
---

{{AddonSidebar}}

Erweiterungen, die mit den WebExtension-APIs entwickelt wurden, haben standardmäßig eine Content Security Policy (CSP) angewendet. Diese beschränkt die Quellen, von denen sie Code wie [`<script>`](/de/docs/Web/HTML/Element/script) laden können, und verbietet potenziell unsichere Praktiken wie die Verwendung von [`eval()`](/de/docs/Web/JavaScript/Reference/Global_Objects/eval). Dieser Artikel erklärt kurz, was eine CSP ist, was die Standardrichtlinie ist und was sie für eine Erweiterung bedeutet, sowie wie eine Erweiterung die Standard-CSP ändern kann.

Die [Content Security Policy](/de/docs/Web/HTTP/CSP) (CSP) ist ein Mechanismus, der dazu beiträgt, dass Websites nicht versehentlich bösartigen Inhalt ausführen. Eine Website gibt eine CSP mit einem HTTP-Header an, der vom Server gesendet wird. Die CSP befasst sich hauptsächlich mit der Angabe legitimer Quellen verschiedener Inhaltsarten, wie Skripte oder eingebettete Plugins. Beispielsweise kann eine Website verwenden, um anzugeben, dass der Browser nur JavaScript ausführen soll, das von der Website selbst bereitgestellt wird, und nicht von anderen Quellen. Eine CSP kann den Browser auch anweisen, potenziell unsichere Praktiken zu verbieten, wie die Verwendung von [`eval()`](/de/docs/Web/JavaScript/Reference/Global_Objects/eval).

Wie Websites können auch Erweiterungen Inhalte aus verschiedenen Quellen laden. Zum Beispiel wird das Popup einer Browser-Aktion als HTML-Dokument angegeben, und es kann JavaScript und CSS aus verschiedenen Quellen einfügen, genau wie eine normale Webseite:

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

Im Vergleich zu einer Website haben Erweiterungen Zugriff auf zusätzliche privilegierte APIs. Wenn sie durch bösartigen Code kompromittiert werden, sind die Risiken daher größer. Aus diesem Grund:

- wird Erweiterungen standardmäßig eine relativ strikte Content-Security-Policy zugewiesen. Siehe [Standard-Content-Security-Policy](#standard-content-security-policy).
- Der Autor der Erweiterung kann die Standardrichtlinie mithilfe des Schlüssels `content_security_policy` in der manifest.json-Datei ändern, aber es gibt Einschränkungen hinsichtlich der zulässigen Richtlinien. Siehe [`content_security_policy`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/content_security_policy).

## Standard-Content-Security-Policy

Die Standard-Content-Security-Policy für Erweiterungen, die Manifest V2 verwenden, lautet:

```plain
"script-src 'self'; object-src 'self';"
```

Während für Erweiterungen, die Manifest V3 verwenden, die Standard-Content-Security-Policy lautet:

```plain
"script-src 'self'; upgrade-insecure-requests;"
```

Diese Richtlinien gelten für alle Erweiterungen, die ihre eigene Content-Security-Policy nicht explizit so festgelegt haben, dass sie den [`content_security_policy`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/content_security_policy) Schlüssel in der manifest.json-Datei verwenden. Das hat folgende Konsequenzen:

- [Sie dürfen nur `<script>`- und `<object>`-Ressourcen laden, die lokal zur Erweiterung gehören.](#standort_von_skript-_und_objektressourcen)
- [Die Erweiterung darf keine Zeichenfolgen als JavaScript auswerten.](#eval_and_friends)
- [Inline-JavaScript wird nicht ausgeführt.](#inline_javascript)
- [WebAssembly kann standardmäßig nicht verwendet werden.](#webassembly)
- [Unsichere Netzwerk-Anfragen werden in Manifest V3 aufgerüstet.](#upgrade_unsicherer_netzwerk-anfragen_in_manifest_v3)

### Standort von Skript- und Objektressourcen

Unter der Standard-CSP können Sie nur Code laden, der lokal zur Erweiterung gehört. Die CSP beschränkt {{CSP("script-src")}} auf sichere Quellen, die [\<script>](/de/docs/Web/HTML/Element/script)-Ressourcen, [ES6-Module](/de/docs/Web/JavaScript/Guide/Modules) und [Web-Worker](/de/docs/Web/API/Web_Workers_API/Using_web_workers) abdecken. In Browsern, die veraltete {{Glossary("Plugin", "Plugins")}} unterstützen, ist auch die {{CSP("object-src")}}-Richtlinie eingeschränkt. Für weitere Informationen zu object-src in Erweiterungen siehe das WECG-Problem [Remove object-src from the CSP (at least in MV3)](https://github.com/w3c/webextensions/issues/204)).

Betrachten Sie zum Beispiel eine Zeile wie diese in einem Dokument einer Erweiterung:

```html
<script src="https://code.jquery.com/jquery-2.2.4.js"></script>
```

Dies lädt die angeforderte Ressource nicht: Sie scheitert stillschweigend, und jedes Objekt, das Sie von der Ressource erwarten, erscheint nicht. Es gibt zwei Hauptlösungen dafür:

- Laden Sie die Ressource herunter, packen Sie sie in Ihre Erweiterung und verweisen Sie auf diese Version der Ressource.
- Erlauben Sie den entfernten Ursprung, den Sie benötigen, indem Sie den [`content_security_policy`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/content_security_policy) Schlüssel oder, in Manifest V3, die `content_scripts` Eigenschaft verwenden.

> [!NOTE]
> Wenn Ihre geänderte CSP die Einbindung von Remote-Scripts erlaubt, wird Ihre Erweiterung bei der Überprüfung von addons.mozilla.org (AMO) abgelehnt. Weitere Informationen finden Sie in den Details zu den [Sicherheitsbest Practices](https://extensionworkshop.com/documentation/develop/build-a-secure-extension/).

### eval() und Freunde

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

Unter der Standard-CSP wird Inline-JavaScript nicht ausgeführt. Dies verbietet sowohl JavaScript, das direkt in `<script>`-Tags platziert wird, als auch Inline-Ereignishandler, was bedeutet, dass Folgendes nicht erlaubt ist:

```html
<script>
  console.log("foo");
</script>
```

```html
<div onclick="console.log('click')">Click me!</div>
```

Wenn Sie derzeit Code wie `<body onload="main()">` verwenden, um Ihr Skript auszuführen, wenn die Seite geladen ist, sollten Sie stattdessen auf [DOMContentLoaded](/de/docs/Web/API/Document/DOMContentLoaded_event) oder [load](/de/docs/Web/API/Window/load_event) hören.

### WebAssembly

Erweiterungen, die [WebAssembly](/de/docs/WebAssembly) nutzen möchten, benötigen die Angabe von `'wasm-unsafe-eval'` in der `script-src`-Richtlinie.

Ab Firefox 102 und Chrome 103 kann `'wasm-unsafe-eval'` im [`content_security_policy`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/content_security_policy)-Schlüssel in manifest.json enthalten sein, um die Verwendung von WebAssembly in Erweiterungen zu ermöglichen.

Manifest V2-Erweiterungen in Firefox können WebAssembly ohne `'wasm-unsafe-eval'` in ihrer CSP für Abwärtskompatibilität verwenden. Dieses Verhalten ist jedoch nicht garantiert, siehe [Firefox-Bug 1770909](https://bugzil.la/1770909). Erweiterungen, die WebAssembly verwenden, werden daher ermutigt, `'wasm-unsafe-eval'` in ihrer CSP zu deklarieren.

Für Chrome können Erweiterungen in Version 101 oder früher WebAssembly nicht verwenden. In Version 102 können Erweiterungen WebAssembly verwenden (dasselbe Verhalten wie Firefox 101 und früher). Ab Version 103 können Erweiterungen WebAssembly nutzen, wenn sie `'wasm-unsafe-eval'` in der `content_security_policy` im Manifest-Schlüssel einschließen.

### Upgrade unsicherer Netzwerk-Anfragen in Manifest V3

Erweiterungen sollten `https:` und `wss:` verwenden, wenn sie mit externen Servern kommunizieren. Um dies als Standardverhalten zu fördern, enthält die Standard-CSP von Manifest V3 die {{CSP("upgrade-insecure-requests")}}-Richtlinie. Diese Richtlinie rüstet Netzwerk-Anfragen zu `http:` automatisch auf, um `https:` zu verwenden.

Obwohl Anfragen automatisch aufgerüstet werden, wird dennoch empfohlen, `https:`-URLs im Quellcode der Erweiterung zu verwenden, wo dies möglich ist. Besonders Einträge im [`host_permissions`-Abschnitt der manifest.json](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/host_permissions) sollten mit `https://` oder `*://` anstelle von `http://` beginnen.

Manifest V3-Erweiterungen, die `http:`- oder `ws:`-Anfragen stellen müssen, können dieses Verhalten umgehen, indem sie die Standard-CSP überschreiben und eine Richtlinie anwenden, die die `upgrade-insecure-requests`-Richtlinie ausschließt. Um jedoch die [Sicherheitsanforderungen](https://extensionworkshop.com/documentation/publish/add-on-policies/#security-compliance-and-blocking) der Add-on-Richtlinien einzuhalten, müssen alle Benutzerdaten sicher übertragen werden.

## CSP für Inhalts-Skripte

In Manifest V2 haben Inhalts-Skripte keine CSP.
Ab Manifest V3 teilen Inhalts-Skripte die Standard-CSP mit Erweiterungen. Es ist derzeit nicht möglich, eine separate CSP für Inhalts-Skripte anzugeben ([Quelle](https://bugzil.la/1581611#c10)).

Das Ausmaß, in dem die CSP Ladevorgänge von Inhalts-Skripten kontrolliert, variiert je nach Browser.
In Firefox werden JavaScript-Features wie eval durch die Erweiterungs-CSP eingeschränkt. Allgemein unterliegen die meisten DOM-basierten APIs der CSP der Webseite.
In Chrome werden viele DOM-APIs durch die Erweiterungs-CSP anstelle der CSP der Webseite abgedeckt ([crbug 896041](https://crbug.com/896041)).
