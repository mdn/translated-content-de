---
title: Cross-Origin-Embedder-Policy
slug: Web/HTTP/Headers/Cross-Origin-Embedder-Policy
l10n:
  sourceCommit: 92b03e46cef6be37de60799363e3e33e3415b491
---

{{HTTPSidebar}}

Der HTTP **`Cross-Origin-Embedder-Policy`** (COEP) {{Glossary("response_header", "Antwort-Header")}} konfiguriert das Einbetten von Cross-Origin-Ressourcen in das Dokument.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Headertyp</th>
      <td>{{Glossary("Response_header", "Antwort-Header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_header_name", "Verbotener Header-Name")}}</th>
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
  - : Dies ist der Standardwert. Erlaubt es dem Dokument, Cross-Origin-Ressourcen zu laden, ohne dass eine explizite Erlaubnis durch das CORS-Protokoll oder den {{HTTPHeader("Cross-Origin-Resource-Policy")}}-Header erteilt wird.
- `require-corp`
  - : Ein Dokument kann nur Ressourcen von demselben Ursprung oder Ressourcen laden, die explizit als von einem anderen Ursprung ladbar markiert sind.
    Wenn eine Cross-Origin-Ressource CORS unterstützt, muss das [`crossorigin`](/de/docs/Web/HTML/Attributes/crossorigin)-Attribut oder der {{HTTPHeader("Cross-Origin-Resource-Policy")}}-Header verwendet werden, um sie ohne Blockierung durch COEP zu laden.
- `credentialless`
  - : [no-cors](/de/docs/Web/API/Request/mode) Cross-Origin-Anfragen werden ohne Anmeldedaten gesendet. Insbesondere bedeutet dies, dass Cookies von der Anfrage weggelassen und von der Antwort ignoriert werden. Die Antworten sind **ohne** eine explizite Erlaubnis über den {{HTTPHeader("Cross-Origin-Resource-Policy")}}-Header erlaubt. [Navigate](/de/docs/Web/API/Request/mode)-Antworten verhalten sich ähnlich wie der `require-corp`-Modus: Sie erfordern den {{HTTPHeader("Cross-Origin-Resource-Policy")}}-Antwort-Header.

## Beispiele

### Bestimmte Funktionen erfordern Cross-Origin-Isolation

Sie können nur auf bestimmte Funktionen wie {{jsxref("SharedArrayBuffer")}}-Objekte oder [`Performance.now()`](/de/docs/Web/API/Performance/now) mit nicht gedrosselten Timern zugreifen, wenn Ihr Dokument einen COEP-Header mit einem Wert von `require-corp` oder `credentialless` gesetzt hat.

```http
Cross-Origin-Embedder-Policy: require-corp
Cross-Origin-Opener-Policy: same-origin
```

Siehe auch den {{HTTPHeader("Cross-Origin-Opener-Policy")}}-Header, den Sie ebenfalls einstellen müssen.

Um zu überprüfen, ob die Cross-Origin-Isolation erfolgreich war, können Sie die [`Window.crossOriginIsolated`](/de/docs/Web/API/Window/crossOriginIsolated)-Eigenschaft oder die [`WorkerGlobalScope.crossOriginIsolated`](/de/docs/Web/API/WorkerGlobalScope/crossOriginIsolated)-Eigenschaft verwenden, die in Fenster- und Worker-Kontexten verfügbar ist:

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

### Vermeidung von COEP-Blockierungen mit CORS

Wenn Sie COEP mit `require-corp` aktivieren und eine Cross-Origin-Ressource geladen werden muss, muss diese CORS unterstützen und Sie müssen die Ressource explizit als von einem anderen Ursprung ladbar markieren, um Blockierungen durch COEP zu vermeiden. Zum Beispiel können Sie das [`crossorigin`](/de/docs/Web/HTML/Attributes/crossorigin)-Attribut für dieses Bild von einer Drittanbieter-Website verwenden:

```html
<img src="https://thirdparty.com/img.png" crossorigin />
```

Wenn CORS für einige Bilder nicht unterstützt wird, kann ein COEP-Wert von `credentialless` als Alternative verwendet werden, um das Bild ohne jegliche explizite Zustimmung des Cross-Origin-Servers zu laden, allerdings auf Kosten des Verzichts auf Cookies bei der Anfrage.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTTPHeader("Cross-Origin-Opener-Policy")}}
