---
title: Microdaten
slug: Web/HTML/Microdata
l10n:
  sourceCommit: d71da812ee94c20658cb1916a123a42254ea545c
---

{{HTMLSidebar}}

Microdaten sind Teil des {{glossary("WHATWG")}} HTML-Standards und werden verwendet, um Metadaten innerhalb bestehender Inhalte auf Webseiten einzubetten. Suchmaschinen und Webcrawler können die Microdaten einer Webseite extrahieren und verarbeiten, um den Nutzern ein reichhaltigeres Surferlebnis zu bieten. Suchmaschinen profitieren enorm von dem direkten Zugriff auf diese strukturierten Daten, da sie dadurch die Informationen auf Webseiten verstehen und relevantere Ergebnisse für Nutzer bereitstellen können. Microdaten verwenden ein unterstützendes Vokabular, um ein Item zu beschreiben, und Name-Wert-Paare, um Werte seinen Eigenschaften zuzuweisen. Microdaten sind ein Versuch, einen einfacheren Weg zu bieten, HTML-Elemente mit maschinenlesbaren Tags zu annotieren, als es die ähnlichen Ansätze von RDFa und klassischen Mikroformaten tun.

Auf einer hohen Ebene bestehen Microdaten aus einer Gruppe von Name-Wert-Paaren. Die Gruppen werden Items genannt und jedes Name-Wert-Paar ist eine Eigenschaft. Items und Eigenschaften werden durch reguläre Elemente dargestellt.

- Um ein Item zu erstellen, wird das `itemscope`-Attribut verwendet.
- Um einem Item eine Eigenschaft hinzuzufügen, wird das `itemprop`-Attribut auf einem der Nachkommen des Items verwendet.

## Vokabulare

