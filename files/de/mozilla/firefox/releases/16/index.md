---
title: Firefox 16 für Entwickler
short-title: Firefox 16
slug: Mozilla/Firefox/Releases/16
l10n:
  sourceCommit: 635820782735cd00f71ce3929ff9377b091f8995
---

Firefox 16 wurde am 9. Oktober 2012 veröffentlicht. Dieser Artikel listet die wichtigsten Änderungen auf, die nicht nur für Web-Entwickler, sondern auch für Firefox- und Gecko-Entwickler sowie Add-on-Entwickler nützlich sind.

## Änderungen für Webentwickler

### HTML

- Das {{HTMLElement("meter")}}-Element wird jetzt unterstützt.
- Unterstützung für die HTML Microdata API wurde hinzugefügt. ([Bug 591467](https://bugzil.la/591467))
- {{HTMLElement("canvas")}} unterstützt jetzt den CSS-Wert `currentColor` in allen Fällen. ([Firefox Bug 629882](https://bugzil.la/629882))
- {{HTMLElement("input")}} ermöglicht jetzt das Filtern basierend auf beliebigen MIME-Typen im `accept`-Attribut ([Firefox Bug 565274](https://bugzil.la/565274)).
- Zwei neue Attribute, `width` und `height`, wurden dem {{HTMLElement("input")}}-Element hinzugefügt ([Bug 683855](https://bugzil.la/683855)).

### CSS

- Unterstützung für die standardmäßige, unpräfixierte Version von [CSS Animationen](/de/docs/Web/CSS/CSS_animations/Using_CSS_animations) wurde hinzugefügt ([Bug 762302](https://bugzil.la/762302)).
- Unterstützung für die umgekehrte Animationsrichtung (Schlüsselwörter `reverse` und `alternate-reverse` in der {{cssxref("animation-direction")}}-Eigenschaft) wurde hinzugefügt. ([Bug 655920](https://bugzil.la/655920)).
- Sie können jetzt die CSS-Eigenschaften {{cssxref("height")}} und {{cssxref("width")}} animieren.
- Die CSS-Eigenschaften {{cssxref("animation-duration")}} und {{cssxref("transition-duration")}} lehnen jetzt negative Werte ab (und behandeln diese nicht mehr als `0s`) ([Bug 773102](https://bugzil.la/773102)).
- Unterstützung für die standardmäßige, unpräfixierte Version von [CSS-Transformationen](/de/docs/Web/CSS/CSS_transforms/Using_CSS_transforms) wurde hinzugefügt ([Bug 745523](https://bugzil.la/745523)). {{cssxref("&lt;length&gt;")}} darf nicht mehr für Übersetzungswerte in `matrix()` und `matrix3d()` verwendet werden ([Firefox Bug 719054](https://bugzil.la/719054)).
- Unterstützung für die standardmäßige, unpräfixierte Version von [CSS-Gradienten](/de/docs/Web/CSS/CSS_images/Using_CSS_gradients) wurde hinzugefügt. Beachten Sie, dass sich die Syntax seit der präfixierten Version erheblich geändert hat, daher sollten Sie sich darüber informieren ([Bug 752187](https://bugzil.la/752187)).
- Die {{cssxref("box-sizing", "-moz-box-sizing")}}-Implementierung wurde aktualisiert, um auch auf Tabellenzellen anzuwenden ([Bug 338554](https://bugzil.la/338554)).
- Unterstützung für die standardmäßige, unpräfixierte Version von {{cssxref("calc", "calc()")}} wurde hinzugefügt ([Bug 771678](https://bugzil.la/771678)).
- Der CSS-Datentyp {{cssxref("&lt;resolution&gt;")}} wurde erweitert, um `dppx` zu unterstützen ([Bug 741644](https://bugzil.la/741644)).
- Auf dem Bildschirm repräsentieren [Media Queries](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries) die Werte `dppx`, `dpi` und `dpcm` jetzt basierend auf CSS-Pixeln und nicht mehr auf physischen Einheiten ([Bug 771390](https://bugzil.la/771390)).
- Drei neue Pseudoklassen `:-moz-meter-optimum`, `:-moz-meter-sub-optimum` und `:-moz-meter-sub-sub-optimum` wurden hinzugefügt, um auf ein {{HTMLElement("meter")}}-Element in einem bestimmten Zustand zuzugreifen/stylen ([Bug 660238](https://bugzil.la/660238)).
- Die {{cssxref("appearance")}}-Eigenschaft erhält zwei neue Werte: `meterbar` und `meterchunk`. Sie repräsentieren Komponenten innerhalb des {{HTMLElement("meter")}}-Elements ([Bug 659999](https://bugzil.la/659999)).
- Die {{cssxref("min-width")}} und {{cssxref("min-height")}} unterstützen jetzt das Schlüsselwort `auto` für Flex-Elemente (und lösen sich für andere Elemente zu `0` auf) ([Firefox Bug 763689](https://bugzil.la/763689)).

### API/DOM

- Zwei neue Eigenschaften `width` und `height` wurden dem [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement)-Interface hinzugefügt ([Bug 683855](https://bugzil.la/683855)).
- Eigenschaften und Methoden von IndexedDB wurden unpräfixiert. ([Bug 726378](https://bugzil.la/726378))
- Die [Battery API](/de/docs/Web/API/Navigator/getBattery) ist jetzt unpräfixiert.
- Die Vibration API wurde unpräfixiert.
- Das nicht standardmäßige `Keyboard`-Interface, als `mozKeyboard` präfixiert, hat jetzt die Methoden `Keyboard.setSelectedOption()` und `Keyboard.setValue()` sowie `Keyboard.onfocuschange`. _Dieses Interface, das nur für Firefox OS verfügbar ist, wurde in Firefox 31 entfernt._
- Die globalen Objekte [`java`](https://web.archive.org/web/20201004062409/https://developer.mozilla.org/de/docs/Archive/Web/LiveConnect_Reference/java) und [`Packages`](https://web.archive.org/web/20201031083247/https://developer.mozilla.org/de/docs/Archive/Web/LiveConnect_Reference/Packages) wurden entfernt. Siehe [LiveConnect](https://web.archive.org/web/20210516230302/https://developer.mozilla.org/de/docs/Archive/Web/LiveConnect).
- Der `CSSRule.type` im Zusammenhang mit [`CSSNamespaceRule`](/de/docs/Web/API/CSSNamespaceRule) wurde von `UNKNOWN_RULE` (`0`) auf `NAMESPACE_RULE` (`10`) aktualisiert ([Bug 765590](https://bugzil.la/765590)).
- WebSMS API: `SmsRequest` wurde durch den allgemeineren `DOMRequest` ersetzt.
- Die nicht standardmäßigen, schreibgeschützten Eigenschaften [`Element.scrollTopMax`](/de/docs/Web/API/Element/scrollTopMax) und [`Element.scrollLeftMax`](/de/docs/Web/API/Element/scrollLeftMax) wurden hinzugefügt ([Firefox Bug 766937](https://bugzil.la/766937)).
- Der zweite Parameter von [`Blob()`](/de/docs/Web/API/Blob/Blob), wenn auf `null` oder `undefined` gesetzt, wird jetzt als leeres Wörterbuch behandelt ([Firefox Bug 7691119](https://bugzil.la/7691119)).

### JavaScript

- [`Number`](/de/docs/Web/JavaScript/Reference/Global_Objects/Number)-Objekte bieten jetzt die Methoden `isFinite()`, `toInteger()` und `isInteger()`. ([Bug 761480](https://bugzil.la/761480), [Bug 761495](https://bugzil.la/761495))
- Der Harmony [Spread-Operator](https://web.archive.org/web/20161222114355/http://wiki.ecmascript.org/doku.php?id=harmony:spread) wird jetzt in [`Array`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array)-Initialisierern unterstützt ([Bug 574130](https://bugzil.la/574130)). Beachten Sie, dass er noch nicht in Aufrufen unterstützt wird ([Bug 762363](https://bugzil.la/762363)).
- Die experimentelle Methode `TypedArray.prototype.move()` wurde hinzugefügt (nur in Aurora- und Nightly-Kanälen verfügbar) ([Firefox Bug 730873](https://bugzil.la/730873)).

### WebGL

_Keine Änderung._

### SVG

_Keine Änderung._

### MathML

- Die Attribute `lspace` und `rspace` von {{MathMLElement("mo")}} setzen jetzt korrekt auf `thickmathspace` zurück.

### Netzwerk

### Entwicklerwerkzeuge

- Es gibt jetzt eine praktische Entwickler-Toolbar, die Sie über Werkzeuge > Webentwickler > Entwickler-Toolbar erreichen können, oder durch Drücken von Strg-Umschalt-V (Cmd-Opt-V auf Mac OS X). Diese Toolbar bietet eine Befehlszeilenschnittstelle sowie Schaltflächen zum schnellen Zugriff auf nützliche Werkzeuge. Die grafische Befehlszeilenschnittstelle _GCLI_ ist leicht erweiterbar, und es werden in Zukunft zusätzliche Befehle erwartet. Geben Sie "help" ein, um eine Liste der unterstützten Befehle zu erhalten.
- Die Webkonsole zeigt jetzt eine Fehleranzahl an, sodass Sie schnell sehen können, wie viel Arbeit Sie vor sich haben.
- Das Scratchpad bietet jetzt eine Liste der zuletzt geöffneten Dateien.

## Änderungen für Entwickler von Open Web Apps

- Erste [Open Web App-Unterstützung](https://web.archive.org/web/20190117093115/https://developer.mozilla.org/de/docs/Web/Apps/Getting_Started) wurde in den Desktop-Versionen von Firefox implementiert (d.h. unter Windows, Mac OS X und Linux).

## Änderungen für Add-on- und Mozilla-Entwickler

### Schnittstellenänderungen

`nsIPrivateDOMEvent` wurde in `nsIDOMEvent` integriert. ([Firefox Bug 761613](https://bugzil.la/761613))
