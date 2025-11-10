---
title: Firefox 104 Versionshinweise für Entwickler
short-title: Firefox 104
slug: Mozilla/Firefox/Releases/104
l10n:
  sourceCommit: 61912f53d01e935aea926a2226130fb4587414a9
---

Dieser Artikel liefert Informationen über die Änderungen in Firefox 104, die Entwickler betreffen werden. Firefox 104 wurde am 23. August 2022 veröffentlicht.

## Änderungen für Web-Entwickler

### HTML

Keine bemerkenswerten Änderungen.

### CSS

Keine bemerkenswerten Änderungen.

### JavaScript

- Die Methoden {{jsxref("Array.prototype.findLast()")}}, {{jsxref("Array.prototype.findLastIndex()")}}, {{jsxref("TypedArray.prototype.findLast()")}} und {{jsxref("TypedArray.prototype.findLastIndex()")}} werden nun unterstützt.
  Diese werden verwendet, um den Wert und den Index (jeweils) des letzten Elements in einem {{jsxref("Array")}} oder {{jsxref("TypedArray")}} zu finden, das einer bereitgestellten Testfunktion entspricht.
  (Weitere Details finden Sie im [Firefox-Bug 1775026](https://bugzil.la/1775026).)

- Die Serialisierung von [nativen Error-Typen](/de/docs/Web/JavaScript/Reference/Global_Objects/Error#error_types) umfasst zusätzlich die [`stack`](/de/docs/Web/JavaScript/Reference/Global_Objects/Error/stack)-Eigenschaft, wenn sie mit [`window.postMessage()`](/de/docs/Web/API/Window/postMessage) und [`structuredClone()`](/de/docs/Web/API/Window/structuredClone) verwendet wird (bei Fehler-Typen, die `stack` enthalten).
  Der `stack` wird noch nicht serialisiert, wenn Fehler mit anderen APIs gesendet werden, wie z.B. [`Worker.postMessage()`](/de/docs/Web/API/Worker/postMessage)
  (Weitere Details finden Sie im [Firefox-Bug 1774866](https://bugzil.la/1774866).)

### APIs

#### DOM

- [`HTMLElement.focus()`](/de/docs/Web/API/HTMLElement/focus) unterstützt jetzt den Parameter [`option.focusVisible`](/de/docs/Web/API/HTMLElement/focus#focusvisible), der verwendet werden kann, um den Browser zu zwingen, eine visuelle Indikation anzuzeigen, nachdem das Element fokussiert wurde.
  Beachten Sie, dass Browser möglicherweise automatisch eine visuelle Indikation auf fokussierten Elementen bereitstellen, wenn die Implementierung feststellt, dass dies die Barrierefreiheit verbessert.
  (Weitere Details finden Sie im [Firefox-Bug 1765083](https://bugzil.la/1765083).)

#### Canvas

- Die `fontKerning`-Eigenschaft wird jetzt auf [`CanvasRenderingContext2D`](/de/docs/Web/API/CanvasRenderingContext2D/fontKerning) und [`OffscreenCanvasRenderingContext2D`](/de/docs/Web/API/OffscreenCanvasRenderingContext2D) unterstützt, was Entwicklern ermöglicht, festzulegen, wie das Kerning verwendet wird, wenn Text auf eine Leinwand oder eine Offscreen-Leinwand gezeichnet wird ([Firefox-Bug 1778908](https://bugzil.la/1778908)).

#### SVG

- Mit der [`SVGStyleElement.disabled`](/de/docs/Web/API/SVGStyleElement/disabled)-Eigenschaft kann jetzt ein SVG-Style-Element deaktiviert oder aktiviert oder dessen deaktivierter Zustand überprüft werden.
  Dies spiegelt das Verhalten von [`HTMLStyleElement.disabled`](/de/docs/Web/API/HTMLStyleElement/disabled) wider.
  (Weitere Details finden Sie im [Firefox-Bug 1712623](https://bugzil.la/1712623).)

#### Entfernungen

- Das `options` Argument zur Methode [`IDBFactory.open()`](/de/docs/Web/API/IDBFactory/open) wurde entfernt.
  Diese Option bot eine nicht standardisierte und nur in Firefox verfügbare Möglichkeit, die angegebene Datenbank persistent zu machen.
  Die Option wurde zuvor veraltet, und Benutzer, die diese Funktionalität benötigen, sollten bereits zu [`StorageManager.persist()`](/de/docs/Web/API/StorageManager/persist) migriert sein.
  (Weitere Details finden Sie im [Firefox-Bug 1354500](https://bugzil.la/1354500).)

### WebDriver-Konformität (WebDriver BiDi, Marionette)

#### WebDriver BiDi

- Unterstützung für `source` beim `log.entryAdded`-Ereignis hinzugefügt ([Firefox-Bug 1770792](https://bugzil.la/1770792)).
- Aktualisierung der `url`, die für `browsingContext.contextCreated`-Ereignisse gesendet wird, um `about:blank` für neu eröffnete Browsing-Kontexte zu sein ([Firefox-Bug 1775141](https://bugzil.la/1775141)).

#### Marionette

- Verbesserte Stabilität und Leistung beim Minimieren oder Wiederherstellen von Fenstern unter Linux ([Firefox-Bug 1780212](https://bugzil.la/1780212)).
- Unterstützung für `touch`-Aktionen hinzugefügt ([Firefox-Bug 1543337](https://bugzil.la/1543337)).

## Änderungen für Add-on-Entwickler

- Die Flags `emailtracking` und `emailtracking_content` wurden zu den Tracking-Klassifikationen hinzugefügt, die in `urlClassification` für die {{WebExtAPIRef("webRequest")}}-Ereignisse verfügbar sind ([Firefox-Bug 1773695](https://bugzil.la/1773695)).
