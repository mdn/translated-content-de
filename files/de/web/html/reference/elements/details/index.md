---
title: "<details>: Das Details-Disclosure-Element"
slug: Web/HTML/Reference/Elements/details
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{HTMLSidebar}}

Das **`<details>`**-[HTML](/de/docs/Web/HTML)-Element erstellt ein Disclosure-Widget, in dem Informationen nur sichtbar sind, wenn das Widget in einen geöffneten Zustand umgeschaltet wird. Eine Zusammenfassung oder Beschriftung muss mit dem {{HTMLElement("summary")}}-Element bereitgestellt werden.

Ein Disclosure-Widget wird normalerweise auf dem Bildschirm mit einem kleinen Dreieck dargestellt, das sich dreht (oder verdreht), um den geöffneten/geschlossenen Zustand anzuzeigen, mit einer Beschriftung neben dem Dreieck. Der Inhalt des `<summary>`-Elements wird als Beschriftung für das Disclosure-Widget verwendet. Der Inhalt des `<details>` bietet die {{Glossary("accessible_description", "zugängliche Beschreibung")}} für das `<summary>`.

{{InteractiveExample("HTML Demo: &lt;details&gt;", "tabbed-shorter")}}

```html interactive-example
<details>
  <summary>Details</summary>
  Something small enough to escape casual notice.
</details>
```

```css interactive-example
details {
  border: 1px solid #aaa;
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
  border-bottom: 1px solid #aaa;
  margin-bottom: 0.5em;
}
```

Ein `<details>`-Widget kann in einem von zwei Zuständen sein. Der Standardzustand _geschlossen_ zeigt nur das Dreieck und die Beschriftung innerhalb von `<summary>` an (oder eine {{Glossary("user_agent", "User-Agent")}}-definierte Standardzeichenkette, wenn kein `<summary>` vorhanden ist).

Wenn der Benutzer auf das Widget klickt oder es fokussiert und dann die Leertaste drückt, öffnet es sich, indem es "dreht", um seinen Inhalt freizugeben. Die übliche Verwendung eines Dreiecks, das sich dreht oder verdreht, um das Öffnen oder Schließen des Widgets darzustellen, ist der Grund, warum sie manchmal als "Twisty" bezeichnet werden.

