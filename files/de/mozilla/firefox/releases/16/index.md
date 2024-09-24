---
title: Firefox 16 für Entwickler
slug: Mozilla/Firefox/Releases/16
l10n:
  sourceCommit: 75d6ce4e2e752b8577012aea96abc766659ed3e2
---

{{FirefoxSidebar}}

Firefox 16 wurde am 9. Oktober 2012 veröffentlicht. Dieser Artikel listet wichtige Änderungen auf, die nicht nur für Webentwickler, sondern auch für Firefox- und Gecko-Entwickler sowie Add-on-Entwickler nützlich sind.

## Änderungen für Webentwickler

### HTML

- Das {{HTMLElement("meter")}}-Element wird nun unterstützt.
- Unterstützung für die HTML-Microdata-API wurde hinzugefügt. ([Fehler 591467](https://bugzil.la/591467))
- {{HTMLElement("canvas")}} unterstützt nun das CSS `currentcolor` in allen Fällen. ([Firefox Fehler 629882](https://bugzil.la/629882))
- {{HTMLElement("input")}} erlaubt nun das Filtern basierend auf beliebigen MIME-Typen in `accept` ([Firefox Fehler 565274](https://bugzil.la/565274)).
- Zwei neue Attribute, `width` und `height`, wurden dem {{HTMLElement("input")}}-Element hinzugefügt ([Fehler 683855](https://bugzil.la/683855)).

### CSS

- Unterstützung für die standardisierte, unpräfixte Version von [CSS-Animationen](/de/docs/Web/CSS/CSS_animations/Using_CSS_animations) wurde hinzugefügt ([Fehler 762302](https://bugzil.la/762302)).
- Unterstützung für die umgekehrte Animationsrichtung (Schlüsselwörter `reverse` und `alternate-reverse` für die {{cssxref("animation-direction")}}-Eigenschaft) wurde hinzugefügt ([Fehler 655920](https://bugzil.la/655920)).
- Sie können jetzt die CSS-Eigenschaften {{cssxref("height")}} und {{cssxref("width")}} animieren.
- Die CSS-Eigenschaften {{cssxref("animation-duration")}} und {{cssxref("transition-duration")}} lehnen nun negative Werte ab (und behandeln sie nicht mehr als `0s`) ([Fehler 773102](https://bugzil.la/773102)).
- Unterstützung für die standardisierte, unpräfixte Version von [CSS-Transformationen](/de/docs/Web/CSS/CSS_transforms/Using_CSS_transforms) wurde hinzugefügt ([Fehler 745523](https://bugzil.la/745523)). {{cssxref("&lt;length&gt;")}} kann nicht mehr für Übersetzungswerte in `matrix()` und `matrix3d()` verwendet werden ([Firefox Fehler 719054](https://bugzil.la/719054)).
- Unterstützung für die standardisierte, unpräfixte Version von [CSS-Gradienten](/de/docs/Web/CSS/CSS_images/Using_CSS_gradients) wurde hinzugefügt. Beachten Sie, dass sich die Syntax seit der präfixierten Version erheblich geändert hat, daher sollten Sie sich darüber informieren ([Fehler 752187](https://bugzil.la/752187)).
- Die {{cssxref("box-sizing", "-moz-box-sizing")}}-Implementierung wurde aktualisiert, um auch auf Tabellenzellen angewendet zu werden ([Fehler 338554](https://bugzil.la/338554)).
- Unterstützung für die unpräfixte Standardversion von {{cssxref("calc", "calc()")}} wurde hinzugefügt ([Fehler 771678](https://bugzil.la/771678)).
- Der CSS-Datentyp {{cssxref("&lt;resolution&gt;")}} wurde erweitert, um `dppx` zu unterstützen ([Fehler 741644](https://bugzil.la/741644)).
- Auf Bildschirmen repräsentieren `dppx`, `dpi` und `dpcm` für [Media Queries](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries) nun Werte basierend auf CSS-Pixeln und nicht mehr auf physischen Einheiten ([Fehler 771390](https://bugzil.la/771390)).
- Drei neue Pseudoklassen `:-moz-meter-optimum`, `:-moz-meter-sub-optimum` und `:-moz-meter-sub-sub-optimum` wurden hinzugefügt, um ein {{HTMLElement("meter")}}-Element in einem bestimmten Zustand zu stylen ([Fehler 660238](https://bugzil.la/660238)).
- Die {{cssxref("appearance")}}-Eigenschaft erhält zwei neue Werte: `meterbar` und `meterchunk`. Diese repräsentieren Komponenten innerhalb des {{HTMLElement("meter")}}-Elements ([Fehler 659999](https://bugzil.la/659999)).
- {{cssxref("min-width")}} und {{cssxref("min-height")}} unterstützen jetzt das Schlüsselwort `auto` für Flex-Elemente (und lösen sich zu `0` für andere Elemente auf) ([Firefox Fehler 763689](https://bugzil.la/763689)).

### API/DOM

- Zwei neue Eigenschaften `width` und `height` wurden zur {{domxref("HTMLInputElement")}}-Schnittstelle hinzugefügt ([Fehler 683855](https://bugzil.la/683855)).
- IndexedDB-Eigenschaften und -Methoden sind nun unpräfixiert ([Fehler 726378](https://bugzil.la/726378)).
- Die [Battery API](/de/docs/Web/API/Navigator/getBattery) ist jetzt unpräfixiert.
- Die Vibration-API ist nun unpräfixiert.
- Das nicht standardisierte `Keyboard`-Interface, mit dem Präfix `mozKeyboard`, hat jetzt die Methoden `Keyboard.setSelectedOption()` und `Keyboard.setValue()` sowie `Keyboard.onfocuschange`. _Dieses Interface, nur verfügbar für Firefox OS, wurde in Firefox 31 entfernt._
- Die globalen Objekte [`java`](/de/docs/LiveConnect_Reference/java) und [`Packages`](/de/docs/LiveConnect_Reference/Packages) wurden entfernt. Siehe [LiveConnect](/de/docs/LiveConnect).
- Der `CSSRule.type`, der mit {{domxref("CSSNamespaceRule")}} verknüpft ist, wurde von `UNKNOWN_RULE` (`0`) zu `NAMESPACE_RULE` (`10`) aktualisiert ([Fehler 765590](https://bugzil.la/765590)).
- WebSMS API: {{domxref("SmsRequest")}} wurde durch den allgemeineren `DOMRequest` ersetzt.
- Die nicht standardisierten Eigenschaften {{domxref("Element.scrollTopMax")}} und {{domxref("Element.scrollLeftMax")}} wurden hinzugefügt ([Firefox Fehler 766937](https://bugzil.la/766937)).
- Der zweite Parameter von {{domxref("Blob.blob", "Blob()")}}, wenn auf `null` oder `undefined` gesetzt, wird nun als leeres Dictionary behandelt ([Firefox Fehler 7691119](https://bugzil.la/7691119)).

### JavaScript

- [`Number`](/de/docs/Web/JavaScript/Reference/Global_Objects/Number)-Objekte bieten jetzt die Methoden `isFinite()`, `toInteger()` und `isInteger()` ([Fehler 761480](https://bugzil.la/761480), [Fehler 761495](https://bugzil.la/761495)).
- Der Harmony [Spread-Operator](https://web.archive.org/web/20161222114355/http://wiki.ecmascript.org/doku.php?id=harmony:spread) wird jetzt in [`Array`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array)-Initialisierern unterstützt ([Fehler 574130](https://bugzil.la/574130)). Beachten Sie, dass er noch nicht in Aufrufen unterstützt wird ([Fehler 762363](https://bugzil.la/762363)).
- Die experimentelle Methode {{jsxref("TypedArray.prototype.move()")}} wurde hinzugefügt (nur in den Aurora- und Nightly-Kanälen verfügbar) ([Firefox Fehler 730873](https://bugzil.la/730873)).

### WebGL

_Keine Änderung._

### SVG

_Keine Änderung._

### MathML

- Die Attribute `lspace` und `rspace` von {{MathMLElement("mo")}} besitzen jetzt korrekt `thickmathspace` als Standardwert.

### Netzwerk

### Entwicklerwerkzeuge

- Es gibt jetzt eine praktische Entwickler-Toolbar, die Sie unter "Tools" > "Web-Entwickler" > "Entwickler-Toolbar" aufrufen können oder indem Sie Strg-Shift-V (Cmd-Opt-V auf Mac OS X) drücken. Diese Toolbar bietet eine Befehlszeilenschnittstelle sowie Schaltflächen zum schnellen Zugriff auf nützliche Werkzeuge. Die grafische Befehlszeilenschnittstelle _GCLI_ lässt sich leicht erweitern und es wird in Zukunft zusätzliche Befehle geben. Geben Sie "help" ein, um eine Liste der unterstützten Befehle zu erhalten.
- Die Web-Konsole zeigt jetzt eine Fehleranzahl an, sodass Sie schnell sehen können, wie viel Arbeit Sie vor sich haben.
- Das Scratchpad bietet jetzt eine Liste der zuletzt geöffneten Dateien.

## Änderungen für Open Web App-Entwickler

- Die initiale [Unterstützung für Open Web Apps](/de/docs/Web/Apps/Getting_Started) wurde in den Desktop-Versionen von Firefox implementiert (das heißt, auf Windows, Mac OS X und Linux).

## Änderungen für Add-on- und Mozilla-Entwickler

### Schnittstellenänderungen

`nsIPrivateDOMEvent` wurde in `nsIDOMEvent` zusammengeführt. ([Firefox Fehler 761613](https://bugzil.la/761613))

#### Neue Schnittstellen

#### Entfernte Schnittstellen

Die folgenden Schnittstellen wurden entfernt.
