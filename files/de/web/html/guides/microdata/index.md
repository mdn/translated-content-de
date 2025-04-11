---
title: Verwendung von Microdata in HTML
short-title: Microdata
slug: Web/HTML/Guides/Microdata
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{HTMLSidebar}}

Microdata ist Teil des {{Glossary("WHATWG", "WHATWG")}} HTML-Standards und wird verwendet, um Metadaten in vorhandenen Inhalten auf Webseiten einzubetten. Suchmaschinen und Webcrawler können Microdata aus einer Webseite extrahieren und verarbeiten, um den Nutzern eine reichhaltigere Browser-Erfahrung zu bieten. Suchmaschinen profitieren sehr von dem direkten Zugriff auf diese strukturierten Daten, da sie es den Suchmaschinen ermöglichen, die Informationen auf Webseiten zu verstehen und relevantere Ergebnisse für die Benutzer bereitzustellen. Microdata verwendet ein unterstützendes Vokabular, um ein Element zu beschreiben, und Wert-Paare, um seinen Eigenschaften Werte zuzuordnen. Microdata ist ein Versuch, eine deklarative Methode zur Annotation von HTML-Elementen mit maschinenlesbaren Tags bereitzustellen, die über die ähnlichen Ansätze von RDFa und klassischen Mikroformaten hinausgeht.

Auf einer hohen Ebene besteht Microdata aus einer Gruppe von Namen-Wert-Paaren. Die Gruppen werden `Items` genannt, und jedes Namen-Wert-Paar ist eine Eigenschaft. `Items` und Eigenschaften werden durch reguläre Elemente repräsentiert.

- Um ein `Item` zu erstellen, wird das Attribut `itemscope` verwendet.
- Um einem `Item` eine Eigenschaft hinzuzufügen, wird das Attribut `itemprop` auf einem der Nachfahren des `Items` verwendet.

## Vokabulare

