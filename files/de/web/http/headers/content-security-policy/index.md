---
title: Content-Security-Policy (CSP)
short-title: Content-Security-Policy
slug: Web/HTTP/Headers/Content-Security-Policy
l10n:
  sourceCommit: df9d06402163f77fc3e2d327ab63f9dd4af15b38
---

{{HTTPSidebar}}

Der HTTP-Header **`Content-Security-Policy`** ermöglicht es Website-Administratoren, die Ressourcen zu kontrollieren, die der Benutzeragent für eine gegebene Seite laden darf. Mit wenigen Ausnahmen beinhalten Richtlinien hauptsächlich die Angabe von Serverursprüngen und Skript-Endpunkten.
Dies hilft, {{Glossary("cross-site_scripting", "Cross-Site Scripting")}}-Angriffe zu verhindern.

Details zur Bereitstellung einer CSP im Browser, deren Aussehen sowie Anwendungsfälle und Einsatzstrategien finden Sie im [Content Security Policy (CSP)](/de/docs/Web/HTTP/CSP) Leitfaden.

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

## Richtlinien

### Fetch-Richtlinien

Fetch-Richtlinien kontrollieren die Orte, von denen bestimmte Ressourcentypen geladen werden dürfen.

- {{CSP("child-src")}}

  - : Definiert die gültigen Quellen für [Web Workers](/de/docs/Web/API/Web_Workers_API) und verschachtelte Browsing-Kontexte, die mit Elementen wie
    {{HTMLElement("frame")}} und {{HTMLElement("iframe")}} geladen wurden.

    [Fallback](#fallbacks) für `frame-src` und `worker-src`.

- {{CSP("connect-src")}}
  - : Beschränkt die URLs, die über Skript-Schnittstellen geladen werden können.
- {{CSP("default-src")}}

  - : Dient als Fallback für die anderen {{Glossary("Fetch_directive", "Fetch-Richtlinien")}}.

    [Fallback](#fallbacks) für alle anderen Fetch-Richtlinien.

- {{CSP("fenced-frame-src")}} {{experimental_inline}}
  - : Gibt gültige Quellen für verschachtelte Browsing-Kontexte an, die in {{HTMLElement("fencedframe")}}-Elemente geladen werden.
- {{CSP("font-src")}}
  - : Gibt gültige Quellen für Schriften an, die mit {{cssxref("@font-face")}} geladen werden.
- {{CSP("frame-src")}}
  - : Gibt gültige Quellen für verschachtelte Browsing-Kontexte an, die in Elemente wie
    {{HTMLElement("frame")}} und {{HTMLElement("iframe")}} geladen werden.
- {{CSP("img-src")}}
  - : Gibt gültige Quellen für Bilder und Favicons an.
- {{CSP("manifest-src")}}
  - : Gibt gültige Quellen für Anwendungsmanifest-Dateien an.
- {{CSP("media-src")}}
  - : Gibt gültige Quellen für das Laden von Medien mit den Elementen {{HTMLElement("audio")}},
    {{HTMLElement("video")}} und {{HTMLElement("track")}} an.
- {{CSP("object-src")}}
  - : Gibt gültige Quellen für die Elemente {{HTMLElement("object")}} und {{HTMLElement("embed")}} an.
- {{CSP("prefetch-src")}} {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Gibt gültige Quellen zum Vorababrufen oder Vorausladen an.
- {{CSP("script-src")}}

  - : Gibt gültige Quellen für JavaScript- und WebAssembly-Ressourcen an.

    [Fallback](#fallbacks) für `script-src-elem` und `script-src-attr`.

- {{CSP("script-src-elem")}}
  - : Gibt gültige Quellen für JavaScript {{HTMLElement("script")}}-Elemente an.
- {{CSP("script-src-attr")}}
  - : Gibt gültige Quellen für JavaScript-Inline-Ereignis-Handler an.
- {{CSP("style-src")}}

  - : Gibt gültige Quellen für Stylesheets an.

    [Fallback](#fallbacks) für `style-src-elem` und `style-src-attr`.

- {{CSP("style-src-elem")}}
  - : Gibt gültige Quellen für Stylesheets {{HTMLElement("style")}}-Elemente und
    {{HTMLElement("link")}}-Elemente mit `rel="stylesheet"` an.
- {{CSP("style-src-attr")}}
  - : Gibt gültige Quellen für Inline-Stile an, die auf individuelle DOM-Elemente angewendet werden.
- {{CSP("worker-src")}}
  - : Gibt gültige Quellen für [`Worker`](/de/docs/Web/API/Worker), [`SharedWorker`](/de/docs/Web/API/SharedWorker) oder
    [`ServiceWorker`](/de/docs/Web/API/ServiceWorker) Skripte an.

Alle Fetch-Richtlinien können den einzigen Wert `'none'` enthalten, was angibt, dass der spezifische Ressourcentyp vollständig blockiert werden soll, oder als ein oder mehrere _Quell-Ausdruck_-Werte, die gültige Quellen für diesen Ressourcentyp angeben. Siehe [Fetch-Richtlinien-Syntax](#fetch-richtlinien-syntax) für weitere Details.

#### Fallbacks

Einige Fetch-Richtlinien fungieren als Fallbacks für andere, detailliertere Richtlinien. Das bedeutet, dass wenn die detailliertere Richtlinie nicht angegeben ist, der Fallback verwendet wird, um eine Richtlinie für diesen Ressourcentyp bereitzustellen.

- `default-src` ist ein Fallback für alle anderen Fetch-Richtlinien.
- `script-src` ist ein Fallback für `script-src-attr` und `script-src-elem`.
- `style-src` ist ein Fallback für `style-src-attr` und `style-src-elem`.
- `child-src` ist ein Fallback für `frame-src` und `worker-src`.

Beispielsweise:

- Wenn `img-src` ausgelassen, aber `default-src` eingeschlossen wird, dann wird die Richtlinie von `default-src` auf Bilder angewendet.
- Wenn `script-src-elem` ausgelassen, aber `script-src` eingeschlossen wird, dann wird die Richtlinie von `script-src` auf `<script>`-Elemente angewendet.
- Wenn `script-src-elem` und `script-src` beide ausgelassen werden, aber `default-src` eingeschlossen ist, dann wird die Richtlinie von `default-src` auf `<script>`-Elemente angewendet.

### Dokument-Richtlinien

Dokument-Richtlinien regeln die Eigenschaften eines Dokuments oder [Worker](/de/docs/Web/API/Web_Workers_API) Umgebung, auf die eine Richtlinie
anzuwenden ist.

- {{CSP("base-uri")}}
  - : Beschränkt die URLs, die im {{HTMLElement("base")}}-Element eines Dokuments verwendet werden können.
- {{CSP("sandbox")}}
  - : Ermöglicht eine Sandbox für die angeforderte Ressource, ähnlich dem
    {{HTMLElement("iframe")}} [`sandbox`](/de/docs/Web/HTML/Element/iframe#sandbox) Attribut.

### Navigations-Richtlinien

Navigations-Richtlinien regeln, zu welchen Orten ein Benutzer navigieren oder ein Formular absenden kann,
zum Beispiel.

- {{CSP("form-action")}}
  - : Beschränkt die URLs, die als Ziel von Formularübermittlungen aus einem
    gegebenen Kontext verwendet werden können.
- {{CSP("frame-ancestors")}}
  - : Gibt gültige Eltern an, die eine Seite mit {{HTMLElement("frame")}},
    {{HTMLElement("iframe")}}, {{HTMLElement("object")}}, oder {{HTMLElement("embed")}} einbetten dürfen.

### Bericht-Richtlinien

Bericht-Richtlinien steuern die Ziel-URL für CSP-Verletzungsberichte in `Content-Security-Policy` und {{HTTPHeader("Content-Security-Policy-Report-Only")}}.

- {{CSP("report-to")}}

  - : Gibt dem Browser ein Token, das den Berichtsendpunkt oder eine Gruppe von Endpunkten identifiziert, an die Informationen über CSP-Verletzungen gesendet werden sollen.
    Die Endpunkte, die das Token repräsentiert, werden über andere HTTP-Header bereitgestellt, wie {{HTTPHeader("Reporting-Endpoints")}} und {{HTTPHeader("Report-To")}} {{deprecated_inline}}.

    > [!WARNING]
    > Diese Direktive soll [`report-uri`](#report-uri) ersetzen; in Browsern, die `report-to` unterstützen, wird die `report-uri`-Direktive ignoriert.
    > Bis `report-to` jedoch umfassend unterstützt wird, sollten Sie beide Header wie gezeigt angeben (wobei `endpoint_name` der Name eines separat bereitgestellten Endpunkts ist):
    >
    > ```http
    > Content-Security-Policy: …; report-uri https://endpoint.example.com; report-to endpoint_name
    > ```

### Andere Richtlinien

- {{CSP("require-trusted-types-for")}} {{experimental_inline}}
  - : Erzwingt [Trusted Types](/de/docs/Web/API/Trusted_Types_API) an den DOM XSS-Injektionspunkten.
- {{CSP("trusted-types")}} {{experimental_inline}}
  - : Wird verwendet, um eine Positivliste von [Trusted Types](/de/docs/Web/API/Trusted_Types_API)-Richtlinien anzugeben.
    Trusted Types ermöglicht es Anwendungen, DOM XSS-Injektionspunkte so zu sperren, dass nur nicht fälschbare, typisierte Werte anstelle von Strings akzeptiert werden.
- {{CSP("upgrade-insecure-requests")}}
  - : Weist Benutzeragenten an, alle unsicheren URLs einer Site (die über HTTP bereitgestellt werden) so zu behandeln, als wären sie durch sichere URLs (die über HTTPS bereitgestellt werden) ersetzt worden.
    Diese Richtlinie ist für Websites vorgesehen, die eine große Anzahl unsicherer veralteter URLs haben, die umgeschrieben werden müssen.

### Veraltete Richtlinien

- {{CSP("block-all-mixed-content")}} {{deprecated_inline}}

  - : Verhindert das Laden von Assets über HTTP, wenn die Seite über HTTPS geladen wird.

- {{CSP("report-uri")}} {{deprecated_inline}}
  - : Gibt dem Browser eine URL, an die CSP-Verletzungsberichte gesendet werden sollen.
    Dies wurde durch die [`report-to`](#report-to)-Richtlinie abgelöst.

## Fetch-Richtlinien-Syntax

Alle Fetch-Richtlinien können als einer der folgenden Werte angegeben werden:

- Der Einzelwert `'none'`, der angibt, dass der spezifische Ressourcentyp vollständig blockiert werden soll
- Ein oder mehrere _Quell-Ausdruck_ Werte, die gültige Quellen für diesen Ressourcentyp angeben.

Jeder Quell-Ausdruck nimmt eine der unten aufgeführten Formen an. Beachten Sie, dass nicht alle Formen für alle Fetch-Richtlinien anwendbar sind: Sehen Sie in der Dokumentation zu jeder Fetch-Richtlinie nach, welche Formen anwendbar sind.

Die Formate `<host-source>` und `<scheme-source>` müssen ohne Anführungszeichen angegeben werden, und alle anderen Formate müssen in einfache Anführungszeichen eingeschlossen sein.

### 'nonce-\<nonce_value>'

Dieser Wert besteht aus dem String `nonce-`, gefolgt von einem {{Glossary("Base64", "base64-kodierten")}} String. Dieser String ist ein zufälliger Wert, den der Server für jede HTTP-Antwort generiert. Zum Beispiel:

```plain
'nonce-416d1177-4d12-4e3b-b7c9-f6c409789fb8'
```

Der Server kann dann denselben Wert als Wert des `nonce`-Attributs für alle {{htmlelement("script")}}- oder {{htmlelement("style")}}-Ressourcen einfügen, die sie aus dem Dokument laden möchten.

Der Browser vergleicht den Wert aus der CSP-Direktive mit dem Wert im Elementattribut und lädt die Ressource nur, wenn sie übereinstimmen.

Wenn eine Direktive eine Nonce und `unsafe-inline` enthält, ignoriert der Browser `unsafe-inline`.

Siehe [Nonces](/de/docs/Web/HTTP/CSP#nonces) im CSP-Leitfaden für weitere Informationen zur Nutzung.

> [!NOTE]
> Nonce-Quell-Ausdrücke sind nur auf {{htmlelement("script")}}- und {{htmlelement("style")}}-Elemente anwendbar.

### '\<hash_algorithm>-<hash_value>'

Dieser Wert besteht aus einem String, der einen Hash-Algorithmus identifiziert, gefolgt von `-`, gefolgt von einem {{Glossary("Base64", "base64-kodierten")}} String, der den Hash-Wert darstellt.

- Der Hash-Algorithmus-Bezeichner muss einer der folgenden sein: `sha256`, `sha384` oder `sha512`.
- Der Hash-Wert ist der base64-kodierte {{Glossary("Cryptographic_hash_function", "Hash")}} einer `<script>`- oder `<style>`-Ressource, berechnet mit einer der folgenden Hash-Funktionen: SHA-256, SHA-384 oder SHA-512.

Zum Beispiel:

```plain
'sha256-cd9827ad...'
```

Wenn der Browser das Dokument erhält, hasht er den Inhalt jeglicher `<script>`- und `<style>`-Elemente, vergleicht das Ergebnis mit den Hashs in der CSP-Direktive und lädt die Ressource nur, wenn es eine Übereinstimmung gibt.

Wenn das Element eine externe Ressource lädt (zum Beispiel mit dem [`src`](/de/docs/Web/HTML/Element/script#src) Attribut), muss das Element auch das [`integrity`](/de/docs/Web/HTML/Element/script#integrity) Attribut gesetzt haben.

Wenn eine Direktive einen Hash und `unsafe-inline` enthält, ignoriert der Browser `unsafe-inline`.

Siehe [Hashes](/de/docs/Web/HTTP/CSP#hashes) im CSP-Leitfaden für weitere Informationen zur Nutzung.

> [!NOTE]
> Hash-Quell-Ausdrücke sind nur auf {{htmlelement("script")}}- und {{htmlelement("style")}}-Elemente anwendbar.

### \<host-source>

Die [URL](/de/docs/Web/URI) oder IP-Adresse eines {{Glossary("host", "Hosts")}}, der eine gültige Quelle für die Ressource ist.

Das Schema, die Portnummer und der Pfad sind optional.

Wenn das Schema weggelassen wird, wird das Schema des Ursprungs des Dokuments verwendet.

Beim Vergleichen von Schemata sind sichere Upgrades erlaubt. Zum Beispiel:

- `http://example.com` erlaubt auch Ressourcen von `https://example.com`
- `ws://example.org` erlaubt auch Ressourcen von `wss://example.org`.

Platzhalter (`'*'`) können für Subdomains, Hostadressen und Portnummern verwendet werden, was bedeutet, dass alle legalen Werte von jedem gültig sind. Zum Beispiel:

- `http://*.example.com` erlaubt Ressourcen von jeder Subdomain von `example.com`, über HTTP oder HTTPS.

Pfade, die mit `/` enden, passen auf alle Pfade, deren Präfix sie sind. Zum Beispiel:

- `example.com/api/` erlaubt Ressourcen von `example.com/api/users/new`.

Pfade, die nicht mit `/` enden, werden exakt abgeglichen. Zum Beispiel:

- `https://example.com/file.js` erlaubt Ressourcen von `https://example.com/file.js` aber nicht `https://example.com/file.js/file2.js`.

### \<scheme-source>

Ein [Schema](/de/docs/Web/URI/Schemes), wie z. B. `https:`. Der Doppelpunkt ist erforderlich.

Sichere Upgrades sind erlaubt, daher:

- `http:` erlaubt auch Ressourcen, die über HTTPS geladen werden
- `ws:` erlaubt auch Ressourcen, die über WSS geladen werden.

### 'self'

Ressourcen des gegebenen Typs dürfen nur aus demselben {{Glossary("origin", "Ursprung")}} wie das Dokument geladen werden.

Sichere Upgrades sind erlaubt. Zum Beispiel:

- Wenn das Dokument von `http://example.com` bereitgestellt wird, erlaubt ein CSP von `'self'` auch Ressourcen von `https://example.com`.
- Wenn das Dokument von `ws://example.org` bereitgestellt wird, erlaubt ein CSP von `'self'` auch Ressourcen von `wss://example.org`.

### 'unsafe-eval'

Standardmäßig, wenn eine CSP eine `default-src`- oder `script-src`-Richtlinie enthält, sind JavaScript-Funktionen, die ihre Argumente als JavaScript auswerten, deaktiviert. Dazu gehören [`eval()`](/de/docs/Web/JavaScript/Reference/Global_Objects/eval), das [`code`](/de/docs/Web/API/Window/setTimeout#code) Argument zu [`setTimeout()`](/de/docs/Web/API/Window/setTimeout) oder der {{jsxref("Function/Function()", "Function()")}} Konstruktor.

Das Schlüsselwort `unsafe-eval` kann verwendet werden, um diesen Schutz aufzuheben und die dynamische Auswertung von Strings als JavaScript zuzulassen.

> [!WARNING]
> Entwickler sollten `'unsafe-eval'` vermeiden, da es den Zweck einer CSP weitgehend zunichte macht.

Siehe [`eval()` und ähnliche APIs](/de/docs/Web/HTTP/CSP#eval_and_similar_apis) im CSP-Leitfaden für mehr Informationen zur Nutzung.

### 'wasm-unsafe-eval'

Standardmäßig, wenn eine CSP eine `default-src`- oder `script-src`-Richtlinie enthält, wird eine Seite nicht erlaubt, WebAssembly zu kompilieren, indem Funktionen wie [`WebAssembly.compileStreaming()`](/de/docs/WebAssembly/Reference/JavaScript_interface/compileStreaming_static) verwenden werden.

Das Schlüsselwort `wasm-unsafe-eval` kann verwendet werden, um diesen Schutz aufzuheben. Dies ist eine viel sicherere Alternative zu `'unsafe-eval'`, da es keine allgemeine Auswertung von JavaScript ermöglicht.

### 'unsafe-inline'

Standardmäßig, wenn eine CSP eine `default-src`- oder `script-src`-Richtlinie enthält, darf kein Inline-JavaScript ausgeführt werden. Dazu gehören:

- Inline-`<script>`-Tags
- Inline-Ereignis-Handler-Attribute
- `javascript:`-URLs.

Ebenso, wenn eine CSP `default-src` oder eine `style-src`-Richtlinie enthält, wird kein Inline-CSS geladen, einschließlich:

- Inline-`<style>`-Tags
- [`style`](/de/docs/Web/API/HTMLElement/style) Attribute.

Das Schlüsselwort `unsafe-inline` kann verwendet werden, um diesen Schutz aufzuheben und alle diese Formen zuzulassen.

> [!WARNING]
> Entwickler sollten `'unsafe-inline'` vermeiden, da es den Zweck einer CSP weitgehend zunichte macht.

Siehe [Inline-JavaScript](/de/docs/Web/HTTP/CSP#inline_javascript) im CSP-Leitfaden für mehr Informationen zur Nutzung.

### 'unsafe-hashes'

Standardmäßig, wenn eine CSP eine `default-src`- oder eine `script-src`-Richtlinie enthält, dürfen Inline-Ereignis-Handler-Attribute wie `onclick` und Inline-`style`-Attribute nicht ausgeführt werden.

Der Ausdruck `'unsafe-hashes'` erlaubt es dem Browser, [Hash-Ausdrücke](#hash_algorithm-hash_value) für Inline-Ereignis-Handler- und `style`-Attribute zu verwenden. Zum Beispiel könnte eine CSP eine Richtlinie wie diese enthalten:

```http
script-src 'unsafe-hashes' 'sha256-cd9827ad...'
```

Wenn der Hash-Wert mit dem Hash eines Inline-Ereignis-Handler-Attributwerts oder eines `style`-Attributwerts übereinstimmt, wird der Code zur Ausführung zugelassen.

> [!WARNING]
> Der Wert `'unsafe-hashes'` ist unsicher.
>
> Insbesondere ermöglicht er einen Angriff, bei dem der Inhalt des Inline-Ereignis-Handler-Attributs als Inline-`<script>`-Element in das Dokument injiziert wird. Angenommen, der Inline-Ereignis-Handler ist:
>
> ```html
> <button onclick="transferAllMyMoney()">Transfer all my money</button>
> ```
>
> Wenn ein Angreifer ein Inline-`<script>`-Element mit diesem Code injizieren kann, wird die CSP es automatisch zur Ausführung zulassen.
>
> Allerdings ist `'unsafe-hashes'` viel sicherer als `'unsafe-inline'`.

### 'inline-speculation-rules'

Standardmäßig, wenn eine CSP eine `default-src`- oder `script-src`-Richtlinie enthält, darf kein Inline-JavaScript ausgeführt werden. Mit `'inline-speculation-rules'` kann der Browser Inline-`<script>`-Elemente laden, die ein [`type`](/de/docs/Web/HTML/Element/script/type) Attribut von [`speculationrules`](/de/docs/Web/HTML/Element/script/type/speculationrules) haben.

Weitere Informationen finden Sie in der [Speculation Rules API](/de/docs/Web/API/Speculation_Rules_API).

### 'strict-dynamic'

Das Schlüsselwort `'strict-dynamic'` erweitert das Vertrauen, das ein Skript durch eine [Nonce](#nonce-nonce_value) oder einen [Hash](#hash_algorithm-hash_value) erhält, auf Skripte, die dieses Skript dynamisch lädt, beispielsweise durch Erstellen neuer `<script>`-Tags mit [`Document.createElement()`](/de/docs/Web/API/Document/createElement) und anschließendes Einfügen in das Dokument mit [`Node.appendChild()`](/de/docs/Web/API/Node/appendChild).

Wenn dieses Schlüsselwort in einer Richtlinie vorhanden ist, werden die folgenden Quell-Ausdruck-Werte alle ignoriert:

- [\<host-source>](#host-source)
- [\<scheme-source>](#scheme-source)
- [`'self'`](#self)
- [`'unsafe-inline'`](#unsafe-inline)

Siehe [Das Schlüsselwort `strict-dynamic`](/de/docs/Web/HTTP/CSP#the_strict-dynamic_keyword) im CSP-Leitfaden für mehr Informationen zur Nutzung.

### 'report-sample'

Wenn dieser Ausdruck in einer Richtlinie enthalten ist, die Skripte oder Stile steuert, und die Richtlinie den Browser dazu bringt, Inline-Skripte, Inline-Stile oder Ereignis-Handler-Attribute zu blockieren, dann enthält der [Verletzungsbericht](/de/docs/Web/HTTP/CSP#violation_reporting), den der Browser generiert, eine [`sample`](/de/docs/Web/API/CSPViolationReportBody/sample) Eigenschaft mit den ersten 40 Zeichen der blockierten Ressource.

## CSP in Workern

[Worker](/de/docs/Web/API/Worker) unterliegen im Allgemeinen _nicht_ der Content-Sicherheitsrichtlinie des Dokuments (oder Hauptworkerns), das sie erstellt hat. Um eine Content-Sicherheitsrichtlinie für den Worker festzulegen, setzen Sie einen
`Content-Security-Policy` Antwort-Header für die Anfrage, die das Workerskript selbst angefordert hat.

Die Ausnahme ist, wenn der Ursprung des Workerskripts ein weltweit eindeutiger Bezeichner ist
(zum Beispiel, wenn seine URL ein Schema von Daten oder Blob hat). In diesem Fall erbt der Worker die Content-Sicherheitsrichtlinie des Dokuments oder Workers, das ihn erstellt hat.

## Mehrere Content-Sicherheitsrichtlinien

Der CSP-Mechanismus ermöglicht es, mehrere Richtlinien für eine Ressource anzugeben, einschließlich
über den `Content-Security-Policy`-Header, den
{{HTTPHeader("Content-Security-Policy-Report-Only")}}-Header und ein
{{HTMLElement("meta")}}-Element.

Sie können den `Content-Security-Policy`-Header mehr als einmal verwenden, wie im folgenden
Beispiel gezeigt. Achten Sie besonders auf die {{CSP("connect-src")}}-Richtlinie hier. Auch wenn die zweite Richtlinie die Verbindung erlauben würde, enthält die erste Richtlinie
`connect-src 'none'`. Das Hinzufügen zusätzlicher Richtlinien _kann nur weiter
einschränken_ die Fähigkeiten der geschützten Ressource, was bedeutet, dass keine Verbindung erlaubt ist und, da die strengste Richtlinie, `connect-src 'none'`
durchgesetzt wird.

```http
Content-Security-Policy: default-src 'self' http://example.com;
                          connect-src 'none';
Content-Security-Policy: connect-src http://example.com/;
                          script-src http://example.com/
```

## Beispiele

### Unsicheres Inline-Code deaktivieren und nur HTTPS-Ressourcen zulassen

Dieser HTTP-Header setzt die Standardrichtlinie, Ressourcen (Bilder, Schriftarten, Skripte usw.) nur über HTTPS zu laden.
Da die `unsafe-inline` und `unsafe-eval` Direktiven nicht gesetzt sind, werden Inline-Skripte blockiert.

```http
Content-Security-Policy: default-src https:
```

Die gleichen Einschränkungen können unter Verwendung des HTML {{htmlelement("meta")}}-Elements angewendet werden.

```html
<meta http-equiv="Content-Security-Policy" content="default-src https:" />
```

### Inline-Code und HTTPS-Ressourcen zulassen, aber Plugins deaktivieren

Diese Richtlinie könnte auf einer bestehenden Website verwendet werden, die zu viel Inline-Code verwendet, um umgearbeitet zu werden, um sicherzustellen, dass Ressourcen nur über HTTPS geladen werden und Plugins deaktiviert werden:

```http
Content-Security-Policy: default-src https: 'unsafe-eval' 'unsafe-inline'; object-src 'none'
```

### Verstöße melden, aber nicht erzwingen während des Testens

Dieses Beispiel setzt die gleichen Einschränkungen wie das vorherige Beispiel, verwendet jedoch den {{httpheader("Content-Security-Policy-Report-Only")}}-Header und die {{CSP("report-to")}}-Direktive.
Dieser Ansatz wird während des Testens verwendet, um Verstöße zu melden, aber den Code nicht zu blockieren.

Endpunkte (URLs), an die Berichte gesendet werden, werden mit dem {{HTTPHeader("Reporting-Endpoints")}} HTTP-Antwort-Header definiert.

```http
Reporting-Endpoints: csp-endpoint="https://example.com/csp-reports"
```

Ein bestimmter Endpunkt wird dann als Berichtsziel in der CSP-Richtlinie unter Verwendung der {{CSP("report-to")}}-Direktive ausgewählt.

```http
Content-Security-Policy-Report-Only: default-src https:; report-uri /csp-violation-report-url/; report-to csp-endpoint
```

Beachten Sie, dass die {{CSP("report-uri")}} {{deprecated_inline}}-Direktive oben ebenfalls angegeben ist, da `report-to` von Browsern noch nicht umfassend unterstützt wird.

Siehe [Content Security Policy (CSP) Implementierung](/de/docs/Web/Security/Practical_implementation_guides/CSP) für weitere Beispiele.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTTPHeader("Content-Security-Policy-Report-Only")}}
- [Lernen Sie über: Content Security Policy](/de/docs/Web/HTTP/CSP)
- [Content Security in WebExtensions](/de/docs/Mozilla/Add-ons/WebExtensions/Content_Security_Policy)
- [Annahme einer strengen Richtlinie](https://csp.withgoogle.com/docs/strict-csp.html)
- [CSP Evaluator](https://github.com/google/csp-evaluator) - Bewerten Sie Ihre
  Content-Sicherheitsrichtlinie
