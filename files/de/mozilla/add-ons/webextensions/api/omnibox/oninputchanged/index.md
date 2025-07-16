---
title: omnibox.onInputChanged
slug: Mozilla/Add-ons/WebExtensions/API/omnibox/onInputChanged
l10n:
  sourceCommit: 5c2abb422d26ae422891e699cc083bdd93c5e410
---

{{AddonSidebar}}

Wird immer dann ausgelöst, wenn der Benutzer seine Eingabe ändert, nachdem er begonnen hat, mit Ihrer Erweiterung zu interagieren, indem er deren Schlüsselwort in die Adressleiste eingegeben und dann die Leertaste gedrückt hat.

Dies ist das Ereignis, das Sie verwenden, um die Dropdown-Liste der Adressleiste mit Vorschlägen zu füllen. Der Event-Listener wird mit folgenden Argumenten aufgerufen:

- die aktuelle Benutzereingabe (ohne das Schlüsselwort selbst oder das Leerzeichen danach)
- eine Funktion, die der Listener mit einem Array von {{WebExtAPIRef("omnibox.SuggestResult")}}-Objekten aufrufen kann, eines für jeden Vorschlag. Es werden nur die ersten sechs Vorschläge angezeigt.

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
  - : Beendet das Lauschen auf dieses Ereignis. Das Argument `listener` ist der zu entfernende Listener.
- `hasListener(listener)`
  - : Überprüft, ob `listener` für dieses Ereignis registriert ist. Gibt `true` zurück, wenn es zuhört, `false` andernfalls.

## addListener-Syntax

Die Listener-Funktion erhält zwei Parameter: einen String `text` und die Funktion `suggest`.

### Parameter

- `text`
  - : `String`. Die aktuelle Benutzereingabe in der Adressleiste, ohne das Schlüsselwort der Erweiterung selbst oder das Leerzeichen nach dem Schlüsselwort. Verwenden Sie dies, um zu entscheiden, welche Vorschläge in der Dropdown-Liste angezeigt werden sollen.
- `suggest`
  - : `Function`. Eine Funktion, die der Ereignis-Listener aufrufen kann, um Vorschläge für die Dropdown-Liste der Adressleiste bereitzustellen. Die Funktion erwartet ein Array von {{WebExtAPIRef("omnibox.SuggestResult")}}-Objekten, eines für jeden Vorschlag. Es werden nur die ersten sechs Vorschläge angezeigt.

## Beispiele

Dieses Beispiel interpretiert die Benutzereingabe als CSS-Eigenschaftsnamen und füllt die Dropdown-Liste mit einem {{WebExtAPIRef("omnibox.SuggestResult")}}-Objekt für jede CSS-Eigenschaft, die der Eingabe entspricht. Die Eigenschaft `description` von `SuggestResult` ist der vollständige Name der Eigenschaft, und `content` ist die MDN-Seite für diese Eigenschaft.

Das Beispiel hört auch auf {{WebExtAPIRef("omnibox.onInputEntered")}} und öffnet die MDN-Seite entsprechend der Auswahl, abhängig vom {{WebExtAPIRef("omnibox.OnInputEnteredDisposition")}}-Argument.

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
