---
title: Content-Security-Policy
slug: Web/HTTP/Headers/Content-Security-Policy
l10n:
  sourceCommit: c63daf697d8f22ba17d4633f018ad7dfa65e4770
---

{{HTTPSidebar}}

Der HTTP-**`Content-Security-Policy`**-Antwortheader ermöglicht
Website-Administratoren, die Ressourcen zu kontrollieren, die der Benutzeragent für eine
gegebene Seite laden darf. Mit wenigen Ausnahmen beinhalten Richtlinien hauptsächlich die Spezifikation von Server-Ursprüngen und
Script-Endpunkten. Dies hilft, Cross-Site-Scripting-Angriffe zu verhindern
({{Glossary("Cross-site_scripting")}}).

Für weitere Informationen lesen Sie den einführenden Artikel über die [Content Security Policy (CSP)](/de/docs/Web/HTTP/CSP).

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header type</th>
      <td>{{Glossary("Response header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden header name")}}</th>
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

{{Glossary("Fetch directive","Fetch directives")}} kontrollieren die Orte, von denen bestimmte Ressourcentypen geladen werden dürfen.

- {{CSP("child-src")}}

  - : Definiert die gültigen Quellen für [Web Worker](/de/docs/Web/API/Web_Workers_API) und verschachtelte Browserkontexte, die mit Elementen wie
    {{HTMLElement("frame")}} und {{HTMLElement("iframe")}} geladen werden.

    > [!WARNING]
    > Anstelle von **`child-src`**,
    > wenn Sie verschachtelte Browserkontexte und Worker regulieren wollen,
    > sollten Sie die {{CSP("frame-src")}}- und {{CSP("worker-src")}}-Direktiven verwenden.

- {{CSP("connect-src")}}
  - : Beschränkt die URLs, die über Script-Schnittstellen geladen werden können.
- {{CSP("default-src")}}
  - : Dient als Fallback für die anderen {{Glossary("Fetch directive", "fetch directives")}}.
- {{CSP("fenced-frame-src")}} {{experimental_inline}}
  - : Gibt gültige Quellen für verschachtelte Browserkontexte an, die in {{HTMLElement("fencedframe")}}-Elementen geladen werden.
- {{CSP("font-src")}}
  - : Gibt gültige Quellen für Schriften an, die mit {{cssxref("@font-face")}} geladen werden.
- {{CSP("frame-src")}}
  - : Gibt gültige Quellen für verschachtelte Browserkontexte in Elementen wie
    {{HTMLElement("frame")}} und {{HTMLElement("iframe")}} an.
- {{CSP("img-src")}}
  - : Gibt gültige Quellen für Bilder und Favicons an.
- {{CSP("manifest-src")}}
  - : Gibt gültige Quellen für Anwendungsmanifestdateien an.
- {{CSP("media-src")}}
  - : Gibt gültige Quellen für das Laden von Medien mit den {{HTMLElement("audio")}},
    {{HTMLElement("video")}} und {{HTMLElement("track")}}-Elementen an.
- {{CSP("object-src")}}

  - : Gibt gültige Quellen für die {{HTMLElement("object")}} und {{HTMLElement("embed")}}-Elemente an.

    > [!NOTE]
    > Von `object-src` kontrollierte Elemente gelten möglicherweise
    > zufällig als veraltete HTML-Elemente und erhalten keine neuen standardisierten
    > Merkmale (wie die Sicherheitsattribute `sandbox` oder `allow`
    > für `<iframe>`). Daher wird es **empfohlen**, diese Fetch-Direktive zu
    > beschränken (z.B. explizit `object-src 'none'` festzulegen, wenn
    > möglich).

