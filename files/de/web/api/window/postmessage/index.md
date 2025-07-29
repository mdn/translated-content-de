---
title: "Window: postMessage() Methode"
short-title: postMessage()
slug: Web/API/Window/postMessage
l10n:
  sourceCommit: f4c0e822eb6a1ea438c7342f43a3e4809adbd56a
---

{{ApiRef("HTML DOM")}}

Die **`window.postMessage()`** Methode ermöglicht eine sichere cross-origin Kommunikation zwischen [`Window`](/de/docs/Web/API/Window) Objekten; z. B. zwischen einer Seite und einem von ihr erstellten Popup oder zwischen einer Seite und einem darin eingebetteten iframe.

Normalerweise dürfen Skripte auf verschiedenen Seiten nur dann aufeinander zugreifen, wenn die Seiten, von denen sie stammen, denselben [Origin](/de/docs/Web/API/Location/origin) teilen (auch bekannt als die "[same-origin policy](/de/docs/Web/Security/Same-origin_policy)"). `window.postMessage()` bietet einen kontrollierten Mechanismus, um diese Einschränkung sicher zu umgehen (wenn es richtig verwendet wird).

Darüber hinaus muss ein zugreifendes Skript das Window-Objekt des zugegriffenen Dokuments zuvor erhalten haben. Dies kann durch Methoden wie [`window.open()`](/de/docs/Web/API/Window/open) für Popups oder [`iframe.contentWindow`](/de/docs/Web/API/HTMLIFrameElement/contentWindow) für iframes geschehen.

