---
title: Content-Security-Policy (CSP)
short-title: Content-Security-Policy
slug: Web/HTTP/Reference/Headers/Content-Security-Policy
l10n:
  sourceCommit: 7159a4c0a2f1e886c09268c41c103c4ac7100d63
---

{{HTTPSidebar}}

Der HTTP **`Content-Security-Policy`** Antwort-Header ermöglicht es Website-Administratoren, zu kontrollieren, welche Ressourcen der Benutzeragent für eine gegebene Seite laden darf. Mit einigen Ausnahmen betreffen Richtlinien meist die Angabe von Serverursprüngen und Skript-Endpunkten. Dies hilft, {{Glossary("cross-site_scripting", "cross-site scripting")}} Angriffe zu verhindern.

Lesen Sie den [Content Security Policy (CSP)](/de/docs/Web/HTTP/Guides/CSP) Leitfaden für Details darüber, wie eine CSP an den Browser übermittelt wird, wie sie aussieht, sowie Anwendungsfälle und Implementierungsstrategien.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Headertyp</th>
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

wobei `<policy-directive>` aus `<directive> <value>` besteht, ohne interne Interpunktion.

## Direktiven

### Fetch-Direktiven

Fetch-Direktiven kontrollieren die Orte, von denen bestimmte Ressourcentypen geladen werden dürfen.