- {{CSP("prefetch-src")}} {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Gibt gültige Quellen für das Vorladen oder Vorab-Rendern an.
- {{CSP("script-src")}}
  - : Gibt gültige Quellen für JavaScript- und WebAssembly-Ressourcen an.
- {{CSP("script-src-elem")}}
  - : Gibt gültige Quellen für JavaScript-{{HTMLElement("script")}}-Elemente an.
- {{CSP("script-src-attr")}}
  - : Gibt gültige Quellen für JavaScript-Ereignisbehandler im Inline-Stil an.
- {{CSP("style-src")}}
  - : Gibt gültige Quellen für Stylesheets an.
- {{CSP("style-src-elem")}}
  - : Gibt gültige Quellen für {{HTMLElement("style")}}-Stylesheet-Elemente und
    {{HTMLElement("link")}}-Elemente mit `rel="stylesheet"` an.
- {{CSP("style-src-attr")}}
  - : Gibt gültige Quellen für Inline-Stile an, die auf einzelne DOM-Elemente angewendet werden.
- {{CSP("worker-src")}}
  - : Gibt gültige Quellen für {{domxref("Worker")}}, {{domxref("SharedWorker")}} oder
    {{domxref("ServiceWorker")}}-Skripte an.

### Dokument-Direktiven

Dokument-Direktiven regeln die Eigenschaften eines Dokuments oder [Workers](/de/docs/Web/API/Web_Workers_API)-Umgebung, auf die eine Richtlinie
angewendet wird.

- {{CSP("base-uri")}}
  - : Beschränkt die URLs, die im {{HTMLElement("base")}}-Element eines Dokuments verwendet werden können.
- {{CSP("sandbox")}}
  - : Aktiviert eine Sandbox für die angeforderte Ressource, ähnlich dem
    {{HTMLElement("iframe")}} [`sandbox`](/de/docs/Web/HTML/Element/iframe#sandbox)-Attribut.

### Navigations-Direktiven

Navigations-Direktiven regeln, zu welchen Orten ein Benutzer navigieren oder ein Formular senden kann,
zum Beispiel.

- {{CSP("form-action")}}
  - : Beschränkt die URLs, die als Ziel von Formularübertragungen aus einem
    bestimmten Kontext verwendet werden können.
- {{CSP("frame-ancestors")}}
  - : Gibt gültige Eltern an, die eine Seite mit {{HTMLElement("frame")}},
    {{HTMLElement("iframe")}}, {{HTMLElement("object")}} oder {{HTMLElement("embed")}} einbetten dürfen.

### Bericht-Direktiven

Bericht-Direktiven steuern die Ziel-URL für CSP-Verstoßberichte in `Content-Security-Policy` und {{HTTPHeader("Content-Security-Policy-Report-Only")}}.

- {{CSP("report-to")}}

  - : Bietet dem Browser ein Token, das den Berichtsendepunkt oder die Gruppe von Endpunkten identifiziert, an die Informationen über CSP-Verstöße gesendet werden sollen.
    Die Endpunkte, die das Token repräsentiert, werden über andere HTTP-Header bereitgestellt, wie {{HTTPHeader("Reporting-Endpoints")}} und {{HTTPHeader("Report-To")}} {{deprecated_inline}}.

    > [!WARNING]
    > Diese Direktive soll [`report-uri`](#report-uri) ersetzen. In Browsern, die `report-to` unterstützen, wird die `report-uri`-Direktive ignoriert.
    > Bis `report-to` jedoch breit unterstützt wird, sollten Sie beide Header wie gezeigt angeben (wobei `endpoint_name` der Name eines gesondert bereitgestellten Endpunkts ist):
    >
    > ```http
    > Content-Security-Policy: …; report-uri https://endpoint.example.com; report-to endpoint_name
    > ```

### Weitere Direktiven

- {{CSP("require-trusted-types-for")}} {{experimental_inline}}
  - : Erzwingt [Trusted Types](https://w3c.github.io/trusted-types/dist/spec/) an den DOM-XSS-Einschlusspunkten.
- {{CSP("trusted-types")}} {{experimental_inline}}
  - : Wird verwendet, um eine Positivliste von [Trusted Types](https://w3c.github.io/trusted-types/dist/spec/)
    Richtlinien anzugeben. Trusted Types ermöglicht es Anwendungen, DOM-XSS-Einschlusspunkte zu sperren, sodass
    nur nicht fälschbare, typisierte Werte anstelle von Zeichenfolgen akzeptiert werden.
- {{CSP("upgrade-insecure-requests")}}
  - : Weist Benutzeragenten an, alle unsicheren URLs einer Seite (die über
    HTTP bereitgestellt werden) so zu behandeln, als wären sie durch sichere URLs (die über HTTPS bereitgestellt werden) ersetzt worden.
    Diese Direktive ist für Websites mit einer großen Anzahl unsicherer veralteter URLs gedacht,
    die umgeschrieben werden müssen.

### Veraltete Direktiven

- {{CSP("block-all-mixed-content")}} {{deprecated_inline}}

  - : Verhindert das Laden von Assets über HTTP, wenn die Seite über HTTPS geladen wird.

- {{CSP("report-uri")}} {{deprecated_inline}}
  - : Gibt dem Browser eine URL an, an die CSP-Verstoßberichte gesendet werden sollen.
    Diese wurde durch die [`report-to`](#report-to)-Direktive ersetzt.

## Werte

Ein Überblick über die erlaubten Werte ist unten aufgelistet.
Für eine detaillierte Referenz siehe [CSP Source Values](/de/docs/Web/HTTP/Headers/Content-Security-Policy/Sources#sources) und die Dokumentation zu einzelnen Direktiven.

### Schlüsselwortwerte

- `'none'`
  - : Erlaubt das Laden von keinerlei Ressourcen.
- `'self'`
  - : Erlaubt nur Ressourcen vom aktuellen Ursprung.
- `'strict-dynamic'`
  - : Das Vertrauen, das einem Skript auf der Seite durch ein begleitendes Nonce oder Hash gewährt wird, wird auf die Skripte, die es lädt, erweitert.
- `'report-sample'`
  - : Erfordert, dass ein Beispiel des verletzenden Codes im Verstoßbericht enthalten ist.
- `'inline-speculation-rules'`
  - : Erlaubt die Einbeziehung von [Spekulationsregeln](/de/docs/Web/API/Speculation_Rules_API) in Skripte (siehe auch [`<script type="speculationrules">`](/de/docs/Web/HTML/Element/script/type/speculationrules)).

### Unsichere Schlüsselwortwerte

- `'unsafe-inline'`
  - : Erlaubt die Verwendung von Inline-Ressourcen.
- `'unsafe-eval'`
  - : Erlaubt die Verwendung der dynamischen Codeauswertung wie {{jsxref("Global_Objects/eval", "eval")}}, {{domxref("setTimeout()")}}, und `window.execScript` {{non-standard_inline}}.
- `'unsafe-hashes'`
  - : Ermöglicht die Aktivierung bestimmter Inline-Ereignis-Handler.
- `'wasm-unsafe-eval'`
  - : Erlaubt das Laden und Ausführen von WebAssembly-Modulen ohne die Notwendigkeit, auch unsicheres JavaScript auszuführen, über `'unsafe-eval'`.
    Die einzelnen Anführungszeichen sind erforderlich.

### Hostwerte

- Host

  - Erlaubt nur das Laden von Ressourcen von einem bestimmten Host, mit optionalem Schema, Port und Pfad. Zum Beispiel, `example.com`, `*.example.com`, `https://*.example.com:12/path/to/file.js`.
  - Pfadteile in der CSP, die mit `/` enden, stimmen mit jedem Pfad überein, dessen Präfix sie sind. Zum Beispiel, `example.com/api/` wird mit URLs wie `example.com/api/users/new` übereinstimmen.
  - Andere Pfadteile in der CSP werden genau abgeglichen; zum Beispiel `example.com/file.js` wird mit `http://example.com/file.js` und `https://example.com/file.js` übereinstimmen, aber nicht mit `https://example.com/file.js/file2.js`.

- Schema
  - Erlaubt nur das Laden von Ressourcen über ein bestimmtes Schema, sollte immer mit "`:`" enden. Zum Beispiel, `https:`, `http:`, `data:` usw.

### Weitere Werte

- `'nonce-*'`
  - : Ein kryptographisches Nonce (nur einmal verwendet), um Skripten zu erlauben. Der Server muss bei jeder Übermittlung einer Richtlinie einen eindeutigen Nonce-Wert generieren. Es ist entscheidend, ein Nonce bereitzustellen, das nicht erraten werden kann, da das Umgehen der Richtlinie einer Ressource sonst trivial ist. Dies wird in Verbindung mit dem [nonce-Attribut des Script-Tags](/de/docs/Web/HTML/Element/script#nonce) verwendet. Zum Beispiel, `nonce-DhcnhD3khTMePgXwdayK9BsMqXjhguVV`.
- `'sha*-*'`
  - : sha256, sha384 oder sha512. Danach folgt ein Bindestrich und dann der sha\*-Wert. Zum Beispiel, `sha256-jzgBGA4UWFFmpOBq0JpdsySukE1FrEN5bUpoK8Z29fY=`.

## CSP in Workern

[Worker](/de/docs/Web/API/Worker) werden im Allgemeinen _nicht_ von der Content-Security-Policy des Dokuments (oder des übergeordneten Workers), die sie erstellt hat, geregelt.
Um eine Content-Security-Policy für den Worker festzulegen, setzen Sie einen
`Content-Security-Policy`-Antwortheader für die Anfrage, welche das
Worker-Skript selbst angefordert hat.

Die Ausnahme hiervon ist, wenn der Ursprung des Worker-Skripts ein global eindeutiger Bezeichner ist
(zum Beispiel, wenn seine URL ein Schema von Daten oder Blob hat). In diesem Fall erbt der Worker
die Content-Security-Policy des Dokuments oder Workers, welcher ihn erstellt hat.

## Mehrere Content-Security-Richtlinien

Der CSP-Mechanismus erlaubt es, für eine Ressource mehrere Richtlinien anzugeben, einschließlich
über den `Content-Security-Policy`-Header, den
{{HTTPHeader("Content-Security-Policy-Report-Only")}}-Header und ein
{{HTMLElement("meta")}}-Element.

Sie können den `Content-Security-Policy`-Header mehr als einmal verwenden, wie im untenstehenden
Beispiel. Achten Sie besonders auf die {{CSP("connect-src")}}-Direktive hier. Auch
wenn die zweite Richtlinie die Verbindung erlauben würde, enthält die erste Richtlinie
`connect-src 'none'`. Das Hinzufügen zusätzlicher Richtlinien _kann nur weiter einschränken_
die Fähigkeiten der geschützten Ressource, was bedeutet, dass keine Verbindung erlaubt wird, und als die strengste Richtlinie
`connect-src 'none'` durchgesetzt wird.

```http
Content-Security-Policy: default-src 'self' http://example.com;
                          connect-src 'none';
Content-Security-Policy: connect-src http://example.com/;
                          script-src http://example.com/
```

## Beispiele

### Unsicheren Inline-Code deaktivieren und nur HTTPS-Ressourcen zulassen

Dieser HTTP-Header setzt die Standardrichtlinie so, dass das Laden von Ressourcen (Bilder, Schriften, Skripte usw.) nur über HTTPS erlaubt ist.
Da die Direktiven `unsafe-inline` und `unsafe-eval` nicht gesetzt sind, werden Inline-Skripte blockiert.

```http
Content-Security-Policy: default-src https:
```

Die gleichen Einschränkungen können mit dem HTML-{{htmlelement("meta")}}-Element angewendet werden.

```html
<meta http-equiv="Content-Security-Policy" content="default-src https:" />
```

### Inline-Code und HTTPS-Ressourcen zulassen, aber Plugins deaktivieren

Diese Richtlinie könnte auf einer bereits bestehenden Seite verwendet werden, die zu viel Inline-Code verwendet, um dies zu beheben, um sicherzustellen, dass Ressourcen nur über HTTPS geladen werden und Plugins deaktiviert werden:

```http
Content-Security-Policy: default-src https: 'unsafe-eval' 'unsafe-inline'; object-src 'none'
```

### Verstöße melden, aber nicht durchsetzen beim Testen

Dieses Beispiel setzt die gleichen Einschränkungen wie das vorherige Beispiel, jedoch mit dem {{httpheader("Content-Security-Policy-Report-Only")}}-Header und der {{CSP("report-to")}}-Direktive.
Dieser Ansatz wird während des Testens verwendet, um Verstöße zu melden, aber den Code nicht an der Ausführung zu hindern.

Endpunkte (URLs), an die Berichte gesendet werden sollen, werden mit dem {{HTTPHeader("Reporting-Endpoints")}}-HTTP-Antwortheader definiert.

```http
Reporting-Endpoints: csp-endpoint="https://example.com/csp-reports"
```

Ein bestimmter Endpunkt wird dann als Berichtsziel in der CSP-Richtlinie mit der {{CSP("report-to")}}-Direktive ausgewählt.

```http
Content-Security-Policy-Report-Only: default-src https:; report-uri /csp-violation-report-url/; report-to csp-endpoint
```

Beachten Sie, dass die {{CSP("report-uri")}} {{deprecated_inline}}-Direktive oben ebenfalls angegeben ist, da `report-to` noch nicht breit von Browsern unterstützt wird.

Siehe [Implementierung der Content-Security-Policy (CSP)](/de/docs/Web/Security/Practical_implementation_guides/CSP) für weitere Beispiele.

## Spezifikationen

{{Specifications}}

## Kompatibilität der Browser

{{Compat}}

## Siehe auch

- {{HTTPHeader("Content-Security-Policy-Report-Only")}}
- [Lernen Sie über: Content Security Policy](/de/docs/Web/HTTP/CSP)
- [Content Security in WebExtensions](/de/docs/Mozilla/Add-ons/WebExtensions/Content_Security_Policy)
- [Eine strikte Richtlinie übernehmen](https://csp.withgoogle.com/docs/strict-csp.html)
- [CSP-Evaluator](https://github.com/google/csp-evaluator) - Bewerten Sie Ihre
  Content-Security-Policy
