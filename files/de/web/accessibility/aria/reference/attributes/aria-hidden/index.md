---
title: aria-hidden
slug: Web/Accessibility/ARIA/Reference/Attributes/aria-hidden
l10n:
  sourceCommit: f65f7f6e4fda2cb1bd0e7db17777e2cb20be7d27
---

Der `aria-hidden` Zustand gibt an, ob das Element für eine Accessibility-API sichtbar ist.

## Beschreibung

Das Attribut `aria-hidden` kann verwendet werden, um nicht interaktive Inhalte von der Accessibility-API zu verbergen.

Das Hinzufügen von `aria-hidden="true"` zu einem Element entfernt dieses Element und all seine Kinder aus dem Accessibility-Baum. Dies kann die Erfahrung für Benutzer von unterstützenden Technologien verbessern, indem es folgende Elemente verbirgt:

- Rein dekorative Inhalte, wie Icons oder Bilder
- Doppelte Inhalte, wie wiederholt auftretender Text
- Außerhalb des Sichtbereichs oder eingeklappte Inhalte, wie Menüs

Das Vorhandensein des `aria-hidden` Attributs verbirgt Inhalte vor unterstützenden Technologien, versteckt jedoch nichts visuell.

`aria-hidden="true"` sollte nicht auf Elementen verwendet werden, die im Fokus stehen können. Da dieses Attribut von den Kindern eines Elements geerbt wird, sollte es außerdem nicht auf den Elternteil oder Vorfahren eines fokussierbaren Elements hinzugefügt werden.

> [!WARNING]
> Verwenden Sie `aria-hidden="true"` nicht auf fokussierbaren Elementen.

Der versteckte Status eines Elements basiert darauf, ob es gerendert wird. Das Rendering wird normalerweise durch CSS gesteuert. Zum Beispiel wird ein Element, dessen `display` Eigenschaft via CSS auf `none` gesetzt ist, nicht gerendert. Ein Element gilt als verborgen, wenn es oder einer seiner Vorfahren nicht gerendert wird oder deren `aria-hidden` Attribut auf true gesetzt ist. Beachten Sie, dass ein Element und seine Kinder, auf dem `aria-hidden="true"` deklariert ist, weiterhin sichtbar sind, es sei denn, sie werden zusätzlich durch CSS verborgen.

Seien Sie vorsichtig bei der Verwendung von `aria-hidden`, um sichtbar gerenderte Inhalte vor unterstützenden Technologien zu verbergen. Sie sollten sichtbare Inhalte nur dann verbergen, wenn dies die Benutzererfahrung für Benutzer von unterstützenden Technologien verbessert, indem überflüssige oder unnötige Inhalte entfernt werden. Nur wenn identische oder gleichwertige Bedeutung und Funktionalität den unterstützenden Technologien zugänglich gemacht werden, kann das Entfernen sichtbarer Inhalte von der Accessibility-API in Betracht gezogen werden.

> [!NOTE]
> Berücksichtigen Sie alle Behinderungen, wenn Sie sichtbar gerenderte Inhalte vor unterstützenden Technologien verbergen. Nicht alle Benutzer von unterstützenden Technologien sind sehbehindert. Wenn sichtbare Inhalte nicht mit den Textinhalten in der Accessibility-API übereinstimmen, wird das Benutzererlebnis für sehende Benutzer negativ beeinflusst.

Oberflächlich betrachtet, scheinen `aria-hidden="true"` und die `role="presentation"` sowie sein Synonym `role="none"` ähnlich, doch der jeweilige Zweck ist unterschiedlich.

- `aria-hidden="true"` entfernt das gesamte Element aus der Accessibility-API.
- `role="presentation"` und `role="none"` entfernen die semantische Bedeutung eines Elements, während es und seine Inhalte dennoch den unterstützenden Technologien zugänglich bleiben.

`aria-hidden="true"` sollte nicht hinzugefügt werden, wenn:

- Das HTML [`hidden`](/de/docs/Web/HTML/Global_attributes/hidden) Attribut vorhanden ist
- Das Element oder der Vorfahre des Elements mit [`display: none`](/de/docs/Web/CSS/display) verborgen ist
- Das Element oder der Vorfahre des Elements mit [`visibility: hidden`](/de/docs/Web/CSS/visibility) verborgen ist

In allen drei Szenarien ist das Hinzufügen des Attributs unnötig, da das Element bereits aus dem Accessibility-Baum entfernt wurde. Das visuelle Verbergen von Elementen mit `display` oder `visibility` verbirgt Inhalte sowohl auf dem Bildschirm als auch vor unterstützenden Technologien.

Die Verwendung von `aria-hidden="false"` wird das Element nicht für unterstützende Technologien sichtbar machen, wenn einer seiner Eltern `aria-hidden="true"` angibt.

## Beispiel

Das Hinzufügen von `aria-hidden="true"` zum Icon verbirgt das Iconzeichen davor, im zugänglichen Namen aufgenommen zu werden.

```html
<button>
  <span class="fa fa-tweet" aria-hidden="true"></span>
  <span class="label"> Tweet </span>
</button>
```

Wir haben einen Button mit [einem Font Awesome Icon](https://fontawesome.com/). Wir verbergen das Icon vor unterstützenden Technologien mithilfe von `aria-hidden="true"`, da das Freigeben des Icons für unterstützende Technologien zu Redundanz führen könnte oder, wenn das Icon nicht denselben Inhalt wie der sichtbare Text hat, zu Verwirrung.

## Werte

- `false`
  - : Das Element ist der Accessibility-API verfügbar, als wäre es gerendert.
- `true`
  - : Das Element ist vor der Accessibility-API verborgen.
- `undefined` (Standard)
  - : Der versteckte Zustand des Elements wird vom User-Agent basierend darauf bestimmt, ob es gerendert ist.

## Zugehörige Schnittstellen

- [`Element.ariaHidden`](/de/docs/Web/API/Element/ariaHidden)
  - : Die [`ariaHidden`](/de/docs/Web/API/Element/ariaHidden) Eigenschaft, Teil der [`Element`](/de/docs/Web/API/Element) Schnittstelle, spiegelt den Wert des `aria-hidden` Attributs wider, der angibt, ob das Element für eine Accessibility-API verfügbar ist.
- [`ElementInternals.ariaHidden`](/de/docs/Web/API/ElementInternals/ariaHidden)
  - : Die [`ariaHidden`](/de/docs/Web/API/ElementInternals/ariaHidden) Eigenschaft, Teil der [`ElementInternals`](/de/docs/Web/API/ElementInternals) Schnittstelle, spiegelt den Wert des `aria-hidden` Attributs wider.

## Zugehörige Rollen

In **ALLEN** Rollen verwendet

## Spezifikationen

{{Specifications}}

## Siehe auch

- [`aria-disabled`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-disabled)
- [`aria-modal`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-modal)
- [`aria-expanded`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-expanded)
- HTML [`hidden`](/de/docs/Web/HTML/Global_attributes/hidden) Attribut
- CSS {{CSSXref('display')}} Eigenschaft
- CSS {{CSSXref('visibility')}} Eigenschaft
