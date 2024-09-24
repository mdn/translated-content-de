---
title: "RTCPeerConnection: Methode createDataChannel()"
short-title: createDataChannel()
slug: Web/API/RTCPeerConnection/createDataChannel
l10n:
  sourceCommit: 4f35a8237ee0842beb9cfef3354e05464ad7ce1a
---

{{APIRef("WebRTC")}}

Die **`createDataChannel()`** Methode der {{domxref("RTCPeerConnection")}}-Schnittstelle erstellt einen neuen Kanal, der mit dem entfernten Peer verknüpft ist, über den beliebige Daten übertragen werden können. Dies kann nützlich sein für Back-Channel-Inhalte, wie Bilder, Dateitransfer, Text-Chat, Spiel-Update-Pakete und so weiter.

Wenn der neue Datenkanal der erste ist, der der Verbindung hinzugefügt wird, wird eine Neuverhandlung durch ein {{DOMxRef("RTCPeerConnection/negotiationneeded_event", "negotiationneeded")}}-Ereignis gestartet.

## Syntax

```js-nolint
createDataChannel(label)
createDataChannel(label, options)
```

### Parameter

- `label`
  - : Ein für Menschen lesbarer Name für den Kanal.
    Dieser String darf nicht länger als 65.535 Bytes sein.
- `options` {{optional_inline}}

  - : Ein Objekt, das Konfigurationsoptionen für den Datenkanal bereitstellt.
    Es kann die folgenden Felder enthalten:

    - `ordered` {{optional_inline}}
      - : Gibt an, ob Nachrichten, die über den {{domxref("RTCDataChannel")}} gesendet werden, in der gleichen Reihenfolge am Zielort ankommen müssen, in der sie gesendet wurden (`true`), oder ob sie außer der Reihenfolge ankommen dürfen (`false`).
        **Standard: `true`.**
    - `maxPacketLifeTime` {{optional_inline}}
      - : Die maximale Anzahl von Millisekunden, die Übertragungsversuche einer Nachricht im unzuverlässigen Modus dauern dürfen.
        Obwohl dieser Wert eine 16-Bit-unsigned-Zahl ist, kann jeder Benutzeragent ihn auf das Maximum begrenzen, das er für angemessen hält.
        **Standard: `null`.**
    - `maxRetransmits` {{optional_inline}}
      - : Die maximale Anzahl der Versuche, die der Benutzeragent unternehmen sollte, um eine Nachricht erneut zu übermitteln, die beim ersten Mal im unzuverlässigen Modus gescheitert ist.
        Obwohl dieser Wert eine 16-Bit-unsigned-Zahl ist, kann jeder Benutzeragent ihn auf das Maximum begrenzen, das er für angemessen hält.
        **Standard: `null`.**
    - `protocol` {{optional_inline}}
      - : Der Name des Sub-Protokolls, das auf dem {{domxref("RTCDataChannel")}} verwendet wird, falls vorhanden; andernfalls der leere String (`""`).
        **Standard: leerer String (`""`).**
        Dieser String darf nicht länger als 65.535 _Bytes_ sein.
    - `negotiated` {{optional_inline}}
      - : Standardmäßig (`false`) werden Datenkanäle im Band verhandelt, wobei eine Seite `createDataChannel` aufruft und die andere Seite das {{domxref("RTCDataChannelEvent")}}-Ereignis mit dem {{DOMxRef("RTCPeerConnection.datachannel_event", "ondatachannel")}} Ereignishandler abhört.
        Alternativ (`true`) können sie außerhalb des Bandes verhandelt werden, wobei beide Seiten `createDataChannel` mit einer vereinbarten ID aufrufen.
        **Standard: `false`.**
    - `id` {{optional_inline}}
      - : Eine 16-Bit-Zahlen-ID für den Kanal;
        erlaubte Werte sind 0 bis 65534.
        Wenn Sie diese Option nicht angeben, wählt der Benutzeragent eine ID für Sie aus.

> [!NOTE]
> Diese Optionen stellen die vom Skript einstellbare Teilmenge der Eigenschaften auf der {{domxref("RTCDataChannel")}}-Schnittstelle dar.

### Rückgabewert

Ein neues {{domxref("RTCDataChannel")}}-Objekt mit dem angegebenen `label`, konfiguriert mit den Optionen, die durch `options` spezifiziert wurden, falls dieser Parameter enthalten ist; andernfalls werden die oben aufgelisteten Standardeinstellungen verwendet.

### Ausnahmen

- `InvalidStateError` {{domxref("DOMException")}}
  - : Wird ausgelöst, wenn die {{domxref("RTCPeerConnection")}} geschlossen ist.
- {{jsxref("TypeError")}}
  - : Wird in den folgenden Situationen ausgelöst:
    - Der Label- und/oder Protokollstring ist zu lang; diese dürfen nicht länger als 65.535 Bytes sein (Bytes, nicht Zeichen).
    - Die `id` ist 65535. Obwohl dies ein gültiger unsigned 16-Bit-Wert ist, ist es kein erlaubter Wert für `id`.
- `SyntaxError` {{domxref("DOMException")}}
  - : Wird ausgelöst, wenn für beide Optionen `maxPacketLifeTime` und `maxRetransmits` Werte angegeben sind.
    Sie dürfen nur für eine dieser Optionen einen Nicht-`null`-Wert angeben.
- `ResourceInUse` {{domxref("DOMException")}}
  - : Wird ausgelöst, wenn eine `id` angegeben wurde, aber ein anderer {{domxref("RTCDataChannel")}} bereits denselben Wert verwendet.
- `OperationError` {{domxref("DOMException")}}
  - : Wird ausgelöst, wenn entweder die angegebene `id` bereits in Gebrauch ist oder, falls keine `id` angegeben wurde, die WebRTC-Ebene nicht in der Lage war, automatisch eine ID zu generieren, da alle IDs in Gebrauch sind.

## Beispiele

Dieses Beispiel zeigt, wie ein Datenkanal erstellt und Handler für die {{DOMxRef("RTCDataChannel/open_event", "open")}}- und {{DOMxRef("RTCDataChannel/message_event", "message")}}-Ereignisse eingerichtet werden, um Nachrichten darauf zu senden und zu empfangen (Der Kürze halber wird angenommen, dass onnegotiationneeded eingerichtet ist).

```js
// Offerer-Seite

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
// Answerer-Seite

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

Alternativ kann eine symmetrischere Verhandlung außerhalb des Bandes mit einer vereinbarten ID (hier 0) verwendet werden:

```js
// Beide Seiten

const pc = new RTCPeerConnection(options);
const channel = pc.createDataChannel("chat", { negotiated: true, id: 0 });
channel.onopen = (event) => {
  channel.send("Hi!");
};
channel.onmessage = (event) => {
  console.log(event.data);
};
```

Für ein ausführlicheres Beispiel, das zeigt, wie die Verbindung und der Kanal hergestellt werden, siehe [Ein einfaches RTCDataChannel-Beispiel](/de/docs/Web/API/WebRTC_API/Simple_RTCDataChannel_sample).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("RTCDataChannel")}}
- [Ein einfaches RTCDataChannel-Beispiel](/de/docs/Web/API/WebRTC_API/Simple_RTCDataChannel_sample)
- {{domxref("RTCPeerConnection")}}
