---
title: menus.OnClickData
slug: Mozilla/Add-ons/WebExtensions/API/menus/OnClickData
l10n:
  sourceCommit: b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

{{AddonSidebar}}

Informationen, die an den {{WebExtAPIRef("menus.onClicked")}} Ereignis-Listener übergeben werden, wenn ein Menüelement angeklickt wird.

## Typ

Werte dieses Typs sind Objekte. Sie enthalten die folgenden Eigenschaften:

- `bookmarkId` {{optional_inline}}
  - : `string`. Die ID des Lesezeichens, bei dem das Kontextmenü angeklickt wurde.
- `button` {{optional_inline}}
  - : `integer`. Welche Maustaste gedrückt wurde. Die Werte entsprechen denen von [`MouseEvent.button`](/de/docs/Web/API/MouseEvent/button).
- `checked` {{optional_inline}}
  - : `boolean`. Ein Indikator, ob ein Kontrollkästchen oder Radio-Element nach dem Klick aktiviert war.
- `editable`
  - : `boolean`. Ein Indikator, ob das Element bearbeitbar ist: zum Beispiel, ob es sich um ein [textarea](/de/docs/Web/HTML/Element/textarea) handelt.
- `frameId` {{optional_inline}}
  - : `integer`. Die ID des Rahmens, in dem das Element angeklickt wurde. Die Rahmen-ID kann in anderen APIs verwendet werden, die Rahmen-IDs akzeptieren, wie z.B. {{WebExtAPIRef("tabs.sendMessage()")}}. Wenn das Element im Hauptdokument angeklickt wurde, ist `frameId` null. Wenn das Element außerhalb der Seite angeklickt wurde (zum Beispiel im `tools_menu` oder `tab` Kontext), dann ist `frameId` `undefined`.
- `frameUrl` {{optional_inline}}
  - : `string`. Die URL des Rahmens des Elements, bei dem das Kontextmenü angeklickt wurde, falls es in einem Rahmen war.
- `linkText` {{optional_inline}}
  - : `string`. Wenn das Element ein Link ist, der Text des Links. Wenn der Link keinen Text enthält, wird hier die URL angegeben.
- `linkUrl` {{optional_inline}}
  - : `string`. Wenn das Element ein Link ist, die URL, auf die er verweist.
- `mediaType` {{optional_inline}}
  - : `string`. Einer von "image", "video" oder "audio", wenn das Kontextmenü auf einem dieser Elementtypen aktiviert wurde.
- `menuItemId`
  - : `integer` oder `string`. Die ID des angeklickten Menüelements.
- `modifiers`
  - : `array` von `string`. Ein Array, das alle Modifikatortasten enthält, die beim Klicken des Elements gedrückt wurden. Mögliche Werte sind: "Alt", "Command", "Ctrl", "MacCtrl" und "Shift". Auf einem Mac, wenn die Strg-Taste gedrückt wird, werden sowohl "Ctrl" als auch "MacCtrl" einbezogen.
- `pageUrl` {{optional_inline}}
  - : `string`. Die URL der Seite, in der das Menüelement angeklickt wurde. Diese Eigenschaft ist nicht vorhanden, wenn der Klick in einem Kontext erfolgt ist, in dem es keine aktuelle Seite gibt, wie z.B. bei einer Browser-Aktion.
- `parentMenuItemId` {{optional_inline}}
  - : `integer` oder `string`. Die übergeordnete ID, falls vorhanden, für das angeklickte Element.
- `selectionText` {{optional_inline}}
  - : `string`. Wenn Text auf der Seite ausgewählt wurde, enthält dies den ausgewählten Text.
- `srcUrl` {{optional_inline}}
  - : `string`. Falls vorhanden, der `src`-Wert für das Medium im angeklickten Element.
- `targetElementId` {{optional_inline}}
  - : `integer`. Eine Kennung des Elements, falls vorhanden, über dem das Kontextmenü erstellt wurde. Verwenden Sie {{WebExtAPIRef("menus.getTargetElement()")}} im Inhaltsskript, um das Element zu lokalisieren. Beachten Sie, dass dies nicht das [id](/de/docs/Web/HTML/Global_attributes/id) Attribut des Seitenelements ist.
- `viewType` {{optional_inline}}
  - : {{WebExtAPIRef("extension.ViewType", "ViewType")}}. Der Typ der Erweiterungsanzeige.
- `wasChecked` {{optional_inline}}
  - : `boolean`. Ein Indikator, ob ein Kontrollkästchen oder Radio-Element vor dem Klick aktiviert war.

## Browser-Kompatibilität

{{Compat}}

{{WebExtExamples}}

> [!NOTE]
> Diese API basiert auf der [`chrome.contextMenus`](https://developer.chrome.com/docs/extensions/reference/api/contextMenus#type-OnClickData) API von Chromium. Diese Dokumentation wurde aus [`context_menus.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/context_menus.json) im Chromium-Code übernommen.
