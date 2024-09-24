---
title: browserSettings.allowPopupsForUserEvents
slug: Mozilla/Add-ons/WebExtensions/API/browserSettings/allowPopupsForUserEvents
l10n:
  sourceCommit: 43e3ff826b7b755b05986c99ada75635c01c187c
---

{{AddonSidebar}}

Ein {{WebExtAPIRef("types.BrowserSetting", "BrowserSetting")}} Objekt, das verwendet werden kann, um die Fähigkeit von Webseiten, Popups als Reaktion auf Benutzeraktionen zu öffnen, zu aktivieren oder zu deaktivieren.

Der zugrunde liegende Wert ist ein Boolean.

Standardmäßig erlauben Browser Webseiten, Popups als Reaktion auf eine bestimmte Reihe von Ereignissen zu öffnen: zum Beispiel [click](/de/docs/Web/API/Element/click_event), [mouseup](/de/docs/Web/API/Element/mouseup_event), [submit](/de/docs/Web/API/HTMLFormElement/submit_event). Wenn `allowPopupsForUserEvents` auf `false` gesetzt ist, können keine Benutzereignisse Popups öffnen. Wenn es auf `true` gesetzt ist, wird die Standardreihe von Ereignissen erlaubt, Popups zu öffnen.

Angenommen, eine Webseite hat Code wie diesen:

```js
window.addEventListener("click", (e) => {
  window.open("https://example.com", "myPopup", "height=400,width=400");
});
```

Standardmäßig wird dadurch ein Popup-Fenster geöffnet. Wenn Ihre Erweiterung `allowPopupsForUserEvents` auf `false` setzt, wird kein Popup geöffnet, und der Benutzer wird darüber informiert, dass das Popup blockiert wurde.

## Browser-Kompatibilität

{{Compat}}

## Beispiele

Ändern der Einstellung:

```js
function toggleAllowPopup() {
  function toggle(current) {
    console.log(`Aktueller Wert: ${current.value}`);
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
