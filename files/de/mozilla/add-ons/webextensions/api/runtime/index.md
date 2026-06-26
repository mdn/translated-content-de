---
title: runtime
slug: Mozilla/Add-ons/WebExtensions/API/runtime
l10n:
  sourceCommit: 9791add3508e087982097f25fbd367c21bcb8305
---

Dieses Modul bietet Informationen über Ihre Erweiterung und die Umgebung, in der sie ausgeführt wird.

Es bietet auch Messaging-APIs, die es Ihnen ermöglichen:

- Zwischen verschiedenen Teilen Ihrer Erweiterung zu kommunizieren. Für Ratschläge zur Auswahl zwischen den Messaging-Optionen siehe [Auswahl zwischen einmaligen Nachrichten und verbindungsbasierten Nachrichten](/de/docs/Mozilla/Add-ons/WebExtensions/Content_scripts#choosing_between_one-off_messages_and_connection-based_messaging).
- Mit anderen Erweiterungen zu kommunizieren.
- Mit nativen Anwendungen zu kommunizieren.

## Typen

- {{WebExtAPIRef("runtime.Port")}}
  - : Stellt ein Ende einer Verbindung zwischen zwei spezifischen Kontexte dar, die zum Austausch von Nachrichten verwendet werden kann.
- {{WebExtAPIRef("runtime.MessageSender")}}
  - : Enthält Informationen über den Absender einer Nachricht oder Verbindungsanfrage.
- {{WebExtAPIRef("runtime.PlatformOs")}}
  - : Identifiziert das Betriebssystem des Browsers.
- {{WebExtAPIRef("runtime.PlatformArch")}}
  - : Identifiziert die Prozessorarchitektur des Browsers.
- {{WebExtAPIRef("runtime.PlatformInfo")}}
  - : Beinhaltet Informationen über die Plattform, auf der der Browser ausgeführt wird.
- {{WebExtAPIRef("runtime.PlatformNaclArch")}} {{deprecated_inline}}
  - : Der veraltete Enumerationswert, der die Architektur des Google Native Clients repräsentiert. Erwägen Sie die Migration zu `PlatformArch`, das von Safari und Mozilla unterstützt wird und die tatsächliche CPU-Architektur darstellt und korrekte Bitness-Informationen auf ARM vermittelt.
- {{WebExtAPIRef("runtime.RequestUpdateCheckStatus")}}
  - : Ergebnis eines Aufrufs von {{WebExtAPIRef("runtime.requestUpdateCheck()")}}.
- {{WebExtAPIRef("runtime.OnInstalledReason")}}
  - : Der Grund, warum das {{WebExtAPIRef("runtime.onInstalled")}}-Ereignis ausgelöst wird.
- {{WebExtAPIRef("runtime.OnPerformanceWarningCategory")}}
  - : Die Kategori der Warnung, die das {{WebExtAPIRef("runtime.onPerformanceWarning")}}-Ereignis ausgelöst hat.
- {{WebExtAPIRef("runtime.OnPerformanceWarningSeverity")}}
  - : Die Schwere der Warnung, die das {{WebExtAPIRef("runtime.onPerformanceWarning")}}-Ereignis ausgelöst hat.
- {{WebExtAPIRef("runtime.OnRestartRequiredReason")}}
  - : Der Grund, warum das {{WebExtAPIRef("runtime.onRestartRequired")}}-Ereignis ausgelöst wird.

## Eigenschaften

- {{WebExtAPIRef("runtime.lastError")}}
  - : Dieser Wert wird gesetzt, wenn eine asynchrone Funktion einen Fehlerzustand hat, den sie ihrem Aufrufer melden muss.
- {{WebExtAPIRef("runtime.id")}}
  - : Die ID der Erweiterung.

## Funktionen

- {{WebExtAPIRef("runtime.getBackgroundPage()")}}
  - : Ruft das [Window](/de/docs/Web/API/Window)-Objekt für die Hintergrundseite ab, die in der aktuellen Erweiterung ausgeführt wird.
- {{WebExtAPIRef("runtime.getDocumentId()")}}
  - : Gibt die Dokument-ID eines beliebigen Fenster-Globals oder Rahmen-Elements zurück.
- {{WebExtAPIRef("runtime.openOptionsPage()")}}
  - : Öffnet die [Optionen-Seite](/de/docs/Mozilla/Add-ons/WebExtensions/user_interface/Options_pages) Ihrer Erweiterung.
- {{WebExtAPIRef("runtime.getContexts()")}}
  - : Ruft Details über die mit der Erweiterung verbundenen Kontexte ab.
- {{WebExtAPIRef("runtime.getFrameId()")}}
  - : Ruft die Frame-ID eines beliebigen Fenster-Globals oder Rahmen-Elements ab.
- {{WebExtAPIRef("runtime.getManifest()")}}
  - : Ruft eine Objekt-Darstellung der vollständigen [`manifest.json`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json)-Datei ab.
- {{WebExtAPIRef("runtime.getURL()")}}
  - : Gibt einen vollqualifizierten URL zurück, gegeben einen relativen Pfad von der [manifest.json](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json) zu einer mit der Erweiterung verpackten Ressource.
- {{WebExtAPIRef("runtime.getVersion()")}}
  - : Ruft den Erweiterungs-Versionsstring aus dem [`manifest.json`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json)-Datei-[`version`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/version)-Schlüssel ab. Die zurückgegebene Version kann sich von dem String in der Datei unterscheiden, da der Browser es aufzeigen und serialisieren kann.
- {{WebExtAPIRef("runtime.setUninstallURL()")}}
  - : Legt eine URL fest, die besucht werden soll, wenn die Erweiterung deinstalliert wird.
- {{WebExtAPIRef("runtime.reload()")}}
  - : Lädt die Erweiterung neu.
- {{WebExtAPIRef("runtime.requestUpdateCheck()")}}
  - : Überprüft auf Updates für diese Erweiterung.
- {{WebExtAPIRef("runtime.connect()")}}
  - : Erstellt eine Verbindung von einem Content Script zum Haupt-Erweiterungsprozess oder von einer Erweiterung zu einer anderen Erweiterung.
- {{WebExtAPIRef("runtime.connectNative()")}}
  - : Verbindet die Erweiterung mit einer nativen Anwendung auf dem Computer des Benutzers.
- {{WebExtAPIRef("runtime.sendMessage()")}}
  - : Sendet eine Nachricht an Ereignis-Listener innerhalb Ihrer Erweiterung oder an eine andere Erweiterung. Ähnlich wie {{WebExtAPIRef('runtime.connect')}}, jedoch wird nur eine einzelne Nachricht gesendet, mit einer optionalen Antwort.
- {{WebExtAPIRef("runtime.sendNativeMessage()")}}
  - : Sendet eine Nachricht von einer Erweiterung an eine native Anwendung.
- {{WebExtAPIRef("runtime.getPlatformInfo()")}}
  - : Gibt Informationen über die aktuelle Plattform zurück.
- {{WebExtAPIRef("runtime.getBrowserInfo()")}}
  - : Gibt Informationen über den Browser zurück, in dem diese Erweiterung installiert ist.
- {{WebExtAPIRef("runtime.getPackageDirectoryEntry()")}}
  - : Gibt einen DirectoryEntry für das Paket-Verzeichnis zurück.

## Ereignisse

- {{WebExtAPIRef("runtime.onStartup")}}
  - : Wird ausgelöst, wenn ein Profil, das diese Erweiterung installiert hat, zum ersten Mal gestartet wird. Dieses Ereignis wird nicht ausgelöst, wenn ein Inkognito-Profil gestartet wird.
- {{WebExtAPIRef("runtime.onInstalled")}}
  - : Wird ausgelöst, wenn die Erweiterung erstmals installiert wird, wenn die Erweiterung auf eine neue Version aktualisiert wird und wenn der Browser auf eine neue Version aktualisiert wird.
- {{WebExtAPIRef("runtime.onSuspend")}}
  - : Wird an die Ereignisseite gesendet, kurz bevor die Erweiterung entladen wird. Dies gibt der Erweiterung die Gelegenheit, einige Aufräumarbeiten vorzunehmen.
- {{WebExtAPIRef("runtime.onSuspendCanceled")}}
  - : Wird nach {{WebExtAPIRef("runtime.onSuspend")}} gesendet, um anzuzeigen, dass die Erweiterung doch nicht entladen wird.
- {{WebExtAPIRef("runtime.onUpdateAvailable")}}
  - : Wird ausgelöst, wenn ein Update verfügbar ist, aber nicht sofort installiert wird, weil die Erweiterung derzeit läuft.
- {{WebExtAPIRef("runtime.onBrowserUpdateAvailable")}} {{deprecated_inline}}
  - : Wird ausgelöst, wenn ein Update für den Browser verfügbar ist, aber nicht sofort installiert wird, weil ein Neustart des Browsers erforderlich ist.
- {{WebExtAPIRef("runtime.onConnect")}}
  - : Wird ausgelöst, wenn eine Verbindung mit einem Erweiterungsprozess oder einem Content Script hergestellt wird.
- {{WebExtAPIRef("runtime.onConnectExternal")}}
  - : Wird ausgelöst, wenn eine Verbindung mit einer anderen Erweiterung hergestellt wird.
- {{WebExtAPIRef("runtime.onUserScriptConnect")}}
  - : Wird ausgelöst, wenn eine Verbindung mit einem von der Erweiterung registrierten Benutzerskript hergestellt wird.
- {{WebExtAPIRef("runtime.onMessage")}}
  - : Wird ausgelöst, wenn eine Nachricht von einem Erweiterungsprozess oder einem Content Script gesendet wird.
- {{WebExtAPIRef("runtime.onMessageExternal")}}
  - : Wird ausgelöst, wenn eine Nachricht von einer anderen Erweiterung gesendet wird. Kann nicht in einem Content Script verwendet werden.
- {{WebExtAPIRef("runtime.onUserScriptMessage")}}
  - : Wird ausgelöst, wenn eine Nachricht von einem von der Erweiterung registrierten Benutzerskript gesendet wird.
- {{WebExtAPIRef("runtime.onPerformanceWarning")}}
  - : Wird ausgelöst, wenn ein Leistungsproblem in der Laufzeit für die Erweiterung erkannt wird.
- {{WebExtAPIRef("runtime.onRestartRequired")}}
  - : Wird ausgelöst, wenn das Gerät neu gestartet werden muss.

{{WebExtExamples("h2")}}

## Browser-Kompatibilität

{{Compat}}

> [!NOTE]
> Diese API basiert auf Chromiums [`chrome.runtime`](https://developer.chrome.com/docs/extensions/reference/api/runtime) API. Diese Dokumentation ist abgeleitet von [`runtime.json`](https://chromium.googlesource.com/chromium/src/+/master/extensions/common/api/runtime.json) im Chromium-Code.
