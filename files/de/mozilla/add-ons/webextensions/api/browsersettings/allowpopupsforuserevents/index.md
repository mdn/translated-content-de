---
title: browserSettings.allowPopupsForUserEvents
slug: Mozilla/Add-ons/WebExtensions/API/browserSettings/allowPopupsForUserEvents
l10n:
  sourceCommit: 43e3ff826b7b755b05986c99ada75635c01c187c
---

{{AddonSidebar}}

Ein {{WebExtAPIRef("types.BrowserSetting", "BrowserSetting")}}-Objekt, das verwendet werden kann, um die Fähigkeit von Webseiten zu aktivieren oder zu deaktivieren, Popups als Reaktion auf Benutzeraktionen zu öffnen.

Der zugrunde liegende Wert ist ein boolescher Wert.

Standardmäßig erlauben Browser Webseiten, Popups als Reaktion auf eine bestimmte Reihe von Ereignissen zu öffnen: zum Beispiel [click](/de/docs/Web/API/Element/click_event), [mouseup](/de/docs/Web/API/Element/mouseup_event), [submit](/de/docs/Web/API/HTMLFormElement/submit_event). Wenn `allowPopupsForUserEvents` auf `false` gesetzt ist, kann kein Benutzerereignis Popups öffnen. Wenn es auf `true` gesetzt ist, wird die Standardmenge der Ereignisse zugelassen, um Popups zu öffnen.

Beispielsweise könnte eine Webseite Code wie diesen haben:

```js
window.addEventListener("click", (e) => {
  window.open("https://example.com", "myPopup", "height=400,width=400");
});
```

Standardmäßig wird dies ein Popup-Fenster öffnen. Wenn Ihre Erweiterung `allowPopupsForUserEvents` auf `false` setzt, wird kein Popup geöffnet, und der Benutzer wird darüber informiert, dass das Popup blockiert wurde.

## Browser-Kompatibilität

{{Compat}}

## Beispiele

Einstellung umschalten:

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
