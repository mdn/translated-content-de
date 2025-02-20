---
title: "Fenster: postMessage()-Methode"
short-title: postMessage()
slug: Web/API/Window/postMessage
l10n:
  sourceCommit: 4d9320f9857fb80fef5f3fe78e3d09b06eb0ebbd
---

{{ApiRef("HTML DOM")}}

Die **`window.postMessage()`**-Methode ermöglicht eine sichere Kommunikation zwischen [`Window`](/de/docs/Web/API/Window)-Objekten über verschiedene Ursprünge hinweg; _z. B._ zwischen einer Seite und einem von ihr geöffneten Pop-up-Fenster oder zwischen einer Seite und einem eingebetteten `iframe`.

Normalerweise dürfen Skripte auf unterschiedlichen Seiten nur aufeinander zugreifen, wenn die Seiten den gleichen [origin](/de/docs/Web/API/Location/origin) teilen (auch bekannt als "[Same-Origin-Policy](/de/docs/Web/Security/Same-origin_policy)"). `window.postMessage()` bietet einen kontrollierten Mechanismus, um diese Einschränkung sicher zu umgehen (bei korrekter Nutzung).

Darüber hinaus muss ein zugreifendes Skript das Fensterobjekt des zugegriffenen Dokuments zuvor erhalten haben. Dies kann durch Methoden wie [`window.open()`](/de/docs/Web/API/Window/open) für Pop-ups oder [`iframe.contentWindow`](/de/docs/Web/API/HTMLIFrameElement/contentWindow) für `iframe`s erfolgen.

