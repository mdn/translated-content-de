---
title: runtime.getContexts()
slug: Mozilla/Add-ons/WebExtensions/API/runtime/getContexts
l10n:
  sourceCommit: cb25e0acbd9f0af27c4a99965cb962230d49a35d
---

{{AddonSidebar}}

Gibt Informationen über die mit der Erweiterung verbundenen Kontexte zurück.

## Syntax

```js-nolint
let gettingContexts = await browser.runtime.getContexts(
    filter           // object
);
```

### Parameter

- `filter`

  - : Ein Objekt, das Kriterien enthält, um die zurückgegebenen Kontexte abzugleichen. Übereinstimmende Kontexte müssen alle angegebenen Filter erfüllen. Wenn das Objekt leer ist, werden alle Kontexte zurückgegeben.
    - `contextIds` {{optional_inline}}
      - : Ein Array von `string`. Die IDs der zurückzugebenden Kontexte.
    - `contextTypes` {{optional_inline}}
      - : Ein Array von `string`. Die Typen der mit den zurückzugebenden Kontexten verbundenen Erweiterungsansichten. Nimmt die Werte `"BACKGROUND"`, `"POPUP"`, `"SIDE_PANEL"` und `"TAB"` an.
    - `documentIds` {{optional_inline}}
      - : Ein Array von `string`. UUIDs der mit den zurückzugebenden Kontexten verbundenen Dokumente.
    - `documentOrigins` {{optional_inline}}
      - : Ein Array von `string`. Die Ursprünge der mit den zurückzugebenden Kontexten verbundenen Dokumente.
    - `documentUrls` {{optional_inline}}
      - : Ein Array von `string`. Die URLs der mit den zurückzugebenden Kontexten verbundenen Dokumente.
    - `frameIds` {{optional_inline}}
      - : Ein Array von `integer`. Die Frame-IDs für die zurückzugebenden Kontexte.
    - `incognito` {{optional_inline}}
      - : `boolean`. Gibt an, ob nur Kontexte zurückgegeben werden sollen, die in einem privaten Browsing-Tab gehostet werden.
    - `tabIds` {{optional_inline}}
      - : Ein Array von `integer`. Die Tab-IDs für die zurückzugebenden Kontexte.
    - `windowIds` {{optional_inline}}
      - : Ein Array von `integer`. Die Fenster-IDs für die zurückzugebenden Kontexte.

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise), das mit einem Array von Objekten erfüllt wird, eines für jeden Kontext, der Erweiterungsinhalte hostet. Die Objekte haben folgende Eigenschaften:

- `contextId`
  - : `string`. ID des Kontexts.
- `contextType`
  - : `string`. Der Typ der Erweiterungsansicht. Wird als einer der Werte `"BACKGROUND"`, `"POPUP"`, `"SIDE_PANEL"` oder `"TAB"` zurückgegeben.
- `documentId`
  - : `string`. UUID des mit dem Kontext verbundenen Dokuments oder undefined, wenn der Kontext nicht in einem Dokument gehostet wird.
- `documentOrigin`
  - : `string`. Der Ursprung des mit dem Kontext verbundenen Dokuments oder undefined, wenn der Kontext nicht in einem Dokument gehostet wird.
- `documentUrl`
  - : `string`. Die URL des mit dem Kontext verbundenen Dokuments oder undefined, wenn der Kontext nicht in einem Dokument gehostet wird.
- `frameId`
  - : `integer`. Die Frame-ID für den Kontext oder `-1`, wenn der Kontext nicht in einem Frame gehostet wird.
- `incognito`
  - : `boolean`. Gibt an, ob der Kontext in einem privaten Browsing-Tab gehostet wird.
- `tabId`
  - : `integer`. Die Tab-ID für den Kontext oder `-1`, wenn der Kontext nicht in einem Tab gehostet wird.
- `windowId`
  - : `integer`. Die Fenster-ID für den Kontext oder `-1`, wenn der Kontext nicht in einem Fenster gehostet wird.

Wenn keine passenden Kontexte vorhanden sind, wird mit einem leeren Array erfüllt.

## Beispiele

Dieses Beispiel ruft alle mit der Erweiterung in privaten Browsing-Tabs verbundenen Kontexte ab und gibt die Tab-ID, Frame-ID und Dokumenten-URL für jeden Kontext in der Konsole aus:

```js
function gotContextInfo(contexts) {
  for (const context of contexts) {
    if (context.tabId === -1) {
      console.log("Not hosted in a tab");
    } else {
      console.log(
        `Hosted in tab: ${context.tabId} and frame ${context.frameId} with URL ${context.documentUrl}`,
      );
    }
  }
}

let gettingContextInfo = browser.runtime.getContexts({ incognito: true });
gettingContextInfo.then(gotContextInfo);
```

{{WebExtExamples}}

## Browser-Kompatibilität

{{Compat}}
