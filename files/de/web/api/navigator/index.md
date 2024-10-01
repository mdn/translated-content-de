---
title: Navigator
slug: Web/API/Navigator
l10n:
  sourceCommit: f2088b8912ef205a737551441d54b73507bd3ac6
---

{{APIRef("DOM")}}

Die **`Navigator`**-Schnittstelle repräsentiert den Zustand und die Identität des User Agents. Sie ermöglicht Skripten, Abfragen zu diesem durchzuführen und sich zu registrieren, um bestimmte Aktivitäten durchzuführen.

Ein `Navigator`-Objekt kann über die schreibgeschützte Eigenschaft [`window.navigator`](/de/docs/Web/API/Window/navigator) abgerufen werden.

## Instanz-Eigenschaften

_Erbt keine Eigenschaften._

### Standard-Eigenschaften

- [`Navigator.bluetooth`](/de/docs/Web/API/Navigator/bluetooth) {{ReadOnlyInline}} {{Experimental_Inline}} {{SecureContext_Inline}}
  - : Gibt ein [`Bluetooth`](/de/docs/Web/API/Bluetooth)-Objekt für das aktuelle Dokument zurück, das Zugriff auf die Funktionen der [Web Bluetooth API](/de/docs/Web/API/Web_Bluetooth_API) bietet.
- [`Navigator.clipboard`](/de/docs/Web/API/Navigator/clipboard) {{ReadOnlyInline}} {{securecontext_inline}}
  - : Gibt ein [`Clipboard`](/de/docs/Web/API/Clipboard)-Objekt zurück, das Lese- und Schreibzugriff auf die System-Zwischenablage bietet.
- [`Navigator.connection`](/de/docs/Web/API/Navigator/connection) {{ReadOnlyInline}}
  - : Gibt ein [`NetworkInformation`](/de/docs/Web/API/NetworkInformation)-Objekt zurück, das Informationen über die Netzwerkverbindung eines Geräts enthält.
- [`Navigator.contacts`](/de/docs/Web/API/Navigator/contacts) {{ReadOnlyInline}} {{Experimental_Inline}} {{SecureContext_Inline}}
  - : Gibt eine [`ContactsManager`](/de/docs/Web/API/ContactsManager)-Schnittstelle zurück, die es Nutzern ermöglicht, Einträge aus ihrer Kontaktliste auszuwählen und limitierte Details der ausgewählten Einträge mit einer Website oder Anwendung zu teilen.
- [`Navigator.cookieEnabled`](/de/docs/Web/API/Navigator/cookieEnabled) {{ReadOnlyInline}}
  - : Gibt `false` zurück, wenn das Setzen eines Cookies ignoriert wird, ansonsten `true`.
- [`Navigator.credentials`](/de/docs/Web/API/Navigator/credentials) {{ReadOnlyInline}} {{SecureContext_Inline}}
  - : Gibt die [`CredentialsContainer`](/de/docs/Web/API/CredentialsContainer)-Schnittstelle zurück, die Methoden bereitstellt, um Anmeldedaten anzufordern und den User Agent bei interessanten Ereignissen wie erfolgreichem Ein- oder Ausloggen zu benachrichtigen.
- [`Navigator.deviceMemory`](/de/docs/Web/API/Navigator/deviceMemory) {{ReadOnlyInline}} {{SecureContext_Inline}}
  - : Gibt die Menge des Gerätespeichers in Gigabytes zurück. Dieser Wert ist eine Annäherung, die durch Runden auf die nächste Zweierpotenz und die Division dieser Zahl durch 1024 erzielt wird.
- [`Navigator.geolocation`](/de/docs/Web/API/Navigator/geolocation) {{ReadOnlyInline}}
  - : Gibt ein [`Geolocation`](/de/docs/Web/API/Geolocation)-Objekt zurück, das den Zugriff auf den Standort des Geräts ermöglicht.
- [`Navigator.gpu`](/de/docs/Web/API/Navigator/gpu) {{ReadOnlyInline}} {{Experimental_Inline}} {{SecureContext_Inline}}
  - : Gibt das [`GPU`](/de/docs/Web/API/GPU)-Objekt für den aktuellen Browsing-Kontext zurück. Der Einstiegspunkt für die [WebGPU API](/de/docs/Web/API/WebGPU_API).
- [`Navigator.hardwareConcurrency`](/de/docs/Web/API/Navigator/hardwareConcurrency) {{ReadOnlyInline}}
  - : Gibt die Anzahl der verfügbaren logischen Prozessorkerne zurück.
