---
title: Content-Security-Policy (CSP) header
short-title: Content-Security-Policy
slug: Web/HTTP/Reference/Headers/Content-Security-Policy
l10n:
  sourceCommit: 6720d579bd658f02c56363805e97e69f93dc79f1
---

Der HTTP **`Content-Security-Policy`** Antwort-Header ermöglicht es Website-Administratoren, die Ressourcen zu kontrollieren, die der User-Agent für eine gegebene Seite laden darf. Mit wenigen Ausnahmen beinhalten Richtlinien größtenteils die Spezifikation von Serverursprüngen und Skriptendpunkten. Dies hilft, {{Glossary("cross-site_scripting", "Cross-Site-Scripting")}}-Angriffe zu verhindern.

Verstöße können mithilfe der [Reporting API](/de/docs/Web/API/Reporting_API) gemeldet werden. Berichte können auf der Seite, für die die Richtlinie durchgesetzt wird, beobachtet werden, indem ein [`ReportingObserver`](/de/docs/Web/API/ReportingObserver) verwendet wird, und an Serverendpunkte gesendet werden, die in einem {{HTTPHeader("Reporting-Endpoints")}} HTTP-Antwort-Header definiert und ausgewählt werden, indem die CSP-Direktive {{CSP("report-to")}} verwendet wird. Weitere Informationen finden Sie unter [`CSPViolationReport`](/de/docs/Web/API/CSPViolationReport).

Siehe den [Content Security Policy (CSP)](/de/docs/Web/HTTP/Guides/CSP) Leitfaden für Details, wie eine CSP an den Browser übermittelt wird, wie sie aussieht, sowie Anwendungsfälle und Einsatzstrategien.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Response_header", "Antwort-Header")}}</td>
    </tr>
  </tbody>
</table>

## Syntax

```http
Content-Security-Policy: <policy-directive>; <policy-directive>
```

wobei `<policy-directive>` aus besteht: `<directive> <value>` ohne interne Zeichensetzung.

## Direktiven

### Fetch-Direktiven

Fetch-Direktiven kontrollieren die Orte, von denen bestimmte Ressourcentypen geladen werden dürfen.

