---
title: Encrypted Media Extensions API
slug: Web/API/Encrypted_Media_Extensions_API
l10n:
  sourceCommit: 7b565c5f4610bea19c844f35532853624d87cde3
---

{{DefaultAPISidebar("Encrypted Media Extensions")}} {{securecontext_header}}

Die **Encrypted Media Extensions API** bietet Schnittstellen zur Steuerung der Wiedergabe von Inhalten, die einem Digital Rights Management unterliegen.

Der Zugriff auf diese API erfolgt über [`Navigator.requestMediaKeySystemAccess()`](/de/docs/Web/API/Navigator/requestMediaKeySystemAccess).

## Schnittstellen

- [`MediaEncryptedEvent`](/de/docs/Web/API/MediaEncryptedEvent)
  - : Repräsentiert ein spezifisches [`encrypted`](/de/docs/Web/API/HTMLMediaElement/encrypted_event) Ereignis, das ausgelöst wird, wenn ein [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement) auf einige Initialisierungsdaten stößt.
- [`MediaKeyMessageEvent`](/de/docs/Web/API/MediaKeyMessageEvent)
  - : Enthält den Inhalt und die zugehörigen Daten, wenn das Content Decryption Module (CDM) eine Nachricht für die Sitzung generiert.
- [`MediaKeys`](/de/docs/Web/API/MediaKeys)
  - : Repräsentiert einen Satz von Schlüsseln, den ein zugeordnetes [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement) zur Entschlüsselung von Mediendaten während der Wiedergabe verwenden kann.
- [`MediaKeySession`](/de/docs/Web/API/MediaKeySession)
  - : Stellt einen Kontext für den Nachrichtenaustausch mit einem Content Decryption Module (CDM) dar.
- [`MediaKeyStatusMap`](/de/docs/Web/API/MediaKeyStatusMap)
  - : Eine schreibgeschützte Zuordnung von Media-Key-Status nach Schlüssel-IDs.
- [`MediaKeySystemAccess`](/de/docs/Web/API/MediaKeySystemAccess)
  - : Bietet Zugang zu einem Schlüssel-System für die Entschlüsselung und/oder einen Anbieter von Inhaltsschutz.

### Erweiterungen zu anderen Schnittstellen

Die Encrypted Media Extensions API erweitert die folgenden APIs und fügt die aufgeführten Funktionen hinzu.

#### HTMLMediaElement

- [`HTMLMediaElement.mediaKeys`](/de/docs/Web/API/HTMLMediaElement/mediaKeys) {{readonlyinline}}
  - : Bietet ein [`MediaKeys`](/de/docs/Web/API/MediaKeys) Objekt, das den Satz von Schlüsseln darstellt, den das Element zur Entschlüsselung von Mediendaten während der Wiedergabe verwenden kann.
- [`HTMLMediaElement.setMediaKeys()`](/de/docs/Web/API/HTMLMediaElement/setMediaKeys)
  - : Legt die [`MediaKeys`](/de/docs/Web/API/MediaKeys) fest, die zur Entschlüsselung von Medien während der Wiedergabe verwendet werden.
- [`encrypted` event](/de/docs/Web/API/HTMLMediaElement/encrypted_event)
  - : Ereignis, das auf einem [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement) ausgelöst wird, wenn Initialisierungsdaten in den Medien erkannt werden, was darauf hinweist, dass sie verschlüsselt sind.

#### Navigator

- [`Navigator.requestMediaKeySystemAccess()`](/de/docs/Web/API/Navigator/requestMediaKeySystemAccess)
  - : Gibt ein {{jsxref('Promise')}} zurück, das ein [`MediaKeySystemAccess`](/de/docs/Web/API/MediaKeySystemAccess) Objekt erfüllt, das verwendet werden kann, um auf ein bestimmtes Media Key System zuzugreifen, mit dem wiederum Schlüssel zur Entschlüsselung eines Medienstreams erstellt werden können.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
