---
title: Firefox 39 für Entwickler
slug: Mozilla/Firefox/Releases/39
l10n:
  sourceCommit: 1d3d0c10ebf5c8c55f75b9adce74d1e5001866c6
---

Firefox 39 wurde am 2. Juli 2015 veröffentlicht. Dieser Artikel listet wichtige Änderungen auf, die nicht nur für Webentwickler, sondern auch für Firefox- und Gecko-Entwickler sowie für Add-on-Entwickler nützlich sind.

## Änderungen für Webentwickler

### Entwicklertools

Highlights:

- _WebIDE_ unterstützt jetzt das Debuggen von Firefox OS-Geräten über Wi-Fi
- _WebIDE_ unterstützt jetzt Cordova-Projekte
- [Animationsansicht: zurückspulen, vorspulen und zu einer bestimmten Zeit springen](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/work_with_animations/index.html#firefox-39)
- [Der kubische Bézier-Kurven-Editor enthält jetzt 31 Voreinstellungen](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/work_with_animations/index.html#firefox-39)
- [Drag & Drop von Elementen im Seiten-Inspektor](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/examine_and_edit_html/index.html#drag-and-drop)
- [Befehlshistorie der Webkonsole wird jetzt über Sitzungen hinweg beibehalten](https://firefox-source-docs.mozilla.org/devtools-user/web_console/index.html#command-history)
- [$\_ Konsolenbefehl zur Ausgabe des letzten ausgewerteten Ergebnisses](https://firefox-source-docs.mozilla.org/devtools-user/web_console/index.html#helper-commands)
- [Bessere Hervorhebung des Box-Modells für Inline-Elemente](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/examine_and_edit_the_box_model/index.html#firefox-39)

[Alle in Firefox 38 bis Firefox 39 behobenen DevTools-Bugs](https://bugzilla.mozilla.org/buglist.cgi?resolution=FIXED&classification=Client%20Software&query_based_on=devtools_resolved_week&chfieldto=2015-03-31&chfield=resolution&query_format=advanced&chfieldfrom=2015-02-22&chfieldvalue=FIXED&bug_status=RESOLVED&bug_status=VERIFIED&bug_status=CLOSED&component=Developer%20Tools&component=Developer%20Tools%3A%203D%20View&component=Developer%20Tools%3A%20Canvas%20Debugger&component=Developer%20Tools%3A%20Console&component=Developer%20Tools%3A%20Debugger&component=Developer%20Tools%3A%20Framework&component=Developer%20Tools%3A%20Graphic%20Commandline%20and%20Toolbar&component=Developer%20Tools%3A%20Inspector&component=Developer%20Tools%3A%20Memory&component=Developer%20Tools%3A%20Netmonitor&component=Developer%20Tools%3A%20Object%20Inspector&component=Developer%20Tools%3A%20Performance%20Tools%20%28Profiler%2FTimeline%29&component=Developer%20Tools%3A%20Responsive%20Mode&component=Developer%20Tools%3A%20Scratchpad&component=Developer%20Tools%3A%20Source%20Editor&component=Developer%20Tools%3A%20Storage%20Inspector&component=Developer%20Tools%3A%20Style%20Editor&component=Developer%20Tools%3A%20User%20Stories&component=Developer%20Tools%3A%20Web%20Audio%20Editor&component=Developer%20Tools%3A%20WebGL%20Shader%20Editor&component=Developer%20Tools%3A%20WebIDE&product=Firefox&known_name=devtools_resolved_week&list_id=12157026).

### CSS

- Die Unterstützung des {{cssxref("&lt;string&gt;")}} Typs im {{cssxref("list-style-type")}}, sowie in seiner Kurzform {{cssxref("list-style")}}, wurde implementiert ([Firefox-Bug 1144607](https://bugzil.la/1144607)).
- CSS Scroll Snapping wurde implementiert ([Firefox-Bug 945584](https://bugzil.la/945584) und [Firefox-Bug 1138658](https://bugzil.la/1138658)).
- Die Kaskadierung von CSS-Animationen und CSS-Übergängen wurde neu geschrieben, um der neuesten Spezifikation zu entsprechen ([Firefox-Bug 1125455](https://bugzil.la/1125455)).
- Unterstützung für vertikale Skripte mit der {{cssxref("writing-mode")}} ist jetzt standardmäßig in Nightly und Developer Edition aktiviert, allerdings nicht in Firefox Beta und Firefox Release ([Firefox-Bug 1099032](https://bugzil.la/1099032)). Beachten Sie, dass die Implementierung noch nicht vollständig ist und einige Widgets, wie Tabellen, nicht alle Werte befolgen werden.
- CSS {{cssxref("filter")}} verhält sich ähnlich wie position: relative + overflow: hidden ([Firefox-Bug 1125767](https://bugzil.la/1125767)).

### HTML

- Eine neue {{Glossary("ARIA", "ARIA")}} Rolle, `switch`, wird jetzt unterstützt ([Firefox-Bug 1136563](https://bugzil.la/1136563)).
- Unterstützung für `<link rel="preconnect">`, das es ermöglicht, eine zukünftige Verbindung vorwegzunehmen, ohne Informationen preiszugeben, wurde implementiert ([Firefox-Bug 1135160](https://bugzil.la/1135160)).

### JavaScript

- Der [`RegExp` Konstruktor](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp) wirft keinen Fehler mehr, wenn das erste Argument ein `RegExp` ist und das zweite `flags`-Argument vorhanden ist ([Firefox-Bug 1108949](https://bugzil.la/1108949)).
- Die `Object.prototype.__noSuchMethod__`-Eigenschaft ist jetzt veraltet und gibt eine Konsolenwarnung aus (siehe [Firefox-Bug 1140428](https://bugzil.la/1140428) und diese [Plattformankündigung](https://groups.google.com/forum/#!topic/mozilla.dev.platform/0EkHgphxUo8)).
- Die Implementierung des {{jsxref("Proxy")}}-Objekts wurde aktualisiert, um besser mit der ES2015-Spezifikation zu übereinstimmen:
  - Die {{jsxref("Global_Objects/Proxy/Proxy/defineProperty", "defineProperty")}} und {{jsxref("Global_Objects/Proxy/Proxy/set", "set")}} Handler müssen jetzt explizit `true` zurückgeben, um erfolgreich zu sein, sonst wird im strikten Modus eine {{jsxref("TypeError")}}-Ausnahme geworfen ([Firefox-Bug 1132522](https://bugzil.la/1132522)).
  - Wenn das [`window`](/de/docs/Web/API/Window) Objekt als Ziel festgelegt ist, werden diese Handler jetzt einen `TypeError` werfen ([Firefox-Bug 828137](https://bugzil.la/828137)).

- Bei Verwendung von [Pfeilfunktionen](/de/docs/Web/JavaScript/Reference/Functions/Arrow_functions) (`=>`) ist ein Zeilentrennzeichen (`\n`) nach Pfeilfunktionsargumenten (`() \n => {}`) nicht mehr erlaubt ([Firefox-Bug 1141392](https://bugzil.la/1141392)).
- {{jsxref("RegExp.prototype.toString")}} ist jetzt eine generische Funktion ([Firefox-Bug 1079919](https://bugzil.la/1079919)).
- Das nicht-standardmäßige `flags`-Argument von {{jsxref("String.prototype.match()")}}, {{jsxref("String.prototype.search()")}}, und {{jsxref("String.prototype.replace()")}} ist jetzt veraltet und gibt eine Konsolenwarnung aus ([Firefox-Bug 1142351](https://bugzil.la/1142351)).
- Das Verhalten von try/catch in {{jsxref("Object.assign()")}} wurde entfernt, um mit dem neuesten ES2015-Entwurf übereinzustimmen ([Firefox-Bug 1103344](https://bugzil.la/1103344)).

### Schnittstellen/APIs/DOM

- Die experimentelle Methode `CanvasRenderingContext2D.addHitRegion()` akzeptiert jetzt eine `path`-Option, die es Ihnen ermöglicht, Trefferbereiche zu [`Path2D`](/de/docs/Web/API/Path2D)-Objekten hinzuzufügen ([Firefox-Bug 1129147](https://bugzil.la/1129147)).
- Neue Methoden wurden hinzugefügt, um [`FormData`](/de/docs/Web/API/FormData)-Objekte zu manipulieren ([Firefox-Bug 1085283](https://bugzil.la/1085283)) und `FormData` wird jetzt in Web-Workern unterstützt ([Firefox-Bug 739173](https://bugzil.la/739173)).
- Die nicht-standardisierte `XMLHttpRequest.sendAsBinary()`-Methode wurde entfernt.
  Verweisen Sie auf die Dokumentation [Senden und Empfangen binärer Daten](/de/docs/Web/API/XMLHttpRequest_API/Sending_and_Receiving_Binary_Data) für Alternativen ([Firefox-Bug 853162](https://bugzil.la/853162)).
- Fortschritte in unserer experimentellen Implementierung von Web-Animationen: [`AnimationPlayer.startTime`](/de/docs/Web/API/Animation/startTime) ist jetzt beschreibbar ([Firefox-Bug 1073379](https://bugzil.la/1073379)).
- Fortschritte in unserer experimentellen Implementierung von Service Workers: [`Cache`](/de/docs/Web/API/Cache) und [`CacheStorage`](/de/docs/Web/API/CacheStorage) Schnittstellen sind jetzt implementiert ([Firefox-Bug 940273](https://bugzil.la/940273)).
- Die experimentelle [Fetch API](/de/docs/Web/API/Fetch_API) wurde standardmäßig aktiviert ([Firefox-Bug 1133861](https://bugzil.la/1133861)).
- Fortschritte in unserer experimentellen Implementierung von WebGL2: [`WebGLSync`](/de/docs/Web/API/WebGLSync) ist jetzt implementiert ([Firefox-Bug 1048721](https://bugzil.la/1048721)).
- Unterstützung für [`MouseEvent.offsetX`](/de/docs/Web/API/MouseEvent/offsetX) und [`MouseEvent.offsetY`](/de/docs/Web/API/MouseEvent/offsetY) wurde auf dem Desktop hinzugefügt ([Firefox-Bug 69787](https://bugzil.la/69787)), jedoch nicht auf Firefox für Android oder Firefox OS (sie werden in [Firefox 43](/de/docs/Mozilla/Firefox/Releases/43) hinzugefügt).

### MathML

_Keine Änderung._

### SVG

_Keine Änderung._

### Audio/Video

_Keine Änderung._

### Verschiedenes

- [WOFF2](/de/docs/Web/CSS/CSS_fonts/WOFF) Schriftartenunterstützung ist jetzt standardmäßig in der Release-Version von Firefox aktiviert (Beta und Release, zusätzlich zu Nightly und Developer Edition) ([Firefox-Bug 1084026](https://bugzil.la/1084026)).
- Die [`-remote`](https://wiki.mozilla.org/Firefox/CommandLineOptions#-remote_remote_command) Kommandozeilenoption wurde entfernt ([Firefox-Bug 1080319](https://bugzil.la/1080319)).
- Unterstützung für neue [Unicode 8.0 Hautfarben-Emojis](https://www.bbc.co.uk/news/newsbeat-32220611) ([Firefox-Bug 1153460](https://bugzil.la/1153460)).

## Netzwerk

- Unterstützung für SSLv3 wurde komplett entfernt ([Firefox-Bug 1106470](https://bugzil.la/1106470)).

## Sicherheit

_Keine Änderung._

## Änderungen für Add-on- und Mozilla-Entwickler

_Keine Änderung._

## Ältere Versionen

{{Firefox_for_developers}}
