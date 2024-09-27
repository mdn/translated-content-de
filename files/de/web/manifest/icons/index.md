---
title: Icons
slug: Web/Manifest/icons
l10n:
  sourceCommit: 7742fc98db494e89b706131c18811e2b853ab1d0
---

{{QuickLinksWithSubpages("/de/docs/Web/Manifest")}}

Das `icons` Manifest-Element wird verwendet, um eine oder mehrere Bilddateien anzugeben, die die Symbole definieren, um Ihre Webanwendung zu repräsentieren.

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
    Jedes Objekt stellt ein Symbol dar, das in einem bestimmten Kontext verwendet werden kann.
    Zum Beispiel können Sie Symbole hinzufügen, um Ihre Web-App auf Geräten mit verschiedenen Bildschirmgrößen zu repräsentieren, für die Integration mit verschiedenen Betriebssystemen, für Startbildschirme oder für App-Benachrichtigungen.

    Jedes Symbolobjekt kann eine oder mehrere Eigenschaften haben. Davon ist nur `src` erforderlich. Die möglichen Eigenschaften umfassen:

    - `src`

      - : Eine Zeichenkette, die den Pfad zur Symbolbilddatei angibt.
        Wenn `src` relativ ist, wird der Pfad relativ zur URL der Manifestdatei aufgelöst.
        Zum Beispiel wird die relative URL `images/icon-192x192.png` für die Manifestdatei, die sich unter `https://example.com/manifest.json` befindet, als `https://example.com/images/icon-192x192.png` aufgelöst.

    - `sizes` {{Optional_Inline}}

      - : Eine Zeichenkette, die eine oder mehrere Größen angibt, bei denen die Symboldatei verwendet werden kann.
        Jede Größe wird als `<Breite in Pixel>x<Höhe in Pixel>` angegeben.
        Wenn mehrere Größen angegeben sind, werden sie durch Leerzeichen getrennt, zum Beispiel `48x48 96x96`.
        Wenn mehrere Symbole verfügbar sind, können Browser das am besten geeignete Symbol für einen bestimmten Anzeige-Kontext auswählen.
        Für Rasterformate wie PNG wird empfohlen, die genau verfügbaren Größen anzugeben.
        Für Vektorformate wie SVG können Sie `any` verwenden, um Skalierbarkeit anzuzeigen.
        Wenn `sizes` nicht angegeben ist, kann die Auswahl und Anzeige des Symbols je nach Implementierung des Browsers variieren.

        Beachten Sie, dass das Format von `sizes` dem Attribut [`sizes`](/de/docs/Web/HTML/Element/link#sizes) des HTML `<link>`-Elements ähnlich ist.

    - `type` {{Optional_Inline}}

      - : Eine Zeichenkette, die den [MIME-Typ](/de/docs/Glossary/MIME_type) des Symbols angibt.
        Der Wert sollte im Format `image/<subtype>` sein, wobei `<subtype>` ein spezifisches Bildformat ist; zum Beispiel gibt `image/png` ein PNG-Bild an.
        Wenn es weggelassen wird, leiten Browser typischerweise den Bildtyp aus der Dateiendung ab.

    - `purpose` {{Optional_Inline}}

      - : Eine groß-/kleinschreibungssensitive Schlüsselwort-Zeichenkette, die einen oder mehrere Kontexte angibt, in denen das Symbol vom Browser oder Betriebssystem verwendet werden kann.
        Der Wert kann ein einzelnes Schlüsselwort oder mehrere durch Leerzeichen getrennte Schlüsselwörter sein.
        Wird es weggelassen, kann der Browser das Symbol für jeden Zweck verwenden.

        Browser verwenden diese Werte als Hinweise, um zu bestimmen, wo und wie ein Symbol angezeigt wird.
        Ein `monochrome`-Symbol könnte beispielsweise als Abzeichen oder angeheftetes Symbol mit einer soliden Füllung verwendet werden, die sich visuell von einem vollfarbigen Startsymbol unterscheidet.
        Mit mehreren Schlüsselwörtern, wie `monochrome maskable`, kann der Browser das Symbol für einen dieser Zwecke verwenden.
        Wenn ein nicht erkanntes `purpose` zusammen mit gültigen Werten enthalten ist (z.B. `monochrome fizzbuzz`), kann das Symbol dennoch für die gültigen Zwecke verwendet werden.
        Wenn jedoch nur nicht erkannte Zwecke angegeben sind (z.B. `fizzbuzz`), dann wird es ignoriert.

        Gültige Werte sind:

        - `monochrome`

          - : Gibt an, dass das Symbol als einfarbiges Symbol mit einer soliden Füllung verwendet werden soll.
            Mit diesem Wert verwirft ein Browser die Farbinformationen im Symbol und verwendet nur den Alphakanal als Maske über jede solide Füllung.

        - `maskable`

          - : Gibt an, dass das Symbol mit Symbolmasken und Sicherheitszone entworfen wurde, sodass jeder Teil des Bildes außerhalb der Sicherheitszone ignoriert und maskiert werden kann.

        - `any`
          - : Gibt an, dass das Symbol in jedem Kontext verwendet werden kann. Dies ist der Standardwert.

## Beschreibung

Symbole identifizieren Ihre Web-App in verschiedenen Kontexten eindeutig, wie im Task-Switcher eines Betriebssystems, Systemeinstellungen, Startbildschirm, App-Listen und anderen Orten, an denen Anwendungssymbole angezeigt werden.

Der Kontext, in dem ein Symbol verwendet werden kann, wird vom Browser und dem Betriebssystem basierend auf den angegebenen Größen und Formaten bestimmt.

## Sicherheitsüberlegungen

Die Fähigkeit des Browsers, ein Symbölbild abzurufen, wird durch die Content Security Policy ([CSP](/de/docs/Glossary/CSP)) des Eigentümerdokuments des Manifests gesteuert, insbesondere durch die [`img-src`](/de/docs/Web/HTTP/Headers/Content-Security-Policy/img-src) Direktive. Dieser Sicherheitsaspekt bezieht sich auf die `src` Eigenschaft.

Zum Beispiel, wenn die `img-src` Direktive in einem CSP-Header `icons.example.com` angibt, wären nur Symbole von dieser Domäne abrufbar. In einem Manifest mit zwei Symbolen, eines von `icons.example.com/lowres` und ein anderes von `other.com/hi-res`, würde nur das erste aufgrund von CSP-Beschränkungen erfolgreich abgerufen.

## Leistungsüberlegungen

Das Angeben der `type` Eigenschaft kann die Leistung erheblich verbessern, da es Browsern ermöglicht, Bilder mit nicht unterstützten Formaten leichter zu ignorieren.
Wenn Sie das `type`-Eigenschaft nicht angeben, müssen Browser möglicherweise das Bildformat durch aufwendigere Methoden ermitteln, wie etwa [MIME-Sniffing](/de/docs/Web/HTTP/Basics_of_HTTP/MIME_types#mime_sniffing) der Datei für eine Signatur.

Mindestens, wenn Sie die `type`-Eigenschaft weglassen, verwenden Sie geeignete und eindeutige Dateiendungen für Ihre Symbolbilder.

## Beispiele

### Mehrere Symbole deklarieren

Dieses Beispiel zeigt, wie mehrere Symbole für verschiedene Szenarien und Geräte deklariert werden. Wenn ein Symbol für eine bestimmte Situation nicht unterstützt oder nicht verfügbar ist, fallen Browser auf andere verfügbare Formate und Größen zurück.

- Zwei Symbole derselben Größe (`48x48`) werden in verschiedenen Formaten bereitgestellt. Das erste ist ausdrücklich als [WebP](/de/docs/Web/Media/Formats/Image_types#webp_image) mit der `type`-Eigenschaft angegeben. Wenn ein Browser WebP nicht unterstützt, fällt er auf das zweite Symbol der gleichen Größe zurück. Beim zweiten Symbol bestimmt der Browser den MIME-Typ entweder aus dem HTTP-Header oder durch Inferenz aus dem Inhalt der Bilddatei. Symbole dieser Größe werden typischerweise für Browsertabs und Lesezeichen verwendet.

- Eine [ICO](/de/docs/Web/Media/Formats/Image_types#ico_microsoft_windows_icon) Datei wird mit mehreren Größen von `72x72` bis `256x256` bereitgestellt. ICO-Dateien enthalten mehrere Raster-Symbole, die jeweils für verschiedene Anzeigengrößen optimiert sind. Symbole dieser Größen werden häufig für Desktop-Verknüpfungen verwendet.

- Für größere Symbole (`257x257` und darüber) wird eine [SVG](/de/docs/Web/Media/Formats/Image_types#svg_scalable_vector_graphics) Datei angegeben. Der `sizes`-Wert dieses Symbols ist auf `any` gesetzt, was einem Browser erlaubt, dieses Symbol in jeder Größe zu verwenden. SVG-Symbole behalten ihre Qualität bei größeren Größen. Diese Symbole sind ideal für hochauflösende Anzeigen wie in [progressiven Web-Apps (PWAs)](/de/docs/Web/Progressive_web_apps).

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

- [Bilddateityp- und Formatleitfaden](/de/docs/Web/Media/Formats/Image_types#webp_image)
- [Monochrome Symbole und solide Füllungen](https://w3c.github.io/manifest/#monochrome-icons-and-solid-fills)
- [Icon-Masken und Sicherheitszone](https://w3c.github.io/manifest/#icon-masks)
