---
title: declarativeNetRequest.updateSessionRules
slug: Mozilla/Add-ons/WebExtensions/API/declarativeNetRequest/updateSessionRules
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{AddonSidebar}}

Modifiziert die Menge der sitzungsgebundenen Regeln für die Erweiterung. Die Regeln mit den in `options.removeRuleIds` aufgelisteten IDs werden zuerst entfernt, und dann werden die in `options.addRules` angegebenen Regeln hinzugefügt. Beachten Sie, dass:

- Dieses Update als atomare Operation erfolgt: Entweder werden alle angegebenen Regeln hinzugefügt und entfernt, oder es wird ein Fehler zurückgegeben.
- Diese Regeln werden nicht über Browsersitzungen hinweg gespeichert.
- Die Anzahl der sitzungsgebundenen Regeln, die hinzugefügt werden können, ist begrenzt:
  - In Safari und bis Chrome 119 auf den Wert von {{WebExtAPIRef("declarativeNetRequest.MAX_NUMBER_OF_DYNAMIC_AND_SESSION_RULES","MAX_NUMBER_OF_DYNAMIC_AND_SESSION_RULES")}} für die kombinierte Gesamtzahl von dynamischen und sitzungsgebundenen Regeln.
  - Bis Firefox 127 auf den Wert von {{WebExtAPIRef("declarativeNetRequest.MAX_NUMBER_OF_DYNAMIC_AND_SESSION_RULES","MAX_NUMBER_OF_DYNAMIC_AND_SESSION_RULES")}}.
  - Ab Chrome 120 und Firefox 128 auf den Wert von {{WebExtAPIRef("declarativeNetRequest.MAX_NUMBER_OF_SESSION_RULES","MAX_NUMBER_OF_SESSION_RULES")}}.

## Syntax

```js-nolint
let updatedRuleset = browser.declarativeNetRequest.updateSessionRules(
    options                // object
);
```

### Parameter

- `options`
  - : Ein Objekt, das Details zu den Regeln enthält, die zu den dynamischen Regeln hinzugefügt oder gelöscht werden sollen.
    - `addRules` {{optional_inline}}
      - : Ein Array von {{WebExtAPIRef("declarativeNetRequest.Rule")}}. Details der hinzuzufügenden Regeln.
    - `removeRuleIds` {{optional_inline}}
      - : Ein Array von `number`. IDs der zu entfernenden Regeln. Ungültige IDs werden ignoriert.

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) Wenn die Anfrage erfolgreich war, wird das Promise ohne Argumente erfüllt. Wenn die Anfrage fehlschlägt, wird das Promise mit einer Fehlermeldung abgelehnt.

## Beispiele

{{WebExtExamples}}

## Browser-Kompatibilität

{{Compat}}
