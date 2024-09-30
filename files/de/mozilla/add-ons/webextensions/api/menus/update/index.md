---
title: menus.update()
slug: Mozilla/Add-ons/WebExtensions/API/menus/update
l10n:
  sourceCommit: b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

{{AddonSidebar}}

Aktualisiert ein zuvor erstelltes Menüelement.

Für die Kompatibilität mit anderen Browsern stellt Firefox diese Methode sowohl über den `contextMenus`-Namespace als auch über den `menus`-Namespace zur Verfügung.

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

  - : `object`. Die Eigenschaften, die aktualisiert werden sollen. Dieselben wie das `createProperties`-Objekt, das an {{WebExtAPIRef("menus.create()", "menus.create()")}} übergeben wurde, außer dass `id` nicht gesetzt werden kann. Zusätzlich können `icons` nur bei Menübefehlen geändert werden, nicht im Kontextmenü der obersten Ebene. Das Icon der obersten Ebene entspricht dem primären Icon der Erweiterung, wie es in der Manifest-Datei der Erweiterung deklariert ist.

    - `checked` {{optional_inline}}
      - : `boolean`. Der Anfangszustand eines Kontrollkästchen- oder Radio-Elements: `true` für ausgewählt und `false` für nicht ausgewählt. In einer Gruppe von Radio-Elementen kann jeweils nur ein Element ausgewählt sein.
    - `command` {{optional_inline}}

      - : `string`. Zeichenkette, die eine Aktion beschreibt, die ausgeführt werden soll, wenn der Benutzer auf das Element klickt. Anerkannte Werte sind:

        - `"_execute_browser_action"`: simuliert einen Klick auf die Browser-Aktion der Erweiterung und öffnet deren Popup, falls vorhanden (nur Manifest V2)
        - `"_execute_action"`: simuliert einen Klick auf die Aktion der Erweiterung und öffnet deren Popup, falls vorhanden (nur Manifest V3)
        - `"_execute_page_action"`: simuliert einen Klick auf die Seiten-Aktion der Erweiterung und öffnet deren Popup, falls vorhanden
        - `"_execute_sidebar_action"`: öffnet die Seitenleiste der Erweiterung

        Siehe die Dokumentation zu speziellen Tastenkombinationen im manifest.json-Schlüssel [`commands`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/commands#special_shortcuts) für Details.

        Wenn einer der anerkannten Werte angegeben wird, löst ein Klick auf das Element nicht das {{WebExtAPIRef("menus.onClicked")}}-Ereignis aus; stattdessen wird die Standardaktion ausgeführt, z. B. das Öffnen eines Popups. Andernfalls löst ein Klick auf das Element {{WebExtAPIRef("menus.onClicked")}} aus, und das Ereignis kann verwendet werden, um ein Ersatzverhalten zu implementieren.

    - `contexts` {{optional_inline}}

      - : `array` von `{{WebExtAPIRef('menus.ContextType')}}`. Array von Kontexten, in denen dieses Menüelement erscheinen wird. Wenn diese Option weggelassen wird:

        - übernimmt das Element die Kontexte seines übergeordneten Elements, wenn dieses gesetzt ist
        - andernfalls wird dem Element ein Kontextarray von \["page"] zugewiesen.

    - `documentUrlPatterns` {{optional_inline}}
      - : `array` von `string`. Ermöglicht die Einschränkung des Elements auf Dokumente, deren URL einem der angegebenen [Übereinstimmungsmuster](/de/docs/Mozilla/Add-ons/WebExtensions/Match_patterns) entspricht. Dies gilt auch für Frames.
    - `enabled` {{optional_inline}}
      - : `boolean`. Ob dieses Menüelement aktiviert oder deaktiviert ist. Standardmäßig `true`.
    - `icons` {{optional_inline}}

      - : `object`. Ein oder mehrere benutzerdefinierte Icons, die neben dem Element angezeigt werden. Benutzerdefinierte Icons können nur für Elemente in Untermenüs festgelegt werden. Diese Eigenschaft ist ein Objekt mit einer Eigenschaft für jedes bereitgestellte Icon: Der Name der Eigenschaft sollte die Größe des Icons in Pixel enthalten, und der Pfad ist relativ zum Icon aus dem Stammverzeichnis der Erweiterung. Der Browser versucht, ein 16x16 Pixel großes Icon für eine normale Anzeige oder ein 32x32 Pixel großes Icon für eine Anzeige mit hoher Dichte auszuwählen. Um eine Skalierung zu vermeiden, können Sie Icons wie folgt angeben:

        ```js
        browser.menus.create({
          icons: {
            16: "path/to/geo-16.png",
            32: "path/to/geo-32.png",
          },
        });
        ```

        Alternativ können Sie eine einzige SVG-Grafik angeben, die dann entsprechend skaliert wird:

        ```js
        browser.menus.create({
          icons: {
            16: "path/to/geo.svg",
          },
        });
        ```

        > [!NOTE]
        > Das Menüelement der obersten Ebene verwendet die [Icons](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/icons), die im Manifest angegeben sind, anstatt der mit diesem Schlüssel angegebenen.

    - `id` {{optional_inline}}
      - : `string`. Die eindeutige ID, die diesem Element zugewiesen wird. Obligatorisch für Ereignisseiten. Kann nicht identisch mit einer anderen ID dieser Erweiterung sein.
    - `onclick` {{optional_inline}}
      - : `function`. Die Funktion, die aufgerufen wird, wenn das Menüelement angeklickt wird. Ereignisseiten können dies nicht verwenden: Stattdessen sollten sie einen Listener für {{WebExtAPIRef('menus.onClicked')}} registrieren.
    - `parentId` {{optional_inline}}
      - : `integer` oder `string`. Die ID eines übergeordneten Menüelements; dies macht das Element zu einem Kind eines zuvor hinzugefügten Elements. Hinweis: Wenn Sie mehr als ein Menüelement erstellt haben, werden die Elemente in einem Untermenü platziert. Der übergeordnete Punkt des Untermenüs ist mit dem Namen der Erweiterung gekennzeichnet.
    - `targetUrlPatterns` {{optional_inline}}
      - : `array` von `string`. Ähnlich wie `documentUrlPatterns`, ermöglicht es jedoch die Filterung basierend auf dem `href` von Anker-Tags und dem `src`-Attribut von img/audio/video-Tags. Dieser Parameter unterstützt jedes URL-Schema, auch solche, die normalerweise in einem Übereinstimmungsmuster nicht erlaubt sind.
    - `title` {{optional_inline}}

      - : `string`. Der Text, der im Element angezeigt wird. Obligatorisch, es sei denn, `type` ist "separator".

        Sie können "`%s`" in der Zeichenkette verwenden. Wenn Sie dies in einem Menüelement tun und etwas Text auf der Seite ausgewählt ist, wenn das Menü angezeigt wird, wird der ausgewählte Text in den Titel interpoliert. Wenn `title` zum Beispiel "Übersetze '%s' ins Pig Latin" lautet und der Benutzer das Wort "cool" auswählt, dann das Menü aktiviert, dann wird der Titel des Menüelements lauten: "Übersetze 'cool' ins Pig Latin".

        Wenn der Titel ein "&" enthält, wird das nächste Zeichen als Zugriffstaste für das Element verwendet, und das "&" wird nicht angezeigt. Ausnahmen hiervon sind:

        - Wenn das nächste Zeichen auch ein "&" ist: dann wird ein einzelner "&" angezeigt und keine Zugriffstaste gesetzt. Effektiv wird "&&" verwendet, um ein einzelnes "&" anzuzeigen.
        - Wenn die nächsten Zeichen die Interpolationsrichtlinie "%s" sind: dann wird das "&" nicht angezeigt und es wird keine Zugriffstaste gesetzt.
        - Wenn das "&" das letzte Zeichen im Titel ist: dann wird das "&" nicht angezeigt und es wird keine Zugriffstaste gesetzt.

        Nur das erste "&" wird verwendet, um eine Zugriffstaste zu setzen: Nachfolgende "&" werden nicht angezeigt, setzen aber keine Tasten. So wird "\&A and \&B" als "A and B" angezeigt und die Taste "A" als Zugriffstaste gesetzt.

    - `type` {{optional_inline}}
      - : `{{WebExtAPIRef('menus.ItemType')}}`. Der Typ des Menüelements: "normal", "checkbox", "radio", "separator". Standardmäßig "normal".
    - `viewTypes` {{optional_inline}}
      - : `{{WebExtAPIRef('extension.ViewType')}}`. Liste der Ansichtsarten, in denen das Menüelement angezeigt wird. Standardmäßig jede Ansicht, einschließlich solcher ohne `viewType`.
    - `visible` {{optional_inline}}
      - : `boolean`. Ob das Element im Menü angezeigt wird. Standardmäßig `true`.

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise), das erfüllt wird, ohne Argumente, wenn die Aktualisierung erfolgreich war, oder abgelehnt mit einer Fehlermeldung, wenn die Aktualisierung fehlgeschlagen ist.

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
> Diese API basiert auf der [`chrome.contextMenus`](https://developer.chrome.com/docs/extensions/reference/api/contextMenus#method-update) API von Chromium. Diese Dokumentation leitet sich von [`context_menus.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/context_menus.json) im Chromium-Code ab.

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
