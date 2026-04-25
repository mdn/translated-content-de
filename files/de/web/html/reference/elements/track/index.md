---
title: "`<track>` HTML-Einbettungselement für Textspuren"
short-title: <track>
slug: Web/HTML/Reference/Elements/track
l10n:
  sourceCommit: 599ae8b7ad414e91df473d91983f4ffc5cafabb3
---

Das **`<track>`** [HTML](/de/docs/Web/HTML) Element wird als Kind der Medienelemente, {{HTMLElement("audio")}} und {{HTMLElement("video")}}, verwendet. Jedes `track`-Element ermöglicht es Ihnen, eine zeitlich gesteuerte Textspur (oder zeitbasierte Daten) anzugeben, die parallel zum Medienelement angezeigt werden kann, zum Beispiel um Untertitel oder geschlossene Untertitel über einem Video oder neben Audio-Tracks zu überlagern.

Mehrere Spuren können für ein Medienelement angegeben werden, die unterschiedliche Arten von zeitlich gesteuerten Textdaten enthalten, oder zeitlich gesteuerte Textdaten, die für verschiedene Sprachen übersetzt wurden. Die verwendeten Daten stammen entweder von der Spur, die als Standard festgelegt wurde, oder von einer Art und Übersetzung basierend auf den Benutzerpräferenzen.

Die Spuren sind im [WebVTT-Format](/de/docs/Web/API/WebVTT_API) (`.vtt` Dateien) formatiert — Web Video Text Tracks.

{{InteractiveExample("HTML Demo: &lt;track&gt;", "tabbed-standard")}}

```html interactive-example
<video controls src="/shared-assets/videos/friday.mp4">
  <track
    default
    kind="captions"
    srclang="en"
    label="English"
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
  - : Dieses Attribut gibt an, dass die Spur aktiviert werden sollte, es sei denn, die Präferenzen des Benutzers zeigen an, dass eine andere Spur geeigneter ist. Dies darf nur auf einem `track`-Element pro Medienelement verwendet werden.
- `kind`
  - : Wie die Textspur verwendet werden soll. Wird es weggelassen, ist die Standardart `subtitles`. Wenn das Attribut einen ungültigen Wert enthält, wird es `metadata` verwenden.
    Die folgenden Schlüsselwörter sind erlaubt:
    - `subtitles`
      - : Untertitel bieten eine Transkription oder Übersetzung des Dialogs. Sie sind geeignet, wenn der Ton verfügbar, aber nicht verständlich ist, wie beispielsweise Sprache oder Text, der nicht in Englisch in einem englischsprachigen Film ist. Untertitel können zusätzliche Inhalte enthalten, normalerweise zusätzliche Hintergrundinformationen. Zum Beispiel der Text am Anfang der Star Wars-Filme oder das Datum, die Zeit und der Ort einer Szene. Die Informationen von Untertiteln ergänzen Audio und Video. Sie sind oft im Video selbst eingebettet, können aber auch separat bereitgestellt werden, insbesondere für komplette Filmübersetzungen.
    - `captions`
      - : Geschlossene Untertitel bieten eine Transkription oder Übersetzung des Dialogs, der Toneffekte, relevanter Musikhinweise und anderer relevanter Audioinformationen, wie die Quelle des Hinweises (z.B. Charakter, Umgebung). Sie sind geeignet, wenn der Ton nicht verfügbar oder nicht klar hörbar ist (z.B. weil er stummgeschaltet ist, von Umgebungsgeräuschen übertönt wird oder weil der Benutzer taub ist).
    - `descriptions`
      - : Beschreibungen fassen die _Video_-Komponente der Medienressource zusammen. Sie sollen als Audio synthetisiert werden, wenn die visuelle Komponente verdeckt, nicht verfügbar oder nicht nutzbar ist (z.B. weil der Benutzer mit der Anwendung ohne Bildschirm interagiert, während er fährt, oder weil der Benutzer blind ist).
    - `chapters`
      - : Kapitelüberschriften sollen verwendet werden, wenn der Benutzer durch die Medienressource navigiert.
    - `metadata`
      - : Spuren, die von Skripten verwendet werden. Nicht für den Benutzer sichtbar.

- `label`
  - : Ein vom Benutzer lesbarer Titel der Textspur, der vom Browser beim Auflisten der verfügbaren Textspuren verwendet wird.
- `src`
  - : Adresse der Spur (`.vtt` Datei). Muss eine gültige URL sein. Dieses Attribut muss angegeben werden und sein URL-Wert muss denselben Ursprung haben wie das Dokument — es sei denn, das {{HTMLElement("audio")}} oder {{HTMLElement("video")}} übergeordnete Element des `track`-Elements hat ein [`crossorigin`](/de/docs/Web/HTML/Reference/Attributes/crossorigin) Attribut.
- `srclang`
  - : Sprache der Textspur. Es muss ein gültiges {{Glossary("BCP_47_language_tag", "BCP 47 Sprach-Tag")}} sein. Wenn das `kind`-Attribut auf `subtitles` gesetzt ist, muss `srclang` definiert werden.

## Verwendungshinweise

### Datenarten der Spuren

Der Typ der Daten, die `track` zu den Medien hinzufügt, wird im `kind`-Attribut festgelegt, das die Werte `subtitles`, `captions`, `chapters` oder `metadata` annehmen kann. Das Element verweist auf eine Quelldatei, die zeitlich gesteuerten Text enthält, den der Browser bereitstellt, wenn der Benutzer zusätzliche Daten anfordert.

Ein Medienelement kann nicht mehr als eine `track`-Spur mit derselben `kind`, `srclang` und `label` haben.

### Erkennung von Hinweisänderungen

Die zugrunde liegende [`TextTrack`](/de/docs/Web/API/TextTrack), angegeben durch die [`track`](/de/docs/Web/API/HTMLTrackElement/track) Eigenschaft, erhält jedes Mal ein `cuechange`-Ereignis, wenn der aktuell präsentierte Hinweis geändert wird. Dies geschieht auch, wenn die Spur nicht mit einem Medienelement verknüpft ist.

Wenn die Spur _mit_ einem Medienelement verknüpft ist, indem das `<track>`-Element als Kind des {{HTMLElement("audio")}} oder {{HTMLElement("video")}}-Elements verwendet wird, wird das `cuechange`-Ereignis auch an das [`HTMLTrackElement`](/de/docs/Web/API/HTMLTrackElement) gesendet.

```js
let textTrackElem = document.getElementById("text-track");

