---
title: Navigator
slug: Web/API/Navigator
l10n:
  sourceCommit: a3d19af7e3eeb1c40748c80cd6b5143cfa201c54
---

{{APIRef("DOM")}}

Das **`Navigator`**-Interface repräsentiert den Zustand und die Identität des User-Agents. Es erlaubt Skripten, Informationen darüber abzufragen und sich für bestimmte Aktivitäten zu registrieren.

Ein `Navigator`-Objekt kann über die schreibgeschützte [`window.navigator`](/de/docs/Web/API/Window/navigator)-Eigenschaft abgerufen werden.

## Instanzeigenschaften

_Erbt keine Eigenschaften._

### Standard-Eigenschaften

- [`Navigator.bluetooth`](/de/docs/Web/API/Navigator/bluetooth) {{ReadOnlyInline}} {{Experimental_Inline}} {{SecureContext_Inline}}
  - : Gibt ein [`Bluetooth`](/de/docs/Web/API/Bluetooth)-Objekt für das aktuelle Dokument zurück und bietet Zugriff auf die Funktionalität der [Web Bluetooth API](/de/docs/Web/API/Web_Bluetooth_API).
- [`Navigator.clipboard`](/de/docs/Web/API/Navigator/clipboard) {{ReadOnlyInline}} {{securecontext_inline}}
  - : Gibt ein [`Clipboard`](/de/docs/Web/API/Clipboard)-Objekt zurück, das Lese- und Schreibzugriff auf die Systemzwischenablage bietet.
- [`Navigator.connection`](/de/docs/Web/API/Navigator/connection) {{ReadOnlyInline}}
  - : Gibt ein [`NetworkInformation`](/de/docs/Web/API/NetworkInformation)-Objekt zurück, das Informationen über die Netzwerkverbindung eines Geräts enthält.
- [`Navigator.contacts`](/de/docs/Web/API/Navigator/contacts) {{ReadOnlyInline}} {{Experimental_Inline}} {{SecureContext_Inline}}
  - : Gibt eine [`ContactsManager`](/de/docs/Web/API/ContactsManager)-Schnittstelle zurück, die es Benutzern ermöglicht, Einträge aus ihrer Kontaktliste auszuwählen und begrenzte Details der ausgewählten Einträge mit einer Website oder Anwendung zu teilen.
- [`Navigator.cookieEnabled`](/de/docs/Web/API/Navigator/cookieEnabled) {{ReadOnlyInline}}
  - : Gibt `false` zurück, wenn das Setzen eines Cookies ignoriert wird, und `true` andernfalls.
- [`Navigator.credentials`](/de/docs/Web/API/Navigator/credentials) {{ReadOnlyInline}} {{SecureContext_Inline}}
  - : Gibt die [`CredentialsContainer`](/de/docs/Web/API/CredentialsContainer)-Schnittstelle zurück, die Methoden zum Anfordern von Anmeldeinformationen und zum Benachrichtigen des User-Agents über wichtige Ereignisse wie erfolgreiches Anmelden oder Abmelden bereitstellt.
- [`Navigator.deviceMemory`](/de/docs/Web/API/Navigator/deviceMemory) {{ReadOnlyInline}} {{SecureContext_Inline}}
  - : Gibt die Menge an Gerätespeicher in Gigabyte zurück. Dieser Wert ist eine Annäherung, die durch Runden auf die nächste Zweierpotenz und anschließendes Teilen durch 1024 erhalten wird.
- [`Navigator.devicePosture`](/de/docs/Web/API/Navigator/devicePosture) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt das [`DevicePosture`](/de/docs/Web/API/DevicePosture)-Objekt des Browsers zurück, das es Entwicklern ermöglicht, die aktuelle Haltung eines Geräts (z. B. ob der Viewport flach oder gefaltet ist) abzufragen und Code in Reaktion auf Haltungsänderungen auszuführen.
- [`Navigator.geolocation`](/de/docs/Web/API/Navigator/geolocation) {{ReadOnlyInline}}
  - : Gibt ein [`Geolocation`](/de/docs/Web/API/Geolocation)-Objekt zurück, das Zugriff auf den Standort des Geräts ermöglicht.
