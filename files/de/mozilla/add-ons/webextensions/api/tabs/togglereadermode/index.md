---
title: tabs.toggleReaderMode()
slug: Mozilla/Add-ons/WebExtensions/API/tabs/toggleReaderMode
l10n:
  sourceCommit: 43e3ff826b7b755b05986c99ada75635c01c187c
---

{{AddonSidebar}}

Wechselt den Lesemodus für den angegebenen Tab.

Diese Funktion aktiviert oder deaktiviert den Lesemodus für den angegebenen Tab. Sie nimmt eine Tab-ID als Parameter: Wenn dieser weggelassen wird, wird der derzeit aktive Tab umgeschaltet.

Dies ist eine asynchrone Funktion, die ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) zurückgibt.

Der Lesemodus, auch als Leseransicht bekannt, ist eine Browserfunktion, die es dem Benutzer erleichtert, sich auf einen Artikel zu konzentrieren, indem sie:

- nicht wesentliche Seitenelemente wie Seitenleisten, Fußzeilen und Anzeigen ausblendet
- die Textgröße, den Kontrast und das Layout der Seite für eine bessere Lesbarkeit ändert.

Der Lesemodus ist speziell für Artikel nützlich, das heißt, Seiten, deren Hauptmerkmal ein Textkörper ist. Seiten, die keinen erkennbaren Artikel haben, sind nicht für die Anzeige im Lesemodus geeignet. Um herauszufinden, ob eine Seite ein Artikel ist, überprüfen Sie die `isArticle`-Eigenschaft von {{WebExtAPIRef("tabs.Tab")}}.

Um herauszufinden, ob ein Tab bereits im Lesemodus ist, überprüfen Sie die `isInReaderMode`-Eigenschaft von {{WebExtAPIRef("tabs.Tab")}}. Um Tabs zu verfolgen, die in den oder aus dem Lesemodus wechseln, müssen Sie den aktuellen Zustand aller Tabs verfolgen und überprüfen, wann sich `isInReaderMode` ändert:

```js
function handleUpdated(tabId, changeInfo, tabInfo) {
  if (changeInfo.status === "complete") {
    console.log(`Tab ${tabId} reader mode: ${tabInfo.isInReaderMode}`);
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

Dieser Code wechselt jede neue Seite in den Lesemodus, wenn diese Seite dafür geeignet ist:

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
