---
title: "<track>: Das Embed Text Track Element"
slug: Web/HTML/Reference/Elements/track
l10n:
  sourceCommit: c1564acf160ef4b320fb7b89ab65211b9c50cf1b
---

{{HTMLSidebar}}

Das **`<track>`** [HTML](/de/docs/Web/HTML)-Element wird als Kind der Medienelemente {{HTMLElement("audio")}} und {{HTMLElement("video")}} verwendet. Jedes Track-Element ermöglicht es Ihnen, einen zeitgesteuerten Texttrack (oder zeitbasierte Daten) anzugeben, der parallel zum Medienelement angezeigt werden kann, um beispielsweise Untertitel oder geschlossene Untertitel auf ein Video oder neben Audiotracks zu legen.

Mehrere Tracks können für ein Medienelement angegeben werden, die verschiedene Arten von zeitgesteuerten Textdaten enthalten oder zeitgesteuerte Textdaten, die für verschiedene Lokalisierungen übersetzt wurden. Die verwendeten Daten sind entweder der Track, der als Standard festgelegt wurde, oder eine Art und Übersetzung basierend auf den Benutzervorlieben.

Die Tracks sind im [WebVTT-Format](/de/docs/Web/API/WebVTT_API) (`.vtt` Dateien) formatiert — Web Video Text Tracks.

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

Dieses Element umfasst die [globalen Attribute](/de/docs/Web/HTML/Reference/Global_attributes).

- `default`
  - : Dieses Attribut gibt an, dass der Track aktiviert werden sollte, es sei denn, die Benutzereinstellungen geben an, dass ein anderer Track geeigneter ist. Dies darf nur auf ein `track`-Element pro Medienelement angewendet werden.
- `kind`

  - : Wie der Texttrack verwendet werden soll. Wenn es weggelassen wird, ist der Standardtyp `subtitles`. Wenn das Attribut einen ungültigen Wert enthält, wird `metadata` verwendet.
    Die folgenden Schlüsselwörter sind erlaubt:

    - `subtitles`

      - Untertitel bieten eine Übersetzung von Inhalten, die der Betrachter nicht verstehen kann. Zum Beispiel gesprochener Text oder Text, der in einem englischsprachigen Film nicht auf Englisch ist.
      - Untertitel können zusätzliche Inhalte enthalten, normalerweise zusätzliche Hintergrundinformationen. Zum Beispiel der Text am Anfang der Star-Wars-Filme oder das Datum, die Uhrzeit und der Ort einer Szene.

    - `captions`

      - Geschlossene Untertitel bieten eine Transkription und möglicherweise eine Übersetzung von Audiodateien.
      - Sie können wichtige nonverbale Informationen wie Musikhinweise oder Soundeffekte enthalten.
        Sie können die Quelle des Hinweises angeben (z. B. Musik, Text, Charakter).
      - Geeignet für Benutzer, die gehörlos sind oder wenn der Ton stummgeschaltet ist.

    - `chapters`

      - Kapiteltitel sollen verwendet werden, wenn der Benutzer die Medienressource navigiert.

    - `metadata`

      - Tracks, die von Skripten verwendet werden. Für den Benutzer nicht sichtbar.

- `label`
  - : Ein für den Benutzer lesbarer Titel des Texttracks, der vom Browser verwendet wird, wenn verfügbare Texttracks aufgelistet werden.
- `src`
  - : Adresse des Tracks (`.vtt`-Datei). Muss eine gültige URL sein. Dieses Attribut muss angegeben werden und der Wert der URL muss denselben Ursprung wie das Dokument haben — es sei denn, das übergeordnete Element {{HTMLElement("audio")}} oder {{HTMLElement("video")}} des `track`-Elements hat ein [`crossorigin`](/de/docs/Web/HTML/Reference/Attributes/crossorigin)-Attribut.
