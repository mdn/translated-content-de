---
title: tabs.saveAsPDF()
slug: Mozilla/Add-ons/WebExtensions/API/tabs/saveAsPDF
l10n:
  sourceCommit: d82c19fea93f7b36787c6d84af600c955c2732d5
---

{{AddonSidebar}}

Speichert die aktuelle Seite als PDF-Datei. Dies öffnet einen Dialog, bereitgestellt durch das zugrunde liegende Betriebssystem, der den Benutzer fragt, wo die PDF-Datei gespeichert werden soll.

Dies ist eine asynchrone Funktion, die ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) zurückgibt.

## Syntax

```js-nolint
let saving = browser.tabs.saveAsPDF(
  pageSettings   // object
)
```

### Parameter

- `pageSettings`
  - : `object`. Einstellungen für die gespeicherte Seite, als ein {{WebExtAPIRef("tabs.PageSettings")}} Objekt. Dieses Objekt muss angegeben werden, aber alle seine Eigenschaften sind optional. Jegliche hier nicht angegebenen Eigenschaften erhalten die Standardwerte, die in der {{WebExtAPIRef("tabs.PageSettings", "PageSettings")}} Dokumentation aufgelistet sind.

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise), das mit einem Status-String erfüllt wird, wenn der Dialog geschlossen wurde. Der String kann einer der folgenden sein:

- "saved"
- "replaced"
- "canceled"
- "not_saved"
- "not_replaced"

## Beispiele

In diesem Beispiel hört ein Hintergrundskript auf einen Klick auf eine [Browseraktion](/de/docs/Mozilla/Add-ons/WebExtensions/user_interface/Toolbar_button), versucht dann, die aktuell aktive Registerkarte als PDF-Datei zu speichern, und protokolliert dann das Ergebnis:

```js
browser.browserAction.onClicked.addListener(() => {
  browser.tabs.saveAsPDF({}).then((status) => {
    console.log(status);
  });
});
```

## Kompatibilität mit Browsern

{{Compat}}