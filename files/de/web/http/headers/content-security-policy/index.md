---
title: Content-Security-Policy
slug: Web/HTTP/Headers/Content-Security-Policy
l10n:
  sourceCommit: 5bd9fe2b25c6eee2a14d0406ce7116998fa48c13
---

{{HTTPSidebar}}

Der HTTP-Antwortheader **`Content-Security-Policy`** ermöglicht es Website-Administratoren, die Ressourcen zu kontrollieren, die der Benutzeragent für eine bestimmte Seite laden darf. Mit einigen Ausnahmen beziehen sich Richtlinien hauptsächlich auf die Angabe von Serverursprüngen und Skriptendpunkten. Dies hilft, Cross-Site-Scripting-Angriffe abzuwehren ([Cross-site_scripting](/de/docs/Glossary/Cross-site_scripting)).

Weitere Informationen finden Sie im einführenden Artikel zur [Content Security Policy (CSP)](/de/docs/Web/HTTP/CSP).

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Headertyp</th>
      <td>[Antwortheader](/de/docs/Glossary/Response_header)</td>
    </tr>
    <tr>
      <th scope="row">[Verbotener Headername](/de/docs/Glossary/Forbidden_header_name)</th>
      <td>nein</td>
    </tr>
  </tbody>
</table>

## Syntax

```http
Content-Security-Policy: <policy-directive>; <policy-directive>
```

wobei `<policy-directive>` aus Folgendem besteht:
`<directive> <value>` ohne interne Zeichensetzung.

## Richtlinien

### Fetch-Richtlinien

[Fetch-Richtlinien](/de/docs/Glossary/Fetch_directive) kontrollieren die Orte, von denen bestimmte Ressourcentypen geladen werden dürfen.

- {{CSP("child-src")}}

  - : Definiert die gültigen Quellen für [Web Worker](/de/docs/Web/API/Web_Workers_API) und verschachtelte Browsing-Kontexte, die mit Elementen wie {{HTMLElement("frame")}} und {{HTMLElement("iframe")}} geladen werden.

    > [!WARNING]
    > Statt **`child-src`** zu verwenden,
    > sollten Sie die Richtlinien {{CSP("frame-src")}} und {{CSP("worker-src")}} verwenden, um verschachtelte Browsing-Kontexte und Worker zu regulieren.

- {{CSP("connect-src")}}
  - : Beschränkt die URLs, die über Skriptschnittstellen geladen werden können.
- {{CSP("default-src")}}
  - : Dient als Fallback für die anderen [Fetch-Richtlinien](/de/docs/Glossary/Fetch_directive).
- {{CSP("fenced-frame-src")}} {{experimental_inline}}
  - : Gibt gültige Quellen für verschachtelte Browsing-Kontexte an, die in {{HTMLElement("fencedframe")}}-Elemente geladen werden.
- {{CSP("font-src")}}
  - : Gibt gültige Quellen für Schriftarten an, die mit {{cssxref("@font-face")}} geladen werden.
- {{CSP("frame-src")}}
  - : Gibt gültige Quellen für verschachtelte Browsing-Kontexte an, die in Elementen wie
    {{HTMLElement("frame")}} und {{HTMLElement("iframe")}} geladen werden.
- {{CSP("img-src")}}
  - : Gibt gültige Quellen von Bildern und Favicons an.
- {{CSP("manifest-src")}}
  - : Gibt gültige Quellen von Anwendungsmanifestdateien an.
- {{CSP("media-src")}}
  - : Gibt gültige Quellen für das Laden von Medien mit den {{HTMLElement("audio")}},
    {{HTMLElement("video")}} und {{HTMLElement("track")}}-Elementen an.
- {{CSP("object-src")}}

  - : Gibt gültige Quellen für die {{HTMLElement("object")}} und {{HTMLElement("embed")}}-Elemente an.

    > [!NOTE]
    > Elemente, die von `object-src` kontrolliert werden, werden möglicherweise
    > zufällig als Legacy-HTML-Elemente betrachtet und erhalten keine neuen standardisierten
    > Funktionen (wie z. B. die Sicherheitsattribute `sandbox` oder `allow`
    > für `<iframe>`). Daher wird **empfohlen**, diese Fetch-Richtlinie zu
    > beschränken (z. B. explizit `object-src 'none'` zu setzen, wenn möglich).

