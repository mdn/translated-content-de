---
title: "<track>: Das Einbett-Text-Spur-Element"
slug: Web/HTML/Element/track
l10n:
  sourceCommit: c99afd3cafe73c93831bd73ad1dac285c3c713b1
---

{{HTMLSidebar}}

Das **`<track>`**-[HTML](/de/docs/Web/HTML)-Element wird als Kind der Media-Elemente {{HTMLElement("audio")}} und {{HTMLElement("video")}} verwendet. Jedes Track-Element erlaubt es Ihnen, eine zeitgesteuerte Textspur (oder zeitbasierte Daten) anzugeben, die parallel zum Media-Element angezeigt werden kann, zum Beispiel um Untertitel oder geschlossene Untertitel über ein Video oder neben Audiotracks zu legen.

Für ein Media-Element können mehrere Spuren angegeben werden, die verschiedene Arten von zeitgesteuerten Textdaten enthalten oder zeitgesteuerte Textdaten, die für verschiedene Gebiete übersetzt wurden. Die verwendeten Daten sind entweder die Spur, die als Standard eingestellt wurde, oder eine Art und Übersetzung basierend auf den Benutzerpräferenzen.

Die Spuren sind im [WebVTT-Format](/de/docs/Web/API/WebVTT_API) (`.vtt`-Dateien) formatiert — Web Video Text Tracks.

{{EmbedInteractiveExample("pages/tabbed/track.html", "tabbed-standard")}}

## Attribute

Dieses Element enthält die [globalen Attribute](/de/docs/Web/HTML/Global_attributes).

- `default`
  - : Dieses Attribut zeigt an, dass die Spur aktiviert werden sollte, es sei denn, die Benutzerpräferenzen deuten darauf hin, dass eine andere Spur geeigneter ist. Dieses Attribut darf bei jedem Media-Element nur auf einem `track`-Element verwendet werden.
- `kind`

  - : Wie die Textspur verwendet werden soll. Wenn weggelassen wird, ist die Standardart `subtitles`. Wenn das Attribut einen ungültigen Wert enthält, wird `metadata` verwendet.
    Die folgenden Schlüsselwörter sind erlaubt:

    - `subtitles`

      - Untertitel bieten Übersetzungen von Inhalten, die vom Betrachter nicht verstanden werden können. Zum Beispiel Sprache oder Text, der in einem englischsprachigen Film nicht Englisch ist.
      - Untertitel können zusätzliche Inhalte enthalten, normalerweise extra Hintergrundinformationen. Zum Beispiel der Text am Anfang der Star-Wars-Filme oder das Datum, die Uhrzeit und der Ort einer Szene.

    - `captions`

      - Geschlossene Untertitel bieten eine Transkription und möglicherweise eine Übersetzung von Audio.
      - Sie können wichtige nonverbale Informationen wie Musikhinweise oder Soundeffekte enthalten.
        Es kann die Quelle des Hinweises angeben (z. B. Musik, Text, Charakter).
      - Geeignet für Personen, die gehörlos sind, oder wenn der Ton stummgeschaltet ist.

    - `chapters`

      - Kapitel-Titel sollen verwendet werden, wenn der Benutzer die Medienressource navigiert.

    - `metadata`

      - Spuren, die von Skripten verwendet werden. Nicht sichtbar für den Benutzer.

- `label`
  - : Ein für den Benutzer lesbarer Titel der Textspur, der vom Browser angezeigt wird, wenn verfügbare Textspuren aufgelistet werden.
- `src`
  - : Adresse der Spur (`.vtt`-Datei). Muss eine gültige URL sein. Dieses Attribut muss angegeben werden, und sein URL-Wert muss denselben Ursprung haben wie das Dokument — es sei denn, das {{HTMLElement("audio")}} oder {{HTMLElement("video")}}-Elternelement des `track`-Elements hat ein [`crossorigin`](/de/docs/Web/HTML/Attributes/crossorigin)-Attribut.
- `srclang`
  - : Sprache der Textspur-Daten. Es muss ein gültiges [BCP 47](https://r12a.github.io/app-subtags/)-Sprach-Tag sein. Wenn das Attribut `kind` auf `subtitles` gesetzt ist, muss `srclang` definiert sein.

## Hinweise zur Verwendung

### Spur-Datentypen

Die Art der Daten, die `track` zu den Medien hinzufügt, wird im Attribut `kind` festgelegt, das Werte wie `subtitles`, `captions`, `chapters` oder `metadata` annehmen kann. Das Element verweist auf eine Quelldatei, die zeitgesteuerten Text enthält, den der Browser anzeigt, wenn der Benutzer zusätzliche Daten anfordert.

Ein Media-Element kann nicht mehr als eine `track` mit denselben `kind`, `srclang` und `label` haben.

### Erkennen von Cue-Änderungen

Das zugrunde liegende {{domxref("TextTrack")}}, angezeigt durch die {{domxref("HTMLTrackElement.track", "track")}}-Eigenschaft, erhält jedes Mal ein `cuechange`-Ereignis, wenn sich der aktuell präsentierte Cue ändert. Dies passiert auch, wenn die Spur nicht mit einem Media-Element verbunden ist.

Wenn die Spur _mit_ einem Media-Element verbunden ist, indem das `<track>`-Element als Kind des {{HTMLElement("audio")}}- oder {{HTMLElement("video")}}-Elements verwendet wird, wird das `cuechange`-Ereignis auch an das {{domxref("HTMLTrackElement")}} gesendet.

```js
let textTrackElem = document.getElementById("texttrack");

textTrackElem.addEventListener("cuechange", (event) => {
  let cues = event.target.track.activeCues;
});
```

### Textspuren programmgesteuert hinzufügen

Das JavaScript-Interface, das das `<track>`-Element repräsentiert, ist {{domxref("HTMLTrackElement")}}.
Die mit einem Element verknüpfte Textspur kann über die {{domxref("HTMLTrackElement.track")}}-Eigenschaft abgerufen werden und ist vom Typ {{domxref("TextTrack")}}.

`TextTrack`-Objekte können auch zu {{domxref("HTMLVideoElement")}}- oder {{domxref("HTMLAudioElement")}}-Elementen mithilfe der Methode {{domxref("HTMLMediaElement.addTextTrack()")}} hinzugefügt werden.
Die mit einem Media-Element verbundenen `TextTrack`-Objekte werden in einer {{domxref("TextTrackList")}} gespeichert, die über die {{domxref("HTMLMediaElement.textTracks")}}-Eigenschaft abgerufen werden kann.

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
      <td>Keine; es ist ein {{Glossary("void element")}}.</td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>Muss ein Start-Tag haben und darf keinen End-Tag haben.</td>
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
      <td>{{domxref("HTMLTrackElement")}}</td>
    </tr>
  </tbody>
</table>

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebVTT Textspur-Format](/de/docs/Web/API/WebVTT_API)
- {{domxref("HTMLMediaElement.textTracks")}}
