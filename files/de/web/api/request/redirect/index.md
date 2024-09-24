---
title: "Request: Umleitungs-Eigenschaft"
short-title: Umleitung
slug: Web/API/Request/redirect
l10n:
  sourceCommit: 954612667bafd71241a93e8554e8f11afc474ff3
---

{{APIRef("Fetch API")}}

Die schreibgeschützte Eigenschaft **`redirect`** der {{domxref("Request")}}-Schnittstelle enthält den Modus, wie Umleitungen gehandhabt werden.

## Wert

Ein `RequestRedirect`-Enum-Wert, der einer der folgenden Zeichenfolgen sein kann:

- `follow`
- `error`
- `manual`

Wenn beim Erstellen der Anfrage nicht angegeben, nimmt sie den Standardwert `follow` an.

## Beispiele

Im folgenden Codeausschnitt erstellen wir eine neue Anfrage mit dem Konstruktor {{domxref("Request.Request", "Request()")}} (für eine Bilddatei im selben Verzeichnis wie das Skript) und speichern den `redirect`-Wert der Anfrage in einer Variablen:

```js
const myRequest = new Request("flowers.jpg");
const myCred = myRequest.redirect;
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [ServiceWorker API](/de/docs/Web/API/Service_Worker_API)
- [HTTP-Zugriffskontrolle (CORS)](/de/docs/Web/HTTP/CORS)
- [HTTP](/de/docs/Web/HTTP)
