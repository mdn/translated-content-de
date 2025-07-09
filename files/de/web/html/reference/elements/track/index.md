---
title: "<track>: Das eingebettete Text-Track-Element"
slug: Web/HTML/Reference/Elements/track
l10n:
  sourceCommit: 0754cd805a8e010d2e3a2a065f634a3bcf358252
---

Das **`<track>`** [HTML](/de/docs/Web/HTML)-Element wird als Kind der Medien-Elemente {{HTMLElement("audio")}} und {{HTMLElement("video")}} verwendet. Jedes Track-Element ermöglicht es Ihnen, einen zeitlich abgestimmten Text-Track (oder zeitbasierte Daten) anzugeben, der parallel zum Medien-Element angezeigt werden kann, beispielsweise um Untertitel oder geschlossene Untertitel über ein Video oder zusammen mit Audio-Tracks anzuzeigen.

Mehrere Tracks können für ein Medien-Element angegeben werden, die unterschiedliche Arten von zeitlich abgestimmten Text-Daten enthalten oder zeitlich abgestimmte Text-Daten, die für verschiedene Regionen übersetzt wurden. Die verwendeten Daten stammen entweder von dem Track, der als Standard festgelegt wurde, oder von einer Art und Übersetzung basierend auf den Benutzerpräferenzen.

Die Tracks sind im [WebVTT-Format](/de/docs/Web/API/WebVTT_API) (`.vtt`-Dateien) formatiert — Web Video Text Tracks.

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
  - : Dieses Attribut gibt an, dass der Track aktiviert werden sollte, es sei denn, die Benutzerpräferenzen geben an, dass ein anderer Track besser geeignet ist. Dies darf nur auf einem `track`-Element pro Medien-Element verwendet werden.
- `kind`
  - : Wie der Text-Track verwendet werden soll. Wenn weggelassen, ist der Standardtyp `subtitles`. Wenn das Attribut einen ungültigen Wert enthält, wird `metadata` verwendet.
    Die folgenden Schlüsselwörter sind erlaubt:
    - `subtitles`
      - Untertitel bieten eine Übersetzung von Inhalten, die der Zuschauer nicht versteht. Zum Beispiel Sprache oder Text, der in einem englischsprachigen Film nicht Englisch ist.
      - Untertitel können zusätzliche Inhalte enthalten, in der Regel zusätzliche Hintergrundinformationen. Zum Beispiel der Text am Anfang der Star Wars-Filme oder das Datum, die Uhrzeit und der Ort einer Szene.

    - `captions`
      - Geschlossene Untertitel bieten eine Transkription und möglicherweise eine Übersetzung von Audio.
      - Es kann wichtige nonverbale Informationen wie Musikhinweise oder Soundeffekte enthalten.
        Es kann die Quelle des Hinweises angeben (z. B. Musik, Text, Charakter).
      - Geeignet für Benutzer, die taub sind oder wenn der Ton stummgeschaltet ist.

    - `chapters`
      - Kapiteltitel sind gedacht, um verwendet zu werden, wenn der Benutzer die Medienressource navigiert.

    - `metadata`
      - Tracks, die von Skripten verwendet werden. Nicht sichtbar für den Benutzer.

- `label`
  - : Ein benutzerlesbarer Titel des Text-Tracks, der vom Browser verwendet wird, wenn verfügbare Text-Tracks aufgelistet werden.
- `src`
  - : Adresse des Tracks (`.vtt`-Datei). Muss eine gültige URL sein. Dieses Attribut muss angegeben werden und sein URL-Wert muss den gleichen Ursprung wie das Dokument haben — es sei denn, das {{HTMLElement("audio")}} oder {{HTMLElement("video")}}-Elternteil des `track`-Elements hat ein [`crossorigin`](/de/docs/Web/HTML/Reference/Attributes/crossorigin)-Attribut.
- `srclang`
  - : Sprache der Track-Text-Daten. Es muss ein gültiger [BCP 47](https://r12a.github.io/app-subtags/)-Sprach-Tag sein. Wenn das `kind`-Attribut auf `subtitles` gesetzt ist, muss `srclang` definiert sein.

## Verwendungshinweise

### Track-Datentypen

Der Typ der Daten, die `track` zum Medium hinzufügt, wird im `kind`-Attribut festgelegt, das die Werte `subtitles`, `captions`, `chapters` oder `metadata` annehmen kann. Das Element verweist auf eine Quelldatei, die zeitlich abgestimmten Text enthält, den der Browser beim Anfordern zusätzlicher Daten durch den Benutzer bereitstellt.

Ein Medien-Element kann nicht mehr als einen `track` mit demselben `kind`, `srclang` und `label` haben.

### Erkennung von Cue-Änderungen

Der zugrundeliegende [`TextTrack`](/de/docs/Web/API/TextTrack), angezeigt durch die [`track`](/de/docs/Web/API/HTMLTrackElement/track)-Eigenschaft, erhält jedes Mal ein `cuechange`-Ereignis, wenn sich der aktuell dargestellte Cue ändert. Dies geschieht auch dann, wenn der Track keinem Medien-Element zugeordnet ist.

Wenn der Track _mit_ einem Medien-Element assoziiert ist, wobei das `<track>`-Element als Kind des {{HTMLElement("audio")}} oder {{HTMLElement("video")}}-Elements verwendet wird, wird das `cuechange`-Ereignis auch an das [`HTMLTrackElement`](/de/docs/Web/API/HTMLTrackElement) gesendet.

```js
let textTrackElem = document.getElementById("text-track");

textTrackElem.addEventListener("cuechange", (event) => {
  let cues = event.target.track.activeCues;
});
```

### Programmgesteuertes Hinzufügen von Text-Tracks

Das JavaScript-Interface, das das `<track>`-Element darstellt, ist [`HTMLTrackElement`](/de/docs/Web/API/HTMLTrackElement). Der mit einem Element verbundene Text-Track kann aus der [`HTMLTrackElement.track`](/de/docs/Web/API/HTMLTrackElement/track)-Eigenschaft abgerufen werden und ist vom Typ [`TextTrack`](/de/docs/Web/API/TextTrack).

`TextTrack`-Objekte können auch zu [`HTMLVideoElement`](/de/docs/Web/API/HTMLVideoElement) oder [`HTMLAudioElement`](/de/docs/Web/API/HTMLAudioElement)-Elementen hinzugefügt werden, indem die [`HTMLMediaElement.addTextTrack()`](/de/docs/Web/API/HTMLMediaElement/addTextTrack)-Methode verwendet wird. Die mit einem Medien-Element verbundenen `TextTrack`-Objekte werden in einer [`TextTrackList`](/de/docs/Web/API/TextTrackList) gespeichert, die mit der [`HTMLMediaElement.textTracks`](/de/docs/Web/API/HTMLMediaElement/textTracks)-Eigenschaft abgerufen werden kann.

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
      <td>Keine; es ist ein {{Glossary("void_element", "leeres Element")}}.</td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>Muss ein Start-Tag haben und darf keinen End-Tag haben.</td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Eltern</th>
      <td>
        <p>
          Ein Medien-Element, {{HTMLElement("audio")}} oder {{HTMLElement("video")}}.
        </p>
      </td>
    </tr>
    <tr>
      <th scope="row">Implizierte ARIA-Rolle</th>
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

- [WebVTT-Text-Track-Format](/de/docs/Web/API/WebVTT_API)
- [`HTMLMediaElement.textTracks`](/de/docs/Web/API/HTMLMediaElement/textTracks)
