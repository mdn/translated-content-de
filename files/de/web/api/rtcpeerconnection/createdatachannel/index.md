---
title: "RTCPeerConnection: Methode createDataChannel()"
short-title: createDataChannel()
slug: Web/API/RTCPeerConnection/createDataChannel
l10n:
  sourceCommit: 4f35a8237ee0842beb9cfef3354e05464ad7ce1a
---

{{APIRef("WebRTC")}}

Die **`createDataChannel()`**-Methode der [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection)-Schnittstelle erstellt einen neuen Kanal, der mit dem entfernten Peer verknüpft ist und über den jede Art von Daten übertragen werden kann. Dies kann für Backchannel-Inhalte nützlich sein, wie beispielsweise Bilder, Dateitransfer, Text-Chat, Spielaktualisierungspakete und so weiter.

Wenn der neue Datenkanal der erste ist, der der Verbindung hinzugefügt wird, wird eine Neuverhandlung gestartet, indem ein [`negotiationneeded`](/de/docs/Web/API/RTCPeerConnection/negotiationneeded_event)-Ereignis ausgelöst wird.

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

  - : Ein Objekt, das Konfigurationsoptionen für den Datenkanal bereitstellt.
    Es kann die folgenden Felder enthalten:

    - `ordered` {{optional_inline}}
      - : Gibt an, ob Nachrichten, die über den [`RTCDataChannel`](/de/docs/Web/API/RTCDataChannel) gesendet werden, in der gleichen Reihenfolge am Ziel ankommen müssen, in der sie gesendet wurden (`true`), oder ob es erlaubt ist, dass sie außerhalb der Reihenfolge ankommen (`false`).
        **Standard: `true`.**
    - `maxPacketLifeTime` {{optional_inline}}
      - : Die maximale Anzahl von Millisekunden, die ein Versuch zum Übertragen einer Nachricht im unzuverlässigen Modus dauern kann.
        Obwohl dieser Wert eine 16-Bit-unterschriebene Zahl ist, kann jeder Benutzeragent ihn auf das Maximum begrenzen, das er für angemessen hält.
        **Standard: `null`.**
    - `maxRetransmits` {{optional_inline}}
      - : Die maximale Anzahl von Versuchen, die der Benutzeragent unternehmen sollte, um eine Nachricht, die beim ersten Mal im unzuverlässigen Modus fehlgeschlagen ist, erneut zu übertragen.
        Obwohl dieser Wert eine 16-Bit-unterschriebene Zahl ist, kann jeder Benutzeragent ihn auf das Maximum begrenzen, das er für angemessen hält.
        **Standard: `null`.**
    - `protocol` {{optional_inline}}
      - : Der Name des Unterprotokolls, das auf dem [`RTCDataChannel`](/de/docs/Web/API/RTCDataChannel) verwendet wird, falls vorhanden; andernfalls der leere String (`""`).
        **Standard: leerer String (`""`).**
        Diese Zeichenkette darf nicht länger als 65.535 Bytes sein.
    - `negotiated` {{optional_inline}}
      - : Standardmäßig (`false`) werden Datenkanäle im Band verhandelt, wobei eine Seite `createDataChannel` aufruft und die andere Seite das [`RTCDataChannelEvent`](/de/docs/Web/API/RTCDataChannelEvent)-Ereignis mit dem [`ondatachannel`](/de/docs/Web/API/RTCPeerConnection/datachannel_event)-Ereignishandler abhört.
        Alternativ (`true`) können sie außerhalb des Bandes verhandelt werden, wobei beide Seiten `createDataChannel` mit einer vereinbarten ID aufrufen.
        **Standard: `false`.**
    - `id` {{optional_inline}}
      - : Eine 16-Bit-Zahl als ID für den Kanal; erlaubte Werte sind 0 bis 65534.
        Wenn Sie diese Option nicht angeben, wählt der Benutzeragent eine ID für Sie aus.

> [!NOTE]
> Diese Optionen stellen den vom Skript festlegbaren Teilmenge der Eigenschaften auf der [`RTCDataChannel`](/de/docs/Web/API/RTCDataChannel)-Schnittstelle dar.

### Rückgabewert

Ein neues [`RTCDataChannel`](/de/docs/Web/API/RTCDataChannel)-Objekt mit dem angegebenen `label`, konfiguriert unter Verwendung der durch `options` angegebenen Optionen, wenn dieser Parameter eingeschlossen ist; andernfalls werden die oben aufgeführten Standardwerte festgelegt.

### Ausnahmen

- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn die [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) geschlossen ist.
- {{jsxref("TypeError")}}
  - : Wird in den folgenden Situationen ausgelöst:
    - Die label- und/oder Protokollzeichenfolgen sind zu lang; diese dürfen nicht länger als 65.535 Bytes sein (Bytes, nicht Zeichen).
    - Die `id` ist 65535. Obwohl dies ein gültiger 16-Bit-Wert ist, ist es kein erlaubter Wert für `id`.
- `SyntaxError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn Werte sowohl für die `maxPacketLifeTime`- als auch die `maxRetransmits`-Optionen angegeben wurden.
    Sie dürfen für nur eine dieser Optionen einen nicht-`null`-Wert angeben.
- `ResourceInUse` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn eine `id` angegeben wurde, aber ein anderer [`RTCDataChannel`](/de/docs/Web/API/RTCDataChannel) bereits denselben Wert verwendet.
- `OperationError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn entweder die angegebene `id` bereits verwendet wird oder wenn keine `id` angegeben wurde und die WebRTC-Schicht keine ID automatisch generieren konnte, da alle IDs in Gebrauch sind.

## Beispiele

Dieses Beispiel zeigt, wie Sie einen Datenkanal erstellen und Handler für die [`open`](/de/docs/Web/API/RTCDataChannel/open_event)- und [`message`](/de/docs/Web/API/RTCDataChannel/message_event)-Ereignisse einrichten, um Nachrichten darüber zu senden und zu empfangen (Der Übersichtlichkeit halber wird angenommen, dass onnegotiationneeded eingerichtet ist).

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

Alternativ kann eine symmetrischere Verhandlung außerhalb des Bandes unter Verwendung einer vereinbarten id (hier 0) genutzt werden:

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

Für ein ausführlicheres Beispiel, das zeigt, wie die Verbindung und der Kanal hergestellt werden, siehe [Ein einfaches RTCDataChannel-Beispiel](/de/docs/Web/API/WebRTC_API/Simple_RTCDataChannel_sample).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`RTCDataChannel`](/de/docs/Web/API/RTCDataChannel)
- [Ein einfaches RTCDataChannel-Beispiel](/de/docs/Web/API/WebRTC_API/Simple_RTCDataChannel_sample)
- [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection)
