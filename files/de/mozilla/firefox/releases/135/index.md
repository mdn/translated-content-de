---
title: Firefox 135 Versionshinweise für Entwickler
short-title: Firefox 135
slug: Mozilla/Firefox/Releases/135
l10n:
  sourceCommit: 61912f53d01e935aea926a2226130fb4587414a9
---

Dieser Artikel enthält Informationen über die Änderungen in Firefox 135, die Entwickler betreffen. Firefox 135 wurde am [4. Februar 2025](https://whattrainisitnow.com/release/?version=135) veröffentlicht.

## Änderungen für Webentwickler

### HTML

Keine bemerkenswerten Änderungen

### CSS

#### Entfernungen

- Die CSS-Eigenschaft [`-moz-user-input`](/de/docs/Web/CSS/-moz-user-input) erlaubte es Ihnen, Eingabefelder zu deaktivieren. Diese Eigenschaft ist jetzt veraltet und wurde entfernt ([Firefox Bug 1935198](https://bugzil.la/1935198)).

### JavaScript

- Der [JSON parse with source proposal](https://github.com/tc39/proposal-json-parse-with-source) wird jetzt unterstützt, um Probleme im Zusammenhang mit Präzisionsverlust zu mildern, die beim Konvertieren von Werten wie großen Gleitkommazahlen und Datumswerten zwischen JavaScript-Werten und JSON-Text auftreten ([Firefox Bug 1934622](https://bugzil.la/1934622)). Insbesondere sind die folgenden Funktionen nun verfügbar:
  - Das `JSON.parse()` [`reviver` Parameter `context` Argument](/de/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse#the_reviver_parameter): Bietet Zugriff auf den ursprünglichen JSON-Quelltext, der geparst wurde.
  - [`JSON.isRawJSON()`](/de/docs/Web/JavaScript/Reference/Global_Objects/JSON/isRawJSON): Testet, ob ein Wert ein Objekt ist, das von `JSON.rawJSON()` zurückgegeben wird.
  - [`JSON.rawJSON()`](/de/docs/Web/JavaScript/Reference/Global_Objects/JSON/rawJSON): Erstellt ein "rohes JSON"-Objekt, das ein Stück JSON-Text enthält, der dann in ein Objekt aufgenommen werden kann, um den angegebenen Wert beizubehalten, wenn dieses Objekt in einen String umgewandelt wird.

### Sicherheit

- [Certificate Transparency](/de/docs/Web/Security/Certificate_Transparency) ist ein Standard, der sicherstellt, dass Zertifikate öffentlich offengelegt werden, bevor Webbrowser ihnen vertrauen. Firefox unterstützt dieses Feature jetzt auf Desktop-Versionen (aber nicht auf Android). Dies betrifft nur Server, die Zertifikate verwenden, die von einer Zertifizierungsstelle im Mozilla Root CA-Programm ausgestellt wurden.
  ([Firefox Bug 1938242](https://bugzil.la/1938242)).

### APIs

- Die statische Methode [`PublicKeyCredential.getClientCapabilities()`](/de/docs/Web/API/PublicKeyCredential/getClientCapabilities_static) wird unterstützt, wodurch eine Webanwendung prüfen kann, ob ein Browser bestimmte [WebAuthn](/de/docs/Web/API/Web_Authentication_API) Funktionen und [Erweiterungen](/de/docs/Web/API/Web_Authentication_API/WebAuthn_extensions) aktiviert, ohne auf User-Agent-Sniffing zurückgreifen zu müssen.
  ([Firefox Bug 1884466](https://bugzil.la/1884466)).

#### DOM

#### Medien, WebRTC und Web Audio

- Die Eigenschaften [`mid`](/de/docs/Web/API/RTCOutboundRtpStreamStats/mid) und [`rid`](/de/docs/Web/API/RTCOutboundRtpStreamStats/rid) der Schnittstelle [`RTCOutboundRtpStreamStats`](/de/docs/Web/API/RTCOutboundRtpStreamStats), sowie die Eigenschaft [`mid`](/de/docs/Web/API/RTCOutboundRtpStreamStats/mid) der Schnittstelle [`RTCInboundRtpStreamStats`](/de/docs/Web/API/RTCInboundRtpStreamStats) werden jetzt unterstützt. ([Firefox Bug 1643001](https://bugzil.la/1643001)).

### WebDriver-Konformität (WebDriver BiDi, Marionette)

#### Allgemein

- Um Benutzereignisse realistischer zu gestalten und reale Benutzerinteraktionen im Browser besser zu simulieren, haben wir die Verarbeitungsreihenfolge der `Perform Actions`-Befehle in sowohl Marionette als auch WebDriver BiDi vom Inhaltsprozess zum übergeordneten Prozess verschoben. Während Ereignisse immer noch synchron vom Inhaltsprozess gesendet werden, werden sie jetzt asynchron durch IPC-Anrufe ausgelöst, die vom übergeordneten Prozess ausgehen ([Firefox Bug 1922077](https://bugzil.la/1922077)).

  Aufgrund dieser bedeutenden Änderung können einige Regressionen noch bestehen. Wenn Sie auf Probleme stoßen, reichen Sie bitte [einen Bug für den Remote Agent ein](https://bugzilla.mozilla.org/enter_bug.cgi?product=Remote%20Protocol&component=Remote%20Agent). Wenn die Regressionen die Testausführung blockieren, können Sie vorübergehend zum vorherigen Verhalten zurückkehren, indem Sie die Firefox-Einstellung `remote.events.async.enabled` auf `false` setzen.

- Mit der Verarbeitung von Aktionen, die jetzt im übergeordneten Prozess erfolgt, wurden folgende Probleme ebenfalls behoben:
  - Wir unterstützen jetzt die ordnungsgemäße Warteschlangenbildung von Aktionssequenzen ohne Race Conditions. Dies ist insbesondere wichtig für den Befehl `input.performActions` von WebDriver BiDi, der mehrmals parallel aufgerufen werden kann und die in der Warteschlange enqueuten Aktionen sequentiell ausführen muss ([Firefox Bug 1915798](https://bugzil.la/1915798)).

  - Beim Dispatchen von Aktionen wird die `input cancel list` jetzt korrekt nur dann aktualisiert, wenn die Aktion erfolgreich versendet wurde. Bisher konnte, wenn eine Aktion nicht ausgeführt werden konnte, eine umgekehrte Aktion verbleiben, was zu unerwarteten Nebeneffekten führte, wenn der Zustand der `input source` zurückgesetzt wurde ([Firefox Bug 1930845](https://bugzil.la/1930845)).

  - Beim Ausführen von Aktionen werden jetzt einzelne Aktionen während des Dispatches erneut versucht, insbesondere in Situationen, in denen eine einzelne Aktion eine Navigation auslöst, die den aktuellen Browsing-Kontext ersetzt ([Firefox Bug 1930530](https://bugzil.la/1930530), [Firefox Bug 1930090](https://bugzil.la/1930090)).

  - Beim Ausführen von Aktionen trat ein `TypeError: can't access property "getActor", browsingContext.currentWindowGlobal is null` Fehler auf, wenn eine Aktion (nicht die letzte) in der Aktionskette das Fenster schloss und die verbleibenden Aktionen immer noch versendet wurden ([Firefox Bug 1932916](https://bugzil.la/1932916)).

- Einige Marionette- und WebDriver BiDi-Befehle, die intern darauf angewiesen sind, dass ein `requestAnimationFrame` vor der Rückkehr gesendet wird, würden hängen bleiben, wenn der aktuelle Browsing-Kontext während ihrer Ausführung navigiert wurde ([Firefox Bug 1937118](https://bugzil.la/1937118)).

#### WebDriver BiDi

- Unterstützung für das `format`-Feld im Befehl `browsingContext.captureScreenshot` hinzugefügt, der es den Clients ermöglicht, verschiedene Dateiformate anzugeben (`image/png` und `image/jpeg` werden derzeit unterstützt) und die Komprimierungsqualität für Screenshots zu definieren ([Firefox Bug 1861737](https://bugzil.la/1861737)).

## Änderungen für Add-on-Entwickler

- {{WebExtAPIRef("commands.update")}} kann jetzt Tastaturkürzel für Befehle den Tasten von `F13` bis `F19` zuweisen. Erweiterungen können diese Tasten jedoch nicht über den [`commands` manifest.json Schlüssel](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/commands) zuweisen. Benutzer können diesen Tasten auch Funktionen zuweisen, indem sie [Erweiterungskürzel verwalten](https://support.mozilla.org/en-US/kb/manage-extension-shortcuts-firefox) verwenden ([Firefox Bug 1924542](https://bugzil.la/1924542)).

## Experimentelle Web-Funktionen

Diese Funktionen wurden neu in Firefox 135 ausgeliefert, sind jedoch standardmäßig deaktiviert. Um sie zu testen, suchen Sie auf der Seite `about:config` nach der entsprechenden Einstellung und setzen Sie sie auf `true`. Weitere solcher Funktionen finden Sie auf der Seite [Experimentelle Funktionen](/de/docs/Mozilla/Firefox/Experimental_features).

- **Temporal API** (Nightly Version): <code>javascript.options.experimental.temporal</code>. Das [Temporal-Objekt](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal) zielt darauf ab, die Arbeit mit Daten und Zeiten in verschiedenen Szenarien zu vereinfachen, mit eingebauten Zeitzonen- und Kalenderdarstellungen. ([Firefox Bug 1912511](https://bugzil.la/1912511)).
- **Prioritized Task Scheduling API**: <code>dom.enable_web_task_scheduling</code>.
  Die [Prioritized Task Scheduling API](/de/docs/Web/API/Prioritized_Task_Scheduling_API) bietet eine standardisierte Möglichkeit, alle Aufgaben zu priorisieren, die zu einer Anwendung gehören, sei es, dass sie im Code eines Website-Entwicklers oder in Drittanbieterbibliotheken und -frameworks definiert sind.
  Dies wurde vorübergehend in Nightly-Versionen deaktiviert, um [Probleme im täglichen Gebrauch](https://bugzil.la/1937232) zu vermeiden.
  ([Firefox Bug 1938242](https://bugzil.la/1938242)).
