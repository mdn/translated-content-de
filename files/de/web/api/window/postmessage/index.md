---
title: "Window: postMessage() Methode"
short-title: postMessage()
slug: Web/API/Window/postMessage
l10n:
  sourceCommit: ca26363fcc6fc861103d40ac0205e5c5b79eb2fa
---

{{ApiRef("HTML DOM")}}

Die **`window.postMessage()`** Methode ermöglicht eine sichere Kommunikation zwischen [`Window`](/de/docs/Web/API/Window) Objekten über verschiedene Ursprünge hinweg; z. B. zwischen einer Seite und einem von ihr erzeugten Pop-up oder zwischen einer Seite und einem darin eingebetteten Iframe.

Normalerweise dürfen Skripte auf verschiedenen Seiten nur dann aufeinander zugreifen, wenn die Seiten, von denen sie stammen, denselben [Origin](/de/docs/Web/API/Location/origin) teilen (auch bekannt als "[Same-Origin-Policy](/de/docs/Web/Security/Defenses/Same-origin_policy)"). `window.postMessage()` bietet einen kontrollierten Mechanismus, um diese Einschränkung sicher zu umgehen (bei korrekter Verwendung).

Darüber hinaus muss ein zugreifendes Skript das `window`-Objekt des zugegriffenen Dokuments zuvor erhalten haben. Dies kann durch Methoden wie [`window.open()`](/de/docs/Web/API/Window/open) für Pop-ups oder [`iframe.contentWindow`](/de/docs/Web/API/HTMLIFrameElement/contentWindow) für Iframes geschehen.

