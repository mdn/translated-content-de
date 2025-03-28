---
title: declarativeNetRequest.updateDynamicRules
slug: Mozilla/Add-ons/WebExtensions/API/declarativeNetRequest/updateDynamicRules
l10n:
  sourceCommit: 0c9a26accb155e592a69ce8eec93fe16c2887886
---

{{AddonSidebar}}

Ändert die Menge der dynamischen Regeln für die Erweiterung. Die Regeln mit den in `options.removeRuleIds` aufgeführten IDs werden zuerst entfernt, und dann werden die in `options.addRules` angegebenen Regeln hinzugefügt. Beachten Sie, dass:

- Dieses Update als atomare Operation erfolgt: Entweder werden alle angegebenen Regeln hinzugefügt und entfernt, oder es wird ein Fehler zurückgegeben.
- Diese Regeln werden über Browsersitzungen und Erweiterungsaktualisierungen hinweg gespeichert.
- Statische Regeln, die als Teil des Erweiterungspakets angegeben sind, können mit dieser Funktion nicht entfernt werden.
- Die Anzahl der hinzufügbaren dynamischen Regeln ist begrenzt:
  - In Safari und bis Chrome 119 ist sie begrenzt auf den Wert von {{WebExtAPIRef("declarativeNetRequest.MAX_NUMBER_OF_DYNAMIC_AND_SESSION_RULES","MAX_NUMBER_OF_DYNAMIC_AND_SESSION_RULES")}} für die kombinierte Gesamtzahl von dynamischen und sitzungsbezogenen Regeln.
  - Bis Firefox 127 ist sie begrenzt auf den Wert von {{WebExtAPIRef("declarativeNetRequest.MAX_NUMBER_OF_DYNAMIC_AND_SESSION_RULES","MAX_NUMBER_OF_DYNAMIC_AND_SESSION_RULES")}}.
  - Ab Chrome 120 und Firefox 128 ist sie begrenzt auf den Wert von {{WebExtAPIRef("declarativeNetRequest.MAX_NUMBER_OF_DYNAMIC_RULES","MAX_NUMBER_OF_DYNAMIC_RULES")}}.

> [!NOTE]
> In Firefox 132 und früher werden dynamische Regeln manchmal nicht nach einem Neustart des Browsers angewendet, und Aufrufe dieser API werden mit einem Fehler abgelehnt ([Firefox-Bug 1921353](https://bugzil.la/1921353)). Ein Workaround besteht darin, ein aktiviertes statisches Regelsatz in dem [`declarative_net_request`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/declarative_net_request) Manifest-Schlüssel anzugeben. Die Regelsatz-Datei kann eine leere Liste sein.

## Syntax

```js-nolint
let updatedRules = browser.declarativeNetRequest.updateDynamicRules(
    options                // object
);
```

### Parameter

- `options`

  - : Ein Objekt, das Details der hinzuzufügenden oder aus den dynamischen Regeln zu löschenden Regeln enthält.
    - `addRules` {{optional_inline}}
      - : Ein Array von {{WebExtAPIRef("declarativeNetRequest.Rule")}}. Details der hinzuzufügenden Regeln.
    - `removeRuleIds` {{optional_inline}}
      - : Ein Array von `number`. IDs der zu entfernenden Regeln. Ungültige IDs werden ignoriert.

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise). Wenn die Anfrage erfolgreich war, wird das Promise ohne Argumente erfüllt. Wenn die Anfrage fehlschlägt, wird das Promise mit einer Fehlermeldung abgelehnt.

## Beispiele

{{WebExtExamples}}

## Browser-Kompatibilität

{{Compat}}
