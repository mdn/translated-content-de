---
title: WorkerNavigator
slug: Web/API/WorkerNavigator
l10n:
  sourceCommit: c640274a19227cd5790912ea76841732baa6731f
---

{{APIRef("Web Workers API")}}{{AvailableInWorkers("worker")}}

Das **`WorkerNavigator`**-Interface stellt einen Teil des {{DOMxRef("Navigator")}}-Interfaces dar, der von einem {{DOMxRef("Worker")}} aus zugänglich ist. Ein solches Objekt wird für jeden Worker initialisiert und ist über die {{DOMxRef("WorkerGlobalScope.navigator", "self.navigator")}}-Eigenschaft verfügbar.

## Instanz-Eigenschaften

_Das `WorkerNavigator`-Interface erbt keine Eigenschaft._

- {{DOMxRef("WorkerNavigator.appCodeName")}} {{Deprecated_Inline}} {{ReadOnlyInline}}
  - : Gibt immer `'Mozilla'` zurück, in jedem Browser. Diese Eigenschaft wird nur aus Kompatibilitätsgründen beibehalten.
- {{DOMxRef("WorkerNavigator.appName")}} {{Deprecated_Inline}} {{ReadOnlyInline}}
  - : Gibt den offiziellen Namen des Browsers zurück. Verlassen Sie sich nicht darauf, dass diese Eigenschaft den richtigen Wert zurückgibt.
- {{DOMxRef("WorkerNavigator.appVersion")}} {{Deprecated_Inline}} {{ReadOnlyInline}}
  - : Gibt die Version des Browsers als Zeichenfolge zurück. Verlassen Sie sich nicht darauf, dass diese Eigenschaft den richtigen Wert zurückgibt.
- {{DOMxRef("WorkerNavigator.connection")}} {{ReadOnlyInline}}
  - : Bietet ein {{DOMxRef("NetworkInformation")}}-Objekt, das Informationen über die Netzwerkverbindung eines Geräts enthält.
- {{domxref("WorkerNavigator.deviceMemory")}} {{ReadOnlyInline}} {{SecureContext_Inline}}
  - : Gibt die Menge des Gerätespeichers in Gigabyte zurück. Dieser Wert ist eine Annäherung, die durch Rundung auf die nächste Potenz von 2 und Teilung dieser Zahl durch 1024 gegeben ist.
- {{domxref("WorkerNavigator.globalPrivacyControl")}} {{ReadOnlyInline}} {{Experimental_Inline}} {{non-standard_inline}}
  - : Gibt ein boolesches Ergebnis zurück, das angibt, ob ein Benutzer der Weitergabe oder dem Verkauf seiner Informationen zugestimmt hat.
- {{domxref("WorkerNavigator.gpu")}} {{ReadOnlyInline}} {{Experimental_Inline}} {{SecureContext_Inline}}
  - : Gibt das {{domxref("GPU")}}-Objekt für den aktuellen Worker-Kontext zurück. Der Einstiegspunkt für die {{domxref("WebGPU_API", "WebGPU API", "", "nocode")}}.
- {{DOMxRef("WorkerNavigator.hardwareConcurrency")}} {{ReadOnlyInline}}
  - : Gibt die Anzahl der verfügbaren logischen Prozessorkerne zurück.
- {{DOMxRef("WorkerNavigator.language")}} {{ReadOnlyInline}}
  - : Gibt eine Zeichenfolge zurück, die die bevorzugte Sprache des Benutzers repräsentiert, normalerweise die Sprache der Browser-Benutzeroberfläche. Der Wert `null` wird zurückgegeben, wenn dies unbekannt ist.
- {{DOMxRef("WorkerNavigator.languages")}} {{ReadOnlyInline}}
  - : Gibt ein Array von Zeichenfolgen zurück, das die dem Benutzer bekannten Sprachen entsprechend ihrer Präferenzreihenfolge darstellt.
- {{DOMxRef("WorkerNavigator.locks")}} {{ReadOnlyInline}} {{SecureContext_Inline}}
  - : Gibt ein {{DOMxRef("LockManager")}}-Objekt zurück, das Methoden zum Anfordern eines neuen {{DOMxRef('Lock')}}-Objekts und Abfragen eines vorhandenen {{DOMxRef('Lock')}}-Objekts bietet.
- {{DOMxRef("WorkerNavigator.mediaCapabilities")}} {{ReadOnlyInline}}
  - : Gibt ein {{domxref("MediaCapabilities")}}-Objekt zurück, das Informationen über die Dekodierungs- und Kodierungsfähigkeiten für ein gegebenes Format und Ausgabefähigkeiten preisgeben kann.
