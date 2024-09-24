---
title: menus.update()
slug: Mozilla/Add-ons/WebExtensions/API/menus/update
l10n:
  sourceCommit: b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

{{AddonSidebar}}

Aktualisiert ein zuvor erstelltes Menüelement.

Für die Kompatibilität mit anderen Browsern stellt Firefox diese Methode sowohl im `contextMenus`-Namespace als auch im `menus`-Namespace zur Verfügung.

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

  - : `object`. Die zu aktualisierenden Eigenschaften. Dies sind dieselben wie im `createProperties`-Objekt, das an {{WebExtAPIRef("menus.create()", "menus.create()")}} übergeben wird, mit der Ausnahme, dass `id` nicht gesetzt werden kann. Darüber hinaus können `icons` nur bei Menübefehlen geändert werden, nicht im obersten Kontextmenü. Das Symbol auf oberster Ebene entspricht dem primären Symbol der Erweiterung, wie es in der Manifestdatei der Erweiterung deklariert ist.

    - `checked` {{optional_inline}}
      - : `boolean`. Der Anfangszustand eines Kontrollkästchens oder Radio-Elements: `true` für ausgewählt und `false` für nicht ausgewählt. In einer bestimmten Gruppe von Radio-Elementen kann nur ein Radio-Element gleichzeitig ausgewählt sein.
    - `command` {{optional_inline}}

      - : `string`. Zeichenkette, die eine Aktion beschreibt, die ausgeführt werden soll, wenn der Benutzer auf das Element klickt. Die anerkannten Werte sind:

        - `"_execute_browser_action"`: simuliert einen Klick auf die Browser-Aktion der Erweiterung und öffnet deren Popup, falls vorhanden (nur Manifest V2)
        - `"_execute_action"`: simuliert einen Klick auf die Aktion der Erweiterung und öffnet deren Popup, falls vorhanden (nur Manifest V3)
        - `"_execute_page_action"`: simuliert einen Klick auf die Seitenaktion der Erweiterung und öffnet deren Popup, falls vorhanden
        - `"_execute_sidebar_action"`: öffnet die Seitenleiste der Erweiterung

        Details finden Sie in der Dokumentation zu speziellen Tastenkombinationen im Schlüssel [`commands`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/commands#special_shortcuts) der manifest.json.

        Wenn einer der anerkannten Werte angegeben ist, löst ein Klick auf das Element nicht das Ereignis {{WebExtAPIRef("menus.onClicked")}} aus; stattdessen wird die Standardaktion ausgelöst, wie z.B. das Öffnen eines Pop-ups. Andernfalls löst ein Klick auf das Element das Ereignis {{WebExtAPIRef("menus.onClicked")}} aus und das Ereignis kann verwendet werden, um ein Fallback-Verhalten zu implementieren.

    - `contexts` {{optional_inline}}

      - : `array` von `{{WebExtAPIRef('menus.ContextType')}}`. Array von Kontexten, in denen dieses Menüelement erscheinen wird. Wenn diese Option weggelassen wird:

        - wenn das übergeordnete Element Kontexte festgelegt hat, dann erbt dieses Element die Kontexte seines übergeordneten Elements
        - andernfalls erhält das Element ein Kontext-Array von \["page"].

    - `documentUrlPatterns` {{optional_inline}}
      - : `array` von `string`. Ermöglicht die Einschränkung des Elements, sodass es nur auf Dokumente angewendet wird, deren URL mit einem der angegebenen [Match-Muster](/de/docs/Mozilla/Add-ons/WebExtensions/Match_patterns) übereinstimmt. Dies gilt auch für Frames.
    - `enabled` {{optional_inline}}
      - : `boolean`. Ob dieses Menüelement aktiviert oder deaktiviert ist. Standardmäßig ist es `true`.
    - `icons` {{optional_inline}}

      - : `object`. Ein oder mehrere benutzerdefinierte Symbole, die neben dem Element angezeigt werden. Benutzerdefinierte Symbole können nur für Elemente in Untermenüs festgelegt werden. Diese Eigenschaft ist ein Objekt mit einer Eigenschaft für jedes bereitgestellte Symbol: Der Name der Eigenschaft sollte die Größe des Symbols in Pixel enthalten und der Pfad ist relativ zum Symbol im Stammverzeichnis der Erweiterung. Der Browser versucht, ein 16x16-Pixel-Symbol für eine normale Anzeige oder ein 32x32-Pixel-Symbol für eine hochdichte Anzeige auszuwählen. Um ein Skalieren zu vermeiden, können Sie Symbole wie folgt angeben:

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
        > Das Menüelement auf oberster Ebene verwendet die im Manifest angegebenen [icons](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/icons) anstelle der mit diesem Schlüssel angegebenen.

    - `id` {{optional_inline}}
      - : `string`. Die eindeutige ID, die diesem Element zugewiesen werden soll. Erforderlich für Ereignisseiten. Kann nicht die gleiche sein wie eine andere ID für diese Erweiterung.
    - `onclick` {{optional_inline}}
      - : `function`. Die Funktion, die aufgerufen wird, wenn auf das Menüelement geklickt wird. Ereignisseiten können dies nicht verwenden: Stattdessen sollten sie einen Listener für {{WebExtAPIRef('menus.onClicked')}} registrieren.
    - `parentId` {{optional_inline}}
      - : `integer` oder `string`. Die ID eines übergeordneten Menüelements; dies macht das Element zu einem Kind eines zuvor hinzugefügten Elements. Hinweis: Wenn Sie mehr als ein Menüelement erstellt haben, werden die Elemente in einem Untermenü platziert. Das übergeordnete Element des Untermenüs wird mit dem Namen der Erweiterung bezeichnet.
    - `targetUrlPatterns` {{optional_inline}}
      - : `array` von `string`. Ähnlich wie `documentUrlPatterns`, erlaubt aber das Filtern basierend auf dem `href` von Ankerelementen und dem `src`-Attribut von img/audio/video-Tags. Dieser Parameter unterstützt jedes URL-Schema, auch solche, die normalerweise in einer Übereinstimmungsmuster nicht erlaubt sind.
    - `title` {{optional_inline}}

      - : `string`. Der Text, der im Element angezeigt werden soll. Erforderlich, es sei denn, `type` ist "separator".

        Sie können "`%s`" im String verwenden. Wenn Sie dies in einem Menüelement tun und beim Anzeigen des Menüs Text auf der Seite ausgewählt ist, wird der ausgewählte Text in den Titel eingefügt. Beispielsweise, wenn `title` "Übersetze '%s' ins Pig Latin" ist und der Benutzer das Wort "cool" auswählt und das Menü aktiviert, dann lautet der Menüelementtitel: "Übersetze 'cool' ins Pig Latin".

        Wenn der Titel ein kaufmännisches Und "&" enthält, wird das nächste Zeichen als Zugriffs-Taste für das Element verwendet und das kaufmännische Und wird nicht angezeigt. Ausnahmen sind:

        - Wenn das nächste Zeichen ebenfalls ein kaufmännisches Und ist: dann wird ein einzelnes kaufmännisches Und angezeigt und keine Zugriffs-Taste gesetzt. Effektiv wird "&&" verwendet, um ein einzelnes kaufmännisches Und anzuzeigen.
        - Wenn die nächsten Zeichen die Interpolationsanweisung "%s" sind: dann wird das kaufmännische Und nicht angezeigt und keine Zugriffs-Taste gesetzt.
        - Wenn das kaufmännische Und das letzte Zeichen im Titel ist: dann wird das kaufmännische Und nicht angezeigt und keine Zugriffs-Taste gesetzt.

        Nur das erste kaufmännische Und wird zur Festlegung einer Zugriffs-Taste verwendet: nachfolgende kaufmännische Und werden nicht angezeigt, setzen jedoch keine Tasten. So wird "\&A und \&B" als "A und B" angezeigt und "A" als Zugriffstaste festlegt.

    - `type` {{optional_inline}}
      - : `{{WebExtAPIRef('menus.ItemType')}}`. Der Typ des Menüelements: "normal", "checkbox", "radio", "separator". Standardmäßig "normal".
    - `viewTypes` {{optional_inline}}
      - : `{{WebExtAPIRef('extension.ViewType')}}`. Liste von Ansichtstypen, in denen das Menüelement angezeigt wird. Standardmäßig wird es in jeder Ansicht angezeigt, einschließlich derer ohne `viewType`.
    - `visible` {{optional_inline}}
      - : `boolean`. Ob das Element im Menü angezeigt wird. Standardmäßig `true`.

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise), das ohne Argumente erfüllt wird, wenn das Update erfolgreich war, oder mit einer Fehlermeldung abgelehnt wird, wenn das Update fehlgeschlagen ist.

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
> Diese API basiert auf Chromiums [`chrome.contextMenus`](https://developer.chrome.com/docs/extensions/reference/api/contextMenus#method-update) API. Diese Dokumentation ist abgeleitet von [`context_menus.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/context_menus.json) im Chromium-Code.

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
