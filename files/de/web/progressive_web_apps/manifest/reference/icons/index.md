---
title: icons
slug: Web/Progressive_web_apps/Manifest/Reference/icons
l10n:
  sourceCommit: 2f6ddccbafddcea8f2b68eb4a78b9764892916b3
---

{{QuickLinksWithSubpages("/de/docs/Web/Progressive_web_apps/Manifest/Reference")}}

Das `icons`-Manifestmitglied wird verwendet, um eine oder mehrere Bilddateien anzugeben, die die Symbole definieren, um Ihre Webanwendung darzustellen.

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
    Zum Beispiel können Sie Symbole hinzufügen, um Ihre Web-App auf Geräten mit unterschiedlichen Bildschirmgrößen darzustellen, zur Integration mit verschiedenen Betriebssystemen, für Startbildschirme oder für App-Benachrichtigungen.

    Jedes Symbolobjekt kann eine oder mehrere Eigenschaften haben. Davon ist nur `src` erforderlich. Zu den möglichen Eigenschaften gehören:

    - `src`

      - : Ein String, der den Pfad zur Symbolbilddatei angibt.
        Wenn `src` relativ ist, wird der Pfad relativ zur URL der Manifestdatei aufgelöst.
        Zum Beispiel wird die relative URL `images/icon-192x192.png` für die Manifestdatei, die sich unter `https://example.com/manifest.json` befindet, als `https://example.com/images/icon-192x192.png` aufgelöst.

    - `sizes` {{Optional_Inline}}

      - : Ein String, der eine oder mehrere Größen angibt, in denen die Bilddatei verwendet werden kann.
        Jede Größe wird als `<Breite in Pixeln>x<Höhe in Pixeln>` angegeben.
        Wenn mehrere Größen angegeben sind, werden sie durch Leerzeichen getrennt, beispielsweise `48x48 96x96`.
        Wenn mehrere Symbole verfügbar sind, können Browser das am besten geeignete Symbol für einen bestimmten Anzeigekontext auswählen.
        Für Rasterformate wie PNG wird empfohlen, die genau verfügbaren Größen anzugeben.
        Für Vektorformate wie SVG können Sie `any` verwenden, um Skalierbarkeit anzuzeigen.
        Wenn `sizes` nicht angegeben ist, kann die Auswahl und Anzeige des Symbols je nach Implementierung des Browsers variieren.

        Beachten Sie, dass das Format von `sizes` dem Attribut [`sizes`](/de/docs/Web/HTML/Element/link#sizes) des HTML-`<link>`-Elements ähnlich ist.

    - `type` {{Optional_Inline}}

      - : Ein String, der den {{Glossary("MIME_type", "MIME-Typ")}} des Symbols angibt.
        Der Wert sollte im Format `image/<subtype>` vorliegen, wobei `<subtype>` ein bestimmtes Bildformat ist; zum Beispiel weist `image/png` auf ein PNG-Bild hin.
        Wenn diese Angabe weggelassen wird, leiten Browser den Bildtyp in der Regel aus der Dateierweiterung ab.

    - `purpose` {{Optional_Inline}}

      - : Ein groß- und kleinschreibungssensitiver Schlüsselwort-String, der einen oder mehrere Kontexte angibt, in denen das Symbol vom Browser oder Betriebssystem verwendet werden kann.
        Der Wert kann ein einzelnes Schlüsselwort oder mehrere leerzeichengetrennte Schlüsselwörter sein.
        Wenn diese Angabe weggelassen wird, kann der Browser das Symbol für beliebige Zwecke verwenden.

        Browser verwenden diese Werte als Hinweise, um zu bestimmen, wo und wie ein Symbol angezeigt wird.
        Zum Beispiel könnte ein `monochrome`-Symbol als Abzeichen oder als festes Symbol mit einem Vollfarb-Füllvermögen verwendet werden, das sich visuell von einem vollfarbigen Startsymbol abhebt.
        Bei mehreren Schlüsselwörtern, z. B. `monochrome maskable`, kann der Browser das Symbol für jeden dieser Zwecke verwenden.
        Wenn ein nicht erkanntes Schlüsselwort zusammen mit gültigen Werten enthalten ist (z. B. `monochrome fizzbuzz`), kann das Symbol weiterhin für die gültigen Zwecke verwendet werden.
        Wenn jedoch nur nicht erkannte Zwecke angegeben sind (z. B. `fizzbuzz`), wird es ignoriert.

        Gültige Werte umfassen:

        - `monochrome`

          - : Gibt an, dass das Symbol als monochromes Symbol mit einer Vollfarbe verwendet werden soll. Bei diesem Wert verwirft ein Browser die Farbinformationen im Symbol und verwendet nur den Alphakanal als Maske über eine beliebige Vollfarbe.

        - `maskable`

          - : Gibt an, dass das Symbol unter Berücksichtigung von Symbolmasken und einer sicheren Zone entworfen wurde, sodass alle Teile des Bildes außerhalb der sicheren Zone ignoriert und maskiert werden können.

        - `any`
          - : Gibt an, dass das Symbol in jedem Kontext verwendet werden kann. Dies ist der Standardwert.

## Beschreibung

Symbole identifizieren Ihre Web-App auf einzigartige Weise in verschiedenen Kontexten, wie zum Beispiel im Aufgabenumschalter eines Betriebssystems, den Systemeinstellungen, dem Startbildschirm, der App-Liste und anderen Orten, an denen Anwendungs-Symbole angezeigt werden.

Der Kontext, in dem ein Symbol verwendet werden kann, wird vom Browser und dem Betriebssystem basierend auf den angegebenen Größen und Formaten bestimmt.

## Sicherheitsaspekte

Die Fähigkeit des Browsers, ein Symbolbild abzurufen, unterliegt den Richtlinien der Content-Security-Policy ({{Glossary("CSP", "CSP")}}) des Besitzerdokuments des Manifests, speziell der [`img-src`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/img-src)-Direktive. Dieser Sicherheitsaspekt bezieht sich auf die `src`-Eigenschaft.

Zum Beispiel, wenn die `img-src`-Direktive in einem CSP-Header `icons.example.com` angibt, könnten nur Symbole von dieser Domain abgerufen werden. In einem Manifest mit zwei Symbolen, eines von `icons.example.com/low-res` und ein weiteres von `other.com/hi-res`, würde aufgrund der CSP-Beschränkungen nur das Erstere erfolgreich abgerufen werden.

## Leistungsaspekte

Das Angeben der `type`-Eigenschaft kann die Leistung erheblich verbessern, da es Browsern ermöglicht, Bilder mit nicht unterstützten Formaten leichter zu ignorieren.
Wenn Sie die `type`-Eigenschaft nicht angeben, müssen Browser möglicherweise das Bildformat auf ressourcenintensivere Weise ableiten, z. B. durch [MIME-Sniffing](/de/docs/Web/HTTP/Guides/MIME_types#mime_sniffing) der Datei nach einer Signatur.

Zumindest, wenn Sie die `type`-Eigenschaft weglassen, verwenden Sie geeignete und eindeutige Dateierweiterungen für Ihre Symbolbilder.

## Beispiele

### Deklarieren mehrerer Symbole

Dieses Beispiel zeigt, wie mehrere Symbole für verschiedene Szenarien und Geräte deklariert werden. Wenn ein Symbol für eine bestimmte Situation nicht unterstützt oder nicht verfügbar ist, werden Browser auf andere verfügbare Formate und Größen zurückgreifen.

- Zwei Symbole derselben Größe (`48x48`) werden in verschiedenen Formaten bereitgestellt. Das erste wird explizit als [WebP](/de/docs/Web/Media/Guides/Formats/Image_types#webp_image) unter Verwendung der `type`-Eigenschaft angegeben. Wenn ein Browser WebP nicht unterstützt, wird er auf das zweite Symbol derselben Größe zurückgreifen. Für das zweite Symbol bestimmt der Browser den MIME-Typ entweder aus dem HTTP-Header oder indem er ihn aus dem Inhalt der Bilddatei ableitet. Symbole in dieser Größe werden typischerweise für Browser-Registerkarten und Lesezeichen verwendet.

- Eine [ICO](/de/docs/Web/Media/Guides/Formats/Image_types#ico_microsoft_windows_icon)-Datei wird mit mehreren Größen von `72x72` bis `256x256` bereitgestellt. ICO-Dateien enthalten mehrere Rasterbilder, die jeweils für verschiedene Anzeigengrößen optimiert sind. Symbole in diesen Größen werden in der Regel für Desktop-Verknüpfungen verwendet.

- Für größere Symbole (`257x257` und größer) wird eine [SVG](/de/docs/Web/Media/Guides/Formats/Image_types#svg_scalable_vector_graphics)-Datei angegeben. Der `sizes`-Wert dieses Symbols ist auf `any` gesetzt, was es einem Browser ermöglicht, dieses Symbol in jeder Größe zu verwenden. SVG-Symbole behalten ihre Qualität bei größeren Größen. Diese Symbole sind ideal für hochauflösende Displays wie in [progressiven Web-Apps (PWAs)](/de/docs/Web/Progressive_web_apps).

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

- [Bilderdateityp- und Formatleitfaden](/de/docs/Web/Media/Guides/Formats/Image_types#webp_image)
- [Monochrome Symbole und Vollfarb-Füllungen](https://w3c.github.io/manifest/#monochrome-icons-and-solid-fills)
- [Symbolmasken und sichere Zone](https://w3c.github.io/manifest/#icon-masks)
