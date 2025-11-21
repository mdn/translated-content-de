---
title: Cross-Origin-Embedder-Policy (COEP) header
short-title: Cross-Origin-Embedder-Policy
slug: Web/HTTP/Reference/Headers/Cross-Origin-Embedder-Policy
l10n:
  sourceCommit: 7f6778934020a9b5b82b4dd8ca79a99bc9950c2a
---

Der HTTP-Header **`Cross-Origin-Embedder-Policy`** (COEP) {{Glossary("response_header", "Antwort-Header")}} konfiguriert die Richtlinie des aktuellen Dokuments zum Laden und Einbetten von Cross-Origin-Ressourcen.

Die Richtlinie, ob eine bestimmte Ressource siteübergreifend eingebettet werden kann, kann für diese Ressource durch den {{HTTPHeader("Cross-Origin-Resource-Policy")}} (CORP) Header für einen `no-cors`-Abruf oder durch [CORS](/de/docs/Web/HTTP/Guides/CORS) definiert werden.
Wenn keine dieser Richtlinien festgelegt ist, können Ressourcen standardmäßig in ein Dokument geladen oder eingebettet werden, als ob sie einen CORP-Wert von `cross-origin` hätten.

Der **`Cross-Origin-Embedder-Policy`** ermöglicht es Ihnen, zu verlangen, dass CORP- oder CORS-Header gesetzt sind, um cross-site Ressourcen in das aktuelle Dokument zu laden. Sie können auch festlegen, dass das Standardverhalten beibehalten wird oder dass die Ressourcen geladen werden dürfen, aber ohne dass Anmeldedaten gesendet werden, die sonst übermittelt würden. Die Richtlinie gilt für geladene Ressourcen sowie für Ressourcen in {{htmlelement("iframe")}}s und verschachtelte Frames.

> [!NOTE]
> Der `Cross-Origin-Embedder-Policy` überschreibt oder beeinflusst nicht das Einbettungsverhalten für eine Ressource, für die CORP oder CORS gesetzt wurde. Wenn CORP eine Ressource darauf beschränkt, nur `same-origin` eingebettet zu werden, wird sie unabhängig vom COEP-Wert nicht siteübergreifend in eine Ressource geladen.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Headertyp</th>
      <td>{{Glossary("Response_header", "Antwort-Header")}}</td>
    </tr>
  </tbody>
</table>

## Syntax

```http
Cross-Origin-Embedder-Policy: unsafe-none | require-corp | credentialless
```

### Direktiven

- `unsafe-none`
  - : Erlaubt es dem Dokument, Cross-Origin-Ressourcen **ohne** ausdrückliche Erlaubnis über das CORS-Protokoll oder den {{HTTPHeader("Cross-Origin-Resource-Policy")}} Header zu laden. Dies ist der Standardwert.
