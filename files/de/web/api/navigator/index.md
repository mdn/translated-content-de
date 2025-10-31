---
title: Navigator
slug: Web/API/Navigator
l10n:
  sourceCommit: a4fcf79b60471db6f148fa4ba36f2cdeafbbeb70
---

{{APIRef("DOM")}}

Das **`Navigator`**-Interface repräsentiert den Zustand und die Identität des User-Agenten. Es ermöglicht Skripten, ihn abzufragen und sich zu registrieren, um einige Aktivitäten fortzuführen.

Ein `Navigator`-Objekt kann über die schreibgeschützte [`window.navigator`](/de/docs/Web/API/Window/navigator)-Eigenschaft abgerufen werden.

## Instanz-Eigenschaften

_Erbt keine Eigenschaften._

### Standard-Eigenschaften

- [`Navigator.bluetooth`](/de/docs/Web/API/Navigator/bluetooth) {{ReadOnlyInline}} {{Experimental_Inline}} {{SecureContext_Inline}}
  - : Gibt ein [`Bluetooth`](/de/docs/Web/API/Bluetooth)-Objekt für das aktuelle Dokument zurück und bietet Zugriff auf die Funktionalität der [Web Bluetooth API](/de/docs/Web/API/Web_Bluetooth_API).
- [`Navigator.clipboard`](/de/docs/Web/API/Navigator/clipboard) {{ReadOnlyInline}} {{securecontext_inline}}
  - : Gibt ein [`Clipboard`](/de/docs/Web/API/Clipboard)-Objekt zurück, das Lese- und Schreibzugriff auf die System-Zwischenablage bietet.
- [`Navigator.connection`](/de/docs/Web/API/Navigator/connection) {{ReadOnlyInline}}
  - : Gibt ein [`NetworkInformation`](/de/docs/Web/API/NetworkInformation)-Objekt zurück, das Informationen über die Netzwerkverbindung eines Geräts enthält.
- [`Navigator.contacts`](/de/docs/Web/API/Navigator/contacts) {{ReadOnlyInline}} {{Experimental_Inline}} {{SecureContext_Inline}}
  - : Gibt eine [`ContactsManager`](/de/docs/Web/API/ContactsManager)-Schnittstelle zurück, die den Benutzern ermöglicht, Einträge aus ihrer Kontaktliste auszuwählen und begrenzte Details der ausgewählten Einträge mit einer Website oder Anwendung zu teilen.
- [`Navigator.cookieEnabled`](/de/docs/Web/API/Navigator/cookieEnabled) {{ReadOnlyInline}}
  - : Gibt false zurück, wenn das Setzen eines Cookies ignoriert wird, und true, wenn nicht.
- [`Navigator.credentials`](/de/docs/Web/API/Navigator/credentials) {{ReadOnlyInline}} {{SecureContext_Inline}}
  - : Gibt die [`CredentialsContainer`](/de/docs/Web/API/CredentialsContainer)-Schnittstelle zurück, die Methoden zum Anfordern von Anmeldeinformationen und zur Benachrichtigung des User-Agenten bei interessanten Ereignissen wie erfolgreichem An- oder Abmelden bietet.
- [`Navigator.deviceMemory`](/de/docs/Web/API/Navigator/deviceMemory) {{ReadOnlyInline}} {{SecureContext_Inline}}
  - : Gibt die Menge des Gerätespeichers in Gigabyte zurück. Dieser Wert ist eine Annäherung, die durch Runden auf die nächste Zweierpotenz gegeben ist und diese Zahl durch 1024 teilt.
- [`Navigator.devicePosture`](/de/docs/Web/API/Navigator/devicePosture) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt das [`DevicePosture`](/de/docs/Web/API/DevicePosture)-Objekt des Browsers zurück, das Entwicklern ermöglicht, die aktuelle Haltung des Geräts abzufragen (d.h. ob das Viewport flach oder gefaltet ist) und Code als Reaktion auf Haltungsänderungen auszuführen.
- [`Navigator.geolocation`](/de/docs/Web/API/Navigator/geolocation) {{ReadOnlyInline}}
  - : Gibt ein [`Geolocation`](/de/docs/Web/API/Geolocation)-Objekt zurück, das den Zugriff auf die Position des Geräts ermöglicht.
- [`Navigator.gpu`](/de/docs/Web/API/Navigator/gpu) {{ReadOnlyInline}} {{SecureContext_Inline}}
  - : Gibt das [`GPU`](/de/docs/Web/API/GPU)-Objekt für den aktuellen Browsing-Kontext zurück. Der Einstiegspunkt für die [WebGPU API](/de/docs/Web/API/WebGPU_API).
