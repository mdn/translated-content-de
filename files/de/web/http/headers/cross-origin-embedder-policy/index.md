---
title: Cross-Origin-Embedder-Policy
slug: Web/HTTP/Headers/Cross-Origin-Embedder-Policy
l10n:
  sourceCommit: 47d9ce2619697a821b9da6d49067ed0bf2426854
---

{{HTTPSidebar}}

Der HTTP **`Cross-Origin-Embedder-Policy`** (COEP) {{Glossary("response_header", "Antwort-Header")}} konfiguriert die Richtlinie des aktuellen Dokuments zum Laden und Einbetten von Cross-Origin-Ressourcen.

Die Richtlinie zur Entscheidung, ob eine bestimmte Ressource cross-site eingebettet werden kann, kann für diese Ressource mit dem {{HTTPHeader("Cross-Origin-Resource-Policy")}} (CORP)-Header für einen `no-cors`-Fetch oder unter Verwendung von [CORS](/de/docs/Web/HTTP/CORS) definiert werden.
Wenn keine dieser Richtlinien festgelegt ist, können Ressourcen standardmäßig geladen oder in ein Dokument eingebettet werden, als ob sie einen CORP-Wert von `cross-site` hätten.

Der **`Cross-Origin-Embedder-Policy`** erlaubt Ihnen, zu verlangen, dass CORP- oder CORS-Header gesetzt sind, um Cross-Site-Ressourcen in das aktuelle Dokument zu laden.
Sie können die Richtlinie auch so festlegen, dass das Standardverhalten beibehalten wird, oder um die Ressourcen zu laden, aber dabei Anmeldeinformationen zu entfernen, die sonst gesendet werden könnten.
Die Richtlinie gilt für geladene Ressourcen sowie Ressourcen in {{htmlelement("iframe")}}s und verschachtelten Frames.

> [!NOTE]
> Der `Cross-Origin-Embedder-Policy` überschreibt oder beeinflusst nicht das Einbettungsverhalten für eine Ressource, für die CORP oder CORS gesetzt wurde.
> Wenn CORP eine Ressource darauf beschränkt, nur `same-origin` eingebettet zu werden, wird sie ungeachtet des COEP-Wertes cross-origin nicht geladen.

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

### Richtlinien

- `unsafe-none`
  - : Ermöglicht es dem Dokument, Cross-Origin-Ressourcen **ohne** ausdrückliche Erlaubnis durch das CORS-Protokoll oder den {{HTTPHeader("Cross-Origin-Resource-Policy")}}-Header zu laden.
    Dies ist der Standardwert.
