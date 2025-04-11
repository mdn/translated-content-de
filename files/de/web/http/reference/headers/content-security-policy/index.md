---
title: Content-Security-Policy (CSP)
short-title: Content-Security-Policy
slug: Web/HTTP/Reference/Headers/Content-Security-Policy
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{HTTPSidebar}}

Der HTTP **`Content-Security-Policy`** Antwort-Header ermöglicht es Website-Administratoren, die Ressourcen zu kontrollieren, die der Benutzeragent für eine bestimmte Seite laden darf. Mit einigen Ausnahmen umfassen Richtlinien hauptsächlich das Spezifizieren von Serverherkünften und Skriptendpunkten. Dies hilft, {{Glossary("cross-site_scripting", "Cross-Site-Scripting")}} Angriffe abzuwehren.

Siehe den [Content Security Policy (CSP)](/de/docs/Web/HTTP/Guides/CSP) Leitfaden für Details darüber, wie eine CSP an den Browser ausgeliefert wird, wie sie aussieht, sowie Anwendungsfälle und Bereitstellungsstrategien.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Headertyp</th>
      <td>{{Glossary("Response_header", "Antwort-Header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_request_header", "Verbotener Anfrage-Header")}}</th>
      <td>nein</td>
    </tr>
  </tbody>
</table>

## Syntax

```http
Content-Security-Policy: <policy-directive>; <policy-directive>
```

wo `<policy-directive>` besteht aus:
`<directive> <value>` ohne interne Interpunktion.

## Direktiven

### Fetch-Direktiven

Fetch-Direktiven kontrollieren die Orte, von denen bestimmte Ressourcentypen geladen werden dürfen.

