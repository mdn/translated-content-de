---
title: Firefox 34 für Entwickler
slug: Mozilla/Firefox/Releases/34
l10n:
  sourceCommit: 1822cdf5a86574429c4c49883a402663ef16a4ef
---

{{FirefoxSidebar}}

Firefox 34 wurde am 1. Dezember 2014 veröffentlicht. Dieser Artikel listet wichtige Änderungen auf, die nicht nur für Webentwickler nützlich sind, sondern auch für Firefox- und Gecko-Entwickler sowie für Add-on-Entwickler.

## Änderungen für Webentwickler

### Entwicklerwerkzeuge

Höhepunkte:

- [Storage Inspector: ein neues Tool, das es ermöglicht, Daten zu sehen, die von Webseiten gespeichert werden](https://firefox-source-docs.mozilla.org/devtools-user/storage_inspector/index.html)
- [Performance-Tool: überarbeitetes Profiler-UI und Frame-Rate-Zeitleiste](https://firefox-source-docs.mozilla.org/devtools-user/performance/index.html)
- [Frame-Wechsel: Zeigen Sie die Entwicklerwerkzeuge auf ein bestimmtes iframe in der Seite](https://firefox-source-docs.mozilla.org/devtools-user/working_with_iframes/index.html)
- [console.table Unterstützung](/de/docs/Web/API/console/table_static)
- [jQuery-Ereignisse sind im Seiteninspektor sichtbar](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/examine_event_listeners/index.html)

[Alle Devtools-Bugs, die zwischen Firefox 33 und Firefox 34 behoben wurden](https://bugzilla.mozilla.org/buglist.cgi?resolution=FIXED&chfieldto=2014-09-02&chfield=resolution&query_format=advanced&chfieldfrom=2014-07-21&chfieldvalue=FIXED&component=Developer%20Tools&component=Developer%20Tools%3A%203D%20View&component=Developer%20Tools%3A%20Canvas%20Debugger&component=Developer%20Tools%3A%20Console&component=Developer%20Tools%3A%20Debugger&component=Developer%20Tools%3A%20Framework&component=Developer%20Tools%3A%20Graphic%20Commandline%20and%20Toolbar&component=Developer%20Tools%3A%20Inspector&component=Developer%20Tools%3A%20Memory&component=Developer%20Tools%3A%20Netmonitor&component=Developer%20Tools%3A%20Object%20Inspector&component=Developer%20Tools%3A%20Profiler&component=Developer%20Tools%3A%20Responsive%20Mode&component=Developer%20Tools%3A%20Scratchpad&component=Developer%20Tools%3A%20Source%20Editor&component=Developer%20Tools%3A%20Storage%20Inspector&component=Developer%20Tools%3A%20Style%20Editor&component=Developer%20Tools%3A%20Timeline&component=Developer%20Tools%3A%20User%20Stories&component=Developer%20Tools%3A%20Web%20Audio%20Editor&component=Developer%20Tools%3A%20WebGL%20Shader%20Editor&component=Developer%20Tools%3A%20WebIDE&component=Simulator&product=Firefox&product=Firefox%20OS&list_id=11184176).

### CSS

- Unser experimentelles Implementieren von CSS Fonts Level 3 schreitet voran. Neu implementierte Funktionen sind:

  - Der Fallback-Algorithmus des {{cssxref("font-variant-position")}}, der synthetische Alternativen für fehlende Glyphen erstellt, basierend auf den im Font bereitgestellten Subskript- und Superskript-Metriken ([Firefox-Bug 1024804](https://bugzil.la/1024804)).
  - Die `layout.css.font-features.enabled`-Einstellung wurde entfernt, was bedeutet, dass die folgenden Eigenschaften standardmäßig aktiviert sind:

    - Die CSS Font Level 3-Version von {{cssxref("font-variant")}}, die jetzt eine Kurzschreibweise ist.
    - Die Langformen {{cssxref("font-variant-caps")}}, {{cssxref("font-variant-numeric")}}, {{cssxref("font-variant-position")}}, {{cssxref("font-variant-east-asian")}}, {{cssxref("font-variant-ligatures")}}, und {{cssxref("font-variant-alternates")}}.
    - Die Eigenschaften {{cssxref("font-kerning")}} und {{cssxref("font-synthesis")}}
    - Die Eigenschaften {{cssxref("font-feature-settings")}} und {{cssxref("font-language-override")}} sind unverändert. Die vorangestellten Versionen sind noch für eine gewisse Zeit verfügbar, um den Übergang zu erleichtern.

- Der Wert `auto` wurde zu {{cssxref("min-width")}} und {{cssxref("min-height")}} hinzugefügt mit einem anderen Verhalten als beim letzten Mal ([Firefox-Bug 984711](https://bugzil.la/984711) und [Firefox-Bug 1015474](https://bugzil.la/1015474)).
- Eine experimentelle Implementierung, die standardmäßig deaktiviert ist, von den Filter-Funktionswerten der {{cssxref("filter")}}-Eigenschaft wurde implementiert. Sie wird durch die `layout.css.filters.enabled`-Einstellung gesteuert ([Firefox-Bug 948265](https://bugzil.la/948265)).
- Die Startzeit von CSS-Übergängen, die mit Änderungen an {{cssxref("display")}}, {{cssxref("position")}}, {{cssxref("overflow")}} und ähnlichen Eigenschaften zusammen starten, wurde behoben ([Firefox-Bug 625289](https://bugzil.la/625289))

### HTML

_Keine Änderung._

### JavaScript

- Die ES2015-Syntax für [berechnete Eigenschaftsnamen bei Objektliteralen](/de/docs/Web/JavaScript/Reference/Operators/Object_initializer#computed_property_names) wurde implementiert ([Firefox-Bug 924688](https://bugzil.la/924688)).

  - Dies schließt auch [getter](/de/docs/Web/JavaScript/Reference/Functions/get)- und [setter](/de/docs/Web/JavaScript/Reference/Functions/set)-Methodennamen ein ([Firefox-Bug 1048384](https://bugzil.la/1048384)) und kann auch mit [Destrukturierung](/de/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment#computed_object_property_names_and_destructuring) verwendet werden.

- Die ES2015 [Kurzschreibweise für Methodendefinitionen](/de/docs/Web/JavaScript/Reference/Functions/Method_definitions) bei Objekten wurde implementiert ([Firefox-Bug 924672](https://bugzil.la/924672)).
- Die ES2015 `Object`-Methode {{jsxref("Object.assign", "Object.assign()")}} wurde implementiert ([Firefox-Bug 937855](https://bugzil.la/937855)).
- ES2015 [Vorlagenliterale](/de/docs/Web/JavaScript/Reference/Template_literals) und die {{jsxref("String.raw()")}} Methode werden nun unterstützt ([Firefox-Bug 1038259](https://bugzil.la/1038259), [Firefox-Bug 1039774](https://bugzil.la/1039774)).
- Ein neues ES2015-Objekt {{jsxref("WeakSet")}} wurde hinzugefügt ([Firefox-Bug 792439](https://bugzil.la/792439)).
- ES2015 [Symbole](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol) (nur im Nightly-Kanal verfügbar) wurden aktualisiert, um mit den neuesten Spezifikationsänderungen konform zu sein ([Firefox-Bug 1042602](https://bugzil.la/1042602)):

  - Beim Versuch, ein Symbol in eine Zahl zu konvertieren, wird jetzt ein [`TypeError`](/de/docs/Web/JavaScript/Reference/Global_Objects/TypeError) ausgelöst.
  - Bei Verwendung der losen Gleichheit gibt `Object(sym) == sym` jetzt `true` zurück.

- Die experimentelle Methode {{jsxref("TypedArray.prototype.move()")}} (nur in den früheren Nightly- und Aurora-Kanälen verfügbar) wurde durch die nun implementierte Standard-ES2015 {{jsxref("TypedArray.prototype.copyWithin()")}} Methode ersetzt ([Firefox-Bug 1021379](https://bugzil.la/1021379)).
- Im [Strict Modus](/de/docs/Web/JavaScript/Reference/Strict_mode) wird das Festlegen eines [doppelten Eigenschaftsnamen in Objektliteralen](/de/docs/Web/JavaScript/Reference/Operators/Object_initializer#duplicate_property_names) nun keinen `SyntaxError` mehr auslösen, entsprechend der ES2015-Spezifikation ([Firefox-Bug 1041128](https://bugzil.la/1041128)).
- In regulären Ausdrücken (einschließlich `String.replace`) ist der übereinstimmende Text für eine erfasste Gruppe jetzt `undefined` statt dem leeren String, wenn diese erfasste Gruppe nicht aufgerufen wurde, weil Quantoren ihre Ausführung verhindert haben (siehe [Firefox-Bug 369778](https://bugzil.la/369778) und [dieses Beispielcode](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp#firefox-specific_notes)). Beachten Sie, dass `RegExp.$N` aufgrund der Webkompatibilität weiterhin einen leeren String zurückgeben wird ([Firefox-Bug 1053944](https://bugzil.la/1053944)).
- Der ES2015 [Spread-Operator](/de/docs/Web/JavaScript/Reference/Operators/Spread_syntax) wird jetzt bei der [Destrukturierung](/de/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment) unterstützt ([Firefox-Bug 933276](https://bugzil.la/933276)).
- [Destrukturierung](/de/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment) verwendet jetzt das Iterationsprotokoll anstelle des array-ähnlichen Protokolls ([Firefox-Bug 933276](https://bugzil.la/933276)).
- {{jsxref("Proxy.revocable()")}} wurde implementiert ([Firefox-Bug 978279](https://bugzil.la/978279)).

### Schnittstellen/APIs/DOM

- Die Methode {{domxref("Element.matches()")}} wurde hinzugefügt; sie macht, was die nicht-standardisierte `mozMatchesSelector()` gemacht hat ([Firefox-Bug 886308](https://bugzil.la/886308)).
- Die Methode {{domxref("Performance.now()")}} ist jetzt für Webworker verfügbar ([Firefox-Bug 908390](https://bugzil.la/908390)).
- Die nicht-standardisierte Schnittstelle `MozNamedAttrMap` wurde in die standardisierte {{domxref("NamedNodeMap")}} umbenannt und {{domxref("Element.attributes")}} wurde angepasst, um sie zu verwenden ([Firefox-Bug 1055467](https://bugzil.la/1055467)).
- Die Methode {{domxref("Path2D.addPath()")}} wurde hinzugefügt ([Firefox-Bug 985801](https://bugzil.la/985801)).
- Die nicht-standardisierte [Device Storage API](/de/docs/Web/API/Device_Storage_API) ist jetzt auch für privilegierte Apps auf Android aktiviert ([Firefox-Bug 886627](https://bugzil.la/886627)).
- Die Web Crypto API wurde standardmäßig aktiviert ([Firefox-Bug 1074001](https://bugzil.la/1074001)).
- Die Methode {{domxref("MediaStreamTrack.stop()")}} wurde hinzugefügt ([Firefox-Bug 1057955](https://bugzil.la/1057955)).
- Unsere experimentelle Implementierung von EME geht weiter. Die Methode {{domxref("MediaKeySession.getUsableKeyIds()")}} wurde hinzugefügt ([Firefox-Bug 1057171](https://bugzil.la/1057171)).
- Bezüglich [WebRTC](/de/docs/Web/API/WebRTC_API):

  - eine experimentelle Implementierung von {{domxref("RTPSender")}} und {{domxref("RTPReceiver")}}, die mit {{domxref("RTCPeerConnection")}} arbeiten, wurde umgesetzt ([Firefox-Bug 1032835](https://bugzil.la/1032835)).
  - Anwendung-Fensterteilen wurde zu {{domxref("Navigation.getUserMedia()")}} hinzugefügt ([Firefox-Bug 1036653](https://bugzil.la/1036653)), und {{domxref("MediaTrackConstraintSet")}} unterstützt nun `browserWindow` und `scrollWithPage`, was es ermöglicht, den Tab eines Fensters auszuwählen, der geteilt werden soll, ohne den Tab-Auswahl-Dialog anzuzeigen ([Firefox-Bug 1041700](https://bugzil.la/1041700)).
  - `"browser"` ist nun ein akzeptierter Wert von MediaSourceEnum, der zur Definition von Einschränkungen verwendet wird ([Firefox-Bug 1041493](https://bugzil.la/1041493)).

- Für Web-Komponenten wurde das Ereignis-Retargeting jetzt implementiert ([Firefox-Bug 887541](https://bugzil.la/887541)).
- Die Schnittstelle {{domxref("Headers")}} wurde implementiert ([Firefox-Bug 1029620](https://bugzil.la/1029620)). Sie wird von der `dom.fetch.enabled`-Einstellung kontrolliert, die standardmäßig auf `false` gesetzt ist.
- In Bezug auf unsere experimentelle Implementierung der Web-Animationen wurde die Schnittstelle {{domxref("AnimationEffect")}} hinzugefügt, mit der einzelnen Eigenschaft {{domxref("AnimationEffect.name")}} ([Firefox-Bug 1045993](https://bugzil.la/1045993)). Web-Animationen sind nicht standardmäßig aktiviert und werden von der `dom.animations-api.core.enabled`-Einstellung kontrolliert.
- CSSOM View Smooth Scrolling-Methoden wurden hinzugefügt: {{domxref("Window.scroll()")}}, {{domxref("Window.scrollTo()")}}, und {{domxref("Window.scrollBy()")}} ([Firefox-Bug 1022818](https://bugzil.la/1022818)).
- Das nicht-standardisierte `MozSmsSegmentInfo` ist nicht mehr im globalen Objekt sichtbar [Firefox-Bug 916607](https://bugzil.la/916607).

### MathML

_Keine Änderung._

### SVG

_Keine Änderung._

### Audio/Video

_Keine Änderung._

## Sicherheit und Networking

- SSLv3 ist jetzt standardmäßig deaktiviert ([Firefox-Bug 1030963](https://bugzil.la/1030963)).
- Eine Warnung wird an die Konsole gesendet, wenn eine Website die CSS-Direktive `reflected-xss` verwendet ([Firefox-Bug 1045902](https://bugzil.la/1045902)).

## Änderungen für Add-on- und Mozilla-Entwickler

- localstore.rdf wurde entfernt ([Firefox-Bug 559505](https://bugzil.la/559505)).

### Add-on SDK

#### Höhepunkte

- Neue API: [dev/panel](/de/docs/Mozilla/Add-ons/SDK/Low-Level_APIs/dev_panel) ermöglicht es Ihnen, die Firefox-Entwicklerwerkzeuge zu erweitern.
- [jpm](/de/docs/Mozilla/Add-ons/SDK/Tools/jpm) Beta veröffentlicht.
- `"./my-file"` überall als Alias für `require("sdk/self").data.url("my-file")` eingeführt
- Die Möglichkeit hinzugefügt, [Stylesheets an einzelne Tabs anzuhängen](/de/docs/Mozilla/Add-ons/SDK/High-Level_APIs/tabs#attaching_stylesheets).

#### Details

[GitHub-Commits zwischen Firefox 33 und Firefox 34](https://github.com/mozilla/addon-sdk/compare/firefox33...firefox34). Dies wird keine Uplifts enthalten, die nach dem Eintritt dieser Version in Aurora vorgenommen wurden.

[Behobene Bugs zwischen Firefox 33 und Firefox 34](https://bugzilla.mozilla.org/buglist.cgi?resolution=FIXED&chfieldto=2014-09-02&chfield=resolution&query_format=advanced&chfieldfrom=2014-07-21&chfieldvalue=FIXED&bug_status=RESOLVED&bug_status=VERIFIED&bug_status=CLOSED&product=Add-on%20SDK&list_id=11562840). Dies wird keine Uplifts enthalten, die nach dem Eintritt dieser Version in Aurora vorgenommen wurden.

## Ältere Versionen

{{Firefox_for_developers}}
