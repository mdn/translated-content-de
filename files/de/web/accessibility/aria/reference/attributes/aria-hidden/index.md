---
title: aria-hidden
slug: Web/Accessibility/ARIA/Reference/Attributes/aria-hidden
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

Der `aria-hidden` Zustand gibt an, ob das Element für eine Barrierefreiheits-API sichtbar ist.

## Beschreibung

Das `aria-hidden` Attribut kann verwendet werden, um nicht-interaktiven Inhalt vor der Barrierefreiheits-API zu verbergen.

Das Hinzufügen von `aria-hidden="true"` zu einem Element entfernt dieses Element und all seine untergeordneten Elemente aus dem Barrierefreiheitsbaum. Dies kann das Erlebnis für Benutzer von Assistenztechnologien verbessern, indem Folgendes verborgen wird:

- Rein dekorativer Inhalt, wie Icons oder Bilder
- Duplizierter Inhalt, wie wiederholter Text
- Inhalt außerhalb des Bildschirms oder eingeklappter Inhalt, wie Menüs

Die Anwesenheit des `aria-hidden` Attributs verbirgt Inhalte vor Assistenztechnologien, verändert aber nicht die visuelle Anzeige.

`aria-hidden="true"` sollte nicht auf Elemente angewendet werden, die den Fokus erhalten können. Da dieses Attribut außerdem von den untergeordneten Elementen eines Elements vererbt wird, sollte es nicht auf das übergeordnete oder ein Vorfahren-Element eines fokussierbaren Elements gesetzt werden.

> [!WARNING]
> Verwenden Sie `aria-hidden="true"` nicht auf fokussierbaren Elementen.

Der versteckte Status eines Elements basiert darauf, ob es gerendert wird. Das Rendern wird normalerweise durch CSS gesteuert. Beispielsweise wird ein Element, dessen `display`-Eigenschaft per CSS auf `none` gesetzt ist, nicht gerendert. Ein Element gilt als versteckt, wenn es selbst oder einer seiner Vorfahren nicht gerendert wird oder deren `aria-hidden`-Attributwert auf wahr gesetzt ist. Beachten Sie, dass ein Element und seine untergeordneten Elemente, welches `aria-hidden="true"` erklärt hat, weiterhin sichtbar sind, es sei denn, sie werden auch durch CSS verborgen.

Seien Sie vorsichtig, wenn Sie `aria-hidden` verwenden, um sichtbar gerenderten Inhalt vor Assistenztechnologien zu verstecken. Sie sollten keinen sichtbaren Inhalt verbergen, es sei denn, dies verbessert das Erlebnis für Benutzer von Assistenztechnologien, indem redundanter oder überflüssiger Inhalt entfernt wird. Nur wenn identische oder gleichwertige Bedeutung und Funktionalität für Assistenztechnologien verfügbar ist, kann das Entfernen sichtbarer Inhalte aus der Barrierefreiheits-API in Betracht gezogen werden.

> [!NOTE]
> Berücksichtigen Sie alle Behinderungen, wenn Sie sichtbar gerenderten Inhalt vor Assistenztechnologien verbergen. Nicht alle Benutzer von Assistenztechnologien sind sehbehindert. Wenn sichtbarer Inhalt nicht mit Textinhalt in der Barrierefreiheits-API übereinstimmt, wird das Benutzererlebnis für sehende Benutzer negativ beeinflusst.

Auf den ersten Blick scheinen `aria-hidden="true"` und `role="presentation"` und dessen Synonym `role="none"` ähnlich zu sein, jedoch ist die Absicht hinter jedem unterschiedlich.

- `aria-hidden="true"` entfernt das gesamte Element aus der Barrierefreiheits-API.
- `role="presentation"` und `role="none"` entfernen die semantische Bedeutung eines Elements, während es selbst und sein Inhalt weiterhin für Assistenztechnologien sichtbar bleibt.

`aria-hidden="true"` sollte nicht hinzugefügt werden, wenn:

- Das HTML-Attribut [`hidden`](/de/docs/Web/HTML/Reference/Global_attributes/hidden) vorhanden ist.
- Das Element oder ein Vorfahren-Element wird mit [`display: none`](/de/docs/Web/CSS/display) verborgen.
- Das Element oder ein Vorfahren-Element wird mit [`visibility: hidden`](/de/docs/Web/CSS/visibility) verborgen.

In allen drei Szenarien ist es unnötig, das Attribut hinzuzufügen, da das Element bereits aus dem Barrierefreiheitsbaum entfernt wurde. Das visuelle Verbergen von Elementen mit `display` oder `visibility` verbirgt Inhalte sowohl vom Bildschirm als auch von Assistenztechnologien.

Die Verwendung von `aria-hidden="false"` wird das Element nicht erneut für Assistenztechnologien sichtbar machen, wenn einer der Elternteile `aria-hidden="true"` angibt.

## Beispiel

Das Hinzufügen von `aria-hidden="true"` zum Icon verbirgt das Icon-Zeichen davor, im zugänglichen Namen enthalten zu sein.

```html
<button>
  <span class="fa fa-tweet" aria-hidden="true"></span>
  <span class="label"> Tweet </span>
</button>
```

Wir haben einen Button mit [einem Font Awesome Icon](https://fontawesome.com/). Wir verbergen das Icon vor Assistenztechnologien mit `aria-hidden="true"`, da das Icon für Assistenztechnologien zu Redundanz führen könnte oder, wenn das Icon nicht den gleichen Inhalt wie der sichtbare Text hat, Verwirrung stiften könnte.

## Werte

- `false`
  - : Das Element ist der Barrierefreiheits-API so ausgesetzt, als wäre es gerendert.
- `true`
  - : Das Element ist vor der Barrierefreiheits-API verborgen.
- `undefined` (Standard)
  - : Der versteckte Status des Elements wird vom Benutzer-Agenten basierend darauf bestimmt, ob es gerendert wird.

## Zugehörige Schnittstellen

- [`Element.ariaHidden`](/de/docs/Web/API/Element/ariaHidden)
  - : Die [`ariaHidden`](/de/docs/Web/API/Element/ariaHidden)-Eigenschaft, Teil der [`Element`](/de/docs/Web/API/Element)-Schnittstelle, spiegelt den Wert des `aria-hidden` Attributs wider, das angibt, ob das Element für eine Barrierefreiheits-API sichtbar ist.
- [`ElementInternals.ariaHidden`](/de/docs/Web/API/ElementInternals/ariaHidden)
  - : Die [`ariaHidden`](/de/docs/Web/API/ElementInternals/ariaHidden)-Eigenschaft, Teil der [`ElementInternals`](/de/docs/Web/API/ElementInternals)-Schnittstelle, spiegelt den Wert des `aria-hidden` Attributs wider.

## Zugehörige Rollen

Verwendet in **ALLEN** Rollen

## Spezifikationen

{{Specifications}}

## Siehe auch

- [`aria-disabled`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-disabled)
- [`aria-modal`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-modal)
- [`aria-expanded`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-expanded)
- HTML [`hidden`](/de/docs/Web/HTML/Reference/Global_attributes/hidden) Attribut
- CSS {{CSSXref('display')}} Eigenschaft
- CSS {{CSSXref('visibility')}} Eigenschaft
