---
title: declarativeNetRequest.setExtensionActionOptions
slug: Mozilla/Add-ons/WebExtensions/API/declarativeNetRequest/setExtensionActionOptions
l10n:
  sourceCommit: 09109b6f9444d22215ba330ec1e64e73980b2a6c
---

Konfiguriert, ob die Aktionsanzahl für Tabs als Badge-Text der Erweiterungsaktion angezeigt wird, und bietet eine Möglichkeit, die Aktionsanzahl zu erhöhen.

## Syntax

```js-nolint
let settingCount = browser.declarativeNetRequest.setExtensionActionOptions(
    extensionActionOptions, // object
);
```

### Parameter

- `extensionActionOptions`
  - : Ein Objekt, das die Konfigurationsdetails für die Aktionsanzahl für Tabs enthält.
    - `displayActionCountAsBadgeText` {{optional_inline}}
      - : `boolean` Ob die Aktionsanzahl für eine Seite automatisch als Badge-Text der Erweiterung angezeigt werden soll. Diese Präferenz bleibt über Sitzungen hinweg erhalten.
    - `tabUpdate` {{optional_inline}}
      - : `object`. Details, wie die Aktionsanzahl des Tabs angepasst werden soll. Siehe den Abschnitt [tabUpdate](#tabupdate_2) für weitere Details.

## Zusätzliche Objekte

### tabUpdate

- `increment`
  - : `number` Die Menge, um die die Aktionsanzahl des Tabs erhöht werden soll. Negative Werte verringern die Anzahl.
- `tabId`
  - : `number` Der Tab, für den die Aktionsanzahl aktualisiert werden soll.

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise), das ohne Argumente erfüllt wird. Wenn die Anfrage fehlschlägt, wird das Promise mit einer Fehlermeldung abgelehnt.

## Beispiele

{{WebExtExamples}}

## Browser-Kompatibilität

{{Compat}}
