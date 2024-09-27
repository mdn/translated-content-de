---
title: "<tt>: Das Teletype Text Element"
slug: Web/HTML/Element/tt
l10n:
  sourceCommit: b7955e77cd4293adf45ef23686df50b0305f02ad
---

{{HTMLSidebar}}{{deprecated_header}}

Das **`<tt>`** [HTML](/de/docs/Web/HTML) Element erstellt Inline-Text, der mit der Standardschriftart im Monospace-Stil des [User-Agents](/de/docs/Glossary/user_agent) dargestellt wird. Dieses Element wurde entwickelt, um Text wie auf einem Festbreitendisplay wie einem Fernschreiber, einem textbasierten Bildschirm oder einem Zeilendrucker darzustellen.

Die Begriffe **nicht-proportional**, **Monotype** und **Monospace** werden austauschbar verwendet und haben dieselbe allgemeine Bedeutung: Sie beschreiben eine Schriftart, deren Zeichen alle dieselbe Anzahl von Pixeln breit sind.

Dieses Element ist jedoch veraltet. Sie sollten die semantisch sinnvolleren Elemente {{HTMLElement("code")}}, {{HTMLElement("kbd")}}, {{HTMLElement("samp")}}, oder {{HTMLElement("var")}} für Inline-Text verwenden, der in Monospace-Schrift präsentiert werden soll, oder das {{HTMLElement("pre")}}-Tag für Inhalte, die als separater Block dargestellt werden sollen.

> [!NOTE]
> Wenn keines der semantischen Elemente für Ihren Anwendungsfall geeignet ist (zum Beispiel, wenn Sie Inhalte in einer nicht-proportionalen Schriftart darstellen müssen), sollten Sie in Betracht ziehen, das {{ HTMLElement("span") }} Element zu verwenden und es mit CSS wie gewünscht zu gestalten. Die {{cssxref("font-family")}} Eigenschaft ist ein guter Ausgangspunkt.

## Attribute

Dieses Element umfasst nur die [globalen Attribute](/de/docs/Web/HTML/Global_attributes).

## Beispiele

### Einfaches Beispiel

Dieses Beispiel verwendet `<tt>`, um Text anzuzeigen, der in eine Terminalanwendung eingegeben und von ihr ausgegeben wird.

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

Sie können die Standardschriftart des Browsers überschreiben - vorausgesetzt, der Browser erlaubt es, was er nicht tun muss - mit CSS:

#### CSS

```css
tt {
  font-family: "Lucida Console", "Menlo", "Monaco", "Courier", monospace;
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

Das `<tt>` Element wird standardmäßig mit der nicht-proportionalen Standardschrift des Browsers gerendert. Sie können dies mit CSS überschreiben, indem Sie eine Regel mit dem `tt` Selektor erstellen, wie im Beispiel [Überschreiben der Standardschriftart](#überschreiben_der_standardschriftart) oben zu sehen ist.

> [!NOTE]
> Vom Benutzer konfigurierte Änderungen an der Standard-Monospace-Schrifteinstellung können Vorrang vor Ihrem CSS haben.

Obwohl dieses Element in HTML 4.01 nicht offiziell als veraltet eingestuft wurde, wurde seine Verwendung zugunsten der semantischen Elemente und/oder CSS nicht empfohlen. Das `<tt>` Element ist in HTML 5 veraltet.

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
          >Phrasierungsinhalt</a
        >, greifbarer Inhalt.
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Inhalte</th>
      <td>
        <a href="/de/docs/Web/HTML/Content_categories#phrasing_content"
          >Phrasierungsinhalt</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>Keine, sowohl das Start- als auch das End-Tag sind obligatorisch.</td>
    </tr>
    <tr>
      <th scope="row">Erlaubte übergeordnete Elemente</th>
      <td>
        Jedes Element, das
        <a href="/de/docs/Web/HTML/Content_categories#phrasing_content"
          >Phrasierungsinhalt</a
        > akzeptiert.
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubte ARIA-Rollen</th>
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
- Das {{HTMLElement("pre")}} Element für die Anzeige vorformatierter Textblöcke
