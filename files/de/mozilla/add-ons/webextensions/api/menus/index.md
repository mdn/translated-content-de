---
title: menus
slug: Mozilla/Add-ons/WebExtensions/API/menus
l10n:
  sourceCommit: b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

{{AddonSidebar}}

Fügen Sie Elemente zum Menüsystem des Browsers hinzu.

Diese API basiert auf Chromes [„contextMenus“](https://developer.chrome.com/docs/extensions/reference/api/contextMenus) API, welche es Chrome-Erweiterungen ermöglicht, Elemente zum Kontextmenü des Browsers hinzuzufügen. Die `browser.menus` API ergänzt die API von Chrome um einige Funktionen.

Vor Firefox 55 wurde diese API auch ursprünglich `contextMenus` genannt, und dieser Name wurde als Alias beibehalten, sodass Sie `contextMenus` verwenden können, um Code zu schreiben, der sowohl in Firefox als auch in anderen Browsern funktioniert.

Um diese API zu verwenden, müssen Sie die `menus` [Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions) haben. Sie können auch den `contextMenus`-Alias anstelle von `menus` verwenden, aber wenn Sie dies tun, müssen auf die APIs als `browser.contextMenus` zugegriffen werden.

Mit Ausnahme von [`menus.getTargetElement()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/menus/getTargetElement) kann diese API nicht von Inhalts-Skripten aus verwendet werden.

## Erstellen von Menüelementen

Um ein Menüelement zu erstellen, rufen Sie die Methode {{WebExtAPIRef("menus.create()")}} auf. Sie übergeben dieser Methode ein Objekt mit Optionen für das Element, einschließlich der Element-ID, des Elementtyps und der Kontexte, in denen es angezeigt werden soll.

In einer Firefox-Erweiterung mit nicht-persistenten [Hintergrundseiten](/de/docs/Mozilla/Add-ons/WebExtensions/Background_scripts) (Ereignisseiten) oder in einer beliebigen Chrome-Erweiterung rufen Sie `menus.create` innerhalb eines {{WebExtAPIRef("runtime.onInstalled")}}-Listeners auf. In einer Firefox-Erweiterung mit persistenten Hintergrundseiten wird ein Aufruf auf oberster Ebene gemacht. Weitere Informationen finden Sie unter {{WebExtAPIRef("menus.create()")}}.

Hören Sie auf Klicks auf Ihr Menüelement, indem Sie einen Listener zum Ereignis {{WebExtAPIRef("menus.onClicked")}} hinzufügen. Dieser Listener erhält ein Objekt vom Typ {{WebExtAPIRef("menus.OnClickData")}}, das die Details des Ereignisses enthält.

Sie können vier verschiedene Arten von Menüelementen erstellen, basierend auf dem Wert der `type`-Eigenschaft, die Sie in den Optionen zu `create()` angeben:

- „normal“: ein Menüelement, das nur ein Label anzeigt
- „checkbox“: ein Menüelement, das einen binären Zustand darstellt. Es zeigt ein Häkchen neben dem Label an. Wenn man auf das Element klickt, wird das Häkchen umgeschaltet. Der Klick-Listener erhält zwei zusätzliche Eigenschaften: „checked“, das anzeigt, ob das Element jetzt markiert ist, und „wasChecked“, das anzeigt, ob das Element vor dem Klick-Ereignis markiert war.
- „radio“: ein Menüelement, das eine von mehreren Wahlmöglichkeiten darstellt. Wie auch ein Checkboxelement, zeigt es ein Häkchen neben dem Label an, und sein Klick-Listener zeigt „checked“ und „wasChecked“ an. Wenn Sie jedoch mehr als ein Radioelement erstellen, funktionieren diese Elemente als Gruppe von Radioelementen: Nur ein Element in der Gruppe kann markiert sein, und ein Klick auf ein Element macht es zum markierten Element.
- „separator“: eine Linie, die eine Gruppe von Elementen trennt.

Wenn Sie mehr als ein Kontextmenüelement oder mehr als ein Werkzeugmenüelement erstellt haben, werden die Elemente in ein Untermenü platziert. Das Eltern-Menü des Untermenüs wird mit dem Namen der Erweiterung beschriftet. Zum Beispiel hier eine Erweiterung namens „Menu demo“, die zwei Kontextmenüelemente hinzugefügt hat:

![Kontextmenü mit zwei Elementen mit der Bezeichnung Click me und Click me too!](menus-1.png)

## Icons

Wenn Sie Icons für Ihre Erweiterung mit dem ["icons"-Manifest-Schlüssel](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/icons) angegeben haben, zeigt Ihr Menüelement das angegebene Icon neben seinem Label an. Der Browser wird versuchen, ein 16x16 Pixel großes Icon für eine normale Anzeige oder ein 32x32 Pixel großes Icon für eine Anzeige mit hoher Dichte zu wählen:

![Kontextmenü mit zwei Elementen mit der Bezeichnung Click me und Click me too!](menus-2.png)

Nur für Elemente in einem Untermenü können Sie benutzerdefinierte Icons angeben, indem Sie die `icons`-Option an {{WebExtAPIRef("menus.create()")}} übergeben:

![Kontextmenü mit zwei Elementen mit der Bezeichnung Click me und Click me too!. Die Option Click me ist mit einem grünen Farbdosensymbol gekennzeichnet. Die Option Click me too ist mit einem blauen Farbdosensymbol gekennzeichnet.](menus-3.png)

## Beispiel

Hier ist ein Kontextmenü mit 4 Elementen: ein normales Element, zwei Radioelemente mit Trennern auf jeder Seite und ein Kontrollkästchen. Die Radioelemente erhalten benutzerdefinierte Icons.

![Kontextmenü mit vier Elementen mit der Bezeichnung remove me, Greenify, Bluify und uncheck me. Greenify und Bluify sind Radiobuttons mit benutzerdefinierten Symbolen.](menus-4.png)

Sie könnten ein solches Untermenü mit einem Code wie diesem erstellen:

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
  - : Die verschiedenen Kontexte, in denen ein Menü erscheinen kann.
- {{WebExtAPIRef("menus.ItemType")}}
  - : Der Typ des Menüelements: „normal“, „checkbox“, „radio“, „separator“.
- {{WebExtAPIRef("menus.OnClickData")}}
  - : Informationen, die gesendet werden, wenn ein Menüelement angeklickt wird.

## Eigenschaften

- {{WebExtAPIRef("menus.ACTION_MENU_TOP_LEVEL_LIMIT")}}
  - : Die maximale Anzahl von Erweiterungselementen auf oberster Ebene, die zu einem Menüelement hinzugefügt werden können, dessen ContextType „browser_action“ oder „page_action“ ist.

## Funktionen

- {{WebExtAPIRef("menus.create()")}}
  - : Erstellt ein neues Menüelement.
- {{WebExtAPIRef("menus.getTargetElement()")}}
  - : Gibt das Element für eine gegebene `info.targetElementId` zurück.
- {{WebExtAPIRef("menus.overrideContext()")}}
  - : Blendet alle standardmäßigen Firefox-Menüelemente aus, um eine benutzerdefinierte Kontextmenü-Benutzeroberfläche bereitzustellen.
- {{WebExtAPIRef("menus.refresh()")}}
  - : Aktualisiert ein derzeit angezeigtes Menü.
- {{WebExtAPIRef("menus.remove()")}}
  - : Entfernt ein Menüelement.
- {{WebExtAPIRef("menus.removeAll()")}}
  - : Entfernt alle von dieser Erweiterung hinzugefügten Menüelemente.
- {{WebExtAPIRef("menus.update()")}}
  - : Aktualisiert ein zuvor erstelltes Menüelement.

## Ereignisse

- {{WebExtAPIRef("menus.onClicked")}}
  - : Wird ausgelöst, wenn auf ein Menüelement geklickt wird.
- {{WebExtAPIRef("menus.onHidden")}}
  - : Wird ausgelöst, wenn der Browser ein Menü ausblendet.
- {{WebExtAPIRef("menus.onShown")}}
  - : Wird ausgelöst, wenn der Browser ein Menü anzeigt.

## Browser-Kompatibilität

{{WebExtExamples("h2")}}

{{Compat}}

> [!NOTE]
> Diese API basiert auf Chromium's [`chrome.contextMenus`](https://developer.chrome.com/docs/extensions/reference/api/contextMenus) API. Diese Dokumentation stammt von [`context_menus.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/context_menus.json) im Chromium-Code.

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
