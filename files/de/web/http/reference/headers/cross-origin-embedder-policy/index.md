---
title: Cross-Origin-Embedder-Policy
slug: Web/HTTP/Reference/Headers/Cross-Origin-Embedder-Policy
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{HTTPSidebar}}

Der HTTP **`Cross-Origin-Embedder-Policy`** (COEP) {{Glossary("response_header", "Antwort-Header")}} konfiguriert die Richtlinie des aktuellen Dokuments zum Laden und Einbetten von Cross-Origin-Ressourcen.

Die Richtlinie, ob eine bestimmte Ressource siteübergreifend eingebettet werden kann, kann für diese Ressource festgelegt werden, indem der {{HTTPHeader("Cross-Origin-Resource-Policy")}} (CORP) Header für einen `no-cors`-Abruf verwendet wird, oder indem [CORS](/de/docs/Web/HTTP/Guides/CORS) verwendet wird. Wenn keine dieser Richtlinien festgelegt ist, können Ressourcen standardmäßig in ein Dokument geladen oder eingebettet werden, als hätten sie einen CORP-Wert von `cross-site`.

Der **`Cross-Origin-Embedder-Policy`** ermöglicht es Ihnen, dass CORP- oder CORS-Header gesetzt sein müssen, um Cross-Site-Ressourcen in das aktuelle Dokument zu laden. Sie können die Richtlinie auch so festlegen, dass das Standardverhalten beibehalten wird oder dass die Ressourcen geladen werden dürfen, jedoch ohne Anmeldedaten, die andernfalls gesendet würden. Die Richtlinie gilt für geladene Ressourcen und Ressourcen in {{htmlelement("iframe")}}s und verschachtelten Frames.

> [!NOTE]
> Der `Cross-Origin-Embedder-Policy` überschreibt oder beeinflusst nicht das Einbettungsverhalten einer Ressource, für die CORP oder CORS festgelegt wurde.
> Wenn CORP eine Ressource auf `same-origin` beschränkt, wird sie unabhängig vom COEP-Wert nicht siteübergreifend in eine Ressource geladen.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Response_header", "Antwort-Header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_response_header_name", "Verbotener Antwort-Header-Name")}}</th>
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
  - : Erlaubt es dem Dokument, Cross-Origin-Ressourcen **ohne** ausdrückliche Erlaubnis durch das CORS-Protokoll oder den {{HTTPHeader("Cross-Origin-Resource-Policy")}} Header zu laden. Dies ist der Standardwert.
