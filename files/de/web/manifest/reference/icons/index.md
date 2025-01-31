---
title: icons
slug: Web/Manifest/Reference/icons
l10n:
  sourceCommit: ab4090ce439d9ea25229a8583a138b2f8fa8a74e
---

{{QuickLinksWithSubpages("/de/docs/Web/Manifest/Reference")}}

Das `icons` Manifest-Mitglied wird verwendet, um eine oder mehrere Bilddateien anzugeben, die die Symbole zur Darstellung Ihrer Webanwendung definieren.

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

  - : Ein Array von Objekten. Jedes Objekt repräsentiert ein Symbol, das in einem bestimmten Kontext verwendet werden soll. Beispielsweise können Sie Symbole hinzufügen, um Ihre Web-App auf Geräten mit verschiedenen Bildschirmgrößen zu repräsentieren, zur Integration mit verschiedenen Betriebssystemen, für Splashscreens oder für App-Benachrichtigungen.

    Jedes Symbolobjekt kann eine oder mehrere Eigenschaften haben. Davon ist nur `src` erforderlich. Die möglichen Eigenschaften umfassen:

    - `src`

      - : Ein String, der den Pfad zur Symbolbilddatei angibt. Wenn `src` relativ ist, wird der Pfad relativ zur URL der Manifestdatei aufgelöst. Beispielsweise wird die relative URL `images/icon-192x192.png` für die Manifestdatei, die sich unter `https://example.com/manifest.json` befindet, als `https://example.com/images/icon-192x192.png` aufgelöst.

    - `sizes` {{Optional_Inline}}

      - : Ein String, der eine oder mehrere Größen angibt, in denen die Symboldatei verwendet werden kann. Jede Größe wird als `<Breite in Pixel>x<Höhe in Pixel>` angegeben. Wenn mehrere Größen angegeben sind, werden sie durch Leerzeichen getrennt; zum Beispiel `48x48 96x96`. Wenn mehrere Symbole verfügbar sind, können Browser das am besten geeignete Symbol für einen bestimmten Anzeigekontext auswählen. Für Rasterformate wie PNG wird empfohlen, die exakt verfügbaren Größen anzugeben. Für Vektorformate wie SVG können Sie `any` verwenden, um die Skalierbarkeit anzuzeigen. Wenn `sizes` nicht angegeben ist, kann die Auswahl und Anzeige des Symbols je nach Implementierung des Browsers variieren.

        Beachten Sie, dass das Format von `sizes` dem `sizes`-Attribut des HTML `<link>` Elements ähnlich ist.

    - `type` {{Optional_Inline}}

      - : Ein String, der den {{Glossary("MIME_type", "MIME-Typ")}} des Symbols angibt. Der Wert sollte im Format `image/<subtype>` angegeben werden, wobei `<subtype>` ein spezifisches Bildformat ist; zum Beispiel zeigt `image/png` ein PNG-Bild an. Wenn weggelassen, schließen Browser in der Regel aus der Dateiendung auf den Bildtyp.

    - `purpose` {{Optional_Inline}}

      - : Ein groß-/kleinschreibungssensitiver Schlüsselwort-String, der einen oder mehrere Kontexte angibt, in denen das Symbol vom Browser oder Betriebssystem verwendet werden kann. Der Wert kann ein einzelnes Schlüsselwort oder mehrere durch Leerzeichen getrennte Schlüsselwörter sein. Wenn weggelassen, kann der Browser das Symbol für jeden Zweck verwenden.

        Browser verwenden diese Werte als Hinweise, um zu bestimmen, wo und wie ein Symbol angezeigt wird. Beispielsweise könnte ein `monochrome` Symbol als Abzeichen oder als angeheftetes Symbol mit einer Volltonfüllung verwendet werden, das sich visuell von einem vollfarbigen Startsymbol unterscheidet. Bei mehreren Schlüsselwörtern, zum Beispiel `monochrome maskable`, kann der Browser das Symbol für jeden dieser Zwecke verwenden. Wenn ein nicht anerkanntes Ziel zusammen mit gültigen Werten enthalten ist (z. B. `monochrome fizzbuzz`), kann das Symbol trotzdem für die gültigen Zwecke verwendet werden. Wenn jedoch nur nicht anerkannte Ziele angegeben werden (z. B. `fizzbuzz`), wird es ignoriert.

        Gültige Werte umfassen:

        - `monochrome`

          - : Zeigt an, dass das Symbol als einfarbiges Symbol mit einer Volltonfüllung verwendet werden soll. Bei diesem Wert verwirft ein Browser die Farbinformationen im Symbol und verwendet nur den Alphakanal als Maske über eine beliebige Volltonfüllung.

        - `maskable`

          - : Gibt an, dass das Symbol mit Blick auf Symbolmasken und sicheren Bereich entworfen wurde, sodass jeder Teil des Bildes außerhalb des sicheren Bereichs ignoriert und maskiert werden kann.

        - `any`
          - : Gibt an, dass das Symbol in jedem Kontext verwendet werden kann. Dies ist der Standardwert.

