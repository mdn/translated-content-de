---
title: Firefox 16 für Entwickler
slug: Mozilla/Firefox/Releases/16
l10n:
  sourceCommit: 1d3d0c10ebf5c8c55f75b9adce74d1e5001866c6
---

Firefox 16 wurde am 9. Oktober 2012 veröffentlicht. Dieser Artikel listet wichtige Änderungen auf, die nicht nur für Webentwickler, sondern auch für Firefox- und Gecko-Entwickler sowie Add-on-Entwickler nützlich sind.

## Änderungen für Webentwickler

### HTML

- Das {{HTMLElement("meter")}}-Element wird jetzt unterstützt.
- Unterstützung für die HTML Microdata API wurde hinzugefügt. ([Fehler 591467](https://bugzil.la/591467))
- {{HTMLElement("canvas")}} unterstützt jetzt das CSS `currentcolor` in allen Fällen. ([Fehler in Firefox 629882](https://bugzil.la/629882))
- {{HTMLElement("input")}} erlaubt nun das Filtern basierend auf beliebigen Mimetypen im `accept`-Attribut ([Fehler in Firefox 565274](https://bugzil.la/565274)).
- Zwei neue Attribute, `width` und `height`, wurden dem {{HTMLElement("input")}}-Element hinzugefügt ([Fehler 683855](https://bugzil.la/683855)).

### CSS

- Unterstützung für die standardisierte, unpräfixte Version von [CSS-Animationen](/de/docs/Web/CSS/CSS_animations/Using_CSS_animations) wurde implementiert ([Fehler 762302](https://bugzil.la/762302)).
- Unterstützung für umgekehrte Animationsrichtung (Schlüsselwörter `reverse` und `alternate-reverse` für die {{cssxref("animation-direction")}}-Eigenschaft) wurde hinzugefügt. ([Fehler 655920](https://bugzil.la/655920)).
- Sie können jetzt die CSS-Eigenschaften {{cssxref("height")}} und {{cssxref("width")}} animieren.
- Die CSS-Eigenschaften {{cssxref("animation-duration")}} und {{cssxref("transition-duration")}} lehnen jetzt negative Werte ab (und behandeln sie nicht mehr als `0s`) ([Fehler 773102](https://bugzil.la/773102)).
- Unterstützung für die standardisierte, unpräfixte Version von [CSS-Transformationen](/de/docs/Web/CSS/CSS_transforms/Using_CSS_transforms) wurde implementiert ([Fehler 745523](https://bugzil.la/745523)). {{cssxref("&lt;length&gt;")}} kann nicht mehr für Übersetzungswerte in `matrix()` und `matrix3d()` verwendet werden ([Fehler in Firefox 719054](https://bugzil.la/719054)).
- Unterstützung für die standardisierte, unpräfixte Version von [CSS-Gradients](/de/docs/Web/CSS/CSS_images/Using_CSS_gradients) wurde implementiert. Beachten Sie, dass sich die Syntax seit der präfixierten Version erheblich geändert hat, daher sollten Sie sich darüber informieren ([Fehler 752187](https://bugzil.la/752187)).
- Die Implementierung von {{cssxref("box-sizing", "-moz-box-sizing")}} wurde aktualisiert, um auch auf Tabellenspalten anzuwenden ([Fehler 338554](https://bugzil.la/338554)).
- Unterstützung für die standardisierte, unpräfixte Version von {{cssxref("calc", "calc()")}} wurde implementiert ([Fehler 771678](https://bugzil.la/771678)).
- Der CSS-Datentyp {{cssxref("&lt;resolution&gt;")}} wurde erweitert, um `dppx` zu unterstützen ([Fehler 741644](https://bugzil.la/741644)).
- Auf dem Bildschirm repräsentieren `dppx`, `dpi` und `dpcm` in [Media Queries](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries) jetzt Werte basierend auf CSS-Pixeln und nicht mehr auf physischen Einheiten ([Fehler 771390](https://bugzil.la/771390)).
- Drei neue Pseudoklassen `:-moz-meter-optimum`, `:-moz-meter-sub-optimum` und `:-moz-meter-sub-sub-optimum` wurden hinzugefügt, um ein {{HTMLElement("meter")}}-Element in einem bestimmten Zustand zu stylen ([Fehler 660238](https://bugzil.la/660238)).
- Die {{cssxref("appearance")}}-Eigenschaft erhält zwei neue Werte: `meterbar` und `meterchunk`. Sie repräsentieren Komponenten innerhalb des {{HTMLElement("meter")}}-Elements ([Fehler 659999](https://bugzil.la/659999)).
- Die {{cssxref("min-width")}} und {{cssxref("min-height")}} unterstützen jetzt das Schlüsselwort `auto` für Flex-Elemente (und werden für andere Elemente auf `0` aufgelöst) ([Fehler in Firefox 763689](https://bugzil.la/763689)).

### API/DOM

- Zwei neue Eigenschaften `width` und `height` wurden zur [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement)-Schnittstelle hinzugefügt ([Fehler 683855](https://bugzil.la/683855)).
- IndexedDB-Eigenschaften und -Methoden sind jetzt ohne Präfix. ([Fehler 726378](https://bugzil.la/726378))
- Die [Battery API](/de/docs/Web/API/Navigator/getBattery) ist jetzt unpräfixiert.
- Die Vibration API ist jetzt unpräfixiert.
- Die nicht standardisierte `Keyboard`-Schnittstelle, mit dem Präfix `mozKeyboard`, verfügt jetzt über die Methoden `Keyboard.setSelectedOption()` und `Keyboard.setValue()` sowie das `Keyboard.onfocuschange`. _Diese Schnittstelle, nur für Firefox OS verfügbar, wurde in Firefox 31 entfernt._
- Die globalen Objekte [`java`](/de/docs/LiveConnect_Reference/java) und [`Packages`](/de/docs/LiveConnect_Reference/Packages) wurden entfernt. Siehe [LiveConnect](/de/docs/LiveConnect).
- Der `CSSRule.type`, der mit [`CSSNamespaceRule`](/de/docs/Web/API/CSSNamespaceRule) assoziiert ist, wurde von `UNKNOWN_RULE` (`0`) auf `NAMESPACE_RULE` (`10`) aktualisiert ([Fehler 765590](https://bugzil.la/765590)).
- WebSMS API: `SmsRequest` wurde durch das allgemeinere `DOMRequest` ersetzt.
- Die nicht standardisierten, schreibgeschützten Eigenschaften [`Element.scrollTopMax`](/de/docs/Web/API/Element/scrollTopMax) und [`Element.scrollLeftMax`](/de/docs/Web/API/Element/scrollLeftMax) wurden hinzugefügt ([Fehler in Firefox 766937](https://bugzil.la/766937)).
- Der zweite Parameter von [`Blob()`](/de/docs/Web/API/Blob/Blob), wenn auf `null` oder `undefined` gesetzt, wird jetzt als leeres Verzeichnis behandelt ([Fehler in Firefox 7691119](https://bugzil.la/7691119)).

### JavaScript

- [`Number`](/de/docs/Web/JavaScript/Reference/Global_Objects/Number)-Objekte bieten nun die Methoden `isFinite()`, `toInteger()` und `isInteger()`. ([Fehler 761480](https://bugzil.la/761480), [Fehler 761495](https://bugzil.la/761495))
- Der Harmony [Spread-Operator](https://web.archive.org/web/20161222114355/http://wiki.ecmascript.org/doku.php?id=harmony:spread) wird nun in [`Array`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array)-Initialisierern unterstützt ([Fehler 574130](https://bugzil.la/574130)). Beachten Sie, dass er in Aufrufen noch nicht unterstützt wird ([Fehler 762363](https://bugzil.la/762363)).
- Die experimentelle Methode `TypedArray.prototype.move()` wurde hinzugefügt (nur in den Aurora- und Nightly-Kanälen verfügbar) ([Fehler in Firefox 730873](https://bugzil.la/730873)).

### WebGL

_Keine Änderungen._

### SVG

_Keine Änderungen._

### MathML

- Die Attribute `lspace` und `rspace` von {{MathMLElement("mo")}} standardisieren nun korrekt auf `thickmathspace`.

### Netzwerk

### Entwickler-Tools

- Es gibt jetzt eine praktische Entwickler-Toolbar, die Sie über Werkzeuge > Web-Entwickler > Entwickler-Toolbar oder durch Drücken von Strg-Umschalt-V (Cmd-Opt-V auf Mac OS X) aufrufen können. Diese Toolbar bietet eine Befehlszeilenschnittstelle sowie Schaltflächen zum schnellen Zugriff auf nützliche Werkzeuge. Die grafische Befehlszeilenschnittstelle _GCLI_ ist einfach zu erweitern und es werden in Zukunft zusätzliche Befehle erwartet. Geben Sie "help" ein, um eine Liste der unterstützten Befehle zu erhalten.
- Die Webkonsole zeigt jetzt eine Fehleranzahl an, damit Sie schnell sehen können, wie viel Arbeit vor Ihnen liegt.
- Der Scratchpad bietet jetzt eine Liste der zuletzt geöffneten Dateien.

## Änderungen für Entwickler von Open Web Apps

- Erste Implementierung von [Open Web App-Unterstützung](/de/docs/Web/Apps/Getting_Started) wurde in den Desktop-Versionen von Firefox durchgeführt (d.h. auf Windows, Mac OS X und Linux).

## Änderungen für Add-on- und Mozilla-Entwickler

### Schnittstellenänderungen

`nsIPrivateDOMEvent` wurde in `nsIDOMEvent` integriert. ([Fehler in Firefox 761613](https://bugzil.la/761613))

#### Neue Schnittstellen

#### Entfernte Schnittstellen

Die folgenden Schnittstellen wurden entfernt.
