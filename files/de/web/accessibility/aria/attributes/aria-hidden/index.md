---
title: aria-hidden
slug: Web/Accessibility/ARIA/Attributes/aria-hidden
l10n:
  sourceCommit: 194bd13942ad0c532c92d364e0d5d0c36732d98c
---

{{AccessibilitySidebar}}

Der `aria-hidden`-Zustand gibt an, ob das Element für eine Zugänglichkeits-API zugänglich ist.

## Beschreibung

Das `aria-hidden`-Attribut kann verwendet werden, um nicht interaktive Inhalte vor der Zugänglichkeits-API zu verbergen.

Wenn Sie `aria-hidden="true"` zu einem Element hinzufügen, entfernen Sie dieses Element und alle seine Kinder aus dem Zugänglichkeitsbaum. Dies kann die Erfahrung für Benutzer von unterstützenden Technologien verbessern, indem Folgendes verborgen wird:

- Rein dekorative Inhalte wie Symbole oder Bilder
- Doppelte Inhalte, wie wiederholter Text
- Ausgeblendete oder eingeklappte Inhalte, wie Menüs

Das Vorhandensein des `aria-hidden`-Attributs verbirgt Inhalte vor unterstützenden Technologien, versteckt jedoch nichts visuell.

`aria-hidden="true"` sollte nicht bei Elementen verwendet werden, die Fokus erhalten können. Da dieses Attribut auch auf die Kinder eines Elements vererbt wird, sollte es nicht dem Eltern- oder Vorfahrenelement eines fokussierbaren Elements hinzugefügt werden.

> [!WARNING]
> Verwenden Sie `aria-hidden="true"` nicht bei fokussierbaren Elementen.

Der versteckte Status eines Elements basiert darauf, ob es gerendert wird. Das Rendering wird normalerweise durch CSS gesteuert. Ein Element, dessen `display`-Eigenschaft über CSS auf `none` gesetzt ist, wird nicht gerendert. Ein Element gilt als versteckt, wenn es oder einer seiner Vorfahren nicht gerendert wird oder dessen `aria-hidden`-Attributwert auf true gesetzt ist. Beachten Sie, dass ein Element und seine Kinder, die `aria-hidden="true"` deklariert haben, dennoch sichtbar sein werden, es sei denn, sie werden auch durch CSS ausgeblendet.

Seien Sie vorsichtig, wenn Sie `aria-hidden` verwenden, um sichtbar gerenderte Inhalte vor unterstützenden Technologien zu verbergen. Sie sollten sichtbare Inhalte nicht verbergen, es sei denn, dies verbessert die Erfahrung für Benutzer von unterstützenden Technologien, indem redundante oder überflüssige Inhalte entfernt werden. Nur wenn identische oder gleichwertige Bedeutung und Funktionalität für unterstützende Technologien zugänglich gemacht werden, kann das Entfernen sichtbarer Inhalte aus der Zugänglichkeits-API in Betracht gezogen werden.

> [!NOTE]
> Berücksichtigen Sie alle Behinderungen, wenn Sie sichtbar gerenderte Inhalte vor unterstützenden Technologien verbergen. Nicht alle Benutzer von unterstützenden Technologien sind sehbehindert. Wenn der sichtbare Inhalt nicht mit dem Textinhalt in der Zugänglichkeits-API übereinstimmt, wird das Benutzererlebnis für sehende Benutzer negativ beeinflusst.

Oberflächlich betrachtet scheinen `aria-hidden="true"` und `role="presentation"` und dessen Synonym `role="none"` ähnlich zu sein, aber die Absicht hinter jedem ist unterschiedlich.

- `aria-hidden="true"` entfernt das gesamte Element aus der Zugänglichkeits-API.
- `role="presentation"` und `role="none"` entfernen die semantische Bedeutung eines Elements, während es und seine Inhalte dennoch für unterstützende Technologien zugänglich bleiben.

`aria-hidden="true"` sollte nicht hinzugefügt werden, wenn:

- Das HTML-Attribut [`hidden`](/de/docs/Web/HTML/Global_attributes/hidden) vorhanden ist
- Das Element oder das Elementvorfahre mit [`display: none`](/de/docs/Web/CSS/display) verborgen ist
- Das Element oder das Elementvorfahre mit [`visibility: hidden`](/de/docs/Web/CSS/visibility) verborgen ist

In allen drei Szenarien ist das Hinzufügen des Attributs unnötig, da das Element bereits aus dem Zugänglichkeitsbaum entfernt wurde. Visuelles Verbergen von Elementen mit `display` oder `visibility` versteckt Inhalte vom Bildschirm und von unterstützenden Technologien.

Die Verwendung von `aria-hidden="false"` wird das Element nicht für unterstützende Technologien wieder zugänglich machen, wenn einer seiner Eltern `aria-hidden="true"` angibt.

## Beispiel

Das Hinzufügen von `aria-hidden="true"` zu dem Symbol versteckt das Symbol-Zeichen davor, in den zugänglichen Namen aufgenommen zu werden.

```html
<button>
  <span class="fa fa-tweet" aria-hidden="true"></span>
  <span class="label"> Tweet </span>
</button>
```

Wir haben eine Schaltfläche mit [einem Font Awesome-Symbol](https://fontawesome.com/). Wir verstecken das Symbol vor unterstützenden Technologien mit `aria-hidden="true"`, da das Zugänglichmachen des Symbols für unterstützende Technologien zu Redundanz oder, wenn das Symbol nicht den gleichen Inhalt wie der sichtbare Text hat, zu Verwirrung führen könnte.

## Werte

- `false`
  - : Das Element ist der Zugänglichkeits-API exponiert, als ob es gerendert wäre.
- `true`
  - : Das Element ist vor der Zugänglichkeits-API versteckt.
- `undefined` (Standard)
  - : Der versteckte Zustand des Elements wird vom Benutzeragenten bestimmt, basierend darauf, ob es gerendert wird.

## Zugehörige Schnittstellen

- [`Element.ariaHidden`](/de/docs/Web/API/Element/ariaHidden)
  - : Die [`ariaHidden`](/de/docs/Web/API/Element/ariaHidden)-Eigenschaft, die Teil der [`Element`](/de/docs/Web/API/Element)-Schnittstelle ist, reflektiert den Wert des `aria-hidden`-Attributs, das angibt, ob das Element für eine Zugänglichkeits-API zugänglich ist.
- [`ElementInternals.ariaHidden`](/de/docs/Web/API/ElementInternals/ariaHidden)
  - : Die [`ariaHidden`](/de/docs/Web/API/ElementInternals/ariaHidden)-Eigenschaft, die Teil der [`ElementInternals`](/de/docs/Web/API/ElementInternals)-Schnittstelle ist, reflektiert den Wert des `aria-hidden`-Attributs.

## Zugehörige Rollen

Wird in **ALLEN** Rollen verwendet

## Spezifikationen

{{Specifications}}

## Siehe auch

- [`aria-disabled`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-disabled)
- [`aria-modal`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-modal)
- [`aria-expanded`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-expanded)
- HTML-Attribut [`hidden`](/de/docs/Web/HTML/Global_attributes/hidden)
- CSS-Eigenschaft {{CSSXref('display')}}
- CSS-Eigenschaft {{CSSXref('visibility')}}