- {{CSP("child-src")}}

  - : Definiert die gültigen Quellen für [Web Workers](/de/docs/Web/API/Web_Workers_API) und verschachtelte Browsing-Kontexte, die mithilfe von Elementen wie {{HTMLElement("frame")}} und {{HTMLElement("iframe")}} geladen werden.

    [Fallback](#fallbacks) für `frame-src` und `worker-src`.

- {{CSP("connect-src")}}
  - : Beschränkt die URLs, die mit Skript-Schnittstellen geladen werden können.
- {{CSP("default-src")}}

  - : Dient als Fallback für die anderen {{Glossary("Fetch_directive", "Fetch-Direktiven")}}.

    [Fallback](#fallbacks) für alle anderen Fetch-Direktiven.

- {{CSP("fenced-frame-src")}} {{experimental_inline}}
  - : Gibt gültige Quellen für verschachtelte Browsing-Kontexte an, die in {{HTMLElement("fencedframe")}} Elemente geladen werden.
- {{CSP("font-src")}}
  - : Gibt gültige Quellen für Schriften an, die mit {{cssxref("@font-face")}} geladen werden.
- {{CSP("frame-src")}}
  - : Gibt gültige Quellen für verschachtelte Browsing-Kontexte an, die in Elemente wie {{HTMLElement("frame")}} und {{HTMLElement("iframe")}} geladen werden.
- {{CSP("img-src")}}
  - : Gibt gültige Bildquellen und Favicons an.
- {{CSP("manifest-src")}}
  - : Gibt gültige Quellen für Anwendungsmanifestdateien an.
- {{CSP("media-src")}}
  - : Gibt gültige Quellen zum Laden von Medien unter Verwendung der {{HTMLElement("audio")}}, {{HTMLElement("video")}} und {{HTMLElement("track")}} Elemente an.
- {{CSP("object-src")}}
  - : Gibt gültige Quellen für die {{HTMLElement("object")}} und {{HTMLElement("embed")}} Elemente an.
- {{CSP("prefetch-src")}} {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Gibt gültige Quellen an, die vorausgeladen oder vorgerendert werden sollen.
- {{CSP("script-src")}}

  - : Gibt gültige Quellen für JavaScript- und WebAssembly-Ressourcen an.

    [Fallback](#fallbacks) für `script-src-elem` und `script-src-attr`.

- {{CSP("script-src-elem")}}
  - : Gibt gültige Quellen für JavaScript {{HTMLElement("script")}} Elemente an.
- {{CSP("script-src-attr")}}
  - : Gibt gültige Quellen für JavaScript-Ereignishandler in Attribute an.
- {{CSP("style-src")}}

  - : Gibt gültige Quellen für Stylesheets an.

    [Fallback](#fallbacks) für `style-src-elem` und `style-src-attr`.

- {{CSP("style-src-elem")}}
  - : Gibt gültige Quellen für Stylesheets in {{HTMLElement("style")}} Elementen und {{HTMLElement("link")}} Elementen mit `rel="stylesheet"` an.
- {{CSP("style-src-attr")}}
  - : Gibt gültige Quellen für Inline-Stile an, die auf einzelne DOM-Elemente angewendet werden.
- {{CSP("worker-src")}}
  - : Gibt gültige Quellen für [`Worker`](/de/docs/Web/API/Worker), [`SharedWorker`](/de/docs/Web/API/SharedWorker) oder [`ServiceWorker`](/de/docs/Web/API/ServiceWorker) Skripte an.

Alle Fetch-Direktiven können mit dem einzelnen Wert `'none'` angegeben werden, was bedeutet, dass der spezifische Ressourcentyp vollständig blockiert werden soll, oder als eine oder mehrere _source expression_ Werte, die gültige Quellen für diesen Ressourcentyp angeben. Siehe [Fetch-Direktiv-Syntax](#fetch-direktiv-syntax) für weitere Details.

#### Fallbacks

Einige Fetch-Direktiven fungieren als Fallbacks für andere, granularere Direktiven. Das bedeutet, dass, wenn die granularere Direktive nicht angegeben ist, der Fallback verwendet wird, um eine Richtlinie für diesen Ressourcentyp bereitzustellen.

- `default-src` ist ein Fallback für alle anderen Fetch-Direktiven.
- `script-src` ist ein Fallback für `script-src-attr` und `script-src-elem`.
- `style-src` ist ein Fallback für `style-src-attr` und `style-src-elem`.
- `child-src` ist ein Fallback für `frame-src` und `worker-src`.

Zum Beispiel:

- Wenn `img-src` weggelassen wird, aber `default-src` enthalten ist, wird die von `default-src` definierte Richtlinie auf Bilder angewendet.
- Wenn `script-src-elem` weggelassen wird, aber `script-src` enthalten ist, wird die von `script-src` definierte Richtlinie auf `<script>` Elemente angewendet.
- Wenn sowohl `script-src-elem` als auch `script-src` weggelassen werden, aber `default-src` enthalten ist, wird die von `default-src` definierte Richtlinie auf `<script>` Elemente angewendet.

### Dokument-Direktiven

Dokument-Direktiven regeln die Eigenschaften eines Dokuments oder [Worker](/de/docs/Web/API/Web_Workers_API) Umgebung, auf die eine Richtlinie angewendet wird.

- {{CSP("base-uri")}}
  - : Beschränkt die URLs, die im {{HTMLElement("base")}} Element eines Dokuments verwendet werden können.
- {{CSP("sandbox")}}
  - : Aktiviert eine Sandbox für die angeforderte Ressource, ähnlich dem {{HTMLElement("iframe")}} [`sandbox`](/de/docs/Web/HTML/Reference/Elements/iframe#sandbox) Attribut.

### Navigations-Direktiven

Navigations-Direktiven regeln, zu welchen Orten ein Benutzer navigieren oder ein Formular übermitteln kann, zum Beispiel.

- {{CSP("form-action")}}
  - : Beschränkt die URLs, die als Ziel von Formularübermittlungen aus einem bestimmten Kontext verwendet werden können.
- {{CSP("frame-ancestors")}}
  - : Gibt gültige Eltern an, die eine Seite mit {{HTMLElement("frame")}}, {{HTMLElement("iframe")}}, {{HTMLElement("object")}} oder {{HTMLElement("embed")}} einbetten dürfen.

### Bericht-Direktiven

Bericht-Direktiven steuern die Ziel-URL für CSP-Verstoßberichte in `Content-Security-Policy` und {{HTTPHeader("Content-Security-Policy-Report-Only")}}.

- {{CSP("report-to")}}

  - : Bietet dem Browser ein Token, das den Berichtsendpunkt oder eine Gruppe von Endpunkten identifiziert, an die CSP-Verletzungsinformationen gesendet werden sollen. Die Endpunkte, die das Token repräsentiert, werden durch andere HTTP-Header bereitgestellt, wie {{HTTPHeader("Reporting-Endpoints")}} und {{HTTPHeader("Report-To")}} {{deprecated_inline}}.

    > [!WARNING]
    > Diese Direktive soll [`report-uri`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/report-uri) ersetzen; in Browsern, die `report-to` unterstützen, wird die Direktive `report-uri` ignoriert.
    > Solange `report-to` jedoch noch nicht breit unterstützt wird, sollten Sie beide Header wie gezeigt angeben (wobei `endpoint_name` der Name eines separat bereitgestellten Endpunkts ist):
    >
    > ```http
    > Content-Security-Policy: …; report-uri https://endpoint.example.com; report-to endpoint_name
    > ```

### Andere Direktiven

- {{CSP("require-trusted-types-for")}}
  - : Erzwingt [Trusted Types](/de/docs/Web/API/Trusted_Types_API) an den DOM XSS-Injektionsstellen.
- {{CSP("trusted-types")}}
  - : Wird verwendet, um eine Positivliste von [Trusted Types](/de/docs/Web/API/Trusted_Types_API) Richtlinien anzugeben. Trusted Types ermöglicht es Anwendungen, DOM XSS-Injektionsstellen so zu sperren, dass diese nur nicht fälschbare, typisierte Werte anstelle von Zeichenfolgen akzeptieren.
- {{CSP("upgrade-insecure-requests")}}
  - : Weist Benutzeragenten an, alle unsicheren URLs einer Website (die über HTTP bereitgestellt werden) so zu behandeln, als wären sie durch sichere URLs (die über HTTPS bereitgestellt werden) ersetzt worden. Diese Direktive ist für Websites mit einer großen Anzahl unsicherer alter URLs vorgesehen, die umgeschrieben werden müssen.

### Veraltete Direktiven

- {{CSP("block-all-mixed-content")}} {{deprecated_inline}}

  - : Verhindert das Laden von Assets mit HTTP, wenn die Seite mit HTTPS geladen wird.

- {{CSP("report-uri")}} {{deprecated_inline}}
  - : Bietet dem Browser eine URL, an die CSP-Verstoßberichte gesendet werden sollen. Dies wurde durch die Direktive [`report-to`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/report-to) ersetzt.

## Fetch-Direktiv-Syntax

Alle Fetch-Direktiven können wie folgt angegeben werden:

- der einzelne Wert `'none'`, der angibt, dass der spezifische Ressourcentyp vollständig blockiert werden soll
- ein oder mehrere _source expression_ Werte, die gültige Quellen für diesen Ressourcentyp angeben.

Jeder source expression nimmt eine der unten aufgeführten Formen an. Beachten Sie, dass nicht alle Formen für alle Fetch-Direktiven anwendbar sind: siehe die Dokumentation für jede Fetch-Direktive, um herauszufinden, welche Formen anwendbar sind.

Die `<host-source>` und `<scheme-source>` Formate müssen unzitiert sein, und alle anderen Formate müssen in einfachen Anführungszeichen eingeschlossen werden.

### 'nonce-\<nonce_value>'

Dieser Wert besteht aus dem String `nonce-` gefolgt von einem {{Glossary("Base64", "base64-kodierten")}} String. Dieser String ist ein Zufallswert, den der Server für jede HTTP-Antwort generiert. Zum Beispiel:

```plain
'nonce-416d1177-4d12-4e3b-b7c9-f6c409789fb8'
```

Der Server kann dann denselben Wert als Wert des `nonce` Attributs von {{htmlelement("script")}} oder {{htmlelement("style")}} Ressourcen einfügen, die er vom Dokument laden möchte.

Der Browser vergleicht den Wert aus der CSP-Direktive mit dem Wert im Elementattribut und lädt die Ressource nur, wenn sie übereinstimmen.

Wenn eine Direktive eine Nonce und `unsafe-inline` enthält, ignoriert der Browser `unsafe-inline`.

Siehe [Nonces](/de/docs/Web/HTTP/Guides/CSP#nonces) im CSP Leitfaden für weitere Informationen zur Verwendung.

> [!NOTE]
> Nonce-Quellenausdrücke sind nur für {{htmlelement("script")}} und {{htmlelement("style")}} Elemente anwendbar.

### '\<hash_algorithm>-<hash_value>'

Dieser Wert besteht aus einem String, der einen Hash-Algorithmus identifiziert, gefolgt von `-`, gefolgt von einem {{Glossary("Base64", "base64-kodierten")}} String, der den Hash-Wert darstellt.

- Der Hash-Algorithmus-Identifier muss einer von `sha256`, `sha384` oder `sha512` sein.
- Der Hash-Wert ist der base64-kodierte {{Glossary("hash_function", "Hash")}} einer `<script>` oder `<style>` Ressource, berechnet mit einer der folgenden Hash-Funktionen: SHA-256, SHA-384 oder SHA-512.

Zum Beispiel:

```plain
'sha256-cd9827ad...'
```

Wenn der Browser das Dokument empfängt, hasht er den Inhalt der `<script>` und `<style>` Elemente, vergleicht das Ergebnis mit allen Hashes in der CSP-Direktive und lädt die Ressource nur, wenn ein Match vorliegt.

Wenn das Element eine externe Ressource lädt (zum Beispiel durch das [`src`](/de/docs/Web/HTML/Reference/Elements/script#src) Attribut), muss das Element auch das [`integrity`](/de/docs/Web/HTML/Reference/Elements/script#integrity) Attribut gesetzt haben.

Wenn eine Direktive einen Hash und `unsafe-inline` enthält, ignoriert der Browser `unsafe-inline`.

Siehe [Hashes](/de/docs/Web/HTTP/Guides/CSP#hashes) im CSP Leitfaden für weitere Informationen zur Verwendung.

> [!NOTE]
> Hash-Quellenausdrücke sind nur für {{htmlelement("script")}} und {{htmlelement("style")}} Elemente anwendbar.

### \<host-source>

Die [URL](/de/docs/Web/URI) oder IP-Adresse eines {{Glossary("host", "Host")}}, die eine gültige Quelle für die Ressource ist.

Das Schema, die Portnummer und der Pfad sind optional.

Wenn das Schema ausgelassen wird, wird das Schema des Ursprungs des Dokuments verwendet.

Beim Abgleichen von Schemen sind sichere Upgrades erlaubt. Zum Beispiel:

- `http://example.com` erlaubt auch Ressourcen von `https://example.com`
- `ws://example.org` erlaubt auch Ressourcen von `wss://example.org`.

Wildcards (`'*'`) können für Subdomains, Hostadressen und Portnummern verwendet werden, was angibt, dass alle zulässigen Werte jeweils gültig sind. Zum Beispiel:

- `http://*.example.com` erlaubt Ressourcen von jeder Subdomain von `example.com`, über HTTP oder HTTPS.

Pfad, die in `/` enden, passen zu jedem Pfad, den sie als Präfix haben. Zum Beispiel:

- `example.com/api/` erlaubt Ressourcen von `example.com/api/users/new`.

Pfad, die nicht in `/` enden, werden genau abgeglichen. Zum Beispiel:

- `https://example.com/file.js` erlaubt Ressourcen von `https://example.com/file.js`, aber nicht `https://example.com/file.js/file2.js`.

### \<scheme-source>

Ein [Schema](/de/docs/Web/URI/Reference/Schemes), wie `https:`. Der Doppelpunkt ist erforderlich.

Sichere Upgrades sind erlaubt, also:

- `http:` erlaubt auch Ressourcen, die über HTTPS geladen werden
- `ws:` erlaubt auch Ressourcen, die über WSS geladen werden.

### 'self'

Ressourcen des angegebenen Typs dürfen nur vom gleichen {{Glossary("origin", "Ursprung")}} wie das Dokument geladen werden.

Sichere Upgrades sind erlaubt. Zum Beispiel:

- Wenn das Dokument von `http://example.com` bereitgestellt wird, erlaubt eine CSP von `'self'` auch Ressourcen von `https://example.com`.
- Wenn das Dokument von `ws://example.org` bereitgestellt wird, erlaubt eine CSP von `'self'` auch Ressourcen von `wss://example.org`.

### 'unsafe-eval'

Standardmäßig, wenn eine CSP eine `default-src` oder eine `script-src` Direktive enthält, dann sind JavaScript-Funktionen, die ihre Argumente als JavaScript auswerten, deaktiviert. Dies schließt [`eval()`](/de/docs/Web/JavaScript/Reference/Global_Objects/eval), das [`code`](/de/docs/Web/API/Window/setTimeout#code) Argument für [`setTimeout()`](/de/docs/Web/API/Window/setTimeout) oder den {{jsxref("Function/Function()", "Function()")}} Konstruktor ein.

Das `unsafe-eval` Schlüsselwort kann verwendet werden, um diesen Schutz rückgängig zu machen, sodass die dynamische Auswertung von Zeichenfolgen als JavaScript erlaubt wird.

> [!WARNING]
> Entwickler sollten `'unsafe-eval'` vermeiden, da es den Hauptzweck einer CSP stark beeinträchtigt.

Siehe [`eval()` und ähnliche APIs](/de/docs/Web/HTTP/Guides/CSP#eval_and_similar_apis) im CSP Leitfaden für weitere Informationen zur Verwendung.

### 'wasm-unsafe-eval'

Standardmäßig, wenn eine CSP eine `default-src` oder eine `script-src` Direktive enthält, dann darf eine Seite kein WebAssembly kompilieren, indem Funktionen wie [`WebAssembly.compileStreaming()`](/de/docs/WebAssembly/Reference/JavaScript_interface/compileStreaming_static) verwendet werden.

Das `wasm-unsafe-eval` Schlüsselwort kann verwendet werden, um diesen Schutz aufzuheben. Dies ist eine viel sicherere Alternative zu `'unsafe-eval'`, da es keine allgemeine Auswertung von JavaScript ermöglicht.

### 'unsafe-inline'

Standardmäßig, wenn eine CSP eine `default-src` oder eine `script-src` Direktive enthält, dann darf Inline-JavaScript nicht ausgeführt werden. Dies schließt ein:

- Inline `<script>` Tags
- Inline-Ereignishandlerattribute
- `javascript:` URLs.

In gleicher Weise, wenn eine CSP `default-src` oder eine `style-src` Direktive enthält, dann werden Inline-CSS nicht geladen, einschließlich:

- Inline `<style>` Tags
- [`style`](/de/docs/Web/API/HTMLElement/style) Attribute.

Das `unsafe-inline` Schlüsselwort kann verwendet werden, um diesen Schutz aufzuheben, sodass alle diese Formen geladen werden dürfen.

> [!WARNING]
> Entwickler sollten `'unsafe-inline'` vermeiden, da es den Hauptzweck einer CSP stark beeinträchtigt.

Siehe [Inline-JavaScript](/de/docs/Web/HTTP/Guides/CSP#inline_javascript) im CSP Leitfaden für weitere Informationen zur Verwendung.

### 'unsafe-hashes'

Standardmäßig, wenn eine CSP eine `default-src` oder eine `script-src` Direktive enthält, dann sind Inline-Ereignishandlerattribute wie `onclick` und Inline-Style-Attribute nicht ausführbar.

Der Ausdruck `'unsafe-hashes'` ermöglicht es dem Browser, [Hash-Ausdrücke](#hash_algorithm-hash_value) für Inline-Ereignishandler und Style-Attribute zu verwenden. Zum Beispiel könnte eine CSP eine Direktive dieser Art enthalten:

```http
script-src 'unsafe-hashes' 'sha256-cd9827ad...'
```

Wenn der Hash-Wert mit dem Hash eines Inline-Ereignishandlerattribut-Werts oder eines Style-Attribut-Werts übereinstimmt, wird der Code ausgeführt.

> [!WARNING]
> Der Wert `'unsafe-hashes'` ist unsicher.
>
> Insbesondere ermöglicht er einen Angriff, bei dem der Inhalt des Inline-Ereignishandlerattributs als Inline `<script>` Element in das Dokument injiziert wird. Angenommen, der Inline-Ereignishandler ist:
>
> ```html
> <button onclick="transferAllMyMoney()">Transfer all my money</button>
> ```
>
> Wenn ein Angreifer ein Inline `<script>` Element mit diesem Code injizieren kann, wird die CSP es automatisch ausführen lassen.
>
> Jedoch ist `'unsafe-hashes'` viel sicherer als `'unsafe-inline'`.

### 'inline-speculation-rules'

Standardmäßig, wenn eine CSP eine `default-src` oder eine `script-src` Direktive enthält, dann darf Inline-JavaScript nicht ausgeführt werden. Das `'inline-speculation-rules'` erlaubt dem Browser, Inline `<script>` Elemente zu laden, die ein [`type`](/de/docs/Web/HTML/Reference/Elements/script/type) Attribut von [`speculationrules`](/de/docs/Web/HTML/Reference/Elements/script/type/speculationrules) haben.

Siehe die [Speculation Rules API](/de/docs/Web/API/Speculation_Rules_API) für mehr Informationen.

### 'strict-dynamic'

Das `'strict-dynamic'` Schlüsselwort lässt das Vertrauen, das ein Skript durch ein [Nonce](#nonce-nonce_value) oder einen [Hash](#hash_algorithm-hash_value) erhält, auch auf Skripte ausdehnen, die dieses Skript dynamisch lädt, zum Beispiel durch Erzeugung neuer `<script>` Tags mit [`Document.createElement()`](/de/docs/Web/API/Document/createElement) und deren Einfügen in das Dokument mit [`Node.appendChild()`](/de/docs/Web/API/Node/appendChild).

Wenn dieses Schlüsselwort in einer Direktive vorhanden ist, werden die folgenden Quellenausdruckswerte alle ignoriert:

- [\<host-source>](#host-source)
- [\<scheme-source>](#scheme-source)
- [`'self'`](#self)
- [`'unsafe-inline'`](#unsafe-inline)

Siehe [Das `strict-dynamic` Schlüsselwort](/de/docs/Web/HTTP/Guides/CSP#the_strict-dynamic_keyword) im CSP Leitfaden für mehr Informationen zur Verwendung.

### 'report-sample'

Wenn dieser Ausdruck in einer Direktive enthalten ist, die Skripte oder Styles steuert, und die Direktive dazu führt, dass der Browser irgendwelche Inline-Skripte, Inline-Styles oder Ereignishandlerattribute blockiert, dann enthält der [Verstoßbericht](/de/docs/Web/HTTP/Guides/CSP#violation_reporting), den der Browser generiert, eine [`sample`](/de/docs/Web/API/CSPViolationReportBody/sample) Eigenschaft, die die ersten 40 Zeichen der blockierten Ressource enthält.

## CSP in Workern

[Workers](/de/docs/Web/API/Worker) unterliegen im Allgemeinen _nicht_ der Content-Sicherheitsrichtlinie des Dokuments (oder des übergeordneten Workers), das sie erstellt hat. Um eine Content-Sicherheitsrichtlinie für den Worker anzugeben, setzen Sie einen `Content-Security-Policy` Antwort-Header für die Anfrage, die das Worker-Skript selbst angefordert hat.

Die Ausnahme zu diesem Fall ist, wenn der Ursprung des Worker-Skripts eine global eindeutige Kennung ist (zum Beispiel, wenn seine URL ein Schema von Data oder Blob hat). In diesem Fall erbt der Worker die Content-Sicherheitsrichtlinie des Dokuments oder Workers, das ihn erstellt hat.

## Mehrere Content-Sicherheitsrichtlinien

Der CSP-Mechanismus erlaubt es, dass mehrere Richtlinien für eine Ressource spezifiziert werden können, einschließlich über den `Content-Security-Policy` Header, den {{HTTPHeader("Content-Security-Policy-Report-Only")}} Header und ein {{HTMLElement("meta")}} Element.

Sie können den `Content-Security-Policy` Header mehrmals verwenden, wie im untenstehenden Beispiel. Achten Sie besonders auf die {{CSP("connect-src")}} Direktive hier. Auch wenn die zweite Richtlinie die Verbindung zulassen würde, enthält die erste Richtlinie `connect-src 'none'`. Das Hinzufügen zusätzlicher Richtlinien kann _nur weiter einschränken_ die Fähigkeiten der geschützten Ressource, was bedeutet, dass keine Verbindung erlaubt ist, und als strengste Richtlinie wird `connect-src 'none'` durchgesetzt.

```http
Content-Security-Policy: default-src 'self' http://example.com;
                          connect-src 'none';
Content-Security-Policy: connect-src http://example.com/;
                          script-src http://example.com/
```

## Beispiele

### Unsicheren Inline-Code deaktivieren und nur HTTPS-Ressourcen zulassen

Dieser HTTP-Header setzt die Standardrichtlinie, nur Ressourcennutzung (Bilder, Schriften, Skripte usw.) über HTTPS zuzulassen. Da die `unsafe-inline` und `unsafe-eval` Direktiven nicht gesetzt sind, werden Inline-Skripte blockiert.

```http
Content-Security-Policy: default-src https:
```

Die gleichen Einschränkungen können mit dem HTML {{htmlelement("meta")}} Element angewendet werden.

```html
<meta http-equiv="Content-Security-Policy" content="default-src https:" />
```

### Inline-Code und HTTPS-Ressourcen zulassen, aber Plugins deaktivieren

Diese Richtlinie könnte auf einer bestehenden Website verwendet werden, die zu viel Inline-Code verwendet, um diese zu korrigieren, um sicherzustellen, dass Ressourcen nur über HTTPS geladen werden und Plugins zu deaktivieren:

```http
Content-Security-Policy: default-src https: 'unsafe-eval' 'unsafe-inline'; object-src 'none'
```

### Verstöße beim Testen melden, aber nicht erzwingen

Dieses Beispiel setzt die gleichen Einschränkungen wie das vorherige Beispiel, jedoch unter Verwendung des {{httpheader("Content-Security-Policy-Report-Only")}} Headers und der {{CSP("report-to")}} Direktive. Dieser Ansatz wird während des Testens verwendet, um Verstöße zu melden, aber nicht um Code daran zu hindern, ausgeführt zu werden.

Endpunkte (URLs), an die Berichte gesendet werden, sind in dem {{HTTPHeader("Reporting-Endpoints")}} HTTP-Antwort-Header definiert.

```http
Reporting-Endpoints: csp-endpoint="https://example.com/csp-reports"
```

Ein bestimmter Endpunkt wird dann in der CSP-Richtlinie als Zielbericht mit der {{CSP("report-to")}} Direktive ausgewählt.

```http
Content-Security-Policy-Report-Only: default-src https:; report-uri /csp-violation-report-url/; report-to csp-endpoint
```

Beachten Sie, dass die {{CSP("report-uri")}} {{deprecated_inline}} Direktive oben ebenfalls angegeben ist, da `report-to` noch nicht breit von Browsern unterstützt wird.

Siehe [Content Security Policy (CSP) Implementierung](/de/docs/Web/Security/Practical_implementation_guides/CSP) für weitere Beispiele.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTTPHeader("Content-Security-Policy-Report-Only")}}
- [Erfahren Sie mehr über: Content Security Policy](/de/docs/Web/HTTP/Guides/CSP)
- [Content Security in WebExtensions](/de/docs/Mozilla/Add-ons/WebExtensions/Content_Security_Policy)
- [Erlangung einer strengen Richtlinie](https://csp.withgoogle.com/docs/strict-csp.html)
- [CSP Evaluator](https://github.com/google/csp-evaluator) - Bewerten Sie Ihre Content-Sicherheitsrichtlinie
