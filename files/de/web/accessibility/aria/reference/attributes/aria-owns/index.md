---
title: aria-owns
slug: Web/Accessibility/ARIA/Reference/Attributes/aria-owns
l10n:
  sourceCommit: 85d5b8d224843c37974318ff04fbcc1ab69ef95d
---

Das `aria-owns` Attribut identifiziert ein Element (oder mehrere Elemente), um eine visuelle, funktionale oder kontextuelle Beziehung zwischen einem übergeordneten und seinen Kindelementen zu definieren, wenn die DOM-Hierarchie nicht genutzt werden kann, um diese Beziehung darzustellen.

## Beschreibung

Jedes Element ist das übergeordnete, gleichgeordnete oder untergeordnete Element eines anderen Elements. Das Dokumentobjekt, bestehend aus HTML-Elementen und Textknoten, bildet die Grundlage des DOM-Baums. Das Accessibility Object Model (<abbr>AOM</abbr>) stützt sich auf ein gut aufgebautes DOM, um Hilfstechnologien zu ermöglichen, bedeutungsvolle Informationen über den Inhalt eines Dokuments an die Benutzer weiterzugeben.

Es gibt Umstände, in denen das Layout, das auf dem Bildschirm erscheint, sich von der zugrunde liegenden DOM-Struktur unterscheiden kann, da JavaScript Inhalte ändern und CSS das Layout ändern kann. In solchen Fällen kann das `aria-owns` Attribut verwendet werden, um für Hilfstechnologien, die das DOM konsumieren, eine sinnvolle Beziehung zu rekonstruieren.

Wenn Elemente visuell zusammengehörig erscheinen, aber nicht im DOM verbunden sind, ermöglicht das `aria-owns` Attribut, die Beziehung, die auf dem Bildschirm erscheint, in der Barrierefreiheits-Ebene zu schaffen, damit diese von Hilfstechnologien genutzt werden kann. Der **einzige** Grund für die Einbeziehung von `aria-owns` ist, eine kontextuelle Beziehung zwischen Eltern und Kind für Hilfstechnologien offenzulegen, wenn der Aufbau des DOM diese Beziehung nicht bieten kann.

Ein "besitzendes Element" ist jeder DOM-Vorfahre eines Elements. Wenn ein Element visuell, funktional oder kontextuell zu "besitzen" scheint (ein Vorfahre zu sein) eines Elements, aber im DOM tatsächlich kein Vorfahre des Elements ist, fügen Sie das `aria-owns` hinzu, um diese Beziehung zu schaffen. Fügen Sie das Attribut dem besitzenden Element hinzu mit Verweis auf das besessene Nicht-Kindelement (oder die Elemente), um Hilfstechnologien mitzuteilen, dass ein Element als Kind behandelt werden soll.

Das Referenzieren der ID eines oder mehrerer Elemente erlaubt jedem Element, mit einer `aria-owns` Deklaration auf jedes andere Element zu "besitzen". Der Wert des `aria-owns` Attributs ist eine durch Leerzeichen getrennte ID-Referenzliste, die sich auf die IDs von einem oder mehreren Elementen im Dokument bezieht.

> [!NOTE]
> Ein "besessenes Element" ist jeder DOM-Nachfahre des Elements, jedes via `aria-owns` als Kind angegebene Element oder jeder DOM-Nachfahre des besessenen Kindes. Das `aria-owns`-besessene Element sollte ein Element sein, das zu einem separaten Elternbaum im DOM gehört, aber als ein Kind des aktuellen Elements behandelt werden sollte.

Verwenden Sie `aria-owns` nicht als Ersatz für die DOM-Hierarchie. Wenn die Beziehung im DOM dargestellt wird, verwenden Sie `aria-owns` nicht.

Ein Kindelement wird standardmäßig von seinem DOM-Elternteil besessen: in diesem Fall sollte `aria-owns` nicht verwendet werden. Vermeiden Sie es, das `aria-owns` Attribut zu verwenden, um bestehende Kindelemente in eine andere Reihenfolge zu bringen.

