---
title: Content-Security-Policy (CSP) header
short-title: Content-Security-Policy
slug: Web/HTTP/Reference/Headers/Content-Security-Policy
l10n:
  sourceCommit: b75355e41772e6cae6543000d3c9fed21593b4d7
---

{{HTTPSidebar}}

Der HTTP **`Content-Security-Policy`** Antwort-Header ermöglicht es Website-Administratoren, die Ressourcen zu kontrollieren, die der Benutzeragent für eine gegebene Seite laden darf. Mit wenigen Ausnahmen beinhalten Richtlinien hauptsächlich das Angeben von Server-Ursprüngen und Skript-Endpunkten. Dies hilft, {{Glossary("cross-site_scripting", "Cross-Site-Scripting")}} Angriffe zu verhindern.

Im [Leitfaden zur Content Security Policy (CSP)](/de/docs/Web/HTTP/Guides/CSP) finden Sie Detailinformationen darüber, wie eine CSP an den Browser übermittelt wird, wie sie aussieht, sowie Anwendungsfälle und Bereitstellungsstrategien.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
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

wobei `<policy-directive>` aus:
`<directive> <value>` ohne interne Zeichensetzung besteht.

## Direktiven

### Fetch-Direktiven

Fetch-Direktiven steuern die Orte, von denen bestimmte Ressourcentypen geladen werden dürfen.

