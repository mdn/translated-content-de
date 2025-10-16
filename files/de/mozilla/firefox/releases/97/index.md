---
title: Firefox 97 Versionshinweise für Entwickler
short-title: Firefox 97
slug: Mozilla/Firefox/Releases/97
l10n:
  sourceCommit: 61912f53d01e935aea926a2226130fb4587414a9
---

Dieser Artikel bietet Informationen zu den Änderungen in Firefox 97, die Entwickler betreffen. Firefox 97 wurde am 8. Februar 2022 veröffentlicht.

## Änderungen für Webentwickler

### HTML

Keine bemerkenswerten Änderungen

### CSS

- Die CSS-Einheiten `cap` und `ic` werden jetzt für den Gebrauch mit {{cssxref("&lt;length&gt;")}} und {{cssxref("&lt;length-percentage&gt;")}} Datentypen unterstützt.
  Weitere Informationen finden Sie in [Firefox Bug 1702924](https://bugzil.la/1702924) und [Firefox Bug 1531223](https://bugzil.la/1531223).

- Die CSS-Eigenschaft `color-adjust` wurde in {{cssxref("print-color-adjust")}} umbenannt, um mit der relevanten Spezifikation übereinzustimmen.
  Der Kurzname `color-adjust` ist veraltet.
  Details finden Sie in [Firefox Bug 747595](https://bugzil.la/747595).

- CSS-Kaskadenschichten sind jetzt standardmäßig verfügbar. Die Regel [`@layer`](/de/docs/Web/CSS/@layer) deklariert eine Kaskadenschicht, die die Deklaration von Stilen ermöglicht und über die Regel [`@import`](/de/docs/Web/CSS/@import) mit der Funktion `layer()` importiert werden kann. Weitere Details finden Sie unter [Firefox Bug 1699217](https://bugzil.la/1699217).

- Das globale CSS-Schlüsselwort {{cssxref("revert-layer")}} wurde hinzugefügt, um das Zurücksetzen von Eigenschaftswerten in einer Kaskadenschicht auf die übereinstimmenden Regeln in der vorherigen Kaskadenschicht zu ermöglichen. Dieses Schlüsselwort kann auf jede Eigenschaft angewendet werden, einschließlich der CSS-Kurzeigenschaft {{cssxref("all")}}. Weitere Informationen finden Sie in [Firefox Bug 1699220](https://bugzil.la/1699220).

- Die CSS-Eigenschaft [`scrollbar-gutter`](/de/docs/Web/CSS/scrollbar-gutter) wird jetzt unterstützt. Dies gibt Entwicklern die Kontrolle über den reservierten Platz für die Bildlaufleiste und verhindert unerwünschte Layoutänderungen, während der Inhalt wächst.
  Weitere Details finden Sie in [Firefox Bug 1715112](https://bugzil.la/1715112).

### JavaScript

Keine bemerkenswerten Änderungen

### SVG

- Das SVG-Attribut {{SVGAttr('d')}}, das zur Definition eines zu zeichnenden Pfades verwendet wird, kann jetzt als Eigenschaft in CSS verwendet werden.
  Es akzeptiert die Werte [path()](/de/docs/Web/CSS/basic-shape/path) oder `none`. (Details siehe [Firefox Bug 1744599](https://bugzil.la/1744599)).

#### Entfernungen

- Eine Reihe von `SVGPathSeg` APIs sind jetzt standardmäßig hinter einer Einstellung deaktiviert und sollen in zukünftigen Revisionen entfernt werden.
  Dazu gehören: `SVGPathSegList`, [SVGPathElement.getPathSegAtLength()](/de/docs/Web/API/SVGPathElement), `SVGAnimatedPathData`.
  (Details siehe [Firefox Bug 1388931](https://bugzil.la/1388931)).

### APIs

- `AnimationFrameProvider` ist jetzt in einem [`DedicatedWorkerGlobalScope`](/de/docs/Web/API/DedicatedWorkerGlobalScope) verfügbar. Das bedeutet, dass die Methoden [`requestAnimationFrame`](/de/docs/Web/API/Window/requestAnimationFrame) und [`cancelAnimationFrame`](/de/docs/Web/API/Window/cancelAnimationFrame) in einem dedizierten Worker verwendet werden können.
  (Details siehe [Firefox Bug 1388931](https://bugzil.la/1388931)).

#### DOM

- Der Grund für ein Abbruchsignal kann jetzt mit [`AbortController.abort()`](/de/docs/Web/API/AbortController/abort) (oder [`AbortSignal.abort()`](/de/docs/Web/API/AbortSignal/abort_static)) festgelegt werden und wird in der Eigenschaft [`AbortSignal.reason`](/de/docs/Web/API/AbortSignal/reason) verfügbar sein.
  Dieser Grund ist standardmäßig ein "AbortError" [`DOMException`](/de/docs/Web/API/DOMException).
  Der Grund kann je nach Bedarf ausgelöst oder über eine Promise-Ablehnung behandelt werden.
  ([Firefox Bug 1737771](https://bugzil.la/1737771)).
- Die praktische Methode [`AbortSignal.throwIfAborted()`](/de/docs/Web/API/AbortSignal/throwIfAborted) kann verwendet werden, um zu prüfen, ob ein Signal abgebrochen wurde und, wenn ja, den [`AbortSignal.reason()`](/de/docs/Web/API/AbortSignal/reason) auszulösen.
  Dies erleichtert es Entwicklern, Abbruchsignale in Code zu handhaben, wo das Signal nicht einfach an eine abbruchbare Methode übergeben werden kann. ([Firefox Bug 1745372](https://bugzil.la/1745372)).

### WebDriver-Konformität (Marionette)

- `Marionette:Quit` akzeptiert einen neuen booleschen Parameter, `safeMode`, um Firefox im abgesicherten Modus neu zu starten ([Firefox Bug 1144075](https://bugzil.la/1144075)).
- Verbesserte Stabilität für `WebDriver:NewSession` und `WebDriver:NewWindow` beim Warten auf das Laden des aktuellen oder initialen Dokuments ([Firefox Bug 1739369](https://bugzil.la/1739369), [Firefox Bug 1747359](https://bugzil.la/1747359)).

## Änderungen für Add-on-Entwickler

- `cookieStoreId` in {{WebExtAPIRef("tabs.query")}} unterstützt ein Array von Zeichenfolgen. Dies ermöglicht Abfragen, um Tabs in Übereinstimmung mit mehr als einer Cookie-Store-ID zu finden ([Firefox Bug 1730931](https://bugzil.la/1730931)).
- `cookieStoreId` wurde zu {{WebExtAPIRef("contentScripts.register")}} hinzugefügt. Dies ermöglicht es Erweiterungen, containerspezifische Inhalte-Skripte zu registrieren ([Firefox Bug 1470651](https://bugzil.la/1470651)).
