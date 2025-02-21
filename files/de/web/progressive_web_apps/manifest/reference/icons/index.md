---
title: "`icons`"
slug: Web/Progressive_web_apps/Manifest/Reference/icons
l10n:
  sourceCommit: 05187b0fecf39b9176d4a101623589309cf44dd0
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
    Jedes Objekt repräsentiert ein Symbol, das in einem bestimmten Kontext verwendet werden soll.
    Beispielsweise können Sie Symbole hinzufügen, um Ihre Web-App auf Geräten mit unterschiedlichen Bildschirmgrößen, für die Integration mit verschiedenen Betriebssystemen, für Begrüßungsbildschirme oder für App-Benachrichtigungen zu repräsentieren.

    Jedes Symbol-Objekt kann eine oder mehrere Eigenschaften haben. Davon ist nur `src` erforderlich. Die möglichen Eigenschaften umfassen:

    - `src`

      - : Ein String, der den Pfad zur Symbolbilddatei angibt.
        Wenn `src` relativ ist, wird der Pfad relativ zur URL der Manifestdatei aufgelöst.
        Zum Beispiel wird die relative URL `images/icon-192x192.png` für die Manifestdatei, die sich unter `https://example.com/manifest.json` befindet, als `https://example.com/images/icon-192x192.png` aufgelöst.

    - `sizes` {{Optional_Inline}}

      - : Ein String, der eine oder mehrere Größen angibt, in denen die Symbolbilddatei verwendet werden kann.
        Jede Größe wird als `<width in pixels>x<height in pixels>` angegeben.
        Wenn mehrere Größen spezifiziert werden, werden sie durch Leerzeichen getrennt; zum Beispiel `48x48 96x96`.
        Wenn mehrere Symbole verfügbar sind, können Browser das am besten geeignete Symbol für einen bestimmten Anzeigezusammenhang auswählen.
        Für Rasterformate wie PNG wird empfohlen, die genauen verfügbaren Größen anzugeben.
        Für Vektorformate wie SVG können Sie `any` verwenden, um die Skalierbarkeit anzuzeigen.
        Wenn `sizes` nicht angegeben ist, kann die Auswahl und Anzeige des Symbols je nach Implementierung des Browsers variieren.

        Beachten Sie, dass das Format von `sizes` dem Attribut [`sizes`](/de/docs/Web/HTML/Element/link#sizes) des HTML-`<link>`-Elements ähnelt.

    - `type` {{Optional_Inline}}

      - : Ein String, der den {{Glossary("MIME_type", "MIME-Typ")}} des Symbols angibt.
        Der Wert sollte im Format `image/<subtype>` sein, wobei `<subtype>` ein spezifisches Bildformat ist; beispielsweise zeigt `image/png` ein PNG-Bild an.
        Wenn es weggelassen wird, leiten Browser in der Regel den Bildtyp aus der Dateiendung ab.

    - `purpose` {{Optional_Inline}}

      - : Ein Groß-/Kleinschreibung unterscheidendes Schlüsselwort, das einen oder mehrere Kontexte spezifiziert, in denen das Symbol vom Browser oder Betriebssystem verwendet werden kann.
        Der Wert kann ein einzelnes Schlüsselwort oder mehrere durch Leerzeichen getrennte Schlüsselwörter sein.
        Wenn es weggelassen wird, kann der Browser das Symbol für jeden Zweck verwenden.

        Browser verwenden diese Werte als Hinweise, um zu bestimmen, wo und wie ein Symbol angezeigt wird.
        Beispielsweise könnte ein `monochrome`-Symbol als Abzeichen oder befestigtes Symbol mit einer soliden Füllung verwendet werden, das sich visuell von einem vollständig farbigen Startsymbol unterscheidet.
        Mit mehreren Schlüsselwörtern, z.B. `monochrome maskable`, kann der Browser das Symbol für jeden dieser Zwecke verwenden.
        Wenn ein nicht erkanntes Ziel zusammen mit gültigen Werten (z.B. `monochrome fizzbuzz`) enthalten ist, kann das Symbol dennoch für die gültigen Zwecke verwendet werden.
        Wenn jedoch nur nicht erkannte Zwecke angegeben sind (z.B. `fizzbuzz`), wird es ignoriert.

        Gültige Werte umfassen:

        - `monochrome`

          - : Gibt an, dass das Symbol als monochromes Symbol mit einer soliden Füllung verwendet werden soll.
            Mit diesem Wert verwirft ein Browser die Farbinformationen im Symbol und verwendet nur den Alphakanal als Maske über einer beliebigen soliden Füllung.

        - `maskable`

          - : Gibt an, dass das Symbol mit Symbolmasken und sicherer Zone entworfen wurde, sodass jeder Teil des Bildes außerhalb der sicheren Zone ignoriert und maskiert werden kann.

        - `any`
          - : Gibt an, dass das Symbol in jedem Kontext verwendet werden kann. Dies ist der Standardwert.

## Beschreibung

Symbole identifizieren Ihre Web-App in verschiedenen Kontexten eindeutig, wie z.B. im Task-Switcher des Betriebssystems, in den Systemeinstellungen, auf dem Startbildschirm, in App-Listen und anderen Orten, an denen Anwendungssymbole angezeigt werden.

Der Kontext, in dem ein Symbol verwendet werden kann, wird vom Browser und dem Betriebssystem basierend auf den angegebenen Größen und Formaten bestimmt.

## Sicherheitsüberlegungen

Die Fähigkeit des Browsers, ein Symbolbild abzurufen, wird von der Content Security Policy ({{Glossary("CSP", "CSP")}}) des Besitzerdokuments des Manifests geregelt, insbesondere von der [`img-src`](/de/docs/Web/HTTP/Headers/Content-Security-Policy/img-src)-Direktive. Dieser Sicherheitsaspekt bezieht sich auf die `src`-Eigenschaft.

Beispielsweise würden bei einer `img-src`-Direktive in einem CSP-Header, die `icons.example.com` spezifiziert, Symbole nur von dieser Domain abrufbar sein. In einem Manifest mit zwei Symbolen, eines von `icons.example.com/low-res` und ein anderes von `other.com/hi-res`, würde nur das erstgenannte aufgrund von CSP-Beschränkungen erfolgreich abgerufen werden.

## Leistungsüberlegungen

Die Angabe der `type`-Eigenschaft kann die Leistung erheblich verbessern, da dadurch Browser Bilder mit nicht unterstützten Formaten leichter ignorieren können.
Wenn Sie die `type`-Eigenschaft nicht angeben, müssen Browser möglicherweise das Bildformat mittels mehr ressourcenintensiver Methoden ermitteln, wie z.B. durch [MIME-Sniffing](/de/docs/Web/HTTP/MIME_types#mime_sniffing) nach einer Signatur.

Wenn Sie die `type`-Eigenschaft weglassen, verwenden Sie mindestens geeignete und unambige Dateiendungen für Ihre Symbolbilder.

## Beispiele

### Mehrere Symbole deklarieren

Dieses Beispiel zeigt, wie Sie mehrere Symbole für verschiedene Szenarien und Geräte deklarieren. Wenn ein Symbol für eine bestimmte Situation nicht unterstützt oder nicht verfügbar ist, greifen Browser auf andere verfügbare Formate und Größen zurück.

- Zwei Symbole derselben Größe (`48x48`) werden in verschiedenen Formaten bereitgestellt. Das erste wird explizit als [WebP](/de/docs/Web/Media/Guides/Formats/Image_types#webp_image) unter Verwendung der `type`-Eigenschaft angegeben. Wenn ein Browser WebP nicht unterstützt, wird auf das zweite Symbol derselben Größe zurückgegriffen. Für das zweite Symbol ermittelt der Browser den MIME-Typ entweder aus dem HTTP-Header oder durch Ableiten aus dem Inhalt der Bilddatei. Symbole in dieser Größe werden typischerweise für Browser-Tabs und Lesezeichen verwendet.

- Ein [ICO](/de/docs/Web/Media/Guides/Formats/Image_types#ico_microsoft_windows_icon)-Datei wird mit mehreren Größen von `72x72` bis `256x256` bereitgestellt. ICO-Dateien enthalten mehrere Raster-Symbole, die individuell für verschiedene Anzeigengrößen optimiert sind. Symbole in diesen Größen werden häufig für Desktop-Verknüpfungen verwendet.

- Für größere Symbole (`257x257` und darüber) wird eine [SVG](/de/docs/Web/Media/Guides/Formats/Image_types#svg_scalable_vector_graphics)-Datei angegeben. Der `sizes`-Wert dieses Symbols ist auf `any` gesetzt, was einem Browser ermöglicht, dieses Symbol in jeder Größe zu verwenden. SVG-Symbole behalten ihre Qualität bei größeren Größen. Diese Symbole sind ideal für hochauflösende Displays wie in [Progressive Web Apps (PWAs)](/de/docs/Web/Progressive_web_apps).

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
