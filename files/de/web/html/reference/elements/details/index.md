---
title: HTML-Element `<details>` zur Anzeige zusätzlicher Informationen
short-title: <details>
slug: Web/HTML/Reference/Elements/details
l10n:
  sourceCommit: 7484d45816002fbf082a59c5d95c38a1eb2b2e4b
---

Das **`<details>`**-Element von [HTML](/de/docs/Web/HTML) erstellt ein aufklappbares Steuerelement, dessen Informationen nur im geöffneten Zustand sichtbar sind. Eine Zusammenfassung oder Beschriftung muss mit dem Element {{HTMLElement("summary")}} angegeben werden.

Ein solches Steuerelement wird auf dem Bildschirm normalerweise mit einem kleinen Dreieck dargestellt, das sich dreht, um den geöffneten oder geschlossenen Zustand anzuzeigen. Daneben steht eine Beschriftung. Als Beschriftung dient der Inhalt des Elements `<summary>`. Der Inhalt von `<details>` stellt die {{Glossary("accessible_description", "barrierefrei zugängliche Beschreibung")}} für `<summary>` bereit.

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
  - : Dieses boolesche Attribut gibt an, ob die Details – also der Inhalt des Elements `<details>` – derzeit sichtbar sind. Ist das Attribut vorhanden, werden die Details angezeigt; andernfalls sind sie verborgen. Standardmäßig ist das Attribut nicht vorhanden und die Details sind nicht sichtbar.

    > [!NOTE]
    > Sie müssen dieses Attribut vollständig entfernen, um die Details auszublenden. `open="false"` macht die Details sichtbar, da es sich um ein boolesches Attribut handelt.

- `name`
  - : Mit diesem Attribut können mehrere `<details>`-Elemente zu einer Gruppe verbunden werden, in der jeweils nur eines geöffnet sein kann. So lassen sich UI-Funktionen wie Akkordeons einfach und ohne Skripte erstellen.

    Das Attribut `name` legt einen Gruppennamen fest. Weisen Sie mehreren `<details>`-Elementen denselben `name`-Wert zu, um sie zu gruppieren. Von den gruppierten `<details>`-Elementen kann jeweils nur eines geöffnet sein: Wird eines geöffnet, schließt sich das zuvor geöffnete. Wenn mehrere gruppierte `<details>`-Elemente das Attribut `open` haben, wird nur das erste in der Reihenfolge des Quelltexts geöffnet dargestellt.

    > [!NOTE]
    > `<details>`-Elemente müssen im Quelltext nicht unmittelbar aufeinanderfolgen, um derselben Gruppe anzugehören.

## Verwendungshinweise

Ein `<details>`-Steuerelement kann zwei Zustände annehmen. Im standardmäßigen _geschlossenen_ Zustand werden nur das Dreieck und die Beschriftung innerhalb von `<summary>` angezeigt. Fehlt `<summary>`, wird stattdessen eine vom {{Glossary("user_agent", "User Agent")}} festgelegte Standardbeschriftung angezeigt.

Wenn Benutzer auf das Steuerelement klicken oder es fokussieren und dann die Leertaste drücken, klappt es auf und zeigt seinen Inhalt. Da häufig ein sich drehendes Dreieck das Öffnen und Schließen darstellt, werden solche Steuerelemente manchmal „Twisties“ genannt.

Sie können das Steuerelement auch programmatisch öffnen und schließen, indem Sie sein Attribut [`open`](#open) setzen oder entfernen.

### Gestaltung des `<details>`-Elements

Das `<details>`-Element lässt sich als Container für zwei Elemente betrachten: das `<summary>`-Element, das sowohl im geöffneten als auch im geschlossenen Zustand sichtbar ist, und das Pseudoelement {{cssxref("::details-content")}}, dessen Inhalt im geschlossenen Zustand verborgen ist.

Das `<summary>`-Element erhält automatisch den {{cssxref("display")}}-Wert `list-item`. Seine Markierung lässt sich wie eine Listenmarkierung gestalten, etwa mit {{cssxref("list-style-type")}}, {{cssxref("list-style-position")}} oder {{cssxref("::marker")}}. Siehe auch [Das Symbol der Zusammenfassung ändern](/de/docs/Web/HTML/Reference/Elements/summary#changing_the_summarys_icon).

Mit dem Pseudoelement {{cssxref("::details-content")}} können Sie den Übergang zwischen geöffnetem und geschlossenem Zustand animieren. Ein Beispiel finden Sie auf der [Referenzseite zu `::details-content`](/de/docs/Web/CSS/Reference/Selectors/::details-content#transition_example).

### Ereignisse

Zusätzlich zu den üblichen Ereignissen von HTML-Elementen unterstützt `<details>` das Ereignis [`toggle`](/de/docs/Web/API/HTMLElement/toggle_event). Es wird an das `<details>`-Element gesendet, wenn sich dessen Zustand zwischen geöffnet und geschlossen ändert. Das Ereignis wird _nach_ der Zustandsänderung gesendet. Ändert sich der Zustand jedoch mehrmals, bevor der Browser das Ereignis senden kann, werden die Ereignisse zusammengefasst, sodass nur eines gesendet wird.

Mit einem Event-Listener für das Ereignis `toggle` können Sie erkennen, wann das Steuerelement seinen Zustand ändert:

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

### Einfaches Beispiel für ein aufklappbares Steuerelement

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

### Standardmäßig geöffnetes Steuerelement erstellen

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

### Mehrere benannte Steuerelemente

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

Versuchen Sie, alle Steuerelemente zu öffnen. Wenn Sie eines öffnen, schließen sich alle anderen automatisch.

### Erscheinungsbild anpassen

Dieses Beispiel verwendet CSS, um das Erscheinungsbild des aufklappbaren Steuerelements anzupassen.

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

Dieses CSS erzeugt ein Erscheinungsbild ähnlich einer Oberfläche mit Registerkarten: Ein Klick auf die Registerkarte öffnet sie und zeigt ihren Inhalt.

> [!NOTE]
> In Browsern, die die Pseudoklasse {{cssxref(":open")}} nicht unterstützen, können Sie den Attributselektor `details[open]` verwenden, um das `<details>`-Element im geöffneten Zustand zu gestalten.

#### Ergebnis

{{EmbedLiveSample("Customizing_the_appearance", 650, 150)}}

Auf der Seite zu {{htmlelement("summary")}} finden Sie ein [Beispiel zur Anpassung des aufklappbaren Steuerelements](/de/docs/Web/HTML/Reference/Elements/summary#changing_the_summarys_icon).

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
          >Fließinhalt</a
        >, Wurzelelement für Abschnitte, interaktiver Inhalt, wahrnehmbarer Inhalt.
      </td>
    </tr>
    <tr>
      <th scope="row">Zulässiger Inhalt</th>
      <td>
        Ein {{HTMLElement("summary")}}-Element, gefolgt von
        <a href="/de/docs/Web/HTML/Guides/Content_categories#flow_content"
          >Fließinhalt</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Auslassung von Tags</th>
      <td>Keine; sowohl das öffnende als auch das schließende Tag sind erforderlich.</td>
    </tr>
    <tr>
      <th scope="row">Zulässige Elternelemente</th>
      <td>
        Jedes Element, das
        <a href="/de/docs/Web/HTML/Guides/Content_categories#flow_content"
          >Fließinhalt</a
        >
        zulässt.
      </td>
    </tr>
    <tr>
      <th scope="row">Implizite ARIA-Rolle</th>
      <td><a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/group_role"><code>group</code></a></td>
    </tr>
    <tr>
      <th scope="row">Zulässige ARIA-Rollen</th>
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
