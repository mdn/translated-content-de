---
title: "Window: postMessage() Methode"
short-title: postMessage()
slug: Web/API/Window/postMessage
l10n:
  sourceCommit: 090d43de0b4e18d89eaa3b435a736408ab9d46e9
---

{{ApiRef("HTML DOM")}}

Die **`window.postMessage()`** Methode ermöglicht sichere Cross-Origin-Kommunikation zwischen [`Window`](/de/docs/Web/API/Window) Objekten; z.B. zwischen einer Seite und einem von ihr erzeugten Pop-up oder zwischen einer Seite und einem in ihr eingebetteten iframe.

Normalerweise dürfen Skripte auf verschiedenen Seiten nur dann aufeinander zugreifen, wenn die Seiten, von denen sie stammen, denselben [Ursprung](/de/docs/Web/API/Location/origin) teilen (auch bekannt als "[Same-Origin-Policy](/de/docs/Web/Security/Same-origin_policy)"). `window.postMessage()` bietet einen kontrollierten Mechanismus, um diese Einschränkung sicher zu umgehen (wenn es richtig verwendet wird).

Darüber hinaus muss ein zugreifendes Skript das Fensterobjekt des zugegriffenen Dokuments zuvor erhalten haben. Dies kann durch Methoden wie [`window.open()`](/de/docs/Web/API/Window/open) für Popups oder [`iframe.contentWindow`](/de/docs/Web/API/HTMLIFrameElement/contentWindow) für iframes geschehen.

