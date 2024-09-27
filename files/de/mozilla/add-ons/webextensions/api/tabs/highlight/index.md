---
title: tabs.highlight()
slug: Mozilla/Add-ons/WebExtensions/API/tabs/highlight
l10n:
  sourceCommit: b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

{{AddonSidebar}}

Hebt (markiert) einen oder mehrere Tabs hervor. Tabs werden mithilfe einer Fenster-ID und einer Reihe von Tab-Indizes angegeben.

Dies ist eine asynchrone Funktion, die ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) zurückgibt.

## Syntax

```js-nolint
let highlighting = browser.tabs.highlight(
  highlightInfo         // object
)
```

### Parameter

- `highlightInfo`

  - : `object`.

    - `windowId` {{optional_inline}}
      - : `integer`. ID des Fensters, das die Tabs enthält.
    - `populate` {{optional_inline}}

      - : `boolean`. Standardmäßig `true`. Wenn auf `false` gesetzt, wird das {{WebExtAPIRef('windows.Window')}}-Objekt keine `tabs`-Eigenschaft haben, die eine Liste von {{WebExtAPIRef('tabs.Tab')}}-Objekten enthält, die die im Fenster geöffneten Tabs darstellen.

        > [!NOTE]
        > Das Auffüllen des Fensters (Standardverhalten) kann eine aufwendige Operation sein, wenn viele Tabs geöffnet sind. Für eine bessere Leistung wird empfohlen, `populate` manuell auf `false` zu setzen, wenn keine Tab-Details benötigt werden.

    - `tabs`
      - : `array` von Ganzzahlen, die einen oder mehrere Tab-Indizes angeben, die hervorgehoben werden sollen. Zuvor hervorgehobene Tabs, die nicht in `tabs` enthalten sind, werden nicht mehr hervorgehoben. Der erste Tab in `tabs` wird aktiv.

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise), das mit einem {{WebExtAPIRef('windows.Window')}}-Objekt erfüllt wird, das Details über das Fenster enthält, dessen Tabs hervorgehoben wurden. Wenn das Fenster nicht gefunden werden konnte oder ein anderer Fehler auftritt, wird das Promise mit einer Fehlermeldung abgelehnt.

## Browser-Kompatibilität

{{Compat}}

{{WebExtExamples}}

> [!NOTE]
> Diese API basiert auf Chromiums [`chrome.tabs`](https://developer.chrome.com/docs/extensions/reference/api/tabs#method-highlight) API. Diese Dokumentation stammt aus [`tabs.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/tabs.json) im Chromium-Code.
