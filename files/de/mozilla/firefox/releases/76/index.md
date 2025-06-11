---
title: Firefox 76 für Entwickler
slug: Mozilla/Firefox/Releases/76
l10n:
  sourceCommit: 636b90011532e3fd2cf9333aaf1754fdc8de7938
---

{{FirefoxSidebar}}

Dieser Artikel liefert Informationen über die Änderungen in Firefox 76, die Entwickler beeinflussen werden. Firefox 76 wurde am [5. Mai 2020](https://wiki.mozilla.org/RapidRelease/Calendar#Future_branch_dates/docs/) veröffentlicht.

**Sehen Sie auch den begleitenden Hacks-Post — [Firefox 76: Audio-Arbeitsaufträge und andere Tricks](https://hacks.mozilla.org/2020/05/firefox-76-audio-worklets-and-other-tricks/).**

## Änderungen für Webentwickler

### Entwicklerwerkzeuge

#### Debugger

- Sie können jetzt das Blackboxing von Quellgruppen und -ordnern, die im [Quellenlistenbereich](https://firefox-source-docs.mozilla.org/devtools-user/debugger/ui_tour/index.html#source-list-pane) aufgeführt sind, über Kontextmenüoptionen aktivieren/deaktivieren ([Firefox Bug 1118152](https://bugzil.la/1118152)).
- Die _Stack-Trace kopieren_-Option im Kontextmenü des [Call-Stack-Bereichs](https://firefox-source-docs.mozilla.org/devtools-user/debugger/ui_tour/index.html#call-stack) kopiert jetzt vollständige URLs, nicht nur Dateinamen ([Firefox Bug 1619039](https://bugzil.la/1619039)).

#### Netzwerküberwachung

- In der Netzwerkanforderungsliste können Sie nun einen Spaltentrenner doppelklicken, um die Spalte links davon so zu verkleinern, dass sie zu ihrem Inhalt passt ([Firefox Bug 1615102](https://bugzil.la/1615102)).
- Die Netzwerkanforderung _Kopieren > [Als cURL kopieren](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/request_list/index.html#copy-as-curl)_ Kontextmenüoption hat eine neue Option `--globoff`, die cURLs Globbing- (Wildcard-Matching-)Funktion unterdrückt, wenn die kopierte URL eckige Klammern enthält ([Firefox Bug 1549773](https://bugzil.la/1549773)).
- Die _Nachrichten_-Registerkarte des Detailbereichs für [WebSocket-Anforderungen](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/inspecting_web_sockets/index.html) hat einen neuen Filter — _Kontrolle_ — für die Anzeige von Steuerungsrahmen, und die Filter sind jetzt in einer Auswahlliste gruppiert ([Firefox Bug 1566780](https://bugzil.la/1566780)).

#### Webkonsole

- Im [Mehrzeilenmodus](https://firefox-source-docs.mozilla.org/devtools-user/web_console/the_command_line_interpreter/index.html#multi-line-mode) werden Code-Snippets, die länger als fünf Zeilen sind, auf fünf Zeilen verkürzt, gefolgt von einem Aufdeckungssymbol (oder "Twisty") und einem Auslassungszeichen (…). Sie können in diesen Bereich klicken, um den Code anzuzeigen, und erneut klicken, um ihn wieder zu schließen ([Firefox Bug 1578212](https://bugzil.la/1578212)).
- DOM-Elementreferenzen, die in die Konsole ausgegeben werden, haben nun eine "Im Inspektor anzeigen" Kontextmenüoption, die das Element im HTML-Bereich des [Seiteninspektors](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/index.html) anzeigt ([Firefox Bug 1612276](https://bugzil.la/1612276)).

#### Fern-Debugging

- Aufgrund von Unterschieden in den DevTools-Versionen ist es nicht möglich, Versionen von Firefox für Android zu debuggen, die auf Version 68 basieren, von Desktop-Firefox-Versionen 69 oder höher. Beim Versuch, dies zu tun, zeigt der Firefox-Desktop-Browser jetzt eine Nachricht an, die den Benutzer über dieses Problem informiert und mögliche nächste Schritte anbietet ([Firefox Bug 1625906](https://bugzil.la/1625906)). Weitere Informationen finden Sie unter [Verbindung zu Firefox für Android 68](https://firefox-source-docs.mozilla.org/devtools-user/about_colon_debugging/index.html#connection-to-firefox-for-android-68).

### HTML

- Die {{HTMLElement("input")}}-Elemente [`min`](/de/docs/Web/HTML/Reference/Elements/input#min) und [`max`](/de/docs/Web/HTML/Reference/Elements/input#max) Attributen funktionieren jetzt korrekt, wenn der `min`-Wert größer ist als der `max`-Wert für Steuerungstypen, deren Werte periodisch sind (das heißt, Werte, die sich irgendwann umkehren). Dies ist besonders hilfreich, zum Beispiel bei Datum- und Uhrzeiteingaben, wo Sie einen Zeitbereich von 23 Uhr bis 2 Uhr angeben möchten ([Firefox Bug 1608010](https://bugzil.la/1608010)).

### CSS

- Firefox unterstützt jetzt [CSS-Farben Level 4 Systemfarben](https://drafts.csswg.org/css-color-4/#typedef-system-color) ([Firefox Bug 1590894](https://bugzil.la/1590894)).

### SVG

_Keine Änderungen._

### JavaScript

- Die Optionen `numberingSystem` und `calendar` der Konstruktoren {{jsxref("Intl.NumberFormat")}}, {{jsxref("Intl.DateTimeFormat")}} und {{jsxref("Intl.RelativeTimeFormat")}} sind jetzt standardmäßig aktiviert ([Firefox Bug 1625975](https://bugzil.la/1625975)).

### APIs

#### Neue APIs

- Firefox unterstützt jetzt standardmäßig Audio-Worklets mit Unterstützung für [`AudioContext.audioWorklet`](/de/docs/Web/API/BaseAudioContext/audioWorklet), wodurch Sie die Schnittstellen [`AudioWorkletProcessor`](/de/docs/Web/API/AudioWorkletProcessor) und [`AudioWorkletNode`](/de/docs/Web/API/AudioWorkletNode) verwenden können, um Audio in Echtzeit außerhalb des Haupt-Threads zu verarbeiten ([Firefox Bug 1616725](https://bugzil.la/1616725)).

#### DOM

- UI-bezogene Elemente im `windowFeatures`-Parameter von [`window.open()`](/de/docs/Web/API/Window/open) können nicht länger die Sichtbarkeit jedes UI-Teils separat steuern, sondern werden zu einer Bedingung dafür, ob ein Popup geöffnet wird oder nicht ([Firefox Bug 1507375](https://bugzil.la/1507375)).
- Versuche, zu einem unbekannten Protokoll mit Methoden wie [`location.href`](/de/docs/Web/API/Location/href) oder [`<meta http-equiv="refresh">`](/de/docs/Web/HTML/Reference/Elements/meta) zu navigieren, werden jetzt blockiert (siehe [Firefox Bug 1528305](https://bugzil.la/1528305)).
- Der [`IntersectionObserver()`](/de/docs/Web/API/IntersectionObserver/IntersectionObserver) Konstruktor akzeptiert jetzt ein [`Document`](/de/docs/Web/API/Document) Objekt als seinen `root`, sowie ein [`Element`](/de/docs/Web/API/Element) Objekt ([Firefox Bug 1623623](https://bugzil.la/1623623)). Dadurch können Sie explizit den gesamten Inhaltsbereich eines Fensters als Intersektionsgrenze verwenden.
- Die [Fetch API](/de/docs/Web/API/Fetch_API) unterstützt nun das `audioworklet` [`Ziel`](/de/docs/Web/API/Request/destination) für Anfragen. Dies führt dazu, dass empfangene Daten an ein [`AudioWorklet`](/de/docs/Web/API/AudioWorklet) gesendet werden ([Firefox Bug 1402784](https://bugzil.la/1402784)).

#### Entfernungen

- Wir haben das [Window `appinstalled` Event](/de/docs/Web/API/Window/appinstalled_event) (und die zugehörige `Window.onappinstalled` Handler-Eigenschaft) komplett entfernt — diese wurden nie veröffentlicht und sind nun aus der [Web Manifest Spezifikation](https://w3c.github.io/manifest/) entfernt ([Firefox Bug 1625384](https://bugzil.la/1625384)).

### HTTP

_Keine Änderungen._

### Sicherheit

_Keine Änderungen._

### WebDriver-Konformität (Marionette)

- Firefox gibt nicht mehr `false` für `navigator.webdriver` zurück, wenn es für Automatisierung / Tests per Geckodriver verwendet wird ([Firefox Bug 1632556](https://bugzil.la/1632556)).

## Änderungen für Add-on-Entwickler

_Keine Änderungen._

## Ältere Versionen

{{Firefox_for_developers}}
