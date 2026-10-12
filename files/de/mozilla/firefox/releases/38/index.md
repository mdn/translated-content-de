---
title: Firefox 38 – Versionshinweise für Entwickler
short-title: Firefox 38
slug: Mozilla/Firefox/Releases/38
l10n:
  sourceCommit: 2eb88572e8e972bb87a446f17a4a9a23de0108b5
---

Firefox 38 wurde am 12. Mai 2015 veröffentlicht. Dieser Artikel führt wichtige Änderungen auf, die nicht nur für Webentwickler, sondern auch für Firefox- und Gecko-Entwickler sowie für Add-on-Entwickler relevant sind.

## Änderungen für Webentwickler

### Entwicklerwerkzeuge

Highlights:

- [Audioknoten im Web Audio Editor umgehen](https://firefox-source-docs.mozilla.org/devtools-user/web_audio_editor/index.html#bypassing-nodes)
- [Befehl „copy“ in der Web-Konsole](https://firefox-source-docs.mozilla.org/devtools-user/web_console/index.html#helper-commands)
- [XmlHttpRequests in der Web-Konsole hervorheben und filtern](https://firefox-source-docs.mozilla.org/devtools-user/web_console/index.html#xhr)
- [Wegoptimierte Variablen im Debugger anzeigen](https://firefox-source-docs.mozilla.org/devtools-user/debugger/how_to/set_watch_expressions/index.html)
- [Sicherheitswarnungen im Netzwerkmonitor anzeigen](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/index.html#security)
- [Übertragene Datenmengen im Netzwerkmonitor anzeigen](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/index.html#network-request-fields)
- [Alle Animationen auf der Seite abspielen oder anhalten](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/work_with_animations/index.html#animations-view)

[Alle zwischen Firefox 37 und Firefox 38 behobenen Fehler in den Entwicklerwerkzeugen](https://bugzilla.mozilla.org/buglist.cgi?resolution=FIXED&classification=Client%20Software&chfieldto=2015-02-23&query_format=advanced&chfield=resolution&chfieldfrom=2015-01-12&chfieldvalue=FIXED&bug_status=RESOLVED&bug_status=VERIFIED&component=Developer%20Tools&component=Developer%20Tools%3A%203D%20View&component=Developer%20Tools%3A%20Canvas%20Debugger&component=Developer%20Tools%3A%20Console&component=Developer%20Tools%3A%20Debugger&component=Developer%20Tools%3A%20Framework&component=Developer%20Tools%3A%20Graphic%20Commandline%20and%20Toolbar&component=Developer%20Tools%3A%20Inspector&component=Developer%20Tools%3A%20Memory&component=Developer%20Tools%3A%20Netmonitor&component=Developer%20Tools%3A%20Object%20Inspector&component=Developer%20Tools%3A%20Profiler&component=Developer%20Tools%3A%20Responsive%20Mode&component=Developer%20Tools%3A%20Scratchpad&component=Developer%20Tools%3A%20Source%20Editor&component=Developer%20Tools%3A%20Storage%20Inspector&component=Developer%20Tools%3A%20Style%20Editor&component=Developer%20Tools%3A%20Timeline&component=Developer%20Tools%3A%20User%20Stories&component=Developer%20Tools%3A%20Web%20Audio%20Editor&component=Developer%20Tools%3A%20WebGL%20Shader%20Editor&component=Developer%20Tools%3A%20WebIDE&product=Firefox&list_id=12076303).

### CSS

- Unterstützung für {{cssxref("ruby-position")}} und {{cssxref("ruby-align")}} wurde hinzugefügt und ist standardmäßig verfügbar ([Firefox-Fehler 1055676](https://bugzil.la/1055676), [Firefox-Fehler 1123917](https://bugzil.la/1123917) und [Firefox-Fehler 1039006](https://bugzil.la/1039006)).
- Die Pseudoklasse `:unresolved` wurde für benutzerdefinierte Elemente implementiert ([Firefox-Fehler 1111633](https://bugzil.la/1111633)).
- Der vordefinierte Stil {{cssxref("list-style-type", "ethiopic-numeric")}} verwendet nun ein Leerzeichen statt eines Punkts als Suffix, entsprechend einer kürzlich erfolgten Änderung der Spezifikation ([Firefox-Fehler 1120721](https://bugzil.la/1120721)).
- CSS-Übergänge bei generiertem Inhalt (mit {{cssxref("::before")}} und {{cssxref("::after")}}), sowohl an einem Inline-Element als auch an dem Block, der es aufteilt, beginnen nun wie in der Spezifikation vorgesehen ([Firefox-Fehler 1110277](https://bugzil.la/1110277)).
- Bei der Implementierung logischer CSS-Eigenschaften wurden große Fortschritte erzielt. Die folgenden Eigenschaften sind verfügbar, wenn `layout.css.vertical-text.enabled` aktiviert ist (standardmäßig `false`):
  - Richtungsunabhängige Entsprechungen von {{cssxref("width")}} und {{cssxref("height")}}: {{cssxref("block-size")}} und {{cssxref("inline-size")}} ([Firefox-Fehler 1117983](https://bugzil.la/1117983)).
  - Richtungsunabhängige Entsprechungen von {{cssxref("min-width")}} und {{cssxref("min-height")}}: {{cssxref("min-block-size")}} und {{cssxref("min-inline-size")}} ([Firefox-Fehler 1117983](https://bugzil.la/1117983)).
  - Richtungsunabhängige Entsprechungen von {{cssxref("max-width")}} und {{cssxref("max-height")}}: {{cssxref("max-block-size")}} und {{cssxref("max-block-size")}} ([Firefox-Fehler 1117983](https://bugzil.la/1117983)).
  - Richtungsunabhängige Entsprechungen von {{cssxref("margin-top")}}, {{cssxref("margin-right")}}, {{cssxref("margin-bottom")}} und {{cssxref("margin-left")}}: {{cssxref("margin-block-start")}}, {{cssxref("margin-block-end")}}, {{cssxref("margin-inline-start")}} und {{cssxref("margin-inline-end")}} ([Firefox-Fehler 649142](https://bugzil.la/649142)).
  - Richtungsunabhängige Entsprechungen von {{cssxref("padding-top")}}, {{cssxref("padding-right")}}, {{cssxref("padding-bottom")}} und {{cssxref("padding-left")}}: {{cssxref("padding-block-start")}}, {{cssxref("padding-block-end")}}, {{cssxref("padding-inline-start")}} und {{cssxref("padding-inline-end")}} ([Firefox-Fehler 649142](https://bugzil.la/649142)).
  - Richtungsunabhängige Entsprechungen von {{cssxref("border-top")}}, {{cssxref("border-right")}}, {{cssxref("border-bottom")}} und {{cssxref("border-left")}} sowie deren Einzelwerte für Breite, Stil und Farbe: {{cssxref("border-block-start")}}, {{cssxref("border-block-start-width")}}, {{cssxref("border-block-start-style")}}, {{cssxref("border-block-start-color")}}, {{cssxref("border-block-end")}}, {{cssxref("border-block-end-width")}}, {{cssxref("border-block-end-style")}}, {{cssxref("border-block-end-color")}}, {{cssxref("border-inline-start")}}, {{cssxref("border-inline-start-width")}}, {{cssxref("border-inline-start-style")}}, {{cssxref("border-inline-start-color")}}, {{cssxref("border-inline-end")}}, {{cssxref("border-inline-end-width")}}, {{cssxref("border-inline-end-style")}} und {{cssxref("border-inline-end-color")}} ([Firefox-Fehler 649142](https://bugzil.la/649142)).
  - Richtungsunabhängige Entsprechungen von {{cssxref("top")}}, {{cssxref("right")}}, {{cssxref("bottom")}} und {{cssxref("left")}}: {{cssxref("inset-block-start")}}, `offset-block-end`, `offset-inline-start` und `offset-inline-end` ([Firefox-Fehler 1120283](https://bugzil.la/1120283)).

- Der Beginn von [CSS-Übergängen](/de/docs/Web/CSS/Guides/Transitions/Using) wurde an eine kürzlich erfolgte Änderung der Spezifikationen angepasst, um ein interoperables Verhalten der Browser zu erreichen ([Firefox-Fehler 960465](https://bugzil.la/960465)).

### HTML

- Das Element {{HTMLElement("label")}} leitet Ereignisse nicht mehr an das zugehörige Formularelement weiter, wenn sich zwischen dem Ereignisziel und dem Label interaktiver Inhalt befindet ([Firefox-Fehler 229925](https://bugzil.la/229925)).
- Das Element {{HTMLElement("picture")}} wurde standardmäßig aktiviert ([Firefox-Fehler 1017875](https://bugzil.la/1017875)).
- `<meta name="referrer">` wird bei Navigationen über das Kontextmenü oder durch Klicken mit der mittleren Maustaste unterstützt ([Firefox-Fehler 1113431](https://bugzil.la/1113431)).

### JavaScript

- {{jsxref("Generator/return", "Generator.prototype.return()")}} wurde implementiert ([Firefox-Fehler 1115868](https://bugzil.la/1115868)).
- Ein {{jsxref("Functions/set", "Setter")}} mit einem {{jsxref("Functions/rest_parameters", "rest parameter", "", 1)}} führt nun zu einem {{jsxref("SyntaxError")}} ([Firefox-Fehler 1089632](https://bugzil.la/1089632)).
- Die Eigenschaft {{jsxref("Function/name", "name")}} von Funktionen ist nun konfigurierbar ([Firefox-Fehler 1084019](https://bugzil.la/1084019)).
- Mehrere Methoden von {{jsxref("Array")}} wurden auch für [typisierte Arrays](/de/docs/Web/JavaScript/Guide/Typed_arrays) implementiert:
  - Die Methoden {{jsxref("TypedArray.of", "of()")}} und {{jsxref("TypedArray.from", "from()")}} ([Firefox-Fehler 896608](https://bugzil.la/896608)).
  - Die Methode {{jsxref("TypedArray.forEach", "forEach()")}} ([Firefox-Fehler 1107645](https://bugzil.la/1107645)).
  - Die Methoden {{jsxref("TypedArray.filter", "filter()")}} und {{jsxref("TypedArray.map", "map()")}} ([Firefox-Fehler 1121936](https://bugzil.la/1121936)).
  - Die Methode {{jsxref("TypedArray.slice", "slice()")}} ([Firefox-Fehler 1121935](https://bugzil.la/1121935)).

- Doppelte Parameternamen sind nicht mehr zulässig, wenn ein Rest-Parameter vorhanden ist ([Firefox-Fehler 1096376](https://bugzil.la/1096376)).
- Doppelte Parameternamen sind in Arrow-Funktionen nicht mehr zulässig ([Firefox-Fehler 1096377](https://bugzil.la/1096377)).
- Doppelte Parameternamen sind in kompakten Methodendefinitionen nicht mehr zulässig ([Firefox-Fehler 1096378](https://bugzil.la/1096378)).
- Wenn ein Konstruktor von {{jsxref("Map")}}/{{jsxref("Set")}}/{{jsxref("WeakMap")}} ohne {{jsxref("new")}} aufgerufen wird, erscheint eine Warnung ([Firefox-Fehler 1108930](https://bugzil.la/1108930)).
- Die Methoden {{jsxref("WeakMap.get", "get")}}, {{jsxref("WeakMap.has", "has")}} und {{jsxref("WeakMap.delete", "delete")}} von {{jsxref("WeakMap")}}-Objekten lösen keine Ausnahme mehr aus, wenn der Parameter `key` kein Objekt ist ([Firefox-Fehler 1127827](https://bugzil.la/1127827)).
- Der optionale, nicht standardisierte zweite Parameter `fallback` von {{jsxref("WeakMap.prototype.get()")}} wurde entfernt ([Firefox-Fehler 1127827](https://bugzil.la/1127827)).
- Bei der Definition einer [Generatormethode](/de/docs/Web/JavaScript/Reference/Functions/Method_definitions) sind `set` und `get` nun als Namen zulässig ([Firefox-Fehler 1073809](https://bugzil.la/1073809)).
- {{jsxref("RegExp.prototype.source")}} gibt für leere reguläre Ausdrücke nun "(?:)" statt einer leeren Zeichenfolge zurück ([Firefox-Fehler 1130798](https://bugzil.la/1130798)).
- {{jsxref("RegExp.prototype.source")}} und {{jsxref("RegExp.prototype.toString()")}} maskieren Muster regulärer Ausdrücke nun korrekt (z. B. Zeilenabschlusszeichen wie "\n") ([Firefox-Fehler 1130860](https://bugzil.la/1130860)).
- Die Eigenschaften {{jsxref("RegExp.global", "global")}}, {{jsxref("RegExp.ignoreCase", "ignoreCase")}}, {{jsxref("RegExp.multiline", "multiline")}} und {{jsxref("RegExp.sticky", "sticky")}} von {{jsxref("RegExp")}} sind nun Accessor-Eigenschaften des Prototyps statt eigener Dateneigenschaften von `RegExp`-Instanzen ([Firefox-Fehler 1120169](https://bugzil.la/1120169)).
- Die Eigenschaft {{jsxref("RegExp.prototype.source")}} ist nun eine Accessor-Eigenschaft des Prototyps statt einer eigenen Dateneigenschaft von `RegExp`-Instanzen ([Firefox-Fehler 1120169](https://bugzil.la/1120169)). Aufgrund von [Firefox-Fehler 1150297](https://bugzil.la/1150297) ist diese Änderung nur in Versionen außerhalb des Release-Kanals verfügbar.
- {{jsxref("Function.prototype.toString()")}} löst bei {{jsxref("Proxy")}}-Objekten nun eine Ausnahme aus ([Firefox-Fehler 1100936](https://bugzil.la/1100936)).

### Schnittstellen/APIs/DOM

- Die Methode [`fetch()`](/de/docs/Web/API/Window/fetch) der Fetch API wurde implementiert ([Firefox-Fehler 1039846](https://bugzil.la/1039846)).
- Die [`BroadcastChannel`](/de/docs/Web/API/BroadcastChannel)-API wurde implementiert und ist in [Web Workers](/de/docs/Web/API/Web_Workers_API) verfügbar ([Firefox-Fehler 966439](https://bugzil.la/966439) und [Firefox-Fehler 1121420](https://bugzil.la/1121420)).
- Die Console API ist nun in [Web Workers](/de/docs/Web/API/Web_Workers_API) verfügbar.
- `CanvasRenderingContext2D.clearHitRegions()` wurde implementiert ([Firefox-Fehler 1119527](https://bugzil.la/1119527)).
- Die Konstanten `DOM_KEY_LOCATION_MOBILE` und DOM_KEY_LOCATION_JOYSTICK für [`KeyboardEvent.location`](/de/docs/Web/API/KeyboardEvent/location) wurden entfernt, da sie aus der DOM-Level-3-Spezifikation entfernt wurden ([Firefox-Fehler 936313](https://bugzil.la/936313).
- [`KeyboardEvent.code`](/de/docs/Web/API/KeyboardEvent/code) ist nun verfügbar; zuvor war die Eigenschaft nur in Vorabversionen verfügbar. ([Firefox-Fehler 1126673](https://bugzil.la/1126673))
- [`KeyboardEvent.code`](/de/docs/Web/API/KeyboardEvent/code) unterstützt nun Sondertasten auf Sun-Tastaturen unter Linux, Android und Firefox OS. ([Firefox-Fehler 1020139](https://bugzil.la/1020139))
- Der Konstruktor [`TextEncoder()`](/de/docs/Web/API/TextEncoder/TextEncoder) wurde an die Spezifikation angepasst: Bei Übergabe eines ungültigen Parameters wird nun ein {{jsxref("RangeError")}} statt des fälschlicherweise ausgelösten {{jsxref("TypeError")}} ausgelöst ([Firefox-Fehler 1125766](https://bugzil.la/1125766)).
- Die User Timing API wurde mit [`Performance.mark()`](/de/docs/Web/API/Performance/mark), [`Performance.clearMarks()`](/de/docs/Web/API/Performance/clearMarks), [`Performance.measure()`](/de/docs/Web/API/Performance/measure) und [`Performance.clearMeasures()`](/de/docs/Web/API/Performance/clearMeasures) implementiert ([Firefox-Fehler 782751](https://bugzil.la/782751)).
- Die Version von [`Window.indexedDB`](/de/docs/Web/API/Window/indexedDB) mit Präfix, `mozIndexedDB`, wurde entfernt ([Firefox-Fehler 975699](https://bugzil.la/975699)).
- Das Ereignis [`DOMContentLoaded`](/de/docs/Web/API/Document/DOMContentLoaded_event) kann nicht mehr abgebrochen werden ([Firefox-Fehler 1134559](https://bugzil.la/1134559)).
- Sie können [WebSockets](/de/docs/Web/API/WebSockets_API) nun in [Workers](/de/docs/Web/API/Web_Workers_API) verwenden ([Firefox-Fehler 504553](https://bugzil.la/504553)).
- Die Eigenschaften [`XMLHttpRequest.responseType`](/de/docs/Web/API/XMLHttpRequest/responseType) und [`XMLHttpRequest.withCredentials`](/de/docs/Web/API/XMLHttpRequest/withCredentials) können nun vor dem Aufruf von [`XMLHttpRequest.open()`](/de/docs/Web/API/XMLHttpRequest/open) gesetzt werden ([Firefox-Fehler 707484](https://bugzil.la/707484)).

### MathML

_Keine Änderungen._

### SVG

_Keine Änderungen._

### Audio/Video

_Keine Änderungen._

## Netzwerk

_Keine Änderungen._

## Sicherheit

- In Firefox wird das Attribut [`autocomplete=false`](/de/docs/Web/HTML/Reference/Elements/input#autocomplete) bei Anmeldeformularen nun ignoriert ([Firefox-Fehler 1025703](https://bugzil.la/1025703)). Dadurch sollen sicherere Passwörter gefördert werden, da Passwortmanager zuverlässiger funktionieren können.
- RC4 ist bei Verwendung von TLS nun deaktiviert, mit Ausnahme einiger ausdrücklich zugelassener Websites. Diese Positivliste ist eine Übergangsmaßnahme, bis die betreffenden Websites korrigiert wurden ([Firefox-Fehler 1124039](https://bugzil.la/1124039)). Dieser Fallback wird durch die Einstellung `security.tls.unrestricted_rc4_fallback` gesteuert, die derzeit standardmäßig auf `true` gesetzt ist ([Firefox-Fehler 1138882](https://bugzil.la/1138882)).
- Websites, die nur mit einem Rückgriff auf eine unsichere TLS-Version funktionieren, stehen nun auf einer fest im Code hinterlegten Positivliste, die mit der Zeit verkleinert wird ([Firefox-Fehler 1114816](https://bugzil.la/1114816)). Die Positivliste kann deaktiviert werden, indem `security.tls.insecure_fallback_hosts.use_static_list` auf `false` gesetzt wird.

## Änderungen für Add-on- und Mozilla-Entwickler

### Add-on SDK

#### Highlights

- `sdk/context-menu@2` wurde implementiert ([Firefox-Fehler 1070952](https://bugzil.la/1070952)).
- `sdk/addon/bootstrap` wurde implementiert ([Firefox-Fehler 1075541](https://bugzil.la/1075541)).
- `sdk/windows/loader` wurde entfernt ([Firefox-Fehler 970135](https://bugzil.la/970135)).
- Die Erkennung der Standardsprache unter Linux wurde korrigiert ([Firefox-Fehler 1114712](https://bugzil.la/1114712)).
- `toolkit/loader` bietet nun eine optionale Prüfung der Modulkompatibilität, die für alle jpm-Add-ons aktiviert ist ([Firefox-Fehler 1037235](https://bugzil.la/1037235)).

#### Aktualisierungen für Electrolysis (E10s)

- E10s-Aktualisierungen für `sdk/page-worker` ([Firefox-Fehler 1116004](https://bugzil.la/1116004)).
- E10s-Aktualisierungen für `sdk/content/worker` ([Firefox-Fehler 1116544](https://bugzil.la/1116544)).
- E10s-Aktualisierungen für `sdk/tabs` ([Firefox-Fehler 1033838](https://bugzil.la/1033838)).

#### Details

- [GitHub-Commits zwischen Firefox 37 und Firefox 38](https://github.com/mozilla/addon-sdk/compare/firefox36...firefox38).

### XUL

_Keine Änderungen._

### JavaScript-Codemodule

#### Downloads.jsm

- [`DownloadTarget`](https://web.archive.org/web/20210623121639/https://developer.mozilla.org/de/docs/Mozilla/JavaScript_code_modules/Downloads.jsm/DownloadTarget)-Objekte verfügen nun über die Eigenschaften `exists` und `size`. Damit können Sie feststellen, ob die Zieldatei des Downloads auf dem Datenträger vorhanden ist und wie groß sie ist. Die neue Methode `refresh()` fordert eine Aktualisierung dieser Werte an.

### XPCOM

- `"@mozilla.org/network/atomic-file-output-stream;1"` und `"@mozilla.org/network/safe-file-output-stream;1"` lösen nun eine Ausnahme aus, wenn `PR_APPEND` ohne `PR_TRUNCATE` übergeben wird ([Firefox-Fehler 1117580](https://bugzil.la/1117580)).
- `nsICompositionStringSynthesizer` und `nsIDOMWindowUtils.sendCompositionEvent()` wurden entfernt. Verwenden Sie stattdessen `nsITextInputProcessor`. ([Firefox-Fehler 917322](https://bugzil.la/917322))
- `nsIDOMWindowUtils.sendKeyEvent()` ist nun veraltet. Verwenden Sie stattdessen `nsITextInputProcessor` ([Firefox-Fehler 1119609](https://bugzil.la/1119609)).
