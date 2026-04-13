---
title: "Window: postMessage() Methode"
short-title: postMessage()
slug: Web/API/Window/postMessage
l10n:
  sourceCommit: ff81a4e4cb740060aca2df256ce2e07d1e2c0b4e
---

{{ApiRef("HTML DOM")}}

Die **`window.postMessage()`** Methode ermöglicht eine sichere Kommunikation zwischen verschiedenen Ursprüngen von [`Window`](/de/docs/Web/API/Window) Objekten; z. B. zwischen einer Seite und einem Popup, das sie geöffnet hat, oder zwischen einer Seite und einem eingebetteten iframe.

Normalerweise ist es Skripten auf verschiedenen Seiten nur dann gestattet, aufeinander zuzugreifen, wenn die Seiten denselben [Ursprung](/de/docs/Web/API/Location/origin) (bekannt als "[Same-Origin-Policy](/de/docs/Web/Security/Defenses/Same-origin_policy)") teilen. `window.postMessage()` bietet einen kontrollierten Mechanismus, um diese Einschränkung sicher zu umgehen (wenn es richtig verwendet wird).

Darüber hinaus muss ein zugreifendes Skript das Fensterobjekt des aufgerufenen Dokuments vorher erhalten haben. Dies kann durch Methoden wie [`window.open()`](/de/docs/Web/API/Window/open) für Pop-ups oder [`iframe.contentWindow`](/de/docs/Web/API/HTMLIFrameElement/contentWindow) für iframes geschehen.

