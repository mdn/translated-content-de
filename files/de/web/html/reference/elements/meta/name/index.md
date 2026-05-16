---
title: "`<meta name>` HTML-Attribut"
short-title: <meta name>
slug: Web/HTML/Reference/Elements/meta/name
l10n:
  sourceCommit: b884c869c8bdc8f6bd0ea8290934757d27d6845c
---

Das **`name`**-Attribut des {{htmlelement("meta")}}-Elements liefert Metadaten in Name-Wert-Paaren.
Wenn ein `<meta>`-Element ein `name`-Attribut hat, definiert ein [`content`](/de/docs/Web/HTML/Reference/Attributes/content)-Attribut den entsprechenden Wert.
Die Metadaten sind _dokumentenbezogene Metadaten_, die für die gesamte Seite gelten.

Zum Beispiel liefert das folgende `<meta>`-Tag eine `description` als Metadaten für ein Dokument:

```html
<meta
  name="description"
  content="The HTML reference describes all elements and attributes of HTML, including global attributes that apply to all elements." />
```

## Wert

### Meta-Namen, die in der HTML-Spezifikation definiert sind

Die HTML-Spezifikation definiert die folgende Menge an standardisierten Metadaten-Namen:

- `application-name`
  - : Browser können dies verwenden, um die Anwendung zu identifizieren, die auf der Webseite läuft.
    Es unterscheidet sich vom {{HTMLElement("title")}}-Element, das einen Anwendungs- (oder Website-)Namen enthalten kann, aber ein `<title>` kann Kontextinformationen wie einen Dokumentnamen oder einen Status hinzufügen.
    Einzelne Seiten sollten nicht ihren eigenen, einzigartigen `application-name` definieren.
    Um Übersetzungen bereitzustellen, verwenden Sie mehrere `<meta>`-Tags mit dem `lang`-Attribut für jede Sprache:

    ```html
    <meta name="application-name" content="Weather Wizard" lang="en" />
    <meta name="application-name" content="Mago del Clima" lang="es" />
    ```

- `author`
  - : Der Name des Autors des Dokuments.
- [`color-scheme`](/de/docs/Web/HTML/Reference/Elements/meta/name/color-scheme)
  - : Gibt ein oder mehrere Farbschemata an, mit denen das Dokument kompatibel ist.
    Der Browser verwendet diese Informationen in Verbindung mit den Einstellungen des Browsers oder des Geräts des Nutzers, um zu bestimmen, welche Farben für alles von Hintergrund- und Vordergrundfarben bis hin zu Formularelementen und Scrollleisten verwendet werden sollen.
    Der Hauptzweck von `<meta name="color-scheme">` ist es, die Kompatibilität und die Präferenzreihenfolge für helle und dunkle Farbmodi anzuzeigen.
- `description`
  - : Eine kurze und genaue Zusammenfassung des Inhalts der Seite, die üblicherweise als "Meta-Beschreibung" bezeichnet wird.
    Suchmaschinen wie Google verwenden diese Metadaten, um [das Erscheinungsbild einer Webseite in den Suchergebnissen](https://developers.google.com/search/docs/appearance/snippet#meta-descriptions) anzupassen.
- `generator`
  - : Die Kennung der Software, die die Seite erstellt hat.
- `keywords`
  - : Worte, die für den Inhalt der Seite relevant sind und durch Kommas getrennt werden.
- [`referrer`](/de/docs/Web/HTML/Reference/Elements/meta/name/referrer)
  - : Steuert den HTTP {{httpheader("Referer")}}-Header von Anfragen, die vom Dokument gesendet werden.
- [`theme-color`](/de/docs/Web/HTML/Reference/Elements/meta/name/theme-color)
  - : Gibt eine empfohlene Farbe an, die Benutzeragenten verwenden sollten, um die Anzeige der Seite oder der umgebenden Benutzeroberfläche anzupassen.
    Das [`content`](/de/docs/Web/HTML/Reference/Attributes/content)-Attribut enthält ein gültiges CSS {{cssxref("&lt;color&gt;")}}.
    Das [`media`](/de/docs/Web/HTML/Reference/Elements/meta#media)-Attribut mit einer gültigen Media-Query-Liste kann hinzugefügt werden, um die Medien festzulegen, auf die sich die Theme-Farben-Metadaten beziehen.

### Meta-Namen, die in anderen Spezifikationen definiert sind

- [`viewport`](/de/docs/Web/HTML/Reference/Elements/meta/name/viewport)
  - : Gibt Hinweise zur anfänglichen Größe des {{Glossary("viewport", "Viewports")}}. Definiert im [CSS-Viewport-Modul](/de/docs/Web/CSS/Guides/Viewport).
- [`text-scale`](/de/docs/Web/HTML/Reference/Elements/meta/name/text-scale) {{experimental_inline}}
  - : Ermöglicht es, die Seite darauf einzustellen, dass die {{htmlelement("html")}}-Root-Element-{{cssxref("font-size")}} proportional zu den Textskalierungseinstellungen des Betriebssystems und Browsers skaliert wird. Definiert im [CSS-Schriftarten-Modul](/de/docs/Web/CSS/Guides/Fonts).

### Meta-Namen, die im WHATWG MetaExtensions-Wiki definiert sind

Die [WHATWG Wiki MetaExtensions-Seite](https://wiki.whatwg.org/wiki/MetaExtensions) enthält eine große Menge an nicht standardisierten Metadaten-Namen.
Einige der enthaltenen Namen werden in der Praxis recht häufig verwendet, insbesondere die folgenden:

- `creator`
  - : Der Name des Erstellers des Dokuments, z. B. eine Organisation oder Institution.
    Wenn es mehrere gibt, sollten mehrere {{HTMLElement("meta")}}-Elemente verwendet werden.
- `googlebot`
  - : Ein Synonym für `robots`, wird nur von Googlebot (dem Indexierungs-Crawler für Google) befolgt.
- `publisher`
  - : Der Name des Herausgebers des Dokuments.
- [`robots`](/de/docs/Web/HTML/Reference/Elements/meta/name/robots)
  - : Eine durch Kommata getrennte Liste von Werten, die das Crawl-Verhalten definieren, das kooperative Crawler (oder "Robots") mit der Seite verwenden sollten.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Metadaten: das `<meta>`-Element](/de/docs/Learn_web_development/Core/Structuring_content/Webpage_metadata#metadata_the_meta_element)
