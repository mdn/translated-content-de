---
title: browserSettings.newTabPosition
slug: Mozilla/Add-ons/WebExtensions/API/browserSettings/newTabPosition
l10n:
  sourceCommit: 43e3ff826b7b755b05986c99ada75635c01c187c
---

{{AddonSidebar}}

Ein {{WebExtAPIRef("types.BrowserSetting", "BrowserSetting")}}-Objekt, mit dem die Position neu geöffneter Tabs relativ zu bereits offenen Tabs gesteuert werden kann.

Der zugrunde liegende Wert ist ein String, der einen von drei Werten annehmen kann:

- "afterCurrent": Öffnet alle neuen Tabs neben dem aktuellen Tab.
- "relatedAfterCurrent": Standardwert. Öffnet neue Tabs neben dem aktuellen Tab, wenn sie in Beziehung zu diesem stehen (zum Beispiel, wenn sie über einen Link im aktuellen Tab geöffnet wurden). Andernfalls werden neue Tabs am Ende der Tableiste geöffnet.
- "atEnd": Öffnet alle Tabs am Ende der Tableiste.

## Browser-Kompatibilität

{{Compat}}

## Beispiele

Dieser Code setzt den Wert auf "afterCurrent" und loggt dann den neuen Wert:

```js
async function setAfterCurrent() {
  let result = await browser.browserSettings.newTabPosition.set({
    value: "afterCurrent",
  });
  console.log(`Result: ${result}`);
  let newValue = await browser.browserSettings.newTabPosition.get({});
  console.log(`New value: ${newValue.value}`);
}
```

{{WebExtExamples}}
