---
title: icons
slug: Web/Manifest/icons
l10n:
  sourceCommit: 5f140a8174ef528f61e8c87e2f38e3748257d9bc
---

{{QuickLinksWithSubpages("/de/docs/Web/Manifest")}}

Der `icons`-Manifest-Eintrag wird verwendet, um ein oder mehrere Bilddateien anzugeben, die die Symbole definieren, die Ihre Webanwendung repräsentieren.

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
    Jedes Objekt repräsentiert ein Symbol, das in einem bestimmten Kontext verwendet werden soll.
    Sie können beispielsweise Symbole hinzufügen, um Ihre Web-App auf Geräten mit unterschiedlichen Bildschirmgrößen, für die Integration mit verschiedenen Betriebssystemen, für Startbildschirme oder für App-Benachrichtigungen darzustellen.

    Jedes Symbolobjekt kann eine oder mehrere Eigenschaften haben. Davon ist nur `src` erforderlich. Die möglichen Eigenschaften umfassen:

    - `src`

      - : Ein String, der den Pfad zur Symbolbilddatei angibt.
        Wenn `src` relativ ist, wird der Pfad relativ zur URL der Manifestdatei aufgelöst.
        Zum Beispiel wird die relative URL `images/icon-192x192.png` für die Manifestdatei unter `https://example.com/manifest.json` als `https://example.com/images/icon-192x192.png` aufgelöst.

    - `sizes` {{Optional_Inline}}

      - : Ein String, der eine oder mehrere Größen angibt, in denen die Symboldatei verwendet werden kann.
        Jede Größe wird als `<Breite in Pixel>x<Höhe in Pixel>` angegeben.
        Wenn mehrere Größen angegeben sind, werden sie durch Leerzeichen getrennt; zum Beispiel `48x48 96x96`.
        Wenn mehrere Symbole verfügbar sind, können Browser das am besten geeignete Symbol für einen bestimmten Anzeige-Kontext auswählen.
        Für Rasterformate wie PNG wird empfohlen, die genau verfügbaren Größen anzugeben.
        Für Vektorformate wie SVG können Sie `any` verwenden, um Skalierbarkeit anzuzeigen.
        Wenn `sizes` nicht angegeben ist, kann die Auswahl und Anzeige des Symbols je nach Browser-Implementierung variieren.

        Beachten Sie, dass das Format von `sizes` dem des HTML-`<link>`-Elements [`sizes`](/de/docs/Web/HTML/Element/link#sizes)-Attributs ähnlich ist.

    - `type` {{Optional_Inline}}

      - : Ein String, der den {{Glossary("MIME_type", "MIME-Typ")}} des Symbols angibt.
        Der Wert sollte im Format `image/<subtype>` sein, wobei `<subtype>` ein spezifisches Bildformat ist; zum Beispiel gibt `image/png` ein PNG-Bild an.
        Wenn weggelassen, leiten Browser den Bildtyp normalerweise aus der Dateierweiterung ab.

    - `purpose` {{Optional_Inline}}

      - : Ein groß-/kleinschreibungsempfindlicher Schlüsselwort-String, der einen oder mehrere Kontexte angibt, in denen das Symbol vom Browser oder Betriebssystem verwendet werden kann.
        Der Wert kann ein einzelnes Schlüsselwort oder mehrere durch Leerzeichen getrennte Schlüsselwörter sein.
        Wenn weggelassen, kann der Browser das Symbol für jeden Zweck verwenden.

        Browser verwenden diese Werte als Hinweis, um zu bestimmen, wo und wie ein Symbol dargestellt wird.
        Zum Beispiel könnte ein `monochrome`-Symbol als Abzeichen oder angeheftetes Symbol mit einem einfarbigen Füllbereich verwendet werden, der sich visuell von einem vollfarbigen Starts-Symbol unterscheidet.
        Mit mehreren Schlüsselwörtern, z.B. `monochrome maskable`, kann der Browser das Symbol für jeden dieser Zwecke verwenden.
        Wenn ein nicht anerkanntes Ziel neben gültigen Werten enthalten ist (z.B. `monochrome fizzbuzz`), kann das Symbol dennoch für die gültigen Zwecke verwendet werden.
        Wenn jedoch nur unbekannte Zwecke angegeben sind (z.B. `fizzbuzz`), dann wird es ignoriert.

        Gültige Werte sind unter anderem:

        - `monochrome`

          - : Gibt an, dass das Symbol als monochromes Symbol mit einfarbiger Füllung verwendet werden soll.
            Mit diesem Wert verwirft ein Browser die Farbinformationen im Symbol und verwendet nur den Alphakanal als Maske über einer beliebigen einfarbigen Füllung.

        - `maskable`

          - : Gibt an, dass das Symbol mit Blick auf Symbolmasken und Sicherheitsbereich entworfen wurde, sodass jeder Teil des Bildes außerhalb des Sicherheitsbereichs ignoriert und maskiert werden kann.

        - `any`
          - : Gibt an, dass das Symbol in jedem Kontext verwendet werden kann. Dies ist der Standardwert.

## Beschreibung

Symbole identifizieren Ihre Web-App in verschiedenen Kontexten eindeutig, wie z.B. im Task-Wechsler eines Betriebssystems, in den Systemeinstellungen, auf dem Startbildschirm, in App-Listings und an anderen Orten, an denen Anwendungssymbole angezeigt werden.

Der Kontext, in dem ein Symbol verwendet werden kann, wird vom Browser und dem Betriebssystem anhand der angegebenen Größen und Formate bestimmt.

## Sicherheitsüberlegungen

Die Fähigkeit des Browsers, ein Symbolbild abzurufen, wird durch die Content Security Policy ({{Glossary("CSP", "CSP")}}) des Eigentümerdokuments des Manifests, insbesondere durch die [`img-src`](/de/docs/Web/HTTP/Headers/Content-Security-Policy/img-src)-Richtlinie, geregelt. Dieser Sicherheitsaspekt bezieht sich auf die `src`-Eigenschaft.

Wenn beispielsweise die `img-src`-Richtlinie in einem CSP-Header `icons.example.com` angibt, wären nur Symbole von dieser Domain abrufbar. In einem Manifest mit zwei Symbolen, eines von `icons.example.com/low-res` und ein anderes von `other.com/hi-res`, würde nur das erste erfolgreich abgerufen werden, da nur die ersten aus CSP-Beschränkungen abrufbar wären.

## Leistungsüberlegungen

Die Angabe der `type`-Eigenschaft kann die Leistung erheblich verbessern, da sie es Browsern ermöglicht, Bilder mit nicht unterstützten Formaten einfacher auszuschließen.
Wenn Sie die `type`-Eigenschaft nicht angeben, müssen Browser möglicherweise das Bildformat mit ressourcenintensiveren Methoden herausfinden, wie z.B. [MIME-Sniffing](/de/docs/Web/HTTP/MIME_types#mime_sniffing), um die Datei nach einer Signatur zu durchsuchen.

Wenn Sie die `type`-Eigenschaft weglassen, verwenden Sie mindestens geeignete und eindeutige Dateierweiterungen für Ihre Symbols.

## Beispiele

### Mehrere Symbole deklarieren

Dieses Beispiel zeigt, wie mehrere Symbole für unterschiedliche Szenarien und Geräte deklariert werden. Wenn ein Symbol für eine bestimmte Situation nicht unterstützt oder nicht verfügbar ist, greifen Browser auf andere verfügbare Formate und Größen zurück.

- Zwei Symbole derselben Größe (`48x48`) werden in verschiedenen Formaten bereitgestellt. Das erste wird mithilfe der `type`-Eigenschaft explizit als [WebP](/de/docs/Web/Media/Formats/Image_types#webp_image) angegeben. Wenn ein Browser WebP nicht unterstützt, greift es auf das zweite Symbol derselben Größe zurück. Für das zweite Symbol bestimmt der Browser den MIME-Typ entweder aus dem HTTP-Header oder indem er ihn aus dem Inhalt der Bilddatei ableitet. Symbole dieser Größe werden typischerweise für Browser-Tabs und Lesezeichen verwendet.

- Eine [ICO](/de/docs/Web/Media/Formats/Image_types#ico_microsoft_windows_icon)-Datei wird mit mehreren Größen von `72x72` bis `256x256` bereitgestellt. ICO-Dateien enthalten mehrere Raster-Symbole, die jeweils für verschiedene Anzeigegrößen optimiert sind. Symbole dieser Größen werden häufig für Desktop-Verknüpfungen verwendet.

- Für größere Symbole (`257x257` und darüber) wird eine [SVG](/de/docs/Web/Media/Formats/Image_types#svg_scalable_vector_graphics)-Datei angegeben. Der `sizes`-Wert dieses Symbols ist auf `any` gesetzt, wodurch ein Browser dieses Symbol in jeder Größe verwenden kann. SVG-Symbole behalten ihre Qualität bei größeren Größen bei. Diese Symbole sind ideal für hochauflösende Displays wie in [Progressive Web Apps (PWAs)](/de/docs/Web/Progressive_web_apps).

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

- [Leitfaden zu Bilddateitypen und -formaten](/de/docs/Web/Media/Formats/Image_types#webp_image)
- [Monochrome Symbole und einfarbige Füllungen](https://w3c.github.io/manifest/#monochrome-icons-and-solid-fills)
- [Symbolmasken und Sicherheitsbereich](https://w3c.github.io/manifest/#icon-masks)