- `srclang`
  - : Sprache der Track-Textdaten. Es muss ein gültiges [BCP 47](https://r12a.github.io/app-subtags/)-Sprachtag sein. Wenn das `kind`-Attribut auf `subtitles` gesetzt ist, muss `srclang` definiert sein.

## Nutzungshinweise

### Typen von Track-Daten

Der Typ der Daten, die `track` dem Medium hinzufügt, wird im `kind`-Attribut festgelegt, das Werte von `subtitles`, `captions`, `chapters` oder `metadata` annehmen kann. Das Element verweist auf eine Quelldatei, die zeitlich abgestimmten Text enthält, den der Browser bereitstellt, wenn der Benutzer zusätzliche Daten anfordert.

Ein Medienelement kann nicht mehr als einen `track` mit demselben `kind`, `srclang` und `label` haben.

### Erkennen von Cue-Änderungen

Das zugrunde liegende [`TextTrack`](/de/docs/Web/API/TextTrack), angezeigt durch die [`track`](/de/docs/Web/API/HTMLTrackElement/track)-Eigenschaft, erhält ein `cuechange`-Ereignis jedes Mal, wenn der aktuell angezeigte Hinweis geändert wird. Dies geschieht auch dann, wenn der Track nicht mit einem Medienelement verbunden ist.

Wenn der Track _mit_ einem Medienelement assoziiert ist, indem das `<track>`-Element als Kind des {{HTMLElement("audio")}}- oder {{HTMLElement("video")}}-Elements verwendet wird, wird das `cuechange`-Ereignis auch an das [`HTMLTrackElement`](/de/docs/Web/API/HTMLTrackElement) gesendet.

```js
let textTrackElem = document.getElementById("text-track");

textTrackElem.addEventListener("cuechange", (event) => {
  let cues = event.target.track.activeCues;
});
```

### Text-Tracks programmatisch hinzufügen

Das JavaScript-Interface, das das `<track>`-Element repräsentiert, ist [`HTMLTrackElement`](/de/docs/Web/API/HTMLTrackElement). Der mit einem Element assoziierte Texttrack kann von der [`HTMLTrackElement.track`](/de/docs/Web/API/HTMLTrackElement/track)-Eigenschaft abgerufen werden und ist vom Typ [`TextTrack`](/de/docs/Web/API/TextTrack).

`TextTrack`-Objekte können auch zu einem [`HTMLVideoElement`](/de/docs/Web/API/HTMLVideoElement) oder [`HTMLAudioElement`](/de/docs/Web/API/HTMLAudioElement)-Elementen mithilfe der [`HTMLMediaElement.addTextTrack()`](/de/docs/Web/API/HTMLMediaElement/addTextTrack)-Methode hinzugefügt werden. Die mit einem Medienelement verbundenen `TextTrack`-Objekte werden in einer [`TextTrackList`](/de/docs/Web/API/TextTrackList) gespeichert, die mit der [`HTMLMediaElement.textTracks`](/de/docs/Web/API/HTMLMediaElement/textTracks)-Eigenschaft abgerufen werden kann.

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
      <th scope="row">Erlaubte Inhalte</th>
      <td>Keine; ist ein {{Glossary("void_element", "leeres Element")}}.</td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>Muss ein Start-Tag haben und darf keinen End-Tag haben.</td>
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
        <a href="https://w3c.github.io/html-aria/#dfn-no-corresponding-role">Keine entsprechende Rolle</a>
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubte ARIA-Rollen</th>
      <td>Kein <code>role</code> erlaubt</td>
    </tr>
    <tr>
      <th scope="row">DOM-Interface</th>
      <td>[`HTMLTrackElement`](/de/docs/Web/API/HTMLTrackElement)</td>
    </tr>
  </tbody>
</table>

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebVTT-Texttrack-Format](/de/docs/Web/API/WebVTT_API)
- [`HTMLMediaElement.textTracks`](/de/docs/Web/API/HTMLMediaElement/textTracks)
