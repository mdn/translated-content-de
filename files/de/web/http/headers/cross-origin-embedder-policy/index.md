---
title: Cross-Origin-Embedder-Policy
slug: Web/HTTP/Headers/Cross-Origin-Embedder-Policy
l10n:
  sourceCommit: 6d6c7276af1aa286330458c3e84ddc7ea0b435ac
---

{{HTTPSidebar}}

Der HTTP **`Cross-Origin-Embedder-Policy`** (COEP) {{Glossary("response_header", "Antwort-Header")}} konfiguriert das Einbetten von Cross-Origin-Ressourcen in das Dokument.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
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
  - : Dies ist der Standardwert. Erlaubt dem Dokument, Cross-Origin-Ressourcen abzurufen, ohne explizite Erlaubnis über das CORS-Protokoll oder den {{HTTPHeader("Cross-Origin-Resource-Policy")}}-Header zu geben.
- `require-corp`
  - : Ein Dokument kann nur Ressourcen von derselben Herkunft oder Ressourcen laden, die ausdrücklich als von einer anderen Herkunft ladbar gekennzeichnet sind.
    Wenn eine Cross-Origin-Ressource CORS unterstützt, muss das [`crossorigin`](/de/docs/Web/HTML/Attributes/crossorigin)-Attribut oder der {{HTTPHeader("Cross-Origin-Resource-Policy")}}-Header verwendet werden, um zu verhindern, dass sie durch COEP blockiert wird.
- `credentialless`
  - : [no-cors](/de/docs/Web/API/Request/mode) Cross-Origin-Anfragen werden ohne Anmeldeinformationen gesendet. Insbesondere bedeutet dies, dass Cookies von der Anfrage weggelassen und von der Antwort ignoriert werden. Die Antworten sind **ohne** explizite Erlaubnis über den {{HTTPHeader("Cross-Origin-Resource-Policy")}}-Header erlaubt. [Navigations](/de/docs/Web/API/Request/mode)-Antworten verhalten sich ähnlich wie im `require-corp`-Modus: Sie erfordern den {{HTTPHeader("Cross-Origin-Resource-Policy")}}-Antwort-Header.

## Beispiele

### Funktionen, die von Cross-Origin-Isolation abhängig sind

Bestimmte Funktionen, wie der Zugriff auf {{jsxref("SharedArrayBuffer")}}-Objekte oder die Verwendung von [`Performance.now()`](/de/docs/Web/API/Performance/now) mit nicht gedrosselten Timern, sind nur verfügbar, wenn Ihr Dokument [cross-origin isoliert](/de/docs/Web/API/Window/crossOriginIsolated) ist.

Um diese Funktionen in einem Dokument verwenden zu können, müssen Sie den COEP-Header mit einem Wert von `require-corp` oder `credentialless` setzen und den {{HTTPHeader("Cross-Origin-Opener-Policy")}}-Header auf `same-origin`.
Zusätzlich darf die Funktion nicht durch {{HTTPHeader("Permissions-Policy/cross-origin-isolated","Permissions-Policy: cross-origin-isolated")}} blockiert werden.

```http
Cross-Origin-Opener-Policy: same-origin
Cross-Origin-Embedder-Policy: require-corp
```

Sie können die Eigenschaften [`Window.crossOriginIsolated`](/de/docs/Web/API/Window/crossOriginIsolated) und [`WorkerGlobalScope.crossOriginIsolated`](/de/docs/Web/API/WorkerGlobalScope/crossOriginIsolated) verwenden, um zu überprüfen, ob die Funktionen in Fenster- und Worker-Kontexten jeweils eingeschränkt sind:

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

Wenn Sie COEP unter Verwendung von `require-corp` aktivieren und eine Cross-Origin-Ressource geladen werden muss, muss sie [CORS](/de/docs/Web/HTTP/CORS) unterstützen und Sie müssen die Ressource ausdrücklich als von einer anderen Herkunft ladbar kennzeichnen, um eine Blockierung durch COEP zu vermeiden. Zum Beispiel können Sie das [`crossorigin`](/de/docs/Web/HTML/Attributes/crossorigin)-Attribut für dieses Bild von einer Drittanbieter-Site verwenden:

```html
<img src="https://thirdparty.com/img.png" crossorigin />
```

Wenn für einige Bilder CORS nicht unterstützt wird, kann ein COEP-Wert von `credentialless` als Alternative verwendet werden, um das Bild ohne ausdrückliches Opt-in vom Cross-Origin-Server zu laden, allerdings auf Kosten des Anforderns ohne Cookies.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTTPHeader("Cross-Origin-Opener-Policy")}}
