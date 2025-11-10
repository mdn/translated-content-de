---
title: <meta> name-Attribut
short-title: <meta> name
slug: Web/HTML/Reference/Elements/meta/name
l10n:
  sourceCommit: c7a8b2584452bcd5d2c135b637f4ec659ff74b99
---

Das **`name`**-Attribut des {{htmlelement("meta")}}-Elements stellt Metadaten in Name-Wert-Paaren bereit. Wenn ein `<meta>`-Element ein `name`-Attribut hat, definiert ein [`content`](/de/docs/Web/HTML/Reference/Attributes/content)-Attribut den entsprechenden Wert. Die Metadaten sind _dokumentenbezogene Metadaten_, die für die gesamte Seite gelten.

Zum Beispiel liefert das folgende `<meta>`-Tag eine `description` als Metadaten für ein Dokument:

```html
<meta
  name="description"
  content="The HTML reference describes all elements and attributes of HTML, including global attributes that apply to all elements." />
```

## Wert

### Meta-Namen, die in der HTML-Spezifikation definiert sind

Die HTML-Spezifikation definiert folgende Menge von Standard-Metadaten-Namen:

- `application-name`
  - : Browser können dies verwenden, um die Anwendung zu identifizieren, die auf der Webseite läuft.
    Es unterscheidet sich vom {{HTMLElement("title")}}-Element, das einen Anwendungs- (oder Website-)Namen enthalten kann, jedoch kann ein `<title>` kontextbezogene Informationen wie einen Dokumentnamen oder einen Status hinzufügen.
    Einzelne Seiten sollten ihren eigenen, eindeutigen `application-name` nicht definieren.
    Um Übersetzungen bereitzustellen, verwenden Sie mehrere `<meta>`-Tags mit dem `lang`-Attribut für jede Sprache:

    ```html
    <meta name="application-name" content="Weather Wizard" lang="en" />
    <meta name="application-name" content="Mago del Clima" lang="es" />
    ```

- `author`
  - : Der Name des Dokumentautors.
- [`color-scheme`](/de/docs/Web/HTML/Reference/Elements/meta/name/color-scheme)
  - : Gibt eine oder mehrere Farbschemata an, mit denen das Dokument kompatibel ist.
    Der Browser wird diese Informationen zusammen mit den Browsereinstellungen oder Geräteeinstellungen des Benutzers verwenden, um zu bestimmen, welche Farben für alles von Hintergründen und Vordergründen bis hin zu Formularelementen und Scrollleisten verwendet werden.
    Der primäre Zweck von `<meta name="color-scheme">` besteht darin, die Kompatibilität und Reihenfolge der Präferenz für helle und dunkle Farbmodi anzugeben.
- `description`
  - : Eine kurze und genaue Zusammenfassung des Inhalts der Seite, die normalerweise als "Meta-Beschreibung" bezeichnet wird.
    Suchmaschinen wie Google verwenden diese Metadaten, um [das Erscheinungsbild einer Webseite in den Suchergebnissen](https://developers.google.com/search/docs/appearance/snippet#meta-descriptions) anzupassen.
- `generator`
  - : Der Bezeichner der Software, die die Seite generiert hat.
- `keywords`
  - : Wörter, die mit dem Inhalt der Seite relevant sind und durch Kommas getrennt sind.
- [`referrer`](/de/docs/Web/HTML/Reference/Elements/meta/name/referrer)
  - : Steuert den HTTP {{httpheader("Referer")}}-Header von Anfragen, die aus dem Dokument gesendet werden.
- [`theme-color`](/de/docs/Web/HTML/Reference/Elements/meta/name/theme-color)
  - : Gibt eine vorgeschlagene Farbe an, die von Benutzeragenten verwendet werden sollte, um das Erscheinungsbild der Seite oder der umgebenden Benutzeroberfläche anzupassen.
    Das [`content`](/de/docs/Web/HTML/Reference/Attributes/content)-Attribut enthält ein gültiges CSS {{cssxref("&lt;color&gt;")}}.
    Das [`media`](/de/docs/Web/HTML/Reference/Elements/meta#media)-Attribut mit einer gültigen Media-Query-Liste kann hinzugefügt werden, um die Medien festzulegen, auf die sich die Themenfarbmetadaten beziehen.

### Meta-Namen, die in anderen Spezifikationen definiert sind

Die CSS Device Adaptation-Spezifikation definiert den folgenden Metadaten-Namen:

- [`viewport`](/de/docs/Web/HTML/Reference/Elements/meta/name/viewport)
  - : Gibt Hinweise auf die Größe der initialen {{Glossary("viewport", "Viewport")}}.

### Meta-Namen, die im WHATWG MetaExtensions-Wiki definiert sind

Die Seite [WHATWG Wiki MetaExtensions](https://wiki.whatwg.org/wiki/MetaExtensions) enthält eine große Menge von nicht standardisierten Metadaten-Namen. Einige der enthaltenen Namen werden in der Praxis recht häufig verwendet, insbesondere die folgenden:

- `creator`
  - : Der Name des Erstellers des Dokuments, wie eine Organisation oder Institution.
    Wenn es mehr als einen gibt, sollten mehrere {{HTMLElement("meta")}}-Elemente verwendet werden.
- `googlebot`
  - : Ein Synonym für `robots`, das nur von Googlebot (dem Indexierungs-Crawler für Google) befolgt wird.
- `publisher`
  - : Der Name des Herausgebers des Dokuments.
- [`robots`](/de/docs/Web/HTML/Reference/Elements/meta/name/robots)
  - : Eine durch Kommas getrennte Liste von Werten, die das Crawling-Verhalten definieren, das kooperative Crawler (oder "Roboter") für die Seite verwenden sollten.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Metadaten: das `<meta>`-Element](/de/docs/Learn_web_development/Core/Structuring_content/Webpage_metadata#metadata_the_meta_element)
