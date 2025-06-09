---
title: Listen
slug: Learn_web_development/Core/Structuring_content/Lists
l10n:
  sourceCommit: 6ae99fce9ad06ef87a294409d2e2f0d2bdce857f
---

{{PreviousMenuNext("Learn_web_development/Core/Structuring_content/Emphasis_and_importance", "Learn_web_development/Core/Structuring_content/Structuring_documents", "Learn_web_development/Core/Structuring_content")}}

Wenden wir uns nun den Listen zu. Listen sind überall im Leben zu finden – von Ihrer Einkaufsliste bis hin zur Liste der Anweisungen, denen Sie unbewusst folgen, um jeden Tag zu Ihrem Haus zu gelangen, bis hin zu den Listen von Anweisungen, denen Sie in diesen Tutorials folgen! Es überrascht Sie vielleicht nicht, dass HTML eine praktische Menge an Elementen bietet, mit denen wir verschiedene Arten von Listen definieren können. Im Web haben wir drei Arten von Listen: ungeordnete, geordnete und Definitionslisten. Diese Lektion zeigt Ihnen, wie Sie die unterschiedlichen Typen verwenden.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Grundkenntnisse in HTML, wie sie in
        <a href="/de/docs/Learn_web_development/Core/Structuring_content/Basic_HTML_syntax"
          >Grundlegende HTML-Syntax</a
        >behandelt werden.
      </td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Die HTML-Struktur für die drei Arten von Listen — ungeordnet, geordnet und Definition.</li>
          <li>Die korrekte Verwendung für jeden Listentyp.</li>
          <li>Die breiteren Anwendungsbereiche von Listen, wie Navigationsmenüs.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Ungeordnete Listen

Ungeordnete Listen werden verwendet, um Listen von Elementen zu markieren, bei denen die Reihenfolge der Elemente keine Rolle spielt. Nehmen wir als Beispiel eine Einkaufsliste:

```plain
milk
eggs
bread
hummus
```

In diesem Beispiel können die Artikel in beliebiger Reihenfolge vorliegen. Um diese Liste in HTML zu erstellen, umschließen wir zunächst die gesamte Liste mit einem {{htmlelement("ul")}}-Element (ungeordnete Liste). Dann umschließen wir jedes Element mit einem {{htmlelement("li")}}-Element (Listenelement):

```html
<ul>
  <li>milk</li>
  <li>eggs</li>
  <li>bread</li>
  <li>hummus</li>
</ul>
```

### Eine ungeordnete Liste markieren

Um Ihnen etwas Übung zu verschaffen, möchten wir, dass Sie die vorherige Liste selbst markieren:

1. Klicken Sie auf **"Play"** in der gerenderten Code-Ausgabe unten, um das Beispiel im MDN Playground zu bearbeiten.
2. Verwandeln Sie die einzelnen Textelemente in eine ungeordnete Liste.

Wenn Sie einen Fehler machen, können Sie Ihre Arbeit mit der _Zurücksetzen_-Schaltfläche im MDN Playground löschen. Wenn Sie nicht weiterkommen, schauen Sie sich noch einmal das vorherige Code-Snippet an.

```html hidden live-sample___lists_1
milk eggs bread hummus
```

{{ EmbedLiveSample('lists_1', "100%", 60) }}

## Geordnete Listen

Geordnete Listen sind Listen, bei denen die Reihenfolge der Elemente _wichtig_ ist. Nehmen wir als Beispiel eine Wegbeschreibung:

```plain
Drive to the end of the road
Turn right
Go straight across the first two roundabouts
Turn left at the third roundabout
The school is on your right, 300 meters up the road
```

Die Markup-Struktur ist die gleiche wie bei ungeordneten Listen, außer dass Sie die Listenelemente in ein {{htmlelement("ol")}}-Element anstelle von `<ul>` einfügen müssen:

```html
<ol>
  <li>Drive to the end of the road</li>
  <li>Turn right</li>
  <li>Go straight across the first two roundabouts</li>
  <li>Turn left at the third roundabout</li>
  <li>The school is on your right, 300 meters up the road</li>
</ol>
```

### Eine geordnete Liste markieren

Wieder Zeit zum Üben! Genau wie bei der vorherigen Aufgabe möchten wir, dass Sie die vorherige geordnete Liste selbst markieren.

1. Klicken Sie auf **"Play"** in der gerenderten Code-Ausgabe unten, um das Beispiel im MDN Playground zu bearbeiten.
2. Verwandeln Sie die einzelnen Textelemente in eine geordnete Liste.

Wenn Sie einen Fehler machen, können Sie Ihre Arbeit mit der _Zurücksetzen_-Schaltfläche im MDN Playground löschen. Wenn Sie nicht weiterkommen, schauen Sie sich noch einmal das vorherige Code-Snippet an.

```html hidden live-sample___lists_2
Drive to the end of the road Turn right Go straight across the first two
roundabouts Turn left at the third roundabout The school is on your right, 300
meters up the road
```

{{ EmbedLiveSample('lists_2', "100%", 60) }}

## Unsere Rezeptseite markieren

