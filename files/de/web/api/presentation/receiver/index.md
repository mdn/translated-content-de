---
title: "Präsentation: receiver-Eigenschaft"
short-title: receiver
slug: Web/API/Presentation/receiver
l10n:
  sourceCommit: 79fdc26fea835d65c9361541bb8ab1896f307475
---

{{APIRef("Presentation")}}{{SeeCompatTable}}{{SecureContext_Header}}

Das **schreibgeschützte** Attribut [`Presentation`](/de/docs/Web/API/Presentation)
`receiver`, das nur in Browser-Kontexten verfügbar ist, die eine Präsentation **empfangen**, gibt das
[`PresentationReceiver`](/de/docs/Web/API/PresentationReceiver)-Objekt zurück, das verwendet werden kann, um auf den
Browser-Kontext zuzugreifen und zu kommunizieren, der die Präsentation steuert. Diese Eigenschaft ist immer
`null`, wenn sie außerhalb eines Browser-Kontextes aufgerufen wird, der eine Präsentation empfängt.

## Wert

Wenn der Code in einem Kontext ausgeführt wird, der eine Präsentation empfängt, ist der zurückgegebene Wert ein
[`PresentationReceiver`](/de/docs/Web/API/PresentationReceiver), der dann verwendet werden kann, um mit dem Ursprungskontext der Präsentation zu kommunizieren.

Wenn der aktuelle Kontext keine Präsentation empfängt, ist `receiver` `null`.

## Beispiele

### Bestimmen, ob der Kontext eine Präsentation empfängt

Sie können leicht feststellen, ob der Kontext der Empfänger einer Präsentation ist, indem Sie den Wert von `navigator.presentation.receiver` überprüfen. Wenn es ein nicht-null-Wert ist, empfängt der Kontext tatsächlich eine Präsentation. Wenn es `null` ist, gibt es keine eingehende Präsentation.

```js
footer.textContent = navigator.presentation.receiver
  ? "Receiving presentation"
  : "(idle)";
```

### Zugriff auf die Verbindungsliste

Dieses Beispiel verwendet `receiver`, um auf die Liste der eingehenden Verbindungen zuzugreifen und um eine Liste dieser Verbindungen anhand ihrer ID-Strings zu erstellen und anzuzeigen.

```js
const listElem = document.getElementById("connection-view");

navigator.presentation.receiver.connectionList.then((connections) => {
  connections.forEach((connection) => {
    listElem.appendChild(document.createElement("li")).textContent =
      connection.id;
  });
});
```

Nachdem das Ausgabe-Listen-Element in der Variablen
`connectionView` zugänglich gemacht wurde, wird `navigator.presentation.receiver` verwendet, um eine
Referenz auf das [`PresentationReceiver`](/de/docs/Web/API/PresentationReceiver)-Objekt für diesen Kontext zu erhalten, und seine
[`connectionList`](/de/docs/Web/API/PresentationReceiver/connectionList) wird verwendet, um ein
{{jsxref("Promise")}} zu erhalten, das aufgerufen wird, wenn die Liste verfügbar ist.

Der Promise-Handler erhält als Eingabeparameter ein Array der eingehenden
Verbindungen. Wir iterieren über diese mit {{jsxref("Array.forEach", "forEach()")}} und fügen für jede
Verbindung ein neues Element zur `connectionView`-Liste hinzu.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Präsentation API
- [`Presentation`](/de/docs/Web/API/Presentation)
- [`PresentationReceiver`](/de/docs/Web/API/PresentationReceiver)
