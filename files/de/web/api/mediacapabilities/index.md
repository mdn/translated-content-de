---
title: MediaCapabilities
slug: Web/API/MediaCapabilities
l10n:
  sourceCommit: 7b565c5f4610bea19c844f35532853624d87cde3
---

{{APIRef("Media Capabilities API")}}

Das **`MediaCapabilities`**-Interface der [Media Capabilities API](/de/docs/Web/API/Media_Capabilities_API) liefert Informationen über die Dekodierungsfähigkeiten des Geräts, des Systems und des Browsers. Die API kann verwendet werden, um den Browser nach den Dekodierungsfähigkeiten des Geräts basierend auf Codecs, Profil, Auflösung und Bitraten zu fragen. Die Informationen können verwendet werden, um dem Benutzer optimale Medienströme bereitzustellen und zu bestimmen, ob die Wiedergabe flüssig und energieeffizient sein sollte.

Die Informationen werden über die **`mediaCapabilities`**-Eigenschaft des [`Navigator`](/de/docs/Web/API/Navigator) und [`WorkerNavigator`](/de/docs/Web/API/WorkerNavigator) Interfaces abgerufen.

## Instanzmethoden

- [`MediaCapabilities.encodingInfo()`](/de/docs/Web/API/MediaCapabilities/encodingInfo)
  - : Wenn eine gültige Medienkonfiguration übergeben wird, gibt es ein Versprechen zurück, das Informationen darüber enthält, ob der Medientyp unterstützt wird und ob die Kodierung solcher Medien flüssig und energieeffizient wäre.
- [`MediaCapabilities.decodingInfo()`](/de/docs/Web/API/MediaCapabilities/decodingInfo)
  - : Wenn eine gültige Medienkonfiguration übergeben wird, gibt es ein Versprechen zurück, das Informationen darüber enthält, ob der Medientyp unterstützt wird und ob die Dekodierung solcher Medien flüssig und energieeffizient wäre.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Methode [canPlayType()](/de/docs/Web/API/HTMLMediaElement/canPlayType) von [HTMLMediaElement](/de/docs/Web/API/HTMLMediaElement)
- Methode [isTypeSupported()](/de/docs/Web/API/MediaSource/isTypeSupported_static) von [MediaSource](/de/docs/Web/API/MediaSource)
- [`Navigator`](/de/docs/Web/API/Navigator) Interface
