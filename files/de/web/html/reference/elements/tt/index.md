---
title: HTML-Element `<tt>` für Fernschreibertext
short-title: <tt>
slug: Web/HTML/Reference/Elements/tt
l10n:
  sourceCommit: 4b8ea679f2d55adbc1234f44583ca23a9729fbdc
---

Das **`<tt>`**-Element in [HTML](/de/docs/Web/HTML) erzeugt Inline-Text, der in der standardmäßigen nichtproportionalen Schriftart des {{Glossary("user_agent", "User Agents")}} dargestellt wird. Dieses Element wurde geschaffen, um Text so darzustellen, wie er auf einem Ausgabegerät mit fester Zeichenbreite erscheinen würde, etwa einem Fernschreiber, einem reinen Textbildschirm oder einem Zeilendrucker.

Die Begriffe **nichtproportional**, **Monotype** und **Monospace** werden austauschbar verwendet und haben dieselbe allgemeine Bedeutung: Sie bezeichnen eine Schriftart, bei der alle Zeichen die gleiche Anzahl von Pixeln breit sind.

Dieses Element ist jedoch veraltet. Verwenden Sie für Inline-Text, der in einer nichtproportionalen Schriftart dargestellt werden soll, stattdessen die semantisch aussagekräftigeren Elemente {{HTMLElement("code")}}, {{HTMLElement("kbd")}}, {{HTMLElement("samp")}} oder {{HTMLElement("var")}}. Für Inhalte, die als eigener Block dargestellt werden sollen, verwenden Sie das Tag {{HTMLElement("pre")}}.

> [!NOTE]
> Wenn keines der semantischen Elemente für Ihren Anwendungsfall geeignet ist (beispielsweise wenn Sie Inhalte in einer nichtproportionalen Schriftart anzeigen möchten), sollten Sie das Element {{ HTMLElement("span") }} verwenden und es mit CSS nach Bedarf gestalten. Die Eigenschaft {{cssxref("font-family")}} ist dafür ein guter Ausgangspunkt.

## Attribute

Dieses Element unterstützt nur die [globalen Attribute](/de/docs/Web/HTML/Reference/Global_attributes).

## Hinweise zur Verwendung

Das Element `<tt>` wird standardmäßig in der voreingestellten nichtproportionalen Schriftart des Browsers dargestellt. Sie können dies mit CSS überschreiben, indem Sie eine Regel mit dem Selektor `tt` erstellen, wie im Beispiel [Überschreiben der Standardschriftart](#überschreiben_der_standardschriftart) gezeigt.

> [!NOTE]
> Vom Benutzer vorgenommene Änderungen an der Standardeinstellung für nichtproportionale Schriftarten können Vorrang vor Ihrem CSS haben.

Obwohl dieses Element in HTML 4.01 nicht offiziell als veraltet eingestuft wurde, wurde von seiner Verwendung zugunsten semantischer Elemente und/oder CSS abgeraten. In HTML 5 ist das Element `<tt>` veraltet.

## Beispiele

### Einfaches Beispiel

In diesem Beispiel wird `<tt>` verwendet, um Text darzustellen, der in eine Terminalanwendung eingegeben oder von ihr ausgegeben wird.

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

Sie können die Standardschriftart des Browsers mit CSS überschreiben – sofern der Browser dies zulässt; dazu ist er nicht verpflichtet.

#### HTML

```html
<p>
  Enter the following at the telnet command prompt:
  <code>set localecho</code><br />

  The telnet client should display: <tt>Local Echo is on</tt>
</p>
```

#### CSS

```css
tt {
  font-family: "Lucida Console", "Menlo", "Monaco", "Courier New", monospace;
}
```

#### Ergebnis

{{EmbedLiveSample("Overriding_the_default_font", 650, 80)}}

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
          >Fließinhalt</a
        >,
        <a href="/de/docs/Web/HTML/Guides/Content_categories#phrasing_content"
          >Formulierungsinhalt</a
        >, wahrnehmbarer Inhalt.
      </td>
    </tr>
    <tr>
      <th scope="row">Zulässiger Inhalt</th>
      <td>
        <a href="/de/docs/Web/HTML/Guides/Content_categories#phrasing_content"
          >Formulierungsinhalt</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Weglassen von Tags</th>
      <td>Keines; sowohl das Start- als auch das End-Tag sind erforderlich.</td>
    </tr>
    <tr>
      <th scope="row">Zulässige Elternelemente</th>
      <td>
        Jedes Element, das
        <a href="/de/docs/Web/HTML/Guides/Content_categories#phrasing_content"
          >Formulierungsinhalt</a
        >
        zulässt.
      </td>
    </tr>
    <tr>
      <th scope="row">Zulässige ARIA-Rollen</th>
      <td>Alle</td>
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

- Die semantischen Elemente {{HTMLElement("code")}}, {{HTMLElement("var")}}, {{HTMLElement("kbd")}} und {{HTMLElement("samp")}}
- Das Element {{HTMLElement("pre")}} zur Darstellung vorformatierter Textblöcke
