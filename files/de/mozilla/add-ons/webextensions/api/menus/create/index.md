---
title: menus.create()
slug: Mozilla/Add-ons/WebExtensions/API/menus/create
l10n:
  sourceCommit: b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

{{AddonSidebar}}

Erstellt ein Menüelement unter Verwendung eines Optionsobjekts, das Eigenschaften für das Element definiert.

Im Gegensatz zu anderen asynchronen Funktionen gibt diese keinen `Promise` zurück, sondern verwendet einen optionalen Rückruf, um Erfolg oder Misserfolg zu kommunizieren. Der Rückgabewert ist die ID des neuen Elements.

Für die Kompatibilität mit anderen Browsern stellt Firefox diese Methode sowohl im `contextMenus`-Namespace als auch im `menus`-Namespace zur Verfügung. Es ist jedoch nicht möglich, Werkzeuge-Menüelemente (`contexts: ["tools_menu"]`) unter Verwendung des `contextMenus`-Namespaces zu erstellen.

> **Erstellen von Menüs in persistenter und nicht-persistenter Erweiterungen**
>
> Wie Sie Menüelemente erstellen, hängt davon ab, ob Ihre Erweiterung folgende verwendet:
>
> - nicht-persistente Hintergrundseiten (eine Ereignisseite), bei denen Menüs über Neustarts des Browsers und der Erweiterung hinweg erhalten bleiben. Sie rufen `menus.create` (mit einer menüspezifischen ID) innerhalb eines {{WebExtAPIRef("runtime.onInstalled")}}-Listeners auf. Dies vermeidet wiederholte Versuche, das Menüelement zu erstellen, wenn die Seiten neu starten, was bei einem Aufruf auf oberster Ebene geschehen würde.
> - persistente Hintergrundseiten:
>   - in Chrome bleiben Menüelemente von persistenten Hintergrundseiten erhalten. Erstellen Sie Ihre Menüs in einem {{WebExtAPIRef("runtime.onInstalled")}}-Listener.
>   - in Firefox bleiben Menüelemente von persistenten Hintergrundseiten niemals erhalten. Rufen Sie `menus.create` bedingungslos von oberster Ebene auf, um die Menüelemente zu registrieren.
>
> Siehe [Initialisieren der Erweiterung](/de/docs/Mozilla/Add-ons/WebExtensions/Background_scripts#initialize_the_extension) auf der Seite über Hintergrundskripte und [Ereignisgesteuerte Hintergrundskripte](https://extensionworkshop.com/documentation/develop/manifest-v3-migration-guide/#event-driven-background-scripts) im Erweiterungs-Workshop für weitere Informationen.

## Syntax

```js-nolint
browser.menus.create(
  createProperties, // object
  () => {/* … */}   // optional function
)
```

### Parameter

- `createProperties`

  - : `object`. Eigenschaften für das neue Menüelement.

    - `checked` {{optional_inline}}
      - : `boolean`. Der Anfangszustand eines Kontrollkästchens oder Radioelements: `true` für ausgewählt und `false` für nicht ausgewählt. In einer gegebenen Gruppe von Radioelementen kann jeweils nur ein Element ausgewählt werden.
    - `command` {{optional_inline}}

      - : `string`. Zeichenkette, die eine Aktion beschreibt, die ausgeführt werden soll, wenn der Benutzer auf das Element klickt. Die anerkannten Werte sind:

        - `"_execute_browser_action"`: simuliert einen Klick auf die Browser-Aktion der Erweiterung, wobei deren Popup geöffnet wird, falls vorhanden (nur Manifest V2)
        - `"_execute_action"`: simuliert einen Klick auf die Aktion der Erweiterung, wobei deren Popup geöffnet wird, falls vorhanden (nur Manifest V3)
        - `"_execute_page_action"`: simuliert einen Klick auf die Seitenaktion der Erweiterung, wobei deren Popup geöffnet wird
        - `"_execute_sidebar_action"`: öffnet die Seitenleiste der Erweiterung

        Detaillierte Informationen finden Sie in der Dokumentation zu speziellen Shortcuts im manifest.json-Schlüssel [`commands`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/commands#special_shortcuts).

        Wenn einer der anerkannten Werte angegeben wird, löst das Klicken auf das Element nicht das {{WebExtAPIRef("menus.onClicked")}}-Ereignis aus; stattdessen wird die Standardaktion ausgelöst, z.B. das Öffnen eines Pop-ups. Andernfalls löst das Klicken auf das Element {{WebExtAPIRef("menus.onClicked")}} aus, und das Ereignis kann verwendet werden, um ein Fallback-Verhalten zu implementieren.

    - `contexts` {{optional_inline}}

      - : `array` of `{{WebExtAPIRef('menus.ContextType')}}`. Array von Kontexten, in denen dieses Menüelement erscheinen wird. Wenn diese Option weggelassen wird:

        - wenn das übergeordnete Element Kontexte festgelegt hat, erbt dieses Element die Kontexte des übergeordneten Elements
        - andernfalls wird das Element mit einem Kontextarray von \["page"] versehen.

    - `documentUrlPatterns` {{optional_inline}}
      - : `array` von `string`. Ermöglicht, das Element so einzuschränken, dass es nur auf Dokumente angewendet wird, deren URL mit einem der angegebenen [Übereinstimmungsmuster](/de/docs/Mozilla/Add-ons/WebExtensions/Match_patterns) übereinstimmt. Dies gilt auch für Frames.
    - `enabled` {{optional_inline}}
      - : `boolean`. Ob dieses Menüelement aktiviert oder deaktiviert ist. Standardmäßig `true`.
    - `icons` {{optional_inline}}

      - : `object`. Eine oder mehrere benutzerdefinierte Symbole, die neben dem Element angezeigt werden. Benutzerdefinierte Symbole können nur für Elemente festgelegt werden, die in Untermenüs erscheinen. Diese Eigenschaft ist ein Objekt mit einer Eigenschaft für jedes bereitgestellte Symbol: Der Name der Eigenschaft sollte die Größe des Symbols in Pixeln enthalten, und der Pfad ist relativ zum Symbol vom Stammverzeichnis der Erweiterung. Der Browser versucht, ein 16x16-Pixel-Symbol für eine normale Anzeige oder ein 32x32-Pixel-Symbol für eine hochauflösende Anzeige auszuwählen. Um jegliche Skalierung zu vermeiden, können Sie Symbole wie folgt angeben:

        ```js
        browser.menus.create({
          icons: {
            16: "path/to/geo-16.png",
            32: "path/to/geo-32.png",
          },
        });
        ```

        Alternativ können Sie ein einzelnes SVG-Symbol angeben, das entsprechend skaliert wird:

        ```js
        browser.menus.create({
          icons: {
            16: "path/to/geo.svg",
          },
        });
        ```

        > [!NOTE]
        > Das übergeordnete Menüelement verwendet die im Manifest angegebenen [Symbole](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/icons) anstatt der mit diesem Schlüssel angegebenen.

    - `id` {{optional_inline}}
      - : `string`. Die eindeutige ID, die diesem Element zugewiesen werden soll. Ist für nicht-persistente [Hintergrund (Ereignis)seiten](/de/docs/Mozilla/Add-ons/WebExtensions/Background_scripts) in Manifest V2 und in Manifest V3 obligatorisch. Kann nicht dieselbe sein wie eine andere ID für diese Erweiterung.
    - `onclick` {{optional_inline}}
      - : `function`. Die Funktion, die aufgerufen wird, wenn auf das Menüelement geklickt wird. Ereignisseiten können dies nicht verwenden: Sie sollten stattdessen einen Listener für {{WebExtAPIRef('menus.onClicked')}} registrieren.
    - `parentId` {{optional_inline}}
      - : `integer` oder `string`. Die ID eines übergeordneten Menüelements; dies macht das Element zu einem Kind eines zuvor hinzugefügten Elements. Hinweis: Wenn Sie mehr als ein Menüelement erstellt haben, werden die Elemente in einem Untermenü platziert. Das übergeordnete Element des Untermenüs wird mit dem Namen der Erweiterung beschriftet.
    - `targetUrlPatterns` {{optional_inline}}
      - : `array` von `string`. Ähnlich wie `documentUrlPatterns`, jedoch können Sie basierend auf dem `href` von Ankertags und dem `src`-Attribut von `<img>/<audio>/<video>`-Tags filtern. Dieser Parameter unterstützt jedes URL-Schema, selbst solche, die normalerweise nicht in einem Übereinstimmungsmuster erlaubt sind.
    - `title` {{optional_inline}}

      - : `string`. Der im Element anzuzeigende Text. Obligatorisch, es sei denn, `type` ist "separator".

        Sie können "`%s`" in der Zeichenkette verwenden. Wenn Sie dies in einem Menüelement tun und beim Anzeigen des Menüs im Dokument einige Texte ausgewählt sind, wird der ausgewählte Text in den Titel interpoliert. Wenn der `title` beispielsweise "Translate '%s' to Pig Latin" lautet und der Benutzer das Wort "cool" auswählt, dann das Menü aktiviert, dann lautet der Titel des Menüelements: "Translate 'cool' to Pig Latin".

        Wenn der Titel ein kaufmännisches Und-Zeichen "&" enthält, wird das nächste Zeichen als Zugriffstaste für das Element verwendet, und das kaufmännische Und-Zeichen wird nicht angezeigt. Ausnahmen hiervon sind:

        - Wenn das nächste Zeichen ebenfalls ein kaufmännisches Und-Zeichen ist: Dann wird ein einzelnes kaufmännisches Und-Zeichen angezeigt und keine Zugriffstaste gesetzt. In Wirklichkeit wird "&&" verwendet, um ein einzelnes kaufmännisches Und-Zeichen anzuzeigen.
        - Wenn die nächsten Zeichen die Interpolationsanweisung "%s" sind: dann wird das kaufmännische Und-Zeichen nicht angezeigt und keine Zugriffstaste gesetzt.
        - Wenn das kaufmännische Und-Zeichen das letzte Zeichen im Titel ist: dann wird das kaufmännische Und-Zeichen nicht angezeigt und keine Zugriffstaste gesetzt.

        Nur das erste kaufmännische Und-Zeichen wird verwendet, um eine Zugriffstaste zu setzen: Nachfolgende kaufmännische Und-Zeichen werden nicht angezeigt, aber keine Tasten gesetzt. Also wird "\&A and \&B" als "A and B" angezeigt und "A" als Zugriffstaste gesetzt.

        In einigen lokalisierten Versionen von Firefox (Japanisch und Chinesisch) wird die Zugriffstaste in Klammern gesetzt und dem Menülabel hinzugefügt, _es sei denn_, der Menütitel endet selbst bereits mit der Zugriffstaste (`"toolkit(&K)"` zum Beispiel). Weitere Details finden Sie im [Firefox-Bug 1647373](https://bugzil.la/1647373).

    - `type` {{optional_inline}}
      - : `{{WebExtAPIRef('menus.ItemType')}}`. Der Typ des Menüelements: "normal", "checkbox", "radio", "separator". Standardmäßig "normal".
    - `viewTypes` {{optional_inline}}
      - : `{{WebExtAPIRef('extension.ViewType')}}`. Liste der Ansichtsarten, in denen das Menüelement angezeigt wird. Standardmäßig wird es in jeder Ansicht angezeigt, auch in solchen ohne `viewType`.
    - `visible` {{optional_inline}}
      - : `boolean`. Ob das Element im Menü angezeigt wird. Standardmäßig `true`.

- `callback` {{optional_inline}}
  - : `function`. Wird aufgerufen, wenn das Element erstellt wurde. Wenn es Probleme beim Erstellen des Elements gab, sind Details in {{WebExtAPIRef('runtime.lastError')}} verfügbar.

### Rückgabewert

`integer` oder `string`. Die `ID` des neu erstellten Elements.

## Beispiele

Dieses Beispiel erstellt ein Kontextmenüelement, das angezeigt wird, wenn der Benutzer Text auf der Seite ausgewählt hat. Es protokolliert einfach den ausgewählten Text in der Konsole:

```js
browser.menus.create({
  id: "log-selection",
  title: "Log '%s' to the console",
  contexts: ["selection"],
});

browser.menus.onClicked.addListener((info, tab) => {
  if (info.menuItemId === "log-selection") {
    console.log(info.selectionText);
  }
});
```

Dieses Beispiel fügt zwei Radioelemente hinzu, mit denen Sie wählen können, ob ein grüner oder blauer Rahmen auf die Seite angewendet werden soll. Beachten Sie, dass dieses Beispiel die [Berechtigung activeTab](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#activetab_permission) benötigt.

```js
function onCreated() {
  if (browser.runtime.lastError) {
    console.log("error creating item:", browser.runtime.lastError);
  } else {
    console.log("item created successfully");
  }
}

browser.menus.create(
  {
    id: "radio-green",
    type: "radio",
    title: "Make it green",
    contexts: ["all"],
    checked: false,
  },
  onCreated,
);

browser.menus.create(
  {
    id: "radio-blue",
    type: "radio",
    title: "Make it blue",
    contexts: ["all"],
    checked: false,
  },
  onCreated,
);

let makeItBlue = 'document.body.style.border = "5px solid blue"';
let makeItGreen = 'document.body.style.border = "5px solid green"';

browser.menus.onClicked.addListener((info, tab) => {
  if (info.menuItemId === "radio-blue") {
    browser.tabs.executeScript(tab.id, {
      code: makeItBlue,
    });
  } else if (info.menuItemId === "radio-green") {
    browser.tabs.executeScript(tab.id, {
      code: makeItGreen,
    });
  }
});
```

{{WebExtExamples}}

## Browser-Kompatibilität

{{Compat}}

> [!NOTE]
> Diese API basiert auf der [`chrome.contextMenus`](https://developer.chrome.com/docs/extensions/reference/api/contextMenus#method-create)-API von Chromium. Diese Dokumentation basiert auf [`context_menus.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/context_menus.json) im Chromium-Code.
