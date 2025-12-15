---
title: Content-Security-Policy (CSP) header
short-title: Content-Security-Policy
slug: Web/HTTP/Reference/Headers/Content-Security-Policy
l10n:
  sourceCommit: dc788bf0ea36cb1ebe809c82aaae2c77cb3e18c0
---

Der HTTP-**`Content-Security-Policy`**-Antwortheader ermöglicht es Website-Administratoren, zu kontrollieren, welche Ressourcen der Benutzeragent für eine bestimmte Seite laden darf. Mit wenigen Ausnahmen beinhalten Richtlinien meistens die Angabe von Server-Ursprüngen und Skriptendpunkten. Dies hilft, sich gegen {{Glossary("cross-site_scripting", "Cross-Site Scripting")}}-Angriffe zu schützen.

Weitere Informationen darüber, wie eine CSP dem Browser übermittelt wird, wie sie aussieht, sowie Anwendungsfälle und Bereitstellungsstrategien finden Sie im [Content Security Policy (CSP)](/de/docs/Web/HTTP/Guides/CSP)-Leitfaden.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Response_header", "Antwortheader")}}</td>
    </tr>
  </tbody>
</table>

## Syntax

```http
Content-Security-Policy: <policy-directive>; <policy-directive>
```

wobei `<policy-directive>` aus besteht:
`<directive> <value>` ohne interne Interpunktion.

## Direktiven

### Abrufdirektiven

Abrufdirektiven kontrollieren die Standorte, von denen bestimmte Ressourcentypen geladen werden dürfen.

