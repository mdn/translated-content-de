---
title: Firefox-16-Release-Notes für Entwickler
short-title: Firefox 16
slug: Mozilla/Firefox/Releases/16
l10n:
  sourceCommit: e3a2272d272f21ea38e5fff9bd6ccec2d0dfb1a8
---

Firefox 16 wurde am 9. Oktober 2012 veröffentlicht. Dieser Artikel listet wichtige Änderungen auf, die nicht nur für Webentwickler, sondern auch für Firefox- und Gecko-Entwickler sowie Add-on-Entwickler nützlich sind.

## Änderungen für Webentwickler

### Entwicklerwerkzeuge

- Es gibt jetzt eine praktische Entwickler-Symbolleiste, auf die Sie über Extras > Web-Entwickler > Entwickler-Symbolleiste oder durch Drücken von Strg-Umschalt-V (Cmd-Opt-V unter Mac OS X) zugreifen können. Diese Symbolleiste bietet eine Befehlszeilenschnittstelle sowie Schaltflächen für den schnellen Zugriff auf nützliche Werkzeuge. Die grafische Befehlszeilenschnittstelle _GCLI_ lässt sich leicht erweitern, und in Zukunft werden weitere Befehle erwartet. Geben Sie „help“ ein, um eine Liste der unterstützten Befehle zu erhalten.
- Die Web-Konsole zeigt jetzt eine Fehleranzahl an, sodass Sie schnell sehen können, wie viel Arbeit vor Ihnen liegt.
- Das Scratchpad bietet jetzt eine Liste der zuletzt geöffneten Dateien.

### HTML

