---
title: omnibox.onInputEntered
slug: Mozilla/Add-ons/WebExtensions/API/omnibox/onInputEntered
l10n:
  sourceCommit: 5c2abb422d26ae422891e699cc083bdd93c5e410
---

{{AddonSidebar}}

Wird ausgelöst, wenn der Benutzer einen der Vorschläge ausgewählt hat, den Ihre Erweiterung zur Dropdown-Liste der Adressleiste hinzugefügt hat.

Verwenden Sie dieses Ereignis, um die Auswahl des Benutzers zu bearbeiten, in der Regel durch das Öffnen der entsprechenden Seite. Dem Ereignis-Listener wird übergeben:

- die Auswahl des Benutzers
- eine {{WebExtAPIRef("omnibox.OnInputEnteredDisposition")}}: Verwenden Sie dies, um zu bestimmen, ob die neue Seite im aktuellen Tab, in einem neuen Vordergrund-Tab oder in einem neuen Hintergrund-Tab geöffnet wird.

## Syntax

```js-nolint
browser.omnibox.onInputEntered.addListener(listener)
browser.omnibox.onInputEntered.removeListener(listener)
browser.omnibox.onInputEntered.hasListener(listener)
```

Ereignisse haben drei Funktionen:

- `addListener(listener)`
  - : Fügt einen Listener zu diesem Ereignis hinzu.
- `removeListener(listener)`
  - : Beendet das Zuhören auf dieses Ereignis. Das Argument `listener` ist der zu entfernende Listener.
- `hasListener(listener)`
  - : Überprüft, ob `listener` für dieses Ereignis registriert ist. Gibt `true` zurück, wenn es zuhört, ansonsten `false`.

## addListener-Syntax

Die Listener-Funktion erhält zwei Parameter: eine Zeichenkette `text` und eine {{WebExtAPIRef("omnibox.OnInputEnteredDisposition")}}.

### Parameter

- `text`
  - : `String`. Dies ist der Wert der `content`-Eigenschaft des {{WebExtAPIRef("omnibox.SuggestResult")}}-Objekts, das der Benutzer ausgewählt hat.
- `disposition`
  - : {{WebExtAPIRef("omnibox.OnInputEnteredDisposition", "OnInputEnteredDisposition")}}. Eine {{WebExtAPIRef("omnibox.OnInputEnteredDisposition")}}-Enumeration, die angibt, ob die Erweiterung die Seite im aktuellen Tab, in einem neuen Vordergrund-Tab oder in einem neuen Hintergrund-Tab öffnen soll.

## Beispiele

Dieses Beispiel interpretiert die Eingabe des Benutzers als CSS-Eigenschaftsname und füllt die Dropdown-Liste mit einem {{WebExtAPIRef("omnibox.SuggestResult")}}-Objekt für jede zur Eingabe passende CSS-Eigenschaft. Die `description`-Eigenschaft von `SuggestResult` ist der vollständige Name der Eigenschaft, und der `content` ist die MDN-Seite für diese Eigenschaft.

Das Beispiel hört auch auf `omnibox.onInputEntered` und öffnet die MDN-Seite entsprechend der Auswahl gemäß dem {{WebExtAPIRef("omnibox.OnInputEnteredDisposition")}}-Argument.

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
> Diese API basiert auf Chromes [`chrome.omnibox`](https://developer.chrome.com/docs/extensions/reference/api/omnibox)-API.
