---
title: tabs.toggleReaderMode()
slug: Mozilla/Add-ons/WebExtensions/API/tabs/toggleReaderMode
l10n:
  sourceCommit: 09109b6f9444d22215ba330ec1e64e73980b2a6c
---

Wechselt den Leseansicht-Modus für den angegebenen Tab.

Diese Funktion wechselt den Leseansicht-Modus für den angegebenen Tab. Sie nimmt eine Tab-ID als Parameter: Wenn diese weggelassen wird, wird der momentan aktive Tab umgeschaltet.

Dies ist eine asynchrone Funktion, die ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) zurückgibt.

Der Leseansicht-Modus, auch bekannt als Leseansicht, ist eine Browser-Funktion, die es dem Benutzer erleichtert, sich auf einen Artikel zu konzentrieren, indem:

- nicht wesentliche Seitenelemente wie Seitenleisten, Fußzeilen und Werbung ausgeblendet werden
- die Schriftgröße, der Kontrast und das Layout der Seite für eine bessere Lesbarkeit geändert werden.

Der Leseansicht-Modus ist speziell für Artikel nützlich: Also Seiten, deren Hauptmerkmal ein Textinhalt ist. Seiten, die keinen identifizierbaren Artikel haben, sind nicht für die Anzeige im Leseansicht-Modus geeignet. Um festzustellen, ob eine Seite ein Artikel ist, überprüfen Sie die `isArticle`-Eigenschaft von {{WebExtAPIRef("tabs.Tab")}}.

Um festzustellen, ob ein Tab bereits im Leseansicht-Modus ist, überprüfen Sie die `isInReaderMode`-Eigenschaft von {{WebExtAPIRef("tabs.Tab")}}. Um Tabs zu verfolgen, die in den Leseansicht-Modus wechseln oder diesen verlassen, müssen Sie den aktuellen Zustand aller Tabs nachverfolgen und überprüfen, wann sich `isInReaderMode` ändert:

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
  - : `integer`. Die ID des Tabs, der im Leseansicht-Modus angezeigt werden soll. Standardmäßig der ausgewählte Tab des aktuellen Fensters.

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise), das ohne Argumente erfüllt wird, wenn der Tab aktualisiert wurde. Wenn ein Fehler auftritt (zum Beispiel, weil die Seite kein Artikel war), wird das Promise mit einer Fehlermeldung abgelehnt.

## Beispiele

Dieser Code schaltet jede neue Seite in den Leseansicht-Modus, wenn die Seite dafür geeignet ist:

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
