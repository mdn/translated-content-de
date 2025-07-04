---
title: Content-Security-Policy (CSP) header
short-title: Content-Security-Policy
slug: Web/HTTP/Reference/Headers/Content-Security-Policy
l10n:
  sourceCommit: ad5b5e31f81795d692e66dadb7818ba8b220ad15
---

Der HTTP-Antwortheader **`Content-Security-Policy`** ermöglicht es Website-Administratoren, die Ressourcen zu kontrollieren, die ein Benutzeragent für eine bestimmte Seite laden darf. Mit wenigen Ausnahmen beinhalten Richtlinien meist die Angabe von Server-Ursprüngen und Skript-Endpunkten. Dies hilft, {{Glossary("cross-site_scripting", "Cross-Site Scripting")}}-Angriffe zu verhindern.

Siehe den [Content Security Policy (CSP)](/de/docs/Web/HTTP/Guides/CSP)-Leitfaden für Details darüber, wie eine CSP an den Browser übermittelt wird, wie sie aussieht, sowie Anwendungsfälle und Bereitstellungsstrategien.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Response_header", "Antwortheader")}}</td>
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

wobei `<policy-directive>` aus folgendem besteht:
`<directive> <value>` ohne interne Interpunktion.

## Direktiven

### Fetch-Direktiven

Fetch-Direktiven steuern die Orte, von denen bestimmte Ressourcentypen geladen werden dürfen.

