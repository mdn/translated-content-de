---
title: Firefox 29 für Entwickler
slug: Mozilla/Firefox/Releases/29
l10n:
  sourceCommit: e488eba036b2fee56444fd579c3759ef45ff2ca8
---

{{FirefoxSidebar}}

Firefox 29 wurde am 29. April 2014 veröffentlicht. Dieser Artikel listet die wichtigsten Änderungen auf, die nicht nur für Webentwickler, sondern auch für Firefox- und Gecko-Entwickler sowie Add-on-Entwickler nützlich sind.

## Änderungen für Webentwickler

### Entwickler-Tools

Wichtige Änderungen umfassen:

- Stark verbesserte Webkonsole - Arrays werden inline ohne Klicken angezeigt, um sie im rechten Inspektor zu öffnen, Fensterobjekte zeigen ihre URL usw.
- Die [console API](/de/docs/Web/API/Console_API) wurde zu Web Workers hinzugefügt ([Bug 620935](https://bugzil.la/620935)). Jetzt können Sie Nachrichten von Web Workers in der Webkonsole protokollieren.
- Das [Network Monitor](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/index.html)-Tool zeigt nun Leistungsstatistiken mit Kreisdiagrammen an ([Firefox-Bug 846601](https://bugzil.la/846601)).
- Im [Inspector](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/index.html) sind jetzt Vorschautooltips von CSS-Transformationen verfügbar ([Firefox-Bug 726427](https://bugzil.la/726427)).
- DOM-Elemente, die im Debugger und in der Konsole angezeigt werden, können direkt entfernt oder inspiziert werden, über die neuen Tasten rechts neben der Variablenliste.
- Der [Style Editor](https://firefox-source-docs.mozilla.org/devtools-user/style_editor/index.html) unterstützt jetzt CSS-Source-Maps ([Firefox-Bug 926014](https://bugzil.la/926014)).
- Autovervollständigung von CSS-Eigenschaften und -Werten wurde dem [Style Editor](https://firefox-source-docs.mozilla.org/devtools-user/style_editor/index.html) hinzugefügt ([Firefox-Bug 717369](https://bugzil.la/717369)).

_Siehe den [Mozilla Hacks Blog-Eintrag](https://hacks.mozilla.org/2014/02/css-source-map-support-network-performance-analysis-more-firefox-developer-tools-episode-29/) für Details und andere kleinere Änderungen._

### CSS

- [CSS-Variablen](/de/docs/Web/CSS/CSS_cascading_variables/Using_CSS_custom_properties) wurden implementiert ([Firefox-Bug 773296](https://bugzil.la/773296)). Der Artikel [CSS Variables in Firefox Nightly](https://hacks.mozilla.org/2013/12/css-variables-in-firefox-nightly/) auf Mozilla Hacks enthält mehr Details. Sie sind standardmäßig nur für Nicht-Release-Builds aktiviert (in Release-Builds schalten Sie die Voreinstellung `layout.css.variables.enabled` auf `true`, wenn Sie sie ausprobieren möchten).
- Flexbox unterstützt jetzt {{cssxref("visibility", "visibility: collapse")}} ([Firefox-Bug 783470](https://bugzil.la/783470)).
- Die {{cssxref("box-sizing")}}-Eigenschaft wurde ohne Präfix freigegeben ([Firefox-Bug 243412](https://bugzil.la/243412)).
- Die {{cssxref("will-change")}}-Eigenschaft, ein Hinweis darauf, dass etwas animiert wird, wurde hinzugefügt. Die Voreinstellung `layout.css.will-change.enabled` muss auf `true` gesetzt werden, um sie zu aktivieren. ([Firefox-Bug 940842](https://bugzil.la/940842))
- Wissenschaftliche Exponentialnotation, wie `3e1` oder `10e+0`, wird nun für {{cssxref("&lt;number&gt;")}}-Werte und Ableitungen wie {{cssxref("&lt;percentage&gt;")}} und Einheitwerte, nicht jedoch für {{cssxref("&lt;integer&gt;")}}, unterstützt ([Firefox-Bug 964529](https://bugzil.la/964529)).
- Bilder des Typs {{cssxref("&lt;gradient&gt;")}} werden nun in {{cssxref("border-image")}} unterstützt ([Firefox-Bug 709587](https://bugzil.la/709587)).
- Die {{cssxref("touch-action")}}-Eigenschaft wurde implementiert. Sie ist standardmäßig nicht aktiviert; die Voreinstellung `layout.css.touch_action.enabled` steuert sie. ([Firefox-Bug 795567](https://bugzil.la/795567))
- Entfernen redundanter Standardstil für das \<pre>-Element aus quirk.css ([Firefox-Bug 948914](https://bugzil.la/948914)).
- Falsch implementiertes Fallback für CSS-Variablen (primäre Zyklen) ([Firefox-Bug 950497](https://bugzil.la/950497)).
- @supports Bedingungen mit Tokens nach der Priorität einer Deklaration sollten zu false ausgewertet werden ([Firefox-Bug 909170](https://bugzil.la/909170)).

### HTML

- `<input type=color>` und `<input type=number>` sind standardmäßig verfügbar.
- Unterstützung für den nicht standardmäßigen `<pre cols>` wurde entfernt, ebenso wie der Layouteffekt von `<pre wrap>`. Beide Effekte können und sollten mit CSS erreicht werden. ([Firefox-Bug 949879](https://bugzil.la/949879))

### JavaScript

- Neue ECMAScript 2015 String-Methoden: {{jsxref("String.prototype.codePointAt()")}} und {{jsxref("String.prototype.fromCodePoint()")}} wurden implementiert ([Firefox-Bug 918879](https://bugzil.la/918879)).
- Die [ECMAScript Internationalization API (ECMA-402)](https://402.ecma-international.org/1.0/) wurde implementiert und ist nun standardmäßig in Firefox Desktop aktiviert ([Firefox-Bug 853301](https://bugzil.la/853301)):

  - Neue Objekte im neuen {{jsxref("Intl")}}-Objektnamespace:

    - {{jsxref("Intl/Collator", "Intl.Collator")}}
    - {{jsxref("Intl/DateTimeFormat", "Intl.DateTimeFormat")}}
    - {{jsxref("Intl/NumberFormat", "Intl.NumberFormat")}}

  - Die folgenden Methoden von {{jsxref("String")}}, {{jsxref("Number")}} und {{jsxref("Date")}} wurden aktualisiert, um die `locales` und `options` Argumente gemäß ECMA-402 zu inkludieren:

    - {{jsxref("String.prototype.localeCompare()")}}
    - {{jsxref("Number.prototype.toLocaleString()")}}
    - {{jsxref("Date.prototype.toLocaleString()")}}
    - {{jsxref("Date.prototype.toLocaleDateString()")}}
    - {{jsxref("Date.prototype.toLocaleTimeString()")}}

- Um der aktualisierten ECMAScript 2015-Entwurfsspezifikation zu entsprechen, behandeln die Objekte {{jsxref("Map")}} und {{jsxref("Set")}} jetzt `-0` und `+0` als dasselbe bei der Prüfung der Schlüssel- und Wertgleichheit.
- `Promise` ist nun standardmäßig aktiviert ([Firefox-Bug 918806](https://bugzil.la/918806)).
- Abgeschlossene [Generatoren](/de/docs/Web/JavaScript/Reference/Statements/function*) geben jetzt ein `IteratorResult`-Objekt zurück, anstatt eine Ausnahme zu werfen ([Firefox-Bug 958951](https://bugzil.la/958951)).
- Ein fehlerhafter JSON-String, der von {{jsxref("JSON.parse()")}} analysiert wird, liefert nun eine detailliertere Fehlermeldung, die die Zeilen- und Spaltennummer enthält, die den Analysefehler verursacht hat. Dies ist nützlich bei der Fehlersuche in großen JSON-Daten.
- Die Methode {{jsxref("ArrayBuffer.isView()")}} wurde hinzugefügt ([Firefox-Bug 896105](https://bugzil.la/896105)).

### Schnittstellen/APIs/DOM

- Ein neuer Typ von Arbeitern, [`SharedWorker`](/de/docs/Web/API/SharedWorker), ist jetzt standardmäßig verfügbar ([Firefox-Bug 924089](https://bugzil.la/924089)).
- Die [`URL`](/de/docs/Web/API/URL)-Schnittstelle unterstützt jetzt die [`searchParams`](/de/docs/Web/API/URL/searchParams)-Eigenschaft, die ein [`URLSearchParams`](/de/docs/Web/API/URLSearchParams)-Objekt zurückgibt, sodass die Suchparameter einer URL modifiziert werden können ([Firefox-Bug 887836](https://bugzil.la/887836)). Der [`URLSearchParams()`](/de/docs/Web/API/URLSearchParams/URLSearchParams)-Konstruktor ermöglicht einfacheres Parsen von Abfragezeichenfolgen.
- Die [`navigator.onLine`](/de/docs/Web/API/WorkerNavigator/onLine)-Eigenschaft wird jetzt auf [`WorkerNavigator`](/de/docs/Web/API/WorkerNavigator) unterstützt, sodass der Online-/Offline-Status in Workern bekannt ist ([Firefox-Bug 925437](https://bugzil.la/925437)).
- Im Rahmen der Implementierung von Webkomponenten wurde die `HTMLShadowElement`-Schnittstelle hinter `dom.webcomponents.enabled` implementiert. Setzen Sie diese auf `true`, wenn Sie sie verwenden möchten. ([Firefox-Bug 887538](https://bugzil.la/887538))
- Die schreibgeschützte Eigenschaft [`HTMLIFrameElement.sandbox`](/de/docs/Web/API/HTMLIFrameElement/sandbox) ist nicht länger ein String, sondern eine [`DOMTokenList`](/de/docs/Web/API/DOMTokenList) ([Firefox-Bug 845057](https://bugzil.la/845057)).
- Beim [`HTMLCanvasElement.getContext()`](/de/docs/Web/API/HTMLCanvasElement/getContext) wird der Wert `moz-webgl` nicht länger unterstützt. Verwenden Sie den Standardwert `webgl` ([Firefox-Bug 913597](https://bugzil.la/913597)).
- Der Konstruktor für [`ImageData`](/de/docs/Web/API/ImageData) wurde hinzugefügt. Diese Schnittstelle kann in einem [`Worker`](/de/docs/Web/API/Worker) verwendet werden. ([Firefox-Bug 959958](https://bugzil.la/959958))
- Die Eigenschaft [`location.origin`](/de/docs/Web/API/WorkerLocation/origin) ist jetzt in Workern (über [`WorkerLocation`](/de/docs/Web/API/WorkerLocation)) verfügbar ([Firefox-Bug 964148](https://bugzil.la/964148)).
- Die [`ValidityState.badInput`](/de/docs/Web/API/ValidityState/badInput)-Eigenschaft wurde implementiert ([Firefox-Bug 827161](https://bugzil.la/827161)).
- Die veraltete `Window.pkcs11`-Eigenschaft wurde entfernt; sie gab seit Firefox 3.0.14 `null` zurück. ([Firefox-Bug 964964](https://bugzil.la/964964))
- Die Methoden [`Node.cloneNode()`](/de/docs/Web/API/Node/cloneNode) und [`Document.importNode()`](/de/docs/Web/API/Document/importNode) erwarten das Boolean-Argument `deep`. Bis jetzt, wenn es weggelassen wurde, verhielten sich diese Methoden so, als ob der Wert von `deep` `true` war. Aber dieses Verhalten wurde entsprechend der neuesten Spezifikation geändert, und wenn es weggelassen wird, verhalten sich die Methoden nun so, als ob der Wert `false` war. ([Firefox-Bug 937461](https://bugzil.la/937461))
- `Window._content` ist für Webinhalt nicht länger verfügbar ([Firefox-Bug 946564](https://bugzil.la/946564)).
- Das Verhalten von [`URLUtils.port`](/de/docs/Web/API/HTMLAnchorElement/port) wurde leicht geändert: Auf `''` gesetzt wird es auf den Standardport gesetzt, der mit dem Protokoll assoziiert ist, und `0` auf `0` ([Firefox-Bug 930450](https://bugzil.la/930450)).
- [`Document.referrer`](/de/docs/Web/API/Document/referrer) basiert jetzt auf dem aktuellen Skript ([Firefox-Bug 887928](https://bugzil.la/887928)).
- Die [Gamepad API](/de/docs/Web/API/Gamepad_API/Using_the_Gamepad_API) ist standardmäßig aktiviert ([Firefox-Bug 878828](https://bugzil.la/878828)).
- Die Methode `CanvasRenderingContext2D.drawSystemFocusRing()` wurde in [`CanvasRenderingContext2D.drawFocusIfNeeded()`](/de/docs/Web/API/CanvasRenderingContext2D/drawFocusIfNeeded) umbenannt ([Firefox-Bug 959820](https://bugzil.la/959820)).

### MathML

_Keine Änderung._

### SVG

_Keine Änderung._

## Sicherheit

- Die CSP 1.1 experimentelle `hash-source`-Direktive wurde implementiert. Die Voreinstellung `security.csp.experimentalEnabled` sollte auf `true` gesetzt werden, um diese Funktionalität zu aktivieren ([Firefox-Bug 883975](https://bugzil.la/883975)).

## Änderungen für Add-on- und Mozilla-Entwickler

- Wichtige Änderungen am Firefox-Thema betreffen die meisten Erweiterungen, die mit der Firefox-Benutzeroberfläche interagieren.
- `nsISecurityCheckedComponent` wurde entfernt ([Firefox-Bug 794943](https://bugzil.la/794943)). Die meisten Benutzer können `nsISecurityCheckedComponent` aus ihrer Schnittstellendefinition entfernen, und sie werden weiterhin funktionieren.

### Ältere Versionen

{{Firefox_for_developers}}
