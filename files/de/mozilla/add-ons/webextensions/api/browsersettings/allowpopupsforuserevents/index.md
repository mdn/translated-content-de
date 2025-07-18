---
title: browserSettings.allowPopupsForUserEvents
slug: Mozilla/Add-ons/WebExtensions/API/browserSettings/allowPopupsForUserEvents
l10n:
  sourceCommit: 09109b6f9444d22215ba330ec1e64e73980b2a6c
---

Ein {{WebExtAPIRef("types.BrowserSetting", "BrowserSetting")}}-Objekt, das verwendet werden kann, um die Fähigkeit von Webseiten zu aktivieren oder zu deaktivieren, Popups als Reaktion auf Benutzeraktionen zu öffnen.

Der zugrunde liegende Wert ist ein boolescher Wert.

Standardmäßig erlauben Browser Webseiten, Popups als Reaktion auf eine bestimmte Reihe von Ereignissen zu öffnen: zum Beispiel [click](/de/docs/Web/API/Element/click_event), [mouseup](/de/docs/Web/API/Element/mouseup_event), [submit](/de/docs/Web/API/HTMLFormElement/submit_event). Wenn `allowPopupsForUserEvents` auf `false` gesetzt ist, können keine Benutzereignisse Popups öffnen. Wenn es auf `true` gesetzt ist, wird die Standardmenge von Ereignissen erlaubt, Popups zu öffnen.

Angenommen, eine Webseite enthält Code wie diesen:

```js
window.addEventListener("click", (e) => {
  window.open("https://example.com", "myPopup", "height=400,width=400");
});
```

Standardmäßig öffnet dies ein Popup-Fenster. Wenn Ihre Erweiterung `allowPopupsForUserEvents` auf `false` setzt, wird kein Popup geöffnet und der Benutzer wird informiert, dass das Popup blockiert wurde.

## Beispiele

Schalten Sie die Einstellung um:

```js
function toggleAllowPopup() {
  function toggle(current) {
    console.log(`Current value: ${current.value}`);
    browser.browserSettings.allowPopupsForUserEvents.set({
      value: !current.value,
    });
  }

  browser.browserSettings.allowPopupsForUserEvents.get({}).then(toggle);
}

browser.browserAction.onClicked.addListener(() => {
  toggleAllowPopup();
});
```

{{WebExtExamples}}

## Browser-Kompatibilität

{{Compat}}
