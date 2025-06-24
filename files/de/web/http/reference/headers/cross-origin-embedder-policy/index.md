---
title: Cross-Origin-Embedder-Policy (COEP) header
short-title: Cross-Origin-Embedder-Policy
slug: Web/HTTP/Reference/Headers/Cross-Origin-Embedder-Policy
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{HTTPSidebar}}

Der HTTP **`Cross-Origin-Embedder-Policy`** (COEP) {{Glossary("response_header", "Antwortheader")}} konfiguriert die Richtlinie des aktuellen Dokuments für das Laden und Einbetten von Ressourcen aus verschiedenen Quellen.

Die Richtlinie, ob eine bestimmte Ressource plattformübergreifend eingebettet werden kann, kann für diese Ressource mithilfe des {{HTTPHeader("Cross-Origin-Resource-Policy")}} (CORP) Headers für einen `no-cors` Abruf oder über [CORS](/de/docs/Web/HTTP/Guides/CORS) definiert werden. Wenn keine dieser Richtlinien festgelegt ist, können Ressourcen standardmäßig geladen oder in ein Dokument eingebettet werden, als hätten sie einen CORP-Wert von `cross-site`.

Der **`Cross-Origin-Embedder-Policy`** ermöglicht es Ihnen, zu verlangen, dass CORP- oder CORS-Header gesetzt werden, um plattformübergreifende Ressourcen in das aktuelle Dokument zu laden. Sie können die Richtlinie auch so einstellen, dass sie das Standardverhalten beibehält oder es erlaubt, die Ressourcen zu laden, jedoch ohne Anmeldedaten, die andernfalls gesendet würden. Die Richtlinie gilt für geladene Ressourcen und Ressourcen in {{htmlelement("iframe")}}s und verschachtelten Frames.

