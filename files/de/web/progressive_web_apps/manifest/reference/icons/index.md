---
title: icons
slug: Web/Progressive_web_apps/Manifest/Reference/icons
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{QuickLinksWithSubpages("/de/docs/Web/Progressive_web_apps/Manifest/Reference")}}

Das `icons`-Manifestmitglied wird verwendet, um eine oder mehrere Bilddateien zu spezifizieren, die die Symbole zur Darstellung Ihrer Webanwendung definieren.

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
    Jedes Objekt repräsentiert ein Symbol, das in einem bestimmten Kontext verwendet wird.
    Beispielsweise können Sie Symbole hinzufügen, um Ihre Web-App auf Geräten mit unterschiedlichen Bildschirmgrößen darzustellen, für die Integration mit verschiedenen Betriebssystemen, auf Startbildschirmen oder für App-Benachrichtigungen.

    Jedes Symbolobjekt kann eine oder mehrere Eigenschaften haben. Davon ist nur `src` erforderlich. Die möglichen Eigenschaften sind:

    - `src`

      - : Ein String, der den Pfad zur Symboldatei angibt.
        Wenn `src` relativ ist, wird der Pfad relativ zur URL der Manifestdatei aufgelöst.
        Beispielsweise wird die relative URL `images/icon-192x192.png` für die Manifestdatei unter `https://example.com/manifest.json` als `https://example.com/images/icon-192x192.png` aufgelöst.

    - `sizes` {{Optional_Inline}}

      - : Ein String, der eine oder mehrere Größen angibt, bei denen die Symboldatei verwendet werden kann.
        Jede Größe wird als `<Breite in Pixel>x<Höhe in Pixel>` angegeben.
        Wenn mehrere Größen angegeben sind, werden sie durch Leerzeichen getrennt; zum Beispiel `48x48 96x96`.
        Wenn mehrere Symbole verfügbar sind, können Browser das am besten geeignete Symbol für einen bestimmten Anzeigekontext auswählen.
        Für Rasterformate wie PNG wird empfohlen, die genau verfügbaren Größen anzugeben.
        Für Vektorformate wie SVG können Sie `any` verwenden, um Skalierbarkeit anzuzeigen.
        Wenn `sizes` nicht angegeben ist, kann die Auswahl und Anzeige des Symbols je nach Implementierung des Browsers variieren.

        Beachten Sie, dass das Format von `sizes` dem Attribut [`sizes`](/de/docs/Web/HTML/Element/link#sizes) des HTML `<link>`-Elements ähnelt.

    - `type` {{Optional_Inline}}

      - : Ein String, der den {{Glossary("MIME_type", "MIME-Typ")}} des Symbols angibt.
        Der Wert sollte im Format `image/<subtype>` vorliegen, wobei `<subtype>` ein spezifisches Bildformat ist; zum Beispiel zeigt `image/png` ein PNG-Bild an.
        Falls weggelassen, leiten Browser in der Regel den Bildtyp aus der Dateierweiterung ab.

    - `purpose` {{Optional_Inline}}

      - : Ein Groß-/Kleinschreibung beachtender Schlüsselwort-String, der einen oder mehrere Kontexte angibt, in denen das Symbol vom Browser oder Betriebssystem verwendet werden kann.
        Der Wert kann ein einzelnes Schlüsselwort oder mehrere durch Leerzeichen getrennte Schlüsselwörter sein.
        Falls weggelassen, kann der Browser das Symbol für beliebige Zwecke verwenden.

        Browser verwenden diese Werte als Hinweise, um zu bestimmen, wo und wie ein Symbol angezeigt wird.
        Zum Beispiel könnte ein `monochrome`-Symbol als Abzeichen oder angeheftetes Symbol mit einer soliden Füllung verwendet werden, die sich visuell von einem vollfarbigen Startsymbol unterscheidet.
        Mit mehreren Schlüsselwörtern, beispielsweise `monochrome maskable`, kann der Browser das Symbol für jeden dieser Zwecke verwenden.
        Wenn ein nicht erkanntes Ziel zusammen mit gültigen Werten eingeschlossen ist (z.B. `monochrome fizzbuzz`), kann das Symbol trotzdem für die gültigen Zwecke verwendet werden.
        Wird jedoch nur ein nicht erkanntes Ziel angegeben (z.B. `fizzbuzz`), wird es ignoriert.

        Gültige Werte sind:

        - `monochrome`

          - : Gibt an, dass das Symbol als monochromes Symbol mit solider Füllung verwendet werden soll.
            Mit diesem Wert verwirft ein Browser die Farbinformation im Symbol und verwendet nur den Alphakanal als Maske über eine beliebige solide Füllung.

        - `maskable`

          - : Gibt an, dass das Symbol mit Symbolmasken und Sicherheitszonen entworfen wurde, sodass jeder Teil des Bildes außerhalb der Sicherheitszone ignoriert und maskiert werden kann.

        - `any`
          - : Gibt an, dass das Symbol in jedem Kontext verwendet werden kann. Dies ist der Standardwert.

## Beschreibung

Symbole identifizieren Ihre Web-App eindeutig in verschiedenen Kontexten, wie z.B. im Task-Switcher eines Betriebssystems, in Systemeinstellungen, auf dem Startbildschirm, in App-Listen und anderen Orten, wenn Anwendungssymbole angezeigt werden.

Der Kontext, in dem ein Symbol verwendet werden kann, wird vom Browser und Betriebssystem basierend auf den angegebenen Größen und Formaten bestimmt.

## Sicherheitsüberlegungen

Die Fähigkeit des Browsers, ein Symbolbild abzurufen, wird durch die Content Security Policy ({{Glossary("CSP", "CSP")}}) des Besitzerdokuments des Manifests geregelt, insbesondere durch die [`img-src`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/img-src)-Direktive. Dieser Sicherheitsaspekt bezieht sich auf die `src`-Eigenschaft.

Zum Beispiel: Wenn die `img-src`-Direktive in einem CSP-Header `icons.example.com` spezifiziert, würden nur Icons von dieser Domain abgerufen werden können. In einem Manifest mit zwei Icons, eines von `icons.example.com/low-res` und ein weiteres von `other.com/hi-res`, wird nur das erstgenannte erfolgreich abgerufen wegen der CSP-Beschränkungen.

## Leistungsüberlegungen

Die Angabe der `type`-Eigenschaft kann die Leistung erheblich verbessern, da sie es Browsern ermöglicht, nicht unterstützte Formate leichter zu ignorieren.
Wenn Sie die `type`-Eigenschaft nicht angeben, müssen Browser möglicherweise den Bildtyp unter Verwendung ressourcenintensiverer Methoden, wie dem [MIME-Sniffing](/de/docs/Web/HTTP/Guides/MIME_types#mime_sniffing) der Datei für eine Signatur, ableiten.

Geben Sie mindestens dann, wenn Sie die `type`-Eigenschaft weglassen, geeignete und eindeutige Dateierweiterungen für Ihre Symboldateien an.

## Beispiele

### Mehrere Symbole deklarieren

Dieses Beispiel zeigt, wie Sie mehrere Symbole für verschiedene Szenarien und Geräte deklarieren. Wenn ein Symbol für eine bestimmte Situation nicht unterstützt oder nicht verfügbar ist, werden Browser auf andere verfügbare Formate und Größen zurückgreifen.

- Es werden zwei Symbole derselben Größe (`48x48`) in verschiedenen Formaten bereitgestellt. Das erste Symbol wird explizit als [WebP](/de/docs/Web/Media/Guides/Formats/Image_types#webp_image) unter Verwendung der `type`-Eigenschaft angegeben. Wenn ein Browser WebP nicht unterstützt, fällt er auf das zweite Symbol derselben Größe zurück. Für das zweite Symbol wird der MIME-Typ entweder aus dem HTTP-Header bestimmt oder aus dem Bildinhalt abgeleitet. Symbole dieser Größe werden typischerweise für Browsertabs und Lesezeichen verwendet.

- Eine [ICO](/de/docs/Web/Media/Guides/Formats/Image_types#ico_microsoft_windows_icon)-Datei wird mit mehreren Größen von `72x72` bis `256x256` bereitgestellt. ICO-Dateien enthalten mehrere Raster-Symbole, die individuell für verschiedene Anzeigegrößen optimiert sind. Symbole dieser Größen werden häufig für Desktop-Verknüpfungen verwendet.

- Für größere Symbole (`257x257` und darüber) wird eine [SVG](/de/docs/Web/Media/Guides/Formats/Image_types#svg_scalable_vector_graphics)-Datei angegeben. Der `sizes`-Wert dieses Symbols ist auf `any` gesetzt, was es einem Browser ermöglicht, dieses Symbol in jeder Größe zu verwenden. SVG-Symbole behalten ihre Qualität bei größeren Größen bei. Diese Symbole sind ideal für hochauflösende Displays wie in [progressive web apps (PWAs)](/de/docs/Web/Progressive_web_apps).

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

- [Leitfaden zu Bilddateitypen und Formaten](/de/docs/Web/Media/Guides/Formats/Image_types#webp_image)
- [Monochrome Symbole und solide Füllungen](https://w3c.github.io/manifest/#monochrome-icons-and-solid-fills)
- [Symbolmasken und Sicherheitszonen](https://w3c.github.io/manifest/#icon-masks)
