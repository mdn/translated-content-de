---
title: Encrypted Media Extensions API
slug: Web/API/Encrypted_Media_Extensions_API
l10n:
  sourceCommit: e1e7e2ac2cb1e40293c32c24bc0667905e9a7a04
---

{{DefaultAPISidebar("Encrypted Media Extensions")}} {{securecontext_header}}

Die **Encrypted Media Extensions API** stellt Schnittstellen zur Steuerung der Wiedergabe von Inhalten bereit, die einem digitalen Verwaltungsschema für Nutzungseinschränkungen unterliegen.

Der Zugriff auf diese API erfolgt über [`Navigator.requestMediaKeySystemAccess()`](/de/docs/Web/API/Navigator/requestMediaKeySystemAccess).

## Schnittstellen

- [`MediaEncryptedEvent`](/de/docs/Web/API/MediaEncryptedEvent)
  - : Repräsentiert ein bestimmtes [`encrypted`](/de/docs/Web/API/HTMLMediaElement/encrypted_event)-Ereignis, das ausgelöst wird, wenn ein [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement) einige Initialisierungsdaten erkennt.
- [`MediaKeyMessageEvent`](/de/docs/Web/API/MediaKeyMessageEvent)
  - : Enthält den Inhalt und die zugehörigen Daten, wenn das Content Decryption Module (CDM) eine Nachricht für die Sitzung generiert.
- [`MediaKeys`](/de/docs/Web/API/MediaKeys)
  - : Repräsentiert einen Satz von Schlüsseln, die ein zugehöriges [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement) zur Entschlüsselung von Mediendaten während der Wiedergabe verwenden kann.
- [`MediaKeySession`](/de/docs/Web/API/MediaKeySession)
  - : Repräsentiert einen Kontext für den Nachrichtenaustausch mit einem Content Decryption Module (CDM).
- [`MediaKeyStatusMap`](/de/docs/Web/API/MediaKeyStatusMap)
  - : Eine schreibgeschützte Zuordnung von Mediaschlüssel-Status nach Schlüssel-IDs.
- [`MediaKeySystemAccess`](/de/docs/Web/API/MediaKeySystemAccess)
  - : Bietet Zugang zu einem Schlüsselsystem zur Entschlüsselung und/oder einem Inhaltschutzanbieter.

### Erweiterungen für andere Schnittstellen

Die Encrypted Media Extensions API erweitert die folgenden APIs und fügt die aufgelisteten Funktionen hinzu.

#### HTMLMediaElement

- [`HTMLMediaElement.mediaKeys`](/de/docs/Web/API/HTMLMediaElement/mediaKeys) {{readonlyinline}}
  - : Stellt ein [`MediaKeys`](/de/docs/Web/API/MediaKeys)-Objekt bereit, das den Satz von Schlüsseln repräsentiert, die das Element zur Entschlüsselung von Mediendaten während der Wiedergabe verwenden kann.
- [`HTMLMediaElement.setMediaKeys()`](/de/docs/Web/API/HTMLMediaElement/setMediaKeys)
  - : Legt die [`MediaKeys`](/de/docs/Web/API/MediaKeys) fest, die zur Entschlüsselung von Medien während der Wiedergabe verwendet werden.
- [`encrypted`-Ereignis](/de/docs/Web/API/HTMLMediaElement/encrypted_event)
  - : Ereignis, das bei einem [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement) ausgelöst wird, wenn Initialisierungsdaten in den Medien erkannt werden, was darauf hinweist, dass sie verschlüsselt sind.

#### Navigator

- [`Navigator.requestMediaKeySystemAccess()`](/de/docs/Web/API/Navigator/requestMediaKeySystemAccess)
  - : Gibt ein {{jsxref('Promise')}} zurück, das sich zu einem [`MediaKeySystemAccess`](/de/docs/Web/API/MediaKeySystemAccess)-Objekt erfüllt, das verwendet werden kann, um auf ein bestimmtes Mediaschlüsselsystem zuzugreifen, mit dem wiederum Schlüssel zur Entschlüsselung eines Medienstreams erstellt werden können.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
