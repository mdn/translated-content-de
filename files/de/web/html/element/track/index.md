---
title: "<track>: Das Embed Text Track-Element"
slug: Web/HTML/Element/track
l10n:
  sourceCommit: c99afd3cafe73c93831bd73ad1dac285c3c713b1
---

{{HTMLSidebar}}

Das **`<track>`** [HTML](/de/docs/Web/HTML)-Element wird als Kind der Medienelemente {{HTMLElement("audio")}} und {{HTMLElement("video")}} verwendet. Jedes Track-Element ermöglicht es Ihnen, einen zeitlich abgestimmten Texttrack (oder zeitbasierte Daten) anzugeben, der parallel mit dem Medienelement angezeigt werden kann, zum Beispiel um Untertitel oder geschlossene Untertitel auf einem Video oder neben Audio-Tracks anzuzeigen.

Für ein Medienelement können mehrere Tracks angegeben werden, die verschiedene Arten von zeitlich abgestimmten Textdaten enthalten oder für verschiedene Gebiete übersetzte zeitlich abgestimmte Textdaten. Die verwendeten Daten sind entweder der Track, der als Standard festgelegt wurde, oder eine Art und Übersetzung basierend auf Benutzervorlieben.

Die Tracks sind im [WebVTT-Format](/de/docs/Web/API/WebVTT_API) (`.vtt`-Dateien) formatiert — Web Video Text Tracks.

{{EmbedInteractiveExample("pages/tabbed/track.html", "tabbed-standard")}}

## Attribute

Dieses Element beinhaltet die [globalen Attribute](/de/docs/Web/HTML/Global_attributes).

- `default`
  - : Dieses Attribut gibt an, dass der Track aktiviert werden sollte, es sei denn, die Benutzereinstellungen deuten darauf hin, dass ein anderer Track passender ist. Dies darf nur auf einem `track`-Element pro Medienelement verwendet werden.
- `kind`

  - : Wie der Texttrack verwendet werden soll. Wenn weggelassen, ist die Standardeinstellung `subtitles`. Wenn das Attribut einen ungültigen Wert enthält, wird `metadata` verwendet. Die folgenden Schlüsselwörter sind zulässig:

    - `subtitles`

      - Untertitel bieten eine Übersetzung von Inhalten, die der Zuschauer nicht versteht. Zum Beispiel Sprache oder Text, der in einem englischsprachigen Film nicht Englisch ist.
      - Untertitel können zusätzliche Inhalte enthalten, in der Regel zusätzliche Hintergrundinformationen. Zum Beispiel der Text zu Beginn der Star Wars-Filme oder das Datum, die Zeit und der Ort einer Szene.

    - `captions`

      - Geschlossene Untertitel bieten eine Transkription und möglicherweise eine Übersetzung der Audioinhalte.
      - Sie können wichtige nicht-verbale Informationen wie Musikhinweise oder Soundeffekte beinhalten.
        Sie können die Quelle des Hinweises angeben (z. B. Musik, Text, Charakter).
      - Geeignet für Benutzer, die taub sind, oder wenn der Ton stummgeschaltet ist.

    - `chapters`

      - Kapitelüberschriften sind dafür gedacht, verwendet zu werden, wenn der Benutzer durch die Medienressource navigiert.

    - `metadata`

      - Tracks, die von Skripten verwendet werden. Für den Benutzer nicht sichtbar.

- `label`
  - : Ein benutzerlesbarer Titel des Texttracks, der vom Browser genutzt wird, wenn verfügbare Texttracks aufgelistet werden.
- `src`
  - : Adresse des Tracks (`.vtt`-Datei). Muss eine gültige URL sein. Dieses Attribut muss angegeben werden und sein URL-Wert muss denselben Ursprung wie das Dokument haben — es sei denn, das übergeordnete Element {{HTMLElement("audio")}} oder {{HTMLElement("video")}} des `track`-Elements hat ein [`crossorigin`](/de/docs/Web/HTML/Attributes/crossorigin) Attribut.
- `srclang`
  - : Sprache der Track-Textdaten. Es muss ein gültiges [BCP 47](https://r12a.github.io/app-subtags/) Sprachkennzeichen sein. Wenn das `kind`-Attribut auf `subtitles` gesetzt ist, muss `srclang` definiert sein.

## Verwendungshinweise

### Track-Datentypen

Der Typ der Daten, die `track` dem Medium hinzufügt, wird im `kind`-Attribut festgelegt, das Werte wie `subtitles`, `captions`, `chapters` oder `metadata` annehmen kann. Das Element verweist auf eine Quelldatei, die zeitlich abgestimmten Text enthält, den der Browser anzeigt, wenn der Benutzer zusätzliche Daten anfordert.

Ein Medienelement kann nicht mehr als einen `track` mit demselben `kind`, `srclang` und `label` haben.

### Erkennung von Cue-Änderungen

Der zugrunde liegende [`TextTrack`](/de/docs/Web/API/TextTrack), der durch die [`track`](/de/docs/Web/API/HTMLTrackElement/track) Eigenschaft angezeigt wird, erhält ein `cuechange`-Ereignis jedes Mal, wenn der aktuell dargestellte Cue geändert wird. Dies geschieht auch, wenn der Track nicht mit einem Medienelement verknüpft ist.

Wenn der Track _mit_ einem Medienelement verknüpft ist, also das `<track>`-Element als Kind des {{HTMLElement("audio")}} oder {{HTMLElement("video")}}-Elements verwendet wird, wird das `cuechange`-Ereignis auch an das [`HTMLTrackElement`](/de/docs/Web/API/HTMLTrackElement) gesendet.

```js
let textTrackElem = document.getElementById("texttrack");

textTrackElem.addEventListener("cuechange", (event) => {
  let cues = event.target.track.activeCues;
});
```

### Hinzufügen von Texttracks programmatisch

Das JavaScript-Interface, das das `<track>`-Element repräsentiert, ist [`HTMLTrackElement`](/de/docs/Web/API/HTMLTrackElement). Der mit einem Element verknüpfte Texttrack kann über die [`HTMLTrackElement.track`](/de/docs/Web/API/HTMLTrackElement/track)-Eigenschaft abgerufen werden und ist vom Typ [`TextTrack`](/de/docs/Web/API/TextTrack).

`TextTrack`-Objekte können auch zu [`HTMLVideoElement`](/de/docs/Web/API/HTMLVideoElement)- oder [`HTMLAudioElement`](/de/docs/Web/API/HTMLAudioElement)-Elementen über die Methode [`HTMLMediaElement.addTextTrack()`](/de/docs/Web/API/HTMLMediaElement/addTextTrack) hinzugefügt werden. Die `TextTrack`-Objekte, die mit einem Medienelement verknüpft sind, werden in einer [`TextTrackList`](/de/docs/Web/API/TextTrackList) gespeichert, die mittels der [`HTMLMediaElement.textTracks`](/de/docs/Web/API/HTMLMediaElement/textTracks)-Eigenschaft abgerufen werden kann.

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
        <a href="/de/docs/Web/HTML/Content_categories">Inhaltskategorien</a>
      </th>
      <td>Keine</td>
    </tr>
    <tr>
      <th scope="row">Erlaubter Inhalt</th>
      <td>Keine; es ist ein [leeres Element](/de/docs/Glossary/void_element).</td>
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

- [WebVTT Texttrack-Format](/de/docs/Web/API/WebVTT_API)
- [`HTMLMediaElement.textTracks`](/de/docs/Web/API/HTMLMediaElement/textTracks)
