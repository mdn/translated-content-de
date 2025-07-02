---
title: Firefox 89 für Entwickler
slug: Mozilla/Firefox/Releases/89
l10n:
  sourceCommit: 1d3d0c10ebf5c8c55f75b9adce74d1e5001866c6
---

Dieser Artikel bietet Informationen über die Änderungen in Firefox 89, die Entwickler betreffen werden. Firefox 89 wurde am 1. Juni 2021 veröffentlicht.

> [!NOTE]
> Siehe auch [Looking fine with Firefox 89](https://hacks.mozilla.org/2021/06/looking-fine-with-firefox-89/) auf Mozilla Hacks.

## Änderungen für Web-Entwickler

### Entwickler-Tools

_Keine Änderungen._

### HTML

_Keine Änderungen._

### CSS

- Das {{cssxref("@media/forced-colors","forced-colors")}} Medienelement wurde implementiert ([Firefox Bug 1659511](https://bugzil.la/1659511)).
- Die `@font-face` Deskriptoren {{cssxref("@font-face/ascent-override", "ascent-override")}}, {{cssxref("@font-face/descent-override", "descent-override")}} und {{cssxref("@font-face/line-gap-override", "line-gap-override")}} wurden implementiert ([Firefox Bug 1681691](https://bugzil.la/1681691) und [Firefox Bug 1704494](https://bugzil.la/1704494)).
- Die `type()` Funktion für {{cssxref("image/image-set")}} wurde implementiert ([Firefox Bug 1695404](https://bugzil.la/1695404)).
- Die {{cssxref("aspect-ratio")}} CSS-Eigenschaft wird jetzt unterstützt ([Firefox Bug 1672073](https://bugzil.la/1672073)).

### JavaScript

- Top-Level [`await`](/de/docs/Web/JavaScript/Reference/Operators/await#top_level_await) ist jetzt standardmäßig aktiviert ([Firefox Bug 1681046](https://bugzil.la/1681046)).
- [ArrayBuffer](/de/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer)s können jetzt mit einer Länge größer als 2GB-1 (bis zu 8GB) auf 64-Bit-Systemen erstellt werden ([Firefox Bug 1703505](https://bugzil.la/1703505)).

### HTTP

_Keine Änderungen._

### APIs

#### DOM

- [`PerformanceEventTiming`](/de/docs/Web/API/PerformanceEventTiming) ist jetzt standardmäßig aktiviert ([Firefox Bug 1701029](https://bugzil.la/1701029)).
- Der Inhalt von {{htmlelement("input")}} und {{htmlelement("textarea")}} Elementen kann jetzt standardmäßig mit [`Document.execCommand()`](/de/docs/Web/API/Document/execCommand) Befehlen bearbeitet werden, wobei der Verlauf von Änderungen erhalten bleibt und Kompatibilität mit anderen Browsern gewährleistet ist, ohne dass [`contentEditable`](/de/docs/Web/HTML/Reference/Global_attributes/contenteditable) oder umfangreiche Umgehungen erforderlich sind ([Firefox Bug 1220696](https://bugzil.la/1220696)).

#### Entfernungen

- Die folgenden Sensorereignisse und die zugehörigen Handler wurden entfernt (hauptsächlich aus Gründen der besseren Kompatibilität mit anderen großen Browser-Engines und zur Behebung von Datenschutzbedenken):
  - `DeviceProximityEvent` und sein Ereignishandler `window.ondeviceproximity` ([Firefox Bug 1699707](https://bugzil.la/1699707)).
  - `UserProximityEvent` und sein Ereignishandler `window.onuserproximity` ([Firefox Bug 1699707](https://bugzil.la/1699707)).
  - `DeviceLightEvent` und sein Ereignishandler `window.ondevicelight` ([Firefox Bug 1701824](https://bugzil.la/1701824)).

### WebDriver-Konformität (Marionette)

#### Entfernungen

- Die `rotatable` Fähigkeit, die nicht Teil der WebDriver-Spezifikation ist, wird nicht mehr verwendet ([Firefox Bug 1697630](https://bugzil.la/1697630)).

## Änderungen für Add-on-Entwickler

- [Dynamische JS-Modul-Imports](/de/docs/Web/JavaScript/Guide/Modules#dynamic_module_loading) funktionieren jetzt in WebExtension-Content-Skripten ([Firefox Bug 1536094](https://bugzil.la/1536094)).
- Erweiterungsressourcen, die in [web_accessible_resources](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/web_accessible_resources) aufgelistet sind, können unabhängig vom CORS-Modus der Anfrage geladen werden ([Firefox Bug 1694679](https://bugzil.la/1694679)).
- Die Benutzeroberfläche von Firefox wurde neu gestaltet, was sich auf die Nutzung der {{WebExtAPIRef("theme")}} API auswirkt. Die Eigenschaften `tab_background_separator` und `toolbar_field_separator` werden nicht mehr unterstützt. Die Eigenschaften `tab_line` und `toolbar_vertical_separator` verhalten sich anders. Weitere Informationen finden Sie in [Changes to themeable areas of Firefox in version 89](https://blog.mozilla.org/addons/2021/04/19/changes-to-themeable-areas-of-firefox-in-version-89/).
- Der {{WebExtAPIRef("pageAction")}} Button kann nicht mehr in der Adressleiste angeheftet oder entfernt werden, da das Dreipunkt-Menü standardmäßig nicht mehr sichtbar ist ([Firefox Bug 1691454](https://bugzil.la/1691454)). Folglich hat die `pinned` Eigenschaft des [`page_action`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/page_action) Manifest-Schlüssels keine Wirkung mehr ([Firefox Bug 1703537](https://bugzil.la/1703537)).
- Das Kontextmenüelement "Remove from Address Bar" wurde vom {{WebExtAPIRef("pageAction")}} Button entfernt ([Firefox Bug 1704474](https://bugzil.la/1704474)). Für Alternativen zu dieser Funktionalität siehe [Firefox Bug 1712556](https://bugzil.la/1712556).

## Ältere Versionen

{{Firefox_for_developers}}
