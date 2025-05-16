---
title: DOM-Verbesserungen in Firefox 3
slug: Mozilla/Firefox/Releases/3/DOM_improvements
l10n:
  sourceCommit: 34055723f9d2bbadfa8b0f0d27102e3adcedbd58
---

{{FirefoxSidebar}}

Firefox 3 bietet eine Reihe von Verbesserungen für das [Document Object Model](/de/docs/Web/API/Document_Object_Model) (DOM), insbesondere in Bezug auf die Unterstützung von Erweiterungen des DOM, die von anderen Browsern hinzugefügt wurden. Dieser Artikel bietet eine Liste dieser Verbesserungen sowie Links zu ausführlicherer Dokumentation.

- Die Internet Explorer DOM-Erweiterungen [`clientTop`](/de/docs/Web/API/Element/clientTop) und [`clientLeft`](/de/docs/Web/API/Element/clientLeft) werden jetzt unterstützt.
- Die Eigenschaft [`window.fullScreen`](/de/docs/Web/API/Window/fullScreen) ist jetzt immer genau, unabhängig davon, wo sie gelesen wird, sogar im Inhalt. Zuvor gab sie fälschlicherweise `false` zurück ([Firefox-Fehler 127013](https://bugzil.la/127013)).
- Die DOM-Erweiterungen [`getClientRects`](/de/docs/Web/API/Element/getClientRects) und [`getBoundingClientRect`](/de/docs/Web/API/Element/getBoundingClientRect) werden jetzt unterstützt (siehe [Firefox-Fehler 174397](https://bugzil.la/174397)).
- Die Internet Explorer DOM-Erweiterung [`elementFromPoint`](/de/docs/Web/API/Document/elementFromPoint) wird jetzt unterstützt ([Firefox-Fehler 199692](https://bugzil.la/199692)).
- Die Internet Explorer DOM-Erweiterungen [`oncut`](/de/docs/Web/API/Element/cut_event), [`oncopy`](/de/docs/Web/API/Element/copy_event) und [`onpaste`](/de/docs/Web/API/Element/paste_event) werden jetzt unterstützt ([Firefox-Fehler 280959](https://bugzil.la/280959)).
- Es wurden Getter für privilegierten Code hinzugefügt für `Node.nodePrincipal`, `Node.baseURIObject` und `document.documentURIObject`. Chrome-Code darf diese Eigenschaften nicht an einem nicht ausgepackten Content-Objekt (z.B. an einem `wrappedJSObject` eines [`XPCNativeWrapper`](/en-US/XPCNativeWrapper)) berühren (lesen oder setzen), siehe [Firefox-Fehler 324464](https://bugzil.la/324464) für Details.
- Die Web Applications 1.0 (HTML5) DOM-Methode [`getElementsByClassName()`](/de/docs/Web/API/Document/getElementsByClassName) wird jetzt unterstützt.
- Die Web Applications 1.0 (HTML5) DOM-Methode [`window.postMessage`](/de/docs/Web/API/Window/postMessage) wird jetzt unterstützt. Diese Methode erlaubt eine begrenzte, opt-in Form der clientseitigen Kommunikation zwischen Fenstern, die nicht unbedingt auf derselben Domain liegen.
- Der `charCode`-Wert des `keypress`-Ereignisses wird in ein ASCII-Zeichen geändert, wenn die Beschleunigertaste gedrückt wird. Andernfalls ist der `charCode` das unveränderte Zeichen (außer im `Shift`-Zustand). Siehe [Gecko-Keypress-Ereignis](/en-US/Gecko_Keypress_Event).

### Siehe auch

- [Firefox 3 für Entwickler](/de/docs/Mozilla/Firefox/Releases/3)
- [CSS-Verbesserungen in Firefox 3](/de/docs/CSS_improvements_in_Firefox_3)
- [DOM](/de/docs/Web/API/Document_Object_Model)
