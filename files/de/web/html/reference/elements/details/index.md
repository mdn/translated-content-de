---
title: "<details>: Das Details-Element zur Offenlegung"
slug: Web/HTML/Reference/Elements/details
l10n:
  sourceCommit: a1765c2cad20118be0dad322d3548908787b5791
---

Das **`<details>`** [HTML](/de/docs/Web/HTML)-Element erstellt ein Offenlegungs-Widget, bei dem Informationen nur sichtbar sind, wenn das Widget in einen offenen Zustand umgeschaltet wird. Ein Zusammenfassungs- oder Bezeichnungstext muss mit dem {{HTMLElement("summary")}}-Element angegeben werden.

Ein Offenlegungs-Widget wird typischerweise auf dem Bildschirm mit einem kleinen Dreieck dargestellt, das sich dreht (oder dreht), um den offenen/geschlossenen Zustand anzuzeigen, zusammen mit einem Text neben dem Dreieck. Der Inhalt des `<summary>`-Elements wird als Bezeichnung für das Offenlegungs-Widget verwendet. Der Inhalt des `<details>` bietet die {{Glossary("accessible_description", "zugängliche Beschreibung")}} für das `<summary>`.

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

Ein `<details>`-Widget kann in einem von zwei Zuständen sein. Der standardmäßige _geschlossene_ Zustand zeigt nur das Dreieck und die Bezeichnung innerhalb `<summary>` an (oder eine vom {{Glossary("user_agent", "User-Agent")}} definierte Standardzeichenfolge, wenn kein `<summary>` vorhanden ist).

Wenn der Benutzer auf das Widget klickt oder den Fokus darauf legt und dann die Leertaste drückt, „dreht“ es sich auf und zeigt seinen Inhalt. Die übliche Verwendung eines sich drehenden Dreiecks, um das Öffnen oder Schließen des Widgets darzustellen, ist der Grund, warum diese manchmal „Twisty“ genannt werden.

