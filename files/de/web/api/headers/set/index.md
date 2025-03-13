---
title: "Headers: set()-Methode"
short-title: set()
slug: Web/API/Headers/set
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{APIRef("Fetch API")}} {{AvailableInWorkers}}

Die **`set()`**-Methode der [`Headers`](/de/docs/Web/API/Headers)-Schnittstelle
setzt einen neuen Wert für einen bestehenden Header innerhalb eines `Headers`-Objekts oder fügt
den Header hinzu, falls dieser noch nicht existiert.

Der Unterschied zwischen `set()` und [`Headers.append`](/de/docs/Web/API/Headers/append) besteht darin, dass `set()` den bestehenden Wert durch den neuen ersetzt, wenn der angegebene Header bereits existiert und mehrere Werte akzeptiert, während [`Headers.append`](/de/docs/Web/API/Headers/append) den neuen Wert am Ende der Wertemenge anhängt.

Aus Sicherheitsgründen können einige Header nur vom Benutzeragenten kontrolliert werden. Diese
Header umfassen die {{Glossary("Forbidden_request_header", "verbotenen Anforderungsheader")}}
und {{Glossary("Forbidden_response_header_name", "verbotenen Antwortheadernamen")}}.

## Syntax

```js-nolint
set(name, value)
```

### Parameter

- `name`
  - : Der Name des HTTP-Headers, den Sie auf einen neuen Wert setzen möchten. Wenn der angegebene Name nicht
    der Name eines HTTP-Headers ist, löst diese Methode einen {{jsxref("TypeError")}} aus.
- `value`
  - : Der neue Wert, den Sie setzen möchten.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

Ein leeres `Headers`-Objekt zu erstellen, ist einfach:

```js
const myHeaders = new Headers(); // Currently empty
```

Sie können diesem mit [`Headers.append`](/de/docs/Web/API/Headers/append) einen Header hinzufügen und dann mit `set()` einen neuen
Wert für diesen Header setzen:

```js
myHeaders.append("Content-Type", "image/jpeg");
myHeaders.set("Content-Type", "text/html");
```

Falls der angegebene Header noch nicht existiert, erstellt `set()` ihn und
setzt seinen Wert auf den angegebenen Wert. Falls der angegebene Header bereits existiert
und mehrere Werte akzeptiert, überschreibt `set()` den bestehenden Wert mit
dem neuen Wert:

```js
myHeaders.set("Accept-Encoding", "deflate");
myHeaders.set("Accept-Encoding", "gzip");
myHeaders.get("Accept-Encoding"); // Returns 'gzip'
```

Um den neuen Wert zu den bestehenden Werten hinzuzufügen, ohne sie zu überschreiben, benötigen Sie [`Headers.append`](/de/docs/Web/API/Headers/append).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [ServiceWorker-API](/de/docs/Web/API/Service_Worker_API)
- [HTTP-Zugriffskontrolle (CORS)](/de/docs/Web/HTTP/Guides/CORS)
- [HTTP](/de/docs/Web/HTTP)