- [`Navigator.hardwareConcurrency`](/de/docs/Web/API/Navigator/hardwareConcurrency) {{ReadOnlyInline}}
  - : Gibt die Anzahl der logischen Prozessorkerne zurück, die zur Verfügung stehen.
- [`Navigator.hid`](/de/docs/Web/API/Navigator/hid) {{ReadOnlyInline}} {{Experimental_Inline}} {{SecureContext_Inline}}
  - : Gibt ein [`HID`](/de/docs/Web/API/HID)-Objekt zurück, das Methoden zum Verbinden mit HID-Geräten, Auflisten angeschlossener HID-Geräte und Ereignis-Handler für verbundene HID-Geräte bereitstellt.
- [`Navigator.ink`](/de/docs/Web/API/Navigator/ink) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt ein [`Ink`](/de/docs/Web/API/Ink)-Objekt für das aktuelle Dokument zurück und bietet Zugriff auf die Funktionalität der [Ink API](/de/docs/Web/API/Ink_API).
- [`Navigator.keyboard`](/de/docs/Web/API/Navigator/keyboard) {{ReadOnlyInline}} {{Experimental_Inline}} {{SecureContext_Inline}}
  - : Gibt ein [`Keyboard`](/de/docs/Web/API/Keyboard)-Objekt zurück, das Zugang zu Funktionen bietet, die Tastaturlayout-Karten abrufen und das Erfassen von Tastenanschlägen von der physischen Tastatur umschalten.
- [`Navigator.language`](/de/docs/Web/API/Navigator/language) {{ReadOnlyInline}}
  - : Gibt eine Zeichenfolge zurück, die die bevorzugte Sprache des Benutzers darstellt, normalerweise die Sprache der Browser-Benutzeroberfläche. Der Wert `null` wird zurückgegeben, wenn dies unbekannt ist.
- [`Navigator.languages`](/de/docs/Web/API/Navigator/languages) {{ReadOnlyInline}}
  - : Gibt ein Array von Zeichenfolgen zurück, das die dem Benutzer bekannten Sprachen in der Reihenfolge der Präferenz darstellt.
- [`Navigator.locks`](/de/docs/Web/API/Navigator/locks) {{ReadOnlyInline}} {{SecureContext_Inline}}
  - : Gibt ein [`LockManager`](/de/docs/Web/API/LockManager)-Objekt zurück, das Methoden zum Anfordern eines neuen [`Lock`](/de/docs/Web/API/Lock)-Objekts und Abfragen eines bestehenden [`Lock`](/de/docs/Web/API/Lock)-Objekts zur Verfügung stellt.
- [`Navigator.login`](/de/docs/Web/API/Navigator/login) {{ReadOnlyInline}} {{SecureContext_Inline}}
  - : Bietet Zugriff auf das [`NavigatorLogin`](/de/docs/Web/API/NavigatorLogin)-Objekt des Browsers, das ein identitätsbezogener Anbieter (IdP) verwenden kann, um den Anmeldestatus eines Benutzers festzulegen, wenn er sich beim IdP anmeldet oder abmeldet. Weitere Details finden Sie in der [Federated Credential Management (FedCM) API](/de/docs/Web/API/FedCM_API).
- [`Navigator.maxTouchPoints`](/de/docs/Web/API/Navigator/maxTouchPoints) {{ReadOnlyInline}}
  - : Gibt die maximale Anzahl gleichzeitiger Touch-Kontaktpunkte zurück, die vom aktuellen Gerät unterstützt werden.
- [`Navigator.mediaCapabilities`](/de/docs/Web/API/Navigator/mediaCapabilities) {{ReadOnlyInline}}
  - : Gibt ein [`MediaCapabilities`](/de/docs/Web/API/MediaCapabilities)-Objekt zurück, das Informationen über die Decodierungs- und Codierungsfähigkeiten für ein bestimmtes Format und die Ausgabefähigkeiten anzeigen kann.