- {{DOMxRef("WorkerNavigator.onLine")}} {{ReadOnlyInline}}
  - : Gibt einen booleschen Wert zurück, der anzeigt, ob der Browser online ist.
- {{DOMxRef("WorkerNavigator.permissions")}} {{ReadOnlyInline}}
  - : Gibt ein {{DOMxRef("Permissions")}}-Objekt zurück, das verwendet werden kann, um den Berechtigungsstatus von APIs abzufragen und zu aktualisieren, die von der [Permissions API](/de/docs/Web/API/Permissions_API) abgedeckt sind.
- {{DOMxRef("WorkerNavigator.platform")}} {{Deprecated_Inline}} {{ReadOnlyInline}}
  - : Gibt eine Zeichenfolge zurück, die die Plattform des Browsers repräsentiert. Verlassen Sie sich nicht darauf, dass diese Eigenschaft den richtigen Wert zurückgibt.
- {{DOMxRef("WorkerNavigator.product")}} {{Deprecated_Inline}} {{ReadOnlyInline}}
  - : Gibt immer `'Gecko'` zurück, auf jedem Browser. Diese Eigenschaft wird nur aus Kompatibilitätsgründen beibehalten.
- {{domxref("WorkerNavigator.serial")}} {{ReadOnlyInline}} {{Experimental_Inline}} {{SecureContext_Inline}}
  - : Gibt ein {{domxref("Serial")}}-Objekt zurück, das den Einstiegspunkt in die [Web Serial API](/de/docs/Web/API/Web_Serial_API) darstellt, um die Steuerung von seriellen Schnittstellen zu ermöglichen.
- {{domxref("WorkerNavigator.serviceWorker")}} {{ReadOnlyInline}} {{SecureContext_Inline}}
  - : Gibt ein {{domxref("ServiceWorkerContainer")}}-Objekt zurück, das Zugriff auf die Registrierung, Entfernung, Aktualisierung und Kommunikation mit den {{domxref("ServiceWorker")}}-Objekten für das [zugehörige Dokument](https://html.spec.whatwg.org/multipage/browsers.html#concept-document-window) bietet.
- {{DOMxRef("WorkerNavigator.storage")}} {{ReadOnlyInline}} {{SecureContext_Inline}}
  - : Gibt eine {{DOMxRef('StorageManager')}}-Schnittstelle zur Verwaltung von Persistenzberechtigungen und zur Schätzung des verfügbaren Speichers zurück.
- {{domxref("WorkerNavigator.usb")}} {{ReadOnlyInline}} {{SecureContext_Inline}}
  - : Gibt ein {{domxref("USB")}}-Objekt für das aktuelle Dokument zurück, das Zugriff auf die [WebUSB API](/de/docs/Web/API/WebUSB_API)-Funktionalität bietet.
- {{DOMxRef("WorkerNavigator.userAgent")}} {{ReadOnlyInline}}
  - : Gibt die User-Agent-Zeichenfolge für den aktuellen Browser zurück.
- {{domxref("WorkerNavigator.userAgentData")}} {{ReadOnlyInline}} {{Experimental_Inline}} {{SecureContext_Inline}}
  - : Gibt ein {{domxref("NavigatorUAData")}}-Objekt zurück, das Zugriff auf Informationen über den Browser und das Betriebssystem des Benutzers bietet.

## Instanz-Methoden

_Das `WorkerNavigator`-Interface erbt keine Methode._

- {{domxref("WorkerNavigator.clearAppBadge()")}} {{SecureContext_Inline}}
  - : Löscht eine Plakette auf dem Symbol der aktuellen App und gibt ein {{jsxref("Promise")}} zurück, das mit {{jsxref("undefined")}} aufgelöst wird.
- {{domxref("WorkerNavigator.setAppBadge()")}} {{SecureContext_Inline}}
  - : Setzt eine Plakette auf dem mit dieser App verbundenen Symbol und gibt ein {{jsxref("Promise")}} zurück, das mit {{jsxref("undefined")}} aufgelöst wird.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Andere Worker-bezogene Schnittstellen: {{DOMxRef("Worker")}}, {{DOMxRef("WorkerLocation")}}, und {{DOMxRef("WorkerGlobalScope")}}
- [Verwendung von Web-Workern](/de/docs/Web/API/Web_Workers_API/Using_web_workers)
