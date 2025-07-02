---
title: Firefox 76 für Entwickler
slug: Mozilla/Firefox/Releases/76
l10n:
  sourceCommit: 1d3d0c10ebf5c8c55f75b9adce74d1e5001866c6
---

Dieser Artikel bietet Informationen über die Änderungen in Firefox 76, die Entwickler betreffen werden. Firefox 76 wurde am [5. Mai 2020](https://wiki.mozilla.org/RapidRelease/Calendar#Future_branch_dates/docs/) veröffentlicht.

**Siehe auch den zugehörigen Hacks-Artikel — [Firefox 76: Audio Worklets und andere Tricks](https://hacks.mozilla.org/2020/05/firefox-76-audio-worklets-and-other-tricks/).**

## Änderungen für Webentwickler

### Entwicklerwerkzeuge

#### Debugger

- Sie können jetzt das Blackboxing von Quellgruppierungen und Ordnern, die im [Quellenlistenbereich](https://firefox-source-docs.mozilla.org/devtools-user/debugger/ui_tour/index.html#source-list-pane) aufgeführt sind, über Kontextmenüoptionen aktivieren/deaktivieren ([Firefox Bug 1118152](https://bugzil.la/1118152)).
- Die _Stack-Trace kopieren_-Kontextmenüoption des [Aufruf-Stack-Bereichs](https://firefox-source-docs.mozilla.org/devtools-user/debugger/ui_tour/index.html#call-stack) kopiert jetzt vollständige URLs, nicht nur Dateinamen ([Firefox Bug 1619039](https://bugzil.la/1619039)).

#### Netzwerküberwachung

- In der Netzwerk-Anfrageliste können Sie jetzt auf einen Spaltenteiler doppelklicken, um die Spalte links davon so zu ändern, dass sie ihrem Inhalt angepasst wird ([Firefox Bug 1615102](https://bugzil.la/1615102)).
- Die Netzwerk-Anfrage _Kopieren > [Kopieren als cURL](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/request_list/index.html#copy-as-curl)_ Kontextmenüoption hat eine neue verfügbare Option, `--globoff`, die das Globbing (Wildcard-Matching) Feature von cURL unterdrückt, wenn die kopierte URL eckige Klammern enthält ([Firefox Bug 1549773](https://bugzil.la/1549773)).
- Der _Nachrichten_-Reiter des Detailbereichs für [Websocket-Anfragen](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/inspecting_web_sockets/index.html) hat einen neuen Filter — _Control_ — zum Anzeigen von Steuerrahmen, und die Filter sind jetzt in einer Auswahlliste gruppiert ([Firefox Bug 1566780](https://bugzil.la/1566780)).

#### Webkonsole

- Im [Mehrzeilenmodus](https://firefox-source-docs.mozilla.org/devtools-user/web_console/the_command_line_interpreter/index.html#multi-line-mode) werden Code-Snippets, die länger als fünf Zeilen sind, auf fünf Zeilen verkürzt, mit einem Ausklapp-Dreieck (oder "Twisty") davor und einem Auslassungszeichen (…). Sie können überall in diesem Bereich klicken, um den Code anzuzeigen, und erneut in diesen Bereich klicken, um ihn einzuklappen ([Firefox Bug 1578212](https://bugzil.la/1578212)).
- DOM-Element-Referenzen, die in die Konsole ausgegeben werden, haben jetzt die Kontextmenüoption "Im Inspektor anzeigen", die das Element im HTML-Bereich des [Seiteninspektors](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/index.html) zeigt ([Firefox Bug 1612276](https://bugzil.la/1612276)).

#### Remote-Debugging

- Aufgrund von Unterschieden in den DevTools-Versionen ist es nicht möglich, Veröffentlichungen von Firefox für Android, die auf Version 68 basieren, von Desktop-Firefox-Versionen 69 oder höher zu debuggen. Beim Versuch dies zu tun, zeigt der Desktop-Browser von Firefox jetzt eine Nachricht an, die den Benutzer über dieses Problem informiert und mögliche nächste Schritte anbietet ([Firefox Bug 1625906](https://bugzil.la/1625906)). Siehe [Verbindung zu Firefox für Android 68](https://firefox-source-docs.mozilla.org/devtools-user/about_colon_debugging/index.html#connection-to-firefox-for-android-68) für weitere Informationen.

### HTML

- Die {{HTMLElement("input")}}-Element-Attribute [`min`](/de/docs/Web/HTML/Reference/Elements/input#min) und [`max`](/de/docs/Web/HTML/Reference/Elements/input#max) funktionieren jetzt korrekt, wenn der Wert von `min` größer ist als der von `max` für Steuerungstypen, deren Werte periodisch sind (das heißt, Werte, die an einem bestimmten Punkt umschlagen). Dies ist besonders hilfreich, zum Beispiel bei Datums- und Zeiteingaben, bei denen Sie einen Zeitbereich von 23 Uhr bis 2 Uhr morgens angeben möchten ([Firefox Bug 1608010](https://bugzil.la/1608010)).

### CSS

- Firefox unterstützt jetzt [CSS-Farben Level 4 Systemfarben](https://drafts.csswg.org/css-color-4/#typedef-system-color) ([Firefox Bug 1590894](https://bugzil.la/1590894)).

### SVG

_Keine Änderungen._

### JavaScript

- Die Optionen `numberingSystem` und `calendar` der Konstruktoren {{jsxref("Intl.NumberFormat")}}, {{jsxref("Intl.DateTimeFormat")}}, und {{jsxref("Intl.RelativeTimeFormat")}} sind jetzt standardmäßig aktiviert ([Firefox Bug 1625975](https://bugzil.la/1625975)).

### APIs

#### Neue APIs

- Firefox unterstützt jetzt standardmäßig Audio-Worklets mit Unterstützung für [`AudioContext.audioWorklet`](/de/docs/Web/API/BaseAudioContext/audioWorklet), das Ihnen ermöglicht, die Schnittstellen [`AudioWorkletProcessor`](/de/docs/Web/API/AudioWorkletProcessor) und [`AudioWorkletNode`](/de/docs/Web/API/AudioWorkletNode) zu verwenden, um Audio in Echtzeit abseits des Haupt-Threads zu verarbeiten ([Firefox Bug 1616725](https://bugzil.la/1616725)).

#### DOM

- UI-bezogene Elemente im `windowFeatures`-Parameter von [`window.open()`](/de/docs/Web/API/Window/open) können nicht länger die Sichtbarkeit jeder UI-Komponente separat steuern, sondern werden zu einer Bedingung, ob ein Popup geöffnet wird oder nicht ([Firefox Bug 1507375](https://bugzil.la/1507375)).
- Versuche, mit Methoden wie [`location.href`](/de/docs/Web/API/Location/href) oder [`<meta http-equiv="refresh">`](/de/docs/Web/HTML/Reference/Elements/meta) zu einem unbekannten Protokoll zu navigieren, werden jetzt blockiert (siehe [Firefox Bug 1528305](https://bugzil.la/1528305)).
- Der Konstruktor [`IntersectionObserver()`](/de/docs/Web/API/IntersectionObserver/IntersectionObserver) akzeptiert jetzt ein [`Document`](/de/docs/Web/API/Document)-Objekt als `root`, sowie ein [`Element`](/de/docs/Web/API/Element)-Objekt ([Firefox Bug 1623623](https://bugzil.la/1623623)). Dies ermöglicht es Ihnen, explizit das gesamte Inhaltsbereich eines Fensters als Schnittpunktsgrenzen zu verwenden.
- Die [Fetch API](/de/docs/Web/API/Fetch_API) unterstützt jetzt das `audioworklet` [`destination`](/de/docs/Web/API/Request/destination) für Anfragen. Dies führt dazu, dass empfangene Daten an ein [`AudioWorklet`](/de/docs/Web/API/AudioWorklet) übermittelt werden ([Firefox Bug 1402784](https://bugzil.la/1402784)).

#### Entfernungen

- Wir haben das [Window `appinstalled`-Event](/de/docs/Web/API/Window/appinstalled_event) vollständig entfernt (und die zugehörige `Window.onappinstalled`-Handler-Eigenschaft) — diese wurden nie ausgeliefert und sind nun aus der [Web Manifest-Spezifikation](https://w3c.github.io/manifest/) entfernt ([Firefox Bug 1625384](https://bugzil.la/1625384)).

### HTTP

_Keine Änderungen._

### Sicherheit

_Keine Änderungen._

### WebDriver-Konformität (Marionette)

- Firefox meldet nicht mehr `false` für `navigator.webdriver`, wenn es für Automatisierung/Testen über geckodriver verwendet wird ([Firefox Bug 1632556](https://bugzil.la/1632556)).

## Änderungen für Add-on-Entwickler

_Keine Änderungen._

## Ältere Versionen

{{Firefox_for_developers}}
