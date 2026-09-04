---
title: "Window: postMessage() Methode"
short-title: postMessage()
slug: Web/API/Window/postMessage
l10n:
  sourceCommit: 6030ef1aadf967b80e2c79c3d3463cccc8ea0c95
---

{{ApiRef("HTML DOM")}}

Die **`window.postMessage()`**-Methode ermöglicht eine sichere Kommunikation zwischen [`Window`](/de/docs/Web/API/Window)-Objekten mit unterschiedlichen Ursprüngen; z.B. zwischen einer Seite und einem von ihr geöffneten Pop-up oder zwischen einer Seite und einem in sie eingebetteten iframe.

Normalerweise dürfen Skripte auf unterschiedlichen Seiten nur dann aufeinander zugreifen, wenn die Seiten den gleichen [Ursprung](/de/docs/Web/API/Location/origin) teilen (auch bekannt als die "[Same-Origin-Policy](/de/docs/Web/Security/Defenses/Same-origin_policy)"). `window.postMessage()` bietet einen kontrollierten Mechanismus, um diese Einschränkung sicher zu umgehen (wenn es ordnungsgemäß verwendet wird).

Darüber hinaus muss ein zugreifendes Skript das Fensterobjekt des zuzugreifenden Dokuments zuvor erhalten haben. Dies kann durch Methoden wie [`window.open()`](/de/docs/Web/API/Window/open) für Pop-ups oder [`iframe.contentWindow`](/de/docs/Web/API/HTMLIFrameElement/contentWindow) für iframes geschehen.

