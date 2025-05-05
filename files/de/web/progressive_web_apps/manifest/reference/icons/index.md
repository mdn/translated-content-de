---
title: icons
slug: Web/Progressive_web_apps/Manifest/Reference/icons
l10n:
  sourceCommit: 628b29f53d15f203c4a6b33c1d0303f864f6af63
---

Das `icons` Manifestmitglied wird verwendet, um eine oder mehrere Bilddateien anzugeben, die die Symbole definieren, die Ihre Webanwendung repräsentieren.

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
    Zum Beispiel können Sie Symbole hinzufügen, um Ihre Web-App auf Geräten mit unterschiedlicher Bildschirmgröße darzustellen, für die Integration mit verschiedenen Betriebssystemen, für Startbildschirme oder für App-Benachrichtigungen.

    Jedes Symbolobjekt kann eine oder mehrere Eigenschaften haben. Davon ist nur `src` erforderlich. Die möglichen Eigenschaften sind:

    - `src`

      - : Ein String, der den Pfad zur Symbolbilddatei angibt.
        Wenn `src` relativ ist, wird der Pfad relativ zur URL der Manifestdatei aufgelöst.
        Zum Beispiel wird die relative URL `images/icon-192x192.png` für die Manifestdatei unter `https://example.com/manifest.json` als `https://example.com/images/icon-192x192.png` aufgelöst.

    - `sizes` {{Optional_Inline}}

      - : Ein String, der eine oder mehrere Größen angibt, in denen die Symboldatei verwendet werden kann.
        Jede Größe wird als `<Breite in Pixel>x<Höhe in Pixel>` angegeben.
        Wenn mehrere Größen angegeben werden, werden sie durch Leerzeichen getrennt; zum Beispiel `48x48 96x96`.
        Wenn mehrere Symbole verfügbar sind, können Browser das am besten geeignete Symbol für einen bestimmten Anzeigezusammenhang auswählen.
        Für Rasterformate wie PNG wird die Angabe der exakten verfügbaren Größen empfohlen.
        Für Vektorformate wie SVG können Sie `any` verwenden, um die Skalierbarkeit anzuzeigen.
        Wenn `sizes` nicht angegeben wird, kann die Auswahl und Anzeige des Symbols je nach Implementierung des Browsers variieren.

        Beachten Sie, dass das Format von `sizes` dem Attribut [`sizes`](/de/docs/Web/HTML/Reference/Elements/link#sizes) des HTML-Elements `<link>` ähnelt.

    - `type` {{Optional_Inline}}

      - : Ein String, der den {{Glossary("MIME_type", "MIME-Typ")}} des Symbols angibt.
        Der Wert sollte im Format `image/<subtype>` sein, wobei `<subtype>` ein spezifisches Bildformat ist; zum Beispiel, `image/png` zeigt ein PNG-Bild an.
        Falls weggelassen, schließen die Browser in der Regel den Bildtyp anhand der Dateiendung.

    - `purpose` {{Optional_Inline}}

      - : Ein groß- und kleinsensitiver Schlüsselwort-String, der einen oder mehrere Kontexte angibt, in denen das Symbol vom Browser oder Betriebssystem verwendet werden kann.
        Der Wert kann ein einzelnes Schlüsselwort oder mehrere durch Leerzeichen getrennte Schlüsselwörter sein.
        Wird es weggelassen, kann der Browser das Symbol für jeden Zweck verwenden.

        Browser verwenden diese Werte als Hinweise, um festzustellen, wo und wie ein Symbol angezeigt wird.
        Zum Beispiel könnte ein `monochrome`-Symbol als Abzeichen oder angeheftetes Symbol mit einer soliden Füllung verwendet werden, das visuell von einem vollfarbigen Startsymbol unterscheidbar ist.
        Bei mehreren Schlüsselwörtern, z.B. `monochrome maskable`, kann der Browser das Symbol für jeden dieser Zwecke verwenden.
        Wenn ein nicht erkanntes Ziel zusammen mit gültigen Werten eingeschlossen ist (z.B. `monochrome fizzbuzz`), kann das Symbol dennoch für die gültigen Zwecke verwendet werden.
        Wenn hingegen nur nicht erkannte Zwecke angegeben werden (z.B. `fizzbuzz`), wird es ignoriert.

        Gültige Werte sind:

        - `monochrome`

          - : Gibt an, dass das Symbol als monochromes Symbol mit einer soliden Füllung verwendet werden soll.
            Mit diesem Wert verwirft ein Browser die Farbinformationen im Symbol und verwendet nur den Alphakanal als Maske über einer soliden Füllung.

        - `maskable`

          - : Gibt an, dass das Symbol unter Berücksichtigung von Symbolmasken und sicheren Zonen gestaltet wurde, so dass jeder Teil des Bildes außerhalb der sicheren Zone ignoriert und maskiert werden kann.

        - `any`
          - : Gibt an, dass das Symbol in jedem Kontext verwendet werden kann. Dies ist der Standardwert.

## Beschreibung

Symbole identifizieren Ihre Web-App eindeutig in verschiedenen Kontexten, wie im Task-Switcher eines Betriebssystems, in Systemeinstellungen, auf dem Startbildschirm, in App-Listen und anderen Orten, an denen Anwendungssymbole angezeigt werden.

Der Kontext, in dem ein Symbol verwendet werden kann, wird vom Browser und dem Betriebssystem auf Basis der angegebenen Größen und Formate bestimmt.

## Sicherheitsüberlegungen

Die Fähigkeit des Browsers, ein Symbolbild abzurufen, wird durch die Content Security Policy ({{Glossary("CSP", "CSP")}}) des Besitzerdokuments des Manifests bestimmt, insbesondere durch die Direktive [`img-src`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/img-src). Dieser Sicherheitsaspekt bezieht sich auf die `src`-Eigenschaft.

Ein Beispiel: Wenn die `img-src`-Direktive im CSP-Header `icons.example.com` spezifiziert, können nur Symbole von dieser Domain abgerufen werden. In einem Manifest mit zwei Symbolen, einem von `icons.example.com/low-res` und einem anderen von `other.com/hi-res`, wird nur das erstere aufgrund von CSP-Beschränkungen erfolgreich abgerufen.

## Leistungsüberlegungen

Die Angabe der `type`-Eigenschaft kann die Leistung erheblich verbessern, da sie es Browsern ermöglicht, Bilder mit nicht unterstützten Formaten leichter zu ignorieren.
Wenn Sie die `type`-Eigenschaft nicht angeben, müssen Browser möglicherweise das Bildformat mit ressourcenintensiveren Methoden wie [MIME-Sniffing](/de/docs/Web/HTTP/Guides/MIME_types#mime_sniffing) der Datei für eine Signatur ermitteln.

Mindestens, wenn Sie die `type`-Eigenschaft weglassen, verwenden Sie geeignete und eindeutige Dateierweiterungen für Ihre Symbolbilder.

## Beispiele

### Mehrere Symbole deklarieren

Dieses Beispiel zeigt, wie Sie mehrere Symbole für verschiedene Szenarien und Geräte deklarieren. Wenn ein Symbol für eine bestimmte Situation nicht unterstützt wird oder nicht verfügbar ist, werden die Browser andere verfügbare Formate und Größen verwenden.

- Zwei Symbole derselben Größe (`48x48`) werden in unterschiedlichen Formaten bereitgestellt. Das erste wird ausdrücklich als [WebP](/de/docs/Web/Media/Guides/Formats/Image_types#webp_image) mit der `type`-Eigenschaft spezifiziert. Wenn ein Browser WebP nicht unterstützt, wird er auf das zweite Symbol derselben Größe zurückgreifen. Für das zweite Symbol wird der MIME-Typ entweder aus dem HTTP-Header bestimmt oder durch Ableitung aus dem Dateinhalt des Bildes. Symbole in dieser Größe werden typischerweise für Browser-Tabs und Lesezeichen verwendet.

- Eine [ICO](/de/docs/Web/Media/Guides/Formats/Image_types#ico_microsoft_windows_icon)-Datei wird mit mehreren Größen von `72x72` bis `256x256` bereitgestellt. ICO-Dateien enthalten mehrere Raster-Symbole, die individuell für verschiedene Anzeigegrößen optimiert sind. Symbole in diesen Größen werden häufig für Desktop-Verknüpfungen verwendet.

- Für größere Symbole (`257x257` und darüber) wird eine [SVG](/de/docs/Web/Media/Guides/Formats/Image_types#svg_scalable_vector_graphics)-Datei spezifiziert. Der `sizes`-Wert dieses Symbols ist auf `any` gesetzt, was es einem Browser erlaubt, dieses Symbol in jeder Größe zu verwenden. SVG-Symbole behalten ihre Qualität bei größeren Größen bei. Diese Symbole sind ideal für hochauflösende Displays, wie in [progressive web apps (PWAs)](/de/docs/Web/Progressive_web_apps).

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

- [Leitfaden für Bilddateitypen und -formate](/de/docs/Web/Media/Guides/Formats/Image_types#webp_image)
- [Monochrome Symbole und solide Füllungen](https://w3c.github.io/manifest/#monochrome-icons-and-solid-fills)
- [Symbolmasken und sichere Zone](https://w3c.github.io/manifest/#icon-masks)
