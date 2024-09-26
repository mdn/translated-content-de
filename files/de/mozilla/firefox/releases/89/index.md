---
title: Firefox 89 für Entwickler
slug: Mozilla/Firefox/Releases/89
l10n:
  sourceCommit: 8943d682ef5a0f9a3f8b66049ff3042e07f140ba
---

{{FirefoxSidebar}}

Dieser Artikel bietet Informationen zu den Änderungen in Firefox 89, die Entwickler betreffen. Firefox 89 wurde am 1. Juni 2021 veröffentlicht.

> [!NOTE]
> Siehe auch [Looking fine with Firefox 89](https://hacks.mozilla.org/2021/06/looking-fine-with-firefox-89/) auf Mozilla Hacks.

## Änderungen für Webentwickler

### Entwicklertools

_Keine Änderungen._

### HTML

_Keine Änderungen._

### CSS

- Die Medienfunktion {{cssxref("@media/forced-colors","forced-colors")}} wurde implementiert ([Firefox-Bug 1659511](https://bugzil.la/1659511)).
- Die Deskriptoren {{cssxref("@font-face/ascent-override", "ascent-override")}}, {{cssxref("@font-face/descent-override", "descent-override")}}, und {{cssxref("@font-face/line-gap-override", "line-gap-override")}} für `@font-face` wurden implementiert ([Firefox-Bug 1681691](https://bugzil.la/1681691) und [Firefox-Bug 1704494](https://bugzil.la/1704494)).
- Die Funktion `type()` für {{cssxref("image/image-set")}} wurde implementiert ([Firefox-Bug 1695404](https://bugzil.la/1695404)).
- Die CSS-Eigenschaft {{cssxref("aspect-ratio")}} wird jetzt unterstützt ([Firefox-Bug 1672073](https://bugzil.la/1672073)).

### JavaScript

- Top-Level-[`await`](/de/docs/Web/JavaScript/Reference/Operators/await#top_level_await) ist jetzt standardmäßig aktiviert ([Firefox-Bug 1681046](https://bugzil.la/1681046)).
- [ArrayBuffer](/de/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer)s können nun mit einer Länge größer als 2GB-1 (bis zu 8GB) auf 64-Bit-Systemen erstellt werden ([Firefox-Bug 1703505](https://bugzil.la/1703505)).

### HTTP

_Keine Änderungen._

### APIs

#### DOM

- {{domxref("PerformanceEventTiming")}} ist jetzt standardmäßig aktiviert ([Firefox-Bug 1701029](https://bugzil.la/1701029)).
- Der Inhalt von {{htmlelement("input")}}- und {{htmlelement("textarea")}}-Elementen kann jetzt standardmäßig mit {{domxref("Document.execCommand()")}}-Befehlen manipuliert werden, was den Bearbeitungsverlauf bewahrt und mit anderen Browsern gleichzieht, ohne dass [`contentEditable`](/de/docs/Web/HTML/Global_attributes/contenteditable) oder langwierige Umgehungen erforderlich sind ([Firefox-Bug 1220696](https://bugzil.la/1220696)).

#### Entfernungen

- Die folgenden Sensor-Ereignisse und ihre zugehörigen Handler wurden entfernt (hauptsächlich zur besseren Kompatibilität mit anderen großen Browser-Engines und um Bedenken bezüglich Datenschutzverletzungen zu adressieren):

  - `DeviceProximityEvent` und sein Ereignis-Handler `window.ondeviceproximity` ([Firefox-Bug 1699707](https://bugzil.la/1699707)).
  - `UserProximityEvent` und sein Ereignis-Handler `window.onuserproximity`) ([Firefox-Bug 1699707](https://bugzil.la/1699707)).
  - `DeviceLightEvent` und sein Ereignis-Handler `window.ondevicelight` ([Firefox-Bug 1701824](https://bugzil.la/1701824)).

### WebDriver-Konformität (Marionette)

#### Entfernungen

- Die `rotatable`-Fähigkeit, die nicht Teil der WebDriver-Spezifikation ist, wird nicht mehr verwendet ([Firefox-Bug 1697630](https://bugzil.la/1697630)).

## Änderungen für Add-on-Entwickler

- [Dynamischer JS-Modulimport](/de/docs/Web/JavaScript/Guide/Modules#dynamic_module_loading) funktioniert jetzt in WebExtension-Inhalts-Skripten ([Firefox-Bug 1536094](https://bugzil.la/1536094)).
- Erweiterungsressourcen, die in [web_accessible_resources](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/web_accessible_resources) aufgeführt sind, können unabhängig vom CORS-Modus der Anfrage geladen werden ([Firefox-Bug 1694679](https://bugzil.la/1694679)).
- Das UI von Firefox wurde neu gestaltet, was die Nutzung der {{WebExtAPIRef("theme")}}-API beeinflusst. Die Eigenschaften `tab_background_separator` und `toolbar_field_separator` werden nicht mehr unterstützt. Die `tab_line` und `toolbar_vertical_separator` verhalten sich anders. Für weitere Informationen siehe [Changes to themeable areas of Firefox in version 89](https://blog.mozilla.org/addons/2021/04/19/changes-to-themeable-areas-of-firefox-in-version-89/).
- Die Schaltfläche {{WebExtAPIRef("pageAction")}} kann nicht mehr von der Adressleiste angeheftet oder gelöst werden, da das Drei-Punkte-Menü standardmäßig nicht mehr sichtbar ist ([Firefox-Bug 1691454](https://bugzil.la/1691454)). Dadurch hat die `pinned`-Eigenschaft des [`page_action`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/page_action)-Manifest-Schlüssels keine Wirkung mehr ([Firefox-Bug 1703537](https://bugzil.la/1703537)).
- Der Kontextmenüpunkt "Aus der Adressleiste entfernen" wurde von der {{WebExtAPIRef("pageAction")}}-Schaltfläche entfernt ([Firefox-Bug 1704474](https://bugzil.la/1704474)). Für Alternativen zu dieser Funktionalität siehe [Firefox-Bug 1712556](https://bugzil.la/1712556).

## Ältere Versionen

{{Firefox_for_developers}}