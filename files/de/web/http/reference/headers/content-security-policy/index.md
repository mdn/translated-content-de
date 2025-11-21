---
title: Content-Security-Policy (CSP) header
short-title: Content-Security-Policy
slug: Web/HTTP/Reference/Headers/Content-Security-Policy
l10n:
  sourceCommit: 7f6778934020a9b5b82b4dd8ca79a99bc9950c2a
---

Der HTTP **`Content-Security-Policy`** Antwort-Header ermöglicht es Webseitenadministratoren, die Ressourcen zu kontrollieren, die der Benutzeragent für eine gegebene Seite laden darf. Mit einigen Ausnahmen bestehen Richtlinien hauptsächlich darin, Server-Herkünfte und Skript-Endpunkte anzugeben. Dies hilft, {{Glossary("cross-site_scripting", "Cross-Site-Scripting")}}-Angriffe zu verhindern.

Sehen Sie sich den [Content Security Policy (CSP)](/de/docs/Web/HTTP/Guides/CSP) Leitfaden für Details dazu an, wie eine CSP an den Browser übermittelt wird, wie sie aussieht, sowie Anwendungsfälle und Einsatzstrategien.

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

wobei `<policy-directive>` aus folgendem besteht:
`<directive> <value>` ohne interne Interpunktion.

## Richtlinien

### Fetch-Richtlinien

Fetch-Richtlinien steuern, von welchen Standorten bestimmte Ressourcentypen geladen werden dürfen.

