---
title: Content-Security-Policy (CSP)
short-title: Content-Security-Policy
slug: Web/HTTP/Headers/Content-Security-Policy
l10n:
  sourceCommit: 4d9320f9857fb80fef5f3fe78e3d09b06eb0ebbd
---

{{HTTPSidebar}}

Der HTTP **`Content-Security-Policy`** Antwort-Header erlaubt Website-Administratoren, die Ressourcen zu kontrollieren, die der Benutzeragent für eine bestimmte Seite laden darf. Mit wenigen Ausnahmen betrifft eine Richtlinie hauptsächlich die Angabe von Server-Ursprüngen und Skript-Endpunkten. Dies hilft, {{Glossary("cross-site_scripting", "Cross-Site Scripting")}} Angriffe zu verhindern.

Sehen Sie sich den [Content Security Policy (CSP)](/de/docs/Web/HTTP/CSP) Leitfaden an, um Details darüber zu erfahren, wie eine CSP an den Browser geliefert wird, wie sie aussieht, zusammen mit Anwendungsfällen und Bereitstellungsstrategien.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Response_header", "Antwort-Header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_header_name", "Verbotener Header-Name")}}</th>
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

### Abruf-Direktiven

Abruf-Direktiven steuern die Standorte, von denen bestimmte Ressourcentypen geladen werden dürfen.

