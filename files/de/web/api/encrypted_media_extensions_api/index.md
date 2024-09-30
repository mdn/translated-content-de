---
title: Encrypted Media Extensions API
slug: Web/API/Encrypted_Media_Extensions_API
l10n:
  sourceCommit: 7b565c5f4610bea19c844f35532853624d87cde3
---

{{DefaultAPISidebar("Encrypted Media Extensions")}} {{securecontext_header}}

Die **Encrypted Media Extensions API** bietet Schnittstellen zur Steuerung der Wiedergabe von Inhalten, die einem digitalen Verwaltungssystem mit Einschränkungen unterliegen.

Der Zugriff auf diese API erfolgt über [`Navigator.requestMediaKeySystemAccess()`](/de/docs/Web/API/Navigator/requestMediaKeySystemAccess).

## Schnittstellen

- [`MediaEncryptedEvent`](/de/docs/Web/API/MediaEncryptedEvent)
  - : Repräsentiert ein spezielles [`encrypted`](/de/docs/Web/API/HTMLMediaElement/encrypted_event) Ereignis, das ausgelöst wird, wenn ein [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement) auf Initialisierungsdaten trifft.
- [`MediaKeyMessageEvent`](/de/docs/Web/API/MediaKeyMessageEvent)
  - : Enthält den Inhalt und die zugehörigen Daten, wenn das Inhaltentschlüsselungsmodul (CDM) eine Nachricht für die Sitzung generiert.
- [`MediaKeys`](/de/docs/Web/API/MediaKeys)
  - : Repräsentiert eine Gruppe von Schlüsseln, die ein verbundenes [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement) zur Entschlüsselung von Mediendaten während der Wiedergabe verwenden kann.
- [`MediaKeySession`](/de/docs/Web/API/MediaKeySession)
  - : Stellt einen Kontext für den Nachrichtenaustausch mit einem Inhaltentschlüsselungsmodul (CDM) dar.
- [`MediaKeyStatusMap`](/de/docs/Web/API/MediaKeyStatusMap)
  - : Eine schreibgeschützte Zuordnung der Medienschlüssel-Status nach Schlüssel-IDs.
- [`MediaKeySystemAccess`](/de/docs/Web/API/MediaKeySystemAccess)
  - : Bietet Zugriff auf ein Schlüsselsystem zur Entschlüsselung und/oder einen Inhaltschutzanbieter.

### Erweiterungen zu anderen Schnittstellen

Die Encrypted Media Extensions API erweitert die folgenden APIs und fügt die aufgeführten Funktionen hinzu.

#### HTMLMediaElement

- [`HTMLMediaElement.mediaKeys`](/de/docs/Web/API/HTMLMediaElement/mediaKeys) {{readonlyinline}}
  - : Bietet ein [`MediaKeys`](/de/docs/Web/API/MediaKeys) Objekt, das die Gruppe von Schlüsseln darstellt, die das Element zur Entschlüsselung von Mediendaten während der Wiedergabe verwenden kann.
- [`HTMLMediaElement.setMediaKeys()`](/de/docs/Web/API/HTMLMediaElement/setMediaKeys)
  - : Legt die [`MediaKeys`](/de/docs/Web/API/MediaKeys) fest, die zur Entschlüsselung von Medien während der Wiedergabe verwendet werden.
- [`encrypted` event](/de/docs/Web/API/HTMLMediaElement/encrypted_event)
  - : Ereignis, das auf einem [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement) ausgelöst wird, wenn Initialisierungsdaten in den Medien gefunden werden, was darauf hinweist, dass diese verschlüsselt sind.

#### Navigator

- [`Navigator.requestMediaKeySystemAccess()`](/de/docs/Web/API/Navigator/requestMediaKeySystemAccess)
  - : Gibt ein {{jsxref('Promise')}} zurück, das zu einem [`MediaKeySystemAccess`](/de/docs/Web/API/MediaKeySystemAccess) Objekt führt, das verwendet werden kann, um auf ein bestimmtes Medienschlüsselsystem zuzugreifen, das wiederum zur Erstellung von Schlüsseln zur Entschlüsselung eines Medienstroms verwendet werden kann.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
