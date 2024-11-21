---
title: Microdata
slug: Web/HTML/Microdata
l10n:
  sourceCommit: 4d3605197ea5c6407aacca2a80cc27a398f04fc8
---

{{HTMLSidebar}}

Microdata ist Teil des {{Glossary("WHATWG", "WHATWG")}} HTML-Standards und wird verwendet, um Metadaten in bestehende Inhalte auf Webseiten einzubetten. Suchmaschinen und Webcrawler können Microdata von einer Webseite extrahieren und verarbeiten und nutzen, um den Nutzern ein reichhaltigeres Browsing-Erlebnis zu bieten. Suchmaschinen profitieren enorm von direktem Zugriff auf diese strukturierten Daten, da dies ihnen ermöglicht, die Informationen auf Webseiten zu verstehen und Nutzern relevantere Ergebnisse zu liefern. Microdata verwendet ein unterstützendes Vokabular, um ein Objekt zu beschreiben und Name-Wert-Paare, um seinen Eigenschaften Werte zuzuweisen. Microdata ist ein Versuch, einen deklarativen Weg zur Annotation von HTML-Elementen mit maschinenlesbaren Tags bereitzustellen, als die ähnlichen Ansätze der Verwendung von RDFa und klassischen Mikroformaten.

Auf höherer Ebene besteht Microdata aus einer Gruppe von Name-Wert-Paaren. Die Gruppen werden als Items bezeichnet, und jedes Name-Wert-Paar ist eine Eigenschaft. Items und Eigenschaften werden durch reguläre Elemente dargestellt.

- Um ein Item zu erstellen, wird das `itemscope`-Attribut verwendet.
- Um einem Item eine Eigenschaft hinzuzufügen, wird das `itemprop`-Attribut auf einem der Nachkommen des Items verwendet.

## Vokabulare

