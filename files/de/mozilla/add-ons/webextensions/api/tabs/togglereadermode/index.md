---
title: tabs.toggleReaderMode()
slug: Mozilla/Add-ons/WebExtensions/API/tabs/toggleReaderMode
l10n:
  sourceCommit: 43e3ff826b7b755b05986c99ada75635c01c187c
---

{{AddonSidebar}}

Wechselt den Lesemodus für den gegebenen Tab.

Diese Funktion wechselt den Lesemodus für den gegebenen Tab. Sie nimmt eine Tab-ID als Parameter entgegen; falls diese weggelassen wird, wird der aktuell aktive Tab umgeschaltet.

Dies ist eine asynchrone Funktion, die ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) zurückgibt.

Der Lesemodus, auch bekannt als Leseansicht, ist eine Browser-Funktion, die es den Benutzer erleichtert, sich auf einen Artikel zu konzentrieren, indem sie:

- nicht wesentliche Seitenelemente wie Seitenleisten, Fußzeilen und Werbung ausblendet
- die Textgröße, den Kontrast und das Layout der Seite für bessere Lesbarkeit anpasst.

Der Lesemodus ist speziell für Artikel nützlich: Das bedeutet, Seiten, die einen Textkörper als Hauptmerkmal haben. Seiten, die keinen erkennbaren Artikel haben, sind nicht für die Anzeige im Lesemodus geeignet. Um festzustellen, ob eine Seite ein Artikel ist, überprüfen Sie die Eigenschaft `isArticle` von {{WebExtAPIRef("tabs.Tab")}}.

Um festzustellen, ob sich ein Tab bereits im Lesemodus befindet, überprüfen Sie die Eigenschaft `isInReaderMode` von {{WebExtAPIRef("tabs.Tab")}}. Um zu verfolgen, wie Tabs in den oder aus dem Lesemodus wechseln, müssen Sie den aktuellen Zustand aller Tabs im Auge behalten und überprüfen, wann sich `isInReaderMode` ändert:

```js
function handleUpdated(tabId, changeInfo, tabInfo) {
  if (changeInfo.status === "complete") {
    console.log(`Tab ${tabId} Lesemodus: ${tabInfo.isInReaderMode}`);
  }
}

browser.tabs.onUpdated.addListener(handleUpdated);
```

## Syntax

```js-nolint
let toggling = browser.tabs.toggleReaderMode(
  tabId            // optional integer
)
```

### Parameter

- `tabId` {{optional_inline}}
  - : `integer`. Die ID des Tabs, der im Lesemodus angezeigt werden soll. Standardmäßig ist dies der ausgewählte Tab des aktuellen Fensters.

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise), das ohne Argumente erfüllt wird, wenn der Tab aktualisiert wurde. Wenn ein Fehler auftritt (zum Beispiel, weil die Seite kein Artikel war), wird das Promise mit einer Fehlermeldung abgelehnt.

## Beispiele

Dieser Code schaltet jede neue Seite in den Lesemodus um, wenn die Seite dafür geeignet ist:

```js
function switchToReaderMode(tabId, changeInfo, tabInfo) {
  if (changeInfo.isArticle) {
    browser.tabs.toggleReaderMode(tabId);
  }
}

browser.tabs.onUpdated.addListener(switchToReaderMode);
```

{{WebExtExamples}}

## Browser-Kompatibilität

{{Compat}}
