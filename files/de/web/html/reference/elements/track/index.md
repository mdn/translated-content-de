---
title: "<track>: Das Textspur-Einbettungselement"
slug: Web/HTML/Reference/Elements/track
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{HTMLSidebar}}

Das **`<track>`** [HTML](/de/docs/Web/HTML)-Element wird als Kind der Medienelemente {{HTMLElement("audio")}} und {{HTMLElement("video")}} verwendet.
Jedes Track-Element ermöglicht es, eine zeitgesteuerte Textspur (oder zeitrelevante Daten) anzugeben, die parallel mit dem Medienelement angezeigt werden kann, beispielsweise um Untertitel oder geschlossene Untertitel auf einem Video oder neben Audiotracks darzustellen.

Für ein Medienelement können mehrere Tracks angegeben werden, die verschiedene Arten von zeitgesteuerten Textdaten enthalten oder zeitgesteuerte Textdaten, die für verschiedene Sprachen übersetzt wurden.
Die verwendeten Daten stammen entweder von dem Track, der als Standard festgelegt wurde, oder von einer Art und Übersetzung basierend auf den Benutzereinstellungen.

Die Tracks werden im [WebVTT-Format](/de/docs/Web/API/WebVTT_API) (`.vtt`-Dateien) formatiert – Web Video Text Tracks.

{{InteractiveExample("HTML Demo: &lt;track&gt;", "tabbed-standard")}}

```html interactive-example
<video controls src="/shared-assets/videos/friday.mp4">
  <track
    default
    kind="captions"
    srclang="en"
    src="/shared-assets/misc/friday.vtt" />
  Download the
  <a href="/shared-assets/videos/friday.mp4">MP4</a>
  video, and
  <a href="/shared-assets/misc/friday.vtt">subtitles</a>.
</video>
```

```css interactive-example
video {
  width: 250px;
}

video::cue {
  font-size: 1rem;
}
```

## Attribute

Dieses Element enthält die [globalen Attribute](/de/docs/Web/HTML/Reference/Global_attributes).

- `default`
  - : Dieses Attribut gibt an, dass der Track aktiviert werden sollte, es sei denn, die Benutzereinstellungen deuten darauf hin, dass ein anderer Track geeigneter ist. Dieses Attribut darf nur auf einem `track`-Element pro Medienelement verwendet werden.
- `kind`
  - : Wofür die Textspur verwendet werden soll. Wenn es weggelassen wird, ist die Standardart `subtitles`. Wenn das Attribut einen ungültigen Wert enthält, wird `metadata` verwendet. Die folgenden Schlüsselwörter sind erlaubt:

    - `subtitles`
      - Untertitel bieten eine Übersetzung von Inhalten, die vom Zuschauer nicht verstanden werden können, z.B. Sprache oder Text, der in einem englischsprachigen Film nicht englisch ist.
      - Untertitel können zusätzliche Inhalte enthalten, in der Regel weitere Hintergrundinformationen. Zum Beispiel der Text zu Beginn der Star-Wars-Filme oder das Datum, die Uhrzeit und der Ort einer Szene.

    - `captions`
      - Geschlossene Untertitel bieten eine Transkription und möglicherweise eine Übersetzung von Audio.
      - Sie können wichtige nonverbale Informationen wie Musikhinweise oder Geräuscheffekte enthalten. Sie können die Quelle des Hinweises angeben (z. B. Musik, Text, Charakter).
      - Geeignet für Benutzer, die gehörlos sind oder wenn der Ton stummgeschaltet ist.

    - `chapters`
      - Kapiteltitel sollen verwendet werden, wenn der Benutzer durch die Medienressource navigiert.

    - `metadata`
      - Tracks, die von Skripten verwendet werden. Nicht sichtbar für den Benutzer.

- `label`
  - : Ein für den Benutzer lesbarer Titel der Textspur, der vom Browser beim Auflisten verfügbarer Textspuren verwendet wird.
- `src`
  - : Adresse des Tracks (`.vtt`-Datei). Muss eine gültige URL sein. Dieses Attribut muss angegeben werden, und sein URL-Wert muss denselben Ursprung wie das Dokument haben, es sei denn, das {{HTMLElement("audio")}}- oder {{HTMLElement("video")}}-Elternelement des `track`-Elements hat ein [`crossorigin`](/de/docs/Web/HTML/Reference/Attributes/crossorigin)-Attribut.
