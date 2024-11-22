---
title: Firefox 17 für Entwickler
slug: Mozilla/Firefox/Releases/17
l10n:
  sourceCommit: 5f76b99045f87349ed030bbd6a3c2e43badb3c22
---

{{FirefoxSidebar}}

Firefox 17 wurde am 20. November 2012 veröffentlicht. Dieser Artikel listet wichtige Änderungen auf, die nicht nur für Webentwickler, sondern auch für Firefox- und Gecko-Entwickler sowie für Add-on-Entwickler nützlich sind.

## Änderungen für Webentwickler

### HTML

- Unterstützung für das [`sandbox`](/de/docs/Web/HTML/Element/iframe#sandbox)-Attribut im {{HTMLElement("iframe")}}-Element wurde hinzugefügt. ([Firefox-Bug 341604](https://bugzil.la/341604))

### CSS

- Unterstützung für die {{cssxref("@supports")}}-At-Regel, definiert im [CSS Conditional Rules Module Level 3](https://drafts.csswg.org/css-conditional-3/), wurde hinzugefügt. Sie ist standardmäßig deaktiviert. Entwickler können sie testen, indem sie `layout.css.supports-rule.enabled` auf wahr setzen ([Bug 649740](https://bugzil.la/649740)).
- Unterstützung für die Pseudoklasse {{cssxref(":dir", ":dir()")}} aus den CSS Selectors Level 4, die die Auswahl von Elementen basierend auf deren Ausrichtung ermöglicht, wurde hinzugefügt. ([Bug 562169](https://bugzil.la/562169))
- Unterstützung für den neu spezifizierten `isolate-override`-Wert des CSS-{{cssxref("unicode-bidi")}}-Werts wurde hinzugefügt ([Firefox-Bug 774335](https://bugzil.la/774335))
- Unsere mit Präfix versehene Implementierung von {{cssxref("box-sizing")}} berücksichtigt nun {{cssxref("min-height")}} und {{cssxref("max-height")}}. Ein Schritt näher am Entfernen des Präfixes ([Firefox-Bug 308801](https://bugzil.la/308801))

### DOM/APIs

- Unterstützung für die [`CSSSupportsRule`](/de/docs/Web/API/CSSSupportsRule)-Schnittstelle, definiert in der [CSS3 Conditional Rules Spezifikation](https://drafts.csswg.org/css-conditional-3/), wurde hinzugefügt ([Firefox-Bug 649740](https://bugzil.la/649740))
- Unterstützung für das [`WheelEvent`](/de/docs/Web/API/WheelEvent)-Objekt und das `wheel`-Ereignis wurde hinzugefügt ([Firefox-Bug 719320](https://bugzil.la/719320)).
- Unterstützung für die DOM-Meta-Taste unter Linux wurde wiederhergestellt ([Firefox-Bug 751749](https://bugzil.la/751749)).
- Auf dem [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement) gibt es eine neue Methode, `mozGetMetadata`, die ein JavaScript-Objekt zurückgibt, dessen Eigenschaften Metadaten aus der wiedergegebenen Mediendatei als {key: value}-Paare darstellen ([Firefox-Bug 763010](https://bugzil.la/763010)).
- Unterstützung für [`Range.intersectsNode`](/de/docs/Web/API/Range/intersectsNode) wurde erneut hinzugefügt; sie wurde in Gecko 1.9 entfernt ([Firefox-Bug 579638](https://bugzil.la/579638)).
- [`Range.compareBoundaryPoints()`](/de/docs/Web/API/Range/compareBoundaryPoints) wirft jetzt eine [`DOMException`](/de/docs/Web/API/DOMException) mit dem Wert `NOT_SUPPORTED_ERR`, wenn die Vergleichsmethode ungültig ist ([Firefox-Bug 714279](https://bugzil.la/714279)).
- [`Event.initEvent()`](/de/docs/Web/API/Event/initEvent) wurde an die Spezifikation angepasst: Es wird nicht mehr geworfen, wenn es nach der Auslösung des Ereignisses aufgerufen wird; es ist nur ein No-Op ([Firefox-Bug 768310](https://bugzil.la/768310)).
- Die nicht-standardskonforme [`XMLHttpRequest.onuploadrequest`](/de/docs/Web/API/XMLHttpRequest)-Eigenschaft wurde entfernt ([Firefox-Bug 761278](https://bugzil.la/761278)).
- Die Methode [`XMLHttpRequest.getAllResponseHeaders()`](/de/docs/Web/API/XMLHttpRequest/getAllResponseHeaders) trennt sie jetzt mit einem CRLF (anstatt eines LF), wie es von der Spezifikation verlangt wird ([Firefox-Bug 730925](https://bugzil.la/730925)).

### JavaScript

- Das [`String`](/de/docs/Web/JavaScript/Reference/Global_Objects/String)-Objekt bietet jetzt die Harmony-Methoden [`startsWith`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/startsWith), [`endsWith`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/endsWith) und [`contains`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/includes) ([Firefox-Bug 772733](https://bugzil.la/772733)).
- Die String-Methoden [link](/de/docs/Web/JavaScript/Reference/Global_Objects/String/link) und [anchor](/de/docs/Web/JavaScript/Reference/Global_Objects/String/anchor) escapen jetzt das `'"'` (Anführungszeichen) ([Firefox-Bug 352437](https://bugzil.la/352437)).
- Experimentelle Unterstützung für das `ParallelArray`-Objekt wurde implementiert ([Firefox-Bug 778559](https://bugzil.la/778559)).
- Unterstützung zum Iterieren über [`Map`](/de/docs/Web/JavaScript/Reference/Global_Objects/Map)/[`Set`](/de/docs/Web/JavaScript/Reference/Global_Objects/Set) ([Firefox-Bug 725909](https://bugzil.la/725909)).
- ECMAScript for XML (E4X), eine veraltete JavaScript-Erweiterung, wurde standardmäßig für Webinhalte deaktiviert ([Firefox-Bug 778851](https://bugzil.la/778851)).
- `__exposedProps__` muss nun für Chrome-JavaScript-Objekte gesetzt werden, die für Inhalte sichtbar sind. Versuche, auf Chrome-Objekte aus Inhalten zuzugreifen, ohne `__exposedProps__` gesetzt zu haben, schlagen von nun an stillschweigend fehl ([Firefox-Bug 553102](https://bugzil.la/553102)).
- [`for...of`](/de/docs/Web/JavaScript/Reference/Statements/for...of)-Schleifen funktionieren jetzt in Bezug auf `.iterator()` und `.next()` ([Firefox-Bug 725907](https://bugzil.la/725907)).

### WebGL

- Die [`EXT_texture_filter_anisotropic`](/de/docs/Web/API/EXT_texture_filter_anisotropic)-WebGL-Erweiterung wurde ohne Präfix versehen. Die Nutzung von `"MOZ_EXT_texture_filter_anisotropic"` wird von nun an eine Warnung auslösen. Der Name mit Präfix wird in einer zukünftigen Version entfernt werden ([Firefox-Bug 776001](https://bugzil.la/776001)).

### SVG

_Keine Änderung._

### MathML

- Das Parsing des `align`-Attributs auf {{MathMLElement("mtable")}}-Elementen wurde aktualisiert, um optionale Leerzeichen korrekter zu behandeln.

### XUL

- Das XUL-`key`-Element unterstützt den "os"-Modifier, welcher die Win-Taste (Super- oder Hyper-Taste) ist ([Firefox-Bug 778732](https://bugzil.la/778732)).

### Netzwerk

- Das nicht-standardmäßige Feature `XMLHttpRequest.onuploadprogress`, das in Firefox 14 als veraltet markiert wurde, wurde entfernt.

_Keine Änderung._

### Entwicklerwerkzeuge

- Ändern Sie die JSTerm $-Hilfsfunktion von getElementById zu querySelector() ([Firefox-Bug 751749](https://bugzil.la/751749)).

### Benutzeragent

Der Gecko-Teil des Benutzeragenten-Strings wurde geändert. Das Build-Datum (das seit 2010 nicht mehr aktualisiert wurde) wurde entfernt und stattdessen wurde die Gecko-Versionsnummer hinzugefügt. So `Gecko/20100101` -> `Gecko/17.0`. Dies kann Auswirkungen haben, wenn Sie Benutzeragenten-Sniffing betreiben.

## Änderungen für Add-on- und Mozilla-Entwickler

### Schnittstellenänderungen

- `nsIInputStream`
  - : Die `available()`-Methode gibt nun eine 64-Bit-Länge anstelle einer 32-Bit-Länge zurück ([Firefox-Bug 215450](https://bugzil.la/215450)).
- `nsIDOMWindowUtils`
  - : Die `sendMouseScrollEvent()`-Methode wurde durch `sendWheelEvent()` ersetzt ([Firefox-Bug 719320](https://bugzil.la/719320)).
- `nsIFilePicker`
  - : Die `open()`-Methode, um den Datei-Dialog asynchron zu öffnen, wurde hinzugefügt und die `show()`-Methode wurde als veraltet markiert ([Firefox-Bug 731307](https://bugzil.la/731307)).
- `nsIScriptSecurityManager`
  - : Die Methoden `checkLoadURIStr()` und `checkLoadURI()` wurden entfernt ([Firefox-Bug 327244](https://bugzil.la/327244)).
- `nsIRefreshURI`
  - : Die Methode `setupRefreshURIFromHeader()` hat einen `principal`-Parameter hinzugefügt bekommen ([Firefox-Bug 327244](https://bugzil.la/327244)).

#### Neue Schnittstellen

Keine.

#### Entfernte Schnittstellen

Keine entfernt.

## Siehe auch

- [Firefox 17 Versionshinweise](https://website-archive.mozilla.org/www.mozilla.org/firefox_releasenotes/en-us/firefox/17.0/releasenotes/)
- [Aurora 17 ist draußen und bietet verbesserte Sicherheit und Unterstützung für neue Standards](https://hacks.mozilla.org/2012/08/aurora-17-is-out/) (Mozilla Hacks)
- [Addon-Kompatibilität für Firefox 17](https://blog.mozilla.org/addons/2012/11/08/compatibility-for-firefox-17/) (Add-ons Blog)

### Ältere Versionen

{{Firefox_for_developers}}