- [`Navigator.hid`](/de/docs/Web/API/Navigator/hid) {{ReadOnlyInline}} {{Experimental_Inline}} {{SecureContext_Inline}}
  - : Gibt ein [`HID`](/de/docs/Web/API/HID)-Objekt zurück, das Methoden zum Verbinden mit HID-Geräten, zum Auflisten angeschlossener HID-Geräte und Ereignishandler für verbundene HID-Geräte bietet.
- [`Navigator.ink`](/de/docs/Web/API/Navigator/ink) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt ein [`Ink`](/de/docs/Web/API/Ink)-Objekt für das aktuelle Dokument zurück, das den Zugriff auf die [Ink API](/de/docs/Web/API/Ink_API)-Funktionen ermöglicht.
- [`Navigator.keyboard`](/de/docs/Web/API/Navigator/keyboard) {{ReadOnlyInline}} {{Experimental_Inline}} {{SecureContext_Inline}}
  - : Gibt ein [`Keyboard`](/de/docs/Web/API/Keyboard)-Objekt zurück, das Zugriff auf Funktionen bietet, die Tastaturlayout-Karten abfragen und das Erfassen von Tastendruckereignissen von der physischen Tastatur umschalten.
- [`Navigator.language`](/de/docs/Web/API/Navigator/language) {{ReadOnlyInline}}
  - : Gibt einen String zurück, der die bevorzugte Sprache des Nutzers repräsentiert, üblicherweise die Sprache der Browser-Benutzeroberfläche. Der Wert `null` wird zurückgegeben, wenn dies unbekannt ist.
- [`Navigator.languages`](/de/docs/Web/API/Navigator/languages) {{ReadOnlyInline}}
  - : Gibt ein Array von Strings zurück, das die dem Nutzer bekannten Sprachen in der Reihenfolge der Präferenz repräsentiert.
- [`Navigator.locks`](/de/docs/Web/API/Navigator/locks) {{ReadOnlyInline}} {{SecureContext_Inline}}
  - : Gibt ein [`LockManager`](/de/docs/Web/API/LockManager)-Objekt zurück, das Methoden zum Anfordern eines neuen [`Lock`](/de/docs/Web/API/Lock)-Objekts und zum Abfragen eines vorhandenen [`Lock`](/de/docs/Web/API/Lock)-Objekts bereitstellt.
- [`Navigator.login`](/de/docs/Web/API/Navigator/login) {{ReadOnlyInline}} {{Experimental_Inline}} {{SecureContext_Inline}}
  - : Bietet Zugriff auf das [`NavigatorLogin`](/de/docs/Web/API/NavigatorLogin)-Objekt des Browsers, das von einem föderierten Identitätsanbieter (IdP) verwendet werden kann, um den Anmeldestatus eines Nutzers festzulegen, wenn dieser sich beim IdP anmeldet oder abmeldet. Siehe [Federated Credential Management (FedCM) API](/de/docs/Web/API/FedCM_API) für weitere Details.
- [`Navigator.maxTouchPoints`](/de/docs/Web/API/Navigator/maxTouchPoints) {{ReadOnlyInline}}
  - : Gibt die maximale Anzahl gleichzeitiger Berührungs-Kontaktpunkte zurück, die vom aktuellen Gerät unterstützt werden.
- [`Navigator.mediaCapabilities`](/de/docs/Web/API/Navigator/mediaCapabilities) {{ReadOnlyInline}}
  - : Gibt ein [`MediaCapabilities`](/de/docs/Web/API/MediaCapabilities)-Objekt zurück, das Informationen über die Dekkodier- und Enkodierfähigkeiten für ein bestimmtes Format und Ausgabefähigkeiten bereitstellen kann.
