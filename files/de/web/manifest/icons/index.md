---
title: icons
slug: Web/Manifest/icons
l10n:
  sourceCommit: d5c276160e9f456df72b702059a0def7018eacc9
---

{{QuickLinksWithSubpages("/de/docs/Web/Manifest")}}

Das `icons` Manifestmitglied wird verwendet, um ein oder mehrere Bilddateien festzulegen, die die Symbole zur Darstellung Ihrer Webanwendung definieren.

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
    Zum Beispiel können Sie Symbole hinzufügen, um Ihre Web-App auf Geräten mit unterschiedlichen Bildschirmgrößen darzustellen, für die Integration mit verschiedenen Betriebssystemen, für Startbildschirme oder für App-Benachrichtigungen.

    Jedes Symbolobjekt kann eine oder mehrere Eigenschaften haben. Davon ist nur `src` erforderlich. Die möglichen Eigenschaften umfassen:

    - `src`

      - : Ein String, der den Pfad zur Symbolbilddatei angibt.
        Wenn `src` relativ ist, wird der Pfad relativ zur URL der Manifestdatei aufgelöst.
        Zum Beispiel wird die relative URL `images/icon-192x192.png` für die Manifestdatei unter `https://example.com/manifest.json` als `https://example.com/images/icon-192x192.png` aufgelöst.

    - `sizes` {{Optional_Inline}}

      - : Ein String, der eine oder mehrere Größen angibt, in denen die Symboldatei verwendet werden kann.
        Jede Größe wird als `<Breite in Pixel>x<Höhe in Pixel>` angegeben.
        Wenn mehrere Größen angegeben sind, werden sie durch Leerzeichen getrennt; zum Beispiel `48x48 96x96`.
        Wenn mehrere Symbole verfügbar sind, können Browser das am besten geeignete Symbol für einen bestimmten Anzeigekontext auswählen.
        Für Rasterformate wie PNG wird empfohlen, die genau verfügbaren Größen anzugeben.
        Für Vektorformate wie SVG können Sie `any` verwenden, um Skalierbarkeit anzuzeigen.
        Wenn `sizes` nicht angegeben ist, kann die Auswahl und Anzeige des Symbols je nach Implementierung des Browsers variieren.

        Beachten Sie, dass das Format von `sizes` dem Attribut [`sizes`](/de/docs/Web/HTML/Element/link#sizes) des HTML `<link>` Elements ähnelt.

    - `type` {{Optional_Inline}}

      - : Ein String, der den {{Glossary("MIME_type", "MIME-Typ")}} des Symbols spezifiziert.
        Der Wert sollte im Format `image/<Untertyp>` sein, wobei `<Untertyp>` ein spezifisches Bildformat ist; zum Beispiel zeigt `image/png` ein PNG-Bild an.
        Wenn es weggelassen wird, leiten Browser normalerweise den Bildtyp von der Dateiendung ab.

    - `purpose` {{Optional_Inline}}

      - : Ein groß-/kleinschreibungssensitiver Schlüsselwort-String, der einen oder mehrere Kontexte angibt, in denen das Symbol vom Browser oder Betriebssystem verwendet werden kann.
        Der Wert kann ein einzelnes Schlüsselwort oder mehrere durch Leerzeichen getrennte Schlüsselwörter sein.
        Wenn es weggelassen wird, kann der Browser das Symbol für jeden Zweck verwenden.

        Browser verwenden diese Werte als Hinweise, um zu bestimmen, wo und wie ein Symbol angezeigt wird.
        Zum Beispiel könnte ein `monochrome` Symbol als Abzeichen oder angeheftetes Symbol mit einer soliden Füllung verwendet werden, das sich visuell von einem vollfarbigen Startsymbols unterscheidet.
        Bei mehreren Schlüsselwörtern, sagen wir `monochrome maskable`, kann der Browser das Symbol für jeden dieser Zwecke verwenden.
        Wenn ein unbekannter Zweck zusammen mit gültigen Werten eingeschlossen ist (z.B. `monochrome fizzbuzz`), kann das Symbol trotzdem für die gültigen Zwecke verwendet werden.
        Wenn jedoch nur unbekannte Zwecke angegeben sind (z.B. `fizzbuzz`), wird es ignoriert.

        Gültige Werte sind:

        - `monochrome`

          - : Gibt an, dass das Symbol als monochromes Symbol mit einer soliden Füllung verwendet werden soll.
            Mit diesem Wert verwirft ein Browser die Farbinformationen im Symbol und verwendet nur den Alphakanal als Maske über eine beliebige solide Füllung.

        - `maskable`

          - : Gibt an, dass das Symbol mit Blick auf Symbolmasken und Sicherheitszonen entworfen wurde, sodass jeder Teil des Bildes außerhalb der Sicherheitszone ignoriert und maskiert werden kann.

        - `any`
          - : Gibt an, dass das Symbol in jedem Kontext verwendet werden kann. Dies ist der Standardwert.

## Beschreibung

Symbole identifizieren Ihre Web-App eindeutig in verschiedenen Kontexten, wie im Taskumschalter eines Betriebssystems, Systemeinstellungen, Startbildschirm, App-Listen und anderen Orten, an denen Anwendungssymbole angezeigt werden.

Der Kontext, in dem ein Symbol verwendet werden kann, wird vom Browser und dem Betriebssystem bestimmt, basierend auf den angegebenen Größen und Formaten.

## Sicherheitsüberlegungen

Die Fähigkeit des Browsers, ein Symbolbild abzurufen, wird von der Content Security Policy ({{Glossary("CSP", "CSP")}}) des Eigentümerdokuments des Manifests geregelt, insbesondere durch die Direktive [`img-src`](/de/docs/Web/HTTP/Headers/Content-Security-Policy/img-src). Dieser Sicherheitsaspekt bezieht sich auf die `src` Eigenschaft.

Zum Beispiel, wenn die Direktive `img-src` in einem CSP-Header `icons.example.com` angibt, wären nur Symbole von dieser Domain abrufbar. In einem Manifest mit zwei Symbolen, eines von `icons.example.com/lowres` und ein anderes von `other.com/hi-res`, würde nur das erstere erfolgreich abgerufen werden können, aufgrund der CSP-Einschränkungen.

## Leistungsüberlegungen

Das Angeben der `type` Eigenschaft kann die Leistung erheblich verbessern, da es den Browsern ermöglicht, Bilder mit nicht unterstützten Formaten leichter zu ignorieren.
Wenn Sie die `type` Eigenschaft nicht angeben, müssen Browser möglicherweise das Bildformat mit ressourcenintensiveren Methoden ermitteln, wie zum Beispiel [MIME-Sniffing](/de/docs/Web/HTTP/MIME_types#mime_sniffing) der Datei für eine Signatur.

Mindestens, wenn Sie die `type` Eigenschaft weglassen, verwenden Sie geeignete und eindeutige Dateiendungen für Ihre Symbolbilder.

## Beispiele

### Deklarieren mehrerer Symbole

Dieses Beispiel zeigt, wie mehrere Symbole für verschiedene Szenarien und Geräte deklariert werden. Wenn ein Symbol für eine bestimmte Situation nicht unterstützt oder nicht verfügbar ist, werden Browser auf andere verfügbare Formate und Größen zurückgreifen.

- Zwei Symbole derselben Größe (`48x48`) werden in verschiedenen Formaten bereitgestellt. Das erste wird explizit als [WebP](/de/docs/Web/Media/Formats/Image_types#webp_image) mit der `type` Eigenschaft angegeben. Wenn ein Browser WebP nicht unterstützt, wird er auf das zweite Symbol derselben Größe zurückgreifen. Für das zweite Symbol wird der Browser den MIME-Typ entweder aus dem HTTP-Header oder durch Herleiten des Inhalts der Bilddatei bestimmen. Symbole in dieser Größe werden typischerweise für Browser-Tabs und Lesezeichen verwendet.

- Eine [ICO](/de/docs/Web/Media/Formats/Image_types#ico_microsoft_windows_icon) Datei wird mit mehreren Größen von `72x72` bis `256x256` bereitgestellt. ICO-Dateien enthalten mehrere Rasterikonen, die individuell für verschiedene Anzeigengrößen optimiert sind. Symbole in diesen Größen werden häufig für Desktop-Verknüpfungen verwendet.

- Für größere Symbole (`257x257` und größer) wird eine [SVG](/de/docs/Web/Media/Formats/Image_types#svg_scalable_vector_graphics) Datei angegeben. Der `sizes` Wert dieses Symbols wird auf `any` festgelegt, was es einem Browser ermöglicht, dieses Symbol in jeder Größe zu verwenden. SVG-Symbole behalten ihre Qualität in größeren Größen bei. Diese Symbole sind ideal für hochauflösende Displays wie in [progressiven Web-Apps (PWAs)](/de/docs/Web/Progressive_web_apps).

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

- [Bilder-Dateitypen und Format-Leitfaden](/de/docs/Web/Media/Formats/Image_types#webp_image)
- [Monochrome Symbole und solide Füllungen](https://w3c.github.io/manifest/#monochrome-icons-and-solid-fills)
- [Symbolmasken und Sicherheitszone](https://w3c.github.io/manifest/#icon-masks)
