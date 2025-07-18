---
title: browserSettings.newTabPosition
slug: Mozilla/Add-ons/WebExtensions/API/browserSettings/newTabPosition
l10n:
  sourceCommit: 09109b6f9444d22215ba330ec1e64e73980b2a6c
---

Ein {{WebExtAPIRef("types.BrowserSetting", "BrowserSetting")}} Objekt, das verwendet werden kann, um die Position neu geöffneter Tabs relativ zu bereits geöffneten Tabs zu steuern.

Der zugrundeliegende Wert ist ein String, der einen von drei Werten annehmen kann:

- "afterCurrent": Öffnet alle neuen Tabs neben dem aktuellen Tab.
- "relatedAfterCurrent": Der Standardwert. Öffnet neue Tabs neben dem aktuellen Tab, wenn sie in Beziehung zum aktuellen Tab stehen (zum Beispiel, wenn sie über einen Link im aktuellen Tab geöffnet wurden). Andernfalls werden neue Tabs am Ende der Tab-Leiste geöffnet.
- "atEnd": Öffnet alle Tabs am Ende der Tab-Leiste.

## Beispiele

Dieser Code setzt den Wert auf "afterCurrent" und protokolliert dann den neuen Wert:

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

## Browser-Kompatibilität

{{Compat}}
