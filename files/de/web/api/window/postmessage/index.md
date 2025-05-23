---
title: "Window: postMessage() Methode"
short-title: postMessage()
slug: Web/API/Window/postMessage
l10n:
  sourceCommit: 364a4d02b10854ab7cef4ff4b0ec3616d4e1c8ab
---

{{ApiRef("HTML DOM")}}

Die **`window.postMessage()`** Methode ermöglicht sicher die Kommunikation zwischen [`Window`](/de/docs/Web/API/Window)-Objekten über verschiedene Ursprünge hinweg; _z. B._ zwischen einer Seite und einem Popup, das sie erzeugt hat, oder zwischen einer Seite und einem innerhalb eingebetteten `iframe`.

Normalerweise dürfen Skripte auf verschiedenen Seiten nur dann aufeinander zugreifen, wenn die Seiten denselben [Ursprung](/de/docs/Web/API/Location/origin) haben (auch bekannt als „[Same-Origin-Policy](/de/docs/Web/Security/Same-origin_policy)“). `window.postMessage()` bietet einen kontrollierten Mechanismus, um diese Einschränkung sicher zu umgehen (wenn sie ordnungsgemäß verwendet wird).

Darüber hinaus muss ein zugreifendes Skript zuvor das `window`-Objekt des aufgerufenen Dokuments erhalten haben. Dies kann durch Methoden wie [`window.open()`](/de/docs/Web/API/Window/open) für Popups oder [`iframe.contentWindow`](/de/docs/Web/API/HTMLIFrameElement/contentWindow) für iframes erfolgen.

