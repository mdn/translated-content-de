---
title: Content-Security-Policy (CSP)
short-title: Content-Security-Policy
slug: Web/HTTP/Reference/Headers/Content-Security-Policy
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{HTTPSidebar}}

Der HTTP-Header **`Content-Security-Policy`** ermöglicht es Website-Administratoren, die Ressourcen zu kontrollieren, die der Benutzeragent für eine gegebene Seite laden darf. Mit einigen Ausnahmen beziehen sich Richtlinien meistens auf die Angabe von Server-Ursprung und Skript-Endpunkten. Dies hilft, {{Glossary("cross-site_scripting", "Cross-Site-Scripting")}}-Angriffe abzuwehren.

Siehe den [Content Security Policy (CSP)](/de/docs/Web/HTTP/Guides/CSP)-Leitfaden für Details dazu, wie eine CSP dem Browser geliefert wird, wie sie aussieht, sowie für Anwendungsfälle und Bereitstellungsstrategien.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Response_header", "Antwort-Header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_request_header", "Verbotener Anforderungs-Header")}}</th>
      <td>nein</td>
    </tr>
  </tbody>
</table>

## Syntax

```http
Content-Security-Policy: <policy-directive>; <policy-directive>
```

wobei `<policy-directive>` besteht aus:
`<directive> <value>` ohne interne Zeichensetzung.

## Richtlinien

### Fetch-Richtlinien

Fetch-Richtlinien kontrollieren die Orte, von denen bestimmte Ressourcentypen geladen werden dürfen.

