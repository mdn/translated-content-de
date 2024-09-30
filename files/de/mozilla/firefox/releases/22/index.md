---
title: Firefox 22 für Entwickler
slug: Mozilla/Firefox/Releases/22
l10n:
  sourceCommit: 532be30b7e31ff344d725e5f541034e2bd3d39db
---

{{FirefoxSidebar}}

## Änderungen für Webentwickler

### HTML

- Das HTML5-{{HTMLElement("data")}}-Element wurde implementiert ([Firefox-Bug 839371](https://bugzil.la/839371)).
- Das HTML5-{{HTMLElement("time")}}-Element wurde implementiert ([Firefox-Bug 629801](https://bugzil.la/629801)).
- Der `range`-Zustand des {{HTMLElement("input")}}-Elements (`<input type="range">`) wurde hinter der Voreinstellung `dom.experimental_forms_range` implementiert und ist standardmäßig nur in den Kanälen Nightly und Aurora aktiviert ([Firefox-Bug 841948](https://bugzil.la/841948)).
- Die Unterstützung für das {{HTMLElement("template")}}-Element, Teil der Spezifikation für Web-Komponenten, wurde implementiert ([Firefox-Bug 818976](https://bugzil.la/818976)).

### JavaScript

- [Asm.js](http://asmjs.org/spec/latest/) Optimierungen sind aktiviert, wodurch es möglich ist, C/C++-Anwendungen zu einem JavaScript-Teilset für bessere Leistung zu kompilieren.
- Die ES2015 [Arrow Function](/de/docs/Web/JavaScript/Reference/Functions/Arrow_functions)-Syntax wurde implementiert ([Firefox-Bug 846406](https://bugzil.la/846406)).
- Die neue [Object.is](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/is)-Funktion wurde hinzugefügt ([Firefox-Bug 839979](https://bugzil.la/839979)).
- [`arguments`](/de/docs/Web/JavaScript/Reference/Functions/arguments) in Generator-Ausdrücken werden jetzt vom umgebenden lexikalischen Bereich geerbt ([Firefox-Bug 848051](https://bugzil.la/848051)).
- Die ES2015-Proxy-{{jsxref("Global_Objects/Proxy/Proxy/preventExtensions", "preventExtensions")}}-Falle wurde implementiert ([Firefox-Bug 789897](https://bugzil.la/789897)).

### DOM

- Die Unterstützung für die `multipart`-Eigenschaft bei `XMLHttpRequest` und `multipart/x-mixed-replace`-Antworten in `XMLHttpRequest` wurde entfernt. Dies war ein reines Gecko-Feature, das nie standardisiert wurde. Stattdessen können [Server-Sent Events](/de/docs/Web/API/Server-sent_events), [Websockets](/de/docs/Web/API/WebSockets_API) oder das Überprüfen von `responseText` aus Fortschrittsevents verwendet werden.
- Die Unterstützung für [Web Notifications](/de/docs/Web/API/Notifications_API/Using_the_Notifications_API) wurde bereitgestellt ([Firefox-Bug 782211](https://bugzil.la/782211)).
- Die [`FormData`](/de/docs/Web/API/FormData)-`append`-Methode akzeptiert jetzt einen dritten optionalen `filename`-Parameter ([Firefox-Bug 690659](https://bugzil.la/690659)).
- `Node.isSupported` wurde entfernt ([Firefox-Bug 801562](https://bugzil.la/801562)).
- `Node.setUserData` und `Node.getUserData` wurden für Webinhalte entfernt und sind für Chrome-Inhalte veraltet ([Firefox-Bug 842372](https://bugzil.la/842372)).
- Die [`Element.attributes`](/de/docs/Web/API/Element/attributes)-Eigenschaft wurde von [`Node`](/de/docs/Web/API/Node) entfernt und dort hinzugefügt, wie von der Spezifikation gefordert ([Firefox-Bug 844134](https://bugzil.la/844134)).
- Das Mac OS X-Backend für **Ambient Light Events** wurde implementiert.
- Elemente im HTML-Namespace mit lokalen Namen `<bgsound>`, `<multicol>` und `<image>` implementieren nicht mehr die [`HTMLSpanElement`](/de/docs/Web/API/HTMLSpanElement)-Schnittstelle. `<bgsound>` implementiert [`HTMLUnknownElement`](/de/docs/Web/API/HTMLUnknownElement) und `<image>` implementiert [`HTMLElement`](/de/docs/Web/API/HTMLElement).
- Die [`NodeIterator.detach`](/de/docs/Web/API/NodeIterator/detach)-Methode wurde geändert, um nichts zu tun ([Firefox-Bug 823549](https://bugzil.la/823549)).
- Die [`BlobEvent`](/de/docs/Web/API/BlobEvent)-Schnittstelle wurde implementiert ([Firefox-Bug 834165](https://bugzil.la/834165)).
- Die Eigenschaften `HTMLMediaElement.crossorigin` und `HTMLInputElement.inputmode` wurden entfernt, um der Spezifikation in [`HTMLMediaElement.crossOrigin`](/de/docs/Web/API/HTMLMediaElement/crossOrigin) und `HTMLInputElement.inputMode` zu entsprechen ([Firefox-Bug 847370](https://bugzil.la/847370) und [Firefox-Bug 850346](https://bugzil.la/850346)).
- WebRTC: die Media Stream API und Peer Connection API werden jetzt standardmäßig unterstützt.
- Web Components: die [`Document.register`](/de/docs/Web/API/Document/register)-Methode wurde implementiert ([Firefox-Bug 783129](https://bugzil.la/783129)).
- Die `ProgressEvent.initProgressEvent()`-Konstruktor-Methode wurde entfernt. Verwenden Sie den Standardkonstruktor, [`ProgressEvent()`](/de/docs/Web/API/ProgressEvent/ProgressEvent), um [`ProgressEvent`](/de/docs/Web/API/ProgressEvent) zu erstellen und zu initialisieren ([Firefox-Bug 843489](https://bugzil.la/843489)).
- Manipulierte Daten, die einem [`cut`](/de/docs/Web/API/Element/cut_event), [`copy`](/de/docs/Web/API/Element/copy_event) oder [`paste`](/de/docs/Web/API/Element/paste_event)-Ereignis zugeordnet sind, können jetzt über die [`ClipboardEvent.clipboardData`](/de/docs/Web/API/ClipboardEvent/clipboardData)-Eigenschaft zugegriffen werden ([Firefox-Bug 407983](https://bugzil.la/407983)).
- Die [`HTMLTimeElement`](/de/docs/Web/API/HTMLTimeElement)-Schnittstelle wurde implementiert ([Firefox-Bug 629801](https://bugzil.la/629801)).
- Wenn ein ungültiger URL an einen [`Worker`](/de/docs/Web/API/Worker)-Konstruktor übergeben wird, wird jetzt ein [`DOMException`](/de/docs/Web/API/DOMException) vom Typ `SECURITY_ERR` ausgelöst ([Firefox-Bug 587251](https://bugzil.la/587251)).

### CSS

- Unterstützung für das [CSS-Flexbox-Layout](/de/docs/Web/CSS/CSS_flexible_box_layout/Basic_concepts_of_flexbox) wurde standardmäßig aktiviert ([Firefox-Bug 841876](https://bugzil.la/841876)).
- Nach einer Änderung der Spezifikation wurde der Anfangswert für {{cssxref("min-width")}} und {{cssxref("min-height")}} wieder auf `0` geändert, selbst bei Flex-Elementen ([Firefox-Bug 848539](https://bugzil.la/848539)).
- Unterstützung für CSS-Conditionals ({{cssxref("@supports")}} und [`CSS.supports()`](/de/docs/Web/API/CSS/supports_static)) wurde standardmäßig aktiviert ([Firefox-Bug 855455](https://bugzil.la/855455)).
- Unterstützung für die Eigenschaften {{cssxref("background-clip")}} und {{cssxref("background-origin")}} in der {{cssxref("background")}}-Kurzschrift wurde implementiert ([Firefox-Bug 570896](https://bugzil.la/570896)).

## Änderungen für Add-On- und Mozilla-Entwickler

- Der `properties`-Parameter wurde aus den Methoden `nsITreeView.getCellProperties()`, `nsITreeView.getColumnProperties()` und `nsITreeView.getRowProperties()` von `nsITreeView` entfernt. Diese Methoden sollten jetzt eine Zeichenfolge von durch Leerzeichen getrennten Eigenschaftsnamen zurückgeben ([Firefox-Bug 407956](https://bugzil.la/407956)).
- Die Methode `inIDOMUtils.getCSSPropertyNames()` wurde implementiert und wird alle unterstützten [CSS-Property](/de/docs/Web/CSS/Reference)-Namen zurückgeben.
- Siehe [hier](https://blog.mozilla.org/addons/2013/06/03/compatibility-for-firefox-22/) für weitere Änderungen.

### Firefox Developer Tools

- [Font Inspector](https://hacks.mozilla.org/2013/04/developer-tools-update-firefox-22/) zeigt, welche Schriften auf Ihrem Computer auf die Seite angewendet werden.
- Der visuelle Mal-Feedback-Modus zeigt, wann und wo eine Seite neu gemalt wird.
- Die Entwicklerwerkzeuge können jetzt nicht nur am unteren Rand des Browsers, sondern auch auf der rechten Seite angedockt werden.
- Einige Fenster innerhalb der Entwicklerwerkzeuge wurden von [XUL auf HTML](https://bugzil.la/875727) umgestellt. Zum Beispiel befindet sich der CSS-Regel-Viewer jetzt unter chrome://browser/content/devtools/cssruleview.xhtml, nicht mehr in `cssruleview.xul`. Anstatt ein Overlay direkt hinzuzufügen, um Funktionen dieser Fenster zu erweitern, können Sie ein Overlay und Skript zum äußeren XUL-Dokument hinzufügen, um Lade-Listener hinzuzufügen und diese HTML-Dokumente zu ändern.
- Der Stack-Trace wird jetzt als Breadcrumb oben angezeigt, und die Skriptauflistung befindet sich im linken Bereich des Debuggers.

## Siehe auch

- [Firefox 22 Beta Release Notes](https://website-archive.mozilla.org/www.mozilla.org/firefox_releasenotes/en-us/firefox/22.0beta/releasenotes/)
- [Add-on-Kompatibilität für Firefox 22](https://blog.mozilla.org/addons/2013/06/03/compatibility-for-firefox-22/)

### Versionen

{{Firefox_for_developers}}
