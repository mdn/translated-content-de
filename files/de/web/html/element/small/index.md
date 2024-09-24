---
title: "<small>: das Kommentar-Element"
slug: Web/HTML/Element/small
l10n:
  sourceCommit: 533dc583856cfc95c1b9129335cd24793eac1093
---

{{HTMLSidebar}}

Das **`<small>`** [HTML](/de/docs/Web/HTML)-Element repräsentiert Nebenbemerkungen und Kleingedrucktes, wie Urheberrechts- und Rechtstexte, unabhängig von seiner gestylten Darstellung. Standardmäßig rendert es den Text innerhalb des Elements eine Schriftgröße kleiner, zum Beispiel von `small` zu `x-small`.

{{EmbedInteractiveExample("pages/tabbed/small.html", "tabbed-shorter")}}

## Attribute

Dieses Element schließt nur die [globalen Attribute](/de/docs/Web/HTML/Global_attributes) ein.

## Beispiele

### Grundlegende Verwendung

```html
<p>
  Dies ist der erste Satz.
  <small>Dieser gesamte Satz ist in kleinen Buchstaben.</small>
</p>
```

#### Ergebnis

{{EmbedLiveSample("Basic_usage")}}

### CSS-Alternative

```html
<p>
  Dies ist der erste Satz.
  <span style="font-size:0.8em">Dieser gesamte Satz ist in kleinen Buchstaben.</span>
</p>
```

#### Ergebnis

{{EmbedLiveSample("CSS_alternative")}}

## Anmerkungen

Obwohl das `<small>`-Element, wie die {{htmlelement("b")}}- und {{htmlelement("i")}}-Elemente, als Verletzung des Prinzips der Trennung zwischen Struktur und Präsentation angesehen werden kann, sind alle drei in HTML gültig. Autoren wird empfohlen, ihr bestes Urteilsvermögen zu verwenden, wenn sie entscheiden, ob sie `<small>` oder CSS verwenden.

## Technische Zusammenfassung

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/de/docs/Web/HTML/Content_categories"
          >Inhaltskategorien</a
        >
      </th>
      <td>
        <a href="/de/docs/Web/HTML/Content_categories#flow_content"
          >Fließender Inhalt</a
        >,
        <a href="/de/docs/Web/HTML/Content_categories#phrasing_content"
          >formulierender Inhalt</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubter Inhalt</th>
      <td>
        <a href="/de/docs/Web/HTML/Content_categories#phrasing_content"
          >Formulierender Inhalt</a
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>Keine; muss sowohl ein Start- als auch ein End-Tag haben.</td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Eltern</th>
      <td>
        Jedes Element, das
        <a href="/de/docs/Web/HTML/Content_categories#phrasing_content"
          >formulierenden Inhalt</a
        > akzeptiert, oder jedes Element, das
        <a href="/de/docs/Web/HTML/Content_categories#flow_content"
          >fließenden Inhalt</a
        > akzeptiert.
      </td>
    </tr>
    <tr>
      <th scope="row">Implizite ARIA-Rolle</th>
      <td>
        <code
          ><a href="/de/docs/Web/Accessibility/ARIA/Roles/generic_role"
            >generic</a
          ></code
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubte ARIA-Rollen</th>
      <td>Jede</td>
    </tr>
    <tr>
      <th scope="row">DOM-Schnittstelle</th>
      <td>{{domxref("HTMLElement")}}</td>
    </tr>
  </tbody>
</table>

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTMLElement("b")}}
- {{HTMLElement("sub")}} und {{HTMLElement("sup")}}
- {{HTMLElement("font")}}
- {{HTMLElement("style")}}
- HTML 4.01 Spezifikation: [Schriftstile](https://www.w3.org/TR/html4/present/graphics.html#h-15.2)
