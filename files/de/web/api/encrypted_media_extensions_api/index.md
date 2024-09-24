---
title: Verschlüsselte Medienerweiterungen API
slug: Web/API/Encrypted_Media_Extensions_API
l10n:
  sourceCommit: 7b565c5f4610bea19c844f35532853624d87cde3
---

{{DefaultAPISidebar("Encrypted Media Extensions")}} {{securecontext_header}}

Die **Verschlüsselte Medienerweiterungen API** bietet Schnittstellen zur Steuerung der Wiedergabe von Inhalten, die einem digitalen Rechteverwaltungsschema unterliegen.

Zugriff auf diese API wird über {{domxref("Navigator.requestMediaKeySystemAccess()")}} ermöglicht.

## Schnittstellen

- {{domxref("MediaEncryptedEvent")}}
  - : Repräsentiert ein bestimmtes {{domxref("HTMLMediaElement/encrypted_event", "encrypted")}}-Ereignis, das ausgelöst wird, wenn ein {{domxref('HTMLMediaElement')}} auf einige Initialisierungsdaten stößt.
- {{domxref("MediaKeyMessageEvent")}}
  - : Enthält den Inhalt und die zugehörigen Daten, wenn das Content Decryption Module (CDM) eine Nachricht für die Sitzung generiert.
- {{domxref("MediaKeys")}}
  - : Repräsentiert eine Menge von Schlüsseln, die ein zugeordnetes {{domxref('HTMLMediaElement')}} zur Entschlüsselung von Mediendaten während der Wiedergabe verwenden kann.
- {{domxref("MediaKeySession")}}
  - : Repräsentiert einen Kontext für den Nachrichtenaustausch mit einem Content Decryption Module (CDM).
- {{domxref("MediaKeyStatusMap")}}
  - : Eine schreibgeschützte Zuordnung von Medienschlüsselstatus nach Schlüssel-IDs.
- {{domxref("MediaKeySystemAccess")}}
  - : Bietet Zugang zu einem Schlüsselsystem zur Entschlüsselung und/oder einem Inhaltschutzanbieter.

### Erweiterungen anderer Schnittstellen

Die Verschlüsselten Medienerweiterungen API erweitert die folgenden APIs und fügt die aufgelisteten Funktionen hinzu.

#### HTMLMediaElement

- {{domxref("HTMLMediaElement.mediaKeys")}} {{readonlyinline}}
  - : Bietet ein {{domxref("MediaKeys")}}-Objekt, das die Menge von Schlüsseln darstellt, die das Element zur Entschlüsselung von Mediendaten während der Wiedergabe verwenden kann.
- {{domxref("HTMLMediaElement.setMediaKeys()")}}
  - : Setzt die {{domxref("MediaKeys")}}, die zur Entschlüsselung von Medien während der Wiedergabe verwendet werden.
- [`encrypted`-Ereignis](/de/docs/Web/API/HTMLMediaElement/encrypted_event)
  - : Ereignis, das auf einem {{domxref("HTMLMediaElement")}} ausgelöst wird, wenn Initialisierungsdaten im Medium gefunden werden und darauf hinweisen, dass es verschlüsselt ist.

#### Navigator

- {{domxref("Navigator.requestMediaKeySystemAccess()")}}
  - : Gibt ein {{jsxref('Promise')}} zurück, das zu einem {{domxref('MediaKeySystemAccess')}}-Objekt führt, mit dem auf ein bestimmtes Medienschlüsselsystem zugegriffen werden kann, das wiederum zur Erstellung von Schlüsseln zur Entschlüsselung eines Medienstroms verwendet werden kann.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
