---
title: Firefox 41 für Entwickler
short-title: Firefox 41
slug: Mozilla/Firefox/Releases/41
l10n:
  sourceCommit: bdb97b3e01499ce52f02caa3f51d6dd245a48782
---

[Um die neuesten Entwicklerfunktionen von Firefox zu testen, installieren Sie die Firefox Developer Edition](https://www.firefox.com/en-US/channel/desktop/developer/). Firefox 41 wurde am 22. September 2015 veröffentlicht. Dieser Artikel listet wichtige Änderungen auf, die nicht nur für Webentwickler nützlich sind, sondern auch für Firefox- und Gecko-Entwickler sowie für Add-on-Entwickler.

## Änderungen für Webentwickler

### Entwickler-Tools

Highlights:

- [Einen Screenshot eines DOM-Knotens erstellen](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/examine_and_edit_html/index.html#element-popup-menu)
- [Als HAR speichern/kopieren](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/index.html#copysave-all-as-har)
- ["Regel hinzufügen"-Schaltfläche in der Regelansicht](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/examine_and_edit_css/index.html#add-rules)
- [Quelltext in einem Tab anzeigen](https://firefox-source-docs.mozilla.org/devtools-user/view_source/index.html) (standardmäßig deaktiviert)
- [Mehr Optionen zum Kopieren von CSS-Regeln](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/examine_and_edit_css/index.html#copy-rules)
- [Bild als data: URL in der Regelansicht kopieren](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/view_background_images/index.html)
- Neuer Befehl in _GCLI_ zur Anzeige von CSP-Informationen hinzugefügt

[Alle zwischen Firefox 40 und Firefox 41 behobenen Entwicklerwerkzeuge-Fehler](https://bugzilla.mozilla.org/buglist.cgi?resolution=FIXED&classification=Client%20Software&chfieldto=2015-06-29&query_format=advanced&chfield=resolution&chfieldfrom=2015-05-11&chfieldvalue=FIXED&bug_status=RESOLVED&bug_status=VERIFIED&component=Developer%20Tools&component=Developer%20Tools%3A%203D%20View&component=Developer%20Tools%3A%20Canvas%20Debugger&component=Developer%20Tools%3A%20Console&component=Developer%20Tools%3A%20Debugger&component=Developer%20Tools%3A%20Framework&component=Developer%20Tools%3A%20Graphic%20Commandline%20and%20Toolbar&component=Developer%20Tools%3A%20Inspector&component=Developer%20Tools%3A%20Memory&component=Developer%20Tools%3A%20Netmonitor&component=Developer%20Tools%3A%20Object%20Inspector&component=Developer%20Tools%3A%20Performance%20Tools%20%28Profiler%2FTimeline%29&component=Developer%20Tools%3A%20Responsive%20Mode&component=Developer%20Tools%3A%20Scratchpad&component=Developer%20Tools%3A%20Source%20Editor&component=Developer%20Tools%3A%20Storage%20Inspector&component=Developer%20Tools%3A%20Style%20Editor&component=Developer%20Tools%3A%20User%20Stories&component=Developer%20Tools%3A%20Web%20Audio%20Editor&component=Developer%20Tools%3A%20WebGL%20Shader%20Editor&component=Developer%20Tools%3A%20WebIDE&product=Firefox&list_id=12283503): Beachten Sie, dass viele dieser Fehler, insbesondere diejenigen, die mit den Performance-Tools zusammenhängen, auf Firefox 40 aktualisiert wurden.

### CSS

- Die Unterstützung für vertikale Skriptlayouts wurde standardmäßig aktiviert ([Firefox Bug 1138384](https://bugzil.la/1138384)). Das bedeutet, dass die folgenden CSS-Eigenschaften jetzt verfügbar sind:
  - Auswahl der Schreibrichtung: {{cssxref("writing-mode")}}.
  - Ausrichtung der Zeichen kontrollieren: {{cssxref("text-orientation")}}.
  - Richtungsunabhängige Entsprechungen von {{cssxref("width")}} und {{cssxref("height")}}: {{cssxref("block-size")}} und {{cssxref("inline-size")}}.
  - Richtungsunabhängige Entsprechungen von {{cssxref("min-width")}} und {{cssxref("min-height")}}: {{cssxref("min-block-size")}} und {{cssxref("min-inline-size")}}.
  - Richtungsunabhängige Entsprechungen von {{cssxref("max-width")}} und {{cssxref("max-height")}}: {{cssxref("max-block-size")}} und {{cssxref("max-block-size")}}.
  - Richtungsunabhängige Entsprechungen von {{cssxref("margin-top")}}, {{cssxref("margin-right")}}, {{cssxref("margin-bottom")}} und {{cssxref("margin-left")}}: {{cssxref("margin-block-start")}}, {{cssxref("margin-block-end")}}, {{cssxref("margin-inline-start")}} und {{cssxref("margin-inline-end")}}.
  - Richtungsunabhängige Entsprechungen von {{cssxref("padding-top")}}, {{cssxref("padding-right")}}, {{cssxref("padding-bottom")}} und {{cssxref("padding-left")}}: {{cssxref("padding-block-start")}}, {{cssxref("padding-block-end")}}, {{cssxref("padding-inline-start")}} und {{cssxref("padding-inline-end")}}.
  - Richtungsunabhängige Entsprechungen von {{cssxref("border-top")}}, {{cssxref("border-right")}}, {{cssxref("border-bottom")}} und {{cssxref("border-left")}} und deren Langformen für Breite, Stil und Farbe: {{cssxref("border-block-start")}}, {{cssxref("border-block-start-width")}}, {{cssxref("border-block-start-style")}}, {{cssxref("border-block-start-color")}}, {{cssxref("border-block-end")}}, {{cssxref("border-block-end-width")}}, {{cssxref("border-block-end-style")}}, {{cssxref("border-block-end-color")}}, {{cssxref("border-inline-start")}}, {{cssxref("border-inline-start-width")}}, {{cssxref("border-inline-start-style")}}, {{cssxref("border-inline-start-color")}}, {{cssxref("border-inline-end")}}, {{cssxref("border-inline-end-width")}}, {{cssxref("border-inline-end-style")}} und {{cssxref("border-inline-end-color")}}.
  - Richtungsunabhängige Entsprechungen von {{cssxref("top")}}, {{cssxref("right")}}, {{cssxref("bottom")}} und {{cssxref("left")}}: `offset-block-start`, `offset-block-end`, `offset-inline-start` und `offset-inline-end`.

- Unterstützung für die Eigenschaft {{cssxref("transform-origin")}} in SVG und Implementierung der Eigenschaft {{cssxref("transform-box")}} ([Firefox Bug 923193](https://bugzil.la/923193)).

### HTML

- {{HTMLElement("a")}} ohne `href`-Attribut wird nicht mehr als interaktiver Inhalt klassifiziert. Wird es innerhalb eines {{HTMLElement("label")}} angeklickt, aktiviert es den gekennzeichneten Inhalt ([Firefox Bug 1167816](https://bugzil.la/1167816)).
- SVG-Icons werden jetzt für Website-Icons, also Favicons und Shortcut-Icons, unterstützt ([Firefox Bug 366324](https://bugzil.la/366324)).
- Das Attribut [`crossorigin`](/de/docs/Web/HTML/Reference/Elements/link#crossorigin) wird jetzt für [\<link rel='preconnect'>](/de/docs/Web/HTML/Reference/Elements/link) unterstützt ([Firefox Bug 1174152](https://bugzil.la/1174152)).
- Das `picture`-Element reagiert nicht auf Größenänderungen/Viewport-Änderungen ([Firefox Bug 1135812](https://bugzil.la/1135812)).

### JavaScript

- `Date.prototype` ist jetzt ein gewöhnliches Objekt und keine {{jsxref("Date")}}-Instanz mehr ([Firefox Bug 861219](https://bugzil.la/861219)).
- {{jsxref("Date.prototype.toString")}} ist jetzt eine generische Methode ([Firefox Bug 861219](https://bugzil.la/861219)).
- {{jsxref("Symbol.species")}} wurde hinzugefügt ([Firefox Bug 1131043](https://bugzil.la/1131043)).
- Getter für [`Map[Symbol.species]`](/de/docs/Web/JavaScript/Reference/Global_Objects/Map/Symbol.species) und [`Set[Symbol.species]`](/de/docs/Web/JavaScript/Reference/Global_Objects/Set/Symbol.species) wurden hinzugefügt ([Firefox Bug 1131043](https://bugzil.la/1131043)).
- Die nicht-standardmäßige Unterstützung für [let-Ausdrücke](/de/docs/Web/JavaScript/Reference/Deprecated_and_obsolete_features#statements_2) wurde entfernt ([Firefox Bug 1023609](https://bugzil.la/1023609)).
- {{jsxref("Functions/Default_parameters", "Destrukturierte Parameter mit Standardwertzuweisung", "#Destructured_parameter_with_default_value_assignment", 1)}} werden jetzt unterstützt ([Firefox Bug 1018628](https://bugzil.la/1018628)).
- Gemäß ES2015 sind geschweifte Klammern für [Methodendefinitionen](/de/docs/Web/JavaScript/Reference/Functions/Method_definitions) erforderlich. Die Syntax ohne sie wird künftig fehlschlagen ([Firefox Bug 1150855](https://bugzil.la/1150855)).
- [Methodendefinitionen](/de/docs/Web/JavaScript/Reference/Functions/Method_definitions) (außer Generator-Methoden) sind nicht mehr instanziierbar ([Firefox Bug 1059908](https://bugzil.la/1059908) und [Firefox Bug 1166950](https://bugzil.la/1166950)).
- Im Rahmen der ES2015-Spezifikationskonformität gelten geklammerte [Destrukturierungsmuster](/de/docs/Web/JavaScript/Reference/Operators/Destructuring), wie `([a, b]) = [1, 2]` oder `({a, b}) = { a: 1, b: 2 }`, jetzt als ungültig und werfen einen {{jsxref("SyntaxError")}} aus. Weitere Details finden Sie in [Jeff Waldens Blogbeitrag](https://whereswalden.com/2015/06/20/new-changes-to-make-spidermonkeys-and-firefoxs-parsing-of-destructuring-patterns-more-spec-compliant/).
- Die Syntax [`new.target`](/de/docs/Web/JavaScript/Reference/Operators/new.target) wurde hinzugefügt ([Firefox Bug 1141865](https://bugzil.la/1141865)).

### Schnittstellen/APIs/DOM

#### HTML Editing API

- Die Befehlsbearbeitung für Ausschneiden, Kopieren und Einfügen wurde überarbeitet und erlaubt jetzt das programmatische Kopieren und Ausschneiden von JS für Webinhalte:
  - Mit dem Argument `'paste'` gibt [`Document.queryCommandSupported()`](/de/docs/Web/API/Document/queryCommandSupported) nun `false` zurück, wenn unzureichende Berechtigungen vorliegen, um die Aktion tatsächlich auszuführen ([Firefox Bug 1161721](https://bugzil.la/1161721)).
  - Mit den Argumenten `'cut'` oder `'copy'` gibt [`Document.queryCommandSupported()`](/de/docs/Web/API/Document/queryCommandSupported) nun `true` zurück, wenn es im Kontext von benutzerinitiiertem oder privilegiertem Code aufgerufen wird ([Firefox Bug 1162952](https://bugzil.la/1162952)).
  - Mit den Argumenten `'cut'` oder `'copy'` funktioniert [`Document.execCommand()`](/de/docs/Web/API/Document/execCommand) nun, aber nur im Kontext von benutzerinitiiertem oder privilegiertem Code ([Firefox Bug 1012662](https://bugzil.la/1012662)).
  - Anstatt eine Ausnahme zu werfen, wenn der Befehl nicht unterstützt oder aktiviert ist, verarbeitet [`Document.execCommand()`](/de/docs/Web/API/Document/execCommand) Fehler intern ([Firefox Bug 1027560](https://bugzil.la/1027560)).

#### Ereignisse

- Die nicht-standardisierte Methode `initCloseEvent()` des [`CloseEvent`](/de/docs/Web/API/CloseEvent) und die Möglichkeit, ein [`CloseEvent`](/de/docs/Web/API/CloseEvent) mit der Methode [`document.createEvent('CloseEvent')`](/de/docs/Web/API/Document/createEvent) zu erstellen, wurden entfernt; verwenden Sie stattdessen den Standard-Konstruktor [`CloseEvent()`](/de/docs/Web/API/CloseEvent/CloseEvent) ([Firefox Bug 1161950](https://bugzil.la/1161950)).
- Auf Desktop ist [`PointerEvent`](/de/docs/Web/API/PointerEvent) jetzt standardmäßig in Nightly aktiviert; es ist nicht in Developer Edition, Beta oder Release aktiviert und wird es für mindestens einige Versionen nicht sein ([Firefox Bug 1166347](https://bugzil.la/1166347)).
- Die nicht-präfiksierte Version von [`MouseEvent.movementX`](/de/docs/Web/API/MouseEvent/movementX) und [`MouseEvent.movementY`](/de/docs/Web/API/MouseEvent/movementY) wurde hinzugefügt; die präfiksierte Version wird veraltet und wird in Zukunft entfernt ([Firefox Bug 1164981](https://bugzil.la/1164981)).

#### Web Crypto

- [`SubtleCrypto.importKey()`](/de/docs/Web/API/SubtleCrypto/importKey) und [`SubtleCrypto.exportKey()`](/de/docs/Web/API/SubtleCrypto/exportKey) unterstützen jetzt `ECDH`-Schlüssel ([Firefox Bug 1050175](https://bugzil.la/1050175)).

#### Canvas-API

- [`HTMLCanvasElement.captureStream()`](/de/docs/Web/API/HTMLCanvasElement/captureStream) und `CanvasCaptureMediaStream` wurden hinzugefügt und ermöglichen das Echtzeit-Streaming der Anzeige eines {{HTMLElement("canvas")}} ([Firefox Bug 1032848](https://bugzil.la/1032848)).
- [`MediaStream.id`](/de/docs/Web/API/MediaStream/id) gibt jetzt die eindeutige ID eines Streams zurück ([Firefox Bug 1089798](https://bugzil.la/1089798)).
- Der Initialwert von [`CanvasRenderingContext2D.filter`](/de/docs/Web/API/CanvasRenderingContext2D/filter) ist nun korrekt auf `none` gesetzt ([Firefox Bug 1163124](https://bugzil.la/1163124)).

#### Service Workers

- Verbesserung unserer experimentellen [Service Worker](/de/docs/Web/API/Service_Worker_API)-Implementierung:
  - [`ServiceWorkerGlobalScope.skipWaiting()`](/de/docs/Web/API/ServiceWorkerGlobalScope/skipWaiting) wurde implementiert ([Firefox Bug 1131352](https://bugzil.la/1131352)).
  - [`Clients.claim()`](/de/docs/Web/API/Clients/claim) wurde hinzugefügt ([Firefox Bug 1130684](https://bugzil.la/1130684)).
  - Die anderen funktionalen Ereignisse der Service Workers erben jetzt von [`ExtendableEvent`](/de/docs/Web/API/ExtendableEvent) und haben somit Zugriff auf die Methode [`waitUntil()`](/de/docs/Web/API/ExtendableEvent/waitUntil) ([Firefox Bug 1160527](https://bugzil.la/1160527)).

- Die Schnittstellen [`CacheStorage`](/de/docs/Web/API/CacheStorage) und [`Cache`](/de/docs/Web/API/Cache) werden jetzt unterstützt ([Firefox Bug 1110144](https://bugzil.la/1110144)).

#### WebGL

- Das `failIfMajorPerformanceCaveat` WebGL-Kontextattribut wurde hinzugefügt und kann beim Erstellen eines WebGL-Kontextes mit [`HTMLCanvasElement.getContext()`](/de/docs/Web/API/HTMLCanvasElement/getContext) angegeben werden, um zu kennzeichnen, ob ein Kontext nicht erstellt werden soll, wenn die Systemleistung niedrig ist ([Firefox Bug 1164970](https://bugzil.la/1164970)).

#### WebRTC

- Firefox bietet keinen Standard-STUN-Server mehr an, der verwendet werden kann, wenn keiner beim Erstellen einer neuen [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) angegeben wird. Es muss einer angegeben werden, um eine WebRTC-Verbindung erfolgreich herzustellen.

#### Verschiedenes

- Auf OS X und Windows ändert sich [`Navigator.onLine`](/de/docs/Web/API/Navigator/onLine) jetzt in Bezug auf die Netzwerkkonnektivität (es gab vorher immer `true` zurück, es sei denn, der "Offline arbeiten"-Modus war ausgewählt) ([Firefox Bug 654579](https://bugzil.la/654579)).
- [`MessagePort`](/de/docs/Web/API/MessagePort) und [`MessageChannel`](/de/docs/Web/API/MessageChannel) sind jetzt in [Web Workern](/de/docs/Web/API/Web_Workers_API) verfügbar und in allen Kontexten standardmäßig aktiviert ([Firefox Bug 952139](https://bugzil.la/952139) und [Firefox Bug 911972](https://bugzil.la/911972)).
- Die User Timing API ist jetzt in [Web Workern](/de/docs/Web/API/Web_Workers_API) verfügbar ([Firefox Bug 1155761](https://bugzil.la/1155761)).
- Die [Notifications API](/de/docs/Web/API/Notifications_API) ist jetzt in [Web Workern](/de/docs/Web/API/Web_Workers_API) verfügbar ([Firefox Bug 916893](https://bugzil.la/916893)).
- `DOMRequest` und `DOMCursor` sind jetzt in [Web Workern](/de/docs/Web/API/Web_Workers_API) verfügbar ([Firefox Bug 1167650](https://bugzil.la/1167650)).
- Die [CSS Font Loading API](/de/docs/Web/API/CSS_Font_Loading_API) wurde vollständig implementiert und ist jetzt standardmäßig aktiviert ([Firefox Bug 1149381](https://bugzil.la/1149381)).
- Geteilte Worker können nicht mehr zwischen privaten (z. B. in einem privaten Fenster surfen) und nicht-privaten Dokumenten geteilt werden (siehe [Firefox Bug 1177621](https://bugzil.la/1177621)).
- Die Eigenschaft [`URL.searchParams`](/de/docs/Web/API/URL/searchParams) ist jetzt schreibgeschützt ([Firefox Bug 1174731](https://bugzil.la/1174731)).
- Die Eigenschaft [`HTMLAnchorElement.hash`](/de/docs/Web/API/HTMLAnchorElement/hash) dekodiert keine URL-Fragmente mehr ([Firefox Bug 1093611](https://bugzil.la/1093611)).

### MathML

#### Neue Standard- und Fallback-Schriftartenverwaltung

Mathematische Formeln erfordern spezielle Schriftarten. Bisher waren diese Schriftarten im `mathml.css` Benutzeragenten-Stylesheet (das die Schriftart-Familie auf dem {{MathMLElement("math")}}-Tag setzt) und in der Präferenzoption `font.mathfont-family` (die die Fallback-Schriftarten für Streck- und große Operatoren festlegt) hartkodiert. Firefox 41 führt eine interne `x-math`-Sprache ein, die automatisch auf dem `<math>`-Tag gesetzt wird, sowie entsprechende Präferenzoptionen (z. B. `font.name.serif.x-math`). Das Benutzeragenten-Stylesheet setzt nun die Schriftart-Familie auf Serif auf dem `<math>`-Tag und die Präferenzoption `font.mathfont-family` wird durch `font.name.serif.x-math` ersetzt. Alle Plattformen verwenden nun im Wesentlichen dieselbe Liste von Fallback-Schriftarten, wobei "Latin Modern Math" als erste kommt. Die Standard-/Fallback-Schriftarten können über das Standard-Schriftartpräferenzmenü pro Sprache konfiguriert werden. Weitere Details finden Sie unter [Firefox Bug 947654](https://bugzil.la/947654) und [Firefox Bug 1160456](https://bugzil.la/1160456).

### SVG

- Website-Icons (Favicons, Shortcut-Icons) unterstützen jetzt SVG ([Firefox Bug 366324](https://bugzil.la/366324)).

### Audio/Video

- Die Präferenz `media.autoplay.enabled` gilt jetzt auch für nicht vertrauenswürdige Aufrufe der Methode [`HTMLMediaElement.play()`](/de/docs/Web/API/HTMLMediaElement/play), d.h. für Aufrufe von nicht benutzeraktivierten Skripten ([Firefox Bug 659285](https://bugzil.la/659285)).

## Netzwerk

- Der `X-Content-Duration`-Header wird nicht mehr unterstützt ([Firefox Bug 1160695](https://bugzil.la/1160695)).
- Entwürfe des HTTP/2-Protokolls werden nicht mehr unterstützt ([Firefox Bug 1132357](https://bugzil.la/1132357)).

## Sicherheit

- Die [CSP](/de/docs/Web/HTTP/Guides/CSP) 1.1 `manifest-src` [Direktive](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy) wird jetzt unterstützt ([Firefox Bug 1089255](https://bugzil.la/1089255)).
- Frühere Versionen von Firefox erwarteten fälschlicherweise, dass der Wert `origin-when-cross-origin` der Referrer-Direktive der [Content Security Policy](/de/docs/Web/HTTP/Guides/CSP) als `origin-when-crossorigin` buchstabiert wird. Dies wurde korrigiert, um das fehlende Bindestrichzeichen einzuschließen.

## Änderungen für Add-on- und Mozilla-Entwickler

### XUL

_Keine Änderung._

### JavaScript-Code-Module

_Keine Änderung._

### XPCOM

### Schnittstellen

_Keine Änderung._

### Sonstige

- Eine neue, interne und nur für Chrome-Kontexte zugängliche API zum Rendern des Root-Widgets eines Fensters in ein {{HTMLElement("canvas")}} wurde hinzugefügt: `CanvasRenderingContext2D.drawWidgetAsOnScreen()`. Diese API verwendet das Betriebssystem, um das Widget auf dem Bildschirm zu erfassen. Weitere Details finden Sie unter [Firefox Bug 1167477](https://bugzil.la/1167477).
