---
title: Firefox 17 für Entwickler
slug: Mozilla/Firefox/Releases/17
l10n:
  sourceCommit: bc7e82aa6db60568d7146ee285918550bbe4b8ce
---

{{FirefoxSidebar}}

Firefox 17 wurde am 20. November 2012 veröffentlicht. Dieser Artikel listet wesentliche Änderungen auf, die nicht nur für Webentwickler, sondern auch für Firefox- und Gecko-Entwickler sowie Add-on-Entwickler nützlich sind.

## Änderungen für Webentwickler

### HTML

- Unterstützung für das [`sandbox`](/de/docs/Web/HTML/Element/iframe#sandbox) Attribut im {{HTMLElement("iframe")}} Element wurde hinzugefügt. ([Firefox Bug 341604](https://bugzil.la/341604))

### CSS

- Unterstützung für die {{cssxref("@supports")}} At-Regel, definiert im [CSS Conditional Rules Module Level 3](https://drafts.csswg.org/css-conditional-3/), wurde eingeführt. Sie ist standardmäßig deaktiviert. Entwickler können sie ausprobieren, indem sie `layout.css.supports-rule.enabled` auf true setzen ([Bug 649740](https://bugzil.la/649740)).
- Unterstützung für die Pseudo-Klasse {{cssxref(":dir", ":dir()")}} aus CSS Selectors Level 4, die die Auswahl von Elementen basierend auf ihrer Richtung ermöglicht, wurde eingeführt. ([Bug 562169](https://bugzil.la/562169))
- Unterstützung für den neu spezifizierten `isolate-override` Wert der CSS-Eigenschaft {{cssxref("unicode-bidi")}} wurde eingeführt ([Firefox Bug 774335](https://bugzil.la/774335))
- Unsere Anwendung von {{cssxref("box-sizing")}} berücksichtigt nun {{cssxref("min-height")}} und {{cssxref("max-height")}}. Ein Schritt näher an der Entfernung des Präfixes ([Firefox Bug 308801](https://bugzil.la/308801))

### DOM/APIs

- Unterstützung für das [`CSSSupportsRule`](/de/docs/Web/API/CSSSupportsRule) Interface, definiert in der [CSS3 Conditional Rules Spezifikation](https://drafts.csswg.org/css-conditional-3/), wurde eingeführt ([Firefox Bug 649740](https://bugzil.la/649740))
- Unterstützung für das [`WheelEvent`](/de/docs/Web/API/WheelEvent) Objekt und das `wheel` Ereignis wurde eingeführt ([Firefox Bug 719320](https://bugzil.la/719320)).
- Unterstützung für das DOM Meta-Taste auf Linux wurde wieder hinzugefügt ([Firefox Bug 751749](https://bugzil.la/751749)).
- Auf dem [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement) wurde eine neue Methode `mozGetMetadata` für die Rückgabe eines JavaScript-Objekts eingeführt, dessen Eigenschaften Metadaten aus der wiedergebenden Medienressource als {key: value}-Paare darstellen ([Firefox Bug 763010](https://bugzil.la/763010)).
- Unterstützung für [`Range.intersectsNode`](/de/docs/Web/API/Range/intersectsNode) wurde erneut hinzugefügt; es wurde in Gecko 1.9 entfernt ([Firefox Bug 579638](https://bugzil.la/579638)).
- [`Range.compareBoundaryPoints()`](/de/docs/Web/API/Range/compareBoundaryPoints) wirft nun eine [`DOMException`](/de/docs/Web/API/DOMException) mit dem `NOT_SUPPORTED_ERR` Wert, wenn die Vergleichsmethode ungültig ist ([Firefox Bug 714279](https://bugzil.la/714279)).
- [`Event.initEvent()`](/de/docs/Web/API/Event/initEvent) wurde an die Spezifikation angepasst: Es wirft keinen Fehler mehr, wenn es nach der Auslösung des Ereignisses aufgerufen wird, sondern ist nur eine No-Op ([Firefox Bug 768310](https://bugzil.la/768310)).
- Die nicht standardisierte [`XMLHttpRequest.onuploadrequest`](/de/docs/Web/API/XMLHttpRequest) Eigenschaft wurde entfernt ([Firefox Bug 761278](https://bugzil.la/761278)).
- Die Methode [`XMLHttpRequest.getAllResponseHeaders()`](/de/docs/Web/API/XMLHttpRequest/getAllResponseHeaders) trennt die Header jetzt mit einem CRLF (statt einem LF), wie in der Spezifikation gefordert ([Firefox Bug 730925](https://bugzil.la/730925)).

### JavaScript

- Das [`String`](/de/docs/Web/JavaScript/Reference/Global_Objects/String) Objekt bietet jetzt die Harmony-Methoden [`startsWith`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/startsWith), [`endsWith`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/endsWith) und [`contains`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/includes) ([Firefox Bug 772733](https://bugzil.la/772733)).
- Die String-Methoden [link](/de/docs/Web/JavaScript/Reference/Global_Objects/String/link) und [anchor](/de/docs/Web/JavaScript/Reference/Global_Objects/String/anchor) escapen nun das `'"'` (Anführungszeichen) ([Firefox Bug 352437](https://bugzil.la/352437)).
- Experimentelle Unterstützung für das `ParallelArray` Objekt wurde implementiert ([Firefox Bug 778559](https://bugzil.la/778559)).
- Unterstützung für die Iteration von [`Map`](/de/docs/Web/JavaScript/Reference/Global_Objects/Map)/[`Set`](/de/docs/Web/JavaScript/Reference/Global_Objects/Set) ([Firefox Bug 725909](https://bugzil.la/725909)).
- Deaktiviertes EcmaScript for XML (E4X), eine veraltete JavaScript-Erweiterung, standardmäßig für Webinhalte ([Firefox Bug 778851](https://bugzil.la/778851)).
- `__exposedProps__` muss nun für Chrome-JavaScript-Objekte, die dem Inhalt ausgesetzt sind, gesetzt werden. Versuche, von Inhalt auf Chrome-Objekte ohne gesetztes `__exposedProps__` zuzugreifen, werden stillschweigend fehlschlagen ([Firefox Bug 553102](https://bugzil.la/553102)).
- [`for...of`](/de/docs/Web/JavaScript/Reference/Statements/for...of) Schleifen funktionieren jetzt mit `.iterator()` und `.next()` ([Firefox Bug 725907](https://bugzil.la/725907)).

### WebGL

- Die [`EXT_texture_filter_anisotropic`](/de/docs/Web/API/EXT_texture_filter_anisotropic) WebGL-Erweiterung wurde ohne Präfix bereitgestellt. Die Verwendung von `"MOZ_EXT_texture_filter_anisotropic"` wird ab jetzt eine Warnung anzeigen. Der präfixierte Name wird in einer zukünftigen Version entfernt ([Firefox Bug 776001](https://bugzil.la/776001)).

### SVG

_Keine Änderungen._

### MathML

- Die Verarbeitung des `align` Attributs bei {{MathMLElement("mtable")}} Elementen wurde aktualisiert, um optionale Leerzeichen genauer zu behandeln.

### XUL

- XUL `key` Element unterstützt den "os" Modifikator, was die Win-Taste (Super- oder Hyper-Taste) ist ([Firefox Bug 778732](https://bugzil.la/778732)).

### Netzwerk

- Die nicht standardisierte Funktion `XMLHttpRequest.onuploadprogress`, die in Firefox 14 veraltet war, wurde entfernt.

_Keine Änderungen._

### Entwickler-Tools

- Änderung der JSTerm $-Hilfsfunktion von getElementById zu querySelector() ([Firefox Bug 751749](https://bugzil.la/751749)).

### User-Agent

Der Gecko-Teil des User-Agent-Strings wurde geändert. Das Build-Datum (das seit 2010 nicht aktualisiert wurde) wurde entfernt und stattdessen die Gecko-Versionsnummer eingefügt. Also `Gecko/20100101` -> `Gecko/17.0`. Dies könnte Auswirkungen haben, wenn Sie User-Agent-Analysen durchführen.

## Änderungen für Add-on- und Mozilla-Entwickler

### Schnittstellenänderungen

- `nsIInputStream`
  - : Die `available()` Methode gibt nun eine 64-Bit-Länge anstelle einer 32-Bit-Länge zurück ([Firefox Bug 215450](https://bugzil.la/215450)).
- `nsIDOMWindowUtils`
  - : Die `sendMouseScrollEvent()` Methode wurde durch `sendWheelEvent()` ersetzt ([Firefox Bug 719320](https://bugzil.la/719320)).
- `nsIFilePicker`
  - : Die `open()` Methode, um den Dateidialog asynchron zu öffnen, wurde hinzugefügt und die `show()` Methode wurde veraltet ([Firefox Bug 731307](https://bugzil.la/731307)).
- `nsIScriptSecurityManager`
  - : Die Methoden `checkLoadURIStr()` und `checkLoadURI()` wurden entfernt ([Firefox Bug 327244](https://bugzil.la/327244)).
- `nsIRefreshURI`
  - : Die `setupRefreshURIFromHeader()` Methode hat einen `principal` Parameter hinzugefügt bekommen ([Firefox Bug 327244](https://bugzil.la/327244)).

#### Neue Schnittstellen

Keine.

#### Entfernte Schnittstellen

Keine entfernt.

## Siehe auch

- [Firefox 17 Versionshinweise](https://website-archive.mozilla.org/www.mozilla.org/firefox_releasenotes/en-us/firefox/17.0/releasenotes/)
- [Aurora 17 ist veröffentlicht, bringt bessere Sicherheit und Unterstützung für neue Standards](https://hacks.mozilla.org/2012/08/aurora-17-is-out/) (Mozilla Hacks)
- [Add-on-Kompatibilität für Firefox 17](https://blog.mozilla.org/addons/2012/11/08/compatibility-for-firefox-17/) (Add-ons Blog)

### Ältere Versionen

{{Firefox_for_developers}}