- {{CSP("child-src")}}
  - : Definiert die gültigen Quellen für [Web Worker](/de/docs/Web/API/Web_Workers_API) und verschachtelte Browsing-Kontexte, die mit Elementen wie
    {{HTMLElement("frame")}} und {{HTMLElement("iframe")}} geladen werden.

    [Fallback](#fallbacks) für `frame-src` und `worker-src`.

- {{CSP("connect-src")}}
  - : Beschränkt die URLs, die über Skriptschnittstellen geladen werden können.
- {{CSP("default-src")}}
  - : Dient als Fallback für die anderen {{Glossary("Fetch_directive", "Fetch-Richtlinien")}}.

    [Fallback](#fallbacks) für alle anderen Fetch-Richtlinien.

- {{CSP("fenced-frame-src")}} {{experimental_inline}}
  - : Gibt gültige Quellen für verschachtelte Browsing-Kontexte an, die in {{HTMLElement("fencedframe")}}-Elementen geladen werden.
- {{CSP("font-src")}}
  - : Gibt gültige Quellen für Schriften an, die mit {{cssxref("@font-face")}} geladen werden.
- {{CSP("frame-src")}}
  - : Gibt gültige Quellen für verschachtelte Browsing-Kontexte an, die in Elementen wie
    {{HTMLElement("frame")}} und {{HTMLElement("iframe")}} geladen werden.
- {{CSP("img-src")}}
  - : Gibt gültige Quellen für Bilder und Favicons an.
- {{CSP("manifest-src")}}
  - : Gibt gültige Quellen für Anwendungsmanifest-Dateien an.
- {{CSP("media-src")}}
  - : Gibt gültige Quellen für das Laden von Medien über die {{HTMLElement("audio")}},
    {{HTMLElement("video")}} und {{HTMLElement("track")}}-Elemente an.
- {{CSP("object-src")}}
  - : Gibt gültige Quellen für die {{HTMLElement("object")}} und {{HTMLElement("embed")}}-Elemente an.
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
  - : Gibt gültige Quellen für Inline-Styles an, die auf individuelle DOM-Elemente angewendet werden.
- {{CSP("worker-src")}}
  - : Gibt gültige Quellen für [`Worker`](/de/docs/Web/API/Worker), [`SharedWorker`](/de/docs/Web/API/SharedWorker) oder
    [`ServiceWorker`](/de/docs/Web/API/ServiceWorker) Skripte an.

Alle Fetch-Richtlinien können den Einzelwert `'none'` haben, was anzeigt, dass der spezifische Ressourcentyp vollständig blockiert werden soll, oder als eine oder mehrere _Source-Expressions_-Werte, die gültige Quellen für diesen Ressourcentyp angeben. Siehe [Fetch-Richtlinien-Syntax](#fetch-richtlinien-syntax) für mehr Details.

#### Fallbacks

Einige Fetch-Richtlinien fungieren als Fallbacks für andere, spezifischere Richtlinien. Das bedeutet, dass, wenn die spezifischere Richtlinie nicht angegeben ist, der Fallback verwendet wird, um eine Richtlinie für diesen Ressourcentyp bereitzustellen.

- `default-src` ist ein Fallback für alle anderen Fetch-Richtlinien.
- `script-src` ist ein Fallback für `script-src-attr` und `script-src-elem`.
- `style-src` ist ein Fallback für `style-src-attr` und `style-src-elem`.
- `child-src` ist ein Fallback für `frame-src` und `worker-src`.

Zum Beispiel:

- Wenn `img-src` weggelassen wird, aber `default-src` enthalten ist, wird die von `default-src` definierte Richtlinie auf Bilder angewandt.
- Wenn `script-src-elem` weggelassen wird, aber `script-src` enthalten ist, wird die von `script-src` definierte Richtlinie auf `<script>`-Elemente angewandt.
- Wenn `script-src-elem` und `script-src` beide weggelassen werden, aber `default-src` enthalten ist, wird die von `default-src` definierte Richtlinie auf `<script>`-Elemente angewandt.

### Dokument-Richtlinien

Dokument-Richtlinien regeln die Eigenschaften eines Dokuments oder [Worker](/de/docs/Web/API/Web_Workers_API)-Umgebung, auf die eine Richtlinie
angewendet wird.

- {{CSP("base-uri")}}
  - : Beschränkt die URLs, die im {{HTMLElement("base")}}-Element eines Dokuments verwendet werden können.
- {{CSP("sandbox")}}
  - : Aktiviert einen Sandbox-Modus für die angeforderte Ressource, ähnlich dem
    {{HTMLElement("iframe")}} [`sandbox`](/de/docs/Web/HTML/Reference/Elements/iframe#sandbox)-Attribut.

### Navigations-Richtlinien

Navigations-Richtlinien steuern, zu welchen Standorten ein Benutzer navigieren oder ein Formular übermitteln kann.

- {{CSP("form-action")}}
  - : Beschränkt die URLs, die als Ziel von Formularübermittlungen aus einem
    gegebenen Kontext verwendet werden können.
- {{CSP("frame-ancestors")}}
  - : Gibt gültige Eltern an, die eine Seite mit {{HTMLElement("frame")}},
    {{HTMLElement("iframe")}}, {{HTMLElement("object")}} oder {{HTMLElement("embed")}} einbetten dürfen.

### Report-Richtlinien

Report-Richtlinien steuern die Ziel-URL für CSP-Verletzungsberichte in `Content-Security-Policy` und {{HTTPHeader("Content-Security-Policy-Report-Only")}}.

- {{CSP("report-to")}}
  - : Stellt dem Browser ein Token bereit, das den Berichtendpunkt oder eine Gruppe von Endpunkten identifiziert, an die CSP-Verletzungsinformationen gesendet werden.
    Die Endpunkte, die das Token repräsentiert, werden über andere HTTP-Header bereitgestellt, wie {{HTTPHeader("Reporting-Endpoints")}} und {{HTTPHeader("Report-To")}} {{deprecated_inline}}.

    > [!WARNING]
    > Diese Richtlinie ist dazu gedacht, [`report-uri`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/report-uri) zu ersetzen. In Browsern, die `report-to` unterstützen, wird die `report-uri`-Richtlinie ignoriert.
    > Da `report-to` jedoch noch nicht umfassend unterstützt wird, sollten Sie beide Header festlegen, wie gezeigt (wobei `endpoint_name` der Name eines separat bereitgestellten Endpunkts ist):
    >
    > ```http
    > Content-Security-Policy: …; report-uri https://endpoint.example.com; report-to endpoint_name
    > ```

### Andere Richtlinien

- {{CSP("require-trusted-types-for")}}
  - : Erzwingt [Trusted Types](/de/docs/Web/API/Trusted_Types_API) bei den DOM-XSS-Injection-Senken.
- {{CSP("trusted-types")}}
  - : Wird verwendet, um eine Positivliste von [Trusted Types](/de/docs/Web/API/Trusted_Types_API)-Richtlinien anzugeben.
    Trusted Types ermöglicht Anwendungen, DOM-XSS-Injection-Senken so zu sperren, dass nur nicht fälschbare, typisierte Werte anstelle von Strings akzeptiert werden.
- {{CSP("upgrade-insecure-requests")}}
  - : Weist Benutzeragenten an, alle unsicheren URLs einer Website (jene, die über HTTP bereitgestellt werden) so zu behandeln, als wären sie durch sichere URLs (jene, die über HTTPS bereitgestellt werden) ersetzt worden.
    Diese Richtlinie ist für Websites mit einer großen Anzahl unsicherer, veralteter URLs gedacht, die umgeschrieben werden müssen.

### Veraltete Richtlinien

- {{CSP("block-all-mixed-content")}} {{deprecated_inline}}
  - : Verhindert das Laden von jeglichen Assets über HTTP, wenn die Seite über HTTPS geladen wird.

- {{CSP("report-uri")}} {{deprecated_inline}}
  - : Bietet dem Browser eine URL, an die CSP-Verletzungsberichte gesendet werden sollen.
    Diese wurde durch die [`report-to`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/report-to)-Richtlinie ersetzt.

## Fetch-Richtlinien-Syntax

Alle Fetch-Richtlinien können als einer der folgenden Werte angegeben werden:

- der Einzelwert `'none'`, der anzeigt, dass der spezifische Ressourcentyp vollständig blockiert werden soll
- ein oder mehrere _Source-Expressions_-Werte, die gültige Quellen für diesen Ressourcentyp angeben.

Jede Source-Expression nimmt eine der unten aufgeführten Formen an. Beachten Sie, dass nicht alle Formen für alle Fetch-Richtlinien anwendbar sind: Sehen Sie die Dokumentation für jede Fetch-Richtlinie, um herauszufinden, welche Formen für sie anwendbar sind.

Die Formate `<host-source>` und `<scheme-source>` müssen ohne Anführungszeichen sein, und alle anderen Formate müssen in einfache Anführungszeichen gesetzt werden.

### 'nonce-\<nonce_value>'

Dieser Wert besteht aus dem String `nonce-` gefolgt von einem Nonce-Wert. Der Nonce-Wert kann alle Zeichen von {{Glossary("Base64#base64_characters", "Base64")}} oder {{Glossary("Base64#url_and_filename_safe_base64", "URL-sicherem Base64")}} verwenden.

Dieser String ist ein zufälliger Wert, den der Server für jede HTTP-Antwort generiert. Zum Beispiel:

```plain
'nonce-416d1177-4d12-4e3b-b7c9-f6c409789fb8'
```

Der Server kann dann denselben Wert als Wert des `nonce`-Attributs von jeglichen {{htmlelement("script")}}- oder {{htmlelement("style")}}-Ressourcen aufnehmen, die sie aus dem Dokument laden möchten.

Der Browser vergleicht den Wert aus der CSP-Richtlinie mit dem Wert im Elementattribut und lädt die Ressource nur, wenn sie übereinstimmen.

Wenn eine Richtlinie einen Nonce und `unsafe-inline` enthält, ignoriert der Browser `unsafe-inline`.

Siehe [Nonces](/de/docs/Web/HTTP/Guides/CSP#nonces) im CSP-Leitfaden für mehr Nutzungshinweise.

> [!NOTE]
> Nonce-Source-Expressions sind nur für {{htmlelement("script")}} und {{htmlelement("style")}}-Elemente anwendbar.

### '\<hash_algorithm>-<hash_value>'

Dieser Wert besteht aus einem String, der einen Hash-Algorithmus identifiziert, gefolgt von `-` und einem Hash-Wert. Der Hash-Wert kann alle Zeichen von {{Glossary("Base64#base64_characters", "Base64")}} oder {{Glossary("Base64#url_and_filename_safe_base64", "URL-sicherem Base64")}} verwenden.

- Der Hash-Algorithmus-Identifikator muss einer der folgenden sein: `sha256`, `sha384` oder `sha512`.
- Der Hash-Wert ist der base64-kodierte {{Glossary("hash_function", "Hash")}} einer `<script>` oder `<style>`-Ressource, berechnet unter Verwendung einer der folgenden Hash-Funktionen: SHA-256, SHA-384 oder SHA-512.

Zum Beispiel:

```plain
'sha256-cd9827ad...'
```

Wenn der Browser das Dokument erhält, hasht er den Inhalt von `<script>` und `<style>`-Elementen, vergleicht das Ergebnis mit den Hashes in der CSP-Richtlinie und lädt die Ressource nur, wenn eine Übereinstimmung vorliegt.

Wenn das Element eine externe Ressource lädt (zum Beispiel unter Verwendung des [`src`](/de/docs/Web/HTML/Reference/Elements/script#src)-Attributs), muss das Element auch das [`integrity`](/de/docs/Web/HTML/Reference/Elements/script#integrity)-Attribut gesetzt haben.

Wenn eine Richtlinie einen Hash und `unsafe-inline` enthält, ignoriert der Browser `unsafe-inline`.

Siehe [Hashes](/de/docs/Web/HTTP/Guides/CSP#hashes) im CSP-Leitfaden für mehr Nutzungshinweise.

> [!NOTE]
> Hash-Source-Expressions sind nur für {{htmlelement("script")}} und {{htmlelement("style")}}-Elemente anwendbar.

### \<host-source>

Die [URL](/de/docs/Web/URI) oder IP-Adresse eines {{Glossary("host", "Hosts")}}, der eine gültige Quelle für die Ressource ist.

Das Schema, die Portnummer und der Pfad sind optional.

Wenn das Schema weggelassen wird, wird das Schema der Ursprungsadresse des Dokuments verwendet.

Beim Schema-Abgleich sind sichere Upgrades erlaubt. Zum Beispiel:

- `http://example.com` wird auch Ressourcen von `https://example.com` erlauben
- `ws://example.org` wird auch Ressourcen von `wss://example.org` erlauben.

Wildcards (`'*'`) können für Subdomains, Hostadressen und Portnummern verwendet werden, was bedeutet, dass alle legalen Werte jedes davon gültig sind. Zum Beispiel:

- `http://*.example.com` erlaubt Ressourcen von jeder Subdomain von `example.com`, über HTTP oder HTTPS.

Pfade, die mit `/` enden, stimmen mit jedem Pfad überein, dessen Präfix sie sind. Zum Beispiel:

- `example.com/api/` wird Ressourcen von `example.com/api/users/new` erlauben.

Pfade, die nicht mit `/` enden, stimmen genau überein. Zum Beispiel:

- `https://example.com/file.js` erlaubt Ressourcen von `https://example.com/file.js`, aber nicht von `https://example.com/file.js/file2.js`.

### \<scheme-source>

Ein [Schema](/de/docs/Web/URI/Reference/Schemes), wie `https:`. Der Doppelpunkt ist erforderlich.

Sichere Upgrades sind erlaubt, sodass:

- `http:` auch Ressourcen erlaubt, die über HTTPS geladen werden
- `ws:` auch Ressourcen erlaubt, die über WSS geladen werden.

### 'self'

Ressourcen des angegebenen Typs dürfen nur von derselben {{Glossary("origin", "Ursprung")}} wie das Dokument geladen werden.

Sichere Upgrades sind erlaubt. Zum Beispiel:

- Wenn das Dokument von `http://example.com` bereitgestellt wird, erlaubt ein CSP von `'self'` auch Ressourcen von `https://example.com`.
- Wenn das Dokument von `ws://example.org` bereitgestellt wird, erlaubt ein CSP von `'self'` auch Ressourcen von `wss://example.org`.

### 'trusted-types-eval'

Standardmäßig sind, wenn ein CSP eine `default-src`- oder eine `script-src`-Richtlinie enthält, JavaScript-Funktionen, die ihre Argumente als JavaScript auswerten, deaktiviert. Dazu gehören [`eval()`](/de/docs/Web/JavaScript/Reference/Global_Objects/eval), das [`code`](/de/docs/Web/API/Window/setTimeout#code)-Argument von [`setTimeout()`](/de/docs/Web/API/Window/setTimeout), oder der {{jsxref("Function/Function()", "Function()")}}-Konstruktor.

Das `trusted-types-eval`-Schlüsselwort kann verwendet werden, um diesen Schutz aufzuheben, jedoch nur, wenn [Trusted Types](/de/docs/Web/API/Trusted_Types_API) durchgesetzt und anstelle von Strings an diese Funktionen übergeben werden.
Dies ermöglicht die dynamische Auswertung von Strings als JavaScript, jedoch nur, nachdem Eingaben durch eine Transformationsfunktion geleitet wurden, bevor sie eingefügt werden, was die Möglichkeit bietet, die Eingabe zu [sanitieren](/de/docs/Web/Security/Attacks/XSS#sanitization), um potenziell gefährliche Markups zu entfernen.

Das `trusted-types-eval` muss anstelle von [`'unsafe-eval'`](#unsafe-eval) verwendet werden, wenn diese Methoden mit vertrauenswürdigen Typen verwendet werden.
Dies stellt sicher, dass der Zugriff auf die Methoden in Browsern, die keine vertrauenswürdigen Typen unterstützen, blockiert wird.

> [!NOTE]
> Entwickler sollten `trusted-types-eval` oder diese Methoden nur verwenden, wenn es unbedingt notwendig ist.
> Vertrauenswürdige Typen stellen sicher, dass die Eingabe durch eine Transformationsfunktion geht - sie stellen nicht sicher, dass die Transformation die Eingabe sicher macht (und das kann sehr schwer richtig zu machen sein).

Siehe [`eval()` und ähnliche APIs](/de/docs/Web/HTTP/Guides/CSP#eval_and_similar_apis) im CSP-Leitfaden für mehr Nutzungshinweise.

### 'unsafe-eval'

Standardmäßig sind, wenn ein CSP eine `default-src`- oder eine `script-src`-Richtlinie enthält, JavaScript-Funktionen, die ihre Argumente als JavaScript auswerten, deaktiviert. Dazu gehören [`eval()`](/de/docs/Web/JavaScript/Reference/Global_Objects/eval), das [`code`](/de/docs/Web/API/Window/setTimeout#code)-Argument von [`setTimeout()`](/de/docs/Web/API/Window/setTimeout), oder der {{jsxref("Function/Function()", "Function()")}}-Konstruktor.

Das `unsafe-eval`-Schlüsselwort kann verwendet werden, um diesen Schutz aufzuheben und die dynamische Auswertung von Strings als JavaScript zu ermöglichen.

> [!WARNING]
> Entwickler sollten `'unsafe-eval'` vermeiden, da es den Zweck eines CSPs weitgehend zunichte macht.
> ['trusted-types-eval'](#trusted-types-eval) bietet eine "potenziell" sicherere Alternative, wenn die Verwendung dieser Methoden notwendig ist.

Siehe [`eval()` und ähnliche APIs](/de/docs/Web/HTTP/Guides/CSP#eval_and_similar_apis) im CSP-Leitfaden für mehr Nutzungshinweise.

### 'wasm-unsafe-eval'

Standardmäßig ist, wenn ein CSP eine `default-src`- oder eine `script-src`-Richtlinie enthält, eine Seite nicht berechtigt, WebAssembly zu kompilieren, indem Funktionen wie [`WebAssembly.compileStreaming()`](/de/docs/WebAssembly/Reference/JavaScript_interface/compileStreaming_static) verwendet werden.

Das `wasm-unsafe-eval`-Schlüsselwort kann verwendet werden, um diesen Schutz aufzuheben. Dies ist eine viel sicherere Alternative zu `'unsafe-eval'`, da es keine allgemeine Auswertung von JavaScript ermöglicht.

### 'unsafe-inline'

Standardmäßig ist, wenn ein CSP eine `default-src`- oder eine `script-src`-Richtlinie enthält, Inline-JavaScript nicht zur Ausführung zugelassen. Dies schließt ein:

- Inline-`<script>`-Tags
- Inline-Event-Handler-Attribute
- `javascript:`-URLs.

In ähnlicher Weise werden, wenn ein CSP `default-src` oder eine `style-src`-Richtlinie enthält, Inline-CSS nicht geladen, einschließlich:

- Inline-`<style>`-Tags
- [`style`](/de/docs/Web/API/HTMLElement/style)-Attribute.

Das `unsafe-inline`-Schlüsselwort kann verwendet werden, um diesen Schutz aufzuheben und all diese Formen zu laden.

> [!WARNING]
> Entwickler sollten `'unsafe-inline'` vermeiden, da es den Zweck eines CSPs weitgehend zunichte macht.

Siehe [Inline JavaScript](/de/docs/Web/HTTP/Guides/CSP#inline_javascript) im CSP-Leitfaden für mehr Nutzungshinweise.

### 'unsafe-hashes'

Standardmäßig sind, wenn ein CSP eine `default-src`- oder eine `script-src`-Richtlinie enthält, Inline-Event-Handler-Attribute wie `onclick` und Inline-`style`-Attribute nicht zur Ausführung zugelassen.

Die `'unsafe-hashes'`-Expression erlaubt dem Browser, [Hash-Expressions](#hash_algorithm-hash_value) für Inline-Event-Handler und `style`-Attribute zu verwenden. Zum Beispiel könnte ein CSP eine Richtlinie wie diese enthalten:

```http
script-src 'unsafe-hashes' 'sha256-cd9827ad...'
```

Wenn der Hashwert mit dem Hash eines Inline-Event-Handler-Attributwertes oder eines `style`-Attributwertes übereinstimmt, wird der Code zur Ausführung zugelassen.

> [!WARNING]
> Der `'unsafe-hashes'`-Wert ist unsicher.
>
> Insbesondere ermöglicht er einen Angriff, bei dem der Inhalt des Inline-Event-Handler-Attributs in das Dokument als Inline-`<script>`-Element eingefügt wird. Angenommen, der Inline-Event-Handler ist:
>
> ```html
> <button onclick="transferAllMyMoney()">Transfer all my money</button>
> ```
>
> Wenn ein Angreifer ein Inline-`<script>`-Element mit diesem Code injizieren kann, wird es vom CSP automatisch zur Ausführung freigegeben.
>
> Dennoch ist `'unsafe-hashes'` viel sicherer als `'unsafe-inline'`.

### 'inline-speculation-rules'

Standardmäßig ist, wenn ein CSP eine `default-src`- oder eine `script-src`-Richtlinie enthält, Inline-JavaScript nicht zur Ausführung zugelassen. Die `'inline-speculation-rules'`-Richtlinie erlaubt es dem Browser, Inline-`<script>`-Elemente zu laden, die ein [`type`](/de/docs/Web/HTML/Reference/Elements/script/type)-Attribut vom Typ [`speculationrules`](/de/docs/Web/HTML/Reference/Elements/script/type/speculationrules) haben.

Siehe die [Speculation Rules API](/de/docs/Web/API/Speculation_Rules_API) für weitere Informationen.

### 'strict-dynamic'

Das `'strict-dynamic'`-Schlüsselwort erweitert das durch einen [Nonce](#nonce-nonce_value) oder einen [Hash](#hash_algorithm-hash_value) verliehene Vertrauen auf Skripte, die dieses Skript dynamisch lädt, z. B. durch Erstellen neuer `<script>`-Tags mit [`Document.createElement()`](/de/docs/Web/API/Document/createElement) und anschließendes Einfügen in das Dokument mit [`Node.appendChild()`](/de/docs/Web/API/Node/appendChild).

Wenn dieses Schlüsselwort in einer Richtlinie vorhanden ist, werden die folgenden Source-Expressions-Werte alle ignoriert:

- [\<host-source>](#host-source)
- [\<scheme-source>](#scheme-source)
- [`'self'`](#self)
- [`'unsafe-inline'`](#unsafe-inline)

Siehe [Das `strict-dynamic`-Schlüsselwort](/de/docs/Web/HTTP/Guides/CSP#the_strict-dynamic_keyword) im CSP-Leitfaden für mehr Nutzungshinweise.

### 'report-sample'

Wenn dieser Ausdruck in einer Richtlinie enthalten ist, die Skripte oder Stylesheets kontrolliert und die Richtlinie den Browser veranlasst, Inline-Skripte, Inline-Styles oder Event-Handler-Attribute zu blockieren, wird der [Verletzungsbericht](/de/docs/Web/HTTP/Guides/CSP#violation_reporting), den der Browser generiert, eine [`sample`](/de/docs/Web/API/CSPViolationReportBody/sample)-Eigenschaft enthalten, die die ersten 40 Zeichen der blockierten Ressource enthält.

## CSP in Workern

[Worker](/de/docs/Web/API/Worker) werden im Allgemeinen _nicht_ durch die Content-Security-Policy des Dokuments regiert (oder des übergeordneten Workers), das sie erstellt hat. Um eine Content-Security-Policy für den Worker festzulegen, setzen Sie einen
`Content-Security-Policy`-Antwort-Header für die Anforderung, die das
Worker-Skript selbst angefordert hat.

Die Ausnahme ist, wenn die Ursprungsadresse des Worker-Skripts ein global eindeutiger Bezeichner ist
(z. B. wenn die URL ein Schema von data oder blob hat). In diesem Fall übernimmt der Worker die Content-Security-Policy des Dokuments oder Workers, das ihn erstellt hat.

## Mehrere Content-Security-Policies

Der CSP-Mechanismus erlaubt es, dass mehrere Richtlinien für eine Ressource angegeben werden können, einschließlich
über den `Content-Security-Policy`-Header, den
{{HTTPHeader("Content-Security-Policy-Report-Only")}}-Header und ein
{{HTMLElement("meta")}}-Element.

Sie können den `Content-Security-Policy`-Header mehrmals verwenden, wie im
Beispiel unten gezeigt. Achten Sie besonders auf die {{CSP("connect-src")}}-Richtlinie hier. Auch wenn die zweite Richtlinie die Verbindung zulassen würde, enthält die erste Richtlinie
`connect-src 'none'`. Das Hinzufügen zusätzlicher Richtlinien _kann nur weiter
einschränken_ , die Fähigkeiten der geschützten Ressource, was bedeutet, dass keine Verbindung erlaubt wird und als die strengste Richtlinie `connect-src 'none'`
durchgesetzt wird.

```http
Content-Security-Policy: default-src 'self' http://example.com;
                          connect-src 'none';
Content-Security-Policy: connect-src http://example.com/;
                          script-src http://example.com/
```

## Beispiele

### Unsicheren Inline-Code deaktivieren und nur HTTPS-Ressourcen zulassen

Dieser HTTP-Header setzt die Standardrichtlinie, um das Laden von Ressourcen (Bilder, Schriften, Skripte usw.) nur über HTTPS zu erlauben.
Da die `unsafe-inline` und `unsafe-eval`-Richtlinien nicht gesetzt sind, werden Inline-Skripte blockiert.

```http
Content-Security-Policy: default-src https:
```

Dieselben Einschränkungen können mit dem HTML {{htmlelement("meta")}}-Element angewendet werden.

```html
<meta http-equiv="Content-Security-Policy" content="default-src https:" />
```

### Inline-Code und HTTPS-Ressourcen erlauben, aber Plugins deaktivieren

Diese Richtlinie könnte auf einer bestehenden Website verwendet werden, die zu viel Inline-Code verwendet, um ihn zu beheben, um sicherzustellen, dass Ressourcen nur über HTTPS geladen werden, und um Plugins zu deaktivieren:

```http
Content-Security-Policy: default-src https: 'unsafe-eval' 'unsafe-inline'; object-src 'none'
```

### Verstöße melden, aber nicht erzwingen, während des Testens

Dieses Beispiel setzt dieselben Beschränkungen wie das vorherige Beispiel, verwendet jedoch den {{httpheader("Content-Security-Policy-Report-Only")}}-Header und die {{CSP("report-to")}}-Richtlinie.
Diese Methode wird während des Testens verwendet, um Verstöße zu melden, ohne den Code daran zu hindern, ausgeführt zu werden.

Endpunkte (URLs), an die Berichte gesendet werden sollen, werden mithilfe des {{HTTPHeader("Reporting-Endpoints")}}-HTTP-Antwort-Headers definiert.

```http
Reporting-Endpoints: csp-endpoint="https://example.com/csp-reports"
```

Ein bestimmter Endpunkt wird dann als Ziel für Berichte in der CSP-Richtlinie unter Verwendung der {{CSP("report-to")}}-Richtlinie ausgewählt.

```http
Content-Security-Policy-Report-Only: default-src https:; report-uri /csp-violation-report-url/; report-to csp-endpoint
```

Beachten Sie, dass die {{CSP("report-uri")}} {{deprecated_inline}}-Richtlinie ebenfalls oben angegeben ist, da `report-to` noch nicht umfassend von Browsern unterstützt wird.

Siehe [Content Security Policy (CSP)-Implementierung](/de/docs/Web/Security/Practical_implementation_guides/CSP) für weitere Beispiele.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTTPHeader("Content-Security-Policy-Report-Only")}}
- [Erfahren Sie mehr über: Content Security Policy](/de/docs/Web/HTTP/Guides/CSP)
- [Content Security in WebExtensions](/de/docs/Mozilla/Add-ons/WebExtensions/Content_Security_Policy)
- [Einführung einer strikten Richtlinie](https://csp.withgoogle.com/docs/strict-csp.html)
- [CSP Evaluator](https://github.com/google/csp-evaluator) - Bewertung Ihrer
  Content-Security-Policy
