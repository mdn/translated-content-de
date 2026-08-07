---
title: sandbox
slug: Mozilla/Add-ons/WebExtensions/manifest.json/sandbox
l10n:
  sourceCommit: ef11240e109e4b39ff9e8cac248d1c7d7c842112
---

<table class="fullwidth-table standard-table">
  <tbody>
    <tr>
      <th scope="row">Typ</th>
      <td><code>Object</code></td>
    </tr>
    <tr>
      <th scope="row">Erforderlich</th>
      <td>Nein</td>
    </tr>
    <tr>
      <th scope="row">Manifest-Version</th>
      <td>2 oder höher</td>
    </tr>
    <tr>
      <th scope="row">Beispiel</th>
      <td>
        <pre class="brush: json">
"sandbox": {
 "pages": ["sandbox.html"]
}</pre>
      </td>
    </tr>
  </tbody>
</table>

Verwenden Sie den Schlüssel `sandbox`, um eine oder mehrere Seiten einer Erweiterung als **isolierte Seiten** zu kennzeichnen.

Isolierte Seiten werden mit einem einzigartigen, {{Glossary("Origin#opaque_origin", "undurchsichtigen Ursprung")}} geladen, anstelle des üblichen `moz-extension://` Ursprungs der Erweiterung. Infolgedessen:

