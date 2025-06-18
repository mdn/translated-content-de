---
title: WorkerNavigator
slug: Web/API/WorkerNavigator
l10n:
  sourceCommit: 5f226b6f08c5cff7f96b7cc49a164fdc43d11a0c
---

{{APIRef("Web Workers API")}}{{AvailableInWorkers("worker")}}

Das **`WorkerNavigator`** Interface repräsentiert einen Teilbereich des [`Navigator`](/de/docs/Web/API/Navigator) Interfaces, der von einem [`Worker`](/de/docs/Web/API/Worker) aus zugänglich ist. Ein solches Objekt wird für jeden Worker initialisiert und ist über die [`self.navigator`](/de/docs/Web/API/WorkerGlobalScope/navigator) Eigenschaft verfügbar.

## Instanz-Eigenschaften

_Das `WorkerNavigator` Interface erbt keine Eigenschaften._

- [`WorkerNavigator.appCodeName`](/de/docs/Web/API/WorkerNavigator/appCodeName) {{Deprecated_Inline}} {{ReadOnlyInline}}
  - : Gibt immer `'Mozilla'` zurück, in jedem Browser. Diese Eigenschaft wird nur aus Kompatibilitätsgründen beibehalten.
- [`WorkerNavigator.appName`](/de/docs/Web/API/WorkerNavigator/appName) {{Deprecated_Inline}} {{ReadOnlyInline}}
  - : Gibt den offiziellen Namen des Browsers zurück. Verlassen Sie sich nicht darauf, dass diese Eigenschaft den korrekten Wert zurückgibt.
- [`WorkerNavigator.appVersion`](/de/docs/Web/API/WorkerNavigator/appVersion) {{Deprecated_Inline}} {{ReadOnlyInline}}
  - : Gibt die Version des Browsers als String zurück. Verlassen Sie sich nicht darauf, dass diese Eigenschaft den korrekten Wert zurückgibt.
- [`WorkerNavigator.connection`](/de/docs/Web/API/WorkerNavigator/connection) {{ReadOnlyInline}}
  - : Stellt ein [`NetworkInformation`](/de/docs/Web/API/NetworkInformation) Objekt bereit, das Informationen über die Netzwerkverbindung eines Geräts enthält.
- [`WorkerNavigator.deviceMemory`](/de/docs/Web/API/WorkerNavigator/deviceMemory) {{ReadOnlyInline}} {{SecureContext_Inline}}
  - : Gibt die Menge des Gerätespeichers in Gigabyte zurück. Dieser Wert ist eine Annäherung, die durch Runden auf die nächste Zweierpotenz und anschließendes Teilen dieser Zahl durch 1024 ermittelt wird.
- [`WorkerNavigator.globalPrivacyControl`](/de/docs/Web/API/WorkerNavigator/globalPrivacyControl) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt einen booleschen Wert zurück, der die Zustimmung eines Benutzers zur Weitergabe oder zum Verkauf seiner Informationen angibt.
- [`WorkerNavigator.gpu`](/de/docs/Web/API/WorkerNavigator/gpu) {{ReadOnlyInline}} {{SecureContext_Inline}}
  - : Gibt das [`GPU`](/de/docs/Web/API/GPU) Objekt für den aktuellen Worker-Kontext zurück. Der Einstiegspunkt für die [WebGPU API](/de/docs/Web/API/WebGPU_API).
- [`WorkerNavigator.hardwareConcurrency`](/de/docs/Web/API/WorkerNavigator/hardwareConcurrency) {{ReadOnlyInline}}
  - : Gibt die Anzahl der logischen Prozessorkerne zurück, die verfügbar sind.
- [`WorkerNavigator.hid`](/de/docs/Web/API/WorkerNavigator/hid) {{ReadOnlyInline}} {{Experimental_Inline}} {{SecureContext_Inline}}
  - : Gibt ein [`HID`](/de/docs/Web/API/HID) Objekt zurück, das Methoden zum Verbinden mit HID-Geräten, für die bereits eine Erlaubnis des Benutzers vorliegt, und zum Auflisten der angeschlossenen HID-Geräte sowie Ereignishandler zum Reagieren auf das An- und Abstecken von HID-Geräten bereitstellt.
- [`WorkerNavigator.language`](/de/docs/Web/API/WorkerNavigator/language) {{ReadOnlyInline}}
  - : Gibt einen String zurück, der die bevorzugte Sprache des Benutzers repräsentiert, normalerweise die Sprache der Benutzeroberfläche des Browsers. Der Wert `null` wird zurückgegeben, wenn unbekannt.
- [`WorkerNavigator.languages`](/de/docs/Web/API/WorkerNavigator/languages) {{ReadOnlyInline}}
  - : Gibt ein Array von Strings zurück, das die vom Benutzer gesprochenen Sprachen in der Reihenfolge der Präferenz darstellt.
- [`WorkerNavigator.locks`](/de/docs/Web/API/WorkerNavigator/locks) {{ReadOnlyInline}} {{SecureContext_Inline}}
  - : Gibt ein [`LockManager`](/de/docs/Web/API/LockManager) Objekt zurück, das Methoden zum Anfordern eines neuen [`Lock`](/de/docs/Web/API/Lock) Objekts und zum Abfragen nach einem bestehenden [`Lock`](/de/docs/Web/API/Lock) Objekt bietet.