- `require-corp`
  - : Ein Dokument kann nur Ressourcen von demselben Ursprung oder Ressourcen laden, die ausdrücklich als von einem anderen Ursprung ladbar markiert sind.

    Das Laden von Cross-Origin-Ressourcen wird von COEP blockiert, es sei denn:
    - Die Ressource wird im `no-cors`-Modus angefordert und die Antwort enthält einen {{HTTPHeader("Cross-Origin-Resource-Policy")}} Header, der es erlaubt, sie in das Dokument zu laden.
    - Die Ressource wird im `cors`-Modus angefordert und die Ressource wird von CORS unterstützt und ist erlaubt.
      Dies kann zum Beispiel in HTML durch das [`crossorigin`](/de/docs/Web/HTML/Reference/Attributes/crossorigin) Attribut oder in JavaScript durch eine Anfrage mit [`{mode="cors"}`](/de/docs/Web/API/RequestInit#cors) erfolgen.

- `credentialless`
  - : Ein Dokument kann Cross-Origin-Ressourcen laden, die im [`no-cors`-Modus](/de/docs/Web/API/Request/mode) **ohne** ausdrückliche Erlaubnis über den {{HTTPHeader("Cross-Origin-Resource-Policy")}} Header angefordert werden.
    In diesem Fall werden Anfragen ohne Anmeldedaten gesendet: Cookies werden in der Anfrage ausgelassen und in der Antwort ignoriert.

    Das Ladeverhalten für Cross-Origin-Anfragen für andere [Anfragemodi](/de/docs/Web/API/Request/mode#cors) ist dasselbe wie für [`require-corp`](#require-corp).
    Zum Beispiel muss eine im `cors`-Modus angeforderte Cross-Origin-Ressource CORS unterstützen (und erlaubt sein).

## Beispiele

### Funktionen, die von Cross-Origin-Isolation abhängen

Bestimmte Funktionen, wie der Zugriff auf {{jsxref("SharedArrayBuffer")}} Objekte oder die Verwendung von [`Performance.now()`](/de/docs/Web/API/Performance/now) mit ungedrosselten Timern, sind nur verfügbar, wenn Ihr Dokument [siteübergreifend isoliert](/de/docs/Web/API/Window/crossOriginIsolated) ist.

Um diese Funktionen in einem Dokument zu verwenden, müssen Sie den COEP-Header mit einem Wert von `require-corp` oder `credentialless` setzen und den {{HTTPHeader("Cross-Origin-Opener-Policy")}} Header auf `same-origin`.
Zusätzlich darf die Funktion nicht durch {{HTTPHeader("Permissions-Policy/cross-origin-isolated","Permissions-Policy: cross-origin-isolated")}} blockiert werden.

```http
Cross-Origin-Opener-Policy: same-origin
Cross-Origin-Embedder-Policy: require-corp
```

Sie können die Eigenschaften [`Window.crossOriginIsolated`](/de/docs/Web/API/Window/crossOriginIsolated) und [`WorkerGlobalScope.crossOriginIsolated`](/de/docs/Web/API/WorkerGlobalScope/crossOriginIsolated) verwenden, um zu überprüfen, ob die Funktionen in Fenster- und Worker-Kontexten eingeschränkt sind:

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

Wenn Sie COEP mit `require-corp` aktivieren und eine Cross-Origin-Ressource einbetten möchten, die [CORS](/de/docs/Web/HTTP/Guides/CORS) unterstützt, müssen Sie ausdrücklich angeben, dass die Ressource im `cors`-Modus angefordert wird.

Zum Beispiel, um ein in HTML deklariertes Bild von einer Drittanbieter-Website, die CORS unterstützt, abzurufen, können Sie das [`crossorigin`](/de/docs/Web/HTML/Reference/Attributes/crossorigin) Attribut verwenden, damit es im `cors`-Modus angefordert wird:

```html
<img src="https://thirdparty.com/img.png" crossorigin />
```

Sie können ähnlich das [`HTMLScriptElement.crossOrigin`](/de/docs/Web/API/HTMLScriptElement/crossOrigin) Attribut oder das Abrufen mit `{ mode: 'cors' }` verwenden, um eine Datei im CORS-Modus mit JavaScript anzufordern.

Wenn CORS für einige Bilder nicht unterstützt wird, kann ein COEP-Wert von `credentialless` als Alternative verwendet werden, um das Bild ohne ausdrückliches Opt-in vom Cross-Origin-Server zu laden, auf Kosten der Anforderung ohne Cookies.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTTPHeader("Cross-Origin-Opener-Policy")}}
- [`Window.crossOriginIsolated`](/de/docs/Web/API/Window/crossOriginIsolated) und [`WorkerGlobalScope.crossOriginIsolated`](/de/docs/Web/API/WorkerGlobalScope/crossOriginIsolated)
- [Cross Origin Opener Policy](https://web.dev/articles/why-coop-coep#coep) in _Why you need "cross-origin isolated" for powerful features_ auf web.dev (2020)
- [COOP and COEP explained: Artur Janc, Charlie Reis, Anne van Kesteren](https://docs.google.com/document/d/1zDlfvfTJ_9e8Jdc8ehuV4zMEu9ySMCiTGMS9y0GU92k/edit?tab=t.0) (2020)
