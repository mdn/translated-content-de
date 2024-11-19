---
title: Content-Security-Policy
slug: Web/HTTP/Headers/Content-Security-Policy
l10n:
  sourceCommit: 6368e2b112a343fa00ae1a8cf51ceb0b0b845834
---

{{HTTPSidebar}}

Der HTTP **`Content-Security-Policy`** Antwort-Header erlaubt es Website-Administratoren, die Ressourcen zu kontrollieren, die der Benutzeragent für eine gegebene Seite laden darf. Mit wenigen Ausnahmen beinhalten Richtlinien hauptsächlich die Spezifizierung von Serverursprüngen und Skript-Endpunkten. Dies hilft, gegen {{Glossary("cross-site_scripting", "Cross-Site-Scripting")}}-Angriffe zu schützen.

Für weitere Informationen siehe den einführenden Artikel zur [Content Security Policy (CSP)](/de/docs/Web/HTTP/CSP).

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Typ des Headers</th>
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

wobei `<policy-directive>` aus folgendem besteht:
`<directive> <value>` ohne interne Zeichensetzung.

## Direktiven

### Fetch-Direktiven

Fetch-Direktiven kontrollieren die Orte, von denen bestimmte Ressourcentypen geladen werden dürfen.

- {{CSP("child-src")}}

  - : Definiert die gültigen Quellen für [Web-Worker](/de/docs/Web/API/Web_Workers_API) und verschachtelte Betrachtungs-Kontexte, die mit Elementen wie {{HTMLElement("frame")}} und {{HTMLElement("iframe")}} geladen werden.

    [Fallback](#fallbacks) für `frame-src` und `worker-src`.

- {{CSP("connect-src")}}
  - : Beschränkt die URLs, die mittels Skript-Schnittstellen geladen werden können.
- {{CSP("default-src")}}

  - : Dient als Fallback für die anderen {{Glossary("Fetch_directive", "Fetch-Direktiven")}}.

    [Fallback](#fallbacks) für alle anderen Fetch-Direktiven.

- {{CSP("fenced-frame-src")}} {{experimental_inline}}
  - : Gibt gültige Quellen für verschachtelte Betrachtungs-Kontexte in {{HTMLElement("fencedframe")}}-Elementen an.
- {{CSP("font-src")}}
  - : Gibt gültige Quellen für Schriften an, die mittels {{cssxref("@font-face")}} geladen werden.
- {{CSP("frame-src")}}
  - : Gibt gültige Quellen für verschachtelte Betrachtungs-Kontexte in Elementen wie
    {{HTMLElement("frame")}} und {{HTMLElement("iframe")}} an.
- {{CSP("img-src")}}
  - : Gibt gültige Quellen für Bilder und Favicons an.
- {{CSP("manifest-src")}}
  - : Gibt gültige Quellen für Anwendungsmanifestdateien an.
- {{CSP("media-src")}}
  - : Gibt gültige Quellen für das Laden von Medien mit den {{HTMLElement("audio")}},
    {{HTMLElement("video")}} und {{HTMLElement("track")}} Elementen an.
- {{CSP("object-src")}}
  - : Gibt gültige Quellen für die {{HTMLElement("object")}} und {{HTMLElement("embed")}} Elemente an.
- {{CSP("prefetch-src")}} {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Gibt gültige Quellen für das Vorladen oder Vorberechnen an.
- {{CSP("script-src")}}

  - : Gibt gültige Quellen für JavaScript- und WebAssembly-Ressourcen an.

    [Fallback](#fallbacks) für `script-src-elem` und `script-src-attr`.

- {{CSP("script-src-elem")}}
  - : Gibt gültige Quellen für JavaScript {{HTMLElement("script")}} Elemente an.
- {{CSP("script-src-attr")}}
  - : Gibt gültige Quellen für JavaScript Inline-Event-Handler an.
- {{CSP("style-src")}}

  - : Gibt gültige Quellen für Stylesheets an.

    [Fallback](#fallbacks) für `style-src-elem` und `style-src-attr`.

- {{CSP("style-src-elem")}}
  - : Gibt gültige Quellen für Stylesheets {{HTMLElement("style")}} Elemente und
    {{HTMLElement("link")}} Elemente mit `rel="stylesheet"` an.
- {{CSP("style-src-attr")}}
  - : Gibt gültige Quellen für inline Stile, die auf einzelne DOM-Elemente angewendet werden, an.
- {{CSP("worker-src")}}
  - : Gibt gültige Quellen für [`Worker`](/de/docs/Web/API/Worker), [`SharedWorker`](/de/docs/Web/API/SharedWorker) oder
    [`ServiceWorker`](/de/docs/Web/API/ServiceWorker) Skripte an.

Alle Fetch-Direktiven können als einzelner Wert `'none'` angegeben werden, was anzeigt, dass der spezifische Ressourcentyp vollständig blockiert werden sollte, oder als einer oder mehrere _Source Expression_-Werte, die gültige Quellen für diesen Ressourcentyp anzeigen. Siehe [Fetch-Direktiven-Syntax](#fetch-direktiven-syntax) für mehr Details.

#### Fallbacks

Einige Fetch-Direktiven funktionieren als Fallbacks für andere, granularere Direktiven. Das bedeutet, dass, wenn die granularere Direktive nicht angegeben ist, der Fallback verwendet wird, um eine Richtlinie für diesen Ressourcentyp bereitzustellen.

- `default-src` ist ein Fallback für alle anderen Fetch-Direktiven.
- `script-src` ist ein Fallback für `script-src-attr` und `script-src-elem`.
- `style-src` ist ein Fallback für `style-src-attr` und `style-src-elem`.
- `child-src` ist ein Fallback für `frame-src` und `worker-src`.

Beispielsweise:

- Wenn `img-src` weggelassen wird, aber `default-src` enthalten ist, dann wird die von `default-src` definierte Richtlinie auf Bilder angewendet.
- Wenn `script-src-elem` weggelassen wird, aber `script-src` enthalten ist, dann wird die von `script-src` definierte Richtlinie auf `<script>`-Elemente angewendet.
- Wenn `script-src-elem` und `script-src` weggelassen werden, aber `default-src` enthalten ist, dann wird die von `default-src` definierte Richtlinie auf `<script>`-Elemente angewendet.

### Dokumentdirektiven

Dokumentdirektiven regeln die Eigenschaften eines Dokuments oder [Worker](/de/docs/Web/API/Web_Workers_API)-Umgebung, auf die eine Richtlinie angewendet wird.

- {{CSP("base-uri")}}
  - : Beschränkt die URLs, die in einem {{HTMLElement("base")}}-Element eines Dokuments verwendet werden können.
- {{CSP("sandbox")}}
  - : Aktiviert eine Sandbox für die angeforderte Ressource, ähnlich dem
    {{HTMLElement("iframe")}} [`sandbox`](/de/docs/Web/HTML/Element/iframe#sandbox)-Attribut.

### Navigationsdirektiven

Navigationsdirektiven regeln, zu welchen Orten ein Benutzer navigieren oder ein Formular einreichen kann, zum Beispiel.

- {{CSP("form-action")}}
  - : Beschränkt die URLs, die als Ziel von Formulareinreichungen aus einem gegebenen Kontext verwendet werden können.
- {{CSP("frame-ancestors")}}
  - : Gibt gültige Eltern an, die eine Seite mit {{HTMLElement("frame")}},
    {{HTMLElement("iframe")}}, {{HTMLElement("object")}} oder {{HTMLElement("embed")}} einbetten können.

### Berichtsdirektiven

Berichtsdirektiven steuern die Ziel-URL für CSP-Verletzungsberichte in `Content-Security-Policy` und {{HTTPHeader("Content-Security-Policy-Report-Only")}}.

- {{CSP("report-to")}}

  - : Bietet dem Browser ein Token, das den Berichtsendpunkt oder die Gruppe von Berichts-Endpunkten identifiziert, an die CSP-Verletzungsinformationen gesendet werden sollen. Die Endpunkte, die das Token repräsentiert, werden durch andere HTTP-Header bereitgestellt, wie z.B. {{HTTPHeader("Reporting-Endpoints")}} und {{HTTPHeader("Report-To")}} {{deprecated_inline}}.

    > [!WARNING]
    > Diese Direktive soll [`report-uri`](#report-uri) ersetzen; in Browsern, die `report-to` unterstützen, wird die Direktive `report-uri` ignoriert. Bis `report-to` jedoch breit unterstützt wird, sollten Sie beide Header wie gezeigt angeben (wobei `endpoint_name` der Name eines separat bereitgestellten Endpunkts ist):
    >
    > ```http
    > Content-Security-Policy: …; report-uri https://endpoint.example.com; report-to endpoint_name
    > ```

### Andere Direktiven

- {{CSP("require-trusted-types-for")}} {{experimental_inline}}
  - : Erzwingt [Trusted Types](/de/docs/Web/API/Trusted_Types_API) an den DOM-XSS-Injektionsstellen.
- {{CSP("trusted-types")}} {{experimental_inline}}
  - : Wird verwendet, um eine Positivliste von [Trusted Types](/de/docs/Web/API/Trusted_Types_API)-Richtlinien anzugeben. Trusted Types erlaubt Anwendungen, DOM-XSS-Injektionsstellen so zu sichern, dass sie nur nicht manipulierbare, typisierte Werte anstelle von Strings akzeptieren.
- {{CSP("upgrade-insecure-requests")}}
  - : Weist Benutzeragenten an, alle unsicheren URLs einer Website (die über HTTP bereitgestellt werden), so zu behandeln, als wären sie durch sichere URLs (die über HTTPS bereitgestellt werden) ersetzt worden. Diese Direktive ist für Websites mit einer großen Anzahl unsicherer, älterer URLs gedacht, die umgeschrieben werden müssen.

### Veraltete Direktiven

- {{CSP("block-all-mixed-content")}} {{deprecated_inline}}

  - : Verhindert das Laden jeglicher Ressourcen über HTTP, wenn die Seite über HTTPS geladen wird.

- {{CSP("report-uri")}} {{deprecated_inline}}
  - : Bietet dem Browser eine URL, an die CSP-Verletzungsberichte gesendet werden sollen. Dies wurde durch die [`report-to`](#report-to) Direktive ersetzt.

## Fetch-Direktiven-Syntax

Alle Fetch-Direktiven können als einer der folgenden Werte angegeben werden:

- der einzelne Wert `'none'`, der anzeigt, dass der spezifische Ressourcentyp vollständig blockiert werden soll
- eine oder mehrere _Source Expression_-Werte, die gültige Quellen für diesen Ressourcentyp anzeigen.

Jede Source Expression nimmt eine der unten aufgeführten Formen an. Beachten Sie, dass nicht alle Formen auf alle Fetch-Direktiven anwendbar sind: siehe die Dokumentation zu jeder Fetch-Direktive, um herauszufinden, welche Formen darauf anwendbar sind.

Die Formate `<host-source>` und `<scheme-source>` müssen unzitiert sein, und alle anderen Formate müssen in einfache Anführungszeichen gesetzt werden.

### 'nonce-\<nonce_value>'

Dieser Wert besteht aus dem String `nonce-` gefolgt von einem {{Glossary("Base64", "Base64-codierten")}} String. Dieser String ist ein zufälliger Wert, den der Server für jede HTTP-Antwort generiert. Beispiel:

```plain
'nonce-416d1177-4d12-4e3b-b7c9-f6c409789fb8'
```

Der Server kann dann den gleichen Wert als Wert des `nonce`-Attributs von jedem {{htmlelement("script")}} oder {{htmlelement("style")}} Ressourcen, die sie aus dem Dokument laden möchten, aufnehmen.

Der Browser vergleicht den Wert aus der CSP-Direktive mit dem Wert im Element-Attribut und lädt die Ressource nur, wenn sie übereinstimmen.

Wenn eine Direktive eine Nonce und `unsafe-inline` enthält, ignoriert der Browser `unsafe-inline`.

Siehe [Nonces](/de/docs/Web/HTTP/CSP#nonces) im CSP-Leitfaden für weitere Nutzungsinformationen.

> [!NOTE] Nonce Source Expressions sind nur auf {{htmlelement("script")}} und {{htmlelement("style")}} Elemente anwendbar.

### '\<hash_algorithm>-<hash_value>'

Dieser Wert besteht aus einem String, der einen Hash-Algorithmus identifiziert, gefolgt von `-`, gefolgt von einem {{Glossary("Base64", "Base64-codierten")}} String, der den Hash-Wert repräsentiert.

- Der Hash-Algorithmus-Identifikator muss einer von `sha256`, `sha384` oder `sha512` sein.
- Der Hash-Wert ist der Base64-codierte {{Glossary("Cryptographic_hash_function", "Hash")}} einer `<script>` oder `<style>` Ressource, berechnet mit einer der folgenden Hash-Funktionen: SHA-256, SHA-384, oder SHA-512.

Beispiel:

```plain
'sha256-cd9827ad...'
```

Wenn der Browser das Dokument empfängt, hasht er den Inhalt aller `<script>` und `<style>` Elemente, vergleicht das Ergebnis mit den Hashes in der CSP-Direktive und lädt die Ressource nur, wenn eine Übereinstimmung vorliegt.

Wenn das Element eine externe Ressource lädt (zum Beispiel unter Verwendung des [`src`](/de/docs/Web/HTML/Element/script#src) Attributs), muss das Element auch das [`integrity`](/de/docs/Web/HTML/Element/script#integrity) Attribut enthalten.

Wenn eine Direktive einen Hash und `unsafe-inline` enthält, ignoriert der Browser `unsafe-inline`.

Siehe [Hashes](/de/docs/Web/HTTP/CSP#hashes) im CSP-Leitfaden für weitere Nutzungsinformationen.

> [!NOTE] Hash Source Expressions sind nur auf {{htmlelement("script")}} und {{htmlelement("style")}} Elemente anwendbar.

### \<host-source>

Die [URL](/de/docs/Web/URI) oder IP-Adresse eines {{Glossary("host", "Hosts")}}, die eine gültige Quelle für die Ressource ist.

Das Schema, die Portnummer und der Pfad sind optional.

Wenn das Schema weggelassen wird, wird das Schema des Dokuments ursprungs verwendet.

Beim Schema-Vergleich sind sichere Upgrades erlaubt. Zum Beispiel:

- `http://example.com` erlaubt auch Ressourcen von `https://example.com`
- `ws://example.org` erlaubt auch Ressourcen von `wss://example.org`.

Platzhalter (`'*'`) können für Subdomains, Host-Adressen und Portnummern verwendet werden, um anzuzeigen, dass alle legalen Werte jeweils gültig sind. Zum Beispiel:

- `http://*.example.com` erlaubt Ressourcen von jeder Subdomain von `example.com`, über HTTP oder HTTPS.

Pfade, die mit `/` enden, stimmen mit jedem Pfad überein, dem sie Präfix sind. Zum Beispiel:

- `example.com/api/` erlaubt Ressourcen von `example.com/api/users/new`.

Pfade, die nicht mit `/` enden, werden genau abgeglichen. Zum Beispiel:

- `https://example.com/file.js` erlaubt Ressourcen von `https://example.com/file.js` aber nicht `https://example.com/file.js/file2.js`.

### \<scheme-source>

Ein [Schema](/de/docs/Web/URI/Schemes), wie `https:`. Der Doppelpunkt ist erforderlich.

Sichere Upgrades sind erlaubt, also:

- `http:` erlaubt auch Ressourcen, die über HTTPS geladen werden
- `ws:` erlaubt auch Ressourcen, die über WSS geladen werden.

### 'self'

Ressourcen des gegebenen Typs dürfen nur vom selben {{Glossary("origin", "Ursprung")}} wie das Dokument geladen werden.

Sichere Upgrades sind erlaubt. Beispiel:

- Wenn das Dokument von `http://example.com` bereitgestellt wird, dann erlaubt ein CSP mit `'self'` auch Ressourcen von `https://example.com`.
- Wenn das Dokument von `ws://example.org` bereitgestellt wird, dann erlaubt ein CSP mit `'self'` auch Ressourcen von `wss://example.org`.

### 'unsafe-eval'

Standardmäßig, wenn ein CSP eine `default-src` oder eine `script-src` Direktive enthält, sind JavaScript-Funktionen, die ihre Argumente als JavaScript auswerten, deaktiviert. Dies schließt [`eval()`](/de/docs/Web/JavaScript/Reference/Global_Objects/eval), das [`code`](/de/docs/Web/API/Window/setTimeout#code) Argument zu [`setTimeout()`](/de/docs/Web/API/Window/setTimeout), oder den {{jsxref("Function/Function()", "Funktion()")}} Konstruktor ein.

Das `unsafe-eval` Schlüsselwort kann verwendet werden, um diesen Schutz rückgängig zu machen, um die dynamische Auswertung von Strings als JavaScript zu ermöglichen.

> [!WARNING] Entwickler sollten `'unsafe-eval'` vermeiden, da es einen Großteil des Zwecks eines CSP aushebelt.

Siehe [`eval()` und ähnliche APIs](/de/docs/Web/HTTP/CSP#eval_and_similar_apis) im CSP-Leitfaden für weitere Nutzungsinformationen.

### 'wasm-unsafe-eval'

Standardmäßig, wenn ein CSP eine `default-src` oder eine `script-src` Direktive enthält, wird es einer Seite nicht erlaubt, WebAssembly mit Funktionen wie [`WebAssembly.compileStreaming()`](/de/docs/WebAssembly/JavaScript_interface/compileStreaming_static) zu kompilieren.

Das `wasm-unsafe-eval` Schlüsselwort kann verwendet werden, um diesen Schutz rückgängig zu machen. Dies ist eine viel sicherere Alternative zu `'unsafe-eval'`, da es keine allgemeine Auswertung von JavaScript ermöglicht.

### 'unsafe-inline'

Standardmäßig, wenn ein CSP eine `default-src` oder eine `script-src` Direktive enthält, ist es Inline-JavaScript nicht erlaubt, ausgeführt zu werden. Dies schließt ein:

- Inline `<script>` Tags
- Inline Event-Handler-Attribute
- `javascript:` URLs.

Ähnlich, wenn ein CSP `default-src` oder eine `style-src` Direktive enthält, wird Inline-CSS nicht geladen, einschließlich:

- Inline `<style>` Tags
- [`style`](/de/docs/Web/API/HTMLElement/style) Attribute.

Das `unsafe-inline` Schlüsselwort kann verwendet werden, um diesen Schutz rückgängig zu machen und alle diese Formen zu laden.

> [!WARNING] Entwickler sollten `'unsafe-inline'` vermeiden, da es einen Großteil des Zwecks eines CSP aushebelt.

Siehe [Inline-JavaScript](/de/docs/Web/HTTP/CSP#inline_javascript) im CSP-Leitfaden für weitere Nutzungsinformationen.

### 'unsafe-hashes'

Standardmäßig, wenn ein CSP eine `default-src` oder eine `script-src` Direktive enthält, sind Inline Event-Handler-Attribute wie `onclick` und Inline `style` Attribute nicht erlaubt, ausgeführt zu werden.

Die `'unsafe-hashes'` Expression erlaubt es dem Browser, [Hash-Ausdrücke](#hash_algorithm-hash_value) für Inline-Event-Handler und `style` Attribute zu verwenden. Beispiel: Ein CSP könnte eine Direktive wie diese enthalten:

```http
script-src 'unsafe-hashes' 'sha256-cd9827ad...'
```

Wenn der Hash-Wert mit dem Hash eines Inline Event-Handler-Attributwerts oder eines `style` Attributwerts übereinstimmt, dann wird der Code erlaubt, ausgeführt zu werden.

> [!WARNING] Der `'unsafe-hashes'` Wert ist unsicher.
>
> Insbesondere ermöglicht er einen Angriff, bei dem der Inhalt des Inline-Event-Handler-Attributs als Inline `<script>` Element in das Dokument injiziert wird. Angenommen, der Inline-Event-Handler ist:
>
> ```html
> <button onclick="transferAllMyMoney()">
>   Übertragen Sie mein gesamtes Geld
> </button>
> ```
>
> Wenn ein Angreifer ein Inline `<script>` Element mit diesem Code injizieren kann, wird der CSP es automatisch erlauben, es auszuführen.
>
> Allerdings ist `'unsafe-hashes'` viel sicherer als `'unsafe-inline'`.

### 'inline-speculation-rules'

Standardmäßig, wenn ein CSP eine `default-src` oder eine `script-src` Direktive enthält, ist es Inline-JavaScript nicht erlaubt, ausgeführt zu werden. Die `'inline-speculation-rules'` erlaubt es dem Browser, Inline `<script>` Elemente zu laden, die ein [`type`](/de/docs/Web/HTML/Element/script/type) Attribut vom Typ [`speculationrules`](/de/docs/Web/HTML/Element/script/type/speculationrules) haben.

Siehe die [Speculation Rules API](/de/docs/Web/API/Speculation_Rules_API) für weitere Informationen.

### 'strict-dynamic'

Das `'strict-dynamic'` Schlüsselwort erweitert das Vertrauen, das einem Skript durch eine [Nonce](#nonce-nonce_value) oder einen [Hash](#hash_algorithm-hash_value) verliehen wird, auf Skripte, die dieses Skript dynamisch lädt, zum Beispiel, indem neue `<script>` Tags mittels [`Document.createElement()`](/de/docs/Web/API/Document/createElement) erstellt und dann mit [`Node.appendChild()`](/de/docs/Web/API/Node/appendChild) in das Dokument eingefügt werden.

Wenn dieses Schlüsselwort in einer Direktive vorhanden ist, werden die folgenden Source-Expressions alle ignoriert:

- [\<host-source>](#host-source)
- [\<scheme-source>](#scheme-source)
- [`'self'`](#self)
- [`'unsafe-inline'`](#unsafe-inline)

Siehe [Das `strict-dynamic` Schlüsselwort](/de/docs/Web/HTTP/CSP#the_strict-dynamic_keyword) im CSP-Leitfaden für weitere Nutzungsinformationen.

### 'report-sample'

Wenn dieser Ausdruck in einer Direktive enthalten ist, die Skripte oder Stile kontrolliert, und die Direktive dazu führt, dass der Browser Inline-Skripte, Inline-Stile oder Event-Handler-Attribute blockiert, wird der [Verletzungsbericht](/de/docs/Web/HTTP/CSP#violation_reporting), den der Browser generiert, eine [`sample`](/de/docs/Web/API/CSPViolationReportBody/sample) Eigenschaft enthalten, die die ersten 40 Zeichen der blockierten Ressource enthält.

## CSP in Workern

[Worker](/de/docs/Web/API/Worker) werden im Allgemeinen _nicht_ durch die Content-Security-Richtlinie des Dokuments (oder des übergeordneten Workers) gesteuert, das sie erstellt hat. Um eine Content-Security-Richtlinie für den Worker anzugeben, setzen Sie einen `Content-Security-Policy` Antwort-Header für die Anforderung, die das Worker-Skript selbst angefordert hat.

Die Ausnahme von dieser Regel ist, wenn der Ursprung des Worker-Skripts ein weltweit eindeutiger Bezeichner ist (zum Beispiel, wenn seine URL ein Schema von data oder blob hat). In diesem Fall erbt der Worker die Content-Security-Richtlinie des Dokuments oder Workers, das ihn erstellt hat.

## Mehrere Content-Security-Richtlinien

Der CSP-Mechanismus erlaubt es, mehrere Richtlinien für eine Ressource anzugeben, einschließlich über den `Content-Security-Policy` Header, den {{HTTPHeader("Content-Security-Policy-Report-Only")}} Header und ein {{HTMLElement("meta")}} Element.

Sie können den `Content-Security-Policy` Header mehr als einmal verwenden, wie im folgenden Beispiel. Achten Sie besonders auf die {{CSP("connect-src")}} Direktive hier. Selbst wenn die zweite Richtlinie die Verbindung erlauben würde, enthält die erste Richtlinie `connect-src 'none'`. Das Hinzufügen zusätzlicher Richtlinien _kann die Fähigkeiten der geschützten Ressource nur weiter einschränken_, was bedeutet, dass keine Verbindung erlaubt wird und, als die strengste Richtlinie, `connect-src 'none'` durchgesetzt wird.

```http
Content-Security-Policy: default-src 'self' http://example.com;
                          connect-src 'none';
Content-Security-Policy: connect-src http://example.com/;
                          script-src http://example.com/
```

## Beispiele

### Unsicheren Inline-Code deaktivieren und nur HTTPS-Ressourcen zulassen

Dieser HTTP-Header setzt die Standardrichtlinie, um das Laden von Ressourcen (Bilder, Schriftarten, Skripte usw.) nur über HTTPS zu erlauben. Da die `unsafe-inline` und `unsafe-eval` Direktiven nicht gesetzt sind, werden Inline-Skripte blockiert.

```http
Content-Security-Policy: default-src https:
```

Die gleichen Einschränkungen können unter Verwendung des HTML-{{htmlelement("meta")}} Elements angewendet werden.

```html
<meta http-equiv="Content-Security-Policy" content="default-src https:" />
```

### Inline-Code und HTTPS-Ressourcen zulassen, aber Plugins deaktivieren

Diese Richtlinie könnte auf einer bereits existierenden Seite verwendet werden, die zu viel Inline-Code verwendet, um behoben zu werden, um sicherzustellen, dass Ressourcen nur über HTTPS geladen werden und Plugins deaktiviert werden:

```http
Content-Security-Policy: default-src https: 'unsafe-eval' 'unsafe-inline'; object-src 'none'
```

### Verstöße melden, aber während des Testens nicht durchsetzen

Dieses Beispiel setzt dieselben Einschränkungen wie das vorherige Beispiel, jedoch unter Verwendung des {{httpheader("Content-Security-Policy-Report-Only")}} Headers und der {{CSP("report-to")}} Direktive. Dieser Ansatz wird während des Testens verwendet, um Verstöße zu melden, aber den Code nicht daran zu hindern, ausgeführt zu werden.

Endpunkte (URLs), an die Berichte gesendet werden sollen, werden unter Verwendung des {{HTTPHeader("Reporting-Endpoints")}} HTTP-Antwort-Headers definiert.

```http
Reporting-Endpoints: csp-endpoint="https://example.com/csp-reports"
```

Ein bestimmter Endpunkt wird dann als Berichts-Ziel in der CSP-Richtlinie unter Verwendung der {{CSP("report-to")}} Direktive ausgewählt.

```http
Content-Security-Policy-Report-Only: default-src https:; report-uri /csp-violation-report-url/; report-to csp-endpoint
```

Beachten Sie, dass die {{CSP("report-uri")}} {{deprecated_inline}} Direktive ebenfalls oben angegeben ist, da `report-to` noch nicht breit von Browsern unterstützt wird.

Siehe [Content Security Policy (CSP) Implementierung](/de/docs/Web/Security/Practical_implementation_guides/CSP) für weitere Beispiele.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTTPHeader("Content-Security-Policy-Report-Only")}}
- [Erfahren Sie mehr über: Content Security Policy](/de/docs/Web/HTTP/CSP)
- [Content Security in WebExtensions](/de/docs/Mozilla/Add-ons/WebExtensions/Content_Security_Policy)
- [Annahme einer strengen Richtlinie](https://csp.withgoogle.com/docs/strict-csp.html)
- [CSP Evaluator](https://github.com/google/csp-evaluator) - Bewerten Sie Ihre Content Security Policy