Im Allgemeinen kann ein Fenster eine Referenz zu einem anderen erhalten (z.B. über `targetWindow = window.opener`) und dann ein [`MessageEvent`](/de/docs/Web/API/MessageEvent) darauf mit `targetWindow.postMessage()` senden. Das empfangende Fenster kann dann [dieses Ereignis verarbeiten](/de/docs/Web/API/Document_Object_Model/Events#registering_event_handlers), wie es benötigt wird. Die an `window.postMessage()` übergebenen Argumente (d.h. die "Nachricht") werden [über das Ereignisobjekt dem empfangenden Fenster zugänglich gemacht](#das_versendete_ereignis).

## Syntax

```js-nolint
postMessage(message)
postMessage(message, targetOrigin)
postMessage(message, targetOrigin, transfer)

postMessage(message, options)
```

### Parameter

- `message`
  - : Daten, die an das andere Fenster gesendet werden sollen. Die Daten werden mit dem [structured clone algorithm](/de/docs/Web/API/Web_Workers_API/Structured_clone_algorithm) serialisiert. Das bedeutet, dass Sie eine breite Palette von Datenobjekten sicher an das Ziel-Fenster übergeben können, ohne sie selbst serialisieren zu müssen.
- `targetOrigin` {{optional_Inline}}
  - : Gibt den {{Glossary("Origin", "Ursprung")}} an, den das empfangende Fenster haben muss, um das Ereignis zu empfangen. Damit das Ereignis gesendet werden kann, muss der Ursprung genau übereinstimmen (einschließlich Schema, Hostname und Port). Wenn weggelassen, ist der Standardwert `"/"`, was der Ursprung ist, der die Methode aufruft. Dieser Mechanismus bietet Kontrolle darüber, wohin Nachrichten gesendet werden; zum Beispiel, wenn `postMessage()` verwendet wurde, um ein Passwort zu senden, wäre es absolut entscheidend, dass dieses Argument eine URI ist, deren Ursprung derselbe ist wie der des beabsichtigten Empfängers der Nachricht mit dem Passwort, um zu verhindern, dass das Passwort von einem bösartigen Dritten abgefangen wird. Es kann auch `*` angegeben werden, was bedeutet, dass die Nachricht an einen Listener mit beliebigem Ursprung gesendet werden kann.
    > [!NOTE]
    > Geben Sie immer einen spezifischen `targetOrigin` an, nicht `*`, wenn Sie wissen, wo sich das Dokument des anderen Fensters befinden sollte. Das Fehlen eines spezifischen Ziels könnte Daten an eine bösartige Website preisgeben.
    >
    > Da [`data:`](/de/docs/Web/URI/Reference/Schemes/data) URLs undurchsichtige Ursprünge haben, müssen Sie, um Nachrichten an einen Kontext mit einer `data:` URL zu senden, `"*"` angeben.
- `transfer` {{optional_inline}}
  - : Ein optionales [Array](/de/docs/Web/JavaScript/Reference/Global_Objects/Array) von [übertragbaren Objekten](/de/docs/Web/API/Web_Workers_API/Transferable_objects), die die Eigentümerschaft wechseln sollen. Die Eigentümerschaft dieser Objekte wird auf die Empfängerseite übertragen und sie sind auf der sendenden Seite nicht mehr verwendbar. Diese übertragbaren Objekte sollten an die Nachricht angehängt werden; andernfalls würden sie verschoben, aber nicht tatsächlich auf der empfangenden Seite zugänglich sein.
- `options` {{optional_inline}}
  - : Ein optionales Objekt mit den folgenden Eigenschaften:
    - `transfer` {{optional_inline}}
      - : Hat die gleiche Bedeutung wie der `transfer` Parameter.
    - `targetOrigin` {{optional_inline}}
      - : Hat die gleiche Bedeutung wie der `targetOrigin` Parameter.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Das versendete Ereignis

Ein `window` kann für versendete Nachrichten ein Ereignis wie folgt in JavaScript überwachen:

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
  - : Das Objekt, das vom anderen Fenster gesendet wurde.
- `origin`
  - : Der {{Glossary("origin", "Ursprung")}} des Fensters, das die Nachricht gesendet hat, zu dem Zeitpunkt, als `postMessage` aufgerufen wurde. Dieser String ist die Verkettung des Protokolls und "://", des Hostnamens, falls vorhanden, und ":" gefolgt von einer Portnummer, falls ein Port vorhanden und unterschiedlich vom Standardport für das gegebene Protokoll ist. Beispiele für typische Ursprünge sind `https://example.org` (implizit Port `443`), `http://example.net` (implizit Port `80`) und `http://example.com:8080`. Beachten Sie, dass dieser Ursprung _nicht_ garantiert der aktuelle oder zukünftige Ursprung dieses Fensters ist, das möglicherweise seit dem Aufruf von `postMessage` an einen anderen Ort navigiert wurde.
- `source`
  - : Eine Referenz auf das [`window`](/de/docs/Web/API/Window) Objekt, das die Nachricht gesendet hat; Sie können dies verwenden, um eine beidseitige Kommunikation zwischen zwei Fenstern mit unterschiedlichen Ursprüngen zu etablieren.

## Sicherheitsbedenken

**Wenn Sie nicht erwarten, Nachrichten von anderen Seiten zu empfangen, _fügen Sie keine_ Ereignis-Listener für `message` Ereignisse hinzu.** Dies ist eine vollständig narrensichere Methode, um Sicherheitsprobleme zu vermeiden.

Wenn Sie erwarten, Nachrichten von anderen Seiten zu empfangen, **verifizieren Sie immer die Identität des Absenders** mit den `origin` und möglicherweise `source` Eigenschaften. Jedes Fenster (einschließlich, zum Beispiel, `http://evil.example.com`) kann eine Nachricht an jedes andere Fenster innerhalb der iframes-Hierarchie von oben zu jedem iframe darunter im aktuellen Dokument senden. Nachdem Sie die Identität überprüft haben, sollten Sie dennoch **immer die Syntax der empfangenen Nachricht verifizieren**. Andernfalls könnte eine Sicherheitslücke auf der Site, von der Sie erwarten, dass sie nur vertrauenswürdige Nachrichten sendet, ein Cross-Site-Scripting-Problem auf Ihrer Seite erzeugen.

**Geben Sie immer einen genauen Zielursprung, nicht `*`, an, wenn Sie `postMessage` verwenden, um Daten an andere Fenster zu senden.** Eine bösartige Site kann den Standort des Fensters ohne Ihr Wissen ändern und daher die Daten abfangen, die mit `postMessage` gesendet werden.

### Sichere gemeinsame Speicher-Nachrichtenübermittlung

Wenn bei der Verwendung von {{jsxref("SharedArrayBuffer")}} Objekten ein Fehler bei `postMessage()` auftritt, müssen Sie möglicherweise sicherstellen, dass Ihre Site ordnungsgemäß isoliert ist. Gemeinsamer Speicher wird über zwei HTTP-Header abgesichert:

- {{HTTPHeader("Cross-Origin-Opener-Policy")}} mit `same-origin` als Wert (schützt Ihren Ursprung vor Angreifern)
- {{HTTPHeader("Cross-Origin-Embedder-Policy")}} mit `require-corp` oder `credentialless` als Wert (schützt Opfer vor Ihrem Ursprung)

```http
Cross-Origin-Opener-Policy: same-origin
Cross-Origin-Embedder-Policy: require-corp
```

Um zu überprüfen, ob die Cross-Origin-Isolierung erfolgreich war, können Sie die [`Window.crossOriginIsolated`](/de/docs/Web/API/Window/crossOriginIsolated) Eigenschaft im Fenster- und Worker-Kontext testen:

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
    "hi there yourself! the secret response is: rheeeeet!",
    event.origin,
  );
});
```

### Anmerkungen

Jedes Skript in einem Dokument in einem Fenster kann anfordern, dass eine Nachricht an ein Dokument in einem anderen Fenster gesendet wird, dessen Fensterobjekt es erhalten hat, indem es `.postMessage()` auf diesem Fensterobjekt aufruft. Folglich **muss** jeder für den Empfang von Nachrichten verwendete Ereignis-Listener zuerst die Identität des Absenders der Nachricht mit den `origin` und möglicherweise `source` Eigenschaften überprüfen. Dies kann nicht genug betont werden: **Das Versäumnis, die `origin` und möglicherweise `source` Eigenschaften zu überprüfen, ermöglicht Cross-Site-Scripting-Angriffe.**

Wie bei jedem asynchron versendeten Skript (Timeouts, benutzergenerierte Ereignisse) ist es für den Anrufer von `postMessage` nicht möglich festzustellen, wann ein Ereignis-Handler, der auf von `postMessage` gesendete Ereignisse hört, eine Ausnahme auslöst.

Nachdem `postMessage()` aufgerufen wurde, wird das [`MessageEvent`](/de/docs/Web/API/MessageEvent) _erst ausgelöst, nachdem alle ausstehenden Ausführungskontexte abgeschlossen sind_. Zum Beispiel wird, wenn `postMessage()` in einem Ereignis-Handler aufgerufen wird, dieser Ereignis-Handler vollständig ausgeführt, ebenso wie alle verbleibenden Handler für dasselbe Ereignis, bevor das [`MessageEvent`](/de/docs/Web/API/MessageEvent) ausgelöst wird.

Der Wert der `origin` Eigenschaft des gesendeten Ereignisses wird nicht durch den aktuellen Wert von `document.domain` im aufrufenden Fenster beeinflusst.

Für IDN-Hostnamen ist der Wert der `origin` Eigenschaft nicht konsistent in Unicode oder Punycode; für größtmögliche Kompatibilität prüfen Sie sowohl den IDN- als auch den Punycode-Wert, wenn Sie diese Eigenschaft verwenden und Nachrichten von IDN-Sites erwarten. Dieser Wert wird schließlich konsistent IDN sein, aber vorerst sollten Sie sowohl IDN- als auch Punycode-Formen handhaben.

Der Wert der `origin` Eigenschaft, wenn das sendende Fenster eine [`javascript:`](/de/docs/Web/URI/Reference/Schemes/javascript) oder [`data:`](/de/docs/Web/URI/Reference/Schemes/data) URL enthält, ist der Ursprung des Skripts, das die URL geladen hat.

### Verwendung von window\.postMessage in Erweiterungen {{Non-standard_inline}}

`window.postMessage` ist für JavaScript verfügbar, das im Chrome-Code (z.B. in Erweiterungen und privilegiertem Code) läuft, aber die `source` Eigenschaft des gesendeten Ereignisses ist immer `null` als Sicherheitsbeschränkung. (Die anderen Eigenschaften haben ihren erwarteten Wert.)

Es ist nicht möglich, für Inhalts- oder Webkontext-Skripte einen `targetOrigin` anzugeben, um direkt mit einer Erweiterung (entweder dem Hintergrundskript oder einem Inhaltsskript) zu kommunizieren. Web- oder Inhaltsskripte _können_ `window.postMessage` mit einem `targetOrigin` von `"*"` verwenden, um an jeden Listener zu senden, aber dies wird nicht empfohlen, da eine Erweiterung die Herkunft solcher Nachrichten nicht sicherstellen kann und andere Listener (einschließlich solcher, die Sie nicht kontrollieren) mithören können.

Inhaltsskripte sollten {{WebExtAPIRef("runtime.sendMessage")}} verwenden, um mit dem Hintergrundskript zu kommunizieren. Webkontext-Skripte können benutzerdefinierte Ereignisse verwenden, um mit Inhaltsskripten zu kommunizieren (mit zufällig generierten Ereignisnamen, falls erforderlich, um Abhören von der Gastseite zu verhindern).

Schließlich erfordert das Senden einer Nachricht an eine Seite mit einer `file:` URL derzeit, dass das Argument `targetOrigin` `"*"` ist. `file://` kann nicht als Sicherheitsbeschränkung verwendet werden; diese Einschränkung kann in Zukunft geändert werden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`Document.domain`](/de/docs/Web/API/Document/domain)
- [`CustomEvent`](/de/docs/Web/API/CustomEvent)
- [`BroadcastChannel`](/de/docs/Web/API/BroadcastChannel) - Für Same-Origin-Kommunikation.
