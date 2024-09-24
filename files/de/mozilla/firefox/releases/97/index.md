---
title: Firefox 97 für Entwickler
slug: Mozilla/Firefox/Releases/97
l10n:
  sourceCommit: 8cd08162e592c1baf5d888f4c5a08a58360344b5
---

{{FirefoxSidebar}}

Dieser Artikel bietet Informationen über die Änderungen in Firefox 97, die für Entwickler von Bedeutung sind. Firefox 97 wurde am 8. Februar 2022 veröffentlicht.

## Änderungen für Webentwickler

### HTML

Keine bemerkenswerten Änderungen

### CSS

- Die CSS-Einheiten `cap` und `ic` werden nun für die Verwendung mit den Datentypen {{cssxref("&lt;length&gt;")}} und {{cssxref("&lt;length-percentage&gt;")}} unterstützt. Weitere Informationen finden Sie in [Firefox-Bug 1702924](https://bugzil.la/1702924) und [Firefox-Bug 1531223](https://bugzil.la/1531223).

- Die CSS-Eigenschaft `color-adjust` wurde in {{cssxref("print-color-adjust")}} umbenannt, um der relevanten Spezifikation zu entsprechen. Der Kurzname `color-adjust` ist veraltet. Details finden Sie in [Firefox-Bug 747595](https://bugzil.la/747595).

- CSS-Kaskadenschichten sind jetzt standardmäßig verfügbar. Die [`@layer`](/de/docs/Web/CSS/@layer)-Regel deklariert eine Kaskadenschicht, die die Deklaration von Styles ermöglicht und die über die [`@import`](/de/docs/Web/CSS/@import)-Regel mit der Funktion `layer()` importiert werden kann. Weitere Details finden Sie in [Firefox-Bug 1699217](https://bugzil.la/1699217).

- Das globale CSS-Schlüsselwort {{cssxref("revert-layer")}} wurde hinzugefügt, um das Zurücksetzen von Eigenschaftswerten in einer Kaskadenschicht auf die übereinstimmenden Regeln der vorherigen Schicht zu ermöglichen. Dieses Schlüsselwort kann auf jede Eigenschaft angewendet werden, einschließlich der CSS-Kurzschreibweise {{cssxref("all")}}. Weitere Informationen finden Sie in [Firefox-Bug 1699220](https://bugzil.la/1699220).

- Die CSS-Eigenschaft [`scrollbar-gutter`](/de/docs/Web/CSS/scrollbar-gutter) wird jetzt unterstützt. Diese gibt Entwicklern die Kontrolle über den reservierten Platz für die Bildlaufleiste und verhindert ungewollte Layoutänderungen, während der Inhalt wächst. Weitere Details finden Sie in [Firefox-Bug 1715112](https://bugzil.la/1715112).

### JavaScript

Keine bemerkenswerten Änderungen

### SVG

- Das SVG-Attribut {{SVGAttr('d')}}, das verwendet wird, um einen zu zeichnenden Pfad zu definieren, kann jetzt als Eigenschaft in CSS verwendet werden. Es akzeptiert die Werte [path()](/de/docs/Web/CSS/basic-shape/path) oder `none`. Details finden Sie in [Firefox-Bug 1744599](https://bugzil.la/1744599).

#### Entfernung

- Eine Reihe von `SVGPathSeg`-APIs sind jetzt standardmäßig hinter einer Voreinstellung deaktiviert und werden voraussichtlich in zukünftigen Revisionen entfernt. Dies umfasst: `SVGPathSegList`, [SVGPathElement.getPathSegAtLength()](/de/docs/Web/API/SVGPathElement), `SVGAnimatedPathData`. Weitere Details finden Sie in [Firefox-Bug 1388931](https://bugzil.la/1388931).

### APIs

- `AnimationFrameProvider` ist jetzt in einem [`DedicatedWorkerGlobalScope`](/de/docs/Web/API/DedicatedWorkerGlobalScope) verfügbar. Dies bedeutet, dass die Methoden [`requestAnimationFrame`](/de/docs/Web/API/Window/requestAnimationFrame) und [`cancelAnimationFrame`](/de/docs/Web/API/Window/cancelAnimationFrame) innerhalb eines dedizierten Workers verwendet werden können. Weitere Details finden Sie in [Firefox-Bug 1388931](https://bugzil.la/1388931).

#### DOM

- Der Grund für ein Abbruchsignal kann jetzt mit {{domxref("AbortController.abort()")}} (oder {{domxref("AbortSignal.abort_static", "AbortSignal.abort()")}}) festgelegt werden und steht in der Eigenschaft {{domxref("AbortSignal.reason")}} zur Verfügung. Dieser Grund ist standardmäßig ein "AbortError" {{domxref("DOMException")}}. Der Grund kann wie angemessen durch das Werfen oder Bearbeiten von Promise-Ablehnungen behandelt werden. ([Firefox-Bug 1737771](https://bugzil.la/1737771)).

- Die Komfortmethode {{domxref("AbortSignal.throwIfAborted()")}} kann verwendet werden, um zu überprüfen, ob ein Signal abgebrochen wurde, und wenn ja, den {{domxref("AbortSignal.reason()")}} auszulösen. Dies erleichtert es Entwicklern, Abbruchsignale in Code zu behandeln, in dem das Signal nicht einfach an eine abbrechbare Methode übergeben werden kann. ([Firefox-Bug 1745372](https://bugzil.la/1745372)).

### WebDriver-Konformität (Marionette)

- `Marionette:Quit` akzeptiert einen neuen booleschen Parameter, `safeMode`, um Firefox im abgesicherten Modus neu zu starten ([Firefox-Bug 1144075](https://bugzil.la/1144075)).
- Verbesserte Stabilität für `WebDriver:NewSession` und `WebDriver:NewWindow` beim Warten darauf, dass das aktuelle oder initiale Dokument geladen wird ([Firefox-Bug 1739369](https://bugzil.la/1739369), [Firefox-Bug 1747359](https://bugzil.la/1747359)).

## Änderungen für Add-On-Entwickler

- `cookieStoreId` in {{WebExtAPIRef("tabs.query")}} unterstützt ein Array von Strings. Dies ermöglicht Abfragen, um Tabs mit mehr als einer Cookie-Store-ID abzugleichen ([Firefox-Bug 1730931](https://bugzil.la/1730931)).

- `cookieStoreId` wurde zu {{WebExtAPIRef("contentScripts.register")}} hinzugefügt. Dies ermöglicht Erweiterungen das Registrieren von container-spezifischen Content-Skripten ([Firefox-Bug 1470651](https://bugzil.la/1470651)).

## Ältere Versionen

{{Firefox_for_developers}}
