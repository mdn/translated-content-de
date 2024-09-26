---
title: Cross-Origin-Embedder-Policy
slug: Web/HTTP/Headers/Cross-Origin-Embedder-Policy
l10n:
  sourceCommit: 45fdc5d8cce894088d4c270b8f160841ecb11a2a
---

{{HTTPSidebar}}

Der HTTP **`Cross-Origin-Embedder-Policy`** (COEP) Response-Header konfiguriert das Einbetten von Ressourcen aus verschiedenen Ursprüngen in das Dokument.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Response header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden header name")}}</th>
      <td>no</td>
    </tr>
  </tbody>
</table>

## Syntax

```http
Cross-Origin-Embedder-Policy: unsafe-none | require-corp | credentialless
```

### Direktiven

- `unsafe-none`
  - : Dies ist der Standardwert. Ermöglicht dem Dokument das Abrufen von Ressourcen aus verschiedenen Ursprüngen, ohne ausdrückliche Erlaubnis über das CORS-Protokoll oder den {{HTTPHeader("Cross-Origin-Resource-Policy")}} Header zu geben.
- `require-corp`
  - : Ein Dokument kann nur Ressourcen vom gleichen Ursprung laden oder Ressourcen, die ausdrücklich als ladbar von einem anderen Ursprung gekennzeichnet sind.
    Wenn eine Ressource aus einem anderen Ursprung CORS unterstützt, muss das [`crossorigin`](/de/docs/Web/HTML/Attributes/crossorigin) Attribut oder der {{HTTPHeader("Cross-Origin-Resource-Policy")}} Header verwendet werden, um sie ohne Blockierung durch COEP zu laden.
- `credentialless`
  - : [no-cors](/de/docs/Web/API/Request/mode) Anfragen für fremde Ressourcen werden ohne Anmeldeinformationen gesendet. Insbesondere bedeutet das, dass Cookies von der Anfrage ausgeschlossen und von der Antwort ignoriert werden. Die Antworten sind **ohne** ausdrückliche Erlaubnis über den {{HTTPHeader("Cross-Origin-Resource-Policy")}} Header zulässig. [Navigate](/de/docs/Web/API/Request/mode) Antworten verhalten sich ähnlich wie der `require-corp` Modus: Sie benötigen den {{HTTPHeader("Cross-Origin-Resource-Policy")}} Response-Header.

## Beispiele

### Bestimmte Funktionen hängen von Cross-Origin-Isolation ab

Sie können nur auf bestimmte Funktionen wie {{jsxref("SharedArrayBuffer")}} Objekte oder {{domxref("Performance.now()")}} mit ungebremsten Timern zugreifen, wenn Ihr Dokument einen COEP-Header mit dem Wert `require-corp` oder `credentialless` gesetzt hat.

```http
Cross-Origin-Embedder-Policy: require-corp
Cross-Origin-Opener-Policy: same-origin
```

Siehe auch den {{HTTPHeader("Cross-Origin-Opener-Policy")}} Header, den Sie ebenfalls setzen müssen.

Um zu überprüfen, ob die Cross-Origin-Isolation erfolgreich war, können Sie die {{domxref("Window.crossOriginIsolated")}} Eigenschaft oder die {{domxref("WorkerGlobalScope.crossOriginIsolated")}} Eigenschaft in Fenster- und Worker-Kontexten testen:

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

Wenn Sie COEP mithilfe von `require-corp` aktivieren und eine Ressource aus einem anderen Ursprung geladen werden muss, muss diese [CORS](/de/docs/Web/HTTP/CORS) unterstützen und Sie müssen die Ressource ausdrücklich als ladbar von einem anderen Ursprung kennzeichnen, um eine Blockierung durch COEP zu vermeiden. Zum Beispiel können Sie das [`crossorigin`](/de/docs/Web/HTML/Attributes/crossorigin) Attribut für dieses Bild von einer Drittanbieter-Website verwenden:

```html
<img src="https://thirdparty.com/img.png" crossorigin />
```

Wenn CORS für einige Bilder nicht unterstützt wird, kann als Alternative ein COEP-Wert von `credentialless` verwendet werden, um das Bild ohne ausdrückliches Einverständnis des fremden Servers zu laden, allerdings auf Kosten einer Anforderung ohne Cookies.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{httpheader("Cross-Origin-Opener-Policy")}}