- {{CSP("child-src")}}

  - : Definiert die gültigen Quellen für [Web Worker](/de/docs/Web/API/Web_Workers_API) und eingebettete Browsing-Kontexte, die mit Elementen wie
    {{HTMLElement("frame")}} und {{HTMLElement("iframe")}} geladen werden.

    [Fallback](#fallbacks) für `frame-src` und `worker-src`.

- {{CSP("connect-src")}}
  - : Beschränkt die URLs, die über Skriptschnittstellen geladen werden können.
- {{CSP("default-src")}}

  - : Dient als Fallback für die anderen {{Glossary("Fetch_directive", "Fetch-Direktiven")}}.

    [Fallback](#fallbacks) für alle anderen Fetch-Direktiven.

- {{CSP("fenced-frame-src")}} {{experimental_inline}}
  - : Gibt gültige Quellen für eingebettete Browsing-Kontexte an, die in {{HTMLElement("fencedframe")}} Elementen geladen werden.
- {{CSP("font-src")}}
  - : Gibt gültige Quellen für Schriften an, die mit {{cssxref("@font-face")}} geladen werden.
- {{CSP("frame-src")}}
  - : Gibt gültige Quellen für eingebettete Browsing-Kontexte an, die in Elementen wie
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
  - : Gibt gültige Quellen an, die vorab abgerufen oder vorgerendert werden sollen.
- {{CSP("script-src")}}

  - : Gibt gültige Quellen für JavaScript- und WebAssembly-Ressourcen an.

    [Fallback](#fallbacks) für `script-src-elem` und `script-src-attr`.

- {{CSP("script-src-elem")}}
  - : Gibt gültige Quellen für JavaScript {{HTMLElement("script")}} Elemente an.
- {{CSP("script-src-attr")}}
  - : Gibt gültige Quellen für JavaScript Inline-Ereignishandler an.
- {{CSP("style-src")}}

  - : Gibt gültige Quellen für Stylesheets an.

    [Fallback](#fallbacks) für `style-src-elem` und `style-src-attr`.

- {{CSP("style-src-elem")}}
  - : Gibt gültige Quellen für Stylesheets {{HTMLElement("style")}} Elemente und
    {{HTMLElement("link")}} Elemente mit `rel="stylesheet"` an.
- {{CSP("style-src-attr")}}
  - : Gibt gültige Quellen für Inline-Stile an, die auf einzelne DOM-Elemente angewendet werden.
- {{CSP("worker-src")}}
  - : Gibt gültige Quellen für [`Worker`](/de/docs/Web/API/Worker), [`SharedWorker`](/de/docs/Web/API/SharedWorker) oder
    [`ServiceWorker`](/de/docs/Web/API/ServiceWorker) Skripte an.

Alle Fetch-Direktiven können mit dem einzigen Wert `'none'` angegeben werden, was bedeutet, dass der spezifische Ressourcentyp vollständig blockiert werden sollte, oder als eine oder mehrere _Quellausdrücke_, die gültige Quellen für diesen Ressourcentyp angeben. Einzelheiten siehe [Fetch-Direktiven-Syntax](#fetch-direktiven-syntax).

#### Fallbacks

Einige Fetch-Direktiven fungieren als Fallbacks für andere, granularere Direktiven. Das bedeutet, wenn die granularere Direktive nicht angegeben ist, wird der Fallback verwendet, um eine Richtlinie für diesen Ressourcentyp bereitzustellen.

- `default-src` ist ein Fallback für alle anderen Fetch-Direktiven.
- `script-src` ist ein Fallback für `script-src-attr` und `script-src-elem`.
- `style-src` ist ein Fallback für `style-src-attr` und `style-src-elem`.
- `child-src` ist ein Fallback für `frame-src` und `worker-src`.

Beispiel:

- Wenn `img-src` weggelassen wird, aber `default-src` enthalten ist, wird die von `default-src` definierte Richtlinie auf Bilder angewendet.
- Wenn `script-src-elem` weggelassen wird, aber `script-src` enthalten ist, wird die von `script-src` definierte Richtlinie auf `<script>`-Elemente angewendet.
- Wenn `script-src-elem` und `script-src` beide weggelassen werden, aber `default-src` enthalten ist, wird die von `default-src` definierte Richtlinie auf `<script>`-Elemente angewendet.

### Dokumentdirektiven

Dokumentdirektiven regeln die Eigenschaften eines Dokuments oder einer [Worker](/de/docs/Web/API/Web_Workers_API) Umgebung, auf die eine Richtlinie
angewendet wird.

- {{CSP("base-uri")}}
  - : Beschränkt die URLs, die im {{HTMLElement("base")}} Element eines Dokuments verwendet werden können.
- {{CSP("sandbox")}}
  - : Aktiviert eine Sandbox für die angeforderte Ressource ähnlich dem {{HTMLElement("iframe")}} [`sandbox`](/de/docs/Web/HTML/Reference/Elements/iframe#sandbox) Attribut.

### Navigationsrichtlinien

Navigationsrichtlinien regeln, zu welchen Orten ein Benutzer navigieren oder ein Formular absenden kann,
zum Beispiel.

- {{CSP("form-action")}}
  - : Beschränkt die URLs, die als Ziel von Formularübermittlungen aus einem
    gegebenen Kontext verwendet werden können.
- {{CSP("frame-ancestors")}}
  - : Spezifiziert zulässige Elternelemente, die eine Seite mithilfe von {{HTMLElement("frame")}},
    {{HTMLElement("iframe")}}, {{HTMLElement("object")}} oder {{HTMLElement("embed")}} einbetten dürfen.

### Berichtsdirektiven

Berichtsdirektiven steuern die Ziel-URL für CSP-Verletzungsberichte in `Content-Security-Policy` und {{HTTPHeader("Content-Security-Policy-Report-Only")}}.

- {{CSP("report-to")}}

  - : Versorgt den Browser mit einem Token, das den Berichtsendpunkt oder eine Gruppe von Endpunkten identifiziert, an die Informationen über CSP-Verletzungen gesendet werden.
    Die Endpunkte, die das Token repräsentiert, werden über andere HTTP-Header bereitgestellt, wie {{HTTPHeader("Reporting-Endpoints")}} und {{HTTPHeader("Report-To")}} {{deprecated_inline}}.

    > [!WARNING]
    > Diese Direktive soll [`report-uri`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/report-uri) ersetzen; in Browsern, die `report-to` unterstützen, wird die `report-uri`-Direktive ignoriert.
    > Allerdings sollten Sie, bis `report-to` weitgehend unterstützt wird, beide Header angeben, wie gezeigt (wobei `endpoint_name` der Name eines separat bereitgestellten Endpunkts ist):
    >
    > ```http
    > Content-Security-Policy: …; report-uri https://endpoint.example.com; report-to endpoint_name
    > ```

### Andere Direktiven

- {{CSP("require-trusted-types-for")}}
  - : Erzwingt [Trusted Types](/de/docs/Web/API/Trusted_Types_API) an den DOM XSS-Injektionsstellen.
- {{CSP("trusted-types")}}
  - : Wird verwendet, um eine Positivliste von [Trusted Types](/de/docs/Web/API/Trusted_Types_API) Richtlinien zu spezifizieren.
    Trusted Types ermöglicht es Anwendungen, DOM XSS-Injektionsstellen zu sperren, sodass nur nicht fälschbare, typisierte Werte anstelle von Strings akzeptiert werden.
- {{CSP("upgrade-insecure-requests")}}
  - : Weist Benutzeragenten an, alle unsicheren URLs einer Website (die über HTTP bereitgestellt werden),
    so zu behandeln, als wären sie durch sichere URLs (die über HTTPS bereitgestellt werden) ersetzt worden.
    Diese Direktive ist für Websites mit einer großen Anzahl unsicherer Legacy-URLs vorgesehen,
    die umgeschrieben werden müssen.

### Veraltete Direktiven

- {{CSP("block-all-mixed-content")}} {{deprecated_inline}}

  - : Verhindert das Laden von Assets über HTTP, wenn die Seite über HTTPS geladen wird.

- {{CSP("report-uri")}} {{deprecated_inline}}
  - : Versorgt den Browser mit einer URL, an die CSP-Verletzungsberichte gesendet werden sollten.
    Diese wird durch die [`report-to`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/report-to) Direktive ersetzt.

## Fetch-Direktiven-Syntax

Alle Fetch-Direktiven können als eine der folgenden angegeben werden:

- der einzelne Wert `'none'`, was bedeutet, dass der spezifische Ressourcentyp vollständig blockiert werden soll
- ein oder mehrere _Quellausdrücke_, die gültige Quellen für diesen Ressourcentyp angeben.

Jeder Quellausdruck nimmt eine der unten aufgeführten Formen an. Beachten Sie, dass nicht alle Formen auf alle Fetch-Direktiven anwendbar sind: Siehe die Dokumentation für jede Fetch-Direktive, um herauszufinden, welche Formen dafür anwendbar sind.

Die Formate `<host-source>` und `<scheme-source>` müssen ohne Anführungszeichen sein, und alle anderen Formate müssen in einfache Anführungszeichen eingeschlossen sein.

### 'nonce-\<nonce_value>'

Dieser Wert besteht aus dem String `nonce-` gefolgt von einem Nonce-Wert. Der Nonce-Wert kann beliebige Zeichen aus {{Glossary("Base64#base64_characters", "Base64")}} oder {{Glossary("Base64#url_and_filename_safe_base64", "URL-sicherem Base64")}} verwenden.

Dieser String ist ein Zufallswert, den der Server für jede HTTP-Antwort generiert. Beispiel:

```plain
'nonce-416d1177-4d12-4e3b-b7c9-f6c409789fb8'
```

Der Server kann dann denselben Wert als Wert des `nonce` Attributs für alle {{htmlelement("script")}} oder {{htmlelement("style")}} Ressourcen einschließen, die sie aus dem Dokument laden möchten.

Der Browser vergleicht den Wert der CSP-Direktive mit dem Wert im Elementattribut und lädt die Ressource nur, wenn sie übereinstimmen.

Wenn eine Direktive einen Nonce und `unsafe-inline` enthält, ignoriert der Browser `unsafe-inline`.

Einzelheiten siehe [Nonces](/de/docs/Web/HTTP/Guides/CSP#nonces) im CSP-Leitfaden.

> [!NOTE]
> Nonce-Quellen-Ausdrücke sind nur auf {{htmlelement("script")}} und {{htmlelement("style")}} Elemente anwendbar.

### '\<hash_algorithm>-<hash_value>'

Dieser Wert besteht aus einem String, der einen Hash-Algorithmus identifiziert, gefolgt von `-`, gefolgt von einem Hash-Wert. Der Hash-Wert kann beliebige Zeichen aus {{Glossary("Base64#base64_characters", "Base64")}} oder {{Glossary("Base64#url_and_filename_safe_base64", "URL-sicherem Base64")}} verwenden.

- Der Hash-Algorithmus-Identifikator muss einer von `sha256`, `sha384` oder `sha512` sein.
- Der Hash-Wert ist der base64-kodierte {{Glossary("hash_function", "Hash")}} einer `<script>` oder `<style>` Ressource, berechnet mit einem der folgenden Hash-Funktionen: SHA-256, SHA-384, oder SHA-512.

Beispiel:

```plain
'sha256-cd9827ad...'
```

Wenn der Browser das Dokument empfängt, hashiert er den Inhalt aller `<script>` und `<style>` Elemente, vergleicht das Ergebnis mit allen Hashes in der CSP-Direktive und lädt die Ressource nur, wenn es eine Übereinstimmung gibt.

Wenn das Element eine externe Ressource lädt (zum Beispiel über das [`src`](/de/docs/Web/HTML/Reference/Elements/script#src) Attribut), dann muss das Element auch das [`integrity`](/de/docs/Web/HTML/Reference/Elements/script#integrity) Attribut haben.

Wenn eine Direktive einen Hash und `unsafe-inline` enthält, ignoriert der Browser `unsafe-inline`.

Einzelheiten siehe [Hashes](/de/docs/Web/HTTP/Guides/CSP#hashes) im CSP-Leitfaden.

> [!NOTE]
> Hash-Quellen-Ausdrücke sind nur auf {{htmlelement("script")}} und {{htmlelement("style")}} Elemente anwendbar.

### \<host-source>

Die [URL](/de/docs/Web/URI) oder IP-Adresse eines {{Glossary("host", "Hosts")}}, der eine gültige Quelle für die Ressource ist.

Das Schema, die Portnummer und der Pfad sind optional.

Wenn das Schema weggelassen wird, wird das Schema des Ursprungsdokuments verwendet.

Beim Abgleichen von Schemas sind sichere Upgrades erlaubt. Beispiel:

- `http://example.com` erlaubt auch Ressourcen von `https://example.com`
- `ws://example.org` erlaubt auch Ressourcen von `wss://example.org`.

Platzhalter (`'*'`) können für Subdomänen, Hostadressen und Portnummern verwendet werden, was bedeutet, dass alle legalen Werte von jedem gültig sind. Beispiel:

- `http://*.example.com` erlaubt Ressourcen von allen Subdomänen von `example.com`, über HTTP oder HTTPS.

Pfade, die mit `/` enden, stimmen mit jedem Pfad überein, von dem sie ein Präfix sind. Beispiel:

- `example.com/api/` erlaubt Ressourcen von `example.com/api/users/new`.

Pfade, die nicht mit `/` enden, werden genau übereinstimmend. Beispiel:

- `https://example.com/file.js` erlaubt Ressourcen von `https://example.com/file.js` aber nicht `https://example.com/file.js/file2.js`.

### \<scheme-source>

Ein [Schema](/de/docs/Web/URI/Reference/Schemes), wie `https:`. Der Doppelpunkt ist erforderlich.

Gesicherte Upgrades sind erlaubt, also:

- `http:` erlaubt auch Ressourcen, die über HTTPS geladen werden
- `ws:` erlaubt auch Ressourcen, die über WSS geladen werden.

### 'self'

Ressourcen des angegebenen Typs dürfen nur vom selben {{Glossary("origin", "Ursprung")}} wie das Dokument geladen werden.

Gesicherte Upgrades sind erlaubt. Beispiel:

- Wenn das Dokument von `http://example.com` bereitgestellt wird, erlaubt eine CSP von `'self'` auch Ressourcen von `https://example.com`.
- Wenn das Dokument von `ws://example.org` bereitgestellt wird, erlaubt eine CSP von `'self'` auch Ressourcen von `wss://example.org`.

### 'unsafe-eval'

Standardmäßig, wenn eine CSP eine `default-src` oder eine `script-src` Direktive enthält, werden JavaScript-Funktionen, die ihre Argumente als JavaScript auswerten, deaktiviert. Dies schließt [`eval()`](/de/docs/Web/JavaScript/Reference/Global_Objects/eval), das [`code`](/de/docs/Web/API/Window/setTimeout#code) Argument zu [`setTimeout()`](/de/docs/Web/API/Window/setTimeout) oder den {{jsxref("Function/Function()", "Function()")}}-Konstruktor ein.

Das `unsafe-eval` Schlüsselwort kann verwendet werden, um diesen Schutz aufzuheben und das dynamische Auswerten von Strings als JavaScript zu ermöglichen.

> [!WARNING]
> Entwickler sollten `'unsafe-eval'` vermeiden, da es einen großen Teil des Zwecks einer CSP untergräbt.

Einzelheiten siehe [`eval()` und ähnliche APIs](/de/docs/Web/HTTP/Guides/CSP#eval_and_similar_apis) im CSP-Leitfaden.

### 'wasm-unsafe-eval'

Standardmäßig, wenn eine CSP eine `default-src` oder eine `script-src` Direktive enthält, darf eine Seite kein WebAssembly kompilieren unter Verwendung von Funktionen wie [`WebAssembly.compileStreaming()`](/de/docs/WebAssembly/Reference/JavaScript_interface/compileStreaming_static).

Das `wasm-unsafe-eval` Schlüsselwort kann verwendet werden, um diesen Schutz aufzuheben. Dies ist eine viel sicherere Alternative zu `'unsafe-eval'`, da es keine allgemeine Auswertung von JavaScript ermöglicht.

### 'unsafe-inline'

Standardmäßig, wenn eine CSP eine `default-src` oder eine `script-src` Direktive enthält, darf Inline-JavaScript nicht ausgeführt werden. Dies umfasst:

- Inline-`<script>`-Tags
- Inline-Ereignishandler-Attribute
- `javascript:` URLs.

Ähnlich, wenn eine CSP `default-src` oder eine `style-src` Direktive enthält, wird Inline-CSS nicht geladen, einschließlich:

- Inline-`<style>`-Tags
- [`style`](/de/docs/Web/API/HTMLElement/style) Attribute.

Das `unsafe-inline` Schlüsselwort kann verwendet werden, um diesen Schutz aufzuheben, was das Laden all dieser Formen ermöglicht.

> [!WARNING]
> Entwickler sollten `'unsafe-inline'` vermeiden, da es einen großen Teil des Zwecks einer CSP untergräbt.

Einzelheiten siehe [Inline-JavaScript](/de/docs/Web/HTTP/Guides/CSP#inline_javascript) im CSP-Leitfaden.

### 'unsafe-hashes'

Standardmäßig, wenn eine CSP eine `default-src` oder eine `script-src` Direktive enthält, dürfen Inline-Ereignishandler-Attribute wie `onclick` und Inline-`style`-Attribute nicht ausgeführt werden.

Der `'unsafe-hashes'` Ausdruck erlaubt dem Browser die Verwendung von [Hash-Ausdrücken](#hash_algorithm-hash_value) für Inline-Ereignishandler und `style`-Attribute. Beispiel: Eine CSP könnte eine Direktive wie diese enthalten:

```http
script-src 'unsafe-hashes' 'sha256-cd9827ad...'
```

Wenn der Hashwert mit dem Hash eines Inline-Ereignishandler-Attributwertes oder eines `style`-Attributwertes übereinstimmt, wird der Code ausgeführt.

> [!WARNING]
> Der `'unsafe-hashes'` Wert ist unsicher.
>
> Insbesondere ermöglicht es einen Angriff, bei dem der Inhalt des Inline-Ereignishandler-Attributes als Inline-`<script>`-Element in das Dokument injiziert wird. Angenommen, der Inline-Ereignishandler lautet:
>
> ```html
> <button onclick="transferAllMyMoney()">Transferiere all mein Geld</button>
> ```
>
> Wenn ein Angreifer ein Inline-`<script>`-Element mit diesem Code injizieren kann, erlaubt die CSP dessen automatische Ausführung.
>
> `'unsafe-hashes'` ist jedoch viel sicherer als `'unsafe-inline'`.

### 'inline-speculation-rules'

Standardmäßig, wenn eine CSP eine `default-src` oder eine `script-src` Direktive enthält, darf Inline-JavaScript nicht ausgeführt werden. Das `'inline-speculation-rules'` Schlüsselwort erlaubt dem Browser das Laden von Inline-`<script>`-Elementen, die ein [`type`](/de/docs/Web/HTML/Reference/Elements/script/type) Attribut von [`speculationrules`](/de/docs/Web/HTML/Reference/Elements/script/type/speculationrules) haben.

Einzelheiten siehe [Speculation Rules API](/de/docs/Web/API/Speculation_Rules_API) für mehr Informationen.

### 'strict-dynamic'

Das `'strict-dynamic'` Schlüsselwort erweitert das Vertrauen, das einem Skript durch einen [Nonce](#nonce-nonce_value) oder einen [Hash](#hash_algorithm-hash_value) gegeben wird, auf Skripte, die dieses Skript dynamisch lädt, z. B. durch das Erstellen neuer `<script>`-Tags mittels [`Document.createElement()`](/de/docs/Web/API/Document/createElement) und deren Einfügen in das Dokument mittels [`Node.appendChild()`](/de/docs/Web/API/Node/appendChild).

Wenn dieses Schlüsselwort in einer Direktive vorhanden ist, werden die folgenden Quellenausdruckswerte alle ignoriert:

- [\<host-source>](#host-source)
- [\<scheme-source>](#scheme-source)
- [`'self'`](#self)
- [`'unsafe-inline'`](#unsafe-inline)

Einzelheiten siehe [Das `strict-dynamic` Schlüsselwort](/de/docs/Web/HTTP/Guides/CSP#the_strict-dynamic_keyword) im CSP-Leitfaden.

### 'report-sample'

Wenn dieser Ausdruck in einer Direktive enthalten ist, die Skripte oder Stile steuert, und die Direktive dazu führt, dass der Browser Inline-Skripte, Inline-Stile oder Ereignishandler-Attribute blockiert, enthält der von ihm generierte [Verletzungsbericht](/de/docs/Web/HTTP/Guides/CSP#violation_reporting) eine [`sample`](/de/docs/Web/API/CSPViolationReportBody/sample) Eigenschaft mit den ersten 40 Zeichen der blockierten Ressource.

## CSP in Workern

[Worker](/de/docs/Web/API/Worker) sind im Allgemeinen _nicht_ durch die Content-Security-Policy des Dokuments (oder des Eltern-Workers) geregelt, der sie erzeugt hat. Um eine Content-Security-Policy für den Worker festzulegen, setzen Sie einen
`Content-Security-Policy` Antwort-Header für die Anforderung, die das Worker-Skript selbst angefordert hat.

Die Ausnahme hiervon ist, wenn der Ursprung des Worker-Skripts ein global eindeutiger Bezeichner ist (zum Beispiel, wenn seine URL ein Schema von Data oder Blob hat). In diesem Fall erbt der Worker die Content-Security-Policy des Dokuments oder des Workers, der ihn erzeugt hat.

## Mehrere Content-Security-Policies

Der CSP-Mechanismus ermöglicht es, mehrere Richtlinien für eine Ressource anzugeben, einschließlich über den `Content-Security-Policy` Header,
den {{HTTPHeader("Content-Security-Policy-Report-Only")}} Header und ein {{HTMLElement("meta")}} Element.

Sie können den `Content-Security-Policy`-Header mehr als einmal verwenden, wie im Beispiel unten gezeigt. Achten Sie besonders auf die {{CSP("connect-src")}} Direktive hier. Auch wenn die zweite Policy die Verbindung erlauben würde, enthält die erste Policy
`connect-src 'none'`. Das Hinzufügen zusätzlicher Richtlinien _kann nur die Fähigkeiten_ der geschützten Ressource _weiter einschränken_, was bedeutet, dass keine Verbindung erlaubt ist und die strengste Policy, `connect-src 'none'`, durchgesetzt wird.

```http
Content-Security-Policy: default-src 'self' http://example.com;
                          connect-src 'none';
Content-Security-Policy: connect-src http://example.com/;
                          script-src http://example.com/
```

## Beispiele

### Unsicherer Inlinecode deaktivieren und nur HTTPS-Ressourcen erlauben

Dieser HTTP-Header setzt die Standardrichtlinie so, dass das Laden von Ressourcen (Bilder, Schriftarten, Skripte etc.) nur über HTTPS erlaubt ist.
Da die Direktiven `unsafe-inline` und `unsafe-eval` nicht gesetzt sind, werden Inline-Skripte blockiert.

```http
Content-Security-Policy: default-src https:
```

Dieselben Einschränkungen können mit dem HTML {{htmlelement("meta")}} Element angewendet werden.

```html
<meta http-equiv="Content-Security-Policy" content="default-src https:" />
```

### Inline-Code und HTTPS-Ressourcen erlauben, aber Plugins deaktivieren

Diese Richtlinie könnte auf einer bestehenden Website verwendet werden, die zu viel Inline-Code verwendet, um sie zu beheben, um sicherzustellen, dass Ressourcen nur über HTTPS geladen und Plugins deaktiviert werden:

```http
Content-Security-Policy: default-src https: 'unsafe-eval' 'unsafe-inline'; object-src 'none'
```

### Verstöße melden, aber nicht durchsetzen, wenn getestet wird

Dieses Beispiel setzt dieselben Einschränkungen wie das vorherige Beispiel, verwendet jedoch den {{httpheader("Content-Security-Policy-Report-Only")}} Header und die {{CSP("report-to")}} Direktive.
Dieser Ansatz wird während des Testens verwendet, um Verstöße zu melden, aber das Ausführen von Code nicht zu blockieren.

Endpunkte (URLs) zum Senden von Berichten werden mit dem {{HTTPHeader("Reporting-Endpoints")}} HTTP-Antwort-Header definiert.

```http
Reporting-Endpoints: csp-endpoint="https://example.com/csp-reports"
```

Ein bestimmter Endpunkt wird dann als Berichtsziele im CSP-Policy mittels der {{CSP("report-to")}} Direktive ausgewählt.

```http
Content-Security-Policy-Report-Only: default-src https:; report-uri /csp-violation-report-url/; report-to csp-endpoint
```

Beachten Sie, dass auch die {{CSP("report-uri")}} {{deprecated_inline}} Direktive oben angegeben ist, weil `report-to` noch nicht allgemein von Browsern unterstützt wird.

Siehe [Implementierung der Content-Security-Policy (CSP)](/de/docs/Web/Security/Practical_implementation_guides/CSP) für weitere Beispiele.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTTPHeader("Content-Security-Policy-Report-Only")}}
- [Erfahren Sie mehr über: Content Security Policy](/de/docs/Web/HTTP/Guides/CSP)
- [Content Security in WebExtensions](/de/docs/Mozilla/Add-ons/WebExtensions/Content_Security_Policy)
- [Annahme einer strikten Richtlinie](https://csp.withgoogle.com/docs/strict-csp.html)
- [CSP Evaluator](https://github.com/google/csp-evaluator) - Evaluieren Sie Ihre Content Security Policy