- [`Navigator.gpu`](/de/docs/Web/API/Navigator/gpu) {{ReadOnlyInline}} {{Experimental_Inline}} {{SecureContext_Inline}}
  - : Gibt das [`GPU`](/de/docs/Web/API/GPU)-Objekt für den aktuellen Browsing-Kontext zurück. Der Einstiegspunkt für die [WebGPU API](/de/docs/Web/API/WebGPU_API).
- [`Navigator.hardwareConcurrency`](/de/docs/Web/API/Navigator/hardwareConcurrency) {{ReadOnlyInline}}
  - : Gibt die Anzahl der verfügbaren logischen Prozessorkerne zurück.
- [`Navigator.hid`](/de/docs/Web/API/Navigator/hid) {{ReadOnlyInline}} {{Experimental_Inline}} {{SecureContext_Inline}}
  - : Gibt ein [`HID`](/de/docs/Web/API/HID)-Objekt zurück, das Methoden für den Anschluss an HID-Geräte, das Auflisten angeschlossener HID-Geräte und Ereignishandler für verbundene HID-Geräte bereitstellt.
- [`Navigator.ink`](/de/docs/Web/API/Navigator/ink) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt ein [`Ink`](/de/docs/Web/API/Ink)-Objekt für das aktuelle Dokument zurück und bietet Zugriff auf die Funktionalität der [Ink API](/de/docs/Web/API/Ink_API).
- [`Navigator.keyboard`](/de/docs/Web/API/Navigator/keyboard) {{ReadOnlyInline}} {{Experimental_Inline}} {{SecureContext_Inline}}
  - : Gibt ein [`Keyboard`](/de/docs/Web/API/Keyboard)-Objekt zurück, das Zugriff auf Funktionen bietet, um Tastaturlayoutkarten abzurufen und das Erfassen von Tastenanschlägen von der physischen Tastatur zu aktivieren oder zu deaktivieren.
- [`Navigator.language`](/de/docs/Web/API/Navigator/language) {{ReadOnlyInline}}
  - : Gibt einen String zurück, der die bevorzugte Sprache des Benutzers darstellt, meist die Sprache der Browser-Benutzeroberfläche. Der Wert `null` wird zurückgegeben, wenn diese unbekannt ist.
- [`Navigator.languages`](/de/docs/Web/API/Navigator/languages) {{ReadOnlyInline}}
  - : Gibt ein Array von Strings zurück, die die dem Benutzer bekannten Sprachen in der Reihenfolge der Präferenz darstellen.
- [`Navigator.locks`](/de/docs/Web/API/Navigator/locks) {{ReadOnlyInline}} {{SecureContext_Inline}}
  - : Gibt ein [`LockManager`](/de/docs/Web/API/LockManager)-Objekt zurück, das Methoden zum Anfordern eines neuen [`Lock`](/de/docs/Web/API/Lock)-Objekts und zur Abfrage eines bestehenden [`Lock`](/de/docs/Web/API/Lock)-Objekts bereitstellt.
- [`Navigator.login`](/de/docs/Web/API/Navigator/login) {{ReadOnlyInline}} {{Experimental_Inline}} {{SecureContext_Inline}}
  - : Bietet Zugriff auf das [`NavigatorLogin`](/de/docs/Web/API/NavigatorLogin)-Objekt des Browsers, das ein föderierter Identitätsanbieter (IdP) verwenden kann, um den Anmeldestatus eines Benutzers festzulegen, wenn dieser sich beim IdP anmeldet oder abmeldet. Weitere Details finden Sie in der [Federated Credential Management (FedCM) API](/de/docs/Web/API/FedCM_API).
- [`Navigator.maxTouchPoints`](/de/docs/Web/API/Navigator/maxTouchPoints) {{ReadOnlyInline}}
  - : Gibt die maximale Anzahl gleichzeitiger Berührungskontaktpunkte zurück, die vom aktuellen Gerät unterstützt werden.
- [`Navigator.mediaCapabilities`](/de/docs/Web/API/Navigator/mediaCapabilities) {{ReadOnlyInline}}
  - : Gibt ein [`MediaCapabilities`](/de/docs/Web/API/MediaCapabilities)-Objekt zurück, das Informationen über die Dekodierungs- und Codierungskapazitäten für ein bestimmtes Format sowie die Ausgabekapazitäten bereitstellen kann.

[Liste gekürzt für Vorschau ...]
