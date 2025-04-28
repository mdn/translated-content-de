---
title: Cross-Origin-Embedder-Policy
slug: Web/HTTP/Reference/Headers/Cross-Origin-Embedder-Policy
l10n:
  sourceCommit: be1922d62a0d31e4e3441db0e943aed8df736481
---

{{HTTPSidebar}}

Der HTTP **`Cross-Origin-Embedder-Policy`** (COEP) {{Glossary("response_header", "Response-Header")}} konfiguriert die Richtlinie des aktuellen Dokuments zum Laden und Einbetten von Cross-Origin-Ressourcen.

Die Richtlinie, ob eine bestimmte Ressource site-übergreifend eingebettet werden kann, kann für diese Ressource mittels des {{HTTPHeader("Cross-Origin-Resource-Policy")}} (CORP) Headers für einen `no-cors` Abruf oder mittels [CORS](/de/docs/Web/HTTP/Guides/CORS) definiert werden. Wenn keine dieser Richtlinien festgelegt ist, können Ressourcen standardmäßig geladen oder in ein Dokument eingebettet werden, als hätten sie einen CORP-Wert von `cross-site`.

Der **`Cross-Origin-Embedder-Policy`** ermöglicht es Ihnen zu verlangen, dass CORP- oder CORS-Header gesetzt werden, um site-übergreifende Ressourcen in das aktuelle Dokument zu laden. Sie können auch die Richtlinie auf das Standardverhalten belassen oder zulassen, dass die Ressourcen geladen werden, aber dabei alle Anmeldeinformationen entfernen, die sonst gesendet werden könnten. Die Richtlinie bezieht sich auf geladene Ressourcen und Ressourcen in {{htmlelement("iframe")}}s und verschachtelten Frames.

> [!NOTE]
> Der `Cross-Origin-Embedder-Policy` überschreibt oder beeinflusst nicht das Einbettungsverhalten für eine Ressource, für die CORP oder CORS gesetzt wurde. Wenn CORP eine Ressource darauf beschränkt, nur aus demselben Ursprung (`same-origin`) eingebettet zu werden, wird sie unabhängig vom COEP-Wert nicht site-übergreifend in eine Ressource geladen.

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
  - : Erlaubt es dem Dokument, Cross-Origin-Ressourcen **ohne** ausdrückliche Erlaubnis durch das CORS-Protokoll oder den {{HTTPHeader("Cross-Origin-Resource-Policy")}} Header zu laden. Dies ist der Standardwert.
- `require-corp`

  - : Ein Dokument kann nur Ressourcen aus demselben Ursprung laden oder Ressourcen, die ausdrücklich als von einem anderen Ursprung ladbar markiert sind.

    Das Laden von Cross-Origin-Ressourcen wird von COEP blockiert, es sei denn:

    - Die Ressource wird im `no-cors` Modus angefordert und die Antwort enthält einen {{HTTPHeader("Cross-Origin-Resource-Policy")}} Header, der es erlaubt, in den Dokumentursprung geladen zu werden.
    - Die Ressource wird im `cors` Modus angefordert und die Ressource wird von CORS unterstützt und zulässig gemacht. Dies kann zum Beispiel in HTML mit dem [`crossorigin`](/de/docs/Web/HTML/Reference/Attributes/crossorigin) Attribut oder in JavaScript durch eine Anfrage mit [`{mode="cors"}`](/de/docs/Web/API/RequestInit#cors) erreicht werden.

- `credentialless`

  - : Ein Dokument kann Cross-Origin-Ressourcen laden, die im [`no-cors` Modus](/de/docs/Web/API/Request/mode) **ohne** ausdrückliche Erlaubnis über den {{HTTPHeader("Cross-Origin-Resource-Policy")}} Header angefordert werden. In diesem Fall werden Anfragen ohne Anmeldeinformationen gesendet: Cookies werden in der Anfrage weggelassen und in der Antwort ignoriert.

    Das Ladeverhalten für andere [Anfragemodi](/de/docs/Web/API/Request/mode#cors) ist das gleiche wie für [`require-corp`](#require-corp). Beispielsweise muss eine Cross-Origin-Ressource, die im `cors` Modus angefordert wird, CORS unterstützen (und zulässig sein).

## Beispiele

### Funktionen, die von Cross-Origin-Isolation abhängen

Bestimmte Funktionen, wie der Zugriff auf {{jsxref("SharedArrayBuffer")}} Objekte oder die Verwendung von [`Performance.now()`](/de/docs/Web/API/Performance/now) mit ungedrosselten Timern, sind nur verfügbar, wenn Ihr Dokument [cross-origin isoliert](/de/docs/Web/API/Window/crossOriginIsolated) ist.

Um diese Funktionen in einem Dokument zu verwenden, müssen Sie den COEP-Header mit einem Wert von `require-corp` oder `credentialless` setzen und den {{HTTPHeader("Cross-Origin-Opener-Policy")}} Header auf `same-origin`. Zusätzlich darf die Funktion nicht durch {{HTTPHeader("Permissions-Policy/cross-origin-isolated","Permissions-Policy: cross-origin-isolated")}} blockiert werden.

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

### Vermeidung von COEP-Blockaden mit CORS

Wenn Sie COEP mit `require-corp` aktivieren und eine Cross-Origin-Ressource einbetten möchten, die [CORS](/de/docs/Web/HTTP/Guides/CORS) unterstützt, müssen Sie ausdrücklich angeben, dass sie im `cors` Modus angefordert wird.

Zum Beispiel, um ein Bild, das in HTML deklariert ist, von einer Drittanbieter-Website abzurufen, die CORS unterstützt, können Sie das [`crossorigin`](/de/docs/Web/HTML/Reference/Attributes/crossorigin) Attribut verwenden, damit es im `cors` Modus angefordert wird:

```html
<img src="https://thirdparty.com/img.png" crossorigin />
```

Sie können ähnlich das [`HTMLScriptElement.crossOrigin`](/de/docs/Web/API/HTMLScriptElement/crossOrigin) Attribut verwenden oder eine Datei im CORS-Modus mittels JavaScript mit `{ mode: 'cors' }` abrufen.

Falls CORS für einige Bilder nicht unterstützt wird, kann ein COEP-Wert von `credentialless` als Alternative verwendet werden, um das Bild ohne explizite Zustimmung vom Cross-Origin-Server zu laden, allerdings auf Kosten der Anforderung ohne Cookies.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTTPHeader("Cross-Origin-Opener-Policy")}}
- [`Window.crossOriginIsolated`](/de/docs/Web/API/Window/crossOriginIsolated) und [`WorkerGlobalScope.crossOriginIsolated`](/de/docs/Web/API/WorkerGlobalScope/crossOriginIsolated)
- [Cross Origin Opener Policy](https://web.dev/articles/why-coop-coep#coep) in _Why you need "cross-origin isolated" for powerful features_ auf web.dev (2020)
- [COOP und COEP erklärt: Artur Janc, Charlie Reis, Anne van Kesteren](https://docs.google.com/document/d/1zDlfvfTJ_9e8Jdc8ehuV4zMEu9ySMCiTGMS9y0GU92k/edit?tab=t.0) (2020)
