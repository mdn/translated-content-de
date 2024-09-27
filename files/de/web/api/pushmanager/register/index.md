---
title: "PushManager: register()-Methode"
short-title: register()
slug: Web/API/PushManager/register
l10n:
  sourceCommit: 4dec42ed700040565e8af0e14ff104054ebc20f5
---

{{ApiRef("Push API")}}{{deprecated_header}}{{non-standard_header}}{{AvailableInWorkers}}

Die **`register`**-Methode wird verwendet, um das System zu bitten, einen neuen Endpunkt für Benachrichtigungen anzufordern.

> [!NOTE]
> Diese Methode wurde durch [`PushManager.subscribe()`](/de/docs/Web/API/PushManager/subscribe) ersetzt.

## Syntax

```js-nolint
register()
```

### Parameter

Keine.

### Rückgabewert

Ein `DOMRequest`-Objekt zur Handhabung des Erfolgs oder Misserfolgs des Methodenaufrufs.

Wenn der Methodenaufruf erfolgreich ist, wird das `result` der Anfrage eine Zeichenkette sein, die die Endpunkt-URL ist.

> [!NOTE]
> Wenn Sie die URL nicht mehr benötigen, verwenden Sie bitte [`PushManager.unregister()`](/de/docs/Web/API/PushManager/unregister), um aufzuräumen.

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
