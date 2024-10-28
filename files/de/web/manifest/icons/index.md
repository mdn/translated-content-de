---
title: Icons
slug: Web/Manifest/icons
l10n:
  sourceCommit: bea339d321513fc6d66d95c8f0305b9387fa57bb
---

{{QuickLinksWithSubpages("/de/docs/Web/Manifest")}}

Das `icons`-Manifestfeld wird verwendet, um ein oder mehrere Bilddateien zu definieren, die die Symbole repräsentieren, die Ihre Webanwendung darstellen.

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
    Jedes Objekt stellt ein Symbol dar, das in einem bestimmten Kontext verwendet wird.
    Zum Beispiel können Sie Symbole hinzufügen, die Ihre Web-App auf Geräten mit unterschiedlichen Bildschirmgrößen, zur Integration mit verschiedenen Betriebssystemen, für Startbildschirme oder für Anwendungsbenachrichtigungen darstellen.

    Jedes Symbolobjekt kann eine oder mehrere Eigenschaften haben. Davon ist nur `src` erforderlich. Mögliche Eigenschaften sind:

    - `src`

      - : Ein String, der den Pfad zur Symbolbilddatei angibt.
        Wenn `src` relativ ist, wird der Pfad relativ zur URL der Manifestdatei aufgelöst.
        Zum Beispiel wird die relative URL `images/icon-192x192.png` für die Manifestdatei, die sich unter `https://example.com/manifest.json` befindet, als `https://example.com/images/icon-192x192.png` aufgelöst.

    - `sizes` {{Optional_Inline}}

      - : Ein String, der eine oder mehrere Größen angibt, in denen die Symboldatei verwendet werden kann.
        Jede Größe wird als `<Breite in Pixel>x<Höhe in Pixel>` angegeben.
        Wenn mehrere Größen angegeben werden, werden diese durch Leerzeichen getrennt; zum Beispiel: `48x48 96x96`.
        Wenn mehrere Symbole verfügbar sind, können Browser das am besten geeignete Symbol für einen bestimmten Anzeige-Kontext auswählen.
        Für Rasterformate wie PNG wird empfohlen, die genauen verfügbaren Größen anzugeben.
        Für Vektorformate wie SVG können Sie `any` verwenden, um die Skalierbarkeit anzuzeigen.
        Wenn `sizes` nicht angegeben ist, kann die Auswahl und Anzeige des Symbols je nach Implementierung des Browsers variieren.

        Beachten Sie, dass das Format von `sizes` dem HTML-`<link>`-Element-Attribut [`sizes`](/de/docs/Web/HTML/Element/link#sizes) ähnlich ist.

    - `type` {{Optional_Inline}}

      - : Ein String, der den {{Glossary("MIME_type", "MIME-Typ")}} des Symbols angibt.
        Der Wert sollte im Format `image/<subtype>` sein, wobei `<subtype>` ein spezifisches Bildformat ist; zum Beispiel gibt `image/png` ein PNG-Bild an.
        Wenn der Wert ausgelassen wird, leiten Browser den Bildtyp normalerweise von der Dateierweiterung ab.

    - `purpose` {{Optional_Inline}}

      - : Ein groß-/kleinschreibungsempfindlicher Schlüsselwort-String, der einen oder mehrere Kontexte angibt, in denen das Symbol vom Browser oder Betriebssystem verwendet werden kann.
        Der Wert kann ein einzelnes Schlüsselwort oder mehrere durch Leerzeichen getrennte Schlüsselwörter sein.
        Wenn der Wert ausgelassen wird, kann der Browser das Symbol für jeden Zweck verwenden.

        Browser verwenden diese Werte als Hinweise, um zu bestimmen, wo und wie ein Symbol angezeigt wird.
        Zum Beispiel könnte ein `monochrome`-Symbol als Abzeichen oder festgeheftetes Symbol mit einer Volltonfüllung verwendet werden, das sich visuell von einem vollfarbigen Startsymbol unterscheidet.
        Mit mehreren Schlüsselwörtern, etwa `monochrome maskable`, kann der Browser das Symbol für jeden dieser Zwecke verwenden.
        Wenn ein nicht erkanntes Ziel zusammen mit gültigen Werten eingeschlossen ist (z.B. `monochrome fizzbuzz`), kann das Symbol dennoch für die gültigen Zwecke verwendet werden.
        Wenn jedoch nur nicht erkannte Zwecke angegeben sind (z.B. `fizzbuzz`), wird es ignoriert.

        Gültige Werte umfassen:

        - `monochrome`

          - : Zeigt an, dass das Symbol als einfarbiges Symbol mit einer Volltonfüllung verwendet werden soll.
            Bei diesem Wert verwirft ein Browser die Farbinformationen im Symbol und verwendet nur den Alphakanal als Maske über einer Volltonfüllung.

        - `maskable`

          - : Gibt an, dass das Symbol mit Symbolmasken und Sicherheitszone entworfen wurde, sodass alle Teile des Bildes außerhalb der Sicherheitszone ignoriert und maskiert werden können.

        - `any`
          - : Gibt an, dass das Symbol in jedem Kontext verwendet werden kann. Dies ist der Standardwert.

## Beschreibung

Symbole identifizieren Ihre Web-App eindeutig in verschiedenen Kontexten, wie im Task-Switcher eines Betriebssystems, in den Systemeinstellungen, auf dem Startbildschirm, in der Anwendungsübersicht und an anderen Stellen, an denen Anwendungssymbole angezeigt werden.

Der Kontext, in dem ein Symbol verwendet werden kann, wird vom Browser und dem Betriebssystem basierend auf den angegebenen Größen und Formaten bestimmt.

## Sicherheitsüberlegungen

Die Fähigkeit des Browsers, ein Symbolbild abzurufen, wird durch die Content Security Policy ({{Glossary("CSP", "CSP")}}) des Besitzerdokuments des Manifests geregelt, insbesondere durch die [`img-src`](/de/docs/Web/HTTP/Headers/Content-Security-Policy/img-src)-Direktive. Dieser Sicherheitsaspekt bezieht sich auf die `src`-Eigenschaft.

Zum Beispiel, wenn die `img-src`-Direktive in einem CSP-Header `icons.example.com` spezifiziert, können nur Symbole von dieser Domain abgerufen werden. In einem Manifest mit zwei Symbolen, eines von `icons.example.com/low-res` und ein anderes von `other.com/hi-res`, würde nur das erstere erfolgreich abgerufen werden, aufgrund der CSP-Beschränkungen.

## Leistungsüberlegungen

Die Angabe der `type`-Eigenschaft kann die Leistung erheblich verbessern, da es Browsern ermöglicht, Bilder mit nicht unterstützten Formaten leichter zu ignorieren.
Wenn Sie die `type`-Eigenschaft nicht angeben, müssen Browser möglicherweise das Bildformat anhand ressourcenintensiverer Methoden wie [MIME-Sniffing](/de/docs/Web/HTTP/MIME_types#mime_sniffing) der Datei auf eine Signatur hin bestimmen.

Mindestens sollten, wenn die `type`-Eigenschaft weggelassen wird, geeignete und eindeutige Dateierweiterungen für Ihre Symbole verwendet werden.

## Beispiele

### Mehrere Symbole deklarieren

Dieses Beispiel zeigt, wie man mehrere Symbole für verschiedene Szenarien und Geräte deklariert. Wenn ein Symbol für eine bestimmte Situation nicht unterstützt oder nicht verfügbar ist, greifen Browser auf andere verfügbare Formate und Größen zurück.

- Zwei Symbole der gleichen Größe (`48x48`) werden in verschiedenen Formaten bereitgestellt. Das erste ist explizit als [WebP](/de/docs/Web/Media/Formats/Image_types#webp_image) unter Verwendung der `type`-Eigenschaft angegeben. Wenn ein Browser WebP nicht unterstützt, greift er auf das zweite Symbol der gleichen Größe zurück. Für das zweite Symbol wird der MIME-Typ entweder aus dem HTTP-Header bestimmt oder aus dem Inhalt der Bilddatei abgeleitet. Symbole in dieser Größe werden typischerweise für Browser-Tabs und Lesezeichen verwendet.

- Eine [ICO](/de/docs/Web/Media/Formats/Image_types#ico_microsoft_windows_icon)-Datei wird mit mehreren Größen von `72x72` bis `256x256` bereitgestellt. ICO-Dateien enthalten mehrere Rasterlogos, die jeweils für verschiedene Anzeigegrößen optimiert sind. Symbole dieser Größen werden häufig für Desktop-Verknüpfungen verwendet.

- Für größere Symbole (`257x257` und größer) wird eine [SVG](/de/docs/Web/Media/Formats/Image_types#svg_scalable_vector_graphics)-Datei angegeben. Der `sizes`-Wert dieses Symbols ist auf `any` gesetzt, was es einem Browser ermöglicht, dieses Symbol in beliebiger Größe zu verwenden. SVG-Symbole behalten ihre Qualität in größeren Größen bei. Diese Symbole sind ideal für hochauflösende Displays wie in [progressiven Web-Apps (PWAs)](/de/docs/Web/Progressive_web_apps).

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

- [Bilddateitypen und Formatleitfaden](/de/docs/Web/Media/Formats/Image_types#webp_image)
- [Einfarbige Symbole und Volltonfüllungen](https://w3c.github.io/manifest/#monochrome-icons-and-solid-fills)
- [Symbolmasken und Sicherheitszone](https://w3c.github.io/manifest/#icon-masks)
