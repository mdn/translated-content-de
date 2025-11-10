---
title: "<track>: Das eingebettete Text-Track-Element"
slug: Web/HTML/Reference/Elements/track
l10n:
  sourceCommit: 41db8c95b49ec2ca65776ef5c2eafed616b1510b
---

Das **`<track>`**-Element von [HTML](/de/docs/Web/HTML) wird als Kind der Media-Elemente, {{HTMLElement("audio")}} und {{HTMLElement("video")}}, verwendet. Jedes `track`-Element ermöglicht es Ihnen, ein zeitgesteuertes Text-Track (oder zeitbasierte Daten) anzugeben, das parallel zum Medien-Element angezeigt werden kann, um beispielsweise Untertitel oder geschlossene Untertitel über ein Video oder neben Audiotracks anzuzeigen.

Mehrere Tracks können für ein Medien-Element angegeben werden, die verschiedene Arten von zeitgesteuerten Text-Daten oder zeitgesteuerte Text-Daten enthalten, die für verschiedene Zielsprachen übersetzt wurden. Die verwendeten Daten sind entweder der Track, der als Standard festgelegt wurde, oder eine Art und Übersetzung basierend auf den Benutzereinstellungen.

Die Tracks sind im [WebVTT-Format](/de/docs/Web/API/WebVTT_API) (`.vtt`-Dateien) formatiert — Web Video Text Tracks.

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

Dieses Element enthält die [globalen Attribute](/de/docs/Web/HTML/Reference/Global_attributes).

- `default`
  - : Dieses Attribut zeigt an, dass der Track aktiviert sein sollte, es sei denn, die Benutzereinstellungen geben an, dass ein anderer Track besser geeignet ist. Dieses Attribut darf nur auf einem `track`-Element pro Medien-Element verwendet werden.
- `kind`
  - : Wie der Text-Track verwendet werden soll. Wenn es ausgelassen wird, ist die Standardart `subtitles`. Wenn das Attribut einen ungültigen Wert enthält, wird `metadata` verwendet.
    Folgende Schlüsselwörter sind erlaubt:
    - `subtitles`
      - : Untertitel bieten die Transkription oder Übersetzung des Dialogs. Sie sind geeignet für Situationen, in denen der Ton verfügbar ist, aber nicht verstanden wird, wie bei einer Sprache oder einem Text, der nicht Englisch in einem englischsprachigen Film ist. Untertitel können zusätzliche Inhalte enthalten, normalerweise Hintergrundinformationen. Zum Beispiel der Text am Anfang der Star-Wars-Filme oder Datum, Uhrzeit und Ort einer Szene. Informationen zu Untertiteln ergänzen die Audio- und Video-Daten. Sie sind oft direkt im Video eingebettet, können aber auch separat bereitgestellt werden, insbesondere für Übersetzungen von ganzen Filmen.
    - `captions`
      - : Geschlossene Untertitel bieten die Transkription oder Übersetzung des Dialogs, Soundeffekte, relevante musikalische Hinweise und andere relevante Audioinformationen, wie die Quelle des Hinweises (z. B. Charakter, Umgebung). Sie sind für Situationen geeignet, in denen der Ton nicht verfügbar oder nicht klar hörbar ist (z. B. weil er stummgeschaltet ist, durch Umgebungsgeräusche übertönt wird oder weil der Benutzer taub ist).
    - `descriptions`
      - : Beschreibungen fassen die _Video_-Komponente der Medienressource zusammen. Sie sollen als Audio wiedergegeben werden, wenn die visuelle Komponente verdeckt, nicht verfügbar oder nicht nutzbar ist (z. B. weil der Benutzer die Anwendung ohne Bildschirm verwendet, während er fährt, oder weil der Benutzer blind ist).
    - `chapters`
      - : Kapiteltitel sollen verwendet werden, wenn der Benutzer die Medienressource navigiert.
    - `metadata`
      - : Tracks, die von Skripten verwendet werden. Nicht sichtbar für den Benutzer.

