---
title: Firefox 29 Versionshinweise für Entwickler
short-title: Firefox 29
slug: Mozilla/Firefox/Releases/29
l10n:
  sourceCommit: 61912f53d01e935aea926a2226130fb4587414a9
---

Firefox 29 wurde am 29. April 2014 veröffentlicht. Dieser Artikel listet wichtige Änderungen auf, die nicht nur für Webentwickler, sondern auch für Firefox- und Gecko-Entwickler sowie Add-On-Entwickler nützlich sind.

## Änderungen für Webentwickler

### Entwicklertools

Wesentliche Änderungen umfassen:

- Stark verbesserte Webkonsole - Arrays werden inline angezeigt, ohne dass ein Klick erforderlich ist, um sie im rechten Inspektor zu öffnen, Fensterobjekte zeigen ihre URL an usw.
- Die [Console API](/de/docs/Web/API/Console_API) wurde zu Web Workern hinzugefügt ([Bug 620935](https://bugzil.la/620935)). Jetzt können Sie Nachrichten von Web Workern an die Webkonsole senden.
- Das [Network Monitor](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/index.html) Tool zeigt jetzt Leistungsstatistiken mit Tortendiagrammen an ([Firefox Bug 846601](https://bugzil.la/846601)).
- Im [Inspektor](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/index.html) sind jetzt Vorschautooltips für CSS-Transformationen verfügbar ([Firefox Bug 726427](https://bugzil.la/726427)).
- DOM-Elemente, die im Debugger und in der Konsole gesehen werden, können direkt entfernt oder inspiziert werden, über neue Schaltflächen rechts von der Variablenauflistung.
- Der [Style Editor](https://firefox-source-docs.mozilla.org/devtools-user/style_editor/index.html) unterstützt jetzt eine CSS-Source-Map ([Firefox Bug 926014](https://bugzil.la/926014)).
- Automatische Vervollständigung von CSS-Eigenschaften und -Werten wurde dem [Style Editor](https://firefox-source-docs.mozilla.org/devtools-user/style_editor/index.html) hinzugefügt ([Firefox Bug 717369](https://bugzil.la/717369)).

_Sehen Sie den [Mozilla Hacks Blogbeitrag](https://hacks.mozilla.org/2014/02/css-source-map-support-network-performance-analysis-more-firefox-developer-tools-episode-29/) für Details und weitere kleinere Änderungen._

### CSS

- [CSS-Variablen](/de/docs/Web/CSS/CSS_cascading_variables/Using_CSS_custom_properties) wurden implementiert ([Firefox Bug 773296](https://bugzil.la/773296)). Der Artikel [CSS Variables in Firefox Nightly](https://hacks.mozilla.org/2013/12/css-variables-in-firefox-nightly/) auf Mozilla Hacks enthält weitere Details. Sie sind standardmäßig nur für Nicht-Release-Builds aktiviert (bei Release-Builds ändern Sie die Einstellung `layout.css.variables.enabled` in `true`, wenn Sie sie ausprobieren möchten).
- Flexboxen unterstützen jetzt {{cssxref("visibility", "visibility: collapse")}} ([Firefox Bug 783470](https://bugzil.la/783470)).
- Die {{cssxref("box-sizing")}} Eigenschaft wurde ohne Präfix ([Firefox Bug 243412](https://bugzil.la/243412)).
- Die {{cssxref("will-change")}} Eigenschaft, ein Hinweis darauf, dass etwas animiert wird, wurde hinzugefügt. Die Einstellung `layout.css.will-change.enabled` muss auf `true` gesetzt werden, um sie zu aktivieren. ([Firefox Bug 940842](https://bugzil.la/940842))
- Wissenschaftliche Exponentialnotation, wie `3e1` oder `10e+0`, wird jetzt für {{cssxref("&lt;number&gt;")}}-Werte und Derivate, wie {{cssxref("&lt;percentage&gt;")}} und Einheitswerte, aber nicht {{cssxref("&lt;integer&gt;")}} unterstützt ([Firefox Bug 964529](https://bugzil.la/964529)).
- Bilder des Typs {{cssxref("&lt;gradient&gt;")}} werden jetzt in {{cssxref("border-image")}} unterstützt ([Firefox Bug 709587](https://bugzil.la/709587)).
- Die {{cssxref("touch-action")}} Eigenschaft wurde implementiert. Sie ist standardmäßig nicht aktiviert; die Einstellung `layout.css.touch_action.enabled` steuert sie. ([Firefox Bug 795567](https://bugzil.la/795567))
- Entfernen Sie den überflüssigen Standardstil für das \<pre>-Element aus quirk.css ([Firefox Bug 948914](https://bugzil.la/948914)).
- Falsch implementierter Fallback für CSS-Variablen (primäre Zyklen) ([Firefox Bug 950497](https://bugzil.la/950497)).
- @supports Bedingungen mit Token nach der Priorität einer Deklaration sollten zu "falsch" ausgewertet werden ([Firefox Bug 909170](https://bugzil.la/909170)).

### HTML

- `<input type=color>` und `<input type=number>` sind standardmäßig verfügbar.
- Unterstützung für das nicht standardisierte `<pre cols>` wurde entfernt, ebenso wie der Layouteffekt von `<pre wrap>`. Beide Effekte können und sollten mittels CSS erreicht werden. ([Firefox Bug 949879](https://bugzil.la/949879))

### JavaScript

- Neue ECMAScript 2015-String-Methoden: {{jsxref("String.prototype.codePointAt()")}} und {{jsxref("String.prototype.fromCodePoint()")}} wurden implementiert ([Firefox Bug 918879](https://bugzil.la/918879)).
- Die [ECMAScript Internationalization API (ECMA-402)](https://402.ecma-international.org/1.0/) wurde implementiert und ist jetzt standardmäßig in Firefox Desktop aktiviert ([Firefox Bug 853301](https://bugzil.la/853301)):
  - Neue Objekte im neuen {{jsxref("Intl")}}-Objektnamespace:
    - {{jsxref("Intl/Collator", "Intl.Collator")}}
    - {{jsxref("Intl/DateTimeFormat", "Intl.DateTimeFormat")}}
    - {{jsxref("Intl/NumberFormat", "Intl.NumberFormat")}}

  - Die folgenden Methoden von {{jsxref("String")}}, {{jsxref("Number")}} und {{jsxref("Date")}} wurden aktualisiert, um die Argumente `locales` und `options` gemäß ECMA-402 zu enthalten:
    - {{jsxref("String.prototype.localeCompare()")}}
    - {{jsxref("Number.prototype.toLocaleString()")}}
    - {{jsxref("Date.prototype.toLocaleString()")}}
    - {{jsxref("Date.prototype.toLocaleDateString()")}}
    - {{jsxref("Date.prototype.toLocaleTimeString()")}}

- Um den aktualisierten ECMAScript 2015-Draftspezifikationen zu entsprechen, behandeln die {{jsxref("Map")}} und {{jsxref("Set")}} Objekte jetzt `-0` und `+0` als gleich, wenn sie die Gleichheit von Schlüsseln und Werten prüfen.
- `Promise` ist jetzt standardmäßig aktiviert ([Firefox Bug 918806](https://bugzil.la/918806)).
- Abgeschlossene [Generatore](/de/docs/Web/JavaScript/Reference/Statements/function*) geben jetzt ein `IteratorResult`-Objekt zurück, anstatt einen Fehler zu werfen ([Firefox Bug 958951](https://bugzil.la/958951)).
- Eine fehlerhafte JSON-Zeichenfolge, die von {{jsxref("JSON.parse()")}} geparst wird, liefert jetzt eine detailliertere Fehlermeldung mit der Zeilen- und Spaltennummer, die den Parser-Fehler verursacht hat. Das ist nützlich beim Debuggen großer JSON-Daten.
- Die Methode {{jsxref("ArrayBuffer.isView()")}} wurde hinzugefügt ([Firefox Bug 896105](https://bugzil.la/896105)).

### Schnittstellen/APIs/DOM

- Ein neuer Arbeitertyp, [`SharedWorker`](/de/docs/Web/API/SharedWorker), ist jetzt standardmäßig verfügbar ([Firefox Bug 924089](https://bugzil.la/924089)).
- Die [`URL`](/de/docs/Web/API/URL) Schnittstelle unterstützt jetzt die [`searchParams`](/de/docs/Web/API/URL/searchParams) Eigenschaft, die ein [`URLSearchParams`](/de/docs/Web/API/URLSearchParams) Objekt zurückgibt, das es ermöglicht, die Suchparameter einer URL zu ändern ([Firefox Bug 887836](https://bugzil.la/887836)). Der Konstruktor [`URLSearchParams()`](/de/docs/Web/API/URLSearchParams/URLSearchParams) ermöglicht eine einfachere Analyse von Abfragezeichenfolgen.
- Die [`navigator.onLine`](/de/docs/Web/API/WorkerNavigator/onLine) Eigenschaft wird jetzt auf [`WorkerNavigator`](/de/docs/Web/API/WorkerNavigator) unterstützt, wodurch es möglich ist, den Online-/Offline-Status in Workern zu erfahren ([Firefox Bug 925437](https://bugzil.la/925437)).
- Im Rahmen der Implementierung von Web Components wurde die `HTMLShadowElement` Schnittstelle hinter dem `dom.webcomponents.enabled` implementiert. Schalten Sie es auf `true`, wenn Sie es verwenden möchten. ([Firefox Bug 887538](https://bugzil.la/887538))
- Die schreibgeschützte Eigenschaft [`HTMLIFrameElement.sandbox`](/de/docs/Web/API/HTMLIFrameElement/sandbox) ist kein String mehr, sondern eine [`DOMTokenList`](/de/docs/Web/API/DOMTokenList) ([Firefox Bug 845057](https://bugzil.la/845057)).
- Bei [`HTMLCanvasElement.getContext()`](/de/docs/Web/API/HTMLCanvasElement/getContext) wird der Wert `moz-webgl` nicht mehr unterstützt. Verwenden Sie den Standardwert `webgl` ([Firefox Bug 913597](https://bugzil.la/913597)).
- Der Konstruktor für [`ImageData`](/de/docs/Web/API/ImageData) wurde hinzugefügt. Diese Schnittstelle kann in einem [`Worker`](/de/docs/Web/API/Worker) verwendet werden. ([Firefox Bug 959958](https://bugzil.la/959958))
- Die Eigenschaft [`location.origin`](/de/docs/Web/API/WorkerLocation/origin) ist jetzt in Workern verfügbar (über [`WorkerLocation`](/de/docs/Web/API/WorkerLocation)) ([Firefox Bug 964148](https://bugzil.la/964148)).
- Die Eigenschaft [`ValidityState.badInput`](/de/docs/Web/API/ValidityState/badInput) wurde implementiert ([Firefox Bug 827161](https://bugzil.la/827161)).
- Die veraltete Eigenschaft `Window.pkcs11` wurde entfernt; sie hat seit Firefox 3.0.14 `null` zurückgegeben. ([Firefox Bug 964964](https://bugzil.la/964964))
- Die Methoden [`Node.cloneNode()`](/de/docs/Web/API/Node/cloneNode) und [`Document.importNode()`](/de/docs/Web/API/Document/importNode) nehmen das boolesche Argument `deep`. Bis jetzt arbeiteten diese Methoden, falls das Argument weggelassen wurde, als ob der Wert von `deep` `true` wäre. Doch dieses Verhalten wurde gemäß der neuesten Spezifikation geändert, und wenn es weggelassen wird, agieren die Methoden nun, als ob der Wert `false` wäre. ([Firefox Bug 937461](https://bugzil.la/937461))
- `Window._content` ist für Webinhalte nicht mehr verfügbar ([Firefox Bug 946564](https://bugzil.la/946564)).
- Das Verhalten von [`URLUtils.port`](/de/docs/Web/API/HTMLAnchorElement/port) wurde geringfügig geändert: Das Setzen auf `''` wird es auf den Standard-Port setzen, der mit dem Protokoll verbunden ist, und `0` auf `0`. ([Firefox Bug 930450](https://bugzil.la/930450))
- [`Document.referrer`](/de/docs/Web/API/Document/referrer) basiert jetzt auf dem aktuellen Skript ([Firefox Bug 887928](https://bugzil.la/887928)).
- Die [Gamepad API](/de/docs/Web/API/Gamepad_API/Using_the_Gamepad_API) ist standardmäßig aktiviert ([Firefox Bug 878828](https://bugzil.la/878828)).
- Die Methode `CanvasRenderingContext2D.drawSystemFocusRing()` wurde umbenannt in [`CanvasRenderingContext2D.drawFocusIfNeeded()`](/de/docs/Web/API/CanvasRenderingContext2D/drawFocusIfNeeded) ([Firefox Bug 959820](https://bugzil.la/959820)).

### MathML

_Keine Änderung._

### SVG

_Keine Änderung._

## Sicherheit

- Die experimentelle CSP 1.1 `hash-source` Richtlinie wurde implementiert. Die Einstellung `security.csp.experimentalEnabled` sollte auf `true` gesetzt werden, um diese Funktionalität zu aktivieren ([Firefox Bug 883975](https://bugzil.la/883975)).

## Änderungen für Add-on- und Mozilla-Entwickler

- Wichtige Änderungen am Firefox-Theme betreffen die meisten Erweiterungen, die mit der Benutzeroberfläche von Firefox interagieren.
- `nsISecurityCheckedComponent` wurde entfernt ([Firefox Bug 794943](https://bugzil.la/794943)). Die meisten Verbraucher können `nsISecurityCheckedComponent` aus ihrer Schnittstellendefinition entfernen und sie werden weiterhin funktionieren.