- {{CSP("child-src")}}

  - : Definiert die gültigen Quellen für [Web Worker](/de/docs/Web/API/Web_Workers_API) und verschachtelte Browser-Kontexte, die mit Elementen wie
    {{HTMLElement("frame")}} und {{HTMLElement("iframe")}} geladen werden.

    [Fallback](#fallbacks) für `frame-src` und `worker-src`.

- {{CSP("connect-src")}}
  - : Beschränkt die URLs, die über Skript-Schnittstellen geladen werden können.
- {{CSP("default-src")}}

  - : Dient als Fallback für die anderen {{Glossary("Fetch_directive", "Fetch-Direktiven")}}.

    [Fallback](#fallbacks) für alle anderen Fetch-Direktiven.

- {{CSP("fenced-frame-src")}} {{experimental_inline}}
  - : Gibt gültige Quellen für verschachtelte Browser-Kontexte an, die in {{HTMLElement("fencedframe")}}-Elementen geladen werden.
- {{CSP("font-src")}}
  - : Gibt gültige Quellen für über {{cssxref("@font-face")}} geladene Schriftarten an.
- {{CSP("frame-src")}}
  - : Gibt gültige Quellen für verschachtelte Browser-Kontexte an, die in Elementen wie
    {{HTMLElement("frame")}} und {{HTMLElement("iframe")}} geladen werden.
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
  - : Gibt gültige Quellen an, die vorgeladen oder vorgerendert werden sollen.
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
  - : Gibt gültige Quellen für Stylesheets {{HTMLElement("style")}}-Elemente und
    {{HTMLElement("link")}}-Elemente mit `rel="stylesheet"` an.
- {{CSP("style-src-attr")}}
  - : Gibt gültige Quellen für Inline-Stile an, die auf einzelne DOM-Elemente angewendet werden.
- {{CSP("worker-src")}}
  - : Gibt gültige Quellen für [`Worker`](/de/docs/Web/API/Worker), [`SharedWorker`](/de/docs/Web/API/SharedWorker), oder
    [`ServiceWorker`](/de/docs/Web/API/ServiceWorker) Skripte an.

Alle Fetch-Direktiven können mit dem Einzelwert `'none'` angegeben werden, was bedeutet, dass der spezifische Ressourcentyp vollständig blockiert werden soll, oder als ein oder mehrere _quellenbezogene Ausdruckswerte_, die gültige Quellen für diesen Ressourcentyp angeben. Weitere Details finden Sie unter [Fetch-Direktiv-Syntax](#fetch-direktiv-syntax).

#### Fallbacks

Einige Fetch-Direktiven fungieren als Fallbacks für andere, granularere Direktiven. Das bedeutet, wenn die feinere Direktive nicht angegeben ist, dann wird der Fallback verwendet, um eine Richtlinie für diesen Ressourcentyp bereitzustellen.

- `default-src` ist ein Fallback für alle anderen Fetch-Direktiven.
- `script-src` ist ein Fallback für `script-src-attr` und `script-src-elem`.
- `style-src` ist ein Fallback für `style-src-attr` und `style-src-elem`.
- `child-src` ist ein Fallback für `frame-src` und `worker-src`.

Beispielsweise:

- Wenn `img-src` weggelassen wird, aber `default-src` enthalten ist, wird die durch `default-src` definierte Richtlinie auf Bilder angewendet.
- Wenn `script-src-elem` weggelassen wird, aber `script-src` enthalten ist, wird die durch `script-src` definierte Richtlinie auf `<script>`-Elemente angewendet.
- Wenn sowohl `script-src-elem` als auch `script-src` weggelassen werden, aber `default-src` enthalten ist, wird die durch `default-src` definierte Richtlinie auf `<script>`-Elemente angewendet.

### Dokument-Direktiven

Dokument-Direktiven bestimmen die Eigenschaften eines Dokuments oder einer [Worker](/de/docs/Web/API/Web_Workers_API) Umgebung, auf die eine Richtlinie zutrifft.

- {{CSP("base-uri")}}
  - : Beschränkt die URLs, die im {{HTMLElement("base")}} Element eines Dokuments verwendet werden können.
- {{CSP("sandbox")}}
  - : Aktiviert eine Sandbox für die angeforderte Ressource ähnlich dem {{HTMLElement("iframe")}} [`sandbox`](/de/docs/Web/HTML/Element/iframe#sandbox)-Attribut.

### Navigations-Direktiven

Navigations-Direktiven bestimmen, zu welchen Orten ein Benutzer navigieren oder ein Formular absenden kann, zum Beispiel.

- {{CSP("form-action")}}
  - : Beschränkt die URLs, die als Ziel von Formularübermittlungen aus einem gegebenen Kontext verwendet werden können.
- {{CSP("frame-ancestors")}}
  - : Gibt gültige Eltern an, die eine Seite mithilfe von {{HTMLElement("frame")}}, {{HTMLElement("iframe")}}, {{HTMLElement("object")}}, oder {{HTMLElement("embed")}} einbetten dürfen.

### Reporting-Direktiven

Reporting-Direktiven steuern die Ziel-URL für CSP-Verstöße in `Content-Security-Policy` und {{HTTPHeader("Content-Security-Policy-Report-Only")}}.

- {{CSP("report-to")}}

  - : Gibt dem Browser ein Token, das den Berichtsendpunkt oder die Gruppe von Endpunkten identifiziert, an die Informationen über CSP-Verletzungen gesendet werden.
    Die von dem Token repräsentierten Endpunkte werden durch andere HTTP-Header bereitgestellt, wie etwa {{HTTPHeader("Reporting-Endpoints")}} und {{HTTPHeader("Report-To")}} {{deprecated_inline}}.

    > [!WARNING]
    > Diese Direktive soll [`report-uri`](#report-uri) ersetzen; in Browsern, die `report-to` unterstützen, wird die `report-uri`-Direktive ignoriert.
    > Bis `report-to` jedoch allgemein unterstützt wird, sollten Sie beide Header wie gezeigt angeben (wobei `endpoint_name` der Name eines separat bereitgestellten Endpunkts ist):
    >
    > ```http
    > Content-Security-Policy: …; report-uri https://endpoint.example.com; report-to endpoint_name
    > ```

### Andere Direktiven

- {{CSP("require-trusted-types-for")}}
  - : Erzwingt [Trusted Types](/de/docs/Web/API/Trusted_Types_API) an den DOM-XSS-Injektionsstellen.
- {{CSP("trusted-types")}}
  - : Wird verwendet, um eine Positivliste von [Trusted Types](/de/docs/Web/API/Trusted_Types_API)-Richtlinien anzugeben.
    Trusted Types erlauben es Anwendungen, DOM-XSS-Injektionsstellen so zu sperren, dass sie nur nicht-spoofbare, getypte Werte anstelle von Zeichenketten akzeptieren.
- {{CSP("upgrade-insecure-requests")}}
  - : Weist Benutzeragenten an, alle unsicheren URLs einer Website (d.h. die über HTTP bereitgestellt werden) so zu behandeln, als wären sie durch sichere URLs (d.h. über HTTPS bereitgestellt) ersetzt worden.
    Diese Richtlinie ist für Websites vorgesehen, die eine große Anzahl unsicherer Legacy-URLs haben, die umgeschrieben werden müssen.

### Veraltete Direktiven

- {{CSP("block-all-mixed-content")}} {{deprecated_inline}}

  - : Verhindert das Laden von Assets über HTTP, wenn die Seite über HTTPS geladen wird.

- {{CSP("report-uri")}} {{deprecated_inline}}
  - : Gibt dem Browser eine URL, an die Berichte über CSP-Verletzungen gesendet werden sollen. Dies wurde durch die [`report-to`](#report-to)-Direktive ersetzt.

## Fetch-Direktiv-Syntax

Alle Fetch-Direktiven können als einer der folgenden Werte angegeben werden:

- der Einzelwert `'none'`, der angibt, dass der spezifische Ressourcentyp vollständig blockiert werden soll
- ein oder mehrere _quellenbezogene Ausdruckswerte_, die gültige Quellen für diesen Ressourcentyp angeben.

Jeder Quellenausdruck nimmt eine der unten aufgeführten Formen an. Beachten Sie, dass nicht alle Formen auf alle Fetch-Direktiven anwendbar sind: siehe die Dokumentation für jede Fetch-Direktive, um herauszufinden, welche Formen auf sie anwendbar sind.

Die `<host-source>` und `<scheme-source>` Formate müssen nicht zitiert werden, und alle anderen Formate müssen in einfache Anführungszeichen eingeschlossen werden.

### 'nonce-\<nonce_value>'

Dieser Wert besteht aus dem String `nonce-` gefolgt von einem {{Glossary("Base64", "Base64-verschlüsselten")}} String. Dieser String ist ein zufälliger Wert, den der Server für jede HTTP-Antwort generiert. Zum Beispiel:

```plain
'nonce-416d1177-4d12-4e3b-b7c9-f6c409789fb8'
```

Der Server kann dann denselben Wert als Wert des `nonce`-Attributs von {{htmlelement("script")}} oder {{htmlelement("style")}} Ressourcen einfügen, die sie aus dem Dokument laden möchten.

Der Browser vergleicht den Wert aus der CSP-Direktive mit dem Wert im Elementattribut und lädt die Ressource nur, wenn sie übereinstimmen.

Wenn eine Direktive ein `nonce` und `unsafe-inline` enthält, ignoriert der Browser `unsafe-inline`.

Siehe [Nonces](/de/docs/Web/HTTP/Guides/CSP#nonces) im CSP-Leitfaden für weitere Informationen zur Verwendung.

> [!NOTE]
> Nonce-Quellen-Ausdrücke sind nur für {{htmlelement("script")}} und {{htmlelement("style")}} Elemente anwendbar.

### '\<hash_algorithm>-<hash_value>'

Dieser Wert besteht aus einem String, der einen Hash-Algorithmus identifiziert, gefolgt von `-`, gefolgt von einem {{Glossary("Base64", "Base64-verschlüsselten")}} String, der den Hash-Wert darstellt.

- Der Hash-Algorithmus-Identifier muss einer von `sha256`, `sha384` oder `sha512` sein.
- Der Hash-Wert ist der Base64-verschlüsselte {{Glossary("hash_function", "Hash")}} einer `<script>` oder `<style>` Ressource, berechnet mit einer der folgenden Hash-Funktionen: SHA-256, SHA-384 oder SHA-512.

Zum Beispiel:

```plain
'sha256-cd9827ad...'
```

Wenn der Browser das Dokument erhält, berechnet er den Hash-Wert aller `<script>` und `<style>` Elemente, vergleicht das Ergebnis mit allen Hashes in der CSP-Direktive und lädt die Ressource nur, wenn es eine Übereinstimmung gibt.

Wenn das Element eine externe Ressource lädt (zum Beispiel unter Verwendung des [`src`](/de/docs/Web/HTML/Element/script#src) Attributs), muss das Element auch das [`integrity`](/de/docs/Web/HTML/Element/script#integrity) Attribut gesetzt haben.

Wenn eine Direktive einen Hash und `unsafe-inline` enthält, ignoriert der Browser `unsafe-inline`.

Siehe [Hashes](/de/docs/Web/HTTP/Guides/CSP#hashes) im CSP-Leitfaden für weitere Informationen zur Verwendung.

> [!NOTE]
> Hash-Quellen-Ausdrücke sind nur für {{htmlelement("script")}} und {{htmlelement("style")}} Elemente anwendbar.

### \<host-source>

Die [URL](/de/docs/Web/URI) oder IP-Adresse eines {{Glossary("host", "Hosts")}}, der eine gültige Quelle für die Ressource ist.

Das Schema, die Portnummer und der Pfad sind optional.

Wenn das Schema weggelassen wird, wird das Schema des Ursprungs des Dokuments verwendet.

Beim Abgleichen von Schemata sind sichere Upgrades erlaubt. Zum Beispiel:

- `http://example.com` erlaubt auch Ressourcen von `https://example.com`
- `ws://example.org` erlaubt auch Ressourcen von `wss://example.org`.

Platzhalter (`'*'`) können für Subdomains, Host-Adressen und Portnummern verwendet werden und zeigen an, dass alle legalen Werte davon gültig sind. Zum Beispiel:

- `http://*.example.com` erlaubt Ressourcen von allen Subdomains von `example.com`, über HTTP oder HTTPS.

Pfade, die mit `/` enden, passen zu jedem Pfad, dessen Präfix sie sind. Zum Beispiel:

- `example.com/api/` erlaubt Ressourcen von `example.com/api/users/new`.

Pfade, die nicht mit `/` enden, werden genau abgeglichen. Zum Beispiel:

- `https://example.com/file.js` erlaubt Ressourcen von `https://example.com/file.js` nicht jedoch `https://example.com/file.js/file2.js`.

### \<scheme-source>

Ein [Schema](/de/docs/Web/URI/Reference/Schemes), wie `https:`. Der Doppelpunkt ist erforderlich.

Sichere Upgrades sind erlaubt, also:

- `http:` erlaubt auch Ressourcen, die über HTTPS geladen werden
- `ws:` erlaubt auch Ressourcen, die über WSS geladen werden.

### 'self'

Ressourcen des angegebenen Typs dürfen nur vom selben {{Glossary("origin", "Ursprung")}} wie das Dokument geladen werden.

Sichere Upgrades sind erlaubt. Zum Beispiel:

- Wenn das Dokument von `http://example.com` bereitgestellt wird, erlaubt eine CSP von `'self'` auch Ressourcen von `https://example.com`.
- Wenn das Dokument von `ws://example.org` bereitgestellt wird, erlaubt eine CSP von `'self'` auch Ressourcen von `wss://example.org`.

### 'unsafe-eval'

Standardmäßig sind, wenn eine CSP eine `default-src` oder `script-src` Direktive enthält, JavaScript-Funktionen, die ihre Argumente als JavaScript auswerten, deaktiviert. Dies schließt [`eval()`](/de/docs/Web/JavaScript/Reference/Global_Objects/eval), das [`code`](/de/docs/Web/API/Window/setTimeout#code) Argument von [`setTimeout()`](/de/docs/Web/API/Window/setTimeout), oder den {{jsxref("Function/Function()", "Function()")}} Konstruktor ein.

Das `unsafe-eval` Schlüsselwort kann verwendet werden, um diesen Schutz aufzuheben und eine dynamische Auswertung von Zeichenfolgen als JavaScript zu ermöglichen.

> [!WARNING]
> Entwickler sollten `'unsafe-eval'` vermeiden, da es viel von dem Zweck einer CSP untergräbt.

Siehe [`eval()` und ähnliche APIs](/de/docs/Web/HTTP/Guides/CSP#eval_and_similar_apis) im CSP-Leitfaden für mehr Nutzungshinweise.

### 'wasm-unsafe-eval'

Standardmäßig, wenn eine CSP eine `default-src` oder `script-src` Direktive enthält, ist es einer Seite nicht erlaubt, WebAssembly unter Verwendung von Funktionen wie [`WebAssembly.compileStreaming()`](/de/docs/WebAssembly/Reference/JavaScript_interface/compileStreaming_static) zu kompilieren.

Das `wasm-unsafe-eval` Schlüsselwort kann verwendet werden, um diesen Schutz aufzuheben. Dies ist eine viel sicherere Alternative zu `'unsafe-eval'`, da es keine allgemeine Auswertung von JavaScript erlaubt.

### 'unsafe-inline'

Standardmäßig, wenn eine CSP eine `default-src` oder `script-src` Direktive enthält, darf Inline-JavaScript nicht ausgeführt werden. Dies schließt ein:

- Inline `<script>` Tags
- Inline-Event-Handler-Attribute
- `javascript:` URLs.

Ebenso wird, wenn eine CSP `default-src` oder `style-src` enthält, Inline-CSS nicht geladen, einschließlich:

- Inline `<style>` Tags
- [`style`](/de/docs/Web/API/HTMLElement/style) Attribute.

Das `unsafe-inline` Schlüsselwort kann verwendet werden, um diesen Schutz aufzuheben und alle diese Formen zu laden.

> [!WARNING]
> Entwickler sollten `'unsafe-inline'` vermeiden, da es viel von dem Zweck einer CSP untergräbt.

Siehe [Inline JavaScript](/de/docs/Web/HTTP/Guides/CSP#inline_javascript) im CSP-Leitfaden für mehr Nutzungshinweise.

### 'unsafe-hashes'

Standardmäßig, wenn eine CSP eine `default-src` oder `script-src` Direktive enthält, dürfen Inline-Event-Handler-Attribute wie `onclick` und Inline-`style`-Attribute nicht ausgeführt werden.

Der `'unsafe-hashes'` Ausdruck erlaubt dem Browser, [Hash-Ausdrücke](#hash_algorithm-hash_value) für Inline-Event-Handler und `style`-Attribute zu verwenden. Zum Beispiel könnte eine CSP eine Direktive wie diese enthalten:

```http
script-src 'unsafe-hashes' 'sha256-cd9827ad...'
```

Wenn der Hash-Wert mit dem Hash eines Inline-Event-Handler-Attributwerts oder eines `style`-Attributwerts übereinstimmt, wird der Code ausgeführt.

> [!WARNING]
> Der `'unsafe-hashes'` Wert ist unsicher.
>
> Insbesondere ermöglicht er einen Angriff, bei dem der Inhalt des Inline-Event-Handler-Attributs als Inline-`<script>` Element in das Dokument injiziert wird. Nehmen wir an, der Inline-Event-Handler ist:
>
> ```html
> <button onclick="transferAllMyMoney()">Transfer all my money</button>
> ```
>
> Wenn ein Angreifer ein Inline-`<script>` Element mit diesem Code injizieren kann, wird die CSP es erlauben, automatisch ausgeführt zu werden.
>
> Allerdings ist `'unsafe-hashes'` viel sicherer als `'unsafe-inline'`.

### 'inline-speculation-rules'

Standardmäßig, wenn eine CSP eine `default-src` oder `script-src` Direktive enthält, darf Inline-JavaScript nicht ausgeführt werden. Der `'inline-speculation-rules'` erlaubt dem Browser, Inline-`<script>` Elemente zu laden, die ein [`type`](/de/docs/Web/HTML/Element/script/type) Attribut von [`speculationrules`](/de/docs/Web/HTML/Element/script/type/speculationrules) haben.

Siehe die [Speculation Rules API](/de/docs/Web/API/Speculation_Rules_API) für mehr Informationen.

### 'strict-dynamic'

Das `'strict-dynamic'` Schlüsselwort verlängert das durch ein [Nonce](#nonce-nonce_value) oder einen [Hash](#hash_algorithm-hash_value) gewährte Vertrauen auf Skripte, die dieses Skript dynamisch lädt, zum Beispiel durch das Erstellen neuer `<script>` Tags unter Verwendung von [`Document.createElement()`](/de/docs/Web/API/Document/createElement) und deren Einfügung in das Dokument mit [`Node.appendChild()`](/de/docs/Web/API/Node/appendChild).

Wenn dieses Schlüsselwort in einer Direktive vorhanden ist, werden die folgenden Quellenausdruckswerte alle ignoriert:

- [\<host-source>](#host-source)
- [\<scheme-source>](#scheme-source)
- [`'self'`](#self)
- [`'unsafe-inline'`](#unsafe-inline)

Siehe [Das `strict-dynamic` Schlüsselwort](/de/docs/Web/HTTP/Guides/CSP#the_strict-dynamic_keyword) im CSP-Leitfaden für mehr Nutzungshinweise.

### 'report-sample'

Wenn dieser Ausdruck in einer Richtlinie enthalten ist, die Skripte oder Stile steuert, und die Richtlinie den Browser veranlasst, irgendwelche Inline-Skripte, Inline-Stile oder Event-Handler-Attribute zu blockieren, dann wird der [Verstößebericht](/de/docs/Web/HTTP/Guides/CSP#violation_reporting), den der Browser generiert, eine [`sample`](/de/docs/Web/API/CSPViolationReportBody/sample) Eigenschaft mit den ersten 40 Zeichen der blockierten Ressource enthalten.

## CSP in Workern

[Worker](/de/docs/Web/API/Worker) werden im Allgemeinen _nicht_ von der Content Security Policy des Dokuments (oder des übergeordneten Workers), das sie erstellt hat, geregelt. Um eine Content Security Policy für den Worker festzulegen, setzen Sie einen `Content-Security-Policy` Antwort-Header für die Anfrage, die das Worker-Skript selbst angefordert hat.

Die Ausnahme bildet, wenn der Ursprung des Worker-Skripts eine global eindeutige Kennung ist (zum Beispiel, wenn die URL ein Schema von Daten oder Blob hat). In diesem Fall erbt der Worker die Content Security Policy des Dokuments oder Workers, der ihn erstellt hat.

## Mehrere Content Security Policies

Der CSP-Mechanismus erlaubt die Angabe mehrerer Richtlinien für eine Ressource, einschließlich der `Content-Security-Policy` Kopfzeile, der {{HTTPHeader("Content-Security-Policy-Report-Only")}} Kopfzeile und einem {{HTMLElement("meta")}} Element.

Sie können den `Content-Security-Policy` Header mehr als einmal verwenden, wie im folgenden Beispiel gezeigt. Achten Sie besonders auf die {{CSP("connect-src")}} Direktive hier. Auch wenn die zweite Richtlinie die Verbindung erlauben würde, enthält die erste Richtlinie `connect-src 'none'`. Das Hinzufügen zusätzlicher Richtlinien _kann nur weiter einschränken_ die Fähigkeiten der geschützten Ressource, was bedeutet, dass keine Verbindung erlaubt ist und, als die strengste Richtlinie, `connect-src 'none'` durchgesetzt wird.

```http
Content-Security-Policy: default-src 'self' http://example.com;
                          connect-src 'none';
Content-Security-Policy: connect-src http://example.com/;
                          script-src http://example.com/
```

## Beispiele

### Unsicheren Inline-Code deaktivieren und nur HTTPS-Ressourcen erlauben

Dieser HTTP-Header setzt die Standardrichtlinie so, dass nur das Laden von Ressourcen (Bilder, Schriftarten, Skripte usw.) über HTTPS erlaubt ist. Da die `unsafe-inline` und `unsafe-eval` Direktiven nicht gesetzt sind, werden Inline-Skripte blockiert.

```http
Content-Security-Policy: default-src https:
```

Dieselben Einschränkungen können mithilfe des HTML {{htmlelement("meta")}} Elements angewendet werden.

```html
<meta http-equiv="Content-Security-Policy" content="default-src https:" />
```

### Inline-Code und HTTPS-Ressourcen erlauben, aber Plugins deaktivieren

Diese Richtlinie könnte auf einer bereits existierenden Website verwendet werden, die zu viel Inline-Code verwendet, um behoben zu werden, um sicherzustellen, dass Ressourcen nur über HTTPS geladen und Plugins deaktiviert werden:

```http
Content-Security-Policy: default-src https: 'unsafe-eval' 'unsafe-inline'; object-src 'none'
```

### Verstöße melden, aber nicht erzwingen, wenn getestet wird

Dieses Beispiel setzt dieselben Einschränkungen wie das vorherige Beispiel, verwendet aber den {{httpheader("Content-Security-Policy-Report-Only")}} Header und die {{CSP("report-to")}} Direktive. Dieser Ansatz wird während der Tests verwendet, um Verstöße zu melden, aber den Code nicht am Ausführen zu hindern.

Endpunkte (URLs), an die Berichte gesendet werden, werden mit dem {{HTTPHeader("Reporting-Endpoints")}} HTTP-Antwort-Header definiert.

```http
Reporting-Endpoints: csp-endpoint="https://example.com/csp-reports"
```

Ein bestimmter Endpunkt wird dann als Berichtsziel in der CSP-Richtlinie mit der {{CSP("report-to")}} Direktive ausgewählt.

```http
Content-Security-Policy-Report-Only: default-src https:; report-uri /csp-violation-report-url/; report-to csp-endpoint
```

Beachten Sie, dass die {{CSP("report-uri")}} {{deprecated_inline}} Direktive oben ebenfalls angegeben ist, weil `report-to` noch nicht weitgehend von Browsern unterstützt wird.

Siehe [Implementierung der Content Security Policy (CSP)](/de/docs/Web/Security/Practical_implementation_guides/CSP) für weitere Beispiele.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTTPHeader("Content-Security-Policy-Report-Only")}}
- [Learn about: Content Security Policy](/de/docs/Web/HTTP/Guides/CSP)
- [Content Security in WebExtensions](/de/docs/Mozilla/Add-ons/WebExtensions/Content_Security_Policy)
- [Adopting a strict policy](https://csp.withgoogle.com/docs/strict-csp.html)
- [CSP Evaluator](https://github.com/google/csp-evaluator) - Bewerten Sie Ihre Content Security Policy