- {{CSP("prefetch-src")}} {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Gibt gültige Quellen an, die vorab geladen oder gerendert werden sollen.
- {{CSP("script-src")}}
  - : Gibt gültige Quellen für JavaScript- und WebAssembly-Ressourcen an.
- {{CSP("script-src-elem")}}
  - : Gibt gültige Quellen für JavaScript-{{HTMLElement("script")}}-Elemente an.
- {{CSP("script-src-attr")}}
  - : Gibt gültige Quellen für JavaScript-Inline-Ereignishandler an.
- {{CSP("style-src")}}
  - : Gibt gültige Quellen für Stylesheets an.
- {{CSP("style-src-elem")}}
  - : Gibt gültige Quellen für Stylesheets {{HTMLElement("style")}}-Elemente und
    {{HTMLElement("link")}}-Elemente mit `rel="stylesheet"` an.
- {{CSP("style-src-attr")}}
  - : Gibt gültige Quellen für Inline-Stile an, die auf einzelne DOM-Elemente angewendet werden.
- {{CSP("worker-src")}}
  - : Gibt gültige Quellen für [`Worker`](/de/docs/Web/API/Worker), [`SharedWorker`](/de/docs/Web/API/SharedWorker) oder
    [`ServiceWorker`](/de/docs/Web/API/ServiceWorker)-Skripte an.

### Dokumentrichtlinien

Dokumentrichtlinien steuern die Eigenschaften eines Dokuments oder [Arbeitsbereichs](/de/docs/Web/API/Web_Workers_API), für das eine Richtlinie gilt.

- {{CSP("base-uri")}}
  - : Beschränkt die URLs, die im {{HTMLElement("base")}}-Element eines Dokuments verwendet werden können.
- {{CSP("sandbox")}}
  - : Aktiviert einen Sandbox-Modus für die angeforderte Ressource, ähnlich dem
    {{HTMLElement("iframe")}}-Attribut [`sandbox`](/de/docs/Web/HTML/Element/iframe#sandbox).

### Navigationsrichtlinien

Navigationsrichtlinien bestimmen, wohin ein Benutzer navigieren oder ein Formular absenden kann, zum Beispiel.

- {{CSP("form-action")}}
  - : Beschränkt die URLs, die als Ziel von Formularübermittlungen aus einem
    bestimmten Kontext verwendet werden können.
- {{CSP("frame-ancestors")}}
  - : Gibt gültige Eltern an, die eine Seite mithilfe von {{HTMLElement("frame")}},
    {{HTMLElement("iframe")}}, {{HTMLElement("object")}} oder {{HTMLElement("embed")}} einbetten dürfen.

### Berichterstellungsrichtlinien

Berichterstellungsrichtlinien steuern die Ziel-URL für CSP-Verletzungsberichte in `Content-Security-Policy` und {{HTTPHeader("Content-Security-Policy-Report-Only")}}.

- {{CSP("report-to")}}

  - : Stellt dem Browser ein Token zur Verfügung, das den Berichts-Endpunkt oder die Endpunktgruppe identifiziert, an die CSP-Verletzungsinformationen gesendet werden sollen.
    Die Endpunkte, die durch das Token repräsentiert werden, werden durch andere HTTP-Header bereitgestellt, wie z. B. {{HTTPHeader("Reporting-Endpoints")}} und {{HTTPHeader("Report-To")}} {{deprecated_inline}}.

    > [!WARNING]
    > Diese Richtlinie soll [`report-uri`](#report-uri) ersetzen; in Browsern, die `report-to` unterstützen, wird die `report-uri`-Richtlinie ignoriert.
    > Bis jedoch `report-to` umfassend unterstützt wird, sollten Sie beide Header wie gezeigt angeben (wobei `endpoint_name` der Name eines separat bereitgestellten Endpunkts ist):
    >
    > ```http
    > Content-Security-Policy: …; report-uri https://endpoint.example.com; report-to endpoint_name
    > ```

### Weitere Richtlinien

- {{CSP("require-trusted-types-for")}} {{experimental_inline}}
  - : Erzwingt [Trusted Types](https://w3c.github.io/trusted-types/dist/spec/) an den DOM-XSS-Injektionsstellen.
- {{CSP("trusted-types")}} {{experimental_inline}}
  - : Wird verwendet, um eine Positivliste von [Trusted Types](https://w3c.github.io/trusted-types/dist/spec/)
    Richtlinien anzugeben. Trusted Types ermöglicht es Anwendungen, DOM-XSS-Injektionsstellen zu sperren, sodass nur nicht fälschbare, getypte Werte anstelle von Strings akzeptiert werden.
- {{CSP("upgrade-insecure-requests")}}
  - : Weist Benutzeragenten an, alle unsicheren URLs einer Website (die über HTTP bereitgestellt werden) so zu behandeln, als seien sie durch sichere URLs (die über HTTPS bereitgestellt werden) ersetzt worden.
    Diese Richtlinie ist für Websites mit einer großen Anzahl unsicherer Legacy-URLs gedacht, die umgeschrieben werden müssen.

### Veraltete Richtlinien

- {{CSP("block-all-mixed-content")}} {{deprecated_inline}}

  - : Verhindert das Laden von Assets über HTTP, wenn die Seite über HTTPS geladen wird.

- {{CSP("report-uri")}} {{deprecated_inline}}
  - : Gibt dem Browser eine URL an, an die CSP-Verletzungsberichte gesendet werden sollen.
    Dies wurde durch die [`report-to`](#report-to)-Richtlinie ersetzt.

## Werte

Ein Überblick über die erlaubten Werte ist unten aufgeführt.
Eine detaillierte Referenz finden Sie unter [CSP-Quellenwerte](/de/docs/Web/HTTP/Headers/Content-Security-Policy/Sources#sources) und in der Dokumentation zu den einzelnen Richtlinien.

### Schlüsselwortwerte

- `'none'`
  - : Lässt das Laden von Ressourcen nicht zu.
- `'self'`
  - : Erlaubt nur Ressourcen aus dem aktuellen Ursprung.
- `'strict-dynamic'`
  - : Das Vertrauen, das einem Skript auf der Seite aufgrund einer begleitenden Nonce oder eines Hashs gewährt wird, wird auf die von ihm geladenen Skripte ausgedehnt.
- `'report-sample'`
  - : Erfordert, dass ein Beispiel des verletzenden Codes in den Verletzungsbericht aufgenommen wird.
- `'inline-speculation-rules'`
  - : Ermöglicht die Einbeziehung von [Spekulationsregeln](/de/docs/Web/API/Speculation_Rules_API) in Skripte (siehe auch [`<script type="speculationrules">`](/de/docs/Web/HTML/Element/script/type/speculationrules)).

### Unsichere Schlüsselwortwerte

- `'unsafe-inline'`
  - : Erlaubt die Verwendung von Inline-Ressourcen.
- `'unsafe-eval'`
  - : Erlaubt die Verwendung dynamischer Codeauswertung wie {{jsxref("Global_Objects/eval", "eval")}}, [`setTimeout()`](/de/docs/Web/API/SetTimeout) und `window.execScript` {{non-standard_inline}}.
- `'unsafe-hashes'`
  - : Ermöglicht die Aktivierung bestimmter Inline-Ereignishandler.
- `'wasm-unsafe-eval'`
  - : Ermöglicht das Laden und Ausführen von WebAssembly-Modulen, ohne die unsichere JavaScript-Ausführung über `'unsafe-eval'` zuzulassen.
    Die einfachen Anführungszeichen sind erforderlich.

### Hostwerte

- Host

  - Lässt das Laden von Ressourcen nur von einem bestimmten Host zu, mit optionalem Schema, Port und Pfad. Zum Beispiel `example.com`, `*.example.com`, `https://*.example.com:12/path/to/file.js`.
  - Pfadteile im CSP, die mit `/` enden, stimmen mit jedem Pfad überein, für den sie ein Präfix sind. Beispielsweise stimmt `example.com/api/` mit URLs wie `example.com/api/users/new` überein.
  - Andere Pfadteile im CSP sind genau, z. B. `example.com/file.js` stimmt mit `http://example.com/file.js` und `https://example.com/file.js` überein, aber nicht mit `https://example.com/file.js/file2.js`.

- Schema
  - Lässt das Laden von Ressourcen nur über ein bestimmtes Schema zu, sollte immer mit `:` enden. Zum Beispiel `https:`, `http:`, `data:`, etc.

### Andere Werte

- `'nonce-*'`
  - : Eine kryptografische Nonce (nur einmal verwendet), um Skripte zu erlauben. Der Server muss einen eindeutigen Nonce-Wert generieren, jedes Mal, wenn er eine Richtlinie sendet. Es ist entscheidend, eine Nonce bereitzustellen, die nicht erraten werden kann, da das Umgehen der Richtlinie einer Ressource sonst trivial ist. Dies wird in Verbindung mit dem [Nonce-Attribut des Skript-Tags](/de/docs/Web/HTML/Element/script#nonce) verwendet. Zum Beispiel `nonce-DhcnhD3khTMePgXwdayK9BsMqXjhguVV`.
- `'sha*-*'`
  - : sha256, sha384 oder sha512. Gefolgt von einem Bindestrich und dann dem sha\*-Wert. Zum Beispiel `sha256-jzgBGA4UWFFmpOBq0JpdsySukE1FrEN5bUpoK8Z29fY=`.

## CSP in Arbeitern

[Arbeiter](/de/docs/Web/API/Worker) werden im Allgemeinen _nicht_ von der Inhaltsrichtlinie des Dokuments (oder des Elternarbeiters) geregelt, der sie erstellt hat. Um eine Inhaltsrichtlinie für den Arbeiter festzulegen, muss ein `Content-Security-Policy`-Antwortheader für die Anfrage gesetzt werden, die das Arbeiterskript selbst angefordert hat.

Die Ausnahme davon ist, wenn der Ursprung des Arbeiterskripts ein global einzigartiger Bezeichner ist (zum Beispiel, wenn seine URL ein Schema von Daten oder Blob aufweist). In diesem Fall erbt der Arbeiter die Inhaltsrichtlinie des Dokuments oder Arbeiters, der ihn erstellt hat.

## Mehrere Inhaltsrichtlinien

Der CSP-Mechanismus erlaubt es, mehrere Richtlinien für eine Ressource anzugeben, einschließlich über den `Content-Security-Policy`-Header, den {{HTTPHeader("Content-Security-Policy-Report-Only")}}-Header und ein {{HTMLElement("meta")}}-Element.

Sie können den `Content-Security-Policy`-Header mehrmals verwenden, wie im folgenden Beispiel. Achten Sie besonders auf die {{CSP("connect-src")}}-Richtlinie hier. Auch wenn die zweite Richtlinie die Verbindung erlauben würde, enthält die erste Richtlinie `connect-src 'none'`. Das Hinzufügen zusätzlicher Richtlinien kann nur die Fähigkeiten der geschützten Ressource weiter einschränken, was bedeutet, dass keine Verbindung erlaubt wird und als strengste Richtlinie `connect-src 'none'` durchgesetzt wird.

```http
Content-Security-Policy: default-src 'self' http://example.com;
                          connect-src 'none';
Content-Security-Policy: connect-src http://example.com/;
                          script-src http://example.com/
```

## Beispiele

### Unsicheres Inline-Code deaktivieren und nur HTTPS-Ressourcen zulassen

Dieser HTTP-Header setzt die Standardrichtlinie, um nur das Laden von Ressourcen (Bilder, Schriftarten, Skripte, etc.) über HTTPS zuzulassen. Da die Direktiven `unsafe-inline` und `unsafe-eval` nicht gesetzt sind, werden Inline-Skripte blockiert.

```http
Content-Security-Policy: default-src https:
```

Die gleichen Beschränkungen können mit dem HTML-{{htmlelement("meta")}}-Element angewendet werden.

```html
<meta http-equiv="Content-Security-Policy" content="default-src https:" />
```

### Inline-Code und HTTPS-Ressourcen zulassen, aber Plugins deaktivieren

Diese Richtlinie könnte für eine vorhandene Website verwendet werden, die zu viel Inline-Code verwendet, um diesen zu beheben, um sicherzustellen, dass Ressourcen nur über HTTPS geladen werden und Plugins deaktiviert sind:

```http
Content-Security-Policy: default-src https: 'unsafe-eval' 'unsafe-inline'; object-src 'none'
```

### Berichte erstellen, aber Verstöße beim Testen nicht erzwingen

Dieses Beispiel setzt die gleichen Beschränkungen wie das vorherige Beispiel, verwendet jedoch den {{httpheader("Content-Security-Policy-Report-Only")}}-Header und die {{CSP("report-to")}}-Richtlinie. Dieser Ansatz wird während des Testens verwendet, um Verstöße zu melden, aber den Code nicht zu blockieren.

Endpunkte (URLs), an die Berichte gesendet werden sollen, werden unter Verwendung des {{HTTPHeader("Reporting-Endpoints")}}-HTTP-Antwortheaders definiert.

```http
Reporting-Endpoints: csp-endpoint="https://example.com/csp-reports"
```

Ein bestimmter Endpunkt wird dann als Berichtsziel in der CSP-Richtlinie unter Verwendung der {{CSP("report-to")}}-Richtlinie ausgewählt.

```http
Content-Security-Policy-Report-Only: default-src https:; report-uri /csp-violation-report-url/; report-to csp-endpoint
```

Beachten Sie, dass die {{CSP("report-uri")}} {{deprecated_inline}}-Richtlinie auch oben angegeben ist, weil `report-to` noch nicht umfassend von den Browsern unterstützt wird.

Sehen Sie sich [Content Security Policy (CSP)-Implementierung](/de/docs/Web/Security/Practical_implementation_guides/CSP) für weitere Beispiele an.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTTPHeader("Content-Security-Policy-Report-Only")}}
- [Erfahren Sie mehr über: Content Security Policy](/de/docs/Web/HTTP/CSP)
- [Content Security in WebExtensions](/de/docs/Mozilla/Add-ons/WebExtensions/Content_Security_Policy)
- [Eine strikte Richtlinie annehmen](https://csp.withgoogle.com/docs/strict-csp.html)
- [CSP Evaluator](https://github.com/google/csp-evaluator) - Bewerten Sie Ihre Content Security Policy