Im Allgemeinen kann ein Fenster eine Referenz zu einem anderen erhalten (z. B. über `targetWindow = window.opener`) und dann ein [`MessageEvent`](/de/docs/Web/API/MessageEvent) darauf mit `targetWindow.postMessage()` senden. Das empfangende Fenster ist dann frei, [dieses Ereignis zu behandeln](/de/docs/Web/API/Document_Object_Model/Events#registering_event_handlers), wie es benötigt wird. Die an `window.postMessage()` übergebenen Argumente (d.h. die "Nachricht") werden [dem empfangenden Fenster durch das Ereignisobjekt offengelegt](#das_gesendete_ereignis).

## Syntax

```js-nolint
postMessage(message)
postMessage(message, targetOrigin)
postMessage(message, targetOrigin, transfer)

postMessage(message, options)
```

### Parameter

- `message`
  - : Daten, die an das andere Fenster gesendet werden sollen. Die Daten werden mit dem [Structured Clone Algorithmus](/de/docs/Web/API/Web_Workers_API/Structured_clone_algorithm) serialisiert. Dies bedeutet, dass Sie eine breite Palette von Datenobjekten sicher an das Ziel-Fenster übergeben können, ohne sie selbst serialisieren zu müssen.
- `targetOrigin` {{optional_Inline}}
  - : Gibt den {{Glossary("Origin", "Origin")}} an, den das empfangende Fenster haben muss, um das Ereignis empfangen zu können. Damit das Ereignis gesendet werden kann, muss der Origin genau übereinstimmen (einschließlich Schema, Hostname und Port). Wenn ausgelassen, wird es standardmäßig auf `"/"` gesetzt, was der Ursprung ist, der die Methode aufruft. Dieser Mechanismus bietet Kontrolle darüber, wohin Nachrichten gesendet werden; zum Beispiel, wenn `postMessage()` verwendet wird, um ein Passwort zu übermitteln, wäre es absolut entscheidend, dass dieses Argument eine URI ist, deren Ursprung derselbe ist wie der beabsichtigte Empfänger der Nachricht, die das Passwort enthält, um eine Abfangung des Passworts durch einen böswilligen Dritten zu verhindern. `*` kann ebenfalls angegeben werden, was bedeutet, dass die Nachricht an einen Zuhörer mit jedem Origin gesendet werden kann.
    > [!NOTE]
    > Geben Sie immer einen spezifischen `targetOrigin` an, nicht `*`, wenn Sie wissen, wo sich das Dokument des anderen Fensters befinden sollte. Das Versäumnis, ein spezifisches Ziel anzugeben, könnte Daten an eine böswillige Seite offenlegen.
    >
    > Da [`data:`](/de/docs/Web/URI/Reference/Schemes/data) URLs undurchsichtige Ursprünge haben, müssen Sie `"*"` spezifizieren, um Nachrichten an einen Kontext mit einer `data:` URL zu senden.
- `transfer` {{optional_inline}}
  - : Ein optionales [Array](/de/docs/Web/JavaScript/Reference/Global_Objects/Array) von [übertragbaren Objekten](/de/docs/Web/API/Web_Workers_API/Transferable_objects) zur Eigentumsübertragung. Das Eigentum dieser Objekte wird an die Empfängerseite übertragen, und sie sind auf der sendenden Seite nicht mehr nutzbar. Diese übertragbaren Objekte sollten an die Nachricht angehängt werden, andernfalls würden sie verschoben, aber auf der empfangenden Seite nicht wirklich zugänglich sein.
- `options` {{optional_inline}}
  - : Ein optionales Objekt, das die folgenden Eigenschaften enthält:
    - `transfer` {{optional_inline}}
      - : Hat die gleiche Bedeutung wie der `transfer` Parameter.
    - `targetOrigin` {{optional_inline}}
      - : Hat die gleiche Bedeutung wie der `targetOrigin` Parameter.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Das gesendete Ereignis

Ein `window` kann gesendete Nachrichten durch Ausführen des folgenden JavaScripts anhören:

```js
window.addEventListener("message", (event) => {
  if (event.origin !== "http://example.org:8080") return;

  // …
});
```

Die Eigenschaften der gesendeten Nachricht sind:

- `data`
  - : Das Objekt, das vom anderen Fenster übergeben wurde.
- `origin`
  - : Der {{Glossary("origin", "Origin")}} des Fensters, das die Nachricht gesendet hat, zu dem Zeitpunkt, als `postMessage` aufgerufen wurde. Dieser String ist die Verkettung des Protokolls und "://", des Hostnamens, wenn einer existiert, und ":" gefolgt von einer Portnummer, wenn ein Port vorhanden ist und sich vom Standardport für das gegebene Protokoll unterscheidet. Beispiele für typische Ursprünge sind `https://example.org` (impliziert Port `443`), `http://example.net` (impliziert Port `80`) und `http://example.com:8080`. Beachten Sie, dass dieser Ursprung _nicht_ garantiert der aktuelle oder zukünftige Ursprung dieses Fensters ist, das möglicherweise seit dem Aufruf von `postMessage` zu einem anderen Ort navigiert wurde.
- `source`
  - : Eine Referenz auf das [`window`](/de/docs/Web/API/Window) Objekt, das die Nachricht gesendet hat; dies kann verwendet werden, um eine bidirektionale Kommunikation zwischen zwei Fenstern mit unterschiedlichen Ursprüngen zu etablieren.

## Sicherheitsbedenken

**Wenn Sie nicht erwarten, Nachrichten von anderen Websites zu erhalten, _fügen Sie keinen_ Ereignislistener für `message` Ereignisse hinzu.** Dies ist eine völlig narrensichere Möglichkeit, Sicherheitsprobleme zu vermeiden.

Wenn Sie erwarten, Nachrichten von anderen Websites zu erhalten, **überprüfen Sie immer die Identität des Absenders** mithilfe der Eigenschaften `origin` und möglicherweise `source`. Jedes Fenster (einschließlich z. B. `http://evil.example.com`) kann eine Nachricht an jedes andere Fenster innerhalb der Iframe-Hierarchie von oben bis zu jedem Iframe unterhalb des aktuellen Dokuments senden. Nachdem die Identität überprüft wurde, sollten Sie jedoch immer **die Syntax der empfangenen Nachricht überprüfen**. Ansonsten könnte eine Sicherheitslücke auf der Site, der Sie vertrauten, nur vertrauenswürdige Nachrichten zu senden, dann ein Cross-Site-Scripting-Loch auf Ihrer Site öffnen.

**Geben Sie immer einen genauen `targetOrigin` an, nicht `*`, wenn Sie `postMessage` verwenden, um Daten an andere Fenster zu senden.** Eine böswillige Website kann den Standort des Fensters ohne Ihr Wissen ändern und somit die Daten abfangen, die mit `postMessage` gesendet werden.

### Sicheres Shared-Memory-Messaging

Wenn `postMessage()` eine Ausnahme bei der Verwendung mit {{jsxref("SharedArrayBuffer")}} Objekten auslöst, müssen Sie möglicherweise sicherstellen, dass Ihr Standort ordnungsgemäß cross-origin isoliert ist. Shared Memory ist hinter zwei HTTP-Headern geschützt:

- {{HTTPHeader("Cross-Origin-Opener-Policy")}} mit dem Wert `same-origin` (schützt Ihren Ursprung vor Angreifern)
- {{HTTPHeader("Cross-Origin-Embedder-Policy")}} mit dem Wert `require-corp` oder `credentialless` (schützt Opfer vor Ihrem Ursprung)

```http
Cross-Origin-Opener-Policy: same-origin
Cross-Origin-Embedder-Policy: require-corp
```

Um zu überprüfen, ob die Cross-Origin-Isolation erfolgreich war, können Sie gegen die [`Window.crossOriginIsolated`](/de/docs/Web/API/Window/crossOriginIsolated) Eigenschaft testen, die in den Window- und Worker-Kontexten verfügbar ist:

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

Jedes Skript in einem Dokument in einem Fenster kann anfordern, dass eine Nachricht an ein Dokument in einem anderen Fenster gesendet wird, dessen `window`-Objekt es erhalten hat, indem es `.postMessage()` für dieses `window`-Objekt aufruft. Folglich muss jeder Event-Listener, der verwendet wird, um Nachrichten zu empfangen, **zuerst die Identität des Absenders der Nachricht überprüfen**, indem die Eigenschaften `origin` und möglicherweise `source` verwendet werden. Dies kann nicht genug betont werden: **Das Versäumnis, die Eigenschaften `origin` und möglicherweise `source` zu überprüfen, ermöglicht Cross-Site-Scripting-Angriffe.**

Wie bei jedem asynchron ausgeführten Skript (Timeouts, vom Benutzer erzeugte Ereignisse) ist es für den Aufrufer von `postMessage` nicht möglich zu erkennen, wann ein Event-Handler, der auf Ereignisse hört, die von `postMessage` gesendet wurden, eine Ausnahme auslöst.

Nachdem `postMessage()` aufgerufen wurde, wird das [`MessageEvent`](/de/docs/Web/API/MessageEvent) _erst ausgelöst, nachdem alle anstehenden Ausführungskontexte beendet sind_. Zum Beispiel, wenn `postMessage()` in einem Event-Handler aufgerufen wird, wird dieser Event-Handler vollständig ausgeführt, ebenso alle verbleibenden Handler für dasselbe Event, bevor das [`MessageEvent`](/de/docs/Web/API/MessageEvent) ausgelöst wird.

Der Wert der `origin`-Eigenschaft des ausgelösten Events wird nicht durch den aktuellen Wert von `document.domain` im aufrufenden Fenster beeinflusst.

Für IDN-Hostnamen nur ist der Wert der `origin`-Eigenschaft nicht durchgängig Unicode oder Punycode; für größte Kompatibilität prüfen Sie sowohl die IDN- als auch die Punycode-Werte, wenn Sie diese Eigenschaft verwenden, um Nachrichten von IDN-Websites zu erwarten. Dieser Wert wird schließlich konsequent IDN sein, aber für jetzt sollten Sie beide IDN- und Punycode-Formen behandeln.

Der Wert der `origin`-Eigenschaft, wenn das sendende Fenster eine [`javascript:`](/de/docs/Web/URI/Reference/Schemes/javascript) oder [`data:`](/de/docs/Web/URI/Reference/Schemes/data) URL enthält, ist der Ursprung des Skripts, das die URL geladen hat.

### Verwendung von window\.postMessage in Erweiterungen {{Non-standard_inline}}

`window.postMessage` ist für JavaScript verfügbar, das im Chrome-Code ausgeführt wird (z. B. in Erweiterungen und privilegiertem Code), aber die `source`-Eigenschaft des ausgelösten Ereignisses ist immer `null` als Sicherheitsbeschränkung. (Die anderen Eigenschaften haben ihre erwarteten Werte.)

Es ist für Inhalts- oder Web-Kontextskripte nicht möglich, einen `targetOrigin` anzugeben, um direkt mit einer Erweiterung (entweder dem Hintergrundskript oder einem Inhaltsskript) zu kommunizieren. Web- oder Inhaltsskripte _können_ `window.postMessage` mit einem `targetOrigin` von `"*"` verwenden, um an jeden Zuhörer zu senden, aber dies wird nicht empfohlen, da eine Erweiterung den Ursprung solcher Nachrichten nicht sicher bestätigen kann und andere Zuhörer (einschließlich derer, die Sie nicht kontrollieren) mithören können.

Inhaltsskripte sollten {{WebExtAPIRef("runtime.sendMessage")}} verwenden, um mit dem Hintergrundskript zu kommunizieren. Web-Kontextskripte können benutzerdefinierte Ereignisse verwenden, um mit Inhaltsskripten zu kommunizieren (mit zufällig generierten Ereignisnamen, falls nötig, um Mitlauschen von der Gastseite zu verhindern).

Schließlich erfordert das Senden einer Nachricht an eine Seite mit einer `file:` URL derzeit, dass das Argument `targetOrigin` `"*"` ist. `file://` kann nicht als Sicherheitsbeschränkung verwendet werden; diese Einschränkung kann in der Zukunft geändert werden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`Document.domain`](/de/docs/Web/API/Document/domain)
- [`CustomEvent`](/de/docs/Web/API/CustomEvent)
- [`BroadcastChannel`](/de/docs/Web/API/BroadcastChannel) - Für Kommunikation im gleichen Ursprung.
