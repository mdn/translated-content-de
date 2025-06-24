---
title: Firefox 135 für Entwickler
slug: Mozilla/Firefox/Releases/135
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{FirefoxSidebar}}

In diesem Artikel finden Sie Informationen zu den Änderungen in Firefox 135, die Entwickler betreffen. Firefox 135 wurde am [4. Februar 2025](https://whattrainisitnow.com/release/?version=135) veröffentlicht.

## Änderungen für Webentwickler

### HTML

Keine bemerkenswerten Änderungen

### CSS

#### Entfernungen

- Die CSS-Eigenschaft [`-moz-user-input`](/de/docs/Web/CSS/-moz-user-input) erlaubte es, Eingabefelder zu deaktivieren. Diese Eigenschaft ist nun veraltet und wurde entfernt ([Firefox Bug 1935198](https://bugzil.la/1935198)).

### JavaScript

- Der [JSON parse with source proposal](https://github.com/tc39/proposal-json-parse-with-source) wird jetzt unterstützt, um Probleme beim Verlust von Genauigkeit zu mindern, wenn Werte wie große Fließkommazahlen und Datumswerte zwischen JavaScript-Werten und JSON-Texten konvertiert werden ([Firefox Bug 1934622](https://bugzil.la/1934622)). Insbesondere stehen die folgenden Funktionen jetzt zur Verfügung:
  - Der `reviver` Parameter [`context` Argument von `JSON.parse()`](/de/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse#the_reviver_parameter): Bietet Zugriff auf den ursprünglichen JSON-Quelltext, der analysiert wurde.
  - [`JSON.isRawJSON()`](/de/docs/Web/JavaScript/Reference/Global_Objects/JSON/isRawJSON): Testet, ob ein Wert ein von `JSON.rawJSON()` zurückgegebenes Objekt ist.
  - [`JSON.rawJSON()`](/de/docs/Web/JavaScript/Reference/Global_Objects/JSON/rawJSON): Erstellt ein "raw JSON"-Objekt, das ein Stück JSON-Text enthält, welches dann in ein Objekt eingefügt werden kann, um den angegebenen Wert zu bewahren, wenn dieses Objekt serialisiert wird.

### Sicherheit

- [Certificate Transparency](/de/docs/Web/Security/Certificate_Transparency) ist ein Standard, der sicherstellt, dass Zertifikate öffentlich offengelegt werden, bevor Webbrowser ihnen vertrauen. Firefox unterstützt diese Funktion nun in den Desktop-Versionen (und nicht auf Android).
  Dies betrifft nur Server, die Zertifikate verwenden, die von einer Zertifizierungsstelle im Mozilla Root CA-Programm ausgestellt wurden.
  ([Firefox Bug 1938242](https://bugzil.la/1938242)).

### APIs

- Die statische Methode [`PublicKeyCredential.getClientCapabilities()`](/de/docs/Web/API/PublicKeyCredential/getClientCapabilities_static) wird unterstützt, sodass eine Web-App überprüfen kann, ob ein Browser bestimmte [WebAuthn](/de/docs/Web/API/Web_Authentication_API)-Fähigkeiten und [Erweiterungen](/de/docs/Web/API/Web_Authentication_API/WebAuthn_extensions) aktiviert, ohne auf User-Agent-Erkennung zurückgreifen zu müssen.
  ([Firefox Bug 1884466](https://bugzil.la/1884466)).

#### DOM

#### Medien, WebRTC und Web Audio

- Die Eigenschaften [`mid`](/de/docs/Web/API/RTCOutboundRtpStreamStats/mid) und [`rid`](/de/docs/Web/API/RTCOutboundRtpStreamStats/rid) der Schnittstelle [`RTCOutboundRtpStreamStats`](/de/docs/Web/API/RTCOutboundRtpStreamStats) und die Eigenschaft [`mid`](/de/docs/Web/API/RTCOutboundRtpStreamStats/mid) der Schnittstelle [`RTCInboundRtpStreamStats`](/de/docs/Web/API/RTCInboundRtpStreamStats) werden jetzt unterstützt. ([Firefox Bug 1643001](https://bugzil.la/1643001)).

### WebDriver-Konformität (WebDriver BiDi, Marionette)

#### Allgemein

- Um Benutzereignisse realistischer zu gestalten und echte Benutzerinteraktionen im Browser besser zu simulieren, haben wir die Verarbeitung der Aktionssequenzen der `Perform Actions`-Befehle sowohl in Marionette als auch WebDriver BiDi vom Inhaltsprozess in den Elternprozess verlegt. Während Ereignisse immer noch synchron vom Inhaltsprozess gesendet werden, werden sie jetzt asynchron über IPC-Aufrufe ausgelöst, die vom Elternprozess stammen ([Firefox Bug 1922077](https://bugzil.la/1922077)).

  Aufgrund dieser signifikanten Änderung können einige Regressionen weiterhin bestehen. Wenn Sie auf Probleme stoßen, reichen Sie bitte einen [Bug für den Remote-Agent ein](https://bugzilla.mozilla.org/enter_bug.cgi?product=Remote%20Protocol&component=Remote%20Agent). Sollten die Regressionen die Testausführung blockieren, können Sie vorübergehend zum vorherigen Verhalten zurückkehren, indem Sie die Firefox-Einstellung `remote.events.async.enabled` auf `false` setzen.

- Mit der Verarbeitung von Aktionen, die jetzt im Elternprozess erfolgt, wurden auch die folgenden Probleme behoben:

  - Wir unterstützen nun das ordnungsgemäße Einreihen von Aktionssequenzen ohne Race-Bedingungen. Dies ist besonders wichtig für den `input.performActions`-Befehl von WebDriver BiDi, der mehrmals parallel aufgerufen werden kann und die in die Warteschlange gestellten Aktionen sequenziell ausführen muss ([Firefox Bug 1915798](https://bugzil.la/1915798)).

  - Beim Versenden von Aktionen wird die `input cancel list` jetzt korrekt aktualisiert, erst nachdem die Aktion erfolgreich versendet wurde. Zuvor konnte eine Umkehraktion zurückbleiben, wenn eine Aktion nicht ausgeführt wurde, was zu unerwarteten Nebeneffekten führte, wenn der Status der `input source` zurückgesetzt wurde ([Firefox Bug 1930845](https://bugzil.la/1930845)).

  - Beim Ausführen von Aktionen werden einzelne Aktionen jetzt während des Versands erneut versucht, insbesondere in Situationen, in denen eine einzelne Aktion eine Navigation auslöst, die den aktuellen Browserkontext ersetzt ([Firefox Bug 1930530](https://bugzil.la/1930530), [Firefox Bug 1930090](https://bugzil.la/1930090)).

  - Beim Ausführen von Aktionen trat ein `TypeError: can't access property "getActor", browsingContext.currentWindowGlobal is null`-Fehler auf, wenn eine Aktion (nicht die letzte) in der Aktionskette das Fenster schloss und die verbleibenden Aktionen noch versendet wurden ([Firefox Bug 1932916](https://bugzil.la/1932916)).

- Einige Marionette- und WebDriver-BiDi-Befehle, die intern darauf angewiesen sind, dass ein `requestAnimationFrame` vor der Rückgabe emittiert wird, hingen, wenn der aktuelle Browserkontext während ihrer Ausführung navigiert wurde ([Firefox Bug 1937118](https://bugzil.la/1937118)).

#### WebDriver BiDi

- Unterstützung für das Feld `format` im Befehl `browsingContext.captureScreenshot` hinzugefügt, damit Clients verschiedene Dateiformate (`image/png` und `image/jpeg` werden derzeit unterstützt) festlegen und die Komprimierungsqualität für Screenshots definieren können ([Firefox Bug 1861737](https://bugzil.la/1861737)).

## Änderungen für Add-on-Entwickler

- {{WebExtAPIRef("commands.update")}} kann jetzt Tastaturkürzel für Befehle den Tasten `F13` bis `F19` zuweisen. Allerdings können Erweiterungen diese Tasten nicht über den [`commands` manifest.json Schlüssel](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/commands) zuweisen. Benutzer können auch Funktionen auf diese Tasten mithilfe von [Erweiterungskürzel verwalten](https://support.mozilla.org/en-US/kb/manage-extension-shortcuts-firefox) zuweisen ([Firefox Bug 1924542](https://bugzil.la/1924542)).

## Experimentelle Webfunktionen

Diese Funktionen sind neu in Firefox 135 implementiert, sind jedoch standardmäßig deaktiviert. Um mit ihnen zu experimentieren, suchen Sie die entsprechende Präferenz auf der `about:config`-Seite und setzen Sie sie auf `true`. Weitere solche Funktionen finden Sie auf der Seite [Experimentelle Funktionen](/de/docs/Mozilla/Firefox/Experimental_features).

- **Temporal API** (Nightly-Version): <code>javascript.options.experimental.temporal</code>. Das [Temporal-Objekt](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal) zielt darauf ab, die Arbeit mit Daten und Zeiten in verschiedenen Szenarien zu vereinfachen, mit eingebauten Zeitzonen- und Kalenderdarstellungen. ([Firefox Bug 1912511](https://bugzil.la/1912511)).
- **Prioritized Task Scheduling API**: <code>dom.enable_web_task_scheduling</code>.
  Die [Prioritized Task Scheduling API](/de/docs/Web/API/Prioritized_Task_Scheduling_API) bietet eine standardisierte Möglichkeit, alle Aufgaben einer Anwendung zu priorisieren, unabhängig davon, ob sie im Code eines Website-Entwicklers oder in Drittanbieterbibliotheken und -frameworks definiert sind.
  Diese wurde vorübergehend in Nightly-Builds deaktiviert, um [Probleme in der Praxis](https://bugzil.la/1937232) zu vermeiden.
  ([Firefox Bug 1938242](https://bugzil.la/1938242)).

## Ältere Versionen

{{Firefox_for_developers}}
