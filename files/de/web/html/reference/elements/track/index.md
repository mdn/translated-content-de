---
title: "<track>: Das eingebettete Textspur-Element"
slug: Web/HTML/Reference/Elements/track
l10n:
  sourceCommit: 1662a32f78dbecc4c36b77da820665bf4cc5f229
---

Das **`<track>`**-Element von [HTML](/de/docs/Web/HTML) wird als Kind der Medienelemente {{HTMLElement("audio")}} und {{HTMLElement("video")}} verwendet.
Jedes Track-Element ermöglicht es, eine zeitgesteuerte Textspur (oder zeitbasierte Daten) anzugeben, die parallel zum Medienelement angezeigt werden kann, z.B. um Untertitel oder geschlossene Untertitel auf einem Video zu überlagern oder neben Audiotracks anzuzeigen.

Es können mehrere Spuren für ein Medienelement angegeben werden, die unterschiedliche Arten von zeitgesteuerten Textdaten enthalten oder die für verschiedene Sprachen übersetzt wurden.
Die verwendeten Daten werden entweder die Spur sein, die als Standard festgelegt wurde, oder eine Art und Übersetzung basierend auf den Benutzereinstellungen.

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
  - : Dieses Attribut gibt an, dass die Spur aktiviert sein soll, es sei denn, die Benutzereinstellungen deuten darauf hin, dass eine andere Spur angemessener ist. Dieses Attribut darf nur an einem `track`-Element pro Medienelement verwendet werden.
- `kind`
  - : Gibt an, wie die Textspur verwendet werden soll. Wenn dieses Attribut weggelassen wird, ist der Standardtyp `subtitles`. Wenn das Attribut einen ungültigen Wert enthält, wird `metadata` verwendet.
    Die folgenden Schlüsselwörter sind erlaubt:
    - `subtitles`
      - : Untertitel bieten eine Transkription oder Übersetzung des Dialogs. Sie eignen sich, wenn der Ton verfügbar, aber nicht verständlich ist, wie bei Reden oder Text, der nicht Englisch ist, in einem englischsprachigen Film. Untertitel können zusätzliche Inhalte enthalten, in der Regel zusätzliche Hintergrundinformationen. Zum Beispiel der Text zu Beginn der Star-Wars-Filme oder das Datum, die Zeit und der Ort einer Szene. Die Informationen der Untertitel ergänzen die Audio- und Videoinhalte. Sie sind oft in das Video selbst eingebettet, können aber auch, insbesondere für Übersetzungen ganzer Filme, separat bereitgestellt werden.
    - `captions`
      - : Geschlossene Untertitel bieten eine Transkription oder Übersetzung des Dialogs, der Geräuscheffekte, relevanter musikalischer Hinweise und anderer relevanter Audiinformationen, wie der Quelle des Hinweises (z.B. Charakter, Umgebung). Sie eignen sich, wenn der Ton nicht verfügbar oder nicht klar hörbar ist (z.B. weil er stummgeschaltet ist, durch Umgebungsgeräusche übertönt wird oder weil der Benutzer taub ist).
    - `descriptions`
      - : Beschreibungen fassen die _video_ Komponente der Medienressource zusammen. Sie sind dazu gedacht, als Audio synthetisiert zu werden, wenn die visuelle Komponente verdeckt, nicht verfügbar oder nicht nutzbar ist (z.B. weil der Benutzer die Anwendung ohne Bildschirm während der Fahrt nutzt oder weil der Benutzer blind ist).
    - `chapters`
      - : Kapitelüberschriften sollen verwendet werden, wenn der Benutzer in der Medienressource navigiert.
    - `metadata`
      - : Von Skripten verwendete Spuren. Nicht sichtbar für den Benutzer.

- `label`
  - : Ein von Menschen lesbarer Titel der Textspur, der von der Browser verwendet wird, wenn verfügbare Textspuren aufgelistet werden.
