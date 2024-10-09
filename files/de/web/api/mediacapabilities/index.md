---
title: MediaCapabilities
slug: Web/API/MediaCapabilities
l10n:
  sourceCommit: 49f6e40b12be0d6d897d3dab09caafbc093f7677
---

{{APIRef("Media Capabilities API")}}{{AvailableInWorkers}}

Die **`MediaCapabilities`**-Schnittstelle der [Media Capabilities API](/de/docs/Web/API/Media_Capabilities_API) bietet Informationen über die Decodierungsfähigkeiten des Geräts, des Systems und des Browsers. Die API kann verwendet werden, um den Browser über die Decodierungsfähigkeiten des Geräts basierend auf Codecs, Profil, Auflösung und Bitraten abzufragen. Diese Informationen können genutzt werden, um optimale Medienströme für den Benutzer bereitzustellen und zu bestimmen, ob die Wiedergabe flüssig und energieeffizient sein sollte.

Die Informationen werden über die **`mediaCapabilities`**-Eigenschaft der [`Navigator`](/de/docs/Web/API/Navigator) und [`WorkerNavigator`](/de/docs/Web/API/WorkerNavigator)-Schnittstellen abgerufen.

## Instanzmethoden

- [`MediaCapabilities.encodingInfo()`](/de/docs/Web/API/MediaCapabilities/encodingInfo)
  - : Bei Übergabe einer gültigen Medienkonfiguration wird ein Promise zurückgegeben, das Informationen darüber enthält, ob der Medientyp unterstützt wird und ob das Kodieren solcher Medien flüssig und energieeffizient wäre.
- [`MediaCapabilities.decodingInfo()`](/de/docs/Web/API/MediaCapabilities/decodingInfo)
  - : Bei Übergabe einer gültigen Medienkonfiguration wird ein Promise zurückgegeben, das Informationen darüber enthält, ob der Medientyp unterstützt wird und ob das Dekodieren solcher Medien flüssig und energieeffizient wäre.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die Methode [canPlayType()](/de/docs/Web/API/HTMLMediaElement/canPlayType) von [HTMLMediaElement](/de/docs/Web/API/HTMLMediaElement)
- Die Methode [isTypeSupported()](/de/docs/Web/API/MediaSource/isTypeSupported_static) von [MediaSource](/de/docs/Web/API/MediaSource)
- [`Navigator`](/de/docs/Web/API/Navigator)-Schnittstelle
