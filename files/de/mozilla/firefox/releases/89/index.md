---
title: Firefox 89 für Entwickler
slug: Mozilla/Firefox/Releases/89
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{FirefoxSidebar}}

Dieser Artikel bietet Informationen über die Änderungen in Firefox 89, die Entwickler betreffen werden. Firefox 89 wurde am 1. Juni 2021 veröffentlicht.

> [!NOTE]
> Siehe auch [Looking fine with Firefox 89](https://hacks.mozilla.org/2021/06/looking-fine-with-firefox-89/) auf Mozilla Hacks.

## Änderungen für Webentwickler

### Entwicklerwerkzeuge

_Keine Änderungen._

### HTML

_Keine Änderungen._

### CSS

- Das {{cssxref("@media/forced-colors","forced-colors")}} Medien-Feature wurde implementiert ([Firefox Fehler 1659511](https://bugzil.la/1659511)).
- Die {{cssxref("@font-face/ascent-override", "ascent-override")}}, {{cssxref("@font-face/descent-override", "descent-override")}} und {{cssxref("@font-face/line-gap-override", "line-gap-override")}} `@font-face` Deskriptoren wurden implementiert ([Firefox Fehler 1681691](https://bugzil.la/1681691) und [Firefox Fehler 1704494](https://bugzil.la/1704494)).
- Die `type()` Funktion für {{cssxref("image/image-set")}} wurde implementiert ([Firefox Fehler 1695404](https://bugzil.la/1695404)).
- Die {{cssxref("aspect-ratio")}} CSS-Eigenschaft wird jetzt unterstützt ([Firefox Fehler 1672073](https://bugzil.la/1672073)).

### JavaScript

- Top-level [`await`](/de/docs/Web/JavaScript/Reference/Operators/await#top_level_await) ist jetzt standardmäßig aktiviert ([Firefox Fehler 1681046](https://bugzil.la/1681046)).
- [ArrayBuffer](/de/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer)s können jetzt mit einer Länge größer als 2GB-1 (bis zu 8GB) auf 64-Bit-Systemen erstellt werden ([Firefox Fehler 1703505](https://bugzil.la/1703505)).

### HTTP

_Keine Änderungen._

### APIs

#### DOM

- [`PerformanceEventTiming`](/de/docs/Web/API/PerformanceEventTiming) ist jetzt standardmäßig aktiviert ([Firefox Fehler 1701029](https://bugzil.la/1701029)).
- Der Inhalt von {{htmlelement("input")}} und {{htmlelement("textarea")}} Elementen kann jetzt standardmäßig mit [`Document.execCommand()`](/de/docs/Web/API/Document/execCommand) Befehlen manipuliert werden. Dies erhält die Bearbeitungshistorie und bietet Parität mit anderen Browsern, ohne dass [`contentEditable`](/de/docs/Web/HTML/Reference/Global_attributes/contenteditable) oder aufwändige Workarounds erforderlich sind ([Firefox Fehler 1220696](https://bugzil.la/1220696)).

#### Entfernungen

- Die folgenden Sensorevents und ihre zugehörigen Handler wurden entfernt (hauptsächlich für eine bessere Kompatibilität mit anderen großen Browser-Engines und zur Behebung von Datenschutzbedenken):
  - `DeviceProximityEvent` und sein Event-Handler `window.ondeviceproximity` ([Firefox Fehler 1699707](https://bugzil.la/1699707)).
  - `UserProximityEvent` und sein Event-Handler `window.onuserproximity` ([Firefox Fehler 1699707](https://bugzil.la/1699707)).
  - `DeviceLightEvent` und sein Event-Handler `window.ondevicelight` ([Firefox Fehler 1701824](https://bugzil.la/1701824)).

### WebDriver-Konformität (Marionette)

#### Entfernungen

- Die `rotatable` Fähigkeit, die nicht Teil der WebDriver-Spezifikation ist, wird nicht mehr verwendet ([Firefox Fehler 1697630](https://bugzil.la/1697630)).

## Änderungen für Add-on-Entwickler

- [Dynamische JS-Modulimporte](/de/docs/Web/JavaScript/Guide/Modules#dynamic_module_loading) funktionieren jetzt in WebExtension-Content-Skripten ([Firefox Fehler 1536094](https://bugzil.la/1536094)).
- Erweiterungsressourcen, die in [web_accessible_resources](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/web_accessible_resources) aufgelistet sind, können unabhängig vom CORS-Modus der Anfrage geladen werden ([Firefox Fehler 1694679](https://bugzil.la/1694679)).
- Die Benutzeroberfläche von Firefox wurde neu gestaltet, wodurch sich die Nutzung der {{WebExtAPIRef("theme")}} API ändert. Die Eigenschaften `tab_background_separator` und `toolbar_field_separator` werden nicht mehr unterstützt. Die Eigenschaften `tab_line` und `toolbar_vertical_separator` werden anders funktionieren. Weitere Informationen finden Sie in [Changes to themeable areas of Firefox in version 89](https://blog.mozilla.org/addons/2021/04/19/changes-to-themeable-areas-of-firefox-in-version-89/).
- Der {{WebExtAPIRef("pageAction")}} Button kann nicht mehr aus der Adressleiste angeheftet oder gelöst werden, da das Drei-Punkte-Menü standardmäßig nicht mehr sichtbar ist ([Firefox Fehler 1691454](https://bugzil.la/1691454)). Daher hat die `pinned` Eigenschaft des [`page_action`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/page_action) Manifest-Schlüssels keine Wirkung mehr ([Firefox Fehler 1703537](https://bugzil.la/1703537)).
- Der Menüpunkt "Remove from Address Bar" wurde aus dem {{WebExtAPIRef("pageAction")}} Button entfernt ([Firefox Fehler 1704474](https://bugzil.la/1704474)). Als Alternativen zu dieser Funktionalität siehe [Firefox Fehler 1712556](https://bugzil.la/1712556).

## Ältere Versionen

{{Firefox_for_developers}}
