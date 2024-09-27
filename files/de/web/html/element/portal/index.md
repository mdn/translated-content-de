---
title: "<portal>: Das Portal-Element"
slug: Web/HTML/Element/portal
l10n:
  sourceCommit: bde0cb215d1d307c08678abe6623fc0d39f4cf7f
---

{{HTMLSidebar}}{{SeeCompatTable}}

Das **`<portal>`** [HTML](/de/docs/Web/HTML)-Element ermöglicht das Einbetten einer anderen HTML-Seite in die aktuelle, um ein reibungsloseres Navigieren zu neuen Seiten zu ermöglichen.

Ein `<portal>` ist ähnlich einem `<iframe>`. Ein `<iframe>` erlaubt das Einbetten eines separaten [Browsing-Kontextes](/de/docs/Glossary/browsing_context). Der eingebettete Inhalt eines `<portal>` ist jedoch stärker eingeschränkt als der eines `<iframe>`. Er kann nicht interagiert werden und ist daher nicht geeignet, um Widgets in ein Dokument einzubetten. Stattdessen dient das `<portal>` als Vorschau der Inhalte einer anderen Seite. Es kann navigiert werden, was einen nahtlosen Übergang zum eingebetteten Inhalt ermöglicht.

## Attribute

Dieses Element enthält die [globalen Attribute](/de/docs/Web/HTML/Global_attributes).

- `referrerpolicy`
  - : Legt die [Referrer-Policy](/de/docs/Web/HTTP/Headers/Referrer-Policy) fest, die beim Anfordern der Seite an der durch das `src`-Attribut angegebenen URL verwendet wird.
- `src`
  - : Die URL der einzubettenden Seite.

## Barrierefreiheit

Die vom `<portal>` angezeigte Vorschau ist nicht interaktiv und empfängt daher keine Eingabeereignisse oder Fokus. Daher werden die eingebetteten Inhalte des Portals nicht als Elemente im [Barrierefreiheitsbaum](/de/docs/Glossary/accessibility_tree) dargestellt. Das Portal kann navigiert und wie ein Button aktiviert werden. Das Standardverhalten beim Klicken auf das Portal besteht darin, es zu aktivieren.

Portale erhalten standardmäßig eine Bezeichnung, die der Titel der eingebetteten Seite ist. Wenn kein Titel vorhanden ist, wird der sichtbare Text in der Vorschau verkettet, um eine Bezeichnung zu erstellen. Das [`aria-label`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-label)-Attribut kann verwendet werden, um dies zu überschreiben.

Portale, die nur zum Vor-Rendering verwendet werden, sollten mit dem versteckten HTML-Attribut oder der CSS-Eigenschaft {{cssxref("display")}} mit dem Wert `none` verborgen werden.

Beim Einsatz von Animationen während der Portalaktivierung sollte die {{cssxref("@media/prefers-reduced-motion", "prefers-reduced-motion")}} [Media-Feature](/de/docs/Web/CSS/@media#media_features) berücksichtigt werden.

## Beispiele

### Einfaches Beispiel

Das folgende Beispiel bindet die Inhalte von `https://example.com` als Vorschau ein.

```html
<portal id="exampleportal" src="https://example.com/"></portal>
```

## Technische Zusammenfassung

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Implizite ARIA-Rolle</th>
      <td>
        <a href="/de/docs/Web/Accessibility/ARIA/Roles/button_role"
          >button</a
        >
      </td>
    </tr>
    <tr>
      <th scope="row">DOM-Schnittstelle</th>
      <td>[`HTMLPortalElement`](/de/docs/Web/API/HTMLPortalElement)</td>
    </tr>
  </tbody>
</table>

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
