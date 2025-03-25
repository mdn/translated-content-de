---
title: menus.update()
slug: Mozilla/Add-ons/WebExtensions/API/menus/update
l10n:
  sourceCommit: 5ebacde5e3e3500a851a2c49c7d02a7a5c6604ce
---

{{AddonSidebar}}

Aktualisiert ein zuvor erstelltes Menüelement.

Zur Kompatibilität mit anderen Browsern stellt Firefox diese Methode sowohl über den `contextMenus`-Namespace als auch den `menus`-Namespace bereit.

Dies ist eine asynchrone Funktion, die ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) zurückgibt.

## Syntax

```js-nolint
let updating = browser.menus.update(
  id,               // integer or string
  updateProperties // object
)
```

### Parameter

- `id`
  - : `integer` oder `string`. Die ID des Elements, das aktualisiert werden soll.
- `updateProperties`

  - : `object`. Die Eigenschaften, die aktualisiert werden sollen. Entspricht dem `createProperties`-Objekt, das an {{WebExtAPIRef("menus.create()", "menus.create()")}} übergeben wird, außer dass `id` nicht festgelegt werden kann. Zudem können `icons` nur bei Menübefehlen geändert werden, nicht im obersten Kontextmenü. Das oberste Symbol entspricht dem primären Symbol der Erweiterung, das in der Manifestdatei der Erweiterung deklariert ist.

    - `checked` {{optional_inline}}
      - : `boolean`. Der anfängliche Status eines Kontrollkästchens oder Radio-Elements: `true` für ausgewählt und `false` für nicht ausgewählt. In einer Gruppe von Radio-Elementen kann nur ein Element gleichzeitig ausgewählt sein.
    - `command` {{optional_inline}}

      - : `string`. Zeichenkette, die eine Aktion beschreibt, die ausgeführt werden soll, wenn der Benutzer auf das Element klickt. Anerkannte Werte sind:

        - `"_execute_browser_action"`: simuliert einen Klick auf die Browser-Aktion der Erweiterung und öffnet deren Popup, falls vorhanden (nur Manifest V2)
        - `"_execute_action"`: simuliert einen Klick auf die Aktion der Erweiterung und öffnet deren Popup, falls vorhanden (nur Manifest V3)
        - `"_execute_page_action"`: simuliert einen Klick auf die Seitenaktion der Erweiterung und öffnet deren Popup, falls vorhanden
        - `"_execute_sidebar_action"`: öffnet die Seitenleiste der Erweiterung

        Einzelheiten finden Sie in der Dokumentation zu speziellen Abkürzungen im Manifest.json-Schlüssel [`commands`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/commands#special_shortcuts).

        Wenn einer der anerkannten Werte angegeben ist, löst ein Klick auf das Element nicht das Ereignis {{WebExtAPIRef("menus.onClicked")}} aus; stattdessen wird die Standardaktion ausgelöst, wie das Öffnen eines Pop-ups. Andernfalls löst ein Klick auf das Element {{WebExtAPIRef("menus.onClicked")}} aus und das Ereignis kann verwendet werden, um Fallback-Verhalten zu implementieren.

    - `contexts` {{optional_inline}}

      - : `array` von {{WebExtAPIRef('menus.ContextType')}}. Array von Kontexten, in denen dieses Menüelement angezeigt wird. Wenn diese Option weggelassen wird:

        - Wenn das übergeordnete Element Kontexte festgelegt hat, dann erbt dieses Element die Kontexte seines übergeordneten Elements
        - Andernfalls erhält das Element ein Kontext-Array von \["page"].

    - `documentUrlPatterns` {{optional_inline}}
      - : `array` von `string`. Ermöglicht es Ihnen, das Element so einzuschränken, dass es nur auf Dokumente angewendet wird, deren URL mit einem der angegebenen [Übereinstimmungsmuster](/de/docs/Mozilla/Add-ons/WebExtensions/Match_patterns) übereinstimmt. Dies gilt auch für Frames.
    - `enabled` {{optional_inline}}
      - : `boolean`. Ob dieses Menüelement aktiviert oder deaktiviert ist. Standardwert ist `true`.
    - `icons` {{optional_inline}}

      - : `object`. Eines oder mehrere benutzerdefinierte Symbole, die neben dem Element angezeigt werden. Benutzerdefinierte Symbole können nur für Elemente festgelegt werden, die in Untermenüs erscheinen. Diese Eigenschaft ist ein Objekt mit einer Eigenschaft für jedes bereitgestellte Symbol: der Name der Eigenschaft sollte die Größe des Symbols in Pixeln enthalten, und der Pfad ist relativ zum Symbol aus dem Stammverzeichnis der Erweiterung. Der Browser versucht, ein 16x16 Pixel-Symbol für eine normale Anzeige oder ein 32x32 Pixel-Symbol für eine hochauflösende Anzeige auszuwählen. Um jegliches Skalieren zu vermeiden, können Sie Symbole wie folgt angeben:

        ```js
        browser.menus.create({
          icons: {
            16: "path/to/geo-16.png",
            32: "path/to/geo-32.png",
          },
        });
        ```

        Alternativ können Sie ein einziges SVG-Symbol angeben, das entsprechend skaliert wird:

        ```js
        browser.menus.create({
          icons: {
            16: "path/to/geo.svg",
          },
        });
        ```

        > [!NOTE]
        > Das oberste Menüelement verwendet die im Manifest angegebenen [Symbole](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/icons), anstatt die mit diesem Schlüssel angegebenen.

    - `id` {{optional_inline}}
      - : `string`. Die eindeutige ID, die diesem Element zugewiesen werden soll. Obligatorisch für Ereignisseiten. Kann nicht dieselbe sein wie eine andere ID für diese Erweiterung.
    - `onclick` {{optional_inline}}
      - : `function`. Die Funktion, die aufgerufen wird, wenn auf das Menüelement geklickt wird. Ereignisseiten können dies nicht verwenden: Stattdessen sollten sie einen Listener für {{WebExtAPIRef('menus.onClicked')}} registrieren.
    - `parentId` {{optional_inline}}
      - : `integer` oder `string`. Die ID eines übergeordneten Menüelements; dies macht das Element zu einem Kind eines zuvor hinzugefügten Elements. Hinweis: Wenn Sie mehr als ein Menüelement erstellt haben, werden die Elemente in einem Untermenü platziert. Das Untermenü wird mit dem Namen der Erweiterung beschriftet.
    - `targetUrlPatterns` {{optional_inline}}
      - : `array` von `string`. Ähnlich wie `documentUrlPatterns`, aber ermöglicht das Filtern basierend auf dem `href` von Anker-Tags und dem `src`-Attribut von img/audio/video-Tags. Dieser Parameter unterstützt jedes URL-Schema, auch solche, die normalerweise in einem Übereinstimmungsmuster nicht erlaubt sind.
    - `title` {{optional_inline}}

      - : `string`. Der Text, der im Element angezeigt werden soll. Verpflichtend, es sei denn, `type` ist "separator".

        Sie können `%s` in der Zeichenkette verwenden. Wenn Sie dies in einem Menüelement tun und im Dokument, wenn das Menü angezeigt wird, ein Text ausgewählt ist, dann wird der ausgewählte Text in den Titel interpoliert. Zum Beispiel, wenn `title` "Übersetze '%s' ins Pig Latin" ist und der Benutzer das Wort "cool" auswählt, dann das Menü aktiviert, dann lautet der Titel des Menüelements: "Übersetze 'cool' ins Pig Latin".

        Wenn der Titel ein Und-Zeichen "&" enthält, wird das nächste Zeichen als Zugriffsschlüssel für das Element verwendet, und das Und-Zeichen wird nicht angezeigt. Ausnahmen sind:

        - Wenn das nächste Zeichen ebenfalls ein Und-Zeichen ist: dann wird ein einzelnes Und-Zeichen angezeigt und es wird kein Zugriffsschlüssel gesetzt. Effektiv wird "&&" verwendet, um ein einzelnes Und-Zeichen anzuzeigen.
        - Wenn die nächsten Zeichen die Interpolationsanweisung "%s" sind: dann wird das Und-Zeichen nicht angezeigt und es wird kein Zugriffsschlüssel gesetzt.
        - Wenn das Und-Zeichen das letzte Zeichen im Titel ist: dann wird das Und-Zeichen nicht angezeigt und es wird kein Zugriffsschlüssel gesetzt.

        Nur das erste Und-Zeichen wird verwendet, um einen Zugriffsschlüssel zu setzen: nachfolgende Und-Zeichen werden nicht angezeigt, setzen jedoch keine Schlüssel. "\&A and \&B" wird also als "A and B" angezeigt und setzt "A" als den Zugriffsschlüssel.

    - `type` {{optional_inline}}
      - : {{WebExtAPIRef('menus.ItemType')}}. Der Typ des Menüelements: "normal", "checkbox", "radio", "separator". Der Standardwert ist "normal".
    - `viewTypes` {{optional_inline}}
      - : {{WebExtAPIRef('extension.ViewType')}}. Liste der Ansichtsarten, in denen das Menüelement angezeigt wird. Der Standardwert umfasst jede Ansicht, einschließlich solcher ohne `viewType`.
    - `visible` {{optional_inline}}
      - : `boolean`. Ob das Element im Menü angezeigt wird. Standardwert ist `true`.

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise), das ohne Argumente erfüllt wird, wenn die Aktualisierung erfolgreich war, oder mit einer Fehlermeldung abgelehnt wird, wenn die Aktualisierung fehlgeschlagen ist.

## Beispiele

Dieses Beispiel erstellt ein Menüelement und aktualisiert dessen Titel, wenn der Benutzer darauf klickt:

```js
function onUpdated() {
  console.log("item updated successfully");
}

function onError() {
  console.log("error updating item:", browser.runtime.lastError);
}

browser.menus.create({
  id: "do-not-click-me",
  title: "Do not click this button",
  contexts: ["all"],
});

browser.menus.onClicked.addListener((info, tab) => {
  if (info.menuItemId === "do-not-click-me") {
    let updating = browser.menus.update(info.menuItemId, {
      title: "Do not click this button again",
    });
    updating.then(onUpdated, onError);
  }
});
```

{{WebExtExamples}}

## Browser-Kompatibilität

{{Compat}}

> [!NOTE]
> Diese API basiert auf Chromiums [`chrome.contextMenus`](https://developer.chrome.com/docs/extensions/reference/api/contextMenus#method-update) API. Diese Dokumentation stammt aus [`context_menus.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/context_menus.json) im Chromium-Code.