- `srclang`
  - : Sprache der Textspurdaten. Es muss ein gültiges [BCP 47](https://r12a.github.io/app-subtags/)-Sprachtag sein. Wenn das `kind`-Attribut auf `subtitles` gesetzt ist, muss `srclang` definiert sein.

## Nutzungshinweise

### Arten von Track-Daten

Die Art der Daten, die `track` zum Medium hinzufügt, wird im `kind`-Attribut festgelegt, welches die Werte `subtitles`, `captions`, `chapters` oder `metadata` annehmen kann. Das Element verweist auf eine Quelldatei, die zeitgesteuerten Text enthält, den der Browser bereitstellt, wenn der Benutzer zusätzliche Daten anfordert.

Ein Medienelement kann nicht mehr als eine `track`-Spur mit derselben `kind`-, `srclang`- und `label`-Kombination haben.

### Erkennen von Wechselsignalen

Das zugrundeliegende [`TextTrack`](/de/docs/Web/API/TextTrack), angezeigt durch die [`track`](/de/docs/Web/API/HTMLTrackElement/track)-Eigenschaft, erhält jedes Mal ein `cuechange`-Ereignis, wenn das aktuell angezeigte Signal gewechselt wird. Dies geschieht auch dann, wenn der Track nicht mit einem Medienelement verknüpft ist.

Wenn der Track _mit_ einem Medienelement verknüpft ist, indem das `<track>`-Element als Kind des {{HTMLElement("audio")}}- oder {{HTMLElement("video")}}-Elements verwendet wird, wird das `cuechange`-Ereignis auch an das [`HTMLTrackElement`](/de/docs/Web/API/HTMLTrackElement) gesendet.

```js
let textTrackElem = document.getElementById("text-track");

textTrackElem.addEventListener("cuechange", (event) => {
  let cues = event.target.track.activeCues;
});
```

### Texttracks programmatisch hinzufügen

Die JavaScript-Schnittstelle, die das `<track>`-Element darstellt, ist [`HTMLTrackElement`](/de/docs/Web/API/HTMLTrackElement).
Die mit einem Element assoziierte Textspur kann durch die [`HTMLTrackElement.track`](/de/docs/Web/API/HTMLTrackElement/track)-Eigenschaft abgerufen werden und ist vom Typ [`TextTrack`](/de/docs/Web/API/TextTrack).

`TextTrack`-Objekte können auch zu einem [`HTMLVideoElement`](/de/docs/Web/API/HTMLVideoElement) oder [`HTMLAudioElement`](/de/docs/Web/API/HTMLAudioElement)-Elementen mit der Methode [`HTMLMediaElement.addTextTrack()`](/de/docs/Web/API/HTMLMediaElement/addTextTrack) hinzugefügt werden.
Die `TextTrack`-Objekte, die mit einem Medienelement assoziiert sind, werden in einer [`TextTrackList`](/de/docs/Web/API/TextTrackList) gespeichert, die mit der [`HTMLMediaElement.textTracks`](/de/docs/Web/API/HTMLMediaElement/textTracks)-Eigenschaft abgerufen werden kann.

## Beispiele

```html
<video controls poster="/images/sample.gif">
  <source src="sample.mp4" type="video/mp4" />
  <source src="sample.ogv" type="video/ogv" />
  <track kind="captions" src="sampleCaptions.vtt" srclang="en" />
  <track kind="chapters" src="sampleChapters.vtt" srclang="en" />
  <track kind="subtitles" src="sampleSubtitles_de.vtt" srclang="de" />
  <track kind="subtitles" src="sampleSubtitles_en.vtt" srclang="en" />
  <track kind="subtitles" src="sampleSubtitles_ja.vtt" srclang="ja" />
  <track kind="subtitles" src="sampleSubtitles_oz.vtt" srclang="oz" />
  <track kind="metadata" src="keyStage1.vtt" srclang="en" label="Key Stage 1" />
  <track kind="metadata" src="keyStage2.vtt" srclang="en" label="Key Stage 2" />
  <track kind="metadata" src="keyStage3.vtt" srclang="en" label="Key Stage 3" />
  <!-- Fallback -->
  …
</video>
```

## Technische Zusammenfassung

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/de/docs/Web/HTML/Guides/Content_categories">Inhaltskategorien</a>
      </th>
      <td>Keine</td>
    </tr>
    <tr>
      <th scope="row">Erlaubter Inhalt</th>
      <td>Keine; es ist ein {{Glossary("void_element", "void element")}}.</td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>Muss ein Start-Tag haben und darf kein End-Tag haben.</td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Eltern</th>
      <td>
        <p>
          Ein Medienelement, {{HTMLElement("audio")}} oder {{HTMLElement("video")}}.
        </p>
      </td>
    </tr>
    <tr>
      <th scope="row">Implizite ARIA-Rolle</th>
      <td>
        <a href="https://www.w3.org/TR/html-aria/#dfn-no-corresponding-role">Keine entsprechende Rolle</a>
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubte ARIA-Rollen</th>
      <td>Keine <code>role</code> erlaubt</td>
    </tr>
    <tr>
      <th scope="row">DOM-Schnittstelle</th>
      <td>[`HTMLTrackElement`](/de/docs/Web/API/HTMLTrackElement)</td>
    </tr>
  </tbody>
</table>

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebVTT Textspur-Format](/de/docs/Web/API/WebVTT_API)
- [`HTMLMediaElement.textTracks`](/de/docs/Web/API/HTMLMediaElement/textTracks)
