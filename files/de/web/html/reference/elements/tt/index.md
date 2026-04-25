---
title: "`<tt>` HTML-Teletype-Text-Element"
short-title: <tt>
slug: Web/HTML/Reference/Elements/tt
l10n:
  sourceCommit: 599ae8b7ad414e91df473d91983f4ffc5cafabb3
---

{{deprecated_header}}

Das **`<tt>`** [HTML](/de/docs/Web/HTML)-Element erstellt Inline-Text, der mit der Standard-Monospace-Schriftart des {{Glossary("user_agent", "User Agents")}} angezeigt wird. Dieses Element wurde mit dem Ziel erstellt, Text so darzustellen, wie er auf einem Display mit fester Breite wie einem Teletype, einem reinen Textbildschirm oder einem Zeilendrucker angezeigt werden würde.

Die Begriffe **nicht-proportional**, **monotype** und **monospace** werden synonym verwendet und haben die gleiche allgemeine Bedeutung: Sie beschreiben einen Schriftartstyp, bei dem alle Zeichen die gleiche Anzahl von Pixeln breit sind.

Dieses Element ist jedoch veraltet. Sie sollten die semantisch nützlicheren Elemente {{HTMLElement("code")}}, {{HTMLElement("kbd")}}, {{HTMLElement("samp")}} oder {{HTMLElement("var")}} verwenden, um Inline-Text darzustellen, der in Monospace-Schrift angezeigt werden muss, oder das {{HTMLElement("pre")}}-Tag für Inhalte, die als separater Block dargestellt werden sollen.

> [!NOTE]
> Wenn keines der semantischen Elemente für Ihren Anwendungsfall geeignet ist (zum Beispiel, wenn Sie Inhalte in einer nicht-proportionalen Schriftart anzeigen müssen), sollten Sie erwägen, das {{ HTMLElement("span") }}-Element zu verwenden und es mit CSS nach Wunsch zu gestalten. Die {{cssxref("font-family")}}-Eigenschaft ist ein guter Ausgangspunkt.

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

### Überschreiben der Standard-Schriftart

Sie können die Standardschriftart des Browsers überschreiben – wenn der Browser es zulässt, was er nicht muss –, indem Sie CSS verwenden:

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

Das `<tt>`-Element wird standardmäßig mit der nicht-proportionalen Standardschriftart des Browsers gerendert. Sie können dies mit CSS überschreiben, indem Sie eine Regel mit dem `tt`-Selektor erstellen, wie im obigen Beispiel [Überschreiben der Standard-Schriftart](#überschreiben_der_standard-schriftart) gezeigt.

> [!NOTE]
> Vom Benutzer konfigurierte Änderungen an den Standard-Monospace-Schrifteinstellungen können Vorrang vor Ihrem CSS haben.

Obwohl dieses Element in HTML 4.01 nicht offiziell als veraltet erklärt wurde, wurde die Verwendung zugunsten der semantischen Elemente und/oder CSS nicht empfohlen. Das `<tt>`-Element ist in HTML 5 obsolet.

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
        >, greifbarer Inhalt.
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubter Inhalt</th>
      <td>
        <a href="/de/docs/Web/HTML/Guides/Content_categories#phrasing_content"
          >Phraseninhalt</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>Keine, sowohl das Start- als auch das End-Tag sind erforderlich.</td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Eltern</th>
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

- Die semantischen {{HTMLElement("code")}}, {{HTMLElement("var")}}, {{HTMLElement("kbd")}} und {{HTMLElement("samp")}} Elemente
- Das {{HTMLElement("pre")}}-Element zur Darstellung von vorformatierten Textblöcken
