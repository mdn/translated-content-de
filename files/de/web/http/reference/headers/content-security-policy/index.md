---
title: Content-Security-Policy (CSP) header
short-title: Content-Security-Policy
slug: Web/HTTP/Reference/Headers/Content-Security-Policy
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{HTTPSidebar}}

Der HTTP **`Content-Security-Policy`** Response-Header ermöglicht es Website-Administrator:innen, zu kontrollieren, welche Ressourcen der User-Agent für eine gegebene Seite laden darf. Mit wenigen Ausnahmen beinhalten Richtlinien meist die Spezifikation von Server-Ursprüngen und Skript-Endpunkten. Dies hilft, {{Glossary("cross-site_scripting", "Cross-Site-Scripting")}} Angriffe abzuwehren.

Sehen Sie sich den [Content Security Policy (CSP)](/de/docs/Web/HTTP/Guides/CSP) Leitfaden für Details darüber an, wie eine CSP an den Browser übermittelt wird, wie sie aussieht, sowie Anwendungsfälle und Bereitstellungsstrategien.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Response_header", "Antwort-Header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_request_header", "Unzulässiger Anfrage-Header")}}</th>
      <td>nein</td>
    </tr>
  </tbody>
</table>

## Syntax

```http
Content-Security-Policy: <policy-directive>; <policy-directive>
```

wobei `<policy-directive>` besteht aus: `<directive> <value>` ohne interne Interpunktion.

## Direktiven

### Fetch-Direktiven

Fetch-Direktiven kontrollieren, von welchen Standorten bestimmte Ressourcentypen geladen werden dürfen.

