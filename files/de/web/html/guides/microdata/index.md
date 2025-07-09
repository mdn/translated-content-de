---
title: Verwendung von Mikrodata in HTML
short-title: Microdata
slug: Web/HTML/Guides/Microdata
l10n:
  sourceCommit: 0754cd805a8e010d2e3a2a065f634a3bcf358252
---

Mikrodata ist Teil des {{Glossary("WHATWG", "WHATWG")}} HTML-Standards und wird verwendet, um Metadaten in bestehende Inhalte auf Webseiten einzubetten. Suchmaschinen und Webcrawler können Mikrodata von einer Webseite extrahieren und verarbeiten, um den Nutzern ein reichhaltigeres Surferlebnis zu bieten. Suchmaschinen profitieren erheblich von direktem Zugriff auf diese strukturierten Daten, da sie es den Suchmaschinen ermöglichen, die Informationen auf Webseiten zu verstehen und relevantere Ergebnisse für die Benutzer bereitzustellen. Mikrodata verwendet einen unterstützenden Wortschatz, um ein Item zu beschreiben, und Name-Wert-Paare, um den Eigenschaften Werte zuzuweisen. Mikrodata ist ein Versuch, eine deklarative Methode zur Kennzeichnung von HTML-Elementen mit maschinenlesbaren Tags bereitzustellen, im Gegensatz zu ähnlichen Ansätzen wie der Verwendung von RDFa und klassischen Mikroformaten.

Auf hohem Niveau besteht Mikrodata aus einer Gruppe von Name-Wert-Paaren. Die Gruppen werden Items genannt, und jedes Name-Wert-Paar ist eine Eigenschaft. Items und Eigenschaften werden durch reguläre Elemente dargestellt.

- Um ein Item zu erstellen, wird das `itemscope`-Attribut verwendet.
- Um einem Item eine Eigenschaft hinzuzufügen, wird das `itemprop`-Attribut bei einem der Nachkommen des Items verwendet.

## Vokabulare

