---
title: contextualIdentities.move()
slug: Mozilla/Add-ons/WebExtensions/API/contextualIdentities/move
l10n:
  sourceCommit: 09109b6f9444d22215ba330ec1e64e73980b2a6c
---

Verschiebt ein oder mehrere kontextuelle Identitäten an eine neue Position innerhalb der Liste der kontextuellen Identitäten.

Dies ist eine asynchrone Funktion, die ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) zurückgibt.

## Syntax

```js-nolint
let moveContainers = browser.contextualIdentities.move(
  cookieStoreIds,                  // string or array of string
  position                         // integer
)
```

### Parameter

- `cookieStoreIds`
  - : `string` oder `array` von `string`. Eine geordnete Liste der kontextuellen Identitäts-Cookie-Store-IDs, die verschoben werden sollen.
- `position`
  - : `integer`. Die Position, zu der `cookieStoreIds` in der Liste der kontextuellen Identitäten verschoben werden sollen. Nullbasiert; `0` zeigt die erste Position an. `-1` zeigt an, dass die Elemente an das Ende der Liste verschoben werden.

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise), das erfüllt wird, wenn die kontextuellen Identitäten neu geordnet sind. Das Versprechen wird abgelehnt, wenn die Anforderung für eine ungültige Verschiebung erfolgt oder die Funktion der kontextuellen Identitäten nicht aktiviert ist.

## Beispiele

Dieses Beispiel verschiebt die erste Identität an das Ende und dann zurück an den Anfang.

```js
let identities = await browser.contextualIdentities.query({});
let firstId = identities[0].cookieStoreId;

// Moves first identity to the end.
await browser.contextualIdentities.move(firstId, -1);

// Move identity to the start again.
await browser.contextualIdentities.move(firstId, 0);
```

Eine andere Möglichkeit, die erste Identität an das Ende zu verschieben, besteht darin, alle anderen Identitäten an den Anfang zu verschieben.

```js
let identities = await browser.contextualIdentities.query({});
let ids = identities.map((identity) => identity.cookieStoreId);
// Create an array without the first item:
let otherIds = ids.slice(1);

// Move other identities to the start,
// effectively putting the first identity at the end.
await browser.contextualIdentities.move(otherIds, 0);
```

Dieses Beispiel verschiebt die "Personal"-Identität vor die "Work"-Identität. Das Beispiel setzt voraus, dass Container mit diesen Namen existieren. Dies ist möglicherweise nicht der Fall in angepassten oder lokalisierten (nicht-englischen) Firefox-Instanzen.

```js
let identities = await browser.contextualIdentities.query({});

// Find the index and ID of the container with the name "Personal".
let personalIndex = identities.findIndex((ci) => ci.name === "Personal");
if (personalIndex === -1) {
  throw new Error("Personal container not found");
}
let personalId = identities[personalIndex].cookieStoreId;

// Find the index of the container with the name "Work".
let workIndex = identities.findIndex((identity) => identity.name === "Work");
if (workIndex === -1) {
  throw new Error("Work container not found!");
}

if (personalIndex < workIndex) {
  // When the Personal identity moves, all following
  // identities shift to the left by one. To place
  // the Personal identity before the Work identity,
  // we should therefore subtract one.
  workIndex--;
}
await browser.contextualIdentities.move(personalId, workIndex);
```

{{WebExtExamples}}

## Browser-Kompatibilität

{{Compat}}
