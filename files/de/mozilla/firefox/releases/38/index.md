---
title: Firefox 38 für Entwickler
slug: Mozilla/Firefox/Releases/38
l10n:
  sourceCommit: 6d311a5f07c97dbcd7bb9a6d49c2fe820a228659
---

{{FirefoxSidebar}}

Firefox 38 wurde am 12. Mai 2015 veröffentlicht. Dieser Artikel listet wichtige Änderungen auf, die nicht nur für Webentwickler nützlich sind, sondern auch für Firefox- und Gecko-Entwickler sowie Add-on-Entwickler.

## Änderungen für Webentwickler

### Entwickler-Tools

Höhepunkte:

- [Audionodes im Web Audio Editor umgehen](https://firefox-source-docs.mozilla.org/devtools-user/web_audio_editor/index.html#bypassing-nodes)
- ["copy"-Befehl in der Webkonsole](https://firefox-source-docs.mozilla.org/devtools-user/web_console/index.html#helper-commands)
- [XmlHttpRequests in der Webkonsole hervorheben und filtern](https://firefox-source-docs.mozilla.org/devtools-user/web_console/index.html#xhr)
- [Optimierte Variablen im Debugger anzeigen](https://firefox-source-docs.mozilla.org/devtools-user/debugger/how_to/set_watch_expressions/index.html)
- [Sicherheitswarnungen im Netzwerkmonitor anzeigen](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/index.html#security)
- [Übertragene Größen im Netzwerkmonitor anzeigen](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/index.html#network-request-fields)
- [Alle Animationen auf der Seite abspielen/anhalten](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/work_with_animations/index.html#animations-view)

[Alle Devtools-Bugs, die zwischen Firefox 37 und Firefox 38 behoben wurden](https://bugzilla.mozilla.org/buglist.cgi?resolution=FIXED&classification=Client%20Software&chfieldto=2015-02-23&query_format=advanced&chfield=resolution&chfieldfrom=2015-01-12&chfieldvalue=FIXED&bug_status=RESOLVED&bug_status=VERIFIED&component=Developer%20Tools&component=Developer%20Tools%3A%203D%20View&component=Developer%20Tools%3A%20Canvas%20Debugger&component=Developer%20Tools%3A%20Console&component=Developer%20Tools%3A%20Debugger&component=Developer%20Tools%3A%20Framework&component=Developer%20Tools%3A%20Graphic%20Commandline%20and%20Toolbar&component=Developer%20Tools%3A%20Inspector&component=Developer%20Tools%3A%20Memory&component=Developer%20Tools%3A%20Netmonitor&component=Developer%20Tools%3A%20Object%20Inspector&component=Developer%20Tools%3A%20Profiler&component=Developer%20Tools%3A%20Responsive%20Mode&component=Developer%20Tools%3A%20Scratchpad&component=Developer%20Tools%3A%20Source%20Editor&component=Developer%20Tools%3A%20Storage%20Inspector&component=Developer%20Tools%3A%20Style%20Editor&component=Developer%20Tools%3A%20Timeline&component=Developer%20Tools%3A%20User%20Stories&component=Developer%20Tools%3A%20Web%20Audio%20Editor&component=Developer%20Tools%3A%20WebGL%20Shader%20Editor&component=Developer%20Tools%3A%20WebIDE&product=Firefox&list_id=12076303).

### CSS

- Unterstützung für {{cssxref("ruby-position")}} und {{cssxref("ruby-align")}} wurde hinzugefügt und ist standardmäßig verfügbar ([Firefox bug 1055676](https://bugzil.la/1055676) [Firefox bug 1123917](https://bugzil.la/1123917) und [Firefox bug 1039006](https://bugzil.la/1039006)).
- Die {{cssxref(":unresolved")}} Pseudo-Klasse wurde für benutzerdefinierte Elemente implementiert ([Firefox bug 1111633](https://bugzil.la/1111633)).
- Der vordefinierte Stil {{cssxref("list-style-type", "ethiopic-numeric")}} verwendet jetzt ein Leerzeichen anstelle eines Punktes als Suffix, um einer kürzlichen Änderung der Spezifikation zu entsprechen ([Firefox bug 1120721](https://bugzil.la/1120721)).
- CSS-Transitionen auf generiertem Inhalt (mit {{cssxref("::before")}} und {{cssxref("::after")}}) sowohl innerhalb eines Inline-Elements als auch des Blockelements, das sie trennt, starten jetzt wie in der Spezifikation erwartet ([Firefox bug 1110277](https://bugzil.la/1110277)).
- Die Implementierung von CSS Logical Properties hat große Fortschritte gemacht. Die folgenden Eigenschaften sind hinter dem Flag `layout.css.vertical-text.enabled` (`false` standardmäßig) verfügbar:

  - Richtungsunabhängige Äquivalente von {{cssxref("width")}} und {{cssxref("height")}}: {{cssxref("block-size")}} und {{cssxref("inline-size")}} ([Firefox bug 1117983](https://bugzil.la/1117983)).
  - Richtungsunabhängige Äquivalente von {{cssxref("min-width")}} und {{cssxref("min-height")}}: {{cssxref("min-block-size")}} und {{cssxref("min-inline-size")}} ([Firefox bug 1117983](https://bugzil.la/1117983)).
  - Richtungsunabhängige Äquivalente von {{cssxref("max-width")}} und {{cssxref("max-height")}}: {{cssxref("max-block-size")}} und {{cssxref("max-inline-size")}} ([Firefox bug 1117983](https://bugzil.la/1117983)).
  - Richtungsunabhängige Äquivalente von {{cssxref("margin-top")}}, {{cssxref("margin-right")}}, {{cssxref("margin-bottom")}} und {{cssxref("margin-left")}}: {{cssxref("margin-block-start")}}, {{cssxref("margin-block-end")}}, {{cssxref("margin-inline-start")}} und {{cssxref("margin-inline-end")}} ([Firefox bug 649142](https://bugzil.la/649142)).
  - Richtungsunabhängige Äquivalente von {{cssxref("padding-top")}}, {{cssxref("padding-right")}}, {{cssxref("padding-bottom")}} und {{cssxref("padding-left")}}: {{cssxref("padding-block-start")}}, {{cssxref("padding-block-end")}}, {{cssxref("padding-inline-start")}} und {{cssxref("padding-inline-end")}} ([Firefox bug 649142](https://bugzil.la/649142)).
  - Richtungsunabhängige Äquivalente von {{cssxref("border-top")}}, {{cssxref("border-right")}}, {{cssxref("border-bottom")}} und {{cssxref("border-left")}} und deren Longhands für Breite, Stil und Farbe: {{cssxref("border-block-start")}}, {{cssxref("border-block-start-width")}}, {{cssxref("border-block-start-style")}}, {{cssxref("border-block-start-color")}}, {{cssxref("border-block-end")}}, {{cssxref("border-block-end-width")}}, {{cssxref("border-block-end-style")}}, {{cssxref("border-block-end-color")}}, {{cssxref("border-inline-start")}}, {{cssxref("border-inline-start-width")}}, {{cssxref("border-inline-start-style")}}, {{cssxref("border-inline-start-color")}}, {{cssxref("border-inline-end")}}, {{cssxref("border-inline-end-width")}}, {{cssxref("border-inline-end-style")}} und {{cssxref("border-inline-end-color")}} ([Firefox bug 649142](https://bugzil.la/649142)).
  - Richtungsunabhängige Äquivalente von {{cssxref("top")}}, {{cssxref("right")}}, {{cssxref("bottom")}} und {{cssxref("left")}}: {{cssxref("inset-block-start")}}, `offset-block-end`, `offset-inline-start` und `offset-inline-end` ([Firefox bug 1120283](https://bugzil.la/1120283)).

- Wie [CSS-Transitionen](/de/docs/Web/CSS/CSS_transitions/Using_CSS_transitions) starten, wurde geändert, um einer kürzlichen Änderung der Spezifikationen zu entsprechen, die auf interoperables Verhalten zwischen Browsern abzielt ([Firefox bug 960465](https://bugzil.la/960465)).

### HTML

- Das {{HTMLElement("label")}}-Element leitet keine Ereignisse mehr an das Ziel-Label-Element weiter, wenn interaktive Inhalte zwischen dem Ereignisziel und dem Label gefunden werden ([Firefox bug 229925](https://bugzil.la/229925)).
- Das {{HTMLElement("picture")}}-Element wurde standardmäßig aktiviert ([Firefox bug 1017875](https://bugzil.la/1017875)).
- `<meta name="referrer">` wird nun für Navigationen aus dem Kontextmenü oder per Mittelklick unterstützt ([Firefox bug 1113431](https://bugzil.la/1113431)).

### JavaScript

- {{jsxref("Generator/return", "Generator.prototype.return()")}} ist implementiert ([Firefox bug 1115868](https://bugzil.la/1115868)).
- {{jsxref("Functions/set", "Setter")}} mit einem {{jsxref("Functions/rest_parameters", "Rest-Parameter", "", 1)}} ist jetzt ein {{jsxref("SyntaxError")}} ([Firefox bug 1089632](https://bugzil.la/1089632)).
- Die {{jsxref("Function/name", "name")}}-Eigenschaft von Funktionen ist jetzt konfigurierbar ([Firefox bug 1084019](https://bugzil.la/1084019)).
- Mehrere {{jsxref("Array")}}-Methoden wurden auch für [typed arrays](/de/docs/Web/JavaScript/Guide/Typed_arrays) implementiert:

  - Die {{jsxref("TypedArray.of", "of()")}} und {{jsxref("TypedArray.from", "from()")}} Methoden ([Firefox bug 896608](https://bugzil.la/896608)).
  - Die {{jsxref("TypedArray.forEach", "forEach()")}} Methode ([Firefox bug 1107645](https://bugzil.la/1107645)).
  - Die {{jsxref("TypedArray.filter", "filter()")}} und {{jsxref("TypedArray.map", "map()")}} Methoden ([Firefox bug 1121936](https://bugzil.la/1121936)).
  - Die {{jsxref("TypedArray.slice", "slice()")}} Methode ([Firefox bug 1121935](https://bugzil.la/1121935)).

- Doppelte Parameternamen sind nicht mehr erlaubt, wenn ein Rest-Parameter vorhanden ist ([Firefox bug 1096376](https://bugzil.la/1096376)).
- Doppelte Parameternamen sind in Pfeilfunktionen nicht mehr erlaubt ([Firefox bug 1096377](https://bugzil.la/1096377)).
- Doppelte Parameternamen sind in prägnanten Methodendefinitionen nicht mehr erlaubt ([Firefox bug 1096378](https://bugzil.la/1096378)).
- Eine Warnung wird angezeigt, wenn der {{jsxref("Map")}}/{{jsxref("Set")}}/{{jsxref("WeakMap")}}-Konstruktor ohne {{jsxref("Operators/new", "new")}} aufgerufen wird ([Firefox bug 1108930](https://bugzil.la/1108930)).
- Die {{jsxref("WeakMap.get", "get")}}, {{jsxref("WeakMap.has", "has")}}, und {{jsxref("WeakMap.delete", "delete")}} Methoden von {{jsxref("WeakMap")}} Objekten werfen keinen Fehler mehr, wenn der `key`-Parameter kein Objekt ist ([Firefox bug 1127827](https://bugzil.la/1127827)).
- Der optionale und nicht standardisierte zweite `fallback`-Parameter für {{jsxref("WeakMap.prototype.get()")}} wurde entfernt ([Firefox bug 1127827](https://bugzil.la/1127827)).
- Bei der Definition einer [Generator-Methode](/de/docs/Web/JavaScript/Reference/Functions/Method_definitions) sind "`set`" und "`get`" nicht mehr ungültige Namen ([Firefox bug 1073809](https://bugzil.la/1073809)).
- {{jsxref("RegExp.prototype.source")}} gibt jetzt "(?:)" statt eines leeren String für leere reguläre Ausdrücke zurück ([Firefox bug 1130798](https://bugzil.la/1130798)).
- {{jsxref("RegExp.prototype.source")}} und {{jsxref("RegExp.prototype.toString()")}} escapen nun reguläre Ausdrucksmuster ordnungsgemäß (z.B. Zeilenabschlusszeichen, "\n") ([Firefox bug 1130860](https://bugzil.la/1130860)).
- Die {{jsxref("Regexp")}} {{jsxref("Regexp.global", "global")}}, {{jsxref("Regexp.ignoreCase", "ignoreCase")}}, {{jsxref("Regexp.multiline", "multiline")}}, und {{jsxref("Regexp.sticky", "sticky")}} Eigenschaften sind jetzt Prototypeigenschaftszugriffe statt eigene Dateneigenschaften von `RegExp` Instanzen ([Firefox bug 1120169](https://bugzil.la/1120169)).
- Die {{jsxref("RegExp.prototype.source")}} Eigenschaft ist jetzt eine Prototypeigenschaftszugriff und keine eigene Dateneigenschaft von `RegExp` Instanzen ([Firefox bug 1120169](https://bugzil.la/1120169)). Nur in Nicht-Release-Version verfügbar, aufgrund von [Firefox bug 1150297](https://bugzil.la/1150297).
- {{jsxref("Function.prototype.toString()")}} wirft jetzt für {{jsxref("Proxy")}} Objekte einen Fehler ([Firefox bug 1100936](https://bugzil.la/1100936)).

### Schnittstellen/APIs/DOM

- Die Fetch API Methode [`fetch()`](/de/docs/Web/API/Window/fetch) wurde implementiert ([Firefox bug 1039846](https://bugzil.la/1039846)).
- Die [`BroadcastChannel`](/de/docs/Web/API/BroadcastChannel) API wurde implementiert und ist in [Web Workers](/de/docs/Web/API/Web_Workers_API) verfügbar ([Firefox bug 966439](https://bugzil.la/966439) und [Firefox bug 1121420](https://bugzil.la/1121420)).
- Die Console API ist jetzt in [Web Workers](/de/docs/Web/API/Web_Workers_API) verfügbar.
- `CanvasRenderingContext2D.clearHitRegions()` wurde implementiert ([Firefox bug 1119527](https://bugzil.la/1119527)).
- Konstanten von [`KeyboardEvent.location`](/de/docs/Web/API/KeyboardEvent/location), `DOM_KEY_LOCATION_MOBILE` und DOM_KEY_LOCATION_JOYSTICK, wurden entfernt, da sie aus der DOM Level 3 Spezifikation entfernt wurden ([Firefox bug 936313](https://bugzil.la/936313)).
- [`KeyboardEvent.code`](/de/docs/Web/API/KeyboardEvent/code) ist jetzt verfügbar; zuvor war es nur in Vorabversionen verfügbar. ([Firefox bug 1126673](https://bugzil.la/1126673))
- [`KeyboardEvent.code`](/de/docs/Web/API/KeyboardEvent/code) unterstützt jetzt Sondertasten auf Sun-Tastaturen in Linux, Android und Firefox OS. ([Firefox bug 1020139](https://bugzil.la/1020139))
- Der [`TextEncoder()`](/de/docs/Web/API/TextEncoder/TextEncoder) Konstruktor wurde geändert, um der Spezifikation zu entsprechen: Wenn ein ungültiger Parameter übergeben wird, wird jetzt der `RangeError` [`DOMException`](/de/docs/Web/API/DOMException) ausgelöst, anstelle des fehlerhaften {{jsxref("TypeError")}} ([Firefox bug 1125766](https://bugzil.la/1125766)).
- Die User Timing API, die [`Performance.mark()`](/de/docs/Web/API/Performance/mark), [`Performance.clearMarks()`](/de/docs/Web/API/Performance/clearMarks), [`Performance.measure()`](/de/docs/Web/API/Performance/measure), und [`Performance.clearMeasures()`](/de/docs/Web/API/Performance/clearMeasures) hinzufügt, wurde implementiert ([Firefox bug 782751](https://bugzil.la/782751)).
- Die vorangestellte Version von [`Window.indexedDB`](/de/docs/Web/API/Window/indexedDB), `mozIndexedDB`, wurde entfernt ([Firefox bug 975699](https://bugzil.la/975699)).
- Das [`DOMContentLoaded`](/de/docs/Web/API/Document/DOMContentLoaded_event) Ereignis ist nicht mehr abortierbar ([Firefox bug 1134559](https://bugzil.la/1134559)).
- Sie können jetzt [WebSockets](/de/docs/Web/API/WebSockets_API) in [Workers](/de/docs/Web/API/Web_Workers_API) verwenden ([Firefox bug 504553](https://bugzil.la/504553)).
- Die [`XMLHttpRequest.responseType`](/de/docs/Web/API/XMLHttpRequest/responseType) und [`XMLHttpRequest.withCredentials`](/de/docs/Web/API/XMLHttpRequest/withCredentials) Eigenschaften können jetzt festgelegt werden, bevor [`XMLHttpRequest.open()`](/de/docs/Web/API/XMLHttpRequest/open) aufgerufen wird ([Firefox bug 707484](https://bugzil.la/707484)).

### MathML

_Keine Änderung._

### SVG

_Keine Änderung._

### Audio/Video

_Keine Änderung._

## Netzwerk

_Keine Änderung._

## Sicherheit

- In Firefox wird das [`autocomplete`](/de/docs/Web/HTML/Element/input#autocomplete)`=false` Attribut bei Anmeldeformularen jetzt ignoriert ([Firefox bug 1025703](https://bugzil.la/1025703)). Dies soll die Verwendung sichererer Passwörter fördern, indem es Passwortverwaltungstools ermöglicht, zuverlässiger zu funktionieren.
- RC4 ist jetzt bei der Verwendung von TLS deaktiviert, mit Ausnahme einiger speziell zugelassener Websites. Diese Whitelist ist eine Zwischenlösung, bis diese Seiten behoben sind ([Firefox bug 1124039](https://bugzil.la/1124039)). Dieser Rückfall wird durch die `security.tls.unrestricted_rc4_fallback` Einstellung gesteuert, die momentan standardmäßig `true` ist ([Firefox bug 1138882](https://bugzil.la/1138882)).
- Websites, die einen Rückfall auf eine unsichere Version von TLS benötigen, um zu funktionieren, sind jetzt in einer fest codierten Whitelist, die im Laufe der Zeit schrumpfen wird ([Firefox bug 1114816](https://bugzil.la/1114816)). Die Whitelist kann durch Setzen von `security.tls.insecure_fallback_hosts.use_static_list` auf `false` deaktiviert werden.

## Änderungen für Add-on- und Mozilla-Entwickler

### Add-on SDK

#### Höhepunkte

- `sdk/context-menu@2` wurde implementiert ([Firefox bug 1070952](https://bugzil.la/1070952)).
- `sdk/addon/bootstrap` wurde implementiert ([Firefox bug 1075541](https://bugzil.la/1075541)).
- `sdk/windows/loader` wurde entfernt ([Firefox bug 970135](https://bugzil.la/970135)).
- Fix für die Erkennung der Standardsprache unter Linux ([Firefox bug 1114712](https://bugzil.la/1114712)).
- `toolkit/loader` hat jetzt ein Opt-in-Modul-Kompatibilitätsprüfung, die für alle jpm Add-ons aktiviert ist ([Firefox bug 1037235](https://bugzil.la/1037235)).

#### Electrolysis (E10s) Updates

- `sdk/page-worker` e10s Updates ([Firefox bug 1116004](https://bugzil.la/1116004)).
- `sdk/content/worker` e10s Updates ([Firefox bug 1116544](https://bugzil.la/1116544)).
- `sdk/tabs` e10s Updates ([Firefox bug 1033838](https://bugzil.la/1033838)).

#### Details

- [GitHub Commits zwischen Firefox 37 und Firefox 38](https://github.com/mozilla/addon-sdk/compare/firefox36...firefox38).

### XUL

_Keine Änderung._

### JavaScript-Code-Module

#### Downloads.jsm

- [`DownloadTarget`](/de/docs/Mozilla/JavaScript_code_modules/Downloads.jsm/DownloadTarget) Objekte haben jetzt die Eigenschaften `exists` und `size`, die es Ihnen ermöglichen, die Existenz und die Größe der Zieldatei des Downloads auf der Festplatte zu bestimmen, sowie eine neue `refresh()` Methode, die fordert, dass diese Werte aktualisiert werden.

### XPCOM

- `"@mozilla.org/network/atomic-file-output-stream;1"` und `"@mozilla.org/network/safe-file-output-stream;1"` werfen jetzt eine Ausnahme, wenn `PR_APPEND` ohne `PR_TRUNCATE` übergeben wird ([Firefox bug 1117580](https://bugzil.la/1117580)).
- `nsICompositionStringSynthesizer` und `nsIDOMWindowUtils.sendCompositionEvent()` wurden entfernt. Verwenden Sie stattdessen `nsITextInputProcessor`. ([Firefox bug 917322](https://bugzil.la/917322))
- `nsIDOMWindowUtils.sendKeyEvent()` ist jetzt veraltet. Verwenden Sie stattdessen `nsITextInputProcessor` ([Firefox bug 1119609](https://bugzil.la/1119609)).

## Ältere Versionen

{{Firefox_for_developers}}
