---
title: Firefox 17 Versionshinweise für Entwickler
short-title: Firefox 17
slug: Mozilla/Firefox/Releases/17
l10n:
  sourceCommit: 61912f53d01e935aea926a2226130fb4587414a9
---

Firefox 17 wurde am 20. November 2012 veröffentlicht. Dieser Artikel listet wichtige Änderungen auf, die für Webentwickler, aber auch für Firefox- und Gecko-Entwickler sowie für Add-on-Entwickler nützlich sind.

## Änderungen für Webentwickler

### HTML

- Unterstützung für das [`sandbox`](/de/docs/Web/HTML/Reference/Elements/iframe#sandbox)-Attribut im {{HTMLElement("iframe")}}-Element wurde hinzugefügt. ([Firefox Bug 341604](https://bugzil.la/341604))

### CSS

- Unterstützung für die {{cssxref("@supports")}}-Regel, die in [CSS Conditional Rules Module Level 3](https://drafts.csswg.org/css-conditional-3/) definiert ist, wurde implementiert. Sie ist standardmäßig deaktiviert. Entwickler können sie testen, indem sie `layout.css.supports-rule.enabled` auf true setzen ([Bug 649740](https://bugzil.la/649740)).
- Unterstützung für die CSS Selectors Level 4 Pseudoklasse {{cssxref(":dir", ":dir()")}}, die es ermöglicht, Elemente basierend auf ihrer Richtung auszuwählen, wurde implementiert. ([Bug 562169](https://bugzil.la/562169))
- Unterstützung für den neu spezifizierten `isolate-override` Wert der CSS-Eigenschaft {{cssxref("unicode-bidi")}} wurde implementiert ([Firefox Bug 774335](https://bugzil.la/774335)).
- Unsere mit einem Präfix versehene Implementierung von {{cssxref("box-sizing")}} berücksichtigt jetzt auch {{cssxref("min-height")}} und {{cssxref("max-height")}}. Ein Schritt näher zur Entfernung des Präfixes ([Firefox Bug 308801](https://bugzil.la/308801)).

### DOM/APIs

- Unterstützung für das [`CSSSupportsRule`](/de/docs/Web/API/CSSSupportsRule)-Interface, das in der [CSS3 Conditional Rules-Spezifikation](https://drafts.csswg.org/css-conditional-3/) definiert ist, wurde implementiert ([Firefox Bug 649740](https://bugzil.la/649740)).
- Unterstützung für das [`WheelEvent`](/de/docs/Web/API/WheelEvent)-Objekt und das `wheel`-Ereignis wurde implementiert ([Firefox Bug 719320](https://bugzil.la/719320)).
- Unterstützung für die DOM Meta-Taste unter Linux wurde wieder eingeführt ([Firefox Bug 751749](https://bugzil.la/751749)).
- Auf dem [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement) gibt es eine neue Methode, `mozGetMetadata`, die ein JavaScript-Objekt zurückgibt, dessen Eigenschaften Metadaten der abgespielten Medienressource als {key: value}-Paare repräsentieren ([Firefox Bug 763010](https://bugzil.la/763010)).
- Unterstützung für [`Range.intersectsNode`](/de/docs/Web/API/Range/intersectsNode) wurde wieder hinzugefügt, nachdem sie in Gecko 1.9 entfernt wurde ([Firefox Bug 579638](https://bugzil.la/579638)).
- [`Range.compareBoundaryPoints()`](/de/docs/Web/API/Range/compareBoundaryPoints) wirft jetzt eine [`DOMException`](/de/docs/Web/API/DOMException) mit dem Wert `NOT_SUPPORTED_ERR`, wenn die Vergleichsmethode ungültig ist ([Firefox Bug 714279](https://bugzil.la/714279)).
- [`Event.initEvent()`](/de/docs/Web/API/Event/initEvent) wurde an die Spezifikation angepasst: Es wird nicht mehr geworfen, wenn es nach dem Dispatch des Ereignisses aufgerufen wird; es ist nur ein No-Op ([Firefox Bug 768310](https://bugzil.la/768310)).
- Die nicht-standardisierte Eigenschaft [`XMLHttpRequest.onuploadrequest`](/de/docs/Web/API/XMLHttpRequest) wurde entfernt ([Firefox Bug 761278](https://bugzil.la/761278)).
- Die Methode [`XMLHttpRequest.getAllResponseHeaders()`](/de/docs/Web/API/XMLHttpRequest/getAllResponseHeaders) trennt sie nun mit einem CRLF (statt einem LF), wie es die Spezifikation verlangt ([Firefox Bug 730925](https://bugzil.la/730925)).

### JavaScript

- Das [`String`](/de/docs/Web/JavaScript/Reference/Global_Objects/String)-Objekt bietet jetzt die Harmony-Methoden [`startsWith`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/startsWith), [`endsWith`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/endsWith), und [`contains`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/includes) ([Firefox Bug 772733](https://bugzil.la/772733)).
- Die String-Methoden [`link()`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/link) und [`anchor()`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/anchor) maskieren jetzt das Zeichen `'"'` (Anführungszeichen) ([Firefox Bug 352437](https://bugzil.la/352437)).
- Experimentelle Unterstützung für das Strawman-Objekt `ParallelArray` wurde implementiert ([Firefox Bug 778559](https://bugzil.la/778559)).
- Unterstützung zur Iteration über [`Map`](/de/docs/Web/JavaScript/Reference/Global_Objects/Map)/[`Set`](/de/docs/Web/JavaScript/Reference/Global_Objects/Set) ([Firefox Bug 725909](https://bugzil.la/725909)).
- ECMAScript for XML (E4X), eine aufgegebene JavaScript-Erweiterung, ist standardmäßig für Web-Inhalte deaktiviert ([Firefox Bug 778851](https://bugzil.la/778851)).
- `__exposedProps__` muss jetzt für Chrome-JavaScript-Objekte, die dem Inhalt ausgesetzt sind, festgelegt werden. Versuche, von Inhalten auf Chrome-Objekte zuzugreifen, ohne dass `__exposedProps__` eingestellt ist, werden stillschweigend fehlschlagen ([Firefox Bug 553102](https://bugzil.la/553102)).
- [`for...of`](/de/docs/Web/JavaScript/Reference/Statements/for...of)-Schleifen funktionieren jetzt auf Basis von `.iterator()` und `.next()` ([Firefox Bug 725907](https://bugzil.la/725907)).

### WebGL

- Die [`EXT_texture_filter_anisotropic`](/de/docs/Web/API/EXT_texture_filter_anisotropic)-WebGL-Erweiterung ist nun ohne Präfix verfügbar. Die Verwendung von `"MOZ_EXT_texture_filter_anisotropic"` wird jetzt eine Warnung ausgeben. Der Name mit Präfix wird in einer zukünftigen Version entfernt ([Firefox Bug 776001](https://bugzil.la/776001)).

### SVG

_Keine Änderung._

### MathML

- Das Parsen des `align`-Attributs auf {{MathMLElement("mtable")}}-Elementen wurde aktualisiert, um optionale Leerzeichen korrekter zu behandeln.

### XUL

- Das XUL `key`-Element unterstützt den "os"-Modifier, der der Win-Taste (Super- oder Hyper-Taste) entspricht ([Firefox Bug 778732](https://bugzil.la/778732)).

### Netzwerk

- Das nicht-standardmäßige Feature `XMLHttpRequest.onuploadprogress`, das in Firefox 14 veraltet war, wurde entfernt.

_Keine Änderung._

### Entwicklertools

- Die JSTerm-Helper-Funktion $ ändert sich von getElementById zu querySelector() ([Firefox Bug 751749](https://bugzil.la/751749)).

### User Agent

Der Gecko-Teil der User-Agent-Zeichenfolge hat sich geändert. Das Build-Datum (das seit 2010 nicht mehr aktualisiert wurde) wurde entfernt und stattdessen die Gecko-Versionsnummer eingefügt. Somit `Gecko/20100101` -> `Gecko/17.0`. Dies könnte Auswirkungen haben, wenn Sie User-Agent-Überprüfungen durchführen.

## Änderungen für Add-on- und Mozilla-Entwickler

### Schnittstellenänderungen

- `nsIInputStream`
  - : Die Methode `available()` gibt eine 64-Bit-Länge anstelle von 32-Bit zurück ([Firefox Bug 215450](https://bugzil.la/215450)).
- `nsIDOMWindowUtils`
  - : Die Methode `sendMouseScrollEvent()` wurde durch `sendWheelEvent()` ersetzt ([Firefox Bug 719320](https://bugzil.la/719320)).
- `nsIFilePicker`
  - : Die `open()`-Methode, um den Dateidialog asynchron zu öffnen, wurde hinzugefügt und die `show()`-Methode wurde veraltet ([Firefox Bug 731307](https://bugzil.la/731307)).
- `nsIScriptSecurityManager`
  - : Die Methoden `checkLoadURIStr()` und `checkLoadURI()` wurden entfernt ([Firefox Bug 327244](https://bugzil.la/327244)).
- `nsIRefreshURI`
  - : Der Methode `setupRefreshURIFromHeader()` wurde ein `principal`-Parameter hinzugefügt ([Firefox Bug 327244](https://bugzil.la/327244)).

#### Neue Schnittstellen

Keine.

#### Entfernte Schnittstellen

Keine entfernt.

## Siehe auch

- [Firefox 17 Versionshinweise](https://website-archive.mozilla.org/www.mozilla.org/firefox_releasenotes/en-us/firefox/17.0/releasenotes/)
- [Aurora 17 ist erschienen und bietet bessere Sicherheit sowie Unterstützung für neue Standards](https://hacks.mozilla.org/2012/08/aurora-17-is-out/) (Mozilla Hacks)
- [Add-on-Kompatibilität für Firefox 17](https://blog.mozilla.org/addons/2012/11/08/compatibility-for-firefox-17/) (Add-ons Blog)