- {{CSP("child-src")}}
  - : Definiert die gültigen Quellen für [Web Workers](/de/docs/Web/API/Web_Workers_API) und verschachtelte Browsing-Kontexte, die über Elemente wie {{HTMLElement("frame")}} und {{HTMLElement("iframe")}} geladen werden.

    [Fallback](#fallbacks) für `frame-src` und `worker-src`.

- {{CSP("connect-src")}}
  - : Beschränkt die URLs, die mit Skript-Schnittstellen geladen werden können.
- {{CSP("default-src")}}
  - : Dient als Fallback für die anderen {{Glossary("Fetch_directive", "Abrufdirektiven")}}.

    [Fallback](#fallbacks) für alle anderen Abrufdirektiven.

- {{CSP("fenced-frame-src")}} {{experimental_inline}}
  - : Gibt gültige Quellen für verschachtelte Browsing-Kontexte an, die in {{HTMLElement("fencedframe")}}-Elementen geladen wurden.
- {{CSP("font-src")}}
  - : Gibt gültige Quellen für Schriftarten an, die mit {{cssxref("@font-face")}} geladen worden sind.
- {{CSP("frame-src")}}
  - : Gibt gültige Quellen für verschachtelte Browsing-Kontexte an, die in Elementen wie {{HTMLElement("frame")}} und {{HTMLElement("iframe")}} geladen wurden.
- {{CSP("img-src")}}
  - : Gibt gültige Quellen für Bilder und Favicons an.
- {{CSP("manifest-src")}}
  - : Gibt gültige Quellen für Anwendungsmanifestdateien an.
- {{CSP("media-src")}}
  - : Gibt gültige Quellen für das Laden von Medien mit den {{HTMLElement("audio")}}, {{HTMLElement("video")}} und {{HTMLElement("track")}}-Elementen an.
- {{CSP("object-src")}}
  - : Gibt gültige Quellen für die {{HTMLElement("object")}}- und {{HTMLElement("embed")}}-Elemente an.
- {{CSP("prefetch-src")}} {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Gibt gültige Quellen an, die vorab geladen oder vorgeladen werden sollen.
- {{CSP("script-src")}}
  - : Gibt gültige Quellen für JavaScript- und WebAssembly-Ressourcen an.

    [Fallback](#fallbacks) für `script-src-elem` und `script-src-attr`.

- {{CSP("script-src-elem")}}
  - : Gibt gültige Quellen für JavaScript-{{HTMLElement("script")}}-Elemente an.
- {{CSP("script-src-attr")}}
  - : Gibt gültige Quellen für JavaScript-Inline-Event-Handler an.
- {{CSP("style-src")}}
  - : Gibt gültige Quellen für Stylesheets an.

    [Fallback](#fallbacks) für `style-src-elem` und `style-src-attr`.

- {{CSP("style-src-elem")}}
  - : Gibt gültige Quellen für Stylesheets-{{HTMLElement("style")}}-Elemente und {{HTMLElement("link")}}-Elemente mit `rel="stylesheet"` an.
- {{CSP("style-src-attr")}}
  - : Gibt gültige Quellen für Inline-Stile an, die auf einzelne DOM-Elemente angewendet werden.
- {{CSP("worker-src")}}
  - : Gibt gültige Quellen für [`Worker`](/de/docs/Web/API/Worker), [`SharedWorker`](/de/docs/Web/API/SharedWorker) oder [`ServiceWorker`](/de/docs/Web/API/ServiceWorker)-Skripte an.

Alle Abrufdirektiven können den einzelnen Wert `'none'` annehmen, was darauf hinweist, dass der spezifische Ressourcentyp vollständig blockiert werden sollte, oder als ein oder mehrere _Quellausdrücke_, die gültige Quellen für diesen Ressourcentyp angeben. Weitere Details finden Sie unter [Abrufdirektiven-Syntax](#abrufdirektiven-syntax).

#### Fallbacks

Einige Abrufdirektiven fungieren als Fallbacks für andere, spezifischere Direktiven. Das bedeutet, dass, wenn die spezifischere Direktive nicht angegeben ist, der Fallback verwendet wird, um eine Richtlinie für diesen Ressourcentyp bereitzustellen.

- `default-src` ist ein Fallback für alle anderen Abrufdirektiven.
- `script-src` ist ein Fallback für `script-src-attr` und `script-src-elem`.
- `style-src` ist ein Fallback für `style-src-attr` und `style-src-elem`.
- `child-src` ist ein Fallback für `frame-src` und `worker-src`.

Zum Beispiel:

- Wenn `img-src` weggelassen wird, aber `default-src` enthalten ist, wird die von `default-src` definierte Richtlinie auf Bilder angewendet.
- Wenn `script-src-elem` weggelassen wird, aber `script-src` enthalten ist, wird die von `script-src` definierte Richtlinie auf `<script>`-Elemente angewendet.
- Wenn sowohl `script-src-elem` als auch `script-src` weggelassen werden, aber `default-src` enthalten ist, wird die von `default-src` definierte Richtlinie auf `<script>`-Elemente angewendet.

### Dokumentdirektiven

Dokumentdirektiven steuern die Eigenschaften eines Dokuments oder [Worker](/de/docs/Web/API/Web_Workers_API)-Umgebung, auf die eine Richtlinie angewendet wird.

- {{CSP("base-uri")}}
  - : Beschränkt die URLs, die im {{HTMLElement("base")}}-Element eines Dokuments verwendet werden können.
- {{CSP("sandbox")}}
  - : Aktiviert eine Sandbox für die angeforderte Ressource, ähnlich dem {{HTMLElement("iframe")}} [`sandbox`](/de/docs/Web/HTML/Reference/Elements/iframe#sandbox)-Attribut.

### Navigationsdirektiven

Navigationsdirektiven bestimmen, zu welchen Standorten ein Benutzer navigieren oder ein Formular übermitteln kann.

- {{CSP("form-action")}}
  - : Beschränkt die URLs, die als Ziel für Formulareinreichungen aus einem bestimmten Kontext verwendet werden können.
- {{CSP("frame-ancestors")}}
  - : Gibt gültige Eltern an, die eine Seite mit {{HTMLElement("frame")}}, {{HTMLElement("iframe")}}, {{HTMLElement("object")}} oder {{HTMLElement("embed")}} einbetten dürfen.

### Berichtsdirektiven

Berichtsdirektiven kontrollieren die Ziel-URL für CSP-Verletzungsberichte in `Content-Security-Policy` und {{HTTPHeader("Content-Security-Policy-Report-Only")}}.

- {{CSP("report-to")}}
  - : Stellt dem Browser ein Token zur Verfügung, das den Berichtsendpunkt oder die Gruppe von Endpunkten identifiziert, an die Informationen zu CSP-Verletzungen gesendet werden sollen.
    Die Endpunkte, die das Token darstellt, werden über andere HTTP-Header bereitgestellt, wie {{HTTPHeader("Reporting-Endpoints")}} und {{HTTPHeader("Report-To")}} {{deprecated_inline}}.

    > [!WARNING]
    > Diese Direktive soll [`report-uri`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/report-uri) ersetzen; in Browsern, die `report-to` unterstützen, wird die `report-uri`-Direktive ignoriert.
    > Allerdings sollten Sie, bis `report-to` umfassend unterstützt wird, beide Header wie gezeigt angeben (wobei `endpoint_name` der Name eines separat bereitgestellten Endpunkts ist):
    >
    > ```http
    > Content-Security-Policy: …; report-uri https://endpoint.example.com; report-to endpoint_name
    > ```

### Weitere Direktiven

- {{CSP("require-trusted-types-for")}}
  - : Erzwingt [Trusted Types](/de/docs/Web/API/Trusted_Types_API) an DOM-XSS-Injektionsstellen.
- {{CSP("trusted-types")}}
  - : Wird verwendet, um eine Whitelist von [Trusted Types](/de/docs/Web/API/Trusted_Types_API)-Richtlinien zu spezifizieren.
    Trusted Types ermöglichen es Anwendungen, DOM-XSS-Injektionsstellen so zu sperren, dass nur nicht manipulierbare, typisierte Werte anstelle von Zeichenfolgen akzeptiert werden.
- {{CSP("upgrade-insecure-requests")}}
  - : Weist Benutzeragenten an, alle unsicheren URLs einer Website (die über HTTP bereitgestellt werden), so zu behandeln, als wären sie durch sichere URLs (die über HTTPS bereitgestellt werden) ersetzt worden.
    Diese Direktive ist für Websites gedacht, die eine große Anzahl unsicherer, älterer URLs haben, die umgeschrieben werden müssen.

### Veraltete Direktiven

- {{CSP("block-all-mixed-content")}} {{deprecated_inline}}
  - : Verhindert das Laden von Assets über HTTP, wenn die Seite über HTTPS geladen wird.

- {{CSP("report-uri")}} {{deprecated_inline}}
  - : Stellt dem Browser eine URL zur Verfügung, an die CSP-Verletzungsberichte gesendet werden sollen.
    Dies wurde durch die [`report-to`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/report-to)-Direktive ersetzt.

## Abrufdirektiven-Syntax

Alle Abrufdirektiven können als einer der folgenden Werte angegeben werden:

- der einzelne Wert `'none'`, der anzeigt, dass der spezifische Ressourcentyp vollständig blockiert werden soll
- ein oder mehrere _Quellausdrücke_, die gültige Quellen für diesen Ressourcentyp angeben.

Jeder Quellausdruck nimmt eine der unten aufgeführten Formen an. Beachten Sie, dass nicht alle Formen auf alle Abrufdirektiven anwendbar sind: In der Dokumentation jeder Abrufdirektive erfahren Sie, welche Formen darauf anwendbar sind.

Die Formate `<host-source>` und `<scheme-source>` dürfen nicht in Anführungszeichen gesetzt werden, und alle anderen Formate müssen in einfache Anführungszeichen eingeschlossen sein.

### 'nonce-\<nonce_value>'

Dieser Wert besteht aus dem String `nonce-` gefolgt von einem {{Glossary("Nonce", "Nonce")}}-Wert. Der Nonce-Wert kann alle Zeichen von {{Glossary("Base64#base64_characters", "Base64")}} oder {{Glossary("Base64#url_and_filename_safe_base64", "URL-sicheres Base64")}} verwenden.

Dieser String ist ein zufälliger Wert, den der Server für jede HTTP-Antwort generiert. Beispiel:

```plain
'nonce-416d1177-4d12-4e3b-b7c9-f6c409789fb8'
```

Der Server kann dann denselben Wert als Wert des `nonce`-Attributs jeder {{htmlelement("script")}}- oder {{htmlelement("style")}}-Ressource einschließen, die sie aus dem Dokument laden möchten.

Der Browser vergleicht den Wert aus der CSP-Direktive mit dem Wert im Elementattribut und lädt die Ressource nur, wenn sie übereinstimmen.

Wenn eine Direktive einen Nonce und `unsafe-inline` enthält, ignoriert der Browser `unsafe-inline`.

Weitere Informationen zur Nutzung finden Sie unter [Nonces](/de/docs/Web/HTTP/Guides/CSP#nonces) im CSP-Leitfaden.

> [!NOTE]
> Nonce-Quellausdrücke sind nur auf {{htmlelement("script")}}- und {{htmlelement("style")}}-Elemente anwendbar.

### '\<hash_algorithm>-<hash_value>'

Dieser Wert besteht aus einem String, der einen Hash-Algorithmus identifiziert, gefolgt von `-`, gefolgt von einem Hash-Wert. Der Hash-Wert kann alle Zeichen von {{Glossary("Base64#base64_characters", "Base64")}} oder {{Glossary("Base64#url_and_filename_safe_base64", "URL-sicheres Base64")}} verwenden.

- Der Hash-Algorithmus-Identifikator muss einer der folgenden sein: `sha256`, `sha384` oder `sha512`.
- Der Hash-Wert ist der base64-kodierte {{Glossary("hash_function", "Hash")}} einer `<script>`- oder `<style>`-Ressource, berechnet mittels einer der folgenden Hash-Funktionen: SHA-256, SHA-384 oder SHA-512.

Beispiel:

```plain
'sha256-cd9827ad...'
```

Wenn der Browser das Dokument empfängt, hashiert er den Inhalt aller `<script>`- und `<style>`-Elemente, vergleicht das Ergebnis mit den Hashes in der CSP-Direktive und lädt die Ressource nur, wenn es eine Übereinstimmung gibt.

Wenn das Element eine externe Ressource lädt (z. B. mit dem [`src`](/de/docs/Web/HTML/Reference/Elements/script#src)-Attribut), muss das Element auch das [`integrity`](/de/docs/Web/HTML/Reference/Elements/script#integrity)-Attribut gesetzt haben.

Wenn eine Direktive einen Hash und `unsafe-inline` enthält, ignoriert der Browser `unsafe-inline`.

Weitere Informationen zur Nutzung finden Sie unter [Hashes](/de/docs/Web/HTTP/Guides/CSP#hashes) im CSP-Leitfaden.

> [!NOTE]
> Hash-Quellausdrücke sind nur auf {{htmlelement("script")}}- und {{htmlelement("style")}}-Elemente anwendbar.

### \<host-source>

Die [URL](/de/docs/Web/URI) oder IP-Adresse eines {{Glossary("host", "Hosts")}}, der eine gültige Quelle für die Ressource ist.

Das Schema, die Portnummer und der Pfad sind optional.

Wenn das Schema weggelassen wird, wird das Schema des Ursprungs des Dokuments verwendet.

Beim Abgleichen von Schemen sind sichere Upgrades erlaubt. Beispiel:

- `http://example.com` erlaubt auch Ressourcen von `https://example.com`
- `ws://example.org` erlaubt auch Ressourcen von `wss://example.org`.

Platzhalter (`'*'`) können für Subdomains, Hostadressen und Portnummern verwendet werden, was darauf hinweist, dass alle legalen Werte von jedem gültig sind. Beispiel:

- `http://*.example.com` erlaubt Ressourcen von jeder Subdomain von `example.com`, über HTTP oder HTTPS.

Pfad-Endungen mit `/` stimmen mit jedem Pfad überein, dessen Präfix sie sind. Beispiel:

- `example.com/api/` erlaubt Ressourcen von `example.com/api/users/new`.

Pfad-Endungen ohne `/` werden genau abgeglichen. Beispiel:

- `https://example.com/file.js` erlaubt Ressourcen von `https://example.com/file.js`, aber nicht `https://example.com/file.js/file2.js`.

### \<scheme-source>

Ein [Schema](/de/docs/Web/URI/Reference/Schemes), wie `https:`. Der Doppelpunkt ist erforderlich.

Sichere Upgrades sind erlaubt, also:

- `http:` erlaubt auch Ressourcen, die über HTTPS geladen werden
- `ws:` erlaubt auch Ressourcen, die über WSS geladen werden.

### 'self'

Ressourcen des angegebenen Typs dürfen nur vom gleichen {{Glossary("origin", "Ursprung")}} wie das Dokument geladen werden.

Sichere Upgrades sind erlaubt. Beispiel:

- Wenn das Dokument von `http://example.com` bereitgestellt wird, erlaubt eine CSP von `'self'` auch Ressourcen von `https://example.com`.
- Wenn das Dokument von `ws://example.org` bereitgestellt wird, erlaubt eine CSP von `'self'` auch Ressourcen von `wss://example.org`.

### 'trusted-types-eval'

Standardmäßig sind JavaScript-Funktionen, die ihre Argumente als JavaScript auswerten, deaktiviert, wenn eine CSP eine `default-src`- oder `script-src`-Direktive enthält.
Dies schließt die Funktionen [`eval()`](/de/docs/Web/JavaScript/Reference/Global_Objects/eval), das [`code`](/de/docs/Web/API/Window/setTimeout#code)-Argument für [`setTimeout()`](/de/docs/Web/API/Window/setTimeout) oder den {{jsxref("Function/Function()", "Function()")}}-Konstruktor ein.

Das Schlüsselwort `trusted-types-eval` kann verwendet werden, um diesen Schutz aufzuheben, aber nur, wenn [Trusted Types](/de/actions/Library/Trusted_Types_API) erzwungen werden und anstelle von Zeichenketten an diese Funktionen übergeben werden. Dies ermöglicht die dynamische Auswertung von Zeichenketten als JavaScript, aber nur, nachdem die Eingaben durch eine Transformationsfunktion geführt wurden, bevor sie injiziert werden, was die Möglichkeit hat, die Eingabe zu [bereinigen](/de/docs/Web/Security/Attacks/XSS#sanitization), um potenziell gefährliches Markup zu entfernen.

Das `trusted-types-eval`-Muss anstelle von [`'unsafe-eval'`](#unsafe-eval) verwendet werden, wenn diese Methoden mit vertrauenswürdigen Typen verwendet werden.
Dies stellt sicher, dass der Zugriff auf die Methoden in Browsern blockiert wird, die keine vertrauenswürdigen Typen unterstützen.

> [!NOTE]
> Entwickler sollten die Verwendung von `trusted-types-eval` oder diesen Methoden vermeiden, es sei denn, es ist absolut notwendig.
> Vertrauenswürdige Typen stellen sicher, dass die Eingabe durch eine Transformationsfunktion geführt wird – sie stellen nicht sicher, dass die Transformation die Eingabe sicher macht (und dies kann sehr schwer richtig zu machen sein).

Weitere Informationen finden Sie unter [`eval()` und ähnliche APIs](/de/docs/Web/HTTP/Guides/CSP#eval_and_similar_apis) im CSP-Leitfaden.

### 'unsafe-eval'

Standardmäßig sind JavaScript-Funktionen, die ihre Argumente als JavaScript auswerten, deaktiviert, wenn eine CSP eine `default-src`- oder `script-src`-Direktive enthält.
Dies schließt die Funktionen [`eval()`](/de/docs/Web/JavaScript/Reference/Global_Objects/eval), das [`code`](/de/docs/Web/API/Window/setTimeout#code)-Argument für [`setTimeout()`](/de/docs/Web/API/Window/setTimeout) oder den {{jsxref("Function/Function()", "Function()")}}-Konstruktor ein.

Das Schlüsselwort `unsafe-eval` kann verwendet werden, um diesen Schutz aufzuheben, sodass die dynamische Auswertung von Zeichenketten als JavaScript möglich ist.

> [!WARNING]
> Entwickler sollten `'unsafe-eval'` vermeiden, da es den Zweck einer CSP stark verfehlt.
> ['trusted-types-eval'](#trusted-types-eval) bietet eine "potenziell" sicherere Alternative, falls diese Methoden notwendig sind.

Weitere Informationen finden Sie unter [`eval()` und ähnliche APIs](/de/docs/Web/HTTP/Guides/CSP#eval_and_similar_apis) im CSP-Leitfaden.

### 'wasm-unsafe-eval'

Standardmäßig ist das Kompilieren von WebAssembly auf einer Seite nicht erlaubt, wenn eine CSP eine `default-src`- oder eine `script-src`-Direktive enthält, durch Funktionen wie [`WebAssembly.compileStreaming()`](/de/docs/WebAssembly/Reference/JavaScript_interface/compileStreaming_static).

Das Schlüsselwort `wasm-unsafe-eval` kann verwendet werden, um diesen Schutz aufzuheben. Dies ist eine viel sicherere Alternative zu `'unsafe-eval'`, da es keine allgemeine Auswertung von JavaScript ermöglicht.

### 'unsafe-inline'

Standardmäßig darf Inline-JavaScript nicht ausgeführt werden, wenn eine CSP eine `default-src`- oder eine `script-src`-Direktive enthält. Dies schließt ein:

- Inline-`<script>`-Tags
- Inline-Ereignis-Handler-Attribute
- `javascript:`-URLs.

Ähnlich wird Inline-CSS nicht geladen, wenn eine CSP `default-src` oder `style-src` enthält, einschließlich:

- Inline-`<style>`-Tags
- [`style`](/de/docs/Web/API/HTMLElement/style)-Attribute.

Das Schlüsselwort `unsafe-inline` kann verwendet werden, um diesen Schutz aufzuheben und das Laden dieser Formen zu ermöglichen.

> [!WARNING]
> Entwickler sollten `'unsafe-inline'` vermeiden, da es den Zweck einer CSP stark verfehlt.

Weitere Informationen finden Sie unter [Inline-JavaScript](/de/docs/Web/HTTP/Guides/CSP#inline_javascript) im CSP-Leitfaden.

### 'unsafe-hashes'

Standardmäßig sind Inline-Ereignis-Handler-Attribute wie `onclick` und Inline-`style`-Attribute nicht erlaubt, wenn eine CSP eine `default-src`- oder `script-src`-Direktive enthält.

Der Ausdruck `'unsafe-hashes'` erlaubt dem Browser, [Hash-Ausdrücke](#hash_algorithm-hash_value) für Inline-Ereignis-Handler und `style`-Attribute zu verwenden. Ein Beispiel für einen CSP-Direktive-Ausdruck könnte so aussehen:

```http
script-src 'unsafe-hashes' 'sha256-cd9827ad...'
```

Wenn der Hash-Wert mit dem Hash eines Inline-Ereignis-Handler-Attributwerts oder eines `style`-Attributwerts übereinstimmt, wird der Code ausgeführt.

> [!WARNING]
> Der Wert `'unsafe-hashes'` ist unsicher.
>
> Insbesondere ermöglicht er einen Angriff, bei dem der Inhalt des Inline-Ereignis-Handler-Attributs als Inline-`<script>`-Element in das Dokument injiziert wird. Angenommen, der Inline-Ereignis-Handler ist:
>
> ```html
> <button onclick="transferAllMyMoney()">Transfer all my money</button>
> ```
>
> Wenn ein Angreifer ein Inline-`<script>`-Element mit diesem Code injizieren kann, erlaubt die CSP dessen automatische Ausführung.
>
> `’unsafe-hashes'` ist jedoch viel sicherer als `’unsafe-inline'`.

### 'inline-speculation-rules'

Standardmäßig ist Inline-JavaScript nicht erlaubt, wenn eine CSP eine `default-src`- oder `script-src`-Direktive enthält. `'inline-speculation-rules'` erlaubt dem Browser das Laden von Inline-`<script>`-Elementen mit einem [`type`](/de/docs/Web/HTML/Reference/Elements/script/type)-Attribut von [`speculationrules`](/de/docs/Web/HTML/Reference/Elements/script/type/speculationrules).

Weitere Informationen finden Sie in der [Speculation Rules API](/de/docs/Web/API/Speculation_Rules_API).

### 'strict-dynamic'

Das Schlüsselwort `'strict-dynamic'` erweitert das Vertrauen, das ein [Nonce](#nonce-nonce_value) oder ein [Hash](#hash_algorithm-hash_value) auf ein Skript verleiht, auf Skripte, die dieses Skript dynamisch lädt, zum Beispiel durch das Erstellen neuer `<script>`-Tags mit [`Document.createElement()`](/de/docs/Web/API/Document/createElement) und dem anschließenden Einfügen in das Dokument mit [`Node.appendChild()`](/de/docs/Web/API/Node/appendChild).

Wenn dieses Schlüsselwort in einer Direktive vorhanden ist, werden die folgenden Quellausdruckswerte alle ignoriert:

- [\<host-source>](#host-source)
- [\<scheme-source>](#scheme-source)
- [`'self'`](#self)
- [`'unsafe-inline'`](#unsafe-inline)

Weitere Informationen finden Sie unter [Das `strict-dynamic`-Schlüsselwort](/de/docs/Web/HTTP/Guides/CSP#the_strict-dynamic_keyword) im CSP-Leitfaden.

### 'report-sample'

Wenn dieser Ausdruck in einer Direktive enthalten ist, die Skripte oder Styles kontrolliert, und die Direktive dazu führt, dass der Browser Inline-Skripte, Inline-Styles oder Ereignis-Handler-Attribute blockiert, enthält der [Verletzungsbericht](/de/docs/Web/HTTP/Guides/CSP#violation_reporting), den der Browser generiert, eine [`sample`](/de/docs/Web/API/CSPViolationReportBody/sample)-Eigenschaft mit den ersten 40 Zeichen der blockierten Ressource.

## CSP in Arbeitern

[Workers](/de/docs/Web/API/Worker) unterliegen im Allgemeinen _nicht_ der Inhalts-Sicherheitsrichtlinie des Dokuments (oder des übergeordneten Arbeiters), das sie erstellt hat. Um eine Inhalts-Sicherheitsrichtlinie für den Arbeiter festzulegen, setzen Sie einen `Content-Security-Policy`-Antwortheader für die Anforderung, die das Arbeiterskript selbst angefordert hat.

Die Ausnahme bildet der Fall, wenn der Ursprung des Arbeiterskripts ein global eindeutiger Identifikator ist (zum Beispiel, wenn seine URL ein Schema von Daten oder Blob hat). In diesem Fall erbt der Arbeiter die Inhalts-Sicherheitsrichtlinie des Dokuments oder Arbeiters, das ihn erstellt hat.

## Mehrere Inhalts-Sicherheitsrichtlinien

Der CSP-Mechanismus erlaubt es, mehrere Richtlinien für eine Ressource anzugeben, einschließlich über den `Content-Security-Policy`-Header, den {{HTTPHeader("Content-Security-Policy-Report-Only")}}-Header und ein {{HTMLElement("meta")}}-Element.

Sie können den `Content-Security-Policy`-Header mehr als einmal verwenden, wie im folgenden Beispiel. Achten Sie besonders auf die {{CSP("connect-src")}}-Direktive hier. Auch wenn die zweite Richtlinie die Verbindung erlauben würde, enthält die erste Richtlinie `connect-src 'none'`. Das Hinzufügen zusätzlicher Richtlinien kann die Fähigkeiten der geschützten Ressource _nur weiter einschränken_, was bedeutet, dass keine Verbindung erlaubt wird, und die strengste Richtlinie `connect-src 'none'` durchgesetzt wird.

```http
Content-Security-Policy: default-src 'self' http://example.com;
                          connect-src 'none';
Content-Security-Policy: connect-src http://example.com/;
                          script-src http://example.com/
```

## Beispiele

### Unsicherer Inline-Code deaktivieren und nur HTTPS-Ressourcen zulassen

Dieser HTTP-Header setzt die Standardrichtlinie so, dass nur das Laden von Ressourcen (Bilder, Schriftarten, Skripte usw.) über HTTPS erlaubt ist. Da die Direktiven `unsafe-inline` und `unsafe-eval` nicht gesetzt sind, werden Inline-Skripte blockiert.

```http
Content-Security-Policy: default-src https:
```

Dieselben Einschränkungen können mit dem HTML-{{htmlelement("meta")}}-Element angewendet werden.

```html
<meta http-equiv="Content-Security-Policy" content="default-src https:" />
```

### Inline-Code und HTTPS-Ressourcen zulassen, aber Plugins deaktivieren

Diese Richtlinie könnte auf einer vorhandenen Website verwendet werden, die zu viel Inline-Code verwendet, um ihn zu beheben, um sicherzustellen, dass Ressourcen nur über HTTPS geladen werden und Plugins deaktiviert werden:

```http
Content-Security-Policy: default-src https: 'unsafe-eval' 'unsafe-inline'; object-src 'none'
```

### Verstöße melden, aber nicht erzwingen, während des Testens

Dieses Beispiel setzt dieselben Einschränkungen wie das vorherige Beispiel, verwendet jedoch den {{httpheader("Content-Security-Policy-Report-Only")}}-Header und die {{CSP("report-to")}}-Direktive. Dieser Ansatz wird während des Testens verwendet, um Verstöße zu melden, ohne Code blockieren zu lassen.

Endpunkte (URLs), an die Berichte gesendet werden sollen, werden mit dem {{HTTPHeader("Reporting-Endpoints")}}-HTTP-Antwortheader definiert.

```http
Reporting-Endpoints: csp-endpoint="https://example.com/csp-reports"
```

Ein bestimmter Endpunkt wird dann als Berichtsziel in der CSP-Richtlinie mit der {{CSP("report-to")}}-Direktive ausgewählt.

```http
Content-Security-Policy-Report-Only: default-src https:; report-uri /csp-violation-report-url/; report-to csp-endpoint
```

Beachten Sie, dass die {{CSP("report-uri")}}-{{deprecated_inline}}-Direktive auch oben angegeben ist, da `report-to` noch nicht breit von Browsern unterstützt wird.

Weitere Beispiele finden Sie unter [Content Security Policy (CSP)-Implementierung](/de/docs/Web/Security/Practical_implementation_guides/CSP).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTTPHeader("Content-Security-Policy-Report-Only")}}
- [Lernen Sie mehr: Content Security Policy](/de/docs/Web/HTTP/Guides/CSP)
- [Inhalts-Sicherheit in WebExtensions](/de/docs/Mozilla/Add-ons/WebExtensions/Content_Security_Policy)
- [Annahme einer strengen Richtlinie](https://csp.withgoogle.com/docs/strict-csp.html)
- [CSP Evaluator](https://github.com/google/csp-evaluator) - Bewerten Sie Ihre Content Security Policy
