---
title: Content-Security-Policy (CSP) header
short-title: Content-Security-Policy
slug: Web/HTTP/Reference/Headers/Content-Security-Policy
l10n:
  sourceCommit: 4db798b6db5773ba5dd76511d60e151db65c320e
---

Der HTTP **`Content-Security-Policy`** Antwort-Header ermöglicht es Website-Administratoren, die Ressourcen zu kontrollieren, die ein Benutzeragent für eine bestimmte Seite laden darf. Mit einigen Ausnahmen handelt es sich bei den Richtlinien meist um die Angabe von Serverursprüngen und Skript-Endpunkten. Dies hilft, {{Glossary("cross-site_scripting", "Cross-Site-Scripting")}}-Angriffe abzuwehren.

Weitere Informationen darüber, wie eine CSP an den Browser übermittelt wird, wie sie aussieht und über Anwendungsfälle und Bereitstellungsstrategien finden Sie im [Content Security Policy (CSP)](/de/docs/Web/HTTP/Guides/CSP) Leitfaden.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
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

wobei `<policy-directive>` besteht aus:
`<directive> <value>` ohne interne Interpunktion.

## Richtlinien

### Fetch-Richtlinien

Fetch-Richtlinien steuern die Orte, von denen bestimmte Ressourcentypen geladen werden dürfen.

- {{CSP("child-src")}}
  - : Definiert die gültigen Quellen für [Web-Worker](/de/docs/Web/API/Web_Workers_API) und verschachtelte Browsing-Kontexte geladen mit Elementen wie
    {{HTMLElement("frame")}} und {{HTMLElement("iframe")}}.

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
  - : Gibt gültige Quellen für Anwendungsmanifestdateien an.

- {{CSP("media-src")}}
  - : Gibt gültige Quellen für das Laden von Medien unter Verwendung der {{HTMLElement("audio")}},
    {{HTMLElement("video")}} und {{HTMLElement("track")}} Elemente an.

- {{CSP("object-src")}}
  - : Gibt gültige Quellen für die {{HTMLElement("object")}}- und {{HTMLElement("embed")}}-Elemente an.

