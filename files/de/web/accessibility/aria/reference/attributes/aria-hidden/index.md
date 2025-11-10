---
title: "ARIA: aria-hidden Attribut"
short-title: aria-hidden
slug: Web/Accessibility/ARIA/Reference/Attributes/aria-hidden
l10n:
  sourceCommit: 2d78abb3e793352e24e976ce0e68c08d817bd7f3
---

Der `aria-hidden` Zustand gibt an, ob das Element für eine Barrierefreiheits-API zugänglich ist.

## Beschreibung

Das `aria-hidden` Attribut kann verwendet werden, um nicht-interaktiven Inhalt von der Barrierefreiheits-API zu verbergen.

Wenn `aria-hidden="true"` zu einem Element hinzugefügt wird, wird dieses Element und alle seine Kinder aus dem Barrierefreiheitsbaum entfernt. Dies kann die Erfahrung für Benutzer von unterstützenden Technologien verbessern, indem es folgendes verbirgt:

- Rein dekorative Inhalte, wie Symbole oder Bilder
- Doppelte Inhalte, wie wiederholte Texte
- Unsichtbare oder eingeklappte Inhalte, wie Menüs

Das Vorhandensein des `aria-hidden` Attributs verbirgt Inhalte für unterstützende Technologien, jedoch wird nichts visuell verborgen.

`aria-hidden="true"` sollte nicht auf Elementen verwendet werden, die den Fokus erhalten können. Da dieses Attribut von den Kindern eines Elements geerbt wird, sollte es nicht dem Eltern- oder Vorfahren-Element eines fokussierbaren Elements hinzugefügt werden.

> [!WARNING]
> Verwenden Sie `aria-hidden="true"` nicht auf fokussierbaren Elementen.

Der versteckte Status eines Elements basiert darauf, ob es gerendert wird. Das Rendering wird üblicherweise durch CSS gesteuert. Zum Beispiel wird ein Element, dessen `display` Eigenschaft durch CSS auf `none` gesetzt ist, nicht gerendert. Ein Element wird als versteckt betrachtet, wenn es oder einer seiner Vorfahren nicht gerendert wird oder wenn sein `aria-hidden` Attributwert auf true gesetzt ist. Beachten Sie, dass ein Element und seine Kinder, die `aria-hidden="true"` deklariert haben, weiterhin sichtbar sind, es sei denn, sie werden ebenfalls durch CSS verborgen.

Seien Sie vorsichtig, wenn Sie `aria-hidden` verwenden, um sichtbar gerenderte Inhalte vor unterstützenden Technologien zu verbergen. Sie sollten sichtbare Inhalte nur verbergen, wenn dies die Erfahrung für Benutzer von unterstützenden Technologien verbessert, indem redundante oder überflüssige Inhalte entfernt werden. Nur wenn identische oder gleichwertige Bedeutung und Funktionalität den unterstützenden Technologien zugänglich gemacht wird, kann das Entfernen sichtbarer Inhalte aus der Barrierefreiheits-API in Betracht gezogen werden.

> [!NOTE]
> Berücksichtigen Sie alle Behinderungen, wenn Sie sichtbar gerenderte Inhalte vor unterstützenden Technologien verbergen. Nicht alle Benutzer von unterstützenden Technologien sind sehbehindert. Wenn der sichtbare Inhalt nicht mit dem Textinhalt in der Barrierefreiheits-API übereinstimmt, wird die Benutzererfahrung für sehende Benutzer negativ beeinflusst.

Auf den ersten Blick scheinen `aria-hidden="true"` und `role="presentation"` sowie sein Synonym `role="none"` ähnlich, aber die Absicht hinter jedem ist unterschiedlich.

- `aria-hidden="true"` entfernt das gesamte Element aus der Barrierefreiheits-API.
- `role="presentation"` und `role="none"` entfernen die semantische Bedeutung eines Elements, bloßstellen es aber weiterhin und den Inhalt für unterstützende Technologien.

`aria-hidden="true"` sollte nicht hinzugefügt werden, wenn:

- Das HTML [`hidden`](/de/docs/Web/HTML/Reference/Global_attributes/hidden) Attribut vorhanden ist
- Das Element oder der Vorfahre des Elements mit [`display: none`](/de/docs/Web/CSS/Reference/Properties/display) verborgen ist
- Das Element oder der Vorfahre des Elements mit [`visibility: hidden`](/de/docs/Web/CSS/Reference/Properties/visibility) verborgen ist

In allen drei Szenarien ist es unnötig, das Attribut hinzuzufügen, weil das Element bereits aus dem Barrierefreiheitsbaum entfernt wurde. Elemente visuell mit `display` oder `visibility` zu verbergen, verbirgt Inhalte vom Bildschirm und von unterstützenden Technologien.

Die Verwendung von `aria-hidden="false"` wird das Element nicht erneut für unterstützende Technologien zugänglich machen, wenn eines seiner Elternteile `aria-hidden="true"` angibt.

## Beispiel

Das Hinzufügen von `aria-hidden="true"` zum Symbol verbirgt das Zeichen des Symbols davor, im zugänglichen Namen eingeschlossen zu sein.

```html
<button>
  <span class="fa fa-tweet" aria-hidden="true"></span>
  <span class="label"> Tweet </span>
</button>
```

Wir haben einen Button mit [einem Font Awesome Symbol](https://fontawesome.com/). Wir verbergen das Symbol für unterstützende Technologien mit `aria-hidden="true"`, da das Offenlegen des Symbols zu Redundanz führen könnte oder, falls das Symbol nicht den gleichen Inhalt wie der sichtbare Text hat, zu Verwirrung.

## Werte

- `false`
  - : Das Element ist für die Barrierefreiheits-API zugänglich, als ob es gerendert wäre.
- `true`
  - : Das Element ist von der Barrierefreiheits-API verborgen.
- `undefined` (Standard)
  - : Der versteckte Zustand des Elements wird vom Benutzeragenten basierend darauf bestimmt, ob es gerendert wird.

## Zugehörige Schnittstellen

- [`Element.ariaHidden`](/de/docs/Web/API/Element/ariaHidden)
  - : Die [`ariaHidden`](/de/docs/Web/API/Element/ariaHidden) Eigenschaft, Teil der [`Element`](/de/docs/Web/API/Element) Schnittstelle, spiegelt den Wert des `aria-hidden` Attributs wider, das angibt, ob das Element für eine Barrierefreiheits-API zugänglich ist.
- [`ElementInternals.ariaHidden`](/de/docs/Web/API/ElementInternals/ariaHidden)
  - : Die [`ariaHidden`](/de/docs/Web/API/ElementInternals/ariaHidden) Eigenschaft, Teil der [`ElementInternals`](/de/docs/Web/API/ElementInternals) Schnittstelle, spiegelt den Wert des `aria-hidden` Attributs wider.

## Zugehörige Rollen

Wird in **ALLEN** Rollen verwendet

## Spezifikationen

{{Specifications}}

## Siehe auch

- [`aria-disabled`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-disabled)
- [`aria-modal`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-modal)
- [`aria-expanded`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-expanded)
- HTML [`hidden`](/de/docs/Web/HTML/Reference/Global_attributes/hidden) Attribut
- CSS {{CSSXref('display')}} Eigenschaft
- CSS {{CSSXref('visibility')}} Eigenschaft
