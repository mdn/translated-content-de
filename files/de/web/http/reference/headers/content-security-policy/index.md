---
title: Content-Security-Policy (CSP)
short-title: Content-Security-Policy
slug: Web/HTTP/Reference/Headers/Content-Security-Policy
l10n:
  sourceCommit: 848771d9efdc57ad84d643081cf91e89355c751b
---

{{HTTPSidebar}}

Der HTTP-**`Content-Security-Policy`**-Antwort-Header ermöglicht es Website-Administratoren, die Ressourcen zu kontrollieren, die der User-Agent für eine gegebene Seite laden darf. Abgesehen von einigen Ausnahmen umfassen Richtlinien hauptsächlich das Festlegen von Server-Ursprüngen und Skript-Endpunkten. Dies hilft, sich gegen {{Glossary("cross-site_scripting", "Cross-Site-Scripting")}}-Angriffe zu schützen.

Siehe den [Content Security Policy (CSP)](/de/docs/Web/HTTP/Guides/CSP)-Leitfaden für Details darüber, wie eine CSP dem Browser übermittelt wird, wie sie aussieht, sowie Anwendungsfälle und Bereitstellungsstrategien.

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

## Direktiven

### Fetch-Direktiven

Fetch-Direktiven kontrollieren die Orte, von denen bestimmte Ressourcentypen geladen werden dürfen.