Google und andere große Suchmaschinen unterstützen das [Schema.org](https://schema.org/)-Vokabular für strukturierte Daten. Dieses Vokabular definiert einen Standard-Satz von Typnamen und Eigenschaftsnamen, zum Beispiel steht [Schema.org Music Event](https://schema.org/MusicEvent) für eine Konzertaufführung, mit den Eigenschaften [`startDate`](https://schema.org/startDate) und [`location`](https://schema.org/location), um die wesentlichen Details des Konzerts zu spezifizieren. In diesem Fall wäre [Schema.org Music Event](https://schema.org/MusicEvent) die URL, die von `itemtype` verwendet wird, und `startDate` und `location` wären `itemprop`, die [Schema.org Music Event](https://schema.org/MusicEvent) definiert.

> [!NOTE]
> Mehr über `itemtype`-Attribute finden Sie unter <https://schema.org/Thing>.

Microdata-Vokabulare liefern die Semantik oder Bedeutung eines _`Item`_. Webentwickler können ein benutzerdefiniertes Vokabular entwerfen oder im Internet verfügbare Vokabulare verwenden, wie zum Beispiel das weit verbreitete [schema.org](https://schema.org/)-Vokabular. Eine Sammlung häufig genutzter Markup-Vokabulare wird von Schema.org bereitgestellt.

Häufig genutzte Vokabulare:

- Kreative Werke: [CreativeWork](https://schema.org/CreativeWork), [Book](https://schema.org/Book), [Movie](https://schema.org/Movie), [MusicRecording](https://schema.org/MusicRecording), [Recipe](https://schema.org/Recipe), [TVSeries](https://schema.org/TVSeries)
- Eingebettete Nicht-Text-Objekte: [AudioObject](https://schema.org/AudioObject), [ImageObject](https://schema.org/ImageObject), [VideoObject](https://schema.org/VideoObject)
- [`Event`](https://schema.org/Event)
- [Gesundheits- und Medizin-Typen](https://schema.org/docs/meddocs.html): Anmerkungen zu den Gesundheits- und Medizin-Typen unter [MedicalEntity](https://schema.org/MedicalEntity)
- [`Organization`](https://schema.org/Organization)
- [`Person`](https://schema.org/Person)
- [`Place`](https://schema.org/Place), [LocalBusiness](https://schema.org/LocalBusiness), [Restaurant](https://schema.org/Restaurant)
- [`Product`](https://schema.org/Product), [Offer](https://schema.org/Offer), [AggregateOffer](https://schema.org/AggregateOffer)
- [`Review`](https://schema.org/Review), [AggregateRating](https://schema.org/AggregateRating)
- [`Action`](https://schema.org/Action)
- [`Thing`](https://schema.org/Thing)
- [`Intangible`](https://schema.org/Intangible)

Große Suchmaschinenbetreiber wie Google, Microsoft und Yahoo! verlassen sich auf das [schema.org](https://schema.org/)-Vokabular, um Suchergebnisse zu verbessern. Für einige Zwecke kann ein ad hoc Vokabular ausreichend sein. Für andere muss ein Vokabular entworfen werden. Wo möglich, werden Autoren ermutigt, bestehende Vokabulare wiederzuverwenden, da dies die Wiederverwendung von Inhalten erleichtert.

## Lokalisierung

In einigen Fällen können Suchmaschinen, die bestimmte Regionen abdecken, lokal spezifische Erweiterungen von Microdata bereitstellen. Zum Beispiel unterstützt [Yandex](https://yandex.com/), eine große Suchmaschine in Russland, Mikroformate wie `hCard` (Unternehmens-Kontaktinformationen), `hRecipe` (Lebensmittelrezept), `hReview` (Marktbewertungen) und `hProduct` (Produktdaten) und stellt sein eigenes Format für die Definition der Begriffe und Enzyklopädieartikel bereit. Diese Erweiterung wurde vorgenommen, um Transliterationsprobleme zwischen dem kyrillischen und lateinischen Alphabet zu lösen. Durch die Implementierung zusätzlicher Markierungsparameter des Schema-Vokabulars wurde die Indexierung von Informationen auf russischsprachigen Webseiten erheblich erfolgreicher.

## Globale Attribute

[`itemid`](/de/docs/Web/HTML/Global_attributes/itemid) – Die eindeutige, globale Kennung eines Items.

[`itemprop`](/de/docs/Web/HTML/Global_attributes/itemprop) – Wird verwendet, um Eigenschaften zu einem Item hinzuzufügen. Jedes HTML-Element kann ein `itemprop`-Attribut spezifiziert haben, wobei ein `itemprop` aus einem Name-Wert-Paar besteht.

[`itemref`](/de/docs/Web/HTML/Global_attributes/itemref) – Eigenschaften, die keine Nachkommen eines Elements mit dem `itemscope`-Attribut sind, können dem Item mit einem **itemref** zugeordnet werden. `itemref` liefert eine Liste von Element-IDs (nicht `itemid`s) mit zusätzlichen Eigenschaften an anderer Stelle im Dokument.

[`itemscope`](/de/docs/Web/HTML/Global_attributes/itemscope) – Das `itemscope`-Attribut funktioniert (normalerweise) zusammen mit [`itemtype`](/de/docs/Web/HTML/Global_attributes/itemtype), um anzugeben, dass das HTML, das in einem Block enthalten ist, sich auf ein bestimmtes Item bezieht. Das `itemscope`-Attribut erstellt das _`Item`_ und definiert den Umfang des `itemtype`, das mit ihm assoziiert ist. Das `itemtype`-Attribut ist eine gültige URL eines Vokabulars (wie [schema.org](https://schema.org/)), das das Item und seinen Eigenschaftskontext beschreibt.

[`itemtype`](/de/docs/Web/HTML/Global_attributes/itemtype) – Gibt die URL des Wortschatzes an, der verwendet wird, um `itemprop`'s (Item-Eigenschaften) in der Datenstruktur zu definieren. Das [`itemscope`](/de/docs/Web/HTML/Global_attributes/itemscope)-Attribut wird verwendet, um den Umfang festzulegen, innerhalb dessen in der Datenstruktur das von `itemtype` festgelegte Vokabular aktiv sein wird.

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
> Ein praktisches Werkzeug zum Extrahieren von Microdata-Strukturen aus HTML ist das [Structured Data Testing Tool](https://developers.google.com/search/docs/appearance/structured-data/intro-structured-data) von Google. Versuchen Sie es mit dem oben gezeigten HTML.

## Siehe auch

- [Globale Attribute](/de/docs/Web/HTML/Global_attributes)