textTrackElem.addEventListener("cuechange", (event) => {
  let cues = event.target.track.activeCues;
});
```

### Textspuren programmatisch hinzufügen

Die JavaScript-Schnittstelle, die das `<track>`-Element repräsentiert, ist [`HTMLTrackElement`](/de/docs/Web/API/HTMLTrackElement). Die Textspur, die mit einem Element verknüpft ist, kann von der [`HTMLTrackElement.track`](/de/docs/Web/API/HTMLTrackElement/track) Eigenschaft abgerufen werden und ist vom Typ [`TextTrack`](/de/docs/Web/API/TextTrack).

`TextTrack` Objekte können auch zu einem [`HTMLVideoElement`](/de/docs/Web/API/HTMLVideoElement) oder [`HTMLAudioElement`](/de/docs/Web/API/HTMLAudioElement) Elemente mithilfe der Methode [`HTMLMediaElement.addTextTrack()`](/de/docs/Web/API/HTMLMediaElement/addTextTrack) hinzugefügt werden. Die mit einem Medienelement verknüpften `TextTrack` Objekte sind in einer [`TextTrackList`](/de/docs/Web/API/TextTrackList) gespeichert, die über die [`HTMLMediaElement.textTracks`](/de/docs/Web/API/HTMLMediaElement/textTracks) Eigenschaft abgerufen werden kann.

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
      <td>Keine; es ist ein {{Glossary("void_element", "void-Element")}}.</td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>Muss ein öffnendes Tag haben und darf kein schließendes Tag haben.</td>
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

- [WebVTT Text Track Format](/de/docs/Web/API/WebVTT_API)
- [`HTMLMediaElement.textTracks`](/de/docs/Web/API/HTMLMediaElement/textTracks)