- `src`
  - : Adresse der Spur (`.vtt`-Datei). Muss eine gültige URL sein. Dieses Attribut muss angegeben werden und sein URL-Wert muss den gleichen Ursprung wie das Dokument haben — es sei denn, das übergeordnete {{HTMLElement("audio")}}- oder {{HTMLElement("video")}}-Element des `track`-Elements hat ein [`crossorigin`](/de/docs/Web/HTML/Reference/Attributes/crossorigin)-Attribut.
- `srclang`
  - : Sprache der Textspur-Daten. Es muss ein gültiges {{Glossary("BCP_47_language_tag", "BCP 47 Sprach-Tag")}} sein. Wenn das `kind`-Attribut auf `subtitles` gesetzt ist, muss `srclang` definiert sein.

## Verwendungshinweise

### Track-Datentypen

Der Datentyp, den `track` dem Medium hinzufügt, wird im `kind`-Attribut festgelegt, das die Werte `subtitles`, `captions`, `chapters` oder `metadata` annehmen kann. Das Element zeigt auf eine Quelldatei, die zeitgesteuerten Text enthält, den der Browser bereitstellt, wenn der Benutzer zusätzliche Daten anfordert.

Ein Medienelement kann nicht mehr als einen `track` mit den gleichen Attributen `kind`, `srclang` und `label` haben.

### Erkennen von Cue-Änderungen

Der zugrunde liegende [`TextTrack`](/de/docs/Web/API/TextTrack), der durch die [`track`](/de/docs/Web/API/HTMLTrackElement/track)-Eigenschaft angegeben wird, erhält ein `cuechange`-Ereignis jedes Mal, wenn der aktuell präsentierte Cue geändert wird. Dies geschieht auch, wenn die Spur nicht mit einem Medienelement verknüpft ist.

Wenn die Spur _mit_ einem Medienelement verknüpft ist, indem das `<track>`-Element als Kind des {{HTMLElement("audio")}}- oder {{HTMLElement("video")}}-Elements verwendet wird, wird das `cuechange`-Ereignis auch an das [`HTMLTrackElement`](/de/docs/Web/API/HTMLTrackElement) gesendet.

```js
let textTrackElem = document.getElementById("text-track");

textTrackElem.addEventListener("cuechange", (event) => {
  let cues = event.target.track.activeCues;
});
```

### Hinzufügen von Textspuren per Programmierung

Die JavaScript-Schnittstelle, die das `<track>`-Element darstellt, ist [`HTMLTrackElement`](/de/docs/Web/API/HTMLTrackElement).
Die Textspur, die mit einem Element verknüpft ist, kann über die [`HTMLTrackElement.track`](/de/docs/Web/API/HTMLTrackElement/track)-Eigenschaft abgerufen werden und ist vom Typ [`TextTrack`](/de/docs/Web/API/TextTrack).

`TextTrack`-Objekte können auch über die [`HTMLMediaElement.addTextTrack()`](/de/docs/Web/API/HTMLMediaElement/addTextTrack)-Methode zu einem [`HTMLVideoElement`](/de/docs/Web/API/HTMLVideoElement) oder [`HTMLAudioElement`](/de/docs/Web/API/HTMLAudioElement)-Element hinzugefügt werden.
Die `TextTrack`-Objekte, die mit einem Medienelement verknüpft sind, werden in einer [`TextTrackList`](/de/docs/Web/API/TextTrackList) gespeichert und können über die [`HTMLMediaElement.textTracks`](/de/docs/Web/API/HTMLMediaElement/textTracks)-Eigenschaft abgerufen werden.

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
      <td>Muss einen Start-Tag haben und darf keinen End-Tag haben.</td>
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

- [WebVTT-Textspur-Format](/de/docs/Web/API/WebVTT_API)
- [`HTMLMediaElement.textTracks`](/de/docs/Web/API/HTMLMediaElement/textTracks)
