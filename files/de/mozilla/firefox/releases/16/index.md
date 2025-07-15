---
title: Firefox 16 für Entwickler
short-title: Firefox 16
slug: Mozilla/Firefox/Releases/16
l10n:
  sourceCommit: 64df508685abcbc047f6c1a973505921fad1484e
---

Firefox 16 wurde am 9. Oktober 2012 veröffentlicht. Dieser Artikel listet wichtige Änderungen auf, die nicht nur Webentwickler kennen sollten, sondern auch Firefox- und Gecko-Entwickler sowie Add-on-Entwickler.

## Änderungen für Webentwickler

### HTML

- Das {{HTMLElement("meter")}}-Element wird jetzt unterstützt.
- Unterstützung für die HTML Microdata API wurde hinzugefügt. ([Bug 591467](https://bugzil.la/591467))
- {{HTMLElement("canvas")}} unterstützt nun CSS `currentcolor` in allen Fällen. ([Firefox-Bug 629882](https://bugzil.la/629882))
- {{HTMLElement("input")}} erlaubt jetzt das Filtern basierend auf beliebigen MIME-Typen in `accept` ([Firefox-Bug 565274](https://bugzil.la/565274)).
- Zwei neue Attribute, `width` und `height`, wurden dem {{HTMLElement("input")}}-Element hinzugefügt ([Bug 683855](https://bugzil.la/683855)).

### CSS

- Unterstützung für die standardisierte, unpräfixierte Version von [CSS-Animationen](/de/docs/Web/CSS/CSS_animations/Using_CSS_animations) wurde implementiert ([Bug 762302](https://bugzil.la/762302)).
- Unterstützung für die umgekehrte Animationsrichtung (Schlüsselwörter `reverse` und `alternate-reverse` auf der {{cssxref("animation-direction")}}-Eigenschaft) wurde hinzugefügt. ([Bug 655920](https://bugzil.la/655920)).
- Sie können nun die CSS-Eigenschaften {{cssxref("height")}} und {{cssxref("width")}} animieren.
- Die CSS-Eigenschaften {{cssxref("animation-duration")}} und {{cssxref("transition-duration")}} lehnen jetzt negative Werte ab (und behandeln sie nicht mehr als `0s`) ([Bug 773102](https://bugzil.la/773102)).
- Unterstützung für die standardisierte, unpräfixierte Version von [CSS-Transformationen](/de/docs/Web/CSS/CSS_transforms/Using_CSS_transforms) wurde implementiert ([Bug 745523](https://bugzil.la/745523)). {{cssxref("&lt;length&gt;")}} kann nicht mehr für Übersetzungswerte in `matrix()` und `matrix3d()` verwendet werden ([Firefox-Bug 719054](https://bugzil.la/719054)).
- Unterstützung für die standardisierte, unpräfixierte Version von [CSS-Verläufen](/de/docs/Web/CSS/CSS_images/Using_CSS_gradients) wurde implementiert. Beachten Sie, dass sich die Syntax seit der präfixierten Version erheblich geändert hat, daher sollten Sie sich darüber informieren ([Bug 752187](https://bugzil.la/752187)).
- Die Implementierung von {{cssxref("box-sizing", "-moz-box-sizing")}} wurde aktualisiert, um nun auch auf Tabellenzellen angewendet zu werden ([Bug 338554](https://bugzil.la/338554)).
- Unterstützung für die standardisierte, unpräfixierte Version von {{cssxref("calc", "calc()")}} wurde implementiert ([Bug 771678](https://bugzil.la/771678)).
- Der CSS-Datentyp {{cssxref("&lt;resolution&gt;")}} wurde erweitert, um `dppx` zu unterstützen ([Bug 741644](https://bugzil.la/741644)).
- Auf dem Bildschirm repräsentieren bei [Media Queries](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries) `dppx`, `dpi` und `dpcm` nun Werte basierend auf CSS-Pixeln und nicht mehr mit den physischen Einheiten ([Bug 771390](https://bugzil.la/771390)).
- Drei neue Pseudoklassen `:-moz-meter-optimum`, `:-moz-meter-sub-optimum` und `:-moz-meter-sub-sub-optimum` wurden hinzugefügt, um ein {{HTMLElement("meter")}}-Element in einem bestimmten Zustand zu stylen ([Bug 660238](https://bugzil.la/660238)).
- Die Eigenschaft {{cssxref("appearance")}} erhält zwei neue Werte: `meterbar` und `meterchunk`. Diese repräsentieren Komponenten innerhalb des {{HTMLElement("meter")}}-Elements ([Bug 659999](https://bugzil.la/659999)).
- Die {{cssxref("min-width")}} und {{cssxref("min-height")}} unterstützen jetzt das `auto`-Schlüsselwort für Flex-Items (und lösen sich zu `0` für andere Items auf) ([Firefox-Bug 763689](https://bugzil.la/763689)).

### API/DOM

- Zwei neue Eigenschaften `width` und `height` wurden der [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement)-Schnittstelle hinzugefügt ([Bug 683855](https://bugzil.la/683855)).
- IndexedDB-Eigenschaften und -Methoden wurden nicht mehr präfixiert. ([Bug 726378](https://bugzil.la/726378))
- Die [Battery API](/de/docs/Web/API/Navigator/getBattery) ist jetzt ohne Präfix.
- Die Vibration API ist nicht mehr präfixiert.
- Die nicht-standardisierte `Keyboard`-Schnittstelle, als `mozKeyboard` präfixiert, verfügt jetzt über die Methoden `Keyboard.setSelectedOption()` und `Keyboard.setValue()`, sowie `Keyboard.onfocuschange`. _Diese Schnittstelle, die nur für Firefox OS verfügbar war, wurde in Firefox 31 entfernt._
- Die globalen Objekte [`java`](/de/docs/LiveConnect_Reference/java) und [`Packages`](/de/docs/LiveConnect_Reference/Packages) wurden entfernt. Siehe [LiveConnect](/de/docs/LiveConnect).
- Der `CSSRule.type`, der mit [`CSSNamespaceRule`](/de/docs/Web/API/CSSNamespaceRule) assoziiert ist, wurde von `UNKNOWN_RULE` (`0`) zu `NAMESPACE_RULE` (`10`) aktualisiert ([Bug 765590](https://bugzil.la/765590)).
- WebSMS API: `SmsRequest` wurde durch das allgemeinere `DOMRequest` ersetzt.
- Die nicht standardisierten, schreibgeschützten Eigenschaften [`Element.scrollTopMax`](/de/docs/Web/API/Element/scrollTopMax) und [`Element.scrollLeftMax`](/de/docs/Web/API/Element/scrollLeftMax) wurden hinzugefügt ([Firefox-Bug 766937](https://bugzil.la/766937)).
- Der zweite Parameter von [`Blob()`](/de/docs/Web/API/Blob/Blob), wenn auf `null` oder `undefined` gesetzt, wird jetzt als leeres Dictionary behandelt ([Firefox-Bug 7691119](https://bugzil.la/7691119)).

### JavaScript

- [`Number`](/de/docs/Web/JavaScript/Reference/Global_Objects/Number)-Objekte bieten jetzt die Methoden `isFinite()`, `toInteger()` und `isInteger()`. ([Bug 761480](https://bugzil.la/761480), [Bug 761495](https://bugzil.la/761495))
- Der Harmony [Spread-Operator](https://web.archive.org/web/20161222114355/http://wiki.ecmascript.org/doku.php?id=harmony:spread) wird jetzt in [`Array`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array)-Initialisierungen unterstützt ([Bug 574130](https://bugzil.la/574130)). Beachten Sie, dass er noch nicht in Aufrufen unterstützt wird ([Bug 762363](https://bugzil.la/762363)).
- Die experimentelle Methode `TypedArray.prototype.move()` wurde hinzugefügt (nur in den Aurora- und Nightly-Kanälen verfügbar) ([Firefox-Bug 730873](https://bugzil.la/730873)).

### WebGL

_Keine Änderung._

### SVG

_Keine Änderung._

### MathML

- Die Attribute `lspace` und `rspace` von {{MathMLElement("mo")}} setzen nun korrekt auf `thickmathspace` zurück.

### Netzwerk

### Entwicklerwerkzeuge

- Es gibt jetzt eine praktische Entwicklertoolleiste, die Sie aufrufen können, indem Sie zu Tools > Webentwickler > Entwicklertoolleiste gehen oder Strg-Shift-V (Cmd-Opt-V auf Mac OS X) drücken. Diese Toolleiste bietet eine Befehlszeilenschnittstelle sowie Schaltflächen für den schnellen Zugriff auf nützliche Tools. Die grafische Befehlszeilenschnittstelle _GCLI_ ist leicht erweiterbar und es werden in Zukunft weitere Befehle erwartet. Geben Sie "help" ein, um eine Liste der unterstützten Befehle zu erhalten.
- Die Web-Konsole zeigt jetzt eine Fehleranzahl an, so dass Sie schnell sehen können, wie viel Arbeit auf Sie zukommt.
- Der Scratchpad bietet nun eine Liste der kürzlich geöffneten Dateien.

## Änderungen für Open Web App-Entwickler

- Die anfängliche [Unterstützung für Open Web Apps](/de/docs/Web/Apps/Getting_Started) wurde in den Desktop-Versionen von Firefox implementiert (d.h. unter Windows, Mac OS X und Linux).

## Änderungen für Add-on- und Mozilla-Entwickler

### Schnittstellenänderungen

`nsIPrivateDOMEvent` wurde in `nsIDOMEvent` zusammengeführt. ([Firefox-Bug 761613](https://bugzil.la/761613))
