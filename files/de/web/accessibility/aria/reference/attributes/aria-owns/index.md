---
title: "ARIA: aria-owns-Attribut"
short-title: aria-owns
slug: Web/Accessibility/ARIA/Reference/Attributes/aria-owns
l10n:
  sourceCommit: a8b25483994fa47cf949b432ddf34a6bce2ddb2e
---

Das `aria-owns`-Attribut identifiziert ein Element (oder Elemente), um eine visuelle, funktionale oder kontextuelle Beziehung zwischen einem übergeordneten Element und dessen untergeordneten Elementen zu definieren, wenn die DOM-Hierarchie zur Darstellung der Beziehung nicht verwendet werden kann.

## Beschreibung

Jedes Element ist das Elternteil, Geschwister oder Kind eines anderen Elements. Das Dokumentobjekt, bestehend aus HTML-Elementen und Textknoten, bildet die Grundlage des DOM-Baums. Das Accessibility Object Model (<abbr>AOM</abbr>) baut auf einem gut strukturierten DOM auf, um unterstützende Technologien zu ermöglichen, bedeutungsvolle Informationen über den Inhalt eines Dokuments an Benutzer weiterzugeben.

Es gibt Umstände, in denen das Layout, das auf dem Bildschirm erscheint, von der zugrundeliegenden DOM-Struktur abweichen kann, da JavaScript Inhalte verändern und CSS Layouts ändern kann. In diesem Fall kann das `aria-owns`-Attribut verwendet werden, um eine sinnvolle Beziehung für unterstützende Technologien zu rekonstruieren, die das DOM verwenden.

Wenn Elemente visuell miteinander in Beziehung stehen, aber nicht im DOM verbunden sind, ermöglicht das `aria-owns`-Attribut die Erstellung der auf dem Bildschirm erscheinenden Beziehung in der Barrierefreiheitsschicht, die von unterstützender Technologie genutzt wird. Der **einzige** Grund, `aria-owns` einzufügen, besteht darin, unterstützenden Technologien eine Eltern-Kind-Kontextbeziehung freizulegen, wenn der Aufbau des DOM diese Beziehung nicht bereitstellen kann.

Ein "besitzendes Element" ist jeder DOM-Vorfahre eines Elements. Wenn ein Element visuell, funktional oder kontextuell den Anschein erweckt, ein Element "zu besitzen" (ein Vorfahre zu sein), aber im DOM tatsächlich kein Vorfahre des Elements ist, fügen Sie das `aria-owns` hinzu, um diese Beziehung zu erstellen. Fügen Sie das Attribut dem besitzenden Element hinzu mit einem Verweis auf das nicht-untergeordnete besessene Element (oder die Elemente), um unterstützenden Technologien mitzuteilen, dass ein Element als untergeordnet behandelt werden sollte.

Durch das Referenzieren der ID von einem oder mehreren Elementen kann jedes Element mit einer `aria-owns`-Deklaration jedes andere Element "besitzen". Der Wert des `aria-owns`-Attributs ist eine durch Leerzeichen getrennte ID-Referenzliste, die die IDs von einem oder mehreren Elementen im Dokument referenziert.

> [!NOTE]
> Ein "besessenes" Element ist jeder DOM-Nachkomme des Elements, jedes als Kind spezifizierte Element über `aria-owns` oder jeder DOM-Nachkomme des besessenen Kindes. Das `aria-owns`-besessene Element sollte ein Element sein, das zu einem separaten Elternbaum im DOM gehört, aber als Kind des aktuellen Elements behandelt werden sollte.

Verwenden Sie `aria-owns` nicht als Ersatz für die DOM-Hierarchie. Wenn die Beziehung im DOM dargestellt wird, verwenden Sie `aria-owns` nicht.

Ein Kind-Element wird standardmäßig von seinem DOM-Elternteil besessen: In diesem Fall sollte `aria-owns` nicht verwendet werden. Vermeiden Sie es, das `aria-owns`-Attribut zu verwenden, um bestehende Kindelemente in eine andere Reihenfolge zu bringen.