- [`WorkerNavigator.mediaCapabilities`](/de/docs/Web/API/WorkerNavigator/mediaCapabilities) {{ReadOnlyInline}}
  - : Gibt ein [`MediaCapabilities`](/de/docs/Web/API/MediaCapabilities) Objekt zurück, das Informationen über die Dekodierungs- und Kodierungsmöglichkeiten für ein gegebenes Format und Ausgabeoptionen bereitstellen kann.
- [`WorkerNavigator.onLine`](/de/docs/Web/API/WorkerNavigator/onLine) {{ReadOnlyInline}}
  - : Gibt einen booleschen Wert zurück, der anzeigt, ob der Browser online ist.
- [`WorkerNavigator.permissions`](/de/docs/Web/API/WorkerNavigator/permissions) {{ReadOnlyInline}}
  - : Gibt ein [`Permissions`](/de/docs/Web/API/Permissions) Objekt zurück, das verwendet werden kann, um den Berechtigungsstatus von APIs, die von der [Permissions API](/de/docs/Web/API/Permissions_API) abgedeckt werden, abzufragen und zu aktualisieren.
- [`WorkerNavigator.platform`](/de/docs/Web/API/WorkerNavigator/platform) {{Deprecated_Inline}} {{ReadOnlyInline}}
  - : Gibt einen String zurück, der die Plattform des Browsers repräsentiert. Verlassen Sie sich nicht darauf, dass diese Eigenschaft den korrekten Wert zurückgibt.
- [`WorkerNavigator.product`](/de/docs/Web/API/WorkerNavigator/product) {{Deprecated_Inline}} {{ReadOnlyInline}}
  - : Gibt immer `'Gecko'` zurück, in jedem Browser. Diese Eigenschaft wird nur aus Kompatibilitätsgründen beibehalten.
- [`WorkerNavigator.serial`](/de/docs/Web/API/WorkerNavigator/serial) {{ReadOnlyInline}} {{Experimental_Inline}} {{SecureContext_Inline}}
  - : Gibt ein [`Serial`](/de/docs/Web/API/Serial) Objekt zurück, das den Einstieg in die [Web Serial API](/de/docs/Web/API/Web_Serial_API) darstellt, um die Steuerung von seriellen Anschlüssen zu ermöglichen.
- [`WorkerNavigator.serviceWorker`](/de/docs/Web/API/WorkerNavigator/serviceWorker) {{ReadOnlyInline}} {{SecureContext_Inline}}
  - : Gibt ein [`ServiceWorkerContainer`](/de/docs/Web/API/ServiceWorkerContainer) Objekt zurück, das den Zugriff auf Registrierung, Entfernung, Aktualisierung und Kommunikation mit [`ServiceWorker`](/de/docs/Web/API/ServiceWorker) Objekten für das [zugehörige Dokument](https://html.spec.whatwg.org/multipage/browsers.html#concept-document-window) bereitstellt.
- [`WorkerNavigator.storage`](/de/docs/Web/API/WorkerNavigator/storage) {{ReadOnlyInline}} {{SecureContext_Inline}}
  - : Gibt eine [`StorageManager`](/de/docs/Web/API/StorageManager) Schnittstelle zurück, die für das Verwalten von Persistenzberechtigungen und die Schätzung des verfügbaren Speichers verwendet wird.
- [`WorkerNavigator.usb`](/de/docs/Web/API/WorkerNavigator/usb) {{ReadOnlyInline}} {{SecureContext_Inline}}
  - : Gibt ein [`USB`](/de/docs/Web/API/USB) Objekt für das aktuelle Dokument zurück, das Zugriff auf die Funktionalität der [WebUSB API](/de/docs/Web/API/WebUSB_API) bietet.
- [`WorkerNavigator.userAgent`](/de/docs/Web/API/WorkerNavigator/userAgent) {{ReadOnlyInline}}
  - : Gibt den User-Agent-String für den aktuellen Browser zurück.
- [`WorkerNavigator.userAgentData`](/de/docs/Web/API/WorkerNavigator/userAgentData) {{ReadOnlyInline}} {{Experimental_Inline}} {{SecureContext_Inline}}
  - : Gibt ein [`NavigatorUAData`](/de/docs/Web/API/NavigatorUAData) Objekt zurück, das Zugriff auf Informationen über den Browser und das Betriebssystem des Benutzers bietet.

## Instanz-Methoden

_Das `WorkerNavigator` Interface erbt keine Methoden._

- [`WorkerNavigator.clearAppBadge()`](/de/docs/Web/API/WorkerNavigator/clearAppBadge) {{SecureContext_Inline}}
  - : Löscht ein Abzeichen auf dem Symbol der aktuellen App und gibt ein {{jsxref("Promise")}} zurück, das sich mit {{jsxref("undefined")}} auflöst.
- [`WorkerNavigator.setAppBadge()`](/de/docs/Web/API/WorkerNavigator/setAppBadge) {{SecureContext_Inline}}
  - : Setzt ein Abzeichen auf dem der App zugeordneten Symbol und gibt ein {{jsxref("Promise")}} zurück, das sich mit {{jsxref("undefined")}} auflöst.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Andere Worker-bezogene Schnittstellen: [`Worker`](/de/docs/Web/API/Worker), [`WorkerLocation`](/de/docs/Web/API/WorkerLocation) und [`WorkerGlobalScope`](/de/docs/Web/API/WorkerGlobalScope)
- [Verwendung von Web Workern](/de/docs/Web/API/Web_Workers_API/Using_web_workers)
