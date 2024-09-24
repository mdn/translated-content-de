---
title: Browser-Einstellung
slug: Mozilla/Add-ons/WebExtensions/API/types/BrowserSetting
l10n:
  sourceCommit: b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

{{AddonSidebar}}

Ein `BrowserSetting` ist ein Objekt, das eine Browsereinstellung repräsentiert.

Es stellt Methoden bereit, um den zugrunde liegenden Wert der Einstellung zu setzen und abzurufen, um jegliche Änderung, die Sie daran vorgenommen haben, zu löschen, und um auf Änderungen des Wertes zu reagieren.

Beachten Sie, dass während dieses Objekt auf dem [ChromeSetting](https://developer.chrome.com/docs/extensions/reference/api/types#type-ChromeSetting) Typ basiert, dieses Objekt nicht zwischen dem Setzen des Wertes in normalen Browserfenstern und in privaten Browserfenstern unterscheidet. Dies bedeutet, dass alle Teile der API, die sich auf privates Surfen beziehen (wie die `scope`-Option in `ChromeSetting.set()`), nicht implementiert sind.

## Methoden

- {{WebExtAPIRef("types.BrowserSetting.get()")}}
  - : Holen Sie den aktuellen Wert der Einstellung und eine Enumeration, die zeigt, wie die Einstellung derzeit kontrolliert wird.
- {{WebExtAPIRef("types.BrowserSetting.set()")}}
  - : Setzt die Einstellung auf einen neuen Wert.
- {{WebExtAPIRef("types.BrowserSetting.clear()")}}
  - : Löscht jede Änderung, die durch diese Erweiterung an der Einstellung vorgenommen wurde.

## Ereignisse

- {{WebExtAPIRef("types.BrowserSetting.onChange")}}
  - : Wird ausgelöst, wenn sich der Wert der Einstellung ändert.

## Browser-Kompatibilität

{{Compat}}

{{WebExtExamples}}

> [!NOTE]
> Diese API basiert auf Chromiums [`chrome.types`](https://developer.chrome.com/docs/extensions/reference/api/types) API.
