---
title: Verwendung von Microdata in HTML
short-title: Microdata
slug: Web/HTML/Guides/Microdata
l10n:
  sourceCommit: 057d13e47e8335a52d3c687cf27231527ef758c1
---

Microdata ist Teil des {{Glossary("WHATWG", "WHATWG")}} HTML-Standards und wird verwendet, um Metadaten in bestehende Inhalte auf Webseiten einzubetten. Suchmaschinen und Webcrawler können Microdata von einer Webseite extrahieren und verarbeiten, um ein reicheres Browsing-Erlebnis für Benutzer bereitzustellen. Suchmaschinen profitieren stark von direktem Zugriff auf diese strukturierten Daten, da sie es Suchmaschinen ermöglichen, die Informationen auf Webseiten zu verstehen und relevantere Ergebnisse für Benutzer zu liefern. Microdata verwendet ein unterstützendes Vokabular, um ein Item zu beschreiben und Werte in Form von Namens-Wert-Paaren seinen Eigenschaften zuzuweisen. Microdata ist ein Versuch, eine deklarative Methode zur Annotation von HTML-Elementen mit maschinenlesbaren Tags bereitzustellen, im Gegensatz zu den ähnlichen Ansätzen der Verwendung von RDFa und klassischen Mikroformaten.

Auf einer hohen Ebene besteht Microdata aus einer Gruppe von Namens-Wert-Paaren. Die Gruppen werden Items genannt, und jedes Namens-Wert-Paar ist eine Eigenschaft. Items und Eigenschaften werden durch reguläre Elemente dargestellt.

- Um ein Item zu erstellen, wird das `itemscope`-Attribut verwendet.
- Um einem Item eine Eigenschaft hinzuzufügen, wird das `itemprop`-Attribut auf einem der Nachfahren des Items verwendet.

## Vokabulare

Google und andere große Suchmaschinen unterstützen das [Schema.org](https://schema.org/) Vokabular für strukturierte Daten. Dieses Vokabular definiert einen Standardsatz von Typnamen und Eigenschaftsnamen, zum Beispiel zeigt [Schema.org Music Event](https://schema.org/MusicEvent) ein Konzert an, mit den Eigenschaften [`startDate`](https://schema.org/startDate) und [`location`](https://schema.org/location), um die wichtigsten Details des Konzerts anzugeben. In diesem Fall wäre [Schema.org Music Event](https://schema.org/MusicEvent) die URL, die von `itemtype` verwendet wird, und `startDate` und `location` wären `itemprop`s, die [Schema.org Music Event](https://schema.org/MusicEvent) definiert.

> [!NOTE]
> Weitere Informationen zu `itemtype`-Attributen finden Sie unter <https://schema.org/Thing>.

Microdata-Vokabulare bieten die Semantik oder Bedeutung eines _`Item`_. Webentwickler können ein benutzerdefiniertes Vokabular entwerfen oder Vokabulare verwenden, die im Internet verfügbar sind, wie das weit verbreitete [schema.org](https://schema.org/)-Vokabular. Eine Sammlung häufig verwendeter Markup-Vokabulare wird von Schema.org bereitgestellt.

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

Große Suchmaschinenbetreiber wie Google, Microsoft und Yahoo! verlassen sich auf das [schema.org](https://schema.org/)-Vokabular, um Suchergebnisse zu verbessern. Für einige Zwecke ist ein adhoc-Vokabular ausreichend. Für andere muss ein Vokabular entworfen werden. Wo möglich, werden Autoren ermutigt, bestehende Vokabulare wiederzuverwenden, da dies die Wiederverwendung von Inhalten erleichtert.

## Lokalisierung

In einigen Fällen können Suchmaschinen, die bestimmte Regionen abdecken, lokal spezifische Erweiterungen von Microdata bereitstellen. Zum Beispiel unterstützt [Yandex](https://yandex.com/), eine große Suchmaschine in Russland, Mikroformate wie `hCard` (Unternehmens-Kontaktinformationen), `hRecipe` (Rezept für Lebensmittel), `hReview` (Marktbewertungen) und `hProduct` (Produktdaten) und bietet sein eigenes Format für die Definition von Begriffen und enzyklopädischen Artikeln. Diese Erweiterung wurde entwickelt, um Probleme bei der Transliteration zwischen den kyrillischen und lateinischen Alphabeten zu lösen. Durch die Implementierung zusätzlicher Markierungsparameter des Schemas wurde die Indexierung von Informationen auf russischsprachigen Webseiten erheblich erfolgreicher.

## Globale Attribute

[`itemid`](/de/docs/Web/HTML/Reference/Global_attributes/itemid) – Die eindeutige, globale Kennung eines Items.

[`itemprop`](/de/docs/Web/HTML/Reference/Global_attributes/itemprop) – Wird verwendet, um einem Item Eigenschaften hinzuzufügen. Jedes HTML-Element kann ein `itemprop`-Attribut spezifiziert haben, wobei ein `itemprop` aus einem Namens-Wert-Paar besteht.

[`itemref`](/de/docs/Web/HTML/Reference/Global_attributes/itemref) – Eigenschaften, die keine Nachfahren eines Elements mit dem `itemscope`-Attribut sind, können dem Item mit einem **itemref** zugeordnet werden. `itemref` bietet eine Liste von Element-IDs (nicht `itemid`s) mit zusätzlichen Eigenschaften an anderer Stelle im Dokument.

[`itemscope`](/de/docs/Web/HTML/Reference/Global_attributes/itemscope) – Das `itemscope`-Attribut funktioniert (in der Regel) zusammen mit dem [`itemtype`](/de/docs/Web/HTML/Reference/Global_attributes/itemtype), um anzugeben, dass das in einem Block enthaltene HTML sich auf ein bestimmtes Item bezieht. Das `itemscope`-Attribut erstellt das _`Item`_ und definiert den Geltungsbereich des `itemtype`, der damit verbunden ist. Das `itemtype`-Attribut ist eine gültige URL eines Vokabulars (wie [schema.org](https://schema.org/)), das das Item und den Kontext seiner Eigenschaften beschreibt.

[`itemtype`](/de/docs/Web/HTML/Reference/Global_attributes/itemtype) – Gibt die URL des Vokabulars an, das verwendet wird, um `itemprop`s (Item-Eigenschaften) in der Datenstruktur zu definieren. Das [`itemscope`](/de/docs/Web/HTML/Reference/Global_attributes/itemscope) Attribut wird verwendet, um den Geltungsbereich festzulegen, in dem die von `itemtype` festgelegte Vokabularstruktur aktiv ist.

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
> Ein praktisches Werkzeug zum Extrahieren und Überprüfen von Microdata-Strukturen aus HTML ist der [Schema Markup Validator](https://validator.schema.org/). Probieren Sie es mit dem oben gezeigten HTML aus.

## Siehe auch

- [Globale Attribute](/de/docs/Web/HTML/Reference/Global_attributes)
