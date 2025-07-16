---
title: browserSettings.allowPopupsForUserEvents
slug: Mozilla/Add-ons/WebExtensions/API/browserSettings/allowPopupsForUserEvents
l10n:
  sourceCommit: 5c2abb422d26ae422891e699cc083bdd93c5e410
---

{{AddonSidebar}}

Ein {{WebExtAPIRef("types.BrowserSetting", "BrowserSetting")}}-Objekt, das verwendet werden kann, um die Fähigkeit von Webseiten zu aktivieren oder zu deaktivieren, Pop-ups als Reaktion auf Benutzeraktionen zu öffnen.

Der zugrunde liegende Wert ist ein Boolean.

Standardmäßig erlauben Browser, dass Webseiten Pop-ups als Reaktion auf eine bestimmte Reihe von Ereignissen öffnen: zum Beispiel [click](/de/docs/Web/API/Element/click_event), [mouseup](/de/docs/Web/API/Element/mouseup_event), [submit](/de/docs/Web/API/HTMLFormElement/submit_event). Wenn `allowPopupsForUserEvents` auf `false` gesetzt ist, kann kein Benutzereignis Pop-ups öffnen. Wenn es auf `true` gesetzt ist, darf die voreingestellte Reihe von Ereignissen Pop-ups öffnen.

Zum Beispiel, wenn eine Webseite einen Code wie diesen enthält:

```js
window.addEventListener("click", (e) => {
  window.open("https://example.com", "myPopup", "height=400,width=400");
});
```

Standardmäßig wird dadurch ein Pop-up-Fenster geöffnet. Wenn Ihre Erweiterung `allowPopupsForUserEvents` auf `false` setzt, wird kein Pop-up geöffnet, und der Benutzer wird darüber informiert, dass das Pop-up blockiert wurde.

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

## Browser-Kompatibilität

{{Compat}}
