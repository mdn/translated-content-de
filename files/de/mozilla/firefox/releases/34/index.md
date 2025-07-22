---
title: Firefox 34 für Entwickler
short-title: Firefox 34
slug: Mozilla/Firefox/Releases/34
l10n:
  sourceCommit: 2591a9b59de88401a2ef0fb7d0b8d0281e3f5376
---

Firefox 34 wurde am 1. Dezember 2014 veröffentlicht. Dieser Artikel listet wichtige Änderungen auf, die nicht nur für Webentwickler nützlich sind, sondern auch für Firefox- und Gecko-Entwickler sowie für Entwickler von Add-ons.

## Änderungen für Webentwickler

### Entwickler-Tools

Höhepunkte:

- [Storage Inspector: ein neues Tool, das es Ihnen ermöglicht, Daten zu sehen, die von Webseiten gespeichert werden](https://firefox-source-docs.mozilla.org/devtools-user/storage_inspector/index.html)
- [Performance-Tool: überarbeitete Profiler-Benutzeroberfläche und Bildratentimeline](https://firefox-source-docs.mozilla.org/devtools-user/performance/index.html)
- [Frame-Wechsel: richten Sie die Entwickler-Tools auf ein spezifisches `iframe` in der Seite](https://firefox-source-docs.mozilla.org/devtools-user/working_with_iframes/index.html)
- [console.table Unterstützung](/de/docs/Web/API/console/table_static)
- [jQuery-Events sind im Seiteninspektor sichtbar](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/examine_event_listeners/index.html)

[Alle Entwickler-Tool-Bugs, die zwischen Firefox 33 und Firefox 34 behoben wurden](https://bugzilla.mozilla.org/buglist.cgi?resolution=FIXED&chfieldto=2014-09-02&chfield=resolution&query_format=advanced&chfieldfrom=2014-07-21&chfieldvalue=FIXED&component=Developer%20Tools&component=Developer%20Tools%3A%203D%20View&component=Developer%20Tools%3A%20Canvas%20Debugger&component=Developer%20Tools%3A%20Console&component=Developer%20Tools%3A%20Debugger&component=Developer%20Tools%3A%20Framework&component=Developer%20Tools%3A%20Graphic%20Commandline%20and%20Toolbar&component=Developer%20Tools%3A%20Inspector&component=Developer%20Tools%3A%20Memory&component=Developer%20Tools%3A%20Netmonitor&component=Developer%20Tools%3A%20Object%20Inspector&component=Developer%20Tools%3A%20Profiler&component=Developer%20Tools%3A%20Responsive%20Mode&component=Developer%20Tools%3A%20Scratchpad&component=Developer%20Tools%3A%20Source%20Editor&component=Developer%20Tools%3A%20Storage%20Inspector&component=Developer%20Tools%3A%20Style%20Editor&component=Developer%20Tools%3A%20Timeline&component=Developer%20Tools%3A%20User%20Stories&component=Developer%20Tools%3A%20Web%20Audio%20Editor&component=Developer%20Tools%3A%20WebGL%20Shader%20Editor&component=Developer%20Tools%3A%20WebIDE&component=Simulator&product=Firefox&product=Firefox%20OS&list_id=11184176).

### CSS

- Unsere experimentelle Implementierung von CSS Fonts Level 3 schreitet voran. Neu implementierte Funktionen sind:
  - Der Fallback-Algorithmus von {{cssxref("font-variant-position")}}, der synthetische Alternativen für fehlende Glyphen erstellt, basierend auf den vom Font bereitgestellten Tief- und Hochstelltmetriken ([Firefox Bug 1024804](https://bugzil.la/1024804)).
  - Die Einstellung `layout.css.font-features.enabled` wurde entfernt, wodurch die folgenden Eigenschaften nun standardmäßig aktiviert sind:
    - Die CSS Font Level 3-Version von {{cssxref("font-variant")}}, die jetzt eine Kurzschreibweise ist.
    - Die spezifizierten Eigenschaften {{cssxref("font-variant-caps")}}, {{cssxref("font-variant-numeric")}}, {{cssxref("font-variant-position")}}, {{cssxref("font-variant-east-asian")}}, {{cssxref("font-variant-ligatures")}} und {{cssxref("font-variant-alternates")}}.
    - Die Eigenschaften {{cssxref("font-kerning")}} und {{cssxref("font-synthesis")}}
    - Die Eigenschaften {{cssxref("font-feature-settings")}} und {{cssxref("font-language-override")}} sind nicht mehr mit einem Präfix versehen. Die Versionen mit Präfix bleiben noch eine gewisse Zeit verfügbar, um den Umstieg zu erleichtern.

- Der Wert `auto` wurde zu {{cssxref("min-width")}} und {{cssxref("min-height")}} mit einem anderen Verhalten als beim letzten Mal hinzugefügt ([Firefox Bug 984711](https://bugzil.la/984711) und [Firefox Bug 1015474](https://bugzil.la/1015474)).
- Eine experimentelle Implementierung, standardmäßig deaktiviert, der funktionalen Filterwerte der {{cssxref("filter")}}-Eigenschaft wurde implementiert. Sie wird durch die `layout.css.filters.enabled` Einstellung gesteuert ([Firefox Bug 948265](https://bugzil.la/948265)).
- Behobener Start von CSS-Übergängen, die gleichzeitig mit Änderungen an {{cssxref("display")}}, {{cssxref("position")}}, {{cssxref("overflow")}} und ähnlichen Eigenschaften beginnen ([Firefox Bug 625289](https://bugzil.la/625289)).

### HTML

_Keine Änderung._

### JavaScript

- Die ES2015-Syntax für [berechnete Eigenschaftsnamen in Objektliteralen](/de/docs/Web/JavaScript/Reference/Operators/Object_initializer#computed_property_names) wurde implementiert ([Firefox Bug 924688](https://bugzil.la/924688)).
  - Dies schließt [getter](/de/docs/Web/JavaScript/Reference/Functions/get) und [setter](/de/docs/Web/JavaScript/Reference/Functions/set) Methodennamen sowie die Verwendung mit [Destrukturierung](/de/docs/Web/JavaScript/Reference/Operators/Destructuring#computed_object_property_names_and_destructuring) ein ([Firefox Bug 1048384](https://bugzil.la/1048384)).

- Die ES2015 [Kurzschreibweise zum Definieren von Methoden](/de/docs/Web/JavaScript/Reference/Functions/Method_definitions) in Objekten wurde implementiert ([Firefox Bug 924672](https://bugzil.la/924672)).
- Die ES2015 `Object`-Methode {{jsxref("Object.assign", "Object.assign()")}} wurde implementiert ([Firefox Bug 937855](https://bugzil.la/937855)).
- ES2015 [Template-Strings](/de/docs/Web/JavaScript/Reference/Template_literals) und die {{jsxref("String.raw()")}} Methode werden jetzt unterstützt ([Firefox Bug 1038259](https://bugzil.la/1038259), [Firefox Bug 1039774](https://bugzil.la/1039774)).
- Ein neues ES2015-Objekt {{jsxref("WeakSet")}} wurde hinzugefügt ([Firefox Bug 792439](https://bugzil.la/792439)).
- ES2015 [Symbole](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol) (nur im Nightly-Kanal verfügbar) wurden aktualisiert, um den jüngsten Spezifikationsänderungen zu entsprechen ([Firefox Bug 1042602](https://bugzil.la/1042602)):
  - Beim Versuch, ein Symbol in eine Zahl umzuwandeln, wird nun ein [`TypeError`](/de/docs/Web/JavaScript/Reference/Global_Objects/TypeError) ausgelöst.
  - Bei Verwendung von losen Gleichheiten gibt `Object(sym) == sym` jetzt `true` zurück.

- Die experimentelle Methode `TypedArray.prototype.move()` (nur verfügbar in den ehemaligen Nightly- und Aurora-Kanälen) wurde durch die nun implementierte standardmäßige ES2015 Methode {{jsxref("TypedArray.prototype.copyWithin()")}} ersetzt ([Firefox Bug 1021379](https://bugzil.la/1021379)).
- Im [Strikten Modus](/de/docs/Web/JavaScript/Reference/Strict_mode) wird das Setzen eines [doppelten Eigenschaftsnamens in Objektliteralen](/de/docs/Web/JavaScript/Reference/Operators/Object_initializer#duplicate_property_names) nicht mehr einen `SyntaxError` werfen, gemäß der ES2015-Spezifikation ([Firefox Bug 1041128](https://bugzil.la/1041128)).
- In regulären Ausdrücken (einschließlich `String.replace`) ist der übereinstimmende Text für eine Fanggruppe jetzt `undefined` anstelle des leeren Strings, wenn diese Fanggruppe nicht abgefragt wurde, weil Quantifizierer ihre Ausführung verhindert haben (siehe [Firefox Bug 369778](https://bugzil.la/369778) und [dieses Beispielcode](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp#firefox-specific_notes)). Beachten Sie, dass aufgrund der Web-Kompatibilität RegExp.$N immer noch einen leeren String zurückgibt ([Firefox Bug 1053944](https://bugzil.la/1053944)).
- Der ES2015 [Spread-Operator](/de/docs/Web/JavaScript/Reference/Operators/Spread_syntax) wird jetzt mit [Destrukturierung](/de/docs/Web/JavaScript/Reference/Operators/Destructuring) unterstützt ([Firefox Bug 933276](https://bugzil.la/933276)).
- [Destrukturierung](/de/docs/Web/JavaScript/Reference/Operators/Destructuring) verwendet jetzt das Iterator-Protokoll anstelle des array-ähnlichen Protokolls ([Firefox Bug 933276](https://bugzil.la/933276)).
- {{jsxref("Proxy.revocable()")}} wurde implementiert ([Firefox Bug 978279](https://bugzil.la/978279)).

### Schnittstellen / APIs / DOM

- Die Methode [`Element.matches()`](/de/docs/Web/API/Element/matches) wurde hinzugefügt; sie tut das, was die nicht standardisierte Methode `mozMatchesSelector()` tat ([Firefox Bug 886308](https://bugzil.la/886308)).
- Die Methode [`Performance.now()`](/de/docs/Web/API/Performance/now) ist jetzt in Web-Workern verfügbar ([Firefox Bug 908390](https://bugzil.la/908390)).
- Die nicht standardisierte Schnittstelle `MozNamedAttrMap` wurde in das standardisierte [`NamedNodeMap`](/de/docs/Web/API/NamedNodeMap) umbenannt und [`Element.attributes`](/de/docs/Web/API/Element/attributes) wurde angepasst, um sie zu verwenden ([Firefox Bug 1055467](https://bugzil.la/1055467)).
- Die Methode [`Path2D.addPath()`](/de/docs/Web/API/Path2D/addPath) wurde hinzugefügt ([Firefox Bug 985801](https://bugzil.la/985801)).
- Die nicht standardisierte Device Storage API ist nun auch für privilegierte Apps auf Android aktiviert ([Firefox Bug 886627](https://bugzil.la/886627)).
- Die Web Crypto API wurde standardmäßig aktiviert ([Firefox Bug 1074001](https://bugzil.la/1074001)).
- Die Methode [`MediaStreamTrack.stop()`](/de/docs/Web/API/MediaStreamTrack/stop) wurde hinzugefügt ([Firefox Bug 1057955](https://bugzil.la/1057955)).
- Unsere experimentelle Implementierung von EME geht weiter. Die Methode `MediaKeySession.getUsableKeyIds()` wurde hinzugefügt ([Firefox Bug 1057171](https://bugzil.la/1057171)).
- Bezüglich [WebRTC](/de/docs/Web/API/WebRTC_API):
  - Eine experimentelle Implementierung von `RTPSender` und `RTPReceiver`, die mit [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) arbeitet, wurde hinzugefügt ([Firefox Bug 1032835](https://bugzil.la/1032835)).
  - Das Teilen von Anwendungsfenstern wurde zu [`Navigator.getUserMedia()`](/de/docs/Web/API/Navigator/getUserMedia) hinzugefügt ([Firefox Bug 1036653](https://bugzil.la/1036653)) und `MediaTrackConstraintSet` unterstützt jetzt `browserWindow` und `scrollWithPage`, um das Tab eines Fensters auszuwählen, das geteilt werden soll, ohne den Tab-Auswahldialog anzuzeigen ([Firefox Bug 1041700](https://bugzil.la/1041700)).
  - `"browser"` ist jetzt ein akzeptierter Wert von MediaSourceEnum, der zur Definition von Einschränkungen verwendet wird ([Firefox Bug 1041493](https://bugzil.la/1041493)).

- Für Web Components ist jetzt das Event-Retargeting implementiert ([Firefox Bug 887541](https://bugzil.la/887541)).
- Die Schnittstelle [`Headers`](/de/docs/Web/API/Headers) wurde implementiert ([Firefox Bug 1029620](https://bugzil.la/1029620)). Sie wird durch die `dom.fetch.enabled` Einstellung gesteuert, die standardmäßig auf `false` gesetzt ist.
- Bezüglich unserer experimentellen Implementierung von Web Animationen wurde die Schnittstelle [`AnimationEffect`](/de/docs/Web/API/AnimationEffect) hinzugefügt, mit der einzigen Eigenschaft `AnimationEffect.name` ([Firefox Bug 1045993](https://bugzil.la/1045993)). Web Animationen sind standardmäßig nicht aktiviert und werden durch die `dom.animations-api.core.enabled` Einstellung gesteuert.
- CSSOM-View-Methoden für sanftes Scrollen wurden hinzugefügt: [`Window.scroll()`](/de/docs/Web/API/Window/scroll), [`Window.scrollTo()`](/de/docs/Web/API/Window/scrollTo), und [`Window.scrollBy()`](/de/docs/Web/API/Window/scrollBy) ([Firefox Bug 1022818](https://bugzil.la/1022818)).
- Das nicht standardisierte `MozSmsSegmentInfo` ist nicht mehr auf dem globalen Objekt sichtbar [Firefox Bug 916607](https://bugzil.la/916607).

### MathML

_Keine Änderung._

### SVG

_Keine Änderung._

### Audio/Video

_Keine Änderung._

## Sicherheit und Netzwerke

- SSLv3 ist jetzt standardmäßig deaktiviert ([Firefox Bug 1030963](https://bugzil.la/1030963)).
- Eine Warnung wird an die Konsole gesendet, wenn eine Website die CSS-Direktive `reflected-xss` verwendet ([Firefox Bug 1045902](https://bugzil.la/1045902)).

## Änderungen für Add-on- und Mozilla-Entwickler

- localstore.rdf wurde entfernt ([Firefox Bug 559505](https://bugzil.la/559505)).

### Add-on SDK

#### Höhepunkte

- Neue API: [dev/panel](https://web.archive.org/web/20210517043357/https://developer.mozilla.org/de/docs/Archive/Add-ons/Add-on_SDK/Low-Level_APIs/dev_panel) ermöglicht es Ihnen, die Firefox-Entwicklertools zu erweitern.
- [jpm](https://web.archive.org/web/20210221222338/https://developer.mozilla.org/de/docs/Archive/Add-ons/Add-on_SDK/Tools/jpm) Beta veröffentlicht.
- `"./my-file"` wurde überall als Alias für `require("sdk/self").data.url("my-file")` eingeführt.
- Die Möglichkeit wurde hinzugefügt, [Stylesheets an einzelne Tabs anzuhängen](/de/docs/Mozilla/Add-ons/WebExtensions/Working_with_the_Tabs_API#manipulating_a_tabs_css).

#### Details

[GitHub Commits, die zwischen Firefox 33 und Firefox 34 gemacht wurden](https://github.com/mozilla/addon-sdk/compare/firefox33...firefox34). Dies schließt keine Uplifts ein, die nach dem Eintritt dieses Releases in Aurora gemacht wurden.

[Bugs, die zwischen Firefox 33 und Firefox 34 behoben wurden](https://bugzilla.mozilla.org/buglist.cgi?resolution=FIXED&chfieldto=2014-09-02&chfield=resolution&query_format=advanced&chfieldfrom=2014-07-21&chfieldvalue=FIXED&bug_status=RESOLVED&bug_status=VERIFIED&bug_status=CLOSED&product=Add-on%20SDK&list_id=11562840). Dies schließt keine Uplifts ein, die nach dem Eintritt dieses Releases in Aurora gemacht wurden.
