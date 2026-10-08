---
title: omnibox.onInputEntered
slug: Mozilla/Add-ons/WebExtensions/API/omnibox/onInputEntered
l10n:
  sourceCommit: 674fbb492c76a45adf433810f0f5737a0405bd9c
---

Wird ausgelöst, wenn der Benutzer einen der Vorschläge ausgewählt hat, die Ihre Erweiterung der Dropdown-Liste der Adressleiste hinzugefügt hat.

Verwenden Sie dieses Ereignis, um die Auswahl des Benutzers zu verarbeiten, in der Regel indem Sie die entsprechende Seite öffnen. An den Event-Listener werden folgende Werte übergeben:

- die Auswahl des Benutzers
- ein {{WebExtAPIRef("omnibox.OnInputEnteredDisposition")}}: Bestimmen Sie damit, ob die neue Seite im aktuellen Tab, in einem neuen Tab im Vordergrund oder in einem neuen Tab im Hintergrund geöffnet werden soll.

Wenn die Erweiterung über die [Berechtigung `activeTab`](/de/docs/Mozilla/Add-ons/WebExtensions/activeTab_permission) verfügt, ist die Auswahl eines Vorschlags eine Benutzeraktion, die ihr vorübergehend Zugriff auf den aktiven Tab gewährt (in Firefox ab Version 142).

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
  - : Entfernt den Listener für dieses Ereignis. Das Argument `listener` bezeichnet den zu entfernenden Listener.
- `hasListener(listener)`
  - : Prüft, ob `listener` für dieses Ereignis registriert ist. Gibt `true` zurück, wenn der Listener registriert ist, andernfalls `false`.

## Syntax von addListener

Der Listener-Funktion werden zwei Parameter übergeben: ein String `text` und ein {{WebExtAPIRef("omnibox.OnInputEnteredDisposition")}}.

### Parameter

- `text`
  - : `String`. Der Wert der Eigenschaft `content` des vom Benutzer ausgewählten {{WebExtAPIRef("omnibox.SuggestResult")}}-Objekts.
- `disposition`
  - : {{WebExtAPIRef("omnibox.OnInputEnteredDisposition", "OnInputEnteredDisposition")}}. Eine {{WebExtAPIRef("omnibox.OnInputEnteredDisposition")}}-Enumeration, die angibt, ob die Erweiterung die Seite im aktuellen Tab, in einem neuen Tab im Vordergrund oder in einem neuen Tab im Hintergrund öffnen soll.

## Beispiele

Dieses Beispiel interpretiert die Eingabe des Benutzers als Namen einer CSS-Eigenschaft und füllt die Dropdown-Liste mit einem {{WebExtAPIRef("omnibox.SuggestResult")}}-Objekt für jede CSS-Eigenschaft, die der Eingabe entspricht. Die Eigenschaft `description` von `SuggestResult` enthält den vollständigen Namen der Eigenschaft, und `content` enthält die MDN-Seite für diese Eigenschaft.

Das Beispiel überwacht außerdem `omnibox.onInputEntered` und öffnet die MDN-Seite, die der Auswahl entspricht, gemäß dem Argument {{WebExtAPIRef("omnibox.OnInputEnteredDisposition")}}.

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
> Diese API basiert auf der [`chrome.omnibox`](https://developer.chrome.com/docs/extensions/reference/api/omnibox)-API von Chromium.
