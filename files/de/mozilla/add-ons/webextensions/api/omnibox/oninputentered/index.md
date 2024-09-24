---
title: omnibox.onInputEntered
slug: Mozilla/Add-ons/WebExtensions/API/omnibox/onInputEntered
l10n:
  sourceCommit: b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

{{AddonSidebar}}

Wird ausgelöst, wenn der Benutzer einen der Vorschläge ausgewählt hat, den Ihre Erweiterung zur Dropdown-Liste der Adressleiste hinzugefügt hat.

Verwenden Sie dieses Ereignis, um die Auswahl des Benutzers zu bearbeiten, in der Regel durch das Öffnen der entsprechenden Seite. Der Ereignis-Listener erhält:

- die Auswahl des Benutzers
- ein {{WebExtAPIRef("omnibox.OnInputEnteredDisposition")}}: verwenden Sie dies, um zu bestimmen, ob die neue Seite im aktuellen Tab, in einem neuen Vordergrund-Tab oder in einem neuen Hintergrund-Tab geöffnet werden soll.

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
  - : Stoppt das Lauschen auf dieses Ereignis. Das Argument `listener` ist der Listener, der entfernt werden soll.
- `hasListener(listener)`
  - : Überprüft, ob `listener` für dieses Ereignis registriert ist. Gibt `true` zurück, wenn er aktiv ist, andernfalls `false`.

## addListener-Syntax

Die Listener-Funktion erhält zwei Parameter: einen String `text` und ein {{WebExtAPIRef("omnibox.OnInputEnteredDisposition")}}.

### Parameter

- `text`
  - : `String`. Dies ist der Wert der `content`-Eigenschaft des {{WebExtAPIRef("omnibox.SuggestResult")}}-Objekts, das der Benutzer ausgewählt hat.
- `disposition`
  - : {{WebExtAPIRef("omnibox.OnInputEnteredDisposition", "OnInputEnteredDisposition")}}. Eine {{WebExtAPIRef("omnibox.OnInputEnteredDisposition")}}-Enumeration, die anzeigt, ob die Erweiterung die Seite im aktuellen Tab, in einem neuen Vordergrund-Tab oder in einem neuen Hintergrund-Tab öffnen soll.

## Browserkompatibilität

{{Compat}}

## Beispiele

Dieses Beispiel interpretiert die Benutzereingabe als CSS-Property-Name und füllt die Dropdown-Liste mit einem {{WebExtAPIRef("omnibox.SuggestResult")}}-Objekt für jede CSS-Eigenschaft, die zur Eingabe passt. Die `description`-Eigenschaft von `SuggestResult` ist der vollständige Name der Eigenschaft, und `content` ist die MDN-Seite für diese Eigenschaft.

Das Beispiel hört auch auf `omnibox.onInputEntered` und öffnet die MDN-Seite, die der Auswahl entspricht, gemäß dem {{WebExtAPIRef("omnibox.OnInputEnteredDisposition")}}-Argument.

```js
browser.omnibox.setDefaultSuggestion({
  description: "Geben Sie den Namen einer CSS-Eigenschaft ein",
});

/*
Sehr kurze Liste einiger CSS-Eigenschaften.
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

const baseURL = "https://developer.mozilla.org/de/docs/Web/CSS/";

/*
Gibt ein Array von SuggestResult-Objekten zurück,
eines für jede CSS-Eigenschaft, die zur Benutzereingabe passt.
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
> Diese API basiert auf Chromiums [`chrome.omnibox`](https://developer.chrome.com/docs/extensions/reference/api/omnibox) API.