- Das Element {{HTMLElement("meter")}} wird jetzt unterstützt.
- Unterstützung für die HTML-Microdata-API wurde hinzugefügt. ([Bug 591467](https://bugzil.la/591467))
- {{HTMLElement("canvas")}} unterstützt jetzt CSS `currentColor` in allen Fällen. ([Firefox-Bug 629882](https://bugzil.la/629882))
- {{HTMLElement("input")}} ermöglicht jetzt die Filterung anhand beliebiger MIME-Typen in `accept` ([Firefox-Bug 565274](https://bugzil.la/565274)).
- Dem Element {{HTMLElement("input")}} wurden zwei neue Attribute, `width` und `height`, hinzugefügt ([Bug 683855](https://bugzil.la/683855)).

### CSS

- Unterstützung für die standardmäßige, nicht präfixierte Version von [CSS Animations](/de/docs/Web/CSS/Guides/Animations/Using) wurde integriert ([Bug 762302](https://bugzil.la/762302)).
- Unterstützung für die umgekehrte Animationsrichtung (die Schlüsselwörter `reverse` und `alternate-reverse` für die Eigenschaft {{cssxref("animation-direction")}}) wurde hinzugefügt. ([Bug 655920](https://bugzil.la/655920)).
- Sie können jetzt die CSS-Eigenschaften {{cssxref("height")}} und {{cssxref("width")}} animieren.
- Die CSS-Eigenschaften {{cssxref("animation-duration")}} und {{cssxref("transition-duration")}} lehnen jetzt negative Werte ab (und behandeln sie nicht mehr als `0s`) ([Bug 773102](https://bugzil.la/773102)).
- Unterstützung für die standardmäßige, nicht präfixierte Version von [CSS Transforms](/de/docs/Web/CSS/Guides/Transforms/Using) wurde integriert ([Bug 745523](https://bugzil.la/745523)). {{cssxref("&lt;length&gt;")}} kann nicht mehr für Verschiebungswerte in `matrix()` und `matrix3d()` verwendet werden ([Firefox-Bug 719054](https://bugzil.la/719054)).
- Unterstützung für die standardmäßige, nicht präfixierte Version von [CSS Gradients](/de/docs/Web/CSS/Guides/Images/Using_gradients) wurde integriert. Beachten Sie, dass sich die Syntax seit der präfixierten Version erheblich geändert hat; Sie sollten sich daher darüber informieren ([Bug 752187](https://bugzil.la/752187)).
- Die Implementierung von {{cssxref("box-sizing", "-moz-box-sizing")}} wurde aktualisiert, sodass sie auch auf Tabellenzellen angewendet wird ([Bug 338554](https://bugzil.la/338554)).
- Unterstützung für die standardmäßige, nicht präfixierte Version von {{cssxref("calc", "calc()")}} wurde integriert ([Bug 771678](https://bugzil.la/771678)).
- Der CSS-Datentyp {{cssxref("&lt;resolution&gt;")}} wurde erweitert, um `dppx` zu unterstützen ([Bug 741644](https://bugzil.la/741644)).
- Bei [Media Queries](/de/docs/Web/CSS/Guides/Media_queries/Using) repräsentieren `dppx`, `dpi` und `dpcm` auf dem Bildschirm jetzt Werte basierend auf CSS-Pixeln und nicht mehr auf den physikalischen Einheiten ([Bug 771390](https://bugzil.la/771390)).
- Drei neue Pseudoklassen, `:-moz-meter-optimum`, `:-moz-meter-sub-optimum` und `:-moz-meter-sub-sub-optimum`, wurden hinzugefügt, um auf ein {{HTMLElement("meter")}}-Element in einem bestimmten Zustand zuzugreifen bzw. es zu formatieren ([Bug 660238](https://bugzil.la/660238)).
- Die Eigenschaft {{cssxref("appearance")}} erhält zwei neue Werte: `meterbar` und `meterchunk`. Sie repräsentieren Komponenten innerhalb des Elements {{HTMLElement("meter")}} ([Bug 659999](https://bugzil.la/659999)).
- {{cssxref("min-width")}} und {{cssxref("min-height")}} unterstützen jetzt das Schlüsselwort `auto` für Flex-Elemente (und werden für andere Elemente zu `0` aufgelöst) ([Firefox-Bug 763689](https://bugzil.la/763689)).

### API/DOM

- Der Schnittstelle [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement) wurden zwei neue Eigenschaften, `width` und `height`, hinzugefügt ([Bug 683855](https://bugzil.la/683855)).
- IndexedDB-Eigenschaften und -Methoden wurden von ihren Präfixen befreit. ([Bug 726378](https://bugzil.la/726378))
- Die [Battery API](/de/docs/Web/API/Navigator/getBattery) ist jetzt nicht präfixiert.
- Die Vibration API wurde von ihrem Präfix befreit.
- Die nicht standardmäßige, als `mozKeyboard` präfixierte Schnittstelle `Keyboard` verfügt jetzt über die Methoden `Keyboard.setSelectedOption()` und `Keyboard.setValue()` sowie über `Keyboard.onfocuschange`. _Diese Schnittstelle, die nur für Firefox OS verfügbar war, wurde in Firefox 31 entfernt._
- Die globalen Objekte [`java`](https://web.archive.org/web/20201004062409/https://developer.mozilla.org/de/docs/Archive/Web/LiveConnect_Reference/java) und [`Packages`](https://web.archive.org/web/20201031083247/https://developer.mozilla.org/de/docs/Archive/Web/LiveConnect_Reference/Packages) wurden entfernt. Siehe [LiveConnect](https://web.archive.org/web/20210516230302/https://developer.mozilla.org/de/docs/Archive/Web/LiveConnect).
- Der mit [`CSSNamespaceRule`](/de/docs/Web/API/CSSNamespaceRule) verknüpfte Wert `CSSRule.type` wurde von `UNKNOWN_RULE` (`0`) auf `NAMESPACE_RULE` (`10`) aktualisiert ([Bug 765590](https://bugzil.la/765590)).
- WebSMS API: `SmsRequest` wurde durch das allgemeinere `DOMRequest` ersetzt.
- Die nicht standardmäßigen schreibgeschützten Eigenschaften [`Element.scrollTopMax`](/de/docs/Web/API/Element/scrollTopMax) und [`Element.scrollLeftMax`](/de/docs/Web/API/Element/scrollLeftMax) wurden hinzugefügt ([Firefox-Bug 766937](https://bugzil.la/766937)).
- Der zweite Parameter von [`Blob()`](/de/docs/Web/API/Blob/Blob) wird jetzt, wenn er auf `null` oder `undefined` gesetzt ist, als leeres Dictionary behandelt ([Firefox-Bug 7691119](https://bugzil.la/7691119)).

### JavaScript

- [`Number`](/de/docs/Web/JavaScript/Reference/Global_Objects/Number)-Objekte bieten jetzt die Methoden `isFinite()`, `toInteger()` und `isInteger()`. ([Bug 761480](https://bugzil.la/761480), [Bug 761495](https://bugzil.la/761495))
- Der Harmony-[Spread-Operator](https://web.archive.org/web/20161222114355/http://wiki.ecmascript.org/doku.php?id=harmony:spread) wird jetzt in [`Array`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array)-Initialisierern unterstützt ([Bug 574130](https://bugzil.la/574130)). Beachten Sie, dass er in Aufrufen noch nicht unterstützt wird ([Bug 762363](https://bugzil.la/762363)).
- Die experimentelle Methode `TypedArray.prototype.move()` wurde hinzugefügt (nur in den Kanälen Aurora und Nightly verfügbar) ([Firefox-Bug 730873](https://bugzil.la/730873)).

### WebGL

_Keine Änderung._

### SVG

_Keine Änderung._

### MathML

- Die Attribute `lspace` und `rspace` von {{MathMLElement("mo")}} verwenden jetzt korrekt standardmäßig `thickmathspace`.

## Änderungen für Open-Web-App-Entwickler

- Die anfängliche Unterstützung für [Open Web Apps](https://web.archive.org/web/20190117093115/https://developer.mozilla.org/de/docs/Web/Apps/Getting_Started) wurde in den Desktop-Versionen von Firefox implementiert (also unter Windows, Mac OS X und Linux).

## Änderungen für Add-on- und Mozilla-Entwickler

### Schnittstellenänderungen

`nsIPrivateDOMEvent` wurde mit `nsIDOMEvent` zusammengeführt. ([Firefox-Bug 761613](https://bugzil.la/761613))
