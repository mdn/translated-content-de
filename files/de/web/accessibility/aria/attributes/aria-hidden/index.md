---
title: aria-hidden
slug: Web/Accessibility/ARIA/Attributes/aria-hidden
l10n:
  sourceCommit: 194bd13942ad0c532c92d364e0d5d0c36732d98c
---

{{AccessibilitySidebar}}

Der `aria-hidden`-Zustand gibt an, ob das Element einem Barrierefreiheits-API ausgesetzt ist.

## Beschreibung

Das `aria-hidden`-Attribut kann verwendet werden, um nicht-interaktiven Inhalt vor dem Barrierefreiheits-API zu verstecken.

Das Hinzufügen von `aria-hidden="true"` zu einem Element entfernt dieses Element und alle seine Kinder aus dem Barrierefreiheit-Baum. Dies kann die Erfahrung für Nutzer von unterstützenden Technologien verbessern, indem folgendes verborgen wird:

- Inhalt, der rein dekorativ ist, wie z. B. Symbole oder Bilder
- Duplizierter Inhalt, wie z. B. wiederholter Text
- Abseits liegender oder zusammengeklappter Inhalt, wie z. B. Menüs

Das Vorhandensein des `aria-hidden`-Attributs verbirgt Inhalte vor unterstützenden Technologien, aber versteckt nichts visuell.

`aria-hidden="true"` sollte nicht bei Elementen verwendet werden, die fokussierbar sind. Da dieses Attribut von den Kindern eines Elements geerbt wird, sollte es nicht dem Elternteil oder Vorfahren eines fokussierbaren Elements hinzugefügt werden.

> [!WARNING]
> Verwenden Sie `aria-hidden="true"` nicht bei fokussierbaren Elementen.

Der versteckte Status eines Elements basiert darauf, ob es gerendert wird. Das Rendering wird normalerweise durch CSS kontrolliert. Zum Beispiel wird ein Element, dessen `display`-Eigenschaft in CSS auf `none` gesetzt ist, nicht gerendert. Ein Element wird als versteckt betrachtet, wenn es oder einer seiner Vorfahren nicht gerendert wird oder dessen `aria-hidden`-Attributwert auf true gesetzt ist. Beachten Sie, dass ein Element und seine Kinder, bei dem `aria-hidden="true"` deklariert ist, weiterhin sichtbar sein werden, es sei denn, es wird auch durch CSS verborgen.

Seien Sie vorsichtig, wenn Sie `aria-hidden` verwenden, um sichtbar gerenderten Inhalt vor unterstützenden Technologien zu verbergen. Sie sollten sichtbare Inhalte nur dann verstecken, wenn dies die Erfahrung für Nutzer von unterstützenden Technologien verbessert, indem redundanter oder überflüssiger Inhalt entfernt wird. Nur wenn identische oder äquivalente Bedeutung und Funktionalität für unterstützende Technologien freigelegt werden, kann das Entfernen sichtbarer Inhalte aus dem Barrierefreiheits-API berücksichtigt werden.

> [!NOTE]
> Berücksichtigen Sie alle Behinderungen, wenn Sie sichtbar gerenderten Inhalt vor unterstützenden Technologien verbergen. Nicht alle Nutzer von unterstützender Technologie sind sehbehindert. Wenn der sichtbare Inhalt nicht mit dem Textinhalt im Barrierefreiheits-API übereinstimmt, wird das Nutzungserlebnis für sehfähige Nutzer negativ beeinflusst.

Auf den ersten Blick scheinen `aria-hidden="true"` und das `role="presentation"` sowie sein Synonym `role="none"` ähnlich zu sein, aber die Absicht dahinter ist unterschiedlich.

- `aria-hidden="true"` entfernt das gesamte Element aus dem Barrierefreiheits-API.
- `role="presentation"` und `role="none"` entfernen die semantische Bedeutung eines Elements, während es und sein Inhalt weiterhin für unterstützende Technologien freigelegt werden.

`aria-hidden="true"` sollte nicht hinzugefügt werden, wenn:

- Das HTML-Attribut [`hidden`](/de/docs/Web/HTML/Global_attributes/hidden) vorhanden ist
- Das Element oder der Vorfahre des Elements mit [`display: none`](/de/docs/Web/CSS/display) verborgen ist
- Das Element oder der Vorfahre des Elements mit [`visibility: hidden`](/de/docs/Web/CSS/visibility) verborgen ist

In allen drei Szenarien ist das Hinzufügen des Attributs nicht notwendig, da das Element bereits aus dem Barrierefreiheit-Baum entfernt wurde. Das visuelle Verbergen von Elementen mit `display` oder `visibility` verbirgt den Inhalt sowohl vom Bildschirm als auch von unterstützenden Technologien.

Die Verwendung von `aria-hidden="false"` wird das Element nicht wieder für unterstützende Technologien freigeben, wenn einer seiner Elternteile `aria-hidden="true"` angibt.

## Beispiel

Wenn `aria-hidden="true"` zu dem Icon hinzugefügt wird, wird das Icon-Zeichen davon ausgeschlossen, im zugänglichen Namen enthalten zu sein.

```html
<button>
  <span class="fa fa-tweet" aria-hidden="true"></span>
  <span class="label"> Tweet </span>
</button>
```

Wir haben einen Button mit [einem Font Awesome Icon](https://fontawesome.com/). Wir verstecken das Icon vor unterstützenden Technologien mit `aria-hidden="true"`, da das Freilegen des Icons für unterstützende Technologien zu Redundanz führen könnte oder, wenn das Icon nicht denselben Inhalt wie der sichtbare Text hat, zu Verwirrung.

## Werte

- `false`
  - : Das Element wird dem Barrierefreiheits-API ausgesetzt, als ob es gerendert wäre.
- `true`
  - : Das Element wird vom Barrierefreiheits-API verborgen.
- `undefined` (standardmäßig)
  - : Der versteckte Status des Elements wird vom Benutzeragenten basierend darauf bestimmt, ob es gerendert wird.

## Zugehörige Schnittstellen

- [`Element.ariaHidden`](/de/docs/Web/API/Element/ariaHidden)
  - : Die [`ariaHidden`](/de/docs/Web/API/Element/ariaHidden)-Eigenschaft, Teil der [`Element`](/de/docs/Web/API/Element)-Schnittstelle, spiegelt den Wert des `aria-hidden`-Attributs wider, das angibt, ob das Element dem Barrierefreiheits-API ausgesetzt ist.
- [`ElementInternals.ariaHidden`](/de/docs/Web/API/ElementInternals/ariaHidden)
  - : Die [`ariaHidden`](/de/docs/Web/API/ElementInternals/ariaHidden)-Eigenschaft, Teil der [`ElementInternals`](/de/docs/Web/API/ElementInternals)-Schnittstelle, spiegelt den Wert des `aria-hidden`-Attributs wider

## Zugehörige Rollen

Wird in **ALLEN** Rollen verwendet

## Spezifikationen

{{Specifications}}

## Siehe auch

- [`aria-disabled`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-disabled)
- [`aria-modal`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-modal)
- [`aria-expanded`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-expanded)
- HTML-Attribut [`hidden`](/de/docs/Web/HTML/Global_attributes/hidden)
- CSS-{{CSSXref('display')}}-Eigenschaft
- CSS-{{CSSXref('visibility')}}-Eigenschaft
