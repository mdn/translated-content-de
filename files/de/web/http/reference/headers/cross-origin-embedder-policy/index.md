---
title: Cross-Origin-Embedder-Policy (COEP) header
short-title: Cross-Origin-Embedder-Policy
slug: Web/HTTP/Reference/Headers/Cross-Origin-Embedder-Policy
l10n:
  sourceCommit: ee756fd51ccbc4820a4b334aa753648650ad1d51
---

{{HTTPSidebar}}

Der HTTP **`Cross-Origin-Embedder-Policy`** (COEP) {{Glossary("response_header", "Antwort-Header")}} konfiguriert die Richtlinie des aktuellen Dokuments für das Laden und Einbetten von Cross-Origin-Ressourcen.

Die Richtlinie dafür, ob eine bestimmte Ressource seitenübergreifend eingebettet werden kann, kann für diese Ressource mit dem {{HTTPHeader("Cross-Origin-Resource-Policy")}} (CORP)-Header für einen `no-cors`-Abruf oder mit [CORS](/de/docs/Web/HTTP/Guides/CORS) definiert werden.
Wenn keine dieser Richtlinien festgelegt ist, können Ressourcen standardmäßig in ein Dokument geladen oder eingebettet werden, als hätten sie einen CORP-Wert von `cross-site`.

Die **`Cross-Origin-Embedder-Policy`** erlaubt es Ihnen, zu verlangen, dass CORP- oder CORS-Header gesetzt sind, um seitenübergreifende Ressourcen in das aktuelle Dokument zu laden.
Sie können die Richtlinie auch so einstellen, dass das Standardverhalten beibehalten wird oder dass das Laden der Ressourcen erlaubt ist, aber jegliche Anmeldeinformationen, die sonst gesendet würden, entfernt werden.
Die Richtlinie gilt für geladene Ressourcen sowie für Ressourcen in {{htmlelement("iframe")}}s und verschachtelten Frames.

> [!NOTE]
> Die `Cross-Origin-Embedder-Policy` überschreibt oder beeinflusst nicht das Einbetten einer Ressource, für die CORP oder CORS eingestellt wurde.
> Wenn CORP eine Ressource darauf beschränkt, dass sie nur `same-origin` eingebettet werden darf, wird sie unabhängig vom COEP-Wert nicht seitenübergreifend in eine Ressource geladen.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Response_header", "Antwort-Header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_response_header_name", "Verbotener Name des Antwort-Headers")}}</th>
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
  - : Erlaubt es dem Dokument, Cross-Origin-Ressourcen **ohne** explizite Erlaubnis durch das CORS-Protokoll oder den {{HTTPHeader("Cross-Origin-Resource-Policy")}}-Header zu laden.
    Dies ist der Standardwert.
- `require-corp`

  - : Ein Dokument kann nur Ressourcen von derselben Herkunft laden oder Ressourcen, die ausdrücklich als von einer anderen Herkunft ladbar deklariert sind.

    Das Laden von Cross-Origin-Ressourcen wird von COEP blockiert, es sei denn:

    - Die Ressource wird im `no-cors`-Modus angefordert und die Antwort enthält einen {{HTTPHeader("Cross-Origin-Resource-Policy")}}-Header, der es erlaubt, sie in die Dokumentherkunft zu laden.
    - Die Ressource wird im `cors`-Modus angefordert und die Ressource wird von CORS unterstützt und erlaubt.
      Dies kann beispielsweise in HTML durch die Verwendung des [`crossorigin`](/de/docs/Web/HTML/Reference/Attributes/crossorigin)-Attributes geschehen oder in JavaScript durch eine Anfrage mit [`{mode="cors"}`](/de/docs/Web/API/RequestInit#cors).

- `credentialless`

  - : Ein Dokument kann Cross-Origin-Ressourcen laden, die im [`no-cors`-Modus](/de/docs/Web/API/Request/mode) **ohne** eine ausdrückliche Erlaubnis über den {{HTTPHeader("Cross-Origin-Resource-Policy")}}-Header angefordert werden.
    In diesem Fall werden Anfragen ohne Anmeldeinformationen gesendet: Cookies werden in der Anfrage weggelassen und in der Antwort ignoriert.

    Das seitenübergreifende Ladeverhalten für andere [Anforderungsmodi](/de/docs/Web/API/Request/mode#cors) ist dasselbe wie für [`require-corp`](#require-corp).
    Zum Beispiel muss eine im `cors`-Modus angeforderte Cross-Origin-Ressource CORS unterstützen (und durch CORS erlaubt sein).

## Beispiele

### Funktionen, die von der Isolation über Parteien hinweg abhängen

Bestimmte Funktionen, wie der Zugriff auf {{jsxref("SharedArrayBuffer")}}-Objekte oder die Verwendung von [`Performance.now()`](/de/docs/Web/API/Performance/now) mit ungedrosselten Timern, sind nur verfügbar, wenn Ihr Dokument [cross-origin isoliert](/de/docs/Web/API/Window/crossOriginIsolated) ist.

Um diese Funktionen in einem Dokument zu verwenden, müssen Sie den COEP-Header mit dem Wert `require-corp` oder `credentialless` setzen und den {{HTTPHeader("Cross-Origin-Opener-Policy")}}-Header auf `same-origin`.
Zusätzlich darf die Funktion nicht durch {{HTTPHeader("Permissions-Policy/cross-origin-isolated","Permissions-Policy: cross-origin-isolated")}} blockiert sein.

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

### Vermeidung von COEP-Blockierung mit CORS

Wenn Sie COEP mit `require-corp` aktivieren und eine Cross-Origin-Ressource einbetten möchten, die [CORS](/de/docs/Web/HTTP/Guides/CORS) unterstützt, müssen Sie explizit angeben, dass sie im `cors`-Modus angefordert wird.

Um beispielsweise ein in HTML deklariertes Bild von einer Drittanbieter-Website abzurufen, die CORS unterstützt, können Sie das [`crossorigin`](/de/docs/Web/HTML/Reference/Attributes/crossorigin)-Attribut verwenden, damit es im `cors`-Modus angefordert wird:

```html
<img src="https://thirdparty.com/img.png" crossorigin />
```

Sie können das [`HTMLScriptElement.crossOrigin`](/de/docs/Web/API/HTMLScriptElement/crossOrigin)-Attribut oder das Abrufen mit `{ mode: 'cors' }` ähnlich verwenden, um eine Datei im CORS-Modus mittels JavaScript anzufordern.

Wenn für einige Bilder CORS nicht unterstützt wird, kann ein COEP-Wert von `credentialless` als Alternative verwendet werden, um das Bild ohne explizite Zustimmung des Cross-Origin-Servers zu laden, allerdings auf Kosten der Anforderung ohne Cookies.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTTPHeader("Cross-Origin-Opener-Policy")}}
- [`Window.crossOriginIsolated`](/de/docs/Web/API/Window/crossOriginIsolated) und [`WorkerGlobalScope.crossOriginIsolated`](/de/docs/Web/API/WorkerGlobalScope/crossOriginIsolated)
- [Cross Origin Opener Policy](https://web.dev/articles/why-coop-coep#coep) in _Why you need "cross-origin isolated" for powerful features_ auf web.dev (2020)
- [COOP and COEP explained: Artur Janc, Charlie Reis, Anne van Kesteren](https://docs.google.com/document/d/1zDlfvfTJ_9e8Jdc8ehuV4zMEu9ySMCiTGMS9y0GU92k/edit?tab=t.0) (2020)
