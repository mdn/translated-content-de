---
title: omnibox.onInputChanged
slug: Mozilla/Add-ons/WebExtensions/API/omnibox/onInputChanged
l10n:
  sourceCommit: b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

{{AddonSidebar}}

Wird ausgelöst, wann immer der Benutzer seine Eingabe ändert, nachdem er begonnen hat, mit Ihrer Erweiterung zu interagieren, indem er deren Schlüsselwort in die Adressleiste eingegeben hat und dann die Leertaste drückt.

Dies ist das Ereignis, das Sie verwenden werden, um die Dropdown-Liste der Adressleiste mit Vorschlägen zu füllen. Der Ereignis-Listener erhält:

- die aktuelle Benutzereingabe (ohne das Schlüsselwort selbst oder das Leerzeichen danach)
- eine Funktion, die der Listener mit einem Array von {{WebExtAPIRef("omnibox.SuggestResult")}} Objekten aufrufen kann, eines für jeden Vorschlag. Es werden nur die ersten sechs Vorschläge angezeigt.

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
  - : Stoppt das Lauschen auf dieses Ereignis. Das Argument `listener` ist der zu entfernende Listener.
- `hasListener(listener)`
  - : Prüft, ob `listener` für dieses Ereignis registriert ist. Gibt `true` zurück, wenn es lauscht, andernfalls `false`.

## Syntax von addListener

Die Listener-Funktion erhält zwei Parameter: einen String `text` und die Funktion `suggest`.

### Parameter

- `text`
  - : `String`. Die aktuelle Benutzereingabe in der Adressleiste, ohne das Schlüsselwort der Erweiterung selbst oder das Leerzeichen nach dem Schlüsselwort. Verwenden Sie dies, um zu entscheiden, welche Vorschläge in der Dropdown-Liste angezeigt werden sollen.
- `suggest`
  - : `Function`. Eine Funktion, die der Ereignis-Listener aufrufen kann, um Vorschläge für die Dropdown-Liste der Adressleiste bereitzustellen. Die Funktion erwartet ein Array von {{WebExtAPIRef("omnibox.SuggestResult")}} Objekten, eines für jeden Vorschlag. Es werden nur die ersten sechs Vorschläge angezeigt.

## Browser-Kompatibilität

{{Compat}}

## Beispiele

Dieses Beispiel interpretiert die Eingabe des Benutzers als CSS-Eigenschaftsname und füllt die Dropdown-Liste mit einem {{WebExtAPIRef("omnibox.SuggestResult")}} Objekt für jede CSS-Eigenschaft, die der Eingabe entspricht. Die `description`-Eigenschaft von `SuggestResult` ist der vollständige Name der Eigenschaft, und `content` ist die MDN-Seite für diese Eigenschaft.

Das Beispiel lauscht auch auf {{WebExtAPIRef("omnibox.onInputEntered")}} und öffnet die entsprechende MDN-Seite entsprechend der {{WebExtAPIRef("omnibox.OnInputEnteredDisposition")}} Argument-Auswahl.

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
eines für jede CSS-Eigenschaft, die der Benutzereingabe entspricht.
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
