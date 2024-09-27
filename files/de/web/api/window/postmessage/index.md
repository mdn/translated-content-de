---
title: "Window: postMessage() Methode"
short-title: postMessage()
slug: Web/API/Window/postMessage
l10n:
  sourceCommit: 1a48b6abdd27e168c78edcf04a7a9f6a8e0fdc15
---

{{ApiRef("HTML DOM")}}

Die **`window.postMessage()`** Methode ermöglicht sicher die Cross-Origin-Kommunikation zwischen [`Window`](/de/docs/Web/API/Window) Objekten; _z.B._ zwischen einer Seite und einem von ihr geöffneten Pop-up oder zwischen einer Seite und einem in ihr eingebetteten `iframe`.

Normalerweise dürfen Skripte auf verschiedenen Seiten nur dann aufeinander zugreifen, wenn die Seiten, von denen sie stammen, denselben [Ursprung](/de/docs/Web/API/Location/origin) haben (auch bekannt als "[same-origin policy](/de/docs/Web/Security/Same-origin_policy)"). `window.postMessage()` bietet einen kontrollierten Mechanismus, um diese Einschränkung sicher zu umgehen (wenn sie ordnungsgemäß verwendet wird).

Darüber hinaus muss ein zugreifendes Skript zuvor das Fensterobjekt des zugegriffenen Dokuments erhalten haben. Dies kann durch Methoden wie [`window.open()`](/de/docs/Web/API/Window/open) für Pop-ups oder [`iframe.contentWindow`](/de/docs/Web/API/HTMLIFrameElement/contentWindow) für `iframes` geschehen.

