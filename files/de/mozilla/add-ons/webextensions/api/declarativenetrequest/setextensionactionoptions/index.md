---
title: declarativeNetRequest.setExtensionActionOptions
slug: Mozilla/Add-ons/WebExtensions/API/declarativeNetRequest/setExtensionActionOptions
l10n:
  sourceCommit: e64d736b93d6323f51f347274d1e016cde14d009
---

{{AddonSidebar}}

Konfiguriert, ob die Aktionsanzahl für Tabs als Badge-Text der Erweiterungsaktion angezeigt wird und bietet eine Möglichkeit, die Aktionsanzahl zu erhöhen.

## Syntax

```js-nolint
let settingCount = browser.declarativeNetRequest.setExtensionActionOptions(
    extensionActionOptions, // object
);
```

### Parameter

- `extensionActionOptions`
  - : Ein Objekt mit den Konfigurationsdetails für die Aktionsanzahl für Tabs.
    - `displayActionCountAsBadgeText` {{optional_inline}}
      - : `boolean` Ob die Aktionsanzahl für eine Seite automatisch als Badge-Text der Erweiterung angezeigt wird. Diese Einstellung bleibt über Sitzungen hinweg bestehen.
    - `tabUpdate` {{optional_inline}}
      - : `object`. Details dazu, wie die Aktionsanzahl des Tabs angepasst werden soll. Siehe den Abschnitt [tabUpdate](#tabupdate_2) für weitere Details.

## Zusätzliche Objekte

### tabUpdate

- `increment`
  - : `number` Die Menge, um die die Aktionsanzahl des Tabs erhöht wird. Negative Werte verringern die Anzahl.
- `tabId`
  - : `number` Der Tab, für den die Aktionsanzahl aktualisiert werden soll.

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise), das ohne Argumente erfüllt wird. Wenn die Anforderung fehlschlägt, wird das Promise mit einer Fehlermeldung abgelehnt.

## Beispiele

{{WebExtExamples}}

## Browser-Kompatibilität

{{Compat}}
