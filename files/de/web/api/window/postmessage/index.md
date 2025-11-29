---
title: "Window: postMessage() Methode"
short-title: postMessage()
slug: Web/API/Window/postMessage
l10n:
  sourceCommit: 2ccbd062264d0a2a34f185a3386cb272f42c50f5
---

{{ApiRef("HTML DOM")}}

Die **`window.postMessage()`**-Methode ermöglicht sichere, herkunftsübergreifende Kommunikation zwischen [`Window`](/de/docs/Web/API/Window)-Objekten; _z.B._ zwischen einer Seite und einem von ihr erzeugten Pop-up oder zwischen einer Seite und einem darin eingebetteten iframe.

Normalerweise dürfen Skripte auf verschiedenen Seiten nur dann aufeinander zugreifen, wenn die Seiten, von denen sie stammen, die gleiche [Herkunft](/de/docs/Web/API/Location/origin) teilen (auch bekannt als die "[Same-Origin-Policy](/de/docs/Web/Security/Defenses/Same-origin_policy)"). `window.postMessage()` bietet einen kontrollierten Mechanismus, um diese Einschränkung sicher zu umgehen (sofern richtig verwendet).

Darüber hinaus muss ein zugreifendes Skript zuvor das Fensterobjekt des zuzugreifenden Dokuments erhalten haben. Dies kann durch Methoden wie [`window.open()`](/de/docs/Web/API/Window/open) für Pop-ups oder [`iframe.contentWindow`](/de/docs/Web/API/HTMLIFrameElement/contentWindow) für iframes geschehen.

