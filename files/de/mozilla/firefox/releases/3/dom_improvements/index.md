---
title: DOM-Verbesserungen in Firefox 3
slug: Mozilla/Firefox/Releases/3/DOM_improvements
l10n:
  sourceCommit: 2591a9b59de88401a2ef0fb7d0b8d0281e3f5376
---

Firefox 3 bietet eine Reihe von Verbesserungen des [Document Object Model](/de/docs/Web/API/Document_Object_Model) (DOM), insbesondere hinsichtlich der Unterstützung von Erweiterungen des DOM, die von anderen Browsern hinzugefügt wurden. Dieser Artikel enthält eine Liste dieser Verbesserungen sowie Links zu ausführlicheren Dokumentationen.

- Die Internet Explorer DOM-Erweiterungen [`clientTop`](/de/docs/Web/API/Element/clientTop) und [`clientLeft`](/de/docs/Web/API/Element/clientLeft) werden jetzt unterstützt.
- Die Eigenschaft [`window.fullScreen`](/de/docs/Web/API/Window/fullScreen) ist jetzt immer genau, egal wo sie gelesen wird, sogar im Inhalt. Bisher gab sie fälschlicherweise `false` zurück ([Firefox-Fehler 127013](https://bugzil.la/127013)).
- Die DOM-Erweiterungen [`getClientRects`](/de/docs/Web/API/Element/getClientRects) und [`getBoundingClientRect`](/de/docs/Web/API/Element/getBoundingClientRect) werden jetzt unterstützt (siehe [Firefox-Fehler 174397](https://bugzil.la/174397)).
- Die Internet Explorer DOM-Erweiterung [`elementFromPoint`](/de/docs/Web/API/Document/elementFromPoint) wird jetzt unterstützt ([Firefox-Fehler 199692](https://bugzil.la/199692)).
- Die Internet Explorer DOM-Erweiterungen [`oncut`](/de/docs/Web/API/Element/cut_event), [`oncopy`](/de/docs/Web/API/Element/copy_event) und [`onpaste`](/de/docs/Web/API/Element/paste_event) werden jetzt unterstützt ([Firefox-Fehler 280959](https://bugzil.la/280959)).
- Hinzugefügt wurden Getter, die nur für privilegierten Code zugänglich sind, für `Node.nodePrincipal`, `Node.baseURIObject` und `document.documentURIObject`. Chrome-Code darf diese Eigenschaften an einem nicht umhüllten Inhaltsobjekt (z.B. an einem `wrappedJSObject` eines [`XPCNativeWrapper`](https://web.archive.org/web/20140604075216/https://developer.mozilla.org/de/docs/XPCNativeWrapper)) weder abrufen noch setzen; für Einzelheiten siehe [Firefox-Fehler 324464](https://bugzil.la/324464).
- Die Web Applications 1.0 (HTML5) DOM-Methode [`getElementsByClassName()`](/de/docs/Web/API/Document/getElementsByClassName) wird jetzt unterstützt.
- Die Web Applications 1.0 (HTML5) DOM-Methode [`window.postMessage`](/de/docs/Web/API/Window/postMessage) wird jetzt unterstützt. Diese Methode erlaubt eine begrenzte, opt-in-basierte clientseitige Kommunikation zwischen Fenstern, die sich nicht unbedingt in derselben Domäne befinden.
- Der `charCode`-Wert des `keypress`-Ereignisses wird in ein ASCII-Zeichen geändert, wenn die Beschleunigertaste gedrückt wird. Andernfalls entspricht der `charCode` dem unveränderten Zeichen (außer im `Shift`-Zustand).

### Siehe auch

- [Firefox 3 für Entwickler](/de/docs/Mozilla/Firefox/Releases/3)
- [CSS-Verbesserungen in Firefox 3](https://web.archive.org/web/20210224062716/https://developer.mozilla.org/de/docs/Mozilla/Firefox/releases/3/CSS_improvements)
- [DOM](/de/docs/Web/API/Document_Object_Model)
