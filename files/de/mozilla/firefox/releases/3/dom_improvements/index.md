---
title: DOM-Verbesserungen in Firefox 3
slug: Mozilla/Firefox/Releases/3/DOM_improvements
l10n:
  sourceCommit: 1d3d0c10ebf5c8c55f75b9adce74d1e5001866c6
---

Firefox 3 bietet eine Reihe von Verbesserungen am [Document Object Model](/de/docs/Web/API/Document_Object_Model) (DOM), insbesondere in Bezug auf die Unterstützung von Erweiterungen des DOM, die von anderen Browsern hinzugefügt wurden. Dieser Artikel liefert eine Liste dieser Verbesserungen sowie Links zu ausführlicherer Dokumentation.

- Die Internet Explorer DOM-Erweiterungen [`clientTop`](/de/docs/Web/API/Element/clientTop) und [`clientLeft`](/de/docs/Web/API/Element/clientLeft) werden jetzt unterstützt.
- Die Eigenschaft [`window.fullScreen`](/de/docs/Web/API/Window/fullScreen) ist nun immer genau, egal wo sie gelesen wird, sogar im Inhalt. Zuvor wurde `false` fälschlicherweise zurückgegeben ([Firefox-Bug 127013](https://bugzil.la/127013)).
- Die DOM-Erweiterungen [`getClientRects`](/de/docs/Web/API/Element/getClientRects) und [`getBoundingClientRect`](/de/docs/Web/API/Element/getBoundingClientRect) werden nun unterstützt (siehe [Firefox-Bug 174397](https://bugzil.la/174397)).
- Die Internet Explorer DOM-Erweiterung [`elementFromPoint`](/de/docs/Web/API/Document/elementFromPoint) wird nun unterstützt ([Firefox-Bug 199692](https://bugzil.la/199692)).
- Die Internet Explorer DOM-Erweiterungen [`oncut`](/de/docs/Web/API/Element/cut_event), [`oncopy`](/de/docs/Web/API/Element/copy_event) und [`onpaste`](/de/docs/Web/API/Element/paste_event) werden nun unterstützt ([Firefox-Bug 280959](https://bugzil.la/280959)).
- Hinzugefügte Getter, die nur für privilegierten Code verfügbar sind, für `Node.nodePrincipal`, `Node.baseURIObject` und `document.documentURIObject`. Chrome-Code darf diese Eigenschaften bei einem unverpackten Inhaltsobjekt nicht berühren (lesen oder setzen) (z. B. bei einem `wrappedJSObject` eines [`XPCNativeWrapper`](/en-US/XPCNativeWrapper)), siehe [Firefox-Bug 324464](https://bugzil.la/324464) für Details.
- Die Web Applications 1.0 (HTML5) DOM-Methode [`getElementsByClassName()`](/de/docs/Web/API/Document/getElementsByClassName) wird nun unterstützt.
- Die Web Applications 1.0 (HTML5) DOM-Methode [`window.postMessage`](/de/docs/Web/API/Window/postMessage) wird jetzt unterstützt. Diese Methode ermöglicht eine begrenzte, opt-in-basierte Form der clientseitigen Kommunikation zwischen Fenstern, die nicht unbedingt auf derselben Domain liegen.
- Der `charCode`-Wert des `keypress`-Ereignisses wird in ein ASCII-Zeichen geändert, wenn die Steuerungstaste gedrückt wird. Andernfalls ist der `charCode` das unveränderte Zeichen (außer im `Shift`-Zustand). Siehe [Gecko Keypress Event](/en-US/Gecko_Keypress_Event).

### Siehe auch

- [Firefox 3 für Entwickler](/de/docs/Mozilla/Firefox/Releases/3)
- [CSS-Verbesserungen in Firefox 3](/de/docs/CSS_improvements_in_Firefox_3)
- [DOM](/de/docs/Web/API/Document_Object_Model)