Nun zu einer echten Herausforderung! An diesem Punkt des Artikels haben Sie alle Informationen, die Sie benötigen, um einen etwas komplexeren Inhaltsbereich zu markieren. Wir möchten, dass Sie die Anweisungen für unser Lieblingshummus-Rezept markieren.

Sie können entweder:

- Eine lokale Kopie unserer [text-start.html](https://github.com/mdn/learning-area/blob/main/html/introduction-to-html/html-text-formatting/text-start.html) Startdatei speichern und die Arbeit in Ihrem Code-Editor durchführen.
- Klicken Sie auf **"Play"** in der gerenderten Code-Ausgabe unten, um das Beispiel im MDN Playground zu bearbeiten.

Die Anweisungen, denen Sie folgen sollen, sind:

1. Markieren Sie den Hauptseitentitel mithilfe eines `<h1>`-Elements und die drei Untertitel mithilfe von `<h2>`-Elementen.
2. Es gibt fünf Textzeilen, die sinnvollerweise mit `<p>`-Elementen markiert werden können. Tun Sie dies jetzt.
3. Markieren Sie die Liste der Zutaten als ungeordnete Liste.
4. Markieren Sie die Liste der Anweisungen als geordnete Liste.

Wenn Sie einen Fehler machen, können Sie Ihre Arbeit mit der _Zurücksetzen_-Schaltfläche im MDN Playground löschen. Wenn Sie wirklich nicht weiterkommen, können Sie sich die Lösung unterhalb der Code-Ausgabe ansehen.

```html-nolint live-sample___lists_3
Quick hummus recipe

This recipe makes quick, tasty hummus, with no messing. It has been adapted from a number of different recipes that I have read over the years.

Hummus is a delicious thick paste used heavily in Greek and Middle Eastern dishes. It is very tasty with salad, grilled meats and pitta breads.

Ingredients

1 can (400g) of chick peas (garbanzo beans)
175g of tahini
6 sundried tomatoes
Half a red pepper
A pinch of cayenne pepper
1 clove of garlic
A dash of olive oil

Instructions

Remove the skin from the garlic, and chop coarsely
Remove all the seeds and stalk from the pepper, and chop coarsely
Add all the ingredients into a food processor
Process all the ingredients into a paste
If you want a coarse "chunky" hummus, process it for a short time
If you want a smooth hummus, process it for a longer time

For a different flavor, you could try blending in a small measure of lemon and coriander, chili pepper, lime and chipotle, harissa and mint, or spinach and feta cheese. Experiment and see what works for you.

Storage

Refrigerate the finished hummus in a sealed container. You should be able to use it for about a week after you've made it. If it starts to become fizzy, you should definitely discard it.

Hummus is suitable for freezing; you should thaw it and use it within a couple of months.
```

{{ EmbedLiveSample('lists_3', "100%", 260) }}

<details>
<summary>Klicken Sie hier, um die Lösung anzuzeigen</summary>

Sie finden ein Beispiel für das korrekte HTML für dieses Beispiel unter [text-complete.html](https://github.com/mdn/learning-area/blob/main/html/introduction-to-html/html-text-formatting/text-complete.html) in unserem GitHub-Repo.

</details>

## Verschachteln von Listen

Es ist vollkommen in Ordnung, eine Liste innerhalb einer anderen Liste zu verschachteln. Möglicherweise möchten Sie einige Unterpunkte unter einem Hauptpunkt haben. Nehmen wir die zweite Liste aus unserem Rezeptbeispiel:

```html
<ol>
  <li>Remove the skin from the garlic, and chop coarsely.</li>
  <li>Remove all the seeds and stalk from the pepper, and chop coarsely.</li>
  <li>Add all the ingredients into a food processor.</li>
  <li>Process all the ingredients into a paste.</li>
  <li>If you want a coarse "chunky" hummus, process it for a short time.</li>
  <li>If you want a smooth hummus, process it for a longer time.</li>
</ol>
```

Da die letzten beiden Punkte in sehr engem Zusammenhang mit dem vorherigen stehen (sie lesen sich wie Unteranweisungen oder Optionen, die unter diesen Punkt passen), könnte es sinnvoll sein, sie in einer eigenen ungeordneten Liste zu verschachteln und diese Liste im aktuellen vierten Punkt einzufügen. Das würde so aussehen:

```html
<ol>
  <li>Remove the skin from the garlic, and chop coarsely.</li>
  <li>Remove all the seeds and stalk from the pepper, and chop coarsely.</li>
  <li>Add all the ingredients into a food processor.</li>
  <li>
    Process all the ingredients into a paste.
    <ul>
      <li>
        If you want a coarse "chunky" hummus, process it for a short time.
      </li>
      <li>If you want a smooth hummus, process it for a longer time.</li>
    </ul>
  </li>
</ol>
```

Versuchen Sie, zur vorherigen Aufgabe zurückzukehren und die zweite Liste auf diese Weise zu aktualisieren.

## Definitionslisten

Der Zweck von Definitionslisten besteht darin, eine Reihe von Elementen und ihre zugehörigen Beschreibungen zu markieren, wie Begriffe und Definitionen oder Fragen und Antworten. Schauen wir uns ein Beispiel für eine Reihe von Begriffen und Definitionen an:

```plain
soliloquy
In drama, where a character speaks to themselves, representing their inner thoughts or feelings and in the process relaying them to the audience (but not to other characters.)
monologue
In drama, where a character speaks their thoughts out loud to share them with the audience and any other characters present.
aside
In drama, where a character shares a comment only with the audience for humorous or dramatic effect. This is usually a feeling, thought or piece of additional background information
```

Definitionslisten verwenden eine andere Umhüllung als die anderen Listentypen — {{htmlelement("dl")}}; außerdem wird jeder Begriff in ein {{htmlelement("dt")}}-Element (Definitionsbegriff) und jede Beschreibung in ein {{htmlelement("dd")}}-Element (Definitionsbeschreibung) eingefasst.

### Beispiel für eine Definitionsliste

Lassen Sie uns unser Beispiel fertig markieren:

```html
<dl>
  <dt>soliloquy</dt>
  <dd>
    In drama, where a character speaks to themselves, representing their inner
    thoughts or feelings and in the process relaying them to the audience (but
    not to other characters.)
  </dd>
  <dt>monologue</dt>
  <dd>
    In drama, where a character speaks their thoughts out loud to share them
    with the audience and any other characters present.
  </dd>
  <dt>aside</dt>
  <dd>
    In drama, where a character shares a comment only with the audience for
    humorous or dramatic effect. This is usually a feeling, thought, or piece of
    additional background information.
  </dd>
</dl>
```

Die Standardstile des Browsers zeigen Definitionslisten mit etwas weiter eingerückten Beschreibungen an.

{{EmbedLiveSample('Description_list_example', '100%', '285px')}}

### Mehrere Beschreibungen für einen Begriff

Es ist erlaubt, einen einzelnen Begriff mit mehreren Beschreibungen zu haben, zum Beispiel:

```html
<dl>
  <dt>aside</dt>
  <dd>
    In drama, where a character shares a comment only with the audience for
    humorous or dramatic effect. This is usually a feeling, thought, or piece of
    additional background information.
  </dd>
  <dd>
    In writing, a section of content that is related to the current topic, but
    doesn't fit directly into the main flow of content so is presented nearby
    (often in a box off to the side.)
  </dd>
</dl>
```

{{EmbedLiveSample('Multiple_descriptions_for_one_term', '100%', '193px')}}

### Ein Set von Definitionen markieren

Nun ist es an der Zeit, dass Sie selbst eine Definitionsliste markieren:

1. Klicken Sie auf **"Play"** im Codeblock unten, um das Beispiel im MDN Playground zu bearbeiten.
2. Verwenden Sie geeignete Elemente, um die drei Begriffe und vier Beschreibungen im Inhalt zu markieren. Beachten Sie, dass der dritte Begriff zwei Beschreibungen hat.

Wenn Sie einen Fehler machen, können Sie Ihre Arbeit mit der _Zurücksetzen_-Schaltfläche im MDN Playground löschen. Wenn Sie wirklich nicht weiterkommen, können Sie sich die Lösung unterhalb des Codeblocks ansehen.

```html-nolint live-sample___lists_4
Love
The glue that binds the world together.
Eggs
The glue that binds the cake together.
Coffee
The drink that gets the world running in the morning.
A light brown color.
```

{{ EmbedLiveSample('lists_4', "100%", 60) }}

<details>
<summary>Klicken Sie hier, um die Lösung anzuzeigen</summary>

Ihr fertiges HTML sollte so aussehen:

```html
<dl>
  <dt>Love</dt>
  <dd>The glue that binds the world together.</dd>
  <dt>Eggs</dt>
  <dd>The glue that binds the cake together.</dd>
  <dt>Coffee</dt>
  <dd>The drink that gets the world running in the morning.</dd>
  <dd>A light brown color.</dd>
</dl>
```

</details>

## Testen Sie Ihre Fähigkeiten!

Sie haben das Ende dieser Reihe von drei Artikeln über grundlegende HTML-Semantikelemente erreicht, aber erinnern Sie sich an die wichtigsten Informationen? Sie können weitere Tests finden, um zu überprüfen, ob Sie diese Informationen behalten haben, bevor Sie weitermachen — siehe [Testen Sie Ihre Fähigkeiten: Grundlagen des HTML-Textes](/de/docs/Learn_web_development/Core/Structuring_content/Test_your_skills/HTML_text_basics).

## Zusammenfassung

Das war es zu Listen. Als nächstes gehen wir zu einer Diskussion auf höherer Ebene über. Wir haben gezeigt, wie man einige einzelne Seitenfeatures implementiert, aber was ist mit dem Strukturieren einer gesamten HTML-Seite? Die Strukturierung von Dokumenten ist als nächstes dran.

{{PreviousMenuNext("Learn_web_development/Core/Structuring_content/Emphasis_and_importance", "Learn_web_development/Core/Structuring_content/Structuring_documents", "Learn_web_development/Core/Structuring_content")}}
