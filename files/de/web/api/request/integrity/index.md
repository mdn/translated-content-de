---
title: "Request: integrity-Eigenschaft"
short-title: integrity
slug: Web/API/Request/integrity
l10n:
  sourceCommit: 1259740828bbbe9f19f9697df5847c957abb64e3
---

{{APIRef("Fetch API")}}

Die schreibgeschützte **`integrity`**-Eigenschaft der [`Request`](/de/docs/Web/API/Request)-Schnittstelle enthält den Wert der [Subresource Integrity](/de/docs/Web/Security/Subresource_Integrity) des Antrags.

## Wert

Der Wert, der als `options.integrity`-Argument beim Erstellen des `Request` übergeben wurde.

Wenn keine Integrität angegeben wurde, gibt die Eigenschaft `''` zurück.

## Beispiele

Im folgenden Ausschnitt erstellen wir eine neue Anfrage mit dem [`Request()`](/de/docs/Web/API/Request/Request)-Konstruktor (für eine Bilddatei im gleichen Verzeichnis wie das Skript) und lesen dann die Integrität der Anfrage aus. Da die Anfrage ohne spezifische Integrität erstellt wurde, gibt die Eigenschaft einen leeren String zurück.

```js
const myRequest = new Request("flowers.jpg");
console.log(myRequest.integrity); // ""
```

Im unten stehenden Beispiel wurde die Anfrage mit einem spezifischen Integritätswert erstellt, sodass die Eigenschaft diesen Wert zurückgibt. Beachten Sie, dass es keine Validierung des Integritätswerts gibt; die Eigenschaft gibt genau das zurück, was übergeben wurde.

```js
const myRequest = new Request("flowers.jpg", {
  integrity: "sha256-abc123",
});
console.log(myRequest.integrity); // "sha256-abc123"
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [ServiceWorker API](/de/docs/Web/API/Service_Worker_API)
- [HTTP-Zugriffskontrolle (CORS)](/de/docs/Web/HTTP/CORS)
- [HTTP](/de/docs/Web/HTTP)
