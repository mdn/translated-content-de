---
title: runtime.getContexts()
slug: Mozilla/Add-ons/WebExtensions/API/runtime/getContexts
l10n:
  sourceCommit: f54157ae3b0dfbb2ad048ce755e395baa6b526a7
---

{{AddonSidebar}}

Gibt Informationen über die mit der Erweiterung verbundenen Kontexte zurück.

## Syntax

```js-nolint
let gettingContexts = browser.runtime.getContexts(
    filter           // object
);
```

### Parameter

- `filter`

  - : Ein Objekt, das Kriterien enthält, um die zurückgegebenen Kontexte abzugleichen. Übereinstimmende Kontexte müssen alle angegebenen Filter erfüllen. Wenn das Objekt leer ist, werden alle Kontexte zurückgegeben.
    - `contextIds` {{optional_inline}}
      - : Ein Array von `string`. Die IDs der Kontexte, die zurückgegeben werden sollen.
    - `contextTypes` {{optional_inline}}
      - : Ein Array von `string`. Die Typen von Erweiterungsansichten, die mit den zurückzugebenden Kontexte verknüpft sind. Nimmt die Werte `"BACKGROUND"`, `"POPUP"`, `"SIDE_PANEL"` und `"TAB"` an.
    - `documentIds` {{optional_inline}}
      - : Ein Array von `string`. UUIDs der mit den Kontexte verbundenen Dokumente, die zurückgegeben werden sollen.
    - `documentOrigins` {{optional_inline}}
      - : Ein Array von `string`. Die Ursprünge von Dokumenten, die mit den Kontexte verbunden sind und zurückgegeben werden sollen.
    - `documentUrls` {{optional_inline}}
      - : Ein Array von `string`. Die URLs von Dokumenten, die mit den Kontexte verbunden sind und zurückgegeben werden sollen.
    - `frameIds` {{optional_inline}}
      - : Ein Array von `integer`. Die Frame-IDs für die zurückzugebenden Kontexte.
    - `incognito` {{optional_inline}}
      - : `boolean`. Ob nur Kontexte zurückgegeben werden sollen, die in einem privaten Surftab gehostet werden.
    - `tabIds` {{optional_inline}}
      - : Ein Array von `integer`. Die Tab-IDs für die zurückzugebenden Kontexte.
    - `windowIds` {{optional_inline}}
      - : Ein Array von `integer`. Die Fenster-IDs für die zurückzugebenden Kontexte.

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise), das mit einem Array von Objekten erfüllt wird, eines für jeden Kontext, der Erweiterungsinhalte hostet. Die Objekte haben die folgenden Eigenschaften:

- `contextId`
  - : `string`. ID des Kontextes.
- `contextType`
  - : `string`. Der Typ der Erweiterungsansicht. Zurückgegeben als eines von `"BACKGROUND"`, `"POPUP"`, `"SIDE_PANEL"` oder `"TAB"`.
- `documentId`
  - : `string`. UUID des mit dem Kontext verbundenen Dokuments oder undefiniert, wenn der Kontext nicht in einem Dokument gehostet wird.
- `documentOrigin`
  - : `string`. Der Ursprung des mit dem Kontext verbundenen Dokuments oder undefiniert, wenn der Kontext nicht in einem Dokument gehostet wird.
- `documentUrl`
  - : `string`. Die URL des mit dem Kontext verbundenen Dokuments oder undefiniert, wenn der Kontext nicht in einem Dokument gehostet wird.
- `frameId`
  - : `integer`. Die Frame-ID für den Kontext oder `-1`, wenn der Kontext nicht in einem Frame gehostet wird.
- `incognito`
  - : `boolean`. Ob der Kontext in einem privaten Surftab gehostet wird.
- `tabId`
  - : `integer`. Die Tab-ID für den Kontext oder `-1`, wenn der Kontext nicht in einem Tab gehostet wird.
- `windowId`
  - : `integer`. Die Fenster-ID für den Kontext oder `-1`, wenn der Kontext nicht in einem Fenster gehostet wird.

Wenn keine passenden Kontexte vorhanden sind, erfolgt die Erfüllung mit einem leeren Array.

## Beispiele

Dieses Beispiel holt alle mit der Erweiterung in privaten Surftabs verbundenen Kontexte und gibt die Tab-ID, Frame-ID und Dokumenten-URL für jeden Kontext in der Konsole aus:

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

let gettingContextInfo = browser.runtime.getContext({ incognito: true });
gettingContextInfo.then(gotContextInfo);
```

{{WebExtExamples}}

## Browser-Kompatibilität

{{Compat}}
