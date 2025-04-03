---
title: DOM-Verbesserungen in Firefox 3
slug: Mozilla/Firefox/Releases/3/DOM_improvements
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

{{FirefoxSidebar}}

Firefox 3 bietet eine Reihe von Verbesserungen am [Document Object Model](/de/docs/Web/API/Document_Object_Model) (DOM), insbesondere in Bezug auf die Unterstützung von Erweiterungen des DOM, die von anderen Browsern hinzugefügt wurden. Dieser Artikel liefert eine Liste dieser Verbesserungen sowie Links zu ausführlicheren Dokumentationen.

- Die Internet Explorer-`clientTop`- und `clientLeft`-DOM-Erweiterungen werden jetzt unterstützt.
- Die `window.fullScreen`-Eigenschaft ist nun unabhängig davon, wo sie gelesen wird, immer korrekt, sogar im Inhalt. Zuvor würde sie fälschlicherweise `false` zurückgeben ([Firefox-Bug 127013](https://bugzil.la/127013)).
- Die `getClientRects`- und `getBoundingClientRect`-DOM-Erweiterungen werden jetzt unterstützt (siehe [Firefox-Bug 174397](https://bugzil.la/174397)).
- Die Internet Explorer-`elementFromPoint`-DOM-Erweiterung wird jetzt unterstützt ([Firefox-Bug 199692](https://bugzil.la/199692)).
- Die Internet Explorer-`oncut`-, `oncopy`- und `onpaste`-DOM-Erweiterungen werden jetzt unterstützt ([Firefox-Bug 280959](https://bugzil.la/280959)).
- Hinzugefügt wurden nur für privilegierten Code verfügbare Getter für `Node.nodePrincipal`, `Node.baseURIObject` und `document.documentURIObject`. Chrome-Code darf diese Eigenschaften auf einem nicht ausgepackten Inhaltsobjekt (z.B. auf einem `wrappedJSObject` eines `XPCNativeWrapper`) nicht berühren (weder abfragen noch setzen), siehe [Firefox-Bug 324464](https://bugzil.la/324464) für Details.
- Die Web Applications 1.0 (HTML5)-Methode `getElementsByClassName()` des DOM wird jetzt unterstützt.
- Die Web Applications 1.0 (HTML5)-Methode `window.postMessage` des DOM wird jetzt unterstützt. Diese Methode ermöglicht eine begrenzte, opt-in Form der clientseitigen Kommunikation zwischen Fenstern, die nicht notwendigerweise auf derselben Domain sind.
- Der `charCode`-Wert des `keypress`-Ereignisses wird in ein ASCII-Zeichen geändert, wenn die Beschleunigertaste gedrückt wird. Andernfalls ist der `charCode` das unveränderte Zeichen (abgesehen vom `Shift`-Status). Siehe [Gecko Keypress Event](/en-US/Gecko_Keypress_Event).

### Siehe auch

- [Firefox 3 für Entwickler](/de/docs/Mozilla/Firefox/Releases/3)
- [CSS-Verbesserungen in Firefox 3](/de/docs/CSS_improvements_in_Firefox_3)
- [DOM](/de/docs/Web/API/Document_Object_Model)
