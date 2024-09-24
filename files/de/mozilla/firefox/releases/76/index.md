---
title: Firefox 76 für Entwickler
slug: Mozilla/Firefox/Releases/76
l10n:
  sourceCommit: 1822cdf5a86574429c4c49883a402663ef16a4ef
---

{{FirefoxSidebar}}

Dieser Artikel bietet Informationen über die Änderungen in Firefox 76, die Entwickler betreffen. Firefox 76 wurde am [5. Mai 2020](https://wiki.mozilla.org/RapidRelease/Calendar#Future_branch_dates/docs/) veröffentlicht.

**Siehe auch den begleitenden Hacks-Post — [Firefox 76: Audio-Worklets und andere Tricks](https://hacks.mozilla.org/2020/05/firefox-76-audio-worklets-and-other-tricks/).**

## Änderungen für Webentwickler

### Entwicklertools

#### Debugger

- Sie können jetzt das Blackboxing von Quellgruppen und Ordnern, die im [Quellenlistenbereich](https://firefox-source-docs.mozilla.org/devtools-user/debugger/ui_tour/index.html#source-list-pane) aufgeführt sind, über die Kontextmenüoptionen ein- und ausschalten ([Firefox-Bug 1118152](https://bugzil.la/1118152)).
- Die Kontextmenüoption _Stack Trace kopieren_ im [Stack-Trace-Bereich](https://firefox-source-docs.mozilla.org/devtools-user/debugger/ui_tour/index.html#call-stack) kopiert jetzt vollständige URLs, nicht nur Dateinamen ([Firefox-Bug 1619039](https://bugzil.la/1619039)).

#### Netzwerkmonitor

- In der Netzwerkanfrageliste können Sie jetzt einen Spaltentrenner doppelklicken, um die linke Spalte so zu vergrößern, dass sie ihren Inhalt anpasst ([Firefox-Bug 1615102](https://bugzil.la/1615102)).
- Die Netzwerk-Anfrage _Kopieren > [Als cURL kopieren](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/request_list/index.html#copy-as-curl)_ Kontextmenüoption hat eine neue Option `--globoff`, die das Globing (Wildcard-Abgleich) von cURL unterdrückt, wenn die kopierte URL eckige Klammerzeichen enthält ([Firefox-Bug 1549773](https://bugzil.la/1549773)).
- Der _Nachrichten_-Reiter im Detailbereich für [WebSocket-Anfragen](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/inspecting_web_sockets/index.html) hat einen neuen Filter — _Steuerung_ — zum Anzeigen von Steuerrahmen, und die Filter sind jetzt in einer Auswahlliste gruppiert ([Firefox-Bug 1566780](https://bugzil.la/1566780)).

#### Webkonsole

- Im [Mehrzeilenmodus](https://firefox-source-docs.mozilla.org/devtools-user/web_console/the_command_line_interpreter/index.html#multi-line-mode) werden Codeabschnitte, die länger als fünf Zeilen sind, auf fünf Zeilen gekürzt, angeführt von einem Aufklappdreieck (oder "Twisty") und gefolgt von einem Auslassungszeichen (…). Sie können in diesem Bereich klicken, um den Code anzuzeigen, und erneut klicken, um ihn zu reduzieren ([Firefox-Bug 1578212](https://bugzil.la/1578212)).
- DOM-Elementreferenzen, die in die Konsole ausgegeben werden, haben jetzt eine "Im Inspektor anzeigen"-Kontextmenüoption, die das Element im HTML-Bereich des [Seiteninspektors](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/index.html) zeigt ([Firefox-Bug 1612276](https://bugzil.la/1612276)).

#### Fern-Debugging

- Aufgrund der Unterschiede in den DevTools-Versionen ist es nicht möglich, Veröffentlichungen von Firefox für Android, die auf Version 68 basieren, von Desktop-Firefox-Versionen 69 oder neuer zu debuggen. Bei dem Versuch wird der Firefox-Desktop-Browser nun eine Meldung anzeigen, die den Benutzer über dieses Problem informiert und mögliche nächste Schritte anbietet ([Firefox-Bug 1625906](https://bugzil.la/1625906)). Weitere Informationen finden Sie unter [Connection to Firefox for Android 68](https://firefox-source-docs.mozilla.org/devtools-user/about_colon_debugging/index.html#connection-to-firefox-for-android-68).

### HTML

- Die Attribute [`min`](/de/docs/Web/HTML/Element/input#min) und [`max`](/de/docs/Web/HTML/Element/input#max) des {{HTMLElement("input")}}-Elements funktionieren jetzt korrekt, wenn der Wert von `min` größer ist als der Wert von `max` für Steuerungstypen, deren Werte periodisch sind (das heißt, Werte, die zu einem bestimmten Zeitpunkt umschlagen). Dies ist besonders hilfreich, beispielsweise bei Datums- und Uhrzeiteingaben, bei denen Sie einen Zeitraum von 23 Uhr bis 2 Uhr angeben möchten ([Firefox-Bug 1608010](https://bugzil.la/1608010)).

### CSS

- Firefox unterstützt jetzt [CSS-Farben Level 4 Systemfarben](https://www.w3.org/TR/css-color-4/#typedef-system-color) ([Firefox-Bug 1590894](https://bugzil.la/1590894)).

### SVG

_Keine Änderungen._

### JavaScript

- Die Optionen `numberingSystem` und `calendar` der Konstruktoren {{jsxref("Intl.NumberFormat")}}, {{jsxref("Intl.DateTimeFormat")}} und {{jsxref("Intl.RelativeTimeFormat")}} sind jetzt standardmäßig aktiviert ([Firefox-Bug 1625975](https://bugzil.la/1625975)).

### APIs

#### Neue APIs

- Firefox unterstützt jetzt Audio-Worklets standardmäßig mit Unterstützung für {{domxref("BaseAudioContext.audioWorklet", "AudioContext.audioWorklet")}}, was es Ihnen ermöglicht, die Schnittstellen {{domxref("AudioWorkletProcessor")}} und {{domxref("AudioWorkletNode")}} zur Echtzeit-Audiobearbeitung außerhalb des Hauptthreads zu nutzen ([Firefox-Bug 1616725](https://bugzil.la/1616725)).

#### DOM

- Elemente, die mit der Benutzeroberfläche zusammenhängen, im `windowFeatures` Parameter von {{domxref("window.open()")}} können nicht mehr die Sichtbarkeit jedes UI-Teils separat steuern, sondern werden zu einer Bedingung, ob ein Popup geöffnet wird oder nicht ([Firefox-Bug 1507375](https://bugzil.la/1507375)).
- Versuche, zu einem unbekannten Protokoll zu navigieren, z.B. mit Methoden wie [`location.href`](/de/docs/Web/API/Location/href) oder [`<meta http-equiv="refresh">`](/de/docs/Web/HTML/Element/meta), werden jetzt blockiert (siehe [Firefox-Bug 1528305](https://bugzil.la/1528305)).
- Der {{domxref("IntersectionObserver.IntersectionObserver", "IntersectionObserver()")}} Konstruktor akzeptiert jetzt ein {{domxref("Document")}} Objekt als `root`, ebenso wie ein {{domxref("Element")}} Objekt ([Firefox-Bug 1623623](https://bugzil.la/1623623)). Dies ermöglicht es Ihnen, explizit den gesamten Inhaltsbereich eines Fensters als Schnittmengenbegrenzung zu verwenden.
- Die [Fetch API](/de/docs/Web/API/Fetch_API) unterstützt jetzt das `audioworklet` {{domxref("Request.destination", "destination")}} für Anfragen. Dies führt dazu, dass empfangene Daten an ein {{domxref("AudioWorklet")}} verteilt werden ([Firefox-Bug 1402784](https://bugzil.la/1402784)).

#### Entfernungen

- Wir haben das [Window `appinstalled` Ereignis](/de/docs/Web/API/Window/appinstalled_event) (und die zugehörige `Window.onappinstalled` Handler-Eigenschaft) vollständig entfernt — diese wurden nie implementiert und sind nun aus der [Web Manifest Spezifikation](https://w3c.github.io/manifest/) entfernt worden ([Firefox-Bug 1625384](https://bugzil.la/1625384)).

### HTTP

_Keine Änderungen._

### Sicherheit

_Keine Änderungen._

### WebDriver-Konformität (Marionette)

- Firefox berichtet nicht mehr `false` für `navigator.webdriver`, wenn er für Automatisierung/Testen über geckodriver verwendet wird ([Firefox-Bug 1632556](https://bugzil.la/1632556)).

## Änderungen für Add-on-Entwickler

_Keine Änderungen._

## Ältere Versionen

{{Firefox_for_developers}}
