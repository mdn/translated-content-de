---
title: "Request: Eigenschaft integrity"
short-title: integrity
slug: Web/API/Request/integrity
l10n:
  sourceCommit: 1259740828bbbe9f19f9697df5847c957abb64e3
---

{{APIRef("Fetch API")}}

Die **`integrity`**-Eigenschaft der [`Request`](/de/docs/Web/API/Request)-Schnittstelle ist eine schreibgeschützte Eigenschaft, die den Wert der [Subresource Integrity](/de/docs/Web/Security/Subresource_Integrity) des Anforderungs enthält.

## Wert

Der Wert, der als `options.integrity`-Argument beim Erstellen des `Request` übergeben wurde.

Wenn keine Integrität angegeben wurde, gibt die Eigenschaft `''` zurück.

## Beispiele

Im folgenden Beispiel erstellen wir eine neue Anforderung mit dem [`Request()`](/de/docs/Web/API/Request/Request)-Konstruktor (für eine Bilddatei im selben Verzeichnis wie das Skript) und lesen dann die Integrität der Anforderung. Da die Anforderung ohne spezifische Integrität erstellt wurde, gibt die Eigenschaft einen leeren String zurück.

```js
const myRequest = new Request("flowers.jpg");
console.log(myRequest.integrity); // ""
```

Im folgenden Beispiel wurde die Anforderung mit einem bestimmten Integritätswert erstellt, sodass die Eigenschaft diesen Wert zurückgibt. Beachten Sie, dass es keine Validierung des Integritätswertes gibt; die Eigenschaft gibt genau das zurück, was übergeben wurde.

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