Google und andere große Suchmaschinen unterstützen das [Schema.org](https://schema.org/) Vokabular für strukturierte Daten. Dieses Vokabular definiert eine Standardmenge von Typnamen und Eigenschaftsnamen, beispielsweise kennzeichnet [Schema.org Music Event](https://schema.org/MusicEvent) eine Konzertaufführung, mit [`startDate`](https://schema.org/startDate) und [`location`](https://schema.org/location) Eigenschaften, um die wichtigsten Details des Konzerts anzugeben. In diesem Fall wäre [Schema.org Music Event](https://schema.org/MusicEvent) die URL, die von `itemtype` verwendet wird, und `startDate` und `location` wären `itemprop`s, die [Schema.org Music Event](https://schema.org/MusicEvent) definiert.

> [!NOTE]
> Mehr über `itemtype`-Attribute finden Sie unter <https://schema.org/Thing>.

Microdata-Vokabulare liefern die Semantik oder Bedeutung eines _`Item`_. Webentwickler können ein benutzerdefiniertes Vokabular entwerfen oder Vokabulare verwenden, die im Web verfügbar sind, wie das weit verbreitete [Schema.org](https://schema.org/) Vokabular. Eine Sammlung von häufig verwendeten Markup-Vokabularen wird von Schema.org bereitgestellt.

Häufig verwendete Vokabulare:

- Kreative Werke: [CreativeWork](https://schema.org/CreativeWork), [Book](https://schema.org/Book), [Movie](https://schema.org/Movie), [MusicRecording](https://schema.org/MusicRecording), [Recipe](https://schema.org/Recipe), [TVSeries](https://schema.org/TVSeries)
- Eingebettete Nicht-Text-Objekte: [AudioObject](https://schema.org/AudioObject), [ImageObject](https://schema.org/ImageObject), [VideoObject](https://schema.org/VideoObject)
- [`Event`](https://schema.org/Event)
- [Gesundheits- und Medizintypen](https://schema.org/docs/meddocs.html): Hinweise auf die Gesundheits- und Medizintypen unter [MedicalEntity](https://schema.org/MedicalEntity)
- [`Organization`](https://schema.org/Organization)
- [`Person`](https://schema.org/Person)
- [`Place`](https://schema.org/Place), [LocalBusiness](https://schema.org/LocalBusiness), [Restaurant](https://schema.org/Restaurant)
- [`Product`](https://schema.org/Product), [Offer](https://schema.org/Offer), [AggregateOffer](https://schema.org/AggregateOffer)
- [`Review`](https://schema.org/Review), [AggregateRating](https://schema.org/AggregateRating)
- [`Action`](https://schema.org/Action)
- [`Thing`](https://schema.org/Thing)
- [`Intangible`](https://schema.org/Intangible)

Große Suchmaschinenbetreiber wie Google, Microsoft und Yahoo! verlassen sich auf das [Schema.org](https://schema.org/) Vokabular, um Suchergebnisse zu verbessern. Für einige Zwecke ist ein ad hoc Vokabular ausreichend. Für andere muss ein Vokabular entworfen werden. Wo möglich, werden Autoren ermutigt, bestehende Vokabulare wiederzuverwenden, da dies die Wiederverwendung von Inhalten erleichtert.

## Lokalisierung

In einigen Fällen können Suchmaschinen, die bestimmte Regionen abdecken, lokal spezifische Erweiterungen von Microdata bereitstellen. Zum Beispiel unterstützt [Yandex](https://yandex.com/), eine große Suchmaschine in Russland, Mikroformate wie `hCard` (Firmenkontaktinformationen), `hRecipe` (Lebensmittelrezept), `hReview` (Marktbewertungen) und `hProduct` (Produktdaten) und bietet ein eigenes Format zur Definition von Begriffen und enzyklopädischen Artikeln. Diese Erweiterung wurde vorgenommen, um Transliterationsprobleme zwischen den kyrillischen und lateinischen Alphabeten zu lösen. Durch die Implementierung zusätzlicher Markierungsparameter des Schema-Vokabulars wurde die Indexierung von Informationen auf russischsprachigen Webseiten wesentlich erfolgreicher.

## Globale Attribute

[`itemid`](/de/docs/Web/HTML/Reference/Global_attributes/itemid) – Der eindeutige, globale Bezeichner eines `Items`.

[`itemprop`](/de/docs/Web/HTML/Reference/Global_attributes/itemprop) – Wird verwendet, um Eigenschaften zu einem `Item` hinzuzufügen. Jedes HTML-Element kann ein `itemprop`-Attribut haben, das aus einem Namen-Wert-Paar besteht.

[`itemref`](/de/docs/Web/HTML/Reference/Global_attributes/itemref) – Eigenschaften, die keine Nachkommen eines Elements mit dem Attribut `itemscope` sind, können mit dem `Item` verknüpft werden, indem ein **itemref** verwendet wird. `itemref` bietet eine Liste von Element-IDs (nicht `itemid`s) mit zusätzlichen Eigenschaften, die sich an anderer Stelle im Dokument befinden.

[`itemscope`](/de/docs/Web/HTML/Reference/Global_attributes/itemscope) – Das Attribut `itemscope` arbeitet (meistens) zusammen mit [`itemtype`](/de/docs/Web/HTML/Reference/Global_attributes/itemtype), um anzugeben, dass das in einem Block enthaltene HTML sich auf ein bestimmtes `Item` bezieht. Das Attribut `itemscope` erstellt das _`Item`_ und definiert den Gültigkeitsbereich des damit verbundenen `itemtype`. Das Attribut `itemtype` ist eine gültige URL eines Vokabulars (wie [schema.org](https://schema.org/)), das das `Item` und seinen Kontext beschreibt.

[`itemtype`](/de/docs/Web/HTML/Reference/Global_attributes/itemtype) – Gibt die URL des Vokabulars an, das verwendet wird, um `itemprop`s (Element-Eigenschaften) in der Datenstruktur zu definieren. Das Attribut [`itemscope`](/de/docs/Web/HTML/Reference/Global_attributes/itemscope) wird verwendet, um den Gültigkeitsbereich festzulegen, in dem das von `itemtype` festgelegte Vokabular in der Datenstruktur aktiv sein wird.

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
> Ein praktisches Tool zur Extraktion von Microdata-Strukturen aus HTML ist Googles [Structured Data Testing Tool](https://developers.google.com/search/docs/appearance/structured-data/intro-structured-data). Probieren Sie es mit dem oben gezeigten HTML aus.

## Siehe auch

- [Globale Attribute](/de/docs/Web/HTML/Reference/Global_attributes)
