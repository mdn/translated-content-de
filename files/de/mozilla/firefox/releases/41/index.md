---
title: Firefox 41 für Entwickler
slug: Mozilla/Firefox/Releases/41
l10n:
  sourceCommit: 8cf6d8c10adf3ce5370f8a3f180bec11112d4d44
---

{{FirefoxSidebar}}

[Um die neuesten Entwicklerfunktionen von Firefox zu testen, installieren Sie die Firefox Developer Edition](https://www.mozilla.org/en-US/firefox/developer/). Firefox 41 wurde am 22. September 2015 veröffentlicht. Dieser Artikel listet die wichtigsten Änderungen auf, die nicht nur für Webentwickler, sondern auch für Firefox- und Gecko-Entwickler sowie Add-on-Entwickler nützlich sind.

## Änderungen für Webentwickler

### Entwicklerwerkzeuge

Höhepunkte:

- [Erstellen Sie einen Screenshot eines DOM-Knotens](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/examine_and_edit_html/index.html#element-popup-menu)
- [Als HAR kopieren/speichern](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/index.html#copysave-all-as-har)
- ["Regel hinzufügen"-Button in der Regelansicht](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/examine_and_edit_css/index.html#add-rules)
- [Quellcode in einem Tab anzeigen](https://firefox-source-docs.mozilla.org/devtools-user/view_source/index.html) (Standardmäßig deaktiviert)
- [Weitere Optionen zum Kopieren von CSS-Regeln](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/examine_and_edit_css/index.html#copy-rules)
- [Bild als Daten-URL in der Regelansicht kopieren](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/view_background_images/index.html)
- Befehl hinzugefügt, um _GCLI_ anzuzeigen, um CSP-Informationen darzustellen

[Alle DevTools-Bugs, die zwischen Firefox 40 und Firefox 41 behoben wurden](https://bugzilla.mozilla.org/buglist.cgi?resolution=FIXED&classification=Client%20Software&chfieldto=2015-06-29&query_format=advanced&chfield=resolution&chfieldfrom=2015-05-11&chfieldvalue=FIXED&bug_status=RESOLVED&bug_status=VERIFIED&component=Developer%20Tools&component=Developer%20Tools%3A%203D%20View&component=Developer%20Tools%3A%20Canvas%20Debugger&component=Developer%20Tools%3A%20Console&component=Developer%20Tools%3A%20Debugger&component=Developer%20Tools%3A%20Framework&component=Developer%20Tools%3A%20Graphic%20Commandline%20and%20Toolbar&component=Developer%20Tools%3A%20Inspector&component=Developer%20Tools%3A%20Memory&component=Developer%20Tools%3A%20Netmonitor&component=Developer%20Tools%3A%20Object%20Inspector&component=Developer%20Tools%3A%20Performance%20Tools%20%28Profiler%2FTimeline%29&component=Developer%20Tools%3A%20Responsive%20Mode&component=Developer%20Tools%3A%20Scratchpad&component=Developer%20Tools%3A%20Source%20Editor&component=Developer%20Tools%3A%20Storage%20Inspector&component=Developer%20Tools%3A%20Style%20Editor&component=Developer%20Tools%3A%20User%20Stories&component=Developer%20Tools%3A%20Web%20Audio%20Editor&component=Developer%20Tools%3A%20WebGL%20Shader%20Editor&component=Developer%20Tools%3A%20WebIDE&product=Firefox&list_id=12283503): Beachten Sie, dass viele dieser Bugs, insbesondere diejenigen, die sich auf die Performance-Tools beziehen, in Firefox 40 eingeführt wurden.

### CSS

- Die Unterstützung für vertikale Skripts wurde standardmäßig aktiviert ([Firefox-Bug 1138384](https://bugzil.la/1138384)). Das bedeutet, dass die folgenden CSS-Eigenschaften nun verfügbar sind:

  - Auswahl der Schreibrichtung: {{cssxref("writing-mode")}}.
  - Steuerung der Orientierung von Zeichen: {{cssxref("text-orientation")}}.
  - Richtung-unabhängige Äquivalente von {{cssxref("width")}} und {{cssxref("height")}}: {{cssxref("block-size")}} und {{cssxref("inline-size")}}.
  - Richtung-unabhängige Äquivalente von {{cssxref("min-width")}} und {{cssxref("min-height")}}: {{cssxref("min-block-size")}} und {{cssxref("min-inline-size")}}.
  - Richtung-unabhängige Äquivalente von {{cssxref("max-width")}} und {{cssxref("max-height")}}: {{cssxref("max-block-size")}} und {{cssxref("max-inline-size")}}.
  - Richtung-unabhängige Äquivalente von {{cssxref("margin-top")}}, {{cssxref("margin-right")}}, {{cssxref("margin-bottom")}} und {{cssxref("margin-left")}}: {{cssxref("margin-block-start")}}, {{cssxref("margin-block-end")}}, {{cssxref("margin-inline-start")}} und {{cssxref("margin-inline-end")}}.
  - Richtung-unabhängige Äquivalente von {{cssxref("padding-top")}}, {{cssxref("padding-right")}}, {{cssxref("padding-bottom")}} und {{cssxref("padding-left")}}: {{cssxref("padding-block-start")}}, {{cssxref("padding-block-end")}}, {{cssxref("padding-inline-start")}} und {{cssxref("padding-inline-end")}}.
  - Richtung-unabhängige Äquivalente von {{cssxref("border-top")}}, {{cssxref("border-right")}}, {{cssxref("border-bottom")}} und {{cssxref("border-left")}} und deren Langformen für Breite, Stil und Farbe: {{cssxref("border-block-start")}}, {{cssxref("border-block-start-width")}}, {{cssxref("border-block-start-style")}}, {{cssxref("border-block-start-color")}}, {{cssxref("border-block-end")}}, {{cssxref("border-block-end-width")}}, {{cssxref("border-block-end-style")}}, {{cssxref("border-block-end-color")}}, {{cssxref("border-inline-start")}}, {{cssxref("border-inline-start-width")}}, {{cssxref("border-inline-start-style")}}, {{cssxref("border-inline-start-color")}}, {{cssxref("border-inline-end")}}, {{cssxref("border-inline-end-width")}}, {{cssxref("border-inline-end-style")}} und {{cssxref("border-inline-end-color")}}.
  - Richtung-unabhängige Äquivalente von {{cssxref("top")}}, {{cssxref("right")}}, {{cssxref("bottom")}} und {{cssxref("left")}}: `offset-block-start`, `offset-block-end`, `offset-inline-start` und `offset-inline-end`.

- Unterstützung der Eigenschaft {{cssxref("transform-origin")}} in SVG und Implementierung der Eigenschaft {{cssxref("transform-box")}} ([Firefox-Bug 923193](https://bugzil.la/923193)).

### HTML

- Ein {{HTMLElement("a")}} ohne ein `href`-Attribut wird nicht mehr als interaktiver Inhalt eingestuft. Ein Klick darauf innerhalb eines {{HTMLElement("label")}} aktiviert den bezeichneten Inhalt ([Firefox-Bug 1167816](https://bugzil.la/1167816)).
- SVG-Icons werden jetzt für Webseiten-Icons unterstützt, d.h. Favicons und Shortcut-Icons ([Firefox-Bug 366324](https://bugzil.la/366324)).
- Das [`crossorigin`](/de/docs/Web/HTML/Element/link#crossorigin)-Attribut wird jetzt für [\<link rel='preconnect'>](/de/docs/Web/HTML/Element/link) unterstützt ([Firefox-Bug 1174152](https://bugzil.la/1174152)).
- Das Bild-Element reagiert nicht mehr auf Größen-/Ansichtsfensteränderungen ([Firefox-Bug 1135812](https://bugzil.la/1135812)).

### JavaScript

- `Date.prototype` ist jetzt ein gewöhnliches Objekt und nicht mehr eine {{jsxref("Date")}}-Instanz ([Firefox-Bug 861219](https://bugzil.la/861219)).
- {{jsxref("Date.prototype.toString")}} ist jetzt eine generische Methode ([Firefox-Bug 861219](https://bugzil.la/861219)).
- {{jsxref("Symbol.species")}} wurde hinzugefügt ([Firefox-Bug 1131043](https://bugzil.la/1131043)).
- [`Map[Symbol.species]`](/de/docs/Web/JavaScript/Reference/Global_Objects/Map/Symbol.species) und [`Set[Symbol.species]`](/de/docs/Web/JavaScript/Reference/Global_Objects/Set/Symbol.species) Getter wurden hinzugefügt ([Firefox-Bug 1131043](https://bugzil.la/1131043)).
- Unterstützung für nicht standardisierte {{jsxref("Statements/let", "let-Ausdrücke", "#let_expressions", 1)}} wurde entfernt ([Firefox-Bug 1023609](https://bugzil.la/1023609)).
- {{jsxref("Functions/Default_parameters", "Destrukturierte Parameter mit Standardwertzuweisung", "#Destructured_parameter_with_default_value_assignment", 1)}} werden nun unterstützt ([Firefox-Bug 1018628](https://bugzil.la/1018628)).
- Laut ES2015 sind geschweifte Klammern für [Methodendefinitionen](/de/docs/Web/JavaScript/Reference/Functions/Method_definitions) erforderlich. Syntax ohne diese wird künftig fehlschlagen ([Firefox-Bug 1150855](https://bugzil.la/1150855)).
- [Methodendefinitionen](/de/docs/Web/JavaScript/Reference/Functions/Method_definitions) (außer für Generator-Methoden) sind nicht mehr konstruierbar ([Firefox-Bug 1059908](https://bugzil.la/1059908) und [Firefox-Bug 1166950](https://bugzil.la/1166950)).
- Im Rahmen der ES2015-Spezifikationskonformität werden parenthesierte [Destrukturierungsmuster](/de/docs/Web/JavaScript/Reference/Operators/Destructuring) wie `([a, b]) = [1, 2]` oder `({a, b}) = { a: 1, b: 2 }` nun als ungültig angesehen und werfen einen {{jsxref("SyntaxError")}}. Lesen Sie [Jeff Waldens Blogpost](https://whereswalden.com/2015/06/20/new-changes-to-make-spidermonkeys-and-firefoxs-parsing-of-destructuring-patterns-more-spec-compliant/) für weitere Details.
- Die [`new.target`](/de/docs/Web/JavaScript/Reference/Operators/new.target)-Syntax wurde hinzugefügt ([Firefox-Bug 1141865](https://bugzil.la/1141865)).

### Schnittstellen/APIs/DOM

#### HTML-Bearbeitungs-API

- Die Bearbeitung von Ausschneiden-, Kopieren- und Einfüge-Befehlen wurde überarbeitet und erlaubt nun das programmgesteuerte Kopieren und Ausschneiden aus JS für Web-Inhalte:

  - Mit dem Befehl `'paste'` als Argument gibt [`Document.queryCommandSupported()`](/de/docs/Web/API/Document/queryCommandSupported) nun `false` zurück, wenn unzureichende Berechtigungen bestehen, um die Aktion tatsächlich durchzuführen ([Firefox-Bug 1161721](https://bugzil.la/1161721)).
  - Mit dem Befehl `'cut'` oder `'copy'` als Argument gibt [`Document.queryCommandSupported()`](/de/docs/Web/API/Document/queryCommandSupported) nun `true` zurück, wenn es im Kontext eines benutzerinitiierten oder privilegierten Codes aufgerufen wird ([Firefox-Bug 1162952](https://bugzil.la/1162952)).
  - Mit dem Befehl `'cut'` oder `'copy'` als Argument funktioniert [`Document.execCommand()`](/de/docs/Web/API/Document/execCommand) nun, aber nur im Kontext eines benutzerinitiierten oder privilegierten Codes ([Firefox-Bug 1012662](https://bugzil.la/1012662)).
  - Anstatt eine Ausnahme zu werfen, wenn der Befehl nicht unterstützt oder aktiviert ist, verhält sich [`Document.execCommand()`](/de/docs/Web/API/Document/execCommand) jetzt ruhiger ([Firefox-Bug 1027560](https://bugzil.la/1027560)).

#### Ereignisse

- Die nicht standardisierte Methode `initCloseEvent()` des [`CloseEvent`](/de/docs/Web/API/CloseEvent)-Ereignisses und die Möglichkeit, ein [`CloseEvent`](/de/docs/Web/API/CloseEvent) mithilfe der Methode [`document.createEvent('CloseEvent')`](/de/docs/Web/API/Document/createEvent) zu erstellen, wurden entfernt; stattdessen den Standardkonstruktor [`CloseEvent()`](/de/docs/Web/API/CloseEvent/CloseEvent) verwenden ([Firefox-Bug 1161950](https://bugzil.la/1161950)).
- Auf dem Desktop ist [`PointerEvent`](/de/docs/Web/API/PointerEvent) jetzt standardmäßig in Nightly aktiviert; es ist nicht in der Developer Edition, Beta oder Release aktiviert und wird es auch in absehbarer Zeit nicht sein ([Firefox-Bug 1166347](https://bugzil.la/1166347)).
- Die nicht präfixierte Version von [`MouseEvent.movementX`](/de/docs/Web/API/MouseEvent/movementX) und [`MouseEvent.movementY`](/de/docs/Web/API/MouseEvent/movementY) wurde hinzugefügt; die präfixierten Versionen sind veraltet und werden irgendwann in der Zukunft entfernt ([Firefox-Bug 1164981](https://bugzil.la/1164981)).

#### Web-Krypto

- [`SubtleCrypto.importKey()`](/de/docs/Web/API/SubtleCrypto/importKey) und [`SubtleCrypto.exportKey()`](/de/docs/Web/API/SubtleCrypto/exportKey) unterstützen jetzt `ECDH`-Schlüssel ([Firefox-Bug 1050175](https://bugzil.la/1050175)).

#### Canvas-API

- [`HTMLCanvasElement.captureStream()`](/de/docs/Web/API/HTMLCanvasElement/captureStream) und `CanvasCaptureMediaStream` wurden hinzugefügt und ermöglichen es, die Anzeige eines {{HTMLElement("canvas")}} in Echtzeit zu streamen ([Firefox-Bug 1032848](https://bugzil.la/1032848)).
- [`MediaStream.id`](/de/docs/Web/API/MediaStream/id) gibt jetzt die eindeutige ID eines Streams zurück ([Firefox-Bug 1089798](https://bugzil.la/1089798)).
- Der Anfangswert von [`CanvasRenderingContext2D.filter`](/de/docs/Web/API/CanvasRenderingContext2D/filter) ist nun korrekt auf `none` gesetzt ([Firefox-Bug 1163124](https://bugzil.la/1163124)).

#### Service Workers

- Verbesserung unserer experimentellen [Service Worker](/de/docs/Web/API/Service_Worker_API)-Implementierung:

  - [`ServiceWorkerGlobalScope.skipWaiting()`](/de/docs/Web/API/ServiceWorkerGlobalScope/skipWaiting) wurde implementiert ([Firefox-Bug 1131352](https://bugzil.la/1131352)).
  - [`Clients.claim()`](/de/docs/Web/API/Clients/claim) wurde hinzugefügt ([Firefox-Bug 1130684](https://bugzil.la/1130684)).
  - Die anderen funktionalen Ereignisse von Service Workern erben nun von [`ExtendableEvent`](/de/docs/Web/API/ExtendableEvent), wodurch sie Zugriff auf die Methode [`waitUntil()`](/de/docs/Web/API/ExtendableEvent/waitUntil) haben ([Firefox-Bug 1160527](https://bugzil.la/1160527)).

- Die Schnittstellen [`CacheStorage`](/de/docs/Web/API/CacheStorage) und [`Cache`](/de/docs/Web/API/Cache) werden jetzt unterstützt ([Firefox-Bug 1110144](https://bugzil.la/1110144)).

#### WebGL

- Das WebGL-Kontextattribut `failIfMajorPerformanceCaveat` wurde hinzugefügt und kann beim Erstellen eines WebGL-Kontextes mit [`HTMLCanvasElement.getContext()`](/de/docs/Web/API/HTMLCanvasElement/getContext) gesetzt werden, um anzugeben, ob die Kontexterstellung fehlschlagen soll, wenn die Systemleistung niedrig ist ([Firefox-Bug 1164970](https://bugzil.la/1164970)).

#### WebRTC

- Firefox bietet keinen Standard-STUN-Server mehr an, wenn keiner angegeben wird, wenn ein neuer [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) erstellt wird. Sie müssen einen bereitstellen, um eine WebRTC-Verbindung erfolgreich herzustellen.

#### Verschiedenes

- Unter OS X und Windows ändert sich [`Navigator.onLine`](/de/docs/Web/API/Navigator/onLine) jetzt in Abhängigkeit von der Netzwerkanbindung (es gab immer `true` zurück, es sei denn, der Offline-Modus war ausgewählt) ([Firefox-Bug 654579](https://bugzil.la/654579)).
- [`MessagePort`](/de/docs/Web/API/MessagePort) und [`MessageChannel`](/de/docs/Web/API/MessageChannel) sind jetzt in [Webarbeitern](/de/docs/Web/API/Web_Workers_API) verfügbar und in allen Kontexten standardmäßig aktiviert ([Firefox-Bug 952139](https://bugzil.la/952139) und [Firefox-Bug 911972](https://bugzil.la/911972)).
- Die User-Timing-API ist jetzt in [Webarbeitern](/de/docs/Web/API/Web_Workers_API) verfügbar ([Firefox-Bug 1155761](https://bugzil.la/1155761)).
- Die [Notifications API](/de/docs/Web/API/Notifications_API) ist jetzt in [Webarbeitern](/de/docs/Web/API/Web_Workers_API) verfügbar ([Firefox-Bug 916893](https://bugzil.la/916893)).
- `DOMRequest` und `DOMCursor` sind jetzt in [Webarbeitern](/de/docs/Web/API/Web_Workers_API) verfügbar ([Firefox-Bug 1167650](https://bugzil.la/1167650)).
- Die [CSS Font Loading API](/de/docs/Web/API/CSS_Font_Loading_API) wurde vollständig implementiert und ist jetzt standardmäßig aktiviert ([Firefox-Bug 1149381](https://bugzil.la/1149381)).
- Shared Worker können nun nicht mehr zwischen privaten (d.h. in einem privaten Fenster) und nicht privaten Dokumenten geteilt werden (siehe [Firefox-Bug 1177621](https://bugzil.la/1177621)).
- Die [`URL.searchParams`](/de/docs/Web/API/URL/searchParams)-Eigenschaft ist jetzt schreibgeschützt ([Firefox-Bug 1174731](https://bugzil.la/1174731)).
- Die [`HTMLAnchorElement.hash`](/de/docs/Web/API/HTMLAnchorElement/hash)-Eigenschaft dekodiert keine URL-Fragmente mehr ([Firefox-Bug 1093611](https://bugzil.la/1093611)).

### MathML

#### Neue Standards und Fallback-Schrifthandhabung

Mathematische Formeln erfordern spezielle Schriften. Bisher waren diese Schriften fest im `mathml.css`-User-Agent-Stylesheet (das die Schriftfamilie auf das {{MathMLElement("math")}}-Tag setzt) und in der Voreinstellung `font.mathfont-family` (die die Fallback-Schriften für dehnbare und große Operatoren festlegt) kodiert. Firefox 41 führt eine interne `x-math`-Sprache ein, die automatisch beim `<math>`-Tag gesetzt wird sowie entsprechende Voreinstellungen (z.B. `font.name.serif.x-math`). Das User-Agent-Stylesheet setzt nun die Schriftfamilie auf Serif beim `<math>`-Tag und die Voreinstellung `font.mathfont-family` wird durch `font.name.serif.x-math` ersetzt. Alle Plattformen verwenden nun im Wesentlichen die gleiche Liste von Fallback-Schriften, mit "Latin Modern Math" als erster. Die Standard/Fallback-Schriften können über das standardmäßige pro-Sprach-Schriftvoreinstellungsmenü konfiguriert werden. Für weitere Details siehe [Firefox-Bug 947654](https://bugzil.la/947654) und [Firefox-Bug 1160456](https://bugzil.la/1160456).

### SVG

- Webseiten-Icons (Favicons, Shortcut-Icons) unterstützen jetzt SVG ([Firefox-Bug 366324](https://bugzil.la/366324)).

### Audio/Video

- Die Voreinstellung `media.autoplay.enabled` gilt nun auch für unzuverlässige [`HTMLMediaElement.play()`](/de/docs/Web/API/HTMLMediaElement/play)-Aufrufe, d.h. Aufrufe von nicht benutzeraktivierten Skripten ([Firefox-Bug 659285](https://bugzil.la/659285)).

## Netzwerk

- Der `X-Content-Duration`-Header wird nicht mehr unterstützt ([Firefox-Bug 1160695](https://bugzil.la/1160695)).
- Entwurfsversionen des HTTP/2-Protokolls werden nicht mehr unterstützt ([Firefox-Bug 1132357](https://bugzil.la/1132357)).

## Sicherheit

- Die [CSP](/de/docs/Web/HTTP/CSP) 1.1 `manifest-src` [Direktive](/de/docs/Web/HTTP/Headers/Content-Security-Policy) wird jetzt unterstützt ([Firefox-Bug 1089255](https://bugzil.la/1089255)).
- Frühere Firefox-Versionen erwarteten fälschlicherweise, dass der Wert der [Content Security Policy](/de/docs/Web/HTTP/CSP) [referrer](/de/docs/Web/HTTP/Headers/Content-Security-Policy#referrer)-Direktive `origin-when-cross-origin` als `origin-when-crossorigin` geschrieben wird. Dies wurde korrigiert, um das fehlende Bindestrichzeichen einzufügen.

## Änderungen für Add-on- und Mozilla-Entwickler

### XUL

_Keine Änderung._

### JavaScript-Code-Module

_Keine Änderung._

### XPCOM

### Schnittstellen

_Keine Änderung._

### Andere

- Eine neue, interne und nur für den Chrome-Kontext verfügbare API zum Rendern des Root-Widgets eines Fensters in ein {{HTMLElement("canvas")}} wurde hinzugefügt: `CanvasRenderingContext2D.drawWidgetAsOnScreen()`. Diese API verwendet das Betriebssystem, um das Widget auf dem Bildschirm zu erfassen. Für weitere Details siehe [Firefox-Bug 1167477](https://bugzil.la/1167477).

## Ältere Versionen

{{Firefox_for_developers}}
