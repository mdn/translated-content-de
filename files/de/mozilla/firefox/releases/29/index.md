---
title: Firefox 29 für Entwickler
slug: Mozilla/Firefox/Releases/29
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{FirefoxSidebar}}

Firefox 29 wurde am 29. April 2014 veröffentlicht. Dieser Artikel listet wichtige Änderungen auf, die nicht nur für Webentwickler nützlich sind, sondern auch für Firefox- und Gecko-Entwickler sowie Erweiterungsentwickler.

## Änderungen für Webentwickler

### Entwicklerwerkzeuge

Wichtige Änderungen umfassen:

- Stark verbessertes Web-Konsolen - Arrays werden inline angezeigt, ohne dass ein Klick erforderlich ist, um sie im rechten Inspektor anzuzeigen, Fensterobjekte zeigen ihre URL an, usw.
- Hinzufügen der [Konsole API](/de/docs/Web/API/Console_API) zu Web-Workern ([Fehler 620935](https://bugzil.la/620935)). Nun können Sie Nachrichten von Web-Workern an die Web-Konsole senden.
- Das [Netzwerk-Monitor](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/index.html) Werkzeug zeigt jetzt Leistungsstatistiken mit Kreisdiagrammen ([Firefox Fehler 846601](https://bugzil.la/846601)).
- Im [Inspektor](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/index.html) sind jetzt Vorschautooltips für CSS-Transformationen verfügbar ([Firefox Fehler 726427](https://bugzil.la/726427)).
- DOM-Elemente, die im Debugger und der Konsole angezeigt werden, können direkt entfernt oder inspiziert werden, über die neuen Schaltflächen rechts neben der Variablenauflistung.
- Ein CSS-Source-Map wird jetzt vom [Stil-Editor](https://firefox-source-docs.mozilla.org/devtools-user/style_editor/index.html) unterstützt ([Firefox Fehler 926014](https://bugzil.la/926014)).
- Die Autovervollständigung von CSS-Eigenschaften und -Werten wurde dem [Stil-Editor](https://firefox-source-docs.mozilla.org/devtools-user/style_editor/index.html) hinzugefügt ([Firefox Fehler 717369](https://bugzil.la/717369)).

_Siehe den [Mozilla Hacks Blogbeitrag](https://hacks.mozilla.org/2014/02/css-source-map-support-network-performance-analysis-more-firefox-developer-tools-episode-29/) für Details und andere kleinere Änderungen._

### CSS

- [CSS-Variablen](/de/docs/Web/CSS/CSS_cascading_variables/Using_CSS_custom_properties) wurden implementiert ([Firefox Fehler 773296](https://bugzil.la/773296)). Der Artikel [CSS Variables in Firefox Nightly](https://hacks.mozilla.org/2013/12/css-variables-in-firefox-nightly/) auf Mozilla Hacks enthält weitere Details. Sie sind standardmäßig nur in Nicht-Veröffentlichungs-Builds aktiviert (in Veröffentlichungs-Builds setzen Sie die Einstellung `layout.css.variables.enabled` auf `true`, wenn Sie damit spielen möchten).
- Flexboxen unterstützen jetzt {{cssxref("visibility", "visibility: collapse")}} ([Firefox Fehler 783470](https://bugzil.la/783470)).
- Die {{cssxref("box-sizing")}}-Eigenschaft wurde unpräfixiert ([Firefox Fehler 243412](https://bugzil.la/243412)).
- Die {{cssxref("will-change")}}-Eigenschaft, ein Hinweis darauf, dass sich etwas animieren wird, wurde hinzugefügt. Die Einstellung `layout.css.will-change.enabled` muss auf `true` gesetzt werden, um sie zu aktivieren ([Firefox Fehler 940842](https://bugzil.la/940842)).
- Wissenschaftliche Exponentialnotation, wie `3e1` oder `10e+0`, wird jetzt für {{cssxref("&lt;number&gt;")}}-Werte und Derivate, wie {{cssxref("&lt;percentage&gt;")}} und Einheitswerte, aber nicht {{cssxref("&lt;integer&gt;")}}, unterstützt ([Firefox Fehler 964529](https://bugzil.la/964529)).
- Bilder vom Typ {{cssxref("&lt;gradient&gt;")}} werden jetzt in {{cssxref("border-image")}} unterstützt ([Firefox Fehler 709587](https://bugzil.la/709587)).
- Die {{cssxref("touch-action")}}-Eigenschaft wurde implementiert. Sie ist nicht standardmäßig aktiviert; die Einstellung `layout.css.touch_action.enabled` steuert sie ([Firefox Fehler 795567](https://bugzil.la/795567)).
- Entfernen des redundanten Standardstils für das \<pre>-Element aus quirk.css ([Firefox Fehler 948914](https://bugzil.la/948914)).
- CSS-Variablen-Fallback falsch implementiert (primäre Zyklen) ([Firefox Fehler 950497](https://bugzil.la/950497)).
- @supports-Bedingungen mit Token nach der Priorität einer Deklaration sollten zu false evaluieren ([Firefox Fehler 909170](https://bugzil.la/909170)).

### HTML

- `<input type=color>` und `<input type=number>` sind standardmäßig verfügbar.
- Die Unterstützung für das nicht standardisierte `<pre cols>` wurde entfernt, sowie der Layouteffekt von `<pre wrap>`. Beide Effekte können, und sollten, mittels CSS erreicht werden. ([Firefox Fehler 949879](https://bugzil.la/949879))

### JavaScript

- Neue ECMAScript 2015 String-Methoden: {{jsxref("String.prototype.codePointAt()")}} und {{jsxref("String.prototype.fromCodePoint()")}} wurden implementiert ([Firefox Fehler 918879](https://bugzil.la/918879)).
- Die [ECMAScript Internationalization API (ECMA-402)](https://402.ecma-international.org/1.0/) wurde implementiert und ist jetzt standardmäßig in Firefox Desktop aktiviert ([Firefox Fehler 853301](https://bugzil.la/853301)):

  - Neue Objekte im neuen {{jsxref("Intl")}} Objektnamensraum:

    - {{jsxref("Intl/Collator", "Intl.Collator")}}
    - {{jsxref("Intl/DateTimeFormat", "Intl.DateTimeFormat")}}
    - {{jsxref("Intl/NumberFormat", "Intl.NumberFormat")}}

  - Die folgenden Methoden von {{jsxref("String")}}, {{jsxref("Number")}} und {{jsxref("Date")}} wurden aktualisiert, um die Argumente `locales` und `options` gemäß ECMA-402 zu inkludieren:
    - {{jsxref("String.prototype.localeCompare()")}}
    - {{jsxref("Number.prototype.toLocaleString()")}}
    - {{jsxref("Date.prototype.toLocaleString()")}}
    - {{jsxref("Date.prototype.toLocaleDateString()")}}
    - {{jsxref("Date.prototype.toLocaleTimeString()")}}

- Um der aktualisierten ECMAScript 2015-Entwurfsspezifikation zu entsprechen, behandeln die {{jsxref("Map")}} und {{jsxref("Set")}}-Objekte jetzt `-0` und `+0` als gleich, wenn sie Schlüssel- und Wertgleichheit überprüfen.
- `Promise` ist jetzt standardmäßig aktiviert ([Firefox Fehler 918806](https://bugzil.la/918806)).
- Abgeschlossene [Generatoren](/de/docs/Web/JavaScript/Reference/Statements/function*) geben jetzt ein `IteratorResult`-Objekt zurück, anstatt auszulösen ([Firefox Fehler 958951](https://bugzil.la/958951)).
- Ein fehlerhafter JSON-String, der von {{jsxref("JSON.parse()")}} geparst wird, liefert jetzt eine detailliertere Fehlermeldung, die die Zeilen- und Spaltennummer enthält, die den Parsing-Fehler verursacht hat. Dies ist nützlich beim Debuggen großer JSON-Daten.
- Die Methode {{jsxref("ArrayBuffer.isView()")}} wurde hinzugefügt ([Firefox Fehler 896105](https://bugzil.la/896105)).

### Schnittstellen/APIs/DOM

- Ein neuer Typ von Workern, [`SharedWorker`](/de/docs/Web/API/SharedWorker), ist jetzt standardmäßig verfügbar ([Firefox Fehler 924089](https://bugzil.la/924089)).
- Die [`URL`](/de/docs/Web/API/URL) Schnittstelle unterstützt jetzt die [`searchParams`](/de/docs/Web/API/URL/searchParams) Eigenschaft, die ein [`URLSearchParams`](/de/docs/Web/API/URLSearchParams) Objekt zurückgibt, welches es erlaubt, die Suchparameter einer URL zu modifizieren ([Firefox Fehler 887836](https://bugzil.la/887836)). Der [`URLSearchParams()`](/de/docs/Web/API/URLSearchParams/URLSearchParams) Konstruktor ermöglicht einfacheres Parsen von Abfragezeichenfolgen.
- Die Eigenschaft [`navigator.onLine`](/de/docs/Web/API/WorkerNavigator/onLine) wird jetzt auf [`WorkerNavigator`](/de/docs/Web/API/WorkerNavigator) unterstützt, was den Online-/Offline-Status in Workern ermöglicht ([Firefox Fehler 925437](https://bugzil.la/925437)).
- Im Rahmen der Implementierung von Web Components wurde die `HTMLShadowElement` Schnittstelle hinter dem `dom.webcomponents.enabled` implementiert. Schalten Sie sie auf `true`, wenn Sie diese verwenden möchten. ([Firefox Fehler 887538](https://bugzil.la/887538))
- Die schreibgeschützte Eigenschaft [`HTMLIFrameElement.sandbox`](/de/docs/Web/API/HTMLIFrameElement/sandbox) ist kein String mehr, sondern eine [`DOMTokenList`](/de/docs/Web/API/DOMTokenList) ([Firefox Fehler 845057](https://bugzil.la/845057)).
- Bei [`HTMLCanvasElement.getContext()`](/de/docs/Web/API/HTMLCanvasElement/getContext) wird der Wert `moz-webgl` nicht mehr unterstützt. Verwenden Sie den Standardwert `webgl` ([Firefox Fehler 913597](https://bugzil.la/913597)).
- Der Konstruktor für [`ImageData`](/de/docs/Web/API/ImageData) wurde hinzugefügt. Diese Schnittstelle kann in einem [`Worker`](/de/docs/Web/API/Worker) verwendet werden. ([Firefox Fehler 959958](https://bugzil.la/959958))
- Die Eigenschaft [`location.origin`](/de/docs/Web/API/WorkerLocation/origin) ist jetzt in Workern verfügbar (über [`WorkerLocation`](/de/docs/Web/API/WorkerLocation)) ([Firefox Fehler 964148](https://bugzil.la/964148)).
- Die [`ValidityState.badInput`](/de/docs/Web/API/ValidityState/badInput) Eigenschaft wurde implementiert ([Firefox Fehler 827161](https://bugzil.la/827161)).
- Die veraltete Eigenschaft `Window.pkcs11` wurde entfernt; sie gab seit Firefox 3.0.14 `null` zurück. ([Firefox Fehler 964964](https://bugzil.la/964964))
- Die Methoden [`Node.cloneNode()`](/de/docs/Web/API/Node/cloneNode) und [`Document.importNode()`](/de/docs/Web/API/Document/importNode) nehmen das boolesche Argument `deep` entgegen. Bisher verhielten sich diese Methoden, wenn sie weggelassen wurden, so, als wäre der Wert von `deep` `true`. Dieses Verhalten wurde jedoch gemäß der neuesten Spezifikation geändert, und die Methoden verhalten sich nun wie `false`, wenn sie weggelassen werden. ([Firefox Fehler 937461](https://bugzil.la/937461))
- `Window._content` ist für Web-Inhalte nicht mehr verfügbar ([Firefox Fehler 946564](https://bugzil.la/946564)).
- Das Verhalten von [`URLUtils.port`](/de/docs/Web/API/HTMLAnchorElement/port) wurde leicht geändert: Das Setzen auf `''` wird es auf den Standardport gesetzt, der mit dem Protokoll assoziiert ist, und `0` zu `0`. ([Firefox Fehler 930450](https://bugzil.la/930450))
- [`Document.referrer`](/de/docs/Web/API/Document/referrer) basiert jetzt auf dem aktuellen Skript ([Firefox Fehler 887928](https://bugzil.la/887928)).
- Die [Gamepad API](/de/docs/Web/API/Gamepad_API/Using_the_Gamepad_API) ist standardmäßig aktiviert ([Firefox Fehler 878828](https://bugzil.la/878828)).
- Die Methode `CanvasRenderingContext2D.drawSystemFocusRing()` wurde in [`CanvasRenderingContext2D.drawFocusIfNeeded()`](/de/docs/Web/API/CanvasRenderingContext2D/drawFocusIfNeeded) umbenannt ([Firefox Fehler 959820](https://bugzil.la/959820)).

### MathML

_Keine Änderung._

### SVG

_Keine Änderung._

## Sicherheit

- Die CSP 1.1 experimentelle `hash-source` Direktive wurde implementiert. Die Einstellung `security.csp.experimentalEnabled` sollte auf `true` gesetzt werden, um diese Funktionalität zu aktivieren ([Firefox Fehler 883975](https://bugzil.la/883975)).

## Änderungen für Entwickler von Erweiterungen und Mozilla

- Wesentliche Änderungen am Firefox-Thema betreffen die meisten Erweiterungen, die mit der Firefox-Benutzeroberfläche interagieren.
- `nsISecurityCheckedComponent` wurde entfernt ([Firefox Fehler 794943](https://bugzil.la/794943)). Die meisten Verbraucher können `nsISecurityCheckedComponent` aus ihrer Schnittstellendefinition entfernen und weiterhin funktionieren.

### Ältere Versionen

{{Firefox_for_developers}}
