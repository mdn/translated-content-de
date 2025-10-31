---
title: omnibox.onInputEntered
slug: Mozilla/Add-ons/WebExtensions/API/omnibox/onInputEntered
l10n:
  sourceCommit: a4fcf79b60471db6f148fa4ba36f2cdeafbbeb70
---

Wird ausgelöst, wenn der Benutzer eine der Vorschläge ausgewählt hat, die Ihre Erweiterung der Dropdown-Liste der Adressleiste hinzugefügt hat.

Verwenden Sie dieses Ereignis, um die Auswahl des Benutzers zu verarbeiten, im Allgemeinen durch das Öffnen der entsprechenden Seite. Der Ereignislistener erhält:

- die Auswahl des Benutzers
- eine {{WebExtAPIRef("omnibox.OnInputEnteredDisposition")}}: Verwenden Sie dies, um zu bestimmen, ob die neue Seite im aktuellen Tab, in einem neuen Vordergrund-Tab oder in einem neuen Hintergrund-Tab geöffnet werden soll.

## Syntax

```js-nolint
browser.omnibox.onInputEntered.addListener(listener)
browser.omnibox.onInputEntered.removeListener(listener)
browser.omnibox.onInputEntered.hasListener(listener)
```

Ereignisse haben drei Funktionen:

- `addListener(listener)`
  - : Fügt diesem Ereignis einen Listener hinzu.
- `removeListener(listener)`
  - : Beendet das Abhören dieses Ereignisses. Das Argument `listener` ist der zu entfernende Listener.
- `hasListener(listener)`
  - : Prüft, ob `listener` für dieses Ereignis registriert ist. Gibt `true` zurück, wenn er lauscht, andernfalls `false`.

## addListener Syntax

Der Listener-Funktion werden zwei Parameter übergeben: ein String `text`, und ein {{WebExtAPIRef("omnibox.OnInputEnteredDisposition")}}.

### Parameter

- `text`
  - : `String`. Dies ist der Wert der `content`-Eigenschaft des {{WebExtAPIRef("omnibox.SuggestResult")}} Objekts, das der Benutzer ausgewählt hat.
- `disposition`
  - : {{WebExtAPIRef("omnibox.OnInputEnteredDisposition", "OnInputEnteredDisposition")}}. Eine {{WebExtAPIRef("omnibox.OnInputEnteredDisposition")}} Enumeration, die angibt, ob die Erweiterung die Seite im aktuellen Tab, in einem neuen Vordergrund-Tab oder in einem neuen Hintergrund-Tab öffnen soll.

## Beispiele

Dieses Beispiel interpretiert die Eingabe des Benutzers als CSS-Eigenschaftsname und füllt die Dropdown-Liste mit einem {{WebExtAPIRef("omnibox.SuggestResult")}} Objekt für jede CSS-Eigenschaft, die der Eingabe entspricht. Die `description`-Eigenschaft von `SuggestResult` ist der vollständige Name der Eigenschaft, und `content` ist die MDN-Seite für diese Eigenschaft.

Das Beispiel hört auch auf `omnibox.onInputEntered` und öffnet die MDN-Seite, die der Auswahl entspricht, entsprechend dem {{WebExtAPIRef("omnibox.OnInputEnteredDisposition")}} Argument.

```js
browser.omnibox.setDefaultSuggestion({
  description: "Type the name of a CSS property",
});

/*
Very short list of a few CSS properties.
*/
const props = [
  "animation",
  "background",
  "border",
  "box-shadow",
  "color",
  "display",
  "flex",
  "flex",
  "float",
  "font",
  "grid",
  "margin",
  "opacity",
  "overflow",
  "padding",
  "position",
  "transform",
  "transition",
];

const baseURL = "https://developer.mozilla.org/en-US/docs/Web/CSS/";

/*
Return an array of SuggestResult objects,
one for each CSS property that matches the user's input.
*/
function getMatchingProperties(input) {
  const result = [];
  for (const prop of props) {
    if (prop.startsWith(input)) {
      console.log(prop);
      const suggestion = {
        content: `${baseURL}${prop}`,
        description: prop,
      };
      result.push(suggestion);
    } else if (result.length !== 0) {
      return result;
    }
  }
  return result;
}

browser.omnibox.onInputChanged.addListener((input, suggest) => {
  suggest(getMatchingProperties(input));
});

browser.omnibox.onInputEntered.addListener((url, disposition) => {
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

{{WebExtExamples}}

## Browser-Kompatibilität

{{Compat}}

> [!NOTE]
> Diese API basiert auf der [`chrome.omnibox`](https://developer.chrome.com/docs/extensions/reference/api/omnibox) API von Chromium.
