---
title: aria-owns
slug: Web/Accessibility/ARIA/Attributes/aria-owns
l10n:
  sourceCommit: 5f76b99045f87349ed030bbd6a3c2e43badb3c22
---

{{AccessibilitySidebar}}

Das Attribut `aria-owns` identifiziert ein Element (oder mehrere Elemente), um eine visuelle, funktionale oder kontextuelle Beziehung zwischen einem Eltern- und seinen Kindelementen zu definieren, wenn die DOM-Hierarchie nicht zur Darstellung der Beziehung verwendet werden kann.

## Beschreibung

Jedes Element ist das Elternteil, Geschwister oder Kind eines anderen Elements. Das Dokumentobjekt, bestehend aus HTML-Elementen und Textknoten, bildet die Grundlage des DOM-Baums. Das Accessibility Object Model (<abbr>AOM</abbr>) stützt sich auf ein gut aufgebautes DOM, um unterstützenden Technologien zu ermöglichen, Benutzern sinnvolle Informationen über die Inhalte eines Dokuments zu übermitteln.

Es gibt Umstände, in denen das auf dem Bildschirm erscheinende Layout von der zugrunde liegenden DOM-Struktur abweichen kann, da JavaScript Inhalte ändern und CSS Layouts verändern kann. In solchen Fällen kann das `aria-owns`-Attribut verwendet werden, um für assistive Technologien, die das DOM nutzen, eine sinnvolle Beziehung nachzubilden.

Wenn Elemente visuell miteinander verbunden erscheinen, aber nicht im DOM assoziiert sind, ermöglicht das `aria-owns`-Attribut, die Beziehung, die auf dem Bildschirm sichtbar ist, in der Barrierefreiheitsschicht für die Nutzung durch unterstützende Technologien zu erstellen. Der **einzige** Grund, `aria-owns` zu verwenden, ist, eine Elternteil-Kind-Beziehung für assistierende Technologien offenzulegen, wenn die Konstruktion des DOMs diese Beziehung nicht bieten kann.

Ein "besitzendes Element" ist ein beliebiger DOM-Vorfahre eines Elements. Wenn ein Element visuell, funktional oder kontextuell zu "besitzen" scheint (ein Vorfahre eines Elements zu sein), aber nicht tatsächlich ein Vorfahre des Elements im DOM ist, fügen Sie das `aria-owns` hinzu, um diese Beziehung zu erstellen. Fügen Sie das Attribut dem Besitzenden Element mit Bezug auf das nicht-Kind-Besitzenelement (oder Elemente) hinzu, um unterstützenden Technologien mitzuteilen, dass ein Element als ein Kind behandelt werden soll.

Das Referenzieren der ID von einem oder mehreren Elementen erlaubt jedem Element, jedes andere Element mit einer `aria-owns`-Deklaration zu "besitzen". Der Wert des `aria-owns`-Attributs ist eine durch Leerzeichen getrennte ID-Referenzliste, die auf die IDs von einem oder mehreren Elementen im Dokument verweist.

> [!NOTE]
> Ein "besessenes" Element ist ein beliebiger DOM-Nachkomme des Elements, jedes Element, das als Kind über `aria-owns` angegeben ist, oder jeder DOM-Nachkomme des besessenen Kindes. Das `aria-owns`-besessene Element sollte ein Element sein, das zu einem separaten Elterbaum im DOM gehört, aber als ein Kind des aktuellen Elements behandelt werden sollte.

`Aria-owns` sollte nicht als Ersatz für die DOM-Hierarchie verwendet werden. Wenn die Beziehung im DOM dargestellt ist, sollten Sie `aria-owns` nicht verwenden.

Ein Kindelement wird standardmäßig von seinem DOM-Elternteil besessen: in diesem Fall sollte `aria-owns` nicht verwendet werden. Vermeiden Sie die Nutzung des `aria-owns`-Attributs, um bestehende Kindelemente in eine andere Reihenfolge umzustrukturieren.

Bei der Verwendung von `aria-owns` stellen Sie sicher, dass Sie die [Fokusreihenfolge verwalten](https://css-tricks.com/focus-management-and-inert/). Stellen Sie sicher, dass die visuelle Fokusreihenfolge dieser assistiven Technologie-Lesereihenfolge entspricht.

Ein Beispiel für die Verwendung von `aria-owns` sind Pop-up-Untermenüs, die visuell nahe bei einem übergeordneten Menü positioniert erscheinen, aber nicht im DOM innerhalb des übergeordneten Menüs verschachtelt werden können, da dies die visuelle Darstellung beeinflussen würde. In diesem Fall verwenden Sie `aria-owns`, um das Untermenü einem Bildschirmleser als Kind des übergeordneten Menüs zu präsentieren.

> [!NOTE]
> Das `aria-owns`-Attribut sollte nur verwendet werden, wenn die Eltern-Kind-Beziehung aus dem DOM nicht ermittelt werden kann.

Wenn ein Element sowohl `aria-owns` als auch DOM-Kinder hat, ist die Reihenfolge der Kindelemente:

1. Zuerst die tatsächlichen DOM-Kinder,
2. Dann die in `aria-owns` referenzierten Elemente.

Diese Reihenfolge kann geändert werden, indem die ID-Referenzen der tatsächlichen DOM-Kinder im `aria-owns`-Wert enthalten sind.

Die {{CSSXRef('order')}}-Eigenschaft, die Teil von Flex- oder Rasterlayouts ist, kann verwendet werden, um die Reihenfolge von Flex- und Raster-Elementen zu ändern, sodass sie in einer anderen Reihenfolge erscheinen als ihrer Reihenfolge im Quellendokument, was zu einer Abweichung der logischen Reihenfolge der Elemente führt. Auch wenn es verlockend sein mag, die Barrierefreiheitsschicht an die durch die CSS-{{CSSXref('order')}}-Eigenschaft erstellten Reihenfolgenänderungen anzupassen, ist das Vermeiden sowohl der `order`-Eigenschaft als auch des `aria-owns`-Attributs die beste Option.

Stellen Sie sicher, dass Ihre besessenen Elemente nur einen Besitzer haben. Geben Sie die `id` eines Elements nicht in mehr als einem anderen Element im `aria-owns`-Attribut an. Ein Element kann nur einen Besitzer haben.

> [!WARNING]
> Obwohl [`aria-owns` nun unterstützt wird](https://a11ysupport.io/tech/aria/aria-owns_attribute) in allen modernen Browsern, könnte `aria-owns` für Benutzer von macOS und iOS, die VoiceOver vor iOS 17.3 und macOS 14.3 verwenden, nicht sichtbar sein.

## Werte

- `id`-Liste
  - : Durch Leerzeichen getrennte Liste von einem oder mehreren ID-Werten, die die Elemente referenzieren, die vom aktuellen Element besessen werden.

## Assoziierte Rollen

Wird in **ALLEN** Rollen verwendet.

## Spezifikationen

{{Specifications}}

## Siehe auch

- [`aria-controls`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-controls)
- [`aria-owns` Browser-Unterstützung](https://a11ysupport.io/tech/aria/aria-owns_attribute)
