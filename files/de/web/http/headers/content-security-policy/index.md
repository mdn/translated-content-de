---
title: Content-Security-Policy
slug: Web/HTTP/Headers/Content-Security-Policy
l10n:
  sourceCommit: 5bd9fe2b25c6eee2a14d0406ce7116998fa48c13
---

{{HTTPSidebar}}

Das HTTP-Antwort-Header **`Content-Security-Policy`** ermöglicht
Webseiten-Administratoren die Kontrolle darüber, welche Ressourcen der Benutzeragent für eine gegebene Seite laden darf. Mit wenigen Ausnahmen beziehen sich Richtlinien hauptsächlich auf die Angabe von Server-Ursprüngen und Skript-Endpunkten. Dies hilft, Cross-Site-Scripting-Angriffe ([Cross-site_scripting](/de/docs/Glossary/Cross-site_scripting)) zu verhindern.

Weitere Informationen finden Sie im einführenden Artikel über [Content Security Policy (CSP)](/de/docs/Web/HTTP/CSP).

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>[Antwort-Header](/de/docs/Glossary/Response_header)</td>
    </tr>
    <tr>
      <th scope="row">[Verbotener Header-Name](/de/docs/Glossary/Forbidden_header_name)</th>
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

[Fetch-Richtlinien](/de/docs/Glossary/Fetch_directive) steuern die Orte, von denen bestimmte Ressourcentypen geladen werden dürfen.

- {{CSP("child-src")}}

  - : Definiert die gültigen Quellen für [Web Worker](/de/docs/Web/API/Web_Workers_API) und verschachtelte Browsing-Kontexte, die mit Elementen wie {{HTMLElement("frame")}} und {{HTMLElement("iframe")}} geladen werden.

    > [!WARNING]
    > Anstelle von **`child-src`**,
    > sollten Sie, wenn Sie verschachtelte Browsing-Kontexte und Worker regulieren möchten,
    > die Direktiven {{CSP("frame-src")}} und {{CSP("worker-src")}} verwenden.

- {{CSP("connect-src")}}
  - : Beschränkt die URLs, die über Skript-Schnittstellen geladen werden können.
- {{CSP("default-src")}}
  - : Dient als Standard für die anderen [Fetch-Richtlinien](/de/docs/Glossary/Fetch_directive).
- {{CSP("fenced-frame-src")}} {{experimental_inline}}
  - : Gibt gültige Quellen für verschachtelte Browsing-Kontexte an, die in {{HTMLElement("fencedframe")}}-Elementen geladen werden.
- {{CSP("font-src")}}
  - : Gibt gültige Quellen für Schriftarten an, die mit {{cssxref("@font-face")}} geladen werden.
- {{CSP("frame-src")}}
  - : Gibt gültige Quellen für verschachtelte Browsing-Kontexte an, die in Elementen wie {{HTMLElement("frame")}} und {{HTMLElement("iframe")}} geladen werden.
- {{CSP("img-src")}}
  - : Gibt die gültigen Quellen für Bilder und Favicons an.
- {{CSP("manifest-src")}}
  - : Gibt die gültigen Quellen für Anwendungsmanifestdateien an.
- {{CSP("media-src")}}
  - : Gibt gültige Quellen zum Laden von Medien mit den {{HTMLElement("audio")}}, {{HTMLElement("video")}} und {{HTMLElement("track")}} Elementen an.
- {{CSP("object-src")}}

  - : Gibt gültige Quellen für die {{HTMLElement("object")}} und {{HTMLElement("embed")}} Elemente an.

    > [!NOTE]
    > Elemente, die durch `object-src` kontrolliert werden, gelten vielleicht
    > zufällig als veraltete HTML-Elemente und erhalten keine neuen standardisierten
    > Funktionen (wie die Sicherheitsattribute `sandbox` oder `allow`
    > für `<iframe>`). Daher wird **empfohlen**,
    > diese Fetch-Richtlinie zu beschränken (z.B. explizit `object-src 'none'` zu setzen, wenn
    > möglich).

