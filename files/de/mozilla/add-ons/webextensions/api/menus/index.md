---
title: menus
slug: Mozilla/Add-ons/WebExtensions/API/menus
l10n:
  sourceCommit: 09109b6f9444d22215ba330ec1e64e73980b2a6c
---

Fügen Sie der Menüstruktur des Browsers Elemente hinzu.

Diese API basiert auf der Chrome-API ["contextMenus"](https://developer.chrome.com/docs/extensions/reference/api/contextMenus), mit der Chrome-Erweiterungen Elemente zum Kontextmenü des Browsers hinzufügen können. Die `browser.menus` API fügt der Chrome-API einige Funktionen hinzu.

Vor Firefox 55 wurde diese API ebenfalls ursprünglich `contextMenus` genannt, und dieser Name wurde als Alias beibehalten, sodass Sie `contextMenus` verwenden können, um Code zu schreiben, der sowohl in Firefox als auch in anderen Browsern funktioniert.

Um diese API zu verwenden, benötigen Sie die `menus` [Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions). Sie können auch den Alias `contextMenus` anstelle von `menus` verwenden, aber in diesem Fall müssen die APIs als `browser.contextMenus` aufgerufen werden.

Mit Ausnahme von [`menus.getTargetElement()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/menus/getTargetElement) kann diese API nicht von Inhalteskripten verwendet werden.

## Erstellen von Menüelementen

Um ein Menüelement zu erstellen, rufen Sie die Methode {{WebExtAPIRef("menus.create()")}} auf. Sie übergeben dieser Methode ein Objekt, das Optionen für das Element enthält, einschließlich der Element-ID, des Elementtyps und der Kontexte, in denen es angezeigt werden soll.

In einer Firefox-Erweiterung, die nicht-persistente [Hintergrundseiten](/de/docs/Mozilla/Add-ons/WebExtensions/Background_scripts) (Ereignisseiten) verwendet oder in einer beliebigen Chrome-Erweiterung rufen Sie `menus.create` innerhalb eines {{WebExtAPIRef("runtime.onInstalled")}} Listeners auf. In einer Firefox-Erweiterung, die persistente Hintergrundseiten verwendet, machen Sie einen Aufruf auf höchster Ebene. Siehe {{WebExtAPIRef("menus.create()")}} für weitere Informationen.

Hören Sie auf Klicks auf Ihr Menüelement, indem Sie einen Listener zum {{WebExtAPIRef("menus.onClicked")}} Ereignis hinzufügen. Dieser Listener wird mit einem {{WebExtAPIRef("menus.OnClickData")}} Objekt aufgerufen, das die Details des Ereignisses enthält.

Sie können vier verschiedene Arten von Menüpunkten erstellen, basierend auf dem Wert der `type` Eigenschaft, die Sie in den Optionen an `create()` übergeben:

- "normal": ein Menüpunkt, der einfach nur ein Label anzeigt
- "checkbox": ein Menüpunkt, der einen binären Zustand darstellt. Es zeigt ein Häkchen neben dem Label an. Ein Klick auf das Element schaltet das Häkchen um. Der Klick-Listener erhält zwei zusätzliche Eigenschaften: "checked", die anzeigt, ob das Element jetzt angehakt ist, und "wasChecked", die anzeigt, ob das Element vor dem Klickereignis angehakt war.
- "radio": ein Menüpunkt, der eine Auswahl aus einer Gruppe von Möglichkeiten darstellt. Genau wie ein Kontrollkästchen zeigt es ein Häkchen neben dem Label an und sein Klick-Listener erhält "checked" und "wasChecked". Wenn Sie jedoch mehr als ein Radio-Element erstellen, funktionieren die Elemente als Gruppe von Radio-Elementen: Nur ein Element in der Gruppe kann angehakt sein und ein Klick auf ein Element macht es zum angehakten Element.
- "separator": eine Linie, die eine Gruppe von Elementen trennt.

Wenn Sie mehr als ein Kontextmenüelement oder mehr als ein Werkzeugmenüelement erstellt haben, werden die Elemente in einem Untermenü platziert. Das Untermenü wird mit dem Namen der Erweiterung gekennzeichnet. Zum Beispiel finden Sie hier eine Erweiterung namens "Menu demo", die zwei Kontextmenüelemente hinzugefügt hat:

![Kontextmenü mit zwei Elementen mit den Beschriftungen Please click me und Please click me too!](menus-1.png)

## Icons

Wenn Sie für Ihre Erweiterung Icons mit dem ["icons" Manifest-Key](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/icons) angegeben haben, wird Ihr Menüelement das angegebene Icon neben seinem Label anzeigen. Der Browser versucht, ein 16x16 Pixel großes Icon für eine normale Anzeige oder ein 32x32 Pixel großes Icon für eine hochauflösende Anzeige auszuwählen:

![Kontextmenü mit zwei Elementen mit den Beschriftungen Please click me und Please click me too!](menus-2.png)

Nur für Elemente in einem Untermenü können Sie benutzerdefinierte Icons angeben, indem Sie die Option `icons` an {{WebExtAPIRef("menus.create()")}} übergeben:

![Kontextmenü mit zwei Elementen mit den Beschriftungen Please click me und Please click me too!. Die Option Please click me ist mit einem grünen Farbeimer-Icon gekennzeichnet. Die Option Please click me too ist mit einem blauen Farbeimer-Icon gekennzeichnet.](menus-3.png)

## Beispiel

Hier ist ein Kontextmenü mit 4 Elementen: ein normales Element, zwei Radio-Elemente mit Trennzeichen auf jeder Seite und ein Kontrollkästchen. Die Radio-Elemente haben benutzerdefinierte Icons.

![Kontextmenü mit vier Elementen mit den Beschriftungen Please remove me, Greenify, Bluify und Please uncheck me. Greenify und Bluify sind Radiobuttons mit benutzerdefinierten Icons.](menus-4.png)

Sie könnten ein solches Untermenü mit folgendem Code erstellen:

```js
browser.menus.create(
  {
    id: "remove-me",
    title: browser.i18n.getMessage("menuItemRemoveMe"),
    contexts: ["all"],
  },
  onCreated,
);

browser.menus.create(
  {
    id: "separator-1",
    type: "separator",
    contexts: ["all"],
  },
  onCreated,
);

browser.menus.create(
  {
    id: "greenify",
    type: "radio",
    title: browser.i18n.getMessage("menuItemGreenify"),
    contexts: ["all"],
    checked: true,
    icons: {
      16: "icons/paint-green-16.png",
      32: "icons/paint-green-32.png",
    },
  },
  onCreated,
);

browser.menus.create(
  {
    id: "bluify",
    type: "radio",
    title: browser.i18n.getMessage("menuItemBluify"),
    contexts: ["all"],
    checked: false,
    icons: {
      16: "icons/paint-blue-16.png",
      32: "icons/paint-blue-32.png",
    },
  },
  onCreated,
);

browser.menus.create(
  {
    id: "separator-2",
    type: "separator",
    contexts: ["all"],
  },
  onCreated,
);

let checkedState = true;

browser.menus.create(
  {
    id: "check-uncheck",
    type: "checkbox",
    title: browser.i18n.getMessage("menuItemUncheckMe"),
    contexts: ["all"],
    checked: checkedState,
  },
  onCreated,
);
```

## Typen

- {{WebExtAPIRef("menus.ContextType")}}
  - : Die verschiedenen Kontexte, in denen ein Menü angezeigt werden kann.
- {{WebExtAPIRef("menus.ItemType")}}
  - : Der Typ des Menüpunkts: "normal", "checkbox", "radio", "separator".
- {{WebExtAPIRef("menus.OnClickData")}}
  - : Informationen, die gesendet werden, wenn ein Menüpunkt angeklickt wird.

## Eigenschaften

- {{WebExtAPIRef("menus.ACTION_MENU_TOP_LEVEL_LIMIT")}}
  - : Die maximale Anzahl von obersten Erweiterungselementen, die zu einem Menüpunkt hinzugefügt werden können, dessen ContextType "browser_action" oder "page_action" ist.

## Funktionen

- {{WebExtAPIRef("menus.create()")}}
  - : Erstellt ein neues Menüelement.
- {{WebExtApiRef("menus.getTargetElement()")}}
  - : Gibt das Element für eine gegebene `info.targetElementId` zurück.
- {{WebExtApiRef("menus.overrideContext()")}}
  - : Verbirgt alle standardmäßigen Firefox-Menüpunkte zugunsten eines benutzerdefinierten Kontextmenü-UI.
- {{WebExtAPIRef("menus.refresh()")}}
  - : Aktualisiert ein Menü, das derzeit angezeigt wird.
- {{WebExtAPIRef("menus.remove()")}}
  - : Entfernt ein Menüelement.
- {{WebExtAPIRef("menus.removeAll()")}}
  - : Entfernt alle von dieser Erweiterung hinzugefügten Menüpunkte.
- {{WebExtAPIRef("menus.update()")}}
  - : Aktualisiert ein zuvor erstelltes Menüelement.

## Ereignisse

- {{WebExtAPIRef("menus.onClicked")}}
  - : Wird ausgelöst, wenn ein Menüpunkt angeklickt wird.
- {{WebExtAPIRef("menus.onHidden")}}
  - : Wird ausgelöst, wenn der Browser ein Menü verbirgt.
- {{WebExtAPIRef("menus.onShown")}}
  - : Wird ausgelöst, wenn der Browser ein Menü anzeigt.

{{WebExtExamples("h2")}}

## Browser-Kompatibilität

{{Compat}}

> [!NOTE]
> Diese API basiert auf der [`chrome.contextMenus`](https://developer.chrome.com/docs/extensions/reference/api/contextMenus) API von Chromium. Diese Dokumentation leitet sich von [`context_menus.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/context_menus.json) im Chromium-Code ab.

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
