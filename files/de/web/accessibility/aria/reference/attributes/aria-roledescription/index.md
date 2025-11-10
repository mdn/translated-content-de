---
title: "ARIA: aria-roledescription Attribut"
short-title: aria-roledescription
slug: Web/Accessibility/ARIA/Reference/Attributes/aria-roledescription
l10n:
  sourceCommit: a4fcf79b60471db6f148fa4ba36f2cdeafbbeb70
---

Das `aria-roledescription` Attribut definiert eine für Menschen lesbare, vom Autor lokalisierte Beschreibung für die Rolle eines Elements.

## Beschreibung

Einige unterstützende Technologien (<abbr>AT</abbr>), wie Bildschirmlesegeräte, präsentieren die Rolle eines Elements als Teil der Benutzererfahrung. Das `aria-roledescription` Attribut bietet eine Möglichkeit, einen anderen für Menschen lesbaren Namen zu definieren, der von AT als Rolle eines Elements dargestellt wird.

> [!NOTE]
> Verwenden Sie aria-roledescription nur, um den Zweck von nicht interaktiven Containerrollen zu klären und um eine spezifischere Beschreibung für ein Widget bereitzustellen.

Benutzer verlassen sich darauf, dass der Name der ihnen bekannten Rolle präsentiert wird, um den Zweck des Elements zu verstehen und, falls es sich um ein Widget handelt, wie sie damit interagieren können. Verwenden Sie daher `aria-roledescription` nur, um den Zweck von nicht interaktiven Containerrollen wie `group` oder `region` zu klären und eine spezifischere Beschreibung für ein Widget bereitzustellen.

Die `aria-roledescription` Eigenschaft überschreibt, wie ATs den Namen einer Rolle lokalisieren und ausdrücken. Wenn Sie einen Rollennamen überschreiben, den der Benutzer versteht, können Sie möglicherweise die Fähigkeit des Benutzers beeinträchtigen, ein Element zu verstehen und damit zu interagieren.

Vermeiden Sie die Verwendung des `aria-roledescription` Attributs. Wenn ein Anwendungsfall besonders erscheint, der eine einzigartige Rollenbeschreibung verdient, können die Interaktionen oft in kleinere Teile zerlegt werden, die relevante Rollen haben.

Wenn es keine semantischen oder ARIA-Widget-Rollen gibt, die dem Interaktionsmodell Ihres Widgets entsprechen, verwenden Sie `role="application"`, stellen Sie eine `aria-roledescription` mit einem für Menschen lesbaren, vom Autor lokalisierten Rollennamen bereit und verwenden Sie `aria-describedby`, um Benutzern Anweisungen zu geben.

ATs können die Namen von ARIA-Rollen anpassen und lokalisieren. Wenn Sie `aria-roledescription` verwenden, um zu ändern, wie der Rollename dem Benutzer präsentiert wird, achten Sie darauf, die Lokalisierung zu handhaben. Der Wert sollte übersetzt werden, wenn eine Seite lokalisiert wird.

Das Ändern der Art und Weise, wie die Rolle dem Benutzer präsentiert wird, hat keine Auswirkungen auf die Funktionalität des Elements. Wenn ein Element beispielsweise die Rolle [`region`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/region_role) oder [`button`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/button_role) hat und AT Funktionen für die Navigation zur nächsten Region oder Schaltfläche bereitstellt, wird, wenn Sie `aria-roledescription` auf `continent` bzw. `escape` setzen, das AT weiterhin diese Funktionen zur Navigation zu Regionen und Schaltflächen ermöglichen.

Vermeiden Sie erneut die Verwendung von `aria-roledescription`. In diesem Beispiel hat `escape` keine relevante Bedeutung für den Benutzer, aber `button` mit "escape" als Beschriftung schon.

Wenn Sie `aria-roledescription` verwenden, stellen Sie auch sicher, dass das Element, auf das es angewendet wird, eine gültige ARIA [`role`](/de/docs/Web/Accessibility/ARIA/Reference/Roles) hat oder implizite Rollensemantik besitzt und dass der Wert selbst nicht leer ist und aus mehr als nur Leerzeichen besteht.

Das `aria-roledescription` ist erforderlich, wenn `aria-brailleroledescription` verwendet wird. Beachten Sie, dass `aria-brailleroledescription` im Allgemeinen nur in seltenen Fällen verwendet werden sollte, wenn eine `aria-roledescription` in Braille übermäßig ausführlich ist.

## Beispiele

Das folgende Beispiel zeigt die Verwendung von `aria-roledescription`, um anzuzeigen, dass ein nicht interaktiver Container eine "Folie" in einer webbasierten Präsentationsanwendung ist.

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

In den vorherigen Beispielen kann ein Bildschirmleser-Nutzer "Quarterly Report, slide" hören, anstatt das weniger präzise "Quarterly Report, article".

## Werte

- `<string>`
  - : Eine nicht leere Zeichenfolge, ein unbeschränkter Wertetyp, der mehr als nur Leerzeichen enthält.

## Zugehörige Schnittstellen

- [`Element.ariaRoleDescription`](/de/docs/Web/API/Element/ariaRoleDescription)
  - : Die [`ariaRoleDescription`](/de/docs/Web/API/Element/ariaRoleDescription) Eigenschaft, Teil der [`Element`](/de/docs/Web/API/Element) Schnittstelle, spiegelt den Wert des `aria-roledescription` Attributs wider.
- [`ElementInternals.ariaRoleDescription`](/de/docs/Web/API/ElementInternals/ariaRoleDescription)
  - : Die [`ariaRoleDescription`](/de/docs/Web/API/ElementInternals/ariaRoleDescription) Eigenschaft, Teil der [`ElementInternals`](/de/docs/Web/API/ElementInternals) Schnittstelle, spiegelt den Wert des `aria-roledescription` Attributs wider.

## Zugehörige Rollen

Unterstützt von allen Rollen und allen Standard-Markup-Elementen außer `role="generic"`.

## Spezifikationen

{{Specifications}}

## Siehe auch

- [ARIA-Rollen](/de/docs/Web/Accessibility/ARIA/Reference/Roles)
