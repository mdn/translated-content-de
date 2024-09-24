---
title: "Präsentation: receiver Eigenschaft"
short-title: receiver
slug: Web/API/Presentation/receiver
l10n:
  sourceCommit: ee846961725e36cf7bb407afe7a2df82d2860658
---

{{APIRef("Presentation")}}{{SeeCompatTable}}{{SecureContext_Header}}

Das **schreibgeschützte** Attribut {{domxref("Presentation")}}
`receiver`, das nur in Browser-Kontexten verfügbar ist, die eine
Präsentation **empfangen**, gibt das
{{domxref("PresentationReceiver")}}-Objekt zurück, das zum Zugriff und zur Kommunikation
mit dem Browser-Kontext verwendet werden kann, der die Präsentation steuert. Diese Eigenschaft ist immer
`null`, wenn sie außerhalb eines Browser-Kontexts aufgerufen wird, der eine
Präsentation empfängt.

## Wert

Wenn der Code in einem Kontext ausgeführt wird, der eine Präsentation empfängt, ist der zurückgegebene
Wert ein {{domxref("PresentationReceiver")}}, der dann zur Kommunikation
mit dem Kontext verwendet werden kann, der die Quelle der Präsentation ist.

Wenn der aktuelle Kontext keine Präsentation empfängt, ist `receiver`
`null`.

## Beispiele

### Bestimmen, ob der Kontext eine Präsentation empfängt oder nicht

Sie können leicht feststellen, ob der Kontext der Empfänger einer Präsentation ist,
indem Sie den Wert von `navigator.receiver` überprüfen. Wenn er einen nicht-null Wert hat, dann
empfängt der Kontext tatsächlich eine Präsentation. Wenn er `null` ist, gibt es keine
eingehende Präsentation.

```js
footer.textContent = navigator.receiver ? "Receiving presentation" : "(idle)";
```

### Zugriff auf die Verbindungsliste

Dieses Beispiel verwendet `receiver`, um auf die Liste der eingehenden Verbindungen zuzugreifen und
eine Liste der ID-Strings dieser Verbindungen zu erstellen und anzuzeigen.

```js
let listElem = document.getElementById("connectionview");

navigator.presentation.receiver.connectionList.then((connections) => {
  connections.forEach((aConnection) => {
    listElem.appendChild(document.createElement("li")).textContent =
      aConnection.id;
  });
});
```

Nachdem der Zugriff auf das Ausgabe-Element in der Variablen
`connectionView` erfolgt ist, wird {{domxref("navigator.receiver")}} verwendet, um einen
Verweis auf das {{domxref("PresentationReceiver")}}-Objekt für diesen Kontext zu erhalten, und dessen
{{domxref("PresentationReceiver.connectionList", "connectionList")}} wird verwendet, um ein
{{jsxref("Promise")}} zu erhalten, das aufgerufen wird, wenn die Liste verfügbar ist.

Der Promise-Handler erhält als Eingabeparameter ein Array der eingehenden
Verbindungen. Wir iterieren über diese mithilfe von {{jsxref("Array.forEach", "forEach()")}},
und fügen für jede Verbindung ein neues Element zur `connectionView`-Liste hinzu.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Präsentation API
- {{domxref("Presentation")}}
- {{domxref("PresentationReceiver")}}
