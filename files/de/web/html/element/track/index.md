---
title: "<track>: Das eingebettete Textspur-Element"
slug: Web/HTML/Element/track
l10n:
  sourceCommit: 8b02826c79b090b5af0d68ae1ef39f932a66a7f1
---

{{HTMLSidebar}}

Das **`<track>`** [HTML](/de/docs/Web/HTML) Element wird als Kind der Medienelemente {{HTMLElement("audio")}} und {{HTMLElement("video")}} verwendet. Jedes Track-Element ermöglicht es Ihnen, eine zeitgesteuerte Textspur (oder zeitbasierte Daten) anzugeben, die parallel zum Medienelement angezeigt werden kann, zum Beispiel um Untertitel oder geschlossene Untertitel über ein Video oder neben Audiotracks einzublenden.

Mehrere Spuren können für ein Medienelement angegeben werden, die unterschiedliche Arten von zeitgesteuerten Textdaten oder zeitgesteuerte Textdaten enthalten, die für verschiedene Sprachen übersetzt wurden. Die verwendeten Daten werden entweder die Spur sein, die als Standard festgelegt wurde, oder eine Art und Übersetzung, die auf den Benutzerpräferenzen basieren.

Die Spuren sind im [WebVTT-Format](/de/docs/Web/API/WebVTT_API) (`.vtt`-Dateien) formatiert — Web Video Text Tracks.

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

Dieses Element beinhaltet die [globalen Attribute](/de/docs/Web/HTML/Global_attributes).

- `default`
  - : Dieses Attribut zeigt an, dass die Spur aktiviert werden sollte, es sei denn, die Benutzerpräferenzen deuten darauf hin, dass eine andere Spur geeigneter ist. Dies darf nur auf einem `track`-Element pro Medienelement verwendet werden.
- `kind`

  - : Wie die Textspur verwendet werden soll. Wenn das Attribut weggelassen wird, ist die Standardart `subtitles`. Wenn das Attribut einen ungültigen Wert enthält, wird es `metadata` verwenden.
    Die folgenden Schlüsselwörter sind erlaubt:

    - `subtitles`

      - Untertitel bieten eine Übersetzung von Inhalten, die der Betrachter nicht versteht. Zum Beispiel gesprochene Sprache oder Text, der nicht in Englisch in einem englischen Film ist.
      - Untertitel können zusätzlichen Inhalt enthalten, normalerweise zusätzliche Hintergrundinformationen. Zum Beispiel der Text am Anfang der Star-Wars-Filme oder das Datum, die Uhrzeit und der Ort einer Szene.

    - `captions`

      - Geschlossene Untertitel bieten eine Transkription und möglicherweise eine Übersetzung von Audio.
      - Sie können wichtige nonverbale Informationen wie musikalische Hinweise oder Soundeffekte enthalten.
        Sie können die Quelle des Hinweises angeben (z.B. Musik, Text, Charakter).
      - Geeignet für Benutzer, die gehörlos sind oder wenn der Ton stummgeschaltet ist.

    - `chapters`

      - Kapitelüberschriften sind dazu gedacht, verwendet zu werden, wenn der Benutzer die Medienressource navigiert.

    - `metadata`

      - Spuren, die von Skripten verwendet werden. Nicht für den Benutzer sichtbar.

- `label`
  - : Ein für den Benutzer lesbarer Titel der Textspur, der vom Browser verwendet wird, um verfügbare Textspuren aufzulisten.
- `src`
  - : Adresse der Spur (`.vtt`-Datei). Muss eine gültige URL sein. Dieses Attribut muss angegeben werden und sein URL-Wert muss denselben Ursprung wie das Dokument haben, es sei denn, das übergeordnete Element {{HTMLElement("audio")}} oder {{HTMLElement("video")}} des `track`-Elements hat ein [`crossorigin`](/de/docs/Web/HTML/Attributes/crossorigin) Attribut.
- `srclang`
  - : Sprache der Spur-Textdaten. Sie muss ein gültiges [BCP 47](https://r12a.github.io/app-subtags/) Sprach-Tag sein. Wenn das `kind`-Attribut auf `subtitles` gesetzt ist, dann muss `srclang` definiert sein.

## Nutzungshinweise

### Track-Datentypen

Die Art der Daten, die `track` dem Medium hinzufügt, wird im `kind`-Attribut festgelegt, das Werte wie `subtitles`, `captions`, `chapters` oder `metadata` annehmen kann. Das Element verweist auf eine Quelldatei, die zeitgesteuerten Text enthält, den der Browser bereitstellt, wenn der Benutzer zusätzliche Daten anfordert.

Ein Medienelement kann nicht mehr als eine `track` mit demselben `kind`, `srclang` und `label` haben.

### Erkennung von Hinweisänderungen

Das zugrunde liegende [`TextTrack`](/de/docs/Web/API/TextTrack), das durch die [`track`](/de/docs/Web/API/HTMLTrackElement/track) Eigenschaft angezeigt wird, erhält ein `cuechange`-Ereignis jedes Mal, wenn sich der aktuell präsentierte Hinweis ändert. Dies geschieht auch dann, wenn die Spur nicht mit einem Medienelement verknüpft ist.

Wenn die Spur _mit_ einem Medienelement verknüpft ist, indem das `<track>`-Element als Kind des {{HTMLElement("audio")}} oder {{HTMLElement("video")}} Elements verwendet wird, wird das `cuechange`-Ereignis auch an das [`HTMLTrackElement`](/de/docs/Web/API/HTMLTrackElement) gesendet.

```js
let textTrackElem = document.getElementById("text-track");

textTrackElem.addEventListener("cuechange", (event) => {
  let cues = event.target.track.activeCues;
});
```

### Hinzufügen von Textspuren programmatisch

Die JavaScript-Schnittstelle, die das `<track>`-Element repräsentiert, ist [`HTMLTrackElement`](/de/docs/Web/API/HTMLTrackElement). Die der zugehörigen Textspur kann vom [`HTMLTrackElement.track`](/de/docs/Web/API/HTMLTrackElement/track)-Eigenschaft erhalten werden und ist vom Typ [`TextTrack`](/de/docs/Web/API/TextTrack).

`TextTrack` Objekte können auch zu einem [`HTMLVideoElement`](/de/docs/Web/API/HTMLVideoElement) oder [`HTMLAudioElement`](/de/docs/Web/API/HTMLAudioElement) Elementen mit der [`HTMLMediaElement.addTextTrack()`](/de/docs/Web/API/HTMLMediaElement/addTextTrack)-Methode hinzugefügt werden. Die mit einem Medienelement verbundenen `TextTrack` Objekte sind in einer [`TextTrackList`](/de/docs/Web/API/TextTrackList) gespeichert, die mit der [`HTMLMediaElement.textTracks`](/de/docs/Web/API/HTMLMediaElement/textTracks)-Eigenschaft abgerufen werden kann.

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

## Technische Übersicht

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/de/docs/Web/HTML/Content_categories">Inhaltskategorien</a>
      </th>
      <td>Keine</td>
    </tr>
    <tr>
      <th scope="row">Erlaubter Inhalt</th>
      <td>Keiner; es ist ein {{Glossary("void_element", "void element")}}.</td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>Muss ein Anfangstag haben und darf keinen Endtag haben.</td>
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
