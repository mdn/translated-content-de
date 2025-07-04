---
title: Cross-Origin-Embedder-Policy (COEP) header
short-title: Cross-Origin-Embedder-Policy
slug: Web/HTTP/Reference/Headers/Cross-Origin-Embedder-Policy
l10n:
  sourceCommit: ad5b5e31f81795d692e66dadb7818ba8b220ad15
---

Der HTTP **`Cross-Origin-Embedder-Policy`** (COEP) {{Glossary("response_header", "Response-Header")}} konfiguriert die Richtlinie des aktuellen Dokuments für das Laden und Einbetten von Ressourcen aus verschiedenen Ursprüngen.

Die Richtlinie, ob eine bestimmte Ressource cross-site eingebettet werden kann, kann für diese Ressource mithilfe des {{HTTPHeader("Cross-Origin-Resource-Policy")}} (CORP) Headers für einen `no-cors` Abruf oder mithilfe von [CORS](/de/docs/Web/HTTP/Guides/CORS) definiert werden.
Wenn keine dieser Richtlinien festgelegt ist, können Ressourcen standardmäßig in ein Dokument geladen oder eingebettet werden, als ob sie einen CORP-Wert von `cross-site` hätten.

Der **`Cross-Origin-Embedder-Policy`** ermöglicht es Ihnen, zu verlangen, dass CORP- oder CORS-Header gesetzt sind, um Cross-Site-Ressourcen in das aktuelle Dokument zu laden.
Sie können die Richtlinie auch so festlegen, dass das Standardverhalten beibehalten wird oder dass das Laden der Ressourcen erlaubt ist, aber alle Anmeldeinformationen entfernt werden, die sonst gesendet würden.
Die Richtlinie gilt für geladene Ressourcen sowie für Ressourcen in {{htmlelement("iframe")}}s und geschachtelten Frames.

> [!NOTE]
> Der `Cross-Origin-Embedder-Policy` überschreibt oder beeinflusst nicht das Einbettungsverhalten für eine Ressource, für die CORP oder CORS festgelegt wurde.
> Wenn CORP eine Ressource auf `same-origin` beschränkt, wird sie nicht cross-origin in eine Ressource geladen, unabhängig vom COEP-Wert.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Response_header", "Response-Header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_response_header_name", "Verbotener Response-Header-Name")}}</th>
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
  - : Ermöglicht dem Dokument, Cross-Origin-Ressourcen **ohne** ausdrückliche Erlaubnis über das CORS-Protokoll oder den {{HTTPHeader("Cross-Origin-Resource-Policy")}} Header zu laden.
    Dies ist der Standardwert.
