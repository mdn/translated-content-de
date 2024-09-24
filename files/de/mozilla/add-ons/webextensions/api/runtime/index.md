---
title: Laufzeit
slug: Mozilla/Add-ons/WebExtensions/API/runtime
l10n:
  sourceCommit: b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

{{AddonSidebar}}

Dieses Modul bietet Informationen über Ihre Erweiterung und die Umgebung, in der sie läuft.

Es bietet auch Messaging-APIs, die es ermöglichen:

- Kommunikation zwischen verschiedenen Teilen Ihrer Erweiterung. Für Ratschläge zur Wahl zwischen den Messaging-Optionen siehe [Auswahl zwischen einmaligen Nachrichten und verbindungsbasiertem Messaging](/de/docs/Mozilla/Add-ons/WebExtensions/Content_scripts#choosing_between_one-off_messages_and_connection-based_messaging).
- Kommunikation mit anderen Erweiterungen.
- Kommunikation mit nativen Anwendungen.

## Typen

- {{WebExtAPIRef("runtime.Port")}}
  - : Stellt ein Ende einer Verbindung zwischen zwei spezifischen Kontexten dar, die zum Austausch von Nachrichten verwendet werden kann.
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
  - : Die Kategorie der Warnung, die das {{WebExtAPIRef("runtime.onPerformanceWarning")}}-Ereignis ausgelöst hat.
- {{WebExtAPIRef("runtime.OnPerformanceWarningSeverity")}}
  - : Die Schwere der Warnung, die das {{WebExtAPIRef("runtime.onPerformanceWarning")}}-Ereignis ausgelöst hat.
- {{WebExtAPIRef("runtime.OnRestartRequiredReason")}}
  - : Der Grund, warum das {{WebExtAPIRef("runtime.onRestartRequired")}}-Ereignis ausgelöst wird.

## Eigenschaften

- {{WebExtAPIRef("runtime.lastError")}}
  - : Dieser Wert wird gesetzt, wenn eine asynchrone Funktion einen Fehlerzustand hat, den sie ihrem Aufrufer mitteilen muss.
- {{WebExtAPIRef("runtime.id")}}
  - : Die ID der Erweiterung.

## Funktionen

- {{WebExtAPIRef("runtime.getBackgroundPage()")}}
  - : Ruft das [Window](/de/docs/Web/API/Window)-Objekt für die Hintergrundseite ab, die innerhalb der aktuellen Erweiterung läuft.
- {{WebExtAPIRef("runtime.openOptionsPage()")}}
  - : Öffnet die [Optionsseite](/de/docs/Mozilla/Add-ons/WebExtensions/user_interface/Options_pages) Ihrer Erweiterung.
- {{WebExtAPIRef("runtime.getContexts()")}}
  - : Gibt Details über die mit der Erweiterung verbundenen Kontexte zurück.
- {{WebExtAPIRef("runtime.getFrameId()")}}
  - : Gibt die Frame-ID eines beliebigen globalen Fensters oder Frame-Elements zurück.
- {{WebExtAPIRef("runtime.getManifest()")}}
  - : Gibt die vollständige [manifest.json](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json)-Datei zurück, serialisiert als ein Objekt.
- {{WebExtAPIRef("runtime.getURL()")}}
  - : Gibt einen vollqualifizierten URL zurück, basierend auf einem relativen Pfad von der [manifest.json](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json) zu einer mit der Erweiterung verpackten Ressource.
- {{WebExtAPIRef("runtime.setUninstallURL()")}}
  - : Legt eine URL fest, die beim Deinstallieren der Erweiterung besucht wird.
- {{WebExtAPIRef("runtime.reload()")}}
  - : Lädt die Erweiterung neu.
- {{WebExtAPIRef("runtime.requestUpdateCheck()")}}
  - : Prüft auf Updates dieser Erweiterung.
- {{WebExtAPIRef("runtime.connect()")}}
  - : Stellt eine Verbindung von einem Inhalts-Skript zum Hauptprozess der Erweiterung oder von einer Erweiterung zu einer anderen her.
- {{WebExtAPIRef("runtime.connectNative()")}}
  - : Verbindet die Erweiterung mit einer nativen Anwendung auf dem Computer des Benutzers.
- {{WebExtAPIRef("runtime.sendMessage()")}}
  - : Sendet eine einzelne Nachricht an Ereignislistener innerhalb Ihrer Erweiterung oder einer anderen Erweiterung. Ähnlich wie {{WebExtAPIRef('runtime.connect')}}, sendet jedoch nur eine einzelne Nachricht, mit einer optionalen Antwort.
- {{WebExtAPIRef("runtime.sendNativeMessage()")}}
  - : Sendet eine einzelne Nachricht von einer Erweiterung an eine native Anwendung.
- {{WebExtAPIRef("runtime.getPlatformInfo()")}}
  - : Gibt Informationen über die aktuelle Plattform zurück.
- {{WebExtAPIRef("runtime.getBrowserInfo()")}}
  - : Gibt Informationen über den Browser, in dem diese Erweiterung installiert ist, zurück.
- {{WebExtAPIRef("runtime.getPackageDirectoryEntry()")}}
  - : Gibt ein DirectoryEntry für das Paketverzeichnis zurück.

## Ereignisse

- {{WebExtAPIRef("runtime.onStartup")}}
  - : Wird ausgelöst, wenn ein Profil, das diese Erweiterung installiert hat, erstmals gestartet wird. Dieses Ereignis wird nicht ausgelöst, wenn ein Inkognito-Profil gestartet wird.
- {{WebExtAPIRef("runtime.onInstalled")}}
  - : Wird ausgelöst, wenn die Erweiterung erstmals installiert wird, wenn die Erweiterung auf eine neue Version aktualisiert wird und wenn der Browser auf eine neue Version aktualisiert wird.
- {{WebExtAPIRef("runtime.onSuspend")}}
  - : Wird kurz bevor die Erweiterung entladen wird an die Ereignisseite gesendet. Dies gibt der Erweiterung die Möglichkeit, Aufräumarbeiten durchzuführen.
- {{WebExtAPIRef("runtime.onSuspendCanceled")}}
  - : Wird nach {{WebExtAPIRef("runtime.onSuspend")}} gesendet, um anzuzeigen, dass die Erweiterung doch nicht entladen wird.
- {{WebExtAPIRef("runtime.onUpdateAvailable")}}
  - : Wird ausgelöst, wenn ein Update verfügbar ist, aber nicht sofort installiert wird, da die Erweiterung derzeit läuft.
- {{WebExtAPIRef("runtime.onBrowserUpdateAvailable")}} {{deprecated_inline}}
  - : Wird ausgelöst, wenn ein Update für den Browser verfügbar ist, aber nicht sofort installiert wird, da ein Neustart des Browsers erforderlich ist.
- {{WebExtAPIRef("runtime.onConnect")}}
  - : Wird ausgelöst, wenn eine Verbindung mit einem Erweiterungsprozess oder einem Inhalts-Skript hergestellt wird.
- {{WebExtAPIRef("runtime.onConnectExternal")}}
  - : Wird ausgelöst, wenn eine Verbindung mit einer anderen Erweiterung hergestellt wird.
- {{WebExtAPIRef("runtime.onMessage")}}
  - : Wird ausgelöst, wenn eine Nachricht von einem Erweiterungsprozess oder einem Inhalts-Skript gesendet wird.
- {{WebExtAPIRef("runtime.onMessageExternal")}}
  - : Wird ausgelöst, wenn eine Nachricht von einer anderen Erweiterung gesendet wird. Kann nicht in einem Inhalts-Skript verwendet werden.
- {{WebExtAPIRef("runtime.onPerformanceWarning")}}
  - : Wird ausgelöst, wenn ein Laufzeit-Performanceproblem für die Erweiterung erkannt wird.
- {{WebExtAPIRef("runtime.onRestartRequired")}}
  - : Wird ausgelöst, wenn das Gerät neu gestartet werden muss.

## Browserkompatibilität

{{Compat}}

{{WebExtExamples("h2")}}

> [!NOTE]
> Diese API basiert auf Chromiums [`chrome.runtime`](https://developer.chrome.com/docs/extensions/reference/api/runtime) API. Diese Dokumentation ist abgeleitet von [`runtime.json`](https://chromium.googlesource.com/chromium/src/+/master/extensions/common/api/runtime.json) im Chromium-Code.

<!--
// Copyright 2015 The Chromium Authors. All rights reserved.
//
// Redistribution and use in source and binary forms, with or without
// modification, are permitted provided that the following conditions are
// met:
//
//    * Redistributions of source code must retain the above copyright
// notice, this list of conditions and the following disclaimer.
//    * Redistributions in binary form must reproduce the above
// copyright notice, this list of conditions and the following disclaimer
// in the documentation and/or other materials provided with the
// distribution.
//    * Neither the name of Google Inc. nor the names of its
// contributors may be used to endorse or promote products derived from
// this software without specific prior written permission.
//
// THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
// "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
// LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
// A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT
// OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
// SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
// LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
// DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY
// THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
// (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
// OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
-->