- [`Navigator.mediaDevices`](/de/docs/Web/API/Navigator/mediaDevices) {{ReadOnlyInline}} {{SecureContext_Inline}}
  - : Gibt einen Verweis auf ein [`MediaDevices`](/de/docs/Web/API/MediaDevices)-Objekt zurück, das verwendet werden kann, um Informationen über verfügbare Mediengeräte ([`MediaDevices.enumerateDevices()`](/de/docs/Web/API/MediaDevices/enumerateDevices)) zu erhalten, herauszufinden, welche einschränkbaren Eigenschaften für Medien auf dem Computer des Nutzers und dem User Agent unterstützt werden ([`MediaDevices.getSupportedConstraints()`](/de/docs/Web/API/MediaDevices/getSupportedConstraints)), und um Zugriff auf Medien mit [`MediaDevices.getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia) anzufordern.
- [`Navigator.mediaSession`](/de/docs/Web/API/Navigator/mediaSession) {{ReadOnlyInline}}
  - : Gibt ein [`MediaSession`](/de/docs/Web/API/MediaSession)-Objekt zurück, das verwendet werden kann, um Metadaten bereitzustellen, die vom Browser verwendet werden können, um Informationen über die aktuell wiedergegebenen Medien dem Nutzer anzuzeigen, wie in einer globalen Mediensteuerung-Benutzeroberfläche
- [`Navigator.onLine`](/de/docs/Web/API/Navigator/onLine) {{ReadOnlyInline}}
  - : Gibt einen booleschen Wert zurück, der anzeigt, ob der Browser online arbeitet.
- [`Navigator.pdfViewerEnabled`](/de/docs/Web/API/Navigator/pdfViewerEnabled) {{ReadOnlyInline}}
  - : Gibt `true` zurück, wenn der Browser PDF-Dateien inline anzeigen kann, wenn zu ihnen navigiert wird, und `false` andernfalls.
- [`Navigator.permissions`](/de/docs/Web/API/Navigator/permissions) {{ReadOnlyInline}}
  - : Gibt ein [`Permissions`](/de/docs/Web/API/Permissions)-Objekt zurück, das zum Abfragen und Aktualisieren des Berechtigungsstatus von APIs verwendet werden kann, die von der [Permissions API](/de/docs/Web/API/Permissions_API) abgedeckt werden.
- [`Navigator.presentation`](/de/docs/Web/API/Navigator/presentation) {{ReadOnlyInline}} {{SecureContext_Inline}}
  - : Gibt einen Verweis auf die [`Presentation`](/de/docs/Web/API/Presentation) API zurück.
- [`Navigator.scheduling`](/de/docs/Web/API/Navigator/scheduling) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt ein [`Scheduling`](/de/docs/Web/API/Scheduling)-Objekt für das aktuelle Dokument zurück.
- [`Navigator.serial`](/de/docs/Web/API/Navigator/serial) {{ReadOnlyInline}} {{Experimental_Inline}} {{SecureContext_Inline}}
  - : Gibt ein [`Serial`](/de/docs/Web/API/Serial)-Objekt zurück, das den Einstiegspunkt in die [Web Serial API](/de/docs/Web/API/Web_Serial_API) darstellt, um die Steuerung von seriellen Ports zu ermöglichen.
- [`Navigator.serviceWorker`](/de/docs/Web/API/Navigator/serviceWorker) {{ReadOnlyInline}} {{SecureContext_Inline}}
  - : Gibt ein [`ServiceWorkerContainer`](/de/docs/Web/API/ServiceWorkerContainer)-Objekt zurück, das Zugriff auf die Registrierung, Entfernung, Aktualisierung und Kommunikation mit den [`ServiceWorker`](/de/docs/Web/API/ServiceWorker)-Objekten für das [assoziierte Dokument](https://html.spec.whatwg.org/multipage/browsers.html#concept-document-window) ermöglicht.
- [`Navigator.storage`](/de/docs/Web/API/Navigator/storage) {{ReadOnlyInline}} {{SecureContext_Inline}}
  - : Gibt das Singleton-Objekt [`StorageManager`](/de/docs/Web/API/StorageManager) zurück, das zur Verwaltung von Persistenzberechtigungen und zur Schätzung des verfügbaren Speichers auf einer site- bzw. app-spezifischen Basis verwendet wird.
- [`Navigator.usb`](/de/docs/Web/API/Navigator/usb) {{ReadOnlyInline}} {{SecureContext_Inline}}
  - : Gibt ein [`USB`](/de/docs/Web/API/USB)-Objekt für das aktuelle Dokument zurück und bietet Zugriff auf die Funktionen der [WebUSB API](/de/docs/Web/API/WebUSB_API).
- [`Navigator.userActivation`](/de/docs/Web/API/Navigator/userActivation) {{ReadOnlyInline}}
  - : Gibt ein [`UserActivation`](/de/docs/Web/API/UserActivation)-Objekt zurück, das Informationen über den Benutzeraktivierungszustand des aktuellen Fensters enthält.
- [`Navigator.userAgent`](/de/docs/Web/API/Navigator/userAgent) {{ReadOnlyInline}}
  - : Gibt den User-Agent-String für den aktuellen Browser zurück.
- [`Navigator.userAgentData`](/de/docs/Web/API/Navigator/userAgentData) {{ReadOnlyInline}} {{Experimental_Inline}} {{SecureContext_Inline}}
  - : Gibt ein [`NavigatorUAData`](/de/docs/Web/API/NavigatorUAData)-Objekt zurück, das Zugriff auf Informationen über den Browser und das Betriebssystem des Nutzers bietet.
- [`Navigator.virtualKeyboard`](/de/docs/Web/API/Navigator/virtualKeyboard) {{ReadOnlyInline}} {{Experimental_Inline}} {{SecureContext_Inline}}
  - : Gibt einen Verweis auf die [`VirtualKeyboard`](/de/docs/Web/API/VirtualKeyboard) API zurück, um die Steuerung der virtuellen Tastatur auf dem Bildschirm zu übernehmen.
- [`Navigator.wakeLock`](/de/docs/Web/API/Navigator/wakeLock) {{ReadOnlyInline}} {{SecureContext_Inline}}
  - : Gibt eine [`WakeLock`](/de/docs/Web/API/WakeLock)-Schnittstelle zurück, mit der Sie Bildschirm-Wake-Locks anfordern und verhindern können, dass der Bildschirm abdimmt, ausgeschaltet wird oder ein Bildschirmschoner angezeigt wird.
- [`Navigator.webdriver`](/de/docs/Web/API/Navigator/webdriver) {{ReadOnlyInline}}
  - : Gibt an, ob der User Agent von einer Automation gesteuert wird.
- [`Navigator.windowControlsOverlay`](/de/docs/Web/API/Navigator/windowControlsOverlay) {{ReadOnlyInline}} {{SecureContext_Inline}}
  - : Gibt die [`WindowControlsOverlay`](/de/docs/Web/API/WindowControlsOverlay)-Schnittstelle zurück, die Informationen über die Geometrie der Titelleiste in Progressive Web Apps auf dem Desktop bereitstellt und ein Ereignis, um zu wissen, wann immer sie sich ändert.
- [`Navigator.xr`](/de/docs/Web/API/Navigator/xr) {{ReadOnlyInline}} {{Experimental_Inline}} {{SecureContext_Inline}}
  - : Gibt ein [`XRSystem`](/de/docs/Web/API/XRSystem)-Objekt zurück, das den Einstiegspunkt in die [WebXR API](/de/docs/Web/API/WebXR_Device_API) darstellt.

### Nicht-standardmäßige Eigenschaften

- [`Navigator.buildID`](/de/docs/Web/API/Navigator/buildID) {{ReadOnlyInline}} {{Non-standard_Inline}}
  - : Gibt die Build-Kennung des Browsers zurück. In modernen Browsern gibt diese Eigenschaft jetzt einen festen Zeitstempel als Datenschutzmaßnahme zurück, z.B. `20181001000000` in Firefox ab Version 64.
- [`Navigator.globalPrivacyControl`](/de/docs/Web/API/Navigator/globalPrivacyControl) {{ReadOnlyInline}} {{Experimental_Inline}} {{non-standard_inline}}
  - : Gibt einen booleschen Wert zurück, der angibt, ob ein Nutzer in die Weitergabe oder den Verkauf seiner Informationen eingewilligt hat.
- [`Navigator.standalone`](/de/docs/Web/API/Navigator/standalone) {{Non-standard_Inline}}
  - : Gibt einen booleschen Wert zurück, der angibt, ob der Browser im Standalone-Modus läuft. Verfügbar nur in Apples iOS Safari.

### Veraltete Eigenschaften

- [`Navigator.activeVRDisplays`](/de/docs/Web/API/Navigator/activeVRDisplays) {{ReadOnlyInline}} {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Gibt ein Array zurück, das jedes [`VRDisplay`](/de/docs/Web/API/VRDisplay)-Objekt enthält, das derzeit präsentiert wird ([`VRDisplay.ispresenting`](/de/docs/Web/API/VRDisplay/ispresenting) ist `true`).
- [`Navigator.appCodeName`](/de/docs/Web/API/Navigator/appCodeName) {{ReadOnlyInline}} {{Deprecated_Inline}}
  - : Gibt immer `'Mozilla'` zurück, in jedem Browser.
- [`Navigator.appName`](/de/docs/Web/API/Navigator/appName) {{ReadOnlyInline}} {{Deprecated_Inline}}
  - : Gibt immer `'Netscape'` zurück, in jedem Browser.
- [`Navigator.appVersion`](/de/docs/Web/API/Navigator/appVersion) {{ReadOnlyInline}} {{Deprecated_Inline}}
  - : Gibt die Version des Browsers als String zurück. Verlassen Sie sich nicht darauf, dass diese Eigenschaft den korrekten Wert zurückgibt.
- [`Navigator.doNotTrack`](/de/docs/Web/API/Navigator/doNotTrack) {{ReadOnlyInline}} {{Deprecated_Inline}} {{non-standard_inline}}
  - : Gibt den Wert der "Do-Not-Track"-Einstellung des Nutzers an. Wenn dieser Wert "1" ist, sollte Ihre Website oder Anwendung den Nutzer nicht verfolgen.
- [`Navigator.mimeTypes`](/de/docs/Web/API/Navigator/mimeTypes) {{ReadOnlyInline}} {{Deprecated_Inline}}
  - : Gibt ein [`MimeTypeArray`](/de/docs/Web/API/MimeTypeArray) zurück, das die vom Browser unterstützten MIME-Typen auflistet.
- [`Navigator.oscpu`](/de/docs/Web/API/Navigator/oscpu) {{ReadOnlyInline}} {{Deprecated_Inline}}
  - : Gibt einen String zurück, der das aktuelle Betriebssystem repräsentiert.
- [`Navigator.platform`](/de/docs/Web/API/Navigator/platform) {{ReadOnlyInline}} {{Deprecated_Inline}}
  - : Gibt einen String zurück, der die Plattform des Browsers repräsentiert. Verlassen Sie sich nicht darauf, dass diese Funktion einen signifikanten Wert zurückgibt.
- [`Navigator.plugins`](/de/docs/Web/API/Navigator/plugins) {{ReadOnlyInline}} {{Deprecated_Inline}}
  - : Gibt ein [`PluginArray`](/de/docs/Web/API/PluginArray) zurück, das die im Browser installierten Plugins auflistet.
- [`Navigator.product`](/de/docs/Web/API/Navigator/product) {{ReadOnlyInline}} {{Deprecated_Inline}}
  - : Gibt immer `'Gecko'` zurück, in jedem Browser.
- [`Navigator.productSub`](/de/docs/Web/API/Navigator/productSub) {{ReadOnlyInline}} {{Deprecated_Inline}}
  - : Gibt entweder den String `'20030107'` oder `'"20100101'` zurück.
- [`Navigator.vendor`](/de/docs/Web/API/Navigator/vendor) {{ReadOnlyInline}} {{Deprecated_Inline}}
  - : Gibt entweder den leeren String, `'Apple Computer Inc.'` oder `'Google Inc.'` zurück.
- [`Navigator.vendorSub`](/de/docs/Web/API/Navigator/vendorSub) {{ReadOnlyInline}} {{Deprecated_Inline}}
  - : Gibt immer den leeren String zurück.

## Instanz-Methoden

_Erbt keine Methoden._

- [`Navigator.canShare()`](/de/docs/Web/API/Navigator/canShare) {{SecureContext_Inline}}
  - : Gibt `true` zurück, wenn ein Aufruf von `Navigator.share()` erfolgreich wäre.
- [`Navigator.clearAppBadge()`](/de/docs/Web/API/Navigator/clearAppBadge) {{SecureContext_Inline}}
  - : Löscht ein Abzeichen auf dem Symbol der aktuellen App und gibt ein {{jsxref("Promise")}} zurück, das mit {{jsxref("undefined")}} aufgelöst wird.
- [`Navigator.deprecatedReplaceInURN()`](/de/docs/Web/API/Navigator/deprecatedReplaceInURN) {{Experimental_Inline}}
  - : Ersetzt angegebene Strings innerhalb der zugeordneten URL, die einem gegebenen undurchsichtigen URN oder der internen `url`-Eigenschaft eines `FencedFrameConfig` entspricht. Diese Methode wurde als vorübergehende Maßnahme (daher "veraltet") verfügbar gemacht, um diese Substitution für fenced frame URLs zu ermöglichen und Werbetechnologieanbietern zu helfen, bestehende Implementierungen auf [Privacy Sandbox](https://developers.google.com/privacy-sandbox)-APIs zu migrieren.
- [`Navigator.getAutoplayPolicy()`](/de/docs/Web/API/Navigator/getAutoplayPolicy) {{Experimental_Inline}}
  - : Gibt einen Wert zurück, der angibt, ob das angegebene Medienelement, die Audio-Schnittstelle oder die Medienfunktion "type" automatisch wiedergegeben werden darf.
- [`Navigator.getBattery()`](/de/docs/Web/API/Navigator/getBattery) {{SecureContext_Inline}}
  - : Gibt ein Promise zurück, das mit einem [`BatteryManager`](/de/docs/Web/API/BatteryManager)-Objekt aufgelöst wird, das Informationen über den Batterie-Ladezustand zurückgibt.
- [`Navigator.getGamepads()`](/de/docs/Web/API/Navigator/getGamepads)
  - : Gibt ein Array von [`Gamepad`](/de/docs/Web/API/Gamepad)-Objekten zurück, eines für jedes mit dem Gerät verbundene Gamepad.
- [`Navigator.getInstalledRelatedApps()`](/de/docs/Web/API/Navigator/getInstalledRelatedApps) {{Experimental_Inline}} {{SecureContext_Inline}}
  - : Gibt ein Promise zurück, das mit einem Array von Objekten aufgelöst wird, die alle verwandten nativen oder [Progressive Web Applications](/de/docs/Web/Progressive_web_apps) repräsentieren, die der Nutzer installiert hat.
- [`Navigator.registerProtocolHandler()`](/de/docs/Web/API/Navigator/registerProtocolHandler) {{SecureContext_Inline}}
  - : Erlaubt es Websites, sich selbst als möglichen Handler für ein bestimmtes Protokoll zu registrieren.
- [`Navigator.requestMediaKeySystemAccess()`](/de/docs/Web/API/Navigator/requestMediaKeySystemAccess) {{SecureContext_Inline}}
  - : Gibt ein {{jsxref("Promise")}} für ein MediaKeySystemAccess-Objekt zurück.
- [`Navigator.requestMIDIAccess()`](/de/docs/Web/API/Navigator/requestMIDIAccess) {{SecureContext_Inline}}
  - : Gibt ein {{jsxref('Promise')}} zurück, das eine Anfrage für den Zugriff auf MIDI-Geräte im System des Nutzers repräsentiert.
- [`Navigator.sendBeacon()`](/de/docs/Web/API/Navigator/sendBeacon)
  - : Wird verwendet, um asynchron eine kleine Datenmenge mithilfe von {{Glossary("HTTP", "HTTP")}} vom User Agent an einen Webserver zu übertragen.
- [`Navigator.setAppBadge()`](/de/docs/Web/API/Navigator/setAppBadge) {{SecureContext_Inline}}
  - : Setzt ein Abzeichen auf das mit dieser App verbundene Symbol und gibt ein {{jsxref("Promise")}} zurück, das mit {{jsxref("undefined")}} aufgelöst wird.
- [`Navigator.share()`](/de/docs/Web/API/Navigator/share) {{SecureContext_Inline}}
  - : Ruft den nativen Freigabe-Mechanismus der aktuellen Plattform auf.
- [`Navigator.vibrate()`](/de/docs/Web/API/Navigator/vibrate)
  - : Verursacht Vibrationen auf Geräten, die dies unterstützen. Macht nichts, wenn keine Vibrationsunterstützung verfügbar ist.
- [`Navigator.unregisterProtocolHandler()`](/de/docs/Web/API/Navigator/unregisterProtocolHandler) {{SecureContext_Inline}}
  - : Hebt die Registrierung einer Website als Handler für ein bestimmtes Protokoll auf.

### Veraltete Methoden

- [`Navigator.getUserMedia()`](/de/docs/Web/API/Navigator/getUserMedia) {{Deprecated_Inline}} {{SecureContext_Inline}}
  - : Gibt nach Erteilung der Erlaubnis durch den Nutzer den Audio- oder Videostream zurück, der mit einer Kamera oder einem Mikrofon auf dem lokalen Computer verbunden ist.
- [`Navigator.getVRDisplays()`](/de/docs/Web/API/Navigator/getVRDisplays) {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Gibt ein Promise zurück, das mit einem Array von [`VRDisplay`](/de/docs/Web/API/VRDisplay)-Objekten aufgelöst wird, die alle verfügbaren VR-Geräte repräsentieren, die mit dem Computer verbunden sind.
- [`Navigator.javaEnabled()`](/de/docs/Web/API/Navigator/javaEnabled) {{Deprecated_Inline}}
  - : Gibt immer `false` zurück.
- [`Navigator.taintEnabled()`](/de/docs/Web/API/Navigator/taintEnabled) {{Deprecated_Inline}}
  - : Gibt `false` zurück. Die JavaScript taint/untaint-Funktionen wurden in JavaScript 1.2 entfernt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
