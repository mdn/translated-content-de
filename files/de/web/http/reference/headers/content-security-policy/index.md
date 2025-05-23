---
title: Content-Security-Policy (CSP) header
short-title: Content-Security-Policy
slug: Web/HTTP/Reference/Headers/Content-Security-Policy
l10n:
  sourceCommit: ee756fd51ccbc4820a4b334aa753648650ad1d51
---

{{HTTPSidebar}}

Der HTTP-Antwortheader **`Content-Security-Policy`** ermöglicht es Website-Administratoren, die Ressourcen zu kontrollieren, die der Benutzeragent für eine gegebene Seite laden darf. Mit wenigen Ausnahmen beinhalten Richtlinien hauptsächlich die Spezifizierung von Serverursprüngen und Skriptendpunkten. Dies hilft, sich gegen {{Glossary("cross-site_scripting", "Cross-Site-Scripting")}}-Angriffe zu schützen.

Sehen Sie sich den [Content Security Policy (CSP)](/de/docs/Web/HTTP/Guides/CSP)-Leitfaden für Details dazu an, wie eine CSP an den Browser übermittelt wird, wie sie aussieht, zusammen mit Anwendungsfällen und Bereitstellungsstrategien.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Response_header", "Antwortheader")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_request_header", "Verbotener Anforderungsheader")}}</th>
      <td>nein</td>
    </tr>
  </tbody>
</table>

## Syntax

```http
Content-Security-Policy: <policy-directive>; <policy-directive>
```

wobei `<policy-directive>` besteht aus:
`<directive> <value>` ohne interne Satzzeichen.

## Direktiven

### Fetch-Direktiven

Fetch-Direktiven kontrollieren die Orte, von denen bestimmte Ressourcentypen geladen werden dürfen.

