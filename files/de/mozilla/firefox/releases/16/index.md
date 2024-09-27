---
title: Firefox 16 für Entwickler
slug: Mozilla/Firefox/Releases/16
l10n:
  sourceCommit: 75d6ce4e2e752b8577012aea96abc766659ed3e2
---

{{FirefoxSidebar}}

Firefox 16 wurde am 9. Oktober 2012 veröffentlicht. Dieser Artikel listet wesentliche Änderungen auf, die nicht nur für Webentwickler, sondern auch für Firefox- und Gecko-Entwickler sowie Add-on-Entwickler nützlich sind.

## Änderungen für Webentwickler

### HTML

- Das {{HTMLElement("meter")}} Element wird jetzt unterstützt.
- Unterstützung für die HTML Microdata API wurde hinzugefügt. ([bug 591467](https://bugzil.la/591467))
- {{HTMLElement("canvas")}} unterstützt jetzt in allen Fällen das CSS `currentcolor`. ([Firefox bug 629882](https://bugzil.la/629882))
- {{HTMLElement("input")}} ermöglicht jetzt das Filtern basierend auf beliebigen MIME-Typen im `accept` ([Firefox bug 565274](https://bugzil.la/565274)).
- Zwei neue Attribute, `width` und `height`, wurden dem {{HTMLElement("input")}} Element hinzugefügt ([bug 683855](https://bugzil.la/683855)).

### CSS

- Unterstützung für die standardisierte, unpräfixte Version von [CSS-Animationen](/de/docs/Web/CSS/CSS_animations/Using_CSS_animations) wurde implementiert ([bug 762302](https://bugzil.la/762302)).
- Unterstützung für die umgekehrte Animationsrichtung (Schlüsselwörter `reverse` und `alternate-reverse` bei der {{cssxref("animation-direction")}} Eigenschaft) wurde hinzugefügt ([bug 655920](https://bugzil.la/655920)).
- Sie können jetzt die CSS-Eigenschaften {{cssxref("height")}} und {{cssxref("width")}} animieren.
- Die CSS-Eigenschaften {{cssxref("animation-duration")}} und {{cssxref("transition-duration")}} weisen nun negative Werte zurück (und behandeln sie nicht mehr als `0s`) ([bug 773102](https://bugzil.la/773102)).
- Unterstützung für die standardisierte, unpräfixte Version von [CSS-Transformationen](/de/docs/Web/CSS/CSS_transforms/Using_CSS_transforms) wurde implementiert ([bug 745523](https://bugzil.la/745523)). {{cssxref("&lt;length&gt;")}} kann nicht mehr für Übersetzungswerte in `matrix()` und `matrix3d()` verwendet werden ([Firefox bug 719054](https://bugzil.la/719054)).
- Unterstützung für die standardisierte, unpräfixte Version von [CSS-Verläufen](/de/docs/Web/CSS/CSS_images/Using_CSS_gradients) wurde implementiert. Beachten Sie, dass sich die Syntax seit der präfixierten Version erheblich geändert hat, daher sollten Sie sich darüber informieren ([bug 752187](https://bugzil.la/752187)).
- Die Implementierung von {{cssxref("box-sizing", "-moz-box-sizing")}} wurde aktualisiert, um auch auf Tabellenelemente anzuwenden ([bug 338554](https://bugzil.la/338554)).
- Unterstützung für die standardisierte, unpräfixte Version von {{cssxref("calc", "calc()")}} wurde implementiert ([bug 771678](https://bugzil.la/771678)).
- Der CSS-Datentyp {{cssxref("&lt;resolution&gt;")}} wurde erweitert, um `dppx` zu unterstützen ([bug 741644](https://bugzil.la/741644)).
- Auf dem Bildschirm repräsentieren [Media Queries](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries) `dppx`, `dpi` und `dpcm` nun Werte basierend auf CSS-Pixeln und nicht mehr auf den physischen Einheiten ([bug 771390](https://bugzil.la/771390)).
- Drei neue Pseudoklassen `:-moz-meter-optimum`, `:-moz-meter-sub-optimum` und `:-moz-meter-sub-sub-optimum` wurden hinzugefügt, um auf ein {{HTMLElement("meter")}} Element in einem bestimmten Zustand zuzugreifen/dieses zu stylen ([bug 660238](https://bugzil.la/660238)).
- Die Eigenschaft {{cssxref("appearance")}} erhält zwei neue Werte: `meterbar` und `meterchunk`. Sie repräsentieren Komponenten innerhalb des {{HTMLElement("meter")}} Elements ([bug 659999](https://bugzil.la/659999)).
- Die {{cssxref("min-width")}} und {{cssxref("min-height")}} unterstützen jetzt das Schlüsselwort `auto` für flexible Elemente (und lösen sich in `0` für andere Elemente auf) ([Firefox bug 763689](https://bugzil.la/763689)).

### API/DOM

- Zwei neue Eigenschaften `width` und `height` wurden der [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement) Schnittstelle hinzugefügt ([bug 683855](https://bugzil.la/683855)).
- IndexedDB-Eigenschaften und -Methoden sind jetzt unpräfixiert. ([bug 726378](https://bugzil.la/726378))
- Die [Battery API](/de/docs/Web/API/Navigator/getBattery) ist jetzt unpräfixiert.
- Die Vibration API ist jetzt unpräfixiert.
- Die nicht-standardisierte `Keyboard` Schnittstelle, präfixiert als `mozKeyboard`, beinhaltet jetzt die Methoden `Keyboard.setSelectedOption()` und `Keyboard.setValue()`, sowie das Ereignis `Keyboard.onfocuschange`. _Diese Schnittstelle, die nur für Firefox OS verfügbar war, wurde in Firefox 31 entfernt._
- Die globalen Objekte [`java`](/de/docs/LiveConnect_Reference/java) und [`Packages`](/de/docs/LiveConnect_Reference/Packages) wurden entfernt. Siehe [LiveConnect](/de/docs/LiveConnect).
- Der `CSSRule.type` assoziiert mit [`CSSNamespaceRule`](/de/docs/Web/API/CSSNamespaceRule) wurde von `UNKNOWN_RULE` (`0`) zu `NAMESPACE_RULE` (`10`) aktualisiert ([bug 765590](https://bugzil.la/765590)).
- WebSMS API: [`SmsRequest`](/de/docs/Web/API/SmsRequest) wurde durch die allgemeinere `DOMRequest` ersetzt.
- Die nicht-standardisierten, schreibgeschützten Eigenschaften [`Element.scrollTopMax`](/de/docs/Web/API/Element/scrollTopMax) und [`Element.scrollLeftMax`](/de/docs/Web/API/Element/scrollLeftMax) wurden hinzugefügt ([Firefox bug 766937](https://bugzil.la/766937)).
- Der zweite Parameter von [`Blob()`](/de/docs/Web/API/Blob/blob), wenn er auf `null` oder `undefined` gesetzt ist, wird jetzt als leeres Dictionary behandelt ([Firefox bug 7691119](https://bugzil.la/7691119)).

### JavaScript

- [`Number`](/de/docs/Web/JavaScript/Reference/Global_Objects/Number) Objekte bieten jetzt die Methoden `isFinite()`, `toInteger()` und `isInteger()`. ([bug 761480](https://bugzil.la/761480), [bug 761495](https://bugzil.la/761495))
- Der Harmony [Spread-Operator](https://web.archive.org/web/20161222114355/http://wiki.ecmascript.org/doku.php?id=harmony:spread) wird jetzt in [`Array`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array) Initialisierern unterstützt ([bug 574130](https://bugzil.la/574130)). Beachten Sie, dass er in Aufrufen noch nicht unterstützt wird ([bug 762363](https://bugzil.la/762363)).
- Die experimentelle Methode {{jsxref("TypedArray.prototype.move()")}} wurde hinzugefügt (verfügbar nur in Aurora- und Nightly-Kanälen) ([Firefox bug 730873](https://bugzil.la/730873)).

### WebGL

_Keine Änderung._

### SVG

_Keine Änderung._

### MathML

- Die `lspace` und `rspace` Attribute von {{MathMLElement("mo")}} werden jetzt korrekt auf `thickmathspace` voreingestellt.

### Netzwerk

### Entwicklerwerkzeuge

- Es gibt jetzt eine praktische Entwickler-Toolbar, auf die Sie über Werkzeuge > Webentwickler > Entwickler-Toolbar oder durch Drücken von Strg-Umschalt-V (Cmd-Opt-V auf Mac OS X) zugreifen können. Diese Toolbar bietet eine Befehlszeilenschnittstelle sowie Schaltflächen für den schnellen Zugriff auf nützliche Werkzeuge. Die grafische Befehlszeilenschnittstelle _GCLI_ ist leicht erweiterbar und es werden in Zukunft zusätzliche Befehle erwartet. Geben Sie "help" ein, um eine Liste der unterstützten Befehle zu erhalten.
- Die Webkonsole zeigt jetzt eine Fehleranzahl, damit Sie schnell sehen können, wie viel Arbeit auf Sie wartet.
- Das Notizblock bietet jetzt eine Liste der zuletzt geöffneten Dateien.

## Änderungen für Entwickler von Open Web Apps

- Die anfängliche [Unterstützung für Open Web Apps](/de/docs/Web/Apps/Getting_Started) wurde in den Desktop-Versionen von Firefox (d.h. auf Windows, Mac OS X und Linux) implementiert.

## Änderungen für Add-on- und Mozilla-Entwickler

### Interface-Änderungen

`nsIPrivateDOMEvent` wurde in `nsIDOMEvent` integriert. ([Firefox bug 761613](https://bugzil.la/761613))

#### Neue Schnittstellen

#### Entfernte Schnittstellen

Die folgenden Schnittstellen wurden entfernt.
