---
title: Firefox 135 für Entwickler
slug: Mozilla/Firefox/Releases/135
l10n:
  sourceCommit: f3b67d11ce494f064e64480a7a5cf097dfac287a
---

{{FirefoxSidebar}}

Dieser Artikel bietet Informationen über die Änderungen in Firefox 135, die Entwickler betreffen. Firefox 135 ist die aktuelle [Beta-Version von Firefox](https://www.mozilla.org/en-US/firefox/channel/desktop/#nightly) und wird am [4. Februar 2025](https://whattrainisitnow.com/release/?version=135) veröffentlicht.

## Änderungen für Webentwickler

### Entwicklerwerkzeuge

### HTML

#### Entfernungen

### CSS

#### Entfernungen

- Die [`-moz-user-input`](/de/docs/Web/CSS/-moz-user-input) CSS-Eigenschaft erlaubte es, Eingabefelder zu deaktivieren. Die Eigenschaft ist nun veraltet und wurde entfernt ([Firefox Fehler 1935198](https://bugzil.la/1935198)).

### JavaScript

- Der [JSON parse with source proposal](https://github.com/tc39/proposal-json-parse-with-source) wird jetzt unterstützt. Er zielt darauf ab, Funktionen bereitzustellen, um Probleme im Zusammenhang mit dem Präzisionsverlust beim Konvertieren von Werten wie großen Fließkommazahlen und Datumswerten zwischen JavaScript-Werten und JSON-Text zu mildern ([Firefox Fehler 1934622](https://bugzil.la/1934622)). Insbesondere sind die folgenden Merkmale jetzt verfügbar:
  - Der `JSON.parse()` [`reviver`-Parameter `context`-Argument](/de/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse#the_reviver_parameter): Bietet Zugriff auf den ursprünglichen JSON-Quelltext, der analysiert wurde.
  - [`JSON.isRawJSON()`](/de/docs/Web/JavaScript/Reference/Global_Objects/JSON/isRawJSON): Überprüft, ob ein Wert ein Objekt ist, das von `JSON.rawJSON()` zurückgegeben wurde.
  - [`JSON.rawJSON()`](/de/docs/Web/JavaScript/Reference/Global_Objects/JSON/rawJSON): Erstellt ein "rohes JSON"-Objekt, das ein Stück JSON-Text enthält, der in ein Objekt eingefügt werden kann, um den angegebenen Wert zu erhalten, wenn dieses Objekt serialisiert wird.

#### Entfernungen

### SVG

#### Entfernungen

### HTTP

#### Entfernungen

### Sicherheit

- [Certificate Transparency](/de/docs/Web/Security/Certificate_Transparency) ist ein Standard, um sicherzustellen, dass Zertifikate öffentlich bekannt gemacht werden, bevor Webbrowser ihnen vertrauen. Firefox unterstützt jetzt diese Funktion in Desktop-Versionen (aber nicht Android).
  Dies betrifft nur Server, die Zertifikate verwenden, die von einer Zertifizierungsstelle aus Mozillas Root CA-Programm ausgestellt wurden.
  ([Firefox Fehler 1938242](https://bugzil.la/1938242)).

#### Entfernungen

### APIs

- Die statische Methode [`PublicKeyCredential.getClientCapabilities()`](/de/docs/Web/API/PublicKeyCredential/getClientCapabilities_static) wird unterstützt, sodass eine Web-App überprüfen kann, ob ein Browser bestimmte [WebAuthn](/de/docs/Web/API/Web_Authentication_API)-Fähigkeiten und [Erweiterungen](/de/docs/Web/API/Web_Authentication_API/WebAuthn_extensions) aktiviert, ohne auf User-Agent-Sniffing zurückgreifen zu müssen.
  ([Firefox Fehler 1884466](https://bugzil.la/1884466)).

#### DOM

#### Medien, WebRTC und Web Audio

- Die Eigenschaften [`mid`](/de/docs/Web/API/RTCOutboundRtpStreamStats/mid) und [`rid`](/de/docs/Web/API/RTCOutboundRtpStreamStats/rid) der [`RTCOutboundRtpStreamStats`](/de/docs/Web/API/RTCOutboundRtpStreamStats)-Schnittstelle und die [`mid`](/de/docs/Web/API/RTCOutboundRtpStreamStats/mid)-Eigenschaft der [`RTCInboundRtpStreamStats`](/de/docs/Web/API/RTCInboundRtpStreamStats)-Schnittstelle werden nun unterstützt. ([Firefox Fehler 1643001](https://bugzil.la/1643001)).

#### Entfernungen

### WebAssembly

#### Entfernungen

### WebDriver-Konformität (WebDriver BiDi, Marionette)

#### Allgemein

- Um Benutzereignisse realistischer zu gestalten und echte Benutzerinteraktionen im Browser besser zu simulieren, haben wir die Verarbeitung von Aktionssequenzen der `Perform Actions`-Befehle in sowohl Marionette als auch WebDriver BiDi vom Inhaltsprozess in den Elternprozess verschoben. Während Ereignisse nach wie vor synchron vom Inhaltsprozess gesendet werden, werden sie nun asynchron über IPC-Aufrufe ausgelöst, die vom Elternprozess stammen ([Firefox Fehler 1922077](https://bugzilla.mozilla.org/show_bug.cgi?id=1922077)).

  Aufgrund dieser erheblichen Änderung können einige Regressionen weiterhin bestehen. Wenn Sie auf Probleme stoßen, reichen Sie bitte [einen Fehler für den Remote Agent ein](https://bugzilla.mozilla.org/enter_bug.cgi?product=Remote%20Protocol&component=Remote%20Agent). Wenn die Regressionen die Testausführung blockieren, können Sie vorübergehend zum vorherigen Verhalten zurückkehren, indem Sie die Firefox-Einstellung `remote.events.async.enabled` auf `false` setzen.

- Mit der Verarbeitung von Aktionen, die jetzt im Elternprozess durchgeführt wird, wurden auch folgende Probleme behoben:

  - Wir unterstützen jetzt die ordnungsgemäße Warteschlangenbildung von Aktionssequenzen ohne Race-Conditions. Dies ist besonders wichtig für den `input.performActions`-Befehl von WebDriver BiDi, der mehrmals parallel aufgerufen werden kann und die eingereihten Aktionen nacheinander ausführen muss ([Firefox Fehler 1915798](https://bugzilla.mozilla.org/show_bug.cgi?id=1915798)).

  - Beim Versenden von Aktionen wird die `input cancel list` jetzt nur noch korrekt aktualisiert, nachdem die Aktion erfolgreich versendet wurde. Früher konnte eine rückgängige Aktion bestehen bleiben, wenn eine Aktion nicht ausgeführt werden konnte, was zu unerwarteten Nebeneffekten beim Zurücksetzen des Zustands der `input source` führte ([Firefox Fehler 1930845](https://bugzilla.mozilla.org/show_bug.cgi?id=1930845)).

  - Beim Ausführen von Aktionen werden einzelne Aktionen während des Versands nun erneut versucht, insbesondere in Situationen, in denen eine einzelne Aktion eine Navigation auslöst, die den aktuellen Browsing-Kontext ersetzt ([Firefox Fehler 1930530](https://bugzilla.mozilla.org/show_bug.cgi?id=1930530), [Firefox Fehler 1930090](https://bugzilla.mozilla.org/show_bug.cgi?id=1930090)).

  - Bei der Ausführung von Aktionen trat der Fehler `TypeError: can't access property "getActor", browsingContext.currentWindowGlobal is null` auf, wenn eine Aktion (nicht die letzte) in der Aktionskette das Fenster schloss und die verbleibenden Aktionen noch versendet wurden ([Firefox Fehler 1932916](https://bugzilla.mozilla.org/show_bug.cgi?id=1932916)).

- Einige Marionette- und WebDriver BiDi-Befehle, die intern darauf angewiesen sind, dass ein `requestAnimationFrame` emittiert wird, bevor sie zurückkehren, würden hängen bleiben, wenn der aktuelle Browsing-Kontext während ihrer Ausführung navigiert wurde ([Firefox Fehler 1937118](https://bugzilla.mozilla.org/show_bug.cgi?id=1937118)).

#### WebDriver BiDi

- Unterstützung für das `format`-Feld im Befehl `browsingContext.captureScreenshot` hinzugefügt, sodass Clients verschiedene Dateiformate angeben können (`image/png` und `image/jpg` werden derzeit unterstützt) und die Kompressionsqualität für Screenshots definieren können ([Firefox Fehler 1861737](https://bugzilla.mozilla.org/show_bug.cgi?id=1861737)).

## Änderungen für Add-on-Entwickler

### Entfernungen

### Sonstige

## Experimentelle Webfeatures

Diese Funktionen sind neu in Firefox 135 implementiert, aber standardmäßig deaktiviert. Um mit ihnen zu experimentieren, suchen Sie auf der `about:config`-Seite nach der entsprechenden Einstellung und setzen Sie sie auf `true`. Weitere solche Funktionen finden Sie auf der Seite [Experimentelle Funktionen](/de/docs/Mozilla/Firefox/Experimental_features).

- **Temporal API** (Nightly-Version): <code>javascript.options.experimental.temporal</code>. Das [Temporal-Objekt](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal) zielt darauf ab, die Arbeit mit Daten und Zeiten in verschiedenen Szenarien zu vereinfachen, mit eingebauten Zeitzonen- und Kalenderdarstellungen. ([Firefox Fehler 1912511](https://bugzil.la/1912511)).
- **Priorisierte Task-Planungs-API**: <code>dom.enable_web_task_scheduling</code>.
  Die [Priorisierte Task-Planungs-API](/de/docs/Web/API/Prioritized_Task_Scheduling_API) bietet eine standardisierte Methode zur Priorisierung aller Aufgaben einer Anwendung, unabhängig davon, ob sie im Code eines Website-Entwicklers oder in Drittbibliotheken und -frameworks definiert sind.
  Diese wurde vorübergehend in Nightly-Versionen deaktiviert, um [Schäden in freier Wildbahn](https://bugzil.la/1937232) zu vermeiden.
  ([Firefox Fehler 1938242](https://bugzil.la/1938242)).

## Ältere Versionen

{{Firefox_for_developers}}
