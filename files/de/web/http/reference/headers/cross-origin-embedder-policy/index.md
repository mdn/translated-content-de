---
title: Cross-Origin-Embedder-Policy (COEP) header
short-title: Cross-Origin-Embedder-Policy
slug: Web/HTTP/Reference/Headers/Cross-Origin-Embedder-Policy
l10n:
  sourceCommit: 811626ac21bf6e3effd7029530e6b202e596611d
---

Der HTTP **`Cross-Origin-Embedder-Policy`** (COEP) {{Glossary("response_header", "Antwort-Header")}} konfiguriert die Richtlinie des aktuellen Dokuments für das Laden und Einbetten von Cross-Origin-Ressourcen.

Die Richtlinie, ob eine bestimmte Ressource siteübergreifend eingebettet werden kann, kann für diese Ressource über den {{HTTPHeader("Cross-Origin-Resource-Policy")}} (CORP) Header für einen `no-cors`-Abruf oder über [CORS](/de/docs/Web/HTTP/Guides/CORS) festgelegt werden.
Wenn keine dieser Richtlinien gesetzt ist, können Ressourcen standardmäßig so in ein Dokument geladen oder eingebettet werden, als hätten sie einen CORP-Wert von `cross-origin`.

Der **`Cross-Origin-Embedder-Policy`** erlaubt es Ihnen, zu verlangen, dass CORP- oder CORS-Header gesetzt werden müssen, um siteübergreifende Ressourcen in das aktuelle Dokument zu laden.
Sie können die Richtlinie auch so einstellen, dass das Standardverhalten beibehalten wird oder dass die Ressourcen geladen werden dürfen, jedoch ohne Anmeldeinformationen, die sonst gesendet würden, zu entfernen.
Die Richtlinie gilt für geladene Ressourcen und Ressourcen in {{htmlelement("iframe")}}s und verschachtelten Rahmen.

> [!NOTE]
> Die `Cross-Origin-Embedder-Policy` überschreibt nicht das Einbettungsverhalten für eine Ressource, für die CORP oder CORS gesetzt wurde.
> Wenn CORP einschränkt, dass eine Ressource nur `same-origin` eingebettet werden darf, wird sie nicht siteübergreifend in eine Ressource geladen, unabhängig vom COEP-Wert.

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
  - : Erlaubt es dem Dokument, Cross-Origin-Ressourcen **ohne** explizite Erlaubnis über das CORS-Protokoll oder den {{HTTPHeader("Cross-Origin-Resource-Policy")}} Header zu laden.
    Dies ist der Standardwert.
- `require-corp`
  - : Ein Dokument kann nur Ressourcen aus derselben Quelle oder explizit als ladbar markierte Ressourcen aus einer anderen Quelle laden.

    Das Laden von Cross-Origin-Ressourcen wird durch COEP blockiert, es sei denn:
    - Die Ressource wird im `no-cors`-Modus angefordert und die Antwort enthält einen {{HTTPHeader("Cross-Origin-Resource-Policy")}} Header, der es erlaubt, sie in die Dokumentquelle zu laden.
    - Die Ressource wird im `cors`-Modus angefordert und die Ressource wird von CORS unterstützt und ist erlaubt.
      Dies kann zum Beispiel in HTML mit dem [`crossorigin`](/de/docs/Web/HTML/Reference/Attributes/crossorigin) Attribut oder in JavaScript durch eine Anfrage mit [`{mode="cors"}`](/de/docs/Web/API/RequestInit#cors) erreicht werden.

- `credentialless`
  - : Ein Dokument kann Cross-Origin-Ressourcen laden, die im [`no-cors` Modus](/de/docs/Web/API/Request/mode) **ohne** eine explizite Erlaubnis über den {{HTTPHeader("Cross-Origin-Resource-Policy")}} Header angefordert werden.
    In diesem Fall werden Anfragen ohne Anmeldeinformationen gesendet: Cookies werden in der Anfrage weggelassen und in der Antwort ignoriert.

    Das Cross-Origin-Ladeverhalten für andere [Anfragemodi](/de/docs/Web/API/Request/mode#cors) ist das gleiche wie für [`require-corp`](#require-corp).
    Zum Beispiel muss eine im `cors`-Modus angeforderte Cross-Origin-Ressource CORS unterstützen (und durch CORS erlaubt sein).

## Beispiele

### Funktionen, die von Cross-Origin-Isolierung abhängen

Bestimmte Funktionen, wie der Zugriff auf {{jsxref("SharedArrayBuffer")}} Objekte oder die Verwendung von [`Performance.now()`](/de/docs/Web/API/Performance/now) mit nicht gedrosselten Timern, sind nur verfügbar, wenn Ihr Dokument [cross-origin isoliert](/de/docs/Web/API/Window/crossOriginIsolated) ist.

Um diese Funktionen in einem Dokument zu verwenden, müssen Sie den COEP-Header mit dem Wert `require-corp` oder `credentialless` setzen und den {{HTTPHeader("Cross-Origin-Opener-Policy")}} Header auf `same-origin`.
Darüber hinaus darf die Funktion nicht durch {{HTTPHeader("Permissions-Policy/cross-origin-isolated","Permissions-Policy: cross-origin-isolated")}} blockiert werden.

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

### Vermeidung von COEP-Blockaden mit CORS

Wenn Sie COEP mit `require-corp` aktivieren und eine Cross-Origin-Ressource einbetten möchten, die [CORS](/de/docs/Web/HTTP/Guides/CORS) unterstützt, müssen Sie explizit angeben, dass sie im `cors`-Modus angefordert wird.

Um beispielsweise ein Bild von einer Drittanbieter-Site, die CORS unterstützt, in HTML abzurufen, können Sie das [`crossorigin`](/de/docs/Web/HTML/Reference/Attributes/crossorigin) Attribut verwenden, sodass es im `cors`-Modus angefordert wird:

```html
<img src="https://thirdparty.com/img.png" crossorigin />
```

Sie können ähnlich das [`HTMLScriptElement.crossOrigin`](/de/docs/Web/API/HTMLScriptElement/crossOrigin) Attribut oder das Abrufen mit `{ mode: 'cors' }` verwenden, um eine Datei im CORS-Modus mittels JavaScript anzufordern.

Wenn CORS für einige Bilder nicht unterstützt wird, kann ein COEP-Wert von `credentialless` als Alternative verwendet werden, um das Bild ohne explizite Zustimmung des Cross-Origin-Servers, jedoch auf Kosten eines Anrufs ohne Cookies, zu laden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTTPHeader("Cross-Origin-Opener-Policy")}}
- [`Window.crossOriginIsolated`](/de/docs/Web/API/Window/crossOriginIsolated) und [`WorkerGlobalScope.crossOriginIsolated`](/de/docs/Web/API/WorkerGlobalScope/crossOriginIsolated)
- [Cross Origin Opener Policy](https://web.dev/articles/why-coop-coep#coep) in _Why you need "cross-origin isolated" for powerful features_ auf web.dev (2020)
- [COOP und COEP erklärt: Artur Janc, Charlie Reis, Anne van Kesteren](https://docs.google.com/document/d/1zDlfvfTJ_9e8Jdc8ehuV4zMEu9ySMCiTGMS9y0GU92k/edit?tab=t.0) (2020)
