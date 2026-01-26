---
title: Firefox 16 Versionshinweise für Entwickler
short-title: Firefox 16
slug: Mozilla/Firefox/Releases/16
l10n:
  sourceCommit: 83f4e64da466670c3700110da364546253eae127
---

Firefox 16 wurde am 9. Oktober 2012 veröffentlicht. Dieser Artikel listet wichtige Änderungen auf, die nicht nur für Webentwickler, sondern auch für Firefox- und Gecko-Entwickler sowie Add-on-Entwickler nützlich sind.

## Änderungen für Webentwickler

### Entwickler-Tools

- Es gibt jetzt eine praktische Entwickler-Toolbar, die Sie unter Werkzeuge > Webentwickler > Entwickler-Toolbar aufrufen können, oder indem Sie Ctrl-Shift-V (Cmd-Opt-V auf Mac OS X) drücken. Diese Toolbar bietet eine Befehlszeilenschnittstelle sowie Schaltflächen für den schnellen Zugriff auf nützliche Werkzeuge. Die grafische Befehlszeilenschnittstelle _GCLI_ ist einfach zu erweitern und es sind in Zukunft zusätzliche Befehle zu erwarten. Geben Sie "help" ein, um eine Liste der unterstützten Befehle zu erhalten.
- Die Webkonsole zeigt nun eine Fehleranzahl an, sodass Sie schnell sehen können, wie viel Arbeit Sie vor sich haben.
- Der Scratchpad bietet jetzt eine Liste der zuletzt geöffneten Dateien an.

### HTML

