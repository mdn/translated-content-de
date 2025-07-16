---
title: BrowserSetting
slug: Mozilla/Add-ons/WebExtensions/API/types/BrowserSetting
l10n:
  sourceCommit: 5c2abb422d26ae422891e699cc083bdd93c5e410
---

{{AddonSidebar}}

Ein `BrowserSetting` ist ein Objekt, das eine Browsereinstellung repräsentiert.

Es bietet Methoden, um den zugrunde liegenden Wert der Einstellung festzulegen und abzurufen, um jegliche von Ihnen vorgenommene Änderungen zu löschen und um Änderungen des Wertes zu überwachen.

Beachten Sie, dass dieses Objekt auf dem [ChromeSetting](https://developer.chrome.com/docs/extensions/reference/api/types#type-ChromeSetting)-Typ basiert. Dieses Objekt unterscheidet jedoch nicht zwischen dem Festlegen des Wertes in normalen Browser-Fenstern und in privaten Browser-Fenstern. Das bedeutet, dass alle Teile der API, die sich auf das private Browsing beziehen (wie die `scope`-Option in `ChromeSetting.set()`), nicht implementiert sind.

## Methoden

- {{WebExtAPIRef("types.BrowserSetting.get()")}}
  - : Abrufen des aktuellen Wertes der Einstellung und einer Aufzählung, die darstellt, wie die Einstellung derzeit gesteuert wird.
- {{WebExtAPIRef("types.BrowserSetting.set()")}}
  - : Festlegen der Einstellung auf einen neuen Wert.
- {{WebExtAPIRef("types.BrowserSetting.clear()")}}
  - : Löschen jeglicher von dieser Erweiterung vorgenommenen Änderungen an der Einstellung.

## Ereignisse

- {{WebExtAPIRef("types.BrowserSetting.onChange")}}
  - : Wird ausgelöst, wenn sich der Wert der Einstellung ändert.

{{WebExtExamples}}

## Browser-Kompatibilität

{{Compat}}

> [!NOTE]
> Diese API basiert auf der [`chrome.types`](https://developer.chrome.com/docs/extensions/reference/api/types) API von Chromium.
