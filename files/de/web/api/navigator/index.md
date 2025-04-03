---
title: Navigator
slug: Web/API/Navigator
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

{{APIRef("DOM")}}

Das **`Navigator`** Interface repräsentiert den Zustand und die Identität des Benutzeragents. Es ermöglicht Skripten, Abfragen durchzuführen und sich zu registrieren, um bestimmte Aktivitäten auszuführen.

Ein `Navigator` Objekt kann über die schreibgeschützte [`window.navigator`](/de/docs/Web/API/Window/navigator) Eigenschaft abgerufen werden.

## Instanzeigenschaften

_Erbt keine Eigenschaften._

### Standard-Eigenschaften

- [`Navigator.bluetooth`](/de/docs/Web/API/Navigator/bluetooth) {{ReadOnlyInline}} {{Experimental_Inline}} {{SecureContext_Inline}}
  - : Gibt ein [`Bluetooth`](/de/docs/Web/API/Bluetooth) Objekt für das aktuelle Dokument zurück, das Zugriff auf die [Web Bluetooth API](/de/docs/Web/API/Web_Bluetooth_API) Funktionalität bietet.
- [`Navigator.clipboard`](/de/docs/Web/API/Navigator/clipboard) {{ReadOnlyInline}} {{securecontext_inline}}
  - : Gibt ein [`Clipboard`](/de/docs/Web/API/Clipboard) Objekt zurück, das Lese- und Schreibzugriff auf die Systemzwischenablage bietet.
- [`Navigator.connection`](/de/docs/Web/API/Navigator/connection) {{ReadOnlyInline}}
  - : Gibt ein [`NetworkInformation`](/de/docs/Web/API/NetworkInformation) Objekt zurück, das Informationen über die Netzwerkverbindung eines Geräts enthält.
- [`Navigator.contacts`](/de/docs/Web/API/Navigator/contacts) {{ReadOnlyInline}} {{Experimental_Inline}} {{SecureContext_Inline}}
  - : Gibt eine [`ContactsManager`](/de/docs/Web/API/ContactsManager) Schnittstelle zurück, die es Benutzern ermöglicht, Einträge aus ihrer Kontaktliste auszuwählen und begrenzte Details der ausgewählten Einträge mit einer Website oder Anwendung zu teilen.
- [`Navigator.cookieEnabled`](/de/docs/Web/API/Navigator/cookieEnabled) {{ReadOnlyInline}}
  - : Gibt false zurück, wenn das Setzen eines Cookies ignoriert wird, und true, wenn nicht.
- [`Navigator.credentials`](/de/docs/Web/API/Navigator/credentials) {{ReadOnlyInline}} {{SecureContext_Inline}}
  - : Gibt die [`CredentialsContainer`](/de/docs/Web/API/CredentialsContainer) Schnittstelle zurück, die Methoden bereitstellt, um Anmeldeinformationen anzufordern und den Benutzeragenten zu benachrichtigen, wenn interessante Ereignisse wie erfolgreiche Anmeldung oder Abmeldung auftreten.
- [`Navigator.deviceMemory`](/de/docs/Web/API/Navigator/deviceMemory) {{ReadOnlyInline}} {{SecureContext_Inline}}
  - : Gibt die Menge des Gerätespeichers in Gigabyte zurück. Dieser Wert ist eine Annäherung, die durch Rundung auf die nächste Zweierpotenz und anschließendes Teilen der Zahl durch 1024 gegeben ist.
- [`Navigator.devicePosture`](/de/docs/Web/API/Navigator/devicePosture) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt das [`DevicePosture`](/de/docs/Web/API/DevicePosture) Objekt des Browsers zurück, das Entwicklern ermöglicht, die aktuelle Haltung des Geräts abzufragen (d.h. ob der Ansichtsbereich flach oder gefaltet ist) und Code als Reaktion auf Haltungsänderungen auszuführen.
- [`Navigator.geolocation`](/de/docs/Web/API/Navigator/geolocation) {{ReadOnlyInline}}
  - : Gibt ein [`Geolocation`](/de/docs/Web/API/Geolocation) Objekt zurück, das den Zugriff auf den Standort des Geräts ermöglicht.
