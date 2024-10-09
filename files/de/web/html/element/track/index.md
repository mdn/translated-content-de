---
title: "<track>: Das eingebettete Text-Track-Element"
slug: Web/HTML/Element/track
l10n:
  sourceCommit: 783ffd9c1cf35421242e028a1b8743cf2b1918dd
---

{{HTMLSidebar}}

Das **`<track>`**-Element [HTML](/de/docs/Web/HTML) wird als Kind der Media-Elemente {{HTMLElement("audio")}} und {{HTMLElement("video")}} verwendet.
Jedes Track-Element lässt Sie eine zeitgesteuerte Textspur (oder zeitbasierte Daten) angeben, die parallel zu dem Media-Element angezeigt werden kann, um beispielsweise Untertitel oder geschlossene Untertitel über ein Video oder neben Audiospuren einzublenden.

Mehrere Tracks können für ein Media-Element angegeben werden, die verschiedene Arten von zeitgesteuerten Textdaten enthalten, oder zeitgesteuerte Textdaten, die für verschiedene Sprachen übersetzt wurden.
Die verwendeten Daten sind entweder der Track, der als Standard festgelegt wurde, oder eine Art und Übersetzung basierend auf den Benutzervorlieben.

Die Tracks sind im [WebVTT-Format](/de/docs/Web/API/WebVTT_API) (`.vtt`-Dateien) formatiert — Web Video Text Tracks.

{{EmbedInteractiveExample("pages/tabbed/track.html", "tabbed-standard")}}

## Attribute

Dieses Element beinhaltet die [globalen Attribute](/de/docs/Web/HTML/Global_attributes).

- `default`
  - : Dieses Attribut gibt an, dass der Track aktiviert sein sollte, es sei denn, die Benutzereinstellungen zeigen, dass ein anderer Track geeigneter ist. Dieses Attribut darf nur auf einem `track`-Element pro Media-Element verwendet werden.
- `kind`

  - : Wie der Text-Track verwendet werden soll. Wenn es weggelassen wird, ist die Standardart `subtitles`. Wenn das Attribut einen ungültigen Wert enthält, wird `metadata` verwendet.
    Die folgenden Schlüsselwörter sind erlaubt:

    - `subtitles`

      - Untertitel bieten eine Übersetzung von Inhalten, die vom Betrachter nicht verstanden werden können. Zum Beispiel Sprache oder Text, der in einem englischsprachigen Film nicht auf Englisch ist.
      - Untertitel können zusätzlichen Inhalt enthalten, normalerweise zusätzliche Hintergrundinformationen. Zum Beispiel der Text am Anfang der Star Wars-Filme oder das Datum, die Uhrzeit und der Ort einer Szene.

    - `captions`

      - Geschlossene Untertitel bieten eine Transkription und möglicherweise eine Übersetzung von Audio.
      - Sie können wichtige nonverbale Informationen wie Musikhinweise oder Soundeffekte enthalten.
        Sie können die Quelle des Hinweises angeben (z. B. Musik, Text, Charakter).
      - Geeignet für Benutzer, die taub sind oder wenn der Ton stummgeschaltet ist.

    - `chapters`

      - Kapitelüberschriften sind gedacht, um dem Benutzer bei der Navigation innerhalb der Medienressource zu helfen.

    - `metadata`

      - Tracks, die von Skripten verwendet werden. Nicht sichtbar für den Benutzer.

- `label`
  - : Ein benutzerlesbarer Titel des Text-Tracks, der vom Browser beim Auflisten verfügbarer Text-Tracks verwendet wird.
- `src`
  - : Adresse des Tracks (`.vtt`-Datei). Muss eine gültige URL sein. Dieses Attribut muss angegeben werden und sein URL-Wert muss denselben Ursprung wie das Dokument haben — es sei denn, das {{HTMLElement("audio")}} oder {{HTMLElement("video")}} Eltern-Element des `track`-Elements hat ein [`crossorigin`](/de/docs/Web/HTML/Attributes/crossorigin) Attribut.
- `srclang`
  - : Sprache der Track-Textdaten. Es muss ein gültiges [BCP 47](https://r12a.github.io/app-subtags/) Sprach-Tag sein. Wenn das `kind` Attribut auf `subtitles` gesetzt ist, muss `srclang` definiert werden.

## Anwendungshinweise

### Track-Datentypen

Die Art der Daten, die `track` dem Medium hinzufügt, wird im `kind` Attribut festgelegt, das Werte wie `subtitles`, `captions`, `chapters` oder `metadata` annehmen kann. Das Element verweist auf eine Quelldatei, die zeitgesteuerten Text enthält, den der Browser anzeigt, wenn der Benutzer zusätzliche Daten anfordert.

Ein Media-Element kann nicht mehr als einen `track` mit demselben `kind`, `srclang` und `label` haben.

### Erkennen von Cue-Änderungen

Der zugrunde liegende [`TextTrack`](/de/docs/Web/API/TextTrack), angezeigt durch die [`track`](/de/docs/Web/API/HTMLTrackElement/track) Eigenschaft, erhält ein `cuechange` Ereignis jedes Mal, wenn der aktuell dargestellte Cue geändert wird. Dies passiert auch dann, wenn der Track nicht mit einem Media-Element verknüpft ist.

Wenn der Track _ist_ mit einem Media-Element verknüpft, indem das `<track>`-Element als Kind des {{HTMLElement("audio")}} oder {{HTMLElement("video")}} Elements verwendet wird, wird das `cuechange` Ereignis auch an das [`HTMLTrackElement`](/de/docs/Web/API/HTMLTrackElement) gesendet.

```js
let textTrackElem = document.getElementById("text-track");

textTrackElem.addEventListener("cuechange", (event) => {
  let cues = event.target.track.activeCues;
});
```

### Texttracks programmatisch hinzufügen

Das JavaScript-Interface, das das `<track>`-Element repräsentiert, ist [`HTMLTrackElement`](/de/docs/Web/API/HTMLTrackElement).
Der Texttrack, der einem Element zugeordnet ist, kann von der [`HTMLTrackElement.track`](/de/docs/Web/API/HTMLTrackElement/track) Eigenschaft erhalten werden und ist vom Typ [`TextTrack`](/de/docs/Web/API/TextTrack).

`TextTrack` Objekte können auch zu einem [`HTMLVideoElement`](/de/docs/Web/API/HTMLVideoElement) oder [`HTMLAudioElement`](/de/docs/Web/API/HTMLAudioElement) Elementen mit der Methode [`HTMLMediaElement.addTextTrack()`](/de/docs/Web/API/HTMLMediaElement/addTextTrack) hinzugefügt werden.
Die `TextTrack` Objekte, die mit einem Media-Element verbunden sind, werden in einer [`TextTrackList`](/de/docs/Web/API/TextTrackList) gespeichert, die über die [`HTMLMediaElement.textTracks`](/de/docs/Web/API/HTMLMediaElement/textTracks) Eigenschaft abgerufen werden kann.

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
      <td>Keine; es ist ein {{Glossary("void_element", "void-Element")}}.</td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>Muss ein Start-Tag haben und darf kein End-Tag haben.</td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Eltern</th>
      <td>
        <p>
          Ein Media-Element, {{HTMLElement("audio")}} oder {{HTMLElement("video")}}.
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
      <td>Kein <code>role</code> erlaubt</td>
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

- [WebVTT-Text-Track-Format](/de/docs/Web/API/WebVTT_API)
- [`HTMLMediaElement.textTracks`](/de/docs/Web/API/HTMLMediaElement/textTracks)
