---
title: runtime.getContexts()
slug: Mozilla/Add-ons/WebExtensions/API/runtime/getContexts
l10n:
  sourceCommit: 9791add3508e087982097f25fbd367c21bcb8305
---

Gibt Informationen über die mit der Erweiterung verknüpften Kontexte zurück.

## Syntax

```js-nolint
let gettingContexts = await browser.runtime.getContexts(
    filter           // object
);
```

### Parameter

- `filter`
  - : Ein Objekt, das Kriterien enthält, um zurückgegebene Kontexte zu filtern. Übereinstimmende Kontexte müssen alle angegebenen Filter erfüllen. Wenn das Objekt leer ist, werden alle Kontexte zurückgegeben.
    - `contextIds` {{optional_inline}}
      - : Ein Array aus `string`. Die IDs der Kontexte, die zurückgegeben werden sollen.
    - `contextTypes` {{optional_inline}}
      - : Ein Array aus `string`. Die Typen von Erweiterungsansichten, die mit den zurückzugebenden Kontexten verknüpft sind. Kann die Werte `"BACKGROUND"`, `"POPUP"`, `"SIDE_PANEL"` und `"TAB"` annehmen.
    - `documentIds` {{optional_inline}}
      - : Ein Array aus `string`. UUIDs der Dokumente, die mit den zurückzugebenden Kontexten verknüpft sind. Weitere Informationen finden Sie im Artikel [Mit documentId arbeiten](/de/docs/Mozilla/Add-ons/WebExtensions/Work_with_documentId).
    - `documentOrigins` {{optional_inline}}
      - : Ein Array aus `string`. Die Ursprünge der mit den zurückzugebenden Kontexten verknüpften Dokumente.
    - `documentUrls` {{optional_inline}}
      - : Ein Array aus `string`. Die URLs der mit den zurückzugebenden Kontexten verknüpften Dokumente.
    - `frameIds` {{optional_inline}}
      - : Ein Array aus `integer`. Die Frame-IDs für die zurückzugebenden Kontexte.
    - `incognito` {{optional_inline}}
      - : `boolean`. Gibt an, ob nur Kontexte in einem privaten Browser-Tab zurückgegeben werden sollen.
    - `tabIds` {{optional_inline}}
      - : Ein Array aus `integer`. Die Tab-IDs für die zurückzugebenden Kontexte.
    - `windowIds` {{optional_inline}}
      - : Ein Array aus `integer`. Die Fenster-IDs für die zurückzugebenden Kontexte.

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise), das mit einem Array von Objekten erfüllt wird, eines für jeden Kontext, der Erweiterungsinhalte hostet. Die Objekte haben folgende Eigenschaften:

- `contextId`
  - : `string`. Die ID des Kontexts.
- `contextType`
  - : `string`. Der Typ der Erweiterungsansicht. Wird als einer der folgenden Werte zurückgegeben: `"BACKGROUND"`, `"POPUP"`, `"SIDE_PANEL"` oder `"TAB"`.
- `documentId`
  - : `string`. UUID des Dokuments, das mit dem Kontext verknüpft ist, oder undefined, wenn der Kontext nicht in einem Dokument gehostet wird. Weitere Informationen finden Sie im Artikel [Mit documentId arbeiten](/de/docs/Mozilla/Add-ons/WebExtensions/Work_with_documentId).
- `documentOrigin`
  - : `string`. Der Ursprung des mit dem Kontext verknüpften Dokuments oder undefined, wenn der Kontext nicht in einem Dokument gehostet wird.
- `documentUrl`
  - : `string`. Die URL des mit dem Kontext verknüpften Dokuments oder undefined, wenn der Kontext nicht in einem Dokument gehostet wird.
- `frameId`
  - : `integer`. Die Frame-ID für den Kontext oder `-1`, wenn der Kontext nicht in einem Frame gehostet wird.
- `incognito`
  - : `boolean`. Gibt an, ob der Kontext in einem privaten Browser-Tab gehostet wird.
- `tabId`
  - : `integer`. Die Tab-ID für den Kontext oder `-1`, wenn der Kontext nicht in einem Tab gehostet wird.
- `windowId`
  - : `integer`. Die Fenster-ID für den Kontext oder `-1`, wenn der Kontext nicht in einem Fenster gehostet wird.

Wenn keine übereinstimmenden Kontexte vorhanden sind, wird ein leeres Array erfüllt.

## Beispiele

Dieses Beispiel ruft alle mit der Erweiterung verknüpften Kontexte in privaten Browser-Tabs ab und gibt für jeden Kontext die Tab-ID, Frame-ID und die Dokument-URL in der Konsole aus:

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
