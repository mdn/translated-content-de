---
title: Navigator
slug: Web/API/Navigator
l10n:
  sourceCommit: a6c32a2d0add510c95ef74e85bd8e17551d508b6
---

{{APIRef("DOM")}}

Das **`Navigator`**-Interface repräsentiert den Zustand und die Identität des Benutzeragenten. Es ermöglicht Skripten, Abfragen durchzuführen und sich zu registrieren, um bestimmte Aktivitäten fortzusetzen.

Ein `Navigator`-Objekt kann über die schreibgeschützte [`window.navigator`](/de/docs/Web/API/Window/navigator) Eigenschaft abgerufen werden.

## Instanzeigenschaften

_Erbt keine Eigenschaften._

### Standard-Eigenschaften

- [`Navigator.bluetooth`](/de/docs/Web/API/Navigator/bluetooth) {{ReadOnlyInline}} {{Experimental_Inline}} {{SecureContext_Inline}}
  - : Gibt ein [`Bluetooth`](/de/docs/Web/API/Bluetooth)-Objekt für das aktuelle Dokument zurück und bietet Zugriff auf die Funktionalitäten der [Web Bluetooth API](/de/docs/Web/API/Web_Bluetooth_API).
- [`Navigator.clipboard`](/de/docs/Web/API/Navigator/clipboard) {{ReadOnlyInline}} {{securecontext_inline}}
  - : Gibt ein [`Clipboard`](/de/docs/Web/API/Clipboard)-Objekt zurück, das Lese- und Schreibzugriff auf die Systemzwischenablage ermöglicht.
- [`Navigator.connection`](/de/docs/Web/API/Navigator/connection) {{ReadOnlyInline}}
  - : Gibt ein [`NetworkInformation`](/de/docs/Web/API/NetworkInformation)-Objekt zurück, das Informationen über die Netzwerkverbindung eines Geräts enthält.
- [`Navigator.contacts`](/de/docs/Web/API/Navigator/contacts) {{ReadOnlyInline}} {{Experimental_Inline}} {{SecureContext_Inline}}
  - : Gibt eine [`ContactsManager`](/de/docs/Web/API/ContactsManager)-Schnittstelle zurück, die es Benutzern ermöglicht, Einträge aus ihrer Kontaktliste auszuwählen und eingeschränkte Details der ausgewählten Einträge mit einer Website oder Anwendung zu teilen.
- [`Navigator.cookieEnabled`](/de/docs/Web/API/Navigator/cookieEnabled) {{ReadOnlyInline}}
  - : Gibt false zurück, wenn das Setzen eines Cookies ignoriert wird, andernfalls true.
- [`Navigator.credentials`](/de/docs/Web/API/Navigator/credentials) {{ReadOnlyInline}} {{SecureContext_Inline}}
  - : Gibt die [`CredentialsContainer`](/de/docs/Web/API/CredentialsContainer)-Schnittstelle zurück, die Methoden zum Anfordern von Anmeldeinformationen bereitstellt und den Benutzeragenten bei interessanten Ereignissen wie erfolgreicher Anmeldung oder Abmeldung benachrichtigt.
- [`Navigator.deviceMemory`](/de/docs/Web/API/Navigator/deviceMemory) {{ReadOnlyInline}} {{SecureContext_Inline}}
  - : Gibt die Menge an Gerätespeicher in Gigabyte zurück. Dieser Wert ist eine Annäherung, die durch Runden auf die nächstgelegene Potenz von 2 gegeben wird, und diese Zahl durch 1024 geteilt wird.
- [`Navigator.devicePosture`](/de/docs/Web/API/Navigator/devicePosture) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt das [`DevicePosture`](/de/docs/Web/API/DevicePosture)-Objekt des Browsers zurück, das es Entwicklern ermöglicht, die aktuelle Haltung des Geräts abzufragen (d.h. ob der Ansichtsbereich in einem flachen oder gefalteten Zustand ist) und Code als Reaktion auf Haltungsänderungen auszuführen.
- [`Navigator.geolocation`](/de/docs/Web/API/Navigator/geolocation) {{ReadOnlyInline}}
  - : Gibt ein [`Geolocation`](/de/docs/Web/API/Geolocation)-Objekt zurück, das den Zugriff auf den Standort des Geräts ermöglicht.
