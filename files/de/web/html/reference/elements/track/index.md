---
title: "<track>: Das eingebettete Textspur-Element"
slug: Web/HTML/Reference/Elements/track
l10n:
  sourceCommit: e7bc0ed5466f5834641d75d416fa81886cf6b37e
---

Das **`<track>`** [HTML](/de/docs/Web/HTML) Element wird als Kindelement der Medien-Elemente {{HTMLElement("audio")}} und {{HTMLElement("video")}} verwendet. Jedes `track`-Element erlaubt es Ihnen, eine zeitgesteuerte Textspur (oder zeitbasierte Daten) anzugeben, die parallel zum Medien-Element angezeigt werden kann, zum Beispiel um Untertitel oder geschlossene Untertitel über einem Video oder neben Audiotracks einzublenden.

Für ein Medien-Element können mehrere Spuren angegeben werden, die verschiedene Arten von zeitgesteuerten Textdaten oder übersetzte zeitgesteuerte Textdaten für verschiedene Sprachräume enthalten. Die verwendeten Daten sind entweder die Spur, die als Standard festgelegt wurde, oder eine Art und Übersetzung basierend auf den Benutzereinstellungen.

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

Dieses Element beinhaltet die [globalen Attribute](/de/docs/Web/HTML/Reference/Global_attributes).

- `default`
  - : Dieses Attribut zeigt an, dass die Spur aktiviert sein soll, es sei denn, die Benutzereinstellungen deuten darauf hin, dass eine andere Spur besser geeignet ist. Dies darf nur auf einem `track`-Element pro Medien-Element verwendet werden.
- `kind`
  - : Wie die Textspur verwendet werden soll. Wenn es nicht angegeben wird, ist die Standardart `subtitles`. Wenn das Attribut einen ungültigen Wert enthält, wird es `metadata` verwenden. Die folgenden Schlüsselwörter sind zulässig:
    - `subtitles`
      - Untertitel bieten eine Übersetzung von Inhalten, die vom Betrachter nicht verstanden werden können. Zum Beispiel Sprache oder Text, der in einem englischen Spielfilm nicht Englisch ist.
      - Untertitel können zusätzliche Inhalte enthalten, meist zusätzliche Hintergrundinformationen. Zum Beispiel der Text zu Beginn der Star Wars-Filme oder das Datum, die Uhrzeit und der Ort einer Szene.

    - `captions`
      - Geschlossene Untertitel bieten eine Transkription und möglicherweise eine Übersetzung von Audio.
      - Sie können wichtige non-verbale Informationen wie Musikhinweise oder Soundeffekte enthalten.
        Sie können die Quelle des Hinweises anzeigen (z. B. Musik, Text, Charakter).
      - Geeignet für Benutzer, die taub sind oder wenn der Ton stummgeschaltet ist.

    - `chapters`
      - Kapiteltitel sollen verwendet werden, wenn der Benutzer in der Medienstation navigiert.

    - `metadata`
      - Spuren, die von Skripts verwendet werden. Nicht sichtbar für den Benutzer.

- `label`
  - : Ein vom Benutzer lesbarer Titel der Textspur, den der Browser verwendet, wenn er verfügbare Textspuren auflistet.
- `src`
  - : Adresse der Spur (`.vtt`-Datei). Muss eine gültige URL sein. Dieses Attribut muss angegeben werden, und sein URL-Wert muss den gleichen Ursprung wie das Dokument haben - es sei denn, das übergeordnete {{HTMLElement("audio")}} oder {{HTMLElement("video")}}-Element des `track`-Elements hat ein [`crossorigin`](/de/docs/Web/HTML/Reference/Attributes/crossorigin) Attribut.
- `srclang`
  - : Sprache der Textspur-Daten. Es muss ein gültiges {{Glossary("BCP_47_language_tag", "BCP 47-Sprachtag")}} sein. Wenn das `kind`-Attribut auf `subtitles` gesetzt ist, muss `srclang` definiert sein.

## Anwendungshinweise

### Typen von Spur-Daten

Der Typ der Daten, die `track` zum Medium hinzufügt, wird im `kind`-Attribut festgelegt, das Werte von `subtitles`, `captions`, `chapters` oder `metadata` annehmen kann. Das Element verweist auf eine Quelldatei, die zeitgesteuerten Text enthält, den der Browser bereitstellt, wenn der Benutzer zusätzliche Daten anfordert.

Ein Medien-Element kann nicht mehr als eine `track` mit dem gleichen `kind`, `srclang` und `label` haben.

### Erkennen von Hinweisänderungen

Das zugrunde liegende [`TextTrack`](/de/docs/Web/API/TextTrack), angegeben durch die [`track`](/de/docs/Web/API/HTMLTrackElement/track)-Eigenschaft, empfängt ein `cuechange`-Ereignis jedes Mal, wenn der aktuell präsentierte Hinweis geändert wird. Dies geschieht, selbst wenn die Spur nicht mit einem Medien-Element verknüpft ist.

Wenn die Spur _mit_ einem Medien-Element verknüpft ist, indem das `<track>`-Element als Kindelement des {{HTMLElement("audio")}} oder {{HTMLElement("video")}}-Elements verwendet wird, wird das `cuechange`-Ereignis ebenfalls an das [`HTMLTrackElement`](/de/docs/Web/API/HTMLTrackElement) gesendet.

```js
let textTrackElem = document.getElementById("text-track");

textTrackElem.addEventListener("cuechange", (event) => {
  let cues = event.target.track.activeCues;
});
```

### Programmgesteuertes Hinzufügen von Textspuren

Die JavaScript-Schnittstelle, die das `<track>`-Element repräsentiert, ist [`HTMLTrackElement`](/de/docs/Web/API/HTMLTrackElement). Die mit einem Element verknüpfte Textspur kann über die [`HTMLTrackElement.track`](/de/docs/Web/API/HTMLTrackElement/track)-Eigenschaft abgerufen werden und ist vom Typ [`TextTrack`](/de/docs/Web/API/TextTrack).

`TextTrack`-Objekte können auch zu einem [`HTMLVideoElement`](/de/docs/Web/API/HTMLVideoElement) oder [`HTMLAudioElement`](/de/docs/Web/API/HTMLAudioElement) Elementen unter Verwendung der Methode [`HTMLMediaElement.addTextTrack()`](/de/docs/Web/API/HTMLMediaElement/addTextTrack) hinzugefügt werden. Die mit einem Medien-Element verknüpften `TextTrack`-Objekte werden in einer [`TextTrackList`](/de/docs/Web/API/TextTrackList) gespeichert, die mit der [`HTMLMediaElement.textTracks`](/de/docs/Web/API/HTMLMediaElement/textTracks)-Eigenschaft abgerufen werden kann.

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
      <th scope="row">Zulässige Inhalte</th>
      <td>Keine; es ist ein {{Glossary("void_element", "void element")}}.</td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>Muss ein Start-Tag haben und darf keinen End-Tag haben.</td>
    </tr>
    <tr>
      <th scope="row">Zulässige Eltern</th>
      <td>
        <p>
          Ein Medien-Element, {{HTMLElement("audio")}} oder {{HTMLElement("video")}}.
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
      <th scope="row">Zulässige ARIA-Rollen</th>
      <td>Keine <code>role</code> zulässig</td>
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
