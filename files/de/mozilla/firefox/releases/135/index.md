---
title: Firefox 135 für Entwickler
slug: Mozilla/Firefox/Releases/135
l10n:
  sourceCommit: 9c9be5239fe7fb2907784e8cace339d4910eb103
---

{{FirefoxSidebar}}

Dieser Artikel enthält Informationen über die Änderungen in Firefox 135, die Entwickler betreffen. Firefox 135 wurde am [4. Februar 2025](https://whattrainisitnow.com/release/?version=135) veröffentlicht.

## Änderungen für Webentwickler

### HTML

Keine bemerkenswerten Änderungen

### CSS

#### Entfernt

- Die CSS-Eigenschaft [`-moz-user-input`](/de/docs/Web/CSS/-moz-user-input) erlaubte es, Eingabefelder zu deaktivieren. Diese Eigenschaft ist jetzt veraltet und wurde entfernt ([Firefox-Bug 1935198](https://bugzil.la/1935198)).

### JavaScript

- Der [JSON parse with source proposal](https://github.com/tc39/proposal-json-parse-with-source) wird jetzt unterstützt, was darauf abzielt, Funktionen bereitzustellen, um Probleme beim Verlust der Genauigkeit bei der Umwandlung von Werten wie großen Fließkommazahlen und Datumswerten zwischen JavaScript-Werten und JSON-Text zu mindern ([Firefox-Bug 1934622](https://bugzil.la/1934622)). Insbesondere stehen folgende Funktionen nun zur Verfügung:
  - Das `JSON.parse()` [`Reviver-Parameter "context"-Argument](/de/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse#the_reviver_parameter): Bietet Zugriff auf den ursprünglichen JSON-Quelltext, der geparst wurde.
  - [`JSON.isRawJSON()`](/de/docs/Web/JavaScript/Reference/Global_Objects/JSON/isRawJSON): Prüft, ob ein Wert ein von `JSON.rawJSON()` zurückgegebenes Objekt ist.
  - [`JSON.rawJSON()`](/de/docs/Web/JavaScript/Reference/Global_Objects/JSON/rawJSON): Erstellt ein "raw JSON"-Objekt, das ein Stück JSON-Text enthält, welches dann in ein Objekt aufgenommen werden kann, um den angegebenen Wert beim Stringifizieren des Objekts zu erhalten.

### Sicherheit

- [Certificate Transparency](/de/docs/Web/Security/Certificate_Transparency) ist ein Standard, der sicherstellt, dass Zertifikate öffentlich offengelegt werden, bevor Webbrowser ihnen vertrauen. Firefox unterstützt diese Funktion jetzt in Desktop-Versionen (aber nicht auf Android).
  Dies betrifft nur Server, die Zertifikate verwenden, die von einer Zertifizierungsstelle im Root CA-Programm von Mozilla ausgestellt wurden.
  ([Firefox-Bug 1938242](https://bugzil.la/1938242)).

### APIs

- Die statische Methode [`PublicKeyCredential.getClientCapabilities()`](/de/docs/Web/API/PublicKeyCredential/getClientCapabilities_static) wird unterstützt. Sie ermöglicht es einer Webanwendung zu überprüfen, ob ein Browser bestimmte [WebAuthn](/de/docs/Web/API/Web_Authentication_API)-Fähigkeiten und [Erweiterungen](/de/docs/Web/API/Web_Authentication_API/WebAuthn_extensions) aktiviert, ohne auf User-Agent-Sniffing zurückzugreifen.
  ([Firefox-Bug 1884466](https://bugzil.la/1884466)).

#### DOM

#### Medien, WebRTC und Web Audio

- Die Eigenschaften [`mid`](/de/docs/Web/API/RTCOutboundRtpStreamStats/mid) und [`rid`](/de/docs/Web/API/RTCOutboundRtpStreamStats/rid) der [`RTCOutboundRtpStreamStats`](/de/docs/Web/API/RTCOutboundRtpStreamStats)-Schnittstelle und die Eigenschaft [`mid`](/de/docs/Web/API/RTCOutboundRtpStreamStats/mid) der [`RTCInboundRtpStreamStats`](/de/docs/Web/API/RTCInboundRtpStreamStats)-Schnittstelle werden nun unterstützt. ([Firefox-Bug 1643001](https://bugzil.la/1643001)).

### WebDriver Konformität (WebDriver BiDi, Marionette)

#### Allgemein

- Um Benutzerereignisse realistischer zu gestalten und echte Benutzerinteraktionen im Browser besser zu simulieren, haben wir die Verarbeitung von Aktionssequenzen der `Perform Actions`-Befehle sowohl in Marionette als auch in WebDriver BiDi vom Content-Prozess in den Parent-Prozess verschoben. Während Ereignisse weiterhin synchron vom Content-Prozess gesendet werden, werden sie jetzt asynchron über IPC-Aufrufe ausgelöst, die vom Parent-Prozess ausgehen ([Firefox-Bug 1922077](https://bugzilla.mozilla.org/show_bug.cgi?id=1922077)).

  Aufgrund dieser wesentlichen Änderung können noch einige Regressionen existieren. Wenn Sie auf Probleme stoßen, reichen Sie bitte einen [Bug für den Remote Agent ein](https://bugzilla.mozilla.org/enter_bug.cgi?product=Remote%20Protocol&component=Remote%20Agent). Wenn die Regressionen die Testausführung blockieren, können Sie vorübergehend zum vorherigen Verhalten zurückkehren, indem Sie die Firefox-Einstellung `remote.events.async.enabled` auf `false` setzen.

- Mit der Verarbeitung von Aktionen, die jetzt im Parent-Prozess erfolgt, wurden auch folgende Probleme behoben:

  - Wir unterstützen nun die richtige Warteschlangenbildung von Aktionssequenzen ohne Race Conditions. Dies ist besonders wichtig für den `input.performActions`-Befehl von WebDriver BiDi, der mehrmals parallel aufgerufen werden kann und die enqueuten Aktionen sequentiell ausführen muss ([Firefox-Bug 1915798](https://bugzilla.mozilla.org/show_bug.cgi?id=1915798)).

  - Beim Versenden von Aktionen wird die `input cancel list` jetzt korrekt aktualisiert, nachdem die Aktion erfolgreich versendet wurde. Zuvor, wenn eine Aktion nicht ausgeführt werden konnte, konnte eine gegenläufige Aktion übrig bleiben, die zu unerwarteten Nebenwirkungen bei der Rücksetzung des Zustands der `input source` führte ([Firefox-Bug 1930845](https://bugzilla.mozilla.org/show_bug.cgi?id=1930845)).

  - Bei der Ausführung von Aktionen werden einzelne Aktionen während des Versendens nun erneut versucht, insbesondere in Situationen, in denen eine einzelne Aktion eine Navigation auslöst, die den aktuellen Browserkontext ersetzt ([Firefox-Bug 1930530](https://bugzilla.mozilla.org/show_bug.cgi?id=1930530), [Firefox-Bug 1930090](https://bugzilla.mozilla.org/show_bug.cgi?id=1930090)).

  - Bei der Ausführung von Aktionen trat ein Fehler `TypeError: can't access property "getActor", browsingContext.currentWindowGlobal is null` auf, wenn eine Aktion (nicht die letzte) im Aktionsablauf das Fenster schloss und die verbleibenden Aktionen noch versendet wurden ([Firefox-Bug 1932916](https://bugzilla.mozilla.org/show_bug.cgi?id=1932916)).

- Einige Marionette und WebDriver BiDi-Befehle, die intern auf das Auslösen einer `requestAnimationFrame`-Rückgabefunktion vor dem Zurückgeben angewiesen sind, würden hängenbleiben, wenn der aktuelle Browserkontext während ihrer Ausführung navigiert wurde ([Firefox-Bug 1937118](https://bugzilla.mozilla.org/show_bug.cgi?id=1937118)).

#### WebDriver BiDi

- Unterstützung für das `format`-Feld im `browsingContext.captureScreenshot`-Befehl wurde hinzugefügt, wodurch es Clients möglich wird, verschiedene Dateiformate anzugeben (`image/png` und `image/jpeg` werden aktuell unterstützt) und die Kompressionsqualität für Screenshots zu definieren ([Firefox-Bug 1861737](https://bugzilla.mozilla.org/show_bug.cgi?id=1861737)).

## Änderungen für Add-on-Entwickler

- {{WebExtAPIRef("commands.update")}} kann jetzt Tastenkombinationen für Befehle den Tasten von `F13` bis `F19` zuweisen. Allerdings können Erweiterungen diese Tasten nicht über den [`commands`-Schlüssel in der manifest.json](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/commands) zuweisen. Benutzer können diese Tasten auch über [Extension Shortcuts verwalten](https://support.mozilla.org/en-US/kb/manage-extension-shortcuts-firefox) Funktionen zuweisen ([Firefox-Bug 1924542](https://bugzil.la/1924542)).

## Experimentelle Web-Features

Diese Funktionen sind neu in Firefox 135, aber standardmäßig deaktiviert. Um sie auszuprobieren, suchen Sie auf der `about:config`-Seite nach der entsprechenden Einstellung und setzen Sie sie auf `true`. Weitere solche Funktionen finden Sie auf der Seite [Experimentelle Features](/de/docs/Mozilla/Firefox/Experimental_features).

- **Temporal API** (Nightly-Version): <code>javascript.options.experimental.temporal</code>. Das [Temporal-Objekt](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal) zielt darauf ab, die Arbeit mit Daten und Zeiten in verschiedenen Szenarien zu vereinfachen, mit integrierten Zeitzonen- und Kalenderdarstellungen. ([Firefox-Bug 1912511](https://bugzil.la/1912511)).
- **Prioritized Task Scheduling API**: <code>dom.enable_web_task_scheduling</code>.
  Die [Prioritized Task Scheduling API](/de/docs/Web/API/Prioritized_Task_Scheduling_API) bietet eine standardisierte Methode, um alle Aufgaben einer Anwendung prioritär zu behandeln, egal ob sie im Code eines Webentwicklers oder in Drittanbieterbibliotheken und -frameworks definiert sind.
  Diese Funktion wurde vorübergehend in Nightly-Builds deaktiviert, um [Schäden in freier Wildbahn](https://bugzil.la/1937232) zu vermeiden.
  ([Firefox-Bug 1938242](https://bugzil.la/1938242)).

## Ältere Versionen

{{Firefox_for_developers}}
