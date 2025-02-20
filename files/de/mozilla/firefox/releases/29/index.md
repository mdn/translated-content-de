---
title: Firefox 29 für Entwickler
slug: Mozilla/Firefox/Releases/29
l10n:
  sourceCommit: 8dac6c62fc3cee2de82960d4dd9d9be16a3a1761
---

{{FirefoxSidebar}}

Firefox 29 wurde am 29. April 2014 veröffentlicht. Dieser Artikel listet wichtige Änderungen auf, die nicht nur für Webentwickler nützlich sind, sondern auch für Firefox- und Gecko-Entwickler sowie für Add-on-Entwickler.

## Änderungen für Webentwickler

### Entwickler-Tools

Wesentliche Änderungen umfassen:

- Stark verbesserte Webkonsole – Arrays werden inline ohne Klick auf den entsprechenden Inspektor angezeigt, Fensterobjekte zeigen ihre URL, usw.
- Hinzufügen der [console API](/de/docs/Web/API/Console_API) zu Web Workern ([Bug 620935](https://bugzil.la/620935)). Nun kann man Nachrichten von Web Workern an die Webkonsole senden.
- Das Tool [Network Monitor](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/index.html) zeigt jetzt Leistungsstatistiken mit Tortendiagrammen an ([Bug 846601](https://bugzil.la/846601)).
- Im [Inspektor](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/index.html) sind jetzt Preview-Tooltips für CSS-Transformationen verfügbar ([Bug 726427](https://bugzil.la/726427)).
- DOM-Elemente, die im Debugger und der Konsole zu sehen sind, können entfernt oder direkt inspiziert werden, mittels neuer Schaltflächen neben der Variablenauflistung.
- Ein CSS-Quellkarten-Support wurde zum [Style Editor](https://firefox-source-docs.mozilla.org/devtools-user/style_editor/index.html) hinzugefügt ([Bug 926014](https://bugzil.la/926014)).
- Autovervollständigung von CSS-Eigenschaften und Werten wurde zum [Style Editor](https://firefox-source-docs.mozilla.org/devtools-user/style_editor/index.html) hinzugefügt ([Bug 717369](https://bugzil.la/717369)).

_Einzelheiten und weitere kleinere Änderungen finden Sie im [Mozilla Hacks Blogeintrag](https://hacks.mozilla.org/2014/02/css-source-map-support-network-performance-analysis-more-firefox-developer-tools-episode-29/)._

### CSS

- [CSS-Variablen](/de/docs/Web/CSS/CSS_cascading_variables/Using_CSS_custom_properties) wurden implementiert ([Bug 773296](https://bugzil.la/773296)). Ein Artikel auf Mozilla Hacks ist [hier](https://hacks.mozilla.org/2013/12/css-variables-in-firefox-nightly/) verfügbar. Sie sind standardmäßig nur in Nicht-Release-Builds aktiviert (in Release-Builds kann die Einstellung `layout.css.variables.enabled` auf `true` gesetzt werden, um sie auszuprobieren).
- Flexbox unterstützt nun {{cssxref("visibility")}}`: collapse` ([Bug 783470](https://bugzil.la/783470)).
- Die Eigenschaft {{cssxref("box-sizing")}} wurde ohne Präfix veröffentlicht ([Bug 243412](https://bugzil.la/243412)).
- Die Eigenschaft {{cssxref("will-change")}}, ein Hinweis darauf, dass etwas animiert wird, wurde hinzugefügt. Die Einstellung `layout.css.will-change.enabled` muss auf `true` gestellt werden, um sie zu aktivieren ([Bug 940842](https://bugzil.la/940842)).
- Wissenschaftliche Exponentialschreibweise, wie `3e1` oder `10e+0`, wird jetzt für {{cssxref("&lt;number&gt;")}}-Werte und Ableitungen wie {{cssxref("&lt;percentage&gt;")}} und Einheitenwerte unterstützt, jedoch nicht für {{cssxref("&lt;integer&gt;")}} ([Bug 964529](https://bugzil.la/964529)).
- Bilder des Typs {{cssxref("&lt;gradient&gt;")}} werden jetzt in {{cssxref("border-image")}} unterstützt ([Bug 709587](https://bugzil.la/709587)).
- Die Eigenschaft {{cssxref("touch-action")}} wurde implementiert. Sie ist standardmäßig nicht aktiviert; die Einstellung `layout.css.touch_action.enabled` kann sie aktivieren ([Bug 795567](https://bugzil.la/795567)).
- Redundanter Standardstil für das \<pre>-Element wurde aus der quirk.css entfernt ([Bug 948914](https://bugzil.la/948914)).
- CSS-Variablen-Fallbacks wurden falsch implementiert (primäre Zyklen) ([Bug 950497](https://bugzil.la/950497)).
- @supports-Bedingungen mit Tokens nach der Priorität einer Deklaration sollten als falsch bewertet werden ([Bug 909170](https://bugzil.la/909170)).

### HTML

- `<input type=color>` und `<input type=number>` sind jetzt standardmäßig verfügbar.
- Unterstützung für das nicht standardisierte `<pre cols>` wurde entfernt, ebenso wie der Layouteffekt von `<pre wrap>`. Beide Effekte können und sollten mit CSS erreicht werden ([Bug 949879](https://bugzil.la/949879)).

### JavaScript

- Neue ECMAScript 2015 String-Methoden: {{jsxref("String.prototype.codePointAt()")}} und {{jsxref("String.prototype.fromCodePoint()")}} wurden implementiert ([Bug 918879](https://bugzil.la/918879)).
- Die [ECMAScript Internationalization API (ECMA-402)](https://402.ecma-international.org/1.0/) wurde implementiert und ist nun standardmäßig in Firefox Desktop aktiviert ([Bug 853301](https://bugzil.la/853301)):
  - Neue Objekte im neuen {{jsxref("Intl")}}-Objekt-Namespace:
    - {{jsxref("Intl/Collator", "Intl.Collator")}}
    - {{jsxref("Intl/DateTimeFormat", "Intl.DateTimeFormat")}}
    - {{jsxref("Intl/NumberFormat", "Intl.NumberFormat")}}
  - Folgende Methoden von {{jsxref("String")}}, {{jsxref("Number")}} und {{jsxref("Date")}} wurden aktualisiert, um die Argumente `locales` und `options` gemäß ECMA-402 zu unterstützen:
    - {{jsxref("String.prototype.localeCompare()")}}
    - {{jsxref("Number.prototype.toLocaleString()")}}
    - {{jsxref("Date.prototype.toLocaleString()")}}
    - {{jsxref("Date.prototype.toLocaleDateString()")}}
    - {{jsxref("Date.prototype.toLocaleTimeString()")}}
- Um der aktualisierten ECMAScript 2015-Entwurfsspezifikation zu entsprechen, behandeln die Objekte {{jsxref("Map")}} und {{jsxref("Set")}} `-0` und `+0` nun gleich, wenn Schlüssel- und Wertegleichheit überprüft wird.
- `Promise` wurde standardmäßig aktiviert ([Bug 918806](https://bugzil.la/918806)).
- Abgeschlossene [Generatoren](/de/docs/Web/JavaScript/Reference/Statements/function*) geben nun ein `IteratorResult`-Objekt zurück, anstatt einen Fehler auszulösen ([Bug 958951](https://bugzil.la/958951)).
- Eine fehlerhafte JSON-Zeichenkette, die mit {{jsxref("JSON.parse()")}} analysiert wird, gibt jetzt eine detailliertere Fehlermeldung mit Zeilen- und Spaltennummer zurück, die den Fehler verursacht hat. Dies ist nützlich beim Debuggen großer JSON-Daten.
- Die Methode {{jsxref("ArrayBuffer.isView()")}} wurde hinzugefügt ([Bug 896105](https://bugzil.la/896105)).

### Schnittstellen/APIs/DOM

- Ein neuer Workertyp, [`SharedWorker`](/de/docs/Web/API/SharedWorker), ist nun standardmäßig verfügbar ([Bug 924089](https://bugzil.la/924089)).
- Die [`URL`](/de/docs/Web/API/URL)-Schnittstelle unterstützt jetzt die Eigenschaft [`searchParams`](/de/docs/Web/API/URL/searchParams), die ein [`URLSearchParams`](/de/docs/Web/API/URLSearchParams)-Objekt zurückgibt, welches das Modifizieren der Suchparameter einer URL ermöglicht ([Bug 887836](https://bugzil.la/887836)). Der Konstruktor [`URLSearchParams()`](/de/docs/Web/API/URLSearchParams/URLSearchParams) erleichtert das Parsen von Abfragezeichenfolgen.
- Die [`navigator.onLine`](/de/docs/Web/API/WorkerNavigator/onLine)-Eigenschaft wird jetzt auf [`WorkerNavigator`](/de/docs/Web/API/WorkerNavigator) unterstützt und ermöglicht es, den Online-/Offline-Status in Workern zu erkennen ([Bug 925437](https://bugzil.la/925437)).
- Im Rahmen der Implementierung von Web Components wurde die Schnittstelle `HTMLShadowElement` hinter der Einstellung `dom.webcomponents.enabled` implementiert. Schalten Sie diese Einstellung auf `true`, wenn Sie sie verwenden möchten ([Bug 887538](https://bugzil.la/887538)).
- Die schreibgeschützte Eigenschaft [`HTMLIFrameElement.sandbox`](/de/docs/Web/API/HTMLIFrameElement/sandbox) ist jetzt keine Zeichenkette mehr, sondern eine [`DOMTokenList`](/de/docs/Web/API/DOMTokenList) ([Bug 845057](https://bugzil.la/845057)).
- Der Wert `moz-webgl` wird nicht mehr von [`HTMLCanvasElement.getContext()`](/de/docs/Web/API/HTMLCanvasElement/getContext) unterstützt. Verwenden Sie stattdessen den Standardwert `webgl` ([Bug 913597](https://bugzil.la/913597)).
- Der Konstruktor für [`ImageData`](/de/docs/Web/API/ImageData) wurde hinzugefügt. Diese Schnittstelle kann in einem [`Worker`](/de/docs/Web/API/Worker) verwendet werden ([Bug 959958](https://bugzil.la/959958)).
- Die Eigenschaft [`location.origin`](/de/docs/Web/API/WorkerLocation/origin) ist jetzt in Workern verfügbar (über [`WorkerLocation`](/de/docs/Web/API/WorkerLocation)) ([Bug 964148](https://bugzil.la/964148)).
- Die Eigenschaft [`ValidityState.badInput`](/de/docs/Web/API/ValidityState/badInput) wurde implementiert ([Bug 827161](https://bugzil.la/827161)).
- Die veraltete Eigenschaft `Window.pkcs11` wurde entfernt; sie gab seit Firefox 3.0.14 `null` zurück ([Bug 964964](https://bugzil.la/964964)).
- Die Methoden [`Node.cloneNode()`](/de/docs/Web/API/Node/cloneNode) und [`Document.importNode()`](/de/docs/Web/API/Document/importNode) nehmen das boolesche Argument `deep`. Bis jetzt verhielten sich diese Methoden wie bei `deep = true`, wenn es weggelassen wurde. Entsprechend der neuesten Spezifikation wurde dieses Verhalten geändert und die Methoden verhalten sich jetzt wie bei `deep = false`, wenn es weggelassen wird ([Bug 937461](https://bugzil.la/937461)).
- `Window._content` ist für Webinhalte nicht mehr verfügbar ([Bug 946564](https://bugzil.la/946564)).
- Das Verhalten von [`URLUtils.port`](/de/docs/Web/API/HTMLAnchorElement/port) wurde leicht geändert: Das Setzen von `''` wird zur Standardportnummer für das Protokoll, und `0` zu `0.` ([Bug 930450](https://bugzil.la/930450)).
- [`Document.referrer`](/de/docs/Web/API/Document/referrer) basiert nun auf dem aktuellen Skript ([Bug 887928](https://bugzil.la/887928)).
- Die [Gamepad API](/de/docs/Web/API/Gamepad_API/Using_the_Gamepad_API) ist standardmäßig aktiviert ([Bug 878828](https://bugzil.la/878828)).
- Die Methode `CanvasRenderingContext2D.drawSystemFocusRing()` wurde umbenannt zu [`CanvasRenderingContext2D.drawFocusIfNeeded()`](/de/docs/Web/API/CanvasRenderingContext2D/drawFocusIfNeeded) ([Bug 959820](https://bugzil.la/959820)).

### MathML

_Keine Änderung._

### SVG

_Keine Änderung._

## Sicherheit

- Die experimentelle Direktive `hash-source` von CSP 1.1 wurde implementiert. Die Einstellung `security.csp.experimentalEnabled` sollte auf `true` gesetzt werden, um diese Funktionalität zu aktivieren ([Bug 883975](https://bugzil.la/883975)).

## Änderungen für Add-on- und Mozilla-Entwickler

- Große Änderungen am Firefox-Theme betreffen die meisten Erweiterungen, die mit der Firefox-Benutzeroberfläche interagieren.
- `nsISecurityCheckedComponent` wurde entfernt ([Bug 794943](https://bugzil.la/794943)). Die meisten Anwender können `nsISecurityCheckedComponent` aus ihrer Schnittstellendefinition entfernen und werden weiterhin funktionieren.

### Ältere Versionen

{{Firefox_for_developers}}
