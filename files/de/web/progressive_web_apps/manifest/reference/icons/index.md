---
title: icons
slug: Web/Progressive_web_apps/Manifest/Reference/icons
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

Das `icons`-Manifest-Element wird verwendet, um eine oder mehrere Bilddateien anzugeben, die die Symbole definieren, die Ihre Webanwendung repräsentieren.

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
    "src": "icon/low-res.png",
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
    Jedes Objekt repräsentiert ein Symbol, das in einem bestimmten Kontext verwendet werden kann.
    Zum Beispiel können Sie Symbole hinzufügen, um Ihre Web-App auf Geräten mit verschiedenen Bildschirmgrößen, zur Integration mit verschiedenen Betriebssystemen, für Startbildschirme oder für App-Benachrichtigungen zu repräsentieren.

    Jedes Symbolobjekt kann eine oder mehrere Eigenschaften haben. Davon ist nur `src` erforderlich. Mögliche Eigenschaften sind:

    - `src`

      - : Ein String, der den Pfad zur Symbolbilddatei angibt.
        Wenn `src` relativ ist, wird der Pfad relativ zur URL der Manifestdatei aufgelöst.
        Zum Beispiel wird die relative URL `images/icon-192x192.png` für die Manifestdatei unter `https://example.com/manifest.json` als `https://example.com/images/icon-192x192.png` aufgelöst.

    - `sizes` {{Optional_Inline}}

      - : Ein String, der eine oder mehrere Größen angibt, bei denen die Symboldatei verwendet werden kann.
        Jede Größe wird als `<width in pixels>x<height in pixels>` angegeben.
        Wenn mehrere Größen angegeben sind, werden sie durch Leerzeichen getrennt; zum Beispiel `48x48 96x96`.
        Wenn mehrere Symbole verfügbar sind, können Browser das am besten geeignete Symbol für einen bestimmten Anzeige-Kontext auswählen.
        Für Rasterformate wie PNG wird empfohlen, die exakt verfügbaren Größen anzugeben.
        Für Vektorformate wie SVG können Sie `any` verwenden, um Skalierbarkeit anzuzeigen.
        Wenn `sizes` nicht angegeben ist, kann die Auswahl und Anzeige des Symbols je nach Implementierung im Browser variieren.

        Beachten Sie, dass das Format von `sizes` dem HTML `<link>`-Element [`sizes`](/de/docs/Web/HTML/Reference/Elements/link#sizes) Attribut ähnelt.

    - `type` {{Optional_Inline}}

      - : Ein String, der den {{Glossary("MIME_type", "MIME-Typ")}} des Symbols angibt.
        Der Wert sollte im Format `image/<subtype>` sein, wobei `<subtype>` ein spezifisches Bildformat ist; zum Beispiel zeigt `image/png` ein PNG-Bild an.
        Wenn weggelassen, leiten Browser normalerweise den Bildtyp aus der Dateierweiterung ab.

    - `purpose` {{Optional_Inline}}

      - : Ein Groß-/Kleinschreibung-sensitiver Schlüsselwort-String, der einen oder mehrere Kontexte angibt, in denen das Symbol vom Browser oder Betriebssystem verwendet werden kann.
        Der Wert kann ein einzelnes Schlüsselwort oder mehrere durch Leerzeichen getrennte Schlüsselwörter sein.
        Wenn weggelassen, kann der Browser das Symbol für jeden Zweck verwenden.

        Browser verwenden diese Werte als Hinweise, um zu bestimmen, wo und wie ein Symbol angezeigt wird.
        Zum Beispiel könnte ein `monochrome`-Symbol als Abzeichen oder angeheftetes Symbol mit einer durchgehenden Füllung verwendet werden, die sich visuell von einem farbigen Startsymbol unterscheidet.
        Bei mehreren Schlüsselwörtern, z. B. `monochrome maskable`, kann der Browser das Symbol für jeden dieser Zwecke verwenden.
        Wenn ein nicht erkanntes Ziel zusammen mit gültigen Werten enthalten ist (z. B. `monochrome fizzbuzz`), kann das Symbol dennoch für die gültigen Zwecke verwendet werden.
        Wenn jedoch nur nicht erkannte Zwecke angegeben sind (z. B. `fizzbuzz`), wird es ignoriert.

        Gültige Werte umfassen:

        - `monochrome`

          - : Gibt an, dass das Symbol als monochromes Symbol mit durchgehender Füllung verwendet werden soll.
            Mit diesem Wert verwirft ein Browser die Farbinformationen im Symbol und verwendet nur den Alphakanal als Maske über eine beliebige durchgehende Füllung.

        - `maskable`

          - : Gibt an, dass das Symbol mit Symbolmasken und Sicherungszone entworfen wurde, so dass jeder Teil des Bildes außerhalb der Sicherungszone ignoriert und maskiert werden kann.

        - `any`
          - : Gibt an, dass das Symbol in jedem Kontext verwendet werden kann. Dies ist der Standardwert.

## Beschreibung

Symbole identifizieren Ihre Web-App eindeutig in verschiedenen Kontexten, wie im Task-Switcher eines Betriebssystems, in den Systemeinstellungen, auf dem Startbildschirm, in App-Listen und an anderen Stellen, an denen Anwendungssymbole angezeigt werden.

Der Kontext, in dem ein Symbol verwendet werden kann, wird vom Browser und dem Betriebssystem basierend auf den angegebenen Größen und Formaten bestimmt.

## Sicherheitsüberlegungen

Die Fähigkeit des Browsers, ein Symbolbild abzurufen, wird durch die Content Security Policy ({{Glossary("CSP", "CSP")}}) des Eigentümerdokuments des Manifests gesteuert, insbesondere durch die [`img-src`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/img-src)-Direktive. Dieser Sicherheitsaspekt steht im Zusammenhang mit der `src`-Eigenschaft.

Zum Beispiel, wenn die `img-src`-Direktive in einem CSP-Header `icons.example.com` angibt, würden Symbole nur von dieser Domain abgerufen werden können. In einem Manifest mit zwei Symbolen, eines von `icons.example.com/low-res` und eines von `other.com/hi-res`, würde nur das erste erfolgreich abgerufen werden, aufgrund von CSP-Beschränkungen.

## Leistungsüberlegungen

Die Angabe der `type`-Eigenschaft kann die Leistung erheblich verbessern, da sie es Browsern ermöglicht, Bilder mit nicht unterstützten Formaten leichter zu ignorieren.
Wenn Sie die `type`-Eigenschaft nicht angeben, müssen Browser möglicherweise das Bildformat mit ressourcenintensiveren Methoden ableiten, wie z. B. [MIME-Sniffing](/de/docs/Web/HTTP/Guides/MIME_types#mime_sniffing) der Datei nach einer Signatur.

Mindestens, wenn Sie die `type`-Eigenschaft weglassen, verwenden Sie geeignete und eindeutige Dateierweiterungen für Ihre Symbolbilder.

## Beispiele

### Mehrfache Symbole deklarieren

Dieses Beispiel zeigt, wie mehrere Symbole für verschiedene Szenarien und Geräte deklariert werden. Wenn ein Symbol für eine bestimmte Situation nicht unterstützt oder nicht verfügbar ist, greifen Browser auf andere verfügbare Formate und Größen zurück.

- Zwei Symbole der gleichen Größe (`48x48`) werden in unterschiedlichen Formaten bereitgestellt. Das erste ist explizit als [WebP](/de/docs/Web/Media/Guides/Formats/Image_types#webp_image) mit der `type`-Eigenschaft angegeben. Wenn ein Browser WebP nicht unterstützt, wird auf das zweite Symbol der gleichen Größe zurückgegriffen. Für das zweite Symbol bestimmt der Browser den MIME-Typ entweder aus dem HTTP-Header oder indem er ihn aus dem Inhalt der Bilddatei ableitet. Symbole in dieser Größe werden typischerweise für Brows

ertabs und Lesezeichen verwendet.

- Eine [ICO](/de/docs/Web/Media/Guides/Formats/Image_types#ico_microsoft_windows_icon) Datei wird mit mehreren Größen bereitgestellt, die von `72x72` bis `256x256` reichen. ICO-Dateien enthalten mehrere Raster-Symbole, die jeweils für verschiedene Display-Größen optimiert sind. Symbole in diesen Größen werden häufig für Desktop-Verknüpfungen verwendet.

- Für größere Symbole (`257x257` und darüber) wird eine [SVG](/de/docs/Web/Media/Guides/Formats/Image_types#svg_scalable_vector_graphics) Datei angegeben. Der `sizes`-Wert dieses Symbols ist auf `any` gesetzt, was es einem Browser ermöglicht, dieses Symbol in jeder Größe zu verwenden. SVG-Symbole behalten ihre Qualität bei größeren Größen. Diese Symbole sind ideal für hochauflösende Displays wie in [fortschrittlichen Web-Apps (PWAs)](/de/docs/Web/Progressive_web_apps).

```json
{
  "icons": [
    {
      "src": "icon/low-res.webp",
      "sizes": "48x48",
      "type": "image/webp"
    },
    {
      "src": "icon/low-res",
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

- [Leitfaden zu Bilddateitypen und -formaten](/de/docs/Web/Media/Guides/Formats/Image_types#webp_image)
- [Monochrome Symbole und durchgehende Füllungen](https://w3c.github.io/manifest/#monochrome-icons-and-solid-fills)
- [Symbolmasken und Sicherheitszonen](https://w3c.github.io/manifest/#icon-masks)
