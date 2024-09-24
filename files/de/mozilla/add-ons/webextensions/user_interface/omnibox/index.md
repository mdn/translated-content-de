---
title: Adressleiste Vorschläge
slug: Mozilla/Add-ons/WebExtensions/user_interface/Omnibox
l10n:
  sourceCommit: 43e3ff826b7b755b05986c99ada75635c01c187c
---

{{AddonSidebar}}

Mit der {{WebExtAPIRef("omnibox")}} API können Erweiterungen die Vorschläge in der Dropdown-Liste der Browser-Adressleiste anpassen, wenn der Nutzer ein Schlüsselwort eingibt.

![Beispiel, das das Ergebnis der Anpassung der Adressleistenvorschläge durch die firefox_code_search WebExtension zeigt.](omnibox_example_small.png)

Dadurch kann Ihre Erweiterung beispielsweise in einer Bibliothek kostenloser E-Books suchen oder, wie im obigen Beispiel, in einem Repository von Codebeispielen.

## Festlegung der Omnibox-Anpassung

Sie teilen Ihrer Erweiterung mit, dass sie die Vorschläge in der Adressleiste anpassen soll, indem Sie den [omnibox](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/omnibox) Schlüssel und die Definition des Auslöse-Schlüsselworts in der [manifest.json](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json) Datei einfügen:

```json
  "omnibox": { "keyword" : "cs" }
```

In der Hintergrund-JavaScript-Datei der Erweiterung können Sie mit {{WebExtAPIRef("omnibox.setDefaultSuggestion()")}} optional den ersten Vorschlag definieren, der in der Dropdown-Liste der Adressleiste angezeigt wird. Nutzen Sie dies, um einen Hinweis zur Verwendung der Funktion zu geben:

```js
browser.omnibox.setDefaultSuggestion({
  description: `Search the Firefox codebase
    (e.g. "hello world" | "path:omnibox.js onInputChanged")`,
});
```

Sie können dann den Code hinzufügen, um den benutzerdefinierten Inhalt bereitzustellen, indem Sie auf {{WebExtAPIRef("omnibox.onInputStarted")}} hören, das ausgelöst wird, wenn der Nutzer das Schlüsselwort und ein Leerzeichen eingegeben hat, und {{WebExtAPIRef("omnibox.onInputChanged")}}, das ausgelöst wird, wenn der Nutzer den Eintrag in der Adressleiste aktualisiert. Sie können dann die Vorschläge mit einem [Suchlauf von mozilla-central](https://searchfox.org/mozilla-central) mit dem vom Nutzer eingegebenen Begriff auffüllen:

```js
browser.omnibox.onInputChanged.addListener((text, addSuggestions) => {
  let headers = new Headers({ Accept: "application/json" });
  let init = { method: "GET", headers };
  let url = buildSearchURL(text);
  let request = new Request(url, init);

  fetch(request).then(createSuggestionsFromResponse).then(addSuggestions);
});
```

Wenn die Erweiterung einen Standardvorschlag mit {{WebExtAPIRef("omnibox.setDefaultSuggestion()")}} festgelegt hat, wird dieser zuerst im Dropdown angezeigt.

Die Erweiterung kann dann darauf warten, dass der Nutzer auf einen der Vorschläge klickt, indem sie {{WebExtAPIRef("omnibox.onInputEntered")}} verwendet. Wenn auf den Standardvorschlag geklickt wird, wird der benutzerdefinierte Begriff des Nutzers zurückgegeben, andernfalls wird die Zeichenkette des Vorschlags zurückgegeben. Dies übergibt auch Informationen zu den Benutzereinstellungen des Browsers für den Umgang mit neuen Links. Im folgenden Code wird der benutzerdefinierte Begriff des Nutzers verwendet, um eine Suche zu erstellen, andernfalls wird die vorgeschlagene URL geöffnet:

```js
browser.omnibox.onInputEntered.addListener((text, disposition) => {
  let url = text;
  if (!text.startsWith(SOURCE_URL)) {
    // Aktualisieren Sie die URL, wenn der Nutzer auf den Standardvorschlag klickt.
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
