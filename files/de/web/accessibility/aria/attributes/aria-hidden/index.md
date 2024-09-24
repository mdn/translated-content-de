---
title: aria-hidden
slug: Web/Accessibility/ARIA/Attributes/aria-hidden
l10n:
  sourceCommit: 194bd13942ad0c532c92d364e0d5d0c36732d98c
---

{{AccessibilitySidebar}}

Der Zustand `aria-hidden` zeigt an, ob das Element für eine Zugänglichkeits-API zugänglich ist.

## Beschreibung

Das `aria-hidden`-Attribut kann verwendet werden, um nicht interaktive Inhalte von der Zugänglichkeits-API zu verbergen.

Das Hinzufügen von `aria-hidden="true"` zu einem Element entfernt dieses Element und all seine Kinder aus dem Zugänglichkeitsbaum. Dies kann die Erfahrung für Nutzer von unterstützender Technologie verbessern, indem folgende Inhalte verborgen werden:

- Rein dekorative Inhalte, wie Symbole oder Bilder
- Doppelte Inhalte, wie wiederholter Text
- Inhalte außerhalb des Bildschirms oder zusammengeklappte Inhalte, wie Menüs

Das Vorhandensein des `aria-hidden`-Attributs verbirgt Inhalte vor unterstützender Technologie, versteckt jedoch nichts visuell.

`aria-hidden="true"` sollte nicht auf Elementen verwendet werden, die den Fokus erhalten können. Zusätzlich, da dieses Attribut von den Kindern eines Elements geerbt wird, sollte es nicht auf das Eltern- oder Vorfahrenelement eines fokussierbaren Elements angewendet werden.

> [!WARNING]
> Verwenden Sie `aria-hidden="true"` nicht auf fokussierbaren Elementen.

Der versteckte Status eines Elements basiert darauf, ob es gerendert wird. Das Rendering wird normalerweise durch CSS gesteuert. Beispielsweise wird ein Element, dessen `display`-Eigenschaft über CSS auf `none` gesetzt ist, nicht gerendert. Ein Element wird als versteckt betrachtet, wenn es oder einer seiner Vorfahren nicht gerendert wird oder ihr `aria-hidden`-Attributwert auf true gesetzt ist. Beachten Sie, dass ein Element und seine Kinder, bei denen `aria-hidden="true"` deklariert ist, weiterhin sichtbar sind, es sei denn, sie werden auch durch CSS versteckt.

Seien Sie vorsichtig, wenn Sie `aria-hidden` verwenden, um von assistierenden Technologien sichtbar gerenderte Inhalte zu verbergen. Sie sollten sichtbare Inhalte nur verbergen, wenn dies die Erfahrung für Nutzer unterstützender Technologien verbessert, indem redundante oder überflüssige Inhalte entfernt werden. Nur wenn identische oder äquivalente Bedeutung und Funktionalität den unterstützenden Technologien zugänglich gemacht wird, kann das Entfernen sichtbarer Inhalte aus der Zugänglichkeits-API in Betracht gezogen werden.

> [!NOTE]
> Berücksichtigen Sie alle Behinderungen, wenn Sie von unterstützenden Technologien sichtbar gerenderte Inhalte verbergen. Nicht alle Nutzer unterstützender Technologie sind sehbehindert. Wenn sichtbare Inhalte nicht mit Textinhalten in der Zugänglichkeits-API übereinstimmen, wird das Benutzererlebnis für sehende Nutzer negativ beeinflusst.

Oberflächlich scheinen `aria-hidden="true"`, `role="presentation"` und sein Synonym `role="none"` ähnlich zu sein, aber die Absicht dahinter ist unterschiedlich.

- `aria-hidden="true"` wird das gesamte Element aus der Zugänglichkeits-API entfernen.
- `role="presentation"` und `role="none"` entfernen die semantische Bedeutung eines Elements, während es und seine Inhalte weiterhin unterstützender Technologie zugänglich gemacht werden.

`aria-hidden="true"` sollte nicht hinzugefügt werden, wenn:

- Das HTML-Attribut [`hidden`](/de/docs/Web/HTML/Global_attributes/hidden) vorhanden ist
- Das Element oder der Vorfahre des Elements mit [`display: none`](/de/docs/Web/CSS/display) verborgen ist
- Das Element oder der Vorfahre des Elements mit [`visibility: hidden`](/de/docs/Web/CSS/visibility) verborgen ist

In allen drei Szenarien ist es unnötig, das Attribut hinzuzufügen, da das Element bereits aus dem Zugänglichkeitsbaum entfernt wurde. Das visuelle Verbergen von Elementen mit `display` oder `visibility` verbirgt Inhalte vom Bildschirm und von unterstützenden Technologien.

Wenn `aria-hidden="false"` verwendet wird, wird das Element nicht erneut für unterstützende Technologie sichtbar gemacht, wenn einer seiner Eltern `aria-hidden="true"` spezifiziert.

## Beispiel

Das Hinzufügen von `aria-hidden="true"` zum Symbol verbirgt das Symbolzeichen davor, in den zugänglichen Namen aufgenommen zu werden.

```html
<button>
  <span class="fa fa-tweet" aria-hidden="true"></span>
  <span class="label"> Tweet </span>
</button>
```

Wir haben eine Schaltfläche mit [einem Font Awesome-Symbol](https://fontawesome.com/). Wir verbergen das Symbol vor unterstützenden Technologien mit `aria-hidden="true"`, da das Bereitstellen des Symbols für unterstützende Technologien zu Redundanzen führen könnte oder, wenn das Symbol nicht denselben Inhalt wie der sichtbare Text hat, zu Verwirrung.

## Werte

- `false`
  - : Das Element wird der Zugänglichkeits-API genauso zugänglich gemacht, als wäre es gerendert.
- `true`
  - : Das Element wird vor der Zugänglichkeits-API verborgen.
- `undefined` (Standard)
  - : Der versteckte Zustand des Elements wird vom Benutzeragenten basierend darauf bestimmt, ob es gerendert wird.

## Zugehörige Schnittstellen

- {{domxref("Element.ariaHidden")}}
  - : Die [`ariaHidden`](/de/docs/Web/API/Element/ariaHidden)-Eigenschaft, Teil der {{domxref("Element")}}-Schnittstelle, spiegelt den Wert des `aria-hidden`-Attributs wider, das angibt, ob das Element einer Zugänglichkeits-API zugänglich ist.
- {{domxref("ElementInternals.ariaHidden")}}
  - : Die [`ariaHidden`](/de/docs/Web/API/ElementInternals/ariaHidden)-Eigenschaft, Teil der {{domxref("ElementInternals")}}-Schnittstelle, spiegelt den Wert des `aria-hidden`-Attributs wider

## Zugehörige Rollen

Verwendet in **ALLEN** Rollen

## Spezifikationen

{{Specifications}}

## Siehe auch

- [`aria-disabled`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-disabled)
- [`aria-modal`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-modal)
- [`aria-expanded`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-expanded)
- HTML-Attribut [`hidden`](/de/docs/Web/HTML/Global_attributes/hidden)
- CSS-Eigenschaft {{CSSXref('display')}}
- CSS-Eigenschaft {{CSSXref('visibility')}}