- {{CSP("prefetch-src")}} {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Gibt gültige Quellen an, die vorab ermittelt oder vorgeladen werden sollen.
- {{CSP("script-src")}}
  - : Gibt gültige Quellen für JavaScript und WebAssembly-Ressourcen an.
- {{CSP("script-src-elem")}}
  - : Gibt gültige Quellen für JavaScript {{HTMLElement("script")}}-Elemente an.
- {{CSP("script-src-attr")}}
  - : Gibt gültige Quellen für JavaScript-Inline-Ereignis-Handler an.
- {{CSP("style-src")}}
  - : Gibt gültige Quellen für Stylesheets an.
- {{CSP("style-src-elem")}}
  - : Gibt gültige Quellen für Stylesheets an, {{HTMLElement("style")}}-Elemente und {{HTMLElement("link")}}-Elemente mit `rel="stylesheet"`.
- {{CSP("style-src-attr")}}
  - : Gibt gültige Quellen für Inline-Styles an, die auf individuelle DOM-Elemente angewendet werden.
- {{CSP("worker-src")}}
  - : Gibt gültige Quellen für [`Worker`](/de/docs/Web/API/Worker), [`SharedWorker`](/de/docs/Web/API/SharedWorker) oder [`ServiceWorker`](/de/docs/Web/API/ServiceWorker) Skripte an.

### Dokument-Richtlinien

Dokumenten-Richtlinien bestimmen die Eigenschaften eines Dokuments oder einer [Worker](/de/docs/Web/API/Web_Workers_API)-Umgebung, auf die eine Richtlinie angewendet wird.

- {{CSP("base-uri")}}
  - : Beschränkt die URLs, die in einem Dokument als {{HTMLElement("base")}}-Element verwendet werden können.
- {{CSP("sandbox")}}
  - : Ermöglicht eine Sandbox für die angeforderte Ressource ähnlich dem {{HTMLElement("iframe")}} [`sandbox`](/de/docs/Web/HTML/Element/iframe#sandbox) Attribut.

### Navigations-Richtlinien

Navigations-Richtlinien steuern, wohin ein Benutzer navigieren oder ein Formular senden kann, zum Beispiel.

- {{CSP("form-action")}}
  - : Beschränkt die URLs, die als Ziel von Formularübertragungen aus einem gegebenen Kontext verwendet werden können.
- {{CSP("frame-ancestors")}}
  - : Gibt gültige Elternseiten an, die eine Seite mithilfe von {{HTMLElement("frame")}}, {{HTMLElement("iframe")}}, {{HTMLElement("object")}} oder {{HTMLElement("embed")}} einbetten dürfen.

### Reporting-Richtlinien

Reporting-Richtlinien steuern die Ziel-URL für CSP-Verstöße-Berichte in `Content-Security-Policy` und {{HTTPHeader("Content-Security-Policy-Report-Only")}}.

- {{CSP("report-to")}}

  - : Stellt dem Browser ein Token zur Verfügung, das den Reporting-Endpunkt oder eine Gruppe von Endpunkten identifiziert, an die Informationen über CSP-Verletzungen gesendet werden sollen.
    Die Endpunkte, die das Token repräsentiert, werden durch andere HTTP-Header bereitgestellt, wie zum Beispiel {{HTTPHeader("Reporting-Endpoints")}} und {{HTTPHeader("Report-To")}} {{deprecated_inline}}.

    > [!WARNING]
    > Diese Richtlinie soll [`report-uri`](#report-uri) ersetzen; in Browsern, die `report-to` unterstützen, wird die `report-uri`-Richtlinie ignoriert.
    > Bis `report-to` jedoch allgemein unterstützt wird, sollten Sie beide Header wie gezeigt angeben (wobei `endpoint_name` der Name eines separat bereitgestellten Endpunkts ist):
    >
    > ```http
    > Content-Security-Policy: …; report-uri https://endpoint.example.com; report-to endpoint_name
    > ```

### Andere Richtlinien

- {{CSP("require-trusted-types-for")}} {{experimental_inline}}
  - : Erzwingt [Trusted Types](https://w3c.github.io/trusted-types/dist/spec/) an DOM-XSS-Injektionsstellen.
- {{CSP("trusted-types")}} {{experimental_inline}}
  - : Wird verwendet, um eine Positivliste von [Trusted Types](https://w3c.github.io/trusted-types/dist/spec/) Richtlinien anzugeben. Trusted Types ermöglicht es Anwendungen, DOM-XSS-Injektionsstellen so zu sperren, dass sie nur nicht fälschbare, typisierte Werte anstelle von Strings akzeptieren.
- {{CSP("upgrade-insecure-requests")}}
  - : Instruierte Benutzeragenten, alle unsicheren URLs einer Website (die über HTTP bereitgestellt werden) so zu behandeln, als wären sie durch sichere URLs ersetzt worden (die über HTTPS bereitgestellt werden). Diese Richtlinie richtet sich an Websites mit einer großen Anzahl unsicherer veralteter URLs, die umformuliert werden müssen.

### Veraltete Richtlinien

- {{CSP("block-all-mixed-content")}} {{deprecated_inline}}

  - : Verhindert das Laden aller Assets, die HTTP verwenden, während die Seite über HTTPS geladen wird.

- {{CSP("report-uri")}} {{deprecated_inline}}
  - : Stellt dem Browser eine URL zur Verfügung, wohin Berichte über CSP-Verstöße gesendet werden sollen.
    Dies wurde durch die [`report-to`](#report-to)-Richtlinie ersetzt.

## Werte

Ein Überblick über die erlaubten Werte ist unten aufgeführt.
Für eine detaillierte Referenz siehe [CSP Source Values](/de/docs/Web/HTTP/Headers/Content-Security-Policy/Sources#sources) und die Dokumentation zu einzelnen Richtlinien.

### Schlüsselwortwerte

- `'none'`
  - : Erlaubt das Laden von keinerlei Ressourcen.
- `'self'`
  - : Erlaubt nur Ressourcen vom aktuellen Ursprung.
- `'strict-dynamic'`
  - : Das Vertrauen, das einem Skript auf der Seite aufgrund einer begleitenden Nonce oder eines Hashes gewährt wird, wird auf die Skripte ausgeweitet, die es lädt.
- `'report-sample'`
  - : Erfordert, dass ein Beispiel des verletzenden Codes in den Verstoßbericht aufgenommen wird.
- `'inline-speculation-rules'`
  - : Erlaubt die Einbeziehung von [Spekulationsregeln](/de/docs/Web/API/Speculation_Rules_API) in Skripte (siehe auch [`<script type="speculationrules">`](/de/docs/Web/HTML/Element/script/type/speculationrules)).

### Unsichere Schlüsselwortwerte

- `'unsafe-inline'`
  - : Erlaubt die Verwendung von Inline-Ressourcen.
- `'unsafe-eval'`
  - : Erlaubt die Verwendung von dynamischer Codeauswertung wie {{jsxref("Global_Objects/eval", "eval")}}, [`setTimeout()`](/de/docs/Web/API/SetTimeout) und `window.execScript` {{non-standard_inline}}.
- `'unsafe-hashes'`
  - : Ermöglicht die Aktivierung spezifischer Inline-Ereignis-Handler.
- `'wasm-unsafe-eval'`
  - : Ermöglicht das Laden und Ausführen von WebAssembly-Modulen ohne die Notwendigkeit, auch unsichere JavaScript-Ausführung über `'unsafe-eval'` zu erlauben.
    Die einfachen Anführungszeichen sind erforderlich.

### Host-Werte

- Host

  - Erlaubt das Laden von Ressourcen nur von einem spezifischen Host, mit optionalem Schema, Port und Pfad. Zum Beispiel `example.com`, `*.example.com`, `https://*.example.com:12/path/to/file.js`.
  - Pfadteile in der CSP, die mit `/` enden, stimmen mit jedem Pfad überein, der ein Präfix davon ist. Zum Beispiel wird `example.com/api/` URLs wie `example.com/api/users/new` entsprechen.
  - Andere Pfadteile in der CSP werden genau übereinstimmend verglichen; zum Beispiel wird `example.com/file.js` `http://example.com/file.js` und `https://example.com/file.js` entsprechen, aber nicht `https://example.com/file.js/file2.js`.

- Schema
  - Erlaubt das Laden von Ressourcen nur über ein spezifisches Schema, sollte immer mit `:` enden. Zum Beispiel `https:`, `http:`, `data:` usw.

### Andere Werte

- `'nonce-*'`
  - : Eine kryptographische Nonce (einmalige Verwendung), um Skripte zu erlauben. Der Server muss einen eindeutigen Nonce-Wert generieren, jedes Mal, wenn er eine Richtlinie überträgt. Es ist entscheidend, eine Nonce bereitzustellen, die nicht erraten werden kann, da das Umgehen einer Ressourcenrichtlinie sonst trivial wäre. Dies wird in Verbindung mit dem [Skript-Tag-Nonce-Attribut](/de/docs/Web/HTML/Element/script#nonce) verwendet. Zum Beispiel `nonce-DhcnhD3khTMePgXwdayK9BsMqXjhguVV`.
- `'sha*-*'`
  - : sha256, sha384 oder sha512. Gefolgt von einem Bindestrich und dann dem sha\*-Wert. Zum Beispiel `sha256-jzgBGA4UWFFmpOBq0JpdsySukE1FrEN5bUpoK8Z29fY=`.

## CSP in Workern

[Worker](/de/docs/Web/API/Worker) werden im Allgemeinen _nicht_ durch die Content Security Policy des Dokuments (oder des übergeordneten Workers), die sie erstellt haben, gesteuert. Um eine Content Security Policy für den Worker festzulegen, setzen Sie einen `Content-Security-Policy`-Antwort-Header für die Anfrage, die das Worker-Skript selbst angefordert hat.

Die Ausnahme dazu ist, wenn der Ursprung des Worker-Skripts ein global eindeutiger Bezeichner ist (zum Beispiel, wenn seine URL ein Schema von Daten oder Blob hat). In diesem Fall erbt der Worker die Content Security Policy des Dokuments oder Workers, der ihn erstellt hat.

## Mehrfache Content Security Policies

Der CSP-Mechanismus ermöglicht es, mehrere Richtlinien für eine Ressource zu spezifizieren, einschließlich über den `Content-Security-Policy`-Header, den {{HTTPHeader("Content-Security-Policy-Report-Only")}}-Header und ein {{HTMLElement("meta")}}-Element.

Sie können den `Content-Security-Policy`-Header mehrmals verwenden, wie im folgenden Beispiel. Achten Sie besonders auf die {{CSP("connect-src")}}-Richtlinie hier. Selbst wenn die zweite Richtlinie die Verbindung erlauben würde, enthält die erste Richtlinie `connect-src 'none'`. Das Hinzufügen weiterer Richtlinien kann _nur weiter einschränken_ die Fähigkeiten der geschützten Ressource, was bedeutet, dass keine Verbindung erlaubt ist und die strengste Richtlinie, `connect-src 'none'`, durchgesetzt wird.

```http
Content-Security-Policy: default-src 'self' http://example.com;
                          connect-src 'none';
Content-Security-Policy: connect-src http://example.com/;
                          script-src http://example.com/
```

## Beispiele

### Unsicheren Inline-Code deaktivieren und nur HTTPS-Ressourcen erlauben

Dieser HTTP-Header setzt die Standardrichtlinie, um das Laden von Ressourcen (Bilder, Schriftarten, Skripte usw.) nur über HTTPS zu ermöglichen.
Da die Richtlinien `unsafe-inline` und `unsafe-eval` nicht gesetzt sind, werden Inline-Skripte blockiert.

```http
Content-Security-Policy: default-src https:
```

Die gleichen Einschränkungen können mit dem HTML-{{htmlelement("meta")}}-Element angewendet werden.

```html
<meta http-equiv="Content-Security-Policy" content="default-src https:" />
```

### Inline-Code und HTTPS-Ressourcen erlauben, aber Plugins deaktivieren

Diese Richtlinie könnte auf einer bestehenden Seite verwendet werden, die zu viel Inline-Code verwendet, um sie zu beheben, um sicherzustellen, dass Ressourcen nur über HTTPS geladen werden und Plugins deaktiviert werden:

```http
Content-Security-Policy: default-src https: 'unsafe-eval' 'unsafe-inline'; object-src 'none'
```

### Verstöße melden, aber nicht durchsetzen, wenn getestet wird

Dieses Beispiel setzt die gleichen Einschränkungen wie das vorherige Beispiel, verwendet jedoch den {{httpheader("Content-Security-Policy-Report-Only")}}-Header und die {{CSP("report-to")}}-Richtlinie.
Dieser Ansatz wird während des Tests verwendet, um Verstöße zu melden, aber den Code nicht zu blockieren.

Endpunkte (URLs), an die Berichte gesendet werden, werden mit dem {{HTTPHeader("Reporting-Endpoints")}} HTTP-Antwort-Header definiert.

```http
Reporting-Endpoints: csp-endpoint="https://example.com/csp-reports"
```

Ein bestimmter Endpunkt wird dann als Berichtsziel in der CSP-Richtlinie mit der {{CSP("report-to")}}-Richtlinie ausgewählt.

```http
Content-Security-Policy-Report-Only: default-src https:; report-uri /csp-violation-report-url/; report-to csp-endpoint
```

Beachten Sie, dass die {{CSP("report-uri")}} {{deprecated_inline}}-Richtlinie oben ebenfalls angegeben ist, da `report-to` noch nicht umfassend von Browsern unterstützt wird.

Siehe [Content Security Policy (CSP) Implementierung](/de/docs/Web/Security/Practical_implementation_guides/CSP) für weitere Beispiele.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTTPHeader("Content-Security-Policy-Report-Only")}}
- [Erfahren Sie mehr über: Content Security Policy](/de/docs/Web/HTTP/CSP)
- [Inhaltsicherheit in WebExtensions](/de/docs/Mozilla/Add-ons/WebExtensions/Content_Security_Policy)
- [Übernahme einer strikten Richtlinie](https://csp.withgoogle.com/docs/strict-csp.html)
- [CSP Evaluator](https://github.com/google/csp-evaluator) - Bewerten Sie Ihre Content Security Policy
