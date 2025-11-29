---
title: Firefox 135 Versionshinweise für Entwickler
short-title: Firefox 135
slug: Mozilla/Firefox/Releases/135
l10n:
  sourceCommit: 2d78abb3e793352e24e976ce0e68c08d817bd7f3
---

Dieser Artikel bietet Informationen über die Änderungen in Firefox 135, die Entwickler betreffen. Firefox 135 wurde am [4. Februar 2025](https://whattrainisitnow.com/release/?version=135) veröffentlicht.

## Änderungen für Webentwickler

### HTML

Keine bemerkenswerten Änderungen

### CSS

#### Entfernt

- Die [`-moz-user-input`](/de/docs/Web/CSS/Reference/Properties/-moz-user-input) CSS-Eigenschaft erlaubte es Ihnen, Eingabefelder zu deaktivieren. Diese Eigenschaft ist jetzt veraltet und wurde entfernt ([Firefox-Bug 1935198](https://bugzil.la/1935198)).

### JavaScript

- Der [JSON parse with source proposal](https://github.com/tc39/proposal-json-parse-with-source) wird jetzt unterstützt, da er Funktionen bietet, um Probleme im Zusammenhang mit Präzisionsverlust beim Konvertieren von Werten wie großen Fließkommazahlen und Datumswerten zwischen JavaScript-Werten und JSON-Text zu mildern ([Firefox-Bug 1934622](https://bugzil.la/1934622)). Insbesondere sind die folgenden Funktionen jetzt verfügbar:
  - Das `JSON.parse()` [`reviver` Parameter `context` Argument](/de/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse#the_reviver_parameter): Bietet Zugriff auf den ursprünglichen JSON-Quelltext, der geparst wurde.
  - [`JSON.isRawJSON()`](/de/docs/Web/JavaScript/Reference/Global_Objects/JSON/isRawJSON): Prüft, ob ein Wert ein Objekt ist, das von `JSON.rawJSON()` zurückgegeben wird.
  - [`JSON.rawJSON()`](/de/docs/Web/JavaScript/Reference/Global_Objects/JSON/rawJSON): Erstellt ein "Roh-JSON"-Objekt, das ein Stück JSON-Text enthält, der dann in ein Objekt aufgenommen werden kann, um den angegebenen Wert beim Stringifizieren des Objekts beizubehalten.

### Sicherheit

- [Certificate Transparency](/de/docs/Web/Security/Defenses/Certificate_Transparency) ist ein Standard, der sicherstellt, dass Zertifikate öffentlich bekannt gemacht werden, bevor Webbrowser ihnen vertrauen. Firefox unterstützt diese Funktion jetzt in Desktop-Versionen (aber nicht auf Android).
  Dies betrifft nur Server, die Zertifikate verwenden, die von einer Zertifizierungsstelle im Mozilla Root CA Program ausgestellt wurden.
  ([Firefox-Bug 1938242](https://bugzil.la/1938242)).

### APIs

- Die statische Methode [`PublicKeyCredential.getClientCapabilities()`](/de/docs/Web/API/PublicKeyCredential/getClientCapabilities_static) wird unterstützt, wodurch eine Webanwendung prüfen kann, ob ein Browser bestimmte [WebAuthn](/de/docs/Web/API/Web_Authentication_API) Funktionen und [Erweiterungen](/de/docs/Web/API/Web_Authentication_API/WebAuthn_extensions) aktiviert hat, ohne auf User-Agent-Erkennung zurückgreifen zu müssen.
  ([Firefox-Bug 1884466](https://bugzil.la/1884466)).

#### DOM

#### Medien, WebRTC und Web Audio

- Die Eigenschaften [`mid`](/de/docs/Web/API/RTCOutboundRtpStreamStats/mid) und [`rid`](/de/docs/Web/API/RTCOutboundRtpStreamStats/rid) des [`RTCOutboundRtpStreamStats`](/de/docs/Web/API/RTCOutboundRtpStreamStats) Interface sowie die [`mid`](/de/docs/Web/API/RTCOutboundRtpStreamStats/mid) Eigenschaft des [`RTCInboundRtpStreamStats`](/de/docs/Web/API/RTCInboundRtpStreamStats) Interface werden jetzt unterstützt. ([Firefox-Bug 1643001](https://bugzil.la/1643001)).

### WebDriver-Konformität (WebDriver BiDi, Marionette)

#### Allgemein

- Um Benutzereingriffe realistischer zu gestalten und echte Interaktionen des Benutzers im Browser besser zu simulieren, haben wir die Verarbeitungen der Aktionssequenz der `Perform Actions`-Befehle in Marionette und WebDriver BiDi vom Inhaltsprozess in den Elternelementprozess verschoben. Während Ereignisse weiterhin synchron vom Inhaltsprozess gesendet werden, werden sie nun asynchron durch IPC-Anrufe vom Elternelementprozess ausgelöst ([Firefox-Bug 1922077](https://bugzil.la/1922077)).

  Aufgrund dieser signifikanten Änderung können einige Regressionen bestehen bleiben. Wenn Sie Probleme feststellen, reichen Sie bitte [einen Fehlerbericht für den Remote Agent ein](https://bugzilla.mozilla.org/enter_bug.cgi?product=Remote%20Protocol&component=Remote%20Agent). Wenn die Regressionen die Testausführung blockieren, können Sie vorübergehend zum vorherigen Verhalten zurückkehren, indem Sie die Firefox-Einstellung `remote.events.async.enabled` auf `false` setzen.

- Mit der jetzt im Elternelementprozess erfolgenden Verarbeitung der Aktionen wurden auch die folgenden Probleme behoben:
  - Wir unterstützen jetzt ordnungsgemäße Warteschlangen von Aktionssequenzen ohne Race-Bedingungen. Dies ist insbesondere wichtig für den `input.performActions`-Befehl von WebDriver BiDi, der mehrfach parallel aufgerufen werden kann und die enqueueten Aktionen sequentiell ausführen muss ([Firefox-Bug 1915798](https://bugzil.la/1915798)).

  - Beim Abschicken von Aktionen wird die `input cancel list` jetzt korrekt aktualisiert, nur nachdem die Aktion erfolgreich gesendet wurde. Zuvor konnte, bei einem Fehlschlag der Aktion, eine umgekehrte Aktion bestehen bleiben, was zu unerwarteten Nebeneffekten beim Zurücksetzen des Zustands der `input source` führen konnte ([Firefox-Bug 1930845](https://bugzil.la/1930845)).

  - Beim Ausführen von Aktionen werden einzelne Aktionen jetzt während der Ausführung erneut versucht, insbesondere in Situationen, in denen eine einzelne Aktion eine Navigation auslöst, die den aktuellen Browsing-Kontext ersetzt ([Firefox-Bug 1930530](https://bugzil.la/1930530), [Firefox-Bug 1930090](https://bugzil.la/1930090)).

  - Beim Ausführen von Aktionen trat der Fehler `TypeError: can't access property "getActor", browsingContext.currentWindowGlobal is null` auf, wenn eine Aktion (nicht die letzte) in der Aktionskette das Fenster schloss und die verbleibenden Aktionen noch gesendet wurden ([Firefox-Bug 1932916](https://bugzil.la/1932916)).

- Einige Marionette- und WebDriver-BiDi-Befehle, die intern auf das Senden eines `requestAnimationFrame` angewiesen sind, bevor sie zurückkehren, würden hängen bleiben, wenn der aktuelle Browsing-Kontext während ihrer Ausführung navigiert wurde ([Firefox-Bug 1937118](https://bugzil.la/1937118)).

#### WebDriver BiDi

- Unterstützung für das `format`-Feld im `browsingContext.captureScreenshot`-Befehl hinzugefügt, wodurch Clients verschiedene Dateiformate (`image/png` und `image/jpeg` werden derzeit unterstützt) angeben und die Kompressionsqualität für Screenshots definieren können ([Firefox-Bug 1861737](https://bugzil.la/1861737)).

## Änderungen für Add-on-Entwickler

- {{WebExtAPIRef("commands.update")}} kann jetzt Tastenkombinationen für Befehle den Tasten `F13` bis `F19` zuweisen. Erweiterungen können diese Tasten jedoch nicht aus dem [`commands` manifest.json Schlüssel](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/commands) zuweisen. Benutzer können diesen Tasten auch Funktionen mit [Tastenkombinationen für Erweiterungen verwalten](https://support.mozilla.org/en-US/kb/manage-extension-shortcuts-firefox) zuweisen ([Firefox-Bug 1924542](https://bugzil.la/1924542))

## Experimentelle Webfunktionen

Diese Funktionen sind neu in Firefox 135 enthalten, aber standardmäßig deaktiviert. Um sie auszuprobieren, suchen Sie auf der `about:config`-Seite nach der entsprechenden Einstellung und setzen Sie diese auf `true`. Weitere solcher Funktionen finden Sie auf der Seite [Experimentelle Funktionen](/de/docs/Mozilla/Firefox/Experimental_features).

- **Temporal API** (Nightly-Version): <code>javascript.options.experimental.temporal</code>. Das [Temporal-Objekt](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal) zielt darauf ab, die Arbeit mit Daten und Zeiten in verschiedenen Szenarien zu vereinfachen, mit eingebauten Zeit- und Kalenderdarstellungen. ([Firefox-Bug 1912511](https://bugzil.la/1912511)).
- **Priorisierte Aufgabenplanung API**: <code>dom.enable_web_task_scheduling</code>.
  Die [Priorisierte Aufgabenplanung API](/de/docs/Web/API/Prioritized_Task_Scheduling_API) bietet eine standardisierte Methode zur Priorisierung aller Aufgaben einer Anwendung, unabhängig davon, ob sie im Code des Website-Entwicklers definiert wurden oder in Drittanbieter-Bibliotheken und Frameworks.
  Diese wurde vorübergehend in Nightly-Builds deaktiviert, um [Schäden in freier Wildbahn](https://bugzil.la/1937232) zu vermeiden.
  ([Firefox-Bug 1938242](https://bugzil.la/1938242)).
