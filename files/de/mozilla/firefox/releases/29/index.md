---
title: Firefox 29 für Entwickler
slug: Mozilla/Firefox/Releases/29
l10n:
  sourceCommit: 1822cdf5a86574429c4c49883a402663ef16a4ef
---

{{FirefoxSidebar}}

Firefox 29 wurde am 29. April 2014 veröffentlicht. Dieser Artikel listet wichtige Änderungen auf, die nicht nur für Webentwickler, sondern auch für Firefox- und Gecko-Entwickler sowie für Add-on-Entwickler nützlich sind.

## Änderungen für Webentwickler

### Entwickler-Tools

Wesentliche Änderungen umfassen:

- Stark verbesserte Webkonsole – Arrays werden inline angezeigt, ohne dass Sie auf den rechten Inspektor klicken müssen, Fensterobjekte zeigen ihre URL an usw.
- Die [Console API](/de/docs/Web/API/Console_API) wurde zu Web Workers hinzugefügt ([Fehler 620935](https://bugzil.la/620935)). Jetzt können Sie Nachrichten aus Web Workers an die Webkonsole protokollieren.
- Das [Network Monitor](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/index.html)-Werkzeug zeigt nun Leistungsstatistiken mit Kreisdiagrammen an ([Firefox-Fehler 846601](https://bugzil.la/846601)).
- Im [Inspector](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/index.html) sind jetzt Vorschautooltips für CSS-Transformationen verfügbar ([Firefox-Fehler 726427](https://bugzil.la/726427)).
- DOM-Elemente, die im Debugger und in der Konsole gesehen werden, können direkt entfernt oder inspiziert werden, über die neuen Tasten rechts neben der Variablenanzeige.
- Eine CSS-Quellzuordnung wird jetzt vom [Style Editor](https://firefox-source-docs.mozilla.org/devtools-user/style_editor/index.html) unterstützt ([Firefox-Fehler 926014](https://bugzil.la/926014)).
- Die Autovervollständigung von CSS-Properties und Werten wurde dem [Style Editor](https://firefox-source-docs.mozilla.org/devtools-user/style_editor/index.html) hinzugefügt ([Firefox-Fehler 717369](https://bugzil.la/717369)).

_Sehen Sie den [Mozilla Hacks Blogbeitrag](https://hacks.mozilla.org/2014/02/css-source-map-support-network-performance-analysis-more-firefox-developer-tools-episode-29/) für Details und andere kleinere Änderungen._

### CSS

- [CSS-Variablen](/de/docs/Web/CSS/Using_CSS_custom_properties) wurden implementiert ([Firefox-Fehler 773296](https://bugzil.la/773296)). Einen Mozilla Hacks Artikel finden Sie [hier](https://hacks.mozilla.org/2013/12/css-variables-in-firefox-nightly/). Sie sind standardmäßig nur für Nicht-Release-Builds aktiviert (bei Release-Builds stellen Sie die Voreinstellung `layout.css.variables.enabled` auf `true`, wenn Sie damit experimentieren möchten).
- Flexboxen unterstützen jetzt {{cssxref("visibility")}}` : collapse` ([Firefox-Fehler 783470](https://bugzil.la/783470)).
- Die {{cssxref("box-sizing")}}-Eigenschaft wurde unpräfixiert ([Firefox-Fehler 243412](https://bugzil.la/243412)).
- Die {{cssxref("will-change")}}-Eigenschaft, ein Hinweis darauf, dass etwas animiert wird, wurde hinzugefügt. Die Voreinstellung `layout.css.will-change.enabled` muss auf `true` gesetzt werden, um sie zu aktivieren. ([Firefox-Fehler 940842](https://bugzil.la/940842))
- Wissenschaftliche Exponentialnotation, wie `3e1` oder `10e+0`, wird jetzt für {{cssxref("&lt;number&gt;")}}-Werte und Ableitungen, wie {{cssxref("&lt;percentage&gt;")}}- und Einheitswerte, jedoch nicht {{cssxref("&lt;integer&gt;")}} unterstützt ([Firefox-Fehler 964529](https://bugzil.la/964529)).
- Gradienten vom Typ {{cssxref("&lt;gradient&gt;")}} werden jetzt in {{cssxref("border-image")}} unterstützt ([Firefox-Fehler 709587](https://bugzil.la/709587)).
- Die {{cssxref("touch-action")}}-Eigenschaft wurde implementiert. Sie ist standardmäßig nicht aktiviert; die `layout.css.touch_action.enabled`-Voreinstellung steuert sie. ([Firefox-Fehler 795567](https://bugzil.la/795567))
- Entfernen Sie den redundanten Standardstil für das `<pre>`-Element aus quirk.css ([Firefox-Fehler 948914](https://bugzil.la/948914)).
- Falsch implementierter Rückfall von CSS-Variablen (primäre Zyklen) ([Firefox-Fehler 950497](https://bugzil.la/950497)).
- @supports-Bedingungen mit Tokens nach der Priorität einer Deklaration sollten zu false ausgewertet werden ([Firefox-Fehler 909170](https://bugzil.la/909170)).

### HTML

- `<input type=color>` und `<input type=number>` sind standardmäßig verfügbar.
- Die Unterstützung für das nicht standardmäßige `<pre cols>` wurde entfernt sowie die Layouteffekt von `<pre wrap>`. Beide Effekte können und sollten mit CSS erreicht werden. ([Firefox-Fehler 949879](https://bugzil.la/949879))

### JavaScript

- Neue ECMAScript 2015-String-Methoden: {{jsxref("String.prototype.codePointAt()")}} und {{jsxref("String.prototype.fromCodePoint()")}} wurden implementiert ([Firefox-Fehler 918879](https://bugzil.la/918879)).
- Die [ECMAScript Internationalization API (ECMA-402)](https://402.ecma-international.org/1.0/) wurde implementiert und ist jetzt standardmäßig in Firefox Desktop aktiviert ([Firefox-Fehler 853301](https://bugzil.la/853301)):

  - Neue Objekte im neuen {{jsxref("Intl")}}-Objektnamensraum:

    - {{jsxref("Intl/Collator", "Intl.Collator")}}
    - {{jsxref("Intl/DateTimeFormat", "Intl.DateTimeFormat")}}
    - {{jsxref("Intl/NumberFormat", "Intl.NumberFormat")}}

  - Die folgenden Methoden von {{jsxref("String")}}, {{jsxref("Number")}} und {{jsxref("Date")}} wurden aktualisiert, um die `locales`- und `options`-Argumente gemäß ECMA-402 zu enthalten:

    - {{jsxref("String.prototype.localeCompare()")}}
    - {{jsxref("Number.prototype.toLocaleString()")}}
    - {{jsxref("Date.prototype.toLocaleString()")}}
    - {{jsxref("Date.prototype.toLocaleDateString()")}}
    - {{jsxref("Date.prototype.toLocaleTimeString()")}}

- Um dem aktualisierten ECMAScript 2015-Entwurfsspezifikation zu entsprechen, behandeln die {{jsxref("Map")}}- und {{jsxref("Set")}}-Objekte jetzt `-0` und `+0` als gleich, wenn sie Schlüssel- und Wertgleichheit überprüfen.
- `Promise` ist jetzt standardmäßig aktiviert ([Firefox-Fehler 918806](https://bugzil.la/918806)).
- Abgeschlossene [Generatoren](/de/docs/Web/JavaScript/Reference/Statements/function*) geben jetzt ein `IteratorResult`-Objekt zurück, anstatt eine Ausnahme auszulösen ([Firefox-Fehler 958951](https://bugzil.la/958951)).
- Ein fehlerhaftes JSON-String, das durch {{jsxref("JSON.parse()")}} geparst wurde, liefert jetzt eine detailliertere Fehlermeldung, die die Zeilen- und Spaltennummer enthält, die den Parsing-Fehler verursacht hat. Dies ist nützlich beim Debuggen großer JSON-Daten.
- Die Methode {{jsxref("ArrayBuffer.isView()")}} wurde hinzugefügt ([Firefox-Fehler 896105](https://bugzil.la/896105)).

### Schnittstellen/APIs/DOM

- Ein neuer Typ von Workern, {{domxref("SharedWorker")}}, ist jetzt standardmäßig verfügbar ([Firefox-Fehler 924089](https://bugzil.la/924089)).
- Die {{domxref("URL")}}-Schnittstelle unterstützt jetzt die {{domxref("URL.searchParams", "searchParams")}}-Eigenschaft, die ein {{domxref("URLSearchParams")}}-Objekt zurückgibt, das die Bearbeitung der Suchparameter einer URL ermöglicht ([Firefox-Fehler 887836](https://bugzil.la/887836)). Der {{domxref("URLSearchParams.URLSearchParams", "URLSearchParams()")}}-Konstruktor ermöglicht eine einfachere Analyse von Query-Strings.
- Die {{domxref("WorkerNavigator.onLine", "navigator.onLine")}}-Eigenschaft wird jetzt auf {{domxref("WorkerNavigator")}} unterstützt, wodurch der Online-/Offline-Status in Workern bekannt ist ([Firefox-Fehler 925437](https://bugzil.la/925437)).
- Im Rahmen der Implementierung von Web Components wurde die `HTMLShadowElement`-Schnittstelle hinter der `dom.webcomponents.enabled` implementiert. Stellen Sie sie auf `true`, wenn Sie sie verwenden möchten. ([Firefox-Fehler 887538](https://bugzil.la/887538))
- Die schreibgeschützte Eigenschaft {{domxref("HTMLIFrameElement.sandbox")}} ist nicht mehr ein String, sondern eine {{domxref("DOMTokenList")}} ([Firefox-Fehler 845057](https://bugzil.la/845057)).
- Bei {{domxref("HTMLCanvasElement.getContext()")}} wird der Wert `moz-webgl` nicht mehr unterstützt. Verwenden Sie den Standardwert `webgl` ([Firefox-Fehler 913597](https://bugzil.la/913597)).
- Der Konstruktor für {{domxref("ImageData")}} wurde hinzugefügt. Diese Schnittstelle kann in einem {{domxref("Worker")}} verwendet werden. ([Firefox-Fehler 959958](https://bugzil.la/959958))
- Die Eigenschaft {{domxref("WorkerLocation.origin", "location.origin")}} ist jetzt in Workern verfügbar (über {{domxref("WorkerLocation")}}) ([Firefox-Fehler 964148](https://bugzil.la/964148)).
- Die Eigenschaft {{domxref("ValidityState.badInput")}} wurde implementiert ([Firefox-Fehler 827161](https://bugzil.la/827161)).
- Die veraltete `Window.pkcs11`-Eigenschaft wurde entfernt; sie hat seit Firefox 3.0.14 `null` zurückgegeben. ([Firefox-Fehler 964964](https://bugzil.la/964964))
- Die Methoden {{domxref("Node.cloneNode()")}} und {{domxref("Document.importNode()")}} nehmen das boolesche `deep`-Argument an. Bisher wirkten diese Methoden bei Auslassung so, als wäre der Wert von `deep` `true`. Dieses Verhalten wurde jedoch gemäß der neuesten Spezifikation geändert, und wenn es weggelassen wird, wirken die Methoden so, als wäre der Wert `false`. ([Firefox-Fehler 937461](https://bugzil.la/937461))
- `Window._content` ist für Webinhalte nicht mehr verfügbar ([Firefox-Fehler 946564](https://bugzil.la/946564)).
- {{domxref("HTMLAnchorElement/port", "URLUtils.port")}}-Verhalten wurde leicht geändert: Einstellung auf `''` setzt es auf den Standardport, der mit dem Protokoll verbunden ist, und `0` auf `0`. ([Firefox-Fehler 930450](https://bugzil.la/930450))
- {{domxref("Document.referrer")}} basiert jetzt auf dem aktuellen Skript ([Firefox-Fehler 887928](https://bugzil.la/887928)).
- Die [Gamepad API](/de/docs/Web/API/Gamepad_API/Using_the_Gamepad_API) ist standardmäßig aktiviert ([Firefox-Fehler 878828](https://bugzil.la/878828)).
- Die Methode `CanvasRenderingContext2D.drawSystemFocusRing()` wurde in {{domxref("CanvasRenderingContext2D.drawFocusIfNeeded()")}} umbenannt ([Firefox-Fehler 959820](https://bugzil.la/959820)).

### MathML

_Keine Änderung._

### SVG

_Keine Änderung._

## Sicherheit

- Die experimentelle CSP 1.1-Direktive `hash-source` wurde implementiert. Die Voreinstellung `security.csp.experimentalEnabled` sollte auf `true` gesetzt werden, um diese Funktion zu aktivieren ([Firefox-Fehler 883975](https://bugzil.la/883975)).

## Änderungen für Add-on- und Mozilla-Entwickler

- Wichtige Änderungen am Firefox-Theme betreffen die meisten Erweiterungen, die mit der Firefox-Benutzeroberfläche interagieren.
- `nsISecurityCheckedComponent` wurde entfernt ([Firefox-Fehler 794943](https://bugzil.la/794943)). Die meisten Konsumenten können `nsISecurityCheckedComponent` aus ihrer Schnittstellendefinition entfernen, und sie werden weiterhin funktionieren.

### Ältere Versionen

{{Firefox_for_developers}}
