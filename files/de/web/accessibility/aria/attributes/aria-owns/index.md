---
title: aria-owns
slug: Web/Accessibility/ARIA/Attributes/aria-owns
l10n:
  sourceCommit: 194bd13942ad0c532c92d364e0d5d0c36732d98c
---

{{AccessibilitySidebar}}

Das Attribut `aria-owns` identifiziert ein Element (oder mehrere Elemente), um eine visuelle, funktionale oder kontextuelle Beziehung zwischen einem übergeordneten und seinen untergeordneten Elementen zu definieren, wenn die DOM-Hierarchie nicht zur Darstellung der Beziehung verwendet werden kann.

## Beschreibung

Jedes Element ist Elternteil, Geschwister oder Kind eines anderen Elements. Das Dokumentobjekt, bestehend aus HTML-Elementen und Textknoten, bildet die Grundlage des DOM-Baumes. Das Accessibility Object Model (<abbr>AOM</abbr>) basiert auf einem gut aufgebauten DOM, um assistive Technologien in die Lage zu versetzen, den Benutzern sinnvolle Informationen über den Inhalt eines Dokuments zu übermitteln.

Es gibt Umstände, bei denen das Layout, das auf dem Bildschirm erscheint, aufgrund der Fähigkeit von JavaScript, Inhalte zu ändern, und von CSS, Layouts zu ändern, von der zugrunde liegenden DOM-Struktur abweichen kann. In diesem Fall kann das Attribut `aria-owns` verwendet werden, um eine sinnvolle Beziehung für assistive Technologien, die das DOM nutzen, wiederherzustellen.

Wenn Elemente visuell miteinander verbunden erscheinen, aber nicht im DOM assoziiert sind, ermöglicht das Attribut `aria-owns`, die auf dem Bildschirm erscheinende Beziehung in der Zugänglichkeitsebene für die Verwendung durch assistive Technologien zu erstellen. Der **einzige** Grund, `aria-owns` zu verwenden, ist, um assistiven Technologien eine übergeordnete/untergeordnete kontextuelle Beziehung zu zeigen, wenn die Konstruktion des DOM diese Beziehung nicht bereitstellen kann.

Ein "besitzendes Element" ist ein beliebiger DOM-Vorfahr eines Elements. Wenn ein Element visuell, funktionell oder kontextuell den Anschein erweckt, ein Element zu "besitzen" (ein Vorfahr zu sein), aber tatsächlich kein Vorfahr des Elements im DOM ist, fügen Sie `aria-owns` hinzu, um diese Beziehung zu erstellen. Fügen Sie das Attribut dem besitzenden Element hinzu, unter Bezugnahme auf das nicht-kindliche besessene Element (oder Elemente), um assistiven Technologien mitzuteilen, dass ein Element als Kind behandelt werden sollte.

Durch die Referenzierung der ID eines oder mehrerer Elemente kann jedes Element ein anderes Element mit einer `aria-owns`-Deklaration "besitzen". Der Wert des Attributs `aria-owns` ist eine durch Leerzeichen getrennte Liste von ID-Referenzen, die sich auf die IDs eines oder mehrerer Elemente im Dokument bezieht.

> [!NOTE]
> Ein "besessenes" Element ist ein beliebiger DOM-Nachfahre des Elements, ein beliebiges über `aria-owns` als Kind spezifiziertes Element oder ein beliebiger DOM-Nachfahre des besessenen Kindes. Das von `aria-owns` besessene Element sollte ein Element sein, das zu einem separaten Elternbaum im DOM gehört, aber als Kind des aktuellen Elements behandelt werden sollte.

Verwenden Sie `aria-owns` nicht als Ersatz für die DOM-Hierarchie. Wenn die Beziehung im DOM dargestellt ist, verwenden Sie `aria-owns` nicht.

Ein Kind-Element wird standardmäßig von seinem DOM-Elternteil besessen: in diesem Fall sollte `aria-owns` nicht verwendet werden. Vermeiden Sie es, das Attribut `aria-owns` zu verwenden, um bestehende Kind-Elemente in eine andere Reihenfolge zu bringen.

Wenn Sie `aria-owns` verwenden, stellen Sie sicher, dass Sie die [Fokusreihenfolge verwalten](https://css-tricks.com/focus-management-and-inert/). Stellen Sie sicher, dass die visuelle Fokussierungsreihenfolge mit dieser Leserichtung der assistiven Technologie übereinstimmt.

Ein Beispiel für die Verwendung von `aria-owns` sind Pop-up-Untermenüs, die optisch in der Nähe eines übergeordneten Menüs erscheinen, aber nicht innerhalb des übergeordneten Menüs im DOM verschachtelt werden können, da dies die visuelle Darstellung beeinflussen würde. In diesem Fall verwenden Sie `aria-owns`, um das Untermenü als Kind des übergeordneten Menüs einem Bildschirmleser zu präsentieren.

> [!NOTE]
> Das Attribut `aria-owns` sollte nur verwendet werden, wenn die übergeordnete/untergeordnete Beziehung nicht aus dem DOM bestimmt werden kann.

Wenn ein Element sowohl `aria-owns` als auch DOM-Kinder hat, ist die Reihenfolge der Kindelemente:

1. Zuerst die tatsächlichen DOM-Kinder,
2. Dann die in `aria-owns` referenzierten Elemente.

Diese Reihenfolge kann geändert werden, indem die ID-Referenzen der tatsächlichen DOM-Kinder im `aria-owns`-Wert enthalten sind.

Die {{CSSXRef('order')}}-Eigenschaft, Teil von Flex- oder Grid-Layouts, kann verwendet werden, um die Reihenfolge von Flex- und Grid-Elementen zu ändern, wodurch sie in einer anderen Reihenfolge erscheinen als in ihrem Ursprungdokument, eine Abweichung der logischen Reihenfolge der Elemente entsteht. Auch wenn es verlockend sein mag, die Zugänglichkeitsschicht in die gleiche Ordnung zu bringen, die durch die CSS-{{CSSXref('order')}}-Eigenschaft erzeugt wird, ist es am besten, sowohl die `order`-Eigenschaft als auch das `aria-owns`-Attribut zu vermeiden.

Stellen Sie sicher, dass Ihre besessenen Elemente nur einen Besitzer haben. Geben Sie die `id` eines Elements nicht in mehr als einem anderen Element in das `aria-owns`-Attribut ein. Ein Element kann nur einen Besitzer haben.

> [!WARNING]
> Obwohl [`aria-owns` jetzt unterstützt wird](https://a11ysupport.io/tech/aria/aria-owns_attribute) in allen modernen Browsern, wird `aria-owns` möglicherweise Benutzern von MacOS und iOS mit VoiceOver vor iOS 17.3 und macOS 14.3 nicht angezeigt.

## Werte

- `id`-Liste
  - : Durch Leerzeichen getrennte Liste von einer oder mehreren ID-Werten, die die Elemente referenzieren, die vom aktuellen Element besessen werden

## Zugehörige Rollen

Wird in **ALLEN** Rollen verwendet.

## Spezifikationen

{{Specifications}}

## Siehe auch

- [`aria-controls`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-controls)
- [`aria-owns` Browser-Unterstützung](https://a11ysupport.io/tech/aria/aria-owns_attribute)
