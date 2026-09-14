---
title: "RTCPeerConnection: Methode createDataChannel()"
short-title: createDataChannel()
slug: Web/API/RTCPeerConnection/createDataChannel
l10n:
  sourceCommit: 9c560a9d9de6f663ada0c1bebaf93a3c76e0901d
---

{{APIRef("WebRTC")}}

Die Methode **`createDataChannel()`** der Schnittstelle [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) erstellt einen neuen Kanal, der mit dem Remote-Peer verknüpft ist und über den jede Art von Daten übertragen werden kann.
Dies kann für Back-Channel-Inhalte nützlich sein, etwa Bilder, Dateiübertragungen, Text-Chats, Spielaktualisierungspakete usw.

Wenn der neue Datenkanal der erste ist, der der Verbindung hinzugefügt wird, wird eine Neuverhandlung gestartet, indem ein [`negotiationneeded`](/de/docs/Web/API/RTCPeerConnection/negotiationneeded_event)-Ereignis ausgelöst wird.

Sie können diese Neuverhandlung vermeiden, indem Sie `alwaysNegotiateDataChannels` im Konstruktor [`RTCPeerConnection()`](/de/docs/Web/API/RTCPeerConnection/RTCPeerConnection) auf `true` setzen. Dadurch wird festgelegt, dass die Anwendung Datenkanäle im {{Glossary("SDP", "SDP")}}-Angebot aushandelt, bevor sie einen [`RTCDataChannel`](/de/docs/Web/API/RTCDataChannel) erstellt. Dadurch müssen Sie vor Ihrem ersten Aufruf von `createOffer()` keinen Datenkanal erstellen und keine zweite Neuverhandlung akzeptieren.

## Syntax

```js-nolint
createDataChannel(label)
createDataChannel(label, options)
```

### Parameter

- `label`
  - : Ein für Menschen lesbarer Name für den Kanal.
    Diese Zeichenfolge darf nicht länger als 65.535 Byte sein.
- `options` {{optional_inline}}
  - : Ein Objekt, das Konfigurationsoptionen für den Datenkanal bereitstellt.
    Es kann die folgenden Felder enthalten:
    - `ordered` {{optional_inline}}
      - : Gibt an, ob Nachrichten, die über den [`RTCDataChannel`](/de/docs/Web/API/RTCDataChannel) gesendet werden, in derselben Reihenfolge an ihrem Ziel eintreffen müssen, in der sie gesendet wurden (`true`), oder ob sie in anderer Reihenfolge eintreffen dürfen (`false`).
        **Standard: `true`.**
    - `maxPacketLifeTime` {{optional_inline}}
      - : Die maximale Anzahl von Millisekunden, die Übertragungsversuche für eine Nachricht im unzuverlässigen Modus dauern dürfen.
        Obwohl dieser Wert eine vorzeichenlose 16-Bit-Zahl ist, kann jeder User-Agent ihn auf einen als angemessen erachteten Höchstwert begrenzen.
        **Standard: `null`.**
    - `maxRetransmits` {{optional_inline}}
      - : Die maximale Anzahl von Versuchen, die der User-Agent unternehmen soll, um eine Nachricht erneut zu übertragen, deren erste Übertragung im unzuverlässigen Modus fehlgeschlagen ist.
        Obwohl dieser Wert eine vorzeichenlose 16-Bit-Zahl ist, kann jeder User-Agent ihn auf einen als angemessen erachteten Höchstwert begrenzen.
        **Standard: `null`.**
    - `protocol` {{optional_inline}}
      - : Der Name des Subprotokolls, das gegebenenfalls auf dem [`RTCDataChannel`](/de/docs/Web/API/RTCDataChannel) verwendet wird;
        andernfalls die leere Zeichenfolge (`""`).
        **Standard: leere Zeichenfolge (`""`).**
        Diese Zeichenfolge darf nicht länger als 65.535 _Byte_ sein.
    - `negotiated` {{optional_inline}}
      - : Standardmäßig (`false`) werden Datenkanäle In-Band ausgehandelt, wobei eine Seite `createDataChannel` aufruft und die andere Seite mithilfe des Event-Handlers [`ondatachannel`](/de/docs/Web/API/RTCPeerConnection/datachannel_event) auf das Ereignis [`RTCDataChannelEvent`](/de/docs/Web/API/RTCDataChannelEvent) wartet.
        Alternativ (`true`) können sie Out-of-Band ausgehandelt werden, wobei beide Seiten `createDataChannel` mit einer vereinbarten ID aufrufen.
        **Standard: `false`.**
    - `id` {{optional_inline}}
      - : Eine numerische 16-Bit-ID für den Kanal;
        zulässige Werte sind 0 bis 65534.
        Wenn Sie diese Option nicht angeben, wählt der User-Agent eine ID für Sie aus.

> [!NOTE]
> Diese Optionen stellen die per Skript festlegbare Teilmenge der Eigenschaften der Schnittstelle [`RTCDataChannel`](/de/docs/Web/API/RTCDataChannel) dar.

### Rückgabewert

Ein neues [`RTCDataChannel`](/de/docs/Web/API/RTCDataChannel)-Objekt mit dem angegebenen `label`, das mithilfe der durch `options` angegebenen Optionen konfiguriert wird, falls dieser Parameter enthalten ist; andernfalls werden die oben aufgeführten Standardwerte festgelegt.

### Ausnahmen

- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) geschlossen ist.
- {{jsxref("TypeError")}}
  - : Wird in den folgenden Situationen ausgelöst:
    - Die Zeichenfolge für Label und/oder Protokoll ist zu lang; diese dürfen nicht länger als 65.535 Byte sein (Byte statt Zeichen).
    - Die `id` ist 65535. Obwohl dies ein gültiger vorzeichenloser 16-Bit-Wert ist, ist er kein zulässiger Wert für `id`.
- `SyntaxError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn für sowohl die Optionen `maxPacketLifeTime` als auch `maxRetransmits` Werte angegeben wurden.
    Sie dürfen nur für eine dieser Optionen einen Wert ungleich `null` angeben.
- `ResourceInUse` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn eine `id` angegeben wurde, aber ein anderer [`RTCDataChannel`](/de/docs/Web/API/RTCDataChannel) bereits denselben Wert verwendet.
- `OperationError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn entweder die angegebene `id` bereits verwendet wird oder, falls keine `id` angegeben wurde, die WebRTC-Schicht keine ID automatisch generieren konnte, weil alle IDs verwendet werden.

## Beispiele

Dieses Beispiel zeigt, wie ein Datenkanal erstellt und Handler für die Ereignisse [`open`](/de/docs/Web/API/RTCDataChannel/open_event) und [`message`](/de/docs/Web/API/RTCDataChannel/message_event) eingerichtet werden, um darüber Nachrichten zu senden und zu empfangen (der Kürze halber wird im Beispiel angenommen, dass `onnegotiationneeded` eingerichtet ist).

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

Alternativ kann eine symmetrischere Out-of-Band-Aushandlung mit einer vereinbarten ID verwendet werden (hier 0):

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

Ein ausführlicheres Beispiel, das zeigt, wie die Verbindung und der Kanal hergestellt werden, finden Sie unter [Ein einfaches RTCDataChannel-Beispiel](/de/docs/Web/API/WebRTC_API/Simple_RTCDataChannel_sample).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`RTCDataChannel`](/de/docs/Web/API/RTCDataChannel)
- [Ein einfaches RTCDataChannel-Beispiel](/de/docs/Web/API/WebRTC_API/Simple_RTCDataChannel_sample)
- [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection)
