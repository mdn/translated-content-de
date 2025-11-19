---
title: DOM-Verbesserungen in Firefox 3
slug: Mozilla/Firefox/Releases/3/DOM_improvements
l10n:
  sourceCommit: 0c81cbce5f95a0be935724bcd936f5592774eb3a
---

Firefox 3 bietet eine Reihe von Verbesserungen im [Document Object Model](/de/docs/Web/API/Document_Object_Model) (DOM), insbesondere in Bezug auf die Unterstützung von Erweiterungen des DOMs, die von anderen Browsern hinzugefügt wurden. Dieser Artikel bietet eine Liste dieser Verbesserungen sowie Links zu ausführlicheren Dokumentationen.

- Die Internet Explorer-DOM-Erweiterungen [`clientTop`](/de/docs/Web/API/Element/clientTop) und [`clientLeft`](/de/docs/Web/API/Element/clientLeft) werden nun unterstützt.
- Die Eigenschaft [`window.fullScreen`](/de/docs/Web/API/Window/fullScreen) ist jetzt immer genau, egal wo sie gelesen wird, auch im Inhalt. Zuvor gab sie fälschlicherweise `false` zurück ([Firefox-Bug 127013](https://bugzil.la/127013)).
- Die DOM-Erweiterungen [`getClientRects`](/de/docs/Web/API/Element/getClientRects) und [`getBoundingClientRect`](/de/docs/Web/API/Element/getBoundingClientRect) werden jetzt unterstützt (siehe [Firefox-Bug 174397](https://bugzil.la/174397)).
- Die Internet Explorer-DOM-Erweiterung [`elementFromPoint`](/de/docs/Web/API/Document/elementFromPoint) wird jetzt unterstützt ([Firefox-Bug 199692](https://bugzil.la/199692)).
- Die Internet Explorer-DOM-Erweiterungen [`oncut`](/de/docs/Web/API/Element/cut_event), [`oncopy`](/de/docs/Web/API/Element/copy_event) und [`onpaste`](/de/docs/Web/API/Element/paste_event) werden jetzt unterstützt ([Firefox-Bug 280959](https://bugzil.la/280959)).
- Es wurden nur für privilegierte Codes getter für `Node.nodePrincipal`, `Node.baseURIObject` und `document.documentURIObject` hinzugefügt. Chrome-Code darf diese Eigenschaften an einem unverpackten Inhalt-Objekt (z. B. an einem `wrappedJSObject` eines [`XPCNativeWrapper`](https://web.archive.org/web/20140604075216/https://developer.mozilla.org/de/docs/XPCNativeWrapper)) weder abfragen noch festlegen, siehe [Firefox-Bug 324464](https://bugzil.la/324464) für Details.
- Die Webanwendungen 1.0 (HTML5) [`getElementsByClassName()`](/de/docs/Web/API/Document/getElementsByClassName) DOM-Methode wird jetzt unterstützt.
- Die Webanwendungen 1.0 (HTML5) [`window.postMessage`](/de/docs/Web/API/Window/postMessage) DOM-Methode wird jetzt unterstützt. Diese Methode ermöglicht eine eingeschränkte, opt-in Form der clientseitigen Kommunikation zwischen Fenstern, die nicht unbedingt auf derselben Domain liegen.
- Der `charCode`-Wert des `keypress`-Ereignisses wird in ein ASCII-Zeichen geändert, wenn die Beschleunigungstaste gedrückt wird. Andernfalls ist der `charCode` das unveränderte Zeichen (mit Ausnahme des `Shift`-Zustands).

## Siehe auch

- [Firefox 3 für Entwickler](/de/docs/Mozilla/Firefox/Releases/3)
- [CSS-Verbesserungen in Firefox 3](https://web.archive.org/web/20210224062716/https://developer.mozilla.org/de/docs/Mozilla/Firefox/releases/3/CSS_improvements)
- [DOM](/de/docs/Web/API/Document_Object_Model)
