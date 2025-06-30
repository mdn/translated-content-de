---
title: <meta> name-Attribut
short-title: <meta> name
slug: Web/HTML/Reference/Elements/meta/name
l10n:
  sourceCommit: a33c2c8081a1df867a0a334afc560057b2124bad
---

{{HTMLSidebar}}

Das **`name`**-Attribut des {{htmlelement("meta")}}-Elements liefert Metadaten in Name-Wert-Paaren. Wenn ein `<meta>`-Element ein `name`-Attribut hat, definiert ein [`content`](/de/docs/Web/HTML/Reference/Attributes/content)-Attribut den entsprechenden Wert. Die Metadaten sind _Dokumenten-Metadaten_, die für die gesamte Seite gelten.

Zum Beispiel liefert das folgende `<meta>`-Tag eine `description` als Metadaten für ein Dokument:

```html
<meta
  name="description"
  content="The HTML reference describes all elements and attributes of HTML, including global attributes that apply to all elements." />
```

## Wert

### Im HTML-Spezifikationen definierte Metanamen

Die HTML-Spezifikation definiert die folgende Menge an standardisierten Metadatennamen:

- `application-name`
  - : Browser können dies verwenden, um die Anwendung zu identifizieren, die auf der Webseite läuft. Es unterscheidet sich vom {{HTMLElement("title")}}-Element, das möglicherweise einen Anwendungs- (oder Webseiten-)Namen enthält, aber ein `<title>` kann kontextbezogene Informationen wie einen Dokumentnamen oder einen Status hinzufügen. Einzelne Seiten sollten keinen eigenen, einzigartigen `application-name` definieren. Um Übersetzungen bereitzustellen, verwenden Sie mehrere `<meta>`-Tags mit dem `lang`-Attribut für jede Sprache:

    ```html
    <meta name="application-name" content="Weather Wizard" lang="en" />
    <meta name="application-name" content="Mago del Clima" lang="es" />
    ```

- `author`
  - : Der Name des Dokumentautors.
- [`color-scheme`](/de/docs/Web/HTML/Reference/Elements/meta/name/color-scheme)
  - : Gibt ein oder mehrere Farbschemata an, mit denen das Dokument kompatibel ist. Der Browser verwendet diese Informationen zusammen mit den Einstellungen des Benutzers im Browser oder Gerät, um zu bestimmen, welche Farben für alles verwendet werden sollen, von Hintergrund bis zu Formular-Steuerelementen und Scrollleisten. Die hauptsächliche Verwendung für `<meta name="color-scheme">` besteht darin, die Kompatibilität und Reihenfolge der Präferenz für helle und dunkle Farbmodi anzugeben.
- `description`
  - : Eine kurze und präzise Zusammenfassung des Inhalts der Seite, auch bekannt als "Meta-Beschreibung". Suchmaschinen wie Google verwenden diese Metadaten, um [das Erscheinungsbild einer Webseite in den Suchergebnissen](https://developers.google.com/search/docs/appearance/snippet#meta-descriptions) anzupassen.
- `generator`
  - : Die Kennung der Software, die die Seite erzeugt hat.
- `keywords`
  - : Wörter relevant für den Inhalt der Seite, durch Kommata getrennt.
- [`referrer`](/de/docs/Web/HTML/Reference/Elements/meta/name/referrer)
  - : Steuert den HTTP {{httpheader("Referer")}}-Header für Anfragen, die vom Dokument gesendet werden.
- [`theme-color`](/de/docs/Web/HTML/Reference/Elements/meta/name/theme-color)
  - : Gibt eine vorgeschlagene Farbe an, die Benutzeragenten verwenden sollten, um das Erscheinungsbild der Seite oder der umgebenden Benutzeroberfläche anzupassen. Das [`content`](/de/docs/Web/HTML/Reference/Attributes/content)-Attribut enthält ein gültiges CSS {{cssxref("&lt;color&gt;")}}. Das [`media`](/de/docs/Web/HTML/Reference/Elements/meta#media)-Attribut mit einer gültigen Medienabfrageliste kann hinzugefügt werden, um die Medien festzulegen, auf die sich die Farbmetadaten des Themas beziehen.

### In anderen Spezifikationen definierte Metanamen

Die CSS Device Adaptation Spezifikation definiert den folgenden Metadatennamen:

- [`viewport`](/de/docs/Web/HTML/Reference/Elements/meta/name/viewport)
  - : Gibt Hinweise zur Größe des anfänglichen {{Glossary("viewport", "Viewports")}}.

### Im WHATWG MetaExtensions wiki definierte Metanamen

Die [WHATWG Wiki MetaExtensions-Seite](https://wiki.whatwg.org/wiki/MetaExtensions) enthält eine große Sammlung an nicht standardisierten Metadatennamen. Einige der eingeschlossenen Namen sind in der Praxis recht häufig verwendet, insbesondere die folgenden:

- `creator`
  - : Der Name des Erstellers des Dokuments, wie eine Organisation oder Institution. Wenn es mehr als einen gibt, sollten mehrere {{HTMLElement("meta")}}-Elemente verwendet werden.
- `googlebot`
  - : Ein Synonym für `robots`, wird nur von Googlebot (dem Indexierungs-Crawler für Google) befolgt.
- `publisher`
  - : Der Name des Herausgebers des Dokuments.
- [`robots`](/de/docs/Web/HTML/Reference/Elements/meta/name/robots)
  - : Eine durch Kommas getrennte Liste von Werten, die das Crawl-Verhalten definieren, das kooperative Crawler (oder "Roboter") mit der Seite verwenden sollen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Viewport `<meta>`-Tag](/de/docs/Web/HTML/Guides/Viewport_meta_element)
- [Metadaten: das `<meta>`-Element](/de/docs/Learn_web_development/Core/Structuring_content/Webpage_metadata#metadata_the_meta_element)
