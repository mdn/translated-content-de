---
title: <meta> name-Attribut
short-title: <meta> name
slug: Web/HTML/Reference/Elements/meta/name
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{HTMLSidebar}}

Das **`name`**-Attribut des {{htmlelement("meta")}}-Elements bietet Metadaten in Name-Wert-Paaren an.
Wenn ein `<meta>`-Element ein `name`-Attribut hat, definiert ein [`content`](/de/docs/Web/HTML/Reference/Elements/meta#content)-Attribut den entsprechenden Wert.
Die Metadaten sind _dokumentenweite Metadaten_, die für die gesamte Seite gelten.

Zum Beispiel bietet das folgende `<meta>`-Tag eine `description` als Metadaten für ein Dokument an:

```html
<meta
  name="description"
  content="The HTML reference describes all elements and attributes of HTML, including global attributes that apply to all elements." />
```

## Wert

### In der HTML-Spezifikation definierte Meta-Namen

Die HTML-Spezifikation definiert die folgende Menge an Standard-Metadaten-Namen:

- `application-name`

  - : Browser können dies verwenden, um die Anwendung zu identifizieren, die auf der Webseite läuft.
    Es unterscheidet sich vom {{HTMLElement("title")}}-Element, das möglicherweise einen Anwendungs- (oder Website-) Namen enthält, aber ein `<title>` kann kontextuelle Informationen wie einen Dokumentnamen oder einen Status hinzufügen.
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
    Der Browser wird diese Information zusammen mit den Einstellungen des Benutzers oder Geräts verwenden, um zu bestimmen, welche Farben für alles von Hintergründen und Vordergründen bis hin zu Formularelementen und Scrollleisten verwendet werden sollen.
    Die Hauptverwendung von `<meta name="color-scheme">` besteht darin, die Kompatibilität und Reihenfolge der Präferenz für helle und dunkle Farbmodi anzugeben.
- `description`
  - : Eine kurze und präzise Zusammenfassung des Seiteninhalts, die üblicherweise als "Meta-Beschreibung" bezeichnet wird.
    Suchmaschinen wie Google verwenden diese Metadaten, um [das Erscheinungsbild einer Webseite in Suchergebnissen](https://developers.google.com/search/docs/appearance/snippet#meta-descriptions) anzupassen.
- `generator`
  - : Die Kennung der Software, die die Seite generiert hat.
- `keywords`
  - : Wörter, die für den Seiteninhalt relevant sind, durch Kommas getrennt.
- [`referrer`](/de/docs/Web/HTML/Reference/Elements/meta/name/referrer)
  - : Steuert den HTTP-{{httpheader("Referer")}}-Header von Anfragen, die vom Dokument gesendet werden.
- [`theme-color`](/de/docs/Web/HTML/Reference/Elements/meta/name/theme-color)
  - : Gibt eine empfohlene Farbe an, die Benutzeragenten verwenden sollten, um die Darstellung der Seite oder der umgebenden Benutzeroberfläche anzupassen.
    Das [`content`](/de/docs/Web/HTML/Reference/Attributes/content)-Attribut enthält ein gültiges CSS {{cssxref("&lt;color&gt;")}}.
    Das [`media`](/de/docs/Web/HTML/Reference/Elements/meta#media)-Attribut mit einer gültigen Medienabfrage-Liste kann eingeschlossen werden, um die Medien festzulegen, auf die sich die Metadaten zur Themenfarbe beziehen.

### In anderen Spezifikationen definierte Meta-Namen

Die CSS-Geräteanpassungs-Spezifikation definiert den folgenden Metadatennamen:

- [`viewport`](/de/docs/Web/HTML/Reference/Elements/meta/name/viewport)
  - : Gibt Hinweise zur Größe der anfänglichen Größe des {{Glossary("viewport", "Viewports")}}.

### Im WHATWG MetaExtensions-Wiki definierte Meta-Namen

Die [WHATWG-Wiki-Seite zu MetaExtensions](https://wiki.whatwg.org/wiki/MetaExtensions) enthält eine große Menge nicht-standardisierter Metadaten-Namen.
Einige der enthaltenen Namen werden in der Praxis recht häufig verwendet, insbesondere die folgenden:

- `creator`
  - : Der Name des Erstellers des Dokuments, wie eine Organisation oder Institution.
    Falls es mehrere gibt, sollten mehrere {{HTMLElement("meta")}}-Elemente verwendet werden.
- `googlebot`
  - : Ein Synonym für `robots`, das nur von Googlebot (dem Indexierungs-Crawler für Google) befolgt wird.
- `publisher`
  - : Der Name des Dokumentenherausgebers.
- [`robots`](/de/docs/Web/HTML/Reference/Elements/meta/name/robots)
  - : Eine durch Kommas getrennte Liste von Werten, die das Crawl-Verhalten definieren, das kooperative Crawler (oder "Roboter") mit der Seite verwenden sollten.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Viewport-`<meta>`-Tag](/de/docs/Web/HTML/Guides/Viewport_meta_element)
- [Metadaten: das `<meta>`-Element](/de/docs/Learn_web_development/Core/Structuring_content/Webpage_metadata#metadata_the_meta_element)