Wenn Sie `aria-owns` verwenden, stellen Sie sicher, dass Sie [den Fokus bestellen verwalten](https://css-tricks.com/focus-management-and-inert/). Stellen Sie sicher, dass die visuelle Fokusreihenfolge dieser Lesereihenfolge von unterstützender Technologie entspricht.

Ein Beispiel, wann `aria-owns` zu verwenden ist, sind Popup-Untermenüs, die visuell in der Nähe eines übergeordneten Menüs positioniert erscheinen, aber nicht im DOM im übergeordneten Menü verschachtelt werden können, da dies die visuelle Darstellung beeinflussen würde. In diesem Fall verwenden Sie `aria-owns`, um das Untermenü einem Bildschirmleser als Kind des übergeordneten Menüs zu präsentieren.

> [!NOTE]
> Das `aria-owns`-Attribut sollte nur verwendet werden, wenn die Eltern-Kind-Beziehung nicht aus dem DOM ersichtlich ist.

Wenn ein Element sowohl `aria-owns` als auch DOM-Kinder hat, ist die Reihenfolge der Kindelemente:

1. Zuerst die tatsächlichen DOM-Kinder,
2. Dann die in `aria-owns` referenzierten Elemente.

Diese Reihenfolge kann geändert werden, indem die ID-Referenzen zu den tatsächlichen DOM-Kindern im `aria-owns`-Wert enthalten sind.

Die {{CSSXRef('order')}}-Eigenschaft, Teil von Flex- oder Grid-Layouts, kann verwendet werden, um die Reihenfolge von Flex- und Grid-Elementen zu ändern, sodass sie in einer anderen Reihenfolge erscheinen als im Quelldokument, was eine Abweichung der logischen Reihenfolge der Elemente schafft. Es mag verlockend sein, die Barrierefreiheitsschicht anzuordnen, um Reihenfolgeänderungen zu entsprechen, die mit der CSS-{{CSSXref('order')}}-Eigenschaft erstellt wurden, aber die Vermeidung sowohl der `order`-Eigenschaft als auch des `aria-owns`-Attributs ist die beste Option.

Stellen Sie sicher, dass Ihre besessenen Elemente nur einen Besitzer haben. Geben Sie die `id` eines Elements nicht in mehr als dem `aria-owns`-Attribut eines anderen Elements an. Ein Element kann nur einen Besitzer haben.

> [!WARNING]
> Während [`aria-owns` jetzt unterstützt wird](https://a11ysupport.io/tech/aria/aria-owns_attribute) in allen modernen Browsern, wird `aria-owns` möglicherweise Benutzern von macOS und iOS, die VoiceOver vor iOS 17.3 und macOS 14.3 verwenden, nicht angezeigt.

## Werte

- `id`-Liste
  - : Durch Leerzeichen getrennte Liste von einem oder mehreren ID-Werten, die die von dem aktuellen Element besessenen Elemente referenzieren

## Zugehörige Schnittstellen

- [`Element.ariaOwnsElements`](/de/docs/Web/API/Element/ariaOwnsElements)
  - : Die `ariaOwnsElements`-Eigenschaft ist Teil der Schnittstelle jedes Elements.
    Der Wert ist ein Array von Unterklassen von [`Element`](/de/docs/Web/API/Element), die die `id`-Referenzen im `aria-owns`-Attribut widerspiegeln ([mit einigen Einschränkungen](/de/docs/Web/API/Document_Object_Model/Reflected_attributes#reflected_element_references)).
- [`ElementInternals.ariaOwnsElements`](/de/docs/Web/API/ElementInternals/ariaOwnsElements)
  - : Die `ariaOwnsElements`-Eigenschaft ist Teil der Schnittstelle jedes benutzerdefinierten Elements.
    Der Wert ist ein Array von Unterklassen von [`Element`](/de/docs/Web/API/Element), die die `id`-Referenzen im `aria-owns`-Attribut widerspiegeln ([mit einigen Einschränkungen](/de/docs/Web/API/Document_Object_Model/Reflected_attributes#reflected_element_references)).

## Zugehörige Rollen

Verwendet in **ALLEN** Rollen.

## Spezifikationen

{{Specifications}}

## Siehe auch

- [`aria-controls`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-controls)
- [`aria-owns`-Browser-Unterstützung](https://a11ysupport.io/tech/aria/aria-owns_attribute)