- Isolierte Seiten können nicht auf [WebExtension-APIs](/de/docs/Mozilla/Add-ons/WebExtensions/API) zugreifen. Die globalen Objekte `browser` und `chrome` sind nicht verfügbar.
- Isolierte Seiten können nicht auf andere Seiten innerhalb der Erweiterung zugreifen, noch von diesen erreicht werden. Sie können jedoch indirekt über APIs wie [`Window.postMessage()`](/de/docs/Web/API/Window/postMessage) kommunizieren.
- Web-Plattform-APIs, die an den Ursprung gebunden sind, sind nicht verfügbar. Beispiele hierfür finden Sie im [`allow-same-origin`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/sandbox#allow-same-origin)-Wert der `Content-Security-Policy: sandbox`-Direktive.

Einer isolierten Seite kann eine flexiblere [Content-Security-Policy (CSP)](#content-security-policy_für_isolierte_seiten) zugewiesen werden als dem Rest der Erweiterung. Dies schließt eine CSP ein, die [`eval()`](/de/docs/Web/JavaScript/Reference/Global_Objects/eval) und ähnliche Konstrukte erlaubt, die durch die [Standard-Content-Security-Policy](/de/docs/Mozilla/Add-ons/WebExtensions/Content_Security_Policy#default_content_security_policy) einer Erweiterung blockiert werden. Da eine isolierte Seite keine WebExtension-APIs verwenden oder direkt auf den Rest der Erweiterung zugreifen kann, kann dies ohne Beeinträchtigung der Gesamtsicherheit der Erweiterung erfolgen.

Dies macht den `sandbox`-Schlüssel nützlich für Code, der `eval()` oder ähnliche Konstrukte benötigt. Laden Sie den Code in einer isolierten Seite und verwenden Sie `postMessage()`, um Daten an den Rest der Erweiterung zu senden und Ergebnisse zurückzuerhalten.

## Syntax

`sandbox` ist ein Objekt mit diesen Eigenschaften:

<dl>
  <dt><code>pages</code></dt>
  <dd>
    Erforderlich. Ein Array von Strings. Eine Liste von Pfaden, relativ zu manifest.json, zu den isolierten Seiten der Erweiterung.
  </dd>
  <dt><code>content_security_policy</code></dt>
  <dd>
    Optional. Ein String. <strong>Nur Manifest V2.</strong> Die auf die isolierten Seiten angewendete Content-Security-Policy. Für das Manifest V3-Äquivalent siehe die <code>sandbox</code>-Eigenschaft des <a href="/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/content_security_policy"><code>content_security_policy</code></a>-Schlüssels, beschrieben in <a href="#content_security_policy_for_sandboxed_pages">Content-Security-Policy für isolierte Seiten</a>.
  </dd>
</dl>

## Content-Security-Policy für isolierte Seiten

In Manifest V3 wird die Content-Security-Policy für isolierte Seiten mittels der `sandbox`-Eigenschaft des [`content_security_policy`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/content_security_policy)-Schlüssels gesetzt. **Diese Eigenschaft ist nur für Manifest V3.** In Manifest V2 verwenden Sie stattdessen die `content_security_policy`-Eigenschaft des `sandbox`-Schlüssels.

Wenn keine Policy angegeben wird, erhalten isolierte Seiten diese Standard-Content-Security-Policy:

```plain
sandbox allow-scripts; script-src 'self';
```

Dies isoliert eine isolierte Seite vom Rest der Erweiterung und erlaubt kein `eval()` oder ähnliche Konstrukte.

Um zum Beispiel die CSP zu individualisieren, um `eval()` in sandbox.html zu ermöglichen, fügen Sie `'unsafe-eval'` hinzu, wie folgt:

```json
// Manifest V3
"sandbox": {
  "pages": ["sandbox.html"]
},
"content_security_policy": {
  "sandbox": "sandbox allow-scripts; script-src 'self' 'unsafe-eval';"
}
```

```json
// Manifest V2
"sandbox": {
  "pages": ["sandbox.html"],
  "content_security_policy": "sandbox allow-scripts; script-src 'self' 'unsafe-eval';"
}
```

Jede angepasste Policy für isolierte Seiten muss diese Anforderungen erfüllen:

- Sie muss die {{CSP("sandbox")}}-Direktive enthalten.
- Die {{CSP("sandbox")}}-Direktive darf nicht das `allow-same-origin`-Schlüsselwort enthalten. Andernfalls hätte die Seite Zugriff auf den Ursprung der restlichen Erweiterung, was dem Zweck der Isolierung zuwiderläuft.

## Beste Praktiken

Bei der Verwendung einer isolierten Seite sollten Sie diese besten Praktiken beachten:

- **Validieren Sie Nachrichten.** Wenn eine isolierte Seite mit dem Rest der Erweiterung über [`Window.postMessage()`](/de/docs/Web/API/Window/postMessage) kommuniziert, ist sie denselben Risiken ausgesetzt wie jede andere Verwendung von `postMessage()`. Überprüfen Sie den Ursprung und die Struktur jeder Nachricht, bevor Sie darauf reagieren. Siehe [Sicherheitsbedenken](/de/docs/Web/API/Window/postMessage#security_concerns) in der `postMessage()`-Dokumentation.

  Der `location.origin` einer isolierten Seite spiegelt den `moz-extension://`-Ursprung der Erweiterung wider. Daher kann eine isolierte Seite eine eingehende Nachricht validieren, indem sie überprüft, ob `event.origin` mit `location.origin` übereinstimmt.

  Nachrichten, die _von_ einer isolierten Seite gesendet werden, melden die Serialisierung des undurchsichtigen Ursprungs (`"null"`), der von anderen undurchsichtigen Ursprüngen nicht unterscheidbar ist. Daher kann die Erweiterungsseite, die die Nachrichten empfängt, nicht durch den Ursprung validieren; statt dessen vergleichen Sie `event.source` mit dem `contentWindow` des isolierten Frames.

  Das bedeutet, dass es beim Posten einer Nachricht _an_ eine isolierte Seite keinen spezifischen Ursprung gibt, auf den gezielt werden kann, da ihr undurchsichtiger Ursprung nicht als Zielursprung-String ausgedrückt werden kann. Die übliche `postMessage()`-Best Practice, einen spezifischen Ursprung anzuvisieren, kann hier nicht verfolgt werden; verwenden Sie stattdessen `"*"`. Es gibt keine Alternative, bis [dieses Spezifikationsproblem](https://github.com/whatwg/html/issues/3585) gelöst ist.

- **Führen Sie keinen nicht vertrauenswürdigen Code aus.** Obwohl eine isolierte Seite keine WebExtension-APIs verwenden kann, identifiziert ihre `moz-extension://`-URL die Erweiterung. Daher könnte nicht vertrauenswürdiger Code, der in der Sandbox ausgeführt wird, verwendet werden, um die Erweiterung oder ihren Benutzer zu identifizieren.
- **Entspannen Sie die CSP nicht nur um WebAssembly zu aktivieren.** Wenn WebAssembly-Unterstützung der einzige Grund für die Verwendung einer isolierten Seite ist, fügen Sie `'wasm-unsafe-eval'` zur [`content_security_policy`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/content_security_policy) der Erweiterung hinzu, anstatt die CSP einer isolierten Seite zu lockern.

## Beispiel

Dieses Beispiel wertet einen mathematischen Ausdruck in einer isolierten Seite aus und gibt das Ergebnis an das Popup der Erweiterung zurück.

`manifest.json`:

```json
{
  "manifest_version": 3,
  "name": "Sandbox calculator example",
  "version": "1.0",
  "action": {
    "default_popup": "popup.html"
  },
  "sandbox": {
    "pages": ["sandbox.html"]
  },
  "content_security_policy": {
    "sandbox": "sandbox allow-scripts; script-src 'self' 'unsafe-eval';"
  }
}
```

`sandbox.html`:

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <script src="sandbox.js"></script>
  </head>
  <body></body>
</html>
```

`sandbox.js` horcht auf Nachrichten vom Popup, wertet den Ausdruck aus und sendet das Ergebnis zurück. Es validiert die Nachricht, indem es `event.origin` mit seinem `location.origin` vergleicht, welcher den Ursprung der Erweiterung widerspiegelt:

```js
window.addEventListener("message", (event) => {
  if (event.origin !== location.origin) {
    // Reject messages not coming from the extension.
    return;
  }
  event.source.postMessage(eval(event.data), event.origin);
});
```

`popup.html` bettet die isolierte Seite nicht direkt ein; das iframe wird von `popup.js` erstellt:

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
  </head>
  <body>
    <input id="expression" value="1 + 2" />
    <button id="calculate">Calculate</button>
    <div id="result"></div>
    <script src="popup.js"></script>
  </body>
</html>
```

`popup.js` erstellt das isolierte iframe und fügt einen Nachrichtenlistener hinzu, bevor es an das Dokument angefügt wird, damit keine Antwort verpasst wird:

```js
async function runCalculation(expression) {
  const iframe = document.createElement("iframe");
  iframe.src = "sandbox.html";
  iframe.hidden = true;

  await new Promise((resolve) => {
    iframe.addEventListener("load", resolve, { once: true });
    document.body.append(iframe);
  });

  const reply = new Promise((resolve) => {
    const handleMessage = (event) => {
      if (event.source !== iframe.contentWindow) {
        return;
      }
      window.removeEventListener("message", handleMessage);
      resolve(event.data);
    };
    window.addEventListener("message", handleMessage);
  });

  // Best practice is to target a specific origin instead of "*",
  // but a sandboxed page has an opaque origin ("null"), so there's
  // no specific origin to target.
  iframe.contentWindow.postMessage(expression, "*");
  const result = await reply;

  iframe.remove();
  return result;
}

document.getElementById("calculate").addEventListener("click", async () => {
  const expression = document.getElementById("expression").value;
  document.getElementById("result").textContent =
    await runCalculation(expression);
});
```

## Browser-Kompatibilität

{{Compat}}