Im Allgemeinen kann ein Fenster eine Referenz zu einem anderen erhalten (z. B. durch `targetWindow = window.opener`) und dann ein [`MessageEvent`](/de/docs/Web/API/MessageEvent) darauf mit `targetWindow.postMessage()` senden. Das empfangende Fenster kann dann [dieses Ereignis nach Bedarf verarbeiten](/de/docs/Web/API/Document_Object_Model/Events#registering_event_handlers). Die an `window.postMessage()` übergebenen Argumente (d.h. die "Nachricht") werden [dem empfangenden Fenster durch das Ereignisobjekt offenbart](#das_gesendete_ereignis).

## Syntax

```js-nolint
postMessage(message)
postMessage(message, targetOrigin)
postMessage(message, targetOrigin, transfer)

postMessage(message, options)
```

### Parameter

- `message`
  - : Daten, die an das andere Fenster übermittelt werden sollen. Die Daten werden mit dem [Structured Clone Algorithmus](/de/docs/Web/API/Web_Workers_API/Structured_clone_algorithm) serialisiert. Das bedeutet, dass Sie eine Vielzahl von Datenobjekten sicher an das Ziel-Fenster übergeben können, ohne sie selbst serialisieren zu müssen.
- `targetOrigin` {{optional_Inline}}
  - : Gibt den {{Glossary("Origin", "Origin")}} an, den das empfangende Fenster haben muss, um das Ereignis empfangen zu können. Um das Ereignis zu übermitteln, muss der Origin exakt übereinstimmen (einschließlich Schema, Hostname und Port). Wird er weggelassen, wird standardmäßig der Origin verwendet, der die Methode aufruft. Dieser Mechanismus bietet Kontrolle darüber, wohin Nachrichten gesendet werden; z.B. wenn `postMessage()` verwendet wird, um ein Passwort zu übertragen, wäre es absolut entscheidend, dass dieses Argument eine URI ist, deren Origin mit dem beabsichtigten Empfänger der Nachricht mit dem Passwort übereinstimmt, um eine Abfangung durch Dritte zu verhindern. `*` kann auch angegeben werden, was bedeutet, dass die Nachricht an einen Listener mit jedem Origin gesendet werden kann.
    > [!NOTE]
    > Geben Sie immer einen spezifischen `targetOrigin` an, nicht `*`, wenn Sie wissen, wo sich das Dokument des anderen Fensters befinden sollte. Das Versäumnis, ein spezifisches Ziel anzugeben, könnte Daten an eine böswillige Website offenlegen.
- `transfer` {{optional_inline}}
  - : Ein optionales [Array](/de/docs/Web/JavaScript/Reference/Global_Objects/Array) von [übertragbaren Objekten](/de/docs/Web/API/Web_Workers_API/Transferable_objects), deren Eigentum übertragen werden soll. Das Eigentum dieser Objekte wird auf die Empfängerseite übertragen und sie sind auf der sendenden Seite nicht mehr verwendbar. Diese übertragbaren Objekte sollten der Nachricht angehängt werden, andernfalls würden sie bewegt, aber auf der Empfängerseite nicht wirklich zugänglich sein.
- `options` {{optional_inline}}
  - : Ein optionales Objekt, das die folgenden Eigenschaften enthält:
    - `transfer` {{optional_inline}}
      - : Hat die gleiche Bedeutung wie der Parameter `transfer`.
    - `targetOrigin` {{optional_inline}}
      - : Hat die gleiche Bedeutung wie der Parameter `targetOrigin`.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Das gesendete Ereignis

Ein `window` kann für gesendete Nachrichten lauschen, indem es das folgende JavaScript ausführt:

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

Die Eigenschaften der gesendeten Nachricht sind:

- `data`
  - : Das Objekt, das vom anderen Fenster übergeben wurde.
- `origin`
  - : Der {{Glossary("origin", "Origin")}} des Fensters, das die Nachricht gesendet hat, als `postMessage` aufgerufen wurde. Dieser String ist die Verkettung des Protokolls und "://", des Hostnamens, sofern vorhanden, und ":" gefolgt von einer Portnummer, wenn ein Port vorhanden ist und sich von dem Standardport für das gegebene Protokoll unterscheidet. Typische Beispiele für Origins sind `https://example.org` (was auf den Port `443` hinweist), `http://example.net` (was auf den Port `80` hinweist) und `http://example.com:8080`. Beachten Sie, dass dieser Origin _nicht_ garantiert der aktuelle oder zukünftige Origin dieses Fensters ist, das möglicherweise seit dem Aufruf von `postMessage` zu einem anderen Speicherort navigiert wurde.
- `source`
  - : Eine Referenz auf das [`window`](/de/docs/Web/API/Window) Objekt, das die Nachricht gesendet hat; Sie können dies verwenden, um eine bidirektionale Kommunikation zwischen zwei Fenstern mit unterschiedlichen Origins zu etablieren.

## Sicherheitsbedenken

**Wenn Sie nicht erwarten, Nachrichten von anderen Seiten zu erhalten, _fügen Sie keine_ Event-Listener für `message`-Ereignisse hinzu.** Dies ist eine völlig narrensichere Methode, um Sicherheitsprobleme zu vermeiden.

Wenn Sie erwarten, Nachrichten von anderen Seiten zu erhalten, **überprüfen Sie immer die Identität des Senders** mithilfe der `origin`- und möglicherweise der `source`-Eigenschaften. Jedes Fenster (einschließlich z. B. `http://evil.example.com`) kann eine Nachricht an jedes andere Fenster innerhalb der iframe-Hierarchie vom obersten bis zum untersten iframe des aktuellen Dokuments senden. Nachdem Sie die Identität überprüft haben, sollten Sie trotzdem **immer die Syntax der empfangenen Nachricht überprüfen**. Andernfalls könnte ein Sicherheitsloch auf der Seite, von der Sie erwartet haben, dass sie nur vertrauenswürdige Nachrichten sendet, ein cross-site scripting Loch in Ihrer Seite öffnen.

**Geben Sie immer einen genauen Ziel-Origin an, nicht `*`, wenn Sie `postMessage` verwenden, um Daten an andere Fenster zu senden.** Eine böswillige Site kann ohne Ihr Wissen den Speicherort des Fensters ändern und so die mit `postMessage` gesendeten Daten abfangen.

### Sichere gemeinsame Speicher Nachrichtenübermittlung

Wenn `postMessage()` beim Gebrauch mit {{jsxref("SharedArrayBuffer")}}-Objekten einen Fehler auslöst, müssen Sie möglicherweise sicherstellen, dass Ihre Site ordnungsgemäß cross-site isoliert ist. Gemeinsamer Speicher wird hinter zwei HTTP-Headern verschlossen:

- {{HTTPHeader("Cross-Origin-Opener-Policy")}} mit `same-origin` als Wert (schützt Ihren Origin vor Angreifern)
- {{HTTPHeader("Cross-Origin-Embedder-Policy")}} mit `require-corp` oder `credentialless` als Wert (schützt Opfer vor Ihrem Origin)

```http
Cross-Origin-Opener-Policy: same-origin
Cross-Origin-Embedder-Policy: require-corp
```

Um zu überprüfen, ob die Cross-Origin-Isolation erfolgreich war, können Sie die [`Window.crossOriginIsolated`](/de/docs/Web/API/Window/crossOriginIsolated)-Eigenschaft testen, die in Window- und Worker-Kontexten verfügbar ist:

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

### Hinweise

Jedes Skript in einem Dokument in einem Fenster kann anfordern, dass eine Nachricht an ein Dokument in einem anderen Fenster übermittelt wird, dessen Window-Objekt es erhalten hat, indem es `.postMessage()` auf diesem Window-Objekt aufruft. Folglich muss jeder Event-Listener, der zum Empfangen von Nachrichten verwendet wird, **zuerst die Identität des Absenders der Nachricht überprüfen**, indem die `origin`- und möglicherweise die `source`-Eigenschaften verwendet werden. Dies kann nicht genug betont werden: **Das Versäumnis, die `origin`- und möglicherweise `source`-Eigenschaften zu überprüfen, ermöglicht Cross-Site-Scripting-Angriffe.**

Wie bei jedem asynchron versandten Skript (Timeouts, nutzergenerierte Ereignisse) ist es nicht möglich, dass der Aufruf von `postMessage` erkennt, wann ein Ereignishandler, der auf von `postMessage` gesendete Ereignisse hört, eine Ausnahme auslöst.

Nachdem `postMessage()` aufgerufen wurde, wird das [`MessageEvent`](/de/docs/Web/API/MessageEvent) _erst, nachdem alle anstehenden Ausführungskontexte abgeschlossen wurden_, versandt. Wenn `postMessage()` beispielsweise in einem Ereignishandler aufgerufen wird, wird dieser Ereignishandler bis zum Abschluss ausgeführt, ebenso wie alle übrigen Handler für dasselbe Ereignis, bevor das [`MessageEvent`](/de/docs/Web/API/MessageEvent) versandt wird.

Der Wert der `origin`-Eigenschaft des gesendeten Ereignisses wird nicht von dem aktuellen Wert von `document.domain` im aufrufenden Fenster beeinflusst.

Für IDN-Hostnamen ist der Wert der `origin`-Eigenschaft nicht konsistent in Unicode oder Punycode; für größte Kompatibilität sollten Sie sowohl nach den IDN- als auch den Punycode-Werten suchen, wenn Sie diese Eigenschaft verwenden, falls Sie Nachrichten von IDN-Websites erwarten. Dieser Wert wird schließlich konsistent IDN sein, aber vorerst sollten Sie sowohl die IDN- als auch die Punycode-Formen behandeln.

Der Wert der `origin`-Eigenschaft, wenn das sendende Fenster eine [`javascript:`](/de/docs/Web/URI/Reference/Schemes/javascript) oder [`data:`](/de/docs/Web/URI/Reference/Schemes/data)-URL enthält, ist der Origin des Skripts, das die URL geladen hat.

### Verwendung von window\.postMessage in Erweiterungen {{Non-standard_inline}}

`window.postMessage` ist verfügbar für JavaScript, das im Chrome-Code (z. B. in Erweiterungen und privilegiertem Code) ausgeführt wird, aber die `source`-Eigenschaft des gesendeten Ereignisses ist immer `null` als Sicherheitsbeschränkung. (Die anderen Eigenschaften haben ihre erwarteten Werte.)

Es ist nicht möglich, dass Inhalts- oder Webkontext-Skripte einen `targetOrigin` angeben, um direkt mit einer Erweiterung zu kommunizieren (entweder das Hintergrundskript oder ein Inhaltsskript). Web- oder Inhalts-Skripte _können_ `window.postMessage` mit einem `targetOrigin` von `"*"` verwenden, um an jeden Listener zu senden, aber dies ist nicht zu empfehlen, da eine Erweiterung nicht sicher sein kann über den Origin solcher Nachrichten und andere Zuhörer (einschließlich derer, die Sie nicht kontrollieren) zuhören können.

Inhaltsskripte sollten {{WebExtAPIRef("runtime.sendMessage")}} verwenden, um mit dem Hintergrundskript zu kommunizieren. Webkontext-Skripte können benutzerdefinierte Ereignisse verwenden, um mit Inhaltsskripten zu kommunizieren (falls erforderlich mit zufällig generierten Ereignisnamen, um Abhören der Gastseite zu verhindern).

Zuletzt erfordert das Senden einer Nachricht an eine Seite mit einer `file:` URL derzeit, dass das Argument `targetOrigin` `"*"` ist. `file://` kann nicht als Sicherheitsbeschränkung verwendet werden; diese Beschränkung könnte in Zukunft geändert werden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`Document.domain`](/de/docs/Web/API/Document/domain)
- [`CustomEvent`](/de/docs/Web/API/CustomEvent)
- [`BroadcastChannel`](/de/docs/Web/API/BroadcastChannel) - Für Kommunikation im gleichen Ursprung.
