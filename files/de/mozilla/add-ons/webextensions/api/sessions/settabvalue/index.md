---
title: sessions.setTabValue()
slug: Mozilla/Add-ons/WebExtensions/API/sessions/setTabValue
l10n:
  sourceCommit: 5c2abb422d26ae422891e699cc083bdd93c5e410
---

{{AddonSidebar}}

Speichert ein Schlüssel/Wert-Paar, das mit einem bestimmten Tab verknüpft wird. Sie können diesen Wert anschließend mit {{WebExtAPIRef("sessions.getTabValue")}} abrufen.

Beachten Sie, dass diese Daten nur für die Erweiterung sichtbar sind, die sie gesetzt hat, und nicht für andere Erweiterungen.

Dies ist eine asynchrone Funktion, die ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) zurückgibt.

## Syntax

```js-nolint
let storing = browser.sessions.setTabValue(
  tabId,    // integer
  key,      // string
  value     // string or object
)
```

### Parameter

- `tabId`
  - : `integer`. Die ID des Tabs, mit dem Sie die Daten verknüpfen möchten. Ein Fehler wird ausgelöst, wenn die ID ungültig ist.
- `key`
  - : `string`. Schlüssel, den Sie später verwenden können, um diesen speziellen Datenwert abzurufen.
- `value`
  - : `string` oder `object`. Wenn dies ein Objekt ist, wird es [stringifiziert](/de/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify), daher werden Objektmethoden beispielsweise weggelassen. Wenn hier eine Funktion angegeben wird, wird sie als `null` gespeichert.

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise), das ohne Argumente aufgelöst wird, wenn der Aufruf erfolgreich war. Wenn der Aufruf fehlschlug (zum Beispiel, weil die Tab-ID nicht gefunden werden konnte), wird das Promise mit einer Fehlermeldung abgelehnt.

## Beispiele

Setzen Sie einen Wert auf den aktiven Tab, wenn der Benutzer ein Menüelement auswählt. Beachten Sie, dass Sie die "menus" [Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions) benötigen, um dieses Beispiel auszuführen:

```js
async function setOnActiveTab() {
  let tabArray = await browser.tabs.query({
    currentWindow: true,
    active: true,
  });
  let tabId = tabArray[0].id;
  await browser.sessions.setTabValue(tabId, "my-key", "my-value");
}

browser.menus.create({
  id: "my-item",
  title: "my item",
  contexts: ["all"],
});

browser.menus.onClicked.addListener(setOnActiveTab);
```

{{WebExtExamples}}

## Browser-Kompatibilität

{{Compat}}