- [`Navigator.gpu`](/de/docs/Web/API/Navigator/gpu) {{ReadOnlyInline}} {{Experimental_Inline}} {{SecureContext_Inline}}
  - : Gibt das [`GPU`](/de/docs/Web/API/GPU) Objekt für den aktuellen Browsing-Kontext zurück. Der Einstiegspunkt für die [WebGPU API](/de/docs/Web/API/WebGPU_API).
- [`Navigator.hardwareConcurrency`](/de/docs/Web/API/Navigator/hardwareConcurrency) {{ReadOnlyInline}}
  - : Gibt die Anzahl der logischen Prozessorkerne zurück, die verfügbar sind.
- [`Navigator.hid`](/de/docs/Web/API/Navigator/hid) {{ReadOnlyInline}} {{Experimental_Inline}} {{SecureContext_Inline}}
  - : Gibt ein [`HID`](/de/docs/Web/API/HID) Objekt zurück, das Methoden zum Verbinden mit HID-Geräten, Auflisten angeschlossener HID-Geräte und Ereignisbehandlungsroutinen für angeschlossene HID-Geräte bietet.
- [`Navigator.ink`](/de/docs/Web/API/Navigator/ink) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt ein [`Ink`](/de/docs/Web/API/Ink) Objekt für das aktuelle Dokument zurück, das den Zugriff auf die [Ink API](/de/docs/Web/API/Ink_API) Funktionalität ermöglicht.
- [`Navigator.keyboard`](/de/docs/Web/API/Navigator/keyboard) {{ReadOnlyInline}} {{Experimental_Inline}} {{SecureContext_Inline}}
  - : Gibt ein [`Keyboard`](/de/docs/Web/API/Keyboard) Objekt zurück, das Zugriff auf Funktionen bietet, die Tastaturlayout-Karten abrufen und das Erfassen von Tastendruck-Ereignissen der physischen Tastatur umschalten.
- [`Navigator.language`](/de/docs/Web/API/Navigator/language) {{ReadOnlyInline}}
  - : Gibt einen String zurück, der die bevorzugte Sprache des Benutzers repräsentiert, normalerweise die Sprache der Browser-Oberfläche. Der Wert `null` wird zurückgegeben, wenn dies unbekannt ist.
- [`Navigator.languages`](/de/docs/Web/API/Navigator/languages) {{ReadOnlyInline}}
  - : Gibt ein Array von Strings zurück, die die dem Benutzer bekannten Sprachen in der Reihenfolge der Präferenz darstellen.
- [`Navigator.locks`](/de/docs/Web/API/Navigator/locks) {{ReadOnlyInline}} {{SecureContext_Inline}}
  - : Gibt ein [`LockManager`](/de/docs/Web/API/LockManager) Objekt zurück, das Methoden zum Anfordern eines neuen [`Lock`](/de/docs/Web/API/Lock) Objekts und Abfragen eines vorhandenen [`Lock`](/de/docs/Web/API/Lock) Objekts bietet.
- [`Navigator.login`](/de/docs/Web/API/Navigator/login) {{ReadOnlyInline}} {{SecureContext_Inline}}
  - : Bietet Zugriff auf das [`NavigatorLogin`](/de/docs/Web/API/NavigatorLogin) Objekt des Browsers, welches ein föderierter Identitätsanbieter (IdP) verwenden kann, um den Anmeldestatus eines Benutzers zu setzen, wenn dieser sich beim IdP anmeldet oder abmeldet. Weitere Details finden Sie in der [Federated Credential Management (FedCM) API](/de/docs/Web/API/FedCM_API).
- [`Navigator.maxTouchPoints`](/de/docs/Web/API/Navigator/maxTouchPoints) {{ReadOnlyInline}}
  - : Gibt die maximale Anzahl von gleichzeitigen Touch-Kontaktpunkten zurück, die vom aktuellen Gerät unterstützt werden.
- [`Navigator.mediaCapabilities`](/de/docs/Web/API/Navigator/mediaCapabilities) {{ReadOnlyInline}}
  - : Gibt ein [`MediaCapabilities`](/de/docs/Web/API/MediaCapabilities) Objekt zurück, das Informationen über die Dekodierungs- und Kodierungsfähigkeiten für ein gegebenes Format und die Ausgabefähigkeiten bereitstellen kann.
