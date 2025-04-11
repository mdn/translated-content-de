---
title: itemscope
slug: Web/HTML/Reference/Global_attributes/itemscope
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{HTMLSidebar("Global_attributes")}}

Das **`itemscope`**-Attribut ist ein boolesches [globales Attribut](/de/docs/Web/HTML/Reference/Global_attributes), das den Bereich der zugehörigen Metadaten definiert. Durch die Angabe des **`itemscope`**-Attributs für ein Element wird ein neues Item erstellt, was eine Reihe von Name-Wert-Paaren zur Folge hat, die mit dem Element verknüpft sind.

Ein verwandtes Attribut, [`itemtype`](/de/docs/Web/HTML/Reference/Global_attributes/itemtype), wird verwendet, um die gültige URL eines Vokabulars (wie [schema.org](https://schema.org/)) anzugeben, das das Item und dessen Kontext beschreibt. In jedem der folgenden Beispiele stammt das Vokabular von [schema.org](https://schema.org/).

Jedes HTML-Element kann ein `itemscope`-Attribut haben. Ein `itemscope`-Element, das kein zugehöriges `itemtype` hat, muss ein zugehöriges `itemref` haben.

> [!NOTE]
> Weitere Informationen zu `itemtype`-Attributen finden Sie unter <https://schema.org/Thing>

### itemscope id Attribute

Wenn Sie das `itemscope`-Attribut für ein Element angeben, wird ein neues Item erstellt. Das Item besteht aus einer Gruppe von Name-Wert-Paaren. Für Elemente mit einem `itemscope`-Attribut und einem `itemtype`-Attribut können Sie auch ein [`id`](/de/docs/Web/HTML/Reference/Global_attributes/id) Attribut angeben. Mit dem `id`-Attribut können Sie eine globale Kennung für das neue Item festlegen. Eine globale Kennung ermöglicht es dem Item, sich auf andere Items auf Seiten im gesamten Web zu beziehen.

## Beispiele

### Darstellung von strukturierten Daten für einen Film

Das folgende Beispiel gibt das `itemtype` als "http://schema.org/Movie" an und spezifiziert vier zugehörige `itemprop`-Attribute.

<table class="standard-table">
  <tbody>
    <tr>
      <td rowspan="6">itemscope</td>
      <td>Itemtype</td>
      <td colspan="2">Movie</td>
    </tr>
    <tr>
      <td>itemprop</td>
      <td>(itemprop Name)</td>
      <td>(itemprop Wert)</td>
    </tr>
    <tr>
      <td>itemprop</td>
      <td>director</td>
      <td>James Cameron</td>
    </tr>
    <tr>
      <td>itemprop</td>
      <td>genre</td>
      <td>Science Fiction</td>
    </tr>
    <tr>
      <td>itemprop</td>
      <td>name</td>
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

### Darstellung von strukturierten Daten für ein Rezept

Im folgenden Beispiel gibt es vier `itemscope`-Attribute. Jedes `itemscope`-Attribut legt den Bereich seines entsprechenden `itemtype`-Attributs fest. Die `itemtype`s, `Recipe`, `AggregateRating` und `NutritionInformation` im folgenden Beispiel sind Teil der auf [schema.org](https://www.schema.org/) strukturierten Daten für ein Rezept, wie durch das erste `itemtype`, `http://schema.org/Recipe`, spezifiziert.

<table class="standard-table">
  <tbody>
    <tr>
      <td rowspan="14">itemscope</td>
      <td>itemtype</td>
      <td colspan="2">Recipe</td>
    </tr>
    <tr>
      <td>itemprop</td>
      <td>name</td>
      <td>Omas Festtags-Apfelkuchen</td>
    </tr>
    <tr>
      <td>itemprop</td>
      <td>image</td>
      <td>https://c1.staticflickr.com/1/30/42759561_8631e2f905_n.jpg</td>
    </tr>
    <tr>
      <td>itemprop</td>
      <td>datePublished</td>
      <td>2022-11-05</td>
    </tr>
    <tr>
      <td>itemprop</td>
      <td>description</td>
      <td>
        Das ist das Apfelkuchenrezept meiner Großmutter. Ich füge immer eine Prise Muskatnuss hinzu.
      </td>
    </tr>
    <tr>
      <td>itemprop</td>
      <td>prepTime</td>
      <td>PT30M</td>
    </tr>
    <tr>
      <td>itemprop</td>
      <td>cookTime</td>
      <td>PT1H</td>
    </tr>
    <tr>
      <td>itemprop</td>
      <td>totalTime</td>
      <td>PT1H30M</td>
    </tr>
    <tr>
      <td>itemprop</td>
      <td>recipeYield</td>
      <td>1 9" Kuchen (8 Portionen)</td>
    </tr>
    <tr>
      <td>itemprop</td>
      <td>recipeIngredient</td>
      <td>Dünn geschnittene Äpfel: 6 Tassen</td>
    </tr>
    <tr>
      <td>itemprop</td>
      <td>recipeIngredient</td>
      <td>Weißzucker: 3/4 Tasse</td>
    </tr>
    <tr>
      <td>itemprop</td>
      <td>recipeInstructions</td>
      <td>
        1. Äpfel schneiden und schälen 2. Zucker und Zimt mischen. Bei sauren Äpfeln zusätzlichen Zucker verwenden.
      </td>
    </tr>
    <tr>
      <td>itemprop</td>
      <td colspan="2">author [Person]</td>
    </tr>
    <tr>
      <td>itemprop</td>
      <td>name</td>
      <td>Carol Smith</td>
    </tr>
    <tr>
      <td rowspan="3">itemscope</td>
      <td>itemprop[itemtype]</td>
      <td colspan="2">aggregateRating [AggregateRating]</td>
    </tr>
    <tr>
      <td>itemprop</td>
      <td>ratingValue</td>
      <td>4.0</td>
    </tr>
    <tr>
      <td>itemprop</td>
      <td>reviewCount</td>
      <td>35</td>
    </tr>
    <tr>
      <td rowspan="4">itemscope</td>
      <td>itemprop[itemtype]</td>
      <td colspan="2">nutrition [NutritionInformation]</td>
    </tr>
    <tr>
      <td>itemprop</td>
      <td>servingSize</td>
      <td>1 mittleres Stück</td>
    </tr>
    <tr>
      <td>itemprop</td>
      <td>calories</td>
      <td>250 cal</td>
    </tr>
    <tr>
      <td>itemprop</td>
      <td>fatContent</td>
      <td>12 g</td>
    </tr>
  </tbody>
</table>

> [!NOTE]
> Ein praktisches Tool zum Extrahieren von Mikrodatastrukturen aus HTML ist Googles [Rich Results Testing Tool](https://search.google.com/test/rich-results). Probieren Sie es mit dem hier gezeigten HTML aus.

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

{{EmbedLiveSample('Darstellung von strukturierten Daten für ein Rezept', '', '550')}}

## Spezifikationen

{{Specifications}}

## Siehe auch

- [Andere verschiedene globale Attribute](/de/docs/Web/HTML/Reference/Global_attributes)
- Andere mikrodatabezogene globale Attribute:

  - [`itemid`](/de/docs/Web/HTML/Reference/Global_attributes/itemid)
  - [`itemprop`](/de/docs/Web/HTML/Reference/Global_attributes/itemprop)
  - [`itemref`](/de/docs/Web/HTML/Reference/Global_attributes/itemref)
  - [`itemtype`](/de/docs/Web/HTML/Reference/Global_attributes/itemtype)