- `require-corp`
  - : Ein Dokument kann nur Ressourcen vom gleichen Ursprung oder Ressourcen laden, die ausdrücklich als von einem anderen Ursprung ladbar markiert sind.

    Das Laden von Cross-Origin-Ressourcen wird durch COEP blockiert, es sei denn:
    - Die Ressource wird im `no-cors` Modus angefordert und die Antwort enthält einen {{HTTPHeader("Cross-Origin-Resource-Policy")}} Header, der es erlaubt, sie in den Dokumentursprung zu laden.
    - Die Ressource wird im `cors` Modus angefordert und ist durch CORS unterstützt und erlaubt.
      Dies kann beispielsweise in HTML mit dem [`crossorigin`](/de/docs/Web/HTML/Reference/Attributes/crossorigin) Attribut oder in JavaScript durch eine Anfrage mit [`{mode="cors"}`](/de/docs/Web/API/RequestInit#cors) erfolgen.

- `credentialless`
  - : Ein Dokument kann Cross-Origin-Ressourcen laden, die im [`no-cors` Modus](/de/docs/Web/API/Request/mode) **ohne** ausdrückliche Erlaubnis über den {{HTTPHeader("Cross-Origin-Resource-Policy")}} Header angefordert werden.
    In diesem Fall werden Anfragen ohne Anmeldeinformationen gesendet: Cookies werden in der Anfrage weggelassen und in der Antwort ignoriert.

    Das Cross-Origin-Ladeverhalten für andere [Anfragemodi](/de/docs/Web/API/Request/mode#cors) ist dasselbe wie für [`require-corp`](#require-corp).
    Beispielsweise muss eine im `cors` Modus angeforderte Cross-Origin-Ressource CORS unterstützen (und durch CORS erlaubt sein).

## Beispiele

### Funktionen, die von Cross-Origin-Isolation abhängen

Bestimmte Funktionen, wie der Zugriff auf {{jsxref("SharedArrayBuffer")}} Objekte oder die Nutzung von [`Performance.now()`](/de/docs/Web/API/Performance/now) mit ungedrosselten Timern, sind nur verfügbar, wenn Ihr Dokument [cross-origin isoliert](/de/docs/Web/API/Window/crossOriginIsolated) ist.

Um diese Funktionen in einem Dokument zu verwenden, müssen Sie den COEP-Header mit einem Wert von `require-corp` oder `credentialless` setzen und den {{HTTPHeader("Cross-Origin-Opener-Policy")}} Header auf `same-origin`.
Zusätzlich darf die Funktion nicht durch {{HTTPHeader("Permissions-Policy/cross-origin-isolated","Permissions-Policy: cross-origin-isolated")}} blockiert sein.

```http
Cross-Origin-Opener-Policy: same-origin
Cross-Origin-Embedder-Policy: require-corp
```

Sie können die Eigenschaften [`Window.crossOriginIsolated`](/de/docs/Web/API/Window/crossOriginIsolated) und [`WorkerGlobalScope.crossOriginIsolated`](/de/docs/Web/API/WorkerGlobalScope/crossOriginIsolated) verwenden, um zu prüfen, ob die Funktionen in Fenster- und Arbeitskontexten eingeschränkt sind:

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

### Vermeidung von COEP-Blockaden mit CORS

Wenn Sie COEP mit `require-corp` aktivieren und eine Cross-Origin-Ressource einbetten möchten, die [CORS](/de/docs/Web/HTTP/Guides/CORS) unterstützt, müssen Sie ausdrücklich angeben, dass sie im `cors` Modus angefordert wird.

Um beispielsweise ein in HTML deklariertes Bild von einer Drittanbieter-Website abzurufen, die CORS unterstützt, können Sie das [`crossorigin`](/de/docs/Web/HTML/Reference/Attributes/crossorigin) Attribut verwenden, damit es im `cors` Modus angefordert wird:

```html
<img src="https://thirdparty.com/img.png" crossorigin />
```

Sie können ähnlich das [`HTMLScriptElement.crossOrigin`](/de/docs/Web/API/HTMLScriptElement/crossOrigin) Attribut oder `fetch` mit `{ mode: 'cors' }` verwenden, um eine Datei im CORS-Modus mit JavaScript anzufordern.

Wenn für einige Bilder kein CORS unterstützt wird, kann ein COEP-Wert von `credentialless` als Alternative verwendet werden, um das Bild ohne ausdrückliches Einverständnis des Cross-Origin-Servers zu laden, allerdings mit dem Nachteil, dass es ohne Cookies angefordert wird.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTTPHeader("Cross-Origin-Opener-Policy")}}
- [`Window.crossOriginIsolated`](/de/docs/Web/API/Window/crossOriginIsolated) und [`WorkerGlobalScope.crossOriginIsolated`](/de/docs/Web/API/WorkerGlobalScope/crossOriginIsolated)
- [Cross Origin Opener Policy](https://web.dev/articles/why-coop-coep#coep) in _Why you need "cross-origin isolated" for powerful features_ auf web.dev (2020)
- [COOP und COEP erklärt: Artur Janc, Charlie Reis, Anne van Kesteren](https://docs.google.com/document/d/1zDlfvfTJ_9e8Jdc8ehuV4zMEu9ySMCiTGMS9y0GU92k/edit?tab=t.0) (2020)