Im Allgemeinen kann ein Fenster eine Referenz zu einem anderen erhalten (z.B. über `targetWindow = window.opener`) und dann ein [`MessageEvent`](/de/docs/Web/API/MessageEvent) darauf mit `targetWindow.postMessage()` senden. Das empfangende Fenster kann dann [dieses Ereignis nach Bedarf behandeln](/de/docs/Web/API/Document_Object_Model/Events#registering_event_handlers). Die an `window.postMessage()` übergebenen Argumente (d.h. die "Nachricht") [werden dem empfangenden Fenster durch das Ereignisobjekt zugänglich gemacht](#das_gesendete_ereignis).

## Syntax

```js-nolint
postMessage(message)
postMessage(message, targetOrigin)
postMessage(message, targetOrigin, transfer)

postMessage(message, options)
```

### Parameter

- `message`
  - : Daten, die an das andere Fenster gesendet werden sollen. Die Daten werden mit dem [Structured Clone Algorithmus](/de/docs/Web/API/Web_Workers_API/Structured_clone_algorithm) serialisiert. Das bedeutet, dass Sie eine breite Palette von Datenobjekten sicher an das Ziel-Fenster übergeben können, ohne sie selbst serialisieren zu müssen.
- `targetOrigin` {{optional_Inline}}
  - : Gibt den {{Glossary("Origin", "Ursprung")}} an, den das empfangende Fenster haben muss, um das Ereignis zu empfangen. Damit das Ereignis gesendet wird, muss der Ursprung genau übereinstimmen (einschließlich Schema, Hostname und Port). Wenn dieser Parameter weggelassen wird, ist `"/"` der Standardwert, was dem Ursprung des aufrufenden Fensters entspricht. Dieser Mechanismus bietet Kontrolle darüber, wohin Nachrichten gesendet werden; zum Beispiel ist es absolut entscheidend, dass, wenn `postMessage()` verwendet wurde, um ein Passwort zu übermitteln, dieses Argument eine URI ist, deren Ursprung derselbe ist wie der des beabsichtigten Empfängers der Nachricht, um zu verhindern, dass das Passwort von einer bösartigen dritten Partei abgefangen wird. Es kann auch `*` angegeben werden, was bedeutet, dass die Nachricht an einen Listener mit einem beliebigen Ursprung gesendet werden kann.
    > [!NOTE]
    > Geben Sie immer einen spezifischen `targetOrigin` an, nicht `*`, wenn Sie wissen, wo sich das Dokument des anderen Fensters befinden soll. Das Versäumnis, einen spezifischen Zielort anzugeben, könnte Daten an eine bösartige Seite preisgeben.
    >
    > Da [`data:`](/de/docs/Web/URI/Reference/Schemes/data)-URLs undurchsichtige Ursprünge haben, müssen Sie `"*"` angeben, um Nachrichten an einen Kontext mit einer `data:`-URL zu senden.
- `transfer` {{optional_inline}}
  - : Ein optionales [Array](/de/docs/Web/JavaScript/Reference/Global_Objects/Array) von [transferierbaren Objekten](/de/docs/Web/API/Web_Workers_API/Transferable_objects), deren Besitz übertragen werden soll. Der Besitz dieser Objekte wird an die Zielseite übertragen und sie sind auf der sendenden Seite nicht mehr nutzbar. Diese transferierbaren Objekte werden nicht automatisch gesendet; sie müssen entweder in der Nachricht enthalten sein oder durch andere Mittel, wie z.B. [`MessagePort`](/de/docs/Web/API/MessagePort) über [`MessageEvent.ports`](/de/docs/Web/API/MessageEvent/ports), für den Empfänger zugänglich sein.
- `options` {{optional_inline}}
  - : Ein optionales Objekt mit den folgenden Eigenschaften:
    - `transfer` {{optional_inline}}
      - : Hat die gleiche Bedeutung wie der `transfer`-Parameter.
    - `targetOrigin` {{optional_inline}}
      - : Hat die gleiche Bedeutung wie der `targetOrigin`-Parameter.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Das gesendete Ereignis

Ein `window` kann für gesendete Nachrichten lauschen, indem es folgendes JavaScript ausführt:

```js
window.addEventListener("message", (event) => {
  if (event.origin !== "http://example.org:8080") return;

  // …
});
```

Die Eigenschaften der gesendeten Nachricht sind:

- `data`
  - : Das Objekt, das von dem anderen Fenster übergeben wurde.
- `origin`
  - : Der {{Glossary("origin", "Ursprung")}} des Fensters, das die Nachricht gesendet hat, zu dem Zeitpunkt, als `postMessage` aufgerufen wurde. Dieser String ist die Verkettung des Protokolls und "://", des Hostnamens, falls einer existiert, und ":" gefolgt von einer Portnummer, falls ein Port vorhanden ist und dieser vom Standardport für das gegebene Protokoll abweicht. Typische Ursprünge sind `https://example.org` (impliziert Port `443`), `http://example.net` (impliziert Port `80`) und `http://example.com:8080`. Beachten Sie, dass dieser Ursprung _nicht_ garantiert der aktuelle oder zukünftige Ursprung dieses Fensters ist, welches möglicherweise zu einem anderen Ort navigiert wurde, seit `postMessage` aufgerufen wurde.
- `source`
  - : Eine Referenz zum [`window`](/de/docs/Web/API/Window)-Objekt, das die Nachricht gesendet hat; Sie können dies verwenden, um eine zweiseitige Kommunikation zwischen zwei Fenstern mit unterschiedlichen Ursprüngen herzustellen.

## Sicherheitsbedenken

**Wenn Sie nicht erwarten, Nachrichten von anderen Seiten zu empfangen, _fügen Sie keine_ Ereignis-Listener für `message`-Ereignisse hinzu.** Dies ist ein völlig narrensicherer Weg, um Sicherheitsprobleme zu vermeiden.

Wenn Sie erwarten, Nachrichten von anderen Seiten zu empfangen, **verifizieren Sie immer die Identität des Absenders** mit den Eigenschaften `origin` und möglicherweise `source`. Jedes Fenster (einschließlich z.B. `http://evil.example.com`) kann eine Nachricht an jedes andere Fenster innerhalb der iframe-Hierarchie vom obersten Fenster bis zu jedem darunterliegenden iframe des aktuellen Dokuments senden. Nachdem Sie die Identität überprüft haben, sollten Sie trotzdem **immer die Syntax der empfangenen Nachricht überprüfen**. Andernfalls könnte ein Sicherheitsloch auf der Seite, die Sie vertraut haben, um nur vertrauenswürdige Nachrichten zu senden, ein Cross-Site-Scripting-Problem auf Ihrer Seite öffnen.

**Geben Sie immer einen genauen Zielursprung an, nicht `*`, wenn Sie `postMessage` verwenden, um Daten an andere Fenster zu senden.** Eine bösartige Seite kann den Ort des Fensters ohne Ihr Wissen ändern und somit die mit `postMessage` gesendeten Daten abfangen.

### Sicheres Messaging mit gemeinsamem Speicher

Wenn `postMessage()` einen Fehler auslöst, wenn es mit {{jsxref("SharedArrayBuffer")}}-Objekten verwendet wird, müssen Sie möglicherweise sicherstellen, dass Sie Ihre Seite ordnungsgemäß isoliert haben. Der gemeinsame Speicher wird durch zwei HTTP-Header geregelt:

- {{HTTPHeader("Cross-Origin-Opener-Policy")}} mit dem Wert `same-origin` (schützt Ihren Ursprung vor Angreifern)
- {{HTTPHeader("Cross-Origin-Embedder-Policy")}} mit dem Wert `require-corp` oder `credentialless` (schützt Opfer vor Ihrem Ursprung)

```http
Cross-Origin-Opener-Policy: same-origin
Cross-Origin-Embedder-Policy: require-corp
```

Um zu überprüfen, ob die Cross-Origin-Isolation erfolgreich war, können Sie die [`Window.crossOriginIsolated`](/de/docs/Web/API/Window/crossOriginIsolated)-Eigenschaft testen, die in Fenster- und Arbeiterkontexten verfügbar ist:

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

Jedes Skript in einem Dokument in einem Fenster kann anfordern, dass eine Nachricht an ein Dokument in einem anderen Fenster gesendet wird, dessen Fensterobjekt es erhalten hat, indem es `.postMessage()` auf dieses Fensterobjekt aufruft. Folglich **muss** jeder Ereignis-Listener, der zum Empfangen von Nachrichten verwendet wird, zuerst die Identität des Absenders der Nachricht mit den Eigenschaften `origin` und möglicherweise `source` überprüfen. Dies kann nicht oft genug betont werden: **Die Nichtüberprüfung der `origin`- und möglicherweise `source`-Eigenschaften ermöglicht Cross-Site-Scripting-Angriffe.**

Wie bei jedem asynchron gesendeten Skript (Timeouts, vom Benutzer generierte Ereignisse) ist es für den Aufrufer von `postMessage` nicht möglich zu erkennen, wenn ein Ereignis-Handler, der auf von `postMessage` gesendete Ereignisse lauscht, eine Ausnahme auslöst.

Nachdem `postMessage()` aufgerufen wurde, wird das [`MessageEvent`](/de/docs/Web/API/MessageEvent) _erst nach Abschluss aller ausstehenden Ausführungskontexte_ gesendet. Wenn `postMessage()` beispielsweise in einem Ereignis-Handler aufgerufen wird, wird dieser Ereignis-Handler vollständig ausgeführt, ebenso alle verbleibenden Handler für dasselbe Ereignis, bevor das [`MessageEvent`](/de/docs/Web/API/MessageEvent) gesendet wird.

Der Wert der `origin`-Eigenschaft des gesendeten Ereignisses wird nicht durch den aktuellen Wert von `document.domain` im aufrufenden Fenster beeinflusst.

Für IDN-Hostnamen ist der Wert der `origin`-Eigenschaft nicht konsistent Unicode oder Punycode; für beste Kompatibilität prüfen Sie sowohl für die IDN- als auch die Punycode-Werte, wenn Sie diese Eigenschaft verwenden und Nachrichten von IDN-Sites erwarten. Dieser Wert wird schließlich durchgehend IDN sein, aber für jetzt sollten Sie sowohl IDN- als auch Punycode-Formen berücksichtigen.

Der Wert der `origin`-Eigenschaft, wenn das sendende Fenster eine [`javascript:`](/de/docs/Web/URI/Reference/Schemes/javascript)- oder [`data:`](/de/docs/Web/URI/Reference/Schemes/data)-URL enthält, ist der Ursprung des Skripts, das die URL geladen hat.

### Verwendung von window\.postMessage in Erweiterungen {{Non-standard_inline}}

`window.postMessage` ist für JavaScript, das im Chrome-Code läuft (z.B. in Erweiterungen und privilegiertem Code), verfügbar, aber die `source`-Eigenschaft des gesendeten Ereignisses ist aus Sicherheitsgründen immer `null`. (Die anderen Eigenschaften haben ihre erwarteten Werte.)

Es ist nicht möglich, dass Inhalts- oder Webkontextscripte einen `targetOrigin` angeben, um direkt mit einer Erweiterung (entweder das Hintergrundskript oder ein Inhaltsskript) zu kommunizieren. Web- oder Inhaltskripts können `window.postMessage` mit einem `targetOrigin` von `"*"` verwenden, um an jeden Hörer zu senden, aber dies wird nicht empfohlen, da eine Erweiterung den Ursprung solcher Nachrichten nicht eindeutig feststellen kann und andere Hörer (einschließlich solcher, die Sie nicht kontrollieren) mitlesen können.

Inhaltsskripts sollten {{WebExtAPIRef("runtime.sendMessage")}} verwenden, um mit dem Hintergrundskript zu kommunizieren. Webkontextskripte können benutzerdefinierte Ereignisse verwenden, um mit Inhaltsskripten zu kommunizieren (mit zufällig generierten Ereignisnamen, falls erforderlich, um das Ausspionieren durch die Gastseite zu verhindern).

Abschließend erfordert das Senden einer Nachricht an eine Seite mit einer `file:` URL derzeit, dass das Argument `targetOrigin` `"*"` ist. `file://` kann nicht als Sicherheitsbeschränkung verwendet werden; diese Beschränkung kann in Zukunft geändert werden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`Document.domain`](/de/docs/Web/API/Document/domain)
- [`CustomEvent`](/de/docs/Web/API/CustomEvent)
- [`BroadcastChannel`](/de/docs/Web/API/BroadcastChannel) - Für die Kommunikation innerhalb desselben Ursprungs.
