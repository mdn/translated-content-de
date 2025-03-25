---
title: runtime.getContexts()
slug: Mozilla/Add-ons/WebExtensions/API/runtime/getContexts
l10n:
  sourceCommit: 0c0a3534f6419fa74cb2e8e4815ad5e1bec24f37
---

{{AddonSidebar}}

Gibt Informationen über die Kontexte zurück, die mit der Erweiterung verbunden sind.

## Syntax

```js-nolint
let gettingContexts = await browser.runtime.getContexts(
    filter           // object
);
```

### Parameter

- `filter`

  - : Ein Objekt, das Kriterien enthält, um die zurückgegebenen Kontexte abzugleichen. Übereinstimmende Kontexte müssen allen angegebenen Filtern entsprechen. Wenn das Objekt leer ist, werden alle Kontexte zurückgegeben.
    - `contextIds` {{optional_inline}}
      - : Ein Array von `string`. Die IDs der Kontexte, die zurückgegeben werden sollen.
    - `contextTypes` {{optional_inline}}
      - : Ein Array von `string`. Die Typen der Erweiterungsansichten, die mit den zurückzugebenden Kontexte verbunden sind. Nimmt die Werte `"BACKGROUND"`, `"POPUP"`, `"SIDE_PANEL"` und `"TAB"` an.
    - `documentIds` {{optional_inline}}
      - : Ein Array von `string`. UUIDs der Dokumente, die mit den zurückzugebenden Kontexte verbunden sind.
    - `documentOrigins` {{optional_inline}}
      - : Ein Array von `string`. Die Ursprünge der Dokumente, die mit den zurückzugebenden Kontexte verbunden sind.
    - `documentUrls` {{optional_inline}}
      - : Ein Array von `string`. Die URLs der Dokumente, die mit den zurückzugebenden Kontexte verbunden sind.
    - `frameIds` {{optional_inline}}
      - : Ein Array von `integer`. Die Frame-IDs für die zurückzugebenden Kontexte.
    - `incognito` {{optional_inline}}
      - : `boolean`. Ob nur Kontexte zurückgegeben werden sollen, die in einem privaten Browser-Tab gehostet werden.
    - `tabIds` {{optional_inline}}
      - : Ein Array von `integer`. Die Tab-IDs für die zurückzugebenden Kontexte.
    - `windowIds` {{optional_inline}}
      - : Ein Array von `integer`. Die Fenster-IDs für die zurückzugebenden Kontexte.

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise), das mit einem Array von Objekten erfüllt wird, eines für jeden Kontext, der Erweiterungsinhalte hostet. Die Objekte enthalten folgende Eigenschaften:

- `contextId`
  - : `string`. Die ID des Kontexts.
- `contextType`
  - : `string`. Der Typ der Erweiterungsansicht. Zurückgegeben als eine der folgenden: `"BACKGROUND"`, `"POPUP"`, `"SIDE_PANEL"` oder `"TAB"`.
- `documentId`
  - : `string`. UUID des Dokuments, das mit dem Kontext verknüpft ist, oder undefined, wenn der Kontext nicht in einem Dokument gehostet wird.
- `documentOrigin`
  - : `string`. Der Ursprung des Dokuments, das mit dem Kontext verknüpft ist, oder undefined, wenn der Kontext nicht in einem Dokument gehostet wird.
- `documentUrl`
  - : `string`. Die URL des Dokuments, das mit dem Kontext verknüpft ist, oder undefined, wenn der Kontext nicht in einem Dokument gehostet wird.
- `frameId`
  - : `integer`. Die Frame-ID für den Kontext oder `-1`, wenn der Kontext nicht in einem Frame gehostet wird.
- `incognito`
  - : `boolean`. Ob der Kontext in einem privaten Browser-Tab gehostet wird.
- `tabId`
  - : `integer`. Die Tab-ID für den Kontext oder `-1`, wenn der Kontext nicht in einem Tab gehostet wird.
- `windowId`
  - : `integer`. Die Fenster-ID für den Kontext oder `-1`, wenn der Kontext nicht in einem Fenster gehostet wird.

Wenn keine übereinstimmenden Kontexte vorhanden sind, wird mit einem leeren Array erfüllt.

## Beispiele

Dieses Beispiel ruft alle mit der Erweiterung verbundenen Kontexte in privaten Browser-Tabs ab und gibt die Tab-ID, Frame-ID und Dokument-URL jedes Kontexts in der Konsole aus:

```js
function gotContextInfo(contexts) {
  for (const context of contexts) {
    if (context.tabId == -1) {
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
