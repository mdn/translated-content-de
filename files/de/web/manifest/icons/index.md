---
title: Symbole
slug: Web/Manifest/icons
l10n:
  sourceCommit: 7742fc98db494e89b706131c18811e2b853ab1d0
---

{{QuickLinksWithSubpages("/de/docs/Web/Manifest")}}

Das `icons`-Manifestglied wird verwendet, um eine oder mehrere Bilddateien anzugeben, die die Symbole definieren, die Ihre Webanwendung repräsentieren.

## Syntax

```json-nolint
/* Ein einziges Symbol mit der minimal erforderlichen Eigenschaft */
"icons": [
  {
    "src": "icon/basic-icon.png"
  }
]

/* Ein einziges Symbol mit mehreren Verwendungszwecken */
"icons": [
  {
    "src": "icon/basic-icon.png",
    "purpose": "monochrome maskable"
  }
]

/* Zwei Symbole mit verschiedenen Eigenschaften */
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
    Jedes Objekt repräsentiert ein Symbol, das in einem bestimmten Kontext verwendet wird.
    Zum Beispiel können Sie Symbole hinzufügen, um Ihre Web-App auf Geräten mit unterschiedlichen Bildschirmgrößen, für die Integration mit verschiedenen Betriebssystemen, für Startbildschirme oder für App-Benachrichtigungen zu repräsentieren.

    Jedes Symbolobjekt kann eine oder mehrere Eigenschaften haben. Von diesen ist nur `src` erforderlich. Die möglichen Eigenschaften umfassen:

    - `src`

      - : Ein String, der den Pfad zur Symbolbilddatei angibt.
        Wenn `src` relativ ist, wird der Pfad relativ zur URL der Manifestdatei aufgelöst.
        Zum Beispiel wird die relative URL `images/icon-192x192.png` für die Manifestdatei an `https://example.com/manifest.json` als `https://example.com/images/icon-192x192.png` aufgelöst.

    - `sizes` {{Optional_Inline}}

      - : Ein String, der eine oder mehrere Größen angibt, in denen die Symboldatei verwendet werden kann.
        Jede Größe wird als `<Breite in Pixel>x<Höhe in Pixel>` angegeben.
        Wenn mehrere Größen angegeben sind, werden sie durch Leerzeichen getrennt; zum Beispiel `48x48 96x96`.
        Wenn mehrere Symbole verfügbar sind, können Browser das am besten geeignete Symbol für einen bestimmten Anzeige-Kontext auswählen.
        Für Rasterformate wie PNG wird empfohlen, genau die verfügbaren Größen anzugeben.
        Für Vektorformate wie SVG können Sie `any` verwenden, um die Skalierbarkeit anzuzeigen.
        Wenn `sizes` nicht angegeben ist, kann die Auswahl und Anzeige des Symbols je nach Implementierung des Browsers variieren.

        Beachten Sie, dass das Format von `sizes` dem [`sizes`](/de/docs/Web/HTML/Element/link#sizes)-Attribut des HTML-Elements `<link>` ähnelt.

    - `type` {{Optional_Inline}}

      - : Ein String, der den {{Glossary("MIME type")}} des Symbols angibt.
        Der Wert sollte im Format `image/<subtype>` sein, wobei `<subtype>` ein bestimmtes Bildformat ist; zum Beispiel zeigt `image/png` ein PNG-Bild an.
        Wird weggelassen, leiten Browser den Bildtyp typischerweise von der Dateierweiterung ab.

    - `purpose` {{Optional_Inline}}

      - : Ein groß-/kleinschreibungssensitiver Schlüsselwort-String, der einen oder mehrere Kontexte angibt, in denen das Symbol vom Browser oder Betriebssystem verwendet werden kann.
        Der Wert kann ein einzelnes Schlüsselwort oder mehrere durch Leerzeichen getrennte Schlüsselwörter sein.
        Wird er weggelassen, kann der Browser das Symbol für jeden Zweck verwenden.

        Browser verwenden diese Werte als Hinweise, um zu bestimmen, wo und wie ein Symbol angezeigt wird.
        Zum Beispiel könnte ein `monochrome` Symbol als Abzeichen oder angeheftetes Symbol mit einer festen Füllung verwendet werden, die sich visuell von einem mehrfarbigen Startsymbol unterscheidet.
        Bei mehreren Schlüsselwörtern, z.B. `monochrome maskable`, kann der Browser das Symbol für jeden dieser Zwecke verwenden.
        Wenn ein nicht erkanntes Ziel zusammen mit gültigen Werten (z.B. `monochrome fizzbuzz`) enthalten ist, kann das Symbol trotzdem für die gültigen Zwecke verwendet werden.
        Wenn jedoch nur nicht erkannte Ziele angegeben sind (z.B. `fizzbuzz`), wird es ignoriert.

        Gültige Werte umfassen:

        - `monochrome`

          - : Gibt an, dass das Symbol als monochromes Symbol mit fester Füllung verwendet werden soll.
            Mit diesem Wert verwirft ein Browser die Farbinformationen im Symbol und verwendet nur den Alphakanal als Maske über jede feste Füllung.

        - `maskable`

          - : Gibt an, dass das Symbol mit Blick auf Symbolmasken und sicheren Zonen entworfen wurde, sodass jeder Teil des Bildes außerhalb der sicheren Zone ignoriert und abgeblendet werden kann.

        - `any`
          - : Gibt an, dass das Symbol in jedem Kontext verwendet werden kann. Dies ist der Standardwert.

## Beschreibung

Symbole identifizieren Ihre Web-App eindeutig in verschiedenen Kontexten, wie im Aufgabenumschalter eines Betriebssystems, den Systemeinstellungen, dem Startbildschirm, Auflistungen von Apps und anderen Orten, an denen Anwendungs-Symbole angezeigt werden.

Der Kontext, in dem ein Symbol verwendet werden kann, wird vom Browser und dem Betriebssystem in Abhängigkeit von den angegebenen Größen und Formaten bestimmt.

## Sicherheitsüberlegungen

Die Fähigkeit des Browsers, ein Symbolbild abzurufen, wird durch die Content Security Policy ({{Glossary("CSP")}}) des auf das Manifest verweisenden Dokuments geregelt, insbesondere durch die [`img-src`](/de/docs/Web/HTTP/Headers/Content-Security-Policy/img-src)-Direktive. Dieser Sicherheitsaspekt bezieht sich auf die `src`-Eigenschaft.

Zum Beispiel, wenn die `img-src`-Direktive in einem CSP-Header `icons.example.com` angibt, können nur Symbole von dieser Domain abgerufen werden. In einem Manifest mit zwei Symbolen, eines von `icons.example.com/lowres` und ein anderes von `other.com/hi-res`, würde nur das erste erfolgreich abgerufen werden aufgrund von CSP-Beschränkungen.

## Leistungsüberlegungen

Die Angabe der `type`-Eigenschaft kann die Leistung erheblich verbessern, da es Browsern ermöglicht, Bilder mit nicht unterstützten Formaten leichter zu ignorieren.
Wenn Sie die `type`-Eigenschaft nicht angeben, müssen Browser möglicherweise das Bildformat mithilfe ressourcenintensiver Methoden ableiten, wie z.B. [MIME-Sniffing](/de/docs/Web/HTTP/Basics_of_HTTP/MIME_types#mime_sniffing) des Dateisignatur.

Mindestens sollten Sie, wenn Sie die `type`-Eigenschaft weglassen, geeignete und eindeutige Dateierweiterungen für Ihre Symbolbilder verwenden.

## Beispiele

### Deklaration mehrerer Symbole

Dieses Beispiel zeigt, wie man mehrere Symbole für verschiedene Szenarien und Geräte deklarieren kann. Wenn ein Symbol für eine bestimmte Situation nicht unterstützt oder nicht verfügbar ist, greifen Browser auf andere verfügbare Formate und Größen zurück.

- Zwei Symbole derselben Größe (`48x48`) werden in unterschiedlichen Formaten bereitgestellt. Das erste wird explizit als [WebP](/de/docs/Web/Media/Formats/Image_types#webp_image) unter Verwendung der `type`-Eigenschaft angegeben. Wenn ein Browser WebP nicht unterstützt, fällt er auf das zweite Symbol derselben Größe zurück. Für das zweite Symbol bestimmt der Browser den MIME-Typ entweder aus dem HTTP-Header oder indem er ihn aus dem Inhalt der Bilddatei ableitet. Symbole dieser Größe werden typischerweise für Browser-Tabs und Lesezeichen verwendet.

- Eine [ICO](/de/docs/Web/Media/Formats/Image_types#ico_microsoft_windows_icon)-Datei wird mit mehreren Größen von `72x72` bis `256x256` bereitgestellt. ICO-Dateien enthalten mehrere Raster-Symbole, die jeweils für verschiedene Anzeigengrößen optimiert sind. Symbole dieser Größen werden häufig für Desktop-Verknüpfungen verwendet.

- Für größere Symbole (`257x257` und größer) wird eine [SVG](/de/docs/Web/Media/Formats/Image_types#svg_scalable_vector_graphics)-Datei angegeben. Der `sizes`-Wert dieses Symbols ist auf `any` gesetzt, was einem Browser erlaubt, dieses Symbol in jeder Größe zu verwenden. SVG-Symbole behalten ihre Qualität auch bei größeren Größen bei. Diese Symbole sind ideal für hochauflösende Anzeigen wie in [Progressiven Web-Apps (PWAs)](/de/docs/Web/Progressive_web_apps).

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
- [Symbolmasken und sichere Zone](https://w3c.github.io/manifest/#icon-masks)
