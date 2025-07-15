---
title: Firefox 135 für Entwickler
short-title: Firefox 135
slug: Mozilla/Firefox/Releases/135
l10n:
  sourceCommit: 64df508685abcbc047f6c1a973505921fad1484e
---

Dieser Artikel bietet Informationen über die Änderungen in Firefox 135, die Entwickler betreffen. Firefox 135 wurde am [4. Februar 2025](https://whattrainisitnow.com/release/?version=135) veröffentlicht.

## Änderungen für Webentwickler

### HTML

Keine bemerkenswerten Änderungen

### CSS

#### Entfernungen

- Die [`-moz-user-input`](/de/docs/Web/CSS/-moz-user-input) CSS-Eigenschaft erlaubte es Ihnen, Eingabefelder zu deaktivieren. Die Eigenschaft ist nun veraltet und wurde entfernt ([Firefox-Bug 1935198](https://bugzil.la/1935198)).

### JavaScript

- Der [JSON parse with source proposal](https://github.com/tc39/proposal-json-parse-with-source) wird jetzt unterstützt. Dieser Vorschlag zielt darauf ab, Funktionen bereitzustellen, um Probleme bei Präzisionsverlust zu mindern, wenn Werte wie große Fließkommazahlen und Datumswerte zwischen JavaScript-Werten und JSON-Text konvertiert werden ([Firefox-Bug 1934622](https://bugzil.la/1934622)). Insbesondere sind die folgenden Funktionen jetzt verfügbar:
  - Das `JSON.parse()` [`reviver`-Parameter-`context`-Argument](/de/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse#the_reviver_parameter): Bietet Zugriff auf den ursprünglichen JSON-Quelltext, der geparst wurde.
  - [`JSON.isRawJSON()`](/de/docs/Web/JavaScript/Reference/Global_Objects/JSON/isRawJSON): Prüft, ob ein Wert ein von `JSON.rawJSON()` zurückgegebenes Objekt ist.
  - [`JSON.rawJSON()`](/de/docs/Web/JavaScript/Reference/Global_Objects/JSON/rawJSON): Erzeugt ein "rohes JSON"-Objekt, das ein Stück JSON-Text enthält und anschließend in ein Objekt aufgenommen werden kann, um den angegebenen Wert beim Umwandeln in einen String zu bewahren.

### Sicherheit

- [Certificate Transparency](/de/docs/Web/Security/Certificate_Transparency) ist ein Standard, der sicherstellt, dass Zertifikate öffentlich bekannt gemacht werden, bevor Webbrowser ihnen vertrauen. Firefox unterstützt diese Funktion jetzt in Desktop-Versionen (nicht jedoch auf Android). Dies betrifft nur Server, die Zertifikate verwenden, die von einer Zertifizierungsstelle im Mozilla Root CA-Programm ausgestellt wurden. ([Firefox-Bug 1938242](https://bugzil.la/1938242)).

### APIs

- Die statische Methode [`PublicKeyCredential.getClientCapabilities()`](/de/docs/Web/API/PublicKeyCredential/getClientCapabilities_static) wird unterstützt und ermöglicht einer Web-App, zu überprüfen, ob ein Browser bestimmte [WebAuthn](/de/docs/Web/API/Web_Authentication_API)-Funktionen und [Erweiterungen](/de/docs/Web/API/Web_Authentication_API/WebAuthn_extensions) unterstützt, ohne auf das Erkennen des User Agents zurückzugreifen. ([Firefox-Bug 1884466](https://bugzil.la/1884466)).

#### DOM

#### Medien, WebRTC und Web Audio

- Die Eigenschaften [`mid`](/de/docs/Web/API/RTCOutboundRtpStreamStats/mid) und [`rid`](/de/docs/Web/API/RTCOutboundRtpStreamStats/rid) der [`RTCOutboundRtpStreamStats`](/de/docs/Web/API/RTCOutboundRtpStreamStats)-Schnittstelle sowie die [`mid`](/de/docs/Web/API/RTCOutboundRtpStreamStats/mid)-Eigenschaft der [`RTCInboundRtpStreamStats`](/de/docs/Web/API/RTCInboundRtpStreamStats)-Schnittstelle werden jetzt unterstützt. ([Firefox-Bug 1643001](https://bugzil.la/1643001)).

### WebDriver-Konformität (WebDriver BiDi, Marionette)

#### Allgemein

- Um Benutzereingaben realistischer zu gestalten und reale Benutzerinteraktionen im Browser besser zu simulieren, haben wir die Verarbeitung der Aktionssequenz der `Perform Actions`-Befehle in Marionette und WebDriver BiDi vom Inhaltsprozess in den Elternprozess verlagert. Während Ereignisse weiterhin synchron vom Inhaltsprozess gesendet werden, werden sie nun asynchron über IPC-Aufrufe ausgelöst, die vom Elternprozess stammen ([Firefox-Bug 1922077](https://bugzil.la/1922077)).

  Aufgrund dieser signifikanten Änderung können einige Regressionen noch vorhanden sein. Wenn Sie auf Probleme stoßen, reichen Sie bitte [einen Fehlerbericht für den Remote Agent ein](https://bugzilla.mozilla.org/enter_bug.cgi?product=Remote%20Protocol&component=Remote%20Agent). Falls die Regressionen die Testausführung blockieren, können Sie vorübergehend zum vorherigen Verhalten zurückkehren, indem Sie die Firefox-Einstellung `remote.events.async.enabled` auf `false` setzen.

- Mit der Verarbeitung der Aktionen im Elternprozess wurden auch folgende Probleme behoben:
  - Wir unterstützen nun eine ordnungsgemäße Warteschlangenabwicklung von Aktionssequenzen ohne Race-Bedingungen. Dies ist besonders wichtig für den `input.performActions`-Befehl von WebDriver BiDi, der mehrfach parallel aufgerufen werden kann und die Aufgaben in der richtigen Reihenfolge ausführen muss ([Firefox-Bug 1915798](https://bugzil.la/1915798)).

  - Beim Versenden von Aktionen wird die `input cancel list` jetzt korrekt erst nach erfolgreichem Versenden der Aktion aktualisiert. Früher konnte, falls eine Aktion fehlschlug, eine Umkehrung der Aktion bestehen bleiben, was zu unerwarteten Nebeneffekten beim Zurücksetzen des Zustands der `input source` führen konnte ([Firefox-Bug 1930845](https://bugzil.la/1930845)).

  - Bei der Ausführung von Aktionen werden einzelne Aktionen nun während der Versendung erneut versucht, insbesondere in Situationen, in denen eine einzelne Aktion eine Navigation auslöst, die den aktuellen Browsing-Kontext ersetzt ([Firefox-Bug 1930530](https://bugzil.la/1930530), [Firefox-Bug 1930090](https://bugzil.la/1930090)).

  - Beim Ausführen von Aktionen trat der Fehler `TypeError: can't access property "getActor", browsingContext.currentWindowGlobal is null` auf, wenn eine Aktion (nicht die letzte) in der Aktionskette das Fenster schloss und die verbleibenden Aktionen noch versendet wurden ([Firefox-Bug 1932916](https://bugzil.la/1932916)).

- Einige Marionette- und WebDriver BiDi-Befehle, die intern darauf angewiesen sind, dass ein `requestAnimationFrame` vor der Rückkehr gesendet wird, hängten sich auf, wenn der aktuelle Browsing-Kontext während ihrer Ausführung navigiert wurde ([Firefox-Bug 1937118](https://bugzil.la/1937118)).

#### WebDriver BiDi

- Unterstützung für das `format`-Feld im `browsingContext.captureScreenshot`-Befehl hinzugefügt, wodurch Clients verschiedene Dateiformate angeben können (`image/png` und `image/jpeg` werden derzeit unterstützt) und die Kompressionsqualität für Screenshots definieren können ([Firefox-Bug 1861737](https://bugzil.la/1861737)).

## Änderungen für Add-on-Entwickler

- {{WebExtAPIRef("commands.update")}} kann jetzt Tastenkombinationen für Befehle den Tasten `F13` bis `F19` zuweisen. Allerdings können Erweiterungen diese Tasten nicht über den [`commands` manifest.json-Schlüssel](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/commands) zuweisen. Benutzer können diesen Tasten auch Funktionen mithilfe von [Erweiterungshortcuts verwalten](https://support.mozilla.org/en-US/kb/manage-extension-shortcuts-firefox) zuweisen ([Firefox-Bug 1924542](https://bugzil.la/1924542)).

## Experimentelle Web-Funktionen

Diese Funktionen sind neu in Firefox 135 ausgeliefert worden, aber standardmäßig deaktiviert. Um mit ihnen zu experimentieren, suchen Sie auf der `about:config`-Seite nach der entsprechenden Einstellung und setzen Sie sie auf `true`. Weitere solcher Funktionen finden Sie auf der Seite [Experimentelle Funktionen](/de/docs/Mozilla/Firefox/Experimental_features).

- **Temporal API** (Nightly Version): <code>javascript.options.experimental.temporal</code>. Das [Temporal-Objekt](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal) soll das Arbeiten mit Daten und Uhrzeiten in verschiedenen Szenarien vereinfachen, mit eingebauten Zeitzonen- und Kalenderdarstellungen. ([Firefox-Bug 1912511](https://bugzil.la/1912511)).
- **Priorisierte Aufgabenplanung API**: <code>dom.enable_web_task_scheduling</code>.
  Die [Priorisierte Aufgabenplanung API](/de/docs/Web/API/Prioritized_Task_Scheduling_API) bietet eine standardisierte Methode zur Priorisierung aller Aufgaben, die zu einer Anwendung gehören, egal ob sie im Code eines Webentwicklers definiert sind oder in Drittanbieter-Bibliotheken und Frameworks.
  Diese wurde vorübergehend in Nightly-Builds deaktiviert, um [Ausfälle in freier Wildbahn zu vermeiden](https://bugzil.la/1937232).
  ([Firefox-Bug 1938242](https://bugzil.la/1938242)).
