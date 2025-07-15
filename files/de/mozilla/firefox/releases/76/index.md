---
title: Firefox 76 für Entwickler
short-title: Firefox 76
slug: Mozilla/Firefox/Releases/76
l10n:
  sourceCommit: 64df508685abcbc047f6c1a973505921fad1484e
---

Dieser Artikel bietet Informationen über die Änderungen in Firefox 76, die Auswirkungen auf Entwickler haben. Firefox 76 wurde am [5. Mai 2020](https://wiki.mozilla.org/RapidRelease/Calendar#Future_branch_dates/docs/) veröffentlicht.

**Siehe auch den begleitenden Hacks-Beitrag — [Firefox 76: Audio-Arbeitsprozessoren und andere Tricks](https://hacks.mozilla.org/2020/05/firefox-76-audio-worklets-and-other-tricks/).**

## Änderungen für Webentwickler

### Entwicklerwerkzeuge

#### Debugger

- Sie können nun das Blackboxing von Quellgruppen und Ordnern, die im [Quelllistenfenster](https://firefox-source-docs.mozilla.org/devtools-user/debugger/ui_tour/index.html#source-list-pane) aufgeführt sind, über Kontextmenüoptionen aktivieren/deaktivieren ([Firefox-Bug 1118152](https://bugzil.la/1118152)).
- Die _Stack-Trace kopieren_-Option des Kontextmenüs im [Aufruf-Stack-Fenster](https://firefox-source-docs.mozilla.org/devtools-user/debugger/ui_tour/index.html#call-stack) kopiert nun vollständige URLs, nicht nur Dateinamen ([Firefox-Bug 1619039](https://bugzil.la/1619039)).

#### Netzwerkmonitor

- In der Liste der Netzwerkanfragen können Sie nun einen Spaltentrenner doppelt anklicken, um die Spalte links davon so zu vergrößern, dass ihr Inhalt passt ([Firefox-Bug 1615102](https://bugzil.la/1615102)).
- Die Netzwerk-Anfrage-Kopieroption _Kopieren > [Als cURL kopieren](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/request_list/index.html#copy-as-curl)_ hat eine neue Option, `--globoff`, die das Globbing (Wildcardsuche) von cURL unterdrückt, wenn die kopierte URL eckige Klammern enthält ([Firefox-Bug 1549773](https://bugzil.la/1549773)).
- Die Registerkarte _Nachrichten_ des Detailfensters für [WebSocket-Anfragen](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/inspecting_web_sockets/index.html) hat einen neuen Filter — _Steuerung_ — zum Anzeigen von Steuerungsrahmen, und die Filter sind jetzt in einer Auswahlliste gruppiert ([Firefox-Bug 1566780](https://bugzil.la/1566780)).

#### Webkonsole

- Im [Mehrzeilenmodus](https://firefox-source-docs.mozilla.org/devtools-user/web_console/the_command_line_interpreter/index.html#multi-line-mode) werden Codeausschnitte, die länger als fünf Zeilen sind, auf fünf Zeilen abgekürzt, die von einem Aufklappdreieck (oder "twisty") und einem Auslassungszeichen (… ) gefolgt werden. Sie können irgendwo in diesem Bereich klicken, um den Code anzuzeigen, und erneut in diesem Bereich klicken, um ihn zu verbergen ([Firefox-Bug 1578212](https://bugzil.la/1578212)).
- DOM-Elementreferenzen, die in die Konsole ausgegeben werden, haben nun eine "Im Inspektor anzeigen"-Kontextmenüoption, die das Element im HTML-Bereich des [Seiteninspektors](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/index.html) anzeigt ([Firefox-Bug 1612276](https://bugzil.la/1612276)).

#### Fern-Debugging

- Aufgrund von Unterschieden in den DevTools-Versionen ist es nicht möglich, Veröffentlichungen von Firefox für Android, die auf Version 68 basieren, von Desktop-Firefox-Versionen 69 oder höher zu debuggen. Beim Versuch dies zu tun, zeigt der Firefox-Desktopbrowser nun eine Nachricht an, die den Benutzer über dieses Problem informiert und mögliche nächste Schritte anbietet ([Firefox-Bug 1625906](https://bugzil.la/1625906)). Siehe [Verbindung zu Firefox für Android 68](https://firefox-source-docs.mozilla.org/devtools-user/about_colon_debugging/index.html#connection-to-firefox-for-android-68) für weitere Informationen.

### HTML

- Die {{HTMLElement("input")}}-Element-Attribute [`min`](/de/docs/Web/HTML/Reference/Elements/input#min) und [`max`](/de/docs/Web/HTML/Reference/Elements/input#max) funktionieren nun korrekt, wenn der Wert von `min` größer ist als der Wert von `max` für Kontrollelementtypen, deren Werte periodisch sind (d.h. Werte, die sich zu einem bestimmten Punkt wiederholen). Dies ist insbesondere bei Datums- und Zeiteingaben nützlich, bei denen Sie möglicherweise einen Zeitbereich von 23 Uhr bis 2 Uhr festlegen möchten ([Firefox-Bug 1608010](https://bugzil.la/1608010)).

### CSS

- Firefox unterstützt nun [CSS-Farben der Stufe 4 Systemfarben](https://drafts.csswg.org/css-color-4/#typedef-system-color) ([Firefox-Bug 1590894](https://bugzil.la/1590894)).

### SVG

_Keine Änderungen._

### JavaScript

- Die `numberingSystem`- und `calendar`-Optionen der Konstruktoren {{jsxref("Intl.NumberFormat")}}, {{jsxref("Intl.DateTimeFormat")}} und {{jsxref("Intl.RelativeTimeFormat")}} sind nun standardmäßig aktiviert ([Firefox-Bug 1625975](https://bugzil.la/1625975)).

### APIs

#### Neue APIs

- Firefox unterstützt nun standardmäßig Audio-Arbeitsprozessoren mit Unterstützung für [`AudioContext.audioWorklet`](/de/docs/Web/API/BaseAudioContext/audioWorklet), die es Ihnen ermöglichen, die Schnittstellen [`AudioWorkletProcessor`](/de/docs/Web/API/AudioWorkletProcessor) und [`AudioWorkletNode`](/de/docs/Web/API/AudioWorkletNode) zu verwenden, um Audio in Echtzeit außerhalb des Hauptthreads zu verarbeiten ([Firefox-Bug 1616725](https://bugzil.la/1616725)).

#### DOM

- Die UI-bezogenen Elemente im `windowFeatures`-Parameter von [`window.open()`](/de/docs/Web/API/Window/open) können nicht mehr steuern, welche UI-Teile einzeln sichtbar sind, sondern werden zu einer Bedingung dafür, ob ein Popup geöffnet wird oder nicht ([Firefox-Bug 1507375](https://bugzil.la/1507375)).
- Versuche, mit Methoden wie [`location.href`](/de/docs/Web/API/Location/href) oder [`<meta http-equiv="refresh">`](/de/docs/Web/HTML/Reference/Elements/meta) zu einem unbekannten Protokoll zu navigieren, werden jetzt blockiert (siehe [Firefox-Bug 1528305](https://bugzil.la/1528305)).
- Der Konstruktor [`IntersectionObserver()`](/de/docs/Web/API/IntersectionObserver/IntersectionObserver) akzeptiert nun ein [`Document`](/de/docs/Web/API/Document)-Objekt als `root`, sowie ein [`Element`](/de/docs/Web/API/Element)-Objekt ([Firefox-Bug 1623623](https://bugzil.la/1623623)). Dies ermöglicht es Ihnen, explizit den gesamten Inhaltsbereich eines Fensters als Schnittbereich zu verwenden.
- Die [Fetch API](/de/docs/Web/API/Fetch_API) unterstützt nun den `audioworklet`-[`destination`](/de/docs/Web/API/Request/destination) für Anfragen. Dies führt dazu, dass empfangene Daten an einen [`AudioWorklet`](/de/docs/Web/API/AudioWorklet) weitergeleitet werden ([Firefox-Bug 1402784](https://bugzil.la/1402784)).

#### Entfernungen

- Wir haben das Ereignis [Window `appinstalled`](/de/docs/Web/API/Window/appinstalled_event) vollständig entfernt (sowie die zugehörige `Window.onappinstalled`-Handler-Eigenschaft) — diese wurden nie ausgeliefert und sind nun aus der [Web Manifest Spezifikation](https://w3c.github.io/manifest/) entfernt worden ([Firefox-Bug 1625384](https://bugzil.la/1625384)).

### HTTP

_Keine Änderungen._

### Sicherheit

_Keine Änderungen._

### WebDriver-Konformität (Marionette)

- Firefox meldet nicht mehr `false` für `navigator.webdriver`, wenn es für Automatisierung / Tests über geckodriver verwendet wird ([Firefox-Bug 1632556](https://bugzil.la/1632556)).

## Änderungen für Add-on-Entwickler

_Keine Änderungen._
