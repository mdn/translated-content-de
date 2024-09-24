---
title: "<portal>: Das Portalelement"
slug: Web/HTML/Element/portal
l10n:
  sourceCommit: bde0cb215d1d307c08678abe6623fc0d39f4cf7f
---

{{HTMLSidebar}}{{SeeCompatTable}}

Das **`<portal>`**-[HTML](/de/docs/Web/HTML)-Element ermöglicht das Einbetten einer anderen HTML-Seite in die aktuelle, um ein reibungsloseres Navigieren zu neuen Seiten zu ermöglichen.

Ein `<portal>` ist ähnlich wie ein `<iframe>`. Ein `<iframe>` erlaubt das Einbetten eines separaten {{Glossary("browsing context")}}. Der eingebettete Inhalt eines `<portal>` ist jedoch eingeschränkter als der eines `<iframe>`. Er kann nicht interagiert werden, und ist daher nicht geeignet, um Widgets in ein Dokument einzubetten. Stattdessen dient das `<portal>` als Vorschau des Inhalts einer anderen Seite. Es kann navigiert werden, was einen nahtlosen Übergang zum eingebetteten Inhalt ermöglicht.

## Attribute

Dieses Element umfasst die [globalen Attribute](/de/docs/Web/HTML/Global_attributes).

- `referrerpolicy`
  - : Legt die [Referrer-Policy](/de/docs/Web/HTTP/Headers/Referrer-Policy) fest, die beim Anfordern der Seite unter der im `src`-Attribut angegebenen URL verwendet wird.
- `src`
  - : Die URL der einzubettenden Seite.

## Barrierefreiheit

Die vom `<portal>` angezeigte Vorschau ist nicht interaktiv, empfängt daher keine Eingabeereignisse oder Fokus. Daher werden die eingebetteten Inhalte des Portals nicht als Elemente im {{Glossary("accessibility tree")}} angezeigt. Das Portal kann wie ein Button navigiert und aktiviert werden, das Standardverhalten beim Klicken auf das Portal ist seine Aktivierung.

Portale erhalten standardmäßig ein Label, das dem Titel der eingebetteten Seite entspricht. Wenn kein Titel vorhanden ist, wird der sichtbare Text in der Vorschau zu einem Label kombiniert. Das [`aria-label`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-label)-Attribut kann verwendet werden, um dies zu überschreiben.

Portale, die nur zum Prerendering genutzt werden, sollten mit dem `hidden`-HTML-Attribut oder der CSS-{{cssxref("display")}}-Eigenschaft mit dem Wert `none` ausgeblendet werden.

Bei der Verwendung von Animationen während der Portalaktivierung sollte die {{cssxref("@media/prefers-reduced-motion", "prefers-reduced-motion")}}-[Medienfunktion](/de/docs/Web/CSS/@media#media_features) beachtet werden.

## Beispiele

### Einfaches Beispiel

Das folgende Beispiel wird den Inhalt von `https://example.com` als Vorschau einbetten.

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
      <td>{{domxref("HTMLPortalElement")}}</td>
    </tr>
  </tbody>
</table>

## Spezifikationen

{{Specifications}}

## Browserkompatibilität

{{Compat}}