- [`Navigator.mediaDevices`](/de/docs/Web/API/Navigator/mediaDevices) {{ReadOnlyInline}} {{SecureContext_Inline}}
  - : Gibt eine Referenz zu einem [`MediaDevices`](/de/docs/Web/API/MediaDevices)-Objekt zurück, das verwendet werden kann, um Informationen über verfügbare Mediageräte zu erhalten ([`MediaDevices.enumerateDevices()`](/de/docs/Web/API/MediaDevices/enumerateDevices)), herauszufinden, welche beschränkbaren Eigenschaften für Medien auf dem Computer und dem User-Agent des Benutzers unterstützt werden ([`MediaDevices.getSupportedConstraints()`](/de/docs/Web/API/MediaDevices/getSupportedConstraints)) und um Zugriff auf Medien zu beantragen, indem [`MediaDevices.getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia) benutzt wird.
- [`Navigator.mediaSession`](/de/docs/Web/API/Navigator/mediaSession) {{ReadOnlyInline}}
  - : Gibt ein [`MediaSession`](/de/docs/Web/API/MediaSession)-Objekt zurück, das verwendet werden kann, um Metadaten bereitzustellen, die vom Browser verwendet werden können, um Informationen über das aktuell abgespielte Medium dem Benutzer anzuzeigen, etwa in einer globalen Mediensteuerungs-Benutzeroberfläche.
- [`Navigator.onLine`](/de/docs/Web/API/Navigator/onLine) {{ReadOnlyInline}}
  - : Gibt einen Boolean-Wert zurück, der anzeigt, ob der Browser online arbeitet.
- [`Navigator.pdfViewerEnabled`](/de/docs/Web/API/Navigator/pdfViewerEnabled) {{ReadOnlyInline}}
  - : Gibt `true` zurück, wenn der Browser PDF-Dateien inline anzeigen kann, während er zu ihnen navigiert, und `false` andernfalls.
- [`Navigator.permissions`](/de/docs/Web/API/Navigator/permissions) {{ReadOnlyInline}}
  - : Gibt ein [`Permissions`](/de/docs/Web/API/Permissions)-Objekt zurück, das dazu verwendet werden kann, den Berechtigungsstatus von APIs abzufragen und zu aktualisieren, die von der [Permissions API](/de/docs/Web/API/Permissions_API) abgedeckt werden.
- [`Navigator.presentation`](/de/docs/Web/API/Navigator/presentation) {{ReadOnlyInline}} {{SecureContext_Inline}}
  - : Gibt eine Referenz zur [`Presentation`](/de/docs/Web/API/Presentation) API zurück.
- [`Navigator.scheduling`](/de/docs/Web/API/Navigator/scheduling) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt ein [`Scheduling`](/de/docs/Web/API/Scheduling)-Objekt für das aktuelle Dokument zurück.
- [`Navigator.serial`](/de/docs/Web/API/Navigator/serial) {{ReadOnlyInline}} {{Experimental_Inline}} {{SecureContext_Inline}}
  - : Gibt ein [`Serial`](/de/docs/Web/API/Serial)-Objekt zurück, das den Einstiegspunkt in die [Web Serial API](/de/docs/Web/API/Web_Serial_API) darstellt, um die Steuerung serielle Schnittstellen zu ermöglichen.
- [`Navigator.serviceWorker`](/de/docs/Web/API/Navigator/serviceWorker) {{ReadOnlyInline}} {{SecureContext_Inline}}
  - : Gibt ein [`ServiceWorkerContainer`](/de/docs/Web/API/ServiceWorkerContainer)-Objekt zurück, das Zugriff auf die Registrierung, Entfernung, Aktualisierung und Kommunikation mit den [`ServiceWorker`](/de/docs/Web/API/ServiceWorker)-Objekten für das [zugehörige Dokument](https://html.spec.whatwg.org/multipage/browsers.html#concept-document-window) bietet.
- [`Navigator.storage`](/de/docs/Web/API/Navigator/storage) {{ReadOnlyInline}} {{SecureContext_Inline}}
  - : Gibt das Singleton-Objekt [`StorageManager`](/de/docs/Web/API/StorageManager) zurück, das für die Verwaltung von Persistenzberechtigungen und die Schätzung des verfügbaren Speichers auf einer seiten-/anwendungsbasierten Basis verwendet wird.
- [`Navigator.usb`](/de/docs/Web/API/Navigator/usb) {{ReadOnlyInline}} {{SecureContext_Inline}}
  - : Gibt ein [`USB`](/de/docs/Web/API/USB)-Objekt für das aktuelle Dokument zurück und bietet Zugriff auf die Funktionalität der [WebUSB API](/de/docs/Web/API/WebUSB_API).
- [`Navigator.userActivation`](/de/docs/Web/API/Navigator/userActivation) {{ReadOnlyInline}}
  - : Gibt ein [`UserActivation`](/de/docs/Web/API/UserActivation)-Objekt zurück, das Informationen über den Benutzeraktivierungszustand des aktuellen Fensters enthält.
- [`Navigator.userAgent`](/de/docs/Web/API/Navigator/userAgent) {{ReadOnlyInline}}
  - : Gibt den User-Agent-String für den aktuellen Browser zurück.
- [`Navigator.userAgentData`](/de/docs/Web/API/Navigator/userAgentData) {{ReadOnlyInline}} {{Experimental_Inline}} {{SecureContext_Inline}}
  - : Gibt ein [`NavigatorUAData`](/de/docs/Web/API/NavigatorUAData)-Objekt zurück, das Zugriff auf Informationen über den Browser und das Betriebssystem des Benutzers gibt.
- [`Navigator.virtualKeyboard`](/de/docs/Web/API/Navigator/virtualKeyboard) {{ReadOnlyInline}} {{Experimental_Inline}} {{SecureContext_Inline}}
  - : Gibt eine Referenz zur [`VirtualKeyboard`](/de/docs/Web/API/VirtualKeyboard) API zurück, um die Kontrolle über die virtuelle Bildschirmtastatur zu übernehmen.
- [`Navigator.wakeLock`](/de/docs/Web/API/Navigator/wakeLock) {{ReadOnlyInline}} {{SecureContext_Inline}}
  - : Gibt eine [`WakeLock`](/de/docs/Web/API/WakeLock)-Schnittstelle zurück, die verwendet werden kann, um Bildschirm-Aufwach-Sperren anzufordern und zu verhindern, dass der Bildschirm gedimmt wird, ausgeht oder ein Bildschirmschoner angezeigt wird.
- [`Navigator.webdriver`](/de/docs/Web/API/Navigator/webdriver) {{ReadOnlyInline}}
  - : Gibt an, ob der User-Agent von Automatisierung gesteuert wird.
- [`Navigator.windowControlsOverlay`](/de/docs/Web/API/Navigator/windowControlsOverlay) {{ReadOnlyInline}} {{SecureContext_Inline}}
  - : Gibt die [`WindowControlsOverlay`](/de/docs/Web/API/WindowControlsOverlay)-Schnittstelle zurück, die Informationen über die Geometrie der Titelleiste in Desktop-Progressive-Web-Apps und ein Ereignis bereitstellt, um zu wissen, wann immer es sich ändert.
- [`Navigator.xr`](/de/docs/Web/API/Navigator/xr) {{ReadOnlyInline}} {{Experimental_Inline}} {{SecureContext_Inline}}
  - : Gibt das [`XRSystem`](/de/docs/Web/API/XRSystem)-Objekt zurück, das den Einstiegspunkt in die [WebXR API](/de/docs/Web/API/WebXR_Device_API) darstellt.

### Nicht standardmäßige Eigenschaften

- [`Navigator.buildID`](/de/docs/Web/API/Navigator/buildID) {{ReadOnlyInline}} {{Non-standard_Inline}}
  - : Gibt den Build-Bezeichner des Browsers zurück. In modernen Browsern gibt diese Eigenschaft jetzt einen festen Zeitstempel zur Wahrung der Privatsphäre zurück, z. B. `20181001000000` in Firefox 64 und später.
- [`Navigator.globalPrivacyControl`](/de/docs/Web/API/Navigator/globalPrivacyControl) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt einen Boolean zurück, der die Zustimmung eines Benutzers zur Weitergabe oder zum Verkauf seiner Informationen angibt.
- [`Navigator.standalone`](/de/docs/Web/API/Navigator/standalone) {{Non-standard_Inline}}
  - : Gibt einen Boolean zurück, der anzeigt, ob der Browser im Standalone-Modus läuft. Nur auf Apples iOS Safari verfügbar.

### Veraltete Eigenschaften

- [`Navigator.activeVRDisplays`](/de/docs/Web/API/Navigator/activeVRDisplays) {{ReadOnlyInline}} {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Gibt ein Array zurück, das jedes [`VRDisplay`](/de/docs/Web/API/VRDisplay)-Objekt enthält, das derzeit etwas darstellt ([`VRDisplay.isPresenting`](/de/docs/Web/API/VRDisplay/isPresenting) ist `true`).
- [`Navigator.appCodeName`](/de/docs/Web/API/Navigator/appCodeName) {{ReadOnlyInline}}
  - : Gibt immer `'Mozilla'` zurück, in jedem Browser.
- [`Navigator.appName`](/de/docs/Web/API/Navigator/appName) {{ReadOnlyInline}}
  - : Gibt immer `'Netscape'` zurück, in jedem Browser.
- [`Navigator.appVersion`](/de/docs/Web/API/Navigator/appVersion) {{ReadOnlyInline}}
  - : Gibt die Version des Browsers als Zeichenfolge zurück. Verlassen Sie sich nicht darauf, dass diese Eigenschaft den korrekten Wert zurückgibt.
- [`Navigator.doNotTrack`](/de/docs/Web/API/Navigator/doNotTrack) {{ReadOnlyInline}} {{Deprecated_Inline}} {{non-standard_inline}}
  - : Meldet den Wert der Do-Not-Track-Präferenz des Benutzers. Wenn dieser Wert "1" ist, sollte Ihre Website oder Anwendung den Benutzer nicht verfolgen.
- [`Navigator.mimeTypes`](/de/docs/Web/API/Navigator/mimeTypes) {{ReadOnlyInline}}
  - : Gibt ein [`MimeTypeArray`](/de/docs/Web/API/MimeTypeArray) zurück, das die vom Browser unterstützten MIME-Typen auflistet.
- [`Navigator.oscpu`](/de/docs/Web/API/Navigator/oscpu) {{ReadOnlyInline}}
  - : Gibt eine Zeichenfolge zurück, die das aktuelle Betriebssystem darstellt.
- [`Navigator.platform`](/de/docs/Web/API/Navigator/platform) {{ReadOnlyInline}}
  - : Gibt eine Zeichenfolge zurück, die die Plattform des Browsers darstellt. Verlassen Sie sich nicht darauf, dass diese Funktion einen signifikanten Wert zurückgibt.
- [`Navigator.plugins`](/de/docs/Web/API/Navigator/plugins) {{ReadOnlyInline}}
  - : Gibt ein [`PluginArray`](/de/docs/Web/API/PluginArray) zurück, das die im Browser installierten Plugins auflistet.
- [`Navigator.product`](/de/docs/Web/API/Navigator/product) {{ReadOnlyInline}}
  - : Gibt immer `'Gecko'` zurück, in jedem Browser.
- [`Navigator.productSub`](/de/docs/Web/API/Navigator/productSub) {{ReadOnlyInline}}
  - : Gibt entweder die Zeichenfolge `'20030107'` oder `'"20100101'` zurück.
- [`Navigator.vendor`](/de/docs/Web/API/Navigator/vendor) {{ReadOnlyInline}}
  - : Gibt entweder die leere Zeichenfolge, `'Apple Computer Inc.'` oder `'Google Inc.'` zurück.
- [`Navigator.vendorSub`](/de/docs/Web/API/Navigator/vendorSub) {{ReadOnlyInline}}
  - : Gibt immer die leere Zeichenfolge zurück.

## Instanz-Methoden

_Erbt keine Methoden._

- [`Navigator.canShare()`](/de/docs/Web/API/Navigator/canShare) {{SecureContext_Inline}}
  - : Gibt `true` zurück, wenn ein Aufruf von `Navigator.share()` erfolgreich wäre.
- [`Navigator.clearAppBadge()`](/de/docs/Web/API/Navigator/clearAppBadge) {{SecureContext_Inline}}
  - : Löscht ein Abzeichen auf dem aktuellen App-Symbol und gibt ein {{jsxref("Promise")}} zurück, das mit {{jsxref("undefined")}} aufgelöst wird.
- [`Navigator.deprecatedReplaceInURN()`](/de/docs/Web/API/Navigator/deprecatedReplaceInURN) {{Experimental_Inline}}
  - : Ersetzt bestimmte Zeichenfolgen innerhalb der zugeordneten URL, die einem gegebenen undurchsichtigen URN oder der internen `url`-Eigenschaft von `FencedFrameConfig` entspricht. Diese Methode wurde als temporäre Maßnahme (daher "veraltet") zur Verfügung gestellt, um diese Ersetzung für fenced frame URLs zu ermöglichen und Ad-Tech-Anbietern beim Migrieren bestehender Implementierungen zu [Privacy Sandbox](https://privacysandbox.google.com/)-APIs zu helfen.
- [`Navigator.getAutoplayPolicy()`](/de/docs/Web/API/Navigator/getAutoplayPolicy) {{Experimental_Inline}}
  - : Gibt einen Wert zurück, der angibt, ob das angegebene Medienelement, der Audiokontext oder das Media-Feature "typ" automatisch abgespielt werden darf.
- [`Navigator.getBattery()`](/de/docs/Web/API/Navigator/getBattery) {{SecureContext_Inline}}
  - : Gibt einen Promise zurück, der mit einem [`BatteryManager`](/de/docs/Web/API/BatteryManager)-Objekt aufgelöst wird, das Informationen über den Batterieladezustand liefert.
- [`Navigator.getGamepads()`](/de/docs/Web/API/Navigator/getGamepads)
  - : Gibt ein Array von [`Gamepad`](/de/docs/Web/API/Gamepad)-Objekten zurück, eines für jeden mit dem Gerät verbundenen Gamecontroller.
- [`Navigator.getInstalledRelatedApps()`](/de/docs/Web/API/Navigator/getInstalledRelatedApps) {{Experimental_Inline}} {{SecureContext_Inline}}
  - : Gibt einen Promise zurück, der mit einem Array von Objekten aufgelöst wird, die beliebige verwandte native oder [Progressive Web Applications](/de/docs/Web/Progressive_web_apps) darstellen, die der Benutzer installiert hat.
- [`Navigator.registerProtocolHandler()`](/de/docs/Web/API/Navigator/registerProtocolHandler) {{SecureContext_Inline}}
  - : Erlaubt es Websites, sich selbst als mögliche Handler für ein gegebenes Protokoll zu registrieren.
- [`Navigator.requestMediaKeySystemAccess()`](/de/docs/Web/API/Navigator/requestMediaKeySystemAccess) {{SecureContext_Inline}}
  - : Gibt ein {{jsxref("Promise")}} für ein `MediaKeySystemAccess`-Objekt zurück.
- [`Navigator.requestMIDIAccess()`](/de/docs/Web/API/Navigator/requestMIDIAccess) {{SecureContext_Inline}}
  - : Gibt ein {{jsxref('Promise')}} zurück, das eine Anfrage für den Zugriff auf MIDI-Geräte auf dem System des Benutzers darstellt.
- [`Navigator.sendBeacon()`](/de/docs/Web/API/Navigator/sendBeacon)
  - : Wird verwendet, um asynchron eine kleine Menge Daten mithilfe von {{Glossary("HTTP", "HTTP")}} vom User-Agent an einen Webserver zu übertragen.
- [`Navigator.setAppBadge()`](/de/docs/Web/API/Navigator/setAppBadge) {{SecureContext_Inline}}
  - : Setzt ein Abzeichen auf dem mit dieser App verbundenen Symbol und gibt ein {{jsxref("Promise")}} zurück, das mit {{jsxref("undefined")}} aufgelöst wird.
- [`Navigator.share()`](/de/docs/Web/API/Navigator/share) {{SecureContext_Inline}}
  - : Ruft den nativen Freigabemechanismus der aktuellen Plattform auf.
- [`Navigator.vibrate()`](/de/docs/Web/API/Navigator/vibrate)
  - : Verursacht Vibrationen auf Geräten, die dies unterstützen. Tut nichts, wenn Vibration nicht unterstützt wird.
- [`Navigator.unregisterProtocolHandler()`](/de/docs/Web/API/Navigator/unregisterProtocolHandler) {{SecureContext_Inline}}
  - : Hebt die Registrierung einer Website auf, die als Handler für ein gegebenes Protokoll fungiert.

### Veraltete Methoden

- [`Navigator.getUserMedia()`](/de/docs/Web/API/Navigator/getUserMedia) {{Deprecated_Inline}} {{SecureContext_Inline}}
  - : Gibt nach der Erteilung der Erlaubnis durch den Benutzer den Audio- oder Videostream zurück, der mit einer Kamera oder einem Mikrofon auf dem lokalen Computer verbunden ist.
- [`Navigator.getVRDisplays()`](/de/docs/Web/API/Navigator/getVRDisplays) {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Gibt ein Promise zurück, das zu einem Array von [`VRDisplay`](/de/docs/Web/API/VRDisplay)-Objekten aufgelöst wird, die verfügbare VR-Geräte darstellen, die mit dem Computer verbunden sind.
- [`Navigator.javaEnabled()`](/de/docs/Web/API/Navigator/javaEnabled)
  - : Gibt immer false zurück.
- [`Navigator.taintEnabled()`](/de/docs/Web/API/Navigator/taintEnabled)
  - : Gibt `false` zurück. JavaScript-Funktionen taint/untaint wurden in JavaScript 1.2 entfernt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
