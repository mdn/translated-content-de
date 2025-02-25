---
title: runtime
slug: Mozilla/Add-ons/WebExtensions/API/runtime
l10n:
  sourceCommit: 814f49dc14eb8c8a15c6c3bdc6c83d24ed865cdf
---

{{AddonSidebar}}

Dieses Modul bietet Informationen über Ihre Erweiterung und die Umgebung, in der sie ausgeführt wird.

Es bietet auch Nachrichten-APIs, die es Ihnen ermöglichen:

- Kommunikation zwischen verschiedenen Teilen Ihrer Erweiterung. Für Ratschläge zur Auswahl zwischen den Nachrichtenoptionen siehe [Auswahl zwischen einmaligen Nachrichten und verbindungsbasierter Kommunikation](/de/docs/Mozilla/Add-ons/WebExtensions/Content_scripts#choosing_between_one-off_messages_and_connection-based_messaging).
- Kommunikation mit anderen Erweiterungen.
- Kommunikation mit nativen Anwendungen.

## Typen

- {{WebExtAPIRef("runtime.Port")}}
  - : Repräsentiert ein Ende einer Verbindung zwischen zwei spezifischen Kontexten, die zum Austausch von Nachrichten verwendet werden kann.
- {{WebExtAPIRef("runtime.MessageSender")}}
  - : Enthält Informationen über den Absender einer Nachricht oder einer Verbindungsanfrage.
- {{WebExtAPIRef("runtime.PlatformOs")}}
  - : Identifiziert das Betriebssystem des Browsers.
- {{WebExtAPIRef("runtime.PlatformArch")}}
  - : Identifiziert die Prozessorarchitektur des Browsers.
- {{WebExtAPIRef("runtime.PlatformInfo")}}
  - : Enthält Informationen über die Plattform, auf der der Browser läuft.
- {{WebExtAPIRef("runtime.RequestUpdateCheckStatus")}}
  - : Ergebnis eines Aufrufs von {{WebExtAPIRef("runtime.requestUpdateCheck()")}}.
- {{WebExtAPIRef("runtime.OnInstalledReason")}}
  - : Der Grund, warum das {{WebExtAPIRef("runtime.onInstalled")}}-Ereignis ausgelöst wird.
- {{WebExtAPIRef("runtime.OnPerformanceWarningCategory")}}
  - : Die Warnkategorie, die das {{WebExtAPIRef("runtime.onPerformanceWarning")}}-Ereignis ausgelöst hat.
- {{WebExtAPIRef("runtime.OnPerformanceWarningSeverity")}}
  - : Die Warnstufe, die das {{WebExtAPIRef("runtime.onPerformanceWarning")}}-Ereignis ausgelöst hat.
- {{WebExtAPIRef("runtime.OnRestartRequiredReason")}}
  - : Der Grund, warum das {{WebExtAPIRef("runtime.onRestartRequired")}}-Ereignis ausgelöst wird.

## Eigenschaften

- {{WebExtAPIRef("runtime.lastError")}}
  - : Dieser Wert wird gesetzt, wenn eine asynchrone Funktion eine Fehlerbedingung hat, die sie ihrem Aufrufer melden muss.
- {{WebExtAPIRef("runtime.id")}}
  - : Die ID der Erweiterung.

## Funktionen

- {{WebExtAPIRef("runtime.getBackgroundPage()")}}
  - : Ruft das [Window](/de/docs/Web/API/Window)-Objekt für die Hintergrundseite ab, die innerhalb der aktuellen Erweiterung ausgeführt wird.
- {{WebExtAPIRef("runtime.openOptionsPage()")}}
  - : Öffnet die [Optionen-Seite](/de/docs/Mozilla/Add-ons/WebExtensions/user_interface/Options_pages) Ihrer Erweiterung.
- {{WebExtAPIRef("runtime.getContexts()")}}
  - : Ruft Details über die Kontexte ab, die mit der Erweiterung verbunden sind.
- {{WebExtAPIRef("runtime.getFrameId()")}}
  - : Ruft die Frame-ID eines beliebigen Fensters oder Frame-Elements ab.
- {{WebExtAPIRef("runtime.getManifest()")}}
  - : Ruft die vollständige [manifest.json](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json)-Datei ab, serialisiert als Objekt.
- {{WebExtAPIRef("runtime.getURL()")}}
  - : Gibt einen vollqualifizierten URL zurück, wenn ein relativer Pfad von der [manifest.json](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json) zu einer mit der Erweiterung gepackten Ressource gegeben ist.
- {{WebExtAPIRef("runtime.setUninstallURL()")}}
  - : Legt eine URL fest, die beim Deinstallieren der Erweiterung besucht werden soll.
- {{WebExtAPIRef("runtime.reload()")}}
  - : Lädt die Erweiterung neu.
- {{WebExtAPIRef("runtime.requestUpdateCheck()")}}
  - : Prüft auf Updates dieser Erweiterung.
- {{WebExtAPIRef("runtime.connect()")}}
  - : Stellt eine Verbindung von einem Content-Skript zum Hauptprozess der Erweiterung her oder von einer Erweiterung zu einer anderen Erweiterung.
- {{WebExtAPIRef("runtime.connectNative()")}}
  - : Verbindet die Erweiterung mit einer nativen Anwendung auf dem Computer des Benutzers.
- {{WebExtAPIRef("runtime.sendMessage()")}}
  - : Sendet eine Nachricht an Event-Listener innerhalb Ihrer Erweiterung oder einer anderen Erweiterung. Ähnlich wie {{WebExtAPIRef('runtime.connect')}}, jedoch wird nur eine einzelne Nachricht gesendet, mit einer optionalen Antwort.
- {{WebExtAPIRef("runtime.sendNativeMessage()")}}
  - : Sendet eine Nachricht von einer Erweiterung an eine native Anwendung.
- {{WebExtAPIRef("runtime.getPlatformInfo()")}}
  - : Gibt Informationen über die aktuelle Plattform zurück.
- {{WebExtAPIRef("runtime.getBrowserInfo()")}}
  - : Gibt Informationen über den Browser zurück, in dem diese Erweiterung installiert ist.
- {{WebExtAPIRef("runtime.getPackageDirectoryEntry()")}}
  - : Gibt ein DirectoryEntry für das Paketverzeichnis zurück.

## Ereignisse

- {{WebExtAPIRef("runtime.onStartup")}}
  - : Wird ausgelöst, wenn ein Profil, das diese Erweiterung installiert hat, das erste Mal startet. Dieses Ereignis wird nicht ausgelöst, wenn ein Inkognito-Profil gestartet wird.
- {{WebExtAPIRef("runtime.onInstalled")}}
  - : Wird ausgelöst, wenn die Erweiterung erstmals installiert wird, wenn die Erweiterung auf eine neue Version aktualisiert wird und wenn der Browser auf eine neue Version aktualisiert wird.
- {{WebExtAPIRef("runtime.onSuspend")}}
  - : Wird kurz bevor die Erweiterung entladen wird an die Ereignisseite gesendet. Dies gibt der Erweiterung die Möglichkeit, einige Aufräumarbeiten durchzuführen.
- {{WebExtAPIRef("runtime.onSuspendCanceled")}}
  - : Wird nach {{WebExtAPIRef("runtime.onSuspend")}} gesendet, um anzuzeigen, dass die Erweiterung doch nicht entladen wird.
- {{WebExtAPIRef("runtime.onUpdateAvailable")}}
  - : Wird ausgelöst, wenn ein Update verfügbar ist, aber nicht sofort installiert wird, weil die Erweiterung derzeit läuft.
- {{WebExtAPIRef("runtime.onBrowserUpdateAvailable")}} {{deprecated_inline}}
  - : Wird ausgelöst, wenn ein Update für den Browser verfügbar ist, aber nicht sofort installiert wird, weil ein Browser-Neustart erforderlich ist.
- {{WebExtAPIRef("runtime.onConnect")}}
  - : Wird ausgelöst, wenn eine Verbindung mit entweder einem Erweiterungsprozess oder einem Content-Skript hergestellt wird.
- {{WebExtAPIRef("runtime.onConnectExternal")}}
  - : Wird ausgelöst, wenn eine Verbindung mit einer anderen Erweiterung hergestellt wird.
- {{WebExtAPIRef("runtime.onserScriptConnect")}}
  - : Wird ausgelöst, wenn eine Verbindung mit einem von der Erweiterung registrierten Benutzer-Skript hergestellt wird.
- {{WebExtAPIRef("runtime.onMessage")}}
  - : Wird ausgelöst, wenn eine Nachricht von entweder einem Erweiterungsprozess oder einem Content-Skript gesendet wird.
- {{WebExtAPIRef("runtime.onMessageExternal")}}
  - : Wird ausgelöst, wenn eine Nachricht von einer anderen Erweiterung gesendet wird. Kann nicht in einem Content-Skript verwendet werden.
- {{WebExtAPIRef("runtime.onUserScriptMessage")}}
  - : Wird ausgelöst, wenn eine Nachricht von einem von der Erweiterung registrierten Benutzer-Skript gesendet wird.
- {{WebExtAPIRef("runtime.onPerformanceWarning")}}
  - : Wird ausgelöst, wenn ein Leistungsproblem zur Laufzeit für die Erweiterung erkannt wird.
- {{WebExtAPIRef("runtime.onRestartRequired")}}
  - : Wird ausgelöst, wenn das Gerät neu gestartet werden muss.

## Browser-Kompatibilität

{{Compat}}

{{WebExtExamples("h2")}}

> [!NOTE]
> Diese API basiert auf der Chromium-API [`chrome.runtime`](https://developer.chrome.com/docs/extensions/reference/api/runtime). Diese Dokumentation leitet sich von [`runtime.json`](https://chromium.googlesource.com/chromium/src/+/master/extensions/common/api/runtime.json) im Chromium-Code ab.
