---
title: Firefox 104 für Entwickler
slug: Mozilla/Firefox/Releases/104
l10n:
  sourceCommit: 33a5708cc125bcaa4ebe74b46bb6fe1820616ff0
---

{{FirefoxSidebar}}

Dieser Artikel informiert über die Änderungen in Firefox 104, die Entwickler betreffen. Firefox 104 wurde am 23. August 2022 veröffentlicht.

## Änderungen für Web-Entwickler

### HTML

Keine bemerkenswerten Änderungen.

### CSS

Keine bemerkenswerten Änderungen.

### JavaScript

- Die Methoden {{jsxref("Array.prototype.findLast()")}}, {{jsxref("Array.prototype.findLastIndex()")}}, {{jsxref("TypedArray.prototype.findLast()")}}, und {{jsxref("TypedArray.prototype.findLastIndex()")}} werden jetzt unterstützt.
  Diese werden verwendet, um den Wert und Index (jeweils) des letzten Elements in einem {{jsxref("Array")}} oder {{jsxref("TypedArray")}} zu finden, das einer angegebenen Testfunktion entspricht.
  (Siehe [Firefox-Bug 1775026](https://bugzil.la/1775026) für weitere Details.)

- Die Serialisierung von [nativen Error-Typen](/de/docs/Web/JavaScript/Reference/Global_Objects/Error#error_types) beinhaltet zusätzlich die [`stack`](/de/docs/Web/JavaScript/Reference/Global_Objects/Error/stack)-Eigenschaft, wenn sie mit [`window.postMessage()`](/de/docs/Web/API/Window/postMessage) und [`structuredClone()`](/de/docs/Web/API/Window/structuredClone) verwendet wird (bei Error-Typen, die `stack` enthalten).
  Der `stack` wird noch nicht serialisiert, wenn Fehler über andere APIs gesendet werden, wie z.B. [`Worker.postMessage()`](/de/docs/Web/API/Worker/postMessage).
  (Siehe [Firefox-Bug 1774866](https://bugzil.la/1774866) für weitere Details.)

### APIs

#### DOM

- [`HTMLElement.focus()`](/de/docs/Web/API/HTMLElement/focus) unterstützt jetzt den Parameter [`option.focusVisible`](/de/docs/Web/API/HTMLElement/focus#focusvisible), mit dem erzwungen werden kann, dass der Browser eine visuelle Anzeige nach der Fokussierung des Elements zeigt.
  Beachten Sie, dass Browser automatisch eine visuelle Anzeige auf fokussierten Elementen bereitstellen können, wenn die Implementierung feststellt, dass dadurch die Barrierefreiheit verbessert wird.
  (Siehe [Firefox-Bug 1765083](https://bugzil.la/1765083) für weitere Details.)

#### Canvas

- Die Eigenschaft `fontKerning` wird jetzt von [`CanvasRenderingContext2D`](/de/docs/Web/API/CanvasRenderingContext2D/fontKerning) und [`OffscreenCanvasRenderingContext2D`](/de/docs/Web/API/OffscreenCanvasRenderingContext2D) unterstützt, wodurch Entwickler angeben können, wie Kerning verwendet wird, wenn Text auf ein Canvas oder ein Offscreen-Canvas gezeichnet wird ([Firefox-Bug 1778908](https://bugzil.la/1778908)).

#### SVG

- Die [`SVGStyleElement.disabled`](/de/docs/Web/API/SVGStyleElement/disabled)-Eigenschaft kann jetzt verwendet werden, um ein SVG-Style-Element zu deaktivieren oder zu aktivieren oder um seinen deaktivierten Zustand zu überprüfen.
  Dies spiegelt das Verhalten von [`HTMLStyleElement.disabled`](/de/docs/Web/API/HTMLStyleElement/disabled) wider.
  (Siehe [Firefox-Bug 1712623](https://bugzil.la/1712623) für weitere Details.)

#### Entfernungen

- Das `options`-Argument der [`IDBFactory.open()`](/de/docs/Web/API/IDBFactory/open)-Methode wurde entfernt.
  Diese Option bot eine nicht-standardisierte und nur in Firefox verfügbare Möglichkeit, die angegebene Datenbank dauerhaft zu machen.
  Die Option war zuvor veraltet, und Benutzer, die diese Funktionalität benötigen, sollten bereits zu [`StorageManager.persist()`](/de/docs/Web/API/StorageManager/persist) migriert sein.
  (Siehe [Firefox-Bug 1354500](https://bugzil.la/1354500) für weitere Details.)

### WebDriver-Konformität (WebDriver BiDi, Marionette)

#### WebDriver BiDi

- Unterstützung für `source` beim `log.entryAdded`-Ereignis hinzugefügt ([Firefox-Bug 1770792](https://bugzil.la/1770792)).
- Aktualisiert die gesendete `url` für `browsingContext.contextCreated`-Ereignisse auf `about:blank` für neu geöffnete Browsing-Kontexte ([Firefox-Bug 1775141](https://bugzil.la/1775141)).

#### Marionette

- Verbesserte Stabilität und Leistung beim Minimieren oder Wiederherstellen von Fenstern unter Linux ([Firefox-Bug 1780212](https://bugzil.la/1780212)).
- Unterstützung für `touch`-Aktionen hinzugefügt ([Firefox-Bug 1543337](https://bugzil.la/1543337)).

## Änderungen für Add-on-Entwickler

- Die Flags `emailtracking` und `emailtracking_content` wurden zu den in `urlClassification` verfügbaren Tracking-Klassifikationen für die {{WebExtAPIRef("webRequest")}}-Events hinzugefügt ([Firefox-Bug 1773695](https://bugzil.la/1773695)).

## Ältere Versionen

{{Firefox_for_developers}}
