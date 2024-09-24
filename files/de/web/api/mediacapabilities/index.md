---
title: MediaFähigkeiten
slug: Web/API/MediaCapabilities
l10n:
  sourceCommit: 7b565c5f4610bea19c844f35532853624d87cde3
---

{{APIRef("Media Capabilities API")}}

Das **`MediaCapabilities`**-Interface der [Media Capabilities API](/de/docs/Web/API/Media_Capabilities_API) liefert Informationen über die Dekodierungsfähigkeiten des Geräts, Systems und Browsers. Die API kann verwendet werden, um den Browser über die Dekodierungsfähigkeiten des Geräts basierend auf Codecs, Profil, Auflösung und Bitraten zu befragen. Die Informationen können verwendet werden, um dem Benutzer optimale Medienstreams bereitzustellen und festzustellen, ob die Wiedergabe flüssig und energieeffizient sein sollte.

Die Informationen werden über die **`mediaCapabilities`**-Eigenschaft des {{domxref("Navigator")}} und {{domxref("WorkerNavigator")}}-Interfaces abgerufen.

## Instanzmethoden

- {{domxref("MediaCapabilities.encodingInfo()")}}
  - : Bei Übergabe einer gültigen Medienkonfiguration gibt sie ein Promise zurück, mit Informationen darüber, ob der Medientyp unterstützt wird und ob das Kodieren solcher Medien flüssig und energieeffizient wäre.
- {{domxref("MediaCapabilities.decodingInfo()")}}
  - : Bei Übergabe einer gültigen Medienkonfiguration gibt sie ein Promise zurück, mit Informationen darüber, ob der Medientyp unterstützt wird und ob das Dekodieren solcher Medien flüssig und energieeffizient wäre.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die Methode [canPlayType()](/de/docs/Web/API/HTMLMediaElement/canPlayType) von [HTMLMediaElement](/de/docs/Web/API/HTMLMediaElement)
- Die Methode [isTypeSupported()](/de/docs/Web/API/MediaSource/isTypeSupported_static) von [MediaSource](/de/docs/Web/API/MediaSource)
- {{domxref("Navigator")}}-Interface
