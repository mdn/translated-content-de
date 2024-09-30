---
title: omnibox.onInputChanged
slug: Mozilla/Add-ons/WebExtensions/API/omnibox/onInputChanged
l10n:
  sourceCommit: b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

{{AddonSidebar}}

Wird jedes Mal ausgelöst, wenn der Benutzer seine Eingabe ändert, nachdem er begonnen hat, mit Ihrer Erweiterung zu interagieren, indem er das Schlüsselwort in die Adressleiste eingegeben und dann die Leertaste gedrückt hat.

Dies ist das Ereignis, das Sie verwenden, um die Dropdown-Liste der Adressleiste mit Vorschlägen zu füllen. Der Event-Listener erhält:

- die aktuelle Benutzereingabe (ohne das Schlüsselwort selbst oder das Leerzeichen danach)
- eine Funktion, die der Listener mit einem Array von {{WebExtAPIRef("omnibox.SuggestResult")}}-Objekten aufrufen kann, eines für jeden Vorschlag. Nur die ersten sechs Vorschläge werden angezeigt.

## Syntax

```js-nolint
browser.omnibox.onInputChanged.addListener(listener)
browser.omnibox.onInputChanged.removeListener(listener)
browser.omnibox.onInputChanged.hasListener(listener)
```

Ereignisse haben drei Funktionen:

- `addListener(listener)`
  - : Fügt diesem Ereignis einen Listener hinzu.
- `removeListener(listener)`
  - : Beendet das Abhören dieses Ereignisses. Der `listener`-Parameter ist der zu entfernende Listener.
- `hasListener(listener)`
  - : Überprüft, ob `listener` für dieses Ereignis registriert ist. Gibt `true` zurück, wenn es sich registriert hat, andernfalls `false`.

## addListener Syntax

Die Listener-Funktion erhält zwei Parameter: einen String `text` und die Funktion `suggest`.

### Parameter

- `text`
  - : `String`. Die aktuelle Benutzereingabe in der Adressleiste, ohne das Schlüsselwort der Erweiterung selbst oder das Leerzeichen nach dem Schlüsselwort. Verwenden Sie dies, um festzulegen, welche Vorschläge in der Dropdown-Liste angezeigt werden.
- `suggest`
  - : `Function`. Eine Funktion, die der Event-Listener aufrufen kann, um Vorschläge für die Dropdown-Liste der Adressleiste bereitzustellen. Die Funktion erwartet ein Array von {{WebExtAPIRef("omnibox.SuggestResult")}}-Objekten, eines für jeden Vorschlag. Nur die ersten sechs Vorschläge werden angezeigt.

## Browser-Kompatibilität

{{Compat}}

## Beispiele

In diesem Beispiel wird die Benutzereingabe als CSS-Eigenschaftsname interpretiert und die Dropdown-Liste mit einem {{WebExtAPIRef("omnibox.SuggestResult")}}-Objekt für jede zur Eingabe passende CSS-Eigenschaft gefüllt. Die `description`-Eigenschaft von `SuggestResult` ist der vollständige Name der Eigenschaft, und der `content` ist die MDN-Seite für diese Eigenschaft.

Das Beispiel hört auch auf {{WebExtAPIRef("omnibox.onInputEntered")}}, und öffnet die entsprechende MDN-Seite gemäß dem {{WebExtAPIRef("omnibox.OnInputEnteredDisposition")}}-Argument.

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
