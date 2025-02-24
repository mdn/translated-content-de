---
title: Content-Security-Policy (CSP)
short-title: Content-Security-Policy
slug: Web/HTTP/Headers/Content-Security-Policy
l10n:
  sourceCommit: 442db82028668b17b888ee439468ae2ac9d589a5
---

{{HTTPSidebar}}

Der HTTP **`Content-Security-Policy`** Antwort-Header ermöglicht es Website-Administratoren, zu kontrollieren, welche Ressourcen ein Benutzeragent für eine bestimmte Seite laden darf. Mit wenigen Ausnahmen beinhalten die Richtlinien hauptsächlich die Spezifikation von Server-Ursprüngen und Skriptendpunkten. Dies hilft, {{Glossary("cross-site_scripting", "Cross-Site-Scripting")}} Angriffe zu verhindern.

Siehe den [Content Security Policy (CSP)](/de/docs/Web/HTTP/CSP) Leitfaden für Details darüber, wie eine CSP an den Browser geliefert wird, wie sie aussieht, Anwendungsfälle und Bereitstellungsstrategien.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Response_header", "Antwort-Header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_request_header", "Verbotener Anfrage-Header")}}</th>
      <td>Nein</td>
    </tr>
  </tbody>
</table>

## Syntax

```http
Content-Security-Policy: <policy-directive>; <policy-directive>
```

wobei `<policy-directive>` aus folgendem besteht:
`<directive> <value>` ohne innere Interpunktion.

## Direktiven

### Fetch-Direktiven

Fetch-Direktiven steuern die Orte, von denen bestimmte Ressourcentypen geladen werden können.

