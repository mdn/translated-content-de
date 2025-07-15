---
title: Kochbuch-Vorlage
slug: Web/CSS/Layout_cookbook/Contribute_a_recipe/Cookbook_template
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

> [!NOTE]
> Dies ist eine Vorlagenseite für eine CSS-Kochbuchseite. Bitte verwenden Sie dies als Rohvorlage, wenn Sie eine neue Kochbuchseite erstellen.
> _Kommentare in Kursivschrift sind Informationen darüber, wie ein Teil der Vorlage verwendet wird._

_Beschreibung des Problems, das dieses Rezept löst, oder des Musters, das Sie demonstrieren._

## Anforderungen

_Was muss dieses Muster enthalten oder welche Probleme muss es lösen? Listen Sie das hier auf._

## Rezept

_Ändern Sie den Beispielcode. Der letzte Parameter ist die Höhe des Live-Beispiels, die Sie nach Bedarf ändern können. Erwähnen Sie, dass Sie auf "Play" in den Codeblöcken klicken können, um das Beispiel im MDN Playground zu bearbeiten._

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

_Erklären Sie Ihre Entscheidungen bei der Erstellung des Musters. Warum haben Sie eine bestimmte Methode gewählt? Wenn Sie hier ein zusätzliches Beispiel hinzufügen möchten – zum Beispiel eine Version mit Fallbacks – tun Sie dies bitte. Dieser Abschnitt ist bewusst flexibel gehalten, da Muster von sehr einfach bis hin zu komplexer reichen._

## Nützliche Fallbacks oder alternative Methoden

_Wenn es nützliche alternative Methoden zum Erstellen des Rezepts gibt oder Fallback-Rezepte, die Sie verwenden können, falls Sie nicht unterstützende Browser unterstützen müssen, fügen Sie diese in separaten Abschnitten hier unten ein._

## Barrierefreiheit

_Fügen Sie dies ein, wenn es spezifische Dinge zu beachten gibt, die die Barrierefreiheit betreffen. Wenn dies für Ihr Muster nicht relevant ist, kann dieser Abschnitt weggelassen werden._

## Siehe auch

- _Links zu verknüpften Eigenschaften: `example-property`_
- _Links zu Artikeln, die zeigen, wie die Eigenschaft im Kontext verwendet wird: "Using … article"_
- _Sehr gute externe Links. Haben Sie keine Angst vor externen Links, aber sie sollten herausragend sein und nicht nur kleinere Details erwähnen._