> [!NOTE]
> Der `Cross-Origin-Embedder-Policy` überschreibt oder beeinflusst nicht das Einbettverhalten für eine Ressource, für die CORP oder CORS festgelegt wurde. Wenn CORP eine Ressource darauf beschränkt, nur `same-origin` eingebettet zu werden, wird sie unabhängig vom COEP-Wert nicht plattformübergreifend in eine Ressource geladen.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header Typ</th>
      <td>{{Glossary("Response_header", "Antwortheader")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_response_header_name", "Verbotener Antwortheader-Name")}}</th>
      <td>Nein</td>
    </tr>
  </tbody>
</table>

## Syntax

```http
Cross-Origin-Embedder-Policy: unsafe-none | require-corp | credentialless
```

### Direktiven

- `unsafe-none`
  - : Erlaubt dem Dokument, plattformübergreifende Ressourcen **ohne** ausdrückliche Erlaubnis durch das CORS-Protokoll oder den {{HTTPHeader("Cross-Origin-Resource-Policy")}} Header zu laden. Dies ist der Standardwert.
- `require-corp`

  - : Ein Dokument kann nur Ressourcen von derselben Quelle laden oder Ressourcen, die ausdrücklich als von einer anderen Quelle her ladbar markiert sind.

    Das Laden plattformübergreifender Ressourcen wird von COEP blockiert, es sei denn:

    - Die Ressource wird im `no-cors` Modus angefordert und die Antwort enthält einen {{HTTPHeader("Cross-Origin-Resource-Policy")}} Header, der das Laden in der Dokumentquelle erlaubt.
    - Die Ressource wird im `cors` Modus angefordert und die Ressource unterstützt und ist durch CORS zugelassen. Dies kann zum Beispiel in HTML mit dem [`crossorigin`](/de/docs/Web/HTML/Reference/Attributes/crossorigin) Attribut erfolgen oder in JavaScript durch eine Anfrage mit [`{mode="cors"}`](/de/docs/Web/API/RequestInit#cors).

- `credentialless`

  - : Ein Dokument kann plattformübergreifende Ressourcen laden, die im [`no-cors` Modus](/de/docs/Web/API/Request/mode) **ohne** ausdrückliche Erlaubnis über den {{HTTPHeader("Cross-Origin-Resource-Policy")}} Header angefordert werden. In diesem Fall werden Anfragen ohne Anmeldedaten gesendet: Cookies werden bei der Anfrage weggelassen und in der Antwort ignoriert.

    Das plattformübergreifende Ladeverhalten für andere [Anfragemodi](/de/docs/Web/API/Request/mode#cors) ist das gleiche wie für [`require-corp`](#require-corp). Zum Beispiel muss eine im `cors` Modus angeforderte plattformübergreifende Ressource CORS unterstützen (und zugelassen sein).

## Beispiele

### Funktionen, die von einer isolierten Cross-Origin-Umgebung abhängen

Bestimmte Funktionen, wie der Zugriff auf {{jsxref("SharedArrayBuffer")}} Objekte oder die Nutzung von [`Performance.now()`](/de/docs/Web/API/Performance/now) mit ungedrosselten Timern, sind nur verfügbar, wenn Ihr Dokument [plattformsübergreifend isoliert](/de/docs/Web/API/Window/crossOriginIsolated) ist.

Um diese Funktionen in einem Dokument nutzen zu können, müssen Sie den COEP-Header mit einem Wert von `require-corp` oder `credentialless` setzen und den {{HTTPHeader("Cross-Origin-Opener-Policy")}} Header auf `same-origin`. Außerdem darf die Funktion nicht durch die Richtlinie {{HTTPHeader("Permissions-Policy/cross-origin-isolated","Permissions-Policy: cross-origin-isolated")}} blockiert werden.

```http
Cross-Origin-Opener-Policy: same-origin
Cross-Origin-Embedder-Policy: require-corp
```

Sie können die Eigenschaften [`Window.crossOriginIsolated`](/de/docs/Web/API/Window/crossOriginIsolated) und [`WorkerGlobalScope.crossOriginIsolated`](/de/docs/Web/API/WorkerGlobalScope/crossOriginIsolated) verwenden, um zu überprüfen, ob die Funktionen im Fenster- und Worker-Kontext eingeschränkt sind:

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

### Vermeidung von COEP-Blockierungen mit CORS

Falls Sie COEP mit `require-corp` aktivieren und eine plattformübergreifende Ressource einbetten möchten, die [CORS](/de/docs/Web/HTTP/Guides/CORS) unterstützt, müssen Sie ausdrücklich angeben, dass die Ressource im `cors` Modus angefordert werden soll.

Um beispielsweise ein in HTML deklariertes Bild von einer Drittanbieter-Website abzurufen, das CORS unterstützt, können Sie das [`crossorigin`](/de/docs/Web/HTML/Reference/Attributes/crossorigin) Attribut verwenden, damit es im `cors` Modus angefordert wird:

```html
<img src="https://thirdparty.com/img.png" crossorigin />
```

Sie können ähnlich das [`HTMLScriptElement.crossOrigin`](/de/docs/Web/API/HTMLScriptElement/crossOrigin) Attribut verwenden oder mit `{ mode: 'cors' }` per JavaScript im CORS-Modus eine Datei anfordern.

Wenn CORS für einige Bilder nicht unterstützt wird, kann ein COEP-Wert von `credentialless` als Alternative verwendet werden, um das Bild ohne ausdrückliche Zustimmung des plattformübergreifenden Servers zu laden, allerdings um den Preis, dass es ohne Cookies angefordert wird.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTTPHeader("Cross-Origin-Opener-Policy")}}
- [`Window.crossOriginIsolated`](/de/docs/Web/API/Window/crossOriginIsolated) und [`WorkerGlobalScope.crossOriginIsolated`](/de/docs/Web/API/WorkerGlobalScope/crossOriginIsolated)
- [Cross Origin Opener Policy](https://web.dev/articles/why-coop-coep#coep) in _Why you need "cross-origin isolated" for powerful features_ auf web.dev (2020)
- [COOP und COEP erklärt: Artur Janc, Charlie Reis, Anne van Kesteren](https://docs.google.com/document/d/1zDlfvfTJ_9e8Jdc8ehuV4zMEu9ySMCiTGMS9y0GU92k/edit?tab=t.0) (2020)
