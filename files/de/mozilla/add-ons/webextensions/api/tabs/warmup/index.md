---
title: tabs.warmup()
slug: Mozilla/Add-ons/WebExtensions/API/tabs/warmup
l10n:
  sourceCommit: 09109b6f9444d22215ba330ec1e64e73980b2a6c
---

Um die Nutzung von Systemressourcen zu optimieren, können Browser GPU-Ressourcen von Tabs löschen, auf die der Benutzer eine gewisse Zeit lang nicht zugegriffen hat. Wenn ein Browser dies für einen Tab getan hat, kann das Reaktivieren des Tabs (zum Beispiel, wenn der Benutzer zu ihm wechselt) länger dauern, als es normalerweise der Fall wäre.

Die `tabs.warmup()` API ermöglicht es einer Erweiterung, den Prozess zum Rendern der Ressourcen eines inaktiven Tabs zu starten, wenn die Erweiterung erwartet, dass der Benutzer möglicherweise bald zu dem Tab wechselt. Dies führt dazu, dass das tatsächliche Umschalten des Tabs schneller erfolgt, als es sonst der Fall wäre.

Beachten Sie, dass diese API nicht bei verworfenen Tabs funktioniert und nicht unmittelbar vor dem Umschalten von Tabs aufgerufen werden muss. Sie ist lediglich eine Leistungsverbesserung, wenn das Umschalten des Tabs vorhergesehen werden kann, zum Beispiel wenn man über einen Button schwebt, der bei einem Klick zu dem Tab wechseln würde.

Es wird erwartet, dass diese API vorwiegend für Tab-Management-Erweiterungen nützlich ist.

Dies ist eine asynchrone Funktion, die ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) zurückgibt.

## Syntax

```js-nolint
let warming = browser.tabs.warmup(
  tabId               // integer
)
```

### Parameter

- `tabId`
  - : `integer`. ID des Tabs, der vorgewärmt werden soll. Wenn das hier übergebene Argument kein Integer ist (insbesondere, wenn es `null` oder `undefined` ist), wird `warmup()` eine Ausnahme synchron auslösen.

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise), das ohne Argumente erfüllt wird, wenn der durch `tabId` identifizierte Tab erfolgreich vorgewärmt wird. Wenn `tabId` keinen offenen Tab identifiziert oder wenn das Vorwärmen aus einem anderen Grund fehlschlägt, wird das Promise mit einer Fehlermeldung zurückgewiesen.

## Beispiele

Dieser Code fügt einen Listener zum `browserAction.onClicked`-Ereignis hinzu. Der Listener ruft alle Tabs im aktuellen Fenster ab, die Seiten unter "https\://developer.mozilla.org/" enthalten und wärmt den ersten gefundenen Tab vor.

```js
function onSuccess() {
  console.log("success!");
}

function onFailure(error) {
  // e.g. ID of a nonexistent tab
  console.error(error);
}

async function warmupMDN() {
  const mdnTabs = await browser.tabs.query({
    currentWindow: true,
    url: "https://developer.mozilla.org/*",
  });

  if (mdnTabs.length > 0) {
    const warming = browser.tabs.warmup(mdnTabs[0].id);
    warming.then(onSuccess, onFailure);
  }
}

browser.browserAction.onClicked.addListener(warmupMDN);
```

{{WebExtExamples}}

## Browser-Kompatibilität

{{Compat}}
