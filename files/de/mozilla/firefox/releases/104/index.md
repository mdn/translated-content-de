---
title: Firefox 104 für Entwickler
slug: Mozilla/Firefox/Releases/104
l10n:
  sourceCommit: 1d3d0c10ebf5c8c55f75b9adce74d1e5001866c6
---

Dieser Artikel bietet Informationen über die Änderungen in Firefox 104, die Entwickler betreffen. Firefox 104 wurde am 23. August 2022 veröffentlicht.

## Änderungen für Webentwickler

### HTML

Keine bemerkenswerten Änderungen.

### CSS

Keine bemerkenswerten Änderungen.

### JavaScript

- Die Methoden {{jsxref("Array.prototype.findLast()")}}, {{jsxref("Array.prototype.findLastIndex()")}}, {{jsxref("TypedArray.prototype.findLast()")}} und {{jsxref("TypedArray.prototype.findLastIndex()")}} werden jetzt unterstützt.
  Diese werden verwendet, um den Wert und den Index (jeweils) des letzten Elements in einem {{jsxref("Array")}} oder {{jsxref("TypedArray")}} zu finden, das eine bereitgestellte Testfunktion erfüllt.
  (Siehe [Firefox-Bug 1775026](https://bugzil.la/1775026) für mehr Details.)

- Die Serialisierung von [native Error-Typen](/de/docs/Web/JavaScript/Reference/Global_Objects/Error#error_types) enthält zusätzlich die [`stack`](/de/docs/Web/JavaScript/Reference/Global_Objects/Error/stack)-Eigenschaft, wenn sie mit [`window.postMessage()`](/de/docs/Web/API/Window/postMessage) und [`structuredClone()`](/de/docs/Web/API/Window/structuredClone) verwendet wird (bei Error-Typen, die `stack` umfassen).
  Der `stack` wird noch nicht serialisiert, wenn Errors über andere APIs gesendet werden, wie beispielsweise [`Worker.postMessage()`](/de/docs/Web/API/Worker/postMessage).
  (Siehe [Firefox-Bug 1774866](https://bugzil.la/1774866) für mehr Details.)

### APIs

#### DOM

- [`HTMLElement.focus()`](/de/docs/Web/API/HTMLElement/focus) unterstützt jetzt den Parameter [`option.focusVisible`](/de/docs/Web/API/HTMLElement/focus#focusvisible), der verwendet werden kann, um den Browser zu zwingen, nach dem Fokussieren des Elements eine visuelle Anzeige zu zeigen.
  Beachten Sie, dass Browser automatisch eine visuelle Anzeige auf fokussierten Elementen bereitstellen können, wenn die Implementierung feststellt, dass dies die Barrierefreiheit verbessern wird.
  (Siehe [Firefox-Bug 1765083](https://bugzil.la/1765083) für mehr Details.)

#### Canvas

- Die Eigenschaft `fontKerning` wird jetzt auf [`CanvasRenderingContext2D`](/de/docs/Web/API/CanvasRenderingContext2D/fontKerning) und [`OffscreenCanvasRenderingContext2D`](/de/docs/Web/API/OffscreenCanvasRenderingContext2D) unterstützt, wodurch Entwickler festlegen können, wie das Kerning verwendet wird, wenn Text auf eine Leinwand oder eine Offscreen-Leinwand gezeichnet wird ([Firefox-Bug 1778908](https://bugzil.la/1778908)).

#### SVG

- Die Eigenschaft [`SVGStyleElement.disabled`](/de/docs/Web/API/SVGStyleElement/disabled) kann jetzt verwendet werden, um ein SVG-Stilelement zu deaktivieren oder zu aktivieren, oder um seinen deaktivierten Zustand zu überprüfen.
  Dies entspricht dem Verhalten von [`HTMLStyleElement.disabled`](/de/docs/Web/API/HTMLStyleElement/disabled).
  (Siehe [Firefox-Bug 1712623](https://bugzil.la/1712623) für mehr Details.)

#### Entfernungen

- Das `options`-Argument der Methode [`IDBFactory.open()`](/de/docs/Web/API/IDBFactory/open) wurde entfernt.
  Diese Option bot eine nicht standardisierte und nur in Firefox verfügbare Möglichkeit, die angegebene Datenbank persistent zu machen.
  Die Option war zuvor veraltet, und Nutzer, die diese Funktionalität benötigen, sollten bereits auf [`StorageManager.persist()`](/de/docs/Web/API/StorageManager/persist) migriert sein.
  (Siehe [Firefox-Bug 1354500](https://bugzil.la/1354500) für mehr Details.)

### WebDriver-Konformität (WebDriver BiDi, Marionette)

#### WebDriver BiDi

- Unterstützung für `source` beim `log.entryAdded`-Ereignis hinzugefügt ([Firefox-Bug 1770792](https://bugzil.la/1770792)).
- Aktualisierte die gesendete `url` für `browsingContext.contextCreated`-Ereignisse, um für neu geöffnete Browsing-Kontexte `about:blank` zu sein ([Firefox-Bug 1775141](https://bugzil.la/1775141)).

#### Marionette

- Verbesserte Stabilität und Leistung beim Minimieren oder Wiederherstellen von Fenstern unter Linux ([Firefox-Bug 1780212](https://bugzil.la/1780212)).
- Unterstützung für `touch`-Aktionen hinzugefügt ([Firefox-Bug 1543337](https://bugzil.la/1543337)).

## Änderungen für Add-on-Entwickler

- Die Flags `emailtracking` und `emailtracking_content` wurden zu den in `urlClassification` verfügbaren Tracking-Klassifikationen für die {{WebExtAPIRef("webRequest")}}-Ereignisse hinzugefügt ([Firefox-Bug 1773695](https://bugzil.la/1773695))

## Ältere Versionen

{{Firefox_for_developers}}
