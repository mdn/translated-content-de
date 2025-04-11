---
title: icons
slug: Web/Progressive_web_apps/Manifest/Reference/icons
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{QuickLinksWithSubpages("/de/docs/Web/Progressive_web_apps/Manifest/Reference")}}

Das `icons`-Manifestmitglied wird verwendet, um eine oder mehrere Bilddateien festzulegen, die die Symbole repräsentieren, die Ihre Webanwendung darstellen.

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
    Jedes Objekt stellt ein Symbol dar, das in einem bestimmten Kontext verwendet werden soll.
    Zum Beispiel können Sie Symbole hinzufügen, um Ihre Web-App auf Geräten mit unterschiedlichen Bildschirmgrößen darzustellen, für die Integration mit verschiedenen Betriebssystemen, für Startbildschirme oder für App-Benachrichtigungen.

    Jedes Symbolobjekt kann eine oder mehrere Eigenschaften haben. Davon ist nur `src` erforderlich. Die möglichen Eigenschaften umfassen:

    - `src`

      - : Ein Zeichenfolgenwert, der den Pfad zur Symbol-Bilddatei angibt.
        Wenn `src` relativ ist, wird der Pfad relativ zur URL der Manifestdatei aufgelöst.
        Zum Beispiel wird die relative URL `images/icon-192x192.png` für die Manifestdatei unter `https://example.com/manifest.json` als `https://example.com/images/icon-192x192.png` aufgelöst.

    - `sizes` {{Optional_Inline}}

      - : Eine Zeichenfolge, die eine oder mehrere Größen angibt, bei denen die Symboldatei verwendet werden kann.
        Jede Größe wird als `<Breite in Pixel>x<Höhe in Pixel>` angegeben.
        Wenn mehrere Größen angegeben sind, werden sie durch Leerzeichen getrennt; zum Beispiel `48x48 96x96`.
        Wenn mehrere Symbole verfügbar sind, können Browser das am besten geeignete Symbol für einen bestimmten Anzeigekontext auswählen.
        Für Rasterformate wie PNG wird empfohlen, die tatsächlich verfügbaren Größen anzugeben.
        Für Vektorformate wie SVG können Sie `any` verwenden, um die Skalierbarkeit anzuzeigen.
        Wenn `sizes` nicht angegeben ist, kann die Auswahl und Anzeige des Symbols je nach Implementierung des Browsers variieren.

        Beachten Sie, dass das Format von `sizes` dem Attribut [`sizes`](/de/docs/Web/HTML/Reference/Elements/link#sizes) des HTML-`<link>`-Elements ähnlich ist.

    - `type` {{Optional_Inline}}

      - : Eine Zeichenfolge, die den {{Glossary("MIME_type", "MIME-Typ")}} des Symbols angibt.
        Der Wert sollte im Format `image/<Untertyp>` sein, wobei `<Untertyp>` ein spezifisches Bildformat ist; beispielsweise zeigt `image/png` ein PNG-Bild an.
        Wenn der Wert weggelassen wird, leiten Browser den Bildtyp normalerweise aus der Dateierweiterung ab.

    - `purpose` {{Optional_Inline}}

      - : Ein Groß-/Kleinschreibung beachtendes Schlüsselwort, das einen oder mehrere Kontexte angibt, in denen das Symbol vom Browser oder Betriebssystem verwendet werden kann.
        Der Wert kann ein einzelnes Schlüsselwort oder mehrere durch Leerzeichen getrennte Schlüsselwörter enthalten.
        Wenn es weggelassen wird, kann der Browser das Symbol für jeden Zweck verwenden.

        Browser verwenden diese Werte als Hinweise, um zu bestimmen, wo und wie ein Symbol angezeigt wird.
        Zum Beispiel könnte ein `monochrome`-Symbol als Abzeichen oder angeheftetes Symbol mit einer einfarbigen Füllung verwendet werden, die sich visuell von einem vollfarbigen Startsymbol abhebt.
        Mit mehreren Schlüsselwörtern, sagen wir `monochrome maskable`, kann der Browser das Symbol für jeden dieser Zwecke verwenden.
        Wenn ein nicht erkanntes Ziel zusammen mit gültigen Werten enthalten ist (z.B. `monochrome fizzbuzz`), kann das Symbol weiterhin für die gültigen Zwecke verwendet werden.
        Wenn jedoch nur nicht erkannte Ziele angegeben sind (z.B. `fizzbuzz`), wird es ignoriert.

        Gültige Werte umfassen:

        - `monochrome`

          - : Zeigt an, dass das Symbol als monochromes Symbol mit einer einfarbigen Füllung verwendet werden soll.
            Mit diesem Wert verwirft ein Browser die Farbinformationen im Symbol und verwendet nur den Alphakanal als Maske über jede einfarbige Füllung.

        - `maskable`

          - : Zeigt an, dass das Symbol mit Blick auf Symbolmasken und sichere Zonen entworfen wurde, so dass jeder Teil des Bildes außerhalb der sicheren Zone ignoriert und maskiert werden kann.

        - `any`
          - : Zeigt an, dass das Symbol in jedem Kontext verwendet werden kann. Dies ist der Standardwert.

## Beschreibung

Symbole identifizieren Ihre Web-App in verschiedenen Kontexten eindeutig, wie z.B. im Task-Switcher eines Betriebssystems, in den Systemeinstellungen, auf dem Startbildschirm, in App-Listen und an anderen Orten, an denen Anwendungssymbole angezeigt werden.

Der Kontext, in dem ein Symbol verwendet werden kann, wird vom Browser und dem Betriebssystem basierend auf den angegebenen Größen und Formaten bestimmt.

## Sicherheitsüberlegungen

Die Fähigkeit des Browsers, ein Symbolbild abzurufen, wird durch die Content-Sicherheitsrichtlinie ({{Glossary("CSP", "CSP")}}) des Eigentümerdokuments des Manifests geregelt, insbesondere durch die Direktive [`img-src`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/img-src). Dieser Sicherheitsaspekt bezieht sich auf die `src`-Eigenschaft.

Zum Beispiel, wenn die `img-src`-Direktive in einem CSP-Header `icons.example.com` angibt, wären nur Symbole von dieser Domain abrufbar. In einem Manifest mit zwei Symbolen, einem von `icons.example.com/low-res` und einem von `other.com/hi-res`, würde aufgrund von CSP-Beschränkungen nur das erste erfolgreich abgerufen werden.

## Leistungsüberlegungen

Das Angeben der `type`-Eigenschaft kann die Leistung erheblich verbessern, da es Browsern ermöglicht, Bilder mit nicht unterstützten Formaten leichter zu ignorieren.
Wenn Sie die `type`-Eigenschaft nicht angeben, müssen Browser möglicherweise das Bildformat mit ressourcenintensiveren Methoden ermitteln, wie z.B. durch [MIME-Sniffing](/de/docs/Web/HTTP/Guides/MIME_types#mime_sniffing) der Datei nach einer Signatur.

Wenn Sie die `type`-Eigenschaft weglassen, verwenden Sie mindestens geeignete und eindeutige Dateierweiterungen für Ihre Symbolbilder.

## Beispiele

### Mehrere Symbole deklarieren

Dieses Beispiel zeigt, wie Sie mehrere Symbole für verschiedene Szenarien und Geräte deklarieren. Wenn ein Symbol für eine spezifische Situation nicht unterstützt oder nicht verfügbar ist, werden Browser auf andere verfügbare Formate und Größen zurückgreifen.

- Zwei Symbole gleicher Größe (`48x48`) werden in verschiedenen Formaten bereitgestellt. Das erste wird ausdrücklich als [WebP](/de/docs/Web/Media/Guides/Formats/Image_types#webp_image) unter Verwendung der `type`-Eigenschaft angegeben. Wenn ein Browser WebP nicht unterstützt, fällt er auf das zweite Symbol derselben Größe zurück. Beim zweiten Symbol bestimmt der Browser den MIME-Typ entweder aus dem HTTP-Header oder indem er ihn aus dem Inhalt der Bilddatei ableitet. Symbole in dieser Größe werden typischerweise für Browsertabs und Lesezeichen verwendet.

- Eine [ICO](/de/docs/Web/Media/Guides/Formats/Image_types#ico_microsoft_windows_icon)-Datei wird mit mehreren Größen von `72x72` bis `256x256` bereitgestellt. ICO-Dateien enthalten mehrere Rasterbilder, die jeweils für verschiedene Anzeigegrößen optimiert sind. Symbole in diesen Größen werden häufig für Desktop-Verknüpfungen verwendet.

- Für größere Symbole (`257x257` und darüber hinaus) wird eine [SVG](/de/docs/Web/Media/Guides/Formats/Image_types#svg_scalable_vector_graphics)-Datei angegeben. Der `sizes`-Wert dieses Symbols ist auf `any` gesetzt, was es einem Browser erlaubt, dieses Symbol in jeder Größe zu verwenden. SVG-Symbole behalten ihre Qualität bei größeren Größen. Diese Symbole sind ideal für hochauflösende Displays wie in [Progressive Web Apps (PWAs)](/de/docs/Web/Progressive_web_apps).

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
- [Monochrome Symbole und einfarbige Füllungen](https://w3c.github.io/manifest/#monochrome-icons-and-solid-fills)
- [Symbolmasken und sichere Zone](https://w3c.github.io/manifest/#icon-masks)
