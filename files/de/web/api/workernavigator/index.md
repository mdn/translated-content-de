---
title: WorkerNavigator
slug: Web/API/WorkerNavigator
l10n:
  sourceCommit: 076ee5b53d5e933e7fc2fd5eff68304f9691148e
---

{{APIRef("Web Workers API")}}{{AvailableInWorkers("worker")}}

Die Schnittstelle **`WorkerNavigator`** stellt eine Teilmenge der Schnittstelle [`Navigator`](/de/docs/Web/API/Navigator) dar, auf die von einem [`Worker`](/de/docs/Web/API/Worker) aus zugegriffen werden kann. Für jeden Worker wird ein solches Objekt initialisiert. Es ist über die Eigenschaft [`self.navigator`](/de/docs/Web/API/WorkerGlobalScope/navigator) verfügbar.

## Instanzeigenschaften

_Die Schnittstelle `WorkerNavigator` erbt keine Eigenschaften._

- [`WorkerNavigator.appCodeName`](/de/docs/Web/API/WorkerNavigator/appCodeName) {{ReadOnlyInline}}
  - : Gibt in jedem Browser immer `'Mozilla'` zurück. Diese Eigenschaft wird nur aus Kompatibilitätsgründen beibehalten.
- [`WorkerNavigator.appName`](/de/docs/Web/API/WorkerNavigator/appName) {{ReadOnlyInline}}
  - : Gibt den offiziellen Namen des Browsers zurück. Verlassen Sie sich nicht darauf, dass diese Eigenschaft den korrekten Wert zurückgibt.
- [`WorkerNavigator.appVersion`](/de/docs/Web/API/WorkerNavigator/appVersion) {{ReadOnlyInline}}
  - : Gibt die Version des Browsers als Zeichenfolge zurück. Verlassen Sie sich nicht darauf, dass diese Eigenschaft den korrekten Wert zurückgibt.
- [`WorkerNavigator.connection`](/de/docs/Web/API/WorkerNavigator/connection) {{ReadOnlyInline}}
  - : Stellt ein [`NetworkInformation`](/de/docs/Web/API/NetworkInformation)-Objekt bereit, das Informationen über die Netzwerkverbindung eines Geräts enthält.
- [`WorkerNavigator.deviceMemory`](/de/docs/Web/API/WorkerNavigator/deviceMemory) {{ReadOnlyInline}} {{SecureContext_Inline}} {{non-standard_inline}}
  - : Gibt die Größe des Gerätespeichers in Gigabyte zurück. Dieser Wert ist eine Näherung, die durch Runden auf die nächstgelegene Zweierpotenz und anschließendes Teilen dieser Zahl durch 1024 ermittelt wird.
- [`WorkerNavigator.globalPrivacyControl`](/de/docs/Web/API/WorkerNavigator/globalPrivacyControl) {{ReadOnlyInline}}
  - : Gibt einen booleschen Wert zurück, der die Einwilligung eines Benutzers zur Weitergabe oder zum Verkauf seiner Informationen angibt.
- [`WorkerNavigator.gpu`](/de/docs/Web/API/WorkerNavigator/gpu) {{ReadOnlyInline}} {{SecureContext_Inline}}
  - : Gibt das [`GPU`](/de/docs/Web/API/GPU)-Objekt für den aktuellen Worker-Kontext zurück. Dies ist der Einstiegspunkt für die [WebGPU API](/de/docs/Web/API/WebGPU_API).
- [`WorkerNavigator.hardwareConcurrency`](/de/docs/Web/API/WorkerNavigator/hardwareConcurrency) {{ReadOnlyInline}}
  - : Gibt die Anzahl der verfügbaren logischen Prozessorkerne zurück.
- [`WorkerNavigator.hid`](/de/docs/Web/API/WorkerNavigator/hid) {{ReadOnlyInline}} {{Experimental_Inline}} {{SecureContext_Inline}}
  - : Gibt ein [`HID`](/de/docs/Web/API/HID)-Objekt zurück. Es stellt Methoden bereit, um eine Verbindung zu HID-Geräten herzustellen, für die der Benutzer bereits eine Berechtigung erteilt hat, und um angeschlossene HID-Geräte aufzulisten. Außerdem stellt es Event-Handler bereit, um auf das Verbinden und Trennen von HID-Geräten zu reagieren.
- [`WorkerNavigator.language`](/de/docs/Web/API/WorkerNavigator/language) {{ReadOnlyInline}}
  - : Gibt eine Zeichenfolge zurück, die die bevorzugte Sprache des Benutzers angibt, üblicherweise die Sprache der Browseroberfläche. Wenn diese nicht bekannt ist, wird der Wert `null` zurückgegeben.
- [`WorkerNavigator.languages`](/de/docs/Web/API/WorkerNavigator/languages) {{ReadOnlyInline}}
  - : Gibt ein Array von Zeichenfolgen zurück, die die dem Benutzer bekannten Sprachen in der Reihenfolge seiner Präferenzen angeben.
- [`WorkerNavigator.locks`](/de/docs/Web/API/WorkerNavigator/locks) {{ReadOnlyInline}} {{SecureContext_Inline}}
  - : Gibt ein [`LockManager`](/de/docs/Web/API/LockManager)-Objekt zurück, das Methoden zum Anfordern eines neuen [`Lock`](/de/docs/Web/API/Lock)-Objekts und zum Abfragen eines vorhandenen [`Lock`](/de/docs/Web/API/Lock)-Objekts bereitstellt.
