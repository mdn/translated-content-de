---
title: "PushSubscription: Methode toJSON()"
short-title: toJSON()
slug: Web/API/PushSubscription/toJSON
l10n:
  sourceCommit: 15d531b54c7f0d96ac80ef00b494fd40743d59ce
---

{{APIRef("Push API")}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die Methode **`toJSON()`** der Schnittstelle [`PushSubscription`](/de/docs/Web/API/PushSubscription) gibt ein einfaches, JSON-serialisierbares Objekt zurück, das das `PushSubscription`-Objekt repräsentiert.

Die Methode wird automatisch von {{jsxref("JSON.stringify()")}} aufgerufen, wenn bei der {{Glossary("JSON", "JSON")}}-Serialisierung ein `PushSubscription`-Objekt verarbeitet wird.

## Syntax

```js-nolint
toJSON()
```

### Parameter

Keine.

### Rückgabewert

Ein einfaches, JSON-serialisierbares Objekt mit den folgenden Eigenschaften:

- [`endpoint`](/de/docs/Web/API/PushSubscription/endpoint)
- [`expirationTime`](/de/docs/Web/API/PushSubscription/expirationTime)
- `keys`: die von [`getKey()`](/de/docs/Web/API/PushSubscription/getKey) zurückgegebenen Werte `p256dh` und `auth`, als {{Glossary("Base64", "base64url")}}-Strings ohne Padding codiert

Sofern nicht anders angegeben, wird der Wert jeder Eigenschaft unverändert übernommen.

## Beispiele

### toJSON() direkt aufrufen

Dieses Beispiel ruft ein `PushSubscription`-Objekt ab. Der direkte Aufruf von `toJSON()` gibt ein einfaches Objekt zurück. Dessen Eigenschaften haben dieselben Werte wie die entsprechenden Eigenschaften des ursprünglichen Objekts.

```js
navigator.serviceWorker.ready.then((reg) => {
  reg.pushManager.getSubscription().then((subscription) => {
    const json = subscription.toJSON();
    console.log(json); // A plain object
    console.log(typeof json); // "object"
    console.log(json.endpoint); // Same value as subscription.endpoint
  });
});
```

### Als JSON-String serialisieren

Innerhalb des `getSubscription()`-Callbacks aus dem vorherigen Beispiel kann dasselbe Objekt mit {{jsxref("JSON.stringify()")}} serialisiert werden. Dabei wird die Methode `toJSON()` automatisch aufgerufen.

```js
console.log(JSON.stringify(subscription));
```

Dadurch würde ein JSON-String wie der folgende protokolliert (zur besseren Lesbarkeit formatiert):

```json
{
  "endpoint": "https://push.example.com/subscriptions/12345",
  "expirationTime": null,
  "keys": {
    "p256dh": "...",
    "auth": "..."
  }
}
```

Die base64url-codierten Schlüsselwerte sind zur besseren Lesbarkeit als `"..."` abgekürzt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
