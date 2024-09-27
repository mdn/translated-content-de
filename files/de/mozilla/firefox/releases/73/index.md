---
title: Firefox 73 für Entwickler
slug: Mozilla/Firefox/Releases/73
l10n:
  sourceCommit: 1822cdf5a86574429c4c49883a402663ef16a4ef
---

{{FirefoxSidebar}}

Dieser Artikel bietet Informationen über die Änderungen in Firefox 73, die Entwickler betreffen. Firefox 73 wurde am 11. Februar 2020 veröffentlicht.

## Änderungen für Webentwickler

### Entwicklertools

- [CORS-Fehler](/de/docs/Web/HTTP/CORS/Errors) erscheinen jetzt als Fehler in der Konsole (und nicht mehr als Warnungen), was ihnen die richtige Sichtbarkeit gibt ([Firefox-Bug 1602093](https://bugzil.la/1602093)).
- Text- und reguläre Ausdrucksuche in der Webkonsole [können jetzt negiert werden, indem sie mit '-' vorangestellt werden](https://firefox-source-docs.mozilla.org/devtools-user/web_console/console_messages/index.html#filtering-and-searching) ([Firefox-Bug 1291192](https://bugzil.la/1291192)).

### HTML

_Keine Änderungen._

### CSS

- Wir haben {{cssxref("overscroll-behavior-block")}} und {{cssxref("overscroll-behavior-inline")}} implementiert, die logischen Zuordnungen für {{cssxref("overscroll-behavior-x")}} und {{cssxref("overscroll-behavior-y")}} ([Firefox-Bug 833953](https://bugzil.la/833953)).

#### Entfernt

- Die proprietäre `-moz-touch-enabled` Medienabfrage wurde entfernt ([Firefox-Bug 1486964](https://bugzil.la/1486964)). Sie sollten stattdessen [`pointer: coarse`](/de/docs/Web/CSS/@media/pointer) verwenden.

### SVG

- Die Eigenschaften {{SVGAttr("letter-spacing")}} und {{SVGAttr("word-spacing")}} funktionieren jetzt in SVG ([Firefox-Bug 371787](https://bugzil.la/371787)).

### MathML

#### Entfernt

- Das veraltete {{MathMLElement("mfenced")}} Element wurde entfernt ([Firefox-Bug 1603773](https://bugzil.la/1603773)). Verwenden Sie stattdessen die {{MathMLElement("mrow")}} und {{MathMLElement("mo")}} Elemente.

### JavaScript

- Die Felder `yearName` und `relatedYear` sind jetzt in der Methode [`DateTimeFormat.prototype.formatToParts()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/formatToParts) verfügbar, was nützliche Formatierungsoptionen für CJK-Kalender ermöglicht ([Firefox-Bug 1591664](https://bugzil.la/1591664)).

### APIs

#### DOM

- Die Eigenschaften [`innerWidth`](/de/docs/Web/API/Window/innerWidth) und [`innerHeight`](/de/docs/Web/API/Window/innerHeight) von [`Window`](/de/docs/Web/API/Window) Objekten wurden aktualisiert, um die Breite und Höhe des Layout-Viewports in allen Situationen zurückzugeben, anstatt manchmal auf dem visuellen Viewport zu basieren. Insbesondere, bisher wurden im [Responsive Design Mode](https://firefox-source-docs.mozilla.org/devtools-user/responsive_design_mode/index.html) die Dimensionen des visuellen Viewports zurückgegeben, wodurch das Verhalten variierte von dem, was erwartet wurde ([Firefox-Bug 1514429](https://bugzil.la/1514429)).

#### WebVR

- Die veraltete [WebVR API](/de/docs/Web/API/WebVR_API)—die durch [WebXR](/de/docs/Web/API/WebXR_Device_API) ersetzt wurde, welche sowohl [augmented](https://en.wikipedia.org/wiki/Augmented_reality) als auch [virtual reality](https://en.wikipedia.org/wiki/Virtual_reality) Anwendungen unterstützt—erfordert jetzt [einen sicheren Kontext](/de/docs/Web/API/WebVR_API#api_availability) mit dem [HTTPS](/de/docs/Glossary/HTTPS) Protokoll, um zu funktionieren. Dies liegt an der Verfügbarkeit von sensiblen Eingabequellen, die private Informationen enthalten können ([Firefox-Bug 1381645](https://bugzil.la/1381645)).

#### Entfernt

- Die Unterstützung für die [`VideoPlaybackQuality`](/de/docs/Web/API/VideoPlaybackQuality) Eigenschaft [`corruptedVideoFrames`](/de/docs/Web/API/VideoPlaybackQuality/corruptedVideoFrames), die in der Spezifikation als veraltet gilt, wurde aus Firefox entfernt ([Firefox-Bug 1602163](https://bugzil.la/1602163)).

### Sicherheit

_Keine Änderungen._

### WebDriver-Konformität (Marionette)

- `WebDriver:Print` wurde hinzugefügt, um die aktuelle Seite als PDF-Dokument zu drucken ([Firefox-Bug 1604506](https://bugzil.la/1604506)).
- `Webdriver:TakeScreenshot` erfasst jetzt immer den obersten Browsing-Kontext und nicht den aktuell ausgewählten, wenn kein aufzunehmendes Element spezifiziert wurde ([Firefox-Bug 1398087](https://bugzil.la/1398087), [Firefox-Bug 1606794](https://bugzil.la/1606794)).
- Die Verwendung des `full` Arguments von `Webdriver:TakeScreenshot` führt dazu, dass die vollständige Seite aufgenommen wird ([Firefox-Bug 1571424](https://bugzil.la/1571424)).

## Änderungen für Add-on-Entwickler

### API-Änderungen

- Die Funktion {{WebExtAPIRef("sidebarAction.toggle()")}} wurde implementiert ([Bug 1453355](https://bugzil.la/1453355)).

### Manifest-Änderungen

_Keine Änderungen._

## Siehe auch

- Hacks Blogbeitrag: [Firefox 73 ist da](https://hacks.mozilla.org/2020/02/firefox-73-is-upon-us/)

## Ältere Versionen

{{Firefox_for_developers}}