- [`WorkerNavigator.mediaCapabilities`](/de/docs/Web/API/WorkerNavigator/mediaCapabilities) {{ReadOnlyInline}}
  - : Gibt ein [`MediaCapabilities`](/de/docs/Web/API/MediaCapabilities)-Objekt zurück, das Informationen über die Decodierungs- und Codierungsfähigkeiten für ein bestimmtes Format sowie über Ausgabefähigkeiten bereitstellen kann.
- [`WorkerNavigator.onLine`](/de/docs/Web/API/WorkerNavigator/onLine) {{ReadOnlyInline}}
  - : Gibt einen booleschen Wert zurück, der angibt, ob der Browser online ist.
- [`WorkerNavigator.permissions`](/de/docs/Web/API/WorkerNavigator/permissions) {{ReadOnlyInline}}
  - : Gibt ein [`Permissions`](/de/docs/Web/API/Permissions)-Objekt zurück, mit dem der Berechtigungsstatus von APIs, die von der [Permissions API](/de/docs/Web/API/Permissions_API) abgedeckt werden, abgefragt und aktualisiert werden kann.
- [`WorkerNavigator.platform`](/de/docs/Web/API/WorkerNavigator/platform) {{ReadOnlyInline}}
  - : Gibt eine Zeichenfolge zurück, die die Plattform des Browsers angibt. Verlassen Sie sich nicht darauf, dass diese Eigenschaft den korrekten Wert zurückgibt.
- [`WorkerNavigator.product`](/de/docs/Web/API/WorkerNavigator/product) {{ReadOnlyInline}}
  - : Gibt in jedem Browser immer `'Gecko'` zurück. Diese Eigenschaft wird nur aus Kompatibilitätsgründen beibehalten.
- [`WorkerNavigator.serial`](/de/docs/Web/API/WorkerNavigator/serial) {{ReadOnlyInline}} {{SecureContext_Inline}}
  - : Gibt ein [`Serial`](/de/docs/Web/API/Serial)-Objekt zurück, das den Einstiegspunkt für die [Web Serial API](/de/docs/Web/API/Web_Serial_API) darstellt und die Steuerung serieller Schnittstellen ermöglicht.
- [`WorkerNavigator.serviceWorker`](/de/docs/Web/API/WorkerNavigator/serviceWorker) {{ReadOnlyInline}} {{SecureContext_Inline}}
  - : Gibt ein [`ServiceWorkerContainer`](/de/docs/Web/API/ServiceWorkerContainer)-Objekt zurück, das Zugriff auf die Registrierung, Entfernung und Aktualisierung von [`ServiceWorker`](/de/docs/Web/API/ServiceWorker)-Objekten für das [zugehörige Dokument](https://html.spec.whatwg.org/multipage/browsers.html#concept-document-window) sowie auf die Kommunikation mit ihnen bietet.
- [`WorkerNavigator.storage`](/de/docs/Web/API/WorkerNavigator/storage) {{ReadOnlyInline}} {{SecureContext_Inline}}
  - : Gibt eine [`StorageManager`](/de/docs/Web/API/StorageManager)-Schnittstelle zurück, mit der Berechtigungen für dauerhafte Speicherung verwaltet und der verfügbare Speicherplatz geschätzt werden können.
- [`WorkerNavigator.usb`](/de/docs/Web/API/WorkerNavigator/usb) {{ReadOnlyInline}} {{SecureContext_Inline}}
  - : Gibt ein [`USB`](/de/docs/Web/API/USB)-Objekt für das aktuelle Dokument zurück, das Zugriff auf die Funktionen der [WebUSB API](/de/docs/Web/API/WebUSB_API) bietet.
- [`WorkerNavigator.userAgent`](/de/docs/Web/API/WorkerNavigator/userAgent) {{ReadOnlyInline}}
  - : Gibt die User-Agent-Zeichenfolge des aktuellen Browsers zurück.
- [`WorkerNavigator.userAgentData`](/de/docs/Web/API/WorkerNavigator/userAgentData) {{ReadOnlyInline}} {{Experimental_Inline}} {{SecureContext_Inline}}
  - : Gibt ein [`NavigatorUAData`](/de/docs/Web/API/NavigatorUAData)-Objekt zurück, das Zugriff auf Informationen über den Browser und das Betriebssystem des Benutzers bietet.

## Instanzmethoden

_Die Schnittstelle `WorkerNavigator` erbt keine Methoden._

- [`WorkerNavigator.clearAppBadge()`](/de/docs/Web/API/WorkerNavigator/clearAppBadge) {{SecureContext_Inline}}
  - : Entfernt ein Kennzeichen vom Symbol der aktuellen App und gibt eine {{jsxref("Promise")}} zurück, die mit {{jsxref("undefined")}} erfüllt wird.
- [`WorkerNavigator.setAppBadge()`](/de/docs/Web/API/WorkerNavigator/setAppBadge) {{SecureContext_Inline}}
  - : Setzt ein Kennzeichen auf das Symbol dieser App und gibt eine {{jsxref("Promise")}} zurück, die mit {{jsxref("undefined")}} erfüllt wird.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Weitere Worker-bezogene Schnittstellen: [`Worker`](/de/docs/Web/API/Worker), [`WorkerLocation`](/de/docs/Web/API/WorkerLocation) und [`WorkerGlobalScope`](/de/docs/Web/API/WorkerGlobalScope)
- [Web Worker verwenden](/de/docs/Web/API/Web_Workers_API/Using_web_workers)
