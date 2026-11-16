---
title: "ARIA: aria-roledescription-Attribut"
short-title: aria-roledescription
slug: Web/Accessibility/ARIA/Reference/Attributes/aria-roledescription
l10n:
  sourceCommit: d9e522ed63f204df4b9ab3ed6c8208ce089fa868
---

Das Attribut `aria-roledescription` definiert eine menschenlesbare, vom Autor lokalisierte Beschreibung für die Rolle eines Elements.

## Beschreibung

Einige assistive Technologien (<abbr>AT</abbr>), etwa Screenreader, geben die Rolle eines Elements als Teil der Benutzererfahrung aus. Mit dem Attribut `aria-roledescription` lässt sich ein anderer menschenlesbarer Name festlegen, den AT als Rolle des Elements ausgeben.

> [!NOTE]
> Verwenden Sie `aria-roledescription` nur, um den Zweck nicht interaktiver Containerrollen zu verdeutlichen oder ein Widget genauer zu beschreiben.

Nutzer sind darauf angewiesen, dass bekannte Rollennamen ausgegeben werden, damit sie den Zweck eines Elements verstehen und – falls es sich um ein Widget handelt – wissen, wie sie damit interagieren können. Verwenden Sie `aria-roledescription` daher nur, um den Zweck nicht interaktiver Containerrollen wie `group` oder `region` zu verdeutlichen oder ein Widget genauer zu beschreiben.

Die Eigenschaft `aria-roledescription` überschreibt, wie AT den Namen einer Rolle lokalisieren und ausgeben. Wenn Sie einen Rollennamen überschreiben, den Nutzer kennen, kann dies ihre Fähigkeit beeinträchtigen, ein Element zu verstehen und damit zu interagieren.

Vermeiden Sie die Verwendung des Attributs `aria-roledescription`. Selbst wenn ein Anwendungsfall ungewöhnlich erscheint und eine eigene Rollenbeschreibung naheliegt, lässt sich die Interaktion häufig in kleinere Teile mit passenden Rollen aufgliedern.

Wenn keine semantischen Rollen oder ARIA-Widget-Rollen zum Interaktionsmodell Ihres Widgets passen, verwenden Sie `role="application"`. Geben Sie mit `aria-roledescription` einen menschenlesbaren, vom Autor lokalisierten Rollennamen und mit `aria-describedby` Anweisungen für Nutzer an.

AT können die Namen von ARIA-Rollen anpassen und lokalisieren. Wenn Sie mit `aria-roledescription` ändern, wie ein Rollenname Nutzern ausgegeben wird, denken Sie an die Lokalisierung. Der Wert sollte übersetzt werden, wenn eine Seite lokalisiert wird.

Eine Änderung der ausgegebenen Rollenbezeichnung hat keinen Einfluss auf die Funktionalität des Elements. Hat ein Element beispielsweise die Rolle [`region`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/region_role) oder [`button`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/button_role), kann AT Funktionen zum Navigieren zur nächsten Region oder Schaltfläche bereitstellen. Wenn Sie `aria-roledescription` auf `continent` beziehungsweise `escape` setzen, kann AT mit diesen Funktionen weiterhin zu Regionen und Schaltflächen navigieren.

Noch einmal: Vermeiden Sie die Verwendung von `aria-roledescription`. In diesem Beispiel hat `escape` als Rollenbeschreibung für Nutzer keine erkennbare Bedeutung. Als Beschriftung eines `button` ist „escape“ dagegen verständlich.

Wenn Sie `aria-roledescription` verwenden, stellen Sie außerdem sicher, dass das Element eine gültige ARIA-[`role`](/de/docs/Web/Accessibility/ARIA/Reference/Roles) oder eine implizite Rollensemantik hat. Der Wert darf nicht leer sein und muss mehr als nur Leerraumzeichen enthalten.

`aria-roledescription` ist erforderlich, wenn `aria-brailleroledescription` verwendet wird. Beachten Sie, dass `aria-brailleroledescription` im Allgemeinen nur in seltenen Fällen verwendet werden sollte, wenn eine `aria-roledescription` bei der Braille-Ausgabe übermäßig lang ist.

## Werte

- `<string>`
  - : Eine nicht leere Zeichenfolge ohne weitere Einschränkungen, die mehr als nur Leerraumzeichen enthält.

## Zugehörige Schnittstellen

- [`Element.ariaRoleDescription`](/de/docs/Web/API/Element/ariaRoleDescription)
  - : Die Eigenschaft [`ariaRoleDescription`](/de/docs/Web/API/Element/ariaRoleDescription) der Schnittstelle [`Element`](/de/docs/Web/API/Element) spiegelt den Wert des Attributs `aria-roledescription` wider.
- [`ElementInternals.ariaRoleDescription`](/de/docs/Web/API/ElementInternals/ariaRoleDescription)
  - : Die Eigenschaft [`ariaRoleDescription`](/de/docs/Web/API/ElementInternals/ariaRoleDescription) der Schnittstelle [`ElementInternals`](/de/docs/Web/API/ElementInternals) spiegelt den Wert des Attributs `aria-roledescription` wider.

## Zugehörige Rollen

Wird von allen Rollen und allen grundlegenden Markup-Elementen unterstützt, mit Ausnahme von `role="generic"`.

## Beispiele

Das folgende Beispiel zeigt, wie `aria-roledescription` verwendet wird, um einen nicht interaktiven Container in einer webbasierten Präsentationsanwendung als „Folie“ zu kennzeichnen.

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

Im vorherigen Beispiel hört eine Person, die einen Screenreader verwendet, möglicherweise „Quarterly Report, slide“ statt des weniger präzisen „Quarterly Report, article“.

## Spezifikationen

{{Specifications}}

## Siehe auch

- [ARIA-Rollen](/de/docs/Web/Accessibility/ARIA/Reference/Roles)