Wenn Sie `aria-owns` verwenden, stellen Sie sicher, dass Sie die [Fokusreihenfolge verwalten](https://css-tricks.com/focus-management-and-inert/). Stellen Sie sicher, dass die visuelle Fokusreihenfolge dieser von den Hilfstechnologie gelesenen Reihenfolge entspricht.

Ein Beispiel, wann `aria-owns` verwendet werden sollte, schließt Pop-up-Untermenüs ein, die visuell in der Nähe eines übergeordneten Menüs positioniert erscheinen, aber nicht im DOM innerhalb des übergeordneten Menüs verschachtelt werden können, weil es die visuelle Präsentation beeinträchtigen würde. In diesem Fall verwenden Sie `aria-owns`, um das Untermenü als ein Kind des übergeordneten Menüs für einen Screenreader darzustellen.

> [!NOTE]
> Das `aria-owns` Attribut sollte nur verwendet werden, wenn die Eltern/Kind-Beziehung nicht aus dem DOM ermittelt werden kann.

Wenn ein Element sowohl `aria-owns` als auch DOM-Kinder hat, ist die Reihenfolge der Kindelemente:

1. Zuerst die tatsächlichen DOM-Kinder,
2. Dann die in `aria-owns` referenzierten Elemente.

Diese Reihenfolge kann geändert werden, indem die ID-Referenzen zu den tatsächlichen DOM-Kindern im `aria-owns` Wert enthalten sind.

Die {{CSSXRef('order')}} Eigenschaft, Teil von Flex- oder Grid-Layouts, kann verwendet werden, um die Reihenfolge von Flex- und Grid-Elementen zu ändern, sodass sie in einer anderen Reihenfolge erscheinen als in der Quelldokumentenanordnung, wodurch eine Abweichung der logischen Reihenfolge der Elemente entsteht. Auch wenn es verlockend sein mag, die Barrierefreiheitsebene so zu ordnen, dass sie den durch die CSS {{CSSXref('order')}} Eigenschaft erstellten Ordnungsänderungen entspricht, ist es am besten, sowohl die `order` Eigenschaft als auch das `aria-owns` Attribut zu vermeiden.

Stellen Sie sicher, dass Ihre besessenen Elemente nur einen Eigentümer haben. Geben Sie die `id` eines Elements nicht in mehr als einem anderen Element in dessen `aria-owns` Attribut an. Ein Element kann nur einen Eigentümer haben.

> [!WARNING]
> Während [`aria-owns` inzwischen in allen modernen Browsern unterstützt wird](https://a11ysupport.io/tech/aria/aria-owns_attribute), wird `aria-owns` Benutzern von macOS und iOS, die VoiceOver verwenden, möglicherweise nicht angezeigt, wenn sie Versionen vor iOS 17.3 und macOS 14.3 nutzen.

## Werte

- `id` Liste
  - : Durch Leerzeichen getrennte Liste von einem oder mehreren ID-Werten, die die von dem aktuellen Element besessenen Elemente referenzieren

## Zugehörige Schnittstellen

- [`Element.ariaOwnsElements`](/de/docs/Web/API/Element/ariaOwnsElements)
  - : Die `ariaOwnsElements` Eigenschaft ist Teil der Schnittstelle jedes Elements.
    Ihr Wert ist ein Array von Unterklassen von [`Element`](/de/docs/Web/API/Element), das die `id` Referenzen im `aria-owns` Attribut widerspiegelt ([mit einigen Einschränkungen](/de/docs/Web/API/Document_Object_Model/Reflected_attributes#reflected_element_references)).
- [`ElementInternals.ariaOwnsElements`](/de/docs/Web/API/ElementInternals/ariaOwnsElements)
  - : Die `ariaOwnsElements` Eigenschaft ist Teil der Schnittstelle jedes benutzerdefinierten Elements.
    Ihr Wert ist ein Array von Unterklassen von [`Element`](/de/docs/Web/API/Element), das die `id` Referenzen im `aria-owns` Attribut widerspiegelt ([mit einigen Einschränkungen](/de/docs/Web/API/Document_Object_Model/Reflected_attributes#reflected_element_references)).

## Zugehörige Rollen

Wird in **ALLEN** Rollen verwendet.

## Spezifikationen

{{Specifications}}

## Siehe auch

- [`aria-controls`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-controls)
- [`aria-owns` Browser-Support](https://a11ysupport.io/tech/aria/aria-owns_attribute)
