---
title: Firefox 104 für Entwickler
slug: Mozilla/Firefox/Releases/104
l10n:
  sourceCommit: 8b6cec0ceff01e7a9d6865cf5306788e15cce4b8
---

{{FirefoxSidebar}}

Dieser Artikel enthält Informationen über die Änderungen in Firefox 104, die Entwickler betreffen. Firefox 104 wurde am 23. August 2022 veröffentlicht.

## Änderungen für Web-Entwickler

### HTML

Keine bemerkenswerten Änderungen.

### CSS

Keine bemerkenswerten Änderungen.

### JavaScript

- Die Methoden {{jsxref("Array.prototype.findLast()")}}, {{jsxref("Array.prototype.findLastIndex()")}}, {{jsxref("TypedArray.prototype.findLast()")}} und {{jsxref("TypedArray.prototype.findLastIndex()")}} werden jetzt unterstützt.
  Diese werden verwendet, um den Wert und den Index (jeweils) des letzten Elements in einem {{jsxref("Array")}} oder {{jsxref("TypedArray")}} zu finden, das einer angegebenen Testfunktion entspricht.
  (Siehe [Firefox-Bug 1775026](https://bugzil.la/1775026) für weitere Details.)

- Die Serialisierung von [nativen Fehlertypen](/de/docs/Web/JavaScript/Reference/Global_Objects/Error#error_types) umfasst zusätzlich die [`stack`](/de/docs/Web/JavaScript/Reference/Global_Objects/Error/stack)-Eigenschaft, wenn sie mit [`window.postMessage()`](/de/docs/Web/API/Window/postMessage) und [`structuredClone()`](/de/docs/Web/API/Window/structuredClone) verwendet wird (bei Fehlertypen, die `stack` enthalten).
  Der `stack` wird noch nicht serialisiert, wenn Fehler mit anderen APIs gesendet werden, wie zum Beispiel [`Worker.postMessage()`](/de/docs/Web/API/Worker/postMessage).
  (Siehe [Firefox-Bug 1774866](https://bugzil.la/1774866) für weitere Details.)

### APIs

#### DOM

- [`HTMLElement.focus()`](/de/docs/Web/API/HTMLElement/focus) unterstützt nun den Parameter [`option.focusVisible`](/de/docs/Web/API/HTMLElement/focus#focusvisible), der verwendet werden kann, um einen Browser zu zwingen, nach dem Fokussieren des Elements eine visuelle Indikation anzuzeigen.
  Beachten Sie, dass Browser möglicherweise automatisch visuelle Indikationen auf fokussierten Elementen bereitstellen, wenn die Implementierung feststellt, dass dies die Barrierefreiheit verbessern würde.
  (Siehe [Firefox-Bug 1765083](https://bugzil.la/1765083) für weitere Details.)

#### Canvas

- Die `fontKerning`-Eigenschaft wird jetzt auf [`CanvasRenderingContext2D`](/de/docs/Web/API/CanvasRenderingContext2D/fontKerning) und [`OffscreenCanvasRenderingContext2D`](/de/docs/Web/API/OffscreenCanvasRenderingContext2D) unterstützt, was Entwicklern ermöglicht, festzulegen, wie Kerning verwendet wird, wenn Text auf eine Leinwand oder eine Offscreen-Leinwand gezeichnet wird ([Firefox-Bug 1778908](https://bugzil.la/1778908)).

#### SVG

- Die [`SVGStyleElement.disabled`](/de/docs/Web/API/SVGStyleElement/disabled)-Eigenschaft kann nun verwendet werden, um ein SVG-Stilelement zu deaktivieren oder zu aktivieren oder um seinen deaktivierten Zustand zu überprüfen.
  Dies entspricht dem Verhalten von [`HTMLStyleElement.disabled`](/de/docs/Web/API/HTMLStyleElement/disabled).
  (Siehe [Firefox-Bug 1712623](https://bugzil.la/1712623) für weitere Details.)

#### Entfernungen

- Das `options`-Argument der [`IDBFactory.open()`](/de/docs/Web/API/IDBFactory/open)-Methode wurde entfernt.
  Diese Option bot eine nicht standardmäßige und nur in Firefox vorhandene Möglichkeit, die angegebene Datenbank persistent zu machen.
  Die Option war zuvor veraltet, und Benutzer, die diese Funktion benötigen, sollten bereits zu [`StorageManager.persist()`](/de/docs/Web/API/StorageManager/persist) migriert sein.
  (Siehe [Firefox-Bug 1354500](https://bugzil.la/1354500) für weitere Details.)

### WebDriver-Konformität (WebDriver BiDi, Marionette)

#### WebDriver BiDi

- Unterstützung für `source` zum `log.entryAdded`-Ereignis hinzugefügt ([Firefox-Bug 1770792](https://bugzil.la/1770792)).
- Aktualisierte `url`, die für `browsingContext.contextCreated`-Ereignisse gesendet werden, um `about:blank` für neu geöffnete Browsing-Kontexte zu sein ([Firefox-Bug 1775141](https://bugzil.la/1775141)).

#### Marionette

- Verbesserte Stabilität und Leistung beim Minimieren oder Wiederherstellen von Fenstern unter Linux ([Firefox-Bug 1780212](https://bugzil.la/1780212)).
- Unterstützung für `touch`-Aktionen hinzugefügt ([Firefox-Bug 1543337](https://bugzil.la/1543337)).

## Ältere Versionen

{{Firefox_for_developers}}
