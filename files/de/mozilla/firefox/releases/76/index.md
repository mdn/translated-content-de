---
title: Firefox 76 für Entwickler
slug: Mozilla/Firefox/Releases/76
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{FirefoxSidebar}}

Dieser Artikel bietet Informationen über die Änderungen in Firefox 76, die Entwickler betreffen werden. Firefox 76 wurde am [5. Mai 2020](https://wiki.mozilla.org/RapidRelease/Calendar#Future_branch_dates/docs/) veröffentlicht.

**Siehe auch den begleitenden Hacks-Artikel — [Firefox 76: Audio-Worklets und andere Tricks](https://hacks.mozilla.org/2020/05/firefox-76-audio-worklets-and-other-tricks/).**

## Änderungen für Webentwickler

### Entwicklerwerkzeuge

#### Debugger

- Sie können jetzt das Blackboxing von Quellgruppen und -ordnern, die im [Source List Pane](https://firefox-source-docs.mozilla.org/devtools-user/debugger/ui_tour/index.html#source-list-pane) aufgeführt sind, über Kontextmenüoptionen aktivieren/deaktivieren ([Firefox-Bug 1118152](https://bugzil.la/1118152)).
- Die _Copy stack trace_ Kontextmenüoption im [Call stack Pane](https://firefox-source-docs.mozilla.org/devtools-user/debugger/ui_tour/index.html#call-stack) kopiert jetzt vollständige URLs, nicht nur Dateinamen ([Firefox-Bug 1619039](https://bugzil.la/1619039)).

#### Netzwerk-Monitor

- In der Netzwerk-Anfrageliste können Sie jetzt einen Spaltenteiler doppelklicken, um die Spalte links davon so zu ändern, dass ihr Inhalt passt ([Firefox-Bug 1615102](https://bugzil.la/1615102)).
- Die Netzwerk-Anfrage _Copy > [Copy as cURL](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/request_list/index.html#copy-as-curl)_ Kontextmenüoption hat eine neue Option verfügbar, `--globoff`, die das Globbing (Wildcard-Matching) von cURL unterdrückt, wenn die kopierte URL eckige Klammern enthält ([Firefox-Bug 1549773](https://bugzil.la/1549773)).
- Der _Messages_ Tab des Detailbereichs für [Websocket-Anfragen](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/inspecting_web_sockets/index.html) hat einen neuen Filter — _Control_ — zur Anzeige von Steuerungsrahmen, und die Filter sind jetzt zu einer Auswahlliste gruppiert ([Firefox-Bug 1566780](https://bugzil.la/1566780)).

#### Web-Konsole

- Im [Multi-Line-Modus](https://firefox-source-docs.mozilla.org/devtools-user/web_console/the_command_line_interpreter/index.html#multi-line-mode) werden Code-Schnipsel, die länger als fünf Zeilen sind, auf fünf Zeilen abgekürzt, vorangestellt mit einem Offenlegungspfeil (oder "twisty") und gefolgt von einem Auslassungszeichen (…). Sie können irgendwo in diesem Bereich klicken, um den Code anzuzeigen, und erneut in diesem Bereich klicken, um ihn einzuklappen ([Firefox-Bug 1578212](https://bugzil.la/1578212)).
- DOM-Element-Referenzen, die in die Konsole ausgegeben werden, haben jetzt eine "Im Inspektor anzeigen" Kontextmenüoption, die das Element im HTML-Bereich des [Seiteninspektors](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/index.html) anzeigt ([Firefox-Bug 1612276](https://bugzil.la/1612276)).

#### Remote-Debugging

- Aufgrund von Unterschieden zwischen DevTools-Versionen ist es nicht möglich, Versionen von Firefox für Android, die auf Version 68 basieren, mit Desktop-Firefox-Versionen ab 69 zu debuggen. Der Firefox-Desktop-Browser zeigt jetzt eine Nachricht, die den Benutzer über dieses Problem informiert und mögliche nächste Schritte vorschlägt, wenn ein solcher Versuch unternommen wird ([Firefox-Bug 1625906](https://bugzil.la/1625906)). Siehe [Verbindung zu Firefox für Android 68](https://firefox-source-docs.mozilla.org/devtools-user/about_colon_debugging/index.html#connection-to-firefox-for-android-68) für weitere Informationen.

### HTML

- Die {{HTMLElement("input")}}-Element-Attribute [`min`](/de/docs/Web/HTML/Reference/Elements/input#min) und [`max`](/de/docs/Web/HTML/Reference/Elements/input#max) funktionieren jetzt korrekt, wenn der Wert von `min` größer ist als der Wert von `max` bei Steuerelementtypen, deren Werte periodisch sind (d.h. Werte, die sich an einem bestimmten Punkt wiederholen). Dies ist besonders hilfreich, z.B. bei Datums- und Zeitangaben, bei denen Sie möglicherweise einen Zeitraum von 23 Uhr bis 2 Uhr morgens festlegen möchten ([Firefox-Bug 1608010](https://bugzil.la/1608010)).

### CSS

- Firefox unterstützt jetzt [CSS Colors Level 4 Systemfarben](https://www.w3.org/TR/css-color-4/#typedef-system-color) ([Firefox-Bug 1590894](https://bugzil.la/1590894)).

### SVG

_Keine Änderungen._

### JavaScript

- Die Optionen `numberingSystem` und `calendar` der {{jsxref("Intl.NumberFormat")}}, {{jsxref("Intl.DateTimeFormat")}} und {{jsxref("Intl.RelativeTimeFormat")}} Konstruktoren sind jetzt standardmäßig aktiviert ([Firefox-Bug 1625975](https://bugzil.la/1625975)).

### APIs

#### Neue APIs

- Firefox unterstützt jetzt standardmäßig Audio-Worklets, mit Unterstützung für [`AudioContext.audioWorklet`](/de/docs/Web/API/BaseAudioContext/audioWorklet), die es Ihnen ermöglichen, die Schnittstellen [`AudioWorkletProcessor`](/de/docs/Web/API/AudioWorkletProcessor) und [`AudioWorkletNode`](/de/docs/Web/API/AudioWorkletNode) zu verwenden, um Audio in Echtzeit außerhalb des Haupt-Threads zu verarbeiten ([Firefox-Bug 1616725](https://bugzil.la/1616725)).

#### DOM

- Elemente, die UI-Teile betreffen, im `windowFeatures` Parameter von [`window.open()`](/de/docs/Web/API/Window/open) können nicht mehr die Sichtbarkeit jedes UI-Teils einzeln steuern, sondern werden zu einer Bedingung dafür, ob ein Popup geöffnet wird oder nicht ([Firefox-Bug 1507375](https://bugzil.la/1507375)).
- Versuche, zu einem unbekannten Protokoll zu navigieren, indem Methoden wie [`location.href`](/de/docs/Web/API/Location/href) oder [`<meta http-equiv="refresh">`](/de/docs/Web/HTML/Reference/Elements/meta) verwendet werden, sind jetzt blockiert (siehe [Firefox-Bug 1528305](https://bugzil.la/1528305).
- Der [`IntersectionObserver()`](/de/docs/Web/API/IntersectionObserver/IntersectionObserver) Konstruktor akzeptiert jetzt ein [`Document`](/de/docs/Web/API/Document) Objekt als `root` sowie ein [`Element`](/de/docs/Web/API/Element) Objekt ([Firefox-Bug 1623623](https://bugzil.la/1623623)). Dadurch können Sie explizit den gesamten Inhaltsbereich eines Fensters als Schnittpunktgrenzen verwenden.
- Die [Fetch API](/de/docs/Web/API/Fetch_API) unterstützt jetzt das `audioworklet` [`destination`](/de/docs/Web/API/Request/destination) für Anfragen. Dies führt dazu, dass empfangene Daten an ein [`AudioWorklet`](/de/docs/Web/API/AudioWorklet) übergeben werden ([Firefox-Bug 1402784](https://bugzil.la/1402784)).

#### Entfernt

- Wir haben das [Window `appinstalled` Event](/de/docs/Web/API/Window/appinstalled_event) (und die zugehörige `Window.onappinstalled` Handler-Eigenschaft) vollständig entfernt — diese wurden nie ausgeliefert und sind nun aus der [Web Manifest Spezifikation](https://w3c.github.io/manifest/) entfernt worden ([Firefox-Bug 1625384](https://bugzil.la/1625384)).

### HTTP

_Keine Änderungen._

### Sicherheit

_Keine Änderungen._

### WebDriver-Konformität (Marionette)

- Firefox meldet nicht mehr `false` für `navigator.webdriver`, wenn es für Automation / Testing über den geckodriver verwendet wird ([Firefox-Bug 1632556](https://bugzil.la/1632556)).

## Änderungen für Add-on-Entwickler

_Keine Änderungen._

## Ältere Versionen

{{Firefox_for_developers}}
