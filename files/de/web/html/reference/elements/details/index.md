---
title: "`<details>` HTML-Element zur Anzeige zusätzlicher Informationen"
short-title: <details>
slug: Web/HTML/Reference/Elements/details
l10n:
  sourceCommit: bcb7d4dde9f0a43664c64587d9d70b8835286eb7
---

Das **`<details>`**-Element von [HTML](/de/docs/Web/HTML) erstellt ein aufklappbares Widget, dessen Informationen nur im geöffneten Zustand sichtbar sind. Eine Zusammenfassung oder Beschriftung muss mit dem {{HTMLElement("summary")}}-Element angegeben werden.

Ein solches Widget wird auf dem Bildschirm üblicherweise mit einem kleinen Dreieck dargestellt, das sich dreht, um den geöffneten oder geschlossenen Zustand anzuzeigen. Daneben steht eine Beschriftung. Der Inhalt des `<summary>`-Elements dient als Beschriftung des Widgets. Der Inhalt des `<details>`-Elements stellt die {{Glossary("accessible_description", "zugängliche Beschreibung")}} für das `<summary>`-Element bereit.

{{InteractiveExample("HTML Demo: &lt;details&gt;", "tabbed-shorter")}}

```html interactive-example
<details>
  <summary>Details</summary>
  Something small enough to escape casual notice.
</details>
```

```css interactive-example
details {
  border: 1px solid #aaaaaa;
  border-radius: 4px;
  padding: 0.5em 0.5em 0;
}

summary {
  font-weight: bold;
  margin: -0.5em -0.5em 0;
  padding: 0.5em;
}

details[open] {
  padding: 0.5em;
}

details[open] summary {
  border-bottom: 1px solid #aaaaaa;
  margin-bottom: 0.5em;
}
```

## Attribute

Dieses Element unterstützt die [globalen Attribute](/de/docs/Web/HTML/Reference/Global_attributes).

- `open`
  - : Dieses boolesche Attribut gibt an, ob die Details – also der Inhalt des `<details>`-Elements – derzeit sichtbar sind. Ist das Attribut vorhanden, werden die Details angezeigt; fehlt es, bleiben sie verborgen. Standardmäßig fehlt das Attribut, sodass die Details nicht sichtbar sind.

    > [!NOTE]
    > Damit die Details verborgen werden, müssen Sie dieses Attribut vollständig entfernen. `open="false"` macht die Details sichtbar, da es sich um ein boolesches Attribut handelt.

- `name`
  - : Mit diesem Attribut können mehrere `<details>`-Elemente miteinander verknüpft werden, sodass jeweils nur eines geöffnet sein kann. So lassen sich UI-Funktionen wie Akkordeons ohne Skripte erstellen.

    Das `name`-Attribut legt einen Gruppennamen fest. Geben Sie mehreren `<details>`-Elementen denselben `name`-Wert, um sie zu gruppieren. Von den gruppierten `<details>`-Elementen kann jeweils nur eines geöffnet sein: Wird eines geöffnet, schließt sich ein anderes. Wenn mehrere gruppierte `<details>`-Elemente das `open`-Attribut besitzen, wird nur das erste in der Reihenfolge des Quellcodes geöffnet dargestellt.

    > [!NOTE]
    > `<details>`-Elemente müssen im Quellcode nicht unmittelbar nebeneinanderstehen, um zur selben Gruppe zu gehören.

## Verwendungshinweise

Ein `<details>`-Widget kann sich in einem von zwei Zuständen befinden. Im standardmäßigen _geschlossenen_ Zustand werden nur das Dreieck und die Beschriftung innerhalb von `<summary>` angezeigt. Fehlt ein `<summary>`-Element, wird stattdessen eine vom {{Glossary("user_agent", "User Agent")}} festgelegte Standardbeschriftung angezeigt.

Wenn Benutzer auf das Widget klicken oder es fokussieren und anschließend die Leertaste drücken, klappt es auf und zeigt seinen Inhalt. Da das Dreieck beim Öffnen und Schließen gedreht wird, werden solche Widgets manchmal als „Twisty“ bezeichnet.

