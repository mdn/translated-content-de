---
title: Firefox 29 Versionshinweise für Entwickler
short-title: Firefox 29
slug: Mozilla/Firefox/Releases/29
l10n:
  sourceCommit: 56f3d7018159127dbe92842413fb45d0aa7e8193
---

Firefox 29 wurde am 29. April 2014 veröffentlicht. Dieser Artikel listet wichtige Änderungen auf, die nicht nur für Webentwickler nützlich sind, sondern auch für Firefox- und Gecko-Entwickler sowie für Entwickler von Add-ons.

## Änderungen für Webentwickler

### Entwicklerwerkzeuge

Wesentliche Änderungen umfassen:

- Stark verbesserte Webkonsole - Arrays werden inline angezeigt, ohne auf das rechte Inspektor-Fenster klicken zu müssen, Fensterobjekte zeigen ihre URL an, etc.
- Die [console API](/de/docs/Web/API/Console_API) wurde zu Webarbeitern hinzugefügt ([Bug 620935](https://bugzil.la/620935)). Jetzt können Sie Nachrichten von Webarbeitern an die Webkonsole protokollieren.
- Das [Netzwerkmonitor](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/index.html) Werkzeug zeigt nun Leistungsstatistiken mittels Tortendiagrammen an ([Firefox-Bug 846601](https://bugzil.la/846601)).
- Im [Inspektor](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/index.html) sind jetzt Vorschau-Tooltips für CSS-Transformationen verfügbar ([Firefox-Bug 726427](https://bugzil.la/726427)).
- DOM-Elemente, die im Debugger und in der Konsole angezeigt werden, können direkt entfernt oder inspiziert werden, über die neuen Schaltflächen rechts neben der Variablenliste.
- Eine CSS-Quellzuordnung wird nun vom [Style Editor](https://firefox-source-docs.mozilla.org/devtools-user/style_editor/index.html) unterstützt ([Firefox-Bug 926014](https://bugzil.la/926014)).
- Autovervollständigung von CSS-Eigenschaften und -Werten wurde dem [Style Editor](https://firefox-source-docs.mozilla.org/devtools-user/style_editor/index.html) hinzugefügt ([Firefox-Bug 717369](https://bugzil.la/717369)).

_Sehen Sie sich den [Mozilla Hacks Blogeintrag](https://hacks.mozilla.org/2014/02/css-source-map-support-network-performance-analysis-more-firefox-developer-tools-episode-29/) für Details und andere kleinere Änderungen an._

### CSS

- [CSS-Variablen](/de/docs/Web/CSS/Guides/Cascading_variables/Using_custom_properties) wurden implementiert ([Firefox-Bug 773296](https://bugzil.la/773296)). Der Artikel [CSS Variables in Firefox Nightly](https://hacks.mozilla.org/2013/12/css-variables-in-firefox-nightly/) auf Mozilla Hacks enthält weitere Details. Sie sind per Standard nur in Nicht-Release-Builds aktiviert (in Release-Builds ändern Sie die Einstellung `layout.css.variables.enabled` auf `true`, wenn Sie damit experimentieren möchten).
- Flexboxen unterstützen jetzt {{cssxref("visibility", "visibility: collapse")}} ([Firefox-Bug 783470](https://bugzil.la/783470)).
- Die {{cssxref("box-sizing")}}-Eigenschaft wurde ohne Präfix implementiert ([Firefox-Bug 243412](https://bugzil.la/243412)).
- Die {{cssxref("will-change")}}-Eigenschaft, ein Hinweis darauf, dass sich etwas animiert, wurde hinzugefügt. Die Einstellung `layout.css.will-change.enabled` muss auf `true` geschaltet werden, um diese zu aktivieren. ([Firefox-Bug 940842](https://bugzil.la/940842))
- Wissenschaftliche Exponentialnotation, wie `3e1` oder `10e+0`, wird jetzt für {{cssxref("&lt;number&gt;")}}-Werte und deren Ableitungen wie {{cssxref("&lt;percentage&gt;")}}- und Einheitswerte unterstützt, jedoch nicht für {{cssxref("&lt;integer&gt;")}} ([Firefox-Bug 964529](https://bugzil.la/964529)).
- Bilder vom Typ {{cssxref("&lt;gradient&gt;")}} werden nun in {{cssxref("border-image")}} unterstützt ([Firefox-Bug 709587](https://bugzil.la/709587)).
- Die {{cssxref("touch-action")}}-Eigenschaft wurde implementiert. Sie ist nicht standardmäßig aktiviert; die Einstellung `layout.css.touch_action.enabled` steuert diese. ([Firefox-Bug 795567](https://bugzil.la/795567))
- Entfernen Sie den redundanten Standardstil für das \<pre>-Element aus der quirk.css ([Firefox-Bug 948914](https://bugzil.la/948914)).
- Die Rückfalllösung von CSS-Variablen wurde falsch implementiert (primäre Zyklen) ([Firefox-Bug 950497](https://bugzil.la/950497)).
- @supports-Konditionen mit Tokens nach einer Priorität der Deklaration sollten zu false ausgewertet werden ([Firefox-Bug 909170](https://bugzil.la/909170)).

### HTML

- `<input type=color>` und `<input type=number>` sind standardmäßig verfügbar.
- Unterstützung für das nicht standardisierte `<pre cols>` wurde entfernt, ebenso wie der Layouteffekt von `<pre wrap>`. Beide Effekte können und sollten mittels CSS erreicht werden. ([Firefox-Bug 949879](https://bugzil.la/949879))

### JavaScript

- Neue ECMAScript 2015 String-Methoden: {{jsxref("String.prototype.codePointAt()")}} und {{jsxref("String.prototype.fromCodePoint()")}} wurden implementiert ([Firefox-Bug 918879](https://bugzil.la/918879)).
- Die [ECMAScript Internationalization API (ECMA-402)](https://402.ecma-international.org/1.0/) wurde implementiert und ist nun standardmäßig in Firefox Desktop aktiviert ([Firefox-Bug 853301](https://bugzil.la/853301)):
  - Neue Objekte im neuen {{jsxref("Intl")}}-Objektnamensraum:
    - {{jsxref("Intl/Collator", "Intl.Collator")}}
    - {{jsxref("Intl/DateTimeFormat", "Intl.DateTimeFormat")}}
    - {{jsxref("Intl/NumberFormat", "Intl.NumberFormat")}}

  - Die folgenden Methoden von {{jsxref("String")}}, {{jsxref("Number")}} und {{jsxref("Date")}} wurden aktualisiert, um die `locales`- und `options`-Argumente gemäß ECMA-402 einzuschließen:
    - {{jsxref("String.prototype.localeCompare()")}}
    - {{jsxref("Number.prototype.toLocaleString()")}}
    - {{jsxref("Date.prototype.toLocaleString()")}}
    - {{jsxref("Date.prototype.toLocaleDateString()")}}
    - {{jsxref("Date.prototype.toLocaleTimeString()")}}

- Um dem aktualisierten ECMAScript 2015 Entwurfsspezifikation zu entsprechen, behandeln die {{jsxref("Map")}} und {{jsxref("Set")}} Objekte jetzt `-0` und `+0` als gleich, wenn überprüft wird, ob Schlüssel und Werte gleich sind.
- `Promise` ist jetzt standardmäßig aktiviert ([Firefox-Bug 918806](https://bugzil.la/918806)).
- Abgeschlossene [Generatoren](/de/docs/Web/JavaScript/Reference/Statements/function*) geben jetzt ein `IteratorResult`-Objekt zurück, anstatt einen Fehler zu werfen ([Firefox-Bug 958951](https://bugzil.la/958951)).
- Eine fehlerhafte JSON-Zeichenfolge, die von {{jsxref("JSON.parse()")}} geparst wird, gibt jetzt eine detailliertere Fehlermeldung mit der Zeilen- und Spaltennummer aus, die den Parsing-Fehler verursacht hat. Dies ist nützlich beim Debuggen großer JSON-Daten.
- Die Methode {{jsxref("ArrayBuffer.isView()")}} wurde hinzugefügt ([Firefox-Bug 896105](https://bugzil.la/896105)).

### Schnittstellen / APIs / DOM

- Ein neuer Typ von Arbeitern, [`SharedWorker`](/de/docs/Web/API/SharedWorker), ist jetzt standardmäßig verfügbar ([Firefox-Bug 924089](https://bugzil.la/924089)).
- Die [`URL`](/de/docs/Web/API/URL) Schnittstelle unterstützt nun die [`searchParams`](/de/docs/Web/API/URL/searchParams)-Eigenschaft, die ein [`URLSearchParams`](/de/docs/Web/API/URLSearchParams)-Objekt zurückgibt, wodurch Sie die Suchparameter einer URL bearbeiten können ([Firefox-Bug 887836](https://bugzil.la/887836)). Der Konstruktor [`URLSearchParams()`](/de/docs/Web/API/URLSearchParams/URLSearchParams) ermöglicht das einfachere Parsen von Abfragezeichenfolgen.
- Die [`navigator.onLine`](/de/docs/Web/API/WorkerNavigator/onLine)-Eigenschaft wird jetzt in [`WorkerNavigator`](/de/docs/Web/API/WorkerNavigator) unterstützt, sodass Sie den Online-/Offline-Status in Arbeitern erfahren können ([Firefox-Bug 925437](https://bugzil.la/925437)).
- Als Teil der Implementierung von Web Components wurde die `HTMLShadowElement`-Schnittstelle hinter dem `dom.webcomponents.enabled`-Einstellung implementiert. Schalten Sie es auf `true`, wenn Sie es verwenden möchten. ([Firefox-Bug 887538](https://bugzil.la/887538))
- Die schreibgeschützte Eigenschaft [`HTMLIFrameElement.sandbox`](/de/docs/Web/API/HTMLIFrameElement/sandbox) ist nunmehr keine Zeichenfolge, sondern eine [`DOMTokenList`](/de/docs/Web/API/DOMTokenList) ([Firefox-Bug 845057](https://bugzil.la/845057)).
- Bei [`HTMLCanvasElement.getContext()`](/de/docs/Web/API/HTMLCanvasElement/getContext) wird der Wert `moz-webgl` nicht mehr unterstützt. Verwenden Sie den Standardwert `webgl` ([Firefox-Bug 913597](https://bugzil.la/913597)).
- Der Konstruktor für [`ImageData`](/de/docs/Web/API/ImageData) wurde hinzugefügt. Diese Schnittstelle kann in einem [`Worker`](/de/docs/Web/API/Worker) verwendet werden. ([Firefox-Bug 959958](https://bugzil.la/959958))
- Die Eigenschaft [`location.origin`](/de/docs/Web/API/WorkerLocation/origin) ist jetzt in Arbeitern verfügbar (über [`WorkerLocation`](/de/docs/Web/API/WorkerLocation)) ([Firefox-Bug 964148](https://bugzil.la/964148)).
- Die [`ValidityState.badInput`](/de/docs/Web/API/ValidityState/badInput)-Eigenschaft wurde implementiert ([Firefox-Bug 827161](https://bugzil.la/827161)).
- Die veraltete Eigenschaft `Window.pkcs11` wurde entfernt; sie hatte seit Firefox 3.0.14 `null` zurückgegeben. ([Firefox-Bug 964964](https://bugzil.la/964964))
- Die Methoden [`Node.cloneNode()`](/de/docs/Web/API/Node/cloneNode) und [`Document.importNode()`](/de/docs/Web/API/Document/importNode) nehmen das boolesche Argument `deep`. Bisher handelten diese Methoden, wenn weggelassen, als ob der Wert von `deep` `true` war. Dieses Verhalten wurde jedoch gemäß der neuesten Spezifikation geändert, und wenn weggelassen, handeln die Methoden, als ob der Wert `false` wäre. ([Firefox-Bug 937461](https://bugzil.la/937461))
- `Window._content` ist für Web-Inhalte nicht mehr verfügbar ([Firefox-Bug 946564](https://bugzil.la/946564)).
- Das Verhalten von [`URLUtils.port`](/de/docs/Web/API/HTMLAnchorElement/port) wurde leicht geändert: setzen Sie es auf `''`, um es auf den Standardport zu setzen, der mit dem Protokoll verbunden ist, und `0` auf `0`. ([Firefox-Bug 930450](https://bugzil.la/930450))
- [`Document.referrer`](/de/docs/Web/API/Document/referrer) basiert jetzt auf dem bestehenden Skript ([Firefox-Bug 887928](https://bugzil.la/887928)).
- Die [Gamepad API](/de/docs/Web/API/Gamepad_API/Using_the_Gamepad_API) ist jetzt standardmäßig aktiviert ([Firefox-Bug 878828](https://bugzil.la/878828)).
- Die Methode `CanvasRenderingContext2D.drawSystemFocusRing()` wurde in [`CanvasRenderingContext2D.drawFocusIfNeeded()`](/de/docs/Web/API/CanvasRenderingContext2D/drawFocusIfNeeded) umbenannt ([Firefox-Bug 959820](https://bugzil.la/959820)).

### MathML

_Keine Änderung._

### SVG

_Keine Änderung._

## Sicherheit

- Die experimentelle `hash-source`-Direktive von CSP 1.1 wurde implementiert. Die Einstellung `security.csp.experimentalEnabled` sollte auf `true` gesetzt werden, um diese Funktionalität zu aktivieren ([Firefox-Bug 883975](https://bugzil.la/883975)).

## Änderungen für Add-on- und Mozilla-Entwickler

- Wichtige Änderungen am Firefox-Design betreffen die meisten Erweiterungen, die mit der Firefox-Benutzeroberfläche interagieren.
- `nsISecurityCheckedComponent` wurde entfernt ([Firefox-Bug 794943](https://bugzil.la/794943)). Die meisten Nutzer können `nsISecurityCheckedComponent` aus ihrer Schnittstellendefinition entfernen, und sie werden weiterhin funktionieren.
