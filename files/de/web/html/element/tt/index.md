---
title: "<tt>: Das Teletype Text-Element"
slug: Web/HTML/Element/tt
l10n:
  sourceCommit: b7955e77cd4293adf45ef23686df50b0305f02ad
---

{{HTMLSidebar}}{{deprecated_header}}

Das **`<tt>`** [HTML](/de/docs/Web/HTML) Element erzeugt Inline-Text, der mit der Standard-Schriftart des {{Glossary("user agent", "User Agents")}} angezeigt wird. Dieses Element wurde erstellt, um Text so darzustellen, wie er auf einem Festbreitendisplay wie einem Fernschreiber, textbasierten Bildschirm oder Zeilendrucker angezeigt würde.

Die Begriffe **nicht-proportional**, **Monotype** und **Monospace** werden austauschbar verwendet und haben im Allgemeinen die gleiche Bedeutung: Sie beschreiben eine Schriftart, deren Zeichen alle die gleiche Anzahl von Pixeln breit sind.

Dieses Element ist jedoch veraltet. Sie sollten die semantisch nützlicheren {{HTMLElement("code")}}, {{HTMLElement("kbd")}}, {{HTMLElement("samp")}}, oder {{HTMLElement("var")}}-Elemente für Inline-Text verwenden, der in Monospace-Typ dargestellt werden muss, oder das {{HTMLElement("pre")}}-Tag für Inhalte, die als separater Block dargestellt werden sollen.

> [!NOTE]
> Wenn keines der semantischen Elemente für Ihren Anwendungsfall geeignet ist (zum Beispiel, wenn Sie Inhalte in einer nicht-proportionalen Schriftart anzeigen müssen), sollten Sie erwägen, das {{ HTMLElement("span") }}-Element zu verwenden und es mit CSS wie gewünscht zu gestalten. Die {{cssxref("font-family")}}-Eigenschaft ist ein guter Ausgangspunkt.

## Attribute

Dieses Element beinhaltet nur die [globalen Attribute](/de/docs/Web/HTML/Global_attributes).

## Beispiele

### Einfaches Beispiel

Dieses Beispiel verwendet `<tt>`, um Text darzustellen, der in eine Terminalanwendung eingegeben und von ihr ausgegeben wird.

```html
<p>
  Geben Sie Folgendes am Telnet-Befehlsaufforderung ein:
  <code>set localecho</code><br />

  Der Telnet-Client sollte anzeigen: <tt>Local Echo is on</tt>
</p>
```

#### Ergebnis

{{EmbedLiveSample("Basic_example", 650, 80)}}

### Überschreiben der Standardschriftart

Sie können die Standardschriftart des Browsers überschreiben - falls der Browser dies zulässt, was er nicht tun muss - indem Sie CSS verwenden:

#### CSS

```css
tt {
  font-family: "Lucida Console", "Menlo", "Monaco", "Courier", monospace;
}
```

#### HTML

```html
<p>
  Geben Sie Folgendes am Telnet-Befehlsaufforderung ein:
  <code>set localecho</code><br />

  Der Telnet-Client sollte anzeigen: <tt>Local Echo is on</tt>
</p>
```

#### Ergebnis

{{EmbedLiveSample("Overriding_the_default_font", 650, 80)}}

## Verwendungshinweise

Das `<tt>`-Element wird standardmäßig mit der nicht-proportionalen Standardschrift des Browsers gerendert. Sie können dies mit CSS überschreiben, indem Sie eine Regel mit dem `tt`-Selektor erstellen, wie im Beispiel [Überschreiben der Standardschriftart](#überschreiben_der_standardschriftart) oben gezeigt.

> [!NOTE]
> Vom Benutzer konfigurierte Änderungen an der Standardeinstellung der Monospace-Schriftart können gegenüber Ihrem CSS Vorrang haben.

Obwohl dieses Element in HTML 4.01 nicht offiziell als veraltet erklärt wurde, wurde die Verwendung zugunsten der semantischen Elemente und/oder CSS entmutigt. Das `<tt>`-Element ist in HTML 5 obsolet.

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
          >Phraseninhalt</a
        >, greifbarer Inhalt.
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubter Inhalt</th>
      <td>
        <a href="/de/docs/Web/HTML/Content_categories#phrasing_content"
          >Phraseninhalt</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>Keine, sowohl der Start- als auch der End-Tag sind erforderlich.</td>
    </tr>
    <tr>
      <th scope="row">Zulässige Eltern</th>
      <td>
        Jedes Element, das
        <a href="/de/docs/Web/HTML/Content_categories#phrasing_content"
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
      <td>{{domxref("HTMLElement")}}</td>
    </tr>
  </tbody>
</table>

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die semantischen {{HTMLElement("code")}}, {{HTMLElement("var")}}, {{HTMLElement("kbd")}}, und {{HTMLElement("samp")}}-Elemente
- Das {{HTMLElement("pre")}}-Element für die Darstellung von vorformatierten Textblöcken
