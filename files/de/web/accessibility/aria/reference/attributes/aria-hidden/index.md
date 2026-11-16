---
title: "ARIA: aria-hidden-Attribut"
short-title: aria-hidden
slug: Web/Accessibility/ARIA/Reference/Attributes/aria-hidden
l10n:
  sourceCommit: d9e522ed63f204df4b9ab3ed6c8208ce089fa868
---

Der Zustand `aria-hidden` gibt an, ob ein Element über eine Barrierefreiheits-API zugänglich ist.

## Beschreibung

Mit dem Attribut `aria-hidden` lassen sich nicht interaktive Inhalte vor der Barrierefreiheits-API verbergen.

Wenn Sie einem Element `aria-hidden="true"` hinzufügen, werden dieses Element und alle seine untergeordneten Elemente aus dem Barrierefreiheitsbaum entfernt. Dies kann die Nutzung für Personen verbessern, die assistive Technologien verwenden, indem Folgendes verborgen wird:

- Rein dekorative Inhalte wie Icons oder Bilder
- Doppelte Inhalte wie wiederholter Text
- Inhalte außerhalb des sichtbaren Bereichs oder eingeklappte Inhalte wie Menüs

Das Attribut `aria-hidden` verbirgt Inhalte vor assistiven Technologien, blendet sie aber nicht visuell aus.

`aria-hidden="true"` sollte nicht für Elemente verwendet werden, die den Fokus erhalten können. Da dieses Attribut an untergeordnete Elemente vererbt wird, sollte es außerdem nicht einem Elternelement oder Vorfahren eines fokussierbaren Elements hinzugefügt werden.

> [!WARNING]
> Verwenden Sie `aria-hidden="true"` nicht für fokussierbare Elemente.

Ob ein Element als verborgen gilt, hängt davon ab, ob es gerendert wird. Das Rendering wird in der Regel durch CSS gesteuert. Ein Element wird beispielsweise nicht gerendert, wenn seine Eigenschaft `display` per CSS auf `none` gesetzt ist. Ein Element gilt als verborgen, wenn es selbst oder einer seiner Vorfahren nicht gerendert wird oder wenn sein Attribut `aria-hidden` auf true gesetzt ist. Beachten Sie, dass ein Element mit `aria-hidden="true"` und seine untergeordneten Elemente weiterhin sichtbar sind, sofern sie nicht zusätzlich durch CSS ausgeblendet werden.

Seien Sie vorsichtig, wenn Sie `aria-hidden` verwenden, um sichtbar gerenderte Inhalte vor assistiven Technologien zu verbergen. Sie sollten sichtbare Inhalte nur dann verbergen, wenn dadurch redundante oder überflüssige Inhalte entfernt werden und sich die Nutzung für Personen verbessert, die assistive Technologien verwenden. Sichtbare Inhalte sollten nur dann aus der Barrierefreiheits-API entfernt werden, wenn assistive Technologien weiterhin Zugang zu identischen oder gleichwertigen Informationen und Funktionen haben.

> [!NOTE]
> Berücksichtigen Sie alle Arten von Behinderungen, wenn Sie sichtbar gerenderte Inhalte vor assistiven Technologien verbergen. Nicht alle Personen, die assistive Technologien verwenden, sind sehbehindert. Wenn sichtbare Inhalte nicht mit den Textinhalten in der Barrierefreiheits-API übereinstimmen, beeinträchtigt dies die Nutzung für sehende Personen.

Auf den ersten Blick scheinen `aria-hidden="true"`, `role="presentation"` und dessen Synonym `role="none"` ähnlich zu sein. Sie verfolgen jedoch unterschiedliche Zwecke.

- `aria-hidden="true"` entfernt das gesamte Element aus der Barrierefreiheits-API.
- `role="presentation"` und `role="none"` entfernen die semantische Bedeutung eines Elements, machen es und seinen Inhalt aber weiterhin für assistive Technologien zugänglich.

`aria-hidden="true"` sollte nicht hinzugefügt werden, wenn:

- das HTML-Attribut [`hidden`](/de/docs/Web/HTML/Reference/Global_attributes/hidden) vorhanden ist
- das Element oder einer seiner Vorfahren durch [`display: none`](/de/docs/Web/CSS/Reference/Properties/display) verborgen ist
- das Element oder einer seiner Vorfahren durch [`visibility: hidden`](/de/docs/Web/CSS/Reference/Properties/visibility) verborgen ist

In allen drei Fällen ist das Attribut unnötig, da das Element bereits aus dem Barrierefreiheitsbaum entfernt wurde. Werden Elemente mit `display` oder `visibility` visuell ausgeblendet, sind ihre Inhalte weder auf dem Bildschirm noch für assistive Technologien zugänglich.

`aria-hidden="false"` macht ein Element nicht wieder für assistive Technologien zugänglich, wenn für eines seiner Elternelemente `aria-hidden="true"` festgelegt ist.

## Werte

- `false`
  - : Das Element ist über die Barrierefreiheits-API zugänglich, als würde es gerendert.
- `true`
  - : Das Element ist vor der Barrierefreiheits-API verborgen.
- `undefined` (Standardwert)
  - : Der Benutzeragent bestimmt anhand des Renderings, ob das Element verborgen ist.

## Zugehörige Schnittstellen

- [`Element.ariaHidden`](/de/docs/Web/API/Element/ariaHidden)
  - : Die Eigenschaft [`ariaHidden`](/de/docs/Web/API/Element/ariaHidden) der Schnittstelle [`Element`](/de/docs/Web/API/Element) spiegelt den Wert des Attributs `aria-hidden` wider. Dieser gibt an, ob das Element über eine Barrierefreiheits-API zugänglich ist.
- [`ElementInternals.ariaHidden`](/de/docs/Web/API/ElementInternals/ariaHidden)
  - : Die Eigenschaft [`ariaHidden`](/de/docs/Web/API/ElementInternals/ariaHidden) der Schnittstelle [`ElementInternals`](/de/docs/Web/API/ElementInternals) spiegelt den Wert des Attributs `aria-hidden` wider.

## Zugehörige Rollen

Wird in **ALLEN** Rollen verwendet.

## Beispiel

Wenn Sie dem Icon `aria-hidden="true"` hinzufügen, wird das Icon-Zeichen nicht in den zugänglichen Namen aufgenommen.

```html
<button>
  <span class="fa fa-tweet" aria-hidden="true"></span>
  <span class="label"> Tweet </span>
</button>
```

Die Schaltfläche enthält [ein Font-Awesome-Icon](https://fontawesome.com/). Wir verbergen das Icon mit `aria-hidden="true"` vor assistiven Technologien, da es sonst zu redundanten Informationen oder – wenn das Icon nicht denselben Inhalt wie der sichtbare Text vermittelt – zu Verwirrung kommen könnte.

## Spezifikationen

{{Specifications}}

## Siehe auch

- [`aria-disabled`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-disabled)
- [`aria-modal`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-modal)
- [`aria-expanded`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-expanded)
- HTML-Attribut [`hidden`](/de/docs/Web/HTML/Reference/Global_attributes/hidden)
- CSS-Eigenschaft {{CSSXref('display')}}
- CSS-Eigenschaft {{CSSXref('visibility')}}
