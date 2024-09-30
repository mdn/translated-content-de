---
title: Firefox 104 für Entwickler
slug: Mozilla/Firefox/Releases/104
l10n:
  sourceCommit: 8b6cec0ceff01e7a9d6865cf5306788e15cce4b8
---

{{FirefoxSidebar}}

Dieser Artikel bietet Informationen über die Änderungen in Firefox 104, die Entwickler betreffen. Firefox 104 wurde am 23. August 2022 veröffentlicht.

## Änderungen für Webentwickler

### HTML

Keine bemerkenswerten Änderungen.

### CSS

Keine bemerkenswerten Änderungen.

### JavaScript

- Die Methoden {{jsxref("Array.prototype.findLast()")}}, {{jsxref("Array.prototype.findLastIndex()")}}, {{jsxref("TypedArray.prototype.findLast()")}} und {{jsxref("TypedArray.prototype.findLastIndex()")}} werden nun unterstützt.
  Diese werden verwendet, um den Wert und den Index (jeweils) des letzten Elements in einem {{jsxref("Array")}} oder {{jsxref("TypedArray")}} zu finden, das einer angegebenen Testfunktion entspricht.
  (Weitere Details siehe [Firefox Bug 1775026](https://bugzil.la/1775026).)

- Die Serialisierung von [nativen Fehlertypen](/de/docs/Web/JavaScript/Reference/Global_Objects/Error#error_types) umfasst zusätzlich die [`stack`](/de/docs/Web/JavaScript/Reference/Global_Objects/Error/stack) Eigenschaft, wenn sie mit [`window.postMessage()`](/de/docs/Web/API/Window/postMessage) und [`structuredClone()`](/de/docs/Web/API/Window/structuredClone) (bei Fehlertypen, die `stack` enthalten) verwendet werden.
  Die `stack` wird noch nicht serialisiert, wenn Fehler mit anderen APIs gesendet werden, wie zum Beispiel [`Worker.postMessage()`](/de/docs/Web/API/Worker/postMessage)
  (Weitere Details siehe [Firefox Bug 1774866](https://bugzil.la/1774866).)

### APIs

#### DOM

- [`HTMLElement.focus()`](/de/docs/Web/API/HTMLElement/focus) unterstützt jetzt den Parameter [`option.focusVisible`](/de/docs/Web/API/HTMLElement/focus#focusvisible), der verwendet werden kann, um den Browser zu zwingen, einen visuellen Hinweis anzuzeigen, nachdem das Element fokussiert wurde.
  Beachten Sie, dass Browser möglicherweise automatisch visuelle Hinweise auf fokussierten Elementen bereitstellen, wenn die Implementierung feststellt, dass dies die Barrierefreiheit verbessern wird.
  (Weitere Details siehe [Firefox Bug 1765083](https://bugzil.la/1765083).)

#### Canvas

- Die Eigenschaft `fontKerning` wird nun auf [`CanvasRenderingContext2D`](/de/docs/Web/API/CanvasRenderingContext2D/fontKerning) und [`OffscreenCanvasRenderingContext2D`](/de/docs/Web/API/OffscreenCanvasRenderingContext2D) unterstützt. Dies ermöglicht es Entwicklern zu spezifizieren, wie das Kerning verwendet wird, wenn Text auf eine Leinwand oder eine Offscreen-Leinwand gezeichnet wird ([Firefox Bug 1778908](https://bugzil.la/1778908)).

#### SVG

- Die Eigenschaft [`SVGStyleElement.disabled`](/de/docs/Web/API/SVGStyleElement/disabled) kann jetzt verwendet werden, um ein SVG-Stilelement zu deaktivieren oder zu aktivieren oder um dessen deaktivierten Zustand zu überprüfen.
  Dies spiegelt das Verhalten von [`HTMLStyleElement.disabled`](/de/docs/Web/API/HTMLStyleElement/disabled) wider.
  (Weitere Details siehe [Firefox Bug 1712623](https://bugzil.la/1712623).)

#### Entfernungen

- Das `options` Argument der Methode [`IDBFactory.open()`](/de/docs/Web/API/IDBFactory/open) wurde entfernt.
  Diese Option bot eine nicht standardisierte und nur in Firefox verfügbare Möglichkeit, die angegebene Datenbank persistent zu machen.
  Die Option wurde zuvor als veraltet markiert, und Nutzer, die diese Funktionalität benötigen, sollten bereits auf [`StorageManager.persist()`](/de/docs/Web/API/StorageManager/persist) migriert haben.
  (Weitere Details siehe [Firefox Bug 1354500](https://bugzil.la/1354500).)

### WebDriver-Konformität (WebDriver BiDi, Marionette)

#### WebDriver BiDi

- Unterstützung für `source` im `log.entryAdded` Ereignis hinzugefügt ([Firefox Bug 1770792](https://bugzil.la/1770792)).
- Das für `browsingContext.contextCreated`-Ereignisse gesendete `url` wurde auf `about:blank` für neu geöffneten Browsing-Kontexte aktualisiert ([Firefox Bug 1775141](https://bugzil.la/1775141)).

#### Marionette

- Verbesserte Stabilität und Leistung beim Minimieren oder Wiederherstellen von Fenstern unter Linux ([Firefox Bug 1780212](https://bugzil.la/1780212)).
- Unterstützung für `touch`-Aktionen hinzugefügt ([Firefox Bug 1543337](https://bugzil.la/1543337)).

## Ältere Versionen

{{Firefox_for_developers}}
