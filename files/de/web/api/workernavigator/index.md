---
title: WorkerNavigator
slug: Web/API/WorkerNavigator
l10n:
  sourceCommit: d4ea77f1c9e15e472e484d9561319597c5cce716
---

{{APIRef("Web Workers API")}}{{AvailableInWorkers("worker")}}

Das **`WorkerNavigator`**-Interface repräsentiert eine Teilmenge des [`Navigator`](/de/docs/Web/API/Navigator)-Interfaces, die von einem [`Worker`](/de/docs/Web/API/Worker) aus zugänglich ist. Ein solches Objekt wird für jeden Worker initialisiert und ist über die [`self.navigator`](/de/docs/Web/API/WorkerGlobalScope/navigator)-Eigenschaft verfügbar.

## Instanzeigenschaften

_Das `WorkerNavigator`-Interface erbt keine Eigenschaften._

- [`WorkerNavigator.appCodeName`](/de/docs/Web/API/WorkerNavigator/appCodeName) {{Deprecated_Inline}} {{ReadOnlyInline}}
  - : Gibt immer `'Mozilla'` zurück, in jedem Browser. Diese Eigenschaft wird nur aus Kompatibilitätsgründen beibehalten.
- [`WorkerNavigator.appName`](/de/docs/Web/API/WorkerNavigator/appName) {{Deprecated_Inline}} {{ReadOnlyInline}}
  - : Gibt den offiziellen Namen des Browsers zurück. Verlassen Sie sich nicht darauf, dass diese Eigenschaft den korrekten Wert zurückgibt.
- [`WorkerNavigator.appVersion`](/de/docs/Web/API/WorkerNavigator/appVersion) {{Deprecated_Inline}} {{ReadOnlyInline}}
  - : Gibt die Version des Browsers als Zeichenkette zurück. Verlassen Sie sich nicht darauf, dass diese Eigenschaft den korrekten Wert zurückgibt.
- [`WorkerNavigator.connection`](/de/docs/Web/API/WorkerNavigator/connection) {{ReadOnlyInline}}
  - : Stellt ein [`NetworkInformation`](/de/docs/Web/API/NetworkInformation)-Objekt bereit, das Informationen über die Netzwerkverbindung eines Geräts enthält.
- [`WorkerNavigator.deviceMemory`](/de/docs/Web/API/WorkerNavigator/deviceMemory) {{ReadOnlyInline}} {{SecureContext_Inline}}
  - : Gibt die Menge des Gerätespeichers in Gigabyte zurück. Dieser Wert ist eine Annäherung, die durch Rundung zur nächsten Zweierpotenz und Division dieser Zahl durch 1024 erzielt wird.
- [`WorkerNavigator.globalPrivacyControl`](/de/docs/Web/API/WorkerNavigator/globalPrivacyControl) {{ReadOnlyInline}} {{Experimental_Inline}} {{non-standard_inline}}
  - : Gibt ein boolesches Wert zurück, der die Zustimmung eines Nutzers zur Weitergabe oder zum Verkauf seiner Informationen anzeigt.
- [`WorkerNavigator.gpu`](/de/docs/Web/API/WorkerNavigator/gpu) {{ReadOnlyInline}} {{Experimental_Inline}} {{SecureContext_Inline}}
  - : Gibt das [`GPU`](/de/docs/Web/API/GPU)-Objekt für den aktuellen Worker-Kontext zurück. Der Einstiegspunkt für die [WebGPU API](/de/docs/Web/API/WebGPU_API).
- [`WorkerNavigator.hardwareConcurrency`](/de/docs/Web/API/WorkerNavigator/hardwareConcurrency) {{ReadOnlyInline}}
  - : Gibt die Anzahl der verfügbaren logischen Prozessorkerne zurück.
- [`WorkerNavigator.hid`](/de/docs/Web/API/WorkerNavigator/hid) {{ReadOnlyInline}} {{Experimental_Inline}} {{SecureContext_Inline}}
  - : Gibt ein [`HID`](/de/docs/Web/API/HID)-Objekt zurück, das Methoden zum Verbinden mit HID-Geräten bietet, für die der Benutzer bereits Berechtigungen erteilt hat, sowie zum Auflisten angeschlossener HID-Geräte und Ereignishandler zum Reagieren auf das Verbinden und Trennen von HID-Geräten.
- [`WorkerNavigator.language`](/de/docs/Web/API/WorkerNavigator/language) {{ReadOnlyInline}}
  - : Gibt eine Zeichenkette zurück, die die bevorzugte Sprache des Benutzers darstellt, in der Regel die Sprache der Browser-Benutzeroberfläche. Der Wert `null` wird zurückgegeben, wenn dies unbekannt ist.
- [`WorkerNavigator.languages`](/de/docs/Web/API/WorkerNavigator/languages) {{ReadOnlyInline}}
  - : Gibt ein Array von Zeichenketten zurück, das die dem Benutzer bekannten Sprachen in der Reihenfolge der Präferenz darstellt.
- [`WorkerNavigator.locks`](/de/docs/Web/API/WorkerNavigator/locks) {{ReadOnlyInline}} {{SecureContext_Inline}}
  - : Gibt ein [`LockManager`](/de/docs/Web/API/LockManager)-Objekt zurück, das Methoden bereitstellt, um ein neues [`Lock`](/de/docs/Web/API/Lock)-Objekt anzufordern und ein vorhandenes [`Lock`](/de/docs/Web/API/Lock)-Objekt abzufragen.