- `require-corp`

  - : Ein Dokument kann nur Ressourcen aus demselben Ursprung laden oder Ressourcen, die explizit als aus einem anderen Ursprung ladbar markiert sind.

    Das Laden von Cross-Origin-Ressourcen wird durch COEP blockiert, es sei denn:

    - Die Ressource wird im `no-cors` Modus abgefragt und die Antwort enthält einen {{HTTPHeader("Cross-Origin-Resource-Policy")}} Header, der das Laden in den Dokumentursprung erlaubt.
    - Die Ressource wird im `cors` Modus angefordert und die Ressource unterstützt und wird von CORS erlaubt.
      Dies kann beispielsweise in HTML mit dem [`crossorigin`](/de/docs/Web/HTML/Reference/Attributes/crossorigin) Attribut oder in JavaScript durch eine Anfrage mit [`{mode="cors"}`](/de/docs/Web/API/RequestInit#cors) erfolgen.

- `credentialless`

  - : Ein Dokument kann Cross-Origin-Ressourcen laden, die im [`no-cors` Modus](/de/docs/Web/API/Request/mode) angefordert werden, **ohne** explizite Erlaubnis über den {{HTTPHeader("Cross-Origin-Resource-Policy")}} Header. In diesem Fall werden Anfragen ohne Anmeldedaten gesendet: Cookies werden in der Anfrage weggelassen und in der Antwort ignoriert.

    Das Laden von Cross-Origin-Ressourcen für andere [Anfragemodi](/de/docs/Web/API/Request/mode#cors) ist dasselbe wie für [`require-corp`](#require-corp).
    Zum Beispiel muss eine im `cors` Modus angeforderte Cross-Origin-Ressource CORS unterstützen (und von CORS erlaubt werden).

## Beispiele

### Funktionen, die von der Cross-Origin-Isolierung abhängen

Bestimmte Funktionen, wie der Zugriff auf {{jsxref("SharedArrayBuffer")}} Objekte oder die Verwendung von [`Performance.now()`](/de/docs/Web/API/Performance/now) mit nicht gedrosselten Timern, sind nur verfügbar, wenn Ihr Dokument [Cross-Origin isoliert](/de/docs/Web/API/Window/crossOriginIsolated) ist.

Um diese Funktionen in einem Dokument zu verwenden, müssen Sie den COEP-Header mit einem Wert von `require-corp` oder `credentialless` setzen und den {{HTTPHeader("Cross-Origin-Opener-Policy")}} Header auf `same-origin`. Darüber hinaus darf die Funktion nicht durch {{HTTPHeader("Permissions-Policy/cross-origin-isolated","Permissions-Policy: cross-origin-isolated")}} blockiert werden.

```http
Cross-Origin-Opener-Policy: same-origin
Cross-Origin-Embedder-Policy: require-corp
```

Sie können die Eigenschaften [`Window.crossOriginIsolated`](/de/docs/Web/API/Window/crossOriginIsolated) und [`WorkerGlobalScope.crossOriginIsolated`](/de/docs/Web/API/WorkerGlobalScope/crossOriginIsolated) verwenden, um zu prüfen, ob die Funktionen in Fenster- und Worker-Kontexten eingeschränkt sind:

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

### Vermeidung der COEP-Blockierung mit CORS

Wenn Sie COEP mit `require-corp` aktivieren und eine Cross-Origin-Ressource einbetten möchten, die [CORS](/de/docs/Web/HTTP/Guides/CORS) unterstützt, müssen Sie explizit angeben, dass sie im `cors` Modus angefordert wird.

Zum Beispiel, um ein Bild in HTML von einer Drittanbieterseite abzurufen, die CORS unterstützt, können Sie das [`crossorigin`](/de/docs/Web/HTML/Reference/Attributes/crossorigin) Attribut verwenden, sodass es im `cors` Modus angefordert wird:

```html
<img src="https://thirdparty.com/img.png" crossorigin />
```

Sie können ähnlich das [`HTMLScriptElement.crossOrigin`](/de/docs/Web/API/HTMLScriptElement/crossOrigin) Attribut oder das Fetchen mit `{ mode: 'cors' }` verwenden, um eine Datei im CORS-Modus mithilfe von JavaScript anzufordern.

Wenn CORS für einige Bilder nicht unterstützt wird, kann ein COEP-Wert von `credentialless` als Alternative verwendet werden, um das Bild ohne explizite Zustimmung des Cross-Origin-Servers zu laden, allerdings auf Kosten des Abrufs ohne Cookies.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTTPHeader("Cross-Origin-Opener-Policy")}}
- [`Window.crossOriginIsolated`](/de/docs/Web/API/Window/crossOriginIsolated) und [`WorkerGlobalScope.crossOriginIsolated`](/de/docs/Web/API/WorkerGlobalScope/crossOriginIsolated)
- [Cross Origin Opener Policy](https://web.dev/articles/why-coop-coep#coep) in _Why you need "cross-origin isolated" for powerful features_ auf web.dev (2020)
- [COOP and COEP explained: Artur Janc, Charlie Reis, Anne van Kesteren](https://docs.google.com/document/d/1zDlfvfTJ_9e8Jdc8ehuV4zMEu9ySMCiTGMS9y0GU92k/edit?tab=t.0) (2020)
