---
title: Firefox 89 – Versionshinweise für Entwickler
short-title: Firefox 89
slug: Mozilla/Firefox/Releases/89
l10n:
  sourceCommit: 696a0436bb4dd20eb4d30ac3f1d4fc5140d1eee9
---

Dieser Artikel informiert über Änderungen in Firefox 89, die für Entwickler relevant sind. Firefox 89 wurde am 1. Juni 2021 veröffentlicht.

> [!NOTE]
> Siehe auch [Looking fine with Firefox 89](https://hacks.mozilla.org/2021/06/looking-fine-with-firefox-89/) auf Mozilla Hacks.

## Änderungen für Webentwickler

### HTML

_Keine Änderungen._

### CSS

- Das Media-Feature {{cssxref("@media/forced-colors","forced-colors")}} wurde implementiert ([Firefox-Bug 1659511](https://bugzil.la/1659511)).
- Die `@font-face`-Deskriptoren {{cssxref("@font-face/ascent-override", "ascent-override")}}, {{cssxref("@font-face/descent-override", "descent-override")}} und {{cssxref("@font-face/line-gap-override", "line-gap-override")}} wurden implementiert ([Firefox-Bug 1681691](https://bugzil.la/1681691) und [Firefox-Bug 1704494](https://bugzil.la/1704494)).
- Die Funktion `type()` für {{cssxref("image/image-set")}} wurde implementiert ([Firefox-Bug 1695404](https://bugzil.la/1695404)).
- Die CSS-Eigenschaft {{cssxref("aspect-ratio")}} wird jetzt unterstützt ([Firefox-Bug 1672073](https://bugzil.la/1672073)).

### JavaScript

- [`await`](/de/docs/Web/JavaScript/Reference/Operators/await#top-level_await) auf oberster Ebene ist jetzt standardmäßig aktiviert ([Firefox-Bug 1681046](https://bugzil.la/1681046)).
- [ArrayBuffer](/de/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer)-Objekte können auf 64-Bit-Systemen jetzt mit einer Länge von mehr als 2 GB − 1 (bis zu 8 GB) erstellt werden ([Firefox-Bug 1703505](https://bugzil.la/1703505)).

### HTTP

_Keine Änderungen._

### APIs

#### DOM

- [`PerformanceEventTiming`](/de/docs/Web/API/PerformanceEventTiming) ist jetzt standardmäßig aktiviert ([Firefox-Bug 1701029](https://bugzil.la/1701029)).
- Der Inhalt von {{htmlelement("input")}}- und {{htmlelement("textarea")}}-Elementen kann jetzt standardmäßig mit Befehlen von [`Document.execCommand()`](/de/docs/Web/API/Document/execCommand) bearbeitet werden. Dabei bleibt der Bearbeitungsverlauf erhalten und das Verhalten entspricht dem anderer Browser, ohne dass [`contentEditable`](/de/docs/Web/HTML/Reference/Global_attributes/contenteditable) oder aufwendige Umgehungslösungen erforderlich sind ([Firefox-Bug 1220696](https://bugzil.la/1220696)).

#### Entfernungen

- Die folgenden Sensor-Events und die zugehörigen Handler wurden entfernt (hauptsächlich, um die Kompatibilität mit anderen wichtigen Browser-Engines zu verbessern und Bedenken hinsichtlich der Offenlegung privater Informationen auszuräumen):
  - `DeviceProximityEvent` und der zugehörige Event-Handler `window.ondeviceproximity` ([Firefox-Bug 1699707](https://bugzil.la/1699707)).
  - `UserProximityEvent` und der zugehörige Event-Handler `window.onuserproximity` ([Firefox-Bug 1699707](https://bugzil.la/1699707)).
  - `DeviceLightEvent` und der zugehörige Event-Handler `window.ondevicelight` ([Firefox-Bug 1701824](https://bugzil.la/1701824)).

### WebDriver-Konformität (Marionette)

#### Entfernungen

- Die Capability `rotatable`, die nicht Teil der WebDriver-Spezifikation ist, wird nicht mehr verwendet ([Firefox-Bug 1697630](https://bugzil.la/1697630)).

## Änderungen für Add-on-Entwickler

- [Dynamische JS-Modulimporte](/de/docs/Web/JavaScript/Guide/Modules#dynamic_module_loading) funktionieren jetzt in WebExtension-Content-Scripts ([Firefox-Bug 1536094](https://bugzil.la/1536094)).
- Unter [web_accessible_resources](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/web_accessible_resources) aufgeführte Erweiterungsressourcen können unabhängig vom CORS-Modus der Anfrage geladen werden ([Firefox-Bug 1694679](https://bugzil.la/1694679)).
- Die Benutzeroberfläche von Firefox wurde neu gestaltet, was sich auf die Verwendung der {{WebExtAPIRef("theme")}}-API auswirkt. Die Eigenschaften `tab_background_separator` und `toolbar_field_separator` werden nicht mehr unterstützt. `tab_line` und `toolbar_vertical_separator` verhalten sich künftig anders. Weitere Informationen finden Sie unter [Änderungen an den durch Themes anpassbaren Bereichen von Firefox in Version 89](https://blog.mozilla.org/addons/2021/04/19/changes-to-themeable-areas-of-firefox-in-version-89/).
- Die Schaltfläche von {{WebExtAPIRef("pageAction")}} kann nicht mehr an die Adressleiste angeheftet oder von ihr gelöst werden, da das Menü mit den drei Punkten standardmäßig nicht mehr sichtbar ist ([Firefox-Bug 1691454](https://bugzil.la/1691454)). Daher hat die Eigenschaft `pinned` des Manifest-Schlüssels [`page_action`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/page_action) keine Wirkung mehr ([Firefox-Bug 1703537](https://bugzil.la/1703537)).
- Der Kontextmenüeintrag „Aus Adressleiste entfernen“ wurde von der Schaltfläche von {{WebExtAPIRef("pageAction")}} entfernt ([Firefox-Bug 1704474](https://bugzil.la/1704474)). Alternativen zu dieser Funktion finden Sie unter [Firefox-Bug 1712556](https://bugzil.la/1712556).