Google und andere große Suchmaschinen unterstützen das [Schema.org](https://schema.org/)-Vokabular für strukturierte Daten. Dieses Vokabular definiert einen Standardsatz von Typnamen und Eigenschaftsnamen, zum Beispiel gibt das [Schema.org Music Event](https://schema.org/MusicEvent) eine Konzertperformance an, mit [`startDate`](https://schema.org/startDate)- und [`location`](https://schema.org/location)-Eigenschaften, um die wichtigsten Details des Konzerts anzugeben. In diesem Fall würde [Schema.org Music Event](https://schema.org/MusicEvent) die URL sein, die durch `itemtype` verwendet wird, und `startDate` und location wären `itemprop`s, die [Schema.org Music Event](https://schema.org/MusicEvent) definiert.

> [!NOTE]
> Mehr über itemtype-Attribute finden Sie unter <https://schema.org/Thing>.

Microdaten-Vokabulare bieten die Semantik oder Bedeutung eines _`Items`_. Webentwickler können ein benutzerdefiniertes Vokabular entwerfen oder Vokabulare verwenden, die im Web verfügbar sind, wie das weit verbreitete [schema.org](https://schema.org/)-Vokabular. Eine Sammlung häufig verwendeter Markup-Vokabulare wird von Schema.org bereitgestellt.

Häufig verwendete Vokabulare:

- Kreative Werke: [CreativeWork](https://schema.org/CreativeWork), [Book](https://schema.org/Book), [Movie](https://schema.org/Movie), [MusicRecording](https://schema.org/MusicRecording), [Recipe](https://schema.org/Recipe), [TVSeries](https://schema.org/TVSeries)
- Eingebettete nicht-textliche Objekte: [AudioObject](https://schema.org/AudioObject), [ImageObject](https://schema.org/ImageObject), [VideoObject](https://schema.org/VideoObject)
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

Große Betreiber von Suchmaschinen wie Google, Microsoft und Yahoo! verlassen sich auf das [schema.org](https://schema.org/)-Vokabular, um die Suchergebnisse zu verbessern. Für manche Zwecke reicht ein speziell erstelltes Vokabular aus. Für andere muss ein Vokabular entworfen werden. Wo möglich, werden Autoren ermutigt, bereits bestehende Vokabulare wiederzuverwenden, da dies die Wiederverwendung von Inhalten erleichtert.

## Lokalisierung

In einigen Fällen bieten Suchmaschinen, die spezifische Regionen abdecken, lokal spezifische Erweiterungen von Microdaten an. Zum Beispiel unterstützt [Yandex](https://yandex.com/), eine große Suchmaschine in Russland, Mikroformate wie `hCard` (Unternehmens-Kontaktinformationen), `hRecipe` (Lebensmittel-Rezept), `hReview` (Marktrezensionen) und `hProduct` (Produktdaten) und bietet sein eigenes Format für die Definition der Begriffe und Enzyklopädieartikel an. Diese Erweiterung wurde vorgenommen, um Probleme bei der Transliteration zwischen dem kyrillischen und dem lateinischen Alphabet zu lösen. Durch die Implementierung zusätzlicher Markierungsparameter des Schema-Vokabulars wurde die Indizierung von Informationen auf russischen Webseiten erheblich erfolgreicher.

## Globale Attribute

[`itemid`](/de/docs/Web/HTML/Global_attributes/itemid) – Der eindeutige, globale Bezeichner eines Items.

[`itemprop`](/de/docs/Web/HTML/Global_attributes/itemprop) – Wird verwendet, um einem Item Eigenschaften hinzuzufügen. Jedes HTML-Element kann ein `itemprop`-Attribut spezifiziert haben, wobei ein `itemprop` aus einem Name-Wert-Paar besteht.

[`itemref`](/de/docs/Web/HTML/Global_attributes/itemref) – Eigenschaften, die keine Nachkommen eines Elements mit dem Attribut `itemscope` sind, können dem Item mit einem **itemref** zugeordnet werden. `itemref` bietet eine Liste von Element-IDs (nicht `itemid`s) mit zusätzlichen Eigenschaften an anderer Stelle im Dokument.

[`itemscope`](/de/docs/Web/HTML/Global_attributes/itemscope) – Das `itemscope`-Attribut arbeitet (in der Regel) zusammen mit [`itemtype`](/de/docs/Web/HTML/Global_attributes/itemtype), um anzugeben, dass der HTML-Code in einem Block über ein bestimmtes Item handelt. Das `itemscope`-Attribut erstellt das _`Item`_ und definiert den Gültigkeitsbereich des damit verbundenen itemtypes. Das `itemtype`-Attribut ist eine gültige URL eines Vokabulars (wie [schema.org](https://schema.org/)), das das Item und den Kontext seiner Eigenschaften beschreibt.

[`itemtype`](/de/docs/Web/HTML/Global_attributes/itemtype) – Gibt die URL des Vokabulars an, das verwendet wird, um `itemprop`s (Item-Eigenschaften) in der Datenstruktur zu definieren. Das [`itemscope`](/de/docs/Web/HTML/Global_attributes/itemscope)-Attribut wird verwendet, um den Gültigkeitsbereich festzulegen, in dem die von `itemtype` festgelegte Vokabularstruktur aktiv sein wird.

## Beispiel

### HTML

```html
<div itemscope itemtype="https://schema.org/SoftwareApplication">
  <span itemprop="name">Angry Birds</span> - ERFORDERT
  <span itemprop="operatingSystem">ANDROID</span><br />
  <link
    itemprop="applicationCategory"
    href="https://schema.org/SoftwareApplication" />

  <div
    itemprop="aggregateRating"
    itemscope
    itemtype="https://schema.org/AggregateRating">
    BEWERTUNG:
    <span itemprop="ratingValue">4.6</span> (
    <span itemprop="ratingCount">8864</span> Bewertungen )
  </div>

  <div itemprop="offers" itemscope itemtype="https://schema.org/Offer">
    Preis: $<span itemprop="price">1.00</span>
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
> Ein nützliches Werkzeug zum Extrahieren von Microdatenstrukturen aus HTML ist das [Structured Data Testing Tool](https://developers.google.com/search/docs/appearance/structured-data/intro-structured-data) von Google. Probieren Sie es an dem oben gezeigten HTML aus.

## Siehe auch

- [Globale Attribute](/de/docs/Web/HTML/Global_attributes)
