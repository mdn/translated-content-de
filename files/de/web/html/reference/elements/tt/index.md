---
title: "<tt>: Das Teletype-Text-Element"
slug: Web/HTML/Reference/Elements/tt
l10n:
  sourceCommit: 9cfc2285428932f448a1747e347b1e35a3e0172b
---

{{deprecated_header}}

Das **`<tt>`** [HTML](/de/docs/Web/HTML)-Element erzeugt einen Inline-Text, der mit der standardmäßigen Monospace-Schriftart des {{Glossary("user_agent", "Benutzeragenten")}} dargestellt wird. Dieses Element wurde geschaffen, um Text so darzustellen, wie er auf einem Festbreitendisplay wie einem Fernschreiber, einem Nur-Text-Bildschirm oder einem Zeilendrucker angezeigt würde.

Die Begriffe **nicht-proportional**, **Monotype** und **Monospace** werden synonym verwendet und haben im Allgemeinen dieselbe Bedeutung: Sie beschreiben eine Schriftart, deren Zeichen alle die gleiche Pixelbreite haben.

Dieses Element ist jedoch veraltet. Sie sollten die semantisch hilfreicheren {{HTMLElement("code")}}, {{HTMLElement("kbd")}}, {{HTMLElement("samp")}} oder {{HTMLElement("var")}} Elemente für Inline-Text verwenden, der in Monospace dargestellt werden muss, oder das {{HTMLElement("pre")}} Tag für Inhalte, die als separater Block präsentiert werden sollen.

> [!NOTE]
> Wenn keines der semantischen Elemente für Ihren Anwendungsfall geeignet ist (zum Beispiel, wenn Sie Inhalte in einer nicht-proportionalen Schrift zeigen müssen), sollten Sie in Betracht ziehen, das {{HTMLElement("span")}} Element zu verwenden und es mit CSS nach Wunsch zu stylen. Die {{cssxref("font-family")}} Eigenschaft ist ein guter Ausgangspunkt.

## Attribute

Dieses Element enthält nur die [globalen Attribute](/de/docs/Web/HTML/Reference/Global_attributes).

## Beispiele

### Einfaches Beispiel

Dieses Beispiel verwendet `<tt>`, um Text anzuzeigen, der in eine Terminalanwendung eingegeben und von dieser ausgegeben wird.

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

Sie können die Standardschriftart des Browsers überschreiben – sofern es der Browser zulässt, was nicht erforderlich ist – indem Sie CSS verwenden:

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

## Hinweise zur Verwendung

Das `<tt>`-Element wird standardmäßig mit der nicht proportionalen Standardschriftart des Browsers dargestellt. Sie können dies mit CSS überschreiben, indem Sie eine Regel für den `tt`-Selektor erstellen, wie im Beispiel [Überschreiben der Standardschriftart](#überschreiben_der_standardschriftart) oben gezeigt.

> [!NOTE]
> Benutzerspezifische Änderungen an der Standardeinstellung für die Monospace-Schrift können Vorrang vor Ihrem CSS haben.

Obwohl dieses Element in HTML 4.01 nicht offiziell als veraltet erklärt wurde, wurde seine Verwendung zugunsten der semantischen Elemente und/oder CSS nicht empfohlen. Das `<tt>`-Element ist in HTML 5 obsolet.

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
          >Fluss-Inhalt</a
        >,
        <a href="/de/docs/Web/HTML/Guides/Content_categories#phrasing_content"
          >Phrasierungs-Inhalt</a
        >, fühlbarer Inhalt.
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubter Inhalt</th>
      <td>
        <a href="/de/docs/Web/HTML/Guides/Content_categories#phrasing_content"
          >Phrasierungs-Inhalt</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>Keine, sowohl das Start- als auch das End-Tag sind obligatorisch.</td>
    </tr>
    <tr>
      <th scope="row">Zulässige Eltern</th>
      <td>
        Jedes Element, das
        <a href="/de/docs/Web/HTML/Guides/Content_categories#phrasing_content"
          >Phrasierungs-Inhalt</a
        >
        akzeptiert.
      </td>
    </tr>
    <tr>
      <th scope="row">Zulässige ARIA-Rollen</th>
      <td>Jede</td>
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
- Das {{HTMLElement("pre")}} Element zur Anzeige von vorformatierten Textblöcken
