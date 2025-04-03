---
title: "<track>: Das Textspur-Element zum Einbetten"
slug: Web/HTML/Element/track
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

{{HTMLSidebar}}

Das **`<track>`** [HTML](/de/docs/Web/HTML) Element wird als Kind der Medienelemente {{HTMLElement("audio")}} und {{HTMLElement("video")}} verwendet. Jedes Track-Element erlaubt es Ihnen, eine zeitlich festgelegte Textspur (oder zeitbasierte Daten) anzugeben, die parallel zum Medienelement angezeigt werden kann, z.B. um Untertitel oder geschlossene Untertitel über ein Video oder neben Audiospuren zu überlagern.

Mehrere Spuren können für ein Medienelement angegeben werden, die unterschiedliche Arten von zeitlich festgelegten Textdaten enthalten oder zeitlich festgelegte Textdaten, die für verschiedene Regionen übersetzt wurden. Die verwendeten Daten werden entweder diejenige Spur sein, die als Standard festgelegt wurde, oder eine Art und Übersetzung basierend auf den Benutzerpräferenzen.

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

Dieses Element umfasst die [globalen Attribute](/de/docs/Web/HTML/Global_attributes).

- `default`
  - : Dieses Attribut zeigt an, dass die Spur aktiviert werden soll, es sei denn, die Benutzerpräferenzen zeigen an, dass eine andere Spur besser geeignet ist. Dieses Attribut darf nur auf einem `track` Element pro Medienelement verwendet werden.
- `kind`

  - : Wie die Textspur verwendet werden soll. Wenn weggelassen, ist die Standardart `subtitles`. Wenn das Attribut einen ungültigen Wert enthält, wird `metadata` verwendet.
    Die folgenden Schlüsselwörter sind erlaubt:

    - `subtitles`

      - Untertitel bieten eine Übersetzung von Inhalten, die der Betrachter nicht verstehen kann. Zum Beispiel Sprache oder Text, der in einem englischsprachigen Film nicht auf Englisch ist.
      - Untertitel können zusätzlichen Inhalt enthalten, in der Regel zusätzliche Hintergrundinformationen. Zum Beispiel der Text zu Beginn der Star Wars-Filme oder das Datum, die Uhrzeit und der Ort einer Szene.

    - `captions`

      - Geschlossene Untertitel bieten eine Transkription und möglicherweise eine Übersetzung von Audio.
      - Sie können wichtige nonverbale Informationen wie Musikhinweise oder Soundeffekte enthalten.
        Sie können die Quelle des Hinweises angeben (z.B. Musik, Text, Charakter).
      - Geeignet für Benutzer, die gehörlos sind oder wenn der Ton stummgeschaltet ist.

    - `chapters`

      - Kapiteltitel sollen verwendet werden, wenn der Benutzer die Medienressource navigiert.

    - `metadata`

      - Von Skripten verwendete Spuren. Nicht für den Benutzer sichtbar.

- `label`
  - : Ein für den Benutzer lesbarer Titel der Textspur, der vom Browser verwendet wird, wenn verfügbare Textspuren aufgelistet werden.
- `src`
  - : Adresse der Spur (`.vtt`-Datei). Muss eine gültige URL sein. Dieses Attribut muss angegeben werden, und der Wert der URL muss den gleichen Ursprung wie das Dokument haben — es sei denn, das {{HTMLElement("audio")}} oder {{HTMLElement("video")}} Eltern-Element des `track` Elements hat ein [`crossorigin`](/de/docs/Web/HTML/Attributes/crossorigin) Attribut.
- `srclang`
  - : Sprache der Textspurdaten. Es muss ein gültiger [BCP 47](https://r12a.github.io/app-subtags/) Sprach-Tag sein. Wenn das `kind` Attribut auf `subtitles` gesetzt ist, muss `srclang` definiert werden.

## Verwendungshinweise

### Track-Datentypen

Der Datentyp, den `track` zu dem Medium hinzufügt, wird im `kind` Attribut festgelegt, das Werte von `subtitles`, `captions`, `chapters` oder `metadata` annehmen kann. Das Element zeigt auf eine Quelldatei, die zeitlich festgelegte Texte enthält, die der Browser freigibt, wenn der Benutzer zusätzliche Daten anfordert.

Ein Medienelement kann nicht mehr als eine `track` mit derselben `kind`, `srclang` und `label` haben.

### Erkennung von Hinweisänderungen

Das zugrunde liegende [`TextTrack`](/de/docs/Web/API/TextTrack), angezeigt durch die [`track`](/de/docs/Web/API/HTMLTrackElement/track) Eigenschaft, erhält ein `cuechange` Ereignis jedes Mal, wenn der aktuell angezeigte Hinweis geändert wird. Dies geschieht selbst dann, wenn die Spur nicht mit einem Medienelement verknüpft ist.

Wenn die Spur _mit_ einem Medienelement verknüpft ist, wobei das `<track>` Element als Kind des {{HTMLElement("audio")}} oder {{HTMLElement("video")}} Elements verwendet wird, wird das `cuechange` Ereignis auch an das [`HTMLTrackElement`](/de/docs/Web/API/HTMLTrackElement) gesendet.

```js
let textTrackElem = document.getElementById("text-track");

textTrackElem.addEventListener("cuechange", (event) => {
  let cues = event.target.track.activeCues;
});
```

### Hinzufügen von Textspuren programmatisch

Das JavaScript-Interface, das das `<track>`-Element darstellt, ist [`HTMLTrackElement`](/de/docs/Web/API/HTMLTrackElement). Die Textspur, die mit einem Element verknüpft ist, kann aus der [`HTMLTrackElement.track`](/de/docs/Web/API/HTMLTrackElement/track) Eigenschaft erhalten werden und ist vom Typ [`TextTrack`](/de/docs/Web/API/TextTrack).

`TextTrack`-Objekte können auch zu einem [`HTMLVideoElement`](/de/docs/Web/API/HTMLVideoElement) oder [`HTMLAudioElement`](/de/docs/Web/API/HTMLAudioElement) Elementen mit der Methode [`HTMLMediaElement.addTextTrack()`](/de/docs/Web/API/HTMLMediaElement/addTextTrack) hinzugefügt werden. Die `TextTrack`-Objekte, die mit einem Medienelement verbunden sind, werden in einer [`TextTrackList`](/de/docs/Web/API/TextTrackList) gespeichert, die mittels der [`HTMLMediaElement.textTracks`](/de/docs/Web/API/HTMLMediaElement/textTracks) Eigenschaft abgerufen werden kann.

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
      <td>Keine; es ist ein {{Glossary("void_element", "void element")}}.</td>
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
      <th scope="row">Implizierte ARIA-Rolle</th>
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
