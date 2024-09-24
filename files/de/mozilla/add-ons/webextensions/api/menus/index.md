---
title: Menüs
slug: Mozilla/Add-ons/WebExtensions/API/menus
l10n:
  sourceCommit: b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

{{AddonSidebar}}

Fügen Sie Elemente zum Menüsystem des Browsers hinzu.

Diese API ist dem ["contextMenus"](https://developer.chrome.com/docs/extensions/reference/api/contextMenus) API von Chrome nachempfunden, das es Chrome-Erweiterungen ermöglicht, Elemente zum Kontextmenü des Browsers hinzuzufügen. Die `browser.menus` API ergänzt einige Funktionen zur API von Chrome.

Vor Firefox 55 wurde diese API ursprünglich auch `contextMenus` genannt, und dieser Name wurde als Alias beibehalten, sodass Sie `contextMenus` verwenden können, um Code zu schreiben, der in Firefox und auch in anderen Browsern funktioniert.

Um diese API zu verwenden, müssen Sie die `menus` [Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions) haben. Sie können auch den Alias `contextMenus` anstelle von `menus` verwenden, aber in diesem Fall müssen die APIs als `browser.contextMenus` aufgerufen werden.

Abgesehen von [`menus.getTargetElement()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/menus/getTargetElement) kann diese API nicht von Inhaltsskripten verwendet werden.

## Erstellen von Menüelementen

Um ein Menüelement zu erstellen, rufen Sie die Methode {{WebExtAPIRef("menus.create()")}} auf. Sie übergeben dieser Methode ein Objekt mit Optionen für das Element, einschließlich der Element-ID, des Elementtyps und der Kontexte, in denen es angezeigt werden soll.

In einer Firefox-Erweiterung mit nicht-persistenten [Hintergrundseiten](/de/docs/Mozilla/Add-ons/WebExtensions/Background_scripts) (Ereignisseiten) oder in einer beliebigen Chrome-Erweiterung rufen Sie `menus.create` innerhalb eines {{WebExtAPIRef("runtime.onInstalled")}} Listeners auf. In einer Firefox-Erweiterung mit persistenten Hintergrundseiten machen Sie einen Top-Level-Aufruf. Weitere Informationen finden Sie in {{WebExtAPIRef("menus.create()")}}.

Hören Sie auf Klicks auf Ihr Menüelement, indem Sie einen Listener zum {{WebExtAPIRef("menus.onClicked")}} Ereignis hinzufügen. Dieser Listener erhält ein {{WebExtAPIRef("menus.OnClickData")}} Objekt mit den Details des Ereignisses.

Sie können vier verschiedene Arten von Menüelementen erstellen, basierend auf dem Wert der `type` Eigenschaft, die Sie in den Optionen für `create()` angeben:

- "normal": ein Menüpunk, der nur ein Label anzeigt
- "checkbox": ein Menüpunk, der einen binären Zustand darstellt. Es wird ein Häkchen neben dem Label angezeigt. Ein Klick auf das Element wechselt das Häkchen. Der Klick-Listener erhält zwei zusätzliche Eigenschaften: "checked", die angibt, ob das Element jetzt ausgewählt ist, und "wasChecked", die angibt, ob das Element vor dem Klicken ausgewählt war.
- "radio": ein Menüpunk, der eine von mehreren Auswahlmöglichkeiten darstellt. Genau wie bei einer Checkbox wird ein Häkchen neben dem Label angezeigt, und sein Klick-Listener erhält "checked" und "wasChecked". Wenn Sie jedoch mehr als ein Radio-Element erstellen, funktionieren die Elemente als Gruppe von Radio-Elementen: Nur ein Element in der Gruppe kann ausgewählt werden, und ein Klick auf ein Element macht es zum ausgewählten Element.
- "separator": eine Linie, die eine Gruppe von Elementen trennt.

Wenn Sie mehr als ein Kontextmenüelement oder mehr als ein Werkzeugmenüelement erstellt haben, werden die Elemente in einem Untermenü platziert. Das übergeordnete Element des Untermenüs wird mit dem Namen der Erweiterung beschriftet. Zum Beispiel, hier ist eine Erweiterung namens "Menu demo", die zwei Kontextmenüelemente hinzugefügt hat:

![Kontextmenü mit zwei Elementen beschriftet mit klick mich, und klick mich auch!](menus-1.png)

## Symbole

Wenn Sie Symbole für Ihre Erweiterung mit dem ["icons" manifest-Schlüssel](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/icons) spezifiziert haben, wird Ihr Menüpunkt das angegebene Symbol neben seinem Label anzeigen. Der Browser versucht, ein 16x16 Pixel großes Symbol für eine normale Anzeige oder ein 32x32 Pixel großes Symbol für eine hochauflösende Anzeige auszuwählen:

![Kontextmenü mit zwei Elementen beschriftet mit klick mich, und klick mich auch!](menus-2.png)

Nur bei Elementen in einem Untermenü können Sie benutzerdefinierte Symbole angeben, indem Sie die `icons` Option an {{WebExtAPIRef("menus.create()")}} übergeben:

![Kontextmenü mit zwei Elementen beschriftet mit klick mich, und klick mich auch!. Die klick mich Option ist beschriftet mit einem grünen Farbeimer-Symbol. Die klick mich auch Option ist beschriftet mit einem blauen Farbeimer-Symbol.](menus-3.png)

## Beispiel

Hier ist ein Kontextmenü mit 4 Elementen: ein normales Element, zwei Radioelemente mit Trennern auf jeder Seite und eine Checkbox. Die Radioelemente sind mit benutzerdefinierten Symbolen versehen.

![Kontextmenü mit vier Elementen beschriftet mit entferne mich, Grünfärben, Blaufärben, und abwählen. Grünfärben und Blaufärben sind Radioknöpfe mit benutzerdefinierten Symbolen.](menus-4.png)

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
  - : Der Typ des Menüelements: "normal", "checkbox", "radio", "separator".
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
  - : Verbirgt alle Standard-Firefox-Menüelemente zugunsten einer benutzerdefinierten Kontextmenü-Benutzeroberfläche.
- {{WebExtAPIRef("menus.refresh()")}}
  - : Aktualisiert ein momentan angezeigtes Menü.
- {{WebExtAPIRef("menus.remove()")}}
  - : Entfernt ein Menüelement.
- {{WebExtAPIRef("menus.removeAll()")}}
  - : Entfernt alle von dieser Erweiterung hinzugefügten Menüelemente.
- {{WebExtAPIRef("menus.update()")}}
  - : Aktualisiert ein zuvor erstelltes Menüelement.

## Ereignisse

- {{WebExtAPIRef("menus.onClicked")}}
  - : Wird ausgelöst, wenn ein Menüelement angeklickt wird.
- {{WebExtAPIRef("menus.onHidden")}}
  - : Wird ausgelöst, wenn der Browser ein Menü ausblendet.
- {{WebExtAPIRef("menus.onShown")}}
  - : Wird ausgelöst, wenn der Browser ein Menü anzeigt.

## Browserkompatibilität

{{WebExtExamples("h2")}}

{{Compat}}

> [!NOTE]
> Diese API basiert auf der [`chrome.contextMenus`](https://developer.chrome.com/docs/extensions/reference/api/contextMenus) API von Chromium. Diese Dokumentation stammt aus [`context_menus.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/context_menus.json) im Chromium-Code.

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
