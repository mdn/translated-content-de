---
title: menus
slug: Mozilla/Add-ons/WebExtensions/API/menus
l10n:
  sourceCommit: 3116241f515352d336d2edb460cebfe99d43aea7
---

Fügen Sie dem Menüsystem des Browsers Einträge hinzu.

Diese API orientiert sich an Chromes ["contextMenus"-API](https://developer.chrome.com/docs/extensions/reference/api/contextMenus), mit der Chrome-Erweiterungen Einträge zum Kontextmenü des Browsers hinzufügen können. Die `browser.menus`-API erweitert Chromes API um einige Funktionen.

Vor Firefox 55 hieß diese API ebenfalls `contextMenus`. Dieser Name wurde als Alias beibehalten, sodass Sie mit `contextMenus` Code schreiben können, der sowohl in Firefox als auch in anderen Browsern funktioniert.

Um diese API zu verwenden, benötigen Sie die [Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions) `menus`. Sie können statt `menus` auch den Alias `contextMenus` verwenden. In diesem Fall müssen Sie über `browser.contextMenus` auf die APIs zugreifen.

Mit Ausnahme von [`menus.getTargetElement()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/menus/getTargetElement) kann diese API nicht in Content-Skripten verwendet werden.

## Menüeinträge erstellen

Um einen Menüeintrag zu erstellen, rufen Sie die Methode {{WebExtAPIRef("menus.create()")}} auf. Sie übergeben ihr ein Objekt mit Optionen für den Eintrag, darunter seine ID, sein Typ und die Kontexte, in denen er angezeigt werden soll.

In einer Firefox-Erweiterung mit nicht persistenten [Hintergrundseiten](/de/docs/Mozilla/Add-ons/WebExtensions/Background_scripts) (Event Pages) oder in jeder Chrome-Erweiterung rufen Sie `menus.create` innerhalb eines Listeners für {{WebExtAPIRef("runtime.onInstalled")}} auf. In einer Firefox-Erweiterung mit persistenten Hintergrundseiten erfolgt der Aufruf auf oberster Ebene. Weitere Informationen finden Sie unter {{WebExtAPIRef("menus.create()")}}.

Um auf Klicks auf Ihren Menüeintrag zu reagieren, fügen Sie einen Listener für das Ereignis {{WebExtAPIRef("menus.onClicked")}} hinzu. Dieser Listener erhält ein {{WebExtAPIRef("menus.OnClickData")}}-Objekt mit Details zum Ereignis.

Sie können vier verschiedene Arten von Menüeinträgen erstellen, abhängig vom Wert der Eigenschaft `type`, die Sie in den Optionen an `create()` übergeben:

- "normal": ein Menüeintrag, der lediglich eine Beschriftung anzeigt
- "checkbox": ein Menüeintrag, der einen binären Zustand darstellt. Neben der Beschriftung wird ein Häkchen angezeigt. Ein Klick auf den Eintrag schaltet das Häkchen um. Der Klick-Listener erhält zwei zusätzliche Eigenschaften: "checked" gibt an, ob der Eintrag jetzt markiert ist, und "wasChecked", ob er vor dem Klick markiert war.
- "radio": ein Menüeintrag, der eine von mehreren Auswahlmöglichkeiten darstellt. Wie bei einer Checkbox wird neben der Beschriftung ein Häkchen angezeigt, und der Klick-Listener erhält "checked" und "wasChecked". Wenn Sie jedoch mehrere Radio-Einträge erstellen, bilden diese eine Gruppe: Nur ein Eintrag der Gruppe kann markiert sein, und durch Klicken auf einen Eintrag wird dieser markiert.
- "separator": eine Linie, die Gruppen von Einträgen trennt.

Wenn Sie mehr als einen Kontextmenüeintrag oder mehr als einen Eintrag im Menü „Extras“ erstellt haben, werden die Einträge in einem Untermenü angeordnet. Das übergeordnete Menü trägt den Namen der Erweiterung. Hier sehen Sie beispielsweise eine Erweiterung namens „Menu demo“, die zwei Kontextmenüeinträge hinzugefügt hat:

![Kontextmenü mit einem Untermenü namens „Menu demo“, das zwei Einträge mit den Beschriftungen „Click me!“ und „Click me, too!“ enthält](menus-1.png)

## Icons

Wenn Sie für Ihre Erweiterung über den [Manifest-Schlüssel "icons"](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/icons) Icons festgelegt haben, wird das angegebene Icon neben der Beschriftung Ihres Menüeintrags angezeigt. Der Browser versucht, für eine normale Anzeige ein 16 × 16 Pixel großes Icon und für eine Anzeige mit hoher Pixeldichte ein 32 × 32 Pixel großes Icon auszuwählen:

![Kontextmenü mit einem durch das Icon der Erweiterung gekennzeichneten Untermenü namens „Menu demo“, das zwei Einträge mit den Beschriftungen „Click me!“ und „Click me, too!“ enthält](menus-2.png)

Nur für Einträge in einem Untermenü können Sie eigene Icons festlegen, indem Sie die Option `icons` an {{WebExtAPIRef("menus.create()")}} übergeben:

![Kontextmenü mit zwei Einträgen mit den Beschriftungen „Click me!“ und „Click me, too!“. Der Eintrag „Click me!“ hat ein grünes Farbeimer-Icon, der Eintrag „Click me, too!“ ein blaues.](menus-3.png)

## Beispiel

Hier sehen Sie ein Kontextmenü mit vier Einträgen: einem normalen Eintrag, zwei Radio-Einträgen mit Trennlinien auf beiden Seiten und einer Checkbox. Die Radio-Einträge haben eigene Icons.

![Kontextmenü mit vier Einträgen mit den Beschriftungen „Remove me!“, „Greenify“, „Bluify“ und „Uncheck me“. „Greenify“ und „Bluify“ sind Radio-Einträge mit eigenen Icons.](menus-4.png)

Ein solches Untermenü können Sie mit folgendem Code erstellen:

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
  - : Der Typ eines Menüeintrags: "normal", "checkbox", "radio", "separator".
- {{WebExtAPIRef("menus.OnClickData")}}
  - : Informationen, die beim Klicken auf einen Menüeintrag übermittelt werden.

## Eigenschaften

- {{WebExtAPIRef("menus.ACTION_MENU_TOP_LEVEL_LIMIT")}}
  - : Die maximale Anzahl von Erweiterungseinträgen auf oberster Ebene, die einem Menü mit dem ContextType "browser_action" oder "page_action" hinzugefügt werden können.

## Funktionen

- {{WebExtAPIRef("menus.create()")}}
  - : Erstellt einen neuen Menüeintrag.
- {{WebExtApiRef("menus.getTargetElement()")}}
  - : Gibt das Element für eine bestimmte `info.targetElementId` zurück.
- {{WebExtApiRef("menus.overrideContext()")}}
  - : Blendet alle standardmäßigen Firefox-Menüeinträge aus, damit eine eigene Kontextmenüoberfläche bereitgestellt werden kann.
- {{WebExtAPIRef("menus.refresh()")}}
  - : Aktualisiert ein Menü, das gerade angezeigt wird.
- {{WebExtAPIRef("menus.remove()")}}
  - : Entfernt einen Menüeintrag.
- {{WebExtAPIRef("menus.removeAll()")}}
  - : Entfernt alle von dieser Erweiterung hinzugefügten Menüeinträge.
- {{WebExtAPIRef("menus.update()")}}
  - : Aktualisiert einen zuvor erstellten Menüeintrag.

## Ereignisse

- {{WebExtAPIRef("menus.onClicked")}}
  - : Wird ausgelöst, wenn auf einen Menüeintrag geklickt wird.
- {{WebExtAPIRef("menus.onHidden")}}
  - : Wird ausgelöst, wenn der Browser ein Menü ausblendet.
- {{WebExtAPIRef("menus.onShown")}}
  - : Wird ausgelöst, wenn der Browser ein Menü anzeigt.

{{WebExtExamples("h2")}}

## Browser-Kompatibilität

{{Compat}}

> [!NOTE]
> Diese API basiert auf Chromiums [`chrome.contextMenus`-API](https://developer.chrome.com/docs/extensions/reference/api/contextMenus). Diese Dokumentation wurde von [`context_menus.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/context_menus.json) im Chromium-Code abgeleitet.

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