- [`Navigator.gpu`](/de/docs/Web/API/Navigator/gpu) {{ReadOnlyInline}} {{Experimental_Inline}} {{SecureContext_Inline}}
  - : Gibt das [`GPU`](/de/docs/Web/API/GPU)-Objekt für den aktuellen Browsing-Kontext zurück. Der Einstiegspunkt für die [WebGPU API](/de/docs/Web/API/WebGPU_API).
- [`Navigator.hardwareConcurrency`](/de/docs/Web/API/Navigator/hardwareConcurrency) {{ReadOnlyInline}}
  - : Gibt die Anzahl der verfügbaren logischen Prozessorkerne zurück.
- [`Navigator.hid`](/de/docs/Web/API/Navigator/hid) {{ReadOnlyInline}} {{Experimental_Inline}} {{SecureContext_Inline}}
  - : Gibt ein [`HID`](/de/docs/Web/API/HID)-Objekt zurück, das Methoden zum Verbinden mit HID-Geräten, Auflisten angeschlossener HID-Geräte und Ereignisbehandler für verbundene HID-Geräte bereitstellt.
- [`Navigator.ink`](/de/docs/Web/API/Navigator/ink) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt ein [`Ink`](/de/docs/Web/API/Ink)-Objekt für das aktuelle Dokument zurück, das Zugriff auf die Funktionalität der [Ink API](/de/docs/Web/API/Ink_API) bietet.
- [`Navigator.keyboard`](/de/docs/Web/API/Navigator/keyboard) {{ReadOnlyInline}} {{Experimental_Inline}} {{SecureContext_Inline}}
  - : Gibt ein [`Keyboard`](/de/docs/Web/API/Keyboard)-Objekt zurück, das Zugriff auf Funktionen bietet, die Tastaturlayout-Karten abrufen und das Erfassen von Tastendrücken von der physischen Tastatur umschalten.
- [`Navigator.language`](/de/docs/Web/API/Navigator/language) {{ReadOnlyInline}}
  - : Gibt eine Zeichenfolge zurück, die die bevorzugte Sprache des Benutzers darstellt, normalerweise die Sprache der Benutzeroberfläche des Browsers. Der Wert `null` wird zurückgegeben, wenn dies unbekannt ist.
- [`Navigator.languages`](/de/docs/Web/API/Navigator/languages) {{ReadOnlyInline}}
  - : Gibt ein Array von Zeichenfolgen zurück, die die dem Benutzer bekannten Sprachen in der Reihenfolge ihrer Präferenz darstellen.
- [`Navigator.locks`](/de/docs/Web/API/Navigator/locks) {{ReadOnlyInline}} {{SecureContext_Inline}}
  - : Gibt ein [`LockManager`](/de/docs/Web/API/LockManager)-Objekt zurück, das Methoden zum Anfordern eines neuen [`Lock`](/de/docs/Web/API/Lock)-Objekts und zur Abfrage eines vorhandenen [`Lock`](/de/docs/Web/API/Lock)-Objekts bereitstellt.
- [`Navigator.login`](/de/docs/Web/API/Navigator/login) {{ReadOnlyInline}} {{SecureContext_Inline}}
  - : Bietet Zugriff auf das [`NavigatorLogin`](/de/docs/Web/API/NavigatorLogin)-Objekt des Browsers, das von einem föderierten Identitätsanbieter (IdP) genutzt werden kann, um den Anmeldestatus eines Benutzers festzulegen, wenn dieser sich bei oder abmeldet. Siehe [Federated Credential Management (FedCM) API](/de/docs/Web/API/FedCM_API) für mehr Details.
- [`Navigator.maxTouchPoints`](/de/docs/Web/API/Navigator/maxTouchPoints) {{ReadOnlyInline}}
  - : Gibt die maximale Anzahl paralleler Berührungspunkte zurück, die vom aktuellen Gerät unterstützt werden.
