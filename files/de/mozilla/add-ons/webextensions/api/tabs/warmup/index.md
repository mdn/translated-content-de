---
title: tabs.warmup()
slug: Mozilla/Add-ons/WebExtensions/API/tabs/warmup
l10n:
  sourceCommit: 43e3ff826b7b755b05986c99ada75635c01c187c
---

{{AddonSidebar}}

Um die Nutzung von Systemressourcen zu optimieren, können Browser die GPU-Ressourcen von Tabs freigeben, die der Benutzer für eine gewisse Zeit nicht besucht hat. Wenn ein Browser dies für einen Tab getan hat, kann die Reaktivierung des Tabs (zum Beispiel, wenn der Benutzer zu ihm wechselt) länger dauern als gewöhnlich.

Die `tabs.warmup()`-API ermöglicht einer Erweiterung, den Prozess der Darstellung der Ressourcen für einen inaktiven Tab zu starten, wenn die Erweiterung erwartet, dass der Benutzer bald zu diesem Tab wechseln könnte. Dies macht den eigentlichen Tab-Wechsel schneller, als es sonst der Fall wäre.

Beachten Sie, dass diese API nicht bei verworfenen Tabs funktioniert und nicht direkt vor dem Wechseln der Tabs aufgerufen werden muss. Es handelt sich lediglich um eine Leistungsverbesserung, wenn der Tab-Wechsel vorausgesehen werden kann, etwa wenn über einen Button geschwebt wird, der bei Klick zu dem Tab wechselt.

Es wird erwartet, dass diese API hauptsächlich für Tab-Verwaltungserweiterungen nützlich ist.

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

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise), das ohne Argumente erfüllt wird, wenn der durch `tabId` identifizierte Tab erfolgreich vorgewärmt wurde. Wenn `tabId` keinen offenen Tab identifiziert, oder wenn das Vorwärmen aus einem anderen Grund fehlschlägt, wird das Promise mit einer Fehlermeldung abgelehnt.

## Beispiele

Dieser Code fügt dem `browserAction.onClicked`-Ereignis einen Listener hinzu. Der Listener ruft alle Tabs im aktuellen Fenster ab, die Seiten unter "https\://developer.mozilla.org/" enthalten, und wärmt den ersten auf, den er findet.

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