- `require-corp`

  - : Ein Dokument kann nur Ressourcen von der gleichen Herkunft laden oder Ressourcen, die ausdrücklich als ladbar von einer anderen Herkunft gekennzeichnet sind.

    Das Laden von Cross-Origin-Ressourcen wird von COEP blockiert, es sei denn:

    - Die Ressource wird im `no-cors`-Modus angefordert und die Antwort enthält einen {{HTTPHeader("Cross-Origin-Resource-Policy")}}-Header, der das Laden in die Dokumentherkunft erlaubt.
    - Die Ressource wird im `cors`-Modus angefordert und die Ressource unterstützt und ist durch CORS erlaubt.
      Dies kann zum Beispiel in HTML mit dem [`crossorigin`](/de/docs/Web/HTML/Attributes/crossorigin) Attribut oder in JavaScript durch das Erstellen einer Anfrage mit [`{mode="cors"}`](/de/docs/Web/API/RequestInit#cors) erreicht werden.

- `credentialless`

  - : Ein Dokument kann Cross-Origin-Ressourcen laden, die in [`no-cors`-Modus](/de/docs/Web/API/Request/mode) angefordert werden, **ohne** ausdrückliche Erlaubnis über den {{HTTPHeader("Cross-Origin-Resource-Policy")}}-Header.
    In diesem Fall werden Anfragen ohne Anmeldeinformationen gesendet: Cookies werden in der Anfrage weggelassen und in der Antwort ignoriert.

    Das Cross-Origin-Ladeverhalten für andere [Anfragemodi](/de/docs/Web/API/Request/mode#cors) ist dasselbe wie für [`require-corp`](#require-corp).
    Zum Beispiel muss eine in `cors`-Modus angeforderte Cross-Origin-Ressource CORS unterstützen (und durch CORS erlaubt sein).

## Beispiele

### Funktionen, die von Cross-Origin-Isolation abhängen

Bestimmte Funktionen, wie der Zugriff auf {{jsxref("SharedArrayBuffer")}}-Objekte oder die Verwendung von [`Performance.now()`](/de/docs/Web/API/Performance/now) mit ungedrosselten Timern, sind nur verfügbar, wenn Ihr Dokument [Cross-Origin isoliert](/de/docs/Web/API/Window/crossOriginIsolated) ist.

Um diese Funktionen in einem Dokument zu verwenden, müssen Sie den COEP-Header mit einem Wert von `require-corp` oder `credentialless` setzen und den {{HTTPHeader("Cross-Origin-Opener-Policy")}}-Header zu `same-origin`.
Zusätzlich darf die Funktion nicht durch {{HTTPHeader("Permissions-Policy/cross-origin-isolated","Permissions-Policy: cross-origin-isolated")}} blockiert werden.

```http
Cross-Origin-Opener-Policy: same-origin
Cross-Origin-Embedder-Policy: require-corp
```

Sie können die [`Window.crossOriginIsolated`](/de/docs/Web/API/Window/crossOriginIsolated) und [`WorkerGlobalScope.crossOriginIsolated`](/de/docs/Web/API/WorkerGlobalScope/crossOriginIsolated) Eigenschaften verwenden, um zu überprüfen, ob die Funktionen in den Kontexten Fenster und Arbeiter eingeschränkt sind:

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

Wenn Sie COEP mit `require-corp` aktivieren und eine Cross-Origin-Ressource einbetten möchten, die [CORS](/de/docs/Web/HTTP/CORS) unterstützt, müssen Sie explizit angeben, dass sie im `cors`-Modus angefordert wird.

Um zum Beispiel ein Bild, das in HTML von einer Drittanbieter-Website deklariert ist und CORS unterstützt, abzurufen, können Sie das [`crossorigin`](/de/docs/Web/HTML/Attributes/crossorigin) Attribut verwenden, damit es im `cors`-Modus angefordert wird:

```html
<img src="https://thirdparty.com/img.png" crossorigin />
```

Sie können ähnlich das [`HTMLScriptElement.crossOrigin`](/de/docs/Web/API/HTMLScriptElement/crossOrigin) Attribut oder einen Fetch mit `{ mode: 'cors' }` verwenden, um eine Datei im CORS-Modus mit JavaScript anzufordern.

Wenn CORS für einige Bilder nicht unterstützt wird, kann ein COEP-Wert von `credentialless` als Alternative verwendet werden, um das Bild ohne ausdrückliches Einverständnis des Cross-Origin-Servers zu laden, auf Kosten der Anforderung ohne Cookies.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTTPHeader("Cross-Origin-Opener-Policy")}}
- [`Window.crossOriginIsolated`](/de/docs/Web/API/Window/crossOriginIsolated) und [`WorkerGlobalScope.crossOriginIsolated`](/de/docs/Web/API/WorkerGlobalScope/crossOriginIsolated)
- [Cross Origin Opener Policy](https://web.dev/articles/why-coop-coep#coep) in _Why you need "cross-origin isolated" for powerful features_ auf web.dev (2020)
- [COOP und COEP erklärt: Artur Janc, Charlie Reis, Anne van Kesteren](https://docs.google.com/document/d/1zDlfvfTJ_9e8Jdc8ehuV4zMEu9ySMCiTGMS9y0GU92k/edit?tab=t.0) (2020)
