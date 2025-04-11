---
title: "<tt>: Das Teletype Text Element"
slug: Web/HTML/Reference/Elements/tt
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{HTMLSidebar}}{{deprecated_header}}

Das **`<tt>`** [HTML](/de/docs/Web/HTML)-Element erzeugt einen Inline-Text, der mit der standardmäßigen Monospace-Schriftart des {{Glossary("user_agent", "User Agents")}} dargestellt wird. Dieses Element wurde geschaffen, um Text so darzustellen, wie er auf einer Anzeige mit fester Zeichenbreite, wie einem Fernschreiber, einem nur-Text-Bildschirm oder einem Zeilendrucker, dargestellt würde.

Die Begriffe **nicht-proportional**, **Monospace** und **Schreibmaschinenschrift** werden synonym verwendet und haben dieselbe allgemeine Bedeutung: Sie beschreiben eine Schriftart, deren Zeichen alle dieselbe Anzahl an Pixeln in der Breite haben.

Dieses Element ist jedoch veraltet. Sie sollten die semantisch sinnvolleren {{HTMLElement("code")}}, {{HTMLElement("kbd")}}, {{HTMLElement("samp")}} oder {{HTMLElement("var")}} Elemente für Inline-Text verwenden, der in Monospace-Schrift dargestellt werden soll, oder das {{HTMLElement("pre")}}-Tag für Inhalte verwenden, die in einem separaten Block dargestellt werden sollen.

> [!NOTE]
> Wenn keines der semantischen Elemente für Ihren Anwendungsfall geeignet ist (zum Beispiel, wenn Sie Inhalt in einer nicht-proportionalen Schriftart zeigen müssen), sollten Sie überlegen, das {{ HTMLElement("span") }}-Element zu verwenden und es mit CSS nach Wunsch zu stylen. Die {{cssxref("font-family")}} Eigenschaft ist ein guter Einstiegspunkt.

## Attribute

Dieses Element enthält nur die [globalen Attribute](/de/docs/Web/HTML/Reference/Global_attributes)

## Beispiele

### Einfaches Beispiel

Dieses Beispiel verwendet `<tt>`, um Text darzustellen, der in eine Terminalanwendung eingegeben und von dieser ausgegeben wird.

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

Sie können die Standardschriftart des Browsers überschreiben – wenn der Browser es zulässt, was nicht erforderlich ist – indem Sie CSS verwenden:

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

## Verwendungshinweise

Das `<tt>`-Element wird standardmäßig mit der nicht-proportionalen Standardschriftart des Browsers gerendert. Sie können dies mit CSS überschreiben, indem Sie eine Regel mit dem `tt`-Selektor erstellen, wie im Beispiel [Überschreiben der Standardschriftart](#überschreiben_der_standardschriftart) oben gezeigt.

> [!NOTE]
> Vom Nutzer konfigurierte Änderungen an der Standardeinstellung für die Monospace-Schriftart können Ihre CSS-Regeln überschreiben.

Obwohl dieses Element in HTML 4.01 nicht offiziell als veraltet erklärt wurde, wurde seine Nutzung zugunsten der semantischen Elemente und/oder CSS nicht empfohlen. Das `<tt>`-Element ist in HTML 5 obsolet.

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
          >Textinhalt</a
        >, greifbarer Inhalt.
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubter Inhalt</th>
      <td>
        <a href="/de/docs/Web/HTML/Guides/Content_categories#phrasing_content"
          >Textinhalt</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>Keine, sowohl der Anfangs- als auch der Endtag sind obligatorisch.</td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Eltern</th>
      <td>
        Jedes Element, das
        <a href="/de/docs/Web/HTML/Guides/Content_categories#phrasing_content"
          >Textinhalt</a
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

- Die semantischen {{HTMLElement("code")}}, {{HTMLElement("var")}}, {{HTMLElement("kbd")}} und {{HTMLElement("samp")}} Elemente
- Das {{HTMLElement("pre")}}-Element zur Darstellung von vorformatierten Textblöcken
