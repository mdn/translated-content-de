---
title: Vorschläge in der Adressleiste
slug: Mozilla/Add-ons/WebExtensions/user_interface/Omnibox
l10n:
  sourceCommit: 3116241f515352d336d2edb460cebfe99d43aea7
---

Mit der {{WebExtAPIRef("omnibox")}} API können Erweiterungen die Vorschläge anpassen, die im Dropdown-Menü der Adressleiste angezeigt werden, wenn Benutzer ein Schlüsselwort eingeben.

![Beispiel für die Anpassung der Vorschläge in der Adressleiste durch das Beispiel firefox-code-search.](omnibox_example_small.png)

So kann Ihre Erweiterung beispielsweise eine Bibliothek kostenloser E-Books oder, wie im obigen Beispiel, eine Sammlung von Codebeispielen durchsuchen.

## Omnibox-Anpassung festlegen

Um festzulegen, dass Ihre Erweiterung die Vorschläge in der Adressleiste anpasst, fügen Sie den Schlüssel [omnibox](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/omnibox) und die Definition des auslösenden Schlüsselworts in die Datei [manifest.json](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json) ein:

```json
  "omnibox": { "keyword" : "cs" }
```

In der Hintergrund-JavaScript-Datei der Erweiterung können Sie mit {{WebExtAPIRef("omnibox.setDefaultSuggestion()")}} optional den ersten Vorschlag festlegen, der im Dropdown-Menü der Adressleiste angezeigt wird. Damit können Sie einen Hinweis zur Verwendung der Funktion geben:

```js
browser.omnibox.setDefaultSuggestion({
  description: `Search the Firefox codebase
    (e.g. "hello world" | "path:omnibox.js onInputChanged")`,
});
```

Anschließend können Sie Code hinzufügen, der die angepassten Inhalte bereitstellt. Dazu überwachen Sie {{WebExtAPIRef("omnibox.onInputStarted")}}, das ausgelöst wird, wenn Benutzer das Schlüsselwort gefolgt von einem Leerzeichen eingegeben haben, und {{WebExtAPIRef("omnibox.onInputChanged")}}, das bei jeder Änderung der Eingabe in der Adressleiste ausgelöst wird. Danach können Sie die Vorschläge zusammenstellen – in diesem Fall eine [Suche in mozilla-central](https://searchfox.org/firefox-main/search) mit dem von den Benutzern eingegebenen Begriff:

```js
browser.omnibox.onInputChanged.addListener((text, addSuggestions) => {
  let headers = new Headers({ Accept: "application/json" });
  let init = { method: "GET", headers };
  let url = buildSearchURL(text);
  let request = new Request(url, init);

  fetch(request).then(createSuggestionsFromResponse).then(addSuggestions);
});
```

Wenn die Erweiterung mit {{WebExtAPIRef("omnibox.setDefaultSuggestion()")}} einen Standardvorschlag festgelegt hat, erscheint dieser im Dropdown-Menü an erster Stelle.

Die Erweiterung kann mit {{WebExtAPIRef("omnibox.onInputEntered")}} darauf reagieren, dass Benutzer auf einen Vorschlag klicken. Wird der Standardvorschlag ausgewählt, wird der benutzerdefinierte Suchbegriff zurückgegeben; andernfalls wird die Zeichenfolge des Vorschlags zurückgegeben. Außerdem werden Informationen zu den Browsereinstellungen für den Umgang mit neuen Links übergeben. Im folgenden Code wird mit dem benutzerdefinierten Suchbegriff eine Suche erstellt; andernfalls wird die vorgeschlagene URL geöffnet:

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

Das Repository [webextensions-examples](https://github.com/mdn/webextensions-examples) auf GitHub enthält das Beispiel [firefox-code-search](https://github.com/mdn/webextensions-examples/tree/main/firefox-code-search), das die Suchleiste anpasst.