- {{CSP("prefetch-src")}} {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Gibt gültige Quellen an, die vorgeladen oder vorgemixt werden dürfen.

- {{CSP("script-src")}}
  - : Gibt gültige Quellen für JavaScript- und WebAssembly-Ressourcen an.

    [Fallback](#fallbacks) für `script-src-elem` und `script-src-attr`.

- {{CSP("script-src-elem")}}
  - : Gibt gültige Quellen für JavaScript {{HTMLElement("script")}}-Elemente an.

- {{CSP("script-src-attr")}}
  - : Gibt gültige Quellen für JavaScript-Inline-Event-Handler an.

- {{CSP("style-src")}}
  - : Gibt gültige Quellen für Stylesheets an.

    [Fallback](#fallbacks) für `style-src-elem` und `style-src-attr`.

- {{CSP("style-src-elem")}}
  - : Gibt gültige Quellen für Stylesheets {{HTMLElement("style")}}-Elemente und
    {{HTMLElement("link")}}-Elemente mit `rel="stylesheet"` an.

- {{CSP("style-src-attr")}}
  - : Gibt gültige Quellen für Inline-Styles an, die auf einzelne DOM-Elemente angewendet werden.

- {{CSP("worker-src")}}
  - : Gibt gültige Quellen für [`Worker`](/de/docs/Web/API/Worker), [`SharedWorker`](/de/docs/Web/API/SharedWorker) oder
    [`ServiceWorker`](/de/docs/Web/API/ServiceWorker)-Skripts an.

Alle Fetch-Richtlinien können als einzelner Wert `'none'` angegeben werden, was bedeutet, dass der spezifische Ressourcentyp vollständig blockiert werden soll, oder als ein oder mehrere _source expression_-Werte, die gültige Quellen für diesen Ressourcentyp angeben. Siehe [Fetch-Richtlinien-Syntax](#fetch-richtlinien-syntax) für mehr Details.

#### Fallbacks

Einige Fetch-Richtlinien fungieren als Fallbacks für andere, granularere Richtlinien. Dies bedeutet, dass, wenn die granularere Richtlinie nicht angegeben ist, der Fallback verwendet wird, um eine Richtlinie für diesen Ressourcentyp bereitzustellen.

- `default-src` ist ein Fallback für alle anderen Fetch-Richtlinien.
- `script-src` ist ein Fallback für `script-src-attr` und `script-src-elem`.
- `style-src` ist ein Fallback für `style-src-attr` und `style-src-elem`.
- `child-src` ist ein Fallback für `frame-src` und `worker-src`.

Zum Beispiel:

- Wenn `img-src` weggelassen wird, aber `default-src` enthalten ist, wird die von `default-src` festgelegte Richtlinie auf Bilder angewendet.
- Wenn `script-src-elem` weggelassen wird, aber `script-src` enthalten ist, wird die von `script-src` festgelegte Richtlinie auf `<script>`-Elemente angewendet.
- Wenn `script-src-elem` und `script-src` beide weggelassen werden, aber `default-src` enthalten ist, wird die von `default-src` festgelegte Richtlinie auf `<script>`-Elemente angewendet.

### Dokumentenrichtlinien

Dokumentenrichtlinien regeln die Eigenschaften eines Dokuments oder der [Worker](/de/docs/Web/API/Web_Workers_API)-Umgebung, auf die eine Richtlinie zutrifft.

- {{CSP("base-uri")}}
  - : Beschränkt die URLs, die im {{HTMLElement("base")}}-Element eines Dokuments verwendet werden können.

- {{CSP("sandbox")}}
  - : Aktiviert einen Sandbox-Modus für die angeforderte Ressource, ähnlich dem
    {{HTMLElement("iframe")}} [`sandbox`](/de/docs/Web/HTML/Reference/Elements/iframe#sandbox) Attribut.

### Navigationsrichtlinien

Navigationsrichtlinien regeln, zu welchen Orten ein Benutzer navigieren oder ein Formular übermitteln kann,
zum Beispiel.

- {{CSP("form-action")}}
  - : Beschränkt die URLs, die als Ziel von Formularübermittlungen aus einem
    gegebenen Kontext verwendet werden können.

- {{CSP("frame-ancestors")}}
  - : Gibt gültige übergeordnete Elemente an, die eine Seite mit {{HTMLElement("frame")}},
    {{HTMLElement("iframe")}}, {{HTMLElement("object")}} oder {{HTMLElement("embed")}} einbetten dürfen.

### Bericht-Richtlinien

Bericht-Richtlinien steuern die Ziel-URL für CSP-Verletzungsberichte in `Content-Security-Policy` und {{HTTPHeader("Content-Security-Policy-Report-Only")}}.

- {{CSP("report-to")}}
  - : Stellt dem Browser ein Token zur Identifizierung des Berichterstattungsendpunkts oder der Endpunktgruppe bereit, an die CSP-Verletzungsinformationen gesendet werden sollen.
    Die durch das Token repräsentierten Endpunkte werden durch andere HTTP-Header bereitgestellt, wie zum Beispiel {{HTTPHeader("Reporting-Endpoints")}} und {{HTTPHeader("Report-To")}} {{deprecated_inline}}.

    > [!WARNING]
    > Diese Richtlinie soll [`report-uri`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/report-uri) ersetzen; in Browsern, die `report-to` unterstützen, wird die `report-uri`-Richtlinie ignoriert.
    > Bis `report-to` jedoch weit unterstützt wird, sollten Sie beide Header angeben, wie gezeigt (wobei `endpoint_name` der Name eines separat bereitgestellten Endpunkts ist):
    >
    > ```http
    > Content-Security-Policy: …; report-uri https://endpoint.example.com; report-to endpoint_name
    > ```

### Andere Richtlinien

- {{CSP("require-trusted-types-for")}}
  - : Erzwingt [Trusted Types](/de/docs/Web/API/Trusted_Types_API) an den DOM-XSS-Injektionsstellen.

- {{CSP("trusted-types")}}
  - : Wird verwendet, um eine Positivliste von [Trusted Types](/de/docs/Web/API/Trusted_Types_API)-Richtlinien anzugeben.
    Trusted Types ermöglichen es Anwendungen, DOM-XSS-Injektionsstellen so zu sichern, dass nur nicht fälschbare, typisierte Werte anstelle von Zeichenfolgen akzeptiert werden.

- {{CSP("upgrade-insecure-requests")}}
  - : Weist Benutzeragenten an, alle unsicheren URLs einer Site (die über HTTP bereitgestellt werden), als ob sie durch sichere URLs (die über HTTPS bereitgestellt werden) ersetzt worden seien, zu behandeln.
    Diese Richtlinie ist für Websites vorgesehen, die eine große Anzahl unsicherer Legacy-URLs haben, die umgeschrieben werden müssen.

### Veraltete Richtlinien

- {{CSP("block-all-mixed-content")}} {{deprecated_inline}}
  - : Verhindert das Laden von Assets über HTTP, wenn die Seite über HTTPS geladen wird.

- {{CSP("report-uri")}} {{deprecated_inline}}
  - : Stellt dem Browser eine URL bereit, an die CSP-Verletzungsberichte gesendet werden sollen.
    Dies wurde durch die [`report-to`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/report-to) Richtlinie ersetzt.

## Fetch-Richtlinien-Syntax

Alle Fetch-Richtlinien können als eine der folgenden angegeben werden:

- der einzelne Wert `'none'`, was bedeutet, dass der spezifische Ressourcentyp vollständig blockiert werden soll
- ein oder mehrere _source expression_-Werte, die gültige Quellen für diesen Ressourcentyp angeben.

Jeder Quellausdruck nimmt eine der unten aufgeführten Formen an. Beachten Sie, dass nicht alle Formen für alle Fetch-Richtlinien anwendbar sind: siehe die Dokumentation für jede Fetch-Richtlinie, um herauszufinden, welche Formen anwendbar sind.

Die Formate `<host-source>` und `<scheme-source>` müssen unquoted sein, und alle anderen Formate müssen in einfache Anführungszeichen eingeschlossen werden.

### 'nonce-\<nonce_value>'

Dieser Wert besteht aus der Zeichenfolge `nonce-`, gefolgt von einem Nonce-Wert. Der Nonce-Wert kann alle Zeichen aus {{Glossary("Base64#base64_characters", "Base64")}} oder {{Glossary("Base64#url_and_filename_safe_base64", "URL-sicheres Base64")}} verwenden.

Diese Zeichenkette ist ein zufälliger Wert, den der Server für jede HTTP-Antwort generiert. Zum Beispiel:

```plain
'nonce-416d1177-4d12-4e3b-b7c9-f6c409789fb8'
```

Der Server kann dann denselben Wert als den Wert des `nonce`-Attributs eines beliebigen {{htmlelement("script")}}- oder {{htmlelement("style")}}-Ressourcen einschließen, die er aus dem Dokument laden möchte.

Der Browser vergleicht den Wert aus der CSP-Richtlinie mit dem Wert im Element-Attribut und lädt die Ressource nur, wenn sie übereinstimmen.

Wenn eine Richtlinie einen Nonce und `unsafe-inline` enthält, ignoriert der Browser `unsafe-inline`.

Siehe [Nonces](/de/docs/Web/HTTP/Guides/CSP#nonces) im CSP-Leitfaden für weitere Nutzungsinformationen.

> [!NOTE]
> Nonce-Quellausdrücke sind nur auf {{htmlelement("script")}}- und {{htmlelement("style")}}-Elemente anwendbar.

### '\<hash_algorithm>-<hash_value>'

Dieser Wert besteht aus einer Zeichenfolge, die einen Hash-Algorithmus identifiziert, gefolgt von `-`, gefolgt von einem Hash-Wert. Der Hash-Wert kann alle Zeichen aus {{Glossary("Base64#base64_characters", "Base64")}} oder {{Glossary("Base64#url_and_filename_safe_base64", "URL-sicheres Base64")}} verwenden.

- Der Hash-Algorithmus-Identifikator muss entweder `sha256`, `sha384` oder `sha512` sein.
- Der Hash-Wert ist der base64-kodierte {{Glossary("hash_function", "Hash")}} einer `<script>`- oder `<style>`-Ressource, die unter Verwendung einer der folgenden Hash-Funktionen berechnet wurde: SHA-256, SHA-384 oder SHA-512.

Zum Beispiel:

```plain
'sha256-cd9827ad...'
```

Wenn der Browser das Dokument erhält, hasht es den Inhalt etwaiger `<script>`- und `<style>`-Elemente, vergleicht das Ergebnis mit eventuellen Hashes in der CSP-Richtlinie, und lädt die Ressource nur, wenn eine Übereinstimmung vorliegt.

Wenn das Element eine externe Ressource lädt (beispielsweise unter Verwendung des [`src`](/de/docs/Web/HTML/Reference/Elements/script#src)-Attributs), dann muss das Element auch das [`integrity`](/de/docs/Web/HTML/Reference/Elements/script#integrity)-Attribut setzen.

Wenn eine Richtlinie einen Hash und `unsafe-inline` enthält, ignoriert der Browser `unsafe-inline`.

Siehe [Hashes](/de/docs/Web/HTTP/Guides/CSP#hashes) im CSP-Leitfaden für weitere Nutzungsinformationen.

> [!NOTE]
> Hash-Quellausdrücke sind nur auf {{htmlelement("script")}}- und {{htmlelement("style")}}-Elemente anwendbar.

### \<host-source>

Die [URL](/de/docs/Web/URI) oder IP-Adresse eines {{Glossary("host", "Hosts")}}, die als eine gültige Quelle für die Ressource gilt.

Das Schema, die Portnummer und der Pfad sind optional.

Wenn das Schema weggelassen wird, wird das Schema des Ursprungs des Dokuments verwendet.

Beim Abgleichen von Schemas sind sichere Upgrades erlaubt. Zum Beispiel:

- `http://example.com` lässt auch Ressourcen von `https://example.com` zu
- `ws://example.org` lässt auch Ressourcen von `wss://example.org` zu.

Sternchen (`'*'`) können für Subdomains, Host-Adressen und Portnummern verwendet werden, um anzugeben, dass alle rechtlich zulässigen Werte dafür gültig sind. Zum Beispiel:

- `http://*.example.com` erlaubt Ressourcen von jeder Subdomain von `example.com` über HTTP oder HTTPS.

Pfadendungen mit `/` stimmen mit jedem Pfad überein, der ein Präfix von ihnen ist. Zum Beispiel:

- `example.com/api/` erlaubt Ressourcen von `example.com/api/users/new`.

Pfadendungen ohne `/` stimmen genau überein. Zum Beispiel:

- `https://example.com/file.js` erlaubt Ressourcen von `https://example.com/file.js`, aber nicht `https://example.com/file.js/file2.js`.

### \<scheme-source>

Ein [Schema](/de/docs/Web/URI/Reference/Schemes), wie `https:`. Der Doppelpunkt ist erforderlich.

Sichere Upgrades sind erlaubt, also:

- `http:` lässt auch Ressourcen zu, die HTTPS verwenden
- `ws:` lässt auch Ressourcen zu, die WSS verwenden.

### 'self'

Ressourcen des angegebenen Typs dürfen nur vom selben {{Glossary("origin", "Ursprung")}} wie das Dokument geladen werden.

Sichere Upgrades sind erlaubt. Zum Beispiel:

- Wenn das Dokument von `http://example.com` bereitgestellt wird, wird eine CSP von `'self'` auch Ressourcen von `https://example.com` zulassen.
- Wenn das Dokument von `ws://example.org` bereitgestellt wird, wird eine CSP von `'self'` auch Ressourcen von `wss://example.org` zulassen.

### 'trusted-types-eval'

Standardmäßig, wenn eine CSP eine `default-src` oder eine `script-src`-Richtlinie enthält, werden JavaScript-Funktionen, die ihre Argumente als JavaScript auswerten, deaktiviert.
Dies schließt [`eval()`](/de/docs/Web/JavaScript/Reference/Global_Objects/eval), das [`code`](/de/docs/Web/API/Window/setTimeout#code) Argument zu [`setTimeout()`](/de/docs/Web/API/Window/setTimeout) oder den {{jsxref("Function/Function()", "Function()")}} Konstruktor ein.

Das `trusted-types-eval`-Schlüsselwort kann verwendet werden, um diesen Schutz aufzuheben, jedoch nur, wenn [Trusted Types](/de/docs/Web/API/Trusted_Types_API) erzwungen werden und an diese Funktionen anstelle von Strings übergeben werden.
Dies ermöglicht die dynamische Auswertung von Zeichenfolgen als JavaScript, jedoch nur nach einer Transformationsfunktion, bevor es injiziert wird, was die Möglichkeit bietet, die Eingabe zu [sanitizen](/de/docs/Web/Security/Attacks/XSS#sanitization), um potenziell gefährliche Markups zu entfernen.

Das `trusted-types-eval` muss anstelle von [`'unsafe-eval'`](#unsafe-eval) verwendet werden, wenn diese Methoden mit Trusted Types verwendet werden.
Dies stellt sicher, dass der Zugriff auf die Methoden in Browsern, die keine Trusted Types unterstützen, blockiert wird.

> [!NOTE]
> Entwickler sollten es vermeiden, `trusted-types-eval` oder diese Methoden zu verwenden, es sei denn, dies ist absolut notwendig.
> Trusted Types stellen sicher, dass die Eingabe durch eine Transformationsfunktion geht – sie stellen nicht sicher, dass die Transformation die Eingabe sicher macht (und das kann sehr schwer richtig zu machen sein).

Siehe [`eval()` und ähnliche APIs](/de/docs/Web/HTTP/Guides/CSP#eval_and_similar_apis) im CSP-Leitfaden für weitere Nutzungsinformationen.

### 'unsafe-eval'

Standardmäßig, wenn eine CSP eine `default-src` oder eine `script-src`-Richtlinie enthält, werden JavaScript-Funktionen, die ihre Argumente als JavaScript auswerten, deaktiviert.
Dies schließt [`eval()`](/de/docs/Web/JavaScript/Reference/Global_Objects/eval), das [`code`](/de/docs/Web/API/Window/setTimeout#code) Argument zu [`setTimeout()`](/de/docs/Web/API/Window/setTimeout) oder den {{jsxref("Function/Function()", "Function()")}} Konstruktor ein.

Das `unsafe-eval`-Schlüsselwort kann verwendet werden, um diesen Schutz aufzuheben und die dynamische Auswertung von Zeichenfolgen als JavaScript zu ermöglichen.

> [!WARNING]
> Entwickler sollten `'unsafe-eval'` vermeiden, da es viel von dem Zweck einer CSP zunichte macht.
> ['trusted-types-eval'](#trusted-types-eval) bietet eine "potenziell" sicherere Alternative, falls die Verwendung dieser Methoden notwendig ist.

Siehe [`eval()` und ähnliche APIs](/de/docs/Web/HTTP/Guides/CSP#eval_and_similar_apis) im CSP-Leitfaden für weitere Nutzungsinformationen.

### 'wasm-unsafe-eval'

Standardmäßig wird, wenn eine CSP eine `default-src` oder eine `script-src`-Richtlinie enthält, eine Seite nicht erlaubt, WebAssembly zu kompilieren, indem Funktionen wie [`WebAssembly.compileStreaming()`](/de/docs/WebAssembly/Reference/JavaScript_interface/compileStreaming_static) verwendet werden.

Das `wasm-unsafe-eval`-Schlüsselwort kann verwendet werden, um diesen Schutz aufzuheben. Dies ist eine viel sicherere Alternative zu `'unsafe-eval'`, da es keine allgemeine Auswertung von JavaScript ermöglicht.

### 'unsafe-inline'

Standardmäßig wird, wenn eine CSP eine `default-src` oder eine `script-src`-Richtlinie enthält, Inline-JavaScript nicht ausgeführt. Dies umfasst:

- Inline `<script>` Tags
- Inline-Event-Handler Attribute
- `javascript:` URLs.

Similarly, if a CSP contains `default-src` or a `style-src`-Richtlinie, wird Inline-CSS nicht geladen, einschließlich:

- Inline `<style>` Tags
- [`style`](/de/docs/Web/API/HTMLElement/style) Attribute.

Das `unsafe-inline`-Schlüsselwort kann verwendet werden, um diesen Schutz aufzuheben und all diese Formen zu laden.

> [!WARNING]
> Entwickler sollten `'unsafe-inline'` vermeiden, da es viel von dem Zweck einer CSP zunichte macht.

Siehe [Inline JavaScript](/de/docs/Web/HTTP/Guides/CSP#inline_javascript) im CSP-Leitfaden für weitere Nutzungsinformationen.

### 'unsafe-hashes'

Standardmäßig wird, wenn eine CSP eine `default-src` oder eine `script-src`-Richtlinie enthält, Inline-Event-Handler Attribute wie `onclick` und Inline-`style` Attribute nicht ausgeführt.

Der Ausdruck `'unsafe-hashes'` ermöglicht es dem Browser, [Hash-Ausdrücke](#hash_algorithm-hash_value) für Inline-Event-Handler und `style` Attribute zu verwenden. Zum Beispiel könnte eine CSP eine Richtlinie wie diese enthalten:

```http
script-src 'unsafe-hashes' 'sha256-cd9827ad...'
```

Wenn der Hash-Wert mit dem Hash eines Inline-Event-Handler Attributs oder eines `style` Attributs übereinstimmt, wird der Code ausgeführt.

> [!WARNING]
> Der Wert `'unsafe-hashes'` ist unsicher.
>
> Insbesondere ermöglicht er einen Angriff, bei dem der Inhalt des Inline-Event-Handler Attributs in das Dokument als Inline-`<script>` Element eingefügt wird. Angenommen, der Inline-Event-Handler ist:
>
> ```html
> <button onclick="transferAllMyMoney()">Transfer all my money</button>
> ```
>
> Wenn ein Angreifer ein Inline-`<script>` Element mit diesem Code einfügen kann, wird die CSP diesen automatisch ausführen lassen.
>
> `'unsafe-hashes'` ist jedoch viel sicherer als `'unsafe-inline'`.

### 'inline-speculation-rules'

Standardmäßig wird, wenn eine CSP eine `default-src` oder eine `script-src`-Richtlinie enthält, Inline-JavaScript nicht ausgeführt. Das `'inline-speculation-rules'` ermöglicht es dem Browser, Inline-`<script>`-Elemente zu laden, die ein [`type`](/de/docs/Web/HTML/Reference/Elements/script/type) Attribut vom Typ [`speculationrules`](/de/docs/Web/HTML/Reference/Elements/script/type/speculationrules) haben.

Siehe die [Speculation Rules API](/de/docs/Web/API/Speculation_Rules_API) für weitere Informationen.

### 'strict-dynamic'

Das `'strict-dynamic'`-Schlüsselwort erweitert das Vertrauen, das einem Skript durch einen [nonce](#nonce-nonce_value) oder einen [hash](#hash_algorithm-hash_value) verliehen wird, auf Skripte, die dieses Skript dynamisch lädt, indem es zum Beispiel neue `<script>`-Tags mit [`Document.createElement()`](/de/docs/Web/API/Document/createElement) erstellt und dann mit [`Node.appendChild()`](/de/docs/Web/API/Node/appendChild) in das Dokument einfügt.

Wenn dieses Schlüsselwort in einer Richtlinie vorhanden ist, werden die folgenden Quellausdruck-Werte alle ignoriert:

- [\<host-source>](#host-source)
- [\<scheme-source>](#scheme-source)
- [`'self'`](#self)
- [`'unsafe-inline'`](#unsafe-inline)

Siehe [Das `strict-dynamic`-Schlüsselwort](/de/docs/Web/HTTP/Guides/CSP#the_strict-dynamic_keyword) im CSP-Leitfaden für mehr Nutzungsinformationen.

### 'report-sample'

Wenn dieser Ausdruck in einer richtliniengesteuerten Richtlinie enthalten ist, und die Richtlinie dazu führt, dass der Browser alle Inline-Skripte, Inline-Stile oder Event-Handler Attribute blockiert, dann enthält der [Verletzungsbericht](/de/docs/Web/HTTP/Guides/CSP#violation_reporting), den der Browser erzeugt, eine [`sample`](/de/docs/Web/API/CSPViolationReportBody/sample) Eigenschaft mit den ersten 40 Zeichen der blockierten Ressource.

## CSP in Workern

[Worker](/de/docs/Web/API/Worker) werden im Allgemeinen _nicht_ von der Content-Security-Policy des Dokuments (oder der übergeordneten Worker) geregelt, das sie erstellt haben. Um eine Content-Security-Policy für den Worker festzulegen, setzen Sie einen `Content-Security-Policy` Antwort-Header für die Anfrage, die das Worker-Skript selbst angefordert hat.

Die Ausnahme dabei ist, wenn der Ursprung des Worker-Skriptes ein global eindeutiger Bezeichner ist (zum Beispiel, wenn seine URL ein Schema von Daten oder Blob hat). In diesem Fall erbt der Worker die Content-Security-Policy des Dokuments oder Workers, das ihn erstellt hat.

## Mehrere Content-Security-Policies

Der CSP-Mechanismus erlaubt es, mehrere Richtlinien für eine Ressource zu spezifizieren, einschließlich über den `Content-Security-Policy`-Header, dem {{HTTPHeader("Content-Security-Policy-Report-Only")}}-Header und einem {{HTMLElement("meta")}}-Element.

Sie können den `Content-Security-Policy`-Header mehrmals verwenden, wie im folgenden Beispiel. Achten Sie besonders auf die {{CSP("connect-src")}}-Richtlinie hier. Obwohl die zweite Richtlinie die Verbindung erlauben würde, enthält die erste Richtlinie `connect-src 'none'`. Das Hinzufügen weiterer Richtlinien _kann nur die Fähigkeiten der geschützten Ressource weiter einschränken_, was bedeutet, dass keine Verbindung erlaubt wird und, als die strengste Richtlinie, `connect-src 'none'` durchgesetzt wird.

```http
Content-Security-Policy: default-src 'self' http://example.com;
                          connect-src 'none';
Content-Security-Policy: connect-src http://example.com/;
                          script-src http://example.com/
```

## Beispiele

### Deaktivieren Sie unsicheren Inline-Code und lassen Sie nur HTTPS-Ressourcen zu

Dieser HTTP-Header setzt die Standardrichtlinie, um ausschließlich das Laden von Ressourcen (Bildern, Schriften, Skripten usw.) über HTTPS zu erlauben.
Da die `unsafe-inline` und `unsafe-eval`-Richtlinien nicht gesetzt sind, werden Inline-Skripts blockiert.

```http
Content-Security-Policy: default-src https:
```

Dieselben Einschränkungen können mit dem HTML {{htmlelement("meta")}}-Element angewendet werden.

```html
<meta http-equiv="Content-Security-Policy" content="default-src https:" />
```

### Erlauben Sie Inline-Code und HTTPS-Ressourcen, aber deaktivieren Sie Plugins

Diese Richtlinie könnte auf einer bestehenden Website verwendet werden, die zu viel Inline-Code verwendet, um behoben zu werden, um sicherzustellen, dass Ressourcen nur über HTTPS geladen werden und Plugins deaktiviert werden:

```http
Content-Security-Policy: default-src https: 'unsafe-eval' 'unsafe-inline'; object-src 'none'
```

### Berichten, aber nicht durchsetzen von Verstößen bei Tests

Dieses Beispiel setzt dieselben Einschränkungen wie das vorherige Beispiel, jedoch mit dem {{httpheader("Content-Security-Policy-Report-Only")}}-Header und der {{CSP("report-to")}}-Richtlinie.
Dieser Ansatz wird während des Testens verwendet, um Verstöße zu melden, jedoch den Code nicht zu blockieren.

Endpunkte (URLs), an die Berichte gesendet werden, werden mithilfe des {{HTTPHeader("Reporting-Endpoints")}}-HTTP-Antwort-Headers definiert.

```http
Reporting-Endpoints: csp-endpoint="https://example.com/csp-reports"
```

Ein bestimmter Endpunkt wird dann im CSP Konzept als Berichts-Ziel über die {{CSP("report-to")}}-Richtlinie ausgewählt.

```http
Content-Security-Policy-Report-Only: default-src https:; report-uri /csp-violation-report-url/; report-to csp-endpoint
```

Beachten Sie, dass die {{CSP("report-uri")}} {{deprecated_inline}}-Richtlinie ebenfalls oben angegeben ist, da `report-to` noch nicht breit von Browsern unterstützt wird.

Siehe [Content Security Policy (CSP) Umsetzung](/de/docs/Web/Security/Practical_implementation_guides/CSP) für weitere Beispiele.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTTPHeader("Content-Security-Policy-Report-Only")}}
- [Erfahren Sie mehr: Content Security Policy](/de/docs/Web/HTTP/Guides/CSP)
- [Inhaltsrichtlinien in WebExtensions](/de/docs/Mozilla/Add-ons/WebExtensions/Content_Security_Policy)
- [Adopting a strict policy](https://csp.withgoogle.com/docs/strict-csp.html)
- [CSP Evaluator](https://github.com/google/csp-evaluator) - Bewerten Sie Ihre Content-Security-Policy
