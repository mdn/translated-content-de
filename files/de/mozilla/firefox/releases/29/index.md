---
title: Firefox 29 für Entwickler
slug: Mozilla/Firefox/Releases/29
l10n:
  sourceCommit: 1822cdf5a86574429c4c49883a402663ef16a4ef
---

{{FirefoxSidebar}}

Firefox 29 wurde am 29. April 2014 veröffentlicht. Dieser Artikel listet wichtige Änderungen auf, die nicht nur für Webentwickler nützlich sind, sondern auch für Firefox- und Gecko-Entwickler sowie Add-on-Entwickler.

## Änderungen für Webentwickler

### Entwicklerwerkzeuge

Wichtige Änderungen umfassen:

- Stark verbesserte Web-Konsole - Arrays werden inline ohne Klick im rechten Inspektor angezeigt, Fensterobjekte zeigen ihre URL, etc.
- Die [console API](/de/docs/Web/API/Console_API) wurde zu Web Workers hinzugefügt ([Bug 620935](https://bugzil.la/620935)). Jetzt können Sie Meldungen von Web Workers an die Web-Konsole senden.
- Das [Netzwerkmonitor](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/index.html)-Werkzeug zeigt nun Leistungsstatistiken mithilfe von Tortendiagrammen ([Firefox-Bug 846601](https://bugzil.la/846601)).
- Im [Inspektor](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/index.html) sind jetzt Vorschau-Tooltips von CSS-Transformationen verfügbar ([Firefox-Bug 726427](https://bugzil.la/726427)).
- DOM-Elemente im Debugger und der Konsole können direkt entfernt oder inspiziert werden, über die neuen Buttons rechts in der Variablenliste.
- Eine CSS-Quellkarte wird nun vom [Stil-Editor](https://firefox-source-docs.mozilla.org/devtools-user/style_editor/index.html) unterstützt ([Firefox-Bug 926014](https://bugzil.la/926014)).
- Autovervollständigung von CSS-Eigenschaften und -Werten wurde zum [Stil-Editor](https://firefox-source-docs.mozilla.org/devtools-user/style_editor/index.html) hinzugefügt ([Firefox-Bug 717369](https://bugzil.la/717369)).

_Siehe den [Mozilla Hacks Blogbeitrag](https://hacks.mozilla.org/2014/02/css-source-map-support-network-performance-analysis-more-firefox-developer-tools-episode-29/) für Details und andere kleinere Änderungen._

### CSS

- [CSS-Variablen](/de/docs/Web/CSS/Using_CSS_custom_properties) wurden implementiert ([Firefox-Bug 773296](https://bugzil.la/773296)). Ein Mozilla Hacks-Artikel ist [hier](https://hacks.mozilla.org/2013/12/css-variables-in-firefox-nightly/) zu finden. Sie sind standardmäßig nur für Nicht-Release-Builds aktiviert (bei Release-Builds müssen Sie die Voreinstellung `layout.css.variables.enabled` auf `true` setzen, wenn Sie sie ausprobieren möchten).
- Flexboxen unterstützen jetzt {{cssxref("visibility")}}`: collapse` ([Firefox-Bug 783470](https://bugzil.la/783470)).
- Die {{cssxref("box-sizing")}}-Eigenschaft ist jetzt ohne Präfix ([Firefox-Bug 243412](https://bugzil.la/243412)).
- Die {{cssxref("will-change")}}-Eigenschaft, ein Hinweis, dass etwas animiert wird, wurde hinzugefügt. Die Voreinstellung `layout.css.will-change.enabled` muss auf `true` gesetzt werden, um sie zu aktivieren. ([Firefox-Bug 940842](https://bugzil.la/940842))
- Wissenschaftliche Exponentialnotation, wie `3e1` oder `10e+0`, wird nun für {{cssxref("&lt;number&gt;")}}-Werte und Ableitungen, wie {{cssxref("&lt;percentage&gt;")}}- und Einheitswerte, unterstützt, jedoch nicht für {{cssxref("&lt;integer&gt;")}} ([Firefox-Bug 964529](https://bugzil.la/964529)).
- Bilder vom Typ {{cssxref("&lt;gradient&gt;")}} werden jetzt in {{cssxref("border-image")}} unterstützt ([Firefox-Bug 709587](https://bugzil.la/709587)).
- Die {{cssxref("touch-action")}}-Eigenschaft wurde implementiert. Sie ist nicht standardmäßig aktiviert; die Voreinstellung `layout.css.touch_action.enabled` steuert sie. ([Firefox-Bug 795567](https://bugzil.la/795567))
- Entfernen des redundanten Standardstils für das \<pre>-Element aus quirk.css ([Firefox-Bug 948914](https://bugzil.la/948914)).
- Fallback für CSS-Variablen falsch implementiert (primäre Zyklen) ([Firefox-Bug 950497](https://bugzil.la/950497)).
- @supports-Bedingungen mit Token nach der Priorität einer Deklaration sollten auf false auswerten ([Firefox-Bug 909170](https://bugzil.la/909170)).

### HTML

- `<input type=color>` und `<input type=number>` sind standardmäßig verfügbar.
- Unterstützung für das nicht standardisierte `<pre cols>` wurde entfernt, genauso wie der Layouteffekt von `<pre wrap>`. Beide Effekte können und sollten mit CSS erreicht werden. ([Firefox-Bug 949879](https://bugzil.la/949879))

### JavaScript

- Neue ECMAScript 2015 String-Methoden: {{jsxref("String.prototype.codePointAt()")}} und {{jsxref("String.prototype.fromCodePoint()")}} wurden implementiert ([Firefox-Bug 918879](https://bugzil.la/918879)).
- Die [ECMAScript Internationalization API (ECMA-402)](https://402.ecma-international.org/1.0/) wurde implementiert und ist jetzt standardmäßig in Firefox Desktop aktiviert ([Firefox-Bug 853301](https://bugzil.la/853301)):

  - Neue Objekte im neuen {{jsxref("Intl")}}-Objektnamensraum:

    - {{jsxref("Intl/Collator", "Intl.Collator")}}
    - {{jsxref("Intl/DateTimeFormat", "Intl.DateTimeFormat")}}
    - {{jsxref("Intl/NumberFormat", "Intl.NumberFormat")}}

  - Die folgenden Methoden von {{jsxref("String")}}, {{jsxref("Number")}} und {{jsxref("Date")}} wurden aktualisiert, um die Argumente `locales` und `options` gemäß ECMA-402 einzuschließen:

    - {{jsxref("String.prototype.localeCompare()")}}
    - {{jsxref("Number.prototype.toLocaleString()")}}
    - {{jsxref("Date.prototype.toLocaleString()")}}
    - {{jsxref("Date.prototype.toLocaleDateString()")}}
    - {{jsxref("Date.prototype.toLocaleTimeString()")}}

- Um den aktualisierten ECMAScript 2015-Entwurfsspezifikationen zu entsprechen, behandeln die {{jsxref("Map")}}- und {{jsxref("Set")}}-Objekte `-0` und `+0` nun als gleich bei der Prüfung auf Schlüssel- und Wertgleichheit.
- `Promise` ist standardmäßig aktiviert ([Firefox-Bug 918806](https://bugzil.la/918806)).
- Abgeschlossene [Generatoren](/de/docs/Web/JavaScript/Reference/Statements/function*) geben nun ein `IteratorResult`-Objekt zurück, statt einen Fehler auszulösen ([Firefox-Bug 958951](https://bugzil.la/958951)).
- Ein fehlerhafter JSON-String, der von {{jsxref("JSON.parse()")}} geparst wird, liefert jetzt eine detailliertere Fehlermeldung mit der Zeilen- und Spaltennummer, die den Parsingfehler verursacht hat. Dies ist nützlich beim Debuggen großer JSON-Daten.
- Die Methode {{jsxref("ArrayBuffer.isView()")}} wurde hinzugefügt ([Firefox-Bug 896105](https://bugzil.la/896105)).

### Schnittstellen/APIs/DOM

- Eine neue Art von Workern, [`SharedWorker`](/de/docs/Web/API/SharedWorker), ist nun standardmäßig verfügbar ([Firefox-Bug 924089](https://bugzil.la/924089)).
- Die [`URL`](/de/docs/Web/API/URL)-Schnittstelle unterstützt jetzt die `searchParams`-Eigenschaft, die ein [`URLSearchParams`](/de/docs/Web/API/URLSearchParams)-Objekt zurückgibt, das es ermöglicht, die Suchparameter einer URL zu ändern ([Firefox-Bug 887836](https://bugzil.la/887836)). Der [`URLSearchParams()`](/de/docs/Web/API/URLSearchParams/URLSearchParams)-Konstruktor ermöglicht eine einfachere Analyse von Abfragezeichenfolgen.
- Die [`navigator.onLine`](/de/docs/Web/API/WorkerNavigator/onLine)-Eigenschaft wird jetzt auf `WorkerNavigator` unterstützt, um den Online-/Offline-Status in Workern zu wissen ([Firefox-Bug 925437](https://bugzil.la/925437)).
- Als Teil der Umsetzung von Web Components wurde die `HTMLShadowElement`-Schnittstelle hinter der `dom.webcomponents.enabled` implementiert. Schalten Sie diese auf `true`, wenn Sie sie verwenden möchten. ([Firefox-Bug 887538](https://bugzil.la/887538))
- Die schreibgeschützte Eigenschaft [`HTMLIFrameElement.sandbox`](/de/docs/Web/API/HTMLIFrameElement/sandbox) ist nicht mehr ein String, sondern ein [`DOMTokenList`](/de/docs/Web/API/DOMTokenList) ([Firefox-Bug 845057](https://bugzil.la/845057)).
- Auf [`HTMLCanvasElement.getContext()`](/de/docs/Web/API/HTMLCanvasElement/getContext) wird der Wert `moz-webgl` nicht mehr unterstützt. Verwenden Sie den Standardwert `webgl` ([Firefox-Bug 913597](https://bugzil.la/913597)).
- Der Konstruktor für [`ImageData`](/de/docs/Web/API/ImageData) wurde hinzugefügt. Diese Schnittstelle kann in einem [`Worker`](/de/docs/Web/API/Worker) verwendet werden. ([Firefox-Bug 959958](https://bugzil.la/959958))
- Die Eigenschaft [`location.origin`](/de/docs/Web/API/WorkerLocation/origin) ist jetzt in Workern verfügbar (über [`WorkerLocation`](/de/docs/Web/API/WorkerLocation)) ([Firefox-Bug 964148](https://bugzil.la/964148)).
- Die [`ValidityState.badInput`](/de/docs/Web/API/ValidityState/badInput)-Eigenschaft wurde implementiert ([Firefox-Bug 827161](https://bugzil.la/827161)).
- Die veraltete Sicherung `Window.pkcs11` wurde entfernt; sie gab seit Firefox 3.0.14 `null` zurück. ([Firefox-Bug 964964](https://bugzil.la/964964))
- Die Methoden [`Node.cloneNode()`](/de/docs/Web/API/Node/cloneNode) und [`Document.importNode()`](/de/docs/Web/API/Document/importNode) akzeptieren das Boolean-Argument `deep`. Bis jetzt, wenn es weggelassen wurde, verhielten sich diese Methoden, als wäre der Wert von `deep` `true`. Dieses Verhalten wurde jedoch gemäß der neuesten Spezifikation geändert, und wenn es weggelassen wird, werden die Methoden so agieren, als ob der Wert `false` wäre. ([Firefox-Bug 937461](https://bugzil.la/937461))
- `Window._content` ist dem Web-Inhalt nicht mehr verfügbar ([Firefox-Bug 946564](https://bugzil.la/946564)).
- Das Verhalten von [`URLUtils.port`](/de/docs/Web/API/HTMLAnchorElement/port) hat sich leicht geändert: `''` setzt es auf den Standardport, der mit dem Protokoll verknüpft ist, und `0` auf `0.` ([Firefox-Bug 930450](https://bugzil.la/930450))
- [`Document.referrer`](/de/docs/Web/API/Document/referrer) basiert nun auf dem aktuellen Skript ([Firefox-Bug 887928](https://bugzil.la/887928)).
- Die [Gamepad API](/de/docs/Web/API/Gamepad_API/Using_the_Gamepad_API) ist standardmäßig aktiviert ([Firefox-Bug 878828](https://bugzil.la/878828)).
- Die Methode `CanvasRenderingContext2D.drawSystemFocusRing()` wurde umbenannt in [`CanvasRenderingContext2D.drawFocusIfNeeded()`](/de/docs/Web/API/CanvasRenderingContext2D/drawFocusIfNeeded) ([Firefox-Bug 959820](https://bugzil.la/959820)).

### MathML

_Keine Änderung._

### SVG

_Keine Änderung._

## Sicherheit

- Die experimentelle CSP 1.1-Direktive `hash-source` wurde implementiert. Die Voreinstellung `security.csp.experimentalEnabled` sollte auf `true` gesetzt werden, um diese Funktionalität zu aktivieren ([Firefox-Bug 883975](https://bugzil.la/883975)).

## Änderungen für Add-on- und Mozilla-Entwickler

- Große Änderungen am Firefox-Theme betreffen die meisten Erweiterungen, die mit der Firefox-Benutzeroberfläche interagieren.
- `nsISecurityCheckedComponent` wurde entfernt ([Firefox-Bug 794943](https://bugzil.la/794943)). Die meisten Benutzer können `nsISecurityCheckedComponent` aus ihrer Schnittstellendefinition entfernen, und sie werden weiterhin funktionieren.

### Ältere Versionen

{{Firefox_for_developers}}
