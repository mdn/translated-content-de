---
title: Firefox 134 für Entwickler
slug: Mozilla/Firefox/Releases/134
l10n:
  sourceCommit: f66ec10c7cfea69f2269018c9af76fe084888a68
---

{{FirefoxSidebar}}

Dieser Artikel bietet Informationen über die Änderungen in Firefox 134, die Entwickler betreffen. Firefox 134 ist die aktuelle [Beta-Version von Firefox](https://www.mozilla.org/en-US/firefox/channel/desktop/#beta) und erscheint am [7. Januar 2025](https://whattrainisitnow.com/release/?version=134).

## Änderungen für Webentwickler

### Entwickler-Tools

### HTML

#### Entfernungen

### CSS

- Die CSS-Eigenschaften {{CSSXRef("align-self")}} und {{CSSXRef("justify-self")}} sowie die CSS-Kurzschrift-Eigenschaft {{CSSXRef("place-self")}} werden nun für [absolut positionierte](/de/docs/Learn_web_development/Core/CSS_layout/Positioning#absolute_positioning) Elemente unterstützt. ([Firefox Bug 1920160](https://bugzil.la/1920160)).

#### Entfernungen

### JavaScript

- Unterstützung für die statische Methode {{jsxref("RegExp.escape()")}}, die verwendet werden kann, um potenzielle Regex-Syntax-Zeichen in einem String zu escapen und einen neuen String zurückzugeben, der sicher als [literal](/de/docs/Web/JavaScript/Reference/Regular_expressions/Literal_character) Muster für den {{jsxref("RegExp/RegExp", "RegExp()")}} Konstruktor verwendet werden kann. ([Firefox Bug 1918235](https://bugzil.la/1918235)).
- Die Komfortmethode {{jsxref("Promise.try()")}} wird nun unterstützt.
  Die Methode nimmt einen beliebigen Rückruf (eine Funktion, die synchron oder asynchron zurückgibt oder auslöst) und umhüllt ihr Ergebnis in einem {{jsxref("Promise")}}.
  Dies ermöglicht es, Promises ({{jsxref("Promise.then", ".then()")}}, {{jsxref("Promise.catch", ".catch()")}}) zu nutzen, um das Ergebnis von beliebigen Methoden zu behandeln. ([Firefox Bug 1917879](https://bugzil.la/1917879) und [Firefox Bug 1905364](https://bugzil.la/1905364)).

#### Entfernungen

### SVG

#### Entfernungen

### HTTP

#### Entfernungen

### Sicherheit

#### Entfernungen

### APIs

- Die statische Methode [`PushManager.supportedContentEncodings`](/de/docs/Web/API/PushManager/supportedContentEncodings_static) wird jetzt unterstützt, um die erlaubten Algorithmen für die Verschlüsselung der Nutzlast einer [Push-Nachricht](/de/docs/Web/API/Push_API) zu erhalten. ([Firefox Bug 1497430](https://bugzil.la/1497430)).
- [`AudioParam.value`](/de/docs/Web/API/AudioParam/value) erlaubt nun das Setzen des Wertes, selbst während eine automatisierte Veranstaltung geplant ist: Bisher wurde die Operation in solchen Zeiten stillschweigend ignoriert. ([Firefox Bug 1308435](https://bugzil.la/1308435)).
- Die Methode [`ReadableStreamBYOBReader.read()`](/de/docs/Web/API/ReadableStreamBYOBReader/read) hat ein neues Argument [`options.min`](/de/docs/Web/API/ReadableStreamBYOBReader/read#min), das verwendet werden kann, um die Mindestanzahl von Elementen zu spezifizieren, die bei jedem Aufruf zurückgegeben werden soll. Dies könnte z. B. verwendet werden, um unnötige Iterationen zu vermeiden, wenn mit Datenstrukturen gearbeitet wird, die eine bekannte Datenmenge haben. ([Firefox Bug 1864406](https://bugzil.la/1864406)).

#### DOM

#### Medien, WebRTC und Web Audio

- WebRTC-Simulcast von bildschirmfreigegebenem Video mit dem [VP8-Codec](/de/docs/Web/Media/Formats/Video_codecs#vp8) wird jetzt unterstützt (Simulcast von anderen Videoquellen ist schon seit langem aktiviert). Genau genommen können [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack)-Objekte für Bildschirm- und Fensteraufnahme (zum Beispiel von [`MediaDevices.getDisplayMedia()`](/de/docs/Web/API/MediaDevices/getDisplayMedia)) jetzt als mehrere Simulcast-Schichten kodiert werden, wenn VP8 benutzt wird. ([Firefox Bug 1692873](https://bugzil.la/1692873)).

#### Entfernungen

### WebAssembly

#### Entfernungen

### WebDriver-Konformität (WebDriver BiDi, Marionette)

#### WebDriver BiDi

- Implementiert den Befehl `browser.getClientWindows`, der es ermöglicht, Informationen über die aktuell geöffneten Browser-Fenster abzurufen ([Firefox Bug 1855025](https://bugzilla.mozilla.org/show_bug.cgi?id=1855025))
- Unterstützung für die Felder `initiatorType` und `destination` zu allen Netzwerkereignissen hinzugefügt ([Firefox Bug 1904892](https://bugzilla.mozilla.org/show_bug.cgi?id=1904892) und [Firefox Bug 1933331](https://bugzilla.mozilla.org/show_bug.cgi?id=1933331)). Sie ermöglichen zu verstehen, warum und wie die Anfrage erstellt wurde.
- Das Ereignis `browsingContext.navigationStarted` wird nicht mehr ausgegeben, wenn die initiale about:blank-Seite für einen neuen top-level Browsing-Kontext geladen wird ([Firefox Bug 1922014](https://bugzilla.mozilla.org/show_bug.cgi?id=1922014))
- Wir haben einen Fehler behoben, bei dem die `requestTime` von Netzwerkereignissen manchmal auf 0 gesetzt wurde ([Firefox Bug 1930849](https://bugzilla.mozilla.org/show_bug.cgi?id=1930849))
- Der Befehl `browsingContext.traverseHistory` kann jetzt nur mit top-level Browsing-Kontexten verwendet werden ([Firefox Bug 1924859](https://bugzilla.mozilla.org/show_bug.cgi?id=1924859))
- Die Zuverlässigkeit von Befehlen, die während einer Navigation gesendet werden, verbessert, zum Beispiel wenn ein Browsing-Kontext ersetzt wird ([Firefox Bug 1927073](https://bugzilla.mozilla.org/show_bug.cgi?id=1927073)).

#### Marionette

- Die Befehle `Addon:Install` und `Addon:Uninstall` sind nun für GeckoView (Firefox für Android) verfügbar ([Firefox Bug 1806135](https://bugzilla.mozilla.org/show_bug.cgi?id=1806135)).
- Der Befehl `Addon:Install` kann jetzt verwendet werden, um Erweiterungen zu installieren, die im Privaten Modus aktiviert sind ([Firefox Bug 1810718](https://bugzilla.mozilla.org/show_bug.cgi?id=1810718))

## Änderungen für Add-on-Entwickler

### Entfernungen

### Sonstiges

## Experimentelle Web-Funktionen

Diese Funktionen sind neu in Firefox 134 verfügbar, aber standardmäßig deaktiviert. Um mit ihnen zu experimentieren, suchen Sie nach der entsprechenden Einstellung auf der `about:config`-Seite und setzen Sie diese auf `true`. Weitere solche Funktionen finden Sie auf der Seite [Experimentelle Funktionen](/de/docs/Mozilla/Firefox/Experimental_features).

- **`Intl.DurationFormat`** (Nightly-Veröffentlichung): {{jsxref("Intl.DurationFormat")}} ermöglicht die lokal-sensible Formatierung von Zeitdauern. ([Firefox Bug 1648139](https://bugzil.la/1648139)).
- **`autocorrect`**: <code>dom.forms.autocorrect</code>.
  Das HTML-Attribut [`autocorrect`](/de/docs/Web/HTML/Global_attributes/autocorrect) und die Eigenschaft [`HTMLElement.autocorrect`](/de/docs/Web/API/HTMLElement/autocorrect) ermöglichen die Autokorrektur in editierbaren Textelementen, einschließlich: die meisten Arten von Text-{{htmlelement("input")}}-Elementen, {{htmlelement("textarea")}}-Elementen und Elemente, die das Attribut [`contenteditable`](/de/docs/Web/HTML/Global_attributes/contenteditable) gesetzt haben ([Firefox Bug 1725806](https://bugzil.la/1725806)).

## Ältere Versionen

{{Firefox_for_developers}}
