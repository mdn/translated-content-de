---
title: "RTCPeerConnection: createDataChannel()-Methode"
short-title: createDataChannel()
slug: Web/API/RTCPeerConnection/createDataChannel
l10n:
  sourceCommit: 4f35a8237ee0842beb9cfef3354e05464ad7ce1a
---

{{APIRef("WebRTC")}}

Die **`createDataChannel()`**-Methode der [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection)-Schnittstelle erstellt einen neuen Kanal, der mit dem entfernten Peer verbunden ist, über den Daten jeglicher Art übertragen werden können. Dies kann nützlich sein für Nebenkanalinhalte, wie Bilder, Dateitransfer, Text-Chat, Spielaktualisierungspakete und so weiter.

Wenn der neue Datenkanal der erste ist, der zur Verbindung hinzugefügt wird, wird eine Neuverhandlung gestartet, indem ein [`negotiationneeded`](/de/docs/Web/API/RTCPeerConnection/negotiationneeded_event)-Ereignis ausgelöst wird.

## Syntax

```js-nolint
createDataChannel(label)
createDataChannel(label, options)
```

### Parameter

- `label`
  - : Ein menschenlesbarer Name für den Kanal.
    Diese Zeichenfolge darf nicht länger als 65.535 Bytes sein.
- `options` {{optional_inline}}

  - : Ein Objekt, das Konfigurationsoptionen für den Datenkanal bereitstellt.
    Es kann die folgenden Felder enthalten:

    - `ordered` {{optional_inline}}
      - : Gibt an, ob Nachrichten auf dem [`RTCDataChannel`](/de/docs/Web/API/RTCDataChannel) in der gleichen Reihenfolge ankommen müssen, in der sie gesendet wurden (`true`), oder ob sie außer der Reihenfolge ankommen dürfen (`false`).
        **Standard: `true`.**
    - `maxPacketLifeTime` {{optional_inline}}
      - : Die maximale Anzahl von Millisekunden, die Versuche zur Übertragung einer Nachricht im unzuverlässigen Modus dauern dürfen.
        Obwohl dieser Wert eine 16-Bit-Zahl ohne Vorzeichen ist, kann jeder Benutzeragent ihn auf das Maximum begrenzen, das er für angemessen hält.
        **Standard: `null`.**
    - `maxRetransmits` {{optional_inline}}
      - : Die maximale Anzahl von Versuchen, die der Benutzeragent unternehmen sollte, um eine Nachricht, die im unzuverlässigen Modus beim ersten Versuch fehlschlägt, erneut zu senden.
        Obwohl dieser Wert eine 16-Bit-Zahl ohne Vorzeichen ist, kann jeder Benutzeragent ihn auf das Maximum begrenzen, das er für angemessen hält.
        **Standard: `null`.**
    - `protocol` {{optional_inline}}
      - : Der Name des auf dem [`RTCDataChannel`](/de/docs/Web/API/RTCDataChannel) verwendeten Subprotokolls, falls vorhanden;
        andernfalls der leere String (`""`).
        **Standard: leerer String (`""`).**
        Diese Zeichenfolge darf nicht länger als 65.535 _Bytes_ sein.
    - `negotiated` {{optional_inline}}
      - : Standardmäßig (`false`) werden Datenkanäle im Inband-Modus verhandelt, wobei eine Seite `createDataChannel` aufruft und die andere Seite das [`RTCDataChannelEvent`](/de/docs/Web/API/RTCDataChannelEvent)-Ereignis mit dem [`ondatachannel`](/de/docs/Web/API/RTCPeerConnection/datachannel_event)-Ereignishandler abhört.
        Alternativ können sie (`true`) außerhalb des Bands gehandelt werden, wobei beide Seiten `createDataChannel` mit einer vereinbarten ID aufrufen.
        **Standard: `false`.**
    - `id` {{optional_inline}}
      - : Eine 16-Bit-numerische ID für den Kanal;
        erlaubte Werte sind 0 bis 65534.
        Wenn Sie diese Option nicht angeben, wählt der Benutzeragent eine ID für Sie aus.

