---
title: DOM-Verbesserungen in Firefox 3
slug: Mozilla/Firefox/Releases/3/DOM_improvements
l10n:
  sourceCommit: 88241bf466f1025d3c2f4ce2752586dd85d1ae13
---

{{FirefoxSidebar}}

Firefox 3 bietet eine Reihe von Verbesserungen für das [Document Object Model](/de/docs/Web/API/Document_Object_Model) (DOM), insbesondere in Bezug auf die Unterstützung von Erweiterungen des DOMs, die von anderen Browsern hinzugefügt wurden. Dieser Artikel bietet eine Liste dieser Verbesserungen sowie Links zu detaillierteren Dokumentationen.

- Die Internet Explorer-DOM-Erweiterungen [`clientTop`](/de/docs/Web/API/Element/clientTop) und [`clientLeft`](/de/docs/Web/API/Element/clientLeft) werden jetzt unterstützt.
- Die Eigenschaft [`window.fullScreen`](/de/docs/Web/API/Window/fullScreen) ist jetzt immer genau, unabhängig davon, wo sie gelesen wird, sogar im Inhalt. Zuvor würde sie `false` ungenau zurückgeben ([Firefox Bug 127013](https://bugzil.la/127013)).
- Die DOM-Erweiterungen [`getClientRects`](/de/docs/Web/API/Element/getClientRects) und [`getBoundingClientRect`](/de/docs/Web/API/Element/getBoundingClientRect) werden jetzt unterstützt (siehe [Firefox Bug 174397](https://bugzil.la/174397)).
- Die Internet Explorer-DOM-Erweiterung [`elementFromPoint`](/de/docs/Web/API/Document/elementFromPoint) wird jetzt unterstützt ([Firefox Bug 199692](https://bugzil.la/199692)).
- Die Internet Explorer-DOM-Erweiterungen [`oncut`](/de/docs/Web/API/HTMLElement/cut_event), [`oncopy`](/de/docs/Web/API/HTMLElement/copy_event) und [`onpaste`](/de/docs/Web/API/HTMLElement/paste_event) werden jetzt unterstützt ([Firefox Bug 280959](https://bugzil.la/280959)).
- Es wurden nur für berechtigten Code getter für `Node.nodePrincipal`, `Node.baseURIObject` und `document.documentURIObject` hinzugefügt. Chrome-Code darf diese Eigenschaften auf einem unverpackten Inhaltsobjekt (z.B. auf einem `wrappedJSObject` eines [`XPCNativeWrapper`](/en-US/XPCNativeWrapper)) nicht anfassen (lesen oder ändern), siehe [Firefox Bug 324464](https://bugzil.la/324464) für Details.
- Die Web-Anwendungen 1.0 (HTML5) [`getElementsByClassName()`](/de/docs/Web/API/Document/getElementsByClassName) DOM-Methode wird jetzt unterstützt.
- Die Web-Anwendungen 1.0 (HTML5) [`window.postMessage`](/de/docs/Web/API/Window/postMessage) DOM-Methode wird jetzt unterstützt. Diese Methode ermöglicht eine begrenzte, opt-in Form der clientseitigen Kommunikation zwischen Fenstern, die nicht unbedingt in derselben Domain liegen.
- Der `charCode`-Wert des `keypress`-Ereignisses wird in ein ASCII-Zeichen geändert, wenn die beschleunigende Taste gedrückt wird. Anderenfalls ist der `charCode` das unveränderte Zeichen (ausgenommen `Shift`-Zustand). Siehe [Gecko Keypress Event](/en-US/Gecko_Keypress_Event).

### Siehe auch

- [Firefox 3 für Entwickler](/de/docs/Mozilla/Firefox/Releases/3)
- [CSS-Verbesserungen in Firefox 3](/de/docs/CSS_improvements_in_Firefox_3)
- [DOM](/de/docs/Web/API/Document_Object_Model)
