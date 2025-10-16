---
title: Firefox 73 Versionshinweise für Entwickler
short-title: Firefox 73
slug: Mozilla/Firefox/Releases/73
l10n:
  sourceCommit: 61912f53d01e935aea926a2226130fb4587414a9
---

Dieser Artikel liefert Informationen über die Änderungen in Firefox 73, die Entwickler betreffen. Firefox 73 wurde am 11. Februar 2020 veröffentlicht.

## Änderungen für Webentwickler

### Entwicklertools

- [CORS-Fehler](/de/docs/Web/HTTP/Guides/CORS/Errors) erscheinen nun als Fehler in der Konsole (und nicht mehr als Warnungen), was ihnen die angemessene Sichtbarkeit gibt ([Firefox bug 1602093](https://bugzil.la/1602093)).
- Text- und reguläre Ausdruckssuchen in der Webkonsole [können nun negiert werden, indem sie mit '-' vorangestellt werden](https://firefox-source-docs.mozilla.org/devtools-user/web_console/console_messages/index.html#filtering-and-searching) ([Firefox bug 1291192](https://bugzil.la/1291192)).

### HTML

_Keine Änderungen._

### CSS

- Wir haben {{cssxref("overscroll-behavior-block")}} und {{cssxref("overscroll-behavior-inline")}} implementiert, die logischen Zuordnungen für {{cssxref("overscroll-behavior-x")}} und {{cssxref("overscroll-behavior-y")}} ([Firefox bug 833953](https://bugzil.la/833953)).

#### Entfernungen

- Die proprietäre `-moz-touch-enabled` Media-Query wurde entfernt ([Firefox bug 1486964](https://bugzil.la/1486964)). Sie sollten stattdessen [`pointer: coarse`](/de/docs/Web/CSS/@media/pointer) verwenden.

### SVG

- Die {{SVGAttr("letter-spacing")}} und {{SVGAttr("word-spacing")}} Eigenschaften funktionieren jetzt in SVG ([Firefox bug 371787](https://bugzil.la/371787)).

### MathML

#### Entfernungen

- Das veraltete {{MathMLElement("mfenced")}} Element wurde entfernt ([Firefox bug 1603773](https://bugzil.la/1603773)). Verwenden Sie stattdessen die {{MathMLElement("mrow")}} und {{MathMLElement("mo")}} Elemente.

### JavaScript

- Die Felder `yearName` und `relatedYear` sind im [`DateTimeFormat.prototype.formatToParts()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/formatToParts) Methode verfügbar gemacht worden, was nützliche Formatierungsoptionen für CJK-Kalender ermöglicht ([Firefox bug 1591664](https://bugzil.la/1591664)).

### APIs

#### DOM

- Die [`innerWidth`](/de/docs/Web/API/Window/innerWidth) und [`innerHeight`](/de/docs/Web/API/Window/innerHeight) Eigenschaften auf [`Window`](/de/docs/Web/API/Window) Objekten wurden aktualisiert, um die Breite und Höhe des Layout-Viewports in allen Situationen zurückzugeben, anstatt manchmal auf dem visuellen Viewport zu basieren. Insbesondere gaben sie zuvor im [Responsive Design Mode](https://firefox-source-docs.mozilla.org/devtools-user/responsive_design_mode/index.html) die visuellen Viewport-Dimensionen zurück, was dazu führte, dass das Verhalten von den Erwartungen abwich ([Firefox bug 1514429](https://bugzil.la/1514429)).

#### WebVR

- Die veraltete [WebVR API](/de/docs/Web/API/WebVR_API)—die von [WebXR](/de/docs/Web/API/WebXR_Device_API) ersetzt wurde, das sowohl [augmented](https://en.wikipedia.org/wiki/Augmented_reality) als auch [virtual reality](https://en.wikipedia.org/wiki/Virtual_reality) Anwendungen unterstützt—erfordert nun [einen sicheren Kontext](/de/docs/Web/API/WebVR_API#api_availability) unter Verwendung des {{Glossary("HTTPS", "HTTPS")}} Protokolls zum Betrieb. Dies liegt an der Verfügbarkeit von sensiblen Eingabequellen, die private Informationen enthalten können ([Firefox bug 1381645](https://bugzil.la/1381645)).

#### Entfernungen

- Die Unterstützung für die [`VideoPlaybackQuality`](/de/docs/Web/API/VideoPlaybackQuality) Eigenschaft [`corruptedVideoFrames`](/de/docs/Web/API/VideoPlaybackQuality/corruptedVideoFrames), die in der Spezifikation veraltet ist, wurde aus Firefox entfernt ([Firefox bug 1602163](https://bugzil.la/1602163)).

### Sicherheit

_Keine Änderungen._

### WebDriver-Konformität (Marionette)

- `WebDriver:Print` wurde hinzugefügt, um die aktuelle Seite als PDF-Dokument zu drucken ([Firefox bug 1604506](https://bugzil.la/1604506)).
- `Webdriver:TakeScreenshot` erfasst jetzt immer den obersten Browser-Kontext und nicht den aktuell ausgewählten Browser-Kontext, wenn kein zu erfassendes Element angegeben wurde ([Firefox bug 1398087](https://bugzil.la/1398087), [Firefox bug 1606794](https://bugzil.la/1606794)).
- Die Verwendung des `full` Arguments von `Webdriver:TakeScreenshot` führt dazu, dass die gesamte Seite erfasst wird ([Firefox bug 1571424](https://bugzil.la/1571424)).

## Änderungen für Add-on-Entwickler

### API-Änderungen

- Die Funktion {{WebExtAPIRef("sidebarAction.toggle()")}} wurde implementiert ([bug 1453355](https://bugzil.la/1453355)).

### Manifeständerungen

_Keine Änderungen._

## Siehe auch

- Hacks Blogartikel: [Firefox 73 ist da](https://hacks.mozilla.org/2020/02/firefox-73-is-upon-us/)