> [!NOTE]
> Diese Optionen repräsentieren die durch Skript einstellbare Teilmenge der Eigenschaften auf der [`RTCDataChannel`](/de/docs/Web/API/RTCDataChannel)-Schnittstelle.

### Rückgabewert

Ein neues [`RTCDataChannel`](/de/docs/Web/API/RTCDataChannel)-Objekt mit dem angegebenen `label`, konfiguriert unter Verwendung der durch `options` angegebenen Optionen, falls dieser Parameter enthalten ist; andernfalls werden die oben aufgelisteten Standardwerte festgelegt.

### Ausnahmen

- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn die [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) geschlossen ist.
- {{jsxref("TypeError")}}
  - : Wird in den folgenden Situationen ausgelöst:
    - Die `label`- und/oder `protocol`-Zeichenfolge ist zu lang; diese dürfen nicht länger als 65.535 Bytes (Bytes, nicht Zeichen) sein.
    - Die `id` ist 65535. Obwohl dies ein gültiger Wert ohne Vorzeichen für 16-Bit ist, ist er für `id` nicht erlaubt.
- `SyntaxError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn sowohl für `maxPacketLifeTime` als auch für `maxRetransmits` Werte angegeben wurden.
    Sie dürfen nur für eine dieser Optionen einen nicht-`null`-Wert angeben.
- `ResourceInUse` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn eine `id` angegeben wurde, die jedoch bereits von einem anderen [`RTCDataChannel`](/de/docs/Web/API/RTCDataChannel) verwendet wird.
- `OperationError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn entweder die angegebene `id` bereits verwendet wird oder wenn keine `id` angegeben wurde und die WebRTC-Schicht keine ID automatisch generieren konnte, da alle IDs verwendet werden.

## Beispiele

Dieses Beispiel zeigt, wie Sie einen Datenkanal erstellen und Handler für die [`open`](/de/docs/Web/API/RTCDataChannel/open_event)- und [`message`](/de/docs/Web/API/RTCDataChannel/message_event)-Ereignisse einrichten, um Nachrichten darauf zu senden und zu empfangen (der Einfachheit halber wird angenommen, dass `onnegotiationneeded` eingerichtet ist).

```js
// Offerer side

const pc = new RTCPeerConnection(options);
const channel = pc.createDataChannel("chat");
channel.onopen = (event) => {
  channel.send("Hi you!");
};
channel.onmessage = (event) => {
  console.log(event.data);
};
```

```js
// Answerer side

const pc = new RTCPeerConnection(options);
pc.ondatachannel = (event) => {
  const channel = event.channel;
  channel.onopen = (event) => {
    channel.send("Hi back!");
  };
  channel.onmessage = (event) => {
    console.log(event.data);
  };
};
```

Alternativ kann eine symmetrischere Verhandlung außerhalb des Bandes verwendet werden, wobei eine vereinbarte ID (hier 0) verwendet wird:

```js
// Both sides

const pc = new RTCPeerConnection(options);
const channel = pc.createDataChannel("chat", { negotiated: true, id: 0 });
channel.onopen = (event) => {
  channel.send("Hi!");
};
channel.onmessage = (event) => {
  console.log(event.data);
};
```

Für ein gründlicheres Beispiel, das zeigt, wie die Verbindung und der Kanal hergestellt werden, siehe [Ein einfaches RTCDataChannel-Beispiel](/de/docs/Web/API/WebRTC_API/Simple_RTCDataChannel_sample).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`RTCDataChannel`](/de/docs/Web/API/RTCDataChannel)
- [Ein einfaches RTCDataChannel-Beispiel](/de/docs/Web/API/WebRTC_API/Simple_RTCDataChannel_sample)
- [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection)
