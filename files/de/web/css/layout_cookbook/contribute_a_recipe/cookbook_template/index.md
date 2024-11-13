---
title: Kochbuchvorlage
slug: Web/CSS/Layout_cookbook/Contribute_a_recipe/Cookbook_template
l10n:
  sourceCommit: 507825f6292eb73f0a96419d69870d9330b6776f
---

{{CSSRef}}

> [!NOTE]
> Dies ist eine Vorlagenseite für eine CSS-Kochbuchseite. Bitte verwenden Sie dies als Rohvorlage, wenn Sie eine neue Kochbuchseite erstellen.
> _Kommentare in Kursivschrift sind Informationen darüber, wie Sie Teile der Vorlage verwenden._

_Beschreibung des Problems, das dieses Rezept löst, oder des Musters, das Sie demonstrieren._

## Anforderungen

_Was muss dieses Muster beinhalten oder welche Probleme muss es lösen? Listen Sie das hier auf._

## Rezept

_Ändern Sie den Beispielcode. Der letzte Parameter ist die Höhe des Live-Beispiels, die Sie nach Bedarf ändern können. Erwähnen Sie, dass Sie im MDN Playground auf "Play" klicken können, um das Beispiel in den Code-Blöcken zu bearbeiten._

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

_Wenn es nützliche alternative Methoden für die Erstellung des Rezepts gibt oder Fallback-Rezepte, die Sie verwenden können, wenn Sie nicht unterstützende Browser berücksichtigen müssen, schließen Sie sie hier in separaten Abschnitten ein._

## Barrierefreiheitshinweise

_Fügen Sie dies ein, wenn es spezielle Dinge gibt, die in Bezug auf Barrierefreiheit beachtet werden müssen. Wenn es für Ihr Muster nicht relevant ist, kann dieser Punkt weggelassen werden._

## Siehe auch

- _Links zu verwandten Eigenschaften: {{Cssxref("example-property")}}_
- _Links zu Artikeln, die zeigen, wie man die Eigenschaft im Kontext verwendet: "Verwendung von … Artikel"_
- _Sehr gute externe Links. Scheuen Sie sich nicht vor externen Links, aber sie sollten herausragend sein und nicht nur kleine Details erwähnen._
