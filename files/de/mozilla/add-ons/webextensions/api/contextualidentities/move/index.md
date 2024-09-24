---
title: contextualIdentities.move()
slug: Mozilla/Add-ons/WebExtensions/API/contextualIdentities/move
l10n:
  sourceCommit: 43e3ff826b7b755b05986c99ada75635c01c187c
---

{{AddonSidebar}}

Verschiebt eine oder mehrere kontextbezogene Identitäten an eine neue Position innerhalb der Liste der kontextbezogenen Identitäten.

Dies ist eine asynchrone Funktion, die ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) zurückgibt.

## Syntax

```js-nolint
let moveContainers = browser.contextualIdentities.move(
  cookieStoreIds,                  // string oder Array von string
  position                         // integer
)
```

### Parameter

- `cookieStoreIds`
  - : `string` oder `array` von `string`. Eine geordnete Liste der Cookie-Store-IDs der kontextbezogenen Identität, die verschoben werden sollen.
- `position`
  - : `integer`. Die Position, zu der `cookieStoreIds` in der Liste der kontextbezogenen Identitäten verschoben werden soll. Nullbasiert; `0` gibt die erste Position an. `-1` gibt an, dass die Elemente an das Ende der Liste verschoben werden.

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise), das erfüllt wird, wenn die kontextbezogenen Identitäten neu geordnet sind. Das Versprechen wird abgelehnt, wenn die Anforderung für eine ungültige Verschiebung erfolgt oder die Funktion für kontextbezogene Identitäten nicht aktiviert ist.

## Beispiele

Dieses Beispiel verschiebt die erste Identität ans Ende und dann wieder zurück an den Anfang.

```js
let identities = await browser.contextualIdentities.query({});
let firstId = identities[0].cookieStoreId;

// Verschiebt die erste Identität ans Ende.
await browser.contextualIdentities.move(firstId, -1);

// Verschiebt die Identität wieder an den Anfang.
await browser.contextualIdentities.move(firstId, 0);
```

Eine andere Möglichkeit, die erste Identität ans Ende zu verschieben, besteht darin, alle anderen Identitäten an den Anfang zu verschieben.

```js
let identities = await browser.contextualIdentities.query({});
let ids = identities.map((identity) => identity.cookieStoreId);
// Erstellen Sie ein Array ohne das erste Element:
let otherIds = ids.slice(1);

// Verschiebt andere Identitäten an den Anfang,
// wodurch die erste Identität effektiv ans Ende verschoben wird.
await browser.contextualIdentities.move(otherIds, 0);
```

Dieses Beispiel verschiebt die "Personal"-Identität vor "Work". Das Beispiel geht davon aus, dass Container mit diesen Namen existieren. Dies ist möglicherweise nicht der Fall in angepassten oder lokalisierten (nicht englischen) Firefox-Instanzen.

```js
let identities = await browser.contextualIdentities.query({});

// Finden Sie den Index und die ID des Containers mit dem Namen "Personal".
let personalIndex = identities.findIndex((ci) => ci.name === "Personal");
if (personalIndex === -1) {
  throw new Error("Personal container not found");
}
let personalId = identities[personalIndex].cookieStoreId;

// Finden Sie den Index des Containers mit dem Namen "Work".
let workIndex = identities.findIndex((identity) => identity.name === "Work");
if (workIndex === -1) {
  throw new Error("Work container not found!");
}

if (personalIndex < workIndex) {
  // Wenn die Personal-Identität verschoben wird, werden alle folgenden
  // Identitäten um eins nach links verschoben. Um die
  // Personal-Identität vor der Work-Identität zu platzieren,
  // sollten wir daher eins abziehen.
  workIndex--;
}
await browser.contextualIdentities.move(personalId, workIndex);
```

{{WebExtExamples}}

## Browser-Kompatibilität

{{Compat}}