- {{CSP("child-src")}}

  - : Definiert die gültigen Quellen für [Web Workers](/de/docs/Web/API/Web_Workers_API) und verschachtelte Browsing-Kontexte, die mit Elementen wie {{HTMLElement("frame")}} und {{HTMLElement("iframe")}} geladen werden.

    [Ersatz](#ersatzrichtlinien) für `frame-src` und `worker-src`.

- {{CSP("connect-src")}}
  - : Beschränkt die URLs, die mit Skriptschnittstellen geladen werden können.
- {{CSP("default-src")}}

  - : Dient als Ersatz für die anderen {{Glossary("Fetch_directive", "Abruf-Direktiven")}}.

    [Ersatz](#ersatzrichtlinien) für alle anderen Abruf-Direktiven.

- {{CSP("fenced-frame-src")}} {{experimental_inline}}
  - : Gibt gültige Quellen für verschachtelte Browsing-Kontexte an, die in {{HTMLElement("fencedframe")}} Elementen geladen werden.
- {{CSP("font-src")}}
  - : Spezifiziert gültige Quellen für Schriften, die mit {{cssxref("@font-face")}} geladen werden.
- {{CSP("frame-src")}}
  - : Gibt gültige Quellen für verschachtelte Browsing-Kontexte an, die in Elementen wie {{HTMLElement("frame")}} und {{HTMLElement("iframe")}} geladen werden.
- {{CSP("img-src")}}
  - : Spezifiziert gültige Quellen von Bildern und Favicons.
- {{CSP("manifest-src")}}
  - : Spezifiziert gültige Quellen von Anwendungsmanifestdateien.
- {{CSP("media-src")}}
  - : Spezifiziert gültige Quellen zum Laden von Medien mit den {{HTMLElement("audio")}}, {{HTMLElement("video")}} und {{HTMLElement("track")}} Elementen.
- {{CSP("object-src")}}
  - : Gibt gültige Quellen für die {{HTMLElement("object")}} und {{HTMLElement("embed")}} Elemente an.
- {{CSP("prefetch-src")}} {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Spezifiziert gültige Quellen, die vorgeladen oder vorgerendert werden sollen.
- {{CSP("script-src")}}

  - : Gibt gültige Quellen für JavaScript- und WebAssembly-Ressourcen an.

    [Ersatz](#ersatzrichtlinien) für `script-src-elem` und `script-src-attr`.

- {{CSP("script-src-elem")}}
  - : Gibt gültige Quellen für JavaScript {{HTMLElement("script")}} Elemente an.
- {{CSP("script-src-attr")}}
  - : Gibt gültige Quellen für JavaScript-Inline-Event-Handler an.
- {{CSP("style-src")}}

  - : Spezifiziert gültige Quellen für Stylesheets.

    [Ersatz](#ersatzrichtlinien) für `style-src-elem` und `style-src-attr`.

- {{CSP("style-src-elem")}}
  - : Gibt gültige Quellen für Stylesheets {{HTMLElement("style")}} Elemente und {{HTMLElement("link")}} Elemente mit `rel="stylesheet"` an.
- {{CSP("style-src-attr")}}
  - : Gibt gültige Quellen für Inline-Stile an, die auf einzelne DOM-Elemente angewendet werden.
- {{CSP("worker-src")}}
  - : Gibt gültige Quellen für [`Worker`](/de/docs/Web/API/Worker), [`SharedWorker`](/de/docs/Web/API/SharedWorker) oder [`ServiceWorker`](/de/docs/Web/API/ServiceWorker) Skripte an.

Alle Abruf-Direktiven können den einzelnen Wert `'none'` angegeben bekommen, was bedeutet, dass der spezifische Ressourcentyp vollständig blockiert werden soll, oder als ein oder mehrere _source expression_ Werte, die gültige Quellen für diesen Ressourcentyp angeben. Siehe [Abruf-Direktiven-Syntax](#abruf-direktiven-syntax) für weitere Details.

#### Ersatzrichtlinien

Einige Abruf-Direktiven fungieren als Ersatzrichtlinien für andere spezifischere Direktiven. Das bedeutet, dass, wenn die spezifischere Direktive nicht angegeben ist, der Ersatz zur Bereitstellung einer Richtlinie für diesen Ressourcentyp verwendet wird.

- `default-src` ist ein Ersatz für alle anderen Abruf-Direktiven.
- `script-src` ist ein Ersatz für `script-src-attr` und `script-src-elem`.
- `style-src` ist ein Ersatz für `style-src-attr` und `style-src-elem`.
- `child-src` ist ein Ersatz für `frame-src` und `worker-src`.

Zum Beispiel:

- Wenn `img-src` weggelassen wird, aber `default-src` enthalten ist, wird die von `default-src` definierte Richtlinie auf Bilder angewendet.
- Wenn `script-src-elem` weggelassen wird, aber `script-src` enthalten ist, wird die von `script-src` definierte Richtlinie auf `<script>` Elemente angewendet.
- Wenn `script-src-elem` und `script-src` beide weggelassen werden, aber `default-src` enthalten ist, wird die von `default-src` definierte Richtlinie auf `<script>` Elemente angewendet.

### Dokument-Direktiven

Dokument-Direktiven regeln die Eigenschaften eines Dokuments oder [Workers](/de/docs/Web/API/Web_Workers_API) Umgebung, auf die eine Richtlinie angewendet wird.

- {{CSP("base-uri")}}
  - : Beschränkt die URLs, die in einem {{HTMLElement("base")}} Element eines Dokuments verwendet werden können.
- {{CSP("sandbox")}}
  - : Ermöglicht eine Sandbox für die angeforderte Ressource, ähnlich dem {{HTMLElement("iframe")}} [`sandbox`](/de/docs/Web/HTML/Element/iframe#sandbox) Attribut.

### Navigations-Direktiven

Navigations-Direktiven regeln, zu welchen Standorten ein Benutzer navigieren oder ein Formular absenden kann, zum Beispiel.

- {{CSP("form-action")}}
  - : Beschränkt die URLs, die als Ziel von Formularübermittlungen aus einem gegebenen Kontext verwendet werden können.
- {{CSP("frame-ancestors")}}
  - : Gibt gültige Elternseiten an, die eine Seite mit {{HTMLElement("frame")}}, {{HTMLElement("iframe")}}, {{HTMLElement("object")}} oder {{HTMLElement("embed")}} einbetten dürfen.

### Bericht-Direktiven

Bericht-Direktiven steuern die Ziel-URL für CSP-Verstoßberichte in `Content-Security-Policy` und {{HTTPHeader("Content-Security-Policy-Report-Only")}}.

- {{CSP("report-to")}}

  - : Stellt dem Browser ein Token zur Verfügung, das den Berichts-Endpunkt oder die Gruppe von Endpunkten identifiziert, an die Informationen zu CSP-Verstößen gesendet werden sollen.
    Die Endpunkte, die das Token darstellt, werden über andere HTTP-Header bereitgestellt, wie z.B. {{HTTPHeader("Reporting-Endpoints")}} und {{HTTPHeader("Report-To")}} {{deprecated_inline}}.

    > [!WARNING]
    > Diese Direktive soll [`report-uri`](#report-uri) ersetzen; in Browsern, die `report-to` unterstützen, wird die `report-uri` Direktive ignoriert.
    > Bis `report-to` jedoch breit unterstützt wird, sollten Sie beide Header angeben, wie gezeigt (wobei `endpoint_name` der Name eines separat bereitgestellten Endpunkts ist):
    >
    > ```http
    > Content-Security-Policy: …; report-uri https://endpoint.example.com; report-to endpoint_name
    > ```

### Andere Direktiven

- {{CSP("require-trusted-types-for")}} {{experimental_inline}}
  - : Erzwingt [Trusted Types](/de/docs/Web/API/Trusted_Types_API) an den DOM XSS Injektionspunkten.
- {{CSP("trusted-types")}} {{experimental_inline}}
  - : Wird verwendet, um eine Whitelist von [Trusted Types](/de/docs/Web/API/Trusted_Types_API) Richtlinien zu spezifizieren. Trusted Types ermöglichen es Anwendungen, DOM XSS Injektionspunkte zu sperren, um nur nicht fälschbare, typisierte Werte anstelle von Zeichenfolgen zu akzeptieren.
- {{CSP("upgrade-insecure-requests")}}
  - : Weist Benutzeragenten an, alle unsicheren URLs einer Website (die über HTTP bereitgestellt werden) so zu behandeln, als seien sie durch sichere URLs (die über HTTPS bereitgestellt werden) ersetzt worden. Diese Direktive ist für Websites mit einer großen Anzahl unsicherer Legacy-URLs gedacht, die umgeschrieben werden müssen.

### Veraltete Direktiven

- {{CSP("block-all-mixed-content")}} {{deprecated_inline}}

  - : Verhindert das Laden jeglicher Ressourcen über HTTP, wenn die Seite über HTTPS geladen wird.

- {{CSP("report-uri")}} {{deprecated_inline}}
  - : Stellt dem Browser eine URL zur Verfügung, an die CSP-Verstoßberichte gesendet werden sollen. Dies wurde durch die [`report-to`](#report-to) Direktive ersetzt.

## Abruf-Direktiven-Syntax

Alle Abruf-Direktiven können als einer der folgenden Werte angegeben werden:

- der einzelne Wert `'none'`, was bedeutet, dass der spezifische Ressourcentyp vollständig blockiert werden soll
- ein oder mehrere _source expression_ Werte, die gültige Quellen für diesen Ressourcentyp angeben.

Jede Quellenausdruck nimmt eine der unten aufgeführten Formen an. Beachten Sie, dass nicht alle Formen für alle Abruf-Direktiven anwendbar sind: siehe die Dokumentation für jede Abruf-Direktive, um herauszufinden, welche Formen für sie anwendbar sind.

Die `<host-source>` und `<scheme-source>` Formate müssen unzitiert sein, und alle anderen Formate müssen in einfachen Anführungszeichen eingeschlossen sein.

### 'nonce-\<nonce_value>'

Dieser Wert besteht aus dem String `nonce-` gefolgt von einem {{Glossary("Base64", "Base64-kodierten")}} String. Dieser String ist ein zufälliger Wert, den der Server für jede HTTP-Antwort generiert. Zum Beispiel:

```plain
'nonce-416d1177-4d12-4e3b-b7c9-f6c409789fb8'
```

Der Server kann dann denselben Wert als Wert des `nonce` Attributs für alle {{htmlelement("script")}} oder {{htmlelement("style")}} Ressourcen aufnehmen, die sie aus dem Dokument laden möchten.

Der Browser vergleicht den Wert aus der CSP-Direktive mit dem Wert im Element-Attribut und lädt die Ressource nur, wenn sie übereinstimmen.

Wenn eine Direktive einen Nonce und `unsafe-inline` enthält, ignoriert der Browser `unsafe-inline`.

Siehe [Nonces](/de/docs/Web/HTTP/CSP#nonces) im CSP Leitfaden für weitere Nutzungsinformationen.

> [!NOTE]
> Nonce-Quellenausdrücke sind nur für {{htmlelement("script")}} und {{htmlelement("style")}} Elemente anwendbar.

### '\<hash_algorithm>-<hash_value>'

Dieser Wert besteht aus einem String, der einen Hash-Algorithmus identifiziert, gefolgt von `-` und einem {{Glossary("Base64", "Base64-kodierten")}} String, der den Hash-Wert darstellt.

- Der Hash-Algorithmus-Identifikator muss einer von `sha256`, `sha384` oder `sha512` sein.
- Der Hash-Wert ist der Base64-kodierte {{Glossary("Cryptographic_hash_function", "Hash")}} einer `<script>` oder `<style>` Ressource, berechnet mit einer der folgenden Hash-Funktionen: SHA-256, SHA-384 oder SHA-512.

Zum Beispiel:

```plain
'sha256-cd9827ad...'
```

Wenn der Browser das Dokument erhält, hashiert er den Inhalt aller `<script>` und `<style>` Elemente, vergleicht das Ergebnis mit allen Hashes in der CSP-Direktive und lädt die Ressource nur, wenn eine Übereinstimmung vorliegt.

Wenn das Element eine externe Ressource lädt (z.B. über das [`src`](/de/docs/Web/HTML/Element/script#src) Attribut), muss das Element auch das [`integrity`](/de/docs/Web/HTML/Element/script#integrity) Attribut gesetzt haben.

Wenn eine Direktive einen Hash und `unsafe-inline` enthält, ignoriert der Browser `unsafe-inline`.

Siehe [Hashes](/de/docs/Web/HTTP/CSP#hashes) im CSP Leitfaden für weitere Nutzungsinformationen.

> [!NOTE]
> Hash-Quellenausdrücke sind nur für {{htmlelement("script")}} und {{htmlelement("style")}} Elemente anwendbar.

### \<host-source>

Die [URL](/de/docs/Web/URI) oder IP-Adresse eines {{Glossary("host", "Hosts")}}, die eine gültige Quelle für die Ressource ist.

Das Schema, die Portnummer und der Pfad sind optional.

Wenn das Schema weggelassen wird, wird das Schema des Ursprungs des Dokuments verwendet.

Beim Abgleichen von Schemata sind sichere Upgrades erlaubt. Zum Beispiel:

- `http://example.com` erlaubt auch Ressourcen von `https://example.com`
- `ws://example.org` erlaubt auch Ressourcen von `wss://example.org`.

Platzhalter (`'*'`) können für Subdomains, Host-Adresse und Portnummer verwendet werden, um anzugeben, dass alle legalen Werte davon gültig sind. Zum Beispiel:

- `http://*.example.com` erlaubt Ressourcen von jeder Subdomain von `example.com`, über HTTP oder HTTPS.

Pfade, die in `/` enden, passen zu jedem Pfad, für den sie ein Präfix sind. Zum Beispiel:

- `example.com/api/` erlaubt Ressourcen von `example.com/api/users/new`.

Pfade, die nicht in `/` enden, werden exakt abgeglichen. Zum Beispiel:

- `https://example.com/file.js` erlaubt Ressourcen von `https://example.com/file.js`, aber nicht von `https://example.com/file.js/file2.js`.

### \<scheme-source>

Ein [Schema](/de/docs/Web/URI/Reference/Schemes), wie zum Beispiel `https:`. Der Doppelpunkt ist erforderlich.

Sichere Upgrades sind erlaubt, so dass:

- `http:` erlaubt auch Ressourcen, die mit HTTPS geladen werden
- `ws:` erlaubt auch Ressourcen, die mit WSS geladen werden.

### 'self'

Ressourcen des gegebenen Typs dürfen nur aus demselben {{Glossary("origin", "Ursprung")}} wie das Dokument geladen werden.

Sichere Upgrades sind erlaubt. Zum Beispiel:

- Wenn das Dokument von `http://example.com` bereitgestellt wird, wird eine CSP von `'self'` auch Ressourcen von `https://example.com` erlauben.
- Wenn das Dokument von `ws://example.org` bereitgestellt wird, wird eine CSP von `'self'` auch Ressourcen von `wss://example.org` erlauben.

### 'unsafe-eval'

Standardmäßig, wenn eine CSP eine `default-src` oder eine `script-src` Direktive enthält, werden JavaScript-Funktionen, die ihre Argumente als JavaScript auswerten, deaktiviert. Dies schließt [`eval()`](/de/docs/Web/JavaScript/Reference/Global_Objects/eval), das [`code`](/de/docs/Web/API/Window/setTimeout#code) Argument in [`setTimeout()`](/de/docs/Web/API/Window/setTimeout), oder den {{jsxref("Function/Function()", "Function()")}} Konstruktor ein.

Das `unsafe-eval` Schlüsselwort kann verwendet werden, um diesen Schutz aufzuheben und die dynamische Auswertung von Zeichenfolgen als JavaScript zu erlauben.

> [!WARNING]
> Entwickler sollten `'unsafe-eval'` vermeiden, da es den Zweck einer CSP weitgehend zunichtemacht.

Siehe [`eval()` und ähnliche APIs](/de/docs/Web/HTTP/CSP#eval_and_similar_apis) im CSP Leitfaden für weitere Nutzungsinformationen.

### 'wasm-unsafe-eval'

Standardmäßig, wenn eine CSP eine `default-src` oder eine `script-src` Direktive enthält, darf eine Seite WebAssembly nicht mit Funktionen wie [`WebAssembly.compileStreaming()`](/de/docs/WebAssembly/Reference/JavaScript_interface/compileStreaming_static) kompilieren.

Das `wasm-unsafe-eval` Schlüsselwort kann verwendet werden, um diesen Schutz aufzuheben. Dies ist eine viel sicherere Alternative zu `'unsafe-eval'`, da es keine allgemeine Auswertung von JavaScript ermöglicht.

### 'unsafe-inline'

Standardmäßig, wenn eine CSP eine `default-src` oder eine `script-src` Direktive enthält, darf inline JavaScript nicht ausgeführt werden. Dies schließt ein:

- Inline-`<script>`-Tags
- Inline-Event-Handler-Attribute
- `javascript:` URLs.

Ähnlich, wenn eine CSP `default-src` oder eine `style-src` Direktive enthält, wird inline CSS nicht geladen, einschließlich:

- Inline-`<style>`-Tags
- [`style`](/de/docs/Web/API/HTMLElement/style) Attribute.

Das `unsafe-inline` Schlüsselwort kann verwendet werden, um diesen Schutz aufzuheben und alle diese Formen geladen werden zu lassen.

> [!WARNING]
> Entwickler sollten `'unsafe-inline'` vermeiden, da es den Zweck einer CSP weitgehend zunichtemacht.

Siehe [Inline JavaScript](/de/docs/Web/HTTP/CSP#inline_javascript) im CSP Leitfaden für weitere Nutzungsinformationen.

### 'unsafe-hashes'

Standardmäßig, wenn eine CSP eine `default-src` oder eine `script-src` Direktive enthält, dürfen inline Event-Handler-Attribute wie `onclick` und inline `style`-Attribute nicht ausgeführt werden.

Der `'unsafe-hashes'` Ausdruck erlaubt dem Browser, [Hash-Ausdrücke](#hash_algorithm-hash_value) für inline Event-Handler und `style`-Attribute zu verwenden. Zum Beispiel könnte eine CSP eine Direktive wie folgt enthalten:

```http
script-src 'unsafe-hashes' 'sha256-cd9827ad...'
```

Wenn der Hash-Wert mit dem Hash eines inline Event-Handler-Attributwerts oder eines `style`-Attributwerts übereinstimmt, wird der Code ausgeführt.

> [!WARNING]
> Der `'unsafe-hashes'` Wert ist unsicher.
>
> Er ermöglicht insbesondere einen Angriff, bei dem der Inhalt des inline Event-Handler-Attributs als inline `<script>` Element in das Dokument injiziert wird. Angenommen, der inline Event-Handler ist:
>
> ```html
> <button onclick="transferAllMyMoney()">Transfer all my money</button>
> ```
>
> Wenn ein Angreifer ein inline `<script>` Element mit diesem Code injizieren kann, wird die CSP es erlauben, automatisch auszuführen.
>
> Dennoch ist `'unsafe-hashes'` viel sicherer als `'unsafe-inline'`.

### 'inline-speculation-rules'

Standardmäßig, wenn eine CSP eine `default-src` oder eine `script-src` Direktive enthält, darf inline JavaScript nicht ausgeführt werden. Die `'inline-speculation-rules'` erlaubt dem Browser, inline `<script>` Elemente zu laden, die ein [`type`](/de/docs/Web/HTML/Element/script/type) Attribut von [`speculationrules`](/de/docs/Web/HTML/Element/script/type/speculationrules) haben.

Weitere Informationen finden Sie in der [Speculation Rules API](/de/docs/Web/API/Speculation_Rules_API).

### 'strict-dynamic'

Das `'strict-dynamic'` Schlüsselwort erweitert das Vertrauen, das einem Skript durch einen [Nonce](#nonce-nonce_value) oder einen [Hash](#hash_algorithm-hash_value) entgegengebracht wurde, auf Skripte, die dieses Skript dynamisch lädt, zum Beispiel durch die Erstellung neuer `<script>` Tags mit [`Document.createElement()`](/de/docs/Web/API/Document/createElement) und deren anschließenden Einfügen in das Dokument mit [`Node.appendChild()`](/de/docs/Web/API/Node/appendChild).

Wenn dieses Schlüsselwort in einer Direktive vorhanden ist, werden die folgenden Quellenausdruck-Werte alle ignoriert:

- [\<host-source>](#host-source)
- [\<scheme-source>](#scheme-source)
- [`'self'`](#self)
- [`'unsafe-inline'`](#unsafe-inline)

Weitere Informationen finden Sie im Abschnitt [Das `strict-dynamic` Schlüsselwort](/de/docs/Web/HTTP/CSP#the_strict-dynamic_keyword) im CSP Leitfaden.

### 'report-sample'

Wenn dieser Ausdruck in einer Direktive enthalten ist, die Skripte oder Stile kontrolliert, und die Direktive den Browser veranlasst, jegliche Inline-Skripte, Inline-Stile oder Event-Handler-Attribute zu blockieren, enthält der [Verstoßbericht](/de/docs/Web/HTTP/CSP#violation_reporting), den der Browser generiert, eine [`sample`](/de/docs/Web/API/CSPViolationReportBody/sample) Eigenschaft, die die ersten 40 Zeichen der blockierten Ressource enthält.

## CSP für Worker

[Workers](/de/docs/Web/API/Worker) werden im Allgemeinen _nicht_ von der Content-Security-Policy des Dokuments (oder des übergeordneten Workers), das sie erstellt hat, geregelt. Um eine Content-Security-Policy für den Worker anzugeben, setzen Sie einen `Content-Security-Policy` Antwort-Header für die Anforderung, die das Worker-Skript selbst angefordert hat.

Die Ausnahme hiervon ist, wenn der Ursprung des Worker-Skripts ein globaler eindeutiger Bezeichner ist (zum Beispiel, wenn sein URL ein Schema von data oder blob hat). In diesem Fall erbt der Worker die Content-Security-Policy des Dokuments oder Workers, das ihn erstellt hat.

## Mehrere Content-Security-Richtlinien

Der CSP-Mechanismus ermöglicht es, mehrere Richtlinien für eine Ressource anzugeben, einschließlich über den `Content-Security-Policy` Header, den {{HTTPHeader("Content-Security-Policy-Report-Only")}} Header und ein {{HTMLElement("meta")}} Element.

Sie können den `Content-Security-Policy` Header mehr als einmal verwenden, wie im folgenden Beispiel. Achten Sie besonders auf die {{CSP("connect-src")}} Direktive hier. Auch wenn die zweite Richtlinie die Verbindung erlauben würde, enthält die erste Richtlinie `connect-src 'none'`. Durch das Hinzufügen zusätzlicher Richtlinien können die Fähigkeiten der geschützten Ressource _nur weiter eingeschränkt_ werden, was bedeutet, dass keine Verbindung erlaubt wird und die strengste Richtlinie, `connect-src 'none'`, durchgesetzt wird.

```http
Content-Security-Policy: default-src 'self' http://example.com;
                          connect-src 'none';
Content-Security-Policy: connect-src http://example.com/;
                          script-src http://example.com/
```

## Beispiele

### Unsicheren Inline-Code deaktivieren und nur HTTPS-Ressourcen erlauben

Dieser HTTP-Header setzt die Standardrichtlinie, um das Laden von Ressourcen (Bilder, Schriften, Skripte, etc.) nur über HTTPS zu erlauben. Da die `unsafe-inline` und `unsafe-eval` Direktiven nicht gesetzt sind, werden Inline-Skripte blockiert.

```http
Content-Security-Policy: default-src https:
```

Dieselben Einschränkungen können mit dem HTML {{htmlelement("meta")}} Element angewendet werden.

```html
<meta http-equiv="Content-Security-Policy" content="default-src https:" />
```

### Inline-Code und HTTPS-Ressourcen erlauben, aber Plugins deaktivieren

Diese Richtlinie könnte auf einer bestehenden Website verwendet werden, die zu viel Inline-Code verwendet, um sie zu beheben, um sicherzustellen, dass Ressourcen nur über HTTPS geladen werden und Plugins deaktiviert werden:

```http
Content-Security-Policy: default-src https: 'unsafe-eval' 'unsafe-inline'; object-src 'none'
```

### Verstöße beim Testen melden, aber nicht erzwingen

Dieses Beispiel setzt dieselben Einschränkungen wie das vorherige Beispiel, verwendet jedoch den {{httpheader("Content-Security-Policy-Report-Only")}} Header und die {{CSP("report-to")}} Direktive. Dieser Ansatz wird während des Testens verwendet, um Verstöße zu melden, aber nicht zu verhindern, dass Code ausgeführt wird.

Endpunkte (URLs), an die Berichte gesendet werden sollen, werden mit dem {{HTTPHeader("Reporting-Endpoints")}} HTTP-Antwort-Header definiert.

```http
Reporting-Endpoints: csp-endpoint="https://example.com/csp-reports"
```

Ein bestimmter Endpunkt wird dann als Ziel des Berichts in der CSP-Richtlinie mit der {{CSP("report-to")}} Direktive ausgewählt.

```http
Content-Security-Policy-Report-Only: default-src https:; report-uri /csp-violation-report-url/; report-to csp-endpoint
```

Beachten Sie, dass die {{CSP("report-uri")}} {{deprecated_inline}} Direktive oben ebenfalls angegeben ist, da `report-to` noch nicht weitreichend von Browsern unterstützt wird.

Siehe [Content Security Policy (CSP) Implementierung](/de/docs/Web/Security/Practical_implementation_guides/CSP) für weitere Beispiele.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTTPHeader("Content-Security-Policy-Report-Only")}}
- [Erfahren Sie mehr: Content Security Policy](/de/docs/Web/HTTP/CSP)
- [Content Security in WebExtensions](/de/docs/Mozilla/Add-ons/WebExtensions/Content_Security_Policy)
- [Eine strenge Richtlinie übernehmen](https://csp.withgoogle.com/docs/strict-csp.html)
- [CSP Evaluator](https://github.com/google/csp-evaluator) - Evaluieren Sie Ihre
  Content Security Policy
