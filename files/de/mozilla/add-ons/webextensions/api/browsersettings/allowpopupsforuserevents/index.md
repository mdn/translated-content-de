---
title: browserSettings.allowPopupsForUserEvents
slug: Mozilla/Add-ons/WebExtensions/API/browserSettings/allowPopupsForUserEvents
l10n:
  sourceCommit: 43e3ff826b7b755b05986c99ada75635c01c187c
---

{{AddonSidebar}}

Ein {{WebExtAPIRef("types.BrowserSetting", "BrowserSetting")}}-Objekt, das verwendet werden kann, um die Fähigkeit von Webseiten zu aktivieren oder zu deaktivieren, Popups als Antwort auf Benutzeraktionen zu öffnen.

Der zugrunde liegende Wert ist ein boolescher Wert.

Standardmäßig erlauben Browser Webseiten, Popups als Antwort auf eine bestimmte Reihe von Ereignissen zu öffnen: zum Beispiel [click](/de/docs/Web/API/Element/click_event), [mouseup](/de/docs/Web/API/Element/mouseup_event), [submit](/de/docs/Web/API/HTMLFormElement/submit_event). Wenn `allowPopupsForUserEvents` auf `false` gesetzt ist, wird kein Benutzereignis in der Lage sein, Popups zu öffnen. Wenn es auf `true` gesetzt ist, wird die Standardreihe von Ereignissen erlaubt sein, Popups zu öffnen.

Zum Beispiel, nehmen wir an, eine Webseite hat Code wie diesen:

```js
window.addEventListener("click", (e) => {
  window.open("https://example.com", "myPopup", "height=400,width=400");
});
```

Standardmäßig wird dies ein Popup-Fenster öffnen. Wenn Ihre Erweiterung `allowPopupsForUserEvents` auf `false` setzt, wird kein Popup geöffnet, und der Benutzer wird informiert, dass das Popup blockiert wurde.

## Browser-Kompatibilität

{{Compat}}

## Beispiele

Die Einstellung umschalten:

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