- [`Navigator.mediaCapabilities`](/de/docs/Web/API/Navigator/mediaCapabilities) {{ReadOnlyInline}}
  - : Gibt ein [`MediaCapabilities`](/de/docs/Web/API/MediaCapabilities)-Objekt zurück, das Informationen über die Dekodierungs- und Kodierungsfähigkeiten für ein gegebenes Format und die Ausgabeoptionen bereitstellen kann.
- [`Navigator.mediaDevices`](/de/docs/Web/API/Navigator/mediaDevices) {{ReadOnlyInline}} {{SecureContext_Inline}}
  - : Gibt eine Referenz zu einem [`MediaDevices`](/de/docs/Web/API/MediaDevices)-Objekt zurück, das verwendet werden kann, um Informationen über verfügbare Mediengeräte abzurufen ([`MediaDevices.enumerateDevices()`](/de/docs/Web/API/MediaDevices/enumerateDevices)), um herauszufinden, welche beschränkbaren Eigenschaften für Medien auf dem Computer und Benutzeragent des Benutzers unterstützt werden ([`MediaDevices.getSupportedConstraints()`](/de/docs/Web/API/MediaDevices/getSupportedConstraints)) und um Zugriff auf Medien zu beantragen mittels [`MediaDevices.getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia).
- [`Navigator.mediaSession`](/de/docs/Web/API/Navigator/mediaSession) {{ReadOnlyInline}}
  - : Gibt das [`MediaSession`](/de/docs/Web/API/MediaSession)-Objekt zurück, das verwendet werden kann, um Metadaten bereitzustellen, die vom Browser genutzt werden können, um Informationen über das aktuell abgespielte Medium anzuzeigen, z. B. in einer globalen Mediensteuerungsoberfläche.
- [`Navigator.onLine`](/de/docs/Web/API/Navigator/onLine) {{ReadOnlyInline}}
  - : Gibt einen booleschen Wert zurück, der anzeigt, ob der Browser online arbeitet.
- [`Navigator.pdfViewerEnabled`](/de/docs/Web/API/Navigator/pdfViewerEnabled) {{ReadOnlyInline}}
  - : Gibt `true` zurück, wenn der Browser PDF-Dateien inline anzeigen kann, wenn zu ihnen navigiert wird, und ansonsten `false`.
- [`Navigator.permissions`](/de/docs/Web/API/Navigator/permissions) {{ReadOnlyInline}}
  - : Gibt ein [`Permissions`](/de/docs/Web/API/Permissions)-Objekt zurück, das zum Abfragen und Aktualisieren des Berechtigungsstatus von APIs verwendet werden kann, die von der [Permissions API](/de/docs/Web/API/Permissions_API) abgedeckt werden.
- [`Navigator.presentation`](/de/docs/Web/API/Navigator/presentation) {{ReadOnlyInline}} {{SecureContext_Inline}}
  - : Gibt eine Referenz zur [`Presentation`](/de/docs/Web/API/Presentation) API zurück.
- [`Navigator.scheduling`](/de/docs/Web/API/Navigator/scheduling) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt ein [`Scheduling`](/de/docs/Web/API/Scheduling)-Objekt für das aktuelle Dokument zurück.
- [`Navigator.serial`](/de/docs/Web/API/Navigator/serial) {{ReadOnlyInline}} {{Experimental_Inline}} {{SecureContext_Inline}}
  - : Gibt ein [`Serial`](/de/docs/Web/API/Serial)-Objekt zurück, das den Einstiegspunkt in die [Web Serial API](/de/docs/Web/API/Web_Serial_API) darstellt, um die Steuerung von seriellen Ports zu ermöglichen.
- [`Navigator.serviceWorker`](/de/docs/Web/API/Navigator/serviceWorker) {{ReadOnlyInline}} {{SecureContext_Inline}}
  - : Gibt ein [`ServiceWorkerContainer`](/de/docs/Web/API/ServiceWorkerContainer)-Objekt zurück, das Zugriff auf die Registrierung, Entfernung, Aktualisierung und Kommunikation mit den [`ServiceWorker`](/de/docs/Web/API/ServiceWorker)-Objekten für das [zugehörige Dokument](https://html.spec.whatwg.org/multipage/browsers.html#concept-document-window) bietet.
- [`Navigator.storage`](/de/docs/Web/API/Navigator/storage) {{ReadOnlyInline}} {{SecureContext_Inline}}
  - : Gibt das Singleton [`StorageManager`](/de/docs/Web/API/StorageManager)-Objekt zurück, das zur Verwaltung von Persistenzberechtigungen und zur Abschätzung des verfügbaren Speichers auf einer site-/anwendungsbezogenen Basis verwendet wird.
- [`Navigator.usb`](/de/docs/Web/API/Navigator/usb) {{ReadOnlyInline}} {{SecureContext_Inline}}
  - : Gibt ein [`USB`](/de/docs/Web/API/USB)-Objekt für das aktuelle Dokument zurück und bietet Zugriff auf die Funktionalität der [WebUSB API](/de/docs/Web/API/WebUSB_API).
- [`Navigator.userActivation`](/de/docs/Web/API/Navigator/userActivation) {{ReadOnlyInline}}
  - : Gibt ein [`UserActivation`](/de/docs/Web/API/UserActivation)-Objekt zurück, das Informationen über den Aktivierungsstatus des aktuellen Fensters bereitstellt.
- [`Navigator.userAgent`](/de/docs/Web/API/Navigator/userAgent) {{ReadOnlyInline}}
  - : Gibt den User-Agent-String für den aktuellen Browser zurück.
- [`Navigator.userAgentData`](/de/docs/Web/API/Navigator/userAgentData) {{ReadOnlyInline}} {{Experimental_Inline}} {{SecureContext_Inline}}
  - : Gibt ein [`NavigatorUAData`](/de/docs/Web/API/NavigatorUAData)-Objekt zurück, das Zugriff auf Informationen über den Browser und das Betriebssystem des Benutzers bietet.
- [`Navigator.virtualKeyboard`](/de/docs/Web/API/Navigator/virtualKeyboard) {{ReadOnlyInline}} {{Experimental_Inline}} {{SecureContext_Inline}}
  - : Gibt eine Referenz zur [`VirtualKeyboard`](/de/docs/Web/API/VirtualKeyboard) API zurück, um die Steuerung der virtuellen Bildschirmtastatur zu übernehmen.
- [`Navigator.wakeLock`](/de/docs/Web/API/Navigator/wakeLock) {{ReadOnlyInline}} {{SecureContext_Inline}}
  - : Gibt eine [`WakeLock`](/de/docs/Web/API/WakeLock)-Schnittstelle zurück, die Sie verwenden können, um Bildschirm-Wake-Locks anzufordern und zu verhindern, dass der Bildschirm abgeblendet wird, sich ausschaltet oder einen Bildschirmschoner anzeigt.
- [`Navigator.webdriver`](/de/docs/Web/API/Navigator/webdriver) {{ReadOnlyInline}}
  - : Zeigt an, ob der Benutzeragent von einer Automatisierung kontrolliert wird.
- [`Navigator.windowControlsOverlay`](/de/docs/Web/API/Navigator/windowControlsOverlay) {{ReadOnlyInline}} {{SecureContext_Inline}}
  - : Gibt die [`WindowControlsOverlay`](/de/docs/Web/API/WindowControlsOverlay)-Schnittstelle zurück, die Informationen über die Geometrie der Titelleiste in Desktop Progressive Web Apps sowie ein Ereignis bereitstellt, um zu wissen, wann diese sich ändert.
- [`Navigator.xr`](/de/docs/Web/API/Navigator/xr) {{ReadOnlyInline}} {{Experimental_Inline}} {{SecureContext_Inline}}
  - : Gibt das [`XRSystem`](/de/docs/Web/API/XRSystem)-Objekt zurück, das den Einstiegspunkt in die [WebXR API](/de/docs/Web/API/WebXR_Device_API) darstellt.

### Nicht-standardisierte Eigenschaften

- [`Navigator.buildID`](/de/docs/Web/API/Navigator/buildID) {{ReadOnlyInline}} {{Non-standard_Inline}}
  - : Gibt die Build-ID des Browsers zurück. In modernen Browsern gibt diese Eigenschaft jetzt einen festen Zeitstempel als Datenschutzmaßnahme zurück, z. B. `20181001000000` ab Firefox 64.
- [`Navigator.globalPrivacyControl`](/de/docs/Web/API/Navigator/globalPrivacyControl) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt einen booleschen Wert zurück, der die Zustimmung eines Benutzers anzeigt, dass seine Informationen geteilt oder verkauft werden dürfen.
- [`Navigator.standalone`](/de/docs/Web/API/Navigator/standalone) {{Non-standard_Inline}}
  - : Gibt einen booleschen Wert zurück, der anzeigt, ob der Browser im Standalone-Modus läuft. Nur auf Apples iOS Safari verfügbar.

### Veraltete Eigenschaften

- [`Navigator.activeVRDisplays`](/de/docs/Web/API/Navigator/activeVRDisplays) {{ReadOnlyInline}} {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Gibt ein Array zurück, das jedes [`VRDisplay`](/de/docs/Web/API/VRDisplay)-Objekt enthält, das derzeit präsentiert wird ([`VRDisplay.isPresenting`](/de/docs/Web/API/VRDisplay/isPresenting) ist `true`).
- [`Navigator.appCodeName`](/de/docs/Web/API/Navigator/appCodeName) {{ReadOnlyInline}} {{Deprecated_Inline}}
  - : Gibt immer `'Mozilla'` zurück, in jedem Browser.
- [`Navigator.appName`](/de/docs/Web/API/Navigator/appName) {{ReadOnlyInline}} {{Deprecated_Inline}}
  - : Gibt immer `'Netscape'` zurück, in jedem Browser.
- [`Navigator.appVersion`](/de/docs/Web/API/Navigator/appVersion) {{ReadOnlyInline}} {{Deprecated_Inline}}
  - : Gibt die Version des Browsers als Zeichenfolge zurück. Verlassen Sie sich nicht darauf, dass diese Eigenschaft den korrekten Wert zurückgibt.
- [`Navigator.doNotTrack`](/de/docs/Web/API/Navigator/doNotTrack) {{ReadOnlyInline}} {{Deprecated_Inline}} {{non-standard_inline}}
  - : Berichtet den Wert der "Do Not Track"-Einstellung des Benutzers. Wenn dieser Wert "1" ist, sollte Ihre Website oder Anwendung den Benutzer nicht verfolgen.
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

## Instanzmethoden

_Erbt keine Methoden._

- [`Navigator.canShare()`](/de/docs/Web/API/Navigator/canShare) {{SecureContext_Inline}}
  - : Gibt `true` zurück, wenn ein Aufruf von `Navigator.share()` erfolgreich wäre.
- [`Navigator.clearAppBadge()`](/de/docs/Web/API/Navigator/clearAppBadge) {{SecureContext_Inline}}
  - : Löscht das Abzeichen auf dem Symbol der aktuellen App und gibt ein {{jsxref("Promise")}} zurück, das mit {{jsxref("undefined")}} aufgelöst wird.
- [`Navigator.deprecatedReplaceInURN()`](/de/docs/Web/API/Navigator/deprecatedReplaceInURN) {{Experimental_Inline}}
  - : Ersetzt bestimmte Zeichenfolgen innerhalb der zugehörigen URL, die einem gegebenen undurchsichtigen URN oder der internen `url`-Eigenschaft eines `FencedFrameConfig` zugeordnet ist. Diese Methode wurde als vorübergehende Maßnahme zur Verfügung gestellt (daher "deprecated"), um die Ersetzung für fenced frame URLs zu ermöglichen und Werbetechnologie-Anbietern zu helfen, vorhandene Implementierungen auf [Privacy Sandbox](https://privacysandbox.google.com/) APIs zu migrieren.
- [`Navigator.getAutoplayPolicy()`](/de/docs/Web/API/Navigator/getAutoplayPolicy) {{Experimental_Inline}}
  - : Gibt einen Wert zurück, der anzeigt, ob das angegebene Medien-Element, die Audio-Kontext oder das Medien-Feature "type" automatisch abgespielt werden darf.
- [`Navigator.getBattery()`](/de/docs/Web/API/Navigator/getBattery) {{SecureContext_Inline}}
  - : Gibt ein Versprechen zurück, das mit einem [`BatteryManager`](/de/docs/Web/API/BatteryManager)-Objekt aufgelöst wird, das Informationen über den Ladezustand der Batterie zurückgibt.
- [`Navigator.getGamepads()`](/de/docs/Web/API/Navigator/getGamepads)
  - : Gibt ein Array von [`Gamepad`](/de/docs/Web/API/Gamepad)-Objekten zurück, eines für jedes mit dem Gerät verbundene Gamepad.
- [`Navigator.getInstalledRelatedApps()`](/de/docs/Web/API/Navigator/getInstalledRelatedApps) {{Experimental_Inline}} {{SecureContext_Inline}}
  - : Gibt ein Versprechen zurück, das mit einem Array von Objekten aufgelöst wird, die verwandte native oder [Progressive Web Applications](/de/docs/Web/Progressive_web_apps) darstellen, die der Benutzer installiert hat.
- [`Navigator.registerProtocolHandler()`](/de/docs/Web/API/Navigator/registerProtocolHandler) {{SecureContext_Inline}}
  - : Erlaubt es Websites, sich selbst als möglichen Handler für ein gegebenes Protokoll zu registrieren.
- [`Navigator.requestMediaKeySystemAccess()`](/de/docs/Web/API/Navigator/requestMediaKeySystemAccess) {{SecureContext_Inline}}
  - : Gibt ein {{jsxref("Promise")}} für ein MediaKeySystemAccess-Objekt zurück.
- [`Navigator.requestMIDIAccess()`](/de/docs/Web/API/Navigator/requestMIDIAccess) {{SecureContext_Inline}}
  - : Gibt ein {{jsxref('Promise')}} zurück, das einen Zugriffsanforderung auf MIDI-Geräte des Systems des Benutzers darstellt.
- [`Navigator.sendBeacon()`](/de/docs/Web/API/Navigator/sendBeacon)
  - : Wird verwendet, um asynchron eine kleine Datenmenge mit {{Glossary("HTTP", "HTTP")}} vom Benutzeragenten an einen Webserver zu übertragen.
- [`Navigator.setAppBadge()`](/de/docs/Web/API/Navigator/setAppBadge) {{SecureContext_Inline}}
  - : Setzt ein Abzeichen auf dem mit dieser App verknüpften Symbol und gibt ein {{jsxref("Promise")}} zurück, das mit {{jsxref("undefined")}} aufgelöst wird.
- [`Navigator.share()`](/de/docs/Web/API/Navigator/share) {{SecureContext_Inline}}
  - : Ruft den nativen Freigabemechanismus der aktuellen Plattform auf.
- [`Navigator.vibrate()`](/de/docs/Web/API/Navigator/vibrate)
  - : Verursacht Vibration auf Geräten, die es unterstützen. Macht nichts, wenn kein Vibrationssupport verfügbar ist.
- [`Navigator.unregisterProtocolHandler()`](/de/docs/Web/API/Navigator/unregisterProtocolHandler) {{SecureContext_Inline}}
  - : Hebt die Registrierung einer Website auf, die ein Handler für ein gegebenes Protokoll ist.

### Veraltete Methoden

- [`Navigator.getUserMedia()`](/de/docs/Web/API/Navigator/getUserMedia) {{Deprecated_Inline}} {{SecureContext_Inline}}
  - : Nachdem dem Benutzer die Erlaubnis erteilt wurde, wird der Audio- oder Videostream zurückgegeben, der mit einer Kamera oder einem Mikrofon auf dem lokalen Computer verbunden ist.
- [`Navigator.getVRDisplays()`](/de/docs/Web/API/Navigator/getVRDisplays) {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Gibt ein Versprechen zurück, das zu einem Array von [`VRDisplay`](/de/docs/Web/API/VRDisplay)-Objekten aufgelöst wird, die verfügbare VR-Geräte darstellen, die mit dem Computer verbunden sind.
- [`Navigator.javaEnabled()`](/de/docs/Web/API/Navigator/javaEnabled) {{Deprecated_Inline}}
  - : Gibt immer false zurück.
- [`Navigator.taintEnabled()`](/de/docs/Web/API/Navigator/taintEnabled) {{Deprecated_Inline}}
  - : Gibt `false` zurück. JavaScript taint/untaint Funktionen wurden in JavaScript 1.2 entfernt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
