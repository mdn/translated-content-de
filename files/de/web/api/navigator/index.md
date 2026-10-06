---
title: Navigator
slug: Web/API/Navigator
l10n:
  sourceCommit: d678295b8c67d19354bca1db406af1b6bc8cf1c6
---

{{APIRef("DOM")}}

Die **`Navigator`**-Schnittstelle repräsentiert den Zustand und die Identität des User Agents. Sie ermöglicht es Skripten, diese Informationen abzufragen und sich für bestimmte Aktivitäten zu registrieren.

Ein `Navigator`-Objekt kann über die schreibgeschützte Eigenschaft [`window.navigator`](/de/docs/Web/API/Window/navigator) abgerufen werden.

## Instanzeigenschaften

_Erbt keine Eigenschaften._

### Standardeigenschaften

- [`Navigator.audioSession`](/de/docs/Web/API/Navigator/audioSession) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt ein [`AudioSession`](/de/docs/Web/API/AudioSession)-Objekt zurück, mit dem gesteuert werden kann, wie Audio aus der Webanwendung mit anderer Audiowiedergabe auf dem Gerät zusammenwirkt.
- [`Navigator.bluetooth`](/de/docs/Web/API/Navigator/bluetooth) {{ReadOnlyInline}} {{Experimental_Inline}} {{SecureContext_Inline}}
  - : Gibt ein [`Bluetooth`](/de/docs/Web/API/Bluetooth)-Objekt für das aktuelle Dokument zurück, das Zugriff auf die Funktionen der [Web Bluetooth API](/de/docs/Web/API/Web_Bluetooth_API) bietet.
- [`Navigator.clipboard`](/de/docs/Web/API/Navigator/clipboard) {{ReadOnlyInline}} {{securecontext_inline}}
  - : Gibt ein [`Clipboard`](/de/docs/Web/API/Clipboard)-Objekt zurück, das Lese- und Schreibzugriff auf die Zwischenablage des Systems bietet.
- [`Navigator.connection`](/de/docs/Web/API/Navigator/connection) {{ReadOnlyInline}}
  - : Gibt ein [`NetworkInformation`](/de/docs/Web/API/NetworkInformation)-Objekt mit Informationen über die Netzwerkverbindung eines Geräts zurück.
- [`Navigator.contacts`](/de/docs/Web/API/Navigator/contacts) {{ReadOnlyInline}} {{Experimental_Inline}} {{SecureContext_Inline}}
  - : Gibt eine [`ContactsManager`](/de/docs/Web/API/ContactsManager)-Schnittstelle zurück, über die Benutzer Einträge aus ihrer Kontaktliste auswählen und begrenzte Angaben zu den ausgewählten Einträgen mit einer Website oder Anwendung teilen können.
- [`Navigator.cookieEnabled`](/de/docs/Web/API/Navigator/cookieEnabled) {{ReadOnlyInline}}
  - : Gibt `false` zurück, wenn das Setzen eines Cookies ignoriert wird, andernfalls `true`.
- [`Navigator.credentials`](/de/docs/Web/API/Navigator/credentials) {{ReadOnlyInline}} {{SecureContext_Inline}}
  - : Gibt die [`CredentialsContainer`](/de/docs/Web/API/CredentialsContainer)-Schnittstelle zurück. Sie stellt Methoden bereit, um Anmeldedaten anzufordern und den User Agent über Ereignisse wie eine erfolgreiche An- oder Abmeldung zu informieren.
- [`Navigator.deviceMemory`](/de/docs/Web/API/Navigator/deviceMemory) {{ReadOnlyInline}} {{SecureContext_Inline}}
  - : Gibt die Größe des Gerätespeichers in Gigabyte zurück. Der Wert ist eine Näherung: Dazu wird auf die nächste Zweierpotenz gerundet und das Ergebnis durch 1024 geteilt.
