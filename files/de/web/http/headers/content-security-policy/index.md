---
title: Content-Security-Policy (CSP)
short-title: Content-Security-Policy
slug: Web/HTTP/Headers/Content-Security-Policy
l10n:
  sourceCommit: 232dc9186a6d79d7e12b3000999ad026d63e995e
---

{{HTTPSidebar}}

Der HTTP **`Content-Security-Policy`** Antwort-Header ermöglicht Website-Administratoren die Kontrolle darüber, welche Ressourcen der Benutzeragent für eine bestimmte Seite laden darf. Mit wenigen Ausnahmen beinhalten Richtlinien meist die Spezifikation von Server-Ursprüngen und Skript-Endpunkten.
Dies hilft, {{Glossary("cross-site_scripting", "Cross-Site Scripting")}} Angriffe zu verhindern.

Sehen Sie sich den [Content Security Policy (CSP)](/de/docs/Web/HTTP/CSP) Leitfaden an, um Details darüber zu erfahren, wie eine CSP an den Browser übermittelt wird, wie sie aussieht sowie Anwendungsfälle und Bereitstellungsstrategien.

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

### Fetch-Direktiven

Fetch-Direktiven kontrollieren die Orte, von denen bestimmte Ressourcentypen geladen werden dürfen.

- {{CSP("child-src")}}

  - : Definiert die gültigen Quellen für [Web Worker](/de/docs/Web/API/Web_Workers_API) und verschachtelte Browsing-Kontexte, die mit Elementen wie {{HTMLElement("frame")}} und {{HTMLElement("iframe")}} geladen werden.

    [Fallback](#fallbacks) für `frame-src` und `worker-src`.

- {{CSP("connect-src")}}
  - : Beschränkt die URLs, die mit Skript-Schnittstellen geladen werden können.
- {{CSP("default-src")}}

  - : Dient als Fallback für die anderen {{Glossary("Fetch_directive", "Fetch-Direktiven")}}.

    [Fallback](#fallbacks) für alle anderen Fetch-Direktiven.

- {{CSP("fenced-frame-src")}} {{experimental_inline}}
  - : Gibt gültige Quellen für verschachtelte Browsing-Kontexte an, die in {{HTMLElement("fencedframe")}}-Elementen geladen werden.
- {{CSP("font-src")}}
  - : Gibt gültige Quellen für Schriften an, die mit {{cssxref("@font-face")}} geladen werden.
- {{CSP("frame-src")}}
  - : Gibt gültige Quellen für verschachtelte Browsing-Kontexte an, die in Elementen wie {{HTMLElement("frame")}} und {{HTMLElement("iframe")}} geladen werden.
- {{CSP("img-src")}}
  - : Gibt gültige Quellen für Bilder und Favicons an.
- {{CSP("manifest-src")}}
  - : Gibt gültige Quellen für Anwendungsmanifestdateien an.
- {{CSP("media-src")}}
  - : Gibt gültige Quellen für das Laden von Medien mit den Elementen {{HTMLElement("audio")}}, {{HTMLElement("video")}} und {{HTMLElement("track")}} an.
- {{CSP("object-src")}}
  - : Gibt gültige Quellen für die Elemente {{HTMLElement("object")}} und {{HTMLElement("embed")}} an.
- {{CSP("prefetch-src")}} {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Gibt gültige Quellen an, die vorgeladen oder vorgerendert werden sollen.
- {{CSP("script-src")}}

  - : Gibt gültige Quellen für JavaScript- und WebAssembly-Ressourcen an.

    [Fallback](#fallbacks) für `script-src-elem` und `script-src-attr`.

- {{CSP("script-src-elem")}}
  - : Gibt gültige Quellen für JavaScript-{{HTMLElement("script")}}-Elemente an.
- {{CSP("script-src-attr")}}
  - : Gibt gültige Quellen für JavaScript-Inline-Event-Handler an.
- {{CSP("style-src")}}

  - : Gibt gültige Quellen für Stylesheets an.

    [Fallback](#fallbacks) für `style-src-elem` und `style-src-attr`.

- {{CSP("style-src-elem")}}
  - : Gibt gültige Quellen für Stylesheets-{{HTMLElement("style")}}-Elemente und {{HTMLElement("link")}}-Elemente mit `rel="stylesheet"` an.
- {{CSP("style-src-attr")}}
  - : Gibt gültige Quellen für Inline-Stile an, die auf einzelne DOM-Elemente angewendet werden.
- {{CSP("worker-src")}}
  - : Gibt gültige Quellen für [`Worker`](/de/docs/Web/API/Worker), [`SharedWorker`](/de/docs/Web/API/SharedWorker) oder [`ServiceWorker`](/de/docs/Web/API/ServiceWorker)-Skripte an.

Alle Fetch-Direktiven können mit dem einzelnen Wert `'none'` spezifiziert werden, was bedeutet, dass der spezifische Ressourcentyp vollständig blockiert werden sollte, oder als ein oder mehrere _source expression_ Werte, die gültige Quellen für diesen Ressourcentyp angeben. Siehe [Fetch-Direktiven-Syntax](#fetch-direktiven-syntax) für weitere Details.

#### Fallbacks

Einige Fetch-Direktiven fungieren als Fallbacks für andere, granulärere Direktiven. Dies bedeutet, dass, wenn die granulärere Direktive nicht spezifiziert ist, der Fallback verwendet wird, um eine Richtlinie für diesen Ressourcentyp bereitzustellen.

- `default-src` ist ein Fallback für alle anderen Fetch-Direktiven.
- `script-src` ist ein Fallback für `script-src-attr` und `script-src-elem`.
- `style-src` ist ein Fallback für `style-src-attr` und `style-src-elem`.
- `child-src` ist ein Fallback für `frame-src` und `worker-src`.

Zum Beispiel:

- Wenn `img-src` ausgelassen wird, aber `default-src` enthalten ist, wird die Richtlinie, die durch `default-src` definiert wird, auf Bilder angewendet.
- Wenn `script-src-elem` ausgelassen wird, aber `script-src` enthalten ist, wird die Richtlinie, die durch `script-src` definiert wird, auf `<script>`-Elemente angewendet.
- Wenn sowohl `script-src-elem` als auch `script-src` ausgelassen werden, aber `default-src` enthalten ist, wird die Richtlinie, die durch `default-src` definiert wird, auf `<script>`-Elemente angewendet.

### Dokument-Direktiven

Dokument-Direktiven regeln die Eigenschaften eines Dokuments oder einer [worker](/de/docs/Web/API/Web_Workers_API)-Umgebung, auf die eine Richtlinie angewendet wird.

- {{CSP("base-uri")}}
  - : Beschränkt die URLs, die in einem Dokument{{HTMLElement("base")}}
    Element verwendet werden können.
- {{CSP("sandbox")}}
  - : Aktiviert eine Sandbox für die angeforderte Ressource, ähnlich dem Attribut [`sandbox`](/de/docs/Web/HTML/Element/iframe#sandbox) von {{HTMLElement("iframe")}}.

### Navigations-Direktiven

Navigations-Direktiven regeln, zu welchen Orten ein Benutzer navigieren oder ein Formular senden kann,
zum Beispiel.

- {{CSP("form-action")}}
  - : Beschränkt die URLs, die als Ziel eines Formularabsendungen von einem
    gegebenen Kontext verwendet werden können.
- {{CSP("frame-ancestors")}}
  - : Gibt gültige Eltern an, die eine Seite mit {{HTMLElement("frame")}},
    {{HTMLElement("iframe")}}, {{HTMLElement("object")}} oder {{HTMLElement("embed")}} einbetten dürfen.

### Berichts-Direktiven

Berichts-Direktiven kontrollieren die Ziel-URL für CSP-Verletzungsberichte in `Content-Security-Policy` und {{HTTPHeader("Content-Security-Policy-Report-Only")}}.

- {{CSP("report-to")}}

  - : Bietet dem Browser ein Token, das den Berichts-Endpunkt oder eine Gruppe von Endpunkten identifiziert, an die CSP-Verletzungsinformationen gesendet werden sollen.
    Die Endpunkte, die das Token repräsentiert, werden durch andere HTTP-Header bereitgestellt, wie z.B. {{HTTPHeader("Reporting-Endpoints")}} und {{HTTPHeader("Report-To")}} {{deprecated_inline}}.

    > [!WARNING]
    > Diese Direktive soll [`report-uri`](#report-uri) ersetzen; in Browsern, die `report-to` unterstützen, wird die `report-uri`-Direktive ignoriert.
    > Bis jedoch `report-to` breit unterstützt wird, sollten Sie beide Header angeben, wie gezeigt (wobei `endpoint_name` der Name eines separat bereitgestellten Endpunkts ist):
    >
    > ```http
    > Content-Security-Policy: …; report-uri https://endpoint.example.com; report-to endpoint_name
    > ```

### Andere Direktiven

- {{CSP("require-trusted-types-for")}} {{experimental_inline}}
  - : Erzwingt [Trusted Types](/de/docs/Web/API/Trusted_Types_API) an den DOM-XSS-Injektions-Punkten.
- {{CSP("trusted-types")}} {{experimental_inline}}
  - : Verwendet, um eine Whitelist von [Trusted Types](/de/docs/Web/API/Trusted_Types_API)-Richtlinien zu spezifizieren.
    Trusted Types ermöglichen es Anwendungen, DOM XSS Injektions-Punkte zu sperren, sodass nur nicht-manipulierbare, typisierte Werte anstelle von Zeichenfolgen akzeptiert werden.
- {{CSP("upgrade-insecure-requests")}}
  - : Weist Benutzeragenten an, alle unsicheren URLs einer Website (die über HTTP bereitgestellt werden) so zu behandeln, als wären sie durch sichere URLs (die über HTTPS bereitgestellt werden) ersetzt worden.
    Diese Direktive ist für Websites mit einer großen Anzahl unsicherer Legacy-URLs gedacht, die umgeschrieben werden müssen.

### Veraltete Direktiven

- {{CSP("block-all-mixed-content")}} {{deprecated_inline}}

  - : Verhindert das Laden von Ressourcen über HTTP, wenn die Seite über HTTPS geladen wird.

- {{CSP("report-uri")}} {{deprecated_inline}}
  - : Gibt dem Browser eine URL an, an die CSP-Verletzungsberichte gesendet werden sollen.
    Dies wurde durch die [`report-to`](#report-to)-Direktive ersetzt.

## Fetch-Direktiven-Syntax

Alle Fetch-Direktiven können auf eine der folgenden Arten angegeben werden:

- der einzelne Wert `'none'`, der besagt, dass der spezifische Ressourcentyp vollständig blockiert werden soll
- ein oder mehrere _source expression_ Werte, die gültige Quellen für diesen Ressourcentyp angeben.

Jede Quell-Ausdrucksform nimmt eine der unten aufgeführten Formen an. Beachten Sie, dass nicht alle Formen auf alle Fetch-Direktiven anwendbar sind: Siehe die Dokumentation für jede Fetch-Direktive, um herauszufinden, welche Formen darauf anwendbar sind.

Die Formate `<host-source>` und `<scheme-source>` müssen nicht in Anführungszeichen stehen, und alle anderen Formate müssen in einfache Anführungszeichen gesetzt werden.

### 'nonce-\<nonce_value>'

Dieser Wert besteht aus dem String `nonce-`, gefolgt von einem {{Glossary("Base64", "base64-kodierten")}} String. Dieser String ist ein zufälliger Wert, den der Server für jede HTTP-Antwort generiert. Zum Beispiel:

```plain
'nonce-416d1177-4d12-4e3b-b7c9-f6c409789fb8'
```

Der Server kann dann denselben Wert als Wert des `nonce`-Attributs von {{htmlelement("script")}} oder {{htmlelement("style")}} Ressourcen einfügen, die er aus dem Dokument laden möchte.

Der Browser vergleicht den Wert aus der CSP-Direktive mit dem Wert im Element-Attribut und lädt die Ressource nur, wenn sie übereinstimmen.

Wenn eine Direktive einen Nonce und `unsafe-inline` enthält, ignoriert der Browser `unsafe-inline`.

Siehe [Nonces](/de/docs/Web/HTTP/CSP#nonces) im CSP-Leitfaden für weitere Nutzungsinformationen.

> [!NOTE]
> Nonce-Quell-Ausdrücke sind nur für {{htmlelement("script")}} und {{htmlelement("style")}} Elemente anwendbar.

### '\<hash_algorithm>-<hash_value>'

Dieser Wert besteht aus einem String, der einen Hash-Algorithmus identifiziert, gefolgt von `-`, gefolgt von einem {{Glossary("Base64", "Base64-kodierten")}} String, der den Hash-Wert darstellt.

- Der Hash-Algorithmus-Identifikator muss entweder `sha256`, `sha384` oder `sha512` sein.
- Der Hash-Wert ist der Base64-kodierte {{Glossary("Cryptographic_hash_function", "Hash")}} einer `<script>` oder `<style>` Ressource, berechnet mit einer der folgenden Hash-Funktionen: SHA-256, SHA-384 oder SHA-512.

Zum Beispiel:

```plain
'sha256-cd9827ad...'
```

Wenn der Browser das Dokument erhält, hasht er den Inhalt aller `<script>` und `<style>` Elemente, vergleicht das Ergebnis mit allen Hashes in der CSP-Direktive und lädt die Ressource nur, wenn eine Übereinstimmung vorliegt.

Wenn das Element eine externe Ressource lädt (zum Beispiel mit dem [`src`](/de/docs/Web/HTML/Element/script#src) Attribut), muss das Element auch das [`integrity`](/de/docs/Web/HTML/Element/script#integrity) Attribut haben.

Wenn eine Direktive einen Hash und `unsafe-inline` enthält, ignoriert der Browser `unsafe-inline`.

Siehe [Hashes](/de/docs/Web/HTTP/CSP#hashes) im CSP-Leitfaden für weitere Nutzungsinformationen.

> [!NOTE]
> Hash-Quell-Ausdrücke sind nur für {{htmlelement("script")}} und {{htmlelement("style")}} Elemente anwendbar.

### \<host-source>

Die [URL](/de/docs/Web/URI) oder IP-Adresse eines {{Glossary("host", "Hosts")}}, der eine gültige Quelle für die Ressource ist.

Das Schema, die Portnummer und der Pfad sind optional.

Wenn das Schema weggelassen wird, wird das Schema des Ursprungs des Dokuments verwendet.

Beim Vergleich von Schemas sind sichere Upgrades erlaubt. Zum Beispiel:

- `http://example.com` erlaubt ebenfalls Ressourcen von `https://example.com`
- `ws://example.org` erlaubt ebenfalls Ressourcen von `wss://example.org`.

Platzhalter (`'*'`) können für Subdomains, Host-Adressen und Portnummern verwendet werden und geben an, dass alle legalen Werte von jedem gültig sind. Zum Beispiel:

- `http://*.example.com` erlaubt Ressourcen von allen Subdomains von `example.com`, über HTTP oder HTTPS.

Pfade, die mit `/` enden, stimmen mit jedem Pfad überein, dessen Präfix sie sind. Zum Beispiel:

- `example.com/api/` wird Ressourcen von `example.com/api/users/new` erlauben.

Pfade, die nicht mit `/` enden, werden genau verglichen. Zum Beispiel:

- `https://example.com/file.js` erlaubt Ressourcen von `https://example.com/file.js`, aber nicht von `https://example.com/file.js/file2.js`.

### \<scheme-source>

Ein [Schema](/de/docs/Web/URI/Schemes), wie `https:`. Der Doppelpunkt ist erforderlich.

Sichere Upgrades sind erlaubt, also:

- `http:` erlaubt ebenfalls Ressourcen, die unter HTTPS geladen werden
- `ws:` erlaubt ebenfalls Ressourcen, die unter WSS geladen werden.

### 'self'

Ressourcen des gegebenen Typs dürfen nur aus demselben {{Glossary("origin", "Ursprung")}} wie das Dokument geladen werden.

Sichere Upgrades sind erlaubt. Zum Beispiel:

- Wenn das Dokument von `http://example.com` ausgeliefert wird, erlaubt eine CSP von `'self'` ebenfalls Ressourcen von `https://example.com`.
- Wenn das Dokument von `ws://example.org` ausgeliefert wird, erlaubt eine CSP von `'self'` ebenfalls Ressourcen von `wss://example.org`.

### 'unsafe-eval'

Standardmäßig werden, wenn eine CSP eine `default-src` oder eine `script-src` Direktive enthält, JavaScript-Funktionen, die ihre Argumente als JavaScript auswerten, deaktiviert. Dies umfasst [`eval()`](/de/docs/Web/JavaScript/Reference/Global_Objects/eval), das [`code`](/de/docs/Web/API/Window/setTimeout#code) Argument zu [`setTimeout()`](/de/docs/Web/API/Window/setTimeout), oder den {{jsxref("Function/Function()", "Function()")}} Konstruktor.

Das `unsafe-eval` Schlüsselwort kann verwendet werden, um diesen Schutz aufzuheben, sodass die dynamische Auswertung von Strings als JavaScript ermöglicht wird.

> [!WARNING]
> Entwickler sollten `'unsafe-eval'` vermeiden, da es den Zweck einer CSP weitgehend zunichte macht.

Siehe [`eval()` und ähnliche APIs](/de/docs/Web/HTTP/CSP#eval_and_similar_apis) im CSP-Leitfaden für weitere Nutzungsinformationen.

### 'wasm-unsafe-eval'

Standardmäßig ist, wenn eine CSP eine `default-src` oder eine `script-src` Direktive enthält, eine Seite nicht erlaubt, WebAssembly unter Verwendung von Funktionen wie [`WebAssembly.compileStreaming()`](/de/docs/WebAssembly/JavaScript_interface/compileStreaming_static) zu kompilieren.

Das `wasm-unsafe-eval` Schlüsselwort kann verwendet werden, um diesen Schutz aufzuheben. Dies ist eine viel sicherere Alternative zu `'unsafe-eval'`, da es keine allgemeine Auswertung von JavaScript ermöglicht.

### 'unsafe-inline'

Standardmäßig ist, wenn eine CSP eine `default-src` oder eine `script-src` Direktive enthält, das Ausführen von Inline-JavaScript nicht erlaubt. Dies umfasst:

- Inline-`<script>`-Tags
- Inline-Event-Handler-Attribute
- `javascript:`-URLs.

Ähnlich, wenn eine CSP `default-src` oder eine `style-src` Direktive enthält, wird Inline-CSS nicht geladen, einschließlich:

- Inline-`<style>`-Tags
- [`style`](/de/docs/Web/API/HTMLElement/style) Attribute.

Das `unsafe-inline` Schlüsselwort kann verwendet werden, um diesen Schutz aufzuheben und all diese Formen zu laden.

> [!WARNING]
> Entwickler sollten `'unsafe-inline'` vermeiden, da es den Zweck einer CSP weitgehend zunichte macht.

Siehe [Inline-JavaScript](/de/docs/Web/HTTP/CSP#inline_javascript) im CSP-Leitfaden für weitere Nutzungsinformationen.

### 'unsafe-hashes'

Standardmäßig ist, wenn eine CSP eine `default-src` oder eine `script-src` Direktive enthält, das Ausführen von Inline-Event-Handler-Attributen wie `onclick` und Inline-`style`-Attributen nicht erlaubt.

Der `'unsafe-hashes'` Ausdruck erlaubt es dem Browser, [hash expressions](#hash_algorithm-hash_value) für Inline-Event-Handler und `style` Attribute zu verwenden. Beispielsweise könnte eine CSP eine Direktive wie diese enthalten:

```http
script-src 'unsafe-hashes' 'sha256-cd9827ad...'
```

Wenn der Hash-Wert mit dem Hash eines Inline-Event-Handler-Attributwerts oder eines `style`-Attributwerts übereinstimmt, wird der Code ausgeführt.

> [!WARNING]
> Der `'unsafe-hashes'` Wert ist unsicher.
>
> Insbesondere ermöglicht er einen Angriff, bei dem der Inhalt des Inline-Event-Handler-Attributs in das Dokument als Inline-`<script>`-Element injiziert wird. Nehmen wir an, der Inline-Event-Handler ist:
>
> ```html
> <button onclick="transferAllMyMoney()">Transfer all my money</button>
> ```
>
> Wenn ein Angreifer ein Inline-`<script>`-Element mit diesem Code injizieren kann, wird die CSP es automatisch ausführen lassen.
>
> Dennoch ist `'unsafe-hashes'` viel sicherer als `'unsafe-inline'`.

### 'inline-speculation-rules'

Standardmäßig ist, wenn eine CSP eine `default-src` oder eine `script-src` Direktive enthält, das Ausführen von Inline-JavaScript nicht erlaubt. Durch `'inline-speculation-rules'` kann der Browser Inline-`<script>`-Elemente laden, die ein [`type`](/de/docs/Web/HTML/Element/script/type) Attribut von [`speculationrules`](/de/docs/Web/HTML/Element/script/type/speculationrules) haben.

Siehe die [Speculation Rules API](/de/docs/Web/API/Speculation_Rules_API) für mehr Informationen.

### 'strict-dynamic'

Das `'strict-dynamic'` Schlüsselwort erweitert das Vertrauen, das von einem [nonce](#nonce-nonce_value) oder einem [hash](#hash_algorithm-hash_value) auf ein Skript übertragen wird, auf Skripte, die dieses Skript dynamisch lädt, z. B. durch Erstellen neuer `<script>`-Tags mit [`Document.createElement()`](/de/docs/Web/API/Document/createElement) und anschließendes Einfügen in das Dokument mit [`Node.appendChild()`](/de/docs/Web/API/Node/appendChild).

Wenn dieses Schlüsselwort in einer Direktive vorhanden ist, werden folgende Quell-Ausdruckswerte alle ignoriert:

- [\<host-source>](#host-source)
- [\<scheme-source>](#scheme-source)
- [`'self'`](#self)
- [`'unsafe-inline'`](#unsafe-inline)

Siehe [The `strict-dynamic` keyword](/de/docs/Web/HTTP/CSP#the_strict-dynamic_keyword) im CSP-Leitfaden für mehr Nutzungsinformationen.

### 'report-sample'

Wenn dieser Ausdruck in eine Direktive aufgenommen wird, die Skripte oder Stile steuert, und die Direktive den Browser dazu veranlasst, Inline-Skripte, Inline-Stile oder Event-Handler-Attribute zu blockieren, dann enthält der [Verletzungsbericht](/de/docs/Web/HTTP/CSP#violation_reporting) das der Browser generiert, eine [`sample`](/de/docs/Web/API/CSPViolationReportBody/sample) Eigenschaft, die die ersten 40 Zeichen der blockierten Ressource enthält.

## CSP in Arbeitern

[Worker](/de/docs/Web/API/Worker) werden im Allgemeinen _nicht_ durch die Inhalts-Sicherheitsrichtlinie des Dokuments (oder des übergeordneten Workers) gesteuert, das sie erstellt hat. Um eine Inhalts-Sicherheitsrichtlinie für den Worker zu spezifizieren, setzen Sie einen `Content-Security-Policy`-Antwort-Header für die Anfrage, die das Worker-Skript selbst angefordert hat.

Die Ausnahme hiervon ist, wenn der Ursprung des Worker-Skripts ein weltweit eindeutiger Bezeichner ist (zum Beispiel, wenn seine URL ein Schema von data oder blob hat). In diesem Fall erbt der Worker die Inhalts-Sicherheitsrichtlinie des Dokuments oder des Workers, der ihn erstellt hat.

## Mehrere Inhalts-Sicherheitsrichtlinien

Der CSP-Mechanismus ermöglicht es, mehrere Richtlinien für eine Ressource zu spezifizieren, einschließlich
über den `Content-Security-Policy`-Header, den {{HTTPHeader("Content-Security-Policy-Report-Only")}}-Header und ein {{HTMLElement("meta")}}-Element.

Sie können den `Content-Security-Policy`-Header mehr als einmal verwenden, wie im
nachstehenden Beispiel. Achten Sie besonders auf die {{CSP("connect-src")}}-Direktive hier. Auch wenn die zweite Richtlinie die Verbindung erlauben würde, enthält die erste Richtlinie
`connect-src 'none'`. Das Hinzufügen weiterer Richtlinien _kann nur weitere
Einschränkungen_ der Fähigkeiten der geschützten Ressource bewirken, was bedeutet, dass keine Verbindung erlaubt ist und, als die strengste Richtlinie, `connect-src 'none'`
durchgesetzt wird.

```http
Content-Security-Policy: default-src 'self' http://example.com;
                          connect-src 'none';
Content-Security-Policy: connect-src http://example.com/;
                          script-src http://example.com/
```

## Beispiele

### Unsicheren Inline-Code deaktivieren und nur HTTPS-Ressourcen zulassen

Dieser HTTP-Header setzt die Standardrichtlinie, um das Laden von Ressourcen (Bilder, Schriftarten, Skripte usw.) nur über HTTPS zuzulassen.
Da die Direktiven `unsafe-inline` und `unsafe-eval` nicht gesetzt sind, werden Inline-Skripte blockiert.

```http
Content-Security-Policy: default-src https:
```

Dieselben Einschränkungen können mithilfe des HTML-{{htmlelement("meta")}}-Elements angewendet werden.

```html
<meta http-equiv="Content-Security-Policy" content="default-src https:" />
```

### Inline-Code und HTTPS-Ressourcen zulassen, aber Plugins deaktivieren

Diese Richtlinie könnte auf einer bereits existierenden Website verwendet werden, die zu viel Inline-Code verwendet, um es zu beheben, um sicherzustellen, dass Ressourcen nur über HTTPS geladen werden und Plugins deaktiviert sind:

```http
Content-Security-Policy: default-src https: 'unsafe-eval' 'unsafe-inline'; object-src 'none'
```

### Verstöße beim Testen melden, aber nicht erzwingen

Dieses Beispiel legt dieselben Einschränkungen wie das vorherige Beispiel fest, jedoch unter Verwendung des {{httpheader("Content-Security-Policy-Report-Only")}} Headers und der {{CSP("report-to")}} Direktive.
Dieser Ansatz wird bei Tests verwendet, um Verstöße zu melden, aber den Code nicht am Ausführen zu hindern.

Endpunkte (URLs), an die Berichte gesendet werden, werden über den {{HTTPHeader("Reporting-Endpoints")}} HTTP-Antwort-Header definiert.

```http
Reporting-Endpoints: csp-endpoint="https://example.com/csp-reports"
```

Ein bestimmter Endpunkt wird dann in der CSP-Richtlinie mit der {{CSP("report-to")}} Direktive als Berichtsziel ausgewählt.

```http
Content-Security-Policy-Report-Only: default-src https:; report-uri /csp-violation-report-url/; report-to csp-endpoint
```

Beachten Sie, dass die {{CSP("report-uri")}} {{deprecated_inline}} Direktive ebenfalls oben angegeben ist, da `report-to` derzeit noch nicht weitgehend von Browsern unterstützt wird.

Siehe [Content Security Policy (CSP) Implementierung](/de/docs/Web/Security/Practical_implementation_guides/CSP) für weitere Beispiele.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTTPHeader("Content-Security-Policy-Report-Only")}}
- [Lernen Sie über: Content Security Policy](/de/docs/Web/HTTP/CSP)
- [Content Security in WebExtensions](/de/docs/Mozilla/Add-ons/WebExtensions/Content_Security_Policy)
- [Einführung einer strengen Richtlinie](https://csp.withgoogle.com/docs/strict-csp.html)
- [CSP Evaluator](https://github.com/google/csp-evaluator) - Evaluieren Sie Ihre Content-Security-Policy
