---
title: Cookbook-Vorlage
slug: Web/CSS/Layout_cookbook/Contribute_a_recipe/Cookbook_template
l10n:
  sourceCommit: eaec5c4226ac64696a95314a7bce995165a4d124
---

{{CSSRef}}

> [!NOTE]
> Dies ist eine Vorlagenseite für eine CSS-Cookbook-Seite. Bitte verwenden Sie dies als Rohvorlage, wenn Sie eine neue Cookbook-Seite erstellen.
> _Kommentare in Kursivschrift sind Informationen darüber, wie Teile der Vorlage verwendet werden._

_Beschreibung des Problems, das dieses Rezept löst, oder des Musters, das Sie demonstrieren._

## Anforderungen

_Was muss dieses Muster beinhalten oder welche Probleme muss es lösen? Listen Sie das hier auf._

## Rezept

_Ändern Sie den Beispielcode. Der letzte Parameter ist die Höhe des Live-Beispiels, die Sie nach Bedarf ändern können. Erwähnen Sie, dass Sie im MDN Playground auf „Abspielen“ in den Codeblöcken klicken können, um das Beispiel zu bearbeiten._

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

_Erklären Sie Ihre Entscheidungen beim Erstellen des Musters. Warum haben Sie eine bestimmte Methode gewählt? Wenn Sie hier ein zusätzliches Beispiel hinzufügen möchten — zum Beispiel eine Version mit Fallbacks, tun Sie dies bitte. Dieser Abschnitt ist absichtlich locker gehalten, da Muster von sehr einfach bis komplexer reichen._

## Nützliche Fallbacks oder alternative Methoden

_Wenn es nützliche alternative Methoden zum Erstellen des Rezepts oder Fallback-Rezepte gibt, die Sie verwenden können, wenn Sie Browser unterstützen müssen, die es nicht unterstützen, fügen Sie sie in separaten Abschnitten hier unten hinzu._

## Zugänglichkeitsbedenken

_Fügen Sie dies hinzu, wenn es spezielle Dinge zu beachten gibt, was die Barrierefreiheit betrifft. Wenn es für Ihr Muster nicht relevant ist, kann dieser Punkt weggelassen werden._

## Siehe auch

- _Links zu verwandten Eigenschaften: `example-property`_
- _Links zu Artikeln, die zeigen, wie die Eigenschaft im Kontext verwendet wird: "Using … article"_
- _Sehr gute externe Links. Haben Sie keine Angst vor externen Links, aber sie sollten herausragend sein und nicht nur unbedeutende Details erwähnen._
