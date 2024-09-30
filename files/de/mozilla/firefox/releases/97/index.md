---
title: Firefox 97 für Entwickler
slug: Mozilla/Firefox/Releases/97
l10n:
  sourceCommit: 8cd08162e592c1baf5d888f4c5a08a58360344b5
---

{{FirefoxSidebar}}

Dieser Artikel bietet Informationen über die Änderungen in Firefox 97, die Entwickler betreffen. Firefox 97 wurde am 8. Februar 2022 veröffentlicht.

## Änderungen für Webentwickler

### HTML

Keine bemerkenswerten Änderungen

### CSS

- Die CSS-Einheiten `cap` und `ic` werden jetzt für die Verwendung mit den Datentypen {{cssxref("&lt;length&gt;")}} und {{cssxref("&lt;length-percentage&gt;")}} unterstützt. Weitere Informationen finden Sie in [Firefox Bug 1702924](https://bugzil.la/1702924) und [Firefox Bug 1531223](https://bugzil.la/1531223).

- Die CSS-Eigenschaft `color-adjust` wurde in {{cssxref("print-color-adjust")}} umbenannt, um der relevanten Spezifikation zu entsprechen. Der Kurzname `color-adjust` ist veraltet. Details finden Sie in [Firefox Bug 747595](https://bugzil.la/747595).

- CSS-Kaskadenschichten sind jetzt standardmäßig verfügbar. Die [`@layer`](/de/docs/Web/CSS/@layer)-Regel deklariert eine Kaskadenschicht, die die Deklaration von Stilen ermöglicht und über die [`@import`](/de/docs/Web/CSS/@import)-Regel mit der `layer()`-Funktion importiert werden kann. Weitere Details finden Sie in [Firefox Bug 1699217](https://bugzil.la/1699217).

- Das globale CSS-Schlüsselwort {{cssxref("revert-layer")}} wurde hinzugefügt, um das Zurückrollen von Eigenschaftswerten in einer Kaskadenschicht auf die passenden Regeln in der vorherigen Kaskadenschicht zu ermöglichen. Dieses Schlüsselwort kann auf jede Eigenschaft angewendet werden, einschließlich der CSS-Kurzschrift-Eigenschaft {{cssxref("all")}}. Weitere Informationen finden Sie in [Firefox Bug 1699220](https://bugzil.la/1699220).

- Die CSS-Eigenschaft [`scrollbar-gutter`](/de/docs/Web/CSS/scrollbar-gutter) wird jetzt unterstützt. Dadurch haben Entwickler die Kontrolle über den reservierten Platz für die Bildlaufleiste und können unerwünschte Layoutänderungen verhindern, während der Inhalt wächst. Weitere Details finden Sie in [Firefox Bug 1715112](https://bugzil.la/1715112).

### JavaScript

Keine bemerkenswerten Änderungen

### SVG

- Das SVG-Attribut {{SVGAttr('d')}}, das verwendet wird, um einen zu zeichnenden Pfad zu definieren, kann jetzt als Eigenschaft in CSS verwendet werden. Es akzeptiert die Werte [path()](/de/docs/Web/CSS/basic-shape/path) oder `none`. (Weitere Details finden Sie in [Firefox Bug 1744599](https://bugzil.la/1744599).)

#### Entfernungen

- Eine Reihe von `SVGPathSeg`-APIs sind jetzt standardmäßig hinter einer Einstellung deaktiviert und sollen in zukünftigen Versionen entfernt werden. Dazu gehören: `SVGPathSegList`, [SVGPathElement.getPathSegAtLength()](/de/docs/Web/API/SVGPathElement), `SVGAnimatedPathData`. (Weitere Details finden Sie in [Firefox Bug 1388931](https://bugzil.la/1388931).)

### APIs

- `AnimationFrameProvider` ist jetzt in einem [`DedicatedWorkerGlobalScope`](/de/docs/Web/API/DedicatedWorkerGlobalScope) verfügbar. Dies bedeutet, dass die Methoden [`requestAnimationFrame`](/de/docs/Web/API/Window/requestAnimationFrame) und [`cancelAnimationFrame`](/de/docs/Web/API/Window/cancelAnimationFrame) innerhalb eines dedizierten Workers verwendet werden können. (Weitere Details finden Sie in [Firefox Bug 1388931](https://bugzil.la/1388931).)

#### DOM

- Der Grund für ein Abbruchsignal kann jetzt mit [`AbortController.abort()`](/de/docs/Web/API/AbortController/abort) (oder [`AbortSignal.abort()`](/de/docs/Web/API/AbortSignal/abort_static)) gesetzt werden und ist in der [`AbortSignal.reason`](/de/docs/Web/API/AbortSignal/reason)-Eigenschaft verfügbar. Dieser Grund ist standardmäßig ein "AbortError" [`DOMException`](/de/docs/Web/API/DOMException). Der Grund kann entsprechend als Promise-Ablehnung geworfen oder behandelt werden. ([Firefox Bug 1737771](https://bugzil.la/1737771)).
- Die Komfortmethode [`AbortSignal.throwIfAborted()`](/de/docs/Web/API/AbortSignal/throwIfAborted) kann verwendet werden, um zu überprüfen, ob ein Signal abgebrochen wurde, und falls ja, um den [`AbortSignal.reason()`](/de/docs/Web/API/AbortSignal/reason) auszulösen. Dies erleichtert es Entwicklern, Abbruchsignale in Code zu handhaben, wo es nicht möglich ist, das Signal einfach an eine abbrechbare Methode zu übergeben. ([Firefox Bug 1745372](https://bugzil.la/1745372)).

### WebDriver-Konformität (Marionette)

- `Marionette:Quit` akzeptiert einen neuen booleschen Parameter, `safeMode`, um Firefox im abgesicherten Modus neu zu starten ([Firefox Bug 1144075](https://bugzil.la/1144075)).
- Verbesserte Stabilität für `WebDriver:NewSession` und `WebDriver:NewWindow` beim Warten auf das Laden des aktuellen oder initialen Dokuments ([Firefox Bug 1739369](https://bugzil.la/1739369), [Firefox Bug 1747359](https://bugzil.la/1747359)).

## Änderungen für Add-on-Entwickler

- `cookieStoreId` in {{WebExtAPIRef("tabs.query")}} unterstützt ein Array von Zeichenketten. Dies ermöglicht es, Abfragen so abzugleichen, dass Tabs mit mehr als einer Cookie-Laden-ID verbunden werden können ([Firefox Bug 1730931](https://bugzil.la/1730931)).
- `cookieStoreId` wurde zu {{WebExtAPIRef("contentScripts.register")}} hinzugefügt. Dies ermöglicht Erweiterungen, containerspezifische Inhalts-Skripte zu registrieren ([Firefox Bug 1470651](https://bugzil.la/1470651)).

## Ältere Versionen

{{Firefox_for_developers}}
