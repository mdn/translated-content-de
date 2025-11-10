---
title: Adressleisten-Vorschläge
slug: Mozilla/Add-ons/WebExtensions/user_interface/Omnibox
l10n:
  sourceCommit: 886f2641ae90a70858c5e7d0d20959c70ee44d9d
---

Mit der {{WebExtAPIRef("omnibox")}} API können Erweiterungen die Vorschläge im Dropdown der Adressleiste des Browsers anpassen, wenn der Benutzer ein Schlüsselwort eingibt.

![Beispiel, das das Ergebnis der Anpassung der Adressleisten-Vorschläge durch das WebExtension `firefox_code_search` zeigt.](omnibox_example_small.png)

Dies ermöglicht es Ihrer Erweiterung beispielsweise, in einer Bibliothek kostenloser E-Books zu suchen oder, wie im obigen Beispiel, ein Repository von Codebeispielen zu durchsuchen.

## Spezifizierung der Omnibox-Anpassung

Sie teilen Ihrer Erweiterung mit, dass sie die Vorschläge der Adressleiste anpassen wird, indem Sie den [omnibox](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/omnibox)-Schlüssel und die Definition des Auslöser-Schlüsselworts in ihrer [manifest.json](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json)-Datei einfügen:

```json
  "omnibox": { "keyword" : "cs" }
```

In der JavaScript-Datei der Hintergrundseite der Erweiterung können Sie mit {{WebExtAPIRef("omnibox.setDefaultSuggestion()")}} optional den ersten Vorschlag definieren, der im Dropdown der Adressleiste angezeigt wird. Verwenden Sie dies, um einen Hinweis darauf zu geben, wie die Funktion verwendet wird:

```js
browser.omnibox.setDefaultSuggestion({
  description: `Search the Firefox codebase
    (e.g. "hello world" | "path:omnibox.js onInputChanged")`,
});
```

Sie können dann den Code hinzufügen, um den benutzerdefinierten Inhalt bereitzustellen, indem Sie auf {{WebExtAPIRef("omnibox.onInputStarted")}} lauschen, welches ausgelöst wird, wenn der Benutzer das Schlüsselwort und ein Leerzeichen eingegeben hat, und auf {{WebExtAPIRef("omnibox.onInputChanged")}} lauschen, welches ausgelöst wird, wann immer der Benutzer den Eintrag in der Adressleiste aktualisiert. Sie können dann die Vorschläge befüllen, in diesem Fall eine [Suche von mozilla-central](https://searchfox.org/firefox-main/search) mit dem vom Benutzer eingegebenen Begriff erstellen:

```js
browser.omnibox.onInputChanged.addListener((text, addSuggestions) => {
  let headers = new Headers({ Accept: "application/json" });
  let init = { method: "GET", headers };
  let url = buildSearchURL(text);
  let request = new Request(url, init);

  fetch(request).then(createSuggestionsFromResponse).then(addSuggestions);
});
```

Wenn die Erweiterung einen Standardvorschlag mit {{WebExtAPIRef("omnibox.setDefaultSuggestion()")}} gesetzt hat, wird dieser zuerst im Dropdown angezeigt.

Die Erweiterung kann dann darauf lauschen, dass der Benutzer auf einen der Vorschläge klickt, mit {{WebExtAPIRef("omnibox.onInputEntered")}}. Wird der Standardvorschlag angeklickt, wird der benutzerdefinierte Begriff des Nutzers zurückgegeben, andernfalls wird der Zeichenfolgevorschlag zurückgegeben. Dies gibt auch Informationen zu den Browser-Einstellungen des Benutzers zur Handhabung neuer Links weiter. Im folgenden Code wird der benutzerdefinierte Begriff des Nutzers zu einer Suche verwendet, andernfalls wird die vorgeschlagene URL geöffnet:

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

Das [webextensions-examples](https://github.com/mdn/webextensions-examples) Repository auf GitHub enthält das [firefox-code-search](https://github.com/mdn/webextensions-examples/tree/main/firefox-code-search) Beispiel, welches die Suchleiste anpasst.