- {{CSP("child-src")}}

  - : Definiert die gültigen Quellen für [Web-Arbeiter](/de/docs/Web/API/Web_Workers_API) und verschachtelte Browsing-Kontexte, die mit Elementen wie
    {{HTMLElement("frame")}} und {{HTMLElement("iframe")}} geladen werden.

    [Fallback](#fallbacks) für `frame-src` und `worker-src`.

- {{CSP("connect-src")}}
  - : Beschränkt die URLs, die unter Verwendung von Skriptschnittstellen geladen werden können.
- {{CSP("default-src")}}

  - : Dient als Fallback für die anderen {{Glossary("Fetch_directive", "Fetch-Direktiven")}}.

    [Fallback](#fallbacks) für alle anderen Fetch-Direktiven.

- {{CSP("fenced-frame-src")}} {{experimental_inline}}
  - : Gibt gültige Quellen für verschachtelte Browsing-Kontexte an, die in {{HTMLElement("fencedframe")}}-Elemente geladen werden.
- {{CSP("font-src")}}
  - : Gibt gültige Quellen für Schriftarten an, die mit {{cssxref("@font-face")}} geladen werden.
- {{CSP("frame-src")}}
  - : Gibt gültige Quellen für verschachtelte Browsing-Kontexte an, die in Elemente wie
    {{HTMLElement("frame")}} und {{HTMLElement("iframe")}} geladen werden.
- {{CSP("img-src")}}
  - : Gibt gültige Quellen für Bilder und Favicons an.
- {{CSP("manifest-src")}}
  - : Gibt gültige Quellen für Anwendungsmanifestdateien an.
- {{CSP("media-src")}}
  - : Gibt gültige Quellen zum Laden von Medien unter Verwendung der {{HTMLElement("audio")}},
    {{HTMLElement("video")}} und {{HTMLElement("track")}}-Elemente an.
- {{CSP("object-src")}}
  - : Gibt gültige Quellen für die {{HTMLElement("object")}} und {{HTMLElement("embed")}}-Elemente an.
- {{CSP("prefetch-src")}} {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Gibt gültige Quellen an, die vorab geladen oder gerendert werden sollen.
- {{CSP("script-src")}}

  - : Gibt gültige Quellen für JavaScript- und WebAssembly-Ressourcen an.

    [Fallback](#fallbacks) für `script-src-elem` und `script-src-attr`.

- {{CSP("script-src-elem")}}
  - : Gibt gültige Quellen für JavaScript {{HTMLElement("script")}}-Elemente an.
- {{CSP("script-src-attr")}}
  - : Gibt gültige Quellen für JavaScript Inline-Ereignishandler an.
- {{CSP("style-src")}}

  - : Gibt gültige Quellen für Stylesheets an.

    [Fallback](#fallbacks) für `style-src-elem` und `style-src-attr`.

- {{CSP("style-src-elem")}}
  - : Gibt gültige Quellen für Stylesheets {{HTMLElement("style")}}-Elemente und
    {{HTMLElement("link")}}-Elemente mit `rel="stylesheet"` an.
- {{CSP("style-src-attr")}}
  - : Gibt gültige Quellen für Inline-Stile an, die auf einzelne DOM-Elemente angewendet werden.
- {{CSP("worker-src")}}
  - : Gibt gültige Quellen für [`Worker`](/de/docs/Web/API/Worker), [`SharedWorker`](/de/docs/Web/API/SharedWorker) oder
    [`ServiceWorker`](/de/docs/Web/API/ServiceWorker)-Skripte an.

Alle Fetch-Direktiven können als Einzelwert `'none'` angegeben werden, was anzeigt, dass der spezifische Ressourcentyp vollständig blockiert werden soll, oder als eine oder mehrere _Quellausdrücke_, die gültige Quellen für diesen Ressourcentyp angeben. Siehe [Fetch-Direktivsyntax](#fetch-direktivsyntax) für weitere Details.

#### Fallbacks

Einige Fetch-Direktiven fungieren als Fallbacks für andere, granularere Direktiven. Das bedeutet, dass, wenn die granularere Direktive nicht spezifiziert ist, der Fallback verwendet wird, um eine Richtlinie für diesen Ressourcentyp bereitzustellen.

- `default-src` ist ein Fallback für alle anderen Fetch-Direktiven.
- `script-src` ist ein Fallback für `script-src-attr` und `script-src-elem`.
- `style-src` ist ein Fallback für `style-src-attr` und `style-src-elem`.
- `child-src` ist ein Fallback für `frame-src` und `worker-src`.

Zum Beispiel:

- Wenn `img-src` weggelassen, aber `default-src` enthalten ist, dann wird die durch `default-src` definierte Richtlinie auf Bilder angewendet.
- Wenn `script-src-elem` weggelassen, aber `script-src` enthalten ist, dann wird die durch `script-src` definierte Richtlinie auf `<script>`-Elemente angewendet.
- Wenn sowohl `script-src-elem` als auch `script-src` weggelassen werden, aber `default-src` enthalten ist, dann wird die durch `default-src` definierte Richtlinie auf `<script>`-Elemente angewendet.

### Dokumentdirektiven

Dokumentdirektiven regeln die Eigenschaften eines Dokuments oder [Arbeiter](/de/docs/Web/API/Web_Workers_API)-Umgebung, auf die eine Richtlinie angewendet wird.

- {{CSP("base-uri")}}
  - : Beschränkt die URLs, die im {{HTMLElement("base")}}-Element eines Dokuments verwendet werden können.
- {{CSP("sandbox")}}
  - : Aktiviert eine Sandbox für die angeforderte Ressource, ähnlich dem
    {{HTMLElement("iframe")}}-[`sandbox`](/de/docs/Web/HTML/Reference/Elements/iframe#sandbox)-Attribut.

### Navigationsrichtlinien

Navigationsrichtlinien regeln, zu welchen Orten ein Nutzer navigieren oder ein Formular absenden kann.

- {{CSP("form-action")}}
  - : Beschränkt die URLs, die als Ziel eines Formularabsendungen aus einem gegebenen Kontext verwendet werden können.
- {{CSP("frame-ancestors")}}
  - : Gibt gültige Eltern an, die eine Seite mit {{HTMLElement("frame")}},
    {{HTMLElement("iframe")}}, {{HTMLElement("object")}} oder {{HTMLElement("embed")}} einbetten dürfen.

### Berichtsdirektiven

Berichtsdirektiven kontrollieren die Ziel-URL für CSP-Verletzungsberichte in `Content-Security-Policy` und {{HTTPHeader("Content-Security-Policy-Report-Only")}}.

- {{CSP("report-to")}}

  - : Bietet dem Browser ein Token, das den Berichtsendpunkt oder die Gruppe von Endpunkten identifiziert, an die Informationen über CSP-Verletzungen gesendet werden sollen.
    Die Endpunkte, die das Token repräsentiert, werden über andere HTTP-Header wie {{HTTPHeader("Reporting-Endpoints")}} und {{HTTPHeader("Report-To")}} {{deprecated_inline}} bereitgestellt.

    > [!WARNING]
    > Diese Direktive soll [`report-uri`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/report-uri) ersetzen; in Browsern, die `report-to` unterstützen, wird die `report-uri`-Direktive ignoriert.
    > Bis `report-to` jedoch breit unterstützt wird, sollten Sie beide Header wie gezeigt spezifizieren (wobei `endpoint_name` der Name eines separat bereitgestellten Endpunkts ist):
    >
    > ```http
    > Content-Security-Policy: …; report-uri https://endpoint.example.com; report-to endpoint_name
    > ```

### Sonstige Direktiven

- {{CSP("require-trusted-types-for")}}
  - : Erzwingt [Trusted Types](/de/docs/Web/API/Trusted_Types_API) bei den DOM-XSS-Injektionsquellen.
- {{CSP("trusted-types")}}
  - : Wird verwendet, um eine Positivliste von [Trusted Types](/de/docs/Web/API/Trusted_Types_API)-Richtlinien zu spezifizieren.
    Trusted Types ermöglicht es Anwendungen, DOM-XSS-Injektionsquellen so zu sichern, dass nur nicht manipulierbare, typisierte Werte statt Zeichenketten akzeptiert werden.
- {{CSP("upgrade-insecure-requests")}}
  - : Instruierte Benutzeragenten, alle unsicheren URLs einer Website (die über
    HTTP bereitgestellt werden) so zu behandeln, als wären sie durch sichere URLs (die über HTTPS bereitgestellt werden) ersetzt worden.
    Diese Direktive ist für Websites gedacht, die eine große Anzahl unsicherer, veralteter URLs haben, die umgeschrieben werden müssen.

### Veraltete Direktiven

- {{CSP("block-all-mixed-content")}} {{deprecated_inline}}

  - : Verhindert das Laden jeglicher Assets mit HTTP, wenn die Seite mit HTTPS geladen wird.

- {{CSP("report-uri")}} {{deprecated_inline}}
  - : Stellt dem Browser eine URL zur Verfügung, an die CSP-Verletzungsberichte gesendet werden sollen.
    Dies wurde durch die [`report-to`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/report-to)-Direktive ersetzt.

## Fetch-Direktivsyntax

Alle Fetch-Direktiven können als einer der folgenden Werte angegeben werden:

- der Einzelwert `'none'`, der angibt, dass der spezifische Ressourcentyp vollständig blockiert werden soll
- ein oder mehrere _Quellausdrücke_, die gültige Quellen für diesen Ressourcentyp angeben.

Jeder Quellausdruck nimmt eine der unten aufgeführten Formen an. Beachten Sie, dass nicht alle Formen für alle Fetch-Direktiven anwendbar sind: Siehe die Dokumentation für jede Fetch-Direktive, um herauszufinden, welche Formen auf sie anwendbar sind.

Die Formate `<host-source>` und `<scheme-source>` müssen ohne Anführungszeichen sein, und alle anderen Formate müssen in einfache Anführungszeichen eingeschlossen werden.

### 'nonce-\<nonce_value>'

Dieser Wert besteht aus dem Zeichenfolgenpräfix `nonce-`, gefolgt von einer {{Glossary("Base64", "Base64-codierten")}} Zeichenkette. Diese Zeichenkette ist ein zufälliger Wert, der vom Server für jede HTTP-Antwort generiert wird. Zum Beispiel:

```plain
'nonce-416d1177-4d12-4e3b-b7c9-f6c409789fb8'
```

Der Server kann dann denselben Wert als Wert des `nonce`-Attributs jeder {{htmlelement("script")}}- oder {{htmlelement("style")}}-Ressource einschließen, die sie aus dem Dokument laden möchten.

Der Browser vergleicht den Wert aus der CSP-Direktive mit dem Wert im Elementattribut und lädt die Ressource nur, wenn sie übereinstimmen.

Wenn eine Direktive ein Nonce und `unsafe-inline` enthält, ignoriert der Browser `unsafe-inline`.

Siehe [Nonces](/de/docs/Web/HTTP/Guides/CSP#nonces) im CSP-Leitfaden für weitere Nutzungsinformationen.

> [!NOTE]
> Nonce-Quellausdrücke gelten nur für {{htmlelement("script")}}- und {{htmlelement("style")}}-Elemente.

### '\<hash_algorithm>-<hash_value>'

Dieser Wert besteht aus einer Zeichenfolge, die einen Hash-Algorithmus identifiziert, gefolgt von `-`, gefolgt von einer {{Glossary("Base64", "Base64-codierten")}} Zeichenkette, die den Hashwert darstellt.

- Der Hash-Algorithmusbezeichner muss einer der folgenden sein: `sha256`, `sha384` oder `sha512`.
- Der Hashwert ist der Base64-codierte {{Glossary("hash_function", "Hash")}} einer `<script>`- oder `<style>`-Ressource, berechnet mit einer der folgenden Hash-Funktionen: SHA-256, SHA-384 oder SHA-512.

Zum Beispiel:

```plain
'sha256-cd9827ad...'
```

Wenn der Browser das Dokument empfängt, hash erstellt er den Inhalt aller `<script>`- und `<style>`-Elemente, vergleicht das Ergebnis mit den Hashes in der CSP-Direktive und lädt die Ressource nur, wenn eine Übereinstimmung gefunden wird.

Wenn das Element eine externe Ressource lädt (z. B. unter Verwendung des [`src`](/de/docs/Web/HTML/Reference/Elements/script#src)-Attributs), muss das Element auch das [`integrity`](/de/docs/Web/HTML/Reference/Elements/script#integrity)-Attribut gesetzt haben.

Wenn eine Direktive einen Hash und `unsafe-inline` enthält, ignoriert der Browser `unsafe-inline`.

Siehe [Hashes](/de/docs/Web/HTTP/Guides/CSP#hashes) im CSP-Leitfaden für weitere Nutzungsinformationen.

> [!NOTE]
> Hash-Quellausdrücke gelten nur für {{htmlelement("script")}}- und {{htmlelement("style")}}-Elemente.

### \<host-source>

Die [URL](/de/docs/Web/URI) oder IP-Adresse eines {{Glossary("host", "Hosts")}}, der eine gültige Quelle für die Ressource ist.

Das Schema, die Portnummer und der Pfad sind optional.

Wenn das Schema weggelassen wird, wird das Schema des Ursprungs des Dokuments verwendet.

Beim Vergleichen von Schemata sind sichere Upgrades erlaubt. Zum Beispiel:

- `http://example.com` ermöglicht auch Ressourcen von `https://example.com`
- `ws://example.org` ermöglicht auch Ressourcen von `wss://example.org`.

Wildcards (`'*'`) können für Subdomains, Hostadresse und Portnummer verwendet werden, was bedeutet, dass alle zulässigen Werte jedes Werts gültig sind. Zum Beispiel:

- `http://*.example.com` ermöglicht Ressourcen von jeder Subdomain von `example.com`, über HTTP oder HTTPS.

Pfad, die mit `/` enden, stimmen mit jedem Pfad überein, von dem sie ein Präfix sind. Zum Beispiel:

- `example.com/api/` ermöglicht Ressourcen von `example.com/api/users/new`.

Pfad, die nicht mit `/` enden, werden genau übereinstimmt. Zum Beispiel:

- `https://example.com/file.js` ermöglicht Ressourcen von `https://example.com/file.js`, jedoch nicht `https://example.com/file.js/file2.js`.

### \<scheme-source>

Ein [Schema](/de/docs/Web/URI/Reference/Schemes), wie `https:`. Der Doppelpunkt ist erforderlich.

Sichere Upgrades sind erlaubt, so dass:

- `http:` ermöglicht auch Ressourcen, die über HTTPS geladen werden
- `ws:` ermöglicht auch Ressourcen, die über WSS geladen werden.

### 'self'

Ressourcen des gegebenen Typs dürfen nur vom selben {{Glossary("origin", "Ursprung")}} wie das Dokument geladen werden.

Sichere Upgrades sind erlaubt. Zum Beispiel:

- Wenn das Dokument von `http://example.com` bereitgestellt wird, wird eine CSP von `'self'` auch Ressourcen von `https://example.com` erlauben.
- Wenn das Dokument von `ws://example.org` bereitgestellt wird, wird eine CSP von `'self'` auch Ressourcen von `wss://example.org` erlauben.

### 'unsafe-eval'

Standardmäßig, wenn eine CSP eine `default-src`- oder eine `script-src`-Direktive enthält, dann sind JavaScript-Funktionen, die ihre Argumente als JavaScript auswerten, deaktiviert. Dies schließt [`eval()`](/de/docs/Web/JavaScript/Reference/Global_Objects/eval), das [`code`](/de/docs/Web/API/Window/setTimeout#code)-Argument für [`setTimeout()`](/de/docs/Web/API/Window/setTimeout), oder den {{jsxref("Function/Function()", "Function()")}}-Konstruktor ein.

Das `unsafe-eval`-Schlüsselwort kann verwendet werden, um diesen Schutz aufzuheben und die dynamische Auswertung von Zeichenketten als JavaScript zu ermöglichen.

> [!WARNING]
> Entwickler sollten `'unsafe-eval'` vermeiden, da es einen Großteil des Zwecks einer CSP zunichte macht.

Siehe [`eval()` und ähnliche APIs](/de/docs/Web/HTTP/Guides/CSP#eval_and_similar_apis) im CSP-Leitfaden für weitere Nutzungsinformationen.

### 'wasm-unsafe-eval'

Standardmäßig, wenn eine CSP eine `default-src`- oder eine `script-src`-Direktive enthält, darf eine Seite WebAssembly nicht mit Funktionen wie [`WebAssembly.compileStreaming()`](/de/docs/WebAssembly/Reference/JavaScript_interface/compileStreaming_static) kompilieren.

Das `wasm-unsafe-eval`-Schlüsselwort kann verwendet werden, um diesen Schutz aufzuheben. Dies ist eine viel sicherere Alternative zu `'unsafe-eval'`, da es keine allgemeine Auswertung von JavaScript ermöglicht.

### 'unsafe-inline'

Standardmäßig, wenn eine CSP eine `default-src`- oder eine `script-src`-Direktive enthält, darf Inline-JavaScript nicht ausgeführt werden. Dies schließt ein:

- Inline-`<script>`-Tags
- Inline-Ereignishandlerei
- `javascript:`-URLs.

Ähnlich verhält es sich, wenn eine CSP `default-src` oder eine `style-src`-Direktive enthält, dann wird Inline-CSS nicht geladen, einschließlich:

- Inline-`<style>`-Tags
- [`style`](/de/docs/Web/API/HTMLElement/style)-Attribute.

Das `unsafe-inline`-Schlüsselwort kann verwendet werden, um diesen Schutz aufzuheben und alle diese Formen zu erlauben.

> [!WARNING]
> Entwickler sollten `'unsafe-inline'` vermeiden, da es einen Großteil des Zwecks einer CSP zunichte macht.

Siehe [Inline-JavaScript](/de/docs/Web/HTTP/Guides/CSP#inline_javascript) im CSP-Leitfaden für weitere Nutzungsinformationen.

### 'unsafe-hashes'

Standardmäßig, wenn eine CSP eine `default-src`- oder eine `script-src`-Direktive enthält, dürfen Inline-Ereignishandlerei wie `onclick` und Inline-`style`-Attribute nicht ausgeführt werden.

Der Ausdruck `'unsafe-hashes'` erlaubt dem Browser, [Hash-Ausdrücke](#hash_algorithm-hash_value) für Inline-Ereignishandlerei und `style`-Attribute zu verwenden. Zum Beispiel könnte eine CSP eine Direktive wie diese enthalten:

```http
script-src 'unsafe-hashes' 'sha256-cd9827ad...'
```

Wenn der Hashwert mit dem Hashwert eines Inline-Ereignishandlers oder eines `style`-Attributwerts übereinstimmt, wird der Code ausgeführt.

> [!WARNING]
> Der Wert `'unsafe-hashes'` ist unsicher.
>
> Insbesondere ermöglicht er einen Angriff, bei dem der Inhalt des Inline-Ereignishandlers als Inline-`<script>`-Element in das Dokument injiziert wird. Angenommen, der Inline-Ereignishandler ist:
>
> ```html
> <button onclick="transferAllMyMoney()">Transfer all my money</button>
> ```
>
> Wenn ein Angreifer ein Inline-`<script>`-Element mit diesem Code injizieren kann, wird die CSP es automatisch ausführen.
>
> `'unsafe-hashes'` ist jedoch wesentlich sicherer als `'unsafe-inline'`.

### 'inline-speculation-rules'

Standardmäßig, wenn eine CSP eine `default-src`- oder eine `script-src`-Direktive enthält, darf Inline-JavaScript nicht ausgeführt werden. Das `'inline-speculation-rules'` erlaubt dem Browser, Inline-`<script>`-Elemente zu laden, die ein [`type`](/de/docs/Web/HTML/Reference/Elements/script/type)-Attribut von [`speculationrules`](/de/docs/Web/HTML/Reference/Elements/script/type/speculationrules) haben.

Siehe [Speculation Rules API](/de/docs/Web/API/Speculation_Rules_API) für weitere Informationen.

### 'strict-dynamic'

Das `'strict-dynamic'`-Schlüsselwort erweitert das Vertrauen, das durch ein [Nonce](#nonce-nonce_value) oder einen [Hash](#hash_algorithm-hash_value) einem Skript erwiesen wird, auf Skripte, die dieses Skript dynamisch lädt, zum Beispiel durch Erstellen neuer `<script>`-Tags mit [`Document.createElement()`](/de/docs/Web/API/Document/createElement) und deren Einfügen in das Dokument mit [`Node.appendChild()`](/de/docs/Web/API/Node/appendChild).

Wenn dieses Schlüsselwort in einer Direktive vorhanden ist, werden die folgenden Quellausdruckswerte alle ignoriert:

- [\<host-source>](#host-source)
- [\<scheme-source>](#scheme-source)
- [`'self'`](#self)
- [`'unsafe-inline'`](#unsafe-inline)

Siehe [Das `strict-dynamic`-Schlüsselwort](/de/docs/Web/HTTP/Guides/CSP#the_strict-dynamic_keyword) im CSP-Leitfaden für weitere Nutzungsinformationen.

### 'report-sample'

Wenn dieser Ausdruck in einer Direktive enthalten ist, die Skripte oder Stile steuert, und die Direktive dazu führt, dass der Browser Inline-Skripte, Inline-Stile oder Ereignishandlerei blockiert, enthält der [Verstoßbericht](/de/docs/Web/HTTP/Guides/CSP#violation_reporting), den der Browser generiert, eine [`sample`](/de/docs/Web/API/CSPViolationReportBody/sample)-Eigenschaft, die die ersten 40 Zeichen der blockierten Ressource enthält.

## CSP in Arbeitern

[Arbeiter](/de/docs/Web/API/Worker) werden im Allgemeinen _nicht_ von der Content-Security-Policy des Dokuments (oder Elternarbeiters) geregelt, die sie erstellt hat. Um eine Content-Security-Policy für den Arbeiter festzulegen, setzen Sie einen
`Content-Security-Policy`-Antwortheader für die Anforderung, die das
Arbeiter-Skript selbst angefordert hat.

Die Ausnahme ist, wenn der Ursprung des Arbeiterskript ein weltweit eindeutiger Bezeichner ist
(z. B. wenn die URL ein Schema von Daten oder Blobs hat). In diesem Fall erbt der Arbeiter die Content-Security-Policy des Dokuments oder Arbeiters, der ihn erstellt hat.

## Mehrere Content-Security-Policies

Der CSP-Mechanismus ermöglicht es, dass mehrere Richtlinien für eine Ressource angegeben werden, einschließlich
über den `Content-Security-Policy`-Header, den
{{HTTPHeader("Content-Security-Policy-Report-Only")}}-Header und ein
{{HTMLElement("meta")}}-Element.

Sie können den `Content-Security-Policy`-Header mehrmals verwenden, wie im
Beispiel unten gezeigt. Achten Sie besonders auf die {{CSP("connect-src")}}-Direktive hier. Auch wenn die zweite Richtlinie die Verbindung erlauben würde, enthält die erste Richtlinie
`connect-src 'none'`. Das Hinzufügen zusätzlicher Richtlinien _kann nur weiter_
die Fähigkeiten der geschützten Ressource einschränken, was bedeutet, dass keine Verbindung erlaubt wird und als die strengste Richtlinie `connect-src 'none'`
durchgesetzt wird.

```http
Content-Security-Policy: default-src 'self' http://example.com;
                          connect-src 'none';
Content-Security-Policy: connect-src http://example.com/;
                          script-src http://example.com/
```

## Beispiele

### Unsicheren Inline-Code deaktivieren und nur HTTPS-Ressourcen zulassen

Dieser HTTP-Header setzt die Standardrichtlinie so, dass Ressourcen (Bilder, Schriftarten, Skripte usw.) nur über HTTPS geladen werden können.
Da die `unsafe-inline`- und `unsafe-eval`-Direktiven nicht gesetzt sind, werden Inline-Skripte blockiert.

```http
Content-Security-Policy: default-src https:
```

Die gleichen Einschränkungen können mit dem HTML-{{htmlelement("meta")}}-Element angewendet werden.

```html
<meta http-equiv="Content-Security-Policy" content="default-src https:" />
```

### Inline-Code und HTTPS-Ressourcen zulassen, aber Plugins deaktivieren

Diese Richtlinie könnte auf einer bestehenden Site verwendet werden, die zu viel Inline-Code verwendet, um behoben zu werden, um sicherzustellen, dass Ressourcen nur über HTTPS geladen werden und Plugins deaktiviert sind:

```http
Content-Security-Policy: default-src https: 'unsafe-eval' 'unsafe-inline'; object-src 'none'
```

### Verstöße beim Testen melden, aber nicht erzwingen

Dieses Beispiel setzt die gleichen Einschränkungen wie das vorherige Beispiel, aber unter Verwendung des {{httpheader("Content-Security-Policy-Report-Only")}}-Headers und der {{CSP("report-to")}}-Direktive.
Diese Vorgehensweise wird während des Testens verwendet, um Verstöße zu melden, aber den Code nicht an der Ausführung zu hindern.

Endpoints (URLs) zum Senden von Berichten werden mit dem {{HTTPHeader("Reporting-Endpoints")}} HTTP-Antwortheader definiert.

```http
Reporting-Endpoints: csp-endpoint="https://example.com/csp-reports"
```

Ein bestimmter Endpunkt wird dann als Berichtsziele in der CSP-Richtlinie unter Nutzung der {{CSP("report-to")}}-Direktive ausgewählt.

```http
Content-Security-Policy-Report-Only: default-src https:; report-uri /csp-violation-report-url/; report-to csp-endpoint
```

Beachten Sie, dass die {{CSP("report-uri")}} {{deprecated_inline}}-Direktive auch oben angegeben ist, da `report-to` noch nicht breit von Browsern unterstützt wird.

Siehe [Content Security Policy (CSP)-Umsetzung](/de/docs/Web/Security/Practical_implementation_guides/CSP) für weitere Beispiele.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTTPHeader("Content-Security-Policy-Report-Only")}}
- [Erfahren Sie mehr über: Content Security Policy](/de/docs/Web/HTTP/Guides/CSP)
- [Content Security in WebExtensions](/de/docs/Mozilla/Add-ons/WebExtensions/Content_Security_Policy)
- [Strenge Richtlinie übernehmen](https://csp.withgoogle.com/docs/strict-csp.html)
- [CSP Evaluator](https://github.com/google/csp-evaluator) - Bewerten Sie Ihre
  Content-Security-Policy