Sie können CSS verwenden, um das Offenlegungs-Widget zu gestalten, und Sie können das Widget programmatisch öffnen und schließen, indem Sie das [`open`](#open)-Attribut setzen/entfernen. Leider gibt es derzeit keine eingebaute Möglichkeit, die Animation zwischen offen und geschlossen zu animieren.

Standardmäßig, wenn es geschlossen ist, ist das Widget nur hoch genug, um das Offenlegungsdreieck und die Zusammenfassung anzuzeigen. Wenn es geöffnet ist, erweitert es sich, um die darin enthaltenen Details anzuzeigen.

Vollständig standardkonforme Implementierungen wenden automatisch die CSS-Regel `{{cssxref("display")}}: list-item` auf das {{HTMLElement("summary")}}-Element an. Sie können dies oder das {{cssxref("::marker")}}-Pseudo-Element verwenden, um [das Offenlegungs-Widget anzupassen](/de/docs/Web/HTML/Reference/Elements/summary#changing_the_summarys_icon).

## Attribute

Dieses Element enthält die [globalen Attribute](/de/docs/Web/HTML/Reference/Global_attributes).

- `open`
  - : Dieses Boolean-Attribut zeigt an, ob die Details - das heißt, die Inhalte des `<details>`-Elements - aktuell sichtbar sind. Die Details werden angezeigt, wenn dieses Attribut existiert, oder versteckt, wenn dieses Attribut fehlt. Standardmäßig fehlt dieses Attribut, was bedeutet, dass die Details nicht sichtbar sind.

    > [!NOTE]
    > Sie müssen dieses Attribut vollständig entfernen, um die Details zu verbergen. `open="false"` macht die Details sichtbar, da dieses Attribut Boolean ist.

- `name`
  - : Dieses Attribut ermöglicht es, mehrere `<details>`-Elemente zu verbinden, wobei jeweils nur eines geöffnet sein kann. Dies ermöglicht es Entwicklern, UI-Funktionen wie Akkordeons ohne Skripting einfach zu erstellen.

    Das `name`-Attribut spezifiziert einen Gruppennamen – geben Sie mehreren `<details>`-Elementen denselben `name`-Wert, um sie zu gruppieren. Nur eines der gruppierten `<details>`-Elemente kann gleichzeitig geöffnet sein – das Öffnen eines verursacht das Schließen eines anderen. Wenn mehreren gruppierten `<details>`-Elementen das `open`-Attribut gegeben wird, wird nur das erste in der Quellreihenfolge geöffnet dargestellt.

    > [!NOTE]
    > `<details>`-Elemente müssen nicht benachbart im Quelltext sein, um zur gleichen Gruppe zu gehören.

## Ereignisse

Zusätzlich zu den üblichen von HTML-Elementen unterstützten Ereignissen unterstützt das `<details>`-Element das [`toggle`](/de/docs/Web/API/HTMLElement/toggle_event)-Ereignis, das an das `<details>`-Element gesendet wird, wann immer sich sein Zustand zwischen offen und geschlossen ändert. Es wird _nach_ der Zustandsänderung gesendet, obwohl, wenn sich der Zustand mehrmals ändert, bevor der Browser das Ereignis senden kann, die Ereignisse zusammengefasst werden, sodass nur eines gesendet wird.

Sie können einen Ereignis-Listener für das `toggle`-Ereignis verwenden, um zu erkennen, wann das Widget seinen Zustand ändert:

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

### Ein grundlegendes Offenlegungsbeispiel

Dieses Beispiel zeigt ein grundlegendes `<details>`-Element mit einem `<summary>`.

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

### Einen geöffneten Offenlegungskasten erstellen

Um die `<details>`-Box von Anfang an im offenen Zustand zu starten, fügen Sie das Boolean-`open`-Attribut hinzu:

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

### Mehrere benannte Offenlegungskästen

Wir fügen mehrere `<details>`-Boxen ein, alle mit demselben Namen, sodass jeweils nur eine geöffnet sein kann:

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

Versuchen Sie, alle Offenlegungs-Widgets zu öffnen. Wenn Sie eines öffnen, schließen sich automatisch alle anderen.

### Anpassung des Erscheinungsbildes

Nun wenden wir etwas CSS an, um das Erscheinungsbild des Offenlegungskastens anzupassen.

#### CSS

```css
details {
  font:
    16px "Open Sans",
    Calibri,
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

Dieses CSS erzeugt einen Look ähnlich einer Registerkartenoberfläche, bei der durch Klicken auf die Registerkarte deren Inhalte angezeigt werden.

> [!NOTE]
> In Browsern, die die {{cssxref(":open")}}-Pseudoklasse nicht unterstützen, können Sie den Attributselektor `details[open]` verwenden, um das `<details>`-Element zu gestalten, wenn es im offenen Zustand ist.

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

Siehe die {{htmlelement("summary")}}-Seite für ein [Beispiel zur Anpassung des Offenlegungs-Widgets](/de/docs/Web/HTML/Reference/Elements/summary#changing_the_summarys_icon).

## Technische Zusammenfassung

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/de/docs/Web/HTML/Guides/Content_categories"
          >Inhaltskategorien</a>
      </th>
      <td>
        <a href="/de/docs/Web/HTML/Guides/Content_categories#flow_content"
          >Flussinhalt</a>, Abschnittswurzel, interaktiver Inhalt, greifbarer Inhalt.
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubter Inhalt</th>
      <td>
        Ein {{HTMLElement("summary")}}-Element gefolgt von
        <a href="/de/docs/Web/HTML/Guides/Content_categories#flow_content"
          >Flussinhalt</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>Keine, sowohl der Start- als auch der End-Tag sind erforderlich.</td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Eltern</th>
      <td>
        Jedes Element, das
        <a href="/de/docs/Web/HTML/Guides/Content_categories#flow_content"
          >Flussinhalt</a>
        akzeptiert.
      </td>
    </tr>
    <tr>
      <th scope="row">Implizite ARIA-Rolle</th>
      <td><a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/group_role"><code>group</code></a></td>
    </tr>
    <tr>
      <th scope="row">Erlaubte ARIA-Rollen</th>
      <td>Keine <code>role</code> erlaubt</td>
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
