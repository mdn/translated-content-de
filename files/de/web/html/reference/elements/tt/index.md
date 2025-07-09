---
title: "<tt>: Das Teletype-Text-Element"
slug: Web/HTML/Reference/Elements/tt
l10n:
  sourceCommit: 0754cd805a8e010d2e3a2a065f634a3bcf358252
---

{{deprecated_header}}

Das **`<tt>`** [HTML](/de/docs/Web/HTML)-Element erzeugt einen Inline-Text, der unter Verwendung der Standard-Schriftart des {{Glossary("user_agent", "Benutzeragenten")}} angezeigt wird. Dieses Element wurde entwickelt, um Text so anzuzeigen, wie er auf einem Festbreitendisplay wie einem Fernschreiber, einem Nur-Text-Bildschirm oder einem Zeilendrucker dargestellt werden würde.

Die Begriffe **nicht-proportional**, **Monospace** und **monospace** werden synonym verwendet und haben im Allgemeinen die gleiche Bedeutung: Sie beschreiben eine Schriftart, deren Zeichen alle gleich viele Pixel breit sind.

Dieses Element ist jedoch veraltet. Sie sollten stattdessen die semantisch hilfreicheren Elemente {{HTMLElement("code")}}, {{HTMLElement("kbd")}}, {{HTMLElement("samp")}} oder {{HTMLElement("var")}} für Inline-Text verwenden, der in Monospace-Schrift präsentiert werden muss, oder das {{HTMLElement("pre")}}-Tag für Inhalte, die als separater Block dargestellt werden sollen.

> [!NOTE]
> Wenn keines der semantischen Elemente für Ihren Anwendungsfall geeignet ist (z. B. wenn Sie Inhalte in einer nicht-proportionalen Schriftart darstellen müssen), sollten Sie erwägen, das {{HTMLElement("span")}}-Element zu verwenden und es mit CSS nach Wunsch zu gestalten. Die {{cssxref("font-family")}}-Eigenschaft ist ein guter Ausgangspunkt.

## Attribute

Dieses Element umfasst nur die [globalen Attribute](/de/docs/Web/HTML/Reference/Global_attributes)

## Beispiele

### Einfaches Beispiel

Dieses Beispiel verwendet `<tt>`, um einen Text zu zeigen, der in eine Terminalanwendung eingegeben und von dieser ausgegeben wird.

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

Sie können die Standardschriftart des Browsers überschreiben – wenn der Browser dies zulässt, wozu er nicht verpflichtet ist – indem Sie CSS verwenden:

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

Das `<tt>`-Element wird standardmäßig mit der nicht-proportionalen Standardschrift des Browsers gerendert. Sie können dies mit CSS überschreiben, indem Sie eine Regel mit dem `tt`-Selektor erstellen, wie im Beispiel [Überschreiben der Standardschriftart](#überschreiben_der_standardschriftart) oben gezeigt.

> [!NOTE]
> Vom Benutzer konfigurierte Änderungen an der Monospace-Standardschrift könnten Vorrang vor Ihrem CSS haben.

Obwohl dieses Element in HTML 4.01 nicht offiziell als veraltet eingestuft war, wurde von dessen Verwendung abgeraten, zugunsten der semantischen Elemente und/oder CSS. Das `<tt>`-Element ist in HTML 5 veraltet.

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
          >Flow-Inhalt</a
        >,
        <a href="/de/docs/Web/HTML/Guides/Content_categories#phrasing_content"
          >Phrasing-Inhalt</a
        >, fühlbarer Inhalt.
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubter Inhalt</th>
      <td>
        <a href="/de/docs/Web/HTML/Guides/Content_categories#phrasing_content"
          >Phrasing-Inhalt</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>Keine, sowohl das öffnende als auch das schließende Tag sind erforderlich.</td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Eltern</th>
      <td>
        Jedes Element, das
        <a href="/de/docs/Web/HTML/Guides/Content_categories#phrasing_content"
          >Phrasing-Inhalt</a
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

- Die semantischen {{HTMLElement("code")}}, {{HTMLElement("var")}}, {{HTMLElement("kbd")}}, und {{HTMLElement("samp")}}-Elemente
- Das {{HTMLElement("pre")}}-Element zum Anzeigen von vorformatierten Textblöcken
