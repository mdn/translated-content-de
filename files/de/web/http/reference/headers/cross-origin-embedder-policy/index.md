---
title: Cross-Origin-Embedder-Policy (COEP) header
short-title: Cross-Origin-Embedder-Policy
slug: Web/HTTP/Reference/Headers/Cross-Origin-Embedder-Policy
l10n:
  sourceCommit: 6030ef1aadf967b80e2c79c3d3463cccc8ea0c95
---

Der HTTP **`Cross-Origin-Embedder-Policy`** (COEP) {{Glossary("response_header", "Antwort-Header")}} konfiguriert die Richtlinie des aktuellen Dokuments für das Laden und Einbetten von Cross-Origin-Ressourcen, die im `no-cors` Modus angefordert werden.

Beachten Sie, dass die Einbettungsrichtlinie für Anfragen im `cors` Modus durch [CORS](/de/docs/Web/HTTP/Guides/CORS) kontrolliert wird.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Response_header", "Antwort-Header")}}</td>
    </tr>
  </tbody>
</table>

## Syntax

```http
Cross-Origin-Embedder-Policy: <token>; <parameter>
```

### Direktiven

Der Header sollte nur mit einem einzigen Token und einem optionalen `report-to` Endpunkt gesetzt werden.
Das Setzen des Headers mehrmals oder mit mehreren Tokens entspricht dem Setzen von `unsafe-none`.

Der `<token>`-Wert kann einer der folgenden sein:

- `unsafe-none`
  - : Erlaubt dem Dokument das Laden von Cross-Origin-Ressourcen, die im `no-cors` Modus angefordert werden, **ohne** ausdrückliche Erlaubnis durch den {{HTTPHeader("Cross-Origin-Resource-Policy")}}-Header zu geben.
    Dies ist der Standardwert.