Sie können CSS verwenden, um das Disclosure-Widget zu gestalten, und Sie können das Widget programmatisch öffnen und schließen, indem Sie sein [`open`](#open)-Attribut setzen/entfernen. Leider gibt es derzeit keine integrierte Möglichkeit, den Übergang zwischen geöffnet und geschlossen zu animieren.

Standardmäßig ist das Widget im geschlossenen Zustand nur so hoch, dass das Disclosure-Dreieck und die Zusammenfassung angezeigt werden. Im geöffneten Zustand wird es erweitert, um die enthaltenen Details anzuzeigen.

Vollständig dem Standard entsprechende Implementierungen wenden automatisch das CSS `{{cssxref("display")}}: list-item` auf das {{HTMLElement("summary")}}-Element an. Sie können dies oder das {{cssxref("::marker")}}-Pseudoelement verwenden, um [das Disclosure-Widget anzupassen](/de/docs/Web/HTML/Reference/Elements/summary#changing_the_summarys_icon).

## Attribute

Dieses Element enthält die [globalen Attribute](/de/docs/Web/HTML/Reference/Global_attributes).

- `open`

  - : Dieses Boolean-Attribut zeigt an, ob die Details — also der Inhalt des `<details>`-Elements — derzeit sichtbar sind. Die Details werden angezeigt, wenn dieses Attribut vorhanden ist, oder ausgeblendet, wenn es fehlt. Standardmäßig fehlt dieses Attribut, was bedeutet, dass die Details nicht sichtbar sind.

    > [!NOTE]
    > Sie müssen dieses Attribut vollständig entfernen, um die Details zu verbergen. `open="false"` macht die Details sichtbar, da dieses Attribut Boolean ist.

- `name`

  - : Dieses Attribut ermöglicht es, mehrere `<details>`-Elemente zu verbinden, wobei jeweils nur eines geöffnet sein kann. Dies ermöglicht es Entwicklern, UI-Funktionen wie Akkordeons ohne Skripting einfach zu erstellen.

    Das `name`-Attribut gibt einen Gruppennamen an — geben Sie mehreren `<details>`-Elementen denselben `name`-Wert, um sie zu gruppieren. Nur eines der gruppierten `<details>`-Elemente kann gleichzeitig geöffnet sein — das Öffnen eines Elements führt dazu, dass ein anderes geschlossen wird. Wenn mehreren gruppierten `<details>`-Elementen das `open`-Attribut gegeben wird, wird nur das erste in der Quellreihenfolge offen dargestellt.

    > **Hinweis:** `<details>`-Elemente müssen nicht nebeneinander im Quelltext stehen, um Teil derselben Gruppe zu sein.

## Ereignisse

Zusätzlich zu den üblichen von HTML-Elementen unterstützten Ereignissen unterstützt das `<details>`-Element das [`toggle`](/de/docs/Web/API/HTMLElement/toggle_event)-Ereignis, das an das `<details>`-Element gesendet wird, wann immer sich sein Zustand zwischen offen und geschlossen ändert. Es wird _nach_ der Zustandsänderung gesendet, obwohl, wenn sich der Zustand mehrmals ändert, bevor der Browser das Ereignis senden kann, die Ereignisse so zusammengefasst werden, dass nur eines gesendet wird.

Sie können einen Ereignis-Listener für das `toggle`-Ereignis verwenden, um zu erkennen, wann das Widget den Zustand ändert:

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

### Ein einfaches Disclosure-Beispiel

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

### Erstellen einer offenen Disclosure-Box

Um die `<details>`-Box in ihrem geöffneten Zustand zu starten, fügen Sie das Boolean-`open`-Attribut hinzu:

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

### Mehrere benannte Disclosure-Boxen

Wir fügen mehrere `<details>`-Boxen hinzu, alle mit demselben Namen, sodass immer nur eine geöffnet sein kann:

```html
<details name="reqs">
  <summary>Graduation Requirements</summary>
  <p>
    Requires 40 credits, including a passing grade in health, geography,
    history, economics, and wood shop.
  </p>
</details>
<details name="reqs">
  <summary>System Requirements</summary>
  <p>
    Requires a computer running an operating system. The computer must have some
    memory and ideally some kind of long-term storage. An input device as well
    as some form of output device is recommended.
  </p>
</details>
<details name="reqs">
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

Versuchen Sie, alle Disclosure-Widgets zu öffnen. Wenn Sie eines öffnen, schließen sich automatisch alle anderen.

### Anpassung der Darstellung

Lassen Sie uns nun etwas CSS anwenden, um das Erscheinungsbild der Disclosure-Box anzupassen.

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
  background-color: #ddd;
  border: none;
  box-shadow: 3px 3px 4px black;
  cursor: pointer;
}

details > p {
  border-radius: 0 0 10px 10px;
  background-color: #ddd;
  padding: 2px 6px;
  margin: 0;
  box-shadow: 3px 3px 4px black;
}

details:open > summary {
  background-color: #ccf;
}
```

Dieses CSS erzeugt ein Aussehen ähnlich einer Registerkartenoberfläche, bei der das Klicken auf die Registerkarte diese öffnet, um ihren Inhalt anzuzeigen.

> [!NOTE]
> In Browsern, die die {{cssxref(":open")}}-Pseudoklasse nicht unterstützen, können Sie den Attributselektor `details[open]` verwenden, um das `<details>`-Element zu stylen, wenn es im offenen Zustand ist.

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

Sehen Sie sich die {{htmlelement("summary")}}-Seite für ein [Beispiel zur Anpassung des Disclosure-Widgets](/de/docs/Web/HTML/Reference/Elements/summary#changing_the_summarys_icon) an.

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
        >, Abschnittswurzel, interaktiver Inhalt, tastbarer Inhalt.
      </td>
    </tr>
    <tr>
      <th scope="row">Zulässiger Inhalt</th>
      <td>
        Ein {{HTMLElement("summary")}}-Element gefolgt von
        <a href="/de/docs/Web/HTML/Guides/Content_categories#flow_content"
          >Flow-Inhalt</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>Keine, sowohl das Start- als auch das End-Tag sind obligatorisch.</td>
    </tr>
    <tr>
      <th scope="row">Zulässige Eltern</th>
      <td>
        Jedes Element, das
        <a href="/de/docs/Web/HTML/Guides/Content_categories#flow_content"
          >Flow-Inhalt</a
        > akzeptiert.
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