- [`Navigator.devicePosture`](/de/docs/Web/API/Navigator/devicePosture) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt das [`DevicePosture`](/de/docs/Web/API/DevicePosture)-Objekt des Browsers zurück. Damit können Entwickler den aktuellen Faltzustand des Geräts abfragen – also ob der Viewport flach oder gefaltet ist – und auf Änderungen dieses Zustands mit Code reagieren.
- [`Navigator.geolocation`](/de/docs/Web/API/Navigator/geolocation) {{ReadOnlyInline}}
  - : Gibt ein [`Geolocation`](/de/docs/Web/API/Geolocation)-Objekt zurück, das den Zugriff auf den Standort des Geräts ermöglicht.
- [`Navigator.gpu`](/de/docs/Web/API/Navigator/gpu) {{ReadOnlyInline}} {{SecureContext_Inline}}
  - : Gibt das [`GPU`](/de/docs/Web/API/GPU)-Objekt für den aktuellen Browsing-Kontext zurück. Es ist der Einstiegspunkt für die [WebGPU API](/de/docs/Web/API/WebGPU_API).
- [`Navigator.hardwareConcurrency`](/de/docs/Web/API/Navigator/hardwareConcurrency) {{ReadOnlyInline}}
  - : Gibt die Anzahl der verfügbaren logischen Prozessorkerne zurück.
- [`Navigator.hid`](/de/docs/Web/API/Navigator/hid) {{ReadOnlyInline}} {{Experimental_Inline}} {{SecureContext_Inline}}
  - : Gibt ein [`HID`](/de/docs/Web/API/HID)-Objekt zurück, das Methoden zum Verbinden mit HID-Geräten und zum Auflisten angeschlossener HID-Geräte sowie Ereignisbehandler für verbundene HID-Geräte bereitstellt.
- [`Navigator.ink`](/de/docs/Web/API/Navigator/ink) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt ein [`Ink`](/de/docs/Web/API/Ink)-Objekt für das aktuelle Dokument zurück, das Zugriff auf die Funktionen der [Ink API](/de/docs/Web/API/Ink_API) bietet.
- [`Navigator.keyboard`](/de/docs/Web/API/Navigator/keyboard) {{ReadOnlyInline}} {{Experimental_Inline}} {{SecureContext_Inline}}
  - : Gibt ein [`Keyboard`](/de/docs/Web/API/Keyboard)-Objekt zurück, das Funktionen zum Abrufen von Tastaturbelegungen und zum Ein- und Ausschalten der Erfassung von Tastendrücken auf der physischen Tastatur bereitstellt.
- [`Navigator.language`](/de/docs/Web/API/Navigator/language) {{ReadOnlyInline}}
  - : Gibt einen String zurück, der die bevorzugte Sprache des Benutzers angibt, normalerweise die Sprache der Browseroberfläche. Ist diese unbekannt, wird `null` zurückgegeben.
- [`Navigator.languages`](/de/docs/Web/API/Navigator/languages) {{ReadOnlyInline}}
  - : Gibt ein Array von Strings zurück, das die dem Benutzer bekannten Sprachen in der Reihenfolge seiner Präferenzen enthält.
- [`Navigator.locks`](/de/docs/Web/API/Navigator/locks) {{ReadOnlyInline}} {{SecureContext_Inline}}
  - : Gibt ein [`LockManager`](/de/docs/Web/API/LockManager)-Objekt zurück, das Methoden zum Anfordern eines neuen [`Lock`](/de/docs/Web/API/Lock)-Objekts und zum Abfragen eines vorhandenen [`Lock`](/de/docs/Web/API/Lock)-Objekts bereitstellt.
- [`Navigator.login`](/de/docs/Web/API/Navigator/login) {{ReadOnlyInline}} {{SecureContext_Inline}}
  - : Ermöglicht den Zugriff auf das [`NavigatorLogin`](/de/docs/Web/API/NavigatorLogin)-Objekt des Browsers. Ein föderierter Identitätsanbieter (IdP) kann damit den Anmeldestatus eines Benutzers setzen, wenn dieser sich beim IdP an- oder abmeldet. Weitere Informationen finden Sie unter [Federated Credential Management (FedCM) API](/de/docs/Web/API/FedCM_API).
