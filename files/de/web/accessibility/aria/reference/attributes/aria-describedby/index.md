---
title: aria-describedby
slug: Web/Accessibility/ARIA/Reference/Attributes/aria-describedby
l10n:
  sourceCommit: f65f7f6e4fda2cb1bd0e7db17777e2cb20be7d27
---

Das globale `aria-describedby` Attribut identifiziert das Element (oder die Elemente), das/die das Element beschreibt/beschreiben, auf dem das Attribut gesetzt ist.

## Beschreibung

Das `aria-describedby` Attribut listet die [`id`](/de/docs/Web/HTML/Global_attributes/id)s der Elemente auf, die das Objekt beschreiben. Es wird verwendet, um eine Beziehung zwischen Widgets oder Gruppen und dem Text, der sie beschreibt, herzustellen.

Das `aria-describedby` Attribut ist nicht auf Formularelemente beschränkt. Es kann auch verwendet werden, um statischen Text mit Widgets, Elementgruppen, Regionen mit Überschrift, Definitionen und mehr zu verknüpfen. Das `aria-describedby` Attribut kann mit semantischen HTML-Elementen und mit Elementen verwendet werden, die eine ARIA [`role`](/de/docs/Web/Accessibility/ARIA/Reference/Roles) haben.

Das `aria-describedby` Attribut ist dem [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby) Attribut sehr ähnlich. Während `aria-labelledby` die `id`s der Labels oder Elemente auflistet, die das Wesentliche eines Objekts beschreiben, listet `aria-describedby` die `id`s der Beschreibungen oder der Elemente auf, die zusätzliche Informationen bereitstellen, die der Benutzer möglicherweise benötigt. Sowohl `aria-labelledby` als auch `aria-describedby` verweisen auf andere Elemente, um eine Textalternative zu berechnen. Ein Label sollte prägnant sein, während eine Beschreibung ausführlichere Informationen enthalten kann; ein Label beschreibt das Wesentliche eines Objekts, während eine Beschreibung zusätzliche Informationen liefert, die der Benutzer möglicherweise benötigt.

Die über `aria-describedby` verknüpften Elemente müssen nicht sichtbar sein. Es ist möglich, auf ein Element zu verweisen, selbst wenn dieses Element versteckt ist. Zum Beispiel kann ein Formularsteuerelement eine Beschreibung haben, die standardmäßig versteckt ist und auf Anfrage über ein Erweiterungs-Widget wie ein "mehr Informationen"-Symbol angezeigt wird. Die sehenden Benutzer klicken auf das Symbol, um die Beschreibung zu sehen, während Benutzer von unterstützenden Technologien sofort darauf zugreifen können, da die Beschreibung von diesem Formularsteuerelement mit `aria-describedby` referenziert wird.

Die `aria-describedby` Eigenschaft ist angemessen, wenn der zugehörige Inhalt einfachen Text enthält. Wenn der Inhalt umfassend ist, nützliche Semantiken enthält oder eine komplexe Struktur hat, die eine Benutzernavigation erfordert, verwenden Sie stattdessen [`aria-details`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-details). `aria-details` ermöglicht es Benutzern von unterstützenden Technologien, den zugehörigen strukturierten Inhalt zu besuchen und bietet zusätzliche Navigationsbefehle, um das Verständnis der Struktur zu erleichtern oder die Informationen in kleineren Teilen zu erleben.

> [!NOTE]
> Der `aria-describedby` Inhalt sollte nur eine Textzeichenfolge sein. Wenn der Inhalt wichtige zugrunde liegende Semantik hat, ziehen Sie in Betracht, [`aria-details`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-details) zu verwenden.

## Beispiel

```html
<button aria-describedby="trash-desc">Move to trash</button>
…
<p id="trash-desc">
  Items in the trash will be permanently removed after 30 days.
</p>
```

> [!NOTE]
> Das `aria-describedby` Attribut ist nicht dafür gedacht, Beschreibungen von externen Ressourcen zu referenzieren. Da sein Wert eine oder mehrere `id`s (durch Leerzeichen getrennt, wenn mehrere) ist, muss es auf Elemente im selben DOM-Dokument verweisen.

## Werte

- ID-Referenzliste
  - : Die `id` oder eine durch Leerzeichen getrennte Liste von Element-`id`s, die das aktuelle Element beschreiben.

## Zugehörige Rollen

Verwendbar in **allen** Rollen. Nutzbar in allen HTML-Elementen ebenso.

## Spezifikationen

{{Specifications}}

## Siehe auch

- {{HTMLElement('label')}}
- [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby)
- [`aria-description`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-description)
- [`aria-details`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-details)
- [Browser- und AT-Unterstützung für `aria-describedby`](https://a11ysupport.io/tech/aria/aria-describedby_attribute)