- {{CSP("child-src")}}

  - : Definiert die gültigen Quellen für [Web Worker](/de/docs/Web/API/Web_Workers_API) und verschachtelte Browsing-Kontexte, die mit Elementen wie
    {{HTMLElement("frame")}} und {{HTMLElement("iframe")}} geladen werden.

    [Ersatz](#ersatze) für `frame-src` und `worker-src`.

- {{CSP("connect-src")}}
  - : Beschränkt die URLs, die über Skript-Schnittstellen geladen werden können.
- {{CSP("default-src")}}

  - : Dient als Ersatz für die anderen {{Glossary("Fetch_directive", "Fetch-Direktiven")}}.

    [Ersatz](#ersatze) für alle anderen Fetch-Direktiven.

- {{CSP("fenced-frame-src")}} {{experimental_inline}}
  - : Spezifiziert gültige Quellen für verschachtelte Browsing-Kontexte, die in {{HTMLElement("fencedframe")}} Elemente geladen werden.
- {{CSP("font-src")}}
  - : Spezifiziert gültige Quellen für Schriften, die mit {{cssxref("@font-face")}} geladen werden.
- {{CSP("frame-src")}}
  - : Spezifiziert gültige Quellen für verschachtelte Browsing-Kontexte, die in Elemente wie {{HTMLElement("frame")}} und {{HTMLElement("iframe")}} geladen werden.
- {{CSP("img-src")}}
  - : Spezifiziert gültige Quellen für Bilder und Favicons.
- {{CSP("manifest-src")}}
  - : Spezifiziert gültige Quellen für Anwendungs-Manifestdateien.
- {{CSP("media-src")}}
  - : Spezifiziert gültige Quellen zum Laden von Medien über die {{HTMLElement("audio")}},
    {{HTMLElement("video")}} und {{HTMLElement("track")}} Elemente.
- {{CSP("object-src")}}
  - : Spezifiziert gültige Quellen für die {{HTMLElement("object")}} und {{HTMLElement("embed")}} Elemente.
- {{CSP("prefetch-src")}} {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Spezifiziert gültige Quellen, die vorgeladen oder vorgerendert werden sollen.
- {{CSP("script-src")}}

  - : Spezifiziert gültige Quellen für JavaScript- und WebAssembly-Ressourcen.

    [Ersatz](#ersatze) für `script-src-elem` und `script-src-attr`.

- {{CSP("script-src-elem")}}
  - : Spezifiziert gültige Quellen für JavaScript {{HTMLElement("script")}} Elemente.
- {{CSP("script-src-attr")}}
  - : Spezifiziert gültige Quellen für JavaScript Inline-Event-Handler.
- {{CSP("style-src")}}

  - : Spezifiziert gültige Quellen für Stylesheets.

    [Ersatz](#ersatze) für `style-src-elem` und `style-src-attr`.

- {{CSP("style-src-elem")}}
  - : Spezifiziert gültige Quellen für Stylesheets {{HTMLElement("style")}} Elemente und {{HTMLElement("link")}} Elemente mit `rel="stylesheet"`.
- {{CSP("style-src-attr")}}
  - : Spezifiziert gültige Quellen für Inline-Stile, die auf einzelne DOM-Elemente angewendet werden.
- {{CSP("worker-src")}}
  - : Spezifiziert gültige Quellen für [`Worker`](/de/docs/Web/API/Worker), [`SharedWorker`](/de/docs/Web/API/SharedWorker) oder
    [`ServiceWorker`](/de/docs/Web/API/ServiceWorker) Skripte.

Alle Fetch-Direktiven können den Einzelwert `'none'` angeben, was bedeutet, dass der spezifische Ressourcentyp vollständig blockiert werden soll, oder als eine oder mehrere _Quellen-Ausdrucks-Werte_, die gültige Quellen für diesen Ressourcentyp angeben. Siehe [Fetch-Direktive-Syntax](#fetch-direktive-syntax) für mehr Details.

#### Ersatze

Einige Fetch-Direktiven funktionieren als Ersatze für andere, detailliertere Direktiven. Dies bedeutet, dass, wenn die detailliertere Direktive nicht spezifiziert wird, der Ersatz zur Bereitstellung einer Richtlinie für diesen Ressourcentyp verwendet wird.

- `default-src` ist ein Ersatz für alle anderen Fetch-Direktiven.
- `script-src` ist ein Ersatz für `script-src-attr` und `script-src-elem`.
- `style-src` ist ein Ersatz für `style-src-attr` und `style-src-elem`.
- `child-src` ist ein Ersatz für `frame-src` und `worker-src`.

Beispielsweise:

- Wenn `img-src` weggelassen, aber `default-src` eingeschlossen wird, dann wird die durch `default-src` definierte Richtlinie für Bilder angewendet.
- Wenn `script-src-elem` weggelassen, aber `script-src` eingeschlossen wird, dann wird die durch `script-src` definierte Richtlinie auf `<script>` Elemente angewendet.
- Wenn `script-src-elem` und `script-src` beide weggelassen werden, aber `default-src` eingeschlossen ist, dann wird die durch `default-src` definierte Richtlinie auf `<script>` Elemente angewendet.

### Dokument-Direktiven

Dokument-Direktiven regeln die Eigenschaften eines Dokuments oder einer [Worker](/de/docs/Web/API/Web_Workers_API) Umgebung, auf die eine Richtlinie angewendet wird.

- {{CSP("base-uri")}}
  - : Beschränkt die URLs, die im {{HTMLElement("base")}} Element eines Dokuments verwendet werden können.
- {{CSP("sandbox")}}
  - : Aktiviert eine Sandbox für die angeforderte Ressource, ähnlich dem {{HTMLElement("iframe")}} [`sandbox`](/de/docs/Web/HTML/Element/iframe#sandbox) Attribut.

### Navigations-Direktiven

Navigations-Direktiven regeln, zu welchen Orten ein Benutzer navigieren oder ein Formular einsenden kann, zum Beispiel.

- {{CSP("form-action")}}
  - : Beschränkt die URLs, die als Ziel einer Formularübermittlung aus einem gegebenen Kontext verwendet werden können.
- {{CSP("frame-ancestors")}}
  - : Spezifiziert gültige Eltern, die eine Seite mit {{HTMLElement("frame")}}, {{HTMLElement("iframe")}}, {{HTMLElement("object")}} oder {{HTMLElement("embed")}} einbetten können.

### Reporting-Direktiven

Reporting-Direktiven steuern die Ziel-URL für CSP-Verstoßberichte in `Content-Security-Policy` und {{HTTPHeader("Content-Security-Policy-Report-Only")}}.

- {{CSP("report-to")}}

  - : Liefert dem Browser ein Token, das den Berichts-Endpunkt oder die Berichts-Endpunktgruppe identifiziert, an die Informationen über CSP-Verstöße gesendet werden sollen. Die Endpunkte, die das Token repräsentiert, werden durch andere HTTP-Header bereitgestellt, wie {{HTTPHeader("Reporting-Endpoints")}} und {{HTTPHeader("Report-To")}} {{deprecated_inline}}.

    > [!WARNING]
    > Diese Direktive soll [`report-uri`](#report-uri) ersetzen; in Browsern, die `report-to` unterstützen, wird die `report-uri` Direktive ignoriert.
    > Bis `report-to` jedoch breit unterstützt wird, sollten Sie beide Header wie gezeigt angeben (wobei `endpoint_name` der Name eines separat bereitgestellten Endpunkts ist):
    >
    > ```http
    > Content-Security-Policy: …; report-uri https://endpoint.example.com; report-to endpoint_name
    > ```

### Andere Direktiven

- {{CSP("require-trusted-types-for")}} {{experimental_inline}}
  - : Erzwingt [Trusted Types](/de/docs/Web/API/Trusted_Types_API) an den DOM XSS-Injektionsstellen.
- {{CSP("trusted-types")}} {{experimental_inline}}
  - : Wird verwendet, um eine Positivliste von [Trusted Types](/de/docs/Web/API/Trusted_Types_API) Richtlinien anzugeben. Trusted Types ermöglichen es Anwendungen, DOM XSS-Injektionsstellen so zu sperren, dass nur nicht manipulierbare, typisierte Werte anstelle von Zeichenfolgen akzeptiert werden.
- {{CSP("upgrade-insecure-requests")}}
  - : Weist Benutzeragenten an, alle unsicheren URLs einer Website (die über HTTP bereitgestellt werden) so zu behandeln, als wären sie mit sicheren URLs (die über HTTPS bereitgestellt werden) ersetzt worden. Diese Direktive ist für Websites mit einer großen Anzahl unsicherer alter URLs gedacht, die umgeschrieben werden müssen.

### Veraltete Direktiven

- {{CSP("block-all-mixed-content")}} {{deprecated_inline}}

  - : Verhindert das Laden von Assets über HTTP, wenn die Seite über HTTPS geladen wird.

- {{CSP("report-uri")}} {{deprecated_inline}}
  - : Bietet dem Browser eine URL, an die CSP-Verstoßberichte gesendet werden sollen. Dies wurde durch die [`report-to`](#report-to) Direktive ersetzt.

## Fetch-Direktive-Syntax

Alle Fetch-Direktiven können wie folgt angegeben werden:

- den Einzelwert `'none'`, was bedeutet, dass der spezifische Ressourcentyp vollständig blockiert werden soll
- ein oder mehrere _Quellen-Ausdrucks-Werte_, die gültige Quellen für diesen Ressourcentyp angeben.

Jeder Quellen-Ausdruck nimmt eine der unten aufgeführten Formen an. Beachten Sie, dass nicht alle Formen für alle Fetch-Direktiven anwendbar sind: siehe die Dokumentation für jede Fetch-Direktive, um herauszufinden, welche Formen anwendbar sind.

Die `<host-source>` und `<scheme-source>` Formate müssen unverpackt sein, und alle anderen Formate müssen in einfache Anführungszeichen eingeschlossen sein.

### 'nonce-\<nonce_value>'

Dieser Wert besteht aus dem String `nonce-`, gefolgt von einem {{Glossary("Base64", "Base64-kodierten")}} String. Dieser String ist ein zufälliger Wert, den der Server für jede HTTP-Antwort generiert. Zum Beispiel:

```plain
'nonce-416d1177-4d12-4e3b-b7c9-f6c409789fb8'
```

Der Server kann dann denselben Wert als Wert des `nonce` Attributes von {{htmlelement("script")}} oder {{htmlelement("style")}} Ressourcen aufnehmen, die sie aus dem Dokument laden möchten.

Der Browser vergleicht den Wert aus der CSP-Direktive mit dem Wert im Elementattribut und lädt die Ressource nur, wenn sie übereinstimmen.

Wenn eine Direktive ein Nonce und `unsafe-inline` enthält, ignoriert der Browser `unsafe-inline`.

Siehe [Nonces](/de/docs/Web/HTTP/CSP#nonces) im CSP-Leitfaden für weitere Informationen zur Verwendung.

> [!NOTE]
> Nonce-Quellen-Ausdrücke sind nur für {{htmlelement("script")}} und {{htmlelement("style")}} Elemente anwendbar.

### '\<hash_algorithm>-<hash_value>'

Dieser Wert besteht aus einem String, der einen Hash-Algorithmus identifiziert, gefolgt von `-`, gefolgt von einem {{Glossary("Base64", "Base64-kodierten")}} String, der den Hash-Wert darstellt.

- Der Hash-Algorithmus-Identifier muss einer der folgenden sein: `sha256`, `sha384` oder `sha512`.
- Der Hash-Wert ist der Base64-kodierte {{Glossary("Cryptographic_hash_function", "Hash")}} einer `<script>` oder `<style>` Ressource, berechnet mit einer der folgenden Hash-Funktionen: SHA-256, SHA-384 oder SHA-512.

Zum Beispiel:

```plain
'sha256-cd9827ad...'
```

Wenn der Browser das Dokument empfängt, hashiert er den Inhalt aller `<script>` und `<style>` Elemente, vergleicht das Ergebnis mit allen Hashes in der CSP-Direktive und lädt die Ressource nur, wenn es eine Übereinstimmung gibt.

Wenn das Element eine externe Ressource lädt (zum Beispiel mit dem [`src`](/de/docs/Web/HTML/Element/script#src) Attribut), muss das Element auch das [`integrity`](/de/docs/Web/HTML/Element/script#integrity) Attribut gesetzt haben.

Wenn eine Direktive einen Hash und `unsafe-inline` enthält, ignoriert der Browser `unsafe-inline`.

Siehe [Hashes](/de/docs/Web/HTTP/CSP#hashes) im CSP-Leitfaden für weitere Informationen zur Verwendung.

> [!NOTE]
> Hash-Quellen-Ausdrücke sind nur für {{htmlelement("script")}} und {{htmlelement("style")}} Elemente anwendbar.

### \<host-source>

Die [URL](/de/docs/Web/URI) oder IP-Adresse eines {{Glossary("host", "Host")}}, der eine gültige Quelle für die Ressource darstellt.

Das Schema, die Portnummer und der Pfad sind optional.

Wenn das Schema weggelassen wird, wird das Schema des Ursprungs des Dokuments verwendet.

Beim Abgleichen von Schemata sind sichere Upgrades erlaubt. Zum Beispiel:

- `http://example.com` erlaubt auch Ressourcen von `https://example.com`
- `ws://example.org` erlaubt auch Ressourcen von `wss://example.org`.

Wildcards (`'*'`) können für Subdomains, Host-Adressen und Portnummern verwendet werden, was bedeutet, dass alle legalen Werte von jedem gültig sind. Zum Beispiel:

- `http://*.example.com` erlaubt Ressourcen von beliebigen Subdomains von `example.com`, über HTTP oder HTTPS.

Pfade, die mit `/` enden, stimmen mit allen Pfaden überein, deren Präfix sie sind. Zum Beispiel:

- `example.com/api/` erlaubt Ressourcen von `example.com/api/users/new`.

Pfade, die nicht mit `/` enden, werden genau verglichen. Zum Beispiel:

- `https://example.com/file.js` erlaubt Ressourcen von `https://example.com/file.js` aber nicht `https://example.com/file.js/file2.js`.

### \<scheme-source>

Ein [Schema](/de/docs/Web/URI/Reference/Schemes), wie `https:`. Der Doppelpunkt ist erforderlich.

Sichere Upgrades sind erlaubt, also:

- `http:` erlaubt auch Ressourcen, die über HTTPS geladen werden
- `ws:` erlaubt auch Ressourcen, die über WSS geladen werden.

### 'self'

Ressourcen des angegebenen Typs dürfen nur aus dem gleichen {{Glossary("origin", "Ursprung")}} wie das Dokument geladen werden.

Sichere Upgrades sind erlaubt. Zum Beispiel:

- Wenn das Dokument von `http://example.com` bereitgestellt wird, erlaubt eine CSP von `'self'` auch Ressourcen von `https://example.com`.
- Wenn das Dokument von `ws://example.org` bereitgestellt wird, erlaubt eine CSP von `'self'` auch Ressourcen von `wss://example.org`.

### 'unsafe-eval'

Standardmäßig, wenn eine CSP eine `default-src` oder eine `script-src` Direktive enthält, sind JavaScript-Funktionen, die ihre Argumente als JavaScript auswerten, deaktiviert. Dies schließt [`eval()`](/de/docs/Web/JavaScript/Reference/Global_Objects/eval), das [`code`](/de/docs/Web/API/Window/setTimeout#code) Argument von [`setTimeout()`](/de/docs/Web/API/Window/setTimeout) oder den {{jsxref("Function/Function()", "Function()")}} Konstruktor ein.

Das `unsafe-eval` Schlüsselwort kann verwendet werden, um diesen Schutz rückgängig zu machen und die dynamische Auswertung von Strings als JavaScript zu erlauben.

> [!WARNING]
> Entwickler sollten `'unsafe-eval'` vermeiden, da es den Zweck einer CSP weitgehend untergräbt.

Siehe [`eval()` und ähnliche APIs](/de/docs/Web/HTTP/CSP#eval_and_similar_apis) im CSP-Leitfaden für weitere Informationen zur Verwendung.

### 'wasm-unsafe-eval'

Standardmäßig, wenn eine CSP eine `default-src` oder eine `script-src` Direktive enthält, darf eine Seite WebAssembly nicht mit Funktionen wie [`WebAssembly.compileStreaming()`](/de/docs/WebAssembly/Reference/JavaScript_interface/compileStreaming_static) kompilieren.

Das `wasm-unsafe-eval` Schlüsselwort kann verwendet werden, um diesen Schutz rückgängig zu machen. Dies ist eine viel sicherere Alternative zu `'unsafe-eval'`, da es keine allgemeine Auswertung von JavaScript ermöglicht.

### 'unsafe-inline'

Standardmäßig, wenn eine CSP eine `default-src` oder eine `script-src` Direktive enthält, darf Inline-JavaScript nicht ausgeführt werden. Dies schließt ein:

- Inline-`<script>`-Tags
- Inline-Event-Handler-Attribute
- `javascript:` URLs.

Ebenso, wenn eine CSP `default-src` oder eine `style-src` Direktive enthält, wird Inline-CSS nicht geladen, einschließlich:

- Inline-`<style>`-Tags
- [`style`](/de/docs/Web/API/HTMLElement/style) Attribute.

Das `unsafe-inline` Schlüsselwort kann verwendet werden, um diesen Schutz rückgängig zu machen und alle diese Formulare zu laden.

> [!WARNING]
> Entwickler sollten `'unsafe-inline'` vermeiden, da es den Zweck einer CSP weitgehend untergräbt.

Siehe [Inline-JavaScript](/de/docs/Web/HTTP/CSP#inline_javascript) im CSP-Leitfaden für weitere Informationen zur Verwendung.

### 'unsafe-hashes'

Standardmäßig, wenn eine CSP eine `default-src` oder eine `script-src` Direktive enthält, dürfen Inline-Event-Handler-Attribute wie `onclick` und Inline-`style`-Attribute nicht ausgeführt werden.

Der `'unsafe-hashes'` Ausdruck erlaubt dem Browser die Nutzung von [Hash-Ausdrücken](#hash_algorithm-hash_value) für Inline-Event-Handler und `style`-Attribute. Zum Beispiel könnte eine CSP eine Direktive enthalten wie:

```http
script-src 'unsafe-hashes' 'sha256-cd9827ad...'
```

Wenn der Hash-Wert mit dem Hash eines Inline-Event-Handler-Attributwerts oder eines `style`-Attributwerts übereinstimmt, wird der Code ausgeführt.

> [!WARNING]
> Der `'unsafe-hashes'` Wert ist unsicher.
>
> Besonders ermöglicht er einen Angriff, bei dem der Inhalt des Inline-Event-Handler-Attributs als Inline-`<script>`-Element ins Dokument injiziert wird. Angenommen, der Inline-Event-Handler ist:
>
> ```html
> <button onclick="transferAllMyMoney()">Transfer all my money</button>
> ```
>
> Wenn ein Angreifer ein Inline-`<script>`-Element mit diesem Code injizieren kann, erlaubt die CSP dessen automatische Ausführung.
>
> Dennoch ist `'unsafe-hashes'` viel sicherer als `'unsafe-inline'`.

### 'inline-speculation-rules'

Standardmäßig, wenn eine CSP eine `default-src` oder eine `script-src` Direktive enthält, darf Inline-JavaScript nicht ausgeführt werden. Die `'inline-speculation-rules'` erlaubt dem Browser, Inline-`<script>`-Elemente zu laden, die ein [`type`](/de/docs/Web/HTML/Element/script/type) Attribut von [`speculationrules`](/de/docs/Web/HTML/Element/script/type/speculationrules) haben.

Siehe die [Speculation Rules API](/de/docs/Web/API/Speculation_Rules_API) für weitere Informationen.

### 'strict-dynamic'

Das `'strict-dynamic'` Schlüsselwort erweitert das Vertrauen, das auf ein Skript durch einen [Nonce](#nonce-nonce_value) oder einen [Hash](#hash_algorithm-hash_value) übertragen wird, auf Skripte, die dieses Skript dynamisch lädt, zum Beispiel durch Erstellen neuer `<script>`-Tags mit [`Document.createElement()`](/de/docs/Web/API/Document/createElement) und anschließendes Einfügen in das Dokument mit [`Node.appendChild()`](/de/docs/Web/API/Node/appendChild).

Wenn dieses Schlüsselwort in einer Direktive vorhanden ist, werden die folgenden Quellausdruckswerte alle ignoriert:

- [\<host-source>](#host-source)
- [\<scheme-source>](#scheme-source)
- [`'self'`](#self)
- [`'unsafe-inline'`](#unsafe-inline)

Siehe [Das `strict-dynamic` Schlüsselwort](/de/docs/Web/HTTP/CSP#the_strict-dynamic_keyword) im CSP-Leitfaden für weitere Informationen zur Verwendung.

### 'report-sample'

Wenn dieser Ausdruck in einer Direktive enthalten ist, die Skripte oder Stile kontrolliert, und die Direktive dazu führt, dass der Browser Inline-Skripte, Inline-Stile oder Event-Handler-Attribute blockiert, dann enthält der [Verstoßbericht](/de/docs/Web/HTTP/CSP#violation_reporting), den der Browser generiert, eine [`sample`](/de/docs/Web/API/CSPViolationReportBody/sample) Eigenschaft mit den ersten 40 Zeichen der blockierten Ressource.

## CSP in Workern

[Worker](/de/docs/Web/API/Worker) werden im Allgemeinen _nicht_ durch die Content-Security-Policy des Dokuments (oder des übergeordneten Workers) geregelt, das sie erstellt hat. Um eine Content-Security-Policy für den Worker zu spezifizieren, setzen Sie einen `Content-Security-Policy` Antwort-Header für die Anfrage, die das Worker-Skript selbst angefordert hat.

Die Ausnahme ist, wenn der Ursprung des Worker-Skripts ein global eindeutiger Bezeichner ist (zum Beispiel, wenn seine URL ein Schema von "data" oder "blob" hat). In diesem Fall erbt der Worker die Content-Security-Policy des Dokuments oder Workers, der ihn erstellt hat.

## Mehrere Content-Security-Policies

Der CSP-Mechanismus erlaubt mehrere Richtlinien, die für eine Ressource spezifiziert werden können, einschließlich über den `Content-Security-Policy` Header, den {{HTTPHeader("Content-Security-Policy-Report-Only")}} Header und ein {{HTMLElement("meta")}} Element.

Sie können den `Content-Security-Policy` Header mehr als einmal verwenden, wie im folgenden Beispiel. Achten Sie besonders auf die {{CSP("connect-src")}} Direktive hier. Selbst wenn die zweite Richtlinie die Verbindung zulassen würde, enthält die erste Richtlinie `connect-src 'none'`. Das Hinzufügen zusätzlicher Richtlinien _kann nur weiter_ die Fähigkeiten der geschützten Ressource einschränken, was bedeutet, dass keine Verbindung erlaubt ist und, als die strengste Richtlinie, `connect-src 'none'` durchgesetzt wird.

```http
Content-Security-Policy: default-src 'self' http://example.com;
                          connect-src 'none';
Content-Security-Policy: connect-src http://example.com/;
                          script-src http://example.com/
```

## Beispiele

### Unsicheren Inline-Code deaktivieren und nur HTTPS-Ressourcen erlauben

Dieser HTTP-Header setzt die Standardrichtlinie, um nur das Laden von Ressourcen (Bilder, Schriftarten, Skripte usw.) über HTTPS zu erlauben. Da die Direktiven `unsafe-inline` und `unsafe-eval` nicht gesetzt sind, werden Inline-Skripte blockiert.

```http
Content-Security-Policy: default-src https:
```

Die gleichen Einschränkungen können unter Verwendung des HTML {{htmlelement("meta")}} Elements angewendet werden.

```html
<meta http-equiv="Content-Security-Policy" content="default-src https:" />
```

### Inline-Code und HTTPS-Ressourcen erlauben, aber Plugins deaktivieren

Diese Richtlinie könnte auf einer bereits bestehenden Seite verwendet werden, die zu viel Inline-Code verwendet, um sie zu beheben. Sie stellt sicher, dass Ressourcen nur über HTTPS geladen werden und deaktiviert Plugins:

```http
Content-Security-Policy: default-src https: 'unsafe-eval' 'unsafe-inline'; object-src 'none'
```

### Verstöße melden, aber nicht erzwingen, wenn getestet wird

Dieses Beispiel setzt die gleichen Einschränkungen wie das vorherige Beispiel, verwendet jedoch den {{httpheader("Content-Security-Policy-Report-Only")}} Header und die {{CSP("report-to")}} Direktive. Dieser Ansatz wird während der Tests verwendet, um Verstöße zu melden, aber den Code nicht daran zu hindern, ausgeführt zu werden.

Endpunkte (URLs), an die Berichte gesendet werden sollen, werden mit dem {{HTTPHeader("Reporting-Endpoints")}} HTTP-Antwort-Header definiert.

```http
Reporting-Endpoints: csp-endpoint="https://example.com/csp-reports"
```

Ein bestimmter Endpunkt wird dann als Berichtsziel in der CSP Richtlinie unter Verwendung der {{CSP("report-to")}} Direktive ausgewählt.

```http
Content-Security-Policy-Report-Only: default-src https:; report-uri /csp-violation-report-url/; report-to csp-endpoint
```

Beachten Sie, dass die {{CSP("report-uri")}} {{deprecated_inline}} Direktive oben ebenfalls angegeben ist, da `report-to` noch nicht umfassend von Browsern unterstützt wird.

Siehe [Content Security Policy (CSP) Implementierung](/de/docs/Web/Security/Practical_implementation_guides/CSP) für weitere Beispiele.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTTPHeader("Content-Security-Policy-Report-Only")}}
- [Lernen über: Content Security Policy](/de/docs/Web/HTTP/CSP)
- [Content Security in WebExtensions](/de/docs/Mozilla/Add-ons/WebExtensions/Content_Security_Policy)
- [Übernahme einer strikten Richtlinie](https://csp.withgoogle.com/docs/strict-csp.html)
- [CSP Evaluator](https://github.com/google/csp-evaluator) - Bewerten Sie Ihre Content Security Policy
