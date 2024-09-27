---
title: aria-owns
slug: Web/Accessibility/ARIA/Attributes/aria-owns
l10n:
  sourceCommit: 194bd13942ad0c532c92d364e0d5d0c36732d98c
---

{{AccessibilitySidebar}}

Das `aria-owns` Attribut identifiziert ein Element (oder Elemente), um eine visuelle, funktionale oder kontextuelle Beziehung zwischen einem Eltern- und seinen Kindelementen zu definieren, wenn die DOM-Hierarchie nicht verwendet werden kann, um die Beziehung darzustellen.

## Beschreibung

Jedes Element ist das Elternteil, Geschwister oder Kind eines anderen Elements. Das Dokumentenobjekt, bestehend aus HTML-Elementen und Textknoten, bildet die Grundlage des DOM-Baums. Das Accessibility Object Model (<abbr>AOM</abbr>) basiert auf einem gut strukturierten DOM, um unterstützenden Technologien zu ermöglichen, den Benutzern sinnvolle Informationen über die Inhalte eines Dokuments zu vermitteln.

Es gibt Umstände, in denen das auf dem Bildschirm angezeigte Layout von der zugrunde liegenden DOM-Struktur abweichen kann, da JavaScript in der Lage ist, Inhalte zu ändern und CSS das Layout ändern kann. In diesem Fall kann das `aria-owns` Attribut verwendet werden, um eine sinnvolle Beziehung für unterstützende Technologien, die das DOM konsumieren, wiederherzustellen.

Wenn Elemente visuell miteinander in Beziehung stehen, aber im DOM nicht assoziiert sind, ermöglicht das `aria-owns` Attribut, die auf dem Bildschirm erscheinende Beziehung in der Barrierefreiheitsschicht für die Verwendung durch unterstützende Technologien zu erstellen. Der **einzige** Grund, `aria-owns` einzuschließen, besteht darin, eine Eltern-Kind-Kontextbeziehung gegenüber unterstützenden Technologien offenzulegen, wenn die Konstruktion des DOM diese Beziehung nicht bereitstellen kann.

Ein "besitzendes Element" ist ein beliebiger DOM-Vorfahre eines Elements. Wenn ein Element visuell, funktional oder kontextuell erscheint, ein Element zu "besitzen" (ein Vorfahre zu sein), das im DOM jedoch kein tatsächlicher Vorfahre des Elements ist, fügen Sie das `aria-owns` hinzu, um diese Beziehung zu erstellen. Fügen Sie das Attribut dem besitzenden Element hinzu mit einem Verweis auf das nicht-kindliche besessene Element (oder die Elemente), um unterstützenden Technologien zu sagen, dass ein Element als Kind behandelt werden soll.

Durch das Referenzieren der ID von einem oder mehreren Elementen kann jedes Element ein anderes Element mit einer `aria-owns`-Deklaration "besitzen". Der Wert des `aria-owns` Attributs ist eine durch Leerzeichen getrennte ID-Referenzliste, die sich auf die IDs von einem oder mehreren Elementen im Dokument bezieht.

> [!NOTE]
> Ein "besessenes" Element ist ein beliebiger DOM-Nachkomme des Elements, jedes Element, das als Kind über `aria-owns` angegeben wurde, oder jeder DOM-Nachkomme des besessenen Kindes. Das `aria-owns`-besessene Element sollte ein Element sein, das zu einem separaten Elterbaum im DOM gehört, aber als Kind des aktuellen Elements behandelt werden sollte.

Verwenden Sie `aria-owns` nicht als Ersatz für die DOM-Hierarchie. Wenn die Beziehung im DOM dargestellt ist, verwenden Sie `aria-owns` nicht.

Ein Kind-Element wird standardmäßig von seinem DOM-Elternteil besessen: in diesem Fall sollte `aria-owns` nicht verwendet werden. Vermeiden Sie die Verwendung des `aria-owns` Attributs, um bestehende Kindelemente in eine andere Reihenfolge zu bringen.

Stellen Sie sicher, dass Sie bei der Verwendung von `aria-owns` [die Fokusreihenfolge verwalten](https://css-tricks.com/focus-management-and-inert/). Stellen Sie sicher, dass die visuelle Fokusreihenfolge dieser Lesereihenfolge für unterstützende Technologien entspricht.

Ein Beispiel für die Verwendung von `aria-owns` umfasst Popup-Untermenüs, die visuell in der Nähe eines übergeordneten Menüs erscheinen, im DOM jedoch nicht innerhalb des übergeordneten Menüs verschachtelt werden können, da dies die visuelle Darstellung beeinträchtigen würde. Verwenden Sie in diesem Fall `aria-owns`, um das Untermenü als ein Kind des übergeordneten Menüs für einen Bildschirmleser darzustellen.

> [!NOTE]
> Das `aria-owns` Attribut sollte nur verwendet werden, wenn die Eltern-Kind-Beziehung aus dem DOM nicht erkannt werden kann.

Wenn ein Element sowohl `aria-owns` als auch DOM-Kinder hat, ist die Reihenfolge der Kindelemente:

1. Die tatsächlichen DOM-Kinder zuerst,
2. Dann die in `aria-owns` referenzierten Elemente.

Diese Reihenfolge kann geändert werden, indem die ID-Referenzen zu den tatsächlichen DOM-Kindern im `aria-owns` Wert eingeschlossen werden.

Die {{CSSXRef('order')}} Eigenschaft, Teil von Flex- oder Grid-Layouts, kann verwendet werden, um die Reihenfolge von Flex- und Gitterelementen zu ändern, sodass sie in einer anderen Reihenfolge erscheinen als in der Quelldokumentation. Während es verlockend sein mag, die Barrierefreiheitsschicht an die von der CSS {{CSSXRef('order')}} Eigenschaft erzeugte Ordnungsänderung anzupassen, ist es am besten, sowohl auf die `order` Eigenschaft als auch das `aria-owns` Attribut zu verzichten.

Stellen Sie sicher, dass Ihre besessenen Elemente nur einen Besitzer haben. Geben Sie die `id` eines Elements nicht in mehr als einem anderen Element-`aria-owns` Attribut an. Ein Element kann nur einen Besitzer haben.

> [!WARNING]
> Während [`aria-owns` jetzt unterstützt wird](https://a11ysupport.io/tech/aria/aria-owns_attribute) in allen modernen Browsern, wird `aria-owns` möglicherweise für Benutzer von MacOS und iOS mit VoiceOver vor iOS 17.3 und macOS 14.3 nicht angezeigt.

## Werte

- `id` Liste
  - : Durch Leerzeichen getrennte Liste von einem oder mehreren ID-Werten, die die von dem aktuellen Element besessenen Elemente referenzieren

## Zugeordnete Rollen

Wird in **ALLEN** Rollen verwendet.

## Spezifikationen

{{Specifications}}

## Siehe auch

- [`aria-controls`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-controls)
- [`aria-owns` Browser-Unterstützung](https://a11ysupport.io/tech/aria/aria-owns_attribute)
