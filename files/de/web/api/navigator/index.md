---
title: Navigator
slug: Web/API/Navigator
l10n:
  sourceCommit: c1fd7dc9410c14ec9e00b3ec35b7b94d43296389
---

{{APIRef("DOM")}}

Das **`Navigator`**-Interface repräsentiert den Zustand und die Identität des User-Agent. Es ermöglicht Skripten, Informationen darüber abzufragen und sich zu registrieren, um bestimmte Aktivitäten auszuführen.

Ein `Navigator`-Objekt kann über die schreibgeschützte [`window.navigator`](/de/docs/Web/API/Window/navigator)-Eigenschaft abgerufen werden.

## Instanz-Eigenschaften

_Erbt keine Eigenschaften._

### Standard-Eigenschaften

- [`Navigator.bluetooth`](/de/docs/Web/API/Navigator/bluetooth) {{ReadOnlyInline}} {{Experimental_Inline}} {{SecureContext_Inline}}
  - : Gibt ein [`Bluetooth`](/de/docs/Web/API/Bluetooth)-Objekt für das aktuelle Dokument zurück und bietet Zugang zur [Web Bluetooth API](/de/docs/Web/API/Web_Bluetooth_API).
- [`Navigator.clipboard`](/de/docs/Web/API/Navigator/clipboard) {{ReadOnlyInline}} {{securecontext_inline}}
  - : Gibt ein [`Clipboard`](/de/docs/Web/API/Clipboard)-Objekt zurück, das Lese- und Schreibzugriff auf die Systemzwischenablage bietet.
- [`Navigator.connection`](/de/docs/Web/API/Navigator/connection) {{ReadOnlyInline}}
  - : Gibt ein [`NetworkInformation`](/de/docs/Web/API/NetworkInformation)-Objekt zurück, das Informationen über die Netzverbindung eines Geräts enthält.
- [`Navigator.contacts`](/de/docs/Web/API/Navigator/contacts) {{ReadOnlyInline}} {{Experimental_Inline}} {{SecureContext_Inline}}
  - : Gibt eine [`ContactsManager`](/de/docs/Web/API/ContactsManager)-Schnittstelle zurück, die es Benutzern ermöglicht, Einträge aus ihrer Kontaktliste auszuwählen und begrenzte Details der ausgewählten Einträge mit einer Website oder Anwendung zu teilen.
- [`Navigator.cookieEnabled`](/de/docs/Web/API/Navigator/cookieEnabled) {{ReadOnlyInline}}
  - : Gibt false zurück, wenn das Setzen eines Cookies ignoriert wird, andernfalls true.
- [`Navigator.credentials`](/de/docs/Web/API/Navigator/credentials) {{ReadOnlyInline}} {{SecureContext_Inline}}
  - : Gibt die [`CredentialsContainer`](/de/docs/Web/API/CredentialsContainer)-Schnittstelle zurück, die Methoden zur Anforderung von Anmeldeinformationen und zur Benachrichtigung des User-Agent bei interessanten Ereignissen wie erfolgreichem An- oder Abmelden freigibt.
- [`Navigator.deviceMemory`](/de/docs/Web/API/Navigator/deviceMemory) {{ReadOnlyInline}} {{SecureContext_Inline}}
  - : Gibt die Menge an Gerätespeicher in Gigabyte zurück. Dieser Wert ist eine Annäherung, die durch Runden auf die nächste Potenz von 2 und Teilen dieser Zahl durch 1024 erzielt wird.
- [`Navigator.geolocation`](/de/docs/Web/API/Navigator/geolocation) {{ReadOnlyInline}}
  - : Gibt ein [`Geolocation`](/de/docs/Web/API/Geolocation)-Objekt zurück, das den Zugriff auf den Standort des Geräts ermöglicht.
- [`Navigator.gpu`](/de/docs/Web/API/Navigator/gpu) {{ReadOnlyInline}} {{Experimental_Inline}} {{SecureContext_Inline}}
  - : Gibt das [`GPU`](/de/docs/Web/API/GPU)-Objekt für den aktuellen Browsing-Kontext zurück. Der Einstiegspunkt für die [WebGPU API](/de/docs/Web/API/WebGPU_API).
- [`Navigator.hardwareConcurrency`](/de/docs/Web/API/Navigator/hardwareConcurrency) {{ReadOnlyInline}}
  - : Gibt die Anzahl der verfügbaren logischen Prozessorkerne zurück.
