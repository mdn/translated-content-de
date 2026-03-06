---
title: Cross-Origin-Embedder-Policy (COEP) header
short-title: Cross-Origin-Embedder-Policy
slug: Web/HTTP/Reference/Headers/Cross-Origin-Embedder-Policy
l10n:
  sourceCommit: 2d0aa21573c6ceb33aeadf94ce6cd84588b74123
---

Der HTTP **`Cross-Origin-Embedder-Policy`** (COEP) {{Glossary("response_header", "Response-Header")}} konfiguriert die Richtlinie des aktuellen Dokuments zum Laden und Einbetten von Ressourcen aus verschiedenen Quellen, die im `no-cors`-Modus angefordert werden.

Beachten Sie, dass die Einbettungspolitik für Anfragen, die im `cors`-Modus gestellt werden, durch [CORS](/de/docs/Web/HTTP/Guides/CORS) kontrolliert wird.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Headertyp</th>
      <td>{{Glossary("Response_header", "Response-Header")}}</td>
    </tr>
  </tbody>
</table>

## Syntax

```http
Cross-Origin-Embedder-Policy: <token>; <parameter>
```

### Direktiven

Der Header sollte nur mit einem einzigen Token und einem optionalen `report-to`-Endpunkt gesetzt werden. Das mehrfache Setzen des Headers oder mit mehreren Tokens entspricht dem Setzen von `unsafe-none`.

Der `<token>`-Wert kann einer der folgenden sein:

- `unsafe-none`
  - : Erlaubt dem Dokument das Laden von Ressourcen aus verschiedenen Quellen, die im `no-cors`-Modus angefordert werden, **ohne** explizite Erlaubnis durch den {{HTTPHeader("Cross-Origin-Resource-Policy")}} Header.
    Dies ist der Standardwert.

