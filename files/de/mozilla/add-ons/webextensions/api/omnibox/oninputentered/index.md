---
title: omnibox.onInputEntered
slug: Mozilla/Add-ons/WebExtensions/API/omnibox/onInputEntered
l10n:
  sourceCommit: b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

{{AddonSidebar}}

Ausgelöst, wenn der Benutzer einen der Vorschläge ausgewählt hat, die Ihre Erweiterung zur Drop-Down-Liste der Adressleiste hinzugefügt hat.

Verwenden Sie dieses Ereignis, um die Auswahl des Benutzers zu verarbeiten, in der Regel durch das Öffnen der entsprechenden Seite. Der Event-Listener erhält:

- die Auswahl des Benutzers
- einen {{WebExtAPIRef("omnibox.OnInputEnteredDisposition")}}: Verwenden Sie dies, um zu bestimmen, ob die neue Seite im aktuellen Tab, in einem neuen Vordergrundtab oder in einem neuen Hintergrundtab geöffnet werden soll.

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
  - : Stoppt das Lauschen auf dieses Ereignis. Das `listener` Argument ist der zu entfernende Listener.
- `hasListener(listener)`
  - : Prüft, ob `listener` für dieses Ereignis registriert ist. Gibt `true` zurück, wenn es zuhört, andernfalls `false`.

## addListener Syntax

Der Listener-Funktion werden zwei Parameter übergeben: ein String `text` und ein {{WebExtAPIRef("omnibox.OnInputEnteredDisposition")}}.

### Parameter

- `text`
  - : `String`. Dies ist der Wert der `content` Eigenschaft des {{WebExtAPIRef("omnibox.SuggestResult")}} Objekts, das der Benutzer ausgewählt hat.
- `disposition`
  - : {{WebExtAPIRef("omnibox.OnInputEnteredDisposition", "OnInputEnteredDisposition")}}. Eine {{WebExtAPIRef("omnibox.OnInputEnteredDisposition")}} Enumeration, die angibt, ob die Erweiterung die Seite im aktuellen Tab, in einem neuen Vordergrundtab oder in einem neuen Hintergrundtab öffnen soll.

## Browser-Kompatibilität

{{Compat}}

## Beispiele

Dieses Beispiel interpretiert die Benutzereingabe als einen CSS-Eigenschaftsnamen und füllt die Drop-Down-Liste mit einem {{WebExtAPIRef("omnibox.SuggestResult")}} Objekt für jede CSS-Eigenschaft, die zur Eingabe passt. Die `description` Eigenschaft von `SuggestResult` ist der vollständige Name der Eigenschaft und der `content` ist die MDN-Seite für diese Eigenschaft.

Das Beispiel hört auch auf `omnibox.onInputEntered` und öffnet die der Auswahl entsprechende MDN-Seite gemäß dem {{WebExtAPIRef("omnibox.OnInputEnteredDisposition")}} Argument.

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

> [!NOTE]
> Diese API basiert auf der [`chrome.omnibox`](https://developer.chrome.com/docs/extensions/reference/api/omnibox) API von Chromium.
