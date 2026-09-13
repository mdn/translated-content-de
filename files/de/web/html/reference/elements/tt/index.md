---
title: "`<tt>` HTML-Teletype-Text-Element"
short-title: <tt>
slug: Web/HTML/Reference/Elements/tt
l10n:
  sourceCommit: ca6052779ddca9f6d99665f12c39aa2d85d85733
---

Das **`<tt>`** [HTML](/de/docs/Web/HTML) Element erzeugt einen Inline-Text, der mit der standardmäßigen monospaced Schriftart der {{Glossary("user_agent", "User-Agents")}} dargestellt wird. Dieses Element wurde entwickelt, um Text so zu rendern, wie er auf einem festbreiten Display wie einem Fernschreiber, einem Text-Only-Bildschirm oder einem Zeilendrucker angezeigt werden würde.

Die Begriffe **nicht-proportional**, **Monotype** und **Monospace** werden austauschbar verwendet und haben die gleiche allgemeine Bedeutung: Sie beschreiben eine Schriftart, deren Zeichen alle die gleiche Anzahl an Pixeln breit sind.

Dieses Element ist jedoch veraltet. Sie sollten die semantisch hilfreicheren {{HTMLElement("code")}}, {{HTMLElement("kbd")}}, {{HTMLElement("samp")}}, oder {{HTMLElement("var")}} Elemente für Inline-Text verwenden, der in Monospace angezeigt werden muss, oder das {{HTMLElement("pre")}} Tag für Inhalte, die als separater Block präsentiert werden sollen.

> [!NOTE]
> Wenn keines der semantischen Elemente für Ihren Anwendungsfall geeignet ist (zum Beispiel, wenn Sie Inhalt in einer nicht-proportionalen Schrift zeigen müssen), sollten Sie das {{ HTMLElement("span") }} Element in Betracht ziehen und es mit CSS nach Bedarf stylen. Die {{cssxref("font-family")}} Eigenschaft ist ein guter Ausgangspunkt.

## Attribute

Dieses Element enthält nur die [globalen Attribute](/de/docs/Web/HTML/Reference/Global_attributes).

## Beispiele

### Einfaches Beispiel

Dieses Beispiel verwendet `<tt>`, um Text zu zeigen, der in eine Terminalanwendung eingegeben und von dieser ausgegeben wird.

```html
<p>
  Enter the following at the telnet command prompt:
  <code>set localecho</code><br />

  The telnet client should display: <tt>Local Echo is on</tt>
</p>
```

#### Ergebnis

{{EmbedLiveSample("Basic_example", 650, 80)}}

### Überschreiben der Standardschriftart

Sie können die Standardschriftart des Browsers überschreiben—wenn der Browser dies zulässt, was er nicht tun muss—indem Sie CSS verwenden:

#### CSS

```css
tt {
  font-family: "Lucida Console", "Menlo", "Monaco", "Courier New", monospace;
}
```

#### HTML

```html
<p>
  Enter the following at the telnet command prompt:
  <code>set localecho</code><br />

  The telnet client should display: <tt>Local Echo is on</tt>
</p>
```

#### Ergebnis

{{EmbedLiveSample("Overriding_the_default_font", 650, 80)}}

## Nutzungshinweise

Das `<tt>` Element wird standardmäßig mit der nicht-proportionalen Standardschriftart des Browsers gerendert. Sie können dies mit CSS überschreiben, indem Sie eine Regel mit dem `tt` Selektor erstellen, wie im Beispiel [Überschreiben der Standardschriftart](#überschreiben_der_standardschriftart) oben gezeigt.

> [!NOTE]
> Vom Benutzer konfigurierte Änderungen an der standardmäßigen Monospace-Schrifteinstellung können Vorrang vor Ihrem CSS haben.

Obwohl dieses Element nicht offiziell in HTML 4.01 abgelehnt wurde, wurde seine Verwendung zugunsten der semantischen Elemente und/oder CSS nicht empfohlen. Das `<tt>` Element ist in HTML 5 veraltet.

## Technische Zusammenfassung

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/de/docs/Web/HTML/Guides/Content_categories"
          >Inhaltskategorien</a
        >
      </th>
      <td>
        <a href="/de/docs/Web/HTML/Guides/Content_categories#flow_content"
          >Fließender Inhalt</a
        >,
        <a href="/de/docs/Web/HTML/Guides/Content_categories#phrasing_content"
          >Phraseninhalt</a
        >, fühlbarer Inhalt.
      </td>
    </tr>
    <tr>
      <th scope="row">Zulässiger Inhalt</th>
      <td>
        <a href="/de/docs/Web/HTML/Guides/Content_categories#phrasing_content"
          >Phraseninhalt</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>Keine, sowohl das öffnende als auch das schließende Tag sind obligatorisch.</td>
    </tr>
    <tr>
      <th scope="row">Zulässige Eltern</th>
      <td>
        Jedes Element, das
        <a href="/de/docs/Web/HTML/Guides/Content_categories#phrasing_content"
          >Phraseninhalt</a
        > akzeptiert.
      </td>
    </tr>
    <tr>
      <th scope="row">Zulässige ARIA-Rollen</th>
      <td>Beliebig</td>
    </tr>
    <tr>
      <th scope="row">DOM-Schnittstelle</th>
      <td>[`HTMLElement`](/de/docs/Web/API/HTMLElement)</td>
    </tr>
  </tbody>
</table>

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die semantischen {{HTMLElement("code")}}, {{HTMLElement("var")}}, {{HTMLElement("kbd")}}, und {{HTMLElement("samp")}} Elemente
- Das {{HTMLElement("pre")}} Element zur Darstellung von vorformatierten Textblöcken
