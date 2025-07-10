---
title: DOM-Verbesserungen in Firefox 3
slug: Mozilla/Firefox/Releases/3/DOM_improvements
l10n:
  sourceCommit: 594ae0d4ffb6326a9529fe366d30ca633309ee30
---

Firefox 3 bietet eine Reihe von Verbesserungen am [Document Object Model](/de/docs/Web/API/Document_Object_Model) (DOM), insbesondere hinsichtlich der Unterstützung von Erweiterungen des DOM, die von anderen Browsern hinzugefügt wurden. Dieser Artikel bietet eine Liste dieser Verbesserungen sowie Links zu detaillierteren Dokumentationen.

- Die Internet Explorer-DOM-Erweiterungen [`clientTop`](/de/docs/Web/API/Element/clientTop) und [`clientLeft`](/de/docs/Web/API/Element/clientLeft) werden jetzt unterstützt.
- Die Eigenschaft [`window.fullScreen`](/de/docs/Web/API/Window/fullScreen) ist jetzt immer genau, egal wo sie gelesen wird, auch im Inhalt. Zuvor würde sie `false` fälschlicherweise zurückgeben ([Firefox-Bug 127013](https://bugzil.la/127013)).
- Die DOM-Erweiterungen [`getClientRects`](/de/docs/Web/API/Element/getClientRects) und [`getBoundingClientRect`](/de/docs/Web/API/Element/getBoundingClientRect) werden jetzt unterstützt (siehe [Firefox-Bug 174397](https://bugzil.la/174397)).
- Die Internet Explorer-DOM-Erweiterung [`elementFromPoint`](/de/docs/Web/API/Document/elementFromPoint) wird jetzt unterstützt ([Firefox-Bug 199692](https://bugzil.la/199692)).
- Die Internet Explorer-DOM-Erweiterungen [`oncut`](/de/docs/Web/API/Element/cut_event), [`oncopy`](/de/docs/Web/API/Element/copy_event) und [`onpaste`](/de/docs/Web/API/Element/paste_event) werden jetzt unterstützt ([Firefox-Bug 280959](https://bugzil.la/280959)).
- Es wurden nur für privilegierten Code Getter für `Node.nodePrincipal`, `Node.baseURIObject` und `document.documentURIObject` hinzugefügt. Der Chrome-Code darf diese Eigenschaften nicht auf einem unverpackten Inhaltsobjekt berühren (lesen oder setzen) (z.B. auf einer `wrappedJSObject` einer [`XPCNativeWrapper`](/en-US/XPCNativeWrapper)), siehe [Firefox-Bug 324464](https://bugzil.la/324464) für Details.
- Die Web Applications 1.0 (HTML5)-DOM-Methode [`getElementsByClassName()`](/de/docs/Web/API/Document/getElementsByClassName) wird jetzt unterstützt.
- Die Web Applications 1.0 (HTML5)-DOM-Methode [`window.postMessage`](/de/docs/Web/API/Window/postMessage) wird jetzt unterstützt. Diese Methode ermöglicht eine begrenzte, opt-in Form der clientseitigen Kommunikation zwischen Fenstern, die nicht unbedingt auf derselben Domain liegen.
- Der `charCode`-Wert des `keypress`-Ereignisses wird in ein ASCII-Zeichen geändert, wenn die Beschleunigertaste gedrückt wird. Ansonsten ist der `charCode` das unveränderte Zeichen (außer im `Shift`-Zustand).

### Siehe auch

- [Firefox 3 für Entwickler](/de/docs/Mozilla/Firefox/Releases/3)
- [CSS-Verbesserungen in Firefox 3](/de/docs/CSS_improvements_in_Firefox_3)
- [DOM](/de/docs/Web/API/Document_Object_Model)