Google und andere führende Suchmaschinen unterstützen das [Schema.org](https://schema.org/)-Vokabular für strukturierte Daten. Dieses Vokabular definiert einen Standard-Satz von Typnamen und Eigenschaftsnamen, z. B. zeigt [Schema.org Music Event](https://schema.org/MusicEvent) eine Konzertaufführung mit den Eigenschaften [`startDate`](https://schema.org/startDate) und [`location`](https://schema.org/location) an, um die wichtigsten Details des Konzerts anzugeben. In diesem Fall wäre [Schema.org Music Event](https://schema.org/MusicEvent) die URL, die von `itemtype` verwendet wird, und `startDate` und location wären `itemprop`s, die [Schema.org Music Event](https://schema.org/MusicEvent) definiert.

> [!NOTE]
> Mehr über die itemtype-Attribute finden Sie unter <https://schema.org/Thing>.

Mikrodata-Vokabulare liefern die Semantik oder Bedeutung eines _`Item`_. Webentwickler können ein benutzerdefiniertes Vokabular entwerfen oder auf bereits im Web vorhandene Vokabulare wie das weit verbreitete [schema.org](https://schema.org/)-Vokabular zurückgreifen. Eine Sammlung häufig verwendeter Markup-Vokabulare wird von Schema.org bereitgestellt.

Häufig verwendete Vokabulare:

- Kreative Werke: [CreativeWork](https://schema.org/CreativeWork), [Book](https://schema.org/Book), [Movie](https://schema.org/Movie), [MusicRecording](https://schema.org/MusicRecording), [Recipe](https://schema.org/Recipe), [TVSeries](https://schema.org/TVSeries)
- Eingebettete nicht-textliche Objekte: [AudioObject](https://schema.org/AudioObject), [ImageObject](https://schema.org/ImageObject), [VideoObject](https://schema.org/VideoObject)
- [`Event`](https://schema.org/Event)
- [Gesundheit und medizinische Typen](https://schema.org/docs/meddocs.html): Hinweise zu den Gesundheits- und Medizintypen unter [MedicalEntity](https://schema.org/MedicalEntity)
- [`Organization`](https://schema.org/Organization)
- [`Person`](https://schema.org/Person)
- [`Place`](https://schema.org/Place), [LocalBusiness](https://schema.org/LocalBusiness), [Restaurant](https://schema.org/Restaurant)
- [`Product`](https://schema.org/Product), [Offer](https://schema.org/Offer), [AggregateOffer](https://schema.org/AggregateOffer)
- [`Review`](https://schema.org/Review), [AggregateRating](https://schema.org/AggregateRating)
- [`Action`](https://schema.org/Action)
- [`Thing`](https://schema.org/Thing)
- [`Intangible`](https://schema.org/Intangible)

Große Suchmaschinenbetreiber wie Google, Microsoft und Yahoo! verlassen sich auf das [schema.org](https://schema.org/)-Vokabular, um Suchergebnisse zu verbessern. Für manche Zwecke ist ein ad-hoc-Vokabular ausreichend. Für andere Zwecke muss ein Vokabular entworfen werden. Wo möglich, wird Autoren empfohlen, bestehende Vokabulare wiederzuverwenden, da dies die Wiederverwendung von Inhalten erleichtert.

## Lokalisierung

In einigen Fällen können Suchmaschinen, die spezifische Regionen abdecken, lokal spezifische Erweiterungen von Mikrodata bereitstellen. Beispielsweise unterstützt [Yandex](https://yandex.com/), eine große Suchmaschine in Russland, Mikroformate wie `hCard` (Unternehmens-Kontaktinformationen), `hRecipe` (Lebensmittelrezept), `hReview` (Marktbewertungen) und `hProduct` (Produktdaten) und bietet sein eigenes Format zur Definition der Begriffe und enzyklopädischen Artikel an. Diese Erweiterung wurde vorgenommen, um Transliterationsprobleme zwischen dem kyrillischen und dem lateinischen Alphabet zu lösen. Aufgrund der Implementierung zusätzlicher Markierungsparameter des Schema-Vokabulars wurde die Indexierung von Informationen auf russischsprachigen Webseiten erheblich erfolgreicher.

## Globale Attribute

[`itemid`](/de/docs/Web/HTML/Reference/Global_attributes/itemid) – Der eindeutige, globale Bezeichner eines Items.

[`itemprop`](/de/docs/Web/HTML/Reference/Global_attributes/itemprop) – Wird verwendet, um einem Item Eigenschaften hinzuzufügen. Jedes HTML-Element kann ein `itemprop`-Attribut haben, das aus einem Name-Wert-Paar besteht.

[`itemref`](/de/docs/Web/HTML/Reference/Global_attributes/itemref) – Eigenschaften, die keine Nachkommen eines Elements mit dem `itemscope`-Attribut sind, können mit dem Item mithilfe von **itemref** verknüpft werden. `itemref` bietet eine Liste von Element-Ids (nicht `itemid`s) mit zusätzlichen Eigenschaften an anderer Stelle im Dokument.

[`itemscope`](/de/docs/Web/HTML/Reference/Global_attributes/itemscope) – Das `itemscope`-Attribut arbeitet (normalerweise) zusammen mit [`itemtype`](/de/docs/Web/HTML/Reference/Global_attributes/itemtype), um anzugeben, dass das innerhalb eines Blocks enthaltene HTML sich auf ein bestimmtes Item bezieht. Das `itemscope`-Attribut erstellt das _`Item`_ und definiert den Anwendungsbereich des `itemtype`, das damit verknüpft ist. Das `itemtype`-Attribut ist eine gültige URL eines Vokabulars (wie [schema.org](https://schema.org/)), das das Item und seinen Eigenschaften-Kontext beschreibt.

[`itemtype`](/de/docs/Web/HTML/Reference/Global_attributes/itemtype) – Gibt die URL des Vokabulars an, das verwendet wird, um `itemprop`'s (Item-Eigenschaften) in der Datenstruktur zu definieren. Das [`itemscope`](/de/docs/Web/HTML/Reference/Global_attributes/itemscope)-Attribut wird verwendet, um den Anwendungsbereich festzulegen, in dem das durch `itemtype` gesetzte Vokabular in der Datenstruktur aktiv sein wird.

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
> Ein nützliches Werkzeug zum Extrahieren von Mikrodata-Strukturen aus HTML ist Googles [Structured Data Testing Tool](https://developers.google.com/search/docs/appearance/structured-data/intro-structured-data). Probieren Sie es mit dem oben gezeigten HTML aus.

## Siehe auch

- [Globale Attribute](/de/docs/Web/HTML/Reference/Global_attributes)
