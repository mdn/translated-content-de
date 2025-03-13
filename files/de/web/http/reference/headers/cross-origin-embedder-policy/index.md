---
title: Cross-Origin-Embedder-Policy
slug: Web/HTTP/Reference/Headers/Cross-Origin-Embedder-Policy
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{HTTPSidebar}}

Der HTTP **`Cross-Origin-Embedder-Policy`** (COEP) {{Glossary("response_header", "Antwort-Header")}} konfiguriert die Richtlinie des aktuellen Dokuments zum Laden und Einbetten von Cross-Origin-Ressourcen.

Die Richtlinie, ob eine bestimmte Ressource cross-site eingebettet werden kann, kann für diese Ressource mithilfe des {{HTTPHeader("Cross-Origin-Resource-Policy")}} (CORP) Headers für einen `no-cors`-Abruf oder unter Verwendung von [CORS](/de/docs/Web/HTTP/Guides/CORS) definiert werden.
Falls keine dieser Richtlinien festgelegt ist, können Ressourcen standardmäßig in ein Dokument geladen oder eingebettet werden, als hätten sie einen CORP-Wert von `cross-site`.

Der **`Cross-Origin-Embedder-Policy`** erlaubt es, zu verlangen, dass CORP- oder CORS-Header gesetzt sind, um Cross-Site-Ressourcen in das aktuelle Dokument zu laden.
Sie können auch die Richtlinie festlegen, um das Standardverhalten beizubehalten oder um zuzulassen, dass Ressourcen geladen werden, aber Anmeldedaten entfernt werden, die sonst gesendet werden könnten.
Die Richtlinie gilt für geladene Ressourcen sowie für Ressourcen in {{htmlelement("iframe")}}s und verschachtelten Frames.

> [!NOTE]
> Die `Cross-Origin-Embedder-Policy` überschreibt nicht oder beeinflusst nicht das Einbettungsverhalten für eine Ressource, für die CORP oder CORS festgelegt wurde.
> Wenn CORP eine Ressource darauf beschränkt, nur `same-origin` eingebettet zu werden, wird sie unabhängig vom COEP-Wert nicht Cross-Origin in eine Ressource geladen.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Response_header", "Antwort-Header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_response_header_name", "Untersagter Antwort-Header-Name")}}</th>
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
  - : Erlaubt dem Dokument, Cross-Origin-Ressourcen **ohne** ausdrückliche Erlaubnis durch das CORS-Protokoll oder den {{HTTPHeader("Cross-Origin-Resource-Policy")}}-Header zu laden.
    Dies ist der Standardwert.
