---
title: Navigator
slug: Web/API/Navigator
l10n:
  sourceCommit: f2088b8912ef205a737551441d54b73507bd3ac6
---

{{APIRef("DOM")}}

Das **`Navigator`**-Interface repräsentiert den Zustand und die Identität des User Agents. Es ermöglicht Skripten, Abfragen durchzuführen und sich für bestimmte Aktivitäten zu registrieren.

Ein `Navigator`-Objekt kann über die schreibgeschützte {{domxref("window.navigator")}}-Eigenschaft abgerufen werden.

## Instanzeigenschaften

_Erbt keine Eigenschaften._

### Standard-Eigenschaften

- {{domxref("Navigator.bluetooth")}} {{ReadOnlyInline}} {{Experimental_Inline}} {{SecureContext_Inline}}
  - : Gibt ein {{domxref("Bluetooth")}}-Objekt für das aktuelle Dokument zurück, das Zugriff auf die [Web Bluetooth API](/de/docs/Web/API/Web_Bluetooth_API) Funktionalität bietet.
- {{domxref("Navigator.clipboard")}} {{ReadOnlyInline}} {{securecontext_inline}}
  - : Gibt ein {{domxref("Clipboard")}}-Objekt zurück, das Lese- und Schreibzugriff auf die Systemzwischenablage bietet.
- {{domxref("Navigator.connection")}} {{ReadOnlyInline}}
  - : Gibt ein {{domxref("NetworkInformation")}}-Objekt zurück, das Informationen über die Netzwerkverbindung eines Geräts enthält.
- {{domxref("Navigator.contacts")}} {{ReadOnlyInline}} {{Experimental_Inline}} {{SecureContext_Inline}}
  - : Gibt eine {{domxref('ContactsManager')}} Schnittstelle zurück, die es Benutzern ermöglicht, Einträge aus ihrer Kontaktliste auszuwählen und begrenzte Details der ausgewählten Einträge mit einer Website oder Anwendung zu teilen.
- {{domxref("Navigator.cookieEnabled")}} {{ReadOnlyInline}}
  - : Gibt false zurück, wenn das Setzen eines Cookies ignoriert wird, andernfalls true.
- {{domxref("Navigator.credentials")}} {{ReadOnlyInline}} {{SecureContext_Inline}}
  - : Gibt die {{domxref("CredentialsContainer")}} Schnittstelle zurück, die Methoden bietet, um Anmeldedaten anzufordern und den User Agent über interessante Ereignisse wie erfolgreiche An- und Abmeldungen zu informieren.
- {{domxref("Navigator.deviceMemory")}} {{ReadOnlyInline}} {{SecureContext_Inline}}
  - : Gibt die Menge des Gerätespeichers in Gigabyte zurück. Dieser Wert ist eine Annäherung, die durch Rundung auf die nächste Zweierpotenz und anschließendes Teilen der Zahl durch 1024 erhalten wird.
- {{domxref("Navigator.geolocation")}} {{ReadOnlyInline}}
  - : Gibt ein {{domxref("Geolocation")}}-Objekt zurück, das den Zugriff auf den Standort des Geräts ermöglicht.
- {{domxref("Navigator.gpu")}} {{ReadOnlyInline}} {{Experimental_Inline}} {{SecureContext_Inline}}
  - : Gibt das {{domxref("GPU")}}-Objekt für den aktuellen Browsing-Kontext zurück. Der Einstiegspunkt für die {{domxref("WebGPU_API", "WebGPU API", "", "nocode")}}.
- {{domxref("Navigator.hardwareConcurrency")}} {{ReadOnlyInline}}
  - : Gibt die Anzahl der verfügbaren logischen Prozessorkerne zurück.
- {{domxref("Navigator.hid")}} {{ReadOnlyInline}} {{Experimental_Inline}} {{SecureContext_Inline}}
  - : Gibt ein {{domxref("HID")}}-Objekt zurück, das Methoden zur Verbindung mit HID-Geräten, zur Auflistung angeschlossener HID-Geräte und Ereignishandler für verbundene HID-Geräte bereitstellt.
