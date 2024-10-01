---
title: Microdata
slug: Web/HTML/Microdata
l10n:
  sourceCommit: d71da812ee94c20658cb1916a123a42254ea545c
---

{{HTMLSidebar}}

Microdata ist Teil des {{Glossary("WHATWG", "WHATWG")}} HTML-Standards und wird verwendet, um Metadaten innerhalb des vorhandenen Inhalts auf Webseiten einzubetten. Suchmaschinen und Webcrawler können Microdata von einer Webseite extrahieren und verarbeiten und diese nutzen, um den Benutzern ein reichhaltigeres Surferlebnis zu bieten. Suchmaschinen profitieren erheblich von direktem Zugriff auf diese strukturierten Daten, da sie dadurch die Informationen auf Webseiten besser verstehen und relevantere Ergebnisse für Benutzer bereitstellen können. Microdata verwendet ein unterstützendes Vokabular zur Beschreibung eines Elements und Paaren von Bezeichnungen und Werten, um seinen Eigenschaften Werte zuzuweisen. Microdata ist ein Versuch, eine einfachere Möglichkeit zur Kennzeichnung von HTML-Elementen mit maschinenlesbaren Tags bereitzustellen als die ähnlichen Ansätze der Verwendung von RDFa und klassischen Mikroformaten.

Auf hoher Ebene besteht Microdata aus einer Gruppe von Bezeichnungs-Wert-Paaren. Die Gruppen werden als Elemente bezeichnet, und jedes Bezeichnungs-Wert-Paar ist eine Eigenschaft. Elemente und Eigenschaften werden durch reguläre Elemente dargestellt.

- Um ein Element zu erstellen, wird das `itemscope`-Attribut verwendet.
- Um einer Eigenschaft ein Element hinzuzufügen, wird das `itemprop`-Attribut auf einem der Nachkommen des Elements verwendet.

## Vokabulare

