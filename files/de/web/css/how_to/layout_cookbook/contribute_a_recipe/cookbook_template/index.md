---
title: Cookbook-Vorlage
slug: Web/CSS/How_to/Layout_cookbook/Contribute_a_recipe/Cookbook_template
l10n:
  sourceCommit: f3bf4e2bd456159093d3820253be9f266ace070a
---

> [!NOTE]
> Dies ist eine Vorlagenseite für eine CSS-Cookbook-Seite. Bitte verwenden Sie dies als Rohvorlage, wenn Sie eine neue Cookbook-Seite erstellen.
> _Kommentare in Kursivschrift sind Informationen darüber, wie Teile der Vorlage verwendet werden._

_Beschreibung des Problems, das dieses Rezept löst, oder des Musters, das Sie demonstrieren._

## Anforderungen

_Was muss dieses Muster beinhalten oder welche Probleme muss es lösen? Listen Sie das hier auf._

## Rezept

_Ändern Sie den Beispielcode. Der letzte Parameter ist die Höhe des Live-Beispiels, die Sie nach Bedarf ändern können. Erwähnen Sie, dass Sie im MDN Playground auf "Play" klicken können, um das Beispiel zu bearbeiten._

```html live-sample___center-example
<div class="container">
  <div class="item">I am centered!</div>
</div>
```

```css live-sample___center-example
.container {
  border: 2px solid rgb(75 70 74);
  border-radius: 0.5em;

  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.item {
  border: 2px solid rgb(95 97 110);
  border-radius: 0.5em;
  padding: 20px;

  width: 10em;
}
```

{{EmbedLiveSample("center-example", "", "250px")}}

## Getroffene Entscheidungen

_Erklären Sie Ihre Entscheidungen bei der Erstellung des Musters. Warum haben Sie eine bestimmte Methode gewählt? Wenn Sie hier ein zusätzliches Beispiel hinzufügen möchten — zum Beispiel eine Version mit Fallbacks, tun Sie dies bitte. Dieser Abschnitt ist absichtlich locker gehalten, da Muster von sehr einfach bis komplexer reichen._

## Nützliche Fallbacks oder alternative Methoden

_Wenn es nützliche alternative Methoden für den Aufbau des Rezepts gibt oder Fallback-Rezepte, die verwendet werden können, wenn Sie nicht unterstützende Browser unterstützen müssen, fügen Sie sie in separaten Abschnitten hier ein._

## Barrierefreiheitsbedenken

_Einschließen, wenn es spezifische Dinge gibt, auf die in Bezug auf Barrierefreiheit geachtet werden muss. Wenn dies für Ihr Muster nicht relevant ist, kann dieser Abschnitt weggelassen werden._

## Siehe auch

- _Links zu verwandten Eigenschaften: `example-property`_
- _Links zu Artikeln, die zeigen, wie die Eigenschaft im Kontext verwendet wird: "Verwendung … Artikel"_
- _Sehr gute externe Links. Scheuen Sie sich nicht vor externen Links, aber sie sollten herausragend sein und nicht nur kleine Details erwähnen._
