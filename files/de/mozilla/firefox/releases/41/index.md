---
title: Firefox 41 für Entwickler
slug: Mozilla/Firefox/Releases/41
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{FirefoxSidebar}}

[Um die neuesten Entwicklerfunktionen von Firefox zu testen, installieren Sie die Firefox Developer Edition](https://www.mozilla.org/en-US/firefox/developer/). Firefox 41 wurde am 22. September 2015 veröffentlicht. Dieser Artikel listet wichtige Änderungen auf, die nicht nur für Webentwickler, sondern auch für Firefox- und Gecko-Entwickler sowie für Add-on-Entwickler nützlich sind.

## Änderungen für Webentwickler

### Entwicklerwerkzeuge

Höhepunkte:

- [Machen Sie einen Screenshot eines DOM-Knotens](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/examine_and_edit_html/index.html#element-popup-menu)
- [Kopieren als HAR/speichern als HAR](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/index.html#copysave-all-as-har)
- ["Regel hinzufügen"-Schaltfläche in der Regelnansicht](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/examine_and_edit_css/index.html#add-rules)
- [Quelle in einem Tab anzeigen](https://firefox-source-docs.mozilla.org/devtools-user/view_source/index.html) (Standardmäßig deaktiviert)
- [Weitere Optionen zum Kopieren von CSS-Regeln](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/examine_and_edit_css/index.html#copy-rules)
- [Bild im Daten-URL-Format in der Regelnansicht kopieren](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/view_background_images/index.html)
- Befehl zum Anzeigen von CSP-Informationen im _GCLI_ hinzugefügt

[Alle zwischen Firefox 40 und Firefox 41 behobenen DevTools-Fehler](https://bugzilla.mozilla.org/buglist.cgi?resolution=FIXED&classification=Client%20Software&chfieldto=2015-06-29&query_format=advanced&chfield=resolution&chfieldfrom=2015-05-11&chfieldvalue=FIXED&bug_status=RESOLVED&bug_status=VERIFIED&component=Developer%20Tools&component=Developer%20Tools%3A%203D%20View&component=Developer%20Tools%3A%20Canvas%20Debugger&component=Developer%20Tools%3A%20Console&component=Developer%20Tools%3A%20Debugger&component=Developer%20Tools%3A%20Framework&component=Developer%20Tools%3A%20Graphic%20Commandline%20and%20Toolbar&component=Developer%20Tools%3A%20Inspector&component=Developer%20Tools%3A%20Memory&component=Developer%20Tools%3A%20Netmonitor&component=Developer%20Tools%3A%20Object%20Inspector&component=Developer%20Tools%3A%20Performance%20Tools%20%28Profiler%2FTimeline%29&component=Developer%20Tools%3A%20Responsive%20Mode&component=Developer%20Tools%3A%20Scratchpad&component=Developer%20Tools%3A%20Source%20Editor&component=Developer%20Tools%3A%20Storage%20Inspector&component=Developer%20Tools%3A%20Style%20Editor&component=Developer%20Tools%3A%20User%20Stories&component=Developer%20Tools%3A%20Web%20Audio%20Editor&component=Developer%20Tools%3A%20WebGL%20Shader%20Editor&component=Developer%20Tools%3A%20WebIDE&product=Firefox&list_id=12283503): Beachten Sie, dass viele dieser Fehler, insbesondere diejenigen, die sich auf die Leistungstools beziehen, auf Firefox 40 übertragen wurden.

### CSS

- Die Unterstützung für das Layout vertikaler Schriften wurde standardmäßig aktiviert ([Firefox-Fehler 1138384](https://bugzil.la/1138384)). Das bedeutet, dass die folgenden CSS-Eigenschaften jetzt verfügbar sind:

  - Auswahl der Schreibrichtung: {{cssxref("writing-mode")}}.
  - Steuerung der Ausrichtung von Zeichen: {{cssxref("text-orientation")}}.
  - Richtungsunabhängige Entsprechungen von {{cssxref("width")}} und {{cssxref("height")}}: {{cssxref("block-size")}} und {{cssxref("inline-size")}}.
  - Richtungsunabhängige Entsprechungen von {{cssxref("min-width")}} und {{cssxref("min-height")}}: {{cssxref("min-block-size")}} und {{cssxref("min-inline-size")}}.
  - Richtungsunabhängige Entsprechungen von {{cssxref("max-width")}} und {{cssxref("max-height")}}: {{cssxref("max-block-size")}} und {{cssxref("max-block-size")}}.
  - Richtungsunabhängige Entsprechungen von {{cssxref("margin-top")}}, {{cssxref("margin-right")}}, {{cssxref("margin-bottom")}} und {{cssxref("margin-left")}}: {{cssxref("margin-block-start")}}, {{cssxref("margin-block-end")}}, {{cssxref("margin-inline-start")}} und {{cssxref("margin-inline-end")}}.
  - Richtungsunabhängige Entsprechungen von {{cssxref("padding-top")}}, {{cssxref("padding-right")}}, {{cssxref("padding-bottom")}} und {{cssxref("padding-left")}}: {{cssxref("padding-block-start")}}, {{cssxref("padding-block-end")}}, {{cssxref("padding-inline-start")}} und {{cssxref("padding-inline-end")}}.
  - Richtungsunabhängige Entsprechungen von {{cssxref("border-top")}}, {{cssxref("border-right")}}, {{cssxref("border-bottom")}} und {{cssxref("border-left")}} und deren Langformen für Breite, Stil und Farbe: {{cssxref("border-block-start")}}, {{cssxref("border-block-start-width")}}, {{cssxref("border-block-start-style")}}, {{cssxref("border-block-start-color")}}, {{cssxref("border-block-end")}}, {{cssxref("border-block-end-width")}}, {{cssxref("border-block-end-style")}}, {{cssxref("border-block-end-color")}}, {{cssxref("border-inline-start")}}, {{cssxref("border-inline-start-width")}}, {{cssxref("border-inline-start-style")}}, {{cssxref("border-inline-start-color")}}, {{cssxref("border-inline-end")}}, {{cssxref("border-inline-end-width")}}, {{cssxref("border-inline-end-style")}} und {{cssxref("border-inline-end-color")}}.
  - Richtungsunabhängige Entsprechungen von {{cssxref("top")}}, {{cssxref("right")}}, {{cssxref("bottom")}} und {{cssxref("left")}}: `offset-block-start`, `offset-block-end`, `offset-inline-start` und `offset-inline-end`.

- Unterstützung für die Eigenschaft {{cssxref("transform-origin")}} in SVG und Implementierung der Eigenschaft {{cssxref("transform-box")}} ([Firefox-Fehler 923193](https://bugzil.la/923193)).

### HTML

- {{HTMLElement("a")}} ohne ein `href`-Attribut wird nicht mehr als interaktiver Inhalt klassifiziert. Ein Klick darauf innerhalb eines {{HTMLElement("label")}} aktiviert den beschrifteten Inhalt ([Firefox-Fehler 1167816](https://bugzil.la/1167816)).
- SVG-Icons werden jetzt für Site-Icons unterstützt, d.h. Favicons und Shortcut-Icons ([Firefox-Fehler 366324](https://bugzil.la/366324)).
- Das [`crossorigin`](/de/docs/Web/HTML/Reference/Elements/link#crossorigin)-Attribut wird jetzt für [\<link rel='preconnect'>](/de/docs/Web/HTML/Reference/Elements/link) unterstützt ([Firefox-Fehler 1174152](https://bugzil.la/1174152)).
- Das `picture`-Element reagiert nicht mehr auf Größenänderungen des Viewports ([Firefox-Fehler 1135812](https://bugzil.la/1135812)).

### JavaScript

- `Date.prototype` ist jetzt ein gewöhnliches Objekt und kein {{jsxref("Date")}}-Instanz mehr ([Firefox-Fehler 861219](https://bugzil.la/861219)).
- {{jsxref("Date.prototype.toString")}} ist jetzt eine generische Methode ([Firefox-Fehler 861219](https://bugzil.la/861219)).
- {{jsxref("Symbol.species")}} wurde hinzugefügt ([Firefox-Fehler 1131043](https://bugzil.la/1131043)).
- [`Map[Symbol.species]`](/de/docs/Web/JavaScript/Reference/Global_Objects/Map/Symbol.species) und [`Set[Symbol.species]`](/de/docs/Web/JavaScript/Reference/Global_Objects/Set/Symbol.species) Getter wurden hinzugefügt ([Firefox-Fehler 1131043](https://bugzil.la/1131043)).
- Die nicht standardmäßige Unterstützung für {{jsxref("Statements/let", "let expression", "#let_expressions", 1)}} wurde entfernt ([Firefox-Fehler 1023609](https://bugzil.la/1023609)).
- {{jsxref("Functions/Default_parameters", "Destructured parameters with default value assignment", "#Destructured_parameter_with_default_value_assignment", 1)}} werden jetzt unterstützt ([Firefox-Fehler 1018628](https://bugzil.la/1018628)).
- Gemäß ES2015 sind geschweifte Klammern für [Methodendefinitionen](/de/docs/Web/JavaScript/Reference/Functions/Method_definitions) erforderlich. Syntaxen ohne diese werden von nun an fehlschlagen ([Firefox-Fehler 1150855](https://bugzil.la/1150855)).
- [Methodendefinitionen](/de/docs/Web/JavaScript/Reference/Functions/Method_definitions) (außer für Generator-Methoden) sind nicht mehr konstruierbar ([Firefox-Fehler 1059908](https://bugzil.la/1059908) und [Firefox-Fehler 1166950](https://bugzil.la/1166950)).
- Im Rahmen der ES2015-Spezifikationskonformität werden parenthesierte [Destrukturierungsmuster](/de/docs/Web/JavaScript/Reference/Operators/Destructuring), wie `([a, b]) = [1, 2]` oder `({a, b}) = { a: 1, b: 2 }`, jetzt als ungültig angesehen und werfen einen {{jsxref("SyntaxError")}}. Weitere Details finden Sie auf [Jeff Waldens Blogbeitrag](https://whereswalden.com/2015/06/20/new-changes-to-make-spidermonkeys-and-firefoxs-parsing-of-destructuring-patterns-more-spec-compliant/).
- Die [`new.target`](/de/docs/Web/JavaScript/Reference/Operators/new.target)-Syntax wurde hinzugefügt ([Firefox-Fehler 1141865](https://bugzil.la/1141865)).

### Schnittstellen/APIs/DOM

#### HTML-Bearbeitungs-API

- Die Handhabung von Ausschneiden-, Kopieren- und Einfügebefehlen wurde überarbeitet und erlaubt jetzt das programmgesteuerte Kopieren und Ausschneiden von JS für Webinhalte:

  - Mit dem `'paste'`-Befehl als Argument gibt [`Document.queryCommandSupported()`](/de/docs/Web/API/Document/queryCommandSupported) jetzt `false` zurück, wenn unzureichende Berechtigungen bestehen, um die Aktion tatsächlich auszuführen ([Firefox-Fehler 1161721](https://bugzil.la/1161721)).
  - Mit den `'cut'`- oder `'copy'`-Befehlen als Argument gibt [`Document.queryCommandSupported()`](/de/docs/Web/API/Document/queryCommandSupported) jetzt `true` zurück, wenn es im Kontext von benutzerinitiiertem oder privilegiertem Code aufgerufen wird ([Firefox-Fehler 1162952](https://bugzil.la/1162952)).
  - Mit den `'cut'`- oder `'copy'`-Befehlen als Argument funktioniert [`Document.execCommand()`](/de/docs/Web/API/Document/execCommand) jetzt, jedoch nur im Kontext von benutzerinitiiertem oder privilegiertem Code ([Firefox-Fehler 1012662](https://bugzil.la/1012662)).
  - Anstatt eine Ausnahme zu erzeugen, wenn [`Document.execCommand()`](/de/docs/Web/API/Document/execCommand) der Befehl nicht unterstützt oder aktiviert ist ([Firefox-Fehler 1027560](https://bugzil.la/1027560)).

#### Ereignisse

- Die nicht standardmäßige Methode `initCloseEvent()` des [`CloseEvent`](/de/docs/Web/API/CloseEvent)-Ereignisses und die Möglichkeit, ein [`CloseEvent`](/de/docs/Web/API/CloseEvent) mit der Methode [`document.createEvent('CloseEvent')`](/de/docs/Web/API/Document/createEvent) zu erstellen, wurden entfernt; verwenden Sie stattdessen den Standardkonstruktor, [`CloseEvent()`](/de/docs/Web/API/CloseEvent/CloseEvent) ([Firefox-Fehler 1161950](https://bugzil.la/1161950)).
- Auf Desktop ist [`PointerEvent`](/de/docs/Web/API/PointerEvent) jetzt standardmäßig in Nightly aktiviert; es ist nicht in der Developer Edition, Beta oder Release aktiviert und wird es auch für einige Versionen nicht sein ([Firefox-Fehler 1166347](https://bugzil.la/1166347)).
- Die unpräfixierte Version von [`MouseEvent.movementX`](/de/docs/Web/API/MouseEvent/movementX) und [`MouseEvent.movementY`](/de/docs/Web/API/MouseEvent/movementY) wurde hinzugefügt; die präfixierten Versionen sind veraltet und werden in Zukunft entfernt ([Firefox-Fehler 1164981](https://bugzil.la/1164981)).

#### Web-Kryptografie

- [`SubtleCrypto.importKey()`](/de/docs/Web/API/SubtleCrypto/importKey) und [`SubtleCrypto.exportKey()`](/de/docs/Web/API/SubtleCrypto/exportKey) unterstützen jetzt `ECDH`-Schlüssel ([Firefox-Fehler 1050175](https://bugzil.la/1050175)).

#### Canvas-API

- [`HTMLCanvasElement.captureStream()`](/de/docs/Web/API/HTMLCanvasElement/captureStream) und `CanvasCaptureMediaStream` wurden hinzugefügt und ermöglichen das Streaming der Anzeige eines {{HTMLElement("canvas")}} in Echtzeit ([Firefox-Fehler 1032848](https://bugzil.la/1032848)).
- [`MediaStream.id`](/de/docs/Web/API/MediaStream/id) gibt jetzt die eindeutige ID eines Streams zurück ([Firefox-Fehler 1089798](https://bugzil.la/1089798)).
- Der Anfangswert von [`CanvasRenderingContext2D.filter`](/de/docs/Web/API/CanvasRenderingContext2D/filter) ist jetzt korrekt auf `none` gesetzt ([Firefox-Fehler 1163124](https://bugzil.la/1163124)).

#### Service Workers

- Verbesserung unserer experimentellen [Service Worker](/de/docs/Web/API/Service_Worker_API)-Implementierung:

  - [`ServiceWorkerGlobalScope.skipWaiting()`](/de/docs/Web/API/ServiceWorkerGlobalScope/skipWaiting) wurde implementiert ([Firefox-Fehler 1131352](https://bugzil.la/1131352)).
  - [`Clients.claim()`](/de/docs/Web/API/Clients/claim) wurde hinzugefügt ([Firefox-Fehler 1130684](https://bugzil.la/1130684)).
  - Die anderen funktionalen Ereignisse von Service Workers wurden veranlasst, von [`ExtendableEvent`](/de/docs/Web/API/ExtendableEvent) zu erben, wodurch sie Zugriff auf die Methode [`waitUntil()`](/de/docs/Web/API/ExtendableEvent/waitUntil) erhalten ([Firefox-Fehler 1160527](https://bugzil.la/1160527)).

- Die Schnittstellen [`CacheStorage`](/de/docs/Web/API/CacheStorage) und [`Cache`](/de/docs/Web/API/Cache) werden jetzt unterstützt ([Firefox-Fehler 1110144](https://bugzil.la/1110144)).

#### WebGL

- Das `failIfMajorPerformanceCaveat` WebGL-Kontextattribut wurde hinzugefügt und kann beim Erstellen eines WebGL-Kontexts mit [`HTMLCanvasElement.getContext()`](/de/docs/Web/API/HTMLCanvasElement/getContext) gesetzt werden, um anzugeben, ob die Kontexterstellung fehlschlagen soll, wenn die Systemleistung niedrig ist ([Firefox-Fehler 1164970](https://bugzil.la/1164970)).

#### WebRTC

- Firefox bietet keinen Standard-STUN-Server mehr an, der verwendet wird, wenn kein Server angegeben ist, wenn eine neue [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) erstellt wird. Sie müssen einen angeben, um erfolgreich eine WebRTC-Verbindung herzustellen.

#### Sonstiges

- Unter OS X und Windows ändert sich [`Navigator.onLine`](/de/docs/Web/API/Navigator/onLine) jetzt in Bezug auf die Netzwerkkonnektivität (es gab zuvor immer `true` zurück, es sei denn, der Modus "Offline arbeiten" war ausgewählt) ([Firefox-Fehler 654579](https://bugzil.la/654579)).
- [`MessagePort`](/de/docs/Web/API/MessagePort) und [`MessageChannel`](/de/docs/Web/API/MessageChannel) sind jetzt in [Webarbeitern](/de/docs/Web/API/Web_Workers_API) verfügbar und in allen Kontexten standardmäßig aktiviert ([Firefox-Fehler 952139](https://bugzil.la/952139)) und ([Firefox-Fehler 911972](https://bugzil.la/911972)).
- Die User Timing API ist jetzt in [Webarbeitern](/de/docs/Web/API/Web_Workers_API) verfügbar ([Firefox-Fehler 1155761](https://bugzil.la/1155761)).
- Die [Benachrichtigungs-API](/de/docs/Web/API/Notifications_API) ist jetzt in [Webarbeitern](/de/docs/Web/API/Web_Workers_API) verfügbar ([Firefox-Fehler 916893](https://bugzil.la/916893)).
- `DOMRequest` und `DOMCursor` sind jetzt in [Webarbeitern](/de/docs/Web/API/Web_Workers_API) verfügbar ([Firefox-Fehler 1167650](https://bugzil.la/1167650)).
- Die [CSS-Schriftartenlade-API](/de/docs/Web/API/CSS_Font_Loading_API) wurde vollständig implementiert und ist jetzt standardmäßig aktiviert ([Firefox-Fehler 1149381](https://bugzil.la/1149381)).
- Shared-Worker können nicht mehr zwischen privaten (d.h. beim Browsen in einem privaten Fenster) und nicht privaten Dokumenten gemeinsam genutzt werden (siehe [Firefox-Fehler 1177621](https://bugzil.la/1177621)).
- Die [`URL.searchParams`](/de/docs/Web/API/URL/searchParams)-Eigenschaft ist jetzt schreibgeschützt ([Firefox-Fehler 1174731](https://bugzil.la/1174731)).
- Die [`HTMLAnchorElement.hash`](/de/docs/Web/API/HTMLAnchorElement/hash)-Eigenschaft decodiert das URL-Fragment nicht mehr ([Firefox-Fehler 1093611](https://bugzil.la/1093611)).

### MathML

#### Neues Standard- und Ersatzschriftarten-Handling

Mathematische Formeln benötigen spezielle Schriftarten. Bisher waren diese Schriftarten in der User-Agent-Stylesheet `mathml.css` fest kodiert (die die Schriftfamilie auf dem {{MathMLElement("math")}}-Tag setzt) und in der Präferenzoption `font.mathfont-family` (die die Ersatzschriftarten für dehnbare und große Operatoren festlegt). Firefox 41 führt eine interne `x-math`-Sprache ein, die automatisch auf dem `<math>`-Tag gesetzt wird, sowie entsprechende Präferenzoptionen (z. B. `font.name.serif.x-math`). Das User-Agent-Stylesheet setzt jetzt die Schriftfamilie auf Serife auf dem `<math>`-Tag und die Präferenzoption `font.mathfont-family` wird durch `font.name.serif.x-math` ersetzt. Alle Plattformen verwenden jetzt im Wesentlichen die gleiche Liste von Ersatzschriftarten, wobei "Latin Modern Math" die erste ist. Die Standard-/Ersatzschriftarten können aus dem standardmäßigen prädiktierten Schriftartenpräferenzmenü konfiguriert werden. Weitere Details finden Sie im [Firefox-Fehler 947654](https://bugzil.la/947654) und [Firefox-Fehler 1160456](https://bugzil.la/1160456).

### SVG

- Website-Icons (Favicons, Shortcut-Icons) unterstützen jetzt SVG ([Firefox-Fehler 366324](https://bugzil.la/366324)).

### Audio/Video

- Die Einstellung `media.autoplay.enabled` gilt jetzt auch für nicht vertrauenswürdige [`HTMLMediaElement.play()`](/de/docs/Web/API/HTMLMediaElement/play)-Aufrufe, d.h. Aufrufe aus nicht benutzeraktivierten Skripten ([Firefox-Fehler 659285](https://bugzil.la/659285)).

## Netzwerke

- Der `X-Content-Duration`-Header wird nicht mehr unterstützt ([Firefox-Fehler 1160695](https://bugzil.la/1160695)).
- Entwurfsfassungen des HTTP/2-Protokolls werden nicht mehr unterstützt ([Firefox-Fehler 1132357](https://bugzil.la/1132357)).

## Sicherheit

- Die [CSP](/de/docs/Web/HTTP/Guides/CSP) 1.1 `manifest-src` [Direktive](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy) wird jetzt unterstützt ([Firefox-Fehler 1089255](https://bugzil.la/1089255)).
- Frühere Versionen von Firefox erwarteten fälschlicherweise, dass der [Content Security Policy](/de/docs/Web/HTTP/Guides/CSP) [referrer](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy#referrer)-Direktivwert `origin-when-cross-origin` als `origin-when-crossorigin` geschrieben wird. Dies wurde korrigiert, um das fehlende Bindestrichzeichen einzuschließen.

## Änderungen für Add-on- und Mozilla-Entwickler

### XUL

_Keine Änderung._

### JavaScript-Code-Module

_Keine Änderung._

### XPCOM

### Schnittstellen

_Keine Änderung._

### Sonstiges

- Eine neue, interne und nur im Chrome-Kontext verfügbare API zum Rendern des Root-Widgets eines Fensters in ein {{HTMLElement("canvas")}} wurde hinzugefügt: `CanvasRenderingContext2D.drawWidgetAsOnScreen()`. Diese API verwendet das Betriebssystem, um das Widget auf dem Bildschirm aufzunehmen. Weitere Details finden Sie im [Firefox-Fehler 1167477](https://bugzil.la/1167477).

## Ältere Versionen

{{Firefox_for_developers}}