Google und andere große Suchmaschinen unterstützen das [Schema.org](https://schema.org/)-Vokabular für strukturierte Daten. Dieses Vokabular definiert eine Standardmenge von Typnamen und Eigenschaftsnamen, zum Beispiel gibt [Schema.org Music Event](https://schema.org/MusicEvent) eine Konzertaufführung an, mit [`startDate`](https://schema.org/startDate)- und [`location`](https://schema.org/location)-Eigenschaften, um die wichtigsten Details des Konzerts anzugeben. In diesem Fall wäre [Schema.org Music Event](https://schema.org/MusicEvent) die URL, die von `itemtype` verwendet wird, und `startDate` sowie `location` wären `itemprop`s, die [Schema.org Music Event](https://schema.org/MusicEvent) definiert.

> [!NOTE]
> Mehr über `itemtype`-Attribute finden Sie unter <https://schema.org/Thing>.

Microdata-Vokabulare bieten die Semantik oder Bedeutung eines _`Item`_. Webentwickler können ein benutzerdefiniertes Vokabular entwerfen oder Vokabulare verwenden, die im Web verfügbar sind, wie das weit verbreitete [schema.org](https://schema.org/)-Vokabular. Eine Sammlung häufig verwendeter Markup-Vokabulare wird von Schema.org bereitgestellt.

Häufig verwendete Vokabulare:

- Kreative Werke: [CreativeWork](https://schema.org/CreativeWork), [Book](https://schema.org/Book), [Movie](https://schema.org/Movie), [MusicRecording](https://schema.org/MusicRecording), [Recipe](https://schema.org/Recipe), [TVSeries](https://schema.org/TVSeries)
- Eingebettete Nicht-Text-Objekte: [AudioObject](https://schema.org/AudioObject), [ImageObject](https://schema.org/ImageObject), [VideoObject](https://schema.org/VideoObject)
- [`Event`](https://schema.org/Event)
- [Gesundheits- und Medizintypen](https://schema.org/docs/meddocs.html): Hinweise zu den Gesundheits- und Medizintypen unter [MedicalEntity](https://schema.org/MedicalEntity)
- [`Organization`](https://schema.org/Organization)
- [`Person`](https://schema.org/Person)
- [`Place`](https://schema.org/Place), [LocalBusiness](https://schema.org/LocalBusiness), [Restaurant](https://schema.org/Restaurant)
- [`Product`](https://schema.org/Product), [Offer](https://schema.org/Offer), [AggregateOffer](https://schema.org/AggregateOffer)
- [`Review`](https://schema.org/Review), [AggregateRating](https://schema.org/AggregateRating)
- [`Action`](https://schema.org/Action)
- [`Thing`](https://schema.org/Thing)
- [`Intangible`](https://schema.org/Intangible)

Große Suchmaschinen-Betreiber wie Google, Microsoft und Yahoo! vertrauen auf das [schema.org](https://schema.org/)-Vokabular, um Suchergebnisse zu verbessern. Für einige Zwecke reicht ein ad-hoc-Vokabular aus. Für andere muss ein Vokabular entworfen werden. Wo möglich, werden Autoren ermutigt, bestehende Vokabulare wiederzuverwenden, da dies die Wiederverwendung von Inhalten erleichtert.

## Lokalisierung

In einigen Fällen können Suchmaschinen, die bestimmte Regionen abdecken, lokal spezifische Erweiterungen von Microdata bereitstellen. Zum Beispiel unterstützt [Yandex](https://yandex.com/), eine große Suchmaschine in Russland, Mikroformate wie `hCard` (Unternehmens-Kontaktdaten), `hRecipe` (Lebensmittelrezept), `hReview` (Marktbewertungen) und `hProduct` (Produktdaten) und bietet ein eigenes Format für die Definition von Begriffen und enzyklopädischen Artikeln. Diese Erweiterung wurde eingeführt, um Transliteration-Probleme zwischen den kyrillischen und lateinischen Alphabeten zu lösen. Durch die Umsetzung zusätzlicher Markierungsparameter des Schema-Vokabulars wurde die Indexierung von Informationen auf russischsprachigen Webseiten erheblich verbessert.

## Globale Attribute

[`itemid`](/de/docs/Web/HTML/Global_attributes/itemid) – Der eindeutige, globale Bezeichner eines Elements.

[`itemprop`](/de/docs/Web/HTML/Global_attributes/itemprop) – Wird verwendet, um Eigenschaften zu einem Element hinzuzufügen. Jedes HTML-Element kann ein `itemprop`-Attribut haben, bei dem ein `itemprop` aus einem Bezeichnungs-Wert-Paar besteht.

[`itemref`](/de/docs/Web/HTML/Global_attributes/itemref) – Eigenschaften, die keine Nachkommen eines Elements mit dem `itemscope`-Attribut sind, können dem Element mithilfe eines **itemref** zugeordnet werden. `itemref` gibt eine Liste von Element-IDs (nicht `itemid`s) mit zusätzlichen Eigenschaften an anderer Stelle im Dokument an.

[`itemscope`](/de/docs/Web/HTML/Global_attributes/itemscope) – Das `itemscope`-Attribut funktioniert (normalerweise) zusammen mit [`itemtype`](/de/docs/Web/HTML/Global_attributes/itemtype), um anzugeben, dass das in einem Block enthaltene HTML sich auf ein bestimmtes Element bezieht. Das `itemscope`-Attribut erstellt das _`Item`_ und definiert den Gültigkeitsbereich des `itemtype`, der damit verbunden ist. Das `itemtype`-Attribut ist eine gültige URL eines Vokabulars (wie [schema.org](https://schema.org/)), das das Element und seinen Eigenschaftskontext beschreibt.

[`itemtype`](/de/docs/Web/HTML/Global_attributes/itemtype) – Gibt die URL des Vokabulars an, das zum Definieren von `itemprop`'s (Elementeigenschaften) in der Datenstruktur verwendet wird. Das [`itemscope`](/de/docs/Web/HTML/Global_attributes/itemscope)-Attribut wird verwendet, um den Bereich festzulegen, in dem innerhalb der Datenstruktur das vom `itemtype` festgelegte Vokabular aktiv sein wird.

## Beispiel

### HTML

```html
<div itemscope itemtype="https://schema.org/SoftwareApplication">
  <span itemprop="name">Angry Birds</span> - REQUIRES
  <span itemprop="operatingSystem">ANDROID</span><br />
  <link
    itemprop="applicationCategory"
    href="https://schema.org/SoftwareApplication" />

  <div
    itemprop="aggregateRating"
    itemscope
    itemtype="https://schema.org/AggregateRating">
    RATING:
    <span itemprop="ratingValue">4.6</span> (
    <span itemprop="ratingCount">8864</span> ratings )
  </div>

  <div itemprop="offers" itemscope itemtype="https://schema.org/Offer">
    Price: $<span itemprop="price">1.00</span>
    <meta itemprop="priceCurrency" content="USD" />
  </div>
</div>
```

### Strukturierte Daten

<table class="standard-table">
  <tbody>
    <tr>
      <td rowspan="4">itemscope</td>
      <td>itemtype</td>
      <td colspan="2">
        SoftwareApplication (https://schema.org/SoftwareApplication)
      </td>
    </tr>
    <tr>
      <td>itemprop</td>
      <td>name</td>
      <td>Angry Birds</td>
    </tr>
    <tr>
      <td>itemprop</td>
      <td>operatingSystem</td>
      <td>ANDROID</td>
    </tr>
    <tr>
      <td>itemprop</td>
      <td>applicationCategory</td>
      <td>SoftwareApplication (https://schema.org/SoftwareApplication)</td>
    </tr>
    <tr>
      <td rowspan="3">itemscope</td>
      <td>itemprop[itemtype]</td>
      <td colspan="2">aggregateRating [AggregateRating]</td>
    </tr>
    <tr>
      <td>itemprop</td>
      <td>ratingValue</td>
      <td>4.6</td>
    </tr>
    <tr>
      <td>itemprop</td>
      <td>ratingCount</td>
      <td>8864</td>
    </tr>
    <tr>
      <td rowspan="3">itemscope</td>
      <td>itemprop[itemtype]</td>
      <td colspan="2">offers [Offer]</td>
    </tr>
    <tr>
      <td>itemprop</td>
      <td>price</td>
      <td>1.00</td>
    </tr>
    <tr>
      <td>itemprop</td>
      <td>priceCurrency</td>
      <td>USD</td>
    </tr>
  </tbody>
</table>

### Ergebnis

{{ EmbedLiveSample('HTML', '', '100') }}

> [!NOTE]
> Ein praktisches Werkzeug zum Extrahieren von Microdata-Strukturen aus HTML ist Googles [Structured Data Testing Tool](https://developers.google.com/search/docs/appearance/structured-data/intro-structured-data). Probieren Sie es mit dem oben gezeigten HTML aus.

## Siehe auch

- [Globale Attribute](/de/docs/Web/HTML/Global_attributes)
