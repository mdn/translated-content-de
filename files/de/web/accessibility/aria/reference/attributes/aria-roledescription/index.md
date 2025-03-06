---
title: aria-roledescription
slug: Web/Accessibility/ARIA/Reference/Attributes/aria-roledescription
l10n:
  sourceCommit: f65f7f6e4fda2cb1bd0e7db17777e2cb20be7d27
---

Das `aria-roledescription`-Attribut definiert eine menschenlesbare, vom Autor lokalisierte Beschreibung für die Rolle eines Elements.

## Beschreibung

Einige unterstützende Technologien (<abbr>AT</abbr>), wie Bildschirmlesegeräte, präsentieren die Rolle eines Elements als Teil der Benutzererfahrung. Das `aria-roledescription`-Attribut bietet eine Möglichkeit, einen anderen menschenlesbaren Namen zu definieren, der von AT als Rolle eines Elements präsentiert wird.

> [!NOTE]
> Verwenden Sie `aria-roledescription` nur, um den Zweck von nicht-interaktiven Containerrollen zu verdeutlichen und um einem Widget eine spezifischere Beschreibung zu geben.

Benutzer sind auf die Präsentation eines bekannten Rollennamens angewiesen, um den Zweck des Elements zu verstehen und, wenn es sich um ein Widget handelt, zu wissen, wie man damit interagiert. Verwenden Sie also `aria-roledescription` nur, um den Zweck von nicht-interaktiven Containerrollen wie `group` oder `region` zu verdeutlichen und um einem Widget eine spezifischere Beschreibung zu geben.

Die `aria-roledescription`-Eigenschaft überschreibt, wie ATs den Namen einer Rolle lokalisieren und darstellen. Wenn Sie einen Rollennamen überschreiben, den der Benutzer versteht, kann dies möglicherweise die Fähigkeit des Benutzers, ein Element zu verstehen und damit zu interagieren, negativ beeinflussen.

Vermeiden Sie die Verwendung des `aria-roledescription`-Attributs. Wenn ein Anwendungsfall besonders erscheint, der einer einzigartigen Rollbeschreibung würdig ist, können die Interaktionen oft in kleinere Teile zerlegt werden, die relevante Rollen haben.

Wenn es keine semantischen oder ARIA-Widget-Rollen gibt, die dem Interaktionsmodell Ihres Widgets entsprechen, verwenden Sie `role="application"`, geben Sie eine `aria-roledescription` mit einem menschenlesbaren, vom Autor lokalisierten benutzerdefinierten Rollennamen an und verwenden Sie `aria-describedby`, um dem Benutzer Anweisungen zu geben.

ATs können die Namen von ARIA-Rollen anpassen und lokalisieren. Wenn Sie `aria-roledescription` verwenden, um zu ändern, wie der Rollename dem Benutzer präsentiert wird, denken Sie daran, die Lokalisierung zu berücksichtigen. Der Wert sollte übersetzt werden, wenn eine Seite lokalisiert wird.

Die Änderung der Präsentation der Rolle für den Benutzer hat keinen Einfluss auf die Funktionalität des Elements. Wenn ein Element beispielsweise eine Rolle von [`region`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/region_role) oder [`button`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/button_role) hat, wenn AT Funktionen zum Navigieren zur nächsten Region oder Schaltfläche bereitstellt, erlaubt das Setzen von `aria-roledescription` auf `continent` bzw. `escape` dem AT dennoch, diese Funktionen auszuführen.

Vermeiden Sie erneut die Verwendung von `aria-roledescription`. In diesem Beispiel hat `escape` keine relevante Bedeutung für den Benutzer, aber `button` mit "escape" als Bezeichnung schon.

Stellen Sie bei der Verwendung von `aria-roledescription` auch sicher, dass das Element, auf das es angewendet wird, eine gültige ARIA [`role`](/de/docs/Web/Accessibility/ARIA/Reference/Roles) hat oder implizite Rollensemantik hat und dass der Wert selbst nicht leer ist und mehr enthält als nur Leerzeichen.

Das `aria-roledescription` ist erforderlich, wenn `aria-brailleroledescription` verwendet wird. Beachten Sie, dass `aria-brailleroledescription` im Allgemeinen nur in seltenen Fällen verwendet werden sollte, wenn ein `aria-roledescription` übermäßig ausführlich ist, wenn es in Braille gerendert wird.

## Beispiele

Das folgende Beispiel zeigt die Verwendung von `aria-roledescription`, um anzuzeigen, dass es sich bei einem nicht-interaktiven Container um eine "Folie" in einer web-basierten Präsentationsanwendung handelt.

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

In den vorherigen Beispielen könnte ein Benutzer eines Bildschirmlesers "Quarterly Report, slide" hören, anstatt des weniger präzisen "Quarterly Report, article".

## Werte

- `<string>`
  - : Eine nicht-leere Zeichenkette, ein nicht eingeschränkter Wertetyp, der mehr als nur Leerzeichen enthält.

## Zugehörige Schnittstellen

- [`Element.ariaRoleDescription`](/de/docs/Web/API/Element/ariaRoleDescription)
  - : Die [`ariaRoleDescription`](/de/docs/Web/API/Element/ariaRoleDescription) Eigenschaft, Teil der [`Element`](/de/docs/Web/API/Element) Schnittstelle, spiegelt den Wert des `aria-roledescription`-Attributs wider.
- [`ElementInternals.ariaRoleDescription`](/de/docs/Web/API/ElementInternals/ariaRoleDescription)
  - : Die [`ariaRoleDescription`](/de/docs/Web/API/ElementInternals/ariaRoleDescription) Eigenschaft, Teil der [`ElementInternals`](/de/docs/Web/API/ElementInternals) Schnittstelle, spiegelt den Wert des `aria-roledescription`-Attributs wider.

## Zugehörige Rollen

Unterstützt von allen Rollen und von allen Grund-Markup-Elementen außer `role="generic"`.

## Spezifikationen

{{Specifications}}

## Siehe auch

- [ARIA-Rollen](/de/docs/Web/Accessibility/ARIA/Reference/Roles)
