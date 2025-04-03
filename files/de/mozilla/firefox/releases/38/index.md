---
title: Firefox 38 für Entwickler
slug: Mozilla/Firefox/Releases/38
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

{{FirefoxSidebar}}

Firefox 38 wurde am 12. Mai 2015 veröffentlicht. Dieser Artikel listet wichtige Änderungen auf, die nicht nur für Webentwickler nützlich sind, sondern auch für Firefox- und Gecko-Entwickler sowie für Add-on-Entwickler.

## Änderungen für Webentwickler

### Entwicklerwerkzeuge

Höhepunkte:

- [Audio-Knoten im Web Audio Editor umgehen](https://firefox-source-docs.mozilla.org/devtools-user/web_audio_editor/index.html#bypassing-nodes)
- [„copy“ Befehl in der Web-Konsole](https://firefox-source-docs.mozilla.org/devtools-user/web_console/index.html#helper-commands)
- [XmlHttpRequests in der Web-Konsole hervorheben und filtern](https://firefox-source-docs.mozilla.org/devtools-user/web_console/index.html#xhr)
- [Optimierte Variablen im Debugger sehen](https://firefox-source-docs.mozilla.org/devtools-user/debugger/how_to/set_watch_expressions/index.html)
- [Sicherheitswarnungen im Netzwerkmonitor sehen](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/index.html#security)
- [Übertragene Größen im Netzwerkmonitor sehen](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/index.html#network-request-fields)
- [Alle Animationen auf der Seite abspielen/anhalten](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/work_with_animations/index.html#animations-view)

[Alle behobenen Devtools-Bugs zwischen Firefox 37 und Firefox 38](https://bugzilla.mozilla.org/buglist.cgi?resolution=FIXED&classification=Client%20Software&chfieldto=2015-02-23&query_format=advanced&chfield=resolution&chfieldfrom=2015-01-12&chfieldvalue=FIXED&bug_status=RESOLVED&bug_status=VERIFIED&component=Developer%20Tools&component=Developer%20Tools%3A%203D%20View&component=Developer%20Tools%3A%20Canvas%20Debugger&component=Developer%20Tools%3A%20Console&component=Developer%20Tools%3A%20Debugger&component=Developer%20Tools%3A%20Framework&component=Developer%20Tools%3A%20Graphic%20Commandline%20and%20Toolbar&component=Developer%20Tools%3A%20Inspector&component=Developer%20Tools%3A%20Memory&component=Developer%20Tools%3A%20Netmonitor&component=Developer%20Tools%3A%20Object%20Inspector&component=Developer%20Tools%3A%20Profiler&component=Developer%20Tools%3A%20Responsive%20Mode&component=Developer%20Tools%3A%20Scratchpad&component=Developer%20Tools%3A%20Source%20Editor&component=Developer%20Tools%3A%20Storage%20Inspector&component=Developer%20Tools%3A%20Style%20Editor&component=Developer%20Tools%3A%20Timeline&component=Developer%20Tools%3A%20User%20Stories&component=Developer%20Tools%3A%20Web%20Audio%20Editor&component=Developer%20Tools%3A%20WebGL%20Shader%20Editor&component=Developer%20Tools%3A%20WebIDE&product=Firefox&list_id=12076303).

### CSS

- Unterstützung für {{cssxref("ruby-position")}} und {{cssxref("ruby-align")}} wurde hinzugefügt und ist standardmäßig verfügbar ([Firefox Fehler 1055676](https://bugzil.la/1055676) [Firefox Fehler 1123917](https://bugzil.la/1123917) und [Firefox Fehler 1039006](https://bugzil.la/1039006)).
- Die {{cssxref(":unresolved")}} Pseudo-Klasse wurde für benutzerdefinierte Elemente implementiert ([Firefox Fehler 1111633](https://bugzil.la/1111633)).
- Der vordefinierte Stil {{cssxref("list-style-type", "ethiopic-numeric")}} verwendet nun ein Leerzeichen anstelle eines Punktes als Suffix, um einer kürzlichen Änderung an der Spezifikation zu entsprechen ([Firefox Fehler 1120721](https://bugzil.la/1120721)).
- CSS-Übergänge auf generiertem Inhalt (mit {{cssxref("::before")}} und {{cssxref("::after")}}) auf sowohl einer Inline- als auch der Blockebene, die sie trennt, beginnen nun wie von der Spezifikation erwartet ([Firefox Fehler 1110277](https://bugzil.la/1110277)).
- Die Implementierung von CSS Logical Properties hat große Fortschritte gemacht. Die folgenden Eigenschaften sind hinter dem `layout.css.vertical-text.enabled`-Flag verfügbar (standardmäßig `false`):

  - Richtungsunabhängige Äquivalente von {{cssxref("width")}} und {{cssxref("height")}}: {{cssxref("block-size")}} und {{cssxref("inline-size")}} ([Firefox Fehler 1117983](https://bugzil.la/1117983)).
  - Richtungsunabhängige Äquivalente von {{cssxref("min-width")}} und {{cssxref("min-height")}}: {{cssxref("min-block-size")}} und {{cssxref("min-inline-size")}} ([Firefox Fehler 1117983](https://bugzil.la/1117983)).
  - Richtungsunabhängige Äquivalente von {{cssxref("max-width")}} und {{cssxref("max-height")}}: {{cssxref("max-block-size")}} und {{cssxref("max-block-size")}} ([Firefox Fehler 1117983](https://bugzil.la/1117983)).
  - Richtungsunabhängige Äquivalente von {{cssxref("margin-top")}}, {{cssxref("margin-right")}}, {{cssxref("margin-bottom")}} und {{cssxref("margin-left")}}: {{cssxref("margin-block-start")}}, {{cssxref("margin-block-end")}}, {{cssxref("margin-inline-start")}} und {{cssxref("margin-inline-end")}} ([Firefox Fehler 649142](https://bugzil.la/649142)).
  - Richtungsunabhängige Äquivalente von {{cssxref("padding-top")}}, {{cssxref("padding-right")}}, {{cssxref("padding-bottom")}} und {{cssxref("padding-left")}}: {{cssxref("padding-block-start")}}, {{cssxref("padding-block-end")}}, {{cssxref("padding-inline-start")}} und {{cssxref("padding-inline-end")}} ([Firefox Fehler 649142](https://bugzil.la/649142)).
  - Richtungsunabhängige Äquivalente von {{cssxref("border-top")}}, {{cssxref("border-right")}}, {{cssxref("border-bottom")}} und {{cssxref("border-left")}} und ihre Longhands für Breite, Stil und Farbe: {{cssxref("border-block-start")}}, {{cssxref("border-block-start-width")}}, {{cssxref("border-block-start-style")}}, {{cssxref("border-block-start-color")}}, {{cssxref("border-block-end")}}, {{cssxref("border-block-end-width")}}, {{cssxref("border-block-end-style")}}, {{cssxref("border-block-end-color")}}, {{cssxref("border-inline-start")}}, {{cssxref("border-inline-start-width")}}, {{cssxref("border-inline-start-style")}}, {{cssxref("border-inline-start-color")}}, {{cssxref("border-inline-end")}}, {{cssxref("border-inline-end-width")}}, {{cssxref("border-inline-end-style")}} und {{cssxref("border-inline-end-color")}} ([Firefox Fehler 649142](https://bugzil.la/649142)).
  - Richtungsunabhängige Äquivalente von {{cssxref("top")}}, {{cssxref("right")}}, {{cssxref("bottom")}} und {{cssxref("left")}}: {{cssxref("inset-block-start")}}, `offset-block-end`, `offset-inline-start` und `offset-inline-end` ([Firefox Fehler 1120283](https://bugzil.la/1120283)).

- Wie [CSS-Übergänge](/de/docs/Web/CSS/CSS_transitions/Using_CSS_transitions) starten, wurde geändert, um einer kürzlichen Änderung der Spezifikationen gerecht zu werden und ein interoperables Verhalten zwischen den Browsern zu ermöglichen ([Firefox Fehler 960465](https://bugzil.la/960465)).

### HTML

- Das {{HTMLElement("label")}} Element löst keine Ereignisse mehr beim Zielelement des Labels aus, wenn interaktiver Inhalt zwischen dem ereignisauslösenden Element und dem Label gefunden wird ([Firefox Fehler 229925](https://bugzil.la/229925)).
- Das {{HTMLElement("picture")}} Element wurde standardmäßig aktiviert ([Firefox Fehler 1017875](https://bugzil.la/1017875)).
- Das `<meta name="referrer">` wird für Navigationen aus dem Kontextmenü oder per Mittel-Klick unterstützt ([Firefox Fehler 1113431](https://bugzil.la/1113431)).

### JavaScript

- {{jsxref("Generator/return", "Generator.prototype.return()")}} ist implementiert ([Firefox Fehler 1115868](https://bugzil.la/1115868)).
- {{jsxref("Functions/set", "Setter")}} mit einem {{jsxref("Functions/rest_parameters", "Rest-Parameter", "", 1)}} ist jetzt ein {{jsxref("SyntaxError")}} ([Firefox Fehler 1089632](https://bugzil.la/1089632)).
- Die {{jsxref("Function/name", "name")}} Eigenschaft von Funktionen ist jetzt konfigurierbar ([Firefox Fehler 1084019](https://bugzil.la/1084019)).
- Mehrere {{jsxref("Array")}} Methoden wurden ebenfalls für [typisierte Arrays](/de/docs/Web/JavaScript/Guide/Typed_arrays) implementiert:

  - Die Methoden {{jsxref("TypedArray.of", "of()")}} und {{jsxref("TypedArray.from", "from()")}} ([Firefox Fehler 896608](https://bugzil.la/896608)).
  - Die Methode {{jsxref("TypedArray.forEach", "forEach()")}} ([Firefox Fehler 1107645](https://bugzil.la/1107645)).
  - Die Methoden {{jsxref("TypedArray.filter", "filter()")}} und {{jsxref("TypedArray.map", "map()")}} ([Firefox Fehler 1121936](https://bugzil.la/1121936)).
  - Die Methode {{jsxref("TypedArray.slice", "slice()")}} ([Firefox Fehler 1121935](https://bugzil.la/1121935)).

- Doppelter Parametername ist nicht mehr erlaubt, wenn ein Rest-Parameter vorhanden ist ([Firefox Fehler 1096376](https://bugzil.la/1096376)).
- Doppelter Parametername ist nicht mehr in Pfeilfunktionen zulässig ([Firefox Fehler 1096377](https://bugzil.la/1096377)).
- Doppelter Parametername ist nicht mehr in knappen Methodendefinitionen zulässig ([Firefox Fehler 1096378](https://bugzil.la/1096378)).
- Eine Warnung wird angezeigt, wenn {{jsxref("Map")}}/{{jsxref("Set")}}/{{jsxref("WeakMap")}} Konstruktoren ohne {{jsxref("Operators/new", "new")}} aufgerufen werden ([Firefox Fehler 1108930](https://bugzil.la/1108930)).
- Die Methoden {{jsxref("WeakMap.get", "get")}}, {{jsxref("WeakMap.has", "has")}} und {{jsxref("WeakMap.delete", "delete")}} von {{jsxref("WeakMap")}} Objekten werfen keine Ausnahme mehr, wenn der `key` Parameter kein Objekt ist ([Firefox Fehler 1127827](https://bugzil.la/1127827)).
- Der optionale und nicht standardmäßige zweite `fallback`-Parameter für {{jsxref("WeakMap.prototype.get()")}} wurde entfernt ([Firefox Fehler 1127827](https://bugzil.la/1127827)).
- Wenn eine [Generator-Methode](/de/docs/Web/JavaScript/Reference/Functions/Method_definitions) definiert wird, sind `set` und `get` keine ungültigen Namen mehr ([Firefox Fehler 1073809](https://bugzil.la/1073809)).
- {{jsxref("RegExp.prototype.source")}} gibt jetzt "(?:)" anstelle eines leeren Strings für leere reguläre Ausdrücke zurück ([Firefox Fehler 1130798](https://bugzil.la/1130798)).
- {{jsxref("RegExp.prototype.source")}} and {{jsxref("RegExp.prototype.toString()")}} maskieren nun reguläre Ausdrucksmuster richtig (z.B. Zeilenabschlusszeichen, "\n") ([Firefox Fehler 1130860](https://bugzil.la/1130860)).
- Die {{jsxref("Regexp")}} {{jsxref("Regexp.global", "global")}}, {{jsxref("Regexp.ignoreCase", "ignoreCase")}}, {{jsxref("Regexp.multiline", "multiline")}}, und {{jsxref("Regexp.sticky", "sticky")}} Eigenschaften sind jetzt Prototyp-Accessor-Eigenschaften anstatt eigene Dateneigenschaften von `RegExp`-Instanzen ([Firefox Fehler 1120169](https://bugzil.la/1120169)).
- Die {{jsxref("RegExp.prototype.source")}} Eigenschaft ist nun eine Prototyp-Accessor-Eigenschaft anstelle einer eigenen Dateneigenschaft von `RegExp` Instanzen ([Firefox Fehler 1120169](https://bugzil.la/1120169)). Nur in Nicht-Release-Versionen verfügbar, aufgrund von [Firefox Fehler 1150297](https://bugzil.la/1150297).
- {{jsxref("Function.prototype.toString()")}} löst jetzt eine Ausnahme für {{jsxref("Proxy")}} Objekte aus ([Firefox Fehler 1100936](https://bugzil.la/1100936)).

### Schnittstellen/APIs/DOM

- Die Fetch API [`fetch()`](/de/docs/Web/API/Window/fetch) Methode wurde implementiert ([Firefox Fehler 1039846](https://bugzil.la/1039846)).
- Die [`BroadcastChannel`](/de/docs/Web/API/BroadcastChannel) API wurde implementiert und ist in [Web Workers](/de/docs/Web/API/Web_Workers_API) verfügbar ([Firefox Fehler 966439](https://bugzil.la/966439) und [Firefox Fehler 1121420](https://bugzil.la/1121420)).
- Die Console API ist nun in [Web Workers](/de/docs/Web/API/Web_Workers_API) verfügbar.
- `CanvasRenderingContext2D.clearHitRegions()` wurde implementiert ([Firefox Fehler 1119527](https://bugzil.la/1119527)).
- Konstanten von [`KeyboardEvent.location`](/de/docs/Web/API/KeyboardEvent/location), `DOM_KEY_LOCATION_MOBILE` und DOM_KEY_LOCATION_JOYSTICK, wurden entfernt, da sie aus der DOM Level 3 Spezifikation entfernt wurden ([Firefox Fehler 936313](https://bugzil.la/936313)).
- [`KeyboardEvent.code`](/de/docs/Web/API/KeyboardEvent/code) ist jetzt verfügbar; zuvor war es nur in Vorabversionen verfügbar. ([Firefox Fehler 1126673](https://bugzil.la/1126673))
- [`KeyboardEvent.code`](/de/docs/Web/API/KeyboardEvent/code) unterstützt jetzt spezielle Tasten auf Sun-Tastaturen unter Linux, Android und Firefox OS. ([Firefox Fehler 1020139](https://bugzil.la/1020139))
- Der [`TextEncoder()`](/de/docs/Web/API/TextEncoder/TextEncoder) Konstruktor wurde geändert, um der Spezifikation zu entsprechen: Wenn ein ungültiger Parameter übergeben wird, wird der `RangeError` [`DOMException`](/de/docs/Web/API/DOMException) jetzt ausgelöst, anstelle des fehlerhaften {{jsxref("TypeError")}} ([Firefox Fehler 1125766](https://bugzil.la/1125766)).
- Die User Timing API, die [`Performance.mark()`](/de/docs/Web/API/Performance/mark), [`Performance.clearMarks()`](/de/docs/Web/API/Performance/clearMarks), [`Performance.measure()`](/de/docs/Web/API/Performance/measure), und [`Performance.clearMeasures()`](/de/docs/Web/API/Performance/clearMeasures) hinzufügt, wurde implementiert ([Firefox Fehler 782751](https://bugzil.la/782751)).
- Die vorangestellte Version von [`Window.indexedDB`](/de/docs/Web/API/Window/indexedDB), `mozIndexedDB`, wurde entfernt ([Firefox Fehler 975699](https://bugzil.la/975699)).
- Das [`DOMContentLoaded`](/de/docs/Web/API/Document/DOMContentLoaded_event) Ereignis ist nicht mehr abfangbar ([Firefox Fehler 1134559](https://bugzil.la/1134559)).
- Sie können nun [WebSockets](/de/docs/Web/API/WebSockets_API) in [Workers](/de/docs/Web/API/Web_Workers_API) verwenden ([Firefox Fehler 504553](https://bugzil.la/504553)).
- Die [`XMLHttpRequest.responseType`](/de/docs/Web/API/XMLHttpRequest/responseType) und [`XMLHttpRequest.withCredentials`](/de/docs/Web/API/XMLHttpRequest/withCredentials) Eigenschaften können jetzt gesetzt werden, bevor [`XMLHttpRequest.open()`](/de/docs/Web/API/XMLHttpRequest/open) aufgerufen wird ([Firefox Fehler 707484](https://bugzil.la/707484)).

### MathML

_Keine Änderungen._

### SVG

_Keine Änderungen._

### Audio/Video

_Keine Änderungen._

## Vernetzung

_Keine Änderungen._

## Sicherheit

- In Firefox wird das [`autocomplete`](/de/docs/Web/HTML/Element/input#autocomplete)`=false` Attribut nun ignoriert, wenn es sich um ein Anmeldeformular handelt ([Firefox Fehler 1025703](https://bugzil.la/1025703)). Dies soll die Verwendung sichererer Passwörter durch eine zuverlässigere Funktion von Passwort-Manager-Tools fördern.
- RC4 ist jetzt deaktiviert, wenn TLS verwendet wird, außer für einige speziell zugelassene Websites. Diese Whitelist ist eine Zwischenmaßnahme, bis diese Websites repariert sind ([Firefox Fehler 1124039](https://bugzil.la/1124039)). Dieses Fallback wird durch die `security.tls.unrestricted_rc4_fallback` Präferenz gesteuert, ist im Moment standardmäßig `true` ([Firefox Fehler 1138882](https://bugzil.la/1138882)).
- Websites, die auf eine unsichere Version von TLS zurückfallen müssen, um zu funktionieren, befinden sich jetzt auf einer festcodierten Whitelist, die im Laufe der Zeit schrumpfen wird ([Firefox Fehler 1114816](https://bugzil.la/1114816)). Die Whitelist kann deaktiviert werden, indem `security.tls.insecure_fallback_hosts.use_static_list` auf `false` gesetzt wird.

## Änderungen für Add-on und Mozilla-Entwickler

### Add-on SDK

#### Höhepunkte

- `sdk/context-menu@2` wurde implementiert ([Firefox Fehler 1070952](https://bugzil.la/1070952)).
- `sdk/addon/bootstrap` wurde implementiert ([Firefox Fehler 1075541](https://bugzil.la/1075541)).
- `sdk/windows/loader` wurde entfernt ([Firefox Fehler 970135](https://bugzil.la/970135)).
- Korrektur für die Erkennung der Standardsprache unter Linux ([Firefox Fehler 1114712](https://bugzil.la/1114712)).
- `toolkit/loader` hat jetzt ein Opt-in-Modulkompatibilitätsprüfung, die für alle jpm-Add-ons aktiviert ist ([Firefox Fehler 1037235](https://bugzil.la/1037235)).

#### Electrolysis (E10s) Updates

- `sdk/page-worker` e10s Updates ([Firefox Fehler 1116004](https://bugzil.la/1116004)).
- `sdk/content/worker` e10s Updates ([Firefox Fehler 1116544](https://bugzil.la/1116544)).
- `sdk/tabs` e10s Updates ([Firefox Fehler 1033838](https://bugzil.la/1033838)).

#### Details

- [GitHub-Komits zwischen Firefox 37 und Firefox 38 gemacht](https://github.com/mozilla/addon-sdk/compare/firefox36...firefox38).

### XUL

_Keine Änderungen._

### JavaScript-Code-Module

#### Downloads.jsm

- [`DownloadTarget`](/de/docs/Mozilla/JavaScript_code_modules/Downloads.jsm/DownloadTarget) Objekte haben jetzt `exists` und `size` Eigenschaften, die es Ihnen ermöglichen, die Existenz und die Größe der Zieldatei des Downloads auf der Festplatte zu bestimmen, sowie eine neue `refresh()` Methode, die diese Werte aktualisieren soll.

### XPCOM

- `"@mozilla.org/network/atomic-file-output-stream;1"` und `"@mozilla.org/network/safe-file-output-stream;1"` lösen jetzt eine Ausnahme aus, wenn `PR_APPEND` ohne `PR_TRUNCATE` übergeben wird ([Firefox Fehler 1117580](https://bugzil.la/1117580)).
- `nsICompositionStringSynthesizer` und `nsIDOMWindowUtils.sendCompositionEvent()` wurden entfernt. Stattdessen verwenden Sie `nsITextInputProcessor`. ([Firefox Fehler 917322](https://bugzil.la/917322))
- `nsIDOMWindowUtils.sendKeyEvent()` ist jetzt veraltet. Stattdessen verwenden Sie `nsITextInputProcessor` ([Firefox Fehler 1119609](https://bugzil.la/1119609)).

## Ältere Versionen

{{Firefox_for_developers}}