- {{CSP("child-src")}}

  - : Definiert die gültigen Quellen für [Web Worker](/de/docs/Web/API/Web_Workers_API) und eingebettete Browsing-Kontexte, die mit Elementen wie {{HTMLElement("frame")}} und {{HTMLElement("iframe")}} geladen werden.

    [Fallback](#fallbacks) für `frame-src` und `worker-src`.

- {{CSP("connect-src")}}
  - : Beschränkt die URLs, die mittels Skript-Schnittstellen geladen werden können.
- {{CSP("default-src")}}

  - : Dient als Fallback für die anderen {{Glossary("Fetch_directive", "Fetch-Direktiven")}}.

    [Fallback](#fallbacks) für alle anderen Fetch-Direktiven.

- {{CSP("fenced-frame-src")}} {{experimental_inline}}
  - : Gibt gültige Quellen für eingebettete Browsing-Kontexte an, die in {{HTMLElement("fencedframe")}}-Elemente geladen werden.
- {{CSP("font-src")}}
  - : Gibt gültige Quellen für Schriften an, die mit {{cssxref("@font-face")}} geladen werden.
- {{CSP("frame-src")}}
  - : Gibt gültige Quellen für eingebettete Browsing-Kontexte an, die in Elemente wie {{HTMLElement("frame")}} und {{HTMLElement("iframe")}} geladen werden.
- {{CSP("img-src")}}
  - : Gibt gültige Quellen für Bilder und Favicons an.
- {{CSP("manifest-src")}}
  - : Gibt gültige Quellen für Anwendungsmanifest-Dateien an.
- {{CSP("media-src")}}
  - : Gibt gültige Quellen für das Laden von Medien mit den {{HTMLElement("audio")}}, {{HTMLElement("video")}} und {{HTMLElement("track")}}-Elementen an.
- {{CSP("object-src")}}
  - : Gibt gültige Quellen für die {{HTMLElement("object")}} und {{HTMLElement("embed")}}-Elemente an.
- {{CSP("prefetch-src")}} {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Gibt gültige Quellen an, die vorgeladen oder vorgerendert werden sollen.
- {{CSP("script-src")}}

  - : Gibt gültige Quellen für JavaScript und WebAssembly-Ressourcen an.

    [Fallback](#fallbacks) für `script-src-elem` und `script-src-attr`.

- {{CSP("script-src-elem")}}
  - : Gibt gültige Quellen für JavaScript {{HTMLElement("script")}}-Elemente an.
- {{CSP("script-src-attr")}}
  - : Gibt gültige Quellen für JavaScript-inline-Event-Handler an.
- {{CSP("style-src")}}

  - : Gibt gültige Quellen für Stylesheets an.

    [Fallback](#fallbacks) für `style-src-elem` und `style-src-attr`.

- {{CSP("style-src-elem")}}
  - : Gibt gültige Quellen für {{HTMLElement("style")}}-Elemente und {{HTMLElement("link")}}-Elemente mit `rel="stylesheet"` an.
- {{CSP("style-src-attr")}}
  - : Gibt gültige Quellen für Inline-Stile an, die auf einzelne DOM-Elemente angewendet werden.
- {{CSP("worker-src")}}
  - : Gibt gültige Quellen für [`Worker`](/de/docs/Web/API/Worker), [`SharedWorker`](/de/docs/Web/API/SharedWorker) oder [`ServiceWorker`](/de/docs/Web/API/ServiceWorker)-Skripte an.

Alle Fetch-Direktiven können mit dem Einzelwert `'none'` spezifiziert werden, was anzeigt, dass der spezifische Ressourcentyp vollständig blockiert werden sollte, oder als ein oder mehrere _Quell-Ausdrücke_, die gültige Quellen für diesen Ressourcentyp angeben. Siehe [Fetch-Direktive-Syntax](#fetch-direktive-syntax) für weitere Details.

#### Fallbacks

Einige Fetch-Direktiven fungieren als Fallbacks für andere, detailliertere Direktiven. Das bedeutet, dass, wenn die detailliertere Direktive nicht spezifiziert ist, der Fallback verwendet wird, um eine Richtlinie für diesen Ressourcentyp bereitzustellen.

- `default-src` ist ein Fallback für alle anderen Fetch-Direktiven.
- `script-src` ist ein Fallback für `script-src-attr` und `script-src-elem`.
- `style-src` ist ein Fallback für `style-src-attr` und `style-src-elem`.
- `child-src` ist ein Fallback für `frame-src` und `worker-src`.

Zum Beispiel:

- Wenn `img-src` weggelassen wird, aber `default-src` enthalten ist, dann wird die von `default-src` definierte Richtlinie auf Bilder angewendet.
- Wenn `script-src-elem` weggelassen wird, aber `script-src` enthalten ist, dann wird die von `script-src` definierte Richtlinie auf `<script>`-Elemente angewendet.
- Wenn `script-src-elem` und `script-src` beide weggelassen werden, aber `default-src` enthalten ist, dann wird die von `default-src` definierte Richtlinie auf `<script>`-Elemente angewendet.

### Dokument-Direktiven

Dokument-Direktiven regeln die Eigenschaften eines Dokuments oder [Workers](/de/docs/Web/API/Web_Workers_API), auf das eine Richtlinie
angewendet wird.

- {{CSP("base-uri")}}
  - : Beschränkt die URLs, die im {{HTMLElement("base")}}-Element eines Dokuments verwendet werden können.
- {{CSP("sandbox")}}
  - : Aktiviert eine Sandbox für die angeforderte Ressource ähnlich dem {{HTMLElement("iframe")}} [`sandbox`](/de/docs/Web/HTML/Reference/Elements/iframe#sandbox)-Attribut.

### Navigations-Direktiven

Navigations-Direktiven regeln, zu welchen Standorten ein Nutzer navigieren oder ein Formular senden kann, zum Beispiel.

- {{CSP("form-action")}}
  - : Beschränkt die URLs, die als Ziel von Formularübermittlungen aus einem gegebenen Kontext verwendet werden können.
- {{CSP("frame-ancestors")}}
  - : Gibt gültige Eltern an, die eine Seite mit {{HTMLElement("frame")}}, {{HTMLElement("iframe")}}, {{HTMLElement("object")}}, oder {{HTMLElement("embed")}} einbetten dürfen.

### Berichterstattungs-Direktiven

Berichterstattungs-Direktiven kontrollieren die Ziel-URL für CSP-Verletzungsberichte in `Content-Security-Policy` und {{HTTPHeader("Content-Security-Policy-Report-Only")}}.

- {{CSP("report-to")}}

  - : Stellt dem Browser ein Token zur Verfügung, das den Berichtsendpunkt oder die Gruppe von Endpunkten identifiziert, an die CSP-Verletzungsinformationen gesendet werden sollen.
    Die Endpunkte, die das Token darstellt, werden über andere HTTP-Header bereitgestellt, wie {{HTTPHeader("Reporting-Endpoints")}} und {{HTTPHeader("Report-To")}} {{deprecated_inline}}.

    > [!WARNING]
    > Diese Direktive soll [`report-uri`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/report-uri) ersetzen; in Browsern, die `report-to` unterstützen, wird die `report-uri`-Direktive ignoriert.
    > Bis `report-to` jedoch breit unterstützt wird, sollten Sie beide Header angeben, wie gezeigt (wo `endpoint_name` der Name eines separat bereitgestellten Endpunkts ist):
    >
    > ```http
    > Content-Security-Policy: …; report-uri https://endpoint.example.com; report-to endpoint_name
    > ```

### Weitere Direktiven

- {{CSP("require-trusted-types-for")}}
  - : Erzwingt [Trusted Types](/de/docs/Web/API/Trusted_Types_API) an den DOM-XSS-Injektionsstellen.
- {{CSP("trusted-types")}}
  - : Wird verwendet, um eine Whitelist von [Trusted Types](/de/docs/Web/API/Trusted_Types_API) Richtlinien zu spezifizieren.
    Trusted Types ermöglicht es Anwendungen, DOM-XSS-Injektionsstellen zu sperren, um nur nicht manipulierbare, getypte Werte anstelle von Zeichenfolgen zu akzeptieren.
- {{CSP("upgrade-insecure-requests")}}
  - : Weist User-Agents an, alle unsicheren URLs einer Seite (solche, die über HTTP bereitgestellt werden) so zu behandeln, als wären sie durch sichere URLs (die über HTTPS bereitgestellt werden) ersetzt worden.
    Diese Direktive ist für Websites mit einer großen Anzahl unsicherer Legacy-URLs gedacht, die umgeschrieben werden müssen.

### Veraltete Direktiven

- {{CSP("block-all-mixed-content")}} {{deprecated_inline}}

  - : Verhindert das Laden von Assets, die HTTP verwenden, wenn die Seite mit HTTPS geladen wird.

- {{CSP("report-uri")}} {{deprecated_inline}}
  - : Stellt dem Browser eine URL zur Verfügung, an die CSP-Verletzungsberichte gesendet werden sollen.
    Dies wurde durch die [`report-to`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/report-to)-Direktive ersetzt.

## Fetch-Direktive-Syntax

Alle Fetch-Direktiven können als einer der folgenden Werte spezifiziert werden:

- der Einzelwert `'none'`, der anzeigt, dass der spezifische Ressourcentyp vollständig blockiert werden sollte
- ein oder mehrere _Quell-Ausdrücke_, die gültige Quellen für diesen Ressourcentyp angeben.

Jeder Quell-Ausdruck nimmt eine der unten aufgeführten Formen an. Beachten Sie, dass nicht alle Formen auf alle Fetch-Direktiven anwendbar sind: Siehe die Dokumentation für jede Fetch-Direktive, um herauszufinden, welche Formen zutreffend sind.

Die Formate `<host-source>` und `<scheme-source>` müssen unzitiert sein, und alle anderen Formate müssen in Einzelanführungszeichen eingeschlossen sein.

### 'nonce-\<nonce_value>'

Dieser Wert besteht aus der Zeichenfolge `nonce-`, gefolgt von einem Nonce-Wert. Der Nonce-Wert darf alle Zeichen aus {{Glossary("Base64#base64_characters", "Base64")}} oder {{Glossary("Base64#url_and_filename_safe_base64", "URL-sicherem Base64")}} verwenden.

Diese Zeichenfolge ist ein zufälliger Wert, den der Server für jede HTTP-Antwort generiert. Zum Beispiel:

```plain
'nonce-416d1177-4d12-4e3b-b7c9-f6c409789fb8'
```

Der Server kann dann denselben Wert als den Wert des `nonce`-Attributs für alle {{htmlelement("script")}} oder {{htmlelement("style")}}-Ressourcen einfügen, die sie aus dem Dokument laden möchten.

Der Browser vergleicht den Wert aus der CSP-Direktive mit dem Wert im Element-Attribut und lädt die Ressource nur, wenn sie übereinstimmen.

Wenn eine Direktive einen Nonce und `unsafe-inline` enthält, ignoriert der Browser `unsafe-inline`.

Siehe [Nonces](/de/docs/Web/HTTP/Guides/CSP#nonces) im CSP-Leitfaden für weitere Nutzungshinweise.

> [!NOTE]
> Nonce-Quell-Ausdrücke sind nur auf {{htmlelement("script")}} und {{htmlelement("style")}}-Elemente anwendbar.

### '\<hash_algorithm>-<hash_value>'

Dieser Wert besteht aus einer Zeichenfolge, die einen Hash-Algorithmus identifiziert, gefolgt von `-`, gefolgt von einem Hash-Wert. Der Hash-Wert darf alle Zeichen aus {{Glossary("Base64#base64_characters", "Base64")}} oder {{Glossary("Base64#url_and_filename_safe_base64", "URL-sicherem Base64")}} verwenden.

- Der Hash-Algorithmus-Identifikator muss einer der folgenden sein: `sha256`, `sha384`, oder `sha512`.
- Der Hash-Wert ist der base64-codierte {{Glossary("hash_function", "Hash")}} einer `<script>` oder `<style>` Ressource, berechnet mit einem der folgenden Hash-Funktionen: SHA-256, SHA-384 oder SHA-512.

Zum Beispiel:

```plain
'sha256-cd9827ad...'
```

Wenn der Browser das Dokument empfängt, hasht er den Inhalt sämtlicher `<script>` und `<style>` Elemente, vergleicht das Ergebnis mit allen Hashes in der CSP-Direktive, und lädt die Ressource nur, wenn es eine Übereinstimmung gibt.

Wenn das Element eine externe Ressource lädt (zum Beispiel durch das [`src`](/de/docs/Web/HTML/Reference/Elements/script#src) Attribut), muss das Element auch das [`integrity`](/de/docs/Web/HTML/Reference/Elements/script#integrity) Attribut gesetzt haben.

Wenn eine Direktive einen Hash und `unsafe-inline` enthält, ignoriert der Browser `unsafe-inline`.

Siehe [Hashes](/de/docs/Web/HTTP/Guides/CSP#hashes) im CSP-Leitfaden für weitere Nutzungshinweise.

> [!NOTE]
> Hash-Quell-Ausdrücke sind nur auf {{htmlelement("script")}} und {{htmlelement("style")}}-Elemente anwendbar.

### \<host-source>

Die [URL](/de/docs/Web/URI) oder IP-Adresse eines {{Glossary("host", "Hosts")}}, der eine gültige Quelle für die Ressource ist.

Das Schema, die Portnummer und der Pfad sind optional.

Wenn das Schema weggelassen wird, wird das Schema des Ursprungs des Dokuments verwendet.

Beim Vergleich von Schemen sind sichere Upgrades erlaubt. Zum Beispiel:

- `http://example.com` erlaubt auch Ressourcen von `https://example.com`
- `ws://example.org` erlaubt auch Ressourcen von `wss://example.org`.

Wildcards (`'*'`) können für Subdomains, Hostadresse und Portnummer verwendet werden und geben an, dass alle rechtmäßigen Werte davon gültig sind. Zum Beispiel:

- `http://*.example.com` erlaubt Ressourcen von jeder Subdomain von `example.com`, über HTTP oder HTTPS.

Pfade, die mit `/` enden, stimmen mit jedem Pfad überein, zu dem sie ein Präfix sind. Zum Beispiel:

- `example.com/api/` erlaubt Ressourcen von `example.com/api/users/new`.

Pfade, die nicht mit `/` enden, werden genau verglichen. Zum Beispiel:

- `https://example.com/file.js` erlaubt Ressourcen von `https://example.com/file.js`, aber nicht `https://example.com/file.js/file2.js`.

### \<scheme-source>

Ein [Schema](/de/docs/Web/URI/Reference/Schemes), wie `https:`. Der Doppelpunkt ist erforderlich.

Sichere Upgrades sind erlaubt, so dass:

- `http:` auch Ressourcen erlaubt, die mit HTTPS geladen werden
- `ws:` auch Ressourcen erlaubt, die mit WSS geladen werden.

### 'self'

Ressourcen des angegebenen Typs dürfen nur aus demselben {{Glossary("origin", "Ursprung")}} wie das Dokument geladen werden.

Sichere Upgrades sind erlaubt. Zum Beispiel:

- Wenn das Dokument von `http://example.com` bereitgestellt wird, erlaubt eine CSP von `'self'` auch Ressourcen von `https://example.com`.
- Wenn das Dokument von `ws://example.org` bereitgestellt wird, erlaubt eine CSP von `'self'` auch Ressourcen von `wss://example.org`.

### 'unsafe-eval'

Standardmäßig, wenn eine CSP eine `default-src` oder eine `script-src` Direktive enthält, dann sind JavaScript-Funktionen, die ihre Argumente als JavaScript auswerten, deaktiviert. Dies schließt [`eval()`](/de/docs/Web/JavaScript/Reference/Global_Objects/eval), das [`code`](/de/docs/Web/API/Window/setTimeout#code) Argument von [`setTimeout()`](/de/docs/Web/API/Window/setTimeout), oder den {{jsxref("Function/Function()", "Function()")}} Konstruktor ein.

Das `unsafe-eval` Schlüsselwort kann verwendet werden, um diesen Schutz aufzuheben, und ermöglicht die dynamische Auswertung von Zeichenfolgen als JavaScript.

> [!WARNING]
> Entwickler:innen sollten `'unsafe-eval'` vermeiden, da es den Zweck einer CSP weitgehend zunichte macht.

Siehe [`eval()` und ähnliche APIs](/de/docs/Web/HTTP/Guides/CSP#eval_and_similar_apis) im CSP-Leitfaden für weitere Nutzungshinweise.

### 'wasm-unsafe-eval'

Standardmäßig, wenn eine CSP eine `default-src` oder eine `script-src` Direktive enthält, darf eine Seite WebAssembly nicht mit Funktionen wie [`WebAssembly.compileStreaming()`](/de/docs/WebAssembly/Reference/JavaScript_interface/compileStreaming_static) kompilieren.

Das `wasm-unsafe-eval` Schlüsselwort kann verwendet werden, um diesen Schutz aufzuheben. Dies ist eine viel sicherere Alternative zu `'unsafe-eval'`, da es keine allgemeine Auswertung von JavaScript ermöglicht.

### 'unsafe-inline'

Standardmäßig, wenn eine CSP eine `default-src` oder eine `script-src` Direktive enthält, darf Inline-JavaScript nicht ausgeführt werden. Dies beinhaltet:

- inline `<script>` Tags
- Inline-Event-Handler Attribute
- `javascript:` URLs.

Ähnlich, wenn eine CSP eine `default-src` oder eine `style-src` Direktive enthält, wird Inline-CSS nicht geladen, einschließlich:

- inline `<style>` Tags
- [`style`](/de/docs/Web/API/HTMLElement/style) Attribute.

Das `unsafe-inline` Schlüsselwort kann verwendet werden, um diesen Schutz aufzuheben und alle diese Formen zu laden.

> [!WARNING]
> Entwickler:innen sollten `'unsafe-inline'` vermeiden, da es den Zweck einer CSP weitgehend zunichte macht.

Siehe [Inline JavaScript](/de/docs/Web/HTTP/Guides/CSP#inline_javascript) im CSP-Leitfaden für weitere Nutzungshinweise.

### 'unsafe-hashes'

Standardmäßig, wenn eine CSP eine `default-src` oder eine `script-src` Direktive enthält, dürfen Event-Handler Attribute wie `onclick` und Inline-`style` Attribute nicht ausgeführt werden.

Der `'unsafe-hashes'` Ausdruck erlaubt es dem Browser, [Hash-Ausdrücke](#hash_algorithm-hash_value) für Inline-Event-Handler und `style` Attribute zu verwenden. Zum Beispiel könnte eine CSP eine Direktive wie diese enthalten:

```http
script-src 'unsafe-hashes' 'sha256-cd9827ad...'
```

Wenn der Hash-Wert mit dem Hash eines Inline-Event-Handler-Attributwerts oder eines `style` Attributwerts übereinstimmt, wird der Code ausgeführt werden dürfen.

> [!WARNING]
> Der `'unsafe-hashes'` Wert ist unsicher.
>
> Insbesondere ermöglicht er einen Angriff, bei dem der Inhalt des Inline-Event-Handler-Attributs als Inline-`<script>`-Element in das Dokument injiziert wird. Angenommen, der Inline-Event-Handler ist:
>
> ```html
> <button onclick="transferAllMyMoney()">Transfer all my money</button>
> ```
>
> Wenn ein Angreifer in der Lage ist, ein Inline-`<script>`-Element mit diesem Code zu injizieren, erlaubt die CSP, dass es automatisch ausgeführt wird.
>
> Dennoch ist `'unsafe-hashes'` viel sicherer als `'unsafe-inline'`.

### 'inline-speculation-rules'

Standardmäßig, wenn eine CSP eine `default-src` oder eine `script-src` Direktive enthält, darf Inline-JavaScript nicht ausgeführt werden. Der `'inline-speculation-rules'` erlaubt es dem Browser, Inline-`<script>`-Elemente zu laden, die ein [`type`](/de/docs/Web/HTML/Reference/Elements/script/type) Attribut von [`speculationrules`](/de/docs/Web/HTML/Reference/Elements/script/type/speculationrules) haben.

Siehe die [Speculation Rules API](/de/docs/Web/API/Speculation_Rules_API) für weitere Informationen.

### 'strict-dynamic'

Das `'strict-dynamic'` Schlüsselwort erweitert das durch einen [Nonce](#nonce-nonce_value) oder einen [Hash](#hash_algorithm-hash_value) verliehene Vertrauen auf Skripte, die dieses Skript dynamisch lädt, zum Beispiel durch Erstellen neuer `<script>` Tags mit [`Document.createElement()`](/de/docs/Web/API/Document/createElement) und deren Einfügen in das Dokument mit [`Node.appendChild()`](/de/docs/Web/API/Node/appendChild).

Wenn dieses Schlüsselwort in einer Direktive vorhanden ist, werden die folgenden Quell-Ausdrücke alle ignoriert:

- [\<host-source>](#host-source)
- [\<scheme-source>](#scheme-source)
- [`'self'`](#self)
- [`'unsafe-inline'`](#unsafe-inline)

Siehe [Das `strict-dynamic` Schlüsselwort](/de/docs/Web/HTTP/Guides/CSP#the_strict-dynamic_keyword) im CSP-Leitfaden für weitere Nutzungshinweise.

### 'report-sample'

Wenn dieser Ausdruck in einer Direktive enthalten ist, die Skripte oder Styles kontrolliert, und die Direktive dazu führt, dass der Browser irgendwelche Inline-Skripte, Inline-Stile oder Event-Handler Attribute blockiert, dann wird der [Verletzungsbericht](/de/docs/Web/HTTP/Guides/CSP#violation_reporting), den der Browser generiert, eine [`sample`](/de/docs/Web/API/CSPViolationReportBody/sample) Eigenschaft enthalten, die die ersten 40 Zeichen der blockierten Ressource umfasst.

## CSP in Workern

[Worker](/de/docs/Web/API/Worker) werden im Allgemeinen _nicht_ von der Inhalts-Sicherheitsrichtlinie des Dokuments (oder des übergeordneten Workers), das sie erstellt hat, geregelt. Um eine Inhalts-Sicherheitsrichtlinie für den Worker anzugeben, setzen Sie einen `Content-Security-Policy` Antwort-Header für die Anfrage, die das Worker-Skript selbst angefordert hat.

Die Ausnahme ist, wenn der Ursprung des Worker-Skripts ein global eindeutiger Bezeichner ist (zum Beispiel, wenn seine URL ein Schema von data oder blob hat). In diesem Fall übernimmt der Worker die Inhalts-Sicherheitsrichtlinie des Dokuments oder des Workers, der ihn erstellt hat.

## Mehrere Inhalts-Sicherheitsrichtlinien

Der CSP-Mechanismus ermöglicht es, mehrere Richtlinien für eine Ressource zu spezifizieren, einschließlich über den `Content-Security-Policy` Header, den {{HTTPHeader("Content-Security-Policy-Report-Only")}} Header und ein {{HTMLElement("meta")}}-Element.

Sie können den `Content-Security-Policy` Header mehr als einmal verwenden, wie im untenstehenden Beispiel. Achten Sie besonders auf die {{CSP("connect-src")}} Direktive hier. Selbst wenn die zweite Richtlinie die Verbindung erlauben würde, enthält die erste Richtlinie `connect-src 'none'`. Die Hinzufügung zusätzlicher Richtlinien _kann nur die Fähigkeiten der geschützten Ressource weiter einschränken_, was bedeutet, dass keine Verbindung erlaubt wird, und somit wird als strengste Richtlinie `connect-src 'none'` erzwungen.

```http
Content-Security-Policy: default-src 'self' http://example.com;
                          connect-src 'none';
Content-Security-Policy: connect-src http://example.com/;
                          script-src http://example.com/
```

## Beispiele

### Unsicheren Inline-Code deaktivieren und nur HTTPS-Ressourcen zulassen

Dieser HTTP-Header setzt die Standardrichtlinie, um das Laden von Ressourcen (Bilder, Schriften, Skripte, etc.) nur über HTTPS zuzulassen. Da die `unsafe-inline` und `unsafe-eval` Direktiven nicht gesetzt sind, werden Inline-Skripte blockiert.

```http
Content-Security-Policy: default-src https:
```

Die gleichen Einschränkungen können mit dem HTML {{htmlelement("meta")}}-Element angewandt werden.

```html
<meta http-equiv="Content-Security-Policy" content="default-src https:" />
```

### Inline-Code und HTTPS-Ressourcen zulassen, aber Plugins deaktivieren

Diese Richtlinie könnte auf einer bestehenden Website verwendet werden, die zu viel Inline-Code verwendet, um diesen zu beheben, um sicherzustellen, dass Ressourcen nur über HTTPS geladen werden und Plugins deaktiviert werden:

```http
Content-Security-Policy: default-src https: 'unsafe-eval' 'unsafe-inline'; object-src 'none'
```

### Verstöße melden, aber beim Testen nicht durchsetzen

Dieses Beispiel setzt die gleichen Einschränkungen wie das vorherige Beispiel, verwendet jedoch den {{httpheader("Content-Security-Policy-Report-Only")}} Header und die {{CSP("report-to")}} Direktive. Dieser Ansatz wird während des Testens verwendet, um Verstöße zu melden, aber nicht zu blockieren, dass Code ausgeführt wird.

Die Endpunkte (URLs), an die Berichte gesendet werden, werden mit dem {{HTTPHeader("Reporting-Endpoints")}} HTTP-Antwort-Header definiert.

```http
Reporting-Endpoints: csp-endpoint="https://example.com/csp-reports"
```

Ein bestimmter Endpunkt wird dann als Berichts-Ziel in der CSP-Richtlinie mit der {{CSP("report-to")}} Direktive ausgewählt.

```http
Content-Security-Policy-Report-Only: default-src https:; report-uri /csp-violation-report-url/; report-to csp-endpoint
```

Beachten Sie, dass die {{CSP("report-uri")}} {{deprecated_inline}} Direktive ebenfalls oben angegeben ist, da `report-to` noch nicht von allen Browsern breit unterstützt wird.

Sehen Sie sich [Content Security Policy (CSP) Implementierung](/de/docs/Web/Security/Practical_implementation_guides/CSP) für weitere Beispiele an.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTTPHeader("Content-Security-Policy-Report-Only")}}
- [Erfahren Sie mehr über: Content Security Policy](/de/docs/Web/HTTP/Guides/CSP)
- [Inhalts-Sicherheit in WebExtensions](/de/docs/Mozilla/Add-ons/WebExtensions/Content_Security_Policy)
- [Eine strikte Richtlinie übernehmen](https://csp.withgoogle.com/docs/strict-csp.html)
- [CSP Evaluator](https://github.com/google/csp-evaluator) - Bewerten Sie Ihre Content Security Policy
