---
title: Content-Sicherheitsrichtlinie
slug: Mozilla/Add-ons/WebExtensions/Content_Security_Policy
l10n:
  sourceCommit: 668b38a4f6cd96609b9a969fe4653b46aec4e712
---

{{AddonSidebar}}

Erweiterungen, die mit den WebExtension-APIs entwickelt wurden, haben standardmäßig eine Content-Sicherheitsrichtlinie (CSP) angewendet. Diese beschränkt die Quellen, aus denen sie Code wie [\<script>](/de/docs/Web/HTML/Element/script) laden können, und verbietet potenziell unsichere Praktiken wie die Verwendung von [`eval()`](/de/docs/Web/JavaScript/Reference/Global_Objects/eval). Dieser Artikel erklärt kurz, was eine CSP ist, was die Standardrichtlinie ist und was sie für eine Erweiterung bedeutet, sowie wie eine Erweiterung die Standard-CSP ändern kann.

Die [Content-Sicherheitsrichtlinie](/de/docs/Web/HTTP/CSP) (CSP) ist ein Mechanismus, der helfen soll, zu verhindern, dass Webseiten unbeabsichtigten schädlichen Inhalt ausführen. Eine Webseite gibt eine CSP unter Verwendung eines HTTP-Headers an, der vom Server gesendet wird. Die CSP bezieht sich hauptsächlich darauf, legitime Quellen verschiedener Arten von Inhalten festzulegen, wie etwa Skripte oder eingebettete Plugins. Eine Webseite kann beispielsweise angeben, dass der Browser nur JavaScript ausführen soll, das von der Webseite selbst bereitgestellt wird, und nicht von anderen Quellen. Eine CSP kann dem Browser auch anweisen, potenziell unsichere Praktiken zu verbieten, wie die Verwendung von [`eval()`](/de/docs/Web/JavaScript/Reference/Global_Objects/eval).

Wie Webseiten können Erweiterungen Inhalte aus verschiedenen Quellen laden. Zum Beispiel wird das Popup einer Browseraktion als HTML-Dokument angegeben und kann JavaScript und CSS aus verschiedenen Quellen beinhalten, ähnlich wie eine normale Webseite:

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
      See also https://developer.mozilla.org/de/docs/Web/Security/Subresource_Integrity.
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

Im Vergleich zu einer Webseite haben Erweiterungen Zugang zu zusätzlichen privilegierten APIs, sodass die Risiken größer sind, wenn sie durch schädlichen Code kompromittiert werden. Aus diesem Grund:

