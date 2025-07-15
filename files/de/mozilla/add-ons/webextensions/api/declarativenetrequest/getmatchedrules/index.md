---
title: declarativeNetRequest.getMatchedRules
slug: Mozilla/Add-ons/WebExtensions/API/declarativeNetRequest/getMatchedRules
l10n:
  sourceCommit: e64d736b93d6323f51f347274d1e016cde14d009
---

{{AddonSidebar}}

Gibt alle Regeln zurück, die für die Erweiterung übereinstimmen. Anrufer können die Liste der übereinstimmenden Regeln filtern, indem sie einen `filter` angeben. Diese Methode ist nur für Erweiterungen verfügbar, die die Berechtigung `"declarativeNetRequestFeedback"` haben oder denen die Berechtigung `"activeTab"` für die in `filter` angegebene `tabId` gewährt wurde. Regeln, die nicht mit einem aktiven Dokument verknüpft sind und vor mehr als fünf Minuten übereinstimmten, werden nicht zurückgegeben.

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
      - : Eine `number`. Wenn angegeben, werden nur Regeln nach dem angegebenen Zeitstempel übereinstimmt.
    - `tabId` {{optional_inline}}
      - : Eine `number`. Wenn angegeben, werden nur Regeln für den angegebenen Tab übereinstimmt. Übereinstimmungen für Regeln, die mit keinem aktiven Tab verknüpft sind, wenn auf `-1` gesetzt.

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise), das mit einem Objekt erfüllt wird, das diese Eigenschaften enthält:

- `rule`
  - : {{WebExtAPIRef("declarativeNetRequest.MatchedRule")}}. Details zu einer übereinstimmenden Regel.
- `tabId`
  - : `number` Die `tabId` des Tabs, von dem die Anforderung stammt, falls der Tab noch aktiv ist. Andernfalls `-1`.
- `timeStamp`
  - : `number` Die Zeit, zu der die Regel übereinstimmt. Zeitstempel entsprechen der JavaScript-Konvention für Zeiten, d.h. die Anzahl der Millisekunden seit der Epoche.

Wenn keine Regeln übereinstimmen, ist das Objekt leer. Wenn die Anforderung fehlschlägt, wird das Versprechen mit einer Fehlermeldung abgelehnt.

## Beispiele

{{WebExtExamples}}

## Browser-Kompatibilität

{{Compat}}
