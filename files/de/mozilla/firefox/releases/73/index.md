---
title: Firefox 73 für Entwickler
short-title: Firefox 73
slug: Mozilla/Firefox/Releases/73
l10n:
  sourceCommit: 64df508685abcbc047f6c1a973505921fad1484e
---

Dieser Artikel bietet Informationen über die Änderungen in Firefox 73, die Entwickler betreffen. Firefox 73 wurde am 11. Februar 2020 veröffentlicht.

## Änderungen für Web-Entwickler

### Entwicklerwerkzeuge

- [CORS-Fehler](/de/docs/Web/HTTP/Guides/CORS/Errors) erscheinen jetzt als Fehler in der Konsole (und nicht mehr als Warnungen) und erhalten so die angemessene Sichtbarkeit ([Firefox-Bug 1602093](https://bugzil.la/1602093)).
- Text- und reguläre Ausdrucks-Suchen in der Webkonsole [können jetzt negiert werden, indem sie mit '-' vorangestellt werden](https://firefox-source-docs.mozilla.org/devtools-user/web_console/console_messages/index.html#filtering-and-searching) ([Firefox-Bug 1291192](https://bugzil.la/1291192)).

### HTML

_Keine Änderungen._

### CSS

- Wir haben {{cssxref("overscroll-behavior-block")}} und {{cssxref("overscroll-behavior-inline")}} implementiert, die logischen Zuordnungen für {{cssxref("overscroll-behavior-x")}} und {{cssxref("overscroll-behavior-y")}} ([Firefox-Bug 833953](https://bugzil.la/833953)).

#### Entfernungen

- Die proprietäre Media-Query `-moz-touch-enabled` wurde entfernt ([Firefox-Bug 1486964](https://bugzil.la/1486964)). Sie sollten stattdessen [`pointer: coarse`](/de/docs/Web/CSS/@media/pointer) verwenden.

### SVG

- Die Eigenschaften {{SVGAttr("letter-spacing")}} und {{SVGAttr("word-spacing")}} funktionieren jetzt in SVG ([Firefox-Bug 371787](https://bugzil.la/371787)).

### MathML

#### Entfernungen

- Das veraltete Element {{MathMLElement("mfenced")}} wurde entfernt ([Firefox-Bug 1603773](https://bugzil.la/1603773)). Verwenden Sie stattdessen die Elemente {{MathMLElement("mrow")}} und {{MathMLElement("mo")}}.

### JavaScript

- Die Felder `yearName` und `relatedYear` sind jetzt in der Methode [`DateTimeFormat.prototype.formatToParts()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/formatToParts) verfügbar, wodurch nützliche Formatierungsoptionen für CJK-Kalender ermöglicht werden ([Firefox-Bug 1591664](https://bugzil.la/1591664)).

### APIs

#### DOM

- Die Eigenschaften [`innerWidth`](/de/docs/Web/API/Window/innerWidth) und [`innerHeight`](/de/docs/Web/API/Window/innerHeight) bei [`Window`](/de/docs/Web/API/Window)-Objekten wurden aktualisiert, um die Breite und Höhe des Layout-Viewports in allen Situationen zurückzugeben, anstatt manchmal basierend auf dem visuellen Viewport. Insbesondere gaben diese bei Verwendung des [Responsive Design Modus](https://firefox-source-docs.mozilla.org/devtools-user/responsive_design_mode/index.html) zuvor die Abmessungen des visuellen Viewports zurück, was dazu führte, dass das Verhalten von den Erwartungen abwich ([Firefox-Bug 1514429](https://bugzil.la/1514429)).

#### WebVR

- Die veraltete [WebVR API](/de/docs/Web/API/WebVR_API) – welche durch [WebXR](/de/docs/Web/API/WebXR_Device_API) ersetzt wurde, die sowohl [erweiterte](https://en.wikipedia.org/wiki/Augmented_reality) als auch [virtuelle Realität](https://en.wikipedia.org/wiki/Virtual_reality) Anwendungen unterstützt – [erfordert jetzt einen sicheren Kontext](/de/docs/Web/API/WebVR_API#api_availability) unter Verwendung des {{Glossary("HTTPS", "HTTPS")}}-Protokolls, um zu funktionieren. Dies liegt an der Verfügbarkeit von sensiblen Eingabequellen, die private Informationen enthalten können ([Firefox-Bug 1381645](https://bugzil.la/1381645)).

#### Entfernungen

- Die Unterstützung für die [`VideoPlaybackQuality`](/de/docs/Web/API/VideoPlaybackQuality)-Eigenschaft [`corruptedVideoFrames`](/de/docs/Web/API/VideoPlaybackQuality/corruptedVideoFrames), die in der Spezifikation veraltet ist, wurde aus Firefox entfernt ([Firefox-Bug 1602163](https://bugzil.la/1602163)).

### Sicherheit

_Keine Änderungen._

### WebDriver-Komformität (Marionette)

- `WebDriver:Print` wurde hinzugefügt, um die aktuelle Seite als PDF-Dokument auszudrucken ([Firefox-Bug 1604506](https://bugzil.la/1604506)).
- `Webdriver:TakeScreenshot` erfasst jetzt immer den obersten Betrachtungskontext und nicht den aktuell ausgewählten Betrachtungskontext, wenn kein Element zum Erfassen spezifiziert wurde ([Firefox-Bug 1398087](https://bugzil.la/1398087), [Firefox-Bug 1606794](https://bugzil.la/1606794)).
- Die Verwendung des `full`-Arguments von `Webdriver:TakeScreenshot` führt dazu, dass die gesamte Seite erfasst wird ([Firefox-Bug 1571424](https://bugzil.la/1571424)).

## Änderungen für Add-on-Entwickler

### API-Änderungen

- Die Funktion {{WebExtAPIRef("sidebarAction.toggle()")}} wurde implementiert ([Bug 1453355](https://bugzil.la/1453355)).

### Manifest-Änderungen

_Keine Änderungen._

## Siehe auch

- Hacks-Blogpost: [Firefox 73 is upon us](https://hacks.mozilla.org/2020/02/firefox-73-is-upon-us/)
