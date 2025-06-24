---
title: Firefox 41 für Entwickler
slug: Mozilla/Firefox/Releases/41
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{FirefoxSidebar}}

[Um die neuesten Entwickler-Funktionen von Firefox zu testen, installieren Sie die Firefox Developer Edition](https://www.mozilla.org/en-US/firefox/developer/). Firefox 41 wurde am 22. September 2015 veröffentlicht. Dieser Artikel listet wichtige Änderungen auf, die nicht nur für Webentwickler, sondern auch für Firefox- und Gecko-Entwickler sowie Add-on-Entwickler nützlich sind.

## Änderungen für Webentwickler

### Entwicklerwerkzeuge

Höhepunkte:

- [Einen Screenshot eines DOM-Knotens aufnehmen](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/examine_and_edit_html/index.html#element-popup-menu)
- [Als HAR kopieren/speichern](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/index.html#copysave-all-as-har)
- [„Regel hinzufügen“-Button in der Regelansicht](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/examine_and_edit_css/index.html#add-rules)
- [Quellcode in einem Tab anzeigen](https://firefox-source-docs.mozilla.org/devtools-user/view_source/index.html) (Standardmäßig deaktiviert)
- [Mehr Optionen zum Kopieren von CSS-Regeln](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/examine_and_edit_css/index.html#copy-rules)
- [Bild als Daten: URL in der Regelansicht kopieren](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/view_background_images/index.html)
- Befehl zu _GCLI_ hinzugefügt, um CSP-Informationen anzuzeigen

[Alle zwischen Firefox 40 und Firefox 41 behobenen Devtools-Bugs](https://bugzilla.mozilla.org/buglist.cgi?resolution=FIXED&classification=Client%20Software&chfieldto=2015-06-29&query_format=advanced&chfield=resolution&chfieldfrom=2015-05-11&chfieldvalue=FIXED&bug_status=RESOLVED&bug_status=VERIFIED&component=Developer%20Tools&component=Developer%20Tools%3A%203D%20View&component=Developer%20Tools%3A%20Canvas%20Debugger&component=Developer%20Tools%3A%20Console&component=Developer%20Tools%3A%20Debugger&component=Developer%20Tools%3A%20Framework&component=Developer%20Tools%3A%20Graphic%20Commandline%20and%20Toolbar&component=Developer%20Tools%3A%20Inspector&component=Developer%20Tools%3A%20Memory&component=Developer%20Tools%3A%20Netmonitor&component=Developer%20Tools%3A%20Object%20Inspector&component=Developer%20Tools%3A%20Performance%20Tools%20%28Profiler%2FTimeline%29&component=Developer%20Tools%3A%20Responsive%20Mode&component=Developer%20Tools%3A%20Scratchpad&component=Developer%20Tools%3A%20Source%20Editor&component=Developer%20Tools%3A%20Storage%20Inspector&component=Developer%20Tools%3A%20Style%20Editor&component=Developer%20Tools%3A%20User%20Stories&component=Developer%20Tools%3A%20Web%20Audio%20Editor&component=Developer%20Tools%3A%20WebGL%20Shader%20Editor&component=Developer%20Tools%3A%20WebIDE&product=Firefox&list_id=12283503): beachten Sie, dass viele dieser Bugs, insbesondere diejenigen in Bezug auf die Leistungswerkzeuge, in Firefox 40 übernommen wurden.

### CSS

- Die Unterstützung für das Layout von vertikalen Schriften wurde standardmäßig aktiviert ([Firefox Bug 1138384](https://bugzil.la/1138384)). Das bedeutet, dass die folgenden CSS-Eigenschaften jetzt verfügbar sind:

  - Auswahl der Schreibrichtung: {{cssxref("writing-mode")}}.
  - Steuerung der Orientierung von Zeichen: {{cssxref("text-orientation")}}.
  - Richtungsunabhängige Äquivalente von {{cssxref("width")}} und {{cssxref("height")}}: {{cssxref("block-size")}} und {{cssxref("inline-size")}}.
  - Richtungsunabhängige Äquivalente von {{cssxref("min-width")}} und {{cssxref("min-height")}}: {{cssxref("min-block-size")}} und {{cssxref("min-inline-size")}}.
  - Richtungsunabhängige Äquivalente von {{cssxref("max-width")}} und {{cssxref("max-height")}}: {{cssxref("max-block-size")}} und {{cssxref("max-block-size")}}.
  - Richtungsunabhängige Äquivalente von {{cssxref("margin-top")}}, {{cssxref("margin-right")}}, {{cssxref("margin-bottom")}} und {{cssxref("margin-left")}}: {{cssxref("margin-block-start")}}, {{cssxref("margin-block-end")}}, {{cssxref("margin-inline-start")}} und {{cssxref("margin-inline-end")}}.
  - Richtungsunabhängige Äquivalente von {{cssxref("padding-top")}}, {{cssxref("padding-right")}}, {{cssxref("padding-bottom")}} und {{cssxref("padding-left")}}: {{cssxref("padding-block-start")}}, {{cssxref("padding-block-end")}}, {{cssxref("padding-inline-start")}} und {{cssxref("padding-inline-end")}}.
  - Richtungsunabhängige Äquivalente von {{cssxref("border-top")}}, {{cssxref("border-right")}}, {{cssxref("border-bottom")}} und {{cssxref("border-left")}} und ihre Langformen für Breite, Stil und Farbe: {{cssxref("border-block-start")}}, {{cssxref("border-block-start-width")}}, {{cssxref("border-block-start-style")}}, {{cssxref("border-block-start-color")}}, {{cssxref("border-block-end")}}, {{cssxref("border-block-end-width")}}, {{cssxref("border-block-end-style")}}, {{cssxref("border-block-end-color")}}, {{cssxref("border-inline-start")}}, {{cssxref("border-inline-start-width")}}, {{cssxref("border-inline-start-style")}}, {{cssxref("border-inline-start-color")}}, {{cssxref("border-inline-end")}}, {{cssxref("border-inline-end-width")}}, {{cssxref("border-inline-end-style")}} und {{cssxref("border-inline-end-color")}}.
  - Richtungsunabhängige Äquivalente von {{cssxref("top")}}, {{cssxref("right")}}, {{cssxref("bottom")}} und {{cssxref("left")}}: `offset-block-start`, `offset-block-end`, `offset-inline-start` und `offset-inline-end`.

- Unterstützung für die {{cssxref("transform-origin")}} Eigenschaft in SVG und Implementierung der {{cssxref("transform-box")}} Eigenschaft ([Firefox Bug 923193](https://bugzil.la/923193)).

### HTML

- {{HTMLElement("a")}} ohne ein `href` Attribut wird nicht länger als interaktiver Inhalt klassifiziert. Ein Klick darauf innerhalb eines {{HTMLElement("label")}} aktiviert den markierten Inhalt ([Firefox Bug 1167816](https://bugzil.la/1167816)).
- SVG-Icons werden nun für Webseiten-Icons, also Favicons und Verknüpfungs-Icons unterstützt ([Firefox Bug 366324](https://bugzil.la/366324)).
- Das Attribut [`crossorigin`](/de/docs/Web/HTML/Reference/Elements/link#crossorigin) wird nun für [\<link rel='preconnect'>](/de/docs/Web/HTML/Reference/Elements/link) unterstützt ([Firefox Bug 1174152](https://bugzil.la/1174152)).
- Das `<picture>` Element reagiert nicht auf Größenänderungen/Viewport-Änderungen ([Firefox Bug 1135812](https://bugzil.la/1135812)).

### JavaScript

- `Date.prototype` ist jetzt ein gewöhnliches Objekt und nicht mehr eine {{jsxref("Date")}} Instanz ([Firefox Bug 861219](https://bugzil.la/861219)).
- {{jsxref("Date.prototype.toString")}} ist jetzt eine generische Methode ([Firefox Bug 861219](https://bugzil.la/861219)).
- {{jsxref("Symbol.species")}} wurde hinzugefügt ([Firefox Bug 1131043](https://bugzil.la/1131043)).
- [`Map[Symbol.species]`](/de/docs/Web/JavaScript/Reference/Global_Objects/Map/Symbol.species) und [`Set[Symbol.species]`](/de/docs/Web/JavaScript/Reference/Global_Objects/Set/Symbol.species) Getter wurden hinzugefügt ([Firefox Bug 1131043](https://bugzil.la/1131043)).
- Die nicht standardisierte {{jsxref("Statements/let", "let expression", "#let_expressions", 1)}} Unterstützung wurde entfernt ([Firefox Bug 1023609](https://bugzil.la/1023609)).
- {{jsxref("Functions/Default_parameters", "Destrukturierte Parameter mit Standardwertzuweisung", "#Destructured_parameter_with_default_value_assignment", 1)}} werden nun unterstützt ([Firefox Bug 1018628](https://bugzil.la/1018628)).
- Nach ES2015 sind geschwungene Klammern für [Methodendefinitionen](/de/docs/Web/JavaScript/Reference/Functions/Method_definitions) erforderlich. Syntax ohne sie wird zukünftig fehlschlagen ([Firefox Bug 1150855](https://bugzil.la/1150855)).
- [Methodendefinitionen](/de/docs/Web/JavaScript/Reference/Functions/Method_definitions) (außer für Generator-Methoden) können nicht mehr erstellt werden ([Firefox Bug 1059908](https://bugzil.la/1059908) und [Firefox Bug 1166950](https://bugzil.la/1166950)).
- Im Rahmen der Konformität mit der ES2015-Spezifikation werden elternhesierte [Destrukturierungsmuster](/de/docs/Web/JavaScript/Reference/Operators/Destructuring), wie `([a, b]) = [1, 2]` oder `({a, b}) = { a: 1, b: 2 }`, jetzt als ungültig betrachtet und werfen einen {{jsxref("SyntaxError")}}. Für mehr Details, siehe [Jeff Waldens Blogbeitrag](https://whereswalden.com/2015/06/20/new-changes-to-make-spidermonkeys-and-firefoxs-parsing-of-destructuring-patterns-more-spec-compliant/).
- Die Syntax [`new.target`](/de/docs/Web/JavaScript/Reference/Operators/new.target) wurde hinzugefügt ([Firefox Bug 1141865](https://bugzil.la/1141865)).

### Schnittstellen/APIs/DOM

#### HTML Editing API

- Die Behandlung von Ausschneiden, Kopieren und Einfügen Befehlen wurde überarbeitet und ermöglicht nun das programmgesteuerte Kopieren und Ausschneiden von JS für Web-Inhalte:
  - Mit dem `'paste'` Befehl als Argument gibt [`Document.queryCommandSupported()`](/de/docs/Web/API/Document/queryCommandSupported) nun `false` zurück, wenn die erforderlichen Berechtigungen fehlen, um die Aktion tatsächlich durchzuführen ([Firefox Bug 1161721](https://bugzil.la/1161721)).
  - Mit dem `'cut'` oder `'copy'` Befehl als Argument gibt [`Document.queryCommandSupported()`](/de/docs/Web/API/Document/queryCommandSupported) nun `true` zurück, wenn es im Kontext von benutzerinitiierter oder privilegierter Code ausgeführt wird ([Firefox Bug 1162952](https://bugzil.la/1162952)).
  - Mit dem `'cut'` oder `'copy'` Befehl als Argument funktioniert [`Document.execCommand()`](/de/docs/Web/API/Document/execCommand) nun, jedoch nur im Kontext von benutzerinitiierter oder privilegierter Code ([Firefox Bug 1012662](https://bugzil.la/1012662)).
  - Anstatt eine Ausnahme auszulösen, wenn der Befehl nicht unterstützt oder aktiviert ist ([Firefox Bug 1027560](https://bugzil.la/1027560)).

#### Ereignisse

- Die nicht standardisierte `initCloseEvent()` Methode des [`CloseEvent`](/de/docs/Web/API/CloseEvent) Ereignisses und die Möglichkeit, ein [`CloseEvent`](/de/docs/Web/API/CloseEvent) mit der [`document.createEvent('CloseEvent')`](/de/docs/Web/API/Document/createEvent) Methode zu erstellen, wurden entfernt; verwenden Sie stattdessen den Standardkonstruktor, [`CloseEvent()`](/de/docs/Web/API/CloseEvent/CloseEvent) ([Firefox Bug 1161950](https://bugzil.la/1161950)).
- Auf dem Desktop ist [`PointerEvent`](/de/docs/Web/API/PointerEvent) jetzt in Nightly standardmäßig aktiviert; es ist in Developer Edition, Beta oder Release nicht aktiviert und wird es für einige Versionen auch nicht sein ([Firefox Bug 1166347](https://bugzil.la/1166347)).
- Die unpräfixierten Versionen von [`MouseEvent.movementX`](/de/docs/Web/API/MouseEvent/movementX) und [`MouseEvent.movementY`](/de/docs/Web/API/MouseEvent/movementY) wurden hinzugefügt; die präfixierten Versionen sind veraltet und werden zukünftig entfernt ([Firefox Bug 1164981](https://bugzil.la/1164981)).

#### Web Crypto

- [`SubtleCrypto.importKey()`](/de/docs/Web/API/SubtleCrypto/importKey) und [`SubtleCrypto.exportKey()`](/de/docs/Web/API/SubtleCrypto/exportKey) unterstützen nun `ECDH` Schlüssel ([Firefox Bug 1050175](https://bugzil.la/1050175)).

#### Canvas API

- [`HTMLCanvasElement.captureStream()`](/de/docs/Web/API/HTMLCanvasElement/captureStream) und `CanvasCaptureMediaStream` wurden hinzugefügt und erlauben das Streaming der Anzeige eines {{HTMLElement("canvas")}} in Echtzeit ([Firefox Bug 1032848](https://bugzil.la/1032848)).
- [`MediaStream.id`](/de/docs/Web/API/MediaStream/id) gibt jetzt die eindeutige ID eines Streams zurück ([Firefox Bug 1089798](https://bugzil.la/1089798)).
- Der Anfangswert von [`CanvasRenderingContext2D.filter`](/de/docs/Web/API/CanvasRenderingContext2D/filter) ist jetzt korrekt auf `none` gesetzt ([Firefox Bug 1163124](https://bugzil.la/1163124)).

#### Service Workers

- Verbesserung unserer experimentellen [Service Worker](/de/docs/Web/API/Service_Worker_API) Implementierung:

  - [`ServiceWorkerGlobalScope.skipWaiting()`](/de/docs/Web/API/ServiceWorkerGlobalScope/skipWaiting) wurde implementiert ([Firefox Bug 1131352](https://bugzil.la/1131352)).
  - [`Clients.claim()`](/de/docs/Web/API/Clients/claim) wurde hinzugefügt ([Firefox Bug 1130684](https://bugzil.la/1130684)).
  - Die anderen funktionalen Ereignisse von Service Workers erben jetzt von [`ExtendableEvent`](/de/docs/Web/API/ExtendableEvent), was ihnen Zugriff auf die [`waitUntil()`](/de/docs/Web/API/ExtendableEvent/waitUntil) Methode gibt ([Firefox Bug 1160527](https://bugzil.la/1160527)).

- Die Schnittstellen [`CacheStorage`](/de/docs/Web/API/CacheStorage) und [`Cache`](/de/docs/Web/API/Cache) werden jetzt unterstützt ([Firefox Bug 1110144](https://bugzil.la/1110144)).

#### WebGL

- Das `failIfMajorPerformanceCaveat` WebGL Kontextattribut wurde hinzugefügt und kann verwendet werden, wenn ein WebGL-Kontext mit [`HTMLCanvasElement.getContext()`](/de/docs/Web/API/HTMLCanvasElement/getContext) erstellt wird, um anzuzeigen, ob die Kontext-Erstellung fehlschlagen soll, wenn die Systemleistung niedrig ist ([Firefox Bug 1164970](https://bugzil.la/1164970)).

#### WebRTC

- Firefox bietet keinen Standard-STUN-Server mehr an, der verwendet wird, wenn beim Erstellen einer neuen [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) keiner angegeben wird. Sie müssen einen bereitstellen, um erfolgreich eine WebRTC-Verbindung herzustellen.

#### Verschiedenes

- Unter OS X und Windows ändert sich [`Navigator.onLine`](/de/docs/Web/API/Navigator/onLine) jetzt im Hinblick auf die Netzwerkverbindung (es hat vorher immer `true` zurückgegeben, außer wenn der Modus "Offline arbeiten" ausgewählt war) ([Firefox Bug 654579](https://bugzil.la/654579)).
- [`MessagePort`](/de/docs/Web/API/MessagePort) und [`MessageChannel`](/de/docs/Web/API/MessageChannel) sind jetzt in [Web-Workern](/de/docs/Web/API/Web_Workers_API) verfügbar und sind standardmäßig in allen Kontexten aktiviert ([Firefox Bug 952139](https://bugzil.la/952139) und [Firefox Bug 911972](https://bugzil.la/911972)).
- Die User Timing API ist jetzt in [Web-Workern](/de/docs/Web/API/Web_Workers_API) verfügbar ([Firefox Bug 1155761](https://bugzil.la/1155761)).
- Die [Notifications API](/de/docs/Web/API/Notifications_API) ist jetzt in [Web-Workern](/de/docs/Web/API/Web_Workers_API) verfügbar ([Firefox Bug 916893](https://bugzil.la/916893)).
- `DOMRequest` und `DOMCursor` sind jetzt in [Web-Workern](/de/docs/Web/API/Web_Workers_API) verfügbar ([Firefox Bug 1167650](https://bugzil.la/1167650)).
- Die [CSS Font Loading API](/de/docs/Web/API/CSS_Font_Loading_API) wurde vollständig implementiert und ist jetzt standardmäßig aktiviert ([Firefox Bug 1149381](https://bugzil.la/1149381)).
- Gemeinsame Worker können nun nicht mehr zwischen privaten (d.h. in einem privaten Fenster surfen) und nicht-privaten Dokumenten geteilt werden (siehe [Firefox Bug 1177621](https://bugzil.la/1177621)).
- Die [`URL.searchParams`](/de/docs/Web/API/URL/searchParams) Eigenschaft ist jetzt schreibgeschützt ([Firefox Bug 1174731](https://bugzil.la/1174731)).
- Die [`HTMLAnchorElement.hash`](/de/docs/Web/API/HTMLAnchorElement/hash) Eigenschaft dekodiert nicht länger das URL-Fragment ([Firefox Bug 1093611](https://bugzil.la/1093611)).

### MathML

#### Neue Standard- und Fallback-Schriftartenverwaltung

Mathematische Formeln benötigen spezielle Schriftarten. Bis jetzt wurden diese Schriftarten im `mathml.css` User-Agent-Stylesheet (welches die Schriftfamilie am {{MathMLElement("math")}} Tag festsetzt) und in der Option `font.mathfont-family` (welche die Fallback-Schriftarten für dehnbare und große Operatoren festlegt) festgelegt. Firefox 41 führt eine interne `x-math` Sprache ein, die automatisch am `<math>` Tag gesetzt wird, sowie entsprechende Einstellungsoptionen (z.B., `font.name.serif.x-math`). Das User-Agent-Stylesheet setzt nun die Schriftfamilie auf Serif am `<math>` Tag, und die Option `font.mathfont-family` wird durch `font.name.serif.x-math` ersetzt. Alle Plattformen verwenden jetzt im Wesentlichen die gleiche Liste von Fallback-Schriftarten, wobei "Latin Modern Math" als erste gewählt wird. Die Standard/Fallback-Schriftarten können im standardmäßigen Sprachschriftpräferenzmenü konfiguriert werden. Für weitere Details siehe [Firefox Bug 947654](https://bugzil.la/947654) und [Firefox Bug 1160456](https://bugzil.la/1160456).

### SVG

- Webseiten-Icons (Favicons, Verknüpfungsicons) unterstützen nun SVG ([Firefox Bug 366324](https://bugzil.la/366324)).

### Audio/Video

- Die `media.autoplay.enabled` Einstellung gilt jetzt auch für nicht vertraute [`HTMLMediaElement.play()`](/de/docs/Web/API/HTMLMediaElement/play) Aufrufe, also Aufrufe von nicht durch Benutzer aktiviertem Skript ([Firefox Bug 659285](https://bugzil.la/659285)).

## Netzwerke

- Der `X-Content-Duration` Header wird nicht mehr unterstützt ([Firefox Bug 1160695](https://bugzil.la/1160695)).
- Entwurfsversionen des HTTP/2-Protokolls werden nicht mehr unterstützt ([Firefox Bug 1132357](https://bugzil.la/1132357)).

## Sicherheit

- Die [CSP](/de/docs/Web/HTTP/Guides/CSP) 1.1 `manifest-src` [Direktive](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy) wird jetzt unterstützt ([Firefox Bug 1089255](https://bugzil.la/1089255)).
- Frühere Versionen von Firefox haben fälschlicherweise erwartet, dass der Wert `origin-when-cross-origin` der [Content Security Policy](/de/docs/Web/HTTP/Guides/CSP) [referrer](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy#referrer) Direktive als `origin-when-crossorigin` geschrieben wird. Dies wurde korrigiert, um das fehlende Bindestrichzeichen zu enthalten.

## Änderungen für Add-on- und Mozilla-Entwickler

### XUL

_Keine Änderungen._

### JavaScript-Code-Module

_Keine Änderungen._

### XPCOM

### Schnittstellen

_Keine Änderungen._

### Sonstiges

- Eine neue, interne und nur in Chrome-Contexts verfügbare API zum Rendern des Root-Widgets eines Fensters in eine {{HTMLElement("canvas")}} wurde hinzugefügt: `CanvasRenderingContext2D.drawWidgetAsOnScreen()`. Diese API verwendet das Betriebssystem, um das Widget auf dem Bildschirm zu schnappen. Für mehr Details siehe [Firefox Bug 1167477](https://bugzil.la/1167477).

## Ältere Versionen

{{Firefox_for_developers}}
