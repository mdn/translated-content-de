---
title: Firefox 17 für Entwickler
slug: Mozilla/Firefox/Releases/17
l10n:
  sourceCommit: bc7e82aa6db60568d7146ee285918550bbe4b8ce
---

{{FirefoxSidebar}}

Firefox 17 wurde am 20. November 2012 veröffentlicht. Dieser Artikel listet wichtige Änderungen auf, die nicht nur für Webentwickler, sondern auch für Firefox- und Gecko-Entwickler sowie Add-on-Entwickler nützlich sind.

## Änderungen für Webentwickler

### HTML

- Unterstützung für das [`sandbox`](/de/docs/Web/HTML/Element/iframe#sandbox)-Attribut im {{HTMLElement("iframe")}}-Element wurde hinzugefügt. ([Firefox bug 341604](https://bugzil.la/341604))

### CSS

- Unterstützung für die {{cssxref("@supports")}} Regel, definiert im [CSS Conditional Rules Module Level 3](https://drafts.csswg.org/css-conditional-3/), wurde implementiert. Sie ist standardmäßig deaktiviert. Entwickler können sie ausprobieren, indem sie `layout.css.supports-rule.enabled` auf true setzen ([bug 649740](https://bugzil.la/649740)).
- Unterstützung für die CSS Selectors Level 4 Pseudoklasse {{cssxref(":dir", ":dir()")}}, die die Auswahl von Elementen basierend auf ihrer Ausrichtung ermöglicht, wurde hinzugefügt. ([bug 562169](https://bugzil.la/562169))
- Unterstützung für den neu spezifizierten Wert `isolate-override` des CSS {{cssxref("unicode-bidi")}}-Werts wurde hinzugefügt. ([Firefox bug 774335](https://bugzil.la/774335))
- Unsere vorgefixte Implementierung von {{cssxref("box-sizing")}} berücksichtigt jetzt {{cssxref("min-height")}} und {{cssxref("max-height")}}. Ein weiterer Schritt zur Entfernung des Prefixes ([Firefox bug 308801](https://bugzil.la/308801))

### DOM/APIs

- Unterstützung für die [`CSSSupportsRule`](/de/docs/Web/API/CSSSupportsRule)-Schnittstelle, definiert in der [CSS3 Conditional Rules specification](https://drafts.csswg.org/css-conditional-3/), wurde hinzugefügt. ([Firefox bug 649740](https://bugzil.la/649740))
- Unterstützung für das [`WheelEvent`](/de/docs/Web/API/WheelEvent)-Objekt und das `wheel`-Event wurden hinzugefügt. ([Firefox bug 719320](https://bugzil.la/719320))
- Unterstützung für das DOM Meta-Schlüssel auf Linux erneut hinzugefügt ([Firefox bug 751749](https://bugzil.la/751749)).
- Bei [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement) wurde eine neue Methode, `mozGetMetadata`, hinzugefügt, die ein JavaScript-Objekt zurückgibt, dessen Eigenschaften als {Schlüssel: Wert}-Paare Metadaten der wiedergegebenen Medienressource darstellen. ([Firefox bug 763010](https://bugzil.la/763010))
- Unterstützung für [`Range.intersectsNode`](/de/docs/Web/API/Range/intersectsNode) wurde erneut hinzugefügt; es wurde in Gecko 1.9 entfernt. ([Firefox bug 579638](https://bugzil.la/579638))
- [`Range.compareBoundaryPoints()`](/de/docs/Web/API/Range/compareBoundaryPoints) wirft jetzt eine [`DOMException`](/de/docs/Web/API/DOMException) mit dem Wert `NOT_SUPPORTED_ERR`, wenn die Vergleichsmethode ungültig ist ([Firefox bug 714279](https://bugzil.la/714279)).
- [`Event.initEvent()`](/de/docs/Web/API/Event/initEvent) wurde an die Spezifikation angepasst: Es wird jetzt kein Fehler mehr geworfen, wenn es nach der Auslösung des Events aufgerufen wird; es ist lediglich eine No-Op. ([Firefox bug 768310](https://bugzil.la/768310)).
- Die nicht standardmäßige Eigenschaft [`XMLHttpRequest.onuploadrequest`](/de/docs/Web/API/XMLHttpRequest) wurde entfernt. ([Firefox bug 761278](https://bugzil.la/761278)).
- Die Methode [`XMLHttpRequest.getAllResponseHeaders()`](/de/docs/Web/API/XMLHttpRequest/getAllResponseHeaders) trennt nun die Header mit einem CRLF (statt einem LF), wie in der Spezifikation gefordert ([Firefox bug 730925](https://bugzil.la/730925)).

### JavaScript

- Das [`String`](/de/docs/Web/JavaScript/Reference/Global_Objects/String)-Objekt bietet nun die Harmony-Methoden [`startsWith`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/startsWith), [`endsWith`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/endsWith) und [`contains`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/includes) ([Firefox bug 772733](https://bugzil.la/772733)).
- Die String-Methoden [link](/de/docs/Web/JavaScript/Reference/Global_Objects/String/link) und [anchor](/de/docs/Web/JavaScript/Reference/Global_Objects/String/anchor) maskieren nun das `'"'` (Anführungszeichen) ([Firefox bug 352437](https://bugzil.la/352437)).
- Experimentelle Unterstützung für das `ParallelArray`-Objekt wurde implementiert ([Firefox bug 778559](https://bugzil.la/778559)).
- Unterstützung für die Iteration über [`Map`](/de/docs/Web/JavaScript/Reference/Global_Objects/Map)/[`Set`](/de/docs/Web/JavaScript/Reference/Global_Objects/Set) ([Firefox bug 725909](https://bugzil.la/725909)).
- EcmaScript for XML (E4X), eine veraltete JavaScript-Erweiterung, wurde standardmäßig für Webinhalte deaktiviert ([Firefox bug 778851](https://bugzil.la/778851)).
- `__exposedProps__` muss nun für Chrome-JavaScript-Objekte, die auf Inhalte zugreifen, gesetzt sein. Der Zugriff auf Chrome-Objekte von Inhalten ohne gesetztes `__exposedProps__` wird leise fehlschlagen ([Firefox bug 553102](https://bugzil.la/553102)).
- [`for...of`](/de/docs/Web/JavaScript/Reference/Statements/for...of)-Schleifen arbeiten nun mit `.iterator()` und `.next()` ([Firefox bug 725907](https://bugzil.la/725907)).

### WebGL

- Die WebGL-Erweiterung [`EXT_texture_filter_anisotropic`](/de/docs/Web/API/EXT_texture_filter_anisotropic) wurde ohne Prefix vorangestellt. Die Verwendung von `"MOZ_EXT_texture_filter_anisotropic"` wird nun eine Warnung anzeigen. Der vorgefixte Name wird in einer zukünftigen Version entfernt werden. ([Firefox bug 776001](https://bugzil.la/776001)).

### SVG

_Keine Änderung._

### MathML

- Die Analyse des `align`-Attributs auf {{MathMLElement("mtable")}}-Elementen wurde aktualisiert, um optionale Leerzeichen korrekter zu behandeln.

### XUL

- Das XUL-`key`-Element unterstützt jetzt den "os"-Modifier, der dem Win-Schlüssel (Super- oder Hyper-Taste) entspricht ([Firefox bug 778732](https://bugzil.la/778732)).

### Netzwerk

- Die nicht standardisierte Funktion `XMLHttpRequest.onuploadprogress`, die in Firefox 14 veraltet wurde, wurde entfernt.

_Keine Änderung._

### Entwicklerwerkzeuge

- Ändern der JSTerm-`$`-Hilfsfunktion von `getElementById` zu `querySelector()` ([Firefox bug 751749](https://bugzil.la/751749)).

### User Agent

Der Gecko-Teil des User-Agent-Strings wurde geändert. Das Build-Datum (das seit 2010 nicht aktualisiert wurde) wurde entfernt und die Gecko-Versionsnummer wurde an seiner Stelle eingefügt. Also `Gecko/20100101` -> `Gecko/17.0`. Dies könnte sich auf Sie auswirken, wenn Sie User-Agent-Sniffing betreiben.

## Änderungen für Add-on- und Mozilla-Entwickler

### Schnittstellenänderungen

- `nsIInputStream`
  - : Die Methode `available()` gibt jetzt eine 64-Bit-Länge anstelle einer 32-Bit-Länge zurück ([Firefox bug 215450](https://bugzil.la/215450)).
- `nsIDOMWindowUtils`
  - : Die Methode `sendMouseScrollEvent()` wurde durch `sendWheelEvent()` ersetzt ([Firefox bug 719320](https://bugzil.la/719320)).
- `nsIFilePicker`
  - : Die Methode `open()`, um den Dateidialog asynchron zu öffnen, wurde hinzugefügt und die Methode `show()` wurde veraltet ([Firefox bug 731307](https://bugzil.la/731307)).
- `nsIScriptSecurityManager`
  - : Die Methoden `checkLoadURIStr()` und `checkLoadURI()` wurden entfernt ([Firefox bug 327244](https://bugzil.la/327244)).
- `nsIRefreshURI`
  - : Die Methode `setupRefreshURIFromHeader()` hat einen `principal`-Parameter hinzugefügt ([Firefox bug 327244](https://bugzil.la/327244)).

#### Neue Schnittstellen

Keine.

#### Entfernte Schnittstellen

Keine entfernt.

## Siehe auch

- [Firefox 17 Versionshinweise](https://website-archive.mozilla.org/www.mozilla.org/firefox_releasenotes/en-us/firefox/17.0/releasenotes/)
- [Aurora 17 ist verfügbar, bringt mehr Sicherheit und Unterstützung für neue Standards](https://hacks.mozilla.org/2012/08/aurora-17-is-out/) (Mozilla Hacks)
- [Add-on-Kompatibilität für Firefox 17](https://blog.mozilla.org/addons/2012/11/08/compatibility-for-firefox-17/) (Add-ons Blog)

### Ältere Versionen

{{Firefox_for_developers}}
