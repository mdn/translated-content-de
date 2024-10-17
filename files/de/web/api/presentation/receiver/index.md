---
title: "Präsentation: Receiver-Eigenschaft"
short-title: receiver
slug: Web/API/Presentation/receiver
l10n:
  sourceCommit: 00f46adb5616d826821d63b11eac285faf1cf4a5
---

{{APIRef("Presentation")}}{{SeeCompatTable}}{{SecureContext_Header}}

Das **schreibgeschützte** [`Presentation`](/de/docs/Web/API/Presentation)-Attribut
`receiver`, das nur in Browser-Kontexten verfügbar ist, die eine Präsentation **empfangen**, gibt das
[`PresentationReceiver`](/de/docs/Web/API/PresentationReceiver)-Objekt zurück, das verwendet werden kann, um auf den Browser-Kontext zuzugreifen und mit diesem zu kommunizieren, der die Präsentation kontrolliert. Diese Eigenschaft ist immer `null`, wenn sie von außerhalb eines Browser-Kontextes zugegriffen wird, der eine Präsentation empfängt.

## Wert

Wenn der Code in einem Kontext ausgeführt wird, der eine Präsentation empfängt, ist der zurückgegebene
Wert ein [`PresentationReceiver`](/de/docs/Web/API/PresentationReceiver), der dann verwendet werden kann, um mit dem Kontext zu kommunizieren, der die Quelle der Präsentation ist.

Wenn der aktuelle Kontext keine Präsentation empfängt, ist `receiver`
`null`.

## Beispiele

### Bestimmen, ob der Kontext eine Präsentation empfängt oder nicht

Sie können leicht feststellen, ob der Kontext der Empfänger einer Präsentation ist, indem Sie den Wert von `navigator.receiver` überprüfen. Wenn es ein nicht-null-Wert ist, empfängt der Kontext tatsächlich eine Präsentation. Wenn es `null` ist, gibt es keine eingehende Präsentation.

```js
footer.textContent = navigator.receiver ? "Receiving presentation" : "(idle)";
```

### Zugriff auf die Verbindungs-Liste

Dieses Beispiel nutzt `receiver`, um auf die Liste der eingehenden Verbindungen zuzugreifen und eine Liste der ID-Strings dieser Verbindungen zu erstellen und anzuzeigen.

```js
const listElem = document.getElementById("connection-view");

navigator.presentation.receiver.connectionList.then((connections) => {
  connections.forEach((aConnection) => {
    listElem.appendChild(document.createElement("li")).textContent =
      aConnection.id;
  });
});
```

Nachdem der Zugriff auf das Ausgabelisten-Element in der Variablen
`connectionView` hergestellt wurde, wird [`navigator.receiver`](/de/docs/Web/API/Navigator/receiver) verwendet, um eine
Referenz auf das [`PresentationReceiver`](/de/docs/Web/API/PresentationReceiver)-Objekt für diesen Kontext zu erhalten, und dessen
[`connectionList`](/de/docs/Web/API/PresentationReceiver/connectionList) wird verwendet, um ein
{{jsxref("Promise")}} zu erhalten, das aufgerufen wird, wenn die Liste verfügbar ist.

Der Promise-Handler erhält als Eingabeparameter ein Array der eingehenden
Verbindungen. Wir iterieren über diese mit Hilfe von {{jsxref("Array.forEach", "forEach()")}},
indem wir ein neues Element zur `connectionView`-Listenkomponente für jede
Verbindung hinzufügen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Presentation API
- [`Presentation`](/de/docs/Web/API/Presentation)
- [`PresentationReceiver`](/de/docs/Web/API/PresentationReceiver)
