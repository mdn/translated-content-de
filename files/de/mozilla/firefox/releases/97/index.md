---
title: Firefox 97 Versionshinweise für Entwickler
short-title: Firefox 97
slug: Mozilla/Firefox/Releases/97
l10n:
  sourceCommit: f69b6693212029ce4b9fa0c753729044577af548
---

Dieser Artikel bietet Informationen über die Änderungen in Firefox 97, die Entwickler betreffen. Firefox 97 wurde am 8. Februar 2022 veröffentlicht.

## Änderungen für Webentwickler

### HTML

Keine bemerkenswerten Änderungen

### CSS

- Die CSS-Einheiten `cap` und `ic` werden jetzt für die Verwendung mit den Datentypen {{cssxref("&lt;length&gt;")}} und {{cssxref("&lt;length-percentage&gt;")}} unterstützt.
  Weitere Informationen finden Sie in [Firefox Bug 1702924](https://bugzil.la/1702924) und [Firefox Bug 1531223](https://bugzil.la/1531223).

- Die CSS-Eigenschaft `color-adjust` wurde in {{cssxref("print-color-adjust")}} umbenannt, um der relevanten Spezifikation zu entsprechen.
  Der Kurzname `color-adjust` ist veraltet.
  Details finden Sie unter [Firefox Bug 747595](https://bugzil.la/747595).

- CSS-Kaskadenschichten sind jetzt standardmäßig verfügbar. Die [`@layer`](/de/docs/Web/CSS/Reference/At-rules/@layer)-Regel deklariert eine Kaskadenschicht, die die Deklaration von Styles ermöglicht und über die [`@import`](/de/docs/Web/CSS/Reference/At-rules/@import)-Regel unter Verwendung der `layer()`-Funktion importiert werden kann. Weitere Details finden Sie in [Firefox Bug 1699217](https://bugzil.la/1699217).

- Das globale CSS-Schlüsselwort {{cssxref("revert-layer")}} wurde hinzugefügt, um das Zurücksetzen von Eigenschaftswerten in einer Kaskadenschicht auf die entsprechenden Regeln in der vorherigen Kaskadenschicht zu ermöglichen. Dieses Schlüsselwort kann auf jede Eigenschaft angewendet werden, einschließlich der CSS-Kurzschreibweise {{cssxref("all")}}. Weitere Informationen finden Sie in [Firefox Bug 1699220](https://bugzil.la/1699220).

- Die CSS-Eigenschaft [`scrollbar-gutter`](/de/docs/Web/CSS/Reference/Properties/scrollbar-gutter) wird jetzt unterstützt. Dies gibt Entwicklern die Kontrolle über den reservierten Platz für die Bildlaufleiste, um unerwünschte Layoutänderungen zu verhindern, wenn der Inhalt wächst.
  Weitere Informationen finden Sie in [Firefox Bug 1715112](https://bugzil.la/1715112).

### JavaScript

Keine bemerkenswerten Änderungen

### SVG

- Das SVG-Attribut {{SVGAttr('d')}}, das zum Definieren eines zu zeichnenden Pfads verwendet wird, kann jetzt als Eigenschaft in CSS verwendet werden.
  Es akzeptiert die Werte [path()](/de/docs/Web/CSS/Reference/Values/basic-shape/path) oder `none`. (Details siehe [Firefox Bug 1744599](https://bugzil.la/1744599)).

#### Entfernungen

- Eine Reihe von `SVGPathSeg`-APIs sind jetzt standardmäßig hinter einer Einstellung deaktiviert und sollen in zukünftigen Revisionen entfernt werden.
  Dazu gehören: `SVGPathSegList`, [SVGPathElement.getPathSegAtLength()](/de/docs/Web/API/SVGPathElement), `SVGAnimatedPathData`.
  (Details siehe [Firefox Bug 1388931](https://bugzil.la/1388931)).

### APIs

- `AnimationFrameProvider` ist jetzt in einem [`DedicatedWorkerGlobalScope`](/de/docs/Web/API/DedicatedWorkerGlobalScope) verfügbar. Das bedeutet, dass die Methoden [`requestAnimationFrame`](/de/docs/Web/API/Window/requestAnimationFrame) und [`cancelAnimationFrame`](/de/docs/Web/API/Window/cancelAnimationFrame) innerhalb eines dedizierten Workers verwendet werden können.
  (Details siehe [Firefox Bug 1388931](https://bugzil.la/1388931)).

#### DOM

- Der Grund für ein Abbruchsignal kann jetzt mit [`AbortController.abort()`](/de/docs/Web/API/AbortController/abort) (oder [`AbortSignal.abort()`](/de/docs/Web/API/AbortSignal/abort_static)) gesetzt werden und wird in der [`AbortSignal.reason`](/de/docs/Web/API/AbortSignal/reason)-Eigenschaft verfügbar sein.
  Dieser Grund ist standardmäßig ein "AbortError" [`DOMException`](/de/docs/Web/API/DOMException).
  Der Grund kann geworfen oder entsprechend über eine Promise-Zurückweisung behandelt werden.
  ([Firefox Bug 1737771](https://bugzil.la/1737771)).
- Die Komfortmethode [`AbortSignal.throwIfAborted()`](/de/docs/Web/API/AbortSignal/throwIfAborted) kann verwendet werden, um zu überprüfen, ob ein Signal abgebrochen wurde, und in diesem Fall den [`AbortSignal.reason()`](/de/docs/Web/API/AbortSignal/reason) auszulösen.
  Dies erleichtert es Entwicklern, Abbruchsignale in Code zu behandeln, in dem Sie das Signal nicht einfach an eine abbrechbare Methode übergeben können. ([Firefox Bug 1745372](https://bugzil.la/1745372)).

### WebDriver-Konformität (Marionette)

- `Marionette:Quit` akzeptiert einen neuen booleschen Parameter, `safeMode`, um Firefox im abgesicherten Modus neu zu starten ([Firefox Bug 1144075](https://bugzil.la/1144075)).
- Verbesserte Stabilität für `WebDriver:NewSession` und `WebDriver:NewWindow`, wenn auf das Laden des aktuellen oder initialen Dokuments gewartet wird ([Firefox Bug 1739369](https://bugzil.la/1739369), [Firefox Bug 1747359](https://bugzil.la/1747359)).

## Änderungen für Add-on-Entwickler

- `cookieStoreId` in {{WebExtAPIRef("tabs.query")}} unterstützt ein Array von Zeichenfolgen. Dadurch können Abfragen Registerkarten gegen mehr als eine Cookie-Store-ID abgleichen ([Firefox Bug 1730931](https://bugzil.la/1730931)).
- `cookieStoreId` wurde zu {{WebExtAPIRef("contentScripts.register")}} hinzugefügt. Dadurch können Erweiterungen container-spezifische Inhaltsskripte registrieren ([Firefox Bug 1470651](https://bugzil.la/1470651)).
