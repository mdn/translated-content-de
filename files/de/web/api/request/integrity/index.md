---
title: "Anforderung: integrity-Eigenschaft"
short-title: integrity
slug: Web/API/Request/integrity
l10n:
  sourceCommit: ca26363fcc6fc861103d40ac0205e5c5b79eb2fa
---

{{APIRef("Fetch API")}}{{AvailableInWorkers}}

Die **`integrity`**-Eigenschaft der [`Request`](/de/docs/Web/API/Request)-Schnittstelle ist eine schreibgeschützte Eigenschaft, die den [Subresource Integrity](/de/docs/Web/Security/Defenses/Subresource_Integrity)-Wert der Anfrage enthält.

## Wert

Der Wert, der als `options.integrity`-Argument beim Erstellen des `Request` übergeben wurde.

Falls keine Integrität angegeben wurde, gibt die Eigenschaft `''` zurück.

## Beispiele

Im folgenden Code-Snippet erstellen wir eine neue Anfrage mit dem [`Request()`](/de/docs/Web/API/Request/Request)-Konstruktor (für eine Bilddatei im selben Verzeichnis wie das Skript) und lesen dann die Integrität der Anfrage. Da die Anfrage ohne spezifische Integrität erstellt wurde, gibt die Eigenschaft einen leeren String zurück.

```js
const myRequest = new Request("flowers.jpg");
console.log(myRequest.integrity); // ""
```

Im unten stehenden Beispiel wurde die Anfrage mit einem spezifischen Integritätswert erstellt, daher gibt die Eigenschaft diesen Wert zurück. Beachten Sie, dass keine Validierung des Integritätswertes erfolgt; die Eigenschaft gibt genau das zurück, was übergeben wurde.

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
