---
title: "Window: postMessage() Methode"
short-title: postMessage()
slug: Web/API/Window/postMessage
l10n:
  sourceCommit: 1a48b6abdd27e168c78edcf04a7a9f6a8e0fdc15
---

{{ApiRef("HTML DOM")}}

Die **`window.postMessage()`** Methode ermöglicht eine sichere Kommunikation zwischen verschiedenen Ursprüngen von [`Window`](/de/docs/Web/API/Window) Objekten; z.B. zwischen einer Seite und einem von ihr erstellten Pop-up oder zwischen einer Seite und einem eingebetteten `<iframe>`.

Normalerweise dürfen Skripte auf verschiedenen Seiten nur dann aufeinander zugreifen, wenn die Seiten denselben [Ursprung](/de/docs/Web/API/Location/origin) haben (auch bekannt als "[same-origin policy](/de/docs/Web/Security/Same-origin_policy)"). `window.postMessage()` bietet einen kontrollierten Mechanismus, um diese Einschränkung sicher zu umgehen (wenn sie ordnungsgemäß verwendet wird).

Darüber hinaus muss ein zugreifendes Skript zuvor das Fensterobjekt des zugegriffenen Dokuments erhalten haben. Dies kann durch Methoden wie [`window.open()`](/de/docs/Web/API/Window/open) für Pop-ups oder [`iframe.contentWindow`](/de/docs/Web/API/HTMLIFrameElement/contentWindow) für iframes geschehen.

