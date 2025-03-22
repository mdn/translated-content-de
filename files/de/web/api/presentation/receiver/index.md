---
title: "Präsentation: receiver Eigenschaft"
short-title: receiver
slug: Web/API/Presentation/receiver
l10n:
  sourceCommit: 1b88b4d62918f6f13d1155825e3881f52d90206e
---

{{APIRef("Presentation")}}{{SeeCompatTable}}{{SecureContext_Header}}

Das **schreibgeschützte** [`Presentation`](/de/docs/Web/API/Presentation)-Attribut
`receiver`, das nur in Browser-Kontexten verfügbar ist, die eine Präsentation **empfangen**, gibt das
[`PresentationReceiver`](/de/docs/Web/API/PresentationReceiver)-Objekt zurück, das verwendet werden kann, um auf den Browser-Kontext zuzugreifen und mit ihm zu kommunizieren, der die Präsentation steuert. Diese Eigenschaft ist immer `null`, wenn sie außerhalb eines Browser-Kontexts aufgerufen wird, der eine Präsentation empfängt.

## Wert

Wenn der Code in einem Kontext läuft, der eine Präsentation empfängt, ist der zurückgegebene Wert ein [`PresentationReceiver`](/de/docs/Web/API/PresentationReceiver), der dann verwendet werden kann, um mit dem Kontext zu kommunizieren, der die Quelle der Präsentation ist.

Wenn der aktuelle Kontext keine Präsentation empfängt, ist `receiver` `null`.

## Beispiele

### Feststellen, ob der Kontext eine Präsentation empfängt

Sie können leicht feststellen, ob der Kontext der Empfänger einer Präsentation ist, indem Sie den Wert von `navigator.presentation.receiver` überprüfen. Wenn es ein Wert ungleich `null` ist, dann empfängt der Kontext tatsächlich eine Präsentation. Wenn es `null` ist, gibt es keine eingehende Präsentation.

```js
footer.textContent = navigator.presentation.receiver
  ? "Receiving presentation"
  : "(idle)";
```

### Zugriff auf die Verbindungsliste

Dieses Beispiel verwendet `receiver`, um auf die Liste der eingehenden Verbindungen zuzugreifen und eine Liste der ID-Strings dieser Verbindungen zu erstellen und anzuzeigen.

```js
const listElem = document.getElementById("connection-view");

navigator.presentation.receiver.connectionList.then((connections) => {
  connections.forEach((aConnection) => {
    listElem.appendChild(document.createElement("li")).textContent =
      aConnection.id;
  });
});
```

Nachdem das Ausgabe-Listenelement in der Variablen `connectionView` zugänglich gemacht wurde, wird `navigator.presentation.receiver` verwendet, um eine Referenz auf das [`PresentationReceiver`](/de/docs/Web/API/PresentationReceiver)-Objekt für diesen Kontext zu erhalten, und dessen [`connectionList`](/de/docs/Web/API/PresentationReceiver/connectionList) wird verwendet, um ein {{jsxref("Promise")}} zu erhalten, das aufgerufen wird, wenn die Liste verfügbar ist.

Der Promise-Handler erhält als Eingabeparameter ein Array der eingehenden Verbindungen. Wir iterieren über diese mit {{jsxref("Array.forEach", "forEach()")}}, und fügen für jede Verbindung ein neues Element zur `connectionView`-Liste hinzu.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Presentation API
- [`Presentation`](/de/docs/Web/API/Presentation)
- [`PresentationReceiver`](/de/docs/Web/API/PresentationReceiver)
