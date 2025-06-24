---
title: "RTCPeerConnection: createDataChannel() Methode"
short-title: createDataChannel()
slug: Web/API/RTCPeerConnection/createDataChannel
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{APIRef("WebRTC")}}

Die **`createDataChannel()`** Methode der [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) Schnittstelle erstellt einen neuen Kanal, der mit dem Remote-Peer verbunden ist, über den beliebige Daten übertragen werden können. Dies kann nützlich für Back-Channel-Inhalte sein, wie Bilder, Dateitransfer, Text-Chat, Spiel-Update-Pakete und so weiter.

Wenn der neue Datenkanal der erste ist, der zur Verbindung hinzugefügt wird, wird durch das Auslösen eines [`negotiationneeded`](/de/docs/Web/API/RTCPeerConnection/negotiationneeded_event) Ereignisses eine Neuverhandlung gestartet.

## Syntax

```js-nolint
createDataChannel(label)
createDataChannel(label, options)
```

### Parameter

- `label`
  - : Ein menschenlesbarer Name für den Kanal.
    Diese Zeichenkette darf nicht länger als 65.535 Bytes sein.
- `options` {{optional_inline}}
  - : Ein Objekt, das Konfigurationsoptionen für den Datenkanal bereitstellt. Es kann folgende Felder enthalten:
    - `ordered` {{optional_inline}}
      - : Gibt an, ob Nachrichten, die auf dem [`RTCDataChannel`](/de/docs/Web/API/RTCDataChannel) gesendet werden, in der gleichen Reihenfolge an ihrem Ziel ankommen müssen, in der sie gesendet wurden (`true`), oder ob sie auch außer der Reihenfolge ankommen dürfen (`false`).
        **Standard: `true`.**
    - `maxPacketLifeTime` {{optional_inline}}
      - : Die maximale Anzahl von Millisekunden, die Versuche, eine Nachricht im unzuverlässigen Modus zu übertragen, dauern dürfen. Während dieser Wert eine 16-Bit-Nummer ist, kann jeder Benutzeragent ihn auf das von ihm als angemessen erachtete Maximum begrenzen.
        **Standard: `null`.**
    - `maxRetransmits` {{optional_inline}}
      - : Die maximale Anzahl von Versuchen, eine Nachricht, die beim ersten Mal im unzuverlässigen Modus fehlschlägt, erneut zu übertragen. Während dieser Wert eine 16-Bit-Zahl ist, kann jeder Benutzeragent ihn auf das von ihm als angemessen erachtete Maximum begrenzen.
        **Standard: `null`.**
    - `protocol` {{optional_inline}}
      - : Der Name des auf dem [`RTCDataChannel`](/de/docs/Web/API/RTCDataChannel) verwendeten Subprotokolls, falls vorhanden; andernfalls der leere String (`""`).
        **Standard: leerer String (`""`).**
        Diese Zeichenkette darf nicht länger als 65.535 Bytes sein.
    - `negotiated` {{optional_inline}}
      - : Standardmäßig (`false`) werden Datenkanäle im Band verhandelt, wobei eine Seite `createDataChannel` aufruft und die andere Seite das [`RTCDataChannelEvent`](/de/docs/Web/API/RTCDataChannelEvent) Ereignis mithilfe des [`ondatachannel`](/de/docs/Web/API/RTCPeerConnection/datachannel_event) Ereignishandlers überwacht. Alternativ (`true`) können sie außer Band verhandelt werden, wobei beide Seiten `createDataChannel` mit einer vereinbarten ID aufrufen.
        **Standard: `false`.**
    - `id` {{optional_inline}}
      - : Eine 16-Bit numerische ID für den Kanal; zulässige Werte sind 0 bis 65534. Wenn Sie diese Option nicht angeben, wählt der Benutzeragent eine ID für Sie aus.

> [!NOTE]
> Diese Optionen repräsentieren die skript-setzbare Teilmenge der Eigenschaften auf der [`RTCDataChannel`](/de/docs/Web/API/RTCDataChannel) Schnittstelle.

### Rückgabewert

Ein neues [`RTCDataChannel`](/de/docs/Web/API/RTCDataChannel) Objekt mit dem angegebenen `label`, das anhand der vom Parameter `options` spezifizierten Optionen konfiguriert ist, wenn dieser Parameter enthalten ist; andernfalls werden die oben aufgeführten Standardwerte festgelegt.

### Ausnahmen

- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Ausgelöst, wenn die [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) geschlossen ist.
- {{jsxref("TypeError")}}
  - : Ausgelöst in folgenden Situationen:
    - Der label und/oder der Protokollstring ist zu lang; diese können nicht länger als 65.535 Bytes sein (Bytes, nicht Zeichen).
    - Die `id` ist 65535. Obwohl dies ein gültiger 16-Bit-Wert ist, ist er kein zulässiger Wert für `id`.
- `SyntaxError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Ausgelöst, wenn Werte für sowohl die `maxPacketLifeTime` als auch die `maxRetransmits` Optionen angegeben wurden. Sie dürfen nur für eine dieser Optionen einen nicht-`null`-Wert angeben.
- `ResourceInUse` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Ausgelöst, wenn eine `id` angegeben wurde, aber ein anderer [`RTCDataChannel`](/de/docs/Web/API/RTCDataChannel) bereits denselben Wert verwendet.
- `OperationError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Ausgelöst, wenn entweder die angegebene `id` bereits in Gebrauch ist, oder wenn keine `id` angegeben wurde, die WebRTC-Schicht jedoch keine ID automatisch generieren konnte, weil alle IDs in Verwendung sind.

## Beispiele

Dieses Beispiel zeigt, wie ein Datenkanal erstellt und Ereignishandler für die [`open`](/de/docs/Web/API/RTCDataChannel/open_event) und [`message`](/de/docs/Web/API/RTCDataChannel/message_event) Ereignisse eingerichtet werden, um Nachrichten darüber zu senden und zu empfangen (Der Einfachheit halber wird angenommen, dass onnegotiationneeded eingerichtet ist).

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

Alternativ kann eine symmetrischere außer-Band Verhandlung verwendet werden, mit einer vereinbarten ID (hier 0):

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

Für ein ausführlicheres Beispiel, das zeigt, wie die Verbindung und der Kanal eingerichtet werden, siehe [Ein einfaches RTCDataChannel Beispiel](/de/docs/Web/API/WebRTC_API/Simple_RTCDataChannel_sample).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`RTCDataChannel`](/de/docs/Web/API/RTCDataChannel)
- [Ein einfaches RTCDataChannel Beispiel](/de/docs/Web/API/WebRTC_API/Simple_RTCDataChannel_sample)
- [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection)
