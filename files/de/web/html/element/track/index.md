---
title: "<track>: Das Einbettungselement für Textspuren"
slug: Web/HTML/Element/track
l10n:
  sourceCommit: c99afd3cafe73c93831bd73ad1dac285c3c713b1
---

{{HTMLSidebar}}

Das **`<track>`** [HTML](/de/docs/Web/HTML) Element wird als Kind von Multimedia-Elementen wie {{HTMLElement("audio")}} und {{HTMLElement("video")}} verwendet. Jedes Track-Element ermöglicht es Ihnen, eine zeitgesteuerte Textspur (oder zeitbasierte Daten) zu definieren, die parallel zum Multimedia-Element angezeigt werden kann, zum Beispiel um Untertitel oder geschlossene Untertitel über ein Video oder neben Audiotracks zu legen.

Es können mehrere Spuren für ein Multimedia-Element angegeben werden, die verschiedene Arten von zeitgesteuerten Textdaten oder Übersetzungen für verschiedene Sprachen enthalten. Die verwendeten Daten stammen entweder von der Spur, die als Standard festgelegt wurde, oder von einer Art und Übersetzung basierend auf den Benutzereinstellungen.

Die Spuren sind im [WebVTT-Format](/de/docs/Web/API/WebVTT_API) (`.vtt` Dateien) formatiert — Web Video Text Tracks.

{{EmbedInteractiveExample("pages/tabbed/track.html", "tabbed-standard")}}

## Attribute

Dieses Element enthält die [globalen Attribute](/de/docs/Web/HTML/Global_attributes).

- `default`
  - : Dieses Attribut gibt an, dass die Spur aktiviert sein sollte, es sei denn, die Einstellungen des Benutzers geben an, dass eine andere Spur angemessener ist. Dieses Attribut darf nur auf einem `track`-Element pro Multimedia-Element verwendet werden.
- `kind`
  - : Wie die Textspur verwendet werden soll. Wenn nicht angegeben, ist die Standardart `subtitles`. Enthält das Attribut einen ungültigen Wert, wird `metadata` verwendet. Die folgenden Schlüsselwörter sind erlaubt:
    - `subtitles`
      - Untertitel liefern eine Übersetzung von Inhalten, die vom Zuschauer nicht verstanden werden können. Zum Beispiel Sprache oder Text, der in einem englischsprachigen Film nicht auf Englisch ist.
      - Untertitel können zusätzliche Inhalte enthalten, normalerweise zusätzliche Hintergrundinformationen. Beispielsweise der Text am Anfang der Star-Wars-Filme oder das Datum, die Uhrzeit und der Ort einer Szene.
    - `captions`
      - Geschlossene Untertitel liefern eine Transkription und möglicherweise eine Übersetzung von Audio.
      - Sie können wichtige nonverbale Informationen wie Musikhinweise oder Soundeffekte enthalten.
        Es kann die Quelle des Hinweises angeben (z. B. Musik, Text, Charakter).
      - Geeignet für Benutzer, die hörgeschädigt sind oder wenn der Ton stummgeschaltet ist.
    - `chapters`
      - Kapitelüberschriften sind gedacht, um verwendet zu werden, wenn der Benutzer das Medienressource navigiert.
    - `metadata`
      - Von Skripten verwendete Spuren. Für den Benutzer nicht sichtbar.
- `label`
  - : Ein benutzerlesbarer Titel der Textspur, der vom Browser beim Auflisten der verfügbaren Textspuren verwendet wird.
- `src`
  - : Adresse der Spur (`.vtt` Datei). Muss eine gültige URL sein. Dieses Attribut muss angegeben werden und sein URL-Wert muss denselben Ursprung wie das Dokument haben — es sei denn, das {{HTMLElement("audio")}} oder {{HTMLElement("video")}} Eltern-Element des `track`-Elements hat ein [`crossorigin`](/de/docs/Web/HTML/Attributes/crossorigin) Attribut.
- `srclang`
  - : Sprache der Spurtextdaten. Es muss ein gültiges [BCP 47](https://r12a.github.io/app-subtags/) Sprach-Tag sein. Wenn das `kind`-Attribut auf `subtitles` gesetzt ist, muss `srclang` definiert sein.

## Verwendungshinweise

### Typen von Track-Daten

Der Typ der Daten, die `track` zum Multimedia-Element hinzufügt, ist im `kind` Attribut festgelegt, welches die Werte `subtitles`, `captions`, `chapters` oder `metadata` annehmen kann. Das Element verweist auf eine Quelldatei, die zeitgesteuerten Text enthält, den der Browser bereitstellt, wenn der Benutzer zusätzliche Daten anfordert.

Ein Multimedia-Element kann nicht mehr als einen `track` mit derselben `kind`, `srclang` und `label` haben.

### Erkennen von Cue-Änderungen

Das zugrunde liegende [`TextTrack`](/de/docs/Web/API/TextTrack), angezeigt durch die [`track`](/de/docs/Web/API/HTMLTrackElement/track) Eigenschaft, erhält ein `cuechange` Ereignis jedes Mal, wenn der aktuell präsentierte Cue geändert wird. Dies geschieht auch, wenn die Spur nicht mit einem Multimedia-Element verknüpft ist.

Wenn die Spur mit einem Multimedia-Element verbunden _ist_, wobei das `<track>` Element als Kind des {{HTMLElement("audio")}} oder {{HTMLElement("video")}} Elements dient, wird das `cuechange` Ereignis auch an das [`HTMLTrackElement`](/de/docs/Web/API/HTMLTrackElement) gesendet.

```js
let textTrackElem = document.getElementById("texttrack");

textTrackElem.addEventListener("cuechange", (event) => {
  let cues = event.target.track.activeCues;
});
```

### Hinzufügen von Textspuren programmgesteuert

Das JavaScript-Interface, das das `<track>` Element repräsentiert, ist [`HTMLTrackElement`](/de/docs/Web/API/HTMLTrackElement).
Die Textspur, die mit einem Element verbunden ist, kann von der [`HTMLTrackElement.track`](/de/docs/Web/API/HTMLTrackElement/track) Eigenschaft abgerufen werden und ist vom Typ [`TextTrack`](/de/docs/Web/API/TextTrack).

`TextTrack` Objekte können auch zu [`HTMLVideoElement`](/de/docs/Web/API/HTMLVideoElement) oder [`HTMLAudioElement`](/de/docs/Web/API/HTMLAudioElement) Elementen hinzugefügt werden, indem die [`HTMLMediaElement.addTextTrack()`](/de/docs/Web/API/HTMLMediaElement/addTextTrack) Methode verwendet wird.
Die mit einem Multimedia-Element verbundenen `TextTrack` Objekte werden in einem [`TextTrackList`](/de/docs/Web/API/TextTrackList) gespeichert, die über die [`HTMLMediaElement.textTracks`](/de/docs/Web/API/HTMLMediaElement/textTracks) Eigenschaft abgerufen werden kann.

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
      <td>Keiner; es ist ein [leeres Element](/de/docs/Glossary/void_element).</td>
    </tr>
    <tr>
      <th scope="row">Tag Auslassung</th>
      <td>Muss einen Start-Tag haben und darf keinen End-Tag haben.</td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Eltern</th>
      <td>
        <p>
          Ein Multimedia-Element, {{HTMLElement("audio")}} oder {{HTMLElement("video")}}.
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
