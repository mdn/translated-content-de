---
title: Firefox 135 für Entwickler
slug: Mozilla/Firefox/Releases/135
l10n:
  sourceCommit: 19f8302ffc93ce5fc36d871bf066f04a87f90edf
---

{{FirefoxSidebar}}

Dieser Artikel liefert Informationen zu den Änderungen in Firefox 135, die Entwickler betreffen. Firefox 135 ist die aktuelle [Beta-Version von Firefox](https://www.mozilla.org/en-US/firefox/channel/desktop/#nightly) und wird am [4. Februar 2025](https://whattrainisitnow.com/release/?version=135) veröffentlicht.

## Änderungen für Webentwickler

### Entwicklerwerkzeuge

### HTML

#### Entfernungen

### CSS

#### Entfernungen

### JavaScript

- Der [Vorschlag für JSON parse with source](https://github.com/tc39/proposal-json-parse-with-source) wird jetzt unterstützt, der darauf abzielt, Funktionen bereitzustellen, um Probleme im Zusammenhang mit dem Verlust der Genauigkeit bei der Umwandlung von Werten wie großen Fließkommazahlen und Datumswerten zwischen JavaScript-Werten und JSON-Text zu mildern ([Firefox Fehler 1934622](https://bugzil.la/1934622)). Insbesondere sind die folgenden Funktionen jetzt verfügbar:
  - Das `JSON.parse()` [`reviver` Parameter `context`-Argument](/de/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse#the_reviver_parameter): Bietet Zugriff auf den ursprünglichen JSON-Quelltext, der geparst wurde.
  - [`JSON.isRawJSON()`](/de/docs/Web/JavaScript/Reference/Global_Objects/JSON/isRawJSON): Prüft, ob ein Wert ein Objekt ist, das von `JSON.rawJSON()` zurückgegeben wird.
  - [`JSON.rawJSON()`](/de/docs/Web/JavaScript/Reference/Global_Objects/JSON/rawJSON): Erstellt ein "rohes JSON"-Objekt, das ein Stück JSON-Text enthält, welches dann in ein Objekt aufgenommen werden kann, um den angegebenen Wert zu bewahren, wenn dieses Objekt in einen String umgewandelt wird.

#### Entfernungen

### SVG

#### Entfernungen

### HTTP

#### Entfernungen

### Sicherheit

- [Certificate Transparency](/de/docs/Web/Security/Certificate_Transparency) ist ein Standard, der sicherstellt, dass Zertifikate öffentlich bekannt gemacht werden, bevor Webbrowser ihnen vertrauen. Firefox unterstützt diese Funktion jetzt in Desktop-Versionen (aber nicht in Android).
  Dies betrifft nur Server, die Zertifikate verwenden, die von einer Zertifizierungsstelle im Mozilla Root CA-Programm ausgestellt wurden.
  ([Firefox Fehler 1938242](https://bugzil.la/1938242)).

#### Entfernungen

### APIs

- Die statische Methode [`PublicKeyCredential.getClientCapabilities()`](/de/docs/Web/API/PublicKeyCredential/getClientCapabilities_static) wird unterstützt. Sie ermöglicht es einer Webanwendung zu überprüfen, ob ein Browser bestimmte [WebAuthn](/de/docs/Web/API/Web_Authentication_API)-Fähigkeiten und [Erweiterungen](/de/docs/Web/API/Web_Authentication_API/WebAuthn_extensions) aktiviert, ohne auf User-Agent-Sniffing zurückzugreifen.
  ([Firefox Fehler 1884466](https://bugzil.la/1884466)).

#### DOM

#### Medien, WebRTC und Web Audio

- Die Eigenschaften [`mid`](/de/docs/Web/API/RTCOutboundRtpStreamStats/mid) und [`rid`](/de/docs/Web/API/RTCOutboundRtpStreamStats/rid) der [`RTCOutboundRtpStreamStats`](/de/docs/Web/API/RTCOutboundRtpStreamStats)-Schnittstelle und die [`mid`](/de/docs/Web/API/RTCOutboundRtpStreamStats/mid)-Eigenschaft der [`RTCInboundRtpStreamStats`](/de/docs/Web/API/RTCInboundRtpStreamStats)-Schnittstelle werden jetzt unterstützt. ([Firefox Fehler 1643001](https://bugzil.la/1643001)).

#### Entfernungen

### WebAssembly

#### Entfernungen

### WebDriver-Konformität (WebDriver BiDi, Marionette)

#### Allgemein

- Um Benutzerereignisse realistischer zu machen und reale Benutzerinteraktionen im Browser besser zu simulieren, haben wir die Verarbeitung von Aktionssequenzen der `Perform Actions`-Befehle sowohl in Marionette als auch in WebDriver BiDi vom Inhaltsprozess in den übergeordneten Prozess verschoben. Während Ereignisse weiterhin synchron vom Inhaltsprozess gesendet werden, werden sie jetzt asynchron über IPC-Aufrufe ausgelöst, die vom übergeordneten Prozess ausgehen ([Firefox Fehler 1922077](https://bugzilla.mozilla.org/show_bug.cgi?id=1922077)).

  Aufgrund dieser erheblichen Änderung können noch einige Regressionen vorhanden sein. Wenn Sie auf Probleme stoßen, melden Sie bitte einen Fehler für den Remote Agent](https://bugzilla.mozilla.org/enter_bug.cgi?product=Remote%20Protocol&component=Remote%20Agent). Wenn die Regressionen die Testausführung blockieren, können Sie vorübergehend zum vorherigen Verhalten zurückkehren, indem Sie die Firefox-Einstellung `remote.events.async.enabled` auf `false` setzen.

- Mit der Verarbeitung von Aktionen jetzt im übergeordneten Prozess wurden zudem die folgenden Probleme behoben:

  - Wir unterstützen jetzt die ordnungsgemäße Warteschlangenbildung von Aktionssequenzen ohne Race Conditions. Dies ist besonders wichtig für den Befehl `input.performActions` von WebDriver BiDi, der mehrmals parallel aufgerufen werden kann und die enqueuten Aktionen sequenziell ausführen muss ([Firefox Fehler 1915798](https://bugzilla.mozilla.org/show_bug.cgi?id=1915798)).

  - Beim Versenden von Aktionen wird die `input cancel list` jetzt korrekt erst nach dem erfolgreichen Versenden der Aktion aktualisiert. Zuvor konnte eine Rückwärtsaktion bestehen bleiben, wenn eine Aktion nicht ausgeführt werden konnte, was zu unerwarteten Nebeneffekten beim Zurücksetzen des Zustands der `input source` führen konnte ([Firefox Fehler 1930845](https://bugzilla.mozilla.org/show_bug.cgi?id=1930845)).

  - Beim Ausführen von Aktionen werden einzelne Aktionen jetzt während des Versendens erneut versucht, insbesondere in Situationen, in denen eine einzelne Aktion eine Navigation auslöst, die den aktuellen Browsing-Kontext ersetzt ([Firefox Fehler 1930530](https://bugzilla.mozilla.org/show_bug.cgi?id=1930530), [Firefox Fehler 1930090](https://bugzilla.mozilla.org/show_bug.cgi?id=1930090)).

  - Beim Ausführen von Aktionen trat ein `TypeError: cannot access property "getActor", browsingContext.currentWindowGlobal is null`-Fehler auf, wenn eine Aktion (nicht die letzte) in der Aktionskette das Fenster schloss und die verbleibenden Aktionen noch versendet wurden ([Firefox Fehler 1932916](https://bugzilla.mozilla.org/show_bug.cgi?id=1932916)).

- Einige Marionette- und WebDriver BiDi-Befehle, die intern darauf angewiesen sind, dass vor ihrer Rückgabe ein `requestAnimationFrame` emittiert wird, würden hängen bleiben, wenn der aktuelle Browsing-Kontext während ihrer Ausführung navigiert wurde ([Firefox Fehler 1937118](https://bugzilla.mozilla.org/show_bug.cgi?id=1937118)).

#### WebDriver BiDi

- Unterstützung für das `format`-Feld im `browsingContext.captureScreenshot`-Befehl hinzugefügt, womit Clients unterschiedliche Dateiformate angeben können (`image/png` und `image/jpg` werden derzeit unterstützt) und die Komprimierungsqualität für Screenshots festlegen können ([Firefox Fehler 1861737](https://bugzilla.mozilla.org/show_bug.cgi?id=1861737)).

## Änderungen für Add-on-Entwickler

### Entfernungen

### Sonstiges

## Experimentelle Web-Funktionen

Diese Funktionen sind neu in Firefox 135, aber standardmäßig deaktiviert. Um mit ihnen zu experimentieren, suchen Sie die entsprechende Einstellung auf der `about:config`-Seite und setzen Sie sie auf `true`. Weitere solcher Funktionen finden Sie auf der Seite [Experimentelle Funktionen](/de/docs/Mozilla/Firefox/Experimental_features).

- **Temporal API** (Nightly-Release): <code>javascript.options.experimental.temporal</code>. Das [Temporal-Objekt](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal) soll die Arbeit mit Daten und Zeiten in verschiedenen Szenarien vereinfachen, mit eingebauten Zeit- und Kalenderdarstellungen. ([Firefox Fehler 1912511](https://bugzil.la/1912511)).
- **Priorisierte Task Scheduling API**: <code>dom.enable_web_task_scheduling</code>.
  Die [Prioritized Task Scheduling API](/de/docs/Web/API/Prioritized_Task_Scheduling_API) bietet eine standardisierte Möglichkeit, alle Aufgaben einer Anwendung zu priorisieren, egal ob sie im Code eines Website-Entwicklers, in Bibliotheken oder Frameworks von Drittanbietern definiert sind.
  Diese wurde vorübergehend in Nightly-Builds deaktiviert, um [Schäden in freier Wildbahn](https://bugzil.la/1937232) zu vermeiden.
  ([Firefox Fehler 1938242](https://bugzil.la/1938242)).

## Ältere Versionen

{{Firefox_for_developers}}
