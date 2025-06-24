---
title: "<track>: Das Textspurelement für Einbettungen"
slug: Web/HTML/Reference/Elements/track
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{HTMLSidebar}}

Das **`<track>`**-[HTML](/de/docs/Web/HTML) Element wird als Kind der Medienelemente, {{HTMLElement("audio")}} und {{HTMLElement("video")}}, verwendet.
Jedes Track-Element ermöglicht es Ihnen, eine zeitgesteuerte Textspur (oder zeitbasierte Daten) anzugeben, die parallel zum Medienelement angezeigt werden kann, zum Beispiel um Untertitel oder geschlossene Untertitel auf einem Video zu überlagern oder neben Audiotracks anzuzeigen.

Für ein Medienelement können mehrere Spuren angegeben werden, die verschiedene Arten von zeitgesteuerten Textdaten enthalten oder zeitgesteuerte Textdaten, die für verschiedene Sprachausgaben übersetzt wurden.
Die verwendeten Daten sind entweder die Spur, die als Standard festgelegt wurde, oder eine Art und Übersetzung basierend auf den Benutzereinstellungen.

Die Spuren sind im [WebVTT-Format](/de/docs/Web/API/WebVTT_API) (`.vtt` Dateien) formatiert — Web Video Text Tracks.

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
  - : Dieses Attribut zeigt an, dass die Spur aktiviert werden sollte, es sei denn, die Benutzereinstellungen geben an, dass eine andere Spur geeigneter ist. Dies darf nur auf einem `track`-Element pro Medienelement verwendet werden.
- `kind`

  - : Wie die Textspur verwendet werden soll. Wird es weggelassen, ist die Standardart `subtitles`. Wenn das Attribut einen ungültigen Wert enthält, wird `metadata` verwendet.
    Die folgenden Schlüsselwörter sind erlaubt:

    - `subtitles`

      - Untertitel bieten eine Übersetzung von Inhalten, die der Betrachter nicht verstehen kann. Zum Beispiel Sprache oder Text, der nicht Englisch in einem englischsprachigen Film ist.
      - Untertitel können zusätzliche Inhalte enthalten, in der Regel zusätzliche Hintergrundinformationen. Zum Beispiel der Text zu Beginn der Star Wars-Filme oder das Datum, die Uhrzeit und der Ort einer Szene.

    - `captions`

      - Geschlossene Untertitel bieten eine Transkription und möglicherweise eine Übersetzung von Audio.
      - Sie können wichtige nonverbale Informationen wie Musikhinweise oder Soundeffekte enthalten.
        Sie können die Quelle des Hinweises angeben (z.B. Musik, Text, Charakter).
      - Geeignet für Benutzer, die gehörlos sind oder wenn der Ton stummgeschaltet ist.

    - `chapters`

      - Kapitelüberschriften sollen verwendet werden, wenn der Benutzer die Medienressource durchsucht.

    - `metadata`
      - Spuren, die von Skripten verwendet werden. Nicht für den Benutzer sichtbar.

- `label`
  - : Ein benutzerlesbarer Titel der Textspur, der vom Browser verwendet wird, wenn verfügbare Textspuren aufgelistet werden.
- `src`
  - : Adresse der Spur (`.vtt` Datei). Muss eine gültige URL sein. Dieses Attribut muss angegeben werden und sein URL-Wert muss denselben Ursprung wie das Dokument haben — es sei denn, das {{HTMLElement("audio")}} oder {{HTMLElement("video")}} Elternelement des `track` Elements hat ein [`crossorigin`](/de/docs/Web/HTML/Reference/Attributes/crossorigin) Attribut.
- `srclang`
  - : Sprache der Textspur-Daten. Es muss ein gültiges [BCP 47](https://r12a.github.io/app-subtags/) Sprach-Tag sein. Wenn das `kind`-Attribut auf `subtitles` gesetzt ist, muss `srclang` definiert sein.

## Verwendungshinweise

### Track-Datentypen

Der Typ der Daten, die `track` dem Medium hinzufügt, wird im `kind`-Attribut festgelegt, welches Werte wie `subtitles`, `captions`, `chapters` oder `metadata` annehmen kann. Das Element verweist auf eine Quelldatei, die zeitgesteuerten Text enthält, den der Browser anzeigt, wenn der Benutzer zusätzliche Daten anfordert.

Ein Medienelement kann nicht mehr als eine `track` mit demselben `kind`, `srclang` und `label` haben.

### Erkennen von Cue-Änderungen

Das zugrunde liegende [`TextTrack`](/de/docs/Web/API/TextTrack), das durch die [`track`](/de/docs/Web/API/HTMLTrackElement/track) Eigenschaft angezeigt wird, erhält jedes Mal ein `cuechange` Ereignis, wenn das derzeit präsentierte Cue geändert wird. Dies geschieht auch, wenn die Spur nicht mit einem Medienelement verbunden ist.

Wenn die Spur _mit_ einem Medienelement verbunden ist, indem das `<track>`-Element als Kind des {{HTMLElement("audio")}} oder {{HTMLElement("video")}} Elements verwendet wird, wird das `cuechange`-Ereignis auch an das [`HTMLTrackElement`](/de/docs/Web/API/HTMLTrackElement) gesendet.

```js
let textTrackElem = document.getElementById("text-track");

textTrackElem.addEventListener("cuechange", (event) => {
  let cues = event.target.track.activeCues;
});
```

### Textelemente programmatisch hinzufügen

Das JavaScript-Interface, das das `<track>`-Element repräsentiert, ist [`HTMLTrackElement`](/de/docs/Web/API/HTMLTrackElement).
Die mit einem Element verknüpfte Textspur kann aus der [`HTMLTrackElement.track`](/de/docs/Web/API/HTMLTrackElement/track) Eigenschaft abgerufen werden und ist vom Typ [`TextTrack`](/de/docs/Web/API/TextTrack).

`TextTrack`-Objekte können auch mithilfe der Methode [`HTMLMediaElement.addTextTrack()`](/de/docs/Web/API/HTMLMediaElement/addTextTrack) zu einem [`HTMLVideoElement`](/de/docs/Web/API/HTMLVideoElement) oder [`HTMLAudioElement`](/de/docs/Web/API/HTMLAudioElement) Element hinzugefügt werden.
Die `TextTrack`-Objekte, die mit einem Medienelement verknüpft sind, werden in einer [`TextTrackList`](/de/docs/Web/API/TextTrackList) gespeichert, die über die [`HTMLMediaElement.textTracks`](/de/docs/Web/API/HTMLMediaElement/textTracks) Eigenschaft abgerufen werden kann.

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
        <a href="https://w3c.github.io/html-aria/#dfn-no-corresponding-role">Keine entsprechende Rolle</a>
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

- [WebVTT-Textspurformat](/de/docs/Web/API/WebVTT_API)
- [`HTMLMediaElement.textTracks`](/de/docs/Web/API/HTMLMediaElement/textTracks)
