---
title: Firefox 17 Versionshinweise für Entwickler
short-title: Firefox 17
slug: Mozilla/Firefox/Releases/17
l10n:
  sourceCommit: 83f4e64da466670c3700110da364546253eae127
---

Firefox 17 wurde am 20. November 2012 veröffentlicht. Dieser Artikel listet die wichtigsten Änderungen auf, die nicht nur für Webentwickler, sondern auch für Firefox- und Gecko-Entwickler sowie für Add-On-Entwickler nützlich sind.

## Änderungen für Webentwickler

### HTML

- Unterstützung für das [`sandbox`](/de/docs/Web/HTML/Reference/Elements/iframe#sandbox)-Attribut auf dem {{HTMLElement("iframe")}}-Element wurde hinzugefügt. ([Firefox Fehler 341604](https://bugzil.la/341604))

### CSS

- Unterstützung für die {{cssxref("@supports")}} At-Regel, definiert im [CSS Conditional Rules Module Level 3](https://drafts.csswg.org/css-conditional-3/), wurde hinzugefügt. Sie ist standardmäßig deaktiviert. Entwickler können sie ausprobieren, indem sie `layout.css.supports-rule.enabled` auf true setzen ([Fehler 649740](https://bugzil.la/649740)).
- Unterstützung für die Pseudo-Klasse {{cssxref(":dir", ":dir()")}} aus CSS Selectors Level 4, die es ermöglicht, Elemente basierend auf ihrer Richtung auszuwählen, wurde hinzugefügt. ([Fehler 562169](https://bugzil.la/562169))
- Unterstützung für den neu definierten Wert `isolate-override` des CSS {{cssxref("unicode-bidi")}}-Wertes wurde hinzugefügt ([Firefox Fehler 774335](https://bugzil.la/774335))
- Unsere implementierte Präfix-Version von {{cssxref("box-sizing")}} berücksichtigt nun {{cssxref("min-height")}} und {{cssxref("max-height")}}. Ein Schritt näher an der Entfernung des Präfixes ([Firefox Fehler 308801](https://bugzil.la/308801))

### DOM/APIs

- Unterstützung für das [`CSSSupportsRule`](/de/docs/Web/API/CSSSupportsRule)-Interface, definiert in der [CSS3-Conditional-Rules-Spezifikation](https://drafts.csswg.org/css-conditional-3/), wurde hinzugefügt ([Firefox Fehler 649740](https://bugzil.la/649740)).
- Unterstützung für das [`WheelEvent`](/de/docs/Web/API/WheelEvent)-Objekt und das `wheel`-Ereignis wurde hinzugefügt ([Firefox Fehler 719320](https://bugzil.la/719320)).
- Unterstützung für die DOM Meta-Taste auf Linux wurde erneut hinzugefügt ([Firefox Fehler 751749](https://bugzil.la/751749)).
- Auf dem [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement) wurde eine neue Methode `mozGetMetadata` eingeführt, die ein JavaScript-Objekt zurückgibt, dessen Eigenschaften die Metadaten der abspielenden Medienressource als {key: value}-Paare darstellen ([Firefox Fehler 763010](https://bugzil.la/763010)).
- Unterstützung für [`Range.intersectsNode`](/de/docs/Web/API/Range/intersectsNode) wurde erneut hinzugefügt; sie wurde in Gecko 1.9 entfernt ([Firefox Fehler 579638](https://bugzil.la/579638)).
- [`Range.compareBoundaryPoints()`](/de/docs/Web/API/Range/compareBoundaryPoints) führt nun eine [`DOMException`](/de/docs/Web/API/DOMException) mit dem Wert `NOT_SUPPORTED_ERR` aus, wenn die Vergleichsmethode ungültig ist ([Firefox Fehler 714279](https://bugzil.la/714279)).
- [`Event.initEvent()`](/de/docs/Web/API/Event/initEvent) wurde an die Spezifikation angepasst: es wirft keinen Fehler mehr, wenn es nach der Auslösung des Ereignisses aufgerufen wird; es ist nur noch eine Leeroperation ([Firefox Fehler 768310](https://bugzil.la/768310)).
- Die nicht standardmäßige Eigenschaft [`XMLHttpRequest.onuploadrequest`](/de/docs/Web/API/XMLHttpRequest) wurde entfernt ([Firefox Fehler 761278](https://bugzil.la/761278)).
- Die Methode [`XMLHttpRequest.getAllResponseHeaders()`](/de/docs/Web/API/XMLHttpRequest/getAllResponseHeaders) trennt sie jetzt mit einem CRLF (anstatt eines LF), wie von der Spezifikation gefordert ([Firefox Fehler 730925](https://bugzil.la/730925)).

### JavaScript

- Das [`String`](/de/docs/Web/JavaScript/Reference/Global_Objects/String)-Objekt bietet nun die Harmony-Methoden [`startsWith`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/startsWith), [`endsWith`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/endsWith) und [`contains`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/includes) ([Firefox Fehler 772733](https://bugzil.la/772733)).
- Die String-Methoden [`link()`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/link) und [`anchor()`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/anchor) entkommen nun dem `'"'` (Anführungszeichen) ([Firefox Fehler 352437](https://bugzil.la/352437)).
- Experimentelle Unterstützung für das `ParallelArray`-Objekt wurde implementiert ([Firefox Fehler 778559](https://bugzil.la/778559)).
- Unterstützung zur Iteration von [`Map`](/de/docs/Web/JavaScript/Reference/Global_Objects/Map)/[`Set`](/de/docs/Web/JavaScript/Reference/Global_Objects/Set) ([Firefox Fehler 725909](https://bugzil.la/725909)).
- ECMAScript für XML (E4X), eine aufgegebene JavaScript-Erweiterung, wurde standardmäßig für Webinhalte deaktiviert ([Firefox Fehler 778851](https://bugzil.la/778851)).
- `__exposedProps__` muss nun für Chrome-JavaScript-Objekte, die auf Inhalte zugreifen, gesetzt werden. Versuche, Chrome-Objekte ohne gesetztes `__exposedProps__` aus den Inhalten zuzugreifen, schlagen fehl, ohne einen Fehler anzuzeigen ([Firefox Fehler 553102](https://bugzil.la/553102)).
- [`for...of`](/de/docs/Web/JavaScript/Reference/Statements/for...of)-Schleifen funktionieren jetzt anhand von `.iterator()` und `.next()` ([Firefox Fehler 725907](https://bugzil.la/725907)).

### WebGL

- Die [`EXT_texture_filter_anisotropic`](/de/docs/Web/API/EXT_texture_filter_anisotropic) WebGL-Erweiterung ist jetzt unpräfixiert. Die Verwendung von `"MOZ_EXT_texture_filter_anisotropic"` wird nun eine Warnung auslösen. Der präfixierte Name wird in einer zukünftigen Version entfernt ([Firefox Fehler 776001](https://bugzil.la/776001)).

### SVG

_Keine Änderung._

### MathML

- Das Parsen des `align`-Attributs auf {{MathMLElement("mtable")}}-Elementen wurde aktualisiert, um optionale Leerzeichen korrekter zu behandeln.

### XUL

- Das XUL `key`-Element unterstützt den „os“-Modifikator, also die Win-Taste (Super- oder Hyper-Taste) ([Firefox Fehler 778732](https://bugzil.la/778732)).

### Netzwerk

- Die nicht-standardmäßige Funktion `XMLHttpRequest.onuploadprogress`, die in Firefox 14 veraltet wurde, wurde entfernt.

_Keine Änderung._

### Entwicklerwerkzeuge

- Die $-Hilfsfunktion von JSTerm wurde von getElementById in querySelector() geändert ([Firefox Fehler 751749](https://bugzil.la/751749)).

### User Agent

Der Gecko-Teil des User-Agent-Strings wurde geändert. Das Build-Datum (das seit 2010 nicht aktualisiert wurde) wurde entfernt und stattdessen die Gecko-Versionsnummer hinzugefügt. So wurde aus `Gecko/20100101` -> `Gecko/17.0`. Dies könnte Auswirkungen haben, wenn Sie eine User-Agent-Erkennung durchführen.

## Änderungen für Add-On- und Mozilla-Entwickler

### Schnittstellenänderungen

- `nsIInputStream`
  - : Die Methode `available()` gibt eine 64-Bit Länge anstelle einer 32-Bit Länge zurück ([Firefox Fehler 215450](https://bugzil.la/215450)).
- `nsIDOMWindowUtils`
  - : Die Methode `sendMouseScrollEvent()` wurde durch `sendWheelEvent()` ersetzt ([Firefox Fehler 719320](https://bugzil.la/719320)).
- `nsIFilePicker`
  - : Die Methode `open()`, um den Dateidialog asynchron zu öffnen, wurde hinzugefügt und die Methode `show()` wurde als veraltet markiert ([Firefox Fehler 731307](https://bugzil.la/731307)).
- `nsIScriptSecurityManager`
  - : Die Methoden `checkLoadURIStr()` und `checkLoadURI()` wurden entfernt ([Firefox Fehler 327244](https://bugzil.la/327244)).
- `nsIRefreshURI`
  - : Der Methode `setupRefreshURIFromHeader()` wurde ein `principal` Parameter hinzugefügt ([Firefox Fehler 327244](https://bugzil.la/327244)).

#### Neue Schnittstellen

Keine.

#### Entfernte Schnittstellen

Keine entfernt.

## Siehe auch

- [Firefox 17 Versionshinweise](https://website-archive.mozilla.org/www.mozilla.org/firefox_releasenotes/en-us/firefox/17.0/releasenotes/)
- [Aurora 17 ist veröffentlicht und bringt bessere Sicherheit und Unterstützung für neue Standards](https://hacks.mozilla.org/2012/08/aurora-17-is-out/) (Mozilla Hacks)
- [Add-On-Kompatibilität für Firefox 17](https://blog.mozilla.org/addons/2012/11/08/compatibility-for-firefox-17/) (Add-ons Blog)
