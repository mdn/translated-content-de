---
title: aria-describedby
slug: Web/Accessibility/ARIA/Attributes/aria-describedby
l10n:
  sourceCommit: 194bd13942ad0c532c92d364e0d5d0c36732d98c
---

{{AccessibilitySidebar}}

Das globale Attribut `aria-describedby` identifiziert das Element (oder die Elemente), das/die das Element beschreibt/beschreiben, auf dem das Attribut gesetzt ist.

## Beschreibung

Das Attribut `aria-describedby` listet die [`id`](/de/docs/Web/HTML/Global_attributes#id)s der Elemente auf, die das Objekt beschreiben. Es wird verwendet, um eine Beziehung zwischen Widgets oder Gruppen und dem Text herzustellen, der sie beschreibt.

Das Attribut `aria-describedby` ist nicht auf Formularelemente beschränkt. Es kann auch verwendet werden, um statischen Text mit Widgets, Gruppen von Elementen, Regionen mit einer Überschrift, Definitionen und mehr zu verknüpfen. Das Attribut `aria-describedby` kann mit semantischen HTML-Elementen und mit Elementen verwendet werden, die eine ARIA-[`role`](/de/docs/Web/Accessibility/ARIA/Roles) besitzen.

Das `aria-describedby`-Attribut ist dem Attribut [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-labelledby) sehr ähnlich. Während `aria-labelledby` die `id`s der Labels oder Elemente auflistet, die das Wesen eines Objekts beschreiben, listet `aria-describedby` die `id`s der Beschreibungen oder Elemente auf, die weitere Informationen bieten, die der Benutzer möglicherweise benötigt. Sowohl `aria-labelledby` als auch `aria-describedby` verweisen auf andere Elemente, um eine Textalternative zu berechnen, aber ein Label sollte prägnant sein, während eine Beschreibung dazu gedacht ist, umfassendere Informationen bereitzustellen; ein Label beschreibt das Wesen eines Objekts, während eine Beschreibung mehr Informationen bereitstellt, die der Benutzer eventuell benötigt.

Die über `aria-describedby` verknüpften Elemente müssen nicht sichtbar sein. Es ist möglich, auf ein Element zu verweisen, auch wenn dieses Element verborgen ist. Zum Beispiel kann ein Formularfeld eine Beschreibung haben, die standardmäßig versteckt ist und auf Anfrage über ein Aufklapp-Widget wie ein "mehr Informationen"-Symbol angezeigt wird. Der sehende Benutzer klickt auf das Symbol; für Benutzer von Hilfstechnologien wird die Beschreibung direkt von diesem Formularfeld über `aria-describedby` referenziert.

Die Eigenschaft `aria-describedby` ist geeignet, wenn der zugehörige Inhalt Beschreibungen als reinen Text enthält. Wenn der Inhalt eine große Menge an Inhalten, nützliche Semantiken oder eine komplexe Struktur enthält, die Benutzernavigation erfordert, verwenden Sie [`aria-details`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-details). `aria-details` ermöglicht es Benutzern von Hilfstechnologien, den zugehörigen strukturierten Inhalt zu besuchen und zusätzliche Navigationsbefehle bereitzustellen, wodurch das Verständnis der Struktur erleichtert oder das Erleben der Informationen in kleineren Stücken ermöglicht wird.

> [!NOTE]
> Der Inhalt von `aria-describedby` sollte nur eine Textzeichenkette sein. Wenn es wichtige zugrunde liegende Semantiken im Inhalt gibt, ziehen Sie in Betracht, [`aria-details`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-details) zu verwenden.

## Beispiel

```html
<button aria-describedby="trash-desc">Move to trash</button>
…
<p id="trash-desc">
  Items in the trash will be permanently removed after 30 days.
</p>
```

> [!NOTE]
> Das `aria-describedby` Attribut ist nicht dafür vorgesehen, Beschreibungen von externen Ressourcen zu referenzieren. Da sein Wert eine oder mehrere `id`s ist (durch Leerzeichen getrennt, falls mehrfach), muss es auf Elemente im selben DOM-Dokument verweisen.

## Werte

- ID-Referenzliste
  - : Die `id` oder durch Leerzeichen getrennte Liste von Element-`id`s, die das aktuelle Element beschreiben.

## Zugehörige Rollen

Wird in **allen** Rollen verwendet. In allen HTML-Elementen nutzbar.

## Spezifikationen

{{Specifications}}

## Siehe auch

- {{HTMLElement('label')}}
- [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-labelledby)
- [`aria-description`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-description)
- [`aria-details`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-details)
- [Browser-Kompatibilität und AT-Unterstützung für `aria-describedby`](https://a11ysupport.io/tech/aria/aria-describedby_attribute)
