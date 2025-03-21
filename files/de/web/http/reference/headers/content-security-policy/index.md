---
title: Content-Security-Policy (CSP)
short-title: Content-Security-Policy
slug: Web/HTTP/Reference/Headers/Content-Security-Policy
l10n:
  sourceCommit: 28da811a08240c53da000bfdd8319338290e3f0b
---

{{HTTPSidebar}}

Der HTTP-Header **`Content-Security-Policy`** ermöglicht es Website-Administratoren, die Ressourcen zu kontrollieren, die ein Benutzeragent für eine gegebene Seite laden darf. Mit wenigen Ausnahmen beinhalten Richtlinien meist die Angabe von Serverursprüngen und Skript-Endpunkten. Dies trägt dazu bei, sich gegen {{Glossary("cross-site_scripting", "Cross-Site Scripting")}} Angriffe zu schützen.

Sehen Sie sich den [Content Security Policy (CSP)](/de/docs/Web/HTTP/Guides/CSP) Leitfaden für Details darüber an, wie eine CSP an den Browser übermittelt wird, wie sie aussieht, sowie für Anwendungsfälle und Bereitstellungsstrategien.

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

wobei `<policy-directive>` aus `<directive> <value>` besteht, ohne interne Satzzeichen.

## Richtlinien

### Abrufrichtlinien

Abrufrichtlinien kontrollieren die Orte, von denen bestimmte Ressourcentypen geladen werden dürfen.