- [`Navigator.hid`](/de/docs/Web/API/Navigator/hid) {{ReadOnlyInline}} {{Experimental_Inline}} {{SecureContext_Inline}}
  - : Gibt ein [`HID`](/de/docs/Web/API/HID)-Objekt zurück, das Methoden zum Verbinden mit HID-Geräten, zur Auflistung angeschlossener HID-Geräte und zu Ereignishandlern für angeschlossene HID-Geräte bietet.
- [`Navigator.ink`](/de/docs/Web/API/Navigator/ink) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt ein [`Ink`](/de/docs/Web/API/Ink)-Objekt für das aktuelle Dokument zurück und bietet Zugriff auf die [Ink API](/de/docs/Web/API/Ink_API).
- [`Navigator.keyboard`](/de/docs/Web/API/Navigator/keyboard) {{ReadOnlyInline}} {{Experimental_Inline}} {{SecureContext_Inline}}
  - : Gibt ein [`Keyboard`](/de/docs/Web/API/Keyboard)-Objekt zurück, das den Zugriff auf Funktionen bietet, die Tastatur-Layoutzuordnungen abrufen und das Erfassen von Tastendrücken der physischen Tastatur umschalten.
- [`Navigator.language`](/de/docs/Web/API/Navigator/language) {{ReadOnlyInline}}
  - : Gibt einen String zurück, der die bevorzugte Sprache des Benutzers darstellt, normalerweise die Sprache der Browser-Benutzeroberfläche. Der Wert `null` wird zurückgegeben, wenn diese unbekannt ist.
- [`Navigator.languages`](/de/docs/Web/API/Navigator/languages) {{ReadOnlyInline}}
  - : Gibt ein Array von Strings zurück, die die dem Benutzer bekannten Sprachen in der Reihenfolge der Präferenz darstellen.
- [`Navigator.locks`](/de/docs/Web/API/Navigator/locks) {{ReadOnlyInline}} {{SecureContext_Inline}}
  - : Gibt ein [`LockManager`](/de/docs/Web/API/LockManager)-Objekt zurück, das Methoden zum Anfordern eines neuen [`Lock`](/de/docs/Web/API/Lock)-Objekts und zum Abfragen eines vorhandenen [`Lock`](/de/docs/Web/API/Lock)-Objekts bietet.
- [`Navigator.login`](/de/docs/Web/API/Navigator/login) {{ReadOnlyInline}} {{Experimental_Inline}} {{SecureContext_Inline}}
  - : Bietet Zugriff auf das [`NavigatorLogin`](/de/docs/Web/API/NavigatorLogin)-Objekt des Browsers, das ein föderierter Identitätsanbieter (IdP) verwenden kann, um den Anmeldestatus eines Benutzers festzulegen, wenn er sich beim IdP anmeldet oder abmeldet. Weitere Details finden Sie in der [Federated Credential Management (FedCM) API](/de/docs/Web/API/FedCM_API).
- [`Navigator.maxTouchPoints`](/de/docs/Web/API/Navigator/maxTouchPoints) {{ReadOnlyInline}}
  - : Gibt die maximale Anzahl gleichzeitiger Berührungspunkte zurück, die vom aktuellen Gerät unterstützt werden.
- [`Navigator.mediaCapabilities`](/de/docs/Web/API/Navigator/mediaCapabilities) {{ReadOnlyInline}}
  - : Gibt ein [`MediaCapabilities`](/de/docs/Web/API/MediaCapabilities)-Objekt zurück, das Informationen über die Dekodierungs- und Kodierungsfähigkeiten für ein gegebenes Format und Ausgabefähigkeiten offenlegen kann.
