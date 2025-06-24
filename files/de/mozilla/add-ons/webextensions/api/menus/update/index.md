---
title: menus.update()
slug: Mozilla/Add-ons/WebExtensions/API/menus/update
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{AddonSidebar}}

Aktualisiert ein zuvor erstelltes Menüelement.

Zum Zwecke der Kompatibilität mit anderen Browsern stellt Firefox diese Methode sowohl über den Namespace `contextMenus` als auch über den Namespace `menus` zur Verfügung.

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
  - : `integer` oder `string`. Die ID des zu aktualisierenden Elements.
- `updateProperties`

  - : `object`. Die zu aktualisierenden Eigenschaften. Diese sind die gleichen wie das `createProperties` Objekt, das an {{WebExtAPIRef("menus.create()", "menus.create()")}} übergeben wird, mit der Ausnahme, dass `id` nicht gesetzt werden kann. Außerdem können `icons` nur bei Menübefehlen geändert werden, nicht bei der obersten Kontextmenüebene. Das Symbol auf oberster Ebene entspricht dem primären Symbol der Erweiterung, wie es in der Manifestdatei der Erweiterung deklariert ist.

    - `checked` {{optional_inline}}
      - : `boolean`. Der Anfangszustand eines Kontrollkästchens oder eines Optionsfeldes: `true` für ausgewählt und `false` für nicht ausgewählt. In einer gegebenen Gruppe von Optionsfeldern kann jeweils nur ein Element ausgewählt werden.
    - `command` {{optional_inline}}

      - : `string`. Ein String, der eine Aktion beschreibt, die ausgeführt werden soll, wenn der Benutzer auf das Element klickt. Die anerkannten Werte sind:

        - `"_execute_browser_action"`: simuliert einen Klick auf die Browseraktion der Erweiterung und öffnet deren Popup, falls vorhanden (nur Manifest V2)
        - `"_execute_action"`: simuliert einen Klick auf die Aktion der Erweiterung und öffnet deren Popup, falls vorhanden (nur Manifest V3)
        - `"_execute_page_action"`: simuliert einen Klick auf die Seitenaktion der Erweiterung und öffnet deren Popup
        - `"_execute_sidebar_action"`: öffnet die Seitenleiste der Erweiterung

        Weitere Details finden Sie in der Dokumentation zu speziellen Tastenkombinationen im Schlüssel [`commands`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/commands#special_shortcuts) in der manifest.json Datei.

        Wenn einer der anerkannten Werte angegeben wird, löst das Klicken auf das Element nicht das {{WebExtAPIRef("menus.onClicked")}} Ereignis aus; stattdessen wird die Standardaktion ausgelöst, wie das Öffnen eines Popups. Andernfalls löst das Klicken auf das Element {{WebExtAPIRef("menus.onClicked")}} aus und das Ereignis kann verwendet werden, um ein alternatives Verhalten zu implementieren.

    - `contexts` {{optional_inline}}

      - : `array` von {{WebExtAPIRef('menus.ContextType')}}. Array von Kontexten, in denen dieses Menüelement angezeigt wird. Wenn diese Option nicht angegeben wird:
        - wenn der Elternteil des Elements Kontexte gesetzt hat, erbt dieses Element die Kontexte des Elternteils
        - andernfalls erhält das Element ein Kontextarray von \["page"].

    - `documentUrlPatterns` {{optional_inline}}
      - : `array` von `string`. Ermöglicht die Einschränkung der Anwendung des Elements auf Dokumente, deren URL einem der angegebenen [Übereinstimmungsmuster](/de/docs/Mozilla/Add-ons/WebExtensions/Match_patterns) entspricht. Dies gilt auch für Frames.
    - `enabled` {{optional_inline}}
      - : `boolean`. Gibt an, ob dieses Menüelement aktiviert oder deaktiviert ist. Standardmäßig `true`.
    - `icons` {{optional_inline}}

      - : `object`. Eins oder mehrere benutzerdefinierte Symbole, die neben dem Element angezeigt werden. Benutzerdefinierte Symbole können nur für Elemente in Untermenüs festgelegt werden. Diese Eigenschaft ist ein Objekt mit einer Eigenschaft für jedes bereitgestellte Symbol: Der Name der Eigenschaft sollte die Größe des Symbols in Pixel enthalten, und der Pfad ist relativ zum Symbol vom Stammverzeichnis der Erweiterung. Der Browser versucht, ein 16x16 Pixel großes Symbol für normale Anzeigen oder ein 32x32 Pixel großes Symbol für hochauflösende Anzeigen auszuwählen. Um Skalierungen zu vermeiden, können Sie Symbole folgendermaßen angeben:

        ```js
        browser.menus.create({
          icons: {
            16: "path/to/geo-16.png",
            32: "path/to/geo-32.png",
          },
        });
        ```

        Alternativ können Sie ein einzelnes SVG-Symbol angeben, das dann entsprechend skaliert wird:

        ```js
        browser.menus.create({
          icons: {
            16: "path/to/geo.svg",
          },
        });
        ```

        > [!NOTE]
        > Das Menüelement auf oberster Ebene verwendet die im Manifest angegebenen [icons](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/icons), anstatt der mit diesem Schlüssel festgelegten.

    - `id` {{optional_inline}}
      - : `string`. Die eindeutige ID, die diesem Element zugewiesen werden soll. Obligatorisch für Ereignisseiten. Kann nicht dieselbe wie eine andere ID dieser Erweiterung sein.
    - `onclick` {{optional_inline}}
      - : `function`. Die Funktion, die aufgerufen wird, wenn das Menüelement angeklickt wird. Ereignisseiten können dies nicht verwenden: Stattdessen sollten sie einen Listener für {{WebExtAPIRef('menus.onClicked')}} registrieren.
    - `parentId` {{optional_inline}}
      - : `integer` oder `string`. Die ID eines übergeordneten Menüs; dies macht das Element zu einem untergeordneten Element eines zuvor hinzugefügten Elements. Hinweis: Wenn Sie mehr als ein Menüelement erstellt haben, werden die Elemente in ein Untermenü platziert. Der Elternteil des Untermenüs wird mit dem Namen der Erweiterung gekennzeichnet.
    - `targetUrlPatterns` {{optional_inline}}
      - : `array` von `string`. Ähnlich wie `documentUrlPatterns`, aber es ermöglicht das Filtern basierend auf dem `href` von Anker-Tags und dem `src` Attribut von img/audio/video Tags. Dieser Parameter unterstützt jedes URL-Schema, auch solche, die normalerweise nicht in einem Übereinstimmungsmuster erlaubt sind.
    - `title` {{optional_inline}}

      - : `string`. Der Text, der im Element angezeigt werden soll. Obligatorisch, es sei denn, `type` ist "separator".

        Sie können `%s` im String verwenden. Wenn Sie dies in einem Menüelement tun und bei der Anzeige des Menüs ein Text auf der Seite ausgewählt ist, wird der ausgewählte Text in den Titel interpoliert. Zum Beispiel, wenn `title` "Übersetze '%s' ins Pig Latin" ist und der Benutzer das Wort "cool" auswählt und dann das Menü aktiviert, dann wird der Titel des Menüelements sein: "Übersetze 'cool' ins Pig Latin".

        Wenn der Titel ein kaufmännisches Und "&" enthält, wird das nächste Zeichen als Zugriffstaste für das Element verwendet, und das kaufmännische Und wird nicht angezeigt. Ausnahmen hiervon sind:

        - Wenn das nächste Zeichen ebenfalls ein kaufmännisches Und ist: Dann wird ein einzelnes kaufmännisches Und angezeigt und keine Zugriffstaste gesetzt. Effektiv wird "&&" verwendet, um ein einzelnes kaufmännisches Und anzuzeigen.
        - Wenn die nächsten Zeichen die Interpolationsanweisung "%s" sind: Dann wird das kaufmännische Und nicht angezeigt und keine Zugriffstaste gesetzt.
        - Wenn das kaufmännische Und das letzte Zeichen im Titel ist: Dann wird das kaufmännische Und nicht angezeigt, und es wird keine Zugriffstaste gesetzt.

        Nur das erste kaufmännische Und wird verwendet, um eine Zugriffstaste zu setzen; nachfolgende kaufmännische Und-Zeichen werden nicht angezeigt, setzen jedoch keine Tasten. So wird "\&A und \&B" als "A und B" angezeigt und setzt "A" als Zugriffstaste.

    - `type` {{optional_inline}}
      - : {{WebExtAPIRef('menus.ItemType')}}. Der Typ des Menüelements: "normal", "checkbox", "radio", "separator". Standardmäßig "normal".
    - `viewTypes` {{optional_inline}}
      - : {{WebExtAPIRef('extension.ViewType')}}. Liste von Ansichtsarten, in denen das Menüelement angezeigt wird. Standardmäßig wird es in jeder Ansicht angezeigt, auch in solchen ohne `viewType`.
    - `visible` {{optional_inline}}
      - : `boolean`. Ob das Element im Menü angezeigt wird. Standardmäßig `true`.

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise), das ohne Argumente erfüllt wird, falls die Aktualisierung erfolgreich war, oder mit einer Fehlermeldung abgewiesen wird, falls die Aktualisierung fehlgeschlagen ist.

## Beispiele

Dieses Beispiel erstellt ein Menüelement und aktualisiert seinen Titel, wenn der Benutzer darauf klickt:

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
