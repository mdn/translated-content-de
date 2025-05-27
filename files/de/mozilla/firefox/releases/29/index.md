---
title: Firefox 29 für Entwickler
slug: Mozilla/Firefox/Releases/29
l10n:
  sourceCommit: cb25e0acbd9f0af27c4a99965cb962230d49a35d
---

{{FirefoxSidebar}}

Firefox 29 wurde am 29. April 2014 veröffentlicht. Dieser Artikel listet wichtige Änderungen auf, die nicht nur für Webentwickler nützlich sind, sondern auch für Entwickler von Firefox und Gecko sowie für Add-on-Entwickler.

## Änderungen für Webentwickler

### Entwicklerwerkzeuge

Wichtige Änderungen umfassen:

- Stark verbessertes Webkonsole: Arrays werden inline angezeigt, ohne dass sie zum Inspektor auf der rechten Seite gebracht werden müssen, Fensterobjekte zeigen ihre URL, usw.
- Die [console API](/de/docs/Web/API/Console_API) wurde zu Webarbeitern hinzugefügt ([Bug 620935](https://bugzil.la/620935)). Jetzt können Sie Nachrichten von Webarbeitern an die Webkonsole senden.
- Das [Network Monitor](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/index.html) Werkzeug zeigt jetzt Leistungsstatistiken anhand von Tortendiagrammen an ([Firefox-Bug 846601](https://bugzil.la/846601)).
- Im [Inspector](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/index.html) sind jetzt Vorschautooltips für CSS-Transformationen verfügbar ([Firefox-Bug 726427](https://bugzil.la/726427)).
- DOM-Elemente, die im Debugger und in der Konsole zu sehen sind, können direkt über die neuen Schaltflächen rechts von der Variablenliste entfernt oder inspiziert werden.
- Eine CSS-Quellkarte wird jetzt im [Style-Editor](https://firefox-source-docs.mozilla.org/devtools-user/style_editor/index.html) unterstützt ([Firefox-Bug 926014](https://bugzil.la/926014)).
- Automatische Vervollständigung von CSS-Eigenschaften und -Werten wurde dem [Style-Editor](https://firefox-source-docs.mozilla.org/devtools-user/style_editor/index.html) hinzugefügt ([Firefox-Bug 717369](https://bugzil.la/717369)).

_Siehe den [Mozilla Hacks Blogbeitrag](https://hacks.mozilla.org/2014/02/css-source-map-support-network-performance-analysis-more-firefox-developer-tools-episode-29/) für Details und andere kleinere Änderungen._

### CSS

- [CSS-Variablen](/de/docs/Web/CSS/CSS_cascading_variables/Using_CSS_custom_properties) wurden implementiert ([Firefox-Bug 773296](https://bugzil.la/773296)). Der Artikel [CSS Variables in Firefox Nightly](https://hacks.mozilla.org/2013/12/css-variables-in-firefox-nightly/) auf Mozilla Hacks enthält weitere Details. Sie sind standardmäßig nur in Nicht-Veröffentlichungsversionen aktiviert (in Veröffentlichungen ändern Sie die Einstellung `layout.css.variables.enabled` zu `true`, wenn Sie sie ausprobieren möchten).
- Flexboxen unterstützen jetzt {{cssxref("visibility", "visibility: collapse")}} ([Firefox-Bug 783470](https://bugzil.la/783470)).
- Die Eigenschaft {{cssxref("box-sizing")}} wurde ohne Präfix implementiert ([Firefox-Bug 243412](https://bugzil.la/243412)).
- Die Eigenschaft {{cssxref("will-change")}} wurde hinzugefügt, als Hinweis darauf, dass etwas animiert wird. Die Einstellung `layout.css.will-change.enabled` muss auf `true` gesetzt werden, um sie zu aktivieren. ([Firefox-Bug 940842](https://bugzil.la/940842))
- Wissenschaftliche Exponentialnotation, wie `3e1` oder `10e+0`, wird jetzt für {{cssxref("&lt;number&gt;")}} Werte und deren Ableitungen wie {{cssxref("&lt;percentage&gt;")}} und Einheitwerte unterstützt, aber nicht für {{cssxref("&lt;integer&gt;")}} ([Firefox-Bug 964529](https://bugzil.la/964529)).
- Bilder vom Typ {{cssxref("&lt;gradient&gt;")}} werden jetzt in {{cssxref("border-image")}} unterstützt ([Firefox-Bug 709587](https://bugzil.la/709587)).
- Die Eigenschaft {{cssxref("touch-action")}} wurde implementiert. Sie ist standardmäßig nicht aktiviert; die Einstellung `layout.css.touch_action.enabled` steuert sie. ([Firefox-Bug 795567](https://bugzil.la/795567))
- Redundanter Standardstil für das \<pre>-Element wurde aus quirk.css entfernt ([Firefox-Bug 948914](https://bugzil.la/948914)).
- Fallback für CSS-Variablen fehlerhaft implementiert (primäre Zyklen) ([Firefox-Bug 950497](https://bugzil.la/950497)).
- @supports-Bedingungen mit Tokens nach der Priorität einer Deklaration sollten auf false evaluiert werden ([Firefox-Bug 909170](https://bugzil.la/909170)).

### HTML

- `<input type=color>` und `<input type=number>` sind standardmäßig verfügbar.
- Unterstützung für das nicht standardisierte `<pre cols>` wurde entfernt, ebenso wie der Layout-Effekt von `<pre wrap>`. Beide Effekte können und sollten mit CSS erreicht werden. ([Firefox-Bug 949879](https://bugzil.la/949879))

### JavaScript

- Neue ECMAScript 2015-String-Methoden: {{jsxref("String.prototype.codePointAt()")}} und {{jsxref("String.prototype.fromCodePoint()")}} wurden implementiert ([Firefox-Bug 918879](https://bugzil.la/918879)).
- Die [ECMAScript Internationalization API (ECMA-402)](https://402.ecma-international.org/1.0/) wurde implementiert und ist jetzt standardmäßig im Firefox Desktop aktiviert ([Firefox-Bug 853301](https://bugzil.la/853301)):

  - Neue Objekte im neuen {{jsxref("Intl")}} Objektnamensraum:

    - {{jsxref("Intl/Collator", "Intl.Collator")}}
    - {{jsxref("Intl/DateTimeFormat", "Intl.DateTimeFormat")}}
    - {{jsxref("Intl/NumberFormat", "Intl.NumberFormat")}}

  - Die folgenden Methoden von {{jsxref("String")}}, {{jsxref("Number")}} und {{jsxref("Date")}} wurden aktualisiert, um die Argumente `locales` und `options` gemäß ECMA-402 zu beinhalten:

    - {{jsxref("String.prototype.localeCompare()")}}
    - {{jsxref("Number.prototype.toLocaleString()")}}
    - {{jsxref("Date.prototype.toLocaleString()")}}
    - {{jsxref("Date.prototype.toLocaleDateString()")}}
    - {{jsxref("Date.prototype.toLocaleTimeString()")}}

- Um der aktualisierten ECMAScript 2015 Entwurfsspezifikation zu entsprechen, behandeln die {{jsxref("Map")}} und {{jsxref("Set")}} Objekte `-0` und `+0` jetzt als identisch, wenn Schlüssel und Wertgleichheit überprüft werden.
- `Promise` ist standardmäßig aktiviert ([Firefox-Bug 918806](https://bugzil.la/918806)).
- Abgeschlossene [Generatoren](/de/docs/Web/JavaScript/Reference/Statements/function*) geben jetzt ein `IteratorResult` Objekt zurück, statt einen Fehler zu werfen ([Firefox-Bug 958951](https://bugzil.la/958951)).
- Ein fehlerhafter JSON-String, der von {{jsxref("JSON.parse()")}} geparst wird, liefert jetzt eine detaillierte Fehlermeldung mit Zeilen- und Spaltennummer, die den Parserfehler verursacht hat. Dies ist nützlich beim Debuggen großer JSON-Daten.
- Die Methode {{jsxref("ArrayBuffer.isView()")}} wurde hinzugefügt ([Firefox-Bug 896105](https://bugzil.la/896105)).

### Schnittstellen/APIs/DOM

- Ein neuer Typ von Arbeitern, [`SharedWorker`](/de/docs/Web/API/SharedWorker), ist jetzt standardmäßig verfügbar ([Firefox-Bug 924089](https://bugzil.la/924089)).
- Die [`URL`](/de/docs/Web/API/URL) Schnittstelle unterstützt jetzt die [`searchParams`](/de/docs/Web/API/URL/searchParams) Eigenschaft, die ein [`URLSearchParams`](/de/docs/Web/API/URLSearchParams) Objekt zurückgibt, das die Änderung der Suchparameter einer URL ermöglicht ([Firefox-Bug 887836](https://bugzil.la/887836)). Der [`URLSearchParams()`](/de/docs/Web/API/URLSearchParams/URLSearchParams) Konstruktor ermöglicht einfachere Verarbeitung von Abfragezeichenfolgen.
- Die [`navigator.onLine`](/de/docs/Web/API/WorkerNavigator/onLine) Eigenschaft wird jetzt in [`WorkerNavigator`](/de/docs/Web/API/WorkerNavigator) unterstützt und ermöglicht es, den Online-/Offline-Status in Arbeitern zu kennen ([Firefox-Bug 925437](https://bugzil.la/925437)).
- Im Rahmen der Implementierung von Web Components wurde die `HTMLShadowElement`-Schnittstelle hinter `dom.webcomponents.enabled` implementiert. Schalten Sie sie auf `true`, wenn Sie sie verwenden möchten. ([Firefox-Bug 887538](https://bugzil.la/887538))
- Die schreibgeschützte Eigenschaft [`HTMLIFrameElement.sandbox`](/de/docs/Web/API/HTMLIFrameElement/sandbox) ist kein String mehr, sondern eine [`DOMTokenList`](/de/docs/Web/API/DOMTokenList) ([Firefox-Bug 845057](https://bugzil.la/845057)).
- Beim Aufruf von [`HTMLCanvasElement.getContext()`](/de/docs/Web/API/HTMLCanvasElement/getContext) wird der Wert `moz-webgl` nicht mehr unterstützt. Verwenden Sie den Standardwert `webgl` ([Firefox-Bug 913597](https://bugzil.la/913597)).
- Der Konstruktor für [`ImageData`](/de/docs/Web/API/ImageData) wurde hinzugefügt. Diese Schnittstelle kann in einem [`Worker`](/de/docs/Web/API/Worker) verwendet werden. ([Firefox-Bug 959958](https://bugzil.la/959958))
- Die Eigenschaft [`location.origin`](/de/docs/Web/API/WorkerLocation/origin) ist jetzt in Arbeitern verfügbar (über [`WorkerLocation`](/de/docs/Web/API/WorkerLocation)) ([Firefox-Bug 964148](https://bugzil.la/964148)).
- Die Eigenschaft [`ValidityState.badInput`](/de/docs/Web/API/ValidityState/badInput) wurde implementiert ([Firefox-Bug 827161](https://bugzil.la/827161)).
- Die veraltete Eigenschaft `Window.pkcs11` wurde entfernt; sie gab seit Firefox 3.0.14 `null` zurück. ([Firefox-Bug 964964](https://bugzil.la/964964))
- Die Methoden [`Node.cloneNode()`](/de/docs/Web/API/Node/cloneNode) und [`Document.importNode()`](/de/docs/Web/API/Document/importNode) akzeptieren das boolesche Argument `deep`. Bisher haben diese Methoden, wenn dieses Argument weggelassen wurde, so gehandelt, als ob der Wert von `deep` `true` wäre. Dieses Verhalten wurde entsprechend der neuesten Spezifikation geändert: Wenn weggelassen, handeln die Methoden jetzt so, als ob der Wert `false` wäre. ([Firefox-Bug 937461](https://bugzil.la/937461))
- `Window._content` ist für Webinhalte nicht mehr verfügbar ([Firefox-Bug 946564](https://bugzil.la/946564)).
- Das Verhalten von [`URLUtils.port`](/de/docs/Web/API/HTMLAnchorElement/port) hat sich leicht geändert: Das Setzen auf `''` setzt es auf den Standardport, der mit dem Protokoll verknüpft ist, und `0` auf `0`. ([Firefox-Bug 930450](https://bugzil.la/930450))
- [`Document.referrer`](/de/docs/Web/API/Document/referrer) basiert jetzt auf dem aktuellen Skript ([Firefox-Bug 887928](https://bugzil.la/887928)).
- Die [Gamepad API](/de/docs/Web/API/Gamepad_API/Using_the_Gamepad_API) ist standardmäßig aktiviert ([Firefox-Bug 878828](https://bugzil.la/878828)).
- Die Methode `CanvasRenderingContext2D.drawSystemFocusRing()` wurde in [`CanvasRenderingContext2D.drawFocusIfNeeded()`](/de/docs/Web/API/CanvasRenderingContext2D/drawFocusIfNeeded) umbenannt ([Firefox-Bug 959820](https://bugzil.la/959820)).

### MathML

_Keine Änderung._

### SVG

_Keine Änderung._

## Sicherheit

- Die experimentelle CSP 1.1 Direktive `hash-source` wurde implementiert. Die Einstellung `security.csp.experimentalEnabled` sollte auf `true` gesetzt werden, um diese Funktion zu ermöglichen ([Firefox-Bug 883975](https://bugzil.la/883975)).

## Änderungen für Add-on- und Mozilla-Entwickler

- Wichtige Änderungen im Firefox-Design betreffen die meisten Erweiterungen, die mit der Benutzeroberfläche von Firefox interagieren.
- `nsISecurityCheckedComponent` wurde entfernt ([Firefox-Bug 794943](https://bugzil.la/794943)). Die meisten Anwender können `nsISecurityCheckedComponent` aus ihrer Schnittstellendefinition entfernen und werden weiterhin funktionieren.

### Ältere Versionen

{{Firefox_for_developers}}
