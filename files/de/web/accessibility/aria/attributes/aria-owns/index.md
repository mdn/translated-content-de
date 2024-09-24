---
title: aria-owns
slug: Web/Accessibility/ARIA/Attributes/aria-owns
l10n:
  sourceCommit: 194bd13942ad0c532c92d364e0d5d0c36732d98c
---

{{AccessibilitySidebar}}

Das Attribut `aria-owns` identifiziert ein Element (oder mehrere Elemente), um eine visuelle, funktionale oder kontextuelle Beziehung zwischen einem übergeordneten und seinen untergeordneten Elementen zu definieren, wenn die DOM-Hierarchie nicht zur Darstellung der Beziehung genutzt werden kann.

## Beschreibung

Jedes Element ist das übergeordnete, gleichgeordnete oder untergeordnete Element eines anderen Elements. Das Dokumentobjekt, bestehend aus HTML-Elementen und Textknoten, bildet die Grundlage des DOM-Baums. Das Accessibility Object Model (<abbr>AOM</abbr>) basiert auf einem gut aufgebauten DOM, um unterstützenden Technologien die Möglichkeit zu geben, den Benutzern bedeutsame Informationen über den Inhalt eines Dokuments zu vermitteln.

Es gibt Umstände, in denen das Layout, das auf dem Bildschirm erscheint, von der zugrunde liegenden DOM-Struktur abweichen kann, da JavaScript in der Lage ist, Inhalte zu verändern und CSS das Layout zu ändern. In solchen Fällen kann das Attribut `aria-owns` verwendet werden, um eine sinnvolle Beziehung für unterstützende Technologien, die das DOM konsumieren, wiederherzustellen.

Wenn Elemente optisch miteinander verbunden erscheinen, aber im DOM nicht zugeordnet sind, ermöglicht das Attribut `aria-owns` die Erstellung der Beziehung, die auf dem Bildschirm erscheint, in der Barrierefreiheitsschicht zur Nutzung durch unterstützende Technologien. Der **einzige** Grund, `aria-owns` einzuschließen, ist, eine übergeordnete/untergeordnete kontextuelle Beziehung für unterstützende Technologien offenzulegen, wenn die Konstruktion des DOMs diese Beziehung nicht bieten kann.

Ein "besitzendes Element" ist jeder DOM-Vorfahre eines Elements. Wenn ein Element optisch, funktional oder kontextuell so erscheint, als würde es ein Element "besitzen" (ein Vorfahre eines Elements sein), aber tatsächlich kein Vorfahre des Elements im DOM ist, fügen Sie das `aria-owns` hinzu, um diese Beziehung zu erstellen. Fügen Sie das Attribut dem übergeordneten Element mit einem Verweis auf das nicht untergeordnete besessene Element (oder die Elemente) hinzu, um unterstützenden Technologien mitzuteilen, dass ein Element als untergeordnet behandelt werden soll.

Durch das Referenzieren der ID eines oder mehrerer Elemente kann jedes Element mit einer `aria-owns`-Deklaration jedes andere Element "besitzen". Der Wert des Attributs `aria-owns` ist eine durch Leerzeichen getrennte ID-Referenzliste, die die IDs von einem oder mehreren Elementen im Dokument referenziert.

> [!NOTE]
> Ein "besessenes" Element ist jeder DOM-Nachfahre des Elements, jedes als Kind über `aria-owns` spezifizierte Element oder jeder DOM-Nachfahre des besessenen Kindes. Das durch `aria-owns` besessene Element sollte ein Element sein, das zu einem separaten übergeordneten Baum im DOM gehört, aber als Kind des aktuellen Elements behandelt werden sollte.

Verwenden Sie `aria-owns` nicht als Ersatz für die DOM-Hierarchie. Wenn die Beziehung im DOM dargestellt wird, verwenden Sie `aria-owns` nicht.

Ein untergeordnetes Element wird standardmäßig von seinem DOM-Elternelement besessen: in diesem Fall sollte `aria-owns` nicht verwendet werden. Vermeiden Sie es, das Attribut `aria-owns` zu verwenden, um bestehende untergeordnete Elemente in eine andere Reihenfolge zu bringen.

Wenn Sie `aria-owns` verwenden, stellen Sie sicher, dass Sie [die Fokusreihenfolge verwalten](https://css-tricks.com/focus-management-and-inert/). Stellen Sie sicher, dass die visuelle Fokusreihenfolge mit dieser Lesereihenfolge von unterstützenden Technologien übereinstimmt.

Ein Beispiel, wann `aria-owns` verwendet werden soll, sind Pop-up-Untermenüs, die optisch nahe an einem übergeordneten Menü positioniert erscheinen, aber im DOM innerhalb des übergeordneten Menüs nicht verschachtelt werden können, da dies die visuelle Darstellung beeinflussen würde. In diesem Fall verwenden Sie `aria-owns`, um das Untermenü als Kind des übergeordneten Menüs einem Screenreader zu präsentieren.

> [!NOTE]
> Das Attribut `aria-owns` sollte nur verwendet werden, wenn die übergeordnete/untergeordnete Beziehung nicht aus dem DOM bestimmt werden kann.

Wenn ein Element sowohl `aria-owns` als auch DOM-Kinder hat, ist die Reihenfolge der Kind-Elemente:

1. Zuerst die tatsächlichen DOM-Kinder,
2. Dann die in `aria-owns` referenzierten Elemente.

Diese Reihenfolge kann geändert werden, indem die ID-Referenzen zu den tatsächlichen DOM-Kindern im `aria-owns`-Wert eingeschlossen werden.

Die {{CSSXRef('order')}}-Eigenschaft, die Teil von Flex- oder Grid-Layouts ist, kann verwendet werden, um die Reihenfolge von Flex- und Grid-Elementen zu ändern, sodass sie in einer anderen Reihenfolge erscheinen als die im Quelldokument, wodurch eine Abweichung der logischen Reihenfolge der Elemente entsteht. Es mag verlockend sein, die Barrierefreiheitsschicht so zu ordnen, dass sie den mit der CSS-{{CSSXref('order')}}-Eigenschaft erstellten Reihenfolgeänderungen entspricht, doch das Vermeiden sowohl der `order`-Eigenschaft als auch des `aria-owns`-Attributs ist die beste Option.

Stellen Sie sicher, dass Ihre besessenen Elemente nur einen Besitzer haben. Geben Sie die `id` eines Elements nicht mehr als einem anderen Element in deren `aria-owns`-Attribut an. Ein Element kann nur einen Besitzer haben.

> [!WARNING]
> Obwohl [`aria-owns` jetzt in allen modernen Browsern unterstützt wird](https://a11ysupport.io/tech/aria/aria-owns_attribute), wird `aria-owns` möglicherweise nicht für Benutzer von MacOS und iOS mit VoiceOver vor iOS 17.3 und macOS 14.3 dargestellt.

## Werte

- `id` Liste
  - : Durch Leerzeichen getrennte Liste von einer oder mehreren ID-Werten, die die von dem aktuellen Element besessenen Elemente referenzieren

## Zugehörige Rollen

Wird in **ALLEN** Rollen verwendet.

## Spezifikationen

{{Specifications}}

## Siehe auch

- [`aria-controls`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-controls)
- [`aria-owns` Browserunterstützung](https://a11ysupport.io/tech/aria/aria-owns_attribute)
