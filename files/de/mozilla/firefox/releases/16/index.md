---
title: Firefox 16 Versionshinweise für Entwickler
short-title: Firefox 16
slug: Mozilla/Firefox/Releases/16
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

Firefox 16 wurde am 9. Oktober 2012 veröffentlicht. Dieser Artikel listet wichtige Änderungen auf, die nicht nur für Webentwickler nützlich sind, sondern auch für Firefox- und Gecko-Entwickler sowie Add-on-Entwickler.

## Änderungen für Webentwickler

### HTML

- Das {{HTMLElement("meter")}}-Element wird nun unterstützt.
- Unterstützung für die HTML Microdata API wurde hinzugefügt. ([Bug 591467](https://bugzil.la/591467))
- {{HTMLElement("canvas")}} unterstützt nun `currentColor` in allen Fällen. ([Firefox Bug 629882](https://bugzil.la/629882))
- {{HTMLElement("input")}} erlaubt nun das Filtern basierend auf beliebigen MIME-Typen in `accept` ([Firefox Bug 565274](https://bugzil.la/565274)).
- Zwei neue Attribute, `width` und `height`, wurden dem {{HTMLElement("input")}}-Element hinzugefügt ([Bug 683855](https://bugzil.la/683855)).

### CSS

- Unterstützung für die standardmäßige, unpräfixierte Version von [CSS Animationen](/de/docs/Web/CSS/Guides/Animations/Using) wurde implementiert ([Bug 762302](https://bugzil.la/762302)).
- Unterstützung für die umgekehrte Animationsrichtung (Schlüsselwörter `reverse` und `alternate-reverse` auf der {{cssxref("animation-direction")}} Eigenschaft) wurde hinzugefügt. ([Bug 655920](https://bugzil.la/655920)).
- Sie können jetzt die CSS {{cssxref("height")}} und {{cssxref("width")}} Eigenschaften animieren.
- Die CSS-Eigenschaften {{cssxref("animation-duration")}} und {{cssxref("transition-duration")}} lehnen nun negative Werte ab (und behandeln sie nicht mehr als `0s`) ([Bug 773102](https://bugzil.la/773102)).
- Unterstützung für die standardmäßige, unpräfixierte Version von [CSS-Transformationen](/de/docs/Web/CSS/Guides/Transforms/Using) wurde implementiert ([Bug 745523](https://bugzil.la/745523)). {{cssxref("&lt;length&gt;")}} kann nicht mehr für Übersetzungswerte in `matrix()` und `matrix3d()` verwendet werden ([Firefox Bug 719054](https://bugzil.la/719054)).
- Unterstützung für die standardmäßige, unpräfixierte Version von [CSS-Gradienten](/de/docs/Web/CSS/Guides/Images/Using_gradients) wurde implementiert. Beachten Sie, dass sich die Syntax seit der Präfix-Version erheblich geändert hat, lesen Sie daher dazu nach ([Bug 752187](https://bugzil.la/752187)).
- Die {{cssxref("box-sizing", "-moz-box-sizing")}}-Implementierung wurde aktualisiert, um auch auf Tabellenzellen angewendet zu werden ([Bug 338554](https://bugzil.la/338554)).
- Unterstützung für die standardmäßige, unpräfixierte Version von {{cssxref("calc", "calc()")}} wurde implementiert ([Bug 771678](https://bugzil.la/771678)).
- Der {{cssxref("&lt;resolution&gt;")}} CSS-Datentyp wurde erweitert, um `dppx` zu unterstützen ([Bug 741644](https://bugzil.la/741644)).
- Auf dem Bildschirm, für [Medienabfragen](/de/docs/Web/CSS/Guides/Media_queries/Using), repräsentieren `dppx`, `dpi` und `dpcm` nun Werte basierend auf CSS-Pixeln und nicht mehr auf den physischen Einheiten ([Bug 771390](https://bugzil.la/771390)).
- Drei neue Pseudoklassen `:-moz-meter-optimum`, `:-moz-meter-sub-optimum` und `:-moz-meter-sub-sub-optimum` wurden hinzugefügt, um ein {{HTMLElement("meter")}}-Element in einem bestimmten Zustand anzusprechen/zu stylen ([Bug 660238](https://bugzil.la/660238)).
- Die {{cssxref("appearance")}} Eigenschaft erhält zwei neue Werte: `meterbar` und `meterchunk`. Sie repräsentieren Komponenten im {{HTMLElement("meter")}}-Element ([Bug 659999](https://bugzil.la/659999)).
- Die {{cssxref("min-width")}} und {{cssxref("min-height")}} unterstützen nun das `auto` Schlüsselwort für Flex-Elemente (und lösen sich zu `0` für andere Elemente auf) ([Firefox Bug 763689](https://bugzil.la/763689)).

### API/DOM

- Zwei neue Eigenschaften `width` und `height` wurden der [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement) Schnittstelle hinzugefügt ([Bug 683855](https://bugzil.la/683855)).
- IndexedDB-Eigenschaften und -Methoden wurden unpräfixiert. ([Bug 726378](https://bugzil.la/726378))
- Die [Battery API](/de/docs/Web/API/Navigator/getBattery) ist jetzt unpräfixiert.
- Die Vibration API wurde unpräfixiert.
- Die nicht standardisierte `Keyboard`-Schnittstelle, zuvor als `mozKeyboard` bekannt, hat jetzt die Methoden `Keyboard.setSelectedOption()` und `Keyboard.setValue()`, sowie `Keyboard.onfocuschange`. _Diese Schnittstelle, nur verfügbar für Firefox OS, wurde in Firefox 31 entfernt._
- Die globalen Objekte [`java`](https://web.archive.org/web/20201004062409/https://developer.mozilla.org/de/docs/Archive/Web/LiveConnect_Reference/java) und [`Packages`](https://web.archive.org/web/20201031083247/https://developer.mozilla.org/de/docs/Archive/Web/LiveConnect_Reference/Packages) wurden entfernt. Siehe [LiveConnect](https://web.archive.org/web/20210516230302/https://developer.mozilla.org/de/docs/Archive/Web/LiveConnect).
- Der `CSSRule.type` in Bezug auf [`CSSNamespaceRule`](/de/docs/Web/API/CSSNamespaceRule) wurde von `UNKNOWN_RULE` (`0`) auf `NAMESPACE_RULE` (`10`) aktualisiert ([Bug 765590](https://bugzil.la/765590)).
- WebSMS-API: `SmsRequest` wurde durch die allgemeinere `DOMRequest` ersetzt.
- Die nicht-standardisierten, nur lesbaren Eigenschaften [`Element.scrollTopMax`](/de/docs/Web/API/Element/scrollTopMax) und [`Element.scrollLeftMax`](/de/docs/Web/API/Element/scrollLeftMax) wurden hinzugefügt ([Firefox Bug 766937](https://bugzil.la/766937)).
- Der zweite Parameter von [`Blob()`](/de/docs/Web/API/Blob/Blob), wenn `null` oder `undefined` gesetzt, wird nun als leeres Wörterbuch behandelt ([Firefox Bug 7691119](https://bugzil.la/7691119)).

### JavaScript

- [`Number`](/de/docs/Web/JavaScript/Reference/Global_Objects/Number) Objekte bieten jetzt die Methoden `isFinite()`, `toInteger()` und `isInteger()`. ([Bug 761480](https://bugzil.la/761480), [Bug 761495](https://bugzil.la/761495))
- Der Harmony [Spread-Operator](https://web.archive.org/web/20161222114355/http://wiki.ecmascript.org/doku.php?id=harmony:spread) wird nun in [`Array`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array) Initialisierern unterstützt ([Bug 574130](https://bugzil.la/574130)). Beachten Sie, dass es noch nicht in Aufrufen unterstützt wird ([Bug 762363](https://bugzil.la/762363)).
- Die experimentelle Methode `TypedArray.prototype.move()` wurde hinzugefügt (nur in den Aurora- und Nightly-Kanälen verfügbar) ([Firefox Bug 730873](https://bugzil.la/730873)).

### WebGL

_Keine Änderung._

### SVG

_Keine Änderung._

### MathML

- Die Attribute `lspace` und `rspace` von {{MathMLElement("mo")}} setzen jetzt korrekt auf `thickmathspace` zurück.

### Netzwerk

### Entwicklerwerkzeuge

- Es gibt jetzt eine praktische Entwickler-Toolbar, die Sie über Tools > Web-Entwickler > Entwickler-Toolbar oder durch Drücken von Strg-Shift-V (Cmd-Opt-V auf Mac OS X) aufrufen können. Diese Toolbar bietet eine Befehlszeilenschnittstelle sowie Schaltflächen zum schnellen Zugriff auf nützliche Werkzeuge. Die grafische Befehlszeilenschnittstelle _GCLI_ ist einfach zu erweitern, und es werden in Zukunft zusätzliche Befehle erwartet. Geben Sie "help" ein, um eine Liste der unterstützten Befehle zu erhalten.
- Die Webkonsole zeigt jetzt eine Fehleranzahl an, damit Sie schnell sehen können, wie viel Arbeit Sie vor sich haben.
- Der Scratchpad bietet jetzt eine Liste der zuletzt geöffneten Dateien an.

## Änderungen für Entwickler von Open Web Apps

- Die anfängliche [Unterstützung für Open Web Apps](https://web.archive.org/web/20190117093115/https://developer.mozilla.org/de/docs/Web/Apps/Getting_Started) wurde in den Desktop-Versionen von Firefox (d.h. auf Windows, Mac OS X und Linux) implementiert.

## Änderungen für Add-on- und Mozilla-Entwickler

### Schnittstellenänderungen

`nsIPrivateDOMEvent` wurde in `nsIDOMEvent` integriert. ([Firefox Bug 761613](https://bugzil.la/761613))
