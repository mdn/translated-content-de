---
title: Firefox 38 für Entwickler
slug: Mozilla/Firefox/Releases/38
l10n:
  sourceCommit: 1d3d0c10ebf5c8c55f75b9adce74d1e5001866c6
---

Firefox 38 wurde am 12. Mai 2015 veröffentlicht. Dieser Artikel listet die wichtigsten Änderungen auf, die nicht nur für Webentwickler nützlich sind, sondern auch für Firefox- und Gecko-Entwickler sowie Add-on-Entwickler.

## Änderungen für Webentwickler

### Entwicklerwerkzeuge

Höhepunkte:

- [Umgehen von Audio-Knoten im Web Audio Editor](https://firefox-source-docs.mozilla.org/devtools-user/web_audio_editor/index.html#bypassing-nodes)
- ["copy"-Befehl in der Webkonsole](https://firefox-source-docs.mozilla.org/devtools-user/web_console/index.html#helper-commands)
- [XmlHttpRequests in der Webkonsole hervorheben und filtern](https://firefox-source-docs.mozilla.org/devtools-user/web_console/index.html#xhr)
- [Optimierte Variablen im Debugger ansehen](https://firefox-source-docs.mozilla.org/devtools-user/debugger/how_to/set_watch_expressions/index.html)
- [Sicherheitswarnungen im Netzwerk-Monitor ansehen](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/index.html#security)
- [Übertragene Größen im Netzwerk-Monitor ansehen](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/index.html#network-request-fields)
- [Alle Animationen auf der Seite abspielen/pausieren](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/work_with_animations/index.html#animations-view)

[Alle zwischen Firefox 37 und Firefox 38 behobenen Devtools-Fehler](https://bugzilla.mozilla.org/buglist.cgi?resolution=FIXED&classification=Client%20Software&chfieldto=2015-02-23&query_format=advanced&chfield=resolution&chfieldfrom=2015-01-12&chfieldvalue=FIXED&bug_status=RESOLVED&bug_status=VERIFIED&component=Developer%20Tools&component=Developer%20Tools%3A%203D%20View&component=Developer%20Tools%3A%20Canvas%20Debugger&component=Developer%20Tools%3A%20Console&component=Developer%20Tools%3A%20Debugger&component=Developer%20Tools%3A%20Framework&component=Developer%20Tools%3A%20Graphic%20Commandline%20and%20Toolbar&component=Developer%20Tools%3A%20Inspector&component=Developer%20Tools%3A%20Memory&component=Developer%20Tools%3A%20Netmonitor&component=Developer%20Tools%3A%20Object%20Inspector&component=Developer%20Tools%3A%20Profiler&component=Developer%20Tools%3A%20Responsive%20Mode&component=Developer%20Tools%3A%20Scratchpad&component=Developer%20Tools%3A%20Source%20Editor&component=Developer%20Tools%3A%20Storage%20Inspector&component=Developer%20Tools%3A%20Style%20Editor&component=Developer%20Tools%3A%20Timeline&component=Developer%20Tools%3A%20User%20Stories&component=Developer%20Tools%3A%20Web%20Audio%20Editor&component=Developer%20Tools%3A%20WebGL%20Shader%20Editor&component=Developer%20Tools%3A%20WebIDE&product=Firefox&list_id=12076303).

### CSS

- Unterstützung für {{cssxref("ruby-position")}} und {{cssxref("ruby-align")}} wurde hinzugefügt und ist standardmäßig verfügbar ([Firefox Bug 1055676](https://bugzil.la/1055676), [Firefox Bug 1123917](https://bugzil.la/1123917) und [Firefox Bug 1039006](https://bugzil.la/1039006)).
- Die {{cssxref(":unresolved")}} Pseudo-Klasse wurde für benutzerdefinierte Elemente implementiert ([Firefox Bug 1111633](https://bugzil.la/1111633)).
- Der vordefinierte Stil {{cssxref("list-style-type", "ethiopic-numeric")}} verwendet jetzt einen Leerraum statt eines Punktes als Suffix, um eine kürzliche Änderung der Spezifikation zu erfüllen ([Firefox Bug 1120721](https://bugzil.la/1120721)).
- CSS-Übergänge auf generierten Inhalten (mit {{cssxref("::before")}} und {{cssxref("::after")}}), sowohl inline als auch beim Blockieren, der sie trennt, starten nun wie in der Spezifikation festgelegt ([Firefox Bug 1110277](https://bugzil.la/1110277)).
- Die Implementierung der CSS-logischen Eigenschaften hat große Fortschritte gemacht. Die folgenden Eigenschaften sind hinter dem Flag `layout.css.vertical-text.enabled` (`false` standardmäßig) verfügbar:
  - Richtungsunabhängige Äquivalente von {{cssxref("width")}} und {{cssxref("height")}}: {{cssxref("block-size")}} und {{cssxref("inline-size")}} ([Firefox Bug 1117983](https://bugzil.la/1117983)).
  - Richtungsunabhängige Äquivalente von {{cssxref("min-width")}} und {{cssxref("min-height")}}: {{cssxref("min-block-size")}} und {{cssxref("min-inline-size")}} ([Firefox Bug 1117983](https://bugzil.la/1117983)).
  - Richtungsunabhängige Äquivalente von {{cssxref("max-width")}} und {{cssxref("max-height")}}: {{cssxref("max-block-size")}} und {{cssxref("max-inline-size")}} ([Firefox Bug 1117983](https://bugzil.la/1117983)).
  - Richtungsunabhängige Äquivalente von {{cssxref("margin-top")}}, {{cssxref("margin-right")}}, {{cssxref("margin-bottom")}} und {{cssxref("margin-left")}}: {{cssxref("margin-block-start")}}, {{cssxref("margin-block-end")}}, {{cssxref("margin-inline-start")}} und {{cssxref("margin-inline-end")}} ([Firefox Bug 649142](https://bugzil.la/649142)).
  - Richtungsunabhängige Äquivalente von {{cssxref("padding-top")}}, {{cssxref("padding-right")}}, {{cssxref("padding-bottom")}} und {{cssxref("padding-left")}}: {{cssxref("padding-block-start")}}, {{cssxref("padding-block-end")}}, {{cssxref("padding-inline-start")}} und {{cssxref("padding-inline-end")}} ([Firefox Bug 649142](https://bugzil.la/649142)).
  - Richtungsunabhängige Äquivalente von {{cssxref("border-top")}}, {{cssxref("border-right")}}, {{cssxref("border-bottom")}} und {{cssxref("border-left")}} und deren Langformen für Breite, Stil und Farbe: {{cssxref("border-block-start")}}, {{cssxref("border-block-start-width")}}, {{cssxref("border-block-start-style")}}, {{cssxref("border-block-start-color")}}, {{cssxref("border-block-end")}}, {{cssxref("border-block-end-width")}}, {{cssxref("border-block-end-style")}}, {{cssxref("border-block-end-color")}}, {{cssxref("border-inline-start")}}, {{cssxref("border-inline-start-width")}}, {{cssxref("border-inline-start-style")}}, {{cssxref("border-inline-start-color")}}, {{cssxref("border-inline-end")}}, {{cssxref("border-inline-end-width")}}, {{cssxref("border-inline-end-style")}} und {{cssxref("border-inline-end-color")}} ([Firefox Bug 649142](https://bugzil.la/649142)).
  - Richtungsunabhängige Äquivalente von {{cssxref("top")}}, {{cssxref("right")}}, {{cssxref("bottom")}} und {{cssxref("left")}}: {{cssxref("inset-block-start")}}, `offset-block-end`, `offset-inline-start` und `offset-inline-end` ([Firefox Bug 1120283](https://bugzil.la/1120283)).

- Wie [CSS-Übergänge](/de/docs/Web/CSS/CSS_transitions/Using_CSS_transitions) starten, wurde modifiziert, um einer kürzlichen Änderung der Spezifikationen zu entsprechen, die darauf abzielt, ein interoperables Verhalten zwischen Browsern zu erreichen ([Firefox Bug 960465](https://bugzil.la/960465)).

### HTML

- Das {{HTMLElement("label")}}-Element löst keine Ereignisse mehr für das Ziel des Labels aus, wenn interaktive Inhalte zwischen dem Ereignisziel und dem Label gefunden werden ([Firefox Bug 229925](https://bugzil.la/229925)).
- Das {{HTMLElement("picture")}}-Element ist standardmäßig aktiviert ([Firefox Bug 1017875](https://bugzil.la/1017875)).
- Das `<meta name="referrer">` wird für Navigationen aus dem Kontextmenü oder durch einen Mittelklick unterstützt ([Firefox Bug 1113431](https://bugzil.la/1113431)).

### JavaScript

- {{jsxref("Generator/return", "Generator.prototype.return()")}} ist implementiert ([Firefox Bug 1115868](https://bugzil.la/1115868)).
- {{jsxref("Functions/set", "Setter")}} mit einem {{jsxref("Functions/rest_parameters", "Rest-Parameter", "", 1)}} ist jetzt ein {{jsxref("SyntaxError")}} ([Firefox Bug 1089632](https://bugzil.la/1089632)).
- Die {{jsxref("Function/name", "name")}}-Eigenschaft von Funktionen ist jetzt konfigurierbar ([Firefox Bug 1084019](https://bugzil.la/1084019)).
- Mehrere {{jsxref("Array")}}-Methoden wurden auch für [typed arrays](/de/docs/Web/JavaScript/Guide/Typed_arrays) implementiert:
  - Die {{jsxref("TypedArray.of", "of()")}}- und {{jsxref("TypedArray.from", "from()")}}-Methoden ([Firefox Bug 896608](https://bugzil.la/896608)).
  - Die {{jsxref("TypedArray.forEach", "forEach()")}}-Methode ([Firefox Bug 1107645](https://bugzil.la/1107645)).
  - Die {{jsxref("TypedArray.filter", "filter()")}}- und {{jsxref("TypedArray.map", "map()")}}-Methoden ([Firefox Bug 1121936](https://bugzil.la/1121936)).
  - Die {{jsxref("TypedArray.slice", "slice()")}}-Methode ([Firefox Bug 1121935](https://bugzil.la/1121935)).

- Doppelte Parameternamen sind nicht mehr erlaubt, wenn ein Rest-Parameter vorhanden ist ([Firefox Bug 1096376](https://bugzil.la/1096376)).
- Doppelte Parameternamen sind in Pfeilfunktionen nicht mehr erlaubt ([Firefox Bug 1096377](https://bugzil.la/1096377)).
- Doppelte Parameternamen sind in kurzen Methodendefinitionen nicht mehr erlaubt ([Firefox Bug 1096378](https://bugzil.la/1096378)).
- Eine Warnung wird angezeigt, wenn der {{jsxref("Map")}}/{{jsxref("Set")}}/{{jsxref("WeakMap")}}-Konstruktor ohne {{jsxref("Operators/new", "new")}} aufgerufen wird ([Firefox Bug 1108930](https://bugzil.la/1108930)).
- Die {{jsxref("WeakMap.get", "get")}}, {{jsxref("WeakMap.has", "has")}}, und {{jsxref("WeakMap.delete", "delete")}}-Methoden von {{jsxref("WeakMap")}}-Objekten werfen keine Ausnahmen mehr, wenn der `key`-Parameter kein Objekt ist ([Firefox Bug 1127827](https://bugzil.la/1127827)).
- Der optionale und nicht standardmäßige zweite `fallback`-Parameter für {{jsxref("WeakMap.prototype.get()")}} wurde entfernt ([Firefox Bug 1127827](https://bugzil.la/1127827)).
- Beim Definieren einer [Generator-Methode](/de/docs/Web/JavaScript/Reference/Functions/Method_definitions) sind `set` und `get` keine ungültigen Namen mehr ([Firefox Bug 1073809](https://bugzil.la/1073809)).
- {{jsxref("RegExp.prototype.source")}} gibt jetzt "(?:)" anstelle eines leeren Strings für leere reguläre Ausdrücke zurück ([Firefox Bug 1130798](https://bugzil.la/1130798)).
- {{jsxref("RegExp.prototype.source")}} und {{jsxref("RegExp.prototype.toString()")}} entkommen nun regulären Ausdrucksmustern korrekt (z. B. Zeilentrenner, "\n") ([Firefox Bug 1130860](https://bugzil.la/1130860)).
- Die {{jsxref("Regexp")}}-Eigenschaften {{jsxref("Regexp.global", "global")}}, {{jsxref("Regexp.ignoreCase", "ignoreCase")}}, {{jsxref("Regexp.multiline", "multiline")}}, und {{jsxref("Regexp.sticky", "sticky")}} sind jetzt Prototyp-Accessor-Eigenschaften anstelle von eigenen Dateneigenschaften der `RegExp`-Instanzen ([Firefox Bug 1120169](https://bugzil.la/1120169)).
- Die {{jsxref("RegExp.prototype.source")}}-Eigenschaft ist jetzt eine Prototyp-Accessor-Eigenschaft anstelle von einer eigenen Dateneigenschaft der `RegExp`-Instanzen ([Firefox Bug 1120169](https://bugzil.la/1120169)). Nur in nicht-Release-Versionen verfügbar, aufgrund von [Firefox Bug 1150297](https://bugzil.la/1150297).
- {{jsxref("Function.prototype.toString()")}} wirft jetzt bei {{jsxref("Proxy")}}-Objekten eine Ausnahme ([Firefox Bug 1100936](https://bugzil.la/1100936)).

### Schnittstellen/APIs/DOM

- Die Fetch API-Methode [`fetch()`](/de/docs/Web/API/Window/fetch) wurde implementiert ([Firefox Bug 1039846](https://bugzil.la/1039846)).
- Die [`BroadcastChannel`](/de/docs/Web/API/BroadcastChannel)-API wurde implementiert und steht in [Web Workers](/de/docs/Web/API/Web_Workers_API) zur Verfügung ([Firefox Bug 966439](https://bugzil.la/966439) und [Firefox Bug 1121420](https://bugzil.la/1121420)).
- Die Console API steht jetzt in [Web Workers](/de/docs/Web/API/Web_Workers_API) zur Verfügung.
- `CanvasRenderingContext2D.clearHitRegions()` wurde implementiert ([Firefox Bug 1119527](https://bugzil.la/1119527)).
- Konstanten von [`KeyboardEvent.location`](/de/docs/Web/API/KeyboardEvent/location), `DOM_KEY_LOCATION_MOBILE` und `DOM_KEY_LOCATION_JOYSTICK`, wurden entfernt, da sie aus der DOM Level 3 Spezifikation entfernt wurden ([Firefox Bug 936313](https://bugzil.la/936313)).
- [`KeyboardEvent.code`](/de/docs/Web/API/KeyboardEvent/code) ist jetzt verfügbar; zuvor war es nur in Vorabversionen verfügbar ([Firefox Bug 1126673](https://bugzil.la/1126673)).
- [`KeyboardEvent.code`](/de/docs/Web/API/KeyboardEvent/code) unterstützt jetzt Sondertasten auf Sun-Tastaturen unter Linux, Android und Firefox OS ([Firefox Bug 1020139](https://bugzil.la/1020139)).
- Der [`TextEncoder()`](/de/docs/Web/API/TextEncoder/TextEncoder)-Konstruktor wurde geändert, um der Spezifikation zu entsprechen: Wenn ein ungültiger Parameter übergeben wird, wird jetzt der `RangeError`-[`DOMException`](/de/docs/Web/API/DOMException) ausgelöst, anstatt des fehlerhaften {{jsxref("TypeError")}} ([Firefox Bug 1125766](https://bugzil.la/1125766)).
- Die User Timing API, die [`Performance.mark()`](/de/docs/Web/API/Performance/mark), [`Performance.clearMarks()`](/de/docs/Web/API/Performance/clearMarks), [`Performance.measure()`](/de/docs/Web/API/Performance/measure) und [`Performance.clearMeasures()`](/de/docs/Web/API/Performance/clearMeasures) hinzufügt, wurde implementiert ([Firefox Bug 782751](https://bugzil.la/782751)).
- Die vorgängige Version von [`Window.indexedDB`](/de/docs/Web/API/Window/indexedDB), `mozIndexedDB`, wurde entfernt ([Firefox Bug 975699](https://bugzil.la/975699)).
- Das [`DOMContentLoaded`](/de/docs/Web/API/Document/DOMContentLoaded_event)-Ereignis ist nicht mehr stornierbar ([Firefox Bug 1134559](https://bugzil.la/1134559)).
- [WebSockets](/de/docs/Web/API/WebSockets_API) können jetzt in [Workers](/de/docs/Web/API/Web_Workers_API) verwendet werden ([Firefox Bug 504553](https://bugzil.la/504553)).
- Die Eigenschaften [`XMLHttpRequest.responseType`](/de/docs/Web/API/XMLHttpRequest/responseType) und [`XMLHttpRequest.withCredentials`](/de/docs/Web/API/XMLHttpRequest/withCredentials) können jetzt vor dem Aufruf von [`XMLHttpRequest.open()`](/de/docs/Web/API/XMLHttpRequest/open) gesetzt werden ([Firefox Bug 707484](https://bugzil.la/707484)).

### MathML

_Keine Änderung._

### SVG

_Keine Änderung._

### Audio/Video

_Keine Änderung._

## Netzwerke

_Keine Änderung._

## Sicherheit

- In Firefox wird das [`autocomplete=false`](/de/docs/Web/HTML/Reference/Elements/input#autocomplete)-Attribut jetzt ignoriert, wenn es um ein Anmeldeformular geht ([Firefox Bug 1025703](https://bugzil.la/1025703)). Dies soll dazu beitragen, die Sicherheit von Passwörtern zu erhöhen, indem Passwort-Managertools zuverlässiger arbeiten können.
- RC4 ist bei der Verwendung von TLS nun deaktiviert, außer für einige speziell erlaubte Websites. Diese Whitelist ist eine Übergangslösung, bis diese Seiten angepasst sind ([Firefox Bug 1124039](https://bugzil.la/1124039)). Dieses Fallback wird durch die `security.tls.unrestricted_rc4_fallback`-Einstellung gesteuert, die derzeit standardmäßig auf `true` steht ([Firefox Bug 1138882](https://bugzil.la/1138882)).
- Websites, die auf eine unsichere Version von TLS zurückfallen müssen, um zu funktionieren, befinden sich nun in einer fest kodierten Whitelist, die im Laufe der Zeit verkleinert wird ([Firefox Bug 1114816](https://bugzil.la/1114816)). Die Whitelist kann deaktiviert werden, indem `security.tls.insecure_fallback_hosts.use_static_list` auf `false` gesetzt wird.

## Änderungen für Add-on- und Mozilla-Entwickler

### Add-on SDK

#### Höhepunkte

- `sdk/context-menu@2` wurde implementiert ([Firefox Bug 1070952](https://bugzil.la/1070952)).
- `sdk/addon/bootstrap` wurde implementiert ([Firefox Bug 1075541](https://bugzil.la/1075541)).
- `sdk/windows/loader` wurde entfernt ([Firefox Bug 970135](https://bugzil.la/970135)).
- Fehlerbehebung bei der Erkennung der Standardsprache unter Linux ([Firefox Bug 1114712](https://bugzil.la/1114712)).
- `toolkit/loader` verfügt nun über eine Opt-in-Modulkompatibilitätsprüfung, die für alle jpm Add-ons aktiviert ist ([Firefox Bug 1037235](https://bugzil.la/1037235)).

#### Electrolysis (E10s)-Updates

- `sdk/page-worker` E10s-Updates ([Firefox Bug 1116004](https://bugzil.la/1116004)).
- `sdk/content/worker` E10s-Updates ([Firefox Bug 1116544](https://bugzil.la/1116544)).
- `sdk/tabs` E10s-Updates ([Firefox Bug 1033838](https://bugzil.la/1033838)).

#### Details

- [GitHub Commits, die zwischen Firefox 37 und Firefox 38 gemacht wurden](https://github.com/mozilla/addon-sdk/compare/firefox36...firefox38).

### XUL

_Keine Änderung._

### JavaScript-Code-Module

#### Downloads.jsm

- [`DownloadTarget`](/de/docs/Mozilla/JavaScript_code_modules/Downloads.jsm/DownloadTarget)-Objekte besitzen jetzt die Eigenschaften `exists` und `size`, die Ihnen erlauben, die Existenz und die Größe der Zieldatei des Downloads auf der Festplatte zu ermitteln, sowie eine neue `refresh()`-Methode, die fordert, dass diese Werte aktualisiert werden.

### XPCOM

- `"@mozilla.org/network/atomic-file-output-stream;1"` und `"@mozilla.org/network/safe-file-output-stream;1"` werfen jetzt eine Ausnahme, wenn `PR_APPEND` ohne `PR_TRUNCATE` übergeben wird ([Firefox Bug 1117580](https://bugzil.la/1117580)).
- `nsICompositionStringSynthesizer` und `nsIDOMWindowUtils.sendCompositionEvent()` wurden entfernt. Verwenden Sie stattdessen `nsITextInputProcessor` ([Firefox Bug 917322](https://bugzil.la/917322)).
- `nsIDOMWindowUtils.sendKeyEvent()` ist jetzt veraltet. Verwenden Sie stattdessen `nsITextInputProcessor` ([Firefox Bug 1119609](https://bugzil.la/1119609)).

## Ältere Versionen

{{Firefox_for_developers}}
