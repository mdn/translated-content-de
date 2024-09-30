---
title: Firefox 34 für Entwickler
slug: Mozilla/Firefox/Releases/34
l10n:
  sourceCommit: 1822cdf5a86574429c4c49883a402663ef16a4ef
---

{{FirefoxSidebar}}

Firefox 34 wurde am 1. Dezember 2014 veröffentlicht. Dieser Artikel listet wichtige Änderungen auf, die nicht nur für Webentwickler nützlich sind, sondern auch für Firefox- und Gecko-Entwickler sowie Add-on-Entwickler.

## Änderungen für Webentwickler

### Entwicklerwerkzeuge

Höhepunkte:

- [Storage Inspector: Ein neues Werkzeug, das es Ihnen ermöglicht, von Webseiten gespeicherte Daten anzuzeigen](https://firefox-source-docs.mozilla.org/devtools-user/storage_inspector/index.html)
- [Performance-Tool: Überarbeitete Profiler-Benutzeroberfläche und Frame-Rate-Zeitleiste](https://firefox-source-docs.mozilla.org/devtools-user/performance/index.html)
- [Frame-Switching: Die Entwicklerwerkzeuge auf ein spezifisches `<iframe>` in der Seite richten](https://firefox-source-docs.mozilla.org/devtools-user/working_with_iframes/index.html)
- [console.table-Unterstützung](/de/docs/Web/API/console/table_static)
- [jQuery-Ereignisse sind im Page Inspector sichtbar](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/examine_event_listeners/index.html)

[Alle Devtools-Bugs, die zwischen Firefox 33 und Firefox 34 behoben wurden](https://bugzilla.mozilla.org/buglist.cgi?resolution=FIXED&chfieldto=2014-09-02&chfield=resolution&query_format=advanced&chfieldfrom=2014-07-21&chfieldvalue=FIXED&component=Developer%20Tools&component=Developer%20Tools%3A%203D%20View&component=Developer%20Tools%3A%20Canvas%20Debugger&component=Developer%20Tools%3A%20Console&component=Developer%20Tools%3A%20Debugger&component=Developer%20Tools%3A%20Framework&component=Developer%20Tools%3A%20Graphic%20Commandline%20and%20Toolbar&component=Developer%20Tools%3A%20Inspector&component=Developer%20Tools%3A%20Memory&component=Developer%20Tools%3A%20Netmonitor&component=Developer%20Tools%3A%20Object%20Inspector&component=Developer%20Tools%3A%20Profiler&component=Developer%20Tools%3A%20Responsive%20Mode&component=Developer%20Tools%3A%20Scratchpad&component=Developer%20Tools%3A%20Source%20Editor&component=Developer%20Tools%3A%20Storage%20Inspector&component=Developer%20Tools%3A%20Style%20Editor&component=Developer%20Tools%3A%20Timeline&component=Developer%20Tools%3A%20User%20Stories&component=Developer%20Tools%3A%20Web%20Audio%20Editor&component=Developer%20Tools%3A%20WebGL%20Shader%20Editor&component=Simulator&product=Firefox&product=Firefox%20OS&list_id=11184176).

### CSS

- Unsere experimentelle Implementierung von CSS Fonts Level 3 schreitet voran. Neu implementierte Funktionen sind:

  - der Fallback-Algorithmus von {{cssxref("font-variant-position")}}, der synthetische Alternativen für fehlende Glyphen erstellt, basierend auf den vom Font bereitgestellten Subskript- und Superskript-Metriken ([Firefox-Bug 1024804](https://bugzil.la/1024804)).
  - Die Präferenz `layout.css.font-features.enabled` wurde entfernt, wodurch die folgenden Eigenschaften standardmäßig aktiviert sind:

    - Die CSS Font Level 3-Version von {{cssxref("font-variant")}}, die jetzt eine Kurzschreibweise ist.
    - Die Langform-Eigenschaften {{cssxref("font-variant-caps")}}, {{cssxref("font-variant-numeric")}}, {{cssxref("font-variant-position")}}, {{cssxref("font-variant-east-asian")}}, {{cssxref("font-variant-ligatures")}} und {{cssxref("font-variant-alternates")}}.
    - Die Eigenschaften {{cssxref("font-kerning")}} und {{cssxref("font-synthesis")}}
    - Die Eigenschaften {{cssxref("font-feature-settings")}} und {{cssxref("font-language-override")}} sind unverändert. Die geänderten Versionen sind noch einige Zeit verfügbar, um den Übergang zu erleichtern.

- Der Wert `auto` wurde zu {{cssxref("min-width")}} und {{cssxref("min-height")}} mit einem anderen Verhalten als das letzte Mal hinzugefügt ([Firefox-Bug 984711](https://bugzil.la/984711) und [Firefox-Bug 1015474](https://bugzil.la/1015474)).
- Eine experimentelle Implementierung, standardmäßig deaktiviert, der funktionalen Filterwerte der {{cssxref("filter")}}-Eigenschaft wurde umgesetzt. Sie wird durch die `layout.css.filters.enabled` Präferenz gesteuert ([Firefox-Bug 948265](https://bugzil.la/948265)).
- Behoben wurde das Starten von CSS-Übergängen, die zusammen mit Änderungen an {{cssxref("display")}}, {{cssxref("position")}}, {{cssxref("overflow")}} und ähnlichen Eigenschaften beginnen ([Firefox-Bug 625289](https://bugzil.la/625289)).

### HTML

_Keine Änderungen._

### JavaScript

- Der ES2015-Syntax für [berechnete Eigenschaftsnamen bei Objektliteralen](/de/docs/Web/JavaScript/Reference/Operators/Object_initializer#computed_property_names) wurde implementiert ([Firefox-Bug 924688](https://bugzil.la/924688)).

  - Dies schließt auch [getter](/de/docs/Web/JavaScript/Reference/Functions/get)- und [setter](/de/docs/Web/JavaScript/Reference/Functions/set)-Methodennamen ein ([Firefox-Bug 1048384](https://bugzil.la/1048384)) und kann auch mit [Destructuring](/de/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment#computed_object_property_names_and_destructuring) verwendet werden.

- Der ES2015 [Kurzsyntax zur Definition von Methoden](/de/docs/Web/JavaScript/Reference/Functions/Method_definitions) an Objekten wurde implementiert ([Firefox-Bug 924672](https://bugzil.la/924672)).
- Die ES2015 `Object`-Methode {{jsxref("Object.assign", "Object.assign()")}} wurde implementiert ([Firefox-Bug 937855](https://bugzil.la/937855)).
- ES2015 [Template-Strings](/de/docs/Web/JavaScript/Reference/Template_literals) und die {{jsxref("String.raw()")}}-Methode werden jetzt unterstützt ([Firefox-Bug 1038259](https://bugzil.la/1038259), [Firefox-Bug 1039774](https://bugzil.la/1039774)).
- Ein neues ES2015-Objekt {{jsxref("WeakSet")}} wurde hinzugefügt ([Firefox-Bug 792439](https://bugzil.la/792439)).
- ES2015 [Symbole](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol) (nur im Nightly-Kanal verfügbar) wurden aktualisiert, um mit den neuesten Spezifikationsänderungen übereinzustimmen ([Firefox-Bug 1042602](https://bugzil.la/1042602)):

  - Beim Versuch, ein Symbol in eine Zahl umzuwandeln, wird jetzt ein [`TypeError`](/de/docs/Web/JavaScript/Reference/Global_Objects/TypeError) ausgelöst.
  - Beim Verwenden der losen Gleichheit gibt `Object(sym) == sym` jetzt `true` zurück.

- Die experimentelle {{jsxref("TypedArray.prototype.move()")}}-Methode (nur in früheren Nightly- und Aurora-Kanälen verfügbar) wurde durch die jetzt implementierte Standard-ES2015-{{jsxref("TypedArray.prototype.copyWithin()")}}-Methode ersetzt ([Firefox-Bug 1021379](https://bugzil.la/1021379)).
- Im [strict mode](/de/docs/Web/JavaScript/Reference/Strict_mode) wird beim Festlegen eines [doppelten Eigenschaftennamens in Objekt-Literalen](/de/docs/Web/JavaScript/Reference/Operators/Object_initializer#duplicate_property_names) kein `SyntaxError` mehr ausgelöst, gemäß ES2015-Spezifikation ([Firefox-Bug 1041128](https://bugzil.la/1041128)).
- In regulären Ausdrücken (einschließlich `String.replace`) ist der übereinstimmende Text für eine Erfassungsgruppe jetzt `undefined` anstelle des leeren Strings, wenn diese Erfassungsgruppe nicht konsultiert wurde, weil Quantifikatoren ihren Einsatz verhinderten (siehe [Firefox-Bug 369778](https://bugzil.la/369778) und [dieses Beispielcode](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp#firefox-specific_notes)). Beachten Sie, dass aus Web-Kompatibilitätsgründen RegExp.$N weiterhin einen leeren String zurückgibt ([Firefox-Bug 1053944](https://bugzil.la/1053944)).
- Der ES2015 [Spread-Operator](/de/docs/Web/JavaScript/Reference/Operators/Spread_syntax) wird jetzt in [Destructuring](/de/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment) unterstützt ([Firefox-Bug 933276](https://bugzil.la/933276)).
- [Destructuring](/de/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment) verwendet jetzt das Iterator-Protokoll anstelle des Array-ähnlichen Protokolls ([Firefox-Bug 933276](https://bugzil.la/933276)).
- {{jsxref("Proxy.revocable()")}} wurde implementiert ([Firefox-Bug 978279](https://bugzil.la/978279)).

### Schnittstellen/APIs/DOM

- Die [`Element.matches()`](/de/docs/Web/API/Element/matches)-Methode wurde hinzugefügt; sie tut das, was die nicht-standardmäßige `mozMatchesSelector()` tat ([Firefox-Bug 886308](https://bugzil.la/886308)).
- Die [`Performance.now()`](/de/docs/Web/API/Performance/now)-Methode ist jetzt für Web-Worker verfügbar ([Firefox-Bug 908390](https://bugzil.la/908390)).
- Die nicht-standardmäßige Schnittstelle `MozNamedAttrMap` wurde in die standardmäßige [`NamedNodeMap`](/de/docs/Web/API/NamedNodeMap) umbenannt, und [`Element.attributes`](/de/docs/Web/API/Element/attributes) wurde angepasst, um sie zu verwenden ([Firefox-Bug 1055467](https://bugzil.la/1055467)).
- Die [`Path2D.addPath()`](/de/docs/Web/API/Path2D/addPath)-Methode wurde hinzugefügt ([Firefox-Bug 985801](https://bugzil.la/985801)).
- Die nicht-standardmäßige [Device Storage API](/de/docs/Web/API/Device_Storage_API) ist jetzt auch für privilegierte Apps aktiviert, die auf Android installiert sind ([Firefox-Bug 886627](https://bugzil.la/886627)).
- Die Web Crypto API wurde standardmäßig aktiviert ([Firefox-Bug 1074001](https://bugzil.la/1074001)).
- Die [`MediaStreamTrack.stop()`](/de/docs/Web/API/MediaStreamTrack/stop)-Methode wurde hinzugefügt ([Firefox-Bug 1057955](https://bugzil.la/1057955)).
- Unsere experimentelle Implementierung von EME geht weiter. Die Methode [`MediaKeySession.getUsableKeyIds()`](/de/docs/Web/API/MediaKeySession/getUsableKeyIds) wurde hinzugefügt ([Firefox-Bug 1057171](https://bugzil.la/1057171)).
- Betreffend [WebRTC](/de/docs/Web/API/WebRTC_API):

  - Eine experimentelle Implementierung von [`RTPSender`](/de/docs/Web/API/RTPSender) und [`RTPReceiver`](/de/docs/Web/API/RTPReceiver), die mit [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) arbeiten, wurde hinzugefügt ([Firefox-Bug 1032835](https://bugzil.la/1032835)).
  - Anwendung Fensterfreigabe wurde zu [`Navigation.getUserMedia()`](/de/docs/Web/API/Navigation/getUserMedia) hinzugefügt ([Firefox-Bug 1036653](https://bugzil.la/1036653)), und [`MediaTrackConstraintSet`](/de/docs/Web/API/MediaTrackConstraintSet) unterstützt jetzt `browserWindow` und `scrollWithPage`, um den Tab eines Fensters auszuwählen, der freigegeben werden soll, ohne das Tab-Auswahl-Dialogfeld anzuzeigen ([Firefox-Bug 1041700](https://bugzil.la/1041700)).
  - `"browser"` ist jetzt ein akzeptierter Wert von MediaSourceEnum, der zum Definieren von Einschränkungen verwendet wird ([Firefox-Bug 1041493](https://bugzil.la/1041493)).

- Für Web Components ist jetzt Ereignisweiterleitung implementiert ([Firefox-Bug 887541](https://bugzil.la/887541)).
- Die [`Headers`](/de/docs/Web/API/Headers)-Schnittstelle wurde implementiert ([Firefox-Bug 1029620](https://bugzil.la/1029620)). Sie wird durch die `dom.fetch.enabled`-Präferenz gesteuert, die standardmäßig auf `false` gesetzt ist.
- In Bezug auf unsere experimentelle Implementierung von Web Animationen wurde die [`AnimationEffect`](/de/docs/Web/API/AnimationEffect)-Schnittstelle hinzugefügt, mit der einzigen Eigenschaft [`AnimationEffect.name`](/de/docs/Web/API/AnimationEffect/name) ([Firefox-Bug 1045993](https://bugzil.la/1045993)). Web Animationen ist nicht standardmäßig aktiviert und wird durch die `dom.animations-api.core.enabled`-Präferenz gesteuert.
- CSSOM View-Weichscrollmethoden wurden hinzugefügt: [`Window.scroll()`](/de/docs/Web/API/Window/scroll), [`Window.scrollTo()`](/de/docs/Web/API/Window/scrollTo) und [`Window.scrollBy()`](/de/docs/Web/API/Window/scrollBy) ([Firefox-Bug 1022818](https://bugzil.la/1022818)).
- Die nicht-standardmäßige `MozSmsSegmentInfo` ist nicht mehr im globalen Objekt sichtbar ([Firefox-Bug 916607](https://bugzil.la/916607)).

### MathML

_Keine Änderungen._

### SVG

_Keine Änderungen._

### Audio/Video

_Keine Änderungen._

## Sicherheit und Netzwerke

- SSLv3 ist jetzt standardmäßig deaktiviert ([Firefox-Bug 1030963](https://bugzil.la/1030963)).
- Eine Warnung wird an die Konsole gesendet, wenn eine Website die CSS-`reflected-xss`-Direktive verwendet ([Firefox-Bug 1045902](https://bugzil.la/1045902)).

## Änderungen für Add-on- und Mozilla-Entwickler

- localstore.rdf wurde entfernt ([Firefox-Bug 559505](https://bugzil.la/559505)).

### Add-on SDK

#### Höhepunkte

- Neue API: [dev/panel](/de/docs/Mozilla/Add-ons/SDK/Low-Level_APIs/dev_panel) ermöglicht es Ihnen, die Firefox Developer Tools zu erweitern.
- [jpm](/de/docs/Mozilla/Add-ons/SDK/Tools/jpm) Beta veröffentlicht.
- `"./my-file"` wurde überall als Alias für `require("sdk/self").data.url("my-file")` eingeführt.
- Hinzugefügt wurde die Möglichkeit, [Stylesheets zu einzelnen Tabs hinzuzufügen](/de/docs/Mozilla/Add-ons/SDK/High-Level_APIs/tabs#attaching_stylesheets).

#### Details

[GitHub-Commits zwischen Firefox 33 und Firefox 34](https://github.com/mozilla/addon-sdk/compare/firefox33...firefox34). Diese schließen keine Anpassungen ein, die nach dem Eintritt in die Aurora-Phase in diese Version übernommen wurden.

[Fehler, die zwischen Firefox 33 und Firefox 34 behoben wurden](https://bugzilla.mozilla.org/buglist.cgi?resolution=FIXED&chfieldto=2014-09-02&chfield=resolution&query_format=advanced&chfieldfrom=2014-07-21&chfieldvalue=FIXED&bug_status=RESOLVED&bug_status=VERIFIED&bug_status=CLOSED&product=Add-on%20SDK&list_id=11562840). Diese schließen keine Anpassungen ein, die nachdem diese Version in Aurora überführt wurde, aufgenommen wurden.

## Ältere Versionen

{{Firefox_for_developers}}
