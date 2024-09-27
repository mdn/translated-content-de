---
title: Cross-Origin-Embedder-Policy
slug: Web/HTTP/Headers/Cross-Origin-Embedder-Policy
l10n:
  sourceCommit: 45fdc5d8cce894088d4c270b8f160841ecb11a2a
---

{{HTTPSidebar}}

Der HTTP **`Cross-Origin-Embedder-Policy`** (COEP) Antwort-Header konfiguriert das Einbetten von Cross-Origin-Ressourcen in das Dokument.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Headertyp</th>
      <td>[Antwort-Header](/de/docs/Glossary/Response_header)</td>
    </tr>
    <tr>
      <th scope="row">[Verbotener Headername](/de/docs/Glossary/Forbidden_header_name)</th>
      <td>nein</td>
    </tr>
  </tbody>
</table>

## Syntax

```http
Cross-Origin-Embedder-Policy: unsafe-none | require-corp | credentialless
```

### Direktiven

- `unsafe-none`
  - : Dies ist der Standardwert. Erlaubt dem Dokument, Cross-Origin-Ressourcen zu laden, ohne dass eine ausdrückliche Erlaubnis über das CORS-Protokoll oder den {{HTTPHeader("Cross-Origin-Resource-Policy")}} Header erforderlich ist.
- `require-corp`
  - : Ein Dokument kann nur Ressourcen von der gleichen Herkunft oder Ressourcen laden, die explizit als von einer anderen Herkunft ladbar markiert sind. Wenn eine Cross-Origin-Ressource CORS unterstützt, muss das [`crossorigin`](/de/docs/Web/HTML/Attributes/crossorigin) Attribut oder der {{HTTPHeader("Cross-Origin-Resource-Policy")}} Header verwendet werden, um sie ohne Blockierung durch COEP zu laden.
- `credentialless`
  - : [no-cors](/de/docs/Web/API/Request/mode) Cross-Origin-Anfragen werden ohne Anmeldedaten gesendet. Insbesondere bedeutet dies, dass Cookies von der Anfrage ausgeschlossen und von der Antwort ignoriert werden. Die Antworten sind **ohne** ausdrückliche Erlaubnis über den {{HTTPHeader("Cross-Origin-Resource-Policy")}} Header erlaubt. [Navigate](/de/docs/Web/API/Request/mode) Antworten verhalten sich ähnlich wie im `require-corp` Modus: Sie erfordern den {{HTTPHeader("Cross-Origin-Resource-Policy")}} Antwort-Header.

## Beispiele

### Bestimmte Funktionen erfordern Cross-Origin-Isolation

Sie können nur auf bestimmte Funktionen wie {{jsxref("SharedArrayBuffer")}} Objekte oder [`Performance.now()`](/de/docs/Web/API/Performance/now) mit nicht gedrosselten Timern zugreifen, wenn Ihr Dokument einen COEP-Header mit einem Wert von `require-corp` oder `credentialless` gesetzt hat.

```http
Cross-Origin-Embedder-Policy: require-corp
Cross-Origin-Opener-Policy: same-origin
```

Siehe auch den {{HTTPHeader("Cross-Origin-Opener-Policy")}} Header, den Sie ebenfalls setzen müssen.

Um zu überprüfen, ob die Cross-Origin-Isolation erfolgreich war, können Sie gegen die [`Window.crossOriginIsolated`](/de/docs/Web/API/Window/crossOriginIsolated) Eigenschaft oder die [`WorkerGlobalScope.crossOriginIsolated`](/de/docs/Web/API/WorkerGlobalScope/crossOriginIsolated) Eigenschaft testen, die in Fenster- und Worker-Kontexten verfügbar sind:

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

### COEP-Blockierung mit CORS vermeiden

Wenn Sie COEP mit `require-corp` aktivieren und eine Cross-Origin-Ressource geladen werden muss, muss sie [CORS](/de/docs/Web/HTTP/CORS) unterstützen, und Sie müssen die Ressource ausdrücklich als von einer anderen Herkunft ladbar kennzeichnen, um eine Blockierung durch COEP zu vermeiden. Zum Beispiel können Sie das [`crossorigin`](/de/docs/Web/HTML/Attributes/crossorigin) Attribut für dieses Bild von einer Drittanbieter-Website verwenden:

```html
<img src="https://thirdparty.com/img.png" crossorigin />
```

Wenn für einige Bilder CORS nicht unterstützt wird, kann ein COEP-Wert von `credentialless` als Alternative verwendet werden, um das Bild ohne jegliches ausdrückliches Opt-in vom Cross-Origin-Server zu laden, allerdings auf Kosten einer Anfrage ohne Cookies.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{httpheader("Cross-Origin-Opener-Policy")}}
