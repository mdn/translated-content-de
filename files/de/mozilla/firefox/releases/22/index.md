---
title: Firefox 22 für Entwickler
slug: Mozilla/Firefox/Releases/22
l10n:
  sourceCommit: e488eba036b2fee56444fd579c3759ef45ff2ca8
---

{{FirefoxSidebar}}

## Änderungen für Webentwickler

### HTML

- Das HTML5-Element {{HTMLElement("data")}} wurde implementiert ([Firefox Fehler 839371](https://bugzil.la/839371)).
- Das HTML5-Element {{HTMLElement("time")}} wurde implementiert ([Firefox Fehler 629801](https://bugzil.la/629801)).
- Der Status `range` des {{HTMLElement("input")}}-Elements (`<input type="range">`) wurde implementiert, hinter der Einstellung `dom.experimental_forms_range`, standardmäßig nur im Nightly- und Aurora-Kanal aktiviert ([Firefox Fehler 841948](https://bugzil.la/841948)).
- Die Unterstützung für das {{HTMLElement("template")}}-Element, ein Teil der Webkomponenten-Spezifikation, wurde implementiert ([Firefox Fehler 818976](https://bugzil.la/818976)).

### JavaScript

- [Asm.js](http://asmjs.org/spec/latest/) Optimierungen sind aktiviert, was es ermöglicht, C/C++-Anwendungen in eine Teilmenge von JavaScript für bessere Leistung zu kompilieren.
- Die ES2015 [Pfeilfunktionen](/de/docs/Web/JavaScript/Reference/Functions/Arrow_functions)-Syntax wurde implementiert ([Firefox Fehler 846406](https://bugzil.la/846406)).
- Die neue Funktion [Object.is](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/is) wurde hinzugefügt ([Firefox Fehler 839979](https://bugzil.la/839979)).
- [`arguments`](/de/docs/Web/JavaScript/Reference/Functions/arguments) in Generator-Ausdrücken wird nun vom umgebenden lexikalischen Kontext geerbt ([Firefox Fehler 848051](https://bugzil.la/848051)).
- Die ES2015 Proxy-{{jsxref("Global_Objects/Proxy/Proxy/preventExtensions", "preventExtensions")}}-Falle wurde implementiert ([Firefox Fehler 789897](https://bugzil.la/789897)).

### DOM

- Die Unterstützung für die `multipart`-Eigenschaft bei `XMLHttpRequest` und `multipart/x-mixed-replace`-Antworten in `XMLHttpRequest` wurde entfernt. Dies war ein ausschließlich in Gecko vorhandenes Feature, das nie standardisiert wurde. Stattdessen können [Server-Sent Events](/de/docs/Web/API/Server-sent_events), [Web Sockets](/de/docs/Web/API/WebSockets_API) oder die Inspektion von `responseText` aus Fortschrittsevents verwendet werden.
- Die Unterstützung für [Web Notifications](/de/docs/Web/API/Notifications_API/Using_the_Notifications_API) wurde hinzugefügt ([Firefox Fehler 782211](https://bugzil.la/782211)).
- Die [`FormData`](/de/docs/Web/API/FormData)-`append`-Methode akzeptiert jetzt einen dritten optionalen `filename`-Parameter ([Firefox Fehler 690659](https://bugzil.la/690659)).
- `Node.isSupported` wurde entfernt ([Firefox Fehler 801562](https://bugzil.la/801562)).
- `Node.setUserData` und `Node.getUserData` wurden für Webinhalte entfernt und sind für Chrome-Inhalte veraltet ([Firefox Fehler 842372](https://bugzil.la/842372)).
- Die [`Element.attributes`](/de/docs/Web/API/Element/attributes)-Eigenschaft wurde gemäß der Spezifikation von [`Node`](/de/docs/Web/API/Node) dorthin verschoben ([Firefox Fehler 844134](https://bugzil.la/844134)).
- Das Mac OS X-Backend für **Ambient Light Events** wurde implementiert.
- Elemente im HTML-Namespace mit lokalen Namen `<bgsound>`, `<multicol>` und `<image>` implementieren nicht mehr das [`HTMLSpanElement`](/de/docs/Web/API/HTMLSpanElement)-Interface. `<bgsound>` implementiert [`HTMLUnknownElement`](/de/docs/Web/API/HTMLUnknownElement) und `<image>` implementiert [`HTMLElement`](/de/docs/Web/API/HTMLElement).
- Die Methode [`NodeIterator.detach`](/de/docs/Web/API/NodeIterator/detach) wurde geändert und führt nun keinerlei Aktion mehr aus ([Firefox Fehler 823549](https://bugzil.la/823549)).
- Das [`BlobEvent`](/de/docs/Web/API/BlobEvent)-Interface wurde implementiert ([Firefox Fehler 834165](https://bugzil.la/834165)).
- Die Eigenschaften `HTMLMediaElement.crossorigin` und `HTMLInputElement.inputmode` wurden entfernt, um der Spezifikation in [`HTMLMediaElement.crossOrigin`](/de/docs/Web/API/HTMLMediaElement/crossOrigin) und `HTMLInputElement.inputMode` zu entsprechen ([Firefox Fehler 847370](https://bugzil.la/847370) und [Firefox Fehler 850346](https://bugzil.la/850346)).
- WebRTC: Die Media Stream API und Peer Connection API werden jetzt standardmäßig unterstützt.
- Web Components: Die Methode `Document.register()` wurde implementiert ([Firefox Fehler 783129](https://bugzil.la/783129)).
- Die Konstruktor-Methode `ProgressEvent.initProgressEvent()` wurde entfernt. Verwenden Sie den Standardkonstruktor, [`ProgressEvent()`](/de/docs/Web/API/ProgressEvent/ProgressEvent), um [`ProgressEvent`](/de/docs/Web/API/ProgressEvent) zu konstruieren und zu initialisieren ([Firefox Fehler 843489](https://bugzil.la/843489)).
- Manipulierte Daten, die mit einem [`cut`](/de/docs/Web/API/Element/cut_event), [`copy`](/de/docs/Web/API/Element/copy_event) oder [`paste`](/de/docs/Web/API/Element/paste_event) Ereignis verbunden sind, können jetzt über die Eigenschaft [`ClipboardEvent.clipboardData`](/de/docs/Web/API/ClipboardEvent/clipboardData) abgerufen werden ([Firefox Fehler 407983](https://bugzil.la/407983)).
- Die [`HTMLTimeElement`](/de/docs/Web/API/HTMLTimeElement)-Schnittstelle wurde implementiert ([Firefox Fehler 629801](https://bugzil.la/629801)).
- Wenn einem [`Worker`](/de/docs/Web/API/Worker)-Konstruktor eine ungültige URL übergeben wird, wird jetzt [`DOMException`](/de/docs/Web/API/DOMException) vom Typ `SECURITY_ERR` ausgelöst ([Firefox Fehler 587251](https://bugzil.la/587251)).

### CSS

- Die Unterstützung für das [CSS Flexbox Layout](/de/docs/Web/CSS/CSS_flexible_box_layout/Basic_concepts_of_flexbox) ist standardmäßig aktiviert ([Firefox Fehler 841876](https://bugzil.la/841876)).
- Nach einer Spezifikationsänderung wurde der Anfangswert für {{cssxref("min-width")}} und {{cssxref("min-height")}} wieder auf `0` geändert, auch bei Flexitems ([Firefox Fehler 848539](https://bugzil.la/848539)).
- Die Unterstützung für CSS-Conditionals ({{cssxref("@supports")}} und [`CSS.supports()`](/de/docs/Web/API/CSS/supports_static)) ist standardmäßig aktiviert ([Firefox Fehler 855455](https://bugzil.la/855455)).
- Die Unterstützung für die Eigenschaften {{cssxref("background-clip")}} und {{cssxref("background-origin")}} im {{cssxref("background")}}-Kurzschreibweise wurde implementiert ([Firefox Fehler 570896](https://bugzil.la/570896)).

## Änderungen für Add-on und Mozilla-Entwickler

- Der `properties`-Parameter wurde aus den Methoden `nsITreeView.getCellProperties()`, `nsITreeView.getColumnProperties()` und `nsITreeView.getRowProperties()` von `nsITreeView` entfernt. Diese Methoden sollten nun eine Zeichenkette mit durch Leerzeichen getrennten Eigenschaftsnamen zurückgeben ([Firefox Fehler 407956](https://bugzil.la/407956)).
- Die Methode `inIDOMUtils.getCSSPropertyNames()` wurde implementiert und wird alle unterstützten [CSS-Eigenschafts](/de/docs/Web/CSS/Reference)-Namen zurückgeben.
- Weitere Änderungen finden Sie auf [dem Mozilla-Blog](https://blog.mozilla.org/addons/2013/06/03/compatibility-for-firefox-22/).

### Firefox Developer Tools

- Der [Font-Inspektor](https://hacks.mozilla.org/2013/04/developer-tools-update-firefox-22/) zeigt an, welche Schriftarten auf Ihrem Computer auf die Seite angewendet werden.
- Der visuelle Malrückmeldungsmodus zeigt an, wann und wo eine Seite neu gemalt wird.
- Die Entwicklerwerkzeuge können nun an der rechten Seite angedockt werden, nicht nur unten im Browser.
- Einige Bereiche innerhalb der Entwicklerwerkzeuge sind von [XUL zu HTML](https://bugzil.la/875727) gewechselt. Beispielsweise ist der CSS-Regel-Viewer jetzt chrome://browser/content/devtools/cssruleview\.xhtml und nicht `cssruleview.xul`. Anstatt ein Overlay direkt hinzuzufügen, um Funktionen dieser Bereiche zu erweitern, können Sie ein Overlay und ein Skript zum äußeren XUL-Dokument hinzufügen, um Lade-Listener hinzuzufügen und diese HTML-Dokumente zu ändern.
- Der Stapelverlauf wird jetzt als Breadcrumb in der Nähe der oberen Leiste angezeigt, und die Skriptabliste befindet sich jetzt im linken Bereich des Debuggers.

## Siehe auch

- [Firefox 22 Beta Release Notes](https://website-archive.mozilla.org/www.mozilla.org/firefox_releasenotes/en-us/firefox/22.0beta/releasenotes/)
- [Add-on-Kompatibilität für Firefox 22](https://blog.mozilla.org/addons/2013/06/03/compatibility-for-firefox-22/)

### Versionen

{{Firefox_for_developers}}