- wird standardmäßig eine ziemlich strikte Content-Sicherheitsrichtlinie auf Erweiterungen angewendet. Siehe [Standard-Content-Sicherheitsrichtlinie](#standard-content-sicherheitsrichtlinie).
- kann der Autor der Erweiterung die Standardrichtlinie mit dem `content_security_policy` manifest.json-Schlüssel ändern, es gibt jedoch Einschränkungen hinsichtlich der erlaubten Richtlinien. Siehe [`content_security_policy`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/content_security_policy).

## Standard-Content-Sicherheitsrichtlinie

Die Standard-Content-Sicherheitsrichtlinie für Erweiterungen, die Manifest V2 verwenden, lautet:

```plain
"script-src 'self'; object-src 'self';"
```

Während für Erweiterungen, die Manifest V3 verwenden, die Standard-Content-Sicherheitsrichtlinie lautet:

```plain
"script-src 'self'; upgrade-insecure-requests;"
```

Diese Richtlinien werden auf jede Erweiterung angewendet, die nicht explizit ihre eigene Content-Sicherheitsrichtlinie mit dem [`content_security_policy`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/content_security_policy) manifest.json-Schlüssel gesetzt hat. Es hat folgende Konsequenzen:

- [Sie dürfen nur \<script> und \<object> Ressourcen laden, die lokal in der Erweiterung sind.](#standort_der_skript-_und_objekteressourcen)
- [Die Erweiterung darf keine Zeichenfolgen als JavaScript ausführen.](#eval_and_friends)
- [Inline-JavaScript wird nicht ausgeführt.](#inline-javascript)
- [WebAssembly kann standardmäßig nicht verwendet werden.](#webassembly)
- [Unsichere Netzwerk-Anfragen werden in Manifest V3 aktualisiert.](#unsichere_netzwerk-anfragen_in_manifest_v3_aktualisieren)

### Standort der Skript- und Objekteressourcen

Unter der Standard-CSP können Sie nur Code laden, der lokal in der Erweiterung ist. Die CSP beschränkt {{CSP("script-src")}} auf sichere Quellen, die [\<script>](/de/docs/Web/HTML/Element/script) Ressourcen, [ES6-Module](/de/docs/Web/JavaScript/Guide/Modules) und [Web-Arbeiter](/de/docs/Web/API/Web_Workers_API/Using_web_workers) abdecken. In Browsern, die veraltete [Plugins](/de/docs/Glossary/Plugin) unterstützen, ist auch die {{CSP("object-src")}}-Anweisung beschränkt. Für weitere Informationen zu object-src in Erweiterungen siehe das WECG-Projekt [Remove object-src from the CSP (at least in MV3)](https://github.com/w3c/webextensions/issues/204).

Betrachten Sie zum Beispiel eine Zeile wie diese in einem Dokument einer Erweiterung:

```html
<script src="https://code.jquery.com/jquery-2.2.4.js"></script>
```

Dies lädt die angeforderte Ressource nicht: es schlägt stillschweigend fehl, und jedes Objekt, das Sie von der Ressource erwarten, wird nicht gefunden. Es gibt zwei Hauptlösungen hierfür:

- Laden Sie die Ressource herunter, packen Sie sie in Ihre Erweiterung und beziehen Sie sich auf diese Version der Ressource.
- Erlauben Sie den benötigten Remote-Ursprung mithilfe des [`content_security_policy`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/content_security_policy)-Schlüssels oder, in Manifest V3, der `content_scripts`-Eigenschaft.

> [!NOTE]
> Wenn Ihre modifizierte CSP die Injektion von Skripten aus der Ferne erlaubt, wird Ihre Erweiterung während der Überprüfung von addons.mozilla.org (AMO) abgelehnt. Für weitere Informationen siehe Einzelheiten zu [Sicherheitsbest Practices](https://extensionworkshop.com/documentation/develop/build-a-secure-extension/).

### eval() und Freunde

Unter der Standard-CSP können Erweiterungen keine Zeichenfolgen als JavaScript ausführen. Dies bedeutet, dass Folgendes nicht erlaubt ist:

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
<div onclick="console.log('click')">Klicke mich!</div>
```

Wenn Sie derzeit Code wie `<body onload="main()">` verwenden, um Ihr Skript auszuführen, wenn die Seite geladen wurde, sollten Sie auf [DOMContentLoaded](/de/docs/Web/API/Document/DOMContentLoaded_event) oder [load](/de/docs/Web/API/Window/load_event) lauschen.

### WebAssembly

Erweiterungen, die [WebAssembly](/de/docs/WebAssembly) verwenden möchten, müssen `'wasm-unsafe-eval'` in der `script-src`-Anweisung spezifizieren.

Ab Firefox 102 und Chrome 103 kann `'wasm-unsafe-eval'` im [`content_security_policy`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/content_security_policy)-manifest.json-Schlüssel enthalten sein, um die Verwendung von WebAssembly in Erweiterungen zu ermöglichen.

Manifest V2-Erweiterungen in Firefox können WebAssembly ohne `'wasm-unsafe-eval'` in ihrer CSP für die Abwärtskompatibilität verwenden. Dieses Verhalten ist jedoch nicht garantiert, siehe [Firefox-Fehler 1770909](https://bugzil.la/1770909). Erweiterungen, die WebAssembly verwenden, wird daher empfohlen, `'wasm-unsafe-eval'` in ihrer CSP anzugeben.

Für Chrome können Erweiterungen in Version 101 oder früher kein WebAssembly verwenden. In 102 können Erweiterungen WebAssembly verwenden (gleiches Verhalten wie Firefox 101 und früher). Ab Version 103 können Erweiterungen WebAssembly verwenden, wenn sie `'wasm-unsafe-eval'` in der `content_security_policy` im manifest-Schlüssel einschließen.

### Unsichere Netzwerk-Anfragen in Manifest V3 aktualisieren

Erweiterungen sollten `https:` und `wss:` verwenden, wenn sie mit externen Servern kommunizieren. Um dies als Standardverhalten zu fördern, enthält die Standard-CSP von Manifest V3 die {{CSP("upgrade-insecure-requests")}}-Anweisung. Diese Anweisung aktualisiert automatisch Netzwerk-Anfragen an `http:` auf `https:`.

Obwohl Anfragen automatisch aktualisiert werden, wird dennoch empfohlen, `https:`-URLs im Quellcode der Erweiterung zu verwenden, wo möglich. Insbesondere Einträge im [`host_permissions` Abschnitt von manifest.json](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/host_permissions) sollten mit `https://` oder `*://` anstelle von nur `http://` beginnen.

Extensions von Manifest V3, die `http:`- oder `ws:`-Anfragen machen müssen, können dieses Verhalten deaktivieren, indem sie die Standard-CSP überschreiben und den [`content_security_policy`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/content_security_policy)-manifest.json-Schlüssel mit einer Richtlinie versehen, die die `upgrade-insecure-requests`-Anweisung ausschließt. Um jedoch den [Sicherheitsanforderungen](https://extensionworkshop.com/documentation/publish/add-on-policies/#security-compliance-and-blocking) der Add-on-Richtlinien zu entsprechen, müssen alle Benutzerdaten sicher übertragen werden.

## CSP für Inhalts-Skripte

In Manifest V2 haben Inhalts-Skripte keine CSP.
Ab Manifest V3 teilen Inhalts-Skripte die Standard-CSP mit Erweiterungen. Es ist derzeit nicht möglich, eine separate CSP für Inhalts-Skripte zu spezifizieren ([Quelle](https://bugzil.la/1581611#c10)).

Das Ausmaß, in dem die CSP das Laden von Inhalts-Skripten steuert, variiert je nach Browser.
In Firefox werden JavaScript-Funktionen wie eval durch die CSP der Erweiterung eingeschränkt. Im Allgemeinen unterliegen die meisten DOM-basierten APIs der CSP der Webseite.
In Chrome werden viele DOM-APIs von der CSP der Erweiterung abgedeckt, anstatt von der CSP der Webseite ([crbug 896041](https://crbug.com/896041)).