## Beschreibung

Symbole identifizieren Ihre Web-App in verschiedenen Kontexten eindeutig, wie im Task-Wechsler eines Betriebssystems, in den Systemeinstellungen, auf dem Startbildschirm, in Applisten und an anderen Orten, an denen Anwendungs-Symbole angezeigt werden.

Der Kontext, in dem ein Symbol verwendet werden kann, wird vom Browser und dem Betriebssystem bestimmt, basierend auf den angegebenen Größen und Formaten.

## Sicherheitsüberlegungen

Die Möglichkeit des Browsers, ein Symbolbild abzurufen, wird durch die Content Security Policy ({{Glossary("CSP", "CSP")}}) des Eigentümerdokuments des Manifests geregelt, insbesondere durch die [`img-src`](/de/docs/Web/HTTP/Headers/Content-Security-Policy/img-src) Direktive. Dieser Sicherheitsaspekt steht in Zusammenhang mit der `src` Eigenschaft.

Beispielsweise, wenn die `img-src` Direktive in einem CSP-Header `icons.example.com` angibt, können nur Symbole von dieser Domain abgerufen werden. In einem Manifest mit zwei Symbolen, eines von `icons.example.com/low-res` und eines anderen von `other.com/hi-res`, würde nur das erste erfolgreich abgerufen, aufgrund der CSP-Einschränkungen.

## Leistungsüberlegungen

Das Angeben der `type` Eigenschaft kann die Leistung erheblich verbessern, da es Browsern ermöglicht, Bilder mit nicht unterstützten Formaten einfacher zu ignorieren. Wenn Sie die `type` Eigenschaft nicht angeben, müssen Browser möglicherweise das Bildformat auf ressourcenintensivere Weise ermitteln, wie zum Beispiel durch [MIME-Sniffing](/de/docs/Web/HTTP/MIME_types#mime_sniffing) der Datei nach einer Signatur.

Mindestens sollten Sie, wenn Sie die `type` Eigenschaft weglassen, geeignete und eindeutige Dateierweiterungen für Ihre Symbolbilder verwenden.

## Beispiele

### Mehrere Symbole deklarieren

Dieses Beispiel zeigt, wie mehrere Symbole für verschiedene Szenarien und Geräte deklariert werden. Wenn ein Symbol für eine bestimmte Situation nicht unterstützt oder nicht verfügbar ist, greifen Browser auf andere verfügbare Formate und Größen zurück.

- Zwei Symbole der gleichen Größe (`48x48`) werden in verschiedenen Formaten bereitgestellt. Das erste wird explizit als [WebP](/de/docs/Web/Media/Formats/Image_types#webp_image) unter Verwendung der `type` Eigenschaft angegeben. Wenn ein Browser WebP nicht unterstützt, greift er auf das zweite Symbol derselben Größe zurück. Für das zweite Symbol bestimmt der Browser entweder die MIME-Art aus dem HTTP-Header oder indem er sie aus dem Inhalt der Bilddatei schlussfolgert. Symbole dieser Größe werden typischerweise für Browser-Tabs und Lesezeichen verwendet.

- Eine [ICO](/de/docs/Web/Media/Formats/Image_types#ico_microsoft_windows_icon) Datei wird mit mehreren Größen von `72x72` bis `256x256` bereitgestellt. ICO-Dateien enthalten mehrere Raster-Symbole, die individuell für verschiedene Anzeigegrößen optimiert sind. Symbole dieser Größe werden häufig für Desktop-Verknüpfungen verwendet.

- Für größere Symbole (`257x257` und darüber) wird eine [SVG](/de/docs/Web/Media/Formats/Image_types#svg_scalable_vector_graphics) Datei angegeben. Der `sizes` Wert dieses Symbols ist auf `any` gesetzt, was einem Browser ermöglicht, dieses Symbol in jeder Größe zu verwenden. SVG-Symbole behalten ihre Qualität bei größeren Größen bei. Diese Symbole sind ideal für hochauflösende Displays wie in [progressive web apps (PWAs)](/de/docs/Web/Progressive_web_apps).

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
- [Monochrome Symbole und Volltonfüllungen](https://w3c.github.io/manifest/#monochrome-icons-and-solid-fills)
- [Symbolmasken und sicherer Bereich](https://w3c.github.io/manifest/#icon-masks)