- {{domxref("Navigator.ink")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt ein {{domxref("Ink")}}-Objekt für das aktuelle Dokument zurück, das Zugriff auf die [Ink API](/de/docs/Web/API/Ink_API) Funktionalität bietet.
- {{domxref('Navigator.keyboard')}} {{ReadOnlyInline}} {{Experimental_Inline}} {{SecureContext_Inline}}
  - : Gibt ein {{domxref('Keyboard')}}-Objekt zurück, das Zugriff auf Funktionen bietet, um Tastaturlayout-Karten abzurufen und das Erfassen von Tastenanschlägen der physischen Tastatur zu steuern.
- {{domxref("Navigator.language")}} {{ReadOnlyInline}}
  - : Gibt einen String zurück, der die bevorzugte Sprache des Benutzers darstellt, normalerweise die Sprache der Browser-Benutzeroberfläche. Der Wert `null` wird zurückgegeben, wenn dies unbekannt ist.
- {{domxref("Navigator.languages")}} {{ReadOnlyInline}}
  - : Gibt ein Array von Strings zurück, die die dem Benutzer bekannten Sprachen in der Reihenfolge der Präferenz darstellen.
- {{domxref("Navigator.locks")}} {{ReadOnlyInline}} {{SecureContext_Inline}}
  - : Gibt ein {{domxref("LockManager")}}-Objekt zurück, das Methoden zum Anfordern eines neuen {{domxref('Lock')}}-Objekts und zum Abfragen eines bestehenden {{domxref('Lock')}}-Objekts bietet.
- {{domxref("Navigator.login")}} {{ReadOnlyInline}} {{Experimental_Inline}} {{SecureContext_Inline}}
  - : Bietet Zugang zum {{domxref("NavigatorLogin")}}-Objekt des Browsers, das ein föderierter Identitätsanbieter (IdP) verwenden kann, um den Anmeldestatus eines Benutzers festzulegen, wenn dieser sich beim IdP an- oder abmeldet. Siehe [Federated Credential Management (FedCM) API](/de/docs/Web/API/FedCM_API) für weitere Details.
- {{domxref("Navigator.maxTouchPoints")}} {{ReadOnlyInline}}
  - : Gibt die maximale Anzahl gleichzeitiger Berührungspunkte zurück, die vom aktuellen Gerät unterstützt werden.
- {{domxref("Navigator.mediaCapabilities")}} {{ReadOnlyInline}}
  - : Gibt ein {{domxref("MediaCapabilities")}}-Objekt zurück, das Informationen über die Dekodierungs- und Kodierungsfähigkeit für ein gegebenes Format und Ausgabemöglichkeiten bereitstellen kann.
- {{domxref("Navigator.mediaDevices")}} {{ReadOnlyInline}} {{SecureContext_Inline}}
  - : Gibt eine Referenz zu einem {{domxref("MediaDevices")}}-Objekt zurück, das verwendet werden kann, um Informationen über verfügbare Mediengeräte zu erhalten ({{domxref("MediaDevices.enumerateDevices()")}}), um herauszufinden, welche anpassbaren Eigenschaften für Medien auf dem Computer und User-Agent des Benutzers unterstützt werden ({{domxref("MediaDevices.getSupportedConstraints()")}}), und um Zugriff auf Medien mit {{domxref("MediaDevices.getUserMedia()")}} anzufordern.
- {{domxref("Navigator.mediaSession")}} {{ReadOnlyInline}}
  - : Gibt ein {{domxref("MediaSession")}}-Objekt zurück, das verwendet werden kann, um Metadaten bereitzustellen, die vom Browser genutzt werden können, um dem Benutzer Informationen über die aktuell abgespielten Medien zu präsentieren, z.B. in einer globalen Mediensteuerungs-UI.
- {{domxref("Navigator.onLine")}} {{ReadOnlyInline}}
  - : Gibt einen booleschen Wert zurück, der anzeigt, ob der Browser online arbeitet.
- {{domxref("Navigator.pdfViewerEnabled")}} {{ReadOnlyInline}}
  - : Gibt `true` zurück, wenn der Browser PDF-Dateien beim Navigieren inline anzeigen kann, andernfalls `false`.
- {{domxref("Navigator.permissions")}} {{ReadOnlyInline}}
  - : Gibt ein {{domxref("Permissions")}}-Objekt zurück, das verwendet werden kann, um den Berechtigungsstatus der von der [Permissions API](/de/docs/Web/API/Permissions_API) abgedeckten APIs abzufragen und zu aktualisieren.
- {{domxref("Navigator.presentation")}} {{ReadOnlyInline}} {{SecureContext_Inline}}
  - : Gibt eine Referenz zur {{domxref("Presentation")}} API zurück.
- {{domxref("Navigator.scheduling")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt ein {{domxref("Scheduling")}}-Objekt für das aktuelle Dokument zurück.
- {{domxref("Navigator.serial")}} {{ReadOnlyInline}} {{Experimental_Inline}} {{SecureContext_Inline}}
  - : Gibt ein {{domxref("Serial")}}-Objekt zurück, das den Einstiegspunkt in die [Web Serial API](/de/docs/Web/API/Web_Serial_API) darstellt, um die Steuerung von seriellen Ports zu ermöglichen.
- {{domxref("Navigator.serviceWorker")}} {{ReadOnlyInline}} {{SecureContext_Inline}}
  - : Gibt ein {{domxref("ServiceWorkerContainer")}}-Objekt zurück, das Zugriff auf Registrierung, Entfernung, Upgrade und Kommunikation mit {{domxref("ServiceWorker")}}-Objekten für das [zugehörige Dokument](https://html.spec.whatwg.org/multipage/browsers.html#concept-document-window) bietet.
- {{domxref("Navigator.storage")}} {{ReadOnlyInline}} {{SecureContext_Inline}}
  - : Gibt das Singleton-{{domxref('StorageManager')}}-Objekt zurück, das zur Verwaltung von Persistenzberechtigungen und zur Einschätzung des verfügbaren Speichers auf Basis von Website- und Anwendungsanforderungen verwendet wird.
- {{domxref("Navigator.usb")}} {{ReadOnlyInline}} {{SecureContext_Inline}}
  - : Gibt ein {{domxref("USB")}}-Objekt für das aktuelle Dokument zurück, das Zugriff auf die [WebUSB API](/de/docs/Web/API/WebUSB_API) Funktionalität bietet.
- {{domxref("Navigator.userActivation")}} {{ReadOnlyInline}}
  - : Gibt ein {{domxref("UserActivation")}}-Objekt zurück, das Informationen über den aktuellen Benutzeraktivierungsstatus des Fensters enthält.
- {{domxref("Navigator.userAgent")}} {{ReadOnlyInline}}
  - : Gibt den User-Agent-String für den aktuellen Browser zurück.
- {{domxref("Navigator.userAgentData")}} {{ReadOnlyInline}} {{Experimental_Inline}} {{SecureContext_Inline}}
  - : Gibt ein {{domxref("NavigatorUAData")}}-Objekt zurück, das Zugriff auf Informationen über den Browser und das Betriebssystem des Benutzers bietet.
- {{domxref("Navigator.virtualKeyboard")}} {{ReadOnlyInline}} {{Experimental_Inline}} {{SecureContext_Inline}}
  - : Gibt eine Referenz zur {{domxref("VirtualKeyboard")}} API zurück, um die Kontrolle über die virtuelle Bildschirmtastatur zu übernehmen.
- {{domxref("Navigator.wakeLock")}} {{ReadOnlyInline}} {{SecureContext_Inline}}
  - : Gibt eine {{domxref("WakeLock")}}-Schnittstelle zurück, die verwendet werden kann, um Bildschirmverriegelungen anzufordern und zu verhindern, dass der Bildschirm abgedunkelt, ausgeschaltet oder ein Bildschirmschoner angezeigt wird.
- {{domxref("Navigator.webdriver")}} {{ReadOnlyInline}}
  - : Gibt an, ob der User Agent von der Automatisierung gesteuert wird.
- {{domxref("Navigator.windowControlsOverlay")}} {{ReadOnlyInline}} {{SecureContext_Inline}}
  - : Gibt die {{domxref("WindowControlsOverlay")}}-Schnittstelle zurück, die Informationen über die Geometrie der Titelzeile in Desktop-Progressive-Web-Apps bereitstellt und ein Ereignis, um zu wissen, wann immer sie sich ändert.
- {{domxref("Navigator.xr")}} {{ReadOnlyInline}} {{Experimental_Inline}} {{SecureContext_Inline}}
  - : Gibt das {{domxref("XRSystem")}}-Objekt zurück, das den Einstiegspunkt in die [WebXR API](/de/docs/Web/API/WebXR_Device_API) darstellt.

### Nicht-standard-Eigenschaften

- {{domxref("Navigator.buildID")}} {{ReadOnlyInline}} {{Non-standard_Inline}}
  - : Gibt die Build-Kennung des Browsers zurück. In modernen Browsern gibt diese Eigenschaft jetzt einen festen Zeitstempel als Datenschutzmaßnahme zurück, z. B. `20181001000000` in Firefox 64 und mehr.
- {{domxref("Navigator.globalPrivacyControl")}} {{ReadOnlyInline}} {{Experimental_Inline}} {{non-standard_inline}}
  - : Gibt einen booleschen Wert zurück, der die Zustimmung eines Benutzers zur Weitergabe oder zum Verkauf seiner Informationen anzeigt.
- {{domxref("Navigator.standalone")}} {{Non-standard_Inline}}
  - : Gibt einen booleschen Wert zurück, der anzeigt, ob der Browser im Standalone-Modus ausgeführt wird. Nur auf Apples iOS Safari verfügbar.

### Veraltete Eigenschaften

- {{domxref("Navigator.activeVRDisplays")}} {{ReadOnlyInline}} {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Gibt ein Array zurück, das jedes {{domxref("VRDisplay")}}-Objekt enthält, das derzeit präsentiert ({{domxref("VRDisplay.ispresenting")}} ist `true`).
- {{domxref("Navigator.appCodeName")}} {{ReadOnlyInline}} {{Deprecated_Inline}}
  - : Gibt immer `'Mozilla'` zurück, in jedem Browser.
- {{domxref("Navigator.appName")}} {{ReadOnlyInline}} {{Deprecated_Inline}}
  - : Gibt immer `'Netscape'` zurück, in jedem Browser.
- {{domxref("Navigator.appVersion")}} {{ReadOnlyInline}} {{Deprecated_Inline}}
  - : Gibt die Version des Browsers als String zurück. Verlassen Sie sich nicht darauf, dass diese Eigenschaft den korrekten Wert zurückgibt.
- {{domxref("Navigator.doNotTrack")}} {{ReadOnlyInline}} {{Deprecated_Inline}} {{non-standard_inline}}
  - : Meldet den Wert der Do-Not-Track-Einstellung des Benutzers. Wenn dieser Wert "1" ist, sollte Ihre Website oder Anwendung den Benutzer nicht verfolgen.
- {{domxref("Navigator.mimeTypes")}} {{ReadOnlyInline}} {{Deprecated_Inline}}
  - : Gibt ein {{domxref("MimeTypeArray")}} zurück, das die vom Browser unterstützten MIME-Typen aufzählt.
- {{domxref("Navigator.oscpu")}} {{ReadOnlyInline}} {{Deprecated_Inline}}
  - : Gibt einen String zurück, der das aktuelle Betriebssystem darstellt.
- {{domxref("Navigator.platform")}} {{ReadOnlyInline}} {{Deprecated_Inline}}
  - : Gibt einen String zurück, der die Plattform des Browsers darstellt. Verlassen Sie sich nicht darauf, dass diese Funktion einen signifikanten Wert zurückgibt.
- {{domxref("Navigator.plugins")}} {{ReadOnlyInline}} {{Deprecated_Inline}}
  - : Gibt ein {{domxref("PluginArray")}} zurück, das die im Browser installierten Plugins aufzählt.
- {{domxref("Navigator.product")}} {{ReadOnlyInline}} {{Deprecated_Inline}}
  - : Gibt immer `'Gecko'` zurück, in jedem Browser.
- {{domxref("Navigator.productSub")}} {{ReadOnlyInline}} {{Deprecated_Inline}}
  - : Gibt entweder die Zeichenfolge `'20030107'` oder `"20100101"` zurück.
- {{domxref("Navigator.vendor")}} {{ReadOnlyInline}} {{Deprecated_Inline}}
  - : Gibt entweder die leere Zeichenfolge, `'Apple Computer Inc.'` oder `'Google Inc.'` zurück.
- {{domxref("Navigator.vendorSub")}} {{ReadOnlyInline}} {{Deprecated_Inline}}
  - : Gibt immer die leere Zeichenfolge zurück.

## Instanzmethoden

_Erbt keine Methoden._

- {{domxref("Navigator.canShare()")}} {{SecureContext_Inline}}
  - : Gibt `true` zurück, wenn ein Aufruf von `Navigator.share()` erfolgreich wäre.
- {{domxref("Navigator.clearAppBadge()")}} {{SecureContext_Inline}}
  - : Löscht ein Abzeichen auf dem Symbol der aktuellen App und gibt ein {{jsxref("Promise")}} zurück, das mit {{jsxref("undefined")}} aufgelöst wird.
- {{domxref("Navigator.deprecatedReplaceInURN()")}} {{Experimental_Inline}}
  - : Ersetzt bestimmte Zeichenfolgen innerhalb der zugeordneten URL, die einem gegebenen undurchsichtigen URN oder der internen `url`-Eigenschaft von `FencedFrameConfig` entspricht. Diese Methode wurde als vorübergehende Maßnahme (daher "veraltet") eingeführt, um diesen Ersatz für fenced frame URLs zu ermöglichen, damit Ad-Tech-Anbieter bestehende Implementierungen auf [Privacy Sandbox](https://developers.google.com/privacy-sandbox) APIs migrieren können.
- {{domxref("Navigator.getAutoplayPolicy()")}} {{Experimental_Inline}}
  - : Gibt einen Wert zurück, der angibt, ob das angegebene Media-Element, der Audio-Kontext oder die Medienfunktion "Typ" automatisch wiedergegeben werden darf.
- {{domxref("Navigator.getBattery()")}} {{SecureContext_Inline}}
  - : Gibt ein Promise zurück, das mit einem {{domxref("BatteryManager")}} Objekt aufgelöst wird, das Informationen über den Akkuladezustand liefert.
- {{domxref("Navigator.getGamepads()")}}
  - : Gibt ein Array von {{domxref("Gamepad")}}-Objekten zurück, eines für jedes mit dem Gerät verbundene Gamepad.
- {{domxref("Navigator.getInstalledRelatedApps()")}} {{Experimental_Inline}} {{SecureContext_Inline}}
  - : Gibt ein Promise zurück, das mit einem Array von Objekten aufgelöst wird, die verwandte native oder [Progressive Web Applications](/de/docs/Web/Progressive_web_apps) darstellen, die der Nutzer installiert hat.
- {{domxref("Navigator.registerProtocolHandler()")}} {{SecureContext_Inline}}
  - : Ermöglicht Websites, sich selbst als möglichen Handler für ein gegebenes Protokoll zu registrieren.
- {{domxref("Navigator.requestMediaKeySystemAccess()")}} {{SecureContext_Inline}}
  - : Gibt ein {{jsxref("Promise")}} für ein MediaKeySystemAccess-Objekt zurück.
- {{domxref("Navigator.requestMIDIAccess()")}} {{SecureContext_Inline}}
  - : Gibt ein {{jsxref('Promise')}} zurück, das eine Anfrage für den Zugriff auf MIDI-Geräte im System des Benutzers darstellt.
- {{domxref("Navigator.sendBeacon()")}}
  - : Wird verwendet, um eine kleine Datenmenge asynchron mit {{Glossary("HTTP")}} vom User Agent an einen Webserver zu übertragen.
- {{domxref("Navigator.setAppBadge()")}} {{SecureContext_Inline}}
  - : Setzt ein Abzeichen auf dem mit dieser App verknüpften Symbol und gibt ein {{jsxref("Promise")}} zurück, das mit {{jsxref("undefined")}} aufgelöst wird.
- {{domxref("Navigator.share()")}} {{SecureContext_Inline}}
  - : Ruft den nativen Freigabemechanismus der aktuellen Plattform auf.
- {{domxref("Navigator.vibrate()")}}
  - : Verursacht Vibrationen auf Geräten, die dies unterstützen. Hat keine Wirkung, wenn die Vibrationsunterstützung nicht verfügbar ist.
- {{domxref("Navigator.unregisterProtocolHandler()")}} {{SecureContext_Inline}}
  - : Hebt die Registrierung einer Website als Handler für ein gegebenes Protokoll auf.

### Veraltete Methoden

- {{domxref("Navigator.getUserMedia()")}} {{Deprecated_Inline}} {{SecureContext_Inline}}
  - : Gibt nach Aufforderung des Benutzers das Audio- oder Videostream zurück, das mit einer Kamera oder einem Mikrofon auf dem lokalen Computer verbunden ist.
- {{domxref("Navigator.getVRDisplays()")}} {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Gibt ein Promise zurück, das auf ein Array von {{domxref("VRDisplay")}}-Objekten aufgelöst wird, die verfügbare VR-Geräte darstellen, die mit dem Computer verbunden sind.
- {{domxref("Navigator.javaEnabled()")}} {{Deprecated_Inline}}
  - : Gibt immer false zurück.
- {{domxref("Navigator.taintEnabled()")}} {{Deprecated_Inline}}
  - : Gibt `false` zurück. JavaScript taint/untaint Funktionen wurden in JavaScript 1.2 entfernt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
