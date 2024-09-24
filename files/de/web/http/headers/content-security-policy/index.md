---
title: Content-Security-Policy
slug: Web/HTTP/Headers/Content-Security-Policy
l10n:
  sourceCommit: 1b4e6d1156e8471d38deeea1567c35ef412c5f42
---

{{HTTPSidebar}}

Der HTTP-Antwortheader **`Content-Security-Policy`** ermöglicht Website-Administratoren, die Ressourcen zu kontrollieren, die der Benutzeragent für eine gegebene Seite laden darf. Mit einigen Ausnahmen beinhalten Richtlinien hauptsächlich die Angabe von Serverursprüngen und Skriptenendpunkten. Dies hilft, Angriffe durch Cross-Site-Scripting ({{Glossary("Cross-site_scripting", "Cross-site_scripting")}}) abzuwehren.

Für weitere Informationen lesen Sie den einführenden Artikel über [Content Security Policy (CSP)](/de/docs/Web/HTTP/CSP).

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Headertyp</th>
      <td>{{Glossary("Response_header", "Antwortheader")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_header_name", "Verbotener Headername")}}</th>
      <td>nein</td>
    </tr>
  </tbody>
</table>

## Syntax

```http
Content-Security-Policy: <policy-directive>; <policy-directive>
```

wobei `<policy-directive>` besteht aus: `<directive> <value>` ohne interne Interpunktion.

## Richtlinien

### Fetch-Richtlinien

{{Glossary("Fetch_directive", "Fetch-Richtlinien")}} steuern die Orte, von denen bestimmte Ressourcentypen geladen werden dürfen.

- {{CSP("child-src")}}

  - : Definiert die gültigen Quellen für [Web Worker](/de/docs/Web/API/Web_Workers_API) und geschachtelte Browsing-Kontexte, die mit Elementen wie {{HTMLElement("frame")}} und {{HTMLElement("iframe")}} geladen werden.

    > [!WARNING]
    > Anstelle von **`child-src`**,
    > wenn Sie geschachtelte Browsing-Kontexte und Worker regulieren möchten,
    > sollten Sie die Richtlinien {{CSP("frame-src")}} und {{CSP("worker-src")}} verwenden.

- {{CSP("connect-src")}}
  - : Beschränkt die URLs, die mit Skript-Schnittstellen geladen werden können.
- {{CSP("default-src")}}
  - : Dient als Rückfall für die anderen {{Glossary("Fetch_directive", "Fetch-Richtlinien")}}.
- {{CSP("fenced-frame-src")}} {{experimental_inline}}
  - : Gibt gültige Quellen für geschachtelte Browsing-Kontexte an, die in {{HTMLElement("fencedframe")}}-Elemente geladen werden.
- {{CSP("font-src")}}
  - : Gibt gültige Quellen für mit {{cssxref("@font-face")}} geladene Schriftarten an.
- {{CSP("frame-src")}}
  - : Gibt gültige Quellen für geschachtelte Browsing-Kontexte an, die in Elemente wie {{HTMLElement("frame")}} und {{HTMLElement("iframe")}} geladen werden.
- {{CSP("img-src")}}
  - : Legt gültige Quellen von Bildern und Favicons fest.
- {{CSP("manifest-src")}}
  - : Gibt gültige Quellen von Anwendungsmanifestdateien an.
- {{CSP("media-src")}}
  - : Gibt gültige Quellen zum Laden von Medien mit den Elementen {{HTMLElement("audio")}}, {{HTMLElement("video")}} und {{HTMLElement("track")}} an.
- {{CSP("object-src")}}

  - : Gibt gültige Quellen für die Elemente {{HTMLElement("object")}} und {{HTMLElement("embed")}} an.

    > [!NOTE]
    > Elemente, die von `object-src` kontrolliert werden, sind möglicherweise zufällig als veraltete HTML-Elemente angesehen und erhalten keine neuen standardisierten Funktionen (wie die Sicherheitsattribute `sandbox` oder `allow` für `<iframe>`). Daher wird **empfohlen**, diese Fetch-Richtlinie einzuschränken (z.B. explizit `object-src 'none'` festzulegen, wenn möglich).

- {{CSP("prefetch-src")}} {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Gibt gültige Quellen an, die vorgeladen oder vorgerendert werden sollen.
- {{CSP("script-src")}}
  - : Gibt gültige Quellen für JavaScript- und WebAssembly-Ressourcen an.
- {{CSP("script-src-elem")}}
  - : Gibt gültige Quellen für JavaScript {{HTMLElement("script")}}-Elemente an.
- {{CSP("script-src-attr")}}
  - : Gibt gültige Quellen für JavaScript-Inline-Ereignishandler an.
- {{CSP("style-src")}}
  - : Gibt gültige Quellen für Stylesheets an.
- {{CSP("style-src-elem")}}
  - : Gibt gültige Quellen für Stylesheets an, die in {{HTMLElement("style")}}-Elementen und {{HTMLElement("link")}}-Elementen mit `rel="stylesheet"` geladen werden.
- {{CSP("style-src-attr")}}
  - : Gibt gültige Quellen für Inline-Stile an, die auf einzelne DOM-Elemente angewendet werden.
- {{CSP("worker-src")}}
  - : Gibt gültige Quellen für [`Worker`](/de/docs/Web/API/Worker), [`SharedWorker`](/de/docs/Web/API/SharedWorker) oder [`ServiceWorker`](/de/docs/Web/API/ServiceWorker)-Skripte an.

### Dokumentrichtlinien

Dokumentrichtlinien steuern die Eigenschaften eines Dokuments oder einer [Worker](/de/docs/Web/API/Web_Workers_API)-Umgebung, auf die eine Richtlinie angewendet wird.

- {{CSP("base-uri")}}
  - : Beschränkt die URLs, die im {{HTMLElement("base")}}-Element eines Dokuments verwendet werden können.
- {{CSP("sandbox")}}
  - : Aktiviert eine Sandbox für die angeforderte Ressource, ähnlich dem [`sandbox`](/de/docs/Web/HTML/Element/iframe#sandbox)-Attribut des {{HTMLElement("iframe")}}.

### Navigationsrichtlinien

Navigationsrichtlinien regeln, wohin ein Benutzer navigieren oder ein Formular senden kann.

- {{CSP("form-action")}}
  - : Beschränkt die URLs, die als Ziel von Formularübermittlungen in einem gegebenen Kontext verwendet werden können.
- {{CSP("frame-ancestors")}}
  - : Gibt gültige übergeordnete Elemente an, die eine Seite mit {{HTMLElement("frame")}}, {{HTMLElement("iframe")}}, {{HTMLElement("object")}} oder {{HTMLElement("embed")}} einbetten können.

### Berichtsrichtlinien

Berichtsrichtlinien steuern die Ziel-URL für CSP-Verstoßberichte in `Content-Security-Policy` und {{HTTPHeader("Content-Security-Policy-Report-Only")}}.

- {{CSP("report-to")}}

  - : Versorgt den Browser mit einem Token, das den Berichts-Endpunkt oder eine Gruppe von Endpunkten identifiziert, an die CSP-Verstoßinformationen gesendet werden sollen. Die Endpunkte, die das Token repräsentiert, werden durch andere HTTP-Header bereitgestellt, wie {{HTTPHeader("Reporting-Endpoints")}} und {{HTTPHeader("Report-To")}} {{deprecated_inline}}.

    > [!WARNING]
    > Diese Richtlinie soll [`report-uri`](#report-uri) ersetzen. In Browsern, die `report-to` unterstützen, wird die `report-uri`-Richtlinie ignoriert.
    > Bis `report-to` jedoch breit unterstützt wird, sollten Sie beide Header wie gezeigt angeben (wobei `endpoint_name` der Name eines separat bereitgestellten Endpunkts ist):
    >
    > ```http
    > Content-Security-Policy: …; report-uri https://endpoint.example.com; report-to endpoint_name
    > ```

### Weitere Richtlinien

- {{CSP("require-trusted-types-for")}} {{experimental_inline}}
  - : Erzwingt [Trusted Types](https://w3c.github.io/trusted-types/dist/spec/) an den DOM-XSS-Einspritzsinks.
- {{CSP("trusted-types")}} {{experimental_inline}}
  - : Wird verwendet, um eine Zulassungsliste von [Trusted Types](https://w3c.github.io/trusted-types/dist/spec/) Richtlinien zu spezifizieren. Trusted Types erlauben es Anwendungen, DOM-XSS-Einspritzsinks zu sperren, um nur nicht fälschbare, typisierte Werte anstelle von Strings zu akzeptieren.
- {{CSP("upgrade-insecure-requests")}}
  - : Instruiert Benutzeragenten, alle unsicheren URLs (die über HTTP bereitgestellt werden) einer Site so zu behandeln, als wären sie durch sichere URLs (die über HTTPS bereitgestellt werden) ersetzt worden. Diese Richtlinie ist für Websites mit einer großen Anzahl unsicherer Legacy-URLs gedacht, die umgeschrieben werden müssen.

### Veraltete Richtlinien

- {{CSP("block-all-mixed-content")}} {{deprecated_inline}}

  - : Verhindert das Laden von Ressourcen über HTTP, wenn die Seite über HTTPS geladen wird.

- {{CSP("report-uri")}} {{deprecated_inline}}
  - : Versorgt den Browser mit einer URL, an die CSP-Verstoßberichte gesendet werden sollen. Diese wurde durch die Richtlinie [`report-to`](#report-to) ersetzt.

## Werte

Eine Übersicht der zulässigen Werte ist unten aufgeführt. Für detaillierte Referenzen siehe [CSP-Quellenwerte](/de/docs/Web/HTTP/Headers/Content-Security-Policy/Sources) und die Dokumentation zu den einzelnen Richtlinien.

### Schlüsselwortwerte

- `'none'`
  - : Erlaubt das Laden von keinerlei Ressourcen.
- `'self'`
  - : Erlaubt nur Ressourcen vom aktuellen Ursprung.
- `'strict-dynamic'`
  - : Das Vertrauen, das einem Skript auf der Seite aufgrund eines begleitenden Nonce oder Hash gewährt wird, wird auf die Skripte, die es lädt, erweitert.
- `'report-sample'`
  - : Verlangt, dass ein Muster des gegen die Richtlinie verstoßenden Codes in den Verstoßbericht aufgenommen wird.
- `'inline-speculation-rules'`
  - : Erlaubt die Einbeziehung von [Spekulationsregeln](/de/docs/Web/API/Speculation_Rules_API) in Skripte (siehe auch [`<script type="speculationrules">`](/de/docs/Web/HTML/Element/script/type/speculationrules)).

### Unsichere Schlüsselwortwerte

- `'unsafe-inline'`
  - : Erlaubt die Verwendung von Inline-Ressourcen.
- `'unsafe-eval'`
  - : Erlaubt die Verwendung von dynamischen Codeauswertungen wie {{jsxref("Global_Objects/eval", "eval")}}, [`setTimeout()`](/de/docs/Web/API/Window/setTimeout) und `window.execScript` {{non-standard_inline}}.
- `'unsafe-hashes'`
  - : Erlaubt die Aktivierung spezieller Inline-Ereignishandler.
- `'wasm-unsafe-eval'`
  - : Erlaubt das Laden und die Ausführung von WebAssembly-Modulen, ohne dass auch unsichere JavaScript-Ausführung über `'unsafe-eval'` erlaube ist. Die einfachen Anführungszeichen sind erforderlich.

### Hostwerte

- Host

  - Nur das Laden von Ressourcen von einem bestimmten Host erlauben, mit optionalem Schema, Port und Pfad. Zum Beispiel `example.com`, `*.example.com`, `https://*.example.com:12/path/to/file.js`.
  - Pfadkomponenten im CSP, die mit `/` enden, passen zu jedem Pfad, von dem sie ein Präfix sind. Zum Beispiel wird `example.com/api/` zu URLs wie `example.com/api/users/new` passen.
  - Andere Pfadkomponenten im CSP werden genau abgeglichen; zum Beispiel wird `example.com/file.js` mit `http://example.com/file.js` und `https://example.com/file.js` passen, aber nicht mit `https://example.com/file.js/file2.js`.

- Schema
  - Nur das Laden von Ressourcen über ein bestimmtes Schema erlauben, sollte immer mit `:` enden. Zum Beispiel `https:`, `http:`, `data:` usw.

### Andere Werte

- `'nonce-*'`
  - : Ein kryptografischer Nonce (nur einmal verwendet), um Skripte zu erlauben. Der Server muss bei jeder Übertragung einer Richtlinie einen eindeutigen Nonce-Wert erzeugen. Es ist entscheidend, einen Nonce bereitzustellen, der nicht erraten werden kann, da das Umgehen der Richtlinie einer Ressource andernfalls trivial ist. Dies wird in Verbindung mit dem [Nonce-Attribut des Skript-Tags](/de/docs/Web/HTML/Element/script#nonce) verwendet. Zum Beispiel `nonce-DhcnhD3khTMePgXwdayK9BsMqXjhguVV`.
- `'sha*-*'`
  - : sha256, sha384 oder sha512. Gefolgt von einem Bindestrich und dann dem sha\*-Wert. Zum Beispiel `sha256-jzgBGA4UWFFmpOBq0JpdsySukE1FrEN5bUpoK8Z29fY=`.

## CSP in Workern

[Worker](/de/docs/Web/API/Worker) werden im Allgemeinen _nicht_ durch die Inhalts-Sicherheitsrichtlinie des Dokuments (oder übergeordneten Workers) geregelt, das sie erstellt hat. Um eine Inhalts-Sicherheitsrichtlinie für den Worker festzulegen, setzen Sie einen `Content-Security-Policy`-Antwortheader für die Anfrage, die das Worker-Skript selbst angefordert hat.

Die Ausnahme hiervon ist, wenn das Ursprungs-Skript des Workers eine global eindeutige Kennung ist (zum Beispiel, wenn seine URL ein Schema von Daten oder Blob hat). In diesem Fall erbt der Worker die Inhalts-Sicherheitsrichtlinie des Dokuments oder Workers, das ihn erstellt hat.

## Mehrere Inhalts-Sicherheitsrichtlinien

Der CSP-Mechanismus erlaubt es, mehrere Richtlinien für eine Ressource festzulegen, einschließlich über den `Content-Security-Policy`-Header, den {{HTTPHeader("Content-Security-Policy-Report-Only")}}-Header und ein {{HTMLElement("meta")}}-Element.

Sie können den `Content-Security-Policy`-Header mehr als einmal verwenden, wie im folgenden Beispiel. Achten Sie besonders auf die {{CSP("connect-src")}}-Richtlinie hier. Auch wenn die zweite Richtlinie die Verbindung erlauben würde, enthält die erste Richtlinie `connect-src 'none'`. Zusätzliche Richtlinien können die Fähigkeiten der geschützten Ressource nur weiter einschränken, was bedeutet, dass keine Verbindung zugelassen wird, und als strengste Richtlinie `connect-src 'none'` durchgesetzt wird.

```http
Content-Security-Policy: default-src 'self' http://example.com;
                          connect-src 'none';
Content-Security-Policy: connect-src http://example.com/;
                          script-src http://example.com/
```

## Beispiele

### Unsicheren Inline-Code deaktivieren und nur HTTPS-Ressourcen erlauben

Dieser HTTP-Header setzt die Standardrichtlinie so, dass nur das Laden von Ressourcen (Bilder, Schriftarten, Skripte usw.) über HTTPS erlaubt ist. Da die Richtlinien `unsafe-inline` und `unsafe-eval` nicht gesetzt sind, werden Inline-Skripte blockiert.

```http
Content-Security-Policy: default-src https:
```

Die gleichen Einschränkungen können mit dem HTML-{{htmlelement("meta")}}-Element angewendet werden.

```html
<meta http-equiv="Content-Security-Policy" content="default-src https:" />
```

### Inline-Code und HTTPS-Ressourcen erlauben, aber Plugins deaktivieren

Diese Richtlinie könnte auf einer bestehenden Seite verwendet werden, die zu viel Inline-Code verwendet, um sie zu reparieren, um sicherzustellen, dass Ressourcen nur über HTTPS geladen werden, und Plugins zu deaktivieren:

```http
Content-Security-Policy: default-src https: 'unsafe-eval' 'unsafe-inline'; object-src 'none'
```

### Verstöße melden, aber beim Testen nicht erzwingen

Dieses Beispiel setzt dieselben Restriktionen wie das vorherige Beispiel, verwendet jedoch den {{httpheader("Content-Security-Policy-Report-Only")}}-Header und die {{CSP("report-to")}}-Richtlinie. Dieser Ansatz wird während des Testens verwendet, um Verstöße zu melden, aber das Ausführen von Code nicht zu blockieren.

Endpoints (URLs), an die Berichte gesendet werden sollen, werden mit dem HTTP-Antwortheader {{HTTPHeader("Reporting-Endpoints")}} definiert.

```http
Reporting-Endpoints: csp-endpoint="https://example.com/csp-reports"
```

Ein bestimmter Endpunkt wird dann im CSP über die {{CSP("report-to")}}-Richtlinie als Berichts-Ziel ausgewählt.

```http
Content-Security-Policy-Report-Only: default-src https:; report-uri /csp-violation-report-url/; report-to csp-endpoint
```

Beachten Sie, dass die {{CSP("report-uri")}} {{deprecated_inline}}-Richtlinie auch oben angegeben ist, da `report-to` noch nicht umfassend von Browsern unterstützt wird.

Siehe [Implementierung der Content Security Policy (CSP)](/de/docs/Web/Security/Practical_implementation_guides/CSP) für weitere Beispiele.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTTPHeader("Content-Security-Policy-Report-Only")}}
- [Erfahren Sie mehr über: Content Security Policy](/de/docs/Web/HTTP/CSP)
- [Content Security in WebExtensions](/de/docs/Mozilla/Add-ons/WebExtensions/Content_Security_Policy)
- [Annahme einer strikten Richtlinie](https://csp.withgoogle.com/docs/strict-csp.html)
- [CSP Evaluator](https://github.com/google/csp-evaluator) - Evaluieren Sie Ihre Content Security Policy
