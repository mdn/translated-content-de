---
title: tabs.group()
slug: Mozilla/Add-ons/WebExtensions/API/tabs/group
l10n:
  sourceCommit: 09109b6f9444d22215ba330ec1e64e73980b2a6c
---

Fügt einen oder mehrere Tabs zu einer Gruppe hinzu oder, wenn keine Gruppe angegeben ist, fügt die Tabs zu einer neuen Gruppe hinzu. Alle Tabs in einer Tab-Gruppe müssen nebeneinanderliegen, und Tabs werden bei Bedarf verschoben. Alle angehefteten Tabs werden vor der Gruppierung gelöst.

Wenn ein Aufruf Tabs aus Tab-Gruppen verschiebt und eine dieser Tab-Gruppen dadurch leer wird, werden die leeren Tab-Gruppen entfernt.

> [!NOTE]
> Die Methode `tabs.group()` ist nicht die einzige Möglichkeit, Tabs zu gruppieren. Ein Tab tritt auch einer Tab-Gruppe bei, wenn {{WebExtAPIRef("tabs.move")}} ihn zwischen Tabs platziert, die Teil einer Tab-Gruppe sind.

Weitere Informationen zu Tab-Gruppen finden Sie unter {{WebExtAPIRef("tabGroups")}}.

## Syntax

```js-nolint
let grouping = browser.tabs.group(
  options    // object
)
```

### Parameter

- `options`
  - : Ein Objekt mit Details zur Tab-Gruppierung.
    - `createProperties` {{optional_inline}}
      - : `object`. Konfigurationsdetails für eine neue Gruppe. Kann nicht verwendet werden, wenn `groupId` angegeben ist.
        - `windowId` {{optional_inline}}
          - : `integer`. Das Fenster der neuen Gruppe. Standardmäßig das [aktuelle Fenster](/de/docs/Mozilla/Add-ons/WebExtensions/API/windows/getCurrent).

    - `groupId` {{optional_inline}}
      - : `integer`. Die ID der Gruppe, zu der die Tabs hinzugefügt werden sollen. Wird keine angegeben, wird eine Gruppe erstellt.
    - `tabIds`
      - : `integer` oder `array` von `integer`. Die Tab-ID oder Liste der Tab-IDs, die zur Gruppe hinzugefügt werden sollen. Muss mindestens eine Tab-ID enthalten.

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise), das mit einem Integer erfüllt wird, der die `groupId` der Tab-Gruppe enthält, zu der die Tabs hinzugefügt wurden. Wenn die `groupId` nicht gefunden wird, einer der `tabIds` ungültig ist, die `windowId` ungültig ist, oder ein anderer Fehler auftritt, wird das Promise mit einer Fehlermeldung abgelehnt. Wenn ein Validierungsfehler auftritt, werden die Tabs nicht verändert.

## Beispiele

Erstellen Sie zwei Tabs und fügen Sie sie zu einer neuen Gruppe hinzu, erstellen Sie dann einen weiteren Tab und fügen Sie ihn der Gruppe hinzu.

```js
// Create two tabs and put them in a new group.
const tab1 = await browser.tabs.create({});
const tab2 = await browser.tabs.create({});
const groupId = await browser.tabs.group({
  tabIds: [tab1.id, tab2.id],
});

// Create another tab and add it to the group.
const tab3 = await browser.tabs.create({});
await browser.tabs.group({
  tabIds: tab3.id,
  groupId,
});
```

Erstellen Sie einen Tab und passen Sie dessen Gruppierung an die des aktuellen Tabs an.

```js
let [oldTab] = await browser.tabs.query({
  active: true,
  lastFocusedWindow: true,
});

let newTab = await browser.tabs.create({
  url: "https://example.com/",
  index: oldTab.index + 1,
});
// Feature detection: tab grouping is a relatively new feature.
// All tabs are ungrouped if the API does not exist.
if (browser.tabs.group) {
  if (oldTab.groupId !== -1) {
    // oldTab is in a group, add newTab to the same group
    await browser.tabs.group({ groupId: oldTab.groupId, tabIds: [newTab.id] });
  } else {
    // oldTab isn't in a group
    // Although a new tab positioned next to an ungrouped tab is
    // already ungrouped, we call ungroup() in case this example is
    // adopted for use with tabs that aren't adjacent. When oldTab
    // is not in a tab group, the only way to ensure that newTab isn't
    // in a tab group is by using ungroup().
    await browser.tabs.ungroup(newTab.id);
  }
}
```

{{WebExtExamples}}

## Browser-Kompatibilität

{{Compat}}
