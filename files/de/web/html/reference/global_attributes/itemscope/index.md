---
title: HTML itemscope globales Attribut
short-title: itemscope
slug: Web/HTML/Reference/Global_attributes/itemscope
l10n:
  sourceCommit: 0c81cbce5f95a0be935724bcd936f5592774eb3a
---

**`itemscope`** ist ein boolesches [globales Attribut](/de/docs/Web/HTML/Reference/Global_attributes), das den Gültigkeitsbereich der zugeordneten Metadaten definiert. Wenn das **`itemscope`**-Attribut für ein Element angegeben wird, wird ein neues Element erstellt, das eine Reihe von Name-Wert-Paaren erzeugt, die dem Element zugeordnet sind.

Ein verwandtes Attribut, [`itemtype`](/de/docs/Web/HTML/Reference/Global_attributes/itemtype), wird verwendet, um die gültige URL eines Vokabulars anzugeben (wie [schema.org](https://schema.org/)), das das Element und den Kontexte seiner Eigenschaften beschreibt. In jedem der folgenden Beispiele stammt das Vokabular von [schema.org](https://schema.org/).

Jedes HTML-Element kann ein `itemscope`-Attribut spezifiziert haben. Ein `itemscope`-Element, das keinen zugeordneten `itemtype` hat, muss einen zugeordneten `itemref` haben.

> [!NOTE]
> Mehr über `itemtype`-Attribute finden Sie unter <https://schema.org/Thing>

## Verwendungshinweise

### itemscope id Attribute

Wenn Sie das `itemscope`-Attribut für ein Element angeben, wird ein neues Element erstellt. Das Element besteht aus einer Gruppe von Name-Wert-Paaren. Für Elemente mit einem `itemscope`-Attribut und einem `itemtype`-Attribut können Sie auch ein [`id`](/de/docs/Web/HTML/Reference/Global_attributes/id) Attribut angeben. Sie können das `id`-Attribut verwenden, um einen globalen Bezeichner für das neue Element festzulegen. Ein globaler Bezeichner ermöglicht es dem Element, sich auf andere Elemente zu beziehen, die auf Seiten im gesamten Web gefunden werden.

## Beispiele

### Darstellung strukturierter Daten für einen Film

Das folgende Beispiel spezifiziert den `itemtype` als "http\://schema.org/Movie" und gibt vier verwandte `itemprop`-Attribute an.

<table class="standard-table">
  <tbody>
    <tr>
      <td rowspan="6">itemscope</td>
      <td>Itemtype</td>
      <td colspan="2">Film</td>
    </tr>
    <tr>
      <td>itemprop</td>
      <td>(itemprop Name)</td>
      <td>(itemprop Wert)</td>
    </tr>
    <tr>
      <td>itemprop</td>
      <td>Regisseur</td>
      <td>James Cameron</td>
    </tr>
    <tr>
      <td>itemprop</td>
      <td>Genre</td>
      <td>Science Fiction</td>
    </tr>
    <tr>
      <td>itemprop</td>
      <td>Name</td>
      <td>Avatar</td>
    </tr>
    <tr>
      <td>itemprop</td>
      <td>Trailer</td>
      <td>https://youtu.be/0AY1XIkX7bY</td>
    </tr>
  </tbody>
</table>

```html
<div itemscope itemtype="https://schema.org/Movie">
  <h1 itemprop="name">Avatar</h1>
  <span>
    Director: <span itemprop="director">James Cameron</span> (born August 16,
    1954)
  </span>
  <span itemprop="genre">Science fiction</span>
  <a href="https://youtu.be/0AY1XIkX7bY" itemprop="trailer">Trailer</a>
</div>
```

### Darstellung strukturierter Daten für ein Rezept

Im folgenden Beispiel gibt es vier `itemscope`-Attribute. Jedes `itemscope`-Attribut legt den Gültigkeitsbereich seines entsprechenden `itemtype`-Attributs fest. Die `itemtype`s, `Recipe`, `AggregateRating` und `NutritionInformation` im folgenden Beispiel sind Teil der [schema.org](https://www.schema.org/) strukturierten Daten für ein Rezept, wie durch das erste `itemtype`, `http://schema.org/Recipe`, angegeben.

<table class="standard-table">
  <tbody>
    <tr>
      <td rowspan="14">itemscope</td>
      <td>itemtype</td>
      <td colspan="2">Rezept</td>
    </tr>
    <tr>
      <td>itemprop</td>
      <td>Name</td>
      <td>Omas Festtags-Apfelkuchen</td>
    </tr>
    <tr>
      <td>itemprop</td>
      <td>Bild</td>
      <td>https://c1.staticflickr.com/1/30/42759561_8631e2f905_n.jpg</td>
    </tr>
    <tr>
      <td>itemprop</td>
      <td>datumVeröffentlicht</td>
      <td>2022-11-05</td>
    </tr>
    <tr>
      <td>itemprop</td>
      <td>Beschreibung</td>
      <td>
        Dies ist das Apfelkuchenrezept meiner Großmutter. Ich füge gerne eine Prise Muskatnuss hinzu.
      </td>
    </tr>
    <tr>
      <td>itemprop</td>
      <td>vorbereitungsZeit</td>
      <td>PT30M</td>
    </tr>
    <tr>
      <td>itemprop</td>
      <td>kochZeit</td>
      <td>PT1H</td>
    </tr>
    <tr>
      <td>itemprop</td>
      <td>gesamtZeit</td>
      <td>PT1H30M</td>
    </tr>
    <tr>
      <td>itemprop</td>
      <td>rezeptAusbeute</td>
      <td>1 9" Kuchen (8 Portionen)</td>
    </tr>
    <tr>
      <td>itemprop</td>
      <td>rezeptZutat</td>
      <td>Fein geschnittene Äpfel: 6 Tassen</td>
    </tr>
    <tr>
      <td>itemprop</td>
      <td>rezeptZutat</td>
      <td>Weißer Zucker: 3/4 Tasse</td>
    </tr>
    <tr>
      <td>itemprop</td>
      <td>rezeptAnweisungen</td>
      <td>
        1. Äpfel schneiden und schälen 2. Zucker und Zimt mischen. Zusätzlichen Zucker für saure Äpfel verwenden.
      </td>
    </tr>
    <tr>
      <td>itemprop</td>
      <td colspan="2">Autor [Person]</td>
    </tr>
    <tr>
      <td>itemprop</td>
      <td>Name</td>
      <td>Carol Smith</td>
    </tr>
    <tr>
      <td rowspan="3">itemscope</td>
      <td>itemprop[itemtype]</td>
      <td colspan="2">gesamtBewertung [AggregateRating]</td>
    </tr>
    <tr>
      <td>itemprop</td>
      <td>bewertungsWert</td>
      <td>4.0</td>
    </tr>
    <tr>
      <td>itemprop</td>
      <td>rezensionsAnzahl</td>
      <td>35</td>
    </tr>
    <tr>
      <td rowspan="4">itemscope</td>
      <td>itemprop[itemtype]</td>
      <td colspan="2">nährwert [NutritionInformation]</td>
    </tr>
    <tr>
      <td>itemprop</td>
      <td>portionsGröße</td>
      <td>1 mittlere Scheibe</td>
    </tr>
    <tr>
      <td>itemprop</td>
      <td>kalorien</td>
      <td>250 Kal</td>
    </tr>
    <tr>
      <td>itemprop</td>
      <td>fettGehalt</td>
      <td>12 g</td>
    </tr>
  </tbody>
</table>

> [!NOTE]
> Ein praktisches Tool zum Extrahieren von Microdata-Strukturen aus HTML ist Googles [Rich Results Testing Tool](https://search.google.com/test/rich-results). Probieren Sie es mit dem hier gezeigten HTML aus.

#### HTML

```html
<div itemscope itemtype="https://schema.org/Recipe">
  <h2 itemprop="name">Grandma's Holiday Apple Pie</h2>
  <img
    itemprop="image"
    src="https://c1.staticflickr.com/1/30/42759561_8631e2f905_n.jpg"
    width="50"
    height="50" />
  <p>
    By
    <span itemprop="author" itemscope itemtype="https://schema.org/Person">
      <span itemprop="name">Carol Smith</span>
    </span>
  </p>
  <p>
    Published:
    <time datetime="2022-11-05" itemprop="datePublished">
      November 5, 20022
    </time>
  </p>
  <span itemprop="description">
    This is my grandmother's apple pie recipe. I like to add a dash of nutmeg.
  </span>
  <br />
  <span
    itemprop="aggregateRating"
    itemscope
    itemtype="https://schema.org/AggregateRating">
    <span itemprop="ratingValue">4.0</span> stars based on
    <span itemprop="reviewCount">35</span> reviews
  </span>
  <br />
  Prep time: <time datetime="PT30M" itemprop="prepTime">30 min</time>
  <br />
  Cook time: <time datetime="PT1H" itemprop="cookTime">1 hour</time>
  <br />
  Total time: <time datetime="PT1H30M" itemprop="totalTime">1 hour 30 min</time>
  <br />
  Yield: <span itemprop="recipeYield">1 9" pie (8 servings)</span>
  <br />
  <span
    itemprop="nutrition"
    itemscope
    itemtype="https://schema.org/NutritionInformation">
    Serving size: <span itemprop="servingSize">1 medium slice</span><br />
    Calories per serving: <span itemprop="calories">250 cal</span><br />
    Fat per serving: <span itemprop="fatContent">12 g</span><br />
  </span>
  <p>
    Ingredients:<br />
    <span itemprop="recipeIngredient">Thinly-sliced apples: 6 cups<br /></span>
    <span itemprop="recipeIngredient">White sugar: 3/4 cup<br /></span>
    …
  </p>
  Directions: <br />
  <div itemprop="recipeInstructions">
    1. Cut and peel apples<br />
    2. Mix sugar and cinnamon. Use additional sugar for tart apples. <br />
    …
  </div>
</div>
```

#### Ergebnis

{{EmbedLiveSample('Darstellung strukturierter Daten für ein Rezept', '', '550')}}

## Spezifikationen

{{Specifications}}

## Siehe auch

- [Andere verschiedene globale Attribute](/de/docs/Web/HTML/Reference/Global_attributes)
- Andere Microdata-bezogene globale Attribute:
  - [`itemid`](/de/docs/Web/HTML/Reference/Global_attributes/itemid)
  - [`itemprop`](/de/docs/Web/HTML/Reference/Global_attributes/itemprop)
  - [`itemref`](/de/docs/Web/HTML/Reference/Global_attributes/itemref)
  - [`itemtype`](/de/docs/Web/HTML/Reference/Global_attributes/itemtype)