Grundsätzlich kann ein Fenster eine Referenz auf ein anderes Fenster erhalten (_z. B._ durch `targetWindow = window.opener`) und dann ein [`MessageEvent`](/de/docs/Web/API/MessageEvent) an dieses senden, indem es `targetWindow.postMessage()` verwendet. Das empfangende Fenster kann [dieses Ereignis](#das_ausgelöste_ereignis) nach Bedarf behandeln. Die Argumente, die an `window.postMessage()` übergeben werden (_d. h._ die "Nachricht"), [werden dem empfangenden Fenster durch das Ereignisobjekt zur Verfügung gestellt](#das_ausgelöste_ereignis).

## Syntax

```js-nolint
postMessage(message)
postMessage(message, targetOrigin)
postMessage(message, targetOrigin, transfer)

postMessage(message, options)
```

### Parameter

- `message`
  - : Daten, die an das andere Fenster gesendet werden sollen. Die Daten werden mithilfe des [Structured Clone Algorithm](/de/docs/Web/API/Web_Workers_API/Structured_clone_algorithm) serialisiert. Das bedeutet, dass Sie eine Vielzahl von Datenobjekten sicher an das Ziel-Fenster übergeben können, ohne diese selbst serialisieren zu müssen.
- `targetOrigin` {{optional_Inline}}
  - : Gibt den {{Glossary("Origin", "origin")}} an, den das empfangende Fenster haben muss, um das Ereignis zu erhalten. Der `origin` muss exakt übereinstimmen (einschließlich Schema, Hostname und Port), damit das Ereignis zugestellt wird. Wenn weggelassen, wird standardmäßig der `origin` der aufrufenden Methode verwendet. Dieser Mechanismus liefert Kontrolle darüber, wohin Nachrichten gesendet werden. Zum Beispiel, wenn `postMessage()` verwendet wird, um ein Passwort zu übertragen, wäre es absolut entscheidend, dass dieses Argument eine URI mit demselben `origin` wie der beabsichtigte Empfänger enthält, um das Passwort vor böswilligen Dritten zu schützen. Es kann auch `*` angegeben werden, wodurch die Nachricht an einen Listener mit beliebigem `origin` gesendet werden kann.
    > [!NOTE]
    > Geben Sie immer ein spezifisches `targetOrigin` an und nicht `*`, wenn Sie wissen, wo sich das Dokument des anderen Fensters befinden sollte. Andernfalls könnten Daten an eine bösartige Seite offengelegt werden.
- `transfer` {{optional_inline}}
  - : Ein optionales [Array](/de/docs/Web/JavaScript/Reference/Global_Objects/Array) von [Transferable Objects](/de/docs/Web/API/Web_Workers_API/Transferable_objects), deren Eigentum übertragen werden soll. Das Eigentum an diesen Objekten wird an die Zielseite übertragen, und sie sind auf der sendenden Seite nicht mehr nutzbar. Diese übertragbaren Objekte sollten an die Nachricht angehängt werden; andernfalls würden sie verschoben, sind jedoch auf der Empfangsseite nicht zugänglich.
- `options` {{optional_inline}}
  - : Ein optionales Objekt mit den folgenden Eigenschaften:
    - `transfer` {{optional_inline}}
      - : Hat die gleiche Bedeutung wie der `transfer`-Parameter.
    - `targetOrigin` {{optional_inline}}
      - : Hat die gleiche Bedeutung wie der `targetOrigin`-Parameter.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Das ausgelöste Ereignis

Ein `window` kann folgende JavaScript-Methode verwenden, um auf gesendete Nachrichten zu lauschen:

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
  - : Der {{Glossary("origin", "origin")}} des Fensters, das die Nachricht gesendet hat, als `postMessage` aufgerufen wurde. Dieser String ist die Verkettung von Protokoll und "://", dem Hostnamen (falls vorhanden) und ":" gefolgt von einer Portnummer, falls ein Port vorhanden ist und von der Standardportnummer für das Protokoll abweicht. Beispiele für typische Ursprünge sind `https://example.org` (impliziert Port `443`), `http://example.net` (impliziert Port `80`) und `http://example.com:8080`. Beachten Sie, dass dieser `origin` _nicht_ garantiert den aktuellen oder zukünftigen `origin` dieses Fensters darstellt, das möglicherweise zu einem anderen Ort navigiert wurde, seit `postMessage` aufgerufen wurde.
- `source`
  - : Eine Referenz auf das [`window`](/de/docs/Web/API/Window)-Objekt, das die Nachricht gesendet hat. Dies können Sie verwenden, um eine wechselseitige Kommunikation zwischen zwei Fenstern mit unterschiedlichen Ursprüngen aufzubauen.

## Sicherheitsaspekte

**Falls Sie nicht erwarten, Nachrichten von anderen Websites zu empfangen, _fügen Sie keine_ Ereignislistener für `message`-Ereignisse hinzu.** Das ist eine absolut sichere Methode, Sicherheitsprobleme zu vermeiden.

Falls Sie erwarten, Nachrichten von anderen Websites zu empfangen, sollten **Sie immer die Identität des Absenders prüfen**, indem Sie die `origin`- und möglicherweise `source`-Eigenschaften verwenden. Jedes Fenster (einschließlich beispielsweise `http://evil.example.com`) kann eine Nachricht an ein beliebiges Fenster innerhalb der `iframe`-Hierarchie (vom obersten Dokument bis zu jedem `iframe` darunter) senden. Selbst wenn Sie die Identität verifizieren, sollten Sie **immer die Syntax der empfangenen Nachricht überprüfen**. Andernfalls könnte eine Sicherheitslücke in der Website, der Sie vertrauen, um nur vertrauenswürdige Nachrichten zu senden, ein Cross-Site-Scripting-Loch in Ihrer eigenen Website öffnen.

**Geben Sie immer einen genauen Zielursprung und nicht `*` an, wenn Sie mit `postMessage` Daten an andere Fenster senden.** Eine bösartige Seite könnte die Position des Fensters ohne Ihr Wissen ändern und somit die gesendeten Daten abfangen.

### Sichere Nachrichtenübermittlung mit gemeinsamem Speicher

Wenn `postMessage()` beim Verwenden von {{jsxref("SharedArrayBuffer")}}-Objekten einen Fehler wirft, müssen Sie sicherstellen, dass Ihre Website ordnungsgemäß cross-site isoliert ist. Gemeinsamer Speicher erfordert, dass zwei HTTP-Header gesetzt werden:

- {{HTTPHeader("Cross-Origin-Opener-Policy")}} mit dem Wert `same-origin` (schützt Ihren Ursprung vor Angreifern)
- {{HTTPHeader("Cross-Origin-Embedder-Policy")}} mit den Werten `require-corp` oder `credentialless` (schützt Opfer vor Ihrem Ursprung)

```http
Cross-Origin-Opener-Policy: same-origin
Cross-Origin-Embedder-Policy: require-corp
```

Um zu überprüfen, ob die Cross-Site-Isolation erfolgreich war, können Sie die Eigenschaft [`Window.crossOriginIsolated`](/de/docs/Web/API/Window/crossOriginIsolated) abfragen, die sowohl im Fenster- als auch im Worker-Kontext verfügbar ist:

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

### Anmerkungen

Jedes Skript in einem Dokument in einem Fenster kann anfordern, dass eine Nachricht an ein Dokument in einem anderen Fenster, dessen `window`-Objekt es erhalten hat, übergeben wird, indem `.postMessage()` auf diesem `window`-Objekt aufgerufen wird. Folglich **müssen** alle Ereignislistener, die Nachrichten empfangen sollen, zunächst die Identität des Absenders überprüfen, indem sie die `origin`- und möglicherweise `source`-Eigenschaften verwenden. Dies kann nicht oft genug betont werden: **Das Versäumnis, die Eigenschaften `origin` und möglicherweise `source` zu überprüfen, ermöglicht Cross-Site-Scripting-Angriffe.**

Wie bei jedem asynchron aufgerufenen Skript (Timeouts, benutzergenerierte Ereignisse) ist es nicht möglich, dass der Aufrufer von `postMessage` erkennt, wann ein Ereignishandler, der auf von `postMessage` gesendete Ereignisse lauscht, eine Ausnahme erzeugt.

Nachdem `postMessage()` aufgerufen wurde, wird das [`MessageEvent`](/de/docs/Web/API/MessageEvent) _erst ausgelöst, nachdem alle noch ausstehenden Ausführungskontexte abgeschlossen sind_. Zum Beispiel: Wenn `postMessage()` in einem Ereignishandler aufgerufen wird, wird dieser Ereignishandler vollständig ausgeführt, ebenso wie alle verbleibenden Handler für dasselbe Ereignis, bevor das [`MessageEvent`](/de/docs/Web/API/MessageEvent) ausgelöst wird.

Der Wert der `origin`-Eigenschaft des ausgelösten Ereignisses hängt nicht vom aktuellen Wert von `document.domain` im aufrufenden Fenster ab.

Für IDN-Hostnamen ist der Wert der `origin`-Eigenschaft entweder in Unicode oder in Punycode formatiert, jedoch nicht konsistent. Um größtmögliche Kompatibilität zu gewährleisten, sollten Sie für beide Formen prüfen, wenn Sie Nachrichten von IDN-Seiten erwarten. Dieser Wert wird in Zukunft konsistent IDN sein, aber bis dahin sollten Sie beide Formen behandeln.

Der Wert der `origin`-Eigenschaft, wenn das sendende Fenster eine URL des Typs [`javascript:`](/de/docs/Web/URI/Reference/Schemes/javascript) oder [`data:`](/de/docs/Web/URI/Reference/Schemes/data) enthält, ist der `origin` des Skripts, das die URL geladen hat.

### Verwendung von window\.postMessage in Erweiterungen {{Non-standard_inline}}

`window.postMessage` ist in JavaScript, das im Chrome-Code ausgeführt wird (z. B. in Erweiterungen und privilegiertem Code), verfügbar. Allerdings ist die `source`-Eigenschaft des gesendeten Ereignisses aus Sicherheitsgründen immer `null`. (Die anderen Eigenschaften besitzen ihre erwarteten Werte.)

Es ist nicht möglich, dass Inhalts- oder Webkontextskripte einen `targetOrigin` angeben, um direkt mit einer Erweiterung zu kommunizieren (entweder mit dem Hintergrundskript oder einem Inhaltskript). Web- oder Inhalts-Skripte _können_ `window.postMessage` mit einem `targetOrigin` von `"*"` verwenden, um an alle Listener zu senden, aber dies wird nicht empfohlen, da eine Erweiterung nicht sichergehen kann, von welchem Ursprung solche Nachrichten stammen, und andere Listener (einschließlich solcher, die Sie nicht kontrollieren) mithören können.

Inhalts-Skripte sollten {{WebExtAPIRef("runtime.sendMessage")}} verwenden, um mit dem Hintergrundskript zu kommunizieren. Webkontext-Skripte können benutzerdefinierte Ereignisse verwenden, um mit Inhalts-Skripten zu kommunizieren (mit zufällig generierten Ereignisnamen, falls nötig, um ein Abhören durch die Gastseite zu verhindern).

Zuletzt erfordert das Senden einer Nachricht an eine Seite mit einer `file:`-URL derzeit, dass das Argument `targetOrigin` `"*"` ist. `file://` kann nicht als Sicherheitsrestriktion verwendet werden. Diese Einschränkung könnte in der Zukunft angepasst werden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`Document.domain`](/de/docs/Web/API/Document/domain)
- [`CustomEvent`](/de/docs/Web/API/CustomEvent)
- [`BroadcastChannel`](/de/docs/Web/API/BroadcastChannel) - für Kommunikation innerhalb desselben Ursprungs.
