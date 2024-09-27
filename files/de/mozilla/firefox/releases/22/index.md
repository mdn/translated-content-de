---
title: Firefox 22 für Entwickler
slug: Mozilla/Firefox/Releases/22
l10n:
  sourceCommit: 532be30b7e31ff344d725e5f541034e2bd3d39db
---

{{FirefoxSidebar}}

## Änderungen für Webentwickler

### HTML

- Das HTML5-Element {{HTMLElement("data")}} wurde implementiert ([Firefox Bug 839371](https://bugzil.la/839371)).
- Das HTML5-Element {{HTMLElement("time")}} wurde implementiert ([Firefox Bug 629801](https://bugzil.la/629801)).
- Der `range`-Zustand des {{HTMLElement("input")}}-Elements (`<input type="range">`) wurde hinter der Präferenz `dom.experimental_forms_range` implementiert und ist standardmäßig nur auf dem Nightly- und Aurora-Kanal aktiviert ([Firefox Bug 841948](https://bugzil.la/841948)).
- Die Unterstützung für das {{HTMLElement("template")}}-Element, das Teil der Web-Komponenten-Spezifikation ist, wurde implementiert ([Firefox Bug 818976](https://bugzil.la/818976)).

### JavaScript

- Asm.js-Optimierungen sind aktiviert, was es ermöglicht, C/C++-Anwendungen in ein Subset von JavaScript für eine bessere Leistung zu kompilieren.
- Die ES2015 [Pfeilfunktions]-Syntax (/de/docs/Web/JavaScript/Reference/Functions/Arrow_functions) wurde implementiert ([Firefox Bug 846406](https://bugzil.la/846406)).
- Die neue Funktion [Object.is](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/is) wurde hinzugefügt ([Firefox Bug 839979](https://bugzil.la/839979)).
- `arguments` in Generatorausdrücken wird nun vom umgebenden lexikalischen Bereich geerbt ([Firefox Bug 848051](https://bugzil.la/848051)).
- Das ES2015 Proxy-{{jsxref("Global_Objects/Proxy/Proxy/preventExtensions", "preventExtensions")}}-Trap wurde implementiert ([Firefox Bug 789897](https://bugzil.la/789897)).

### DOM

- Unterstützung für die `multipart`-Eigenschaft in `XMLHttpRequest` und `multipart/x-mixed-replace`-Antworten in `XMLHttpRequest` wurde entfernt. Dies war eine Gecko-exklusive Funktion, die nie standardisiert wurde. Stattdessen können [Server-Sent Events](/de/docs/Web/API/Server-sent_events), [Web Sockets](/de/docs/Web/API/WebSockets_API) oder das Inspizieren von `responseText` aus Fortschrittsereignissen verwendet werden.
- Unterstützung für [Web Notifications](/de/docs/Web/API/Notifications_API/Using_the_Notifications_API) wurde hinzugefügt ([Firefox Bug 782211](https://bugzil.la/782211)).
- Die Methode [`FormData.append`](/de/docs/Web/API/FormData) akzeptiert jetzt einen dritten optionalen `filename`-Parameter ([Firefox Bug 690659](https://bugzil.la/690659)).
- `Node.isSupported` wurde entfernt ([Firefox Bug 801562](https://bugzil.la/801562)).
- `Node.setUserData` und `Node.getUserData` wurden für Webinhalte entfernt und sind für Chrome-Inhalte veraltet ([Firefox Bug 842372](https://bugzil.la/842372)).
- Die [`Element.attributes`](/de/docs/Web/API/Element/attributes)-Eigenschaft wurde gemäß der Spezifikation von [`Node`](/de/docs/Web/API/Node) dorthin verlagert ([Firefox Bug 844134](https://bugzil.la/844134)).
- Das Backend für **Ambient Light Events** auf Mac OS X wurde implementiert.
- Elemente im HTML-Namespace mit den lokalen Namen `<bgsound>`, `<multicol>` und `<image>` implementieren nicht mehr das [`HTMLSpanElement`](/de/docs/Web/API/HTMLSpanElement)-Interface. `<bgsound>` implementiert jetzt [`HTMLUnknownElement`](/de/docs/Web/API/HTMLUnknownElement) und `<image>` implementiert [`HTMLElement`](/de/docs/Web/API/HTMLElement).
- Die Methode [`NodeIterator.detach`](/de/docs/Web/API/NodeIterator/detach) wurde geändert, um nichts mehr zu tun ([Firefox Bug 823549](https://bugzil.la/823549)).
- Das Interface [`BlobEvent`](/de/docs/Web/API/BlobEvent) wurde implementiert ([Firefox Bug 834165](https://bugzil.la/834165)).
- Die Eigenschaften `HTMLMediaElement.crossorigin` und `HTMLInputElement.inputmode` wurden entfernt, um der Spezifikation in [`HTMLMediaElement.crossOrigin`](/de/docs/Web/API/HTMLMediaElement/crossOrigin) und `HTMLInputElement.inputMode` zu entsprechen ([Firefox Bug 847370](https://bugzil.la/847370) und [Firefox Bug 850346](https://bugzil.la/850346)).
- WebRTC: Die Media Stream API und die Peer Connection API werden jetzt standardmäßig unterstützt.
- Web-Komponenten: Die Methode [`Document.register`](/de/docs/Web/API/Document/register) wurde implementiert ([Firefox Bug 783129](https://bugzil.la/783129)).
- Die Konstruktor-Methode `ProgressEvent.initProgressEvent()` wurde entfernt. Verwenden Sie den Standardkonstruktor [`ProgressEvent()`](/de/docs/Web/API/ProgressEvent/ProgressEvent), um ein [`ProgressEvent`](/de/docs/Web/API/ProgressEvent) zu erstellen und zu initialisieren ([Firefox Bug 843489](https://bugzil.la/843489)).
- Manipulierte Daten, die mit einem [`cut`](/de/docs/Web/API/Element/cut_event), [`copy`](/de/docs/Web/API/Element/copy_event) oder [`paste`](/de/docs/Web/API/Element/paste_event) Ereignis verbunden sind, können jetzt über die [`ClipboardEvent.clipboardData`](/de/docs/Web/API/ClipboardEvent/clipboardData)-Eigenschaft abgerufen werden ([Firefox Bug 407983](https://bugzil.la/407983)).
- Das Interface [`HTMLTimeElement`](/de/docs/Web/API/HTMLTimeElement) wurde implementiert ([Firefox Bug 629801](https://bugzil.la/629801)).
- Wenn einem [`Worker`](/de/docs/Web/API/Worker)-Konstruktor eine ungültige URL übergeben wird, löst es jetzt [`DOMException`](/de/docs/Web/API/DOMException) vom Typ `SECURITY_ERR` aus ([Firefox Bug 587251](https://bugzil.la/587251)).

### CSS

- Unterstützung für [CSS Flexbox-Layout](/de/docs/Web/CSS/CSS_flexible_box_layout/Basic_concepts_of_flexbox) ist jetzt standardmäßig aktiviert ([Firefox Bug 841876](https://bugzil.la/841876)).
- Nach einer Änderung der Spezifikation wurde der initiale Wert für {{cssxref("min-width")}} und {{cssxref("min-height")}} wieder auf `0` geändert, auch bei Flex-Elementen ([Firefox Bug 848539](https://bugzil.la/848539)).
- Unterstützung für CSS-Conditionals ({{cssxref("@supports")}} und [`CSS.supports()`](/de/docs/Web/API/CSS/supports_static)) ist jetzt standardmäßig aktiviert ([Firefox Bug 855455](https://bugzil.la/855455)).
- Unterstützung für die Eigenschaften {{cssxref("background-clip")}} und {{cssxref("background-origin")}} im {{cssxref("background")}}-Kurzhandbefehl wurde implementiert ([Firefox Bug 570896](https://bugzil.la/570896)).

## Änderungen für Add-on- und Mozilla-Entwickler

- Der `properties`-Parameter wurde aus den Methoden `nsITreeView.getCellProperties()`, `nsITreeView.getColumnProperties()` und `nsITreeView.getRowProperties()` von `nsITreeView` entfernt. Diese Methoden sollten nun einen string von durch Leerzeichen getrennten Eigenschaftsnamen zurückgeben ([Firefox Bug 407956](https://bugzil.la/407956)).
- Die Methode `inIDOMUtils.getCSSPropertyNames()` wurde implementiert und wird alle unterstützten [CSS-Eigenschaften](/de/docs/Web/CSS/Reference)-Namen zurückgeben.
- Siehe [hier](https://blog.mozilla.org/addons/2013/06/03/compatibility-for-firefox-22/) für weitere Änderungen.

### Firefox Entwickler-Tools

- [Schriftinspektor](https://hacks.mozilla.org/2013/04/developer-tools-update-firefox-22/) zeigt, welche Schriften auf Ihrem Computer auf die Seite angewendet werden.
- Der visuelle Farbfeedback-Modus zeigt an, wann und wo eine Seite neu gezeichnet wird.
- Die Dev-Tools können nun nicht nur unten, sondern auch an der rechten Seite angedockt werden.
- Einige Fenster innerhalb der Dev-Tools haben von [XUL auf HTML](https://bugzil.la/875727) gewechselt. Zum Beispiel ist der CSS-Regel-Viewer jetzt chrome://browser/content/devtools/cssruleview\.xhtml, nicht `cssruleview.xul`. Anstatt einen Overlay direkt hinzuzufügen, um Funktionen dieser Fenster zu erweitern, können Sie ein Overlay und ein Skript zum äußeren XUL-Dokument hinzufügen, um Ladelisten und Änderungen dieser HTML-Dokumente hinzuzufügen.
- Der Stack-Trace wird jetzt als Breadcrumb oben angezeigt, und die Skriptauflistung befindet sich jetzt im linken Bereich des Debuggers.

## Siehe auch

- [Firefox 22 Beta Release Notes](https://website-archive.mozilla.org/www.mozilla.org/firefox_releasenotes/en-us/firefox/22.0beta/releasenotes/)
- [Add-on-Kompatibilität für Firefox 22](https://blog.mozilla.org/addons/2013/06/03/compatibility-for-firefox-22/)

### Versionen

{{Firefox_for_developers}}
