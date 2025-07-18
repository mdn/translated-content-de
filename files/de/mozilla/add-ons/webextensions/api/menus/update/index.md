---
title: menus.update()
slug: Mozilla/Add-ons/WebExtensions/API/menus/update
l10n:
  sourceCommit: 09109b6f9444d22215ba330ec1e64e73980b2a6c
---

Aktualisiert ein zuvor erstelltes Menüelement.

Zur Kompatibilität mit anderen Browsern stellt Firefox diese Methode sowohl im `contextMenus`-Namespace als auch im `menus`-Namespace zur Verfügung.

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
  - : `object`. Die zu aktualisierenden Eigenschaften. Dieselben wie das `createProperties`-Objekt, das an {{WebExtAPIRef("menus.create()", "menus.create()")}} übergeben wird, außer dass `id` nicht gesetzt werden kann. Zusätzlich können `icons` nur bei Menübefehlen geändert werden, nicht im obersten Kontextmenü. Das oberste Symbol entspricht dem primären Symbol der Erweiterung, wie es in der Manifestdatei der Erweiterung angegeben ist.
    - `checked` {{optional_inline}}
      - : `boolean`. Der Anfangszustand eines Kontrollkästchens oder Radio-Elements: `true` für ausgewählt und `false` für nicht ausgewählt. In einer Gruppe von Radio-Elementen kann immer nur ein Radio-Element ausgewählt sein.
    - `command` {{optional_inline}}
      - : `string`. Eine Zeichenkette, die eine Aktion beschreibt, die ausgeführt werden soll, wenn der Benutzer auf das Element klickt. Die anerkannten Werte sind:
        - `"_execute_browser_action"`: Simuliert einen Klick auf die Browser-Aktion der Erweiterung und öffnet deren Popup, falls vorhanden (nur Manifest V2)
        - `"_execute_action"`: Simuliert einen Klick auf die Aktion der Erweiterung und öffnet deren Popup, falls vorhanden (nur Manifest V3)
        - `"_execute_page_action"`: Simuliert einen Klick auf die Seitenaktion der Erweiterung und öffnet deren Popup, falls vorhanden
        - `"_execute_sidebar_action"`: Öffnet die Seitenleiste der Erweiterung

        Weitere Details finden Sie in der Dokumentation zu speziellen Abkürzungen im manifest.json-Schlüssel [`commands`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/commands#special_shortcuts).

        Wenn einer der anerkannten Werte angegeben ist, löst ein Klick auf das Element nicht das {{WebExtAPIRef("menus.onClicked")}}-Ereignis aus; stattdessen wird die Standardaktion ausgelöst, z.B. das Öffnen eines Pop-ups. Andernfalls löst ein Klick auf das Element das {{WebExtAPIRef("menus.onClicked")}}-Ereignis aus, und das Ereignis kann verwendet werden, um ein alternatives Verhalten zu implementieren.

    - `contexts` {{optional_inline}}
      - : `array` von {{WebExtAPIRef('menus.ContextType')}}. Array von Kontexten, in denen dieses Menüelement angezeigt wird. Wenn diese Option weggelassen wird:
        - Wenn das übergeordnete Element Kontexte gesetzt hat, übernimmt dieses Element die Kontexte seines übergeordneten Elements.
        - Andernfalls erhält das Element ein Kontext-Array \["page"].

    - `documentUrlPatterns` {{optional_inline}}
      - : `array` von `string`. Ermöglicht es Ihnen, das Element nur auf Dokumente anzuwenden, deren URL mit einem der angegebenen [Übereinstimmungsmuster](/de/docs/Mozilla/Add-ons/WebExtensions/Match_patterns) übereinstimmt. Dies gilt auch für Frames.
    - `enabled` {{optional_inline}}
      - : `boolean`. Ob dieses Menüelement aktiviert oder deaktiviert ist. Standardmäßig `true`.
    - `icons` {{optional_inline}}
      - : `object`. Ein oder mehrere benutzerdefinierte Symbole, die neben dem Element angezeigt werden sollen. Benutzerdefinierte Symbole können nur für Elemente in Untermenüs festgelegt werden. Diese Eigenschaft ist ein Objekt mit einer Eigenschaft für jedes bereitgestellte Symbol: Der Name der Eigenschaft sollte die Größe des Symbols in Pixeln enthalten, und der Pfad ist relativ zum Symbol aus dem Stammverzeichnis der Erweiterung. Der Browser versucht, ein 16x16 Pixel großes Symbol für ein normales Display oder ein 32x32 Pixel großes Symbol für ein hochdichtes Display auszuwählen. Um Skalierungen zu vermeiden, können Sie Symbole wie folgt angeben:

        ```js
        browser.menus.create({
          icons: {
            16: "path/to/geo-16.png",
            32: "path/to/geo-32.png",
          },
        });
        ```

        Alternativ können Sie ein einzelnes SVG-Symbol angeben, und es wird entsprechend skaliert:

        ```js
        browser.menus.create({
          icons: {
            16: "path/to/geo.svg",
          },
        });
        ```

        > [!NOTE]
        > Das oberste Menüelement verwendet die im Manifest angegebenen [icons](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/icons) anstelle der mit diesem Schlüssel angegebenen.

    - `id` {{optional_inline}}
      - : `string`. Die eindeutige ID, die diesem Element zugewiesen wird. Erforderlich für Ereignisseiten. Darf nicht dieselbe wie eine andere ID dieser Erweiterung sein.
    - `onclick` {{optional_inline}}
      - : `function`. Die Funktion, die aufgerufen wird, wenn auf das Menüelement geklickt wird. Ereignisseiten können dies nicht verwenden: Stattdessen sollten sie einen Listener für {{WebExtAPIRef('menus.onClicked')}} registrieren.
    - `parentId` {{optional_inline}}
      - : `integer` oder `string`. Die ID eines übergeordneten Menüelements; dies macht das Element zu einem Kind eines zuvor hinzugefügten Elements. Hinweis: Wenn Sie mehr als ein Menüelement erstellt haben, werden die Elemente in einem Untermenü platziert. Der Elternteil des Untermenüs wird mit dem Namen der Erweiterung beschriftet.
    - `targetUrlPatterns` {{optional_inline}}
      - : `array` von `string`. Ähnlich wie `documentUrlPatterns`, aber Sie können basierend auf dem `href` von Anker-Tags und dem `src`-Attribut von img/audio/video-Tags filtern. Dieser Parameter unterstützt jedes URL-Schema, auch solche, die normalerweise in einem Übereinstimmungsmuster nicht erlaubt sind.
    - `title` {{optional_inline}}
      - : `string`. Der Text, der im Element angezeigt wird. Erforderlich, es sei denn, `type` ist "separator".

        Sie können `%s` im String verwenden. Wenn Sie dies in einem Menüelement tun und ein Text auf der Seite ausgewählt ist, wenn das Menü angezeigt wird, wird der ausgewählte Text in den Titel eingefügt. Zum Beispiel, wenn `title` ist "Übersetze '%s' ins Pig Latin" und der Benutzer wählt das Wort "cool" aus, dann das Menü aktiviert, dann wird der Titel des Menüelements sein: "Übersetze 'cool' ins Pig Latin".

        Wenn der Titel ein Kaufmanns-Und "&" enthält, wird das nächste Zeichen als Zugriffsschlüssel für das Element verwendet, und das Kaufmanns-Und wird nicht angezeigt. Ausnahmen hiervon sind:
        - Wenn das nächste Zeichen ebenfalls ein Kaufmanns-Und ist: Dann wird ein einzelnes Kaufmanns-Und angezeigt und kein Zugriffsschlüssel festgelegt. In der Praxis wird "&&" verwendet, um ein einzelnes Kaufmanns-Und anzuzeigen.
        - Wenn die nächsten Zeichen die Interpolationsanweisung "%s" sind: Dann wird das Kaufmanns-Und nicht angezeigt und kein Zugriffsschlüssel festgelegt.
        - Wenn das Kaufmanns-Und das letzte Zeichen im Titel ist: Dann wird das Kaufmanns-Und nicht angezeigt und kein Zugriffsschlüssel festgelegt.

        Nur das erste Kaufmanns-Und wird verwendet, um einen Zugriffsschlüssel festzulegen: nachfolgende Kaufmanns-Unds werden nicht angezeigt, aber es werden keine Schlüssel festgelegt. So wird "\&A and \&B" als "A and B" angezeigt und setzt "A" als Zugriffsschlüssel.

    - `type` {{optional_inline}}
      - : {{WebExtAPIRef('menus.ItemType')}}. Der Typ des Menüelements: "normal", "checkbox", "radio", "separator". Standardmäßig "normal".
    - `viewTypes` {{optional_inline}}
      - : {{WebExtAPIRef('extension.ViewType')}}. Liste der Ansichtsarten, in denen das Menüelement angezeigt wird. Standardmäßig jede Ansicht, einschließlich solcher ohne `viewType`.
    - `visible` {{optional_inline}}
      - : `boolean`. Ob das Element im Menü angezeigt wird. Standardmäßig `true`.

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise), das ohne Argumente erfüllt wird, wenn das Update erfolgreich war, oder abgelehnt wird mit einer Fehlermeldung, wenn das Update fehlschlug.

## Beispiele

Dieses Beispiel erstellt ein Menüelement und aktualisiert dann dessen Titel, wenn der Benutzer darauf klickt:

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
> Diese API basiert auf der [`chrome.contextMenus`](https://developer.chrome.com/docs/extensions/reference/api/contextMenus#method-update) API von Chromium. Diese Dokumentation ist abgeleitet von [`context_menus.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/context_menus.json) im Chromium-Code.

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
