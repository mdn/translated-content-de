---
title: Firefox 17 für Entwickler
slug: Mozilla/Firefox/Releases/17
l10n:
  sourceCommit: e488eba036b2fee56444fd579c3759ef45ff2ca8
---

{{FirefoxSidebar}}

Firefox 17 wurde am 20. November 2012 veröffentlicht. Dieser Artikel listet die wichtigsten Änderungen auf, die nicht nur für Webentwickler, sondern auch für Firefox- und Gecko-Entwickler sowie Erweiterungsentwickler nützlich sind.

## Änderungen für Webentwickler

### HTML

- Unterstützung für das [`sandbox`](/de/docs/Web/HTML/Reference/Elements/iframe#sandbox)-Attribut auf dem {{HTMLElement("iframe")}}-Element wurde hinzugefügt. ([Firefox Bug 341604](https://bugzil.la/341604))

### CSS

- Unterstützung für die {{cssxref("@supports")}}-At-Regel, definiert im [CSS Conditional Rules Module Level 3](https://drafts.csswg.org/css-conditional-3/), wurde hinzugefügt. Es ist standardmäßig deaktiviert. Entwickler können es ausprobieren, indem sie `layout.css.supports-rule.enabled` auf true setzen ([Bug 649740](https://bugzil.la/649740)).
- Unterstützung für die CSS Selectors Level 4 Pseudoklasse {{cssxref(":dir", ":dir()")}}, die die Auswahl von Elementen basierend auf ihrer Richtung ermöglicht, wurde hinzugefügt. ([Bug 562169](https://bugzil.la/562169))
- Unterstützung für den neu festgelegten `isolate-override`-Wert der CSS {{cssxref("unicode-bidi")}}-Eigenschaft wurde hinzugefügt ([Firefox Bug 774335](https://bugzil.la/774335)).
- Unsere mit Präfix versehene Implementierung von {{cssxref("box-sizing")}} berücksichtigt jetzt {{cssxref("min-height")}} und {{cssxref("max-height")}}. Ein Schritt näher an der Entfernung des Präfixes ([Firefox Bug 308801](https://bugzil.la/308801)).

### DOM/APIs

- Unterstützung für die [`CSSSupportsRule`](/de/docs/Web/API/CSSSupportsRule) Schnittstelle, definiert in der [CSS3 Conditional Rules-Spezifikation](https://drafts.csswg.org/css-conditional-3/), wurde hinzugefügt ([Firefox Bug 649740](https://bugzil.la/649740)).
- Unterstützung für das [`WheelEvent`](/de/docs/Web/API/WheelEvent)-Objekt und das `wheel`-Ereignis wurden hinzugefügt ([Firefox Bug 719320](https://bugzil.la/719320)).
- Unterstützung für die DOM Meta-Taste auf Linux wurde wieder hinzugefügt ([Firefox Bug 751749](https://bugzil.la/751749)).
- Auf [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement) wurde eine neue Methode, `mozGetMetadata`, hinzugefügt, die ein JavaScript-Objekt zurückgibt, dessen Eigenschaften Metadaten der abspielenden Medienressource als {key: value}-Paare repräsentieren ([Firefox Bug 763010](https://bugzil.la/763010)).
- Unterstützung für [`Range.intersectsNode`](/de/docs/Web/API/Range/intersectsNode) wurde wieder hinzugefügt; es wurde in Gecko 1.9 entfernt ([Firefox Bug 579638](https://bugzil.la/579638)).
- [`Range.compareBoundaryPoints()`](/de/docs/Web/API/Range/compareBoundaryPoints) löst jetzt eine [`DOMException`](/de/docs/Web/API/DOMException) mit dem Wert `NOT_SUPPORTED_ERR` aus, wenn die Vergleichsmethode ungültig ist ([Firefox Bug 714279](https://bugzil.la/714279)).
- [`Event.initEvent()`](/de/docs/Web/API/Event/initEvent) wurde an die Spezifikation angepasst: Es löst keine Fehler mehr aus, wenn es nach der Auslösung des Ereignisses aufgerufen wird; es ist jetzt nur noch eine No-op ([Firefox Bug 768310](https://bugzil.la/768310)).
- Die nicht standardisierte Eigenschaft [`XMLHttpRequest.onuploadrequest`](/de/docs/Web/API/XMLHttpRequest) wurde entfernt ([Firefox Bug 761278](https://bugzil.la/761278)).
- Die Methode [`XMLHttpRequest.getAllResponseHeaders()`](/de/docs/Web/API/XMLHttpRequest/getAllResponseHeaders) trennt die Header jetzt mit einem CRLF (statt mit einem LF), wie von der Spezifikation gefordert ([Firefox Bug 730925](https://bugzil.la/730925)).

### JavaScript

- Das [`String`](/de/docs/Web/JavaScript/Reference/Global_Objects/String)-Objekt bietet jetzt die Harmony-Methoden [`startsWith`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/startsWith), [`endsWith`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/endsWith) und [`contains`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/includes) ([Firefox Bug 772733](https://bugzil.la/772733)).
- Die String-Methoden [`link()`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/link) und [`anchor()`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/anchor) maskieren jetzt das `'"'` (Anführungszeichen) ([Firefox Bug 352437](https://bugzil.la/352437)).
- Experimentelle Unterstützung für das `ParallelArray`-Objekt wurde implementiert ([Firefox Bug 778559](https://bugzil.la/778559)).
- Unterstützung zum Iterieren über [`Map`](/de/docs/Web/JavaScript/Reference/Global_Objects/Map)/[`Set`](/de/docs/Web/JavaScript/Reference/Global_Objects/Set) ([Firefox Bug 725909](https://bugzil.la/725909)).
- ECMAScript für XML (E4X), eine veraltete JavaScript-Erweiterung, wurde standardmäßig für Webinhalte deaktiviert ([Firefox Bug 778851](https://bugzil.la/778851)).
- `__exposedProps__` muss jetzt für Chrome-JavaScript-Objekte eingestellt werden, die dem Inhalt ausgesetzt sind. Versuche, auf Chrome-Objekte aus dem Inhalt zuzugreifen ohne `__exposedProps__` gesetzt zu haben, schlagen fehl und erzeugen keine Meldung ([Firefox Bug 553102](https://bugzil.la/553102)).
- [`for...of`](/de/docs/Web/JavaScript/Reference/Statements/for...of)-Schleifen funktionieren jetzt mit `.iterator()` und `.next()` ([Firefox Bug 725907](https://bugzil.la/725907)).

### WebGL

- Die [`EXT_texture_filter_anisotropic`](/de/docs/Web/API/EXT_texture_filter_anisotropic) WebGL-Erweiterung wurde von ihrem Präfix befreit. Die Verwendung von `"MOZ_EXT_texture_filter_anisotropic"` wird von nun an eine Warnung auslösen. Der mit Präfix versehene Name wird in einer zukünftigen Version entfernt werden ([Firefox Bug 776001](https://bugzil.la/776001)).

### SVG

_Keine Änderung._

### MathML

- Die Analyse des `align`-Attributs auf {{MathMLElement("mtable")}}-Elementen wurde aktualisiert, um optionale Leerzeichen korrekter zu behandeln.

### XUL

- Das XUL-Element `key` unterstützt den "os"-Modifier, der die Win-Taste (Super- oder Hyper-Taste) ist ([Firefox Bug 778732](https://bugzil.la/778732)).

### Netzwerk

- Das nicht standardisierte Merkmal `XMLHttpRequest.onuploadprogress`, das in Firefox 14 als veraltet erklärt wurde, wurde entfernt.

_Keine Änderung._

### Entwicklertools

- Ändern Sie die JSTerm's $-Hilfsfunktion von getElementById zu querySelector() ([Firefox Bug 751749](https://bugzil.la/751749)).

### User Agent

Der Gecko-Teil des User-Agent-Strings hat sich geändert. Das Build-Datum (das seit 2010 nicht aktualisiert wurde) wurde entfernt, und stattdessen wurde die Gecko-Versionsnummer eingefügt. Also `Gecko/20100101` -> `Gecko/17.0`. Dies könnte Auswirkungen haben, wenn Sie User-Agent-Sniffing betreiben.

## Änderungen für Erweiterungs- und Mozilla-Entwickler

### Schnittstellenänderungen

- `nsIInputStream`
  - : Die Methode `available()` gibt jetzt eine 64-Bit-Länge statt 32-Bit zurück ([Firefox Bug 215450](https://bugzil.la/215450)).
- `nsIDOMWindowUtils`
  - : Die Methode `sendMouseScrollEvent()` wurde durch `sendWheelEvent()` ersetzt ([Firefox Bug 719320](https://bugzil.la/719320)).
- `nsIFilePicker`
  - : Die Methode `open()`, um den Dateidialog asynchron zu öffnen, wurde hinzugefügt und die Methode `show()` wurde als veraltet erklärt ([Firefox Bug 731307](https://bugzil.la/731307)).
- `nsIScriptSecurityManager`
  - : Die Methoden `checkLoadURIStr()` und `checkLoadURI()` wurden entfernt ([Firefox Bug 327244](https://bugzil.la/327244)).
- `nsIRefreshURI`
  - : Die Methode `setupRefreshURIFromHeader()` hat einen `principal`-Parameter hinzugefügt bekommen ([Firefox Bug 327244](https://bugzil.la/327244)).

#### Neue Schnittstellen

Keine.

#### Entfernte Schnittstellen

Keine entfernt.

## Siehe auch

- [Firefox 17 Release Notes](https://website-archive.mozilla.org/www.mozilla.org/firefox_releasenotes/en-us/firefox/17.0/releasenotes/)
- [Aurora 17 ist erschienen, bringt bessere Sicherheit und Unterstützung für neue Standards](https://hacks.mozilla.org/2012/08/aurora-17-is-out/) (Mozilla Hacks)
- [Erweiterungskompatibilität für Firefox 17](https://blog.mozilla.org/addons/2012/11/08/compatibility-for-firefox-17/) (Add-ons Blog)

### Ältere Versionen

{{Firefox_for_developers}}
