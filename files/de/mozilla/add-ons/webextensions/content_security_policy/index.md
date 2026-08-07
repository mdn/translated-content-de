---
title: Content-Security-Policy
slug: Mozilla/Add-ons/WebExtensions/Content_Security_Policy
l10n:
  sourceCommit: ef11240e109e4b39ff9e8cac248d1c7d7c842112
---

Erweiterungen, die mit WebExtension-APIs entwickelt wurden, verfügen standardmäßig über eine Content-Security-Policy (CSP). Diese beschränkt die Quellen, aus denen sie Code wie [\<script>](/de/docs/Web/HTML/Reference/Elements/script) laden können, und verbietet potenziell unsichere Praktiken wie die Verwendung von [`eval()`](/de/docs/Web/JavaScript/Reference/Global_Objects/eval). Dieser Artikel erklärt kurz, was eine CSP ist, welche die Standardrichtlinie ist und was sie für eine Erweiterung bedeutet, und wie eine Erweiterung die Standard-CSP ändern kann.

Die [Content-Security-Policy](/de/docs/Web/HTTP/Guides/CSP) (CSP) ist ein Mechanismus, um zu verhindern, dass Websites versehentlich schädliche Inhalte ausführen. Eine Website spezifiziert eine CSP durch einen HTTP-Header, der vom Server gesendet wird. Die CSP konzentriert sich hauptsächlich darauf, legitime Quellen verschiedener Arten von Inhalten zu spezifizieren, wie Skripte oder eingebettete Plugins. Ein Beispiel: Eine Website kann angeben, dass der Browser nur JavaScript ausführen darf, das von der Website selbst bereitgestellt wird, und nicht aus anderen Quellen. Eine CSP kann den Browser auch anweisen, potenziell unsichere Praktiken, wie die Verwendung von [`eval()`](/de/docs/Web/JavaScript/Reference/Global_Objects/eval), zu verbieten.

Wie Websites können auch Erweiterungen Inhalte aus verschiedenen Quellen laden. Zum Beispiel ist das Popup einer Browser-Aktion als HTML-Dokument spezifiziert, und es kann JavaScript und CSS aus verschiedenen Quellen enthalten, genauso wie eine normale Webseite:

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

Im Vergleich zu einer Website haben Erweiterungen Zugriff auf zusätzliche privilegierte APIs. Wenn sie durch schädlichen Code kompromittiert werden, sind die Risiken daher größer. Aus diesem Grund:

