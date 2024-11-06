---
title: Firefox 34 für Entwickler
slug: Mozilla/Firefox/Releases/34
l10n:
  sourceCommit: 6d311a5f07c97dbcd7bb9a6d49c2fe820a228659
---

{{FirefoxSidebar}}

Firefox 34 wurde am 1. Dezember 2014 veröffentlicht. Dieser Artikel listet wichtige Änderungen auf, die nicht nur für Webentwickler nützlich sind, sondern auch für Firefox- und Gecko-Entwickler sowie für Add-on-Entwickler.

## Änderungen für Webentwickler

### Entwicklerwerkzeuge

Highlights:

- [Speicherinspektor: ein neues Tool, das es Ihnen ermöglicht, die von Webseiten gespeicherten Daten zu sehen](https://firefox-source-docs.mozilla.org/devtools-user/storage_inspector/index.html)
- [Performance-Werkzeug: überarbeitetes Profiler-UI und Frameraten-Timeline](https://firefox-source-docs.mozilla.org/devtools-user/performance/index.html)
- [Frame-Wechsel: Entwicklerwerkzeuge auf ein bestimmtes `iframe` auf der Seite richten](https://firefox-source-docs.mozilla.org/devtools-user/working_with_iframes/index.html)
- [console.table Unterstützung](/de/docs/Web/API/console/table_static)
- [jQuery-Events sind im Seiteninspektor sichtbar](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/examine_event_listeners/index.html)

[Alle Devtools-Fehler, die zwischen Firefox 33 und Firefox 34 behoben wurden](https://bugzilla.mozilla.org/buglist.cgi?resolution=FIXED&chfieldto=2014-09-02&chfield=resolution&query_format=advanced&chfieldfrom=2014-07-21&chfieldvalue=FIXED&component=Developer%20Tools&component=Developer%20Tools%3A%203D%20View&component=Developer%20Tools%3A%20Canvas%20Debugger&component=Developer%20Tools%3A%20Console&component=Developer%20Tools%3A%20Debugger&component=Developer%20Tools%3A%20Framework&component=Developer%20Tools%3A%20Graphic%20Commandline%20and%20Toolbar&component=Developer%20Tools%3A%20Inspector&component=Developer%20Tools%3A%20Memory&component=Developer%20Tools%3A%20Netmonitor&component=Developer%20Tools%3A%20Object%20Inspector&component=Developer%20Tools%3A%20Profiler&component=Developer%20Tools%3A%20Responsive%20Mode&component=Developer%20Tools%3A%20Scratchpad&component=Developer%20Tools%3A%20Source%20Editor&component=Developer%20Tools%3A%20Storage%20Inspector&component=Developer%20Tools%3A%20Style%20Editor&component=Developer%20Tools%3A%20Timeline&component=Developer%20Tools%3A%20User%20Stories&component=Developer%20Tools%3A%20Web%20Audio%20Editor&component=Developer%20Tools%3A%20WebGL%20Shader%20Editor&component=Developer%20Tools%3A%20WebIDE&component=Simulator&product=Firefox&product=Firefox%20OS&list_id=11184176).

### CSS

- Unsere experimentelle Implementierung von CSS Fonts Level 3 schreitet voran. Neu implementierte Funktionen sind:

  - der Fallback-Algorithmus von {{cssxref("font-variant-position")}}, der synthetische Alternativen für fehlende Glyphen erstellt, basierend auf den vom Schriftart bereitgestellten Hoch- und Tiefstellermetriken ([Firefox-Fehler 1024804](https://bugzil.la/1024804)).
  - Die Einstellung `layout.css.font-features.enabled` wurde entfernt, was bedeutet, dass die folgenden Eigenschaften standardmäßig aktiviert sind:

    - Die CSS Font Level 3 Version von {{cssxref("font-variant")}}, die nun eine Kurzschreibweise ist.
    - Die Langschreibweisen {{cssxref("font-variant-caps")}}, {{cssxref("font-variant-numeric")}}, {{cssxref("font-variant-position")}}, {{cssxref("font-variant-east-asian")}}, {{cssxref("font-variant-ligatures")}} und {{cssxref("font-variant-alternates")}}.
    - Die Eigenschaften {{cssxref("font-kerning")}} und {{cssxref("font-synthesis")}}
    - Die Eigenschaften {{cssxref("font-feature-settings")}} und {{cssxref("font-language-override")}} sind nicht mehr mit Präfix. Die Versionen mit Präfix sind noch eine Zeit lang verfügbar, um einen Übergang zu erleichtern.

- Der Wert `auto` wurde zu {{cssxref("min-width")}} und {{cssxref("min-height")}} hinzugefügt, mit einem anderen Verhalten als beim letzten Mal ([Firefox-Fehler 984711](https://bugzil.la/984711) und [Firefox-Fehler 1015474](https://bugzil.la/1015474)).
- Eine experimentelle Implementierung, die standardmäßig deaktiviert ist, von den funktionalen Werten des Filters der {{cssxref("filter")}}-Eigenschaft wurde implementiert. Sie wird durch die Einstellung `layout.css.filters.enabled` kontrolliert ([Firefox-Fehler 948265](https://bugzil.la/948265)).
- Beginn von CSS-Übergängen, die zusammen mit Änderungen von {{cssxref("display")}}, {{cssxref("position")}}, {{cssxref("overflow")}} und ähnlichen Eigenschaften beginnen, wurde behoben ([Firefox-Fehler 625289](https://bugzil.la/625289)).

### HTML

_Keine Änderung._

### JavaScript

- Die ES2015-Syntax für [berechnete Eigenschaftsnamen in Objektliteralen](/de/docs/Web/JavaScript/Reference/Operators/Object_initializer#computed_property_names) wurde implementiert ([Firefox-Fehler 924688](https://bugzil.la/924688)).

  - Dies umfasst auch [getter](/de/docs/Web/JavaScript/Reference/Functions/get) und [setter](/de/docs/Web/JavaScript/Reference/Functions/set) Methodennamen und kann auch mit [Destrukturierung](/de/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment#computed_object_property_names_and_destructuring) verwendet werden ([Firefox-Fehler 1048384](https://bugzil.la/1048384)).

- Die ES2015 [Kurzschreibweise zum Definieren von Methoden](/de/docs/Web/JavaScript/Reference/Functions/Method_definitions) auf Objekten wurde implementiert ([Firefox-Fehler 924672](https://bugzil.la/924672)).
- Die ES2015 `Object` Methode {{jsxref("Object.assign", "Object.assign()")}} wurde implementiert ([Firefox-Fehler 937855](https://bugzil.la/937855)).
- ES2015 [Vorlagenzeichenfolgen](/de/docs/Web/JavaScript/Reference/Template_literals) und die Methode {{jsxref("String.raw()")}} werden jetzt unterstützt ([Firefox-Fehler 1038259](https://bugzil.la/1038259), [Firefox-Fehler 1039774](https://bugzil.la/1039774)).
- Ein neues ES2015-Objekt {{jsxref("WeakSet")}} wurde hinzugefügt ([Firefox-Fehler 792439](https://bugzil.la/792439)).
- ES2015 [Symbole](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol) (nur im Nightly-Kanal verfügbar) wurden aktualisiert, um mit den jüngsten Spezifikationsänderungen konform zu sein ([Firefox-Fehler 1042602](https://bugzil.la/1042602)):

  - Beim Versuch, ein Symbol in eine Zahl umzuwandeln, wird jetzt ein [`TypeError`](/de/docs/Web/JavaScript/Reference/Global_Objects/TypeError) ausgelöst.
  - Bei lockerer Gleichheit gibt `Object(sym) == sym` jetzt `true` zurück.

- Die experimentelle Methode {{jsxref("TypedArray.prototype.move()")}} (nur in ehemaligen Nightly- und Aurora-Kanälen verfügbar) wurde mit der nun implementierten Standard-ES2015-Methode {{jsxref("TypedArray.prototype.copyWithin()")}} ersetzt ([Firefox-Fehler 1021379](https://bugzil.la/1021379)).
- Im [Strikten Modus](/de/docs/Web/JavaScript/Reference/Strict_mode) führt das Setzen eines [doppelten Eigenschaftsnamens in Objektliteralen](/de/docs/Web/JavaScript/Reference/Operators/Object_initializer#duplicate_property_names) gemäß der ES2015-Spezifikation nicht mehr zu einem `SyntaxError` ([Firefox-Fehler 1041128](https://bugzil.la/1041128)).
- In regulären Ausdrücken (einschließlich `String.replace`) ist der gematchte Text für eine Erfassungsgruppe jetzt `undefined` anstelle eines leeren Strings, wenn diese Erfassungsgruppe nicht konsultiert wurde, da Quantifizierer ihre Ausführung verhinderten (siehe [Firefox-Fehler 369778](https://bugzil.la/369778) und [dieses Beispiel](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp#firefox-specific_notes)). Beachten Sie, dass aus Gründen der Web-Kompatibilität `RegExp.$N` immer noch einen leeren String zurückgibt ([Firefox-Fehler 1053944](https://bugzil.la/1053944)).
- Der ES2015 [Spread-Operator](/de/docs/Web/JavaScript/Reference/Operators/Spread_syntax) wird jetzt bei [Destrukturierung](/de/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment) unterstützt ([Firefox-Fehler 933276](https://bugzil.la/933276)).
- [Destrukturierung](/de/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment) verwendet jetzt das Iterator-Protokoll anstelle des array-ähnlichen Protokolls ([Firefox-Fehler 933276](https://bugzil.la/933276)).
- {{jsxref("Proxy.revocable()")}} wurde implementiert ([Firefox-Fehler 978279](https://bugzil.la/978279)).

### Schnittstellen/APIs/DOM

- Die Methode [`Element.matches()`](/de/docs/Web/API/Element/matches) wurde hinzugefügt; sie tut, was die nicht-standardisierte `mozMatchesSelector()`-Methode tat ([Firefox-Fehler 886308](https://bugzil.la/886308)).
- Die Methode [`Performance.now()`](/de/docs/Web/API/Performance/now) ist jetzt für Web-Worker verfügbar ([Firefox-Fehler 908390](https://bugzil.la/908390)).
- Die nicht-standardisierte Schnittstelle `MozNamedAttrMap` wurde in die standardisierte [`NamedNodeMap`](/de/docs/Web/API/NamedNodeMap) umbenannt und [`Element.attributes`](/de/docs/Web/API/Element/attributes) wurde angepasst, sie zu verwenden ([Firefox-Fehler 1055467](https://bugzil.la/1055467)).
- Die Methode [`Path2D.addPath()`](/de/docs/Web/API/Path2D/addPath) wurde hinzugefügt ([Firefox-Fehler 985801](https://bugzil.la/985801)).
- Die nicht-standardisierte [Device Storage API](/de/docs/Web/API/Device_Storage_API) ist jetzt auch für privilegierte Apps auf Android verfügbar ([Firefox-Fehler 886627](https://bugzil.la/886627)).
- Die Web Crypto API wurde standardmäßig aktiviert ([Firefox-Fehler 1074001](https://bugzil.la/1074001)).
- Die Methode [`MediaStreamTrack.stop()`](/de/docs/Web/API/MediaStreamTrack/stop) wurde hinzugefügt ([Firefox-Fehler 1057955](https://bugzil.la/1057955)).
- Unsere experimentelle Implementierung von EME geht weiter. Die Methode `MediaKeySession.getUsableKeyIds()` wurde hinzugefügt ([Firefox-Fehler 1057171](https://bugzil.la/1057171)).
- In Bezug auf [WebRTC](/de/docs/Web/API/WebRTC_API):

  - Eine experimentelle Implementierung von `RTPSender` und `RTPReceiver`, die mit [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) arbeiten, wurde hinzugefügt ([Firefox-Fehler 1032835](https://bugzil.la/1032835)).
  - Anwendungsfensterfreigabe wurde zu [`Navigator.getUserMedia()`](/de/docs/Web/API/Navigator/getUserMedia) hinzugefügt ([Firefox-Fehler 1036653](https://bugzil.la/1036653)) und [`MediaTrackConstraintSet`](/de/docs/Web/API/MediaTrackConstraintSet) unterstützt jetzt `browserWindow` und `scrollWithPage`, was es ermöglicht, den Tab eines Fensters auszuwählen, das geteilt werden soll, ohne den Tab-Auswahldialog anzuzeigen ([Firefox-Fehler 1041700](https://bugzil.la/1041700)).
  - `"browser"` ist jetzt ein akzeptierter Wert von MediaSourceEnum, der zur Definition von Einschränkungen verwendet wird ([Firefox-Fehler 1041493](https://bugzil.la/1041493)).

- Für Web Components wurde die Event-Umleitung jetzt implementiert ([Firefox-Fehler 887541](https://bugzil.la/887541)).
- Die Schnittstelle [`Headers`](/de/docs/Web/API/Headers) wurde implementiert ([Firefox-Fehler 1029620](https://bugzil.la/1029620)). Sie wird durch die Einstellung `dom.fetch.enabled` kontrolliert, die standardmäßig auf `false` gesetzt ist.
- Bezüglich unserer experimentellen Implementierung von Web-Animationen wurde die Schnittstelle [`AnimationEffect`](/de/docs/Web/API/AnimationEffect) hinzugefügt mit der einzigen Eigenschaft `AnimationEffect.name` ([Firefox-Fehler 1045993](https://bugzil.la/1045993)). Web-Animationen sind standardmäßig nicht aktiviert und werden durch die Einstellung `dom.animations-api.core.enabled` kontrolliert.
- CSSOM-View-Weichscroll-Methoden wurden hinzugefügt: [`Window.scroll()`](/de/docs/Web/API/Window/scroll), [`Window.scrollTo()`](/de/docs/Web/API/Window/scrollTo), und [`Window.scrollBy()`](/de/docs/Web/API/Window/scrollBy) ([Firefox-Fehler 1022818](https://bugzil.la/1022818)).
- Das nicht-standardisierte `MozSmsSegmentInfo` ist nicht mehr im globalen Objekt sichtbar [Firefox-Fehler 916607](https://bugzil.la/916607).

### MathML

_Keine Änderung._

### SVG

_Keine Änderung._

### Audio/Video

_Keine Änderung._

## Sicherheit und Netzwerk

- SSLv3 ist jetzt standardmäßig deaktiviert ([Firefox-Fehler 1030963](https://bugzil.la/1030963)).
- Eine Warnung wird an die Konsole gesendet, wenn eine Website die CSS `reflected-xss`-Richtlinie verwendet ([Firefox-Fehler 1045902](https://bugzil.la/1045902)).

## Änderungen für Add-on- und Mozilla-Entwickler

- localstore.rdf wurde entfernt ([Firefox-Fehler 559505](https://bugzil.la/559505)).

### Add-on SDK

#### Highlights

- Neue API: [dev/panel](/de/docs/Mozilla/Add-ons/SDK/Low-Level_APIs/dev_panel) ermöglicht es Ihnen, die Firefox-Entwicklerwerkzeuge zu erweitern.
- [jpm](/de/docs/Mozilla/Add-ons/SDK/Tools/jpm) Beta veröffentlicht.
- `"./my-file"` wurde überall als Alias für `require("sdk/self").data.url("my-file")` eingeführt.
- Hinzugefügt die Fähigkeit, [Stylesheets an einzelne Tabs anzuhängen](/de/docs/Mozilla/Add-ons/SDK/High-Level_APIs/tabs#attaching_stylesheets).

#### Details

[GitHub Commits, die zwischen Firefox 33 und Firefox 34 gemacht wurden](https://github.com/mozilla/addon-sdk/compare/firefox33...firefox34). Dies schließt keine Änderungen ein, die nach Betreten des Aurora-Status vorgenommen wurden.

[Fehler, die zwischen Firefox 33 und Firefox 34 behoben wurden](https://bugzilla.mozilla.org/buglist.cgi?resolution=FIXED&chfieldto=2014-09-02&chfield=resolution&query_format=advanced&chfieldfrom=2014-07-21&chfieldvalue=FIXED&bug_status=RESOLVED&bug_status=VERIFIED&bug_status=CLOSED&product=Add-on%20SDK&list_id=11562840). Dies schließt keine Änderungen ein, die nach Betreten des Aurora-Status vorgenommen wurden.

## Ältere Versionen

{{Firefox_for_developers}}