- {{CSP("child-src")}}

  - : Definiert die gültigen Quellen für [Web Worker](/de/docs/Web/API/Web_Workers_API) und verschachtelte Browsing-Kontexte, die mit Elementen wie {{HTMLElement("frame")}} und {{HTMLElement("iframe")}} geladen werden.

    [Fallback](#fallbacks) für `frame-src` und `worker-src`.

- {{CSP("connect-src")}}
  - : Beschränkt die URLs, die mit Skript-Schnittstellen geladen werden können.
- {{CSP("default-src")}}

  - : Dient als Fallback für die anderen {{Glossary("Fetch_directive", "Fetch-Richtlinien")}}.

    [Fallback](#fallbacks) für alle anderen Fetch-Richtlinien.

- {{CSP("fenced-frame-src")}} {{experimental_inline}}
  - : Spezifiziert gültige Quellen für verschachtelte Browsing-Kontexte, die in {{HTMLElement("fencedframe")}}-Elemente geladen werden.
- {{CSP("font-src")}}
  - : Spezifiziert gültige Quellen für Schriftarten, die mit {{cssxref("@font-face")}} geladen werden.
- {{CSP("frame-src")}}
  - : Spezifiziert gültige Quellen für verschachtelte Browsing-Kontexte, die in Elemente wie
    {{HTMLElement("frame")}} und {{HTMLElement("iframe")}} geladen werden.
- {{CSP("img-src")}}
  - : Spezifiziert gültige Quellen für Bilder und Favicons.
- {{CSP("manifest-src")}}
  - : Spezifiziert gültige Quellen für Anwendungsmanifestdateien.
- {{CSP("media-src")}}
  - : Spezifiziert gültige Quellen zum Laden von Medien mit den Elementen {{HTMLElement("audio")}}, {{HTMLElement("video")}} und {{HTMLElement("track")}}.
- {{CSP("object-src")}}
  - : Spezifiziert gültige Quellen für die Elemente {{HTMLElement("object")}} und {{HTMLElement("embed")}}.
- {{CSP("prefetch-src")}} {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Spezifiziert gültige Quellen zum Vorabrufen oder Vorerstellen.
- {{CSP("script-src")}}

  - : Spezifiziert gültige Quellen für JavaScript- und WebAssembly-Ressourcen.

    [Fallback](#fallbacks) für `script-src-elem` und `script-src-attr`.

- {{CSP("script-src-elem")}}
  - : Spezifiziert gültige Quellen für JavaScript-{{HTMLElement("script")}}-Elemente.
- {{CSP("script-src-attr")}}
  - : Spezifiziert gültige Quellen für JavaScript-Inline-Ereignishandler.
- {{CSP("style-src")}}

  - : Spezifiziert gültige Quellen für Stylesheets.

    [Fallback](#fallbacks) für `style-src-elem` und `style-src-attr`.

- {{CSP("style-src-elem")}}
  - : Spezifiziert gültige Quellen für Stylesheets in {{HTMLElement("style")}}-Elementen und
    {{HTMLElement("link")}}-Elementen mit `rel="stylesheet"`.
- {{CSP("style-src-attr")}}
  - : Spezifiziert gültige Quellen für Inline-Stile, die auf einzelne DOM-Elemente angewendet werden.
- {{CSP("worker-src")}}
  - : Spezifiziert gültige Quellen für [`Worker`](/de/docs/Web/API/Worker), [`SharedWorker`](/de/docs/Web/API/SharedWorker) oder [`ServiceWorker`](/de/docs/Web/API/ServiceWorker)-Skripte.

Alle Fetch-Richtlinien können mit dem einzelnen Wert `'none'` spezifiziert werden, was bedeutet, dass der spezifische Ressourcentyp vollständig blockiert werden soll, oder mit einem oder mehreren _source expression_-Werten, die gültige Quellen für diesen Ressourcentyp angeben. Siehe [Fetch-Richtlinien-Syntax](#fetch-richtlinien-syntax) für weitere Details.

#### Fallbacks

Einige Fetch-Richtlinien fungieren als Fallbacks für andere, spezifischere Richtlinien. Das bedeutet, wenn die spezifischere Richtlinie nicht angegeben ist, wird das Fallback verwendet, um eine Richtlinie für diesen Ressourcentyp bereitzustellen.

- `default-src` ist ein Fallback für alle anderen Fetch-Richtlinien.
- `script-src` ist ein Fallback für `script-src-attr` und `script-src-elem`.
- `style-src` ist ein Fallback für `style-src-attr` und `style-src-elem`.
- `child-src` ist ein Fallback für `frame-src` und `worker-src`.

Zum Beispiel:

- Wenn `img-src` weggelassen wird, aber `default-src` enthalten ist, wird die von `default-src` definierte Richtlinie auf Bilder angewendet.
- Wenn `script-src-elem` weggelassen wird, aber `script-src` enthalten ist, wird die von `script-src` definierte Richtlinie auf `<script>`-Elemente angewendet.
- Wenn `script-src-elem` und `script-src` weggelassen werden, aber `default-src` enthalten ist, wird die von `default-src` definierte Richtlinie auf `<script>`-Elemente angewendet.

### Dokumentrichtlinien

Dokumentrichtlinien bestimmen die Eigenschaften eines Dokuments oder [Workers](/de/docs/Web/API/Web_Workers_API)-Umgebung, auf die eine Richtlinie
angewendet wird.

- {{CSP("base-uri")}}
  - : Beschränkt die URLs, die im {{HTMLElement("base")}}-Element eines Dokuments verwendet werden können.
- {{CSP("sandbox")}}
  - : Aktiviert eine Sandbox für die angeforderte Ressource, ähnlich dem
    {{HTMLElement("iframe")}}-[`sandbox`](/de/docs/Web/HTML/Element/iframe#sandbox)-Attribut.

### Navigationsrichtlinien

Navigationsrichtlinien bestimmen, zu welchen Orten ein Benutzer navigieren oder ein Formular absenden kann,
zum Beispiel.

- {{CSP("form-action")}}
  - : Beschränkt die URLs, die als Ziel einer Formularübermittlung von einem
    gegebenen Kontext verwendet werden können.
- {{CSP("frame-ancestors")}}
  - : Spezifiziert gültige Eltern, die eine Seite mittels {{HTMLElement("frame")}},
    {{HTMLElement("iframe")}}, {{HTMLElement("object")}} oder {{HTMLElement("embed")}} einbetten dürfen.

### Berichtsrichtlinien

Berichtsrichtlinien kontrollieren die Ziel-URL für CSP-Verletzungsberichte in `Content-Security-Policy` und {{HTTPHeader("Content-Security-Policy-Report-Only")}}.

- {{CSP("report-to")}}

  - : Gibt dem Browser ein Token, das den Meldeendpunkt oder eine Gruppe von Endpunkten identifiziert, an die Informationen über CSP-Verletzungen gesendet werden sollen.
    Die Endpunkte, die das Token darstellt, werden durch andere HTTP-Header bereitgestellt, wie z.B. {{HTTPHeader("Reporting-Endpoints")}} und {{HTTPHeader("Report-To")}} {{deprecated_inline}}.

    > [!WARNING]
    > Diese Richtlinie ist dazu gedacht, [`report-uri`](#report-uri) zu ersetzen; in Browsern, die `report-to` unterstützen, wird die `report-uri`-Richtlinie ignoriert.
    > Bis `report-to` jedoch umfassend unterstützt wird, sollten Sie beide Header wie gezeigt angeben (wobei `endpoint_name` der Name eines separat bereitgestellten Endpunktes ist):
    >
    > ```http
    > Content-Security-Policy: …; report-uri https://endpoint.example.com; report-to endpoint_name
    > ```

### Andere Richtlinien

- {{CSP("require-trusted-types-for")}} {{experimental_inline}}
  - : Erzwingt [Trusted Types](/de/docs/Web/API/Trusted_Types_API) an den DOM XSS-Einschleusungspunkten.
- {{CSP("trusted-types")}} {{experimental_inline}}
  - : Wird verwendet, um eine Positivliste von [Trusted Types](/de/docs/Web/API/Trusted_Types_API)-Richtlinien anzugeben.
    Trusted Types erlaubt es Anwendungen, DOM XSS-Einschleusungspunkte zu verriegeln, sodass nur nicht-verschleierbare, typisierte Werte anstelle von Zeichenfolgen akzeptiert werden.
- {{CSP("upgrade-insecure-requests")}}
  - : Informiert Benutzeragenten, alle unsicheren URLs einer Seite (die über HTTP geliefert werden) so zu behandeln, als wären sie durch sichere URLs (die über HTTPS geliefert werden) ersetzt worden.
    Diese Richtlinie ist für Websites gedacht, die viele unsichere, veraltete URLs haben, die umgeschrieben werden müssen.

### Veraltete Richtlinien

- {{CSP("block-all-mixed-content")}} {{deprecated_inline}}

  - : Verhindert das Laden von beliebigen Assets über HTTP, wenn die Seite über HTTPS geladen wird.

- {{CSP("report-uri")}} {{deprecated_inline}}
  - : Gibt dem Browser eine URL an, an die CSP-Verletzungsberichte gesendet werden sollen.
    Diese wurde durch die [`report-to`](#report-to)-Richtlinie ersetzt.

## Fetch-Richtlinien-Syntax

Alle Fetch-Richtlinien können als eine der folgenden Optionen angegeben werden:

- der Einzelwert `'none'`, was darauf hinweist, dass der spezifische Ressourcentyp vollständig blockiert werden soll
- ein oder mehrere _source expression_-Werte, die gültige Quellen für diesen Ressourcentyp angeben.

Jeder source expression hat eine der unten aufgeführten Formen. Beachten Sie, dass nicht alle Formen für alle Fetch-Richtlinien anwendbar sind: Siehe die Dokumentation jeder Fetch-Richtlinie, um herauszufinden, welche Formen für sie anwendbar sind.

Die Formate `<host-source>` und `<scheme-source>` müssen nicht umschlossen werden, und alle anderen Formate müssen in einfache Anführungszeichen eingeschlossen werden.

### 'nonce-\<nonce_value>'

Dieser Wert besteht aus dem String `nonce-` gefolgt von einem {{Glossary("Base64", "Base64-kodierten")}} String. Dieser String ist ein zufälliger Wert, den der Server für jede HTTP-Antwort generiert. Zum Beispiel:

```plain
'nonce-416d1177-4d12-4e3b-b7c9-f6c409789fb8'
```

Der Server kann dann denselben Wert als Wert des `nonce`-Attributs jedes {{htmlelement("script")}}- oder {{htmlelement("style")}}-Ressourcen einschließen, die sie vom Dokument laden möchten.

Der Browser vergleicht den Wert aus der CSP-Richtlinie mit dem Wert im Elementattribut und lädt die Ressource nur, wenn sie übereinstimmen.

Wenn eine Richtlinie einen nonce und `unsafe-inline` enthält, ignoriert der Browser `unsafe-inline`.

Siehe [Nonce](/de/docs/Web/HTTP/Guides/CSP#nonces) im CSP-Leitfaden für weitere Anwendungsinformationen.

> [!NOTE]
> Nonce-Source-Ausdrücke sind nur für {{htmlelement("script")}} und {{htmlelement("style")}}-Elemente anwendbar.

### '\<hash_algorithm>-<hash_value>'

Dieser Wert besteht aus einem String, der einen Hash-Algorithmus identifiziert, gefolgt von `-`, gefolgt von einem {{Glossary("Base64", "Base64-kodierten")}} String, der den Hash-Wert darstellt.

- Der Hash-Algorithmus-Identifikator muss einer von `sha256`, `sha384` oder `sha512` sein.
- Der Hash-Wert ist der Base64-kodierte {{Glossary("Cryptographic_hash_function", "Hash")}} einer `<script>`- oder `<style>`-Ressource, berechnet mit einer der folgenden Hash-Funktionen: SHA-256, SHA-384 oder SHA-512.

Zum Beispiel:

```plain
'sha256-cd9827ad...'
```

Wenn der Browser das Dokument empfängt, hasht er den Inhalt aller `<script>`- und `<style>`-Elemente, vergleicht das Ergebnis mit allen Hashes in der CSP-Richtlinie und lädt die Ressource nur, wenn es eine Übereinstimmung gibt.

Wenn das Element eine externe Ressource lädt (z. B. unter Verwendung des [`src`](/de/docs/Web/HTML/Element/script#src)-Attributs), muss das Element auch das [`integrity`](/de/docs/Web/HTML/Element/script#integrity)-Attribut gesetzt haben.

Wenn eine Richtlinie einen Hash und `unsafe-inline` enthält, ignoriert der Browser `unsafe-inline`.

Siehe [Hashes](/de/docs/Web/HTTP/Guides/CSP#hashes) im CSP-Leitfaden für weitere Anwendungsinformationen.

> [!NOTE]
> Hash-Source-Ausdrücke sind nur für {{htmlelement("script")}} und {{htmlelement("style")}}-Elemente anwendbar.

### \<host-source>

Die [URL](/de/docs/Web/URI) oder IP-Adresse eines {{Glossary("host", "Host")}}, der eine gültige Quelle für die Ressource ist.

Das Schema, die Portnummer und der Pfad sind optional.

Wenn das Schema weggelassen wird, wird das Schema des Ursprungs des Dokuments verwendet.

Beim Vergleich von Schemas sind sichere Upgrades erlaubt. Zum Beispiel:

- `http://example.com` erlaubt auch Ressourcen von `https://example.com`
- `ws://example.org` erlaubt auch Ressourcen von `wss://example.org`.

Platzhalter (`'*'`) können für Subdomains, Hostadressen und Portnummern verwendet werden, was darauf hinweist, dass alle legalen Werte jedes einzelnen gültig sind. Zum Beispiel:

- `http://*.example.com` erlaubt Ressourcen von jeder Subdomain von `example.com`, über HTTP oder HTTPS.

Pfade, die mit `/` enden, stimmen mit jedem Pfad überein, dessen Präfix sie sind. Zum Beispiel:

- `example.com/api/` erlaubt Ressourcen von `example.com/api/users/new`.

Pfade, die nicht mit `/` enden, werden genau abgeglichen. Zum Beispiel:

- `https://example.com/file.js` erlaubt Ressourcen von `https://example.com/file.js`, aber nicht `https://example.com/file.js/file2.js`.

### \<scheme-source>

Ein [Schema](/de/docs/Web/URI/Reference/Schemes), wie z. B. `https:`. Der Doppelpunkt ist erforderlich.

Sichere Upgrades sind erlaubt, so dass:

- `http:` erlaubt auch Ressourcen, die über HTTPS geladen werden
- `ws:` erlaubt auch Ressourcen, die über WSS geladen werden.

### 'self'

Ressourcen des gegebenen Typs dürfen nur vom selben {{Glossary("origin", "Ursprung")}} wie das Dokument geladen werden.

Sichere Upgrades sind erlaubt. Zum Beispiel:

- Wenn das Dokument von `http://example.com` geliefert wird, erlaubt eine CSP von `'self'` auch Ressourcen von `https://example.com`.
- Wenn das Dokument von `ws://example.org` geliefert wird, erlaubt eine CSP von `'self'` auch Ressourcen von `wss://example.org`.

### 'unsafe-eval'

Standardmäßig, wenn eine CSP `default-src` oder eine `script-src`-Richtlinie enthält, sind JavaScript-Funktionen, die ihre Argumente als JavaScript auswerten, deaktiviert. Dies schließt [`eval()`](/de/docs/Web/JavaScript/Reference/Global_Objects/eval), das [`code`](/de/docs/Web/API/Window/setTimeout#code)-Argument für [`setTimeout()`](/de/docs/Web/API/Window/setTimeout), oder den {{jsxref("Function/Function()", "Function()")}}-Konstruktor ein.

Das `unsafe-eval`-Schlüsselwort kann verwendet werden, um diesen Schutz aufzuheben und die dynamische Auswertung von Zeichenfolgen als JavaScript zuzulassen.

> [!WARNING]
> Entwickler sollten `'unsafe-eval'` vermeiden, da es den Zweck einer CSP weitgehend untergräbt.

Siehe [`eval()` und ähnliche APIs](/de/docs/Web/HTTP/Guides/CSP#eval_and_similar_apis) im CSP-Leitfaden für weitere Anwendungsinformationen.

### 'wasm-unsafe-eval'

Standardmäßig, wenn eine CSP eine `default-src` oder eine `script-src`-Richtlinie enthält, wird es einer Seite nicht erlaubt sein, WebAssembly mit Funktionen wie [`WebAssembly.compileStreaming()`](/de/docs/WebAssembly/Reference/JavaScript_interface/compileStreaming_static) zu kompilieren.

Das `wasm-unsafe-eval`-Schlüsselwort kann verwendet werden, um diesen Schutz aufzuheben. Dies ist eine viel sicherere Alternative zu `'unsafe-eval'`, da es keine allgemeine Auswertung von JavaScript ermöglicht.

### 'unsafe-inline'

Standardmäßig, wenn eine CSP `default-src` oder eine `script-src`-Richtlinie enthält, wird Inline-JavaScript nicht zur Ausführung zugelassen. Dies schließt ein:

- Inline-`<script>`-Tags
- Inline-Event-Handler-Attribute
- `javascript:` URLs.

Ähnlich, wenn eine CSP `default-src` oder eine `style-src`-Richtlinie enthält, wird Inline-CSS nicht geladen, einschließlich:

- Inline-`<style>`-Tags
- [`style`](/de/docs/Web/API/HTMLElement/style)-Attribute.

Das `unsafe-inline`-Schlüsselwort kann verwendet werden, um diesen Schutz aufzuheben und all diese Formen zuzulassen.

> [!WARNING]
> Entwickler sollten `'unsafe-inline'` vermeiden, da es den Zweck einer CSP weitgehend untergräbt.

Siehe [Inline-JavaScript](/de/docs/Web/HTTP/Guides/CSP#inline_javascript) im CSP-Leitfaden für weitere Anwendungsinformationen.

### 'unsafe-hashes'

Standardmäßig, wenn eine CSP `default-src` oder eine `script-src`-Richtlinie enthält, werden Inline-Ereignishandlerattribute wie `onclick` und Inline-`style`-Attribute nicht zur Ausführung zugelassen.

Der Ausdruck `'unsafe-hashes'` erlaubt es dem Browser, [hash expressions](#hash_algorithm-hash_value) für Inline-Ereignishandler und `style`-Attribute zu verwenden. Zum Beispiel könnte eine CSP eine Richtlinie enthalten wie diese:

```http
script-src 'unsafe-hashes' 'sha256-cd9827ad...'
```

Wenn der Hash-Wert mit dem Hash-Wert eines Inline-Ereignishandlerattributs oder eines `style`-Attributswerts übereinstimmt, wird der Code zur Ausführung zugelassen.

> [!WARNING]
> Der Wert `'unsafe-hashes'` ist unsicher.
>
> Insbesondere ermöglicht er einen Angriff, bei dem der Inhalt des Inline-Ereignishandlerattributs in das Dokument als Inline-`<script>`-Element eingefügt wird. Nehmen wir an, der Inline-Event-Handler ist:
>
> ```html
> <button onclick="transferAllMyMoney()">Transfer all my money</button>
> ```
>
> Wenn ein Angreifer ein Inline-`<script>`-Element mit diesem Code injizieren kann, wird die CSP es erlauben, es automatisch auszuführen.
>
> Allerdings ist `'unsafe-hashes'` viel sicherer als `'unsafe-inline'`.

### 'inline-speculation-rules'

Standardmäßig, wenn eine CSP `default-src` oder eine `script-src`-Richtlinie enthält, wird Inline-JavaScript nicht zur Ausführung zugelassen. Die `'inline-speculation-rules'` erlaubt es dem Browser, Inline-`<script>`-Elemente zu laden, die ein [`type`](/de/docs/Web/HTML/Element/script/type)-Attribut von [`speculationrules`](/de/docs/Web/HTML/Element/script/type/speculationrules) haben.

Siehe die [Speculation Rules API](/de/docs/Web/API/Speculation_Rules_API) für weitere Informationen.

### 'strict-dynamic'

Das `'strict-dynamic'`-Schlüsselwort erweitert das Vertrauen, das auf ein Skript anhand eines [nonce](#nonce-nonce_value) oder eines [hash](#hash_algorithm-hash_value) gewährt wird, auf Skripte, die dieses Skript dynamisch lädt, zum Beispiel durch Erstellen neuer `<script>`-Tags mit [`Document.createElement()`](/de/docs/Web/API/Document/createElement) und anschließendes Einfügen in das Dokument mit [`Node.appendChild()`](/de/docs/Web/API/Node/appendChild).

Ist dieses Schlüsselwort in einer Richtlinie vorhanden, werden die folgenden source expression-Werte alle ignoriert:

- [\<host-source>](#host-source)
- [\<scheme-source>](#scheme-source)
- [`'self'`](#self)
- [`'unsafe-inline'`](#unsafe-inline)

Siehe [Das `strict-dynamic`-Schlüsselwort](/de/docs/Web/HTTP/Guides/CSP#the_strict-dynamic_keyword) im CSP-Leitfaden für weitere Anwendungsinformationen.

### 'report-sample'

Wenn dieser Ausdruck in einer Richtlinie zur Steuerung von Skripten oder Stilen enthalten ist und die Richtlinie den Browser dazu veranlasst, Inline-Skripte, Inline-Stile oder Event-Handler-Attribute zu blockieren, enthält der [Verletzungsbericht](/de/docs/Web/HTTP/Guides/CSP#violation_reporting), den der Browser generiert, eine [`sample`](/de/docs/Web/API/CSPViolationReportBody/sample)-Eigenschaft mit den ersten 40 Zeichen der blockierten Ressource.

## CSP in Workern

[Worker](/de/docs/Web/API/Worker) sind im Allgemeinen nicht von der Inhaltsrichtlinie des Dokuments (oder des übergeordneten Workers) geregelt, das sie erstellt hat. Um eine Inhaltsrichtlinie für den Worker festzulegen, setzen Sie einen `Content-Security-Policy`-Antwort-Header für die Anforderung, die das Worker-Skript selbst angefordert hat.

Die Ausnahme ist, wenn der Ursprung des Worker-Skripts ein global eindeutiger Bezeichner
ist (zum Beispiel, wenn seine URL ein Schema von data oder blob hat). In diesem Fall erbt der Worker die
Inhaltsrichtlinie des Dokuments oder Workers, der ihn erstellt hat.

## Mehrere Inhaltsrichtlinien

Der CSP-Mechanismus erlaubt, dass mehrere Richtlinien für eine Ressource angegeben werden, einschließlich
durch den `Content-Security-Policy`-Header, den
{{HTTPHeader("Content-Security-Policy-Report-Only")}}-Header und ein
{{HTMLElement("meta")}}-Element.

Sie können den `Content-Security-Policy`-Header mehrmals verwenden, wie im
Beispiel unten. Achten Sie besonders auf die {{CSP("connect-src")}}-Richtlinie hier. Auch
wenn die zweite Richtlinie die Verbindung zulassen würde, enthält die erste Richtlinie
`connect-src 'none'`. Das Hinzufügen zusätzlicher Richtlinien kann die
Fähigkeiten der geschützten Ressource nur weiter einschränken, was bedeutet, dass keine Verbindung
erlaubt wird und, als die strengste Richtlinie, `connect-src 'none'`
durchgesetzt wird.

```http
Content-Security-Policy: default-src 'self' http://example.com;
                          connect-src 'none';
Content-Security-Policy: connect-src http://example.com/;
                          script-src http://example.com/
```

## Beispiele

### Unsicherer Inline-Code deaktivieren und nur HTTPS-Ressourcen zulassen

Dieser HTTP-Header setzt die Standardrichtlinie so, dass das Laden von Ressourcen (Bilder, Schriftarten, Skripte usw.) nur über HTTPS zulässt. Da die `unsafe-inline` und `unsafe-eval`-Richtlinien nicht gesetzt sind, werden Inline-Skripte blockiert.

```http
Content-Security-Policy: default-src https:
```

Die gleichen Einschränkungen können auch mit dem HTML-{{htmlelement("meta")}}-Element angewendet werden.

```html
<meta http-equiv="Content-Security-Policy" content="default-src https:" />
```

### Inline-Code und HTTPS-Ressourcen zulassen, aber Plugins deaktivieren

Diese Richtlinie könnte auf einer vorhandenen Seite verwendet werden, die zu viel Inline-Code für eine Korrektur verwendet, um sicherzustellen, dass Ressourcen nur über HTTPS geladen werden und Plugins deaktiviert werden:

```http
Content-Security-Policy: default-src https: 'unsafe-eval' 'unsafe-inline'; object-src 'none'
```

### Verstöße melden, aber nicht durchsetzen beim Testen

Dieses Beispiel setzt die gleichen Einschränkungen wie das vorherige Beispiel, jedoch unter Verwendung des {{httpheader("Content-Security-Policy-Report-Only")}}-Headers und der {{CSP("report-to")}}-Richtlinie.
Dieser Ansatz wird während des Testens verwendet, um Verstöße zu berichten, aber den Code nicht am Ausführen zu hindern.

Endpunkte (URLs) zur Übermittlung von Berichten werden mit dem {{HTTPHeader("Reporting-Endpoints")}}-HTTP-Antwort-Header definiert.

```http
Reporting-Endpoints: csp-endpoint="https://example.com/csp-reports"
```

Ein bestimmter Endpunkt wird dann als Berichtsziele in der CSP-Richtlinie mit der {{CSP("report-to")}}-Richtlinie ausgewählt.

```http
Content-Security-Policy-Report-Only: default-src https:; report-uri /csp-violation-report-url/; report-to csp-endpoint
```

Beachten Sie, dass die {{CSP("report-uri")}} {{deprecated_inline}}-Richtlinie ebenfalls oben spezifiziert ist, weil `report-to` von Browsern noch nicht umfassend unterstützt wird.

Siehe [Content Security Policy (CSP) Implementierung](/de/docs/Web/Security/Practical_implementation_guides/CSP) für mehr Beispiele.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTTPHeader("Content-Security-Policy-Report-Only")}}
- [Erfahren Sie mehr über: Content Security Policy](/de/docs/Web/HTTP/Guides/CSP)
- [Inhaltssicherheit in WebExtensions](/de/docs/Mozilla/Add-ons/WebExtensions/Content_Security_Policy)
- [Adoptieren einer strikten Richtlinie](https://csp.withgoogle.com/docs/strict-csp.html)
- [CSP Evaluator](https://github.com/google/csp-evaluator) - Bewerten Sie Ihre
  Content Security Policy
