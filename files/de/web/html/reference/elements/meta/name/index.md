---
title: <meta> name-Attribut
short-title: <meta> name
slug: Web/HTML/Reference/Elements/meta/name
l10n:
  sourceCommit: 0754cd805a8e010d2e3a2a065f634a3bcf358252
---

Das **`name`**-Attribut des {{htmlelement("meta")}}-Elements liefert Metadaten in Form von Name-Wert-Paaren. Wenn ein `<meta>`-Element ein `name`-Attribut besitzt, definiert ein [`content`](/de/docs/Web/HTML/Reference/Attributes/content)-Attribut den entsprechenden Wert. Die Metadaten sind _dokumentenbezogene Metadaten_, die für die gesamte Seite gelten.

Zum Beispiel bietet das folgende `<meta>`-Tag eine `description` als Metadaten für ein Dokument:

```html
<meta
  name="description"
  content="The HTML reference describes all elements and attributes of HTML, including global attributes that apply to all elements." />
```

## Wert

### Im HTML-Standard definierte Meta-Namen

Der HTML-Standard definiert die folgende Menge standardisierter Metadatennamen:

- `application-name`
  - : Browser können dies verwenden, um die Anwendung zu identifizieren, die auf der Webseite läuft. Es unterscheidet sich von dem {{HTMLElement("title")}}-Element, das möglicherweise einen Anwendungs- (oder Webseitennamen) enthält, wobei ein `<title>` auch kontextbezogene Informationen wie einen Dokumentnamen oder einen Status hinzufügen kann. Einzelne Seiten sollten nicht ihre eigenen, einzigartigen `application-name`s definieren. Um Übersetzungen bereitzustellen, verwenden Sie mehrere `<meta>`-Tags mit dem `lang`-Attribut für jede Sprache:

    ```html
    <meta name="application-name" content="Weather Wizard" lang="en" />
    <meta name="application-name" content="Mago del Clima" lang="es" />
    ```

- `author`
  - : Der Name des Dokumentautors.
- [`color-scheme`](/de/docs/Web/HTML/Reference/Elements/meta/name/color-scheme)
  - : Gibt ein oder mehrere Farbschemata an, mit denen das Dokument kompatibel ist. Der Browser wird diese Informationen in Verbindung mit den Einstellungen des Browsers oder des Geräts des Benutzers verwenden, um zu bestimmen, welche Farben für alles verwendet werden, von Hintergrund und Vordergrund bis hin zu Formularsteuerungen und Scrollbars. Der Hauptzweck von `<meta name="color-scheme">` besteht darin, die Kompatibilität und Präferenzreihenfolge für helle und dunkle Farbmodi anzuzeigen.
- `description`
  - : Eine kurze und präzise Zusammenfassung des Inhalts der Seite, die normalerweise als "Meta-Beschreibung" bezeichnet wird. Suchmaschinen wie Google verwenden diese Metadaten, um [das Erscheinungsbild einer Webseite in den Suchergebnissen](https://developers.google.com/search/docs/appearance/snippet#meta-descriptions) anzupassen.
- `generator`
  - : Der Bezeichner der Software, die die Seite erzeugt hat.
- `keywords`
  - : Wörter, die für den Seiteninhalt relevant sind, durch Kommas getrennt.
- [`referrer`](/de/docs/Web/HTML/Reference/Elements/meta/name/referrer)
  - : Steuert den HTTP-{{httpheader("Referer")}}-Header von Anfragen, die vom Dokument gesendet werden.
- [`theme-color`](/de/docs/Web/HTML/Reference/Elements/meta/name/theme-color)
  - : Gibt eine vorgeschlagene Farbe an, die Benutzeragenten verwenden sollten, um das Erscheinungsbild der Seite oder der umgebenden Benutzeroberfläche anzupassen. Das [`content`](/de/docs/Web/HTML/Reference/Attributes/content)-Attribut enthält ein gültiges CSS {{cssxref("&lt;color&gt;")}}. Das [`media`](/de/docs/Web/HTML/Reference/Elements/meta#media)-Attribut mit einer gültigen Medienabfrageliste kann einbezogen werden, um das Medium festzulegen, auf das sich die Farbschemametadaten beziehen.

### In anderen Spezifikationen definierte Meta-Namen

Die CSS Device Adaptation-Spezifikation definiert den folgenden Metadatennamen:

- [`viewport`](/de/docs/Web/HTML/Reference/Elements/meta/name/viewport)
  - : Gibt Hinweise zur Größe der anfänglichen Größe des {{Glossary("viewport", "Viewports")}}.

### In der WHATWG MetaExtensions-Wiki definierten Meta-Namen

Die [WHATWG Wiki MetaExtensions-Seite](https://wiki.whatwg.org/wiki/MetaExtensions) enthält eine große Menge an nicht-standardisierten Metadatennamen. Einige der enthaltenen Namen sind in der Praxis ziemlich verbreitet, insbesondere die folgenden:

- `creator`
  - : Der Name des Erstellers des Dokuments, wie eine Organisation oder Institution. Wenn es mehr als einen gibt, sollten mehrere {{HTMLElement("meta")}}-Elemente verwendet werden.
- `googlebot`
  - : Ein Synonym für `robots`, das nur von Googlebot (dem Indexierungs-Crawler für Google) befolgt wird.
- `publisher`
  - : Der Name des Dokumentenverlegers.
- [`robots`](/de/docs/Web/HTML/Reference/Elements/meta/name/robots)
  - : Eine durch Kommas getrennte Liste von Werten, die das Crawl-Verhalten definieren, das kooperative Crawler (oder "Roboter") mit der Seite verwenden sollten.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Viewport `<meta>`-Tag](/de/docs/Web/HTML/Guides/Viewport_meta_element)
- [Metadaten: das `<meta>`-Element](/de/docs/Learn_web_development/Core/Structuring_content/Webpage_metadata#metadata_the_meta_element)