- [`Navigator.maxTouchPoints`](/de/docs/Web/API/Navigator/maxTouchPoints) {{ReadOnlyInline}}
  - : Gibt die maximale Anzahl gleichzeitiger Berührungspunkte zurück, die das aktuelle Gerät unterstützt.
- [`Navigator.mediaCapabilities`](/de/docs/Web/API/Navigator/mediaCapabilities) {{ReadOnlyInline}}
  - : Gibt ein [`MediaCapabilities`](/de/docs/Web/API/MediaCapabilities)-Objekt zurück, das Informationen über die Dekodierungs- und Kodierungsfähigkeiten für ein bestimmtes Format sowie über Ausgabefähigkeiten bereitstellen kann.
- [`Navigator.mediaDevices`](/de/docs/Web/API/Navigator/mediaDevices) {{ReadOnlyInline}} {{SecureContext_Inline}}
  - : Gibt eine Referenz auf ein [`MediaDevices`](/de/docs/Web/API/MediaDevices)-Objekt zurück. Damit können Informationen über verfügbare Mediengeräte abgerufen ([`MediaDevices.enumerateDevices()`](/de/docs/Web/API/MediaDevices/enumerateDevices)), die vom Computer des Benutzers und vom User Agent unterstützten einschränkbaren Medieneigenschaften ermittelt ([`MediaDevices.getSupportedConstraints()`](/de/docs/Web/API/MediaDevices/getSupportedConstraints)) und über [`MediaDevices.getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia) Zugriff auf Medien angefordert werden.
- [`Navigator.mediaSession`](/de/docs/Web/API/Navigator/mediaSession) {{ReadOnlyInline}}
  - : Gibt ein [`MediaSession`](/de/docs/Web/API/MediaSession)-Objekt zurück. Damit können Metadaten bereitgestellt werden, anhand derer der Browser dem Benutzer Informationen über die aktuell wiedergegebenen Medien anzeigen kann, beispielsweise in einer globalen Oberfläche für Mediensteuerungen.
- [`Navigator.onLine`](/de/docs/Web/API/Navigator/onLine) {{ReadOnlyInline}}
  - : Gibt einen booleschen Wert zurück, der angibt, ob der Browser online ist.
- [`Navigator.pdfViewerEnabled`](/de/docs/Web/API/Navigator/pdfViewerEnabled) {{ReadOnlyInline}}
  - : Gibt `true` zurück, wenn der Browser PDF-Dateien beim Aufrufen direkt anzeigen kann, andernfalls `false`.
- [`Navigator.permissions`](/de/docs/Web/API/Navigator/permissions) {{ReadOnlyInline}}
  - : Gibt ein [`Permissions`](/de/docs/Web/API/Permissions)-Objekt zurück, mit dem der Berechtigungsstatus von APIs, die unter die [Permissions API](/de/docs/Web/API/Permissions_API) fallen, abgefragt und aktualisiert werden kann.
- [`Navigator.preferences`](/de/docs/Web/API/Navigator/preferences) {{ReadOnlyInline}} {{Experimental_Inline}} {{SecureContext_Inline}}
  - : Gibt das aktuelle [`PreferenceManager`](/de/docs/Web/API/PreferenceManager)-Objekt des Dokuments zurück, das Zugriff auf Informationen zu [Benutzereinstellungen](/de/docs/Web/API/User_Preferences_API) bietet.
- [`Navigator.presentation`](/de/docs/Web/API/Navigator/presentation) {{ReadOnlyInline}} {{SecureContext_Inline}}
  - : Gibt eine Referenz auf die [`Presentation`](/de/docs/Web/API/Presentation) API zurück.
- [`Navigator.scheduling`](/de/docs/Web/API/Navigator/scheduling) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt ein [`Scheduling`](/de/docs/Web/API/Scheduling)-Objekt für das aktuelle Dokument zurück.
- [`Navigator.serial`](/de/docs/Web/API/Navigator/serial) {{ReadOnlyInline}} {{SecureContext_Inline}}
  - : Gibt ein [`Serial`](/de/docs/Web/API/Serial)-Objekt zurück, das den Einstiegspunkt für die [Web Serial API](/de/docs/Web/API/Web_Serial_API) zur Steuerung serieller Schnittstellen bildet.
- [`Navigator.serviceWorker`](/de/docs/Web/API/Navigator/serviceWorker) {{ReadOnlyInline}} {{SecureContext_Inline}}
  - : Gibt ein [`ServiceWorkerContainer`](/de/docs/Web/API/ServiceWorkerContainer)-Objekt zurück. Es ermöglicht die Registrierung, Entfernung und Aktualisierung von [`ServiceWorker`](/de/docs/Web/API/ServiceWorker)-Objekten für das [zugehörige Dokument](https://html.spec.whatwg.org/multipage/browsers.html#concept-document-window) sowie die Kommunikation mit ihnen.
- [`Navigator.storage`](/de/docs/Web/API/Navigator/storage) {{ReadOnlyInline}} {{SecureContext_Inline}}
  - : Gibt das einzige [`StorageManager`](/de/docs/Web/API/StorageManager)-Objekt zurück, das zur Verwaltung von Berechtigungen für dauerhafte Speicherung und zur Schätzung des verfügbaren Speichers pro Website beziehungsweise Anwendung verwendet wird.
- [`Navigator.usb`](/de/docs/Web/API/Navigator/usb) {{ReadOnlyInline}} {{SecureContext_Inline}}
  - : Gibt ein [`USB`](/de/docs/Web/API/USB)-Objekt für das aktuelle Dokument zurück, das Zugriff auf die Funktionen der [WebUSB API](/de/docs/Web/API/WebUSB_API) bietet.
- [`Navigator.userActivation`](/de/docs/Web/API/Navigator/userActivation) {{ReadOnlyInline}}
  - : Gibt ein [`UserActivation`](/de/docs/Web/API/UserActivation)-Objekt mit Informationen über den aktuellen Benutzeraktivierungsstatus des Fensters zurück.
- [`Navigator.userAgent`](/de/docs/Web/API/Navigator/userAgent) {{ReadOnlyInline}}
  - : Gibt den User-Agent-String des aktuellen Browsers zurück.
- [`Navigator.userAgentData`](/de/docs/Web/API/Navigator/userAgentData) {{ReadOnlyInline}} {{Experimental_Inline}} {{SecureContext_Inline}}
  - : Gibt ein [`NavigatorUAData`](/de/docs/Web/API/NavigatorUAData)-Objekt zurück, das Zugriff auf Informationen über den Browser und das Betriebssystem des Benutzers bietet.
- [`Navigator.virtualKeyboard`](/de/docs/Web/API/Navigator/virtualKeyboard) {{ReadOnlyInline}} {{Experimental_Inline}} {{SecureContext_Inline}}
  - : Gibt eine Referenz auf die [`VirtualKeyboard`](/de/docs/Web/API/VirtualKeyboard) API zurück, mit der die virtuelle Bildschirmtastatur gesteuert werden kann.
- [`Navigator.wakeLock`](/de/docs/Web/API/Navigator/wakeLock) {{ReadOnlyInline}} {{SecureContext_Inline}}
  - : Gibt eine [`WakeLock`](/de/docs/Web/API/WakeLock)-Schnittstelle zurück, mit der Sie Bildschirm-Wake-Locks anfordern können, um zu verhindern, dass der Bildschirm abgedunkelt oder ausgeschaltet wird oder ein Bildschirmschoner erscheint.
- [`Navigator.webdriver`](/de/docs/Web/API/Navigator/webdriver) {{ReadOnlyInline}}
  - : Gibt an, ob der User Agent durch Automatisierung gesteuert wird.
- [`Navigator.windowControlsOverlay`](/de/docs/Web/API/Navigator/windowControlsOverlay) {{ReadOnlyInline}} {{SecureContext_Inline}}
  - : Gibt die [`WindowControlsOverlay`](/de/docs/Web/API/WindowControlsOverlay)-Schnittstelle zurück. Sie stellt Informationen über die Geometrie der Titelleiste in Desktop-Progressive-Web-Apps sowie ein Ereignis bereit, das bei jeder Änderung ausgelöst wird.
- [`Navigator.xr`](/de/docs/Web/API/Navigator/xr) {{ReadOnlyInline}} {{Experimental_Inline}} {{SecureContext_Inline}}
  - : Gibt ein [`XRSystem`](/de/docs/Web/API/XRSystem)-Objekt zurück, das den Einstiegspunkt für die [WebXR API](/de/docs/Web/API/WebXR_Device_API) bildet.

### Nicht standardisierte Eigenschaften

- [`Navigator.buildID`](/de/docs/Web/API/Navigator/buildID) {{ReadOnlyInline}} {{Non-standard_Inline}}
  - : Gibt die Build-Kennung des Browsers zurück. In modernen Browsern gibt diese Eigenschaft aus Datenschutzgründen einen festen Zeitstempel zurück, beispielsweise `20181001000000` ab Firefox 64.
- [`Navigator.globalPrivacyControl`](/de/docs/Web/API/Navigator/globalPrivacyControl) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt einen booleschen Wert zurück, der angibt, ob ein Benutzer der Weitergabe oder dem Verkauf seiner Informationen zustimmt.
- [`Navigator.standalone`](/de/docs/Web/API/Navigator/standalone) {{ReadOnlyInline}} {{Non-standard_Inline}}
  - : Gibt einen booleschen Wert zurück, der angibt, ob der Browser im Standalone-Modus ausgeführt wird. Nur in Safari unter Apple iOS verfügbar.

### Veraltete Eigenschaften

- [`Navigator.activeVRDisplays`](/de/docs/Web/API/Navigator/activeVRDisplays) {{ReadOnlyInline}} {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Gibt ein Array mit allen [`VRDisplay`](/de/docs/Web/API/VRDisplay)-Objekten zurück, die aktuell Inhalte präsentieren ([`VRDisplay.isPresenting`](/de/docs/Web/API/VRDisplay/isPresenting) ist `true`).
- [`Navigator.appCodeName`](/de/docs/Web/API/Navigator/appCodeName) {{ReadOnlyInline}}
  - : Gibt in jedem Browser stets `'Mozilla'` zurück.
- [`Navigator.appName`](/de/docs/Web/API/Navigator/appName) {{ReadOnlyInline}}
  - : Gibt in jedem Browser stets `'Netscape'` zurück.
- [`Navigator.appVersion`](/de/docs/Web/API/Navigator/appVersion) {{ReadOnlyInline}}
  - : Gibt die Browserversion als String zurück. Verlassen Sie sich nicht darauf, dass diese Eigenschaft den korrekten Wert liefert.
- [`Navigator.doNotTrack`](/de/docs/Web/API/Navigator/doNotTrack) {{ReadOnlyInline}} {{Deprecated_Inline}} {{non-standard_inline}}
  - : Gibt den Wert der Do-Not-Track-Einstellung des Benutzers an. Wenn dieser Wert „1“ ist, sollte Ihre Website oder Anwendung den Benutzer nicht verfolgen.
- [`Navigator.mimeTypes`](/de/docs/Web/API/Navigator/mimeTypes) {{ReadOnlyInline}}
  - : Gibt ein [`MimeTypeArray`](/de/docs/Web/API/MimeTypeArray) zurück, das die vom Browser unterstützten MIME-Typen auflistet.
- [`Navigator.oscpu`](/de/docs/Web/API/Navigator/oscpu) {{ReadOnlyInline}}
  - : Gibt einen String zurück, der das aktuelle Betriebssystem angibt.
- [`Navigator.platform`](/de/docs/Web/API/Navigator/platform) {{ReadOnlyInline}}
  - : Gibt einen String zurück, der die Plattform des Browsers angibt. Verlassen Sie sich nicht darauf, dass diese Eigenschaft einen aussagekräftigen Wert liefert.
- [`Navigator.plugins`](/de/docs/Web/API/Navigator/plugins) {{ReadOnlyInline}}
  - : Gibt ein [`PluginArray`](/de/docs/Web/API/PluginArray) zurück, das die im Browser installierten Plugins auflistet.
- [`Navigator.product`](/de/docs/Web/API/Navigator/product) {{ReadOnlyInline}}
  - : Gibt in jedem Browser stets `'Gecko'` zurück.
- [`Navigator.productSub`](/de/docs/Web/API/Navigator/productSub) {{ReadOnlyInline}}
  - : Gibt entweder den String `'20030107'` oder `'"20100101'` zurück.
- [`Navigator.vendor`](/de/docs/Web/API/Navigator/vendor) {{ReadOnlyInline}}
  - : Gibt entweder den leeren String, `'Apple Computer Inc.'` oder `'Google Inc.'` zurück.
- [`Navigator.vendorSub`](/de/docs/Web/API/Navigator/vendorSub) {{ReadOnlyInline}}
  - : Gibt stets den leeren String zurück.

## Instanzmethoden

_Erbt keine Methoden._

- [`Navigator.canShare()`](/de/docs/Web/API/Navigator/canShare) {{SecureContext_Inline}}
  - : Gibt `true` zurück, wenn ein Aufruf von `Navigator.share()` erfolgreich wäre.
- [`Navigator.clearAppBadge()`](/de/docs/Web/API/Navigator/clearAppBadge) {{SecureContext_Inline}}
  - : Entfernt eine Kennzeichnung vom Symbol der aktuellen Anwendung und gibt ein {{jsxref("Promise")}} zurück, das mit {{jsxref("undefined")}} erfüllt wird.
- [`Navigator.deprecatedReplaceInURN()`](/de/docs/Web/API/Navigator/deprecatedReplaceInURN) {{Experimental_Inline}}
  - : Ersetzt bestimmte Strings innerhalb der zugeordneten URL, die einer gegebenen opaken URN oder der internen `url`-Eigenschaft eines `FencedFrameConfig` entspricht. Diese Methode wurde vorübergehend bereitgestellt – daher „deprecated“ –, um solche Ersetzungen bei URLs von Fenced Frames zu ermöglichen und Anbietern von Werbetechnologie die Migration bestehender Implementierungen zu den APIs der [Privacy Sandbox](https://privacysandbox.google.com/) zu erleichtern.
- [`Navigator.getAutoplayPolicy()`](/de/docs/Web/API/Navigator/getAutoplayPolicy) {{Experimental_Inline}}
  - : Gibt einen Wert zurück, der angibt, ob das angegebene Medienelement, der Audio-Kontext oder der angegebene „Typ“ einer Medienfunktion automatisch wiedergegeben werden darf.
- [`Navigator.getBattery()`](/de/docs/Web/API/Navigator/getBattery) {{SecureContext_Inline}}
  - : Gibt ein Promise zurück, das mit einem [`BatteryManager`](/de/docs/Web/API/BatteryManager)-Objekt erfüllt wird, das Informationen über den Ladezustand des Akkus bereitstellt.
- [`Navigator.getGamepads()`](/de/docs/Web/API/Navigator/getGamepads)
  - : Gibt ein Array von [`Gamepad`](/de/docs/Web/API/Gamepad)-Objekten zurück, eines für jedes mit dem Gerät verbundene Gamepad.
- [`Navigator.getInstalledRelatedApps()`](/de/docs/Web/API/Navigator/getInstalledRelatedApps) {{Experimental_Inline}} {{SecureContext_Inline}}
  - : Gibt ein Promise zurück, das mit einem Array von Objekten erfüllt wird, die vom Benutzer installierte zugehörige native Anwendungen oder [Progressive Web Apps](/de/docs/Web/Progressive_web_apps) repräsentieren.
- [`Navigator.registerProtocolHandler()`](/de/docs/Web/API/Navigator/registerProtocolHandler) {{SecureContext_Inline}}
  - : Ermöglicht Websites, sich als möglicher Handler für ein bestimmtes Protokoll zu registrieren.
- [`Navigator.requestMediaKeySystemAccess()`](/de/docs/Web/API/Navigator/requestMediaKeySystemAccess) {{SecureContext_Inline}}
  - : Gibt ein {{jsxref("Promise")}} für ein MediaKeySystemAccess-Objekt zurück.
- [`Navigator.requestMIDIAccess()`](/de/docs/Web/API/Navigator/requestMIDIAccess) {{SecureContext_Inline}}
  - : Gibt ein {{jsxref('Promise')}} zurück, das eine Anfrage nach Zugriff auf MIDI-Geräte auf dem System des Benutzers repräsentiert.
- [`Navigator.sendBeacon()`](/de/docs/Web/API/Navigator/sendBeacon)
  - : Dient dazu, eine kleine Datenmenge asynchron über {{Glossary("HTTP", "HTTP")}} vom User Agent an einen Webserver zu übertragen.
- [`Navigator.setAppBadge()`](/de/docs/Web/API/Navigator/setAppBadge) {{SecureContext_Inline}}
  - : Setzt eine Kennzeichnung auf das Symbol dieser Anwendung und gibt ein {{jsxref("Promise")}} zurück, das mit {{jsxref("undefined")}} erfüllt wird.
- [`Navigator.share()`](/de/docs/Web/API/Navigator/share) {{SecureContext_Inline}}
  - : Ruft den nativen Freigabemechanismus der aktuellen Plattform auf.
- [`Navigator.vibrate()`](/de/docs/Web/API/Navigator/vibrate)
  - : Löst auf Geräten, die dies unterstützen, eine Vibration aus. Ist keine Vibrationsunterstützung verfügbar, geschieht nichts.
- [`Navigator.unregisterProtocolHandler()`](/de/docs/Web/API/Navigator/unregisterProtocolHandler) {{SecureContext_Inline}}
  - : Hebt die Registrierung einer Website als Handler für ein bestimmtes Protokoll auf.

### Veraltete Methoden

- [`Navigator.getUserMedia()`](/de/docs/Web/API/Navigator/getUserMedia) {{Deprecated_Inline}} {{SecureContext_Inline}}
  - : Gibt nach einer Berechtigungsanfrage an den Benutzer den Audio- oder Videostream zurück, der einer Kamera oder einem Mikrofon auf dem lokalen Computer zugeordnet ist.
- [`Navigator.getVRDisplays()`](/de/docs/Web/API/Navigator/getVRDisplays) {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Gibt ein Promise zurück, das mit einem Array von [`VRDisplay`](/de/docs/Web/API/VRDisplay)-Objekten erfüllt wird, die alle verfügbaren, mit dem Computer verbundenen VR-Geräte repräsentieren.
- [`Navigator.javaEnabled()`](/de/docs/Web/API/Navigator/javaEnabled)
  - : Gibt stets `false` zurück.
- [`Navigator.taintEnabled()`](/de/docs/Web/API/Navigator/taintEnabled)
  - : Gibt `false` zurück. Die JavaScript-Funktionen für Taint und Untaint wurden in JavaScript 1.2 entfernt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