Allgemein kann ein Fenster eine Referenz zu einem anderen erhalten (z. B. via `targetWindow = window.opener`) und dann ein [`MessageEvent`](/de/docs/Web/API/MessageEvent) mit `targetWindow.postMessage()` auf es schicken. Das empfangende Fenster kann dann [dieses Ereignis behandeln](/de/docs/Web/API/Document_Object_Model/Events#registering_event_handlers), wie es benötigt wird. Die an `window.postMessage()` übergebenen Argumente (d.h. die "Nachricht") werden [dem empfangenden Fenster über das Ereignisobjekt zugänglich gemacht](#das_gesendete_ereignis).

## Syntax

```js-nolint
postMessage(message)
postMessage(message, targetOrigin)
postMessage(message, targetOrigin, transfer)

postMessage(message, options)
```

### Parameter

- `message`
  - : Daten, die an das andere Fenster gesendet werden sollen. Die Daten werden mit dem [Structured Clone Algorithm](/de/docs/Web/API/Web_Workers_API/Structured_clone_algorithm) serialisiert. Das bedeutet, dass Sie eine Vielzahl von Datenobjekten sicher an das Ziel-Fenster übergeben können, ohne sie selbst serialisieren zu müssen.
- `targetOrigin` {{optional_Inline}}
  - : Gibt den {{Glossary("Origin", "Ursprung")}} an, den das empfangende Fenster haben muss, um das Ereignis zu erhalten. Damit das Ereignis gesendet werden kann, muss der Ursprung genau übereinstimmen (einschließlich Schema, Hostname und Port). Wenn er weggelassen wird, ist standardmäßig `"/"` der Ursprung, der die Methode aufruft. Dieser Mechanismus bietet Kontrolle darüber, wohin Nachrichten gesendet werden; z. B. wäre es absolut kritisch, dass dieses Argument eine URI ist, deren Ursprung mit dem des beabsichtigten Empfängers der Nachricht übereinstimmt, um zu verhindern, dass ein bösartiger Dritter das Passwort abfängt. `*` kann auch angegeben werden, was bedeutet, dass die Nachricht an einen Listener mit beliebigem Ursprung gesendet werden kann.
    > [!NOTE]
    > Geben Sie immer einen spezifischen `targetOrigin` an, nicht `*`, wenn Sie wissen, wo sich das Dokument des anderen Fensters befinden sollte. Wenn Sie keinen spezifischen Zielort angeben, könnten Daten an eine bösartige Website offengelegt werden.
    >
    > Da [`data:`](/de/docs/Web/URI/Reference/Schemes/data) URLs undurchsichtige Ursprünge haben, müssen Sie `"*"` angeben, um Nachrichten an einen Kontext mit einer `data:` URL zu senden.
- `transfer` {{optional_inline}}
  - : Ein optionales [Array](/de/docs/Web/JavaScript/Reference/Global_Objects/Array) von [übertragbaren Objekten](/de/docs/Web/API/Web_Workers_API/Transferable_objects), deren Eigentum übertragen werden soll. Das Eigentum dieser Objekte wird an die Zielseite übergeben und sie sind auf der sendenden Seite nicht mehr verwendbar. Diese übertragbaren Objekte werden nicht automatisch gesendet; sie müssen entweder in der Nachricht enthalten sein oder dem Empfänger auf andere Weise zugänglich gemacht werden, wie z. B. durch [`MessagePort`](/de/docs/Web/API/MessagePort) über [`MessageEvent.ports`](/de/docs/Web/API/MessageEvent/ports).
- `options` {{optional_inline}}
  - : Ein optionales Objekt, das die folgenden Eigenschaften enthält:
    - `transfer` {{optional_inline}}
      - : Hat die gleiche Bedeutung wie der `transfer` Parameter.
    - `targetOrigin` {{optional_inline}}
      - : Hat die gleiche Bedeutung wie der `targetOrigin` Parameter.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Das gesendete Ereignis

Ein `window` kann nach versendeten Nachrichten lauschen, indem das folgende JavaScript ausgeführt wird:

```js
window.addEventListener("message", (event) => {
  if (event.origin !== "http://example.org:8080") return;

  // …
});
```

Die Eigenschaften der gesendeten Nachricht sind:

- `data`
  - : Das Objekt, das vom anderen Fenster übergeben wird.
- `origin`
  - : Der {{Glossary("origin", "Ursprung")}} des Fensters, das die Nachricht gesendet hat, zum Zeitpunkt des Aufrufs von `postMessage`. Dieser String ist die Verkettung des Protokolls und "://", des Hostnamens, falls einer vorhanden ist, und ":" gefolgt von einer Portnummer, falls ein Port vorhanden ist und sich vom Standardport für das gegebene Protokoll unterscheidet. Beispiele für typische Ursprünge sind `https://example.org` (was auf Port `443` hinweist), `http://example.net` (was auf Port `80` hinweist) und `http://example.com:8080`. Beachten Sie, dass dieser Ursprung _nicht_ garantiert der aktuelle oder zukünftige Ursprung dieses Fensters ist, das möglicherweise zu einem anderen Ort navigiert wurde, seit `postMessage` aufgerufen wurde.
- `source`
  - : Eine Referenz auf das [`window`](/de/docs/Web/API/Window) Objekt, das die Nachricht gesendet hat; Sie können dies nutzen, um eine Zwei-Wege-Kommunikation zwischen zwei Fenstern mit verschiedenen Ursprüngen herzustellen.

## Sicherheitsbedenken

**Wenn Sie nicht erwarten, Nachrichten von anderen Websites zu erhalten, fügen Sie _keine_ Event Listener für `message` Ereignisse hinzu.** Dies ist eine völlig narrensichere Methode, um Sicherheitsprobleme zu vermeiden.

Wenn Sie erwarten, Nachrichten von anderen Websites zu erhalten, **verifizieren Sie immer die Identität des Absenders** mithilfe der `origin` und möglicherweise `source` Eigenschaften. Jedes Fenster (einschließlich, zum Beispiel, `http://evil.example.com`) kann eine Nachricht an ein anderes Fenster innerhalb der iframe-Hierarchie vom obersten bis zu jedem darunter liegenden iframe des aktuellen Dokuments senden. Auch wenn Sie die Identität überprüft haben, **sollten Sie immer die Syntax der empfangenen Nachricht verifizieren**. Andernfalls könnte ein Sicherheitsloch in der Website, der Sie vertrauten, um nur vertrauenswürdige Nachrichten zu senden, ein Cross-Site-Scripting-Loch in Ihrer Website öffnen.

**Geben Sie immer einen genauen Zielursprung an, nicht `*`, wenn Sie `postMessage` verwenden, um Daten an andere Fenster zu senden.** Eine bösartige Website kann ohne Ihr Wissen den Ort des Fensters ändern und somit die Daten abfangen, die mit `postMessage` gesendet wurden.

### Sicheres Messaging mit gemeinsamem Speicher

Wenn `postMessage()` bei der Verwendung von {{jsxref("SharedArrayBuffer")}} Objekten einen Fehler auslöst, müssen Sie möglicherweise sicherstellen, dass Ihre Website korrekt standortübergreifend isoliert wurde. Gemeinsam genutzter Speicher ist hinter zwei HTTP-Headern geschützt:

- {{HTTPHeader("Cross-Origin-Opener-Policy")}} mit `same-origin` als Wert (schützt Ihre Ursprünge vor Angreifern)
- {{HTTPHeader("Cross-Origin-Embedder-Policy")}} mit `require-corp` oder `credentialless` als Wert (schützt Opfer vor Ihren Ursprüngen)

```http
Cross-Origin-Opener-Policy: same-origin
Cross-Origin-Embedder-Policy: require-corp
```

Um zu überprüfen, ob die standortübergreifende Isolation erfolgreich war, können Sie die [`Window.crossOriginIsolated`](/de/docs/Web/API/Window/crossOriginIsolated) Eigenschaft testen, die in Fenster- und Worker-Kontexten verfügbar ist:

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

## Beispiele

```js
/*
 * In window A's scripts, with A being on http://example.com:8080:
 */

const popup = window.open(/* popup details */);

// When the popup has fully loaded, if not blocked by a popup blocker:

// This does nothing, assuming the window hasn't changed its location.
popup.postMessage(
  "The user is 'bob' and the password is 'secret'",
  "https://secure.example.net",
);

// This will successfully queue a message to be dispatched to the popup, assuming
// the window hasn't changed its location.
popup.postMessage("hello there!", "http://example.com");

window.addEventListener("message", (event) => {
  // Do we trust the sender of this message? (might be
  // different from what we originally opened, for example).
  if (event.origin !== "http://example.com") return;

  // event.source is popup
  // event.data is "hi there yourself! the secret response is: rheeeeet!"
});
```

```js
/*
 * In the popup's scripts, running on http://example.com:
 */

// Called sometime after postMessage is called
window.addEventListener("message", (event) => {
  // Do we trust the sender of this message?
  if (event.origin !== "http://example.com:8080") return;

  // event.source is window.opener
  // event.data is "hello there!"

  // Assuming you've verified the origin of the received message (which
  // you must do in any case), a convenient idiom for replying to a
  // message is to call postMessage on event.source and provide
  // event.origin as the targetOrigin.
  event.source.postMessage(
    "hi there yourself! the secret response is: rheeeeet!",
    event.origin,
  );
});
```

### Anmerkungen

Jedes Skript in einem Dokument in einem Fenster kann anfordern, eine Nachricht an ein Dokument in einem anderen Fenster zu senden, dessen Fensterobjekt es erhalten hat, indem es `.postMessage()` auf diesem Fensterobjekt aufruft. Folglich muss jeder Event Listener, der verwendet wird, um Nachrichten zu empfangen, **zuerst die Identität des Absenders der Nachricht überprüfen**, indem die `origin` und möglicherweise `source` Eigenschaften verwendet werden. Dies kann nicht genug betont werden: **Das Versäumnis, die `origin` und möglicherweise `source` Eigenschaften zu überprüfen, ermöglicht Cross-Site-Scripting-Angriffe.**

Wie bei jedem asynchron versendeten Skript (Timeouts, benutzererzeugte Ereignisse) ist es für den Aufrufer von `postMessage` nicht möglich zu erkennen, wann ein Ereignishandler, der Ereignisse von `postMessage` abhört, eine Ausnahme auslöst.

Nachdem `postMessage()` aufgerufen wurde, wird das [`MessageEvent`](/de/docs/Web/API/MessageEvent) _erst nach_ Abschluss aller noch ausstehenden Ausführungskontexte gesendet. Zum Beispiel, wenn `postMessage()` in einem Ereignishandler aufgerufen wird, wird dieser Ereignishandler vollständig ausgeführt, ebenso wie alle verbleibenden Handler für dasselbe Ereignis, bevor das [`MessageEvent`](/de/docs/Web/API/MessageEvent) gesendet wird.

Der Wert der `origin` Eigenschaft des gesendeten Ereignisses wird nicht durch den aktuellen Wert von `document.domain` im aufrufenden Fenster beeinflusst.

Für IDN-Hostnamen ist der Wert der `origin` Eigenschaft nicht durchgängig Unicode oder Punycode; um die größtmögliche Kompatibilität zu gewährleisten, überprüfen Sie sowohl die IDN- als auch die Punycode-Werte, wenn Sie diese Eigenschaft verwenden, falls Sie Nachrichten von IDN-Websites erwarten. Dieser Wert wird schließlich konsistent IDN sein, aber vorerst sollten Sie sowohl IDN- als auch Punycode-Formen behandeln.

Der Wert der `origin` Eigenschaft, wenn das sendende Fenster eine [`javascript:`](/de/docs/Web/URI/Reference/Schemes/javascript) oder [`data:`](/de/docs/Web/URI/Reference/Schemes/data) URL enthält, ist der Ursprung des Skripts, das die URL geladen hat.

### Verwendung von window\.postMessage in Erweiterungen {{Non-standard_inline}}

`window.postMessage` ist für in Chrome Code ausgeführtes JavaScript verfügbar (z. B. in Erweiterungen und privilegiertem Code), aber die `source` Eigenschaft des gesendeten Ereignisses ist immer `null` als Sicherheitsbeschränkung. (Die anderen Eigenschaften haben ihre erwarteten Werte.)

Es ist nicht möglich, dass Skripte aus dem Inhalt oder dem Web-Kontext einen `targetOrigin` angeben, um direkt mit einer Erweiterung zu kommunizieren (entweder mit dem Hintergrundskript oder einem Inhaltsskript). Web- oder Inhaltsskripte _können_ `window.postMessage` mit einem `targetOrigin` von `"*"` verwenden, um an jeden Listener zu senden, aber dies wird nicht empfohlen, da eine Erweiterung nicht sicher sein kann, welchen Ursprung solche Nachrichten haben, und andere Hörer (einschließlich solcher, die Sie nicht kontrollieren) mithören können.

Inhaltsskripte sollten {{WebExtAPIRef("runtime.sendMessage")}} verwenden, um mit dem Hintergrundskript zu kommunizieren. Web-Kontext-Skripte können benutzerdefinierte Ereignisse verwenden, um mit Inhaltsskripten zu kommunizieren (mit zufällig generierten Ereignisnamen, falls nötig, um Abhören durch die Gastseite zu verhindern).

Schließlich erfordert die Übertragung einer Nachricht an eine Seite mit einer `file:` URL derzeit, dass das `targetOrigin` Argument `"*"` ist. `file://` kann nicht als Sicherheitsbeschränkung verwendet werden; diese Beschränkung könnte in Zukunft geändert werden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`Document.domain`](/de/docs/Web/API/Document/domain)
- [`CustomEvent`](/de/docs/Web/API/CustomEvent)
- [`BroadcastChannel`](/de/docs/Web/API/BroadcastChannel) - Für Kommunikationen innerhalb desselben Ursprungs.
