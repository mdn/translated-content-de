---
title: "Anforderung: integrity-Eigenschaft"
short-title: integrity
slug: Web/API/Request/integrity
l10n:
  sourceCommit: 121546ed0718e92b3f99ae99b1a45869ea68ebe7
---

{{APIRef("Fetch API")}}{{AvailableInWorkers}}

Die **`integrity`**-Eigenschaft der [`Request`](/de/docs/Web/API/Request)-Schnittstelle ist eine schreibgeschützte Eigenschaft, die den [Subresource Integrity](/de/docs/Web/Security/Subresource_Integrity)-Wert der Anforderung enthält.

## Wert

Der Wert, der als `options.integrity`-Argument bei der Erstellung der `Request` übergeben wurde.

Wenn keine Integrität angegeben wurde, gibt die Eigenschaft `''` zurück.

## Beispiele

Im folgenden Code-Snippet erstellen wir eine neue Anforderung mit dem [`Request()`](/de/docs/Web/API/Request/Request)-Konstruktor (für eine Bilddatei im gleichen Verzeichnis wie das Skript) und lesen dann die Integrität der Anforderung. Da die Anforderung ohne eine spezifische Integrität erstellt wurde, gibt die Eigenschaft einen leeren String zurück.

```js
const myRequest = new Request("flowers.jpg");
console.log(myRequest.integrity); // ""
```

Im unten stehenden Beispiel wurde die Anforderung mit einem bestimmten Integritätswert erstellt, daher gibt die Eigenschaft diesen Wert zurück. Beachten Sie, dass es keine Validierung des Integritätswertes gibt; die Eigenschaft gibt genau das zurück, was übergeben wurde.

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
