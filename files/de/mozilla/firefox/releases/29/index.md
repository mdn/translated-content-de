---
title: Firefox 29 für Entwickler
slug: Mozilla/Firefox/Releases/29
l10n:
  sourceCommit: 6bed868c7b75c4c3ca3721fa8ed6c6ad2f41262b
---

{{FirefoxSidebar}}

Firefox 29 wurde am 29. April 2014 veröffentlicht. Dieser Artikel listet wichtige Änderungen auf, die nicht nur für Webentwickler nützlich sind, sondern auch für Firefox- und Gecko-Entwickler sowie Add-on-Entwickler.

## Änderungen für Webentwickler

### Entwicklerwerkzeuge

Wesentliche Änderungen umfassen:

- Deutlich verbessertes Webkonsole - Arrays werden inline angezeigt, ohne dass sie im rechten Inspektor geöffnet werden müssen, Fensterobjekte zeigen ihre URL usw.
- Die [console API](/de/docs/Web/API/Console_API) wurde zu Web Workern hinzugefügt ([Bug 620935](https://bugzil.la/620935)). Jetzt können Sie Nachrichten von Webworkern an die Webkonsole senden.
- Das [Netzwerkmonitor](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/index.html) Werkzeug zeigt jetzt Leistungsstatistiken mit Kreisdiagrammen an ([Firefox-Bug 846601](https://bugzil.la/846601)).
- Im [Inspektor](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/index.html) sind jetzt Vorschautooltips für CSS-Transformationen verfügbar ([Firefox-Bug 726427](https://bugzil.la/726427)).
- DOM-Elemente, die im Debugger und in der Konsole zu sehen sind, können direkt entfernt oder inspiziert werden, über neue Schaltflächen rechts neben der Variablenliste.
- Eine CSS-Quellenkarte wird jetzt vom [Stileditor](https://firefox-source-docs.mozilla.org/devtools-user/style_editor/index.html) unterstützt ([Firefox-Bug 926014](https://bugzil.la/926014)).
- Die Autovervollständigung von CSS-Eigenschaften und -Werten wurde dem [Stileditor](https://firefox-source-docs.mozilla.org/devtools-user/style_editor/index.html) hinzugefügt ([Firefox-Bug 717369](https://bugzil.la/717369)).

_Siehe den [Mozilla Hacks Blogbeitrag](https://hacks.mozilla.org/2014/02/css-source-map-support-network-performance-analysis-more-firefox-developer-tools-episode-29/) für Details und andere kleinere Änderungen._

### CSS

- [CSS-Variablen](/de/docs/Web/CSS/CSS_cascading_variables/Using_CSS_custom_properties) wurden implementiert ([Firefox-Bug 773296](https://bugzil.la/773296)). Einen Artikel auf Mozilla Hacks dazu finden Sie [hier](https://hacks.mozilla.org/2013/12/css-variables-in-firefox-nightly/). Sie sind standardmäßig nur in Nicht-Release-Builds aktiviert (in Release-Builds kann die Voreinstellung `layout.css.variables.enabled` auf `true` gesetzt werden, um sie auszuprobieren).
- Flexboxen unterstützen jetzt {{cssxref("visibility", "visibility: collapse")}} ([Firefox-Bug 783470](https://bugzil.la/783470)).
- Die {{cssxref("box-sizing")}} Eigenschaft ist jetzt ohne Präfix verfügbar ([Firefox-Bug 243412](https://bugzil.la/243412)).
- Die {{cssxref("will-change")}} Eigenschaft, ein Hinweis darauf, dass etwas animiert wird, wurde hinzugefügt. Die Voreinstellung `layout.css.will-change.enabled` muss aktiviert werden, um sie zu verwenden. ([Firefox-Bug 940842](https://bugzil.la/940842))
- Wissenschaftliche Exponentialschreibweise, wie `3e1` oder `10e+0`, wird jetzt für {{cssxref("&lt;number&gt;")}} Werte und deren Derivate unterstützt, wie {{cssxref("&lt;percentage&gt;")}} und Einheitenwerte, jedoch nicht {{cssxref("&lt;integer&gt;")}} ([Firefox-Bug 964529](https://bugzil.la/964529)).
- Bilder des Typs {{cssxref("&lt;gradient&gt;")}} werden jetzt in {{cssxref("border-image")}} unterstützt ([Firefox-Bug 709587](https://bugzil.la/709587)).
- Die {{cssxref("touch-action")}} Eigenschaft wurde implementiert. Sie ist standardmäßig nicht aktiviert; die Voreinstellung `layout.css.touch_action.enabled` steuert sie. ([Firefox-Bug 795567](https://bugzil.la/795567))
- Entfernen Sie den redundanten Standardstil für das \<pre> Element aus quirk.css ([Firefox-Bug 948914](https://bugzil.la/948914)).
- Falsch implementierter Fallback für CSS-Variablen (primäre Zyklen) ([Firefox-Bug 950497](https://bugzil.la/950497)).
- @supports Bedingungen mit Token nach der Priorität einer Deklaration sollten sich auf false auswerten ([Firefox-Bug 909170](https://bugzil.la/909170)).

### HTML

- `<input type=color>` und `<input type=number>` sind standardmäßig verfügbar.
- Die Unterstützung für die nicht standardisierten `<pre cols>` wurde entfernt, ebenso wie die Layouteffekte von `<pre wrap>`. Beide Effekte können und sollten mit CSS erzielt werden. ([Firefox-Bug 949879](https://bugzil.la/949879))

### JavaScript

- Neue ECMAScript 2015 String-Methoden: {{jsxref("String.prototype.codePointAt()")}} und {{jsxref("String.prototype.fromCodePoint()")}} wurden implementiert ([Firefox-Bug 918879](https://bugzil.la/918879)).
- Die [ECMAScript Internationalization API (ECMA-402)](https://402.ecma-international.org/1.0/) wurde implementiert und ist jetzt standardmäßig auf Firefox Desktop aktiviert ([Firefox-Bug 853301](https://bugzil.la/853301)):

  - Neue Objekte im neuen {{jsxref("Intl")}} Objektnamespace:

    - {{jsxref("Intl/Collator", "Intl.Collator")}}
    - {{jsxref("Intl/DateTimeFormat", "Intl.DateTimeFormat")}}
    - {{jsxref("Intl/NumberFormat", "Intl.NumberFormat")}}

  - Die folgenden Methoden von {{jsxref("String")}}, {{jsxref("Number")}} und {{jsxref("Date")}} wurden um die Argumente `locales` und `options` gemäß ECMA-402 erweitert:

    - {{jsxref("String.prototype.localeCompare()")}}
    - {{jsxref("Number.prototype.toLocaleString()")}}
    - {{jsxref("Date.prototype.toLocaleString()")}}
    - {{jsxref("Date.prototype.toLocaleDateString()")}}
    - {{jsxref("Date.prototype.toLocaleTimeString()")}}

- Um den aktualisierten ECMAScript 2015 Entwurfsspezifikationen zu entsprechen, behandeln die {{jsxref("Map")}} und {{jsxref("Set")}} Objekte jetzt `-0` und `+0` als gleich bei der Überprüfung auf Schlüssel- und Wertgleichheit.
- `Promise` ist jetzt standardmäßig aktiviert ([Firefox-Bug 918806](https://bugzil.la/918806)).
- Abgeschlossene [Generatoren](/de/docs/Web/JavaScript/Reference/Statements/function*) geben jetzt ein `IteratorResult`-Objekt zurück, anstatt einen Fehler zu werfen ([Firefox-Bug 958951](https://bugzil.la/958951)).
- Eine fehlerhaft formatierte JSON-Zeichenkette, die durch {{jsxref("JSON.parse()")}} geparst wird, liefert jetzt eine detailliertere Fehlermeldung mit der Zeilen- und Spaltennummer, die den Parsingfehler verursacht hat. Dies ist nützlich beim Debuggen großer JSON-Daten.
- Die Methode {{jsxref("ArrayBuffer.isView()")}} wurde hinzugefügt ([Firefox-Bug 896105](https://bugzil.la/896105)).

### Schnittstellen/APIs/DOM

- Ein neuer Typ von Workern, [`SharedWorker`](/de/docs/Web/API/SharedWorker), ist jetzt standardmäßig verfügbar ([Firefox-Bug 924089](https://bugzil.la/924089)).
- Die [`URL`](/de/docs/Web/API/URL) Schnittstelle unterstützt jetzt das [`searchParams`](/de/docs/Web/API/URL/searchParams) Attribut, das ein [`URLSearchParams`](/de/docs/Web/API/URLSearchParams) Objekt zurückgibt, welches die Modifikation der Suchparameter einer URL ermöglicht ([Firefox-Bug 887836](https://bugzil.la/887836)). Der [`URLSearchParams()`](/de/docs/Web/API/URLSearchParams/URLSearchParams) Konstruktor vereinfacht das Parsen von Abfragezeichenfolgen.
- Das [`navigator.onLine`](/de/docs/Web/API/WorkerNavigator/onLine) Attribut wird jetzt von [`WorkerNavigator`](/de/docs/Web/API/WorkerNavigator) unterstützt, sodass der Online-/Offline-Status in Workern erkennbar ist ([Firefox-Bug 925437](https://bugzil.la/925437)).
- Als Teil der Implementierung von Web Components wurde die `HTMLShadowElement` Schnittstelle hinter `dom.webcomponents.enabled` implementiert. Setzen Sie diese auf `true`, um sie zu nutzen. ([Firefox-Bug 887538](https://bugzil.la/887538))
- Das schreibgeschützte Attribut [`HTMLIFrameElement.sandbox`](/de/docs/Web/API/HTMLIFrameElement/sandbox) ist nicht mehr ein String, sondern eine [`DOMTokenList`](/de/docs/Web/API/DOMTokenList) ([Firefox-Bug 845057](https://bugzil.la/845057)).
- Bei [`HTMLCanvasElement.getContext()`](/de/docs/Web/API/HTMLCanvasElement/getContext) wird der Wert `moz-webgl` nicht mehr unterstützt. Verwenden Sie den Standardwert `webgl` ([Firefox-Bug 913597](https://bugzil.la/913597)).
- Der Konstruktor für [`ImageData`](/de/docs/Web/API/ImageData) wurde hinzugefügt. Diese Schnittstelle kann in einem [`Worker`](/de/docs/Web/API/Worker) verwendet werden. ([Firefox-Bug 959958](https://bugzil.la/959958))
- Das Attribut [`location.origin`](/de/docs/Web/API/WorkerLocation/origin) ist jetzt in Workern verfügbar (über [`WorkerLocation`](/de/docs/Web/API/WorkerLocation)) ([Firefox-Bug 964148](https://bugzil.la/964148)).
- Das [`ValidityState.badInput`](/de/docs/Web/API/ValidityState/badInput) Attribut wurde implementiert ([Firefox-Bug 827161](https://bugzil.la/827161)).
- Das veraltete Attribut `Window.pkcs11` wurde entfernt; es hatte seit Firefox 3.0.14 `null` zurückgegeben. ([Firefox-Bug 964964](https://bugzil.la/964964))
- Die Methoden [`Node.cloneNode()`](/de/docs/Web/API/Node/cloneNode) und [`Document.importNode()`](/de/docs/Web/API/Document/importNode) akzeptieren das Boolesche Argument `deep`. Bisher handelten diese Methoden, wenn das Argument weggelassen wurde, als wäre der Wert von `deep` `true`. Dieses Verhalten wurde gemäß der neuesten Spezifikation geändert, und wenn es weggelassen wird, verhalten sich die Methoden, als wäre der Wert `false`. ([Firefox-Bug 937461](https://bugzil.la/937461))
- `Window._content` ist für Webinhalte nicht mehr verfügbar ([Firefox-Bug 946564](https://bugzil.la/946564)).
- Das Verhalten von [`URLUtils.port`](/de/docs/Web/API/HTMLAnchorElement/port) wurde leicht geändert: Setzen auf `''` wird es auf den Standardport setzen, der mit dem Protokoll verbunden ist, und `0` zu `0.` ([Firefox-Bug 930450](https://bugzil.la/930450))
- [`Document.referrer`](/de/docs/Web/API/Document/referrer) basiert jetzt auf dem aktuellen Skript ([Firefox-Bug 887928](https://bugzil.la/887928)).
- Die [Gamepad API](/de/docs/Web/API/Gamepad_API/Using_the_Gamepad_API) ist jetzt standardmäßig aktiviert ([Firefox-Bug 878828](https://bugzil.la/878828)).
- Die Methode `CanvasRenderingContext2D.drawSystemFocusRing()` wurde in [`CanvasRenderingContext2D.drawFocusIfNeeded()`](/de/docs/Web/API/CanvasRenderingContext2D/drawFocusIfNeeded) umbenannt ([Firefox-Bug 959820](https://bugzil.la/959820)).

### MathML

_Keine Änderung._

### SVG

_Keine Änderung._

## Sicherheit

- Die experimentelle CSP 1.1 Direktive `hash-source` wurde implementiert. Die Voreinstellung `security.csp.experimentalEnabled` sollte auf `true` gesetzt werden, um diese Funktionalität zu aktivieren ([Firefox-Bug 883975](https://bugzil.la/883975)).

## Änderungen für Add-on- und Mozilla-Entwickler

- Wichtige Änderungen am Firefox-Thema betreffen die meisten Erweiterungen, die mit der Firefox-Benutzeroberfläche interagieren.
- `nsISecurityCheckedComponent` wurde entfernt ([Firefox-Bug 794943](https://bugzil.la/794943)). Die meisten Benutzer können `nsISecurityCheckedComponent` aus ihrer Schnittstellendefinition entfernen und werden weiterhin funktionieren.

### Ältere Versionen

{{Firefox_for_developers}}