- [`WorkerNavigator.mediaCapabilities`](/de/docs/Web/API/WorkerNavigator/mediaCapabilities) {{ReadOnlyInline}}
  - : Gibt ein [`MediaCapabilities`](/de/docs/Web/API/MediaCapabilities)-Objekt zurück, das Informationen über die Dekodierungs- und Kodierungsfähigkeiten für ein bestimmtes Format und Ausgabefähigkeiten aufzeigen kann.
- [`WorkerNavigator.onLine`](/de/docs/Web/API/WorkerNavigator/onLine) {{ReadOnlyInline}}
  - : Gibt einen booleschen Wert zurück, der anzeigt, ob der Browser online ist.
- [`WorkerNavigator.permissions`](/de/docs/Web/API/WorkerNavigator/permissions) {{ReadOnlyInline}}
  - : Gibt ein [`Permissions`](/de/docs/Web/API/Permissions)-Objekt zurück, das verwendet werden kann, um die Berechtigungsstatus der von der [Permissions API](/de/docs/Web/API/Permissions_API) abgedeckten APIs abzufragen und zu aktualisieren.
- [`WorkerNavigator.platform`](/de/docs/Web/API/WorkerNavigator/platform) {{Deprecated_Inline}} {{ReadOnlyInline}}
  - : Gibt eine Zeichenkette zurück, die die Plattform des Browsers darstellt. Verlassen Sie sich nicht darauf, dass diese Eigenschaft den korrekten Wert zurückgibt.
- [`WorkerNavigator.product`](/de/docs/Web/API/WorkerNavigator/product) {{Deprecated_Inline}} {{ReadOnlyInline}}
  - : Gibt immer `'Gecko'` zurück, in jedem Browser. Diese Eigenschaft wird nur aus Kompatibilitätsgründen beibehalten.
- [`WorkerNavigator.serial`](/de/docs/Web/API/WorkerNavigator/serial) {{ReadOnlyInline}} {{Experimental_Inline}} {{SecureContext_Inline}}
  - : Gibt ein [`Serial`](/de/docs/Web/API/Serial)-Objekt zurück, das den Einstiegspunkt in die [Web Serial API](/de/docs/Web/API/Web_Serial_API) repräsentiert, um die Steuerung von seriellen Ports zu ermöglichen.
- [`WorkerNavigator.serviceWorker`](/de/docs/Web/API/WorkerNavigator/serviceWorker) {{ReadOnlyInline}} {{SecureContext_Inline}}
  - : Gibt ein [`ServiceWorkerContainer`](/de/docs/Web/API/ServiceWorkerContainer)-Objekt zurück, das Zugriff auf Registrierung, Entfernung, Aktualisierung und Kommunikation mit den [`ServiceWorker`](/de/docs/Web/API/ServiceWorker)-Objekten für das [zugehörige Dokument](https://html.spec.whatwg.org/multipage/browsers.html#concept-document-window) bietet.
- [`WorkerNavigator.storage`](/de/docs/Web/API/WorkerNavigator/storage) {{ReadOnlyInline}} {{SecureContext_Inline}}
  - : Gibt eine [`StorageManager`](/de/docs/Web/API/StorageManager)-Schnittstelle für das Verwalten von Persistenzberechtigungen und zum Schätzen des verfügbaren Speichers zurück.
- [`WorkerNavigator.usb`](/de/docs/Web/API/WorkerNavigator/usb) {{ReadOnlyInline}} {{SecureContext_Inline}}
  - : Gibt ein [`USB`](/de/docs/Web/API/USB)-Objekt für das aktuelle Dokument zurück und bietet Zugriff auf die [WebUSB API](/de/docs/Web/API/WebUSB_API)-Funktionalität.
- [`WorkerNavigator.userAgent`](/de/docs/Web/API/WorkerNavigator/userAgent) {{ReadOnlyInline}}
  - : Gibt die User-Agent-Zeichenkette für den aktuellen Browser zurück.
- [`WorkerNavigator.userAgentData`](/de/docs/Web/API/WorkerNavigator/userAgentData) {{ReadOnlyInline}} {{Experimental_Inline}} {{SecureContext_Inline}}
  - : Gibt ein [`NavigatorUAData`](/de/docs/Web/API/NavigatorUAData)-Objekt zurück, das Zugriff auf Informationen über den Browser und das Betriebssystem des Benutzers bietet.

## Instanzmethoden

_Das `WorkerNavigator`-Interface erbt keine Methoden._

- [`WorkerNavigator.clearAppBadge()`](/de/docs/Web/API/WorkerNavigator/clearAppBadge) {{SecureContext_Inline}}
  - : Löscht ein Abzeichen auf dem Symbol der aktuellen App und gibt ein {{jsxref("Promise")}} zurück, das mit {{jsxref("undefined")}} aufgelöst wird.
- [`WorkerNavigator.setAppBadge()`](/de/docs/Web/API/WorkerNavigator/setAppBadge) {{SecureContext_Inline}}
  - : Setzt ein Abzeichen auf dem mit dieser App verknüpften Symbol und gibt ein {{jsxref("Promise")}} zurück, das mit {{jsxref("undefined")}} aufgelöst wird.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Andere Worker-bezogene Schnittstellen: [`Worker`](/de/docs/Web/API/Worker), [`WorkerLocation`](/de/docs/Web/API/WorkerLocation) und [`WorkerGlobalScope`](/de/docs/Web/API/WorkerGlobalScope)
- [Arbeiten mit Web-Workern](/de/docs/Web/API/Web_Workers_API/Using_web_workers)
