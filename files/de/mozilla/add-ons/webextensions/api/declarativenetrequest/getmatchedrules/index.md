---
title: declarativeNetRequest.getMatchedRules
slug: Mozilla/Add-ons/WebExtensions/API/declarativeNetRequest/getMatchedRules
l10n:
  sourceCommit: 43e3ff826b7b755b05986c99ada75635c01c187c
---

{{AddonSidebar}}

Gibt alle Regeln zurück, die für die Erweiterung übereinstimmen. Aufrufer können die Liste der übereinstimmenden Regeln filtern, indem sie einen `Filter` angeben. Diese Methode ist nur für Erweiterungen mit der Berechtigung `"declarativeNetRequestFeedback"` oder der `"activeTab"`-Berechtigung verfügbar, die für die im `Filter` angegebene `tabId` erteilt wurde. Regeln, die nicht mit einem aktiven Dokument verknüpft sind und die vor mehr als fünf Minuten übereinstimmten, werden nicht zurückgegeben.

## Syntax

```js-nolint
let gettingMatchedRules = browser.declarativeNetRequest.getMatchedRules(
    filter                // object
);
```

### Parameter

- `filter` {{optional_inline}}

  - : Ein Objekt, um die Liste der übereinstimmenden Regeln zu filtern.
    - `minTimeStamp` {{optional_inline}}
      - : Eine `number`. Wenn angegeben, werden nur Regeln nach dem angegebenen Zeitstempel berücksichtigt.
    - `tabId` {{optional_inline}}
      - : Eine `number`. Wenn angegeben, werden nur Regeln für den angegebenen Tab berücksichtigt. Berücksichtigt Regeln, die mit keinem aktiven Tab verknüpft sind, wenn auf `-1` gesetzt.

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise), das mit einem Objekt erfüllt wird, das diese Eigenschaften hat:

- `rule`
  - : {{WebExtAPIRef("declarativeNetRequest.MatchedRule")}}. Details zu einer übereinstimmenden Regel.
- `tabId`
  - : `number` Die `tabId` des Tabs, von dem die Anfrage stammt, wenn der Tab noch aktiv ist. Andernfalls `-1`.
- `timeStamp`
  - : `number` Der Zeitpunkt, an dem die Regel übereinstimmte. Zeitstempel entsprechen der JavaScript-Konvention für Zeiten, d.h. die Anzahl der Millisekunden seit dem Epoch.

Wenn keine Regeln übereinstimmen, ist das Objekt leer. Wenn die Anfrage fehlschlägt, wird das Promise mit einer Fehlermeldung abgelehnt.

## Beispiele

{{WebExtExamples}}

## Browser-Kompatibilität

{{Compat}}
