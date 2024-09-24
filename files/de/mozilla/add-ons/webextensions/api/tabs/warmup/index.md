---
title: tabs.warmup()
slug: Mozilla/Add-ons/WebExtensions/API/tabs/warmup
l10n:
  sourceCommit: 43e3ff826b7b755b05986c99ada75635c01c187c
---

{{AddonSidebar}}

Um die Nutzung von Systemressourcen zu optimieren, können Browser GPU-Ressourcen von Tabs entfernen, die der Benutzer seit einer gewissen Zeit nicht aufgerufen hat. Wenn ein Browser dies für einen Tab getan hat, kann die Reaktivierung des Tabs (zum Beispiel, wenn der Benutzer zu diesem wechselt) länger dauern als gewöhnlich.

Die `tabs.warmup()` API ermöglicht es einer Erweiterung, den Prozess des Renderings der Ressourcen für einen inaktiven Tab zu starten, falls die Erweiterung erwartet, dass der Benutzer bald zu diesem Tab wechseln könnte. Dadurch wird der tatsächliche Tabwechsel schneller, als er sonst wäre.

Beachten Sie, dass diese API nicht mit verworfenen Tabs funktioniert und nicht unmittelbar vor einem Tabwechsel aufgerufen werden muss. Sie stellt lediglich eine Leistungsverbesserung dar, wenn der Tabwechsel antizipiert werden kann, wie beim Überfahren eines Buttons, der beim Klicken zu dem Tab wechseln würde.

Es wird erwartet, dass diese API hauptsächlich für Tab-Management-Erweiterungen nützlich ist.

Es handelt sich um eine asynchrone Funktion, die ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) zurückgibt.

## Syntax

```js-nolint
let warming = browser.tabs.warmup(
  tabId               // integer
)
```

### Parameter

- `tabId`
  - : `integer`. ID des Tabs, der aufgewärmt werden soll. Wenn das hier übergebene Argument kein Integer ist (insbesondere, wenn es `null` oder `undefined` ist), wird `warmup()` synchron eine Ausnahme auslösen.

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise), das ohne Argumente erfüllt wird, wenn der durch `tabId` identifizierte Tab erfolgreich aufgewärmt wird. Wenn `tabId` keinen offenen Tab identifiziert oder das Aufwärmen aus einem anderen Grund fehlschlägt, wird das Promise mit einer Fehlermeldung abgelehnt.

## Beispiele

Dieser Code fügt einen Listener zum `browserAction.onClicked` Ereignis hinzu. Der Listener ruft alle Tabs im aktuellen Fenster ab, die Seiten unter "https\://developer.mozilla.org/" enthalten, und wärmt den ersten auf, den er findet.

```js
function onSuccess() {
  console.log("success!");
}

function onFailure(error) {
  // z.B. ID eines nicht existierenden Tabs
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
