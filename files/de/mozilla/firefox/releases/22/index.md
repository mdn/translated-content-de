---
title: Firefox 22 für Entwickler
slug: Mozilla/Firefox/Releases/22
l10n:
  sourceCommit: 532be30b7e31ff344d725e5f541034e2bd3d39db
---

{{FirefoxSidebar}}

## Änderungen für Webentwickler

### HTML

- Das HTML5 {{HTMLElement("data")}}-Element wurde implementiert ([Firefox-Bug 839371](https://bugzil.la/839371)).
- Das HTML5 {{HTMLElement("time")}}-Element wurde implementiert ([Firefox-Bug 629801](https://bugzil.la/629801)).
- Der `range`-Zustand des {{HTMLElement("input")}}-Elements (`<input type="range">`) wurde implementiert, hinter der Voreinstellung `dom.experimental_forms_range`, und ist standardmäßig nur im Nightly und Aurora-Kanal aktiviert ([Firefox-Bug 841948](https://bugzil.la/841948)).
- Die Unterstützung für das {{HTMLElement("template")}}-Element, Teil der Webkomponenten-Spezifikation, wurde implementiert ([Firefox-Bug 818976](https://bugzil.la/818976)).

### JavaScript

- [Asm.js](http://asmjs.org/spec/latest/) Optimierungen sind aktiviert, was es ermöglicht, C/C++-Anwendungen in eine Teilmenge von JavaScript für bessere Leistung zu kompilieren.
- Die ES2015 [Arrow Function](/de/docs/Web/JavaScript/Reference/Functions/Arrow_functions)-Syntax wurde implementiert ([Firefox-Bug 846406](https://bugzil.la/846406)).
- Die neue [Object.is](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/is)-Funktion wurde hinzugefügt ([Firefox-Bug 839979](https://bugzil.la/839979)).
- [`arguments`](/de/docs/Web/JavaScript/Reference/Functions/arguments) in Generatorausdrücken wird nun aus dem umschließenden Lexikalscope vererbt ([Firefox-Bug 848051](https://bugzil.la/848051)).
- Die ES2015 Proxy {{jsxref("Global_Objects/Proxy/Proxy/preventExtensions", "preventExtensions")}}-Falle wurde implementiert ([Firefox-Bug 789897](https://bugzil.la/789897)).

### DOM

- Unterstützung für die `multipart`-Eigenschaft auf `XMLHttpRequest` und `multipart/x-mixed-replace`-Antworten in `XMLHttpRequest` wurde entfernt. Dies war eine nur für Gecko verfügbare Funktion, die nie standardisiert wurde. Stattdessen können [Server-Sent Events](/de/docs/Web/API/Server-sent_events), [Web Sockets](/de/docs/Web/API/WebSockets_API) oder das Untersuchen von `responseText` aus Fortschrittsereignissen verwendet werden.
- Unterstützung für [Web Notifications](/de/docs/Web/API/Notifications_API/Using_the_Notifications_API) wurde hinzugefügt ([Firefox-Bug 782211](https://bugzil.la/782211)).
- Die {{domxref("FormData")}} `append`-Methode akzeptiert jetzt einen dritten optionalen `filename`-Parameter ([Firefox-Bug 690659](https://bugzil.la/690659)).
- `Node.isSupported` wurde entfernt ([Firefox-Bug 801562](https://bugzil.la/801562)).
- `Node.setUserData` und `Node.getUserData` wurden für Webinhalte entfernt und sind für Chrome-Inhalte veraltet ([Firefox-Bug 842372](https://bugzil.la/842372)).
- Die {{domxref("Element.attributes")}}-Eigenschaft wurde von {{domxref("Node")}} übernommen, wie es die Spezifikation erfordert ([Firefox-Bug 844134](https://bugzil.la/844134)).
- Das Mac OS X-Backend für **Ambient Light Events** wurde implementiert.
- Elemente im HTML-Namespace mit lokalen Namen `<bgsound>`, `<multicol>` und `<image>` implementieren nicht länger das {{domxref("HTMLSpanElement")}}-Interface. `<bgsound>` implementiert {{domxref("HTMLUnknownElement")}} und `<image>` implementiert {{domxref("HTMLElement")}}.
- Die {{domxref("NodeIterator.detach")}}-Methode wurde so geändert, dass sie nichts mehr tut ([Firefox-Bug 823549](https://bugzil.la/823549)).
- Das {{domxref("BlobEvent")}}-Interface wurde implementiert ([Firefox-Bug 834165](https://bugzil.la/834165)).
- Die Eigenschaften `HTMLMediaElement.crossorigin` und `HTMLInputElement.inputmode` wurden entfernt, um mit der Spezifikation in {{domxref("HTMLMediaElement.crossOrigin")}} bzw. `HTMLInputElement.inputMode` übereinzustimmen ([Firefox-Bug 847370](https://bugzil.la/847370) und [Firefox-Bug 850346](https://bugzil.la/850346)).
- WebRTC: Die Media Stream API und Peer Connection API werden jetzt standardmäßig unterstützt.
- Web Components: Die {{domxref("Document.register")}}-Methode wurde implementiert ([Firefox-Bug 783129](https://bugzil.la/783129)).
- Der `ProgressEvent.initProgressEvent()`-Konstruktor wurde entfernt. Verwenden Sie den Standardkonstruktor {{domxref("ProgressEvent.ProgressEvent", "ProgressEvent()")}}, um ein {{domxref("ProgressEvent")}} zu erstellen und zu initialisieren ([Firefox-Bug 843489](https://bugzil.la/843489)).
- Manipulierte Daten, die mit einem {{domxref("Element/cut_event", "cut")}}, {{domxref("Element/copy_event", "copy")}}, oder {{domxref("Element/paste_event", "paste")}}-Ereignis verbunden sind, können jetzt über die {{domxref("ClipboardEvent.clipboardData")}}-Eigenschaft abgerufen werden ([Firefox-Bug 407983](https://bugzil.la/407983)).
- Das {{domxref("HTMLTimeElement")}}-Interface wurde implementiert ([Firefox-Bug 629801](https://bugzil.la/629801)).
- Wenn einem {{domxref("Worker")}}-Konstruktor eine ungültige URL übergeben wird, wird jetzt eine {{domxref("DOMException")}} vom Typ `SECURITY_ERR` ausgelöst ([Firefox-Bug 587251](https://bugzil.la/587251)).

### CSS

- Unterstützung für [CSS Flexbox Layout](/de/docs/Web/CSS/CSS_flexible_box_layout/Basic_concepts_of_flexbox) wurde standardmäßig aktiviert ([Firefox-Bug 841876](https://bugzil.la/841876)).
- Nach einer Änderung in der Spezifikation wurden die Anfangswerte für {{cssxref("min-width")}} und {{cssxref("min-height")}} wieder auf `0` geändert, auch bei flexiblen Elementen ([Firefox-Bug 848539](https://bugzil.la/848539)).
- Unterstützung für CSS Conditional Rules ({{cssxref("@supports")}} und {{domxref("CSS.supports_static", "CSS.supports()")}}) wurde standardmäßig aktiviert ([Firefox-Bug 855455](https://bugzil.la/855455)).
- Unterstützung für {{cssxref("background-clip")}} und {{cssxref("background-origin")}} Eigenschaften in der {{cssxref("background")}}-Kurzform wurde implementiert ([Firefox-Bug 570896](https://bugzil.la/570896)).

## Änderungen für Add-on- und Mozilla-Entwickler

- Der `properties`-Parameter wurde aus den Methoden `nsITreeView.getCellProperties()`, `nsITreeView.getColumnProperties()` und `nsITreeView.getRowProperties()` von `nsITreeView` entfernt. Diese Methoden sollten jetzt einen String von durch Leerzeichen getrennten Eigenschaftsnamen zurückgeben ([Firefox-Bug 407956](https://bugzil.la/407956)).
- Die Methode `inIDOMUtils.getCSSPropertyNames()` wurde implementiert und wird alle unterstützten [CSS-Eigenschafts](/de/docs/Web/CSS/Reference)-Namen zurückgeben.
- Weitere Änderungen finden Sie [hier](https://blog.mozilla.org/addons/2013/06/03/compatibility-for-firefox-22/).

### Firefox-Entwicklerwerkzeuge

- Der [Schriftinspektor](https://hacks.mozilla.org/2013/04/developer-tools-update-firefox-22/) zeigt, welche Schriftarten auf Ihrem Computer auf die Seite angewendet werden.
- Der visuelle Mal-Rückmeldemodus zeigt, wann und wo eine Seite neu gezeichnet wird.
- Die Entwicklerwerkzeuge können jetzt nicht nur unten, sondern auch auf der rechten Seite des Browsers angedockt werden.
- Einige Bereiche innerhalb der Entwicklerwerkzeuge sind von [XUL zu HTML](https://bugzil.la/875727) gewechselt. Zum Beispiel ist der CSS-Regel-Viewer jetzt chrome://browser/content/devtools/cssruleview\.xhtml, nicht mehr `cssruleview.xul`. Anstatt direkt eine Überlagerung hinzuzufügen, um diese Bereiche zu erweitern, können Sie eine Überlagerung und ein Skript zum äußeren XUL-Dokument hinzufügen, um Lade-Listener hinzuzufügen und diese HTML-Dokumente zu ändern.
- Der Stack Trace wird nun als Pfadnavigationsleiste oben angezeigt, und die Skriptliste befindet sich jetzt im linken Bereich des Debuggers.

## Siehe auch

- [Firefox 22 Beta-Veröffentlichungshinweise](https://website-archive.mozilla.org/www.mozilla.org/firefox_releasenotes/en-us/firefox/22.0beta/releasenotes/)
- [Add-on-Kompatibilität für Firefox 22](https://blog.mozilla.org/addons/2013/06/03/compatibility-for-firefox-22/)

### Versionen

{{Firefox_for_developers}}
