---
title: aria-describedby
slug: Web/Accessibility/ARIA/Reference/Attributes/aria-describedby
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

Das globale Attribut `aria-describedby` identifiziert das Element (oder die Elemente), das bzw. die das Element beschreibt, auf dem das Attribut gesetzt ist.

## Beschreibung

Das Attribut `aria-describedby` listet die [`id`](/de/docs/Web/HTML/Reference/Global_attributes/id)s der Elemente auf, die das Objekt beschreiben. Es wird verwendet, um eine Beziehung zwischen Widgets oder Gruppen und dem Text herzustellen, der sie beschreibt.

Das Attribut `aria-describedby` ist nicht auf Formularsteuerelemente beschränkt. Es kann auch verwendet werden, um statischen Text mit Widgets, Elementgruppen, Regionen, die eine Überschrift haben, Definitionen und mehr zu verknüpfen. Das Attribut `aria-describedby` kann mit semantischen HTML-Elementen und mit Elementen verwendet werden, die eine ARIA [`role`](/de/docs/Web/Accessibility/ARIA/Reference/Roles) haben.

Das Attribut `aria-describedby` ist dem Attribut [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby) sehr ähnlich. Während `aria-labelledby` die `id`s der Labels oder Elemente auflistet, die das Wesentliche eines Objekts beschreiben, listet `aria-describedby` die `id`s der Beschreibungen oder Elemente auf, die dem Benutzer zusätzliche Informationen liefern könnten. Sowohl `aria-labelledby` als auch `aria-describedby` referenzieren andere Elemente, um eine Textalternative zu berechnen, aber ein Label sollte prägnant sein, während eine Beschreibung dazu gedacht ist, umfassendere Informationen bereitzustellen; ein Label beschreibt das Wesentliche eines Objekts, während eine Beschreibung zusätzliche Informationen liefert, die der Benutzer eventuell benötigt.

Die über `aria-describedby` verknüpften Elemente müssen nicht sichtbar sein. Es ist möglich, ein Element zu referenzieren, auch wenn es versteckt ist. Zum Beispiel kann ein Formularsteuerelement eine Beschreibung haben, die standardmäßig ausgeblendet ist und bei Bedarf über ein Erweitern-Widget wie ein "mehr Informationen"-Symbol angezeigt wird. Die sehenden Benutzer klicken auf das Symbol, um die Beschreibung zu sehen, während Benutzer von unterstützenden Technologien sofort darauf zugreifen können, da die Beschreibung über `aria-describedby` von diesem Formularsteuerelement referenziert wird.

Die `aria-describedby`-Eigenschaft ist geeignet, wenn die zugehörigen Inhalte einfachen Text enthalten. Wenn die Inhalte umfangreich sind, nützliche Semantik enthalten oder eine komplexe Struktur erfordern, die eine Benutzernavigation erfordert, verwenden Sie stattdessen [`aria-details`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-details). `aria-details` ermöglicht es Benutzern von unterstützenden Technologien, die zugehörigen strukturierten Inhalte zu besuchen und bietet zusätzliche Navigationsbefehle, die das Verständnis der Struktur erleichtern oder die Informationen in kleinere Teile aufteilen.

> [!NOTE]
> Der `aria-describedby`-Inhalt sollte nur eine Textzeichenfolge sein. Wenn die Inhalte wichtige zugrunde liegende Semantik enthalten, ziehen Sie in Betracht, [`aria-details`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-details) zu verwenden.

## Beispiel

```html
<button aria-describedby="trash-desc">Move to trash</button>
…
<p id="trash-desc">
  Items in the trash will be permanently removed after 30 days.
</p>
```

> [!NOTE]
> Das Attribut `aria-describedby` ist nicht dazu gedacht, Beschreibungen von externen Ressourcen zu referenzieren. Da sein Wert eine oder mehrere `id`s ist (durch Leerzeichen getrennt, wenn mehrere), muss es Elemente im gleichen DOM-Dokument referenzieren.

## Werte

- ID-Referenzliste
  - : Die `id` oder durch Leerzeichen getrennte Liste von Element-`id`s, die das aktuelle Element beschreiben.

## Zugehörige Rollen

Verwendbar in **allen** Rollen. Nutzbar in allen HTML-Elementen.

## Spezifikationen

{{Specifications}}

## Siehe auch

- {{HTMLElement('label')}}
- [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby)
- [`aria-description`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-description)
- [`aria-details`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-details)
- [Browser und AT-Unterstützung für `aria-describedby`](https://a11ysupport.io/tech/aria/aria-describedby_attribute)