- {{CSP("child-src")}}

  - : Definiert die gültigen Quellen für [Web Workers](/de/docs/Web/API/Web_Workers_API) und geschachtelte Browsing-Kontexte, die mit Elementen wie {{HTMLElement("frame")}} und {{HTMLElement("iframe")}} geladen werden.

    [Fallback](#fallbacks) für `frame-src` und `worker-src`.

- {{CSP("connect-src")}}
  - : Beschränkt die URLs, die mit Skript-Schnittstellen geladen werden können.
- {{CSP("default-src")}}

  - : Dient als Fallback für die anderen {{Glossary("Fetch_directive", "Abrufrichtlinien")}}.

    [Fallback](#fallbacks) für alle anderen Abrufrichtlinien.

- {{CSP("fenced-frame-src")}} {{experimental_inline}}
  - : Gibt gültige Quellen für geschachtelte Browsing-Kontexte an, die in {{HTMLElement("fencedframe")}} Elementen geladen werden.
- {{CSP("font-src")}}
  - : Gibt gültige Quellen für Schriften an, die mit {{cssxref("@font-face")}} geladen werden.
- {{CSP("frame-src")}}
  - : Gibt gültige Quellen für geschachtelte Browsing-Kontexte an, die in Elementen wie {{HTMLElement("frame")}} und {{HTMLElement("iframe")}} geladen werden.
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
  - : Gibt gültige Quellen für JavaScript {{HTMLElement("script")}} Elemente an.
- {{CSP("script-src-attr")}}
  - : Gibt gültige Quellen für JavaScript Inline-Ereignis-Handler an.
- {{CSP("style-src")}}

  - : Gibt gültige Quellen für Stylesheets an.

    [Fallback](#fallbacks) für `style-src-elem` und `style-src-attr`.

- {{CSP("style-src-elem")}}
  - : Gibt gültige Quellen für Stylesheets {{HTMLElement("style")}} Elemente und {{HTMLElement("link")}} Elemente mit `rel="stylesheet"` an.
- {{CSP("style-src-attr")}}
  - : Gibt gültige Quellen für Inline-Stile an, die auf einzelne DOM-Elemente angewendet werden.
- {{CSP("worker-src")}}
  - : Gibt gültige Quellen für [`Worker`](/de/docs/Web/API/Worker), [`SharedWorker`](/de/docs/Web/API/SharedWorker) oder [`ServiceWorker`](/de/docs/Web/API/ServiceWorker) Skripte an.

Alle Abrufrichtlinien können mit dem einzelnen Wert `'none'` angegeben werden, was bedeutet, dass der spezifische Ressourcentyp vollständig blockiert werden sollte, oder als ein oder mehrere _Quell-Ausdruck-Werte_, die gültige Quellen für diesen Ressourcentyp angeben. Siehe [Abrufrichtlinien-Syntax](#abrufrichtlinien-syntax) für weitere Details.

#### Fallbacks

Einige Abrufrichtlinien funktionieren als Fallbacks für andere detailliertere Richtlinien. Dies bedeutet, dass, wenn die detailliertere Richtlinie nicht angegeben ist, der Fallback verwendet wird, um eine Richtlinie für diesen Ressourcentyp bereitzustellen.

- `default-src` ist ein Fallback für alle anderen Abrufrichtlinien.
- `script-src` ist ein Fallback für `script-src-attr` und `script-src-elem`.
- `style-src` ist ein Fallback für `style-src-attr` und `style-src-elem`.
- `child-src` ist ein Fallback für `frame-src` und `worker-src`.

Zum Beispiel:

- Wenn `img-src` weggelassen, aber `default-src` einbezogen wird, wird die von `default-src` definierte Richtlinie auf Bilder angewendet.
- Wenn `script-src-elem` weggelassen, aber `script-src` einbezogen wird, wird die von `script-src` definierte Richtlinie auf `<script>` Elemente angewendet.
- Wenn `script-src-elem` und `script-src` beide weggelassen, aber `default-src` einbezogen wird, wird die von `default-src` definierte Richtlinie auf `<script>` Elemente angewendet.

### Dokumentrichtlinien

Dokumentrichtlinien regeln die Eigenschaften eines Dokuments oder [worker](/de/docs/Web/API/Web_Workers_API) Umgebung, auf die eine Richtlinie angewendet wird.

- {{CSP("base-uri")}}
  - : Beschränkt die URLs, die im {{HTMLElement("base")}} Element eines Dokuments verwendet werden können.
- {{CSP("sandbox")}}
  - : Aktiviert eine Sandbox für die angeforderte Ressource, ähnlich dem {{HTMLElement("iframe")}} [`sandbox`](/de/docs/Web/HTML/Element/iframe#sandbox) Attribut.

### Navigationsrichtlinien

Navigationsrichtlinien regeln, zu welchen Orten ein Benutzer navigieren oder ein Formular absenden kann, zum Beispiel.

- {{CSP("form-action")}}
  - : Beschränkt die URLs, die als Ziel einer Formularübermittlung aus einem bestimmten Kontext verwendet werden können.
- {{CSP("frame-ancestors")}}
  - : Gibt gültige Eltern an, die eine Seite mit {{HTMLElement("frame")}}, {{HTMLElement("iframe")}}, {{HTMLElement("object")}} oder {{HTMLElement("embed")}} einbetten dürfen.

### Berichtsrichtlinien

Berichtsrichtlinien steuern die Ziel-URL für Berichte über CSP-Verletzungen in `Content-Security-Policy` und {{HTTPHeader("Content-Security-Policy-Report-Only")}}.

- {{CSP("report-to")}}

  - : Bietet dem Browser ein Token, das die Meldungsendpunkt oder Gruppe von Endpunkten identifiziert, an die Informationen zu CSP-Verletzungen gesendet werden sollen. Die Endpunkte, die das Token darstellt, werden durch andere HTTP-Header bereitgestellt, wie {{HTTPHeader("Reporting-Endpoints")}} und {{HTTPHeader("Report-To")}} {{deprecated_inline}}.

    > [!WARNING]
    > Diese Richtlinie soll [`report-uri`](#report-uri) ersetzen; in Browsern, die `report-to` unterstützen, wird die `report-uri` Richtlinie ignoriert.
    > Bis `report-to` jedoch weitgehend unterstützt wird, sollten Sie beide Header wie gezeigt angeben (wobei `endpoint_name` der Name eines separat bereitgestellten Endpunkts ist):
    >
    > ```http
    > Content-Security-Policy: …; report-uri https://endpoint.example.com; report-to endpoint_name
    > ```

### Andere Richtlinien

- {{CSP("require-trusted-types-for")}}
  - : Erzwingt [Trusted Types](/de/docs/Web/API/Trusted_Types_API) an den DOM XSS-Injektionsstellen.
- {{CSP("trusted-types")}}
  - : Wird verwendet, um eine Positivliste von [Trusted Types](/de/docs/Web/API/Trusted_Types_API)-Richtlinien anzugeben. Trusted Types ermöglichen Anwendungen, DOM XSS-Injektionsstellen zu sperren, um nur nicht verfälschbare, typisierte Werte anstelle von Strings zu akzeptieren.
- {{CSP("upgrade-insecure-requests")}}
  - : Anweist Benutzeragenten, alle unsicheren URLs einer Website (die über HTTP bereitgestellt werden) so zu behandeln, als ob sie durch sichere URLs (die über HTTPS bereitgestellt werden) ersetzt worden wären. Diese Richtlinie ist für Websites gedacht, die eine große Anzahl unsicherer Legacy-URLs haben, die umgeschrieben werden müssen.

### Veraltete Richtlinien

- {{CSP("block-all-mixed-content")}} {{deprecated_inline}}

  - : Verhindert das Laden von Assets über HTTP, wenn die Seite über HTTPS geladen wird.

- {{CSP("report-uri")}} {{deprecated_inline}}
  - : Bietet dem Browser eine URL, an die Berichte über CSP-Verletzungen gesendet werden sollen. Diese wurde durch die [`report-to`](#report-to) Richtlinie ersetzt.

## Abrufrichtlinien-Syntax

Alle Abrufrichtlinien können als eine der folgenden angegeben werden:

- der einzelne Wert `'none'`, was bedeutet, dass der spezifische Ressourcentyp vollständig blockiert werden sollte
- ein oder mehrere _Quell-Ausdruck-Werte_, die gültige Quellen für diesen Ressourcentyp angeben.

Jeder Quell-Ausdruck nimmt eine der unten aufgeführten Formen an. Beachten Sie, dass nicht alle Formen für alle Abrufrichtlinien anwendbar sind: Siehe die Dokumentation für jede Abrufrichtlinie, um herauszufinden, welche Formen dafür anwendbar sind.

Die `<host-source>` und `<scheme-source>` Formate müssen unverändert bleiben und alle anderen Formate müssen in einfache Anführungszeichen eingeschlossen werden.

### 'nonce-\<nonce_value>'

Dieser Wert besteht aus dem Zeichenfolgenpräfix `nonce-` gefolgt von einer {{Glossary("Base64", "base64-enkodierten")}} Zeichenkette. Diese Zeichenkette ist ein Zufallswert, den der Server für jede HTTP-Antwort generiert. Zum Beispiel:

```plain
'nonce-416d1177-4d12-4e3b-b7c9-f6c409789fb8'
```

Der Server kann dann denselben Wert als den Wert des `nonce` Attributs in jedem {{htmlelement("script")}} oder {{htmlelement("style")}} Ressourcen einschließen, die sie aus dem Dokument laden möchten.

Der Browser vergleicht den Wert aus der CSP-Richtlinie mit dem Wert im Elementattribut und lädt die Ressource nur, wenn sie übereinstimmen.

Wenn eine Richtlinie einen Nonce und `unsafe-inline` enthält, ignoriert der Browser `unsafe-inline`.

Siehe [Nonces](/de/docs/Web/HTTP/Guides/CSP#nonces) im CSP-Leitfaden für weitere Informationen zur Verwendung.

> [!NOTE]
> Nonce-Quell-Ausdrücke sind nur auf {{htmlelement("script")}} und {{htmlelement("style")}} Elemente anwendbar.

### '\<hash_algorithm>-<hash_value>'

Dieser Wert besteht aus einer Zeichenfolge, die einen Hash-Algorithmus identifiziert, gefolgt von `-`, gefolgt von einer {{Glossary("Base64", "base64-enkodierten")}} Zeichenkette, die den Hash-Wert darstellt.

- Der Hash-Algorithmus-Identifikator muss einer von `sha256`, `sha384` oder `sha512` sein.
- Der Hash-Wert ist der base64-enkodierte {{Glossary("Cryptographic_hash_function", "Hash")}} einer `<script>` oder `<style>` Ressource, berechnet mit einer der folgenden Hash-Funktionen: SHA-256, SHA-384 oder SHA-512.

Zum Beispiel:

```plain
'sha256-cd9827ad...'
```

Wenn der Browser das Dokument erhält, hasht er den Inhalt aller `<script>` und `<style>` Elemente, vergleicht das Ergebnis mit allen Hashs in der CSP-Richtlinie und lädt die Ressource nur, wenn eine Übereinstimmung vorliegt.

Wenn das Element eine externe Ressource lädt (z.B. mit dem [`src`](/de/docs/Web/HTML/Element/script#src) Attribut), muss das Element auch das [`integrity`](/de/docs/Web/HTML/Element/script#integrity) Attribut gesetzt haben.

Wenn eine Richtlinie einen Hash und `unsafe-inline` enthält, ignoriert der Browser `unsafe-inline`.

Siehe [Hashes](/de/docs/Web/HTTP/Guides/CSP#hashes) im CSP-Leitfaden für weitere Informationen zur Verwendung.

> [!NOTE]
> Hash-Quell-Ausdrücke sind nur auf {{htmlelement("script")}} und {{htmlelement("style")}} Elemente anwendbar.

### \<host-source>

Die [URL](/de/docs/Web/URI) oder IP-Adresse eines {{Glossary("host", "Hosts")}}, der eine gültige Quelle für die Ressource ist.

Das Schema, die Portnummer und der Pfad sind optional.

Wenn das Schema weggelassen wird, wird das Schema des Ursprungs des Dokuments verwendet.

Beim Abgleichen von Schemen sind sichere Upgrades erlaubt. Zum Beispiel:

- `http://example.com` erlaubt auch Ressourcen von `https://example.com`
- `ws://example.org` erlaubt auch Ressourcen von `wss://example.org`.

Platzhalter (`'*'`) können für Subdomains, Hostadressen und Portnummern verwendet werden und bedeuten, dass alle legalen Werte von jedem gültig sind. Zum Beispiel:

- `http://*.example.com` erlaubt Ressourcen von jeder Subdomain von `example.com` über HTTP oder HTTPS.

Pfad, die in `/` enden, stimmen mit jedem Pfad überein, den sie als Präfix haben. Zum Beispiel:

- `example.com/api/` erlaubt Ressourcen von `example.com/api/users/new`.

Pfad, die nicht in `/` enden, werden genau abgeglichen. Zum Beispiel:

- `https://example.com/file.js` erlaubt Ressourcen von `https://example.com/file.js`, aber nicht `https://example.com/file.js/file2.js`.

### \<scheme-source>

Ein [Schema](/de/docs/Web/URI/Reference/Schemes), wie `https:`. Der Doppelpunkt ist erforderlich.

Sichere Upgrades sind erlaubt, daher:

- `http:` erlaubt auch Ressourcen, die über HTTPS geladen werden
- `ws:` erlaubt auch Ressourcen, die über WSS geladen werden.

### 'self'

Ressourcen des gegebenen Typs dürfen nur vom gleichen {{Glossary("origin", "Ursprung")}} wie das Dokument geladen werden.

Sichere Upgrades sind erlaubt. Zum Beispiel:

- Wenn das Dokument von `http://example.com` bereitgestellt wird, erlaubt eine CSP von `'self'` auch Ressourcen von `https://example.com`.
- Wenn das Dokument von `ws://example.org` bereitgestellt wird, erlaubt eine CSP von `'self'` auch Ressourcen von `wss://example.org`.

### 'unsafe-eval'

Standardmäßig, wenn eine CSP einen `default-src` oder eine `script-src`-Richtlinie enthält, sind JavaScript-Funktionen, die ihre Argumente als JavaScript auswerten, deaktiviert. Dies schließt [`eval()`](/de/docs/Web/JavaScript/Reference/Global_Objects/eval), das [`code`](/de/docs/Web/API/Window/setTimeout#code) Argument von [`setTimeout()`](/de/docs/Web/API/Window/setTimeout) oder den {{jsxref("Function/Function()", "Function()")}} Konstruktor ein.

Das `unsafe-eval` Schlüsselwort kann verwendet werden, um diesen Schutz aufzuheben und die dynamische Auswertung von Zeichenfolgen als JavaScript zu erlauben.

> [!WARNING]
> Entwickler sollten `'unsafe-eval'` vermeiden, da es einen Großteil des Zwecks einer CSP untergräbt.

Siehe [`eval()` und ähnliche APIs](/de/docs/Web/HTTP/Guides/CSP#eval_and_similar_apis) im CSP-Leitfaden für weitere Informationen zur Verwendung.

### 'wasm-unsafe-eval'

Standardmäßig, wenn eine CSP einen `default-src` oder eine `script-src`-Richtlinie enthält, ist es einer Seite nicht erlaubt, WebAssembly mit Funktionen wie [`WebAssembly.compileStreaming()`](/de/docs/WebAssembly/Reference/JavaScript_interface/compileStreaming_static) zu kompilieren.

Das `wasm-unsafe-eval` Schlüsselwort kann verwendet werden, um diesen Schutz aufzuheben. Dies ist eine viel sicherere Alternative zu `'unsafe-eval'`, da es keine allgemeine Auswertung von JavaScript ermöglicht.

### 'unsafe-inline'

Standardmäßig, wenn eine CSP einen `default-src` oder eine `script-src`-Richtlinie enthält, ist es inlineem JavaScript nicht erlaubt auszuführen. Dies schließt ein:

- inline `<script>` Tags
- Inline-Event-Handler-Attribute
- `javascript:` URLs.

Ebenso, wenn eine CSP `default-src` oder eine `style-src`-Richtlinie enthält, wird inline CSS nicht geladen, einschließlich:

- inline `<style>` Tags
- [`style`](/de/docs/Web/API/HTMLElement/style) Attribute.

Das `unsafe-inline` Schlüsselwort kann verwendet werden, um diesen Schutz aufzuheben und alle diese Formen zu erlauben.

> [!WARNING]
> Entwickler sollten `'unsafe-inline'` vermeiden, da es einen Großteil des Zwecks einer CSP untergräbt.

Siehe [Inline JavaScript](/de/docs/Web/HTTP/Guides/CSP#inline_javascript) im CSP-Leitfaden für weitere Informationen zur Verwendung.

### 'unsafe-hashes'

Standardmäßig, wenn eine CSP einen `default-src` oder eine `script-src`-Richtlinie enthält, ist es Inline-Ereignis-Handler-Attributen wie `onclick` und Inline `style` Attributen nicht erlaubt auszuführen.

Der Ausdruck `'unsafe-hashes'` ermöglicht dem Browser die Verwendung von [Hash-Ausdrücken](#hash_algorithm-hash_value) für Inline-Ereignis-Handler und `style` Attribute. Zum Beispiel könnte eine CSP eine Richtlinie wie diese enthalten:

```http
script-src 'unsafe-hashes' 'sha256-cd9827ad...'
```

Wenn der Hash-Wert mit dem Hash eines Inline-Ereignis-Handler-Attributwerts oder eines `style` Attributwerts übereinstimmt, wird der Code zum Ausführen zugelassen.

> [!WARNING]
> Der `'unsafe-hashes'` Wert ist unsicher.
>
> Insbesondere ermöglicht er einen Angriff, bei dem der Inhalt des Inline-Ereignis-Handler-Attributs als Inline `<script>` Element in das Dokument injiziert wird. Angenommen der Inline-Ereignis-Handler ist:
>
> ```html
> <button onclick="transferAllMyMoney()">Transfer all my money</button>
> ```
>
> Wenn ein Angreifer ein Inline `<script>`-Element mit diesem Code injizieren kann, wird die CSP es automatisch ausführen lassen.
>
> `'unsafe-hashes'` ist jedoch viel sicherer als `'unsafe-inline'`.

### 'inline-speculation-rules'

Standardmäßig, wenn eine CSP einen `default-src` oder eine `script-src`-Richtlinie enthält, ist es inlineem JavaScript nicht erlaubt auszuführen. Das `'inline-speculation-rules'` ermöglicht es dem Browser, inline `<script>` Elemente zu laden, die ein [`type`](/de/docs/Web/HTML/Element/script/type) Attribut von [`speculationrules`](/de/docs/Web/HTML/Element/script/type/speculationrules) haben.

Siehe das [Speculation Rules API](/de/docs/Web/API/Speculation_Rules_API) für weitere Informationen.

### 'strict-dynamic'

Das `'strict-dynamic'` Schlüsselwort verlängert das Vertrauen, das durch einen [Nonce](#nonce-nonce_value) oder einen [Hash](#hash_algorithm-hash_value) einem Skript übertragen wird, auf Skripte, die dieses Skript dynamisch lädt, z.B. indem neue `<script>` Tags mit [`Document.createElement()`](/de/docs/Web/API/Document/createElement) erstellt und dann mittels [`Node.appendChild()`](/de/docs/Web/API/Node/appendChild) in das Dokument eingefügt werden.

Wenn dieses Schlüsselwort in einer Richtlinie vorhanden ist, werden die folgenden Quell-Ausdruck-Werte alle ignoriert:

- [\<host-source>](#host-source)
- [\<scheme-source>](#scheme-source)
- [`'self'`](#self)
- [`'unsafe-inline'`](#unsafe-inline)

Siehe [Das `strict-dynamic` Schlüsselwort](/de/docs/Web/HTTP/Guides/CSP#the_strict-dynamic_keyword) im CSP-Leitfaden für weitere Informationen zur Verwendung.

### 'report-sample'

Wenn dieser Ausdruck in einer Richtlinie enthalten ist, die Skripte oder Stile kontrolliert, und die Richtlinie dazu führt, dass der Browser das Blockieren von Inline-Skripten, Inline-Stilen oder Ereignis-Handler-Attributen ausführt, enthält der [Verletzungsbericht](/de/docs/Web/HTTP/Guides/CSP#violation_reporting), den der Browser generiert, eine [`sample`](/de/docs/Web/API/CSPViolationReportBody/sample) Eigenschaft, die die ersten 40 Zeichen der blockierten Ressource enthält.

## CSP in Workern

[Worker](/de/docs/Web/API/Worker) sind im Allgemeinen _nicht_ durch die Content-Security-Policy des Dokuments (oder des übergeordneten Workers) geregelt, das sie erstellt hat. Um eine Content-Security-Policy für den Worker zu spezifizieren, setzen Sie einen `Content-Security-Policy`-Antwort-Header für die Anfrage, die das Worker-Skript selbst angefordert hat.

Die Ausnahme ist, wenn der Ursprung des Worker-Skripts ein global eindeutiger Bezeichner ist (z.B. wenn die URL ein Schema von Daten oder Blob hat). In diesem Fall erbt der Worker die Content-Security-Policy des Dokuments oder Workers, das ihn erstellt hat.

## Mehrere Content-Security-Policies

Der CSP-Mechanismus erlaubt das Spezifizieren mehrerer Richtlinien für eine Ressource, einschließlich über den `Content-Security-Policy`-Header, den {{HTTPHeader("Content-Security-Policy-Report-Only")}}-Header und ein {{HTMLElement("meta")}}-Element.

Sie können den `Content-Security-Policy`-Header mehr als einmal verwenden, wie im folgenden Beispiel gezeigt. Achten Sie besonders auf die {{CSP("connect-src")}}-Richtlinie hier. Obwohl die zweite Richtlinie die Verbindung erlauben würde, enthält die erste Richtlinie `connect-src 'none'`. Das Hinzufügen zusätzlicher Richtlinien kann _nur weiter einschränken_ die Fähigkeiten der geschützten Ressource, was bedeutet, dass keine Verbindung zugelassen wird und als die strengste Richtlinie `connect-src 'none'` durchgesetzt wird.

```http
Content-Security-Policy: default-src 'self' http://example.com;
                          connect-src 'none';
Content-Security-Policy: connect-src http://example.com/;
                          script-src http://example.com/
```

## Beispiele

### Unsicheres Inline-Code deaktivieren und nur HTTPS-Ressourcen erlauben

Dieser HTTP-Header setzt die Standardrichtlinie, um das Laden von Ressourcen (Bilder, Schriften, Skripte usw.) nur über HTTPS zu erlauben. Da die Richtlinien `unsafe-inline` und `unsafe-eval` nicht gesetzt sind, werden inline Skripte blockiert.

```http
Content-Security-Policy: default-src https:
```

Dieselben Einschränkungen können mit dem HTML {{htmlelement("meta")}}-Element angewendet werden.

```html
<meta http-equiv="Content-Security-Policy" content="default-src https:" />
```

### Inline-Code und HTTPS-Ressourcen erlauben, aber Plugins deaktivieren

Diese Richtlinie könnte auf einer bereits vorhandenen Website verwendet werden, die zu viel Inline-Code verwendet, um sie zu reparieren, um sicherzustellen, dass Ressourcen nur über HTTPS geladen werden und Plugins deaktiviert werden:

```http
Content-Security-Policy: default-src https: 'unsafe-eval' 'unsafe-inline'; object-src 'none'
```

### Berichte erstellen, aber beim Testen keine Verstöße erzwingen

Dieses Beispiel setzt dieselben Einschränkungen wie das vorherige Beispiel, jedoch mit dem {{httpheader("Content-Security-Policy-Report-Only")}}-Header und der {{CSP("report-to")}}-Richtlinie. Dieser Ansatz wird während des Testens verwendet, um Verstöße zu melden, aber den Code nicht daran zu hindern, auszuführen.

Endpunkte (URLs), an die Berichte gesendet werden, werden mit dem {{HTTPHeader("Reporting-Endpoints")}} HTTP-Antwort-Header definiert.

```http
Reporting-Endpoints: csp-endpoint="https://example.com/csp-reports"
```

Ein bestimmter Endpunkt wird dann als Berichtsziel in der CSP-Richtlinie mit der {{CSP("report-to")}}-Richtlinie ausgewählt.

```http
Content-Security-Policy-Report-Only: default-src https:; report-uri /csp-violation-report-url/; report-to csp-endpoint
```

Beachten Sie, dass die {{CSP("report-uri")}} {{deprecated_inline}}-Richtlinie ebenfalls oben angegeben wird, da `report-to` noch nicht breit von Browsern unterstützt wird.

Siehe [Content Security Policy (CSP) Implementierung](/de/docs/Web/Security/Practical_implementation_guides/CSP) für weitere Beispiele.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTTPHeader("Content-Security-Policy-Report-Only")}}
- [Mehr erfahren: Content Security Policy](/de/docs/Web/HTTP/Guides/CSP)
- [Inhaltsicherheit in WebExtensions](/de/docs/Mozilla/Add-ons/WebExtensions/Content_Security_Policy)
- [Eine strenge Richtlinie einführen](https://csp.withgoogle.com/docs/strict-csp.html)
- [CSP Evaluator](https://github.com/google/csp-evaluator) - Bewerten Sie Ihre
  Content Security Policy