Allgemein kann ein Fenster eine Referenz zu einem anderen erhalten (z.B. über `targetWindow = window.opener`) und dann ein [`MessageEvent`](/de/docs/Web/API/MessageEvent) über `targetWindow.postMessage()` darauf auslösen. Das empfangende Fenster kann dieses Ereignis dann nach Bedarf [verarbeiten](/de/docs/Web/Events/Event_handlers). Die an `window.postMessage()` übergebenen Argumente (d.h., die "Nachricht") werden [dem empfangenden Fenster über das Ereignisobjekt zugänglich gemacht](#das_ausgelöste_ereignis).

## Syntax

```js-nolint
postMessage(message)
postMessage(message, targetOrigin)
postMessage(message, targetOrigin, transfer)

postMessage(message, options)
```

### Parameter

- `message`
  - : Die zu dem anderen Fenster zu sendenden Daten. Die Daten werden mit dem {{domxref("Web_Workers_API/Structured_clone_algorithm", "Structured Clone Algorithm", "", 1)}} serialisiert. Das bedeutet, Sie können eine Vielzahl von Datenobjekten sicher an das Ziel-Fenster übergeben, ohne sie selbst serialisieren zu müssen.
- `targetOrigin` {{optional_Inline}}
  - : Gibt den [Ursprung](/de/docs/Glossary/Origin) an, den das empfangende Fenster haben muss, um das Ereignis zu empfangen. Damit das Ereignis ausgelöst wird, muss der Ursprung genau übereinstimmen (einschließlich Schema, Hostname und Port). Wenn er weggelassen wird, entspricht er standardmäßig dem Ursprung, der die Methode aufruft. Dieser Mechanismus ermöglicht die Kontrolle darüber, wohin Nachrichten gesendet werden; beispielsweise, wenn `postMessage()` verwendet wurde, um ein Passwort zu übertragen, wäre es absolut kritisch, dass dieses Argument ein URI ist, dessen Ursprung mit dem beabsichtigten Empfänger der Nachricht, die das Passwort enthält, identisch ist, um Abfangen des Passworts durch eine bösartige Drittpartei zu verhindern. `*` kann ebenfalls bereitgestellt werden, was bedeutet, dass die Nachricht an einen Listener mit beliebigem Ursprung gesendet werden kann.
    > [!NOTE]
    > Geben Sie immer einen spezifischen `targetOrigin` an, nicht `*`, wenn Sie wissen, wo sich das Dokument des anderen Fensters befinden sollte. Das Versäumnis, ein spezifisches Ziel bereitzustellen, könnte Daten an eine bösartige Seite preisgeben.
- `transfer` {{optional_inline}}
  - : Ein optionales [Array](/de/docs/Web/JavaScript/Reference/Global_Objects/Array) von [übertragbaren Objekten](/de/docs/Web/API/Web_Workers_API/Transferable_objects), um deren Besitz zu übertragen. Der Besitz dieser Objekte wird auf die Zielseite übertragen und sie sind auf der sendenden Seite nicht mehr verwendbar. Diese übertragbaren Objekte sollten an die Nachricht angehängt werden; andernfalls würden sie bewegt, aber nicht tatsächlich auf der Empfängerseite zugänglich.
- `options` {{optional_inline}}
  - : Ein optionales Objekt, das die folgenden Eigenschaften enthält:
    - `transfer` {{optional_inline}}
      - : Hat dieselbe Bedeutung wie der Parameter `transfer`.
    - `targetOrigin` {{optional_inline}}
      - : Hat dieselbe Bedeutung wie der Parameter `targetOrigin`.

### Rückgabewert

Kein ({{jsxref("undefined")}}).

## Das ausgelöste Ereignis

Ein `window` kann auf versandte Nachrichten hören, indem es das folgende JavaScript ausführt:

```js
window.addEventListener(
  "message",
  (event) => {
    if (event.origin !== "http://example.org:8080") return;

    // …
  },
  false,
);
```

Die Eigenschaften der versendeten Nachricht sind:

- `data`
  - : Das vom anderen Fenster übergebene Objekt.
- `origin`
  - : Der [Ursprung](/de/docs/Glossary/origin) des Fensters, das die Nachricht zum Zeitpunkt des Aufrufs von `postMessage` gesendet hat. Dieser String ist die Verkettung des Protokolls und "://", des Hostnamens, wenn einer vorhanden ist, und ":" gefolgt von einer Portnummer, wenn ein Port vorhanden ist und sich von dem Standardport für das gegebene Protokoll unterscheidet. Beispiele für typische Ursprünge sind `https://example.org` (was auf den Port `443` hinweist), `http://example.net` (was auf den Port `80` hinweist) und `http://example.com:8080`. Beachten Sie, dass dieser Ursprung _nicht_ garantiert der aktuelle oder zukünftige Ursprung dieses Fensters ist, das möglicherweise seit dem Aufruf von `postMessage` an einen anderen Ort navigiert wurde.
- `source`
  - : Eine Referenz auf das [`window`](/de/docs/Web/API/Window) Objekt, das die Nachricht gesendet hat; Sie können dies verwenden, um eine Zwei-Wege-Kommunikation zwischen zwei Fenstern mit unterschiedlichen Ursprüngen einzurichten.

## Sicherheitsbedenken

**Wenn Sie nicht erwarten, Nachrichten von anderen Seiten zu empfangen, fügen Sie _keine_ Event-Listener für `message`-Ereignisse hinzu.** Dies ist ein völlig narrensicherer Weg, um Sicherheitsprobleme zu vermeiden.

Wenn Sie erwarten, Nachrichten von anderen Seiten zu empfangen, **überprüfen Sie immer die Identität des Absenders** mithilfe der `origin`- und möglicherweise der `source`-Eigenschaften. Jedes Fenster (einschließlich z.B. `http://evil.example.com`) kann eine Nachricht an jedes andere Fenster innerhalb der iframe-Hierarchie vom obersten bis zu jedem darunterliegenden iframe des aktuellen Dokuments senden. Nachdem Sie die Identität überprüft haben, sollten Sie jedoch dennoch **immer die Syntax der empfangenen Nachricht überprüfen**. Andernfalls könnte eine Sicherheitslücke auf der Seite, der Sie vertrauen, nur vertrauenswürdige Nachrichten zu senden, ein Cross-Site-Scripting-Loch auf Ihrer Seite öffnen.

**Geben Sie immer einen genauen Zielursprung an, nicht `*`, wenn Sie `postMessage` verwenden, um Daten an andere Fenster zu versenden.** Eine bösartige Seite kann den Standort des Fensters ohne Ihr Wissen ändern und damit die mit `postMessage` gesendeten Daten abfangen.

### Sichere gemeinsamen Speicher Messaging

Wenn `postMessage()` beim Gebrauch mit {{jsxref("SharedArrayBuffer")}} Objekten einen Fehler auslöst, müssen Sie möglicherweise sicherstellen, dass Ihre Seite korrekt vor Fremdzugriff isoliert ist. Gemeinsamer Speicher ist hinter zwei HTTP-Headern geschützt:

- {{HTTPHeader("Cross-Origin-Opener-Policy")}} mit dem Wert `same-origin` (schützt Ihren Ursprung vor Angreifern)
- {{HTTPHeader("Cross-Origin-Embedder-Policy")}} mit dem Wert `require-corp` oder `credentialless` (schützt Opfer vor Ihrem Ursprung)

```http
Cross-Origin-Opener-Policy: same-origin
Cross-Origin-Embedder-Policy: require-corp
```

Um zu überprüfen, ob die Ursprungsübergreifende Isolierung erfolgreich war, können Sie die [`Window.crossOriginIsolated`](/de/docs/Web/API/Window/crossOriginIsolated) Eigenschaft für Fenster- und Worker-Kontexte testen:

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

window.addEventListener(
  "message",
  (event) => {
    // Do we trust the sender of this message? (might be
    // different from what we originally opened, for example).
    if (event.origin !== "http://example.com") return;

    // event.source is popup
    // event.data is "hi there yourself! the secret response is: rheeeeet!"
  },
  false,
);
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
    "hi there yourself! the secret response " + "is: rheeeeet!",
    event.origin,
  );
});
```

### Hinweise

Jedes Skript in einem Dokument in einem Fenster kann anfordern, dass eine Nachricht an ein Dokument in einem anderen Fenster gesendet wird, dessen Fensterobjekt es erhalten hat, indem es `.postMessage()` auf diesem Fensterobjekt aufruft. Infolgedessen **muss** jeder Event-Listener, der zum Empfangen von Nachrichten verwendet wird, zuerst die Identität des Absenders der Nachricht überprüfen, indem die Eigenschaften `origin` und möglicherweise `source` verwendet werden. Dies kann nicht genug betont werden: **Das Versäumnis, die Eigenschaften `origin` und möglicherweise `source` zu überprüfen, ermöglicht Cross-Site-Scripting-Angriffe.**

Wie bei jedem asynchron ausgeführten Skript (Timeouts, benutzergenerierte Ereignisse) ist es für den Aufrufer von `postMessage` nicht möglich zu erkennen, wann ein Ereignishandler, der auf von `postMessage` gesendete Ereignisse hört, eine Ausnahme wirft.

Nachdem `postMessage()` aufgerufen wurde, wird das [`MessageEvent`](/de/docs/Web/API/MessageEvent) _erst ausgelöst, nachdem alle ausstehenden Ausführungskontexte abgeschlossen sind_. Wenn zum Beispiel `postMessage()` in einem Event-Handler aufgerufen wird, wird dieser Event-Handler vollständig ausgeführt, ebenso wie alle verbleibenden Handler für dasselbe Ereignis, bevor das [`MessageEvent`](/de/docs/Web/API/MessageEvent) ausgeführt wird.

Der Wert der `origin`-Eigenschaft des ausgelösten Ereignisses wird nicht durch den aktuellen Wert von `document.domain` im aufrufenden Fenster beeinflusst.

Bei IDN-Hostnamen ist der Wert der `origin`-Eigenschaft nicht konsistent Unicode oder Punycode; um die größte Kompatibilität zu gewährleisten, überprüfen Sie sowohl den IDN- als auch den Punycode-Wert, wenn Sie diese Eigenschaft verwenden und Nachrichten von IDN-Seiten erwarten. Dieser Wert wird schließlich konsistent IDN sein, aber zurzeit sollten Sie sowohl IDN- als auch Punycode-Formen behandeln.

Der Wert der `origin`-Eigenschaft, wenn das sendende Fenster eine [`javascript:`](/de/docs/Web/URI/Schemes/javascript) oder [`data:`](/de/docs/Web/URI/Schemes/data) URL enthält, ist der Ursprung des Skripts, das die URL geladen hat.

### Verwendung von window.postMessage in Erweiterungen {{Non-standard_inline}}

`window.postMessage` steht für in Chrome-Code ausgeführtes JavaScript (z.B. in Erweiterungen und privilegiertem Code) zur Verfügung, aber die `source`-Eigenschaft des ausgelösten Ereignisses ist aus Sicherheitsgründen immer `null`. (Die anderen Eigenschaften haben ihre erwarteten Werte.)

Es ist für Skripte im Inhalts- oder Webkontext nicht möglich, einen `targetOrigin` anzugeben, um direkt mit einer Erweiterung zu kommunizieren (entweder das Hintergrundskript oder ein Inhalts-Skript). Web- oder Inhalts-Skripte _können_ `window.postMessage` mit einem `targetOrigin` von `"*"` verwenden, um an jeden Listener zu senden, aber dies wird nicht empfohlen, da eine Erweiterung nicht sicher sein kann, dass der Ursprung solcher Nachrichten, und andere Listener (einschließlich derer, die Sie nicht kontrollieren) mithören können.

Inhaltsskripte sollten {{WebExtAPIRef("runtime.sendMessage")}} verwenden, um mit dem Hintergrundskript zu kommunizieren. Webkontexts-Skripte können benutzerdefinierte Ereignisse verwenden, um mit Inhaltsskripten zu kommunizieren (mit zufällig generierten Ereignisnamen, falls erforderlich, um Abhören durch die Gastseite zu verhindern).

Schließlich erfordert das Versenden einer Nachricht an eine Seite mit einer `file:` URL derzeit, dass das `targetOrigin` Argument `"*"` ist. `file://` kann nicht als Sicherheitsbeschränkung verwendet werden; diese Einschränkung kann in Zukunft geändert werden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`Document.domain`](/de/docs/Web/API/Document/domain)
- [`CustomEvent`](/de/docs/Web/API/CustomEvent)
- [`BroadcastChannel`](/de/docs/Web/API/BroadcastChannel) - Für same-origin Kommunikation.
