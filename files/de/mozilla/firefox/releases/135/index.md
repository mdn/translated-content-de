---
title: Firefox 135 für Entwickler
slug: Mozilla/Firefox/Releases/135
l10n:
  sourceCommit: 1d3d0c10ebf5c8c55f75b9adce74d1e5001866c6
---

Dieser Artikel bietet Informationen über die Änderungen in Firefox 135, die Entwickler betreffen. Firefox 135 wurde am [4. Februar 2025](https://whattrainisitnow.com/release/?version=135) veröffentlicht.

## Änderungen für Webentwickler

### HTML

Keine nennenswerten Änderungen

### CSS

#### Entfernungen

- Die [`-moz-user-input`](/de/docs/Web/CSS/-moz-user-input) CSS-Eigenschaft, die es ermöglichte, Eingabefelder zu deaktivieren, ist nun veraltet und wurde entfernt ([Firefox-Bug 1935198](https://bugzil.la/1935198)).

### JavaScript

- Der [JSON parse with source proposal](https://github.com/tc39/proposal-json-parse-with-source) wird jetzt unterstützt, was darauf abzielt, Funktionen bereitzustellen, um Probleme bei Präzisionsverlusten beim Konvertieren von Werten wie großen Gleitkommazahlen und Datumswerten zwischen JavaScript-Werten und JSON-Text zu mildern ([Firefox-Bug 1934622](https://bugzil.la/1934622)). Insbesondere sind jetzt die folgenden Funktionen verfügbar:
  - Das `JSON.parse()` [`reviver`-Parameter `context`-Argument](/de/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse#the_reviver_parameter): Ermöglicht den Zugriff auf den ursprünglichen JSON-Quelltext, der geparst wurde.
  - [`JSON.isRawJSON()`](/de/docs/Web/JavaScript/Reference/Global_Objects/JSON/isRawJSON): Prüft, ob ein Wert ein Objekt ist, das von `JSON.rawJSON()` zurückgegeben wird.
  - [`JSON.rawJSON()`](/de/docs/Web/JavaScript/Reference/Global_Objects/JSON/rawJSON): Erstellt ein "rohes JSON"-Objekt, das ein Stück JSON-Text enthält, welches in ein Objekt eingefügt werden kann, um den angegebenen Wert beim Serialisieren des Objekts zu bewahren.

### Sicherheit

- [Certificate Transparency](/de/docs/Web/Security/Certificate_Transparency) ist ein Standard, der sicherstellt, dass Zertifikate öffentlich bekannt gegeben werden, bevor Webbrowser ihnen vertrauen. Firefox unterstützt nun diese Funktion in Desktop-Versionen (aber nicht auf Android).
  Dies betrifft nur Server, die Zertifikate verwenden, die von einer Zertifizierungsstelle im Mozilla Root CA-Programm ausgestellt wurden.
  ([Firefox-Bug 1938242](https://bugzil.la/1938242)).

### APIs

- Die [`PublicKeyCredential.getClientCapabilities()`](/de/docs/Web/API/PublicKeyCredential/getClientCapabilities_static) statische Methode wird unterstützt, wodurch eine Webanwendung prüfen kann, ob ein Browser bestimmte [WebAuthn](/de/docs/Web/API/Web_Authentication_API) Fähigkeiten und [Erweiterungen](/de/docs/Web/API/Web_Authentication_API/WebAuthn_extensions) aktiviert, ohne sich auf das Erkennen von Nutzeragenten verlassen zu müssen.
  ([Firefox-Bug 1884466](https://bugzil.la/1884466)).

#### DOM

#### Medien, WebRTC und Web Audio

- Die [`mid`](/de/docs/Web/API/RTCOutboundRtpStreamStats/mid) und [`rid`](/de/docs/Web/API/RTCOutboundRtpStreamStats/rid) Eigenschaften der [`RTCOutboundRtpStreamStats`](/de/docs/Web/API/RTCOutboundRtpStreamStats) Schnittstelle und die [`mid`](/de/docs/Web/API/RTCOutboundRtpStreamStats/mid) Eigenschaft der [`RTCInboundRtpStreamStats`](/de/docs/Web/API/RTCInboundRtpStreamStats) Schnittstelle werden jetzt unterstützt. ([Firefox-Bug 1643001](https://bugzil.la/1643001)).

### WebDriver-Konformität (WebDriver BiDi, Marionette)

#### Allgemein

- Um Benutzerevents realistischer zu gestalten und reale Benutzerinteraktionen im Browser besser zu simulieren, haben wir die Bearbeitung der Aktionssequenz der `Perform Actions`-Befehle sowohl in Marionette als auch in WebDriver BiDi vom Inhaltsprozess in den übergeordneten Prozess verlagert. Während Ereignisse weiterhin synchron vom Inhaltsprozess gesendet werden, werden sie jetzt asynchron über IPC-Aufrufe ausgelöst, die vom übergeordneten Prozess stammen ([Firefox-Bug 1922077](https://bugzil.la/1922077)).

  Aufgrund dieser signifikanten Änderung können einige Regressionen noch existieren. Wenn Sie auf Probleme stoßen, [erstellen Sie bitte einen Fehlerbericht für den Remote-Agent](https://bugzilla.mozilla.org/enter_bug.cgi?product=Remote%20Protocol&component=Remote%20Agent). Wenn die Regressionen die Testausführung blockieren, können Sie vorübergehend zum vorherigen Verhalten zurückkehren, indem Sie die Firefox-Einstellung `remote.events.async.enabled` auf `false` setzen.

- Mit der Bearbeitung der Aktionen, die jetzt im übergeordneten Prozess verwaltet wird, wurden auch folgende Probleme behoben:
  - Wir unterstützen jetzt eine ordnungsgemäße Warteschlange von Aktionssequenzen ohne Race-Bedingungen. Dies ist besonders wichtig für WebDriver BiDis `input.performActions`-Befehl, der mehrmals parallel aufgerufen werden kann und die eingereihten Aktionen nacheinander ausführen muss ([Firefox-Bug 1915798](https://bugzil.la/1915798)).

  - Beim Senden von Aktionen wird die `input cancel list` jetzt korrekt aktualisiert, nachdem die Aktion erfolgreich gesendet wurde. Zuvor konnte eine Rückwärtsaktion verbleiben, wenn eine Aktion nicht ausgeführt werden konnte, was zu unerwarteten Nebeneffekten beim Zurücksetzen des `input source`-Zustands führte ([Firefox-Bug 1930845](https://bugzil.la/1930845)).

  - Bei der Durchführung von Aktionen werden einzelne Aktionen während des Ablaufs jetzt erneut versucht, insbesondere in Situationen, in denen eine einzelne Aktion eine Navigation auslöst, die den aktuellen Browsing-Kontext ersetzt ([Firefox-Bug 1930530](https://bugzil.la/1930530), [Firefox-Bug 1930090](https://bugzil.la/1930090)).

  - Bei der Durchführung von Aktionen trat ein `TypeError: can't access property "getActor", browsingContext.currentWindowGlobal is null`-Fehler auf, wenn eine Aktion (nicht die letzte) im Aktionsablauf das Fenster schloss und die verbleibenden Aktionen noch gesendet wurden ([Firefox-Bug 1932916](https://bugzil.la/1932916)).

- Einige Marionette- und WebDriver BiDi-Befehle, die intern davon abhängen, dass ein `requestAnimationFrame` ausgegeben wird, bevor sie zurückkehren, würden hängen bleiben, wenn der aktuelle Browsing-Kontext während ihrer Ausführung navigiert wurde ([Firefox-Bug 1937118](https://bugzil.la/1937118)).

#### WebDriver BiDi

- Unterstützung für das `format`-Feld im `browsingContext.captureScreenshot`-Befehl hinzugefügt, sodass Clients verschiedene Dateiformate angeben können (`image/png` und `image/jpeg` werden derzeit unterstützt) und die Kompressionsqualität für Screenshots definieren können ([Firefox-Bug 1861737](https://bugzil.la/1861737)).

## Änderungen für Add-on-Entwickler

- {{WebExtAPIRef("commands.update")}} kann jetzt Tastaturkürzel für Befehle den Tasten `F13` bis `F19` zuweisen. Erweiterungen können jedoch diese Tasten nicht über den [`commands` manifest.json-Schlüssel](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/commands) zuweisen. Benutzer können diese Tasten auch über [Verwalten von Erweiterungs-Kurzbefehlen](https://support.mozilla.org/en-US/kb/manage-extension-shortcuts-firefox) Funktionen zuweisen ([Firefox-Bug 1924542](https://bugzil.la/1924542)).

## Experimentelle Web-Features

Diese Features sind neu in Firefox 135 enthalten, aber standardmäßig deaktiviert. Um sie auszuprobieren, suchen Sie auf der `about:config`-Seite nach der entsprechenden Einstellung und setzen Sie sie auf `true`. Weitere solcher Features finden Sie auf der Seite [Experimentelle Funktionen](/de/docs/Mozilla/Firefox/Experimental_features).

- **Temporal API** (Nightly-Version): <code>javascript.options.experimental.temporal</code>. Das [Temporal-Objekt](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal) zielt darauf ab, die Arbeit mit Daten und Zeiten in verschiedenen Szenarien zu vereinfachen, mit eingebauten Zeitzonen- und Kalenderdarstellungen. ([Firefox-Bug 1912511](https://bugzil.la/1912511)).
- **API für priorisierte Aufgabenplanung**: <code>dom.enable_web_task_scheduling</code>.
  Die [API für priorisierte Aufgabenplanung](/de/docs/Web/API/Prioritized_Task_Scheduling_API) bietet eine standardisierte Möglichkeit, alle Aufgaben einer Anwendung zu priorisieren, egal ob sie im Code eines Website-Entwicklers oder in Drittanbieter-Bibliotheken und Frameworks definiert sind.
  Diese Funktion wurde vorübergehend in Nightly-Builds deaktiviert, um [Ausfälle im-Einsatz](https://bugzil.la/1937232) zu vermeiden.
  ([Firefox-Bug 1938242](https://bugzil.la/1938242)).

## Ältere Versionen

{{Firefox_for_developers}}
