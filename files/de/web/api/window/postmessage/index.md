---
title: "Fenster: postMessage() Methode"
short-title: postMessage()
slug: Web/API/Window/postMessage
l10n:
  sourceCommit: 1a48b6abdd27e168c78edcf04a7a9f6a8e0fdc15
---

{{ApiRef("HTML DOM")}}

Die **`window.postMessage()`** Methode ermöglicht sicher die Kommunikation zwischen {{domxref("Window")}} Objekten über verschiedene Ursprünge hinweg; z. B. zwischen einer Seite und einem von ihr eröffneten Pop-up oder zwischen einer Seite und einem darin eingebetteten iframe.

Normalerweise dürfen Skripte auf verschiedenen Seiten aufeinander zugreifen, wenn und nur wenn die Seiten, von denen sie stammen, den gleichen [Ursprung](/de/docs/Web/API/Location/origin) teilen (auch bekannt als "[Same-Origin-Policy](/de/docs/Web/Security/Same-origin_policy)"). `window.postMessage()` bietet einen kontrollierten Mechanismus, um diese Einschränkung sicher zu umgehen (wenn richtig eingesetzt).

Außerdem muss ein zugreifendes Skript das Fensterobjekt des zugegriffenen Dokuments vorher erhalten haben. Dies kann durch Methoden wie [`window.open()`](/de/docs/Web/API/Window/open) für Pop-ups oder [`iframe.contentWindow`](/de/docs/Web/API/HTMLIFrameElement/contentWindow) für iframes geschehen.

