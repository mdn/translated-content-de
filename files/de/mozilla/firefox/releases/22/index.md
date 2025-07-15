---
title: Firefox 22 für Entwickler
short-title: Firefox 22
slug: Mozilla/Firefox/Releases/22
l10n:
  sourceCommit: 64df508685abcbc047f6c1a973505921fad1484e
---

Firefox 22 wurde am 25. Juni 2013 veröffentlicht. Dieser Artikel listet wichtige Änderungen auf, die nicht nur für Webentwickler, sondern auch für Firefox- und Gecko-Entwickler sowie Add-on-Entwickler nützlich sind.

## Änderungen für Webentwickler

### HTML

- Das HTML5-{{HTMLElement("data")}}-Element wurde implementiert ([Firefox-Bug 839371](https://bugzil.la/839371)).
- Das HTML5-{{HTMLElement("time")}}-Element wurde implementiert ([Firefox-Bug 629801](https://bugzil.la/629801)).
- Der `range`-Status des {{HTMLElement("input")}}-Elements (`<input type="range">`) wurde implementiert, hinter der Präferenz `dom.experimental_forms_range`, standardmäßig nur im Nightly- und Aurora-Kanal aktiviert ([Firefox-Bug 841948](https://bugzil.la/841948)).
- Die Unterstützung für das {{HTMLElement("template")}}-Element, Teil der Web-Component-Spezifikation, wurde implementiert ([Firefox-Bug 818976](https://bugzil.la/818976)).

### JavaScript

- [Asm.js](http://asmjs.org/spec/latest/) Optimierungen sind aktiviert, was es ermöglicht, C/C++-Anwendungen zu einem Subset von JavaScript zu kompilieren, um die Leistung zu verbessern.
- ES2015 [Arrow Function](/de/docs/Web/JavaScript/Reference/Functions/Arrow_functions) Syntax wurde implementiert ([Firefox-Bug 846406](https://bugzil.la/846406)).
- Die neue [Object.is](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/is)-Funktion wurde hinzugefügt ([Firefox-Bug 839979](https://bugzil.la/839979)).
- `arguments` in Generator-Ausdrücken wird jetzt vom umschließenden lexikalischen Bereich geerbt ([Firefox-Bug 848051](https://bugzil.la/848051)).
- Die ES2015 Proxy {{jsxref("Global_Objects/Proxy/Proxy/preventExtensions", "preventExtensions")}}-Falle wurde implementiert ([Firefox-Bug 789897](https://bugzil.la/789897)).

### DOM

- Die Unterstützung für die `multipart`-Eigenschaft in `XMLHttpRequest` und `multipart/x-mixed-replace`-Antworten in `XMLHttpRequest` wurde entfernt. Dies war ein Gecko-spezifisches Feature, das nie standardisiert wurde. [Server-Sent Events](/de/docs/Web/API/Server-sent_events), [WebSockets](/de/docs/Web/API/WebSockets_API) oder das Inspektieren von `responseText` aus Fortschrittsereignissen können stattdessen verwendet werden.
- Unterstützung für [Web Notifications](/de/docs/Web/API/Notifications_API/Using_the_Notifications_API) wurde hinzugefügt ([Firefox-Bug 782211](https://bugzil.la/782211)).
- Die [`FormData`](/de/docs/Web/API/FormData) `append`-Methode akzeptiert nun einen dritten optionalen `filename`-Parameter ([Firefox-Bug 690659](https://bugzil.la/690659)).
- `Node.isSupported` wurde entfernt ([Firefox-Bug 801562](https://bugzil.la/801562)).
- `Node.setUserData` und `Node.getUserData` wurden für Webinhalte entfernt und sind für Chrome-Inhalte veraltet ([Firefox-Bug 842372](https://bugzil.la/842372)).
- Die [`Element.attributes`](/de/docs/Web/API/Element/attributes)-Eigenschaft wurde von [`Node`](/de/docs/Web/API/Node) hierhin verschoben, wie es die Spezifikation erfordert ([Firefox-Bug 844134](https://bugzil.la/844134)).
- Das Mac OS X-Backend für **Ambient Light Events** wurde implementiert.
- Elemente im HTML-Namespace mit lokalen Namen `<bgsound>`, `<multicol>` und `<image>` implementieren nicht mehr die [`HTMLSpanElement`](/de/docs/Web/API/HTMLSpanElement)-Schnittstelle. `<bgsound>` implementiert [`HTMLUnknownElement`](/de/docs/Web/API/HTMLUnknownElement) und `<image>` implementiert [`HTMLElement`](/de/docs/Web/API/HTMLElement).
- Die [`NodeIterator.detach`](/de/docs/Web/API/NodeIterator/detach)-Methode wurde geändert, um nichts zu tun ([Firefox-Bug 823549](https://bugzil.la/823549)).
- Die [`BlobEvent`](/de/docs/Web/API/BlobEvent)-Schnittstelle wurde implementiert ([Firefox-Bug 834165](https://bugzil.la/834165)).
- Die Eigenschaften `HTMLMediaElement.crossorigin` und `HTMLInputElement.inputmode` wurden entfernt, um der Spezifikation entsprechend mit [`HTMLMediaElement.crossOrigin`](/de/docs/Web/API/HTMLMediaElement/crossOrigin) und `HTMLInputElement.inputMode` übereinzustimmen ([Firefox-Bug 847370](https://bugzil.la/847370) und [Firefox-Bug 850346](https://bugzil.la/850346)).
- WebRTC: die Media Stream API und Peer Connection API werden jetzt standardmäßig unterstützt.
- Web Components: die `Document.register()`-Methode wurde implementiert ([Firefox-Bug 783129](https://bugzil.la/783129)).
- Die `ProgressEvent.initProgressEvent()`-Konstruktormethode wurde entfernt. Verwenden Sie den Standardkonstruktor, [`ProgressEvent()`](/de/docs/Web/API/ProgressEvent/ProgressEvent) um ein [`ProgressEvent`](/de/docs/Web/API/ProgressEvent) zu konstruieren und zu initialisieren ([Firefox-Bug 843489](https://bugzil.la/843489)).
- Manipulierte Daten, die mit einem [`cut`](/de/docs/Web/API/Element/cut_event)-, [`copy`](/de/docs/Web/API/Element/copy_event)- oder [`paste`](/de/docs/Web/API/Element/paste_event)-Ereignis verbunden sind, können jetzt über die [`ClipboardEvent.clipboardData`](/de/docs/Web/API/ClipboardEvent/clipboardData)-Eigenschaft zugegriffen werden ([Firefox-Bug 407983](https://bugzil.la/407983)).
- Die [`HTMLTimeElement`](/de/docs/Web/API/HTMLTimeElement)-Schnittstelle wurde implementiert ([Firefox-Bug 629801](https://bugzil.la/629801)).
- Wenn einem [`Worker`](/de/docs/Web/API/Worker) Konstruktor eine ungültige URL übergeben wird, wirft er nun [`DOMException`](/de/docs/Web/API/DOMException) des Typs `SECURITY_ERR` ([Firefox-Bug 587251](https://bugzil.la/587251)).

### CSS

- Unterstützung für das [CSS Flexbox-Layout](/de/docs/Web/CSS/CSS_flexible_box_layout/Basic_concepts_of_flexbox) wurde standardmäßig aktiviert ([Firefox-Bug 841876](https://bugzil.la/841876)).
- Nach einer Änderung der Spezifikation wurde der Initialwert für {{cssxref("min-width")}} und {{cssxref("min-height")}} wieder auf `0` geändert, auch bei Flex-Elementen ([Firefox-Bug 848539](https://bugzil.la/848539)).
- Unterstützung für CSS-Conditionals ({{cssxref("@supports")}} und [`CSS.supports()`](/de/docs/Web/API/CSS/supports_static)) wurde standardmäßig aktiviert ([Firefox-Bug 855455](https://bugzil.la/855455)).
- Unterstützung für {{cssxref("background-clip")}} und {{cssxref("background-origin")}} Eigenschaften in der {{cssxref("background")}} Kurznotation wurde implementiert ([Firefox-Bug 570896](https://bugzil.la/570896)).

## Änderungen für Add-on- und Mozilla-Entwickler

- Der `properties`-Parameter wurde aus den `nsITreeView.getCellProperties()`, `nsITreeView.getColumnProperties()` und `nsITreeView.getRowProperties()` Methoden von `nsITreeView` entfernt. Diese Methoden sollten jetzt eine Zeichenkette mit Leerzeichen getrennte Eigenschaftsnamen zurückgeben ([Firefox-Bug 407956](https://bugzil.la/407956)).
- Die `inIDOMUtils.getCSSPropertyNames()` Methode wurde implementiert und wird alle unterstützten [CSS-Eigenschafts](/de/docs/Web/CSS/Reference)-Namen zurückgeben.
- Weitere Änderungen finden Sie im [Mozilla-Blog](https://blog.mozilla.org/addons/2013/06/03/compatibility-for-firefox-22/).

### Firefox-Entwicklerwerkzeuge

- [Font Inspector](https://hacks.mozilla.org/2013/04/developer-tools-update-firefox-22/) zeigt an, welche Schriften auf Ihrem Computer auf die Seite angewendet werden.
- Der visuelle Malfeedback-Modus zeigt an, wann und wo eine Seite neu gezeichnet wird.
- Die Entwicklerwerkzeuge können jetzt nicht nur unten, sondern auch auf der rechten Seite angedockt werden.
- Einige Fenster innerhalb der Entwicklerwerkzeuge wurden von [XUL zu HTML](https://bugzil.la/875727) umgestellt. Zum Beispiel ist die CSS-Regel-Ansicht jetzt `chrome://browser/content/devtools/cssruleview.xhtml`, nicht `cssruleview.xul`. Anstatt direkt ein Overlay hinzuzufügen, um Funktionen dieser Fenster zu erweitern, können Sie ein Overlay und ein Skript zum äußeren XUL-Dokument hinzufügen, um Lade-Listener hinzuzufügen und diese HTML-Dokumente zu ändern.
- Der Aufruf-Stack wird jetzt als Breadcrumb in der Nähe des oberen Bereichs angezeigt, und die Script-Liste befindet sich jetzt im linken Bereich des Debuggers.

## Siehe auch

- [Firefox 22 Beta Versionshinweise](https://website-archive.mozilla.org/www.mozilla.org/firefox_releasenotes/en-us/firefox/22.0beta/releasenotes/)
- [Add-on-Kompatibilität für Firefox 22](https://blog.mozilla.org/addons/2013/06/03/compatibility-for-firefox-22/)
