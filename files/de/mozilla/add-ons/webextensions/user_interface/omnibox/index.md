---
title: Adressleisten-Vorschläge
slug: Mozilla/Add-ons/WebExtensions/user_interface/Omnibox
l10n:
  sourceCommit: a966a8b4eade72a13de8a688c13f2d5056321f02
---

{{AddonSidebar}}

Mit der {{WebExtAPIRef("omnibox")}} API können Erweiterungen die Vorschläge anpassen, die im Dropdown der Browser-Adressleiste angezeigt werden, wenn der Benutzer ein Schlüsselwort eingibt.

![Beispiel, das das Ergebnis der Anpassung der Adressleisten-Vorschläge durch die firefox_code_search WebExtension zeigt.](omnibox_example_small.png)

Das ermöglicht Ihrer Erweiterung beispielsweise, in einer Bibliothek von kostenlosen E-Books oder, wie im obigen Beispiel, in einem Repository von Codebeispielen zu suchen.

## Festlegung der omnibox-Anpassung

Sie informieren Ihre Erweiterung, dass sie die Adressleisten-Vorschläge anpassen wird, indem Sie den [omnibox](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/omnibox) Schlüssel und die Definition des Auslöse-Schlüsselworts in ihrer [manifest.json](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json) Datei einfügen:

```json
  "omnibox": { "keyword" : "cs" }
```

In der Hintergrund-JavaScript-Datei der Erweiterung können Sie optional die erste Anzeige im Dropdown der Adressleiste mit {{WebExtAPIRef("omnibox.setDefaultSuggestion()")}} festlegen. Verwenden Sie dies, um einen Hinweis zu geben, wie die Funktion genutzt werden kann:

```js
browser.omnibox.setDefaultSuggestion({
  description: `Search the Firefox codebase
    (e.g. "hello world" | "path:omnibox.js onInputChanged")`,
});
```

Anschließend können Sie den Code hinzufügen, um den angepassten Inhalt bereitzustellen, indem Sie {{WebExtAPIRef("omnibox.onInputStarted")}} abhören, das ausgelöst wird, wenn der Benutzer das Schlüsselwort und ein Leerzeichen eingegeben hat, und {{WebExtAPIRef("omnibox.onInputChanged")}}, das immer ausgelöst wird, wenn der Benutzer den Eintrag in der Adressleiste aktualisiert. Sie können dann die Vorschläge ausfüllen, in diesem Fall eine [Suche in mozilla-central](https://searchfox.org/mozilla-central/search) unter Verwendung des vom Benutzer eingegebenen Begriffs erstellen:

```js
browser.omnibox.onInputChanged.addListener((text, addSuggestions) => {
  let headers = new Headers({ Accept: "application/json" });
  let init = { method: "GET", headers };
  let url = buildSearchURL(text);
  let request = new Request(url, init);

  fetch(request).then(createSuggestionsFromResponse).then(addSuggestions);
});
```

Wenn die Erweiterung einen Standardvorschlag mit {{WebExtAPIRef("omnibox.setDefaultSuggestion()")}} gesetzt hat, wird dieser an erster Stelle im Dropdown angezeigt.

Die Erweiterung kann dann darauf warten, dass der Benutzer auf einen der Vorschläge klickt, mithilfe von {{WebExtAPIRef("omnibox.onInputEntered")}}. Wenn der Standardvorschlag angeklickt wird, wird der benutzerdefinierte Begriff des Benutzers zurückgegeben, andernfalls wird der Zeichenfolgenvorschlag zurückgegeben. Dies übermittelt auch Informationen zu den Browser-Einstellungen des Benutzers für die Behandlung neuer Links. Im unten stehenden Code wird der benutzerdefinierte Begriff des Benutzers für eine Suche verwendet, andernfalls wird die vorgeschlagene URL geöffnet:

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

Das [webextensions-examples](https://github.com/mdn/webextensions-examples) Repository auf GitHub beinhaltet das [firefox-code-search](https://github.com/mdn/webextensions-examples/tree/main/firefox-code-search) Beispiel, das die Suchleiste anpasst.
