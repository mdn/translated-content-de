---
title: "PushManager: register()-Methode"
short-title: register()
slug: Web/API/PushManager/register
l10n:
  sourceCommit: ca6052779ddca9f6d99665f12c39aa2d85d85733
---

{{ApiRef("Push API")}}{{non-standard_header}}{{AvailableInWorkers}}

Die **`register`**-Methode wird verwendet, um das System aufzufordern, einen neuen Endpunkt für Benachrichtigungen anzufordern.

> [!NOTE]
> Diese Methode wird von [`PushManager.subscribe()`](/de/docs/Web/API/PushManager/subscribe) ersetzt.

## Syntax

```js-nolint
register()
```

### Parameter

Keine.

### Rückgabewert

Ein `DOMRequest`-Objekt, um den Erfolg oder das Scheitern des Methodenaufrufs zu verwalten.

Wenn der Methodenaufruf erfolgreich ist, wird das `result` der Anfrage eine Zeichenkette sein, die die Endpunkt-URL ist.

> [!NOTE]
> Wenn Sie die URL nicht mehr benötigen, verwenden Sie bitte
> [`PushManager.unregister()`](/de/docs/Web/API/PushManager/unregister), um aufzuräumen.

## Beispiele

```js
const req = navigator.push.register();

req.onsuccess = (e) => {
  const endpoint = req.result;
  console.log(`New endpoint: ${endpoint}`);
};

req.onerror = (e) => {
  console.error(`Error getting a new endpoint: ${e.error}`);
};
```

## Spezifikationen

Dieses Feature ist Teil keiner Spezifikation. Es ist nicht mehr auf dem Weg, ein Standard zu werden.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`PushManager`](/de/docs/Web/API/PushManager)
