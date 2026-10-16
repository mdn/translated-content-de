---
title: HTML-Element `<details>` zum Ein- und Ausblenden von Inhalten
short-title: <details>
slug: Web/HTML/Reference/Elements/details
l10n:
  sourceCommit: 44a1a0348720bbd1b1085c7d92b93b4fd311a3dd
---

Das [HTML-Element](/de/docs/Web/HTML) **`<details>`** erstellt ein Widget zum Ein- und Ausblenden von Informationen. Die Informationen sind nur sichtbar, wenn das Widget geöffnet ist. Eine Zusammenfassung oder Beschriftung muss mit dem Element {{HTMLElement("summary")}} bereitgestellt werden.

Ein solches Widget wird auf dem Bildschirm üblicherweise mit einem kleinen Dreieck dargestellt, das sich dreht, um den geöffneten oder geschlossenen Zustand anzuzeigen. Neben dem Dreieck steht eine Beschriftung. Der Inhalt des Elements `<summary>` dient als Beschriftung für das Widget. Der Inhalt von `<details>` stellt die {{Glossary("accessible_description", "zugängliche Beschreibung")}} für `<summary>` bereit.

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
  - : Dieses boolesche Attribut gibt an, ob die Details – also der Inhalt des Elements `<details>` – derzeit sichtbar sind. Die Details werden angezeigt, wenn das Attribut vorhanden ist, und ausgeblendet, wenn es fehlt. Standardmäßig fehlt das Attribut; die Details sind dann nicht sichtbar.

    > [!NOTE]
    > Sie müssen dieses Attribut vollständig entfernen, um die Details auszublenden. `open="false"` macht die Details sichtbar, da es sich um ein boolesches Attribut handelt.

- `name`
  - : Mit diesem Attribut können mehrere `<details>`-Elemente verbunden werden, sodass jeweils nur eines geöffnet sein kann. Dadurch können Entwickler UI-Komponenten wie Akkordeons ohne Skripte erstellen.

    Das Attribut `name` legt einen Gruppennamen fest. Weisen Sie mehreren `<details>`-Elementen denselben `name`-Wert zu, um sie zu gruppieren. Von den gruppierten `<details>`-Elementen kann jeweils nur eines geöffnet sein: Wird eines geöffnet, schließt sich ein anderes. Wenn mehrere gruppierte `<details>`-Elemente das Attribut `open` haben, wird nur das erste in der Reihenfolge des Quellcodes geöffnet dargestellt.

    > [!NOTE]
    > `<details>`-Elemente müssen im Quellcode nicht unmittelbar aufeinanderfolgen, um derselben Gruppe anzugehören.

## Hinweise zur Verwendung

Ein `<details>`-Widget kann sich in einem von zwei Zuständen befinden. Im standardmäßigen _geschlossenen_ Zustand werden nur das Dreieck und die Beschriftung innerhalb von `<summary>` angezeigt (oder eine vom {{Glossary("user_agent", "User Agent")}} festgelegte Standardbeschriftung, wenn kein `<summary>` vorhanden ist).

Wenn Benutzer auf das Widget klicken oder es fokussieren und dann die Leertaste drücken, öffnet es sich und zeigt seinen Inhalt an. Weil zum Anzeigen des Öffnens und Schließens häufig ein sich drehendes Dreieck verwendet wird, werden solche Widgets manchmal „Twisties“ genannt.

Sie können das Widget programmgesteuert öffnen und schließen, indem Sie sein Attribut [`open`](#open) setzen oder entfernen.

### Das Element `<details>` gestalten

Das Element `<details>` lässt sich als Container für zwei Elemente betrachten: das Element `<summary>`, das sowohl im geöffneten als auch im geschlossenen Zustand sichtbar ist, und das Pseudoelement {{cssxref("::details-content")}}, dessen Inhalt im geschlossenen Zustand ausgeblendet ist.

Das Element `<summary>` erhält automatisch den {{cssxref("display")}}-Wert `list-item`. Sie können seine Markierung wie eine Listenmarkierung gestalten, etwa mit {{cssxref("list-style-type")}}, {{cssxref("list-style-position")}} und {{cssxref("::marker")}}. Siehe auch [Das Symbol der Zusammenfassung ändern](/de/docs/Web/HTML/Reference/Elements/summary#changing_the_summarys_icon).

Mit dem Pseudoelement {{cssxref("::details-content")}} können Sie den Übergang zwischen geöffnetem und geschlossenem Zustand animieren. Ein Beispiel finden Sie auf der [Referenzseite zu `::details-content`](/de/docs/Web/CSS/Reference/Selectors/::details-content#transition_example).

### Ereignisse

Zusätzlich zu den üblichen Ereignissen für HTML-Elemente unterstützt das Element `<details>` das Ereignis [`toggle`](/de/docs/Web/API/HTMLElement/toggle_event). Es wird am `<details>`-Element ausgelöst, wenn dessen Zustand zwischen geöffnet und geschlossen wechselt. Das Ereignis wird _nach_ der Zustandsänderung gesendet. Ändert sich der Zustand jedoch mehrmals, bevor der Browser das Ereignis auslösen kann, werden die Ereignisse zusammengefasst, sodass nur eines gesendet wird.

Mit einem Event Listener für das Ereignis `toggle` können Sie erkennen, wann das Widget seinen Zustand ändert:

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

### Einfaches Beispiel zum Ein- und Ausblenden

Dieses Beispiel zeigt ein einfaches `<details>`-Element mit einem `<summary>`.

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

### Ein zunächst geöffnetes Element erstellen

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

### Mehrere benannte Elemente zum Ein- und Ausblenden

Hier werden mehrere `<details>`-Elemente mit demselben Namen verwendet, sodass jeweils nur eines geöffnet sein kann:

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

Nun verwenden wir etwas CSS, um die Darstellung des `<details>`-Elements anzupassen.

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

Dieses CSS erzeugt eine Darstellung ähnlich einer Oberfläche mit Registerkarten: Ein Klick auf die Registerkarte öffnet sie und zeigt ihren Inhalt an.

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

Auf der Seite zu {{htmlelement("summary")}} finden Sie ein [Beispiel zur Anpassung des Widgets](/de/docs/Web/HTML/Reference/Elements/summary#changing_the_summarys_icon).

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
          >Flow content</a
        >, Wurzelelement für Abschnitte, interaktiver Inhalt, wahrnehmbarer Inhalt.
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubter Inhalt</th>
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
      <th scope="row">Erlaubte Elternelemente</th>
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
      <th scope="row">Erlaubte ARIA-Rollen</th>
      <td>Keine <code>role</code> zulässig</td>
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
