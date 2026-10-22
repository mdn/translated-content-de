---
title: Firefox 22 – Versionshinweise für Entwickler
short-title: Firefox 22
slug: Mozilla/Firefox/Releases/22
l10n:
  sourceCommit: b25798255cfb773885c94557b74179400ac7153d
---

Firefox 22 wurde am 25. Juni 2013 veröffentlicht. Dieser Artikel führt wichtige Änderungen auf, die nicht nur für Webentwickler, sondern auch für Firefox- und Gecko-Entwickler sowie für Add-on-Entwickler nützlich sind.

## Änderungen für Webentwickler

### HTML

- Das HTML5-Element {{HTMLElement("data")}} wurde implementiert ([Firefox-Bug 839371](https://bugzil.la/839371)).
- Das HTML5-Element {{HTMLElement("time")}} wurde implementiert ([Firefox-Bug 629801](https://bugzil.la/629801)).
- Der Zustand `range` des Elements {{HTMLElement("input")}} (`<input type="range">`) wurde implementiert. Er ist von der Einstellung `dom.experimental_forms_range` abhängig, die standardmäßig nur in den Nightly- und Aurora-Kanälen aktiviert ist ([Firefox-Bug 841948](https://bugzil.la/841948)).
- Die Unterstützung für das Element {{HTMLElement("template")}}, das Teil der Web-Components-Spezifikation ist, wurde implementiert ([Firefox-Bug 818976](https://bugzil.la/818976)).

### JavaScript

- [Asm.js](https://en.wikipedia.org/wiki/Asm.js)-Optimierungen sind aktiviert. Dadurch können C/C++-Anwendungen für eine Teilmenge von JavaScript kompiliert werden, um eine bessere Leistung zu erzielen.
- Die Syntax für [Pfeilfunktionen](/de/docs/Web/JavaScript/Reference/Functions/Arrow_functions) aus ES2015 wurde implementiert ([Firefox-Bug 846406](https://bugzil.la/846406)).
- Die neue Funktion [Object.is](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/is) wurde hinzugefügt ([Firefox-Bug 839979](https://bugzil.la/839979)).
- [`arguments`](/de/docs/Web/JavaScript/Reference/Functions/arguments) in Generatorausdrücken wird jetzt aus dem umgebenden lexikalischen Gültigkeitsbereich übernommen ([Firefox-Bug 848051](https://bugzil.la/848051)).
- Der ES2015-Proxy-Trap {{jsxref("Global_Objects/Proxy/Proxy/preventExtensions", "preventExtensions")}} wurde implementiert ([Firefox-Bug 789897](https://bugzil.la/789897)).

### DOM

- Die Unterstützung für die Eigenschaft `multipart` von `XMLHttpRequest` und für `multipart/x-mixed-replace`-Antworten in `XMLHttpRequest` wurde entfernt. Dies war eine Gecko-spezifische Funktion, die nie standardisiert wurde. Stattdessen können [Server-Sent Events](/de/docs/Web/API/Server-sent_events), [WebSockets](/de/docs/Web/API/WebSockets_API) oder die Auswertung von `responseText` bei Fortschrittsereignissen verwendet werden.
- Die Unterstützung für [Webbenachrichtigungen](/de/docs/Web/API/Notifications_API/Using_the_Notifications_API) wurde integriert ([Firefox-Bug 782211](https://bugzil.la/782211)).
- Die Methode `append` von [`FormData`](/de/docs/Web/API/FormData) akzeptiert jetzt einen dritten, optionalen Parameter `filename` ([Firefox-Bug 690659](https://bugzil.la/690659)).
- `Node.isSupported` wurde entfernt ([Firefox-Bug 801562](https://bugzil.la/801562)).
- `Node.setUserData` und `Node.getUserData` wurden für Webinhalte entfernt und sind für Chrome-Inhalte veraltet ([Firefox-Bug 842372](https://bugzil.la/842372)).
- Die Eigenschaft [`Element.attributes`](/de/docs/Web/API/Element/attributes) wurde entsprechend der Spezifikation von [`Node`](/de/docs/Web/API/Node) nach `Element` verschoben ([Firefox-Bug 844134](https://bugzil.la/844134)).
- Das Mac-OS-X-Backend für **Umgebungslicht-Ereignisse** wurde implementiert.
- Elemente im HTML-Namensraum mit den lokalen Namen `<bgsound>`, `<multicol>` und `<image>` implementieren die Schnittstelle [`HTMLSpanElement`](/de/docs/Web/API/HTMLSpanElement) nicht mehr. `<bgsound>` implementiert [`HTMLUnknownElement`](/de/docs/Web/API/HTMLUnknownElement) und `<image>` implementiert [`HTMLElement`](/de/docs/Web/API/HTMLElement).
- Die Methode [`NodeIterator.detach`](/de/docs/Web/API/NodeIterator/detach) wurde so geändert, dass sie keine Wirkung mehr hat ([Firefox-Bug 823549](https://bugzil.la/823549)).
- Die Schnittstelle [`BlobEvent`](/de/docs/Web/API/BlobEvent) wurde implementiert ([Firefox-Bug 834165](https://bugzil.la/834165)).
- Die Eigenschaften `HTMLMediaElement.crossorigin` und `HTMLInputElement.inputmode` wurden entfernt, um der Spezifikation zu entsprechen. Verwenden Sie stattdessen [`HTMLMediaElement.crossOrigin`](/de/docs/Web/API/HTMLMediaElement/crossOrigin) beziehungsweise `HTMLInputElement.inputMode` ([Firefox-Bug 847370](https://bugzil.la/847370) und [Firefox-Bug 850346](https://bugzil.la/850346)).
- WebRTC: Die Media Stream API und die Peer Connection API werden jetzt standardmäßig unterstützt.
- Web Components: Die Methode `Document.register()` wurde implementiert ([Firefox-Bug 783129](https://bugzil.la/783129)).
- Die Konstruktormethode `ProgressEvent.initProgressEvent()` wurde entfernt. Verwenden Sie den Standardkonstruktor [`ProgressEvent()`](/de/docs/Web/API/ProgressEvent/ProgressEvent), um ein [`ProgressEvent`](/de/docs/Web/API/ProgressEvent) zu erstellen und zu initialisieren ([Firefox-Bug 843489](https://bugzil.la/843489)).
- Auf Daten, die mit einem [`cut`](/de/docs/Web/API/Element/cut_event)-, [`copy`](/de/docs/Web/API/Element/copy_event)- oder [`paste`](/de/docs/Web/API/Element/paste_event)-Ereignis verarbeitet werden, kann jetzt über die Eigenschaft [`ClipboardEvent.clipboardData`](/de/docs/Web/API/ClipboardEvent/clipboardData) zugegriffen werden ([Firefox-Bug 407983](https://bugzil.la/407983)).
- Die Schnittstelle [`HTMLTimeElement`](/de/docs/Web/API/HTMLTimeElement) wurde implementiert ([Firefox-Bug 629801](https://bugzil.la/629801)).
- Wenn dem Konstruktor [`Worker`](/de/docs/Web/API/Worker) eine ungültige URL übergeben wird, löst er jetzt eine [`DOMException`](/de/docs/Web/API/DOMException) vom Typ `SECURITY_ERR` aus ([Firefox-Bug 587251](https://bugzil.la/587251)).

### CSS

- Die Unterstützung für das [CSS-Flexbox-Layout](/de/docs/Web/CSS/Guides/Flexible_box_layout/Basic_concepts) ist standardmäßig aktiviert ([Firefox-Bug 841876](https://bugzil.la/841876)).
- Aufgrund einer Änderung der Spezifikation wurde der Anfangswert von {{cssxref("min-width")}} und {{cssxref("min-height")}} wieder auf `0` gesetzt, auch für Flex-Elemente ([Firefox-Bug 848539](https://bugzil.la/848539)).
- Die Unterstützung für CSS-Bedingungen ({{cssxref("@supports")}} und [`CSS.supports()`](/de/docs/Web/API/CSS/supports_static)) ist standardmäßig aktiviert ([Firefox-Bug 855455](https://bugzil.la/855455)).
- Die Unterstützung für die Eigenschaften {{cssxref("background-clip")}} und {{cssxref("background-origin")}} in der Kurzschreibweise {{cssxref("background")}} wurde implementiert ([Firefox-Bug 570896](https://bugzil.la/570896)).

## Änderungen für Add-on- und Mozilla-Entwickler

- Der Parameter `properties` wurde aus den Methoden `nsITreeView.getCellProperties()`, `nsITreeView.getColumnProperties()` und `nsITreeView.getRowProperties()` von `nsITreeView` entfernt. Diese Methoden sollen jetzt eine Zeichenfolge mit durch Leerzeichen getrennten Eigenschaftsnamen zurückgeben ([Firefox-Bug 407956](https://bugzil.la/407956)).
- Die Methode `inIDOMUtils.getCSSPropertyNames()` wurde implementiert und gibt die Namen aller unterstützten [CSS-Eigenschaften](/de/docs/Web/CSS/Reference) zurück.
- Weitere Änderungen finden Sie im [Mozilla-Blog](https://blog.mozilla.org/addons/2013/06/03/compatibility-for-firefox-22/).

### Firefox-Entwicklerwerkzeuge

- Der [Schriftarten-Inspektor](https://hacks.mozilla.org/2013/04/developer-tools-update-firefox-22/) zeigt an, welche Schriftarten Ihres Computers auf der Seite verwendet werden.
- Der Modus für visuelles Zeichnungsfeedback zeigt an, wann und wo eine Seite neu gezeichnet wird.
- Die Entwicklerwerkzeuge können jetzt auch an der rechten Seite des Browsers angedockt werden, nicht mehr nur am unteren Rand.
- Einige Bereiche der Entwicklerwerkzeuge wurden [von XUL auf HTML umgestellt](https://bugzil.la/875727). Beispielsweise befindet sich die Ansicht für CSS-Regeln jetzt unter chrome://browser/content/devtools/cssruleview\.xhtml statt unter `cssruleview.xul`. Anstatt direkt ein Overlay hinzuzufügen, um die Funktionen dieser Bereiche zu erweitern, können Sie dem äußeren XUL-Dokument ein Overlay und ein Skript hinzufügen, um Load-Listener zu registrieren und diese HTML-Dokumente zu ändern.
- Der Stacktrace wird jetzt oben als Navigationspfad angezeigt. Die Skriptliste befindet sich jetzt im linken Bereich des Debuggers.

## Siehe auch

- [Versionshinweise zu Firefox 22 Beta](https://website-archive.mozilla.org/www.mozilla.org/firefox_releasenotes/en-us/firefox/22.0beta/releasenotes/)
- [Add-on-Kompatibilität für Firefox 22](https://blog.mozilla.org/addons/2013/06/03/compatibility-for-firefox-22/)
