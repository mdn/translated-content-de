---
title: menus.create()
slug: Mozilla/Add-ons/WebExtensions/API/menus/create
l10n:
  sourceCommit: b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

{{AddonSidebar}}

Erstellt ein Menüpunktelement mithilfe eines Optionsobjekts, das Eigenschaften für das Element definiert.

Im Gegensatz zu anderen asynchronen Funktionen gibt diese keine Promise zurück, sondern verwendet einen optionalen Callback, um Erfolg oder Misserfolg zu kommunizieren. Dies liegt daran, dass ihr Rückgabewert die ID des neuen Elements ist.

Für die Kompatibilität mit anderen Browsern stellt Firefox diese Methode sowohl im `contextMenus`-Namespace als auch im `menus`-Namespace zur Verfügung. Es ist jedoch nicht möglich, Werkzeuge-Menüelemente (`contexts: ["tools_menu"]`) mithilfe des `contextMenus`-Namespace zu erstellen.

> **Erstellen von Menüs in persistenten und nicht persistenten Erweiterungen**
>
> Wie Sie Menüpunkte erstellen, hängt davon ab, ob Ihre Erweiterung verwendet:
>
> - nicht-persistente Hintergrundseiten (eine Ereignisseite), bei denen Menüs über Browser- und Erweiterungsneustarts hinweg bestehen bleiben. Sie rufen `menus.create` (mit einer menüspezifischen ID) innerhalb eines {{WebExtAPIRef("runtime.onInstalled")}}-Listeners auf. Dies vermeidet wiederholte Versuche, das Menüelement zu erstellen, wenn die Seiten neu gestartet werden, was bei einem Aufruf auf oberster Ebene auftreten würde.
> - persistente Hintergrundseiten:
>   - in Chrome werden Menüpunkte von persistenten Hintergrundseiten beibehalten. Erstellen Sie Ihre Menüs in einem {{WebExtAPIRef("runtime.onInstalled")}}-Listener.
>   - in Firefox werden Menüpunkte von persistenten Hintergrundseiten nie beibehalten. Rufen Sie `menus.create` bedingungslos auf oberster Ebene auf, um die Menüpunkte zu registrieren.
>
> Weitere Informationen finden Sie unter [Erweiterung initialisieren](/de/docs/Mozilla/Add-ons/WebExtensions/Background_scripts#initialize_the_extension) auf der Seite Hintergrundskripte und [Ereignisgesteuerte Hintergrundskripte](https://extensionworkshop.com/documentation/develop/manifest-v3-migration-guide/#event-driven-background-scripts) im Extension Workshop.

## Syntax

```js-nolint
browser.menus.create(
  createProperties, // object
  () => {/* … */}   // optional function
)
```

### Parameter

- `createProperties`

  - : `object`. Eigenschaften für den neuen Menüpunkt.

    - `checked` {{optional_inline}}
      - : `boolean`. Der Anfangszustand eines Kontrollkästchens oder Radio-Items: `true` für ausgewählt und `false` für nicht ausgewählt. In einer gegebenen Gruppe von Radio-Items kann immer nur ein Radio-Item ausgewählt werden.
    - `command` {{optional_inline}}

      - : `string`. Zeichenkette, die eine Aktion beschreibt, die beim Klicken auf das Element ausgeführt werden soll. Die anerkannten Werte sind:

        - `"_execute_browser_action"`: Einen Klick auf die Browseraktion der Erweiterung simulieren, deren Popup öffnen, falls vorhanden (nur Manifest V2)
        - `"_execute_action"`: Einen Klick auf die Aktion der Erweiterung simulieren, deren Popup öffnen, falls vorhanden (nur Manifest V3)
        - `"_execute_page_action"`: Einen Klick auf die Seitenaktion der Erweiterung simulieren, deren Popup öffnen, falls vorhanden
        - `"_execute_sidebar_action"`: Die Seitenleiste der Erweiterung öffnen

        Siehe die Dokumentation zu speziellen Abkürzungen im Manifest.json-Schlüssel [`commands`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/commands#special_shortcuts) für Details.

        Wenn einer der anerkannten Werte angegeben ist, löst ein Klick auf das Element nicht das Ereignis {{WebExtAPIRef("menus.onClicked")}} aus; stattdessen wird die Standardaktion ausgelöst, z. B. das Öffnen eines Pop-ups. Andernfalls löst ein Klick auf das Element {{WebExtAPIRef("menus.onClicked")}} aus, und das Ereignis kann verwendet werden, um ein alternatives Verhalten zu implementieren.

    - `contexts` {{optional_inline}}

      - : `array` von `{{WebExtAPIRef('menus.ContextType')}}`. Array von Kontexten, in denen dieser Menüpunkt angezeigt wird. Wenn diese Option ausgelassen wird:

        - wenn das übergeordnete Element Kontexte gesetzt hat, erbt dieses Element die Kontexte des übergeordneten Elements
        - andernfalls wird dem Element ein Kontextarray von \["page"] zugewiesen.

    - `documentUrlPatterns` {{optional_inline}}
      - : `array` von `string`. Ermöglicht es, das Element auf Dokumente zu beschränken, deren URL mit einem der gegebenen [Match-Muster](/de/docs/Mozilla/Add-ons/WebExtensions/Match_patterns) übereinstimmt. Dies gilt auch für Frames.
    - `enabled` {{optional_inline}}
      - : `boolean`. Ob dieser Menüpunkt aktiviert oder deaktiviert ist. Standardmäßig `true`.
    - `icons` {{optional_inline}}

      - : `object`. Eines oder mehrere benutzerdefinierte Symbole, die neben dem Element angezeigt werden. Benutzerdefinierte Symbole können nur für Elemente festgelegt werden, die in Untermenüs erscheinen. Diese Eigenschaft ist ein Objekt mit einer Eigenschaft für jedes gelieferte Symbol: Der Name der Eigenschaft sollte die Größe des Symbols in Pixeln enthalten, und der Pfad ist relativ zum Symbol aus dem Stammverzeichnis der Erweiterung. Der Browser versucht, ein 16x16-Pixel-Symbol für eine normale Anzeige oder ein 32x32-Pixel-Symbol für eine hochauflösende Anzeige auszuwählen. Um Skalierungen zu vermeiden, können Sie Symbole wie folgt angeben:

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
        > Das oberste Menüelement verwendet die im Manifest angegebenen [Symbole](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/icons), anstatt der mit diesem Schlüssel angegebenen.

    - `id` {{optional_inline}}
      - : `string`. Die eindeutige ID, die diesem Element zugewiesen werden soll. Ist obligatorisch für nicht-persistente [Hintergrund (Event)-Seiten](/de/docs/Mozilla/Add-ons/WebExtensions/Background_scripts) in Manifest V2 und in Manifest V3. Darf nicht mit einer anderen ID für diese Erweiterung übereinstimmen.
    - `onclick` {{optional_inline}}
      - : `function`. Die Funktion, die aufgerufen wird, wenn der Menüpunkt angeklickt wird. Ereignisseiten können dies nicht verwenden: Stattdessen sollten sie einen Listener für {{WebExtAPIRef('menus.onClicked')}} registrieren.
    - `parentId` {{optional_inline}}
      - : `integer` oder `string`. Die ID eines übergeordneten Menüpunkts; dadurch wird das Element zu einem untergeordneten Element eines zuvor hinzugefügten Elements. Hinweis: Wenn Sie mehr als einen Menüpunkt erstellt haben, werden die Elemente in einem Untermenü platziert. Das Untermenü des Elternteils wird mit dem Namen der Erweiterung beschriftet.
    - `targetUrlPatterns` {{optional_inline}}
      - : `array` von `string`. Ähnlich wie `documentUrlPatterns`, ermöglicht es jedoch, basierend auf dem `href` von Anker-Tags und dem `src`-Attribut von img/audio/video-Tags zu filtern. Dieser Parameter unterstützt jedes URL-Schema, selbst solche, die normalerweise in einem Übereinstimmungsmuster nicht zulässig sind.
    - `title` {{optional_inline}}

      - : `string`. Der Text, der im Element angezeigt werden soll. Obligatorisch, es sei denn, `type` ist "separator".

        Sie können "`%s`" im String verwenden. Wenn Sie dies in einem Menüpunkt tun und ein Text im Fenster ausgewählt ist, wenn das Menü angezeigt wird, wird der ausgewählte Text in den Titel interpoliert. Wenn z.B. `title` "Übersetze '%s' ins Pig Latin" ist und der Benutzer das Wort "cool" auswählt und das Menü aktiviert, wird der Titel des Menüelements: "Übersetze 'cool' ins Pig Latin" lauten.

        Wenn der Titel ein Ampersand "&" enthält, wird das nächste Zeichen als Zugangstaste für das Element verwendet und das Ampersand wird nicht angezeigt. Ausnahmen hierzu sind:

        - Wenn das nächste Zeichen ebenfalls ein Ampersand ist: wird ein einzelnes Ampersand angezeigt und keine Zugangstaste festgelegt. Effektiv wird "&&" verwendet, um ein einzelnes Ampersand anzuzeigen.
        - Wenn die nächsten Zeichen die Interpolationsanweisung "%s" sind: wird das Ampersand nicht angezeigt und keine Zugangstaste festgelegt.
        - Wenn das Ampersand das letzte Zeichen im Titel ist: wird das Ampersand nicht angezeigt und keine Zugangstaste festgelegt.

        Nur das erste Ampersand wird verwendet, um eine Zugangstaste festzulegen: nachfolgende Ampersands werden nicht angezeigt und legen keine Tasten fest. So wird "\&A und \&B" als "A und B" angezeigt und "A" als Zugangstaste festgelegt.

        In einigen lokalisierten Versionen von Firefox (Japanisch und Chinesisch) wird die Zugangstaste in Klammern gesetzt und an die Menülabele angehängt, _es sei denn_, der Menütitel endet selbst bereits mit der Zugangstaste (z.B. `"toolkit(&K)"`). Weitere Details finden Sie im [Firefox-Fehler 1647373](https://bugzil.la/1647373).

    - `type` {{optional_inline}}
      - : `{{WebExtAPIRef('menus.ItemType')}}`. Der Typ des Menüelements: "normal", "checkbox", "radio", "separator". Standardmäßig "normal".
    - `viewTypes` {{optional_inline}}
      - : `{{WebExtAPIRef('extension.ViewType')}}`. Liste von Ansichtsarten, in denen der Menüpunkt angezeigt wird. Standardmäßig jede Ansicht, einschließlich solcher ohne `viewType`.
    - `visible` {{optional_inline}}
      - : `boolean`. Ob das Element im Menü angezeigt wird. Standardmäßig `true`.

- `callback` {{optional_inline}}
  - : `function`. Wird aufgerufen, wenn das Element erstellt wurde. Falls es Probleme bei der Erstellung des Elements gab, sind Details in {{WebExtAPIRef('runtime.lastError')}} verfügbar.

### Rückgabewert

`integer` oder `string`. Die `ID` des neu erstellten Elements.

## Beispiele

Dieses Beispiel erstellt einen Kontextmenüeintrag, der angezeigt wird, wenn der Benutzer Text auf der Seite ausgewählt hat. Es protokolliert den ausgewählten Text einfach in der Konsole:

```js
browser.menus.create({
  id: "log-selection",
  title: "Log '%s' zur Konsole",
  contexts: ["selection"],
});

browser.menus.onClicked.addListener((info, tab) => {
  if (info.menuItemId === "log-selection") {
    console.log(info.selectionText);
  }
});
```

Dieses Beispiel fügt zwei Radio-Items hinzu, die verwendet werden können, um auszuwählen, ob eine grüne oder blaue Umrandung auf die Seite angewendet werden soll. Beachten Sie, dass dieses Beispiel die [activeTab-Erlaubnis](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#activetab_permission) benötigt.

```js
function onCreated() {
  if (browser.runtime.lastError) {
    console.log("Fehler beim Erstellen des Elements:", browser.runtime.lastError);
  } else {
    console.log("Element erfolgreich erstellt");
  }
}

browser.menus.create(
  {
    id: "radio-green",
    type: "radio",
    title: "Mach es grün",
    contexts: ["all"],
    checked: false,
  },
  onCreated,
);

browser.menus.create(
  {
    id: "radio-blue",
    type: "radio",
    title: "Mach es blau",
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
> Diese API basiert auf Chromiums [`chrome.contextMenus`](https://developer.chrome.com/docs/extensions/reference/api/contextMenus#method-create) API. Diese Dokumentation stammt aus [`context_menus.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/context_menus.json) im Chromium-Code.

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
