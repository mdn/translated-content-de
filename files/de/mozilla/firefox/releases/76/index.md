---
title: Firefox 76 für Entwickler
slug: Mozilla/Firefox/Releases/76
l10n:
  sourceCommit: 1822cdf5a86574429c4c49883a402663ef16a4ef
---

{{FirefoxSidebar}}

Dieser Artikel bietet Informationen über die Änderungen in Firefox 76, die Entwickler betreffen. Firefox 76 wurde am [5. Mai 2020](https://wiki.mozilla.org/RapidRelease/Calendar#Future_branch_dates/docs/) veröffentlicht.

**Siehe auch den begleitenden Hacks-Artikel — [Firefox 76: Audio worklets und andere Tricks](https://hacks.mozilla.org/2020/05/firefox-76-audio-worklets-and-other-tricks/).**

## Änderungen für Webentwickler

### Entwicklertools

#### Debugger

- Sie können jetzt das Blackboxing von Quellgruppen und Ordnern, die im [Quellenlisten-Fenster](https://firefox-source-docs.mozilla.org/devtools-user/debugger/ui_tour/index.html#source-list-pane) aufgeführt sind, über Kontextmenüoptionen ein- oder ausschalten ([Firefox Bug 1118152](https://bugzil.la/1118152)).
- Die Kontextmenüoption _Stapelverfolgung kopieren_ des [Aufrufstapel-Fensters](https://firefox-source-docs.mozilla.org/devtools-user/debugger/ui_tour/index.html#call-stack) kopiert jetzt vollständige URLs, nicht nur Dateinamen ([Firefox Bug 1619039](https://bugzil.la/1619039)).

#### Netzwerk-Monitor

- In der Netzwerk-Anforderungsliste können Sie nun durch Doppelklicken auf einen Spaltenteiler die Spalte links davon so anpassen, dass sie ihren Inhalt vollständig anzeigt ([Firefox Bug 1615102](https://bugzil.la/1615102)).
- Die Netzwerk-Anforderung _Kopieren > [Als cURL kopieren](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/request_list/index.html#copy-as-curl)_ Kontextmenüoption hat eine neue verfügbare Option, `--globoff`, die cURLs Globbing-Feature (Platzhalter-Matching) unterdrückt, wenn die kopierte URL Zeichen in eckigen Klammern enthält ([Firefox Bug 1549773](https://bugzil.la/1549773)).
- Der Tab _Nachrichten_ des Detailbereichs für [WebSocket-Anforderungen](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/inspecting_web_sockets/index.html) hat einen neuen Filter — _Control_ — um Steuerrahmen anzuzeigen, und die Filter sind nun zu einer Auswahlliste gruppiert ([Firefox Bug 1566780](https://bugzil.la/1566780)).

#### Web-Konsole

- Im [Mehrzeilenmodus](https://firefox-source-docs.mozilla.org/devtools-user/web_console/the_command_line_interpreter/index.html#multi-line-mode) werden Code-Snippets, die länger als fünf Zeilen sind, auf fünf Zeilen abgekürzt, denen ein Aufklapp-Dreieck (oder „Twisty“) vorausgeht und die von Auslassungspunkten (…) gefolgt werden. Sie können in diesen Bereich klicken, um den Code anzuzeigen, und erneut klicken, um ihn zu minimieren ([Firefox Bug 1578212](https://bugzil.la/1578212)).
- DOM-Elementreferenzen, die in die Konsole ausgegeben werden, haben jetzt eine Kontextmenüoption "Im Inspektor anzeigen", die das Element im HTML-Fenster des [Seiteninspektors](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/index.html) anzeigt ([Firefox Bug 1612276](https://bugzil.la/1612276)).

#### Fern-Debugging

- Aufgrund von Unterschieden in den DevTools-Versionen ist es nicht möglich, Firefox for Android Versionen basierend auf Version 68, von Desktop-Firefox-Versionen 69 oder neuer zu debuggen. Wenn Sie dies versuchen, zeigt der Firefox-Desktop-Browser nun eine Nachricht an, die den Benutzer über dieses Problem informiert und mögliche nächste Schritte anbietet ([Firefox Bug 1625906](https://bugzil.la/1625906)). Siehe [Verbindung zu Firefox für Android 68](https://firefox-source-docs.mozilla.org/devtools-user/about_colon_debugging/index.html#connection-to-firefox-for-android-68) für weitere Informationen.

### HTML

- Die {{HTMLElement("input")}}-Element-Attribute [`min`](/de/docs/Web/HTML/Element/input#min) und [`max`](/de/docs/Web/HTML/Element/input#max) funktionieren jetzt korrekt, wenn der Wert von `min` größer ist als der Wert von `max` für Steuerungstypen, deren Werte periodisch sind (d. h. Werte, die sich an einem gewissen Punkt wiederholen). Dies ist besonders hilfreich bei Datums- und Zeiteingaben, bei denen Sie möglicherweise einen Zeitbereich von 23 Uhr bis 2 Uhr angeben möchten ([Firefox Bug 1608010](https://bugzil.la/1608010)).

### CSS

- Firefox unterstützt jetzt [CSS Colors Level 4 Systemfarben](https://www.w3.org/TR/css-color-4/#typedef-system-color) ([Firefox Bug 1590894](https://bugzil.la/1590894)).

### SVG

_Keine Änderungen._

### JavaScript

- Die Optionen `numberingSystem` und `calendar` der {{jsxref("Intl.NumberFormat")}}, {{jsxref("Intl.DateTimeFormat")}} und {{jsxref("Intl.RelativeTimeFormat")}} Konstruktoren sind jetzt standardmäßig aktiviert ([Firefox Bug 1625975](https://bugzil.la/1625975)).

### APIs

#### Neue APIs

- Firefox unterstützt jetzt standardmäßig Audio-Worklets, mit Unterstützung für [`AudioContext.audioWorklet`](/de/docs/Web/API/BaseAudioContext/audioWorklet), das Ihnen ermöglicht, die Schnittstellen [`AudioWorkletProcessor`](/de/docs/Web/API/AudioWorkletProcessor) und [`AudioWorkletNode`](/de/docs/Web/API/AudioWorkletNode) zu verwenden, um Audio in Echtzeit außerhalb des Hauptthreads zu verarbeiten ([Firefox Bug 1616725](https://bugzil.la/1616725)).

#### DOM

- Im `windowFeatures`-Parameter von [`window.open()`](/de/docs/Web/API/Window/open) können UI-Teile-bezogene Elemente nicht mehr die Sichtbarkeit jedes UI-Teils separat steuern, sondern werden zu einer Bedingung, ob ein Popup geöffnet wird oder nicht ([Firefox Bug 1507375](https://bugzil.la/1507375)).
- Versuche, zu einem unbekannten Protokoll mit Methoden wie [`location.href`](/de/docs/Web/API/Location/href) oder [`<meta http-equiv="refresh">`](/de/docs/Web/HTML/Element/meta) zu navigieren, werden jetzt blockiert (siehe [Firefox Bug 1528305](https://bugzil.la/1528305)).
- Der [`IntersectionObserver()`](/de/docs/Web/API/IntersectionObserver/IntersectionObserver) Konstruktor akzeptiert jetzt ein [`Document`](/de/docs/Web/API/Document)-Objekt als sein `root`, ebenso wie ein [`Element`](/de/docs/Web/API/Element)-Objekt ([Firefox Bug 1623623](https://bugzil.la/1623623)). Dies ermöglicht es Ihnen, explizit den gesamten Inhaltsbereich eines Fensters als Schnittbereich zu nutzen.
- Die [Fetch API](/de/docs/Web/API/Fetch_API) unterstützt jetzt `audioworklet` als [`destination`](/de/docs/Web/API/Request/destination) für Anfragen. Dies führt dazu, dass empfangene Daten an einen [`AudioWorklet`](/de/docs/Web/API/AudioWorklet) weitergeleitet werden ([Firefox Bug 1402784](https://bugzil.la/1402784)).

#### Entfernt

- Wir haben das [Window `appinstalled`-Event](/de/docs/Web/API/Window/appinstalled_event) vollständig entfernt (und die zugehörige `Window.onappinstalled` Handler-Eigenschaft) — diese wurden nie veröffentlicht und sind jetzt auch aus der [Web Manifest Spezifikation](https://w3c.github.io/manifest/) entfernt worden ([Firefox Bug 1625384](https://bugzil.la/1625384)).

### HTTP

_Keine Änderungen._

### Sicherheit

_Keine Änderungen._

### WebDriver-Konformität (Marionette)

- Firefox meldet nicht länger `false` für `navigator.webdriver`, wenn es für Automatisierung / Tests über Geckodriver verwendet wird ([Firefox Bug 1632556](https://bugzil.la/1632556)).

## Änderungen für Add-on-Entwickler

_Keine Änderungen._

## Ältere Versionen

{{Firefox_for_developers}}