- `require-corp`

  - : Ein Dokument kann nur Ressourcen von derselben Herkunft laden oder Ressourcen, die ausdrücklich als ladbar von einer anderen Herkunft gekennzeichnet sind.

    Das Laden von Cross-Origin-Ressourcen wird durch COEP blockiert, es sei denn:

    - Die Ressource wird im `no-cors`-Modus angefordert und die Antwort enthält einen {{HTTPHeader("Cross-Origin-Resource-Policy")}}-Header, der erlaubt, sie in die Dokumentherkunft zu laden.
    - Die Ressource wird im `cors`-Modus angefordert und die Ressource unterstützt und wird von CORS erlaubt.
      Dies kann beispielsweise in HTML unter Verwendung des [`crossorigin`](/de/docs/Web/HTML/Attributes/crossorigin)-Attributs erfolgen oder in JavaScript, indem eine Anfrage mit [`{mode="cors"}`](/de/docs/Web/API/RequestInit#cors) gestellt wird.

- `credentialless`

  - : Ein Dokument kann Cross-Origin-Ressourcen laden, die im [`no-cors`-Modus](/de/docs/Web/API/Request/mode) **ohne** ausdrückliche Erlaubnis über den {{HTTPHeader("Cross-Origin-Resource-Policy")}}-Header angefordert werden.
    In diesem Fall werden Anfragen ohne Anmeldedaten gesendet: Cookies werden in der Anfrage weggelassen und in der Antwort ignoriert.

    Das Cross-Origin-Ladeverhalten für andere [Anfragemodi](/de/docs/Web/API/Request/mode#cors) ist dasselbe wie für [`require-corp`](#require-corp).
    Zum Beispiel muss eine im `cors`-Modus angeforderte Cross-Origin-Ressource CORS unterstützen (und von CORS erlaubt sein).

## Beispiele

### Funktionen, die von Cross-Origin-Isolierung abhängig sind

Bestimmte Funktionen, wie der Zugriff auf {{jsxref("SharedArrayBuffer")}}-Objekte oder die Nutzung von [`Performance.now()`](/de/docs/Web/API/Performance/now) mit nicht gedrosselten Timern, sind nur verfügbar, wenn Ihr Dokument [Cross-Origin isoliert](/de/docs/Web/API/Window/crossOriginIsolated) ist.

Um diese Funktionen in einem Dokument zu verwenden, müssen Sie den COEP-Header mit einem Wert von `require-corp` oder `credentialless` setzen und den {{HTTPHeader("Cross-Origin-Opener-Policy")}}-Header auf `same-origin`.
Zusätzlich darf die Funktion nicht durch {{HTTPHeader("Permissions-Policy/cross-origin-isolated","Permissions-Policy: cross-origin-isolated")}} blockiert sein.

```http
Cross-Origin-Opener-Policy: same-origin
Cross-Origin-Embedder-Policy: require-corp
```

Sie können die Eigenschaften [`Window.crossOriginIsolated`](/de/docs/Web/API/Window/crossOriginIsolated) und [`WorkerGlobalScope.crossOriginIsolated`](/de/docs/Web/API/WorkerGlobalScope/crossOriginIsolated) verwenden, um zu prüfen, ob die Funktionen im Fenster- und Worker-Kontext eingeschränkt sind:

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

Wenn Sie COEP mit `require-corp` aktivieren und eine Cross-Origin-Ressource einbetten möchten, die [CORS](/de/docs/Web/HTTP/Guides/CORS) unterstützt, müssen Sie ausdrücklich angeben, dass sie im `cors`-Modus angefordert wird.

Um beispielsweise ein in HTML deklariertes Bild von einer Drittanbieter-Website zu holen, die CORS unterstützt, können Sie das [`crossorigin`](/de/docs/Web/HTML/Attributes/crossorigin)-Attribut verwenden, sodass es im `cors`-Modus angefordert wird:

```html
<img src="https://thirdparty.com/img.png" crossorigin />
```

Sie können ähnlich das [`HTMLScriptElement.crossOrigin`](/de/docs/Web/API/HTMLScriptElement/crossOrigin)-Attribut oder das Abrufen mit `{ mode: 'cors' }` verwenden, um eine Datei im CORS-Modus mit JavaScript anzufordern.

Wenn CORS für einige Bilder nicht unterstützt wird, kann ein COEP-Wert von `credentialless` als Alternative verwendet werden, um das Bild ohne ausdrückliches Opt-in des Cross-Origin-Servers zu laden, auf Kosten der Anforderung ohne Cookies.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTTPHeader("Cross-Origin-Opener-Policy")}}
- [`Window.crossOriginIsolated`](/de/docs/Web/API/Window/crossOriginIsolated) und [`WorkerGlobalScope.crossOriginIsolated`](/de/docs/Web/API/WorkerGlobalScope/crossOriginIsolated)
- [Cross Origin Opener Policy](https://web.dev/articles/why-coop-coep#coep) in _Why you need "cross-origin isolated" for powerful features_ auf web.dev (2020)
- [COOP und COEP erklärt: Artur Janc, Charlie Reis, Anne van Kesteren](https://docs.google.com/document/d/1zDlfvfTJ_9e8Jdc8ehuV4zMEu9ySMCiTGMS9y0GU92k/edit?tab=t.0) (2020)