- `require-corp`
  - : Ein Dokument kann nur Ressourcen laden, die im `no-cors` Modus von demselben Ursprung angefordert werden, oder Ressourcen, die den {{HTTPHeader("Cross-Origin-Resource-Policy")}}-Header explizit auf einen Wert gesetzt haben, der das Einbetten erlaubt.

    Das Laden von Cross-Origin-Ressourcen wird durch COEP blockiert, es sei denn:
    - Die Ressource wird im `no-cors` Modus angefordert und die Antwort enthält einen {{HTTPHeader("Cross-Origin-Resource-Policy")}}-Header, der das Laden in den Dokumentenursprung erlaubt.
    - Die Ressource wird im `cors` Modus angefordert, beispielsweise in HTML mit dem [`crossorigin`](/de/docs/Web/HTML/Reference/Attributes/crossorigin)-Attribut oder in JavaScript durch das Anfordern mit [`{mode="cors"}`](/de/docs/Web/API/RequestInit#cors).
      Beachten Sie, dass Anfragen im `cors` Modus von COEP nicht blockiert oder COEP-Verletzungen auslösen, jedoch immer noch von CORS erlaubt sein müssen.

- `credentialless`
  - : Ein Dokument kann Cross-Origin-Ressourcen laden, die im [`no-cors` Modus](/de/docs/Web/API/Request/mode) **ohne** eine ausdrückliche Erlaubnis über den {{HTTPHeader("Cross-Origin-Resource-Policy")}}-Header angefordert werden.
    In diesem Fall werden Anfragen ohne Anmeldedaten gesendet: Cookies werden in der Anfrage weggelassen und in der Antwort ignoriert.

    Das Cross-Origin-Ladeverhalten für andere [Anfragemodi](/de/docs/Web/API/Request/mode#cors) ist das gleiche wie für [`require-corp`](#require-corp).
    Zum Beispiel muss eine im `cors` Modus angeforderte Cross-Origin-Ressource CORS unterstützen (und durch CORS erlaubt sein).

Der `<parameter>` ist optional und kann einer der folgenden sein:

- `report-to <endpoint_name>` {{optional_inline}}
  - : Der `<endpoint_name>` ist der Name des Endpunkts, an den Richtlinienverletzungen gesendet werden.
    Die Zuordnung zwischen dem Namen und einem bestimmten Endpunkt ist separat im {{httpheader("Reporting-Endpoints")}} HTTP-Header definiert.

## Beschreibung

Die Richtlinie für die Einbettbarkeit einer bestimmten Ressource über verschiedene Sites hinweg kann für diese Ressource mithilfe des {{HTTPHeader("Cross-Origin-Resource-Policy")}} (CORP)-Headers in einer Antwort auf einen `no-cors`-Abruf oder mithilfe von [CORS](/de/docs/Web/HTTP/Guides/CORS) festgelegt werden.
Wenn keine dieser Richtlinien gesetzt ist, können Ressourcen standardmäßig geladen oder in ein Dokument eingebettet werden, als hätten sie einen CORP-Wert von `cross-origin` (was bedeutet, dass sie _können_ Cross-Origin geladen werden).

Der **`Cross-Origin-Embedder-Policy`** erlaubt es Ihnen, zu verlangen, dass CORP-Header in Antworten auf `no-cors`-Anfragen gesetzt werden, um Cross-Site-Ressourcen in das aktuelle Dokument zu laden.
Sie können die Richtlinie auch so einstellen, dass das Standardverhalten beibehalten wird, oder die Ressourcen erlaubt werden, geladen zu werden, jedoch Anmeldedaten, die möglicherweise gesendet werden, entfernt werden.
Die Richtlinie gilt für geladene Ressourcen sowie Ressourcen in {{htmlelement("iframe")}}s und verschachtelten Frames.

> [!NOTE]
> Die `Cross-Origin-Embedder-Policy` überschreibt oder beeinflusst nicht das Einbettungsverhalten für eine Ressource, für die CORP oder CORS gesetzt wurde.
> Wenn CORP einschränkt, dass eine Ressource nur `same-origin` eingebettet wird, wird sie nicht Cross-Origin in eine Ressource geladen — unabhängig vom COEP-Wert.

### Cross-Origin-Isolation

COEP und CORS zusammen sorgen dafür, dass der Browserprozess nur Ressourcen enthält, die zugestimmt haben, geteilt zu werden, oder die keine privaten Daten enthalten.
Dies ist eine der Bedingungen, die erforderlich sind, damit ein Dokument [Cross-Origin isoliert](/de/docs/Web/API/Window/crossOriginIsolated) ist.

### Verletzungsberichte

Verletzungen der Richtlinie können mithilfe der [Reporting API](/de/docs/Web/API/Reporting_API) gemeldet werden.
Berichte können auf der Seite beobachtet werden, für die die Richtlinie festgelegt wird, indem ein [`ReportingObserver`](/de/docs/Web/API/ReportingObserver) verwendet wird, und zu Server-Endpunkten gesendet werden, die in einem {{HTTPHeader("Reporting-Endpoints")}} HTTP-Antwort-Header definiert sind und mit dem [`report-to`](#report-to_endpoint_name)-Parameter ausgewählt werden.
Weitere Informationen finden Sie unter [`COEPViolationReport`](/de/docs/Web/API/COEPViolationReport).

## Beispiele

### Blockieren und Berichten, wenn Ressourcen keine CORP-Header setzen

Dieses Beispiel zeigt ein Dokument, das das Laden von Ressourcen blockiert, die im [no-cors](/de/docs/Web/API/Request/mode#no-cors) Modus angefordert werden und keinen entsprechenden CORP-Header setzen.

Das Dokument ist eine HTML-Datei, die auf dem Ursprung `https://example.com` gehostet ist, und enthält in ihrem Body ein {{htmlelement("img")}}-Element, das als Quelle die (Cross-Origin) Ressource `some-image.png` setzt.
Da das Element nicht das [`cross-origin` Attribut](/de/docs/Web/HTML/Reference/Attributes/crossorigin) hat, wird es im `no-cors` Modus angefordert:

```html
<img src="https://another-example.com/some-image.png" />
```

Der Antwort-Header für das Dokument setzt die `Cross-Origin-Embedder-Policy` und {{httpheader("Reporting-Endpoints")}}-Header wie unten gezeigt.
Da die `require-corp`-Direktive gesetzt ist, müssen alle im `no-cors` Modus angeforderten Cross-Origin-Ressourcen mit dem CORP-Header bereitgestellt werden.
Der `report-to`-Parameter spezifiziert den Namen `"coep-endpoint"` als den Namen des Endpunkts, an den Berichte gesendet werden sollen, und `Reporting-Endpoints` legt fest, wie dieser Name einer bestimmten URL zugeordnet wird.

```http
Reporting-Endpoints: coep-endpoint="https://some-example.com/coep"
Cross-Origin-Embedder-Policy: require-corp; report-to="coep-endpoint"
```

Damit `some-image.png` ohne Auslösen einer Verletzung geladen wird, müsste {{HTTPHeader("Cross-Origin-Resource-Policy")}} auf `cross-origin` gesetzt werden.
Wenn wir den Header weglassen oder ihn nicht als `cross-origin` einschließen, tritt eine Verletzung auf.

Der im Bericht gesendete Bericht im POST-Anfrage wird ähnlich dem unten gezeigten JSON-Objekt sein:

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

Der `type` des Berichts ist `coep`, und die `url` ist das Dokument, in dem die Verletzung auftrat.
Der `body` des Berichts liefert die URL der blockierten Ressource (`blockedURL`), ihr Ziel (`image`), den Typ der Verletzung (`corp`) und dass der Bericht für eine durchgesetzte Verletzung (`disposition`) war.

### Funktionen, die von Cross-Origin-Isolation abhängen

Bestimmte Funktionen, wie der Zugriff auf {{jsxref("SharedArrayBuffer")}} Objekte oder die Verwendung von [`Performance.now()`](/de/docs/Web/API/Performance/now) mit ungedrosselten Timern, sind nur verfügbar, wenn Ihr Dokument [Cross-Origin isoliert](/de/docs/Web/API/Window/crossOriginIsolated) ist.

Um diese Funktionen in einem Dokument zu verwenden, müssen Sie den COEP-Header mit einem Wert von `require-corp` oder `credentialless` setzen und den {{HTTPHeader("Cross-Origin-Opener-Policy")}}-Header auf `same-origin` setzen.
Zusätzlich darf die Funktion nicht durch {{HTTPHeader("Permissions-Policy/cross-origin-isolated","Permissions-Policy: cross-origin-isolated")}} blockiert werden.

```http
Cross-Origin-Opener-Policy: same-origin
Cross-Origin-Embedder-Policy: require-corp
```

Sie können die [`Window.crossOriginIsolated`](/de/docs/Web/API/Window/crossOriginIsolated) und [`WorkerGlobalScope.crossOriginIsolated`](/de/docs/Web/API/WorkerGlobalScope/crossOriginIsolated) Eigenschaften verwenden, um zu überprüfen, ob die Funktionen in Fenster- und Worker-Kontexten eingeschränkt sind:

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

### Vermeidung der COEP-Blockade mit CORS

Wenn Sie COEP mit `require-corp` aktivieren und eine Cross-Origin-Ressource einbetten möchten, die [CORS](/de/docs/Web/HTTP/Guides/CORS) unterstützt, müssen Sie explizit angeben, dass sie im `cors` Modus angefordert wird.

Zum Beispiel, um ein Bild, das in HTML von einer Drittanbieter-Site, die CORS unterstützt, deklariert ist, abzurufen, können Sie das [`crossorigin`](/de/docs/Web/HTML/Reference/Attributes/crossorigin) Attribut verwenden, damit es im `cors` Modus angefordert wird:

```html
<img src="https://thirdparty.com/img.png" crossorigin />
```

Sie können auf ähnliche Weise das [`HTMLScriptElement.crossOrigin`](/de/docs/Web/API/HTMLScriptElement/crossOrigin) Attribut oder das Abrufen mit `{ mode: 'cors' }` verwenden, um eine Datei im CORS Modus mit JavaScript anzufordern.

Wenn CORS für einige Bilder nicht unterstützt wird, kann ein COEP-Wert von `credentialless` als Alternative verwendet werden, um das Bild ohne eine explizite Zustimmung des Cross-Origin-Servers zu laden, auf Kosten eines Anforderens ohne Cookies.

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
- [Cross Origin Opener Policy](https://web.dev/articles/why-coop-coep#coep) in _Why you need "cross-origin isolated" for powerful features_ auf web.dev (2020)
- [COOP und COEP erklärt: Artur Janc, Charlie Reis, Anne van Kesteren](https://docs.google.com/document/d/1zDlfvfTJ_9e8Jdc8ehuV4zMEu9ySMCiTGMS9y0GU92k/edit?tab=t.0) (2020)
