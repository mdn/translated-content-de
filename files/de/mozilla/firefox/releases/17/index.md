---
title: Firefox 17 für Entwickler
short-title: Firefox 17
slug: Mozilla/Firefox/Releases/17
l10n:
  sourceCommit: 64df508685abcbc047f6c1a973505921fad1484e
---

Firefox 17 wurde am 20. November 2012 veröffentlicht. Dieser Artikel listet wichtige Änderungen auf, die nicht nur für Webentwickler nützlich sind, sondern auch für Firefox- und Gecko-Entwickler sowie Add-on-Entwickler.

## Änderungen für Webentwickler

### HTML

- Unterstützung für das [`sandbox`](/de/docs/Web/HTML/Reference/Elements/iframe#sandbox) Attribut im {{HTMLElement("iframe")}} Element wurde hinzugefügt. ([Firefox Bug 341604](https://bugzil.la/341604))

### CSS

- Unterstützung für die {{cssxref("@supports")}} Regel definiert im [CSS Conditional Rules Module Level 3](https://drafts.csswg.org/css-conditional-3/) wurde implementiert. Sie ist standardmäßig deaktiviert. Entwickler können sie ausprobieren, indem sie `layout.css.supports-rule.enabled` auf true setzen ([Bug 649740](https://bugzil.la/649740)).
- Unterstützung für die CSS Selectors Level 4 Pseudo-Klasse {{cssxref(":dir", ":dir()")}}, die die Auswahl von Elementen basierend auf ihrer Richtung ermöglicht, wurde implementiert. ([Bug 562169](https://bugzil.la/562169))
- Unterstützung für den neu spezifizierten Wert `isolate-override` des CSS-Werts {{cssxref("unicode-bidi")}} wurde hinzugefügt ([Firefox Bug 774335](https://bugzil.la/774335))
- Unsere vorfixierte Implementierung von {{cssxref("box-sizing")}} berücksichtigt jetzt {{cssxref("min-height")}} und {{cssxref("max-height")}}. Ein Schritt näher zur Entfernung des Präfixes ([Firefox Bug 308801](https://bugzil.la/308801))

### DOM/APIs

- Unterstützung für das [`CSSSupportsRule`](/de/docs/Web/API/CSSSupportsRule) Interface, definiert in der [CSS3 Conditional Rules Spezifikation](https://drafts.csswg.org/css-conditional-3/), wurde hinzugefügt ([Firefox Bug 649740](https://bugzil.la/649740))
- Unterstützung für das [`WheelEvent`](/de/docs/Web/API/WheelEvent) Objekt und das `wheel` Ereignis wurde hinzugefügt ([Firefox Bug 719320](https://bugzil.la/719320)).
- Unterstützung für die DOM Meta-Taste unter Linux wieder hinzugefügt ([Firefox Bug 751749](https://bugzil.la/751749)).
- Auf [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement) wurde eine neue Methode `mozGetMetadata` hinzugefügt, die ein JavaScript-Objekt zurückgibt, dessen Eigenschaften Metadaten der abspielenden Mediendatei als {key: value} Paare repräsentieren ([Firefox Bug 763010](https://bugzil.la/763010)).
- Unterstützung für [`Range.intersectsNode`](/de/docs/Web/API/Range/intersectsNode) wurde erneut hinzugefügt; es wurde in Gecko 1.9 entfernt ([Firefox Bug 579638](https://bugzil.la/579638).
- [`Range.compareBoundaryPoints()`](/de/docs/Web/API/Range/compareBoundaryPoints) wirft jetzt eine [`DOMException`](/de/docs/Web/API/DOMException) mit dem Wert `NOT_SUPPORTED_ERR`, wenn die Vergleichsmethode ungültig ist ([Firefox Bug 714279](https://bugzil.la/714279)).
- [`Event.initEvent()`](/de/docs/Web/API/Event/initEvent) wurde an die Spezifikation angepasst: Es wirft keine Ausnahme mehr, wenn es nach dem Dispatch des Ereignisses aufgerufen wird, es ist nur mehr eine No-Op ([Firefox Bug 768310](https://bugzil.la/768310)).
- Die nicht standardisierte Eigenschaft [`XMLHttpRequest.onuploadrequest`](/de/docs/Web/API/XMLHttpRequest) wurde entfernt ([Firefox Bug 761278](https://bugzil.la/761278)).
- Die Methode [`XMLHttpRequest.getAllResponseHeaders()`](/de/docs/Web/API/XMLHttpRequest/getAllResponseHeaders) trennt sie jetzt mit einem CRLF (anstelle eines LF), wie von der Spezifikation gefordert ([Firefox Bug 730925](https://bugzil.la/730925)).

### JavaScript

- Das [`String`](/de/docs/Web/JavaScript/Reference/Global_Objects/String) Objekt bietet jetzt die Harmony-Methoden [`startsWith`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/startsWith), [`endsWith`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/endsWith), und [`contains`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/includes) ([Firefox Bug 772733](https://bugzil.la/772733)).
- Die String-Methoden [`link()`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/link) und [`anchor()`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/anchor) escapen jetzt das `'"'` (Anführungszeichen) ([Firefox Bug 352437](https://bugzil.la/352437)).
- Experimentelle Unterstützung für das Strawman `ParallelArray` Objekt wurde implementiert ([Firefox Bug 778559](https://bugzil.la/778559)).
- Unterstützung zum Iterieren von [`Map`](/de/docs/Web/JavaScript/Reference/Global_Objects/Map)/[`Set`](/de/docs/Web/JavaScript/Reference/Global_Objects/Set) ([Firefox Bug 725909](https://bugzil.la/725909)).
- ECMAScript for XML (E4X), eine veraltete JavaScript-Erweiterung, wurde standardmäßig für Webinhalte deaktiviert ([Firefox Bug 778851](https://bugzil.la/778851)).
- `__exposedProps__` muss jetzt für Chrome-JavaScript-Objekte, die an Inhalte übergeben werden, gesetzt werden. Versuche, Chrome-Objekte ohne gesetzte `__exposedProps__` aus Inhalten zuzugreifen, werden stillschweigend scheitern ([Firefox Bug 553102](https://bugzil.la/553102)).
- [`for...of`](/de/docs/Web/JavaScript/Reference/Statements/for...of) Schleifen funktionieren jetzt in Bezug auf `.iterator()` und `.next()` ([Firefox Bug 725907](https://bugzil.la/725907)).

### WebGL

- Die [`EXT_texture_filter_anisotropic`](/de/docs/Web/API/EXT_texture_filter_anisotropic) WebGL-Erweiterung wurde ohne Präfix veröffentlicht. Die Verwendung von `"MOZ_EXT_texture_filter_anisotropic"` wird ab jetzt eine Warnung auslösen. Der vorfixierte Name wird in einer zukünftigen Version entfernt ([Firefox Bug 776001](https://bugzil.la/776001)).

### SVG

_Keine Änderung._

### MathML

- Das Parsen des `align` Attributs bei {{MathMLElement("mtable")}} Elementen wurde aktualisiert, um optionale Leerzeichen korrekter zu behandeln.

### XUL

- Das XUL `key` Element unterstützt den "os" Modifikator, welcher der Win Key (Super oder Hyper Key) ist ([Firefox Bug 778732](https://bugzil.la/778732)).

### Netzwerk

- Das nicht standardisierte Feature `XMLHttpRequest.onuploadprogress`, das in Firefox 14 veraltet war, wurde entfernt.

_Keine Änderung._

### Entwickler-Tools

- Ändert die $ Hilfsfunktion in JSTerm von getElementById zu querySelector() ([Firefox Bug 751749](https://bugzil.la/751749)).

### User Agent

Der Gecko-Teil des User-Agent-Strings hat sich geändert. Das Build-Datum (das seit 2010 nicht mehr aktualisiert wurde) wurde entfernt und die Gecko-Versionsnummer wurde stattdessen hinzugefügt. So wird aus `Gecko/20100101` -> `Gecko/17.0`. Dies könnte Auswirkungen haben, wenn Sie User-Agent-Erkennung verwenden.

## Änderungen für Add-on und Mozilla-Entwickler

### Schnittstellenänderungen

- `nsIInputStream`
  - : Die Methode `available()` gibt jetzt eine 64-Bit-Länge statt einer 32-Bit-Länge zurück ([Firefox Bug 215450](https://bugzil.la/215450)).
- `nsIDOMWindowUtils`
  - : Die Methode `sendMouseScrollEvent()` wurde durch `sendWheelEvent()` ersetzt ([Firefox Bug 719320](https://bugzil.la/719320)).
- `nsIFilePicker`
  - : Die Methode `open()`, um den Dateidialog asynchron zu öffnen, wurde hinzugefügt und die Methode `show()` wurde veraltet erklärt ([Firefox Bug 731307](https://bugzil.la/731307)).
- `nsIScriptSecurityManager`
  - : Die Methoden `checkLoadURIStr()` und `checkLoadURI()` wurden entfernt ([Firefox Bug 327244](https://bugzil.la/327244)).
- `nsIRefreshURI`
  - : Der Methode `setupRefreshURIFromHeader()` wurde ein `principal` Parameter hinzugefügt ([Firefox Bug 327244](https://bugzil.la/327244)).

#### Neue Schnittstellen

Keine.

#### Entfernte Schnittstellen

Keine entfernt.

## Weitere Informationen

- [Firefox 17 Versionshinweise](https://website-archive.mozilla.org/www.mozilla.org/firefox_releasenotes/en-us/firefox/17.0/releasenotes/)
- [Aurora 17 ist da, mit besserer Sicherheit und Unterstützung für neue Standards](https://hacks.mozilla.org/2012/08/aurora-17-is-out/) (Mozilla Hacks)
- [Add-on-Kompatibilität für Firefox 17](https://blog.mozilla.org/addons/2012/11/08/compatibility-for-firefox-17/) (Add-ons Blog)
