---
title: menus.create()
slug: Mozilla/Add-ons/WebExtensions/API/menus/create
l10n:
  sourceCommit: 5ebacde5e3e3500a851a2c49c7d02a7a5c6604ce
---

{{AddonSidebar}}

Erstellt ein Menüelement anhand eines Optionsobjekts, das Eigenschaften für das Element definiert.

Im Gegensatz zu anderen asynchronen Funktionen gibt diese keine Promise zurück, sondern verwendet einen optionalen Callback zur Kommunikation von Erfolg oder Misserfolg. Dies liegt daran, dass der Rückgabewert die ID des neuen Elements ist.

Um die Kompatibilität mit anderen Browsern sicherzustellen, stellt Firefox diese Methode im `contextMenus`-Namespace und im `menus`-Namespace zur Verfügung. Es ist jedoch nicht möglich, Werkzeuge-Menüelemente (`contexts: ["tools_menu"]`) mit dem `contextMenus`-Namespace zu erstellen.

> **Erstellen von Menüs in persistenten und nicht-persistenten Erweiterungen**
>
> Wie Sie Menüelemente erstellen, hängt davon ab, ob Ihre Erweiterung verwendet:
>
> - Nicht-persistente Hintergrundseiten (eine Event-Seite), bei der Menüs über Browser- und Erweiterungsneustarts hinweg bestehen bleiben. Sie rufen `menus.create` (mit einer menüspezifischen ID) innerhalb eines {{WebExtAPIRef("runtime.onInstalled")}}-Listeners auf. Dies verhindert wiederholte Versuche, das Menuelement zu erstellen, wenn die Seiten neu starten, was bei einem Aufruf auf oberster Ebene der Fall wäre.
> - Persistente Hintergrundseiten:
>   - in Chrome werden Menuelemente von persistenten Hintergrundseiten beibehalten. Erstellen Sie Ihre Menüs in einem {{WebExtAPIRef("runtime.onInstalled")}}-Listener.
>   - in Firefox werden Menuelemente von persistenten Hintergrundseiten nie beibehalten. Rufen Sie `menus.create` bedingungslos von der obersten Ebene aus auf, um die Menuelemente zu registrieren.
>
> Weitere Informationen finden Sie unter [Erweiterung initialisieren](/de/docs/Mozilla/Add-ons/WebExtensions/Background_scripts#initialize_the_extension) auf der Seite für Hintergrundskripte und [Ereignisgesteuerte Hintergrundskripte](https://extensionworkshop.com/documentation/develop/manifest-v3-migration-guide/#event-driven-background-scripts) im Extension Workshop.

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
      - : `boolean`. Der Anfangszustand eines Kontrollkästchens oder Radio-Elements: `true` für ausgewählt und `false` für nicht ausgewählt. Nur ein Radio-Element kann zu einem bestimmten Zeitpunkt in einer gegebenen Gruppe von Radio-Elementen ausgewählt werden.
    - `command` {{optional_inline}}

      - : `string`. Zeichenfolge, die eine Aktion beschreibt, die ausgeführt werden soll, wenn der Benutzer auf das Element klickt. Die anerkannten Werte sind:

        - `"_execute_browser_action"`: simuliert einen Klick auf die Browser-Action der Erweiterung, um deren Popup zu öffnen, falls vorhanden (nur Manifest V2)
        - `"_execute_action"`: simuliert einen Klick auf die Action der Erweiterung, um deren Popup zu öffnen, falls vorhanden (nur Manifest V3)
        - `"_execute_page_action"`: simuliert einen Klick auf die Page-Action der Erweiterung, um deren Popup zu öffnen
        - `"_execute_sidebar_action"`: öffnet die Seitenleiste der Erweiterung

        Details finden Sie in der Dokumentation zu speziellen Shortcuts im Manifest.json-Schlüssel [`commands`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/commands#special_shortcuts).

        Wenn einer der anerkannten Werte angegeben ist, löst das Klicken auf das Element nicht das {{WebExtAPIRef("menus.onClicked")}}-Ereignis aus; stattdessen wird die Standardaktion ausgelöst, wie z. B. das Öffnen eines Popups. Andernfalls löst das Klicken auf das Element {{WebExtAPIRef("menus.onClicked")}} aus und das Ereignis kann verwendet werden, um ein alternatives Verhalten zu implementieren.

    - `contexts` {{optional_inline}}

      - : `array` von {{WebExtAPIRef('menus.ContextType')}}. Array von Kontexten, in denen dieses Menüelement angezeigt wird. Wenn diese Option weggelassen wird:

        - falls das übergeordnete Element Kontexte festgelegt hat, erbt dieses Element die Kontexte des übergeordneten Elements
        - andernfalls erhält das Element ein Kontexte-Array von \["page"].

    - `documentUrlPatterns` {{optional_inline}}
      - : `array` von `string`. Ermöglicht Ihnen, das Element nur auf Dokumente anzuwenden, deren URL einem der gegebenen [Übereinstimmungsmuster](/de/docs/Mozilla/Add-ons/WebExtensions/Match_patterns) entspricht. Dies gilt auch für Frames.
    - `enabled` {{optional_inline}}
      - : `boolean`. Ob dieses Menüelement aktiviert oder deaktiviert ist. Standardmäßig `true`.
    - `icons` {{optional_inline}}

      - : `object`. Eines oder mehrere benutzerdefinierte Symbole, die neben dem Element angezeigt werden. Benutzerdefinierte Symbole können nur für Elemente in Untermenüs gesetzt werden. Diese Eigenschaft ist ein Objekt mit einer Eigenschaft für jedes bereitgestellte Symbol: Der Name der Eigenschaft sollte die Größe des Symbols in Pixeln enthalten, und der Pfad ist relativ zum Symbol vom Stammverzeichnis der Erweiterung. Der Browser versucht, ein 16x16-Pixel-Symbol für eine normale Anzeige oder ein 32x32-Pixel-Symbol für eine hochauflösende Anzeige auszuwählen. Um jede Skalierung zu vermeiden, können Sie Symbole folgendermaßen angeben:

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
        > Das oberste Menuelement verwendet die im Manifest angegebenen [Icons](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/icons) anstelle derer, die mit diesem Schlüssel angegeben sind.

    - `id` {{optional_inline}}
      - : `string`. Die eindeutige ID, die diesem Element zugewiesen wird. Ist für nicht-persistente [Hintergrund-(Ereignis-)seiten](/de/docs/Mozilla/Add-ons/WebExtensions/Background_scripts) im Manifest V2 und im Manifest V3 obligatorisch. Kann nicht dieselbe sein wie eine andere ID für diese Erweiterung.
    - `onclick` {{optional_inline}}
      - : `function`. Die Funktion, die aufgerufen wird, wenn auf das Menüelement geklickt wird. Ereignisseiten können dies nicht nutzen: Stattdessen sollten sie einen Listener für {{WebExtAPIRef('menus.onClicked')}} registrieren.
    - `parentId` {{optional_inline}}
      - : `integer` oder `string`. Die ID eines übergeordneten Menuelements, wodurch das Element ein Kind eines zuvor hinzugefügten Elements wird. Hinweis: Wenn Sie mehr als ein Menuelement erstellt haben, werden die Elemente in einem Untermenü platziert. Das Untermenü wird mit dem Namen der Erweiterung beschriftet.
    - `targetUrlPatterns` {{optional_inline}}
      - : `array` von `string`. Ähnlich wie `documentUrlPatterns`, ermöglicht es Ihnen jedoch, anhand des `href` von Anchor-Tags und des `src`-Attributs von img/audio/video-Tags zu filtern. Dieser Parameter unterstützt jedes URL-Schema, auch solche, die normalerweise in einem Übereinstimmungsmuster nicht erlaubt sind.
    - `title` {{optional_inline}}

      - : `string`. Der Text, der im Element angezeigt werden soll. Obligatorisch, es sei denn, `type` ist "separator".

        Sie können `%s` in der Zeichenkette verwenden. Wenn Sie dies in einem Menüelement tun und ein Text im Dokument ausgewählt ist, wenn das Menü angezeigt wird, dann wird der ausgewählte Text in den Titel eingefügt. Zum Beispiel, wenn `title` "Übersetze '%s' ins Schweinlatein" ist und der Benutzer das Wort "cool" auswählt, dann das Menü aktiviert wird, wird der Titel des Menüelements sein: "Übersetze 'cool' ins Schweinlatein".

        Wenn der Titel ein Kaufmannsund "&" enthält, wird das nächste Zeichen als Zugriffstaste für das Element verwendet, und das Kaufmannsund wird nicht angezeigt. Ausnahmen hiervon sind:

        - Wenn das nächste Zeichen ebenfalls ein Kaufmannsund ist: dann wird ein einzelnes Kaufmannsund angezeigt und es wird keine Zugriffstaste gesetzt. Effektiv wird "&&" verwendet, um ein einzelnes Kaufmannsund anzuzeigen.
        - Wenn die nächsten Zeichen die Interpolationsanweisung "%s" sind: dann wird das Kaufmannsund nicht angezeigt und es wird keine Zugriffstaste gesetzt.
        - Wenn das Kaufmannsund das letzte Zeichen im Titel ist: dann wird das Kaufmannsund nicht angezeigt und es wird keine Zugriffstaste gesetzt.

        Nur das erste Kaufmannsund wird verwendet, um eine Zugriffstaste zu setzen: nachfolgende Kaufmannsundet werden nicht angezeigt, setzen jedoch keine Schlüssel. So wird "\&A und \&B" als "A und B" angezeigt und "A" als Zugriffstaste setzen.

        In einigen lokalisierten Versionen von Firefox (Japanisch und Chinesisch) wird die Zugriffstaste in Klammern gesetzt und an das Menülabeletikett angehängt, _es sei denn_, der Menütitel endet selbst bereits mit der Zugriffstaste („toolkit(&K)“ zum Beispiel). Für weitere Details siehe [Firefox Bug 1647373](https://bugzil.la/1647373).

    - `type` {{optional_inline}}
      - : {{WebExtAPIRef('menus.ItemType')}}. Der Typ des Menüelements: "normal", "checkbox", "radio", "separator". Standardmäßig "normal".
    - `viewTypes` {{optional_inline}}
      - : {{WebExtAPIRef('extension.ViewType')}}. Liste von Ansichtstypen, in denen das Menüelement angezeigt wird. Standardmäßig in jeder Ansicht, einschließlich derjenigen ohne `viewType`.
    - `visible` {{optional_inline}}
      - : `boolean`. Ob das Element im Menü angezeigt wird. Standardmäßig `true`.

- `callback` {{optional_inline}}
  - : `function`. Wird aufgerufen, wenn das Element erstellt wurde. Wenn es Probleme bei der Erstellung des Elements gab, sind Details in {{WebExtAPIRef('runtime.lastError')}} verfügbar.

### Rückgabewert

`integer` oder `string`. Die `ID` des neu erstellten Elements.

## Beispiele

Dieses Beispiel erstellt ein Kontextmenüelement, das angezeigt wird, wenn der Benutzer Text auf der Seite ausgewählt hat. Es protokolliert einfach den ausgewählten Text in die Konsole:

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

Dieses Beispiel fügt zwei Radioelemente hinzu, mit denen Sie wählen können, ob Sie einen grünen oder einen blauen Rahmen auf die Seite anwenden möchten. Beachten Sie, dass dieses Beispiel die [activeTab-Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#activetab_permission) benötigt.

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
