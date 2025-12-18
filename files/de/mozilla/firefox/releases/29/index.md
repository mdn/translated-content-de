---
title: Firefox 29 Versionshinweise für Entwickler
short-title: Firefox 29
slug: Mozilla/Firefox/Releases/29
l10n:
  sourceCommit: 83f4e64da466670c3700110da364546253eae127
---

Firefox 29 wurde am 29. April 2014 veröffentlicht. Dieser Artikel listet wichtige Änderungen auf, die nicht nur für Webentwickler nützlich sind, sondern auch für Firefox- und Gecko-Entwickler sowie Add-on-Entwickler.

## Änderungen für Webentwickler

### Entwicklerwerkzeuge

Wichtige Änderungen umfassen:

- Stark verbesserte Web-Konsole - Arrays werden inline angezeigt, ohne dass man sie im rechten Inspektor öffnen muss, Fensterobjekte zeigen ihre URL an, usw.
- Die [Console API](/de/docs/Web/API/Console_API) wurde zu Web-Workern hinzugefügt ([Fehler 620935](https://bugzil.la/620935)). Jetzt können Sie Nachrichten vom Web-Worker in die Web-Konsole protokollieren.
- Das [Netzwerkmonitor](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/index.html) Werkzeug zeigt jetzt Leistungsstatistiken mittels Tortendiagrammen an ([Firefox-Fehler 846601](https://bugzil.la/846601)).
- Im [Inspektor](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/index.html) sind jetzt Vorschau-Tooltips für CSS-Transformierungen verfügbar ([Firefox-Fehler 726427](https://bugzil.la/726427)).
- DOM-Elemente, die im Debugger und in der Konsole angezeigt werden, können jetzt direkt entfernt oder inspiziert werden, über neue Schaltflächen rechts neben der Variablenauflistung.
- Eine CSS-Quellkarte wird nun vom [Style Editor](https://firefox-source-docs.mozilla.org/devtools-user/style_editor/index.html) unterstützt ([Firefox-Fehler 926014](https://bugzil.la/926014)).
- Autovervollständigung von CSS-Eigenschaften und -Werten wurde zum [Style Editor](https://firefox-source-docs.mozilla.org/devtools-user/style_editor/index.html) hinzugefügt ([Firefox-Fehler 717369](https://bugzil.la/717369)).

_Weitere Details und kleinere Änderungen finden Sie im [Mozilla Hacks Blogbeitrag](https://hacks.mozilla.org/2014/02/css-source-map-support-network-performance-analysis-more-firefox-developer-tools-episode-29/)._

### CSS

- [CSS-Variablen](/de/docs/Web/CSS/Guides/Cascading_variables/Using_custom_properties) wurden implementiert ([Firefox-Fehler 773296](https://bugzil.la/773296)). Mehr Details finden Sie in "CSS Variables in Firefox Nightly" auf Mozilla Hacks. Sie sind standardmäßig nur für Nicht-Release-Builds aktiviert (bei Release-Builds ändern Sie die Voreinstellung `layout.css.variables.enabled` auf `true`, wenn Sie damit experimentieren möchten).
- Flexboxen unterstützen nun {{cssxref("visibility", "visibility: collapse")}} ([Firefox-Fehler 783470](https://bugzil.la/783470)).
- Die {{cssxref("box-sizing")}} Eigenschaft ist jetzt ohne Präfix ([Firefox-Fehler 243412](https://bugzil.la/243412)).
- Die {{cssxref("will-change")}} Eigenschaft, ein Hinweis darauf, dass etwas animiert wird, wurde hinzugefügt. Die Voreinstellung `layout.css.will-change.enabled` muss auf `true` gesetzt werden, um sie zu aktivieren. ([Firefox-Fehler 940842](https://bugzil.la/940842))
- Wissenschaftliche Exponentialdarstellung, wie `3e1` oder `10e+0`, wird jetzt für {{cssxref("&lt;number&gt;")}} Werte und deren Ableitungen, wie {{cssxref("&lt;percentage&gt;")}} und Einheitwerte, unterstützt, aber nicht für {{cssxref("&lt;integer&gt;")}} ([Firefox-Fehler 964529](https://bugzil.la/964529)).
- Bilder vom Typ {{cssxref("&lt;gradient&gt;")}} werden jetzt in {{cssxref("border-image")}} unterstützt ([Firefox-Fehler 709587](https://bugzil.la/709587)).
- Die {{cssxref("touch-action")}} Eigenschaft wurde implementiert. Sie ist standardmäßig nicht aktiviert; die Voreinstellung `layout.css.touch_action.enabled` steuert dies. ([Firefox-Fehler 795567](https://bugzil.la/795567))
- Entfernen des unnötigen Standardstils für das \<pre> Element aus quirk.css ([Firefox-Fehler 948914](https://bugzil.la/948914)).
- Fallback von CSS-Variablen wurde falsch implementiert (primäre Zyklen) ([Firefox-Fehler 950497](https://bugzil.la/950497)).
- @supports-Bedingungen mit Token nach der Priorität einer Deklaration sollten zu false ausgewertet werden ([Firefox-Fehler 909170](https://bugzil.la/909170)).

### HTML

- `<input type=color>` und `<input type=number>` sind jetzt standardmäßig verfügbar.
- Unterstützung für das nicht standardisierte `<pre cols>` wurde entfernt, ebenso wie der Layouteffekt von `<pre wrap>`. Beide Effekte können und sollten mit CSS erreicht werden. ([Firefox-Fehler 949879](https://bugzil.la/949879))

### JavaScript

- Neue ECMAScript 2015 String-Methoden: {{jsxref("String.prototype.codePointAt()")}} und {{jsxref("String.prototype.fromCodePoint()")}} wurden implementiert ([Firefox-Fehler 918879](https://bugzil.la/918879)).
- Die [ECMAScript Internationalization API (ECMA-402)](https://402.ecma-international.org/1.0/) wurde implementiert und ist jetzt standardmäßig in Firefox Desktop aktiviert ([Firefox-Fehler 853301](https://bugzil.la/853301)):
  - Neue Objekte im neuen {{jsxref("Intl")}} Objekt-Namespace:
    - {{jsxref("Intl/Collator", "Intl.Collator")}}
    - {{jsxref("Intl/DateTimeFormat", "Intl.DateTimeFormat")}}
    - {{jsxref("Intl/NumberFormat", "Intl.NumberFormat")}}

  - Die folgenden Methoden von {{jsxref("String")}}, {{jsxref("Number")}} und {{jsxref("Date")}} wurden aktualisiert, um die Argumente `locales` und `options` gemäß ECMA-402 zu berücksichtigen:
    - {{jsxref("String.prototype.localeCompare()")}}
    - {{jsxref("Number.prototype.toLocaleString()")}}
    - {{jsxref("Date.prototype.toLocaleString()")}}
    - {{jsxref("Date.prototype.toLocaleDateString()")}}
    - {{jsxref("Date.prototype.toLocaleTimeString()")}}

- Um der aktualisierten ECMAScript 2015-Entwurfsspezifikation zu entsprechen, behandeln die {{jsxref("Map")}} und {{jsxref("Set")}} Objekte jetzt `-0` und `+0` als gleich bei der Prüfung auf Schlüssel- und Wertgleichheit.
- `Promise` ist jetzt standardmäßig aktiviert ([Firefox-Fehler 918806](https://bugzil.la/918806)).
- Abgeschlossene [Generatoren](/de/docs/Web/JavaScript/Reference/Statements/function*) geben jetzt ein `IteratorResult`-Objekt zurück, anstatt eine Ausnahme zu werfen ([Firefox-Fehler 958951](https://bugzil.la/958951)).
- Ein fehlerhafter JSON-String, der von {{jsxref("JSON.parse()")}} analysiert wird, gibt jetzt eine detailliertere Fehlermeldung mit Angabe der Zeilen- und Spaltennummer zurück, die den Analysefehler verursacht hat. Dies ist nützlich beim Debuggen von großen JSON-Daten.
- Die Methode {{jsxref("ArrayBuffer.isView()")}} wurde hinzugefügt ([Firefox-Fehler 896105](https://bugzil.la/896105)).

### Schnittstellen/APIs/DOM

- Ein neuer Arbeitertyp, [`SharedWorker`](/de/docs/Web/API/SharedWorker), ist jetzt standardmäßig verfügbar ([Firefox-Fehler 924089](https://bugzil.la/924089)).
- Die [`URL`](/de/docs/Web/API/URL) Schnittstelle unterstützt jetzt die [`searchParams`](/de/docs/Web/API/URL/searchParams) Eigenschaft, die ein [`URLSearchParams`](/de/docs/Web/API/URLSearchParams) Objekt zurückgibt, welches die Modifikation der Suchparameter einer URL ermöglicht ([Firefox-Fehler 887836](https://bugzil.la/887836)). Der [`URLSearchParams()`](/de/docs/Web/API/URLSearchParams/URLSearchParams) Konstruktor ermöglicht einfacheres Parsen von Abfrage-Strings.
- Die [`navigator.onLine`](/de/docs/Web/API/WorkerNavigator/onLine) Eigenschaft wird jetzt auf [`WorkerNavigator`](/de/docs/Web/API/WorkerNavigator) unterstützt, was das Erkennen des Online-/Offline-Status in Workern erlaubt ([Firefox-Fehler 925437](https://bugzil.la/925437)).
- Im Rahmen der Implementierung von Web Components wurde die `HTMLShadowElement` Schnittstelle hinter `dom.webcomponents.enabled` implementiert. Setzen Sie diese auf `true`, wenn Sie sie verwenden möchten ([Firefox-Fehler 887538](https://bugzil.la/887538)).
- Die schreibgeschützte Eigenschaft [`HTMLIFrameElement.sandbox`](/de/docs/Web/API/HTMLIFrameElement/sandbox) ist kein String mehr, sondern ein [`DOMTokenList`](/de/docs/Web/API/DOMTokenList) ([Firefox-Fehler 845057](https://bugzil.la/845057)).
- Bei [`HTMLCanvasElement.getContext()`](/de/docs/Web/API/HTMLCanvasElement/getContext) wird der Wert `moz-webgl` nicht mehr unterstützt. Verwenden Sie stattdessen den Standardwert `webgl` ([Firefox-Fehler 913597](https://bugzil.la/913597)).
- Der Konstruktor für [`ImageData`](/de/docs/Web/API/ImageData) wurde hinzugefügt. Diese Schnittstelle kann in einem [`Worker`](/de/docs/Web/API/Worker) verwendet werden ([Firefox-Fehler 959958](https://bugzil.la/959958)).
- Die Eigenschaft [`location.origin`](/de/docs/Web/API/WorkerLocation/origin) ist jetzt in Workern verfügbar (über [`WorkerLocation`](/de/docs/Web/API/WorkerLocation)) ([Firefox-Fehler 964148](https://bugzil.la/964148)).
- Die [`ValidityState.badInput`](/de/docs/Web/API/ValidityState/badInput) Eigenschaft wurde implementiert ([Firefox-Fehler 827161](https://bugzil.la/827161)).
- Die veraltete Eigenschaft `Window.pkcs11` wurde entfernt; sie gab seit Firefox 3.0.14 `null` zurück ([Firefox-Fehler 964964](https://bugzil.la/964964)).
- Die Methoden [`Node.cloneNode()`](/de/docs/Web/API/Node/cloneNode) und [`Document.importNode()`](/de/docs/Web/API/Document/importNode) nehmen das boolesche Argument `deep` an. Bis jetzt, falls sie weggelassen wurden, agierten diese Methoden so, als wäre der Wert von `deep` `true`. Dieses Verhalten wurde jedoch entsprechend der neuesten Spezifikation geändert und wenn sie weggelassen werden, verhalten sich die Methoden so, als wäre der Wert `false` ([Firefox-Fehler 937461](https://bugzil.la/937461)).
- `Window._content` ist nicht mehr für Webinhalte verfügbar ([Firefox-Fehler 946564](https://bugzil.la/946564)).
- Das Verhalten von [`URLUtils.port`](/de/docs/Web/API/HTMLAnchorElement/port) wurde geringfügig geändert: Auf `''` gesetzt, wird es auf den Standardport gesetzt, der mit dem Protokoll assoziiert ist, und `0` auf `0` ([Firefox-Fehler 930450](https://bugzil.la/930450)).
- [`Document.referrer`](/de/docs/Web/API/Document/referrer) basiert jetzt auf dem aktuellen Skript ([Firefox-Fehler 887928](https://bugzil.la/887928)).
- Die [Gamepad API](/de/docs/Web/API/Gamepad_API/Using_the_Gamepad_API) ist standardmäßig aktiviert ([Firefox-Fehler 878828](https://bugzil.la/878828)).
- Die `CanvasRenderingContext2D.drawSystemFocusRing()` Methode wurde umbenannt in [`CanvasRenderingContext2D.drawFocusIfNeeded()`](/de/docs/Web/API/CanvasRenderingContext2D/drawFocusIfNeeded) ([Firefox-Fehler 959820](https://bugzil.la/959820)).

### MathML

_Keine Änderung._

### SVG

_Keine Änderung._

## Sicherheit

- Die experimentelle `hash-source` Direktive von CSP 1.1 wurde implementiert. Die Voreinstellung `security.csp.experimentalEnabled` sollte auf `true` gesetzt werden, um diese Funktionalität zu aktivieren ([Firefox-Fehler 883975](https://bugzil.la/883975)).

## Änderungen für Add-on- und Mozilla-Entwickler

- Größere Theme-Änderungen in Firefox beeinflussen die meisten Erweiterungen, die mit der Firefox-Benutzeroberfläche interagieren.
- `nsISecurityCheckedComponent` wurde entfernt ([Firefox-Fehler 794943](https://bugzil.la/794943)). Die meisten Benutzer können das `nsISecurityCheckedComponent` aus ihrer Schnittstellendefinition entfernen und sie werden weiterhin funktionieren.
