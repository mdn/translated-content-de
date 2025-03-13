---
title: "Anfrage: integrity-Eigenschaft"
short-title: integrity
slug: Web/API/Request/integrity
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{APIRef("Fetch API")}}{{AvailableInWorkers}}

Die **`integrity`** schreibgeschützte Eigenschaft der [`Request`](/de/docs/Web/API/Request)-Schnittstelle enthält den [Subresource Integrity](/de/docs/Web/Security/Subresource_Integrity)-Wert der Anfrage.

## Wert

Der Wert, der als `options.integrity`-Argument beim Erstellen des `Request` übergeben wurde.

Falls keine Integrität angegeben wurde, gibt die Eigenschaft `''` zurück.

## Beispiele

Im folgenden Ausschnitt erstellen wir eine neue Anfrage mit dem [`Request()`](/de/docs/Web/API/Request/Request)-Konstruktor (für eine Bilddatei im selben Verzeichnis wie das Skript) und lesen dann die Integrität der Anfrage. Da die Anfrage ohne spezifische Integrität erstellt wurde, gibt die Eigenschaft eine leere Zeichenfolge zurück.

```js
const myRequest = new Request("flowers.jpg");
console.log(myRequest.integrity); // ""
```

Im Beispiel unten wurde die Anfrage mit einem bestimmten Integritätswert erstellt, daher gibt die Eigenschaft diesen Wert zurück. Beachten Sie, dass keine Validierung des Integritätswerts erfolgt; die Eigenschaft gibt genau den Wert zurück, der übergeben wurde.

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
- [HTTP-Zugriffskontrolle (CORS)](/de/docs/Web/HTTP/Guides/CORS)
- [HTTP](/de/docs/Web/HTTP)
