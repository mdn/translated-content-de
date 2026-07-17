---
title: "`<meta name>` HTML-Attribut"
short-title: <meta name>
slug: Web/HTML/Reference/Elements/meta/name
l10n:
  sourceCommit: 04c41175b160dc00b1a1b8e4e13b2183d89fdf1a
---

Das **`name`**-Attribut des {{htmlelement("meta")}}-Elements liefert Metadaten in Form von Name-Wert-Paaren.
Wenn ein `<meta>`-Element ein `name`-Attribut hat, definiert ein [`content`](/de/docs/Web/HTML/Reference/Attributes/content)-Attribut den entsprechenden Wert.
Die Metadaten sind _dokumentenbezogene Metadaten_, die für die gesamte Seite gelten.

Zum Beispiel stellt das folgende `<meta>`-Tag eine `description` als Metadaten für ein Dokument bereit:

```html
<meta
  name="description"
  content="The HTML reference describes all elements and attributes of HTML, including global attributes that apply to all elements." />
```

## Wert

### Metanamen, die in der HTML-Spezifikation definiert sind

Die HTML-Spezifikation definiert die folgende Reihe von standardisierten Metadatanamen:

- `application-name`
  - : Browser können dies verwenden, um die in der Webseite ausgeführte Anwendung zu identifizieren.
    Es unterscheidet sich vom {{HTMLElement("title")}}-Element, das möglicherweise einen Anwendungs- (oder Website-) Namen enthält, jedoch kann ein `<title>` kontextbezogene Informationen wie einen Dokumentnamen oder einen Status hinzufügen.
    Einzelne Seiten sollten keinen eigenen, einzigartigen `application-name` definieren.
    Um Übersetzungen bereitzustellen, verwenden Sie mehrere `<meta>`-Tags mit dem `lang`-Attribut für jede Sprache:

    ```html
    <meta name="application-name" content="Weather Wizard" lang="en" />
    <meta name="application-name" content="Mago del Clima" lang="es" />
    ```

- `author`
  - : Der Name des Dokumentautors.
- [`color-scheme`](/de/docs/Web/HTML/Reference/Elements/meta/name/color-scheme)
  - : Gibt eine oder mehrere Farbschemata an, mit denen das Dokument kompatibel ist.
    Der Browser verwendet diese Informationen zusammen mit den Einstellungen des Benutzerbrowsers oder -geräts, um zu bestimmen, welche Farben für alles von Hintergründen und Vordergründen bis hin zu Formularelementen und Bildlaufleisten verwendet werden sollen.
    Der Hauptzweck von `<meta name="color-scheme">` besteht darin, Kompatibilität und Präferenzreihenfolge für helle und dunkle Farbmodi anzugeben.
- `description`
  - : Eine kurze und präzise Zusammenfassung des Seiteninhalts, die üblicherweise als "Meta-Beschreibung" bezeichnet wird.
    Suchmaschinen wie Google verwenden diese Metadaten, um [das Erscheinungsbild einer Webseite in den Suchergebnissen](https://developers.google.com/search/docs/appearance/snippet#meta-descriptions) anzupassen.
- `generator`
  - : Der Bezeichner der Software, die die Seite generiert hat.
- `keywords`
  - : Wörter, die mit dem Inhalt der Seite relevant sind und durch Kommas getrennt werden.
- [`referrer`](/de/docs/Web/HTML/Reference/Elements/meta/name/referrer)
  - : Steuert den HTTP {{httpheader("Referer")}}-Header von Anfragen, die vom Dokument gesendet werden.
- [`theme-color`](/de/docs/Web/HTML/Reference/Elements/meta/name/theme-color)
  - : Gibt eine empfohlene Farbe an, die von Benutzeragenten verwendet werden sollte, um die Anzeige der Seite oder der umgebenden Benutzeroberfläche anzupassen.
    Das [`content`](/de/docs/Web/HTML/Reference/Attributes/content)-Attribut enthält eine gültige CSS {{cssxref("&lt;color&gt;")}}.
    Das [`media`](/de/docs/Web/HTML/Reference/Elements/meta#media)-Attribut mit einer gültigen Abfrage kann hinzugefügt werden, um die Medien festzulegen, auf die die Metadaten der Themenfarbe angewendet werden.

### Metanamen, die in anderen Spezifikationen definiert sind

- [`responsive-embedded-sizing`](/de/docs/Web/HTML/Reference/Elements/meta/name/responsive-embedded-sizing) {{experimental_inline}}
  - : Meldet sich für ein eingebettetes Dokument an, seine Größeninformationen mit der Elternseite zu teilen. Definiert im [CSS-Box-Sizing-Modul](/de/docs/Web/CSS/Guides/Box_sizing).
- [`text-scale`](/de/docs/Web/HTML/Reference/Elements/meta/name/text-scale) {{experimental_inline}}
  - : Aktiviert die Anpassung der Skalierung der {{htmlelement("html")}}-Root-Element-Schriftgröße proportional zu den Textskalen-Einstellungen auf OS- und Browserebene. Definiert im [CSS-Fonts-Modul](/de/docs/Web/CSS/Guides/Fonts).
- [`viewport`](/de/docs/Web/HTML/Reference/Elements/meta/name/viewport)
  - : Gibt Hinweise auf die anfängliche Größe des {{Glossary("viewport", "Viewports")}}. Definiert im [CSS-Viewport-Modul](/de/docs/Web/CSS/Guides/Viewport).

### Metanamen, die im WHEREG MetaExtensions-Wiki definiert sind

Die [WHATWG Wiki MetaExtensions-Seite](https://wiki.whatwg.org/wiki/MetaExtensions) enthält eine große Anzahl nicht-standardisierter Metadatanamen.
Einige der enthaltenen Namen werden in der Praxis recht häufig verwendet, insbesondere die folgenden:

- `creator`
  - : Der Name des Urhebers des Dokuments, wie zum Beispiel eine Organisation oder Institution.
    Wenn es mehrere gibt, sollten mehrere {{HTMLElement("meta")}}-Elemente verwendet werden.
- `googlebot`
  - : Ein Synonym für `robots`, wird nur von Googlebot (dem Indizierungs-Crawler für Google) befolgt.
- `publisher`
  - : Der Name des Verlags des Dokuments.
- [`robots`](/de/docs/Web/HTML/Reference/Elements/meta/name/robots)
  - : Eine durch Kommas getrennte Liste von Werten, die das Crawling-Verhalten definieren, das kooperative Crawler (oder "Roboter") mit der Seite verwenden sollten.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Metadaten: das `<meta>`-Element](/de/docs/Learn_web_development/Core/Structuring_content/Webpage_metadata#metadata_the_meta_element)
