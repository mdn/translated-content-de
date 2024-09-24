---
title: Cross-Origin-Embedder-Policy
slug: Web/HTTP/Headers/Cross-Origin-Embedder-Policy
l10n:
  sourceCommit: 45fdc5d8cce894088d4c270b8f160841ecb11a2a
---

{{HTTPSidebar}}

Der HTTP **`Cross-Origin-Embedder-Policy`** (COEP)-Antwortheader konfiguriert das Einbetten von Cross-Origin-Ressourcen in das Dokument.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Headertyp</th>
      <td>{{Glossary("Response header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden header name")}}</th>
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
  - : Dies ist der Standardwert. Erlaubt es dem Dokument, Cross-Origin-Ressourcen abzurufen, ohne ausdrückliche Erlaubnis über das CORS-Protokoll oder den {{HTTPHeader("Cross-Origin-Resource-Policy")}}-Header zu geben.
- `require-corp`
  - : Ein Dokument kann nur Ressourcen von derselben Herkunft oder Ressourcen laden, die ausdrücklich als von einer anderen Herkunft ladbar markiert sind. Wenn eine Cross-Origin-Ressource CORS unterstützt, muss das [`crossorigin`](/de/docs/Web/HTML/Attributes/crossorigin)-Attribut oder der {{HTTPHeader("Cross-Origin-Resource-Policy")}}-Header verwendet werden, um sie ohne Blockierung durch COEP zu laden.
- `credentialless`
  - : [no-cors](/de/docs/Web/API/Request/mode) Cross-Origin-Anfragen werden ohne Anmeldedaten gesendet. Insbesondere bedeutet dies, dass Cookies von der Anfrage ausgeschlossen und von der Antwort ignoriert werden. Die Antworten sind **ohne** ausdrückliche Erlaubnis über den {{HTTPHeader("Cross-Origin-Resource-Policy")}}-Header erlaubt. [Navigate](/de/docs/Web/API/Request/mode)-Antworten verhalten sich ähnlich wie der `require-corp`-Modus: Sie erfordern den {{HTTPHeader("Cross-Origin-Resource-Policy")}}-Antwortheader.

## Beispiele

### Bestimmte Funktionen hängen von der Cross-Origin-Isolation ab

Sie können nur auf bestimmte Funktionen wie {{jsxref("SharedArrayBuffer")}}-Objekte oder {{domxref("Performance.now()")}} mit nicht gedrosselten Timern zugreifen, wenn Ihr Dokument einen COEP-Header mit einem Wert von `require-corp` oder `credentialless` hat.

```http
Cross-Origin-Embedder-Policy: require-corp
Cross-Origin-Opener-Policy: same-origin
```

Siehe auch den {{HTTPHeader("Cross-Origin-Opener-Policy")}}-Header, den Sie ebenfalls setzen müssen.

Um zu überprüfen, ob die Cross-Origin-Isolation erfolgreich war, können Sie die {{domxref("Window.crossOriginIsolated")}}-Eigenschaft oder die {{domxref("WorkerGlobalScope.crossOriginIsolated")}}-Eigenschaft verwenden, die in Fenster- und Worker-Kontexten verfügbar ist:

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

Wenn Sie COEP mit `require-corp` aktivieren und eine Cross-Origin-Ressource geladen werden muss, muss diese [CORS](/de/docs/Web/HTTP/CORS) unterstützen und Sie müssen die Ressource ausdrücklich als ladbar von einer anderen Herkunft kennzeichnen, um eine Blockierung durch COEP zu vermeiden. Zum Beispiel können Sie das [`crossorigin`](/de/docs/Web/HTML/Attributes/crossorigin)-Attribut für dieses Bild von einer Drittanbieter-Seite verwenden:

```html
<img src="https://thirdparty.com/img.png" crossorigin />
```

Wenn CORS für einige Bilder nicht unterstützt wird, kann ein COEP-Wert von `credentialless` als Alternative verwendet werden, um das Bild ohne ausdrückliche Zustimmung vom Cross-Origin-Server zu laden, allerdings auf Kosten des Abrufs ohne Cookies.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{httpheader("Cross-Origin-Opener-Policy")}}