- {{CSP("child-src")}}
  - : Definiert die gültigen Quellen für [Web Worker](/de/docs/Web/API/Web_Workers_API) und verschachtelte Browsing-Kontexte, die mit Elementen wie {{HTMLElement("frame")}} und {{HTMLElement("iframe")}} geladen werden.

  [Fallback](#fallbacks) für `frame-src` und `worker-src`.

- {{CSP("connect-src")}}
  - : Beschränkt die URLs, die mit Skripten geladen werden können.
- {{CSP("default-src")}}
  - : Dient als Fallback für die anderen {{Glossary("Fetch_directive", "Fetch-Direktiven")}}.

  [Fallback](#fallbacks) für alle anderen Fetch-Direktiven.

- {{CSP("fenced-frame-src")}} {{experimental_inline}}
  - : Gibt gültige Quellen für verschachtelte Browsing-Kontexte an, die in {{HTMLElement("fencedframe")}}-Elemente geladen werden.
- {{CSP("font-src")}}
  - : Gibt gültige Quellen für Schriften an, die mit {{cssxref("@font-face")}} geladen werden.
- {{CSP("frame-src")}}
  - : Gibt gültige Quellen für verschachtelte Browsing-Kontexte an, die in Elemente wie {{HTMLElement("frame")}} und {{HTMLElement("iframe")}} geladen werden.
- {{CSP("img-src")}}
  - : Gibt gültige Quellen für Bilder und Favicons an.
- {{CSP("manifest-src")}}
  - : Gibt gültige Quellen für Anwendungsmanifest-Dateien an.
- {{CSP("media-src")}}
  - : Gibt gültige Quellen für Medien an, die mit den Elementen {{HTMLElement("audio")}}, {{HTMLElement("video")}} und {{HTMLElement("track")}} geladen werden.
- {{CSP("object-src")}}
  - : Gibt gültige Quellen für die Elemente {{HTMLElement("object")}} und {{HTMLElement("embed")}} an.
- {{CSP("prefetch-src")}} {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Gibt gültige Quellen an, die vorab geladen oder vorbereitet werden sollen.
- {{CSP("script-src")}}
  - : Gibt gültige Quellen für JavaScript- und WebAssembly-Ressourcen an.

  [Fallback](#fallbacks) für `script-src-elem` und `script-src-attr`.

- {{CSP("script-src-elem")}}
  - : Gibt gültige Quellen für JavaScript {{HTMLElement("script")}}-Elemente an.
- {{CSP("script-src-attr")}}
  - : Gibt gültige Quellen für JavaScript Inline-Event-Handler an.
- {{CSP("style-src")}}
  - : Gibt gültige Quellen für Stylesheets an.

  [Fallback](#fallbacks) für `style-src-elem` und `style-src-attr`.

- {{CSP("style-src-elem")}}
  - : Gibt gültige Quellen für Stylesheets {{HTMLElement("style")}}-Elemente und {{HTMLElement("link")}}-Elemente mit `rel="stylesheet"` an.
- {{CSP("style-src-attr")}}
  - : Gibt gültige Quellen für Inline-Stile an, die auf einzelne DOM-Elemente angewendet werden.
- {{CSP("worker-src")}}
  - : Gibt gültige Quellen für [`Worker`](/de/docs/Web/API/Worker), [`SharedWorker`](/de/docs/Web/API/SharedWorker) oder [`ServiceWorker`](/de/docs/Web/API/ServiceWorker)-Skripte an.

Alle Fetch-Direktiven können mit dem einzelnen Wert `'none'` angegeben werden, was bedeutet, dass der spezifische Ressourcentyp vollständig blockiert wird, oder als ein oder mehrere _Source-Expression_-Werte, die gültige Quellen für diesen Ressourcentyp angeben. Siehe [Fetch-Direktiven-Syntax](#fetch-direktiven-syntax) für weitere Details.

#### Fallbacks

Einige Fetch-Direktiven fungieren als Fallbacks für andere, detailliertere Direktiven. Das bedeutet, dass, wenn die detailliertere Direktive nicht angegeben ist, dann der Fallback verwendet wird, um eine Richtlinie für diesen Ressourcentyp bereitzustellen.

- `default-src` ist ein Fallback für alle anderen Fetch-Direktiven.
- `script-src` ist ein Fallback für `script-src-attr` und `script-src-elem`.
- `style-src` ist ein Fallback für `style-src-attr` und `style-src-elem`.
- `child-src` ist ein Fallback für `frame-src` und `worker-src`.

Zum Beispiel:

- Wenn `img-src` ausgelassen wird, aber `default-src` enthalten ist, dann wird die von `default-src` definierte Richtlinie auf Bilder angewendet.
- Wenn `script-src-elem` ausgelassen wird, aber `script-src` enthalten ist, dann wird die von `script-src` definierte Richtlinie auf `<script>`-Elemente angewendet.
- Wenn sowohl `script-src-elem` als auch `script-src` weggelassen werden, aber `default-src` enthalten ist, dann wird die von `default-src` definierte Richtlinie auf `<script>`-Elemente angewendet.

### Dokument-Direktiven

Dokument-Direktiven regeln die Eigenschaften eines Dokuments oder [Worker](/de/docs/Web/API/Web_Workers_API)-Umfeldes, auf das eine Richtlinie
zutrifft.

- {{CSP("base-uri")}}
  - : Beschränkt die URLs, die in einem {{HTMLElement("base")}}-Element eines Dokuments verwendet werden können.
- {{CSP("sandbox")}}
  - : Aktiviert eine Sandbox für die angeforderte Ressource, ähnlich dem
    {{HTMLElement("iframe")}} [`sandbox`](/de/docs/Web/HTML/Reference/Elements/iframe#sandbox)-Attribut.

### Navigations-Direktiven

Navigations-Direktiven regeln, zu welchen Orten ein Nutzer navigieren oder ein Formular senden kann,
zum Beispiel.

- {{CSP("form-action")}}
  - : Beschränkt die URLs, die als Ziel einer Formularübermittlung aus einem gegebenen Kontext verwendet werden können.
- {{CSP("frame-ancestors")}}
  - : Gibt gültige Eltern an, die eine Seite mit {{HTMLElement("frame")}},
    {{HTMLElement("iframe")}}, {{HTMLElement("object")}} oder {{HTMLElement("embed")}} einbetten dürfen.

### Bericht-Direktiven

Bericht-Direktiven steuern die Ziel-URL für CSP-Verstoßberichte in `Content-Security-Policy` und {{HTTPHeader("Content-Security-Policy-Report-Only")}}.

- {{CSP("report-to")}}
  - : Stellt dem Browser ein Token zur Verfügung, das den Berichtsendpunkt oder die Gruppe von Endpunkten identifiziert, an die Informationen über CSP-Verstöße gesendet werden sollen.
    Die Endpunkte, die das Token darstellt, werden über andere HTTP-Header bereitgestellt, wie {{HTTPHeader("Reporting-Endpoints")}} und {{HTTPHeader("Report-To")}} {{deprecated_inline}}.

    > [!WARNING]
    > Diese Direktive soll [`report-uri`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/report-uri) ersetzen; in Browsern, die `report-to` unterstützen, wird die `report-uri`-Direktive ignoriert.
    > Solange `report-to` jedoch nicht weit verbreitet unterstützt wird, sollten Sie beide Header wie gezeigt angeben (wobei `endpoint_name` der Name eines separat bereitgestellten Endpunkts ist):
    >
    > ```http
    > Content-Security-Policy: …; report-uri https://endpoint.example.com; report-to endpoint_name
    > ```

### Andere Direktiven

- {{CSP("require-trusted-types-for")}}
  - : Erzwingt [Trusted Types](/de/docs/Web/API/Trusted_Types_API) an den DOM XSS-Injektionssenken.
- {{CSP("trusted-types")}}
  - : Wird verwendet, um eine Positivliste von [Trusted Types](/de/docs/Web/API/Trusted_Types_API)-Richtlinien zu spezifizieren.
    Trusted Types ermöglichen es Anwendungen, DOM XSS-Injektionssenken so zu sperren, dass sie nur nicht fälschbare, typisierte Werte anstelle von Zeichenfolgen akzeptieren.
- {{CSP("upgrade-insecure-requests")}}
  - : Weist Benutzeragenten an, alle unsicheren URLs einer Website (die über HTTP bedient werden) so zu behandeln, als wären sie durch sichere URLs (die über HTTPS bedient werden) ersetzt worden.
    Diese Direktive ist für Webseiten gedacht, die eine große Anzahl unsicherer alter URLs haben, die umgeschrieben werden müssen.

### Veraltete Direktiven

- {{CSP("block-all-mixed-content")}} {{deprecated_inline}}
  - : Verhindert das Laden von Vermögenswerten über HTTP, wenn die Seite mit HTTPS geladen wird.

- {{CSP("report-uri")}} {{deprecated_inline}}
  - : Stellt dem Browser eine URL zur Verfügung, an die CSP-Verstoßberichte gesendet werden sollen.
    Diese wurde von der [`report-to`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/report-to)-Direktive ersetzt.

## Fetch-Direktiven-Syntax

Alle Fetch-Direktiven können als einer der folgenden angegeben werden:

- der einzelne Wert `'none'`, was bedeutet, dass der spezifische Ressourcentyp vollständig blockiert wird
- ein oder mehrere _Source-Expression_-Werte, die gültige Quellen für diesen Ressourcentyp angeben.

Jede Source-Expression nimmt eine der unten aufgeführten Formen an. Beachten Sie, dass nicht alle Formen für alle Fetch-Direktiven zutreffen: siehe die Dokumentation für jede Fetch-Direktive, um herauszufinden, welche Formen für sie zutreffen.

Die `<host-source>` und `<scheme-source>` Formate müssen ohne Anführungszeichen sein, und alle anderen Formate müssen in einfache Anführungszeichen eingeschlossen werden.

### 'nonce-\<nonce_value>'

Dieser Wert besteht aus dem String `nonce-` gefolgt von einem {{Glossary("Nonce", "Nonce")}}-Wert. Der Nonce-Wert kann beliebige Zeichen aus {{Glossary("Base64#base64_characters", "Base64")}} oder {{Glossary("Base64#url_and_filename_safe_base64", "URL-sicherem Base64")}} verwenden.

Dieser String ist ein Zufallswert, den der Server für jede HTTP-Antwort generiert. Zum Beispiel:

```plain
'nonce-416d1177-4d12-4e3b-b7c9-f6c409789fb8'
```

Der Server kann dann denselben Wert als Wert des `nonce`-Attributs für alle {{htmlelement("script")}} oder {{htmlelement("style")}} Ressourcen einfügen, die er aus dem Dokument laden möchte.

Der Browser vergleicht den Wert aus der CSP-Direktive mit dem Wert im Element-Attribut und lädt die Ressource nur, wenn sie übereinstimmen.

Wenn eine Direktive einen Nonce und `unsafe-inline` enthält, ignoriert der Browser `unsafe-inline`.

Siehe [Nonces](/de/docs/Web/HTTP/Guides/CSP#nonces) im CSP-Leitfaden für mehr Informationen zur Verwendung.

> [!NOTE]
> Nonce-Quellausdrücke sind nur für {{htmlelement("script")}} und {{htmlelement("style")}} Elemente anwendbar.

### '\<hash_algorithm>-<hash_value>'

Dieser Wert besteht aus einem String, der einen Hash-Algorithmus identifiziert, gefolgt von `-`, gefolgt von einem Hash-Wert. Der Hash-Wert kann beliebige Zeichen aus {{Glossary("Base64#base64_characters", "Base64")}} oder {{Glossary("Base64#url_and_filename_safe_base64", "URL-sicherem Base64")}} verwenden.

- Der Hash-Algorithmus-Identifikator muss einer von `sha256`, `sha384` oder `sha512` sein.
- Der Hash-Wert ist der Base64-kodierte {{Glossary("hash_function", "Hash")}} einer `<script>` oder `<style>` Ressource, berechnet mit einer der folgenden Hash-Funktionen: SHA-256, SHA-384 oder SHA-512.

Zum Beispiel:

```plain
'sha256-cd9827ad...'
```

Wenn der Browser das Dokument empfängt, hashiert er den Inhalt aller `<script>`- und `<style>`-Elemente, vergleicht das Ergebnis mit allen Hashes in der CSP-Direktive und lädt die Ressource nur, wenn es eine Übereinstimmung gibt.

Wenn das Element eine externe Ressource lädt (zum Beispiel durch das [`src`](/de/docs/Web/HTML/Reference/Elements/script#src)-Attribut), muss das Element auch das [`integrity`](/de/docs/Web/HTML/Reference/Elements/script#integrity)-Attribut gesetzt haben.

Wenn eine Direktive einen Hash und `unsafe-inline` enthält, ignoriert der Browser `unsafe-inline`.

Siehe [Hashes](/de/docs/Web/HTTP/Guides/CSP#hashes) im CSP-Leitfaden für mehr Informationen zur Verwendung.

> [!NOTE]
> Hash-Quellausdrücke sind nur für {{htmlelement("script")}} und {{htmlelement("style")}} Elemente anwendbar.

### \<host-source>

Die [URL](/de/docs/Web/URI) oder die IP-Adresse eines {{Glossary("host", "Hosts")}}, der eine gültige Quelle für die Ressource ist.

Das Schema, die Portnummer und der Pfad sind optional.

Wenn das Schema ausgelassen wird, wird das Schema des Ursprungs des Dokuments verwendet.

Bei der Übereinstimmung von Schemata sind sichere Upgrades erlaubt. Zum Beispiel:

- `http://example.com` wird auch Ressourcen von `https://example.com` zulassen
- `ws://example.org` wird auch Ressourcen von `wss://example.org` zulassen.

Platzhalter (`'*'`) können für Subdomains, Hostadressen und Portnummern verwendet werden, was bedeutet, dass alle legalen Werte von jedem gültig sind. Zum Beispiel:

- `http://*.example.com` erlaubt Ressourcen von jeder Subdomain von `example.com`, über HTTP oder HTTPS.

Pfade, die mit `/` enden, passen zu jedem Pfad, den sie ein Präfix bilden. Zum Beispiel:

- `example.com/api/` erlaubt Ressourcen von `example.com/api/users/new`.

Pfade, die nicht mit `/` enden, werden genau abgeglichen. Zum Beispiel:

- `https://example.com/file.js` erlaubt Ressourcen von `https://example.com/file.js`, aber nicht `https://example.com/file.js/file2.js`.

### \<scheme-source>

Ein [Schema](/de/docs/Web/URI/Reference/Schemes), wie `https:`. Der Doppelpunkt ist erforderlich.

Sichere Upgrades sind erlaubt, so dass:

- `http:` wird auch Ressourcen erlauben, die über HTTPS geladen werden
- `ws:` wird auch Ressourcen erlauben, die über WSS geladen werden.

### 'self'

Ressourcen des angegebenen Typs dürfen nur vom selben {{Glossary("origin", "Ursprung")}} wie das Dokument geladen werden.

Sichere Upgrades sind erlaubt. Zum Beispiel:

- Wenn das Dokument von `http://example.com` bedient wird, wird eine CSP von `'self'` auch Ressourcen von `https://example.com` zulassen.
- Wenn das Dokument von `ws://example.org` bedient wird, wird eine CSP von `'self'` auch Ressourcen von `wss://example.org` zulassen.

### 'trusted-types-eval'

Standardmäßig, wenn eine CSP eine `default-src` oder eine `script-src` Direktive enthält, werden JavaScript-Funktionen, die ihre Argumente als JavaScript auswerten, deaktiviert. Dies schließt [`eval()`](/de/docs/Web/JavaScript/Reference/Global_Objects/eval), das [`code`](/de/docs/Web/API/Window/setTimeout#code) Argument für [`setTimeout()`](/de/docs/Web/API/Window/setTimeout), oder den {{jsxref("Function/Function()", "Function()")}} Konstruktor ein.

Das `trusted-types-eval` Schlüsselwort kann verwendet werden, um diesen Schutz aufzuheben, aber nur, wenn [Trusted Types](/de/docs/Web/API/Trusted_Types_API) durchgesetzt werden und anstelle von Zeichenfolgen an diese Funktionen übergeben werden. Dies ermöglicht die dynamische Auswertung von Zeichenfolgen als JavaScript, jedoch nur, nachdem Eingaben durch eine Transformationsfunktion geleitet wurden, bevor sie injiziert werden, die die Möglichkeit zum [Bereinigen](/de/docs/Web/Security/Attacks/XSS#sanitization) der Eingabe hat, um potenziell gefährliches Markup zu entfernen.

Das `trusted-types-eval` muss anstelle von [`'unsafe-eval'`](#unsafe-eval) verwendet werden, wenn diese Methoden mit Trusted Types genutzt werden. Dies stellt sicher, dass der Zugriff auf die Methoden in Browsern blockiert wird, die Trusted Types nicht unterstützen.

> [!NOTE]
> Entwickler sollten die Verwendung von `trusted-types-eval` oder dieser Methoden vermeiden, es sei denn, dies ist absolut notwendig. Trusted Types stellen sicher, dass die Eingabe durch eine Transformationsfunktion geleitet wird – sie stellen nicht sicher, dass die Transformation die Eingabe sicher macht (und dies kann sehr schwierig richtig zu machen sein).

Siehe [`eval()` und ähnliche APIs](/de/docs/Web/HTTP/Guides/CSP#eval_and_similar_apis) im CSP-Leitfaden für mehr Informationen zur Verwendung.

### 'unsafe-eval'

Standardmäßig, wenn eine CSP eine `default-src` oder eine `script-src` Direktive enthält, werden JavaScript-Funktionen, die ihre Argumente als JavaScript auswerten, deaktiviert. Dies schließt [`eval()`](/de/docs/Web/JavaScript/Reference/Global_Objects/eval), das [`code`](/de/docs/Web/API/Window/setTimeout#code) Argument für [`setTimeout()`](/de/docs/Web/API/Window/setTimeout), oder den {{jsxref("Function/Function()", "Function()")}} Konstruktor ein.

Das `unsafe-eval` Schlüsselwort kann verwendet werden, um diesen Schutz aufzuheben und die dynamische Auswertung von Zeichenfolgen als JavaScript zu ermöglichen.

> [!WARNING]
> Entwickler sollten `'unsafe-eval'` vermeiden, da dies einen Großteil des Zwecks einer CSP zunichte macht. ['trusted-types-eval'](#trusted-types-eval) bietet eine "potenziell" sicherere Alternative, wenn die Verwendung dieser Methoden notwendig ist.

Siehe [`eval()` und ähnliche APIs](/de/docs/Web/HTTP/Guides/CSP#eval_and_similar_apis) im CSP-Leitfaden für mehr Informationen zur Verwendung.

### 'wasm-unsafe-eval'

Standardmäßig, wenn eine CSP eine `default-src` oder eine `script-src` Direktive enthält, wird eine Seite nicht erlaubt, WebAssembly mit Funktionen wie [`WebAssembly.compileStreaming()`](/de/docs/WebAssembly/Reference/JavaScript_interface/compileStreaming_static) zu kompilieren.

Das `wasm-unsafe-eval` Schlüsselwort kann verwendet werden, um diesen Schutz aufzuheben. Dies ist eine viel sicherere Alternative zu `'unsafe-eval'`, da es die allgemeine Auswertung von JavaScript nicht ermöglicht.

### 'unsafe-inline'

Standardmäßig, wenn eine CSP eine `default-src` oder eine `script-src` Direktive enthält, wird Inline-JavaScript nicht ausgeführt. Dies schließt ein:

- Inline `<script>` Tags
- Inline-Event-Handler-Attribute
- `javascript:` URLs.

Ebenso, wenn eine CSP eine `default-src` oder eine `style-src` Direktive enthält, wird Inline-CSS nicht geladen, einschließlich:

- Inline `<style>` Tags
- [`style`](/de/docs/Web/API/HTMLElement/style) Attribute.

Das `unsafe-inline` Schlüsselwort kann verwendet werden, um diesen Schutz aufzuheben und alle diese Formen zu laden.

> [!WARNING]
> Entwickler sollten `'unsafe-inline'` vermeiden, da es einen Großteil des Zwecks einer CSP zunichte macht.

Siehe [Inline JavaScript](/de/docs/Web/HTTP/Guides/CSP#inline_javascript) im CSP-Leitfaden für mehr Informationen zur Verwendung.

### 'unsafe-hashes'

Standardmäßig, wenn eine CSP eine `default-src` oder eine `script-src` Direktive enthält, sind Inline-Event-Handler-Attribute wie `onclick` und Inline-`style`-Attribute nicht ausführbar.

Die `'unsafe-hashes'` Expression erlaubt es dem Browser, [Hash-Ausdrücke](#hash_algorithm-hash_value) für Inline-Event-Handler und `style` Attribute zu verwenden. Zum Beispiel könnte eine CSP eine Direktive wie diese enthalten:

```http
script-src 'unsafe-hashes' 'sha256-cd9827ad...'
```

Wenn der Hash-Wert mit dem Hash eines Inline-Event-Handler-Attributwerts oder eines `style`-Attributwerts übereinstimmt, wird der Code ausgeführt.

> [!WARNING]
> Der `'unsafe-hashes'` Wert ist unsicher.
>
> Insbesondere ermöglicht er einen Angriff, bei dem der Inhalt des Inline-Event-Handler-Attributs als Inline `<script>`-Element in das Dokument injiziert wird. Angenommen, der Inline-Event-Handler ist:
>
> ```html
> <button onclick="transferAllMyMoney()">Transfer all my money</button>
> ```
>
> Wenn ein Angreifer ein Inline `<script>`-Element mit diesem Code injizieren kann, wird die CSP es automatisch ausführen lassen.
>
> `'unsafe-hashes'` ist jedoch viel sicherer als `'unsafe-inline'`.

### 'inline-speculation-rules'

Standardmäßig, wenn eine CSP eine `default-src` oder eine `script-src` Direktive enthält, ist das Ausführen von Inline-JavaScript nicht erlaubt. `'inline-speculation-rules'` erlaubt es dem Browser, Inline `<script>`-Elemente zu laden, die ein [`type`](/de/docs/Web/HTML/Reference/Elements/script/type) Attribut von [`speculationrules`](/de/docs/Web/HTML/Reference/Elements/script/type/speculationrules) haben.

Siehe die [Speculation Rules API](/de/docs/Web/API/Speculation_Rules_API) für weitere Informationen.

### 'strict-dynamic'

Das `'strict-dynamic'` Schlüsselwort lässt das Vertrauen, das durch eine [Nonce](#nonce-nonce_value) oder einen [Hash](#hash_algorithm-hash_value) auf ein Skript übertragen wird, auf Skripte ausweiten, die dieses Skript dynamisch lädt, zum Beispiel durch Erstellen neuer `<script>`-Tags mit [`Document.createElement()`](/de/docs/Web/API/Document/createElement) und anschließendes Einfügen in das Dokument mit [`Node.appendChild()`](/de/docs/Web/API/Node/appendChild).

Wenn dieses Schlüsselwort in einer Direktive vorhanden ist, werden die folgenden Quellaufrufwerte alle ignoriert:

- [\<host-source>](#host-source)
- [\<scheme-source>](#scheme-source)
- [`'self'`](#self)
- [`'unsafe-inline'`](#unsafe-inline)

Siehe [Das `strict-dynamic` Schlüsselwort](/de/docs/Web/HTTP/Guides/CSP#the_strict-dynamic_keyword) im CSP-Leitfaden für mehr Informationen zur Verwendung.

### 'report-sample'

Wenn dieser Ausdruck in einer Direktive enthalten ist, die Skripte oder Stile steuert, und die Direktive dazu führt, dass der Browser jegliche Inline-Skripte, Inline-Stile oder Event-Handler-Attribute blockiert, enthält der [Violationsbericht](/de/docs/Web/HTTP/Guides/CSP#violation_reporting), den der Browser erstellt, eine [`sample`](/de/docs/Web/API/CSPViolationReport/sample) Eigenschaft, die die ersten 40 Zeichen der blockierten Ressource enthält.

## CSP in Workern

[Worker](/de/docs/Web/API/Worker) werden im Allgemeinen _nicht_ von der Content Security Policy des Dokuments (oder übergeordneten Workers) gesteuert, das sie erstellt hat. Um eine Content Security Policy für den Worker anzugeben, setzen Sie einen `Content-Security-Policy` Antwort-Header für die Anfrage, die das Worker-Skript selbst angefordert hat.

Die Ausnahme ist, wenn der Ursprung des Worker-Skripts ein global eindeutiges Identifikator ist (zum Beispiel, wenn seine URL ein Schema von Daten oder Blob hat). In diesem Fall erbt der Worker die Content Security Policy des Dokuments oder Workers, der ihn erstellt hat.

## Mehrere Content Security Policies

Der CSP-Mechanismus ermöglicht die Spezifikation mehrerer Richtlinien für eine Ressource, einschließlich über den `Content-Security-Policy` Header, den {{HTTPHeader("Content-Security-Policy-Report-Only")}} Header und ein {{HTMLElement("meta")}}-Element.

Sie können den `Content-Security-Policy` Header mehr als einmal verwenden, wie im unten stehenden Beispiel. Achten Sie besonders auf die {{CSP("connect-src")}} Direktive hier. Selbst wenn die zweite Richtlinie die Verbindung erlauben würde, enthält die erste Richtlinie `connect-src 'none'`. Das Hinzufügen zusätzlicher Richtlinien _kann nur weiter einschränken_ die Fähigkeiten der geschützten Ressource, was bedeutet, dass keine Verbindung erlaubt ist und, als die strengste Richtlinie, `connect-src 'none'` durchgesetzt wird.

```http
Content-Security-Policy: default-src 'self' http://example.com;
                          connect-src 'none';
Content-Security-Policy: connect-src http://example.com/;
                          script-src http://example.com/
```

## Beispiele

### Unsicherer Inline-Code deaktivieren und nur HTTPS-Ressourcen zulassen

Dieser HTTP-Header legt die Standardrichtlinie so fest, dass das Laden von Ressourcen (Bildern, Schriften, Skripten usw.) nur über HTTPS erlaubt ist. Da die Direktiven `unsafe-inline` und `unsafe-eval` nicht gesetzt sind, werden Inline-Skripte blockiert.

```http
Content-Security-Policy: default-src https:
```

Dieselben Beschränkungen können mithilfe des HTML {{htmlelement("meta")}}-Elements angewendet werden.

```html
<meta http-equiv="Content-Security-Policy" content="default-src https:" />
```

### Inline-Code und HTTPS-Ressourcen zulassen, aber Plugins deaktivieren

Diese Richtlinie könnte auf einer bestehenden Seite verwendet werden, die zu viel Inline-Code verwendet, um sie zu reparieren – um sicherzustellen, dass Ressourcen nur über HTTPS geladen werden und Plugins deaktiviert werden:

```http
Content-Security-Policy: default-src https: 'unsafe-eval' 'unsafe-inline'; object-src 'none'
```

### Verstöße melden, aber beim Testen nicht durchsetzen

Dieses Beispiel setzt dieselben Beschränkungen wie das vorherige Beispiel, verwendet jedoch den {{httpheader("Content-Security-Policy-Report-Only")}} Header und die {{CSP("report-to")}} Direktive. Dieser Ansatz wird während des Testens verwendet, um Verstöße zu melden, aber nicht das Ausführen von Code zu blockieren.

Endpunkte (URLs), an die Berichte gesendet werden, werden mithilfe des {{HTTPHeader("Reporting-Endpoints")}} HTTP-Antwort-Headers definiert.

```http
Reporting-Endpoints: csp-endpoint="https://example.com/csp-reports"
```

Ein bestimmter Endpunkt wird dann im CSP-Richtlinie als Berichtsziel mithilfe der {{CSP("report-to")}} Direktive ausgewählt.

```http
Content-Security-Policy-Report-Only: default-src https:; report-uri /csp-violation-report-url/; report-to csp-endpoint
```

Beachten Sie, dass die {{CSP("report-uri")}} {{deprecated_inline}}-Direktive oben ebenfalls angegeben ist, da `report-to` noch nicht weit verbreitet von Browsern unterstützt wird.

Siehe [Content Security Policy (CSP) Implementierung](/de/docs/Web/Security/Practical_implementation_guides/CSP) für mehr Beispiele.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTTPHeader("Content-Security-Policy-Report-Only")}}
- CSP {{CSP("report-to")}} Direktive
- {{httpheader("Reporting-Endpoints")}}
- [`CSPViolationReport`](/de/docs/Web/API/CSPViolationReport)
- [Reporting API](/de/docs/Web/API/Reporting_API).
- [Learn about: Content Security Policy](/de/docs/Web/HTTP/Guides/CSP)
- [Content Security in WebExtensions](/de/docs/Mozilla/Add-ons/WebExtensions/Content_Security_Policy)
- [Adopting a strict policy](https://csp.withgoogle.com/docs/strict-csp.html)
- [CSP Evaluator](https://github.com/google/csp-evaluator) - Evaluieren Sie Ihre Content-Security-Policy