Sie können das Widget mit CSS gestalten und es programmgesteuert öffnen und schließen, indem Sie sein [`open`](#open)-Attribut setzen oder entfernen. Derzeit gibt es allerdings keine integrierte Möglichkeit, den Übergang zwischen geöffnetem und geschlossenem Zustand zu animieren.

Im geschlossenen Zustand ist das Widget standardmäßig nur so hoch, dass das Dreieck und die Zusammenfassung angezeigt werden. Im geöffneten Zustand erweitert es sich, um die enthaltenen Details anzuzeigen.

Vollständig standardkonforme Implementierungen wenden automatisch die CSS-Eigenschaft `{{cssxref("display")}}: list-item` auf das {{HTMLElement("summary")}}-Element an. Sie können dies oder das Pseudoelement {{cssxref("::marker")}} verwenden, um [das Widget anzupassen](/de/docs/Web/HTML/Reference/Elements/summary#changing_the_summarys_icon).

### Ereignisse

Zusätzlich zu den üblichen Ereignissen, die HTML-Elemente unterstützen, unterstützt das `<details>`-Element das [`toggle`](/de/docs/Web/API/HTMLElement/toggle_event)-Ereignis. Es wird an das `<details>`-Element ausgelöst, wenn dessen Zustand zwischen geöffnet und geschlossen wechselt. Das Ereignis wird _nach_ der Zustandsänderung ausgelöst. Ändert sich der Zustand jedoch mehrmals, bevor der Browser das Ereignis auslösen kann, werden die Ereignisse zusammengefasst, sodass nur eines ausgelöst wird.

Mit einem Event-Listener für das `toggle`-Ereignis können Sie erkennen, wann sich der Zustand des Widgets ändert:

```js
details.addEventListener("toggle", (event) => {
  if (details.open) {
    /* the element was toggled open */
  } else {
    /* the element was toggled closed */
  }
});
```

## Beispiele

### Einfaches Beispiel für aufklappbare Details

Dieses Beispiel zeigt ein einfaches `<details>`-Element mit einem `<summary>`-Element.

```html
<details>
  <summary>System Requirements</summary>
  <p>
    Requires a computer running an operating system. The computer must have some
    memory and ideally some kind of long-term storage. An input device as well
    as some form of output device is recommended.
  </p>
</details>
```

#### Ergebnis

{{EmbedLiveSample("A_basic_disclosure_example", 650, 150)}}

### Ein zunächst geöffnetes `<details>`-Element erstellen

Damit das `<details>`-Element anfangs geöffnet ist, fügen Sie das boolesche Attribut `open` hinzu:

```html
<details open>
  <summary>System Requirements</summary>
  <p>
    Requires a computer running an operating system. The computer must have some
    memory and ideally some kind of long-term storage. An input device as well
    as some form of output device is recommended.
  </p>
</details>
```

#### Ergebnis

{{EmbedLiveSample("Creating_an_open_disclosure_box", 650, 150)}}

### Mehrere benannte `<details>`-Elemente

Dieses Beispiel enthält mehrere `<details>`-Elemente mit demselben Namen, sodass jeweils nur eines geöffnet sein kann:

```html
<details name="requirements">
  <summary>Graduation Requirements</summary>
  <p>
    Requires 40 credits, including a passing grade in health, geography,
    history, economics, and wood shop.
  </p>
</details>
<details name="requirements">
  <summary>System Requirements</summary>
  <p>
    Requires a computer running an operating system. The computer must have some
    memory and ideally some kind of long-term storage. An input device as well
    as some form of output device is recommended.
  </p>
</details>
<details name="requirements">
  <summary>Job Requirements</summary>
  <p>
    Requires knowledge of HTML, CSS, JavaScript, accessibility, web performance,
    privacy, security, and internationalization, as well as a dislike of
    broccoli.
  </p>
</details>
```

#### Ergebnis

{{EmbedLiveSample("Multiple named disclosure boxes", 650, 150)}}

Versuchen Sie, alle Widgets zu öffnen. Wenn Sie eines öffnen, schließen sich alle anderen automatisch.

### Darstellung anpassen

Nun wenden wir etwas CSS an, um die Darstellung des `<details>`-Elements anzupassen.

#### CSS

```css
details {
  font:
    16px "Open Sans",
    "Calibri",
    sans-serif;
  width: 620px;
}

details > summary {
  padding: 2px 6px;
  width: 15em;
  background-color: #dddddd;
  border: none;
  box-shadow: 3px 3px 4px black;
  cursor: pointer;
}

details > p {
  border-radius: 0 0 10px 10px;
  background-color: #dddddd;
  padding: 2px 6px;
  margin: 0;
  box-shadow: 3px 3px 4px black;
}

details:open > summary {
  background-color: #ccccff;
}
```

Dieses CSS erzeugt eine Darstellung ähnlich einer Oberfläche mit Tabs: Wenn Sie auf einen Tab klicken, öffnet er sich und zeigt seinen Inhalt.

> [!NOTE]
> In Browsern, die die Pseudoklasse {{cssxref(":open")}} nicht unterstützen, können Sie den Attributselektor `details[open]` verwenden, um das `<details>`-Element im geöffneten Zustand zu gestalten.

#### HTML

```html
<details>
  <summary>System Requirements</summary>
  <p>
    Requires a computer running an operating system. The computer must have some
    memory and ideally some kind of long-term storage. An input device as well
    as some form of output device is recommended.
  </p>
</details>
```

#### Ergebnis

{{EmbedLiveSample("Customizing_the_appearance", 650, 150)}}

Auf der Seite zum {{htmlelement("summary")}}-Element finden Sie ein [Beispiel zur Anpassung des Widgets](/de/docs/Web/HTML/Reference/Elements/summary#changing_the_summarys_icon).

## Technische Übersicht

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
          >Flow content</a
        >, sectioning root, interactive content, palpable content.
      </td>
    </tr>
    <tr>
      <th scope="row">Zulässiger Inhalt</th>
      <td>
        Ein {{HTMLElement("summary")}}-Element, gefolgt von
        <a href="/de/docs/Web/HTML/Guides/Content_categories#flow_content"
          >Flow content</a
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
        <a href="/de/docs/Web/HTML/Guides/Content_categories#flow_content"
          >Flow content</a
        >
        akzeptiert.
      </td>
    </tr>
    <tr>
      <th scope="row">Implizite ARIA-Rolle</th>
      <td><a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/group_role"><code>group</code></a></td>
    </tr>
    <tr>
      <th scope="row">Zulässige ARIA-Rollen</th>
      <td>Kein <code>role</code> zulässig</td>
    </tr>
    <tr>
      <th scope="row">DOM-Schnittstelle</th>
      <td>[`HTMLDetailsElement`](/de/docs/Web/API/HTMLDetailsElement)</td>
    </tr>
  </tbody>
</table>

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTMLElement("summary")}}
- {{cssxref("::details-content")}}