- {{CSP("child-src")}}

  - : Definiert die gültigen Quellen für [Web-Worker](/de/docs/Web/API/Web_Workers_API) und verschachtelte Browsing-Kontexte, die mit Elementen wie {{HTMLElement("frame")}} und {{HTMLElement("iframe")}} geladen werden.

    [Fallback](#fallbacks) für `frame-src` und `worker-src`.

- {{CSP("connect-src")}}
  - : Beschränkt die URLs, die über Skript-Schnittstellen geladen werden können.
- {{CSP("default-src")}}

  - : Dient als Fallback für die anderen {{Glossary("Fetch_directive", "Fetch-Direktiven")}}.

    [Fallback](#fallbacks) für alle anderen Fetch-Direktiven.

- {{CSP("fenced-frame-src")}} {{experimental_inline}}
  - : Spezifiziert gültige Quellen für verschachtelte Browsing-Kontexte, die in {{HTMLElement("fencedframe")}}-Elemente geladen werden.
- {{CSP("font-src")}}
  - : Spezifiziert gültige Quellen für Schriftarten, die mit {{cssxref("@font-face")}} geladen werden.
- {{CSP("frame-src")}}
  - : Spezifiziert gültige Quellen für verschachtelte Browsing-Kontexte, die in Elemente wie {{HTMLElement("frame")}} und {{HTMLElement("iframe")}} geladen werden.
- {{CSP("img-src")}}
  - : Spezifiziert gültige Quellen von Bildern und Favicons.
- {{CSP("manifest-src")}}
  - : Spezifiziert gültige Quellen von Anwendungsmanifest-Dateien.
- {{CSP("media-src")}}
  - : Spezifiziert gültige Quellen für das Laden von Medien mit den {{HTMLElement("audio")}}, {{HTMLElement("video")}} und {{HTMLElement("track")}} Elementen.
- {{CSP("object-src")}}
  - : Spezifiziert gültige Quellen für die {{HTMLElement("object")}} und {{HTMLElement("embed")}} Elemente.
- {{CSP("prefetch-src")}} {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Spezifiziert gültige Quellen zum Vorababrufen oder Vorablernden.
- {{CSP("script-src")}}

  - : Spezifiziert gültige Quellen für JavaScript- und WebAssembly-Ressourcen.

    [Fallback](#fallbacks) für `script-src-elem` und `script-src-attr`.

- {{CSP("script-src-elem")}}
  - : Spezifiziert gültige Quellen für JavaScript-{{HTMLElement("script")}}-Elemente.
- {{CSP("script-src-attr")}}
  - : Spezifiziert gültige Quellen für JavaScript Inline-Event-Handler.
- {{CSP("style-src")}}

  - : Spezifiziert gültige Quellen für Stylesheets.

    [Fallback](#fallbacks) für `style-src-elem` und `style-src-attr`.

- {{CSP("style-src-elem")}}
  - : Spezifiziert gültige Quellen für Stylesheets-{{HTMLElement("style")}}-Elemente und {{HTMLElement("link")}}-Elemente mit `rel="stylesheet"`.
- {{CSP("style-src-attr")}}
  - : Spezifiziert gültige Quellen für Inline-Styles, die auf einzelne DOM-Elemente angewendet werden.
- {{CSP("worker-src")}}
  - : Spezifiziert gültige Quellen für [`Worker`](/de/docs/Web/API/Worker), [`SharedWorker`](/de/docs/Web/API/SharedWorker) oder [`ServiceWorker`](/de/docs/Web/API/ServiceWorker)-Skripte.

Alle Fetch-Direktiven können der Einzelwert `'none'` zugewiesen werden, was bedeutet, dass der spezifische Ressourcentyp vollständig blockiert werden soll, oder als ein oder mehrere _Quellausdrücke_, die gültige Quellen für diesen Ressourcentyp angeben. Weitere Details finden Sie unter [Fetch-Direktiven-Syntax](#fetch-direktiven-syntax).

#### Fallbacks

Einige Fetch-Direktiven fungieren als Fallbacks für andere, detailliertere Direktiven. Dies bedeutet, dass, wenn die detailliertere Direktive nicht angegeben ist, der Fallback verwendet wird, um eine Richtlinie für diesen Ressourcentyp bereitzustellen.

- `default-src` ist ein Fallback für alle anderen Fetch-Direktiven.
- `script-src` ist ein Fallback für `script-src-attr` und `script-src-elem`.
- `style-src` ist ein Fallback für `style-src-attr` und `style-src-elem`.
- `child-src` ist ein Fallback für `frame-src` und `worker-src`.

Zum Beispiel:

- Wenn `img-src` weggelassen wird, aber `default-src` enthalten ist, wird die von `default-src` definierte Richtlinie auf Bilder angewendet.
- Wenn `script-src-elem` weggelassen wird, aber `script-src` enthalten ist, wird die von `script-src` definierte Richtlinie auf `<script>`-Elemente angewendet.
- Wenn `script-src-elem` und `script-src` beide weggelassen werden, aber `default-src` enthalten ist, wird die von `default-src` definierte Richtlinie auf `<script>`-Elemente angewendet.

### Dokument-Direktiven

Dokument-Direktiven regeln die Eigenschaften eines Dokuments oder [Workers](/de/docs/Web/API/Web_Workers_API)-Umgebung, auf die eine Richtlinie angewendet wird.

- {{CSP("base-uri")}}
  - : Beschränkt die URLs, die im {{HTMLElement("base")}}-Element eines Dokuments verwendet werden können.
- {{CSP("sandbox")}}
  - : Aktiviert eine Sandbox für die angeforderte Ressource ähnlich dem {{HTMLElement("iframe")}} [`sandbox`](/de/docs/Web/HTML/Element/iframe#sandbox)-Attribut.

### Navigations-Direktiven

Navigations-Direktiven regeln, zu welchen Orten ein Benutzer navigieren oder ein Formular einreichen kann, zum Beispiel.

- {{CSP("form-action")}}
  - : Beschränkt die URLs, die als Ziel für Formularübermittlungen aus einem gegebenen Kontext verwendet werden können.
- {{CSP("frame-ancestors")}}
  - : Spezifiziert gültige Eltern, die eine Seite mit {{HTMLElement("frame")}}, {{HTMLElement("iframe")}}, {{HTMLElement("object")}} oder {{HTMLElement("embed")}} einbetten dürfen.

### Berichts-Direktiven

Berichts-Direktiven steuern die Ziel-URL für CSP-Verstoßberichte in `Content-Security-Policy` und {{HTTPHeader("Content-Security-Policy-Report-Only")}}.

- {{CSP("report-to")}}

  - : Gibt dem Browser ein Token an, das den Berichtsendpunkt oder eine Gruppe von Endpunkten identifiziert, an die CSP-Verstoßinformationen gesendet werden.
    Die Endpunkte, die das Token darstellt, werden durch andere HTTP-Header bereitgestellt, wie {{HTTPHeader("Reporting-Endpoints")}} und {{HTTPHeader("Report-To")}} {{deprecated_inline}}.

    > [!WARNING]
    > Diese Direktive soll [`report-uri`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/report-uri) ersetzen; in Browsern, die `report-to` unterstützen, wird die `report-uri`-Direktive ignoriert.
    > Solange `report-to` jedoch noch nicht breit unterstützt wird, sollten Sie beide Header angeben, wie gezeigt (wobei `endpoint_name` der Name eines separat bereitgestellten Endpunkts ist):
    >
    > ```http
    > Content-Security-Policy: …; report-uri https://endpoint.example.com; report-to endpoint_name
    > ```

### Andere Direktiven

- {{CSP("require-trusted-types-for")}}
  - : Erzwingt [Trusted Types](/de/docs/Web/API/Trusted_Types_API) an den DOM-XSS-Injektionsstellen.
- {{CSP("trusted-types")}}
  - : Wird verwendet, um eine Positivliste von [Trusted Types](/de/docs/Web/API/Trusted_Types_API)-Richtlinien anzugeben.
    Trusted Types ermöglicht Anwendungen, DOM-XSS-Injektionsstellen zu sperren, sodass nur nicht manipulierbare, typisierte Werte anstelle von Strings akzeptiert werden.
- {{CSP("upgrade-insecure-requests")}}
  - : Weist Benutzeragenten an, alle unsicheren URLs einer Seite (die über HTTP bereitgestellt werden) so zu behandeln, als wären sie durch sichere URLs (die über HTTPS bereitgestellt werden) ersetzt worden. Diese Direktive ist für Websites mit einer großen Anzahl unsicherer, veralteter URLs gedacht, die umgeschrieben werden müssen.

### Veraltete Direktiven

- {{CSP("block-all-mixed-content")}} {{deprecated_inline}}

  - : Verhindert das Laden jeglicher Assets über HTTP, wenn die Seite über HTTPS geladen wird.

- {{CSP("report-uri")}} {{deprecated_inline}}
  - : Stellt dem Browser eine URL zur Verfügung, an die CSP-Verstoßberichte gesendet werden sollen. Dies wurde durch die [`report-to`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/report-to)-Direktive ersetzt.

## Fetch-Direktiven-Syntax

Alle Fetch-Direktiven können als einer der folgenden Werte angegeben werden:

- der Einzelwert `'none'`, der angibt, dass der spezifische Ressourcentyp vollständig blockiert werden soll
- ein oder mehrere _Quellausdrucks_-Werte, die gültige Quellen für diesen Ressourcentyp angeben.

Jeder Quellausdruck nimmt eine der unten aufgeführten Formen an. Beachten Sie, dass nicht alle Formen für alle Fetch-Direktiven anwendbar sind: Siehe die Dokumentation für jede Fetch-Direktive, um herauszufinden, welche Formen für sie anwendbar sind.

Die `<host-source>`- und `<scheme-source>`-Formate müssen unzitiert sein, und alle anderen Formate müssen in einfache Anführungszeichen eingeschlossen werden.

### 'nonce-\<nonce_value>'

Dieser Wert besteht aus dem String `nonce-` gefolgt von einem {{Glossary("Base64", "Base64-kodierten")}} String. Dieser String ist ein zufälliger Wert, den der Server für jede HTTP-Antwort generiert. Zum Beispiel:

```plain
'nonce-416d1177-4d12-4e3b-b7c9-f6c409789fb8'
```

Der Server kann dann denselben Wert als Wert des `nonce`-Attributs von beliebigen {{htmlelement("script")}}- oder {{htmlelement("style")}}-Ressourcen einschließen, die im Dokument geladen werden sollen.

Der Browser vergleicht den Wert aus der CSP-Richtlinie mit dem Wert im Elementattribut und lädt die Ressource nur, wenn sie übereinstimmen.

Wenn eine Direktive ein Nonce und `unsafe-inline` enthält, ignoriert der Browser `unsafe-inline`.

Weitere Informationen zur Verwendung finden Sie unter [Nonces](/de/docs/Web/HTTP/Guides/CSP#nonces) im CSP-Leitfaden.

> [!NOTE]
> Nonce-Quellausdrücke sind nur auf {{htmlelement("script")}}- und {{htmlelement("style")}}-Elemente anwendbar.

### '\<hash_algorithm>-<hash_value>'

Dieser Wert besteht aus einem String, der einen Hash-Algorithmus identifiziert, gefolgt von `-`, gefolgt von einem {{Glossary("Base64", "Base64-kodierten")}} String, der den Hash-Wert darstellt.

- Der Hash-Algorithmus-Identifikator muss einer der folgenden sein: `sha256`, `sha384` oder `sha512`.
- Der Hash-Wert ist der Base64-kodierte {{Glossary("hash_function", "Hash")}} einer `<script>`- oder `<style>`-Ressource, berechnet mit einer der folgenden Hash-Funktionen: SHA-256, SHA-384 oder SHA-512.

Zum Beispiel:

```plain
'sha256-cd9827ad...'
```

Wenn der Browser das Dokument empfängt, hasht er den Inhalt von beliebigen `<script>`- und `<style>`-Elementen, vergleicht das Ergebnis mit den Hashes in der CSP-Direktive und lädt die Ressource nur, wenn es eine Übereinstimmung gibt.

Wenn das Element eine externe Ressource lädt (z.B. mit dem [`src`](/de/docs/Web/HTML/Element/script#src)-Attribut), muss das Element auch das [`integrity`](/de/docs/Web/HTML/Element/script#integrity)-Attribut gesetzt haben.

Wenn eine Direktive einen Hash und `unsafe-inline` enthält, ignoriert der Browser `unsafe-inline`.

Für weitere Informationen zur Verwendung siehe [Hashes](/de/docs/Web/HTTP/Guides/CSP#hashes) im CSP-Leitfaden.

> [!NOTE]
> Hash-Quellausdrücke sind nur auf {{htmlelement("script")}}- und {{htmlelement("style")}}-Elemente anwendbar.

### \<host-source>

Die [URL](/de/docs/Web/URI) oder die IP-Adresse eines {{Glossary("host", "Hosts")}}, der eine gültige Quelle für die Ressource ist.

Das Schema, die Portnummer und der Pfad sind optional.

Wenn das Schema weggelassen wird, wird das Schema des Ursprungs des Dokuments verwendet.

Beim Abgleichen von Schemen sind sichere Upgrades erlaubt. Zum Beispiel:

- `http://example.com` erlaubt auch Ressourcen von `https://example.com`
- `ws://example.org` erlaubt auch Ressourcen von `wss://example.org`.

Wildcards (`'*'`) können für Subdomains, Hostadresse und Portnummer verwendet werden und zeigen an, dass alle zulässigen Werte jedes einzelnen gültig sind. Zum Beispiel:

- `http://*.example.com` erlaubt Ressourcen von beliebigen Subdomains von `example.com`, über HTTP oder HTTPS.

Pfade, die mit `/` enden, stimmen mit jedem Pfad überein, dessen Präfix sie sind. Zum Beispiel:

- `example.com/api/` erlaubt Ressourcen von `example.com/api/users/new`.

Pfade, die nicht mit `/` enden, werden genau abgeglichen. Zum Beispiel:

- `https://example.com/file.js` erlaubt Ressourcen von `https://example.com/file.js`, aber nicht von `https://example.com/file.js/file2.js`.

### \<scheme-source>

Ein [Schema](/de/docs/Web/URI/Reference/Schemes), wie `https:`. Der Doppelpunkt ist erforderlich.

Sichere Upgrades sind erlaubt, also:

- `http:` erlaubt auch Ressourcen, die mit HTTPS geladen werden
- `ws:` erlaubt auch Ressourcen, die mit WSS geladen werden.

### 'self'

Ressourcen des gegebenen Typs dürfen nur vom selben {{Glossary("origin", "Ursprung")}} wie das Dokument geladen werden.

Sichere Upgrades sind erlaubt. Zum Beispiel:

- Wenn das Dokument von `http://example.com` bereitgestellt wird, wird eine CSP von `'self'` auch Ressourcen von `https://example.com` erlauben.
- Wenn das Dokument von `ws://example.org` bereitgestellt wird, wird eine CSP von `'self'` auch Ressourcen von `wss://example.org` erlauben.

### 'unsafe-eval'

Standardmäßig, wenn eine CSP eine `default-src` oder eine `script-src`-Direktive enthält, sind JavaScript-Funktionen, die ihre Argumente als JavaScript auswerten, deaktiviert. Dies umfasst [`eval()`](/de/docs/Web/JavaScript/Reference/Global_Objects/eval), das [`code`](/de/docs/Web/API/Window/setTimeout#code)-Argument zu [`setTimeout()`](/de/docs/Web/API/Window/setTimeout) oder den {{jsxref("Function/Function()", "Function()")}}-Konstruktor.

Das `unsafe-eval`-Schlüsselwort kann verwendet werden, um diesen Schutz rückgängig zu machen und die dynamische Auswertung von Strings als JavaScript zu erlauben.

> [!WARNING]
> Entwickler sollten `'unsafe-eval'` vermeiden, da es viel von dem Zweck einer CSP ad absurdum führt.

Weitere Informationen zur Verwendung finden Sie unter [`eval()` und ähnliche APIs](/de/docs/Web/HTTP/Guides/CSP#eval_and_similar_apis) im CSP-Leitfaden.

### 'wasm-unsafe-eval'

Standardmäßig, wenn eine CSP eine `default-src` oder eine `script-src`-Direktive enthält, darf eine Seite kein WebAssembly mit Funktionen wie [`WebAssembly.compileStreaming()`](/de/docs/WebAssembly/Reference/JavaScript_interface/compileStreaming_static) kompilieren.

Das `wasm-unsafe-eval`-Schlüsselwort kann verwendet werden, um diesen Schutz rückgängig zu machen. Dies ist eine viel sicherere Alternative zu `'unsafe-eval'`, da es keine allgemeine Auswertung von JavaScript ermöglicht.

### 'unsafe-inline'

Standardmäßig, wenn eine CSP eine `default-src` oder eine `script-src`-Direktive enthält, darf kein Inline-JavaScript ausgeführt werden. Das umfasst:

- Inline-`<script>`-Tags
- Inline-Event-Handler-Attribute
- `javascript:`-URLs.

Ebenso, wenn eine CSP `default-src` oder eine `style-src`-Direktive enthält, wird kein Inline-CSS geladen, einschließlich:

- Inline-`<style>`-Tags
- [`style`](/de/docs/Web/API/HTMLElement/style)-Attribute.

Das `unsafe-inline`-Schlüsselwort kann verwendet werden, um diesen Schutz rückgängig zu machen und das Laden all dieser Formen zu erlauben.

> [!WARNING]
> Entwickler sollten `'unsafe-inline'` vermeiden, da es viel von dem Zweck einer CSP ad absurdum führt.

Weitere Informationen zur Verwendung finden Sie unter [Inline-JavaScript](/de/docs/Web/HTTP/Guides/CSP#inline_javascript) im CSP-Leitfaden.

### 'unsafe-hashes'

Standardmäßig, wenn eine CSP eine `default-src` oder eine `script-src`-Direktive enthält, dürfen Inline-Event-Handler-Attribute wie `onclick` und Inline-`style`-Attribute nicht ausgeführt werden.

Der `'unsafe-hashes'`-Ausdruck erlaubt es dem Browser, [Hash-Ausdrücke](#hash_algorithm-hash_value) für Inline-Event-Handler und `style`-Attribute zu verwenden. Zum Beispiel könnte eine CSP eine Direktive wie diese enthalten:

```http
script-src 'unsafe-hashes' 'sha256-cd9827ad...'
```

Wenn der Hash-Wert mit dem Hash eines Inline-Event-Handler-Attributwertes oder eines `style`-Attributwertes übereinstimmt, wird der Code erlaubt, ausgeführt zu werden.

> [!WARNING]
> Der `'unsafe-hashes'`-Wert ist unsicher.
>
> Insbesondere ermöglicht er einen Angriff, bei dem der Inhalt des Inline-Event-Handler-Attributs als Inline-`<script>`-Element in das Dokument injiziert wird. Angenommen, der Inline-Event-Handler ist:
>
> ```html
> <button onclick="transferAllMyMoney()">Transfer all my money</button>
> ```
>
> Wenn ein Angreifer ein Inline-`<script>`-Element mit diesem Code injizieren kann, wird die CSP es erlauben, es automatisch auszuführen.
>
> Allerdings ist `'unsafe-hashes'` viel sicherer als `'unsafe-inline'`.

### 'inline-speculation-rules'

Standardmäßig, wenn eine CSP eine `default-src` oder eine `script-src`-Direktive enthält, darf kein Inline-JavaScript ausgeführt werden. Der `'inline-speculation-rules'` erlaubt es dem Browser, Inline-`<script>`-Elemente zu laden, die ein [`type`](/de/docs/Web/HTML/Element/script/type)-Attribut von [`speculationrules`](/de/docs/Web/HTML/Element/script/type/speculationrules) haben.

Siehe die [Speculation Rules API](/de/docs/Web/API/Speculation_Rules_API) für weitere Informationen.

### 'strict-dynamic'

Das `'strict-dynamic'`-Schlüsselwort macht das Vertrauen, das einem Skript durch einen [Nonce](#nonce-nonce_value) oder einen [Hash](#hash_algorithm-hash_value) verliehen wurde, auf Skripte, die dieses Skript dynamisch lädt, zum Beispiel durch Erstellen neuer `<script>`-Tags mithilfe von [`Document.createElement()`](/de/docs/Web/API/Document/createElement) und anschließendes Einfügen in das Dokument mithilfe von [`Node.appendChild()`](/de/docs/Web/API/Node/appendChild) erstreckt.

Wenn dieses Schlüsselwort in einer Direktive vorhanden ist, werden die folgenden Quellausdruckswerte alle ignoriert:

- [\<host-source>](#host-source)
- [\<scheme-source>](#scheme-source)
- [`'self'`](#self)
- [`'unsafe-inline'`](#unsafe-inline)

Weitere Informationen zur Verwendung finden Sie unter [Das `strict-dynamic`-Schlüsselwort](/de/docs/Web/HTTP/Guides/CSP#the_strict-dynamic_keyword) im CSP-Leitfaden.

### 'report-sample'

Wenn dieser Ausdruck in einer Direktive enthalten ist, die Skripte oder Stile steuert, und die Direktive dazu führt, dass der Browser irgendein Inline-Skript, Inline-Stil oder Event-Handler-Attribute blockiert, wird der [Verstoßbericht](/de/docs/Web/HTTP/Guides/CSP#violation_reporting), den der Browser generiert, eine [`sample`](/de/docs/Web/API/CSPViolationReportBody/sample)-Eigenschaft enthalten, die die ersten 40 Zeichen der blockierten Ressource angibt.

## CSP in Workern

[Workers](/de/docs/Web/API/Worker) werden im Allgemeinen _nicht_ von der Content-Security-Policy des Dokuments (oder des Eltern-Workers), das sie erstellt hat, regiert. Um eine Content-Security-Policy für den Worker festzulegen, setzen Sie einen `Content-Security-Policy`-Antwort-Header für die Anfrage, die das Worker-Skript selbst angefordert hat.

Die Ausnahme ist, wenn der Ursprung des Worker-Skripts ein global eindeutiger Bezeichner ist (zum Beispiel, wenn die URL ein Schema von `data` oder `blob` hat). In diesem Fall übernimmt der Worker die Content-Security-Policy des Dokuments oder Workers, das ihn erstellt hat.

## Mehrere Content-Security-Policies

Der CSP-Mechanismus ermöglicht es, mehrere Richtlinien für eine Ressource zu spezifizieren, einschließlich über den `Content-Security-Policy`-Header, den {{HTTPHeader("Content-Security-Policy-Report-Only")}}-Header und ein {{HTMLElement("meta")}}-Element.

Sie können den `Content-Security-Policy`-Header mehr als einmal verwenden, wie im folgenden Beispiel. Achten Sie besonders auf die {{CSP("connect-src")}}-Direktive hier. Obwohl die zweite Richtlinie die Verbindung erlauben würde, enthält die erste Richtlinie `connect-src 'none'`. Das Hinzufügen zusätzlicher Richtlinien _kann nur weiter einschränken_, was bedeutet, dass keine Verbindung erlaubt ist, und als strengste Richtlinie wird `connect-src 'none'` durchgesetzt.

```http
Content-Security-Policy: default-src 'self' http://example.com;
                          connect-src 'none';
Content-Security-Policy: connect-src http://example.com/;
                          script-src http://example.com/
```

## Beispiele

### Unsicheren Inline-Code deaktivieren und nur HTTPS-Ressourcen erlauben

Dieser HTTP-Header setzt die Standardrichtlinie auf das Laden von Ressourcen (Bilder, Schriftarten, Skripte usw.) nur über HTTPS. Da die Direktiven `unsafe-inline` und `unsafe-eval` nicht gesetzt sind, werden Inline-Skripte blockiert.

```http
Content-Security-Policy: default-src https:
```

Die gleichen Einschränkungen können mit dem HTML-{{htmlelement("meta")}}-Element angewendet werden.

```html
<meta http-equiv="Content-Security-Policy" content="default-src https:" />
```

### Inline-Code und HTTPS-Ressourcen erlauben, aber Plugins deaktivieren

Diese Richtlinie könnte auf einer bestehenden Seite verwendet werden, die zu viel Inline-Code verwendet, um sie zu beheben, um sicherzustellen, dass Ressourcen nur über HTTPS geladen werden und Plugins deaktiviert sind:

```http
Content-Security-Policy: default-src https: 'unsafe-eval' 'unsafe-inline'; object-src 'none'
```

### Verstöße melden, aber nicht erzwingen beim Testen

Dieses Beispiel setzt die gleichen Einschränkungen wie das vorherige Beispiel, jedoch mit dem {{httpheader("Content-Security-Policy-Report-Only")}}-Header und der {{CSP("report-to")}}-Direktive. Dieser Ansatz wird beim Testen verwendet, um Verstöße zu melden, aber den Code nicht zu blockieren.

Endpunkte (URLs), an die Berichte gesendet werden sollen, werden mit dem {{HTTPHeader("Reporting-Endpoints")}}-HTTP-Antwort-Header definiert.

```http
Reporting-Endpoints: csp-endpoint="https://example.com/csp-reports"
```

Ein bestimmter Endpunkt wird dann als Berichtsziel in der CSP-Richtlinie anhand der {{CSP("report-to")}}-Direktive ausgewählt.

```http
Content-Security-Policy-Report-Only: default-src https:; report-uri /csp-violation-report-url/; report-to csp-endpoint
```

Beachten Sie, dass die {{CSP("report-uri")}} {{deprecated_inline}}-Direktive auch oben angegeben ist, da `report-to` noch nicht breit von Browsern unterstützt wird.

Weitere Beispiele finden Sie in der [Content Security Policy (CSP)-Implementation](/de/docs/Web/Security/Practical_implementation_guides/CSP).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTTPHeader("Content-Security-Policy-Report-Only")}}
- [Mehr über: Content Security Policy lernen](/de/docs/Web/HTTP/Guides/CSP)
- [Content Security in WebExtensions](/de/docs/Mozilla/Add-ons/WebExtensions/Content_Security_Policy)
- [Adoptieren einer strikten Richtlinie](https://csp.withgoogle.com/docs/strict-csp.html)
- [CSP Evaluator](https://github.com/google/csp-evaluator) - Bewerten Sie Ihre Content-Security-Policy
