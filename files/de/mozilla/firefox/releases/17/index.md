---
title: Firefox 17 für Entwickler
slug: Mozilla/Firefox/Releases/17
l10n:
  sourceCommit: bc7e82aa6db60568d7146ee285918550bbe4b8ce
---

{{FirefoxSidebar}}

Firefox 17 wurde am 20. November 2012 veröffentlicht. Dieser Artikel listet wichtige Änderungen auf, die sowohl für Webentwickler als auch für Firefox- und Gecko-Entwickler sowie für Add-on-Entwickler nützlich sind.

## Änderungen für Webentwickler

### HTML

- Unterstützung für das [`sandbox`](/de/docs/Web/HTML/Element/iframe#sandbox)-Attribut beim {{HTMLElement("iframe")}}-Element wurde hinzugefügt. ([Firefox Bug 341604](https://bugzil.la/341604))

### CSS

- Unterstützung für die {{cssxref("@supports")}}-At-Regel, die im [CSS Conditional Rules Module Level 3](https://drafts.csswg.org/css-conditional-3/) definiert ist, wurde implementiert. Es ist standardmäßig deaktiviert. Entwickler können es testen, indem sie `layout.css.supports-rule.enabled` auf true setzen ([Bug 649740](https://bugzil.la/649740)).
- Unterstützung für die CSS Selectors Level 4 Pseudoklasse {{cssxref(":dir", ":dir()")}}, die die Auswahl von Elementen basierend auf ihrer Ausrichtung ermöglicht, wurde implementiert. ([Bug 562169](https://bugzil.la/562169))
- Unterstützung für den neu spezifizierten `isolate-override`-Wert des CSS {{cssxref("unicode-bidi")}}-Wertes wurde hinzugefügt ([Firefox Bug 774335](https://bugzil.la/774335)).
- Unsere vorgefixte Implementierung von {{cssxref("box-sizing")}} berücksichtigt jetzt {{cssxref("min-height")}} und {{cssxref("max-height")}}. Ein Schritt näher zur Entfernung des Prefixes ([Firefox Bug 308801](https://bugzil.la/308801)).

### DOM/APIs

- Unterstützung für die {{domxref("CSSSupportsRule")}}-Schnittstelle, die in der [CSS3 Conditional Rules-Spezifikation](https://drafts.csswg.org/css-conditional-3/) definiert ist, wurde hinzugefügt ([Firefox Bug 649740](https://bugzil.la/649740)).
- Unterstützung für das {{domxref("WheelEvent")}}-Objekt und das `wheel`-Event wurde hinzugefügt ([Firefox Bug 719320](https://bugzil.la/719320)).
- Unterstützung der Meta-Taste im DOM auf Linux wurde wieder hinzugefügt ([Firefox Bug 751749](https://bugzil.la/751749)).
- In {{domxref("HTMLMediaElement")}} wurde eine neue Methode `mozGetMetadata` hinzugefügt, die ein JavaScript-Objekt zurückgibt, dessen Eigenschaften Metadaten der abgespielten Mediendatei als {key: value}-Paare darstellen ([Firefox Bug 763010](https://bugzil.la/763010)).
- Unterstützung für {{domxref("Range.intersectsNode")}} wurde wieder hinzugefügt; es wurde in Gecko 1.9 entfernt ([Firefox Bug 579638](https://bugzil.la/579638)).
- {{domxref("Range.compareBoundaryPoints()")}} löst jetzt eine {{domxref("DOMException")}} mit dem Wert `NOT_SUPPORTED_ERR` aus, wenn die Vergleichsmethode ungültig ist ([Firefox Bug 714279](https://bugzil.la/714279)).
- {{domxref("Event.initEvent()")}} wurde an die Spezifikation angepasst: Es löst keinen Fehler mehr aus, wenn es nach der Event-Auslieferung aufgerufen wird; es bleibt nur eine leere Operation ([Firefox Bug 768310](https://bugzil.la/768310)).
- Die nicht standardisierte {{domxref("XMLHttpRequest", "XMLHttpRequest.onuploadrequest")}}-Eigenschaft wurde entfernt ([Firefox Bug 761278](https://bugzil.la/761278)).
- Die Methode {{domxref("XMLHttpRequest.getAllResponseHeaders()")}} trennt sie nun mit einem CRLF (statt eines LF), wie von der Spezifikation gefordert ([Firefox Bug 730925](https://bugzil.la/730925)).

### JavaScript

- Das [`String`](/de/docs/Web/JavaScript/Reference/Global_Objects/String)-Objekt bietet jetzt die Harmony-Methoden [`startsWith`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/startsWith), [`endsWith`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/endsWith) und [`contains`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/includes) ([Firefox Bug 772733](https://bugzil.la/772733)).
- Die String-Methoden [link](/de/docs/Web/JavaScript/Reference/Global_Objects/String/link) und [anchor](/de/docs/Web/JavaScript/Reference/Global_Objects/String/anchor) escapen jetzt das `'"'` (Anführungszeichen) ([Firefox Bug 352437](https://bugzil.la/352437)).
- Experimentelle Unterstützung für das `ParallelArray`-Objekt wurde implementiert ([Firefox Bug 778559](https://bugzil.la/778559)).
- Unterstützung für die Iteration über [`Map`](/de/docs/Web/JavaScript/Reference/Global_Objects/Map)/[`Set`](/de/docs/Web/JavaScript/Reference/Global_Objects/Set) hinzugefügt ([Firefox Bug 725909](https://bugzil.la/725909)).
- EcmaScript for XML (E4X), eine veraltete JavaScript-Erweiterung, wurde standardmäßig für Webinhalte deaktiviert ([Firefox Bug 778851](https://bugzil.la/778851)).
- `__exposedProps__` muss jetzt für Chrome-JavaScript-Objekte, die dem Inhalt zugänglich gemacht werden, gesetzt sein. Versuche, auf Chrome-Objekte ohne gesetztes `__exposedProps__` zuzugreifen, werden stillschweigend fehlschlagen ([Firefox Bug 553102](https://bugzil.la/553102)).
- [`for...of`](/de/docs/Web/JavaScript/Reference/Statements/for...of)-Schleifen funktionieren nun mit `.iterator()` und `.next()` ([Firefox Bug 725907](https://bugzil.la/725907)).

### WebGL

- Die {{domxref("EXT_texture_filter_anisotropic")}} WebGL-Erweiterung wurde unpräfixiert. Die Verwendung von `"MOZ_EXT_texture_filter_anisotropic"` wird jetzt eine Warnung auslösen. Der vorgefixte Name wird in einer zukünftigen Version entfernt ([Firefox Bug 776001](https://bugzil.la/776001)).

### SVG

_Keine Änderung._

### MathML

- Die Analyse des `align`-Attributs bei {{MathMLElement("mtable")}}-Elementen wurde aktualisiert, um optionale Leerzeichen korrekter zu behandeln.

### XUL

- Das XUL `key`-Element unterstützt den "os"-Modifier, der die Win-Taste (Super- oder Hyper-Taste) ist ([Firefox Bug 778732](https://bugzil.la/778732)).

### Netzwerk

- Die nicht standardisierte Funktion `XMLHttpRequest.onuploadprogress`, die in Firefox 14 abgelehnt wurde, wurde entfernt.

_Keine Änderung._

### Entwicklertools

- Die JSTerm $ Helferfunktion wurde von getElementById zu querySelector() geändert ([Firefox Bug 751749](https://bugzil.la/751749)).

### User Agent

Der Gecko-Teil des User-Agent-Strings wurde geändert. Das Build-Datum (das seit 2010 nicht mehr aktualisiert wurde) wurde entfernt und stattdessen die Gecko-Versionsnummer eingesetzt. Also `Gecko/20100101` -> `Gecko/17.0`. Dies kann sich auf Sie auswirken, wenn Sie User-Agent-Sniffing betreiben.

## Änderungen für Add-on- und Mozilla-Entwickler

### Schnittstellenänderungen

- `nsIInputStream`
  - : Die Methode `available()` liefert jetzt eine 64-Bit-Länge statt einer 32-Bit ([Firefox Bug 215450](https://bugzil.la/215450)).
- `nsIDOMWindowUtils`
  - : Die Methode `sendMouseScrollEvent()` wurde durch `sendWheelEvent()` ersetzt ([Firefox Bug 719320](https://bugzil.la/719320)).
- `nsIFilePicker`
  - : Die Methode `open()`, um den Dateidialog asynchron zu öffnen, wurde hinzugefügt und die Methode `show()` wurde als veraltet markiert ([Firefox Bug 731307](https://bugzil.la/731307)).
- `nsIScriptSecurityManager`
  - : Die Methoden `checkLoadURIStr()` und `checkLoadURI()` wurden entfernt ([Firefox Bug 327244](https://bugzil.la/327244)).
- `nsIRefreshURI`
  - : Der Methode `setupRefreshURIFromHeader()` wurde ein `principal`-Parameter hinzugefügt ([Firefox Bug 327244](https://bugzil.la/327244)).

#### Neue Schnittstellen

Keine.

#### Entfernte Schnittstellen

Keine entfernt.

## Siehe auch

- [Firefox 17 Release Notes](https://website-archive.mozilla.org/www.mozilla.org/firefox_releasenotes/en-us/firefox/17.0/releasenotes/)
- [Aurora 17 is out, bringing better security and support for new standards](https://hacks.mozilla.org/2012/08/aurora-17-is-out/) (Mozilla Hacks)
- [Add-on Compatibility for Firefox 17](https://blog.mozilla.org/addons/2012/11/08/compatibility-for-firefox-17/) (Add-ons Blog)

### Ältere Versionen

{{Firefox_for_developers}}