- `label`
  - : Ein vom Benutzer lesbarer Titel des Text-Tracks, der vom Browser bei der Auflistung verfügbarer Text-Tracks verwendet wird.
- `src`
  - : Adresse des Tracks (`.vtt`-Datei). Muss eine gültige URL sein. Dieses Attribut muss angegeben werden und sein URL-Wert muss den gleichen Ursprung haben wie das Dokument — es sei denn, das übergeordnete Element {{HTMLElement("audio")}} oder {{HTMLElement("video")}} des `track`-Elements hat ein [`crossorigin`](/de/docs/Web/HTML/Reference/Attributes/crossorigin)-Attribut.
- `srclang`
  - : Sprache der Textdaten des Tracks. Es muss ein gültiger {{Glossary("BCP_47_language_tag", "BCP 47 Sprach-Tag")}} sein. Wenn das `kind`-Attribut auf `subtitles` gesetzt ist, muss `srclang` definiert sein.

## Hinweise zur Verwendung

### Arten von Track-Daten

Die Art der Daten, die `track` dem Medium hinzufügt, wird im `kind`-Attribut festgelegt, das die Werte `subtitles`, `captions`, `chapters` oder `metadata` annehmen kann. Das Element verweist auf eine Quelldatei, die zeitgesteuerten Text enthält, den der Browser anzeigt, wenn der Benutzer zusätzliche Daten anfordert.

Ein Medien-Element darf nicht mehr als einen `track` mit demselben `kind`, `srclang` und `label` haben.

### Erkennen von Cue-Änderungen

Der zugrunde liegende [`TextTrack`](/de/docs/Web/API/TextTrack), der durch die [`track`](/de/docs/Web/API/HTMLTrackElement/track)-Eigenschaft angegeben ist, erhält jedes Mal ein `cuechange`-Ereignis, wenn sich der gerade präsentierte Cue ändert. Dies geschieht auch, wenn der Track nicht mit einem Medien-Element verknüpft ist.

Wenn der Track _mit_ einem Medien-Element verknüpft ist, indem das `<track>`-Element als Kind des {{HTMLElement("audio")}}- oder {{HTMLElement("video")}}-Elements verwendet wird, wird das `cuechange`-Ereignis auch an das [`HTMLTrackElement`](/de/docs/Web/API/HTMLTrackElement) gesendet.

```js
let textTrackElem = document.getElementById("text-track");

textTrackElem.addEventListener("cuechange", (event) => {
  let cues = event.target.track.activeCues;
});
```

### Programmatisches Hinzufügen von Text-Tracks

Die JavaScript-Schnittstelle, die das `<track>`-Element repräsentiert, ist [`HTMLTrackElement`](/de/docs/Web/API/HTMLTrackElement). Der Text-Track, der einem Element zugeordnet ist, kann über die [`HTMLTrackElement.track`](/de/docs/Web/API/HTMLTrackElement/track)-Eigenschaft abgerufen werden und ist vom Typ [`TextTrack`](/de/docs/Web/API/TextTrack).

`TextTrack`-Objekte können auch zu einem [`HTMLVideoElement`](/de/docs/Web/API/HTMLVideoElement) oder [`HTMLAudioElement`](/de/docs/Web/API/HTMLAudioElement)-Elementen mit der [`HTMLMediaElement.addTextTrack()`](/de/docs/Web/API/HTMLMediaElement/addTextTrack)-Methode hinzugefügt werden. Die `TextTrack`-Objekte, die mit einem Medien-Element verknüpft sind, werden in einem [`TextTrackList`](/de/docs/Web/API/TextTrackList) gespeichert, das mit der [`HTMLMediaElement.textTracks`](/de/docs/Web/API/HTMLMediaElement/textTracks)-Eigenschaft abgerufen werden kann.

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
      <th scope="row">Erlaubte ARIA Rollen</th>
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
