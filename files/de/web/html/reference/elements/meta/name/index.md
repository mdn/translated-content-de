---
title: <meta>-Attribut name
short-title: <meta> name
slug: Web/HTML/Reference/Elements/meta/name
l10n:
  sourceCommit: d9b6cad3b5e14b42061608fb5283e32c75808a3d
---

{{HTMLSidebar}}

Das **`name`**-Attribut des {{htmlelement("meta")}}-Elements stellt Metadaten in Form von Name-Wert-Paaren bereit. Wenn ein `<meta>`-Element ein `name`-Attribut hat, definiert ein [`content`](/de/docs/Web/HTML/Reference/Elements/meta#content)-Attribut den entsprechenden Wert. Die Metadaten sind _Dokument-Metadaten_, die für die gesamte Seite gelten.

Zum Beispiel bietet der folgende `<meta>`-Tag eine `description` als Metadaten für ein Dokument:

```html
<meta
  name="description"
  content="The HTML reference describes all elements and attributes of HTML, including global attributes that apply to all elements." />
```

## Wert

### In der HTML-Spezifikation definierte Meta-Namen

Die HTML-Spezifikation definiert die folgende Reihe von Standard-Metadaten-Namen:

- `application-name`

  - : Browser können dies verwenden, um die auf der Webseite laufende Anwendung zu identifizieren.
    Es unterscheidet sich vom {{HTMLElement("title")}}-Element, das einen Anwendungs- (oder Website-) Namen enthalten kann, aber ein `<title>` kann kontextbezogene Informationen wie einen Dokumentnamen oder einen Status hinzufügen. Einzelne Seiten sollten nicht ihren eigenen, eindeutigen `application-name` definieren. Um Übersetzungen bereitzustellen, verwenden Sie mehrere `<meta>`-Tags mit dem `lang`-Attribut für jede Sprache:

    ```html
    <meta name="application-name" content="Weather Wizard" lang="en" />
    <meta name="application-name" content="Mago del Clima" lang="es" />
    ```

- `author`
  - : Der Name des Dokumentautors.
- [`color-scheme`](/de/docs/Web/HTML/Reference/Elements/meta/name/color-scheme)
  - : Gibt eine oder mehrere Farbschemata an, mit denen das Dokument kompatibel ist. Der Browser verwendet diese Informationen zusammen mit den Einstellungen des Benutzers im Browser oder Gerät, um zu bestimmen, welche Farben für alles verwendet werden sollen, von Hintergrund und Vordergrund bis zu Formularelementen und Scrollleisten. Der Hauptzweck von `<meta name="color-scheme">` ist die Angabe der Kompatibilität und der Präferenzreihenfolge für helle und dunkle Farbmodi.
- `description`
  - : Eine kurze und genaue Zusammenfassung des Inhalts der Seite, oft als "Meta-Beschreibung" bezeichnet. Suchmaschinen wie Google verwenden diese Metadaten, um [das Aussehen einer Webseite in den Suchergebnissen](https://developers.google.com/search/docs/appearance/snippet#meta-descriptions) anzupassen.
- `generator`
  - : Der Bezeichner der Software, die die Seite erzeugt hat.
- `keywords`
  - : Durch Kommas getrennte Wörter, die für den Inhalt der Seite relevant sind.
- [`referrer`](/de/docs/Web/HTML/Reference/Elements/meta/name/referrer)
  - : Steuert den HTTP-{{httpheader("Referer")}}-Header von Anfragen, die vom Dokument gesendet werden.
- [`theme-color`](/de/docs/Web/HTML/Reference/Elements/meta/name/theme-color)
  - : Gibt eine empfohlene Farbe an, die Benutzeragenten verwenden sollten, um das Erscheinungsbild der Seite oder der umgebenden Benutzeroberfläche anzupassen. Das [`content`](/de/docs/Web/HTML/Reference/Attributes/content)-Attribut enthält einen gültigen CSS {{cssxref("&lt;color&gt;")}}. Das [`media`](/de/docs/Web/HTML/Reference/Elements/meta#media)-Attribut mit einer gültigen Medienabfrageliste kann hinzugefügt werden, um die Medien festzulegen, auf die sich die Theme-Color-Metadaten beziehen.

### In anderen Spezifikationen definierte Meta-Namen

Die CSS Device Adaptation-Spezifikation definiert den folgenden Metadaten-Namen:

- [`viewport`](/de/docs/Web/HTML/Reference/Elements/meta/name/viewport)
  - : Gibt Hinweise zur Größe der anfänglichen Größe des {{Glossary("viewport", "Viewports")}}.

### Im WHATWG MetaExtensions-Wiki definierte Meta-Namen

Die [WHATWG Wiki MetaExtensions-Seite](https://wiki.whatwg.org/wiki/MetaExtensions) enthält eine große Anzahl nicht standardisierter Metadaten-Namen. Einige der enthaltenen Namen werden in der Praxis ziemlich häufig verwendet, insbesondere die folgenden:

- `creator`
  - : Der Name des Erstellers des Dokuments, wie zum Beispiel eine Organisation oder Institution. Wenn es mehr als einen gibt, sollten mehrere {{HTMLElement("meta")}}-Elemente verwendet werden.
- `googlebot`
  - : Ein Synonym für `robots`, wird nur von Googlebot (dem Indexierungs-Crawler von Google) befolgt.
- `publisher`
  - : Der Name des Dokumentherausgebers.
- [`robots`](/de/docs/Web/HTML/Reference/Elements/meta/name/robots)
  - : Eine durch Kommas getrennte Liste von Werten, die das Crawl-Verhalten definieren, das kooperative Crawler (oder "Roboter") bei der Seite verwenden sollen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Viewport-`<meta>`-Tag](/de/docs/Web/HTML/Guides/Viewport_meta_element)
- [Metadaten: das `<meta>`-Element](/de/docs/Learn_web_development/Core/Structuring_content/Webpage_metadata#metadata_the_meta_element)
