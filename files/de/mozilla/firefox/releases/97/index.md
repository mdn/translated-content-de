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

- Die CSS-Einheiten `cap` und `ic` werden jetzt für die Verwendung mit den Datentypen {{cssxref("&lt;length&gt;")}} und {{cssxref("&lt;length-percentage&gt;")}} unterstützt.
  Weitere Informationen finden Sie in [Firefox Fehler 1702924](https://bugzil.la/1702924) und [Firefox Fehler 1531223](https://bugzil.la/1531223).

- Die CSS-Eigenschaft `color-adjust` wurde in {{cssxref("print-color-adjust")}} umbenannt, um mit der entsprechenden Spezifikation übereinzustimmen.
  Der abgekürzte Name `color-adjust` wird nicht mehr empfohlen.
  Siehe [Firefox Fehler 747595](https://bugzil.la/747595) für Details.

- CSS-Kaskadenschichten sind jetzt standardmäßig verfügbar. Die [`@layer`](/de/docs/Web/CSS/@layer)-Regel deklariert eine Kaskadenschicht, die die Deklaration von Stilen ermöglicht und die über die [`@import`](/de/docs/Web/CSS/@import) Regel mittels der `layer()`-Funktion importiert werden kann. Siehe [Firefox Fehler 1699217](https://bugzil.la/1699217) für weitere Details.

- Das globale CSS-Schlüsselwort {{cssxref("revert-layer")}} wurde hinzugefügt, um das Zurücksetzten von Eigenschaftswerten in einer Kaskadenschicht auf die passenden Regeln in der vorherigen Kaskadenschicht zu ermöglichen. Dieses Schlüsselwort kann auf jede Eigenschaft angewendet werden, einschließlich der CSS-Kurzschreibweise {{cssxref("all")}}. Weitere Informationen finden Sie in [Firefox Fehler 1699220](https://bugzil.la/1699220).

- Die CSS-Eigenschaft [`scrollbar-gutter`](/de/docs/Web/CSS/scrollbar-gutter) wird jetzt unterstützt. Diese gibt Entwicklern die Kontrolle über den für die Scrollleiste reservierten Platz, um unerwünschte Layoutänderungen zu verhindern, während der Inhalt wächst.
  Siehe [Firefox Fehler 1715112](https://bugzil.la/1715112) für mehr Details.

### JavaScript

Keine bemerkenswerten Änderungen

### SVG

- Das SVG-Attribut {{SVGAttr('d')}}, das zur Definition eines zu zeichnenden Pfads verwendet wird, kann jetzt als Eigenschaft in CSS verwendet werden.
  Es akzeptiert die Werte [path()](/de/docs/Web/CSS/basic-shape/path) oder `none`. (Siehe [Firefox Fehler 1744599](https://bugzil.la/1744599) für Details.)

#### Entfernungen

- Eine Reihe von `SVGPathSeg`-APIs sind jetzt standardmäßig hinter einem Präferenzschalter deaktiviert und sollen in zukünftigen Versionen entfernt werden.
  Dies umfasst: `SVGPathSegList`, [SVGPathElement.getPathSegAtLength()](/de/docs/Web/API/SVGPathElement), `SVGAnimatedPathData`.
  (Siehe [Firefox Fehler 1388931](https://bugzil.la/1388931) für mehr Details.)

### APIs

- `AnimationFrameProvider` ist nun in einem [`DedicatedWorkerGlobalScope`](/de/docs/Web/API/DedicatedWorkerGlobalScope) verfügbar. Das bedeutet, dass die Methoden [`requestAnimationFrame`](/de/docs/Web/API/Window/requestAnimationFrame) und [`cancelAnimationFrame`](/de/docs/Web/API/Window/cancelAnimationFrame) innerhalb eines dedizierten Workers verwendet werden können.
  (Siehe [Firefox Fehler 1388931](https://bugzil.la/1388931) für mehr Details.)

#### DOM

- Der Grund für ein Abbruchsignal kann jetzt mit [`AbortController.abort()`](/de/docs/Web/API/AbortController/abort) (oder [`AbortSignal.abort()`](/de/docs/Web/API/AbortSignal/abort_static)) gesetzt werden und wird in der Eigenschaft [`AbortSignal.reason`](/de/docs/Web/API/AbortSignal/reason) verfügbar sein.
  Dieser Grund ist standardmäßig ein "AbortError" [`DOMException`](/de/docs/Web/API/DOMException).
  Der Grund kann entsprechend geworfen oder über eine Promise-Zurückweisung behandelt werden.
  ([Firefox Fehler 1737771](https://bugzil.la/1737771)).
- Die Komfortmethode [`AbortSignal.throwIfAborted()`](/de/docs/Web/API/AbortSignal/throwIfAborted) kann verwendet werden, um zu überprüfen, ob ein Signal abgebrochen wurde und, wenn ja, den [`AbortSignal.reason()`](/de/docs/Web/API/AbortSignal/reason) auszulösen.
  Dies erleichtert es Entwicklern, Abbruchsignale in Code zu behandeln, in dem Sie das Signal nicht einfach an eine abbrechbare Methode übergeben können. ([Firefox Fehler 1745372](https://bugzil.la/1745372)).

### WebDriver-Konformität (Marionette)

- `Marionette:Quit` akzeptiert einen neuen booleschen Parameter, `safeMode`, um Firefox im abgesicherten Modus neu zu starten ([Firefox Fehler 1144075](https://bugzil.la/1144075)).
- Verbesserte Stabilität für `WebDriver:NewSession` und `WebDriver:NewWindow`, wenn auf das Laden des aktuellen oder initialen Dokuments gewartet wird ([Firefox Fehler 1739369](https://bugzil.la/1739369), [Firefox Fehler 1747359](https://bugzil.la/1747359)).

## Änderungen für Add-on-Entwickler

- `cookieStoreId` in {{WebExtAPIRef("tabs.query")}} unterstützt ein Array von Zeichenfolgen. Dies ermöglicht Abfragen, um Tabs gegen mehr als eine Cookie-Store-ID abzugleichen ([Firefox Fehler 1730931](https://bugzil.la/1730931)).
- `cookieStoreId` wurde zu {{WebExtAPIRef("contentScripts.register")}} hinzugefügt. Dies ermöglicht es Erweiterungen, container-spezifische Inhaltsskripte zu registrieren ([Firefox Fehler 1470651](https://bugzil.la/1470651)).

## Ältere Versionen

{{Firefox_for_developers}}
