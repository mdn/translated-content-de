---
title: "<nav>: Das Navigationselement"
slug: Web/HTML/Element/nav
l10n:
  sourceCommit: 9231a7046973685f4600e1891fa644ecce41ef3b
---

{{HTMLSidebar}}

Das **`<nav>`** [HTML](/de/docs/Web/HTML)-Element repräsentiert einen Abschnitt einer Seite, dessen Zweck es ist, Navigationslinks bereitzustellen, entweder innerhalb des aktuellen Dokuments oder zu anderen Dokumenten. Häufige Beispiele für Navigationsabschnitte sind Menüs, Inhaltsverzeichnisse und Indizes.

{{EmbedInteractiveExample("pages/tabbed/nav.html", "tabbed-standard")}}

## Attribute

Dieses Element enthält nur die [globalen Attribute](/de/docs/Web/HTML/Global_attributes).

## Verwendungshinweise

- Es ist nicht notwendig, dass alle Links in einem `<nav>`-Element enthalten sind. `<nav>` ist nur für einen bedeutenden Block von Navigationslinks vorgesehen; typischerweise enthält das {{HTMLElement("footer")}}-Element oft eine Liste von Links, die nicht in einem `<nav>`-Element sein müssen.
- Ein Dokument kann mehrere `<nav>`-Elemente haben, zum Beispiel eines für die Seitennavigation und eines für die Navigation innerhalb der Seite. [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-labelledby) kann in einem solchen Fall verwendet werden, um die Zugänglichkeit zu fördern, siehe [Beispiel](/de/docs/Web/HTML/Element/Heading_Elements#labeling_section_content).
- Benutzeragenten, wie z.B. Bildschirmleser, die sich an behinderte Benutzer richten, können dieses Element verwenden, um zu bestimmen, ob die anfängliche Darstellung von Inhalten nur für die Navigation weggelassen werden soll.

## Beispiele

In diesem Beispiel wird ein `<nav>`-Block verwendet, um eine ungeordnete Liste ({{HTMLElement("ul")}}) von Links zu enthalten. Mit geeignetem CSS kann dies als Seitenleiste, Navigationsleiste oder Dropdown-Menü präsentiert werden.

```html
<nav class="menu">
  <ul>
    <li><a href="#">Home</a></li>
    <li><a href="#">About</a></li>
    <li><a href="#">Contact</a></li>
  </ul>
</nav>
```

Die Semantik des `nav`-Elements besteht darin, Links bereitzustellen. Ein `nav`-Element muss jedoch keine Liste enthalten, es kann auch andere Arten von Inhalten enthalten. In diesem Navigationsblock werden Links im Fließtext bereitgestellt:

```html
<nav>
  <h2>Navigation</h2>
  <p>
    Sie sind auf meiner Startseite. Im Norden liegt <a href="/blog">mein Blog</a>,
    aus dem Schlachtrufe zu hören sind. Im Osten sehen Sie einen großen Berg, auf
    dem viele <a href="/school">Schulunterlagen</a> verstreut sind. Hoch oben
    auf diesem Berg können Sie eine kleine Gestalt sehen, die offenbar ich bin,
    verzweifelt eine <a href="/school/thesis">Abschlussarbeit</a> schreibend.
  </p>
  <p>
    Im Westen gibt es mehrere Ausgänge. Ein lustig aussehender Ausgang ist mit
    "Spiele" beschriftet <a href="https://games.example.com/">.</a> Ein anderer,
    langweilig aussehender Ausgang ist mit <a href="https://isp.example.net/">ISP™</a>
    beschriftet.
  </p>
  <p>
    Im Süden befindet sich eine dunkle und feuchte <a href="/about">Kontaktseite</a>.
    Spinnweben bedecken den ungenutzten Eingang, und an einer Stelle sehen Sie
    eine Ratte schnell aus der Seite laufen.
  </p>
</nav>
```

### Ergebnis

{{EmbedLiveSample('Examples')}}

## Technische Zusammenfassung

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/de/docs/Web/HTML/Content_categories">Inhaltskategorien</a>
      </th>
      <td>
        <a href="/de/docs/Web/HTML/Content_categories#flow_content">Flussinhalt</a>,
        <a href="/de/docs/Web/HTML/Content_categories#sectioning_content">sektionierende Inhalte</a>, spürbarer Inhalt.
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubter Inhalt</th>
      <td>
        <a href="/de/docs/Web/HTML/Content_categories#flow_content">Flussinhalt</a>.
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
        <a href="/de/docs/Web/HTML/Content_categories#flow_content">Flussinhalt</a>
        akzeptiert.
      </td>
    </tr>
    <tr>
      <th scope="row">Implizierte ARIA-Rolle</th>
      <td>
        <code
          ><a href="/de/docs/Web/Accessibility/ARIA/Roles/navigation_role">navigation</a></code
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Zulässige ARIA-Rollen</th>
      <td>Keine <code>role</code> erlaubt</td>
    </tr>
    <tr>
      <th scope="row">DOM-Schnittstelle</th>
      <td>{{domxref("HTMLElement")}}</td>
    </tr>
  </tbody>
</table>

## Spezifikationen

{{Specifications}}

## Browserkompatibilität

{{Compat}}

## Siehe auch

- Andere mit dem Abschnitt verbundene Elemente: {{HTMLElement("body")}}, {{HTMLElement("article")}}, {{HTMLElement("section")}}, {{HTMLElement("aside")}}, {{HTMLElement("Heading_Elements", "h1")}}, {{HTMLElement("Heading_Elements", "h2")}}, {{HTMLElement("Heading_Elements", "h3")}}, {{HTMLElement("Heading_Elements", "h4")}}, {{HTMLElement("Heading_Elements", "h5")}}, {{HTMLElement("Heading_Elements", "h6")}}, {{HTMLElement("hgroup")}}, {{HTMLElement("header")}}, {{HTMLElement("footer")}}, {{HTMLElement("address")}};
- [Abschnitte und Gliederungen eines HTML-Dokuments](/de/docs/Web/HTML/Element/Heading_Elements).
- [ARIA: Navigationsrolle](/de/docs/Web/Accessibility/ARIA/Roles/navigation_role)
