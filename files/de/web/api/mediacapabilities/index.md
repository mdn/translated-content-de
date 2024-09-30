---
title: MediaCapabilities
slug: Web/API/MediaCapabilities
l10n:
  sourceCommit: 7b565c5f4610bea19c844f35532853624d87cde3
---

{{APIRef("Media Capabilities API")}}

Das **`MediaCapabilities`**-Interface der [Media Capabilities API](/de/docs/Web/API/Media_Capabilities_API) liefert Informationen über die Dekodierfähigkeiten des Geräts, Systems und Browsers. Die API kann verwendet werden, um den Browser über die Dekodierfähigkeiten des Geräts basierend auf Codecs, Profilen, Auflösung und Bitraten zu befragen. Diese Informationen können genutzt werden, um dem Benutzer optimale Medienströme bereitzustellen und zu bestimmen, ob die Wiedergabe reibungslos und energieeffizient sein sollte.

Die Informationen sind über die **`mediaCapabilities`**-Eigenschaft der [`Navigator`](/de/docs/Web/API/Navigator) und [`WorkerNavigator`](/de/docs/Web/API/WorkerNavigator)-Schnittstelle zugänglich.

## Instanzmethoden

- [`MediaCapabilities.encodingInfo()`](/de/docs/Web/API/MediaCapabilities/encodingInfo)
  - : Wenn eine gültige Medienkonfiguration übergeben wird, gibt es ein Versprechen zurück, das Informationen darüber enthält, ob der Medientyp unterstützt wird und ob das Kodieren solcher Medien reibungslos und energieeffizient wäre.
- [`MediaCapabilities.decodingInfo()`](/de/docs/Web/API/MediaCapabilities/decodingInfo)
  - : Wenn eine gültige Medienkonfiguration übergeben wird, gibt es ein Versprechen zurück, das Informationen darüber enthält, ob der Medientyp unterstützt wird und ob das Dekodieren solcher Medien reibungslos und energieeffizient wäre.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die Methode [canPlayType()](/de/docs/Web/API/HTMLMediaElement/canPlayType) des [HTMLMediaElement](/de/docs/Web/API/HTMLMediaElement)
- Die Methode [isTypeSupported()](/de/docs/Web/API/MediaSource/isTypeSupported_static) des [MediaSource](/de/docs/Web/API/MediaSource)
- [`Navigator`](/de/docs/Web/API/Navigator)-Schnittstelle
