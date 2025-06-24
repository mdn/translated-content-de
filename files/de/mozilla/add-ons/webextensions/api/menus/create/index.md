---
title: menus.create()
slug: Mozilla/Add-ons/WebExtensions/API/menus/create
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{AddonSidebar}}

Erstellt ein Menüelement mit einem Optionsobjekt, das Eigenschaften für das Element definiert.

Im Gegensatz zu anderen asynchronen Funktionen gibt diese keine `Promise` zurück, sondern verwendet einen optionalen Rückruf, um Erfolg oder Misserfolg zu kommunizieren. Der Rückgabewert ist die ID des neuen Elements.

Für die Kompatibilität mit anderen Browsern stellt Firefox diese Methode im `contextMenus`-Namespace und im `menus`-Namespace zur Verfügung. Es ist jedoch nicht möglich, Menüelemente für das Tool-Menü (`contexts: ["tools_menu"]`) mit dem `contextMenus`-Namespace zu erstellen.

> **Erstellen von Menüs in persistenten und nicht-persistenten Erweiterungen**
>
> Wie Sie Menüelemente erstellen, hängt davon ab, ob Ihre Erweiterung verwendet:
>
> - Nicht-persistente Hintergrundseiten (eine Ereignisseite), wo Menüs über Browser- und Erweiterungsneustarts hinweg bestehen bleiben. Sie rufen `menus.create` (mit einer menüspezifischen ID) innerhalb eines {{WebExtAPIRef("runtime.onInstalled")}}-Listeners auf. Dies verhindert wiederholte Versuche, das Menüelement zu erstellen, wenn die Seiten neu starten, was bei einem Aufruf auf oberster Ebene geschehen würde.
> - Persistente Hintergrundseiten:
>   - in Chrome werden Menüelemente von persistenten Hintergrundseiten gespeichert. Erstellen Sie Ihre Menüs in einem {{WebExtAPIRef("runtime.onInstalled")}}-Listener.
>   - in Firefox werden Menüelemente von persistenten Hintergrundseiten nie gespeichert. Rufen Sie `menus.create` bedingungslos von der obersten Ebene auf, um die Menüpunkte zu registrieren.
>
> Weitere Informationen finden Sie unter [Erweiterung initialisieren](/de/docs/Mozilla/Add-ons/WebExtensions/Background_scripts#initialize_the_extension) auf der Seite zu Hintergrundskripten und [Ereignisgesteuerte Hintergrundskripte](https://extensionworkshop.com/documentation/develop/manifest-v3-migration-guide/#event-driven-background-scripts) im Extension Workshop.

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
      - : `boolean`. Der anfängliche Zustand eines Kontrollkästchens oder Radio-Elements: `true` für ausgewählt und `false` für nicht ausgewählt. Nur ein Radio-Element kann gleichzeitig in einer bestimmten Gruppe von Radio-Elementen ausgewählt sein.
    - `command` {{optional_inline}}

      - : `string`. String, der eine Aktion beschreibt, die ausgeführt werden soll, wenn der Benutzer auf das Element klickt. Die anerkannten Werte sind:

        - `"_execute_browser_action"`: Simuliert einen Klick auf die Browseraktion der Erweiterung und öffnet deren Popup, wenn es eines gibt (nur Manifest V2)
        - `"_execute_action"`: Simuliert einen Klick auf die Aktion der Erweiterung und öffnet deren Popup, wenn es eines gibt (nur Manifest V3)
        - `"_execute_page_action"`: Simuliert einen Klick auf die Seitenaktion der Erweiterung und öffnet deren Popup, wenn es eines gibt
        - `"_execute_sidebar_action"`: Öffnet die Seitenleiste der Erweiterung

        Siehe die Dokumentation zu speziellen Shortcuts im `manifest.json` Schlüssel [`commands`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/commands#special_shortcuts) für Details.

        Wenn einer der anerkannten Werte angegeben ist, löst ein Klick auf das Element nicht das {{WebExtAPIRef("menus.onClicked")}}-Ereignis aus; stattdessen wird die Standardaktion ausgelöst, wie das Öffnen eines Popups. Andernfalls löst ein Klick auf das Element {{WebExtAPIRef("menus.onClicked")}} aus und das Ereignis kann verwendet werden, um ein alternatives Verhalten zu implementieren.

    - `contexts` {{optional_inline}}

      - : `array` von {{WebExtAPIRef('menus.ContextType')}}. Array von Kontexten, in denen dieses Menüelement angezeigt wird. Wenn diese Option nicht angegeben ist:
        - Wenn das übergeordnete Element Kontexte gesetzt hat, übernimmt dieses Element die Kontexte des übergeordneten Elements
        - Andernfalls erhält das Element ein Kontextarray von \["page"].

    - `documentUrlPatterns` {{optional_inline}}
      - : `array` von `string`. Ermöglicht es Ihnen, dass das Element nur für Dokumente angewendet wird, deren URL einem der angegebenen [Match-Muster](/de/docs/Mozilla/Add-ons/WebExtensions/Match_patterns) entspricht. Dies gilt auch für Rahmen.
    - `enabled` {{optional_inline}}
      - : `boolean`. Ob dieses Menüelement aktiviert oder deaktiviert ist. Der Standardwert ist `true`.
    - `icons` {{optional_inline}}

      - : `object`. Eines oder mehrere benutzerdefinierte Symbole, die neben dem Element angezeigt werden sollen. Benutzerdefinierte Symbole können nur für Elemente festgelegt werden, die in Untermenüs angezeigt werden. Diese Eigenschaft ist ein Objekt mit einer Eigenschaft für jedes bereitgestellte Symbol: Der Name der Eigenschaft sollte die Größe des Symbols in Pixeln enthalten, und der Pfad ist relativ zum Symbol aus dem Stammverzeichnis der Erweiterung. Der Browser versucht, ein 16x16 Pixel-Symbol für ein normales Display oder ein 32x32 Pixel-Symbol für ein hochauflösendes Display zu wählen. Um ein Skalieren zu vermeiden, können Sie Symbole so angeben:

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
        > Das oberste Menüelement verwendet die [icons](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/icons), die im Manifest angegeben sind, anstatt der mit diesem Schlüssel angegebenen.

    - `id` {{optional_inline}}
      - : `string`. Die eindeutige ID, die diesem Element zugeordnet wird. Dies ist obligatorisch für nicht-persistente [Hintergrund- (Ereignis-) Seiten](/de/docs/Mozilla/Add-ons/WebExtensions/Background_scripts) in Manifest V2 und in Manifest V3. Darf nicht mit einer anderen ID dieser Erweiterung identisch sein.
    - `onclick` {{optional_inline}}
      - : `function`. Die Funktion, die aufgerufen wird, wenn auf das Menüelement geklickt wird. Ereignisseiten können dies nicht verwenden; stattdessen sollten sie einen Listener für {{WebExtAPIRef('menus.onClicked')}} registrieren.
    - `parentId` {{optional_inline}}
      - : `integer` oder `string`. Die ID eines übergeordneten Menüelements; dies macht das Element zu einem Kind eines zuvor hinzugefügten Elements. Hinweis: Wenn Sie mehr als ein Menüelement erstellt haben, werden die Elemente in einem Untermenü platziert. Der Elternteil des Untermenüs wird mit dem Namen der Erweiterung beschriftet.
    - `targetUrlPatterns` {{optional_inline}}
      - : `array` von `string`. Ähnlich wie `documentUrlPatterns`, ermöglicht es Ihnen jedoch, basierend auf dem `href` von Anker-Tags und dem `src`-Attribut von img/audio/video-Tags zu filtern. Dieser Parameter unterstützt jedes URL-Schema, selbst solche, die normalerweise nicht in einem Match-Muster erlaubt sind.
    - `title` {{optional_inline}}

      - : `string`. Der Text, der im Element angezeigt werden soll. Obligatorisch, es sei denn, `type` ist "separator".

        Sie können `%s` im String verwenden. Wenn Sie dies in einem Menüelement tun und ein Text auf der Seite ausgewählt ist, wenn das Menü angezeigt wird, dann wird der ausgewählte Text in den Titel interpoliert. Zum Beispiel, wenn `title` "Übersetze '%s' ins Pig Latin" lautet und der Benutzer das Wort "cool" auswählt und dann das Menü aktiviert, dann lautet der Titel des Menüelements: "Übersetze 'cool' ins Pig Latin".

        Wenn der Titel ein kaufmännisches Und-Zeichen "&" enthält, wird der nächste Buchstabe als Zugriffstaste für das Element verwendet, und das kaufmännische Und-Zeichen wird nicht angezeigt. Ausnahmen hiervon sind:

        - Wenn das nächste Zeichen ebenfalls ein kaufmännisches Und-Zeichen ist: dann wird ein einzelnes kaufmännisches Und-Zeichen angezeigt und keine Zugriffstaste gesetzt. Effektiv wird "&&" verwendet, um ein einzelnes kaufmännisches Und-Zeichen anzuzeigen.
        - Wenn das nächste Zeichen die Interpolationsdirektive "%s" ist: dann wird das kaufmännische Und-Zeichen nicht angezeigt und keine Zugriffstaste gesetzt.
        - Wenn das kaufmännische Und-Zeichen das letzte Zeichen im Titel ist: dann wird das kaufmännische Und-Zeichen nicht angezeigt und keine Zugriffstaste gesetzt.

        Nur das erste kaufmännische Und-Zeichen wird verwendet, um eine Zugriffstaste festzulegen: Nachfolgende kaufmännische Und-Zeichen werden nicht angezeigt, setzen jedoch keine Tasten. So wird "\&A and \&B" als "A and B" angezeigt und setzt "A" als Zugriffstaste.

        In einigen lokalisierten Versionen von Firefox (Japanisch und Chinesisch) wird die Zugriffstaste in Klammern gesetzt und an das Menülable angehängt, _es sei denn_, der Menütitel endet bereits mit der Zugriffstaste (`"toolkit(&K)"` zum Beispiel). Für mehr Details siehe [Firefox Bug 1647373](https://bugzil.la/1647373).

    - `type` {{optional_inline}}
      - : {{WebExtAPIRef('menus.ItemType')}}. Der Typ des Menüelements: "normal", "checkbox", "radio", "separator". Der Standardwert ist "normal".
    - `viewTypes` {{optional_inline}}
      - : {{WebExtAPIRef('extension.ViewType')}}. Liste der Ansichtsarten, in denen das Menüelement angezeigt wird. Standardmäßig werden alle Ansichten angezeigt, einschließlich derer ohne `viewType`.
    - `visible` {{optional_inline}}
      - : `boolean`. Ob das Element im Menü angezeigt wird. Der Standardwert ist `true`.

- `callback` {{optional_inline}}
  - : `function`. Wird aufgerufen, wenn das Element erstellt wurde. Wenn es Probleme beim Erstellen des Elements gab, sind Details in {{WebExtAPIRef('runtime.lastError')}} verfügbar.

### Rückgabewert

`integer` oder `string`. Die `ID` des neu erstellten Elements.

## Beispiele

Dieses Beispiel erstellt ein Kontextmenüelement, das angezeigt wird, wenn der Benutzer auf der Seite Text ausgewählt hat. Es protokolliert einfach den ausgewählten Text in der Konsole:

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

Dieses Beispiel fügt zwei Radio-Elemente hinzu, mit denen Sie auswählen können, ob ein grüner oder blauer Rahmen auf die Seite angewendet werden soll. Beachten Sie, dass dieses Beispiel die [activeTab-Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#activetab_permission) benötigt.

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
> Diese API basiert auf Chromiums [`chrome.contextMenus`](https://developer.chrome.com/docs/extensions/reference/api/contextMenus#method-create) API. Diese Dokumentation ist abgeleitet von [`context_menus.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/context_menus.json) im Chromium-Code.

<!--
// Copyright 2015 The Chromium Authors. All rights reserved.
//
// Redistribution and use in source and binary forms, with or without
// modification, are permitted provided that the following conditions are
// met:
//
//    * Redistributions of source code must retain the above copyright
// notice, this list of conditions and the following disclaimer.
//    * Redistributions in binary form must reproduce the above
// copyright notice, this list of conditions and the following disclaimer
// in the documentation and/or other materials provided with the
// distribution.
//    * Neither the name of Google Inc. nor the names of its
// contributors may be used to endorse or promote products derived from
// this software without specific prior written permission.
//
// THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
// "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
// LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
// A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT
// OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
// SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
// LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
// DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY
// THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
// (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
// OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
-->
