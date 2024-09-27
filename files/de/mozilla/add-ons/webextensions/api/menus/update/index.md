---
title: menus.update()
slug: Mozilla/Add-ons/WebExtensions/API/menus/update
l10n:
  sourceCommit: b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

{{AddonSidebar}}

Aktualisiert ein zuvor erstelltes Menüelement.

Zur Kompatibilität mit anderen Browsern stellt Firefox diese Methode sowohl über den `contextMenus`-Namespace als auch über den `menus`-Namespace zur Verfügung.

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

  - : `object`. Die zu aktualisierenden Eigenschaften. Die gleichen wie das `createProperties` Objekt, das an {{WebExtAPIRef("menus.create()", "menus.create()")}} übergeben wurde, mit der Ausnahme, dass `id` nicht gesetzt werden kann. Zusätzlich können `icons` nur für Menübefehle geändert werden, nicht im obersten Kontextmenü. Das oberste Icon entspricht dem Haupicon der Erweiterung, wie es in der Manifestdatei der Erweiterung angegeben ist.

    - `checked` {{optional_inline}}
      - : `boolean`. Der Anfangszustand eines Kontrollkästchens oder eines Auswahlelements: `true` für ausgewählt und `false` für nicht ausgewählt. Nur ein Auswahlelement kann gleichzeitig in einer Gruppe von Auswahlelementen ausgewählt sein.
    - `command` {{optional_inline}}

      - : `string`. String, der eine Aktion beschreibt, die ausgeführt werden soll, wenn der Benutzer auf das Element klickt. Die anerkannten Werte sind:

        - `"_execute_browser_action"`: simuliert einen Klick auf die Browseraktion der Erweiterung und öffnet deren Popup, falls vorhanden (nur Manifest V2)
        - `"_execute_action"`: simuliert einen Klick auf die Aktion der Erweiterung und öffnet deren Popup, falls vorhanden (nur Manifest V3)
        - `"_execute_page_action"`: simuliert einen Klick auf die Seitenaktion der Erweiterung und öffnet deren Popup, falls vorhanden
        - `"_execute_sidebar_action"`: öffnet die Seitenleiste der Erweiterung

        Siehe die Dokumentation zu speziellen Tastenkombinationen im Schlüssel [`commands`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/commands#special_shortcuts) der manifest.json für Details.

        Wenn einer der anerkannten Werte angegeben wird, löst ein Klick auf das Element nicht das {{WebExtAPIRef("menus.onClicked")}}-Ereignis aus; stattdessen wird die Standardaktion ausgelöst, wie z. B. das Öffnen eines Pop-ups. Andernfalls löst ein Klick auf das Element {{WebExtAPIRef("menus.onClicked")}} aus, und das Ereignis kann verwendet werden, um ein Fallback-Verhalten zu implementieren.

    - `contexts` {{optional_inline}}

      - : `array` von `{{WebExtAPIRef('menus.ContextType')}}`. Array von Kontexten, in denen dieses Menüelement erscheint. Wenn diese Option weggelassen wird:

        - wenn der übergeordnete Eintrag Kontexte gesetzt hat, erbt dieses Element die Kontexte seines übergeordneten Eintrags
        - andernfalls erhält das Element ein Kontextarray von \["page"].

    - `documentUrlPatterns` {{optional_inline}}
      - : `array` von `string`. Ermöglicht es Ihnen, das Element so zu beschränken, dass es nur für Dokumente gilt, deren URL mit einem der angegebenen [Muster](/de/docs/Mozilla/Add-ons/WebExtensions/Match_patterns) übereinstimmt. Dies gilt auch für Frames.
    - `enabled` {{optional_inline}}
      - : `boolean`. Gibt an, ob dieses Menüelement aktiviert oder deaktiviert ist. Standardmäßig `true`.
    - `icons` {{optional_inline}}

      - : `object`. Ein oder mehrere benutzerdefinierte Symbole, die neben dem Element angezeigt werden. Benutzerdefinierte Symbole können nur für Elemente eingestellt werden, die in Untermenüs erscheinen. Diese Eigenschaft ist ein Objekt mit einer Eigenschaft für jedes bereitgestellte Symbol: Der Name der Eigenschaft sollte die Größe des Symbols in Pixeln enthalten, und der Pfad ist relativ zum Symbol aus dem Stammverzeichnis der Erweiterung. Der Browser versucht, ein 16x16-Pixel-Symbol für eine normale Anzeige oder ein 32x32-Pixel-Symbol für eine hochauflösende Anzeige auszuwählen. Um ein Skalieren zu vermeiden, können Sie Icons so angeben:

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
      - : `string`. Die eindeutige ID, die diesem Element zugeordnet wird. Obligatorisch für Ereignisseiten. Kann nicht dieselbe sein wie eine andere ID für diese Erweiterung.
    - `onclick` {{optional_inline}}
      - : `function`. Die Funktion, die aufgerufen wird, wenn auf das Menüelement geklickt wird. Ereignisseiten können dies nicht verwenden: stattdessen sollten sie einen Listener für {{WebExtAPIRef('menus.onClicked')}} registrieren.
    - `parentId` {{optional_inline}}
      - : `integer` oder `string`. Die ID eines übergeordneten Menüelements; dies macht das Element zu einem untergeordneten Element eines zuvor hinzugefügten Elements. Hinweis: Wenn Sie mehr als ein Menüelement erstellt haben, werden die Elemente in einem Untermenü platziert. Das Untermenü des übergeordneten Elements wird mit dem Namen der Erweiterung beschriftet.
    - `targetUrlPatterns` {{optional_inline}}
      - : `array` von `string`. Ähnlich wie `documentUrlPatterns`, aber ermöglicht das Filtern basierend auf dem `href` von Anker-Tags und dem `src`-Attribut von img/audio/video-Tags. Dieser Parameter unterstützt jedes URL-Schema, auch solche, die normalerweise in einem Muster nicht erlaubt sind.
    - `title` {{optional_inline}}

      - : `string`. Der Text, der im Element angezeigt wird. Pflichtangabe, es sei denn, `type` ist "separator".

        Sie können "`%s`" im String verwenden. Wenn Sie dies in einem Menüelement tun und etwas Text auf der Seite ausgewählt ist, wenn das Menü angezeigt wird, wird der ausgewählte Text in den Titel eingefügt. Zum Beispiel, wenn `title` "Übersetze '%s' ins Schweinlatein" ist und der Benutzer das Wort "cool" auswählt, dann das Menü aktiviert, lautet der Titel des Menüelements: "Übersetze 'cool' ins Schweinlatein".

        Wenn der Titel ein Kaufmannszeichen "&" enthält, wird das nächste Zeichen als Zugriffstaste für das Element verwendet, und das Kaufmannszeichen wird nicht angezeigt. Ausnahmen hierzu sind:

        - Wenn das nächste Zeichen ebenfalls ein Kaufmannszeichen ist: dann wird ein einzelnes Kaufmannszeichen angezeigt und keine Zugriffstaste gesetzt. In der Praxis wird "&&" verwendet, um ein einzelnes Kaufmannszeichen anzuzeigen.
        - Wenn die nächsten Zeichen die Interpolationsanweisung "%s" sind: dann wird das Kaufmannszeichen nicht angezeigt und keine Zugriffstaste gesetzt.
        - Wenn das Kaufmannszeichen das letzte Zeichen im Titel ist: dann wird das Kaufmannszeichen nicht angezeigt und keine Zugriffstaste gesetzt.

        Nur das erste Kaufmannszeichen wird verwendet, um eine Zugriffstaste einzustellen: folgende Kaufmannszeichen werden nicht angezeigt, aber keine Tasten werden gesetzt. So wird "\&A und \&B" als "A und B" angezeigt und "A" wird als Zugriffstaste gesetzt.

    - `type` {{optional_inline}}
      - : `{{WebExtAPIRef('menus.ItemType')}}`. Der Typ des Menüeintrags: "normal", "checkbox", "radio", "separator". Standardmäßig "normal".
    - `viewTypes` {{optional_inline}}
      - : `{{WebExtAPIRef('extension.ViewType')}}`. Liste der Ansichtstypen, in denen das Menüelement angezeigt wird. Standardmäßig jede Ansicht, einschließlich derjenigen ohne `viewType`.
    - `visible` {{optional_inline}}
      - : `boolean`. Gibt an, ob das Element im Menü angezeigt wird. Standardmäßig `true`.

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise), das ohne Argumente erfüllt wird, falls die Aktualisierung erfolgreich war, oder mit einer Fehlermeldung abgelehnt wird, falls die Aktualisierung fehlgeschlagen ist.

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
