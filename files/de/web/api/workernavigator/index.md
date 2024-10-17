---
title: WorkerNavigator
slug: Web/API/WorkerNavigator
l10n:
  sourceCommit: 534e2c61fee576355e8a9b7036d9fa36056edb03
---

{{APIRef("Web Workers API")}}{{AvailableInWorkers("worker")}}

Das **`WorkerNavigator`**-Interface repräsentiert einen Teil des [`Navigator`](/de/docs/Web/API/Navigator)-Interfaces, der vom [`Worker`](/de/docs/Web/API/Worker) aus zugänglich ist. Ein solches Objekt wird für jeden Worker initialisiert und ist über die [`self.navigator`](/de/docs/Web/API/WorkerGlobalScope/navigator)-Eigenschaft verfügbar.

## Instanz-Eigenschaften

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
  - : Gibt die Menge des Gerätespeichers in Gigabyte zurück. Dieser Wert ist eine Näherung, die durch Rundung auf die nächste Potenz von 2 und anschließendes Teilen dieser Zahl durch 1024 ermittelt wird.
- [`WorkerNavigator.globalPrivacyControl`](/de/docs/Web/API/WorkerNavigator/globalPrivacyControl) {{ReadOnlyInline}} {{Experimental_Inline}} {{non-standard_inline}}
  - : Gibt einen booleschen Wert zurück, der die Zustimmung eines Benutzers zur Weitergabe oder zum Verkauf seiner Informationen anzeigt.
- [`WorkerNavigator.gpu`](/de/docs/Web/API/WorkerNavigator/gpu) {{ReadOnlyInline}} {{Experimental_Inline}} {{SecureContext_Inline}}
  - : Gibt das [`GPU`](/de/docs/Web/API/GPU)-Objekt für den aktuellen Worker-Kontext zurück. Der Einstiegspunkt für die [WebGPU API](/de/docs/Web/API/WebGPU_API).
- [`WorkerNavigator.hardwareConcurrency`](/de/docs/Web/API/WorkerNavigator/hardwareConcurrency) {{ReadOnlyInline}}
  - : Gibt die Anzahl der verfügbaren logischen Prozessorkerne zurück.
- [`WorkerNavigator.hid`](/de/docs/Web/API/WorkerNavigator/hid) {{ReadOnlyInline}} {{Experimental_Inline}} {{SecureContext_Inline}}
  - : Gibt ein [`HID`](/de/docs/Web/API/HID)-Objekt zurück, das Methoden zum Verbinden mit HID-Geräten anbietet, für die der Benutzer bereits Berechtigungen erteilt hat, sowie zum Auflisten angeschlossener HID-Geräte und Event-Handler zum Reagieren auf das Anschließen und Trennen von HID-Geräten.
- [`WorkerNavigator.language`](/de/docs/Web/API/WorkerNavigator/language) {{ReadOnlyInline}}
  - : Gibt eine Zeichenkette zurück, die die bevorzugte Sprache des Benutzers darstellt, normalerweise die Sprache der Benutzeroberfläche des Browsers. Der Wert `null` wird zurückgegeben, wenn dies unbekannt ist.
- [`WorkerNavigator.languages`](/de/docs/Web/API/WorkerNavigator/languages) {{ReadOnlyInline}}
  - : Gibt ein Array von Zeichenketten zurück, das die dem Benutzer bekannten Sprachen in der Rangfolge der Präferenz darstellt.
- [`WorkerNavigator.locks`](/de/docs/Web/API/WorkerNavigator/locks) {{ReadOnlyInline}} {{SecureContext_Inline}}
  - : Gibt ein [`LockManager`](/de/docs/Web/API/LockManager)-Objekt zurück, das Methoden zum Anfordern eines neuen [`Lock`](/de/docs/Web/API/Lock)-Objekts und zum Abfragen eines vorhandenen [`Lock`](/de/docs/Web/API/Lock)-Objekts bietet.
- [`WorkerNavigator.mediaCapabilities`](/de/docs/Web/API/WorkerNavigator/mediaCapabilities) {{ReadOnlyInline}}
  - : Gibt ein [`MediaCapabilities`](/de/docs/Web/API/MediaCapabilities)-Objekt zurück, das Informationen über die Dekodier- und Kodierfähigkeiten für ein bestimmtes Format und Ausgabeoptionen bereitstellen kann.
- [`WorkerNavigator.onLine`](/de/docs/Web/API/WorkerNavigator/onLine) {{ReadOnlyInline}}
  - : Gibt einen booleschen Wert zurück, der anzeigt, ob der Browser online ist.
