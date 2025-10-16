---
title: Firefox 76 Versionshinweise für Entwickler
short-title: Firefox 76
slug: Mozilla/Firefox/Releases/76
l10n:
  sourceCommit: 61912f53d01e935aea926a2226130fb4587414a9
---

Dieser Artikel bietet Informationen über die Änderungen in Firefox 76, die Entwickler betreffen. Firefox 76 wurde am [5. Mai 2020](https://wiki.mozilla.org/RapidRelease/Calendar#Future_branch_dates/docs/) veröffentlicht.

**Sehen Sie sich auch den begleitenden Hacks-Artikel an — [Firefox 76: Audio-Arbeitsrapper und andere Tricks](https://hacks.mozilla.org/2020/05/firefox-76-audio-worklets-and-other-tricks/).**

## Änderungen für Webentwickler

### Entwicklertools

#### Debugger

- Sie können jetzt die Schwarzblenden von Quellgruppen und Ordnern, die im [Quellenlistenbereich](https://firefox-source-docs.mozilla.org/devtools-user/debugger/ui_tour/index.html#source-list-pane) aufgeführt sind, über Kontextmenüoptionen aktivieren/deaktivieren ([Firefox-Bug 1118152](https://bugzil.la/1118152)).
- Die Option _Stack-Trace kopieren_ im Kontextmenü des [Call-Stack-Bereichs](https://firefox-source-docs.mozilla.org/devtools-user/debugger/ui_tour/index.html#call-stack) kopiert jetzt vollständige URLs, nicht nur Dateinamen ([Firefox-Bug 1619039](https://bugzil.la/1619039)).

#### Netzwerküberwachung

- In der Netzwerkanforderungsliste können Sie jetzt einen Spaltenteiler doppelklicken, um die links von ihm liegende Spalte an ihren Inhalt anzupassen ([Firefox-Bug 1615102](https://bugzil.la/1615102)).
- Die Netzwerkanforderungsoption _Kopieren > [Als cURL kopieren](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/request_list/index.html#copy-as-curl)_ hat eine neue verfügbare Option, `--globoff`, die die Globbing-Funktion (Wildcard-Matching) von cURL unterdrückt, wenn die kopierte URL eckige Klammern enthält ([Firefox-Bug 1549773](https://bugzil.la/1549773)).
- Der Tab _Nachrichten_ im Detailbereich für [WebSocket-Anfragen](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/inspecting_web_sockets/index.html) hat einen neuen Filter — _Steuerung_ — zum Anzeigen von Steuerungsrahmen, und die Filter sind jetzt in einer Auswahlliste gruppiert ([Firefox-Bug 1566780](https://bugzil.la/1566780)).

#### Webkonsole

- Im [Mehrzeilenmodus](https://firefox-source-docs.mozilla.org/devtools-user/web_console/the_command_line_interpreter/index.html#multi-line-mode) werden Codeschnipsel, die länger als fünf Zeilen sind, auf fünf Zeilen gekürzt, denen ein Entdeckungspfeil (oder „Twisty“) vorausgeht und von Auslassungspunkten (…) gefolgt wird. Sie können in diesem Bereich klicken, um den Code anzuzeigen, und erneut klicken, um ihn zu reduzieren ([Firefox-Bug 1578212](https://bugzil.la/1578212)).
- In die Konsole ausgegebene DOM-Elementreferenzen haben jetzt eine Kontextmenüoption „Im Inspektor anzeigen“, die das Element im HTML-Bereich des [Seiteninspektors](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/index.html) anzeigt ([Firefox-Bug 1612276](https://bugzil.la/1612276)).

#### Fernwartung

- Aufgrund von Unterschieden in den Versionen der Entwicklertools ist es nicht möglich, Versionen von Firefox für Android zu debuggen, die auf Version 68 basieren, von Desktop-Firefox-Versionen 69 oder höher. Beim Versuch dies zu tun, zeigt der Firefox Desktop-Browser jetzt eine Nachricht an, die den Benutzer über dieses Problem informiert und mögliche nächste Schritte anbietet ([Firefox-Bug 1625906](https://bugzil.la/1625906)). Siehe [Verbindung zu Firefox für Android 68](https://firefox-source-docs.mozilla.org/devtools-user/about_colon_debugging/index.html#connection-to-firefox-for-android-68) für weitere Informationen.

### HTML

- Die Attribute [`min`](/de/docs/Web/HTML/Reference/Elements/input#min) und [`max`](/de/docs/Web/HTML/Reference/Elements/input#max) des {{HTMLElement("input")}}-Elements funktionieren jetzt korrekt, wenn der Wert von `min` größer ist als der Wert von `max` für Kontrolltypen, deren Werte periodisch sind (d.h. Werte, die sich an einem bestimmten Punkt wiederholen). Dies ist besonders hilfreich bei Datums- und Zeiteingaben, wo Sie möglicherweise einen Zeitbereich von 23 bis 2 Uhr angeben möchten ([Firefox-Bug 1608010](https://bugzil.la/1608010)).

### CSS

- Firefox unterstützt nun [CSS-Farben Level 4 Systemfarben](https://drafts.csswg.org/css-color-4/#typedef-system-color) ([Firefox-Bug 1590894](https://bugzil.la/1590894)).

### SVG

_Keine Änderungen._

### JavaScript

- Die `numberingSystem`- und `calendar`-Optionen der Konstruktoren {{jsxref("Intl.NumberFormat")}}, {{jsxref("Intl.DateTimeFormat")}} und {{jsxref("Intl.RelativeTimeFormat")}} sind jetzt standardmäßig aktiviert ([Firefox-Bug 1625975](https://bugzil.la/1625975)).

### APIs

#### Neue APIs

- Firefox unterstützt jetzt standardmäßig Audio-Arbeitsrapper mit Unterstützung für [`AudioContext.audioWorklet`](/de/docs/Web/API/BaseAudioContext/audioWorklet), wodurch Sie die Schnittstellen [`AudioWorkletProcessor`](/de/docs/Web/API/AudioWorkletProcessor) und [`AudioWorkletNode`](/de/docs/Web/API/AudioWorkletNode) verwenden können, um Audio in Echtzeit außerhalb des Haupt-Threads zu verarbeiten ([Firefox-Bug 1616725](https://bugzil.la/1616725)).

#### DOM

- Elemente, die mit den Benutzeroberflächenteilen im `windowFeatures`-Parameter von [`window.open()`](/de/docs/Web/API/Window/open) zusammenhängen, können nicht mehr die Sichtbarkeit jedes UI-Teils separat steuern, sondern werden zu einer Bedingung, ob ein Popup geöffnet werden soll oder nicht ([Firefox-Bug 1507375](https://bugzil.la/1507375)).
- Versuche, zu einem unbekannten Protokoll mit Methoden wie [`location.href`](/de/docs/Web/API/Location/href) oder [`<meta http-equiv="refresh">`](/de/docs/Web/HTML/Reference/Elements/meta) zu navigieren, werden jetzt blockiert (siehe [Firefox-Bug 1528305](https://bugzil.la/1528305)).
- Der Konstruktor [`IntersectionObserver()`](/de/docs/Web/API/IntersectionObserver/IntersectionObserver) akzeptiert jetzt ein [`Document`](/de/docs/Web/API/Document)-Objekt als `root`, sowie ein [`Element`](/de/docs/Web/API/Element)-Objekt ([Firefox-Bug 1623623](https://bugzil.la/1623623)). Dadurch können Sie explizit den gesamten Inhaltsbereich eines Fensters als Schnittgrenzen verwenden.
- Die [Fetch-API](/de/docs/Web/API/Fetch_API) unterstützt jetzt das `audioworklet`-[`destination`](/de/docs/Web/API/Request/destination) für Anfragen. Dadurch werden empfangene Daten an ein [`AudioWorklet`](/de/docs/Web/API/AudioWorklet) gesendet ([Firefox-Bug 1402784](https://bugzil.la/1402784)).

#### Entfernungen

- Wir haben das [Window `appinstalled`-Ereignis](/de/docs/Web/API/Window/appinstalled_event) (und die dazugehörige `Window.onappinstalled`-Handler-Eigenschaft) vollständig entfernt — diese wurden nie ausgeliefert und sind jetzt aus der [Web-Manifest-Spezifikation](https://w3c.github.io/manifest/) entfernt worden ([Firefox-Bug 1625384](https://bugzil.la/1625384)).

### HTTP

_Keine Änderungen._

### Sicherheit

_Keine Änderungen._

### WebDriver-Konformität (Marionette)

- Firefox meldet nicht mehr `false` für `navigator.webdriver`, wenn er für die Automatisierung/Tests über geckodriver verwendet wird ([Firefox-Bug 1632556](https://bugzil.la/1632556)).

## Änderungen für Add-on-Entwickler

_Keine Änderungen._
