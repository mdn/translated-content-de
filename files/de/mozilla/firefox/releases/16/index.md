---
title: Firefox 16 für Entwickler
slug: Mozilla/Firefox/Releases/16
l10n:
  sourceCommit: 6d311a5f07c97dbcd7bb9a6d49c2fe820a228659
---

{{FirefoxSidebar}}

Firefox 16 wurde am 9. Oktober 2012 veröffentlicht. Dieser Artikel listet wichtige Änderungen auf, die nicht nur für Webentwickler, sondern auch für Firefox- und Gecko-Entwickler sowie Add-on-Entwickler nützlich sind.

## Änderungen für Webentwickler

### HTML

- Das {{HTMLElement("meter")}} Element wird jetzt unterstützt.
- Unterstützung für die HTML Microdata API wurde hinzugefügt. ([Bug 591467](https://bugzil.la/591467))
- {{HTMLElement("canvas")}} unterstützt jetzt in allen Fällen das CSS `currentcolor`. ([Firefox Bug 629882](https://bugzil.la/629882))
- {{HTMLElement("input")}} erlaubt nun die Filterung basierend auf beliebigen MIME-Typen im `accept` Attribut ([Firefox Bug 565274](https://bugzil.la/565274)).
- Zwei neue Attribute, `width` und `height`, wurden dem {{HTMLElement("input")}} Element hinzugefügt ([Bug 683855](https://bugzil.la/683855)).

### CSS

- Unterstützung für die standardisierte, unpräfixierte Version von [CSS Animations](/de/docs/Web/CSS/CSS_animations/Using_CSS_animations) wurde implementiert ([Bug 762302](https://bugzil.la/762302)).
- Unterstützung für die umgekehrte Animationsrichtung (Schlüsselwörter `reverse` und `alternate-reverse` auf der {{cssxref("animation-direction")}} Eigenschaft) wurde hinzugefügt. ([Bug 655920](https://bugzil.la/655920)).
- Sie können jetzt die CSS {{cssxref("height")}} und {{cssxref("width")}} Eigenschaften animieren.
- Die {{cssxref("animation-duration")}} und {{cssxref("transition-duration")}} CSS-Eigenschaften lehnen jetzt negative Werte ab (und behandeln sie nicht mehr als `0s`) ([Bug 773102](https://bugzil.la/773102)).
- Unterstützung für die standardisierte, unpräfixierte Version von [CSS Transforms](/de/docs/Web/CSS/CSS_transforms/Using_CSS_transforms) wurde implementiert ([Bug 745523](https://bugzil.la/745523)). {{cssxref("&lt;length&gt;")}} kann nicht mehr für Übersetzungswerte in `matrix()` und `matrix3d()` verwendet werden ([Firefox Bug 719054](https://bugzil.la/719054)).
- Unterstützung für die standardisierte, unpräfixierte Version von [CSS Gradients](/de/docs/Web/CSS/CSS_images/Using_CSS_gradients) wurde implementiert. Beachten Sie, dass sich die Syntax seit der vorgeprägten Version erheblich geändert hat, lesen Sie dies daher bitte nach ([Bug 752187](https://bugzil.la/752187)).
- Die {{cssxref("box-sizing", "-moz-box-sizing")}} Implementierung wurde aktualisiert, um auch auf Tabellenzellen anzuwenden ([Bug 338554](https://bugzil.la/338554)).
- Unterstützung für die standardisierte, unpräfixierte Version von {{cssxref("calc", "calc()")}} wurde implementiert ([Bug 771678](https://bugzil.la/771678)).
- Der {{cssxref("&lt;resolution&gt;")}} CSS-Datentyp wurde erweitert, um `dppx` zu unterstützen ([Bug 741644](https://bugzil.la/741644)).
- Auf dem Bildschirm stellen [media queries](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries) `dppx`, `dpi` und `dpcm` jetzt Werte basierend auf CSS-Pixeln dar und nicht mehr mit den physischen Einheiten ([Bug 771390](https://bugzil.la/771390)).
- Drei neue Pseudoklassen `:-moz-meter-optimum`, `:-moz-meter-sub-optimum` und `:-moz-meter-sub-sub-optimum` wurden hinzugefügt, um ein {{HTMLElement("meter")}} Element in einem bestimmten Zustand zu stylen/zugreifen ([Bug 660238](https://bugzil.la/660238)).
- Die {{cssxref("appearance")}} Eigenschaft erhält zwei neue Werte: `meterbar` und `meterchunk`. Sie stellen Komponenten im Inneren des {{HTMLElement("meter")}} Elements dar ([Bug 659999](https://bugzil.la/659999)).
- Die {{cssxref("min-width")}} und {{cssxref("min-height")}} unterstützen jetzt das Schlüsselwort `auto` für Flex-Items (und lösen sich zu `0` für andere Items auf) ([Firefox Bug 763689](https://bugzil.la/763689)).

### API/DOM

- Zwei neue Eigenschaften `width` und `height` wurden dem [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement) Interface hinzugefügt ([Bug 683855](https://bugzil.la/683855)).
- IndexedDB Eigenschaften und Methoden wurden unpräfixiert. ([Bug 726378](https://bugzil.la/726378))
- Die [Battery API](/de/docs/Web/API/Navigator/getBattery) ist jetzt unpräfixiert.
- Die Vibration API wurde unpräfixiert.
- Das nicht standardisierte `Keyboard` Interface, als `mozKeyboard` vorgeprägt, hat jetzt die Methoden `Keyboard.setSelectedOption()` und `Keyboard.setValue()`, sowie das `Keyboard.onfocuschange`. _Dieses Interface, nur für Firefox OS verfügbar, wurde in Firefox 31 entfernt._
- Die [`java`](/de/docs/LiveConnect_Reference/java) und [`Packages`](/de/docs/LiveConnect_Reference/Packages) globale Objekte wurden entfernt. Siehe [LiveConnect](/de/docs/LiveConnect).
- Der `CSSRule.type` Wert, der mit [`CSSNamespaceRule`](/de/docs/Web/API/CSSNamespaceRule) assoziiert ist, wurde von `UNKNOWN_RULE` (`0`) auf `NAMESPACE_RULE` (`10`) aktualisiert ([Bug 765590](https://bugzil.la/765590)).
- WebSMS API: `SmsRequest` wurde durch das allgemeinere `DOMRequest` ersetzt.
- Die nicht standardisierten [`Element.scrollTopMax`](/de/docs/Web/API/Element/scrollTopMax) und [`Element.scrollLeftMax`](/de/docs/Web/API/Element/scrollLeftMax) lese-only Eigenschaften wurden hinzugefügt ([Firefox Bug 766937](https://bugzil.la/766937)).
- Der zweite Parameter von [`Blob()`](/de/docs/Web/API/Blob/Blob), wenn er auf `null` oder `undefined` gesetzt ist, wird jetzt als leeres Dictionary behandelt ([Firefox Bug 7691119](https://bugzil.la/7691119)).

### JavaScript

- [`Number`](/de/docs/Web/JavaScript/Reference/Global_Objects/Number) Objekte bieten jetzt die Methoden `isFinite()`, `toInteger()` und `isInteger()`. ([Bug 761480](https://bugzil.la/761480), [Bug 761495](https://bugzil.la/761495))
- Der Harmony [spread operator](https://web.archive.org/web/20161222114355/http://wiki.ecmascript.org/doku.php?id=harmony:spread) wird jetzt in [`Array`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array) Initialisierern unterstützt ([Bug 574130](https://bugzil.la/574130)). Beachten Sie, dass er noch nicht in Aufrufen unterstützt wird ([Bug 762363](https://bugzil.la/762363)).
- Die experimentelle Methode `TypedArray.prototype.move()` wurde hinzugefügt (nur in Aurora und Nightly Kanälen verfügbar) ([Firefox Bug 730873](https://bugzil.la/730873)).

### WebGL

_Keine Änderung._

### SVG

_Keine Änderung._

### MathML

- Die `lspace` und `rspace` Attribute von {{MathMLElement("mo")}} standardmäßig jetzt korrekt auf `thickmathspace`.

### Netzwerk

### Entwicklerwerkzeuge

- Es gibt jetzt eine praktische Entwicklertoolleiste, auf die Sie zugreifen können, indem Sie zu Werkzeuge > Web-Entwickler > Entwicklertoolleiste gehen oder durch Drücken von Strg-Umschalt-V (Cmd-Opt-V auf Mac OS X). Diese Toolleiste bietet eine Befehlszeilenschnittstelle sowie Schaltflächen für den schnellen Zugriff auf nützliche Werkzeuge. Die grafische Befehlszeilenschnittstelle _GCLI_ ist leicht erweiterbar, und es werden in Zukunft zusätzliche Befehle erwartet. Geben Sie "help" ein, um eine Liste der unterstützten Befehle zu erhalten.
- Die Web-Konsole zeigt jetzt eine Fehleranzahl an, sodass Sie schnell sehen können, wie viel Arbeit noch vor Ihnen liegt.
- Die Scratchpad bietet jetzt eine Liste der zuletzt geöffneten Dateien.

## Änderungen für Open Web App Entwickler

- Erste [Open Web App Unterstützung](/de/docs/Web/Apps/Getting_Started) wurde in den Desktop-Versionen von Firefox (d.h. unter Windows, Mac OS X und Linux) implementiert.

## Änderungen für Add-on und Mozilla Entwickler

### Schnittstellenänderungen

`nsIPrivateDOMEvent` wurde in `nsIDOMEvent` integriert. ([Firefox Bug 761613](https://bugzil.la/761613))

#### Neue Schnittstellen

#### Entfernte Schnittstellen

Die folgenden Schnittstellen wurden entfernt.
