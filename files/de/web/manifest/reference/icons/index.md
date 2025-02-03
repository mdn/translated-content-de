---
title: icons
slug: Web/Manifest/Reference/icons
l10n:
  sourceCommit: 27bceead8e9b1fe9c92df0fa5e418f81bd5b9fdf
---

{{QuickLinksWithSubpages("/de/docs/Web/Manifest/Reference")}}

Das Manifest-Mitglied `icons` wird verwendet, um ein oder mehrere Bilddateien anzugeben, die die Symbole definieren, um Ihre Webanwendung darzustellen.

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
    Beispielsweise können Sie Symbole hinzufügen, um Ihre Webanwendung auf Geräten mit unterschiedlichen Bildschirmgrößen darzustellen, für die Integration mit verschiedenen Betriebssystemen, für Startbildschirme oder für App-Benachrichtigungen.

    Jedes Symbolobjekt kann eine oder mehrere Eigenschaften enthalten. Davon ist nur `src` erforderlich. Die möglichen Eigenschaften umfassen:

    - `src`

      - : Ein String, der den Pfad zur Symbolbilddatei angibt.
        Wenn `src` relativ ist, wird der Pfad relativ zur URL der Manifestdatei aufgelöst.
        Beispielsweise wird die relative URL `images/icon-192x192.png` für die Manifestdatei unter `https://example.com/manifest.json` als `https://example.com/images/icon-192x192.png` aufgelöst.

    - `sizes` {{Optional_Inline}}

      - : Ein String, der eine oder mehrere Größen angibt, in denen die Symboldatei verwendet werden kann.
        Jede Größe wird als `<width in pixels>x<height in pixels>` angegeben.
        Wenn mehrere Größen angegeben sind, werden sie durch Leerzeichen getrennt, zum Beispiel `48x48 96x96`.
        Wenn mehrere Symbole verfügbar sind, können Browser das am besten geeignete Symbol für einen bestimmten Anzeigekontext auswählen.
        Für Rasterformate wie PNG wird empfohlen, die genauen verfügbaren Größen anzugeben.
        Für Vektorformate wie SVG können Sie `any` verwenden, um die Skalierbarkeit anzuzeigen.
        Wenn `sizes` nicht angegeben ist, kann die Auswahl und Darstellung des Symbols je nach Implementierung des Browsers variieren.

        Beachten Sie, dass das Format von `sizes` dem HTML-Element `<link>`-Attribut [`sizes`](/de/docs/Web/HTML/Element/link#sizes) ähnelt.

    - `type` {{Optional_Inline}}

      - : Ein String, der den {{Glossary("MIME_type", "MIME-Typ")}} des Symbols angibt.
        Der Wert sollte im Format `image/<subtype>` angegeben werden, wobei `<subtype>` ein spezifisches Bildformat ist; zum Beispiel weist `image/png` auf ein PNG-Bild hin.
        Wenn weggelassen, leiten Browser normalerweise den Bildtyp aus der Dateierweiterung ab.

    - `purpose` {{Optional_Inline}}

      - : Ein Groß- und Kleinschreibung beachtendes Schlüsselwort, das angibt, in welchen Kontexten das Symbol vom Browser oder Betriebssystem verwendet werden kann.
        Der Wert kann ein einzelnes Schlüsselwort oder mehrere durch Leerzeichen getrennte Schlüsselwörter sein.
        Wenn weggelassen, kann der Browser das Symbol für jeden Zweck verwenden.

        Browser verwenden diese Werte als Hinweise, um zu bestimmen, wo und wie ein Symbol angezeigt wird.
        Zum Beispiel könnte ein `monochrome` Symbol als Abzeichen oder fixiertes Symbol mit einer soliden Füllung verwendet werden, das sich visuell von einem vollfarbigen Startsymbol unterscheidet.
        Mit mehreren Schlüsselwörtern, zum Beispiel `monochrome maskable`, kann der Browser das Symbol für jeden dieser Zwecke verwenden.
        Wenn ein nicht erkanntes Ziel zusammen mit gültigen Werten eingeschlossen ist (z.B. `monochrome fizzbuzz`), kann das Symbol dennoch für die gültigen Zwecke verwendet werden.
        Wenn jedoch nur nicht erkannte Zwecke angegeben sind (z.B. `fizzbuzz`), wird es ignoriert.

        Gültige Werte umfassen:

        - `monochrome`

          - : Gibt an, dass das Symbol als monochromes Symbol mit einer soliden Füllung verwendet werden soll.
            Bei diesem Wert verwirft ein Browser die Farbinformationen im Symbol und verwendet nur den Alphakanal als Maske über einer soliden Füllung.

        - `maskable`

          - : Gibt an, dass das Symbol mit Symbolmasken und Sicherheitszone entworfen wurde, sodass jeder Teil des Bildes außerhalb der Sicherheitszone ignoriert und maskiert werden kann.

        - `any`
          - : Gibt an, dass das Symbol in jedem Kontext verwendet werden kann. Dies ist der Standardwert.

## Beschreibung

Symbole identifizieren Ihre Webanwendung in verschiedenen Kontexten eindeutig, wie im Task-Switcher eines Betriebssystems, in den Systemeinstellungen, auf dem Startbildschirm, in App-Listen und anderen Orten, an denen Anwendungssymbole angezeigt werden.

Der Kontext, in dem ein Symbol verwendet werden kann, wird durch den Browser und das Betriebssystem bestimmt, basierend auf den angegebenen Größen und Formaten.

## Sicherheitserwägungen

Die Fähigkeit des Browsers, ein Symbolbild abzurufen, wird durch die Content Security Policy ({{Glossary("CSP", "CSP")}}) des Besitzerdokuments des Manifests geregelt, insbesondere durch die [`img-src`](/de/docs/Web/HTTP/Headers/Content-Security-Policy/img-src) Direktive. Dieser Sicherheitsaspekt steht in Zusammenhang mit der `src`-Eigenschaft.

Zum Beispiel, wenn die `img-src` Direktive in einem CSP-Header `icons.example.com` angibt, könnten nur Symbole von dieser Domain abgerufen werden. In einem Manifest mit zwei Symbolen, eines von `icons.example.com/low-res` und ein weiteres von `other.com/hi-res`, würde nur das erstere erfolgreich abgerufen werden, aufgrund der CSP-Einschränkungen.

## Leistungserwägungen

Die Angabe der `type`-Eigenschaft kann die Leistung erheblich verbessern, da es Browsern ermöglicht wird, Bilder mit nicht unterstützten Formaten leichter zu ignorieren.
Wenn Sie die `type`-Eigenschaft nicht angeben, müssen Browser möglicherweise das Bildformat unter Verwendung ressourcenintensiverer Methoden erfassen, wie z. B. [Mime-Typ-Sniffing](/de/docs/Web/HTTP/MIME_types#mime_sniffing) der Datei für eine Signatur.

Mindestens, wenn Sie die `type`-Eigenschaft weglassen, verwenden Sie geeignete und eindeutige Dateierweiterungen für Ihre Symbolbilder.

## Beispiele

### Deklarieren mehrerer Symbole

Dieses Beispiel zeigt, wie mehrere Symbole für verschiedene Szenarien und Geräte deklariert werden. Wenn ein Symbol für eine bestimmte Situation nicht unterstützt oder nicht verfügbar ist, greifen die Browser auf andere verfügbare Formate und Größen zurück.

- Zwei Symbole derselben Größe (`48x48`) werden in verschiedenen Formaten bereitgestellt. Das erste ist explizit als [WebP](/de/docs/Web/Media/Guides/Formats/Image_types#webp_image) angegeben, indem die `type`-Eigenschaft verwendet wird. Wenn ein Browser WebP nicht unterstützt, fällt es auf das zweite Symbol derselben Größe zurück. Für das zweite Symbol bestimmt der Browser den MIME-Typ entweder aus dem HTTP-Header oder indem er ihn aus dem Inhalt der Bilddatei ableitet. Symbole in dieser Größe werden typischerweise für Browser-Tabs und Lesezeichen verwendet.

- Eine [ICO](/de/docs/Web/Media/Guides/Formats/Image_types#ico_microsoft_windows_icon) Datei wird bereitgestellt mit mehreren Größen von `72x72` bis `256x256`. ICO-Dateien enthalten mehrere Raster-Symbole, die individuell für verschiedene Anzeigengrößen optimiert sind. Symbole in diesen Größen werden häufig für Desktop-Verknüpfungen verwendet.

- Für größere Symbole (`257x257` und größer) wird eine [SVG](/de/docs/Web/Media/Guides/Formats/Image_types#svg_scalable_vector_graphics) Datei angegeben. Der `sizes`-Wert dieses Symbols ist auf `any` gesetzt, sodass ein Browser dieses Symbol in jeder Größe verwenden kann. SVG-Symbole behalten ihre Qualität in größeren Größen. Diese Symbole sind ideal für hochauflösende Displays wie in [progressiven Web-Apps (PWAs)](/de/docs/Web/Progressive_web_apps).

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

- [Leitfaden für Bilddateitypen und Formate](/de/docs/Web/Media/Guides/Formats/Image_types#webp_image)
- [Monochrome Symbole und solide Füllungen](https://w3c.github.io/manifest/#monochrome-icons-and-solid-fills)
- [Symbolmasken und Sicherheitszone](https://w3c.github.io/manifest/#icon-masks)
