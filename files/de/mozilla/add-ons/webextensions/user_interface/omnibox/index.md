---
title: Adressleiste-Vorschläge
slug: Mozilla/Add-ons/WebExtensions/user_interface/Omnibox
l10n:
  sourceCommit: 09109b6f9444d22215ba330ec1e64e73980b2a6c
---

Mit der {{WebExtAPIRef("omnibox")}} API können Erweiterungen die Vorschläge im Dropdown-Menü der Browser-Adressleiste anpassen, wenn der Benutzer ein Schlüsselwort eingibt.

![Beispiel, das das Ergebnis der Anpassung der Adressleiste-Vorschläge durch die Firefox-Code-Suche WebExtension zeigt.](omnibox_example_small.png)

Dies ermöglicht es Ihrer Erweiterung beispielsweise, eine Bibliothek kostenloser E-Books zu durchsuchen oder, wie im obigen Beispiel, ein Repository von Codebeispielen zu durchsuchen.

## Spezifizierung der Omnibox-Anpassung

Sie teilen Ihrer Erweiterung mit, dass sie die Vorschläge der Adressleiste anpassen soll, indem Sie den [omnibox](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/omnibox) Schlüssel und die Definition des Auslöse-Schlüsselworts in der [manifest.json](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json) Datei einfügen:

```json
  "omnibox": { "keyword" : "cs" }
```

Im Hintergrund-JavaScript-Datei der Erweiterung können Sie mit {{WebExtAPIRef("omnibox.setDefaultSuggestion()")}} optional den ersten Vorschlag definieren, der im Dropdown-Menü der Adressleiste angezeigt werden soll. Verwenden Sie dies, um einen Hinweis zu geben, wie Sie die Funktion nutzen können:

```js
browser.omnibox.setDefaultSuggestion({
  description: `Search the Firefox codebase
    (e.g. "hello world" | "path:omnibox.js onInputChanged")`,
});
```

Sie können dann den Code hinzufügen, um den angepassten Inhalt bereitzustellen, indem Sie auf {{WebExtAPIRef("omnibox.onInputStarted")}} hören, das ausgelöst wird, wenn der Benutzer das Schlüsselwort und ein Leerzeichen eingegeben hat, und {{WebExtAPIRef("omnibox.onInputChanged")}}, das jedes Mal ausgelöst wird, wenn der Benutzer den Eintrag in der Adressleiste aktualisiert. Sie können dann die Vorschläge füllen, indem Sie in diesem Fall eine [Suche in mozilla-central](https://searchfox.org/mozilla-central/search) mit dem vom Benutzer eingegebenen Begriff erstellen:

```js
browser.omnibox.onInputChanged.addListener((text, addSuggestions) => {
  let headers = new Headers({ Accept: "application/json" });
  let init = { method: "GET", headers };
  let url = buildSearchURL(text);
  let request = new Request(url, init);

  fetch(request).then(createSuggestionsFromResponse).then(addSuggestions);
});
```

Falls die Erweiterung einen Standardvorschlag mit {{WebExtAPIRef("omnibox.setDefaultSuggestion()")}} festgelegt hat, wird dieser zuerst im Dropdown-Menü angezeigt.

Die Erweiterung kann dann auf das Klicken des Benutzers auf einen der Vorschläge hören, indem sie {{WebExtAPIRef("omnibox.onInputEntered")}} verwendet. Wenn der Standardvorschlag angeklickt wird, wird der benutzerdefinierte Ausdruck des Benutzers zurückgegeben, andernfalls die Zeichenkette des Vorschlags. Dies übermittelt auch Informationen zu den Browsereinstellungen des Benutzers für den Umgang mit neuen Links. Im untenstehenden Code wird der benutzerdefinierte Ausdruck des Benutzers verwendet, um eine Suche zu erstellen, andernfalls wird die vorgeschlagene URL geöffnet:

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

Das [webextensions-examples](https://github.com/mdn/webextensions-examples) Repository auf GitHub enthält das [firefox-code-search](https://github.com/mdn/webextensions-examples/tree/main/firefox-code-search) Beispiel, das die Suchleiste anpasst.
