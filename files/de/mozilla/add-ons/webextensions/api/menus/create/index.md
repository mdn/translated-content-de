---
title: menus.create()
slug: Mozilla/Add-ons/WebExtensions/API/menus/create
l10n:
  sourceCommit: b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

{{AddonSidebar}}

Erstellt ein Menüelement mithilfe eines Optionsobjekts, das Eigenschaften für das Element definiert.

Im Gegensatz zu anderen asynchronen Funktionen gibt diese keinen Promise zurück, sondern verwendet einen optionalen Callback, um Erfolg oder Misserfolg zu kommunizieren. Dies liegt daran, dass der Rückgabewert die ID des neuen Elements ist.

Zur Kompatibilität mit anderen Browsern stellt Firefox diese Methode sowohl im `contextMenus`-Namensraum als auch im `menus`-Namensraum zur Verfügung. Es ist jedoch nicht möglich, Werkzeuge-Menüeinträge (`contexts: ["tools_menu"]`) mit dem `contextMenus`-Namensraum zu erstellen.

> **Erstellen von Menüs in persistenten und nicht-persistenten Erweiterungen**
>
> Wie Sie Menüelemente erstellen, hängt davon ab, ob Ihre Erweiterung verwendet:
>
> - nicht-persistente Hintergrundseiten (eine Ereignisseite), bei denen Menüs beim Neustart des Browsers und der Erweiterung erhalten bleiben. Sie rufen `menus.create` (mit einer menüspezifischen ID) innerhalb eines {{WebExtAPIRef("runtime.onInstalled")}}-Listeners auf. Dies vermeidet wiederholte Versuche, das Menuelement zu erstellen, wenn die Seiten neu gestartet werden, was bei einem Aufruf auf oberster Ebene der Fall wäre.
> - persistente Hintergrundseiten:
>   - in Chrome werden Menüs aus persistenten Hintergrundseiten beibehalten. Erstellen Sie Ihre Menüs in einem {{WebExtAPIRef("runtime.onInstalled")}}-Listener.
>   - in Firefox werden Menüs aus persistenten Hintergrundseiten nie beibehalten. Rufen Sie `menus.create` unbedingt auf oberster Ebene auf, um die Menüs zu registrieren.
>
> Siehe [Erweiterung initialisieren](/de/docs/Mozilla/Add-ons/WebExtensions/Background_scripts#initialize_the_extension) auf der Seite der Hintergrundskripte und [Ereignisgesteuerte Hintergrundskripte](https://extensionworkshop.com/documentation/develop/manifest-v3-migration-guide/#event-driven-background-scripts) im Extension Workshop für weitere Informationen.

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

      - : `string`. Eine Zeichenkette, die eine auszuführende Aktion beschreibt, wenn der Benutzer auf das Element klickt. Die anerkannten Werte sind:

        - `"_execute_browser_action"`: simuliert einen Klick auf die Browseraktion der Erweiterung und öffnet dessen Popup, falls vorhanden (nur Manifest V2)
        - `"_execute_action"`: simuliert einen Klick auf die Aktion der Erweiterung und öffnet dessen Popup, falls vorhanden (nur Manifest V3)
        - `"_execute_page_action"`: simuliert einen Klick auf die Seitenaktion der Erweiterung und öffnet dessen Popup
        - `"_execute_sidebar_action"`: öffnet die Seitenleiste der Erweiterung

        Siehe die Dokumentation zu speziellen Shortcuts im manifest.json-Schlüssel [`commands`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/commands#special_shortcuts) für Details.

        Wenn einer der anerkannten Werte angegeben ist, löst ein Klick auf das Element nicht das {{WebExtAPIRef("menus.onClicked")}}-Ereignis aus; stattdessen wird die Standardaktion ausgelöst, wie z.B. das Öffnen eines Popups. Andernfalls löst ein Klick auf das Element {{WebExtAPIRef("menus.onClicked")}} aus und das Ereignis kann verwendet werden, um ein Ersatzverhalten zu implementieren.

    - `contexts` {{optional_inline}}

      - : `array` von `{{WebExtAPIRef('menus.ContextType')}}`. Array von Kontexten, in denen dieses Menüelement erscheinen soll. Wird diese Option weggelassen:

        - wenn der übergeordnete Eintrag Kontexte gesetzt hat, erbt dieses Element die Kontexte seines übergeordneten Elements
        - andernfalls erhält das Element ein Kontext-Array von \["page"].

    - `documentUrlPatterns` {{optional_inline}}
      - : `array` von `string`. Ermöglicht es, das Element einzuschränken, sodass es nur für Dokumente gilt, deren URL einem der angegebenen [Muster](/de/docs/Mozilla/Add-ons/WebExtensions/Match_patterns) entspricht. Dies gilt auch für Frames.
    - `enabled` {{optional_inline}}
      - : `boolean`. Ob dieses Menüelement aktiviert oder deaktiviert ist. Standardmäßig `true`.
    - `icons` {{optional_inline}}

      - : `object`. Ein oder mehrere benutzerdefinierte Symbole, die neben dem Element angezeigt werden sollen. Benutzerdefinierte Symbole können nur für Elemente festgelegt werden, die in Untermenüs erscheinen. Diese Eigenschaft ist ein Objekt mit einer Eigenschaft für jedes bereitgestellte Symbol: Der Name der Eigenschaft sollte die Größe des Symbols in Pixeln enthalten und der Pfad ist relativ zum Symbol aus dem Stammverzeichnis der Erweiterung. Der Browser versucht, ein 16x16-Pixel-Symbol für eine normale Anzeige oder ein 32x32-Pixel-Symbol für eine hochauflösende Anzeige auszuwählen. Um Skalierungen zu vermeiden, können Sie Symbole wie folgt angeben:

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
        > Das Menüelement der obersten Ebene verwendet die im Manifest angegebenen [Symbole](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/icons) anstelle dessen, was mit diesem Schlüssel angegeben ist.

    - `id` {{optional_inline}}
      - : `string`. Die eindeutige ID, die diesem Element zugewiesen werden soll. Obligatorisch für nicht-persistente [Hintergrund-(Ereignis-)Seiten](/de/docs/Mozilla/Add-ons/WebExtensions/Background_scripts) in Manifest V2 und Manifest V3. Kann nicht dieselbe wie eine andere ID dieser Erweiterung sein.
    - `onclick` {{optional_inline}}
      - : `function`. Die Funktion, die aufgerufen wird, wenn das Menüelement angeklickt wird. Ereignisseiten können dies nicht verwenden: Stattdessen sollten sie einen Listener für {{WebExtAPIRef('menus.onClicked')}} registrieren.
    - `parentId` {{optional_inline}}
      - : `integer` oder `string`. Die ID eines übergeordneten Menüelements; dies macht das Element zu einem untergeordneten Element eines zuvor hinzugefügten Elements. Hinweis: Wenn Sie mehr als ein Menüelement erstellt haben, werden die Elemente in einem Untermenü platziert. Der Übergeordnete des Untermenüs wird mit dem Namen der Erweiterung beschriftet.
    - `targetUrlPatterns` {{optional_inline}}
      - : `array` von `string`. Ähnlich wie `documentUrlPatterns`, ermöglicht es jedoch das Filtern basierend auf dem `href` von Ankertags und dem `src`-Attribut von img/audio/video-Tags. Dieser Parameter unterstützt jedes URL-Schema, sogar solche, die normalerweise in einem Übereinstimmungsmuster nicht erlaubt sind.
    - `title` {{optional_inline}}

      - : `string`. Der Text, der im Element angezeigt werden soll. Obligatorisch, es sei denn, `type` ist "separator".

        Sie können "`%s`" in der Zeichenkette verwenden. Wenn Sie dies in einem Menüelement tun und auf der Seite Text ausgewählt ist, wenn das Menü angezeigt wird, wird der ausgewählte Text in den Titel interpoliert. Beispielsweise, wenn `title` "Übersetze '%s' ins Pig Latin" ist und der Benutzer das Wort "cool" auswählt und dann das Menü aktiviert, wird der Titel des Menüelements sein: "Übersetze 'cool' ins Pig Latin".

        Wenn der Titel ein Et-Zeichen "&" enthält, wird das nächste Zeichen als Zugriffsschlüssel für das Element verwendet und das Et-Zeichen nicht angezeigt. Ausnahmen sind:

        - Wenn das nächste Zeichen ebenfalls ein Et-Zeichen ist: wird ein einzelnes Et-Zeichen angezeigt und kein Zugriffsschlüssel gesetzt. Effektiv wird "&&" verwendet, um ein einzelnes Et-Zeichen anzuzeigen.
        - Wenn die nächsten Zeichen die Interpolationsdirektive "%s" sind: wird das Et-Zeichen nicht angezeigt und kein Zugriffsschlüssel gesetzt.
        - Wenn das Et-Zeichen das letzte Zeichen im Titel ist: wird das Et-Zeichen nicht angezeigt und kein Zugriffsschlüssel gesetzt.

        Nur das erste Et-Zeichen wird verwendet, um einen Zugriffsschlüssel zu setzen: nachfolgende Et-Zeichen werden nicht angezeigt, setzen jedoch keine Schlüssel. So wird "\&A und \&B" als "A und B" angezeigt und "A" als Zugriffsschlüssel gesetzt.

        In einigen lokalisierten Versionen von Firefox (Japanisch und Chinesisch) wird der Zugriffsschlüssel in Klammern gesetzt und an das Menülabel angehängt, _es sei denn_, der Menütitel selbst endet bereits mit dem Zugriffsschlüssel (`"toolkit(&K)"` zum Beispiel). Weitere Details finden Sie im [Firefox-Bug 1647373](https://bugzil.la/1647373).

    - `type` {{optional_inline}}
      - : `{{WebExtAPIRef('menus.ItemType')}}`. Der Typ des Menüelements: "normal", "checkbox", "radio", "separator". Standardmäßig "normal".
    - `viewTypes` {{optional_inline}}
      - : `{{WebExtAPIRef('extension.ViewType')}}`. Liste der Ansichtstypen, in denen das Menüelement angezeigt wird. Standardmäßig in jeder Ansicht, einschließlich solcher ohne `viewType`.
    - `visible` {{optional_inline}}
      - : `boolean`. Ob das Element im Menü angezeigt wird. Standardmäßig `true`.

- `callback` {{optional_inline}}
  - : `function`. Wird aufgerufen, wenn das Element erstellt wurde. Wenn es Probleme bei der Erstellung des Elements gab, sind Details in {{WebExtAPIRef('runtime.lastError')}} verfügbar.

### Rückgabewert

`integer` oder `string`. Die `ID` des neu erstellten Elements.

## Beispiele

Dieses Beispiel erstellt ein Kontextmenüelement, das angezeigt wird, wenn der Benutzer auf der Seite Text ausgewählt hat. Es protokolliert den ausgewählten Text einfach in der Konsole:

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

Dieses Beispiel fügt zwei Radio-Elemente hinzu, mit denen Sie auswählen können, ob ein grüner oder blauer Rand auf die Seite angewendet werden soll. Beachten Sie, dass dieses Beispiel die [activeTab-Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#activetab_permission) benötigt.

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
> Diese API basiert auf der Chromium-API [`chrome.contextMenus`](https://developer.chrome.com/docs/extensions/reference/api/contextMenus#method-create). Diese Dokumentation basiert auf [`context_menus.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/context_menus.json) im Chromium-Code.

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
