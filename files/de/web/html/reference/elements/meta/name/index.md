---
title: "`<meta name>` HTML-Attribut"
short-title: <meta name>
slug: Web/HTML/Reference/Elements/meta/name
l10n:
  sourceCommit: b50ed7ac1c2ca21b4b5cfb594474a17da3f2e6c2
---

Das **`name`**-Attribut des {{htmlelement("meta")}}-Elements liefert Metadaten in Name-Wert-Paaren.
Wenn ein `<meta>`-Element ein `name`-Attribut hat, definiert ein [`content`](/de/docs/Web/HTML/Reference/Attributes/content)-Attribut den entsprechenden Wert.
Die Metadaten sind _dokumentenebene Metadaten_, die für die gesamte Seite gelten.

Zum Beispiel liefert das folgende `<meta>`-Tag eine `description` als Metadaten für ein Dokument:

```html
<meta
  name="description"
  content="The HTML reference describes all elements and attributes of HTML, including global attributes that apply to all elements." />
```

## Wert

### Metanamen, die in der HTML-Spezifikation definiert sind

Die HTML-Spezifikation definiert die folgende Menge von Standard-Metadaten-Namen:

- `application-name`
  - : Browser können dies verwenden, um die Anwendung zu identifizieren, die auf der Webseite läuft.
    Es unterscheidet sich vom {{HTMLElement("title")}}-Element, das möglicherweise einen Anwendungs- (oder Website-) Namen enthält, aber ein `<title>` kann zusätzliche kontextuelle Informationen wie einen Dokumentnamen oder den Status hinzufügen.
    Einzelne Seiten sollten keinen eigenen, einzigartigen `application-name` definieren.
    Um Übersetzungen bereitzustellen, verwenden Sie mehrere `<meta>`-Tags mit dem `lang`-Attribut für jede Sprache:

    ```html
    <meta name="application-name" content="Weather Wizard" lang="en" />
    <meta name="application-name" content="Mago del Clima" lang="es" />
    ```

- `author`
  - : Der Name des Dokumentautors.
- [`color-scheme`](/de/docs/Web/HTML/Reference/Elements/meta/name/color-scheme)
  - : Gibt ein oder mehrere Farbschemata an, mit denen das Dokument kompatibel ist.
    Der Browser verwendet diese Informationen zusammen mit den Einstellungen des Browsers oder des Geräts des Benutzers, um zu bestimmen, welche Farben für alles von Hintergründen und Vordergründen bis hin zu Formularelementen und Bildlaufleisten verwendet werden sollen.
    Der Hauptzweck von `<meta name="color-scheme">` besteht darin, die Kompatibilität und die Reihenfolge der Präferenz für helle und dunkle Farbmotive anzuzeigen.
- `description`
  - : Eine kurze und präzise Zusammenfassung des Inhalts der Seite, die üblicherweise als "Meta-Beschreibung" bezeichnet wird.
    Suchmaschinen wie Google verwenden diese Metadaten, um [das Erscheinungsbild einer Webseite in Suchergebnissen](https://developers.google.com/search/docs/appearance/snippet#meta-descriptions) anzupassen.
- `generator`
  - : Der Bezeichner der Software, die die Seite erstellt hat.
- `keywords`
  - : Wörter, die für den Inhalt der Seite relevant sind, durch Kommas getrennt.
- [`referrer`](/de/docs/Web/HTML/Reference/Elements/meta/name/referrer)
  - : Steuert den HTTP {{httpheader("Referer")}}-Header von Anfragen, die aus dem Dokument gesendet werden.
- [`theme-color`](/de/docs/Web/HTML/Reference/Elements/meta/name/theme-color)
  - : Gibt eine vorgeschlagene Farbe an, die Benutzeragenten verwenden sollten, um die Anzeige der Seite oder der umgebenden Benutzeroberfläche anzupassen.
    Das [`content`](/de/docs/Web/HTML/Reference/Attributes/content)-Attribut enthält ein gültiges CSS {{cssxref("&lt;color&gt;")}}.
    Das [`media`](/de/docs/Web/HTML/Reference/Elements/meta#media)-Attribut mit einer gültigen Medienabfrageliste kann hinzugefügt werden, um die Medien festzulegen, auf die sich die Metadaten der Themenfarbe beziehen.

### Metanamen, die in anderen Spezifikationen definiert sind

Die CSS Device Adaptation-Spezifikation definiert folgenden Metadaten-Namen:

- [`viewport`](/de/docs/Web/HTML/Reference/Elements/meta/name/viewport)
  - : Gibt Hinweise zur Größe der anfänglichen Größe des {{Glossary("viewport", "Viewports")}}.

### Metanamen, die im WHATWG MetaExtensions-Wiki definiert sind

Die [WHATWG Wiki MetaExtensions-Seite](https://wiki.whatwg.org/wiki/MetaExtensions) enthält eine große Menge an nicht standardisierten Metadaten-Namen.
Einige der enthaltenen Namen werden in der Praxis ziemlich häufig verwendet, insbesondere die folgenden:

- `creator`
  - : Der Name des Erstellers des Dokuments, wie eine Organisation oder Institution.
    Wenn es mehrere gibt, sollten mehrere {{HTMLElement("meta")}}-Elemente verwendet werden.
- `googlebot`
  - : Ein Synonym für `robots`, wird nur von Googlebot (dem Indexierungs-Crawler für Google) befolgt.
- `publisher`
  - : Der Name des Dokumentenverlegers.
- [`robots`](/de/docs/Web/HTML/Reference/Elements/meta/name/robots)
  - : Eine komma-separierte Liste von Werten, die das Crawlerverhalten definieren, das kooperative Crawler (oder "Roboter") mit der Seite verwenden sollten.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Metadaten: das `<meta>`-Element](/de/docs/Learn_web_development/Core/Structuring_content/Webpage_metadata#metadata_the_meta_element)
