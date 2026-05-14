---
title: "`<meta name>` HTML-Attribut"
short-title: <meta name>
slug: Web/HTML/Reference/Elements/meta/name
l10n:
  sourceCommit: 4607393c465f5a8bdbb36047f2ec03c2fb058af5
---

Das **`name`**-Attribut des {{htmlelement("meta")}}-Elements liefert Metadaten in Form von Name-Wert-Paaren.
Wenn ein `<meta>`-Element ein `name`-Attribut hat, definiert ein [`content`](/de/docs/Web/HTML/Reference/Attributes/content)-Attribut den entsprechenden Wert.
Die Metadaten sind _Dokument-Metadaten_, die für die gesamte Seite gelten.

Zum Beispiel liefert das folgende `<meta>`-Tag eine `description` als Metadaten für ein Dokument:

```html
<meta
  name="description"
  content="The HTML reference describes all elements and attributes of HTML, including global attributes that apply to all elements." />
```

## Wert

### Meta-Namen definiert in der HTML-Spezifikation

Die HTML-Spezifikation definiert die folgende Reihe von standardisierten Metadaten-Namen:

- `application-name`
  - : Browser können dies verwenden, um die im Webpage laufende Anwendung zu identifizieren.
    Es unterscheidet sich vom {{HTMLElement("title")}}-Element, das einen Anwendungs- oder Website-Namen enthalten kann, aber ein `<title>` kann kontextbezogene Informationen wie einen Dokumentnamen oder einen Status hinzufügen.
    Einzelne Seiten sollten keinen eigenen, eindeutigen `application-name` definieren.
    Um Übersetzungen bereitzustellen, verwenden Sie mehrere `<meta>`-Tags mit dem `lang`-Attribut für jede Sprache:

    ```html
    <meta name="application-name" content="Weather Wizard" lang="en" />
    <meta name="application-name" content="Mago del Clima" lang="es" />
    ```

- `author`
  - : Der Name des Dokumentautors.
- [`color-scheme`](/de/docs/Web/HTML/Reference/Elements/meta/name/color-scheme)
  - : Gibt eine oder mehrere Farbschemata an, mit denen das Dokument kompatibel ist.
    Der Browser verwendet diese Informationen zusammen mit den Einstellungen des Browsers oder Gerätes des Benutzers, um zu bestimmen, welche Farben beispielsweise für Hintergrund, Vordergründe, Formularelemente und Scrollleisten verwendet werden sollen.
    Der primäre Verwendungszweck von `<meta name="color-scheme">` ist die Anzeige der Kompatibilität und der Vorzugsreihenfolge für helle und dunkle Farbmodi.
- `description`
  - : Eine kurze und genaue Zusammenfassung des Seiteninhalts, allgemein als "Meta-Beschreibung" bezeichnet.
    Suchmaschinen wie Google verwenden diese Metadaten, um [das Aussehen einer Webseite in den Suchergebnissen](https://developers.google.com/search/docs/appearance/snippet#meta-descriptions) anzupassen.
- `generator`
  - : Der Identifikator der Software, die die Seite erzeugt hat.
- `keywords`
  - : Relevante Wörter zum Seiteninhalt, getrennt durch Kommata.
- [`referrer`](/de/docs/Web/HTML/Reference/Elements/meta/name/referrer)
  - : Steuert den HTTP {{httpheader("Referer")}}-Header von Anfragen, die aus dem Dokument gesendet werden.
- [`theme-color`](/de/docs/Web/HTML/Reference/Elements/meta/name/theme-color)
  - : Gibt eine vorgeschlagene Farbe an, die von Benutzeragenten verwendet werden sollte, um die Anzeige der Seite oder der umliegenden Benutzeroberfläche anzupassen.
    Das [`content`](/de/docs/Web/HTML/Reference/Attributes/content)-Attribut enthält einen gültigen CSS {{cssxref("&lt;color&gt;")}}.
    Das [`media`](/de/docs/Web/HTML/Reference/Elements/meta#media)-Attribut kann mit einer gültigen Medienabfrageliste eingeschlossen werden, um die Medien festzulegen, auf die das Theme-Color-Metadatum angewendet wird.

### Meta-Namen definiert in anderen Spezifikationen

- [`viewport`](/de/docs/Web/HTML/Reference/Elements/meta/name/viewport)
  - : Gibt Hinweise zur anfänglichen Größe des {{Glossary("viewport", "Viewports")}}. Definiert im [CSS-Viewport-Modul](/de/docs/Web/CSS/Guides/Viewport).
- [`text-scale`](/de/docs/Web/HTML/Reference/Elements/meta/name/text-scale)
  - : Ermöglicht, die Seite so anzupassen, dass das {{htmlelement("html")}}-Wurzelelement die Skalierung der {{cssxref("font-size")}} proportional zu den OS- und Browser-Textskalierungseinstellungen übernimmt. Definiert im [CSS-Schriftartenmodul](/de/docs/Web/CSS/Guides/Fonts).

### Meta-Namen definiert im WHATWG MetaExtensions Wiki

Die [MetaExtensions-Seite des WHATWG Wikis](https://wiki.whatwg.org/wiki/MetaExtensions) enthält eine umfangreiche Liste von nicht standardisierten Metadaten-Namen.
Einige der enthaltenen Namen werden in der Praxis häufig verwendet, insbesondere die folgenden:

- `creator`
  - : Der Name des Erstellers des Dokuments, wie eine Organisation oder Institution.
    Wenn es mehrere gibt, sollten mehrere {{HTMLElement("meta")}}-Elemente verwendet werden.
- `googlebot`
  - : Ein Synonym für `robots`, das nur von Googlebot (dem Indexing-Crawler von Google) befolgt wird.
- `publisher`
  - : Der Name des Herausgebers des Dokuments.
- [`robots`](/de/docs/Web/HTML/Reference/Elements/meta/name/robots)
  - : Eine kommaseparierte Liste von Werten, die das Crawling-Verhalten definieren, das kooperative Crawler (oder "Roboter") mit der Seite verwenden sollten.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Metadaten: das `<meta>`-Element](/de/docs/Learn_web_development/Core/Structuring_content/Webpage_metadata#metadata_the_meta_element)
