---
title: "AudioSession: Eigenschaft type"
short-title: type
slug: Web/API/AudioSession/type
l10n:
  sourceCommit: 52a02663d8a43fb35ea80f1b276dab03d8dab9ef
---

{{APIRef("Audio Session API")}}{{SeeCompatTable}}

Die **`type`**-Eigenschaft der [`AudioSession`](/de/docs/Web/API/AudioSession)-Schnittstelle repräsentiert den Typ der Audio-Sitzung.

Der Audio-Sitzungstyp beschreibt die allgemeine Art der Audioausgabe einer Webseite und ermöglicht es der Plattform zu bestimmen, wie webbasierte Audioinhalte mit anderen auf dem Gerät abgespielten Audios interagieren sollen.

## Wert

Ein String, der den Audio-Sitzungstyp repräsentiert. Mögliche Werte sind:

- `"auto"`
  - : Der Standardwert. Der Benutzeragent wählt automatisch den Audio-Sitzungstyp basierend auf den von der Seite verwendeten Audio-APIs aus, gemäß einer festen Prioritätenreihenfolge — siehe [Auswahl des `auto`-Typs](/de/docs/Web/API/Audio_Session_API#auto_type_selection) für Details.
- `"playback"`
  - : Audio für die Medienwiedergabe, wie Video- oder Musikwiedergabe, Podcasts usw. Dies ist ein exklusiver Typ, der andere Wiedergabeaudios auf dem Gerät pausiert, aber möglicherweise nicht-Wiedergabeaudios (wie Benachrichtigungstöne) fortsetzen lässt.
- `"transient"`
  - : Kurzfristiges Audio, wie Benachrichtigungstöne. Dieser Typ wird normalerweise über anderen Audios abgespielt und kann dazu führen, dass diese geduckt (in der Lautstärke reduziert) werden.
- `"transient-solo"`
  - : Kurzfristiges Solo-Audio, wie Navigationsanweisungen oder Sprachansagen. Dieser Typ pausiert oder stummt alle anderen Audios und spielt exklusiv. Wenn das Audio endet, kann das zuvor abgespielte Audio fortgesetzt werden.
- `"ambient"`
  - : Ambient-Audio, das sich mit anderen Audioarten mischen kann. Dies ist nützlich, wenn Benutzer Audioinhalte von mehreren Seiten oder Anwendungen mischen möchten.
- `"play-and-record"`
  - : Audio für Aufnahme oder Echtzeitkommunikation. Dies ist geeignet, wenn das Mikrofon verwendet wird oder in Videokonferenzanwendungen.

## Beispiele

### Den Sitzungstyp für die Medienwiedergabe festlegen

```js
// Set the audio session type for music playback
navigator.audioSession.type = "playback";

// Play music
audioElement.play();
```

### Einrichten eines Videokonferenzgesprächs

```js
// Set up for video conferencing (both playback and recording)
navigator.audioSession.type = "play-and-record";

// Start video call
const stream = await navigator.mediaDevices.getUserMedia({
  audio: true,
  video: true,
});
localVideo.srcObject = stream;
```

### Verwendung von kurzzeitigem Audio für Benachrichtigungen

```js
// Set transient type for a notification sound
navigator.audioSession.type = "transient";

// Play notification
notificationSound.play();
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`AudioSession`](/de/docs/Web/API/AudioSession)
- [`Navigator.audioSession`](/de/docs/Web/API/Navigator/audioSession)
- [Audio Session API](/de/docs/Web/API/Audio_Session_API)
