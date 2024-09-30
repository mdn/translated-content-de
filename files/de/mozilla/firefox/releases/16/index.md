---
title: Firefox 16 für Entwickler
slug: Mozilla/Firefox/Releases/16
l10n:
  sourceCommit: 75d6ce4e2e752b8577012aea96abc766659ed3e2
---

{{FirefoxSidebar}}

Firefox 16 wurde am 9. Oktober 2012 veröffentlicht. Dieser Artikel listet wichtige Änderungen auf, die nicht nur für Webentwickler, sondern auch für Firefox- und Gecko-Entwickler sowie für Add-on-Entwickler nützlich sind.

## Änderungen für Webentwickler

### HTML

- Das {{HTMLElement("meter")}}-Element wird jetzt unterstützt.
- Unterstützung für die HTML Microdata API wurde hinzugefügt. ([bug 591467](https://bugzil.la/591467))
- {{HTMLElement("canvas")}} unterstützt jetzt das CSS `currentcolor` in allen Fällen. ([Firefox bug 629882](https://bugzil.la/629882))
- {{HTMLElement("input")}} erlaubt jetzt das Filtern basierend auf beliebigen Mime-Typen im `accept` ([Firefox bug 565274](https://bugzil.la/565274)).
- Zwei neue Attribute, `width` und `height`, wurden dem {{HTMLElement("input")}}-Element hinzugefügt ([bug 683855](https://bugzil.la/683855)).

### CSS

- Unterstützung für die standardmäßige, nicht prfixierte Version von [CSS-Animationen](/de/docs/Web/CSS/CSS_animations/Using_CSS_animations) wurde implementiert ([bug 762302](https://bugzil.la/762302)).
- Unterstützung für reverse Animationsrichtung (Schlüsselwörter `reverse` und `alternate-reverse` auf der {{cssxref("animation-direction")}}-Eigenschaft) wurde hinzugefügt. ([bug 655920](https://bugzil.la/655920)).
- Sie können jetzt die CSS-Eigenschaften {{cssxref("height")}} und {{cssxref("width")}} animieren.
- Die CSS-Eigenschaften {{cssxref("animation-duration")}} und {{cssxref("transition-duration")}} lehnen jetzt negative Werte ab (und behandeln diese nicht mehr als `0s`) ([bug 773102](https://bugzil.la/773102)).
- Unterstützung für die standardmäßige, nicht prfixierte Version von [CSS-Transformationen](/de/docs/Web/CSS/CSS_transforms/Using_CSS_transforms) wurde implementiert ([bug 745523](https://bugzil.la/745523)). {{cssxref("&lt;length&gt;")}} kann nicht mehr für Übersetzungswerte in `matrix()` und `matrix3d()` verwendet werden ([Firefox bug 719054](https://bugzil.la/719054)).
- Unterstützung für die standardmäßige, nicht prfixierte Version von [CSS-Verläufen](/de/docs/Web/CSS/CSS_images/Using_CSS_gradients) wurde implementiert. Beachten Sie, dass sich die Syntax seit der präfixierten Version erheblich geändert hat, daher sollten Sie sich darüber informieren ([bug 752187](https://bugzil.la/752187)).
- Die {{cssxref("box-sizing", "-moz-box-sizing")}}-Implementierung wurde aktualisiert, um auch auf Tabellenzellen angewendet zu werden ([bug 338554](https://bugzil.la/338554)).
- Unterstützung für die standardmäßige, nicht prfixierte Version von {{cssxref("calc", "calc()")}} wurde implementiert ([bug 771678](https://bugzil.la/771678)).
- Der CSS-Datentyp {{cssxref("&lt;resolution&gt;")}} wurde erweitert, um `dppx` zu unterstützen ([bug 741644](https://bugzil.la/741644)).
- Auf Bildschirmen repräsentieren `dppx`, `dpi` und `dpcm` jetzt Werte basierend auf CSS-Pixeln und nicht mehr auf physikalischen Einheiten bei [Media Queries](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries) ([bug 771390](https://bugzil.la/771390)).
- Drei neue Pseudoklassen `:-moz-meter-optimum`, `:-moz-meter-sub-optimum` und `:-moz-meter-sub-sub-optimum` wurden hinzugefügt, um auf ein {{HTMLElement("meter")}}-Element in einem bestimmten Zustand zuzugreifen oder zu stylen ([bug 660238](https://bugzil.la/660238)).
- Die {{cssxref("appearance")}}-Eigenschaft erhält zwei neue Werte: `meterbar` und `meterchunk`. Sie repräsentieren Komponenten innerhalb des {{HTMLElement("meter")}}-Elements ([bug 659999](https://bugzil.la/659999)).
- Die {{cssxref("min-width")}} und {{cssxref("min-height")}} unterstützen jetzt das `auto`-Schlüsselwort für Flex-Elemente (und ergeben sich zu `0` für andere Elemente) ([Firefox bug 763689](https://bugzil.la/763689)).

### API/DOM

- Zwei neue Eigenschaften `width` und `height` wurden dem [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement)-Interface hinzugefügt ([bug 683855](https://bugzil.la/683855)).
- IndexedDB-Eigenschaften und -Methoden wurden unverprfixiert. ([bug 726378](https://bugzil.la/726378))
- Die [Battery API](/de/docs/Web/API/Navigator/getBattery) ist jetzt unverprfixiert.
- Die Vibration API wurde unverprfixiert.
- Das nicht standardkonforme `Keyboard`-Interface, das als `mozKeyboard` vorgeprfixt ist, verfügt jetzt über die Methoden `Keyboard.setSelectedOption()` und `Keyboard.setValue()`, sowie das Ereignis `Keyboard.onfocuschange`. _Dieses Interface, das nur für Firefox OS verfügbar ist, wurde in Firefox 31 entfernt._
- Die globalen Objekte [`java`](/de/docs/LiveConnect_Reference/java) und [`Packages`](/de/docs/LiveConnect_Reference/Packages) wurden entfernt. Siehe [LiveConnect](/de/docs/LiveConnect).
- Der `CSSRule.type`, der mit [`CSSNamespaceRule`](/de/docs/Web/API/CSSNamespaceRule) assoziiert ist, wurde von `UNKNOWN_RULE` (`0`) auf `NAMESPACE_RULE` (`10`) aktualisiert ([bug 765590](https://bugzil.la/765590)).
- WebSMS API: [`SmsRequest`](/de/docs/Web/API/SmsRequest) wurde durch die allgemeinere `DOMRequest` ersetzt.
- Die nicht standardkonformen, schreibgeschützten Eigenschaften [`Element.scrollTopMax`](/de/docs/Web/API/Element/scrollTopMax) und [`Element.scrollLeftMax`](/de/docs/Web/API/Element/scrollLeftMax) wurden hinzugefügt ([Firefox bug 766937](https://bugzil.la/766937)).
- Der zweite Parameter von [`Blob()`](/de/docs/Web/API/Blob/blob), wenn er auf `null` oder `undefined` gesetzt ist, wird jetzt als leeres Wörterbuch behandelt ([Firefox bug 7691119](https://bugzil.la/7691119)).

### JavaScript

- [`Number`](/de/docs/Web/JavaScript/Reference/Global_Objects/Number)-Objekte bieten jetzt die Methoden `isFinite()`, `toInteger()`, und `isInteger()`. ([bug 761480](https://bugzil.la/761480), [bug 761495](https://bugzil.la/761495))
- Der Harmony [Spread-Operator](https://web.archive.org/web/20161222114355/http://wiki.ecmascript.org/doku.php?id=harmony:spread) wird jetzt in [`Array`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array)-Initialisierern unterstützt ([bug 574130](https://bugzil.la/574130)). Beachten Sie, dass er in Aufrufen noch nicht unterstützt wird ([bug 762363](https://bugzil.la/762363)).
- Die experimentelle Methode {{jsxref("TypedArray.prototype.move()")}} wurde hinzugefügt (nur in Aurora- und Nightly-Kanälen verfügbar) ([Firefox bug 730873](https://bugzil.la/730873)).

### WebGL

_Keine Änderung._

### SVG

_Keine Änderung._

### MathML

- Die Attribute `lspace` und `rspace` von {{MathMLElement("mo")}} setzen nun korrekt standardmäßig auf `thickmathspace`.

### Netzwerk

_Keine Änderungen._

### Entwicklerwerkzeuge

- Es gibt jetzt eine praktische Entwickler-Toolbar, die Sie über Tools > Web-Entwickler > Entwickler-Toolbar oder durch Drücken von Strg-Umschalt-V (Cmd-Opt-V auf Mac OS X) öffnen können. Diese Toolbar bietet eine Befehlszeilenschnittstelle sowie Schaltflächen für den schnellen Zugriff auf nützliche Werkzeuge. Die grafische Befehlszeilenschnittstelle _GCLI_ ist einfach zu erweitern, und zusätzliche Befehle werden in Zukunft erwartet. Geben Sie "help" ein, um eine Liste der unterstützten Befehle zu erhalten.
- Die Webkonsole zeigt jetzt eine Fehleranzahl an, damit Sie schnell sehen können, wie viel Arbeit noch vor Ihnen liegt.
- Der Scratchpad bietet jetzt eine Liste der zuletzt geöffneten Dateien an.

## Änderungen für Entwickler von Open Web Apps

- Erste Unterstützung für [Open Web Apps](/de/docs/Web/Apps/Getting_Started) wurde in den Desktop-Versionen von Firefox implementiert (d.h. unter Windows, Mac OS X und Linux).

## Änderungen für Add-on- und Mozilla-Entwickler

### Schnittstellenänderungen

`nsIPrivateDOMEvent` wurde in `nsIDOMEvent` zusammengeführt. ([Firefox bug 761613](https://bugzil.la/761613))

#### Neue Schnittstellen

_Keine neuen Schnittstellen._

#### Entfernte Schnittstellen

Die folgenden Schnittstellen wurden entfernt.
