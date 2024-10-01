---
title: "<tt>: Das Teletype-Text-Element"
slug: Web/HTML/Element/tt
l10n:
  sourceCommit: b7955e77cd4293adf45ef23686df50b0305f02ad
---

{{HTMLSidebar}}{{deprecated_header}}

Das **`<tt>`** [HTML](/de/docs/Web/HTML)-Element erzeugt Inline-Text, der mit der Standardmonospace-Schriftart des {{Glossary("user_agent", "User-Agent")}}s angezeigt wird. Dieses Element wurde entwickelt, um Text so darzustellen, wie er auf einem Festbreitendisplay wie einem Fernschreiber, einem reinen Textbildschirm oder einem Zeilendrucker angezeigt werden würde.

Die Begriffe **nicht-proportional**, **Monotype** und **Monospace** werden synonym verwendet und haben im Allgemeinen die gleiche Bedeutung: Sie beschreiben eine Schriftart, deren Zeichen alle die gleiche Anzahl von Pixeln breit sind.

Dieses Element ist jedoch veraltet. Sie sollten die semantisch hilfreicheren {{HTMLElement("code")}}, {{HTMLElement("kbd")}}, {{HTMLElement("samp")}}, oder {{HTMLElement("var")}} Elemente für Inline-Text verwenden, der in Monospace-Schrift dargestellt werden muss, oder das {{HTMLElement("pre")}}-Tag für Inhalte, die als separater Block dargestellt werden sollen.

> [!NOTE]
> Wenn keines der semantischen Elemente für Ihren Anwendungsfall geeignet ist (zum Beispiel, wenn Sie einige Inhalte in einer nicht-proportionalen Schrift zeigen müssen), sollten Sie die Verwendung des {{ HTMLElement("span") }}-Elements in Betracht ziehen, indem sie es mit CSS nach Belieben gestalten. Die {{cssxref("font-family")}}-Eigenschaft ist ein guter Ausgangspunkt.

## Attribute

Dieses Element umfasst nur die [globalen Attribute](/de/docs/Web/HTML/Global_attributes)

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

Sie können die Standardschrift des Browsers überschreiben – falls der Browser Ihnen dies erlaubt, was er nicht tun muss – mithilfe von CSS:

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

## Hinweise zur Nutzung

Das `<tt>`-Element wird standardmäßig mit der nicht-proportionalen Standardschriftart des Browsers gerendert. Dies können Sie überschreiben, indem Sie eine CSS-Regel mit dem `tt`-Selektor erstellen, wie im Beispiel [Überschreiben der Standardschriftart](#überschreiben_der_standardschriftart) oben zu sehen ist.

> [!NOTE]
> Vom Benutzer konfigurierte Änderungen der Standardmonospace-Schrifteinstellung können Vorrang vor Ihrem CSS haben.

Obwohl dieses Element in HTML 4.01 nicht offiziell veraltet war, wurde die Verwendung zugunsten der semantischen Elemente und/oder CSS abgeraten. Das `<tt>`-Element ist in HTML 5 veraltet.

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
          >Fließende Inhalte</a
        >,
        <a href="/de/docs/Web/HTML/Content_categories#phrasing_content"
          >Phrasierende Inhalte</a
        >, greifbare Inhalte.
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubter Inhalt</th>
      <td>
        <a href="/de/docs/Web/HTML/Content_categories#phrasing_content"
          >Phrasierende Inhalte</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>Keine, sowohl das Start- als auch das End-Tag sind obligatorisch.</td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Eltern</th>
      <td>
        Jedes Element, das
        <a href="/de/docs/Web/HTML/Content_categories#phrasing_content"
          >phrasierende Inhalte</a
        >akzeptiert.
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
- Das {{HTMLElement("pre")}} Element für die Darstellung von vorformatierten Textblöcken
