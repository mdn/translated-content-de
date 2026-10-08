---
title: menus.create()
slug: Mozilla/Add-ons/WebExtensions/API/menus/create
l10n:
  sourceCommit: 674fbb492c76a45adf433810f0f5737a0405bd9c
---

Erstellt einen Menüeintrag anhand eines Optionsobjekts, das dessen Eigenschaften festlegt.

Anders als andere asynchrone Funktionen gibt diese Methode kein Promise zurück. Stattdessen kann sie über einen optionalen Callback Erfolg oder Fehlschlag melden. Das liegt daran, dass ihr Rückgabewert die ID des neuen Eintrags ist.

Aus Gründen der Kompatibilität mit anderen Browsern stellt Firefox diese Methode sowohl im Namespace `contextMenus` als auch im Namespace `menus` bereit. Über den Namespace `contextMenus` können jedoch keine Einträge für das Werkzeugmenü (`contexts: ["tools_menu"]`) erstellt werden.

> **Menüs in Erweiterungen mit und ohne persistente Hintergrundseiten erstellen**
>
> Wie Sie Menüeinträge erstellen, hängt davon ab, ob Ihre Erweiterung Folgendes verwendet:
>
> - nicht persistente Hintergrundseiten (eine Ereignisseite), bei denen Menüs über Neustarts des Browsers und der Erweiterung hinweg erhalten bleiben. Rufen Sie `menus.create` (mit einer menüspezifischen ID) innerhalb eines {{WebExtAPIRef("runtime.onInstalled")}}-Listeners auf. So vermeiden Sie wiederholte Versuche, den Menüeintrag bei jedem Neustart der Seiten zu erstellen, wie es bei einem Aufruf auf oberster Ebene der Fall wäre.
> - persistente Hintergrundseiten:
>   - In Chrome bleiben Menüeinträge aus persistenten Hintergrundseiten erhalten. Erstellen Sie Ihre Menüs in einem {{WebExtAPIRef("runtime.onInstalled")}}-Listener.
>   - In Firefox bleiben Menüeinträge aus persistenten Hintergrundseiten nie erhalten. Rufen Sie `menus.create` ohne Bedingung auf oberster Ebene auf, um die Menüeinträge zu registrieren.
>
> Weitere Informationen finden Sie unter [Die Erweiterung initialisieren](/de/docs/Mozilla/Add-ons/WebExtensions/Background_scripts#initialize_the_extension) auf der Seite zu Hintergrundskripten und unter [Ereignisgesteuerte Hintergrundskripte](https://extensionworkshop.com/documentation/develop/manifest-v3-migration-guide/#event-driven-background-scripts) im Extension Workshop.

## Syntax

```js-nolint
browser.menus.create(
  createProperties, // object
  () => {/* … */}   // optional function
)
```

### Parameter

- `createProperties`
  - : `object`. Eigenschaften des neuen Menüeintrags.
    - `checked` {{optional_inline}}
      - : `boolean`. Der Anfangszustand eines Kontrollkästchen- oder Optionsfeld-Eintrags: `true` für ausgewählt und `false` für nicht ausgewählt. Innerhalb einer Gruppe von Optionsfeld-Einträgen kann jeweils nur ein Eintrag ausgewählt sein.
    - `command` {{optional_inline}}
      - : `string`. Zeichenfolge, die eine Aktion beschreibt, die beim Anklicken des Eintrags ausgeführt werden soll. Folgende Werte werden erkannt:
        - `"_execute_browser_action"`: Simuliert einen Klick auf die Browser-Aktion der Erweiterung und öffnet gegebenenfalls deren Popup (nur Manifest V2).
        - `"_execute_action"`: Simuliert einen Klick auf die Aktion der Erweiterung und öffnet gegebenenfalls deren Popup (nur Manifest V3).
        - `"_execute_page_action"`: Simuliert einen Klick auf die Seitenaktion der Erweiterung und öffnet gegebenenfalls deren Popup.
        - `"_execute_sidebar_action"`: Öffnet die Seitenleiste der Erweiterung.

        Einzelheiten finden Sie in der Dokumentation zu speziellen Tastenkombinationen beim manifest.json-Schlüssel [`commands`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/commands#special_shortcuts).

        Wenn einer der erkannten Werte angegeben ist, löst ein Klick auf den Eintrag nicht das Ereignis {{WebExtAPIRef("menus.onClicked")}} aus. Stattdessen wird die Standardaktion ausgeführt, beispielsweise das Öffnen eines Popups. Andernfalls löst ein Klick auf den Eintrag {{WebExtAPIRef("menus.onClicked")}} aus; dieses Ereignis kann zur Implementierung eines alternativen Verhaltens verwendet werden.

    - `contexts` {{optional_inline}}
      - : `array` von {{WebExtAPIRef('menus.ContextType')}}. Array der Kontexte, in denen dieser Menüeintrag erscheint. Wenn diese Option weggelassen wird:
        - Erbt der Eintrag die Kontexte seines übergeordneten Eintrags, sofern für diesen Kontexte festgelegt sind.
        - Andernfalls erhält der Eintrag das Kontext-Array \["page"].

    - `documentUrlPatterns` {{optional_inline}}
      - : `array` von `string`. Beschränkt den Eintrag auf Dokumente, deren URL mit einem der angegebenen [Übereinstimmungsmuster](/de/docs/Mozilla/Add-ons/WebExtensions/Match_patterns) übereinstimmt. Dies gilt auch für Frames.
    - `enabled` {{optional_inline}}
      - : `boolean`. Gibt an, ob dieser Menüeintrag aktiviert oder deaktiviert ist. Der Standardwert ist `true`.
    - `icons` {{optional_inline}}
      - : `object`. Ein oder mehrere benutzerdefinierte Symbole, die neben dem Eintrag angezeigt werden. Benutzerdefinierte Symbole können nur für Einträge in Untermenüs festgelegt werden. Diese Eigenschaft ist ein Objekt mit einer Eigenschaft für jedes bereitgestellte Symbol: Der Eigenschaftsname sollte die Größe des Symbols in Pixeln angeben; der Pfad zum Symbol ist relativ zum Stammverzeichnis der Erweiterung. Der Browser versucht, für eine normale Anzeige ein Symbol mit 16 × 16 Pixeln und für eine Anzeige mit hoher Pixeldichte eines mit 32 × 32 Pixeln auszuwählen. Um eine Skalierung zu vermeiden, können Sie Symbole wie folgt angeben:

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
        > Der Menüeintrag auf oberster Ebene verwendet die im Manifest angegebenen [Symbole](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/icons) und nicht die mit diesem Schlüssel festgelegten.

    - `id` {{optional_inline}}
      - : `string`. Die eindeutige ID, die diesem Eintrag zugewiesen wird. Für nicht persistente [Hintergrundseiten (Ereignisseiten)](/de/docs/Mozilla/Add-ons/WebExtensions/Background_scripts) in Manifest V2 und in Manifest V3 ist sie erforderlich. Sie darf nicht mit einer anderen ID dieser Erweiterung übereinstimmen.
    - `onclick` {{optional_inline}}
      - : `function`. Die Funktion, die beim Anklicken des Menüeintrags aufgerufen wird. Ereignisseiten können diese Eigenschaft nicht verwenden; stattdessen sollten sie einen Listener für {{WebExtAPIRef('menus.onClicked')}} registrieren.
    - `parentId` {{optional_inline}}
      - : `integer` oder `string`. Die ID eines übergeordneten Menüeintrags; dadurch wird der Eintrag einem zuvor hinzugefügten Eintrag untergeordnet. Hinweis: Wenn Sie mehr als einen Menüeintrag erstellt haben, werden die Einträge in einem Untermenü platziert. Der übergeordnete Eintrag des Untermenüs trägt den Namen der Erweiterung.
    - `targetUrlPatterns` {{optional_inline}}
      - : `array` von `string`. Ähnlich wie `documentUrlPatterns`, ermöglicht aber die Filterung anhand von `href` bei Anker-Tags und des `src`-Attributs bei img/audio/video-Tags. Dieser Parameter unterstützt jedes URL-Schema, auch solche, die in Übereinstimmungsmustern normalerweise nicht zulässig sind.
    - `title` {{optional_inline}}
      - : `string`. Der Text, der im Eintrag angezeigt wird. Erforderlich, sofern `type` nicht "separator" ist.

        Sie können `%s` in der Zeichenfolge verwenden. Wenn Sie dies bei einem Menüeintrag tun und beim Anzeigen des Menüs Text auf der Seite ausgewählt ist, wird der ausgewählte Text in den Titel eingefügt. Wenn `title` beispielsweise "Translate '%s' to Pig Latin" lautet und der Benutzer das Wort "cool" auswählt und dann das Menü öffnet, lautet der Titel des Menüeintrags: "Translate 'cool' to Pig Latin".

        Wenn der Titel ein kaufmännisches Und-Zeichen "&" enthält, wird das folgende Zeichen als Zugriffstaste für den Eintrag verwendet und das kaufmännische Und-Zeichen nicht angezeigt. Ausnahmen sind:
        - Wenn das nächste Zeichen ebenfalls ein kaufmännisches Und-Zeichen ist, wird ein einzelnes kaufmännisches Und-Zeichen angezeigt und keine Zugriffstaste festgelegt. Mit "&&" lässt sich also ein einzelnes kaufmännisches Und-Zeichen anzeigen.
        - Wenn die nächsten Zeichen die Einfügeanweisung "%s" sind, wird das kaufmännische Und-Zeichen nicht angezeigt und keine Zugriffstaste festgelegt.
        - Wenn das kaufmännische Und-Zeichen das letzte Zeichen im Titel ist, wird es nicht angezeigt und keine Zugriffstaste festgelegt.

        Nur das erste kaufmännische Und-Zeichen wird zum Festlegen einer Zugriffstaste verwendet: Nachfolgende kaufmännische Und-Zeichen werden nicht angezeigt, legen aber auch keine Zugriffstasten fest. So wird "\&A and \&B" als "A and B" angezeigt und "A" als Zugriffstaste festgelegt.

        In einigen lokalisierten Versionen von Firefox (Japanisch und Chinesisch) wird die Zugriffstaste in Klammern gesetzt und an die Menübeschriftung angehängt, _es sei denn_, der Menütitel endet bereits mit der Zugriffstaste (zum Beispiel `"toolkit(&K)"`). Weitere Einzelheiten finden Sie unter [Firefox-Bug 1647373](https://bugzil.la/1647373).

    - `type` {{optional_inline}}
      - : {{WebExtAPIRef('menus.ItemType')}}. Der Typ des Menüeintrags: "normal", "checkbox", "radio" oder "separator". Der Standardwert ist "normal".
    - `viewTypes` {{optional_inline}}
      - : {{WebExtAPIRef('extension.ViewType')}}. Liste der Ansichtstypen, in denen der Menüeintrag angezeigt wird. Standardmäßig wird er in allen Ansichten angezeigt, auch in solchen ohne `viewType`.
    - `visible` {{optional_inline}}
      - : `boolean`. Gibt an, ob der Eintrag im Menü angezeigt wird. Der Standardwert ist `true`.

- `callback` {{optional_inline}}
  - : `function`. Wird aufgerufen, wenn der Eintrag erstellt wurde. Falls beim Erstellen Probleme aufgetreten sind, stehen Einzelheiten unter {{WebExtAPIRef('runtime.lastError')}} zur Verfügung.

### Rückgabewert

`integer` oder `string`. Die `ID` des neu erstellten Eintrags.

## Beispiele

Dieses Beispiel erstellt einen Kontextmenüeintrag, der angezeigt wird, wenn der Benutzer Text auf der Seite ausgewählt hat. Der ausgewählte Text wird lediglich in der Konsole protokolliert:

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

Dieses Beispiel fügt zwei Optionsfeld-Einträge hinzu, mit denen Sie der Seite einen grünen oder blauen Rahmen geben können. Für dieses Beispiel ist die [Berechtigung `activeTab`](/de/docs/Mozilla/Add-ons/WebExtensions/activeTab_permission) erforderlich.

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
> Diese API basiert auf der API [`chrome.contextMenus`](https://developer.chrome.com/docs/extensions/reference/api/contextMenus#method-create) von Chromium. Diese Dokumentation wurde aus [`context_menus.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/context_menus.json) im Chromium-Code abgeleitet.

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
