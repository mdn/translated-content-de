---
title: aria-owns
slug: Web/Accessibility/ARIA/Reference/Attributes/aria-owns
l10n:
  sourceCommit: f65f7f6e4fda2cb1bd0e7db17777e2cb20be7d27
---

Das Attribut `aria-owns` identifiziert ein Element (oder mehrere Elemente), um eine visuelle, funktionale oder kontextuelle Beziehung zwischen einem übergeordneten Element und seinen Kindelementen zu definieren, wenn die DOM-Hierarchie nicht zur Darstellung der Beziehung verwendet werden kann.

## Beschreibung

Jedes Element ist das übergeordnete, benachbarte oder untergeordnete Element eines anderen Elements. Das Dokumentobjekt, bestehend aus HTML-Elementen und Textknoten, bildet die Grundlage des DOM-Baums. Das Accessibility Object Model (<abbr>AOM</abbr>) stützt sich auf ein gut aufgebautes DOM, um unterstützenden Technologien zu ermöglichen, bedeutungsvolle Informationen über die Inhalte eines Dokuments an Benutzer weiterzugeben.

Es gibt Umstände, in denen das Layout, das auf dem Bildschirm erscheint, von der zugrunde liegenden DOM-Struktur abweichen kann, da JavaScript in der Lage ist, Inhalte zu ändern, und CSS das Layout verändern kann. In diesem Fall kann das Attribut `aria-owns` verwendet werden, um eine sinnvolle Beziehung für unterstützende Technologien herzustellen, die das DOM nutzen.

Wenn Elemente visuell zusammengehörig erscheinen, aber im DOM nicht verknüpft sind, ermöglicht das Attribut `aria-owns` das Erstellen der auf dem Bildschirm sichtbaren Beziehung in der Barrierefreiheits-Ebene zur Nutzung durch unterstützende Technologien. Der **einzige** Grund für die Verwendung von `aria-owns` besteht darin, eine übergeordnete/untergeordnete kontextuelle Beziehung für unterstützende Technologien offenzulegen, wenn die Struktur des DOM diese Beziehung nicht bereitstellen kann.

Ein "besitzendes Element" ist ein beliebiger DOM-Vorfahre eines Elements. Wenn ein Element visuell, funktional oder kontextuell erscheint, als würde es ein anderes Element "besitzen" (ein Vorfahre sein), tatsächlich jedoch im DOM kein Vorfahre des Elements ist, fügen Sie `aria-owns` hinzu, um diese Beziehung herzustellen. Fügen Sie das Attribut dem besitzenden Element hinzu und verweisen Sie auf das nicht-Kind-Element (oder die Elemente), um unterstützenden Technologien mitzuteilen, dass ein Element als Kind behandelt werden soll.

Die Referenzierung der ID eines oder mehrerer Elemente erlaubt es jedem Element, jedes andere Element mithilfe einer `aria-owns`-Erklärung "zu besitzen". Der Wert des Attributs `aria-owns` ist eine durch Leerzeichen getrennte ID-Referenzliste, die auf die IDs eines oder mehrerer Elemente im Dokument verweist.

> [!NOTE]
> Ein "besessenes Element" ist jedes DOM-Nachkommelement des Elements, jedes Element, das über `aria-owns` als Kind angegeben wird, oder jeder DOM-Nachkomme des besessenen Kindes. Das durch `aria-owns` besessene Element sollte einem anderen übergeordneten Baum im DOM angehören, jedoch als Kind des aktuellen Elements behandelt werden.

Verwenden Sie `aria-owns` nicht als Ersatz für die DOM-Hierarchie. Wenn die Beziehung im DOM dargestellt wird, verwenden Sie `aria-owns` nicht.

Ein Kindelement wird standardmäßig von seinem DOM-Elternelement besessen: in diesem Fall sollte `aria-owns` nicht verwendet werden. Vermeiden Sie die Verwendung des Attributs `aria-owns`, um bestehende Kindelemente in eine andere Reihenfolge zu bringen.

Stellen Sie bei der Verwendung von `aria-owns` sicher, dass Sie die [Fokusreihenfolge verwalten](https://css-tricks.com/focus-management-and-inert/). Stellen Sie sicher, dass die visuelle Fokusreihenfolge der Lesereihenfolge der unterstützenden Technologie entspricht.

Ein Beispiel, wann `aria-owns` verwendet werden sollte, sind Pop-up-Untermenüs, die visuell in der Nähe eines übergeordneten Menüs erscheinen, jedoch nicht im DOM innerhalb des übergeordneten Menüs verschachtelt werden können, da dies die visuelle Darstellung beeinträchtigen würde. In diesem Fall verwenden Sie `aria-owns`, um das Untermenü für einen Screenreader als Kind des übergeordneten Menüs darzustellen.

> [!NOTE]
> Das Attribut `aria-owns` sollte nur verwendet werden, wenn die Eltern-Kind-Beziehung nicht aus dem DOM bestimmt werden kann.

Wenn ein Element sowohl DOM-Kinder als auch `aria-owns`-Elemente hat, folgt die Reihenfolge der Kindelemente:

1. Zuerst die tatsächlichen DOM-Kinder,
2. dann die in `aria-owns` referenzierten Elemente.

Diese Reihenfolge kann geändert werden, indem die ID-Referenzen zu den tatsächlichen DOM-Kindern im Wert von `aria-owns` aufgenommen werden.

Die {{CSSXRef('order')}}-Eigenschaft, Teil von Flex- oder Rasterlayouts, kann verwendet werden, um die Reihenfolge von Flex- und Rasterelementen zu ändern, sodass sie in einer anderen Reihenfolge als in dem Quelldokument erscheinen, was eine Abweichung der logischen Reihenfolge der Elemente erzeugt. Obwohl es verlockend sein mag, die Barrierefreiheits-Ebene so zu ordnen, dass sie den durch die CSS-{{CSSXref('order')}}-Eigenschaft vorgenommenen Reihenfolgenänderungen entspricht, ist es am besten, sowohl die `order`-Eigenschaft als auch das Attribut `aria-owns` zu vermeiden.

Stellen Sie sicher, dass Ihre besessenen Elemente nur einen Besitzer haben. Geben Sie die `id` eines Elements nicht in mehr als einem `aria-owns`-Attribut eines anderen Elements an. Ein Element kann nur einen Besitzer haben.

> [!WARNING]
> Obwohl [`aria-owns` mittlerweile in allen modernen Browsern unterstützt wird](https://a11ysupport.io/tech/aria/aria-owns_attribute), wird `aria-owns` möglicherweise Benutzern von macOS und iOS mit VoiceOver vor iOS 17.3 und macOS 14.3 nicht präsentiert.

## Werte

- `id`-Liste
  - : Durch Leerzeichen getrennte Liste von einer oder mehreren ID-Werten, die auf die Elemente verweisen, die vom aktuellen Element besessen werden

## Zugehörige Rollen

Verwendet in **ALLEN** Rollen.

## Spezifikationen

{{Specifications}}

## Siehe auch

- [`aria-controls`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-controls)
- [`aria-owns`-Browser-Unterstützung](https://a11ysupport.io/tech/aria/aria-owns_attribute)
