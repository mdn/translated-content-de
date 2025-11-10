---
title: Firefox 73 Versionshinweise für Entwickler
short-title: Firefox 73
slug: Mozilla/Firefox/Releases/73
l10n:
  sourceCommit: ad9776a6cf53eaf570ac0515402247e82ecefcfe
---

Dieser Artikel bietet Informationen über die Änderungen in Firefox 73, die Entwickler betreffen werden. Firefox 73 wurde am 11. Februar 2020 veröffentlicht.

## Änderungen für Webentwickler

### Entwicklerwerkzeuge

- [CORS-Fehler](/de/docs/Web/HTTP/Guides/CORS/Errors) erscheinen jetzt als Fehler in der Konsole (und nicht mehr als Warnungen), was ihnen die angemessene Sichtbarkeit verleiht ([Firefox-Bug 1602093](https://bugzil.la/1602093)).
- Text- und reguläre Ausdruckssuchen in der Webkonsole [können jetzt negiert werden, indem sie mit '-' vorangestellt werden](https://firefox-source-docs.mozilla.org/devtools-user/web_console/console_messages/index.html#filtering-and-searching) ([Firefox-Bug 1291192](https://bugzil.la/1291192)).

### HTML

_Keine Änderungen._

### CSS

- Wir haben {{cssxref("overscroll-behavior-block")}} und {{cssxref("overscroll-behavior-inline")}} implementiert, die logischen Zuordnungen für {{cssxref("overscroll-behavior-x")}} und {{cssxref("overscroll-behavior-y")}} ([Firefox-Bug 833953](https://bugzil.la/833953)).

#### Entfernungen

- Die proprietäre Medienabfrage `-moz-touch-enabled` wurde entfernt ([Firefox-Bug 1486964](https://bugzil.la/1486964)). Sie sollten [`pointer: coarse`](/de/docs/Web/CSS/Reference/At-rules/@media/pointer) stattdessen verwenden.

### SVG

- Die Eigenschaften {{SVGAttr("letter-spacing")}} und {{SVGAttr("word-spacing")}} funktionieren jetzt in SVG ([Firefox-Bug 371787](https://bugzil.la/371787)).

### MathML

#### Entfernungen

- Das veraltete {{MathMLElement("mfenced")}} Element wurde entfernt ([Firefox-Bug 1603773](https://bugzil.la/1603773)). Verwenden Sie stattdessen die {{MathMLElement("mrow")}} und {{MathMLElement("mo")}} Elemente.

### JavaScript

- Die Felder `yearName` und `relatedYear` stehen jetzt in der Methode [`DateTimeFormat.prototype.formatToParts()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/formatToParts) zur Verfügung und ermöglichen nützliche Formatierungsoptionen für CJK-Kalender ([Firefox-Bug 1591664](https://bugzil.la/1591664)).

### APIs

#### DOM

- Die [`innerWidth`](/de/docs/Web/API/Window/innerWidth) und [`innerHeight`](/de/docs/Web/API/Window/innerHeight) Eigenschaften von [`Window`](/de/docs/Web/API/Window) Objekten wurden aktualisiert, um in allen Situationen die Breite und Höhe des Layout-Viewports zurückzugeben, anstatt manchmal basierend auf dem visuellen Viewport. Insbesondere bei der Verwendung des [Responsive Design Mode](https://firefox-source-docs.mozilla.org/devtools-user/responsive_design_mode/index.html) wurden zuvor die Abmessungen des visuellen Viewports zurückgegeben, was dazu führte, dass das Verhalten von den Erwartungen abwich ([Firefox-Bug 1514429](https://bugzil.la/1514429)).

#### WebVR

- Die veraltete [WebVR-API](/de/docs/Web/API/WebVR_API)—die durch [WebXR](/de/docs/Web/API/WebXR_Device_API) ersetzt wurde, die sowohl [Erweiterte Realität](https://en.wikipedia.org/wiki/Augmented_reality) als auch [Virtuelle Realität](https://en.wikipedia.org/wiki/Virtual_reality) Anwendungen unterstützt—erfordert jetzt [einen sicheren Kontext](/de/docs/Web/API/WebVR_API#api_availability) unter Verwendung des {{Glossary("HTTPS", "HTTPS")}} Protokolls, um zu funktionieren. Dies ist auf die Verfügbarkeit sensibler Eingabequellen zurückzuführen, die private Informationen enthalten können ([Firefox-Bug 1381645](https://bugzil.la/1381645)).

#### Entfernungen

- Die Unterstützung für die [`VideoPlaybackQuality`](/de/docs/Web/API/VideoPlaybackQuality) Eigenschaft [`corruptedVideoFrames`](/de/docs/Web/API/VideoPlaybackQuality/corruptedVideoFrames), die in der Spezifikation veraltet ist, wurde aus Firefox entfernt ([Firefox-Bug 1602163](https://bugzil.la/1602163)).

### Sicherheit

_Keine Änderungen._

### WebDriver-Konformität (Marionette)

- `WebDriver:Print` wurde hinzugefügt, um die aktuelle Seite als PDF-Dokument zu drucken ([Firefox-Bug 1604506](https://bugzil.la/1604506)).
- `Webdriver:TakeScreenshot` erfasst jetzt immer den oberen Browsing-Kontext und nicht den aktuell ausgewählten Browsing-Kontext, wenn kein zu erfassendes Element angegeben wurde ([Firefox-Bug 1398087](https://bugzil.la/1398087), [Firefox-Bug 1606794](https://bugzil.la/1606794)).
- Die Verwendung des Arguments `full` von `Webdriver:TakeScreenshot` bewirkt, dass die vollständige Seite erfasst wird ([Firefox-Bug 1571424](https://bugzil.la/1571424)).

## Änderungen für Add-on Entwickler

### API-Änderungen

- Die Funktion {{WebExtAPIRef("sidebarAction.toggle()")}} wurde implementiert ([Bug 1453355](https://bugzil.la/1453355)).

### Manifest-Änderungen

_Keine Änderungen._

## Siehe auch

- Hacks Blog-Artikel: [Firefox 73 ist da](https://hacks.mozilla.org/2020/02/firefox-73-is-upon-us/)