- [`Navigator.mediaDevices`](/de/docs/Web/API/Navigator/mediaDevices) {{ReadOnlyInline}} {{SecureContext_Inline}}
  - : Gibt eine Referenz auf ein [`MediaDevices`](/de/docs/Web/API/MediaDevices) Objekt zurück, das dann verwendet werden kann, um Informationen über verfügbare Mediengeräte abzurufen ([`MediaDevices.enumerateDevices()`](/de/docs/Web/API/MediaDevices/enumerateDevices)), herauszufinden, welche einschränkbaren Eigenschaften für Medien auf dem Computer und den Benutzeragenten des Benutzers unterstützt werden ([`MediaDevices.getSupportedConstraints()`](/de/docs/Web/API/MediaDevices/getSupportedConstraints)), und um Zugriff auf Medien mit [`MediaDevices.getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia) zu fordern.
- [`Navigator.mediaSession`](/de/docs/Web/API/Navigator/mediaSession) {{ReadOnlyInline}}
  - : Gibt ein [`MediaSession`](/de/docs/Web/API/MediaSession) Objekt zurück, das verwendet werden kann, um Metadaten bereitzustellen, die vom Browser verwendet werden können, um Informationen über das aktuell abgespielte Medium dem Benutzer zu präsentieren, wie z. B. in einer globalen Mediensteuerungs-Oberfläche.
- [`Navigator.onLine`](/de/docs/Web/API/Navigator/onLine) {{ReadOnlyInline}}
  - : Gibt einen booleschen Wert zurück, der anzeigt, ob der Browser online arbeitet.
- [`Navigator.pdfViewerEnabled`](/de/docs/Web/API/Navigator/pdfViewerEnabled) {{ReadOnlyInline}}
  - : Gibt `true` zurück, wenn der Browser PDF-Dateien inline anzeigen kann, wenn zu ihnen navigiert wird, und `false`, wenn nicht.
- [`Navigator.permissions`](/de/docs/Web/API/Navigator/permissions) {{ReadOnlyInline}}
  - : Gibt ein [`Permissions`](/de/docs/Web/API/Permissions) Objekt zurück, das verwendet werden kann, um den Status der Berechtigungen von APIs, die von der [Permissions API](/de/docs/Web/API/Permissions_API) abgedeckt werden, abzufragen und zu aktualisieren.
- [`Navigator.presentation`](/de/docs/Web/API/Navigator/presentation) {{ReadOnlyInline}} {{SecureContext_Inline}}
  - : Gibt eine Referenz auf die [`Presentation`](/de/docs/Web/API/Presentation) API zurück.
- [`Navigator.scheduling`](/de/docs/Web/API/Navigator/scheduling) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt ein [`Scheduling`](/de/docs/Web/API/Scheduling) Objekt für das aktuelle Dokument zurück.
- [`Navigator.serial`](/de/docs/Web/API/Navigator/serial) {{ReadOnlyInline}} {{Experimental_Inline}} {{SecureContext_Inline}}
  - : Gibt ein [`Serial`](/de/docs/Web/API/Serial) Objekt zurück, das den Einstiegspunkt in die [Web Serial API](/de/docs/Web/API/Web_Serial_API) darstellt, um die Steuerung von seriellen Schnittstellen zu ermöglichen.
- [`Navigator.serviceWorker`](/de/docs/Web/API/Navigator/serviceWorker) {{ReadOnlyInline}} {{SecureContext_Inline}}
  - : Gibt ein [`ServiceWorkerContainer`](/de/docs/Web/API/ServiceWorkerContainer) Objekt zurück, das Zugriff auf Registrierung, Entfernung, Upgrade und Kommunikation mit den [`ServiceWorker`](/de/docs/Web/API/ServiceWorker) Objekten für das [assoziierte Dokument](https://html.spec.whatwg.org/multipage/browsers.html#concept-document-window) bietet.
- [`Navigator.storage`](/de/docs/Web/API/Navigator/storage) {{ReadOnlyInline}} {{SecureContext_Inline}}
  - : Gibt das Singleton-Objekt [`StorageManager`](/de/docs/Web/API/StorageManager) zurück, das zur Verwaltung von Persistenzberechtigungen und zur Schätzung des verfügbaren Speichers auf Basis von Websites/Apps verwendet wird.
- [`Navigator.usb`](/de/docs/Web/API/Navigator/usb) {{ReadOnlyInline}} {{SecureContext_Inline}}
  - : Gibt ein [`USB`](/de/docs/Web/API/USB) Objekt für das aktuelle Dokument zurück, das Zugriff auf die [WebUSB API](/de/docs/Web/API/WebUSB_API) Funktionalität ermöglicht.
- [`Navigator.userActivation`](/de/docs/Web/API/Navigator/userActivation) {{ReadOnlyInline}}
  - : Gibt ein [`UserActivation`](/de/docs/Web/API/UserActivation) Objekt zurück, das Informationen über den Benutzeraktivierungszustand des aktuellen Fensters enthält.
- [`Navigator.userAgent`](/de/docs/Web/API/Navigator/userAgent) {{ReadOnlyInline}}
  - : Gibt die Benutzeragenten-Zeichenfolge für den aktuellen Browser zurück.
- [`Navigator.userAgentData`](/de/docs/Web/API/Navigator/userAgentData) {{ReadOnlyInline}} {{Experimental_Inline}} {{SecureContext_Inline}}
  - : Gibt ein [`NavigatorUAData`](/de/docs/Web/API/NavigatorUAData) Objekt zurück, das Zugriff auf Informationen über den Browser und das Betriebssystem des Benutzers bietet.
- [`Navigator.virtualKeyboard`](/de/docs/Web/API/Navigator/virtualKeyboard) {{ReadOnlyInline}} {{Experimental_Inline}} {{SecureContext_Inline}}
  - : Gibt eine Referenz auf die [`VirtualKeyboard`](/de/docs/Web/API/VirtualKeyboard) API zurück, um die Kontrolle über die virtuelle On-Screen-Tastatur zu übernehmen.
- [`Navigator.wakeLock`](/de/docs/Web/API/Navigator/wakeLock) {{ReadOnlyInline}} {{SecureContext_Inline}}
  - : Gibt eine [`WakeLock`](/de/docs/Web/API/WakeLock) Schnittstelle zurück, die verwendet werden kann, um Bildschirm-Wachsstufen anzufordern und den Bildschirm daran zu hindern, zu dimmen, sich auszuschalten oder einen Bildschirmschoner anzuzeigen.
- [`Navigator.webdriver`](/de/docs/Web/API/Navigator/webdriver) {{ReadOnlyInline}}
  - : Gibt an, ob der Benutzeragent durch Automatisierung gesteuert wird.
- [`Navigator.windowControlsOverlay`](/de/docs/Web/API/Navigator/windowControlsOverlay) {{ReadOnlyInline}} {{SecureContext_Inline}}
  - : Gibt die [`WindowControlsOverlay`](/de/docs/Web/API/WindowControlsOverlay) Schnittstelle zurück, die Informationen über die Geometrie der Titelleiste in Desktop Progressive Web Apps bereitstellt und ein Ereignis ermöglicht, um zu erfahren, wann sich dies ändert.
- [`Navigator.xr`](/de/docs/Web/API/Navigator/xr) {{ReadOnlyInline}} {{Experimental_Inline}} {{SecureContext_Inline}}
  - : Gibt das [`XRSystem`](/de/docs/Web/API/XRSystem) Objekt zurück, das den Einstiegspunkt in die [WebXR API](/de/docs/Web/API/WebXR_Device_API) darstellt.

### Nicht-standardmäßige Eigenschaften

- [`Navigator.buildID`](/de/docs/Web/API/Navigator/buildID) {{ReadOnlyInline}} {{Non-standard_Inline}}
  - : Gibt die Build-ID des Browsers zurück. In modernen Browsern liefert diese Eigenschaft nun einen festen Zeitstempel als Datenschutzmaßnahme, z. B. `20181001000000` in Firefox 64 und höher.
- [`Navigator.globalPrivacyControl`](/de/docs/Web/API/Navigator/globalPrivacyControl) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt einen booleschen Wert zurück, der die Zustimmung eines Benutzers zur Weitergabe oder dem Verkauf ihrer Informationen anzeigt.
- [`Navigator.standalone`](/de/docs/Web/API/Navigator/standalone) {{Non-standard_Inline}}
  - : Gibt einen booleschen Wert zurück, der anzeigt, ob der Browser im Standalone-Modus läuft. Nur auf Apples iOS Safari verfügbar.

### Veraltete Eigenschaften

- [`Navigator.activeVRDisplays`](/de/docs/Web/API/Navigator/activeVRDisplays) {{ReadOnlyInline}} {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Gibt ein Array zurück, das jedes [`VRDisplay`](/de/docs/Web/API/VRDisplay) Objekt enthält, das derzeit präsentiert (wo [`VRDisplay.isPresenting`](/de/docs/Web/API/VRDisplay/isPresenting) `true` ist).
- [`Navigator.appCodeName`](/de/docs/Web/API/Navigator/appCodeName) {{ReadOnlyInline}} {{Deprecated_Inline}}
  - : Gibt immer `'Mozilla'` zurück, in jedem Browser.
- [`Navigator.appName`](/de/docs/Web/API/Navigator/appName) {{ReadOnlyInline}} {{Deprecated_Inline}}
  - : Gibt immer `'Netscape'` zurück, in jedem Browser.
- [`Navigator.appVersion`](/de/docs/Web/API/Navigator/appVersion) {{ReadOnlyInline}} {{Deprecated_Inline}}
  - : Gibt die Version des Browsers als String zurück. Verlassen Sie sich nicht auf diese Eigenschaft, um den korrekten Wert zurückzugeben.
- [`Navigator.doNotTrack`](/de/docs/Web/API/Navigator/doNotTrack) {{ReadOnlyInline}} {{Deprecated_Inline}} {{non-standard_inline}}
  - : Gibt den Wert der Do-Not-Track-Einstellung des Benutzers wieder. Wenn dieser Wert "1" ist, sollte Ihre Website oder Anwendung den Benutzer nicht verfolgen.
- [`Navigator.mimeTypes`](/de/docs/Web/API/Navigator/mimeTypes) {{ReadOnlyInline}} {{Deprecated_Inline}}
  - : Gibt ein [`MimeTypeArray`](/de/docs/Web/API/MimeTypeArray) zurück, das die vom Browser unterstützten MIME-Typen auflistet.
- [`Navigator.oscpu`](/de/docs/Web/API/Navigator/oscpu) {{ReadOnlyInline}} {{Deprecated_Inline}}
  - : Gibt einen String zurück, der das aktuelle Betriebssystem repräsentiert.
- [`Navigator.platform`](/de/docs/Web/API/Navigator/platform) {{ReadOnlyInline}} {{Deprecated_Inline}}
  - : Gibt einen String zurück, der die Plattform des Browsers darstellt. Verlassen Sie sich nicht darauf, dass diese Funktion einen signifikanten Wert zurückgibt.
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

## Instanzmethoden

_Erbt keine Methoden._

- [`Navigator.canShare()`](/de/docs/Web/API/Navigator/canShare) {{SecureContext_Inline}}
  - : Gibt `true` zurück, wenn ein Aufruf von `Navigator.share()` erfolgreich wäre.
- [`Navigator.clearAppBadge()`](/de/docs/Web/API/Navigator/clearAppBadge) {{SecureContext_Inline}}
  - : Löscht ein Abzeichen auf dem Symbol der aktuellen App und gibt ein {{jsxref("Promise")}} zurück, das sich mit {{jsxref("undefined")}} auflöst.
- [`Navigator.deprecatedReplaceInURN()`](/de/docs/Web/API/Navigator/deprecatedReplaceInURN) {{Experimental_Inline}}
  - : Ersetzt angegebene Strings innerhalb der zugeordneten URL, die einer gegebenen opaken URN oder der internen `url` Eigenschaft von `FencedFrameConfig` entspricht. Diese Methode wurde vorübergehend eingeführt (daher "veraltet"), um diese Ersetzung für Fenced Frame URLs zu ermöglichen und AdTech-Anbietern bei der Migration vorhandener Implementierungen auf [Privacy Sandbox](https://developers.google.com/privacy-sandbox) APIs zu helfen.
- [`Navigator.getAutoplayPolicy()`](/de/docs/Web/API/Navigator/getAutoplayPolicy) {{Experimental_Inline}}
  - : Gibt einen Wert zurück, der angibt, ob das angegebene Medienelement, Audiokontext oder die Medienfunktion "type" zum automatischen Abspielen erlaubt ist.
- [`Navigator.getBattery()`](/de/docs/Web/API/Navigator/getBattery) {{SecureContext_Inline}}
  - : Gibt ein Promise zurück, das sich mit einem [`BatteryManager`](/de/docs/Web/API/BatteryManager) Objekt auflöst, das Informationen über den Batterieladestatus zurückgibt.
- [`Navigator.getGamepads()`](/de/docs/Web/API/Navigator/getGamepads)
  - : Gibt ein Array von [`Gamepad`](/de/docs/Web/API/Gamepad) Objekten zurück, eines für jedes an das Gerät angeschlossene Gamepad.
- [`Navigator.getInstalledRelatedApps()`](/de/docs/Web/API/Navigator/getInstalledRelatedApps) {{Experimental_Inline}} {{SecureContext_Inline}}
  - : Gibt ein Promise zurück, das sich mit einem Array von Objekten auflöst, die alle verwandten nativen oder [Progressive Web Applications](/de/docs/Web/Progressive_web_apps) repräsentieren, die der Benutzer installiert hat.
- [`Navigator.registerProtocolHandler()`](/de/docs/Web/API/Navigator/registerProtocolHandler) {{SecureContext_Inline}}
  - : Erlaubt es Websites, sich selbst als möglichen Handler für ein gegebenes Protokoll zu registrieren.
- [`Navigator.requestMediaKeySystemAccess()`](/de/docs/Web/API/Navigator/requestMediaKeySystemAccess) {{SecureContext_Inline}}
  - : Gibt ein {{jsxref("Promise")}} für ein MediaKeySystemAccess Objekt zurück.
- [`Navigator.requestMIDIAccess()`](/de/docs/Web/API/Navigator/requestMIDIAccess) {{SecureContext_Inline}}
  - : Gibt ein {{jsxref('Promise')}} zurück, das eine Anfrage für den Zugriff auf MIDI-Geräte auf dem System des Benutzers darstellt.
- [`Navigator.sendBeacon()`](/de/docs/Web/API/Navigator/sendBeacon)
  - : Wird verwendet, um eine kleine Menge an Daten asynchron über {{Glossary("HTTP", "HTTP")}} vom Benutzeragenten an einen Webserver zu übertragen.
- [`Navigator.setAppBadge()`](/de/docs/Web/API/Navigator/setAppBadge) {{SecureContext_Inline}}
  - : Setzt ein Abzeichen auf das mit dieser App verbundene Symbol und gibt ein {{jsxref("Promise")}} zurück, das sich mit {{jsxref("undefined")}} auflöst.
- [`Navigator.share()`](/de/docs/Web/API/Navigator/share) {{SecureContext_Inline}}
  - : Ruft den nativen Freigabemechanismus der aktuellen Plattform auf.
- [`Navigator.vibrate()`](/de/docs/Web/API/Navigator/vibrate)
  - : Verursacht eine Vibration auf Geräten, die dies unterstützen. Macht nichts, wenn Unterstützung nicht verfügbar ist.
- [`Navigator.unregisterProtocolHandler()`](/de/docs/Web/API/Navigator/unregisterProtocolHandler) {{SecureContext_Inline}}
  - : Macht die Registrierung einer Website rückgängig, die ein Handler für ein gegebenes Protokoll ist.

### Veraltete Methoden

- [`Navigator.getUserMedia()`](/de/docs/Web/API/Navigator/getUserMedia) {{Deprecated_Inline}} {{SecureContext_Inline}}
  - : Gibt nach der Erteilung von Benutzererlaubnis den mit einer Kamera oder einem Mikrofon auf dem lokalen Computer verbundenen Audio- oder Videostream zurück.
- [`Navigator.getVRDisplays()`](/de/docs/Web/API/Navigator/getVRDisplays) {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Gibt ein Promise zurück, das zu einem Array von [`VRDisplay`](/de/docs/Web/API/VRDisplay) Objekten auflöst, die alle verfügbaren VR-Geräte darstellen, die mit dem Computer verbunden sind.
- [`Navigator.javaEnabled()`](/de/docs/Web/API/Navigator/javaEnabled) {{Deprecated_Inline}}
  - : Gibt immer false zurück.
- [`Navigator.taintEnabled()`](/de/docs/Web/API/Navigator/taintEnabled) {{Deprecated_Inline}}
  - : Gibt `false` zurück. JavaScript-Funktionen zum Kennzeichnen/Entfernen von Kennzeichnungen wurden in JavaScript 1.2 entfernt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
