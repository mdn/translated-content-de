---
title: Address bar suggestions
slug: Mozilla/Add-ons/WebExtensions/user_interface/Omnibox
l10n:
  sourceCommit: a966a8b4eade72a13de8a688c13f2d5056321f02
---

{{AddonSidebar}}

Mit der Verwendung der {{WebExtAPIRef("omnibox")}} API können Erweiterungen die Vorschläge im Drop-down-Feld der Browser-Adressleiste anpassen, wenn der Benutzer ein Schlüsselwort eingibt.

![Beispiel, das das Ergebnis der Anpassung der Adressleisten-Vorschläge durch die firefox_code_search WebExtension zeigt.](omnibox_example_small.png)

Dies ermöglicht es Ihrer Erweiterung beispielsweise, in einer Bibliothek kostenloser E-Books zu suchen oder, wie im obigen Beispiel, in einem Repository von Code-Beispielen.

## Spezifikation der Omnibox-Anpassung

Informieren Sie Ihre Erweiterung, dass sie die Adressleisten-Vorschläge anpassen wird, indem Sie den [omnibox](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/omnibox)-Schlüssel und die Definition des Auslöser-Schlüsselworts in ihrer [manifest.json](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json)-Datei einfügen:

```json
  "omnibox": { "keyword" : "cs" }
```

In der Hintergrund-JavaScript-Datei der Erweiterung können Sie mit {{WebExtAPIRef("omnibox.setDefaultSuggestion()")}} optional den ersten Vorschlag definieren, der im Drop-down der Adressleiste angezeigt wird. Verwenden Sie dies, um einen Hinweis darauf zu geben, wie man die Funktion verwendet:

```js
browser.omnibox.setDefaultSuggestion({
  description: `Search the Firefox codebase
    (e.g. "hello world" | "path:omnibox.js onInputChanged")`,
});
```

Sie können dann den Code hinzufügen, um den benutzerdefinierten Inhalt bereitzustellen, indem Sie auf {{WebExtAPIRef("omnibox.onInputStarted")}} hören, der ausgelöst wird, wenn der Benutzer das Schlüsselwort und ein Leerzeichen eingetippt hat, und {{WebExtAPIRef("omnibox.onInputChanged")}}, der jedes Mal ausgelöst wird, wenn der Benutzer den Eintrag in der Adressleiste aktualisiert. Sie können dann die Vorschläge auffüllen, in diesem Fall eine [Suche in mozilla-central](https://searchfox.org/mozilla-central/search) mit dem vom Benutzer eingegebenen Begriff erstellen:

```js
browser.omnibox.onInputChanged.addListener((text, addSuggestions) => {
  let headers = new Headers({ Accept: "application/json" });
  let init = { method: "GET", headers };
  let url = buildSearchURL(text);
  let request = new Request(url, init);

  fetch(request).then(createSuggestionsFromResponse).then(addSuggestions);
});
```

Wenn die Erweiterung einen Standardvorschlag mit {{WebExtAPIRef("omnibox.setDefaultSuggestion()")}} festgelegt hat, erscheint dieser zuerst im Drop-down.

Die Erweiterung kann dann auf das Klicken eines Benutzers auf einen der Vorschläge lauschen, indem sie {{WebExtAPIRef("omnibox.onInputEntered")}} verwendet. Wenn auf den Standardvorschlag geklickt wird, wird der benutzerdefinierte Begriff des Nutzers zurückgegeben, andernfalls wird der Zeichenstring des Vorschlags zurückgegeben. Dies übergibt auch Informationen zu den Browser-Einstellungen des Benutzers für das Verhalten neuer Links. Im folgenden Code wird der benutzerdefinierte Begriff des Nutzers verwendet, um eine Suche zu erstellen, andernfalls wird die vorgeschlagene URL geöffnet:

```js
browser.omnibox.onInputEntered.addListener((text, disposition) => {
  let url = text;
  if (!text.startsWith(SOURCE_URL)) {
    // Update the URL if the user clicks on the default suggestion.
    url = `${SEARCH_URL}?q=${text}`;
  }
  switch (disposition) {
    case "currentTab":
      browser.tabs.update({ url });
      break;
    case "newForegroundTab":
      browser.tabs.create({ url });
      break;
    case "newBackgroundTab":
      browser.tabs.create({ url, active: false });
      break;
  }
});
```

## Beispiele

Das [webextensions-examples](https://github.com/mdn/webextensions-examples)-Repository auf GitHub enthält das [firefox-code-search](https://github.com/mdn/webextensions-examples/tree/main/firefox-code-search)-Beispiel, das die Suchleiste anpasst.
