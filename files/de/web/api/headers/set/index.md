---
title: "Headers: set()-Methode"
short-title: set()
slug: Web/API/Headers/set
l10n:
  sourceCommit: 2c641e08878722bf29fb784d58c61873ce4a133a
---

{{APIRef("Fetch API")}} {{AvailableInWorkers}}

Die **`set()`**-Methode der {{domxref("Headers")}}-Schnittstelle setzt einen neuen Wert für einen bestehenden Header innerhalb eines `Headers`-Objekts oder fügt den Header hinzu, wenn er noch nicht existiert.

Der Unterschied zwischen `set()` und {{domxref("Headers.append")}} besteht darin, dass `set()` den bestehenden Wert durch den neuen überschreibt, wenn der angegebene Header bereits existiert und mehrere Werte akzeptiert. Hingegen fügt {{domxref("Headers.append")}} den neuen Wert am Ende der Wertemenge hinzu.

Aus Sicherheitsgründen können einige Header nur vom Benutzeragenten gesteuert werden. Zu diesen Headern gehören die {{Glossary("Forbidden_header_name", "verbotenen Header-Namen")}} und {{Glossary("Forbidden_response_header_name", "verbotenen Antwort-Header-Namen")}}.

## Syntax

```js-nolint
set(name, value)
```

### Parameter

- `name`
  - : Der Name des HTTP-Headers, den Sie auf einen neuen Wert setzen möchten. Wenn der angegebene Name nicht der Name eines HTTP-Headers ist, wirft diese Methode einen {{jsxref("TypeError")}}.
- `value`
  - : Der neue Wert, den Sie setzen möchten.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

Ein leeres `Headers`-Objekt zu erstellen ist einfach:

```js
const myHeaders = new Headers(); // Derzeit leer
```

Sie könnten einen Header mit {{domxref("Headers.append")}} hinzufügen und dann mit `set()` einen neuen Wert für diesen Header setzen:

```js
myHeaders.append("Content-Type", "image/jpeg");
myHeaders.set("Content-Type", "text/html");
```

Wenn der angegebene Header noch nicht existiert, erstellt `set()` ihn und setzt seinen Wert auf den angegebenen Wert. Wenn der angegebene Header bereits existiert und mehrere Werte akzeptiert, überschreibt `set()` den bestehenden Wert durch den neuen:

```js
myHeaders.set("Accept-Encoding", "deflate");
myHeaders.set("Accept-Encoding", "gzip");
myHeaders.get("Accept-Encoding"); // Gibt 'gzip' zurück
```

Sie müssten {{domxref("Headers.append")}} verwenden, um den neuen Wert zu den Werten hinzuzufügen, anstatt ihn zu überschreiben.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [ServiceWorker API](/de/docs/Web/API/Service_Worker_API)
- [HTTP-Zugriffskontrolle (CORS)](/de/docs/Web/HTTP/CORS)
- [HTTP](/de/docs/Web/HTTP)