- [`Navigator.mediaDevices`](/de/docs/Web/API/Navigator/mediaDevices) {{ReadOnlyInline}} {{SecureContext_Inline}}
  - : Gibt eine Referenz auf ein [`MediaDevices`](/de/docs/Web/API/MediaDevices)-Objekt zurück, das dann verwendet werden kann, um Informationen über verfügbare Mediengeräte zu erhalten ([`MediaDevices.enumerateDevices()`](/de/docs/Web/API/MediaDevices/enumerateDevices)), herauszufinden, welche einschränkbaren Eigenschaften für Medien auf dem Computer des Benutzers und dem User-Agent unterstützt werden ([`MediaDevices.getSupportedConstraints()`](/de/docs/Web/API/MediaDevices/getSupportedConstraints)), und um Zugang zu Medien mit [`MediaDevices.getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia) zu beantragen.
- [`Navigator.mediaSession`](/de/docs/Web/API/Navigator/mediaSession) {{ReadOnlyInline}}
  - : Gibt ein [`MediaSession`](/de/docs/Web/API/MediaSession)-Objekt zurück, das verwendet werden kann, um Metadaten bereitzustellen, die der Browser verwenden kann, um Informationen über die aktuell abgespielten Medien dem Benutzer zu präsentieren, wie in einer globalen Mediensteuerungs-Benutzeroberfläche.
- [`Navigator.onLine`](/de/docs/Web/API/Navigator/onLine) {{ReadOnlyInline}}
  - : Gibt einen Boolean-Wert zurück, der angibt, ob der Browser online arbeitet.
- [`Navigator.pdfViewerEnabled`](/de/docs/Web/API/Navigator/pdfViewerEnabled) {{ReadOnlyInline}}
  - : Gibt `true` zurück, wenn der Browser PDF-Dateien inline anzeigen kann, wenn zu ihnen navigiert wird, und `false` andernfalls.
- [`Navigator.permissions`](/de/docs/Web/API/Navigator/permissions) {{ReadOnlyInline}}
  - : Gibt ein [`Permissions`](/de/docs/Web/API/Permissions)-Objekt zurück, das verwendet werden kann, um den Berechtigungsstatus von APIs abzufragen und zu aktualisieren, die von der [Permissions API](/de/docs/Web/API/Permissions_API) abgedeckt werden.
- [`Navigator.presentation`](/de/docs/Web/API/Navigator/presentation) {{ReadOnlyInline}} {{SecureContext_Inline}}
  - : Gibt eine Referenz auf die [`Presentation`](/de/docs/Web/API/Presentation)-API zurück.
- [`Navigator.scheduling`](/de/docs/Web/API/Navigator/scheduling) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt ein [`Scheduling`](/de/docs/Web/API/Scheduling)-Objekt für das aktuelle Dokument zurück.
- [`Navigator.serial`](/de/docs/Web/API/Navigator/serial) {{ReadOnlyInline}} {{Experimental_Inline}} {{SecureContext_Inline}}
  - : Gibt ein [`Serial`](/de/docs/Web/API/Serial)-Objekt zurück, das den Einstiegspunkt in die [Web Serial API](/de/docs/Web/API/Web_Serial_API) darstellt, um die Kontrolle über serielle Anschlüsse zu ermöglichen.
- [`Navigator.serviceWorker`](/de/docs/Web/API/Navigator/serviceWorker) {{ReadOnlyInline}} {{SecureContext_Inline}}
  - : Gibt ein [`ServiceWorkerContainer`](/de/docs/Web/API/ServiceWorkerContainer)-Objekt zurück, das Zugang zu Registrierung, Entfernung, Aktualisierung und Kommunikation mit den [`ServiceWorker`](/de/docs/Web/API/ServiceWorker)-Objekten für das [assoziierte Dokument](https://html.spec.whatwg.org/multipage/browsers.html#concept-document-window) bietet.
- [`Navigator.storage`](/de/docs/Web/API/Navigator/storage) {{ReadOnlyInline}} {{SecureContext_Inline}}
  - : Gibt das Singleton-Objekt [`StorageManager`](/de/docs/Web/API/StorageManager) zurück, das zum Verwalten von Persistenzberechtigungen und zum Schätzen des verfügbaren Speichers auf einer Standort-zu-Standort-App-zu-App-Basis verwendet wird.
- [`Navigator.usb`](/de/docs/Web/API/Navigator/usb) {{ReadOnlyInline}} {{SecureContext_Inline}}
  - : Gibt ein [`USB`](/de/docs/Web/API/USB)-Objekt für das aktuelle Dokument zurück, das Zugriff auf die [WebUSB API](/de/docs/Web/API/WebUSB_API) bietet.
- [`Navigator.userActivation`](/de/docs/Web/API/Navigator/userActivation) {{ReadOnlyInline}}
  - : Gibt ein [`UserActivation`](/de/docs/Web/API/UserActivation)-Objekt zurück, das Informationen über den aktuellen Aktivierungszustand des Fensters des Benutzers enthält.
- [`Navigator.userAgent`](/de/docs/Web/API/Navigator/userAgent) {{ReadOnlyInline}}
  - : Gibt den User-Agent-String für den aktuellen Browser zurück.
- [`Navigator.userAgentData`](/de/docs/Web/API/Navigator/userAgentData) {{ReadOnlyInline}} {{Experimental_Inline}} {{SecureContext_Inline}}
  - : Gibt ein [`NavigatorUAData`](/de/docs/Web/API/NavigatorUAData)-Objekt zurück, das Zugang zu Informationen über den Browser und das Betriebssystem des Benutzers bietet.
- [`Navigator.virtualKeyboard`](/de/docs/Web/API/Navigator/virtualKeyboard) {{ReadOnlyInline}} {{Experimental_Inline}} {{SecureContext_Inline}}
  - : Gibt eine Referenz auf die [`VirtualKeyboard`](/de/docs/Web/API/VirtualKeyboard)-API zurück, um die Kontrolle über die virtuelle Bildschirmtastatur zu übernehmen.
- [`Navigator.wakeLock`](/de/docs/Web/API/Navigator/wakeLock) {{ReadOnlyInline}} {{SecureContext_Inline}}
  - : Gibt eine [`WakeLock`](/de/docs/Web/API/WakeLock)-Schnittstelle zurück, die Sie zum Anfordern von Bildschirmwachschlössern verwenden können, um das Abdunkeln des Bildschirms, das Ausschalten oder das Anzeigen eines Bildschirmschoners zu verhindern.
- [`Navigator.webdriver`](/de/docs/Web/API/Navigator/webdriver) {{ReadOnlyInline}}
  - : Gibt an, ob der User-Agent von der Automatisierung gesteuert wird.
- [`Navigator.windowControlsOverlay`](/de/docs/Web/API/Navigator/windowControlsOverlay) {{ReadOnlyInline}} {{SecureContext_Inline}}
  - : Gibt die [`WindowControlsOverlay`](/de/docs/Web/API/WindowControlsOverlay)-Schnittstelle zurück, die Informationen über die Geometrie der Titelleiste in Desktop-Progressive-Web-Apps bereitstellt und ein Ereignis, um zu wissen, wann immer sie sich ändert.
- [`Navigator.xr`](/de/docs/Web/API/Navigator/xr) {{ReadOnlyInline}} {{Experimental_Inline}} {{SecureContext_Inline}}
  - : Gibt ein [`XRSystem`](/de/docs/Web/API/XRSystem)-Objekt zurück, das den Einstiegspunkt in die [WebXR API](/de/docs/Web/API/WebXR_Device_API) darstellt.

### Nicht-standardmäßige Eigenschaften

- [`Navigator.buildID`](/de/docs/Web/API/Navigator/buildID) {{ReadOnlyInline}} {{Non-standard_Inline}}
  - : Gibt die Build-Kennung des Browsers zurück. In modernen Browsern gibt diese Eigenschaft jetzt einen festen Zeitstempel als Datenschutzmaßnahme zurück, z. B. `20181001000000` in Firefox 64 und höher.
- [`Navigator.globalPrivacyControl`](/de/docs/Web/API/Navigator/globalPrivacyControl) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt einen Boolean zurück, der anzeigt, ob ein Benutzer seine Zustimmung zur Weitergabe oder zum Verkauf seiner Informationen erteilt hat.
- [`Navigator.standalone`](/de/docs/Web/API/Navigator/standalone) {{Non-standard_Inline}}
  - : Gibt einen Boolean zurück, der angibt, ob der Browser im Standalone-Modus ausgeführt wird. Verfügbar nur in Apples iOS Safari.

### Veraltete Eigenschaften

- [`Navigator.activeVRDisplays`](/de/docs/Web/API/Navigator/activeVRDisplays) {{ReadOnlyInline}} {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Gibt ein Array zurück, das jedes [`VRDisplay`](/de/docs/Web/API/VRDisplay)-Objekt enthält, das derzeit präsentiert wird ([`VRDisplay.isPresenting`](/de/docs/Web/API/VRDisplay/isPresenting) ist `true`).
- [`Navigator.appCodeName`](/de/docs/Web/API/Navigator/appCodeName) {{ReadOnlyInline}} {{Deprecated_Inline}}
  - : Gibt immer `'Mozilla'` zurück, in jedem Browser.
- [`Navigator.appName`](/de/docs/Web/API/Navigator/appName) {{ReadOnlyInline}} {{Deprecated_Inline}}
  - : Gibt immer `'Netscape'` zurück, in jedem Browser.
- [`Navigator.appVersion`](/de/docs/Web/API/Navigator/appVersion) {{ReadOnlyInline}} {{Deprecated_Inline}}
  - : Gibt die Version des Browsers als String zurück. Verlassen Sie sich nicht darauf, dass diese Eigenschaft den korrekten Wert zurückgibt.
- [`Navigator.doNotTrack`](/de/docs/Web/API/Navigator/doNotTrack) {{ReadOnlyInline}} {{Deprecated_Inline}} {{non-standard_inline}}
  - : Berichtet den Wert der Nicht-verfolgen-Präferenz des Benutzers. Wenn dieser Wert "1" ist, sollte Ihre Website oder Anwendung den Benutzer nicht verfolgen.
- [`Navigator.mimeTypes`](/de/docs/Web/API/Navigator/mimeTypes) {{ReadOnlyInline}} {{Deprecated_Inline}}
  - : Gibt ein [`MimeTypeArray`](/de/docs/Web/API/MimeTypeArray) zurück, das die vom Browser unterstützten MIME-Typen auflistet.
- [`Navigator.oscpu`](/de/docs/Web/API/Navigator/oscpu) {{ReadOnlyInline}} {{Deprecated_Inline}}
  - : Gibt einen String zurück, der das aktuelle Betriebssystem darstellt.
- [`Navigator.platform`](/de/docs/Web/API/Navigator/platform) {{ReadOnlyInline}} {{Deprecated_Inline}}
  - : Gibt einen String zurück, der die Plattform des Browsers darstellt. Verlassen Sie sich nicht darauf, dass diese Funktion einen wesentlichen Wert zurückgibt.
- [`Navigator.plugins`](/de/docs/Web/API/Navigator/plugins) {{ReadOnlyInline}} {{Deprecated_Inline}}
  - : Gibt ein [`PluginArray`](/de/docs/Web/API/PluginArray) zurück, das die im Browser installierten Plugins auflistet.
- [`Navigator.product`](/de/docs/Web/API/Navigator/product) {{ReadOnlyInline}} {{Deprecated_Inline}}
  - : Gibt immer `'Gecko'` zurück, in jedem Browser.
- [`Navigator.productSub`](/de/docs/Web/API/Navigator/productSub) {{ReadOnlyInline}} {{Deprecated_Inline}}
  - : Gibt entweder den String `'20030107'` oder `'20100101'` zurück.
- [`Navigator.vendor`](/de/docs/Web/API/Navigator/vendor) {{ReadOnlyInline}} {{Deprecated_Inline}}
  - : Gibt entweder den leeren String zurück, `'Apple Computer Inc.'` oder `'Google Inc.'`.
- [`Navigator.vendorSub`](/de/docs/Web/API/Navigator/vendorSub) {{ReadOnlyInline}} {{Deprecated_Inline}}
  - : Gibt immer den leeren String zurück.

## Instanz-Methoden

_Erbt keine Methoden._

- [`Navigator.canShare()`](/de/docs/Web/API/Navigator/canShare) {{SecureContext_Inline}}
  - : Gibt `true` zurück, wenn ein Aufruf von `Navigator.share()` erfolgreich wäre.
- [`Navigator.clearAppBadge()`](/de/docs/Web/API/Navigator/clearAppBadge) {{SecureContext_Inline}}
  - : Löscht ein Abzeichen auf dem Symbol der aktuellen App und gibt ein {{jsxref("Promise")}} zurück, welches mit {{jsxref("undefined")}} aufgelöst wird.
- [`Navigator.deprecatedReplaceInURN()`](/de/docs/Web/API/Navigator/deprecatedReplaceInURN) {{Experimental_Inline}}
  - : Ersetzt angegebene Strings innerhalb der zugehörigen URL, die einem bestimmten undurchsichtigen URN oder der internen `url`-Eigenschaft einer `FencedFrameConfig` zugeordnet ist. Diese Methode wurde vorübergehend zur Verfügung gestellt (daher "veraltet"), um diese Ersetzung für fenced frame URLs zu ermöglichen und Ad-Tech-Anbieter dabei zu unterstützen, bestehende Implementierungen auf [Privacy Sandbox](https://developers.google.com/privacy-sandbox)-APIs zu migrieren.
- [`Navigator.getAutoplayPolicy()`](/de/docs/Web/API/Navigator/getAutoplayPolicy) {{Experimental_Inline}}
  - : Gibt einen Wert zurück, der angibt, ob das angegebene Medienelement, der Audiokontext oder die Medienfunktion "type" automatisch abgespielt werden darf.
- [`Navigator.getBattery()`](/de/docs/Web/API/Navigator/getBattery) {{SecureContext_Inline}}
  - : Gibt ein Promise zurück, das mit einem [`BatteryManager`](/de/docs/Web/API/BatteryManager)-Objekt aufgelöst wird, das Informationen über den Batterie-Ladestatus liefert.
- [`Navigator.getGamepads()`](/de/docs/Web/API/Navigator/getGamepads)
  - : Gibt ein Array von [`Gamepad`](/de/docs/Web/API/Gamepad)-Objekten zurück, eines für jedes mit dem Gerät verbundene Gamepad.
- [`Navigator.getInstalledRelatedApps()`](/de/docs/Web/API/Navigator/getInstalledRelatedApps) {{Experimental_Inline}} {{SecureContext_Inline}}
  - : Gibt ein Promise zurück, das mit einem Array von Objekten aufgelöst wird, die alle verwandten nativen oder [Progressive Web Applications](/de/docs/Web/Progressive_web_apps) darstellen, die der Benutzer installiert hat.
- [`Navigator.registerProtocolHandler()`](/de/docs/Web/API/Navigator/registerProtocolHandler) {{SecureContext_Inline}}
  - : Ermöglicht es Websites, sich selbst als möglichen Handler für ein gegebenes Protokoll zu registrieren.
- [`Navigator.requestMediaKeySystemAccess()`](/de/docs/Web/API/Navigator/requestMediaKeySystemAccess) {{SecureContext_Inline}}
  - : Gibt ein {{jsxref("Promise")}} für ein MediaKeySystemAccess-Objekt zurück.
- [`Navigator.requestMIDIAccess()`](/de/docs/Web/API/Navigator/requestMIDIAccess) {{SecureContext_Inline}}
  - : Gibt ein {{jsxref('Promise')}} zurück, das eine Anfrage für den Zugriff auf MIDI-Geräte im System des Benutzers darstellt.
- [`Navigator.sendBeacon()`](/de/docs/Web/API/Navigator/sendBeacon)
  - : Wird verwendet, um asynchron eine kleine Datenmenge über {{Glossary("HTTP", "HTTP")}} vom User-Agent an einen Webserver zu übertragen.
- [`Navigator.setAppBadge()`](/de/docs/Web/API/Navigator/setAppBadge) {{SecureContext_Inline}}
  - : Setzt ein Abzeichen auf das Symbol, das mit dieser App verknüpft ist, und gibt ein {{jsxref("Promise")}} zurück, welches mit {{jsxref("undefined")}} aufgelöst wird.
- [`Navigator.share()`](/de/docs/Web/API/Navigator/share) {{SecureContext_Inline}}
  - : Ruft den nativen Freigabemechanismus der aktuellen Plattform auf.
- [`Navigator.vibrate()`](/de/docs/Web/API/Navigator/vibrate)
  - : Verursacht Vibration auf Geräten, die dies unterstützen. Tut nichts, wenn Vibrationsunterstützung nicht verfügbar ist.
- [`Navigator.unregisterProtocolHandler()`](/de/docs/Web/API/Navigator/unregisterProtocolHandler) {{SecureContext_Inline}}
  - : Hebt die Registrierung einer Website auf, die ein Handler für ein gegebenes Protokoll ist.

### Veraltete Methoden

- [`Navigator.getUserMedia()`](/de/docs/Web/API/Navigator/getUserMedia) {{Deprecated_Inline}} {{SecureContext_Inline}}
  - : Gibt nach Aufforderung des Benutzers zur Erlaubnis den Audio- oder Videostream zurück, der einer Kamera oder einem Mikrofon auf dem lokalen Computer zugeordnet ist.
- [`Navigator.getVRDisplays()`](/de/docs/Web/API/Navigator/getVRDisplays) {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Gibt ein Promise zurück, das mit einem Array von [`VRDisplay`](/de/docs/Web/API/VRDisplay)-Objekten aufgelöst wird, die alle verfügbaren VR-Geräte darstellen, die mit dem Computer verbunden sind.
- [`Navigator.javaEnabled()`](/de/docs/Web/API/Navigator/javaEnabled) {{Deprecated_Inline}}
  - : Gibt immer false zurück.
- [`Navigator.taintEnabled()`](/de/docs/Web/API/Navigator/taintEnabled) {{Deprecated_Inline}}
  - : Gibt `false` zurück. JavaScript-taint/untaint-Funktionen wurden in JavaScript 1.2 entfernt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
