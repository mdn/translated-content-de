---
title: "<time>: Das (Datum) Zeit-Element"
slug: Web/HTML/Element/time
l10n:
  sourceCommit: 835c199410845eed61aaf8439cb2e9719e7e9f98
---

{{HTMLSidebar}}

Das **`<time>`** [HTML](/de/docs/Web/HTML)-Element repräsentiert einen spezifischen Zeitraum. Es kann das Attribut `datetime` enthalten, um Daten in ein maschinenlesbares Format zu übersetzen, was zu besseren Suchmaschinenergebnissen oder benutzerdefinierten Funktionen wie Erinnerungen führen kann.

Es kann eines der folgenden darstellen:

- Eine Zeit auf einer 24-Stunden-Uhr.
- Ein genaues Datum im [Gregorianischen Kalender](https://en.wikipedia.org/wiki/Gregorian_calendar) (mit optionalen Zeit- und Zeitzoneninformationen).
- [Ein gültiger Zeitdauer-String](https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#valid-duration-string).

{{EmbedInteractiveExample("pages/tabbed/time.html", "tabbed-shorter")}}

## Attribute

Wie alle anderen HTML-Elemente unterstützt dieses Element die [globalen Attribute](/de/docs/Web/HTML/Global_attributes).

- `datetime`
  - : Dieses Attribut gibt die Zeit und/oder das Datum des Elements an und muss in einem der unten beschriebenen Formate vorliegen.

## Nutzungshinweise

Dieses Element dient zur Darstellung von Daten und Zeiten in einem maschinenlesbaren Format. Zum Beispiel kann dies einem Benutzeragenten helfen, ein Ereignis dem Kalender eines Benutzers hinzuzufügen.

Dieses Element sollte nicht für Daten vor der Einführung des Gregorianischen Kalenders verwendet werden (aufgrund von Komplikationen bei der Berechnung dieser Daten).

Der _datetime-Wert_ (der maschinenlesbare Wert des Datetime-Wertes) ist der Wert des `datetime`-Attributs des Elements, das im richtigen Format sein muss (siehe unten). Wenn das Element kein `datetime`-Attribut hat, **darf es keine Nachkommen-Elemente haben**, und der _datetime-Wert_ ist der Textinhalt des Elements.

### Gültige datetime-Werte

<table class="no-markdown">
  <thead>
    <tr>
      <th scope="col">Beschreibung</th>
      <th scope="col">Mikrosyntax</th>
      <th scope="col">Beispiele</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Gültiger Monat-String</td>
      <td><code><em>YYYY</em>-<em>MM</em></code></td>
      <td><code>2011-11</code>, <code>2013-05</code></td>
    </tr>
    <tr>
      <td>Gültiger Datums-String</td>
      <td><code><em>YYYY</em>-<em>MM</em>-<em>DD</em></code></td>
      <td><code>1887-12-01</code></td>
    </tr>
    <tr>
      <td>Gültiger Jahrloser Datums-String</td>
      <td><code><em>MM</em>-<em>DD</em></code></td>
      <td><code>11-12</code></td>
    </tr>
    <tr>
      <td>Gültiger Zeit-String</td>
      <td>
        <code><em>HH</em>:<em>MM</em></code><br />
        <code><em>HH</em>:<em>MM</em>:<em>SS</em></code><br />
        <code><em>HH</em>:<em>MM</em>:<em>SS</em>.<em>mmm</em></code>
      </td>
      <td>
        <code>23:59</code><br />
        <code>12:15:47</code><br />
        <code>12:15:52.998</code>
      </td>
    </tr>
    <tr>
      <td>Gültiger lokaler Datum- und Zeit-String</td>
      <td>
        <code><em>YYYY</em>-<em>MM</em>-<em>DD</em><em>HH</em>:<em>MM</em></code><br />
        <code><em>YYYY</em>-<em>MM</em>-<em>DD</em> <em>HH</em>:<em>MM</em>:<em>SS</em></code><br />
        <code><em>YYYY</em>-<em>MM</em>-<em>DD</em> <em>HH</em>:<em>MM</em>:<em>SS</em>.<em>mmm</em></code><br />
        <code><em>YYYY</em>-<em>MM</em>-<em>DD</em>T<em>HH</em>:<em>MM</em></code><br />
        <code><em>YYYY</em>-<em>MM</em>-<em>DD</em>T<em>HH</em>:<em>MM</em>:<em>SS</em></code><br />
        <code><em>YYYY</em>-<em>MM</em>-<em>DD</em>T<em>HH</em>:<em>MM</em>:<em>SS</em>.<em>mmm</em></code>
      </td>
      <td>
        <code>2013-12-25 11:12</code><br />
        <code>1972-07-25 13:43:07</code><br />
        <code>1941-03-15 07:06:23.678</code><br />
        <code>2013-12-25T11:12</code><br />
        <code>1972-07-25T13:43:07</code><br />
        <code>1941-03-15T07:06:23.678</code>
      </td>
    </tr>
    <tr>
      <td>Gültiger Zeitzonen-Offset-String</td>
      <td>
        <code>Z</code><br />
        <code>+<em>HHMM</em></code><br />
        <code>+<em>HH</em>:<em>MM</em></code><br />
        <code>-<em>HHMM</em></code><br />
        <code>-<em>HH</em>:<em>MM</em></code>
      </td>
      <td>
        <code>Z</code><br />
        <code>+0200</code><br />
        <code>+04:30</code><br />
        <code>-0300</code><br />
        <code>-08:00</code>
      </td>
    </tr>
    <tr>
      <td>Gültiger globaler Datum- und Zeit-String</td>
      <td style="max-width:12em">
        Jede Kombination aus einem gültigen lokalen Datum- und Zeit-String gefolgt von einem
        gültigen Zeitzonen-Offset-String
      </td>
      <td>
        <code>2013-12-25 11:12+0200</code><br />
        <code>1972-07-25 13:43:07+04:30</code><br />
        <code>1941-03-15 07:06:23.678Z</code><br />
        <code>2013-12-25T11:12-08:00</code>
      </td>
    </tr>
    <tr>
      <td>Gültiger Wochen-String</td>
      <td><code><em>YYYY</em>-W<em>WW</em></code></td>
      <td><code>2013-W46</code></td>
    </tr>
    <tr>
      <td>Vier oder mehr ASCII-Ziffern</td>
      <td><code><em>YYYY</em></code></td>
      <td><code>2013</code>, <code>0001</code></td>
    </tr>
    <tr>
      <td>Gültiger Dauer-String</td>
      <td>
        <code>P<em>d</em>DT<em>h</em>H<em>m</em>M<em>s</em>S</code><br />
        <code>P<em>d</em>DT<em>h</em>H<em>m</em>M<em>s</em>.<em>X</em>S<br />
        <code>P<em>d</em>DT<em>h</em>H<em>m</em>M<em>s</em>.<em>XX</em>S</code><br />
        <code>P<em>d</em>DT<em>h</em>H<em>m</em>M<em>s</em>.<em>XXX</em>S</code><br />
        <code>PT<em>h</em>H<em>m</em>M<em>s</em>S</code><br />
        <code>PT<em>h</em>H<em>m</em>M<em>s</em>.<em>X</em>S</code><br />
        <code>PT<em>h</em>H<em>m</em>M<em>s</em>.<em>XX</em>S</code><br />
        <code>PT<em>h</em>H<em>m</em>M<em>s</em>.<em>XXX</em>S</code><br />
        <code><em>w</em>w <em>d</em>d <em>h</em>h <em>m</em>m <em>s</em>s</code>
      </td>
      <td>
        <code>P12DT7H12M13S</code><br />
        <code>P12DT7H12M13.3S</code><br />
        <code>P12DT7H12M13.45S</code><br />
        <code>P12DT7H12M13.455S</code><br />
        <code>PT7H12M13S</code><br />
        <code>PT7H12M13.2S</code><br />
        <code>PT7H12M13.56S</code><br />
        <code>PT7H12M13.999S</code><br />
        <code>7d 5h 24m 13s</code>
      </td>
    </tr>
  </tbody>
</table>

## Beispiele

### Einfaches Beispiel

#### HTML

```html
<p>Das Konzert beginnt um <time datetime="2018-07-07T20:00:00">20:00</time>.</p>
```

#### Ergebnis

{{EmbedLiveSample('Simple_example', 250, 80)}}

### `datetime` Beispiel

#### HTML

```html
<p>
  Das Konzert fand am <time datetime="2001-05-15T19:00">15. Mai</time> statt.
</p>
```

#### Ergebnis

{{EmbedLiveSample('datetime_example', 250, 80)}}

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
          >Flussinhalt</a
        >,
        <a href="/de/docs/Web/HTML/Content_categories#phrasing_content"
          >Phrasing-Inhalt</a
        >, palpable content.
      </td>
    </tr>
    <tr>
      <th scope="row">Zulässiger Inhalt</th>
      <td>
        <a href="/de/docs/Web/HTML/Content_categories#phrasing_content"
          >Phrasing-Inhalt</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Weglassen des Tags</th>
      <td>Keine, sowohl der startende als auch der endende Tag sind obligatorisch.</td>
    </tr>
    <tr>
      <th scope="row">Zulässige Eltern</th>
      <td>
        Jedes Element, das
        <a href="/de/docs/Web/HTML/Content_categories#phrasing_content"
          >Phrasing-Inhalt</a
        > akzeptiert.
      </td>
    </tr>
    <tr>
      <th scope="row">Implizite ARIA-Rolle</th>
      <td>
        <code
          ><a href="/de/docs/Web/Accessibility/ARIA/Roles/structural_roles#structural_roles_with_html_equivalents">time</a
          ></code
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Zulässige ARIA-Rollen</th>
      <td>Beliebig</td>
    </tr>
    <tr>
      <th scope="row">DOM-Interface</th>
      <td>{{domxref("HTMLTimeElement")}}</td>
    </tr>
  </tbody>
</table>

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Das {{HTMLElement("data")}}-Element, das die Signalisierung anderer Arten von Werten ermöglicht.
