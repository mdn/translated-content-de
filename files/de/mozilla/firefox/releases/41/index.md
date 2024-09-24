---
title: Firefox 41 für Entwickler
slug: Mozilla/Firefox/Releases/41
l10n:
  sourceCommit: d7143e171b5f18fb37a686a7d4947db417fd74f3
---

{{FirefoxSidebar}}

[Um die neuesten Entwicklertools von Firefox zu testen, installieren Sie Firefox Developer Edition](https://www.mozilla.org/en-US/firefox/developer/). Firefox 41 wurde am 22. September 2015 veröffentlicht. Dieser Artikel listet wesentliche Änderungen auf, die nicht nur für Webentwickler, sondern auch für Firefox- und Gecko-Entwickler sowie Add-on-Entwickler nützlich sind.

## Änderungen für Webentwickler

### Entwicklertools

Highlights:

- [Machen Sie einen Screenshot eines DOM-Knotens](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/examine_and_edit_html/index.html#element-popup-menu)
- [Als HAR kopieren/speichern](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/index.html#copysave-all-as-har)
- ["Add Rule"-Button in der Ansichtsregel](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/examine_and_edit_css/index.html#add-rules)
- [Quelltext in einem Tab anzeigen](https://firefox-source-docs.mozilla.org/devtools-user/view_source/index.html) (Standardmäßig deaktiviert)
- [Mehr Optionen zum Kopieren von CSS-Regeln](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/examine_and_edit_css/index.html#copy-rules)
- [Bild als Daten-URL in der Ansichtsregel kopieren](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/view_background_images/index.html)
- Befehl zu _GCLI_ hinzugefügt, um CSP-Informationen anzuzeigen

[Alle Devtools-Bugs, die zwischen Firefox 40 und Firefox 41 behoben wurden](https://bugzilla.mozilla.org/buglist.cgi?resolution=FIXED&classification=Client%20Software&chfieldto=2015-06-29&query_format=advanced&chfield=resolution&chfieldfrom=2015-05-11&chfieldvalue=FIXED&bug_status=RESOLVED&bug_status=VERIFIED&component=Developer%20Tools&component=Developer%20Tools%3A%203D%20View&component=Developer%20Tools%3A%20Canvas%20Debugger&component=Developer%20Tools%3A%20Console&component=Developer%20Tools%3A%20Debugger&component=Developer%20Tools%3A%20Framework&component=Developer%20Tools%3A%20Graphic%20Commandline%20and%20Toolbar&component=Developer%20Tools%3A%20Inspector&component=Developer%20Tools%3A%20Memory&component=Developer%20Tools%3A%20Netmonitor&component=Developer%20Tools%3A%20Object%20Inspector&component=Developer%20Tools%3A%20Performance%20Tools%20%28Profiler%2FTimeline%29&component=Developer%20Tools%3A%20Responsive%20Mode&component=Developer%20Tools%3A%20Scratchpad&component=Developer%20Tools%3A%20Source%20Editor&component=Developer%20Tools%3A%20Storage%20Inspector&component=Developer%20Tools%3A%20Style%20Editor&component=Developer%20Tools%3A%20User%20Stories&component=Developer%20Tools%3A%20Web%20Audio%20Editor&component=Developer%20Tools%3A%20WebGL%20Shader%20Editor&component=Developer%20Tools%3A%20WebIDE&product=Firefox&list_id=12283503): Beachten Sie, dass viele dieser Bugs, insbesondere diejenigen, die sich auf die Performance-Tools beziehen, auf Firefox 40 übertragen wurden.

### CSS

- Unterstützung für die Gestaltung vertikaler Skripte wurde standardmäßig aktiviert ([Firefox-Bug 1138384](https://bugzil.la/1138384)). Das bedeutet, dass die folgenden CSS-Eigenschaften nun verfügbar sind:

  - Auswahl der Schreibrichtung: {{cssxref("writing-mode")}}.
  - Steuerung der Zeichenorientierung: {{cssxref("text-orientation")}}.
  - Richtungsunabhängige Äquivalente von {{cssxref("width")}} und {{cssxref("height")}}: {{cssxref("block-size")}} und {{cssxref("inline-size")}}.
  - Richtungsunabhängige Äquivalente von {{cssxref("min-width")}} und {{cssxref("min-height")}}: {{cssxref("min-block-size")}} und {{cssxref("min-inline-size")}}.
  - Richtungsunabhängige Äquivalente von {{cssxref("max-width")}} und {{cssxref("max-height")}}: {{cssxref("max-block-size")}} und {{cssxref("max-block-size")}}.
  - Richtungsunabhängige Äquivalente von {{cssxref("margin-top")}}, {{cssxref("margin-right")}}, {{cssxref("margin-bottom")}} und {{cssxref("margin-left")}}: {{cssxref("margin-block-start")}}, {{cssxref("margin-block-end")}}, {{cssxref("margin-inline-start")}} und {{cssxref("margin-inline-end")}}.
  - Richtungsunabhängige Äquivalente von {{cssxref("padding-top")}}, {{cssxref("padding-right")}}, {{cssxref("padding-bottom")}} und {{cssxref("padding-left")}}: {{cssxref("padding-block-start")}}, {{cssxref("padding-block-end")}}, {{cssxref("padding-inline-start")}} und {{cssxref("padding-inline-end")}}.
  - Richtungsunabhängige Äquivalente von {{cssxref("border-top")}}, {{cssxref("border-right")}}, {{cssxref("border-bottom")}} und {{cssxref("border-left")}} und deren Langversionen für Breite, Stil und Farbe: {{cssxref("border-block-start")}}, {{cssxref("border-block-start-width")}}, {{cssxref("border-block-start-style")}}, {{cssxref("border-block-start-color")}}, {{cssxref("border-block-end")}}, {{cssxref("border-block-end-width")}}, {{cssxref("border-block-end-style")}}, {{cssxref("border-block-end-color")}}, {{cssxref("border-inline-start")}}, {{cssxref("border-inline-start-width")}}, {{cssxref("border-inline-start-style")}}, {{cssxref("border-inline-start-color")}}, {{cssxref("border-inline-end")}}, {{cssxref("border-inline-end-width")}}, {{cssxref("border-inline-end-style")}} und {{cssxref("border-inline-end-color")}}.
  - Richtungsunabhängige Äquivalente von {{cssxref("top")}}, {{cssxref("right")}}, {{cssxref("bottom")}} und {{cssxref("left")}}: `offset-block-start`, `offset-block-end`, `offset-inline-start` und `offset-inline-end`.

- Unterstützung für die {{cssxref("transform-origin")}}-Eigenschaft in SVG und Implementierung der {{cssxref("transform-box")}}-Eigenschaft ([Firefox-Bug 923193](https://bugzil.la/923193)).

### HTML

- {{HTMLElement("a")}} ohne ein `href`-Attribut wird nicht mehr als interaktiver Inhalt klassifiziert. Ein Klick innerhalb von {{HTMLElement("label")}} aktiviert jetzt den beschrifteten Inhalt ([Firefox-Bug 1167816](https://bugzil.la/1167816)).
- SVG-Symbole werden nun für Website-Symbole unterstützt, das heißt Favicons und Shortcut-Symbole ([Firefox-Bug 366324](https://bugzil.la/366324)).
- Das [`crossorigin`](/de/docs/Web/HTML/Element/link#crossorigin)-Attribut wird jetzt für [\<link rel='preconnect'>](/de/docs/Web/HTML/Element/link) unterstützt ([Firefox-Bug 1174152](https://bugzil.la/1174152)).
- Das `picture`-Element reagiert nicht auf Größenänderungen/Viewport-Änderungen ([Firefox-Bug 1135812](https://bugzil.la/1135812)).

### JavaScript

- `Date.prototype` ist jetzt ein normales Objekt, kein {{jsxref("Date")}}-Instanz mehr ([Firefox-Bug 861219](https://bugzil.la/861219)).
- {{jsxref("Date.prototype.toString")}} ist jetzt eine generische Methode ([Firefox-Bug 861219](https://bugzil.la/861219)).
- {{jsxref("Symbol.species")}} wurde hinzugefügt ([Firefox-Bug 1131043](https://bugzil.la/1131043)).
- {{jsxref("Map.@@species", "Map[@@species]")}} und {{jsxref("Set.@@species", "Set[@@species]")}} Getter wurden hinzugefügt ([Firefox-Bug 1131043](https://bugzil.la/1131043)).
- Nicht-standardisierte Unterstützung für {{jsxref("Statements/let", "let expression", "#let_expressions", 1)}} wurde entfernt ([Firefox-Bug 1023609](https://bugzil.la/1023609)).
- {{jsxref("Functions/Default_parameters", "Destructured parameters with default value assignment", "#Destructured_parameter_with_default_value_assignment", 1)}} werden jetzt unterstützt ([Firefox-Bug 1018628](https://bugzil.la/1018628)).
- Gemäß ES2015 sind geschweifte Klammern für [Methodendefinitionen](/de/docs/Web/JavaScript/Reference/Functions/Method_definitions) erforderlich. Syntax ohne sie wird nun fehlschlagen ([Firefox-Bug 1150855](https://bugzil.la/1150855)).
- [Methodendefinitionen](/de/docs/Web/JavaScript/Reference/Functions/Method_definitions) (außer für Generatormethoden) sind nicht mehr konstruierbar ([Firefox-Bug 1059908](https://bugzil.la/1059908) und [Firefox-Bug 1166950](https://bugzil.la/1166950)).
- Als Teil der ES2015-Spezifikationskonformität werden nun geklammerte [Destrukturierungsmuster](/de/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment), wie `([a, b]) = [1, 2]` oder `({a, b}) = { a: 1, b: 2 }`, als ungültig betrachtet und werfen ein {{jsxref("SyntaxError")}}. Weitere Details finden Sie in [Jeff Waldens Blogbeitrag](https://whereswalden.com/2015/06/20/new-changes-to-make-spidermonkeys-and-firefoxs-parsing-of-destructuring-patterns-more-spec-compliant/).
- Die [`new.target`](/de/docs/Web/JavaScript/Reference/Operators/new.target)-Syntax wurde hinzugefügt ([Firefox-Bug 1141865](https://bugzil.la/1141865)).

### Schnittstellen/APIs/DOM

#### HTML Editing API

- Die Handhabung von Ausschneide-, Kopier- und Einfügebefehlen wurde überarbeitet und ermöglicht jetzt das programmgesteuerte Kopieren und Ausschneiden von JS für Webinhalte:

  - Mit dem Argument `'paste'`-Befehl gibt {{domxref("Document.queryCommandSupported()")}} nun `false` zurück, wenn nicht ausreichend Berechtigungen vorhanden sind, um die Aktion tatsächlich auszuführen ([Firefox-Bug 1161721](https://bugzil.la/1161721)).
  - Mit dem Argument `'cut'` oder `'copy'`-Befehl gibt {{domxref("Document.queryCommandSupported()")}} nun `true` zurück, wenn es im Kontext von benutzerinitiiertem oder privilegiertem Code aufgerufen wird ([Firefox-Bug 1162952](https://bugzil.la/1162952)).
  - Mit dem Argument `'cut'` oder `'copy'`-Befehl funktioniert {{domxref("Document.execCommand()")}} jetzt, jedoch nur im Kontext von benutzerinitiiertem oder privilegiertem Code ([Firefox-Bug 1012662](https://bugzil.la/1012662)).
  - Anstatt eine Ausnahme auszulösen, wenn der Befehl nicht unterstützt oder aktiviert ist, gibt {{domxref("Document.execCommand()")}} jetzt einfach nichts zurück ([Firefox-Bug 1027560](https://bugzil.la/1027560)).

#### Ereignisse

- Die nicht standardisierte Methode `initCloseEvent()` des {{domxref("CloseEvent")}}-Ereignisses und die Fähigkeit, ein {{domxref("CloseEvent")}} mit der {{domxref("Document/createEvent", "document.createEvent('CloseEvent')")}}-Methode zu erstellen, wurde entfernt; verwenden Sie stattdessen den Standardkonstruktor {{domxref("CloseEvent.CloseEvent", "CloseEvent()")}} ([Firefox-Bug 1161950](https://bugzil.la/1161950)).
- Auf dem Desktop ist {{domxref("PointerEvent")}} jetzt standardmäßig in Nightly aktiviert; es ist nicht in der Developer Edition, Beta oder Release aktiviert und wird es für mindestens einige Versionen nicht sein ([Firefox-Bug 1166347](https://bugzil.la/1166347)).
- Die unpräsentierte Version von {{domxref("MouseEvent.movementX")}} und {{domxref("MouseEvent.movementY")}} wurde hinzugefügt; die präsentierten Versionen sind veraltet und werden irgendwann entfernt ([Firefox-Bug 1164981](https://bugzil.la/1164981)).

#### Web Crypto

- {{domxref("SubtleCrypto.importKey()")}} und {{domxref("SubtleCrypto.exportKey()")}} unterstützen jetzt `ECDH`-Schlüssel ([Firefox-Bug 1050175](https://bugzil.la/1050175)).

#### Canvas API

- {{domxref("HTMLCanvasElement.captureStream()")}} und `CanvasCaptureMediaStream` wurden hinzugefügt und ermöglichen das Streamen der Anzeige eines {{HTMLElement("canvas")}} in Echtzeit ([Firefox-Bug 1032848](https://bugzil.la/1032848)).
- {{domxref("MediaStream.id")}} gibt jetzt die eindeutige ID eines Streams zurück ([Firefox-Bug 1089798](https://bugzil.la/1089798)).
- Der Anfangswert von {{domxref("CanvasRenderingContext2D.filter")}} ist jetzt korrekt auf `none` gesetzt ([Firefox-Bug 1163124](https://bugzil.la/1163124)).

#### Service Workers

- Verbesserung unserer experimentellen [Service Worker](/de/docs/Web/API/Service_Worker_API)-Implementierung:

  - {{domxref("ServiceWorkerGlobalScope.skipWaiting()")}} wurde implementiert ([Firefox-Bug 1131352](https://bugzil.la/1131352)).
  - {{domxref("Clients.claim()")}} wurde hinzugefügt ([Firefox-Bug 1130684](https://bugzil.la/1130684)).
  - Die anderen Funktionsevents von Service Workers wurden dazu gebracht, von {{domxref("ExtendableEvent")}} zu erben, wodurch sie Zugriff auf die Methode {{domxref("ExtendableEvent.waitUntil","waitUntil()")}} haben ([Firefox-Bug 1160527](https://bugzil.la/1160527)).

- Die Schnittstellen {{domxref("CacheStorage")}} und {{domxref("Cache")}} werden jetzt unterstützt ([Firefox-Bug 1110144](https://bugzil.la/1110144)).

#### WebGL

- Das `failIfMajorPerformanceCaveat`-Attribut des WebGL-Kontextes wurde hinzugefügt und kann beim Erstellen eines WebGL-Kontextes mit {{domxref("HTMLCanvasElement.getContext()")}} gesetzt werden, um anzugeben, ob eine Kontext-Erstellung scheitern soll, wenn die Systemleistung gering ist ([Firefox-Bug 1164970](https://bugzil.la/1164970)).

#### WebRTC

- Firefox bietet keinen Standard-STUN-Server mehr an, der verwendet werden kann, wenn keiner angegeben wurde, wenn eine neue {{domxref("RTCPeerConnection")}} erstellt wird. Sie müssen einen angeben, um eine WebRTC-Verbindung erfolgreich herzustellen.

#### Sonstiges

- Unter OS X und Windows ändert sich {{domxref("Navigator.onLine")}} jetzt in Bezug auf die Netzwerkverbindung (es gab immer `true` zurück, es sei denn, der Modus "Offline arbeiten" war zuvor ausgewählt) ([Firefox-Bug 654579](https://bugzil.la/654579)).
- {{domxref("MessagePort")}} und {{domxref("MessageChannel")}} sind jetzt in [Webarbeitern](/de/docs/Web/API/Web_Workers_API) verfügbar und sind standardmäßig in allen Kontexten aktiviert ([Firefox-Bug 952139](https://bugzil.la/952139)) und ([Firefox-Bug 911972](https://bugzil.la/911972)).
- Die User Timing API ist jetzt in [Webarbeitern](/de/docs/Web/API/Web_Workers_API) verfügbar ([Firefox-Bug 1155761](https://bugzil.la/1155761)).
- Die [Benachrichtigungs-API](/de/docs/Web/API/Notifications_API) ist jetzt in [Webarbeitern](/de/docs/Web/API/Web_Workers_API) verfügbar ([Firefox-Bug 916893](https://bugzil.la/916893)).
- `DOMRequest` und `DOMCursor` sind jetzt in [Webarbeitern](/de/docs/Web/API/Web_Workers_API) verfügbar ([Firefox-Bug 1167650](https://bugzil.la/1167650)).
- Die [CSS Font Loading API](/de/docs/Web/API/CSS_Font_Loading_API) wurde vollständig implementiert und ist jetzt standardmäßig aktiviert ([Firefox-Bug 1149381](https://bugzil.la/1149381)).
- Geteilte Arbeitsprozesse können nicht mehr zwischen privaten (d.h. im privaten Fenster) und nicht privaten Dokumenten geteilt werden (siehe [Firefox-Bug 1177621](https://bugzil.la/1177621)).
- Die Eigenschaft {{domxref("URL.searchParams")}} ist jetzt schreibgeschützt ([Firefox-Bug 1174731](https://bugzil.la/1174731)).
- Die {{domxref('HTMLAnchorElement.hash')}}-Eigenschaft dekodiert keine URL-Fragment mehr ([Firefox-Bug 1093611](https://bugzil.la/1093611)).

### MathML

#### Neue Standard- und Ausweichschrifthandhabung

Mathematische Formeln erfordern spezielle Schriftarten. Bisher waren diese Schriftarten in das `mathml.css`-Benutzeragenten-Stylesheet fest kodiert (das die Schriftfamilie auf dem {{MathMLElement("math")}}-Tag setzt) und in die Voreinstellung `font.mathfont-family` (das die Ersatzschriftarten festlegt, die für dehnbare und große Operatoren verwendet werden sollen). Firefox 41 führt eine interne `x-math` Sprache ein, die automatisch auf dem `<math>`-Tag gesetzt wird sowie entsprechende Voreinstellungen (z.B. `font.name.serif.x-math`). Das Benutzeragenten-Stylesheet setzt jetzt die Schriftfamilie auf das Serifenschrift auf dem `<math>`-Tag und die Voreinstellung `font.mathfont-family` wird durch `font.name.serif.x-math` ersetzt. Alle Plattformen verwenden jetzt im Wesentlichen die gleiche Liste von Ersatzschriftarten, wobei "Latin Modern Math" die erste ist. Die Standard-/Ersatzschriftarten können über das Standard-Menü für sprachspezifische Schriftvoreinstellungen konfiguriert werden. Weitere Details finden Sie unter [Firefox-Bug 947654](https://bugzil.la/947654) und [Firefox-Bug 1160456](https://bugzil.la/1160456).

### SVG

- Seitensymbole (Favicons, Shortcut-Symbole) unterstützen jetzt SVG ([Firefox-Bug 366324](https://bugzil.la/366324)).

### Audio/Video

- Die Einstellung `media.autoplay.enabled` gilt jetzt auch für unzuverlässige {{domxref("HTMLMediaElement.play()")}}-Aufrufe, das heißt Aufrufe von nicht benutzeraktivierten Skripten ([Firefox-Bug 659285](https://bugzil.la/659285)).

## Vernetzung

- Der `X-Content-Duration`-Header wird nicht mehr unterstützt ([Firefox-Bug 1160695](https://bugzil.la/1160695)).
- Entwurfs-Versionen des HTTP/2-Protokolls werden nicht mehr unterstützt ([Firefox-Bug 1132357](https://bugzil.la/1132357)).

## Sicherheit

- Die [CSP](/de/docs/Web/HTTP/CSP) 1.1 `manifest-src` [Direktive](/de/docs/Web/HTTP/Headers/Content-Security-Policy) wird jetzt unterstützt ([Firefox-Bug 1089255](https://bugzil.la/1089255)).
- Frühere Versionen von Firefox erwarteten fälschlicherweise, dass der [Content Security Policy](/de/docs/Web/HTTP/CSP) [referrer](/de/docs/Web/HTTP/Headers/Content-Security-Policy#referrer) Direktivenwert `origin-when-cross-origin` als `origin-when-crossorigin` geschrieben wird. Dies wurde korrigiert, um das fehlende Bindestrichzeichen aufzunehmen.

## Änderungen für Add-on- und Mozilla-Entwickler

### XUL

_Keine Änderung._

### JavaScript-Code-Module

_Keine Änderung._

### XPCOM

### Schnittstellen

_Keine Änderung._

### Sonstiges

- Eine neue, interne und nur im Chrome-Kontext verfügbare API zum Rendern des Root-Widgets eines Fensters in ein {{HTMLElement("canvas")}} wurde hinzugefügt: `CanvasRenderingContext2D.drawWidgetAsOnScreen()`. Diese API verwendet das Betriebssystem, um das Widget auf dem Bildschirm zu schnappen. Weitere Details finden Sie im [Firefox-Bug 1167477](https://bugzil.la/1167477).

## Ältere Versionen

{{Firefox_for_developers}}
