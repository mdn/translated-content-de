---
title: Microdata
slug: Web/HTML/Microdata
l10n:
  sourceCommit: d71da812ee94c20658cb1916a123a42254ea545c
---

{{HTMLSidebar}}

Mikrodaten sind Teil des [WHATWG](/de/docs/Glossary/WHATWG) HTML-Standards und werden verwendet, um Metadaten innerhalb vorhandener Inhalte auf Webseiten einzubetten. Suchmaschinen und Webcrawler können Mikrodaten von einer Webseite extrahieren und verarbeiten und sie nutzen, um den Benutzern ein reichhaltigeres Browser-Erlebnis zu bieten. Suchmaschinen profitieren erheblich von direktem Zugriff auf diese strukturierten Daten, da sie es den Suchmaschinen ermöglichen, die Informationen auf Webseiten zu verstehen und relevantere Ergebnisse für Benutzer bereitzustellen. Mikrodaten verwenden ein unterstützendes Vokabular, um ein Objekt zu beschreiben, und Namens-Wert-Paare, um seinen Eigenschaften Werte zuzuweisen. Mikrodaten sind der Versuch, eine einfachere Methode zur Annotation von HTML-Elementen mit maschinenlesbaren Tags bereitzustellen als die ähnlichen Ansätze unter Verwendung von RDFa und klassischen Mikroformaten.

Auf hoher Ebene bestehen Mikrodaten aus einer Gruppe von Namens-Wert-Paaren. Die Gruppen werden als Objekte bezeichnet, und jedes Namens-Wert-Paar ist eine Eigenschaft. Objekte und Eigenschaften werden durch reguläre Elemente dargestellt.

- Um ein Objekt zu erstellen, wird das `itemscope`-Attribut verwendet.
- Um einem Objekt eine Eigenschaft hinzuzufügen, wird das `itemprop`-Attribut bei einem der Nachkommen des Objekts verwendet.

## Vokabulare

Google und andere große Suchmaschinen unterstützen das [Schema.org](https://schema.org/)-Vokabular für strukturierte Daten. Dieses Vokabular definiert einen Standardsatz von Typnamen und Eigenschaftsnamen, zum Beispiel kennzeichnet [Schema.org Music Event](https://schema.org/MusicEvent) eine Konzertaufführung, mit den Eigenschaften [`startDate`](https://schema.org/startDate) und [`location`](https://schema.org/location), um die wichtigsten Details des Konzerts anzugeben. In diesem Fall wäre [Schema.org Music Event](https://schema.org/MusicEvent) die URL, die von `itemtype` verwendet wird, und `startDate` und `location` wären `itemprop`'s, die [Schema.org Music Event](https://schema.org/MusicEvent) definiert.

> [!NOTE]
> Mehr über `itemtype`-Attribute finden Sie unter <https://schema.org/Thing>.

Mikrodaten-Vokabulare bieten die Semantik oder Bedeutung eines _`Items`_. Webentwickler können ein benutzerdefiniertes Vokabular entwerfen oder Vokabulare verwenden, die im Web verfügbar sind, wie das weit verbreitete [schema.org](https://schema.org/)-Vokabular. Eine Sammlung häufig verwendeter Markup-Vokabulare wird von Schema.org bereitgestellt.

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

Große Suchmaschinenbetreiber wie Google, Microsoft und Yahoo! verlassen sich auf das [schema.org](https://schema.org/)-Vokabular, um Suchergebnisse zu verbessern. Für einige Zwecke ist ein ad hoc Vokabular ausreichend. Für andere muss ein Vokabular entworfen werden. Wo möglich, wird den Autoren empfohlen, bestehende Vokabulare wiederzuverwenden, da dies die Wiederverwendung von Inhalten erleichtert.

## Lokalisierung

In einigen Fällen können Suchmaschinen, die bestimmte Regionen abdecken, lokal spezifische Erweiterungen von Mikrodaten bereitstellen. Zum Beispiel unterstützt [Yandex](https://yandex.com/), eine große Suchmaschine in Russland, Mikroformate wie `hCard` (Unternehmenskontaktinformationen), `hRecipe` (Lebensmittelrezept), `hReview` (Marktbewertungen) und `hProduct` (Produktdaten) und stellt sein eigenes Format für die Definition der Begriffe und enzyklopädischen Artikel bereit. Diese Erweiterung wurde gemacht, um Transliterationsprobleme zwischen dem kyrillischen und dem lateinischen Alphabet zu lösen. Aufgrund der Implementierung zusätzlicher Markierungsparameter des Schemen-Vokabulars wurde die Indexierung von Informationen auf russischsprachigen Webseiten erheblich erfolgreicher.

## Globale Attribute

[`itemid`](/de/docs/Web/HTML/Global_attributes/itemid) – Die eindeutige, globale Kennung eines Objekts.

[`itemprop`](/de/docs/Web/HTML/Global_attributes/itemprop) – Wird verwendet, um Eigenschaften zu einem Objekt hinzuzufügen. Jedes HTML-Element kann ein `itemprop`-Attribut spezifiziert haben, wobei ein `itemprop` aus einem Namens- und Wertpaar besteht.

[`itemref`](/de/docs/Web/HTML/Global_attributes/itemref) – Eigenschaften, die keine Nachkommen eines Elements mit dem `itemscope`-Attribut sind, können mit dem Objekt über ein **itemref** verknüpft werden. `itemref` bietet eine Liste von Element-IDs (nicht `itemid`s) mit zusätzlichen Eigenschaften anderswo im Dokument.

[`itemscope`](/de/docs/Web/HTML/Global_attributes/itemscope) – Das `itemscope`-Attribut arbeitet (normalerweise) zusammen mit [`itemtype`](/de/docs/Web/HTML/Global_attributes/itemtype), um anzugeben, dass das in einem Block enthaltene HTML über ein bestimmtes Objekt ist. Das `itemscope`-Attribut erstellt das _`Item`_ und definiert den Geltungsbereich des itemtype, das damit verbunden ist. Das `itemtype`-Attribut ist eine gültige URL eines Vokabulars (wie [schema.org](https://schema.org/)), das das Objekt und seine Eigenschaften-Kontext beschreibt.

[`itemtype`](/de/docs/Web/HTML/Global_attributes/itemtype) – Gibt die URL des Vokabulars an, das verwendet wird, um `itemprop`'s (Objekteigenschaften) in der Datenstruktur zu definieren. Das [`itemscope`](/de/docs/Web/HTML/Global_attributes/itemscope)-Attribut wird verwendet, um den Bereich festzulegen, in dem die durch `itemtype` festgelegte Vokabular in der Datenstruktur aktiv sein wird.

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
> Ein praktisches Werkzeug zur Extraktion von Mikrodaten-Strukturen aus HTML ist das [Structured Data Testing Tool](https://developers.google.com/search/docs/appearance/structured-data/intro-structured-data) von Google. Probieren Sie es an dem oben gezeigten HTML aus.

## Siehe auch

- [Globale Attribute](/de/docs/Web/HTML/Global_attributes)
