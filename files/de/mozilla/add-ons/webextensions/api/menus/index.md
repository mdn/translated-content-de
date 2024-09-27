---
title: menus
slug: Mozilla/Add-ons/WebExtensions/API/menus
l10n:
  sourceCommit: b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

{{AddonSidebar}}

Elemente zum Menüsystem des Browsers hinzufügen.

Diese API ist an die [„contextMenus“](https://developer.chrome.com/docs/extensions/reference/api/contextMenus) API von Chrome angelehnt, die Chrome-Erweiterungen ermöglicht, Elemente dem Kontextmenü des Browsers hinzuzufügen. Die `browser.menus` API fügt einige Funktionen zur API von Chrome hinzu.

Vor Firefox 55 wurde diese API ursprünglich auch `contextMenus` genannt, und dieser Name wurde als Alias beibehalten, sodass Sie `contextMenus` verwenden können, um Code zu schreiben, der sowohl in Firefox als auch in anderen Browsern funktioniert.

Um diese API zu nutzen, müssen Sie die `menus` [Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions) haben. Sie können auch den Alias `contextMenus` anstelle von `menus` verwenden, aber wenn Sie das tun, müssen die APIs als `browser.contextMenus` aufgerufen werden.

Abgesehen von [`menus.getTargetElement()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/menus/getTargetElement) kann diese API nicht von Content Scripts verwendet werden.

## Erstellen von Menüelementen

Um ein Menüelement zu erstellen, rufen Sie die Methode {{WebExtAPIRef("menus.create()")}} auf. Sie übergeben dieser Methode ein Objekt mit Optionen für das Element, einschließlich der Element-ID, des Elementtyps und der Kontexte, in denen es angezeigt werden soll.

In einer Firefox-Erweiterung, die nicht-persistente [Hintergrundseiten](/de/docs/Mozilla/Add-ons/WebExtensions/Background_scripts) (Ereignisseiten) verwendet, oder in jeder Chrome-Erweiterung rufen Sie `menus.create` innerhalb eines {{WebExtAPIRef("runtime.onInstalled")}} Listeners auf. In einer Firefox-Erweiterung, die persistente Hintergrundseiten verwendet, führen Sie einen Aufruf auf oberster Ebene aus. Weitere Informationen finden Sie unter {{WebExtAPIRef("menus.create()")}}.

Hören Sie auf Klicks auf Ihr Menüelement, indem Sie einen Listener zum {{WebExtAPIRef("menus.onClicked")}} Ereignis hinzufügen. Dieser Listener erhält ein {{WebExtAPIRef("menus.OnClickData")}} Objekt, das die Details des Ereignisses enthält.

Sie können vier verschiedene Arten von Menüelementen erstellen, basierend auf dem Wert der `type`-Eigenschaft, die Sie in den Optionen für `create()` angeben:

- "normal": ein Menüelement, das nur ein Label anzeigt
- "checkbox": ein Menüelement, das einen binären Zustand darstellt. Es zeigt ein Häkchen neben dem Label an. Ein Klick auf das Element schaltet das Häkchen um. Der Klick-Listener erhält zwei zusätzliche Eigenschaften: "checked", was angibt, ob das Element jetzt angehakt ist, und "wasChecked", was angibt, ob das Element vor dem Klickereignis angehakt war.
- "radio": ein Menüelement, das eine von mehreren Auswahlmöglichkeiten darstellt. Genau wie ein Kontrollkästchen zeigt es auch ein Häkchen neben dem Label an, und sein Klick-Listener erhält "checked" und "wasChecked". Wenn Sie jedoch mehr als ein Radioelement erstellen, fungieren die Elemente als Gruppe von Radioelementen: Nur ein Element in der Gruppe kann angehakt sein, und ein Klick auf ein Element macht es zum angehakten Element.
- "separator": eine Linie, die eine Gruppe von Elementen trennt.

Wenn Sie mehr als ein Kontextmenüelement oder mehr als ein Werkzeuge-Menüelement erstellt haben, werden die Elemente in einem Untermenü platziert. Das übergeordnete Element des Untermenüs wird mit dem Namen der Erweiterung beschriftet. Zum Beispiel hier eine Erweiterung namens "Menu demo", die zwei Kontextmenüelemente hinzugefügt hat:

![Kontextmenü mit zwei Elementen mit den Labels click me und click me too!](menus-1.png)

## Icons

Wenn Sie für Ihre Erweiterung Icons mit dem ["icons" Manifest-Schlüssel](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/icons) spezifiziert haben, zeigt Ihr Menüelement das angegebene Icon neben seinem Label an. Der Browser versucht, ein 16x16 Pixel großes Icon für eine normale Anzeige oder ein 32x32 Pixel großes Icon für eine Hochauflösungsanzeige auszuwählen:

![Kontextmenü mit zwei Elementen mit den Labels click me und click me too!](menus-2.png)

Nur für Elemente in einem Untermenü können Sie benutzerdefinierte Icons angeben, indem Sie die `icons` Option an {{WebExtAPIRef("menus.create()")}} übergeben:

![Kontextmenü mit zwei Elementen mit den Labels click me und click me too!. Die click me Option ist mit einem grünen Farbdosen-Symbol gekennzeichnet. Die click me too Option ist mit einem blauen Farbdosen-Symbol gekennzeichnet.](menus-3.png)

## Beispiel

Hier ist ein Kontextmenü mit 4 Elementen: ein normales Element, zwei Radioelemente mit Trennlinien auf jeder Seite und ein Kontrollkästchen. Die Radioelemente sind mit benutzerdefinierten Icons versehen.

![Kontextmenü mit vier Elementen mit den Labels remove me, Greenify, Bluify und uncheck me. Greenify und Bluify sind Radioknöpfe mit benutzerdefinierten Icons.](menus-4.png)

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
  - : Die verschiedenen Kontexte, in denen ein Menü erscheinen kann.
- {{WebExtAPIRef("menus.ItemType")}}
  - : Der Typ eines Menüelements: "normal", "checkbox", "radio", "separator".
- {{WebExtAPIRef("menus.OnClickData")}}
  - : Informationen, die gesendet werden, wenn ein Menüelement angeklickt wird.

## Eigenschaften

- {{WebExtAPIRef("menus.ACTION_MENU_TOP_LEVEL_LIMIT")}}
  - : Die maximale Anzahl von obersten Erweiterungselementen, die zu einem Menüelement hinzugefügt werden können, dessen ContextType "browser_action" oder "page_action" ist.

## Funktionen

- {{WebExtAPIRef("menus.create()")}}
  - : Erstellt ein neues Menüelement.
- {{WebExtApiRef("menus.getTargetElement()")}}
  - : Gibt das Element für eine gegebene `info.targetElementId` zurück.
- {{WebExtApiRef("menus.overrideContext()")}}
  - : Alle standardmäßigen Firefox-Menüelemente verbergen, um eine benutzerdefinierte Kontextmenü-Benutzeroberfläche bereitzustellen.
- {{WebExtAPIRef("menus.refresh()")}}
  - : Ein derzeit angezeigtes Menü aktualisieren.
- {{WebExtAPIRef("menus.remove()")}}
  - : Entfernt ein Menüelement.
- {{WebExtAPIRef("menus.removeAll()")}}
  - : Entfernt alle von dieser Erweiterung hinzugefügten Menüelemente.
- {{WebExtAPIRef("menus.update()")}}
  - : Ein zuvor erstelltes Menüelement aktualisieren.

## Ereignisse

- {{WebExtAPIRef("menus.onClicked")}}
  - : Wird ausgelöst, wenn ein Menüelement angeklickt wird.
- {{WebExtAPIRef("menus.onHidden")}}
  - : Wird ausgelöst, wenn der Browser ein Menü verbirgt.
- {{WebExtAPIRef("menus.onShown")}}
  - : Wird ausgelöst, wenn der Browser ein Menü anzeigt.

## Browser-Kompatibilität

{{WebExtExamples("h2")}}

{{Compat}}

> [!NOTE]
> Diese API basiert auf der Chromium-API [`chrome.contextMenus`](https://developer.chrome.com/docs/extensions/reference/api/contextMenus). Diese Dokumentation stammt von [`context_menus.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/context_menus.json) im Chromium-Code.

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
