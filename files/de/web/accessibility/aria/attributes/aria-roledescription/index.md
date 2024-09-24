---
title: aria-roledescription
slug: Web/Accessibility/ARIA/Attributes/aria-roledescription
l10n:
  sourceCommit: 194bd13942ad0c532c92d364e0d5d0c36732d98c
---

{{AccessibilitySidebar}}

Das Attribut `aria-roledescription` definiert eine menschenlesbare, vom Autor lokalisierte Beschreibung für die Rolle eines Elements.

## Beschreibung

Einige unterstützende Technologien (<abbr>AT</abbr>), wie Bildschirmlesegeräte, präsentieren die Rolle eines Elements als Teil der Benutzererfahrung. Das Attribut `aria-roledescription` bietet eine Möglichkeit, einen anderen menschenlesbaren Namen zu definieren, der von ATs als Rolle eines Elements präsentiert wird.

> [!NOTE]
> Verwenden Sie aria-roledescription nur, um den Zweck nicht-interaktiver Container-Rollen zu verdeutlichen und um einer Komponente eine spezifischere Beschreibung zu geben.

Benutzer verlassen sich auf die Darstellung des bekannten Rollennamens, um den Zweck des Elements zu verstehen und, wenn es sich um ein Widget handelt, wie sie damit interagieren sollen. Verwenden Sie also `aria-roledescription` nur, um den Zweck nicht-interaktiver Container-Rollen wie `group` oder `region` zu verdeutlichen und um einer Komponente eine spezifischere Beschreibung zu geben.

Die Eigenschaft `aria-roledescription` überschreibt, wie ATs den Namen einer Rolle lokalisieren und ausdrücken. Wenn Sie einen Rollennamen übergehen, den der Benutzer versteht, können Sie möglicherweise die Fähigkeit eines Benutzers, ein Element zu verstehen und damit zu interagieren, negativ beeinflussen.

Vermeiden Sie die Verwendung des Attributs `aria-roledescription`. Wenn ein Anwendungsfall besonders einzigartig erscheint und eine einzigartige Rollenbeschreibung rechtfertigt, können die Interaktionen oftmals in kleinere Teile zerlegt werden, die relevante Rollen haben.

Wenn es keine semantischen oder ARIA-Widget-Rollen gibt, die dem Interaktionsmodell Ihres Widgets entsprechen, verwenden Sie `role="application"`, bieten Sie eine `aria-roledescription` mit einem menschenlesbaren, vom Autor lokalisierten benutzerdefinierten Rollennamen an und verwenden Sie `aria-describedby`, um Benutzern Anweisungen zu geben.

ATs können die Namen von ARIA-Rollen anpassen und lokalisieren. Wenn Sie `aria-roledescription` verwenden, um zu ändern, wie der Rollenname dem Benutzer präsentiert wird, denken Sie daran, die Lokalisierung zu berücksichtigen. Der Wert sollte übersetzt werden, wenn eine Seite lokalisiert wird.

Das Ändern der Präsentation der Rolle für den Benutzer hat keinen Einfluss auf die Funktionalität des Elements. Wenn ein Element z. B. eine Rolle als [`region`](/de/docs/Web/Accessibility/ARIA/Roles/region_role) oder [`button`](/de/docs/Web/Accessibility/ARIA/Roles/button_role) hat und AT Funktionen zum Navigieren zur nächsten Region oder Schaltfläche bereitstellt, erlaubt AT diese Funktionen weiterhin, um zu Regionen und Schaltflächen zu navigieren, auch wenn Sie `aria-roledescription` auf `continent` und `escape` setzen.

Vermeiden Sie erneut die Verwendung von `aria-roledescription`. In diesem Beispiel hat `escape` keine relevante Bedeutung für den Benutzer, aber `button` mit "escape" als Beschriftung schon.

Wenn Sie `aria-roledescription` verwenden, stellen Sie auch sicher, dass das Element, auf das es angewendet wird, eine gültige ARIA [`role`](/de/docs/Web/Accessibility/ARIA/Roles) hat oder implizite Rollen-Semantik besitzt und dass der Wert selbst nicht leer ist und mehr als nur Leerzeichen enthält.

`aria-roledescription` ist erforderlich, wenn `aria-brailleroledescription` verwendet wird. Beachten Sie, dass `aria-brailleroledescription` im Allgemeinen nur in seltenen Fällen verwendet werden sollte, wenn eine `aria-roledescription` übermäßig ausführlich ist, wenn sie in Braille dargestellt wird.

## Beispiele

Das folgende Beispiel zeigt die Verwendung von `aria-roledescription`, um anzuzeigen, dass ein nicht-interaktiver Container eine "Folie" in einer web-basierten Präsentationsanwendung ist.

```html
<div
  role="article"
  aria-roledescription="slide"
  id="slide"
  aria-labelledby="slideheading">
  <h1 id="slideheading">Quarterly Report</h1>
  <!-- remaining slide contents -->
</div>
```

In den vorherigen Beispielen könnte ein Bildschirmleser-Benutzer "Quarterly Report, slide" hören, anstatt des weniger präzisen "Quarterly Report, article".

## Werte

- `<string>`
  - : Eine nicht leere Zeichenfolge, ein unbeschränkter Werttyp, der mehr als nur Leerzeichen enthält.

## Zugehörige Schnittstellen

- {{domxref("Element.ariaRoleDescription")}}
  - : Die [`ariaRoleDescription`](/de/docs/Web/API/Element/ariaRoleDescription)-Eigenschaft, Teil der {{domxref("Element")}}-Schnittstelle, spiegelt den Wert des `aria-roledescription`-Attributs wider.
- {{domxref("ElementInternals.ariaRoleDescription")}}
  - : Die [`ariaRoleDescription`](/de/docs/Web/API/ElementInternals/ariaRoleDescription)-Eigenschaft, Teil der {{domxref("ElementInternals")}}-Schnittstelle, spiegelt den Wert des `aria-roledescription`-Attributs wider.

## Zugehörige Rollen

Unterstützt durch alle Rollen und alle Basismarkup-Elemente außer `role="generic"`.

## Spezifikationen

{{Specifications}}

## Siehe auch

- [ARIA-Rollen](/de/docs/Web/Accessibility/ARIA/Roles)