- Das {{HTMLElement("meter")}}-Element wird jetzt unterstützt.
- Unterstützung für die HTML Microdata API wurde hinzugefügt. ([bug 591467](https://bugzil.la/591467))
- {{HTMLElement("canvas")}} unterstützt jetzt das CSS `currentColor` in allen Fällen. ([Firefox bug 629882](https://bugzil.la/629882))
- {{HTMLElement("input")}} erlaubt jetzt das Filtern basierend auf beliebigen Medientypen im `accept`-Attribut ([Firefox bug 565274](https://bugzil.la/565274)).
- Zwei neue Attribute, `width` und `height`, wurden dem {{HTMLElement("input")}}-Element hinzugefügt ([bug 683855](https://bugzil.la/683855)).

### CSS

- Unterstützung für die standardmäßige, unpräfixte Version von [CSS-Animationen](/de/docs/Web/CSS/Guides/Animations/Using) wurde hinzugefügt ([bug 762302](https://bugzil.la/762302)).
- Unterstützung für die Umkehrung der Animationsrichtung (Schlüsselwörter `reverse` und `alternate-reverse` für die {{cssxref("animation-direction")}}-Eigenschaft) wurde hinzugefügt. ([bug 655920](https://bugzil.la/655920)).
- Sie können nun die CSS-Eigenschaften {{cssxref("height")}} und {{cssxref("width")}} animieren.
- Die CSS-Eigenschaften {{cssxref("animation-duration")}} und {{cssxref("transition-duration")}} lehnen jetzt negative Werte ab (und behandeln sie nicht mehr als `0s`) ([bug 773102](https://bugzil.la/773102)).
- Unterstützung für die standardmäßige, unpräfixte Version von [CSS-Transformierungen](/de/docs/Web/CSS/Guides/Transforms/Using) wurde hinzugefügt ([bug 745523](https://bugzil.la/745523)). {{cssxref("&lt;length&gt;")}} kann nicht mehr für Übersetzungswerte in `matrix()` und `matrix3d()` verwendet werden ([Firefox bug 719054](https://bugzil.la/719054)).
- Unterstützung für die standardmäßige, unpräfixte Version von [CSS-Gradienten](/de/docs/Web/CSS/Guides/Images/Using_gradients) wurde hinzugefügt. Beachten Sie, dass sich die Syntax seit der präfixierten Version erheblich geändert hat, daher sollten Sie sich hierzu informieren ([bug 752187](https://bugzil.la/752187)).
- Die {{cssxref("box-sizing", "-moz-box-sizing")}}-Implementation wurde aktualisiert, um auch auf Tabellenzellen anzuwenden ([bug 338554](https://bugzil.la/338554)).
- Unterstützung für die standardmäßige, unpräfixte Version von {{cssxref("calc", "calc()")}} wurde hinzugefügt ([bug 771678](https://bugzil.la/771678)).
- Der CSS-Datentyp {{cssxref("&lt;resolution&gt;")}} wurde erweitert, um `dppx` zu unterstützen ([bug 741644](https://bugzil.la/741644)).
- Auf dem Bildschirm repräsentieren [Media-Queries](/de/docs/Web/CSS/Guides/Media_queries/Using) `dppx`, `dpi`, und `dpcm` nun Werte basierend auf CSS-Pixeln und nicht mehr auf physischen Einheiten ([bug 771390](https://bugzil.la/771390)).
- Drei neue Pseudoklassen `:-moz-meter-optimum`, `:-moz-meter-sub-optimum` und `:-moz-meter-sub-sub-optimum` wurden hinzugefügt, um auf ein {{HTMLElement("meter")}}-Element in einem bestimmten Zustand zuzugreifen bzw. es zu stylen ([bug 660238](https://bugzil.la/660238)).
- Die {{cssxref("appearance")}}-Eigenschaft erhält zwei neue Werte: `meterbar` und `meterchunk`. Sie repräsentieren Komponenten innerhalb des {{HTMLElement("meter")}}-Elements ([bug 659999](https://bugzil.la/659999)).
- Die {{cssxref("min-width")}} und {{cssxref("min-height")}} unterstützen nun das `auto`-Schlüsselwort für Flex-Items (und lösen sich für andere Elemente zu `0` auf) ([Firefox bug 763689](https://bugzil.la/763689)).

### API/DOM

- Zwei neue Eigenschaften `width` und `height` wurden dem [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement)-Interface hinzugefügt ([bug 683855](https://bugzil.la/683855)).
- IndexedDB-Eigenschaften und -Methoden sind nun unpräfixiert. ([bug 726378](https://bugzil.la/726378))
- Die [Battery API](/de/docs/Web/API/Navigator/getBattery) ist jetzt unpräfixiert.
- Die Vibration API ist nun unpräfixiert.
- Das nicht-standardisierte `Keyboard`-Interface, präfixiert als `mozKeyboard`, hat nun die Methoden `Keyboard.setSelectedOption()` und `Keyboard.setValue()`, sowie das `Keyboard.onfocuschange`. _Dieses Interface, das nur für Firefox OS verfügbar war, wurde in Firefox 31 entfernt._
- Die globalen Objekte [`java`](https://web.archive.org/web/20201004062409/https://developer.mozilla.org/de/docs/Archive/Web/LiveConnect_Reference/java) und [`Packages`](https://web.archive.org/web/20201031083247/https://developer.mozilla.org/de/docs/Archive/Web/LiveConnect_Reference/Packages) wurden entfernt. Siehe [LiveConnect](https://web.archive.org/web/20210516230302/https://developer.mozilla.org/de/docs/Archive/Web/LiveConnect).
- Der `CSSRule.type` in Verbindung mit [`CSSNamespaceRule`](/de/docs/Web/API/CSSNamespaceRule) wurde von `UNKNOWN_RULE` (`0`) zu `NAMESPACE_RULE` (`10`) aktualisiert ([bug 765590](https://bugzil.la/765590)).
- WebSMS API: `SmsRequest` wurde durch das allgemeinere `DOMRequest` ersetzt.
- Die nicht-standardisierten, schreibgeschützten Eigenschaften [`Element.scrollTopMax`](/de/docs/Web/API/Element/scrollTopMax) und [`Element.scrollLeftMax`](/de/docs/Web/API/Element/scrollLeftMax) wurden hinzugefügt ([Firefox bug 766937](https://bugzil.la/766937)).
- Der zweite Parameter der [`Blob()`](/de/docs/Web/API/Blob/Blob) wird jetzt, wenn auf `null` oder `undefined` gesetzt, als leeres Dictionary behandelt ([Firefox bug 7691119](https://bugzil.la/7691119)).

### JavaScript

- [`Number`](/de/docs/Web/JavaScript/Reference/Global_Objects/Number)-Objekte bieten jetzt die Methoden `isFinite()`, `toInteger()` und `isInteger()`. ([bug 761480](https://bugzil.la/761480), [bug 761495](https://bugzil.la/761495))
- Der Harmony [spread operator](https://web.archive.org/web/20161222114355/http://wiki.ecmascript.org/doku.php?id=harmony:spread) wird jetzt in [`Array`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array)-Initialisierern unterstützt ([bug 574130](https://bugzil.la/574130)). Beachten Sie, dass er in Aufrufen noch nicht unterstützt wird ([bug 762363](https://bugzil.la/762363)).
- Die experimentelle Methode `TypedArray.prototype.move()` wurde hinzugefügt (verfügbar nur in den Aurora- und Nightly-Kanälen) ([Firefox bug 730873](https://bugzil.la/730873)).

### WebGL

_Keine Änderungen._

### SVG

_Keine Änderungen._

### MathML

- Die Attribute `lspace` und `rspace` von {{MathMLElement("mo")}} haben jetzt korrekt `thickmathspace` als Standardwert.

## Änderungen für Entwickler von Open Web Apps

- Die anfängliche [Open Web App-Unterstützung](https://web.archive.org/web/20190117093115/https://developer.mozilla.org/de/docs/Web/Apps/Getting_Started) wurde in den Desktop-Versionen von Firefox (also auf Windows, Mac OS X und Linux) implementiert.

## Änderungen für Add-on- und Mozilla-Entwickler

### Schnittstellenänderungen

`nsIPrivateDOMEvent` wurde in `nsIDOMEvent` zusammengeführt. ([Firefox bug 761613](https://bugzil.la/761613))