- {{CSP("child-src")}}
  - : Definiert die gültigen Quellen für [Web Worker](/de/docs/Web/API/Web_Workers_API) und eingebettete Browsing-Kontexte, die mit Elementen wie {{HTMLElement("frame")}} und {{HTMLElement("iframe")}} geladen werden.

    [Fallback](#fallbacks) für `frame-src` und `worker-src`.

- {{CSP("connect-src")}}
  - : Beschränkt die URLs, die über Skript-Schnittstellen geladen werden können.
- {{CSP("default-src")}}
  - : Dient als Fallback für die anderen {{Glossary("Fetch_directive", "Fetch-Direktiven")}}.

    [Fallback](#fallbacks) für alle anderen Fetch-Direktiven.

- {{CSP("fenced-frame-src")}} {{experimental_inline}}
  - : Gibt gültige Quellen für eingebettete Browsing-Kontexte an, die in {{HTMLElement("fencedframe")}}-Elementen geladen werden.
- {{CSP("font-src")}}
  - : Gibt gültige Quellen für Schriften an, die mit {{cssxref("@font-face")}} geladen werden.
- {{CSP("frame-src")}}
  - : Gibt gültige Quellen für eingebettete Browsing-Kontexte an, die in Elementen wie {{HTMLElement("frame")}} und {{HTMLElement("iframe")}} geladen werden.
- {{CSP("img-src")}}
  - : Gibt gültige Quellen für Bilder und Favicons an.
- {{CSP("manifest-src")}}
  - : Gibt gültige Quellen für Anwendungsmanifestdateien an.
- {{CSP("media-src")}}
  - : Gibt gültige Quellen für das Laden von Medien mit den {{HTMLElement("audio")}}, {{HTMLElement("video")}} und {{HTMLElement("track")}}-Elementen an.
- {{CSP("object-src")}}
  - : Gibt gültige Quellen für die {{HTMLElement("object")}} und {{HTMLElement("embed")}}-Elemente an.
- {{CSP("prefetch-src")}} {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Gibt gültige Quellen an, die vorgeladen oder vorgeladengrendert werden sollen.
- {{CSP("script-src")}}
  - : Gibt gültige Quellen für JavaScript- und WebAssembly-Ressourcen an.

    [Fallback](#fallbacks) für `script-src-elem` und `script-src-attr`.

- {{CSP("script-src-elem")}}
  - : Gibt gültige Quellen für JavaScript-{{HTMLElement("script")}}-Elemente an.
- {{CSP("script-src-attr")}}
  - : Gibt gültige Quellen für JavaScript-Inline-Ereignishandler an.
- {{CSP("style-src")}}
  - : Gibt gültige Quellen für Stylesheets an.

    [Fallback](#fallbacks) für `style-src-elem` und `style-src-attr`.

- {{CSP("style-src-elem")}}
  - : Gibt gültige Quellen für Stylesheet-{{HTMLElement("style")}}-Elemente und {{HTMLElement("link")}}-Elemente mit `rel="stylesheet"` an.
- {{CSP("style-src-attr")}}
  - : Gibt gültige Quellen für Inline-Stile an, die auf einzelne DOM-Elemente angewendet werden.
- {{CSP("worker-src")}}
  - : Gibt gültige Quellen für [`Worker`](/de/docs/Web/API/Worker), [`SharedWorker`](/de/docs/Web/API/SharedWorker) oder
    [`ServiceWorker`](/de/docs/Web/API/ServiceWorker)-Skripte an.

Alle Fetch-Direktiven können den einzelnen Wert `'none'` angegeben erhalten, der anzeigt, dass der spezifische Ressourcentyp vollständig blockiert werden soll, oder als ein oder mehrere _source expression_-Werte, die gültige Quellen für diesen Ressourcentyp angeben. Weitere Details finden Sie unter [Fetch-Direktiven-Syntax](#fetch-direktiven-syntax).

#### Fallbacks

Einige Fetch-Direktiven dienen als Fallbacks für andere, detailliertere Direktiven. Das bedeutet, dass, wenn die detailliertere Direktive nicht angegeben ist, der Fallback verwendet wird, um eine Richtlinie für diesen Ressourcentyp bereitzustellen.

- `default-src` ist ein Fallback für alle anderen Fetch-Direktiven.
- `script-src` ist ein Fallback für `script-src-attr` und `script-src-elem`.
- `style-src` ist ein Fallback für `style-src-attr` und `style-src-elem`.
- `child-src` ist ein Fallback für `frame-src` und `worker-src`.

Zum Beispiel:

- Wenn `img-src` weggelassen wird, aber `default-src` enthalten ist, dann wird die von `default-src` definierte Richtlinie auf Bilder angewendet.
- Wenn `script-src-elem` weggelassen wird, aber `script-src` enthalten ist, dann wird die von `script-src` definierte Richtlinie auf `<script>`-Elemente angewendet.
- Wenn `script-src-elem` und `script-src` beide weggelassen werden, aber `default-src` enthalten ist, dann wird die von `default-src` definierte Richtlinie auf `<script>`-Elemente angewendet.

### Dokument-Direktiven

Dokument-Direktiven steuern die Eigenschaften eines Dokuments oder einer [Worker](/de/docs/Web/API/Web_Workers_API)-Umgebung, auf die eine Richtlinie angewendet wird.

- {{CSP("base-uri")}}
  - : Beschränkt die URLs, die im {{HTMLElement("base")}}-Element eines Dokuments verwendet werden können.
- {{CSP("sandbox")}}
  - : Aktiviert eine Sandbox für die angeforderte Ressource, ähnlich dem {{HTMLElement("iframe")}} [`sandbox`](/de/docs/Web/HTML/Reference/Elements/iframe#sandbox)-Attribut.

### Navigations-Direktiven

Navigations-Direktiven steuern, zu welchen Orten ein Benutzer navigieren oder ein Formular senden kann, zum Beispiel.

- {{CSP("form-action")}}
  - : Beschränkt die URLs, die als Ziel von Formularübermittlungen aus einem bestimmten Kontext verwendet werden können.
- {{CSP("frame-ancestors")}}
  - : Gibt gültige Eltern an, die eine Seite mit {{HTMLElement("frame")}}, {{HTMLElement("iframe")}}, {{HTMLElement("object")}} oder {{HTMLElement("embed")}} einbetten dürfen.

### Reporting-Direktiven

Reporting-Direktiven steuern die Ziel-URL für CSP-Verletzungsberichte in `Content-Security-Policy` und {{HTTPHeader("Content-Security-Policy-Report-Only")}}.

- {{CSP("report-to")}}
  - : Bietet dem Browser ein Token, das die Reporting-Endpunkt oder eine Gruppe von Endpunkten identifiziert, an die CSP-Verletzungsinformationen gesendet werden sollen. Die Endpunkte, die das Token repräsentiert, werden über andere HTTP-Header bereitgestellt, wie {{HTTPHeader("Reporting-Endpoints")}} und {{HTTPHeader("Report-To")}} {{deprecated_inline}}.

    > [!WARNING]
    > Diese Direktive ist vorgesehen, um [`report-uri`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/report-uri) zu ersetzen; in Browsern, die `report-to` unterstützen, wird die `report-uri`-Direktive ignoriert.
    > Bis `report-to` jedoch umfassend unterstützt wird, sollten Sie beide Header spezifizieren, wie gezeigt (wobei `endpoint_name` der Name eines separat bereitgestellten Endpunkts ist):
    >
    > ```http
    > Content-Security-Policy: …; report-uri https://endpoint.example.com; report-to endpoint_name
    > ```

### Andere Direktiven

- {{CSP("require-trusted-types-for")}}
  - : Erzwingt [Trusted Types](/de/docs/Web/API/Trusted_Types_API) an den DOM-XSS-Injektionsstellen.
- {{CSP("trusted-types")}}
  - : Wird verwendet, um eine Positivliste von [Trusted Types](/de/docs/Web/API/Trusted_Types_API)-Richtlinien anzugeben. Trusted Types erlaubt es, DOM-XSS-Injektionsstellen zu sperren, sodass nur nicht-spoofbare, typisierte Werte anstelle von Strings akzeptiert werden.
- {{CSP("upgrade-insecure-requests")}}
  - : Weist Benutzeragenten an, alle unsicheren URLs einer Seite (die über HTTP bereitgestellt werden) so zu behandeln, als ob sie mit sicheren URLs (die über HTTPS bereitgestellt werden) ersetzt wurden. Diese Direktive ist für Websites mit einer großen Anzahl unsicherer Legacy-URLs gedacht, die umgeschrieben werden müssen.

### Veraltete Direktiven

- {{CSP("block-all-mixed-content")}} {{deprecated_inline}}
  - : Verhindert das Laden von Assets über HTTP, wenn die Seite über HTTPS geladen wird.

- {{CSP("report-uri")}} {{deprecated_inline}}
  - : Bietet dem Browser eine URL, an die CSP-Verletzungsberichte gesendet werden sollen. Dies wurde durch die [`report-to`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/report-to)-Direktive abgelöst.

## Fetch-Direktiven-Syntax

Alle Fetch-Direktiven können als einer der folgenden Werte angegeben werden:

- der einzelne Wert `'none'`, der angibt, dass der spezifische Ressourcentyp vollständig blockiert werden soll
- ein oder mehrere _source expression_-Werte, die gültige Quellen für diesen Ressourcentyp angeben.

Jeder Source-Expression nimmt eine der unten aufgeführten Formen an. Beachten Sie, dass nicht alle Formen auf alle Fetch-Direktiven anwendbar sind: sehen Sie in der Dokumentation für jede Fetch-Direktive nach, welche Formen anwendbar sind.

Die Formate `<host-source>` und `<scheme-source>` müssen unzitiert bleiben, und alle anderen Formate müssen in einfache Anführungszeichen gesetzt werden.

### 'nonce-\<nonce_value>'

Dieser Wert besteht aus der Zeichenkette `nonce-` gefolgt von einem Zufallswert (Nonce). Der Nonce-Wert kann alle Zeichen aus {{Glossary("Base64#base64_characters", "Base64")}} oder {{Glossary("Base64#url_and_filename_safe_base64", "URL-sicherem Base64")}} verwenden.

Diese Zeichenkette ist ein zufälliger Wert, den der Server für jede HTTP-Antwort generiert. Zum Beispiel:

```plain
'nonce-416d1177-4d12-4e3b-b7c9-f6c409789fb8'
```

Der Server kann dann denselben Wert als Wert des `nonce`-Attributes für beliebige {{htmlelement("script")}}- oder {{htmlelement("style")}}-Ressourcen, die sie aus dem Dokument laden möchten, einfügen.

Der Browser vergleicht den Wert der CSP-Direktive mit dem Wert im Element-Attribut und lädt die Ressource nur, wenn sie übereinstimmen.

Wenn eine Direktive einen Nonce und `unsafe-inline` enthält, ignoriert der Browser `unsafe-inline`.

Siehe [Nonces](/de/docs/Web/HTTP/Guides/CSP#nonces) im CSP-Leitfaden für mehr Nutzungshinweise.

> [!NOTE]
> Nonce-Source-Expressions sind nur anwendbar auf {{htmlelement("script")}}- und {{htmlelement("style")}}-Elemente.

### '\<hash_algorithm>-<hash_value>'

Dieser Wert besteht aus einer Zeichenkette, die einen Hash-Algorithmus identifiziert, gefolgt von `-`, gefolgt von einem Hash-Wert. Der Hash-Wert kann alle Zeichen aus {{Glossary("Base64#base64_characters", "Base64")}} oder {{Glossary("Base64#url_and_filename_safe_base64", "URL-sicherem Base64")}} verwenden.

- Der Hash-Algorithmus-Identifier muss einer von `sha256`, `sha384` oder `sha512` sein.
- Der Hash-Wert ist der Base64-kodierte {{Glossary("hash_function", "Hash")}} einer `<script>`- oder `<style>`-Ressource, berechnet mit einer der folgenden Hash-Funktionen: SHA-256, SHA-384 oder SHA-512.

Zum Beispiel:

```plain
'sha256-cd9827ad...'
```

Wenn der Browser das Dokument empfängt, hashiert er den Inhalt aller `<script>`- und `<style>`-Elemente, vergleicht das Ergebnis mit allen Hashes in der CSP-Direktive und lädt die Ressource nur, wenn es eine Übereinstimmung gibt.

Wenn das Element eine externe Ressource lädt (zum Beispiel mit dem [`src`](/de/docs/Web/HTML/Reference/Elements/script#src)-Attribut), muss das Element auch das [`integrity`](/de/docs/Web/HTML/Reference/Elements/script#integrity)-Attribut gesetzt haben.

Wenn eine Direktive einen Hash und `unsafe-inline` enthält, ignoriert der Browser `unsafe-inline`.

Siehe [Hashes](/de/docs/Web/HTTP/Guides/CSP#hashes) im CSP-Leitfaden für mehr Nutzungshinweise.

> [!NOTE]
> Hash-Source-Expressions sind nur anwendbar auf {{htmlelement("script")}}- und {{htmlelement("style")}}-Elemente.

### \<host-source>

Die [URL](/de/docs/Web/URI) oder IP-Adresse eines {{Glossary("host", "Hosts")}}, der eine gültige Quelle für die Ressource ist.

Das Schema, die Portnummer und der Pfad sind optional.

Wenn das Schema weggelassen wird, wird das Schema des Dokuments-Ursprungs verwendet.

Beim Schemavergleich sind sichere Upgrades erlaubt. Zum Beispiel:

- `http://example.com` erlaubt auch Ressourcen von `https://example.com`
- `ws://example.org` erlaubt auch Ressourcen von `wss://example.org`.

Platzhalter (`'*'`) können für Subdomains, Hostadressen und Portnummern verwendet werden und geben an, dass alle zulässigen Werte jedes Typs gültig sind. Zum Beispiel:

- `http://*.example.com` erlaubt Ressourcen von jeder Subdomain von `example.com`, über HTTP oder HTTPS.

Pfade, die mit `/` enden, entsprechen jedem Pfad, den sie als Präfix haben. Zum Beispiel:

- `example.com/api/` erlaubt Ressourcen von `example.com/api/users/new`.

Pfade, die nicht mit `/` enden, werden exakt abgeglichen. Zum Beispiel:

- `https://example.com/file.js` erlaubt Ressourcen von `https://example.com/file.js`, aber nicht von `https://example.com/file.js/file2.js`.

### \<scheme-source>

Ein [Schema](/de/docs/Web/URI/Reference/Schemes), wie `https:`. Der Doppelpunkt ist erforderlich.

Sichere Upgrades sind erlaubt, daher:

- `http:` erlaubt auch Ressourcen, die mit HTTPS geladen werden
- `ws:` erlaubt auch Ressourcen, die mit WSS geladen werden.

### 'self'

Ressourcen des gegebenen Typs dürfen nur vom gleichen {{Glossary("origin", "Ursprung")}} wie das Dokument geladen werden.

Sichere Upgrades sind erlaubt. Zum Beispiel:

- Wenn das Dokument von `http://example.com` bereitgestellt wird, erlaubt ein CSP von `'self'` auch Ressourcen von `https://example.com`.
- Wenn das Dokument von `ws://example.org` bereitgestellt wird, erlaubt ein CSP von `'self'` auch Ressourcen von `wss://example.org`.

### 'unsafe-eval'

Standardmäßig, wenn ein CSP eine `default-src`- oder `script-src`-Direktive enthält, sind JavaScript-Funktionen, die ihre Argumente als JavaScript auswerten, deaktiviert. Dies schließt [`eval()`](/de/docs/Web/JavaScript/Reference/Global_Objects/eval), das [`code`](/de/docs/Web/API/Window/setTimeout#code)-Argument von [`setTimeout()`](/de/docs/Web/API/Window/setTimeout), oder den {{jsxref("Function/Function()", "Function()")}}-Konstruktor mit ein.

Das `unsafe-eval`-Schlüsselwort kann verwendet werden, um diesen Schutz aufzuheben und die dynamische Auswertung von Zeichenfolgen als JavaScript zuzulassen.

> [!WARNING]
> Entwickler sollten `'unsafe-eval'` vermeiden, da dies einen Großteil des Zwecks eines CSPs zunichtemacht.

Siehe [`eval()` und ähnliche APIs](/de/docs/Web/HTTP/Guides/CSP#eval_and_similar_apis) im CSP-Leitfaden für weitere Nutzungshinweise.

### 'wasm-unsafe-eval'

Standardmäßig, wenn ein CSP eine `default-src`- oder `script-src`-Direktive enthält, darf eine Seite kein WebAssembly mit Funktionen wie [`WebAssembly.compileStreaming()`](/de/docs/WebAssembly/Reference/JavaScript_interface/compileStreaming_static) kompilieren.

Das `wasm-unsafe-eval`-Schlüsselwort kann verwendet werden, um diesen Schutz aufzuheben. Dies ist eine viel sicherere Alternative zu `'unsafe-eval'`, da es keine allgemeine Auswertung von JavaScript ermöglicht.

### 'unsafe-inline'

Standardmäßig, wenn ein CSP eine `default-src`- oder `script-src`-Direktive enthält, darf Inline-JavaScript nicht ausgeführt werden. Dies schließt ein:

- Inline-`<script>`-Tags
- Inline-Ereignishandler-Attribute
- `javascript:`-URLs.

Ähnlich, wenn ein CSP eine `default-src`- oder `style-src`-Direktive enthält, wird Inline-CSS nicht geladen, einschließlich:

- Inline-`<style>`-Tags
- [`style`](/de/docs/Web/API/HTMLElement/style)-Attribute.

Das `unsafe-inline`-Schlüsselwort kann verwendet werden, um diesen Schutz aufzuheben, sodass all diese Formen geladen werden können.

> [!WARNING]
> Entwickler sollten `'unsafe-inline'` vermeiden, da dies einen Großteil des Zwecks eines CSPs zunichtemacht.

Siehe [Inline-JavaScript](/de/docs/Web/HTTP/Guides/CSP#inline_javascript) im CSP-Leitfaden für weitere Nutzungshinweise.

### 'unsafe-hashes'

Standardmäßig, wenn ein CSP eine `default-src`- oder `script-src`-Direktive enthält, dürfen Inline-Ereignishandler-Attribute wie `onclick` und Inline-`style`-Attribute nicht ausgeführt werden.

Der Ausdruck `'unsafe-hashes'` erlaubt es dem Browser, [Hash-Ausdrücke](#hash_algorithm-hash_value) für Inline-Ereignishandler und `style`-Attribute zu verwenden. Zum Beispiel könnte ein CSP eine Direktive wie diese enthalten:

```http
script-src 'unsafe-hashes' 'sha256-cd9827ad...'
```

Wenn der Hash-Wert mit dem Hash eines Inline-Ereignishandler-Attributwertes oder eines `style`-Attributwertes übereinstimmt, wird der Code erlaubt, ausgeführt zu werden.

> [!WARNING]
> Der Wert `'unsafe-hashes'` ist unsicher.
>
> Insbesondere ermöglicht es einen Angriff, bei dem der Inhalt des Inline-Ereignishandler-Attributs als Inline-`<script>`-Element in das Dokument eingefügt wird. Angenommen, der Inline-Ereignishandler ist:
>
> ```html
> <button onclick="transferAllMyMoney()">Transferiere mein ganzes Geld</button>
> ```
>
> Wenn ein Angreifer ein Inline-`<script>`-Element mit diesem Code injizieren kann, erlaubt das CSP es automatisch zu auszuführen.
>
> Dennoch ist `'unsafe-hashes'` viel sicherer als `'unsafe-inline'`.

### 'inline-speculation-rules'

Standardmäßig, wenn ein CSP eine `default-src`- oder `script-src`-Direktive enthält, darf Inline-JavaScript nicht ausgeführt werden. Das `'inline-speculation-rules'` erlaubt es dem Browser, Inline-`<script>`-Elemente zu laden, die ein [`type`](/de/docs/Web/HTML/Reference/Elements/script/type)-Attribut von [`speculationrules`](/de/docs/Web/HTML/Reference/Elements/script/type/speculationrules) haben.

Siehe die [Speculation Rules API](/de/docs/Web/API/Speculation_Rules_API) für weitere Informationen.

### 'strict-dynamic'

Das `'strict-dynamic'`-Schlüsselwort erweitert das Vertrauen, das einem Skript durch ein [Nonce](#nonce-nonce_value) oder einen [Hash](#hash_algorithm-hash_value) verliehen wird, auf Skripte, die dieses Skript dynamisch lädt, zum Beispiel durch das Erstellen neuer `<script>`-Tags mit [`Document.createElement()`](/de/docs/Web/API/Document/createElement) und deren Einfügen in das Dokument mit [`Node.appendChild()`](/de/docs/Web/API/Node/appendChild).

Wenn dieses Schlüsselwort in einer Direktive vorhanden ist, dann werden alle folgenden Source-Expression-Werte ignoriert:

- [\<host-source>](#host-source)
- [\<scheme-source>](#scheme-source)
- [`'self'`](#self)
- [`'unsafe-inline'`](#unsafe-inline)

Siehe [Das `strict-dynamic`-Schlüsselwort](/de/docs/Web/HTTP/Guides/CSP#the_strict-dynamic_keyword) im CSP-Leitfaden für weitere Nutzungshinweise.

### 'report-sample'

Wenn dieser Ausdruck in einer Direktive enthalten ist, die Skripte oder Stile steuert, und die Direktive dazu führt, dass der Browser einige Inline-Skripte, Inline-Stile oder Ereignishandler-Attribute blockiert, dann enthält der [Verstoßbericht](/de/docs/Web/HTTP/Guides/CSP#violation_reporting), den der Browser generiert, eine [`sample`](/de/docs/Web/API/CSPViolationReportBody/sample)-Eigenschaft, die die ersten 40 Zeichen der blockierten Ressource enthält.

## CSP in Workern

[Worker](/de/docs/Web/API/Worker) werden im Allgemeinen _nicht_ von der Content-Security-Policy des Dokuments (oder Eltern-Workers) geregelt, das sie erstellt hat. Um eine Content-Security-Policy für den Worker anzugeben, setzen Sie einen `Content-Security-Policy`-Antwortheader für die Anfrage, die das Worker-Skript selbst angefordert hat.

Die Ausnahme ist, wenn der Ursprung des Worker-Skripts ein global eindeutiger Bezeichner ist (zum Beispiel, wenn seine URL ein Schema von Daten oder Blob hat). In diesem Fall erbt der Worker die Content-Security-Policy des Dokuments oder des Workers, der ihn erstellt hat.

## Mehrere Content-Security-Policies

Der CSP-Mechanismus ermöglicht es, mehrere Richtlinien für eine Ressource anzugeben, einschließlich über den `Content-Security-Policy`-Header, den {{HTTPHeader("Content-Security-Policy-Report-Only")}}-Header und ein {{HTMLElement("meta")}}-Element.

Sie können den `Content-Security-Policy`-Header mehr als einmal verwenden, wie im untenstehenden Beispiel. Achten Sie besonders auf die {{CSP("connect-src")}}-Direktive hier. Auch wenn die zweite Richtlinie die Verbindung erlauben würde, enthält die erste Richtlinie `connect-src 'none'`. Das Hinzufügen zusätzlicher Richtlinien _kann nur weiter einschränken_ die Fähigkeiten der geschützten Ressource, was bedeutet, dass keine Verbindung erlaubt ist und als die strengste Richtlinie `connect-src 'none'` durchgesetzt wird.

```http
Content-Security-Policy: default-src 'self' http://example.com;
                          connect-src 'none';
Content-Security-Policy: connect-src http://example.com/;
                          script-src http://example.com/
```

## Beispiele

### Unsicheren Inline-Code deaktivieren und nur HTTPS-Ressourcen zulassen

Dieser HTTP-Header setzt die Standardrichtlinie, nur das Laden von Ressourcen (Bilder, Schriften, Skripte, etc.) über HTTPS zu erlauben.
Da die Direktiven `unsafe-inline` und `unsafe-eval` nicht gesetzt sind, werden Inline-Skripte blockiert.

```http
Content-Security-Policy: default-src https:
```

Dieselben Einschränkungen können mit dem HTML {{htmlelement("meta")}}-Element angewendet werden.

```html
<meta http-equiv="Content-Security-Policy" content="default-src https:" />
```

### Inline-Code und HTTPS-Ressourcen erlauben, aber Plugins deaktivieren

Diese Richtlinie könnte auf einer bereits existierenden Seite verwendet werden, die zu viel Inline-Code verwendet, um es zu beheben, um sicherzustellen, dass Ressourcen nur über HTTPS geladen werden und Plugins deaktiviert werden:

```http
Content-Security-Policy: default-src https: 'unsafe-eval' 'unsafe-inline'; object-src 'none'
```

### Verstöße melden, aber nicht erzwingen beim Testen

Dieses Beispiel setzt dieselben Einschränkungen wie das vorherige Beispiel, aber unter Verwendung des {{httpheader("Content-Security-Policy-Report-Only")}}-Headers und der {{CSP("report-to")}}-Direktive.
Dieser Ansatz wird während des Testens verwendet, um Verstöße zu melden, aber keinen Code am Ausführen zu hindern.

Endpunkte (URLs), an die Berichte gesendet werden, werden mit dem {{HTTPHeader("Reporting-Endpoints")}}-HTTP-Antwortheader definiert.

```http
Reporting-Endpoints: csp-endpoint="https://example.com/csp-reports"
```

Ein bestimmter Endpunkt wird dann als Berichtsziel in der CSP-Richtlinie mit der {{CSP("report-to")}}-Direktive ausgewählt.

```http
Content-Security-Policy-Report-Only: default-src https:; report-uri /csp-violation-report-url/; report-to csp-endpoint
```

Beachten Sie, dass die {{CSP("report-uri")}} {{deprecated_inline}}-Direktive auch oben angegeben ist, da `report-to` noch nicht umfassend von Browsern unterstützt wird.

Siehe [Content Security Policy (CSP)-Implementierung](/de/docs/Web/Security/Practical_implementation_guides/CSP) für weitere Beispiele.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTTPHeader("Content-Security-Policy-Report-Only")}}
- [Lernen Sie über: Content Security Policy](/de/docs/Web/HTTP/Guides/CSP)
- [Content-Security in WebExtensions](/de/docs/Mozilla/Add-ons/WebExtensions/Content_Security_Policy)
- [Annahme einer strikten Richtlinie](https://csp.withgoogle.com/docs/strict-csp.html)
- [CSP Evaluator](https://github.com/google/csp-evaluator) - Bewerten Sie Ihre Content-Security-Policy