Im Allgemeinen kann ein Fenster eine Referenz zu einem anderen erhalten (_z. B._ über `targetWindow = window.opener`) und dann ein {{domxref("MessageEvent")}} darauf mittels `targetWindow.postMessage()` auslösen. Das empfangende Fenster kann dann [dieses Ereignis nach Bedarf behandeln](/de/docs/Web/Events/Event_handlers). Die an `window.postMessage()` übergebenen Argumente (d. h. die "Nachricht") werden [über das Ereignisobjekt dem empfangenden Fenster zugänglich gemacht](#das_ausgelöste_ereignis).

## Syntax

```js-nolint
postMessage(message)
postMessage(message, targetOrigin)
postMessage(message, targetOrigin, transfer)

postMessage(message, options)
```

### Parameter

- `message`
  - : Daten, die an das andere Fenster gesendet werden sollen. Die Daten werden unter Verwendung des {{domxref("Web_Workers_API/Structured_clone_algorithm", "Structured-Clone-Algorithmus", "", 1)}} serialisiert. Das bedeutet, dass Sie eine breite Palette von Datenobjekten sicher an das Ziel-Fenster übermitteln können, ohne sie selbst zu serialisieren.
- `targetOrigin` {{optional_Inline}}
  - : Gibt den [Ursprung](/de/docs/Glossary/Origin) an, den das empfangende Fenster haben muss, um das Ereignis zu erhalten. Damit das Ereignis ausgelöst wird, muss der Ursprung genau übereinstimmen (einschließlich Schema, Hostname und Port). Wenn weggelassen, wird standardmäßig der Ursprung verwendet, der die Methode aufruft. Dieser Mechanismus bietet Kontrolle darüber, wohin Nachrichten gesendet werden; wenn `postMessage()` beispielsweise verwendet wird, um ein Passwort zu übermitteln, wäre es absolut entscheidend, dass dieses Argument eine URI ist, dessen Ursprung derselbe ist wie der vorgesehene Empfänger der Nachricht mit dem Passwort, um eine Interzeption des Passworts durch einen böswilligen Dritten zu verhindern. `*` kann ebenfalls angegeben werden, was bedeutet, dass die Nachricht an einen Listener mit beliebigem Ursprung gesendet werden kann.
    > [!NOTE]
    > Geben Sie immer einen spezifischen `targetOrigin` an, nicht `*`, wenn Sie wissen, wo sich das Dokument des anderen Fensters befinden sollte. Das Versäumnis, ein spezifisches Ziel anzugeben, könnte Daten an eine böswillige Seite preisgeben.
- `transfer` {{optional_inline}}
  - : Ein optionales [Array](/de/docs/Web/JavaScript/Reference/Global_Objects/Array) von [übertragbaren Objekten](/de/docs/Web/API/Web_Workers_API/Transferable_objects), deren Besitz übertragen werden soll. Der Besitz dieser Objekte wird an die Empfangsseite gegeben und sie sind auf der Sendeseite nicht mehr verwendbar. Diese übertragbaren Objekte sollten an die Nachricht angehängt werden; andernfalls würden sie bewegt, aber nicht tatsächlich auf der Empfangsseite zugänglich.
- `options` {{optional_inline}}
  - : Ein optionales Objekt, das die folgenden Eigenschaften enthält:
    - `transfer` {{optional_inline}}
      - : Hat die gleiche Bedeutung wie der `transfer` Parameter.
    - `targetOrigin` {{optional_inline}}
      - : Hat die gleiche Bedeutung wie der `targetOrigin` Parameter.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Das ausgelöste Ereignis

Ein `window` kann für ausgelöste Nachrichten lauschen, indem es folgendes JavaScript ausführt:

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
  - : Das vom anderen Fenster empfangene Objekt.
- `origin`
  - : Der {{Glossary("Ursprung")}} des Fensters, das die Nachricht gesendet hat, zu dem Zeitpunkt, als `postMessage` aufgerufen wurde. Dieser String ist die Verkettung des Protokolls und "://", des Hostnamens, falls vorhanden, und ":" gefolgt von einer Portnummer, falls ein Port vorhanden ist und sich von dem Standardport für das gegebene Protokoll unterscheidet. Beispiele für typische Ursprünge sind `https://example.org` (implizierend Port `443`), `http://example.net` (implizierend Port `80`), und `http://example.com:8080`. Beachten Sie, dass dieser Ursprung _nicht_ garantiert der aktuelle oder zukünftige Ursprung dieses Fensters ist, das seit dem Aufruf von `postMessage` zu einem anderen Standort weitergeleitet worden sein könnte.
- `source`
  - : Eine Referenz auf das {{domxref("window")}} Objekt, das die Nachricht gesendet hat; Sie können dies verwenden, um eine bidirektionale Kommunikation zwischen zwei Fenstern mit unterschiedlichen Ursprüngen herzustellen.

## Sicherheitsbedenken

**Wenn Sie nicht erwarten, Nachrichten von anderen Seiten zu erhalten, _fügen Sie keine_ Event-Listener für `message` Ereignisse hinzu.** Dies ist eine absolut narrensichere Methode, um Sicherheitsprobleme zu vermeiden.

Wenn Sie erwarten, Nachrichten von anderen Seiten zu erhalten, **überprüfen Sie immer die Identität des Absenders** mithilfe der Eigenschaften `origin` und möglicherweise `source`. Jedes Fenster (einschließlich z. B. `http://evil.example.com`) kann eine Nachricht an jedes andere Fenster innerhalb der iframe-Hierarchie vom Top-Dokument bis zu jedem iframe darunter senden. Nachdem Sie die Identität überprüft haben, sollten Sie dennoch **immer die Syntax der empfangenen Nachricht überprüfen**. Andernfalls könnte eine Sicherheitslücke auf der Seite, von der Sie erwarten, dass sie nur vertrauenswürdige Nachrichten sendet, ein Cross-Site-Scripting-Loch auf Ihrer Seite öffnen.

**Geben Sie immer einen exakten Zielursprung an, nicht `*`, wenn Sie `postMessage` verwenden, um Daten an andere Fenster zu senden.** Eine böswillige Seite kann den Standort des Fensters ohne Ihr Wissen ändern und somit die mit `postMessage` gesendeten Daten abfangen.

### Sichere gemeinsame Speicherkommunikation

Falls `postMessage()` eine Ausnahme wirft, wenn es mit {{jsxref("SharedArrayBuffer")}} Objekten verwendet wird, müssen Sie möglicherweise sicherstellen, dass Ihre Seite ordnungsgemäß cross-site isoliert ist. Gemeinsamer Speicher ist hinter zwei HTTP-Headern gesichert:

- {{HTTPHeader("Cross-Origin-Opener-Policy")}} mit `same-origin` als Wert (schützt Ihren Ursprung vor Angreifern)
- {{HTTPHeader("Cross-Origin-Embedder-Policy")}} mit `require-corp` oder `credentialless` als Wert (schützt Opfer vor Ihrem Ursprung)

```http
Cross-Origin-Opener-Policy: same-origin
Cross-Origin-Embedder-Policy: require-corp
```

Um zu überprüfen, ob die Cross-Origin-Isolation erfolgreich war, können Sie die {{domxref("Window.crossOriginIsolated")}} Eigenschaft testen, die in Fenster- und Worker-Kontexten verfügbar ist:

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
 * In den Skripten von Fenster A, wobei A sich auf http://example.com:8080 befindet:
 */

const popup = window.open(/* Pop-up Details */);

// Wenn das Pop-up vollständig geladen ist, vorausgesetzt, es wurde nicht durch einen Pop-up-Blocker blockiert:

// Das macht nichts, vorausgesetzt das Fenster hat seinen Standort nicht geändert.
popup.postMessage(
  "Der Benutzer ist 'bob' und das Passwort ist 'geheim'",
  "https://secure.example.net",
);

// Dies wird erfolgreich eine Nachricht zum Versenden an das Pop-up einreihen, vorausgesetzt,
// das Fenster hat seinen Standort nicht geändert.
popup.postMessage("Hallo da!", "http://example.com");

window.addEventListener(
  "message",
  (event) => {
    // Vertrauen wir dem Absender dieser Nachricht? (könnte sich
    // von dem unterscheiden, was wir ursprünglich geöffnet haben, zum Beispiel).
    if (event.origin !== "http://example.com") return;

    // event.source ist popup
    // event.data ist "Hallo auch Ihnen! Die geheime Antwort ist: rheeeeet!"
  },
  false,
);
```

```js
/*
 * In den Skripten des Pop-ups, ausgeführt auf http://example.com:
 */

// Aufgerufen einige Zeit, nachdem postMessage aufgerufen wurde
window.addEventListener("message", (event) => {
  // Vertrauen wir dem Absender dieser Nachricht?
  if (event.origin !== "http://example.com:8080") return;

  // event.source ist window.opener
  // event.data ist "Hallo da!"

  // Angenommen, Sie haben den Ursprung der empfangenen Nachricht überprüft (was
  // Sie in jedem Fall tun müssen), ist ein praktisches Idiom zur Antwort
  // auf eine Nachricht, postMessage auf event.source aufzurufen und
  // event.origin als targetOrigin anzugeben.
  event.source.postMessage(
    "Hallo auch Ihnen! Die geheime Antwort " + "ist: rheeeeet!",
    event.origin,
  );
});
```

### Hinweise

Jedes Skript in einem Dokument in einem Fenster kann anfordern, dass eine Nachricht an ein Dokument in einem anderen Fenster gesendet wird, dessen Fensterobjekt es erlangt hat, indem es `.postMessage()` auf diesem Fensterobjekt aufruft. Folglich muss jeder Event-Listener, der Nachrichten empfängt, **zuerst die Identität des Absenders der Nachricht überprüfen**, indem die Eigenschaften `origin` und möglicherweise `source` verwendet werden. Dies kann nicht oft genug betont werden: **Das Versäumnis, die Eigenschaften `origin` und möglicherweise `source` zu überprüfen, ermöglicht Cross-Site-Scripting-Angriffe.**

Wie bei jedem asynchron-dispatchten Skript (Timeouts, vom Benutzer generierte Ereignisse) ist es für den Aufrufer von `postMessage` nicht möglich festzustellen, wann ein Event-Handler, der auf von `postMessage` gesendete Ereignisse lauscht, eine Ausnahme auslöst.

Nachdem `postMessage()` aufgerufen wurde, wird das {{domxref("MessageEvent")}} _erst nach Abschluss aller anhängigen Ausführungskontexte_ versendet. Wenn `postMessage()` z. B. in einem Event-Handler aufgerufen wird, wird dieser Event-Handler vollständig ausgeführt, ebenso wie alle verbleibenden Handler für dasselbe Ereignis, bevor das {{domxref("MessageEvent")}} gesendet wird.

Der Wert der `origin` Eigenschaft des gesendeten Ereignisses wird nicht durch den aktuellen Wert von `document.domain` im aufrufenden Fenster beeinflusst.

Nur für IDN-Hostnamen ist der Wert der `origin` Eigenschaft nicht durchgehend Unicode oder Punycode; um größtmögliche Kompatibilität zu gewährleisten, sollten Sie sowohl auf die IDN- als auch die Punycode-Werte prüfen, wenn Sie erwarten, Nachrichten von IDN-Seiten zu erhalten. Dieser Wert wird schließlich durchgängig IDN sein, aber momentan sollten Sie sowohl IDN- als auch Punycode-Formen behandeln.

Der Wert der `origin` Eigenschaft, wenn das sendende Fenster eine [`javascript:`](/de/docs/Web/URI/Schemes/javascript) oder [`data:`](/de/docs/Web/URI/Schemes/data) URL enthält, ist der Ursprung des Skripts, das die URL geladen hat.

### Verwendung von window\.postMessage in Erweiterungen {{Non-standard_inline}}

`window.postMessage` ist für JavaScript verfügbar, das im Chrome-Code ausgeführt wird (z. B. in Erweiterungen und privilegiertem Code), jedoch ist die `source` Eigenschaft des gesendeten Ereignisses aus Sicherheitsgründen immer `null`. (Die anderen Eigenschaften haben ihre erwarteten Werte.)

Es ist nicht möglich, dass Content- oder Web-Context-Skripte einen `targetOrigin` angeben, um direkt mit einer Erweiterung zu kommunizieren (entweder mit dem Hintergrundskript oder einem Content-Skript). Web- oder Content-Skripte _können_ `window.postMessage` mit einem `targetOrigin` von `"*"` verwenden, um an jeden Listener zu senden, dies wird jedoch nicht empfohlen, da eine Erweiterung nicht sicher sein kann, welcher Ursprung solche Nachrichten hat, und andere Listener (einschließlich solcher, die Sie nicht kontrollieren) mithören können.

Content-Skripte sollten {{WebExtAPIRef("runtime.sendMessage")}} verwenden, um mit dem Hintergrundskript zu kommunizieren. Web-Context-Skripte können benutzerdefinierte Ereignisse verwenden, um mit Content-Skripten zu kommunizieren (mit zufällig generierten Ereignisnamen, falls erforderlich, um Abhören von der Gästeseite zu verhindern).

Schließlich erfordert das Senden einer Nachricht an eine Seite mit einer `file:` URL derzeit, dass das `targetOrigin` Argument `"*"` ist. `file://` kann nicht als Sicherheitsbeschränkung verwendet werden; diese Beschränkung könnte in Zukunft geändert werden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("Document.domain")}}
- {{domxref("CustomEvent")}}
- {{domxref("BroadcastChannel")}} - Für gleiche Ursprungskommunikation.