Im Allgemeinen kann ein Fenster einen Verweis auf ein anderes erhalten (_z.B._ über `targetWindow = window.opener`) und dann ein [`MessageEvent`](/de/docs/Web/API/MessageEvent) darauf mit `targetWindow.postMessage()` senden. Das empfangende Fenster kann dann [dieses Ereignis entsprechend behandeln](/de/docs/Web/Events/Event_handlers). Die Argumente, die an `window.postMessage()` übergeben werden (\_d.h. die "Nachricht"), sind [über das Ereignisobjekt im empfangenden Fenster zugänglich](#das_gesendete_ereignis).

## Syntax

```js-nolint
postMessage(message)
postMessage(message, targetOrigin)
postMessage(message, targetOrigin, transfer)

postMessage(message, options)
```

### Parameter

- `message`
  - : Daten, die an das andere Fenster gesendet werden sollen. Die Daten werden unter Verwendung des {{domxref("Web_Workers_API/Structured_clone_algorithm", "strukturierter Klonalgoalgorithmus", "", 1)}} serialisiert. Dies bedeutet, dass Sie eine Vielzahl von Datenobjekten sicher an das Ziel-Fenster übergeben können, ohne sie selbst serialisieren zu müssen.
- `targetOrigin` {{optional_Inline}}
  - : Gibt den [Ursprung](/de/docs/Glossary/Origin) an, den das empfangende Fenster besitzen muss, um das Ereignis zu empfangen. Damit das Ereignis gesendet wird, muss der Ursprung genau übereinstimmen (einschließlich Schema, Hostname und Port). Wenn dieser Parameter weggelassen wird, wird er standardmäßig auf den Ursprung gesetzt, der die Methode aufruft. Dieser Mechanismus bietet die Kontrolle darüber, wohin Nachrichten gesendet werden; Zum Beispiel wäre es absolut wichtig, wenn `postMessage()` verwendet wird, um ein Passwort zu übertragen, dass dieses Argument eine URI ist, deren Ursprung mit dem beabsichtigten Empfänger der Nachricht übereinstimmt, die das Passwort enthält, um zu verhindern, dass das Passwort von einem böswilligen Dritten abgefangen wird. `*` kann ebenfalls angegeben werden, was bedeutet, dass die Nachricht an einen Listener mit beliebigem Ursprung gesendet werden kann.
    > [!NOTE]
    > Geben Sie immer einen spezifischen `targetOrigin` an, nicht `*`, wenn Sie wissen, wo sich das Dokument des anderen Fensters befinden sollte. Das Versäumnis, ein spezifisches Ziel anzugeben, könnte Daten an eine böswillige Website offenlegen.
- `transfer` {{optional_inline}}
  - : Ein optionales [Array](/de/docs/Web/JavaScript/Reference/Global_Objects/Array) von [Transferobjekten](/de/docs/Web/API/Web_Workers_API/Transferable_objects), deren Eigentum übertragen werden soll. Das Eigentum dieser Objekte wird an die Zielseite übergeben und sie sind auf der sendenden Seite nicht mehr nutzbar. Diese Transferobjekte sollten an die Nachricht angehängt werden; andernfalls würden sie verschoben, aber tatsächlich auf dem empfangenden Ende nicht zugänglich sein.
- `options` {{optional_inline}}
  - : Ein optionales Objekt, das die folgenden Eigenschaften enthält:
    - `transfer` {{optional_inline}}
      - : Hat die gleiche Bedeutung wie der `transfer` Parameter.
    - `targetOrigin` {{optional_inline}}
      - : Hat die gleiche Bedeutung wie der `targetOrigin` Parameter.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Das gesendete Ereignis

Ein `window` kann für gesendete Nachrichten lauschen, indem es folgendes JavaScript ausführt:

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
  - : Das Objekt, das vom anderen Fenster gesendet wurde.
- `origin`
  - : Der [Ursprung](/de/docs/Glossary/origin) des Fensters, das die Nachricht zum Zeitpunkt zu dem `postMessage` aufgerufen wurde, gesendet hat. Dieser String ist die Verkettung des Protokolls und "://", des Hostnamens, falls einer existiert, und ":" gefolgt von einer Portnummer, wenn ein Port vorhanden ist und sich vom Standardport für das gegebene Protokoll unterscheidet. Typische Ursprünge sind `https://example.org` (impliziert Port `443`), `http://example.net` (impliziert Port `80`) und `http://example.com:8080`. Beachten Sie, dass dieser Ursprung _nicht_ garantiert der aktuelle oder zukünftige Ursprung dieses Fensters ist, das möglicherweise an einen anderen Ort navigiert wurde, seit `postMessage` aufgerufen wurde.
- `source`
  - : Ein Verweis auf das [`window`](/de/docs/Web/API/Window) Objekt, das die Nachricht gesendet hat; Sie können dies verwenden, um eine zweiseitige Kommunikation zwischen zwei Fenstern mit unterschiedlichen Ursprüngen herzustellen.

## Sicherheitsbedenken

**Wenn Sie nicht erwarten, Nachrichten von anderen Websites zu erhalten, _fügen Sie keine_ Ereignislistener für `message` Ereignisse hinzu.** Dies ist ein vollkommen narrensicherer Weg, um Sicherheitsprobleme zu vermeiden.

Wenn Sie erwarten, Nachrichten von anderen Websites zu erhalten, **verifizieren Sie immer die Identität des Absenders** mithilfe der `origin` und möglicherweise `source` Eigenschaften. Jedes Fenster (einschließlich beispielsweise `http://evil.example.com`) kann eine Nachricht an jedes andere Fenster innerhalb der `iframe`-Hierarchie von oben bis zu jedem darunter liegenden `iframe` des aktuellen Dokuments senden. Nachdem Sie die Identität überprüft haben, sollten Sie jedoch **immer die Syntax der erhaltenen Nachricht überprüfen**. Andernfalls könnte eine Sicherheitslücke auf der Website, von der Sie erwarten, nur vertrauenswürdige Nachrichten zu senden, eine Cross-Site-Scripting-Lücke auf Ihrer Website öffnen.

**Geben Sie immer einen genauen Zielursprung an, nicht `*`, wenn Sie `postMessage` verwenden, um Daten an andere Fenster zu senden.** Eine böswillige Seite kann den Standort des Fensters ohne Ihr Wissen ändern und somit die Daten, die mit `postMessage` gesendet werden, abfangen.

### Sicheres Messaging mit gemeinsam genutztem Speicher

Wenn `postMessage()` bei der Verwendung mit {{jsxref("SharedArrayBuffer")}} Objekten einen Fehler auslöst, müssen Sie möglicherweise sicherstellen, dass Sie Ihre Seite korrekt isoliert haben. Gemeinsamer Speicher wird durch zwei HTTP-Header geschützt:

- {{HTTPHeader("Cross-Origin-Opener-Policy")}} mit `same-origin` als Wert (schützt Ihren Ursprung vor Angreifern)
- {{HTTPHeader("Cross-Origin-Embedder-Policy")}} mit `require-corp` oder `credentialless` als Wert (schützt Opfer vor Ihrem Ursprung)

```http
Cross-Origin-Opener-Policy: same-origin
Cross-Origin-Embedder-Policy: require-corp
```

Um zu überprüfen, ob die Cross-Origin-Isolation erfolgreich war, können Sie gegen die [`Window.crossOriginIsolated`](/de/docs/Web/API/Window/crossOriginIsolated) Eigenschaft testen, die in Fenster- und Worker-Kontexten verfügbar ist:

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

Jedes Skript in einem Dokument in einem Fenster kann anfordern, dass eine Nachricht an ein Dokument in einem anderen Fenster gesendet wird, dessen Fensterobjekt es erhalten hat, indem es `.postMessage()` auf diesem Fensterobjekt aufruft. Folglich muss jeder verwendete Ereignislistener zum Empfangen von Nachrichten **zuerst die Identität des Absenders überprüfen**, indem die `origin` und möglicherweise die `source` Eigenschaften verwendet werden. Dies kann nicht genug betont werden: **Das Versäumnis, die `origin` und möglicherweise `source` Eigenschaften zu überprüfen, ermöglicht Cross-Site-Scripting-Angriffe.**

Wie bei jedem asynchron gesendeten Skript (Timeouts, benutzergenerierte Ereignisse) ist es für den Aufrufer von `postMessage` nicht möglich, zu erkennen, wann ein Ereignis-Handler, der auf von `postMessage` gesendete Ereignisse lauscht, eine Ausnahme auslöst.

Nachdem `postMessage()` aufgerufen wurde, wird das [`MessageEvent`](/de/docs/Web/API/MessageEvent) _erst nach Ablauf aller ausstehenden Ausführungskontexte_ gesendet. Wenn `postMessage()` beispielsweise in einem Ereignishandler aufgerufen wird, wird dieser Ereignishandler vollständig ausgeführt, ebenso wie alle verbleibenden Handler für dasselbe Ereignis, bevor das [`MessageEvent`](/de/docs/Web/API/MessageEvent) gesendet wird.

Der Wert der `origin` Eigenschaft des gesendeten Ereignisses wird nicht vom aktuellen Wert von `document.domain` im aufrufenden Fenster beeinflusst.

Nur für IDN-Hostnamen ist der Wert der `origin` Eigenschaft nicht konsequent Unicode oder Punycode; für maximale Kompatibilität prüfen Sie sowohl auf die IDN- als auch die Punycode-Werte, wenn Sie diese Eigenschaft verwenden und Nachrichten von IDN-Websites erwarten. Dieser Wert wird letztendlich konsequent IDN sein, aber derzeit sollten Sie sowohl IDN- als auch Punycode-Formen verarbeiten.

Der Wert der `origin` Eigenschaft bei einem sendenden Fenster, das eine [`javascript:`](/de/docs/Web/URI/Schemes/javascript) oder [`data:`](/de/docs/Web/URI/Schemes/data) URL enthält, ist der Ursprung des Skripts, das die URL geladen hat.

### Verwendung von window.postMessage in Erweiterungen {{Non-standard_inline}}

`window.postMessage` steht JavaScript zur Verfügung, das in Chrome-Code (z.B. in Erweiterungen und privilegiertem Code) ausgeführt wird, aber die `source` Eigenschaft des gesendeten Ereignisses ist immer `null` aufgrund einer Sicherheitsbeschränkung. (Die anderen Eigenschaften haben ihre erwarteten Werte.)

Es ist für Inhalts- oder Web-Kontextskripte nicht möglich, einen `targetOrigin` festzulegen, um direkt mit einer Erweiterung (entweder das Hintergrundskript oder ein Inhaltskript) zu kommunizieren. Web- oder Inhalts-Skripte _können_ `window.postMessage` mit einem `targetOrigin` von `"*"` verwenden, um an jeden Listener zu senden, aber dies wird nicht empfohlen, da eine Erweiterung nicht sicher sein kann über den Ursprung solcher Nachrichten, und andere Listener (einschließlich derer, die Sie nicht steuern) können zuhören.

Inhalts-Skripte sollten {{WebExtAPIRef("runtime.sendMessage")}} verwenden, um mit dem Hintergrundskript zu kommunizieren. Web-Kontext-Skripte können benutzerdefinierte Ereignisse verwenden, um mit Inhalts-Skripten zu kommunizieren (mit zufällig generierten Ereignisnamen, falls nötig, um ein Ausspähen durch die Gastseite zu verhindern).

Schließlich erfordert das Senden einer Nachricht an eine Seite mit einer `file:` URL derzeit, dass das `targetOrigin` Argument `"*"` ist. `file://` kann nicht als Sicherheitsbeschränkung verwendet werden; diese Einschränkung könnte in Zukunft geändert werden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`Document.domain`](/de/docs/Web/API/Document/domain)
- [`CustomEvent`](/de/docs/Web/API/CustomEvent)
- [`BroadcastChannel`](/de/docs/Web/API/BroadcastChannel) - Für Kommunikation mit gleichem Ursprung.