- `require-corp`
  - : Ein Dokument kann nur Ressourcen laden, die im `no-cors`-Modus von der gleichen Quelle angefordert werden, oder Ressourcen, die den {{HTTPHeader("Cross-Origin-Resource-Policy")}} Header explizit auf einen Wert gesetzt haben, der es erlaubt, eingebettet zu werden.

    Das Laden von Ressourcen aus verschiedenen Quellen wird durch COEP blockiert, es sei denn:
    - Die Ressource wird im `no-cors`-Modus angefordert und die Antwort enthält einen {{HTTPHeader("Cross-Origin-Resource-Policy")}} Header, der das Laden in die Dokumentquelle erlaubt.
    - Die Ressource wird im `cors`-Modus angefordert; zum Beispiel in HTML mit dem [`crossorigin`](/de/docs/Web/HTML/Reference/Attributes/crossorigin)-Attribut oder in JavaScript durch eine Anfrage mit [`{mode="cors"}`](/de/docs/Web/API/RequestInit#cors).
      Beachten Sie, dass Anfragen im `cors`-Modus nicht durch COEP blockiert werden oder COEP-Verletzungen auslösen, aber dennoch durch CORS erlaubt sein müssen.

- `credentialless`
  - : Ein Dokument kann Ressourcen aus verschiedenen Quellen, die im [`no-cors`-Modus](/de/docs/Web/API/Request/mode) angefordert werden, **ohne** explizite Erlaubnis über den {{HTTPHeader("Cross-Origin-Resource-Policy")}} Header laden.
    In diesem Fall werden Anfragen ohne Anmeldeinformationen gesendet: Cookies werden in der Anfrage weggelassen und in der Antwort ignoriert.

    Das Ladeverhalten aus verschiedenen Quellen für andere [Anfragemodi](/de/docs/Web/API/Request/mode#cors) ist dasselbe wie für [`require-corp`](#require-corp).
    Zum Beispiel muss eine im `cors`-Modus angeforderte Ressource CORS unterstützen (und erlaubt sein).

Der `<parameter>` ist optional und kann einer der folgenden sein:

- `report-to <endpoint_name>` {{optional_inline}}
  - : Der `<endpoint_name>` ist der Name des Endpunkts, an den Richtlinienverstöße gesendet werden.
    Die Zuordnung zwischen dem Namen und einem bestimmten Endpunkt wird separat im {{httpheader("Reporting-Endpoints")}} HTTP-Header definiert.

## Beschreibung

Die Richtlinie, ob eine bestimmte Ressource über Kreuzseiten eingebettet werden kann, kann für diese Ressource mit dem {{HTTPHeader("Cross-Origin-Resource-Policy")}} (CORP)-Header in einer Antwort auf eine `no-cors`-Anforderung oder mit [CORS](/de/docs/Web/HTTP/Guides/CORS) definiert werden.
Wenn keine dieser Richtlinien festgelegt ist, können Ressourcen standardmäßig geladen oder in ein Dokument eingebettet werden, als ob sie einen CORP-Wert von `cross-origin` hätten (was bedeutet, dass sie _über Kreuz_ geladen werden können).

Der **`Cross-Origin-Embedder-Policy`** erlaubt es Ihnen, zu verlangen, dass CORP-Header in Antworten auf `no-cors`-Anfragen gesetzt werden, um Ressourcen aus verschiedenen Quellen in das aktuelle Dokument zu laden.
Sie können die Richtlinie auch so einstellen, dass das Standardverhalten beibehalten wird, oder dass die Ressourcen geladen werden, jedoch alle Anmeldeinformationen entfernt werden, die sonst gesendet werden könnten.
Die Richtlinie gilt für geladene Ressourcen und Ressourcen in {{htmlelement("iframe")}}s und verschachtelten Frames.

> [!NOTE]
> Der `Cross-Origin-Embedder-Policy` überschreibt oder beeinflusst nicht das Einbettungsverhalten für eine Ressource, für die CORP oder CORS festgelegt wurde.
> Wenn CORP eine Ressource darauf beschränkt, nur `same-origin` eingebettet zu werden, wird sie nicht über Kreuz in eine Ressource geladen — unabhängig vom COEP-Wert.

### Isolation über Kreuz

COEP und CORS stellen sicher, dass der Browserprozess nur Ressourcen enthält, die zugestimmt haben, geteilt zu werden, oder die keine privaten Daten enthalten.
Dies ist eine der Voraussetzungen dafür, dass ein Dokument [über Kreuz isoliert](/de/docs/Web/API/Window/crossOriginIsolated) ist.

### Verstöße berichten

Verstöße gegen die Richtlinie können mit der [Reporting API](/de/docs/Web/API/Reporting_API) gemeldet werden.
Berichte können auf der Seite beobachtet werden, für die die Richtlinie eingestellt wird, indem ein [`ReportingObserver`](/de/docs/Web/API/ReportingObserver) verwendet wird und an Serverendpunkte gesendet werden, die in einem {{HTTPHeader("Reporting-Endpoints")}} HTTP-Response-Header definiert und über den [`report-to`](#report-to_endpoint_name) Parameter ausgewählt wurden.
Weitere Informationen finden Sie unter [`COEPViolationReport`](/de/docs/Web/API/COEPViolationReport).

## Beispiele

### Blockieren und Berichten, wenn Ressourcen keine CORP-Header setzen

Dieses Beispiel zeigt ein Dokument, das das Laden von Ressourcen blockiert, die im [no-cors](/de/docs/Web/API/Request/mode#no-cors) Modus angefordert werden und keinen geeigneten CORP-Header setzen.

Das Dokument ist eine HTML-Datei, die auf der Quelle `https://example.com` gehostet wird, und enthält in ihrem Body ein {{htmlelement("img")}}-Element, das als Quelle die (über Kreuz liegende) Ressource `some-image.png` setzt.
Da das Element das [`cross-origin`-Attribut](/de/docs/Web/HTML/Reference/Attributes/crossorigin) nicht hat, wird es im `no-cors` Modus angefordert:

```html
<img src="https://another-example.com/some-image.png" />
```

Der Response-Header für das Dokument setzt die `Cross-Origin-Embedder-Policy` und {{httpheader("Reporting-Endpoints")}} Header wie unten gezeigt.
Da die `require-corp` Direktive gesetzt ist, müssen alle im `no-cors` Modus angeforderten Ressourcen mit dem CORP-Header bereitgestellt werden.
Der `report-to` Parameter gibt den Namen `"coep-endpoint"` als den Namen des Endpunkts an, an den Berichte gesendet werden sollen, und `Reporting-Endpoints` spezifiziert, wie dieser Name einer bestimmten URL zugeordnet wird.

```http
Reporting-Endpoints: coep-endpoint="https://some-example.com/coep"
Cross-Origin-Embedder-Policy: require-corp; report-to="coep-endpoint"
```

Damit `some-image.png` geladen werden kann, ohne eine Verletzung auszulösen, müsste es {{HTTPHeader("Cross-Origin-Resource-Policy")}} auf `cross-origin` setzen.
Wenn wir diesen Header weglassen oder ihn nicht als `cross-origin` einfügen, wird eine Verletzung auftreten.

Der Bericht, der in der Bericht-POST-Anfrage gesendet wird, wird ähnlich wie das unten gezeigte JSON-Objekt sein:

```json
[
  {
    "age": 717139,
    "body": {
      "blockedURL": "https://another-example.com/some-image.png",
      "destination": "image",
      "disposition": "enforce",
      "type": "corp"
    },
    "type": "coep",
    "url": "https://example.com",
    "user_agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/143.0.0.0 Safari/537.36"
  }
]
```

Der `type` des Berichts ist `coep`, und die `url` ist das Dokument, in dem die Verletzung aufgetreten ist.
Der `body` des Berichts liefert die URL der blockierten Ressource (`blockedURL`), ihr Ziel (`image`), den Typ der Verletzung (`corp`) und dass der Bericht für eine erzwungene Verletzung (`disposition`) war.

### Funktionen, die von Isolation über Kreuz abhängen

Bestimmte Funktionen, wie der Zugriff auf {{jsxref("SharedArrayBuffer")}} Objekte oder die Verwendung von [`Performance.now()`](/de/docs/Web/API/Performance/now) mit ungebremsten Timern, sind nur verfügbar, wenn Ihr Dokument [über Kreuz isoliert](/de/docs/Web/API/Window/crossOriginIsolated) ist.

Um diese Funktionen in einem Dokument zu verwenden, müssen Sie den COEP-Header mit einem Wert von `require-corp` oder `credentialless` setzen und den {{HTTPHeader("Cross-Origin-Opener-Policy")}} Header auf `same-origin`.
Darüber hinaus darf die Funktion nicht durch {{HTTPHeader("Permissions-Policy/cross-origin-isolated","Permissions-Policy: cross-origin-isolated")}} blockiert werden.

```http
Cross-Origin-Opener-Policy: same-origin
Cross-Origin-Embedder-Policy: require-corp
```

Sie können die [`Window.crossOriginIsolated`](/de/docs/Web/API/Window/crossOriginIsolated) und [`WorkerGlobalScope.crossOriginIsolated`](/de/docs/Web/API/WorkerGlobalScope/crossOriginIsolated) Eigenschaften verwenden, um zu überprüfen, ob die Funktionen in Fenster- und Arbeiterkontexten eingeschränkt sind:

```js
const myWorker = new Worker("worker.js");

if (crossOriginIsolated) {
  const buffer = new SharedArrayBuffer(16);
  myWorker.postMessage(buffer);
} else {
  const buffer = new ArrayBuffer(16);
  myWorker.postMessage(buffer);
}
```

### Vermeidung von COEP-Blockierung mit CORS

Wenn Sie COEP mit `require-corp` aktivieren und eine Ressource aus einer anderen Quelle einbetten möchten, die [CORS](/de/docs/Web/HTTP/Guides/CORS) unterstützt, müssen Sie explizit angeben, dass sie im `cors`-Modus angefordert wird.

Um beispielsweise ein Bild zu holen, das in HTML von einer Drittanbieter-Seite deklariert ist, die CORS unterstützt, können Sie das [`crossorigin`](/de/docs/Web/HTML/Reference/Attributes/crossorigin)-Attribut verwenden, damit es im `cors`-Modus angefordert wird:

```html
<img src="https://thirdparty.com/img.png" crossorigin />
```

Sie können ebenso das [`HTMLScriptElement.crossOrigin`](/de/docs/Web/API/HTMLScriptElement/crossOrigin)-Attribut verwenden oder mit `{ mode: 'cors' }` per JavaScript eine Datei im CORS-Modus anfordern.

Wenn CORS für einige Bilder nicht unterstützt wird, kann ein COEP-Wert von `credentialless` als Alternative verwendet werden, um das Bild ohne explizite Zustimmung vom über Kreuz liegenden Server zu laden, auf Kosten der Anforderung ohne Cookies.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTTPHeader("Cross-Origin-Embedder-Policy-Report-Only")}}
- {{HTTPHeader("Cross-Origin-Opener-Policy")}}
- [`Window.crossOriginIsolated`](/de/docs/Web/API/Window/crossOriginIsolated) und [`WorkerGlobalScope.crossOriginIsolated`](/de/docs/Web/API/WorkerGlobalScope/crossOriginIsolated)
- [`ReportingObserver`](/de/docs/Web/API/ReportingObserver)
- [`COEPViolationReport`](/de/docs/Web/API/COEPViolationReport)
- [Reporting API](/de/docs/Web/API/Reporting_API)
- [Cross Origin Opener Policy](https://web.dev/articles/why-coop-coep#coep) in _Warum Sie "cross-origin isolated" für leistungsstarke Funktionen benötigen_ auf web.dev (2020)
- [COOP und COEP erklärt: Artur Janc, Charlie Reis, Anne van Kesteren](https://docs.google.com/document/d/1zDlfvfTJ_9e8Jdc8ehuV4zMEu9ySMCiTGMS9y0GU92k/edit?tab=t.0) (2020)
