---
title: declarativeNetRequest.getMatchedRules
slug: Mozilla/Add-ons/WebExtensions/API/declarativeNetRequest/getMatchedRules
l10n:
  sourceCommit: 43e3ff826b7b755b05986c99ada75635c01c187c
---

{{AddonSidebar}}

Gibt alle Regeln zurück, die für die Erweiterung übereinstimmen. Aufrufer können die Liste der übereinstimmenden Regeln durch Angabe eines `filter` filtern. Diese Methode ist nur für Erweiterungen verfügbar, die über die Berechtigung `"declarativeNetRequestFeedback"` verfügen oder denen für die in `filter` angegebene `tabId` die Berechtigung `"activeTab"` gewährt wurde. Regeln, die nicht mit einem aktiven Dokument verbunden sind und vor mehr als fünf Minuten übereingestimmt wurden, werden nicht zurückgegeben.

## Syntax

```js-nolint
let gettingMatchedRules = browser.declarativeNetRequest.getMatchedRules(
    filter                // object
);
```

### Parameter

- `filter` {{optional_inline}}

  - : Ein Objekt zum Filtern der Liste der übereinstimmenden Regeln.
    - `minTimeStamp` {{optional_inline}}
      - : Eine `number`. Falls angegeben, stimmen nur Regeln nach dem angegebenen Zeitstempel überein.
    - `tabId` {{optional_inline}}
      - : Eine `number`. Falls angegeben, stimmen nur Regeln für den angegebenen Tab überein. Stimmen Regeln zu, die mit keinem aktiven Tab verbunden sind, wenn auf `-1` gesetzt.

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise), das mit einem Objekt mit diesen Eigenschaften erfüllt wird:

- `rule`
  - : {{WebExtAPIRef("declarativeNetRequest.MatchedRule")}}. Details einer übereinstimmenden Regel.
- `tabId`
  - : `number` Die `tabId` des Tabs, von dem die Anforderung stammt, falls der Tab noch aktiv ist. Andernfalls `-1`.
- `timeStamp`
  - : `number` Der Zeitpunkt, zu dem die Regel übereinstimmte. Zeitstempel entsprechen der JavaScript-Konvention für Zeiten, d.h. die Anzahl der Millisekunden seit dem Epoch.

Wenn keine Regeln übereinstimmen, ist das Objekt leer. Wenn die Anfrage fehlschlägt, wird das Promise mit einer Fehlermeldung abgelehnt.

## Beispiele

{{WebExtExamples}}

## Browser-Kompatibilität

{{Compat}}
