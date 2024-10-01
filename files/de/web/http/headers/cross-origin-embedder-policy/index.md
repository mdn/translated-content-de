---
title: Cross-Origin-Embedder-Policy
slug: Web/HTTP/Headers/Cross-Origin-Embedder-Policy
l10n:
  sourceCommit: 45fdc5d8cce894088d4c270b8f160841ecb11a2a
---

{{HTTPSidebar}}

Der HTTP **`Cross-Origin-Embedder-Policy`** (COEP)-Antwortheader konfiguriert das Einbetten von Ressourcen aus verschiedenen Ursprüngen (Cross-Origin) in das Dokument.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Headertyp</th>
      <td>{{Glossary("Response_header", "Antwortheader")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_header_name", "Verbotener Headername")}}</th>
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
  - : Dies ist der Standardwert. Ermöglicht es dem Dokument, Ressourcen aus verschiedenen Ursprüngen zu laden, ohne explizite Erlaubnis über das CORS-Protokoll oder den {{HTTPHeader("Cross-Origin-Resource-Policy")}}-Header zu geben.
- `require-corp`
  - : Ein Dokument kann nur Ressourcen vom gleichen Ursprung oder Ressourcen laden, die ausdrücklich als ladbar von einem anderen Ursprung gekennzeichnet sind. Wenn eine Ressource aus einem anderen Ursprung CORS unterstützt, muss das [`crossorigin`](/de/docs/Web/HTML/Attributes/crossorigin)-Attribut oder der {{HTTPHeader("Cross-Origin-Resource-Policy")}}-Header verwendet werden, um sie ohne Blockierung durch COEP zu laden.
- `credentialless`
  - : [no-cors](/de/docs/Web/API/Request/mode) Cross-Origin-Anfragen werden ohne Anmeldedaten gesendet. Insbesondere bedeutet dies, dass Cookies von der Anfrage ausgeschlossen und von der Antwort ignoriert werden. Die Antworten sind **ohne** eine ausdrückliche Genehmigung über den {{HTTPHeader("Cross-Origin-Resource-Policy")}}-Header erlaubt. [Navigieren](/de/docs/Web/API/Request/mode)-Antworten verhalten sich ähnlich wie der `require-corp`-Modus: Sie erfordern den {{HTTPHeader("Cross-Origin-Resource-Policy")}}-Antwortheader.

## Beispiele

### Bestimmte Funktionen hängen von Cross-Origin-Isolation ab

Sie können nur auf bestimmte Funktionen wie {{jsxref("SharedArrayBuffer")}}-Objekte oder [`Performance.now()`](/de/docs/Web/API/Performance/now) mit ungedrosselten Timern zugreifen, wenn Ihr Dokument einen COEP-Header mit dem Wert `require-corp` oder `credentialless` gesetzt hat.

```http
Cross-Origin-Embedder-Policy: require-corp
Cross-Origin-Opener-Policy: same-origin
```

Siehe auch den {{HTTPHeader("Cross-Origin-Opener-Policy")}}-Header, den Sie ebenfalls setzen müssen.

Um zu überprüfen, ob die Cross-Origin-Isolation erfolgreich war, können Sie die Eigenschaften [`Window.crossOriginIsolated`](/de/docs/Web/API/Window/crossOriginIsolated) oder [`WorkerGlobalScope.crossOriginIsolated`](/de/docs/Web/API/WorkerGlobalScope/crossOriginIsolated) testen, die in Fenster- und Worker-Kontexten verfügbar sind:

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

Wenn Sie COEP mit `require-corp` aktivieren und eine cross-origin Ressource laden müssen, muss sie [CORS](/de/docs/Web/HTTP/CORS) unterstützen, und Sie müssen die Ressource ausdrücklich als ladbar von einem anderen Ursprung kennzeichnen, um Blockierungen durch COEP zu vermeiden. Zum Beispiel können Sie das [`crossorigin`](/de/docs/Web/HTML/Attributes/crossorigin)-Attribut für dieses Bild von einer Drittanbieter-Website verwenden:

```html
<img src="https://thirdparty.com/img.png" crossorigin />
```

Wenn CORS für einige Bilder nicht unterstützt wird, kann ein COEP-Wert von `credentialless` als Alternative verwendet werden, um das Bild ohne ausdrückliches Opt-In vom cross-origin Server zu laden, auf Kosten des Anforderungsversuchs ohne Cookies.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{httpheader("Cross-Origin-Opener-Policy")}}
