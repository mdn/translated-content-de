---
title: icons
slug: Web/Manifest/icons
l10n:
  sourceCommit: 7742fc98db494e89b706131c18811e2b853ab1d0
---

{{QuickLinksWithSubpages("/de/docs/Web/Manifest")}}

Das `icons`-Manifest-Mitglied wird verwendet, um eine oder mehrere Bilddateien anzugeben, die die Symbole definieren, die Ihre Webanwendung repräsentieren.

## Syntax

```json-nolint
/* Single icon with the minimum required property */
"icons": [
  {
    "src": "icon/basic-icon.png"
  }
]

/* Single icon with multiple purposes */
"icons": [
  {
    "src": "icon/basic-icon.png",
    "purpose": "monochrome maskable"
  }
]

/* Two icons with various properties */
"icons": [
  {
  "src": "icon/lowres.png",
  "sizes": "48x48"
  },
  {
  "src": "maskable_icon.png",
  "sizes": "48x48",
  "type": "image/png"
  }
]
```

### Werte

- `icons`

  - : Ein Array von Objekten.
    Jedes Objekt repräsentiert ein Symbol, das in einem bestimmten Kontext verwendet werden soll.
    Beispielsweise können Sie Symbole hinzufügen, um Ihre Web-App auf Geräten mit unterschiedlichen Bildschirmgrößen, für die Integration mit verschiedenen Betriebssystemen, für Startbildschirme oder für App-Benachrichtigungen darzustellen.

    Jedes Symbolobjekt kann eine oder mehrere Eigenschaften haben. Davon ist nur `src` erforderlich. Die möglichen Eigenschaften sind:

    - `src`

      - : Ein String, der den Pfad zur Symbolbilddatei angibt.
        Wenn `src` relativ ist, wird der Pfad relativ zur URL der Manifestdatei aufgelöst.
        Zum Beispiel wird die relative URL `images/icon-192x192.png` für die Manifestdatei, die sich unter `https://example.com/manifest.json` befindet, als `https://example.com/images/icon-192x192.png` aufgelöst.

    - `sizes` {{Optional_Inline}}

      - : Ein String, der eine oder mehrere Größen angibt, bei denen die Symboldatei verwendet werden kann.
        Jede Größe wird als `<Breite in Pixeln>x<Höhe in Pixeln>` angegeben.
        Wenn mehrere Größen angegeben sind, werden sie durch Leerzeichen getrennt; zum Beispiel `48x48 96x96`.
        Wenn mehrere Symbole verfügbar sind, können Browser das für einen bestimmten Anzeigezusammenhang am besten geeignete Symbol auswählen.
        Für Rasterformate wie PNG wird empfohlen, die genau verfügbaren Größen anzugeben.
        Für Vektorformate wie SVG können Sie `any` verwenden, um die Skalierbarkeit anzuzeigen.
        Wenn `sizes` nicht angegeben ist, kann die Auswahl und Anzeige des Symbols je nach Implementierung des Browsers variieren.

        Beachten Sie, dass das Format von `sizes` dem Attribut [`sizes`](/de/docs/Web/HTML/Element/link#sizes) des HTML-`<link>`-Elements ähnelt.

    - `type` {{Optional_Inline}}

      - : Ein String, der den {{Glossary("MIME_type", "MIME-Typ")}} des Symbols angibt.
        Der Wert sollte im Format `image/<Untertyp>` sein, wobei `<Untertyp>` ein spezifisches Bildformat ist; beispielsweise gibt `image/png` ein PNG-Bild an.
        Wenn weggelassen, schließen Browser normalerweise auf den Bildtyp aus der Dateiendung.

    - `purpose` {{Optional_Inline}}

      - : Ein schlüsselwortsensitiver String, der einen oder mehrere Zusammenhänge angibt, in denen das Symbol vom Browser oder Betriebssystem verwendet werden kann.
        Der Wert kann ein einzelnes Schlüsselwort oder mehrere durch Leerzeichen getrennte Schlüsselwörter sein.
        Wenn weggelassen, kann der Browser das Symbol für jeden Zweck verwenden.

        Browser verwenden diese Werte als Hinweise, um zu bestimmen, wo und wie ein Symbol angezeigt wird.
        Zum Beispiel könnte ein `monochrome`-Symbol als Abzeichen oder angeheftetes Symbol mit einer festen Füllung verwendet werden, die sich visuell von einem vollfarbigen Startsymbol unterscheidet.
        Bei mehreren Schlüsselwörtern, etwa `monochrome maskable`, kann der Browser das Symbol für einen dieser Zwecke verwenden.
        Wenn ein nicht anerkanntes Ziel zusammen mit gültigen Werten (z. B. `monochrome fizzbuzz`) angegeben ist, kann das Symbol dennoch für die gültigen Zwecke verwendet werden.
        Wenn jedoch nur nicht anerkannte Zwecke angegeben sind (z. B. `fizzbuzz`), wird es ignoriert.

        Gültige Werte sind:

        - `monochrome`

          - : Gibt an, dass das Symbol als monochromes Symbol mit fester Füllung verwendet werden soll.
            Mit diesem Wert verwirft ein Browser die Farbinformationen im Symbol und verwendet nur den Alphakanal als Maske über einer beliebigen festen Füllung.

        - `maskable`

          - : Gibt an, dass das Symbol mit Berücksichtigung von Symbolmasken und Sicherheitszone gestaltet wurde, sodass jeder Teil des Bildes außerhalb der Sicherheitszone ignoriert und überdeckt werden kann.

        - `any`
          - : Gibt an, dass das Symbol in jedem Kontext verwendet werden kann. Dies ist der Standardwert.

## Beschreibung

Symbole identifizieren Ihre Web-App eindeutig in verschiedenen Kontexten, wie im Task-Switcher eines Betriebssystems, in Systemeinstellungen, auf dem Startbildschirm, in App-Listen und an anderen Orten, an denen Anwendungssymbole angezeigt werden.

Der Kontext, in dem ein Symbol verwendet werden kann, wird durch den Browser und das Betriebssystem basierend auf den angegebenen Größen und Formaten bestimmt.

## Sicherheitsüberlegungen

Die Fähigkeit des Browsers, ein Symbolbild abzurufen, wird durch die Content Security Policy ({{Glossary("CSP", "CSP")}}) des Besitzerdokuments des Manifests geregelt, insbesondere durch die [`img-src`](/de/docs/Web/HTTP/Headers/Content-Security-Policy/img-src)-Direktive. Dieser Sicherheitsaspekt bezieht sich auf die `src`-Eigenschaft.

Zum Beispiel, wenn die `img-src`-Richtlinie in einem CSP-Header `icons.example.com` angibt, würden nur Symbole von dieser Domain abrufbar sein. In einem Manifest mit zwei Symbolen, eines von `icons.example.com/lowres` und ein anderes von `other.com/hi-res`, würde nur das erstere erfolgreich abgerufen werden, wegen CSP-Beschränkungen.

## Leistungsüberlegungen

Das Angeben der `type`-Eigenschaft kann die Leistung erheblich verbessern, da es Browsern ermöglicht, Bilder mit nicht unterstützten Formaten leichter zu ignorieren.
Wenn Sie die `type`-Eigenschaft nicht angeben, müssen Browser möglicherweise das Bildformat anhand ressourcenintensiver Methoden ermitteln, wie das [MIME-Sniffing](/de/docs/Web/HTTP/Basics_of_HTTP/MIME_types#mime_sniffing) der Datei nach einer Signatur.

Wenn Sie die `type`-Eigenschaft weglassen, verwenden Sie zumindest angemessene und eindeutige Dateiendungen für Ihre Symbolbilder.

## Beispiele

### Deklarieren mehrerer Symbole

Dieses Beispiel zeigt, wie mehrere Symbole für unterschiedliche Szenarien und Geräte deklariert werden. Wenn ein Symbol für eine bestimmte Situation nicht unterstützt oder nicht verfügbar ist, greifen Browser auf andere verfügbare Formate und Größen zurück.

- Zwei Symbole derselben Größe (`48x48`) werden in unterschiedlichen Formaten bereitgestellt. Das erste wird explizit als [WebP](/de/docs/Web/Media/Formats/Image_types#webp_image) mithilfe der `type`-Eigenschaft angegeben. Wenn ein Browser WebP nicht unterstützt, fällt er auf das zweite Symbol derselben Größe zurück. Für das zweite Symbol bestimmt der Browser den MIME-Typ entweder aus dem HTTP-Header oder durch Herleitung aus dem Inhalts der Bilddatei. Symbole dieser Größe werden typischerweise für Browser-Tabs und Lesezeichen verwendet.

- Eine [ICO](/de/docs/Web/Media/Formats/Image_types#ico_microsoft_windows_icon)-Datei wird mit mehreren Größen von `72x72` bis `256x256` bereitgestellt. ICO-Dateien enthalten mehrere Rasterbilder, die individuell für verschiedene Displaygrößen optimiert sind. Symbole dieser Größen werden häufig für Desktop-Verknüpfungen verwendet.

- Für größere Symbole (`257x257` und darüber) wird eine [SVG](/de/docs/Web/Media/Formats/Image_types#svg_scalable_vector_graphics)-Datei angegeben. Der `sizes`-Wert dieses Symbols ist auf `any` gesetzt, was es einem Browser ermöglicht, dieses Symbol in jeder Größe zu verwenden. SVG-Symbole behalten ihre Qualität bei größeren Größen. Diese Symbole sind ideal für hochauflösende Displays, wie sie in [progressiven Web-Apps (PWAs)](/de/docs/Web/Progressive_web_apps) verwendet werden.

```json
{
  "icons": [
    {
      "src": "icon/lowres.webp",
      "sizes": "48x48",
      "type": "image/webp"
    },
    {
      "src": "icon/lowres",
      "sizes": "48x48"
    },
    {
      "src": "icon/hd_hi.ico",
      "sizes": "72x72 96x96 128x128 256x256"
    },
    {
      "src": "icon/hd_hi.svg",
      "sizes": "any"
    }
  ]
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Leitfaden für Bilddateitypen und -formate](/de/docs/Web/Media/Formats/Image_types#webp_image)
- [Monochrome Symbole und feste Füllungen](https://w3c.github.io/manifest/#monochrome-icons-and-solid-fills)
- [Symbolmasken und Sicherheitszone](https://w3c.github.io/manifest/#icon-masks)