- wird standardmäßig eine ziemlich strenge Content-Security-Policy auf Erweiterungen angewendet. Siehe [Standard Content-Security-Policy](#standard_content-security-policy).
- der Autor der Erweiterung kann die Standardrichtlinie mit dem Schlüssel `content_security_policy` in der Datei manifest.json ändern, aber es gibt Einschränkungen hinsichtlich der zulässigen Richtlinien. Siehe [`content_security_policy`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/content_security_policy).

## Standard Content-Security-Policy

Die Standard-Content-Security-Policy für Erweiterungen, die Manifest V2 verwenden, ist:

```plain
"script-src 'self'; object-src 'self';"
```

Während für Erweiterungen, die Manifest V3 verwenden, die Standard-Content-Security-Policy ist:

```plain
"script-src 'self'; upgrade-insecure-requests;"
```

Diese Richtlinien werden auf jede Erweiterung angewendet, die nicht explizit ihre eigene Content-Security-Policy mit dem Schlüssel [`content_security_policy`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/content_security_policy) in manifest.json festlegt. Dies hat folgende Konsequenzen:

- [Sie dürfen nur \<script> und \<object> Ressourcen laden, die lokal in der Erweiterung vorhanden sind.](#standort_von_skript-_und_objektressourcen)
- [Der Erweiterung ist es nicht gestattet, Zeichenfolgen als JavaScript auszuführen.](#eval_and_friends)
- [Inline-JavaScript wird nicht ausgeführt.](#inline-javascript)
- [WebAssembly kann standardmäßig nicht verwendet werden.](#webassembly)
- [Unsichere Netzwerkanforderungen werden in Manifest V3 aktualisiert.](#unsichere_netzwerkanforderungen_in_manifest_v3_aktualisieren)

### Standort von Skript- und Objektressourcen

Unter der Standard-CSP dürfen Sie nur Code laden, der lokal in der Erweiterung vorhanden ist. Die CSP beschränkt {{CSP("script-src")}} auf sichere Quellen, was [\<script>](/de/docs/Web/HTML/Reference/Elements/script)-Ressourcen, [ES6-Module](/de/docs/Web/JavaScript/Guide/Modules) und [Web Worker](/de/docs/Web/API/Web_Workers_API/Using_web_workers) abdeckt. In Browsern, die veraltete {{Glossary("Plugin", "Plugins")}} unterstützen, wird auch die Direktive {{CSP("object-src")}} eingeschränkt. Weitere Informationen zur `object-src`-Direktive in Erweiterungen finden Sie im WECG-Problem [Remove object-src from the CSP (at least in MV3)](https://github.com/w3c/webextensions/issues/204).

Betrachten Sie beispielsweise eine Zeile wie diese in einem Dokument der Erweiterung:

```html
<script src="https://code.jquery.com/jquery-2.2.4.js"></script>
```

Dies lädt die angeforderte Ressource nicht: Es schlägt stillschweigend fehl, und jedes Objekt, das Sie erwarten, aus der Ressource zu erhalten, wird nicht gefunden. Es gibt zwei Hauptlösungen dafür:

- Laden Sie die Ressource herunter, packen Sie sie in Ihre Erweiterung und verweisen Sie auf diese Version der Ressource.
- Erlauben Sie die benötigte externe Herkunft mithilfe des Schlüssels [`content_security_policy`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/content_security_policy).

> [!NOTE]
> Wenn Ihre modifizierte CSP das Einfügen von Remote-Skripten erlaubt, wird Ihre Erweiterung bei der Überprüfung von addons.mozilla.org (AMO) abgelehnt. Weitere Informationen finden Sie in den Details zu [besten Sicherheitspraktiken](https://extensionworkshop.com/documentation/develop/build-a-secure-extension/).

#### Skripte von localhost

Die Standard-CSP blockiert alle Remote-Skripte, einschließlich Skripten von localhost. Um jedoch die lokale Erweiterungsentwicklung zu unterstützen, akzeptiert die CSP localhost-Quellen als Ausnahme. Sie können diese Funktion für nicht verpackte Manifest V3-Erweiterungen von Chrome 110 und temporär geladene Erweiterungen von Firefox 147 verwenden, indem Sie CSP-Quellen basierend auf `http://localhost` oder `http://127.0.0.1` im Schlüssel [`content_security_policy`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/content_security_policy) angeben. Zum Beispiel:

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

### eval() und verwandte Funktionen

Unter der Standard-CSP dürfen Erweiterungen keine Zeichenfolgen als JavaScript ausführen. Dies bedeutet, dass Folgendes nicht erlaubt ist:

```js
eval("console.log('some output');");
```

```js
setTimeout("alert('Hello World!');", 500);
```

```js
const f = new Function("console.log('foo');");
```

Wenn eine Erweiterung Code ausführen muss, der auf `eval()`-ähnliche Konstrukte angewiesen ist, wie einige Template-Bibliotheken, kann sie diesen Code auf einer [sandboxed page](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/sandbox) isolieren, anstatt die CSP der Erweiterung zu lockern.

### Inline-JavaScript

Unter der Standard-CSP wird Inline-JavaScript nicht ausgeführt. Dies verbietet sowohl JavaScript, das direkt in `<script>`-Tags platziert ist, als auch Inline-Event-Handler. Das Folgende ist daher nicht erlaubt:

```html
<script>
  console.log("foo");
</script>
```

```html
<div onclick="console.log('click')">Click me!</div>
```

Wenn Sie derzeit Code wie `<body onload="main()">` verwenden, um Ihr Skript auszuführen, wenn die Seite geladen ist, sollten Sie stattdessen auf [DOMContentLoaded](/de/docs/Web/API/Document/DOMContentLoaded_event) oder [load](/de/docs/Web/API/Window/load_event) lauschen.

### WebAssembly

Erweiterungen, die [WebAssembly](/de/docs/WebAssembly) verwenden möchten, müssen `'wasm-unsafe-eval'` in der Direktive `script-src` angeben.

Ab Firefox 102 und Chrome 103 kann `'wasm-unsafe-eval'` im [`content_security_policy`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/content_security_policy) Key von manifest.json aufgenommen werden, um die Nutzung von WebAssembly in Erweiterungen zu ermöglichen.

Manifest V2-Erweiterungen in Firefox können WebAssembly ohne `'wasm-unsafe-eval'` in ihrer CSP für die Abwärtskompatibilität verwenden. Allerdings ist dieses Verhalten nicht garantiert, siehe [Firefox bug 1770909](https://bugzil.la/1770909). Erweiterungen, die WebAssembly verwenden, sollten daher `'wasm-unsafe-eval'` in ihrer CSP deklarieren.

Für Chrome können Erweiterungen WebAssembly in Version 101 oder früher nicht verwenden. In 102 können Erweiterungen WebAssembly verwenden (dasselbe Verhalten wie Firefox 101 und früher). Ab Version 103 können Erweiterungen WebAssembly verwenden, wenn sie `'wasm-unsafe-eval'` in der `content_security_policy` im manifest Key enthalten.

### Unsichere Netzwerkanforderungen in Manifest V3 aktualisieren

Erweiterungen sollten `https:` und `wss:` verwenden, wenn sie mit externen Servern kommunizieren. Um dies als Standardverhalten zu fördern, enthält die Standard-CSP von Manifest V3 die Direktive {{CSP("upgrade-insecure-requests")}}. Diese Direktive aktualisiert Netzwerk-Anforderungen zu `http:` automatisch, um `https:` zu verwenden.

Obwohl Anforderungen automatisch aktualisiert werden, wird trotzdem empfohlen, `https:`-URLs im Quellcode der Erweiterung zu verwenden, wo möglich. Insbesondere sollten Einträge im [`host_permissions` Abschnitt von manifest.json](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/host_permissions) mit `https://` oder `*://` beginnen, anstatt nur `http://`.

Manifest V3-Erweiterungen, die `http:` oder `ws:`-Anfragen stellen müssen, können dieses Verhalten umgehen, indem sie die Standard-CSP mit einer Richtlinie überschreiben, die die Direktive `upgrade-insecure-requests` ausschließt. Um jedoch die [Sicherheitsanforderungen](https://extensionworkshop.com/documentation/publish/add-on-policies/#security-compliance-and-blocking) der Add-on-Politiken einzuhalten, müssen alle Benutzerdaten sicher übertragen werden.

## CSP für Content Scripts

In Manifest V2 haben Content Scripts keine CSP.
Ab Manifest V3 teilen Content Scripts die Standard-CSP mit Erweiterungen. Es ist derzeit nicht möglich, eine separate CSP für Content Scripts festzulegen ([Quelle](https://bugzil.la/1581611#c10)).

Das Ausmaß, in dem die CSP Ladevorgänge von Content Scripts steuert, variiert je nach Browser.
In Firefox sind JavaScript-Funktionen wie `eval` durch die CSP der Erweiterung eingeschränkt. Im Allgemeinen unterliegen die meisten DOM-basierten APIs der CSP der Webseite.
In Chrome werden viele DOM-APIs von der CSP der Erweiterung anstelle der CSP der Webseite abgedeckt ([crbug 896041](https://crbug.com/896041)).
