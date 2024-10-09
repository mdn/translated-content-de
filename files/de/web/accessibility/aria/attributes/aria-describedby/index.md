---
title: aria-describedby
slug: Web/Accessibility/ARIA/Attributes/aria-describedby
l10n:
  sourceCommit: 92447fec056cc89b7f28445851bea0c981fcbc12
---

{{AccessibilitySidebar}}

Das globale `aria-describedby` Attribut identifiziert das Element (oder die Elemente), das/die das Element beschreibt/beschreiben, auf dem das Attribut gesetzt ist.

## Beschreibung

Das `aria-describedby` Attribut listet die [`id`](/de/docs/Web/HTML/Global_attributes/id)s der Elemente auf, die das Objekt beschreiben. Es wird verwendet, um eine Beziehung zwischen Widgets oder Gruppen und dem Text, der sie beschreibt, herzustellen.

Das `aria-describedby` Attribut ist nicht auf Formularsteuerelemente beschränkt. Es kann auch verwendet werden, um statischen Text mit Widgets, Gruppen von Elementen, Bereichen mit einer Überschrift, Definitionen und mehr zu verknüpfen. Das `aria-describedby` Attribut kann mit semantischen HTML-Elementen und mit Elementen, die eine ARIA [`role`](/de/docs/Web/Accessibility/ARIA/Roles) haben, verwendet werden.

Das `aria-describedby` Attribut ist dem [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-labelledby) Attribut sehr ähnlich. Während `aria-labelledby` die `id`s der Labels oder Elemente auflistet, die das Wesen eines Objekts beschreiben, listet `aria-describedby` die `id`s der Beschreibungen oder Elemente auf, die weitere Informationen bereitstellen, die der Benutzer benötigen könnte. Sowohl `aria-labelledby` als auch `aria-describedby` verweisen auf andere Elemente, um eine Textalternative zu berechnen, aber ein Label sollte prägnant sein, während eine Beschreibung eher umfassende Informationen bieten soll; ein Label beschreibt das Wesentliche eines Objekts, während eine Beschreibung weitere Informationen liefert, die der Benutzer möglicherweise benötigt.

Die über `aria-describedby` verlinkten Elemente müssen nicht sichtbar sein. Es ist möglich, auf ein Element zu verweisen, auch wenn dieses Element verborgen ist. Beispielsweise kann ein Formularsteuerelement eine Beschreibung haben, die standardmäßig verborgen ist und bei Bedarf über ein Offenlegungs-Widget wie ein "mehr Informationen"-Symbol angezeigt wird. Der sehende Benutzer klickt auf das Symbol; für Benutzer von unterstützender Technologie wird die Beschreibung direkt von diesem Formularfeld aus über `aria-describedby` referenziert.

Die `aria-describedby` Eigenschaft ist geeignet, wenn der zugeordnete Inhalt Beschreibungen enthält, die als Klartext erlebt werden. Wenn der Inhalt eine große Menge an Daten, nützliche Semantik oder eine komplexe Struktur enthält, die eine Benutzernavigation erfordert, verwenden Sie [`aria-details`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-details). `aria-details` ermöglicht es Benutzern von unterstützender Technologie, die verknüpften strukturierten Inhalte zu besuchen und zusätzliche Navigationsbefehle bereitzustellen, was es einfacher macht, die Struktur zu verstehen oder die Informationen in kleineren Abschnitten zu erleben.

> [!NOTE]
> Der `aria-describedby` Inhalt sollte nur eine Textzeichenfolge sein. Wenn wichtige zugrunde liegende Semantiken im Inhalt vorhanden sind, ziehen Sie in Betracht, [`aria-details`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-details) zu verwenden.

## Beispiel

```html
<button aria-describedby="trash-desc">Move to trash</button>
…
<p id="trash-desc">
  Items in the trash will be permanently removed after 30 days.
</p>
```

> [!NOTE]
> Das `aria-describedby` Attribut ist nicht dafür ausgelegt, Beschreibungen von externen Ressourcen zu referenzieren. Da sein Wert eine oder mehrere `id`s (durch Leerzeichen getrennt, wenn mehrere) ist, muss es auf Elemente im gleichen DOM-Dokument verweisen.

## Werte

- ID-Referenzliste
  - : Die `id` oder durch Leerzeichen getrennte Liste von Element-`id`s, die das aktuelle Element beschreiben.

## Zugeordnete Rollen

In **allen** Rollen verwendet. Auch in allen HTML-Elementen nutzbar.

## Spezifikationen

{{Specifications}}

## Siehe auch

- {{HTMLElement('label')}}
- [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-labelledby)
- [`aria-description`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-description)
- [`aria-details`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-details)
- [Browser- und AT-Unterstützung für `aria-describedby`](https://a11ysupport.io/tech/aria/aria-describedby_attribute)
