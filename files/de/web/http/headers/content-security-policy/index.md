---
title: Content-Security-Policy
slug: Web/HTTP/Headers/Content-Security-Policy
l10n:
  sourceCommit: 5bd9fe2b25c6eee2a14d0406ce7116998fa48c13
---

{{HTTPSidebar}}

Das HTTP-Header **`Content-Security-Policy`** ermöglicht es Website-Administratoren, die Ressourcen zu kontrollieren, die der User-Agent für eine gegebene Seite laden darf. Mit einigen Ausnahmen betreffen Richtlinien hauptsächlich die Angabe von Server-Ursprüngen und Skript-Endpunkten. Dies hilft, Cross-Site-Scripting-Angriffe abzuwehren ({{Glossary("Cross-site_scripting")}}).

Für weitere Informationen lesen Sie den einführenden Artikel zur [Content Security Policy (CSP)](/de/docs/Web/HTTP/CSP).

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Headertyp</th>
      <td>{{Glossary("Response header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden header name")}}</th>
      <td>nein</td>
    </tr>
  </tbody>
</table>

## Syntax

```http
Content-Security-Policy: <policy-directive>; <policy-directive>
```

wobei `<policy-directive>` besteht aus:
`<directive> <value>` ohne interne Interpunktion.

## Direktiven

### Fetch-Direktiven

{{Glossary("Fetch directive","Fetch directives")}} kontrollieren die Orte, von denen bestimmte Ressourcentypen geladen werden dürfen.

- {{CSP("child-src")}}

  - : Definiert die gültigen Quellen für [Web Workers](/de/docs/Web/API/Web_Workers_API) und geschachtelte Browsing-Kontexte, die mit Elementen wie {{HTMLElement("frame")}} und {{HTMLElement("iframe")}} geladen werden.

    > [!WARNING]
    > Anstatt **`child-src`**,
    > wenn Sie geschachtelte Browsing-Kontexte und Worker regulieren möchten,
    > sollten Sie die Direktiven {{CSP("frame-src")}} und {{CSP("worker-src")}} verwenden.

- {{CSP("connect-src")}}
  - : Beschränkt die URLs, die über Skript-Schnittstellen geladen werden können.
- {{CSP("default-src")}}
  - : Dient als Fallback für die anderen {{Glossary("Fetch directive", "fetch directives")}}.
- {{CSP("fenced-frame-src")}} {{experimental_inline}}
  - : Legt gültige Quellen für geschachtelte Browsing-Kontexte fest, die in {{HTMLElement("fencedframe")}}-Elementen geladen sind.
- {{CSP("font-src")}}
  - : Legt gültige Quellen für Fonts fest, die mit {{cssxref("@font-face")}} geladen werden.
- {{CSP("frame-src")}}
  - : Legt gültige Quellen für geschachtelte Browsing-Kontexte fest, die in Elementen wie {{HTMLElement("frame")}} und {{HTMLElement("iframe")}} geladen sind.
- {{CSP("img-src")}}
  - : Legt gültige Quellen für Bilder und Favicons fest.
- {{CSP("manifest-src")}}
  - : Legt gültige Quellen für Anwendungsmanifest-Dateien fest.
- {{CSP("media-src")}}
  - : Legt gültige Quellen zum Laden von Medien mit den Elementen {{HTMLElement("audio")}}, {{HTMLElement("video")}} und {{HTMLElement("track")}} fest.
- {{CSP("object-src")}}

  - : Legt gültige Quellen für die Elemente {{HTMLElement("object")}} und {{HTMLElement("embed")}} fest.

    > [!NOTE]
    > Elemente, die von `object-src` kontrolliert werden, gelten möglicherweise
    > zufällig als veraltete HTML-Elemente und erhalten keine neuen standardisierten
    > Funktionen (wie die Sicherheitsattribute `sandbox` oder `allow`
    > für `<iframe>`). Daher wird **empfohlen**, diese Fetch-Direktive einzuschränken (z.B. explizit `object-src 'none'` festzulegen, wenn
    > möglich).