Im Allgemeinen kann ein Fenster einen Verweis auf ein anderes erhalten (_z.B._ über `targetWindow = window.opener`) und dann ein [`MessageEvent`](/de/docs/Web/API/MessageEvent) darauf mit `targetWindow.postMessage()` auslösen. Das empfangende Fenster kann dann dieses Ereignis nach Bedarf [handhaben](/de/docs/Web/API/Document_Object_Model/Events#registering_event_handlers). Die an `window.postMessage()` übergebenen Argumente (_d.h._, die „Nachricht“) werden [über das Ereignisobjekt dem empfangenden Fenster zur Verfügung gestellt](#das_ausgelöste_ereignis).

## Syntax

```js-nolint
postMessage(message)
postMessage(message, targetOrigin)
postMessage(message, targetOrigin, transfer)

postMessage(message, options)
```

### Parameter

- `message`
  - : Daten, die an das andere Fenster versendet werden sollen. Die Daten werden mithilfe des [Structured Clone Algorithmus](/de/docs/Web/API/Web_Workers_API/Structured_clone_algorithm) serialisiert. Das bedeutet, dass Sie eine Vielzahl von Datenobjekten sicher an das Ziel-Fenster übergeben können, ohne sie selbst serialisieren zu müssen.
- `targetOrigin` {{optional_Inline}}
  - : Gibt die {{Glossary("Origin", "Herkunft")}} an, die das empfangende Fenster haben muss, um das Ereignis zu empfangen. Damit das Ereignis ausgelöst wird, muss die Herkunft exakt übereinstimmen (einschließlich Schema, Hostname und Port). Wenn weggelassen, wird standardmäßig `"/"` verwendet, was die Herkunft ist, die die Methode aufruft. Dieser Mechanismus bietet die Kontrolle darüber, wohin Nachrichten gesendet werden; Zum Beispiel, wenn `postMessage()` verwendet wird, um ein Passwort zu übertragen, wäre es absolut entscheidend, dass dieses Argument eine URI mit derselben Herkunft wie der beabsichtigte Empfänger der Nachricht mit dem Passwort ist, um das Abfangen des Passworts durch Dritte zu verhindern. `*` kann ebenfalls angegeben werden, was bedeutet, dass die Nachricht an einen Listener mit beliebiger Herkunft geschickt werden kann.
    > [!NOTE]
    > Geben Sie immer eine spezifische `targetOrigin` an, nicht `*`, wenn Sie wissen, wo sich das andere Fensterdokument befinden sollte. Das Versäumnis einer spezifischen Angabe könnte Daten an eine bösartige Seite offenlegen.
    >
    > Da [`data:`](/de/docs/Web/URI/Reference/Schemes/data) URLs opake Ursprünge haben, müssen Sie, um Nachrichten an einen Kontext mit einer `data:` URL zu senden, `“*”` angeben.
- `transfer` {{optional_inline}}
  - : Ein optionales [Array](/de/docs/Web/JavaScript/Reference/Global_Objects/Array) von [Transferierbaren Objekten](/de/docs/Web/API/Web_Workers_API/Transferable_objects), deren Besitz übertragen werden soll. Der Besitz dieser Objekte wird auf die Zielseite übertragen und sie sind auf der sendenden Seite nicht mehr nutzbar. Diese transferierbaren Objekte sollten an die Nachricht angehängt werden; andernfalls würden sie bewegt, wären aber nicht wirklich am Empfangsende zugänglich.
- `options` {{optional_inline}}
  - : Ein optionales Objekt, das die folgenden Eigenschaften enthält:
    - `transfer` {{optional_inline}}
      - : Hat die gleiche Bedeutung wie der `transfer`-Parameter.
    - `targetOrigin` {{optional_inline}}
      - : Hat die gleiche Bedeutung wie der `targetOrigin`-Parameter.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Das ausgelöste Ereignis

Ein `window` kann auf ausgelöste Nachrichten hören, indem folgendes JavaScript ausgeführt wird:

```js
window.addEventListener("message", (event) => {
  if (event.origin !== "http://example.org:8080") return;

  // …
});
```

Die Eigenschaften der ausgelösten Nachricht sind:

- `data`
  - : Das Objekt, das von dem anderen Fenster übergeben wurde.
- `origin`
  - : Die {{Glossary("origin", "Herkunft")}} des Fensters, das die Nachricht gesendet hat, als `postMessage` aufgerufen wurde. Diese Zeichenfolge ist die Verkettung des Protokolls und "://", des Hostnamens, falls vorhanden, und ":" gefolgt von einer Portnummer, falls ein Port vorhanden ist und sich vom Standardport für das gegebene Protokoll unterscheidet. Beispiele für typische Herkünfte sind `https://example.org` (impliziert Port `443`), `http://example.net` (impliziert Port `80`) und `http://example.com:8080`. Beachten Sie, dass diese Herkunft _nicht_ garantiert die aktuelle oder zukünftige Herkunft dieses Fensters ist, das möglicherweise seit dem Aufruf von `postMessage` an einen anderen Ort navigiert wurde.
- `source`
  - : Ein Verweis auf das [`window`](/de/docs/Web/API/Window)-Objekt, das die Nachricht gesendet hat; Sie können dies nutzen, um eine Zweiseitenkommunikation zwischen zwei Fenstern mit unterschiedlichen Herkünften zu etablieren.

## Sicherheitsbedenken

**Wenn Sie nicht erwarten, Nachrichten von anderen Seiten zu empfangen, _fügen Sie keine_ Ereignis-Listener für `message`-Ereignisse hinzu.** Dies ist eine absolut narrensichere Methode, um Sicherheitsprobleme zu vermeiden.

Wenn Sie erwarten, Nachrichten von anderen Seiten zu empfangen, **überprüfen Sie immer die Identität des Senders** mithilfe der Eigenschaften `origin` und möglicherweise `source`. Jedes Fenster (einschließlich, beispielsweise, `http://bösartig.beispiel.com`) kann eine Nachricht an ein beliebiges anderes Fenster innerhalb der iframe-Hierarchie von oben bis zu jedem iframe unterhalb des aktuellen Dokuments senden. Nachdem die Identität überprüft wurde, sollten Sie dennoch **immer die Syntax der empfangenen Nachricht überprüfen**. Andernfalls könnte eine Sicherheitslücke auf der Seite, der Sie vertraut haben, um nur vertraute Nachrichten zu senden, ein Cross-Site-Scripting-Loch auf Ihrer Seite öffnen.

**Geben Sie immer eine exakte Zielherkunft an, nicht `*`, wenn Sie `postMessage` verwenden, um Daten an andere Fenster zu senden.** Eine bösartige Seite kann den Standort des Fensters ohne Ihr Wissen ändern und kann daher die mit `postMessage` gesendeten Daten abfangen.

### Sichere gemeinsame Speicher-Nachrichten

Wenn `postMessage()` beim Gebrauch mit {{jsxref("SharedArrayBuffer")}}-Objekten eine Ausnahme auslöst, müssen Sie möglicherweise sicherstellen, dass Sie Ihre Seite richtig herkunftsübergreifend isoliert haben. Gemeinsamer Speicher wird durch zwei HTTP-Header gesichert:

- {{HTTPHeader("Cross-Origin-Opener-Policy")}} mit dem Wert `same-origin` (schützt Ihre Herkunft vor Angreifern)
- {{HTTPHeader("Cross-Origin-Embedder-Policy")}} mit dem Wert `require-corp` oder `credentialless` (schützt Opfer vor Ihrer Herkunft)

```http
Cross-Origin-Opener-Policy: same-origin
Cross-Origin-Embedder-Policy: require-corp
```

Um zu überprüfen, ob die Herkunftsübergreifende Isolation erfolgreich war, können Sie die Eigenschaft [`Window.crossOriginIsolated`](/de/docs/Web/API/Window/crossOriginIsolated) testen, die in Fenster- und Arbeiterkontexten verfügbar ist:

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

### Hinweise

Jedes Skript in einem Dokument in einem Fenster kann anfordern, dass eine Nachricht an ein Dokument in einem anderen Fenster, dessen Fensterobjekt es erhalten hat, ausgelöst wird, indem `.postMessage()` auf diesem Fensterobjekt aufgerufen wird. Folglich **muss** jeder Ereignis-Listener, der zum Empfangen von Nachrichten verwendet wird, zuerst die Identität des Absenders der Nachricht anhand der Eigenschaften `origin` und möglicherweise `source` überprüfen. Dies kann nicht oft genug betont werden: **Wenn Sie es versäumen, die Eigenschaften `origin` und möglicherweise `source` zu überprüfen, können Cross-Site-Scripting-Angriffe ermöglicht werden.**

Wie bei jedem asynchron ausgelösten Skript (Timeouts, vom Benutzer generierte Ereignisse) ist es für den Aufrufer von `postMessage` nicht möglich zu erkennen, wann ein Ereignishandler, der auf durch `postMessage` gesendete Ereignisse hört, eine Ausnahme auslöst.

Nachdem `postMessage()` aufgerufen wurde, wird das [`MessageEvent`](/de/docs/Web/API/MessageEvent) _erst nach dem Abschluss aller anstehenden Ausführungskontexte ausgelöst_. Wenn beispielsweise `postMessage()` in einem Ereignishandler aufgerufen wird, wird dieser Ereignishandler vollständig ausgeführt, ebenso wie alle verbleibenden Handler für dasselbe Ereignis, bevor das [`MessageEvent`](/de/docs/Web/API/MessageEvent) ausgelöst wird.

Der Wert der `origin`-Eigenschaft des ausgelösten Ereignisses wird nicht vom aktuellen Wert von `document.domain` im aufrufenden Fenster beeinflusst.

Für Namen von IDN-Hosts gilt nur, dass der Wert der `origin`-Eigenschaft nicht konsistent entweder im Unicode- oder Punycode-Format ist. Um die größtmögliche Kompatibilität zu erreichen, prüfen Sie bei der Verwendung dieser Eigenschaft sowohl die IDN- als auch die Punycode-Werte, wenn Sie Nachrichten von IDN-Seiten erwarten. Dieser Wert wird schließlich durchgängig IDN sein, aber für den Moment sollten Sie sowohl die IDN- als auch die Punycode-Form behandeln.

Der Wert der `origin`-Eigenschaft, wenn das sendende Fenster eine [`javascript:`](/de/docs/Web/URI/Reference/Schemes/javascript) oder [`data:`](/de/docs/Web/URI/Reference/Schemes/data) URL enthält, ist die Herkunft des Skripts, das die URL geladen hat.

### Verwendung von window\.postMessage in Erweiterungen {{Non-standard_inline}}

`window.postMessage` ist verfügbar für JavaScript, das im Chrome-Code ausgeführt wird (z.B. in Erweiterungen und bevorzugtem Code), aber die `source`-Eigenschaft des ausgelösten Ereignisses ist immer `null` als Sicherheitsbeschränkung. (Die anderen Eigenschaften haben ihre erwarteten Werte.)

Es ist nicht möglich, dass Inhalts- oder Webkontext-Skripte eine `targetOrigin` angeben, um direkt mit einer Erweiterung (entweder dem Hintergrundskript oder einem Inhalts-Skript) zu kommunizieren. Web- oder Inhalts-Skripte _können_ `window.postMessage` mit einer `targetOrigin` von `"*"` verwenden, um an jeden Listener zu senden, aber dies wird nicht empfohlen, da eine Erweiterung nicht sicher sein kann, von wo solche Nachrichten stammen, und andere Listener (einschließlich solcher, die Sie nicht kontrollieren) können zuhören.

Inhalts-Skripte sollten {{WebExtAPIRef("runtime.sendMessage")}} verwenden, um mit dem Hintergrundskript zu kommunizieren. Web-Kontext-Skripte können benutzerdefinierte Ereignisse verwenden, um mit Inhalts-Skripten zu kommunizieren (mit zufällig generierten Ereignisnamen, falls nötig, um das Abhören von der Gastseite zu verhindern).

Zuletzt erfordert das Senden einer Nachricht an eine Seite mit einer `file:` URL derzeit, dass das `targetOrigin`-Argument `"*"` ist. `file://` kann nicht als Sicherheitsbeschränkung verwendet werden; diese Einschränkung könnte in Zukunft geändert werden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`Document.domain`](/de/docs/Web/API/Document/domain)
- [`CustomEvent`](/de/docs/Web/API/CustomEvent)
- [`BroadcastChannel`](/de/docs/Web/API/BroadcastChannel) - Für Kommunikation mit gleicher Herkunft.
