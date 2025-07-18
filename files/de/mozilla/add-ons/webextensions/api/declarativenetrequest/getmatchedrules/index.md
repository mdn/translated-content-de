---
title: declarativeNetRequest.getMatchedRules
slug: Mozilla/Add-ons/WebExtensions/API/declarativeNetRequest/getMatchedRules
l10n:
  sourceCommit: 09109b6f9444d22215ba330ec1e64e73980b2a6c
---

Gibt alle Regeln zurück, die für die Erweiterung übereinstimmen. Aufrufer können die Liste der übereinstimmenden Regeln filtern, indem sie einen `filter` angeben. Diese Methode steht nur Erweiterungen zur Verfügung, die die Berechtigung `"declarativeNetRequestFeedback"` haben oder denen die Berechtigung `"activeTab"` für die in `filter` angegebene `tabId` gewährt wurde. Regeln, die keinem aktiven Dokument zugeordnet sind und vor mehr als fünf Minuten übereinstimmten, werden nicht zurückgegeben.

## Syntax

```js-nolint
let gettingMatchedRules = await browser.declarativeNetRequest.getMatchedRules(
    filter                // object
);
```

### Parameter

- `filter` {{optional_inline}}
  - : Ein Objekt, um die Liste der übereinstimmenden Regeln zu filtern.
    - `minTimeStamp` {{optional_inline}}
      - : Eine `number`. Wenn angegeben, werden nur Regeln nach dem angegebenen Zeitstempel berücksichtigt.
    - `tabId` {{optional_inline}}
      - : Eine `number`. Wenn angegeben, werden nur Regeln für den angegebenen Tab berücksichtigt. Berücksichtigt Regeln, die keinem aktiven Tab zugeordnet sind, wenn `-1` festgelegt ist.

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise), das mit einem Objekt mit diesen Eigenschaften erfüllt wird:

- `rule`
  - : {{WebExtAPIRef("declarativeNetRequest.MatchedRule")}}. Details einer übereinstimmenden Regel.
- `tabId`
  - : `number` Die `tabId` des Tabs, von dem die Anfrage ausging, falls der Tab noch aktiv ist. Andernfalls `-1`.
- `timeStamp`
  - : `number` Die Zeit, zu der die Regel übereinstimmte. Zeitstempel entsprechen der JavaScript-Konvention für Zeiten, d.h. der Anzahl der Millisekunden seit der Epoche.

Wenn keine Regeln übereinstimmen, ist das Objekt leer. Wenn die Anfrage fehlschlägt, wird das Versprechen mit einer Fehlermeldung abgelehnt.

## Beispiele

{{WebExtExamples}}

## Browser-Kompatibilität

{{Compat}}