- {{CSP("prefetch-src")}} {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Legt gültige Quellen fest, die vorab geladen oder vorausgerechnet werden sollen.
- {{CSP("script-src")}}
  - : Legt gültige Quellen für JavaScript- und WebAssembly-Ressourcen fest.
- {{CSP("script-src-elem")}}
  - : Legt gültige Quellen für JavaScript-{{HTMLElement("script")}}-Elemente fest.
- {{CSP("script-src-attr")}}
  - : Legt gültige Quellen für JavaScript-Inline-Ereignishandler fest.
- {{CSP("style-src")}}
  - : Legt gültige Quellen für Stylesheets fest.
- {{CSP("style-src-elem")}}
  - : Legt gültige Quellen für Stylesheets {{HTMLElement("style")}}-Elemente und
    {{HTMLElement("link")}}-Elemente mit `rel="stylesheet"` fest.
- {{CSP("style-src-attr")}}
  - : Legt gültige Quellen für inline angewendete Stile auf einzelne DOM-Elemente fest.
- {{CSP("worker-src")}}
  - : Legt gültige Quellen für {{domxref("Worker")}}, {{domxref("SharedWorker")}} oder
    {{domxref("ServiceWorker")}}-Skripte fest.

### Dokument-Direktiven

Dokument-Direktiven regeln die Eigenschaften eines Dokuments oder des [Worker](/de/docs/Web/API/Web_Workers_API)-Umfelds, auf das eine Richtlinie angewendet wird.

- {{CSP("base-uri")}}
  - : Beschränkt die URLs, die in einem {{HTMLElement("base")}}-Element eines Dokuments verwendet werden können.
- {{CSP("sandbox")}}
  - : Aktiviert eine Sandbox für die angeforderte Ressource, ähnlich dem
    {{HTMLElement("iframe")}}-Attribut [`sandbox`](/de/docs/Web/HTML/Element/iframe#sandbox).

### Navigations-Direktiven

Navigations-Direktiven regeln, zu welchen Orten ein Benutzer navigieren oder ein Formular übermitteln kann.

- {{CSP("form-action")}}
  - : Beschränkt die URLs, die als Ziel eines Formularübermittlungen aus einem
    bestimmten Kontext verwendet werden können.
- {{CSP("frame-ancestors")}}
  - : Gibt gültige Eltern an, die eine Seite mit {{HTMLElement("frame")}},
    {{HTMLElement("iframe")}}, {{HTMLElement("object")}} oder {{HTMLElement("embed")}} einbetten können.

### Berichterstattungs-Direktiven

Berichterstattungs-Direktiven kontrollieren die Ziel-URL für Berichte über Verstöße gegen CSP in `Content-Security-Policy` und {{HTTPHeader("Content-Security-Policy-Report-Only")}}.

- {{CSP("report-to")}}

  - : Stellt dem Browser ein Token bereit, das den Berichts-Endpunkt oder die Gruppe von Endpunkten identifiziert, an die Informationen über CSP-Verstöße gesendet werden sollen.
    Die Endpunkte, die das Token darstellt, werden durch andere HTTP-Header bereitgestellt, wie {{HTTPHeader("Reporting-Endpoints")}} und {{HTTPHeader("Report-To")}} {{deprecated_inline}}.

    > [!WARNING]
    > Diese Direktive soll [`report-uri`](#report-uri) ersetzen; in Browsern, die `report-to` unterstützen, wird die `report-uri`-Direktive ignoriert.
    > Bis jedoch `report-to` breit unterstützt wird, sollten Sie beide Header angeben, wie gezeigt (wobei `endpoint_name` der Name eines separat bereitgestellten Endpunkts ist):
    >
    > ```http
    > Content-Security-Policy: …; report-uri https://endpoint.example.com; report-to endpoint_name
    > ```

### Andere Direktiven

- {{CSP("require-trusted-types-for")}} {{experimental_inline}}
  - : Erzwingt [Trusted Types](https://w3c.github.io/trusted-types/dist/spec/) an den DOM XSS Injektionsstellen.
- {{CSP("trusted-types")}} {{experimental_inline}}
  - : Wird verwendet, um eine Zulassungsliste von [Trusted Types](https://w3c.github.io/trusted-types/dist/spec/) Richtlinien zu spezifizieren. Trusted Types ermöglicht es Anwendungen, DOM XSS Injektionsstellen so zu sperren, dass sie nur nicht manipulierbare, typisierte Werte anstelle von Strings akzeptieren.
- {{CSP("upgrade-insecure-requests")}}
  - : Weist User Agents an, alle unsicheren URLs einer Website (die über HTTP bereitgestellt werden) so zu behandeln, als wären sie durch sichere URLs (die über HTTPS bereitgestellt werden) ersetzt. Diese Direktive ist für Websites mit einer großen Anzahl unsicherer Legacy-URLs gedacht, die umgeschrieben werden müssen.

### Veraltete Direktiven

- {{CSP("block-all-mixed-content")}} {{deprecated_inline}}

  - : Verhindert das Laden von Assets über HTTP, wenn die Seite über HTTPS geladen wird.

- {{CSP("report-uri")}} {{deprecated_inline}}
  - : Übermittelt dem Browser eine URL, an die Berichte über CSP-Verstöße gesendet werden sollen. Dies wurde durch die [`report-to`](#report-to)-Direktive ersetzt.

## Werte

Eine Übersicht der erlaubten Werte ist unten aufgeführt. Für detaillierte Referenzen siehe [CSP Source Values](/de/docs/Web/HTTP/Headers/Content-Security-Policy/Sources#sources) und die Dokumentation zu einzelnen Direktiven.

### Schlüsselwortwerte

- `'none'`
  - : Erlaubt das Laden von keinen Ressourcen.
- `'self'`
  - : Erlaubt nur Ressourcen vom aktuellen Ursprung.
- `'strict-dynamic'`
  - : Das Vertrauen, das einem Skript auf der Seite aufgrund eines begleitenden Nonce oder Hash gewährt wird, wird auf die von ihm geladenen Skripte erweitert.
- `'report-sample'`
  - : Fordert einen Abschnitt des fehlerhaften Codes im Bericht über den Verstoß an.
- `'inline-speculation-rules'`
  - : Erlaubt die Einbeziehung von [spekulativen Regeln](/de/docs/Web/API/Speculation_Rules_API) in Skripte (siehe auch [`<script type="speculationrules">`](/de/docs/Web/HTML/Element/script/type/speculationrules)).

### Unsafe-Schlüsselwortwerte

- `'unsafe-inline'`
  - : Erlaubt die Nutzung von Inline-Ressourcen.
- `'unsafe-eval'`
  - : Erlaubt die Nutzung dynamischer Codeauswertung wie {{jsxref("Global_Objects/eval", "eval")}}, {{domxref("setTimeout()")}} und `window.execScript` {{non-standard_inline}}.
- `'unsafe-hashes'`
  - : Erlaubt die Aktivierung spezifischer Inline-Ereignishandler.
- `'wasm-unsafe-eval'`
  - : Erlaubt das Laden und Ausführen von WebAssembly-Modulen ohne die Notwendigkeit, auch unsichere JavaScript-Ausführung über `'unsafe-eval'` zu erlauben. Die einfachen Anführungszeichen sind erforderlich.

### Hostwerte

- Host

  - Erlaubt das Laden von Ressourcen nur von einem bestimmten Host, optional mit Schema, Port und Pfad. Zum Beispiel, `example.com`, `*.example.com`, `https://*.example.com:12/path/to/file.js`.
  - Pfadteile im CSP, die mit `/` enden, stimmen mit jedem Pfad überein, dessen Präfix sie sind. Zum Beispiel, `example.com/api/` stimmt mit URLs wie `example.com/api/users/new` überein.
  - Andere Pfadteile im CSP stimmen genau überein; zum Beispiel, `example.com/file.js` wird mit `http://example.com/file.js` und `https://example.com/file.js` übereinstimmen, aber nicht mit `https://example.com/file.js/file2.js`.

- Schema
  - Erlaubt das Laden von Ressourcen nur über ein spezifisches Schema, sollte immer mit `:` enden. Zum Beispiel, `https:`, `http:`, `data:`, etc.

### Andere Werte

- `'nonce-*'`
  - : Ein kryptographischer Nonce (der nur einmal verwendet wird), um Skripte zu erlauben. Der Server muss bei jeder Übertragung einer Richtlinie einen einzigartigen Nonce-Wert generieren. Es ist entscheidend, einen Nonce bereitzustellen, der nicht erraten werden kann, da das Umgehen der Richtlinie einer Ressource sonst trivial wäre. Dies wird in Verbindung mit dem [Skript-Tag-Nonce-Attribut](/de/docs/Web/HTML/Element/script#nonce) verwendet. Zum Beispiel, `nonce-DhcnhD3khTMePgXwdayK9BsMqXjhguVV`.
- `'sha*-*'`
  - : sha256, sha384 oder sha512. Gefolgt von einem Bindestrich und dann dem sha\*-Wert. Zum Beispiel, `sha256-jzgBGA4UWFFmpOBq0JpdsySukE1FrEN5bUpoK8Z29fY=`.

## CSP in Workern

[Worker](/de/docs/Web/API/Worker) werden im Allgemeinen _nicht_ von der Content Security Policy des Dokuments (oder übergeordneten Workern), das sie erstellt hat, regiert. Um eine Content Security Policy für den Worker festzulegen, setzen Sie einen `Content-Security-Policy`-Antwort-Header für die Anfrage, die das Worker-Skript selbst angefordert hat.

Die Ausnahme hiervon besteht, wenn der Ursprung des Worker-Skripts ein global eindeutiger Identifikator ist (zum Beispiel, wenn seine URL ein Schema von data oder blob hat). In diesem Fall erbt der Worker die Content Security Policy des Dokuments oder Workers, das ihn erstellt hat.

## Mehrere Content Security Policies

Der CSP-Mechanismus erlaubt es, dass für eine Ressource mehrere Richtlinien angegeben werden, einschließlich über den `Content-Security-Policy`-Header, den {{HTTPHeader("Content-Security-Policy-Report-Only")}}-Header und ein {{HTMLElement("meta")}}-Element.

Sie können den `Content-Security-Policy`-Header mehrmals verwenden, wie im folgenden Beispiel. Achten Sie besonders auf die {{CSP("connect-src")}}-Direktive hier. Auch wenn die zweite Richtlinie die Verbindung erlauben würde, enthält die erste Richtlinie `connect-src 'none'`. Das Hinzufügen zusätzlicher Richtlinien kann die Fähigkeiten der geschützten Ressource nur weiter einschränken, was bedeutet, dass keine Verbindung erlaubt wird und als die strengste Richtlinie `connect-src 'none'` durchgesetzt wird.

```http
Content-Security-Policy: default-src 'self' http://example.com;
                          connect-src 'none';
Content-Security-Policy: connect-src http://example.com/;
                          script-src http://example.com/
```

## Beispiele

### Unsicheren Inline-Code deaktivieren und nur HTTPS-Ressourcen zulassen

Dieser HTTP-Header setzt die Standardrichtlinie auf das Laden von Ressourcen (Bilder, Schriften, Skripte etc.) nur über HTTPS. Weil die `unsafe-inline` und `unsafe-eval` Direktiven nicht gesetzt sind, werden Inline-Skripte blockiert.

```http
Content-Security-Policy: default-src https:
```

Die gleichen Einschränkungen können mit dem HTML-Element {{htmlelement("meta")}} angewendet werden.

```html
<meta http-equiv="Content-Security-Policy" content="default-src https:" />
```

### Inline-Code und HTTPS-Ressourcen zulassen, aber Plugins deaktivieren

Diese Richtlinie könnte auf einer bestehenden Website verwendet werden, die zu viel Inline-Code nutzt, um sie zu korrigieren, um sicherzustellen, dass Ressourcen nur über HTTPS geladen werden und Plugins deaktiviert werden:

```http
Content-Security-Policy: default-src https: 'unsafe-eval' 'unsafe-inline'; object-src 'none'
```

### Verstöße melden, aber beim Testen nicht durchsetzen

Dieses Beispiel legt die gleichen Einschränkungen wie das vorherige Beispiel fest, verwendet jedoch den Header {{httpheader("Content-Security-Policy-Report-Only")}} und die Direktive {{CSP("report-to")}}. Dieser Ansatz wird während des Testens verwendet, um Verstöße zu melden, aber den Code nicht daran zu hindern, ausgeführt zu werden.

Endpunkte (URLs), an die Berichte gesendet werden sollen, werden mit dem HTTP-Antwort-Header {{HTTPHeader("Reporting-Endpoints")}} definiert.

```http
Reporting-Endpoints: csp-endpoint="https://example.com/csp-reports"
```

Ein bestimmter Endpunkt wird dann in der CSP-Richtlinie mit der Direktive {{CSP("report-to")}} als Berichts-Ziel ausgewählt.

```http
Content-Security-Policy-Report-Only: default-src https:; report-uri /csp-violation-report-url/; report-to csp-endpoint
```

Beachten Sie, dass die {{CSP("report-uri")}} {{deprecated_inline}}-Direktive auch oben angegeben ist, weil `report-to` noch nicht breit von den Browsern unterstützt wird.

Weitere Beispiele finden Sie unter [Content Security Policy (CSP) implementation](/de/docs/Web/Security/Practical_implementation_guides/CSP).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTTPHeader("Content-Security-Policy-Report-Only")}}
- [Learn about: Content Security Policy](/de/docs/Web/HTTP/CSP)
- [Content Security in WebExtensions](/de/docs/Mozilla/Add-ons/WebExtensions/Content_Security_Policy)
- [Adopting a strict policy](https://csp.withgoogle.com/docs/strict-csp.html)
- [CSP Evaluator](https://github.com/google/csp-evaluator) - Ihre
  Content Security Policy evaluieren
