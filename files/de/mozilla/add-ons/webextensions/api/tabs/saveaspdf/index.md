---
title: tabs.saveAsPDF()
slug: Mozilla/Add-ons/WebExtensions/API/tabs/saveAsPDF
l10n:
  sourceCommit: 09109b6f9444d22215ba330ec1e64e73980b2a6c
---

Speichert die aktuelle Seite als PDF-Datei. Dies öffnet ein Dialogfeld, das vom zugrunde liegenden Betriebssystem bereitgestellt wird und den Benutzer fragt, wo er die PDF-Datei speichern möchte.

Dies ist eine asynchrone Funktion, die ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) zurückgibt.

## Syntax

```js-nolint
let saving = browser.tabs.saveAsPDF(
  pageSettings   // object
)
```

### Parameter

- `pageSettings`
  - : `object`. Einstellungen für die gespeicherte Seite, als ein {{WebExtAPIRef("tabs.PageSettings")}} Objekt. Dieses Objekt muss angegeben werden, aber alle seine Eigenschaften sind optional. Alle hier nicht angegebenen Eigenschaften erhalten die Standardwerte, die in der {{WebExtAPIRef("tabs.PageSettings", "PageSettings")}} Dokumentation aufgelistet sind.

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise), das mit einem Status-String erfüllt wird, wenn der Dialog geschlossen wurde. Der String kann einer der folgenden sein:

- "saved"
- "replaced"
- "canceled"
- "not_saved"
- "not_replaced"

## Beispiele

In diesem Beispiel lauscht ein Hintergrundskript auf einen Klick auf eine [Browser-Aktion](/de/docs/Mozilla/Add-ons/WebExtensions/user_interface/Toolbar_button), versucht dann, die derzeit aktive Registerkarte als PDF-Datei zu speichern, und protokolliert das Ergebnis:

```js
browser.browserAction.onClicked.addListener(() => {
  browser.tabs.saveAsPDF({}).then((status) => {
    console.log(status);
  });
});
```

## Browser-Kompatibilität

{{Compat}}
