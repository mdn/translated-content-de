---
title: "ARIA: aria-hidden-Attribut"
short-title: aria-hidden
slug: Web/Accessibility/ARIA/Reference/Attributes/aria-hidden
l10n:
  sourceCommit: a8b25483994fa47cf949b432ddf34a6bce2ddb2e
---

Der `aria-hidden`-Zustand gibt an, ob das Element einer Zugänglichkeits-API verfügbar gemacht wird.

## Beschreibung

Das `aria-hidden`-Attribut kann verwendet werden, um nicht interaktive Inhalte von der Zugänglichkeits-API zu verbergen.

Wenn Sie einem Element `aria-hidden="true"` hinzufügen, wird dieses Element und alle seine Kinder aus dem Zugänglichkeitsbaum entfernt. Dies kann die Erfahrung für Benutzer von unterstützenden Technologien verbessern, indem Folgendes verborgen wird:

- Rein dekorative Inhalte, wie Icons oder Bilder
- Duplizierte Inhalte, wie wiederholter Text
- Inhalte außerhalb des Bildschirms oder eingeklappte Inhalte, wie Menüs

Das Vorhandensein des `aria-hidden`-Attributs verbirgt Inhalte vor unterstützenden Technologien, verbirgt jedoch visuell nichts.

`aria-hidden="true"` sollte nicht auf Elemente verwendet werden, die den Fokus erhalten können. Da dieses Attribut von den Kindern eines Elements geerbt wird, sollte es außerdem nicht an das übergeordnete oder Vorfahrenelement eines fokussierbaren Elements hinzugefügt werden.

> [!WARNING]
> Verwenden Sie `aria-hidden="true"` nicht auf fokussierbaren Elementen.

Der versteckte Status eines Elements basiert darauf, ob es gerendert wird. Die Darstellung wird normalerweise über CSS gesteuert. Ein Element, dessen `display`-Eigenschaft über CSS auf `none` gesetzt ist, wird beispielsweise nicht gerendert. Ein Element gilt als versteckt, wenn es oder einer seiner Vorfahren nicht gerendert wird oder dessen `aria-hidden`-Attributwert auf true gesetzt ist. Beachten Sie, dass ein Element und seine Kinder, bei denen `aria-hidden="true"` deklariert ist, immer noch sichtbar sein werden, es sei denn, sie werden auch durch CSS verborgen.

Vorsicht ist geboten, wenn `aria-hidden` verwendet wird, um sichtbar gerenderte Inhalte vor unterstützenden Technologien zu verbergen. Sie sollten keine sichtbaren Inhalte verbergen, es sei denn, dies verbessert die Erfahrung für Benutzer von unterstützenden Technologien, indem redundante oder überflüssige Inhalte entfernt werden. Nur wenn identische oder gleichwertige Bedeutungen und Funktionen für unterstützende Technologien verfügbar gemacht werden, kann das Entfernen sichtbarer Inhalte aus der Zugänglichkeits-API in Betracht gezogen werden.

> [!NOTE]
> Berücksichtigen Sie alle Behinderungen, wenn Sie sichtbar gerenderte Inhalte vor unterstützenden Technologien verbergen. Nicht alle Benutzer von unterstützenden Technologien sind sehbehindert. Wenn sichtbare Inhalte nicht mit Textinhalten in der Zugänglichkeits-API übereinstimmen, wird die Benutzererfahrung für sehende Benutzer negativ beeinflusst.

Auf den ersten Blick scheinen `aria-hidden="true"` und die Attribute `role="presentation"` und dessen Synonym `role="none"` ähnlich, aber die Absicht hinter jedem ist unterschiedlich.

- `aria-hidden="true"` entfernt das gesamte Element aus der Zugänglichkeits-API.
- `role="presentation"` und `role="none"` entfernen die semantische Bedeutung eines Elements, während es und seine Inhalte immer noch unterstützenden Technologien zugänglich gemacht werden.

`aria-hidden="true"` sollte nicht hinzugefügt werden, wenn:

- Das HTML-Attribut [`hidden`](/de/docs/Web/HTML/Reference/Global_attributes/hidden) vorhanden ist
- Das Element oder das Vorfahrenelement mit [`display: none`](/de/docs/Web/CSS/display) verborgen ist
- Das Element oder das Vorfahrenelement mit [`visibility: hidden`](/de/docs/Web/CSS/visibility) verborgen ist

In allen drei Szenarien ist das Attribut überflüssig, da das Element bereits aus dem Zugänglichkeitsbaum entfernt wurde. Das visuelle Verbergen von Elementen mit `display` oder `visibility` verbirgt Inhalte vom Bildschirm und von unterstützenden Technologien.

Die Verwendung von `aria-hidden="false"` wird das Element nicht wieder sichtbar für unterstützende Technologien machen, wenn eines seiner Elternelemente `aria-hidden="true"` angibt.

## Beispiel

Das Hinzufügen von `aria-hidden="true"` zum Icon verbirgt das Ikonzeichen davor, in den zugänglichen Namen aufgenommen zu werden.

```html
<button>
  <span class="fa fa-tweet" aria-hidden="true"></span>
  <span class="label"> Tweet </span>
</button>
```

Wir haben eine Schaltfläche mit [einem Font-Awesome-Icon](https://fontawesome.com/). Wir verbergen das Icon vor unterstützenden Technologien mit `aria-hidden="true"`, da das Freilegen des Icons zu unterstützenden Technologien zu Redundanz führen könnte oder, wenn das Icon nicht denselben Inhalt wie der sichtbare Text hat, Verwirrung stiften könnte.

## Werte

- `false`
  - : Das Element wird der Zugänglichkeits-API zugänglich gemacht, als ob es gerendert wurde.
- `true`
  - : Das Element ist von der Zugänglichkeits-API verborgen.
- `undefined` (Standard)
  - : Der versteckte Status des Elements wird vom Benutzeragenten bestimmt, basierend darauf, ob es gerendert wird.

## Zugehörige Schnittstellen

- [`Element.ariaHidden`](/de/docs/Web/API/Element/ariaHidden)
  - : Die [`ariaHidden`](/de/docs/Web/API/Element/ariaHidden)-Eigenschaft, Teil der [`Element`](/de/docs/Web/API/Element)-Schnittstelle, spiegelt den Wert des `aria-hidden`-Attributs wider, welches angibt, ob das Element einer Zugänglichkeits-API zugänglich gemacht wird.
- [`ElementInternals.ariaHidden`](/de/docs/Web/API/ElementInternals/ariaHidden)
  - : Die [`ariaHidden`](/de/docs/Web/API/ElementInternals/ariaHidden)-Eigenschaft, Teil der [`ElementInternals`](/de/docs/Web/API/ElementInternals)-Schnittstelle, spiegelt den Wert des `aria-hidden`-Attributs wider

## Zugehörige Rollen

Verwendet in **ALLEN** Rollen

## Spezifikationen

{{Specifications}}

## Siehe auch

- [`aria-disabled`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-disabled)
- [`aria-modal`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-modal)
- [`aria-expanded`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-expanded)
- HTML-Attribut [`hidden`](/de/docs/Web/HTML/Reference/Global_attributes/hidden)
- CSS-{{CSSXref('display')}}-Eigenschaft
- CSS-{{CSSXref('visibility')}}-Eigenschaft