Im Allgemeinen kann ein Fenster eine Referenz zu einem anderen erhalten (_z. B._ über `targetWindow = window.opener`) und dann mit `targetWindow.postMessage()` ein [`MessageEvent`](/de/docs/Web/API/MessageEvent) darauf auslösen. Das empfangende Fenster kann dann [das Ereignis nach Bedarf verarbeiten](/de/docs/Web/Events/Event_handlers). Die Argumente, die an `window.postMessage()` übergeben werden (_d.h._ die "Nachricht"), werden [über das Ereignisobjekt im empfangenden Fenster zugänglich gemacht](#das_ausgelöste_ereignis).

## Syntax

```js-nolint
postMessage(message)
postMessage(message, targetOrigin)
postMessage(message, targetOrigin, transfer)

postMessage(message, options)
```

### Parameter

- `message`
  - : Daten, die an das andere Fenster gesendet werden sollen. Die Daten werden mit dem [strukturierten Klonalgorithmus](/de/docs/Web/API/Web_Workers_API/Structured_clone_algorithm) serialisiert. Dies bedeutet, dass Sie eine breite Palette von Datenobjekten sicher an das Ziel-Fenster übergeben können, ohne sie selbst serialisieren zu müssen.
- `targetOrigin` {{optional_Inline}}
  - : Gibt den {{Glossary("Origin", "Ursprung")}} an, den das empfangende Fenster haben muss, um das Ereignis zu empfangen. Damit das Ereignis ausgelöst wird, muss der Ursprung genau übereinstimmen (einschließlich Schema, Hostname und Port). Wenn dieser Parameter weggelassen wird, wird standardmäßig der Ursprung verwendet, der die Methode aufruft. Dieser Mechanismus bietet die Kontrolle darüber, wohin Nachrichten gesendet werden; wenn `postMessage()` beispielsweise verwendet wurde, um ein Passwort zu übertragen, wäre es absolut wichtig, dass dieses Argument eine URI ist, deren Ursprung derselbe ist wie der des beabsichtigten Empfängers der Nachricht mit dem Passwort, um zu verhindern, dass ein böswilliger Dritter das Passwort abfängt. Es kann auch `*` angegeben werden, was bedeutet, dass die Nachricht an einen Listener mit beliebigem Ursprung gesendet werden kann.
    > [!NOTE]
    > Geben Sie immer einen spezifischen `targetOrigin` an, nicht `*`, wenn Sie wissen, wo sich das Dokument des anderen Fensters befinden sollte. Wenn Sie kein spezifisches Ziel angeben, könnten Daten an eine bösartige Website weitergegeben werden.
- `transfer` {{optional_inline}}
  - : Ein optionales [Array](/de/docs/Web/JavaScript/Reference/Global_Objects/Array) übertragbarer Objekte, deren Eigentümerschaft übertragen werden soll. Die Eigentümerschaft dieser Objekte wird an die Empfängerseite übergeben und sie sind auf der sendenden Seite nicht mehr nutzbar. Diese übertragbaren Objekte sollten an die Nachricht angehängt werden; andernfalls würden sie verschoben, aber tatsächlich auf der empfangenden Seite nicht zugänglich sein.
- `options` {{optional_inline}}
  - : Ein optionales Objekt, das die folgenden Eigenschaften enthält:
    - `transfer` {{optional_inline}}
      - : Hat die gleiche Bedeutung wie der `transfer`-Parameter.
    - `targetOrigin` {{optional_inline}}
      - : Hat die gleiche Bedeutung wie der `targetOrigin`-Parameter.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Das ausgelöste Ereignis

Ein `window` kann für ausgelöste Nachrichten lauschen, indem das folgende JavaScript ausgeführt wird:

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

Die Eigenschaften der ausgelösten Nachricht sind:

- `data`
  - : Das Objekt, das vom anderen Fenster übergeben wurde.
- `origin`
  - : Der {{Glossary("origin", "Ursprung")}} des Fensters, das die Nachricht gesendet hat, zu dem Zeitpunkt, zu dem `postMessage` aufgerufen wurde. Dieser String ist die Verkettung aus Protokoll und "://", dem Hostnamen, falls vorhanden, und ":" gefolgt von einer Portnummer, wenn ein Port vorhanden ist und sich vom Standardport für das gegebene Protokoll unterscheidet. Beispielstypische Ursprünge sind `https://example.org` (impliziert Port `443`), `http://example.net` (impliziert Port `80`) und `http://example.com:8080`. Beachten Sie, dass dieser Ursprung _nicht_ garantiert der aktuelle oder zukünftige Ursprung dieses Fensters ist, das möglicherweise seit dem Aufruf von `postMessage` zu einem anderen Ort navigiert wurde.
- `source`
  - : Eine Referenz auf das [`window`](/de/docs/Web/API/Window)-Objekt, das die Nachricht gesendet hat; Sie können dies verwenden, um eine zweiseitige Kommunikation zwischen zwei Fenstern mit unterschiedlichen Ursprüngen herzustellen.

## Sicherheitsbedenken

**Wenn Sie nicht erwarten, Nachrichten von anderen Websites zu empfangen, _fügen Sie keine_ Ereignislistener für `message`-Ereignisse hinzu.** Dies ist eine vollständig zuverlässige Methode, um Sicherheitsprobleme zu vermeiden.

Wenn Sie erwarten, Nachrichten von anderen Websites zu empfangen, **überprüfen Sie immer die Identität des Absenders** mithilfe der `origin`- und möglicherweise `source`-Eigenschaften. Jedes Fenster (einschließlich z. B. `http://evil.example.com`) kann eine Nachricht an jedes andere Fenster innerhalb der iFrame-Hierarchie vom obersten bis zum untersten iFrame des aktuellen Dokuments senden. Nachdem die Identität jedoch verifiziert wurde, sollten Sie trotzdem **immer die Syntax der empfangenen Nachricht überprüfen**. Andernfalls könnte eine Sicherheitslücke auf der Website, die Sie vertrauen, nur vertrauenswürdige Nachrichten zu senden, eine Cross-Site-Scripting-Lücke auf Ihrer Website öffnen.

**Geben Sie immer einen genauen Zielursprung an, nicht `*`, wenn Sie `postMessage` verwenden, um Daten an andere Fenster zu senden.** Eine bösartige Website kann die Position des Fensters ohne Ihr Wissen ändern und so die mit `postMessage` gesendeten Daten abfangen.

### Sichere gemeinsame Speichernachrichten

Wenn `postMessage()` mit {{jsxref("SharedArrayBuffer")}}-Objekten verwendet wird und eine Ausnahme auslöst, müssen Sie möglicherweise sicherstellen, dass Sie Ihre Website korrekt separat isoliert haben. Gemeinsamer Speicher ist durch zwei HTTP-Header geschützt:

- {{HTTPHeader("Cross-Origin-Opener-Policy")}} mit `same-origin` als Wert (schützt Ihren Ursprung vor Angreifern)
- {{HTTPHeader("Cross-Origin-Embedder-Policy")}} mit `require-corp` oder `credentialless` als Wert (schützt Opfer vor Ihrem Ursprung)

```http
Cross-Origin-Opener-Policy: same-origin
Cross-Origin-Embedder-Policy: require-corp
```

Um zu überprüfen, ob die cross-origin-Isolation erfolgreich war, können Sie gegen die [`Window.crossOriginIsolated`](/de/docs/Web/API/Window/crossOriginIsolated)-Eigenschaft testen, die in Fenster- und Worker-Kontexten verfügbar ist:

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

Jedes Skript in einem Dokument innerhalb eines Fensters kann verlangen, dass eine Nachricht an ein Dokument in einem anderen Fenster gesendet wird, dessen `window`-Objekt es erhalten hat, indem es `.postMessage()` auf diesem Fenster-Objekt aufruft. Folglich muss jeder Ereignislistener, der zum Empfangen von Nachrichten verwendet wird, **zuerst die Identität des Absenders der Nachricht überprüfen**, indem er die `origin`- und möglicherweise `source`-Eigenschaften verwendet. Dies kann nicht oft genug betont werden: **Das Versäumnis, die `origin`- und möglicherweise `source`-Eigenschaften zu überprüfen, ermöglicht Cross-Site-Scripting-Angriffe.**

Wie bei jedem asynchron ausgelösten Skript (Timeouts, vom Benutzer generierte Ereignisse) ist es nicht möglich, dass der Aufrufende von `postMessage` erkennt, wann ein Ereignis-Handler, der auf von `postMessage` gesendete Ereignisse lauscht, eine Ausnahme auslöst.

Nachdem `postMessage()` aufgerufen wurde, wird das [`MessageEvent`](/de/docs/Web/API/MessageEvent) _erst nach Beendigung aller ausstehenden Ausführungskontexte_ ausgelöst. Zum Beispiel, wenn `postMessage()` in einem Ereignishandler aufgerufen wird, wird dieser Ereignishandler bis zum Ende ausgeführt, ebenso wie alle verbleibenden Handler für dasselbe Ereignis, bevor das [`MessageEvent`](/de/docs/Web/API/MessageEvent) ausgelöst wird.

Der Wert der `origin`-Eigenschaft des ausgelösten Ereignisses wird nicht vom aktuellen Wert von `document.domain` im aufrufenden Fenster beeinflusst.

Für IDN-Hostnamen ist der Wert der `origin`-Eigenschaft nicht konsistent Unicode oder Punycode; um die größtmögliche Kompatibilität zu gewährleisten, überprüfen Sie sowohl die IDN- als auch die Punycode-Werte beim Verwenden dieser Eigenschaft, wenn Sie Nachrichten von IDN-Sites erwarten. Dieser Wert wird irgendwann konsistent mit IDN sein, aber derzeit sollten Sie sowohl IDN- als auch Punycode-Formen berücksichtigen.

Der Wert der `origin`-Eigenschaft, wenn das sendende Fenster eine [`javascript:`](/de/docs/Web/URI/Reference/Schemes/javascript)- oder [`data:`](/de/docs/Web/URI/Reference/Schemes/data)-URL enthält, ist der Ursprung des Skripts, das die URL geladen hat.

### Verwendung von window\.postMessage in Erweiterungen {{Non-standard_inline}}

`window.postMessage` ist für JavaScript verfügbar, das im Chrome-Code ausgeführt wird (z. B. in Erweiterungen und privilegiertem Code), aber die `source`-Eigenschaft des ausgelösten Ereignisses ist aus Sicherheitsgründen immer `null`. (Die anderen Eigenschaften haben ihre erwarteten Werte.)

Es ist für Inhalts- oder Webkontext-Skripte nicht möglich, einen `targetOrigin` anzugeben, um direkt mit einer Erweiterung (entweder dem Hintergrundskript oder einem Inhaltsskript) zu kommunizieren. Web- oder Inhaltsskripte _können_ `window.postMessage` mit einem `targetOrigin` von `"*"` verwenden, um an jeden Listener zu senden, aber dies ist nicht ratsam, da eine Erweiterung die Herkunft solcher Nachrichten nicht sicherstellen kann und andere Listener (einschließlich solcher, die Sie nicht kontrollieren) mithören können.

Inhaltsskripte sollten {{WebExtAPIRef("runtime.sendMessage")}} verwenden, um mit dem Hintergrundskript zu kommunizieren. Webkontext-Skripte können benutzerdefinierte Ereignisse verwenden, um mit Inhaltsskripten zu kommunizieren (mit zufällig generierten Ereignisnamen, falls erforderlich, um das Abhören der Gastseite zu verhindern).

Schließlich erfordert das Senden einer Nachricht an eine Seite mit einer `file:`-URL derzeit, dass das `targetOrigin`-Argument `"*"` ist. `file://` kann nicht als Sicherheitsbeschränkung verwendet werden; diese Einschränkung kann in Zukunft geändert werden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`Document.domain`](/de/docs/Web/API/Document/domain)
- [`CustomEvent`](/de/docs/Web/API/CustomEvent)
- [`BroadcastChannel`](/de/docs/Web/API/BroadcastChannel) - Für Kommunikation innerhalb desselben Ursprungs.