- [`WorkerNavigator.permissions`](/de/docs/Web/API/WorkerNavigator/permissions) {{ReadOnlyInline}}
  - : Gibt ein [`Permissions`](/de/docs/Web/API/Permissions)-Objekt zurück, das verwendet werden kann, um den Berechtigungsstatus von APIs abzufragen und zu aktualisieren, die von der [Permissions API](/de/docs/Web/API/Permissions_API) abgedeckt werden.
- [`WorkerNavigator.platform`](/de/docs/Web/API/WorkerNavigator/platform) {{Deprecated_Inline}} {{ReadOnlyInline}}
  - : Gibt eine Zeichenkette zurück, die die Plattform des Browsers darstellt. Verlassen Sie sich nicht darauf, dass diese Eigenschaft den korrekten Wert zurückgibt.
- [`WorkerNavigator.product`](/de/docs/Web/API/WorkerNavigator/product) {{Deprecated_Inline}} {{ReadOnlyInline}}
  - : Gibt immer `'Gecko'` zurück, in jedem Browser. Diese Eigenschaft wird nur aus Kompatibilitätsgründen beibehalten.
- [`WorkerNavigator.serial`](/de/docs/Web/API/WorkerNavigator/serial) {{ReadOnlyInline}} {{Experimental_Inline}} {{SecureContext_Inline}}
  - : Gibt ein [`Serial`](/de/docs/Web/API/Serial)-Objekt zurück, das den Zugang zur [Web Serial API](/de/docs/Web/API/Web_Serial_API) ermöglicht, um die Steuerung von seriellen Anschlüssen zu ermöglichen.
- [`WorkerNavigator.serviceWorker`](/de/docs/Web/API/WorkerNavigator/serviceWorker) {{ReadOnlyInline}} {{SecureContext_Inline}}
  - : Gibt ein [`ServiceWorkerContainer`](/de/docs/Web/API/ServiceWorkerContainer)-Objekt zurück, das Zugriff auf Registrierung, Entfernung, Upgrade und Kommunikation mit den [`ServiceWorker`](/de/docs/Web/API/ServiceWorker)-Objekten für das [verbundene Dokument](https://html.spec.whatwg.org/multipage/browsers.html#concept-document-window) bietet.
- [`WorkerNavigator.storage`](/de/docs/Web/API/WorkerNavigator/storage) {{ReadOnlyInline}} {{SecureContext_Inline}}
  - : Gibt ein [`StorageManager`](/de/docs/Web/API/StorageManager)-Interface zur Verwaltung von Persistenzberechtigungen und zur Schätzung des verfügbaren Speichers zurück.
- [`WorkerNavigator.usb`](/de/docs/Web/API/WorkerNavigator/usb) {{ReadOnlyInline}} {{SecureContext_Inline}}
  - : Gibt ein [`USB`](/de/docs/Web/API/USB)-Objekt für das aktuelle Dokument zurück, das Zugriff auf die Funktionalität der [WebUSB API](/de/docs/Web/API/WebUSB_API) bietet.
- [`WorkerNavigator.userAgent`](/de/docs/Web/API/WorkerNavigator/userAgent) {{ReadOnlyInline}}
  - : Gibt die User-Agent-Zeichenkette für den aktuellen Browser zurück.
- [`WorkerNavigator.userAgentData`](/de/docs/Web/API/WorkerNavigator/userAgentData) {{ReadOnlyInline}} {{Experimental_Inline}} {{SecureContext_Inline}}
  - : Gibt ein [`NavigatorUAData`](/de/docs/Web/API/NavigatorUAData)-Objekt zurück, das Zugriff auf Informationen über den Browser und das Betriebssystem des Benutzers gibt.

## Instanz-Methoden

_Das `WorkerNavigator`-Interface erbt keine Methoden._

- [`WorkerNavigator.clearAppBadge()`](/de/docs/Web/API/WorkerNavigator/clearAppBadge) {{SecureContext_Inline}}
  - : Löscht ein Badge auf dem Symbol der aktuellen App und gibt ein {{jsxref("Promise")}} zurück, das mit {{jsxref("undefined")}} aufgelöst wird.
- [`WorkerNavigator.setAppBadge()`](/de/docs/Web/API/WorkerNavigator/setAppBadge) {{SecureContext_Inline}}
  - : Setzt ein Badge auf das mit dieser App verknüpfte Symbol und gibt ein {{jsxref("Promise")}} zurück, das mit {{jsxref("undefined")}} aufgelöst wird.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Andere Worker-bezogene Interfaces: [`Worker`](/de/docs/Web/API/Worker), [`WorkerLocation`](/de/docs/Web/API/WorkerLocation) und [`WorkerGlobalScope`](/de/docs/Web/API/WorkerGlobalScope)
- [Verwendung von Web-Workern](/de/docs/Web/API/Web_Workers_API/Using_web_workers)
