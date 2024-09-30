---
title: "<portal>: Das Portal-Element"
slug: Web/HTML/Element/portal
l10n:
  sourceCommit: bde0cb215d1d307c08678abe6623fc0d39f4cf7f
---

{{HTMLSidebar}}{{SeeCompatTable}}

Das **`<portal>`**-[HTML](/de/docs/Web/HTML)-Element ermöglicht das Einbetten einer anderen HTML-Seite in die aktuelle, um eine reibungslosere Navigation zu neuen Seiten zu ermöglichen.

Ein `<portal>` ist ähnlich einem `<iframe>`. Ein `<iframe>` erlaubt es, einen separaten [Browsenkontext](/de/docs/Glossary/browsing_context) einzubetten. Der eingebettete Inhalt eines `<portal>` ist jedoch stärker eingeschränkt als der eines `<iframe>`. Es kann nicht interagiert werden, und ist deshalb nicht geeignet, um Widgets in ein Dokument einzubetten. Stattdessen fungiert das `<portal>` als Vorschau des Inhalts einer anderen Seite. Es kann zu diesem navigiert werden, was einen nahtlosen Übergang zum eingebetteten Inhalt ermöglicht.

## Attribute

Dieses Element umfasst die [globalen Attribute](/de/docs/Web/HTML/Global_attributes).

- `referrerpolicy`
  - : Legt die [Referrer-Richtlinie](/de/docs/Web/HTTP/Headers/Referrer-Policy) fest, die beim Abrufen der Seite unter der im `src`-Attribut angegebenen URL verwendet werden soll.
- `src`
  - : Die URL der einzubettenden Seite.

## Barrierefreiheit

Die im `<portal>` angezeigte Vorschau ist nicht interaktiv, erhält daher keine Eingabeveranstaltungen oder Fokus. Daher werden die eingebetteten Inhalte des Portals nicht als Elemente im [Barrierefreiheitsbaum](/de/docs/Glossary/accessibility_tree) angezeigt. In das Portal kann navigiert und es kann wie ein Button aktiviert werden. Das Standardverhalten beim Klicken auf das Portal ist seine Aktivierung.

Portale erhalten ein Standardlabel, welches der Titel der eingebetteten Seite ist. Wenn kein Titel vorhanden ist, wird der sichtbare Text in der Vorschau zusammengefügt, um ein Label zu erstellen. Das [`aria-label`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-label)-Attribut kann verwendet werden, um dies zu überschreiben.

Portale, die nur für das Vorab-Rendering verwendet werden, sollten mit dem versteckten HTML-Attribut oder der CSS-{{cssxref("display")}}-Eigenschaft mit dem Wert `none` versteckt werden.

Wenn während der Portalaktivierung Animationen verwendet werden, sollte die {{cssxref("@media/prefers-reduced-motion", "prefers-reduced-motion")}}- [Medienfunktion](/de/docs/Web/CSS/@media#media_features) berücksichtigt werden.

## Beispiele

### Einfaches Beispiel

Das folgende Beispiel wird die Inhalte von `https://example.com` als Vorschau einbetten.

```html
<portal id="exampleportal" src="https://example.com/"></portal>
```

## Technische Zusammenfassung

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Implizite ARIA Rolle</th>
      <td>
        <a href="/de/docs/Web/Accessibility/ARIA/Roles/button_role">button</a>
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
