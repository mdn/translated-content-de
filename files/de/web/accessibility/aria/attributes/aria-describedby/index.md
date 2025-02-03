---
title: aria-describedby
slug: Web/Accessibility/ARIA/Attributes/aria-describedby
l10n:
  sourceCommit: c12ec1d61c6a0ad41fccbfb4141616d3097f21fc
---

{{AccessibilitySidebar}}

Das globale Attribut `aria-describedby` identifiziert das Element (oder die Elemente), das/die das Element beschreibt, auf dem das Attribut gesetzt ist.

## Beschreibung

Das Attribut `aria-describedby` listet die [`id`](/de/docs/Web/HTML/Global_attributes/id)s der Elemente auf, die das Objekt beschreiben. Es wird verwendet, um eine Beziehung zwischen Widgets oder Gruppen und dem Text, der sie beschreibt, herzustellen.

Das Attribut `aria-describedby` ist nicht auf Formularelemente beschränkt. Es kann auch verwendet werden, um statischen Text mit Widgets, Elementgruppen, Regionen mit Überschrift, Definitionen und mehr zu verknüpfen. Das Attribut `aria-describedby` kann mit semantischen HTML-Elementen und mit Elementen verwendet werden, die eine ARIA [`role`](/de/docs/Web/Accessibility/ARIA/Roles) haben.

Das Attribut `aria-describedby` ist dem Attribut [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-labelledby) sehr ähnlich. Während `aria-labelledby` die `id`s der Labels oder Elemente auflistet, die das Wesentliche eines Objekts beschreiben, listet `aria-describedby` die `id`s der Beschreibungen oder Elemente auf, die dem Benutzer möglicherweise benötigtere Informationen liefern. Sowohl `aria-labelledby` als auch `aria-describedby` beziehen sich auf andere Elemente, um eine Textalternative zu berechnen, aber ein Label sollte prägnant sein, während eine Beschreibung dazu gedacht ist, ausführlichere Informationen bereitzustellen; ein Label beschreibt das Wesentliche eines Objekts, während eine Beschreibung zusätzliche Informationen liefert, die der Benutzer möglicherweise benötigt.

Die über `aria-describedby` verknüpften Elemente müssen nicht sichtbar sein. Es ist möglich, auf ein Element zu verweisen, selbst wenn dieses Element versteckt ist. Ein Beispiel wäre ein Formularelement, das standardmäßig eine Beschreibung hat, die ausgeblendet und bei Bedarf über ein Anzeige-Widget wie ein "mehr Informationen"-Symbol angezeigt wird. Die sehenden Benutzer klicken auf das Symbol, um die Beschreibung zu sehen, während Benutzer von unterstützenden Technologien sofort darauf zugreifen können, da die Beschreibung über `aria-describedby` von diesem Formularelement referenziert wird.

Die Eigenschaft `aria-describedby` ist geeignet, wenn der assoziierte Inhalt reinen Text enthält. Wenn der Inhalt umfangreich ist, nützliche Semantik enthält oder eine komplexe Struktur aufweist, die eine Benutzerinteraktion erfordert, sollte stattdessen [`aria-details`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-details) verwendet werden. `aria-details` ermöglicht es Benutzern von unterstützenden Technologien, den zugehörigen strukturierten Inhalt zu besuchen und zusätzliche Navigationsbefehle bereitzustellen, wodurch es einfacher wird, die Struktur zu verstehen oder die Informationen in kleinere Teile zu erleben.

> [!NOTE]
> Der Inhalt von `aria-describedby` sollte nur eine Textzeichenfolge sein. Wenn im Inhalt wichtige zugrunde liegende Semantiken vorhanden sind, sollten Sie überlegen, [`aria-details`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-details) zu verwenden.

## Beispiel

```html
<button aria-describedby="trash-desc">Move to trash</button>
…
<p id="trash-desc">
  Items in the trash will be permanently removed after 30 days.
</p>
```

> [!NOTE]
> Das Attribut `aria-describedby` ist nicht dafür ausgelegt, Beschreibungen aus externen Ressourcen zu referenzieren. Da sein Wert eine oder mehrere `id`s (durch Leerzeichen getrennt, falls mehrere vorhanden sind) ist, muss es auf Elemente im selben DOM-Dokument verweisen.

## Werte

- ID-Referenzliste
  - : Die `id` oder durch Leerzeichen getrennte Liste von Element-`id`s, die das aktuelle Element beschreiben.

## Zugehörige Rollen

In **allen** Rollen verwendet. Verwendbar in allen HTML-Elementen.

## Spezifikationen

{{Specifications}}

## Siehe auch

- {{HTMLElement('label')}}
- [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-labelledby)
- [`aria-description`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-description)
- [`aria-details`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-details)
- [Browser- und AT-Unterstützung für `aria-describedby`](https://a11ysupport.io/tech/aria/aria-describedby_attribute)
